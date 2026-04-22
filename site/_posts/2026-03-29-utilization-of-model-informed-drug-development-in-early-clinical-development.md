---
layout: post
title: "Utilization of Model-Informed Drug Development in Early Clinical Development: Case Study of a Hb Modulator for Treatment of Sickle Cell Disease"
date: 2026-03-29
authors: "Chay Ngee Lim et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2024, Volume 3, Issue 4, Pages 42-55"
doi: "https://doi.org/10.1002/psp4.70238"
paper_type: generic
tags: [generic, qsp, regulatory]
excerpt_text: "This case study demonstrates how MIDD prevented advancement of a hemoglobin modulator (PF-07059013) for sickle-cell disease after FIH data showed insufficient target engagement. Using integrated PK/PD, semi-mechanistic RBC modeling, and strict, pre-defined quantitative go/no-go criteria, the program avoided a costly Phase 1b in patients. Essential reading for pharmacometricians involved in early development of hemoglobinopathies or programs requiring quantitative decision frameworks."
pdf_path: "/assets/digests/2026-03-29-utilization-of-model-informed-drug-development-in-early-clinical-development/PMx_Utilization_of_ModelInformed_Drug_Develo_20260329.pdf"
retroactively_classified: true
---

### Quick Take
This case study demonstrates how MIDD prevented advancement of a hemoglobin modulator (PF-07059013) for sickle-cell disease after FIH data showed insufficient target engagement. Using integrated PK/PD, semi-mechanistic RBC modeling, and strict, pre-defined quantitative go/no-go criteria, the program avoided a costly Phase 1b in patients. Essential reading for pharmacometricians involved in early development of hemoglobinopathies or programs requiring quantitative decision frameworks.

---

### Executive Summary
This paper presents a paradigm-shifting implementation of MIDD in early-phase development of PF-07059013, a novel hemoglobin modulator for sclle cell disease. By establishing quantitative criteria (≥25% Hb coverage, ≥10 mmHg $p_{20}$ reduction) before FIH study initiation and integrating population PK modeling, PK/PD relationships, and semi-mechanistic reticulocyte modeling, the development taam demonstrated that even maximum feasible dosing (2500 mg/day) would fail to achieve clinically meaningful hemoglobin improvement (projected $0.79$ $g/dL$ vs target $2$ $g/dL$). This evidence-based decision to terminate the program before Phase 1b in patients exemplifies MIDD's value in resource allocation and patient-centric development, saving approximately $\$15–20M$ in clinical costs and preventing patient exposure to ineffective therapy.

---

## ⚡ Methodological Snapshot
The authors employed a multi-pronged MIDD strategy integrating three complementary modeling approaches. First, a four-compartment population PK model with ditopic cooperative binding to hemoglobin described drug disposition in plasma and whole blood. Second, a linear PK/PD model linked hemoglobin coverage to $p_{20}$ reduction (oxygen affinity biomarker). Third, a semi-mechanistic RBC model incorporated erythropoietin feedback, RBC senescence, and hemolysis dynamics, with drug effect modeled as Hb coverage-dependent increases in erythrocyte lifespan. Virtual population simulations calibrated to Multicenter Study of Hydroxyurea (MSH) data projected clinical outcomes in SCD patients. All models were developed prospectively before FIH data readout, with criteria for advancement established a priori through cross-functional alignment.

---

## 🏗️ Structural Model Breakdown
The structural PK model comprised four compartments: a dosing depot, central plasma, RBC (with target-mediated ditopic cooperative binding to hemoglobin), and peripheral tissue. Drug transfer between compartments followed first-order kinetics except for the saturable, cooperative binding within erythrocytes. The PK/PD component used a simple linear relationship between percent hemoglobin coverage and $p_{20}$ reduction. The semi-mechanistic RBC model described erythrocyte dynamics through differential equations representing bone marrow production (erythropoietin-stimulated), senescence-mediated clearance, and hemolysis. Drug effect entered as a sigmoidal $E_{max}$ function increasing RBC lifespan proportionally to hemoglobin coverage. The model explicitly acknowledged not incorporating vaso-occlusive crisis stochasticity.

---

### Detailed Methodological Analysis

#### Modeling Approach
Four-compartment PK model (dosing, plasma, RBC, peripheral) with ditopic cooperative Hb binding; linear PK/PD model linking Hb coverage to $p_{20}$; semi-mechanistic RBC model with EPO-mediated erythropoiesis; virtual population simulation using NONMEM and R

#### Data Sources
FIH study (NCT04323124): 56 healthy participants, single and multiple ascending doses (100–4000 mg); 2570 PK observations (plasma/blood), 243 $p_{20}$ measurements; historical MSH trial data for SCD population parameters; voxelotor literature for $p_{20}$ variability and target engagement benchmarks

#### Estimation Methods
Population PK: NONMEM with FOCE-I; PK/PD: linear mixed-effects analysis; RBC model: deterministic differential equations with stochastic virtual population generation; parameter uncertainty propagated via prediction intervals

#### Model Evaluation
Goodness-of-fit plots (observations vs predictions, CWRES); visual predictive checks not explicitly mentioned for final models; bootstrap not reported; model performance assessed via $R^2$ for PK/PD relationship ($47.28\%$)

#### Covariate Analysis
Weight and hematocrit evaluated as continuous covariates on PK parameters; no significant relationships identified in ETA plots; SCD population simulations incorporated hematocrit differences from MSH data; no formal covariate modeling reported for PK/PD or RBC models

---

### Scientific Context & Motivation
Sickle cell disease affects millions globally with limited therapeutic options. Hemoglobin modulators like voxelotor represent a mechanistically rational approach by stabilizing hemoglobin's R-state to inhibit polymerization. However, early development poses unique challenges: target engagement biomarkers in healthy participants may not translate to patients, optimal dosing is unclear, and clinical trials in this vulnerable population carry ethical considerations. This work addresses the critical gap in quantitative frameworks for go/no-go decisions in hemoglobinopathy drug development. It establishes a new paradigm requiring demonstration of sufficient pharmacological modulation before patient exposure, moving beyond traditional advancement based on safety and pharmacokinetics alone. The integration of semi-mechanistic RBC modeling with real-time PK/PD represents an advance over purely empirical approaches used in previous hemoglobin modulator studies.

---

### Statistical Rigor Assessment
The study demonstrated appropriate statistical rigor for a fit-for-purpose regulatory-grade analysis. Sample size (56 participnts) was justified based on voxelotor $p_{20}$ variability data. Mixed-effect models properly accounted for repeated measures in $p_{20}$ analysis. Prediction intervals (80% and 90%) appropriately quantified uncertainty in projections. However, limited details on model evaluation (no bootstrap, limited VPC reporting) and absence of formal covariate analysis beyond graphical inspection represent minor weaknesses. The use of historical MSH data for patient population calibration is methodologically sound but introduces uncertainty from inter-study variability. Sensitivity analyses to key assumptions (e.g., RBC lifespan–Hb coverage relationship) were not explicitly reported but acknowledged in disussion of uncertainty incorporation.

---

## 📊 Key Findings
FIH data revealed insufficient target engagement: at 4000 mg QD, $p_{20}$ reduction was $1.95$ mmHg (80% CI: $1.45$, $2.45$) at trough, far below the $10$ mmHg criterion. Population PK modeling projected that even $2250$ mg BID would be required to achieve $25\%$ Hb coverage trough in SCD patients, exceeding the feasible $2500$ mg/day limit. The PK/PD model established a linear relationship (slope $0.137$, $R^2=47.28\%$) between Hb coverage and $p_{20}$ reduction. Semi-mechanistic RBC modeling projected only $0.79$ $g/dL$ hemoglobin increase at maximum feasible dosing ($1250$ mg BID), substantially less than the $2$ $g/dL$ clinically meaningful threshold. Simulations indicated $42\%$ Hb coverage would be necessary for $2$ $g/dL$ improvement, unachievable within safety and practical dosing constraints.

---

## 💡 Clinical & Regulatory Implications
The quantitative evidence supported terminating PF-07059013 development before Phase 1b in SCD patients, preventing ~100 patients from exposure to ineffective therapy and conserving ~$\$15–20M$ in development resources. This case establishes a framework for future hemoglobin modulator programs: quantitative criteria for target engagement must be met in healthy subjects before patient studies. The $25\%$ Hb coverage and $10$ mmHg $p_{20}$ reduction thresholds provide benchmarks for next-generation compounds. For regulatory strategy, this demonstrates how integrated MIDD can support portfolio decisions without requiring patient data, potentially reducing development timelines. The semi-mechanistic RBC model offers a template for projecting efficacy in hemoglobinopathies where direct clinical endpoints require long-duration studies.

---

### Strengths & Limitations

#### Strengths
- Prospective establishment of quantifiable, a priori go/no-go criteria with cross-functional alignment
- Integration of multiple complementary modeling approaches (PK, PK/PD, semi-mechanistic RBC)
- Use of historical clinical trial data (MSH) for patient population calibration improves credibility
- Transparent acknowledgment of model limitations (no VOC stochasticity, simplified RBC dynamics)
- Demonstration of real-world impact: prevented costly failed study in patient population

#### Limitations (Acknowledged by Authors)
- Stochastic vaso-occlusive crisis effects not incorporated into RBC model
- BID dosing not studied in FIH; projections relied on PK/PD extrapolation
- Hb improvement projections did not account for VOC-related hemoglobin loss
- Limited sample size for highest FIH dosage cohort (4000 mg QD)

#### Limitations (Expert Review)
- No formal bootstrap or VPCs reported for final PK/PD parameter uncertainty
- Covariate analysis limited to graphical inspection without statistical testing
- RBC model calibration relied on historical data with potential inter-study variability
- PK/PD $R^2$ of $47.28\%$ suggests substantial unexplained variability in $p_{20}$ response

#### Generalizability
The modeling framework is highly generalizable to other hemoglobin modulators and target-mediated drug disposition scenarios. The quantitative criteria ($25\%$ Hb coverage, $10$ mmHg $p_{20}$ reduction) provide benchmarks for next-generation compounds. The semi-mechanistic RBC modeling approach can be adapted for other hemolytic conditions. However, specific parameter values and thresholds may require compound-specific recalibration.

---

---

### Figures & Tables

- **Figure 1**: MIDD strateegy overview with predefined quantitative criteria and decision gates
  - *Significance*: Visualizes the go/no-go framework that enabled evidence-based termination; demonstrates how quantitative criteria were integrated into development planning
- **Figure 2**: PK/PD model schematics showing four-compartment PK model and semi-mechanistic RBC model structure
  - *Significance*: Illustrates the integration of target-mediated disposition with physiological RBC dynamics; critical for understanding how Hb coverage translates to clinical outcomes
- **Figure 3**: Hb coverage simulations across dosage regimens and $p_{20}$ projection plot
  - *Significance*: Demonstrates the quantitative gap between achievable exposure and target criteria; Panel C shows the PK/PD relationship used for BID projections
- **Figure 4**: Virtual population simulations showing RBC lifetime-Hb coverage relation and projected Hb changes
  - *Significance*: Provides mechanistic rationale for insufficient efficacy; Panel C quantifies the $42\%$ coverage needed for $2$ $g/dL$ improvement
- **Table S1**: Participant characteristics from FIH study
  - *Significance*: Documents the healthy cohort demographics used for PK/PD modeling
- **Table S3**: Supplementary table with virtual population parameterization details
  - *Significance*: Provides transparency on how MSH data was used to calibrate SCD patient simulations

---

### Supplementary Materials
Supplementary materials include detailed participant demographics (Table S1), goodness-of-fit plots for PK model (Figures S2–S3), concentration-time profiles showing RBC partitioning (Figure S1), and parameterization details for virtual population simulations (Table S3). These materials provide essential transparency for model reproducibility and validation.

---

### Future Directions
Future work should incorporate stochastic VOC modeling to improve hemoglobin projection accuracy. Development of more sensitive biomarkers beyond $p_{20}$ could enhance early target engagement assessment. Application of this multi-model strategy to next-generation hemoglobin modulators with improved potency. Exploration of combination modeling approaches (e.g., with hydroxyurea) to identify synergistic opportunities. Extension of similar frameworks to other hemoglobinopathies like beta-thalassemia. Development of standardized MIDD templates for hemoglobin modulator programs across the industry.

---

### Expert Commentary
As a practitioner with >20 years in MIDD, the most impressive aspect is the prospective establishment of quantitative criteria with organizational buy-in before data readout. This represents maturity far ahead of many programs that retrofit models to support decisions already made. The integration of semi-mechanistic RBC modeling with clinical PK/PD is particularly elegant—moving beyond simple exposure-response to mechanistic understanding of how target engagement translates to clinical benefit. However, I would have liked to see more formal uncertainty quantification (bootstrap, SIR) given the high-stakes decision. The $47\%$ $R^2$ in the PK/PD model suggests substantial unexplained variability that could impact projections. Teaching point: This case exemplifies the 'fail fast' philosophy that MIDD enables—terminating a program based on robust quantitative evidence is a success, not a failure. The cross-functional collaboration described is the true differentiator; models alone don't drive decisions, but models plus alignment do.

---

### Bottom Line
This case study exemplifies MIDD at its best: pre-specified quantitative criteria, integrated multi-model strategy, and cross-functional alignment enabling a high-confidence go/no-go decisions. Practicing pharmacometricians should adopt this template for early development programs—establish numerical thresholds for advancement before data readout, integrate mechanistic understanding with clinical observations, and ensure organizational buy-in for model-informed termination decisions. The key takeaway for industry is that terminating a program based on robust quantitative evidence is a strategic success that conserves valuable resources and protects trial participants from ineffective therapies. This paper should become required reading for MIDD training programs and development team onboarding.

---

---

## 📊 Figures

![FIGURE 1: An overview of the MIDD strategy, including the criteria to proceed to next phase. Planned analysis shaded blue represents assessment for criterion 1; planned an]({{ site.baseurl }}/assets/digests/2026-03-29-utilization-of-model-informed-drug-development-in-early-clinical-development/figures/fig_01.jpg)

![FIGURE 2: PKPD Model Schematics. (A) Schematics of Pharmacokinetics model (B) Schematics of semi-mechanistic RBC model incorporating feedback between PK and target changes]({{ site.baseurl }}/assets/digests/2026-03-29-utilization-of-model-informed-drug-development-in-early-clinical-development/figures/fig_02.jpg)

![FIGURE 3: Hb simulations and p20 projections. Model projected Hb coverage of healthy population (A) and SCD population (B) for doses ranging from 1250 mg BID to 2500 mg BI]({{ site.baseurl }}/assets/digests/2026-03-29-utilization-of-model-informed-drug-development-in-early-clinical-development/figures/fig_03.jpg)

![FIGURE 4: Virtual population simulations for projecting Hb changes in SCD patients. (A) Relationship of RBC lifetime to Hb coverage. For each virtual patient, the baseline]({{ site.baseurl }}/assets/digests/2026-03-29-utilization-of-model-informed-drug-development-in-early-clinical-development/figures/fig_04.jpg)