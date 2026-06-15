---
layout: post
title: "A Mechanism-Based Multi-Level Population PK/PD Model for Potassium-Competitive Acid Blockers"
date: 2026-06-15
authors: "Woojin Jung, Jaeyeon Lee, Hyeseon Jeon, Taeyoung Sim, Hong Yoo, Seyeon Lee, Jeongmin Choi"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70181"
paper_type: popk
tags: [popk, regulatory]
excerpt_text: "This paper presents a multi-level population PK/PD model for four potassium-competitive acid blockers (PCABs) that mechanistically integrates circadian rhythms, food effects, and pH-dependent drug absorption. It will be of interest to pharmacometricians and clinical pharmacologists involved in model-informed drug development for acid-related disorders, as it provides a scalable platform for cross-drug comparison and dose optimization. The model successfully reproduces clinical pH data and reveals that both pre- and post-meal dosing can enhance acid suppression early in treatment, with implications for dosing strategy."
pdf_path: "/assets/digests/2026-06-15-a-mechanism-based-multi-level-population-pkpd-model-for-potassium-competitive/PMx_A_MechanismBased_MultiLevel_Population_P_20260615.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a multi-level population PK/PD model for four potassium-competitive acid blockers (PCABs) that mechanistically integrates circadian rhythms, food effects, and pH-dependent drug absorption. It will be of interest to pharmacometricians and clinical pharmacologists involved in model-informed drug development for acid-related disorders, as it provides a scalable platform for cross-drug comparison and dose optimization. The model successfully reproduces clinical pH data and reveals that both pre- and post-meal dosing can enhance acid suppression early in treatment, with implications for dosing strategy.

---

### Executive Summary
Jung et al. present a mechanism-based multi-level population PK/PD model for four potassium-competitive acid blockers (PCABs): tegoprazan, YH4808, fexuprazan, and vonoprazan. By integrating literature-derived concentration–time and intragastric pH data via a multi-level nonlinear mixed-effects framework, the model simultaneously captures inter-drug variability (super-level) and inter-study variability. Key innovations include explicit representation of circadian pH rhythms via cosine functions, a food-effect compartment that modulates the production rate of pH ($K_{in}$), and a pH-dependent absorption feedback mechanism modeled as a bell-shaped function. The model successfully reproduces observed PK/PD profiles across doses, feeding states, and dosing regimens. Simulations reveal that both pre- and post-meal dosing enhance early pH control, with post-meal dosing showing additive synergy under low-dose and non-steady-state conditions. The derived pharmacodynamic potency index (PPI) aligns closely with reported in vitro $IC_{50}$ values, supporting mechanistic plausibility. The work establishes a scalable platform for model-informed drug development of current and emerging PCABs.

---

### Scientific Context & Motivation
PCABs are increasingly used as alternatives to proton pump inhibitors, but modeling their PK/PD is challenging due to the bidirectional interaction between drug exposure and intragastric pH, the influence of food intake (which elevates pH independently), and circadian pH rhythms. Existing models are drug-specific, often fail to incorporate food effects on PD, or ignore the feedback of pH on drug absorption. This study fills the gap by developing a unified mechanistic PK/PD model that simultaneously accounts for these factors across four PCABs, enabling quantitative class-level comparisons and evaluation of dosing strategies under varied meal timing conditions.

---

## ⚡ Methodological Snapshot
A semi-mechanistic population PK/PD model was built using digitized clinical data from four PCABs. The PK is one-compartment with first-order absorption modified by a pH-dependent Gaussian feedback function. The PD is an indirect response model wherein the pH production rate is influenced by four components: a baseline/circadian cosine function, a logistic drug effect (driven by plasma concentration), a logistic food effect (driven by a separate food compartment with first-order gastric emptying), and a maximum pH ceiling ($pHMax$). The multi-level framework in NONMEM (drug as super-level, study groups nested) allowed simultaneous estimation of drug-specific and physiological parameters. SAEM-I was used for estimation, with bootstrap and VPCs for validation.

---

## 🏗️ Structural Model Breakdown
The model consists of three interconnected components: (1) PK: a one-compartment model with first-order absorption where the absorption rate $K_a(t)$ is a function of current intragastric pH via a Gaussian function: $K_a(t) = K_{a0} \cdot \exp\left(-\left(\frac{pH(t) - \text{SCALE}}{\text{SHAPE}}\right)^2\right)$. (2) PD: an indirect response model where $\frac{dpH}{dt} = K_{in} \cdot (1 + \text{Eff}_{\text{drug}} + \text{Eff}_{\text{food}} + \text{Circ}) - \frac{K_{in}}{\text{Base}} \cdot pH$. $K_{in}$ is the production rate, $\text{Base}$ is baseline pH, and the elimination rate is $K_{out} = K_{in}/\text{Base}$ to maintain steady state at baseline. $\text{Eff}_{\text{drug}}$ is a logistic function of plasma concentration (with drug-specific $\text{Sd}$ and $\text{Slope}_d$). $\text{Eff}_{\text{food}}$ is a logistic function of the food compartment state. $\text{Circ}$ is a cosine function of time. (3) Food compartment: a first-order compartment describing gastric food content with rate $K_g$, providing input to the food effect function. The maximum pH increase achievable from either drug or food is limited by $pHMax$ (estimated as 5.57). Parameters for all components are listed in Table 2.

---

### Detailed Methodological Analysis

#### Modeling Approach
A semi-mechanistic PK/PD model was developed: PK used a one-compartment model with first-order absorption and pH-dependent absorption rate via a Gaussian bell-shaped function of current pH. PD used an indirect response model where the production rate ($K_{in}$) was modulated by drug effect (logistic function), food effect (logistic function with separate compartment for gastric food content), and circadian rhythm (cosine function). The food-effect compartment was implemented as a separate compartment with first-order gastric emptying rate ($K_g$). Multi-level nonlinear mixed-effects modeling captured inter-drug (super-level) and inter-study (group-level) variability.

#### Data Sources
PK and PD data were digitized from published clinical trials for four PCABs: tegoprazan (5 studies), YH4808 (1 study), fexuprazan (1 study), and vonoprazan (2 studies). Total observations included 1,613 PK and 1,634 pH measurements across doses (1–600 mg), single/multiple regimens, and fasted/fed conditions. Each study arm was treated as a pseudo-individual. Placebo/control data were included where available.

#### Estimation Methods
Estimation was performed in NONMEM 7.5.1 using the SAEM-I (stochastic approximation expectation–maximization with interaction) algorithm. All random effects were implemented with mu-referencing for numerical stability. A multi-level approach using the $LEVEL option was applied with drug as super-level and study groups nested within drug.

#### Model Evaluation
Model diagnostics included: (1) goodness-of-fit plots (observed vs. population/individual predictions, CWRES); (2) visual predictive checks (VPCs) with 500 simulations; (3) nonparametric bootstrap (500 replicates, 449 successful) to assess parameter stability; and (4) evaluation of shrinkage metrics. Parameter plausibility was assessed against literature values for PK and PD parameters.

#### Covariate Analysis
No formal covariate analysis was performed due to incomplete reporting of covariates (age, sex, weight) across studies. Instead, physiological modifiers (food, circadian) were incorporated as structural mechanistic components. Drug identity was treated as a super-level covariate accounting for inter-drug variability in PK and PD parameters.

---

### Statistical Rigor Assessment
The SAEM-I algorithm with mu-referencing is appropriate for the complex hierarchical model. Bootstrap resampling (500 replicates, 90% convergence) confirmed parameter stability. VPCs showed good agreement with observed data, supporting predictive performance. However, the use of digitized mean data as pseudo-individuals means that the estimated IIV actually captures inter-study variability, not true subject-level variability. Parameter uncertainty was reported via RSE, but confidence intervals from bootstrap were only shown in supplementary materials. No formal sensitivity analysis or model selection criteria (e.g., BIC) were reported; OFV from SAEM was monitored but not used for formal hypothesis testing. The lack of formal covariate analysis limits the ability to identify patient-specific factors influencing PK/PD.

---

## 📊 Key Findings
The multi-level model simultaneously fitted four PCABs, capturing differences in PK ($CL$, $V_d$, $K_a$) and PD potency. The pharmacodynamic potency index (PPI) ranked PCABs as vonoprazan (24.2 nM) > fexuprazan (45.6 nM) > YH4808 (80.7 nM) > tegoprazan (286 nM), paralleling in vitro $IC_{50}$ values. Simulations demonstrated that both pre- and post-meal dosing enhance early pH control compared to during-meal administration, with post-meal dosing showing additive synergy under low-dose and non-steady-state conditions. At steady state, simulated $pH \geq 4$ holding time ratios (HTRs) were tegoprazan 60%, YH4808 42%, fexuprazan 69%, and vonoprazan 75%, consistent with reported clinical ranges. The feedback $\text{SCALE}$ parameter order (vonoprazan > fexuprazan > YH4808 > tegoprazan) aligned directionally with known $pK_a$ values.

---

### Strengths & Limitations

#### Strengths
- Novel multi-level framework simultaneously modeling four PCABs with mechanistic integration of circadian, food, and feedback effects
- Explicit separation of drug and food contributions to pH elevation via distinct compartments and effect functions
- pH-dependent absorption feedback mechanism (bell-shaped Gaussian) is physiologically plausible and supported by solubility data
- Derived PPI aligns with in vitro potency ranking, supporting biological validity
- Simulation results closely match reported clinical pH holding time ratios across all four drugs
- Successful use of SAEM for complex hierarchical model with 13+ parameters and limited data shows methodological rigor

#### Limitations (Acknowledged by Authors)
- Data derived from digitized mean profiles rather than individual-level data
- Incomplete reporting of covariates (age, sex, weight) across studies prevented formal covariate analysis
- One-compartment simplification for YH4808 may not be optimal (previous studies used two compartments)
- Food effect scaling parameter ($\text{Sf}$) had large uncertainty (RSE ~51.1%) due to variability in meal types and incomplete meal timing information
- High variability in pH simulations limited the ability to detect statistically significant differences between dosing regimens
- Limited to healthy subjects; patient data needed for broader applicability

#### Limitations (Expert Review)
- Digital extraction of mean profiles from figures introduces digitization error and loss of within-subject variability structure
- Estimated inter-individual variability (IIV) confounds true IIV with inter-study heterogeneity, limiting interpretability of random effects
- The pharmacodynamic potency index (PPI) is not a formal $IC_{50}$ and should be interpreted qualitatively; it incorporates model-derived parameters with uncertainty
- The circadian rhythm model uses a simple cosine function; more complex patterns (e.g., Fourier series used in some previous models) might improve fit
- No formal model selection criteria (AIC/BIC) or alternative structural models were compared in the main text

#### Generalizability
The model was developed using data from healthy subjects only, which limits direct extrapolation to patient populations (e.g., GERD, PUD). However, the mechanistic structure is designed to be adaptable when patient data become available. The multi-level framework allows generalization to other PCABs or next-generation compounds by updating drug-specific parameters at the super-level. Simulation results for pH holding time ratios matched published clinical ranges, supporting generalizability within the class.

---

### Key Equations

**Indirect Response pH Model**

{% raw %}
$$
\frac{dpH}{dt} = K_{in} \cdot \left( 1 + \text{Eff}_{\text{drug}} + \text{Eff}_{\text{food}} + \text{Circ} \right) - \frac{K_{in}}{\text{Base}} \cdot pH
$$
{% endraw %}

Indirect response model describing the rate of change of intragastric pH. The production rate ($K_{in}$) is modulated by drug effect ($\text{Eff}_{\text{drug}}$), food effect ($\text{Eff}_{\text{food}}$), circadian rhythm ($\text{Circ}$), and a baseline offset. $K_{out} = K_{in}/\text{Base}$ to maintain steady state at baseline.

**Circadian Rhythm Component**

{% raw %}
$$
\text{Circ} = \text{AMP} \cdot \cos\left( \frac{2\pi}{24} (t - t_{\text{peak}}) \right)
$$
{% endraw %}

Circadian rhythm component modeled as a cosine function with period 24 h. $\text{AMP}$ is amplitude, and the phase shift is estimated relative to a reference time (e.g., midnight).

**Drug Effect Function**

{% raw %}
$$
\text{Eff}_{\text{drug}} = \frac{\text{pHMax}}{1 + \exp\left( -\text{Sd}_{\text{drug}} \cdot (S - \text{Slope}_{d}) \right)}
$$
{% endraw %}

Drug effect function (logistic form) producing an increase in pH limited by $pHMax$. $\text{Sd}$ is the drug-specific scaling factor, and $\text{Slope}_d$ controls steepness. The variable $S$ represents drug exposure (e.g., plasma concentration at the effect site).

**Food Effect Function**

{% raw %}
$$
\text{Eff}_{\text{food}} = \frac{\text{pHMax}}{1 + \exp\left( -\text{Sf} \cdot (F - 1) \right)}
$$
{% endraw %}

Food effect function, structurally similar to the drug effect function but with food-specific scaling factor $\text{Sf}$ and fixed slope of 1.

**pH-Dependent Absorption Feedback**

{% raw %}
$$
K_a(t) = \text{Ka}_0 \cdot \exp\left( -\left( \frac{pH(t) - \text{SCALE}}{\text{SHAPE}} \right)^2 \right)
$$
{% endraw %}

Gaussian bell-shaped feedback function that modifies the absorption rate $K_a$ based on current gastric pH. $\text{SCALE}$ is the pH for maximal absorption, and $\text{SHAPE}$ controls the peak width.

**Pharmacodynamic Potency Index**

{% raw %}
$$
\text{PPI} (\text{nM}) = \frac{1}{\text{Sd}_{\text{drug}} \cdot Vd_{\text{drug}} \cdot MW_{\text{drug}}} \times 10^6
$$
{% endraw %}

Pharmacodynamic potency index (PPI) derived from $\text{Sd}$ to enable cross-drug comparison on a molar concentration basis. $\text{Vd}_{\text{drug}}$ is the volume of distribution, $MW$ is molecular weight. The factor $10^6$ converts to nM.

---

### Figures & Tables

- **Figure 1**: Schematic of the mechanistic PK/PD model with multi-level random effects structure (Fixed, NLMEM, Random levels).
  - *Significance*: Provides visual overview of the model architecture including drug and food compartments, circadian rhythm, pH-dependent absorption feedback, and the nested random-effects hierarchy.
- **Figure 2**: Goodness-of-fit plots for all four PCABs: observations vs. population predictions (A), observations vs. individual predictions (B), individual weighted residuals (C), and conditional weighted residuals (D).
  - *Significance*: Demonstrates adequate fit at both population and individual levels with no major systematic bias; CWRES are symmetrically distributed around zero within ±3.
- **Figure 3**: Visual predictive checks for plasma concentration (left four panels) and intragastric pH (right four panels) for each PCAB.
  - *Significance*: Confirms model's predictive performance: observed percentiles fall within simulated confidence intervals, indicating that the model captures central tendency and variability across doses and time.
- **Figure 4**: Response surface showing predicted percentage of time with gastric pH ≥ 4 as a function of tegoprazan dose and time of dosing (TOD) relative to meal on Days 1 and 7.
  - *Significance*: Illustrates how dose and meal timing interact to influence acid suppression efficacy; pre‑ and post‑meal administration yield higher HTRs than during-meal administration, especially at steady state.
- **Table 1**: Summary of studies included for each drug: author, design, dose groups, and numbers of PK and PD observations.
  - *Significance*: Documents the data sources supporting the analysis; highlights the range of doses and study designs (single/multiple dose, fasted/fed) across four PCABs.
- **Table 2**: Final population PK/PD parameter estimates with RSE, inter-individual variability (IIV), and inter-drug variability (IDV).
  - *Significance*: Provides quantitative basis for all model components: physiological parameters ($K_{in}$, $\text{Base}$, $pHMax$, $\text{AMP}$, $K_g$), drug-specific PK ($K_a$, $CL$, $V_d$) and PD effect parameters ($\text{Sd}$, $\text{Slope}_d$), and feedback function parameters ($\text{SCALE}$, $\text{SHAPE}$).
- **Table 3**: Simulated pH metrics (mean pH, duration ≥ 4, HTR) for typical doses of each PCAB on Day 1 and Day 7, compared with reported clinical HTR ranges.
  - *Significance*: Validates model predictions against published clinical data; simulated HTRs (tegoprazan 60%, YH4808 42%, fexuprazan 69%, vonoprazan 75%) align well with reported ranges.

---

### Code & Reproducibility Assessment
The authors state that the model was implemented in NONMEM version 7.5.1 using the SAEM-I algorithm. No code or dataset is publicly provided. Data were digitized from published figures using Engauge Digitizer, which limits full reproducibility.

---

### Future Directions
The authors suggest extending the framework to patient populations (e.g., GERD, PUD), incorporating dissolution kinetics, patient-specific covariates, and drug–drug interaction mechanisms. The multi-level structure is readily adaptable for deriving target product profiles for new PCABs. Future work should aim to validate the model using individual-level clinical data and explore its utility in adaptive trial design for acid-related disorders.

---

### Expert Commentary
This paper represents a commendable step forward in cross‑class pharmacometrics for acid‑suppressing agents. The multi‑level approach is elegantly suited to the problem: PCABs share a mechanism but differ in potency and absorption, and the hierarchical structure avoids the biased pooling that plagues naive meta‑analyses. I particularly appreciate the incorporation of a food‑effect compartment—a pragmatic addition that separates food‑induced pH elevation from drug effect, addressing a common confounder in gastric pH studies. From a regulatory perspective, the model could support virtual bioequivalence and food‑effect comparisons across the class. However, the reliance on digitized mean data means the estimated inter‑individual variability (IIV) actually reflects inter‑study heterogeneity, limiting inference about true patient‑level variability. Adopting a two‑compartment structure for YH4808 (as previous work suggested) might improve its specific fit. The pharmacodynamic potency index transformation is clever but should be interpreted qualitatively; it is not a formal $IC_{50}$ estimate. Overall, this framework is a strong foundation for future work integrating patient data, dissolution kinetics, and drug–drug interactions.

---

### Bottom Line
This work provides a mechanistically grounded, multi-level PK/PD platform for PCABs that simultaneously accounts for circadian pH rhythms, food effects, and pH-dependent absorption. The model successfully differentiates four PCABs by pharmacodynamic potency (vonoprazan > fexuprazan > YH4808 > tegoprazan) and reveals that both pre‑ and post‑meal dosing can enhance early pH control through distinct mechanisms. For practitioners, this framework offers a scalable tool for dose optimization, food–drug interaction assessment, and target product profiling of next-generation acid suppressants within a model-informed drug development (MIDD) paradigm.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-06-15-a-mechanism-based-multi-level-population-pkpd-model-for-potassium-competitive/figures/fig_01.jpg)

![Scheme of the mechanistic model and the levels of the random effects in the model (Fixed, fixed effect; NLMEM, nonlinear mixed effect model; Random, random effec]({{ site.baseurl }}/assets/digests/2026-06-15-a-mechanism-based-multi-level-population-pkpd-model-for-potassium-competitive/figures/fig_02.jpg)

![Goodness of Fit (GOF) for PCABs. (A) Observations versus population prediction. (B) Observations versus individual prediction. (C) Individual weighted residuals]({{ site.baseurl }}/assets/digests/2026-06-15-a-mechanism-based-multi-level-population-pkpd-model-for-potassium-competitive/figures/fig_03.jpg)

![Visual Predictive Checks (VPCs) of PCABs. Left 4 panes (A) are VPC for plasma drug concentration, right 4 panes (B) for pH. The areas are confidence intervals of]({{ site.baseurl }}/assets/digests/2026-06-15-a-mechanism-based-multi-level-population-pkpd-model-for-potassium-competitive/figures/fig_04.jpg)

![Population prediction-based percentages of the gastric pH maintained above 4 depending on the dose of tegoprazan and time of dosing (TOD). TOD is the time differ]({{ site.baseurl }}/assets/digests/2026-06-15-a-mechanism-based-multi-level-population-pkpd-model-for-potassium-competitive/figures/fig_05.jpg)