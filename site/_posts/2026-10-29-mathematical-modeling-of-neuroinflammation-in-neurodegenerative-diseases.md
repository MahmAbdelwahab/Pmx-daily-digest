---
layout: post
title: "Mathematical Modeling of Neuroinflammation in Neurodegenerative Diseases."
date: 2026-10-29
authors: "Foster‐Powell Alex, Rostami‐Hodjegan Amin, Meno‐Tetang Guy, Mager Donald E., Ogungbenro Kayode"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70064"
paper_type: generic
tags: [generic]
excerpt_text: "This review systematically surveys mathematical models of neuroinflammation in neurodegenerative diseases, identifying 26 key papers. It highlights the predominance of ODE-based models, the underrepresentation of PD and oligodendrocytes, and the potential of logic-based and hybrid modeling approaches to address data limitations and improve translational predictions."
pdf_path: "/assets/digests/2026-10-29-mathematical-modeling-of-neuroinflammation-in-neurodegenerative-diseases/PMx_Mathematical_Modeling_of_Neuroinflammati_20261029.pdf"
retroactively_classified: false
---

**Content Source:** PMC Full Text

### Quick Take
This review systematically surveys mathematical models of neuroinflammation in neurodegenerative diseases, identifying 26 key papers. It highlights the predominance of ODE-based models, the underrepresentation of PD and oligodendrocytes, and the potential of logic-based and hybrid modeling approaches to address data limitations and improve translational predictions.

---

### Executive Summary
The authors provide a comprehensive review of mathematical modeling approaches applied to neuroinflammation in neurodegenerative diseases, covering AD, ALS, PD, MS, and others. They systematically retrieved 122 publications, selecting 26 for detailed analysis. The review summarizes the biology of neuroinflammation, catalogs existing models by disease and formalism (ODE, PDE, logic-based), and critically evaluates their strengths and limitations. Key findings include the dominance of ODE models, the frequent lack of calibration to experimental data, the underrepresentation of PD and oligodendrocytes, and the potential of logic-based models to handle sparse data. The authors advocate for modular, hybrid approaches to improve model reusability and translational value.

---

### Scientific Context & Motivation
Neuroinflammation is increasingly recognized as a key contributor to neurodegenerative diseases, yet therapeutic targeting has largely failed in clinical trials. Existing animal models have poor predictive validity, and there is a lack of longitudinal human data. Mathematical modeling, particularly QSP, offers a way to integrate mechanistic knowledge and predict therapeutic outcomes, but current models are limited by data scarcity and oversimplification. This review addresses the need for a systematic assessment of existing models to identify knowledge gaps and best practices.

---

## ⚡ Methodological Snapshot
The authors conducted a systematic literature search in PubMed using a combination of MeSH terms and title/abstract keywords related to mathematical modeling and neuroinflammation. From 122 identified publications, 63 were initially selected, and 26 were ultimately included in the review based on their focus on modeling the immune response. The selected papers were analyzed for disease area, modeling formalism (ODE, PDE, logic-based), calibration data, and therapeutic applications. The review synthesizes these findings to discuss strengths, limitations, and future directions.

---

## 📋 Detailed Analysis
The review provides a thorough overview of the modeling landscape, but it does not delve into the mathematical details of each model. It emphasizes the need for more mechanistic detail and better data integration. The authors argue that logic-based models, which require less quantitative data, are a promising intermediate step. They also highlight the importance of feedback loops and the need to move beyond the M1/M2 dichotomy. The review suggests that hybrid models, combining logic and ODE approaches, could bridge the gap between subcellular signaling and clinical outcomes. However, the review lacks a critical assessment of model identifiability and uncertainty, which are crucial for QSP model credibility.

---

### Domain Context
Neuroinflammation is a complex, multi-cellular process involving microglia, astrocytes, oligodendrocytes, and peripheral immune cells. Traditional M1/M2 and A1/A2 classifications are being replaced by more nuanced phenotype definitions based on transcriptomic profiles. The field faces significant challenges due to the inaccessibility of the CNS, reliance on animal models with limited translatability, and a lack of longitudinal human data. Mathematical modeling, particularly QSP, offers a way to integrate existing knowledge and predict therapeutic responses, but current models are often oversimplified and poorly calibrated. This review situates the modeling efforts within the broader context of drug development failures and highlights the potential of logic-based and hybrid approaches to improve translational success.

---

## 📊 Key Findings
The review identifies 26 mathematical models of neuroinflammation, with AD being the most modeled disease (46%). Most models use ODEs, with few PDEs and logic-based approaches. Common limitations include lack of calibration to experimental data, oversimplification of microglial phenotypes (M1/M2 dichotomy), and underrepresentation of oligodendrocytes and PD. Logic-based models show promise for handling sparse data and identifying therapeutic targets, as demonstrated by models predicting combination therapies over monotherapies. The review emphasizes the need for longitudinal data and modular model architectures to improve translational relevance.

---

### Strengths & Limitations

#### Strengths
- Systematic literature search with clear inclusion criteria
- Comprehensive coverage of major neurodegenerative diseases
- Critical evaluation of model calibration and validation
- Identification of knowledge gaps, such as oligodendrocyte modeling
- Discussion of logic-based models as a promising alternative
- Advocacy for modular and hybrid modeling approaches

#### Limitations (Acknowledged by Authors)
- Lack of longitudinal human data for model calibration
- Reliance on qualitative or literature-derived parameter values
- Oversimplification of microglial phenotypes
- Limited incorporation of subcellular mechanistic detail
- Challenges in vertical integration from molecular to clinical outcomes

#### Limitations (Expert Review)
- The review does not provide quantitative comparisons of model performance
- Potential publication bias in the selected literature
- Limited discussion of model identifiability and uncertainty quantification
- No mention of model validation against independent datasets

#### Generalizability
The findings are broadly applicable across neurodegenerative diseases, but the models may not capture disease-specific nuances. The proposed modular approach aims to improve generalizability, but validation across diseases is still needed.

---

---

### Figures & Tables

- **Figure 1**: Schematic of neuroinflammatory response in neurodegenerative diseases, showing microglial activation, astrocyte involvement, and neuronal damage. (Not explicitly described in text but referenced) “Figure 1” is mentioned in the text: “...resulting in neuronal dysfunction and ultimately death (Figure 1).” The figure likely illustrates the balance between homeostatic and chronic inflammatory states. Significance: Provides a visual framework for the biological processes discussed in the review. (Note: Figure content not extracted from text; description inferred from context.)
  - *Significance*: Illustrates the key cellular interactions and pathways involved in neuroinflammation, setting the stage for the modeling review.
- **Figure 2**: Pie chart showing the distribution of models by disease, with AD most frequent (46%), followed by MS/ALS (11%), and others. (Inferred from text: “AD was the most highly modeled (46%) followed by MS/ALS (11%)...”)
  - *Significance*: Highlights the research focus and gaps in modeling different neurodegenerative diseases.
- **Table 1**: Summary of 26 mathematical models of neuroinflammation, including disease, model type, formalism, calibration/qualification, application, year, and reference.
  - *Significance*: Provides a comprehensive catalog of existing models, facilitating comparison and identification of gaps.

---

### Code & Reproducibility Assessment
Not applicable; this is a review article, not a primary modeling study. No code or data were provided.

---

### Future Directions
Future work should focus on generating longitudinal human data on neuroinflammatory biomarkers, developing standardized microglial phenotype definitions, and integrating logic-based models with quantitative ODE frameworks. Modular models that can be adapted across diseases and incorporate new pathways (e.g., TDP-43) will be valuable. Additionally, hybrid models that connect subcellular signaling to clinical outcomes could improve translational predictions.

---

### Expert Commentary
This review provides a timely and comprehensive overview of the current state of neuroinflammation modeling. The emphasis on logic-based models is particularly relevant given the sparse data in this field. The authors correctly identify the need for modularity and hybrid approaches to bridge the gap between mechanistic detail and clinical relevance. The underrepresentation of PD and oligodendrocytes highlights important research opportunities. Overall, this review serves as a valuable resource for modelers and experimentalists alike, guiding future efforts to improve the translational success of neuroinflammation-targeted therapies.

---

### Bottom Line
For practitioners, this review underscores the importance of incorporating neuroinflammation into disease models and highlights the need for more robust, data-driven modeling approaches. Logic-based and hybrid models offer practical solutions to overcome data limitations, and a modular design can facilitate model reuse and adaptation to different diseases. The review encourages collaboration between modelers and experimentalists to generate the longitudinal data necessary for model calibration and validation.[^fc-13]

---

### Fact-check corrections

[^fc-1]: **CONTRADICTED** — original: “Neuroinflammation is a complex, multi-cellular process involving astrocytes.” → correction: “However, a result of the paucity of data is that parameter sets may become identifiable.”
[^fc-2]: **CONTRADICTED** — original: “Neuroinflammation is a complex, multi-cellular process involving oligodendrocytes.” → correction: “Such improved data availability facilitates the generation of ODE‐based models, but challenges with parameter uncertainty and model validation remain [81].”
[^fc-3]: **UNSUPPORTED** — original: “There is potential publication bias in the selected literature.” → correction: “No direct mention of publication bias in the source text.”
[^fc-4]: **CONTRADICTED** — original: “The review does not mention model validation against independent datasets.” → correction: “New experimental data can be incorporated into such models to provide external validation to increase the predictive confidence of such models.”
[^fc-5]: **UNSUPPORTED** — original: “Figure 1 shows a schematic of neuroinflammatory response in neurodegenerative diseases.” → correction: “No evidence found in the the source text.”
[^fc-6]: **UNSUPPORTED** — original: “Figure 1 shows microglial activation.” → correction: “No evidence found in the the source text.”
[^fc-7]: **UNSUPPORTED** — original: “Figure 1 shows astrocyte involvement.” → correction: “No evidence found in the the source text.”
[^fc-8]: **UNSUPPORTED** — original: “Figure 1 shows neuronal damage.” → correction: “No evidence found in the the source text.”
[^fc-9]: **UNSUPPORTED** — original: “Figure 1 likely illustrates the balance between homeostatic and chronic inflammatory states.” → correction: “No evidence found in the the source text.”
[^fc-10]: **UNSUPPORTED** — original: “Figure 1 provides a visual framework for the biological processes discussed in the review.” → correction: “No evidence found in the the source text.”
[^fc-11]: **UNSUPPORTED** — original: “Figure 2 is a pie chart showing the distribution of models by disease.” → correction: “No evidence found in the the source text.”
[^fc-12]: **UNSUPPORTED** — original: “No code or data were provided in this review.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “The review encourages collaboration between modelers and experimentalists to generate the longitudinal data necessary for model calibration and validation.” → correction: “No direct quote found.”