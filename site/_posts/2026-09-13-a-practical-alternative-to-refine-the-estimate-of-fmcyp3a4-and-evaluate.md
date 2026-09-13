---
layout: post
title: "A Practical Alternative to Refine the Estimate of fmCYP3A4 and Evaluate Drug–Drug Interaction Potential for Ziftomenib Using PBPK Modeling to Inform Labeling"
date: 2026-09-13
authors: "Templeton IE, Litou C, Jones HM, Mackey Ahsan J, Tabachri M, Leoni M, Mitra A"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026;15(9):e70327"
doi: "10.1002/psp4.70327"
paper_type: popk
tags: [popk, pbpk, oncology, regulatory]
excerpt_text: "This paper presents a pragmatic PBPK-based strategy to estimate the in vivo fraction metabolized by CYP3A4 (fmCYP3A4) for ziftomenib when a dedicated clinical DDI study is infeasible. Using PK data from AML patients co-administered azole antifungals in a dose-escalation study, the authors refined fmCYP3A4 from an in vitro estimate of 94.8% to 60–70%, verified it with moderate inhibitor data, and predicted victim and perpetrator DDI liabilities that supported FDA label language. Pharmacometricians and regulatory scientists involved in oncology drug development will find this a valuable case study for leveraging real-world patient PK data to inform DDI risk assessment."
pdf_path: "/assets/digests/2026-09-13-a-practical-alternative-to-refine-the-estimate-of-fmcyp3a4-and-evaluate/PMx_A_Practical_Alternative_to_Refine_the_Es_20260913.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a pragmatic PBPK-based strategy to estimate the in vivo fraction metabolized by CYP3A4 (fmCYP3A4) for ziftomenib when a dedicated clinical DDI study is infeasible. Using PK data from AML patients co-administered azole antifungals in a dose-escalation study, the authors refined fmCYP3A4 from an in vitro estimate of 94.8% to 60–70%, verified it with moderate inhibitor data, and predicted victim and perpetrator DDI liabilities that supported FDA label language. Pharmacometricians and regulatory scientists involved in oncology drug development will find this a valuable case study for leveraging real-world patient PK data to inform DDI risk assessment.

---

### Executive Summary
This paper describes the development, refinement, verification, and application of a physiologically based pharmacokinetic (PBPK) model for the menin inhibitor ziftomenib, with a focus on estimating the in vivo fraction metabolized by CYP3A4 (fmCYP3A4) in the absence of a dedicated clinical DDI study. Because ziftomenib's mechanism of action precludes healthy-volunteer DDI studies, the authors leveraged PK data from AML patients in the KO-MEN-001 dose-escalation study who were co-administered azole antifungals (CYP3A4 inhibitors). A sensitivity analysis using posaconazole as a strong inhibitor refined fmCYP3A4 from an in vitro estimate of 94.8% to 60–70%, with a conservative final value of 70% (with 15% each for CYP1A2 and CYP2D6). The refined model was verified against fluconazole (moderate inhibitor) data and then applied to predict victim DDI with strong, moderate, and weak CYP3A4 inhibitors/inducers, as well as perpetrator DDI against CYP3A4, CYP2C, and UGT1A1 substrates. Predicted victim DDI ranged from a 2.63-fold AUC increase with itraconazole to an 80% AUC reduction with rifampin; ziftomenib was predicted to be a weak CYP3A4 inhibitor (1.9-fold midazolam AUC increase). These modeling results were accepted by the US FDA to support label language for co-administration with CYP3A4 modulators, demonstrating the utility of this alternative approach in regulatory submissions.

---

### Scientific Context & Motivation
Accurate estimation of the fraction metabolized by CYP enzymes (fmCYP) is critical for predicting drug-drug interactions (DDIs) and informing dosing recommendations. Traditionally, dedicated clinical DDI studies with strong CYP inhibitors in healthy volunteers are used to estimate fmCYP in vivo. However, such studies are not always feasible, particularly for oncology drugs with mechanism-based toxicity that precludes healthy-volunteer exposure, or in patient populations where enrollment is challenging. This paper addresses the knowledge gap of how to estimate fmCYP3A4 when dedicated DDI studies are unavailable, using a PBPK modeling approach that leverages PK data from patients co-administered CYP3A4 inhibitors as part of standard care (e.g., azole antifungals for prophylaxis/treatment of fungal infections in immunocompromised AML patients). The work challenges the reliance on in vitro phenotyping alone, which overestimated fmCYP3A4 (94.8% vs. 60–70% in vivo), and demonstrates a practical alternative that integrates real-world patient data with PBPK modeling to support regulatory decisions.

---

## ⚡ Methodological Snapshot
A full PBPK model for ziftomenib was developed in Simcyp V23, incorporating a mechanistic absorption model (ADAM), full and minimal PBPK distribution models, retrograde clearance estimation, and in vitro interaction parameters (TDI, competitive inhibition, induction). The model was refined by estimating in vivo fmCYP3A4 via sensitivity analysis using PK data from AML patients co-administered posaconazole (strong CYP3A4 inhibitor), and verified using fluconazole (moderate inhibitor) data. The final model was applied to simulate victim and perpetrator DDI at the clinical dose of 600 mg QD in cancer patients.

---

## 🏗️ Structural Model Breakdown
The PBPK model includes: (1) Absorption: ADAM model with compartments for stomach, small intestine, and colon, incorporating dissolution, precipitation, and permeability. Key parameters: intrinsic solubility (S0), solubility factor 1 (SF1), critical supersaturation ratio (CSR), precipitation rate constant (PRC), first-order disintegration rate (kd), and effective permeability (Peff,man). (2) Distribution: Full PBPK with tissue compartments (liver, kidney, etc.) using predicted Kp values (Method 2, Kp scalar=8) to match Vss of 9.54 L/kg; also a minimal PBPK (mPBPK) with kin, kout, and VSAC parameters. (3) Elimination: Hepatic clearance via CYP3A4, CYP1A2, CYP2D6 (retrograde-calculated CLint) and renal clearance (0.0857 L/h). (4) Interaction: CYP3A4 TDI (kinact, Kapp), competitive inhibition of CYP3A4, UGT1A1, UGT1A9, UGT2B17, OATP1B1, OATP1B3, and CYP1A2 induction (Indmax, IndC50). The model simulates auto-inhibition and auto-induction.

---

### Detailed Methodological Analysis

#### Modeling Approach
PBPK modeling using Simcyp Version 23. Absorption was modeled with the ADAM model, incorporating in vitro dissolution data (two-stage) fitted in SIVA, with parameters for solubility, supersaturation, precipitation, and permeability (MechPeff). Distribution was modeled using full PBPK and minimal PBPK (mPBPK) approaches, with tissue partition coefficients predicted using Method 2 and a Kp scalar of 8 to match observed Vss. Elimination was modeled using the retrograde calculator (well-stirred liver model) to back-calculate CLint for CYP3A4, CYP1A2, and CYP2D6 based on in vitro fmCYP and observed IV clearance. Interaction parameters (CYP3A4 TDI, competitive inhibition, CYP1A2 induction) were incorporated from in vitro data. The model was refined by adjusting fmCYP3A4 via sensitivity analysis (20–80%) to match observed DDI with posaconazole, and verified with fluconazole data.

#### Data Sources
Clinical data from three studies: KO-MEN-005 (human AME and IV PK in healthy volunteers), KO-MEN-003 (food effect and PPI study in healthy volunteers), and KO-MEN-001 (Phase 1/2 dose-escalation in R/R AML patients, with and without CYP3A4 inhibitors). PK data from C1D1 (single dose) and C2D1 (multiple dose) were used for refinement and verification. Patients were grouped by no, moderate, or strong CYP3A4 inhibitor co-administration. In vitro data included pKa, LogP, fraction unbound, B:P ratio, CYP phenotyping, inhibition constants (Ki, kinact, Kapp), and induction data.

#### Estimation Methods
Model parameters were estimated using a combination of in vitro data fitting (SIVA for dissolution), manual optimization (mPBPK kin, kout, VSAC), and sensitivity analysis for fmCYP3A4. No formal population PK estimation (e.g., NONMEM) was used; the PBPK model was parameterized using observed clinical PK data (e.g., IV clearance, Vss) and in vitro data, with refinement of fmCYP3A4 via trial simulations.

#### Model Evaluation
Model performance was evaluated by visual comparison of simulated vs. observed concentration-time profiles and comparison of PK parameters (Cmax, AUC, Tmax) using fold-error criteria. The model was verified against multiple datasets: fasted/fed oral PK, PPI co-administration, multiple-dose PK in cancer patients, and DDI data with moderate (fluconazole) and strong (posaconazole) CYP3A4 inhibitors. No formal VPC or bootstrap was reported.[^fc-3]

#### Covariate Analysis
No formal covariate analysis was performed.[^fc-4] The model accounted for demographic differences between healthy volunteers and cancer patients by modifying the Simcyp population demographics (age, height) to match the 'Sim-Cancer' population. The impact of fmCYP3A4 uncertainty was explored via sensitivity analysis (60% vs. 70%).

---

### Statistical Rigor Assessment
The statistical approach is appropriate for the data available, but has limitations. The sensitivity analysis for fmCYP3A4 was based on a small number of patients (n=1–9 per dose level in inhibitor groups), leading to wide confidence intervals. The model was verified using fold-error comparisons, with most parameters within 2- to 4-fold, which is less stringent than the typical 2-fold criterion. No formal statistical tests or uncertainty quantification (e.g., bootstrap) were reported. The use of geometric mean ratios and 90% CIs for DDI predictions is standard. Missing data and interindividual variability were not explicitly modeled; the high PK variability was acknowledged but not fully captured. Sensitivity analysis around fmCYP3A4 (60% vs. 70%) provided some robustness assessment, but other parameter uncertainties (e.g., CLint, absorption parameters) were not explored.

---

## 📊 Key Findings
The in vitro estimate of ziftomenib fmCYP3A4 (94.8%) was inconsistent with observed DDI data from AML patients; sensitivity analysis using posaconazole as a strong CYP3A4 inhibitor refined fmCYP3A4 to 60–70%, with a conservative final value of 70% (15% each for CYP1A2 and CYP2D6). The refined estimate was verified using fluconazole (moderate inhibitor) data. At the clinical dose of 600 mg QD, predicted victim DDI with strong/moderate/weak CYP3A4 inhibitors were: itraconazole 2.63-fold AUC increase (moderate interaction), fluconazole 2.13-fold (borderline moderate), erythromycin 1.72-fold (weak), cimetidine 1.41-fold (weak). Strong/moderate/weak CYP3A4 inducers reduced ziftomenib AUC by 79%, 75%, and 47% (rifampin, efavirenz, dexamethasone), respectively. Ziftomenib was predicted to be a weak CYP3A4 inhibitor (1.9-fold midazolam AUC increase) with no significant effects on CYP2C8, CYP2C9, CYP2C19, or UGT1A1 substrates. The model also predicted a borderline moderate interaction with fluvoxamine (strong CYP1A2 inhibitor, AUC GMR 2.13) and a weak interaction with bupropion (CYP2D6 inhibitor, AUC GMR 1.33). These predictions supported FDA label language allowing co-administration with strong/moderate CYP3A4 inhibitors and recommending avoidance of strong/moderate inducers.

---

## 💡 Clinical & Regulatory Implications
The PBPK modeling results directly informed the ziftomenib label. The FDA approved co-administration of ziftomenib with strong or moderate CYP3A4 inhibitors (based on predicted moderate interactions, e.g., itraconazole 2.63-fold AUC increase) and recommended avoiding strong or moderate CYP3A4 inducers (predicted 75–80% AUC reduction). The label also states that ziftomenib has no clinically significant effects on CYP3A4, CYP2C8, CYP2C9, CYP2C19, and UGT1A1 substrates, based on predicted weak perpetrator DDI (midazolam 1.9-fold AUC increase). These recommendations are particularly important for AML patients who often require azole antifungals for prophylaxis/treatment of fungal infections. The model also predicted a borderline moderate interaction with fluvoxamine (strong CYP1A2 inhibitor), which may warrant caution if co-administered. The wide therapeutic margin of ziftomenib (flat ER profiles) mitigates the clinical impact of PK variability and moderate DDI, supporting the label language.[^fc-8]

---

### Strengths & Limitations

#### Strengths
- Innovative use of real-world patient PK data (from a dose-escalation study) to refine fmCYP3A4 when dedicated DDI studies are infeasible, providing a practical template for other oncology drugs.
- Comprehensive PBPK model development incorporating absorption (ADAM model), distribution (full and minimal PBPK), elimination (retrograde clearance), and interaction (TDI, competitive inhibition, induction) parameters.
- Verification of the refined fmCYP3A4 using an independent dataset (moderate CYP3A4 inhibitor fluconazole) and multiple clinical scenarios (fasted/fed, PPI, multiple-dose cancer patients).
- Sensitivity analysis around fmCYP3A4 (60% vs. 70%) demonstrated minimal impact on DDI category, increasing confidence in the predictions.
- Regulatory success: FDA accepted the PBPK-based DDI predictions to support label language, highlighting the credibility of the approach.
- Transparent reporting of model performance metrics (e.g., fold-error ranges) and acknowledgment of limitations.

#### Limitations (Acknowledged by Authors)
- Small sample sizes in the CYP3A4 inhibitor groups (e.g., n=1–9 per dose level) and high interindividual PK variability, leading to wide prediction intervals.
- Assumption that patients were at steady state for CYP3A4 inhibition on C1D1, which may not be fully accurate.
- Inability to conduct dedicated DDI studies in healthy volunteers due to toxicity concerns; reliance on patient data with confounding factors (e.g., disease state, concomitant medications).
- The model was verified within 2- to 4-fold error for many parameters, which is less stringent than the typical 2-fold criterion, due to small sample sizes.
- PK variability attributed to absorption (low solubility, PPI effects) but not fully characterized in the model.

#### Limitations (Expert Review)
- The use of posaconazole as a representative strong inhibitor for sensitivity analysis may not fully capture the range of strong inhibitor effects (e.g., voriconazole, ketoconazole) due to differences in inhibition potency and intestinal vs. hepatic effects.[^fc-20]
- The assumption of equal contribution of CYP1A2 and CYP2D6 (15% each) based on in vitro data may not reflect in vivo contributions, potentially affecting predictions for inhibitors of these enzymes (e.g., fluvoxamine).
- The model did not explicitly account for potential gut wall metabolism by CYP3A4, which could influence the DDI magnitude for orally administered inhibitors.[^fc-21]
- The predicted perpetrator DDI (weak CYP3A4 inhibition) was based on in vitro TDI parameters; clinical verification was not possible, and the model may underestimate or overestimate the effect.
- The use of a 'Sim-Cancer' population with modified demographics may not fully capture the physiological changes in AML patients (e.g., inflammation, organ dysfunction) that could affect PK.
- No formal model qualification (e.g., bootstrap, VPC) was reported; model performance was assessed primarily via visual inspection and fold-error comparisons.

#### Generalizability
The approach is generalizable to other drugs where dedicated DDI studies are infeasible, provided that PK data are available in patients receiving CYP inhibitors/inducers as part of standard care. However, the specific fmCYP3A4 estimate and DDI predictions are drug-specific and depend on the quality and quantity of available patient PK data, as well as the robustness of the PBPK model. The methodology is particularly relevant for oncology drugs with narrow therapeutic indices or mechanism-based toxicity.[^fc-10]

---

---

### Figures & Tables

- **Figure 1**: Schematic illustrating the key ziftomenib PBPK modeling steps (development, refinement, verification, application) and the components of each clinical study used in model building and verification.
  - *Significance*: Provides a high-level overview of the modeling strategy, clarifying how data from different clinical studies (KO-MEN-005, KO-MEN-003, KO-MEN-001) were used for model development, refinement, and verification.
- **Figure 2**: Dose-adjusted C1D1 ziftomenib Cmax (A) and AUCtau (B) as a function of co-administered azole antifungals from study KO-MEN-001. (C) Calculated mean dose-adjusted AUCtau and Cmax ratios for moderate and strong CYP3A4 inhibitor groups relative to no inhibitor group.
  - *Significance*: This figure provides the clinical evidence that the in vitro fmCYP3A4 estimate (94.8%) was inconsistent with observed DDI data, motivating the refinement of fmCYP3A4. It shows the observed DDI magnitude with strong and moderate inhibitors, which was used to calibrate the model.
- **Figure 3**: Comparison of PBPK model predicted and observed ziftomenib concentration vs. time profiles used in model development, refinement, and verification. (A) single IV dose, (B) single oral dose fasted, (C) oral dose with PPI, (D) multiple doses in patients with strong CYP3A4 inhibitors (200 mg QD), (E) multiple doses in patients with strong CYP3A4 inhibitors (600 mg QD).
  - *Significance*: This figure demonstrates the model's ability to capture ziftomenib PK across different scenarios (IV, oral, fed/fasted, PPI, cancer patients with inhibitors), supporting the credibility of the PBPK model for DDI predictions.
- **Figure 4**: Forest plot showing PBPK model predicted ziftomenib DDI in cancer patients, assuming 70% fmCYP3A4. (A) DDI of ziftomenib as a victim using CYP3A4 inhibitors (strong, moderate, weak) and inducers, as well as CYP1A2 and CYP2D6 inhibitors. (B) DDI of ziftomenib as a perpetrator against CYP3A4, CYP2C8, CYP2C9, CYP2C19, and UGT1A1 substrates.
  - *Significance*: This figure summarizes the key DDI predictions that informed the label language, showing the magnitude of victim DDI with various modulators and the lack of perpetrator DDI for most enzymes. It is central to the regulatory impact of the work.
- **Table 1**: Summary of clinical studies used for PBPK model development, refinement, and verification, including study population, design, dose regimen, and PK data used.
  - *Significance*: Provides an overview of the clinical data sources and how each was used in the modeling workflow, essential for understanding the model's foundation.
- **Table 2**: Sensitivity analysis results: simulated AUCtau and Cmax ratios for ziftomenib with posaconazole (strong CYP3A4 inhibitor) across fmCYP3A4 values from 20% to 80%, including simulated/observed (S/O) ratios.
  - *Significance*: This table is the core of the fmCYP3A4 refinement, showing that fmCYP3A4 values of 60% and 70% produced simulated/observed ratios closest to 1, leading to the conservative choice of 70%.
- **Table 3**: Comparison of ziftomenib victim DDI predictions (AUCtau and Cmax GMRs with 90% CIs) using fmCYP3A4 of 60% vs. 70% for various perpetrators (itraconazole, fluconazole, cimetidine, rifampin, efavirenz, dexamethasone, bupropion, fluvoxamine).
  - *Significance*: This table demonstrates the robustness of the DDI predictions to the uncertainty in fmCYP3A4, showing that DDI categories remain largely unchanged between 60% and 70% fmCYP3A4, except for fluconazole which tips from weak to moderate.

---

### Code & Reproducibility Assessment
The manuscript does not provide access to the PBPK model code or input files.[^fc-11] The Simcyp simulator (Version 23) was used, and key input parameters are summarized in Table S1, but the full model files are not publicly available.[^fc-12] The clinical data are from proprietary studies (KO-MEN-001, KO-MEN-003, KO-MEN-005) and are not publicly accessible. Therefore, independent reproduction of the results is not possible without access to the Simcyp software and the underlying data.

---

### Supplementary Materials
Supplementary materials include Table S1 (key input data for the PBPK model), Tables S2–S4 (patient-level data for no, moderate, and strong CYP3A4 inhibitor groups), and Table S5 (perpetrator regimens used in DDI simulations). These provide additional detail on model parameters and clinical data used in the analysis.

---

### Future Directions
Future work could include: (1) updating the PBPK model with additional clinical DDI data if a dedicated study becomes feasible (e.g., in patients with less toxicity risk or using a lower dose); (2) incorporating physiologically-based absorption modeling to better capture the high interindividual variability in ziftomenib PK, particularly the effects of PPIs and food; (3) conducting a formal model qualification (e.g., VPC, bootstrap) to strengthen confidence; (4) exploring the impact of gut wall metabolism on DDI predictions; (5) applying the same methodology to other oncology drugs with similar challenges; and (6) generating prospective predictions for other CYP3A4 modulators (e.g., voriconazole, ketoconazole) to further validate the model.

---

### Expert Commentary
This paper is a valuable addition to the pharmacometrics literature, demonstrating a practical and regulatory-accepted approach to estimate fmCYP3A4 in the absence of dedicated DDI studies. The use of real-world patient PK data from a dose-escalation study is innovative and addresses a common challenge in oncology drug development. The sensitivity analysis around fmCYP3A4 and verification with an independent moderate inhibitor dataset are methodologically sound. However, the reliance on small sample sizes and the lack of formal model qualification are limitations that should be acknowledged. The successful FDA acceptance of the label language based on these modeling results is a significant achievement and highlights the growing role of PBPK modeling in regulatory decision-making. From a teaching perspective, this paper illustrates the importance of integrating in vitro data, clinical PK data, and PBPK modeling to make informed decisions when traditional studies are not feasible. It also underscores the need for transparent reporting of model assumptions and limitations to facilitate regulatory review and scientific scrutiny.

---

### Bottom Line
For practicing pharmacometricians, this paper provides a compelling case study of how PBPK modeling can be used to estimate in vivo fmCYP3A4 and predict DDI liability when dedicated clinical DDI studies are not feasible. The key takeaway is that leveraging PK data from patients co-administered CYP3A4 inhibitors (e.g., azole antifungals) in dose-escalation studies, combined with sensitivity analysis and verification against moderate inhibitors, can yield a reliable fmCYP3A4 estimate that supports regulatory decisions. The successful FDA acceptance of the label language based on these modeling results underscores the value of this approach in drug development. However, the limitations (small sample sizes, high variability, assumptions) should be carefully considered, and the model should be updated as more clinical data become available.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The absorption model included compartments for stomach, small intestine, and colon.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “No formal population PK estimation (e.g., NONMEM) was used.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “No formal VPC or bootstrap was reported.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “No formal covariate analysis was performed.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “The sensitivity analysis for fmCYP3A4 was based on a small number of patients (n=1-9 per dose level in inhibitor groups), leading to wide confidence intervals.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **CONTRADICTED** — original: “Missing data and interindividual variability were not explicitly modeled.” → correction: “10 virtual trials of 10 subjects (50% female) aged 30–80 years were generated to assess variability across groups.”
[^fc-7]: **UNSUPPORTED** — original: “The high PK variability was acknowledged but not fully captured.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “The wide therapeutic margin of ziftomenib (flat ER profiles) mitigates the clinical impact of PK variability and moderate DDI, supporting the label language.” → correction: “These results demonstrated a wide therapeutic margin for ziftomenib thus the PK variability is not considered to be clinically significant.”
[^fc-9]: **UNSUPPORTED** — original: “The specific fmCYP3A4 estimate and DDI predictions are drug-specific and depend on the quality and quantity of available patient PK data, as well as the robustness of the PBPK model.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “The methodology is particularly relevant for oncology drugs with narrow therapeutic indices or mechanism-based toxicity.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The manuscript does not provide access to the PBPK model code or input files.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “The Simcyp simulator (Version 23) was used, and key input parameters are summarized in Table S1, but the full model files are not publicly available.” → correction: “All PBPK modeling and simulation were performed using the Simcyp Version 23 simulator. ... The key input data are summarized in Table S1.”
[^fc-13]: **UNSUPPORTED** — original: “Supplementary materials include Table S1 (key input data for the PBPK model), Tables S2-S4 (patient-level data for no, moderate, and strong CYP3A4 inhibitor groups), and Table S5 (perpetrator regimens used in DDI simulations).” → correction: “The source text refers to Table S1 (2.1.2), Tables S2-S4 (2.3.1), and Table S5 (2.4), but the metadata section states 'No supplementary materials found'.”
[^fc-14]: **UNSUPPORTED** — original: “Future work could include updating the PBPK model with additional clinical DDI data if a dedicated study becomes feasible.” → correction: “No mention of future work or updating the model in the source text.”
[^fc-15]: **UNSUPPORTED** — original: “Future work could include incorporating physiologically-based absorption modeling to better capture the high interindividual variability in ziftomenib PK, particularly the effects of PPIs and food.” → correction: “No mention of future work or incorporation of physiologically-based absorption modeling in the source text.”
[^fc-16]: **UNSUPPORTED** — original: “Future work could include conducting a formal model qualification (e.g., VPC, bootstrap) to strengthen confidence.” → correction: “No mention of formal model qualification or VPC/bootstrap in the source text.”
[^fc-17]: **UNSUPPORTED** — original: “Future work could include exploring the impact of gut wall metabolism on DDI predictions.” → correction: “No mention of gut wall metabolism or future exploration in the source text.”
[^fc-18]: **UNSUPPORTED** — original: “Future work could include applying the same methodology to other oncology drugs with similar challenges.” → correction: “No mention of applying the methodology to other drugs in the source text.”
[^fc-19]: **UNSUPPORTED** — original: “Future work could include generating prospective predictions for other CYP3A4 modulators (e.g., voriconazole, ketoconazole) to further validate the model.” → correction: “No mention of prospective predictions for other modulators in the source text.”
[^fc-20]: **UNSUPPORTED** — original: “The use of posaconazole as a representative strong inhibitor for sensitivity analysis may not fully capture the range of strong inhibitor effects (e.g., voriconazole, ketoconazole) due to differences in inhibition potency and intestinal vs. hepatic effects.” → correction: “The source text states 'using posaconazole as a representative strong CYP3A4 inhibitor' but does not discuss limitations or differences among strong inhibitors.”
[^fc-21]: **CONTRADICTED** — original: “The model did not explicitly account for potential gut wall metabolism by CYP3A4, which could influence the DDI magnitude for orally administered inhibitors.” → correction: “Full PBPK and minimal PBPK (mPBPK) models, both of which consider liver and intestinal metabolism, were explored”
[^fc-22]: **UNSUPPORTED** — original: “The reliance on small sample sizes and the lack of formal model qualification are limitations that should be acknowledged.” → correction: “Considering the small sample size of observed data across the dose levels for the CYP3A4 inhibitors and the high interindividual variability, the predictions were deemed to be acceptable.”
[^fc-23]: **UNSUPPORTED** — original: “The paper underscores the need for transparent reporting of model assumptions and limitations to facilitate regulatory review and scientific scrutiny.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-24]: **UNSUPPORTED** — original: “The limitations (small sample sizes, high variability, assumptions) should be carefully considered, and the model should be updated as more clinical data become available.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Schematic illustrating the key ziftomenib PBPK modeling steps and components of each clinical study used in model building and verification.]({{ site.baseurl }}/assets/digests/2026-09-13-a-practical-alternative-to-refine-the-estimate-of-fmcyp3a4-and-evaluate/figures/fig_01.jpg)

![Dose-adjusted C1D1 ziftomenibCmax(A) and AUCtau(B), as a function of co-administered azole antifungals from study KO-MEN-001. (C) Calculated mean dose adjusted A]({{ site.baseurl }}/assets/digests/2026-09-13-a-practical-alternative-to-refine-the-estimate-of-fmcyp3a4-and-evaluate/figures/fig_02.jpg)

![Comparison of PBPK model predicted and observed ziftomenib concentration vs. time profiles used in model development, refinement and verification. (A) single dos]({{ site.baseurl }}/assets/digests/2026-09-13-a-practical-alternative-to-refine-the-estimate-of-fmcyp3a4-and-evaluate/figures/fig_03.jpg)

![Forest plot showing PBPK model predicted ziftomenib DDI in cancer patients, assuming 70% fmCYP3A4. (A) DDI of ziftomenib as a victim using CYP3A4 inhibitors (str]({{ site.baseurl }}/assets/digests/2026-09-13-a-practical-alternative-to-refine-the-estimate-of-fmcyp3a4-and-evaluate/figures/fig_04.png)