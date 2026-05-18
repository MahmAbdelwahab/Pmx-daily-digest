---
layout: post
title: "A hybrid PKPD agent-based model of the tumour immune interaction: effects of anti-cancer combination therapy"
date: 2026-05-14
authors: "Truong, Van Thuy et al."
journal: "J Pharmacokinet Pharmacodyn 53, 16 (2026)"
doi: "10.1007/s10928-026-10021-2"
paper_type: popk
tags: [popk, oncology, immunology]
excerpt_text: "This paper presents a 3D hybrid multiscale agent-based model (ABM) coupled with ODEs and PDEs to simulate tumor-immune interactions and the effects of radiotherapy, PD-1 antibody, chemotherapy, and DNA damage response inhibitors. It is essential reading for pharmacometricians and clinical pharmacologists working in immuno-oncology who need to understand how spatial heterogeneity, immune context, and treatment sequencing influence combination therapy outcomes. The model provides mechanistic insights into why the timing of interventions relative to immune infiltration can determine success or failure."
pdf_path: "/assets/digests/2026-05-14-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/PMx_A_hybrid_PKPD_agentbased_model_of_the_tu_20260514.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a 3D hybrid multiscale agent-based model (ABM) coupled with ODEs and PDEs to simulate tumor-immune interactions and the effects of radiotherapy, PD-1 antibody, chemotherapy, and DNA damage response inhibitors. It is essential reading for pharmacometricians and clinical pharmacologists working in immuno-oncology who need to understand how spatial heterogeneity, immune context, and treatment sequencing influence combination therapy outcomes. The model provides mechanistic insights into why the timing of interventions relative to immune infiltration can determine success or failure.

---

### Executive Summary
Truong et al. developed a comprehensive hybrid ABM-ODE-PDE framework that integrates cancer cell cycle dynamics, PDL1 expression, immune effector and suppressor cell behavior, oxygen diffusion, and pharmacokinetic-pharmacodynamic modules for four treatment modalities. Using the Gillespie algorithm for stochastic events, the model captures emergent spatial patterns such as immune-cancer cell fronts and exhausted effector cell clustering. Simulations demonstrate that PD-1 antibody efficacy depends on pre-existing immune infiltration, radiotherapy benefits from an established immune response, chemotherapy can reactivate dormant cells, and DNA damage response inhibitors alone only suppress growth. Crucially, combination therapy sequencing is shown to be non-trivial: administering a DNA damage response inhibitor before radiotherapy can reduce immune infiltration and worsen outcomes, while PD-1 antibody given after immune infiltration enhances radiotherapy. This work highlights the value of systems-level modeling for optimizing immuno-oncology regimens.

---

### Scientific Context & Motivation
Traditional ODE-based PKPD models often fail to capture spatial-temporal heterogeneity, cell-cell interactions, and emergent behaviors in the tumor microenvironment (TME). This study addresses the gap by constructing a multiscale model that simultaneously accounts for oxygen gradients, cell cycle phase-specific drug effects, immune exhaustion driven by PDL1-PD1 interaction, and the pharmacokinetics of multiple agents. It provides a platform to explore how the sequence and timing of combination therapies interact with the evolving immune landscape, a question of high clinical relevance but difficult to study empirically.

---

## ⚡ Methodological Snapshot
The model is a 3D hybrid multiscale agent-based framework that couples an ABM of cancer and immune cells with ODEs for drug pharmacokinetics and PDEs for oxygen and drug diffusion. Cancer cells progress through cell cycle phases (G1, S, G2, M, G0) and can express PDL1 stochastically. Immune effector and suppressor cells infiltrate, move, divide, and exhaust according to Gillespie algorithm rates. Treatment modules include a published PKPD model for pembrolizumab, a modified linear-quadratic survival model for radiotherapy with oxygen modification and immune infiltration delay, a docetaxel PK model with exponential resistance, and an $E_{max}$ model for a DNA damage response inhibitor. Simulations explore monotherapy and combination schedules, focusing on the impact of treatment timing relative to immune infiltration.

---

## 🏗️ Structural Model Breakdown
The ABM comprises three agent types: cancer cells (with attributes: PDL1 status, cell cycle phase, time to division), immune effector cells (lifetime, division count, exhaustion status), and immune suppressor cells. Cells reside on a 3D grid and interact locally. Oxygen diffuses from the boundary via a PDE; consumption depends on cell activity. Cancer cell division is stochastic and space-limited; quiescence and necrosis occur under low oxygen. PDL1 expression arises from genetic events and adaptive immune pressure. Immune cells infiltrate randomly, move toward targets, and can exhaust upon contact with PDL1+ cancer cells or suppressors. Treatment modules: PD-1 antibody PK is a multi-compartment ODE system computing receptor occupancy, which modulates exhaustion probability. Radiotherapy applies a survival probability based on a modified linear-quadratic model with oxygen enhancement and induces cell cycle delay; it also triggers delayed immune infiltration proportional to killed cancer cells. Chemotherapy (docetaxel) follows a one-compartment PK model with a kill rate that declines exponentially due to resistance; it affects cells in G2/M phases. DNA damage response inhibitor uses an $E_{max}$ model and targets S-phase cells. Drug concentrations are scaled by the local oxygen gradient to approximate spatial heterogeneity in delivery.

---

### Detailed Methodological Analysis

#### Modeling Approach
Agent-based model on a 3D lattice with 26 neighbors, coupled with ODEs for systemic PK and PDEs for spatial oxygen/drug diffusion. Stochastic events (division, death, mutation, exhaustion) are handled by the Gillespie algorithm. Treatment effects are implemented as deterministic or probabilistic rules based on local drug concentration and cell state.

#### Data Sources
No real patient data were used. Model parameters were taken from literature on tumor growth, cell cycle kinetics, immune infiltration ratios, and published PKPD models for each drug. Initial tumor sizes ranged from 100 to 1000 agents (representing $10^8$ to $10^9$ biological cells).

#### Estimation Methods
Not applicable; parameters were fixed based on literature values. No parameter estimation or model fitting was performed.

#### Model Evaluation
A sensitivity analysis was conducted (reported in supplementary material) to identify influential parameters. Model behavior was assessed through visual inspection of time courses and spatial snapshots. No formal validation against independent data was performed.

#### Covariate Analysis
None.

---

### Statistical Rigor Assessment
The study is exploratory and does not involve statistical inference. The model is stochastic, but the number of simulation replicates is not specified. A sensitivity analysis is mentioned but not detailed in the main text. No formal uncertainty quantification, identifiability analysis, or goodness-of-fit assessment is performed. The lack of calibration to real data limits the ability to assess the reliability of quantitative predictions. The conclusions are qualitative and should be viewed as hypothesis-generating.

---

## 📊 Key Findings
1) PD-1 antibody treatment leads to faster tumor extinction when started later, after more effector cells have infiltrated the TME, despite higher PDL1 positivity. 2) Radiotherapy efficacy is strongly dependent on immune infiltration; combining it with PD-1 antibody after immune establishment can achieve tumor elimination, while early radiotherapy without sufficient immune cells only delays growth. 3) Docetaxel chemotherapy can reactivate quiescent cells, making them susceptible to cell-cycle-specific killing, but resistance eventually emerges. 4) DNA damage response inhibitor monotherapy suppresses but does not eliminate tumors because it does not increase immune infiltration. 5) Sequencing matters: administering a DNA damage response inhibitor before radiotherapy reduces cancer antigenicity and immune infiltration, leading to a detrimental rebound; the reverse sequence also fails to eliminate the tumor. 6) Chemotherapy-induced immune cell depletion can negate the benefit of subsequent radiotherapy.

---

## 💡 Clinical & Regulatory Implications
The simulations suggest that PD-1 inhibitor therapy may be more effective in patients with pre-existing immune infiltration, supporting the use of biomarkers like tumor-infiltrating lymphocytes. Radiotherapy could be optimally sequenced after immunotherapy to capitalize on an established immune response. Chemotherapy-induced immune depletion may reduce the efficacy of subsequent radiotherapy, cautioning against certain sequences. DNA damage response inhibitors might be best used in combination with agents that boost immune infiltration. These insights, while not directly prescriptive, can inform the design of clinical trials testing combination sequences in immuno-oncology.

---

### Strengths & Limitations

#### Strengths
- Integrates multiple treatment modalities (radiotherapy, immunotherapy, chemotherapy, targeted therapy) within a single spatial framework.
- Uses a stochastic agent-based approach to capture heterogeneity and emergent spatial patterns like immune-cancer cell fronts.
- Incorporates cell cycle phases and oxygen-dependent behavior, allowing simulation of phase-specific drug effects and hypoxia.
- Demonstrates the critical role of treatment sequencing through mechanistic simulations, generating testable hypotheses.
- Flexible framework that can be adapted to different tumor types by modifying parameters and rules.

#### Limitations (Acknowledged by Authors)
- Cells are constrained to a regular lattice, which may not reflect irregular tumor architectures and limits cell size/shape heterogeneity.
- Immune cells are simplified to effector and suppressor types, omitting other important populations like NK cells, Tregs, and MDSCs.
- Tumor vasculature is not explicitly modeled; oxygen and drug enter from the periphery, which may not capture heterogeneous perfusion.
- Scaling of agent numbers (1 agent = $10^6$ cells) could introduce inaccuracies in cell-cell interactions.
- No calibration to specific patient or tumor type data; parameters are based on literature assumptions.

#### Limitations (Expert Review)
- The model lacks validation against clinical or even preclinical in vivo data, limiting confidence in quantitative predictions.
- Immune dynamics are highly simplified: no T cell priming, trafficking, cytokine signaling, or antigen presentation.
- Parameter values are largely assumed; sensitivity analysis is mentioned but not detailed in the main text, and no formal uncertainty quantification is performed.
- The PK models for each drug are taken from separate literature sources without integration into a common physiological framework, potentially missing drug-drug interactions.
- The model does not account for tumor evolution and clonal heterogeneity beyond PDL1 status.

#### Generalizability
The model's modular design allows adaptation to different cancer types by adjusting parameters and rules, but its current form is illustrative rather than predictive. With calibration using patient-specific spatial omics data, it could become a tool for personalized schedule optimization.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the agent-based model showing cancer cell, immune effector, and immune suppressor agents with their attributes and actions.
  - *Significance*: Provides an overview of the model's structure and the rules governing cell behavior, essential for understanding the simulation logic.
- **Figure 2**: Time courses of cancer cell count, immune effector cells, suppressor cells, and exhausted effector cells without treatment, plus snapshots of PDL1 expression and immune infiltration.
  - *Significance*: Demonstrates the natural history of tumor-immune interaction, including the emergence of an immunosuppressive TME and the formation of an immune-cancer cell front.
- **Figure 3**: Spatial snapshots of the TME at day 300 showing PDL1+ cancer cells, exhausted effector cells, and oxygen gradient.
  - *Significance*: Visualizes the spatial organization of immune exhaustion and hypoxia, highlighting the model's ability to capture emergent spatial patterns.
- **Figure 4**: PD-1 antibody treatment: PK profiles, receptor occupancy, and tumor growth curves for early (day 100) vs. late (day 200) treatment start, with TME snapshots.
  - *Significance*: Illustrates that later treatment, when more effector cells are present, leads to faster tumor extinction despite higher PDL1 positivity, emphasizing the importance of immune context.
- **Figure 5**: Radiotherapy monotherapy starting at day 50 vs. day 100, showing cancer cell counts and cell cycle phase distributions over time.
  - *Significance*: Shows that radiotherapy is more effective when immune infiltration is higher, and reveals cell cycle delay and redistribution effects.
- **Figure 6**: Docetaxel chemotherapy: drug concentration, kill rate, and tumor growth for different start times, with cell cycle phase dynamics.
  - *Significance*: Demonstrates that chemotherapy can reactivate dormant cells, causing a plateau before further decline, and that resistance eventually emerges.
- **Figure 7**: DNA damage response inhibitor treatment: drug concentration, DNA repair inhibition, tumor growth, and S-phase cell oscillations.
  - *Significance*: Shows that the inhibitor suppresses but does not eliminate the tumor, with characteristic oscillations in S-phase cells due to weekly dosing.
- **Figure 8**: DNA damage response inhibitor effects on exhausted effector cells and immune infiltration rates, with TME snapshot.
  - *Significance*: Reveals that the inhibitor reduces exhaustion by lowering PDL1+ cancer cells but does not increase effector infiltration, explaining incomplete tumor control.
- **Figure 9**: Combination therapies: PD-1 antibody + radiotherapy (early vs. late), DNA damage response inhibitor + radiotherapy, and chemotherapy + radiotherapy.
  - *Significance*: Highlights the critical role of sequencing: early DNA damage response inhibitor before radiotherapy worsens outcome, while PD-1 antibody after immune infiltration enhances radiotherapy.

---

### Future Directions
Future work should focus on calibrating the model to specific cancer types using patient-derived data such as multiregion sequencing, single-cell RNA-seq, and spatial transcriptomics. Incorporating a more detailed immune compartment (e.g., CD8+ T cells, Tregs, cytokines) and explicit vasculature would enhance biological fidelity. The model could be coupled with reinforcement learning algorithms to automatically optimize combination schedules. Validation against clinical trial data, particularly trials testing different sequences of immunotherapy and radiotherapy, would be a critical next step.

---

### Expert Commentary
This paper represents a significant methodological advance in the application of agent-based modeling to pharmacometrics. The integration of PKPD modules with a spatial ABM is not trivial and addresses a real limitation of conventional population PKPD models in oncology. The finding that sequencing can make the difference between tumor control and escape is both intuitive and mechanistically grounded. However, the lack of calibration and validation is a major gap; the simulations are essentially 'what-if' scenarios. The field needs a concerted effort to generate the rich spatial and temporal data required to parameterize such models. Until then, these models serve as excellent teaching tools and hypothesis generators, but their use in regulatory decision-making remains distant. The emphasis on immune context as a determinant of therapy outcome is a valuable reminder that pharmacometrics must embrace systems biology to tackle complex diseases like cancer.

---

### Bottom Line
This hybrid multiscale model convincingly demonstrates that the success of immuno-oncology combination therapies hinges on the dynamic interplay between treatment timing and the evolving immune context of the tumor. For pharmacometricians, it underscores the need to move beyond traditional ODE models and consider spatial and stochastic effects when designing dosing schedules. While not yet ready for clinical prediction, the framework provides a powerful hypothesis-generating engine that can guide preclinical experiments and early-phase trial designs.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-05-14-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-05-14-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-05-14-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-05-14-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-05-14-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_05.png)

![Figure 6]({{ site.baseurl }}/assets/digests/2026-05-14-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_06.png)

![Figure 7]({{ site.baseurl }}/assets/digests/2026-05-14-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_07.png)

![Figure 8]({{ site.baseurl }}/assets/digests/2026-05-14-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_08.png)

![Figure 9]({{ site.baseurl }}/assets/digests/2026-05-14-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_09.png)