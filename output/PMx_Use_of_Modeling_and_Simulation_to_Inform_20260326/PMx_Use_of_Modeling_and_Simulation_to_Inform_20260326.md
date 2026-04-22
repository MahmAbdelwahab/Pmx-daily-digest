---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: March 26, 2026

## Paper 1: Use of Modeling and Simulation to Inform the Development of Monoclonal Antibodie

### Bibliographic Information
- **Title**: Use of Modeling and Simulation to Inform the Development of Monoclonal Antibodies to Treat Moderate-to-Severe Asthma: A Retrospective Review of EMA Centralized Procedure From 2014 to 2024
- **Authors**: Haguet H, Dogné JM, Musuamba FT
- **Journal**: CPT Pharmacometrics Syst Pharmacol. 2026;15(4):e70222
- **DOI**: [https://doi.org/10.1002/psp4.70222](https://doi.org/10.1002/psp4.70222)

### Quick Take
This regulatory analysis examines how modeling and simulation (M&S) has supported European approvals of five asthma monoclonal antibodies (2014-2024), finding that M&S addressed 25% of regulatory questions with heavy concentration in PK (78%) versus safety (3%). The study introduces a practical repository framework aligned with ICH M15 for benchmarking M&S credibility against traditional methods, revealing significant heterogeneity in methodological approaches across sponsors. Essential reading for regulatory pharmacometricians, drug development strategists, and sponsors seeking to optimize pediatric extrapolation and MIDD implementation in respiratory biologics.

---

### Executive Summary
This study presents a comprehensive retrospective analysis of modeling and simulation (M&S) utilization across European marketing authorization applications (MAAs) for five monoclonal antibodies approved for moderate-to-severe asthma between 2014-2024. The authors developed a structured repository of 190 regulatory questions organized hierarchically by benefit-risk assessment domains (efficacy, safety, PK) and granularity levels (population to molecular), applying the question-centric framework aligned with ICH M15 guidelines. Key findings indicate that M&S methods addressed 25% of all regulatory questions, with predominant application to pharmacokinetic characterization (78% of PK questions at population level) and limited penetration in safety assessment (3%). The analysis reveals heterogeneity in methodological approaches across products, with traditional PopPK and exposure-response models dominating while emerging techniques (PBPK, QSP, machine learning) remain unutilized. This work establishes a benchmark for MIDD credibility assessment in regulatory submissions and provides a template for systematic evaluation of quantitative methods in biologic drug development.

---

## ⚡ Methodological Snapshot
This retrospective regulatory science study developed a structured repository of key regulatory questions extracted from European marketing authorization applications (MAAs) for five monoclonal antibodies approved in asthma between 2014-2024. The methodology employed systematic review of MAAs and European Public Assessment Reports (EPARs), translating unstructured regulatory documentation into 190 hierarchical questions organized by benefit-risk assessment domains (efficacy, safety, pharmacokinetics) and granularity levels (population to molecular). The question-centric approach, aligned with ICH M15 guidelines, classified analytical methods as modeling and simulation (M&S) or traditional statistical approaches, enabling quantitative benchmarking of MIDD utilization. For questions addressed by M&S, the authors implemented credibility assessment using the ICH M15 framework, evaluating context of use, influence on decision-making, and consequence of wrong decisions. The repository structure accommodates both initial marketing authorizations and bridging across conditions of use (indications, formulations, dosing regimens, pediatric populations), providing a comprehensive map of evidentiary requirements and methodological solutions in asthma biologic development.

---

## 🏗️ Structural Model Breakdown
This review paper does not present a novel structural model but rather catalogs the diversity of modeling approaches applied across five approved asthma biologics. The structural models identified in regulatory submissions included: (1) Population PK (PopPK) models with 1-2 compartment disposition, typically parameterized with clearance (CL) and volume of distribution (V) with inter-individual variability on key parameters, and allometric scaling for body weight (exponent 0.75 for CL, 1.0 for V); (2) Exposure-response (E-R) models linking trough concentrations (C_{trough}) or AUC to clinical endpoints (exacerbation rates, FEV_1 improvement) using E_{max}, linear, or log-linear structures; (3) Indirect response PK/PD models for biomarker dynamics (e.g., eosinophil count suppression) with stimulation or inhibition of production/degradation; (4) Negative binomial regression models for exacerbation count data accounting for overdispersion; (5) Proportional odds models for ordered categorical outcomes (e.g., asthma control scores); (6) Power-law dose-response models for dose selection justification. Notably absent from this cohort were physiologically-based PK (PBPK) models for mAb disposition, quantitative systems pharmacology (QSP) models of asthma pathophysiology, and mechanism-based models incorporating receptor occupancy or target-mediated drug disposition (TMDD) beyond empirical descriptions.

---

### Detailed Methodological Analysis

#### Modeling Approach
The study employed a question-centric framework to structure regulatory evidence assessment, organizing 190 questions hierarchically across benefit-risk domains (efficacy, safety, PK) and granularity levels (population, individual, tissular, cellular, molecular). The repository methodology translated unstructured regulatory documentation into standardized question-answer pairs, classifying analytical methods as either M&S (PopPK, exposure-response, PK/PD, MMRM, negative binomial regression, power-law models) or traditional (non-compartmental analysis, descriptive/inferential statistics). Credibility assessment followed ICH M15 guidelines, evaluating the relevance and adequacy of M&S evidence for specific regulatory decisions. The approach emphasized bridging across conditions of use, particularly pediatric extrapolation, as a critical application domain for MIDD.

#### Data Sources
The study conducted a retrospective systematic review of European marketing authorization applications (MAAs) and European Public Assessment Reports (EPARs) for five monoclonal antibodies approved for moderate-to-severe asthma from 2014-2024: mepolizumab, reslizumab, benralizumab (IL-5 pathway inhibitors), dupilumab (IL-4R\alpha antagonist), and tezepelumab (TSLP inhibitor). Data extraction encompassed quality, primary pharmacodynamics, toxicology, clinical efficacy, clinical safety, and clinical pharmacology sections of regulatory dossiers. The analysis included both initial MAAs and subsequent bridging applications across conditions of use (indications, dosing regimens, formulations, pediatric age groups). Two drugs (mepolizumab and dupilumab) had approved pediatric indications for ages 6-11 years, providing case studies for pediatric extrapolation. The repository captured 190 distinct regulatory questions, with 166 from initial MAAs and 42 from bridging applications.

#### Estimation Methods
As a retrospective review, this study did not perform primary estimation but cataloged estimation approaches used in the original regulatory submissions. Population PK models predominantly utilized nonlinear mixed-effects modeling (FOCE, SAEM algorithms) implemented in NONMEM or similar software. Exposure-response analyses employed various statistical frameworks including negative binomial regression for count data (exacerbation rates), proportional odds models for ordered categorical endpoints, and mixed models for repeated measures (MMRM) for continuous efficacy endpoints. Power-law dose models were applied for dose-response characterization in select submissions. The review noted that Bayesian estimation methods were not prominently featured in the submitted analyses, with frequentist approaches dominating the regulatory submissions.

#### Model Evaluation
Model evaluation in the original submissions followed standard pharmacometric practices including visual predictive checks (VPCs), bootstrap resampling, and goodness-of-fit diagnostics, though the level of detail varied across products. This study applied the ICH M15 credibility assessment framework to benchmark M&S methods against traditional approaches. The credibility assessment evaluated context of use, model influence on decision-making, and consequence of wrong decisions (rated as high for pediatric bridging given disease severity). For models with medium or high regulatory impact, the analysis revealed variable levels of maturity and documentation, suggesting inconsistent regulatory acceptance criteria across procedures. The repository framework itself serves as a meta-evaluation tool, enabling comparison of methodological rigor across sponsors and identification of best practices for future submissions.

#### Covariate Analysis
Covariate analyses reviewed in the repository included standard pharmacometric approaches for identifying sources of variability in PK and efficacy. Body weight was the most consistently evaluated covariate across products, addressed via allometric scaling in PopPK models for four of five drugs. Disease characteristics (e.g., baseline eosinophil count, exacerbation history) were evaluated as covariates in exposure-response models for efficacy, though with inconsistent implementation across sponsors. Concomitant medication effects on PK were characterized using PopPK models in four of five drugs. The analysis revealed heterogeneity in covariate selection criteria and methodological rigor, with some submissions employing systematic covariate screening (stepwise or full covariate modeling) while others used more empirical approaches. Notably, no applications utilized physiologically-based covariate modeling for pediatric extrapolation, relying instead on empirical allometric scaling.

---

### Scientific Context & Motivation
The development of monoclonal antibodies for moderate-to-severe asthma faces significant challenges in pediatric populations, where ethical and practical constraints limit randomized controlled trial enrollment, creating an average 10-year gap between adult and pediatric labeling. While model-informed drug development (MIDD) offers established tools for extrapolation and trial optimization, regulatory acceptance of M&S remains inconsistent, with no systematic framework for assessing the credibility of quantitative evidence in European centralized procedures. This study addresses the critical need for structured assessment of M&S contributions to regulatory decision-making, particularly for bridging across conditions of use where traditional clinical trial data may be unavailable or impractical. By mapping the current landscape of M&S utilization against the proposed ICH M15 question-centric framework, the work identifies gaps between available quantitative methodologies (including emerging PBPK, QSP, and AI/ML approaches) and their actual regulatory implementation, providing a benchmark for optimizing the evidentiary value of pharmacometrics in biologic drug development.

---

### Statistical Rigor Assessment
The retrospective study design carries inherent limitations regarding data completeness, as EPARs represent condensed summaries of regulatory submissions rather than raw analysis datasets. The extraction of 190 questions from five products (coverage ranging 51-65% of repository questions per drug) suggests substantial heterogeneity in regulatory documentation depth, potentially introducing selection bias toward questions with explicit methodological descriptions. The categorization of analytical approaches into M&S versus traditional methods, while systematic, may obscure hybrid implementations or nuanced methodological distinctions. The credibility assessment framework (ICH M15) provides structure but introduces subjectivity in rating "influence on decision-making" and "consequence of wrong decisions" retrospectively. Sample size (five products) limits generalizability to broader biologic classes, though the consistency of the asthma indication provides clinical coherence. Missing data regarding exploratory analyses conducted by sponsors but not submitted to regulators may underestimate true M&S utilization in internal decision-making.

---

## 📊 Key Findings
The systematic review identified 190 distinct regulatory questions across five approved asthma monoclonal antibodies (mepolizumab, reslizumab, benralizumab, dupilumab, tezepelumab), with M&S methods applied to 25% of questions overall. Pharmacokinetic characterization at the population level showed the highest M&S penetration (78% of questions), predominantly through population PK (PopPK) models used consistently across all five drugs. Efficacy characterization utilized M&S for 38% of population-level questions, employing exposure-response models, mixed models for repeated measures (MMRM), and PK/PD approaches, though with notable heterogeneity across products. Safety assessment remained largely qualitative, with only 3% of safety questions addressed through quantitative methods. For bridging across conditions of use—including pediatric extrapolation—M&S proved critical, addressing 52% of bridging questions overall and 62% of age-group bridging scenarios. Only three regulatory questions were consistently addressed using M&S across all five drugs: characterization of PK variability sources, PK exposure metrics (AUC, C_{max}, C_{min}), and body weight impact on PK. The analysis revealed that 75% of M&S applications complemented traditional statistical analyses rather than replacing them, suggesting a hybrid evidentiary approach remains the regulatory standard.

---

## 💡 Clinical & Regulatory Implications
The repository analysis reveals that M&S approaches have become integral to pediatric bridging strategies for asthma biologics, with 62% of age-group bridging questions addressed through modeling. This supports earlier incorporation of pediatric labeling information, potentially reducing the typical 3-year gap between adult and pediatric approvals. However, the limited application of M&S to safety characterization (only 3% of safety questions) represents a missed opportunity, particularly for immunogenicity risk assessment where quantitative approaches could provide mechanistic insights. The heterogeneity in M&S application across the five approved products suggests that regulatory acceptance remains inconsistent, highlighting the need for standardized credibility assessment frameworks (per ICH M15) to facilitate broader adoption. For dose optimization, the predominance of exposure-response modeling for efficacy characterization supports continued investment in PopPK and PK/PD infrastructure, though the absence of physiologically-based approaches may limit mechanistic understanding in special populations.

---

### Strengths & Limitations

#### Strengths
- Comprehensive systematic review of five approved products with consistent indication (moderate-to-severe asthma) enabling meaningful comparison
- Novel application of ICH M15 question-centric framework to real-world regulatory submissions, providing proof-of-concept for guideline implementation
- Development of a reusable repository structure that can be extended to other therapeutic areas and drug classes
- Quantitative benchmarking of M&S versus traditional methods with specific credibility assessment criteria
- Focus on pediatric bridging provides actionable insights for addressing the 10-year gap in pediatric labeling
- Alignment with ERAMET project objectives supports future regulatory harmonization efforts
- Transparent methodology enabling replication for other drug classes or regulatory jurisdictions

#### Limitations (Acknowledged by Authors)
- Retrospective analysis relies on EPARs and MAA documentation rather than raw data or sponsor internal analyses, potentially underestimating exploratory M&S applications
- Repository coverage varied across products (51-65%), indicating incomplete documentation or heterogeneous regulatory questioning
- Limited to asthma indications; patterns may differ in other therapeutic areas with different biomarker availability or disease mechanisms
- Cannot assess the qualitative impact of M&S on regulatory decisions, only the frequency of use
- Time period (2014-2024) may not capture recent advances in PBPK, QSP, or AI/ML that may be emerging in current submissions

#### Limitations (Expert Review)
- No validation of the question extraction methodology against independent regulatory expert review
- Potential publication bias toward successful applications; failed submissions not analyzed
- Credibility assessment performed retrospectively without access to regulatory assessors' actual decision-making criteria
- Lack of quantitative metrics for model performance comparison across sponsors
- Absence of cost-effectiveness or resource utilization analysis comparing M&S versus traditional evidentiary approaches
- Did not capture the iterative scientific advice process where M&S strategies may have been refined prior to MAA submission

#### Generalizability
The findings are generalizable to monoclonal antibody development in respiratory indications, particularly for biologics targeting type 2 inflammation. The question-centric framework and credibility assessment methodology are broadly applicable across therapeutic areas, though the specific pattern of M&S utilization (heavy PK focus, limited safety modeling) may reflect asthma-specific regulatory expectations rather than universal biologic development patterns. The pediatric extrapolation findings are particularly relevant for indications where adult data must bridge to younger populations.

---


---

### Figures & Tables

- **Figure 1**: Flow diagram illustrating the systematic methodology for repository building, including data extraction from MAAs and EPARs, translation into essential regulatory questions, and hierarchical classification by benefit-risk domains and granularity levels.
  - *Significance*: Provides the methodological transparency for the systematic review process, establishing the rigor of the question extraction and categorization framework used to populate the repository.
- **Figure 2**: Schematic representation of the repository structure organized around benefit-risk assessment (BRA) with hierarchical layers for efficacy, safety, and PK characterization at population, individual, tissular, cellular, and molecular levels. Shows positioning of bridging questions across conditions of use (dose, formulation, indication).
  - *Significance*: Illustrates the conceptual framework that harmonizes regulatory review across different use-cases, demonstrating how the question-centric approach structures knowledge flow across data types and expertise domains.
- **Figure 3**: Overview of the 190 regulatory questions extracted from initial MAAs and bridging applications, categorized by type (efficacy, safety, PK) and granularity level. Shows proportion of questions answered by M&S methods versus traditional approaches.
  - *Significance*: Quantifies the landscape of regulatory questioning in asthma biologics, revealing the distribution of evidence requirements across domains and the differential penetration of M&S methods (78% for PK population level vs. 3% for safety).
- **Figure 4**: Timeline showing the successful use of M&S methods across drug development phases, from Phase 1 entry through confirmatory trials and post-approval bridging. Demonstrates increasing M&S utilization as development progresses.
  - *Significance*: Illustrates the temporal pattern of M&S integration, showing limited use in early development (2% at Phase 1 entry) but substantial application during confirmatory stages and bridging, supporting the role of M&S in late-stage decision-making.
- **Figure 5**: Example of method benchmarking using the ICH M15 table for assessment of MIDD evidence, showing credibility assessment for an exposure-response model used to characterize efficacy in adolescents. Includes context of use, influence on decision-making, and consequence of wrong decisions.
  - *Significance*: Provides a concrete template for implementing credibility assessment in regulatory submissions, demonstrating how to evaluate model maturity and regulatory acceptance for medium-to-high impact decisions.
- **Table 1**: Summary of modeling approaches used across the five approved monoclonal antibodies, showing frequency of PopPK, exposure-response, negative binomial regression, MMRM, PK/PD, and other model types per drug.
  - *Significance*: Quantifies the methodological heterogeneity across products, revealing PopPK as the consistent standard (used in all drugs) while other approaches like E-R and PK/PD show variable adoption, highlighting opportunities for methodological harmonization.
- **Table 2**: Detailed breakdown of specific regulatory questions addressed by M&S methods versus traditional approaches, showing which questions were answered exclusively by M&S, complementarily, or by non-M&S methods across the five drugs.
  - *Significance*: Provides granular insight into regulatory question-answer pairing, identifying three questions consistently addressed by MIDD across all drugs (PK variability, exposure metrics, body weight impact) and revealing gaps where M&S could have been applied but was not.

---



### Future Directions
The repository analysis identifies several critical directions for advancing M&S in asthma biologics development. First, the complete absence of physiologically-based pharmacokinetic (PBPK) and quantitative systems pharmacology (QSP) modeling in this cohort—despite their established utility for mAb disposition and asthma pathophysiology—suggests immediate opportunities for mechanistic modeling to support pediatric extrapolation and special population dosing. Second, the underutilization of M&S for safety characterization (3% of questions) warrants investigation into quantitative immunogenicity risk assessment and systems toxicology approaches, particularly given the immunomodulatory mechanisms of these biologics. Third, the heterogeneity in methodological approaches across sponsors indicates a need for industry-wide harmonization through consortia or regulatory guidance on standard PopPK and exposure-response implementations for respiratory biologics. Fourth, extension of this repository framework to other therapeutic areas (e.g., atopic dermatitis, eosinophilic esophagitis) where these same mAbs are approved could reveal disease-specific regulatory acceptance patterns. Finally, the integration of artificial intelligence and machine learning methods—currently absent from this cohort—should be prospectively evaluated for their ability to address the 75% of questions currently answered by traditional statistical methods, potentially accelerating the evidentiary timeline for pediatric indications.

---

### Expert Commentary
This paper represents a significant contribution to regulatory pharmacometrics by operationalizing the ICH M15 question-centric framework within a real-world regulatory context. As someone who has navigated numerous MAA submissions, I find the 25% M&S penetration rate both encouraging and revealing—it demonstrates that pharmacometrics has transitioned from exploratory to integral in respiratory biologics, yet the concentration in PK rather than safety or mechanistic modeling suggests we are still underutilizing our quantitative toolkit. The absence of PBPK and QSP applications in this cohort is particularly striking given the mechanistic complexity of asthma endotypes and the potential for these approaches to support pediatric extrapolation beyond empirical allometric scaling. The credibility assessment benchmarking proposed here will be invaluable for junior pharmacometricians learning to navigate regulatory expectations, though I caution that the retrospective nature of EPAR analysis may underestimate the exploratory modeling that informed internal sponsor decisions but never reached regulatory submission. The heterogeneity across products—where some sponsors submitted comprehensive PopPK analyses while others relied on non-compartmental methods for similar questions—highlights the need for industry convergence on MIDD standards. Looking forward, this repository framework could be extended to other therapeutic areas, potentially revealing disease-specific patterns in regulatory acceptance of quantitative methods.

---

### Bottom Line
This retrospective regulatory analysis demonstrates that while modeling and simulation (M&S) methods have gained traction in asthma monoclonal antibody development—addressing 25% of regulatory questions and 78% of population-level PK questions—significant opportunities remain for expanded application. The study reveals a predominant reliance on traditional pharmacometric approaches (PopPK, exposure-response) with notable underutilization in safety characterization (3% of questions) and absence of emerging methodologies (PBPK, QSP, AI/ML). For practicing pharmacometricians, this work underscores the critical importance of framing regulatory questions using the question-centric approach advocated in ICH M15, ensuring that M&S contributions are positioned with appropriate credibility assessment to support bridging across conditions of use, particularly for pediatric extrapolation where M&S proved essential in 62% of age-group bridging questions.

---

---

## 📊 Figures



```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: Flow diagram of the methodology used for repository building.],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [FIGURE 2: General structure of the repository harmonized based on regulatory review applied to different use-cases.],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 3: Overview of the repository of key regulatory and methodology questions built using the question-centric approach that have been answered in centralized marketing],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [FIGURE 4: Successful use of M&S methods across drug development for the approved mAbs in asthma. Graphs represent the number of questions answered by regulatory decision p],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [FIGURE 5: Example of method benchmarking including credibility assessment through the ICH M15 table for assessment of MIDD evidence.],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```

