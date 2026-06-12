---
layout: post
title: "Combining Aggregate Data and Individual Patient Data in Model-Based Meta-Analysis: An Illustrative Case Study of Tofacitinib in Rheumatoid Arthritis Patients"
date: 2026-05-30
authors: "N/A"
journal: "N/A (PubMed ID: 41556362)"
doi: "N/A"
paper_type: methodology
tags: [methodology, covariate-analysis, meta-analysis]
excerpt_text: "This paper evaluates the statistical benefits of incorporating individual patient data (IPD) into model-based meta-analysis (MBMA) compared to using aggregate data (AD) alone. Using a tofacitinib case study with simulated data, it shows that IPD provides no advantage in a base model without covariates, but stratified IPD or stratified AD significantly improves covariate parameter estimation when a predictive covariate (Asian race) is present."
pdf_path: "/assets/digests/2026-05-30-combining-aggregate-data-and-individual-patient-data-in-model-based-meta/PMx_Combining_Aggregate_Data_and_Individual__20260530.pdf"
retroactively_classified: true
---

**Content Source:** Full Text

### Quick Take
This paper evaluates the statistical benefits of incorporating individual patient data (IPD) into model-based meta-analysis (MBMA) compared to using aggregate data (AD) alone. Using a tofacitinib case study with simulated data, it shows that IPD provides no advantage in a base model without covariates, but stratified IPD or stratified AD significantly improves covariate parameter estimation when a predictive covariate (Asian race) is present.

---

### Executive Summary
The study systematically compares MBMA performance with and without IPD under two scenarios: no predictive covariates and a known predictive covariate (Asian race). A three-step approach in R (nlme) is used to combine IPD and AD. Results demonstrate that IPD alone does not enhance estimation of dose-response parameters (Emax, ED50) in the absence of covariates. However, when data are stratified by a predictive covariate, both IPD and stratified AD yield improved accuracy and precision for the covariate effect parameter (Erace), with diminishing returns as the proportion of stratified data increases. The work underscores the value of publishing stratified results to enable better covariate exploration in MBMA.

---

### Scientific Context & Motivation
Model-based meta-analysis (MBMA) is widely used to integrate aggregate data from multiple randomized controlled trials, offering greater statistical power and the ability to explore treatment-effect heterogeneity. However, access to individual patient data (IPD) is often restricted, limiting the ability to identify and quantify predictive covariates. This study addresses the knowledge gap regarding the quantitative benefit of IPD over AD in MBMA, particularly when covariates are present. It provides a practical framework for combining IPD and AD and evaluates the impact of data stratification on parameter estimation.

---

## ⚡ Methodological Snapshot
The paper presents a three-step approach to combine individual patient data (IPD) and aggregate data (AD) in a nonlinear mixed-effects model for MBMA. Step 1: Fit the model to IPD alone, fixing the residual variance to the estimated value. Step 2: Fit the model to AD alone, fixing the residual variance to the AD-specific estimate. Step 3: Combine both datasets in a single model with the residual variances fixed to the values from Steps 1 and 2, allowing the model to appropriately weight each data type. For covariate models, IPD are stratified by the covariate (Asian/non-Asian) and summarized into stratified AD, which is then used in the same framework. The approach is implemented in R using the nlme package.

---

## 🏗️ Structural Model Breakdown
Not extracted

---

### Detailed Methodological Analysis

#### Modeling Approach
Not extracted

#### Data Sources
Not extracted

#### Estimation Methods
Not extracted

#### Model Evaluation
Not extracted

#### Covariate Analysis
Not extracted

---

### Statistical Rigor Assessment
Not extracted

---

## 💡 Clinical & Regulatory Implications
Not extracted

---

## 📊 Key Findings
['In a base Emax model without covariates, incorporating IPD does not improve parameter estimates (Emax, ED50) or their precision compared to using AD alone.', 'When a predictive covariate (Asian race) is included, stratified IPD or stratified AD leads to substantially better estimation of the covariate effect (Erace), with improved accuracy and reduced relative standard error.', 'The benefit of stratification is most pronounced when the proportion of stratified data is low; as more studies provide stratified data, the marginal gain diminishes.', "The three-step approach for combining IPD and AD in nlme successfully recovers the correct variance components, confirming the method's validity.", 'Ecological bias is minimized by focusing on predictive covariates and using stratified AD rather than IPD for covariate models.']

---

### Strengths & Limitations

#### Strengths
- Clear, step-by-step methodology for combining IPD and AD in a common MBMA model using open-source R (nlme).
- Systematic simulation study with realistic parameter values derived from actual tofacitinib trials.
- Direct comparison of IPD vs AD under both no-covariate and covariate scenarios, with varying proportions of stratified data.
- Practical recommendations for when IPD or stratified AD adds value, directly relevant to drug development decision-making.

#### Limitations (Acknowledged by Authors)
- Use of simulated data rather than real IPD, which may not fully capture real-world complexity.
- Only one categorical covariate (Asian race) was explored; continuous or multiple covariates were not tested.
- The method has not been validated with real IPD data.

#### Limitations (Expert Review)
- The simulation assumes that IPD are normally distributed within each arm, which may not hold for non-normal endpoints.
- Only a single time point (week 12) was considered; longitudinal MBMA with random effects was not evaluated.
- The impact of between-study heterogeneity on the benefit of IPD was not systematically varied.
- The paper does not address potential confounding between study-level and patient-level covariate effects (ecological bias) in more complex settings.

#### Generalizability
The findings are likely generalizable to other therapeutic areas and endpoints where MBMA is applied, provided the covariate of interest is categorical and the dose-response relationship follows an Emax model. Extensions to continuous covariates or longitudinal models would require additional validation.

---

---

---

### Code & Reproducibility Assessment
The analysis was performed using R version 4.2.3 and the nlme package (version 3.1). No public code repository is mentioned, but the methods are described in sufficient detail to be reproducible.

---

### Future Directions
Validation with real IPD data is needed. Extensions to multiple continuous/categorical covariates, longitudinal MBMA with random effects, and assessment of different IPD/AD ratios and sample sizes would further clarify the conditions under which IPD provides benefit.

---

### Expert Commentary
This paper provides a pragmatic and statistically sound framework for combining IPD and AD in MBMA. The key insight—that IPD alone is not beneficial without covariates—is important for resource allocation in drug development. The demonstration that stratified AD can nearly match the performance of IPD for covariate estimation is particularly valuable, as it encourages journals to publish subgroup results. The three-step approach in nlme is straightforward and should be widely adopted.

---

### Bottom Line
For MBMA without covariates, IPD offers no advantage over AD. When predictive covariates are important, stratified data—whether from IPD or published stratified AD—substantially improves covariate effect estimation. Researchers should prioritize obtaining or publishing stratified results to enhance MBMA utility.

---

---

## 📊 Figures

![General workflow showing the 3-step approach for combining IPD and AD in a MBMA.]({{ site.baseurl }}/assets/digests/2026-05-30-combining-aggregate-data-and-individual-patient-data-in-model-based-meta/figures/fig_01.png)

![Observed DAS score placebo corrected (mean change from control group) stratified by study (A) or by proportion of Asian (B).]({{ site.baseurl }}/assets/digests/2026-05-30-combining-aggregate-data-and-individual-patient-data-in-model-based-meta/figures/fig_02.png)

![AD was derived from the IPD simulated data obtained from anEmax model fitted to the reported data of 11 studies. (A) AD derived data using a model without covari]({{ site.baseurl }}/assets/digests/2026-05-30-combining-aggregate-data-and-individual-patient-data-in-model-based-meta/figures/fig_03.png)

![Parameter estimation of the model combining IPD and AD in the case of no covariate effect. Whiskers represent the standard deviation across multiple simulations.]({{ site.baseurl }}/assets/digests/2026-05-30-combining-aggregate-data-and-individual-patient-data-in-model-based-meta/figures/fig_04.png)

![Parameter estimation of the model combining IPD and AD status using a stratification approach. Whiskers represent the SD across multiple simulations. No whiskers]({{ site.baseurl }}/assets/digests/2026-05-30-combining-aggregate-data-and-individual-patient-data-in-model-based-meta/figures/fig_05.png)