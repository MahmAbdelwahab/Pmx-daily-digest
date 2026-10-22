---
layout: post
title: "A Bayesian Approach to Compare Accumulating Survival Data From Clinical Practice With RCT Data: A Case Study in Non-Small Cell Lung Cancer Patients."
date: 2026-10-22
authors: "Marjon V. Verschueren et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70075"
paper_type: methodology
tags: [methodology, oncology]
excerpt_text: "A Bayesian survival model sequentially compares accumulating clinical practice survival data with static RCT data, using Bayes factor hypothesis testing to provide early, interpretable evidence on hazard ratio thresholds. Demonstrated in NSCLC datasets, it yields precise estimates and strong evidence before full data accumulation, but requires rigorous posterior model checks as the simple parametric model can misfit complex data."
pdf_path: "/assets/digests/2026-10-22-a-bayesian-approach-to-compare-accumulating-survival-data-from-clinical/PMx_A_Bayesian_Approach_to_Compare_Accumulat_20261022.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
A Bayesian survival model sequentially compares accumulating clinical practice survival data with static RCT data, using Bayes factor hypothesis testing to provide early, interpretable evidence on hazard ratio thresholds. Demonstrated in NSCLC datasets, it yields precise estimates and strong evidence before full data accumulation, but requires rigorous posterior model checks as the simple parametric model can misfit complex data.

---

### Executive Summary
The authors developed a fully parametric Bayesian survival model to compare survival outcomes from a static randomized controlled trial (RCT) cohort with survival data from a clinical practice cohort that accumulates over time. The model uses a Weibull baseline hazard (with a Gompertz alternative in sensitivity analyses) and weak informative priors, updating posterior estimates biweekly via MCMC. Sequential hypothesis testing with Bayes factors evaluates evidence for various hazard ratio thresholds, providing interpretable evidence for whether outcomes in clinical practice are worse, better, or similar to the RCT. The method was applied to two NSCLC datasets (pembrolizumab plus chemotherapy and pembrolizumab monotherapy). For the monotherapy dataset, precise estimates and strong evidence for an HR > 1.2 were obtained about 10 months before the end of data accumulation. For the combination dataset, posterior predictive checks revealed a model misfit after 15 months, likely due to channeling bias, emphasizing the need for model expansion. The approach offers a statistically sound framework for early detection of efficacy-effectiveness gaps, contingent on acceptable model fit.

---

### Scientific Context & Motivation
RCT outcomes often are not generalizable to clinical practice due to differences in patient characteristics and treatment delivery, leading to efficacy-effectiveness gaps. Traditional Cox proportional hazards regression is used to estimate hazard ratios, but it is not suited for repeated sequential analyses as clinical practice data accumulate over time. Sample size and follow-up requirements are difficult to pre-specify, leading to either underpowered early analyses or delayed decisions. Bayesian methods naturally support sequential updating, allowing earlier and more interpretable comparisons. However, this specific application—comparing accumulating real-world survival data to a static RCT dataset—has not been previously developed. This paper addresses this gap by building a Bayesian survival model with sequential Bayes factor testing and applying it to two real-world NSCLC datasets.

---

## ⚡ Methodological Snapshot
The proposed Bayesian survival model is a fully parametric proportional hazards model with a Weibull baseline hazard (two nuisance parameters) and a log-hazard-ratio parameter distinguishing clinical practice from the RCT. The model is fitted using MCMC (PyMC). Static RCT data are incorporated as a fixed component, while clinical practice data accumulate over time—new patients are added and existing patients' follow-up is updated at biweekly intervals. Posterior distributions for the HR and credible intervals (50% to 97.5%) are estimated at each update. Sequential hypothesis testing uses Bayes factors to quantify evidence for the HR exceeding or falling below pre-specified thresholds (e.g., HR > 1.0, > 1.2, > 2.0, or HR < 0.5, < 1.0). Model diagnostics include Kaplan–Meier curves, prior predictive checks, and posterior predictive checks to assess fit. The framework is designed for early and interpretable detection of efficacy-effectiveness gaps.

---

### Validation Design
This is a method application and proof-of-concept study rather than a formal simulation-based validation. The model was applied to two real-world datasets (pembrolizumab+chemo and pembrolizumab mono) with known Cox PH estimates as benchmarks. Model validation relied on: (i) visual inspection of Kaplan–Meier curves to check proportional hazards, (ii) prior predictive checks to assess prior-data alignment, (iii) posterior predictive checks for model fit, (iv) sensitivity analyses varying prior distributions and baseline hazard (Weibull vs Gompertz), and (v) comparison of final HR estimates to those from previous Cox PH analyses. No formal simulation study was performed to evaluate estimator bias or frequentist operating characteristics (e.g., type I error, power) under hypothetical data-generating processes, which is a notable limitation for a methodology paper.

---

## 📊 Key Findings
1. The Bayesian survival model successfully compared accumulating clinical practice data with static RCT data, updating HR estimates and credible intervals at biweekly intervals. 2. For pembrolizumab monotherapy (dataset 2), precise HR estimates (95% CrI width ~0.87) were obtained approximately 10 months before the end of the 30-month data accumulation; final HR was 1.49 (95% CrI 1.11–1.98), consistent with prior Cox PH results (HR 1.55). 3. Sequential hypothesis testing with Bayes factors provided very strong evidence for HR > 1.0 and strong evidence for HR > 1.2 before the end of data accumulation in dataset 2. 4. For pembrolizumab plus chemotherapy (dataset 1), posterior predictive checks showed a systematic misfit after 15 months, likely due to channeling bias (early HR > 2 declining to ~1.5), indicating that the simple one-covariate model was inadequate for this dataset. 5. Prior sensitivity analyses (varying priors and using a Gompertz baseline hazard) showed robust results, confirming the chosen priors and baseline hazard did not unduly influence estimates.

---

### Strengths & Limitations

#### Strengths
- Innovative application of Bayesian sequential updating to compare accumulating real-world survival data with static RCT data, addressing a practical clinical/policy need.
- Use of Bayes factors for sequential hypothesis testing provides a principled approach to mitigate multiple testing issues and allows early stopping decisions.
- The model's outputs (HR credible intervals and Bayes factor evidence levels) are highly interpretable and directly support decision-making.
- Thorough model diagnostics including prior and posterior predictive checks, plus sensitivity analyses with different priors and baseline hazard distributions, demonstrating robustness.
- The model is implemented in accessible open-source tools (PyMC/Python) with code publicly available, enhancing reproducibility.

#### Limitations (Acknowledged by Authors)
- Only one covariate (clinical practice vs RCT) was included; many potentially relevant patient, disease, and treatment characteristics were omitted. This was a deliberate choice for proof-of-concept, but it limited the ability to explain HR variation and may lead to confounding.
- High censoring toward the end of the dataset may render parametric models (Weibull/Gompertz) less suitable; more flexible semi- or non-parametric approaches should be explored.
- The model sometimes did not provide an adequate fit (as in dataset 1), indicating that additional covariates or time-varying effects are needed.
- Individual patient data from the RCT were unavailable, preventing adjustment for patient characteristics in the RCT cohort.

#### Limitations (Expert Review)
- The model assumes proportional and constant hazards, which is a strong assumption that may be violated in real-world data; the Kaplan–Meier checks were only visual and not formal tests.
- Bayes factor thresholds for evidence levels (e.g., 3, 10, 30) are arbitrary and may not align with clinical or regulatory decision thresholds; the interpretation of 'very strong evidence' is subjective.
- The use of a Weibull baseline hazard imposes a specific shape; while a Gompertz alternative was tested, other hazards (e.g., lognormal, piecewise) were not considered, and the robustness to baseline hazard may not extend to all settings.
- Implementation requires substantial computational resources for repeated MCMC runs (biweekly updates), which may limit scalability to very large cohorts or high-frequency monitoring.
- The reconstruction of RCT survival data from published Kaplan–Meier curves (Guyot algorithm) introduces error, which is not propagated into the Bayesian model.

#### Generalizability
The model's generalizability beyond the two NSCLC datasets is uncertain. The simple one-covariate model assumes proportional hazards and a parametric baseline; its performance with other cancers, treatments, or real-world data with strong confounding or time-varying effects is unknown. The authors note the model could be extended to other time-to-event outcomes and settings, but validation on broader data is needed. The Bayesian framework is flexible, but the current implementation's success depends on adequate baseline hazard specification and the absence of unmeasured time-varying confounding.

---

---

### Figures & Tables

- **Figure 1**: Kaplan–Meier curves comparing overall survival for pembrolizumab plus chemotherapy in clinical practice versus the KEYNOTE-189 RCT cohort.
  - *Significance*: Visualizes the raw data and provides an initial check of the proportional hazards assumption and the magnitude of survival differences.
- **Figure 2**: Panel (a) shows hazard ratio (HR) estimates and credible intervals over time for model updates; panel (b) shows Bayes factor evidence for HR thresholds over time.
  - *Significance*: Illustrates the sequential updating of estimates and the strength of evidence for clinically relevant HR thresholds, the core outputs for decision-making.

---

### Code & Reproducibility Assessment
Code available on GitHub (https://github.com/danielverschueren/BayesianSurvival) in Python using PyMC 5.16.1. The repository includes full methodological details and supplemental files (S1–S12), enabling reproduction of the analyses.

---

### Supplementary Materials
The files S1–S12 (available online) contain detailed methodological derivations, MCMC convergence diagnostics, prior and posterior predictive check plots, sensitivity analysis results, and distribution of patient characteristics over time (Tables S3–S4).

---

### Future Directions
Add covariates to explain differences in baseline characteristics (e.g., age, performance status, comorbidity) and to investigate subgroup effects. Incorporate time-varying effects (e.g., treatment timing relative to availability, channeling) to improve model fit in cases like dataset 1. Explore semi-parametric or non-parametric baseline hazards (e.g., piecewise exponential, splines) to handle complex censoring patterns and non-proportional hazards. Extend the framework to multiple treatment arms or head-to-head comparisons within clinical practice.

---

### Expert Commentary

---

### Bottom Line
This Bayesian survival model, when adequately fitted, allows early and statistically sound comparisons of accumulating clinical practice survival data against static RCT data. Sequential Bayes factor hypothesis testing provides easily interpretable evidence for clinically relevant hazard ratio thresholds, supporting timely clinical and policy decisions. However, model fit must be rigorously checked; simple one-covariate parametric models may fail with complex data (e.g., channeling bias), and extensions to include covariates and semi- or non-parametric baselines are needed for broader applicability.

---

---

## 📊 Figures

![Kaplan–Meier curves of overall survival outcomes for patients treated with pembrolizumab plus chemotherapy in clinical practice versus the KEYNOTE-189 RCT.]({{ site.baseurl }}/assets/digests/2026-10-22-a-bayesian-approach-to-compare-accumulating-survival-data-from-clinical/figures/fig_01.jpg)

![Hazard Ratio (HR) represents the hazard of a survival event occurring in the clinical practice cohort divided by that in the RCT cohort for patients treated with]({{ site.baseurl }}/assets/digests/2026-10-22-a-bayesian-approach-to-compare-accumulating-survival-data-from-clinical/figures/fig_02.jpg)