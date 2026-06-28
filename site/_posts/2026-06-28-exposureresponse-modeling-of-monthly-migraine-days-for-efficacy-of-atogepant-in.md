---
layout: post
title: "Exposure–Response Modeling of Monthly Migraine Days for Efficacy of Atogepant in Patients With Episodic or Chronic Migraine"
date: 2026-06-28
authors: "Schlachter L, Beck D, Stodtmann S, Boinpally RR, et al."
journal: "Clinical Pharmacology & Therapeutics (likely), 2025"
doi: "https://pubmed.ncbi.nlm.nih.gov/41272937/"
paper_type: generic
tags: [generic, covariate-analysis]
excerpt_text: "This paper develops an exposure–response model for monthly migraine days (MMD) in atogepant-treated patients with episodic or chronic migraine. A compressed normal distribution with an $E_{max}$ relationship on $C_{min}$ best described the data, showing that approved doses (10–60 mg QD) achieve exposures near the $EC_{90}$ (~3.71 nM). Covariate analysis identified baseline MMD, prior treatment failure, and Asian race as significant predictors of response, with no difference between prior preventive users and treatment-naïve patients."
pdf_path: "/assets/digests/2026-06-28-exposureresponse-modeling-of-monthly-migraine-days-for-efficacy-of-atogepant-in/PMx_ExposureResponse_Modeling_of_Monthly_Mig_20260628.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper develops an exposure–response model for monthly migraine days (MMD) in atogepant-treated patients with episodic or chronic migraine. A compressed normal distribution with an $E_{max}$ relationship on $C_{min}$ best described the data, showing that approved doses (10–60 mg QD) achieve exposures near the $EC_{90}$ (~3.71 nM). Covariate analysis identified baseline MMD, prior treatment failure, and Asian race as significant predictors of response, with no difference between prior preventive users and treatment-naïve patients.

---

### Executive Summary
The authors conducted a comprehensive exposure–response analysis of monthly migraine days (MMD) using data from four clinical trials of atogepant in episodic and chronic migraine. They systematically evaluated multiple distributional assumptions (Poisson, beta, binomial, normal) and drug effect shapes (linear, logarithmic, Emax) to model the bounded, zero/28-inflated MMD endpoint. The final model employed a compressed normal distribution with an $E_{max}$ relationship on $C_{min}$, incorporating inter-individual variability and covariates (baseline MMD, prior treatment failure, Asian race). The model adequately described the observed data, as confirmed by visual predictive checks. Key findings indicate that all approved atogepant doses achieve exposures sufficient for near-maximal effect, with an estimated $C_{min}$ $EC_{90}$ of 3.71 nM. Patients with prior oral preventive treatment failure or higher baseline MMD require a longer time to reach maximal effect. This work provides a robust framework for exposure–response modeling of continuous clinical endpoints in migraine and potentially other therapeutic areas.

---

### Scientific Context & Motivation
Migraine is a highly prevalent neurological disorder with significant disability. The primary endpoint for preventive migraine trials is the change from baseline in monthly migraine days (MMD), a bounded continuous variable (0–28 days) with potential inflation at boundaries. Previous exposure–response models for CGRP-targeting therapies (e.g., epitnezumab, fremanezumab) used various distributions (beta-binomial, gamma) but did not simultaneously model episodic and chronic migraine populations. Atogepant, an oral CGRP receptor antagonist, has shown efficacy across multiple doses in both populations. A unified exposure–response model across EM and CM is needed to support dose selection and understand factors affecting response, especially given the heterogeneity in baseline MMD and prior treatment history.

---

## ⚡ Methodological Snapshot
The exposure–response analysis was performed using nonlinear mixed-effects modeling in NONMEM 7.5.1. The dataset comprised 2544 patients from four clinical trials (phase 2b/3, ADVANCE, PROGRESS, ELEVATE). The primary endpoint was monthly migraine days (MMD), a bounded continuous variable (0–28 days). Model development proceeded in steps: (1) selection of distributional form (Poisson, zero-28-inflated Poisson, generalized Poisson, augmented beta, binomial, compressed normal, M3-like compressed normal) using placebo data only; (2) selection of drug effect shape (linear, logarithmic, Emax) and exposure metric ($C_{min}$, $C_{avg}$, $C_{max}$, time above thresholds) based on OFV; (3) covariate search using stepwise forward inclusion ($p<0.01$) and backward elimination ($p<0.001$) on structural (baseline MMD, prior treatment failure) and exploratory covariates (indication, prior preventive use, body weight, sex, Asian race, age). The final model was evaluated using VPCs (500 simulations) and diagnostic plots. The compressed normal distribution was chosen for stability, with an $E_{max}$ relationship on $C_{min}$. Covariates included baseline MMD on $E_{max}$ and $TEF_{50}$, prior treatment failure on combined effect and $TEF_{50}$, and Asian race on combined effect.

---

## 📋 Detailed Analysis
The paper's strength lies in its systematic approach to handling a challenging data type: a bounded continuous endpoint with inflation at both boundaries (0 and 28 days) and a bimodal distribution due to the inclusion of both episodic and chronic migraine patients. The authors tested a wide range of distributions, each with modifications to account for the data characteristics. The Poisson-based models (zero-28-inflated, generalized) were theoretically appealing for count data but failed to capture the upper tail in chronic migraine patients, likely because the variance-mean relationship was inappropriate. The augmented beta distribution, while bounded, could not accommodate inter-individual variability and underestimated the upper bound. The binomial distribution also underestimated variability. The normal distribution, despite being theoretically unsuitable for discrete data, performed best when compressed to [0,28] because the data after imputation and normalization were effectively continuous. The M3-like compressed normal approach, which correctly handles boundary inflation by modifying the likelihood, was unstable and required stochastic optimization, making it impractical for model selection. Thus, the compressed normal with first-order estimation was a pragmatic choice, acknowledging a slight theoretical misspecification but yielding stable and interpretable results. The $E_{max}$ model on $C_{min}$ was selected based on OFV, but the differences between exposure metrics were small, and all metrics showed similar plateau behavior. This is expected because the doses were chosen to be on the plateau, making it difficult to discriminate between metrics. The covariate analysis revealed that baseline MMD and prior treatment failure affect the time to effect ($TEF_{50}$), which is clinically meaningful: patients with more severe disease or who have failed prior treatments may need longer to see full benefit. The effect of Asian race on the combined effect is interesting but should be interpreted cautiously given the small sample size and potential confounding by study (ELEVATE had no Asian patients; PROGRESS had 31% Asian). The final model VPCs show good agreement, though some slight underprediction of the 95th percentile in chronic migraine patients on placebo is visible. Overall, the analysis is thorough and the conclusions are well-supported.

---

### Domain Context
Migraine clinical trials have standardized on monthly migraine days (MMD) as the primary efficacy endpoint for preventive treatments. MMD is derived from daily headache diaries and normalized to a 28-day month, resulting in non-integer values after imputation. The endpoint is bounded between 0 and 28, with potential inflation at 0 (patients who become migraine-free) and 28 (patients with daily migraine). Modeling such data requires careful consideration of the distribution. Previous exposure–response models for CGRP antagonists (epitnezumab, fremanezumab) used beta-binomial or gamma distributions, but these were applied to either EM or CM populations separately. Atogepant is unique in having approval for both EM and CM with overlapping doses, making a unified model desirable. The CGRP receptor antagonism mechanism is well-characterized, and the CIDV assay provides a translational biomarker ($EC_{90}$ ~13.6 nM) that informed dose selection. The exposure–response model confirms that clinical doses achieve concentrations well above the $EC_{90}$, consistent with the preclinical data. The finding that prior preventive treatment failure does not affect the drug effect (only the time to effect) is reassuring and suggests that atogepant can be effective even in treatment-refractory populations, as seen in the ELEVATE study.

---

## 📊 Key Findings
1. The compressed normal distribution (with first-order estimation) was the most stable and best-fitting distribution for MMD data, outperforming Poisson, beta, and binomial alternatives. 2. An $E_{max}$ model using $C_{min}$ as the exposure metric provided the best fit (lowest OFV) among tested drug effect shapes. 3. The model-estimated $C_{min}$ $EC_{90}$ was 3.71 nM, which is similar to the median $C_{min}$ achieved with the 10 mg QD regimen (4.34 nM). 4. All approved atogepant doses (10, 30, 60 mg QD for EM; 60 mg QD for CM) produce exposures that saturate the exposure–response relationship, indicating maximal efficacy at these doses. 5. Covariate analysis revealed: (a) higher baseline MMD increases the time to half-maximal effect ($TEF_{50}$); (b) patients with prior oral preventive treatment failure have a reduced combined placebo+atogepant effect and longer $TEF_{50}$; (c) Asian race was associated with a lower combined effect. 6. No significant difference in efficacy was observed between patients with prior preventive medication use and treatment-naïve patients.

---

### Strengths & Limitations

#### Strengths
- Comprehensive evaluation of multiple distributional assumptions (Poisson, beta, binomial, normal) with modifications to handle bounded and inflated data.
- Use of a large integrated dataset from four clinical trials (N=2544) covering both episodic and chronic migraine and a range of doses (10 mg QD to 60 mg BID).
- Systematic covariate search using stepwise forward inclusion and backward elimination, including both structural and exploratory covariates.
- Robust model evaluation using visual predictive checks (VPCs) stratified by indication and treatment arm, as well as diagnostic plots (QQ, CWRES).
- Sensitivity analysis with the more theoretically correct M3-like compressed normal approach confirmed similar parameter estimates.
- Clear clinical relevance: demonstrates that approved doses achieve near-maximal effect, supporting dose selection and providing guidance for patients with prior treatment failure.

#### Limitations (Acknowledged by Authors)
- The $EC_{50}$ estimate is imprecise (60% RSE) because most observed exposures exceed the $EC_{50}$, making it difficult to accurately estimate the lower part of the curve.
- The M3-like compressed normal approach was unstable and required stochastic optimization, limiting its use for model selection.
- The model does not account for headache severity on a given day, only the count of migraine days.
- The choice between exposure metrics ($C_{min}$, $C_{avg}$, $C_{max}$) was based on marginal OFV differences, and sensitivity analyses showed similar predictions across metrics.

#### Limitations (Expert Review)
- The compressed normal distribution, while practical, is theoretically approximate for discrete bounded data; the M3-like approach is more correct but less stable.
- The covariate effect of Asian race was based on a small subgroup (8% of patients) and may be confounded by other factors (e.g., study population differences).
- The model does not include a formal assessment of exposure–safety relationships beyond a brief mention of nausea and constipation.
- The time course model uses an exponential time-to-half-maximum effect ($TEF_{50}$) which may not capture more complex temporal patterns (e.g., delayed onset, tolerance).

#### Generalizability
The model was developed using data from four clinical trials with diverse geographic and demographic representation (including Asian and Black patients). The unified approach across EM and CM populations supports generalizability to the broader migraine population. However, the model may not be directly applicable to other CGRP antagonists or other endpoints (e.g., acute migraine treatment). The findings are specific to atogepant and its dosing regimens.

---

### Key Equations

**Emax model for drug effect**

{% raw %}
$$
E = E_0 \cdot \left(1 - \frac{E_{\max} \cdot C_{\min}}{EC_{50} + C_{\min}}\right)
$$
{% endraw %}

Describes the relationship between atogepant $C_{min}$ and the reduction in monthly migraine days, where $E_0$ is the placebo effect, $E_{max}$ is the maximal drug effect, and $EC_{50}$ is the concentration producing half-maximal effect.

**Time course model ($TEF_{50}$)**

{% raw %}
$$
E(t) = E_{\text{final}} \cdot \left(1 - e^{-\ln(2) \cdot t / TEF_{50}}\right)
$$
{% endraw %}

Exponential approach to steady-state effect, where $TEF_{50}$ is the time to reach 50% of the final combined placebo and atogepant effect.

---

### Figures & Tables

- **Figure 1**: Visual predictive checks (VPCs) of monthly migraine days for placebo models using different distributions: (A) zero-28-inflated Poisson, (B) generalized Poisson, (C) augmented beta, (D) binomial, (E) compressed normal, (F) M3-like compressed normal.
  - *Significance*: Demonstrates that normal distribution models (E, F) best capture the observed MMD time course and variability, especially for chronic migraine patients, leading to the selection of the compressed normal distribution.
- **Figure 2**: Drug effect visualization in $E_{max}$ base models for episodic (left) and chronic (right) migraine patients, showing predicted MMD at Week 9–12 over the range of $C_{min}$, $C_{avg}$, and $C_{max}$.
  - *Significance*: Shows that MMD plateaus around the model-estimated $EC_{90}$ values for all exposure metrics, indicating that approved doses achieve near-maximal effect.
- **Figure 3**: VPCs of (A) monthly migraine days and (B) change from baseline in MMD for the final model, stratified by indication (EM, CM) and treatment arm.
  - *Significance*: Confirms that the final model adequately describes the observed data across all treatment groups and both indications, supporting model validity.
- **Table 1**: Demographics and baseline characteristics of patients from the four clinical trials.
  - *Significance*: Provides context for the study population, including distribution of EM/CM, sex, age, race, baseline MMD, and prior treatment history.
- **Table 2**: Summary of individual predicted atogepant steady-state exposures ($C_{min}$, $C_{avg}$, $C_{max}$, time above thresholds) by treatment arm.
  - *Significance*: Shows the range of exposures achieved with different doses, highlighting that 10 mg QD produces $C_{min}$ values near the $EC_{90}$.
- **Table 3**: Objective function values (OFV) for different drug effect models (linear, log, Emax) and exposure metrics ($C_{min}$, $C_{avg}$, $C_{max}$, T1, T2, T3).
  - *Significance*: Demonstrates that the $E_{max}$ model on $C_{min}$ has the lowest OFV, guiding the selection of the final drug effect structure.
- **Table 4**: Final model parameter estimates, including $EC_{50}$, placebo effect, $TEF_{50}$, $E_{max}$, covariate effects, and random effects.
  - *Significance*: Provides the quantitative basis for the exposure–response relationship and covariate influences, with RSE and confidence intervals.

---

### Code & Reproducibility Assessment
The analysis was performed using NONMEM 7.5.1 and PsN 5.3.1. No public code repository is mentioned; the code is likely proprietary to AbbVie.

---

### Supplementary Materials
Supplementary materials include Table S1 (covariate search steps), Table S2 (M3-like compressed normal parameter estimates), Figure S1 (random error distributions), Figure S2 (final model drug effect visualization), and Figure S3 (QQ plots and random effects diagnostics). These support the robustness of the final model and sensitivity analyses.

---

### Future Directions
Future work could explore the recently proposed 'ordered beta regression' as an alternative distribution for bounded continuous data. Incorporating headache severity or other patient-reported outcomes could provide a more comprehensive efficacy assessment. Exposure–safety modeling for adverse events like nausea and constipation could be formally integrated. Additionally, extending the model to longer-term open-label extension data would help characterize the durability of response and potential tolerance.

---

### Expert Commentary
This paper represents a thorough and methodologically rigorous exposure–response analysis for a migraine preventive therapy. The systematic evaluation of distributional assumptions is commendable, as the choice of distribution can significantly impact model stability and interpretability. The use of a compressed normal distribution with an $E_{max}$ model on $C_{min}$ is a pragmatic solution that balances theoretical correctness with practical stability. The finding that all approved doses lie on the plateau of the exposure–response curve is reassuring for clinicians but also highlights the challenge of dose optimization when the dynamic range is narrow. The imprecision in the $EC_{50}$ estimate is a common issue when doses are chosen to be on the plateau, and the authors appropriately acknowledge this. The covariate effects, particularly the longer time to effect in patients with prior treatment failure, have direct clinical implications: these patients may need to be counseled on the expected time course of benefit. Overall, this work sets a high standard for exposure–response modeling of continuous clinical endpoints in neurology.

---

### Bottom Line
Atogepant doses of 10, 30, and 60 mg once daily (and 60 mg for chronic migraine) provide exposures that achieve near-maximal reduction in monthly migraine days, with an estimated $C_{min}$ $EC_{90}$ of 3.71 nM. Patients with prior oral preventive treatment failure or higher baseline MMD may require a longer treatment period (up to 12 weeks) to reach maximal effect. No dose adjustment is needed based on prior preventive use or race, though Asian patients may have a slightly lower overall response. The modeling framework using a compressed normal distribution with $E_{max}$ on $C_{min}$ is a practical and robust approach for analyzing bounded continuous clinical endpoints in migraine trials.

---

---

## 📊 Figures

![Visual predictive checks of monthly migraine days for placebo models of different distributions (A–F). The blue lines represent the 90% PI of the model, the shad]({{ site.baseurl }}/assets/digests/2026-06-28-exposureresponse-modeling-of-monthly-migraine-days-for-efficacy-of-atogepant-in/figures/fig_01.png)

![Visualization of drug effect inEmaxbase models for patients with episodic migraine (left column) and patients with chronic migraine (right column). Exposure inte]({{ site.baseurl }}/assets/digests/2026-06-28-exposureresponse-modeling-of-monthly-migraine-days-for-efficacy-of-atogepant-in/figures/fig_02.png)

![Visual predictive checks of (A) monthly migraine days and (B) change from baseline in monthly migraine days. The blue lines represent the 90% PI of the model, an]({{ site.baseurl }}/assets/digests/2026-06-28-exposureresponse-modeling-of-monthly-migraine-days-for-efficacy-of-atogepant-in/figures/fig_03.png)