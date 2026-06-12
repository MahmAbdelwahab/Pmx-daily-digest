---
layout: post
title: "Integrating MBMA and QSP to Identify Key Covariates and Predict Treatment Outcomes in Relapsed/Refractory Multiple Myeloma"
date: 2026-06-01
authors: "Shah Z, Anderson CM, Zhou J, Hu C, Ratushny AV, Kondic AG, McCormick KD, Vallejo C, Duncan W"
journal: "CPT: Pharmacometrics & Systems Pharmacology (in press)"
doi: "N/A"
paper_type: popk
tags: [popk, qsp, oncology, regulatory, meta-analysis]
excerpt_text: "This paper demonstrates a dual MBMA–QSP framework for relapsed/refractory multiple myeloma (RRMM) that identifies key covariates (prior lines, steroid use, alkylating agents) affecting efficacy and safety, and predicts outcomes for novel combinations like CELMoD + T-cell engagers. Pharmacometricians and clinical pharmacologists involved in oncology MIDD will find the integrated approach valuable for benchmarking and extrapolation without head-to-head trials."
pdf_path: "/assets/digests/2026-06-01-integrating-mbma-and-qsp-to-identify-key-covariates-and-predict-treatment/PMx_Integrating_MBMA_and_QSP_to_Identify_Key_20260601.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper demonstrates a dual MBMA–QSP framework for relapsed/refractory multiple myeloma (RRMM) that identifies key covariates (prior lines, steroid use, alkylating agents) affecting efficacy and safety, and predicts outcomes for novel combinations like CELMoD + T-cell engagers. Pharmacometricians and clinical pharmacologists involved in oncology MIDD will find the integrated approach valuable for benchmarking and extrapolation without head-to-head trials.

---

### Executive Summary
The study applied a model-based meta-analysis (MBMA) to published RRMM trial data (192 trials for ORR, 130 for Grade $\ge$ 3 neutropenia) to identify significant covariates: alkylating agent use increased neutropenia risk, while fewer prior lines and background corticosteroid use improved ORR. A quantitative systems pharmacology (QSP) model was calibrated on a similar dataset and extended to predict outcomes for novel combinations, including CELMoD agents and T-cell engagers. The QSP model incorporated a statistical classifier (fresp) to stratify virtual patients by prior lines of therapy, enabling prediction of regimen-specific ORR across different treatment histories. Together, MBMA and QSP provide a comprehensive benefit–risk assessment framework that accounts for patient heterogeneity and supports decision-making in the absence of direct comparative trials.

---

### Scientific Context & Motivation
RRMM is a heterogeneous disease with a rapidly expanding treatment landscape including proteasome inhibitors, IMiDs, monoclonal antibodies, bispecific T-cell engagers, and CAR-T cells. Direct head-to-head comparisons are often unavailable, and patient-level covariates (prior lines, cytogenetic risk, renal function) complicate indirect comparisons. MBMA can quantify covariate effects from aggregate trial data, while QSP models provide mechanistic insight into disease biology and drug action. This study addresses the gap of integrating these two approaches: MBMA identifies impactful covariates, which are then semi-mechanistically incorporated into a QSP model to predict outcomes for untested combinations, thereby broadening the scope of model-informed drug development in oncology.

---

## ⚡ Methodological Snapshot
The MBMA used nonlinear mixed-effects modeling (Monolix) on aggregate trial data to estimate treatment-specific fixed effects and covariate effects for ORR (logit-transformed) and Grade $\ge$ 3 neutropenia (logit-transformed). Covariate selection used stepwise forward addition guided by BIC. The QSP model was developed in Python/Seaborn, representing disease progression, drug mechanisms (IMiDs, proteasome inhibitors, mAbs, TCEs, CELMoDs), and clinical endpoints (ORR, BOR, TTR, PFS). Virtual patients were calibrated to reproduce observed trial outcomes, and a statistical classifier (fresp) was used to stratify by prior lines of therapy.

---

## 🏗️ Structural Model Breakdown
MBMA: The structural model for both endpoints is a logistic regression with treatment-specific intercepts (EFF) and covariate effects on the logit scale. Between-trial variability is modeled as random effects on the intercept. Dose–response relationships are linear on the logit scale for selected monotherapies. QSP: The QSP model is a system of ODEs representing multiple myeloma tumor burden, immune cell populations (T cells, NK cells, plasma cells), cytokine dynamics, and drug mechanisms (proteasome inhibition, IMiD-mediated cereblon modulation, anti-CD38 antibody-dependent cellular cytotoxicity, T-cell engager-mediated killing, CELMoD-induced degradation of transcription factors). Clinical endpoints (ORR, BOR, TTR, PFS) are derived from simulated tumor burden trajectories using IMWG criteria. The model includes a statistical layer (fresp) that maps virtual patient characteristics to prior line groups.

---

### Detailed Methodological Analysis

#### Modeling Approach
MBMA: Nonlinear mixed-effects model with logit-transformed endpoints (ORR, Grade $\ge$ 3 neutropenia). Treatment-specific fixed effects (EFF) estimated for 11 (neutropenia) and 21 (ORR) regimens. Between-trial variability modeled as random effects. Dose–response relationships tested for monotherapies (linear for lenalidomide on neutropenia, linear for carfilzomib on ORR). Covariates included trial-level summaries (mean age, % male, % white, ISS stage distribution, % with 1 prior line, background alkylator use, background steroid use). QSP: Mechanistic model with ordinary differential equations representing multiple myeloma disease progression, immune cell dynamics, and drug mechanisms. Calibrated using clinical trial data and proprietary biomarker data. Virtual patients generated by sampling from calibrated parameter distributions. Prediction intervals generated by 1000 virtual trials per comparison.

#### Data Sources
MBMA: Certara's Clinical Outcomes Database (CODEx) comprising 352 randomized trials, 512 arms, 177,692 RRMM patients. Final analysis included 130 trials (154 arms, 17,246 patients) for neutropenia and 192 trials (239 arms, 22,227 patients) for ORR. QSP: Similar dataset plus additional proprietary data on CELMoDs, TCEs, and biomarker data (serum BCMA, free light chains, bone marrow myeloma fraction, cytokine release). Calibration: 103 arms (24 combinations); validation: 20 arms (12 combinations).

#### Estimation Methods
MBMA: Maximum likelihood estimation via stochastic approximation expectation-maximization (SAEM) algorithm implemented in Monolix 2023R1. QSP: Calibration using a combination of manual fitting and automated optimization (details not fully specified); virtual population generation by sampling from calibrated parameter distributions.

#### Model Evaluation
MBMA: Visual predictive checks (VPCs) with 500 replicates per study; benchmark plots with 95% CI from standard errors of fixed effects; simulation-based covariate impact plots (1000 virtual trials). QSP: Prediction intervals (90% PI) from 1000 virtual trials; comparison of observed vs. predicted outcomes for calibration (77.2% within PI) and validation (78.9% within PI) datasets; assessment of inter-run variability.

#### Covariate Analysis
MBMA: Stepwise covariate model building using BIC. Covariates with ≤40% missing data were tested; missing values imputed with median. Significant covariates for neutropenia: background alkylating agent use (increased risk). Significant covariates for ORR: % patients with 1 prior line (positive), background corticosteroid use (positive). QSP: Prior lines incorporated via a statistical classifier (fresp) derived from simulated ORR across all treatments, then used to stratify virtual patients into Nprior groups (1, 2–3, 4+).

---

### Statistical Rigor Assessment
The MBMA uses appropriate nonlinear mixed-effects methodology with SAEM estimation, which is robust for aggregate data. Covariate selection via BIC balances fit and complexity, though stepwise selection can be sensitive to correlated covariates. Missing data imputation with median is acceptable for summary-level data but may attenuate covariate effects. VPCs show adequate model fit, but the number of replicates (500) is reasonable. The QSP model's prediction intervals are 'degenerate' (plug-in) and do not account for parameter uncertainty, which may underestimate variability. The validation approach (within-pathway, hold-out by drug) is appropriate, but the smaller validation trial sizes may inflate apparent performance. The lack of formal uncertainty quantification in the QSP model is a limitation.

---

## 📊 Key Findings
1) Alkylating agent use was a significant predictor of Grade $\ge$ 3 neutropenia (increased risk). 2) Percentage of patients with only one prior line of therapy and background corticosteroid use were significant positive predictors of ORR. 3) MBMA-derived benchmark plots enabled direct comparison of safety and efficacy across 21+ regimens, identifying teclistamab and isatuximab+pomalidomide as having highest neutropenia risk, and daratumumab+lenalidomide, bortezomib+thalidomide, and isatuximab+carfilzomib as having highest ORR. 4) QSP model captured the negative relationship between prior lines and ORR, and predicted a large increase in ORR for CELMoD+TCE combination therapy in patients with 1 or 2–3 prior lines versus 4+. 5) QSP model validation showed 78.9% of hold-out clinical endpoints fell within prediction intervals.

---

## 💡 Clinical & Regulatory Implications
The MBMA results confirm that alkylating agents increase neutropenia risk, supporting the use of G-CSF prophylaxis in alkylator-containing regimens. The positive effect of corticosteroids on ORR supports their continued use as backbone therapy. The finding that patients with fewer prior lines have higher ORR reinforces the importance of early-line treatment optimization. The benchmark plots provide quantitative comparisons that can inform regimen selection in the absence of head-to-head data. The QSP prediction of high ORR for CELMoD+TCE combinations in earlier lines suggests these novel combinations may be particularly effective in less heavily pretreated patients, guiding clinical trial design and patient stratification. Regulatory implications: the integrated framework could support extrapolation of efficacy to new combinations and inform labeling claims based on indirect comparisons.

---

### Strengths & Limitations

#### Strengths
- Dual focus on both efficacy (ORR) and safety (Grade $\ge$ 3 neutropenia) enables comprehensive benefit–risk assessment.
- Large, curated database (352 trials, 177,692 patients) provides robust statistical power for covariate identification.
- Integration of MBMA and QSP leverages complementary strengths: statistical covariate screening and mechanistic extrapolation.
- Innovative use of a statistical classifier (fresp) to incorporate prior lines of therapy into a QSP model without explicit mechanistic representation.
- Model evaluation includes VPCs, benchmark plots, and hold-out validation, supporting credibility.

#### Limitations (Acknowledged by Authors)
- Lack of consistent G-CSF prophylaxis data may bias neutropenia risk estimates.
- QSP model's Nprior classifier uses simple average of response status across scenarios, not weighted by trial size.
- Nprior classifier only uses ORR (not BOR, PFS) to determine prior line group.
- QSP model ignores potential cross-resistance or class-specific effects on subsequent treatment outcomes.
- TCE simulations pooled PK/PD parameters across molecules, limiting ability to distinguish between TCEs.

#### Limitations (Expert Review)
- QSP model validation performance may be overstated because median trial size in validation dataset was lower than in calibration dataset.
- MBMA covariate analysis restricted to variables with ≤40% missing data; imputation with median may introduce bias for highly missing covariates.
- Dose–response relationships were only tested for monotherapies; combination dose–response not explored.
- The QSP model's degenerate prediction intervals do not account for parameter uncertainty, potentially underestimating variability.
- The MBMA and QSP datasets overlapped but were not identical; differences in included drugs may limit direct comparability.

#### Generalizability
The MBMA framework is generalizable to other oncology indications with sufficient published trial data. The QSP model is specific to RRMM biology and drug mechanisms, but the approach of adding a statistical layer (fresp) to account for patient history could be adapted to other diseases. Findings on covariate effects (prior lines, steroids, alkylators) are consistent with clinical expectations and likely generalizable across RRMM populations, though quantitative estimates may vary with newer therapies.

---

---

### Figures & Tables

- **Figure 1**: Workflow for QSP model: virtual patients simulated across multiple RRMM treatments in parallel; clinical responses calculated using IMWG criteria.
  - *Significance*: Illustrates the QSP modeling pipeline, including calibration, virtual population generation, and prediction interval calculation.
- **Figure 2**: Visual predictive checks (VPCs) for final MBMA models: (A) Grade $\ge$ 3 neutropenia, (B) ORR. Red dots are observed medians; blue bars show predicted 90% intervals.
  - *Significance*: Demonstrates adequate model fit for both safety and efficacy endpoints, supporting use for simulation and benchmarking.
- **Figure 3**: Benchmark plots showing MBMA-derived point estimates and 95% CI for (A) Grade $\ge$ 3 neutropenia and (B) ORR across key RRMM regimens.
  - *Significance*: Enables direct comparison of safety and efficacy across treatments, identifying high-risk (teclistamab, isatuximab+pomalidomide) and high-efficacy (daratumumab+lenalidomide) regimens.
- **Figure 4**: Impact of key covariates on predicted outcomes: (A) Grade $\ge$ 3 neutropenia with/without alkylating agents; (B) ORR stratified by % patients with 1 prior line; (C) ORR stratified by background steroid use.
  - *Significance*: Quantifies covariate effects on predicted outcomes while showing relative treatment rankings remain consistent.
- **Figure 5**: QSP model visual predictive checks: predicted vs. observed outcomes for ORR, BOR, TTR, PFS across calibration and validation datasets.
  - *Significance*: Shows 77.2% of calibration and 78.9% of validation endpoints fall within prediction intervals, supporting model credibility.
- **Figure 6**: ORR vs. Nprior (prior lines) for QSP model fitting, validation, and prediction across multiple drug combinations, including CELMoD+TCE prediction.
  - *Significance*: Demonstrates QSP model captures negative relationship between prior lines and response, and predicts high ORR for CELMoD+TCE in earlier lines.
- **Table 1**: Summary of treatment regimens included in MBMA dataset, showing number of studies, arms, and patients for ORR and Grade $\ge$ 3 neutropenia endpoints.
  - *Significance*: Provides transparency on data availability and sample sizes for each regimen, informing interpretation of confidence intervals and model estimates.
- **Table S1**: QSP model calibration and validation dataset: 123 trial arms (103 fitting, 20 validation) across 36 drug combinations.
  - *Significance*: Documents the scope of QSP model training and testing, supporting assessment of generalizability.
- **Table S2**: Overlap between MBMA and QSP datasets.
  - *Significance*: Highlights differences in drug coverage between the two modeling approaches.
- **Table S3**: MBMA parameter estimates for Grade $\ge$ 3 neutropenia model.
  - *Significance*: Provides quantitative treatment effects and covariate coefficients for safety endpoint.
- **Table S4**: MBMA parameter estimates for ORR model.
  - *Significance*: Provides quantitative treatment effects and covariate coefficients for efficacy endpoint.
- **Table S5**: Covariates tested in MBMA analysis of Grade $\ge$ 3 neutropenia.
  - *Significance*: Documents the covariate screening process and descriptive statistics.
- **Table S6**: Covariates tested in MBMA analysis of ORR.
  - *Significance*: Documents the covariate screening process and descriptive statistics.

---

### Code & Reproducibility Assessment
Monolix model code is provided in the Supporting Information (Tables S3, S4). R code for simulations and plots, and Python code for QSP visualizations, are not explicitly shared. The QSP model itself is proprietary (Simulations Plus).

---

### Supplementary Materials
Supplementary materials include Tables S1–S6 detailing QSP dataset composition, MBMA parameter estimates, and covariate descriptive statistics. Monolix model code is also provided in the Supporting Information.

---

### Future Directions
Future work should incorporate G-CSF prophylaxis data to refine neutropenia risk estimates. The Nprior classifier could be enriched by including BOR, PFS, and biomarker data (e.g., baseline tumor burden) to better stratify virtual patients. The QSP model could be extended to model cross-resistance mechanisms and class-specific treatment histories. Applying the MBMA–QSP framework to other endpoints (e.g., PFS, OS) and other hematologic malignancies would test generalizability. Prospective validation of predicted CELMoD+TCE outcomes against emerging clinical data will be important.

---

### Expert Commentary
This is a well-executed demonstration of how two complementary modeling paradigms can be combined to address a common challenge in oncology: comparing heterogeneous treatments across diverse patient populations. The MBMA component is rigorous, using a large curated database and appropriate covariate selection (BIC). The QSP component is ambitious, attempting to capture disease progression and multiple mechanisms of action. The key innovation—using a statistical classifier (fresp) to map prior lines of therapy onto virtual patient characteristics—is clever but has limitations as the authors acknowledge. From a regulatory perspective, this integrated approach could support dose selection, patient stratification, and go/no-go decisions, especially when combined with external control analyses. The main teaching point is that MBMA and QSP are not competing but synergistic: MBMA provides the 'what' (which covariates matter), and QSP provides the 'why' (mechanistic rationale) and 'what if' (extrapolation to novel combinations). The field should watch for prospective validation of the CELMoD+TCE predictions.

---

### Bottom Line
This study provides a practical template for integrating MBMA and QSP in oncology drug development: MBMA efficiently identifies key covariates from aggregate trial data, which are then incorporated into a QSP model to enable mechanistic prediction of novel combination outcomes. The dual approach allows benchmarking against standard of care, quantification of benefit–risk, and extrapolation to untested regimens—all critical for decision-making in the absence of head-to-head trials. Pharmacometricians should consider this hybrid workflow when developing platform models for rapidly evolving therapeutic landscapes.

---

---

## 📊 Figures

![Workflow for QSP model. (1) Each virtual patient is simulated across multiple RRMM treatments in parallel; clinical responses are calculated using IMWG criteria.]({{ site.baseurl }}/assets/digests/2026-06-01-integrating-mbma-and-qsp-to-identify-key-covariates-and-predict-treatment/figures/fig_01.png)

![Visual predictive checks (VPCs) for the final MBMA model predictions of Grade ≥ 3 neutropenia (A) and ORR (B). Red points with red horizontal lines represent obs]({{ site.baseurl }}/assets/digests/2026-06-01-integrating-mbma-and-qsp-to-identify-key-covariates-and-predict-treatment/figures/fig_02.png)

![Benchmarking of Treatment Regimens for (A) Grade ≥ 3 neutropenia and (B) ORR using MBMA-Derived Estimates. Estimated treatment effects with 95% CI for Grade ≥ 3]({{ site.baseurl }}/assets/digests/2026-06-01-integrating-mbma-and-qsp-to-identify-key-covariates-and-predict-treatment/figures/fig_03.png)

![Impact of key covariates on Predicted (A) Grade ≥ 3 neutropenia and (B and C) ORR across RRMM regimens based on trial simulations. (A) illustrates the impact of]({{ site.baseurl }}/assets/digests/2026-06-01-integrating-mbma-and-qsp-to-identify-key-covariates-and-predict-treatment/figures/fig_04.png)

![Visual predictive checks for the QSP model calibration and validation. (A) Predicted versus observed outcomes for ORR, BOR, TTR, and PFS targets. Markers are dis]({{ site.baseurl }}/assets/digests/2026-06-01-integrating-mbma-and-qsp-to-identify-key-covariates-and-predict-treatment/figures/fig_05.png)

![ORR vs. Nprior for QSP model fitting, validation, and prediction. Each panel is a distinct drug combination and shows the %ORR (y axis) versus the prior line gro]({{ site.baseurl }}/assets/digests/2026-06-01-integrating-mbma-and-qsp-to-identify-key-covariates-and-predict-treatment/figures/fig_06.png)