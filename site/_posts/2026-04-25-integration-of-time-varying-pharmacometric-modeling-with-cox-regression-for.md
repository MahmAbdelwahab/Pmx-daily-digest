---
layout: post
title: "Integration of Time-Varying Pharmacometric Modeling With Cox Regression for Time-to-Event Analysis in NONMEM"
date: 2026-04-25
authors: "Chih-Wei Lin, Po-Wei Chen, Sameer Doshi, Sandeep Dutta, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology. 2026"
doi: "10.1002/psp4.70253"
paper_type: popk
tags: [popk, qsp, dose-response, covariate-analysis, clinical-trial-design]
excerpt_text: "This methods paper is essential reading for pharmacometricians analyzing time-to-event (TTE) endpoints with fluctuating drug exposures. The authors integrate semi-parametric Cox regression with ODE-based PK models within NONMEM via partial likelihood, demonstrating robustness to misspecified baseline hazards and superiority of time-varying exposure metrics over static summaries. It offers a flexible, mechanism-based alternative when the baseline hazard shape is uncertain."
pdf_path: "/assets/digests/2026-04-25-integration-of-time-varying-pharmacometric-modeling-with-cox-regression-for/PMx_Integration_of_TimeVarying_Pharmacometri_20260425.pdf"
retroactively_classified: false
---

### Quick Take
This methods paper is essential reading for pharmacometricians analyzing time-to-event (TTE) endpoints with fluctuating drug exposures. The authors integrate semi-parametric Cox regression with ODE-based PK models within NONMEM via partial likelihood, demonstrating robustness to misspecified baseline hazards and superiority of time-varying exposure metrics over static summaries. It offers a flexible, mechanism-based alternative when the baseline hazard shape is uncertain.

---

### Executive Summary
This study introduces a novel semi-parametric framework that embeds time-varying Cox regression within NONMEM, enabling unified estimation of ODE-based pharmacometric models and hazard regression parameters through partial likelihood. Using extensive clinical trial simulations (20 to 1500 subjects; 100 replicates) with a one-compartment PK model, a two-exponential bathtub baseline hazard, and an $I_{max}$ concentration-hazard model, the authors show that their approach produces estimates comparable to correctly specified parametric models while outperforming parametric alternatives with incorrect baseline hazard assumptions. Time-varying PK exposure metrics markedly improved model fit and parameter accuracy compared with static $C_{max}$, $C_{trough}$, and $C_{avg}$ metrics, addressing a critical limitation in conventional exposure-response analyses for TTE endpoints where dose interruptions and concentration fluctuations are common.

---

### Scientific Context & Motivation
Conventional exposure-response analyses for TTE endpoints typically rely on static, time-invariant PK metrics (e.g., $C_{max}$, $C_{trough}$, $C_{avg}$) as covariates in Cox or parametric hazard models. This approach ignores intra-subject concentration fluctuations, dose modifications, and treatment interruptions, potentially introducing survivor bias and obscuring true exposure-response relationships. Although parametric TTE models can incorporate full PK concentration-time profiles via ODEs, they require explicit prespecification of the baseline hazard function (exponential, Weibull, Gompertz, etc.), which risks structural misspecification and biased inference. Standard statistical software (R, Python, SAS) supports time-varying Cox regression but cannot integrate ODE-based pharmacometric models or actual dosing records within a unified likelihood framework. This work fills that methodological gap by implementing partial likelihood Cox regression in NONMEM, allowing mechanistic, time-varying PK/PD effects on hazard without requiring a prespecified baseline hazard shape.

---

## ⚡ Methodological Snapshot
The authors conducted clinical trial simulations generating datasets across five sample sizes (20, 50, 150, 500, and 1500 subjects) with five dose groups (1, 3, 10, 30, and 100 mg administered subcutaneously every 4 weeks for 24 weeks). Drug concentrations were generated from a one-compartment PK model with first-order absorption and elimination. Event times were simulated using a two-exponential bathtub-shaped baseline hazard modified by an $I_{max}$ model driven by time-varying drug concentration, plus a time-invariant covariate effect. For estimation, subjects were sorted by event or censoring times, and partial likelihood was computed in NONMEM 7.5 using the first-order approximation method. Parametric counterparts were fit assuming exponential, Weibull, and the true bathtub baseline hazards. Performance was evaluated via bias, precision, negative twice log likelihood, Kaplan-Meier mean covariate (KMMC) diagnostics, and run-time comparisons across 100 simulation replicates.

---

## 🏗️ Structural Model Breakdown
The PK structural model was a one-compartment model with first-order absorption and first-order elimination following repeated subcutaneous administration. The TTE model comprised a baseline hazard following a two-exponential bathtub-shaped function, representing a non-monotonic hazard pattern over time. Drug effect on hazard was characterized by an $I_{max}$ (sigmoid $E_{max}$) relationship linking time-varying drug concentration to the hazard ratio. The model included a time-invariant covariate effect ($\beta_1$) and a time-varying covariate effect ($\beta_2$). Under the semi-parametric formulation, the baseline hazard remained unspecified and was estimated as a piecewise-constant function across event times, whereas parametric variants explicitly defined the baseline hazard as exponential, Weibull, or the true two-exponential bathtub function.

---

### Detailed Methodological Analysis

#### Modeling Approach
NONMEM 7.5 was used to implement semi-parametric Cox regression via partial likelihood embedded within the nonlinear mixed-effects modeling framework. A one-compartment PK model with first-order absorption and elimination generated time-varying concentrations. The hazard model included a two-exponential bathtub baseline hazard for data generation, with an $I_{max}$ model characterizing the concentration-hazard relationship. Parametric TTE models assuming exponential, Weibull, and bathtub baseline hazards were fit for comparative benchmarking.

#### Data Sources
Simulated clinical trial data spanning 20 to 1500 subjects with five parallel dose groups (1, 3, 10, 30, and 100 mg SC every 4 weeks for 24 weeks). One hundred simulation replicates were generated per sample size. Dosing records, individual PK parameters, covariates, and event or censoring times were structured for partial likelihood calculations, including all subjects' event times to define risk sets.

#### Estimation Methods
First-order approximation method in NONMEM was used for semi-parametric partial likelihood estimation. Parametric models used full likelihood estimation. R version 4.4.2 (survival package) served as a reference for external validation of Cox regression estimates. The rxode2 package in R was used for ODE-based simulations.

#### Model Evaluation
Parameter estimates and relative standard errors (RSEs) were compared between NONMEM and R. Semi-parametric and parametric methods were compared using bias, precision, and negative twice log likelihood. Kaplan-Meier mean covariate (KMMC) plots were used as diagnostic tools. Consistency was assessed across 100 replicates. Static versus time-varying exposure metrics were compared using negative twice log partial likelihood and distributions of $I_{max}$ and $IC_{50}$.

#### Covariate Analysis
Time-invariant and time-varying covariate effects were directly incorporated into the hazard function. Static exposure metrics included $C_{max}$, $C_{trough}$, and $C_{avg}$ assessed over the first 28 days, at steady-state (days 140-168), and at the event time. Time-varying metrics included piecewise-constant $C_{max}$, $C_{trough}$, and $C_{avg}$ across dosing intervals, as well as time-varying concentration determined at event times.

---

### Statistical Rigor Assessment
The simulation study was well-structured, with 100 replicates across five sample sizes enabling assessment of estimator consistency and precision. Direct comparison between NONMEM and R estimates for identical datasets validated implementation correctness, with differences below $1\%$. However, small sample sizes ($N=20$ to $50$) resulted in unstable estimates and high RSEs, with covariance step success rates as low as $48\%$ for parametric and $74\%$ for semi-parametric methods, indicating limited reliability for sparse TTE data. The study did not evaluate tied event handling, and all simulations were derived from a single data-generating model, limiting assessment of robustness to alternative PK or hazard structures. The use of a single replicate for illustrative tables, while supplemented by distributional summaries across replicates, may obscure typical stochastic variation.

---

## 📊 Key Findings
The semi-parametric Cox approach in NONMEM yielded coefficient estimates and relative standard errors for time-invariant ($\beta_1$) and time-varying ($\beta_2$) covariates that were nearly identical to those from R's survival package (differences $<1\%$), validating implementation correctness. Compared with parametric methods, the semi-parametric approach produced parameter estimates ($\beta_1$, $\beta_2$, $I_{max}$, $IC_{50}$) closely aligned with the correctly specified two-exponential bathtub baseline hazard model, whereas parametric models assuming exponential or Weibull hazards produced biased estimates and substantially higher negative twice log likelihood values. Time-varying exposure metrics consistently outperformed static metrics, yielding lower negative twice log partial likelihood and more accurate $I_{max}$ and $IC_{50}$ estimates; static metrics—particularly those assessed at event time—tended to underestimate $I_{max}$ and could generate reversed exposure-response relationships due to survivor bias. At small sample sizes ($N \le 150$), estimation of nonlinear parameters remained challenging with covariance step success rates as low as $48\text{-}74\%$, but performance stabilized and became highly accurate at $N \ge 500$.

---

## 💡 Clinical & Regulatory Implications
This methodology enables more accurate exposure-response characterization for TTE endpoints in oncology, immunology, and other areas where dose modifications, interruptions, and drug holidays are common. By using time-varying drug concentrations rather than static exposure summaries, pharmacometricians can reduce survivor bias and better quantify the true protective or risk-modifying effects of therapy. The approach supports model-informed dose optimization and can enhance regulatory submissions by directly incorporating actual dosing histories and mechanistic PK models into the hazard analysis. The semi-parametric nature mitigates structural misspecification risk when the baseline hazard is unknown, though parametric models remain preferable when the hazard shape is well-characterized and extrapolation beyond observed data is required.

---

### Strengths & Limitations

#### Strengths
- Novel integration of time-varying Cox regression with ODE-based PK within NONMEM's unified estimation framework, avoiding the need to export precomputed exposure trajectories to external statistical software
- Rigorous cross-platform validation through direct comparison with the R survival package, confirming numerical consistency
- Comprehensive simulation design with five sample sizes, five dose levels, and 100 replicates enabling robust assessment of estimator bias, precision, and consistency
- Clear demonstration of the bias and inferior fit associated with both misspecified parametric baseline hazards and static exposure metrics
- Direct compatibility with actual dosing records, accommodating dose delays, modifications, and discontinuations within the likelihood

#### Limitations (Acknowledged by Authors)
- Methodology does not currently account for tied event times, though Breslow and Efron corrections are noted as feasible extensions
- Requires a non-standard NONMEM dataset structure that complicates use of standard PsN utilities such as vpc and bootstrap without customized post-processing
- Small sample sizes ($N < 150$) yield unstable estimates of nonlinear parameters ($I_{max}$, $IC_{50}$) and low covariance step success rates
- Evaluated under a single simulation scenario (one-compartment PK, bathtub hazard, $I_{max}$ model)

#### Limitations (Expert Review)
- No formal assessment of robustness to PK model misspecification or alternative baseline hazard shapes beyond those tested
- No evaluation of inter-individual variability on TTE parameters, frailty models, or random effects in the hazard function
- Computational run times in NONMEM were orders of magnitude longer than R for large datasets (e.g., ~8052 seconds vs ~3 seconds for $N=1500$), raising practical scalability concerns
- Single-replicate illustrative comparisons (e.g., Table 1, Table 2) may not fully represent stochastic variation across replicates
- No publicly shared code or data repository; reproducibility depends on access to supplementary materials and licensed NONMEM software

#### Generalizability
High for Phase 2/3 trials with repeated dosing, complex dosing histories, and unknown baseline hazards; moderate-to-low for small early-phase studies with few events, trials with frequent tied events, or settings requiring repeated-event modeling, frailty corrections, or complex between-subject variability in hazard parameters.

---

---

### Figures & Tables

- **Figure 1**: Schematic of partial likelihood calculation for time-varying pharmacokinetics in time-to-event analysis ($N=5$), illustrating time-varying hazard ratios derived from dynamic drug concentrations.
  - *Significance*: Provides a conceptual visualization of the data structure and risk-set logic underlying the proposed NONMEM implementation for time-varying covariates.
- **Figure 2**: Estimated baseline survival functions, cumulative hazard functions, and hazard functions derived from semi-parametric and parametric methods (left panel: $N=150$; right panel: $N=1500$).
  - *Significance*: Demonstrates that semi-parametric estimates converge toward the true bathtub-shaped hazard as sample size increases, while misspecified parametric assumptions (exponential, Weibull) produce visibly biased functions.
- **Figure 3**: Representative Kaplan-Meier mean covariate (KMMC) plots for drug concentration effect and covariates ($N=150$).
  - *Significance*: Serves as a diagnostic tool confirming that model-predicted running means align with observed data and simulation-based 95% prediction bands, supporting model adequacy.
- **Figure 4**: Distribution of estimated model parameters across 100 simulated datasets for different sample sizes and methods (parametric bathtub vs semi-parametric Cox).
  - *Significance*: Quantifies estimator consistency and precision, showing substantial instability at small sample sizes and convergence to true values at $N \ge 500$.
- **Figure 5**: Distribution of estimated negative twice log partial likelihood, $I_{max}$, and $IC_{50}$ across 100 simulated datasets ($N=500$) comparing static versus time-varying PK exposure metrics.
  - *Significance*: Provides direct evidence that time-varying exposure metrics improve model fit and yield more accurate pharmacodynamic parameter estimates than static metrics.
- **Table 1**: Estimated coefficients and relative standard errors for time-invariant ($\beta_1$) and time-varying ($\beta_2$) covariates from NONMEM and R across sample sizes, with run-time comparisons.
  - *Significance*: Validates that the NONMEM implementation reproduces established Cox regression estimates from R with minimal numerical difference ($<1\%$).
- **Table 2**: Parameter estimates, relative standard errors, and likelihood values comparing parametric methods (exponential, Weibull, bathtub) with the semi-parametric Cox approach across sample sizes.
  - *Significance*: Core evidence demonstrating that the semi-parametric approach matches the correctly specified parametric bathtub model and outperforms parametric alternatives with incorrect baseline hazard assumptions.

---

### Code & Reproducibility Assessment
NONMEM modeling scripts and example datasets are referenced as being available in Supporting Information S1. However, no public code repository (e.g., GitHub, Zenodo) or open-source archive is cited. Full reproducibility therefore requires access to NONMEM 7.5, R, and the journal's supplementary materials.

---

### Supplementary Materials
Supporting Information S1 contains example NONMEM datasets and modeling scripts for the parametric two-exponential bathtub hazard function, which facilitate implementation by other researchers.

---

### Future Directions
Future work should incorporate Breslow and Efron corrections for tied event times; extend the framework to repeated-event (recurrent) analysis; develop PsN-compatible workflows for visual predictive checks and bootstrap procedures; implement the approach in alternative estimation platforms such as Monolix or Stan; evaluate time-dependent weighting factors to assess waning or changing drug effects over time; develop formal diagnostics for the proportional hazards assumption; and integrate the method with tumor growth inhibition, myelosuppression, indirect response, and multistate pharmacometric models. Additional simulation studies under PK model misspecification and alternative hazard shapes would further establish robustness.

---

### Expert Commentary
This work resolves a long-standing friction point in pharmacometrics: the disconnect between rich ODE-based PK/PD models and semi-parametric survival methods. Historically, teams have exported NONMEM-predicted concentration trajectories into R or SAS for Cox modeling, fragmenting the estimation workflow and precluding simultaneous propagation of PK parameter uncertainty into hazard estimates. By embedding partial likelihood directly within NONMEM, the authors enable joint estimation of PK and TTE parameters in a single likelihood—a meaningful methodological advance. The demonstration that static exposure metrics can invert exposure-response relationships due to survivor bias is particularly salient and aligns with evolving regulatory expectations for longitudinal exposure modeling. The computational burden, however, is non-trivial, and the lack of native tied-event handling limits immediate applicability in large oncology trials where event ties are common. I expect this to catalyze community efforts to formalize survival modeling within pharmacometric platforms and to push toward fully Bayesian joint longitudinal-survival models as the next frontier.

---

### Bottom Line
This paper provides a practical, theoretically sound extension of Cox regression into NONMEM that natively handles time-varying ODE-based drug exposures without committing to a specific baseline hazard shape. The evidence strongly favors time-varying exposure metrics over static $C_{max}/C_{trough}/C_{avg}$ summaries and confirms that partial likelihood estimation is feasible and accurate within a nonlinear mixed-effects framework. Practicing pharmacometricians should consider this approach for TTE analyses in trials with dose modifications and longitudinal exposure fluctuations, but must ensure adequate sample sizes ($\ge 500$ subjects for reliable nonlinear parameters), account for longer run times, and recognize that tied events and standard PsN diagnostic workflows require additional methodological development before routine deployment.

---

---

## 📊 Figures

![FIGURE 1: Partial likelihood calculation for time-varying pharmacokinetics in time-to-event analysis (N= 5). The figure illustrates time-varying hazard ratios derived from]({{ site.baseurl }}/assets/digests/2026-04-25-integration-of-time-varying-pharmacometric-modeling-with-cox-regression-for/figures/fig_01.png)

![FIGURE 2: Estimated baseline survival, cumulative hazard, and hazard functions derived from semi-parametric and parametric methods (left:N= 150; right:N= 1500).]({{ site.baseurl }}/assets/digests/2026-04-25-integration-of-time-varying-pharmacometric-modeling-with-cox-regression-for/figures/fig_02.png)

![FIGURE 3: Representative Kaplan–Meier mean covariate (KMMC) plots for drug concentration effect (N= 150). The plot shows how running means of the covariates change over ti]({{ site.baseurl }}/assets/digests/2026-04-25-integration-of-time-varying-pharmacometric-modeling-with-cox-regression-for/figures/fig_03.png)

![FIGURE 4: Distribution of estimated parameters from multiple simulated datasets across different sample sizes and methods. BT refers to the parametric approach using a two]({{ site.baseurl }}/assets/digests/2026-04-25-integration-of-time-varying-pharmacometric-modeling-with-cox-regression-for/figures/fig_04.png)

![FIGURE 5: Distribution of Estimated Likelihood,Imaxand IC50by Different PK Exposure Metrics from 100 Simulated Datasets. Estimated negative twice log partial likelihood,Im]({{ site.baseurl }}/assets/digests/2026-04-25-integration-of-time-varying-pharmacometric-modeling-with-cox-regression-for/figures/fig_05.png)