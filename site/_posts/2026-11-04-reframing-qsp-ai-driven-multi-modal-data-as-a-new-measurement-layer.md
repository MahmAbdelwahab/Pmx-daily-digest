---
layout: post
title: "Reframing QSP: AI-Driven Multi-Modal Data as a New Measurement Layer."
date: 2026-11-04
authors: "Jane Knöchel"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70373"
paper_type: generic
tags: [generic, qsp]
excerpt_text: "This perspective argues that AI-derived outputs should be treated as a new measurement layer, analogous to laboratory assays, rather than as raw data. Using the ELISA assay and the AIM-MASH case study, the author highlights the need for validation, standardization, and uncertainty quantification to integrate AI measurements into QSP models."
pdf_path: "/assets/digests/2026-11-04-reframing-qsp-ai-driven-multi-modal-data-as-a-new-measurement-layer/PMx_Reframing_QSP_AIDriven_MultiModal_Data_a_20261104.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This perspective argues that AI-derived outputs should be treated as a new measurement layer, analogous to laboratory assays, rather than as raw data. Using the ELISA assay and the AIM-MASH case study, the author highlights the need for validation, standardization, and uncertainty quantification to integrate AI measurements into QSP models.

---

### Executive Summary
Knöchel reframes the integration of AI and QSP by proposing that AI-based analytical pipelines be viewed as measurement systems that generate quantitative biological observables, not merely as data integration tools. Drawing parallels to the ELISA assay, the author argues that AI outputs carry random error and systematic bias that must be characterized and reported. The case of AIM-MASH, an FDA-qualified AI tool for MASH histology, illustrates both the potential of continuous AI-derived scores and the challenges of inheriting reference biases and lacking defined thresholds. The perspective positions QSP as a conceptual foundation model of biology that can provide mechanistic context for interpreting AI measurements, and calls for standardization and uncertainty quantification to enable reliable use in drug development.

---

### Scientific Context & Motivation
QSP models rely on quantitative biological data, but such data are often treated as objective truths despite being constructed through measurement processes. Traditional assays like ELISA have established validation and standardization protocols, whereas AI-based measurement pipelines lack equivalent standards, leading to issues of comparability, reproducibility, and transferability. This creates a gap in how AI-derived data are integrated into QSP and pharmacometrics workflows, particularly in regulated settings where uncertainty and validation are critical.

---

## ⚡ Methodological Snapshot
This is a perspective article, not an empirical study. The author uses a conceptual analysis approach, drawing on established knowledge of assay validation (ELISA) and recent developments in AI-based measurement tools (AIM-MASH). The argument is structured around the analogy between laboratory assays and AI pipelines, and the implications for QSP modeling are discussed qualitatively.

---

## 📋 Detailed Analysis
The paper's central thesis is that AI-derived outputs should be treated as measurements, not data. This reframing has profound implications for QSP modeling. By viewing AI as a measurement layer, the author separates the act of generating quantitative representations from the act of integrating them into mechanistic models. This separation allows for more rigorous handling of uncertainty and validation. The ELISA analogy is apt: just as ELISA results are only meaningful after calibration and standardization, AI outputs require similar treatment. The AIM-MASH example is well-chosen, as it is a real-world, FDA-qualified tool that produces continuous scores. However, the author correctly notes that these scores inherit the biases of the pathologist reference and lack defined clinical thresholds. This highlights the need for QSP models to provide the biological context to interpret these scores. The paper also touches on the need for standardization, which is a practical challenge that the pharmacometrics community is beginning to address. Overall, the perspective is well-argued and provides a clear framework for future work.

---

### Domain Context
This paper sits at the intersection of QSP, pharmacometrics, and AI/ML. It addresses a growing concern in the field: how to reliably integrate AI-derived data into mechanistic models. The concept of 'measurement' is central to clinical pharmacology, and the author extends this concept to AI, which is a novel contribution. The paper also aligns with regulatory trends, as seen in the FDA qualification of AIM-MASH, and with the efforts of professional societies like ISoP to establish best practices for AI in pharmacometrics.

---

## 📊 Key Findings
The paper presents a conceptual argument rather than empirical results. Key points include: (1) AI outputs should be considered measurements, not raw data, with inherent errors and biases; (2) the 'ELISA problem' describes the lack of standardization in AI pipelines; (3) QSP can serve as a mechanistic prior to interpret and calibrate AI-derived measurements; (4) AIM-MASH demonstrates the potential of continuous AI scores but also highlights challenges such as inherited bias and undefined thresholds; (5) explicit treatment of measurement error and uncertainty is essential for integrating AI measurements into QSP models.

---

### Strengths & Limitations

#### Strengths
- Provides a novel conceptual framework that clarifies the distinction between data generation and mechanistic modeling.
- Uses a concrete, FDA-qualified example (AIM-MASH) to illustrate the practical implications.
- Draws a compelling analogy to ELISA, making the argument accessible and grounded in established assay science.
- Highlights actionable needs: standardization, uncertainty quantification, and validation for AI-derived measurements.

#### Limitations (Acknowledged by Authors)
- The correspondence between ELISA and AI workflows is conceptual, not step-for-step.
- The interpretation of AI-derived scores (e.g., clinical thresholds) is not yet established.
- The use of AI in QSP to interpret such scores has not yet been demonstrated.

#### Limitations (Expert Review)
- The paper is a perspective and lacks empirical validation of the proposed framework.
- The definition of 'foundation model' is used conceptually, which may cause confusion with technical AI foundation models.
- The discussion of uncertainty quantification is high-level and does not provide specific methods or examples.
- The focus on MASH may limit generalizability to other therapeutic areas.

#### Generalizability
The conceptual framework is broadly applicable across therapeutic areas and data modalities, but the practical implementation will depend on the availability of validated AI tools and the ability to characterize their uncertainty. The MASH example is illustrative but may not represent all AI-derived measurement challenges.

---

---

### Figures & Tables

- **Figure 1**: Conceptual comparison of ELISA assay and AI workflow, highlighting sources of error and the lack of standardization in AI.
  - *Significance*: Illustrates the 'ELISA problem' and the need for validation and uncertainty quantification in AI pipelines.
- **Figure 2**: Shows the shift from ordinal pathologist scoring to continuous AI-derived measurements in MASH, with QSP as a mechanistic prior.
  - *Significance*: Visualizes the proposed reframing and the role of QSP in interpreting AI measurements.

---

### Future Directions
Future work should focus on developing standardized benchmarking datasets and validation frameworks for AI-derived measurements, as well as methods to quantify and propagate their uncertainty into QSP models. Demonstrating the utility of QSP in interpreting AI-derived scores (e.g., in MASH) would provide proof-of-concept.

---

### Expert Commentary
This perspective is timely and thought-provoking, addressing a critical gap in the integration of AI and QSP. The analogy to ELISA is powerful and should resonate with pharmacometricians. The call for standardization aligns with ongoing efforts by ISoP's AI/ML SIG. However, the paper would benefit from more concrete guidance on how to implement uncertainty quantification and validation in practice.

---

### Bottom Line
For practitioners, this perspective urges treating AI-derived outputs as measurements that require validation, calibration, and uncertainty quantification before being used as inputs to QSP models. It emphasizes the need for standardization and mechanistic interpretation to ensure reliable integration into drug development workflows.

---

---

## 📊 Figures

![The “ELISA problem” in the age of AI. Conceptual comparison of an ELISA assay (left) and an AI workflow (right). In both, each step can introduce random error and systema]({{ site.baseurl }}/assets/digests/2026-11-04-reframing-qsp-ai-driven-multi-modal-data-as-a-new-measurement-layer/figures/fig_01.jpg)

![From ordinal to continuous disease assessment in MASH. Previous workflow (left): A liver biopsy is scored by a pathologist, yielding an ordinal fibrosis stage that inform]({{ site.baseurl }}/assets/digests/2026-11-04-reframing-qsp-ai-driven-multi-modal-data-as-a-new-measurement-layer/figures/fig_02.jpg)