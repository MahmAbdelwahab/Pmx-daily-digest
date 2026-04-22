---
layout: post
title: "Open Systems Pharmacology Community Conference (OSP-CC) Proceedings 2025"
date: 2026-02-23
authors: "Cordes H, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "https://ascpt.onlinelibrary.wiley.com/doi/10.1002/psp4.70217?af=R"
paper_type: generic
tags: [generic, pbpk, qsp, covariate-analysis, pediatrics, regulatory, machine-learning]
excerpt_text: "A comprehensive update on the Open Systems Pharmacology (OSP) ecosystem, detailing the transition to modular modeling in V12/V13 and the integration of machine learning. Essential reading for PBPK modelers using PK-Sim/MoBi to understand new regulatory qualification workflows and upcoming features like organoid integration and population PBPK estimation."
pdf_path: "/assets/digests/2026-02-23-open-systems-pharmacology-community-conference-osp-cc-proceedings-2025/PMx_Open_Systems_Pharmacology_Community_Conf_20260223.pdf"
retroactively_classified: true
---

### Quick Take
A comprehensive update on the Open Systems Pharmacology (OSP) ecosystem, detailing the transition to modular modeling in V12/V13 and the integration of machine learning. Essential reading for PBPK modelers using PK-Sim/MoBi to understand new regulatory qualification workflows and upcoming features like organoid integration and population PBPK estimation.

---

### Executive Summary
This proceedings paper summarizes the 2025 OSP Community Conference, highlighting the maturation of the OSP Suite (PK-Sim/MoBi) into a fully modular, open-source ecosystem for Model-Informed Drug Development (MIDD). Key advancements include the integration of human intestinal organoids for bioavailability prediction, the release of the 'saemixPBPK' package for population parameter estimation, and automated workflows for regulatory reporting. The paper outlines the software roadmap (V13/V14), emphasizing improved support for special populations (obesity, geriatrics), Linux/MacOS compatibility, and the 'Extension Module' concept that facilitates seamless PBPK-QSP integration. Regulatory perspectives from the MHRA confirm the growing acceptance of OSP models when accompanied by robust Context of Use (CoU) qualification.

---

## ⚡ Methodological Snapshot
The proceedings cover a diverse range of methodologies centered on the OSP Suite. Key workflows include Physiologically Based Biopharmaceutics Modeling (PBBM) for virtual bioequivalence, high-throughput PBPK combined with machine learning for early discovery, and hybrid Population-PBPK approaches. The core modeling framework utilizes PK-Sim for whole-body PBPK and MoBi for mechanistic systems biology extensions.

---

## 🏗️ Structural Model Breakdown
The paper introduces the 'Extension Module' concept (Figure 1) for OSP V12. Instead of monolithic files, models are composed of: 1) Base PBPK Models, and 2) Reusable Extension Modules (representing specific organs, administration routes, disease states, or biomarkers). Specific structural applications mentioned include: a siRNA model accounting for liver-targeted delivery and RISC complex formation; and a Vericiguat PBBM incorporating mechanistic particle dissolution equations.

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole-body PBPK (PK-Sim) and Systems Biology (MoBi) within the OSP Suite V12+. Introduction of 'Extension Modules' for modular model building. Hybrid approaches include Graph Convolutional Neural Networks (GNN) combined with PBPK.

#### Data Sources
In vitro data (human intestinal organoids, USP 2 dissolution), preclinical PK (rat/monkey), and clinical data for special populations (obesity, pediatrics, geriatrics). RNAseq expression databases used for parameter identification.

#### Estimation Methods
Parameter Identification via OSPSuite.ParameterIdentification tool. Population parameter estimation using the 'saemixPBPK' R package, which implements the Stochastic Approximation Expectation-Maximization (SAEM) algorithm.

#### Model Evaluation
Automated qualification workflows generating 'OSP-Qualification-Reports'. Validation against clinical data using Visual Predictive Checks (implied) and ROC analysis for DILI prediction.

#### Covariate Analysis
Mechanistic incorporation of covariates via physiological databases: Age, BMI, Organ Weights, Blood Flows, and GFR. Specific focus on obesity and geriatric physiology updates.

---

### Scientific Context & Motivation
The pharmacometrics field is increasingly moving away from 'black box' proprietary software toward transparent, reproducible open-source tools. However, challenges remain in standardizing regulatory reporting and integrating complex biological data (e.g., proteomics, organoids) into mechanistic models. This paper addresses these gaps by presenting community-driven solutions for automated model qualification, hybrid ML-PBPK approaches, and the structural modularization required to handle increasing model complexity.

---

### Statistical Rigor Assessment
The paper emphasizes a 'Three-Pillar Approach' to quality: 1) Software Validation, 2) Context of Use (CoU) Qualification, and 3) Installation Verification. For population analysis, the integration of SAEM allows for rigorous estimation of inter-individual variability (IIV) within a mechanistic framework, moving beyond simple sensitivity analyses.

---

## 📊 Key Findings
1) Organoid-informed PBPK models showed good correlation with clinical bioavailability, validating gut wall metabolism assessment. 2) A hybrid PBPK-in vitro toxicity model predicted Drug-Induced Liver Injury (DILI) with an ROC AUC of 91%, significantly outperforming heuristic rules (50-70%). 3) The hybrid ML-PBPK rat model, trained on ~10,000 compounds, demonstrated superior oral exposure predictions compared to deep learning alone. 4) The 'saemixPBPK' package successfully estimated parameters for theophylline (smoking covariate) and itraconazole DDI studies.

---

## 💡 Clinical & Regulatory Implications
The 'Virtual Bioequivalence (VBE) Toolbox' enables probabilistic predictions to support biowaivers and reduce clinical trial burden. Updated physiological databases for obesity and geriatrics allow for more accurate dose optimization in these under-represented populations. The automated reporting workflows streamline the generation of regulatory submission packages, potentially accelerating review times.

---

### Strengths & Limitations

#### Strengths
- Open-source transparency allowing full code inspection
- Robust, automated qualification framework for regulatory compliance
- Integration of state-of-the-art algorithms (SAEM, ML/AI) into mechanistic modeling
- Modular architecture facilitates model reuse and QSP integration

#### Limitations (Acknowledged by Authors)
- Knowledge gaps persist in siRNA extravasation mechanisms and RISC dynamics
- High-risk regulatory applications (e.g., extrapolations) require intense scrutiny and qualification
- Species-specific target variations remain a challenge for translation

#### Limitations (Expert Review)
- As a conference proceeding, specific model equations and parameter values for the case studies (e.g., Vericiguat) are not detailed
- Reliance on community contributions requires continuous quality control of the model library

#### Generalizability
Highly generalizable as a platform; the tools and databases described are applicable across small molecules, biologics, and varying therapeutic areas.

---

---

### Figures & Tables

- **Table 1**: Summary of conference sessions, chairs, and speakers.
  - *Significance*: Provides an overview of the breadth of topics covered, from clinical applications to software engineering.
- **Figure 1**: OSP Extension Module concept diagram.
  - *Significance*: Visualizes the new V12 architecture where Base PBPK models are combined with reusable Extension Modules (Organs, Administration, Disease, Biomarkers), enabling modular QSP.

---

### Code & Reproducibility Assessment
Excellent. The entire ecosystem is open source. Key repositories referenced: OSP-PBPK-Model-Library, OSPSuite-R, osp.snapshots, and saemixPBPK on GitHub.

---

### Future Directions
Release of OSP V13/V14 focusing on: 1) Linux and MacOS support, 2) New populations (obesity, specific ethnicities), 3) Expanded absorption models, and 4) A standardized qualification framework for MoBi projects. Continued development of modular PBPK-QSP integration.

---

### Expert Commentary
This report signals the transition of OSP from a 'software tool' to a 'standard of practice' in MIDD. The introduction of the 'saemixPBPK' package is particularly significant for pharmacometricians, as it finally bridges the gap between the statistical rigor of PopPK (NONMEM/Monolix) and the mechanistic detail of PBPK. The move toward modularity (Extension Modules) mirrors software engineering best practices and is essential for managing the complexity of modern QSP models. The active involvement of regulators (MHRA) in the community conference underscores the viability of open-source tools for submission.

---

### Bottom Line
The OSP ecosystem is evolving rapidly. Practicing pharmacometricians should adopt the new modular workflows (V12+) and explore the 'saemixPBPK' package for hybrid modeling. The automated reporting and qualification tools are now mature enough to significantly streamline regulatory submissions.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: OSP Extension Module concept. PK-Sim models are composed of individual Building Blocks (https: docs.open-systems-pharmacology.org/v12/open-systems-pharmacology-],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```