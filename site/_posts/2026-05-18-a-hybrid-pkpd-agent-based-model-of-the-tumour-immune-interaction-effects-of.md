---
layout: post
title: "A hybrid PKPD agent-based model of the tumour immune interaction: effects of anti-cancer combination therapy"
date: 2026-05-18
authors: "Truong VT, Lythe G, Vicini P, et al."
journal: "J Pharmacokinet Pharmacodyn 53, 16 (2026)"
doi: "10.1007/s10928-026-10021-2"
paper_type: popk
tags: [popk, oncology, immunology]
excerpt_text: "This paper presents a three-dimensional hybrid multiscale agent-based model that integrates tumor-immune interactions, cell cycle dynamics, oxygen and drug diffusion, and pharmacokinetic-pharmacodynamic (PKPD) models of radiotherapy, chemotherapy, PD-1 antibody, and DNA damage response inhibitor. It explores how temporal sequencing of combination therapies affects treatment outcomes, revealing that the immune contexture at the time of intervention critically determines success. Pharmacometricians and immuno-oncology modelers interested in mechanistic spatial-temporal modeling and combination therapy optimization should read this work."
pdf_path: "/assets/digests/2026-05-18-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/PMx_A_hybrid_PKPD_agentbased_model_of_the_tu_20260518.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a three-dimensional hybrid multiscale agent-based model that integrates tumor-immune interactions, cell cycle dynamics, oxygen and drug diffusion, and pharmacokinetic-pharmacodynamic (PKPD) models of radiotherapy, chemotherapy, PD-1 antibody, and DNA damage response inhibitor. It explores how temporal sequencing of combination therapies affects treatment outcomes, revealing that the immune contexture at the time of intervention critically determines success. Pharmacometricians and immuno-oncology modelers interested in mechanistic spatial-temporal modeling and combination therapy optimization should read this work.

---

### Executive Summary
Truong et al. developed a hybrid agent-based model (ABM) coupled with partial differential equations (PDEs) for oxygen/drug diffusion and ordinary differential equations (ODEs) for systemic drug pharmacokinetics to simulate the tumor microenvironment and the effects of multiple anticancer therapies. The model incorporates cancer cell proliferation, cell cycle phases, PDL1 expression, immune effector and suppressor cell dynamics, and treatment modules for pembrolizumab, radiotherapy, docetaxel, and the DNA damage response inhibitor berzosertib. Through illustrative simulations, the authors demonstrate that PD-1 antibody efficacy depends on pre-existing immune infiltration, radiotherapy can synergize with the immune system if timed appropriately, chemotherapy may deplete immune cells and reduce subsequent radiotherapy benefit, and DNA damage response inhibitors alone only suppress growth without elimination. The work highlights the importance of treatment sequencing and the emergent behaviors arising from the complex interplay between tumor, immune system, and therapies, providing a flexible platform for hypothesis generation in combination therapy design.

---

### Scientific Context & Motivation
Understanding the spatial-temporal dynamics of the tumor microenvironment (TME) and the interactions among cancer cells, immune cells, and therapeutic agents is critical for optimizing combination therapies. Traditional ODE-based PKPD models often lack spatial heterogeneity and cannot capture emergent behaviors such as immune cell clustering, oxygen gradients, and cell cycle-dependent drug effects. This study addresses the gap by constructing a multiscale model that explicitly represents individual cell behaviors, spatial diffusion, and systemic drug exposure, enabling investigation of how treatment sequence and timing influence outcomes through mechanisms like immune exhaustion, cell cycle redistribution, and drug resistance.

---

## ⚡ Methodological Snapshot
The model is a three-dimensional hybrid multiscale system combining an agent-based model (ABM) for individual cancer and immune cells, partial differential equations (PDEs) for oxygen and drug diffusion, and ordinary differential equations (ODEs) for systemic pharmacokinetics of pembrolizumab, docetaxel, and berzosertib. Cell fate decisions (division, death, mutation, exhaustion) are governed by stochastic rates implemented via the Gillespie algorithm. The ABM tracks cell cycle phases, PDL1 expression, and spatial location on a lattice. Treatment modules include a modified linear-quadratic model for radiotherapy with oxygen modification and cell cycle delay, an $E_{max}$ model for DNA damage response inhibitor, and PKPD models from literature for chemotherapy and immunotherapy.

---

## 🏗️ Structural Model Breakdown
The model comprises three layers: (1) Agent-based layer: Cancer cells have attributes (position, cell cycle phase, PDL1 status, time to division) and actions (consume oxygen, age, divide, become quiescent/necrotic, die). Immune effector and suppressor cells infiltrate, move toward targets, divide, age, and exhaust. (2) PDE layer: Oxygen diffuses from the boundary and is consumed by cancer cells; drug concentrations are scaled by the oxygen gradient to simulate heterogeneous penetration. (3) ODE layer: Systemic PK models for pembrolizumab (two-compartment with target-mediated disposition), docetaxel (one-compartment), and berzosertib (population PK) drive local drug concentrations. Treatment modules: Radiotherapy uses a modified linear-quadratic survival model with oxygen modification factor and induces G1/G2 cell cycle delay. Chemotherapy kills cells in G2/M phases with a kill rate that decays exponentially due to resistance. DNA damage response inhibitor kills S-phase cells via an $E_{max}$ model. PD-1 antibody blocks effector cell exhaustion based on receptor occupancy.

---

### Detailed Methodological Analysis

#### Modeling Approach
Hybrid agent-based model (ABM) with PDEs for oxygen/drug diffusion and ODEs for systemic PK. Cancer cells and immune cells are individual agents on a 3D lattice; each agent represents $10^6$ biological cells. Cell behaviors (division, death, PDL1 mutation, immune exhaustion) are stochastic with rates defined by the Gillespie algorithm. Treatment effects are integrated via ODE-based PK models and spatial drug distribution scaled by the oxygen gradient. Software not specified.

#### Data Sources
No experimental or clinical data were used; all parameters were assumed or taken from literature (e.g., cell cycle durations, immune cell ratios, PK parameters from published models).

#### Estimation Methods
Not applicable; this is a simulation study without parameter estimation.

#### Model Evaluation
Sensitivity analysis was performed (described in supplementary material) to identify influential parameters. Model behavior was evaluated by visual comparison of simulated scenarios (e.g., tumor growth curves, spatial snapshots). No formal validation against independent data was conducted.

#### Covariate Analysis
No covariate analysis was performed; the model does not incorporate patient-level covariates.

---

### Statistical Rigor Assessment
As a purely simulation-based study, statistical rigor is limited. No parameter estimation, uncertainty quantification, or formal model selection was performed. The sensitivity analysis (in supplementary) provides some insight into parameter influence, but the lack of data-driven calibration means all conclusions are qualitative. The stochastic nature of the ABM is handled by the Gillespie algorithm, but no replicate simulations or variability measures are reported in the main text.

---

## 📊 Key Findings
1. Without treatment, tumors grow and develop an immunosuppressive microenvironment with PDL1-positive cancer cells and exhausted effector cells at the tumor-immune interface. 2. PD-1 antibody treatment leads to tumor extinction only when sufficient immune effector cells have infiltrated; later treatment (day 200) with higher infiltration achieved faster extinction than early treatment (day 100). 3. Radiotherapy alone reduced tumor burden by ~96% but tumors regrew due to emerging PDL1-positive mutants and immune exhaustion; combining radiotherapy with PD-1 antibody resulted in extinction if radiation started when immune infiltration was high. 4. Docetaxel chemotherapy initially reduced tumor size but resistance emerged; it also depleted immune cells, rendering subsequent radiotherapy almost ineffective compared to radiotherapy alone. 5. DNA damage response inhibitor treatment suppressed tumor growth but did not eliminate it, as it only reduced exhaustion without increasing effector infiltration. 6. Combination of DNA damage response inhibitor with radiotherapy was detrimental when immune infiltration was low, as the inhibitor reduced antigenicity and immune recruitment. 7. Cell cycle phase analysis revealed that radiotherapy causes G1/G2 delay and redistribution, while chemotherapy reactivates dormant cells, making them susceptible to cell cycle-specific killing.

---

## 💡 Clinical & Regulatory Implications
The model suggests that (1) PD-1 inhibitor efficacy requires pre-existing immune infiltration, supporting the use of biomarkers like CD8+ T cell density; (2) radiotherapy can synergize with immunotherapy if timed when immune infiltration is high, but may be antagonized by prior chemotherapy due to immune depletion; (3) DNA damage response inhibitors alone are unlikely to achieve tumor elimination and may even impair immune recruitment if used before radiotherapy. These insights could inform the design of clinical trials testing combination sequences, but require prospective validation.

---

### Strengths & Limitations

#### Strengths
- Integrates multiple therapeutic modalities (immunotherapy, chemotherapy, radiotherapy, targeted therapy) within a single spatial-temporal framework.
- Uses a hybrid ABM-PDE-ODE approach to capture emergent behaviors, cell cycle dynamics, and spatial gradients of oxygen and drug.
- Employs the Gillespie algorithm for stochastic events, providing realistic probabilistic cell fate decisions.
- Demonstrates the critical role of treatment sequencing and immune contexture, offering mechanistic hypotheses for clinical observations.
- Modular design allows easy extension with additional cell types, cytokines, or vasculature.

#### Limitations (Acknowledged by Authors)
- Cells are arranged on a rigid lattice, constraining cell size, shape, and neighbor interactions.
- Immune cells are simplified to only effector and suppressor types, omitting CD8+ T cells, NK cells, Tregs, MDSCs, and cytokines.
- Tumor vasculature is not simulated; oxygen and drug enter from the periphery, and immune cells infiltrate randomly.
- Scaling of cell numbers (1 agent = $10^6$ cells) may introduce inaccuracies in cell-cell interactions.

#### Limitations (Expert Review)
- The model is not calibrated to any specific tumor type or patient data; all simulations are illustrative with assumed parameters.
- No formal sensitivity analysis or uncertainty quantification is presented in the main text (only referenced in supplementary material).
- Drug distribution is scaled solely by the oxygen gradient, which may not accurately reflect heterogeneous perfusion and penetration.
- Lack of T cell priming, trafficking, and antigen presentation limits the immunological realism.
- Resistance mechanisms are modeled simplistically (exponential decline in kill rate) without genetic or phenotypic heterogeneity.
- No validation against experimental or clinical data is provided, limiting translational confidence.

#### Generalizability
The model framework is highly generalizable due to its modular structure; parameters and rules can be adjusted to represent different tumor types or treatment regimens. However, without calibration to real-world data, the current simulations serve as qualitative demonstrations rather than quantitative predictions. Future work incorporating patient-specific biopsy data could enhance its applicability.

---

### Key Equations

**Oxygen diffusion-consumption PDE**

{% raw %}
$$
\frac{\partial O}{\partial t} = D \nabla^2 O - k_o \cdot N_{\text{div}} - q_c k_o \cdot N_{\text{qui}}
$$
{% endraw %}

Describes the spatiotemporal oxygen concentration in the tumor microenvironment, where oxygen diffuses from the periphery and is consumed by dividing and quiescent cancer cells.

**Radiation survival probability**

{% raw %}
$$
S = \exp\left(-\alpha D - \beta D^2\right) \cdot \text{OMF}
$$
{% endraw %}

Modified linear-quadratic model for cell survival after a radiation dose D, with oxygen modification factor (OMF) accounting for hypoxia-induced radioresistance.

**Chemotherapy kill rate with resistance**

{% raw %}
$$
k_{\text{kill}}(t) = k_{\max} \cdot C(t) \cdot e^{-\lambda t}
$$
{% endraw %}

Docetaxel-induced kill rate that depends on drug concentration C(t) and declines exponentially over time due to acquired resistance (parameter $\lambda$).

**DNA damage response inhibitor effect**

{% raw %}
$$
E = \frac{E_{\max} \cdot C}{EC_{50} + C}
$$
{% endraw %}

$E_{max}$ model describing the inhibition of DNA repair as a function of berzosertib concentration C, affecting cancer cells in S phase.

**Immune effector infiltration rate**

{% raw %}
$$
r_{\text{infil}} = k_{\text{infil}} \cdot N_{\text{cancer}} \cdot \left(1 + \frac{N_{\text{killed}}}{K_{\text{killed}}}\right)
$$
{% endraw %}

Rate of immune effector cell infiltration increases with the number of cancer cells and the number of cancer cells killed, simulating immunogenic cell death attraction.

---

### Figures & Tables

- **Figure 1**: Schematic of agent attributes and actions for cancer cells, immune effector cells, and immune suppressor cells.
  - *Significance*: Provides an overview of the model's rule-based design, essential for understanding cell behaviors and interactions.
- **Figure 2**: Time courses of cancer cell count, immune effector and suppressor cells, PDL1+ cancer cells, and exhausted effector cells without treatment.
  - *Significance*: Demonstrates baseline tumor growth and the development of an immunosuppressive microenvironment.
- **Figure 3**: Spatial snapshots of the tumor microenvironment at day 300 showing distribution of cancer cells, immune cells, PDL1 status, and oxygen gradient.
  - *Significance*: Illustrates the formation of an immune-cancer interface with PDL1+ cells and exhausted effectors, and the oxygen gradient from periphery to core.
- **Figure 4**: PD-1 antibody treatment: PK profiles, receptor occupancy, tumor response for early vs. late treatment start, and TME snapshots.
  - *Significance*: Highlights the critical role of pre-existing immune infiltration for checkpoint inhibitor efficacy.
- **Figure 5**: Radiotherapy effects: tumor growth curves and cell cycle phase distributions for treatment starting at day 50 vs. day 100.
  - *Significance*: Shows that radiotherapy efficacy depends on immune infiltration and causes cell cycle delay/redistribution.
- **Figure 6**: Docetaxel chemotherapy: drug concentration, kill rate, tumor response for different treatment start times, and cell cycle phase dynamics.
  - *Significance*: Demonstrates chemotherapy-induced reactivation of dormant cells and emergence of resistance.
- **Figure 7**: DNA damage response inhibitor: PK, target inhibition, tumor response, and S-phase oscillations.
  - *Significance*: Shows that the inhibitor suppresses but does not eliminate the tumor, with weekly dosing causing S-phase fluctuations.
- **Figure 8**: DNA damage response inhibitor effects on immune exhaustion: tumor cell count, exhausted effector cells, and event rates.
  - *Significance*: Reveals that the inhibitor reduces exhaustion by lowering PDL1+ cells but does not increase effector infiltration.
- **Figure 9**: Combination therapy outcomes: PD-1 antibody + radiotherapy, DNA damage response inhibitor + radiotherapy, and chemotherapy + radiotherapy.
  - *Significance*: Demonstrates that sequencing and immune context determine synergy or antagonism; e.g., chemotherapy impairs radiotherapy benefit.

---

### Code & Reproducibility Assessment
No code or data are provided; model equations and parameters are described in the supplementary materials.

---

### Supplementary Materials
Two supplementary PDFs are provided: Supplementary File 1 (310 KB) contains model equations, parameter tables, and sensitivity analysis details. Supplementary File 2 (2895 KB) includes additional simulation results and figures (e.g., Figures S12–S14) comparing treatment scenarios side-by-side.

---

### Future Directions
Future work should focus on calibrating the model to specific cancer types using patient-derived data (e.g., multiplex immunohistochemistry, single-cell sequencing, and longitudinal liquid biopsies). Incorporating a more detailed immune compartment (CD8+ T cells, Tregs, NK cells, cytokines), realistic vasculature, and drug penetration models would enhance biological fidelity. The framework could be coupled with reinforcement learning algorithms to automate the optimization of dose and schedule for combination therapies. Additionally, validation against preclinical in vivo experiments or clinical trial outcomes is essential to establish predictive capability.

---

### Expert Commentary
As a senior pharmacometrician, I find this work to be an ambitious and timely contribution that pushes the boundaries of traditional PKPD modeling into the realm of systems biology. The integration of ABM with PDEs and ODEs elegantly captures the spatial heterogeneity and stochasticity that are hallmarks of the TME. The findings on immune timing echo clinical experience with checkpoint inhibitors—'hot' tumors respond better—and provide a mechanistic rationale for the often-observed synergy between radiotherapy and immunotherapy. However, the model's Achilles' heel is the lack of data-driven calibration; the parameter space is vast, and without rigorous estimation against experimental data, the simulations remain qualitative. The use of the Gillespie algorithm is appropriate for rare events like PDL1 mutation, but the assumption of a uniform lattice and the $10^6$ scaling factor may distort cell-cell interaction dynamics. I would encourage the authors to pursue a 'middle-out' approach: calibrate the model to a well-characterized preclinical model (e.g., syngeneic mouse tumors) where spatial and temporal data are available, then use it to predict optimal schedules for testing. The modular design is a strength, and I foresee this platform evolving into a valuable tool for virtual clinical trials once validated.

---

### Bottom Line
This hybrid multiscale model provides a powerful in silico laboratory for exploring the complex, spatially resolved interactions between tumor, immune system, and combination therapies. Its key insight—that the timing of interventions relative to the immune microenvironment can make the difference between tumor control and failure—underscores the need for biomarker-driven scheduling in clinical trials. While not yet ready for clinical decision support, the model offers a valuable hypothesis-generation tool for pharmacometricians and oncologists designing next-generation combination regimens.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-05-18-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-05-18-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-05-18-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-05-18-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-05-18-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_05.png)

![Figure 6]({{ site.baseurl }}/assets/digests/2026-05-18-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_06.png)

![Figure 7]({{ site.baseurl }}/assets/digests/2026-05-18-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_07.png)

![Figure 8]({{ site.baseurl }}/assets/digests/2026-05-18-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_08.png)

![Figure 9]({{ site.baseurl }}/assets/digests/2026-05-18-a-hybrid-pkpd-agent-based-model-of-the-tumour-immune-interaction-effects-of/figures/fig_09.png)