# Awesome Agent Memory Papers

A curated list of papers on **memory for LLM / multimodal agents** — methods, benchmarks, and surveys — covering episodic, semantic, procedural, and multimodal memory, with both parametric (internal) and retrieval-based (external) storage, learned via prompting, supervised finetuning, or reinforcement learning.

**88 papers** · 6 surveys · 31 benchmarks · 51 methods

Interactive dashboard with multi-tag filtering: **<https://yyyujintang.github.io/Awesome-Agent-Memory-Papers/>**


> Contributions welcome — open an issue or PR with new papers.

## Contents

- [Surveys](#surveys)
- [Benchmarks](#benchmarks)
  - [QA-based Memory Evaluation](#qa-based-memory-evaluation) (5)
  - [Web Navigation](#web-navigation) (7)
  - [Desktop / Mobile GUI](#desktop-mobile-gui) (6)
  - [Embodied & Game Environments](#embodied-game-environments) (6)
  - [General Long-Horizon / Office](#general-long-horizon-office) (7)
- [Methods](#methods)
  - [Multimodal Memory](#multimodal-memory) (16)
  - [Procedural Memory](#procedural-memory) (10)
  - [Episodic Memory](#episodic-memory) (17)
  - [Semantic Memory](#semantic-memory) (2)
  - [Internal / Parametric Memory](#internal-parametric-memory) (4)
  - [Other Methods](#other-methods) (2)
- [Tag Legend](#tag-legend)

## Surveys

- [AI Meets Brain: Memory Systems from Cognitive Neuroscience to Autonomous Agents](https://arxiv.org/abs/2512.23343)  
  *2025-12-29* · [[code]](https://github.com/AgentMemory/Huaman-Agent-Memory)  
  `Survey`
- [Memory in the Age of AI Agents](https://arxiv.org/abs/2512.13564)  
  *2025-12-15* · Shuicheng Yan, Guibin Zhang · [[code]](https://github.com/Shichun-Liu/Agent-Memory-Paper-List)  
  `Survey`
- [Measuring Agents in Production](https://arxiv.org/abs/2512.04123)  
  *2025-12-02* · Shuicheng Yan, Guibin Zhang  
  `Survey`
- [Retrieval Augmented Generation and Understanding in Vision: A Survey and New Outlook](https://arxiv.org/abs/2503.18016)  
  *2025-03-23* · Xuming Hu  
  `Survey`
- [Episodic memory in AI agents poses risks that should be studied and mitigate](https://arxiv.org/abs/2501.11739)  
  *2025-01-20*  
  `Survey`
- [Dual coding of knowledge in the human brain](https://www.sciencedirect.com/science/article/pii/S1364661321001765)  
  *2021-09-08*  
  `Survey`

## Benchmarks

Evaluation suites for agent memory, split by interaction mode.

### QA-based Memory Evaluation

- [KnowMe-Bench: Benchmarking Person Understanding for Lifelong Digital Companions](https://arxiv.org/abs/2601.04745)  
  *2026-01-08*  
  `Benchmark` `QA`
- [Mem-Gallery: Benchmarking Multimodal Long-Term Conversational Memory for MLLM Agents](https://arxiv.org/abs/2601.03515)  
  *2026-01-07*  
  `Benchmark` `QA`
- [Evaluating Memory in LLM Agents via Incremental Multi-Turn Interactions](https://arxiv.org/abs/2507.05257)  
  *2025-07-07* · **ICLR26** · Yuanzhe Hu · [[code]](https://github.com/HUST-AI-HYZ/MemoryAgentBench)  
  `Benchmark` `QA`
- [LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://arxiv.org/abs/2410.10813)  
  *2024-10-14*  
  `Benchmark` `QA`
- (LoCoMo) Evaluating Very Long-Term Conversational Memory of LLM Agents  
  *2024-02-27*  
  `Benchmark` `QA`

### Web Navigation

- WebChoreArena: Evaluating Web Browsing Agents on Realistic Tedious Web Tasks  
  *2025-06-02*  
  `Benchmark` `Web`
- [RealWebAssist: A Benchmark for Long-Horizon Web Assistance with Real-World Users](https://arxiv.org/abs/2504.10445)  
  *2025-04-14*  
  `Benchmark` `Web`
- [The BrowserGym Ecosystem for Web Agent Research](https://arxiv.org/abs/2412.05467)  
  *2024-12-06*  
  `Benchmark` `Web`
- [VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks](https://arxiv.org/abs/2401.13649)  
  *2024-01-24* · **ACL24** · [[code]](https://github.com/web-arena-x/visualwebarena)  
  `Benchmark` `Web`
- [WebArena: A Realistic Web Environment for Building Autonomous Agents](https://arxiv.org/abs/2307.13854)  
  *2023-07-25* · **ICLR24** · Shuyan Zhou, Duke  
  `Benchmark` `Web`
- [Mind2Web: Towards a Generalist Agent for the Web](https://arxiv.org/abs/2306.06070)  
  *2023-06-09* · **NeurIPS23, Spotlight**  
  `Benchmark` `Web`
- [WebShop: Towards Scalable Real-World Web Interaction with Grounded Language Agents](https://arxiv.org/abs/2207.01206)  
  *2022-07-04* · **NeurIPS22** · [[code]](https://github.com/princeton-nlp/WebShop)  
  `Benchmark` `Web`

### Desktop / Mobile GUI

- [Gym-Anything: Turn any Software into an Agent Environment](https://arxiv.org/abs/2604.06126)  
  *2026-04-07*  
  `Benchmark` `GUI`
- [MemGUI-Bench: Benchmarking Memory of Mobile GUI Agents in Dynamic Environments](https://arxiv.org/abs/2602.06075)  
  *2026-02-03* · [[code]](https://github.com/lgy0404/MemGUI-Bench)  
  `Benchmark` `GUI`
- [OS-Marathon: Benchmarking Computer-Use Agents on Long-Horizon Repetitive Tasks](https://arxiv.org/abs/2601.20650)  
  *2026-01-28*  
  `Benchmark` `GUI`
- [LongHorizonUI: A Unified Framework for Robust long-horizon Task Automation of GUI Agent](https://openreview.net/forum?id=BK7Mk5d4WE)  
  *2026-01-26* · **ICLR26**  
  `Benchmark` `GUI`
- [VisualAgentBench: Towards Large Multimodal Models as Visual Foundation Agents](https://arxiv.org/abs/2408.06327)  
  *2024-08-12* · THU-Jie Tang · [[code]](https://github.com/THUDM/VisualAgentBench)  
  `Benchmark` `GUI`
- [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://arxiv.org/abs/2404.07972)  
  *2024-04-11* · **NeurIPS24** · [[code]](https://github.com/xlang-ai/OSWorld)  
  `Benchmark` `GUI`

### Embodied & Game Environments

- [AGENTVISTA: Evaluating Multimodal Agents in Ultra-Challenging Realistic Visual Scenarios](https://arxiv.org/abs/2602.23166)  
  *2026-02-26* · Junxian He, May Fung  
  `Benchmark` `Embodied`
- [MentisOculi: Revealing the Limits of Reasoning with Mental Imagery](https://arxiv.org/abs/2602.02465)  
  *2026-02-02*  
  `Benchmark` `Embodied`
- [CAPTURe: Evaluating Spatial Reasoning in Vision Language Models via Occluded Object Counting](https://arxiv.org/abs/2504.15485)  
  *2025-04-21* · **ICCV25** · Mohit Bansal  
  `Benchmark` `Embodied`
- [ALFWorld: Aligning Text and Embodied Environments for Interactive Learning](https://arxiv.org/abs/2010.03768)  
  *2020-10-08* · **ICLR21**  
  `Benchmark` `Embodied`
- [ALFRED: A Benchmark for Interpreting Grounded Instructions for Everyday Tasks](https://arxiv.org/abs/1912.01734)  
  *2019-12-03* · **CVPR20**  
  `Benchmark` `Embodied`
- [TextWorld: A Learning Environment for Text-based Game](https://arxiv.org/abs/1806.11532)  
  *2018-06-29* · **IJCAI18**  
  `Benchmark` `Embodied`

### General Long-Horizon / Office

- [AMA-Bench: Evaluating Long-Horizon Memory for Agentic Applications](https://arxiv.org/abs/2602.22769)  
  *2026-02-26*  
  `Benchmark` `Long-Horizon`
- [MemoryArena: Benchmarking Agent Memory in Interdependent Multi-Session Agentic Tasks](https://arxiv.org/abs/2602.16313)  
  *2026-02-12* · Yu Wang, Yuanzhe Hu  
  `Benchmark` `Long-Horizon`
- [A Framework for Studying AI Agent Behavior: Evidence from Consumer Choice Experiments](https://arxiv.org/abs/2509.25609)  
  *2025-09-30* · **ICLR26** · Nikhil, ABxLab  
  `Benchmark` `Long-Horizon`
- [OdysseyBench: Evaluating LLM Agents on Long-Horizon Complex Office Application Workflows](https://arxiv.org/abs/2508.09124)  
  *2025-08-12*  
  `Benchmark` `Long-Horizon`
- [TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks](https://arxiv.org/abs/2412.14161)  
  *2024-12-18*  
  `Benchmark` `Long-Horizon`
- [MemSim: A Bayesian Simulator for Evaluating Memory of LLM-based Personal Assistants](https://arxiv.org/abs/2409.20163)  
  *2024-09-30* · **NeurIPS25** · [[code]](https://github.com/nuster1128/MemSim)  
  `Benchmark` `Long-Horizon`
- [AgentBench: Evaluating LLMs as Agents](https://arxiv.org/abs/2308.03688)  
  *2023-08-07* · **ICLR24** · [[code]](https://github.com/THUDM/AgentBench)  
  `Benchmark` `Long-Horizon`

## Methods

Each paper is placed in exactly **one** primary section (Multimodal > Procedural > Episodic > Semantic > External > Internal). Tag badges on each entry show the full tag vector — use the website for true multi-axis filtering.

### Multimodal Memory

- [Omni-SimpleMem: Autoresearch-Guided Discovery of Lifelong Multimodal Agent Memory](https://arxiv.org/abs/2604.01007)  
  *2026-04-01*  
  `Method` `External` `Prompt-based` `Episodic` `Multimodal` `Procedural` `Semantic`
- [Visual Generation Unlocks Human-Like Reasoning through Multimodal World Models](https://arxiv.org/abs/2601.19834)  
  *2026-01-27* · Mingsheng Long  Bytedance Seed  
  `Method` `Internal` `SFT` `Multimodal`
- [MemOCR: Layout-Aware Visual Memory for Efficient Long-Horizon Reasoning](https://arxiv.org/abs/2601.21468)  
  *2026-01-26*  
  `Method` `External` `Prompt-based` `Episodic` `Multimodal`
- [MemVerse: Multimodal Memory for Lifelong Learning Agents](https://arxiv.org/abs/2512.03627)  
  *2025-12-03* · [[code]](https://github.com/KnowledgeXLab/MemVerse)  
  `Method` `External` `Prompt-based` `Episodic` `Multimodal` `Procedural` `Semantic`
- [ViLoMem: Agentic Learner with Grow-and-Refine Multimodal Semantic Memory](https://arxiv.org/abs/2511.21678)  
  *2025-11-26* · **CVPR26** · [[code]](https://github.com/weihao-bo/ViLoMem/tree/main)  
  `Method` `External` `Multimodal` `Semantic`
- [LongVT: Incentivizing "Thinking with Long Videos" via Native Tool Calling](https://arxiv.org/abs/2511.20785)  
  *2025-11-25* · **CVPR26**  
  `Method` `External` `Prompt-based` `Multimodal` `Procedural`
- [VisMem: Latent Vision Memory Unlocks Potential of Vision-Language Models](https://arxiv.org/abs/2511.11007)  
  *2025-11-14* · Dawn Song  
  `Method` `Internal` `SFT` `Multimodal`
- [VAGEN: Reinforcing World Model Reasoning for Multi-Turn VLM Agents](https://arxiv.org/abs/2510.16907)  
  *2025-10-19* · **NeurIPS25** · [[code]](https://github.com/mll-lab-nu/VAGEN)  
  `Method` `Internal` `RL-based` `Episodic` `Multimodal`
- [VideoLucy: Deep Memory Backtracking for Long Video Understanding](https://arxiv.org/abs/2510.12422)  
  *2025-10-14* · **NeurIPS25**  
  `Method` `External` `SFT` `Episodic` `Multimodal`
- [(M3-Agent) Seeing, Listening, Remembering, and Reasoning: A Multimodal Agent with Long-Term Memory](https://arxiv.org/abs/2508.09736)  
  *2025-08-13* · **ICLR26** · ByteDance Seed · [[code]](https://github.com/bytedance-seed/m3-agent)  
  `Method` `External` `SFT` `Episodic` `Multimodal` `Semantic`
- [MAViS: A Multi-Agent Framework for Long-Sequence Video Storytelling](https://arxiv.org/abs/2508.08487)  
  *2025-08-11*  
  `Method` `External` `Prompt-based` `Episodic` `Multimodal`
- [Machine Mental Imagery: Empower Multimodal Reasoning with Latent Visual Token](https://arxiv.org/abs/2506.17218)  
  *2025-06-20* · Chuang Gan · [[code]](https://github.com/UMass-Embodied-AGI/Mirage)  
  `Method` `Internal` `Multimodal`
- [3DLLM-Mem: Long-Term Spatial-Temporal Memory for Embodied 3D Large Language Model](https://arxiv.org/abs/2505.22657)  
  *2025-05-28*  
  `Method` `External` `Prompt-based` `Episodic` `Multimodal` `Semantic`
- [Towards General Continuous Memory for Vision-Language Models](https://arxiv.org/abs/2505.17670)  
  *2025-05-23* · **NeurIPS25**  
  `Method` `External` `Internal` `SFT` `Episodic` `Multimodal` `Semantic`
- [SAM2Act: Integrating Visual Foundation Model with A Memory Architecture for Robotic Manipulation](https://arxiv.org/abs/2501.18564)  
  *2025-01-30* · [[code]](https://github.com/sam2act/sam2act)  
  `Method` `External` `Prompt-based` `Episodic` `Multimodal`
- [Optimus-1: Hybrid Multimodal Memory Empowered Agents Excel in Long-Horizon Tasks](https://arxiv.org/abs/2408.03615)  
  *2024-08-07* · **NeurIPS24** · [[code]](https://github.com/JiuTian-VL/Optimus-1)  
  `Method` `External` `Prompt-based` `Multimodal`

### Procedural Memory

- [A Subgoal-driven Framework for Improving Long-Horizon LLM Agents](https://arxiv.org/abs/2603.19685)  
  *2026-03-20*  
  `Method` `External` `Prompt-based` `Training-free` `Episodic` `Procedural`
- [Plan-MCTS: Plan Exploration for Action Exploitation in Web Navigation](https://arxiv.org/abs/2602.14083)  
  *2026-02-15* · Weinan Zhang  
  `Method` `RL-based` `Procedural`
- [MemSkill: Learning and Evolving Memory Skills for Self-Evolving Agents](https://arxiv.org/abs/2602.02474)  
  *2026-02-02*  
  `Method` `External` `RL-based` `Procedural`
- [TokMem: Tokenized Procedural Memory for Large Language Models](https://arxiv.org/abs/2510.00444)  
  *2025-10-01*  
  `Method` `Internal` `SFT` `Procedural`
- [ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory](https://arxiv.org/abs/2509.25140)  
  *2025-09-29* · **ICLR26** · Siru Ouyang  
  `Method` `External` `Prompt-based` `Episodic` `Procedural`
- [Memory Management and Contextual Consistency for Long-Running Low-Code Agents](https://arxiv.org/abs/2509.25250)  
  *2025-09-27*  
  `Method` `External` `Prompt-based` `Episodic` `Procedural`
- [Memory OS of AI Agent](https://arxiv.org/abs/2506.06326)  
  *2025-05-30* · **EMNLIP25 Main**  
  `Method` `External` `Prompt-based` `Episodic` `Procedural` `Semantic`
- [A-MEM: Agentic Memory for LLM Agents](https://arxiv.org/abs/2502.12110)  
  *2025-02-17* · **NeurIPS25** · [[code]](https://github.com/WujiangXu/A-mem)  
  `Method` `External` `Prompt-based` `Episodic` `Procedural` `Semantic`
- [Agent Workflow Memory (AWM)](https://arxiv.org/abs/2409.07429)  
  *2024-09-11* · **ICML26** · [[code]](https://github.com/zorazrw/agent-workflow-memory)  
  `Method` `External` `Prompt-based` `Procedural`
- [Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control](https://arxiv.org/abs/2306.07863)  
  *2023-06-13* · [[code]](https://github.com/ltzheng/Synapse)  
  `Method` `External` `Prompt-based` `Episodic` `Procedural`

### Episodic Memory

- [PlugMem: A Task-Agnostic Plugin Memory Module for LLM Agents](https://arxiv.org/abs/2603.03296)  
  *2026-02-23* · [[code]](https://github.com/TIMAN-group/PlugMem)  
  `Method` `External` `Prompt-based` `Training-free` `Episodic` `Semantic`
- [Modeling Distinct Human Interaction in Web Agents](https://arxiv.org/abs/2602.17588)  
  *2026-02-19*  
  `Method` `External` `Prompt-based` `Episodic`
- [REMem: Reasoning with Episodic Memory in Language Agent](https://arxiv.org/abs/2602.13530)  
  *2026-02-13* · Yu Su, Huan Sun  
  `Method` `External` `Prompt-based` `Episodic`
- [TraceMem: Weaving Narrative Memory Schemata from User Conversational Traces](https://arxiv.org/abs/2602.09712)  
  *2026-02-10* · HKU  
  `Method` `External` `Prompt-based` `Episodic` `Semantic`
- [Learning to Continually Learn via Meta-learning Agentic Memory Designs](https://arxiv.org/abs/2602.07755)  
  *2026-02-08* · [[code]](https://github.com/zksha/alma)  
  `Method` `External` `RL-based` `Episodic`
- [Dep-Search: Learning Dependency-Aware Reasoning Traces with Persistent Memory](https://arxiv.org/abs/2601.18771)  
  *2026-01-27*  
  `Method` `External` `Prompt-based` `Episodic`
- [Rethinking Memory Mechanisms of Foundation Agents in the Second Half](https://arxiv.org/abs/2602.06052)  
  *2026-01-14*  
  `Method` `External` `Prompt-based` `Episodic` `Semantic`
- CAST: Character-and-Scene Episodic Memory for Agents  
  *2026-01-14*  
  `Method` `External` `Prompt-based` `Episodic`
- [SimpleMem: Efficient Lifelong Memory for LLM Agents](https://arxiv.org/abs/2601.02553)  
  *2026-01-05*  
  `Method` `External` `Prompt-based` `Episodic` `Semantic`
- [Hindsight is 20/20: Building Agent Memory that Retains, Recalls, and Reflects](https://arxiv.org/abs/2512.12818v1)  
  *2025-12-14*  
  `Method` `External` `Prompt-based` `Episodic` `Semantic`
- [A neural network model of free recall learns multiple memory strategies](https://www.biorxiv.org/content/10.1101/2025.09.25.678592v1.abstract)  
  *2025-09-25* · [[code]](https://github.com/Veritaria/rnn-free-recall)  
  `Method` `Internal` `Episodic`
- [PRIME: Large Language Model Personalization with Cognitive Dual-Memory and Personalized Thought Process](https://arxiv.org/abs/2507.04607)  
  *2025-07-07* · **EMNLP25, Main**  
  `Method` `External` `Prompt-based` `Episodic` `Semantic`
- [Ella: Embodied Social Agents with Lifelong Memory](https://arxiv.org/abs/2506.24019)  
  *2025-06-30* · Chuang Gan  
  `Method` `External` `Prompt-based` `Episodic` `Semantic`
- [Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413)  
  *2025-04-28*  
  `Method` `External` `Prompt-based` `Episodic` `Semantic`
- [R3Mem: Bridging Memory Retention and Retrieval via Reversible Compressio n](https://arxiv.org/abs/2502.15957)  
  *2025-02-21*  
  `Method` `External` `Prompt-based` `Episodic`
- [HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models](https://arxiv.org/abs/2405.14831)  
  *2024-05-23* · **NeurIPS24** · Yu Su · [[code]](https://github.com/OSU-NLP-Group/HippoRAG)  
  `Method` `External` `Prompt-based` `Training-free` `Episodic` `Semantic`
- [MemoryBank: Enhancing Large Language Models with Long-Term Memory](https://arxiv.org/abs/2305.10250)  
  *2023-05-17*  
  `Method` `External` `Prompt-based` `Episodic` `Semantic`

### Semantic Memory

- [Explicit v.s. Implicit Memory: Exploring Multi-hop Complex Reasoning Over Personalized Information](https://arxiv.org/abs/2508.13250)  
  *2025-08-15* · **SIGKDD 26** · Zeyu Zhang  
  `Method` `External` `Internal` `Prompt-based` `Semantic`
- [From RAG to Memory: Non-Parametric Continual Learning for Large Language Models  (HippoRAG 2)](https://arxiv.org/abs/2502.14802)  
  *2025-02-20* · **ICML25** · [[code]](https://github.com/OSU-NLP-Group/HippoRAG)  
  `Method` `External` `Internal` `Prompt-based` `Semantic`

### Internal / Parametric Memory

- [When to Memorize and When to Stop: Gated Recurrent Memory for Long-Context Reasoning](https://arxiv.org/abs/2602.10560)  
  *2026-02-11* · Bytedance Seed  
  `Method` `Internal` `SFT`
- [QwenLong-L1.5: Post-Training Recipe for Long-Context Reasoning and Memory Management](https://arxiv.org/abs/2512.12967v1)  
  *2025-12-25*  
  `Method` `Internal` `SFT`
- [MemGen: Weaving Generative Latent Memory for Self-Evolving Agents](https://arxiv.org/abs/2509.24704)  
  *2025-09-29* · Shuicheng Yan, Guibin Zhang · [[code]](https://github.com/KANABOON1/MemGen)  
  `Method` `Internal`
- [Scaling Test-time Compute for LLM Agents](https://arxiv.org/abs/2506.12928)  
  *2025-06-15* · **ICLR26**  
  `Method` `Internal` `Prompt-based`

### Other Methods

- [Agentic Reasoning for Large Language Models](https://arxiv.org/abs/2601.12538)  
  *2026-01-18* · Heng Ji  
  `Method` `Prompt-based` `Training-free`
- [AgentRL: Scaling Agentic Reinforcement Learning with a Multi-Turn, Multi-Task Framework](https://arxiv.org/abs/2510.04206)  
  *2025-10-05* · Jie Tang  
  `Method` `RL-based`

## Tag Legend

| Axis | Values |
|---|---|
| **Category** | `Survey` · `Benchmark` · `Method` |
| **Benchmark Type** | `QA` · `Web` · `GUI` · `Embodied` · `Long-Horizon` |
| **Storage** | `Internal` (parametric — weights / latent tokens) · `External` (non-parametric — retrieval) |
| **Learning** | `Prompt-based` · `RL-based` · `SFT` · `Training-free` |
| **Memory Type** | `Episodic` · `Semantic` · `Procedural` · `Multimodal` |

## Citation

If this list is useful in your work, please consider starring the repo.

