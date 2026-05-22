---
layout: post
title: "A hybrid PKPD agent-based model of the tumour immune interaction: effects of anti-cancer combination therapy"
date: 2026-05-19
authors: "Truong, Van Thuy et al."
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026, 53, 16"
doi: "10.1007/s10928-026-10021-2"
paper_type: popk
tags: [popk, qsp, oncology, immunology]
excerpt_text: "This paper presents a novel hybrid multiscale agent-based model (ABM) coupled with ODEs and PDEs to simulate tumour-immune interactions and the effects of combination therapies. It is essential reading for pharmacometricians and quantitative systems pharmacology (QSP) scientists interested in spatial-temporal dynamics, treatment sequencing, and the mechanistic underpinnings of immuno-oncology. The model uniquely integrates pharmacokinetics, oxygen diffusion, cell cycle phases, and immune exhaustion to explore emergent behaviours that standard ODE models cannot capture."
pdf_path: "/assets/digests/2026-05-19-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/PMx_A_hybrid_PKPD_agentbased_model_of_the_tu_20260519.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a novel hybrid multiscale agent-based model (ABM) coupled with ODEs and PDEs to simulate tumour-immune interactions and the effects of combination therapies. It is essential reading for pharmacometricians and quantitative systems pharmacology (QSP) scientists interested in spatial-temporal dynamics, treatment sequencing, and the mechanistic underpinnings of immuno-oncology. The model uniquely integrates pharmacokinetics, oxygen diffusion, cell cycle phases, and immune exhaustion to explore emergent behaviours that standard ODE models cannot capture.

---

### Executive Summary
Truong et al. develop a three-dimensional hybrid multiscale model that integrates an agent-based framework for cancer and immune cells with partial differential equations for oxygen and drug diffusion, and ordinary differential equations for systemic pharmacokinetics and pharmacodynamics. The model simulates the tumour microenvironment (TME) with explicit spatial resolution, capturing cell cycle dynamics, PDL1 expression, immune cell infiltration, and exhaustion. Treatment modules for PD-1 antibodies, radiotherapy, chemotherapy (docetaxel), and a DNA damage response inhibitor are incorporated. Through extensive simulations, the authors demonstrate that treatment efficacy is highly dependent on the temporal sequencing of therapies and the state of the immune infiltrate. Key findings include the observation that early PD-1 blockade can be less effective than later administration due to insufficient effector cell infiltration, and that chemotherapy can reactivate dormant cells, making them susceptible to treatment. The work provides a powerful in silico platform for hypothesis testing regarding combination therapy scheduling, highlighting the critical role of immune contexture in therapeutic outcomes.

---

### Scientific Context & Motivation
The problem addressed is the inability of traditional ordinary differential equation (ODE)-based pharmacokinetic-pharmacodynamic (PKPD) models to capture the spatial heterogeneity, cell-cell interactions, and emergent behaviours within the tumour microenvironment (TME). Knowledge gaps include a mechanistic understanding of how treatment sequencing in combination therapies (e.g., immunotherapy with radiotherapy or chemotherapy) leads to synergistic or antagonistic effects. The model challenges the paradigm of using non-spatial, population-average models for complex immuno-oncology by providing a rule-based, bottom-up approach that explicitly simulates spatial gradients of oxygen and drug, cell cycle phase-specific drug effects, and adaptive immune resistance.

---

## ⚡ Methodological Snapshot
The authors developed a three-dimensional hybrid multiscale model that combines an agent-based model (ABM) for discrete cell interactions with partial differential equations (PDEs) for continuous oxygen and drug diffusion, and ordinary differential equations (ODEs) for systemic pharmacokinetics. The ABM simulates cancer cells, immune effector cells, and immune suppressor cells on a 3D lattice, with rules governing cell cycle progression, division, mutation, PDL1 expression, movement, and death. Treatment effects are integrated via ODE-based PKPD modules for pembrolizumab, docetaxel, and a DNA damage response inhibitor, while a modified linear-quadratic model handles radiotherapy. The Gillespie algorithm is used to stochastically select cellular actions based on defined rates.

---

## 🏗️ Structural Model Breakdown
The model comprises three integrated layers: (1) An agent-based layer on a 3D lattice where cancer cells, immune effector cells, and immune suppressor cells are individual agents. Cancer cells have attributes for cell cycle phase (G1, S, G2, M, G0), PDL1 expression status, and oxygen consumption. Immune cells have attributes for lifespan, division count, and exhaustion status. Rules govern cell division, death, movement, and state transitions based on local oxygen concentration and interactions with neighbouring cells. (2) A PDE layer that models the diffusion of oxygen and drug from the periphery of the lattice, creating spatial gradients. The oxygen concentration at each lattice point determines whether cancer cells proliferate, become quiescent, or die. (3) An ODE layer for systemic PK of administered drugs (pembrolizumab, docetaxel, DNA damage response inhibitor), which feeds into the local drug concentration PDE and determines cell kill probabilities. The PD-1 antibody module includes a receptor occupancy model that modulates the effector cell exhaustion rate. Radiotherapy effects are modelled with a modified linear-quadratic survival probability that accounts for oxygen enhancement and cell cycle phase sensitivity.

---

### Detailed Methodological Analysis

#### Modeling Approach
A hybrid multiscale agent-based model (ABM) integrated with ordinary differential equations (ODEs) and partial differential equations (PDEs). The ABM handles discrete agents (cancer and immune cells) on a 3D lattice, while PDEs model the continuous diffusion of oxygen and drug. ODEs are used for systemic PK of therapeutic agents. The Gillespie algorithm governs the stochastic selection of cellular events. The model is implemented in custom software, though the specific programming language is not explicitly stated in the main text.

#### Data Sources
No real patient data were used. The model is parameterized using values from the literature for cell cycle durations, oxygen consumption rates, drug PK parameters, and immune cell dynamics. Tumour sizes are scaled such that 1 agent represents $10^6$ cells, with simulations starting from 100 agents (representing a $0.1$ $cm^3$ tumour).

#### Estimation Methods
This is a simulation study; no parameter estimation from data was performed. Model parameters were fixed based on literature values or assumptions. The Gillespie algorithm is used for stochastic simulation of cellular events.

#### Model Evaluation
Model evaluation is primarily qualitative, through visual comparison of simulated TME snapshots and cell population dynamics with expected biological behaviours (e.g., formation of an immune front, PDL1 expression at the tumour-immune interface). A sensitivity analysis was performed (reported in supplementary materials) to identify parameters influencing tumour-immune dynamics. No formal statistical model evaluation (e.g., VPC, bootstrap) was conducted as no data were fitted.

#### Covariate Analysis
Not applicable. As a simulation study without patient data, no covariate analysis was performed. However, the model's flexible parameterization allows for the simulation of different tumour 'phenotypes' by altering parameters such as immune infiltration rate, PDL1 mutation rate, and drug sensitivity.

---

### Statistical Rigor Assessment
As a purely simulation-based study with no statistical inference on real data, traditional statistical rigor metrics (sample size justification, handling of missing data, etc.) are not applicable. The study's scientific rigor lies in the mechanistic plausibility of its rule set and the qualitative reproduction of known biological phenomena (e.g., immune front formation, adaptive PDL1 expression). A sensitivity analysis was performed to explore the parameter space, which is a crucial step for ABMs with many parameters, though its details are relegated to the supplementary material. The lack of formal uncertainty quantification or global sensitivity analysis (e.g., Latin Hypercube Sampling with Partial Rank Correlation Coefficients) is a limitation for assessing the robustness of the reported emergent behaviours.

---

## 📊 Key Findings
The primary findings demonstrate that treatment outcomes are exquisitely sensitive to the timing of intervention relative to the immune landscape. For PD-1 antibody therapy, later administration (day 200) led to faster tumour extinction (day 345) than earlier administration (day 100, extinction at day 535) due to a larger pre-existing effector cell pool. Radiotherapy alone could reduce tumour burden by 96% but was followed by relapse due to PDL1-mediated immune exhaustion. Chemotherapy with docetaxel showed a biphasic response where initial cell kill reactivated dormant cells, creating a plateau before resistance emerged. A DNA damage response inhibitor suppressed but did not eliminate the tumour, as it failed to increase immune infiltration. Critically, combination therapy simulations revealed that sequencing is paramount: administering a DNA damage response inhibitor before radiotherapy was detrimental because it reduced tumour antigenicity and immune infiltration prior to radiation-induced immune stimulation.

---

## 💡 Clinical & Regulatory Implications
The model provides a theoretical framework to support clinical decision-making in immuno-oncology, particularly regarding treatment sequencing. The finding that PD-1 blockade is more effective when a sufficient immune infiltrate is present supports the use of biomarkers like tumour-infiltrating lymphocytes (TILs) to guide immunotherapy timing. The detrimental effect of administering a DNA damage response inhibitor before radiotherapy suggests that reducing tumour burden and antigenicity can blunt the immunostimulatory effects of radiation, cautioning against certain combination sequences. While not directly prescriptive, the model generates testable hypotheses for clinical trial design, such as evaluating the optimal window for combining checkpoint inhibitors with radiation or chemotherapy based on immune monitoring.

---

### Strengths & Limitations

#### Strengths
- Innovative integration of an agent-based model with ODEs and PDEs to capture multiscale dynamics from systemic PK to cellular interactions.
- Explicit modelling of spatial oxygen and drug gradients, cell cycle phases, and adaptive PDL1 expression, enabling observation of emergent behaviours.
- Comprehensive treatment modules (immunotherapy, chemotherapy, radiotherapy, DNA damage response inhibitor) allow for realistic combination therapy simulations.
- Demonstrates the critical importance of treatment sequencing and immune contexture, providing mechanistic hypotheses for clinical observations.
- Rule-based, stochastic framework is highly flexible and can be adapted to different tumour types or extended with new biological modules.

#### Limitations (Acknowledged by Authors)
- The model uses a rigid lattice structure, constraining cell size, shape, and movement to discrete positions, which may not fully capture in vivo tumour architecture.
- Immune cells are simplified into only effector and suppressor types, omitting other critical populations like regulatory T cells, natural killer cells, and myeloid-derived suppressor cells.
- Tumour vasculature is not explicitly modelled; oxygen and drug diffuse from the periphery, and immune cells infiltrate randomly, which oversimplifies angiogenesis and extravasation processes.
- The model is not calibrated to a specific cancer type or patient data, and all simulations use assumed parameter sets.

#### Limitations (Expert Review)
- The scaling factor of 1 agent representing $10^6$ biological cells, while computationally necessary, may obscure fine-grained cellular interactions and stochastic effects at the single-cell level.
- The immune cell infiltration model is phenomenological and lacks mechanistic detail on chemokine gradients, T cell priming in lymph nodes, and trafficking.
- The chemotherapy resistance model is a simple exponential decline in kill rate, which may not capture the complex, multi-factorial nature of clinical drug resistance.
- No formal sensitivity or identifiability analysis is presented in the main text for the large parameter space, making it difficult to assess the robustness of the qualitative conclusions.
- The model does not account for tumour evolution or the emergence of resistant clones beyond the simple resistance parameter.

#### Generalizability
The model's generalizability is currently limited by its lack of calibration to specific clinical data. However, its modular and rule-based design makes it a highly flexible platform. With appropriate parameterization using patient-specific biopsy data (e.g., spatial distribution of immune cells, PDL1 status), the framework could be adapted to generate personalized predictions. The qualitative insights regarding treatment sequencing and immune infiltration are likely generalizable across solid tumour types, but quantitative predictions would require rigorous calibration.

---

### Key Equations

**Oxygen Consumption Rate**

{% raw %}
$$
k_{o}
$$
{% endraw %}

The rate at which actively dividing cancer cells consume oxygen in the tumour microenvironment.

**Quiescent Cell Oxygen Consumption Factor**

{% raw %}
$$
q_{c}
$$
{% endraw %}

A factor reducing the oxygen consumption rate for quiescent (dormant) cancer cells compared to actively dividing cells.

**Docetaxel Dose Calculation**

{% raw %}
$$
\text{Dose} = 75   \text{mg/m}^2 \times 1.75   \text{m}^2
$$
{% endraw %}

Calculation of the docetaxel dose based on a body surface area of $1.75$ $m^2$ and a standard dose of $75$ $mg/m^2$.

**DNA Damage Response Inhibitor Dose**

{% raw %}
$$
\text{Dose} = 210   \text{mg/m}^2
$$
{% endraw %}

The weekly dose of the DNA damage response inhibitor used in the simulations.

---

### Figures & Tables

- **Figure 1**: Schematic overview of the agent-based model, summarizing the attributes and actions of cancer cells, immune effector cells, and immune suppressor cells.
  - *Significance*: Provides the conceptual framework for the entire model, defining the rules governing cell behaviour, interactions, and state transitions.
- **Figure 2**: Simulation of tumour-immune cell interaction without treatment over 300 days, showing cancer cell growth, immune cell infiltration, PDL1 expression, and effector cell exhaustion.
  - *Significance*: Establishes the baseline emergent behaviour of the model, demonstrating the spontaneous formation of an immunosuppressive TME with a front of PDL1+ cancer cells and exhausted effector cells.
- **Figure 3**: Spatial snapshots of the TME at day 300, showing the distribution of PDL1+ cancer cells, exhausted effector cells, and oxygen gradients.
  - *Significance*: Visually confirms the spatial heterogeneity predicted by the model, with immune cells clustering at the tumour interface and a hypoxic core not yet formed.
- **Figure 4**: PD-1 antibody treatment simulations, including PK profiles, receptor occupancy, and tumour growth curves for treatment starting at day 100 vs. day 200.
  - *Significance*: Demonstrates the counter-intuitive finding that later treatment can be more effective due to higher immune infiltration, emphasizing the importance of treatment timing.
- **Figure 5**: Radiotherapy simulations showing tumour cell count and cell cycle phase dynamics for treatment starting at day 50 vs. day 100.
  - *Significance*: Illustrates radiotherapy-induced cell cycle delay and redistribution, and shows that a larger pre-existing immune infiltrate leads to a greater initial response, though relapse occurs due to exhaustion.
- **Figure 6**: Docetaxel chemotherapy simulations showing drug concentration, kill rate, and tumour cell dynamics for treatment starting at different time points.
  - *Significance*: Reveals the phenomenon of dormant cell reactivation following chemotherapy, creating a plateau in tumour burden before resistance emerges.
- **Figure 7**: DNA damage response inhibitor treatment simulations, including drug concentration, DNA repair inhibition, and oscillations in S-phase cell numbers.
  - *Significance*: Shows that the treatment suppresses but does not eliminate the tumour, with characteristic oscillations in the S-phase population due to weekly dosing.
- **Figure 8**: Further analysis of DNA damage response inhibitor treatment, showing a decrease in exhausted effector cells and the corresponding rates of immune processes.
  - *Significance*: Demonstrates that the treatment reduces immune exhaustion by killing PDL1+ cancer cells, but fails to cure the tumour due to insufficient immune effector cell infiltration.
- **Figure 9**: Combination therapy simulations, including PD-1 antibody with radiotherapy, DNA damage response inhibitor with radiotherapy, and chemotherapy with radiotherapy.
  - *Significance*: The pivotal figure showing that treatment sequencing determines success or failure. Early DNA damage response inhibitor before radiotherapy is detrimental, while PD-1 antibody with later radiotherapy achieves tumour extinction.

---

### Supplementary Materials
The supplementary materials include two PDF files. The first (310 KB) contains detailed model equations, parameter tables, and additional information on the treatment modules. The second (2895 KB) includes extensive sensitivity analysis results, additional simulation plots (e.g., Figures S12-S14 comparing treatment scenarios side-by-side), and further details on the Gillespie algorithm implementation and rate parameters.

---

### Future Directions
The authors suggest several future directions, including calibrating the model to specific cancer types using patient-derived biopsy data (including spatial cell distributions from pathology images), incorporating a more detailed vasculature module to better simulate drug delivery and oxygenation, and expanding the immune cell repertoire. A particularly promising avenue is the use of reinforcement learning to automate the optimization of dosing and scheduling for combination therapies within this ABM framework. Additionally, integrating multiregion sequencing or liquid biopsy data could enable the model to capture clonal evolution and heterogeneity.

---

### Expert Commentary
This paper represents a significant step forward in the application of agent-based modelling to pharmacometrics. For years, the field has been dominated by population PKPD and ODE-based tumour growth models, which, while powerful, treat the tumour as a well-mixed bag. Truong et al. elegantly demonstrate that the 'where' and 'when' are just as important as the 'what' in immuno-oncology. The finding that early PD-1 blockade can be inferior to later treatment is a critical teaching point: it challenges the intuitive 'treat early' dogma and highlights the concept of a minimum required immune infiltrate for checkpoint inhibitor efficacy. The detrimental sequencing of a DNA damage response inhibitor before radiotherapy is another key insight, showing how reducing tumour antigenicity can inadvertently sabotage subsequent immune-dependent therapies. As a senior reviewer, I would emphasize that the true power of this model lies not in making precise numerical predictions, but in its capacity to generate and test mechanistic hypotheses about complex, non-linear biological systems. The next crucial step is to move from these qualitative, parameter-assumed simulations to a model calibrated with real-world clinical and biomarker data, which will be a substantial but necessary undertaking to realize the platform's clinical potential.

---

### Bottom Line
This work provides a compelling in silico demonstration that the timing of combination therapies in immuno-oncology is not merely an optimization problem but a critical determinant of success or failure. For the practicing pharmacometrician, it underscores the limitations of traditional ODE models for guiding combination therapy schedules and highlights the value of spatially-resolved, agent-based QSP models for generating mechanistic hypotheses about emergent TME dynamics. The key takeaway is that the state of the immune infiltrate at the time of treatment initiation can dramatically alter outcomes, a factor that should be considered in the design of future clinical trials.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-05-19-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-05-19-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-05-19-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-05-19-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-05-19-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_05.png)

![Figure 6]({{ site.baseurl }}/assets/digests/2026-05-19-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_06.png)

![Figure 7]({{ site.baseurl }}/assets/digests/2026-05-19-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_07.png)

![Figure 8]({{ site.baseurl }}/assets/digests/2026-05-19-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_08.png)

![Figure 9]({{ site.baseurl }}/assets/digests/2026-05-19-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_09.png)