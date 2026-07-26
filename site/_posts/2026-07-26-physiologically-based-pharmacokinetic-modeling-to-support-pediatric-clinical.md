---
layout: post
title: "Physiologically-Based Pharmacokinetic Modeling to Support Pediatric Clinical Development: An IQ Working Group Perspective on the Current Status and Challenges"
date: 2026-07-26
authors: "Lin W, Yates JWT, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70141"
paper_type: generic
tags: [generic, pbpk, pediatrics]
excerpt_text: "This IQ Working Group perspective reviews the current status and challenges of using PBPK modeling to support pediatric drug development. It summarizes a literature survey, presents two high-impact case studies (rivaroxaban and nilotinib), and proposes an optimized workflow. Key challenges include gaps in ontogeny data, absorption physiology, and model validation in neonates. The paper provides recommendations for addressing these gaps through public data repositories, real-world data, and microdose studies."
pdf_path: "/assets/digests/2026-07-26-physiologically-based-pharmacokinetic-modeling-to-support-pediatric-clinical/PMx_PhysiologicallyBased_Pharmacokinetic_Mod_20260726.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This IQ Working Group perspective reviews the current status and challenges of using PBPK modeling to support pediatric drug development. It summarizes a literature survey, presents two high-impact case studies (rivaroxaban and nilotinib), and proposes an optimized workflow. Key challenges include gaps in ontogeny data, absorption physiology, and model validation in neonates. The paper provides recommendations for addressing these gaps through public data repositories, real-world data, and microdose studies.

---

### Executive Summary
This IQ Working Group perspective provides a comprehensive review of the current status, challenges, and best practices for using physiologically-based pharmacokinetic (PBPK) modeling to support pediatric drug development. The paper summarizes a literature survey of pediatric PBPK applications across therapeutic areas, presents two high-impact case studies (rivaroxaban and nilotinib) where PBPK modeling supported label extensions, and proposes an optimized workflow for pediatric PBPK model development. Key challenges identified include gaps in ontogeny data for drug-metabolizing enzymes and transporters, limited understanding of pediatric absorption physiology (especially in neonates), and difficulties in model validation due to sparse clinical data. The authors provide recommendations for addressing these gaps, including building public data repositories, leveraging real-world data, and implementing microdose studies.

---

### Scientific Context & Motivation
Pediatric drug development lags behind adult development by approximately 8 years, and there is a regulatory mandate (PREA, PIP) to study drugs in children. To minimize unnecessary exposure of children to clinical trials, health authorities have promoted extrapolation strategies using modeling and simulation. PBPK modeling is particularly attractive because it can mechanistically incorporate age-dependent physiological changes (ontogeny) to predict pharmacokinetics in children. However, the reliability of pediatric PBPK models is limited by gaps in our understanding of developmental physiology, especially for neonates, and by the lack of high-quality clinical data for model validation. This paper addresses the need for a comprehensive review of current practices, challenges, and recommendations to advance the field.

---

## ⚡ Methodological Snapshot
The paper is a narrative review and perspective from the IQ Pediatric PBPK Working Group, supplemented by a literature survey of pediatric PBPK publications. The survey used PubMed search terms (detailed in Supporting Information) and manual curation to extract information on treatment, indication, dose, route of administration, PK data, and pediatric demographics. The resulting database was analyzed using R to visualize trends across therapeutic areas. The paper also presents two detailed case studies (rivaroxaban and nilotinib) where PBPK modeling directly impacted regulatory decisions and label extensions. The proposed workflow (Figure 5) is based on the collective experience of the working group and aligns with the model credibility assessment framework and ICH-M15 guidelines.

---

## 📋 Detailed Analysis
The paper is a comprehensive review and perspective from the IQ Pediatric PBPK Working Group. It systematically covers the current state of pediatric PBPK modeling across therapeutic areas, highlighting both successes (e.g., rivaroxaban, nilotinib label extensions) and persistent challenges. The proposed workflow (Figure 5) is a practical guide for integrating PBPK into pediatric development plans, emphasizing the need for robust adult model verification before pediatric extrapolation. The analysis of ontogeny gaps is particularly thorough, noting that even for well-studied enzymes like CYP3A4, multiple conflicting ontogeny functions exist, leading to prediction uncertainty. The paper also addresses emerging areas such as biologics and novel modalities (ASOs, gene therapies), where PBPK application is still nascent. The discussion on neonatal PBPK modeling is a standout, detailing the complex interplay of gestational age, postnatal age, and disease states (e.g., therapeutic hypothermia). The authors advocate for a multi-pronged approach to fill data gaps: public repositories (e.g., QPrOmics), real-world data, microdose studies, and AI/ML integration. However, the paper does not provide a quantitative comparison of different ontogeny functions or a meta-analysis of prediction accuracy across studies, which would strengthen its recommendations.

---

### Domain Context
This paper sits at the intersection of clinical pharmacology, pediatric drug development, and regulatory science. It reflects the growing acceptance of PBPK modeling by regulators (FDA, EMA) as a tool for pediatric extrapolation, as outlined in ICH E11A and FDA guidance. The paper is particularly relevant for pharmacometricians involved in pediatric study design, as it provides a framework for when and how to use PBPK versus allometric scaling or PopPK. The emphasis on ontogeny of enzymes and transporters aligns with ongoing efforts in quantitative systems pharmacology (QSP) to mechanistically model developmental changes. The paper also touches on the challenges of applying PBPK to biologics, where allometric scaling has been the default, but where target-mediated drug disposition (TMDD) and age-dependent FcRn expression complicate predictions.

---

## 📊 Key Findings
1. PBPK modeling has been successfully used for pediatric dose selection and label extension, as demonstrated by rivaroxaban and nilotinib case studies. 2. The literature survey shows that pediatric PBPK applications are most common in infectious diseases and CNS/pain, with fewer examples in oncology, respiratory, and cardiovascular areas. 3. A major gap is the lack of consensus on ontogeny functions for key enzymes (e.g., CYP3A4) and transporters, leading to prediction uncertainty. 4. Neonatal PBPK modeling is particularly challenging due to rapidly changing physiology, sparse data, and limited understanding of absorption and distribution in this population. 5. The paper proposes a standardized workflow for pediatric PBPK model development, emphasizing the importance of adult model verification and iterative refinement with emerging pediatric data.

---

### Strengths & Limitations

#### Strengths
- Comprehensive review of current pediatric PBPK practices across multiple therapeutic areas.
- Provides a practical, step-by-step workflow for pediatric PBPK model development.
- Includes two high-impact case studies demonstrating regulatory impact.
- Thorough analysis of ontogeny gaps and challenges, especially for neonates.
- Offers concrete recommendations for addressing data gaps (public repositories, RWD, microdose studies).
- Written by an IQ Working Group, reflecting industry-wide consensus and expertise.

#### Limitations (Acknowledged by Authors)
- Potential publication bias in the literature survey (not all modeling/clinical studies are published).
- Most published modeling studies are retrospective; few prospective examples exist.
- Limited examples for alternative routes of administration (e.g., inhalation) and for biologics/novel modalities.
- Lack of consensus on ontogeny functions for key enzymes and transporters.
- Sparse clinical data for model validation, especially in neonates.

#### Limitations (Expert Review)
- The paper does not provide a quantitative comparison of prediction accuracy across different ontogeny functions or software platforms.
- The literature survey methodology (PubMed search, manual curation) may have missed relevant publications not indexed in PubMed or published in non-English journals.
- The proposed workflow, while practical, lacks specific criteria for model acceptance (e.g., what constitutes 'acceptable' prediction error).
- The paper does not address the computational cost or software-specific implementation details of the recommended approaches.

#### Generalizability
The findings and recommendations are broadly applicable to pediatric drug development across therapeutic areas, but the specific ontogeny data and model validation requirements will vary by drug and population. The paper's focus on small molecules may limit generalizability to biologics and novel modalities.

---

---

### Figures & Tables

- **Figure 1**: Overview of PBPK modeling applications in drug development (A) and a schematic of a pediatric PBPK model incorporating age-dependent physiological parameters (B).
  - *Significance*: Provides a high-level visual summary of the scope of PBPK applications and the key components of a pediatric PBPK model.
- **Figure 2**: Illustrates the role of PBPK modeling in pediatric drug development, from initial dose prediction to label extension.
  - *Significance*: Shows the integration of PBPK modeling into the pediatric development timeline, highlighting its use in extrapolation strategies.
- **Figure 3**: Percent activity or abundance levels of major drug-metabolizing enzymes and transporters in pediatric age groups compared with adults.
  - *Significance*: Visualizes the ontogeny data that underpin pediatric PBPK models, showing the variability and gaps in current knowledge.
- **Figure 4**: Summary of literature survey results on pediatric PBPK applications, stratified by disease area, route of administration, and dosing strategy.
  - *Significance*: Provides a quantitative overview of the current landscape of pediatric PBPK modeling, highlighting areas of high and low activity.
- **Figure 5**: Recommended workflow for pediatric PBPK modeling, from adult model development to pediatric dose selection and label extension.
  - *Significance*: Offers a practical, step-by-step guide for implementing pediatric PBPK modeling in drug development, emphasizing model verification and iterative refinement.

---

### Future Directions
The paper identifies several key areas for future work: (1) reaching a consensus on ontogeny functions for key enzymes like CYP3A4 through systematic comparison of existing profiles; (2) expanding ontogeny data for transporters and less-studied enzymes (e.g., SULTs, UGTs); (3) developing mechanistic absorption models that account for age-dependent GI physiology, bile salt concentrations, and food effects; (4) validating PBPK models for biologics and novel modalities (ASOs, gene therapies) in pediatric populations; (5) integrating real-world data and AI/ML techniques to accelerate model development and validation; (6) conducting microdose studies in children to safely generate PK data for model qualification.

---

### Expert Commentary
As a senior pharmacometrician, I find this paper to be an essential reference for anyone working on pediatric drug development. The proposed workflow is pragmatic and aligns with regulatory expectations. The honest assessment of ontogeny uncertainties—especially the lack of consensus on CYP3A4 maturation—is a critical reminder that our models are only as good as the underlying physiology data. The paper's call for a public data repository is timely and could significantly accelerate model development. However, I would have liked to see more discussion on the quantitative impact of these gaps on dose prediction accuracy, perhaps through a systematic comparison of different ontogeny functions across multiple drugs. The section on neonates is particularly valuable, as this population is often excluded from modeling efforts due to data scarcity. The recommendation to use microdose studies is innovative but may face ethical and practical hurdles. Overall, this paper provides a clear roadmap for advancing pediatric PBPK modeling, but the field must now focus on generating the high-quality data needed to fill the identified gaps.

---

### Bottom Line
PBPK modeling is a powerful tool for pediatric dose selection and label extension, but its reliability is limited by gaps in ontogeny data (especially for CYP3A4 and transporters), absorption physiology, and model validation in neonates. The paper provides a practical workflow and recommends building public data repositories, leveraging real-world data, and using microdose studies to address these gaps.

---

---

## 📊 Figures

![(A) PBPK Modeling Applications in Drug Development 10; (B) A Pediatric PBPK Model Incorporating Age-Dependent Physiological Parameters. Data adapted from 11-1]({{ site.baseurl }}/assets/digests/2026-07-26-physiologically-based-pharmacokinetic-modeling-to-support-pediatric-clinical/figures/fig_01.jpg)

![PBPK Modeling Applications in Pediatric Drug Development.]({{ site.baseurl }}/assets/digests/2026-07-26-physiologically-based-pharmacokinetic-modeling-to-support-pediatric-clinical/figures/fig_02.jpg)

![Percent activity or abundance levels of pediatric age groups compared with adult levels for major drug-metabolizing enzymes and transporters, split into three cl]({{ site.baseurl }}/assets/digests/2026-07-26-physiologically-based-pharmacokinetic-modeling-to-support-pediatric-clinical/figures/fig_03.jpg)

![The summary of the literature survey results on pediatric PBPK application stratified by disease area. Prevalence of routes of administration and weight-based do]({{ site.baseurl }}/assets/digests/2026-07-26-physiologically-based-pharmacokinetic-modeling-to-support-pediatric-clinical/figures/fig_04.jpg)

![The Recommended Pediatric PBPK Workflow and Applications. Ctrough,ss, Trough concentration at the end of the dosage interval at steady-state; DDI, Drug–drug inte]({{ site.baseurl }}/assets/digests/2026-07-26-physiologically-based-pharmacokinetic-modeling-to-support-pediatric-clinical/figures/fig_05.jpg)