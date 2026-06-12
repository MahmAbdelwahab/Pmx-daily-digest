---
layout: post
title: "Physiologically Based Pharmacokinetic Model to Predict Drug–Drug Interactions With the Antibody–Drug Conjugate Trastuzumab Deruxtecan"
date: 2026-06-12
authors: "Watanabe A, Gill KL, Chen K-F, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(6), 70284"
doi: "10.1002/psp4.70284"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This paper presents a physiologically based pharmacokinetic (PBPK) model for the antibody-drug conjugate trastuzumab deruxtecan (T-DXd) to predict drug-drug interactions (DDIs) involving its payload DXd. The model successfully reproduces clinical PK data and DDI results with ritonavir and itraconazole, showing minimal impact of these inhibitors. This PBPK framework can be applied to other DXd-containing ADCs to assess DDI risks without need for additional clinical DDI studies."
pdf_path: "/assets/digests/2026-06-12-physiologically-based-pharmacokinetic-model-to-predict-drugdrug-interactions/PMx_Physiologically_Based_Pharmacokinetic_Mo_20260612.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a physiologically based pharmacokinetic (PBPK) model for the antibody-drug conjugate trastuzumab deruxtecan (T-DXd) to predict drug-drug interactions (DDIs) involving its payload DXd. The model successfully reproduces clinical PK data and DDI results with ritonavir and itraconazole, showing minimal impact of these inhibitors. This PBPK framework can be applied to other DXd-containing ADCs to assess DDI risks without need for additional clinical DDI studies.

---

### Executive Summary
This work describes the first PBPK model for T-DXd that integrates the minimal ADC PBPK model with a full PBPK model for the payload DXd, incorporating hepatic uptake, metabolism, biliary excretion, and renal clearance based on in vitro and preclinical data. The model accurately recovers T-DXd and DXd PK profiles at 5.4 and 6.4 mg/kg doses and reproduces clinical DDI results with ritonavir and itraconazole, which showed only ~1.2-fold increases in DXd exposure. Sensitivity analyses confirm the robustness of the DXd elimination parameters. The PBPK model provides a platform for predicting DDIs for future DXd-based ADCs, potentially reducing the need for dedicated clinical DDI studies. This represents an important advance in model-informed drug development for ADCs sharing the same payload and linker.

---

### Scientific Context & Motivation
ADCs pose unique DDI risks through their small-molecule payloads, but individual clinical DDI studies for each ADC are resource-intensive. For the DXd payload, in vitro studies indicated substrate activity for CYP3A, OATP1B1/1B3, P-gp, and BCRP, and preclinical data suggested predominant biliary excretion. A clinical DDI study with T-DXd showed minimal increases in DXd exposure with strong CYP3A/OATP1B inhibitors. However, a mechanistic understanding of the PK and DDI determinants for DXd was lacking. This study fills the gap by constructing a PBPK model incorporating in vitro, preclinical, and clinical data to quantitatively describe DXd disposition and DDI, enabling predictions for other DXd-containing ADCs without repeating clinical DDI studies.

---

## ⚡ Methodological Snapshot
A minimal ADC PBPK model in Simcyp describes T-DXd PK with parameters for FcRn binding, endosomal uptake, and recycling, calibrated to clinical data. DXd PK is modeled using a full PBPK model with a permeability-limited liver model to capture hepatic uptake (OATP1B1/1B3), biliary efflux (P-gp/BCRP), metabolism (CYP3A4), and renal clearance. The fraction of payload released into systemic circulation (Frel) was set to 0.5 based on model fitting. DDI simulations use default Simcyp models for ritonavir and itraconazole with added OATP1B Ki values for ritonavir.

---

## 🏗️ Structural Model Breakdown
The ADC model (minimal PBPK) includes: vascular and interstitial compartments for each tissue, endosomal compartment with FcRn binding (2:1 stoichiometry). Extravasation, pinocytosis (Kup), FcRn binding (KD1, KD2), recycling (Krc1, Krc2, FR), catabolic clearance (CLcat), additional clearance, and deconjugation (Kdec). DXd model: full PBPK distribution predicted by Method 3 (Vss=0.2 L/kg). Liver is permeability-limited with compartments for blood, interstitial, and intracellular space, the latter connected to bile duct. Transporters: OATP1B1 (Michaelis-Menten kinetics), OATP1B3 (linear clearance), P-gp and BCRP (linear efflux). Metabolism: CYP3A4 and other HLM pathways modeled from scaled CLint. Renal clearance as first-order elimination from systemic circulation.

---

### Detailed Methodological Analysis

#### Modeling Approach
Minimal PBPK model for ADC (Simcyp V21) with 2:1 FcRn binding stoichiometry, endosomal uptake (Kup) and recycling fraction (FR) optimized using clinical PK data. Full PBPK model for DXd with permeability-limited liver (PerL) model incorporating active uptake (OATP1B1, OATP1B3), passive diffusion, biliary efflux (P-gp, BCRP), metabolism (CYP3A4 and other microsomal enzymes scaled from HLM), and renal clearance (allometrically scaled from monkey). Software: Simcyp Population-Based Simulator V21.

#### Data Sources
Clinical PK data from Studies DS8201-A-J101 (dose-expansion cohorts, 5.4 and 6.4 mg/kg) and DS8201-A-A104 (DDI study with ritonavir 200 mg BID and itraconazole 200 mg BID/200 mg QD). Simcyp default populations Sim-Japanese and Sim-Cancer used for DDI simulations. In vitro data: HLM for metabolism, HEK-OATP1B1/1B3 for uptake, Caco-2 for efflux transporters (P-gp, BCRP), human hepatocytes for passive diffusion and total uptake. Preclinical allometry from monkey renal clearance and rat bile excretion data.

#### Estimation Methods
Parameter estimation (Kup, FR) within Simcyp Simulator using observed plasma concentrations of T-DXd following 5.4 mg/kg. Frel determined by manual optimization to match DXd AUC. Other parameters derived from in vitro-in vivo extrapolation (IVIVE) and allometric scaling.

#### Model Evaluation
Comparison of simulated vs. observed PK parameters (AUC, Cmax, Cmax as % of dose, AUCtau) for T-DXd and DXd at 5.4 and 6.4 mg/kg. DDI predictions compared with clinical GMRs and 90% CIs. Sensitivity analyses on clearances up to 10-fold. Criteria: predicted/observed ratio between 0.5 and 2.0.

#### Covariate Analysis
Not explicitly performed in the traditional sense. DDI simulations used Sim-Japanese and Sim-Cancer populations to match study demographics. Sensitivity analyses varied elimination clearances but not other covariates. No covariate-parameter relationships are included in the model.

---

### Statistical Rigor Assessment
Appropriate use of simulated populations with matching demographics. DDI simulations performed with 10 trials of appropriate number of subjects, generating 90% CIs for GMRs. Sensitivity analyses systematically varied key clearance parameters over a 10-fold range to assess robustness. However, no formal inferential statistics or uncertainty quantification (e.g., bootstrap) was applied. The parameter estimation used only a single dataset (5.4 mg/kg) for calibration. Lack of human data after direct DXd administration limits rigorous verification of the DXd model alone.

---

## 📊 Key Findings
The PBPK model reproduced the PK of T-DXd and DXd with acceptable accuracy (PK parameter ratios within 1.5-fold for both doses). The fraction of payload released into systemic circulation (Frel) was estimated at 0.5, consistent with the hypothesis that some DXd is directly excreted into bile without entering circulation. DDI simulations reproduced the observed GMRs for AUC within 1.1-fold and Cmax within 1.5-fold. Mass balance simulations predicted that biliary clearance accounts for 62.3%, renal clearance 32.6%, and metabolism 5.1% of total DXd elimination. Sensitivity analyses showed that the DDI predictions are robust to up to 10-fold changes in individual clearance pathways, with the baseline model providing the most accurate predictions. The model thus supports that concomitant use of CYP3A/OATP1B inhibitors does not clinically meaningfully affect DXd exposure.

---

## 💡 Clinical & Regulatory Implications
The model supports that no dose adjustment is needed for T-DXd when co-administered with CYP3A or OATP1B inhibitors, consistent with clinical observations. For future DXd-based ADCs, DDI predictions can be made using this PBPK framework, potentially obviating the need for clinical DDI studies. The model can be used to simulate DDIs with other inhibitors or in special populations (renal impairment, hepatic impairment, pediatrics) after appropriate verification.

---

### Strengths & Limitations

#### Strengths
- First PBPK model for T-DXd integrating ADC and payload models.
- Uses bottom-up approach with in vitro and preclinical data, calibrated with clinical PK and DDI data.
- Comprehensive sensitivity analyses to test parameter robustness.
- Reproduces clinical DDI data accurately, supporting its use for future ADCs.
- Provides mechanistic insight into DXd elimination pathways.

#### Limitations (Acknowledged by Authors)
- Absence of human PK data after direct DXd administration to verify the DXd model.
- TMDD not considered, but justified because TMDD is saturated at therapeutic doses.
- Cmax GMR slightly overpredicted due to potential tumor-mediated reduction in payload release after multiple cycles.

#### Limitations (Expert Review)
- Frel was empirically set to 0.5 to fit data; its physiological basis is plausible but not directly verified.
- The model assumes linear release; actual release may be influenced by tumor burden variation over time.
- The minimal ADC PBPK model may oversimplify ADC tissue distribution (e.g., no intracellular distribution).
- The model was developed for a single ADC; Frel may differ for other DXd-ADCs and would require recalibration.
- The PBPK model for inhibitors (ritonavir, itraconazole) was not validated with measured inhibitor concentrations in this study.

#### Generalizability
The model is directly applicable to other DXd-based ADCs with the same linker and payload as T-DXd, provided that the ADC PK (e.g., Kup, FR) is characterized and Frel is optimized based on observed data from the new ADC. The DXd PBPK component (full PBPK with hepatic transporter models) can be reused without modification. The model may also be used to simulate DDIs under different scenarios (e.g., varying inhibitor types/doses) and in special populations (e.g., organ impairment, pediatrics) after appropriate verification. However, it is not applicable when TMDD is not saturated (e.g., at lower doses or with different antibodies targeting less abundant antigens).

---

---

### Figures & Tables

- **Figure 1**: Schematic of the minimal ADC PBPK model linked to a full PBPK model for DXd with permeability-limited liver model.
  - *Significance*: Illustrates the model structure integrating ADC disposition, payload release, and DXd elimination pathways.
- **Figure 2**: Simulated vs observed plasma concentration-time profiles for T-DXd and DXd at 5.4 and 6.4 mg/kg doses.
  - *Significance*: Primary validation of the model showing good visual fit and PK parameter predictions within acceptance criteria.
- **Figure 3**: Sensitivity analysis of DXd clearance pathway contributions to DDI predictions with itraconazole and ritonavir.
  - *Significance*: Demonstrates robustness of DDI conclusions across large variations in elimination clearances.
- **Table 1**: Summary of all PBPK model input parameters for T-DXd and DXd, including physicochemical properties, distribution, elimination, and transporter kinetics.
  - *Significance*: Central reference for model construction; essential for reproducibility.
- **Table 2**: Simulated and observed Cmax and AUCtau for T-DXd and DXd at 5.4 and 6.4 mg/kg doses, including simulated/observed ratios.
  - *Significance*: Quantitative validation of the model showing all ratios within 1.5-fold.
- **Table 3**: Simulated and observed GMRs (with 90% CIs) for DXd AUC and Cmax with ritonavir and itraconazole.
  - *Significance*: Primary endpoint of model validation; demonstrates accurate reproduction of clinical DDI data.

---

### Code & Reproducibility Assessment
The model was built using Simcyp Simulator V21, a commercial platform. The specific parameter files, model construction details, and in vitro data processing steps are described in the manuscript and supplementary materials, but the model files or source code are not openly available. Therefore, full independent reproducibility is limited to organizations with access to Simcyp and the detailed parameter values as published.

---

### Supplementary Materials
Supplementary materials include Methods S1 (detailed derivation of transporter parameters from in vitro data and relative expression factors), Tables S1-S7 (transporter kinetics, inhibitor modeling, sensitivity analysis results, mass balance). The supplementary information is crucial for understanding the IVIVE steps for hepatic transporters.

---

### Future Directions
Verification of the DXd model with clinical PK data after direct administration of DXd (if ethically feasible) would strengthen confidence. Application to other DXd-ADCs (e.g., datopotamab deruxtecan) is ongoing and will require calibration of ADC-specific parameters (Kup, FR, Frel). Extension to scenarios where TMDD is not saturated (lower doses, low antigen expression) would require incorporating target-mediated disposition. Inclusion of pediatric populations and organ impairment simulations could be performed using available population files.

---

### Expert Commentary
This paper exemplifies the state-of-the-art in PBPK modeling for ADCs, demonstrating how a mechanistically detailed model can be built from in vitro data, calibrated with sparse clinical data, and validated with a clinical DDI study. The strategic choice to set Frel=0.5 to explain the 'missing' fraction of payload is scientifically plausible and highlights a key distinction for ADCs: not all released payload reaches systemic circulation. The sensitivity analysis is particularly strong, showing that even with large uncertainties in individual clearance parameters, the DDI conclusion (no clinically meaningful interaction) remains robust. This is a valuable case study for pharmacometricians working on ADCs, illustrating the power of PBPK to de-risk development programs and reduce the need for costly clinical DDI studies. One teaching point: when constructing a PBPK model for an ADC payload, ensuring that the mass balance and pathway contributions are consistent across species adds confidence.

---

### Bottom Line
The PBPK model of T-DXd provides a robust, mechanistically grounded framework for assessing DDI risks of the DXd payload. It demonstrates that DXd exposure increases minimally with CYP3A/OATP1B inhibitors due to the dominant role of biliary and renal clearance over metabolism. The model is now available for predicting DDIs for other DXd-containing ADCs, potentially eliminating the need for dedicated clinical DDI studies for each candidate. Practicing pharmacometricians can leverage this model as a template for PBPK-based DDI assessment of ADC payloads with complex elimination pathways.

---

---

## 📊 Figures

![Minimal PBPK model for ADCs including 2:1 binding to FcRn at pH 6.0 in the endosomal compartment linked to a full PBPK model for released DXd with a nested perme]({{ site.baseurl }}/assets/digests/2026-06-12-physiologically-based-pharmacokinetic-model-to-predict-drugdrug-interactions/figures/fig_01.jpg)

![Simulated mean (solid black line) and 5th and 95th percentile (gray lines) plasma concentrations of T-DXd (a, c) and released DXd (b, d) following a 5.4 mg/kg (a]({{ site.baseurl }}/assets/digests/2026-06-12-physiologically-based-pharmacokinetic-model-to-predict-drugdrug-interactions/figures/fig_02.jpg)

![Sensitivity analysis for the contribution of different elimination routes to interaction with itraconazole and ritonavir. Panels (a–d) represent the simulated DX]({{ site.baseurl }}/assets/digests/2026-06-12-physiologically-based-pharmacokinetic-model-to-predict-drugdrug-interactions/figures/fig_03.jpg)