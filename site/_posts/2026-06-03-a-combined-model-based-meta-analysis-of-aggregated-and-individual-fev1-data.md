---
layout: post
title: "A Combined Model-Based Meta-Analysis of Aggregated and Individual FEV1 Data From Randomized COPD Trials"
date: 2026-06-03
authors: "Yang L, Karlsson MO, Yngman G, Lopes-Pinto C, Yngman S, Almquist C, Bildberg A, Kjellsson MC"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 14(2), e70059"
doi: "10.1002/psp4.70059"
paper_type: popk
tags: [popk, regulatory, meta-analysis]
excerpt_text: "This paper presents a pioneering combined model-based meta-analysis (MBMA) integrating aggregated data (AD) from 298 COPD trials with individual patient data (IPD) from two GSK trials. Pharmacometricians working on meta-analyses or MIDD for respiratory indications should read this for its practical solutions to multi-level variability estimation and aggregation bias in NONMEM. The methods for approximating lognormal IIV as normal for AD using the central limit theorem (Equation 10) and the $LEVEL/IOV$-like approach are broadly applicable."
pdf_path: "/assets/digests/2026-06-03-a-combined-model-based-meta-analysis-of-aggregated-and-individual-fev1-data/PMx_A_Combined_ModelBased_MetaAnalysis_of_Ag_20260603.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a pioneering combined model-based meta-analysis (MBMA) integrating aggregated data (AD) from 298 COPD trials with individual patient data (IPD) from two GSK trials. Pharmacometricians working on meta-analyses or MIDD for respiratory indications should read this for its practical solutions to multi-level variability estimation and aggregation bias in NONMEM. The methods for approximating lognormal IIV as normal for AD using the central limit theorem (Equation 10) and the $LEVEL/IOV$-like approach are broadly applicable.

---

### Executive Summary
Yang et al. develop a combined AD-IPD nonlinear mixed-effects model for FEV1 in COPD, building on a legacy MBMA of 298 studies (AD) and adding IPD from two fluticasone furoate/vilanterol trials. The key methodological contributions include: (1) a two-step NONMEM approach using $LEVEL$ with IOV-like ETAs for AD to estimate ISV and IIV, (2) an approximated normal distribution of aggregated lognormal IIV to avoid aggregation bias, and (3) demonstration that higher covariate correlations at the AD level do not introduce bias. The combined model identified new covariates (sex, smoking) and improved precision of covariate effects (e.g., RSE for age on baseline dropped from 21.5% to 3.8%). This work provides a template for utilizing limited IPD to enhance MBMA for clinical trial simulation and design.

---

### Scientific Context & Motivation
Model-based meta-analysis (MBMA) of aggregated data (AD) has become a cornerstone for quantitative drug development, enabling indirect treatment comparisons and trial design optimization. However, AD lacks individual-level information—IIV, individual covariate effects, and proper handling of nonlinearities—leading to concerns about ecological fallacy and aggregation bias. Individual patient data (IPD) are information-rich but often proprietary, limited in scope, and computationally intensive. The knowledge gap is a practical, validated framework for combining abundant AD with sparse IPD in a single pharmacometric model using standard tools like NONMEM. This study addresses that gap for COPD, a disease with extensive published trial data but limited public IPD. The work challenges the notion that AD-IPD differences in covariate correlations preclude combined modeling, offering empirical evidence from stochastic simulations that such differences do not introduce parameter bias.

---

## ⚡ Methodological Snapshot
The study uses a two-step multilevel modeling approach in NONMEM 7.5.1. First, ISV is estimated from pooled AD + aggregated IPD using $LEVEL$ with equal study weights ($LEVWT=0$). Second, ISV is fixed, and IIV is estimated using an IOV-like method (separate ETAs per arm) for AD, while the IPD part estimates IIV sharing the fixed ISV. Aggregation bias from lognormal IIV is corrected by deriving an approximate normal distribution for the mean (variance = $IIV^2/N$). Model structure includes FEV1 baseline, linear disease progression, immediate placebo, and Emax/constant dose-response for 23 compounds. Covariate selection uses forward inclusion ($p<0.05$) and backward elimination ($p<0.01$) via scmplus. The combined model is evaluated by VPC, diagnostic plots, and comparison of OFV to a fully linearized alternative.

---

## 🏗️ Structural Model Breakdown
The structural model is a longitudinal nonlinear mixed-effects model with the following components: (1) Baseline FEV1 (BSL) with exponential IIV (log-normal) and covariates (age, sex, smoking, disease severity, reversibility). (2) A linear disease progression slope (DPS) with additive IIV (normal) and covariate effect of baseline on progression. (3) Placebo effect modeled as immediate (constant over time) with ISV. (4) Drug effects: bronchodilators (LABA, LAMA) with Emax model based on dose; anti-inflammatories (ICS) with constant effect; interaction between LABA and LAMA tested but not significant in IPD. (5) A fractional reduction factor applied to bronchodilator effect if both FEV1 baseline and FEV1 during treatment were measured post-SABD (short-acting bronchodilator). The model has three levels of variability: ISV (between studies), IIV (between patients), and residual error (different for AD and IPD). The AD and IPD parts share the same structural model equations except for residual error model and the handling of lognormal IIV (AD uses the approximate normal distribution for the mean).

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling in NONMEM 7.5.1. The structural model includes baseline FEV1 (BSL), linear disease progression slope, placebo effect, and drug effects modeled as Emax (for bronchodilators) or constant (for anti-inflammatories). IIV was modeled as exponential on baseline, additive on disease progression slope and drug effects. Residual error: additive for AD, power with IIV for IPD. Covariates included age, sex, smoking, disease severity, reversibility, and exacerbation history.

#### Data Sources
AD: 4137 mean morning trough FEV1 measurements from 298 studies (250,543 patients, 23 compounds, mono/dual/triple therapies) from the published MBMA by the same group. IPD: two GSK 24-week randomized, double-blind, placebo-controlled, parallel-group trials (NCT01053988, NCT01054885) of fluticasone furoate/vilanterol mono and dual therapy. The two IPD studies were excluded from the AD dataset to avoid duplication.

#### Estimation Methods
Two-step approach: Step 1: AD + aggregated IPD pooled dataset, ISV estimated using $LEVEL$ ($LEVWT=0$). Step 2: ISV fixed to Step 1 estimates. AD part uses IOV-like method with separate ETAs for each arm (scaled by arm size). IPD part shares fixed ISV and estimates IIV. Laplace estimation method was likely used for the nonlinear model (not explicitly stated). SSE used 100 replicates.

#### Model Evaluation
Diagnostics included: model convergence, parameter range reasonableness, goodness-of-fit plots (observations vs predictions, residuals), visual predictive check (prediction-corrected VPC), and comparison of OFV between nested models. Shrinkage was reported (e.g., 43.4% for ISV in disease progression slope). The linearized AD model was compared to the original via fitting performance (Figure S1).

#### Covariate Analysis
Covariates (age, sex, smoking, disease severity, reversibility, exacerbation history) were tested on baseline, disease progression slope, and drug effects using scmplus with forward inclusion ($p<0.05$) and backward elimination ($p<0.01$). Missing age and smoking were imputed via multi-linear regression; missing disease severity (0.62%) replaced by median. Redundant relationships (e.g., age on baseline and baseline on drug effect) were consolidated. Final model covariates: disease severity, age, sex, smoking on baseline; baseline on drug effect (bronchodilator and anti-inflammatory) and disease progression slope.

---

### Statistical Rigor Assessment
The study demonstrates strong statistical rigor through extensive stochastic simulation and estimation (SSE) to evaluate methodological choices. SSE was used to: (1) compare 8 methods for ISV/IIV estimation with 100 replicates each, (2) validate the approximate normal distribution for lognormal IIV with 100 replicates, (3) test the impact of covariate correlation differences with 100 replicates. Model selection uses standard likelihood ratio tests with adequate significance thresholds ($p<0.05$ forward, $p<0.01$ backward). The sample size is very large for AD (250,543 patients) and adequate for IPD (two studies with ~1000+ patients each). Missing data handling is reasonable: regression-based imputation for age/smoking, median for disease severity (0.62% missing). A key strength is the comparison of nonlinear vs. linearized models to justify the chosen nonlinear structure. A limitation is the lack of external validation on an independent IPD dataset and the absence of a formal sensitivity analysis to the two-step estimation procedure's impact on standard error underestimation.

---

## 📊 Key Findings
The study's primary findings are: (1) The optimal NONMEM method for multi-level variability estimation with many AD and few IPD studies is a two-step approach: first estimate ISV from pooled AD + aggregated IPD using $LEVEL$ ($LEVWT=0$), then fix ISV and estimate IIV using IOV-like separate ETAs for each AD arm while the IPD part shares fixed ISV and estimates IIV. (2) Aggregation bias from lognormal IIV in baseline FEV1 causes ~8% overestimation of the typical value ($TH_B$) in AD-only models; this is corrected by approximating the distribution of the mean as normal with variance = $IIV^2/N$. (3) Covariate correlations are 2–6 times higher at the AD level than IPD level, but this does not introduce estimation bias for covariate coefficients. (4) The combined ADIPD model identified sex and smoking status as significant covariates on FEV1 baseline (female −110 mL, non-smoker −59 mL relative to male/current smoker), which were not detected in the AD-only model. (5) The ADIPD model reduced RSE for key covariate effects substantially, e.g., age on baseline from 21.5% to 3.8%. (6) Nonlinear relationships (Emax dose-response, linear covariate effects) superior to fully linearized model (OFV difference of −4,175).

---

## 💡 Clinical & Regulatory Implications
The combined ADIPD model provides several clinically actionable insights: (1) Identified that females have ~110 mL lower FEV1 baseline than males, and non-current smokers have ~59 mL lower baseline than current smokers—these factors should be considered in patient stratification and inclusion criteria for COPD trials. (2) The improved precision of covariate effects (e.g., age on baseline RSE from 21.5% to 3.8%) allows more confident identification of subpopulations with differential responses. (3) The model enables more realistic clinical trial simulations incorporating both inter-study and inter-individual variability, which can be used to optimize study design (sample size, study duration, inclusion criteria) and compare new treatments to standard of care from the 298-study database. (4) The finding that disease progression is faster in patients with higher baseline FEV1 suggests that monitoring frequency may need to be adjusted based on baseline severity. (5) The methodology itself has regulatory implications: sponsors with access to even limited IPD can now quantitatively leverage the wealth of published AD to improve model-based evidence for dose selection and label claims. The model is not intended to directly support specific dosing recommendations, but rather to inform the clinical development program.

---

### Strengths & Limitations

#### Strengths
- Novel and practical methodology for combining AD and IPD in a single NONMEM model, with clear guidance on $LEVEL$ and IOV-like approaches
- Rigorous SSE framework to evaluate multiple estimation methods for ISV/IIV, choosing criteria of parameter bias and precision
- Mathematical derivation of the approximate normal distribution for lognormal IIV mean (Equation 10) with empirical validation via simulation and SSE
- Use of two independent IPD studies to validate and extend covariate findings from AD
- Demonstration that the combined model reduces RSE of covariate estimates by up to 5-fold compared to AD-only
- Comprehensive covariate analysis using scmplus with forward inclusion and backward elimination ($p<0.05/0.01$)
- Clear reporting of both nonlinear and linear ADIPD models for comparison

#### Limitations (Acknowledged by Authors)
- Only two IPD studies from a single sponsor (GSK) with limited compounds (fluticasone furoate/vilanterol), limiting generalizability of the IPD-specific findings (e.g., drug interaction not detected)
- Dropout bias not explored due to lack of dropout information in AD
- Two-step estimation of ISV/IIV is not a fully simultaneous method; LEVWT options limited to 0/1 without ability to weight by actual study population size
- Covariate effects not separated into within-study and between-study levels (as proposed by Riley et al.)
- Parameter uncertainty not included in clinical trial simulations (Figure 4)
- Residual error differs between AD and IPD, reflecting different error sources (digitization, MMRM vs raw data)

#### Limitations (Expert Review)
- The two-step approach, while practical, may underestimate standard errors of ISV parameters because the first step treats ISV as known in the second step
- The IOV-like method for AD requires one ETA per arm, which limits the number of arms that can be handled practically; for datasets with many arms per study, this could become cumbersome
- The study's focus on COPD FEV1 may limit direct applicability to other therapeutic areas with different endpoints (e.g., binary, time-to-event)
- The approximate normal distribution for lognormal IIV is derived under the central limit theorem, which assumes finite variance and independence; this may not hold for heavy-tailed or highly skewed IIV distributions
- Covariate imputation methods (regression-based for missing age/ smoking, median for disease severity) could introduce bias, though the fraction missing was low for disease severity (0.62%)
- External validation of the ADIPD model against independent IPD (not used in model building) was not performed

#### Generalizability
The generalizability of the specific covariate estimates (e.g., female −110 mL baseline) is limited to COPD populations similar to the GSK trials. However, the methodological framework—the $LEVEL/IOV$-like approach, the lognormal-to-normal approximation, and the SSE validation workflow—is highly generalizable to any therapeutic area where AD from many trials and sparse IPD are available. The key assumption is that the IPD studies are representative of the broader trial population included in the AD. The two-step estimation method is particularly suited for the common scenario of many AD studies (50+) and few IPD studies (1–5). The finding that AD-level covariate correlations do not bias estimation provides reassurance for other AD-IPD analyses.

---

### Key Equations

**Approximate normal distribution for lognormal IIV mean**

{% raw %}
$$
\text{If } X \sim \text{LN}(\mu, \sigma^2), \text{ then } \bar{X} \approx N\left(\exp\left(\mu + \frac{\sigma^2}{2}\right), \frac{\exp(2\mu + \sigma^2)(\exp(\sigma^2) - 1)}{N}\right)
$$
{% endraw %}

This approximation uses the central limit theorem to derive the distribution of the sample mean of lognormally distributed individual parameters (e.g., FEV1 baseline). It is used for AD modeling to avoid aggregation bias when the individual-level IIV is lognormal.

---

### Figures & Tables

- **Figure 1**: Comparison of 8 different methods to estimate ISV/IIV in the combined ADIPD model, shown as box plots of parameter bias and precision across 100 SSE replicates.
  - *Significance*: Identifies the optimal method (red rectangle): $LEVEL$ $LEVWT=0$ with ISV fixed, IOV-like ETAs for AD arms, and IPD sharing fixed ISV.
- **Figure 2**: Simulation of individual (lognormal) and aggregated (mean) distributions of FEV1 baseline, comparing the true aggregated distribution (red), the approximate normal (blue), and a scaled lognormal (green) for $N=20, 200, 1000, 5000$.
  - *Significance*: Visually validates that the approximate normal distribution closely matches the true mean distribution, while the scaled lognormal is biased, especially at larger $N$.
- **Figure 3**: SSE results for aggregation bias: Panel A shows parameter bias for IPD, AD with lognormal IIV, and AD with approximate normal IIV; Panel B shows bias in covariate coefficients when AD and IPD have different covariate correlations.
  - *Significance*: Demonstrates that the lognormal IIV assumption in AD causes 8-10% bias in baseline parameters, corrected by the approximate normal; and that correlation differences do not bias covariate estimates.
- **Figure 4**: Clinical trial simulation from the combined ADIPD model showing FEV1 over 24 weeks for vilanterol 25 μg and vilanterol/fluticasone furoate 25/200 μg, stratified by sex.
  - *Significance*: Illustrates the model's ability to generate realistic virtual populations with both study-level and individual-level variability for trial design.
- **Table 1**: Covariate correlations at IPD within-study, overall IPD, and AD levels, with ratio of AD to IPD correlation (range 1.75 to 6.31).
  - *Significance*: Quantifies the systematic inflation of correlations in aggregated data, which the SSE shows does not cause estimation bias, addressing a key concern for AD-IPD modeling.
- **Table 2**: Comparison of RSE (%) for four key covariate effects between the original AD model and the combined ADIPD model.
  - *Significance*: Demonstrates that the combined model substantially improves precision, e.g., RSE for age on baseline drops from 21.5% to 3.8%.

---

### Code & Reproducibility Assessment
The authors state that 'for requests for access to anonymized subject level data, please contact S.Y.' (GSK author). No GitHub or public code repository is mentioned. The PsN (5.3.1) and NONMEM (7.5.1) scripts for SSE and scmplus are described in the methods but not publicly archived. Code availability is limited.

---

### Supplementary Materials
The authors reference supplementary materials including Table S1 (IPD demographic summary), Table S2 (IPD covariate results), Table S3 (ADIPD model parameter estimates), Table S4 (covariate inclusion details), Figure S1 (AD model fitting after linearization), Figure S3 (IPD model diagnostics), and Figure S4 (ADIPD model diagnostics: fitting, random effects, VPC). These were not extracted from the source text.

---

### Future Directions
This work opens several avenues: (1) extension of the single-level covariate model to a two-level (within-study/between-study) covariate approach as proposed by Riley et al., which the authors mention in the discussion but did not implement; (2) inclusion of a dropout model informed by IPD to correct potential bias in AD disease progression estimates; (3) application of the ADIPD framework to other endpoints in COPD (exacerbation rate, trough FEV1) and other therapeutic areas (asthma, pulmonary hypertension); (4) development of a fully Bayesian implementation in Stan or NONMEM's Bayesian MCMC to allow for more flexible multi-level structures and full propagation of uncertainty; (5) prospective validation of the model's ability to predict outcomes of new COPD trials not included in the dataset; (6) exploration of methods to weight AD and IPD contributions differently based on data quality or relevance.

---

### Expert Commentary
As a senior pharmacometrician, I find this paper to be a valuable and pragmatic contribution to the MBMA literature. The central challenge—combining sparse IPD with rich AD—is increasingly common as companies seek to leverage both internal and published data. The authors wisely avoid the trap of trying to estimate all levels simultaneously, instead opting for a two-step approach that is computationally feasible and shown by SSE to perform well. The derivation of the normal approximation for aggregated lognormal IIV (Equation 10) is particularly elegant; I've seen too many AD analyses naively apply IIV variance without scaling by $N$, which this paper shows leads to ~8% bias in the typical value. The finding that higher AD covariate correlations do not cause estimation bias is reassuring but must be interpreted cautiously—the SSE assumed the same underlying structural model, whereas in practice, unmeasured confounders at the study level could cause bias. The improvement in RSE from 21.5% to 3.8% for age on baseline is dramatic and underscores the information content of even two IPD studies. For practitioners: the IOV-like method requiring one ETA per arm is the main practical hurdle—for studies with many arms (e.g., dose-ranging trials with 8+ arms), you'll need to carefully manage the number of ETAs. The authors' decision to keep the residual error models different between AD and IPD is pragmatic—forcing a common error model would likely misspecify the distinct error sources. I would have liked to see a full Bayesian approach attempted (e.g., using Stan) as a sensitivity analysis, given the hierarchical structure. Nonetheless, this paper sets a new standard for AD-IPD integration in pharmacometrics and should be read by anyone planning a meta-analysis with access to even a single IPD dataset.

---

### Bottom Line
This paper delivers a practically implementable framework for combined AD-IPD modeling in NONMEM, validated through extensive SSE. The key takeaway for pharmacometricians is the two-step approach: use $LEVEL$ ($LEVWT=0$) on pooled data to estimate ISV, fix ISV, then estimate IIV using IOV-like ETAs for AD arms while the IPD part shares the fixed ISV. The aggregation bias correction (normal approximation for lognormal IIV mean with variance = $IIV^2/N$) should be adopted in all AD-only or combined models where IIV is assumed lognormal. The improved precision of covariate estimates and identification of previously undetectable covariates (sex, smoking) demonstrate clear value proposition for investing in combined analyses when limited IPD is available.

---

---

## 📊 Figures

![Comparison of different methods to estimate ISV/IIV in the combined model. SSE was repeated 100 times. The parameter estimates of different methods are shown in]({{ site.baseurl }}/assets/digests/2026-06-03-a-combined-model-based-meta-analysis-of-aggregated-and-individual-fev1-data/figures/fig_01.jpg)

![Simulations of distributions of individual parameter and aggregated parameter, use FEV1 baseline as an example for illustration. The individual parameter baselin]({{ site.baseurl }}/assets/digests/2026-06-03-a-combined-model-based-meta-analysis-of-aggregated-and-individual-fev1-data/figures/fig_02.jpg)

![(A) SSE results of aggregation bias caused by the lognormal distribution of IIV assumption. IPD model (red) and two AD models were applied to estimate parameters]({{ site.baseurl }}/assets/digests/2026-06-03-a-combined-model-based-meta-analysis-of-aggregated-and-individual-fev1-data/figures/fig_03.jpg)

![The simulation from the combined ADIPD model with two treatments (vilanterol 25 μg, vilanterol/fluticasone furoate 25/200 μg). The two treatments were applied to]({{ site.baseurl }}/assets/digests/2026-06-03-a-combined-model-based-meta-analysis-of-aggregated-and-individual-fev1-data/figures/fig_04.jpg)