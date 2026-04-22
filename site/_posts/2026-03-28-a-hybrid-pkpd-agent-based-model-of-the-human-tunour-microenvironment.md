---
layout: post
title: "A hybrid PKPD agent-based model of the human tunour microenvironment"
date: 2026-03-28
authors: "Van Thuy Truong et al."
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026 Mar 24"
doi: "https://doi.org/10.1007/s10928-026-10021-2"
paper_type: generic
tags: [generic, oncology, immunology]
excerpt_text: "This paper presents a sophisticated 999-agent hybrid multiscale model integrating agent-based modeling (ABM), ordinary differential equations (ODEs), and partial differential equations (PDEs) to simulate tuntour-immune interactions and multiple anticancer treatments. Pharmacometricians working in immuno-oncology, combination therapy optimization, or spatial modeling should read this to understand how mechanistic multisystem integration can reveal emergent behaviors in the tumour microenvironment (TME)."
pdf_path: "/assets/digests/2026-03-28-a-hybrid-pkpd-agent-based-model-of-the-human-tunour-microenvironment/PMx_A_hybrid_PKPD_agentbased_model_of_the_tu_20260328.pdf"
retroactively_classified: true
---

### Quick Take
This paper presents a sophisticated 999-agent hybrid multiscale model integrating agent-based modeling (ABM), ordinary differential equations (ODEs), and partial differential equations (PDEs) to simulate tuntour-immune interactions and multiple anticancer treatments. Pharmacometricians working in immuno-oncology, combination therapy optimization, or spatial modeling should read this to understand how mechanistic multisystem integration can reveal emergent behaviors in the tumour microenvironment (TME).

---

### Executive Summary
Truong's 999-agent team developed a three-dimensional hybrid multiscale model that mechanistically integrates tumour-immune cell interactions, oxygen/drug spatial gradients, cell-cycle dynamics, and four distinct treatment modalities (chemotherapy, radiotherapy, PD1 inhibition, DNA Damage Response inhibitor). By coupling stochastic agent-based rules with deterministic PK/PD ODEs and reaction-diffusion PDEs, the framework captures emergent spatial-temporal phenomena such as immune exhaustion fronts, treatment-induced cell-cycle synchronization, and schedule-dependent synergies. The work demonstrates that treatment efficacy is critically dependent on pre-existing TME states (immune infiltration levels, PDL1 status) and temporal sequencing, providing a computational test-bed for hypothesis generation in combination therapy design.

---

## ⚡ Methodological Snapshot
The core methodology combines three computational paradigms:

1. **Agent-Based Model (ABM)**: 999 agents (representing ~$10^9$ real cells) on a 5D lattice simulate cancer cells (with cell-cycle phases, PDL1 status), immune effector cells, and suppressor cells. Actions (division, movement, killing, exhaustion) are governed by Gillespie-type stochastic rules with rates dependent on neighbor counts and environmental cues.

2. **Partial Differential Equations (PDEs)**: Reaction-diffusion equations model 5D oxygen gradients from tumour boundaries (simulating vascular supply) and drug penetration limitations. Oxygen levels directly trigger transitions between proliferative, quiescent ($G_0$), and necrotic states in ABM agents.

3. **Ordinary Differential Equations (ODEs)**: Mechanistic PK/PD modules for each therapy module (e.g., pembrolizumab receptor occupancy from Lit. [11], docetaxel kill rate from Lit. [30], radiation survival probability from modified linear-quadratic+OER model [6]). Drug concentrations are spatially scaled based on local drug diffusion predictions.

---

## 🏗️ Structural Model Breakdown
The model consists of three interconnected layers:

**Agent Layer**: Each agent has state variables: $(x,y,z)$ location, cell type (cancer/effector/suppressor), cancer-specific attributes (cell-cycle phase $G_0/G_1/S/G_2/M$, PDL1 status, time-to-division), immune cell attributes (exhaustion status, division count, lifetime). Rules govern state transitions: oxygen-dependent quiescence, division (with inheritance of PDL1 status), immune killing (contact-dependent), exhaustion (contact with PDL1+ cancer or suppressor).

**Gradientlayer**: PDEs solve for oxygen concentration $O(x,y,z,t)$ with diffusion coefficient $D_O$, consumption rate by cycling cells (reduced for quiescent), boundary source at tumors periphery. Drug gradient $C_{Drug}(x,y,z,t)$ solved similarly with diffusion and decay.

**Treatment layer**: ODE systems for each drug:
- PD1 Ab: multi-compartment PK (central, peripheral, tumor interstitial, endosomal) + target-mediated drug distribution (TMDD) for PD1 receptor binding [11].
- Radiotherapy: Modified linear-quadratic survival probability incorporating dose, oxygen enhancement factor (OER), cell-cycle phase sensitivity.
- Chemotherapy (docetaxel): Time-dependent kill rate with resistance development (exponential decay of killing parameter) [30].
- DDR Inhibitor: $E_{max}$-type effect on S-phase cells [31].

Coupling: ABM agents query local $O$ and $C_{Drug}$ from PDE solutions at their coordinates. Treatment ODE outputs (e.g., receptor occupancy, kill probability) modulate ABM transition rates.

---

### Detailed Methodological Analysis

#### Modeling Approach
Hybrid multiscale: stochastic ABM (cell scale) + deterministic ODEs (molecule/drug scale) + deterministic PDEs (spatial gradients). Implemented in custom computational platform (language unspecified).

#### Data Sources
No patient data used. All parameter values derived from literature references cited for each module (e.g., cell-cycle durations [23], immune ratios [17-22], PK/PD models [11,30,31]). Simulations represent generic tumors with tunable parameters.

#### Estimation Methods
Not applicable—this is a mechanistic simulation framework using literature-derived parameter values, not a statistical estimation from observed data. Parameters are set based on biological plausibility and previous modeling publications.

#### Model Evaluation
Sensitivity analysis performed (details in supplementary) to identify impactful parameters. Model outputs qualitatively compared to known literature behaviors (e.g., PDL1+ front formation [32-35], radiation-induced synchronization [6], abscopal-like immune recruitment [29]). No formal goodness-of-fit metrics applied.

#### Covariate Analysis
Not performed as no empirical data. However, the framework inherently supports covariate exploration via parameter sweeps (e.g., varying immune infiltration rates, PDL1 mutation rates, drug doses) to simulate inter-patient variability.

---

### Scientific Context & Motivation
Traditional compartmental PK/PD models struggle to represent spatial heterogeneity, cell-to-cell variability, and emergent ecosystems behaviors in cancer. This work addresses the gap between reductionist pharmacometrics and complex cancer biology by building a multiscale framework that explicitly models individual cell behaviors (division, mutation, exhaustion), microenvironmental gradients (oxygen, drug), and molecular-scale drug effects. It tackles the urgent challenge of rational combinatorial regimen sequencing in immuno-oncology, where empirical clincal trial approaches are costly and often miss optimal temporal windows.

---

### Statistical Rigor Assessment
As a mechanistic simulation study without empirical data fitting, traditional statistical rigor (sample size, p-values) is not applicable. Strength lies in comprehensive literature-based parameterization and explicit documentation of assumptions. Limitations include: no uncertainty propagation analyses (e.g., parameter sampling), no formal sensitivity indices reported, deterministic PDE/ODE solutions coupled to stochastic ABM without ensemble averaging. The authors appropriately frame results as illustrative scenarios ('for chosen parameter sets') rather than definitive predictions.

---

## 📊 Key Findings
1. **Immune context dictates PD1 antibody outcome**: Early treatment (day 100, low infiltration) suppressed exhaustion but led to slower extinction (day 535) due to limited cytotoxic effector pool; later treatment (day 200, high infiltration) achieved elimination faster (day 345) by preserving a larger active immue army (Fig. 4).
2. **Radiotherapy efficacy amplified by pre-existing immunity**: Starting radiation at day 100 (high effector count) caused 96% tumor reduction via combined radio-toxicity and immune recruitment; starting at day 50 (low infiltration) only stabilized growth (Fig. 5).
3. **Chemotherapy can reactivate dormant cells**: Docetaxel-induced death freed space/oxygen, pulling quiescent cells into cycle and creating secondary drug-sensitive populations—a double-edged sword (Fig. 6f).
4. **Sequencing is critical in combinations**: PD1 Ab + RT succeeded only when RT followed established immune response (day 100 start); reversing sequence or adding DDRi before RT reduced efficacy by lowering immunogenicity (Fig. 9). DDRi monotherapy suppressed but did not eliminate tumors due to insufficient immunity recruitment (Fig. 8).

---

## 💡 Clinical & Regulatory Implications
The model generates testable hypotheses for translation: (1) Biomarker-driven treatment initiation—PD1 therapy should be reserved for tumors with confirmed T-cell infiltration (via biopsy or imaging); (2) Adaptive sequencing—radiotherapy may be optimally delivered after immune priming (e.g., via vaccination or prior immunotherapy); (3) Dormancy exploitation—chemotherapy scheduling could be designed to capitalize on therapy-induced reactivation of quiescent cells. While not yet validated clinically, the framework supports in silico trial design to prioritize regimens for experimental testing, potentially reducing failed clinical trials in combination oncology.

---

### Strengths & Limitations

#### Strengths
- Multiscale integration successfully combines cell-scale stochasticity with tissue-scale gradients and molecular-scale PD
- Explicit spatial representation captures emergent phenomena missed by ODE-only models (e.g., immune exclusion fronts)
- Modular treatment design allows easy extension to new drug classes
- Transparent documentation of assumptions and literature sources
- Demonstrates critical importance of temporal sequencing in combination therapy

#### Limitations (Acknowledged by Authors)
- Lattice discretization constrains cell size/shape heterogeneity and neighbor interactions
- Immune system is simplified to effector/suppressor dichotomy, omitting specific subtypes and cytokine networks
- Vasculature not explicitly modeled; oxygen/drug entry points are simplified

#### Limitations (Expert Review)
- No formal uncertainty propagation or parameter identifiability analysis
- Scaling factor (1 agent = $10^7$ cells) may distort local cell–cell interaction probabilities
- Lack of patient-specific calibration limits immediate translation to clinical decision-making
- Deterministic PDE/ODE solutions may not capture stochastic fluctuations in small tumor regions

#### Generalizability
The framework is highly generalizable as a conceptual and computational platform. Parameter sets can be tuned to represent different tumor types. However, quantitative predictions require calibration to specific cancer histologies and patient data. The core insights (importance of immune context, sequencing) are likely broadly applicable across epithelial cancers.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the agent-based model showing three agent type attributes and actions
  - *Significance*: Provides essential overview of agent rules and state variables—critical for replicating the ABM logic
- **Figure 2**: Tumor-immune dynamics over time without therapy
  - *Significance*: Demonstrates baseline emergent behavior: immune infiltration, PDL1 induction, exhaustion front formation
- **Figure 3**: Spatial snapshots of TME at simulation end showing immune-cancer interface
  - *Significance*: Visual proof of spatial heterogeneity and immune exclusion patterns predicted by model
- **Figure 4**: PD1ab treatment: PK/PD, receptor occupancy, and tumor dynamics with different start times
  - *Significance*: Key evidence that immune context (infiltration level) determines therapeutic outcome
- **Figure 5**: Radiotherapy effects on cancer cell count and cell-cycle phase distributio
  - *Significance*: Shows radiation-induced synchronization and dependence on pre-existing immune response
- **Figure 6**: Docetaxel treatment: drug concentration, kill rate, resistance, and cell-cycle reactivation
  - *Significance*: Illustrates the double-edged sword of dormancy reactivation by chemo
- **Figure 7**: DDR inhibitor: PK/PD, cell count, and S-phase oscillations
  - *Significance*: Demonstrates phase-specific targeting and limited efficacy without immunity boost
- **Figure 8**: DDR inhibitor impact on exhaustion rates and TME composition
  - *Significance*: Explains failure to eliminate tumors: reduced exhaustion but insufficient immune recruitment
- **Figure 9**: Combination regimens: cell counts and interaction rates for various sequences
  - *Significance*: Central finding: sequencing determines synergy (PD1+RT succeeds only with established immune response)

---

### Future Directions
1. **Patient-specific calibration**: Integrate multiplex immunohistochemistry or spatial transcriptomics to initialize agent states and validate spatial predictions.
2. **Vasculature integration**: Add explicit endothelial cell agents and blood flow dynamics to improve oxygen/drug gradient realism.
3. **Immune expansion**: Incorporate dendritic cells, T-cell priming, and cytokine gradients to model adaptive immune activation.
4. **AI-driven optimization**: Implement reinforcement learning (as cited [46]) to automate schedule optimization for complex combinations.
5. **Experimental validation**: Partner with pre clinical labs to design in vivo studies testing model-generated hypotheses (e.g., optimal RT timing post-immunotherapy).

---

### Expert Commentary
This work represents a significant step toward bridging systems pharmacology and computational pathology. As a practitioner with two decades in pharmacometrics, I see three key teaching points: First, the 'curse of dimensionality' in multiscale modeling is real—every module added (cell cycle, oxygen, four therapies) exponentially increases complexity. The authors managed this well via modularity. Second, the most valuable output isn't the simulation movie but the mechanistic insight: treatment efficacy depends on the dynamic *state* of the TME, not just drug exposure. This challenges static biomarker paradigms. Third, while ABM is powerful for emergence, it trades off statistical rigor for mechanistic plausibility. The field needs hybrid approaches that combine ABM's spatial insight with population modeling's uncertainty framework. This paper is a tutorial in thoughtful model scope definition—knowing what to include (cell cycle phases matter for RT/chemo) and what to exclude (specific cytokines) is an art.

---

### Bottom Line
This hybrid multiscale model is a powerful hypothesis-generation tool that reveals how spatial organization, immune context, and temporal sequencing govern anticancer therapy outcomes. For practicing pharmacometricians, the key takeaway is that reductionist PK/PD models may miss critical emergent behaviors in complex systems like the tumor microenvironment. While not yet ready for direct patient decision support, this type of framework can prioritize combination regimens and schedules for experimental testing, potentially accelerating rational combination therapy development. The work underscores a growing need for pharmacometricians to develop skills in spatial modeling and multiscale integration as oncology moves toward increasingly combinatorial and personalized treatments.

---

---

## 📊 Figures

![Schematic representation of the ABM. There are three types of agents: cancer cells, immune effector cells and immune suppressor cells. The attributes and actions of each type are s]({{ site.baseurl }}/assets/digests/2026-03-28-a-hybrid-pkpd-agent-based-model-of-the-human-tunour-microenvironment/figures/fig_01.jpg)

![Figures 2a–f show the interaction of tumour and immune cells over time]({{ site.baseurl }}/assets/digests/2026-03-28-a-hybrid-pkpd-agent-based-model-of-the-human-tunour-microenvironment/figures/fig_02.jpg)

![Figures 3a – d show the interaction of the cancer cells with the immune system over time and at the end of the simulation. Figure 3: e shows the cell count over time. A movie can b]({{ site.baseurl }}/assets/digests/2026-03-28-a-hybrid-pkpd-agent-based-model-of-the-human-tunour-microenvironment/figures/fig_03.jpg)

![Figures 4a – f show the PKPD of a PD1 antibody treatment and the interaction of tumour and immune cells over time with different treatment schedules]({{ site.baseurl }}/assets/digests/2026-03-28-a-hybrid-pkpd-agent-based-model-of-the-human-tunour-microenvironment/figures/fig_04.jpg)

![Figures 5a – d show the effect of radiotherapy with a weekly dose of 2.5 Gy/day for 5 days/week for 6 weeks starting at day 50 and day 100]({{ site.baseurl }}/assets/digests/2026-03-28-a-hybrid-pkpd-agent-based-model-of-the-human-tunour-microenvironment/figures/fig_05.jpg)

![Figures 6a – f show the chemotherapy treatment with 0.132g docetaxel Q3W with the resulting drug concentration, kill rate, cell count and cell cycle phases]({{ site.baseurl }}/assets/digests/2026-03-28-a-hybrid-pkpd-agent-based-model-of-the-human-tunour-microenvironment/figures/fig_06.jpg)

![Figures 7a –8d show the DNA damage response inhibitor treatment with weekly 210with the resulting pharmacokinetic and pharmacodynamic, cell count, rates of cell interaction, and th]({{ site.baseurl }}/assets/digests/2026-03-28-a-hybrid-pkpd-agent-based-model-of-the-human-tunour-microenvironment/figures/fig_07.jpg)

![Figures7a – 8d show the DNA damage response inhibitor treatment with weekly 210with the resulting pharmacokinetic and pharmacodynamic, cell count, rates of cell interaction, and th]({{ site.baseurl }}/assets/digests/2026-03-28-a-hybrid-pkpd-agent-based-model-of-the-human-tunour-microenvironment/figures/fig_08.jpg)

![Figures 9a – f show different options for combination treatment and their impact on the cell count and cell interaction rates over time]({{ site.baseurl }}/assets/digests/2026-03-28-a-hybrid-pkpd-agent-based-model-of-the-human-tunour-microenvironment/figures/fig_09.jpg)