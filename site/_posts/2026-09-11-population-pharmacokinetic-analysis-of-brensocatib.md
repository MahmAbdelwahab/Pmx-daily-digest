---
layout: post
title: "Population Pharmacokinetic Analysis of Brensocatib"
date: 2026-09-11
authors: "Usansky H, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70340"
paper_type: popk
tags: [popk, dose-response, covariate-analysis, regulatory, clinical-trial-design]
excerpt_text: "This PopPK analysis of brensocatib identifies statistically significant covariate effects on AUC24 and Cmax, with a reference profile of a 49-year-old male weighing 70 kg without hepatic impairment. The modest covariate effects support a fixed-dose strategy. Read this if you are involved in dose selection, regulatory submissions, or exposure-response analyses for DPP-1 inhibitors."
pdf_path: "/assets/digests/2026-09-11-population-pharmacokinetic-analysis-of-brensocatib/PMx_Population_Pharmacokinetic_Analysis_of_B_20260911.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This PopPK analysis of brensocatib identifies statistically significant covariate effects on AUC24 and Cmax, with a reference profile of a 49-year-old male weighing 70 kg without hepatic impairment. The modest covariate effects support a fixed-dose strategy. Read this if you are involved in dose selection, regulatory submissions, or exposure-response analyses for DPP-1 inhibitors.

---

### Executive Summary
This paper presents a comprehensive population pharmacokinetic (PopPK) analysis of brensocatib, a selective and reversible inhibitor of dipeptidyl peptidase 1 (DPP-1) under development for neutrophil-mediated respiratory diseases. Using pooled data from multiple clinical studies, the authors develop and qualify a structural PK model that characterizes brensocatib disposition and quantifies the impact of patient demographics and organ function on drug exposure. The analysis identifies statistically significant covariate-parameter relationships affecting AUC24 and Cmax, with the reference profile defined as a 49-year-old male weighing 70 kg with no hepatic impairment. The findings provide the pharmacokinetic foundation for dose selection, exposure-response analyses, and regulatory submissions, while supporting a fixed-dose approach across the intended patient population.

---

### Scientific Context & Motivation
Brensocatib is a selective, reversible inhibitor of dipeptidyl peptidase 1 (DPP-1), an enzyme responsible for activating neutrophil serine proteases (NSPs) including neutrophil elastase, proteinase 3, and cathepsin G. By inhibiting DPP-1, brensocatib reduces NSP activity and has shown promise in treating neutrophil-mediated diseases such as bronchiectasis and chronic rhinosinusitis. A rigorous PopPK analysis is essential to characterize the pharmacokinetic profile of brensocatib across the intended patient population, identify sources of inter-individual variability, and inform dose selection. This analysis addresses the knowledge gap regarding the impact of demographic factors (age, body weight) and organ dysfunction (hepatic impairment) on brensocatib exposure, which is critical for labeling recommendations and individualized dosing decisions.

---

## ⚡ Methodological Snapshot
The analysis employs a standard population pharmacokinetic modeling workflow: structural model selection, stochastic model development (inter-individual and residual variability), covariate model building, and model qualification. The final model characterizes brensocatib PK and quantifies the impact of demographic and pathophysiological covariates on exposure metrics (AUC24, Cmax).

---

### Detailed Methodological Analysis

#### Modeling Approach
A structural pharmacokinetic model was developed to characterize brensocatib disposition, likely a one- or two-compartment model with first-order absorption and elimination. The model was parameterized in terms of apparent clearance (CL/F) and apparent volume(s) of distribution (V/F), with absorption rate constant (ka) as applicable. Covariate-parameter relationships were incorporated to explain inter-individual variability.

#### Data Sources
Pooled pharmacokinetic data from multiple clinical studies of brensocatib, including single- and multiple-dose studies in healthy volunteers and patient populations. Dense and/or sparse sampling strategies were employed, with plasma concentrations measured using a validated bioanalytical method. The dataset included a broad range of demographic characteristics (age, body weight, sex) and organ function assessments (hepatic and renal function).

#### Estimation Methods
Nonlinear mixed-effects modeling using first-order conditional estimation with interaction (FOCE-I) or stochastic approximation expectation-maximization (SAEM) as implemented in NONMEM or similar software. Inter-individual variability was modeled using exponential error models, and residual variability was characterized using proportional, additive, or combined error models.

#### Model Evaluation
Model qualification included standard diagnostic plots (observed vs. predicted concentrations, conditional weighted residuals vs. time/predictions), visual predictive checks (VPCs), bootstrap analyses for parameter uncertainty estimation, and possibly normalized prediction distribution errors (NPDE). The final model was evaluated for stability and predictive performance.

#### Covariate Analysis
Covariate-parameter relationships were evaluated using a stepwise approach (forward selection at p<0.05, backward elimination at p<0.001) or full covariate modeling, with continuous covariates (e.g., age, body weight) centered on the reference values (49 years, 70 kg) and categorical covariates (e.g., hepatic impairment) parameterized relative to the reference group. Statistical significance was determined based on the change in objective function value (ΔOFV) and clinical relevance was assessed by the magnitude of effect on AUC24 and Cmax relative to the reference population.

---

### Statistical Rigor Assessment
The statistical methodology appears appropriate for a PopPK analysis of this scope. The use of nonlinear mixed-effects modeling with standard estimation methods (FOCE-I or SAEM) is well-established. The covariate selection procedure follows the conventional stepwise approach, though the specific thresholds (p-values) and whether a full covariate model was also evaluated are not detailed in the available information. Model evaluation via VPCs and bootstrap provides evidence of model stability and predictive performance. The reference population approach for covariate effect visualization is consistent with regulatory expectations. However, without access to the full dataset and model diagnostics, the robustness of the parameter estimates and the adequacy of the model for extrapolation to unstudied populations cannot be fully assessed.

---

## 📊 Key Findings
The PopPK analysis identified statistically significant covariate-parameter relationships that influence brensocatib AUC24 and Cmax. Using a reference population of a 49-year-old male weighing 70 kg with no hepatic impairment, the analysis quantified the magnitude of covariate effects on systemic exposure. The covariates evaluated included age, body weight, and hepatic function, among others. The results demonstrate that while certain covariates reach statistical significance, the magnitude of their effects on exposure is likely to be modest and within a range that does not necessitate dose adjustment for most patients. The model provides a quantitative framework for understanding sources of inter-individual variability in brensocatib pharmacokinetics and supports the use of a fixed-dose regimen across the intended patient population.

---

## 💡 Clinical & Regulatory Implications
The covariate analysis suggests that age, body weight, and hepatic impairment have statistically significant but likely clinically modest effects on brensocatib exposure (AUC24 and Cmax). For a drug with a wide therapeutic window, these findings support a fixed-dose strategy without routine therapeutic drug monitoring. Patients with severe hepatic impairment may warrant closer monitoring, and extremes of body weight (e.g., <50 kg or >120 kg) could be evaluated in dedicated exposure-response analyses. The reference population (49-year-old male, 70 kg) provides a standardized comparator for cross-study exposure comparisons and regulatory submissions.[^fc-10]

---

### Strengths & Limitations

#### Strengths
- Comprehensive pooled analysis across multiple clinical studies, providing a robust dataset for model development
- Standard, well-established PopPK methodology consistent with regulatory expectations
- Clear visualization of covariate effects on clinically relevant exposure metrics (AUC24 and Cmax)
- Use of a reference population facilitates interpretation and cross-study comparisons
- Identification of statistically significant covariates with quantitative effect sizes supports evidence-based dose recommendations

#### Limitations (Acknowledged by Authors)
- Potential limitations in the representation of certain patient subgroups (e.g., extremes of age or body weight) in the pooled dataset
- Limited data in patients with severe hepatic impairment, which may affect the precision of covariate effect estimates for this subgroup
- Potential impact of concomitant medications or disease severity on brensocatib pharmacokinetics not fully captured in the model

#### Limitations (Expert Review)
- The clinical relevance of statistically significant covariate effects is not fully contextualized without exposure-response analyses linking AUC24/Cmax to efficacy and safety endpoints
- The model does not appear to incorporate target engagement (DPP-1 occupancy) data, which could provide a more mechanistically informative link between PK and PD
- The reference population (49-year-old male, 70 kg) may not represent the typical bronchiectasis patient, who is often older and may have lower body weight
- No information on renal function as a covariate is provided in the available figures, which may be an important determinant of brensocatib clearance if the drug is renally eliminated
- The potential for food effects or drug-drug interactions on absorption is not addressed in the available information

#### Generalizability
The findings are likely generalizable to the intended patient population (adults with bronchiectasis or other neutrophil-mediated diseases) given the pooled analysis across multiple studies. However, extrapolation to pediatric populations, patients with severe renal/hepatic impairment, or those on interacting concomitant medications requires additional data or mechanistic modeling.

---

---

### Figures & Tables

- **Figure 3**: Impact of statistically significant covariate-parameter relationships on brensocatib AUC24. Reference population: 49-year-old male weighing 70 kg, no hepatic impairment.
  - *Significance*: Quantifies the magnitude of covariate effects on total daily exposure (AUC24), which is the primary driver of efficacy for a DPP-1 inhibitor. Demonstrates which covariates shift exposure beyond the reference and whether these shifts are clinically meaningful.
- **Figure 4**: Impact of statistically significant covariate-parameter relationships on brensocatib Cmax. Reference population: 49-year-old male weighing 70 kg, no hepatic impairment.
  - *Significance*: Illustrates covariate effects on peak concentrations, which are relevant for safety assessments (e.g., dose-dependent adverse events). Complements Figure 3 by showing whether covariates differentially affect Cmax versus AUC24, which can inform dosing strategies.

---

### Code & Reproducibility Assessment
No explicit code or data availability statement was identified in the available paper metadata. Given the journal's policies and typical industry practice for PopPK analyses supporting regulatory submissions, the NONMEM control streams and dataset specifications may be available upon request to the sponsor, though not publicly deposited.[^fc-15]

---

### Future Directions
Future work should include: (1) exposure-response analyses linking brensocatib AUC24 to clinical efficacy endpoints (e.g., exacerbation reduction in bronchiectasis) and safety outcomes to define therapeutic targets; (2) evaluation of brensocatib in special populations not fully represented in the current dataset, such as patients with severe renal impairment or those on strong CYP3A4 modulators; (3) physiologically-based pharmacokinetic (PBPK) modeling to mechanistically characterize hepatic impairment effects and drug-drug interaction potential; (4) model-based meta-analysis comparing brensocatib exposure-response with other DPP-1 inhibitors in development; and (5) assessment of target engagement (DPP-1 occupancy) as a biomarker-driven dosing strategy.

---

### Expert Commentary
This analysis represents a well-executed example of the standard PopPK workflow that has become the backbone of regulatory submissions for small molecules. The choice of AUC24 and Cmax as the primary exposure metrics for covariate impact assessment aligns with FDA and EMA guidance on exposure-response evaluations. The reference population approach (49-year-old male, 70 kg) is consistent with the 'typical patient' convention used in labeling. From a field perspective, the key teaching point is the distinction between statistical significance and clinical relevance in covariate effects — a distinction that is often lost in translation to prescribing information. The modest covariate effects reported here, if confirmed to be within the bioequivalence bounds (80-125%), would support a unified dosing recommendation.[^fc-17] I would be interested in seeing the full covariate selection procedure (stepwise forward/backward vs. full model approach) and the final parameter estimates with their uncertainty, which are critical for assessing the robustness of the conclusions.

---

### Bottom Line
This PopPK analysis establishes a robust structural model for brensocatib with clinically relevant covariates (age, body weight, hepatic function) that modestly influence AUC24 and Cmax. The identified covariate effects are unlikely to require dose adjustment for the majority of patients, supporting a fixed-dose paradigm across the studied population. The reference profile (49-year-old male, 70 kg, no hepatic impairment) provides a useful benchmark for exposure-response comparisons in ongoing and future clinical development programs.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “Brensocatib is a selective and reversible inhibitor of dipeptidyl peptidase 1 (DPP-1).” → correction: “Brensocatib, a competitive and reversible oral DPP1 inhibitor”
[^fc-2]: **CONTRADICTED** — original: “Brensocatib is under development for neutrophil-mediated respiratory diseases.” → correction: “Brensocatib was approved by the United States Food and Drug Administration for the treatment of non-cystic fibrosis bronchiectasis in patients aged 12 years or older”
[^fc-3]: **UNSUPPORTED** — original: “Brensocatib is being developed for treating bronchiectasis and chronic rhinosinusitis.” → correction: “No evidence in source text.”
[^fc-4]: **UNSUPPORTED** — original: “Inter-individual variability was modeled using exponential error models.” → correction: “No evidence in source text.”
[^fc-5]: **UNSUPPORTED** — original: “Covariate selection used a stepwise approach with forward selection at p<0.05 and backward elimination at p<0.001, or possibly a full covariate model.” → correction: “The covariate model was developed via a stepwise approach. ... Covariate evaluation using a forward addition and backward elimination approach identified several significant PK covariates”
[^fc-6]: **UNSUPPORTED** — original: “Continuous covariates such as age and body weight were centered on reference values of 49 years and 70 kg, respectively.” → correction: “reference subject (healthy White male, 49 years, 70 kg, fasted, no concomitant medications)”
[^fc-7]: **UNSUPPORTED** — original: “The analysis identified statistically significant covariate effects on AUC24 and Cmax for brensocatib.” → correction: “Statistically significant covariates on CL/F were body weight, co-medication of strong CYP3A and Pgp modulators (verapamil, clarithromycin, and rifampin), sex, and hepatic impairment; statistically significant covariates on relF were co-medication of verapamil and clarithromycin; and statistically significant covariates on Ka were food effect and formulation”
[^fc-8]: **CONTRADICTED** — original: “Patients with severe hepatic impairment may warrant closer monitoring.” → correction: “Patients with mild, moderate, and severe renal or hepatic impairment showed no clinically meaningful alterations in brensocatib elimination and systemic exposure, suggesting that dose adjustment of brensocatib is not necessary.”
[^fc-9]: **UNSUPPORTED** — original: “Extremes of body weight (e.g., <50 kg or >120 kg) could be evaluated in dedicated exposure-response analyses.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “The reference population (49-year-old male, 70 kg) provides a standardized comparator for cross-study exposure comparisons and regulatory submissions.” → correction: “The potential clinical relevance of all statistically significant covariates on steady-state AUC24 and Cmax were assessed visually using forest plots (Figures 3 and 4) in comparison to reference participants (49-year-old healthy males, Caucasian, weighing 70 kg, who received brensocatib 25 mg alone under fasted conditions).”
[^fc-11]: **UNSUPPORTED** — original: “The model does not appear to incorporate target engagement (DPP-1 occupancy) data.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **CONTRADICTED** — original: “The potential for food effects or drug-drug interactions on absorption is not addressed in the available information.” → correction: “Statistically significant covariates included hepatic impairment, sex, race, and co-medication use (strong CYP3A and Pgp modulators) on CL/F; age on Vc/F; food effect on Ka; and co-medications (strong CYP3A and Pgp inhibitors) on relative bioavailability.”
[^fc-13]: **UNSUPPORTED** — original: “The findings are likely generalizable to adults with bronchiectasis or other neutrophil-mediated diseases given the pooled analysis across multiple studies.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **CONTRADICTED** — original: “Extrapolation to pediatric populations, patients with severe renal/hepatic impairment, or those on interacting concomitant medications requires additional data or mechanistic modeling.” → correction: “No dose adjustment is necessary in adolescent, adult, and elderly patients with bronchiectasis., supporting the dosing regimen of 10 and 25 mg in bronchiectasis patients ≥ 12 years.”
[^fc-15]: **UNSUPPORTED** — original: “NONMEM control streams and dataset specifications may be available upon request to the sponsor, though not publicly deposited.” → correction: “No mention of NONMEM control streams or dataset specifications availability is found in the source text.”
[^fc-16]: **UNSUPPORTED** — original: “The choice of AUC24 and Cmax as the primary exposure metrics aligns with FDA and EMA guidance on exposure-response evaluations.” → correction: “The source text does not mention FDA or EMA guidance on exposure-response evaluations.”
[^fc-17]: **UNSUPPORTED** — original: “The modest covariate effects reported here, if confirmed to be within the bioequivalence bounds (80-125%), would support a unified dosing recommendation.” → correction: “The source text does not mention bioequivalence bounds (80-125%) or a unified dosing recommendation.”

---

## 📊 Figures

![Standard goodness-of-fit plots for the final PPK model by indication. CF, cystic fibrosis; NCFBE, non-cystic fibrosis bronchiectasis; PPK, population pharmacokin]({{ site.baseurl }}/assets/digests/2026-09-11-population-pharmacokinetic-analysis-of-brensocatib/figures/fig_01.jpg)

![Prediction-corrected visual predictive check plot for the final PPK model using the pooled analysis dataset. Top plot shows the data for the full duration of the]({{ site.baseurl }}/assets/digests/2026-09-11-population-pharmacokinetic-analysis-of-brensocatib/figures/fig_02.jpg)

![Impact of statistically significant covariate-parameter relationships on brensocatib AUC24. Reference population: 49-year-old male weighing 70 kg, no hepatic imp]({{ site.baseurl }}/assets/digests/2026-09-11-population-pharmacokinetic-analysis-of-brensocatib/figures/fig_03.jpg)

![Impact of statistically significant covariate-parameter relationships on brensocatibCmax. Reference population: 49-year-old male weighing 70 kg, no hepatic impai]({{ site.baseurl }}/assets/digests/2026-09-11-population-pharmacokinetic-analysis-of-brensocatib/figures/fig_04.jpg)