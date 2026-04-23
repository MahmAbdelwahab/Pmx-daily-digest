---
layout: post
title: "Population PK–PD Modeling of Danicopan Add-On Therapy in Participants With Paroxysmal Nocturnal Hemoglobinuria Treated With Ravulizumab or Eculizumab"
date: 2026-03-03
authors: "Jun Chen, Feng Yang, Hanbin Li, Rajendra Pradhan, Stephan Ortiz et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "https://doi.org/10.1002/psp4.70209"
paper_type: popk
tags: [popk, qsp, covariate-analysis, regulatory]
excerpt_text: "This paper presents the regulatory-grade population PK–PD model supporting the approved danicopan dosing regimens (150 mg and 200 mg tid) for paroxysmal nocturnal hemoglobinuria. Clinical pharmacologists, pharmacometricians working in rare hematologic diseases, and complement biology researchers will find this a thorough characterization of a first-in-class oral factor D inhibitor. The work directly informed FDA/EMA labeling decisions, including the food-effect label expansion."
pdf_path: "/assets/digests/2026-03-03-population-pkpd-modeling-of-danicopan-add-on-therapy-in-participants-with/PMx_Population_PKPD_Modeling_of_Danicopan_Ad_20260303.pdf"
retroactively_classified: true
---

### Quick Take
This paper presents the regulatory-grade population PK–PD model supporting the approved danicopan dosing regimens (150 mg and 200 mg tid) for paroxysmal nocturnal hemoglobinuria. Clinical pharmacologists, pharmacometricians working in rare hematologic diseases, and complement biology researchers will find this a thorough characterization of a first-in-class oral factor D inhibitor. The work directly informed FDA/EMA labeling decisions, including the food-effect label expansion.

---

### Executive Summary
Danicopan, the first orally administered complement factor D inhibitor, received regulatory approval as add-on therapy to C5 inhibitors (ravulizumab or eculizumab) for clinically significant extravascular hemolysis (EVH) in paroxysmal nocturnal hemoglobinuria (PNH). This paper describes the population PK and PK–PD analyses that underpinned the approved 150 mg and 200 mg three-times-daily (tid) dosing regimens. Using data from 407 participants across 14 clinical studies (7491 PK observations), a two-compartment model with zero-order release followed by first-order absorption accurately characterized danicopan PK. Body weight, sex, severe renal impairment, formulation, and food status were identified as statistically significant covariates, yet none were deemed clinically meaningful enough to mandate dose adjustment (with the exception of a European recommendation for reduced dosing in severe renal impairment). An inhibitory Emax model linked danicopan plasma concentrations to alternative pathway (AP) activity, yielding IC50 = 12 ng/mL and IC90 = 108 ng/mL. Model-based simulations demonstrated that both approved regimens achieve median trough concentrations exceeding the IC90 target and produce near-complete AP inhibition (< 5% residual activity at median), regardless of food status—a finding that directly supported the 'without regard to food' labeling claim accepted by the FDA.

---

## ⚡ Methodological Snapshot
The population PK model was developed iteratively: an initial model was built from 316 healthy participants across 11 phase 1 studies and 22 PNH patients from two phase 2 studies, then refined after incorporating 69 PNH patients from the pivotal phase 3 ALPHA trial. The final dataset comprised 7491 post-dose PK samples from 407 participants across 14 clinical studies. A two-compartment structural model with linear elimination was selected as the base model. Absorption was described by a zero-order release process (duration D1) followed by first-order absorption (rate Ka), with formulation-specific parameters for the approved tablet and the liquid-filled capsule (LFC) used in early studies. Relative bioavailability (F), absorption lag time (Tlag), and inter-individual variability (IIV) on CL/F, Vc/F, Vp/F, and Ka were estimated. Covariate selection used a forward addition/backward elimination stepwise approach with significance thresholds of α = 0.01 (forward) and α = 0.001 (backward). All models were estimated using FOCE with eta-epsilon interaction (FOCE-I) in NONMEM 7.5.

The PK–PD model characterized the relationship between danicopan plasma concentrations and AP activity (measured by hemolysis assay, APH) using data from 69 ALPHA study participants (475 time-matched concentration–AP activity pairs). An inhibitory Emax (direct response) model was selected based on exploratory analyses. Baseline AP activity (AP0) was modeled as a function of body weight and East Asian ethnicity. IIV was estimated on AP0 and IC50. Covariate selection for the PD model used less stringent thresholds (α = 0.05 for both forward and backward steps).

Model-based simulations (n = 1000 virtual PNH patients) were performed to predict steady-state PK and AP activity under the two approved dose regimens and three food conditions (fasted, standard meal, high-fat meal). Post hoc individual PK and PD parameters from the ALPHA population were used to characterize IIV in simulations, and covariate distributions were sampled from the ALPHA study demographics.

---

## 🏗️ Structural Model Breakdown
The PK structural model is a two-compartment system with linear (first-order) elimination from the central compartment. Absorption is described by a zero-order input process of duration D1 (representing controlled release from the formulation) followed by first-order absorption with rate constant Ka into the central compartment. An absorption lag time (Tlag) is included for the tablet formulation under fed conditions. Relative bioavailability (F) is estimated with the tablet under standard meal conditions as the reference (F = 1). Formulation (tablet vs. LFC) affects Ka, D1, and F. Food status (fasted, standard meal, high-fat meal) affects Ka, D1, and F multiplicatively. Body weight is incorporated via allometric scaling: CL/F and Q/F scale with exponent 0.645, while Vc/F and Vp/F scale with exponent 0.876, both centered on a reference weight of 75 kg. Female sex reduces CL/F by 22.1%. Severe renal impairment reduces CL/F by 43.3%. IIV is modeled exponentially on CL/F, Vc/F, Vp/F, and Ka, with a covariance term between CL/F and Vc/F IIV. Residual error is combined proportional plus additive.

The PD structural model is a direct inhibitory Emax model. Baseline AP activity (AP0) is the maximum AP activity in the absence of danicopan. The minimum AP activity achievable with complete inhibition is Imax (estimated at 3.05%, representing a floor of residual AP activity). AP activity at any danicopan concentration (CONC) is described by a hyperbolic inhibition function with IC50 = 12 ng/mL. The IC90 (concentration producing 90% of maximum inhibition) is derived as IC90 = IC50 × 9 = 108 ng/mL. Baseline AP0 is modeled as a function of body weight (allometric, exponent 1.29, centered on 69 kg) and East Asian ethnicity (−46.0% reduction). IIV is modeled on AP0 (additive on the log scale) and IC50 (exponential). Residual error is proportional.

---

### Detailed Methodological Analysis

#### Modeling Approach
Two-compartment population PK model with linear elimination; absorption via zero-order release (D1) followed by first-order absorption (Ka), with formulation-specific parameters for tablet and LFC. Direct inhibitory Emax model for PK–PD (AP activity). Both models implemented in NONMEM 7.5 (ICON plc). Data assembly in SAS 9.4. Proportional plus additive residual error for PK; proportional residual error for PD.

#### Data Sources
Population PK: 7491 post-dose plasma PK samples from 407 participants (316 healthy volunteers from 11 phase 1 studies; 91 PNH patients from 2 phase 2 and 1 phase 3 [ALPHA] studies) across 14 clinical studies. Doses ranged from 100 to 400 mg; formulations included tablet and LFC; food conditions included fasted, standard meal, and high-fat meal. PK–PD: 475 time-matched danicopan concentration and AP activity (APH assay) pairs from 69 PNH patients in the ALPHA phase 3 study (double-blind and open-label phases). Sampling was sparse in the phase 3 study (pre-dose and 2 h post-dose on Day 1; Weeks 4, 12, 16, 24). Danicopan plasma concentrations measured by validated LC-MS/MS with LLOQ = 0.1 ng/mL.

#### Estimation Methods
First-order conditional estimation with eta-epsilon interaction (FOCE-I) in NONMEM 7.5. Relative standard errors (RSE) reported for all parameter estimates. Some parameters (high-fat meal effects on D1, Ka, and Tlag) were fixed to estimates from a dedicated food-effect study (ACH471-016) rather than estimated in the population model, to stabilize estimation given limited high-fat meal data in the main dataset.

#### Model Evaluation
Prediction-corrected visual predictive checks (pcVPCs) stratified by food status (standard meal, fasted, high-fat meal) for the PK model (Figure 1). Additional diagnostic plots provided in supplementary figures (Figure S1–S3). Model fit assessed via standard goodness-of-fit plots. Shrinkage reported for all IIV and residual error terms. RSE used to assess parameter precision. No formal bootstrap confidence intervals or external validation reported.

#### Covariate Analysis
Stepwise forward addition (α = 0.01) followed by backward elimination (α = 0.001) for PK covariates. Covariates screened: age, body weight, sex, race, country/region, renal function (eGFR categories), hepatic function, dose, food status, formulation, population (healthy vs. PNH), baseline factor D, and background C5 inhibitor. Significant PK covariates retained: body weight (allometric exponents on CL/F, Q/F, Vc/F, Vp/F), female sex (CL/F −22.1%), severe renal impairment (CL/F −43.3%), formulation (LFC vs. tablet: F +29%, Ka differences), and food status (effects on Ka, D1, F). For PD covariates: forward addition and backward elimination both at α = 0.05. Significant PD covariates: body weight and East Asian ethnicity (both on baseline AP0). Clinical relevance assessed via forest plot of steady-state exposure ratios (Figure 2) and simulation-based AP activity comparisons (Table 3).

---

### Scientific Context & Motivation
PNH is a rare, life-threatening complement-mediated hemolytic disorder driven by somatic PIGA mutations that eliminate GPI-anchored complement regulatory proteins (CD55, CD59) from red blood cell surfaces. The introduction of C5 inhibitors (eculizumab, ravulizumab) transformed PNH management by blocking terminal complement and controlling intravascular hemolysis (IVH). However, approximately 20% of C5 inhibitor-treated patients develop clinically significant EVH, because surviving PNH red blood cells remain susceptible to upstream C3 opsonization via the alternative pathway (AP). Danicopan addresses this unmet need by inhibiting complement factor D, a rate-limiting serine protease in the AP amplification loop, thereby preventing C3 opsonization while preserving the C5 inhibitor's control of terminal complement. Prior to this analysis, no published population PK–PD model existed for danicopan, and the quantitative relationship between danicopan exposure and AP inhibition had not been formally characterized across the full clinical dataset spanning healthy volunteers and PNH patients. This work fills that gap, providing the quantitative framework needed to justify the two-tier dosing strategy (150 mg tid starting dose with escalation to 200 mg tid) and to evaluate the clinical relevance of covariate effects and food interactions.

---

### Statistical Rigor Assessment
The dataset is appropriately sized for a population PK analysis of a rare disease drug: 7491 observations from 407 participants provides adequate power for covariate detection, particularly given the rich phase 1 data. The PK–PD dataset is more limited (475 observations from 69 patients), which is typical for rare disease phase 3 studies with sparse sampling designs. The stepwise covariate selection approach with different significance thresholds for forward (α = 0.01) and backward (α = 0.001) steps for PK, and α = 0.05 for both PD steps, is standard practice, though the more liberal PD threshold increases the risk of retaining spurious covariates. BLQ handling (exclusion of samples below LLOQ) is a pragmatic but potentially biasing approach; the M3 method would have been more statistically rigorous, though the low BLQ rate (3.8% overall) likely minimizes bias. Fixing high-fat meal parameters (Ka, D1, Tlag) from a separate food-effect study is a reasonable pragmatic decision given the small number of high-fat meal observations (n = 16) in the main dataset, but introduces uncertainty not fully captured in the reported RSEs. RSEs for most fixed-effect parameters are acceptable (< 30%), with the notable exception of Ka for LFC (RSE 256%), reflecting identifiability challenges with sparse LFC absorption data. IIV on Ka is very large (268% CV), suggesting substantial unexplained variability in absorption. Bootstrap confidence intervals are not reported, which limits assessment of parameter uncertainty. The pcVPC stratified by food status is an appropriate evaluation tool, though the acknowledged under-prediction at ~5 h post-dose under high-fat meal conditions suggests the absorption model may not fully capture the high-fat meal absorption profile.

---

## 📊 Key Findings
The final population PK model estimated apparent clearance (CL/F) of 79.5 L/h, central volume (Vc/F) of 163 L, peripheral volume (Vp/F) of 232 L, inter-compartmental clearance (Q/F) of 34.9 L/h, and first-order absorption rate (Ka) of 1.58 h⁻¹ for the tablet formulation under standard meal conditions. Between-subject variability was moderate for CL/F (25.6% CV) but substantial for Vc/F (71.4% CV) and Ka (268% CV). Five covariates significantly influenced danicopan PK: body weight (allometric scaling), female sex (CL/F −22.1%, AUC +29%), severe renal impairment (CL/F −43.3%, AUC +76%), formulation (LFC vs. tablet: F +29%), and food status. Food status primarily affected absorption rate and Cmax: relative to standard meal, fasting reduced Cmax by ~7% and AUC by ~13%, while a high-fat meal increased Cmax by ~55% and AUC by ~11%. Importantly, AUC differences across food conditions were modest (0.87- to 1.10-fold), supporting administration without regard to meals.

For the PK–PD model, IC50 for AP inhibition was 12 ng/mL (RSE 33.4%) and the minimum achievable AP activity (Imax floor) was 3.05% (RSE 6.56%), yielding an IC90 of 108 ng/mL. Baseline AP0 was 29.1% (reference: 75 kg non-East Asian), reduced by 46% in East Asian participants and increasing with body weight (exponent 1.29). IIV on IC50 was very large (229% CV), indicating substantial inter-individual variability in pharmacodynamic sensitivity.

Simulations demonstrated that both 150 mg tid (median Ctrough,ss 118–147 ng/mL across food conditions) and 200 mg tid (median Ctrough,ss 159–178 ng/mL) achieve median trough concentrations above the IC90 of 108 ng/mL. The proportion of patients achieving Ctrough,ss ≥ IC90 was 58–75% for 150 mg tid and 83–87% for 200 mg tid, depending on food status. Median trough AP activity was < 5% for both regimens regardless of food status, confirming near-complete AP inhibition.

---

## 💡 Clinical & Regulatory Implications
Both approved danicopan dosing regimens (150 mg tid and 200 mg tid) are supported by the modeling and simulation results. The 150 mg tid starting dose achieves median trough concentrations above the IC90 target in the majority of patients (74.5% under standard meal conditions), while the 200 mg tid escalation dose increases this proportion to 86.1%, providing a rationale for dose escalation in patients with inadequate clinical response. The near-identical median AP activity at trough (< 5%) for both regimens, regardless of food status, directly supports the 'without regard to food' labeling claim accepted by the FDA—a clinically important convenience for patients with a chronic disease requiring tid dosing. The 43.3% reduction in CL/F in severe renal impairment translates to a 76% increase in AUC, which prompted the EMA to recommend a reduced starting dose of 100 mg tid in this population, while the FDA and Health Canada did not mandate dose adjustment given the absence of clinically relevant exposure-safety relationships. The 29% higher AUC in female patients and body weight effects on exposure were not considered clinically significant given the absence of exposure-response relationships for safety endpoints. East Asian patients have lower baseline AP activity (−46%), which may reflect population differences in complement biology but does not alter the therapeutic target or dosing. The model provides a quantitative framework for future dose optimization in special populations (e.g., pediatrics, end-stage renal disease) and for evaluating danicopan in other complement-mediated disorders such as C3 glomerulopathy and IgA nephropathy.

---

### Strengths & Limitations

#### Strengths
- Large, diverse dataset spanning 14 clinical studies, 407 participants, and multiple formulations, food conditions, and patient populations (healthy volunteers and PNH patients)
- Regulatory-grade analysis directly informing FDA/EMA labeling decisions, providing real-world impact
- Mechanistically motivated PK model structure (zero-order release + first-order absorption) appropriate for the tablet formulation
- Comprehensive covariate evaluation covering demographics, renal/hepatic function, formulation, food status, and disease-specific factors
- PK–PD model links exposure to a clinically meaningful pharmacodynamic endpoint (AP activity) with a clear therapeutic target (IC90 = 108 ng/mL)
- Simulation-based dose justification stratified by food status provides direct support for label language
- pcVPCs stratified by food status provide appropriate model evaluation for the key regulatory question
- Transparent reporting of IIV, shrinkage, and RSE for all parameters

#### Limitations (Acknowledged by Authors)
- High-fat meal parameters (Ka, D1, Tlag) were fixed from a separate food-effect study rather than estimated in the population model, due to limited high-fat meal observations (n = 16)
- Model under-predicted PK at approximately 5 h post-dose under high-fat meal conditions
- AP activity data were only available from the phase 3 ALPHA study (n = 69), limiting the PK–PD dataset
- APH data were not collected in the phase 2 studies, precluding inclusion in the PK–PD analysis

#### Limitations (Expert Review)
- BLQ samples were excluded rather than handled with the M3 method; while the low BLQ rate (3.8%) minimizes bias, this is a methodological limitation
- No bootstrap confidence intervals reported for PK or PD parameters, limiting formal assessment of parameter uncertainty
- Very large IIV on Ka (268% CV) and IC50 (229% CV) suggests substantial unexplained variability that may not be fully captured by the model
- Sparse PK sampling in the phase 3 study (pre-dose and 2 h post-dose) limits characterization of the full concentration-time profile in PNH patients
- The direct inhibitory Emax model assumes instantaneous equilibration between plasma concentration and AP activity; a turnover or indirect response model was not evaluated, which could be relevant given the biological half-life of complement components
- Simulations used post hoc individual parameters rather than a full parametric uncertainty approach (e.g., sampling from the variance-covariance matrix), which may underestimate prediction uncertainty
- No pediatric data included; extrapolation to pediatric PNH patients would require additional modeling
- The Imax parameter (minimum AP activity = 3.05%) is estimated with good precision but its biological interpretation (floor of residual AP activity) is not fully discussed
- Exposure-response analyses for efficacy (hemoglobin response) and safety endpoints are referenced but not presented in this paper, limiting the integrated benefit-risk assessment

#### Generalizability
The findings are directly applicable to adult PNH patients receiving danicopan as add-on therapy to ravulizumab or eculizumab, which is the approved indication. The covariate effects (body weight, sex, renal function) are likely generalizable to other complement-mediated disorders where danicopan may be explored. However, the PK–PD model is specific to the AP activity endpoint in PNH patients on C5 inhibitors; the relationship between danicopan exposure and clinical outcomes (hemoglobin, transfusion independence) in other complement disorders would require separate characterization. The model may not be directly applicable to pediatric patients or those with end-stage renal disease (dialysis), as these populations were not well represented.

---

### Key Equations

**Apparent Clearance (CL/F) with Covariates**

$$
\frac{CL}{F_i} = 79.5 \times \left(\frac{BWT_i}{75}\right)^{0.645} \times \left[1 - 0.221 \times (\text{if Female})\right] \times \left[1 - 0.433 \times (\text{if severe RI})\right]
$$

Apparent oral clearance scaled allometrically by body weight (centered at 75 kg, exponent 0.645), reduced by 22.1% in female patients and by 43.3% in patients with severe renal impairment.

**Apparent Central Volume of Distribution (Vc/F) with Body Weight**

$$
\frac{V_c}{F_i} = 163 \times \left(\frac{BWT_i}{75}\right)^{0.876}
$$

Apparent central volume of distribution scaled allometrically by body weight with exponent 0.876, centered at the reference weight of 75 kg.

**Apparent Inter-compartmental Clearance (Q/F) with Body Weight**

$$
\frac{Q}{F_i} = 34.9 \times \left(\frac{BWT_i}{75}\right)^{0.645}
$$

Apparent inter-compartmental clearance scaled allometrically by body weight with the same exponent as CL/F (0.645), consistent with flow-limited distribution.

**Apparent Peripheral Volume of Distribution (Vp/F) with Body Weight**

$$
\frac{V_p}{F_i} = 232 \times \left(\frac{BWT_i}{75}\right)^{0.876}
$$

Apparent peripheral volume of distribution scaled allometrically by body weight with the same exponent as Vc/F (0.876).

**First-Order Absorption Rate Constant (Ka) with Formulation and Food**

$$
Ka_i = \left[1.58 \cdot (\text{if Tablet}) + 0.801 \cdot (\text{if LFC}) + 30.9 \cdot (\text{if Fasted})\right] \times e^{1.09 \cdot (\text{if HIFAT})}
$$

Absorption rate constant is formulation-specific (tablet vs. liquid-filled capsule) and markedly increased under fasting conditions; a high-fat meal further multiplies Ka exponentially.

**Zero-Order Release Duration (D1) with Formulation and Food**

$$
D_{1i} = \left[3.20 \cdot (\text{if Tablet}) + 1.70 \cdot (\text{if LFC})\right] \times e^{0.0787 \cdot (\text{if Fasted})} \times e^{-0.661 \cdot (\text{if HIFAT})}
$$

Duration of zero-order release is formulation-specific and modified by food status; a high-fat meal substantially shortens D1 (by ~48%), while fasting has a minimal effect.

**Relative Bioavailability (F) with Formulation, Dose, and Food**

$$
F_i = 1 \times 1.29 \cdot (\text{if LFC}) \times \left(\frac{\text{Dose}_i}{200}\right)^{-0.232} \times e^{-0.143 \cdot (\text{if Fasted})} \times e^{0.101 \cdot (\text{if HIFAT})}
$$

Relative bioavailability referenced to tablet formulation at 200 mg under standard meal conditions; LFC has 29% higher bioavailability, bioavailability decreases with increasing dose (non-linear absorption), and is modestly reduced under fasting and slightly increased with a high-fat meal.

**Absorption Lag Time (Tlag) for Tablet Formulation**

$$
Tlag_i = 0.278 \cdot (\text{if Tablet and Standard meal}) + 0.293 \cdot (\text{if Tablet and HIFAT})
$$

Absorption lag time applies only to the tablet formulation under fed conditions (standard meal or high-fat meal), with similar values of approximately 0.28–0.29 h.

**Baseline Alternative Pathway Activity (AP0) with Covariates**

$$
AP_{0i} = 29.1 \times \left(\frac{BWT_i}{69}\right)^{1.29} \times \left[1 - 0.460 \cdot (\text{if East Asian})\right]
$$

Baseline AP activity (% of normal) scaled allometrically by body weight (centered at 69 kg, exponent 1.29) and reduced by 46% in East Asian participants, reflecting population differences in complement biology.

**Inhibitory Emax PK–PD Model for AP Activity**

$$
AP_i = AP_{0i} - \left(AP_{0i} - 3.05\right) \times \frac{CONC_i}{12 + CONC_i}
$$

Direct inhibitory Emax model describing AP activity as a function of danicopan plasma concentration (CONC in ng/mL); IC50 = 12 ng/mL, minimum achievable AP activity (Imax floor) = 3.05%, yielding IC90 = 108 ng/mL.

---

### Figures & Tables

- **Figure 1**: Prediction-corrected visual predictive checks (pcVPCs) for the final population PK model stratified by food status: (A) standard meal, (B) fasted state, and (C) high-fat meal. Orange dashed lines show 95th, 50th, and 5th percentiles of model-predicted concentrations overlaid on observed data.
  - *Significance*: Primary model evaluation tool demonstrating that the population PK model adequately describes danicopan concentration-time profiles across all three food conditions. The acknowledged under-prediction at ~5 h post-dose under high-fat meal conditions is visible here and represents the main model misspecification.
- **Figure 2**: Forest plot showing the impact of covariates and dose on danicopan steady-state PK: (A) Cmax,ss, (B) Ctrough,ss, and (C) AUC24h,ss, expressed as ratios relative to a reference population (75 kg male, normal renal function, standard meal, 150 mg tid tablet).
  - *Significance*: Central figure for clinical interpretation of covariate effects; demonstrates that while statistically significant covariates (sex, body weight, renal impairment, food status) alter exposure, the magnitude of effects falls within a range not considered clinically meaningful for dose adjustment (with the exception of severe renal impairment per EMA guidance).
- **Figure 3**: Simulated steady-state (A) PK concentration-time profiles and (B) AP activity-time profiles for danicopan 150 mg and 200 mg tid regimens stratified by food status (fasted, standard meal, high-fat meal). Median and 95% prediction intervals shown.
  - *Significance*: Key simulation output supporting dose justification; visually demonstrates that both approved regimens maintain AP activity below 10% throughout the dosing interval regardless of food status, and that the IC90 threshold is exceeded at trough for the majority of patients.
- **Table 1**: Baseline demographic and clinical characteristics for all participants in the population PK dataset (healthy volunteers n=316, PNH patients n=91) and the ALPHA study PK–PD subset (n=69), including categorical variables (sex, race, renal function, formulation, food status) and continuous variables (age, weight, BMI, liver enzymes, renal function, hemoglobin, factor D).
  - *Significance*: Establishes the diversity of the modeling dataset and highlights key differences between healthy volunteer and PNH patient populations (e.g., lower hemoglobin, higher bilirubin, older age in PNH patients). Reveals the predominance of female healthy volunteers (84.5%) versus more balanced sex distribution in PNH patients, which is relevant for interpreting the sex covariate effect.
- **Table 2**: Final population PK model parameter estimates including fixed effects (CL/F, Vc/F, Q/F, Vp/F, Ka, D1, F, covariate coefficients), IIV (variance and % BSV), and residual error, with RSE and shrinkage for each parameter.
  - *Significance*: Complete parameter table enabling model reconstruction and providing precision estimates for all parameters. Notable findings include the large RSE for Ka (LFC) at 256% and large IIV on Ka (268% CV), indicating absorption parameter identifiability challenges.
- **Table 3**: Simulated steady-state PK (Cmax,ss, Ctrough,ss, AUC24h,ss) and PD (% participants with Ctrough,ss ≥ IC90, AP activity at trough) for 150 mg and 200 mg tid regimens under fasted, standard meal, and high-fat meal conditions, reported as median (2.5th–97.5th percentile) of 1000 simulated patients.
  - *Significance*: Primary simulation output table directly supporting the 'without regard to food' labeling claim and the two-tier dosing strategy. Shows that median AP activity at trough is < 5% for all regimen/food combinations, and that the 200 mg tid regimen provides a higher proportion of patients above IC90 (83–87% vs. 58–75% for 150 mg tid).
- **Table 4**: PK–PD model parameter estimates for the inhibitory Emax model, including AP0, IC50, Imax, covariate effects (body weight and East Asian ethnicity on AP0), IIV, and residual error with RSE and shrinkage.
  - *Significance*: Provides the quantitative PD parameter estimates underpinning the therapeutic target rationale. The large IIV on IC50 (229% CV) is a critical finding indicating substantial inter-individual variability in pharmacodynamic sensitivity that is not explained by measured covariates.

---

### Code & Reproducibility Assessment
No code or datasets are publicly available. The authors note that Alexion/AstraZeneca Rare Disease will consider requests for de-identified participant-level data from qualified academic investigators via a formal data request process (https://alexion.com/contact-alexion/medical-information). NONMEM 7.5 (ICON plc) and SAS 9.4 were used for modeling and data assembly, respectively. Sufficient model detail is provided in the manuscript (parameter estimates, equations, covariate structure) to allow reconstruction of the model by an experienced pharmacometrician, though the NONMEM control streams and datasets are not shared.

---

### Supplementary Materials
The manuscript references supplementary Table S1 (clinical study details including study identifiers, populations, doses, formulations, food conditions, and PD sampling schedules) and supplementary Figures S1–S3 (additional PK model diagnostic plots beyond the pcVPCs shown in Figure 1). These materials were not extracted in the current analysis but are described as supporting the model development and evaluation.

---

### Future Directions
Several important questions emerge from this work. First, formal exposure-response analyses for efficacy (hemoglobin, transfusion independence) and safety endpoints would complete the quantitative benefit-risk framework and are referenced but not presented here. Second, the large IIV on IC50 (229% CV) warrants investigation of additional PD covariates or biomarkers (e.g., factor D levels, PNH clone size, C3 deposition) that might explain variability in AP inhibition sensitivity. Third, pediatric PK–PD modeling is needed given that PNH can affect younger patients and danicopan's allometric scaling parameters suggest body weight will be an important dose determinant in children. Fourth, the model provides a foundation for exploring danicopan in other complement-mediated disorders (C3 glomerulopathy, IgA nephropathy, geographic atrophy), where the AP activity target and therapeutic threshold may differ. Fifth, the observation that East Asian patients have ~46% lower baseline AP activity raises interesting questions about population differences in complement biology that merit further investigation. Sixth, a formal model-based assessment of the 100 mg tid dose recommended by EMA for severe renal impairment would be valuable to confirm adequacy of AP inhibition in this subgroup. Finally, the potential for drug-drug interactions via complement pathway modulation (e.g., combined factor D and properdin inhibition) could be explored using the established PK–PD framework.

---

### Expert Commentary
This paper is a textbook example of how population PK–PD modeling supports regulatory decision-making for a rare disease drug. Several aspects deserve particular attention from a teaching perspective. First, the decision to fix high-fat meal absorption parameters from a dedicated food-effect study rather than estimate them in the population model is a pragmatic and defensible regulatory strategy when the main dataset has insufficient food-condition representation—but it should be clearly flagged as a source of unquantified uncertainty, which the authors do acknowledge. Second, the very large IIV on Ka (268% CV) is a common finding with oral absorption models and reflects the inherent complexity of gastrointestinal absorption; the zero-order release plus first-order absorption structure is a reasonable mechanistic approximation for a controlled-release tablet, but the high variability suggests the model is absorbing unexplained absorption variability into this parameter. Third, the choice of a direct inhibitory Emax model for AP activity is pragmatic given the sparse PK–PD data, but the assumption of instantaneous equilibration deserves scrutiny—complement factor D has a short half-life and AP activity responds rapidly to inhibition, so the direct model is likely adequate here. Fourth, the regulatory divergence between FDA (no dose adjustment for severe renal impairment) and EMA (100 mg tid recommended) illustrates how the same modeling data can lead to different regulatory conclusions depending on the agency's risk tolerance and labeling philosophy—a valuable teaching point for regulatory pharmacometricians. The field of complement pharmacology is rapidly evolving, with multiple factor D, factor B, and properdin inhibitors in development; this model provides a valuable benchmark for the quantitative target (IC90 for AP inhibition) that future complement inhibitors in PNH will need to meet.

---

### Bottom Line
This regulatory-grade population PK–PD analysis of danicopan provides a complete quantitative framework supporting the approved 150 mg and 200 mg tid dosing regimens for PNH. The key practical takeaways are: (1) the two-compartment model with zero-order release plus first-order absorption accurately characterizes danicopan PK across healthy volunteers and PNH patients; (2) while body weight, sex, severe renal impairment, formulation, and food status are statistically significant PK covariates, none require dose adjustment in the general PNH population (EMA recommends 100 mg tid for severe renal impairment); (3) the inhibitory Emax PK–PD model establishes IC90 = 108 ng/mL as the therapeutic target for near-complete AP inhibition, and both approved regimens achieve this target at median trough concentrations regardless of food status; and (4) the 200 mg tid escalation dose provides a meaningfully higher proportion of patients above IC90 (86% vs. 75% under standard meal conditions), providing quantitative justification for dose escalation in patients with inadequate clinical response. Pharmacometricians working in complement biology or rare hematologic diseases should note the large IIV on IC50 (229% CV) as an important unresolved source of PD variability that warrants further investigation with biomarker-driven covariate analyses.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: Final population PK model for (A) a standard meal, (B) fasted state, and (C) a high-fat meal. Orange dashed lines represent the 95th, 50th, and 5th percentiles o],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [FIGURE 2: Impact of covariates and dose on danicopan steady state; predicted median for (A) Cmax,ss, (B) Ctrough,ss, and (C) AUC24h,ss(5–95 percentile)a.aThe solid vertica],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 3: Simulated steady-state (A) PK and (B) AP for danicopan 150 mg and 200 mg regimens by food status. In panel A, black lines represent median values and gray region],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```