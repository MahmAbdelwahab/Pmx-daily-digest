---
layout: post
title: "Evaluation and Mitigation of Time-Dependent Confounding Effects in Conventional Exposure-Response Analyses for Oncology Drugs"
date: 2026-09-24
authors: "Yin X, Xu Y, Bi Y, Wang X, Zhu H, Poon EP, Madabushi R, Agrawal A, Zhu H, Singh S, Liu J"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025, 14(12): 2118-2127"
doi: "10.1002/psp4.70119"
paper_type: methodology
tags: [methodology, dose-response, oncology]
excerpt_text: "This simulation-based study systematically characterizes how time-dependent confounding factors—exposure accumulation, dose modifications, and event onset timing—bias conventional exposure-response (E-R) analyses in oncology. The authors demonstrate that time-dependent exposure metrics (e.g., CavgTE) produce false inverse E-R trends under exposure accumulation and false positive trends under dose modifications, while static metrics (Cavg1C, CavgSS) and model-based approaches (Emax, modified CavgTE) mitigate these biases."
pdf_path: "/assets/digests/2026-09-24-evaluation-and-mitigation-of-time-dependent-confounding-effects-in-conventional/PMx_Evaluation_and_Mitigation_of_TimeDepende_20260924.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This simulation-based study systematically characterizes how time-dependent confounding factors—exposure accumulation, dose modifications, and event onset timing—bias conventional exposure-response (E-R) analyses in oncology. The authors demonstrate that time-dependent exposure metrics (e.g., CavgTE) produce false inverse E-R trends under exposure accumulation and false positive trends under dose modifications, while static metrics (Cavg1C, CavgSS) and model-based approaches (Emax, modified CavgTE) mitigate these biases.

---

### Executive Summary
Using a composite drug-disease-trial simulation platform, the authors evaluated bias in conventional E-R analyses (logistic regression, Cox PH, KM plots) across three PK half-life scenarios, two event-onset timings, and three dosing profiles (constant, dynamic with concentration-driven dose reduction, and empirical from a real trial). Under ER1 (outcome independent of exposure), time-dependent exposure metrics inflated Type I error rates above 10% in most scenarios, with exposure accumulation producing inverse bias and dose modifications producing positive bias. Under ER2 (exposure-driven response via a joint PK-tumor size model), CavgTE-based logistic regression yielded shallower or falsely inverse slopes at plateau doses, while dynamic dosing produced steeper positive slopes. Static exposure metrics consistently avoided bias. Mitigation strategies—including an Emax model with placebo control, a modified CavgTE derivation (mCavgTE), and inclusion of wider dose ranges—showed promise, though dose-range requirements were substantial (3-fold for constant dosing, 6- to >12-fold for empirical dosing). The work provides practical guidance for interpreting E-R analyses and supporting regulatory dosing decisions.

---

### Scientific Context & Motivation
Conventional E-R analyses in oncology typically rely on summary exposure metrics from pivotal single-dose-level trials, yet time-dependent factors—drug accumulation, dose modifications (interruptions/reductions), and event onset timing—can confound the true E-R relationship. Prior work (e.g., nivolumab clearance changes, Wiens et al. on long dosing intervals, Lin et al. on cumulative exposure) highlighted specific confounders but did not systematically evaluate the combined effects of accumulation and dose modification across PK profiles and event timings. This study fills that gap by quantifying the source, direction, and magnitude of bias and by proposing and testing mitigation strategies within a unified simulation framework.

---

## ⚡ Methodological Snapshot
The study uses a simulation-based approach with a composite drug-disease-trial modeling platform. The drug component is a two-compartment PK model with parameters adjusted to create three half-life scenarios (PK1 short, PK2 moderate, PK3 long). The disease component generates clinical outcomes under two paradigms: ER1 uses a Weibull time-to-event model with outcome independent of drug exposure (with fast EO1 and slow EO2 onset timings), while ER2 uses a joint PK-tumor size model with sigmoidal Emax drug effect on tumor shrinkage, from which ORR and PFS are derived per RECIST criteria. The trial component implements three dosing profiles: constant (DH1), dynamic with concentration-driven adverse event and dose reduction (DH2), and empirical dosing from a real clinical trial (DH3). For each simulated trial, static exposure metrics (Cavg1C, CavgSS) and time-dependent metrics (CavgTE) are calculated, and conventional E-R analyses (logistic regression, Cox PH, KM plots) are applied. Bias is assessed by comparing estimated E-R slopes to ground truth, and Type I error is evaluated under ER1 where no true relationship exists. A modified CavgTE (mCavgTE) is introduced, which reassigns the last assessment day for non-responders to the last observed event onset day (after outlier removal) or the patient's actual last assessment, whichever is earlier, to reduce confounding from dose modifications accumulating over time.

---

## 📐 Statistical Framework
The statistical framework rests on conventional generalized linear models and semi-parametric survival models. Logistic regression assumes a linear relationship between the exposure metric and the log-odds of the binary outcome (ORR), with Wald tests for significance. Cox PH assumes proportional hazards with a linear log-hazard relationship to exposure. The Emax model in logistic regression replaces the linear exposure term with a sigmoidal Emax function, capturing plateau effects. The underlying data-generating mechanisms are: (1) ER1 uses a Weibull distribution for event times, independent of exposure; (2) ER2 uses a tumor size model with zero-order growth and exponential shrinkage, with drug effect following a sigmoidal Emax relationship (EC50=75 ng/mL). Key assumptions include: no intrinsic/extrinsic factors affecting PK or response (to isolate confounding), additive drug effects with no synergism/antagonism, and first-event-only analysis. The bias evaluation compares estimated E-R slopes against true relationships, with Type I error defined as detecting a significant slope (p<0.05) when no true relationship exists (ER1). The simulation design deliberately omits time-dependent clearance and baseline covariates to focus on the three target confounders: exposure accumulation, dose modification patterns, and event onset time.

---

### Estimator Behavior
The estimators (logistic regression coefficients, Cox PH hazard ratios) exhibit systematic bias whose direction depends on the dominant confounder. Under exposure accumulation with time-dependent metrics (CavgTE), the slope is biased downward (inverse bias), with magnitude increasing for long half-lives and fast event onset—early events are artificially linked to low pre-steady-state concentrations. Under dose modifications, the slope is biased upward (positive bias), as early events coincide with higher pre-reduction doses while non-responders accumulate dose reductions over time. The bias magnitude is modulated by event onset timing: fast onset (EO1) amplifies both bias directions, while slow onset (EO2) partially offsets them (e.g., more event patients also undergo dose reductions). Type I error inflation exceeds 10% for time-dependent metrics in most scenarios, with Cox PH showing greater inflation than logistic regression (detectable even at n=20 under empirical dosing). Static metrics (Cavg1C, CavgSS) maintain Type I error below 10% across all scenarios. The Emax model with placebo control reduces bias in ER2 by capturing the plateau, while mCavgTE reduces positive bias in high-dose-reduction scenarios. Efficiency: larger sample sizes (up to 1000) robustly detect the biased slopes, paradoxically increasing Type I error for time-dependent metrics—a key caution for well-powered trials.

---

### Validation Design
Validation was conducted entirely through Monte Carlo simulation with replication counts of 500-1000 per scenario. ER1 scenarios (outcome independent of exposure) served as null cases for Type I error evaluation, with false E-R relationships identified when Type I error exceeded 10% of replications. ER2 scenarios (exposure-driven outcome) served as positive cases where bias was assessed by comparing estimated E-R slopes to analytically derived true E-R profiles (Section S3, Figures S9-S10). The design systematically varied: PK half-life (PK1/PK2/PK3), dosing profile (DH1/DH2/DH3), event onset (EO1/EO2), sample size (20-1000), dropout rate (25%/80%), and dose range (up to 20-fold). For mCavgTE validation, ER1 last assessment times were randomly sampled from ER2 to match ORR event/censoring timing distributions. The dose-range analysis used violin plots of odds ratio bias across replications, with thresholds for 'adequate' mitigation defined by bias reduction to near-zero. Type I error tables (Tables S5-S6) assessed whether additional dose levels reduced false positives. The validation is thorough in scenario coverage but relies entirely on simulated data with known ground truth, which is appropriate for bias quantification but does not validate performance on real clinical datasets.

---

### Applicability Boundaries
The findings apply to conventional E-R analyses (logistic regression, Cox PH, KM) using summary exposure metrics in oncology, particularly for small molecules with daily or weekly dosing. The method works well for: (1) early-onset events (AEs, ORR) where mCavgTE and static metrics effectively mitigate bias; (2) scenarios with mild dose modification where static metrics suffice; (3) drugs with short-to-moderate half-lives where accumulation bias is minimal. The method does NOT work for: (1) wide-onset events (PFS, OS) where KM plots show directional errors even with dose-range expansion and Cox PH is highly sensitive to dose modifications; (2) scenarios with >50% dose reduction where even mCavgTE shows inconsistent bias trends; (3) biologics with long dosing intervals (2-4 weeks) where the CavgTE definition differs (the authors note their approach differs from Wiens et al.); (4) drugs with time-dependent clearance changes (e.g., nivolumab-like disease-driven clearance), which were excluded from the simulation. Data requirements: adequate sample size (≥100 for reliable bias detection), dose-range data (≥3-fold for constant dosing, ≥6-fold for empirical dosing), and information on dose modification patterns. The quantitative thresholds are simulation-specific and should be recalibrated for drugs with different PK-PD properties.[^fc-7]

---

### Comparison to Alternatives
The study builds on prior work by Wiens et al. (long dosing intervals) and Lin et al. (cumulative exposure for censored patients). Unlike Wiens et al., who defined CavgTE over at least one dosing interval (producing a positive slope from early events at Cmax), this study defines CavgTE from treatment start to event/censoring, and systematically evaluates both accumulation and dose-modification confounders. Compared to Lin et al., who found that shifting censored patients' exposure to later time points (EoT+14 days) artificially steepens positive E-R trends, this study's mCavgTE shifts non-responder assessment earlier (to the last observed event day), reducing bias. The study does not compare against formal causal inference methods (marginal structural models, g-computation, inverse probability weighting), which would directly address time-dependent confounding by modeling the dose-modification process. The Emax model with placebo is compared favorably to conventional logistic regression, showing reduced bias at plateau doses. Static metrics (Cavg1C, CavgSS) are shown to be superior to time-dependent metrics across all scenarios, but the authors note they may offer limited insight when dynamic dosing and response onset times must be accounted for, suggesting a complementary use of both metric types.

---

### Implementation Guidance
Software: R 4.4.0 with mrgsolve (v1.4.1) for simulation, glm for logistic regression, rstan for Emax model fitting, and survival (v3.5-5) for KM/Cox PH. Code available at https://github.com/XuefenYin/Time-Dependent-Confounding-in-ER-Analysis.git. Practical recommendations: (1) Always compute and report both static (Cavg1C, CavgSS) and time-dependent (CavgTE) exposure metrics; use static metrics as primary anchors and assess consistency across metrics. (2) When significant dose modifications (>50% reduction) are present, use mCavgTE (reassign non-responder last assessment to the last observed event day after outlier removal, or the patient's actual last assessment, whichever is earlier) instead of conventional CavgTE. (3) For ORR endpoints, consider fitting an Emax model in logistic regression with placebo control data to capture plateau effects. (4) Ensure adequate dose range: ≥3-fold for constant dosing, ≥6-fold (fast onset) to >12-fold (slow onset) for empirical dosing with modifications. (5) Cross-check E-R consistency with dose-response results and interpret with totality of evidence. Computational cost: 1000 replications per scenario with 500-1000 patients each is computationally feasible in R (mrgsolve is efficient for PK simulation); the Emax model fitting via rstan adds moderate computational overhead. The mCavgTE adjustment is computationally trivial.[^fc-14] For regulatory submissions, the authors recommend presenting multiple exposure metrics and explicitly discussing potential bias directions based on the dominant confounder.[^fc-15]

---

## 📊 Key Findings
1) Exposure accumulation with time-dependent metrics (CavgTE) induces a false inverse E-R slope, most pronounced when events occur early relative to steady-state attainment (long half-life, fast onset). 2) Significant dose modifications induce a false positive E-R slope, driven by early events at higher doses and dose reductions in longer-surviving non-responders. 3) Static exposure metrics (Cavg1C, CavgSS) avoid these biases across all scenarios, with Type I error rates below 10%, whereas time-dependent metrics inflate Type I error (exceeding 10%) in most cases, particularly with large samples and fast onset. 4) Cox PH regression is more sensitive to dose-modification confounding than logistic regression, showing distortion even at n=20. 5) In ER2, an Emax model with placebo control substantially reduced ORR E-R bias, capturing plateau effects that logistic regression overestimates. 6) The modified mCavgTE (reassigning last assessment for non-responders to the last observed event day) reduced bias in high-dose-reduction scenarios (>50% reduction). 7) Dose-range requirements for bias mitigation: 3-fold for constant dosing, 6-fold (fast onset) to >12-fold (slow onset) for empirical dosing; for dynamic dosing, a 5-fold range was needed at 500 mg starting dose versus 2-fold at 200 mg. 8) KM curves stratified by exposure quartiles failed to show true drug effects even at EC50-level doses, and showed reversed ordering under high dose-reduction scenarios.

---

### Strengths & Limitations

#### Strengths
- Comprehensive simulation framework integrating drug (two-compartment PK), disease (tumor size model with sigmoidal Emax), and trial (dosing profiles) components, enabling systematic isolation of confounding sources
- Broad scenario coverage: three PK half-lives, two event-onset timings, three dosing profiles (constant, dynamic, empirical), and sample sizes from 20 to 1000
- Quantification of both bias direction/magnitude and Type I error inflation, providing actionable thresholds (e.g., >10% Type I error) for practitioners
- Practical, implementable mitigation strategies: static exposure metrics, Emax model with placebo, mCavgTE derivation, and dose-range guidance
- Regulatory relevance: FDA-affiliated authors, with a real-world application example (pembrolizumab Q6W dosing) demonstrating how bias-aware interpretation supports decisions
- Code and model files publicly available on GitHub, enhancing reproducibility

#### Limitations (Acknowledged by Authors)
- Simulations focused on large sample sizes and did not incorporate tumor baseline characteristics or time-dependent clearance changes
- Restricted to first-event analysis, ignoring recurrent events
- Mitigation strategies (e.g., mCavgTE) are better suited for early-onset events (AEs, ORR) and may not work for wide-onset events (PFS, OS)
- KM plots showed directional errors under dynamic dosing with high dose reduction, and even a 3-fold dose range could not correct this
- Cox PH is more sensitive to dose modifications than logistic regression, resulting in greater E-R distortion

#### Limitations (Expert Review)
- The mCavgTE approach is ad hoc—reassigning non-responder assessment times to the last observed event day—and its performance depends on the ORR distribution; it may not generalize to endpoints with different event-time distributions
- The Emax model mitigation requires knowledge of the true underlying PD relationship (sigmoidal Emax), which is rarely known a priori in practice; misspecification of the model structure could reintroduce bias
- The empirical dosing (DH3) was borrowed from a single clinical trial, limiting generalizability of dose-modification patterns across different drugs and indications
- No formal causal inference methods (e.g., marginal structural models, g-computation, inverse probability weighting) were evaluated as alternatives, which could offer more principled handling of time-dependent confounding
- The simulation assumed no intrinsic/extrinsic factors affecting PK or response, simplifying the confounding structure relative to real-world heterogeneity
- Quantitative dose-range thresholds (3-fold, 6-fold, >12-fold) are simulation-specific and may not transfer directly to other drugs with different PK-PD properties

#### Generalizability
The qualitative findings—that exposure accumulation biases E-R toward inverse trends and dose modifications toward positive trends, and that static metrics mitigate bias—are likely generalizable across oncology small molecules with similar PK properties and dosing patterns. However, the specific quantitative thresholds (dose ranges, Type I error magnitudes) are tied to the simulation parameterization (e.g., EC50=75 ng/mL, specific PK parameters) and should be interpreted as illustrative rather than universal. The framework is extensible to biologics, but the long-dosing-interval considerations differ (as noted in the comparison to Wiens et al.).

---

### Key Equations

**Weibull time-to-event model (ER1)**

{% raw %}
$$
h(t) = \frac{k}{\lambda} \left(\frac{t}{\lambda}\right)^{k-1}
$$
{% endraw %}

Used to generate time-to-event data in ER1 scenarios where clinical outcome is independent of drug exposure, with two onset timings (EO1 fast, EO2 slow) parameterized by the scale parameter λ.

**Sigmoidal Emax drug effect on tumor size (ER2)**

{% raw %}
$$
E = \frac{E_{max} \cdot C^{\gamma}}{EC_{50}^{\gamma} + C^{\gamma}}
$$
{% endraw %}

Describes the drug effect on tumor shrinkage in the joint PK-tumor size model for ER2 scenarios, where response is driven by drug exposure. EC50=75 ng/mL in the simulations, with ORR plateauing around 100 mg dose.

**Logistic regression for ORR E-R analysis**

{% raw %}
$$
\log\left(\frac{p}{1-p}\right) = \beta_0 + \beta_1 \cdot \text{Exposure}
$$
{% endraw %}

Conventional E-R analysis method for binary endpoints (ORR), where exposure is a summary metric (static or time-dependent). Wald test (p<0.05) used to assess significance; bias assessed by comparing estimated slope to true E-R relationship.

**Cox proportional hazards model for PFS E-R analysis**

{% raw %}
$$
h(t|X) = h_0(t) \exp(\beta \cdot \text{Exposure})
$$
{% endraw %}

Conventional time-to-event E-R analysis method for PFS, assuming a linear relationship between the PK metric and log-hazard. More sensitive to dose-modification confounding than logistic regression in the simulations.

---

### Figures & Tables

- **Figure 1**: Programming structure for various Exposure-Response scenarios, showing the composite drug-disease-trial model with PK (two-compartment), disease (tumor size model), and trial (dosing profiles DH1/DH2/DH3) components.
  - *Significance*: Provides the conceptual framework for the entire simulation platform, illustrating how the three components interact to generate E-R datasets under different scenarios.
- **Figure 2**: Bias direction in ER1: false inverse E-R slope from exposure accumulation (panels a,b,e,f) and false positive E-R slope from dose modifications (panels c,d,g,h) using CavgTE in logistic regression, with fast (EO1) and slow (EO2) event onset.
  - *Significance*: Central result demonstrating the two opposing bias mechanisms and their dependence on event onset timing relative to exposure accumulation.
- **Figure 3**: Comparison of static vs. time-dependent exposure metrics in ER1, showing that static metrics (Cavg1C, CavgSS) avoid bias while time-dependent metrics (CavgTE) produce inflated Type I error.
  - *Significance*: Key evidence supporting the recommendation to use static exposure metrics as primary anchors in E-R analyses.
- **Figure 4**: ER2 results: ORR E-R relationships under constant (DH1) and dynamic (DH2) dosing, showing shallower slopes with CavgTE, false inverse trends at plateau doses, and the mitigating effect of Emax model with placebo control. KM curves for PFS show inability to detect true drug effects and reversed ordering under high dose reduction.
  - *Significance*: Demonstrates that bias persists when response is truly exposure-driven, and that model structure (Emax vs. logistic) and placebo inclusion materially improve estimation.
- **Figure 5**: Comparison of CavgTE vs. mCavgTE in ER1 and ER2, showing bias reduction with the modified derivation, particularly in scenarios with >50% dose reduction.
  - *Significance*: Validates the proposed mCavgTE method as a practical mitigation strategy for dose-modification confounding.
- **Figure 6**: Impact of dose range on odds ratio bias in ER1 using violin plots, showing 3-fold range mitigates accumulation bias for constant dosing, while 6-fold (fast onset) to >12-fold (slow onset) is needed for empirical dosing.
  - *Significance*: Provides quantitative guidance on the dose-range requirements for reliable E-R characterization under different confounding scenarios.
- **Figure 7**: ER2 dynamic dosing: effect of adding lower dose levels (100 mg, 60 mg) on ORR E-R bias and KM curve ordering, showing that a 5-fold range is needed at 500 mg starting dose but 2-fold suffices at 200 mg.
  - *Significance*: Illustrates that dose-range requirements depend on the starting dose and the degree of dose modification, informing trial design for dose optimization.

---

### Code & Reproducibility Assessment
Model and script files are publicly available at https://github.com/XuefenYin/Time-Dependent-Confounding-in-ER-Analysis.git. Simulations were conducted in R 4.4.0 using mrgsolve (v1.4.1) for dataset generation, glm for logistic regression, stan for Emax model fitting, and survival (v3.5-5) for KM and Cox PH analyses. The GitHub repository enables full reproduction of the simulation scenarios and analyses.[^fc-22]

---

### Supplementary Materials
Supplementary materials (Data S1) include detailed model parameters (Table S1), simulated trial list (Table S2), Type I error evaluation conditions (Table S3), mCavgTE comparison results (Table S4), dose-range Type I error tables (Tables S5-S6), CP_AE model details (Section S1, Figure S1), PK parameter distributions and dose modification patterns (Figure S2), typical PK and PK-PD profiles (Figures S3-S8), true E-R profiles (Figures S9-S10), dose reduction percentages (Figure S11), additional bias results for logistic and Cox PH (Figures S12-S19), ER2 detailed results (Figures S20-S25), mCavgTE comparisons (Figures S26-S30), and dose-range analyses (Figures S31-S43).

---

### Future Directions
The authors suggest exploring more advanced E-R analysis methods such as longitudinal modeling to better capture time-dependent changes in exposure and disease status. Future work could also: (1) evaluate formal causal inference methods (marginal structural models, g-computation) as principled alternatives to the ad hoc mCavgTE; (2) extend the framework to incorporate time-dependent clearance (e.g., biologics with disease-driven clearance changes) and recurrent events; (3) validate mCavgTE across a broader range of event-time distributions and endpoints; (4) assess the performance of the mitigation strategies under model misspecification (e.g., when the true PD relationship is not Emax); and (5) apply the framework to real clinical datasets to confirm the predicted bias directions and magnitudes.

---

### Expert Commentary
This paper addresses a critical and underappreciated problem in pharmacometrics: conventional E-R analyses using time-dependent exposure metrics are systematically biased by the very clinical processes (dose modifications, accumulation) they aim to characterize. The simulation framework is well-constructed and the findings are clinically actionable. The key insight—that the direction of bias depends on the dominant confounder (accumulation → inverse, dose modification → positive)—provides a useful diagnostic heuristic for interpreting unexpected E-R slopes. However, the proposed mitigations are pragmatic rather than principled: the mCavgTE adjustment is essentially a sensitivity analysis with an arbitrary truncation rule, and the Emax model requires knowing the true PD structure. From a statistical perspective, the paper would benefit from a formal causal inference framing (e.g., marginal structural models with inverse probability weighting for dose modifications), which directly addresses time-dependent confounding. Nevertheless, for regulatory applications where simplicity and interpretability are paramount, the recommendations—use static metrics, assess consistency, leverage dose-response totality—are sound and immediately implementable. The pembrolizumab example nicely illustrates how bias-aware interpretation can support real regulatory decisions.

---

### Bottom Line
For oncology E-R analyses supporting dosing decisions, do not rely solely on time-dependent exposure metrics (e.g., CavgTE): exposure accumulation can create false inverse trends and dose modifications can create false positive trends, with Type I error inflation exceeding 10% in most scenarios. Use static exposure metrics (Cavg1C, CavgSS) as primary anchors, assess consistency across multiple metrics, consider model structures that reflect the underlying PD (e.g., Emax with placebo), and when dose modifications are significant, use modified time-dependent derivations (mCavgTE) and include data from a wide dose range (≥3-fold for constant dosing, ≥6-fold when modifications are common). Always cross-check E-R consistency with dose-response results and interpret with the totality of evidence.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “Thresholds for 'adequate' mitigation were defined by bias reduction to near-zero.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “The findings apply particularly to small molecules with daily or weekly dosing.” → correction: “extending to clinical scenarios of exposure accumulation and/or dose modification (interruptions/reductions) that frequently occur with small molecule oncology drugs.”
[^fc-3]: **UNSUPPORTED** — original: “The method does NOT work for biologics with long dosing intervals (2-4 weeks) where the CavgTE definition differs.” → correction: “Our approach to derive CavgTE for long dosing intervals (i.e., 2 or 4 weeks) differs from that of Wiens et al. [7].”
[^fc-4]: **UNSUPPORTED** — original: “The method does NOT work for drugs with time-dependent clearance changes (e.g., nivolumab-like disease-driven clearance), which were excluded from the simulation.” → correction: “In our simulation setting, intrinsic and extrinsic factors affecting either PK or response (efficacy or safety) were not incorporated in order to focus on the key issue of dose modification (interruptions/reductions).”
[^fc-5]: **UNSUPPORTED** — original: “Data requirements include adequate sample size (≥100 for reliable bias detection).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **NUMERIC_MISMATCH** — original: “Data requirements include dose-range data (≥3-fold for constant dosing, ≥6-fold for empirical dosing).” → correction: “For constant dosing, a 3-fold dose range appears to mitigate bias due to exposure accumulation (Figure 6a–d, Figures S31 and S32). For empirical dosing, a 6-fold range for fast onset and > 12-fold range for slow onset would be required to reduce bias effectively (Figure 6e–h and Figures S33–S36).”
[^fc-7]: **UNSUPPORTED** — original: “The quantitative thresholds are simulation-specific and should be recalibrated for drugs with different PK-PD properties.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **CONTRADICTED** — original: “Unlike Wiens et al., who defined CavgTE over at least one dosing interval (producing a positive slope from early events at Cmax), this study defines CavgTE from treatment start to event/censoring.” → correction: “Our approach to derive CavgTE for long dosing intervals (i.e., 2 or 4 weeks) differs from that of Wiens et al. [7]. We define the duration as at least one dosing interval, preventing the positive slope observed by Wiens et al. from linking early events occurring around Cmax in the first dosing period to high concentrations.”
[^fc-9]: **CONTRADICTED** — original: “Static metrics (Cavg1C, CavgSS) are shown to be superior to time-dependent metrics across all scenarios.” → correction: “However, static exposure metrics may offer limited insight into E–R relationships in certain situations, particularly when dynamic dosing (e.g., dose titration/interruption/significant reduction) and various response onset times should be accounted for.”
[^fc-10]: **UNSUPPORTED** — original: “Practical recommendation: Always compute and report both static (Cavg1C, CavgSS) and time-dependent (CavgTE) exposure metrics.” → correction: “we recommend conducting E–R analyses using multiple exposure metrics, including static ones, to assess consistency.”
[^fc-11]: **UNSUPPORTED** — original: “Practical recommendation: Use static metrics as primary anchors and assess consistency across metrics.” → correction: “we recommend conducting E–R analyses using multiple exposure metrics, including static ones, to assess consistency.”
[^fc-12]: **UNSUPPORTED** — original: “Computational cost: 1000 replications per scenario with 500-1000 patients each is computationally feasible in R.” → correction: “No evidence in source.”
[^fc-13]: **UNSUPPORTED** — original: “The Emax model fitting via rstan adds moderate computational overhead.” → correction: “No evidence in source.”
[^fc-14]: **UNSUPPORTED** — original: “The mCavgTE adjustment is computationally trivial.” → correction: “No evidence in source.”
[^fc-15]: **UNSUPPORTED** — original: “For regulatory submissions, the authors recommend presenting multiple exposure metrics and explicitly discussing potential bias directions based on the dominant confounder.” → correction: “No evidence in source.”
[^fc-16]: **UNSUPPORTED** — original: “The Weibull time-to-event model (ER1) is given by h(t) = (k/λ) * (t/λ)^(k-1).” → correction: “Not found in source text.”
[^fc-17]: **UNSUPPORTED** — original: “Two onset timings (EO1 fast, EO2 slow) are parameterized by the scale parameter λ.” → correction: “Not found in source text.”
[^fc-18]: **UNSUPPORTED** — original: “The sigmoidal Emax drug effect on tumor size (ER2) is given by E = (Emax * C^γ) / (EC50^γ + C^γ).” → correction: “Not found in source text.”
[^fc-19]: **UNSUPPORTED** — original: “Logistic regression for ORR E-R analysis is given by log(p/(1-p)) = β0 + β1 * Exposure.” → correction: “Not found in source text.”
[^fc-20]: **UNSUPPORTED** — original: “Cox proportional hazards model for PFS E-R analysis is given by h(t|X) = h0(t) * exp(β * Exposure).” → correction: “Not found in source text.”
[^fc-21]: **UNSUPPORTED** — original: “Figure 3 compares static vs. time-dependent exposure metrics in ER1, showing that static metrics avoid bias while time-dependent metrics produce inflated Type I error.” → correction: “For both scenarios with/without significant dose modifications, using static exposure metrics (e.g., Cavg1C and CavgSS: from the first dosing interval or steady state under the nominal dose) helps avoid these biases (Figure 3 and Figures S12–S15)”
[^fc-22]: **UNSUPPORTED** — original: “The GitHub repository enables full reproduction of the simulation scenarios and analyses.” → correction: “The model and script files are available on the linked GitHub repository (https://github.com/XuefenYin/Time-Dependent-Confounding-in-ER-Analysis.git).”
[^fc-23]: **UNSUPPORTED** — original: “Future work could evaluate formal causal inference methods (marginal structural models, g-computation) as principled alternatives to the ad hoc mCavgTE.” → correction: “No evidence found”
[^fc-24]: **UNSUPPORTED** — original: “Future work could extend the framework to incorporate time-dependent clearance (e.g., biologics with disease-driven clearance changes) and recurrent events.” → correction: “No evidence found”
[^fc-25]: **UNSUPPORTED** — original: “Future work could validate mCavgTE across a broader range of event-time distributions and endpoints.” → correction: “No evidence found”
[^fc-26]: **UNSUPPORTED** — original: “Future work could assess the performance of the mitigation strategies under model misspecification (e.g., when the true PD relationship is not Emax).” → correction: “No evidence found”
[^fc-27]: **UNSUPPORTED** — original: “Future work could apply the framework to real clinical datasets to confirm the predicted bias directions and magnitudes.” → correction: “No evidence found”
[^fc-28]: **UNSUPPORTED** — original: “The proposed mitigations are pragmatic rather than principled.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-29]: **UNSUPPORTED** — original: “The mCavgTE adjustment is essentially a sensitivity analysis with an arbitrary truncation rule.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-30]: **UNSUPPORTED** — original: “The paper would benefit from a formal causal inference framing (e.g., marginal structural models with inverse probability weighting for dose modifications).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-31]: **NUMERIC_MISMATCH** — original: “Include data from a wide dose range (≥3-fold for constant dosing, ≥6-fold when modifications are common).” → correction: “For constant dosing, a 3-fold dose range appears to mitigate bias due to exposure accumulation. For empirical dosing, a 6-fold range for fast onset and > 12-fold range for slow onset would be required to reduce bias effectively.”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-09-24-evaluation-and-mitigation-of-time-dependent-confounding-effects-in-conventional/figures/fig_01.jpg)

![The programming structure for various Exposure–Response scenarios. AE, Adverse event; CPs, Plasma concentrations; EC50, Concentration at 50% of the maximum effec]({{ site.baseurl }}/assets/digests/2026-09-24-evaluation-and-mitigation-of-time-dependent-confounding-effects-in-conventional/figures/fig_02.jpg)