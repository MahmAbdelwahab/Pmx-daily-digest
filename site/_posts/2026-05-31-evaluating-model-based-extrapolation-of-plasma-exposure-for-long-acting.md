---
layout: post
title: "Evaluating Model-Based Extrapolation of Plasma Exposure for Long-Acting Injectable Products: From Single- to Multiple-Dose Trials"
date: 2026-05-31
authors: "D.E.L., D.J.E., L.F.M.V., P.J.C., and J.V.K."
journal: "N/A"
doi: "N/A"
paper_type: popk
tags: [popk]
excerpt_text: "This study evaluates whether drug release from long-acting injectables (LAIs) differs between single- and multiple-dose conditions by developing population PK models from single-dose data and predicting multiple-dose PK. The mean accuracy was 93%, with 7 out of 10 PK metrics meeting acceptance criteria, suggesting that drug release may not differ substantially. This work questions the necessity of conducting both single- and multiple-dose trials for LAIs, potentially simplifying development."
pdf_path: "/assets/digests/2026-05-31-evaluating-model-based-extrapolation-of-plasma-exposure-for-long-acting/PMx_Evaluating_ModelBased_Extrapolation_of_P_20260531.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study evaluates whether drug release from long-acting injectables (LAIs) differs between single- and multiple-dose conditions by developing population PK models from single-dose data and predicting multiple-dose PK. The mean accuracy was 93%, with 7 out of 10 PK metrics meeting acceptance criteria, suggesting that drug release may not differ substantially. This work questions the necessity of conducting both single- and multiple-dose trials for LAIs, potentially simplifying development.

---

### Executive Summary
Using clinical PK data from five regulatory-approved LAIs, the authors developed population PK models based on single-dose data and predicted multiple-dose PK profiles. The models, primarily first-order absorption structures, achieved a mean accuracy of 93% and prediction intervals covering 7 out of 10 observed PK metrics ($AUC$, $C_{max}$, $C_{trough}$). These findings indicate that drug release may be similar between dosing conditions for this sample, challenging the current regulatory requirement for both single- and multiple-dose trials. However, limitations include small sample size, potential selection bias, and dose non-proportionality issues for some products.

---

### Scientific Context & Motivation
Current regulatory guidelines require both single- and multiple-dose trials for LAIs to characterize drug release, but these trials are costly and time-consuming. It is unknown whether drug release differs between non-steady state and steady state conditions. This study aims to test if multiple-dose PK can be predicted from single-dose data using model-based extrapolation, potentially reducing the burden of LAI development.

---

## ⚡ Methodological Snapshot
Population PK models were developed using NONMEM with Laplacian estimation. Various absorption models were tested: first-order with/without lag time, parallel first-order, transit compartments, zero-order to first-order. The best model per product was selected based on AIC and goodness-of-fit. Multiple-dose simulations were performed in RxODE with 1000 replicates accounting for parameter uncertainty. Predictive performance was assessed via VPCs and NPCs of $AUC$, $C_{max}$, and $C_{trough}$.

---

## 🏗️ Structural Model Breakdown
Product A: 1-compartment, double parallel first-order absorption with lag time on fast $KA$, BSV on $CL/F$, $V_c/F$, $F_d$, $KA_{slow}$. Product B: 2-compartment, first-order absorption with lag time, BSV on $CL/F$, $V_c/F$. Product C: 1-compartment, double parallel first-order absorption with lag time on slow $KA$, BSV on $CL/F$, $V_c/F$, $F_d$, $KA_{slow}$. Product D: 1-compartment, first-order absorption, BSV on $CL/F$, $V_c/F$, $KA$. Product E: 1-compartment, first-order absorption, BSV on $CL/F$, $V_c/F$.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling in NONMEM 7.5 using Laplacian method. Structural models: one- or two-compartment with various absorption models (first-order, parallel first-order with lag time, etc.). Between-subject variability on $CL/F$, $V_c/F$, $KA$, $F_d$ (log-normal or logit-normal). Residual error: combined proportional and additive. Model selection based on $\Delta OFV > 3.84$ and AIC for non-nested models.

#### Data Sources
Single-dose data from 5 LAIs (Products A-E): 12-71 subjects, 15-27 samples per subject, 2.8-10.2% BLQ. Multiple-dose data from patient populations: 32-115 subjects, 3-62 samples per subject. Data extracted from eCTD submissions to Dutch MEB. Dosing intervals ranged from 1 month to longer. Some products had different doses in multiple-dose trials (100-3000% of single dose).

#### Estimation Methods
Laplacian method in NONMEM. M3 method for BLQ data. Parameter uncertainty from covariance matrix. Simulations in RxODE with 1000 replicates sampling from multivariate normal distribution of theta, omega, sigma.

#### Model Evaluation
Goodness-of-fit plots, NPDEs, prediction-corrected VPCs for single-dose models. For multiple-dose predictions: prediction-corrected VPCs and NPCs of $AUC_{0-\tau,ss}$, $C_{max,ss}$, $C_{\tau,ss}$. Acceptance criterion: 95% PI of GMR (simulated/observed) includes 100%.

#### Covariate Analysis
No covariates were included due to lack of availability in eCTDs. This is a limitation.

---

### Statistical Rigor Assessment
Appropriate use of Laplacian method for non-linear models. M3 method for BLQ data. Model selection using objective function and AIC. Parameter uncertainty propagated in simulations. However, sample sizes for single-dose data were small (12-71), and no covariate analysis was performed. The acceptance criterion (95% PI includes 100%) is reasonable but may be lenient for regulatory purposes. The study did not perform sensitivity analyses for model assumptions (e.g., dose proportionality).

---

## 📊 Key Findings
The mean model accuracy was 92.8% (range 70-122%). 7 out of 10 PK metrics had 95% prediction intervals including 100%. For product D, both $C_{max}$ and $C_{trough}$ were biased. For product A, $C_{max}$ was biased. The models used first-order absorption (with or without lag time, parallel pathways). The predictive performance was considered acceptable, comparable to PBPK models. The study demonstrates that multiple-dose PK characteristics can be predicted from single-dose data for this sample of LAIs.

---

## 💡 Clinical & Regulatory Implications
The findings suggest that for some LAIs, multiple-dose trials may be supplemented or potentially replaced by model-based extrapolation from single-dose data. This could reduce development costs and time. However, the approach needs further validation and may not apply to all LAI types. Regulatory acceptance would require context-of-use considerations and possibly a risk-based framework.

---

### Strengths & Limitations

#### Strengths
- Use of real regulatory data from approved LAIs, enhancing clinical relevance.
- Systematic model development with multiple absorption structures and rigorous selection criteria.
- External validation using multiple-dose data with uncertainty propagation.
- Appropriate handling of BLQ data using the M3 method.

#### Limitations (Acknowledged by Authors)
- Small sample size (n=5) limits generalizability.
- Potential selection bias as only approved products with favorable PK were included.
- Dose differences between single- and multiple-dose trials for some products (100-3000%).
- Use of healthy volunteers in single-dose vs patients in multiple-dose trials.
- Inability to include covariates due to data limitations.

#### Limitations (Expert Review)
- The models may not capture complex absorption mechanisms (e.g., multi-phasic release, injection site effects).
- Assumption of dose proportionality may not hold for all products, especially at high dose ratios.
- Prediction intervals were wide for some products (e.g., Product E), indicating high uncertainty.
- The approach may not generalize to other LAI types (e.g., implants, in situ forming depots).

#### Generalizability
Limited to the five LAIs studied, primarily suspended solids. Further studies on other LAI formulations and larger datasets are needed to confirm generalizability.

---

---

### Figures & Tables

- **Table 1**: Characteristics of the five LAIs included in the study, including single- and multiple-dose trial details (subject numbers, samples, BLQ percentages, dosing intervals).
  - *Significance*: Provides the data foundation for the analysis and highlights differences in trial designs across products.
- **Table 2**: Final population PK model structures for each LAI, including compartmental structure, absorption model, and between-subject variability parameters.
  - *Significance*: Summarizes the model selection results and key structural features used for extrapolation.
- **Figure 1**: Prediction-corrected visual predictive checks (VPCs) for the final single-dose popPK models for each product.
  - *Significance*: Validates the single-dose models; shows acceptable predictive performance for most products.
- **Figure 2**: Prediction-corrected VPCs for multiple-dose simulations at steady state for each product.
  - *Significance*: Illustrates the predictive performance of the extrapolation; shows good agreement for products A, B, C, but underprediction for D and overdispersion for E.
- **Figure 3**: Forest plot of geometric mean ratios (simulated/observed) with 95% prediction intervals for $C_{\tau,ss}$, $C_{max,ss}$, and $AUC_{0-\tau,ss}$.
  - *Significance*: Primary quantitative assessment of extrapolation accuracy; shows 7 out of 10 metrics meet the acceptance criterion.

---

### Code & Reproducibility Assessment
NONMEM codes are provided in Supporting Information (Text S1-S5). Individual patient data are not available due to confidentiality. Partial reproducibility.

---

### Supplementary Materials
Supplementary materials include Figure S1 (concentration-time data), Figure S2 (model development hierarchy), Table S1 (parameter estimates with 95% CIs), and NONMEM codes (Text S1-S5).

---

### Future Directions
Additional studies on other LAIs, including different formulation types (implants, in situ forming depots). Benchmarking against current evidentiary standard. Inclusion of covariates to improve predictions. Evaluation of dose proportionality assumptions. Development of standardized acceptance criteria for model-based extrapolation.

---

### Expert Commentary
This study addresses a practical regulatory question with real-world data. The approach is sound but limited by small sample size and data availability. The use of model-based extrapolation is promising and aligns with MIDD principles. However, the variability in predictions for some products highlights the need for caution. The paper provides a good template for similar analyses but should be replicated with larger datasets. The acceptance criteria (95% PI includes 100%) are reasonable but may need refinement for regulatory decision-making.

---

### Bottom Line
This study demonstrates that popPK models built from single-dose LAI data can reasonably predict multiple-dose exposure, supporting the use of model-based extrapolation to potentially reduce the need for dedicated multiple-dose trials. However, caution is warranted due to small sample size and potential biases. The approach could be used to supplement, not replace, multiple-dose trials, and further validation is needed.

---

---

## 📊 Figures

![Forest plot of the geometric mean ratios (simulated/observed) with 95% prediction intervals of PK parameters. A ratio of 100% would indicate that the simulated m]({{ site.baseurl }}/assets/digests/2026-05-31-evaluating-model-based-extrapolation-of-plasma-exposure-for-long-acting/figures/fig_01.png)