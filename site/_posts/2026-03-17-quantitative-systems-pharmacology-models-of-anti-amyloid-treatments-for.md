---
layout: post
title: "Quantitative Systems Pharmacology Models of Anti-Amyloid Treatments for Alzheimer's Disease: A Systematic Review"
date: 2026-03-17
authors: "Herriott L, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026;15(3):e70223"
doi: "https://doi.org/10.1002/psp4.70223"
paper_type: generic
tags: [generic, pbpk, qsp, regulatory]
excerpt_text: "This systematic review evaluated seven published QSP models of anti-amyloid Alzheimer's disease therapies against best-practice criteria, revealing critical quality gaps including absent identifiability analyses, insufficient validation, and zero provision of executable code. Pharmacometricians developing QSP models for neurodegeneration, regulatory scientists evaluating MIDD submissions, and AD drug development teams should read this as a wake-up call regarding reproducibility standards in the field."
retroactively_classified: true
---

### Quick Take
This systematic review evaluated seven published QSP models of anti-amyloid Alzheimer's disease therapies against best-practice criteria, revealing critical quality gaps including absent identifiability analyses, insufficient validation, and zero provision of executable code. Pharmacometricians developing QSP models for neurodegeneration, regulatory scientists evaluating MIDD submissions, and AD drug development teams should read this as a wake-up call regarding reproducibility standards in the field.

---

### Executive Summary
Herriott et al. conducted a PRISMA-compliant systematic review of quantitative systems pharmacology (QSP) models simulating anti-amyloid therapies for Alzheimer's disease (AD), identifying seven eligible models from 540 screened publications. Using a 15-criteria quality assessment adapted from UK QSP Network best practices, the authors found alarmingly low quality scores (40-53%), with universal failures in structural identifiability analysis, parameter estimation transparency, and code availability. Despite structural similarities across models (all compartmental ODE-based with brain ISF/plasma compartments), parameter values varied by orders of magnitude, highlighting practical identifiability challenges. The review exposes a reproducibility crisis in AD QSP modeling and provides a roadmap for standardization urgently needed as these models increasingly support regulatory submissions for disease-modifying therapies like lecanemab and donanemab.

---

## ⚡ Methodological Snapshot
The authors employed a comprehensive search strategy across PubMed and Web of Science (February 2025) using broad terms spanning Alzheimer's disease, quantitative systems pharmacology, and therapeutic interventions, yielding 784 initial publications. Following PRISMA guidelines adapted for mathematical models, they applied rigorous inclusion criteria requiring: (1) multi-tissue systems pharmacology structure, (2) clinically relevant biomarker outputs, and (3) mechanistic representation of drug PK and target engagement. Seven compartmental ODE models met criteria (Geerts et al. [2 papers], Ferl et al., Markovic et al., Lin et al., Ramakrishnan et al., Madrasi et al.). Quality assessment utilized 15 criteria spanning model purpose, structure, inputs, verification (identifiability/sensitivity), validation, and reproducibility. Notably, the review compared quantitative parameter estimates across models and qualitatively assessed structural features like microglial representation and amyloid species granularity.

---

## 🏗️ Structural Model Breakdown
All seven models utilized compartmental ordinary differential equation (ODE) structures with at least brain interstitial fluid (ISF) and plasma compartments. Six of seven included CSF compartments (models 1,2,4,5,6,7). Amyloid representation varied from fine-grained (models 1,6: aggregates sized 1-24 monomers tracking particle numbers) to coarse-grained (models 2,4,7: monomer/oligomer/plaque tracking total mass). Models 4 and 7 included explicit APP processing (β/γ-secretase), while others modeled Aβ production directly. Three models (1,5,6) incorporated microglial dynamics (resting vs. activated/phagocytic states) for antibody-dependent cellular phagocytosis (ADCP). PK models were consistently two-compartment with brain penetration, but differed in Fc receptor representation (models 4,7 required FcR binding before clearance; others allowed direct complex clearance).

---

### Detailed Methodological Analysis

#### Modeling Approach
Systematic review with quality scoring using adapted UK QSP Network best practices. Review included compartmental ODE models only (no PBPK, no agent-based). Quality criteria covered: (1) rationale statement, (2) model schematic, (3) mathematical equations, (4) variable definitions, (5) initial/boundary conditions, (6) software documentation, (7) algorithm specification, (8) assumptions discussion, (9) parameter fitting methods, (10) parameter values, (11) identifiability analysis, (12) sensitivity analysis, (13) steady-state analysis, (14) validation description, and (15) executable code availability.

#### Data Sources
Literature search of PubMed and Web of Science databases (February 1, 2025) with 784 initial hits reduced to 7 included models through title/abstract/full-text screening. Exclusion criteria: machine learning, animal/cellular models, molecular docking, epidemiological models, reviews. Included models spanned diverse populations: prodromal AD, MCI, mild-moderate AD, APOE ε4 carriers/non-carriers, and Down's syndrome.

#### Estimation Methods
Not applicable (review paper). However, review found that among the 7 primary models, only 3 (Models 4, 5, 7) described parameter estimation approaches, with insufficient detail for reproduction. Methods mentioned included simultaneous fitting to clinical trial data, iterative fitting, and use of SILK (stable isotope labeling kinetics) data for steady-state constraints. No models performed structural identifiability analysis (e.g., scaling invariance method or profile likelihood).

#### Model Evaluation
Quality assessment used 15 binary criteria (present/absent) producing scores of 6-8/15 (40-53%). Validation was described in only 3/7 models: Model 4 (Phase Ib aducanumab data), Model 5 (Phase III aducanumab/gantenerumab; APOE stratification), Model 6 (Phase III donanemab). Sensitivity analysis was limited (local only in Model 4; absent in others). Cross-model parameter comparison revealed 38-fold differences in steady-state amyloid concentrations despite shared literature sources.

#### Covariate Analysis
Review identified that 3/7 models stratified by APOE ε4 status, and 1/7 (Model 6) incorporated Down's syndrome (1.5× APP production rate). Models generally calibrated to specific trial populations rather than performing formal covariate analysis. Parameter differences between models 4 and 7 (e.g., brain→plasma transport: 1.48×10⁻⁵ vs 1.48×10⁻⁸ s⁻¹) suggest compensation between transport and clearance parameters, indicating practical identifiability issues.

---

### Scientific Context & Motivation
The AD therapeutic landscape has been transformed by anti-amyloid monoclonal antibodies (aducanumab, lecanemab, donanemab), yet optimizing their dosing, predicting ARIA risk, and designing combination regimens requires robust mechanistic modeling. QSP models offer unique potential to bridge molecular mechanisms (amyloid aggregation, microglial clearance) with clinical biomarkers (PET SUVr, CSF Aβ). However, unlike classical PKPD modeling where FDA guidance has standardized expectations since 2003, QSP lacks regulatory harmonization, leading to heterogeneous methodologies and terminology. This review addresses the critical need for quality benchmarking in an era where QSP models are increasingly submitted to regulatory agencies (60 FDA submissions in 2020 alone) but face skepticism due to opacity in model development and validation.

---

### Statistical Rigor Assessment
As a systematic review, statistical rigor focuses on search comprehensiveness and bias mitigation. The review followed PRISMA guidelines with dual-database searching and duplicate removal via Rayyan. However, single-reviewer screening introduces potential bias. The 7-model sample size limits generalizability, compounded by publication bias (industry models often unpublished; only 23% of QSP practitioners publish models per cited survey). The quality scoring system, while adapted from UK QSP Network guidelines, applies binary criteria that may not capture gradations in methodological sophistication. Missing data handling was not applicable, though the authors noted that parameter estimation details were frequently missing from primary publications.

---

## 📊 Key Findings
Quality scores ranged from 40-53% (6-8/15 criteria), with universal absences in: algorithm specification, parameter fitting methodology, identifiability analysis, and executable code provision. All models shared structural similarities (compartmental ODE, mass-action binding) yet showed parameter heterogeneity: brain amyloid steady-state concentrations varied 38-fold between models 4 and 7 (96 vs 4.4 nM oligomer; 1500 vs 39 nM plaque). Transport parameters varied by 3 orders of magnitude (brain→plasma: 10⁻⁵ to 10⁻⁸ s⁻¹). Only 3/7 models described validation against independent data. Notably, complex models with explicit microglia (1,5,6) predicted slower initial plaque clearance than simpler models, potentially mismatching clinical trial data for lecanemab/donanemab showing rapid early reduction.

---

## 💡 Clinical & Regulatory Implications
The modest quality scores raise concerns about reliance on these models for dosing optimization and regulatory decision-making. Variability in predicted plaque clearance trajectories (linear vs. exponential) impacts trial design assumptions for maintenance dosing and treatment duration. The failure to predict rapid early clearance in microglia-inclusive models suggests mechanistic gaps in representing ADCP or plaque accessibility. ARIA-E prediction (models 1,6) offers safety-relevant applications but requires validation. For regulatory submissions, the absence of identifiability analyses and executable code poses challenges for FDA/EMA model evaluation. The review supports developing standardized 'platform' models to improve confidence in simulations for combination therapies (anti-amyloid + tau) and prevention trials.

---

### Strengths & Limitations

#### Strengths
- First systematic review specifically targeting anti-amyloid QSP models with rigorous PRISMA methodology
- Developed and applied standardized quality criteria adapted from UK QSP Network best practices
- Performed quantitative cross-model parameter comparison revealing identifiability issues
- Identified critical reproducibility gap: zero of seven models provided executable code
- Comprehensive documentation of model structural variations (microglia representation, aggregate sizing)
- Contacted corresponding authors to clarify methodology (confirmed traditional estimation vs. virtual population calibration)

#### Limitations (Acknowledged by Authors)
- Search strategy may have missed models not explicitly labeled as 'mathematical' or 'QSP' in title/abstract
- Exclusion of models simulating treatments by parameter scaling (rather than mechanistic PK) may have excluded relevant QSP approaches
- Single-reviewer screening introduces potential selection bias
- Quality assessment binary criteria may oversimplify methodological nuances
- Industry models underrepresented due to low publication rates (IP concerns)

#### Limitations (Expert Review)
- Did not assess predictive performance quantitatively (e.g., normalized prediction errors) due to heterogeneity in reported outcomes
- Limited discussion of software validation (e.g., solver tolerances, numerical stability)
- No assessment of uncertainty propagation methods (e.g., VPC, bootstrap) in primary models
- Did not evaluate model parsimony or information criteria (AIC/BIC) comparisons
- Limited exploration of why microglia-inclusive models underpredict early clearance (mechanistic insight vs. data quality issue)

#### Generalizability
Findings are generalizable to the AD QSP field specifically, but caution is needed extrapolating to other therapeutic areas (e.g., oncology QSP may have different standards). The structural similarities across independently developed models suggest convergent biological understanding, but parameter divergence indicates field-wide identifiability challenges. Industry applicability is limited by the 'file drawer problem' (unpublished models likely higher quality but inaccessible).

---

---

### Figures & Tables

- **Figure 1**: Time series showing the cumulative number of published QSP models (total and neurodegenerative-specific) from 2011-2025, demonstrating exponential growth in the field.
  - *Significance*: Illustrates the rapid expansion of QSP applications, contextualizing the urgent need for standardization as the field transitions from academic curiosity to regulatory tool.
- **Figure 2**: PRISMA flow diagram showing literature screening: 784 initial records → 540 after duplicate removal → 283 after title screening → 91 after abstract screening → 7 final included models.
  - *Significance*: Demonstrates the strict inclusion criteria and high exclusion rate (99% of screened papers excluded), validating the specificity of the QSP definition applied.
- **Figure 3**: Schematic of the amyloid pathway annotated with checkmarks indicating which of the 7 models include specific mechanisms: APP processing, direct Aβ production, secondary nucleation, microglial phagocytosis, and Fc receptor binding.
  - *Significance*: Visual comparison revealing consensus on core mechanisms (monomer→oligomer→plaque) but divergence in mechanistic detail (microglia: 3/7; FcR: 2/7; APP processing: 4/7).
- **Figure 4**: Matrix comparing amyloid aggregate representation across models, organized by aggregate size (monomer to plaque) and colored by isoform (Aβ40 blue, Aβ42 orange, combined gray).
  - *Significance*: Highlights the spectrum from fine-grained (models 1,6: 24 discrete aggregate sizes) to coarse-grained (models 2,4,7: 3 pools) representations, impacting computational complexity and parameter identifiability.
- **Table 1**: Summary of the seven included QSP models with publication citations and brief descriptions of scope (e.g., ARIA prediction, specific mAbs simulated).
  - *Significance*: Quick reference mapping model labels (1-7) to primary literature, noting that models 1 and 6 share the same underlying structure (Geerts et al.).
- **Table 2**: Comparison matrix of model features across the 7 models: compartments (brain ISF, CSF sub-compartments, plasma, lymph), populations (prodromal, MCI, APOE ε4), biomarkers (PET SUVr, CSF Aβ), and treatments simulated.
  - *Significance*: Reveals heterogeneity in anatomical scope (CSF sub-compartments: 2/7) and biomarker coverage (plasma Aβ: 2/7), with implications for model utility in different clinical contexts.
- **Table 3**: Model development characteristics: fitting protocols, data sources (clinical trials, SILK studies), software platforms (MATLAB/KroneckerBio, R/Phoenix), and validation strategies.
  - *Significance*: Exposes the opacity in methodology: only 3/7 described fitting protocols; software unspecified in 3/7; validation data absent in 4/7.
- **Table 4**: Quantitative comparison of parameter values for Aβ transport, clearance, and antibody ADCP rates across models 2, 4, 5, and 7 (units standardized to s⁻¹).
  - *Significance*: Critical evidence of parameter divergence (3 orders of magnitude in transport rates) suggesting practical non-identifiability and compensatory parameter adjustments between clearance and transport.

---

### Code & Reproducibility Assessment
Critically assessed as part of the review. None of the seven included models provided executable code or sufficient implementation detail (solver algorithms, tolerances) for reproduction. Only 4/7 specified software (MATLAB with KroneckerBio or SimBiology; R/Phoenix). The authors note this aligns with broader QSP field findings (only 4/12 models in previous reproducibility study provided code). Authors recommend BioModels deposition and GitHub repositories with documentation as minimum standards.

---

### Supplementary Materials
Supplementary materials include: (S1) Search terms for PubMed and Web of Science; (S2) Detailed screening results with exclusion reasons; (S3) Extended model descriptions; (S4) Parameter scaling calculations for Table 4; (S5) Quality assessment checklist (15 criteria); (S6) Binding affinity (KD) comparison across models; Tables S1-S4: Raw screening data and extraction forms. Notably, the supplementary tables provide the detailed data extraction form used for systematic review, which could serve as a template for future QSP reviews.

---

### Future Directions
Immediate priorities include: (1) mandatory code deposition for QSP publications (journals should require BioModels submission or GitHub repositories); (2) standardized structural identifiability analysis using scaling invariance or profile likelihood methods; (3) development of open-source AD platform models extending beyond amyloid to tau, neuroinflammation, and neurodegeneration; (4) integration of trontinemab-like brain shuttle technologies requiring updated PK models; (5) validation against early timepoint data (3-6 months) to resolve clearance dynamics discrepancies; (6) expansion to combination therapy simulations (anti-amyloid + anti-tau); (7) regulatory guidance harmonization (EMA 2026 guideline anticipated); (8) collaborative academic-industry consortia to share data and validated sub-modules (e.g., microglial phagocytosis).

---

### Expert Commentary
This review exposes an uncomfortable truth: despite QSP's promise for AD drug development, the field is experiencing a reproducibility crisis reminiscent of pre-registration clinical trials. The finding that seven independently developed models share structural homology yet lack code transparency prevents the 'falsification' necessary for scientific progress. As a senior pharmacometrician, I view the 40-53% quality scores as a call to action—particularly the universal absence of identifiability analyses. We cannot confidently extrapolate these models to pediatric Down's syndrome populations or 10-year maintenance regimens if we cannot uniquely identify parameters from existing data. The parameter compensation observed between transport and clearance (10⁻⁵ vs 10⁻⁸ s⁻¹) is classic practical non-identifiability that sensitivity analysis would reveal. I commend the authors for contacting primary investigators to clarify calibration methods; this should become standard practice. The field must transition from 'bespoke artisanal models' to collaborative platform development, leveraging the IQ Consortium's QSP working group infrastructure. With FDA increasingly accepting QSP for dose selection and EMA updating mechanistic modeling guidelines in 2026, the window for self-regulation is closing. Journals must enforce code submission, and we must adopt the 'clinical pharmacology backbone' concept proposed by others—validated, reusable components for APP processing, microglial dynamics, and biomarker translation.

---

### Bottom Line
Practicing pharmacometricians should recognize that current AD QSP models, while biologically plausible, lack the methodological rigor expected for regulatory decision-making—specifically identifiability analysis, validation against independent data, and code transparency. When developing new QSP models for neurodegeneration, prioritize structural identifiability checks early (e.g., Castro's scaling invariance method), document parameter estimation workflows exhaustively, and deposit executable code. Consider extending existing open models rather than de novo development, and engage regulators early via the MIDD Paired Meeting Program to align validation expectations. The field is at an inflection point: either standardize around best practices now or risk regulatory rejection of QSP submissions for AD combination therapies.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: The number of published QSP models (blue), including for neurodegenerative disorders specifically (orange), has increased since 2011. Publications were identifie],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [FIGURE 2: Literature screening flow chart highlighting the number of publications excluded at each stage of screening. Screening proceeded in three stages: title, abstract],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 3: Overview of the amyloid pathway in AD, annotated with the models which include representations of direct Aβ production, APP processing, secondary nucleation, and],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [FIGURE 4: Overview of the amyloid aggregate species represented in each model arranged by amyloid aggregate size and colored by amyloid isoform represented: Aβ40 (blue), A],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```