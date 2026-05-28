---
layout: post
title: "External Evaluation of Population Pharmacokinetic Models of Cabotegravir, During Its Oral and Intramuscular Administration in HIV-Infected Patients"
date: 2026-05-25
authors: "Renou Q, Benaboud S, Destere A, Néant N, Solas C, Gandia P, Grégoire M, Lagoutte-Renosi J, Lê MP, Lalanne S, Lemaitre F, Muret P, Parant F, Peytavin G, Bouchet S, Venisse N, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70180"
paper_type: popk
tags: [popk, qsp, covariate-analysis, regulatory]
excerpt_text: "This is the first rigorous external evaluation of two published population PK models for the long-acting injectable cabotegravir in a large, independent real-world cohort. While bias and precision metrics were acceptable for Han et al.'s model, neither model reliably predicted individual concentrations (accuracy within $20\\%$ error was $<70\\%$), precluding their use for model-informed precision dosing without further refinement. Clinical pharmacologists and HIV specialists involved in therapeutic drug monitoring should read this to understand current modeling limitations."
pdf_path: "/assets/digests/2026-05-25-external-evaluation-of-population-pharmacokinetic-models-of-cabotegravir-during/PMx_External_Evaluation_of_Population_Pharma_20260525.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This is the first rigorous external evaluation of two published population PK models for the long-acting injectable cabotegravir in a large, independent real-world cohort. While bias and precision metrics were acceptable for Han et al.'s model, neither model reliably predicted individual concentrations (accuracy within $20\%$ error was $<70\%$), precluding their use for model-informed precision dosing without further refinement. Clinical pharmacologists and HIV specialists involved in therapeutic drug monitoring should read this to understand current modeling limitations.

---

### Executive Summary
Renou and colleagues externally validated the two existing population pharmacokinetic (PopPK) models for cabotegravir—Han et al. (2022, clinical trial data) and Thoueille et al. (2024, real-world TDM data)—using a large, prospective, multicenter French cohort ($n=736$, $2192$ samples). Both models were implemented in MONOLIX with published parameter estimates and evaluated with prediction- and simulation-based diagnostics. Han's model demonstrated lower bias (MDPE $-4.4\%$ IPRED) and better NPDE distribution, but neither model achieved $\ge 70\%$ of individual predictions within $\pm 20\%$ error. Thoueille's model showed marked systemic underprediction, especially in women, non-smokers, and obese patients. The authors conclude that neither model is sufficiently reliable for MIPD, highlighting the critical gap between clinical trial and real-world model performance. This study underscores the necessity of incorporating richer real-world data and possibly covariate refinements (smoking, needle length) before deploying such models in routine TDM.

---

### Scientific Context & Motivation
Cabotegravir, combined with rilpivirine, is the first long-acting injectable regimen for HIV maintenance, marked by high inter-individual PK variability and flip-flop kinetics. Previous PopPK models identified sex, BMI, weight, smoking, and injection technique as significant covariates, but consensus on target troughs for efficacy and optimal TDM strategies is lacking. While Han's model had been applied in trial settings, no study had rigorously compared both available models against a large, independent, multicenter real-world cohort where clinical practice (e.g., needle length, split injections, sparse sampling) differs from trial protocols. This study fills the critical gap in external validation to support clinical implementation.

---

## ⚡ Methodological Snapshot
The authors conducted a rigorous external evaluation of two published PopPK models for cabotegravir using a prospective, multicenter, real-world cohort. Models were implemented in MONOLIX with fixed parameter estimates and no refitting. Predictive performance was assessed using a comprehensive suite of diagnostics: standard GOF plots, prediction-based metrics (MDPE, MDAPE, F20), simulation-based VPC with prediction-correction and NPDE, and stratified analyses by relevant covariates (weight, BMI, sex, smoking). Missing covariates were imputed using KNN, and BLQ data handled via M4 method. The analysis focused on IM concentrations but oral data were also evaluated.

---

## 🏗️ Structural Model Breakdown
Han et al. employed a two-compartment model with central ($V_c/F=5.27$ L) and peripheral ($V_p/F=2.43$ L) volumes, intercompartmental clearance ($Q=0.507$ L/h), and distinct first-order oral ($k_{a,oral}=1.41$ h$^{-1}$) and IM ($k_{a,LA}=0.000733$ h$^{-1}$) absorption with relative bioavailability $F=75.6\%$. Clearance ($CL/F=0.151$ L/h) was scaled allometrically by weight and affected by smoking. Thoueille et al. used a one-compartment model ($V_c/F=7.44$ L, $CL/F=0.201$ L/h, $k_{a,oral}=1.12$ h$^{-1}$, $k_{a,LA}=0.00102$ h$^{-1}$) with $F$ fixed at $100\%$. The difference in $k_{a,LA}$ (approximately $40\%$ higher in Thoueille) reflects the one-compartment assumption's steeper terminal slope. Han's two-compartment structure better captures distribution kinetics but requires richer data for estimation.

---

### Detailed Methodological Analysis

#### Modeling Approach
External evaluation only; no model building. Two published PopPK models were implemented: (1) Han et al. (2022): two-compartment with distinct first-order oral and IM absorption, first-order elimination, covariates on $k_{a,LA}$ (sex, BMI, split injection, needle length) and $CL$ (weight, smoking), combined error. (2) Thoueille et al. (2024): one-compartment with same absorption structure, covariates on $k_{a,LA}$ (sex, BMI) and $CL$ (weight), proportional error for oral, combined error for IM, and IOV on $CL$. Both models used published fixed and random effect estimates without modification.

#### Data Sources
ANRS0255 CARLAPOP French multicenter observational study (14 centers), 736 HIV-infected adults on CAB (296 oral and 1896 IM samples, median 3/patient, mostly trough). Baseline demographics: $79\%$ male, median age 46 years, $32\%$ overweight, $11\%$ obese. Concentrations measured by UPLC-MS/MS with varied LLOQs ($10$–$200$ ng/mL). Missing data: weight $2.4\%$, height $2.6\%$, smoking $12\%$. No split injections in this cohort.

#### Estimation Methods
Population predictions (PRED) used fixed typical values. Individual predictions (IPRED) obtained via maximum a posteriori (MAP) empirical Bayes estimation in MONOLIX 2024R1, using published population parameters as priors. BLQ handled as left-censored non-negative (M4 method). Occasion defined per injection. Missing covariates imputed by KNN ($k=5$) using DMwR2 in R.

#### Model Evaluation
GOF: observed vs. predicted, IWRES vs. time/IPRED. Prediction diagnostics: MDPE, MDAPE, MPE, RMSPE, RMSE, F20. Simulation diagnostics: pcVPC (500 simulated datasets), NPDE (global distribution statistics, histogram, QQ-plot). Stratified pcVPC by weight tertiles, BMI categories, sex, smoking status. Oral route analyzed separately.

#### Covariate Analysis
Covariate effects from published models were directly applied with no re-estimation. Han: sex ($-50.9\%$ $k_{a,LA}$ in women vs. men), BMI power function on $k_{a,LA}$, needle length ($+14.8\%$ $k_{a,LA}$ with 2-inch vs. 1.5-inch needle), weight on $CL/V$ (power allometric exponents $0.618$ and $1.0$), smoking ($+17.4\%$ $CL$). Thoueille: sex ($-40.5\%$ $k_{a,LA}$ in females), BMI linear decrease on $k_{a,LA}$, weight on $CL$ (power exponent $0.460$).

---

### Statistical Rigor Assessment
The evaluation design is robust, employing a prospective, independent dataset and multiple complementary metrics, which aligns with best practices for external validation. The use of NPDE alongside pcVPC provides a rigorous stochastic assessment of model misspecification. However, the reliance on MAP estimates without shrinkage assessment is notable; high shrinkage in IIV could inflate apparent IPRED performance. The KNN imputation of missing covariates, while pragmatic, assumes data missing at random and may introduce bias, particularly for smoking ($12\%$ missing). Sensitivity analyses around imputation method and BLQ handling were partially reported (BLQ removal), but more formal assessments (e.g., M6 method) would strengthen conclusions. Furthermore, the absence of predefined acceptability criteria and reliance on literature-derived thresholds, while transparent, makes the 'unfit for MIPD' conclusion somewhat consensus-dependent rather than statistically definitive.

---

## 📊 Key Findings
For Han et al.'s model, individual prediction MDPE was $-4.4\%$ and MDAPE $17.9\%$ for IM CAB, with acceptable global prediction distribution via pcVPC and NPDE, though only $54.9\%$ of predictions fell within $20\%$ error (F20). Thoueille's model showed substantial bias (IPRED MDPE $-9.2\%$) and systemic underprediction, notably in women, non-smokers, and higher BMI, with F20 of $68.4\%$. Both models relied heavily on individual random effects (Bayesian shrinkage) to achieve reasonable IPREDs, limiting their a priori predictive (PRED) capability. Removing BLQ values drastically improved parametric metrics (MPE, RMSPE), highlighting sensitivity to extreme errors. Neither model is deemed fit for MIPD without structural or covariate refinement.

---

## 💡 Clinical & Regulatory Implications
Neither model is recommended for MIPD in routine TDM of CAB in HIV patients, meaning that empiric dosing and current therapeutic monitoring of troughs remain the standard of care. The underprediction in women and non-smokers by Thoueille's model could lead to inappropriate dose reductions if used. However, Han's model may serve as a starting point for future development, given its better global prediction. Clinicians should be aware that covariates such as smoking and needle length (often undocumented in electronic health records) significantly impact CAB PK and should be systematically recorded. The study underscores the need for a new, optimized model incorporating richer real-world data before Bayesian forecasting tools are deployed in clinical practice.

---

### Strengths & Limitations

#### Strengths
- First comprehensive external head-to-head evaluation of both available CAB PopPK models in a large, multicenter, prospective real-world cohort.
- Used multiple complementary diagnostic methods: prediction- (MDPE, MDAPE, F20), simulation-based (pcVPC, NPDE), and graphical GOF analysis, providing robust performance assessment.
- Addressed real-world clinically relevant challenges: missing covariates (smoking, needle length), BLQ handling, and sparse sampling, enhancing pragmatic applicability.
- Transparent reporting of prediction errors distribution, including the impact of extreme BLQ values on parametric metrics, aiding interpretation for future model evaluations.

#### Limitations (Acknowledged by Authors)
- No consensus definition of clinically acceptable predictive metrics thresholds; the authors used plausible but arbitrary cutoffs (e.g., F20 $> 80\%$).
- Differences in structural models (one- vs. two-compartment) and covariate effects complicate direct comparison; Thoueille's model lacked smoking status and needle length predictors.
- Multicenter design introduces additional variability (e.g., LLOQs, injection practices) that could not be fully partitioned.
- Models were applied as published, without re-estimation, which might mask the benefit of refitting with Bayesian priors on the external data.

#### Limitations (Expert Review)
- The study does not explore a model averaging or model selection approach for individual patients, despite acknowledging that different models may fit different subgroups better.
- IOV on $k_{a,LA}$ was not evaluated in either model though flagged as potentially important; missing this component limits individual prediction accuracy in real-world settings.
- Only two models were evaluated; newer models (e.g., those incorporating gluteal vs. thigh administration, or with deeper covariate pharmacokinetic relationships) exist and could have been included.
- Performance assessment focused primarily on IM troughs; the utility for oral lead-in phase and early post-injection time points is less characterized.

#### Generalizability
The study population is large and multicenter, reflecting routine HIV care in France with predominantly white, male, and non-obese demographics. Generalizability to more diverse populations (e.g., higher prevalence of obesity, different ethnicities, or resource-limited settings where injection practices may differ) may be limited. Moreover, the exclusion of subjects with split injections and the high proportion of missing smoking data ($12\%$) could bias performance in settings where these covariates are more variable.

---

---

### Figures & Tables

- **Table 1**: Comparison of modeling characteristics between Han et al. (2022) and Thoueille et al. (2024) PopPK models, including population, structural model, covariates, and evaluation methods.
  - *Significance*: Highlights key differences (e.g., one- vs. two-compartment, covariate inclusion of smoking/needle length) that underpin performance discrepancies observed in the external evaluation.
- **Table 2**: Parameter estimates for fixed effects, IIV, IOV, and residual error models from both evaluated PopPK models.
  - *Significance*: Quantitatively contrasts model parameterization (e.g., higher $k_{a,LA}$ in Thoueille's model, larger IIV in Han's model) essential for interpreting predictive behavior.
- **Table 3**: Baseline demographics and clinical characteristics of the CARLAPOP validation cohort ($n=736$). Includes sex, age, BMI, smoking status, and HIV parameters.
  - *Significance*: Establishes the external evaluation dataset composition, enabling readers to assess comparability to model-building populations and identify potential covariate misalignment.
- **Table 4**: Predictive performance metrics (MDPE, MDAPE, MPE, RMSPE, RMSE, F20) for population and individual predictions from both models for IM CAB.
  - *Significance*: Core quantitative results demonstrating acceptable bias/precision but unacceptable individual prediction accuracy (low F20), directly supporting the conclusion that neither model is MIPD-ready.
- **Figure 1**: Observed vs. predicted (PRED and IPRED) concentration plots for both models, IM route.
  - *Significance*: Visually reveals systemic underprediction by Thoueille's model (especially at higher concentrations) and better agreement by Han's model, complementing the numerical metrics.
- **Figure 2**: Prediction-corrected VPC (A) and NPDE (B,C) for IM CAB predictions by both models.
  - *Significance*: Confirms that Han's model captures the global distribution acceptably (NPDE $\approx N(0,1)$), whereas Thoueille's shows a positive shift, indicating systematic underprediction.
- **Figure 3**: Stratified pcVPCs by weight, BMI, sex, and smoking status for both models.
  - *Significance*: Identifies subgroups where predictive performance degrades—particularly women and non-smokers for Thoueille's model—guiding future covariate inclusion and model refinement efforts.

---

### Future Directions
Develop an updated CAB model incorporating richer real-world datasets (e.g., CARLAPOP) with refitted covariate effects, potentially using nonlinear mixed-effects modeling with covariates like smoking, needle length, and split injections. Include inter-occasion variability on $k_{a,LA}$ to capture injection-to-injection absorption differences. Explore model averaging or machine-learning-based individualized model selection to improve prediction accuracy. Evaluate PK/PD relationships to define therapeutic trough targets for TDM. Design prospective utility studies assessing the clinical impact of MIPD using an improved model.

---

### Expert Commentary
This study reinforces a critical lesson in pharmacometrics: 'adequate' population metrics can mask poor individual predictions. The heavy reliance on post-hoc shrinkage in both models means that without rich individual data, a priori predictions are highly uncertain—a dealbreaker for MIPD. The underprediction by Thoueille's model in women and non-smokers, both predictors of lower clearance or absorption, underscores the danger of omitting clinically relevant covariates. As a senior reviewer, I would emphasize that the field must move beyond reporting MDPE/MDAPE alone; F20/F30 metrics and stochastic simulations (NPDE) should become standard. Furthermore, the handling of BLQ values—driving huge parametric errors—should be protocolized (e.g., M4 or M6 methods) and clearly reported. The call for a 'universal' CAB model may be unrealistic; instead, a 'meta-model' with covariate-dependent weighting could be the pragmatic path forward.

---

### Bottom Line
For practicing pharmacometricians, this external evaluation serves as a cautionary tale: reasonable global metrics (MDPE, MDAPE) do not guarantee individual predictive accuracy sufficient for MIPD (F20 $< 70\%$). Han's two-compartment model, despite being developed from clinical trial data, outperformed the real-world-derived one-compartment model, but both require covariate augmentation (smoking, injection technique) and possibly structural revision before bedside deployment. Continue using published POPPK models for exploratory simulations but do not rely on them for individual dose adjustment without rigorous local validation.

---

---

## 📊 Figures

![Observed versus predicted concentrations of the models for the intramuscular route. (A) Observations versus population predictions. (B) Observations versus indiv]({{ site.baseurl }}/assets/digests/2026-05-25-external-evaluation-of-population-pharmacokinetic-models-of-cabotegravir-during/figures/fig_01.jpg)

![Prediction-corrected visual predictive checks and normalized prediction distribution errors of the models for the intramuscular route. (A) Prediction-corrected v]({{ site.baseurl }}/assets/digests/2026-05-25-external-evaluation-of-population-pharmacokinetic-models-of-cabotegravir-during/figures/fig_02.jpg)

![Stratified prediction-corrected visual predictive checks of the models for the intramuscular route. Solid and dashed lines represent the 10th, 50th, and 90th per]({{ site.baseurl }}/assets/digests/2026-05-25-external-evaluation-of-population-pharmacokinetic-models-of-cabotegravir-during/figures/fig_03.jpg)