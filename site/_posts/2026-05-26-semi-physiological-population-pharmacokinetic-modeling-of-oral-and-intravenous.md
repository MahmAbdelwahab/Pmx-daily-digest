---
layout: post
title: "Semi-Physiological Population Pharmacokinetic Modeling of Oral and Intravenous Paracetamol to Quantify Presystemic Metabolism and Enterohepatic Recirculation"
date: 2026-05-26
authors: "Lau C, van Kesteren C, Smeenk RM, Beex-Oosterhuis MM, Koch BCP, Chan L-N, Lin YS, van Rongen A, Knibbe CAJ, Huitema ADR, Huisman-Siebinga H"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025"
doi: "https://pubmed.ncbi.nlm.nih.gov/41725328/"
paper_type: popk
tags: [popk, qsp, covariate-analysis, regulatory]
excerpt_text: "This paper presents a semi-physiological population PK model of paracetamol and its metabolites after oral and IV administration, integrating data from three clinical studies in 69 adults with and without obesity. The model quantifies presystemic hepatic and intestinal metabolism, as well as enterohepatic recirculation of paracetamol-glucuronide, revealing faster metabolite formation after oral dosing, especially for oxidative metabolites. Pharmacometricians interested in multi-route PK, presystemic metabolism, and enterohepatic recirculation will find this a valuable case study."
pdf_path: "/assets/digests/2026-05-26-semi-physiological-population-pharmacokinetic-modeling-of-oral-and-intravenous/PMx_SemiPhysiological_Population_Pharmacokin_20260526.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a semi-physiological population PK model of paracetamol and its metabolites after oral and IV administration, integrating data from three clinical studies in 69 adults with and without obesity. The model quantifies presystemic hepatic and intestinal metabolism, as well as enterohepatic recirculation of paracetamol-glucuronide, revealing faster metabolite formation after oral dosing, especially for oxidative metabolites. Pharmacometricians interested in multi-route PK, presystemic metabolism, and enterohepatic recirculation will find this a valuable case study.

---

### Executive Summary
This study addresses the gap in comprehensive evaluation of paracetamol metabolism across oral and intravenous routes by developing a semi-physiological population PK model that incorporates gut wall, portal vein, and liver compartments, along with enterohepatic recirculation of PCM-glucuronide. Using pooled data from 69 individuals (53 with obesity, 16 without), the model successfully characterized the PK of PCM and its glucuronide, sulfate, cysteine, and mercapturate metabolites. Key findings include an estimated fraction absorbed of $74.5\%$, evidence of intestinal oxidative metabolism for PCM-cysteine and PCM-mercapturate, and enterohepatic recirculation of PCM-glucuronide. The model demonstrates that oral administration leads to faster metabolite formation, particularly for oxidative metabolites, and provides a framework for quantifying presystemic and systemic metabolism for drugs with multiple metabolic pathways.

---

### Scientific Context & Motivation
Paracetamol is extensively metabolized via glucuronidation, sulfation, and oxidation, with the oxidative pathway producing the toxic NAPQI. While its PK has been studied separately after oral and IV administration, a combined evaluation accounting for presystemic and systemic metabolism was lacking. Previous models did not simultaneously characterize parent and metabolite profiles across routes, nor did they incorporate intestinal metabolism or enterohepatic recirculation. This study fills that gap by developing a semi-physiological model that quantifies the contributions of hepatic and intestinal first-pass metabolism and enterohepatic recirculation, providing mechanistic insights into route-dependent differences in metabolite formation.

---

## ⚡ Methodological Snapshot
A semi-physiological population PK model was developed using NONMEM 7.5 with SAEM-IMP estimation. The model incorporated gut wall, portal vein, and liver compartments based on the well-stirred liver model, with intestinal metabolism parameterized as a fraction of hepatic intrinsic clearance. Enterohepatic recirculation of PCM-glucuronide was modeled with a gallbladder compartment that empties periodically. Body size covariates (LBW, total body weight) were included on key parameters. Model evaluation used GOF plots, NPDE, and SIR for parameter precision.

---

## 🏗️ Structural Model Breakdown
The final model (Figure 2) includes: (1) Oral depot compartment with first-order absorption ($k_a$, $F_a$). (2) Gut wall compartment with permeability clearance ($CL_{perm}$) and intrinsic intestinal clearance ($CL_{G,int}$). (3) Portal vein compartment. (4) Liver compartment with well-stirred model: hepatic intrinsic clearances for glucuronidation ($CL_{H,GLU}$), sulfation ($CL_{H,SUL}$), and oxidation ($CL_{H,CYS}$). (5) Systemic compartments: one-compartment for PCM, one-compartment for PCM-GLU, two-compartment for PCM-SUL, combined one-compartment for PCM-CYS and PCM-MER. (6) Gallbladder compartment for enterohepatic recirculation: PCM-GLU enters gallbladder, empties periodically (every $3$ h, with first emptying time varying by study), releases PCM back to gut wall via first-order reabsorption ($k_{a2}$). (7) Transit compartments for PCM-CYS to PCM-MER conversion ($k_{tr}$, $k_{tr2}$).

---

### Detailed Methodological Analysis

#### Modeling Approach
Semi-physiological population PK model with compartments for gut wall, portal vein, liver, and gallbladder. Well-stirred liver model for hepatic metabolism. Intestinal metabolism modeled as fraction of hepatic intrinsic clearance. Enterohepatic recirculation with periodic gallbladder emptying. One-compartment models for PCM and PCM-GLU, two-compartment for PCM-SUL, combined one-compartment for PCM-CYS and PCM-MER. First-order absorption with estimated fraction absorbed ($F_a$) and absorption rate constant ($k_a$).

#### Data Sources
Pooled data from three clinical studies: Study 1 (oral suspension, 1000 mg, n=30), Study 2 (oral liquid, 1500 mg, n=22), Study 3 (IV, 2000 mg then 1000 mg QID, n=28). Total 69 participants (53 with obesity, 16 without), age 18-65 years, weight 53-198 kg. Plasma concentrations of PCM, PCM-GLU, PCM-SUL, PCM-CYS, PCM-MER measured by LC-MS/MS.

#### Estimation Methods
Stochastic approximation expectation maximization with importance sampling (SAEM-IMP) in NONMEM 7.5. Parameter precision obtained via sampling importance resampling (SIR).

#### Model Evaluation
Goodness-of-fit plots stratified by route, study, and obesity status. Normalized prediction distribution error (NPDE) plots. Objective function value (OFV) for nested model comparisons. Backward elimination for covariate selection ($p < 0.01$, $dOFV > 6.64$).

#### Covariate Analysis
Lean body weight (LBW) on $V_d$ of PCM, $CL_{H,GLU}$, $CL_{H,CYS}$, and elimination clearance of PCM-GLU. Total body weight on $V_d$ of PCM-GLU. Study-specific covariates on elimination clearances and $CL_{H,int}$ for oxidative metabolism to account for differences between oral studies.

---

### Statistical Rigor Assessment
The use of SAEM-IMP is appropriate for this complex nonlinear mixed-effects model. SIR provided robust parameter precision estimates. Model selection was guided by OFV with strict significance criteria ($p < 0.01$). IIV and residual variability were well estimated with shrinkages $< 30\%$ for most parameters. However, the fixed gallbladder emptying parameters (times, fraction, IIV) may limit statistical inference on enterohepatic recirculation. The inclusion of study-specific covariates suggests unexplained heterogeneity between datasets. No formal external validation was performed.

---

## 📊 Key Findings
The fraction absorbed ($F_a$) was $0.745$ ($95\%$ CI $0.699–0.792$). Hepatic intrinsic clearances followed the hierarchy: glucuronidation ($0.300$ L/min) > sulfation ($0.0667$ L/min) > oxidation ($0.0417$ L/min) for a typical individual with LBW 65.2 kg. Intestinal oxidative metabolism was identified with a $CL_{G,int}/CL_{H,int}$ ratio of $0.00474$, supporting the role of gut CYP2E1/CYP3A4 in presystemic metabolism. Enterohepatic recirculation of PCM-glucuronide was incorporated, with gallbladder emptying times varying by study ($1$ h post-dose for fed state, $6-8$ h for fasted). Oral administration resulted in faster metabolite formation, especially for oxidative metabolites (PCM-CYS and PCM-MER), compared to IV administration. Body size covariates (LBW on $V_d$ of PCM, $CL_{H,GLU}$, $CL_{H,CYS}$, and elimination clearance of PCM-GLU; total body weight on $V_d$ of PCM-GLU) were significant.

---

## 💡 Clinical & Regulatory Implications
The model suggests that oral PCM leads to faster formation of oxidative metabolites (PCM-CYS, PCM-MER) compared to IV, but the metabolite-to-parent AUC ratios are similar between routes, indicating no difference in overall exposure. This may reassure clinicians that switching between oral and IV PCM does not substantially alter the metabolic burden. The identification of enterohepatic recirculation of PCM-GLU may explain secondary peaks in PCM concentrations and could be relevant for timing of dosing. Body size adjustments (LBW) are important for PCM dosing, particularly in obesity. The model provides a framework for evaluating drug interactions or overdose scenarios.

For regulatory and clinical practice, the model supports the interchangeable use of oral and IV paracetamol at therapeutic doses, as the relative contribution of each metabolic pathway remains similar despite faster formation after oral dosing. The semi-physiological structure can be adapted for other drugs with multiple metabolic pathways to quantify presystemic metabolism and enterohepatic recirculation, potentially informing bioequivalence assessments and dosing in special populations (e.g., obesity, hepatic impairment). The identification of intestinal oxidative metabolism, though small, may be relevant for drugs with higher intestinal CYP2E1 activity or when considering drug-drug interactions at the gut level. The model also provides a basis for predicting the impact of altered gallbladder function (e.g., post-cholecystectomy) on PCM PK, though this was not directly studied. Overall, the model enhances our mechanistic understanding of PCM disposition and can support model-informed drug development for similar compounds.

---

### Strengths & Limitations

#### Strengths
- Integration of data from three clinical studies with both oral and IV administration, covering a wide weight range (53-198 kg).
- Semi-physiological modeling incorporating gut wall, portal vein, and liver compartments, allowing quantification of presystemic metabolism.
- Identification of intestinal oxidative metabolism and enterohepatic recirculation, providing mechanistic insights not previously captured.
- Use of SAEM-IMP estimation and SIR for parameter precision.
- Comprehensive model evaluation with stratified GOF and NPDE plots.

#### Limitations (Acknowledged by Authors)
- Sparse sampling in the first hours after oral dosing may miss early absorption/metabolite formation dynamics.
- Different dosing regimens and oral formulations across studies complicate interpretation of dose-dependent processes.
- Prevalence and severity of MAFLD not assessed, which may affect metabolism.
- Assumption of intact gallbladder and biliary tree in all patients.
- Ratio of $CL_{int,G}/CL_{int,H}$ may be overestimated due to potential involvement of CYP3A4 in addition to CYP2E1.
- No external validation; data-splitting not feasible due to model complexity.

#### Limitations (Expert Review)
- The model assumes linear kinetics for all pathways, but saturation of sulfation at high doses is known; this may not be relevant at therapeutic doses but could affect extrapolation.
- The enterohepatic recirculation model uses fixed gallbladder emptying times and fraction ($0.1$) without estimation, which may oversimplify the process.
- Study-specific covariates on elimination clearances suggest residual confounding not fully explained by body size or obesity status.
- The model does not include a separate compartment for NAPQI, limiting direct toxicological interpretation.
- The use of LBW from Janmahasatian equation may not be optimal for all populations.

#### Generalizability
The model is based on a population of adults with and without obesity (BMI $19.4-77.5$ kg/m$^2$), which may limit generalizability to other populations such as children, elderly, or patients with hepatic impairment. However, the semi-physiological structure allows extrapolation to other populations with appropriate scaling. The findings on presystemic metabolism and enterohepatic recirculation are likely applicable to other drugs with similar metabolic pathways.

---

---

---

### Future Directions

---

### Expert Commentary

---

### Bottom Line
This semi-physiological population PK model provides a comprehensive characterization of paracetamol and its metabolites after oral and IV administration, quantifying presystemic hepatic and intestinal metabolism and enterohepatic recirculation. The model reveals that oral administration leads to faster metabolite formation, particularly for oxidative metabolites, and that intestinal oxidative metabolism plays a role in first-pass metabolism. These mechanistic insights are valuable for understanding route-dependent PK and can inform dosing optimization for drugs with multiple metabolic pathways.

---

---

## 📊 Figures

![Observations of PCM and metabolites PCM-GLU, PCM-SUL, PCM-CYS, and PCM-MER from the three studies. Observations of Study 3 after multiple dosing were left out in]({{ site.baseurl }}/assets/digests/2026-05-26-semi-physiological-population-pharmacokinetic-modeling-of-oral-and-intravenous/figures/fig_01.png)

![Structure of the final semi-physiological population PK model of PCM and its metabolites. Compartments with observations are depicted in gray with bold font type]({{ site.baseurl }}/assets/digests/2026-05-26-semi-physiological-population-pharmacokinetic-modeling-of-oral-and-intravenous/figures/fig_02.png)

![Goodness-of-fit plots of the final semi-physiological population PK model: observed versus population predicted concentrations. The plots are stratified by compo]({{ site.baseurl }}/assets/digests/2026-05-26-semi-physiological-population-pharmacokinetic-modeling-of-oral-and-intravenous/figures/fig_03.png)

![Normalized prediction distribution errors (NPDE) plots of the final semi-physiological population PK model. (A) NPDE versus predicted concentrations. (B) NPDE ve]({{ site.baseurl }}/assets/digests/2026-05-26-semi-physiological-population-pharmacokinetic-modeling-of-oral-and-intravenous/figures/fig_04.png)

![Model-based simulations of PCM and all metabolites in different male individuals with body weights of 60, 92, 120, and 150 kg after 1000 mg four times daily of P]({{ site.baseurl }}/assets/digests/2026-05-26-semi-physiological-population-pharmacokinetic-modeling-of-oral-and-intravenous/figures/fig_05.png)