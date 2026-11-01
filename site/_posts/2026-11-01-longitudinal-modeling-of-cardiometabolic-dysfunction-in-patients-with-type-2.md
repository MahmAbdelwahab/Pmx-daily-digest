---
layout: post
title: "Longitudinal Modeling of Cardiometabolic Dysfunction in Patients With Type 2 Diabetes Using Item Response Theory."
date: 2026-11-01
authors: "Chengli Yu, Hanna Kunina, Gustaf J. Wellhagen, Maria C. Kjellsson"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70349"
paper_type: methodology
tags: [methodology]
excerpt_text: "This study applies multidimensional item response theory (MIRT) to routinely collected cardiometabolic biomarkers in 33,396 newly diagnosed type 2 diabetes patients, identifying two latent dimensions (blood pressure and metabolic) that capture complementary aspects of cardiometabolic dysfunction. The longitudinal MIRT model with an item-specific slope for HbA1c describes distinct trajectories and shows modest predictive value for all-cause mortality beyond age and sex."
pdf_path: "/assets/digests/2026-11-01-longitudinal-modeling-of-cardiometabolic-dysfunction-in-patients-with-type-2/PMx_Longitudinal_Modeling_of_Cardiometabolic_20261101.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study applies multidimensional item response theory (MIRT) to routinely collected cardiometabolic biomarkers in 33,396 newly diagnosed type 2 diabetes patients, identifying two latent dimensions (blood pressure and metabolic) that capture complementary aspects of cardiometabolic dysfunction. The longitudinal MIRT model with an item-specific slope for HbA1c describes distinct trajectories and shows modest predictive value for all-cause mortality beyond age and sex.

---

### Executive Summary
The authors develop a longitudinal graded-response multidimensional IRT (MIRT) model to characterize cardiometabolic dysfunction in patients with type 2 diabetes (T2D). Using data from the Swedish National Diabetes Register (33,396 patients, 915,218 measurements), they categorize seven biomarkers (sBP, dBP, LDL, HDL, TG, HbA1c, BMI) into ordered categories and demonstrate that a two-dimensional model (blood pressure-related and metabolic latent variables) fits substantially better than a unidimensional model. The model reveals that blood pressure items dominate the BP dimension, while metabolic items (HDL, HbA1c, TG, BMI) inform the metabolic dimension, with LDL showing low discrimination. Longitudinal analysis shows modest declines in both latent variables, with HbA1c requiring an item-specific slope to capture its distinct trajectory. The latent variables show modest predictive value for all-cause mortality, supporting the utility of this multidimensional approach.

---

### Scientific Context & Motivation
The paper addresses the limitation of traditional approaches that treat cardiometabolic risk factors as independent predictors, failing to capture the shared variance and multidimensional nature of cardiometabolic dysfunction. It proposes a multidimensional item response theory (MIRT) framework to integrate multiple biomarkers into latent measures of disease severity, enabling longitudinal assessment of disease progression across multiple domains.

---

## ⚡ Methodological Snapshot
The study employs a graded-response multidimensional item response theory (MIRT) model to analyze ordered categorical biomarker data. The model estimates latent variables ($\psi_1$ and $\psi_2$) that represent underlying cardiometabolic dysfunction dimensions. The analysis proceeds in steps: dimensionality assessment using AIC/BIC, baseline model estimation with covariates, longitudinal extension with time-varying latent variables and item-specific slopes, and survival analysis using the latent variables as predictors. The model is implemented in NONMEM, with dimensionality assessment in R using the mirt package.

---

## 📐 Statistical Framework
The graded response model (GRM) assumes that the probability of a patient scoring at or above a category threshold on an item follows a logistic function of the latent trait(s).[^fc-1] The model assumes local independence, meaning that item responses are independent given the latent variables.[^fc-2] The multidimensional extension allows items to load on multiple latent dimensions, with discrimination parameters indicating the strength of association. The model uses maximum likelihood estimation, with covariates affecting the latent variables via linear regression. The longitudinal model assumes linear change in latent variables over time, with potential item-specific slopes to capture differential trajectories.

---

### Estimator Behavior
The model parameters are estimated using maximum likelihood, which is is asymptotically unbiased and efficient under correct model specification. The large sample size (33,396 patients) ensures stable estimates with low relative standard errors (RSEs) for most parameters.[^fc-3] The discrimination parameters for LDL and TG have high RSEs (12.7-20.7%), indicating low precision,, likely due to low information from these items. The item-specific slope for HbA1c ($0.45$ $year^{-1}$) is well estimated (RSE 4.6%). The model convergence is not explicitly discussed, but the use of NONMEM suggests standard convergence criteria were applied.

---

### Validation Design
The model was validated using visual predictive checks (VPCs) for individual items and an overall percentage score VPC. The VPCs compare observed and simulated percentiles of score distributions over time, with 95% confidence intervals from simulations. The dimensionality assessment used AIC and BIC to compare models with 1-7 dimensions. The survival analysis used likelihood ratio tests, C-index, and Brier score to evaluate predictive performance. No external validation dataset was used.[^fc-5]

---

### Applicability Boundaries
The method works well when biomarkers can be categorized into ordered categories with clinical relevance, and when the latent structure is multidimensional. It is applicable to large observational datasets with repeated measurements. The method may not work well when biomarkers are continuous and categorization discards too much information, or when the latent structure is not well-defined. The model assumes linear change over time, which may not hold for all biomarkers. The method requires sufficient data to estimate multiple discrimination and difficulty parameters per item, which may be challenging with sparse data.

---

### Comparison to Alternatives
Compared to unidimensional IRT, the multidimensional model provides a better fit and captures complementary dimensions of cardiometabolic dysfunction. Compared to confirmatory factor analysis (CFA), IRT directly models the probability of response categories and provides item-level information, allowing for more flexible modeling of ordinal data. Compared to traditional risk factor models (e.g., UKPDS-OM), this approach integrates multiple biomarkers into latent variables, accounting for shared variance. The main advantage is the ability to characterize multidimensional disease progression, while the disadvantage is increased complexity and the need for categorization.

---

### Implementation Guidance
The model is implemented in NONMEM 7.5.1, with data management in R. The dimensionality assessment uses the mirt package in R. For practical implementation, users need to categorize continuous biomarkers into ordered categories based on clinical guidelines. The model requires specification of the number of dimensions, item discrimination and difficulty parameters, and covariate effects. The longitudinal model requires defining latent variable trajectories and potential item-specific slopes. Computational cost is moderate, with the large dataset requiring efficient estimation methods. The use of VPCs is recommended for model validation.

---

## 📊 Key Findings
A two-dimensional MIRT model identified a blood pressure-related latent variable ($\psi_1$) and a metabolic latent variable ($\psi_2$). $\psi_1$ was primarily informed by sBP and dBP, while $\psi_2$ was informed by HDL, HbA1c, TG, and BMI; LDL showed low discrimination on both dimensions. Baseline age at T2D diagnosis had opposing effects on the latent variables ($0.02$ for $\psi_1$, $-0.07$ for $\psi_2$), and sex was associated with $\psi_2$ (women scored $0.43$ units lower than men). Longitudinally, both latent variables showed post-baseline offsets ($-0$ for $\psi_1$, $-0.22$ for $\psi_2$) and annual slopes of approximately $-0.03$ $year^{-1}$. HbA1c exhibited a distinct trajectory with an initial post-baseline improvement followed by deterioration, requiring an item-specific slope of $0.45$ $year^{-1}$. The metabolic latent variable contributed modest additional information for all-cause mortality beyond age and sex.

---

### Strengths & Limitations

#### Strengths
- Large real-world dataset (33,396 patients) with comprehensive longitudinal follow-up ( 915,218 measurements )
- Demonstrates clear advantage of multidimensional IRT over unidimensional IRT ($\Delta AIC \approx -6000$) in AIC/BIC)
-  
- Identifies two complementary latent dimensions (BP-related and metabolic) with distinct biomarker contributions
- Handles ordered categorical data via graded response model, aligning with clinical risk categories
-  
- Provides a flexible framework for integrating multiple biomarkers into latent disease severity measures

#### Limitations (Acknowledged by Authors)
- Observational data may introduce bias due to non-random missingness and measurement errors
- Categorization of continuous biomarkers discards information and reduces sensitivity to within-category changes
- Latent variables remain abstract constructs not directly linked to clinical outcomes
- Large sample size may lead to statistically significant but clinically irrelevant differences

#### Limitations (Expert Review)
- The model does not account for the fact that the latent variables are not directly observable, which may limit clinical interpretation
- The study does not address the potential for informative observation bias, where patients with more severe disease may have more frequent measurements
- The model does not account for the fact that the latent variables are not directly observable, which may limits clinical interpretation
- The model does not account for the potential for informative observation bias, where patients with more severe disease may have more frequent measurements

#### Generalizability
The findings are based on a large Swedish registry cohort and may not generalize to other populations or healthcare settings. The model's applicability to other datasets requires validation, and the clinical utility of the latent variables needs further investigation.

---

### Key Equations

**Graded Response Model (GRM)**

{% raw %}
$$
P(X_{ij} \geq k | \theta_i) = \frac{{1}}{1 + \exp[-a_j(\theta_i - b_{jk})]}
$$
{% endraw %}

Probability that patient $i$ scores at least category $k$ on item $j$, given latent trait $\theta_i$, with discrimination $a_j$ and difficulty $b_{jk}$.

---

### Figures & Tables

- **Figure 1**: Distribution of scores for all items at baseline (A) and over time (B).
  - *Significance*: Shows the prevalence of risk factor burden and temporal trends, highlighting HbA1c's distinct pattern.
- **Figure 2**: Item Characteristic Curves (ICCs) for all items from the baseline graded-response MIRT model.
  - *Significance*: Illustrates how each biomarker relates to the two latent dimensions, supporting the interpretation of the dimensions.
- **Figure 3**: Item information plots showing Fisher Item Information Curves and percentage contribution per dimension.
  - *Significance*: Quantifies the relative importance of each biomarker for each latent dimension, guiding interpretation.
- **Figure 4**: VPC of HbA1c with common shared slope (A) and separate slope (B).
  - *Significance*: Demonstrates the need for an item-specific slope to capture HbA1c's unique trajectory.
- **Figure 5**: Percentage Score VPC of the final longitudinal MIRT model.
  - *Significance*: Validates the overall model performance in describing the total cardiometabolic burden over time.

---

### Code & Reproducibility Assessment
The analysis used NONMEM 7.5.1, PsN 5.3.1, R 4.3.3, and the mirt and piraid packages. No public code repository is mentioned, limiting full reproducibility.

---

### Supplementary Materials
Supplementary materials include Figure S1 (AIC/BIC for dimensionality), Figure S5 (item information for unidimensional model), Table S4 (survival analysis metrics), and Table S6 (item-specific difficulty parameters).

---

### Future Directions
Further investigations should focus on the clinical interpretation of each latent dimension through associations with specific clinical outcomes, such as cardiovascular events or microvascular complications. Additionally, exploring continuous-response IRT approaches that retain continuous biomarker data could improve sensitivity to within-category changes.

---

### Expert Commentary
This paper represents a thoughtful application of multidimensional IRT to a complex clinical problem. The methodological rigor is commendable, particularly the use of model comparison criteria and visual predictive checks. However, the clinical utility of the latent variables remains to be demonstrated, and the potential for informative observation bias is a concern. The framework could be extended to incorporate time-varying covariates and to validate against hard clinical endpoints.

---

### Bottom Line
This study demonstrates the feasibility of using longitudinal IRT to integrate multiple biomarkers into latent measures of cardiometabolic dysfunction in patients with T2D. The two-dimensional model identified a blood pressure-related latent variable ($\psi_1$) and a metabolic latent variable ($\psi_2$), with $\psi_1$ primarily informed by sBP and dBP, and $\psi_2$ informed by HDL, HbA1c, TG, and BMI. LDL showed low discrimination on both dimensions. Age at T2D diagnosis was associated with both latent variables, with opposing effects of $0.02$ for $\psi_1$ and $-0.07$ for $\psi_2$. Sex was associated with $\psi_2$, with women scoring $0.43$ units lower than men. Longitudinally, $\psi_1$ and $\psi_2$ showed post-baseline offsets of $-0.10$ and $-0.22$, respectively, followed by separately estimated annual slopes of approximately $-0.03$ $year^{-1}$. HbA1c exhibited a distinct trajectory with an initial post-baseline improvement followed by deterioration, requiring an item-specific slope of $0.45$ $year^{-1}$. The $\psi_2$ contributed modest additional information for all-cause mortality beyond age and sex.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The graded response model (GRM) assumes that the probability of a patient scoring at or above a category threshold on an item follows a logistic function of the latent trait(s).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “The model assumes local independence, meaning that item responses are independent given the latent variables.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **CONTRADICTED** — original: “The large sample size (33,396 patients) ensures stable estimates with low relative standard errors (RSEs) for most parameters.” → correction: “LDL | 0.18 (12.7) | 0.13 (13.8)”
[^fc-4]: **UNSUPPORTED** — original: “The use of NONMEM suggests standard convergence criteria were applied.” → correction: “NONMEM version 7.5.1 [33] was used for model development through Pearl-speaks-NONMEM (PsN) version 5.3.1 [34].”
[^fc-5]: **UNSUPPORTED** — original: “No external validation dataset was used.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “The method may not work well when the latent structure is not well-defined.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “Computational cost is moderate.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “The large dataset requires efficient estimation methods.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **NUMERIC_MISMATCH** — original: “The post-baseline offset for ψ1 was -0.” → correction: “post-baseline offsets of −0.10 and −0.22, respectively”
[^fc-10]: **UNSUPPORTED** — original: “The model does not account for the fact that the latent variables are not directly observable.” → correction: “The source text does not contain this claim.”
[^fc-11]: **UNSUPPORTED** — original: “The study does not address the potential for informative observation bias.” → correction: “The source text does not contain this claim.”
[^fc-12]: **UNSUPPORTED** — original: “The findings may not generalize to other populations or healthcare settings.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “The model's applicability to other datasets requires validation.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “The graded response model equation is P(X_{ij} ≥ k | θ_i) = 1 / (1 + exp[-a_j(θ_i - b_{jk})]).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “The lack of a public code repository limits full reproducibility.” → correction: “No evidence found in the source text.”
[^fc-16]: **UNSUPPORTED** — original: “Further investigations should focus on associations with cardiovascular events.” → correction: “Further investigations should focus on the clinical interpretation of each latent dimension through its associations with specific clinical outcomes.”
[^fc-17]: **UNSUPPORTED** — original: “Further investigations should focus on associations with microvascular complications.” → correction: “Further investigations should focus on the clinical interpretation of each latent dimension through its associations with specific clinical outcomes.”
[^fc-18]: **UNSUPPORTED** — original: “The methodological rigor of this paper is commendable.” → correction: “No evidence found in the source text.”
[^fc-19]: **UNSUPPORTED** — original: “The framework could be extended to incorporate time-varying covariates.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-20]: **UNSUPPORTED** — original: “The framework could be extended to validate against hard clinical endpoints.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Distribution of scores for all items at baseline (A) and over time (B). Items: sBP—systolic blood pressure, dBP—diastolic blood pressure; LDL—low-density lipoproteins, HD]({{ site.baseurl }}/assets/digests/2026-11-01-longitudinal-modeling-of-cardiometabolic-dysfunction-in-patients-with-type-2/figures/fig_01.jpg)

![Item Characteristic Curves (ICCs) for all items from the baseline graded-response MIRT model. Each panel shows the model-predicted probability of falling into each of the]({{ site.baseurl }}/assets/digests/2026-11-01-longitudinal-modeling-of-cardiometabolic-dysfunction-in-patients-with-type-2/figures/fig_02.jpg)

![Item information plots for all items for the baseline graded-response MIRT model. Left panel: Fisher Item Information Curves (IICs) plot, showing how much information eac]({{ site.baseurl }}/assets/digests/2026-11-01-longitudinal-modeling-of-cardiometabolic-dysfunction-in-patients-with-type-2/figures/fig_03.jpg)

![Visual predictive check (VPC) of HbA1c with the common shared(left panel, A) and with the separate(right panel, B). Each sub-panel shows the model-predicted probability o]({{ site.baseurl }}/assets/digests/2026-11-01-longitudinal-modeling-of-cardiometabolic-dysfunction-in-patients-with-type-2/figures/fig_04.jpg)

![Percentage Score VPC of the final longitudinal MIRT model for the full study population. The lines correspond to the 97.5th (dashed), 50th (solid), and 2.5th (dashed) per]({{ site.baseurl }}/assets/digests/2026-11-01-longitudinal-modeling-of-cardiometabolic-dysfunction-in-patients-with-type-2/figures/fig_05.jpg)