---
layout: post
title: "Best Practices in Physiologically Based Pharmacokinetic (PBPK) Modeling"
date: 2026-07-06
authors: "Chenel M, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70295"
paper_type: generic
tags: [generic, pbpk, regulatory]
excerpt_text: "This paper provides comprehensive, consensus-based best-practice guidance for PBPK model development, evaluation, and regulatory submission, aligned with the ICH M15 guideline. It addresses the persistent gap between submitted PBPK analyses and regulatory expectations by offering a structured, fit-for-purpose framework covering the entire workflow from planning to documentation. Essential reading for any pharmacometrician involved in PBPK modeling."
pdf_path: "/assets/digests/2026-07-06-best-practices-in-physiologically-based-pharmacokinetic-pbpk-modeling/PMx_Best_Practices_in_Physiologically_Based__20260706.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper provides comprehensive, consensus-based best-practice guidance for PBPK model development, evaluation, and regulatory submission, aligned with the ICH M15 guideline. It addresses the persistent gap between submitted PBPK analyses and regulatory expectations by offering a structured, fit-for-purpose framework covering the entire workflow from planning to documentation. Essential reading for any pharmacometrician involved in PBPK modeling.

---

### Executive Summary
This paper provides comprehensive, consensus-based best-practice guidance for the development, verification, validation, and application of PBPK models, aligned with the ICH M15 guideline on Model-Informed Drug Development. It addresses the persistent gap between the quality of submitted PBPK analyses and regulatory expectations by offering a structured, fit-for-purpose framework that covers the entire workflow—from defining the Question of Interest and Context of Use, through data compilation, model development (including IV and extravascular routes), evaluation (verification, validation, applicability assessment), and application to specific regulatory decisions (DDI, special populations, formulation changes, FIH dose projections, biologics). The paper emphasizes prospective planning, transparent documentation, and rigorous uncertainty quantification, and it provides practical guidance on parameter refinement, model structure choices, and sensitivity analysis. It is a must-read for any pharmacometrician involved in PBPK modeling for regulatory submissions.

---

### Scientific Context & Motivation
PBPK modeling is a cornerstone of Model-Informed Drug Development (MIDD), widely used for DDI risk assessment, dose optimization in special populations (pediatrics, organ impairment), and supporting clinical study waivers. Despite its established history and regulatory acceptance, a significant gap persists between the quality of submitted PBPK analyses and regulatory expectations, as highlighted by recent EMA and FDA reviews. This gap underscores the need for consolidated, actionable guidance on model development, evaluation, and reporting. The paper addresses this need by providing a best-practice framework that harmonizes terminology and expectations with the ICH M15 guideline, aiming to enhance the quality, consistency, and regulatory acceptance of PBPK analyses.

---

## ⚡ Methodological Snapshot
The paper presents a structured, iterative workflow for PBPK model development and evaluation. It begins with prospective planning: defining the Question of Interest (QoI), Context of Use (CoU), and Model Influence (MI) per ICH M15. Data compilation follows, requiring critical evaluation of system parameters (physiology), drug-specific information (physicochemical, in vitro ADME, in vivo PK), and formulation properties. Model development typically starts with an IV model to characterize systemic distribution and elimination, using bottom-up (IVIVE), middle-out, or top-down approaches. Distribution is modeled using tissue composition-based Kp prediction methods (e.g., Rodgers & Rowland, Poulin & Theil, Schmitt), with permeability-limited or perfusion-limited assumptions. Clearance is parameterized mechanistically (e.g., CLint for metabolism, CLsec for renal secretion). After establishing the IV model, an extravascular model is built, focusing on absorption processes (permeability, solubility, dissolution, gut-wall metabolism, transporters). Model evaluation includes verification (code correctness, mass balance), validation (internal and external, using graphical and quantitative metrics like AFE, AAFE, RMSE), and applicability assessment (alignment with CoU, robustness to uncertainty). The application phase involves designing simulation scenarios in virtual populations, propagating uncertainty and variability, and interpreting results in the context of the specific regulatory decision.

---

## 📋 Detailed Analysis
The paper is a landmark consolidation of PBPK best practices, addressing a critical gap between the growing use of PBPK modeling in regulatory submissions and the frequent inadequacy of those submissions. It systematically walks through the entire PBPK workflow: planning (defining QoI, CoU, model influence), data compilation (system, drug, formulation, and PK data), model development (IV model first, then extravascular), evaluation (verification, validation, applicability assessment), application (simulation design, uncertainty quantification), and documentation. A key strength is its alignment with the ICH M15 guideline, including the use of the assessment table. The paper provides practical guidance on parameter refinement (e.g., acceptable adjustment ranges for logP, permeability, fm), model structure choices (whole-body vs. minimal PBPK, perfusion- vs. permeability-limited distribution), and the use of sensitivity analysis. It also covers special populations (pediatrics, organ impairment, pregnancy) and various CoUs (DDI, formulation changes, FIH dose projections, biologics). The inclusion of a case study (vericiguat) and a detailed example of fm refinement using clinical DDI data (Box 1) adds practical value. The paper is notably balanced, acknowledging both the power and the limitations of PBPK modeling, and it provides clear, actionable recommendations for modelers at all levels.

---

### Domain Context
PBPK modeling has become a cornerstone of Model-Informed Drug Development (MIDD), with regulatory agencies (FDA, EMA) increasingly accepting PBPK-based evidence for waiving clinical studies, especially for DDI assessments and dose adjustments in special populations. However, a significant gap persists between the quality of submitted PBPK analyses and regulatory expectations, as highlighted by recent EMA reviews. This paper directly addresses that gap by providing a unified, practical framework that harmonizes terminology and expectations with the ICH M15 guideline. It is particularly timely given the 2025 EMA workshop on mechanistic model reporting and qualification. The paper also reflects the growing trend toward open-source platforms (e.g., OSP Suite) and the need for transparency and reproducibility in regulatory modeling.

---

## 📊 Key Findings
1. A significant gap exists between the quality of submitted PBPK analyses and regulatory expectations, as highlighted by recent EMA and FDA reviews. 2. The paper provides a structured, fit-for-purpose framework aligned with ICH M15, emphasizing that model credibility must be proportional to the risk and influence of the decision it supports. 3. Practical guidance is given for parameter refinement: logP adjustments should generally be within ~1 log unit, permeability within ~3-fold, and fm should be refined using clinical DDI data when possible. 4. The paper advocates for a sequential development approach (IV model first, then extravascular) to deconvolve systemic disposition from absorption processes. 5. Comprehensive documentation, including a Model Analysis Plan (MAP) and Model Analysis Report (MAR), is critical for regulatory acceptance. 6. The paper covers a wide range of CoUs (DDI, pediatrics, organ impairment, formulation changes, FIH dose projections, biologics) and provides specific credibility factors for each.

---

### Strengths & Limitations

#### Strengths
- Comprehensive, structured framework covering the entire PBPK workflow from planning to documentation.
- Aligned with the ICH M15 guideline, providing a common language for modelers and regulators.
- Provides practical, actionable guidance on parameter refinement ranges (e.g., logP, permeability, fm).
- Emphasizes the fit-for-purpose principle, ensuring model credibility is proportional to risk.
- Covers a wide range of CoUs (DDI, special populations, formulation changes, FIH, biologics) with specific credibility factors.
- Advocates for transparency and reproducibility, including submission of model files and datasets.
- Includes a useful case study (vericiguat) and a detailed example of fm refinement using clinical DDI data.

#### Limitations (Acknowledged by Authors)
- The paper acknowledges that definitive best practices for uncertainty quantification are still premature.
- It notes that Bayesian approaches for joint uncertainty estimation require further study for wider acceptance.
- The paper recognizes that developing reliable, quantitative, biopredictive assays for transporters remains challenging.
- It acknowledges that models relying solely on internal validation carry evidentiary limitations.

#### Limitations (Expert Review)
- The paper does not provide specific guidance on handling complex drug modalities like antibody-drug conjugates (ADCs) or oligonucleotides.
- The practical implementation of Bayesian methods for uncertainty propagation is mentioned but not detailed with examples.
- The paper could have included more case studies illustrating the application of the framework across different CoUs.
- The guidance on parameter estimation (e.g., when to use simultaneous vs. sequential fitting) could be more prescriptive.

#### Generalizability
The framework is designed to be broadly applicable across therapeutic areas, drug modalities (small molecules, biologics), and regulatory contexts. The principles are generalizable, but specific parameter adjustment ranges and validation criteria may need to be tailored to the specific drug and CoU.

---

---

### Figures & Tables

- **Figure 1**: Visual overview of the sequential PBPK best-practice framework: Planning, Data Compilation, Model Development, Model Evaluation, Model Application, and Documentation.
  - *Significance*: Provides a high-level roadmap for the entire PBPK workflow, serving as a navigational guide to the paper's sections.
- **Figure 2**: Illustrative example of the PBPK modeling workflow with corresponding data sources for each step (e.g., in vitro data for clearance, clinical data for validation).
  - *Significance*: Demonstrates how different data types inform specific parts of the model, promoting transparency and structured documentation.
- **Table 1**: Consolidated overview of PBPK applications (DDI, pediatrics, organ impairment, formulation/food effects, FIH, biologics) with goals, risk considerations, key credibility factors, and regulatory outcomes.
  - *Significance*: Provides a quick-reference guide linking each Context of Use to the required model credibility and expected regulatory impact.

---

### Code & Reproducibility Assessment
The paper does not provide code or specific model files, but it strongly advocates for transparency, traceability, and reproducibility, including submission of model files and datasets to regulatory agencies. The Open Systems Pharmacology (OSP) Suite is highlighted as an open-source platform that supports full transparency.

---

### Future Directions
The paper identifies several areas for future work: (1) development of robust, generalizable Bayesian methods for joint uncertainty estimation in PBPK; (2) further validation of proteomics-informed PBPK modeling for transporter-mediated disposition; (3) establishment of definitive best practices for uncertainty quantification; (4) broader adoption of the Model Master File (MMF) concept to streamline regulatory review; and (5) continued harmonization of PBPK terminology and expectations with evolving ICH M15 guidance.

---

### Expert Commentary
This paper is a much-needed, authoritative consolidation of PBPK best practices that bridges the gap between high-level frameworks and day-to-day modeling work. Its alignment with ICH M15 is particularly valuable, as it provides a common language for modelers and regulators. The practical guidance on parameter adjustment ranges (e.g., logP within ~1 unit, permeability within ~3-fold) is especially useful for modelers who often struggle with how much refinement is scientifically justifiable. The emphasis on prospective planning (MAP) and the fit-for-purpose principle is critical—too often, models are over- or under-developed for their intended use. The paper also wisely acknowledges the limitations of current uncertainty quantification methods and calls for further research. One area that could have been expanded is the practical implementation of Bayesian approaches for uncertainty propagation, which are mentioned but not detailed. Overall, this paper should become a standard reference for any PBPK modeling group and is essential reading for regulatory reviewers.

---

### Bottom Line
This paper provides a comprehensive, actionable best-practice framework for PBPK model development, evaluation, and regulatory submission, aligned with ICH M15. It emphasizes a fit-for-purpose approach where model credibility is proportional to the risk and influence of the decision it supports. Practitioners should adopt the structured workflow—from prospective planning with a Model Analysis Plan through rigorous verification, validation, and applicability assessment—to improve the quality and regulatory acceptance of their PBPK analyses.

---

---

## 📊 Figures

![The PBPK best-practice framework. A visual overview of the sequential process for PBPK model planning, development, evaluation, application and reporting as deta]({{ site.baseurl }}/assets/digests/2026-07-06-best-practices-in-physiologically-based-pharmacokinetic-pbpk-modeling/figures/fig_01.jpg)

![Visualization of the PBPK modeling workflow and corresponding data sources used for model development, validation and application, and to the right a case exampl]({{ site.baseurl }}/assets/digests/2026-07-06-best-practices-in-physiologically-based-pharmacokinetic-pbpk-modeling/figures/fig_02.jpg)