---
layout: post
title: "Population Pharmacokinetics and Exposure-Response Modeling for Evinacumab in Children, Adolescents, and Adults With Homozygous Familial Hypercholesterolemia."
date: 2026-11-27
authors: "Sébastien Bihorel, Robert Dingman, Jeanne Mendell, Yuhuan Wang, Poulabi Banerjee, Robert Pordy, John D. Davis, A. Thomas DiCioccio, Lutz Harnisch"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70016"
paper_type: popk
tags: [popk, dose-response, pediatrics]
excerpt_text: "This paper refines the published evinacumab PopPK and PK/PD models by adding children aged 5 to <12 years with HoFH and by explicitly modeling the lipoprotein apheresis (LA) effect on LDL-C. Simulations at 15 $mg/kg$ IV q4w show lower exposure in smaller and younger patients but similar or greater percent LDL-C reduction. It is useful for pharmacometricians working on pediatric extrapolation, TMDD-type mAb models and indirect response models."
pdf_path: "/assets/digests/2026-11-27-population-pharmacokinetics-and-exposure-response-modeling-for-evinacumab-in/PMx_Population_Pharmacokinetics_and_Exposure_20261127.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper refines the published evinacumab PopPK and PK/PD models by adding children aged 5 to <12 years with HoFH and by explicitly modeling the lipoprotein apheresis (LA) effect on LDL-C. Simulations at 15 $mg/kg$ IV q4w show lower exposure in smaller and younger patients but similar or greater percent LDL-C reduction. It is useful for pharmacometricians working on pediatric extrapolation, TMDD-type mAb models and indirect response models.

---

### Executive Summary
Using pooled data from seven studies (322 subjects: 183 phase 1 adults and 139 HoFH patients, including 20 children aged 5 to <12 years), the authors re-estimated a two-compartment PK model for evinacumab with parallel linear and Michaelis-Menten elimination. The model was re-parameterized with allometric scaling of clearances and volumes on time-varying body weight, with baseline ANGPTL3 and disease status acting on $V_{max}$. They then used a sequential PK/PD approach to extend an indirect response model in which evinacumab inhibits LDL-C production via a saturable $I_{max}$ model. A new first-order LDL-C elimination term driven by LA was added ($k_{aph}$ about $8.36$ $1/day$, roughly 60% LDL-C removal per 2.5 h session). Older age lowered baseline LDL-C, and higher body weight lowered $I_{max}$. Simulations of 15 $mg/kg$ IV q4w showed that median $C_{min}$ at week 40 falls with age ($222$, $189$ and $167$ $mg/L$ for adults, adolescents and children). The predicted median $\%\Delta$LDL-C at week 24 rose in the same order, at 56.0%, 59.6% and 67.9%. About 60% of virtual patients reached LDL-C <130 $mg/dL$ and 68.8% achieved >50% LDL-C reduction. The work supports the pediatric dose rationale and offers a framework for extrapolation to patients younger than 5 years.

---

### Scientific Context & Motivation
HoFH is an ultra-rare disease with very high LDL-C and early ASCVD, in which many patients do not reach LDL-C goals even on multiple LLTs, particularly children for whom high doses are contraindicated. Evinacumab inhibits ANGPTL3 and lowers LDL-C independently of LDLR. A previous PopPK/PK-PD analysis covered only patients aged 12 years and older. Open questions were how the PK and LDL-C response of evinacumab extend to children aged 5 to <12 years, how age and body weight affect the PK/PD relationship, and how much of the observed LDL-C lowering is attributable to concomitant LA, which is more commonly used in pediatric patients. Ultra-rare disease populations make dedicated pediatric dose-finding impractical, so model-informed extrapolation across age and weight is the main way to generate evidence. This work addresses these gaps by pooling pediatric, adolescent and adult data into a single mechanistic framework.

---

## ⚡ Methodological Snapshot
The analysis pooled data from seven clinical studies (phase 1 adults and HoFH children, adolescents and adults) to re-estimate and refine a previously published PopPK model for total evinacumab, a two-compartment model with first-order SC absorption and parallel linear and Michaelis-Menten elimination. Refinements included re-parameterization to clearances and volumes with allometric scaling on time-varying body weight, and retention of ANGPTL3 and HoFH status effects on $V_{max}$. Estimation used NONMEM 7.5.0 (FOCEI or IMPMAP) via PsN, with data handling in SAS and R diagnostics.

The PD model was refined using a sequential approach, with post hoc PK parameters from the final PK model driving an indirect response model in which evinacumab inhibits LDL-C production ($k_{in}$) via a saturable $I_{max}$ model. A new LDL-C elimination term ($k_{aph}$) was introduced to represent LA. Covariate analysis was limited to the effect of age on PK/PD parameters, in addition to retained effects such as body weight and race on $I_{max}$.

Evaluation included GOF, study-specific VPCs with 1000 replicates (including BLQ percentages), and a 1000-replicate nonparametric bootstrap. mrgsolve was used for simulations: typical-value covariate effect (tornado) analyses, post hoc exposure and response summaries by age and weight, and stochastic simulations of 3000 virtual HoFH patients generated using CDC growth models, with guideline-based goal attainment evaluation at week 24.

---

## 🏗️ Structural Model Breakdown
PK: depot ($A_1$) -> central ($A_2$) with $k_a$ and $F$ after SC; IV input directly to central. Central volume $V_c$, peripheral volume $V_p$, distribution clearance $Q$. Elimination from central by linear clearance $CL$ and nonlinear Michaelis-Menten ($V_{max}$, $k_m$). Linear parameters scaled to body weight using allometric exponents (including an exponent on $Q$ estimated with $\%RSE$ 34.2%). $V_{max}$ is modified by baseline ANGPTL3 and by disease status (phase 1 vs HoFH). Typical estimates for the structural parameters are in Table 2. PK/PD: LDL-C is produced at rate $k_{in}$ and eliminated by first-order $k_{out}$ (baseline LDL-C = $k_{in}/k_{out}$). Evinacumab inhibition of $k_{in}$ follows $I_{max} \cdot C/(IC_{50}+C)$, with $I_{max}$ influenced by body weight. A second first-order elimination ($k_{aph} = 8.36$ $1/day$) is switched on during LA sessions of about 2.5 h, delivering approximately 60% LDL-C removal per session. Baseline LDL-C is a function of age. IIV is included on baseline LDL-C, $I_{max}$ and other PD parameters; the shrinkage of one IIV term is 44.2%. Residual error is constant CV plus additive.

---

### Detailed Methodological Analysis

#### Modeling Approach
PopPK: two-compartment model with first-order SC absorption ($k_a$, $F$) and parallel linear ($CL$) and Michaelis-Menten ($V_{max}$, $k_m$) elimination from the central compartment, with distribution clearance $Q$. Disposition parameters ($CL$, $Q$, $V_c$, $V_p$) are allometrically scaled with time-varying body weight. $V_{max}$ depends on baseline ANGPTL3 and disease status (non-HoFH vs HoFH). PK/PD: indirect response model for LDL-C in which evinacumab inhibits $k_{in}$ through $I_{max} \cdot C/(IC_{50}+C)$, with $k_{out}$ for first-order elimination and a second first-order elimination term $k_{aph}$ active during LA sessions. Sequential PK/PD using Bayesian post hoc PK estimates. Software: NONMEM 7.5.0, PsN 4.6.0, R 4.2.1, SAS 9.4, mrgsolve 1.0.6.

#### Data Sources
Seven clinical studies (NCT01749878, NCT02107872, NCT03146416, NCT02265952, NCT03399786, NCT03409744, NCT04233918): 183 phase 1 adults with elevated TG and/or LDL-C and 139 HoFH patients (20 aged 5 to <12, 14 aged 12 to <18, 105 adults). IV doses 5-20 $mg/kg$ and SC doses 75-450 mg, single or repeated. 5085 quantifiable and 613 BLQ total evinacumab concentrations were used; 3316 LDL-C measurements from 139 HoFH patients (age 5-75 years) were used for PK/PD. Total evinacumab and total ANGPTL3 were measured by ELISA (LLOQ 0.078 and 0.0195 $mg/L$). LDL-C was calculated (Friedewald) or measured by beta quantification. HoFH patients received background LLTs, with 42% receiving LA (weekly, bi-weekly or monthly). Four patients with non-responding LDL-C profiles were excluded from PK/PD analysis.

#### Estimation Methods
FOCE with interaction or Monte-Carlo importance sampling assisted by MAP (IMPMAP) in NONMEM 7.5.0 via PsN 4.6.0. BLQ concentrations were included in the PK dataset (613 records; handling described in the Supporting Information, ~ likely a likelihood-based approach, though details were not available in the text). Constant CV plus additive residual error models. IIV on $CL$, $V_c$, $V_{max}$ and other parameters, with covariance between selected IIVs. Missing data and imputations described in the Supporting Information.

#### Model Evaluation
Convergence of estimation and covariance steps, parameter precision ($\%RSE$), physiological plausibility of parameters, and GOF plots (no trends). Study-specific VPCs (n = 1000 replicates; 5th, 50th, 95th percentiles of observed data compared to 90% CI of simulated percentiles), including comparison of the percentage BLQ for PK. Nonparametric bootstrap (n = 1000) for parameter precision. Shrinkage reported for IIV terms (PK: 3-16%; PK/PD up to 44.2%). Specific VPC for the 5 to <12 years group shows good predictive performance.

#### Covariate Analysis
PK covariates retained from the previous model (ANGPTL3 and disease status on $V_{max}$) with allometric body weight scaling on clearances and volumes. PK/PD covariate analysis was limited to testing age effects on PK/PD parameters, plus retaining prior effects (body weight and race on $I_{max}$). Final PK/PD covariates: age on baseline LDL-C (older age, lower baseline) and body weight on $I_{max}$ (higher weight, lower $I_{max}$). Clinical relevance evaluated through tornado plots using extreme covariate values (Figure 2): weight had the strongest effect on exposure (0.63-1.28) and $\%\Delta$LDL-C (1.17-0.628), whereas ANGPTL3 and disease status were minor (0.824-1.14).

---

### Statistical Rigor Assessment
The sample is large for an ultra-rare disease, but only 20 children and 14 adolescents inform pediatric parameters. Estimation with IMPMAP/FOCEI is appropriate. Bootstrap (n = 1000) and VPCs by study offer reasonable evaluation. Most RSEs are acceptable, but some elements show weakness: $Q$ allometric exponent (34.2% RSE), PK additive residual error (39.7%), PK/PD additive residual error (103%), IIV shrinkage up to 44.2% in PK/PD, and discrepancies between point estimates and bootstrap medians for several parameters. Sequential PK/PD ignores PK uncertainty. Sensitivity analyses for imputation and BLQ handling are not visible in the main text (see Supporting Information). Simulation results carry broad prediction intervals (about ±25% in $\%\Delta$LDL-C), and adherence is assumed to be perfect, leading to slight overprediction. Overall, the rigor is adequate for the purpose but pediatric inference is limited by sample size.

---

## 📊 Key Findings
PK: A two-compartment model with first-order absorption after SC dosing and parallel linear plus nonlinear (Michaelis-Menten) elimination described total evinacumab from 5085 quantifiable and 613 BLQ records. Linear parameters were allometrically scaled on time-varying body weight. Baseline ANGPTL3 and disease status (non-HoFH vs HoFH) influenced $V_{max}$. Parameter precision was generally good ($\%RSE$ up to 28.1%), except the allometric exponent on $Q$ (34.2%) and the additive residual error (39.7%). Covariate impact on exposure at 15 $mg/kg$ q4w was small for ANGPTL3 and disease status (ratios 0.824-1.14) but larger for body weight across 19.7-152 kg (ratios 0.63-1.28). PK/PD: The 3316 LDL-C measurements from 139 HoFH patients were described by an indirect response model with $I_{max}$ inhibition of $k_{in}$ and a separate LA-driven elimination ($k_{aph} = 8.36$ $1/day$), giving about 60% LDL-C reduction per typical 2.5 h session. Baseline LDL-C was lower with older age, and $I_{max}$ decreased with increasing body weight. $\%\Delta$LDL-C ratios ranged from 1.17 to 0.628 over the weight range and 1.18 to 0.959 over ages 5-75. Simulations: Post hoc medians showed $C_{min,wk40}$ of 222, 189 and 167 $mg/L$ in adults, adolescents and children. Median $\%\Delta$LDL-C at week 24 was 56.0%, 59.6% and 67.9% in the same groups. Weight-based medians went from 69.4% (<35 kg) to 48.0% (>=80 kg). Accumulation ratio was about 2 across groups. In 3000 virtual HoFH patients, 60.2% reached LDL-C <130 $mg/dL$ and 68.8% reached >50% reduction (84.6% in children, 53.4% in adults). In adults, 26.5% reached <70 $mg/dL$ and 48.4% reached <100 $mg/dL$. Predicted variability in $\%\Delta$LDL-C was large (90% PI about ±25% around the median). The authors concluded that lower exposure in younger and lighter patients does not compromise LDL-C response at 15 $mg/kg$.

---

## 💡 Clinical & Regulatory Implications
The analysis supports weight-based dosing of 15 $mg/kg$ IV q4w across ages 5 to 75 years: although exposure is lower in smaller patients (e.g., $C_{min}$ 167 $mg/L$ in children vs 222 $mg/L$ in adults), exposures remain on the plateau of the $I_{max}$ relationship, and LDL-C response is at least comparable. Predicted goal attainment is 84.6% for >50% LDL-C reduction in children and 56.4-56.7% for absolute LDL-C goals in children/adolescents, so guideline-defined targets are achievable in most patients, but a sizeable minority do not respond adequately, reflecting high between-patient variability and indicating a need for monitoring and combination with other LLTs or LA. Evinacumab effect on LDL-C appears independent of LA status while LA removes ~20% of evinacumab, so clinical dose adjustment for LA does not seem warranted based on these data. The model offers a quantitative basis for regulatory pediatric extrapolation (e.g., EU label from 6 months, US label from 5 years) and may support extrapolation to children below 5 years, with the caveat that it was not validated for this age group.

---

### Strengths & Limitations

#### Strengths
- Pooled seven studies across healthy hyperlipidemic adults and HoFH children, adolescents and adults, giving a continuous age/weight range (19.7-152 kg, 5-75 years)
- Allometric scaling on time-varying body weight rather than baseline weight, which suits growing pediatric patients
- Mechanistic indirect response PK/PD model that separates evinacumab and LA effects, with a $k_{aph}$ estimate consistent with literature (~60% LDL-C removal per session)
- Sequential PK/PD approach using Bayesian PK estimates with a clear rationale; ANGPTL3 and disease status handled on $V_{max}$ in a TMDD-like fashion
- Evaluation was broad: GOF, study-specific VPCs including BLQ percentages, and 1000-sample nonparametric bootstrap
- Clinically oriented simulations with virtual populations built from CDC growth models, translated into guideline-based LDL-C goal attainment
- Model code, an example dataset and imputation methods are given in the Supporting Information

#### Limitations (Acknowledged by Authors)
- Model slightly overpredicts $\%$LDL-C reduction, possibly due to an idealized scenario of perfect adherence to evinacumab and LA schedules in simulations
- Children received LA at a 15-20% higher rate than adults, but virtual-patient LA frequency was sampled from the overall population average (a conservative assumption)
- Four patients (two adults, two children) with increasing LDL-C despite documented compliance were excluded from the PK/PD analysis
- Evinacumab removal by LA (~20%) and ANGPTL3 removal (~50%) are based on data on file; the model does not explicitly describe LA effects on evinacumab PK

#### Limitations (Expert Review)
- Only 20 children (and 14 adolescents) contributed data, so age-related findings are heavily driven by few patients and by weight-based extrapolation; age and weight are highly collinear and difficult to separate
- The additive residual error in the PK/PD model had $\%RSE$ of 103%, and IIV shrinkage in one PK/PD parameter was 44.2%, which limits post hoc-based inferences and simulation-based conclusions
- The PK/PD analysis was sequential, so PK uncertainty is not propagated to PD parameters
- The LDL-C response may be affected by background LLTs (statins, ezetimibe, PCSK9 inhibitors) and their changes over time, which do not appear to have been modeled explicitly
- Simulated goal attainment relies on virtual populations assuming CDC growth curves and a baseline LDL-C distribution taken from a small sample, with large uncertainty in the tails
- Bootstrap medians deviated from point estimates for some parameters (e.g., $V_{max}$-related and variance terms), suggesting limited information and some estimation instability
- Total (not free) evinacumab and total ANGPTL3 were measured, so TMDD parameter interpretation is empirical rather than fully mechanistic
- Authors are all company employees and the work was sponsor-funded, which should be borne in mind when interpreting the favorable conclusions

#### Generalizability
Findings are applicable to HoFH patients aged 5 years and older receiving 15 $mg/kg$ IV q4w alongside background LLTs, with or without LA. Extrapolation to children under 5 years, as suggested by the authors, is a model-based assumption not directly supported by data. Application to other diseases or populations with different ANGPTL3 and LDL-C dynamics should be cautious, and findings related to SC dosing mostly rely on adult phase 1 and a few HoFH patients.

---

---

### Figures & Tables

- **Table 1**: Baseline demographics and clinical characteristics of the pooled analysis population (n = 322; 183 phase 1 participants, 139 HoFH patients), including age groups, weight, ANGPTL3, LDL-C, dose, statin and LA use
  - *Significance*: Shows how few children (n = 20) and adolescents (n = 14) contribute data, and the heterogeneity between phase 1 and HoFH populations (e.g., mean LDL-C 131 vs 272 $mg/dL$), which frames the interpretability of covariate effects
- **Figure 1**: Schematic of the final model: SC depot, central and peripheral compartments with linear ($CL$) and Michaelis-Menten ($V_{max}$, $k_m$) elimination, linked to an indirect response model with $I_{max}/IC_{50}$ inhibition of $k_{in}$ and elimination of LDL-C by $k_{out}$ and $k_{aph}$ (apheresis)
  - *Significance*: Summarizes the structure of the combined PK and PK/PD model, including the new LA elimination pathway
- **Table 2**: Final PopPK parameter estimates with %RSE and bootstrap median (95% CI), including IIV, covariance and residual variability
  - *Significance*: Documents parameter precision (RSE mostly <28%, except $Q$ exponent at 34.2% and additive error at 39.7%) and shrinkage, which is relevant for evaluating reliability of post hoc exposure estimates
- **Table 3**: Final PK/PD parameter estimates (baseline LDL-C, age and weight effects, $IC_{50}$, $k_{aph}$ and others) with %RSE and bootstrap results
  - *Significance*: Provides the quantitative basis for the LA elimination rate ($8.36$ $1/day$) and age/weight covariate effects, and flags poor precision of the additive residual error (RSE 103%) and shrinkage of 44.2% for one IIV
- **Figure 2**: Tornado plots of covariate effects (ANGPTL3, weight, disease status, age) on post hoc steady-state $C_{max}$, $C_{min}$, AUC (wk36-40) and $\%\Delta$LDL-C at week 24, relative to a 43-year-old HoFH reference patient (74.1 kg, ANGPTL3 0.08 $mg/L$)
  - *Significance*: Shows that body weight is the most important covariate for exposure (ratios 0.63-1.28) and $\%\Delta$LDL-C (1.17-0.628), while ANGPTL3 and disease status are clinically minor
- **Table 4**: Post hoc predicted $\%\Delta$LDL-C at week 24 and steady-state exposure metrics ($C_{max}$, $C_{min}$, AUC, accumulation ratio) by age and weight group following 15 $mg/kg$ IV q4w
  - *Significance*: Central quantitative result: exposure falls in younger and lighter patients ($C_{min}$ 167 vs 222 $mg/L$) while $\%\Delta$LDL-C increases (67.9% vs 56.0%)
- **Table 5**: Simulated percentage of 3000 virtual HoFH patients achieving guideline LDL-C goals (<70, <100, <110, <130 $mg/dL$, and >50% reduction) at week 24 by age and weight
  - *Significance*: Translates model predictions to clinical goal attainment, showing that children are more likely to reach >50% reduction (84.6%) while adults more often reach absolute targets

---

### Code & Reproducibility Assessment
NONMEM code for the refined PK model (Code 1) and PK/PD model (Code 2), a sample of the NONMEM dataset (Table S2), and imputation and random-sampling methods are provided in the Supporting Information, which supports reproducibility. The full clinical datasets are not public. Software included NONMEM 7.5.0, PsN 4.6.0, R 4.2.1, mrgsolve 1.0.6 and SAS 9.4. Supplementary materials were not available in the text for this digest, so I could not verify the code.

---

### Future Directions
Extend the models to children under 5 years using sparse pediatric data and compare with model-based predictions. Evaluate fully integrated (simultaneous) PK/PD estimation or Bayesian approaches to propagate PK uncertainty, and explicitly model the impact of LA on evinacumab and ANGPTL3 concentrations. Explore time-varying background LLT effects and growth-related changes in baseline LDL-C and $k_{in}$. Consider free-target or ANGPTL3 turnover mechanistic (TMDD) modeling to substantiate the nonlinear elimination. Incorporate other lipid endpoints (TG, non-HDL-C, apoB) and long-term clinical outcomes or imaging surrogates. Evaluate dose individualization and response-guided strategies, as well as pediatric patients with other causes of severe hypercholesterolemia.

---

### Expert Commentary
This is a solid example of model-informed pediatric development in an ultra-rare disease. The authors do several things right: time-varying weight for allometry, explicit separation of LA and drug effect, and a goal-attainment analysis tied to guidelines. The counterintuitive result, with lower exposure but greater percent LDL-C reduction in children, is explained mostly by higher baseline LDL-C, lower body weight giving higher $I_{max}$, and a saturated $I_{max}$ effect (concentrations of 100s of $mg/L$ far exceed $IC_{50}$). It is important to teach that percent change as an endpoint is influenced by baseline, and that absolute LDL-C goals show the opposite pattern (adults attaining absolute goals more often), as seen in Table 5. I would be wary of over-interpreting the age/weight covariate effects on $I_{max}$ given 20 children, collinearity, and shrinkage. The additive residual error in the PK/PD model with $\%RSE$ of 103% suggests the data support only a proportional error. The sequential approach is acceptable here because PK is well characterized with high-quality data, but a simultaneous or at least a bootstrap-with-uncertainty simulation strategy would improve rigor. Regulatory teams will find the structure of the extrapolation to <5 years useful, though confirmatory data would be expected. Overall, a good reference for pediatric mAb PopPK/PD with disease-specific complications such as apheresis.

---

### Bottom Line
The refined evinacumab PopPK and PK/PD models describe exposure and LDL-C response across ages 5 to 75 years and separate the LA contribution, supporting the use of 15 $mg/kg$ IV q4w in children despite lower exposures in smaller patients. Pharmacometricians can use this work as a template for pediatric extrapolation with allometric time-varying weight scaling, TMDD-like elimination and indirect response PD for rare diseases. The simulations show that younger patients are predicted to achieve at least as large a percent LDL-C reduction as adults, but be aware of the small pediatric dataset, high IIV and shrinkage, and the sequential approach. Extrapolation to children under 5 years should be treated as hypothesis-generating until verified by data.

---

---

## 📊 Figures

![Schematic representation of the final model for evinacumab PK and effect on LDL-C. A1, amount of evinacumab in the depot compartment; A2, amount of evinacumab in the cent]({{ site.baseurl }}/assets/digests/2026-11-27-population-pharmacokinetics-and-exposure-response-modeling-for-evinacumab-in/figures/fig_01.jpg)

![Tornado plots showing the effect of statistically significant covariates on post hoc steady-state estimates of evinacumab exposures: (a)Cmax,wk36–40, (b)Cmin,wk40, (c) AU]({{ site.baseurl }}/assets/digests/2026-11-27-population-pharmacokinetics-and-exposure-response-modeling-for-evinacumab-in/figures/fig_02.jpg)