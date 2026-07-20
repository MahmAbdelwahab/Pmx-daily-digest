---
layout: post
title: "Polymyxin B Intravenous Administration Strategy Guided by Minimum Inhibitory Concentration in Critically Ill Patients With Pulmonary Infection: Insights From PBPK Modeling"
date: 2026-07-20
authors: "Zhang S, Yang N, Peng Q, Li J, Yang R, Wang T, Qin Y, Wang C, Xu Y, Li C, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70289"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This paper uses translational PBPK modeling to optimize intravenous polymyxin B dosing for pulmonary infections in critically ill patients. It provides MIC-guided dosing recommendations (e.g., 100 mg q12h for $MIC \\leq 1$ mg/L, combination therapy for $MIC \\geq 2$ mg/L) and identifies a plasma $AUC/MIC$ threshold of 80.6 for TDM-guided therapy. Essential reading for ICU pharmacists, infectious disease clinicians, and pharmacometricians interested in PBPK-based dose optimization."
pdf_path: "/assets/digests/2026-07-20-polymyxin-b-intravenous-administration-strategy-guided-by-minimum-inhibitory/PMx_Polymyxin_B_Intravenous_Administration_S_20260720.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper uses translational PBPK modeling to optimize intravenous polymyxin B dosing for pulmonary infections in critically ill patients. It provides MIC-guided dosing recommendations (e.g., 100 mg q12h for $MIC \leq 1$ mg/L, combination therapy for $MIC \geq 2$ mg/L) and identifies a plasma $AUC/MIC$ threshold of 80.6 for TDM-guided therapy. Essential reading for ICU pharmacists, infectious disease clinicians, and pharmacometricians interested in PBPK-based dose optimization.

---

### Executive Summary
This study employs a translational PBPK modeling approach to optimize intravenous polymyxin B (PMB) dosing for pulmonary infections in critically ill patients. A whole-body PBPK model was first developed and validated in mice, incorporating a refined lung substructure with an epithelial lining fluid (ELF) compartment, then scaled to humans using data from healthy subjects and critically ill patients. Monte Carlo simulations ($n=1000$) evaluated multiple dosing regimens against an ELF $AUC_{ss,24h}/MIC \geq 50$. Maintenance regimens of 100 mg or 1.50 mg/kg q12h achieved $>90\%$ target attainment for $MIC \leq 1$ mg/L, while loading doses (e.g., 200 mg q12h) provided rapid coverage. A plasma $AUC_{ss,24h}/MIC$ threshold of 80.6 was identified as a surrogate for pulmonary efficacy and retrospectively validated in 33 patients ($p=0.038$). The study provides actionable, MIC-guided dosing recommendations and highlights the need for combination therapy when $MIC \geq 2$ mg/L.

---

### Scientific Context & Motivation
Polymyxin B is a last-resort antibiotic for multidrug-resistant Gram-negative bacterial infections, but its efficacy in pulmonary infections is debated due to uncertain penetration into the epithelial lining fluid (ELF). Nebulized administration is recommended as adjunctive therapy but has limitations (e.g., exacerbation of pulmonary conditions, lack of approved formulations). Intravenous administration remains the main route, but optimal dosing to achieve therapeutic concentrations at the infection site is poorly defined. Previous PopPK models describe systemic PK but cannot predict ELF concentrations without extensive sampling. PBPK modeling offers a mechanistic, 'bottom-up' approach to predict tissue concentrations by integrating drug properties with physiological parameters. This study fills a critical gap by providing a validated PBPK model for PMB that predicts ELF exposure, enabling rational, MIC-guided intravenous dosing strategies for pulmonary infections.

---

## ⚡ Methodological Snapshot
The study employed a translational PBPK modeling approach using PK-Sim and MoBi. A whole-body PBPK model was first developed in mice, incorporating a refined lung substructure with an ELF compartment and a tissue retention compartment, calibrated against measured mouse ELF data. The model was then scaled to humans using species-specific physiological parameters and drug properties, and validated against PK data from healthy subjects and 10 independent studies in critically ill patients. Monte Carlo simulations ($n=1000$) were used to evaluate PTA and CFR for various dosing regimens against an ELF $AUC_{ss,24h}/MIC \geq 50$. A plasma $AUC_{ss,24h}/MIC$ threshold of 80.6 was derived from the model and retrospectively validated in 33 patients using Bayesian estimation of individual AUCs.

---

## 🏗️ Structural Model Breakdown
The PBPK model is a whole-body physiologically based pharmacokinetic model built in PK-Sim and MoBi. The base structure includes compartments for all major organs and tissues (e.g., lung, heart, liver, kidney, muscle, skin, adipose, bone, brain) connected by blood flow. The key innovation is a refined lung substructure that includes: (1) lung blood compartment, (2) lung cellular compartment, (3) lung interstitial space, (4) epithelial lining fluid (ELF) compartment, and (5) lung tissue retention compartment. Drug transport between these compartments is governed by permeability-limited distribution, with parameters for pulmonary epithelial permeability and tissue retention coefficients derived from Eriksson et al. (2018). The model incorporates drug-specific properties (molecular weight, logP, pKa, protein binding to $\alpha_1$-acid glycoprotein, tissue-to-plasma partition coefficients) and species-specific physiological parameters (organ volumes, blood flows, tissue composition). An 'ontogeny factor' was used in the critically ill patient model to adjust the free plasma fraction based on pathophysiological state. The model assumes that PMB clearance is primarily non-renal (tubular reabsorption followed by non-renal clearance), with minimal glomerular filtration.

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole-body PBPK modeling using PK-Sim and MoBi software. A mouse WB-PBPK model was first developed and validated, then a refined lung structure (including ELF and tissue retention compartments) was added and calibrated against measured mouse ELF data. The model was scaled to humans using species-specific physiological parameters and drug properties. The final human model incorporated an ontogeny factor to account for altered protein binding in critically ill patients. Monte Carlo simulations ($n=1000$) were used for PTA and CFR analyses.

#### Data Sources
Mouse model: Published PK data from lung-infected murine models (PMB concentrations in plasma and ELF). Human model: PK data from healthy subjects (single study) and critically ill patients (10 published studies, n varied). Retrospective cohort: 33 critically ill patients from a single Chinese hospital (2021-2024) with trough ($n=33$) and peak ($n=24$) steady-state concentrations. MIC data from VITEK-2 system. Demographic data for simulations from MIMIC-IV database. Susceptibility data from EUCAST colistin MIC distributions.

#### Estimation Methods
PBPK model parameters were optimized against observed PK data using PK-Sim and MoBi software. For the retrospective analysis, individual $AUC_{ss,24h}$ was estimated using Bayesian estimation with a previously published PopPK model, incorporating observed steady-state concentrations (trough and peak when available) and patient-specific dosing histories.

#### Model Evaluation
The PBPK model was validated by comparing predicted vs. observed plasma concentration-time profiles (visual inspection of 95% prediction intervals) and by calculating predicted-to-observed ratios for $C_{max}$ and $AUC_{ss,24h}$ (acceptable range: 0.72–1.44). Validation was performed against 10 independent studies in critically ill patients. Mouse and healthy subject models were also validated (Supporting Information). Local sensitivity analysis was performed on six key lung-related transport parameters.

#### Covariate Analysis
Covariate analysis was not formally performed within the PBPK framework. However, the model incorporated pathophysiological changes in critically ill patients via an 'ontogeny factor' that modulates the free plasma fraction of PMB. The MIMIC-IV database was used to generate a representative demographic distribution for Monte Carlo simulations. In the retrospective analysis, baseline characteristics (age, weight, renal function, etc.) were compared between efficacy groups, and only ALT showed a significant difference ($p=0.020$), while $AUC_{ss,24h}/MIC$ was the key predictor of efficacy.

---

### Statistical Rigor Assessment
The PBPK modeling approach is methodologically rigorous, with stepwise development and validation across species (mouse, healthy human, critically ill patient). Monte Carlo simulations ($n=1000$) are appropriate for PTA and CFR analyses. The validation against 10 independent studies with acceptable prediction ratios (0.72–1.44) for most scenarios is commendable. However, the retrospective clinical validation has notable limitations: small sample size ($n=33$), single-center design, and reliance on Bayesian estimation from a previously published PopPK model rather than direct AUC measurement. The statistical analysis used Fisher's exact test for categorical outcomes, which is appropriate for small samples, but no multivariable analysis was performed to adjust for potential confounders (e.g., baseline ALT differences). The $p=0.038$ for the threshold analysis is marginally significant and would benefit from replication in a larger cohort. Sensitivity analyses for the threshold selection were not reported.

---

## 📊 Key Findings
The PBPK model predicted an ELF/plasma exposure ratio of 0.62 for PMB in critically ill patients. For the ELF PK/PD target ($AUC_{ss,24h}/MIC \geq 50$), maintenance regimens of 100 mg q12h and 1.50 mg/kg q12h achieved PTA of 94.4% and 93.5%, respectively, for $MIC = 1$ mg/L. For $MIC = 2$ mg/L, PTA dropped to 25.3% and 23.9%, indicating inadequate monotherapy. Loading doses (e.g., 200 mg q12h) achieved optimal PTA (91.1%) for $MIC = 2$ mg/L on Day 1. CFR analysis showed that maintenance regimens achieved near-optimal coverage for K. pneumoniae and E. coli but suboptimal coverage for A. baumannii and P. aeruginosa. A plasma $AUC_{ss,24h}/MIC$ threshold of 80.6 was identified as a surrogate for the ELF target. Retrospective analysis of 33 patients confirmed that $AUC_{ss,24h}/MIC$ was significantly higher in the efficacy group ($p=0.017$), and patients with $AUC_{ss,24h}/MIC \geq 80.6$ had significantly better outcomes ($p=0.038$, $OR=5.28$).

---

## 💡 Clinical & Regulatory Implications
The study provides clear, MIC-guided dosing recommendations for intravenous polymyxin B in critically ill patients with pulmonary infections. For pathogens with $MIC \leq 1$ mg/L, initial maintenance regimens of 100 mg q12h or 1.50 mg/kg q12h are recommended, achieving ELF PK/PD targets in $>90\%$ of patients. For $MIC \leq 0.5$ mg/L, a reduced dose of 50 mg q12h is sufficient. For $MIC \geq 2$ mg/L, intravenous monotherapy is inadequate ($PTA < 30\%$), and adjunctive nebulization or combination therapy should be considered. The plasma $AUC_{ss,24h}/MIC$ threshold of 80.6 provides a practical TDM target for dose individualization when plasma concentration monitoring is available. Loading doses (e.g., 200 mg q12h on Day 1) are recommended to achieve rapid target attainment, especially for higher MICs. These findings have direct regulatory and clinical implications for optimizing polymyxin B use in ICUs, potentially improving outcomes while minimizing toxicity.

---

### Strengths & Limitations

#### Strengths
- Translational PBPK approach with stepwise development and validation across species (mouse, healthy human, critically ill patient).
- Mechanistic prediction of ELF concentrations, which is a critical improvement over empirical PopPK models.
- Comprehensive evaluation of multiple dosing regimens (fixed and weight-based) at both Day 1 and steady state.
- Identification and retrospective clinical validation of a plasma PK/PD threshold (80.6) that can be used for TDM-guided therapy.
- Public availability of model code and data on GitHub, supporting reproducibility and further research.
- Clear, actionable dosing recommendations stratified by MIC.

#### Limitations (Acknowledged by Authors)
- Lack of comprehensive verification using human ELF concentration data (only 4 bronchoalveolar lavage samples from a single patient used for preliminary validation).
- Small sample size ($n=33$) for the retrospective efficacy analysis.
- The PK/PD threshold (80.6) was derived from the PBPK framework rather than a multicenter dataset.
- The study evaluated dosing regimens mainly from an efficacy perspective; safety considerations (e.g., plasma $AUC > 100$ mg·h/L) were noted but not fully integrated into the recommendations.
- Broader data collection is ongoing to fully validate the model in human lungs.

#### Limitations (Expert Review)
- The retrospective analysis did not adjust for potential confounders (e.g., baseline ALT, concomitant antibiotics) using multivariable regression.
- The $AUC_{ss,24h}/MIC$ threshold of 80.6 was derived from the PBPK model's ELF/plasma ratio (0.62) and the ELF target (50), but the uncertainty in this ratio is not propagated into the threshold.
- The Bayesian estimation of individual AUCs relied on a previously published PopPK model, which may not fully capture the PK variability in the retrospective cohort.
- The study did not perform a formal exposure-toxicity analysis to balance efficacy against nephrotoxicity, which is a major concern with PMB.
- The loading dose simulations assumed q12h administration on Day 1, but clinical practice often uses a single loading dose followed by maintenance dosing; the impact of this difference is not discussed.
- The model does not account for potential drug-drug interactions or the impact of different renal replacement therapy modalities on PMB PK.

#### Generalizability
The PBPK model was validated against 10 independent studies in critically ill patients, supporting generalizability across different populations. However, the retrospective clinical validation is from a single Chinese center with a small sample ($n=33$), limiting generalizability. The model predictions for ELF exposure have not been directly validated in humans (only 4 samples from 1 patient), so the dosing recommendations remain hypothesis-generating pending broader human ELF data. The MIC distributions used for CFR analysis are from EUCAST colistin data, which may not fully reflect local epidemiology.

---

---

### Figures & Tables

- **Figure 1**: Plasma concentration-time curves for critically ill patients from 10 studies, with observed data (triangles) overlaid on PBPK model predictions (solid line) and 95% prediction intervals (shaded area).
  - *Significance*: Demonstrates the predictive performance of the human PBPK model across diverse patient populations and dosing regimens.
- **Figure 2**: Predicted vs. observed $C_{max}$ and $AUC_{ss,24h}$ for critically ill patients, with dashed lines indicating 0.72- and 1.44-fold prediction error boundaries.
  - *Significance*: Quantifies model bias and precision; most predictions fall within the acceptable 1.44-fold range, except for two studies (Surovoy_2022, Surovoy_2023).
- **Figure 3**: Retrospective efficacy analysis: (a) Boxplot comparing $AUC_{ss,24h}/MIC$ between efficacy (EG) and non-efficacy (NG) groups; (b) Bar chart showing efficacy rates for patients with $AUC_{ss,24h}/MIC \geq 80.6$ vs. $< 80.6$.
  - *Significance*: Provides clinical validation of the plasma PK/PD threshold (80.6), showing significantly better outcomes in patients achieving this target ($p=0.038$).
- **Table 1**: Summary of predicted vs. observed $C_{max}$ and $AUC_{ss,24h}$ ratios for 14 validation scenarios across 10 studies in critically ill patients.
  - *Significance*: Quantifies model performance; most ratios are within 0.72–1.44, confirming adequate predictive accuracy.
- **Table 2**: PTA results for various intravenous PMB regimens at Day 1 and steady state, showing median ELF AUC and PTA for MICs from 0.5 to 8 mg/L.
  - *Significance*: Core results table demonstrating that 100 mg and 1.50 mg/kg q12h achieve $>90\%$ PTA for $MIC \leq 1$ mg/L, and that 200 mg q12h loading dose provides optimal coverage for MIC up to 2 mg/L.
- **Table 3**: CFR analysis for four major carbapenem-resistant GNB pathogens (A. baumannii, P. aeruginosa, K. pneumoniae, E. coli) across different dosing regimens.
  - *Significance*: Shows that maintenance regimens achieve near-optimal CFR for K. pneumoniae and E. coli, but suboptimal CFR for A. baumannii and P. aeruginosa, supporting the need for combination therapy.
- **Table 4**: Baseline characteristics of the 33 patients in the retrospective cohort, comparing efficacy (EG) and non-efficacy (NG) groups.
  - *Significance*: Demonstrates that $AUC_{ss,24h}/MIC$ is the only variable significantly different between groups ($p=0.017$), supporting its role as a predictor of efficacy.

---

### Code & Reproducibility Assessment
The PBPK model files and concentration data are publicly available on GitHub at https://github.com/peiqi-xy3yy-csu/PMB_IV_PBPK-Model. This supports full reproducibility and further model refinement by the community.

---

### Future Directions
Prospective multicenter validation of the plasma $AUC_{ss,24h}/MIC$ threshold of 80.6 is urgently needed to confirm its clinical utility. Direct measurement of PMB concentrations in human ELF from a larger cohort would strengthen the PBPK model's predictions and refine the ELF PK/PD target. The model could be extended to evaluate combination therapy regimens (e.g., with rifampin or carbapenems) and to explore the impact of different renal replacement therapy modalities on ELF exposure. Further work should also incorporate a formal exposure-toxicity analysis to balance efficacy against nephrotoxicity, particularly for the higher loading doses. Finally, the PBPK framework could be adapted to other polymyxins or antibiotics where tissue penetration is a key determinant of efficacy.

---

### Expert Commentary
This work exemplifies the power of translational PBPK modeling to address a critical clinical gap—optimizing antibiotic dosing at the infection site when direct tissue sampling is impractical. The stepwise approach (mouse → healthy human → critically ill patient) is methodologically sound and leverages the mechanistic advantage of PBPK over empirical PopPK models for predicting unobserved tissue concentrations. The identification and retrospective validation of a plasma $AUC/MIC$ threshold (80.6) as a surrogate for ELF exposure is particularly valuable for TDM-guided therapy. However, the small retrospective cohort ($n=33$) and reliance on a single-center dataset limit the generalizability of the threshold. The lack of direct human ELF validation (only 4 samples from 1 patient) is a significant limitation, though acknowledged by the authors. From a teaching perspective, this study illustrates how PBPK can bridge the gap between preclinical PK/PD targets and clinical dosing recommendations, and how model-informed drug development can be applied to optimize existing therapies. The public availability of the model code is commendable and should facilitate external validation.

---

### Bottom Line
This PBPK modeling study provides actionable, MIC-guided intravenous dosing strategies for polymyxin B in critically ill patients with pulmonary infections. For pathogens with $MIC \leq 1$ mg/L, maintenance regimens of 100 mg or 1.50 mg/kg q12h achieve adequate ELF exposure ($AUC_{ss,24h}/MIC \geq 50$) in $>90\%$ of patients. A plasma $AUC_{ss,24h}/MIC$ threshold of 80.6 was retrospectively validated as a surrogate for pulmonary efficacy, enabling TDM-based dose individualization. For $MIC \geq 2$ mg/L, adjunctive nebulization or combination therapy is recommended. The model is publicly available, supporting further evaluation and prospective validation.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-07-20-polymyxin-b-intravenous-administration-strategy-guided-by-minimum-inhibitory/figures/fig_01.jpg)

![Plasma concentration-time curves of critically ill patients after intravenous administration of polymyxin B. The solid triangles represent the measured values, t]({{ site.baseurl }}/assets/digests/2026-07-20-polymyxin-b-intravenous-administration-strategy-guided-by-minimum-inhibitory/figures/fig_02.jpg)

![Performance of the Polymyxin B PBPK model in critically ill patients. The solid diagonal line represents the identity line (y = x). The two black dashed lines de]({{ site.baseurl }}/assets/digests/2026-07-20-polymyxin-b-intravenous-administration-strategy-guided-by-minimum-inhibitory/figures/fig_03.jpg)

![The retrospective efficacy analysis of polymyxin B intravenous therapy for pulmonary infections. (a) Comparison of AUCss,24h/MIC between NG and EG groups. (b) Ef]({{ site.baseurl }}/assets/digests/2026-07-20-polymyxin-b-intravenous-administration-strategy-guided-by-minimum-inhibitory/figures/fig_04.jpg)