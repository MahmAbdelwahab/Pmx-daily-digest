---
layout: post
title: "Population Pharmacokinetics of Dupilumab in Patients Aged ≥ 1 Year With Eosinophilic Esophagitis"
date: 2026-06-10
authors: "Nguyen J-H, Chehade M, Dellon ES, et al."
journal: "Clinical Pharmacology & Therapeutics, 2026"
doi: "10.1002/cpt.70233"
paper_type: popk
tags: [popk, pediatrics, regulatory]
excerpt_text: "This paper develops a population PK model for dupilumab in eosinophilic esophagitis (EoE) patients aged ≥1 year, using data from healthy volunteers and three EoE trials. The model demonstrates that body weight (including time-varying weight in children) drives PK, not age, and simulations identified weight-tiered regimens (e.g., 200 mg q3w for 5–15 kg, 300 mg qw for 40–60 kg) that match adult exposures. The results directly supported FDA approval for patients ≥1 year and ≥15 kg."
pdf_path: "/assets/digests/2026-06-10-population-pharmacokinetics-of-dupilumab-in-patients-aged-1-year-with/PMx_Population_Pharmacokinetics_of_Dupilumab_20260610.pdf"
retroactively_classified: false
---

**Content Source:** PMC Full Text

### Quick Take
This paper develops a population PK model for dupilumab in eosinophilic esophagitis (EoE) patients aged ≥1 year, using data from healthy volunteers and three EoE trials. The model demonstrates that body weight (including time-varying weight in children) drives PK, not age, and simulations identified weight-tiered regimens (e.g., 200 mg q3w for 5–15 kg, 300 mg qw for 40–60 kg) that match adult exposures. The results directly supported FDA approval for patients ≥1 year and ≥15 kg.

---

### Executive Summary
A population pharmacokinetic (popPK) model for dupilumab was developed using concentration data from 6 single-dose studies in healthy adults and 3 EoE clinical trials (phase II in adults, phase III TREET in adults/adolescents, phase III KIDS in children 1–<12 years). The structural model included 3 transit compartments for absorption, 2 distribution compartments, and parallel linear and Michaelis-Menten elimination. Covariate analysis identified significant effects of EoE disease on clearance ($CL$), volume of distribution ($V_{ss}$), and maximum nonlinear elimination rate ($V_{max}$); baseline albumin on $CL$; and time-varying body weight on $CL$, $V_{ss}$, and intercompartmental clearance ($Q$) with estimated allometric exponents. Age was not a significant covariate after accounting for weight. The final model showed good predictive performance in prediction-corrected visual predictive checks (pcVPCs). Simulations identified alternative weight-tiered regimens (200 mg q3w for ≥5–<15 kg, 300 mg qw for ≥40–<60 kg) that improve exposure matching to the approved 300 mg weekly dose in adults/adolescents. The model was used to inform regulatory approval for dupilumab in EoE patients aged ≥1 year and weighing ≥15 kg.

---

### Scientific Context & Motivation
Eosinophilic esophagitis (EoE) is a chronic type 2 inflammatory disease of the esophagus with increasing incidence, affecting both children and adults. Dupilumab, a monoclonal antibody blocking IL-4/IL-13 signaling, is approved for EoE in patients ≥1 year and ≥15 kg, but optimal dosing in young children and across body weights needed characterization. Prior popPK models existed for dupilumab in atopic dermatitis, but not specifically for EoE across the full pediatric age range. Key knowledge gaps included whether age independently affects PK beyond body weight, how to dose children <15 kg, and how to match exposures of the efficacious 300 mg weekly regimen in smaller patients. This study addresses these gaps by developing a comprehensive popPK model incorporating time-varying weight and testing age effects.

---

## ⚡ Methodological Snapshot
The popPK model was developed in three phases: (1) structural model using dense PK data from 6 healthy volunteer studies (single IV and SC doses), (2) extension to a base model in EoE patients by testing disease effects on $CL$, $V_{ss}$, $V_{max}$, and $F1$, and (3) final model with additional covariate testing including time-varying weight, age, disease severity, dose, and study. The structural model comprised 3 transit compartments for absorption, a 2-compartment distribution model, and parallel linear and Michaelis-Menten elimination. Allometric scaling with fixed exponents (1.0 for volumes, 0.75 for clearances) was applied. Stepwise covariate analysis used forward addition (p<0.01) and backward elimination (p<0.001). The final model included EoE effects on $CL$, $V_{ss}$, $V_{max}$; albumin on $CL$; and time-varying weight on $CL$, $V_{ss}$, and $Q$ (estimated allometry for $CL$ and $V_{ss}$, fixed 0.75 for $Q$). Model evaluation used pcVPCs with 1000 simulated datasets.

---

## 🏗️ Structural Model Breakdown
The structural model consists of: (1) Three transit compartments representing sequential absorption steps after subcutaneous administration, parameterized by mean transit time ($MTT$). (2) An absorption compartment from which drug enters the central compartment with first-order rate $K_a$. (3) Central compartment (volume $V_c$) with linear elimination ($CL$) and nonlinear Michaelis-Menten elimination ($V_{max}$, $K_m$). (4) Peripheral compartment (volume $V_p$) connected to central by intercompartmental clearance $Q$. Total volume of distribution at steady state $V_{ss} = V_c + V_p$. Allometric scaling: $V_{ss} \propto (WT/70)^{1.0}$, $CL$ and $Q \propto (WT/70)^{0.75}$. IIV was included on $CL$, $V_{ss}$, $K_a$, $F1$, and $MTT$ using exponential random effects. Residual error was modeled as proportional plus additive, with separate estimates for healthy volunteers (IV and SC) and EoE patients.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling using NONMEM 7.5.0 with FOCEI estimation and preconditioning. Structural model: 3 transit compartments (mean transit time $MTT$) leading to absorption compartment, central ($V_c$) and peripheral ($V_p$) distribution compartments, linear clearance ($CL$) and Michaelis-Menten elimination ($V_{max}$, $K_m$) from central compartment. Allometric scaling with fixed exponents (1.0 for $V_{ss}$, 0.75 for $CL$ and $Q$). Inter-individual variability (IIV) on $CL$, $V_{ss}$, $K_a$, $F1$, $MTT$ (exponential). Residual variability: proportional plus additive error, separate for healthy volunteers (IV and SC) and EoE patients.

#### Data Sources
Total 632 subjects (202 healthy adults, 430 EoE patients) providing 4459 PK samples (78% quantifiable). Healthy volunteer data: 6 single-dose studies with dense sampling after IV and SC administration. EoE data: 1 phase II study in adults (NCT?), phase III LIBERTY EoE TREET (NCT03633617) in adults/adolescents ≥12 years, phase III EoE KIDS (NCT04394351) in children 1–<12 years. Sampling in EoE studies was sparse, primarily trough concentrations up to 52 weeks.

#### Estimation Methods
FOCEI (first-order conditional estimation with interaction) with an additional preconditioning step to stabilize the variance-covariance matrix computation.

#### Model Evaluation
Prediction-corrected visual predictive checks (pcVPCs) using 1000 simulated datasets replicating the original study designs. Goodness-of-fit plots (observed vs. predicted, residuals). Condition number (2.05) assessed model stability.

#### Covariate Analysis
Stepwise forward addition (p<0.01) and backward elimination (p<0.001). Covariates tested: EoE disease state (on $CL$, $V_{ss}$, $V_{max}$, $F1$), baseline albumin (on $CL$), maximum ADA titer category (on $CL$), time-varying weight (on $CL$, $V_{ss}$, $Q$), time-varying age (on $K_a$, $CL$), baseline EEOS (disease severity), dose, study. Final covariates: EoE on $CL$ (0.944-fold), $V_{ss}$ (1.26-fold), $V_{max}$ (0.782-fold); albumin on $CL$ (power -1.16); time-varying weight on $CL$ (power 1.08), $V_{ss}$ (power 0.71), $Q$ (fixed power 0.75).

---

### Statistical Rigor Assessment
The stepwise covariate modeling approach with appropriate significance thresholds (forward p<0.01, backward p<0.001) is standard and reduces false positives. The sample size (632 subjects, 4459 samples) is adequate for the complexity of the model. pcVPCs with 1000 replicates provide robust visual assessment of predictive performance. The condition number of 2.05 indicates no collinearity issues. However, the extremely low RSEs (<1% for most parameters) are atypical and likely result from fixing healthy volunteer parameters, which may underestimate uncertainty. No bootstrap or SIR was performed to confirm standard errors. High $\eta$-shrinkage for $V_{ss}$ (64.9%) limits the reliability of individual $V_{ss}$ estimates for diagnostic purposes, but the authors appropriately did not use them for covariate selection. Missing data (22% BLQ samples) were handled by setting to 0, which is acceptable for trough concentrations but could introduce bias if BLQ occurs at other times.

---

## 📊 Key Findings
Body weight positively correlates with dupilumab $CL$ and $V_{ss}$ (estimated allometric exponents 1.08 for $CL$, 0.71 for $V_{ss}$ relative to 70 kg). Baseline albumin negatively correlates with $CL$ (power −1.16). EoE disease reduces $CL$ by ~5.6% (0.944-fold), increases $V_{ss}$ by 26% (1.26-fold), and reduces $V_{max}$ by 21.8% (0.782-fold) compared to healthy volunteers. Time-varying weight in children and adolescents significantly improved model fit over baseline weight. Age was not a significant covariate on $CL$ or $K_a$ after accounting for weight. The final model pcVPCs showed good agreement between observed and simulated concentrations. Simulations identified that children ≥5–<15 kg receiving 100 mg q2w had lower troughs than the 300 mg qw reference; a 200 mg q3w regimen was predicted to match exposures. Children ≥40–<60 kg receiving 300 mg q2w had lower exposures; 300 mg qw was predicted to match. These findings supported the approved weight-tiered posology: 200 mg q2w (≥15–<30 kg), 300 mg q2w (≥30–<40 kg), 300 mg qw (≥40 kg), and the proposed 200 mg q3w for ≥5–<15 kg.

---

## 💡 Clinical & Regulatory Implications
The model directly supported FDA approval of dupilumab for EoE in patients ≥1 year and ≥15 kg with the following weight-tiered posology: 200 mg q2w (≥15–<30 kg), 300 mg q2w (≥30–<40 kg), 300 mg qw (≥40 kg). For children ≥5–<15 kg, a 200 mg q3w regimen is proposed but requires further clinical evaluation. The finding that age does not independently affect PK simplifies dosing: weight-based dosing is sufficient across the age range 1–≥18 years. Adults and adolescents <40 kg can be dosed based on weight using the pediatric regimens. The model can also be used to design future clinical trials in younger children (<15 kg) and to explore alternative dosing intervals.

---

### Strengths & Limitations

#### Strengths
- Large dataset combining dense PK from healthy volunteers (6 studies) with sparse PK from EoE patients (3 studies, n=430), enabling robust structural model development.
- Use of time-varying body weight in children and adolescents, improving physiological plausibility and model fit.
- Stepwise covariate analysis with appropriate significance thresholds (forward p<0.01, backward p<0.001).
- Model evaluation with pcVPCs showing good predictive performance across studies and dose regimens.
- Direct regulatory impact: model used to support FDA approval for pediatric EoE patients ≥1 year and ≥15 kg.
- Clear demonstration that age is not a significant PK covariate after accounting for weight, simplifying dosing recommendations.

#### Limitations (Acknowledged by Authors)
- Sparse PK sampling in EoE studies (primarily trough concentrations) limits ability to estimate absorption and distribution parameters in patients.
- High $\eta$-shrinkage for $V_{ss}$ (64.9%) limits use of individual $V_{ss}$ estimates for covariate detection.
- Limited data in children <15 kg (n=7 in HE group) precludes definitive conclusions for this weight band.
- No infants <1 year included; potential maturation effects on $CL$ in very young children could not be assessed.
- Fixing healthy volunteer parameters may have contributed to very low RSEs (<1%) for estimated parameters, potentially underestimating uncertainty.

#### Limitations (Expert Review)
- The extremely low RSEs for all parameters (often <1%) are unusual and likely result from fixing many structural parameters to healthy volunteer estimates, which may not fully propagate uncertainty from the first stage.
- No formal bootstrap or sampling importance resampling (SIR) was performed to evaluate parameter uncertainty; only asymptotic standard errors from NONMEM were reported.
- The model does not include an exposure-response component; efficacy and safety implications of the simulated regimens are inferred from separate analyses.
- The assumption of linear interpolation for time-varying weight between sparse measurements may introduce error if weight changes are nonlinear.
- The model was developed primarily for EoE; applicability to other dupilumab indications (e.g., asthma, atopic dermatitis) may require re-estimation of disease-specific effects.

#### Generalizability
The model is likely generalizable to other dupilumab indications with similar patient demographics, as the structural model and covariate effects (weight, albumin) are consistent with prior dupilumab popPK models in atopic dermatitis. However, the EoE-specific disease effects on $CL$, $V_{ss}$, and $V_{max}$ may differ in other diseases due to varying target expression and inflammation. The weight-tiered dosing approach is broadly applicable to monoclonal antibodies in pediatrics.

---

### Key Equations

**Time-Varying Weight Interpolation**

{% raw %}
$$
WT_t = WT_{\text{BLT}} + (t - \text{TIMEWT}) \times \text{SLOPEWT}
$$
{% endraw %}

Linear interpolation of body weight between observed measurements for pediatric patients. $WT_{BLT}$ is the baseline weight at the start of the segment, TIMEWT is the time since the last weight change, and SLOPEWT is the rate of weight change.

**Coefficient of Variation from Inter-Individual Variability**

{% raw %}
$$
CV(\%) = \sqrt{\exp(\omega^2) - 1} \times 100
$$
{% endraw %}

Conversion of the estimated IIV variance ($\omega^2$) to a coefficient of variation percentage. For $CL$ ($\omega^2=0.0970$), this yields 31.9% CV.

---

### Figures & Tables

- **Figure 1**: Prediction-corrected visual predictive checks (pcVPCs) for the final model, stratified by study (LIBERTY EoE TREET, EoE KIDS). Blue line shows median, red lines show 5th and 95th percentiles; shaded bands represent 95% confidence intervals of simulated percentiles.
  - *Significance*: Demonstrates that the final model adequately predicts the central tendency and variability of dupilumab concentrations across different EoE studies and dose regimens.
- **Figure 2**: Simulated impact of (a) body weight on $CL$ and $V_{ss}$, and (b) baseline albumin on $CL$. Population median (black line) and 95% prediction interval (gray shading) with post hoc estimates overlaid.
  - *Significance*: Illustrates the covariate relationships in the final model: positive correlation of weight with $CL$ and $V_{ss}$, negative correlation of albumin with $CL$. No systematic bias is observed.
- **Figure 3**: Predicted dupilumab concentration profiles for the alternative weight-based posology (200 mg q3w for ≥5–<15 kg, 200 mg q2w for ≥15–<30 kg, 300 mg q2w for ≥30–<40 kg, 300 mg qw for ≥40 kg). Median and 90% prediction intervals shown.
  - *Significance*: Shows that the alternative posology achieves overlapping exposure distributions across weight groups, supporting its use for exposure matching to the approved 300 mg qw regimen in adults.
- **Table 1**: Observed mean (SD) dupilumab trough concentrations at Weeks 16, 24, and 52 from LIBERTY EoE TREET and EoE KIDS studies, stratified by dose regimen and weight group.
  - *Significance*: Provides the empirical exposure data that the model was built to describe and compare against. Highlights the lower troughs in children ≥40–<60 kg receiving 300 mg q2w versus the 300 mg qw reference.
- **Table 2**: Final model parameter estimates with 95% CIs and RSEs. Includes structural parameters ($CL$, $V_c$, $Q$, $V_p$, $V_{max}$, $K_m$, $K_a$, $F1$, $MTT$), covariate effects, IIV, and residual error components.
  - *Significance*: Central table for model interpretation. Shows well-estimated parameters with very low RSEs (<1% for most). IIV for $CL$ is 31.9% CV, for $V_{ss}$ is 16.2% CV. Condition number 2.05 indicates stability.
- **Table 3**: Simulated steady-state exposure metrics ($AUC_{4wks}$, $AUC_{\tau}$, $C_{max}$, $C_{trough}$) for the alternative weight-based posology across four weight groups.
  - *Significance*: Quantifies the predicted exposures for the proposed dosing regimens, demonstrating that median $C_{trough}$ values are similar across groups (e.g., 224 mg/L for ≥40 kg 300 mg qw vs. 197 mg/L for ≥5–<15 kg 200 mg q3w).

---

### Code & Reproducibility Assessment
No public code repository was provided. Qualified researchers may request access to study documents and individual anonymized participant data via Vivli (https://vivli.org/).

---

### Supplementary Materials
Supplementary materials include Table S1 (study designs), Table S2 (covariates tested), Table S3 (baseline characteristics), Table S4 (base model covariate effects), Table S5 (additional tested effects), Table S6 (simulated exposures for HE/LE regimens), Tables S7-S9 (additional simulation scenarios), and Figures S1-S5 (diagnostic plots, model diagrams, $\eta$ distributions). These provide detailed support for model development steps and additional simulation results.

---

### Future Directions
A clinical study evaluating the safety, PK, and efficacy of dupilumab 200 mg q3w in children with EoE weighing ≥5 to <15 kg is warranted. Further investigation of maturation effects on $CL$ in infants <1 year could refine dosing in younger populations. Exposure-response analyses integrating efficacy and safety endpoints would strengthen the link between the simulated regimens and clinical outcomes. The model could also be extended to other dupilumab indications to support pediatric dose selection.

---

### Expert Commentary
This is a well-executed popPK analysis that follows best practices for monoclonal antibody modeling in pediatrics. The strategy of fixing structural parameters from healthy volunteer data is pragmatic given the sparse sampling in patients, but the resulting extremely low RSEs (<1%) warrant caution—these likely reflect conditional precision rather than true uncertainty. The use of time-varying weight is a nice touch that improves physiological realism for growing children. The finding that age is not significant after weight is consistent with other mAbs in children >1 year, where maturation of FcRn-mediated clearance is largely complete. The regulatory impact is commendable, with the model directly supporting a label expansion. One teaching point: the high $V_{ss}$ shrinkage (64.9%) means individual $V_{ss}$ estimates are unreliable for post hoc covariate diagnostics, but the authors appropriately did not use them for model selection. Overall, this paper is a strong example of model-informed drug development in a pediatric rare disease.

---

### Bottom Line
This popPK model robustly characterizes dupilumab PK across the EoE age spectrum (≥1 year), showing that body weight (including time-varying weight in children) is the primary driver of exposure, with no independent age effect. The model directly informed regulatory approval of weight-tiered dosing (200 mg q2w, 300 mg q2w, 300 mg qw for increasing weight bands) and proposed a 200 mg q3w regimen for children 5–15 kg. For practicing pharmacometricians, this work exemplifies how leveraging healthy volunteer data to anchor structural parameters, combined with careful handling of time-varying covariates in pediatrics, can produce a model with high regulatory impact.

---

---

## 📊 Figures

![Visual predictive check plots in the final model by study. The population median is provided by the blue line, and the 5thand 95thpercentiles are indicated by the red lines. The sh]({{ site.baseurl }}/assets/digests/2026-06-10-population-pharmacokinetics-of-dupilumab-in-patients-aged-1-year-with/figures/fig_01.jpg)

![Simulated impact of (a) body weight and (b) baseline albumin covariates (covariate effects) on pharmacokinetic parameters at final visit using the final model. The population media]({{ site.baseurl }}/assets/digests/2026-06-10-population-pharmacokinetics-of-dupilumab-in-patients-aged-1-year-with/figures/fig_02.jpg)

![Predicted dupilumab concentration profiles in adults, adolescents, and children aged ≥ 1 year with EoE using the alternative, weight‐based posology. The population median is provid]({{ site.baseurl }}/assets/digests/2026-06-10-population-pharmacokinetics-of-dupilumab-in-patients-aged-1-year-with/figures/fig_03.jpg)