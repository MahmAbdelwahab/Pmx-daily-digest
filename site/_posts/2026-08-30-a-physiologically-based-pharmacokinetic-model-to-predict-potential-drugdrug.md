---
layout: post
title: "A Physiologically Based Pharmacokinetic Model to Predict Potential Drug–Drug Interactions of TPN171, a Novel Phosphodiesterase Type 5 Inhibitor"
date: 2026-08-30
authors: "Guanghui Tian, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, Volume 15, Issue 8"
doi: "10.1002/psp4.70298"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This paper develops and validates a whole-body PBPK model for TPN171, a novel PDE5 inhibitor, using GastroPlus and clinical DDI data with itraconazole and rifampin. The model accurately predicts exposure changes with strong/moderate CYP3A4 modulators and provides dose-adjustment recommendations for co-administration scenarios."
pdf_path: "/assets/digests/2026-08-30-a-physiologically-based-pharmacokinetic-model-to-predict-potential-drugdrug/PMx_A_Physiologically_Based_Pharmacokinetic__20260830.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper develops and validates a whole-body PBPK model for TPN171, a novel PDE5 inhibitor, using GastroPlus and clinical DDI data with itraconazole and rifampin. The model accurately predicts exposure changes with strong/moderate CYP3A4 modulators and provides dose-adjustment recommendations for co-administration scenarios.

---

### Executive Summary
The authors constructed a physiologically based pharmacokinetic (PBPK) model for TPN171, a PDE5 inhibitor primarily metabolized by CYP3A4, to predict drug–drug interactions (DDIs) with a range of CYP3A4 modulators. The model was developed using physicochemical, in vitro, and clinical data, and validated against observed DDI data with itraconazole (strong inhibitor) and rifampin (strong inducer), achieving predicted AUC ratios within acceptable error margins. The validated model was then applied to simulate DDIs with moderate (diltiazem, fluconazole) and weak (fluvoxamine) inhibitors, as well as moderate (efavirenz) and weak (zanubrutinib) inducers. Results indicate that strong and moderate inhibitors significantly increase TPN171 exposure (AUC ratios 2.07–3.27), while strong and moderate inducers decrease exposure (AUC ratios 0.14–0.53). Weak modulators have minimal impact. The study provides a scientific basis for dose adjustments when TPN171 is co-administered with CYP3A4 modulators, and demonstrates the utility of PBPK modeling in DDI risk assessment.

---

### Scientific Context & Motivation
TPN171 is a novel PDE5 inhibitor for pulmonary arterial hypertension and erectile dysfunction, with CYP3A4 as its primary metabolic pathway. Clinical DDI studies have shown that strong CYP3A4 modulators (itraconazole, rifampin) significantly alter TPN171 exposure, but quantitative predictions for moderate and weak modulators were lacking. PBPK modeling integrates drug properties and physiological parameters to simulate ADME and predict DDIs, and is increasingly accepted by regulatory agencies. This study addresses the knowledge gap by developing a qualified PBPK model to predict DDIs across a spectrum of CYP3A4 modulators, providing evidence-based dose recommendations.

---

## ⚡ Methodological Snapshot
A whole-body PBPK model for TPN171 was developed in GastroPlus using the ACAT model for absorption, incorporating CYP3A4 metabolism and P-gp efflux. The model was validated against clinical DDI data with itraconazole and rifampin, and then applied to predict DDIs with moderate and weak CYP3A4 modulators.

---

## 🏗️ Structural Model Breakdown
The PBPK model includes: (1) ACAT model for gastrointestinal absorption with P-gp efflux; (2) CYP3A4-mediated gut and hepatic metabolism (Km=36.1 μM, Vmax=12.56 pmol/min/pmol); (3) P-gp-mediated renal secretion; (4) linear hepatic and renal clearance; (5) tissue distribution predicted by GastroPlus (Vss ~1.4 L/kg). Key parameters: fup=6.4%, Rbp=0.74, fmCYP3A4=0.658, CLsys~6.7 L/h, oral bioavailability ~65%.

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole-body PBPK model developed in GastroPlus (Version 9.8.3002) using the ACAT model for oral absorption. The model incorporated physicochemical properties, in vitro permeability, P-gp efflux kinetics, CYP3A4 metabolism, and renal clearance. Population simulations were performed to assess inter-individual variability.

#### Data Sources
Physicochemical and in vitro data from experimental assays; clinical PK data from healthy volunteers in DDI studies (single oral doses of 10 mg or 20 mg TPN171); clinical DDI data with itraconazole and rifampin; mass balance study data; SAD, MAD, food effect, and elderly PK studies.

#### Estimation Methods
Model parameters were optimized using clinical PK data, with some parameters fitted (e.g., Solubility Factor, P-gp Vmax). Population simulations used Monte Carlo methods to incorporate variability.

#### Model Evaluation
Validation against observed DDI data (itraconazole, rifampin) using prediction error acceptance criteria (Guest et al.). Additional validation against SAD, MAD, food effect, and elderly PK data. Visual predictive checks and comparison of simulated-to-observed ratios.

#### Covariate Analysis
No formal covariate analysis was performed; however, population simulations incorporated variability in model parameters. The impact of hepatic impairment was not included in this study.

---

### Statistical Rigor Assessment
The model was validated using prediction error acceptance criteria, with simulated-to-observed ratios within acceptable ranges for DDI predictions. Population simulations (5 virtual trials, 12 subjects each) provided confidence intervals for predicted ratios. However, the small sample size in the 5 mg SAD group (n=3) limited validation, and no formal statistical testing was applied to compare predicted vs. observed data.

---

## 📊 Key Findings
The PBPK model predicted AUC0–t ratios of 2.42 (observed 2.67) for itraconazole and 0.14 (observed 0.096) for rifampin, meeting acceptance criteria. Simulations predicted AUC0–t ratios of 2.40 with diltiazem, 3.27 with fluconazole 400 mg, 2.07 with fluconazole 100 mg, 1.16 with fluvoxamine, 0.53 with efavirenz, and 0.70 with zanubrutinib. Strong and moderate inhibitors significantly increase TPN171 exposure, while moderate inducers decrease exposure by ~50%; weak modulators have no clinically meaningful impact. Dose adjustments are recommended for strong/moderate inhibitors (halving dose) and moderate inducers (consider doubling dose with caution), but co-administration with strong inducers is not recommended.

---

## 💡 Clinical & Regulatory Implications
The PBPK model supports dose adjustments for TPN171 when co-administered with CYP3A4 modulators: (1) Strong/moderate inhibitors (itraconazole, diltiazem, fluconazole 400 mg) increase AUC by >2-fold, suggesting halving the TPN171 dose; (2) Moderate inducer (efavirenz) decreases AUC by ~50%, requiring cautious dose adjustment; (3) Strong inducer (rifampin) decreases AUC by >85%, and co-administration is not recommended; (4) Weak modulators (fluvoxamine, zanubrutinib) have no clinically meaningful impact, requiring no dose adjustment. These recommendations are relevant for regulatory labeling and clinical practice.

---

### Strengths & Limitations

#### Strengths
- Comprehensive integration of physicochemical, in vitro, and clinical data
- Validation against clinical DDI data with strong CYP3A4 modulators
- Population simulations to assess inter-individual variability
- Application to a broad range of CYP3A4 modulators (moderate and weak)
- Mechanism-based approach using ACAT and PBPK models in GastroPlus
- Provides actionable dose adjustment recommendations

#### Limitations (Acknowledged by Authors)
- Cmax underprediction for the 5 mg single-dose group (n=3) attributed to small sample size
- GastroPlus cannot compute AUC for the final dosing interval in multiple-dosing simulations, limiting validation of MAD data
- Mean DDI predictions slightly underestimated observed clinical values, attributed to inter-individual variability

#### Limitations (Expert Review)
- Model validation relied on data from a single clinical DDI study for each perpetrator (itraconazole, rifampin)
- Predictions for moderate/weak modulators were not verified with clinical DDI data
- The model assumes P-gp Km equals CYP3A4 Km, which may not be accurate
- Potential impact of transporters other than P-gp on TPN171 disposition was not fully explored
- Simulations used virtual populations that may not fully represent real-world patient variability

#### Generalizability
The PBPK model is specific to TPN171 and its CYP3A4-mediated metabolism, but the modeling approach is generalizable to other CYP3A4 substrates. Predictions for moderate/weak modulators are based on validated models of those perpetrators, but lack direct clinical confirmation for TPN171. The findings are relevant to populations with similar CYP3A4 activity, though hepatic impairment (which alters TPN171 exposure) was not incorporated.

---

---

### Figures & Tables

- **Figure 1**: Flowchart illustrating the overall modeling strategy, including model development, validation, and application for DDI predictions.
  - *Significance*: Provides a visual overview of the PBPK modeling workflow, highlighting the integration of ADME data and clinical PK data.
- **Figure 2**: Population simulation of TPN171 plasma concentration–time profiles after single oral dosing alone and co-administration with itraconazole or rifampin.
  - *Significance*: Demonstrates the model's ability to capture inter-individual variability and predict DDI effects on TPN171 exposure.
- **Figure 3**: Summary of DDI predictions using the TPN171 PBPK model, showing Cmax and AUC ratios for various CYP3A4 modulators.
  - *Significance*: Provides a comprehensive visual comparison of predicted DDI magnitudes across different perpetrator classes, supporting dose recommendations.
- **Table 1**: Physicochemical and pharmacokinetic parameters of TPN171 used in the PBPK model, including log P, pKa, solubility, permeability, and metabolic constants.
  - *Significance*: Details the key input parameters for the PBPK model, essential for reproducibility and understanding model assumptions.
- **Table 2**: Dosing regimens of CYP3A4 inhibitors and inducers used in DDI simulations.
  - *Significance*: Outlines the simulated co-administration scenarios, including drug, dose, and treatment duration.
- **Table 3**: Comparison of simulated and observed DDI ratios for TPN171 with itraconazole and rifampin, including population simulation results.
  - *Significance*: Validates the PBPK model's predictive performance against clinical DDI data, meeting acceptance criteria.
- **Table 4**: Predicted Cmax and AUC ratios for TPN171 when co-administered with various CYP3A4 modulators.
  - *Significance*: Presents the key simulation results for moderate and weak modulators, forming the basis for dose recommendations.

---

### Code & Reproducibility Assessment
The study used GastroPlus (Version 9.8.3002) for PBPK modeling, but the model files and simulation code were not provided in the paper. Supplementary materials include supporting information (zip and docx files), but detailed model parameters and simulation scripts are not publicly available.

---

### Supplementary Materials
Supplementary materials include a zip file (psp470298-sup-0003-supinfo.zip) and a Word document (psp470298-sup-0005-supinfo2.docx) containing additional supporting information, likely including model parameters, validation figures, and sensitivity analyses.

---

### Future Directions
Future studies should clinically verify the predicted DDIs with moderate and weak CYP3A4 modulators (diltiazem, fluconazole, fluvoxamine, efavirenz, zanubrutinib). The model could be extended to incorporate hepatic impairment effects and other patient populations. Additionally, the impact of genetic polymorphisms in CYP3A4 and P-gp on TPN171 PK and DDI magnitude could be explored. The model could also be used to simulate alternative dosing regimens and optimize therapeutic strategies in real-world polypharmacy scenarios.

---

### Expert Commentary
This study exemplifies the regulatory-accepted use of PBPK modeling to bridge clinical DDI data and predict untested scenarios. The model's strength lies in its mechanistic integration of CYP3A4 metabolism and P-gp efflux, validated against strong modulators. However, the lack of clinical verification for moderate/weak modulators is a limitation, and the assumption of P-gp Km equal to CYP3A4 Km warrants sensitivity analysis. The dose recommendations are clinically actionable, but caution is advised when extrapolating to patient populations with varying CYP3A4 activity. Overall, this work contributes valuable insights for TPN171 development and demonstrates best practices in PBPK-based DDI assessment.

---

### Bottom Line
The validated PBPK model for TPN171 provides reliable predictions of CYP3A4-mediated DDIs, indicating that strong and moderate inhibitors significantly increase exposure (requiring dose reduction), moderate inducers decrease exposure (requiring cautious dose adjustment), and weak modulators have minimal impact. This supports evidence-based dose recommendations for TPN171 co-administration with CYP3A4 modulators.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “Population simulations were performed using Monte Carlo methods.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “No formal covariate analysis was performed in the study.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “The impact of hepatic impairment was not included in the study.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “No formal statistical testing was applied to compare predicted versus observed data.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **CONTRADICTED** — original: “The potential impact of transporters other than P-gp on TPN171 disposition was not fully explored.” → correction: “In the present study, a comprehensive transporter evaluation was conducted to characterize the interaction profile of TPN171. The results demonstrated that TPN171 is not a substrate of CYP isoforms other than CYP3A4, nor is it a substrate of BCRP, OATP1B1, OATP1B3, OAT1, OAT3, OCT2, MATE1, or MATE2K.”
[^fc-6]: **UNSUPPORTED** — original: “Simulations used virtual populations that may not fully represent real-world patient variability.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “The modeling approach is generalizable to other CYP3A4 substrates.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “The findings are relevant to populations with similar CYP3A4 activity.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “Future studies should clinically verify the predicted DDIs with moderate and weak CYP3A4 modulators.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “The model could be extended to incorporate hepatic impairment effects.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The impact of genetic polymorphisms in CYP3A4 and P-gp on TPN171 PK and DDI magnitude could be explored.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Flowchart for overall modeling strategy. ADME, Absorption, Distribution, Metabolism, Excretion; PK, pharmacokinetics; DDI, drug–drug interaction; SAD, single asc]({{ site.baseurl }}/assets/digests/2026-08-30-a-physiologically-based-pharmacokinetic-model-to-predict-potential-drugdrug/figures/fig_01.jpg)

![Population simulation of TPN171 for plasma concentration–time profiles. After single oral dosing of TPN171 alone and co-administration with itraconazole or rifam]({{ site.baseurl }}/assets/digests/2026-08-30-a-physiologically-based-pharmacokinetic-model-to-predict-potential-drugdrug/figures/fig_02.jpg)

![Summary of DDI predictions using the TPN171 PBPK models.]({{ site.baseurl }}/assets/digests/2026-08-30-a-physiologically-based-pharmacokinetic-model-to-predict-potential-drugdrug/figures/fig_03.jpg)