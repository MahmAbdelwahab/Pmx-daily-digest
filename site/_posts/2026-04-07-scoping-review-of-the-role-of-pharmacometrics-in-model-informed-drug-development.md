---
layout: post
title: "Scoping review of the role of pharmacometrics in model-informed drug development"
date: 2026-04-07
authors: "Bhat AG, Shin E, Roy A, Ramanathan M"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2025, 52:56"
doi: "https://doi.org/10.1007/s10928-025-10005-8"
paper_type: generic
tags: [generic, pbpk, qsp, pediatrics, regulatory, machine-learning]
excerpt_text: "This scoping review provides an essential roadmap for the newly released ICH M15 guidelines on Model-Informed Drug Development (MIDD), offering a comprehensive taxonomy of terms (QOI, COU, MAP, MAR) and nine diverse regulatory case studies. Pharmacometricians, regulatory scientists, and drug development strategists should read this to understand the standardized framework for MIDD submissions and how modeling approaches (PopPK, PBPK, AI/ML) are being accepted by FDA/EMA to support approvals without additional clinical trials."
pdf_path: "/assets/digests/2026-04-07-scoping-review-of-the-role-of-pharmacometrics-in-model-informed-drug-development/PMx_Scoping_review_of_the_role_of_pharmacome_20260407.pdf"
retroactively_classified: true
---

### Quick Take
This scoping review provides an essential roadmap for the newly released ICH M15 guidelines on Model-Informed Drug Development (MIDD), offering a comprehensive taxonomy of terms (QOI, COU, MAP, MAR) and nine diverse regulatory case studies. Pharmacometricians, regulatory scientists, and drug development strategists should read this to understand the standardized framework for MIDD submissions and how modeling approaches (PopPK, PBPK, AI/ML) are being accepted by FDA/EMA to support approvals without additional clinical trials.

---

### Executive Summary
As the pharmaceutical industry adopts the ICH M15 draft guidelines (November 2024), this timely scoping review clarifies the MIDD landscape by establishing a standardized taxonomy for model-based regulatory submissions. The authors trace the evolution from FDA's 1999 PopPK guidance through MID3 to the current ICH M15 framework, which adopts the ASME V&V 40 credibility assessment standards. The review analyzes 181 primary publications (2014-2025) and presents nine detailed case studies demonstrating how MIDD enables regulatory approvals for route changes (atezolizumab SC), dosing optimization (nivolumab Q4W), pediatric extrapolation (nivolumab/relatlimab, brexpiprazole), and AI-driven patient selection (anakinra). The paper establishes MIDD as both a technical framework integrating quantitative models and a regulatory tool facilitating early sponsor-agency alignment through structured Model Analysis Plans (MAPs).

---

## ⚡ Methodological Snapshot
This scoping review employed a systematic literature search of PubMed (January 11, 2025) using the terms "Model-informed" AND "drug development" OR "MIDD", yielding 181 non-review papers and 110 reviews from 2014-2025. The methodology follows Arksey and O'Malley's scoping review framework to map key concepts and conceptual boundaries. Rather than performing new modeling, the authors synthesized regulatory guidance documents (FDA 1999 PopPK, 2003 E-R, ICH M15, EMA MID3) and conducted detailed analysis of nine regulatory case studies selected to represent diverse MIDD applications: route of administration changes, dosing frequency optimization, pediatric extrapolation, biomarker-driven endpoint selection, and AI/ML-based patient stratification. The case studies span small molecules (mavacamten, brexpiprazole, tofersen) and biologics (atezolizumab, nivolumab, relatlimab, anakinra).

---

## 🏗️ Structural Model Breakdown
This review paper does not present a novel structural model but synthesizes diverse model types utilized in MIDD: (1) Two-compartment PopPK models with parallel linear and nonlinear clearance for monoclonal antibodies (nivolumab, relatlimab, atezolizumab); (2) Two-compartment models with first-order absorption and linear elimination for small molecules (brexpiprazole, mavacamten); (3) PBPK models incorporating CYP metabolism and transporter kinetics for DDI prediction (aripiprazole lauroxil); (4) Indirect response models for pharmacodynamic endpoints (mavacamten E-R for VLVOTg and LVEF); and (5) Machine learning classifiers for biomarker-based patient selection (anakinra). The structural complexity ranges from empirical compartmental models to mechanistic QSP approaches, selected based on the Context of Use (COU) and Model Risk.

---

### Detailed Methodological Analysis

#### Modeling Approach
Scoping review methodology with qualitative synthesis of published pharmacometric models and regulatory case studies. The review categorizes MIDD approaches into: (1) Population PK-PD modeling for dose-exposure-response relationships, (2) PBPK for drug-drug interactions and formulation bridging, (3) Exposure-response modeling for efficacy/safety optimization, (4) Disease progression models, and (5) AI/ML methods for patient selection. The ICH M15 credibility assessment framework based on ASME V&V 40 standards is presented as the evaluation rubric for all modeling approaches.

#### Data Sources
PubMed bibliographic database search (January 2025) covering 2014-2025; regulatory guidance documents from FDA, EMA, and ICH; published case studies from regulatory submissions (NDA/BLA multidisciplinary reviews); NHANES data (referenced in case study 3 for virtual pediatric population generation); and clinical trial data from pivotal studies (e.g., IMscin001 for atezolizumab, CheckMate studies for nivolumab).

#### Estimation Methods
Not applicable - this is a review paper. However, the case studies reviewed utilized: First-Order Conditional Estimation with Interaction (FOCEI) in NONMEM for PopPK models (case studies 1-5); nonlinear mixed-effects modeling for E-R relationships; PBPK modeling using Simcyp or similar platforms (case study 8); and machine learning algorithms including elastic net regression and artificial neural networks (case study 7).

#### Model Evaluation
The review emphasizes the ICH M15 framework for model evaluation consisting of three components: Verification (mathematical correctness), Validation (comparison to observed data), and Applicability (suitability for Context of Use). Standard pharmacometric evaluation methods referenced include: goodness-of-fit plots, prediction-corrected visual predictive checks (pcVPC), bootstrap analysis, and external validation. The credibility assessment considers model risk, decision consequences, and model influence on regulatory decisions.

#### Covariate Analysis
Review-level discussion of covariate modeling strategies across case studies. Key covariates identified include: body weight and age for pediatric extrapolation (allometric scaling); CYP2C19 metabolizer status for mavacamten (241% AUC increase in poor metabolizers); CYP3A/CYP2D6 polymorphisms for aripiprazole lauroxil; and baseline suPAR levels for anakinra patient selection. The review highlights the importance of physiologically relevant covariates for extrapolation to special populations.

---

### Scientific Context & Motivation
The paper addresses the critical need for harmonization in model-informed drug development practices across global regulatory agencies. Historically, the acceptance of modeling and simulation has varied significantly between FDA divisions and between FDA and EMA, creating uncertainty for sponsors. The ICH M15 guidelines aim to standardize expectations regarding documentation, model development, and credibility assessment. This review fills the knowledge gap by translating engineering credibility assessment frameworks (ASME V&V 40) into pharmacometrics practice and providing concrete examples of successful MIDD applications across diverse therapeutic areas (oncology immunotherapy, psychiatry, rare diseases) and modalities (monoclonal antibodies, long-acting injectables, antisense oligonucleotides). It challenges the traditional paradigm requiring extensive Phase 3 trials for every indication or formulation change.

---

### Statistical Rigor Assessment
As a scoping review, the paper does not test statistical hypotheses but provides a narrative synthesis. The bibliometric analysis (Figure 4) shows exponential growth in MIDD publications since 2019, though the authors acknowledge this represents an incomplete picture of pre-2019 MBDD/MID3 work. The case studies selected represent successful regulatory submissions, potentially introducing publication bias toward positive outcomes. The review appropriately distinguishes between author-reported results and regulatory conclusions. Sample sizes in cited case studies range from 1,713 patients (relatlimab PopPK) to 4,166 patients (nivolumab PopPK), providing robust parameter estimation. The ICH M15 framework addresses statistical rigor through pre-specified Model Analysis Plans (MAPs) and risk-based credibility assessment.

---

## 📊 Key Findings
The review establishes that MIDD has enabled regulatory approvals across nine distinct scenarios: (1) Atezolizumab SC 1875 mg Q3W approved based on PopPK bridging showing comparable $C_{trough}$ and $AUC$ to IV 1200 mg; (2) Nivolumab 480 mg Q4W approved across 8 tumor indications using PopPK simulations without clinical efficacy data; (3) Simultaneous adult/pediatric approval of nivolumab/relatlimab using virtual pediatric populations from NHANES data; (4) Brexpiprazole pediatric dosing (0.5-4 mg) approved based on exposure matching to adults; (5) Mavacamten echocardiography-guided dosing replacing TDM based on E-R modeling for $C_{avg,168}$; (6) Tofersen accelerated approval using plasma NfL as surrogate endpoint via causal inference analysis; (7) Anakinra EUA using AI/ML to identify suPAR-high patients; (8) Aripiprazole lauroxil 662 mg monthly and 882 mg Q6W approved via PBPK bridging; (9) Paliperidone palmitate LAI dosing regimen optimized using PopPK/PANSS E-R modeling. The ICH M15 taxonomy defines critical terms: Question of Interest (QOI), Context of Use (COU), Model Analysis Plan (MAP), and Model Analysis Report (MAR).

---

## 💡 Clinical & Regulatory Implications
MIDD enables dose optimization and formulation bridging without requiring expensive, time-consuming clinical trials, directly benefiting patients through faster access to convenient dosing (SC vs IV, Q4W vs Q2W) and pediatric indications. For atezolizumab, the SC formulation reduces clinic visit time and improves patient convenience. For nivolumab, the Q4W regimen proved fortuitously valuable during COVID-19 by reducing infection exposure. Pediatric extrapolation using exposure matching (brexpiprazole, nivolumab/relatlimab) accelerates access for children with cancer and psychiatric disorders. Mavacamten demonstrates how E-R modeling can replace therapeutic drug monitoring with echocardiography-guided dosing, simplifying the REMS program. The anakinra case establishes precedent for AI/ML-based patient selection in regulatory submissions. These cases collectively support the ICH M15 framework for risk-based assessment of modeling evidence.

---

### Strengths & Limitations

#### Strengths
- Timely publication coinciding with ICH M15 draft guideline release (November 2024)
- Comprehensive taxonomy clarifying previously ambiguous MIDD terminology (QOI, COU, MAP, MAR)
- Diverse case studies spanning small molecules, biologics, and advanced therapies
- Integration of AI/ML methods alongside traditional pharmacometrics
- Practical regulatory perspective from authors with industry and academic expertise
- Clear visualization of MIDD workflow and publication trends

#### Limitations (Acknowledged by Authors)
- Scoping review methodology does not include quantitative meta-analysis or quality assessment of individual studies
- Case studies represent successful submissions, potentially missing lessons from failed MIDD attempts
- Bibliometric analysis limited to 2014-2025, missing earlier MBDD/MID3 history
- Rapidly evolving field means ICH M15 implementation details may change after public consultation
- Does not provide detailed technical comparison of modeling software or algorithms used across case studies

#### Limitations (Expert Review)
- Limited discussion of model instability and generalizability issues that have challenged PBPK regulatory acceptance (referenced briefly in Challenges section but not integrated into case study analysis)
- No quantitative assessment of MIDD impact on development timelines or cost savings (though cited in references)
- Case study selection appears weighted toward oncology immunotherapy (4 of 9 cases)
- Minimal discussion of failed or contested MIDD submissions that would provide learning opportunities
- Could benefit from explicit comparison of FDA vs EMA acceptance criteria differences

#### Generalizability
The ICH M15 framework and case studies are broadly generalizable across therapeutic areas and drug modalities, though the specific modeling approaches (PopPK vs PBPK vs AI/ML) must be tailored to the QOI and COU. The review appropriately notes that MIDD requires sufficient prior clinical data for model building, limiting applicability to early development or novel modalities without precedent. The harmonization efforts should improve generalizability across global regulatory agencies, though regional differences in risk tolerance persist.

---

### Key Equations

**Trough Concentration**

$$
C_{trough}
$$

Primary PK endpoint for establishing bioequivalence between IV and SC formulations of monoclonal antibodies (atezolizumab, rituximab)

**Average Concentration**

$$
C_{avg}
$$

Time-averaged concentration used as alternative PK endpoint when trough is not established as efficacy driver

**Area Under the Curve**

$$
AUC
$$

Exposure metric calculated from PK profiles to demonstrate non-inferiority between dosing regimens or routes of administration

**Maximum Concentration**

$$
C_{max}
$$

Peak exposure metric used in pediatric extrapolation studies (brexpiprazole) to ensure safety margins

**AUC Infinity**

$$
AUC_{0-\infty}
$$

Total drug exposure from time zero to infinity, used to characterize mavacamten accumulation in CYP2C19 poor metabolizers (241% increase)

**Average Concentration over 168 hours**

$$
C_{avg,168}
$$

Exposure metric for mavacamten E-R analysis reflecting steady-state PK under weekly titration intervals, correlated with trough concentrations

---

### Figures & Tables

- **Figure 1**: MIDD as both a technical framework and regulatory tool, showing the integration of quantitative models (PopPK, PBPK, QSP, AI/ML) with regulatory decision-making processes
  - *Significance*: Conceptual framework distinguishing between the scientific methods (left side) and the regulatory process (right side), emphasizing that MIDD bridges both domains
- **Figure 2**: Regulatory interaction framework showing the iterative process between sponsors and regulatory agencies during MIDD implementation
  - *Significance*: Illustrates the consultative nature of MIDD, emphasizing early alignment on modeling strategies before analysis begins
- **Figure 3**: Taxonomy of MIDD stages: Planning and Regulatory Interaction (Stage 1), Implementation and Evaluation (Stage 2), and Submission (Stage 3) with key deliverables (MAP, MAR)
  - *Significance*: Operationalizes the ICH M15 workflow, providing a roadmap for sponsors to structure their MIDD submissions with specific documentation requirements at each stage
- **Figure 4**: Bibliometric analysis showing the number of MIDD publications (review vs non-review) from 2014 to 2024, demonstrating exponential growth since 2019
  - *Significance*: Quantifies the rapid adoption of MIDD methodologies in the scientific literature, supporting the need for harmonization via ICH M15
- **Figure 5**: Diverse applications of MIDD across drug development lifecycle including dose selection, special populations, drug-drug interactions, and formulation bridging
  - *Significance*: Visual summary of the breadth of MIDD applications, serving as a menu for drug developers considering modeling approaches
- **Figure 6**: Summary of nine case studies demonstrating MIDD applications across therapeutic areas (oncology, psychiatry, cardiology, neurology, infectious disease) and modalities
  - *Significance*: Provides concrete examples of successful regulatory submissions using MIDD, serving as precedent for future submissions and teaching tool for best practices
- **Table 1**: Definitions of key ICH M15 terms including Question of Interest (QOI), Context of Use (COU), Model Analysis Plan (MAP), Verification, Validation, and Applicability
  - *Significance*: Essential reference for standardizing terminology between sponsors and regulators, reproduced directly from ICH M15 draft guidelines to avoid confusion

---

### Supplementary Materials
The supplementary material (84.2 KB PDF) contains four additional case studies: (1) Adalimumab dosing in pediatric hidradenitis suppurativa using exposure-matching; (2) Additional details on nivolumab/relatlimab pediatric modeling; (3) Expanded methodology for mavacamten E-R modeling; and (4) Additional AI/ML methodology for the anakinra patient selection algorithm. These materials provide technical depth beyond the main text for readers interested in specific modeling implementation details.

---

### Future Directions
The review identifies several future directions: (1) Expansion to novel modalities including siRNA therapeutics, CAR-T cell therapies, AAV gene therapies, and cell-based therapies; (2) Implementation of FDA's roadmap to reduce animal testing using PBPK, AI/ML, and quantitative systems toxicology; (3) Integration of large language models (LLMs) like FDA's ELSA tool into regulatory workflows; (4) Addressing model instability and generalizability challenges in use-reuse settings; (5) Harmonization of MIDD acceptance criteria across global agencies beyond ICH M15; (6) Application of MIDD principles to personalized medicine and public health; (7) Development of credibility assessment frameworks for AI/ML models in drug development; and (8) Expansion of pediatric extrapolation using ontogeny-integrated PBPK models for neonates and infants.

---

### Expert Commentary
From a senior pharmacometrician's perspective, this review arrives at a pivotal moment as the industry transitions from exploratory modeling to regulated MIDD under ICH M15. The taxonomy provided (QOI, COU, MAP, MAR) finally gives sponsors the structured language needed for regulatory negotiations. The case studies demonstrate the maturation of our field—particularly the nivolumab Q4W and atezolizumab SC cases, which show regulators accepting pure simulation-based approvals without confirmatory clinical data. This represents a paradigm shift from 'models support decisions' to 'models are the primary evidence.' The inclusion of the anakinra AI/ML case is forward-thinking, acknowledging that pharmacometrics must evolve to incorporate machine learning for patient stratification. However, the review appropriately cautions about 'model instability'—a critical issue as we try to repurpose models across indications or populations. Teaching points: (1) Always pre-specify your MAP before analysis; (2) Match model complexity to decision risk per ICH M15; (3) Document everything for the MAR; (4) The ASME V&V 40 credibility framework is now the gold standard for model assessment. This paper should be required reading for all pharmacometrics training programs.

---

### Bottom Line
The ICH M15 guidelines represent a watershed moment for pharmacometrics, formalizing MIDD as a regulated discipline with standardized terminology (QOI, COU, MAP, MAR) and credibility assessment criteria. This review demonstrates that pharmacometric models—when properly documented and validated—can now serve as primary evidence for regulatory approvals, enabling dose optimization, formulation bridging, and pediatric extrapolation without additional clinical trials. The nine case studies provide a template for successful MIDD submissions across diverse therapeutic areas. Practicing pharmacometricians should immediately adopt the ICH M15 framework for all modeling activities, ensuring pre-specified Model Analysis Plans, rigorous verification/validation, and comprehensive Model Analysis Reports. As the field evolves, integration of AI/ML methods and expansion to novel modalities (gene therapy, CAR-T) will require maintaining the same credibility standards established in this harmonized framework.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-04-07-scoping-review-of-the-role-of-pharmacometrics-in-model-informed-drug-development/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-04-07-scoping-review-of-the-role-of-pharmacometrics-in-model-informed-drug-development/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-04-07-scoping-review-of-the-role-of-pharmacometrics-in-model-informed-drug-development/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-04-07-scoping-review-of-the-role-of-pharmacometrics-in-model-informed-drug-development/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-04-07-scoping-review-of-the-role-of-pharmacometrics-in-model-informed-drug-development/figures/fig_05.png)

![Figure 6]({{ site.baseurl }}/assets/digests/2026-04-07-scoping-review-of-the-role-of-pharmacometrics-in-model-informed-drug-development/figures/fig_06.png)