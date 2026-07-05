---
layout: post
title: "Accelerating Subcutaneous Drug Development: A Mechanistic Absorption Model for the Open Systems Pharmacology Framework"
date: 2026-07-05
authors: "P. M., I. D., and E. S."
journal: "N/A (preprint/manuscript under review)"
doi: "N/A"
paper_type: methodology
tags: [methodology, pbpk, qsp]
excerpt_text: "This paper presents a mechanistic, whole-body PBPK-integrated model for subcutaneous drug absorption, implemented in the open-source Open Systems Pharmacology platform. The model is applicable to both small molecules and biologics across species and captures key processes such as tissue dispersion, vascular/lymphatic uptake, and FcRn-mediated recycling. Sensitivity analyses and case studies with seven drugs demonstrate the model's ability to describe absorption kinetics, but further validation is needed for quantitative predictions."
pdf_path: "/assets/digests/2026-07-05-accelerating-subcutaneous-drug-development-a-mechanistic-absorption-model-for/PMx_Accelerating_Subcutaneous_Drug_Developme_20260705.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a mechanistic, whole-body PBPK-integrated model for subcutaneous drug absorption, implemented in the open-source Open Systems Pharmacology platform. The model is applicable to both small molecules and biologics across species and captures key processes such as tissue dispersion, vascular/lymphatic uptake, and FcRn-mediated recycling. Sensitivity analyses and case studies with seven drugs demonstrate the model's ability to describe absorption kinetics, but further validation is needed for quantitative predictions.

---

### Executive Summary
This paper presents a mechanistic, physiologically based pharmacokinetic (PBPK) model for subcutaneous (SC) drug absorption, implemented within the Open Systems Pharmacology (OSP) platform. The model integrates a detailed description of the injection site (depot, discretized tissue layers, local vasculature and lymphatics) with the whole-body PBPK structure of PK-Sim, enabling unified simulations for both small molecules and biologics across species. Sensitivity analyses and case studies with seven drugs (adalimumab, rituximab, buprenorphine, fentanyl, lenacapavir, methotrexate, ropivacaine) demonstrate the model's ability to capture absorption kinetics, including the molecular-weight-dependent shift from vascular to lymphatic absorption. The framework is intended as a structural backbone for further development and context-specific validation, with the goal of supporting formulation strategy and dosing regimen optimization.

---

### Scientific Context & Motivation
Subcutaneous (SC) administration is increasingly used for both small molecules and biologics due to its convenience and reduced invasiveness. However, predicting SC absorption remains challenging due to the complex interplay between molecular properties, formulation characteristics, injection parameters, and physiological factors. Existing models are often bifurcated: empirical first-order models for small molecules lack mechanistic insight, while physiologically based models for biologics are rarely integrated into a holistic PBPK framework. This study addresses the need for a unified, mechanistic SC absorption model that can be applied across drug classes and species, leveraging the open-source OSP platform to facilitate translation and extrapolation.

---

## ⚡ Methodological Snapshot
The paper presents a mechanistic, physiologically based model for subcutaneous (SC) drug absorption, implemented within the Open Systems Pharmacology (OSP) platform. The model represents the injection site as a central depot (cylindrical or spherical geometry) surrounded by discretized tissue layers, each with its own interstitial, vascular, and lymphatic compartments. Drug transport occurs via diffusion from the depot to the tissue layers, followed by extravasation into local vasculature (via endothelial permeability) and lymphatic drainage. For large molecules, endosomal uptake, FcRn-mediated recycling, and lymphatic absorption are explicitly modeled. The model is parameterized using the whole-body PBPK structure of PK-Sim, allowing direct translation of drug properties (MW, lipophilicity, fraction unbound) between systemic disposition and the injection site. Sensitivity analyses and case studies with seven drugs demonstrate the model's ability to capture absorption kinetics, including the molecular-weight-dependent shift from vascular to lymphatic absorption.

---

## 📐 Statistical Framework
The model is a deterministic, physiologically based pharmacokinetic (PBPK) model, not a statistical model. It is based on mass balance equations describing drug transport between compartments (depot, tissue layers, vasculature, lymphatics). Key assumptions include: (1) the injection site is represented by a central depot and concentric tissue layers; (2) drug transport occurs via diffusion (Fick's law) and convection (lymphatic flow); (3) for large molecules, endosomal uptake and FcRn-mediated recycling follow Michaelis-Menten kinetics; (4) tissue layers are homogeneous and serially interconnected; (5) physiological parameters (blood flow, lymphatic flow, tissue volumes) are taken from the PK-Sim database. The model does not incorporate stochastic elements or formal statistical inference; parameter estimation is performed by minimizing sum of squared residuals.

---

### Estimator Behavior
The model's estimator behavior was not formally characterized in terms of bias, efficiency, or convergence. Parameter estimation was performed using the built-in 'Parameter Identification' functionality in PK-Sim, minimizing sum of squared residuals. The sensitivity analysis revealed that for small molecules, the model is highly sensitive to local $K_p$ and $P_c$, which may lead to identifiability issues when local tissue concentration data are unavailable. For large molecules, the model is sensitive to MW and FcRn affinity, with a clear shift in absorption route from vascular to lymphatic dominance above ~30-40 kDa.

---

### Validation Design
The model was evaluated using observed plasma concentration-time data from seven drugs (adalimumab, rituximab, buprenorphine, fentanyl, lenacapavir, methotrexate, ropivacaine) across multiple species (human, monkey, rat, mouse, rabbit, dog). For each drug, intravenous data were used to develop the systemic disposition model, and the SC model was then evaluated against SC data. Parameter estimation was performed by minimizing sum of squared residuals. The evaluation was not a formal validation but a demonstration of model performance. Sensitivity analyses were conducted to investigate the influence of key parameters ($K_p$, $P_c$, MW, FcRn affinity, injection volume, dispersion) on model output.

---

### Comparison to Alternatives
The model distinguishes itself from empirical first-order absorption models (common for small molecules) and from standalone mechanistic models like SubQ-Sim by being fully integrated into the whole-body PBPK framework of PK-Sim. This integration allows direct translation of drug properties (lipophilicity, MW) between systemic disposition and the injection site, enhancing computational efficiency and adaptability. Unlike SubQ-Sim, which focuses heavily on injection system parameters, this model leverages the native PK-Sim structure for local disposition, providing a more harmonized and flexible approach for both small and large molecules.

---

### Implementation Guidance
The model is implemented in MoBi v11.2 and R package ospsuite. Users should: (1) develop a systemic PBPK model in PK-Sim for the drug and species of interest; (2) export the model as a pkml file and import it into the SC model template in MoBi; (3) parameterize injection-site variables (dispersion factor, depot geometry, formulation release) using a priori assumptions, experimental data, or a learn-and-confirm strategy; (4) for small molecules, focus on local $K_p$, $P_c$, and metabolism; for large molecules, focus on dispersion, endosomal uptake, and FcRn affinity. The model is computationally efficient for single simulations but may require optimization for parameter estimation. The open-source nature allows for custom extensions.

---

## 📊 Key Findings
The model successfully captured the absorption kinetics of seven diverse drugs (two mAbs, five small molecules) across multiple species. Key findings include: (1) a molecular-weight-dependent shift from vascular to lymphatic absorption, with the transition occurring around 30-40 kDa; (2) for large molecules, considerable interspecies differences in dispersion and presystemic loss were observed; (3) for small molecules, cross-species trends in local tissue distribution were identified, but parameter identifiability was limited; (4) the model could describe formulation effects (e.g., sustained release of buprenorphine) and injection volume dependencies (lenacapavir) using surrogate parameters.

---

### Strengths & Limitations

#### Strengths
- Mechanistic, physiologically based framework integrated with whole-body PBPK model.
- Applicable to both small molecules and biologics across multiple species.
- Open-source implementation in the OSP platform, facilitating reproducibility and extension.
- Sensitivity analysis provides insights into key drivers of SC absorption.
- Case studies demonstrate model's ability to capture absorption kinetics for diverse drugs.

#### Limitations (Acknowledged by Authors)
- Lack of complete and detailed data on injection parameters and formulation properties in the public domain.
- Need for surrogate parameters or assumptions (e.g., retained solubilization, species-specific dispersion).
- High sensitivity to local $K_p$ and $P_c$ for small molecules, leading to potential identifiability issues.
- Physiological assumptions (homogeneous tissue layers, generic endosomal functionalities) may oversimplify SC space heterogeneity.
- The model is a 'proof-of-concept' and requires context-specific validation.

#### Limitations (Expert Review)
- No formal statistical evaluation of estimator properties (bias, efficiency, convergence) was performed.
- The model's predictive performance was not assessed against independent datasets (no external validation).
- The parameter estimation strategy (minimizing sum of squared residuals) may be sensitive to initial values and local minima.
- The model does not account for time-dependent physiological changes (e.g., inflammation, changes in blood flow) after injection.
- The surrogate approach for formulation release (using diffusion coefficient) limits mechanistic interpretation.

#### Generalizability
The model is designed to be generalizable across drug classes (small molecules and biologics) and species (human, monkey, rat, mouse, rabbit, dog). However, the case studies are limited to seven drugs, and the model requires explicit parameterization of injection-site variables, which may limit its generalizability to new drugs or formulations without additional data.

---

---

### Figures & Tables

- **Figure 1**: Graphical representation of the SC absorption and disposition model, showing the depot, discretized tissue layers, and local vasculature/lymphatics.
  - *Significance*: Provides a visual overview of the model structure and the key compartments and processes included.
- **Figure 2**: Model sensitivity to local tissue partition coefficient ($K_p$) and cellular permeability ($P_c$) for a generic small molecule.
  - *Significance*: Demonstrates the model's sensitivity to key local disposition parameters, highlighting potential identifiability issues.
- **Figure 3**: Model sensitivity to molecular weight for a generic large molecule, showing fraction absorbed via vascular and lymphatic routes.
  - *Significance*: Illustrates the molecular-weight-dependent shift from vascular to lymphatic absorption, a key mechanistic feature of the model.
- **Figure 4**: Observed and model-simulated plasma concentration-time profiles for adalimumab and rituximab in different species.
  - *Significance*: Demonstrates the model's ability to capture absorption kinetics for large molecules across species with minimal parameter adjustment.

---

### Code & Reproducibility Assessment
The model is implemented in the Open Systems Pharmacology software (MoBi v11.2, PK-Sim v9+) and the R package ospsuite. The SC model module is provided as a MoBi v12 module (Supporting Information S4). The code is open-source and available via the OSP GitHub repository.

---

### Supplementary Materials
Supporting Information S1 provides detailed information on model components, parameters, and default settings. Supporting Information S2 summarizes systemic model settings and parameters for each drug. Supporting Information S3 contains additional sensitivity analysis results. Supporting Information S4 provides the MoBi v12 module for the SC model.

---

### Future Directions
Future developments should focus on: (1) incorporating explicit descriptions of drug-excipient interactions, aggregation, and precipitation; (2) modeling drug interactions with the extracellular matrix (e.g., charge-based interactions with hyaluronic acid); (3) integrating time-dependent physiological responses to injection (inflammation, changes in blood flow/lymphatic drainage); (4) adapting the model for special populations (pediatrics, obesity, disease states); and (5) developing predictive correlations for injection-site parameters (dispersion, depot geometry) to enable a priori predictions.

---

### Expert Commentary
This work represents a significant step forward in mechanistic SC absorption modeling by providing an open-source, whole-body PBPK-integrated framework. The key innovation is the harmonization of the SC site with the PK-Sim structure, which allows direct use of systemic drug properties for local disposition. However, the model's practical utility is currently limited by the need for explicit parameterization of injection-site variables (dispersion, depot geometry, formulation release), which are often unknown. The authors acknowledge this and suggest a 'learn-and-confirm' strategy. The sensitivity analysis and case studies are well-designed but do not constitute formal validation. The framework is most valuable as a research tool for hypothesis generation and mechanistic exploration, rather than for routine quantitative predictions. Future work should focus on developing predictive correlations for injection-site parameters and validating the model against independent datasets.

---

### Bottom Line
This paper provides a mechanistic, whole-body PBPK-integrated SC absorption model for both small and large molecules, implemented in the open-source OSP platform. It offers a structural backbone that can be parameterized for different species and drug classes, but requires further validation and explicit parameterization of injection-site variables before it can be used for quantitative predictions in drug development.

---

---

## 📊 Figures

![Graphical representation of the subcutaneous absorption and disposition model. (A) The physical injection site is represented by a volume including the injected]({{ site.baseurl }}/assets/digests/2026-07-05-accelerating-subcutaneous-drug-development-a-mechanistic-absorption-model-for/figures/fig_01.png)

![Model sensitivity to local tissue partition coefficient ($K_p$) and cellular permeability ($P_c$) for a generic small molecule. Simulated output as total fraction abso]({{ site.baseurl }}/assets/digests/2026-07-05-accelerating-subcutaneous-drug-development-a-mechanistic-absorption-model-for/figures/fig_02.png)

![Model sensitivity to molecular weight for a generic large molecule. (A) Simulated fraction absorbed over time (Total), and separately for the vascular and lympha]({{ site.baseurl }}/assets/digests/2026-07-05-accelerating-subcutaneous-drug-development-a-mechanistic-absorption-model-for/figures/fig_03.png)

![Observed (gray dots) and model simulated (solid lines) plasma concentration-time profiles of adalimumab and rituximab in different species. For all species, mode]({{ site.baseurl }}/assets/digests/2026-07-05-accelerating-subcutaneous-drug-development-a-mechanistic-absorption-model-for/figures/fig_04.png)