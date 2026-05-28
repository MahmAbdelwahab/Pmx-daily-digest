---
layout: post
title: "Population PK/PD Modeling for Evaluation of Intertwining Effects of Drug and Disease on Thrombocytopenia in Acute Leukemias"
date: 2026-05-26
authors: "Sou T, Malek K, Weber H-J"
journal: "Journal name not specified, 2025 (available online via PubMed PMID: 41748502)"
doi: "10.1002/psp4.70000"
paper_type: popk
tags: [popk, oncology, regulatory, clinical-trial-design]
excerpt_text: "This paper demonstrates how population PK/PD modeling can disentangle drug-induced thrombocytopenia from disease-related thrombocytopenia in acute leukemias using siremadlin (MDM2 inhibitor) as a case example. By integrating data from solid tumor and hematological malignancy patients, the authors built a semi-mechanistic model with two precursor cell subpopulations (sensitive and non-responsive) that captures time-dependent drug effects and clonal evolution. The approach further predicts platelet dynamics in post-HSCT patients via a weighted average of predictions from both populations, providing a feasible framework for early dose decisions in complex drug-disease interactions. This is essential reading for pharmacometricians working in oncology, especially on myelosuppressive targeted therapies."
pdf_path: "/assets/digests/2026-05-26-population-pkpd-modeling-for-evaluation-of-intertwining-effects-of-drug-and/PMx_Population_PKPD_Modeling_for_Evaluation__20260526.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper demonstrates how population PK/PD modeling can disentangle drug-induced thrombocytopenia from disease-related thrombocytopenia in acute leukemias using siremadlin (MDM2 inhibitor) as a case example. By integrating data from solid tumor and hematological malignancy patients, the authors built a semi-mechanistic model with two precursor cell subpopulations (sensitive and non-responsive) that captures time-dependent drug effects and clonal evolution. The approach further predicts platelet dynamics in post-HSCT patients via a weighted average of predictions from both populations, providing a feasible framework for early dose decisions in complex drug-disease interactions. This is essential reading for pharmacometricians working in oncology, especially on myelosuppressive targeted therapies.

---

### Executive Summary
This paper tackles the clinically challenging problem of differentiating drug-induced from disease-induced thrombocytopenia in patients with hematological malignancies, using siremadlin as a test case. The authors developed a semi-mechanistic population PK/PD model by pooling data from patients with solid tumors (where thrombocytopenia at baseline is minimal) and those with acute leukemias (where thrombocytopenia is a hallmark of the disease). The model incorporates a novel two-subpopulation precursor cell compartment (sensitive and non-responsive to drug), reflecting clonal evolution under treatment pressure. Baseline platelet count and mean maturation time were estimated separately for the two populations, while drug effect parameters were shared. The model successfully described individual platelet profiles and was used to simulate various dosing regimens. A notable extension was the use of a 1:1 weighted average of the two population predictions to represent post-hematopoietic stem cell transplantation (HSCT) patients, whose hematopoietic capacity lies between active disease and solid tumor patients. External validation with observed data from a small post-HSCT cohort showed good concordance. This work provides a pragmatic, mechanism-informed approach to support early dose selection and safety monitoring in settings where drug and disease effects are entangled.

---

### Scientific Context & Motivation
Thrombocytopenia in acute leukemias arises from both the disease (ineffective hematopoiesis due to marrow infiltration by malignant clones) and treatment (myelosuppression, especially from agents targeting rapidly dividing cells). In early clinical trials, it is often impossible to determine whether a dose-limiting thrombocytopenia warrants dose reduction (toxicity management) or dose escalation (to achieve efficacy) because both the drug and the disease contribute to the low platelet count. This creates a dilemma for dose-finding, particularly for novel targeted therapies (e.g., MDM2 inhibitors) that may require prolonged exposure. Standard dose-finding designs (e.g., 3+3) are poorly suited to distinguish these effects. The authors leverage data from two distinct populations—solid tumor patients (minimal disease-related thrombocytopenia) and hematological malignancy patients (significant disease-related thrombocytopenia)—to separately identify drug effect and disease effect on platelet dynamics. This is a creative use of available phase I data to fill a knowledge gap where placebo-controlled data or healthy volunteer data are unavailable. The modeling framework also addresses the need to predict toxicity in special populations (post-HSCT) with partially compromised marrow, where direct clinical data are scarce at the time of trial design.

---

## ⚡ Methodological Snapshot
A population PK/PD model was developed using a sequential approach. First, a one-compartment PK model with linear clearance and transit-compartment absorption was built for siremadlin. Then, a semi-mechanistic PD model (adapted from Friberg et al.) described platelet dynamics, with a novel two-subpopulation precursor cell compartment (drug-sensitive $S$ and non-responsive $R$) to account for clonal evolution. Disease effect was modeled by allowing baseline platelet count ($PLTZ$) and mean maturation time ($MMTP$) to differ between hematological malignancy (HEM) and solid tumor (SOL) patients. The final model was used to simulate platelet profiles and thrombocytopenia risk across dosing scenarios, and a weighted average (1:1 HEM:SOL) prediction was externally validated against observed data from 8 post-HSCT patients.

---

## 🏗️ Structural Model Breakdown
**PK component**: One-compartment model with linear clearance ($CL/F = 5.9$ $L/h$) and volume ($V/F = 115$ $L$). Absorption via transit compartments: mean transit time ($MTT = 0.793$ $h$), transit rate constant ($K_{tr} = 6.69$ $h^{-1}$), first-order absorption rate ($K_a = 3.69$ $h^{-1}$). **PD component**: Two precursor cell subpopulations in bone marrow: sensitive ($S$) and non-responsive ($R$). Total proliferation rate = $k_{prol} \cdot (Tot)^{\gamma} \cdot (PLT_0/PLT)^{\gamma}$, where $Tot = S + R$. Drug effect: elimination rate of $S = SLP \cdot C_p \cdot S$. Transition from $S$ to $R$: irreversible, rate = $k_{SR} \cdot S$. Maturation: precursor cells leave $S+R$ to a transit compartment chain (mean maturation time $MMTP$) and then to circulating platelets ($PLT$). Baseline platelet count ($PLTZ$) and $MMTP$ estimated separately for HEM and SOL. Feedback $\gamma$ modulates proliferation response to low platelet counts.

---

### Detailed Methodological Analysis

#### Modeling Approach
Sequential PK/PD modeling using non-linear mixed effects. PK: one-compartment disposition, linear clearance, transit-compartment absorption (Savic implementation with $MTT$ and $K_{tr}$). PD: adaptation of the Friberg myelosuppression model with a proliferating precursor compartment split into drug-sensitive ($S$) and drug-non-responsive ($R$) subpopulations. An irreversible transition (rate $k_{SR}$) from $S$ to $R$ describes clonal evolution. Drug effect (linear slope, $SLP$) on apoptosis of $S$ cells. Separate $PLTZ$ and $MMTP$ for HEM and SOL populations; other PD parameters shared. Feedback loop on proliferation rate (with exponent $\gamma$). Software: Monolix Suite 2023R1.

#### Data Sources
Study CHDM201X2101 (NCT02143635): phase I, open-label, dose-escalation/expansion, 153 subjects (88 SOL, 65 HEM). 2236 platelet observations. Four dosing regimens: D1 Q3W, D1/D8 Q4W, D1-7 Q4W, D1-14 Q4W. Transfused patients excluded. External validation: study CHDM201K12201 (NCT05447663), 8 post-HSCT AML patients.

#### Estimation Methods
Maximum likelihood via SAEM algorithm implemented in Monolix. Model selection based on BICc (corrected Bayesian Information Criterion), parameter precision (RSE), mechanism plausibility, and GOF plots.

#### Model Evaluation
Goodness-of-fit plots (individual fits, VPCs) shown in supplementary. Model selection guided by BICc. External validation of the post-HSCT averaged prediction using visual inspection of overlays with observed data (Figure 5) and comparison of predicted vs observed thrombocytopenia incidence (Table 4).

#### Covariate Analysis
Body weight was included as a covariate on $V/F$ ($\beta_{V\_tBWKG} = 0.883$). Correlation between $CL/F$ and $V/F$ was estimated ($corr_{V\_Cl} = 0.631$). No other covariates (including demographics or patient type) were found significant during exploration. The key 'covariate' effect is the separate estimation of $PLTZ$ and $MMTP$ for HEM vs SOL.

---

### Statistical Rigor Assessment
The SAEM algorithm is appropriate for this type of sparse, unbalanced data. Model selection using BICc is standard and more conservative than AIC. The authors correctly note high shrinkage on several parameters (especially $k_{SR}$, 86%), indicating limited individual-level information. The decision to retain $k_{SR}$ based on mechanistic plausibility and improvement in fit (BICc decrease of 580) is defensible but the estimate should be interpreted with caution. The external validation in 8 patients is very limited in sample size and provides only qualitative confirmation. No formal sensitivity analysis was performed on the 1:1 weighting assumption. The exclusion of transfused patients (approximately 150+ patients from the original study) is a major concern for selection bias; these patients likely represent a more vulnerable subgroup, and their exclusion may lead to an underestimate of toxicity risk. No power analysis or sample size justification is provided. The use of a linear drug effect function is a simplification; while it fit the data, a non-linear function might be more physiologically realistic at high concentrations.

---

## 📊 Key Findings
The final PK/PD model captured the key features of siremadlin-induced thrombocytopenia. The PK was described by a one-compartment model with linear clearance and transit-compartment absorption. The PD model was an adaptation of the Friberg myelosuppression model with two key innovations: (1) two subpopulations of proliferating precursor cells—drug-sensitive ($S$) and non-responsive ($R$)—with an irreversible transition rate ($k_{SR}$) from $S$ to $R$, representing clonal evolution; and (2) separate baseline platelet counts ($PLTZ$) and mean maturation times ($MMTP$) for hematological malignancy (HEM) and solid tumor (SOL) patients. Key parameter estimates: $PLTZ_{HEM} = 30.8$ $G/L$ vs $PLTZ_{SOL} = 229$ $G/L$ (confirming profound thrombocytopenia at baseline in HEM); $MMTP_{HEM} = 142$ $h$ vs $MMTP_{SOL} = 844$ $h$ (shorter maturation time in HEM, consistent with rapid proliferation); $SLP$ (drug effect slope) = $0.00184$ $(ng/mL)^{-1}$; $k_{SR} = 1.31 \times 10^{-5}$ $h^{-1}$. Simulations showed that HEM patients are more sensitive to drug effect (greater platelet drop per cycle) and recover more slowly than SOL patients. For post-HSCT patients, the model averaged prediction (1:1 HEM:SOL) produced platelet profiles that closely matched observed data from a phase Ib/II study, including a predicted Grade $\ge 3$ thrombocytopenia probability of 53.6% for 30 mg qd x5d Q4W, which coincided with the observed incidence (50%).

---

## 💡 Clinical & Regulatory Implications
The model provides a quantitative tool to support dose selection in siremadlin trials, especially in hematological malignancies where thrombocytopenia is both a disease feature and a toxicity. For example, in HEM patients, the risk of Grade $\ge 3$ thrombocytopenia is $>80\%$ even at the lowest simulated dose (5 mg), indicating that any therapeutic dose will require close monitoring and potentially platelet transfusion support. In contrast, SOL patients have much lower risk, consistent with clinical experience. The post-HSCT prediction is immediately actionable: at 30 mg, the risk of Grade $\ge 3$ thrombocytopenia is $\sim 54\%$, which can inform inclusion criteria (e.g., require baseline platelets $>100$ $G/L$) and monitoring frequency. The modeling framework can be used to design dose escalation schemes that account for the delayed nature of thrombocytopenia (nadir around day 15). The approach could be extended to other myelosuppressive targeted therapies where drug-disease interaction complicates dose finding.

---

### Strengths & Limitations

#### Strengths
- Clever use of data from two distinct patient populations (solid tumors vs. hematological malignancies) as a pseudo-control to disentangle drug and disease effects without needing placebo or healthy volunteer data.
- Novel model structure with two precursor subpopulations (sensitive and non-responsive) that mechanistically captures clonal evolution and time-dependent drug effect, supported by known biology of MDM2 inhibitor resistance.
- Successful external validation in a small but clinically relevant post-HSCT cohort using a pragmatic weighted average prediction approach.
- Thorough use of simulation to predict thrombocytopenia risk across dose levels, directly informing trial design and safety monitoring.

#### Limitations (Acknowledged by Authors)
- High shrinkage on several parameters, indicating limited individual-level information for estimating IIV.
- Relatively high uncertainty on the transition rate $k_{SR}$ (95% CI spanning an order of magnitude), though retained for mechanistic reasons based on BICc improvement and improved GOF.
- Exclusion of patients receiving transfusions, which may introduce selection bias against more thrombocytopenic patients.
- Empirical assignment of 1:1 weight for averaged predictions; acknowledged that weight could be refined with more data.

#### Limitations (Expert Review)
- The model does not incorporate disease progression independent of drug effect; improvement in blood counts due to successful treatment (e.g., remission) cannot be captured—a significant gap for therapies that may eventually ameliorate the disease.
- The transition from $S$ to $R$ is modeled as irreversible; while reasonable for the study timeframe, it may not capture potential reversion in the long term.
- No formal model averaging (e.g., Bayesian model averaging) was used; the 1:1 weighting is subjective and not data-driven, limiting its generalizability without calibration.
- The post-HSCT external validation dataset is very small (n=8), limiting the strength of the confirmation.
- No formal sensitivity analysis was reported for the assumed weight (1:1) in the averaged prediction.
- The model does not account for supportive care (e.g., platelet transfusions, growth factors) that could confound observed platelet counts.

#### Generalizability
The methodological framework—integrating data from populations with differing disease severity to disentangle drug and disease effects—is broadly applicable to other myelosuppressive agents and cytopenias (e.g., neutropenia). The specific model parameterization (two precursor subpopulations, separate baselines) is tailored to the biology of MDM2 inhibitors and acute leukemias, but the concept can be adapted. The weighted average approach for special populations (post-HSCT) is a practical solution but requires clinical judgment to assign weights and would benefit from prospective calibration.

---

### Key Equations

**Oscillation ODE for I1**

{% raw %}
$$
\frac{dI_1}{dt} = I_2
$$
{% endraw %}

First of two ordinary differential equations describing the periodic oscillation in the indirect response model.

**Oscillation ODE for I2**

{% raw %}
$$
\frac{dI_2}{dt} = -\omega^2 \cdot I_1 - 2 \cdot \xi \cdot \omega \cdot I_2 + \text{noise}
$$
{% endraw %}

Damped harmonic oscillator equation for the oscillatory component, where $\omega$ is the frequency and $\xi$ the damping coefficient.

**Baseline PTH clearance**

{% raw %}
$$
CL_{PTH,0} = CL_{PTH,pop} \cdot \left(\frac{\text{Ca}}{\text{Ca}_{ref}}\right)^{\gamma_{Ca}} \cdot e^{\eta_{CL,PTH}}
$$
{% endraw %}

Baseline PTH clearance depends on calcium concentration via a power law, with inter-individual variability.

---

### Figures & Tables

- **Figure 1**: Schematic of the selected PK/PD model, showing: oral siremadlin absorption via transit compartments, central PK compartment, and a PD model with proliferating ($S$ and $R$), transitional, and circulating platelet compartments. Disease effect modifies baseline platelet count ($PLTZ$) and mean maturation time ($MMTP$) separately for HEM and SOL patients.
  - *Significance*: Essential for understanding the model structure, including the novel two-subpopulation precursor cell compartment ($S$ and $R$) and where disease-specific parameters enter.
- **Figure 2**: Representative individual fits showing observed (circles) and predicted (line) platelet counts over time for several HEM patients.
  - *Significance*: Demonstrates the model's ability to capture individual patient trajectories, including the delayed onset and recovery of thrombocytopenia.
- **Figure 3**: Simulated platelet profiles for HEM and SOL patients across 6 cycles of siremadlin (5-40 mg qd x5d Q4W) in a virtual population of 1000 subjects.
  - *Significance*: Key simulation output showing the differential response: HEM patients have lower baselines, more profound drops, and slower recovery compared to SOL patients, confirming disease-drug interaction.
- **Figure 4**: Simulated platelet profiles for the 'averaged' post-HSCT population (1:1 HEM:SOL weighting) across the same dose range.
  - *Significance*: Illustrates the pragmatic approach to predict toxicity in a population where direct data are scarce, showing intermediate platelet dynamics.
- **Figure 5**: External visual predictive check (VPC) overlaying observed platelet counts (n=8 post-HSCT patients) on the simulated prediction interval for 30 mg qd x5d Q4W.
  - *Significance*: Critical external validation showing the model's predictions capture the central tendency and variability of the observed data in a held-out population.
- **Table 1**: Final PK and PD parameter estimates, including typical values, 95% CI, inter-individual variability (SD), and shrinkage for all structural parameters.
  - *Significance*: Provides the complete numerical basis of the model, including the key differences between HEM and SOL: $PLTZ$ (30.8 vs 229 $G/L$) and $MMTP$ (142 vs 844 $h$).
- **Table 2**: Predicted probability of thrombocytopenia by CTCAE grade in HEM patients across dose levels (5-40 mg).
  - *Significance*: Quantifies the high baseline risk in HEM patients: even at 5 mg, $>80\%$ have Grade $\ge 3$ thrombocytopenia.
- **Table 3**: Predicted probability of thrombocytopenia by CTCAE grade in SOL patients across dose levels.
  - *Significance*: Shows the contrast with HEM: very low risk at all dose levels (e.g., 0.4% Grade $\ge 3$ at 5 mg, 22% at 40 mg), confirming the model isolates the disease effect.
- **Table 4**: Predicted probability of thrombocytopenia by CTCAE grade in post-HSCT patients (averaged prediction) across dose levels, with observed incidence for 30 mg.
  - *Significance*: Demonstrates the clinical utility: predicted Grade $\ge 3$ risk of 53.6% at 30 mg matches observed 50% (4/8 patients), validating the averaged prediction approach externally.

---

### Code & Reproducibility Assessment
The analysis was performed using Monolix Suite 2023R1 and R (>=4.1.0). No publicly available code or model files were provided in the manuscript. The authors mention building a Shiny application for interactive exploration, but it is not stated whether this is publicly accessible.

---

### Future Directions
Several extensions are suggested by the authors and by this analysis. (1) Incorporating disease progression (e.g., leukemic blast counts) as a time-varying covariate would allow the model to capture improvement in thrombocytopenia upon achieving remission, which is critical for drugs that can induce response. (2) The weighted average prediction for post-HSCT patients could be made more rigorous by estimating the mixing weight directly from data when available, or using a true Bayesian model averaging approach. (3) The model should be extended to include the effect of transfusions and other supportive care, as exclusion of transfused patients may bias results. (4) The same methodology could be applied to neutropenia and other myeloid lineages, as the underlying biological principles are similar. (5) Prospective use of the model to guide dose escalation and de-escalation decisions based on real-time platelet monitoring in adaptive trial designs would be a valuable next step.

---

### Expert Commentary
This paper exemplifies what I consider the gold standard for leveraging sparse clinical data to answer a question that cannot be addressed by traditional statistical methods alone. The key insight is the use of solid tumor patients as a de facto 'reference' group to quantify drug effect in the absence of hematological disease—a clever substitute for the ethically impossible placebo arm. The two-subpopulation precursor model is a nice mechanistic touch, reflecting the known biology of clonal resistance to MDM2 inhibitors. I especially appreciate the authors' transparency about the high uncertainty on the transition rate $k_{SR}$ and their reasoned decision to retain it. From a teaching perspective, this paper is an excellent case study of: (1) how to build a semi-mechanistic model stepwise; (2) how to use simulations for risk assessment; and (3) how to creatively handle a special population (post-HSCT) through a weighted prediction approach. A minor critique: the 1:1 weighting, while clinically plausible, feels somewhat arbitrary. In a Bayesian framework, one could treat the weight as a parameter with a prior informed by clinical opinion and update it with even sparse data. That said, the external validation in 8 patients is reassuring. This approach should become a template for similar drug-disease interaction problems in oncology.

---

### Bottom Line
This work provides a practical pharmacometric framework for differentiating drug-induced from disease-induced thrombocytopenia in acute leukemias, a common but challenging problem in early oncology drug development. By thoughtfully integrating data from solid tumor and hematological malignancy patients, the model enables prediction of platelet dynamics and thrombocytopenia risk in both active disease and post-HSCT settings. The approach is immediately useful for dose selection and safety monitoring in trials of myelosuppressive agents. The key lesson for pharmacometricians is that creative use of available phase I data from multiple populations, combined with a semi-mechanistic model incorporating clonal evolution, can generate actionable insights when the drug-disease interplay is complex.

---

---

## 📊 Figures

![Schematic illustration showing the structure of the selected model with disease features.]({{ site.baseurl }}/assets/digests/2026-05-26-population-pkpd-modeling-for-evaluation-of-intertwining-effects-of-drug-and/figures/fig_01.png)

![Representative model fit showing the observed (circles) and predicted (solid line) time-course of platelet levels in patients with hematological malignancies (HE]({{ site.baseurl }}/assets/digests/2026-05-26-population-pkpd-modeling-for-evaluation-of-intertwining-effects-of-drug-and/figures/fig_02.png)

![Simulated platelet profiles in patients from a virtual population (n= 1000) with hematological malignancies (HEM) and solid tumors (SOL) following 6 cycles of si]({{ site.baseurl }}/assets/digests/2026-05-26-population-pkpd-modeling-for-evaluation-of-intertwining-effects-of-drug-and/figures/fig_03.png)

![Simulated platelet profiles from a virtual population (n= 1000) with contribution from HEM and SOL patients in a 1:1 ratio representing post-HSCT patients follow]({{ site.baseurl }}/assets/digests/2026-05-26-population-pkpd-modeling-for-evaluation-of-intertwining-effects-of-drug-and/figures/fig_04.png)

![External visual predictive check showing the simulated platelet profiles representing post-HSCT patients following 6 cycles of siremadlin treatment (30 mg once d]({{ site.baseurl }}/assets/digests/2026-05-26-population-pkpd-modeling-for-evaluation-of-intertwining-effects-of-drug-and/figures/fig_05.png)