---
layout: post
title: "A Longitudinal Disease Progression Model Characterizing Endoscopic Response and Remission in Crohn’s Disease"
date: 2026-07-15
authors: "Moein A, Langenhorst J, Kassir N"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 53, 38 (2026)"
doi: "10.1007/s10928-026-10042-x"
paper_type: popk
tags: [popk, regulatory]
excerpt_text: "This paper develops a novel item-level IRT-BI-FREM disease model for Crohn's disease using SES-CD data from the BERGAMOT trial. It accurately predicts placebo response and identifies key covariates affecting placebo effect. Pharmacometricians working on IBD or composite endpoint modeling should read this for its methodological rigor and regulatory alignment."
pdf_path: "/assets/digests/2026-07-15-a-longitudinal-disease-progression-model-characterizing-endoscopic-response-and/PMx_A_Longitudinal_Disease_Progression_Model_20260715.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper develops a novel item-level IRT-BI-FREM disease model for Crohn's disease using SES-CD data from the BERGAMOT trial. It accurately predicts placebo response and identifies key covariates affecting placebo effect. Pharmacometricians working on IBD or composite endpoint modeling should read this for its methodological rigor and regulatory alignment.

---

### Executive Summary
This study develops a longitudinal disease progression model for Crohn’s disease using an item-level Item Response Theory Bounded Integer (IRT-BI) framework integrated with a Full Random Effects Model (FREM). Analyzing 6,202 endoscopic observations from 155 placebo-treated patients from the Phase 3 BERGAMOT trial, the model links 20 SES-CD subscores through a shared latent placebo trajectory described by a mono-exponential function. The model accurately predicts endoscopic response (>=50% reduction) and remission (SES-CD 0-2) with high accuracy (>89% for responders). Covariate analysis identified elevated CRP, fecal calprotectin, and prior anti-TNF exposure as factors reducing placebo response. This is the first application of this integrated approach in CD, providing a robust quantitative framework for model-informed drug development.

---

### Scientific Context & Motivation
Crohn's disease is heterogeneous with substantial placebo effects confounding treatment efficacy assessment. The SES-CD is a validated endoscopic score but conventional analyses fail to capture its complexity. This study addresses the gap by developing a longitudinal disease model that jointly analyzes all 20 SES-CD subscores through a latent variable, enabling robust characterization of placebo response and identification of covariates. It extends prior work in UC (Moein et al., 2023) to CD, using a more granular item-level approach.

---

## ⚡ Methodological Snapshot
The authors developed a longitudinal disease progression model using an item-level IRT-BI framework in NONMEM. Each of the 20 SES-CD subscores (4 parameters x 5 segments) was modeled with a bounded integer structure, linked through a shared latent variable capturing a mono-exponential placebo response. The FREM approach was used for covariate analysis, treating covariates as additional observations to avoid selection bias. Model evaluation included VPCs, individual predictions, and residual diagnostics.

---

## 🏗️ Structural Model Breakdown
The model consists of two main components: (1) a latent disease trajectory defined by a mono-exponential function for placebo response ($Response_i = (RMaxPL + \eta_i) \times (1 - \exp(-\log(2)/T50PL \times \text{time}))$), and (2) an item-level IRT-BI component linking the latent response to observed SES-CD subscores. Each of the 20 subscores is described by a bounded integer model with a location (MEAN) and dispersion (SD) parameter. The mean for subject i on item j is: $Mean_{ij} = BASE_j + \eta_{ij} + Response_i$. The SD is: $SD_{ij} = SD_j \times \exp(\eta_i)$. One random effect per segment for baseline items, one random effect across all 20 items for dispersion. The latent variable is not static but dynamic, representing time-evolving mucosal disease activity driven by placebo response.

---

### Detailed Methodological Analysis

#### Modeling Approach
Item-level Item Response Theory Bounded Integer (IRT-BI) model with a single latent variable for placebo response. Each SES-CD subscore was described by a BI model with location (MEAN) and dispersion (SD) parameters. The latent disease trajectory followed a mono-exponential function. One random effect per segment for baseline items, one random effect across all 20 items for dispersion. FREM was integrated for covariate analysis.

#### Data Sources
Data from 155 placebo-treated patients in the Phase 3 BERGAMOT trial (NCT02394028) with moderately-to-severely active Crohn's disease. The dataset included 6,202 endoscopic observations across 66 weeks (induction: 14 weeks, maintenance: 52 weeks). SES-CD subscores (size of ulcers, ulcerated surface, affected surface, presence of narrowings) across five intestinal segments (ileum, right colon, transverse colon, left colon, rectum) were used.

#### Estimation Methods
Conditional Laplace likelihood estimation method in NONMEM 7.4.1. For the FREM covariate analysis, Monte Carlo importance sampling expectation maximization (IMP EM) was used.

#### Model Evaluation
Visual predictive checks (VPC) with 200 simulations, individual predictive performance plots, segment category probability curves, residual correlation matrix (probability-weighted residuals), and observed vs. predicted endoscopic response/remission at end of induction and maintenance. A logistic regression dropout model was used in VPC to account for the maintenance phase entry criteria.

#### Covariate Analysis
Full Random Effects Model (FREM) methodology was used, treating covariates as additional observations. Continuous covariates were log-transformed. Covariate effects were estimated simultaneously using Monte Carlo importance sampling (IMP) EM in NONMEM. Results were visualized via forest plot. Identified covariates: elevated CRP and fecal calprotectin (reduced $RMaxPL$), prior anti-TNF exposure (reduced $RMaxPL$), TNF-naive status (increased $RMaxPL$).

---

### Statistical Rigor Assessment
The modeling approach is statistically rigorous. The bounded integer model is appropriate for ordinal categorical data. The FREM covariate analysis avoids stepwise selection bias. Model evaluation is comprehensive, including VPCs, individual predictions, and residual diagnostics. The use of a logistic regression dropout model in VPCs accounts for the maintenance phase selection. Shrinkage values (14.6-25.2%) are reported and acceptable. The single-trial dataset limits generalizability, but the depth of data supports reliability.

---

## 📊 Key Findings
The maximum placebo response ($RMaxPL$) on the bounded integer scale was -0.329 (90% CI: -0.487 to -0.179), corresponding to an approximate mean decrease of -0.220 per baseline SES-CD subscore (0-3 scale), translating to ~4.4 points reduction in total SES-CD (0-60 scale). The time to half-maximal placebo effect ($T50PL$) was 13.8 weeks (90% CI: 11.32-16.21). The model accurately predicted endoscopic response (>=50% reduction) and remission (SES-CD 0-2) with >89% accuracy for responders and >85% for non-responders. Elevated baseline CRP and fecal calprotectin were associated with reduced $RMaxPL$, while TNF-naive status was associated with increased $RMaxPL$.

---

## 💡 Clinical & Regulatory Implications
The model provides a quantitative framework to isolate drug effects from placebo response in CD clinical trials, aligning with FDA MIDD priorities. It enables patient enrichment by identifying subpopulations with higher or lower placebo responses based on baseline CRP, fecal calprotectin, and prior anti-TNF exposure. This can inform stratified trial designs, interim decision-making, and adaptive strategies. The model also supports regulatory evaluations by establishing a robust placebo baseline against which treatment effects can be assessed.

---

### Strengths & Limitations

#### Strengths
- First application of integrated item-level IRT-BI-FREM in CD.
- Robust handling of sparse and incomplete endoscopic data through item-level modeling.
- Comprehensive model evaluation with multiple diagnostics (VPCs, individual predictions, residual correlations, category probability curves).
- FREM covariate analysis avoids selection bias and handles multicollinearity.
- Regulatory alignment with FDA MIDD priorities and guidance.

#### Limitations (Acknowledged by Authors)
- Single clinical trial dataset; generalizability beyond this setting should be interpreted in context.
- Residual correlations (Figure S3) show some local dependencies, particularly within ulceration domains, though authors argue these are modest and do not justify a multi-latent variable model.

#### Limitations (Expert Review)
- The assumption of a single latent variable acting uniformly across all 20 subscores may not hold for drug effects (only tested for placebo).
- The model does not include active drug data; its utility for drug effect characterization is theoretical.
- The dropout model uses observed CDAI change, which may introduce bias if CDAI is not perfectly correlated with endoscopic outcomes.
- The FREM analysis identifies associations but does not establish causality.

#### Generalizability
The model is derived from a single Phase 3 trial (BERGAMOT) with specific inclusion/exclusion criteria, limiting generalizability to broader CD populations. Validation in external datasets is needed.

---

### Key Equations

**Latent Placebo Response Trajectory**

{% raw %}
$$
Response_i = (RMaxPL + \eta_i) \times (1 - e^{-(\log(2)/T50PL) \times \text{time}})
$$
{% endraw %}

Defines the latent placebo response trajectory over time for each subject.

**Item-Level IRT-BI Probability**

{% raw %}
$$
P_{\text{cat}_k, \text{item}_j, \text{ID}_i} = f(\text{Mean}_{ij}, SD_{ij})
$$
{% endraw %}

Specifies the probability of observing a specific categorical score (0-3) for each SES-CD item, linking the latent response to observed data.

**Item Mean Score**

{% raw %}
$$
\text{Mean}_{ij} = BASE_j + \eta_{ij} + Response_i
$$
{% endraw %}

Defines the mean score for subject i on item j as the sum of item-specific baseline and the shared latent placebo response.

**Item Standard Deviation**

{% raw %}
$$
SD_{ij} = SD_j \times e^{\eta_i}
$$
{% endraw %}

Defines the standard deviation for subject i on item j, with a shared random effect across all 20 items.

**Quantile to Mean Score Transformation**

{% raw %}
$$
\mu = 3\Phi(E)
$$
{% endraw %}

Transforms model parameters from the bounded integer (quantile) scale to an approximate mean SES-CD subscore scale (0-3).

**Expected Score**

{% raw %}
$$
E_{ij} = \sum_{k=0}^{3} k \cdot P_{ij}(k)
$$
{% endraw %}

Calculates the model-predicted expected score for each individual and item.

**Predicted Standard Deviation**

{% raw %}
$$
SD_{ij} = \sqrt{\sum_{k=0}^{3} P_{ij}(k) \cdot (k - E_{ij})^2}
$$
{% endraw %}

Calculates the model-predicted standard deviation for each individual and item.

**Probability-Weighted Residual**

{% raw %}
$$
PWRES_{ij} = \frac{DV_{ij} - E_{ij}}{SD_{ij}}
$$
{% endraw %}

Defines the probability-weighted residual (PWRES) used for diagnostic evaluation of local dependencies among items.

---

### Figures & Tables

- **Figure 1**: Individual predictive performance for endoscopic response and remission at end of induction and maintenance.
  - *Significance*: Demonstrates high accuracy (>89% for responders, >85% for non-responders) of the model in predicting clinically relevant endpoints at the individual level.
- **Figure 2**: Segment category probability curves for each SES-CD subscore across intestinal segments.
  - *Significance*: Validates the model's structural integrity by showing close alignment between observed probabilities and 90% prediction intervals for each score level, confirming the latent variable structure.
- **Figure 3**: Visual predictive checks (VPC) for longitudinal SES-CD subscores across all five intestinal segments.
  - *Significance*: Shows that observed mean trajectories for all 20 subscores fall within the 90% CI of model simulations across 66 weeks, confirming robust predictive performance at the population level.
- **Figure 4**: Population-level predictive performance for endoscopic response and remission at end of induction and maintenance.
  - *Significance*: Demonstrates minimal bias (2-9% overprediction) in predicting clinical endpoints, supporting the model's utility for trial simulation.
- **Table 1**: Final model parameter estimates in bounded integer scale with key IRT components.
  - *Significance*: Provides key parameter estimates including $RMaxPL$ (-0.329 on BI scale, ~ -0.220 on mean score scale) and $T50PL$ (13.8 weeks) with 90% CIs, essential for model implementation.
- **Figure S5**: Forest plot of FREM covariate effects on $RMaxPL$.
  - *Significance*: Identifies elevated CRP, fecal calprotectin, and prior anti-TNF exposure as factors reducing placebo response, supporting patient enrichment strategies.

---

### Code & Reproducibility Assessment
The NONMEM model code is provided in the supplementary materials. Qualified researchers may request individual patient-level data via the clinical study data request platform (https://Vivli.org/).

---

### Supplementary Materials
Supplementary materials include: Table S1 (SES-CD parameters), Table S2 (baseline characteristics), Table S3 (baseline characteristics), Table S4 (baseline SES-CD subscore summary), Figure S1 (model illustration), Figure S2 (individual predictions), Figure S3 (residual correlation matrix), Figure S4 (total SES-CD VPC), Figure S5 (FREM forest plot). The NONMEM model code is provided in the supplementary materials.

---

### Future Directions
This model establishes a robust placebo baseline. Key next steps include: (1) extending the framework to incorporate active drug effects (e.g., etrolizumab) to enable comparative efficacy assessments; (2) validating the model in external CD trials with different mechanisms of action; (3) exploring whether a multi-latent variable structure might be needed for specific drug effects; (3) integrating this model with PK/PD models for exposure-response analysis; (4) developing a joint model of endoscopic and clinical outcomes (e.g., CDAI) for a more comprehensive disease progression framework.

---

### Expert Commentary
This work represents a significant methodological advance in modeling composite endoscopic endpoints in IBD. The choice of a bounded integer model over a full categorical IRT is pragmatic and well-justified given the sparse longitudinal data and the need for parsimony. The use of a single latent variable for placebo response acting uniformly across all 20 subscores is a strong assumption, but the residual diagnostics (Figure S3) support this choice, showing only modest local dependencies. The FREM covariate analysis is a robust approach that avoids stepwise selection bias. The key limitation is the single-trial dataset, which limits generalizability. The model's predictive performance for clinical endpoints is impressive and supports its use in trial simulation. A natural extension would be to incorporate active drug effects and compare with other CD models.

---

### Bottom Line
This paper presents the first integrated item-level IRT-BI-FREM disease model for Crohn’s disease using SES-CD data from the BERGAMOT trial. The model robustly characterizes placebo response dynamics, accurately predicts endoscopic response/remission, and identifies inflammatory burden (CRP, fecal calprotectin) and prior anti-TNF exposure as key covariates attenuating placebo response. For practicing pharmacometricians, this work provides a principled, regulatory-aligned framework for isolating drug effects from placebo in CD trials, supporting MIDD, patient enrichment, and adaptive trial design.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-07-15-a-longitudinal-disease-progression-model-characterizing-endoscopic-response-and/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-07-15-a-longitudinal-disease-progression-model-characterizing-endoscopic-response-and/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-07-15-a-longitudinal-disease-progression-model-characterizing-endoscopic-response-and/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-07-15-a-longitudinal-disease-progression-model-characterizing-endoscopic-response-and/figures/fig_04.png)