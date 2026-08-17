---
layout: post
title: "Modeling Treatment Response in Tuberculosis Early Bactericidal Activity Trials"
date: 2026-08-17
authors: "McClean MCW, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(8)"
doi: "10.1002/psp4.70311"
paper_type: popk
tags: [popk, dose-response]
excerpt_text: "This paper evaluates the novel RT-qPCR-based TB-MBLA assay as a biomarker in tuberculosis early bactericidal activity (EBA) trials using data from the PanACEA BTZ-043 Phase Ib/IIa study. While TB-MBLA showed no exposure-response signal for BTZ-043, the authors demonstrate that probabilistic principal component analysis (pPCA) combining CFU and TTP data improves statistical precision for detecting treatment effects. Pharmacometricians designing EBA trials should consider this latent-variable framework for joint modeling of bacteriological biomarkers."
pdf_path: "/assets/digests/2026-08-17-modeling-treatment-response-in-tuberculosis-early-bactericidal-activity-trials/PMx_Modeling_Treatment_Response_in_Tuberculo_20260817.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper evaluates the novel RT-qPCR-based TB-MBLA assay as a biomarker in tuberculosis early bactericidal activity (EBA) trials using data from the PanACEA BTZ-043 Phase Ib/IIa study. While TB-MBLA showed no exposure-response signal for BTZ-043, the authors demonstrate that probabilistic principal component analysis (pPCA) combining CFU and TTP data improves statistical precision for detecting treatment effects. Pharmacometricians designing EBA trials should consider this latent-variable framework for joint modeling of bacteriological biomarkers.

---

### Executive Summary
This study addresses the limitations of culture-based biomarkers in tuberculosis EBA trials by evaluating TB-MBLA, a non-culture RT-qPCR assay, and exploring joint modeling of multiple biomarkers via probabilistic principal component analysis (pPCA). Using paired TB-MBLA, CFU, and MGIT TTP data from 78 patients in the PanACEA BTZ-043 Phase Ib/IIa trial, the authors found no exposure-response signal for TB-MBLA over 14 days, contrasting with CFU and TTP. However, pPCA combining CFU and TTP improved statistical precision (ΔOFV = −12.55 vs −11.30 for CFU and −11.11 for TTP alone), and this framework generalized to an independent clofazimine/pyrazinamide EBA dataset. The study provides novel EBA data for BTZ-043 and demonstrates that latent-variable joint modeling can enhance detection of treatment effects while being robust to missing data.

---

### Scientific Context & Motivation
EBA trials are pivotal in TB drug development but rely on slow, contamination-prone culture assays (CFU and TTP) that capture different bacterial subpopulations. TB-MBLA, quantifying 16S rRNA, offers a faster non-culture alternative but its utility as a pharmacodynamic biomarker is unproven. The field lacks consensus on how to integrate multiple biomarkers that reflect overlapping yet distinct bacterial subpopulations. This paper addresses the gap by (1) generating the first TB-MBLA EBA data for BTZ-043, a first-in-class DprE1 inhibitor, and (2) proposing pPCA as a simple, missing-data-robust framework for joint modeling of bacteriological markers.

---

## ⚡ Methodological Snapshot
The study applies probabilistic principal component analysis (pPCA) to jointly model three bacteriological biomarkers (CFU, MGIT TTP, TB-MBLA) from a Phase Ib/IIa EBA trial of BTZ-043. PC1 scores are used as a composite biomarker in linear mixed models (dose-response) and non-linear mixed effects models (exposure-response) implemented in NONMEM. The pPCA framework is validated in an independent EBA dataset with different compounds.

---

## 🏗️ Structural Model Breakdown
The structural model for TB-MBLA was a bi-linear (stepwise linear) mixed model with a node at 2 days, random intercept, and additive residual error on the log10 scale. The PC1-based model was also bi-linear with a node at 3.2 days (3-marker pPCA) or 2.8 days (2-marker CFU+TTP pPCA), with a significant Emax exposure-response on the first slope. The pPCA model itself is a latent variable model: X = Wx + μ + ε, where X is the observed biomarker matrix, W contains loadings, x are latent PC scores, and ε is Gaussian noise.

---

### Detailed Methodological Analysis

#### Modeling Approach
Probabilistic principal component analysis (pPCA) using the pca-magic Python package to derive PC1 scores from log-transformed biomarker data. Dose-response was modeled with linear mixed effects models (random intercepts and slopes). Exposure-response was modeled with non-linear mixed effects models in NONMEM 7.5, testing linear and Emax relationships with BTZ-043 total AUC0-24, with bi-linear (stepwise) models for time trends.

#### Data Sources
78 patients from PanACEA BTZ-043-02 Phase Ib/IIa trial (NCT04044001) across 2 South African sites. Sputum samples at Screening and Days 0, 2, 3, 4, 6, 8, 11, 14. Paired CFU (Middlebrook 7H11 agar), MGIT TTP (BACTEC MGIT 960), and TB-MBLA (LifeArc RT-qPCR) measurements. Validation dataset: NC-003-C-J-Pa-Z trial with clofazimine/pyrazinamide/bedaquiline/pretomanid arms, accessed via TB-Platform.

#### Estimation Methods
Maximum likelihood for pPCA. For PK-PD models: NONMEM 7.5 with first-order conditional estimation (FOCE) as implemented in the original analysis. Linear mixed models for dose-response used standard REML estimation. Model selection via likelihood ratio test (LRT) with ΔOFV threshold of −3.84 (p<0.05).

#### Model Evaluation
Visual predictive checks (VPCs) for PK-PD models. Precision of dose-response estimates assessed via coefficients of variation (CV) for the BTZ-043 dataset and standard errors for the validation dataset. Qualitative comparison of ΔOFV across biomarker combinations.

#### Covariate Analysis
Stepwise covariate modeling examining effects of age, HIV status, and site on exposure-response parameters, as in the original analysis. No significant covariate effects were identified for TB-MBLA or PC1 models.

---

### Statistical Rigor Assessment
The study uses appropriate mixed effects modeling with formal LRT-based model selection. The pPCA framework is statistically sound for missing data handling. However, the comparison of ΔOFV across different biomarkers is qualitative and does not account for differences in data scale or information content. The validation dataset analysis uses a simplified model compared to the original Bayesian hierarchical approach, which may affect comparability. Sample size (78 patients) is typical for EBA trials but limits power for covariate detection. No formal sensitivity analyses were reported for pPCA implementation choices.

---

## 📊 Key Findings
TB-MBLA showed no exposure-response relationship with BTZ-043 total AUC0-24 over 14 days, in contrast to CFU and TTP. A bi-linear model with a node at 2 days best described TB-MBLA decline, but no drug effect was detected. pPCA-derived PC1 from all three markers explained 86% of variance and showed a significant Emax exposure-response on the early slope (days 0–3), but with lower precision (ΔOFV = −5.535) than CFU or TTP alone. Combining only CFU and TTP via pPCA yielded the greatest statistical resolution (ΔOFV = −12.55), outperforming either marker alone. The pPCA framework generalized to an independent dataset (clofazimine/pyrazinamide EBA), where PC1 explained 84% of variance and improved precision over CFU, though not over TTP. TB-MBLA had 0% contamination versus 8.4% for CFU and 0.9% for TTP.

---

## 💡 Clinical & Regulatory Implications
The lack of TB-MBLA exposure-response signal for BTZ-043 suggests that TB-MBLA may not be suitable as a primary EBA endpoint for all compounds, particularly those with activity against persister populations that require longer treatment durations. The improved precision from pPCA-based joint modeling of CFU and TTP supports its use in EBA trial analysis to reduce sample size requirements or increase statistical power. The framework's robustness to missing data is clinically relevant given the high contamination rates in culture assays. For regulatory submissions, these findings suggest that joint modeling approaches could complement traditional single-biomarker analyses, though further validation is needed.

---

### Strengths & Limitations

#### Strengths
- First evaluation of TB-MBLA as a pharmacodynamic biomarker in a dose-ranging EBA trial for a novel compound (BTZ-043)
- Novel application of pPCA for joint modeling of multiple bacteriological biomarkers, robust to missing data
- Validation of the pPCA framework in an independent EBA dataset with different compounds
- Comprehensive comparison of single and combined biomarkers in both dose-response and exposure-response frameworks
- High-quality clinical trial data with paired CFU, TTP, and TB-MBLA measurements across 8 timepoints

#### Limitations (Acknowledged by Authors)
- pPCA relies on Gaussian distributional and temporal linearity assumptions that may not reflect true biomarker covariance, especially in longer studies
- PK-PD models assume the same exposure-response relationship across biomarkers, which may not hold for other compounds
- The dose-response model for the validation dataset approximates the original Bayesian hierarchical NLME model rather than replicating it exactly
- Two-week EBA timeframe may be insufficient to capture BTZ-043's bactericidal activity as measured by TB-MBLA

#### Limitations (Expert Review)
- The pPCA approach is a dimension-reduction technique that does not explicitly model biological mechanisms or differential subpopulation dynamics
- The comparison of ΔOFV across different biomarkers is qualitative and does not account for differences in data scale or information content
- No formal sensitivity analysis was performed for the choice of pPCA implementation or the handling of missing data beyond the probabilistic framework
- The validation dataset used a simplified linear mixed model rather than the original Bayesian hierarchical model, potentially affecting comparability of precision estimates
- The study does not address whether TB-MBLA's lack of signal reflects true biology or assay noise, limiting interpretability

#### Generalizability
The pPCA framework demonstrated generalizability across two EBA trials with different compounds (BTZ-043 and clofazimine/pyrazinamide/bedaquiline/pretomanid regimens), suggesting broad applicability. However, the finding that TB-MBLA showed no exposure-response may be compound-specific, as BTZ-043's lesion penetration and persister activity may require longer treatment durations. The approach is likely generalizable to other infectious disease settings with multiple biomarkers, but the Gaussian assumptions may limit use in longer studies with non-linear dynamics.

---

---

### Figures & Tables

- **Figure 1**: Spaghetti plots of per-patient trajectories for CFU, MGIT TTP, TB-MBLA, and PC1 values over time, by phase (Ib and IIa), with median lines.
  - *Significance*: Provides visual overview of biomarker dynamics and inter-patient variability across treatment arms, illustrating the data structure used for modeling.
- **Figure 2**: Probabilistic Principal Component Analysis biplot showing patient-level PC scores and loading vectors for CFU, MGIT TTP, and TB-MBLA.
  - *Significance*: Demonstrates that PC1 is equally informed by all three assays and explains 86% of variance, supporting its use as a summary metric of bacterial burden.
- **Figure 3**: Forest plots and coefficient of variation (CV) values for linear mixed model bactericidal slope estimates by treatment arm, comparing CFU, MGIT TTP, TB-MBLA, and PC1.
  - *Significance*: Shows that PC1 provides more precise dose-response estimates than CFU or TB-MBLA alone, though less precise than MGIT TTP.
- **Figure 4**: Visual predictive checks for (A) TB-MBLA only, (B) 3-marker pPCA (TTP+CFU+TB-MBLA), and (C) 2-marker pPCA (TTP+CFU) exposure-response models.
  - *Significance*: Confirms adequate model fit for each biomarker combination and visually supports the finding that TB-MBLA alone lacks exposure-response signal.
- **Figure 5**: Precision of linear mixed model slope estimates by assay in the validation dataset (clofazimine/pyrazinamide EBA trial), comparing CFU, MGIT TTP, and PC1.
  - *Significance*: Demonstrates generalizability of the pPCA framework to an independent trial, with PC1 precision intermediate between CFU and TTP.
- **Table 1**: PC loadings and total variance explained for PC1 and PC2 from pPCA of CFU, MGIT TTP, and TB-MBLA in the BTZ-043 dataset.
  - *Significance*: Quantifies the contribution of each assay to the principal components, showing PC1 is balanced across assays and explains 86% of variance.
- **Table 2**: ΔOFV and p-values for exposure-response relationships with BTZ-043 total AUC0-24 for individual biomarkers and pPCA combinations.
  - *Significance*: Key quantitative comparison showing CFU+TTP pPCA yields the greatest statistical resolution (ΔOFV = −12.55), while adding TB-MBLA reduces precision.
- **Table 3**: PC loadings and variance explained for PC1 from pPCA of CFU and MGIT TTP in the validation dataset.
  - *Significance*: Confirms that PC1 is equally informed by both assays in independent data, supporting the generalizability of the approach.
- **Table 4**: Standard errors of slope estimates by treatment arm for CFU, MGIT TTP, and PC1 in the validation dataset.
  - *Significance*: Shows that PC1 precision is intermediate between CFU and TTP across all treatment arms, mirroring the BTZ-043 dataset results.

---

### Code & Reproducibility Assessment
The code to reproduce the pPCA model is available at https://github.com/mairi-mcclean/BTZ-043_pPCA.git. Data access requires request to corresponding authors. NONMEM models are described but not fully provided.

---

### Supplementary Materials
Supplementary materials include Tables S1-S2 (summary statistics of assays over time by treatment group), Table S3 (CV values for dose-response slopes), Tables S4-S6 (complete PK-PD model parameters), Table S7 (full ΔOFV comparison for all pPCA iterations), and Figures S1-S3 (forest plots for all pPCA combinations and validation dataset trajectories).

---

### Future Directions
Future work should extend the pPCA framework to allow non-linear inter-biomarker relationships and time-varying covariance structures. Longer Phase II trials with TB-MBLA measurements are needed to determine if the assay captures delayed bactericidal effects, particularly for compounds with persister activity like BTZ-043. The framework could be extended to include additional biomarkers (e.g., host response markers) and to model differential subpopulation dynamics explicitly. Validation in larger, more diverse patient populations and with other novel compounds would strengthen generalizability.

---

### Expert Commentary
This paper represents a thoughtful application of latent variable modeling to a practical problem in TB drug development. The finding that TB-MBLA showed no exposure-response for BTZ-043 is biologically plausible given the compound's mechanism and the short EBA window, but it also highlights the risk of adopting new biomarkers without understanding their relationship to drug-specific bacterial subpopulations. The pPCA approach is elegant in its simplicity—it leverages shared variance across assays to improve signal detection while being robust to missing data, a common challenge in culture-based monitoring. However, the qualitative comparison of ΔOFV across different data types is a limitation; a more rigorous approach would use information criteria or bootstrap-based comparisons. The validation in an independent dataset is commendable and strengthens the case for adopting this framework. I would encourage the field to explore extensions that model the biological relationships between biomarkers more explicitly, perhaps through mechanism-based joint models, while recognizing that pPCA offers a pragmatic near-term solution.

---

### Bottom Line
For pharmacometricians working in TB drug development, this paper provides two key takeaways: (1) TB-MBLA, despite its technical advantages, may not capture early bactericidal activity for all compounds—its utility should be evaluated in longer studies and with drugs targeting persister populations; (2) pPCA-based joint modeling of CFU and TTP is a practical, missing-data-robust approach that improves statistical precision for detecting exposure-response in EBA trials. This latent-variable framework should be considered as a standard tool in EBA analysis, particularly when culture data are incomplete.

---

---

## 📊 Figures

![Spaghetti plots of per-patient trajectories in each biomarker and PC1 values over time, by phase. The colored lines represent the median over time. Breaks in ind]({{ site.baseurl }}/assets/digests/2026-08-17-modeling-treatment-response-in-tuberculosis-early-bactericidal-activity-trials/figures/fig_01.jpg)

![Probabilistic Principal Component Analysis biplot. Each datapoint is from an individual patient at a single timepoint. The black lines—vectors—represent the rela]({{ site.baseurl }}/assets/digests/2026-08-17-modeling-treatment-response-in-tuberculosis-early-bactericidal-activity-trials/figures/fig_02.jpg)

![Precision of linear mixed effect modeling coefficients for individual assays and PC1 values. Linear mixed models were constructed with a treatment-by-time intera]({{ site.baseurl }}/assets/digests/2026-08-17-modeling-treatment-response-in-tuberculosis-early-bactericidal-activity-trials/figures/fig_03.jpg)

![Visual predictive check plots of (A) TB-MBLA only, (B) 3-marker PCA (TTP + CFU + TB-MBLA) and (C) 2-marker PCA (TTP + CFU). Plots examining the model fit of each]({{ site.baseurl }}/assets/digests/2026-08-17-modeling-treatment-response-in-tuberculosis-early-bactericidal-activity-trials/figures/fig_04.jpg)

![Precision of linear mixed effect modeling by assay in the validation dataset. Linear mixed models were constructed with a treatment-by-time interaction term as a]({{ site.baseurl }}/assets/digests/2026-08-17-modeling-treatment-response-in-tuberculosis-early-bactericidal-activity-trials/figures/fig_05.jpg)