---
layout: post
title: "Latent Variable Indirect Response Modeling of Cendakimab Exposure–Response for Longitudinal Dysphagia Days Using a Combined Uniform-Binomial Likelihood Framework"
date: 2026-05-30
authors: "Ding S, Wojciechowski J, Zhang P, Hu C, Shen J, Amatya U, Moshier B, Khandelwal A"
journal: "N/A"
doi: "N/A"
paper_type: popk
tags: [popk, dose-response, covariate-analysis]
excerpt_text: "This paper presents a novel latent variable indirect response (IDR) model combined with a combined uniform-binomial (CUB) distribution to characterize the longitudinal exposure-response relationship for dysphagia days (DD) in eosinophilic esophagitis patients treated with cendakimab. Pharmacometricians working with bounded, discrete patient-reported outcomes (PROs) will find this approach valuable for handling time-varying dosing regimens and non-informative variability. The model supports dose regimen selection and covariate evaluation, demonstrating comparable efficacy between weekly and every-other-week maintenance dosing."
pdf_path: "/assets/digests/2026-05-30-latent-variable-indirect-response-modeling-of-cendakimab-exposureresponse-for/PMx_Latent_Variable_Indirect_Response_Modeli_20260530.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a novel latent variable indirect response (IDR) model combined with a combined uniform-binomial (CUB) distribution to characterize the longitudinal exposure-response relationship for dysphagia days (DD) in eosinophilic esophagitis patients treated with cendakimab. Pharmacometricians working with bounded, discrete patient-reported outcomes (PROs) will find this approach valuable for handling time-varying dosing regimens and non-informative variability. The model supports dose regimen selection and covariate evaluation, demonstrating comparable efficacy between weekly and every-other-week maintenance dosing.

---

### Executive Summary
The authors developed a longitudinal exposure-response model for cendakimab using a latent variable IDR framework with a CUB likelihood to analyze dysphagia days (0–14) from the Phase 3 EE-001 trial (N=427). The latent variable represents underlying disease status, modulated by placebo and drug effects (with first-order onset and $E_{max}$ exposure-response), and drives the binomial probability of DD, while the uniform component captures random diary entries. The final model included inter-individual variability on baseline DD, maximum placebo effect, and maximum drug effect, with covariates for steroid inadequate response/intolerance (Steroid IR/I) status and baseline DD. Key findings include an $EC_{50}$ of 76.5 μg/mL, a steep $E_{max}$ curve ($EC_{90}$ ~688 μg/mL), and a placebo half-life of ~28 weeks. Simulations showed that both 360 mg QW and QW-to-Q2W regimens reduced DD by ~1.65 and ~1.36 days vs placebo at Week 48, respectively, supporting the Q2W maintenance regimen. Covariate-stratified simulations indicated consistent responses across sex, age, and race, with no dose adjustments warranted. This work demonstrates the utility of latent variable IDR models with flexible likelihoods for analyzing bounded, discrete longitudinal PRO endpoints in drug development.

---

### Scientific Context & Motivation
Modeling patient-reported outcomes like dysphagia days poses challenges due to their bounded (0–14), discrete, and longitudinal nature, compounded by behavioral noise and irregular reporting. Traditional count models (e.g., Poisson, negative binomial) often fail to capture floor/ceiling effects and non-informative variability. Additionally, time-varying dosing regimens (e.g., QW-to-Q2W switch) require dynamic exposure metrics that static summaries cannot provide. This study addresses these gaps by integrating a latent variable indirect response model—typically used for continuous endpoints—with a combined uniform-binomial distribution, offering a mechanistically grounded framework that separates informative symptom reporting from random noise. The approach challenges the reliance on generalized linear models for PROs and provides a template for modeling similar endpoints in immunology, oncology, and neurology.

---

## ⚡ Methodological Snapshot
A latent variable indirect response (IDR) model was developed using NONMEM 7.5.1. The latent variable $\xi(t)$ represents underlying disease status and is composed of baseline (BASE), placebo effect (PBO), and drug effect (DRUG). Placebo and drug effects follow first-order onset kinetics, with drug effect driven by an $E_{max}$ model on individual-predicted cendakimab concentrations. The probability of dysphagia on any given day is the inverse-logit of $\xi(t)$. The observed DD count over a 14-day window follows a combined uniform-binomial (CUB) distribution: with probability $\pi$, the count is binomial (n, p); with probability $1-\pi$, it is uniform over {0,...,n}. Inter-individual variability was estimated on BASE, $P_{max}$, and $E_{max}$ using logit transformations. Covariates were evaluated via BIC reduction, with Steroid IR/I status retained on $E_{max}$ and baseline DD on $P_{max}$. Model evaluation used VPCs from 1000 simulations.

---

### Detailed Methodological Analysis

#### Modeling Approach
Latent variable IDR model with CUB likelihood. Placebo effect: $d\text{PBO}/dt = k_{\text{PBOon}} \cdot (P_{max} - \text{PBO})$. Drug effect: $d\text{DRUG}/dt = k_{\text{DRUGon}} \cdot (E_{max} \cdot C/(EC_{50}+C) - \text{DRUG})$. Latent variable: $\xi(t) = \text{BASE} + \text{PBO}(t) + \text{DRUG}(t)$. Binomial probability $p = \text{logit}^{-1}(\xi(t))$. CUB: $P(\text{DD}=k) = \pi \cdot \text{Binomial}(n, p) + (1-\pi) \cdot 1/(n+1)$. Parameters estimated in $\text{logit}$ (BASE, $P_{max}$, $E_{max}$) or $\log(EC_{50})$ domains. IIV on BASE, $P_{max}$, $E_{max}$ with lognormal distribution. Covariates: Steroid IR/I on $E_{max}$ (additive on logit scale), baseline DD on $P_{max}$ (linear effect).

#### Data Sources
Data from Phase 3 EE-001 trial: 427 subjects (143 placebo, 284 cendakimab). Dysphagia Days assessed over 14-day periods via modified daily symptom diary. Individual PK profiles derived from a separate popPK model using empirical Bayes estimates. Baseline demographics: mean age 35.6 years, 69.6% male, 91.3% White, 66.3% Steroid IR/I.

#### Estimation Methods
NONMEM 7.5.1 (likely FOCE or similar; not explicitly stated). Covariate selection via Bayesian Information Criterion (BIC).

#### Model Evaluation
Visual predictive checks (VPCs) based on 1000 stochastic simulations of the analysis dataset. Standard goodness-of-fit (GOF) diagnostic plots. Simulations for dose regimen comparison used 500 trial replicates with 1000 subjects each.

#### Covariate Analysis
Univariable screening using BIC reduction, followed by multivariable analysis. Candidate covariates: baseline DD, prior dilation, disease duration, body weight, sex, dilation rescue, baseline endoscopic score, Steroid IR/I. Final model included Steroid IR/I on $E_{max}$ (retained regardless of statistical significance due to clinical relevance) and baseline DD on $P_{max}$. $EC_{50}$ not tested for covariates to avoid confounding with $E_{max}$.

---

### Statistical Rigor Assessment
The use of BIC for covariate selection is appropriate given the model complexity. VPCs demonstrate adequate predictive performance for the central tendency and variability. However, several statistical concerns arise: (1) The condition number of 580.5 indicates potential multicollinearity or parameter redundancy, which may affect the reliability of standard errors and inference. (2) The RSE for the Steroid IR/I effect on $E_{max}$ is 88.5%, suggesting the data provide limited information to estimate this covariate effect precisely. (3) Shrinkage on IIV parameters (11.8% for $\text{BASE}$, 14.0% for $E_{max}$) is moderate but may attenuate covariate effects. (4) No bootstrap or cross-validation was performed to assess model stability. (5) The assumption of full follow-up in simulations ignores informative dropout (44% in placebo arm), which could bias comparisons. (6) The CUB parameter $\pi$ is estimated with good precision (RSE 3.4%), but its interpretation as a fixed 'uncertainty' parameter may oversimplify the complex reporting behavior.

---

## 📊 Key Findings
The final model estimated an $EC_{50}$ of 76.5 μg/mL (log-transformed: 4.337, RSE 9%) and a steep $E_{max}$ curve ($EC_{90}$ ~688 μg/mL). Placebo effect onset half-life was 27.7 weeks (RSE 31.6%), while drug effect onset was faster at 1.41 weeks (RSE 22.6%). Maximum placebo effect ($P_{max}$) was 8.09 (logit scale) and maximum drug effect ($E_{max}$) was 1.87 (logit scale). The CUB uncertainty parameter $\pi$ was 2.57 (RSE 3.4%), indicating a substantial fraction of observations following a uniform distribution. Simulations at Week 48 showed mean DD reductions vs placebo of ~1.65 days for QW and ~1.36 days for QW/Q2W, with a difference of only ~0.29 days between regimens. Covariate analysis revealed that Steroid IR/I subjects had slightly lower predicted DD (~0.3 days) than Steroid R/N, and subjects with baseline DD $\geq 12$ maintained higher absolute DD post-treatment. Body weight, sex, and race had minimal clinically relevant effects. The model supported no dose adjustments for any evaluated covariates.

---

## 💡 Clinical & Regulatory Implications
The model supports the 360 mg QW-to-Q2W regimen as an effective maintenance posology for cendakimab in eosinophilic esophagitis, with only ~0.29 days difference in DD reduction vs QW at Week 48. No dose adjustments are warranted based on age (adolescents $\geq 12$ years, older adults $\geq 65$ years), sex, race, body weight, or Steroid IR/I status. Subjects with higher baseline DD ($\geq 12$) show greater absolute improvement but remain with higher residual symptoms, suggesting that early intervention may be beneficial. The model provides a quantitative framework for regulatory decision-making and label recommendations.

---

### Strengths & Limitations

#### Strengths
- Novel integration of latent variable IDR model with CUB distribution to handle bounded, discrete, longitudinal PROs with non-informative variability
- Ability to accommodate time-varying dosing regimens (QW-to-Q2W switch) through dynamic exposure input
- Mechanistically plausible delay in treatment effect via first-order onset compartments for placebo and drug
- Comprehensive covariate evaluation using BIC and clinical relevance, with retention of pre-specified stratification factor (Steroid IR/I)
- Robust simulation framework supporting dose regimen selection and subgroup evaluation

#### Limitations (Acknowledged by Authors)
- No dropout component; simulations assume full follow-up through Week 48, which may bias projections given 44% dropout in placebo arm
- Use of NHANES-derived covariates for underrepresented subgroups (adolescents, older adults) may not fully capture disease-specific characteristics
- Model does not account for treatment discontinuation or non-adherence

#### Limitations (Expert Review)
- High condition number (580.5) suggests potential parameter correlation or ill-conditioning
- Large relative standard error for Steroid IR/I effect on $E_{max}$ (RSE 88.5%) indicates imprecise estimation
- Shrinkage on IIV parameters (11.8% for $\text{BASE}$, 14.0% for $E_{max}$) may affect individual predictions and covariate detection
- No bootstrap or cross-validation reported; model evaluation relies solely on VPCs and GOF plots
- The CUB parameter $\pi$ is estimated on a logit scale but interpretation as 'uncertainty' may conflate with true binomial variability

#### Generalizability
The latent variable IDR-CUB framework is broadly applicable to other bounded, discrete, longitudinal PRO endpoints in chronic diseases (e.g., pain scales, symptom scores). However, the specific parameter estimates and covariate effects are context-dependent and require validation in other EoE trials or therapeutic areas. The approach is most suitable when time-varying exposure and mechanistic delay are relevant, and when non-informative reporting is expected.

---

### Key Equations

**Latent Variable Definition**

{% raw %}
$$
\\xi_i(t) = \\text{BASE}_i + \\text{PBO}_i(t) + \\text{DRUG}_i(t)
$$
{% endraw %}

The latent variable representing underlying disease status for subject i at time t, composed of baseline, placebo effect, and drug effect.

**Placebo Effect Onset**

{% raw %}
$$
\\frac{d\\text{PBO}_i}{dt} = k_{\\text{PBOon}} \\cdot (\\text{Pmax}_i - \\text{PBO}_i)
$$
{% endraw %}

First-order onset of placebo effect approaching asymptotic maximum $P_{max}$ with rate constant $k_{\text{PBOon}}$.

**Drug Effect Onset**

{% raw %}
$$
\\frac{d\\text{DRUG}_i}{dt} = k_{\\text{DRUGon}} \\cdot \\left(\\frac{E_{\\text{max}_i} \\cdot C_i(t)}{EC_{50} + C_i(t)} - \\text{DRUG}_i\\right)
$$
{% endraw %}

First-order onset of drug effect driven by $E_{max}$ model on individual-predicted concentration $C_i(t)$, approaching asymptotic maximum $E_{max}$.

**Binomial Probability via Logit**

{% raw %}
$$
p_i(t) = \\frac{e^{\\xi_i(t)}}{1 + e^{\\xi_i(t)}}
$$
{% endraw %}

Probability of dysphagia on any given day, derived from the latent variable via inverse-logit transformation.

**Combined Uniform-Binomial Likelihood**

{% raw %}
$$
P(\\text{DD}_i = k) = \\pi \\cdot \\binom{n_i}{k} p_i^k (1-p_i)^{n_i - k} + (1-\\pi) \\cdot \\frac{1}{n_i + 1}
$$
{% endraw %}

Probability of observing $k$ dysphagia days out of $n_i$ evaluable days, mixing a binomial component (with probability $\pi$) and a uniform component (with probability $1-\pi$).

**Logit Transformation for IIV**

{% raw %}
$$
\\text{BASE}_i = \\frac{e^{\\text{LGT1} + \\text{LGT2} \\cdot \\eta_{\\text{BASE},i}}}{1 + e^{\\text{LGT1} + \\text{LGT2} \\cdot \\eta_{\\text{BASE},i}}}
$$
{% endraw %}

Logit transformation with skewness ($\text{LGT1}$) and width ($\text{LGT2}$) parameters to constrain $\text{BASE}$ between 0 and 1 (proportion scale) with inter-individual variability $\eta$.

---

### Figures & Tables

- **Figure 1**: Visual predictive check (VPC) of DD over time by treatment group (placebo, 360 mg QW, 360 mg QW/Q2W). Observed data (blue circles) with median (solid line) and 5th/95th percentiles (dashed lines) overlaid on prediction intervals from 1000 simulations.
  - *Significance*: Demonstrates adequate predictive performance of the final model across all treatment arms, with observed percentiles generally falling within the 95% prediction intervals.
- **Figure 2**: Time course of predicted DD (median and 5th/95th percentiles) for 360 mg QW and 360 mg QW/Q2W regimens in adult EoE patients, with corresponding cendakimab concentration profiles.
  - *Significance*: Shows comparable DD reduction between regimens despite ~50% lower exposure in QW/Q2W arm, supporting the Q2W maintenance regimen. Concentrations remain above $EC_{50}$ for most subjects.
- **Figure 3**: Time course of predicted DD stratified by Steroid IR/I versus Steroid R/N status for each treatment regimen.
  - *Significance*: Illustrates modestly lower DD in Steroid IR/I subjects (~0.3 days difference), but the effect is not clinically meaningful, supporting no dose adjustment.
- **Figure 4**: Time course of predicted DD stratified by baseline DD ($<12$ vs $\geq 12$) for each treatment regimen.
  - *Significance*: Shows that subjects with higher baseline DD maintain higher absolute DD post-treatment, though they experience greater absolute improvement. Highlights the importance of baseline severity in predicting response.
- **Table 1**: Baseline demographics and clinical characteristics by treatment group (placebo, 360 mg QW, 360 mg QW/Q2W).
  - *Significance*: Provides context for the study population: predominantly White (91%), male (70%), with mean age 35.6 years and 66% Steroid IR/I. Balanced across arms.
- **Table 2**: Final model parameter estimates including population parameters, covariate effects, and inter-individual variability.
  - *Significance*: Central table for understanding model estimates: $EC_{50}=76.5$ μg/mL, placebo half-life=27.7 weeks, drug onset half-life=1.41 weeks, IIV on $\text{BASE}$ (4.31), $P_{max}$ (1.18), $E_{max}$ (4.04). Condition number 580.5 indicates potential correlation.

---

### Supplementary Materials
Supplementary materials include Tables S1–S5 (subject disposition, model development steps, covariate candidates, univariable results, base model parameters) and Figures S1–S11 (normalized DD time course, GOF plots, VPCs by treatment, additional covariate simulations for body weight, sex, race, age subgroups). NONMEM code is provided in Supporting Information (NONMEMS01). These materials support the robustness of the model development and provide additional detail for replication.

---

### Future Directions
Incorporating a dropout model (e.g., time-to-event or joint modeling) would address the informative censoring observed in the trial and improve simulation realism. Extending the latent variable framework to include disease progression components (e.g., natural history) could enhance long-term predictions. Applying the same modeling approach to other PRO endpoints (e.g., pain, fatigue) in different therapeutic areas would validate generalizability. Sensitivity analyses on the CUB assumption (e.g., testing alternative mixture distributions) could assess robustness. Finally, external validation using independent EoE trial data would strengthen confidence in the model.

---

### Expert Commentary
This work represents a sophisticated and innovative application of latent variable IDR modeling to a challenging PRO endpoint. The integration of the CUB distribution is particularly elegant, as it explicitly separates informative symptom reporting from random noise—a common issue in diary-based endpoints. From a regulatory perspective, the ability to simulate time-varying dosing regimens is a major advantage over static exposure-response analyses. However, I have several concerns: (1) The high condition number suggests the model may be overparameterized relative to the data; a simpler model (e.g., without separate onset rates for placebo and drug) might be more stable. (2) The large RSE on the steroid IR/I covariate effect (88.5%) means the model cannot reliably distinguish whether this subgroup truly responds differently; the decision to retain it based on clinical relevance is defensible but should be caveated. (3) The absence of a dropout model is a significant limitation—given 44% dropout in placebo, the simulated treatment effect at Week 48 likely overestimates the true benefit. (4) The use of NHANES demographics for adolescent and elderly simulations is pragmatic but ignores potential disease-specific differences in PK/PD. Despite these limitations, the modeling framework is a valuable addition to the pharmacometrician's toolkit for PRO analysis.

---

### Bottom Line
This paper demonstrates a sophisticated latent variable indirect response model with a combined uniform-binomial likelihood that effectively characterizes the exposure-response relationship for dysphagia days in eosinophilic esophagitis. The model supports the selection of a QW-to-Q2W maintenance regimen for cendakimab, showing comparable efficacy to weekly dosing despite 50% lower exposure. Pharmacometricians should consider this framework for analyzing bounded, discrete PRO endpoints, especially when time-varying dosing and non-informative variability are present. However, the complexity and potential identifiability issues (high condition number, imprecise covariate effects) warrant careful model diagnostics and sensitivity analyses before regulatory application.

---

---

## 📊 Figures

![Visual predicted check plot of DD by treatment group (final model). The observed DD data over time following the first dose are shown as blue circles, with solid]({{ site.baseurl }}/assets/digests/2026-05-30-latent-variable-indirect-response-modeling-of-cendakimab-exposureresponse-for/figures/fig_01.png)

![Time course of predicted DD in relation to Cendakimab exposure for 360 mg QW and 360 mg QW/Q2W regimens in adult patients with EoE. Colored solid lines and shade]({{ site.baseurl }}/assets/digests/2026-05-30-latent-variable-indirect-response-modeling-of-cendakimab-exposureresponse-for/figures/fig_02.png)

![Time course of predicted DD stratified by steroid IR/I versus steroid R/N in adult patients with EoE. Colored solid lines and shaded areas represent the median a]({{ site.baseurl }}/assets/digests/2026-05-30-latent-variable-indirect-response-modeling-of-cendakimab-exposureresponse-for/figures/fig_03.png)

![Time course of predicted DD stratified by baseline DD in adult patients with EoE. Colored solid lines and shaded areas represent the median and the 5th and 95th]({{ site.baseurl }}/assets/digests/2026-05-30-latent-variable-indirect-response-modeling-of-cendakimab-exposureresponse-for/figures/fig_04.png)