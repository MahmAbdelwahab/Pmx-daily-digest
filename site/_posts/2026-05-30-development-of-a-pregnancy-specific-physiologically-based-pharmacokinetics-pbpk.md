---
layout: post
title: "Development of a Pregnancy-Specific Physiologically Based Pharmacokinetics (PBPK) Model for Aspirin"
date: 2026-05-30
authors: "Collins-Smith A, Kammala AK, et al."
journal: "Clinical Pharmacology & Therapeutics"
doi: "N/A"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This paper presents the first pregnancy-specific PBPK model for aspirin, predicting trimester-specific pharmacokinetics of salicylic acid. It shows that maternal exposure decreases by 20–30% across gestation while fetal exposure increases by ~90%, suggesting potential need for dose adjustment. Clinicians and researchers interested in optimizing aspirin dosing for preeclampsia prevention should read this."
pdf_path: "/assets/digests/2026-05-30-development-of-a-pregnancy-specific-physiologically-based-pharmacokinetics-pbpk/PMx_Development_of_a_PregnancySpecific_Physi_20260530.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents the first pregnancy-specific PBPK model for aspirin, predicting trimester-specific pharmacokinetics of salicylic acid. It shows that maternal exposure decreases by 20–30% across gestation while fetal exposure increases by ~90%, suggesting potential need for dose adjustment. Clinicians and researchers interested in optimizing aspirin dosing for preeclampsia prevention should read this.

---

### Executive Summary
The authors developed a PBPK model in GastroPlus for aspirin and its active metabolite salicylic acid, incorporating pregnancy-related physiological changes (plasma volume expansion, increased cardiac output, GFR, hepatic enzyme modulation). The model was validated against clinical data from non-pregnant and pregnant women, with fold errors $\leq 1.04$. Key findings include a 20–30% reduction in maternal SA $AUC$ across trimesters and a 90% increase in fetal exposure from 10 to 40 weeks. The model supports individualized dosing strategies and highlights the utility of PBPK in pregnant populations.

---

### Scientific Context & Motivation
Aspirin is widely used in pregnancy for preeclampsia prevention, but its pharmacokinetics across all trimesters remain poorly characterized, leading to ongoing debate about optimal dosing. Existing clinical studies are limited to specific trimesters and do not fully account for the dynamic physiological changes of pregnancy (e.g., increased plasma volume, renal clearance, hepatic enzyme activity). This study addresses the gap by developing a mechanistic PBPK model that integrates trimester-specific physiology to predict maternal and fetal exposure, challenging the assumption that fixed-dose regimens are adequate throughout gestation.

---

## ⚡ Methodological Snapshot
A whole-body PBPK model was developed in GastroPlus v9.9 for aspirin and its active metabolite salicylic acid. Drug-dependent parameters (physicochemical, ADME) were obtained from ADMET Predictor and literature. Population-dependent physiological parameters were from the Population Estimates for Age-Related Physiology module. The non-pregnant model was first validated against clinical data from healthy adults, then adapted for pregnancy by incorporating trimester-specific changes in plasma volume, cardiac output, GFR, hepatic blood flow, enzyme activity (CYP2C9, CYP3A4, CYP2E1, UGTs, esterases), and placental/fetal compartments. Population simulations used 100 virtual subjects per group (non-pregnant, first, second, third trimester) receiving 81 mg (non-pregnant) or 100 mg (pregnant) non-enteric coated aspirin. Model validation was based on observed data falling within the 5th–95th percentile prediction interval and fold errors <1.5.

---

## 🏗️ Structural Model Breakdown
The PBPK model is a multi-compartment system representing maternal and fetal physiology. Maternal compartments include plasma, liver, kidney, adipose, muscle, heart, lung, brain, bone, skin, and other tissues, each with tissue-specific volumes and blood flow rates. The placenta is modeled as a separate compartment with gestational age-dependent blood flow and permeability. The fetus is represented as a single compartment with gestational age-dependent blood volume, plasma protein binding, and tissue partition coefficients. Amniotic fluid is a dynamic compartment that increases in volume across gestation. Drug transfer across the placenta is governed by passive diffusion, with fetal clearance assumed negligible. Key equations are not explicitly provided but are embedded in the GastroPlus software.

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole-body PBPK model implemented in GastroPlus v9.9 (Simulation Plus). The model includes compartments for maternal tissues (plasma, liver, kidney, adipose, muscle, etc.), placenta, fetus, and amniotic fluid. Absorption was modeled using the ACAT model. Metabolism includes hydrolysis by esterases, conjugation by UGTs, and oxidation by CYP2C9, CYP3A4, CYP2E1. Renal clearance was included. Fetal metabolism was assumed minimal.

#### Data Sources
Pharmacokinetic data from published clinical studies in non-pregnant adults (81 mg non-enteric coated aspirin) and pregnant women (100 mg non-enteric coated aspirin) across first and third trimesters. Concentration-time profiles were digitized using GetData Graph Digitizer. Physiological parameters for pregnancy were obtained from literature (Table 1).

#### Estimation Methods
Single-batch simulations were first conducted to compare predicted vs. observed values. When deviations occurred, parameters were optimized manually using published data. Once discrepancies were minimized (observed and predicted within 90% in single-batch), population simulations were initiated with 100 virtual subjects per group.

#### Model Evaluation
Validation was performed by comparing predicted plasma concentration-time profiles with clinically observed profiles. Models were considered valid if observed data fell within the 5th–95th percentile of simulated profiles and all PK parameters had fold errors <1.5.

#### Covariate Analysis
No formal covariate analysis was performed. However, the model allows adjustment of maternal BMI, gestational age, maternal race, and fetal sex to explore their influence on PK.

---

### Statistical Rigor Assessment
Model validation relied on visual predictive checks (observed data within 90% prediction interval) and fold error calculations (<1.5). No formal statistical tests (e.g., likelihood ratio test, bootstrap) were used for model comparison or parameter uncertainty. The sample size of 100 virtual subjects per group is reasonable for population simulations but may not capture extreme variability. Sensitivity analyses were not reported. The risk of overfitting is acknowledged by the authors. Overall, the statistical rigor is adequate for a PBPK model but could be strengthened with uncertainty quantification and external validation.

---

## 📊 Key Findings
The predicted systemic exposure ($AUC_{0-24h}$) of salicylic acid decreased by approximately 20% at 10 weeks, 25% at 20 weeks, 29% at 30 weeks, and 30% at 40 weeks gestation compared to non-pregnant women. Clearance increased from $4.79$ $L/h$ at 10 weeks to $5.91$ $L/h$ at 40 weeks. Fetal plasma exposure increased by ~90% from 10 to 40 weeks, with fetal/maternal $AUC$ ratios rising from $0.094$ to $0.21$. Amniotic fluid concentrations increased sharply after 30 weeks. The model was validated against observed data with fold errors $\leq 1.04$ for $C_{max}$, $AUC$, and clearance.

---

## 💡 Clinical & Regulatory Implications
The model predicts that maternal salicylic acid exposure decreases by 20–30% across pregnancy, suggesting that current fixed-dose regimens (e.g., 81 mg or 100 mg daily) may be suboptimal in later gestation. Higher doses may be needed to maintain therapeutic levels for preeclampsia prevention. Conversely, fetal exposure increases by ~90% from 10 to 40 weeks, which could raise concerns about neonatal bleeding risk, especially if delivery occurs soon after maternal dosing. The model provides a framework for individualized dosing based on gestational age, but clinical validation of exposure-response relationships is needed before implementation. Regulatory agencies may use such models to support dose recommendations in pregnancy.

---

### Strengths & Limitations

#### Strengths
- First pregnancy-specific PBPK model for aspirin and salicylic acid
- Validated against clinical data from both non-pregnant and pregnant populations
- Incorporates key physiological changes (plasma volume, cardiac output, GFR, hepatic enzymes, placental blood flow)
- Predicts fetal and amniotic fluid exposure, which is rarely measured clinically
- Allows exploration of demographic and physiological variability (BMI, gestational age, race, fetal sex)

#### Limitations (Acknowledged by Authors)
- Limited fetal concentration data available for validation
- Risk of overfitting during parameter optimization
- Lack of comprehensive exposure-response relationship for salicylic acid in pregnancy

#### Limitations (Expert Review)
- Only non-enteric coated aspirin formulation was modeled; enteric-coated formulations may have different absorption profiles
- Single-dose simulations only; chronic dosing effects not assessed
- No pharmacodynamic endpoints (e.g., thromboxane inhibition) were modeled
- Population simulations used only 100 virtual subjects per group, which may not capture full variability
- Fetal metabolism was assumed minimal, but this may not hold for all gestational ages
- Model was not externally validated against independent datasets

#### Generalizability
The model is based on literature data from specific populations (likely healthy volunteers and pregnant women with uncomplicated pregnancies). Generalizability to other racial/ethnic groups, obese women, or those with comorbidities (e.g., preeclampsia, diabetes) is uncertain. The model framework is adaptable but requires further validation in diverse populations.

---

---

### Figures & Tables

- **Figure 1**: Development and validation of the PBPK model: (A) workflow, (B) chemical structure of aspirin, (C) input parameters, (D) tissue-to-plasma partition coefficients, (E) validation in non-pregnant subjects, (F) validation in pregnant subjects.
  - *Significance*: Provides an overview of model development and demonstrates that observed concentration-time data fall within the 90% prediction interval, confirming model validity.
- **Figure 2**: Simulated pregnant pharmacokinetics: (A) PBPK model structure with volumes and flow rates, (B) predicted PK profiles across trimesters, (C) placental and fetal concentrations.
  - *Significance*: Illustrates the trimester-specific changes in maternal and fetal exposure, showing decreasing maternal concentrations and increasing fetal concentrations with gestational age.
- **Table 1**: Physiological changes during pregnancy affecting pharmacokinetics (cardiovascular, respiratory, gastrointestinal, renal, hematological).
  - *Significance*: Summarizes the key physiological parameters incorporated into the PBPK model, providing context for the predicted PK changes.
- **Table 2**: Validation of PK parameters for non-pregnant and pregnant subjects: observed vs. predicted $C_{max}$, $T_{max}$, $AUC$, clearance with fold errors.
  - *Significance*: Demonstrates that all fold errors are $\leq 1.04$, indicating excellent model performance and successful validation.
- **Table 3**: Trimester-specific PK parameters for salicylic acid at 10, 20, 30, and 40 weeks gestation: clearance, $V_{ss}$, half-life, $C_{max}$, $AUC$, $T_{max}$.
  - *Significance*: Quantifies the progressive changes in maternal PK across gestation, showing increased clearance and decreased exposure.
- **Table 4**: Fetal plasma PK parameters and fetal/maternal ratios at 10, 20, 30, and 40 weeks gestation.
  - *Significance*: Provides the first trimester-specific predictions of fetal exposure, showing increasing fetal concentrations and ratios with gestational age.

---

### Future Directions
Prospective clinical studies are needed to confirm predicted fetal and amniotic fluid concentrations. Establishment of exposure-response relationships for thromboxane inhibition and preeclampsia prevention across trimesters would enable dose optimization. The model could be extended to include enteric-coated formulations, chronic dosing, and pharmacodynamic endpoints. Incorporation of genetic polymorphisms in CYP2C9 and UGTs may further refine predictions. Finally, the PBPK framework could be applied to other drugs used in pregnancy.

---

### Expert Commentary
This paper exemplifies the utility of PBPK modeling in special populations where clinical data are scarce. The model is well-constructed, leveraging known physiological changes and drug properties. The 20–30% reduction in maternal SA exposure is consistent with increased clearance from enhanced renal function and hepatic metabolism. The predicted increase in fetal exposure is concerning and warrants careful consideration for neonatal outcomes, especially if invasive procedures are anticipated near delivery. The authors appropriately acknowledge the lack of fetal validation data, which is a critical gap. From a regulatory perspective, this model could support dose adjustments in pregnancy if linked to a well-defined exposure-response relationship. The study also aligns with FDA Modernization Act 2.0 by reducing reliance on animal studies. A key teaching point is the importance of integrating both maternal and fetal compartments in pregnancy PBPK models, as fetal exposure can be significant even when maternal levels decline.

---

### Bottom Line
This pregnancy-specific PBPK model provides a mechanistic framework to predict aspirin PK across gestation, demonstrating a 20–30% reduction in maternal salicylic acid exposure and a substantial increase in fetal exposure as pregnancy progresses. The findings support the need for trimester-specific dose adjustments and highlight the value of PBPK in informing dosing in pregnant populations. However, clinical confirmation of fetal exposure predictions and establishment of exposure-response thresholds for efficacy and safety are needed before implementation.

---

---

## 📊 Figures

![Development & Validation of a Physiologically Based Pharmacokinetic (PBPK) Model. (A) Workflow of developing a pregnancy PBPK in Gastroplus. (B) Chemical structu]({{ site.baseurl }}/assets/digests/2026-05-30-development-of-a-pregnancy-specific-physiologically-based-pharmacokinetics-pbpk/figures/fig_01.png)

![Simulated pregnant pharmacokinetics of aspirin. (A) Structure of PBPK model within Gastroplus (with associated volumes and flow rates). (B) Predicted pharmacokin]({{ site.baseurl }}/assets/digests/2026-05-30-development-of-a-pregnancy-specific-physiologically-based-pharmacokinetics-pbpk/figures/fig_02.png)