---
layout: post
title: "Exposure-Efficacy Meta-Model of Nintedanib in Adult Patients With Chronic Fibrosing Interstitial Lung Diseases"
date: 2026-07-26
authors: "Hartmann S, K J, S S, R J, J J"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70132"
paper_type: popk
tags: [popk, pediatrics, meta-analysis]
excerpt_text: "This meta-analysis of 2642 patients across five trials demonstrates that nintedanib's disease-modifying effect on FVC decline is comparable across IPF, PPF, and SSc-ILD, with an EC50 of 6–10 nM (Ctrough). The models for FVC %predicted and FVC Z-score are specifically designed to support pediatric extrapolation. Essential reading for pharmacometricians involved in drug development for fibrotic diseases or pediatric extrapolation."
pdf_path: "/assets/digests/2026-07-26-exposure-efficacy-meta-model-of-nintedanib-in-adult-patients-with-chronic/PMx_ExposureEfficacy_MetaModel_of_Nintedanib_20260726.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This meta-analysis of 2642 patients across five trials demonstrates that nintedanib's disease-modifying effect on FVC decline is comparable across IPF, PPF, and SSc-ILD, with an EC50 of 6–10 nM (Ctrough). The models for FVC %predicted and FVC Z-score are specifically designed to support pediatric extrapolation. Essential reading for pharmacometricians involved in drug development for fibrotic diseases or pediatric extrapolation.

---

### Executive Summary
This paper presents a comprehensive exposure-efficacy meta-model for nintedanib across three chronic fibrosing ILD indications (IPF, PPF, SSc-ILD) using data from 2642 patients across five Phase II/III trials. Three separate nonlinear mixed-effects models were developed for absolute FVC, FVC %predicted, and FVC Z-score, each employing a linear disease progression model with a disease-modifying Emax drug effect driven by nintedanib trough concentration (Ctrough,ss). The estimated EC50 values ranged from 6.21 nM (absolute FVC) to 10.4 nM (FVC Z-score), with the 150 mg BID dose providing exposures at or above the EC50 for most patients. Disease progression was slower in SSc-ILD compared to IPF/PPF, but the relative treatment effect was comparable across all indications. These models are intended to support pediatric extrapolation, with FVC %predicted and Z-score as the preferred endpoints.

---

### Scientific Context & Motivation
Nintedanib is approved for IPF, PPF, and SSc-ILD at a fixed dose of 150 mg BID, but the exposure-efficacy relationship had only been characterized separately for each indication. A unified meta-model was needed to confirm that the same dose is appropriate across all indications and to provide a quantitative basis for pediatric extrapolation, where absolute FVC is not suitable due to lung growth. This work fills the gap by simultaneously modeling three FVC endpoints across all indications, using a consistent methodology.

---

## ⚡ Methodological Snapshot
Three separate nonlinear mixed-effects models were developed for absolute FVC, FVC %predicted, and FVC Z-score. Each model used a linear disease progression structure with a disease-modifying Emax drug effect driven by nintedanib trough concentration (Ctrough,ss). A study effect for SENSCIS (SSc-ILD) was included on the slope to account for slower disease progression. Mechanistic covariates (age, sex, height) were included a priori on baseline for absolute FVC. Stepwise covariate modeling with adaptive scope reduction was used to identify additional covariates. IIV was included on baseline, slope, and residual variability, but not on Emax or EC50. Estimation used FOCE+I in NONMEM, with SIR for uncertainty.

---

## 🏗️ Structural Model Breakdown
All three models share the same structural form: a linear disease progression model for the FVC endpoint over time, with a disease-modifying drug effect. The drug effect is implemented as an Emax model on the slope parameter, driven by nintedanib Ctrough,ss. The slope (rate of change) is given by: Slope = Slope_placebo * (1 - (Emax * C) / (EC50 + C)), where C is Ctrough,ss. For absolute FVC, the baseline includes mechanistic covariates (age, height, sex) and additional covariates (ethnicity, SENSCIS). For FVC %predicted and Z-score, baseline covariates include age, ethnicity, and SENSCIS. IIV is included on baseline (exponential), slope (additive), and residual variability (combined additive+proportional for absolute FVC and %predicted; additive only for Z-score). A correlation between IIV on baseline and slope was included for the Z-score model.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling (NONMEM). Linear disease progression model with a disease-modifying Emax drug effect driven by predicted Ctrough,ss from a prior popPK model. Separate models for absolute FVC (mL), FVC %predicted, and FVC Z-score.

#### Data Sources
2642 patients from five trials: TOMORROW (Phase II IPF, n=342), INPULSIS-1 (Phase III IPF, n=513), INPULSIS-2 (Phase III IPF, n=548), SENSCIS (Phase III SSc-ILD, n=576), INBUILD (Phase III PPF, n=663). Doses: 50, 100, 150 mg BID nintedanib or placebo. FVC measurements over 52 weeks at baseline, weeks 2, 4, 6, 12, 24, 36, 52.

#### Estimation Methods
First-order conditional estimation with interaction (FOCE+I) in NONMEM 7.4.4. Sampling importance resampling (SIR) for uncertainty quantification.

#### Model Evaluation
Visual predictive checks (VPCs), precision of parameter estimates (RSE), objective function value (OFV), successful covariance step, goodness-of-fit plots.

#### Covariate Analysis
Stepwise covariate modeling (SCM) with adaptive scope reduction (ASR): forward inclusion p=0.01, backward elimination p=0.001. Covariates categorized as mechanistic (e.g., age, sex, height on baseline), structural (e.g., ethnicity, study), or exploratory. No covariates were tested on EC50. Mechanistic covariates were included a priori; structural and exploratory covariates were tested conditionally.

---

### Statistical Rigor Assessment
The analysis uses a large dataset (2642 patients, 20,000+ observations) with a wide exposure range (50–150 mg BID). The three-stage approach (placebo model, drug effect, covariate analysis) is methodologically sound. SCM with ASR reduces the risk of overfitting. SIR provides robust uncertainty quantification. The inability to estimate IIV on Emax/EC50 is acknowledged and discussed. The use of FOCE+I is appropriate for this type of data. The precision of EC50 estimates (RSE 33–82%) is moderate but acceptable for the purpose.

---

## 📊 Key Findings
The estimated EC50 values were 6.21 nM (absolute FVC), 8.25 nM (FVC %predicted), and 10.4 nM (FVC Z-score), with overlapping confidence intervals. The Emax (maximum drug effect) was an improvement in annual decline rate of 141 mL/year, 4.34%/year, and 0.324 Z-score/year, respectively. Disease progression was slower in SSc-ILD (SENSCIS) compared to IPF/PPF (e.g., absolute FVC slope: -147 vs. -214 mL/year). The relative treatment effect was comparable across indications, with no significant covariates on Emax or EC50. The 150 mg BID dose achieves exposures at or above EC50 for the majority of patients.

---

## 💡 Clinical & Regulatory Implications
The approved 150 mg BID dose achieves exposures at or above the EC50 in the majority of patients across all three indications. No dose adjustment is warranted based on indication, age, sex, ethnicity, or body weight. The FVC %predicted and Z-score models provide a validated framework for pediatric extrapolation, where absolute FVC is not suitable due to lung growth. The absence of significant covariates on Emax or EC50 supports consistent efficacy across diverse populations.

---

### Strengths & Limitations

#### Strengths
- Large, integrated dataset from five randomized controlled trials with a wide dose range.
- Consistent methodology across three FVC endpoints, enabling cross-endpoint comparisons.
- Use of SIR for robust uncertainty quantification.
- SCM with ASR reduces risk of overfitting.
- Models are specifically designed to support pediatric extrapolation, a key regulatory need.

#### Limitations (Acknowledged by Authors)
- IIV on Emax and EC50 could not be estimated; variability in drug effect may be partially captured by IIV on slope.
- EC50 estimates had moderate precision (RSE 33–82%).
- No covariates were tested on EC50.
- The analysis assumes that the relative treatment effect is comparable across indications.

#### Limitations (Expert Review)
- The use of predicted Ctrough,ss from a popPK model introduces uncertainty that is not propagated into the ER model.
- The linear disease progression model may not capture nonlinear trajectories (e.g., acceleration of decline in some patients).
- The analysis does not account for potential time-varying exposure (e.g., due to dose reductions or interruptions).
- The SENSCIS study effect on slope may confound disease-specific differences with study-specific differences (e.g., concomitant MMF use).

#### Generalizability
The models are based on a large, diverse patient population across three indications, supporting generalizability to the broader fibrosing ILD population. However, the pediatric population is not included, and extrapolation relies on the assumption of comparable relative treatment effect.

---

---

### Figures & Tables

- **Figure 1**: Typical population predictions of annual change from baseline in absolute FVC, FVC %predicted, and FVC Z-score versus Ctrough,ss, stratified by SENSCIS (SSc-ILD) vs. other trials (IPF/PPF).
  - *Significance*: Illustrates the exposure-response relationship and the slower disease progression in SSc-ILD, while showing comparable relative drug effect across indications.
- **Figure 2**: Individual predictions (including IIV) of annual change from baseline for the three FVC endpoints versus Ctrough,ss, with 90% prediction intervals.
  - *Significance*: Demonstrates the wide inter-individual variability in disease progression and drug response, highlighting that most patients achieve exposures at or above EC50 with 150 mg BID.
- **Table 1**: Overview of studies included in the meta-analysis: TOMORROW (Phase II IPF), INPULSIS-1/2 (Phase III IPF), SENSCIS (Phase III SSc-ILD), INBUILD (Phase III PPF).
  - *Significance*: Provides the data foundation for the meta-model, showing the range of doses (50–150 mg BID) and patient populations.
- **Table 2**: Baseline characteristics of the 2642 patients across all five studies.
  - *Significance*: Highlights differences in demographics (e.g., age, sex, ethnicity) and disease severity across indications, which are accounted for in the models.
- **Table 3**: Final parameter estimates for the absolute FVC exposure-response model.
  - *Significance*: Key results: EC50 = 6.21 nM, Emax = 141 mL/year improvement in decline rate, with covariate effects for sex, ethnicity, and SENSCIS.
- **Table 4**: Final parameter estimates for the FVC %predicted exposure-response model.
  - *Significance*: Key results: EC50 = 8.25 nM, Emax = 4.34%/year improvement, with ethnicity and age effects on baseline.
- **Table 5**: Final parameter estimates for the FVC Z-score exposure-response model.
  - *Significance*: Key results: EC50 = 10.4 nM, Emax = 0.324 Z-score/year improvement, with a correlation between IIV on baseline and slope.

---

### Future Directions
The models should be validated against pediatric data once available, to confirm the extrapolation assumptions. Future work could explore joint modeling of the three FVC endpoints to borrow strength across endpoints. The absence of IIV on Emax/EC50 suggests that alternative structural models (e.g., turnover models) or richer data (e.g., dose-adaptation, biomarker data) might reveal additional variability in drug response. The impact of concomitant medications (e.g., mycophenolate mofetil in SSc-ILD) on the exposure-response relationship warrants further investigation.

---

### Expert Commentary
This is a textbook example of how to leverage a rich clinical trial database to build a unified exposure-response model across related indications. The decision to model three different FVC endpoints separately (rather than jointly) is pragmatic, given the distinct regulatory and clinical roles of each endpoint. The inability to estimate IIV on Emax or EC50 is not surprising—such parameters often require richer data or more informative designs (e.g., dose-adaptation). The use of SIR for uncertainty quantification is appropriate and adds rigor. From a regulatory perspective, this work provides a strong quantitative foundation for pediatric extrapolation, aligning with FDA and EMA guidance on extrapolation of efficacy from adults to children. The key limitation is the assumption that the relative treatment effect is disease-independent—while supported by the data, this remains an assumption that should be revisited as pediatric data become available.

---

### Bottom Line
This meta-analysis confirms that nintedanib 150 mg BID provides a comparable disease-modifying effect across IPF, PPF, and SSc-ILD, with an EC50 of 6–10 nM (Ctrough). The models for FVC %predicted and FVC Z-score are now validated for use in pediatric extrapolation, supporting a unified dosing strategy across adult fibrosing ILD indications.

---

---

## 📊 Figures

![Typical population predictions of (A) absolute FVC annual change from baseline versus Ctrough,ssfor the final absolute FVC model, stratified by the SENSCIS popul]({{ site.baseurl }}/assets/digests/2026-07-26-exposure-efficacy-meta-model-of-nintedanib-in-adult-patients-with-chronic/figures/fig_01.jpg)

![Individual predictions of (A) absolute FVC annual change from baseline versus Ctrough,ssfor the final absolute FVC model, stratified by SENSCIS population, (B) F]({{ site.baseurl }}/assets/digests/2026-07-26-exposure-efficacy-meta-model-of-nintedanib-in-adult-patients-with-chronic/figures/fig_02.jpg)