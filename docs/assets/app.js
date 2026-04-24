/* Awesome Agent Memory Papers — dashboard */

const FACETS = [
  { key: "category",       label: "Category",       type: "single-list" },
  { key: "benchmark_type", label: "Benchmark Type", type: "single-list" },
  { key: "storage",        label: "Storage",        type: "multi-list" },
  { key: "learning",       label: "Learning",       type: "multi-list" },
  { key: "memory_type",    label: "Memory Type",    type: "multi-list" },
];

const state = {
  papers: [],
  active: {
    category: new Set(),
    benchmark_type: new Set(),
    storage: new Set(),
    learning: new Set(),
    memory_type: new Set(),
    year: new Set(),
    has_code: false,
    has_venue: false,
  },
  query: "",
  sort: "date-desc",
};

// ---------- boot ----------
init().catch((err) => {
  document.getElementById("result-count").textContent =
    "Failed to load papers.json — " + err.message;
  console.error(err);
});

async function init() {
  const res = await fetch("data/papers.json");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  state.papers = data.papers || [];
  resolveRepoLink();
  buildSidebar();
  bindTopbar();
  render();
}

function resolveRepoLink() {
  // github.io/{user}/{repo}/ → github.com/{user}/{repo}
  const m = location.hostname.match(/^([^.]+)\.github\.io$/);
  const parts = location.pathname.split("/").filter(Boolean);
  if (m && parts.length) {
    document.getElementById("gh-link").href =
      `https://github.com/${m[1]}/${parts[0]}`;
  }
}

// ---------- sidebar ----------
function buildSidebar() {
  for (const f of FACETS) {
    const container = document.querySelector(
      `.filter-group[data-facet="${f.key}"] .facet-options`
    );
    container.innerHTML = "";
    const counts = tallyFacet(f.key);
    const values = [...counts.keys()].sort(facetSort(f.key));
    for (const v of values) {
      const id = `${f.key}__${v.replace(/\s+/g, "_")}`;
      const label = document.createElement("label");
      label.className = "chk";
      label.innerHTML = `
        <input type="checkbox" id="${id}" data-facet="${f.key}" data-value="${v}">
        <span>${v}</span>
        <span class="count">${counts.get(v)}</span>
      `;
      container.appendChild(label);
      label.querySelector("input").addEventListener("change", onFacetChange);
    }
  }

  // Year facet.
  const yearContainer = document.querySelector(
    '.filter-group[data-facet="year"] .facet-options'
  );
  yearContainer.innerHTML = "";
  const yearCounts = new Map();
  for (const p of state.papers) {
    if (!p.year) continue;
    yearCounts.set(p.year, (yearCounts.get(p.year) || 0) + 1);
  }
  const years = [...yearCounts.keys()].sort((a, b) => b - a);
  for (const y of years) {
    const label = document.createElement("label");
    label.className = "chk";
    label.innerHTML = `
      <input type="checkbox" data-facet="year" data-value="${y}">
      <span>${y}</span>
      <span class="count">${yearCounts.get(y)}</span>
    `;
    yearContainer.appendChild(label);
    label.querySelector("input").addEventListener("change", onFacetChange);
  }

  // Extras.
  document.querySelectorAll('[data-extra]').forEach((el) => {
    el.addEventListener("change", () => {
      state.active[el.dataset.extra] = el.checked;
      render();
    });
  });

  document.getElementById("clear-filters").addEventListener("click", () => {
    for (const k of Object.keys(state.active)) {
      if (state.active[k] instanceof Set) state.active[k].clear();
      else state.active[k] = false;
    }
    document
      .querySelectorAll(".sidebar input[type=checkbox]")
      .forEach((el) => (el.checked = false));
    document.getElementById("search").value = "";
    state.query = "";
    render();
  });
}

function tallyFacet(key) {
  const counts = new Map();
  for (const p of state.papers) {
    const v = p.tags[key];
    if (!v) continue;
    if (Array.isArray(v)) {
      for (const x of v) counts.set(x, (counts.get(x) || 0) + 1);
    } else {
      counts.set(v, (counts.get(v) || 0) + 1);
    }
  }
  return counts;
}

function facetSort(key) {
  const ord = {
    category: ["Method", "Benchmark", "Survey"],
    benchmark_type: ["QA", "Web", "GUI", "Embodied", "Long-Horizon"],
    storage: ["External", "Internal"],
    learning: ["Prompt-based", "RL-based", "SFT", "Training-free"],
    memory_type: ["Episodic", "Semantic", "Procedural", "Multimodal"],
  };
  const o = ord[key];
  if (!o) return (a, b) => a.localeCompare(b);
  return (a, b) => {
    const ia = o.indexOf(a),
      ib = o.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  };
}

function onFacetChange(e) {
  const { facet, value } = e.target.dataset;
  const set = state.active[facet];
  let v = value;
  if (facet === "year") v = Number(value);
  if (e.target.checked) set.add(v);
  else set.delete(v);
  render();
}

// ---------- topbar ----------
function bindTopbar() {
  const search = document.getElementById("search");
  search.addEventListener("input", () => {
    state.query = search.value.trim().toLowerCase();
    render();
  });
  document.getElementById("sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });
}

// ---------- filtering / sorting ----------
function matches(p) {
  const a = state.active;
  // Category.
  if (a.category.size && !a.category.has(p.tags.category)) return false;
  if (a.benchmark_type.size && !a.benchmark_type.has(p.tags.benchmark_type))
    return false;
  for (const k of ["storage", "learning", "memory_type"]) {
    if (!a[k].size) continue;
    const have = p.tags[k] || [];
    let hit = false;
    for (const v of a[k]) if (have.includes(v)) { hit = true; break; }
    if (!hit) return false;
  }
  if (a.year.size && !a.year.has(p.year)) return false;
  if (a.has_code && !p.code) return false;
  if (a.has_venue && !p.venue) return false;

  if (state.query) {
    const hay = [
      p.title, p.venue, p.authors, p.notes,
      p.tags.category, p.tags.benchmark_type,
      ...(p.tags.storage || []),
      ...(p.tags.learning || []),
      ...(p.tags.memory_type || []),
    ].join(" ").toLowerCase();
    if (!hay.includes(state.query)) return false;
  }
  return true;
}

function sortPapers(arr) {
  const s = state.sort;
  const cmp = {
    "date-desc": (a, b) => (b.date || "").localeCompare(a.date || ""),
    "date-asc":  (a, b) => (a.date || "").localeCompare(b.date || ""),
    "title":     (a, b) => a.title.localeCompare(b.title),
    "venue":     (a, b) => (a.venue || "~").localeCompare(b.venue || "~"),
  }[s];
  return [...arr].sort(cmp);
}

// ---------- render ----------
function render() {
  const filtered = state.papers.filter(matches);
  const sorted = sortPapers(filtered);

  const root = document.getElementById("results");
  const empty = document.getElementById("empty");
  root.innerHTML = "";

  if (!sorted.length) {
    empty.hidden = false;
  } else {
    empty.hidden = true;
    const frag = document.createDocumentFragment();
    for (const p of sorted) frag.appendChild(cardFor(p));
    root.appendChild(frag);
  }

  document.getElementById("result-count").innerHTML =
    `Showing <strong>${sorted.length}</strong> of ${state.papers.length} papers`;
  renderActiveTags();
  updateFacetCounts(filtered);
}

function cardFor(p) {
  const el = document.createElement("article");
  el.className = "card";

  const title = document.createElement("h2");
  title.className = "title";
  if (p.link) {
    const a = document.createElement("a");
    a.href = p.link;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = p.title;
    title.appendChild(a);
  } else {
    title.textContent = p.title;
  }
  el.appendChild(title);

  const meta = document.createElement("div");
  meta.className = "meta";
  if (p.date) meta.insertAdjacentHTML("beforeend", `<span class="date">${p.date}</span>`);
  if (p.venue) meta.insertAdjacentHTML("beforeend", `<span class="venue">${esc(p.venue)}</span>`);
  if (p.authors) meta.insertAdjacentHTML("beforeend", `<span>${esc(p.authors)}</span>`);
  el.appendChild(meta);

  if (p.notes) {
    const n = document.createElement("div");
    n.className = "notes";
    n.textContent = p.notes;
    el.appendChild(n);
  }

  // Tag chips.
  const tagRow = document.createElement("div");
  tagRow.className = "tags";
  const pushChip = (facet, value) => {
    if (!value) return;
    const c = document.createElement("span");
    c.className = `chip facet-${facet}`;
    c.textContent = value;
    c.dataset.facet = facet;
    c.dataset.value = value;
    c.addEventListener("click", () => toggleActive(facet, value));
    c.title = `Filter by ${value}`;
    tagRow.appendChild(c);
  };
  pushChip("category", p.tags.category);
  pushChip("benchmark_type", p.tags.benchmark_type);
  for (const v of p.tags.storage || []) pushChip("storage", v);
  for (const v of p.tags.learning || []) pushChip("learning", v);
  for (const v of p.tags.memory_type || []) pushChip("memory_type", v);
  el.appendChild(tagRow);

  // Action links.
  if (p.link || p.code || p.blog_url) {
    const act = document.createElement("div");
    act.className = "actions";
    if (p.link)
      act.insertAdjacentHTML("beforeend", `<a href="${p.link}" target="_blank" rel="noopener">Paper</a>`);
    if (p.code)
      act.insertAdjacentHTML("beforeend", `<a href="${p.code}" target="_blank" rel="noopener">Code</a>`);
    if (p.blog_url)
      act.insertAdjacentHTML("beforeend", `<a class="blog-link" href="${p.blog_url}" target="_blank" rel="noopener">Blog</a>`);
    el.appendChild(act);
  }
  return el;
}

function toggleActive(facet, value) {
  const s = state.active[facet];
  if (!s) return;
  if (s.has(value)) s.delete(value);
  else s.add(value);
  // Reflect in sidebar checkbox.
  const esc = CSS.escape(String(value));
  const box = document.querySelector(
    `input[data-facet="${facet}"][data-value="${esc}"]`
  );
  if (box) box.checked = s.has(value);
  render();
}

function renderActiveTags() {
  const root = document.getElementById("active-tags");
  root.innerHTML = "";
  const chips = [];
  for (const k of ["category","benchmark_type","storage","learning","memory_type","year"]) {
    for (const v of state.active[k]) chips.push([k, v]);
  }
  if (state.active.has_code) chips.push(["extras", "has code"]);
  if (state.active.has_venue) chips.push(["extras", "has venue"]);
  for (const [k, v] of chips) {
    const c = document.createElement("span");
    c.className = "at-chip";
    c.textContent = v;
    c.addEventListener("click", () => removeActive(k, v));
    root.appendChild(c);
  }
}

function removeActive(k, v) {
  if (k === "extras") {
    if (v === "has code") state.active.has_code = false;
    if (v === "has venue") state.active.has_venue = false;
    document.querySelectorAll("[data-extra]").forEach((el) => {
      if (el.dataset.extra === "has_code" && v === "has code") el.checked = false;
      if (el.dataset.extra === "has_venue" && v === "has venue") el.checked = false;
    });
  } else {
    state.active[k].delete(v);
    const esc = CSS.escape(String(v));
    const box = document.querySelector(`input[data-facet="${k}"][data-value="${esc}"]`);
    if (box) box.checked = false;
  }
  render();
}

/* Update sidebar counts to reflect how many of the currently-filtered
   papers would remain if you toggled that single option, making the
   sidebar a live facet panel. */
function updateFacetCounts(filtered) {
  for (const f of FACETS) {
    const boxes = document.querySelectorAll(
      `.filter-group[data-facet="${f.key}"] input[type=checkbox]`
    );
    boxes.forEach((box) => {
      const v = box.dataset.value;
      // Count papers in `filtered` that would still match this facet=value.
      let n = 0;
      for (const p of filtered) {
        const x = p.tags[f.key];
        if (Array.isArray(x) ? x.includes(v) : x === v) n++;
      }
      const countEl = box.parentElement.querySelector(".count");
      if (countEl) countEl.textContent = n;
      box.parentElement.classList.toggle("is-disabled", n === 0 && !box.checked);
    });
  }
  const yearBoxes = document.querySelectorAll(
    '.filter-group[data-facet="year"] input[type=checkbox]'
  );
  yearBoxes.forEach((box) => {
    const y = Number(box.dataset.value);
    const n = filtered.filter((p) => p.year === y).length;
    const countEl = box.parentElement.querySelector(".count");
    if (countEl) countEl.textContent = n;
    box.parentElement.classList.toggle("is-disabled", n === 0 && !box.checked);
  });
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}
