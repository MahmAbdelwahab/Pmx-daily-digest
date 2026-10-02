---
layout: post
title: "Simultaneous Population PKPD Analysis of Belantamab Mafodotin, Soluble BCMA, and Serum M-Protein in Relapsed/Refractory Multiple Myeloma"
date: 2026-10-02
authors: "Clements JD, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70337"
paper_type: popk
tags: [popk]
excerpt_text: "This paper presents a simultaneous PKPD model linking belantamab mafodotin exposure to sBCMA and M-protein dynamics in RRMM, using data from 510 patients across four DREAMM trials. The model identifies key covariates (baseline sBCMA, albumin, body weight, sex, extramedullary disease) and supports that doses ≥200 mg achieve sustained M-protein suppression without rebound. Pharmacometricians and clinical developers should read this for its semi-mechanistic TMDD framework and practical dose–response simulations."
pdf_path: "/assets/digests/2026-10-02-simultaneous-population-pkpd-analysis-of-belantamab-mafodotin-soluble-bcma-and/PMx_Simultaneous_Population_PKPD_Analysis_of_20261002.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a simultaneous PKPD model linking belantamab mafodotin exposure to sBCMA and M-protein dynamics in RRMM, using data from 510 patients across four DREAMM trials. The model identifies key covariates (baseline sBCMA, albumin, body weight, sex, extramedullary disease) and supports that doses ≥200 mg achieve sustained M-protein suppression without rebound. Pharmacometricians and clinical developers should read this for its semi-mechanistic TMDD framework and practical dose–response simulations.

---

### Executive Summary
This paper presents a simultaneous population PKPD model that jointly characterizes belantamab mafodotin pharmacokinetics, soluble BCMA (sBCMA), and serum M-protein dynamics in 510 patients with relapsed/refractory multiple myeloma from four DREAMM trials. The final model uses a two-compartment disposition with linear clearance and target-mediated drug disposition (quasi-equilibrium binding to sBCMA), a logistic growth model for M-protein with a direct drug effect on its death rate, and a reservoir compartment for sBCMA synthesis to capture different timescales. Eight covariate effects were retained, including baseline sBCMA, albumin, body weight, sex, and extramedullary disease. Simulations show that higher doses lead to greater M-protein suppression and lower free sBCMA, with no rebound after 200 mg or higher doses within 28 days. The model provides a semi-mechanistic understanding of the interplay between drug exposure and disease markers, supporting dose optimization and future combination studies.

---

### Scientific Context & Motivation
Previous analyses modeled belantamab mafodotin PK and M-protein PD separately, lacking a unified framework to capture the bidirectional relationship between drug exposure and disease markers. This study addresses the gap by simultaneously modeling PK, sBCMA (a target and disease burden marker), and M-protein (a clinical response biomarker) using data from multiple DREAMM studies. The work integrates TMDD with disease dynamics, providing a more mechanistic understanding of how baseline disease burden affects drug clearance and response, and enabling simulations to guide dose selection.

---

## ⚡ Methodological Snapshot
A simultaneous population PKPD model was developed using NONMEM, integrating belantamab mafodotin PK, sBCMA, and M-protein data from four DREAMM trials. The base model combined a two-compartment PK with TMDD (quasi-equilibrium binding to sBCMA), a logistic growth model for M-protein with a direct drug effect on death rate, and a reservoir compartment for sBCMA synthesis. Sensitivity analyses reduced overparameterization. Stepwise covariate modeling identified eight covariates. The final model was evaluated with VPCs, bootstrap, and sensitivity analyses, and used for simulations of dose/schedule effects.

---

## 🏗️ Structural Model Breakdown
The final model consists of: (1) A two-compartment PK model for belantamab mafodotin (central and peripheral) with linear clearance (CLADC) and TMDD via quasi-equilibrium binding to sBCMA. Total drug (free + complex) diffuses to the peripheral compartment. (2) sBCMA dynamics: a reservoir compartment where synthesis is scaled by M-protein relative to baseline, with transfer to a central free sBCMA compartment (rate KDIFF). Free sBCMA binds to belantamab mafodotin to form a complex, which is eliminated. (3) M-protein: logistic growth with rate KGR and drug-induced death rate KDEATH, where free belantamab mafodotin concentration directly increases KDEATH. The model includes between-subject variability on CLADC, VC, VP, KDEATH, and KGR.

---

### Detailed Methodological Analysis

#### Modeling Approach
Simultaneous PKPD modeling combining previous PopPK and M-protein PD models. Base model simplified via sensitivity analyses to a 2-compartment model with linear clearance and TMDD (quasi-equilibrium), logistic M-protein growth with direct drug effect, and sBCMA reservoir compartment. Final model allowed total (not free) belantamab mafodotin to diffuse to peripheral compartment.

#### Data Sources
Data from 510 patients with RRMM receiving belantamab mafodotin monotherapy in DREAMM-1, DREAMM-2, DREAMM-3, and DREAMM-5. Included 15,860 PK/PD observations (total ADC, free sBCMA, complex sBCMA, M-protein). Inclusion required ≥1 PD measurement and baseline M-protein >0.5 g/L. BLQ M-protein values were imputed to the lowest observed value.

#### Estimation Methods
NONMEM v7.4.3 with stochastic approximation expectation maximization (SAEM) and importance sampling. Dependent variables were log-transformed with additive residual error on log scale.

#### Model Evaluation
Goodness-of-fit plots, prediction-corrected visual predictive checks (VPCs), bootstrap (95% CIs), and sensitivity analyses (local OAT and global eFAST). Model stability and parameter precision assessed via RSEs and shrinkage.

#### Covariate Analysis
Stepwise forward addition ($\alpha < 0.01$) and backward elimination ($\alpha < 0.001$) were used, with covariates tested on CLADC, VC, VP, KDEATH, and KGR. Continuous covariates were power models scaled to median/standard values; categorical covariates used proportional structures. Additional testing of myeloma immunoglobulin type on KDEATH and baseline IgG on $CL$ was performed. Covariates lacking clinical relevance were excluded.

---

### Statistical Rigor Assessment
The analysis used a large integrated dataset (510 patients, 15,860 observations) with robust estimation methods (SAEM, importance sampling). Parameter precision was generally good (RSEs <30% for most fixed effects), though BSV on CLADC and VC had high RSEs (>55%). Bootstrap CIs were narrow for covariate effects, supporting their inclusion. VPCs showed acceptable predictive performance, with slight misspecification for sBCMA. Sensitivity analyses (local and global) were used to justify model simplifications. Limitations include high residual variability for sBCMA and complex sBCMA, exclusion of patients with only free light chain monitoring, and lack of dropout modeling.

---

## 📊 Key Findings
The final model includes a two-compartment PK model with linear clearance and TMDD (quasi-equilibrium binding to sBCMA), a logistic growth model for M-protein with a direct effect of free belantamab mafodotin on its death rate, and a reservoir compartment for sBCMA synthesis. Eight covariates were retained: baseline sBCMA, albumin, body weight, and sex on CLADC; body weight and sex on VC; extramedullary disease and baseline sBCMA on KDEATH. Higher baseline sBCMA increased CLADC and KDEATH, while extramedullary disease reduced KDEATH. Simulations showed that higher doses (≥200 mg) produce greater M-protein suppression and lower free sBCMA, with no rebound within 28 days, and Q2W vs Q4W had minimal impact on M-protein dynamics at equivalent dose intensity.

---

## 💡 Clinical & Regulatory Implications
The model quantifies how baseline disease burden (sBCMA, albumin, extramedullary disease) influences belantamab mafodotin clearance and M-protein dynamics, potentially guiding dose individualization. Simulations suggest that Q2W and Q4W schedules produce similar M-protein suppression at doses ≥200 mg, with no rebound within 28 days, supporting flexible dosing. The framework can be updated with combination data to inform regulatory decisions and future trial designs.

---

### Strengths & Limitations

#### Strengths
- Large integrated dataset from four clinical trials with rich PK/PD sampling.
- Simultaneous modeling reduces bias compared to sequential PK/PD approaches.
- Use of local and global sensitivity analyses to simplify an overparameterized model.
- Semi-mechanistic TMDD structure links drug exposure to target dynamics.
- Comprehensive covariate analysis with clinical relevance filtering.
- Model simulations directly inform dose–response and schedule comparisons.

#### Limitations (Acknowledged by Authors)
- High residual variability for free and complex sBCMA, possibly due to assay issues.
- Exclusion of patients with only serum free light chain monitoring.
- M-protein sampling only on Day 1 of cycles, limiting verification of within-interval dynamics.
- No explicit resistance mechanism or dropout modeling.
- Uncertainty in some parameter estimates (BSV on CLADC, VC) despite bootstrap support.

#### Limitations (Expert Review)
- The quasi-equilibrium TMDD assumption may not fully capture the kinetics of complex internalization, as KINT was set equal to KEL, potentially oversimplifying.
- The reservoir compartment for sBCMA is empirical and may not reflect true biology.
- The model does not account for time-varying clearance or immunogenicity, which could affect long-term predictions.
- Simulations assume no dose modifications or treatment discontinuation, which may overestimate exposure effects.

#### Generalizability
The model is based on a diverse RRMM population across four studies, but external validation is lacking. It may not generalize to patients with only free light chain disease or to combination regimens. The covariate effects are consistent with prior analyses, supporting some generalizability.

---

### Key Equations

**Log-normal random effects model**

{% raw %}
$$
\theta_{ki} = \theta_k \cdot e^{\eta_{ki}}
$$
{% endraw %}

Interindividual random effects are modeled as log-normal, where $\theta_{ki}$ is the individual parameter, $\theta_k$ the typical value, and $\eta_{ki}$ the random effect with variance $\omega_k^2$.

**Quasi-equilibrium binding**

{% raw %}
$$
K_D = \frac{C_{free} \cdot R_{free}}{C_{complex}}
$$
{% endraw %}

Quasi-equilibrium approximation for target-mediated drug disposition, where $K_D$ is the equilibrium dissociation constant for belantamab mafodotin–sBCMA binding.

**M-protein logistic growth with drug effect**

{% raw %}
$$
\frac{dM}{dt} = K_{GR} \cdot M \cdot \left(1 - \frac{M}{M_{max}}\right) - K_{DEATH} \cdot C_{free} \cdot M
$$
{% endraw %}

M-protein dynamics follow logistic growth with a drug-induced death rate; free belantamab mafodotin concentration ($C_{free}$) directly increases the death rate constant $K_{DEATH}$.

**sBCMA reservoir dynamics**

{% raw %}
$$
\frac{dR_{sBCMA}}{dt} = k_{syn} \cdot \frac{M}{M_0} - K_{DIFF} \cdot R_{sBCMA}
$$
{% endraw %}

sBCMA synthesis occurs in a reservoir compartment and transfers to the central compartment with rate constant $K_{DIFF}$; synthesis is scaled by M-protein relative to baseline.

---

### Figures & Tables

- **Figure 1**: Heatmap of global sensitivity results for the final model, showing the impact of parameter variations on model outputs.
  - *Significance*: Demonstrates that the model is most sensitive to CLADC and key PD parameters, supporting the structural choices and parameter identifiability.
- **Figure 2**: Schematic of the base PKPD model showing compartments for belantamab mafodotin (central/peripheral), sBCMA (reservoir and central), and M-protein, with arrows indicating drug–target binding and feedback effects.
  - *Significance*: Provides a visual overview of the model structure, including TMDD, reservoir compartment, and direct drug effect on M-protein death.
- **Figure 3**: Prediction-corrected visual predictive checks for free sBCMA, complex sBCMA, total belantamab mafodotin, and M-protein.
  - *Significance*: Validates the model's predictive performance; slight overprediction of free sBCMA and underprediction of complex sBCMA indicate residual misspecification.
- **Figure 4**: Model-predicted vs observed proportions of patients achieving different degrees of M-protein reduction at nadir across DREAMM studies.
  - *Significance*: Confirms the model captures the distribution of clinical responses, supporting its use for simulations.
- **Figure 5**: Median simulated concentrations of belantamab mafodotin (free, complex, total), free sBCMA, and M-protein after first dose for various dose levels and schedules (Q2W, Q4W).
  - *Significance*: Illustrates dose–response relationships and schedule effects, showing higher doses yield greater M-protein suppression and lower sBCMA, with no rebound for ≥200 mg.
- **Table 1**: Baseline demographics and disease characteristics by study and overall population.
  - *Significance*: Provides context for covariate distributions and generalizability of the model.
- **Table 2**: Final model parameter estimates, covariate effects, between-subject variability, and residual error variances with bootstrap confidence intervals.
  - *Significance*: Key reference for model implementation and interpretation of covariate influences on PK and PD parameters.

---

### Code & Reproducibility Assessment
Model code is provided in the Supporting Information. Individual participant data are available upon request via GSK's data sharing portal (https://www.gsk-studyregister.com/en/).

---

### Supplementary Materials
Supplementary materials include Table S1 (study summaries and sampling), Table S2 (covariates tested), Table S3 (observation counts), Table S4 (base model parameter estimates), Figures S1–S6 (starting model, sensitivity analyses, model equations, goodness-of-fit, random effects, forest plots). Model code is also provided.

---

### Future Directions
Future work should incorporate data from combination regimens (e.g., DREAMM-7/8) to refine the model and support dose recommendations. External validation in populations with serum free light chain-only monitoring is needed. Adding dropout modeling and explicit resistance mechanisms would enable longer-term simulations. The methodology could be extended to other ADCs and disease areas with similar biomarker dynamics.

---

### Expert Commentary
This work exemplifies the value of simultaneous PKPD modeling over sequential approaches, reducing bias and enabling a holistic view of drug–biomarker–disease interactions. The use of sensitivity analyses to prune an overparameterized starting model is a pragmatic and rigorous approach, though the high residual variability for sBCMA and complex sBCMA suggests assay or biological variability remains unexplained. The model's ability to simulate M-protein dynamics across dosing schedules is clinically useful, but the lack of explicit resistance mechanisms and dropout modeling limits long-term predictions. Future integration of combination data and external validation will be critical for regulatory acceptance.

---

### Bottom Line
This simultaneous PKPD model integrates belantamab mafodotin PK, sBCMA, and M-protein dynamics across four DREAMM studies, providing a semi-mechanistic framework to simulate dose–response relationships. The model supports that higher doses (≥200 mg) yield sustained M-protein suppression without rebound within a 4-week interval, and identifies baseline sBCMA, albumin, body weight, sex, and extramedullary disease as key covariates. It offers a foundation for future exposure–response analyses and dose optimization in combination regimens.

---

---

## 📊 Figures

![Heatmap of global sensitivity results for the final model. ADC, antibody-drug conjugate (belantamab mafodotin); CLADC, ADC central clearance; KD, ADC-sBCMA compl]({{ site.baseurl }}/assets/digests/2026-10-02-simultaneous-population-pkpd-analysis-of-belantamab-mafodotin-soluble-bcma-and/figures/fig_01.png)

![Base PKPD model. Figure adapted from previous presentation in poster format the American Conference on Pharmacometrics 2024 in Phoenix, Arizona, USA. (1) KINT wa]({{ site.baseurl }}/assets/digests/2026-10-02-simultaneous-population-pkpd-analysis-of-belantamab-mafodotin-soluble-bcma-and/figures/fig_02.png)

![Model-predicted and observed proportions of patients achieving different degrees of M-protein reduction at nadir in the DREAMM-1, DREAMM-2, DREAMM-3, and DREAMM-]({{ site.baseurl }}/assets/digests/2026-10-02-simultaneous-population-pkpd-analysis-of-belantamab-mafodotin-soluble-bcma-and/figures/fig_03.png)

![Median simulated belantamab mafodotin, sBCMA, and M-protein values over time after the first dose of ADC, antibody-drug conjugate (belantamab mafodotin); sBCMA,]({{ site.baseurl }}/assets/digests/2026-10-02-simultaneous-population-pkpd-analysis-of-belantamab-mafodotin-soluble-bcma-and/figures/fig_04.png)