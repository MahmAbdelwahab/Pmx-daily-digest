---
layout: post
title: "Exposure-Response Analysis for Time-to-Event Data in the Presence of Adaptive Dosing: Efficient Approaches and Pitfalls"
date: 2026-07-26
authors: "Lavalley-Morelle A, Le Louedec F, Assaf R, Mentré F, Bertrand M"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70149"
paper_type: methodology
tags: [methodology, dose-response]
excerpt_text: "This simulation study demonstrates that time-varying exposure metrics (e.g., weekly average concentration) are essential for valid exposure-response analysis of time-to-event endpoints, especially under adaptive dosing. Time-static metrics based on last exposure produce severely inflated type-I error, while those based on initial exposure lose power. Cox proportional hazards models with time-varying covariates offer an efficient, assumption-light screening approach."
pdf_path: "/assets/digests/2026-07-26-exposure-response-analysis-for-time-to-event-data-in-the-presence-of-adaptive/PMx_ExposureResponse_Analysis_for_TimetoEven_20260726.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This simulation study demonstrates that time-varying exposure metrics (e.g., weekly average concentration) are essential for valid exposure-response analysis of time-to-event endpoints, especially under adaptive dosing. Time-static metrics based on last exposure produce severely inflated type-I error, while those based on initial exposure lose power. Cox proportional hazards models with time-varying covariates offer an efficient, assumption-light screening approach.

---

### Executive Summary
This simulation study systematically compares time-static versus time-varying exposure metrics for exposure-response analysis of time-to-event endpoints under fixed and adaptive dosing. The authors demonstrate that time-static metrics based on last exposure (CAVTE) produce severely inflated type-I error, while metrics based on initial exposure (CAV1, CAVSS) maintain correct type-I error but lose power under adaptive dosing. Time-varying exposure (weekly average concentration) consistently yields correct type-I error and high power across all scenarios. The findings support the use of time-varying metrics, with Cox proportional hazards models offering an efficient screening approach.

---

### Scientific Context & Motivation
Exposure-response (E-R) analysis for time-to-event (TTE) endpoints is complicated by the time-dependent nature of both exposure and event risk. Common practice uses time-static exposure metrics (e.g., initial or last exposure) for graphical exploration and modeling, but these can introduce bias or reduce power. Adaptive dosing designs, increasingly used in clinical trials, further complicate the analysis by creating correlation between dose adjustments and patient outcomes. While previous work has identified pitfalls of time-static metrics, a systematic comparison across diverse scenarios (dosing design, drug accumulation, event type, event onset) has been lacking.

---

## ⚡ Methodological Snapshot
The study uses a comprehensive simulation framework to compare time-static vs time-varying exposure metrics for exposure-response analysis of time-to-event endpoints. PK exposures are simulated from a one-compartment model with weekly dosing, and TTE data from a parametric proportional hazard model with weekly average concentration as a time-varying covariate. Scenarios vary by dosing design (fixed vs adaptive), drug accumulation (low vs strong), event type (efficacy, safety, independent), and event onset (early vs late). Three time-static metrics are evaluated: average exposure during first week (CAV1), average exposure during week before event/censoring (CAVTE), and average exposure at steady state based on starting dose (CAVSS). The time-varying metric is the weekly average concentration. Performance is assessed via type-I error and power of Wald tests on the exposure effect parameter from parametric Gompertz models, as well as log-rank tests from Kaplan-Meier analyses. Additional scenarios explore joint modeling of dose reduction and event processes with correlated random effects.

---

## 📐 Statistical Framework
The simulation framework assumes a one-compartment PK model with first-order elimination and weekly dosing. TTE data are generated from a parametric proportional hazard model with Gompertz baseline hazard and weekly average concentration as a time-varying covariate. The hazard function is h_i(t) = h_0(t) exp(β · CAV_i(t)), where β is the log-hazard ratio per unit exposure. For adaptive dosing, dose reductions occur with probability modeled by logistic regression on current exposure, plus an independent stochastic component. Additional scenarios introduce correlation between the dose reduction and event processes via shared random effects. The analysis uses Wald tests on β from the same model structure (correctly specified for time-varying exposure, mis-specified for time-static metrics). Type-I error and power are assessed across 1000 simulated datasets per scenario.

---

### Estimator Behavior
The Wald test on the exposure effect parameter β from the parametric Gompertz model shows: (i) correct type-I error (~0.05) for time-varying exposure across all scenarios; (ii) inflated type-I error for CAVTE (up to 0.70) under strong accumulation and early events; (iii) reduced power for CAV1 and CAVSS under adaptive dosing (power ~0.10–0.30 vs ~0.90 for time-varying). Joint modeling of dose reduction and event processes yields similar results to separate modeling, with minimal impact from mis-specifying the correlation structure.

---

### Validation Design
The validation uses a simulation study with 1000 replicates per scenario. Scenarios are defined by a factorial combination of: dosing design (fixed vs adaptive), drug accumulation (low vs strong), E-R relationship (none, positive efficacy, negative safety), and event onset (early vs late). Performance metrics are type-I error (when β=0) and power (when β≠0) of Wald tests from parametric Gompertz models and log-rank tests from KM analyses. Additional scenarios evaluate joint modeling of dose reduction and event processes with correlated random effects. The true data-generating model is known, allowing direct assessment of bias and power for each exposure metric.

---

### Comparison to Alternatives
Time-varying exposure (weekly average concentration) consistently yields correct type-I error and high power across all scenarios. Time-static metrics based on last exposure (CAVTE) produce inflated type-I error (up to 0.70) under strong accumulation and early events, confirming known pitfalls. Metrics based on initial exposure (CAV1, CAVSS) maintain correct type-I error but lose power under adaptive dosing (power as low as 0.10 vs 0.90 for time-varying). Cox model with time-varying covariates performs similarly to parametric Gompertz model, offering a faster, assumption-light alternative.

---

### Implementation Guidance
For E-R analysis of TTE endpoints, use time-varying exposure metrics (e.g., weekly average concentration). Implement using Cox proportional hazards model (coxph in survival package) for efficient screening, or parametric models (flexsurvreg in flexsurv, phreg in eha) for simulation purposes. For adaptive dosing with suspected correlation between dose adjustment and event risk, consider joint modeling (e.g., using Monolix or NONMEM) but note that standard R packages may suffice. The workflow can be fully prespecified and automated.

---

## 📊 Key Findings
Time-varying exposure metrics (weekly average concentration) consistently yield correct type-I error (~0.05) and high power (~0.90) across all scenarios. Time-static metrics based on last exposure (CAVTE) produce severely inflated type-I error (up to 0.70) under strong accumulation and early events. Time-static metrics based on initial exposure (CAV1, CAVSS) maintain correct type-I error but lose power under adaptive dosing (power as low as 0.10). Cox proportional hazards models perform similarly to parametric Gompertz models. Joint modeling of dose reduction and event processes yields similar results to separate modeling, with minimal impact from mis-specifying the correlation structure.

---

### Strengths & Limitations

#### Strengths
- Comprehensive simulation design covering multiple clinically relevant scenarios (dosing design, accumulation, event type, event onset).
- Systematic comparison of three time-static metrics against the true time-varying metric.
- Clear, interpretable results presented as heatmaps of type-I error and power.
- Evaluation of both graphical (KM, log-rank) and modeling (parametric, Cox) approaches.
- Extension to joint modeling of dose reduction and event processes addresses a realistic complexity.

#### Limitations (Acknowledged by Authors)
- True PK exposure assumed known (not re-estimated), which may introduce bias in practice.
- Single sample size (N=500) used; results may vary with different sample sizes.
- Dose delays and treatment interruptions not considered.
- Weekly average concentration may not be optimal for all dosing regimens.
- Causal inference framework (DAGs) not explored.

#### Limitations (Expert Review)
- The simulation assumes a Gompertz baseline hazard; results may differ for other hazard shapes (e.g., Weibull, piecewise constant).
- The adaptive dosing mechanism is simplified (exposure-driven with stochastic component); real-world dose adjustments may be more complex.
- Only one level of inter-individual variability (IIV) was considered; sensitivity to IIV magnitude not assessed.
- The study does not evaluate the impact of model selection or covariate identification strategies on E-R conclusions.

#### Generalizability
Findings are generalizable to E-R analysis of TTE endpoints with weekly or similar dosing schedules. The simulation covers a range of realistic scenarios, but results may not extend to very different dosing frequencies, non-proportional hazards, or complex intercurrent events not considered.

---

### Key Equations

**Proportional Hazard Model with Time-Varying Exposure**

{% raw %}
$$
h_i(t) = h_0(t) \exp(\beta \cdot \text{CAV}_i(t))
$$
{% endraw %}

The hazard model used for simulating and analyzing time-to-event data, with baseline hazard following a Gompertz function and exposure as a covariate.

**Dose Reduction Model**

{% raw %}
$$
\text{logit}(P(\text{dose reduction at visit } j)) = \gamma_0 + \gamma_1 \cdot \text{CAV}_i(t_j)
$$
{% endraw %}

The logistic regression model used to describe the probability of dose reduction at each visit, with exposure as a predictor.

---

### Figures & Tables

- **Figure 6**: Heatmap of type-I error (β=0) and power (β≠0) for Wald test on β across all scenarios and exposure metrics (time-static and time-varying).
  - *Significance*: Central result: time-varying exposure consistently yields correct type-I error and high power; CAVTE shows inflated type-I error; CAV1/CAVSS lose power under adaptive dosing.
- **Figure 5**: Heatmap of type-I error and power for log-rank test across scenarios and time-static metrics.
  - *Significance*: Confirms graphical exploration findings: CAVTE produces inflated type-I error; CAV1/CAVSS show reduced power under adaptive dosing.
- **Figure 7**: Heatmap of type-I error and power for Wald test in additional scenarios with joint modeling of dose reduction and event processes.
  - *Significance*: Shows that joint modeling yields similar results to separate modeling; mis-specifying correlation has limited impact.

---

### Code & Reproducibility Assessment
Simulations performed using R package mrgsolve (v1.0.6); TTE models fitted with survival and flexsurv packages. No dedicated repository mentioned, but the workflow is prespecified and reproducible with standard R packages.

---

### Supplementary Materials
Supplementary materials include detailed results for all scenarios (Appendix S3: graphical explorations; Appendix S4: modeling results), additional heatmaps for t-test and Cox model, and a reader's guide table. Key supplementary figures show consistent patterns across scenarios.

---

### Future Directions
Future work should investigate the impact of PK estimation error (rather than assuming known exposure), varying sample sizes, dose delays/interruptions, and more complex intercurrent events. Sensitivity analyses varying the level of inter-individual variability in the joint modeling framework would also be valuable.

---

### Expert Commentary
This paper provides a much-needed systematic evaluation of exposure metric choices for TTE endpoints, filling a gap in the literature. The simulation design is comprehensive, covering fixed vs adaptive dosing, low vs strong accumulation, early vs late events, and efficacy vs safety endpoints. The key practical recommendation—use time-varying exposure—is robust and actionable. The finding that Cox models perform similarly to parametric models is particularly valuable for practitioners seeking efficient, prespecified workflows. The joint modeling extension addresses a realistic complexity (correlation between dose adjustment and event risk) and reassuringly shows limited impact of mis-specification. Limitations include the assumption of known PK (no re-estimation) and a single sample size; future work should explore the impact of PK estimation error and varying sample sizes.

---

### Bottom Line
For exposure-response analysis of time-to-event endpoints, time-varying exposure metrics (e.g., weekly average concentration) should be preferred over time-static metrics, especially under adaptive dosing. Time-static metrics based on last exposure are strongly biased and should be avoided; those based on initial exposure can suffer from reduced power. A Cox proportional hazards model with time-varying covariates offers an efficient, assumption-light screening tool.

---

---

## 📊 Figures

![Individual weekly average concentration (CAV) trajectories for the 10 first subjects (top) and Kaplan–Meier curves including risk table (bottom) for the first si]({{ site.baseurl }}/assets/digests/2026-07-26-exposure-response-analysis-for-time-to-event-data-in-the-presence-of-adaptive/figures/fig_01.jpg)

![Kaplan–Meier plots using each of the three time-static exposure metrics and stratified by exposure tertiles.Dsis the difference of estimated survival probability]({{ site.baseurl }}/assets/digests/2026-07-26-exposure-response-analysis-for-time-to-event-data-in-the-presence-of-adaptive/figures/fig_02.jpg)

![Individual weekly average concentration (CAV) trajectories for the 10 first subjects (top) and Kaplan–Meier curves including risk table (bottom) for the first si]({{ site.baseurl }}/assets/digests/2026-07-26-exposure-response-analysis-for-time-to-event-data-in-the-presence-of-adaptive/figures/fig_03.jpg)

![Kaplan–Meier plots using each of the three time-static exposure metrics and stratified by exposure tertiles.Dsis the difference of estimated survival probability]({{ site.baseurl }}/assets/digests/2026-07-26-exposure-response-analysis-for-time-to-event-data-in-the-presence-of-adaptive/figures/fig_04.jpg)

![Heatmap showing the type-I error (whenβ= 0) or power (whenβ≠ 0) of the log-rank test, across each scenario and time-static metric.]({{ site.baseurl }}/assets/digests/2026-07-26-exposure-response-analysis-for-time-to-event-data-in-the-presence-of-adaptive/figures/fig_05.jpg)

![Heatmap showing the type-I error (whenβ= 0) or power (whenβ≠ 0) of the Wald test onβacross each metric (time-static or time-varying) and each scenario.]({{ site.baseurl }}/assets/digests/2026-07-26-exposure-response-analysis-for-time-to-event-data-in-the-presence-of-adaptive/figures/fig_06.jpg)

![Heatmap showing the type-I error (whenβ= 0) or power (whenβ≠ 0) of the Wald test onβacross each of the additional scenarios.]({{ site.baseurl }}/assets/digests/2026-07-26-exposure-response-analysis-for-time-to-event-data-in-the-presence-of-adaptive/figures/fig_07.jpg)