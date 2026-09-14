---
layout: post
title: "Integrating CRRT as a Virtual Organ Into Physiologically Based Pharmacokinetic Modeling to Optimize Antimicrobial Dosing in Septic Patients"
date: 2026-09-14
authors: "Xing Y, Zhang Y, Bai C, Qin Y, Wang C, Chen L, Wang T, Chen J"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026 (in press)"
doi: "10.1002/psp4.70338"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This paper provides a validated PBPK framework that treats CRRT as a virtual clearance organ to predict antimicrobial exposure in septic patients, with concrete dosing recommendations for vancomycin, meropenem, and ceftazidime-avibactam. ICU pharmacists and clinical pharmacologists should read this for actionable dosing tables stratified by GFR and CRRT intensity, while modelers will value the detailed PK-Sim/MoBi workflow for integrating extracorporeal clearance."
pdf_path: "/assets/digests/2026-09-14-integrating-crrt-as-a-virtual-organ-into-physiologically-based-pharmacokinetic/PMx_Integrating_CRRT_as_a_Virtual_Organ_Into_20260914.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper provides a validated PBPK framework that treats CRRT as a virtual clearance organ to predict antimicrobial exposure in septic patients, with concrete dosing recommendations for vancomycin, meropenem, and ceftazidime-avibactam. ICU pharmacists and clinical pharmacologists should read this for actionable dosing tables stratified by GFR and CRRT intensity, while modelers will value the detailed PK-Sim/MoBi workflow for integrating extracorporeal clearance.

---

### Executive Summary
This study presents a comprehensive PBPK modeling framework that integrates continuous renal replacement therapy (CRRT) as a virtual clearance organ to optimize antimicrobial dosing in septic patients. Using PK-Sim and MoBi, the authors developed and validated PBPK models for vancomycin, meropenem, and ceftazidime-avibactam, extrapolating from healthy adults to septic patients by scaling eight pathophysiological parameters, then incorporating a CRRT compartment parameterized by modality (CVVH, CVVHD, CVVHDF with pre-/post-dilution) and intensity (20–40 mL/kg/h). The final models achieved excellent predictive performance (GMFE < 2 for all drugs; 71–91% of AUC/Cmax predictions within 0.8–1.25-fold). Sensitivity analyses identified GFR, fraction unbound, lipophilicity, and CRRT flow parameters as key determinants of exposure. Dosing simulations across 1000 virtual patients per scenario revealed that residual GFR exerts a greater influence on drug exposure than CRRT intensity, and that post-dilution CVVH represents the most conservative modality. The study provides concrete, evidence-based dosing recommendations for three commonly used antimicrobials, establishing a quantitative framework for model-informed precision dosing in this challenging ICU population.

---

### Scientific Context & Motivation
Septic patients undergoing CRRT present a triple challenge for antimicrobial dosing: sepsis-induced pathophysiological alterations (altered protein binding, increased Vd, variable renal function), extracorporeal drug removal by CRRT, and reduced pathogen susceptibility. Traditional approaches rely on empirical dosing or separate clinical trials for each drug-modality-intensity combination, which is impractical given the variability in CRRT practice. PBPK modeling offers a mechanistic alternative by integrating physiological, drug-specific, and device-related parameters. This study addresses a critical knowledge gap by developing a generalizable framework that quantifies the relative contributions of residual GFR and CRRT parameters to antimicrobial exposure, building on prior work by Watt et al. (ECMO), Fuhr et al. (dialysis), and Dubinsky et al. (ECLS/CRRT). The framework challenges the assumption that CRRT modality is the primary determinant of drug removal, demonstrating that GFR and CRRT intensity are more influential.

---

## ⚡ Methodological Snapshot
The study employed a stepwise PBPK modeling strategy: (1) develop and validate drug-specific PBPK models in healthy adults using PK-Sim; (2) extrapolate to septic patients by scaling eight pathophysiological parameters (GFR, organ volumes, cardiac output, albumin, hematocrit, etc.); (3) integrate a CRRT compartment in MoBi as a virtual clearance organ, parameterized by modality (CVVH, CVVHD, CVVHDF with pre-/post-dilution) and intensity (20–40 mL/kg/h); (4) validate against 18 clinical studies; (5) perform sensitivity analyses and dosing optimization across 1000 virtual patients per scenario. CRRT clearance was modeled using sieving/saturation coefficients and flow rates (Quf, Qd, Qb), with fluid equilibrium assumed (net ultrafiltration = 0).

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole-body PBPK modeling using PK-Sim (Version 10.0) and MoBi (Version 10.0) from the Open Systems Pharmacology Suite. The organism was represented as compartments corresponding to organs/tissues interconnected via blood flow, with each organ refined into plasma, blood cells, interstitial, and intracellular sub-compartments. Tissue-to-plasma partition coefficients were calculated using the Schmitt method (vancomycin) and Rodgers-Rowland method (ceftazidime-avibactam, meropenem). The CRRT compartment was implemented in MoBi as an extracorporeal clearance module with three sub-compartments (plasma, blood cells, effluent), connected to arterial and venous blood, with drug removal modeled as transfer from venous plasma to effluent.

#### Data Sources
Clinical PK data were identified through systematic PubMed searches (up to June 30, 2025) for healthy adults, septic patients, and septic patients undergoing CRRT. A total of 408 articles were screened; 18 studies provided data for CRRT model construction and validation. Concentration-time data were digitized using WebPlot Digitizer. Drug-specific parameters were sourced from DrugBank, SciFinder, Chemaxon, and published literature. Virtual patients were generated based on reported demographic characteristics (age, sex, height, weight), with default software values for missing parameters.

#### Estimation Methods
Model parameters were optimized using the Levenberg–Marquardt algorithm in PK-Sim. Optimized parameters included vancomycin lipophilicity (LogP optimized from 1.11 to 2.41) and meropenem OAT3 Vmax (50 μmol/min/μmol). DPEP1 Vmax for meropenem was assumed (10 μmol/L/min) due to unit conversion limitations and evaluated through model performance.

#### Model Evaluation
Models were validated using graphical comparison of predicted versus observed concentration-time profiles, fold-error analysis (0.5–2.0-fold and 0.8–1.25-fold criteria), and geometric mean fold error (GMFE < 2). Goodness-of-fit plots compared predicted versus observed AUC and Cmax. Validation was performed sequentially: healthy adults → septic patients → septic patients undergoing CRRT, with each step confirming adequate predictive performance before proceeding.

#### Covariate Analysis
Instead of traditional covariate modeling, the PBPK framework incorporated sepsis-associated pathophysiological scaling factors (GFR, renal volume, renal blood flow, cardiac output, albumin, hematocrit, total body weight, interstitial/plasma protein ratio) derived from a previously published meropenem PBPK model in critically ill patients. Sensitivity analyses identified GFR, fraction unbound, lipophilicity, albumin, and CRRT parameters (Quf, Qd, Sd) as the most influential covariates affecting exposure. The relative contribution of GFR versus CRRT intensity was quantified through systematic simulation across GFR categories (0–15, 15–30 mL/min) and CRRT intensities (20–40 mL/kg/h).

---

### Statistical Rigor Assessment
The model evaluation strategy is methodologically sound, employing multiple complementary metrics: graphical comparison, fold-error analysis with two thresholds (0.5–2.0 and 0.8–1.25), and GMFE. The sequential validation approach (healthy → septic → septic+CRRT) provides strong internal consistency. Virtual populations of 1000 individuals per scenario provide robust PTA estimates. However, the study relies on digitized literature data rather than prospective clinical validation, and the number of available studies per drug-modality combination is limited (18 studies total). The assumption of fluid equilibrium (net ultrafiltration = 0) may not reflect real-world patient fluid management. Sensitivity analyses were performed on a single virtual individual, which may not capture the full range of inter-individual variability. The use of fixed MIC values for PTA calculations does not account for MIC distribution variability, which could affect the robustness of dosing recommendations.

---

## 📊 Key Findings
The PBPK framework successfully predicted antimicrobial exposure in septic patients undergoing CRRT, with all predicted AUC and Cmax values within 0.5–2.0-fold of observed values and GMFE < 2 for vancomycin (1.15/1.09), meropenem (1.16/1.18), and ceftazidime-avibactam (1.15/1.20). Sensitivity analysis identified GFR, fraction unbound, lipophilicity, and CRRT flow parameters (Quf, Qd, Sd) as key determinants of exposure, with GFR having a greater impact on AUC than Cmax. Dosing simulations revealed that PTA varied <30% across CRRT modalities, with post-dilution CVVH showing the lowest PTA, while CRRT intensity had a more pronounced effect—particularly above 30 mL/kg/h. Both GFR and CRRT intensity influenced drug exposure, with GFR contributing more significantly. Concrete dosing recommendations were derived: vancomycin 0.5 g q8–12h depending on GFR and intensity; meropenem 0.5 g q8–12h; ceftazidime-avibactam 0.94–1.25 g q8–12h, all stratified by GFR category and CRRT intensity.

---

## 💡 Clinical & Regulatory Implications
The dosing recommendations are immediately actionable. For vancomycin (target AUC 427–600 mg·h/L): GFR 0–15 mL/min → 0.5 g q12h at CRRT intensity 20–30 mL/kg/h, 0.5 g q8h at 30–40 mL/kg/h; GFR 15–30 mL/min → 0.5 g q8h (preferred over 0.75 g q12h due to lower toxicity risk and vial compatibility). For meropenem (100% fT>MIC, MIC=2 mg/L): GFR 0–15 mL/min → 0.5 g q12h across all intensities; GFR 15–30 mL/min → 0.5 g q12h up to 35 mL/kg/h, then 0.5 g q8h. For ceftazidime-avibactam (100% fT>MIC, MIC=8 mg/L): GFR 0–15 mL/min → 0.94 g q12h; GFR 15–30 mL/min → 0.94 g q12h at 20–25 mL/kg/h, 1.25 g q12h at 25–35 mL/kg/h, 1.25 g q8h at 35–40 mL/kg/h. The framework also supports regulatory submissions by providing a mechanistic basis for extrapolating dosing across CRRT settings without separate trials for each modality-intensity combination.

---

### Strengths & Limitations

#### Strengths
- Comprehensive, mechanistic PBPK framework integrating sepsis pathophysiology with CRRT clearance in a single model
- Open-source software (PK-Sim/MoBi) enhances reproducibility and accessibility
- Sequential validation across three populations (healthy, septic, septic+CRRT) with multiple metrics (fold-error, GMFE, GOF plots)
- Systematic evaluation of five CRRT modalities and five intensity levels with 1000 virtual patients per scenario
- Actionable, stratified dosing recommendations for three clinically important antimicrobials
- Sensitivity analyses identify key determinants of exposure, providing mechanistic insight beyond empirical observations
- The framework is extensible to other drugs and extracorporeal modalities (ECLS)

#### Limitations (Acknowledged by Authors)
- Selection restricted to three antimicrobial agents due to limited clinical data in CRRT patients
- Dosage optimization used fixed MIC values without considering MIC variability
- Suboptimal predictions for some individuals reflecting inherent variability in septic patients
- Model requires further validation with more clinical studies
- Future work should incorporate ex vivo data for CRRT-specific clearance parameters and more detailed pathophysiological data (e.g., tissue-to-plasma partition coefficients)

#### Limitations (Expert Review)
- The assumption of fluid equilibrium (net ultrafiltration = 0) may not reflect real-world fluid management in septic patients, who often have positive or negative fluid balances
- The CRRT compartment volume (0.5 L) is a simplified apparent effective volume that may not capture the complex hydrodynamics of the extracorporeal circuit
- Sensitivity analyses were performed on a single virtual individual, limiting the assessment of parameter interactions across the population
- The model does not account for drug adsorption to the CRRT filter membrane, which can be significant for some drugs
- Mixed pre-/post-dilution strategies were not modeled, despite being common in clinical practice
- The vancomycin efficacy target (AUC > 427 mg·h/L) was derived from a single prior study and may not be universally accepted
- The optimized vancomycin LogP (2.41) is a model-dependent apparent parameter that may not reflect true lipophilicity, potentially limiting extrapolation to other physiological conditions

#### Generalizability
The framework is drug-agnostic and could be extended to other antimicrobials with adequate physicochemical and PK data. However, validation was limited to three hydrophilic antimicrobials with predominantly renal clearance; drugs with significant hepatic metabolism or active tubular secretion may require additional parameterization. The CRRT compartment parameterization relies on published sieving/saturation coefficients, which may vary across filter types and clinical practice. The framework is most applicable to adult septic patients; pediatric and ECMO populations would require further adaptation.

---

### Key Equations

**Convective CRRT Clearance**

{% raw %}
$$
CL_{CRRT,\text{conv}} = Q_{uf} \times S_c
$$
{% endraw %}

Convective drug clearance during CRRT (CVVH), where Quf is the ultrafiltration flow rate and Sc is the sieving coefficient. This equation governs drug removal in hemofiltration modalities.

**Diffusive CRRT Clearance**

{% raw %}
$$
CL_{CRRT,\text{diff}} = Q_d \times S_d
$$
{% endraw %}

Diffusive drug clearance during CRRT (CVVHD), where Qd is the dialysate flow rate and Sd is the saturation coefficient. This equation governs drug removal in hemodialysis modalities.

---

### Figures & Tables

- **Figure 1**: Schematic of the overall PBPK modeling workflow, from healthy adult model development through sepsis extrapolation to CRRT integration and dosing optimization.
  - *Significance*: Provides the roadmap for the entire study, clarifying the stepwise model development and validation strategy.
- **Figure 2**: Goodness-of-fit plots comparing predicted versus observed AUC and Cmax values for all three antimicrobial agents across healthy adults, septic patients, and septic patients undergoing CRRT.
  - *Significance*: Central validation figure demonstrating that all predictions fall within the 0.5–2.0-fold acceptance criteria, with the majority within 0.8–1.25-fold, supporting model reliability across all three populations.
- **Figure 3**: Predicted (red lines) versus observed (dark dots) plasma concentration-time profiles for vancomycin, meropenem, and ceftazidime-avibactam across diverse CRRT modalities and intensities in septic patients.
  - *Significance*: Visual confirmation that the CRRT-integrated PBPK model captures the shape and magnitude of concentration-time profiles across different CRRT settings, demonstrating the model's generalizability.
- **Figure 4**: Probability of target attainment (PTA) for the three antimicrobials across five CRRT modalities and CRRT intensities of 20–40 mL/kg/h at GFR 0–15 mL/min.
  - *Significance*: Demonstrates that CRRT modality has limited impact on PTA (<30% variation), while CRRT intensity has a more pronounced effect, with post-dilution CVVH showing the lowest PTA (most conservative).
- **Figure 5**: PTA for different dosage regimens of vancomycin, meropenem, and ceftazidime-avibactam across GFR categories (0–15 and 15–30 mL/min) and CRRT intensities under post-dilution CVVH.
  - *Significance*: Provides the evidence base for the final dosing recommendations, showing that GFR has a greater influence on PTA than CRRT intensity and that higher doses are needed at higher GFR and CRRT intensity.
- **Table 1**: Summary of drug-specific parameters for vancomycin, meropenem, and ceftazidime-avibactam, including physicochemical properties, distribution parameters, elimination pathways, and CRRT settings (sieving and saturation coefficients).
  - *Significance*: Essential reference table documenting all model input parameters and their sources, enabling model replication and adaptation to other drugs.
- **Table 2**: Comparison of observed versus simulated AUC and Cmax values for all three antimicrobial agents in septic patients undergoing CRRT, with fold-error ratios and data sources.
  - *Significance*: Quantitative validation summary showing all predictions within 0.5–2.0-fold of observed values, with the majority within 0.8–1.25-fold, providing the numerical evidence for model adequacy.

---

### Code & Reproducibility Assessment
The models were built using the open-source Open Systems Pharmacology Suite (PK-Sim and MoBi, Version 10.0). The OSP suite is freely available, and the modeling workflow is described in sufficient detail (including parameter sources in Table 1) to enable replication. However, the actual model files (.pkml, .mbml) were not deposited in a public repository, and the digitized clinical datasets are only summarized in supplementary tables. The authors acknowledge the OSP community for software support but do not provide a GitHub link or model-sharing statement.

---

### Supplementary Materials
Supplementary materials include: Figure S1 (literature screening workflow), Figures S2–S5 (model validation in healthy adults and septic patients), Figure S6 (PBPK model structure with CRRT compartment), Figure S7 (CRRT compartment concentration profiles), Figures S8–S9 (sensitivity analyses), Tables S1–S4 (study characteristics and data sources), Tables S5–S6 (PK parameter comparisons), Table S7 (vancomycin efficacy-safety target attainment), Table S8 (summary of dosage recommendations), and Appendix S1 (additional concentration-time profile comparisons). Table extraction was disabled in the automated pipeline; the main text includes Table 1 (drug parameters) and Table 2 (observed vs. simulated PK).

---

### Future Directions
The framework should be extended to additional antimicrobial agents (e.g., piperacillin-tazobactam, cefepime, fluconazole) to assess generalizability. Future work should incorporate ex vivo CRRT clearance data to refine Sc and Sd parameterization, include mixed pre-/post-dilution strategies, and account for MIC variability in PTA calculations. The model could also be adapted for other extracorporeal modalities (ECMO, sustained low-efficiency dialysis) and for pediatric septic patients. Prospective clinical validation of the proposed dosing regimens would strengthen the clinical utility. Integration with therapeutic drug monitoring and Bayesian feedback would enable real-time adaptive dosing.

---

### Expert Commentary

---

### Bottom Line
This paper delivers a validated, open-source (PK-Sim/MoBi) PBPK framework that treats CRRT as a virtual clearance organ, enabling mechanistic prediction of antimicrobial exposure in septic patients across CRRT modalities, intensities, and residual renal function. The key practical takeaway: residual GFR (0–30 mL/min) exerts a greater influence on drug exposure than CRRT intensity (20–40 mL/kg/h), and post-dilution CVVH is the most conservative reference modality. Concrete dosing tables are provided for vancomycin, meropenem, and ceftazidime-avibactam, making this directly actionable for model-informed precision dosing in the ICU.

---

### Fact-check corrections

[^fc-1]: **NUMERIC_MISMATCH** — original: “The PBPK models were developed using PK-Sim and MoBi, both from the Open Systems Pharmacology Suite, Version 10.0.” → correction: “extrapolated to septic patients by scaling four pathophysiological parameters in PK-Sim”
[^fc-2]: **UNSUPPORTED** — original: “The models were developed for vancomycin, meropenem, and ceftazidime-avibactam.” → correction: “No evidence found in source text.”
[^fc-3]: **UNSUPPORTED** — original: “The model was validated sequentially: healthy adults → septic patients → septic patients undergoing CRRT.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “The GMFE was less than 2 for vancomycin (1.15/1.09), meropenem (1.16/1.18), and ceftazidime-avibactam (1.15/1.20).” → correction: “For ceftazidime-avibactam, 80% (8/10) of both AUC and Cmax predictions met the 0.8–1.25-fold criterion, with corresponding GMFE of 1.09 and 1.11.”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-09-14-integrating-crrt-as-a-virtual-organ-into-physiologically-based-pharmacokinetic/figures/fig_01.jpg)

![The general PBPK modeling workflow. PBPK, physiologically based pharmacokinetic.]({{ site.baseurl }}/assets/digests/2026-09-14-integrating-crrt-as-a-virtual-organ-into-physiologically-based-pharmacokinetic/figures/fig_02.jpg)

![Comparison of predicted versus observed AUC andCmaxvalues for antimicrobial agents (●: Healthy adults; ▲: Septic patients; ■: Septic patients undergoing CRRT). T]({{ site.baseurl }}/assets/digests/2026-09-14-integrating-crrt-as-a-virtual-organ-into-physiologically-based-pharmacokinetic/figures/fig_03.jpg)

![Comparison of predicted plasma concentrations (red lines) with observed plasma concentration data (dark dots) following intravenous administration of a–f: Vancom]({{ site.baseurl }}/assets/digests/2026-09-14-integrating-crrt-as-a-virtual-organ-into-physiologically-based-pharmacokinetic/figures/fig_04.jpg)

![The probability of target attainment for three antimicrobial agents across CRRT modalities and intensities. Simulations evaluated vancomycin (0.5 g q8h), meropen]({{ site.baseurl }}/assets/digests/2026-09-14-integrating-crrt-as-a-virtual-organ-into-physiologically-based-pharmacokinetic/figures/fig_05.jpg)

![The probability of target attainment for different dosage regimens of vancomycin, meropenem, and ceftazidime-avibactam in septic patients across GFR categories o]({{ site.baseurl }}/assets/digests/2026-09-14-integrating-crrt-as-a-virtual-organ-into-physiologically-based-pharmacokinetic/figures/fig_06.jpg)