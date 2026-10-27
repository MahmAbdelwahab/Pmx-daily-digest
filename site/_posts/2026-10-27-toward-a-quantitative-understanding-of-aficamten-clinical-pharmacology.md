---
layout: post
title: "Toward a Quantitative Understanding of Aficamten Clinical Pharmacology: Population Pharmacokinetic Modeling."
date: 2026-10-27
authors: "Donghong Xu, Hanbin Li, Stephen B. Heitner, Daniel L. Jacoby, Stuart Kupfer, Polina German, Justin Lutz"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70099"
paper_type: popk
tags: [popk]
excerpt_text: "This pooled population PK analysis of aficamten combines 9,963 concentrations from 447 participants across nine clinical studies and supports a two-compartment model with first-order absorption and a lag time. It is useful to clinical pharmacologists and pharmacometricians evaluating dose titration in obstructive hypertrophic cardiomyopathy (oHCM): weight, sex, and disease status affected exposure statistically, but modeled demographic effects were generally modest and the authors concluded that demographic dose adjustment was not warranted."
pdf_path: "/assets/digests/2026-10-27-toward-a-quantitative-understanding-of-aficamten-clinical-pharmacology/PMx_Toward_a_Quantitative_Understanding_of_A_20261027.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This pooled population PK analysis of aficamten combines 9,963 concentrations from 447 participants across nine clinical studies and supports a two-compartment model with first-order absorption and a lag time. It is useful to clinical pharmacologists and pharmacometricians evaluating dose titration in obstructive hypertrophic cardiomyopathy (oHCM): weight, sex, and disease status affected exposure statistically, but modeled demographic effects were generally modest and the authors concluded that demographic dose adjustment was not warranted.

---

### Executive Summary
The authors developed a population PK model using data from healthy participants and patients with oHCM to characterize aficamten disposition and assess covariate effects. A two-compartment model with linear elimination and first-order absorption after a formulation-specific lag time described the data. Typical estimates for an 80-kg male participant with oHCM were $CL/F$ $2.62$ $L/h$, $Vc/F$ $18.1$ $L$, $Q/F$ $57.6$ $L/h$, and $Vp/F$ $295$ $L$. Body weight affected clearance and volumes; sex and population type affected clearance and peripheral volume. Simulations predicted higher exposure at lower body weight and in females, while healthy participants had approximately 23%–24% lower exposure than participants with oHCM. The model diagnostics and prediction-corrected visual predictive checks were reported as adequate. The analysis supports predictable exposure and provides a PK foundation for exposure-response work and dose-titration evaluation, while the clinical dosing approach remains guided by cardiac response and safety rather than demographic covariate-based dose adjustment.

---

### Scientific Context & Motivation
Aficamten is an oral cardiac myosin inhibitor being developed to reduce the hypercontractility underlying HCM. Prior studies indicated dose-proportional PK, once-daily dosing feasibility, and a shorter half-life than mavacamten, but pooled characterization across healthy volunteers and oHCM patients and evaluation of clinically relevant covariates were needed. This analysis addresses whether disease status, demographics, organ function, food, formulation, or concomitant medications materially alter aficamten exposure and supplies model-derived exposure metrics for subsequent exposure-safety and exposure-efficacy analyses. Findings are specific to the included studies and do not by themselves establish a dosing recommendation or prove absence of clinically important effects in populations with limited representation.

---

## ⚡ Methodological Snapshot
The analysis pooled 9,963 plasma concentrations from 447 participants in seven phase 1 studies, REDWOOD-HCM, and SEQUOIA-HCM. The structural model was developed from a two-compartment disposition model with linear elimination, first-order absorption, and a lag time; capsule and tablet lag times differed, and food effects on absorption were evaluated. Interindividual variability was estimated on $CL/F$, $Vc/F$, $Vp/F$, and $K_a$, with additive residual error on log-transformed concentrations.

Covariates were screened using univariate testing followed by backward elimination with likelihood-ratio criteria, with disease-related covariates and food/formulation evaluated at later stages. The final model was assessed using goodness-of-fit plots and a 500-replicate prediction-corrected visual predictive check. Post hoc individual parameter estimates were used to simulate steady-state exposure at $15$ mg once daily and at participants’ last titrated SEQUOIA-HCM doses.

---

## 🏗️ Structural Model Breakdown
The final model used two disposition compartments with oral first-order absorption after a lag time and linear elimination. Apparent parameters were $CL/F$, $Vc/F$, $Q/F$, and $Vp/F$, with absorption rate $K_a$ and lag time $T_{lag}$. Interindividual variability was estimated on $CL/F$, $Vc/F$, $Vp/F$, and $K_a$; residual error was additive on log-transformed concentration. Covariates included body weight on clearance and volumes, population type and sex on $CL/F$ and $Vp/F$, capsule versus tablet formulation on $T_{lag}$, and food effects on relative bioavailability ($F_1$), $T_{lag}$, and $K_a$. Typical estimates for an 80-kg male participant with oHCM were $CL/F$ $2.62$ $L/h$, $Vc/F$ $18.1$ $L$, $Q/F$ $57.6$ $L/h$, and $Vp/F$ $295$ $L$. The paper’s extracted equations section contained no equations, so the structural equations are not reproduced here.

---

### Detailed Methodological Analysis

#### Modeling Approach
NONMEM population PK analysis. The final structural model was a two-compartment model with linear elimination and first-order absorption after a lag time. Parameters were $CL/F$, $Vc/F$, $Q/F$, $Vp/F$, $K_a$, and $T_{lag}$. IIV was modeled on $CL/F$, $Vc/F$, $Vp/F$, and $K_a$; residual variability was additive on natural log-transformed concentrations. Separate absorption lag times were estimated for capsule and tablet formulations. NONMEM 7.5.0 and PsN 5.0.0 or later were used; exploratory and post-modeling work used R 4.3.0.

#### Data Sources
Data comprised 9,963 PK samples from 447 participants: 264 healthy participants from seven phase 1 studies, 41 participants with oHCM from REDWOOD-HCM, and 142 participants with oHCM from SEQUOIA-HCM. Dosing included single oral doses of $1$–$75$ mg and multiple once-daily doses of $5$–$30$ mg, in capsule or tablet form. Phase 1 sampling was intensive, while phase 2 and phase 3 sampling was sparse. Concentrations below the $1$ ng/mL LLOQ and missing concentrations were excluded; actual dose and sample times were used.

#### Estimation Methods
Model parameters were estimated in NONMEM; the supplied text does not specify the estimation algorithm. Fixed-effect precision was reported as relative standard error from the covariance step. Covariates were screened univariately at $p < 0.01$ and then evaluated by backward elimination using a more stringent $p < 0.001$ criterion. Missing continuous covariates were imputed to the observed mean and missing categorical covariates were treated as a separate category.

#### Model Evaluation
Standard diagnostics included observed concentrations versus individual and population predictions, conditional weighted residuals versus predictions and time/time after dose, and residual smooths. The final model was evaluated by a prediction-corrected visual predictive check using 500 simulated replicates. The authors report adequate fit and capture of the central tendency and range across the phase 1, phase 2, and phase 3 data. Bootstrap, cross-validation, and external validation are not described in the supplied text.

#### Covariate Analysis
Baseline covariates were eligible for formal assessment if available for at least 80% of participants; categorical covariates also required at least 10 participants per category. Highly correlated covariates (correlation $> 0.7$) were not jointly considered, and continuous covariates were preferred. Body weight was modeled on clearance and volumes; population type and sex were assessed on clearance and peripheral volume. Disease-related covariates and concomitant medications were assessed after demographic and population effects; formulation and food were assessed after demographic covariates. The final model retained body weight, population, sex, formulation on $T_{lag}$, and food effects on relative bioavailability, $T_{lag}$, and $K_a$.

---

### Statistical Rigor Assessment
The dataset was substantial for a pooled clinical PopPK analysis, though the patient subgroup was smaller than the healthy-volunteer group and had sparse sampling. Fixed-effect estimates were reported as precise (RSE no greater than $12.6\%$ for the principal parameters); $CL/F$ shrinkage was $6.9\%$, with $Vc/F$ and $Vp/F$ shrinkage of $22.6\%$ and $28.7\%$. The authors report acceptable goodness-of-fit and pcVPC results. Covariate screening and backward elimination thresholds were stated, and correlation and data-availability rules were applied. Important qualifications are the exclusion of below-LLOQ observations, imputation of missing covariates, and lack of reported bootstrap or external validation in the supplied text. The very high estimated IIV in $Vc/F$ also warrants cautious interpretation despite the authors’ explanation and reported diagnostics.

---

## 📊 Key Findings
A two-compartment model with linear elimination and first-order absorption following a lag time best described aficamten concentrations. For a typical male participant with oHCM weighing $80$ kg, estimates were $CL/F$ $2.62$ $L/h$, $Vc/F$ $18.1$ $L$, $Q/F$ $57.6$ $L/h$, and $Vp/F$ $295$ $L$; $K_a$ was $0.337$ and tablet/capsule lag times were $0.229$/$0.248$ h. IIV in $CL/F$ was $28.7\%CV$ and overall log-additive residual error was $20.3\%CV$. Body weight was retained on clearance and volumes; population type and sex were retained on $CL/F$ and $Vp/F$. A 56-kg male with oHCM was predicted to have $23.0\%$ higher $AUC_{tau}$ than an 80-kg male, while a 114-kg male had $18.7\%$ lower $AUC_{tau}$; a female of the same weight as a male was predicted to have $14.7\%$ higher $AUC_{tau}$. Healthy participants had $23\%$–$24\%$ lower $AUC_{tau}$, $C_{max}$, and $C_{tau}$ than participants with oHCM. Median terminal half-life and estimated time to steady state in oHCM were $79.9$ h and $16.6$ days; $95\%$ were estimated to have a half-life no greater than $155$ h and reach steady state by Day $33$ under fixed daily dosing. Age, race, albumin, AST, creatinine clearance, the evaluated disease markers, and the listed concomitant medications were not retained as significant covariates under the reported selection approach. Food had statistically significant effects on relative bioavailability, lag time, and absorption rate, but the authors reported no-to-minimal impact on steady-state exposure in the covariate simulations.

---

## 💡 Clinical & Regulatory Implications
Aficamten showed an approximately 80-hour median terminal half-life in participants with oHCM, with median modeled time to steady state of about 16.6 days, consistent with once-daily dosing and titration intervals on the order of weeks. Lower body weight and female sex were associated with modestly higher modeled exposure, while healthy participants had modestly lower exposure than participants with oHCM. The authors concluded that these demographic effects were not expected to be clinically meaningful given response-guided titration and did not support demographic dose adjustments. The model supports exposure-response analyses and dose-regimen evaluation, but it is not itself a clinical dosing guideline; cardiac response and safety monitoring remain central.

---

### Strengths & Limitations

#### Strengths
- Pooled data from nine studies and 447 participants, including 183 participants with oHCM, with 9,963 measured concentrations.
- Integrated intensive phase 1 sampling with sparser phase 2 and phase 3 data, supporting characterization across healthy volunteers and the target patient population.
- Used actual dose and sampling times, a validated concentration assay, prespecified covariate eligibility considerations, and a stepwise likelihood-ratio-based covariate procedure.
- Reported parameter precision, IIV, residual variability, and shrinkage, and assessed fit using standard diagnostics and a 500-replicate pcVPC.
- Evaluated the modeled exposure consequences of covariates at steady state and related them to the practical context of individualized dose titration.

#### Limitations (Acknowledged by Authors)
- The authors note that the apparently high IIV estimate for $Vc/F$ ($308\%CV$) may reflect the relatively flat steady-state PK profile rather than a model deficiency.
- A transit absorption model was not evaluated because the selected model was considered adequate.
- The analysis included sparse PK sampling in phase 2 and phase 3 compared with intensive sampling in phase 1.

#### Limitations (Expert Review)
- The supplied report does not describe external validation, bootstrap assessment, or cross-validation; the reported evaluation is primarily goodness-of-fit diagnostics and pcVPC.
- Excluding concentrations below the LLOQ and samples with missing concentrations may affect information at low concentrations or late time points.
- Several covariates were imputed using mean values or a separate missing category, which may understate uncertainty if missingness was informative.
- The oHCM population was smaller than the healthy-volunteer population, and subgroup representation may limit precision for less common clinical characteristics.
- The covariate effects are model-based associations; the study does not independently establish a causal mechanism for sex- or disease-status-related differences.
- The reported long right tail in total volume and half-life deserves attention when considering unusually prolonged accumulation or washout in individual patients.

#### Generalizability
The model is supported by pooled phase 1–3 data and includes patients with oHCM, making it more relevant to the intended population than a healthy-volunteer-only analysis. Generalizability is strongest for participants and dosing conditions represented in the source studies. Extrapolation to severe organ dysfunction, underrepresented demographic groups, other clinical settings, or regimens outside the studied dose range should be cautious.

---

---

### Figures & Tables

- **Figure 1**: Goodness-of-fit plots for the final population PK model, including observed concentrations versus individual and population predictions and conditional weighted residual diagnostics.
  - *Significance*: Supports the authors’ assessment that predictions agree with observations and that residuals show no major systematic trends across predicted concentrations or time.
- **Figure 2**: Prediction-corrected visual predictive checks for the final model across the observed time course.
  - *Significance*: Shows whether simulated concentration distributions reproduce the central tendency and variability of the observed data across studies.
- **Figure 3**: Distributions of $CL/F$, total volume, and terminal half-life in healthy participants and participants with oHCM.
  - *Significance*: Illustrates population distributions and the right tail in total volume associated with prolonged half-life in a small subset of participants.
- **Figure 4**: Model-predicted isolated covariate effects on steady-state $AUC_{tau}$, $C_{max}$, and $C_{tau}$ in participants with oHCM.
  - *Significance*: Places the estimated effects of weight and sex on exposure in a clinically interpretable range and supports the conclusion that modeled effects were generally below $25\%$.
- **Table 1**: Final population PK parameter and covariate estimates, including parameter precision, IIV, residual variability, and shrinkage.
  - *Significance*: Provides the quantitative model specification and key uncertainty and variability estimates used to interpret the model.
- **Table 2**: Simulated steady-state exposure, half-life, and time-to-steady-state comparisons between healthy participants and participants with oHCM after $15$ mg once-daily dosing.
  - *Significance*: Quantifies disease-status differences in exposure and documents similar half-life and accumulation timing between the two populations.
- **Table 3**: Simulated exposure summaries by last titrated dose in the SEQUOIA-HCM oHCM population, including body weight and sex distributions.
  - *Significance*: Connects model-based $AUC_{tau}$, $C_{max}$, and $C_{tau}$ predictions to the dose groups used in the pivotal phase 3 study.
- **Table S1**: Referenced in the article as a summary of the contributing studies and PK sampling; the table contents were not supplied in the extracted text.
  - *Significance*: Would provide study-level context for the pooled population and sampling designs, but cannot be independently reviewed from the material provided.
- **Table S2**: Referenced as the list of screening covariates; the table contents were not supplied in the extracted text.
  - *Significance*: Would define the full covariate screening scope, which is important for interpreting claims about covariates not retained.
- **Table S3**: Referenced as presenting participant counts from the contributing clinical studies; detailed contents were not supplied in the extracted text.
  - *Significance*: Would clarify study-level contribution to the analysis dataset and the balance of data across studies.
- **Table S4**: Referenced as presenting base population PK model parameter estimates; detailed contents were not supplied in the extracted text.
  - *Significance*: Would allow comparison of the base structural model with the final covariate model.
- **Table S5**: Referenced as summarizing evaluated covariates in healthy participants and participants with oHCM; detailed contents were not supplied in the extracted text.
  - *Significance*: Would help assess covariate distributions, missingness, and representation across the analysis populations.

---

### Code & Reproducibility Assessment
The article states that model code is provided in the Supporting Information and identifies NONMEM 7.5.0, PsN 5.0.0 or later, and R 4.3.0 as analysis tools. No individual-level data availability is described in the supplied text; therefore, independent reproduction of the full analysis may depend on access to the underlying data and supplementary materials.

---

### Supplementary Materials
The article states that model code is provided in Supporting Information. Supplementary tables and figures are referenced in the supplied main text (including Tables S1–S5 and Figures S1–S6), but their contents were not included in the extracted material, so their detailed methods and results cannot be summarized here.

---

### Future Directions
Evaluate the model prospectively against additional patient data and report parameter uncertainty through methods such as bootstrap or external validation. Link individual exposure estimates to efficacy and safety outcomes, including LVEF and dose-titration decisions, to quantify exposure-response relationships and assess whether any subgroups need tailored monitoring. Further characterize the long tail of total volume and half-life, and assess applicability in populations not well represented in the current dataset or under clinically relevant drug-interaction and organ-impairment conditions.

---

### Expert Commentary
This is a clinically oriented PopPK analysis that appropriately places covariate significance in the context of exposure magnitude and the study’s response-guided titration strategy. The close-to-allometric body-weight exponents are biologically plausible, but should not be treated as evidence that the full structural model or covariate relationships are externally validated. The high $Vc/F$ IIV estimate, despite acceptable diagnostics and moderate shrinkage, is a reminder that parameters can be weakly identified when concentration-time profiles are relatively flat; interpretation should emphasize exposure-relevant clearance and predictive performance. The healthy-versus-oHCM difference is modest compared with the comparator cited by the authors, but it remains a population association and should be considered alongside the limited patient sample and study design. Practitioners should distinguish statistical covariate retention from clinically actionable dose adjustment.

---

### Bottom Line
The analysis supports a predictable, two-compartment PK profile for aficamten, with an approximately 80-hour median terminal half-life in oHCM and modest modeled exposure effects from weight and sex. These findings support once-daily dosing and provide a quantitative foundation for exposure-response analyses, but the model does not replace clinical monitoring or establish a standalone dosing algorithm. In the studied setting, dose adjustment was individualized according to cardiac response and safety, and the authors concluded that demographic covariates did not warrant separate dose adjustments.

---

---

## 📊 Figures

![Goodness-of-fit plots for final population PK model. CWRES, conditional weighted residuals; PK, pharmacokinetics. Solid gray line is line of unity. Red dashed line is a l]({{ site.baseurl }}/assets/digests/2026-10-27-toward-a-quantitative-understanding-of-aficamten-clinical-pharmacology/figures/fig_01.jpg)

![pcVPC versus time for final population PK model. CI, confidence interval; pcVPC, prediction-corrected visual predictive check; PK, pharmacokinetics.]({{ site.baseurl }}/assets/digests/2026-10-27-toward-a-quantitative-understanding-of-aficamten-clinical-pharmacology/figures/fig_02.jpg)

![Distribution of aficamten PK parameters in healthy participants (Top panels;N= 264) and participants with oHCM (Bottom panels;N= 183). CL/F, apparent total clearance;N, n]({{ site.baseurl }}/assets/digests/2026-10-27-toward-a-quantitative-understanding-of-aficamten-clinical-pharmacology/figures/fig_03.jpg)

![Population PK-predicted isolated impact of covariates on steady-state aficamten plasma exposures in participants with oHCM. AUCtau, area under the concentration-time curv]({{ site.baseurl }}/assets/digests/2026-10-27-toward-a-quantitative-understanding-of-aficamten-clinical-pharmacology/figures/fig_04.jpg)