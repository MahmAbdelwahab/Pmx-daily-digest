---
layout: post
title: "QSP model for AAV-mediated antibody delivery in rat brain"
date: 2026-07-23
authors: "Liu S, Chowdhury EA, Wu S, Meno-Tetang G, Shah DK"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026, 53:41"
doi: "10.1007/s10928-026-10051-w"
paper_type: popk
tags: [popk, qsp]
excerpt_text: "This paper presents a state-of-the-art QSP model integrating AAV vector disposition, transgene expression, mAb PK, and target engagement in the rat brain. It is essential reading for pharmacometricians and clinical pharmacologists working on CNS gene therapies, as it provides a quantitative framework to compare administration routes (IV, ICM, IST) and serotypes (AAV9 vs. AAV5). The model predicts that local brain administration of AAV9 at moderate doses achieves optimal brain target suppression with minimal systemic exposure."
pdf_path: "/assets/digests/2026-07-23-qsp-model-for-aav-mediated-antibody-delivery-in-rat-brain/PMx_QSP_model_for_AAVmediated_antibody_deliv_20260723.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a state-of-the-art QSP model integrating AAV vector disposition, transgene expression, mAb PK, and target engagement in the rat brain. It is essential reading for pharmacometricians and clinical pharmacologists working on CNS gene therapies, as it provides a quantitative framework to compare administration routes (IV, ICM, IST) and serotypes (AAV9 vs. AAV5). The model predicts that local brain administration of AAV9 at moderate doses achieves optimal brain target suppression with minimal systemic exposure.

---

### Executive Summary
Liu et al. present a next-generation quantitative systems pharmacology (QSP) model that simultaneously characterizes the disposition of adeno-associated virus (AAV) vectors, transgene-expressed monoclonal antibodies (mAbs), the therapeutic target (TargetX), and the mAb-target complex in plasma, peripheral tissues, and the brain. The model integrates previously published platform PBPK models for AAV, protein therapeutics, and brain disposition, with novel additions including meningeal cell transduction, detailed intracellular AAV processing (endocytosis, nuclear import, dsDNA formation), and target turnover. Calibrated against extensive rat biodistribution data (AAV9 and AAV5, IV, ICM, and IST routes), the model successfully captures cross-species, cross-serotype, and cross-route PK. Key findings include: (1) local brain administration (ICM, IST) provides superior brain target engagement with minimal systemic exposure; (2) AAV9 outperforms AAV5 by ~200-fold in transgene expression; (3) a medium ICM dose (1E12 Vg) or low IST dose (2.5E11 Vg) are optimal. This work represents a significant advance in model-informed drug development (MIDD) for CNS gene therapies.

---

### Scientific Context & Motivation
Monoclonal antibodies targeting CNS antigens (e.g., alpha-synuclein in Parkinson's disease) have shown promise but are limited by poor brain penetration (~0.2-0.3% of plasma exposure). AAV-mediated local expression of mAbs in the brain offers a 'one-and-done' therapeutic strategy to bypass the BBB. However, projecting first-in-human doses for AAV therapies remains a major hurdle due to complex, multi-scale PK/PD (vector distribution, transduction, transgene expression, target binding). Existing PBPK models for AAV and mAbs were developed separately and lacked integration with brain-specific transport and target engagement. This work fills the gap by creating a unified QSP framework that simultaneously characterizes AAV, mAb, target, and complex disposition, enabling rational comparison of serotypes, routes, and doses.

---

## ⚡ Methodological Snapshot
The authors developed a comprehensive QSP model by integrating three previously published platform PBPK models: an AAV PBPK model, a mAb PBPK model, and a brain PBPK model. The integrated model includes four interconnected submodels for AAV vector, transgene-expressed mAb, endogenous target (TargetX), and the mAb-target complex. Each peripheral tissue is divided into 9 compartments (blood cells, plasma, endothelium, interstitium, parenchymal cells) with detailed intracellular trafficking (endocytosis, recycling, transcytosis, nuclear import, degradation). The brain model adds CSF compartments (lateral ventricle, third-fourth ventricle, cisterna magna, subarachnoid space), perivascular spaces, and meningeal cells. A sequential fitting strategy was used: first calibrating mAb and target PBPK models, then fitting AAV9-mAb data, and finally calibrating AAV5 parameters. The model was implemented in R (Ubiquity) and cross-validated in Simbiology.

---

### Detailed Methodological Analysis

#### Modeling Approach
Mechanistic QSP model integrating four PBPK submodels (AAV, mAb, TargetX, mAb-TargetX complex) with detailed tissue-level compartmentalization (9 compartments per tissue: blood cells, plasma, endothelium, interstitium, parenchymal cells, with sub-compartmentalization for endosomes, cytoplasm, nucleus). Brain model includes CSF compartments (LV, TFV, CM, SAS), perivascular spaces, BBB, BCSFB, and meningeal cells. Key processes: AAV receptor binding, endocytosis, intracellular trafficking, nuclear import, dsDNA formation, transgene expression, mAb secretion, FcRn recycling, target synthesis and binding. Implemented in R (Ubiquity) and cross-validated in Simbiology (MATLAB).

#### Data Sources
Data from 7 rat treatment groups: IV AAV9 (5E12 Vg), ICM AAV9 (5E12, 1E12, 5E11 Vg), IST AAV9 (2.5E11 Vg), ICM AAV9-control mAb (1E12 Vg), ICM AAV5 (5E12 Vg). AAV quantified by qPCR in blood, brain, lung, liver, heart. mAb quantified by ELISA in CSF, brain ISF, brain homogenate, lung, liver, heart. Additional mAb PK data (IV 3-100 mg/kg) and target engagement data (free TargetX in CSF after 30 mg/kg mAb IV) from separate in-house studies.

#### Estimation Methods
Maximum likelihood estimation using the LSODA solver in R (Ubiquity package v2.0.0). A sequential fitting strategy was employed: (1) mAb and TargetX PBPK models calibrated first, (2) AAV9-mAb model fitted to IV data to estimate blood cell receptor density, (3) transgene expression scaling factor (SF) estimated from IV AAV9 mAb data, (4) meningeal cell receptor density estimated from local injection data. AAV5 parameters were derived from literature and manual calibration.

#### Model Evaluation
Visual predictive checks (observed vs. predicted overlay plots) for AAV and mAb PK across all routes and doses (Figures 4-6). Model performance was assessed qualitatively by lack of systematic bias. No formal VPC, bootstrap, or cross-validation was performed. Mass balance was confirmed (100%) for all four entities (AAV, mAb, TargetX, complex).

#### Covariate Analysis
No formal covariate analysis was performed. The model uses fixed physiological parameters (organ volumes, blood flows, cell counts) from literature, with species-specific scaling. Key parameters (receptor densities, K_nuc, K_deg, K_prod, K_sec) were estimated or calibrated from data. The sensitivity analysis (Figure 8) assessed the impact of ±50% changes in these parameters on model outputs, revealing that K_nuc, K_deg, and K_prod are the most influential.

---

### Statistical Rigor Assessment
The sequential fitting strategy is appropriate given the model complexity and data limitations. Parameter estimates are provided (Table 2) but without confidence intervals or standard errors, limiting assessment of precision. The sensitivity analysis (Figure 8) provides qualitative insight into parameter influence but is local (not global) and does not account for parameter correlations. No formal model selection criteria (e.g., AIC, BIC) or goodness-of-fit plots (e.g., residuals) are presented. The lack of external validation is a significant limitation, as all data were used for calibration. However, the model's ability to capture diverse datasets (multiple routes, doses, serotypes, and matrices) provides some confidence in its predictive capacity.

---

## 📊 Key Findings
The QSP model successfully captures AAV9 and AAV5 vector PK and transgene mAb PK across IV, ICM, and IST routes in rats. Key findings: (1) Local brain administration (ICM, IST) achieves 10-100-fold higher CSF/plasma mAb ratios (~2%) compared to IV (~0.2%), due to local transduction of meningeal cells. (2) AAV9 outperforms AAV5 by ~200-fold in transgene expression despite similar vector DNA levels at week 3, attributed to extremely slow nuclear import/dsDNA formation for AAV5 (K_nuc = 0.01/h vs. AAV9). (3) Target engagement predictions: IV AAV9 suppresses plasma TargetX but has minimal brain effect; ICM AAV9 (1E12 Vg) achieves strong CSF and ISF suppression with moderate systemic effect; IST AAV9 (2.5E11 Vg) provides the most localized ISF suppression. (4) Sensitivity analysis identifies K_nuc, K_deg, and K_prod as the most influential parameters for efficacy. (5) The transgene expression scaling factor (SF) from mouse to rat is 0.11, indicating ~10-fold lower expression in the larger species.

---

## 💡 Clinical & Regulatory Implications
The model predicts that local brain administration (ICM or IST) of AAV9 encoding anti-TargetX mAb achieves substantially higher CSF and ISF antibody exposures and target suppression compared to IV administration, at lower or equivalent doses. For ICM, a medium dose (1E12 Vg) balances brain efficacy with minimal systemic target depletion. IST at the lowest tested dose (2.5E11 Vg) provides the most localized ISF target suppression, though surgical risks must be weighed. AAV5 is not recommended due to ~200-fold lower transgene expression. These findings directly inform first-in-human dose and route selection for AAV-mediated antibody therapies in Parkinson's disease.

---

### Strengths & Limitations

#### Strengths
- Comprehensive integration of four PBPK submodels (AAV, mAb, target, complex) into a unified QSP framework.
- Detailed brain submodel with CSF compartments, perivascular spaces, and meningeal cells, enabling accurate simulation of local administration routes.
- Stepwise calibration strategy maximizes parameter identifiability given data limitations.
- Cross-species (mouse to rat) and cross-serotype (AAV9 to AAV5) validation demonstrates platform generalizability.
- Sensitivity analysis provides actionable insights for vector engineering (K_nuc, K_prod).
- Clinically relevant predictions comparing IV, ICM, and IST routes with dose optimization.

#### Limitations (Acknowledged by Authors)
- No external validation dataset; all data used for calibration.
- Underprediction of ISF mAb concentrations in first 12 h after IV dosing, possibly due to microdialysis probe damage or unmodeled blood-to-ISF pathway.
- Overprediction of AAV9 in lung, liver, heart after ICM 1E12 Vg, though transgene PK did not show same trend.
- Underprediction of plasma mAb beyond 3 weeks for ICM 5E12 Vg AAV9 group.
- AAV5 parameters derived from limited in vitro data and manual calibration.
- Aggregated TargetX species not explicitly modeled; soluble TargetX used as PD surrogate.
- Parenchymal cell types (neurons, astrocytes, etc.) not distinguished.

#### Limitations (Expert Review)
- No confidence intervals or standard errors reported for parameter estimates.
- No formal goodness-of-fit diagnostics (residuals, VPC, NPDE) presented.
- Local sensitivity analysis only; global sensitivity analysis would better capture parameter interactions.
- The assumption that mAb-TargetX complex has same PK as free mAb may not hold if complex size alters clearance.
- The model does not account for potential immunogenicity or anti-drug antibodies.
- IST route predictions for ISF mAb concentrations could not be validated due to insufficient sample volume.

#### Generalizability
The model is calibrated on rat data and may require reparameterization for other species (NHP, human). The AAV9 parameters appear transferable from mouse to rat, suggesting cross-species scalability. The AAV5 parameterization is less certain due to limited data. The model assumes healthy rat physiology; disease-related changes (BBB integrity, target aggregation) are not incorporated.

---

### Key Equations

**AAV Internalization Kinetics**

{% raw %}
$$
A_{\text{intracellular}}(t) = 1 - e^{-K_{\text{int}} \cdot t}
$$
{% endraw %}

Equation for the fraction of AAV internalized over time, used to derive K_int for AAV5 from in vitro data.

**AAV Convective Transport to Interstitium**

{% raw %}
$$
(1 - \sigma_{\text{org}}^{V,\text{AAV}}) \cdot J_{\text{org}}
$$
{% endraw %}

Convective transport of AAV from vascular space to interstitial space in peripheral organs.

**mAb Convective Transport to Interstitium**

{% raw %}
$$
(1 - \sigma_{\text{org}}^{V,\text{mAb}}) \cdot J_{\text{org}}
$$
{% endraw %}

Convective transport of mAb from vascular space to interstitial space in peripheral organs.

**mAb Recycling to Vascular Space**

{% raw %}
$$
CL_{\text{up}}^{\text{org}} \cdot FR
$$
{% endraw %}

FcRn-mediated recycling of mAb back to vascular space after pinocytosis.

**mAb Recycling to Interstitial Space**

{% raw %}
$$
CL_{\text{up}}^{\text{org}} \cdot (1 - FR)
$$
{% endraw %}

FcRn-mediated recycling of mAb to interstitial space after pinocytosis.

**AAV Transport to Lateral Ventricle**

{% raw %}
$$
(1 - \sigma_{\text{BCSFB}}^{V,\text{AAV}}) \cdot Q_{\text{CSF}}
$$
{% endraw %}

Convective transport of AAV from brain plasma to lateral ventricle via CSF flow across BCSFB.

**AAV Transport to ISF**

{% raw %}
$$
(1 - \sigma_{\text{BBB}}^{V,\text{AAV}}) \cdot Q_{\text{ISF}}
$$
{% endraw %}

Convective transport of AAV from brain plasma to ISF via ISF flow across BBB.

**AAV Lymphatic Drainage from SAS**

{% raw %}
$$
(1 - \sigma_{\text{SAS}}^{I}) \cdot Q_{\text{CSF}}
$$
{% endraw %}

Lymphatic drainage of AAV from subarachnoid space to systemic circulation.

**AAV Flow to SAS from Perivenous Space**

{% raw %}
$$
1 - FR_{\text{lymph}}^{\text{AAV}}
$$
{% endraw %}

AAV exit from ISF via perivenous space directed to SAS.

**AAV Flow to Lymph from Perivenous Space**

{% raw %}
$$
FR_{\text{lymph}}^{\text{AAV}}
$$
{% endraw %}

AAV exit from ISF via perivenous space directed to lymph.

**AAV Perivascular-ISF Exchange**

{% raw %}
$$
PS_{\text{PV}}^{\text{AAV}}
$$
{% endraw %}

Permeability-surface area product for AAV diffusion between perivascular space and ISF.

**TargetX Perivascular-ISF Exchange**

{% raw %}
$$
PS_{\text{PV}}^{\text{TargetX}} = 5.667 \times 10^{-6} \text{ L/h}
$$
{% endraw %}

Permeability-surface area product for TargetX diffusion between perivascular space and ISF.

**TargetX Renal Clearance**

{% raw %}
$$
CL_{R}^{\text{TargetX}} = 0.1 \text{ L/h}
$$
{% endraw %}

Renal clearance of TargetX.

**TargetX Diffusion Coefficient**

{% raw %}
$$
Diff_{\text{TargetX}} = 24.75
$$
{% endraw %}

Diffusion coefficient for TargetX in interstitial space.

**TargetX Reflection Coefficient**

{% raw %}
$$
\sigma_{\text{Org}}^{V,\text{TargetX}} = 0.3116
$$
{% endraw %}

Reflection coefficient for TargetX in peripheral organs.

**TargetX Synthesis Rate in Plasma**

{% raw %}
$$
Ksyn_{\text{Plasma}}^{\text{TargetX}} = 1.2 \times 10^{-8} \text{ M/h}
$$
{% endraw %}

Synthesis rate of TargetX in central plasma.

**TargetX Synthesis Rate in ISF**

{% raw %}
$$
Ksyn_{\text{ISF}}^{\text{TargetX}} = 2.2 \times 10^{-12} \text{ M/h}
$$
{% endraw %}

Synthesis rate of TargetX in ISF.

**TargetX Synthesis Rate in LV**

{% raw %}
$$
Ksyn_{\text{LV}}^{\text{TargetX}} = 1.6 \times 10^{-10} \text{ M/h}
$$
{% endraw %}

Synthesis rate of TargetX in lateral ventricle CSF.

**mAb-TargetX Dissociation Rate**

{% raw %}
$$
K_{\text{off}}^{\text{mAb,TargetX}} = 0.00427 \text{ /h}
$$
{% endraw %}

Dissociation rate constant for mAb-TargetX binding, estimated from fitting free TargetX data.

**Transgene Expression Scaling Factor**

{% raw %}
$$
SF = 0.11
$$
{% endraw %}

Scaling factor for transgene expression in rats relative to mice.

---

### Figures & Tables

- **Figure 1**: Overall QSP model structure showing four interconnected PBPK models (AAV, mAb, TargetX, complex) and tissue-level compartmentalization (blood cells, plasma, endothelium, interstitium, parenchymal cells).
  - *Significance*: Provides the conceptual framework for the entire model, illustrating how AAV transduction, mAb secretion, target turnover, and binding are linked across tissues.
- **Figure 2**: Detailed brain submodel showing CSF compartments (LV, TFV, CM, SAS), perivascular spaces, BBB, BCSFB, and meningeal cells, with all transport pathways (CSF flow, ISF flow, perivascular flow, transcytosis).
  - *Significance*: Essential for understanding brain-specific processes that govern local AAV transduction and mAb distribution after ICM and IST administration.
- **Figure 3**: Calibration of mAb and TargetX PBPK models: (A) simulated TargetX PK, (B) steady-state TargetX concentrations, (C) plasma mAb PK at 3-100 mg/kg IV, (D) CSF mAb PK, (E) ISF mAb PK, (F) free TargetX in CSF after 30 mg/kg mAb IV.
  - *Significance*: Validates the mAb and target submodels before integrating with AAV, ensuring accurate baseline PK/PD parameters.
- **Figure 4**: AAV9 vector PK predictions vs. observations for all routes and doses: (A) IV 5E12, (B) ICM 5E12, (C) ICM 1E12, (D) ICM 5E11, (E) IST 2.5E11 Vg.
  - *Significance*: Demonstrates the model's ability to capture AAV9 biodistribution across multiple routes and doses, with good agreement in brain and peripheral tissues.
- **Figure 5**: Anti-TargetX mAb (transgene product) PK predictions vs. observations for all AAV9 dosing groups, including plasma, CSF, ISF, brain homogenate, and peripheral tissues.
  - *Significance*: Validates the transgene expression and mAb secretion components of the model, showing reasonable capture of mAb levels across compartments.
- **Figure 6**: AAV5 vector and anti-TargetX mAb PK predictions vs. observations after ICM 5E12 Vg AAV5 administration.
  - *Significance*: Highlights the striking difference between AAV5 and AAV9: similar vector DNA levels but ~200-fold lower mAb expression, supporting the hypothesis of slow nuclear processing for AAV5.
- **Figure 7**: Model-predicted free TargetX suppression (relative to baseline) in plasma, ISF, and CSF for all tested AAV regimens.
  - *Significance*: The key pharmacodynamic output: shows that ICM and IST routes achieve superior brain target engagement, with ICM 1E12 Vg and IST 2.5E11 Vg being optimal.
- **Figure 8**: Local sensitivity analysis showing percentage change in AAV, mAb, and TargetX suppression following ±50% perturbation of key parameters (receptor densities, trafficking rates, K_nuc, K_deg, K_prod, K_sec).
  - *Significance*: Identifies K_nuc, K_deg, and K_prod as the most influential parameters for efficacy, guiding vector engineering and highlighting parameter identifiability.
- **Table 1**: Definitions and values of all model parameters for AAV9, mAb, TargetX, and brain-specific processes.
  - *Significance*: Comprehensive parameter table essential for model reproduction and understanding the physiological basis of parameter values.
- **Table 2**: Estimated parameters from model fitting: R_tot_BC, SF (scaling factor), K_off for mAb-TargetX binding, CL_up and K_deg for mAb.
  - *Significance*: Provides the key fitted parameters with their estimates, enabling assessment of model precision and physiological plausibility.
- **Table 3**: AAV5-specific parameters: K_D, K_int, K_rec, K_trans, R_tot_org, K_deg_AAV, K_nuc_AAV.
  - *Significance*: Documents the parameterization of AAV5, highlighting the extremely slow K_nuc (0.01/h) compared to AAV9, explaining the low transgene expression.

---

### Code & Reproducibility Assessment
Model fitting was performed in R using the Ubiquity package (v2.0.0) and cross-validated in Simbiology (MATLAB 2022b). The full ODE system is provided in the Supplementary Material. No public code repository is mentioned.

---

### Supplementary Materials
Supplementary Material (10928_2026_10051_MOESM1_ESM.pdf, 9.8 MB) contains the complete set of ordinary differential equations for the QSP model, additional parameter derivations (e.g., TargetX reflection coefficient, diffusion coefficient, renal clearance, PS_PV), and likely additional figures or tables supporting the model calibration. The ODE system is essential for model reproduction and should be consulted for full mathematical details.

---

### Future Directions
The model should be extended to nonhuman primates and humans by scaling physiological parameters and incorporating disease-specific changes (BBB permeability, target aggregation kinetics). Strategies to enhance efficacy can be simulated, such as BBB-shuttle peptides or brain-specific promoters. External validation with independent datasets (e.g., alternative doses, routes, or serotypes) is needed. The framework can also be applied to other CNS targets and AAV serotypes.

---

### Expert Commentary
This is a tour de force in mechanistic QSP modeling, demonstrating how platform PBPK models can be evolved and integrated to address a complex, multi-scale problem. The stepwise calibration strategy—first mAb and target PBPK, then AAV9-mAb, then AAV5—is methodologically sound and maximizes parameter identifiability. The addition of meningeal cells as a transduction site is a critical insight, explaining the high CSF mAb levels after ICM dosing. The sensitivity analysis is particularly valuable, revealing that nuclear import rate (K_nuc) and transgene production rate (K_prod) are the most influential parameters for efficacy, guiding vector engineering priorities. The AAV5 analysis is a cautionary tale: similar vector DNA levels do not imply similar functional expression, highlighting the need to measure both vector and transgene product. A limitation is the lack of external validation; the model is calibrated on all available data. Future work should focus on nonhuman primate and human translation, incorporating disease-specific changes (e.g., BBB integrity, target aggregation kinetics). This paper sets a new standard for QSP modeling in gene therapy.

---

### Bottom Line
This paper presents a comprehensive QSP model integrating AAV vector disposition, transgene expression, mAb PK, and target engagement in the rat brain. The model successfully captures data across serotypes (AAV9, AAV5), routes (IV, ICM, IST), and doses, and provides actionable predictions: ICM administration of AAV9 at a medium dose (1E12 Vg) or IST at a low dose (2.5E11 Vg) achieves superior brain target suppression with minimal systemic exposure, whereas IV AAV9 and AAV5 are less promising. The framework is a critical step toward MIDD for CNS AAV therapies.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-07-23-qsp-model-for-aav-mediated-antibody-delivery-in-rat-brain/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-07-23-qsp-model-for-aav-mediated-antibody-delivery-in-rat-brain/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-07-23-qsp-model-for-aav-mediated-antibody-delivery-in-rat-brain/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-07-23-qsp-model-for-aav-mediated-antibody-delivery-in-rat-brain/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-07-23-qsp-model-for-aav-mediated-antibody-delivery-in-rat-brain/figures/fig_05.png)

![Figure 6]({{ site.baseurl }}/assets/digests/2026-07-23-qsp-model-for-aav-mediated-antibody-delivery-in-rat-brain/figures/fig_06.png)

![Figure 7]({{ site.baseurl }}/assets/digests/2026-07-23-qsp-model-for-aav-mediated-antibody-delivery-in-rat-brain/figures/fig_07.png)

![Figure 8]({{ site.baseurl }}/assets/digests/2026-07-23-qsp-model-for-aav-mediated-antibody-delivery-in-rat-brain/figures/fig_08.png)