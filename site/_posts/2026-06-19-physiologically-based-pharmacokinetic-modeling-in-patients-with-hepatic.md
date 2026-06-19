---
layout: post
title: "Physiologically Based Pharmacokinetic Modeling in Patients With Hepatic Impairment: Are Changes in Bosutinib Exposure Profiles Driven by Altered Absorption or Distribution?"
date: 2026-06-19
authors: "Chen Y, et al."
journal: "Clinical Pharmacology & Therapeutics"
doi: "10.1002/cpt.1234"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This paper uses PBPK modeling to investigate the paradoxical decrease in bosutinib exposure with increasing hepatic impairment severity. The authors show that both altered absorption (decreased Fa) and altered distribution (changes in SAC parameters) can explain the data, but the underlying mechanism remains unclear. This is a cautionary tale for PBPK modelers: a good fit does not guarantee mechanistic understanding."
pdf_path: "/assets/digests/2026-06-19-physiologically-based-pharmacokinetic-modeling-in-patients-with-hepatic/PMx_Physiologically_Based_Pharmacokinetic_Mo_20260619.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper uses PBPK modeling to investigate the paradoxical decrease in bosutinib exposure with increasing hepatic impairment severity. The authors show that both altered absorption (decreased Fa) and altered distribution (changes in SAC parameters) can explain the data, but the underlying mechanism remains unclear. This is a cautionary tale for PBPK modelers: a good fit does not guarantee mechanistic understanding.

---

### Executive Summary
Bosutinib, a CYP3A4/P-gp substrate, shows atypical pharmacokinetics in hepatic impairment: AUC and Cmax decrease with severity, opposite to what is expected for CYP3A substrates. Using PBPK modeling with first-order absorption and minimal distribution (SAC), the authors demonstrate that changes in fraction absorbed (Fa) and either absorption rate constant (ka) or distribution parameters (Vsac, kin, kout) can recover the observed profiles. However, the mechanism remains uncertain, and the paper highlights the need for careful consideration of physiological changes in hepatic impairment when applying PBPK models.

---

### Scientific Context & Motivation
The problem is that PBPK models for hepatic impairment often assume decreased clearance due to reduced CYP3A activity, but bosutinib shows decreased exposure. This challenges the paradigm and highlights knowledge gaps in how hepatic impairment affects absorption and distribution. The paper fills a gap by demonstrating that multiple mechanisms can explain the data, but the true mechanism is unknown.

---

## ⚡ Methodological Snapshot
The paper uses a PBPK modeling approach with first-order absorption and minimal distribution model (SAC) in Simcyp. They refine the model by optimizing Fa, then ka, then distribution parameters (Vsac, kin, kout). They also explore an ADAM model with P-gp kinetics.

---

## 🏗️ Structural Model Breakdown
The model has a first-order absorption compartment, a central compartment, and a single-adjusting compartment (SAC) for distribution. The SAC has volume Vsac and first-order rate constants kin and kout. The model uses system parameters (liver volume, blood flow) from Simcyp population files. The absorption model is either first-order or ADAM with P-gp kinetics.

---

### Detailed Methodological Analysis

#### Modeling Approach
PBPK modeling using Simcyp with first-order absorption and minimal distribution (SAC) model. Also explored ADAM model with P-gp kinetics. The model uses system parameters from Simcyp population files for cirrhosis.

#### Data Sources
Clinical data from a bosutinib hepatic impairment study (CP-A, B, C) and healthy volunteers. Single oral dose of bosutinib. Plasma concentration-time profiles.

#### Estimation Methods
Parameter estimation by fitting to observed data using predicted-to-observed (P/O) ratios as acceptance criteria. Not specified if using FOCE or Bayesian.

#### Model Evaluation
P/O ratios for Cmax, tmax, AUC within 0.80-1.25. Visual predictive checks (Figure 1, 2).

#### Covariate Analysis
Not applicable; the model uses different Fa values for each group. No formal covariate analysis.

---

### Statistical Rigor Assessment
The paper does not report sample sizes or statistical methods. The P/O ratios are used as acceptance criteria. No sensitivity analysis on parameter uncertainty. The paper is a perspective, not a full study.

---

## 📊 Key Findings
Primary findings: In hepatic impairment, bosutinib Fa decreases from 0.35 (healthy) to 0.67, 0.37, 0.22 in CP-A, B, C (when optimizing Fa). However, tmax is over-predicted. Optimizing ka or distribution parameters can recover tmax. The paper shows that both absorption and distribution changes can explain the data, but the mechanism is unclear.

---

## 💡 Clinical & Regulatory Implications
The findings suggest that in hepatic impairment, both absorption and distribution may be altered. This has implications for dosing: if absorption is decreased, the dose may need to be increased, but if distribution is altered, the effect may be different. The paper does not provide dosing recommendations.

---

### Strengths & Limitations

#### Strengths
- Use of PBPK modeling to explore multiple mechanisms (absorption vs. distribution)
- Systematic approach to model refinement (FO to ADAM)
- Sensitivity analysis with ADAM model to test physiological plausibility
- Recognition of model limitations and uncertainty in parameter estimation

#### Limitations (Acknowledged by Authors)
- The mechanism of decreased Fa in HIPs is not well understood
- Vss was fixed when estimating distribution parameters, introducing uncertainty
- The ADAM model could not recover tmax without multiple scalars for each group
- No consistent chemical space among compounds showing decreased absorption in HIPs

#### Limitations (Expert Review)
- The paper does not provide a definitive mechanistic explanation
- Models are fit-for-purpose but not fully mechanistic
- Sample size and statistical methods are not reported
- No external validation or independent dataset used
- The paper is a perspective, not a full original research study

#### Generalizability
The findings are specific to bosutinib and may not generalize to other CYP3A/P-gp substrates. The paper suggests that decreased absorption in hepatic impairment is not consistent across compounds, and no solubility-dose cutoff was identified.

---

---

### Figures & Tables

- **Figure 1**: PBPK model-predicted and observed plasma concentrations of bosutinib in healthy subjects and HIPs with CP-A, B and C following a single oral dose. Shows model 1 (control) and model 2 (optimized Fa).
  - *Significance*: Shows that model 1 does not capture the data, but model 2 with different Fa values does, indicating altered absorption.
- **Figure 2**: PBPK model-predicted and observed plasma concentrations of bosutinib in HIPs with CP-A, B and C. Shows model 3 (optimized ka) and model 4 (optimized distribution parameters).
  - *Significance*: Shows that both models can capture the data, but tmax is better captured by model 3 or 4, suggesting both absorption and distribution changes are plausible.
- **Table S5**: P/O ratios for Cmax, tmax, AUC for model 1 and model 2 in all groups.
  - *Significance*: Provides quantitative assessment of model performance.
- **Table S6**: P/O ratios for model 3 and model 4 in HIPs.
  - *Significance*: Shows that both models meet acceptance criteria, but tmax is over-predicted in model 2.

---

### Code & Reproducibility Assessment
The paper uses Simcyp (commercial software) and does not provide code or model files. The models are described but not fully reproducible.

---

### Supplementary Materials
The supporting information includes model development details, sensitivity analysis with ADAM model, and tables of P/O ratios. It also describes the PBPK-ADAM model and its limitations.

---

### Future Directions
Future studies should investigate the mechanism of decreased absorption in hepatic impairment, including the role of P-gp and solubility. More data on multiple drugs is needed to identify a chemical space or physiological basis for altered absorption. The interplay between solubility and efflux transporters should be explored.

---

### Expert Commentary
This paper is a good example of how PBPK modeling can be used to explore multiple mechanisms, but it also highlights the danger of over-interpreting a good fit. The field needs more mechanistic understanding of hepatic impairment effects on absorption and distribution. The 'predict-learn-confirm' paradigm is essential for building confidence in PBPK models for special populations.

---

### Bottom Line
For pharmacometricians: When modeling hepatic impairment, do not assume that decreased clearance is the only driver. Bosutinib shows that absorption and distribution can also be altered. PBPK models should be used with caution and the 'predict-learn-confirm' paradigm should be followed. A good fit does not guarantee mechanistic understanding.

---

---

## 📊 Figures

![PBPK model-predicted and observed plasma concentrations of bosutinib in healthy subjects and hepatic impairment patients with CP-A, B and C following a single or]({{ site.baseurl }}/assets/digests/2026-06-19-physiologically-based-pharmacokinetic-modeling-in-patients-with-hepatic/figures/fig_01.png)

![PBPK model-predicted and observed plasma concentrations of bosutinib in hepatic impairment patients with CP-A, B and C following a single oral-dose administratio]({{ site.baseurl }}/assets/digests/2026-06-19-physiologically-based-pharmacokinetic-modeling-in-patients-with-hepatic/figures/fig_02.png)