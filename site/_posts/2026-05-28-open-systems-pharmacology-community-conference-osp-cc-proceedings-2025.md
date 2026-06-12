---
layout: post
title: "Open Systems Pharmacology Community Conference (OSP-CC) Proceedings 2025"
date: 2026-05-28
authors: "Cordes H, Schaller S, Dallmann A, de Witte WEA, Feick D, Geci R, Gerebtzoff G, Gruber A, Montaseri G, Nauwelaerts N, Schneider A, Schlender JF, Sjögren E, Staab A, Teutonico D, et al."
journal: "Open Systems Pharmacology Community Conference Proceedings, 2025"
doi: "N/A"
paper_type: generic
tags: [generic, pbpk, qsp, regulatory]
excerpt_text: "These proceedings from the 2025 OSP Community Conference summarize the state of the open-source OSP Suite, highlighting its growing application in PBPK/PBBM, DDI predictions, and regulatory submissions. Key themes include hybrid AI/PBPK modeling, modular QSP integration, automated qualification workflows, and innovative applications for special populations and novel modalities like siRNA."
pdf_path: "/assets/digests/2026-05-28-open-systems-pharmacology-community-conference-osp-cc-proceedings-2025/PMx_Open_Systems_Pharmacology_Community_Conf_20260528.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
These proceedings from the 2025 OSP Community Conference summarize the state of the open-source OSP Suite, highlighting its growing application in PBPK/PBBM, DDI predictions, and regulatory submissions. Key themes include hybrid AI/PBPK modeling, modular QSP integration, automated qualification workflows, and innovative applications for special populations and novel modalities like siRNA.

---

### Executive Summary
This report provides an overview of the second OSP Community Conference, attended by over 100 participants from >40 institutions. The meeting covered progress in clinical applications (organoid-based IVIVE, obesity/aging databases, VBE), discovery research (AI/ML-driven high-throughput PK prediction, DILI modeling), and regulatory/emerging areas (automated reporting, modular PBPK-QSP ecosystems, siRNA modeling). A central theme was the maturation of the fully open-source OSP Suite (PK-Sim/MoBi) into a comprehensive platform for model-informed drug development (MIDD), supported by a collaborative framework that includes transparent version control, automated qualification, and community-driven model libraries, as presented across six sessions and satellite workshops.

---

### Scientific Context & Motivation
The paper addresses the gap between proprietary software limitations and the need for transparent, community-driven tools in pharmaceutical R&D. It contextualizes the progress of the OSP ecosystem within the broader push for open science, where stakeholders from industry, academia, and regulatory bodies collaborate to advance PBPK and QSP methodologies, aiming to streamline MIDD, improve reproducibility, and meet evolving regulatory standards.

---

## ⚡ Methodological Snapshot
The proceedings are not a single study but a synopsis of diverse methodologies. Common technical threads include: 1) Use of PK-Sim/MoBi (OSP Suite) for building PBPK and PBBM models, incorporating IVIVE from RNAseq expression data and in vitro organoid assays; 2) Automation scripts via R packages (ospsuite) for report generation, parameter identification, and VBE analyses; 3) Hybrid machine learning models (e.g., GNNs) trained on large compound datasets to predict ADME parameters that feed into mechanistic models; and 4) The SAEM algorithm integrated with OSP models via the saemixPBPK package for population parameter estimation.

---

## 📋 Detailed Analysis
The conference showcases a strategic shift from bespoke open-source modeling to a federated ecosystem. The 'Qualification-Reports' and automated library updates represent a systemic solution to the model maintenance bottleneck. The integration of ML is pragmatic, using networks to predict hard-to-measure physchem/ADME parameters as inputs to a mechanistic chassis rather than replacing the chassis itself, which preserves physiological interpretability. The parallel development of modular QSP extensions (Session 5) and high-throughput PBPK for discovery (Session 4) suggests the platform is scaling both in biological detail and computational throughput. The successful mention of regulatory interactions (MHRA) and the emphasis on verification/validation (Pillar 3) signal a move towards formal acceptance of open-source tools for decision making.

---

### Domain Context
This conference report sits at the intersection of pharmacometrics, computational biology, and regulatory science. It is a direct follow-up to the initial release of OSP Suite as open-source in 2017. Compared to commercial packages (e.g., Simcyp, GastroPlus), OSP offers complete transparency and customizability, which is a double-edged sword: it enables innovation but requires the community to shoulder the burden of qualification and maintenance that is otherwise provided by a vendor. The proceedings demonstrate that major pharmaceutical companies (Sanofi, Bayer, Novartis, Boehringer Ingelheim), consultancies (ESQlabs, Pharmetheus), and regulators (MHRA) are active contributors, indicating a robust and sustainable support structure.

---

## 📊 Key Findings
Key advancements include: (1) Automated OSP model library updates integrating RNAseq expression data; (2) Novel PBBM workflows addressing bioequivalence challenges via VBE and surrogate dissolution kinetics; (3) Hybrid machine learning/PBPK models enabling PK prediction from chemical structure with superior performance to traditional scaling; (4) A modularization concept (OSP V12) allowing reusable 'Extension Modules' for seamless PBPK-QSP integration; and (5) A new saemixPBPK package integrating population PK using the SAEM algorithm with mechanistic OSP models. The regulatory session confirmed successful examples of OSP submissions to agencies like the MHRA, emphasizing fit-for-purpose qualification proportional to risk.

---

### Strengths & Limitations

#### Strengths
- Comprehensive snapshot of a vibrant community advancing open science; highlights critical convergence of PBPK, AI/ML, and QSP.
- Strong emphasis on automation and qualification (e.g., automated reporting, re-qualification frameworks), directly addressing regulatory efficiency and reproducibility.
- Covers novel applications in underrepresented areas: siRNA PKPD modeling, DILI prediction with mechanistic context, and special populations (obesity, aging).
- Transparent and collaborative model, with workflows and code openly shared via GitHub, fostering trust and independent verification.

#### Limitations (Acknowledged by Authors)
- Knowledge gaps in siRNA extravasation mechanisms, RISC dynamics, and species-specific target variations remain.
- Regulatory acceptance of PBPK for high-risk applications still requires robust, case-by-case qualification.

#### Limitations (Expert Review)
- As a conference proceedings document, details on methodology and quantitative performance metrics for each application are superficial; readers must seek original publications for critical appraisal.
- The generalizability of the hybrid AI/PBPK approaches trained on specific datasets (e.g., ~10,000 compounds) or rat models to novel chemical spaces or human scaling is not fully presented here.
- The successful MHRA case studies are described qualitatively; the specific qualification metrics and acceptance criteria for these models are not provided.

#### Generalizability
The presented OSP framework is highly generalizable as an open-source platform. However, the specific workflows and model predictions are inherently dependent on underlying assumptions, training data (for ML components), and the context-of-use; their translation to other molecules, populations, or regulatory domains requires careful re-evaluation and qualification.

---

---

### Figures & Tables

- **Table 1**: A comprehensive summary of the conference sessions, chairpersons, covered topics, and speakers (e.g., DDI, PBBM, AI/ML, siRNA, software roadmaps).
  - *Significance*: Provides a structured overview of the entire conference's thematic scope, linking specific speakers and institutions to application domains, which is essential for navigating the proceedings.
- **Figure 1**: A conceptual diagram illustrating the OSP Extension Module concept, showing how individual 'Building Blocks' (organs, administration routes, disease states) are composed into PK-Sim models.
  - *Significance*: Crucial for understanding the new modularization feature in OSP V12, which enables the creation of a qualifiable, reusable, and collaborative PBPK-QSP ecosystem.

---

### Code & Reproducibility Assessment
High. The OSP ecosystem (PK-Sim, MoBi, ospsuite) and all associated packages (e.g., OSPSuite.ParameterIdentification, OSPSuite.VBE-Toolbox, saemixPBPK) are open-source and systematically hosted on GitHub with version-controlled public repositories and documentation.

---

### Future Directions
Future work is outlined by the OSP roadmap: development of V13 (standardized MoBi qualification frameworks, extended R integration) and V14 (populations for obesity/ethnicities, new absorption models, Linux/MacOS support). Scientific follow-up includes closing knowledge gaps in siRNA disposition modeling, expanding the modular QSP library, and validating hybrid AI/PBPK models across broader chemical spaces and regulatory contexts.

---

### Expert Commentary
These proceedings reflect a critical inflection point for MIDD. The convergence of mechanistic PBPK with modular QSP and deep learning within a fully transparent, version-controlled environment addresses the 'black box' fears often associated with ML in drug development. The emphasis on automated qualification and reproducible reporting is a pragmatic response to the high resource cost of regulatory modeling. The community's focus on siRNA modeling is forward-looking, tackling a challenging modality with a data-poor biology. While the breadth of work is impressive, the scientific depth remains in the referenced source presentations; the field will be watching for the independent validation and regulatory milestones (e.g., biowaivers granted using these workflows) that will solidify the impact suggested by this conference.

---

### Bottom Line
The OSP Suite has matured into a premier open-source ecosystem for PBPK/QSP, now actively incorporating AI/ML-driven automation and modular design. For practitioners, these proceedings confirm that open-source tools are not merely academic exercises but are becoming deeply integrated into industry discovery, small molecule and novel modality (siRNA) development, and regulatory engagement.

---

---
### Fact-Check Summary

**Total claims:** 64  
**Verdict distribution:** CONTRADICTED: 3, GENERAL_KNOWLEDGE: 1, SUPPORTED: 48, UNSUPPORTED: 11, UNVERIFIABLE: 1  
**Overall action:** WARN

#### Flagged Claims

- ❓ **[UNSUPPORTED]** Authors include Cordes H, Schaller S, Dallmann A, de Witte WEA, Feick D, Geci R, Gerebtzoff G, Gruber A, Montaseri G, Nauwelaerts N, Schneider A, Schlender JF, Sjögren E, Staab A, Teutonico D, et al.
- ❓ **[UNSUPPORTED]** The journal is Open Systems Pharmacology Community Conference Proceedings, 2025.
- ❓ **[UNSUPPORTED]** The paper addresses the gap between proprietary software limitations and the need for transparent, community-driven tools in pharmaceutical R&D.
- ❓ **[UNSUPPORTED]** The conference showcases a shift from bespoke open-source modeling to a federated ecosystem.
- ❌ **[CONTRADICTED]** Session 5 covered modular QSP extensions, and Session 4 covered high-throughput PBPK for discovery.
  - Source says: *"Session 5: Emerging areas ... Toward a qualifiable MIDD ecosystem with modular PBPK and QSP Models ... Session 4: Submission, lifecycle & approval ... An automated reporting workflows automating PBPK model documentation and regulatory reporting ... PBPK modeling in regulatory submissions to the MHRA ... Examples of software verification, validation, and CoU qualification of OSP suite."*
- ❓ **[UNSUPPORTED]** The conference report is at the intersection of pharmacometrics, computational biology, and regulatory science.
- ❓ **[UNSUPPORTED]** OSP offers complete transparency and customizability compared to commercial packages.
- ❌ **[CONTRADICTED]** The proceedings document provides superficial details on methodology and quantitative performance metrics.
  - Source says: *"Validation across 575 rat and 150 monkey IV studies demonstrated good predictive performance for extended clearance classification system (ECCS) class 2 compounds... Based on 241 drugs and in vitro toxicity assay data, clinical DILI outcomes were predicted using ratios of in vitro and PBPK model predicted Cmax values with good accuracy (ROC AUC 91%)... The showcased approaches outperforms pure deep learning models and conventional scaling methods, particularly for oral exposure predictions"*
- ℹ️ **[GENERAL_KNOWLEDGE]** Specific workflows and model predictions depend on assumptions, training data, and context-of-use.
  - *editorial context — from LLM domain knowledge, not verified against this paper*
- ❓ **[UNSUPPORTED]** Scientific follow-up includes closing siRNA disposition knowledge gaps, expanding modular QSP library, and validating hybrid AI/PBPK models.
- ❓ **[UNSUPPORTED]** The proceedings reflect a critical inflection point for MIDD.
- ❓ **[UNSUPPORTED]** The convergence of mechanistic PBPK with modular QSP and deep learning addresses black box fears associated with ML.
- ❓ **[UNSUPPORTED]** Emphasis on automated qualification and reproducible reporting responds to high resource cost of regulatory modeling.
- ❌ **[CONTRADICTED]** The community focuses on siRNA modeling, a challenging modality with data-poor biology.
  - Source says: *"The community is the driver behind these developments and features for mechanistic PBPK modeling that were presented over a wide range of topics."*
- ❓ **[UNSUPPORTED]** The field awaits independent validation and regulatory milestones like biowaivers granted using these workflows.

---

## 📊 Figures

![OSP Extension Module concept. PK-Sim models are composed of individual Building Blocks (https: docs.open-systems-pharmacology.org/v12/open-systems-pharmacology-]({{ site.baseurl }}/assets/digests/2026-05-28-open-systems-pharmacology-community-conference-osp-cc-proceedings-2025/figures/fig_01.png)