---
layout: post
title: "Strategies for pediatric dose derivation from population pharmacokinetic models"
date: 2026-08-27
authors: "Krause A, Cellière G"
journal: "J Pharmacokinet Pharmacodyn 53, 46 (2026)"
doi: "10.1007/s10928-026-10053-8"
paper_type: methodology
tags: [methodology, pediatrics]
excerpt_text: "This tutorial formalizes exposure matching for pediatric dose derivation from adult population PK models, defining three dose-selection strategies (best-fit, conservative, progressive) evaluated against Cmax, Ctrough, and AUC at steady state. The algorithm combines a fine-grid dose optimization step with a practical dose-strength feasibility step, and incorporates interindividual variability via simulation-based prediction intervals. A warfarin case study and fully reproducible R/Monolix implementation are provided."
pdf_path: "/assets/digests/2026-08-27-strategies-for-pediatric-dose-derivation-from-population-pharmacokinetic-models/PMx_Strategies_for_pediatric_dose_derivation_20260827.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This tutorial formalizes exposure matching for pediatric dose derivation from adult population PK models, defining three dose-selection strategies (best-fit, conservative, progressive) evaluated against Cmax, Ctrough, and AUC at steady state. The algorithm combines a fine-grid dose optimization step with a practical dose-strength feasibility step, and incorporates interindividual variability via simulation-based prediction intervals. A warfarin case study and fully reproducible R/Monolix implementation are provided.

---

### Executive Summary
The authors present a structured, reproducible algorithm for deriving pediatric dosing tables from adult population pharmacokinetic models via exposure matching. The method proceeds in two stages: (1) identification of optimal doses on a fine grid of body weights and doses for each exposure metric (Cmax,ss, Ctrough,ss, AUCτ,ss), and (2) selection of practically feasible doses from available strengths under one of three explicit strategies — best-fit (closest exposure to optimum), conservative (exposure not exceeding adult reference), or progressive (exposure not below adult reference). Interindividual PK variability is propagated through the optimization by simulating random effects, yielding prediction intervals for optimal doses and exposure distributions per body weight. The framework is illustrated with a warfarin two-compartment model, demonstrating that strategy choice (conservative vs progressive) induces larger exposure deviations than exposure-metric choice, and that dose-boundary effects are most pronounced at low body weights. The approach is implemented in R with Monolix/Simulx, with all code and data provided as supplementary material.

---

### Scientific Context & Motivation
Regulatory frameworks (FDA PSP, EMA PIP) require pediatric dosing recommendations before pediatric trials begin, yet pediatric data are typically unavailable at that stage. Model-based extrapolation from adult population PK models is widely recommended but often applied heuristically, lacking a formalized, reproducible framework for translating continuous optimal doses into practical dosing tables constrained by available dose strengths and body-weight categories. The paper addresses this gap by formalizing exposure matching — the assumption that similar exposure in adults and children yields similar efficacy/safety — into an explicit algorithm with defined optimization strategies, exposure metrics, and variability assessment. This is particularly relevant given that pediatric development programs often include only a single study in the patient population, making pre-study dose selection critical.

---

## ⚡ Methodological Snapshot
The algorithm formalizes exposure matching for pediatric dose derivation in two stages. Stage 1 computes exposure metrics (Cmax,ss, Ctrough,ss, AUCτ,ss) on a fine grid of body weights and doses using a validated adult population PK model with a body size covariate. For each body weight and exposure metric, the optimal dose is defined as the dose minimizing the absolute difference to the reference adult exposure. Stage 2 maps these continuous optimal doses onto practically feasible doses, constrained by available dose strengths and predefined body-weight categories, under one of three strategies: best-fit (closest available exposure to optimum), conservative (available exposure not exceeding reference), or progressive (available exposure not below reference). Interindividual variability is incorporated by simulating random effects for each body weight, generating prediction intervals for optimal doses and exposure distributions. The output is a dosing table per exposure metric and strategy, accompanied by visualizations for risk assessment and post-hoc refinement.

---

## 📐 Statistical Framework
The method assumes a nonlinear mixed-effects population PK model with a body size descriptor (e.g., body weight) as covariate, typically with allometric scaling (exponents 1.0 for volumes, 0.75 for clearances). The core assumption is exposure-response similarity between adults and children — that matching adult exposure in pediatric patients yields comparable efficacy and safety. The optimization criterion is deterministic: minimizing absolute exposure difference to a reference adult (defined by reference body weight and dose) on a fine grid. Interindividual variability is modeled via random effects on PK parameters, propagated through simulation to yield prediction intervals (90% ranges) for exposures and optimal doses per body weight. The framework does not formally incorporate parameter estimation uncertainty (standard errors of fixed effects) or model misspecification, focusing instead on interindividual variability as the primary source of dose-relevant uncertainty. Steady-state exposure is defined over a dosing interval after sufficient dosing days (30 daily doses in the case study), with the reference adult defined as a 75 kg individual receiving 10 mg once daily.

---

### Estimator Behavior
The 'estimator' in this context is the optimal dose derived from the exposure-matching criterion. Its behavior is characterized by: (1) Bias — the conservative strategy systematically biases doses downward (exposure below reference), while the progressive strategy biases upward; best-fit is unbiased by construction at the grid level but exhibits boundary effects at dose-change points. (2) Efficiency — the fine-grid approach ensures the theoretical optimum is identified to within grid resolution (1 mg or 0.2 mg in the case study), but the practical dose-strength constraint introduces step-function discontinuities that can cause large local deviations (up to ~2× exposure at 10 kg with progressive strategy). (3) Convergence — the grid-based optimization is deterministic and converges trivially; the simulation-based prediction intervals converge with the number of simulated subjects (100 per body weight in the case study), though the authors do not report Monte Carlo error. The method's sensitivity to grid resolution and reference subject definition is not formally assessed, representing a gap in understanding the estimator's robustness.

---

### Validation Design
The method is validated through a single case study using the publicly available warfarin dataset (O'Reilly & Aggeler, 1963/1968).[^fc-8] An adult two-compartment population PK model with first-order absorption with lag time and allometric body weight scaling was developed and compared against a model with estimated (rather than fixed) body weight coefficients, showing similar AIC/BICc and predicted profiles. The dose optimization was then applied with a fine grid (10–75 kg at 2.5 kg intervals; 0–10 mg at 0.2 mg intervals) and a practical grid (10, 20, 30, 40, 50, 60, 75 kg; doses 0, 2, 4, 6, 8, 10 mg). Validation of the dosing recommendations was performed via simulation of 6.6 million subjects (100 per body weight × dose combination) to generate prediction intervals for exposures and optimal doses, compared against the reference adult prediction interval. No external validation against observed pediatric data was possible (consistent with the pre-pediatric-data use case), and no benchmark comparison against alternative methods (e.g., PBPK, heuristic mg/kg scaling) was performed.

---

### Applicability Boundaries
The method is applicable when: (1) a validated adult population PK model with a body size covariate exists; (2) maturation of clearance and other age-dependent processes is complete or negligible in the target pediatric age range (typically children ≥2 years and adolescents); (3) exposure-response similarity between adults and children can be reasonably assumed; and (4) the drug's PK is adequately described by the model across the body weight range of interest. The method is NOT appropriate when: (1) maturation is incomplete (neonates, infants) without extension with maturation functions or PBPK; (2) the disease or exposure-response relationship differs between adults and children; (3) the adult model lacks a body size descriptor and cannot be extended; (4) pediatric formulations differ substantially in absorption characteristics from adult formulations (though the authors note this can be handled by adding the pediatric absorption model); or (5) multiple covariates beyond body size are needed, which would create complex response surfaces and impractical dosing tables. The body weight range should be chosen to reflect the target population (e.g., starting at 10 kg for children ≥2 years).

---

### Comparison to Alternatives
The paper positions exposure matching against two alternatives: (1) pediatric dose-finding studies (randomized dose-ranging trials in children), which are necessary when disease/response similarity cannot be assumed but are resource-intensive and ethically constrained; and (2) PBPK modeling, which is more mechanistic and appropriate when maturation or physiological differences are significant, but requires extensive physiological data and is more complex to implement. Within exposure matching, the paper contrasts its formalized grid-based optimization with common heuristic approaches (e.g., simple mg/kg scaling or visual inspection of predicted profiles), arguing that the formalized approach provides reproducibility, explicit strategy definitions, and quantitative risk assessment. The comparison to heuristic mg/kg scaling is implicit in the warfarin results: the algorithm yields approximately 0.2 mg/kg at 10 kg decreasing to 0.13 mg/kg at 75 kg, consistent with the USPI observation that infants require higher mg/kg doses — but the algorithm provides a principled basis for this rather than an arbitrary constant. The paper does not quantitatively benchmark against PBPK or alternative optimization criteria, which is a limitation.

---

### Implementation Guidance
The method is implemented in R with Monolix/Simulx via lixoftConnectors. Key practical guidance: (1) The configuration file (Setup.R) controls all parameters — body size descriptor, grid ranges and increments, available dose strengths, body weight categories, exposure metrics, and strategy selection; adapting to a new compound requires editing this file. (2) The fine grid should be chosen to balance resolution and computational cost; the case study used 2.5 kg and 0.2 mg increments with 100 simulated subjects per body weight, totaling 6.6M simulations — feasible on modern hardware but requiring adequate memory. (3) Random effects should be kept identical across body weights for consistency between simulations (as implemented). (4) Steady-state should be verified for the specific compound, as the number of doses to reach steady state varies (the authors recommend conservative choices to cover almost all subjects). (5) The choice of reference adult (body weight and dose) should reflect the clinically relevant adult regimen.[^fc-21] (6) Results should be reviewed via the visualization outputs (Figures 3–7) to identify boundary effects and potential need for additional dose strengths. (7) MonolixSuite requires a license (free 2-week evaluation available); R packages (ggplot2, lixoftConnectors) are freely available from CRAN. The code is provided as-is without warranty, and the authors recommend studying the Setup.R file before application.

---

## 📊 Key Findings
The formalized exposure-matching algorithm produces dosing tables that differ meaningfully by strategy and, to a lesser extent, by exposure metric. In the warfarin case study, optimal doses for a 10 kg child ranged from 2.0 mg (Cmax-based) to 2.4 mg (Ctrough-based), while for 50 kg they ranged from 7.2 to 7.6 mg. The conservative strategy systematically yields sub-reference exposures (e.g., ~40% below target at 20 kg), whereas the progressive strategy can produce near-doubling of exposure at low body weights (10 kg) when the available dose grid is coarse. Best-fit strategy aligns prediction intervals of pediatric exposure with the adult reference most closely. Interindividual variability assessment revealed that dose-boundary effects dominate variability-driven deviations, particularly at low body weights, suggesting the need for additional dose strengths (e.g., 1 mg) in practice. The authors emphasize that the warfarin results are illustrative only and not a clinical dosing recommendation.

---

### Strengths & Limitations

#### Strengths
- Formalizes a previously heuristic process into an explicit, reproducible algorithm with clearly defined optimization strategies
- Systematic comparison of three dose-selection strategies (best-fit, conservative, progressive) across three exposure metrics (Cmax, Ctrough, AUC)
- Incorporates interindividual PK variability through simulation-based prediction intervals, enabling quantitative risk assessment of over- and under-dosing
- Provides complete, reproducible R/Monolix implementation with configuration-file-driven setup for application to other compounds
- Transparent visualization framework (Figures 3–7) supporting clinical team review and post-hoc refinement
- Addresses practical constraints (available dose strengths, body-weight categories) that are often ignored in theoretical expositions

#### Limitations (Acknowledged by Authors)
- Central assumption of similar exposure-response relationship in adults and children must be justified by the sponsor
- Body size as sole covariate presumes maturation of clearance and other age-related PK changes are complete or negligible
- Warfarin results are illustrative only and not intended as a clinical dosing recommendation
- Over- and under-dosing at dose-interval boundaries cannot be avoided and require manual fine-tuning
- The method requires an adult popPK model with a body size descriptor; if absent, allometric coefficients must be added

#### Limitations (Expert Review)
- Validation is limited to a single case study (warfarin); no assessment of performance across diverse PK characteristics (e.g., nonlinear elimination, long half-lives, active metabolites)
- No formal statistical criterion for selecting among strategies or exposure metrics; choice remains subjective and context-dependent
- The fine-grid simulation approach is computationally intensive (6.6 million simulated subjects), which may limit routine application without adequate infrastructure
- No sensitivity analysis on grid resolution (body weight increments, dose increments) or on the choice of reference adult (75 kg, 10 mg)
- Prediction intervals are simulation-based rather than analytically derived; coverage properties are not formally evaluated
- The method does not address uncertainty in the adult model parameters themselves (only interindividual variability), potentially underestimating total uncertainty in dose recommendations
- Age is not directly incorporated; linking age to body weight via growth charts is suggested but not implemented in the algorithm

#### Generalizability
The framework is broadly generalizable to any drug with an adult population PK model containing a body size covariate, and the authors note the algorithm can accommodate other size descriptors (BSA, BMI, lean body weight). However, generalizability is constrained by the maturation assumption — for neonates and infants where maturation is incomplete, the method requires extension with maturation functions or PBPK modeling. The strategy definitions (best-fit, conservative, progressive) are drug-agnostic and could be adapted to other clinical contexts, but the choice of exposure metric and acceptable deviation thresholds remains drug- and indication-specific. The warfarin case study, with its relatively simple linear PK, does not demonstrate performance for drugs with more complex disposition.[^fc-28]

---

### Key Equations

**Allometric scaling for clearance**

{% raw %}
$$
CL_i = CL_{ref} \times \left(\frac{WT_i}{WT_{ref}}\right)^{0.75}
$$
{% endraw %}

Scales drug clearance from a reference adult to a pediatric subject based on body weight, using the standard allometric exponent of 0.75 for drug flows.

**Allometric scaling for volumes of distribution**

{% raw %}
$$
V_i = V_{ref} \times \left(\frac{WT_i}{WT_{ref}}\right)^{1.0}
$$
{% endraw %}

Scales volumes of distribution with body weight using an allometric exponent of 1.0, as applied to the warfarin two-compartment model in the case study.

**Exposure difference minimization for optimal dose**

{% raw %}
$$
d^*(w) = \arg\min_{d \in \mathcal{G}_d} \left| E(w, d) - E_{ref} \right|
$$
{% endraw %}

Defines the optimal dose for a given body weight as the dose on the fine grid minimizing the absolute difference between predicted exposure and the reference adult exposure.

---

### Figures & Tables

- **Figure 1**: Illustration of the dosing table derivation process, showing how optimal doses are assigned to body weight categories with available dose strengths.
  - *Significance*: Clarifies the practical step of converting continuous optimal doses into a step-function dosing table with feasible dose strengths.
- **Figure 2**: Flowchart of the complete algorithm, from fine-grid dose optimization through feasible dose selection to interindividual variability assessment.
  - *Significance*: Provides the overall methodological roadmap and is the key reference for implementing the framework.
- **Figure 3**: Optimal doses (fine grid) versus body weight for the three exposure metrics (Ctrough, Cmax, AUC) in the warfarin case study.
  - *Significance*: Demonstrates that exposure-metric choice has modest impact on optimal doses, with differences largest at low body weights.
- **Figure 4**: Feasible optimal doses (step functions) versus body weight for each combination of exposure metric and dose-selection strategy.
  - *Significance*: Shows that strategy choice (conservative vs progressive) induces larger dose differences than exposure-metric choice, with pronounced step shifts.
- **Figure 5**: Deviations from reference exposure across body weights for each strategy and exposure metric.
  - *Significance*: Quantifies the exposure mismatch at dose-boundary regions, highlighting that progressive strategy can nearly double exposure at 10 kg while conservative strategy yields ~40% under-exposure at 20 kg.
- **Figure 6**: Prediction intervals (90%) of exposure versus body weight compared to the reference adult prediction interval, for each strategy and metric.
  - *Significance*: Enables risk assessment of over- and under-dosing under interindividual variability; shows best-fit aligns with adult reference while conservative/progressive shift the distribution.
- **Figure 7**: Prediction intervals of optimal doses versus body weight, showing the effect of PK variability on dose selection.
  - *Significance*: Identifies body-weight regions where variability causes the largest deviations from the reference, supporting decisions on additional dose strengths.
- **Table 1**: Formal definitions of the three dose-selection strategies (best-fit, conservative, progressive).
  - *Significance*: Provides the mathematical formalization of strategy selection, a core methodological contribution.
- **Table 2**: Parameter estimates for the warfarin two-compartment population PK model.
  - *Significance*: Documents the model used in the case study, enabling reproduction of results.
- **Table 3**: Optimum dosing tables for each combination of exposure metric and dose-selection strategy.
  - *Significance*: The primary practical output of the algorithm — directly usable dosing recommendations for the warfarin illustration.

---

### Code & Reproducibility Assessment
Excellent — the paper provides complete R code, Monolix/Simulx project files, and the warfarin dataset as supplementary material. The implementation is configuration-file-driven (Setup.R), allowing adaptation to other compounds by modifying model specifications and grid parameters. The authors note the code is provided 'as-is' with no warranty. The use of lixoftConnectors for R-Monolix integration is documented, and the simulation design (identical random effects across body weights) ensures consistency between simulations. The warfarin dataset is made available for download, supporting full reproduction of all figures and tables.

---

### Supplementary Materials
Supplementary material (docx, 705 KB) contains the complete R code, Monolix/Simulx project files, the warfarin dataset, and additional results including model goodness-of-fit comparisons (Figure S1, Tables S1–S2), steady-state attainment assessment (Figure S2), and strategy comparison figures (Figure S3). The code is organized with a configuration file (Setup.R) for adaptation to other compounds. Output data files (e.g., data-sim-fractions-below-ref-quants.txt) are included for detailed numerical results.

---

### Future Directions
Natural extensions include: (1) incorporation of parameter uncertainty (from the adult model estimation) alongside interindividual variability to provide a more complete uncertainty quantification; (2) formal sensitivity analysis on grid resolution, reference subject definition, and dose-strength availability; (3) extension to maturation-inclusive models (age-dependent clearance) for neonatal and infant populations; (4) application to drugs with nonlinear PK or active metabolites where exposure matching is more complex; (5) development of formal decision criteria for strategy selection based on therapeutic index and disease severity; (6) integration with PBPK approaches for populations where allometric scaling is insufficient; and (7) prospective evaluation of the framework's predictive performance once pediatric data become available.

---

### Expert Commentary
This tutorial addresses a genuine operational gap in model-informed pediatric drug development. The formalization of dose-selection strategies is a valuable contribution — the distinction between best-fit, conservative, and progressive approaches provides clinical teams with an explicit, defensible basis for dose selection that aligns with the risk tolerance of the indication. The simulation-based prediction interval approach for assessing interindividual variability is methodologically sound, though the authors correctly stop short of proposing formal optimization criteria based on variability quantiles (e.g., 90th percentile targeting), which would be a natural next step. The warfarin case study is well-chosen for reproducibility given the public dataset, but the field would benefit from validation across a broader range of PK profiles. The computational cost (6.6M simulations) is manageable with modern infrastructure but may be a barrier for smaller teams; a more efficient approach using analytical or quasi-Monte Carlo methods could be explored. Overall, this paper should become a standard reference for pediatric dose derivation workflows.

---

### Bottom Line
This paper provides a practical, reproducible algorithm for pediatric dose derivation via exposure matching, filling a methodological gap in model-informed pediatric drug development. The key contribution is the formalization of dose-selection strategies (best-fit, conservative, progressive) and the integration of interindividual variability into dose optimization. Practitioners should adopt this framework to replace ad-hoc visual inspection, but must carefully justify the exposure-response similarity assumption, select the strategy based on the clinical context (safety-first vs efficacy-first), and be aware that dose-boundary effects at low body weights may necessitate additional dose strengths. The provided R/Monolix code enables immediate application to other compounds with minimal adaptation.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The framework does not formally incorporate parameter estimation uncertainty (standard errors of fixed effects).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “The framework does not formally incorporate model misspecification.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “The grid-based optimization is deterministic and converges trivially.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “The simulation-based prediction intervals converge with the number of simulated subjects (100 per body weight in the case study).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “The authors do not report Monte Carlo error.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “The method's sensitivity to grid resolution is not formally assessed.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “The method's sensitivity to reference subject definition is not formally assessed.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “The method is validated through a single case study using the publicly available warfarin dataset (O'Reilly & Aggeler, 1963/1968).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “Validation of the dosing recommendations was performed via simulation of 6.6 million subjects (100 per body weight × dose combination).” → correction: “With fixed body weights of 10, 11, 12, …, 75 kg, doses of 1, 2, 3, …, 100 mg, and 100 simulated subjects per body weight, the total number of simulated subjects is 6,600,000.”
[^fc-10]: **UNSUPPORTED** — original: “No external validation against observed pediatric data was possible.” → correction: “Once pediatric data become available, the model parameters can be re-estimated, the optimization be rerun, and doses adjusted.”
[^fc-11]: **UNSUPPORTED** — original: “No benchmark comparison against alternative methods (e.g., PBPK, heuristic mg/kg scaling) was performed.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “The method is applicable when the drug's PK is adequately described by the model across the body weight range of interest.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **CONTRADICTED** — original: “The method is NOT appropriate when the adult model lacks a body size descriptor and cannot be extended.” → correction: “If the adult model does not include a body size descriptor, e.g., in situations where covariate analysis was not conducted, it can still be added to the model using allometric scaling...”
[^fc-14]: **CONTRADICTED** — original: “The method is NOT appropriate when pediatric formulations differ substantially in absorption characteristics from adult formulations.” → correction: “If pediatric formulations differ from adult formulations, e.g., oral solutions, suspensions, or compounded preparations for children, the dose optimization step may be carried out by adding the absorption model for the pediatric formulation...”
[^fc-15]: **UNSUPPORTED** — original: “The method is NOT appropriate when multiple covariates beyond body size are needed, which would create complex response surfaces and impractical dosing tables.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “Pediatric dose-finding studies are resource-intensive and ethically constrained.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **UNSUPPORTED** — original: “PBPK modeling requires extensive physiological data and is more complex to implement.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-18]: **UNSUPPORTED** — original: “The algorithm provides a principled basis for the mg/kg dosing rather than an arbitrary constant.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-19]: **UNSUPPORTED** — original: “The fine grid should be chosen to balance resolution and computational cost.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-20]: **CONTRADICTED** — original: “The case study used 2.5 kg and 0.2 mg increments with 100 simulated subjects per body weight, totaling 6.6M simulations.” → correction: “With fixed body weights of 10, 11, 12, …, 75 kg, doses of 1, 2, 3, …, 100 mg, and 100 simulated subjects per body weight, the total number of simulated subjects is 6,600,000.”
[^fc-21]: **UNSUPPORTED** — original: “The choice of reference adult (body weight and dose) should reflect the clinically relevant adult regimen.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-22]: **UNSUPPORTED** — original: “There is no assessment of performance across diverse PK characteristics (e.g., nonlinear elimination, long half-lives, active metabolites).” → correction: “No direct evidence in source text.”
[^fc-23]: **UNSUPPORTED** — original: “There is no sensitivity analysis on grid resolution (body weight increments, dose increments).” → correction: “No direct evidence in source text.”
[^fc-24]: **UNSUPPORTED** — original: “There is no sensitivity analysis on the choice of reference adult (75 kg, 10 mg).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-25]: **UNSUPPORTED** — original: “Coverage properties of the prediction intervals are not formally evaluated.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-26]: **UNSUPPORTED** — original: “The method does not address uncertainty in the adult model parameters themselves (only interindividual variability).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-27]: **UNSUPPORTED** — original: “The method potentially underestimates total uncertainty in dose recommendations.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-28]: **UNSUPPORTED** — original: “The warfarin case study, with its relatively simple linear PK, does not demonstrate performance for drugs with more complex disposition.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-29]: **CONTRADICTED** — original: “Figure 7 shows prediction intervals of optimal doses versus body weight, showing the effect of PK variability on dose selection.” → correction: “Variability assessments, over- and under-exposure, are based on comparing prediction intervals for pediatric patients (below the reference body weight of 75 kg) to the prediction interval of the reference adult with 75 kg (Fig. 7).”
[^fc-30]: **UNSUPPORTED** — original: “Natural extensions include incorporation of parameter uncertainty (from the adult model estimation) alongside interindividual variability.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-31]: **UNSUPPORTED** — original: “Natural extensions include formal sensitivity analysis on grid resolution, reference subject definition, and dose-strength availability.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-32]: **UNSUPPORTED** — original: “Natural extensions include application to drugs with nonlinear PK or active metabolites where exposure matching is more complex.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-33]: **UNSUPPORTED** — original: “Natural extensions include development of formal decision criteria for strategy selection based on therapeutic index and disease severity.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-34]: **UNSUPPORTED** — original: “The field would benefit from validation across a broader range of PK profiles.” → correction: “No evidence in source text.”
[^fc-35]: **UNSUPPORTED** — original: “The computational cost (6.6M simulations) is manageable with modern infrastructure but may be a barrier for smaller teams.” → correction: “No evidence in source text.”
[^fc-36]: **UNSUPPORTED** — original: “A more efficient approach using analytical or quasi-Monte Carlo methods could be explored.” → correction: “No evidence in source text.”
[^fc-37]: **UNSUPPORTED** — original: “This paper should become a standard reference for pediatric dose derivation workflows.” → correction: “No evidence in source text.”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-08-27-strategies-for-pediatric-dose-derivation-from-population-pharmacokinetic-models/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-08-27-strategies-for-pediatric-dose-derivation-from-population-pharmacokinetic-models/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-08-27-strategies-for-pediatric-dose-derivation-from-population-pharmacokinetic-models/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-08-27-strategies-for-pediatric-dose-derivation-from-population-pharmacokinetic-models/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-08-27-strategies-for-pediatric-dose-derivation-from-population-pharmacokinetic-models/figures/fig_05.png)

![Figure 6]({{ site.baseurl }}/assets/digests/2026-08-27-strategies-for-pediatric-dose-derivation-from-population-pharmacokinetic-models/figures/fig_06.png)

![Figure 7]({{ site.baseurl }}/assets/digests/2026-08-27-strategies-for-pediatric-dose-derivation-from-population-pharmacokinetic-models/figures/fig_07.png)