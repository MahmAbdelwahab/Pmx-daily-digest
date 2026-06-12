---
layout: post
title: "Physiologically Based Pharmacokinetic Virtual Twin Approach for Fludarabine Dosing in Pediatric Hematopoietic Stem Cell Transplantation"
date: 2026-05-28
authors: "Uppugunduri CRS, Hassine KB, Nath C, Gonzales F, Krämer S, Mlakar V, Daali Y, Marquis J, Ansari M, Mseddi M"
journal: "Clinical Pharmacology & Therapeutics, 2025 (Epub ahead of print)"
doi: "https://pubmed.ncbi.nlm.nih.gov/41709524/"
paper_type: popk
tags: [popk, pbpk, pediatrics]
excerpt_text: "This study develops a PBPK model for fludarabine and its metabolites, validated in adults and children, and applies a 'virtual twin' approach to predict exposure in 28 pediatric HSCT patients. Incorporating measured (nuclear) GFR and plasma protein binding significantly improved individualized exposure predictions over demographic-based or eGFR models. This work provides a crucial framework for model-informed precision dosing (MIPD) of fludarabine in a vulnerable pediatric population."
pdf_path: "/assets/digests/2026-05-28-physiologically-based-pharmacokinetic-virtual-twin-approach-for-fludarabine/PMx_Physiologically_Based_Pharmacokinetic_Vi_20260528.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study develops a PBPK model for fludarabine and its metabolites, validated in adults and children, and applies a 'virtual twin' approach to predict exposure in 28 pediatric HSCT patients. Incorporating measured (nuclear) GFR and plasma protein binding significantly improved individualized exposure predictions over demographic-based or eGFR models. This work provides a crucial framework for model-informed precision dosing (MIPD) of fludarabine in a vulnerable pediatric population.

---

### Executive Summary
This paper presents a comprehensive PBPK model for fludarabine (Flu) and its two main metabolites developed using a middle-out approach and validated across adult and pediatric populations. The model accurately captured the disposition and competing metabolic pathways of Flu. A key innovation is the deployment of a 'virtual twin' (VT) framework to predict individual Flu PK in 28 pediatric HSCT patients. The study systematically evaluated the impact of integrating individual patient-specific biological data—plasma protein scale factor (PPSF), hematocrit, estimated GFR (eGFR), and gold-standard nuclear GFR (nGFR)—on predictive accuracy. The model incorporating PPSF and nGFR provided the best compromise, achieving a mean fold error (MFE) of 0.91 for total and 0.88 for unbound Flu AUC with minimal biases. This work is significant as it establishes a feasible PBPK-VT platform for MIPD of fludarabine, a drug with high PK variability and a narrow exposure-efficacy/toxicity window in HSCT, marking an important step from population to truly individualized dosing.

---

### Scientific Context & Motivation
Fludarabine (Flu) is a cornerstone lymphodepleting agent in HSCT conditioning, but its pharmacokinetics (PK) exhibit up to 6-fold variability when dosed by body surface area (BSA), leading to suboptimal outcomes like graft failure or impaired immune reconstitution. While population PK (popPK) models exist, they struggle to capture variability in young infants and may fail to account for complex, real-world physiological changes and drug-drug interactions in HSCT patients. This study addresses the gap by using a mechanistic PBPK model combined with a 'virtual twin' approach, which has the potential to integrate a priori individual physiological and biological attributes to predict exposure more accurately than traditional regression-based popPK models, enabling true personalized dosing.

---

## ⚡ Methodological Snapshot
A whole-body PBPK model for fludarabine (Flu), its inactive metabolite Flu-Hx, and active intracellular metabolite Flu-ATP was developed in PK-Sim using a 'middle-out' approach. First, an adult model was built from literature-derived physicochemical data, in vitro enzyme kinetics, and clinical PK data from three key studies. This model was then scaled to pediatrics using PK-Sim's built-in anthropometric and physiological databases and validated against independent pediatric data. Finally, 'virtual twins' of 28 real pediatric HSCT patients were created by integrating their individual demographics, protein binding, and kidney function metrics. The predictive performance of several 'informed' VT models was assessed by comparing model-simulated Flu exposures (AUC) to observed data using fold error metrics, Deming regression, and Bland-Altman analysis.

---

## 🏗️ Structural Model Breakdown
The PBPK model mechanistically describes the disposition of intravenously administered fludarabine monophosphate (Flu-AMP) prodrug. Flu-AMP is rapidly dephosphorylated in plasma to the parent compound fludarabine (Flu). Two competing metabolic pathways were modeled: 1) Deamination of Flu by adenosine deaminase (ADA) to the inactive metabolite fludarabine-hypoxanthine (Flu-Hx), which was defined with its own distribution and elimination profile. 2) Intracellular phosphorylation of Flu by deoxycytidine kinase (dCK) to the active triphosphate metabolite (Flu-ATP) within lymphocytes. A fixed PBMC count was assumed for the intracellular compartment volume. Renal clearance of unchanged Flu was a primary elimination route, driven by glomerular filtration rate (GFR) and accounting for plasma protein binding. The model integrates key physiological processes including organ-specific blood flows, tissue partitioning (driven by lipophilicity), and enzyme/transporter kinetics to simulate concentration-time profiles in plasma and intracellular compartments.

---

### Detailed Methodological Analysis

#### Modeling Approach
A whole-body physiologically based pharmacokinetic (PBPK) model was developed using a middle-out approach in PK-Sim v12.0 (Open Systems Pharmacology Suite). The model included compartments for fludarabine (Flu), its inactive metabolite fludarabine-hypoxanthine (Flu-Hx), and active intracellular metabolite fludarabine-triphosphate (Flu-ATP). Key metabolic pathways—dephosphorylation of prodrug Flu-AMP, deamination by adenosine deaminase (ADA), and intracellular phosphorylation by deoxycytidine kinase (dCK)—were explicitly modeled. The virtual twin approach involved generating individual-specific PBPK models for pediatric patients by inputting their unique demographics and measured biological characteristics.

#### Data Sources
Model development used literature-derived clinical PK data from four key sources: Long-Boyle et al. (2003, adult HSCT), Yin et al. (2010, adult CLL), Chung et al. (2020, pediatric, East Asian), and Ivaturi et al. (2018, Flu-ATP data). Physiochemical parameters were sourced from literature and in silico predictions. Virtual twin analysis was performed on a randomly selected subset of 28 pediatric HSCT patients from the Nath et al. (multi-center, prospective PK) study, which was registered at ACTRN12612000544875.

#### Estimation Methods
PBPK model parameters were primarily derived from literature or optimized via parameter identification within PK-Sim using a middle-out approach. Specifically, enzyme kinetic parameters like ADA kcat were estimated by fitting the model to observed clinical concentration-time profiles. No maximum likelihood or Bayesian estimation was used for the final virtual twin predictions; instead, they were pure forward simulations based on the established model structure and patient-specific inputs. Noncompartmental analysis (NCA) of observed and predicted concentration-time curves was performed in PKanalix to calculate AUC and Cmax.

#### Model Evaluation
The base PBPK model was evaluated using visual predictive checks (VPCs) and fold error calculations for key PK parameters (AUC, Cmax), with a 2-fold error criterion considered acceptable. The proportion of observed data falling within the 90% prediction interval was assessed. Virtual twin predictions were evaluated using mean fold error (MFE), geometric mean fold error (GMFE), and absolute average fold error (AAFE). Bias was further assessed via Deming regression and Bland-Altman analysis. Sensitivity analyses were performed on the final model parameters.

#### Covariate Analysis
No formal stepwise covariate modeling (SCM) was performed as in a popPK analysis. Instead, the virtual twin approach inherently tests the covariate structure embedded in the PBPK model. The study systematically evaluated the performance impact of switching from software-predicted physiological parameters to patient-measured values for key covariates: glomerular filtration rate (eGFR via Schwartz equation vs. gold-standard nuclear GFR [nGFR]), plasma protein scale factor (PPSF), and hematocrit. This directly tested whether these mechanistic covariates improved individualized predictions.

---

### Statistical Rigor Assessment
The statistical methodology is appropriate for the PBPK-VT study design. The use of multiple assessment metrics (MFE, GMFE, AAFE) provides a thorough view of model bias and precision. Comparing models using both fold error criteria and regression/bias techniques (Deming regression, Bland-Altman) is a strength, allowing differentiation between overall precision and systematic bias. The sample size for VT analysis (N=28) is a known limitation for detecting subtle covariate effects but is adequate for the study's primary aim of technical validation. A key strength is the outlier sensitivity analysis conducted to confirm robustness. The study correctly uses Deming regression, which accounts for error in both observed and predicted variables, rather than standard linear regression.

---

## 📊 Key Findings
1) A middle-out PBPK model was successfully developed and validated for Flu and its metabolites (Flu-Hx, Flu-ATP) in adults and children, with most predicted exposures falling within 1.25-fold of observed values. 2) In the virtual twin cohort (N=28), the PBPK model informed only by demographics systematically underestimated Flu AUC. 3) Stepwise inclusion of individual physiological parameters improved predictions. The model using PPSF and measured (nuclear) GFR provided the most accurate and unbiased predictions, with MFEs of 0.91 (total) and 0.88 (unbound) and minimal bias in Deming and Bland-Altman analyses. 4) Using estimated GFR (eGFR) resulted in higher bias despite a comparable proportion of predictions within the 0.8-1.25 fold error range. 5) Sensitivity analysis identified ADA catalytic constant (kcat) and PPSF as critical parameters driving Flu PK variability, confirming the importance of metabolic clearance and protein binding.

---

### Strengths & Limitations

#### Strengths
- First application of a PBPK-based 'virtual twin' approach for fludarabine, providing a mechanistic alternative to popPK for individualized dose prediction.
- Comprehensive model capturing the complex parent-metabolite system (Flu, Flu-Hx, Flu-ATP) with a middle-out approach integrating in vitro and clinical data.
- Systematic and rigorous assessment of different levels of individual information (demographics, hematocrit, eGFR, nGFR, PPSF) on predictive performance.
- Clinical validation in a real-world pediatric HSCT cohort, demonstrating practical feasibility.
- Transparent reporting of model parameters and provision of the final model file as an executable PK-Sim snapshot, enhancing reproducibility.

#### Limitations (Acknowledged by Authors)
- Virtual twin analysis was performed on a limited subset of 28 patients, restricting power to detect individual-level covariate effects and potential overfitting.
- The model does not account for repeated dosing, which may miss time-dependent PK changes like Flu-ATP concentration decline due to lymphodepletion.
- Modeling of Flu-ATP relied on a fixed PBMC count, which is a significant simplification given the variability from disease, age, and prior chemotherapy.
- Enzyme kinetic parameters (ADA kcat) were estimated via a middle-out approach and require future in vitro validation.
- The base PBPK model was built on healthy Caucasian characteristics, which may not fully represent the diverse, diseased pediatric HSCT population.

#### Limitations (Expert Review)
- The study compares models using eGFR and nGFR but does not investigate why nGFR performs better—potentially due to inaccuracies of the Schwartz equation in this sick, malnourished cohort or a disconnect in PK-Sim's physiological scaling of renal function.
- Lack of external validation in a completely separate cohort; the VT cohort is a random subset of the same study, limiting the assessment of true generalizability.
- The model's predictability for Flu-ATP in clinical settings is weak due to the simplification in PBMC counts, limiting mechanistic insights into pharmacodynamics.
- Metabolite Flu-Hx model was developed from data in chronic lymphocytic leukemia (CLL) patients (Yin et al.) rather than HSCT patients, which may introduce disease-specific physiological differences.

#### Generalizability
The PBPK model itself, validated across adults and pediatric patients of different ethnicities (Caucasian, East Asian), demonstrates good mechanistic generalizability. However, the specific VT-informed dosing framework's performance, particularly the optimal choice between eGFR and nGFR, needs validation in larger, diverse, and independent pediatric HSCT populations before clinical implementation.

---

---

### Figures & Tables

- **Figure 1**: A mechanistic schematic illustrating the cellular disposition of fludarabine, depicting the conversion from prodrug Flu-AMP to active intracellular Flu-ATP via dCK and the inactivating deamination to Flu-Hx by ADA.
  - *Significance*: This figure defines the complex metabolic pathway that the PBPK model aims to mechanistically capture, highlighting the critical competing metabolic fates that govern fludarabine's efficacy and clearance.
- **Figure 2**: A four-panel goodness-of-fit figure showing: (a) VPCs of Flu, Flu-Hx, and Flu-ATP in adult and pediatric populations; (b) prediction error for adult data; (c) pediatric VPC for Flu; and (d) prediction error for pediatric data.
  - *Significance*: This is the core validation of the PBPK model across different populations and analytes, demonstrating that the model accurately and mechanistically predicts PK in both adults and children.
- **Figure 3**: Diagnostic plots for virtual twin (VT) predictions. Panel (a) shows Deming regression of observed vs predicted AUC for different VT models (demographic, eGFR, PPSF+nGFR). Panel (b) shows corresponding Bland-Altman plots.
  - *Significance*: This is the key result figure, visually demonstrating that the PPSF+nGFR-informed VT model provides the most accurate and least biased predictions of individual fludarabine exposure in both total and unbound compartments.
- **Table 1**: Comparison of predicted and observed PK parameters (AUC, Cmax, urine fraction) for the base PBPK model in adult and pediatric populations, along with corresponding fold errors.
  - *Significance*: This table provides the quantitative evidence for successful model validation, showing that the PBPK model achieves excellent agreement with published clinical data for both parent and metabolite.
- **Table 2**: Demographic and clinical characteristics of the 28 virtual twin pediatric HSCT patients, including age, dose, renal function (eGFR and nGFR), and protein levels.
  - *Significance*: This table defines the target population for the VT analysis, illustrating the range of demographic and physiological variability that the PBPK model must accommodate to make accurate individualized predictions.
- **Table 3**: Comprehensive performance metrics (MFE, GMFE, AAFE) comparing different virtual twin model variants (e.g., demographic, +eGFR, +nGFR, +PPSF, combined models) for predicting Flu AUC in total and unbound compartments.
  - *Significance*: This table provides the primary quantitative evidence for the superiority of the PPSF+nGFR-informed virtual twin model, summarizing how each individual-level attribute contributes to predictive accuracy.
- **Table 4**: Percentage of virtual twin model predictions falling within specified fold-error ranges (0.8-1.25, 1.5, 2.0-fold) for each model variant in both total and unbound compartments.
  - *Significance*: This table complements Table 3 by showing the precision of predictions, a key metric for clinical acceptability; it shows that while eGFR places >50% within the tightest fold-error range, the nGFR+PPSF model yields less bias.

---

### Code & Reproducibility Assessment
The final PBPK model is provided as a PK-Sim snapshot file (File S1), ensuring high reproducibility for the base model. All software used (PK-Sim, R, Pkanalix) is cited. The virtual twin code is not explicitly provided but the methodology is clearly described using standard functions within the PK-Sim environment.

---

### Future Directions
Immediate next steps should include extending the virtual twin analysis to the complete cohort (N=162) for robust individual-level evaluation and conducting a prospective clinical study to compare MIPD-based dosing against standard BSA-based dosing. Refining the model to incorporate dynamic lymphocyte counts and repeated dosing schedules would enhance Flu-ATP predictions. Future work should also validate the findings in patients with renal impairment given GFR's critical role. Investigating the potential for this VT platform to prospectively guide initial dosing, rather than just infer post-hoc exposures, is a key translational goal.

---

### Expert Commentary
This paper represents a welcome and sophisticated evolution in fludarabine PK modeling. While popPK models have served the community well, they are inherently associative and often fail at the extremes of populations (e.g., very young infants) where physiology is highly nonlinear. The PBPK-VT approach is a 'bottom-up' mechanistic strategy that can gracefully handle such nonlinearity. The finding that measured (nuclear) GFR, not estimated GFR, is necessary for optimal prediction is a crucial clinical insight—it highlights the known inaccuracies of creatinine-based eGFR in children with altered body habitus or critical illness and advocates for gold-standard renal function measurement in vulnerable populations. A teaching point here is the clear demonstration that simply inputting individual covariates into a PBPK model (a VT) can yield highly accurate prospective exposure predictions, potentially streamlining the MIPD workflow from TDM-based Bayesian forecasting to a simpler, single pre-dose prediction strategy. The limitation of this study is its relatively small scale, but it unequivocally establishes proof-of-concept and offers a clear roadmap for the field.

---

### Bottom Line
This study successfully demonstrates that a PBPK-based virtual twin approach, informed by easily obtainable patient-measured data (plasma protein and measured GFR), can accurately predict individual fludarabine exposure in pediatric HSCT patients, outperforming standard demographic or eGFR-based models. This framework is a practical and significant step toward implementing MIPD for fludarabine, moving beyond BSA-based dosing to improve the therapeutic index in a critical clinical setting.

---

---
### Fact-Check Summary

**Total claims:** 38  
**Verdict distribution:** CONTRADICTED: 1, SUPPORTED: 31, UNSUPPORTED: 5, UNVERIFIABLE: 1  
**Overall action:** WARN

#### Flagged Claims

- ❓ **[UNSUPPORTED]** The model integrates organ-specific blood flows, tissue partitioning, and enzyme/transporter kinetics to simulate concentration-time profiles.
- ❓ **[UNSUPPORTED]** Virtual twin predictions were pure forward simulations based on the established model structure and patient-specific inputs; no maximum likelihood or Bayesian estimation was used.
- ❓ **[UNSUPPORTED]** No formal stepwise covariate modeling (SCM) was performed.
- ❌ **[CONTRADICTED]** Most predicted exposures fell within 1.25-fold of observed values.
  - Source says: *"the PPSF and nGFR-informed model demonstrated the most favorable alignment ... the eGFR-informed model placed half of the patients' predictions within the 0.8–1.25-fold error range for Flu AUC0→24 ... In contrast, eGFR data improved the prediction accuracy of AUC0→24h for Flu, with 50% vs. 43% of predictions falling within the 0.8–1.25-fold range in the total compartment"*
- ❓ **[UNSUPPORTED]** This is the first application of a PBPK-based 'virtual twin' approach for fludarabine.
- ❓ **[UNSUPPORTED]** The virtual twin code is not explicitly provided.

---

## 📊 Figures

![Cellular disposition of fludarabine. ADA, Adenosine deaminase; AK, Adenylate kinase; CD73, Ecto-5′-nucleotidase; cN-II, 5′-nucleotidase cytosolic II; dCK, Deoxyc]({{ site.baseurl }}/assets/digests/2026-05-28-physiologically-based-pharmacokinetic-virtual-twin-approach-for-fludarabine/figures/fig_01.png)

![Goodness-of-fit diagnostic plots of Flu and its metabolites. Panel a: Visual Predictive Check following different intravenous administrations in adults. Plasma c]({{ site.baseurl }}/assets/digests/2026-05-28-physiologically-based-pharmacokinetic-virtual-twin-approach-for-fludarabine/figures/fig_02.png)

![Observed versus predicted AUC0→24hin total and unbound plasmatic compartments. In panel a, solid red lines show Deming regressions after including demographic da]({{ site.baseurl }}/assets/digests/2026-05-28-physiologically-based-pharmacokinetic-virtual-twin-approach-for-fludarabine/figures/fig_03.png)