---
layout: post
title: "AI-Powered Lesion-Level Tumor Growth Inhibition Modeling Improves Model Stability and Prognostic Association With PFS"
date: 2026-06-18
authors: "Liu A, Duan C, Maresca K, Pithavala YK, Hibma J, Lu JT, Guo CC, et al."
journal: "CPT Pharmacometrics Syst Pharmacol. 2025"
doi: "https://pubmed.ncbi.nlm.nih.gov/42287281/"
paper_type: ai-ml
tags: [ai-ml, oncology, regulatory, machine-learning]
excerpt_text: "This study demonstrates that AI-powered lesion-level tumor growth inhibition (TGI) models, using comprehensive measurements from an FDA-cleared deep learning tool (VBrain), provide greater model stability and identify significant prognostic factors for progression-free survival (PFS) compared to traditional RECIST-based aggregated tumor models. The lesion-level models capture individual lesion dynamics and show that mean tumor decay rate ($KD$) and mean lesion size at week 8 are significantly associated with PFS, while aggregated models fail to find any significant covariates. The work highlights the value of AI-enabled lesion quantification for improving pharmacometric modeling and early clinical decision-making."
pdf_path: "/assets/digests/2026-06-18-ai-powered-lesion-level-tumor-growth-inhibition-modeling-improves-model/PMx_AIPowered_LesionLevel_Tumor_Growth_Inhib_20260618.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study demonstrates that AI-powered lesion-level tumor growth inhibition (TGI) models, using comprehensive measurements from an FDA-cleared deep learning tool (VBrain), provide greater model stability and identify significant prognostic factors for progression-free survival (PFS) compared to traditional RECIST-based aggregated tumor models. The lesion-level models capture individual lesion dynamics and show that mean tumor decay rate ($KD$) and mean lesion size at week 8 are significantly associated with PFS, while aggregated models fail to find any significant covariates. The work highlights the value of AI-enabled lesion quantification for improving pharmacometric modeling and early clinical decision-making.

---

### Executive Summary
This paper presents a comparative analysis of tumor growth inhibition (TGI) modeling using traditional RECIST 1.1-based aggregated tumor measurements versus AI-powered lesion-level measurements from the VBrain tool in the phase III CROWN trial (lorlatinib vs crizotinib in ALK+ NSCLC). The authors developed biexponential TGI models for both aggregated (sum of longest diameters, sum of volumes) and lesion-level (individual longest diameter and 3D volume) data, and linked them to progression-free survival (PFS) via parametric time-to-event models. Key findings include: (1) AI-derived aggregated models showed better precision and robustness than RECIST-based models, as assessed by stochastic simulation and estimation (SSE); (2) lesion-level models identified mean tumor decay rate ($KD$) and mean lesion size at week 8 as significant prognostic factors for PFS, whereas aggregated models did not; (3) the increased lesion sampling enabled by AI (1642 vs 354 observations) was the primary driver of improved model performance. The study provides a framework for incorporating AI-derived lesion measurements into pharmacometric modeling and supports early decision-making for lesion-targeted therapies.

---

### Scientific Context & Motivation
RECIST 1.1 is the standard for tumor response assessment but is labor-intensive, subject to reader variability, and limits assessment to up to five target lesions, potentially missing heterogeneous lesion dynamics. Traditional TGI models aggregate all lesions into a single sum of diameters (SLD), which can obscure individual lesion progression. There is a need for more comprehensive, lesion-level modeling that captures inter-lesion variability and improves prognostic association with clinical outcomes like PFS. This study addresses whether AI-powered automated lesion measurement (VBrain) can provide richer lesion-level data and whether lesion-level TGI models outperform aggregated models in predicting PFS.

---

## ⚡ Methodological Snapshot
The study uses a biexponential tumor growth inhibition (TGI) model (Stein model) to characterize longitudinal tumor size data. For aggregated models, the sum of longest diameters (SLD) or sum of volumes (SVOL) is modeled. For lesion-level models, each individual lesion's longest diameter or volume is modeled with inter-individual and inter-lesion variability. The PFS model uses a Weibull parametric time-to-event model. Covariate analysis via stepwise covariate modeling (SCM) identifies significant predictors. Model robustness is assessed via stochastic simulation and estimation (SSE) with 500 simulated datasets.

---

## 🤖 Task Framing
Prediction of progression-free survival (PFS) from longitudinal tumor growth dynamics. The task is to identify which TGI-derived metrics (e.g., $KD$, $KL$, predicted lesion size at week 8) are significantly associated with PFS, enabling early risk stratification.

---

### Dataset Description
Data from the phase III CROWN trial (NCT03052608) comparing lorlatinib vs crizotinib in ALK+ NSCLC. Two datasets: (1) RECIST-based: 31 patients, 259 observations, up to 5 target lesions per patient (≥5mm). (2) AI-derived (VBrain): same 31 patients, 354 aggregated tumor observations (SLD, SVOL) and 1642 individual lesion observations (up to 47 lesions per patient, ≥2mm). Lesion-level data includes longest diameter and 3D volume. Training/validation: no explicit split; internal validation via VPC and SSE.

---

### Model Architecture
Biexponential TGI model: $dT/dt = KL \cdot T - KD \cdot T$ (for growth and decay). For aggregated: $T = SLD$ or $T = SVOL$. For lesion-level: each lesion has its own $KL$ and $KD$ with inter-individual and inter-lesion variability. PFS model: Weibull hazard $h(t) = \lambda \cdot t^{\gamma-1}$. Covariates: mean $KD$, mean lesion size at week 8. Implementation in NONMEM 7.5.

---

### Training Details
Nonlinear mixed-effects modeling (NONMEM). Estimation via FOCE. No explicit regularization. SSE: 500 datasets simulated from the model, then re-estimated. Sampling times: week 0,8,16,24,32,40,48,56. Population sizes: 24-72. No dropout modeling (only 1 patient discontinued in first year).

---

### Evaluation Metrics
For TGI models: relative standard error (RSE), condition number, shrinkage, visual predictive checks (VPC). For SSE: relative bias and relative root mean square error (RMSE) thresholds (≤20% bias, ≤40% RMSE). For PFS model: Kaplan-Meier VPC, p-values from SCM (forward 0.05, backward 0.01).

---

### Deployment Caveats
Generalizability limited to ALK+ NSCLC and intracranial lesions. No external validation. Data from single trial. AI tool (VBrain) is specific to brain lesions. The increased lesion sampling is the main driver; results may not generalize to other AI tools. No handling of informative dropout. Retrospective analysis; prospective use requires validation.

---

## 📊 Key Findings
1) AI-derived aggregated TGI models (SLD and volume) showed lower relative standard errors (RSE) and passed SSE stability thresholds (bias ≤20%, RMSE ≤40%) with 36-60 patients, whereas RECIST-based models failed even with 72 patients. 2) Lesion-level models (using 1642 observations) identified mean $KD$ (p=0.008) and mean lesion size at week 8 (p=0.0001) as significant predictors of PFS, with higher $KD$ associated with lower PFS probability (due to correlation with number of baseline lesions) and larger week-8 size associated with higher PFS (inversely correlated with baseline size). 3) Aggregated models found no significant covariates for PFS. 4) The improved performance is attributed to increased lesion sampling enabled by AI, not to measurement superiority per se.

---

### Strengths & Limitations

#### Strengths
- Comprehensive comparison of RECIST vs AI-derived measurements in TGI modeling
- Use of stochastic simulation and estimation (SSE) to quantify model robustness
- Development of both aggregated and lesion-level models from the same dataset
- Identification of clinically relevant prognostic factors ($KD$, week-8 lesion size)
- Use of FDA-cleared AI tool (VBrain) for automated lesion measurement
- Large lesion-level dataset (1642 observations) enabling detailed modeling
- Clear demonstration that increased lesion sampling drives model improvement

#### Limitations (Acknowledged by Authors)
- SSE stability metrics represent an idealized scenario without informative dropout
- Only one patient discontinued within first year; no dropout model implemented
- Like-for-like sensitivity analysis to isolate measurement methodology from lesion sampling is outside scope
- Mean $KD$ from lesion-level modeling is not equivalent to traditional KD
- Correlation between $KD$ and number of baseline lesions may confound interpretation
- Retrospective study; prospective application needed

#### Limitations (Expert Review)
- Small sample size (31 patients) limits generalizability
- No external validation dataset
- Potential overfitting due to many parameters in lesion-level model (5 lesions per patient)
- Covariate analysis uses mean values, may not capture full heterogeneity
- No comparison with other ML methods (e.g., random survival forests) for PFS prediction
- PFS endpoint includes both intracranial and extracranial progression, but only intracranial lesions modeled
- No formal handling of missing data or dropout beyond 1 year

#### Generalizability
The findings are specific to ALK+ NSCLC and lorlatinib/crizotinib; generalizability to other tumor types and therapies is uncertain. The AI tool (VBrain) is specific to brain lesions; applicability to other anatomical sites may differ. The modeling framework is generalizable but requires similar AI-enabled lesion quantification.

---

### Key Equations

**Biexponential TGI model**

{% raw %}
$$
\frac{dT}{dt} = KL \cdot T - KD \cdot T
$$
{% endraw %}

Describes tumor size (T) change over time with growth rate (KL) and decay rate (KD).

**Weibull hazard for PFS**

{% raw %}
$$
h(t) = \lambda \cdot t^{\gamma - 1}
$$
{% endraw %}

Parametric time-to-event model for progression-free survival hazard.

---

### Figures & Tables

- **Figure 1**: Prediction-corrected VPC of AI-derived SLD model showing observed vs simulated tumor data for lorlatinib and crizotinib arms.
  - *Significance*: Validates the AI-derived aggregated TGI model's predictive performance.
- **Figure 2**: Prediction-corrected VPC of AI-derived lesion-level volumetric model showing individual lesion dynamics.
  - *Significance*: Validates the lesion-level TGI model's ability to capture inter-lesion variability.
- **Figure 3**: Kaplan-Meier VPC for final PFS model stratified by mean $KD$ (left) and mean week-8 lesion size (right).
  - *Significance*: Demonstrates prognostic value of lesion-level metrics for PFS.
- **Table 1**: Parameter estimates for RECIST-based SLD model (31 patients, 259 observations).
  - *Significance*: Shows higher RSE and condition number compared to AI-derived models.
- **Table 2**: Parameter estimates for AI-derived SLD model (31 patients, 354 observations).
  - *Significance*: Shows improved precision (lower RSE) and lower shrinkage.
- **Table 3**: Parameter estimates for AI-derived SVOL model (31 patients, 354 observations).
  - *Significance*: Shows similar improvements over RECIST-based model.
- **Table 4**: Parameter estimates for AI-derived lesion-level volumetric model (31 patients, 1642 observations).
  - *Significance*: Shows precise estimation of $KL$ and $KD$ with inter-lesion variability.

---

### Code & Reproducibility Assessment
Not reported; models built in NONMEM 7.5, no code provided.

---

### Supplementary Materials
Supplementary materials include additional VPC plots (Figure S1-S3) and detailed SSE results (Method M1, M2).

---

### Future Directions
Prospective validation in larger trials; integration of extracranial lesions; joint modeling of TGI and PFS; exploration of alternative ML methods (e.g., deep learning for lesion segmentation); dropout modeling for longer horizons; dynamic treatment optimization based on lesion-level metrics; landmark analyses for early prediction.

---

### Expert Commentary
This study provides a compelling case for adopting AI-powered lesion quantification in pharmacometric modeling. The key insight is that the increased data volume (more lesions, smaller detection threshold) enables more precise parameter estimation and reveals prognostic signals that are otherwise obscured by aggregation. The finding that aggregated models fail to identify significant covariates while lesion-level models succeed underscores the importance of preserving lesion-level heterogeneity. However, the small sample size and lack of external validation limit immediate clinical translation. The SSE approach is a nice addition for model robustness assessment.

---

### Bottom Line
For pharmacometricians: AI-powered lesion-level TGI modeling using tools like VBrain can provide more robust parameter estimates and identify prognostic factors for PFS that are missed by traditional RECIST-based aggregated models. The key is to leverage the richer lesion-level data (more lesions, smaller detection threshold) to capture inter-lesion heterogeneity. However, the improved performance is driven by increased lesion sampling rather than measurement method; thus, any approach that provides more comprehensive lesion data (e.g., automated segmentation) could yield similar benefits. For clinical decision-making, lesion-level metrics like mean $KD$ and early lesion size may enable earlier identification of patients at risk for progression.

---

---

## 📊 Figures

![Prediction-corrected VPC of AI-derived SLD model. Pink dots represent the observed longitudinal tumor data for patients taking crizotinib. Green triangles repres]({{ site.baseurl }}/assets/digests/2026-06-18-ai-powered-lesion-level-tumor-growth-inhibition-modeling-improves-model/figures/fig_01.png)

![Prediction-corrected VPC of AI-derived lesion-level volumetric model. Blue circles represent the observed longitudinal tumor data. The black solid line represent]({{ site.baseurl }}/assets/digests/2026-06-18-ai-powered-lesion-level-tumor-growth-inhibition-modeling-improves-model/figures/fig_02.png)

![Left: Kaplan–Meier VPC for the final PFS model stratified by mean KD. The red line represents the lower 50th percentile, and the cyan line represents the upper 5]({{ site.baseurl }}/assets/digests/2026-06-18-ai-powered-lesion-level-tumor-growth-inhibition-modeling-improves-model/figures/fig_03.png)