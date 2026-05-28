---
layout: post
title: "Quantifying clinical and genetic factors influencing rate and severity of autosomal dominant tubulointerstitial kidney disease progression"
date: 2026-05-26
authors: "Ramesh SS, Rogge M, Kidd KO, Wilson A, Yoon DY, Rogers J, Blake K, Bleyer AJ, Kim S"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2025, 52, 41"
doi: "10.1007/s10928-025-09989-0"
paper_type: popk
tags: [popk, covariate-analysis, regulatory, clinical-trial-design]
excerpt_text: "This is the first comprehensive quantitative disease progression model for ADTKD, developed using natural history data from 604 patients with UMOD or MUC1 mutations. Nonlinear mixed-effects models with sigmoid Imax functions characterized eGFR decline, while Weibull time-to-event models predicted age of kidney failure. The work provides a model-based clinical trial simulation platform to inform inclusion/exclusion criteria and trial design for this rare, slowly progressing disease."
pdf_path: "/assets/digests/2026-05-26-quantifying-clinical-and-genetic-factors-influencing-rate-and-severity-of/PMx_Quantifying_clinical_and_genetic_factors_20260526.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This is the first comprehensive quantitative disease progression model for ADTKD, developed using natural history data from 604 patients with UMOD or MUC1 mutations. Nonlinear mixed-effects models with sigmoid Imax functions characterized eGFR decline, while Weibull time-to-event models predicted age of kidney failure. The work provides a model-based clinical trial simulation platform to inform inclusion/exclusion criteria and trial design for this rare, slowly progressing disease.

---

### Executive Summary
Ramesh et al. applied nonlinear mixed-effects and parametric time-to-event modeling to longitudinal eGFR data and time-to-kidney-failure endpoints in 604 patients with autosomal dominant tubulointerstitial kidney disease (ADTKD), the largest such modeling effort to date. Separate models were developed for UMOD (n=371) and MUC1 (n=233) subtypes. A sigmoid Imax function with distinct pre- and post-inflection Hill coefficients ($\gamma_1$ and $\gamma_2$) best captured the biphasic nature of eGFR decline, revealing that MUC1 patients progress significantly faster after their inflection point ($\gamma_2 = 10.2$) than UMOD patients ($\gamma_2 = 6.3$). Covariates such as eGFR at first clinical visit and age at first clinical visit accounted for substantial inter-individual variability. Weibull time-to-event models indicated that UMOD males reached the characteristic $Te$ time approximately 4 years earlier than females, while older age at first visit was protective. The models form the basis for a future clinical trial simulation platform, which is critically needed given the absence of approved therapies and the inherent challenges of trial design in this slowly progressive rare disease.

---

### Scientific Context & Motivation
ADTKD is a rare genetic kidney disease that inevitably progresses to kidney failure, yet its slow and highly variable progression has hindered clinical trial design. Prior studies provided only descriptive statistics on age at kidney failure and did not formally model the longitudinal trajectory of eGFR decline or quantify covariate effects. This work fills a critical gap by creating a quantitative framework that can simulate disease progression under various patient characteristics and trial scenarios. By establishing a formal disease progression model, the authors provide a tool comparable to those used in more common diseases like ADPKD, enabling data-driven power calculations and cohort enrichment strategies.

---

## ⚡ Methodological Snapshot
The authors employed a standard but rigorous MIDD workflow. A nonlinear mixed-effects approach (in Monolix with SAEM) was used to model eGFR decline with age using a sigmoid Imax function, allowing the Hill coefficient to differ pre- and post-inflection point. A separate parametric time-to-event analysis (Weibull model) predicted age at kidney failure. Covariate selection used stepwise covariate modeling (SCM). An 80:20 train:test split was used for model development and validation as assessed by VPCs.

---

## 🏗️ Structural Model Breakdown
The core of the model is a deterministic, nonlinear mixed-effects model based on a sigmoid Imax function. It has no pharmacokinetic input nor compartments. The key structural parameters are $DP0$ (the fitted baseline eGFR), $DPT_{50}$ (the age-based inflection point), and $DP_{\max}$ (the maximum possible change, fixed at 0.99). The novel structural feature is the use of a segmented Hill coefficient: $\gamma_1$ governs the shallow initial decline, while a separate $\gamma_2$ governs the steep decline after the age exceeds $DPT_{50}$. Between-subject variability was modeled on $DP0$, $DPT_{50}$, $\gamma_1$, and $\gamma_2$ using log-normal distributions. The residual error was modeled as a combined additive and proportional error for UMOD and proportional error alone for MUC1.

---

### Detailed Methodological Analysis

#### Modeling Approach
Longitudinal eGFR decline was modeled using a sigmoid Imax function with $DPT_{50}$ (age at half-maximal decline), $DP_{\max}$ (maximal decline, fixed to 0.99), and $DP0$ (extrapolated eGFR at age 0). The Hill coefficient, $\gamma$, was segmented: $\gamma_1$ for ages < $DPT_{50}$ and $\gamma_2$ for ages > $DPT_{50}$. Time to kidney failure was modeled using a Weibull parametric hazard function.

#### Data Sources
Natural history data from the Wake Forest University School of Medicine registry. The final dataset included 604 adult patients ($\geq 18$ years): 371 UMOD, 233 MUC1. There were 6,447 total longitudinal eGFR records. Kidney failure was defined as eGFR $\leq 10$ mL/min/1.73m² or initiation of dialysis. eGFR was calculated using the CKD-EPIScr equation.

#### Estimation Methods
All models were developed using the Stochastic Approximation Expectation-Maximization (SAEM) algorithm implemented in Monolix 2024R1. The likelihood-based M4 method was used for censored eGFR observations below 10 mL/min/1.73m².

#### Model Evaluation
Model selection was guided by AIC, BIC, objective function value, precision of parameter estimates, physiological plausibility, and diagnostic plots (goodness-of-fit, individual fits). Internal validation was performed using a hold-out test dataset (20% of data) and assessed through prediction-corrected VPCs.

#### Covariate Analysis
A manual stepwise covariate modeling (SCM) approach was used with forward addition ($p\text{-value} < 0.1$) and backward elimination ($p\text{-value} < 0.05$). Covariates tested included sex, eGFR at first clinical visit ($eGFR_{FCV}$), age at first clinical visit (AFCV), genetic SNPs (rs4293393 for UMOD, rs4072037 for MUC1), and re-grouped UMOD sub-mutation types. Continuous covariates were incorporated using a power model centered by the weighted mean; categorical covariates used an exponential model.

---

### Statistical Rigor Assessment
The statistical approach is appropriate and thorough for a disease progression analysis of this nature. The use of SAEM handles the substantial volume of data and the presence of censored eGFR values well. The SCM procedure is a standard, recognized method for covariate selection. The authors appropriately report parameter uncertainty (%RSE) and bootstrap confidence intervals. A notable strength is the 80:20 train:test split for external-like validation, though the method of balancing covariates in the split is mentioned but not fully elaborated. The decision to retain covariates with confidence intervals crossing zero based on AIC is a pragmatic choice, though it introduces some model uncertainty that is quantitatively reported and discussed.

---

## 📊 Key Findings
1. eGFR decline in both ADTKD-UMOD and ADTKD-MUC1 follows a sigmoid Imax pattern with distinct pre- and post-inflection Hill coefficients. The post-inflection decline is significantly steeper for MUC1 ($\gamma_2 = 10.2$) than UMOD ($\gamma_2 = 6.3$). 2. Typical $DPT_{50}$ (age at half-maximal eGFR decline) was 39.8 years for UMOD and 38.4 years for MUC1. 3. Higher eGFR at first clinical visit and older age at first clinic visit were key covariates slowing disease progression in both subtypes. 4. In the UMOD time-to-event analysis, male sex was associated with a ~7% reduction in the $Te$ parameter, translating to kidney failure occurring ~4 years earlier, on average. 5. The Weibull time-to-event model estimated $Te$ (age at which ~36.8% remain KF-free) at 54 years for UMOD and 51 years for MUC1.

---

## 💡 Clinical & Regulatory Implications
These models directly address the primary barrier to ADTKD drug development: the inability to design adequately powered clinical trials. By simulating eGFR trajectories and time-to-KF event rates under various patient characteristics, the models can optimize inclusion/exclusion criteria, defining a population likely to progress within a feasible trial duration. For example, enriching for patients with MUC1 mutations or those with lower baseline eGFR and younger AFCV may yield faster event rates and greater power. Table 2 provides the quantitative basis for these enrichment strategies. The identification of sex as a covariate in UMOD progression may also have implications for stratified trial designs. Ultimately, this framework could support discussions with regulators on acceptable surrogate endpoints and trial designs for this orphan indication.

---

### Strengths & Limitations

#### Strengths
- First comprehensive disease progression model for ADTKD, addressing a major unmet need in drug development for this rare disease.
- Utilizes a large, well-characterized natural history dataset (604 patients, 6,447 visits) from a leading registry.
- Employs a dual modeling approach (longitudinal nonlinear mixed-effects and parametric time-to-event) to fully characterize disease trajectory.
- Includes robust covariate analysis to explain inter-individual variability using clinically accessible baseline characteristics.
- Model was validated on a hold-out test dataset, demonstrating predictive performance.
- Provides clear clinical interpretability of model parameters (e.g., Te, Hill coefficients) and their covariate effects.

#### Limitations (Acknowledged by Authors)
- Lack of healthy control data prevented quantification of natural age-related eGFR decline separate from disease-driven decline.
- Models cannot be extrapolated to patients younger than 18 years due to data constraints.
- Limited racial/ethnic diversity in the dataset (92% American White), limiting generalizability.
- Small sample size for certain rare UMOD sub-mutation types precluded their analysis as covariates.
- Some VPCs showed underprediction of the 10th percentile, particularly for MUC1 longitudinal model.
- A few MUC1 model parameters (e.g., $\beta_{eGFR_{FCV}_{DPT50}}$) had confidence intervals spanning zero but were retained based on AIC criteria.

#### Limitations (Expert Review)
- The use of CKD-EPI formula to estimate GFR rather than measured GFR could introduce bias, particularly in patient populations with extreme body habitus or muscle mass not represented in the cohort.
- The model structure assumes a deterministic sigmoid trajectory; it does not account for potential acute-on-chronic events or temporary changes in eGFR trajectory due to intercurrent illnesses or gout flares, which may be clinically relevant.
- The DPmax parameter was fixed at 0.99 due to high shrinkage, which, while justified, limits the model's ability to capture variability in the ultimate depth of eGFR decline before KF.
- The data split ratio (4:1 train:test) is somewhat unconventional compared to standard 70:30 or 80:20 cross-validation; performance metrics on a smaller, potentially less representative test set may be optimistic.

#### Generalizability
The models are generalizable to adult (≥18 years) ADTKD patients of primarily White race with UMOD or MUC1 mutations. Their applicability to pediatric populations, other ADTKD subtypes (REN, HNF1β), or non-White populations is uncertain and requires further validation. The model's reliance on CKD-EPI eGFR limits its direct application where measured GFR is the clinical standard. For clinical trial planning, the simulation platform based on these models is a significant step forward but must be used with careful consideration of demographic generalizability.

---

### Key Equations

**Sigmoid Imax longitudinal eGFR model**

{% raw %}
$$
\text{eGFR}_i = \text{DP0}_i \cdot \left(1 - \left(\frac{\text{DP}_{\text{max},i} \cdot \text{Age}_i^{\gamma_i}}{\text{DPT}_{50,i}^{\gamma_i} + \text{Age}_i^{\gamma_i}}\right)\right)
$$
{% endraw %}

This is the core structural model for the longitudinal decline of eGFR with age. DP0 is the extrapolated eGFR at age 0 (or ~18 years), DPmax is the maximum fractional decrease (fixed to 0.99), DPT50 is the age at half-maximal decline, and the Hill coefficient (γ) changes between γ₁ before DPT50 and γ₂ after DPT50.

**Weibull Hazard Function for time-to-kidney failure**

{% raw %}
$$
h(t) = \left(\frac{p}{\text{Te}}\right) \cdot \left(\frac{t}{\text{Te}}\right)^{p-1}
$$
{% endraw %}

The selected hazard function for the time-to-event analysis. Te is the scale parameter representing the age at which the survival probability is approximately 0.368, and p is the shape parameter. A p > 1 indicates increasing risk of kidney failure with age.

---

### Figures & Tables

- **Figure 1**: Flowchart of data formatting steps and summary statistics for the study cohort.
  - *Significance*: Provides transparency on the population selection and final analysis dataset, which includes 604 ADTKD patients.
- **Table 1**: Summary of demographic and clinical characteristics for the training and test datasets.
  - *Significance*: Demonstrates the comparability of the data split and informs the reader about the baseline characteristics of the UMOD and MUC1 populations.
- **Figure 2**: Visualization of covariate effects (eGFR at first clinic visit and age at first clinic visit) on DPT50 and γ₂ for UMOD and MUC1 longitudinal models.
  - *Significance*: Key figure showing the direction and magnitude of how baseline disease state alters the disease progression trajectory.
- **Figure 3**: Goodness-of-fit and visual predictive check (VPC) plots for the UMOD and MUC1 longitudinal eGFR models on the training dataset.
  - *Significance*: Critically validates the internal predictive performance of the eGFR trajectory models.
- **Figure 4**: VPCs for the UMOD time-to-kidney failure model, stratified by age at first clinical visit (AFCV) and sex.
  - *Significance*: Evaluates how well the identified covariates (sex, AFCV) explain the observed heterogeneity in survival curves.
- **Figure 5**: VPC for the MUC1 time-to-kidney failure model, stratified by AFCV.
  - *Significance*: Confirms that the AFCV covariate effect adequately predicts survival patterns in the MUC1 population.
- **Table 2**: Final parameter estimates, between-subject variability, and covariate effects for the longitudinal eGFR models (A) and time-to-event models (B).
  - *Significance*: The core quantitative output of the study, providing all model parameters needed for simulation.

---

### Code & Reproducibility Assessment
The model codes are provided in Supplementary S2; however, the underlying patient-level data are not publicly shared and are held within the Wake Forest Registry. This limits full independent reproducibility of the analysis without access to the same dataset.

---

### Supplementary Materials
Supplementary materials include: (S1) additional methodological details and validation VPCs for the test datasets; (S2) complete model code files (Model Codes 1, 2, 4, 5) for implementing the longitudinal and time-to-event models in Monolix; (S3) individual diagnostic plots. The supplementary figures confirm that model predictions on the held-out test set are reasonable.

---

### Future Directions
1. Integration of the developed models into a comprehensive clinical trial simulation (CTS) platform to systematically evaluate the impact of inclusion/exclusion criteria on trial power and duration. 2. Validation of the models in external, independent ADTKD cohorts comprising more diverse populations and pediatric patients to enhance generalizability. 3. Incorporation of emerging biomarkers (e.g., urinary uromodulin, serum mucin-1 fragments) as covariates or as alternative disease progression markers. 4. Expansion of the modeling framework to include other ADTKD genotypes (REN, HNF1β) as sufficiently powered datasets become available. 5. Development of a joint model linking the longitudinal eGFR trajectory directly to the time-to-event (kidney failure) endpoint for more efficient use of data.

---

### Expert Commentary
As a senior pharmacometrician, I find this paper a commendable example of applying well-established MIDD principles to an orphan disease indication where quantitative tools are desperately needed. The choice of a sigmoid Imax model with a segmented Hill coefficient is an elegant solution to capture the clinically observed biphasic decline, eschewing a more complex multiphasic or mechanistic model that the sparse sampling likely could not support. The clarity with which the authors define and interpret the Weibull Te parameter is a pedagogical highlight; it provides a clinically tangible anchor point for a parametric hazard. My main caution for those who would use this model for trial simulation is the uncertainty around the fixed DPmax and the correlation parameters in the MUC1 model. While the AIC supports their retention, their wide confidence intervals could propagate significant uncertainty into predicted trial outcomes. A formal sensitivity analysis varying these parameters within their confidence bounds should be a prerequisite step before finalizing any trial design. The separation of UMOD and MUC1 models is correct from a biological standpoint, but ultimately, a basket-trial design simulation might need a consolidated approach; the authors lay the groundwork for that next step.

---

### Bottom Line
This study delivers the first validated, covariate-informed disease progression models for ADTKD-UMOD and ADTKD-MUC1, providing a quantitative framework to predict eGFR decline and time to kidney failure. The models are ready to be embedded into a clinical trial simulation platform, offering a powerful tool to optimize inclusion criteria, sample size, and trial duration for future interventional studies in this therapeutically neglected rare disease. Practitioners should note the differential post-inflection decline rates between UMOD and MUC1 and the significant impact of baseline eGFR and age at first clinic visit on progression trajectories when designing clinical studies.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-05-26-quantifying-clinical-and-genetic-factors-influencing-rate-and-severity-of/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-05-26-quantifying-clinical-and-genetic-factors-influencing-rate-and-severity-of/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-05-26-quantifying-clinical-and-genetic-factors-influencing-rate-and-severity-of/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-05-26-quantifying-clinical-and-genetic-factors-influencing-rate-and-severity-of/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-05-26-quantifying-clinical-and-genetic-factors-influencing-rate-and-severity-of/figures/fig_05.png)