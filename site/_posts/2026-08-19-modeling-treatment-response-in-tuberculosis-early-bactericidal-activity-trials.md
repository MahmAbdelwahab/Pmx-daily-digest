---
layout: post
title: "Modeling Treatment Response in Tuberculosis Early Bactericidal Activity Trials"
date: 2026-08-19
authors: "McClean MCW, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70311"
paper_type: popk
tags: [popk]
excerpt_text: "This study evaluates TB-MBLA, a novel RT-qPCR assay, as a treatment response biomarker in EBA trials for BTZ-043 and introduces probabilistic PCA (pPCA) as a joint modeling framework for combining bacteriological biomarkers. Pharmacometricians and TB drug developers should read this for insights into biomarker selection in EBA trials and the potential of latent variable approaches to improve statistical power when combining CFU, TTP, and molecular assays."
pdf_path: "/assets/digests/2026-08-19-modeling-treatment-response-in-tuberculosis-early-bactericidal-activity-trials/PMx_Modeling_Treatment_Response_in_Tuberculo_20260819.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study evaluates TB-MBLA, a novel RT-qPCR assay, as a treatment response biomarker in EBA trials for BTZ-043 and introduces probabilistic PCA (pPCA) as a joint modeling framework for combining bacteriological biomarkers. Pharmacometricians and TB drug developers should read this for insights into biomarker selection in EBA trials and the potential of latent variable approaches to improve statistical power when combining CFU, TTP, and molecular assays.

---

### Executive Summary
This study from the PanACEA consortium evaluates the Tuberculosis Molecular Bacterial Load Assay (TB-MBLA) as a treatment response biomarker in early bactericidal activity (EBA) trials and introduces probabilistic principal component analysis (pPCA) as a joint modeling framework for combining multiple bacteriological biomarkers. Using data from 78 patients in the BTZ-043 Phase Ib/IIa trial, the authors found no exposure-response signal for TB-MBLA alone over the 14-day treatment window, contrasting with significant signals detected in CFU and MGIT TTP. However, when combining CFU and TTP via pPCA, the resulting PC1 latent variable improved statistical precision (ΔOFV = −12.55) compared with either biomarker alone, and this approach proved generalizable in an independent validation dataset. The study provides important context on the differential visibility of bacterial subpopulations across assays and demonstrates that latent variable modeling can enhance detection of treatment effects in EBA trials while being robust to the missing data that plagues culture-based approaches.

---

### Scientific Context & Motivation
EBA trials are pivotal in TB drug development, but culture-based biomarkers (CFU on solid media, TTP in liquid media) are slow, technically complex, and susceptible to contamination and missing data. TB-MBLA, an RT-qPCR assay targeting 16S rRNA, offers a rapid non-culture alternative that quantifies all viable bacteria, potentially capturing non-cultivable subpopulations missed by culture methods. However, its performance as a pharmacodynamic biomarker in EBA trials had not been systematically evaluated. Additionally, while each assay captures distinct but overlapping bacterial subpopulations, they are typically modeled separately, leaving a gap in understanding how joint modeling might reveal shared treatment-response signals. This study addresses both gaps by evaluating TB-MBLA in a well-characterized EBA trial and introducing pPCA as a principled framework for combining biomarkers.

---

## ⚡ Methodological Snapshot
The study combines three analytical approaches: (1) probabilistic PCA (pPCA) via the pca-magic Python package to derive a latent variable (PC1) summarizing the joint distribution of CFU, MGIT TTP, and TB-MBLA biomarkers; (2) linear mixed models with random intercepts and slopes for dose-response analysis; and (3) non-linear mixed effects models in NONMEM 7.5 for PK-PD exposure-response analysis using bi-linear (stepwise linear) time models with Emax exposure-response relationships on the first slope. The approach was validated in an independent dataset from the NC-003-C-J-Pa-Z trial.

---

## 🏗️ Structural Model Breakdown
The PK-PD models used a bi-linear (stepwise linear) structure with a node point where the slope changes. For TB-MBLA, the node was estimated at 2 days; for PC1 from all 3 markers, at 3.2 days; for PC1 from CFU+TTP, at 2.8 days. The exposure-response relationship was modeled as an Emax function of BTZ-043total AUC0-24 on the first slope (days 0–3). Interindividual variability was log-normally distributed for TB-MBLA data and normally distributed for PC1 intercepts. Residual error was additive on the log scale. The pPCA model used a latent variable structure where the observed biomarker vector x = Wz + μ + ε, with PC1 representing the direction of greatest variance (86% for 3-marker, 84% for validation dataset).

---

### Detailed Methodological Analysis

#### Modeling Approach
Linear mixed models with random intercepts and slopes for dose-response analysis; non-linear mixed effects models (NONMEM 7.5 with Pirana 2.9.9 and PsN 5.3.0) for PK-PD exposure-response analysis; probabilistic PCA (pPCA) via pca-magic Python package for joint biomarker modeling. Bi-linear (stepwise linear) models with node estimation were used for time-course modeling, with Emax exposure-response relationships tested on the slopes.

#### Data Sources
78 patients from PanACEA BTZ-043-02 Phase Ib/IIa trial (24 in Phase Ib, 54 in Phase IIa) across 2 South African sites. Sputum samples collected at Screening and Days 0, 2, 3, 4, 6, 8, 11, 14. TB-MBLA (LifeArc) data generated from frozen stored sputum samples. Validation dataset: NC-003-C-J-Pa-Z trial with clofazimine, pyrazinamide, bedaquiline, and pretomanid arms, accessed via TB-Platform for Aggregation of Clinical TB Studies repository.

#### Estimation Methods
Maximum likelihood estimation via NONMEM 7.5 for PK-PD models; likelihood ratio tests based on ΔOFV with −3.84 threshold (p < 0.05); pPCA parameter estimation via expectation-maximization implemented in pca-magic Python package; linear mixed models fitted with standard maximum likelihood methods.

#### Model Evaluation
Visual predictive checks (VPCs) for PK-PD models; comparison of coefficient of variation (CV) and standard errors for dose-response model precision; qualitative comparison of ΔOFV across models as a measure of statistical precision; validation in an independent dataset to assess generalizability.

#### Covariate Analysis
Stepwise covariate modeling examining age, HIV status, and site on exposure-response parameters, as in the original analyses. No significant associations were identified for TB-MBLA or PC1 models.

---

### Statistical Rigor Assessment
The study employed appropriate statistical methods including likelihood ratio tests with pre-specified thresholds (ΔOFV = −3.84, p < 0.05). The pPCA framework is robust to missing data, allowing inclusion of all patients with at least one assay measurement at a given time point. The validation in an independent dataset strengthens the generalizability of the findings. However, the sample size (78 patients) is modest for covariate analysis, and the comparison of ΔOFV across different biomarkers is qualitative rather than formal. The authors appropriately acknowledge the Gaussian assumptions of pPCA and the assumption of shared exposure-response across biomarkers. The use of standard errors rather than CV for the validation dataset due to near-zero coefficient values is a reasonable methodological adaptation.

---

## 📊 Key Findings
TB-MBLA showed 0% contamination (vs 0.9% for MGIT TTP and 8.4% for solid CFU) and no data below the limit of quantification, demonstrating technical robustness. However, no exposure-response signal was detected for TB-MBLA in the PK-PD analysis, in contrast with CFU and TTP. The pPCA-derived PC1 from all three biomarkers explained 86% of total variance and showed a significant Emax exposure-response (ΔOFV = −5.535, p = 0.0186) on the first slope (days 0–3). The CFU+TTP combination yielded the greatest statistical resolution (ΔOFV = −12.55, p = 3.9 × 10⁻⁴), outperforming either biomarker alone. Adding TB-MBLA to any combination reduced precision, suggesting the assay captured different bacterial subpopulations with limited treatment signal in the 14-day window. The pPCA framework generalized to an independent validation dataset (NC-003-C-J-Pa-Z trial), where PC1 explained 84% of variance and improved precision over CFU alone.

---

## 💡 Clinical & Regulatory Implications
The findings suggest that EBA trial design should consider the drug-bacterial subpopulation axis when selecting biomarkers. For BTZ-043, culture-based markers (CFU, TTP) remain the most informative for 14-day EBA studies, while TB-MBLA may require longer observation windows to capture effects on persistent bacterial subpopulations. The pPCA joint modeling approach offers a practical method to improve statistical power in EBA trials without increasing sample size, which could reduce trial costs and duration. The robustness to missing data is particularly valuable given the high contamination rates in culture-based assays (8.4% for CFU in this study). These findings have implications for regulatory submissions and MIDD approaches in TB drug development.

---

### Strengths & Limitations

#### Strengths
- Novel application of pPCA as a joint modeling framework for TB biomarkers, robust to missing data
- Validation of the approach in an independent trial dataset with different antimycobacterial compounds
- Comprehensive comparison of three biomarkers (CFU, TTP, TB-MBLA) and all pairwise combinations
- High-quality data generation with TB-MBLA showing 0% contamination
- Clear demonstration of the differential information content across assays
- Practical, computationally simple approach requiring no specialized software beyond standard PCA implementations

#### Limitations (Acknowledged by Authors)
- pPCA relies on Gaussian distributional and temporal linearity assumptions that may not reflect true temporal covariance of biomarkers
- Assumption of the same exposure-response relationship across biomarkers may not hold for other compounds
- Dose-response model for validation data approximates the original Bayesian hierarchical NLME model, though authors note the original authors found similar results with simpler regression methods

#### Limitations (Expert Review)
- Relatively small sample size (78 patients) limits power for covariate analysis
- Single compound (BTZ-043) evaluation; results may not generalize to other drug classes
- 14-day EBA window may be too short to capture TB-MBLA treatment effects, as suggested by murine data showing maximal differences at 4–6 weeks
- The pPCA approach assumes linear relationships between biomarkers, which may oversimplify complex biological dynamics
- Comparison of ΔOFV across different biomarkers is qualitative rather than a formal statistical test

#### Generalizability
The pPCA framework demonstrated generalizability across two independent trial datasets with different compounds (BTZ-043 and clofazimine/pyrazinamide/bedaquiline/pretomanid combinations). However, the specific finding that TB-MBLA lacks exposure-response signal may be compound-specific, as BTZ-043's mechanism and lesion penetration profile may not be representative of all antimycobacterial agents. The approach is likely most generalizable to culture-based biomarkers (CFU and TTP), which showed consistent improvement in precision when combined.

---

### Key Equations

**pPCA Generative Model**

{% raw %}
$$
x = Wz + \mu + \varepsilon
$$
{% endraw %}

Generative model for probabilistic PCA, where x is the observed biomarker vector, W is the loading matrix, z is the latent variable (PC scores), μ is the mean vector, and ε is Gaussian noise with variance σ².

**Posterior Mean of PC Scores**

{% raw %}
$$
E[z|x] = (W^T W + \sigma^2 I)^{-1} W^T (x - \mu)
$$
{% endraw %}

Posterior mean of the latent variable (PC scores) given observed data, calculated via Bayes theorem (Equation 3 in the paper). This allows estimation of PC scores even with missing data points.

**Emax Exposure-Response Model**

{% raw %}
$$
E = E_0 + \frac{E_{max} \cdot AUC}{AUC_{50} + AUC}
$$
{% endraw %}

Emax exposure-response model relating BTZ-043 total AUC0-24 to the biomarker effect E, where E₀ is the baseline effect, Emax is the maximum effect, and AUC₅₀ is the AUC producing half-maximal effect.

**Bi-linear (Stepwise Linear) Time Model**

{% raw %}
$$
E(t) = \begin{cases} E_0 + \text{slope}_1 \cdot t, & t < t_{\text{node}} \\ E_0 + \text{slope}_1 \cdot t_{\text{node}} + \text{slope}_2 \cdot (t - t_{\text{node}}), & t \geq t_{\text{node}} \end{cases}
$$
{% endraw %}

Bi-linear mixed model describing the change in biomarker over time with a node point where the slope changes. The node was estimated at 2 days for TB-MBLA, 3.2 days for 3-marker PC1, and 2.8 days for CFU+TTP PC1.

---

### Figures & Tables

- **Figure 1**: Spaghetti plots of per-patient trajectories in each biomarker (CFU, MGIT TTP, TB-MBLA) and PC1 values over time, by phase (Ib and IIa). Colored lines represent the median over time.
  - *Significance*: Provides a visual overview of the raw data and demonstrates the temporal trends in each biomarker, highlighting the differential patterns between culture-based and molecular assays.
- **Figure 2**: Probabilistic Principal Component Analysis biplot showing PC1 and PC2 loadings for CFU, MGIT TTP, and TB-MBLA, with each datapoint representing an individual patient at a single timepoint.
  - *Significance*: Illustrates the relationships between the three biomarkers in the latent variable space and demonstrates that PC1 is equally informed by all three assays, explaining 86% of total variance.
- **Figure 3**: Precision of linear mixed effect modeling coefficients for individual assays and PC1 values, showing forest plots of treatment arm slopes and coefficient of variation (CV) comparisons.
  - *Significance*: Demonstrates that PC1 provides more precise dose-response estimates than CFU or TB-MBLA alone, while MGIT TTP exhibits the greatest precision among single assays.
- **Figure 4**: Visual predictive check plots of (A) TB-MBLA only, (B) 3-marker PCA (TTP + CFU + TB-MBLA), and (C) 2-marker PCA (TTP + CFU) PK-PD models.
  - *Significance*: Shows the model fit quality for each biomarker approach and visually confirms the adequacy of the bi-linear model structure with Emax exposure-response.
- **Figure 5**: Precision of linear mixed effect modeling by assay in the validation dataset (NC-003-C-J-Pa-Z trial), showing forest plots of treatment arm slopes.
  - *Significance*: Demonstrates the generalizability of the pPCA approach to an independent trial with different antimycobacterial compounds, confirming that PC1 improves precision over CFU alone.
- **Table 1**: PC loadings for the 3-marker pPCA showing PC1 loadings of −0.545 (CFU), 0.602 (MGIT TTP), and −0.584 (TB-MBLA), with 86% total variance explained by PC1.
  - *Significance*: Confirms that PC1 is equally informed by all three assays and provides the biological interpretation that lower PC1 values represent higher bacterial load.
- **Table 2**: ΔOFV and p-values for exposure-response relationships analyzed with MGIT TTP, CFU, TB-MBLA, and all pairwise combinations derived via pPCA.
  - *Significance*: Key quantitative result showing the CFU+TTP combination has the greatest statistical resolution (ΔOFV = −12.55), and that adding TB-MBLA reduces precision in all combinations.
- **Table 3**: PC loadings for the validation dataset pPCA showing PC1 loadings of −0.694 (CFU) and 0.716 (MGIT TTP), with 84% variance explained.
  - *Significance*: Confirms that the pPCA framework produces similar latent structure in an independent dataset, supporting the generalizability of the approach.
- **Table 4**: Standard errors of slope estimates for each treatment group in the validation dataset, comparing CFU, MGIT TTP, and PC1 models.
  - *Significance*: Shows that MGIT TTP estimates are most precise, followed by PC1, which is more precise than CFU alone, mirroring the results from the original dataset.

---

### Code & Reproducibility Assessment
Code for the pPCA model is available at https://github.com/mairi-mcclean/BTZ-043_pPCA.git. Data access requires request to corresponding authors. NONMEM model code for the PK-PD analyses is not explicitly mentioned as being shared.

---

### Supplementary Materials
Supplementary materials include Tables S1–S2 (summary statistics of all assays over time by treatment group), Table S3 (CV values for dose-response slopes), Tables S4–S6 (complete PK-PD model parameters for TB-MBLA and PC1 models), Table S7 (full ΔOFV comparison for all pPCA iterations), and Figures S1–S3 (forest plots for all pPCA combinations and per-patient trajectories for the validation dataset).

---

### Future Directions
Future work should evaluate TB-MBLA in longer Phase II trials (>14 days) to determine if the assay captures treatment effects on persistent bacterial subpopulations that emerge later in therapy. The pPCA framework could be extended to allow non-linear inter-biomarker relationships and more flexible temporal covariance structures. Application of the joint modeling approach to other antimycobacterial compounds with different mechanisms of action would help establish generalizability. Additionally, exploring whether the pPCA approach can be integrated with model-based meta-analysis across trials would be valuable.

---

### Expert Commentary
As a senior pharmacometrician, I find this study particularly valuable for its pragmatic approach to a common problem: how to leverage multiple correlated biomarkers in drug development. The pPCA approach is elegant in its simplicity — it requires no specialized software beyond standard PCA implementations and is robust to the missing data that is endemic in TB trials. The finding that TB-MBLA did not show exposure-response is scientifically important and highlights the need to understand the biological basis of biomarker differences. The differential performance of biomarkers across dose-response and exposure-response tasks is a subtle but important observation — the PC1-based endpoint was more precise for exposure-response but not necessarily for dose-response, suggesting that endpoint selection should be task-specific. This study also underscores the importance of understanding which bacterial subpopulations each assay captures, and how this relates to drug mechanism of action. The validation in an independent dataset is a model of good practice that should be emulated.

---

### Bottom Line
For practicing pharmacometricians, this study provides two key takeaways: (1) TB-MBLA, despite its technical advantages (0% contamination, rapid turnaround), did not show exposure-response signal for BTZ-043 in a 14-day EBA trial, suggesting that non-culture assays may capture bacterial subpopulations with different treatment dynamics that require longer observation windows; and (2) pPCA-based joint modeling of CFU and TTP is a practical, computationally simple approach to improve statistical precision in EBA exposure-response analyses, with the CFU+TTP combination yielding the greatest improvement (ΔOFV = −12.55 vs −11.30 for CFU alone). This latent variable framework is robust to missing data and generalizable across trials, making it a valuable addition to the EBA modeling toolkit.

---

---

## 📊 Figures

![Spaghetti plots of per-patient trajectories in each biomarker and PC1 values over time, by phase. The colored lines represent the median over time. Breaks in ind]({{ site.baseurl }}/assets/digests/2026-08-19-modeling-treatment-response-in-tuberculosis-early-bactericidal-activity-trials/figures/fig_01.jpg)

![Probabilistic Principal Component Analysis biplot. Each datapoint is from an individual patient at a single timepoint. The black lines—vectors—represent the rela]({{ site.baseurl }}/assets/digests/2026-08-19-modeling-treatment-response-in-tuberculosis-early-bactericidal-activity-trials/figures/fig_02.jpg)

![Precision of linear mixed effect modeling coefficients for individual assays and PC1 values. Linear mixed models were constructed with a treatment-by-time intera]({{ site.baseurl }}/assets/digests/2026-08-19-modeling-treatment-response-in-tuberculosis-early-bactericidal-activity-trials/figures/fig_03.jpg)

![Visual predictive check plots of (A) TB-MBLA only, (B) 3-marker PCA (TTP + CFU + TB-MBLA) and (C) 2-marker PCA (TTP + CFU). Plots examining the model fit of each]({{ site.baseurl }}/assets/digests/2026-08-19-modeling-treatment-response-in-tuberculosis-early-bactericidal-activity-trials/figures/fig_04.jpg)

![Precision of linear mixed effect modeling by assay in the validation dataset. Linear mixed models were constructed with a treatment-by-time interaction term as a]({{ site.baseurl }}/assets/digests/2026-08-19-modeling-treatment-response-in-tuberculosis-early-bactericidal-activity-trials/figures/fig_05.jpg)