---
layout: post
title: "Building Hybrid Pharmacometric-Machine Learning Models in Oncology Drug Development: Current State and Recommendations"
date: 2026-07-26
authors: "Fochesato A, Brooks L, Bazgir O, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(1): e70113"
doi: "10.1002/psp4.70113"
paper_type: generic
tags: [generic, oncology, regulatory, machine-learning]
excerpt_text: "This tutorial reviews 29 hybrid pharmacometric-machine learning (hPMxML) models in oncology, identifies critical gaps in reporting and methodology (e.g., no error propagation, limited external validation), and proposes a comprehensive seven-pillar checklist for standardized development and reporting. The checklist is designed to enhance reproducibility, transparency, and regulatory acceptance."
pdf_path: "/assets/digests/2026-07-26-building-hybrid-pharmacometric-machine-learning-models-in-oncology-drug/PMx_Building_Hybrid_PharmacometricMachine_Le_20260726.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This tutorial reviews 29 hybrid pharmacometric-machine learning (hPMxML) models in oncology, identifies critical gaps in reporting and methodology (e.g., no error propagation, limited external validation), and proposes a comprehensive seven-pillar checklist for standardized development and reporting. The checklist is designed to enhance reproducibility, transparency, and regulatory acceptance.

---

### Executive Summary
This tutorial reviews the current state of hybrid pharmacometric-machine learning (hPMxML) models in oncology drug development, identifies critical reporting and methodological gaps, and proposes a comprehensive seven-pillar checklist for standardized model development and reporting. The checklist covers clinical setup, data preprocessing, model training, validation, secondary analysis, applicability domain, and benchmarking, with items coded as mandatory or optional based on regulatory weight. The authors advocate for community adoption and refinement to enhance reproducibility, transparency, and regulatory acceptance of hPMxML models.

---

### Scientific Context & Motivation
Hybrid pharmacometric-machine learning (hPMxML) models are increasingly used in oncology drug development, but lack standardized workflows for development and reporting. Existing guidelines (TRIPOD-AI, CONSORT-AI, PROBAST-AI) are too generic to address the specific challenges of combining mechanistic PMx models with data-driven ML components. This leads to issues with transparency, reproducibility, and regulatory acceptance. The paper aims to fill this gap by providing a domain-specific checklist that integrates PMx and ML best practices.

---

## ⚡ Methodological Snapshot
The authors conducted a two-stage review. First, they reviewed established PMx and ML reporting guidelines (e.g., TRIPOD-AI, MI-CLAIM, PROBAST-AI, Musuamba et al.) to identify commonalities and domain-specific elements. Second, they systematically searched for hPMxML models in oncology (PubMed, 2020-2024) using four query strings, yielding 29 eligible works. Each work was evaluated against a set of metrics derived from the first stage, including data description, performance metric rationale, uncertainty quantification, validation techniques, explainability, sensitivity analysis, benchmarking, and code sharing. Deficiencies were identified where <50% of works met a given metric. Based on these gaps, a comprehensive checklist was developed, structured into seven blocks with items coded as mandatory (Δ) or optional (Ο) based on regulatory weight.

---

## 📋 Detailed Analysis
The paper systematically reviews 29 hPMxML models in oncology, revealing major deficiencies: lack of error propagation handling, robustness assessment (feature stability, multi-start), benchmarking, external validation, and metric alignment with clinical questions. The proposed checklist (Table 2) is a significant contribution, structured into seven blocks: clinical setup, data preprocessing, model training, model validation, secondary analysis, applicability domain, and benchmark studies. Each item is coded as mandatory (Δ) or optional (Ο) based on regulatory weight. The checklist integrates PMx and ML best practices, addressing unique hPMxML challenges such as error propagation (Section 6, item 3.6.1) and causal inference (item 4.2.4). The paper also provides practical guidance on data splitting, imputation, feature stability, and uncertainty quantification. A key strength is the balanced perspective: the authors caution against over-reliance on AI/ML, advocating for parsimony and starting with conventional methods. The main limitation is that the checklist is derived from a single pharma perspective (Roche/Genentech), potentially introducing bias. The paper calls for community refinement.

---

### Domain Context
This work sits at the intersection of pharmacometrics (PMx) and machine learning (ML), a rapidly evolving field in model-informed drug development (MIDD). The paper addresses the lack of standardized workflows for hybrid models, which combine mechanistic PMx models with data-driven ML components. The focus on oncology is justified by the high volume of hPMxML applications in this area, but the proposed framework is intended to be disease-agnostic. The paper aligns with regulatory initiatives (FDA, EMA) on AI/ML credibility and extends existing reporting guidelines (TRIPOD-AI, CONSORT-AI, PROBAST-AI) to the specific context of hybrid modeling.

---

## 📊 Key Findings
1. A review of 29 hPMxML models in oncology revealed major deficiencies: no error propagation handling, <25% external validation, ~55% benchmarking, and limited robustness assessment (feature stability, multi-start). 2. PMx and ML workflows share core principles (CoU-specific plans, assumption declaration, sensitivity analysis, code disclosure) but differ in data splitting, data augmentation, benchmarking, and explainability practices. 3. The proposed seven-pillar checklist (Table 2) provides a structured, regulatory-aligned framework for hPMxML model development and reporting, with items coded as mandatory (Δ) or optional (Ο). 4. Key recommendations include: a priori estimand definition, comprehensive data description, mandatory internal/external validation, error propagation quantification, feature stability analysis, ablation studies, and code sharing.

---

### Strengths & Limitations

#### Strengths
- Comprehensive, systematic review of both PMx and ML guidelines.
- Clear identification of specific gaps in current hPMxML practice.
- Practical, actionable checklist with regulatory-aligned prioritization (mandatory vs. optional).
- Balanced perspective: advocates for parsimony and starting with conventional methods.
- Addresses unique hPMxML challenges (error propagation, causal explainability).

#### Limitations (Acknowledged by Authors)
- Checklist produced by a single pharma (Roche/Genentech), possibly prone to bias.
- Many reviewed papers were exploratory, not designed for regulatory submission.
- Oncology focus may not capture all challenges in other therapeutic areas.

#### Limitations (Expert Review)
- No formal validation of the checklist itself (e.g., inter-rater reliability, user testing).
- The review only included 29 papers; a larger sample might reveal additional gaps.
- The checklist may be too comprehensive for early-stage exploratory work, potentially hindering adoption.
- No discussion of computational cost or feasibility of implementing all mandatory items.

#### Generalizability
The checklist is designed to be disease-agnostic, though the review focused on oncology. The authors provide evidence of similar deficiencies in non-oncology applications (Figure S2). Generalizability may be limited by the single-company perspective (Roche/Genentech) and the focus on supervised learning with RCT data.

---

---

### Figures & Tables

- **Figure 2**: Barplot showing the percentage of 29 reviewed hPMxML models that meet each reporting standard derived from PMx and AI/ML guidelines.
  - *Significance*: Visually summarizes the major deficiencies in current hPMxML reporting, including error propagation (0%), robustness assessment (~10%), benchmarking (~55%), and external validation (~25%).

---

### Code & Reproducibility Assessment
The paper strongly advocates for code sharing (e.g., GitHub, DDMoRE) and provides a detailed reproducibility checklist (Table 2, items 2.5, 3.7, 4.3, 7.4, 7.5). However, no specific code repository is linked in the manuscript.

---

### Supplementary Materials
The paper mentions supporting information including a PRISMA flow diagram (Figure S1), a comparison table of PMx and ML workflows (Tables S1, S2), a list of reviewed oncology hPMxML models (Table S3), and a list of non-oncology applications (Table S4) with similar deficiencies (Figure S2). These materials are not included in the provided text but are referenced as available online.

---

### Future Directions
Future work should focus on: (1) multi-stakeholder refinement of the checklist (regulators, academia, industry); (2) development of standardized software tools to automate checklist compliance; (3) prospective application of the checklist in real-world drug development projects to validate its utility; (4) extension to non-oncology therapeutic areas; (5) integration with emerging regulatory frameworks for AI/ML in drug development.

---

### Expert Commentary
This is a timely and much-needed contribution. The field of hPMxML has been growing rapidly, but without consistent standards, leading to models that are difficult to compare, reproduce, or trust. The checklist is practical and well-grounded in both PMx and ML best practices. The emphasis on error propagation, feature stability, and causal explainability is particularly valuable. The main caveat is the single-company origin; broader multi-stakeholder input would strengthen future versions. Nonetheless, this paper should be required reading for anyone developing or evaluating hybrid models in drug development.

---

### Bottom Line
This tutorial provides a comprehensive, actionable checklist for developing and reporting hybrid pharmacometric-machine learning (hPMxML) models, addressing critical gaps in standardization, transparency, and regulatory compliance. Practitioners should adopt the proposed seven-pillar framework to ensure model credibility, reproducibility, and clinical adoptability.

---

---

## 📊 Figures

![The barplot shows the percentage of hPMxML models presenting reporting standards per topic as expected from the reviewed PMx and AI/ML guidelines. Percentages ar]({{ site.baseurl }}/assets/digests/2026-07-26-building-hybrid-pharmacometric-machine-learning-models-in-oncology-drug/figures/fig_01.png)