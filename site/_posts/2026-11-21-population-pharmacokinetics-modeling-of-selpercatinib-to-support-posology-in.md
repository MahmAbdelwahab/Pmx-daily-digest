---
layout: post
title: "Population Pharmacokinetics Modeling of Selpercatinib to Support Posology in Pediatric Patients With RET-Altered Metastatic Thyroid Cancer or Solid Tumors."
date: 2026-11-21
authors: "Dan Liu, Jan-Stefan van der Walt"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70042"
paper_type: popk
tags: [popk, pediatrics, oncology, regulatory]
excerpt_text: "An updated 2-compartment popPK model for selpercatinib, built on 830 adult and pediatric patients (only 6 under 12 years), was used with NHANES-based simulations to derive an exposure-matching pediatric regimen for ages 2-17 years. Worth reading for pediatric oncology extrapolation and exposure-matching MIDD case studies, especially the approach to sparse data in very young children and the handling of an age effect on $CL/F$."
pdf_path: "/assets/digests/2026-11-21-population-pharmacokinetics-modeling-of-selpercatinib-to-support-posology-in/PMx_Population_Pharmacokinetics_Modeling_of__20261121.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
An updated 2-compartment popPK model for selpercatinib, built on 830 adult and pediatric patients (only 6 under 12 years), was used with NHANES-based simulations to derive an exposure-matching pediatric regimen for ages 2-17 years. Worth reading for pediatric oncology extrapolation and exposure-matching MIDD case studies, especially the approach to sparse data in very young children and the handling of an age effect on $CL/F$.

---

### Executive Summary
The authors updated a previously developed adult popPK model of selpercatinib (2-compartment disposition, sequential zero- and first-order absorption, allometric weight scaling) using 8024 concentrations from 830 patients in LIBRETTO-001 (mostly adults) and LIBRETTO-121 (pediatric/young adult, 27 patients). The final model kept the adult covariates (weight via fixed allometry, dose on $CL/F$, Asian race on relative bioavailability) and dropped a statistically significant age effect on $CL/F$ because it biased pediatric predictions, notably underprediction at C1D8. Simulating NHANES-sampled children against an adult 160 mg BID reference ($C_{max}$ and $AUC_{0-24}$ at C1D8), the authors showed that adapted flat dosing (120 mg BID $<50$ kg, 160 mg BID $\geq 50$ kg) matches adult exposure only in patients $\geq 12$ years, and that BSA-based dosing of $mg/m^2$ slightly underexposes children aged about 2-3 years. A modified regimen with 40 mg TID for BSA $0.33$-$0.65$ $m^2$, BSA-based capsule-rounded dosing for 2 to $<12$ years, and weight-based dosing for adolescents $\geq 12$ years was proposed and, per the authors, accepted by the FDA for patients aged 2 years and older. It is a pragmatic MIDD example in which sparse pediatric data were leveraged with an allometric adult model to support a label.

---

### Scientific Context & Motivation
Selpercatinib is a selective RET inhibitor approved in adults for RET-altered thyroid, lung, and other solid tumors and in adolescents $\geq 12$ years for thyroid cancer. Pediatric patients under 12 years had no approved RET-targeted therapy, and pediatric trial data are inherently limited (rare tumors, small enrollment, sparse sampling). No exposure-response therapeutic window has been established, so the practical approach is to match pediatric exposure to adult exposure at the approved 160 mg BID dose. The knowledge gaps are whether adult-derived PK, including allometric scaling, adequately describes children, whether dosing by BSA, flat weight bands, or a mix gives adult-equivalent exposure, and how to handle very small patients (BSA $< 0.66$ $m^2$) with capsule strengths of 40 and 80 mg. Maturation of CYP3A4, the main metabolic pathway, adds uncertainty below about 2 years, and the study lacks data in that age range.

---

## ⚡ Methodological Snapshot
An existing adult popPK model of selpercatinib (2-compartment, sequential zero-/first-order absorption, IIV on $CL$, $V_c$, $k_a$, and duration, fixed allometric weight scaling) was re-estimated on pooled data from LIBRETTO-001 (adults, dose 20-240 mg) and LIBRETTO-121 (BSA-based pediatric dosing). A new covariate search (SCM, forward $p<0.05$ and backward $p<0.001$ with refinement) assessed weight, age, race, dose, sex, renal and hepatic function, and concomitant medications.

Model adequacy was evaluated by GOF plots and pcVPCs conditioned on study and visit, with emphasis on steady-state pediatric data. Simulations of 1000 replicates used the final model in children sampled from NHANES DXA (6 months to $<18$ years), comparing C1D8 $C_{max}$ and $AUC_{0-24}$ with adult exposure at 160 mg BID across candidate regimens (BSA-based, adapted flat, and a modified regimen). Software: NONMEM 7.5.0 (FOCE-I), PsN 5.3.0, and R 4.2.1.

---

## 🏗️ Structural Model Breakdown
Drug is absorbed from the gut through a zero-order input of duration $Dur$ (1.09 h) followed by first-order absorption ($k_a$ 1.47 $1/h$), with relative bioavailability $F_1$ fixed to 1 (adjusted by +18.3% for Asian race). Disposition is described by a central compartment ($V_c/F$ 99.6 L) and a peripheral compartment ($V_p/F$ 91.3 L) exchanging with $Q/F$ 29.6 $L/h$; elimination from the central compartment is via $CL/F$ 6.04 $L/h$. All parameters are referenced to 70 kg with allometric exponents of 0.75 ($CL/F$, $Q/F$) and 1 ($V_c/F$, $V_p/F$). Dose is a covariate on $CL/F$ (-0.321% per mg), reflecting modestly nonlinear (decreased apparent clearance at higher dose) kinetics. IIV (CV) was 48.8% on $CL$, 66.1% on $V_c$, 63.6% on $k_a$, and 56.2% on duration, with residual error being additive (61.5) plus proportional (25.3%). The model is shown schematically in Figure 1; no maturation function was included.

---

### Detailed Methodological Analysis

#### Modeling Approach
Two-compartment disposition with sequential zero-order (duration) and first-order absorption ($k_a$), extending a prior adult model. Interindividual variability on $CL/F$, $V_c/F$, $k_a$, and duration; combined additive and proportional residual error. Weight normalized to 70 kg with fixed exponents (0.75 on $CL/F$ and $Q/F$; 1 on $V_c/F$ and $V_p/F$). Dose effect on $CL/F$ handled as a time-varying covariate. Software: NONMEM 7.5.0, PsN 5.3.0, R 4.2.1.

#### Data Sources
LIBRETTO-001 (NCT03157128; adults and adolescents $\geq 12$ years where allowed; phase 1 doses from 20 mg QD to 240 mg BID; phase 2 at 160 mg BID) and LIBRETTO-121 (NCT03899792; age 6 months-21 years; BSA-based dosing starting at the adult-equivalent 160 mg BID; 92 $mg/m^2$ not exceeding 160 mg BID). 830 patients (803 + 27), 8024 concentrations (7723 + 301); 133 BQL values (LLOQ 1 ng/mL) excluded. Sparse sampling: LIBRETTO-001 at C1D8 (predose, 1, 2, 4, 8 h) with occasional C1D1/C3D1/C5D1 samples; LIBRETTO-121 at 2 and 4 h on C1D1 and full profile on C1D8 and C3D1. Only 6 patients $<12$ years (59 concentrations); no patients $<2$ years. Missing dosing times imputed for 2 patients. Data cut-off 13 January 2023.

#### Estimation Methods
FOCE with interaction in NONMEM 7.5.0 with PsN 5.3.0 for SCM. BQL observations were excluded rather than modeled.

#### Model Evaluation
Standard GOF plots (Figures S1, S2), ETA vs. starting dose (Figure S3), pcVPCs (1000 replicates) stratified by study and time point (C1D1, C1D8, C2 onward), plus pcVPCs by weight and age in pediatric patients (Figures S4-S5). Comparisons of models with an age effect on $CL/F$ were based on GOF and pcVPC in LIBRETTO-121 (Figures S6-S7). Simulation-based comparison with adult exposure for dose selection. Model parameter CIs are reported in Table 2; the bootstrap is not described.

#### Covariate Analysis
Candidates: baseline weight, age, Asian race, dose, sex, baseline creatinine clearance, ALT, AST, total bilirubin, and concomitant medications (CYP3A4 inhibitors/inducers, PPIs/H2-blockers as categorical). Weight allometry was predefined. Automated SCM with forward $p<0.05$ and backward $p<0.001$, followed by model reduction. Final covariates: weight (allometry), dose on $CL/F$, Asian race on relative bioavailability. An age effect on $CL/F$ (linear or segmented linear, OFV drop about 44-50) was excluded because it caused biased pediatric predictions and underprediction at C1D8. Drug-drug interaction covariates could not be assessed in children since they were essentially absent in LIBRETTO-121.

---

### Statistical Rigor Assessment
The large adult dataset gives precise typical values (narrow CIs for $CL$, $V_p$, duration), while parameters informed by sparse sampling ($V_c$, $k_a$, $Q$) are less precise. Pediatric inference is limited by 27 patients (6 under 12 years) and one pediatric study. Shrinkage is acceptable for $CL$ (3.5%) but high for $k_a$ (57.8%) and duration (49.2%), reducing the reliability of EBE-based plots of individual absorption. BQL data were excluded (1.6%), which may bias low concentrations. The age covariate analysis reflects good judgment: OFV drops of about 44-50 were set against evidence of bias in the target population. pcVPCs are appropriate but only qualitative; no numerical predictive-performance metrics, bootstrap, or NPDE are reported in the main text. Simulations used 1000 replicates with NHANES-sampled anthropometrics, but it is not stated whether parameter uncertainty was propagated. Sensitivity analyses for allometric exponents or maturation are not presented.

---

## 📊 Key Findings
The final model had a 2-compartment disposition with sequential zero-order (duration 1.09 h) and first-order ($k_a$ 1.47 $1/h$) absorption. Population estimates (70 kg standardized, Table 2) were $CL/F$ 6.04 $L/h$ (95% CI 5.79-6.29), $V_c/F$ 99.6 L, $V_p/F$ 91.3 L, and $Q/F$ 29.6 $L/h$. IIV was 48.8% for $CL$, 66.1% for $V_c$, 63.6% for $k_a$, and 56.2% for duration, with shrinkage of 3.5%, 32.0%, 57.8%, and 49.2% respectively; the proportional RUV was 0.253. Dose had a small negative effect on $CL/F$ (-0.321%/mg), and Asian race was associated with 18.3% higher relative bioavailability. Only 6 patients under 12 years contributed 59 concentrations. pcVPCs (Figure 2) showed good capture of the central tendency and the 2.5th/97.5th percentiles in LIBRETTO-121 for C1D8 and C2D1 onward. Age as a $CL/F$ covariate lowered OFV substantially (about -44 linear, -50 segmented) and raised typical $CL/F$ from 5.94 to 7.30 $L/h$, but it induced biased population predictions and underprediction in children at C1D8, so it was removed. Simulations (Figure 3) showed that adapted flat dosing matches adult exposure only for $\geq 12$ years and exceeds adult $C_{max}$ and $AUC_{0-24}$ in younger children, while rounded BSA-based dosing (92 $mg/m^2$) approximates adult exposure but is slightly lower at ages 2-3 years. The modified regimen (Table 3) of 40 mg TID for BSA $0.33$-$0.65$ $m^2$, 80 mg BID for $0.66$-$1.08$ $m^2$, 120 mg BID for $1.09$-$1.52$ $m^2$, and 160 mg BID for $\geq 1.53$ $m^2$ in children 2 to $<12$ years, with weight-based dosing for $\geq 12$ years, matched adult exposure across ages 2-17 years (Figure 4). Dosing below BSA $0.33$ $m^2$ is not recommended.

---

## 💡 Clinical & Regulatory Implications
The modeling supported a posology for pediatric patients aged 2 years and older that was approved by the FDA (29 May 2024): 120 mg BID $<50$ kg or 160 mg BID $\geq 50$ kg for patients $\geq 12$ years; and BSA-based dosing for 2 to $<12$ years of 40 mg TID (BSA $0.33$-$0.65$ $m^2$), 80 mg BID ($0.66$-$1.08$ $m^2$), 120 mg BID ($1.09$-$1.52$ $m^2$), and 160 mg BID ($\geq 1.53$ $m^2$). Dosing is not recommended for BSA $< 0.33$ $m^2$. Simple weight-based flat dosing is not appropriate for younger children because it overexposes them relative to adults. Clinicians should recognize that exposure targets were defined by adult matching rather than an exposure-response relationship, that very young children ($<2$ years) have no supporting data, and that interacting drugs (CYP3A4 modulators, acid-reducing agents) were not studied in pediatric patients and should be handled by following adult labeling. The work is a regulatory example of MIDD-supported pediatric extrapolation with an accelerated approval.

---

### Strengths & Limitations

#### Strengths
- Large combined dataset (8024 observations, 830 patients) allows precise estimation of adult-driven parameters and joint modeling across ages
- Builds on a previously validated adult model with allometric scaling using fixed exponents (0.75 for $CL$ and $Q$, 1 for volumes), a mechanistically and regulatory-accepted approach for pediatric extrapolation
- Pragmatic and transparent decision-making on the age covariate: statistical significance was overridden by diagnostic evidence of bias in the pediatric data
- Pediatric-specific pcVPCs were stratified by study and visit with emphasis on steady-state C1D8 and C2D1 onward
- Simulation framework with a realistic NHANES-DXA anthropometric population and an explicit exposure-matching target ($C_{max}$ and $AUC_{0-24}$ relative to adults at 160 mg BID)
- Dosing regimen takes capsule strengths (40 and 80 mg) into account, and the approach led to an FDA-approved posology

#### Limitations (Acknowledged by Authors)
- Only 6 patients $<12$ years (59 concentrations) informed the model; interpretation should be cautious
- No patients $<2$ years of age in LIBRETTO-121 at the data cut; simulations for 6 months to 2 years should be interpreted cautiously, as the model may overpredict concentrations given immature CYP3A4
- No therapeutic range for efficacy or safety is established, so exposure matching to adults is the only target
- The effect of age on $CL/F$ could not be clinically evaluated given limited data in very young children

#### Limitations (Expert Review)
- The pediatric dataset is very small (27 patients, 301 observations) and sparse, so the allometric assumption cannot be tested empirically for young children; fixed 0.75 exponents may not hold for children under about 2 years, where maturation functions would normally be added
- Concomitant CYP3A4 inhibitors/inducers and acid-reducing agents were nearly absent in children but common in adults (34% and 46%), so drug-interaction effects (for example, the known PPI interaction) cannot be extrapolated to the pediatric population
- BQL data were excluded (133 observations, about 1.6%) rather than handled with M3/M6; given IIV shrinkage on $k_a$ and duration, bias is possible at trough/early times
- Shrinkage is high for $k_a$ (57.8%) and duration (49.2%), limiting use of empirical Bayes estimates for individual absorption characteristics, though Figure 3 uses EBE-based individual predictions
- The model was simulated with parameter point estimates; it is unclear whether parameter uncertainty was propagated to the predicted exposure distributions or whether the age effect was explored in a sensitivity simulation
- Bootstrap results and formal model qualification metrics (NPDE, RSE) are not shown in the main text; the evaluation relies mainly on GOF and pcVPCs
- Formulation changes, food effect, and pediatric-specific absorption (for example, capsule contents sprinkled or administered through a tube) were not examined
- Exposure-matching to adult $C_{max}$ and $AUC_{0-24}$ on C1D8 ignores accumulation and exposure variability at later cycles, and adult reference ranges depend on the NHANES-simulated adult weight distribution
- The adult reference compares simulations to simulations, not observed pediatric exposures, in the majority of the age range

#### Generalizability
The adult-driven model is robust for patients $\geq 12$ years, who are close to the adult weight and BSA range. For children $2$-$<12$ years the findings rest on allometric extrapolation supported by very few children, so generalizability is moderate and depends on the assumption of adult-like clearance maturation. Findings do not extend to children $<2$ years, to patients using strong CYP3A4 modulators or acid-reducing agents, or to populations with organ impairment. Posology applies to RET-altered tumors treated with selpercatinib capsules in 40 and 80 mg strengths.

---

---

### Figures & Tables

- **Table 1**: Demographics of LIBRETTO-001 and LIBRETTO-121 (sex, age, weight, BSA) and age-group distribution
  - *Significance*: Shows how few pediatric patients were available (6 under 12 years, 18 aged 12-$<18$) versus 806 adults, and that LIBRETTO-121 weights ranged from 9.6 to 97.7 kg; this defines the extrapolation burden.
- **Table 2**: Final popPK parameter estimates with 95% CI, IIV, and shrinkage
  - *Significance*: Provides $CL/F$ 6.04 $L/h$, $V_c$ 99.6 L, $V_p$ 91.3 L, $Q$ 29.6 $L/h$, $k_a$ 1.47 $1/h$, duration 1.09 h, dose effect on $CL$, Asian race effect on $F$ (18.3%), and high shrinkage on $k_a$ and duration.
- **Table 3**: Recommended pediatric dose regimen by age, weight, and BSA band
  - *Significance*: Final posology: weight-based dosing for $\geq 12$ years and BSA-banded dosing (40 mg TID, 80 mg BID, 120 mg BID, 160 mg BID) for 2 to $<12$ years; no dosing below $0.33$ $m^2$.
- **Figure 1**: Schematic of the final 2-compartment model with sequential zero- and first-order absorption and covariates
  - *Significance*: Visual summary of the structural model and the covariates on each parameter.
- **Figure 2**: pcVPCs stratified by study and visit (C1D1, C1D8, C2 onward)
  - *Significance*: Main evidence that the model describes steady-state concentrations in LIBRETTO-121, including 2.5th/97.5th percentiles; used to justify using the model for pediatric simulations.
- **Figure 3**: Simulated C1D8 $C_{max}$ and $AUC_{0-24}$ by age and weight for adapted flat dosing and rounded BSA-based dosing against the adult reference
  - *Significance*: Demonstrates that flat dosing overexposes children $<12$ years and that BSA-based dosing underexposes ages 2-3 years, motivating the modified regimen.
- **Figure 4**: Simulated C1D8 $C_{max}$ and $AUC_{0-24}$ by age and body weight for the final recommended regimen
  - *Significance*: Shows that the final regimen yields exposure matching adults across 2-17 years, supporting the regulatory dose recommendation.

---

### Future Directions
Further data from LIBRETTO-121, particularly in children $<12$ years and $<2$ years, should be used to verify the allometric extrapolation and refine the model, ideally with maturation functions for CYP3A4. Studies of pediatric drug-drug interactions (CYP3A4 modulators, PPIs/H2 blockers) and PBPK-based predictions would address the gap in concomitant-medication data. Exposure-response analyses for safety and efficacy in pediatric patients could determine whether adult exposure matching is the right target. Also useful would be external validation of the simulated exposures with observed pediatric PK at the recommended doses, model-based evaluation of age effects when more data are available, and formulation work (liquid or sprinkle options) for the smallest children.

---

### Expert Commentary
This is a typical regulatory-oriented MIDD package: a well-established adult model, fixed allometry, minimal pediatric data, and simulations against an exposure benchmark. The decision to remove the age effect on $CL/F$ despite an OFV drop of about 44-50 points is instructive: a statistically significant covariate driven by older adults (not by children) can bias predictions in the target population, and purpose-driven diagnostics should override stepwise p-values. The weak spot is the very small number of children under 12 (6 patients, 59 observations), so the claim of matching adult exposure at ages 2-11 rests more on allometric theory than on data; predictions are supported by the pcVPCs but with wide uncertainty. Readers should also note that matching $C_{max}$ and $AUC_{0-24}$ to adults at 160 mg BID, with no established exposure-response relationship, assumes similar PD sensitivity in children. The regimen reflects pragmatic choices based on capsule strengths (40 mg TID for the smallest BSA band, which lowers $C_{max}$ relative to BID), a reminder that dosing frequency can be used to control peak exposure. I would have liked to see bootstrap-based confidence intervals in the simulated exposures and a sensitivity analysis on the age effect, as well as an examination of pediatric absorption ($k_a$ and duration, with high shrinkage).

---

### Bottom Line
For pharmacometricians, this paper is a concise example of pediatric exposure matching with an allometrically scaled adult model supplemented by minimal pediatric data and NHANES-based simulations. The final model supports the regimen of 40 mg TID (BSA $0.33$-$0.65$ $m^2$), BSA-based dosing of $92$ $mg/m^2$ with capsule rounding (2 to $<12$ years), and weight-based dosing for adolescents. The key teaching points are to ignore a statistically significant covariate (age on $CL/F$) when it degrades pediatric diagnostics, and to use pediatric-specific VPCs to guide structure. Extrapolation to children under 2 years, pediatric DDI, and anything beyond adult-matched exposure remains unsupported by data.

---

---

## 📊 Figures

![Schematic view of the final population pharmacokinetic model.Note:Text initalicsis the covariate associated with the adjacent pharmacokinetic parameter. Abbreviations: Cl]({{ site.baseurl }}/assets/digests/2026-11-21-population-pharmacokinetics-modeling-of-selpercatinib-to-support-posology-in/figures/fig_01.jpg)

![Prediction-corrected visual predictive check with observed data for pediatric subjects in LIBRETTO-001 and LIBRETTO-121 studies, stratified by visit.Note:The lines are th]({{ site.baseurl }}/assets/digests/2026-11-21-population-pharmacokinetics-modeling-of-selpercatinib-to-support-posology-in/figures/fig_02.jpg)

![Simulated selpercatinib Cycle 1 Day 8 Cmaxand AUC0–24 by age and body weight for the final model based on the recommended dose regimens in Table3and patients sampled from]({{ site.baseurl }}/assets/digests/2026-11-21-population-pharmacokinetics-modeling-of-selpercatinib-to-support-posology-in/figures/fig_03.jpg)

![Simulated Cycle 1 Day 8 Cmaxand AUC0-24by age and body weight for the final model based on the recommended dose regimens in Table3.Note:Blue solid line and blue area: Med]({{ site.baseurl }}/assets/digests/2026-11-21-population-pharmacokinetics-modeling-of-selpercatinib-to-support-posology-in/figures/fig_04.jpg)