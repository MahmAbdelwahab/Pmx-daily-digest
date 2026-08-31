---
layout: post
title: "Population Pharmacokinetic Analysis of Datopotamab Deruxtecan and DXd in Patients with Advanced Solid Tumors"
date: 2026-08-31
authors: "Ying Hong, Sophie Peigné, Yuzhuo Pan, Sofia Friberg Hietala, Anna McLaughlin, Naoyuki Tajima, Deise Uema, Hong Zebger-Gong, Zoey Tang, Diansong Zhou, Malaz Abutarif, Tushar Garimella"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025, 14(12): 2149-2160"
doi: "10.1002/psp4.70118"
paper_type: popk
tags: [popk]
excerpt_text: "This study develops integrated population PK models for the ADC Dato-DXd and its payload DXd using data from three clinical studies. The models support weight-based dosing and indicate no dose adjustments for evaluated covariates."
pdf_path: "/assets/digests/2026-08-31-population-pharmacokinetic-analysis-of-datopotamab-deruxtecan-and-dxd-in/PMx_Population_Pharmacokinetic_Analysis_of_D_20260831.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study develops integrated population PK models for the ADC Dato-DXd and its payload DXd using data from three clinical studies. The models support weight-based dosing and indicate no dose adjustments for evaluated covariates.

---

### Executive Summary
This study established integrated population pharmacokinetic (PK) models for the TROP2-directed antibody-drug conjugate (ADC) datopotamab deruxtecan (Dato-DXd) and its payload DXd using data from three clinical studies (TP01, TL05, TL01) comprising 9036 Dato-DXd and 9012 DXd observations from 729 patients with advanced solid tumors. The final Dato-DXd model was a two-compartment model with parallel linear and nonlinear (Michaelis–Menten) elimination, with body weight included as a mechanistic covariate (fixed exponent 0.75 on clearance). The final DXd model was a one-compartment model with linear clearance, where DXd release was semi-mechanistically linked to the total elimination rate of Dato-DXd, and the drug-to-antibody ratio (DAR) was modeled to decrease over time via a constant reduction after cycle 1 and an exponential decline within each cycle. Covariate analysis identified body weight as the most influential covariate on both Dato-DXd and DXd exposure; other significant covariates (albumin, age, sex, region, tumor size, AST, total bilirubin) had modest effects that did not warrant dose adjustments. Model-based simulations supported a weight-based dosing regimen of 6 mg/kg Q3W with a flat dose cap of 540 mg for patients weighing ≥90 kg. The models adequately described the observed data and support the clinical pharmacology label claims for Dato-DXd.

---

### Scientific Context & Motivation
Dato-DXd is a TROP2-directed ADC approved for HR+/HER2- metastatic breast cancer. Understanding its PK and that of its payload DXd is essential for dosing and exposure–response analyses. Previous PK models were based on Phase 1 data only; this analysis integrates data from Phase 1-3 studies to provide a more robust characterization of PK and covariate effects.

---

### Detailed Methodological Analysis

#### Modeling Approach
Stepwise: first developed Dato-DXd model, then used individual post hoc parameters as input for DXd model. Semi-mechanistic linking of DXd release to Dato-DXd total elimination. DAR modeled with constant reduction after cycle 1 and exponential decline within cycles.

#### Data Sources
Data from three clinical studies: TROPION-PanTumor01 (Phase 1), TROPION-Lung05 (Phase 2), and TROPION-Lung01 (Phase 3). 9036 Dato-DXd and 9012 DXd observations from 729 patients with NSCLC and breast cancer.

#### Estimation Methods
NONMEM 7.5 with first-order conditional estimation with interaction (FOCEI). Standard errors from bootstrap (200 replicates).

#### Model Evaluation
Prediction-corrected visual predictive checks (pcVPCs), goodness-of-fit plots, individual concentration-time profiles, and forest plots for covariate effects.

#### Covariate Analysis
Stepwise covariate model with adaptive scope reduction (SCM+), forward selection p=0.01, backward elimination p=0.001. Covariates tested on parameters with IIV. Missing covariates imputed by median/mode. ADA evaluated with time-invariant and time-variant approaches.

---

## 📊 Key Findings
The final Dato-DXd model was a two-compartment model with parallel linear and nonlinear elimination; linear clearance dominated at doses ≥4 mg/kg. The final DXd model was a one-compartment model with linear clearance, and DXd release was semi-mechanistically linked to Dato-DXd total elimination. Body weight was the most influential covariate on both Dato-DXd and DXd exposure. Other covariates (albumin, age, sex, region, tumor size, AST, total bilirubin) had modest effects that did not warrant dose adjustments. Model-based simulations supported a weight-based dosing regimen of 6 mg/kg Q3W with a 540 mg cap for patients ≥90 kg. The models adequately described the observed data and support the clinical pharmacology label claims.

---

## 💡 Clinical & Regulatory Implications
The models support the clinical pharmacology label claims for Dato-DXd, including dose linearity, minimal accumulation, and lack of clinically meaningful impact of organ impairment on exposure. The weight-based dosing strategy with a cap at 90 kg is endorsed. The models also provide individual exposures for subsequent exposure–response analyses.

---

### Strengths & Limitations

#### Strengths
- Large dataset from three clinical studies (729 patients, >9000 observations per analyte).
- Semi-mechanistic linking of ADC and payload PK, including a novel time-varying DAR model.
- Comprehensive covariate analysis using SCM+ with adaptive scope reduction.
- Model-based simulations to evaluate weight-based dosing scenarios.
- Parameter estimates with good precision (RSE <21% for Dato-DXd, <19% for DXd).
- Models adequately described the observed data as shown by pcVPCs and other diagnostics.

#### Limitations (Acknowledged by Authors)
- Only one patient with moderate hepatic impairment was included, limiting the assessment of dose adjustments in this subpopulation.
- The effect of anti-drug antibodies (ADA) was statistically significant but small and was excluded from the final model; its clinical impact remains uncertain.
- The DAR model is empirical and may not fully capture the complex biology of ADC deconjugation.
- The analysis did not evaluate the impact of renal impairment on Dato-DXd exposure, though creatinine clearance was not a significant covariate.

#### Limitations (Expert Review)
- The model for DAR is semi-mechanistic and relies on assumptions about the time-course of DAR changes.
- The covariate effects on DXd exposure for extreme values of albumin, AST, and total bilirubin exceeded the 80-125% range, but the clinical relevance is uncertain.
- The weight-based dosing cap at 90 kg was based on simulations, not prospective clinical data.

#### Generalizability
The models are based on a large dataset from multiple studies and are expected to generalize to the target patient population. However, the limited number of patients with moderate hepatic impairment (n=1) limits conclusions for that subgroup.

---

### Key Equations

**DAR model**

{% raw %}
$$
DAR = 4 \cdot 0.25 + (1 - 0.25) \cdot e^{-\beta \cdot t} \cdot \left( \frac{1}{\text{Factor1}} \text{ if cycle 1 else } 1 \right)
$$
{% endraw %}

Model for the time-varying drug-to-antibody ratio (DAR) of Dato-DXd, which decreases over time via a constant reduction after cycle 1 and an exponential decline within each cycle.

**Continuous covariate effect (power model)**

{% raw %}
$$
\text{CovEff}_m = \left( \frac{\text{Cov}_m}{\text{Cov}_{m,\text{ref}}} \right)^{\theta_m}
$$
{% endraw %}

General covariate effect model for continuous covariates using a power function, where CovEff_m is the multiplicative factor for the m-th covariate.

**Categorical covariate effect**

{% raw %}
$$
\text{CovEff}_m = \begin{cases} 1 & \text{if Cov} = \text{Cov}_{m,\text{ref}} \\ \frac{1}{1+\theta_m} & \text{if Cov} \neq \text{Cov}_{m,\text{ref}} \end{cases}
$$
{% endraw %}

General covariate effect model for categorical covariates, where the effect is a multiplicative factor relative to the reference category.

**Typical parameter with covariates**

{% raw %}
$$
\text{TVP}_i = \theta_p \cdot \prod_{m=1}^{n} \text{CovEff}_m
$$
{% endraw %}

Typical value of a parameter (TVP_i) as the product of the population typical value (θ_p) and all covariate effects.

**Dato-DXd linear clearance**

{% raw %}
$$\begin{aligned}
\text{CL}_{\text{linDatoDXd}} \\
&= 0.386 \cdot \left( \frac{\text{WT}}{66} \right)^{0.75} \cdot \left( \frac{\text{Albumin}}{38} \right)^{-0.788} \cdot \left( \frac{\text{Age}}{62} \right)^{-0.306} \\
& \cdot \left( \frac{1}{1-0.263 \text{ if female}} \right) \cdot \left( \frac{1}{1-0.219 \text{ if Japan}} \right)
\end{aligned}$$
{% endraw %}

Final model equation for Dato-DXd linear clearance (CLlinDatoDXd) in L/day, including covariates body weight, albumin, age, sex, and region Japan.

**Dato-DXd central volume**

{% raw %}
$$
V_{c\text{DatoDXd}} = 3.06 \cdot \left( \frac{\text{WT}}{66} \right)^{0.415} \cdot \left( \frac{1}{1-0.160 \text{ if female}} \right)
$$
{% endraw %}

Final model equation for Dato-DXd central volume of distribution (VcDatoDXd) in L, including body weight and sex.

**Dato-DXd peripheral volume**

{% raw %}
$$
V_{p\text{DatoDXd}} = 2.88 \cdot \left( \frac{\text{WT}}{66} \right)^{0.311}
$$
{% endraw %}

Final model equation for Dato-DXd peripheral volume of distribution (VpDatoDXd) in L, including body weight.

**Dato-DXd Vmax**

{% raw %}
$$
V_{\max} \ (\mu\text{g/day}) = 8410 \cdot \left( \frac{\text{Tumor size}}{66} \right)^{0.125}
$$
{% endraw %}

Final model equation for the maximum elimination capacity (Vmax) of the nonlinear clearance pathway, including tumor size.

**Dato-DXd nonlinear clearance**

{% raw %}
$$
\text{CL}_{\text{nonlinDatoDXd}} = \frac{V_{\max}}{K_m + C_{\text{DatoDXd}}}
$$
{% endraw %}

Nonlinear (Michaelis–Menten) clearance of Dato-DXd, where Vmax is the maximum elimination capacity and Km is the concentration at half-maximum elimination.

**DXd clearance**

{% raw %}
$$\begin{aligned}
\text{CL}_{\text{DXd}} \\
&= 2.66 \cdot \left( \frac{\text{WT}}{66} \right)^{0.298} \cdot \left( \frac{\text{Albumin}}{38} \right)^{0.343} \cdot \left( \frac{\text{AST}}{22} \right)^{-0.154} \\
& \cdot \left( \frac{\text{Tot. bilirubin}}{0.4} \right)^{-0.139} \\
& \cdot \left( 1 \text{ if US/Japan, } 1+0.240 \text{ if Europe, } 1+0.196 \text{ if RoW} \right)
\end{aligned}$$
{% endraw %}

Final model equation for DXd clearance (CLDXd) in L/h, including body weight, albumin, AST, total bilirubin, and region.

**DXd central volume**

{% raw %}
$$
V_{c\text{DXd}} = 25.1 \cdot \left( \frac{\text{WT}}{66} \right)^{0.530} \cdot \left( \frac{1}{1-0.185 \text{ if female}} \right)
$$
{% endraw %}

Final model equation for DXd central volume of distribution (VcDXd) in L, including body weight and sex.

---

### Figures & Tables

- **Figure 1**: Schematic illustration of the final Dato-DXd (blue) and DXd (orange) models, showing the two-compartment Dato-DXd model with linear and nonlinear clearance, and the one-compartment DXd model with release linked to Dato-DXd elimination.
  - *Significance*: Provides a visual overview of the structural model, including the semi-mechanistic link between Dato-DXd elimination and DXd release.
- **Figure 2**: Prediction-corrected visual predictive checks (pcVPCs) for Dato-DXd (upper panel) and DXd (lower panel) concentrations versus time since first dose, truncated to 9 cycles.
  - *Significance*: Demonstrates the adequacy of the final models in describing the central tendency and variability of the observed data.
- **Figure 3**: Visualization of typical Dato-DXd clearances (linear, nonlinear, and total) versus Dato-DXd plasma concentrations after 6.0 mg/kg administration.
  - *Significance*: Illustrates the concentration-dependent contribution of nonlinear clearance and confirms that linear clearance dominates at therapeutic doses.
- **Figure 4**: Forest plots showing the impact of covariates on Dato-DXd AUC3 (left panel) and DXd AUC3 (right panel), based on the final models.
  - *Significance*: Visualizes the relative change in exposure for each covariate relative to the reference patient, highlighting body weight as the most influential covariate.
- **Figure 5**: Boxplots of simulated Dato-DXd and DXd Cmax3 and AUC3 using weight-based dosing of 6.0 mg/kg Q3W with a maximum of 540 mg for patients weighing ≥90 kg.
  - *Significance*: Supports the weight-based dosing strategy by showing that the 540 mg cap for ≥90 kg patients yields exposures similar to those in lower weight groups.
- **Table 1**: Parameter estimates for the final Dato-DXd model, including typical values, covariate effects, IIV, and RUV.
  - *Significance*: Provides the numerical values of the model parameters and their precision, essential for understanding the model and its implications.
- **Table 2**: Parameter estimates for the final DXd model, including typical values, covariate effects, IIV, and RUV.
  - *Significance*: Provides the numerical values of the DXd model parameters and their precision, essential for understanding the model and its implications.

---

### Supplementary Materials
Supplementary materials include additional diagnostics (Figures S1-S5) and tables (Table S1-S2) describing clinical studies, covariate distributions, and subgroup analyses. These are available with the online version of the article.

---

### Future Directions
Future work should include additional data from patients with moderate hepatic impairment to conclusively assess the need for dose adjustments in this subpopulation. Further evaluation of the impact of immunogenicity (ADA) on PK and exposure–response relationships is also warranted. The models could be updated with data from ongoing and future studies to refine the covariate effects and support alternative dosing strategies.

---

### Expert Commentary
This is a well-conducted population PK analysis that leverages a large dataset from multiple studies. The semi-mechanistic linking of ADC and payload PK, including the time-varying DAR model, is innovative and provides a more accurate description of DXd exposure. The covariate analysis is thorough, and the simulation-based evaluation of weight-based dosing is clinically relevant. The decision to exclude ADA from the final model despite a statistically significant effect is justified by the small magnitude and lack of impact on IIV. The main limitation is the sparse data in moderate hepatic impairment patients, which the authors acknowledge. Overall, this work sets a high standard for ADC PK modeling and supports regulatory decisions.

---

### Bottom Line
The integrated population PK models for Dato-DXd and DXd support weight-based dosing (6 mg/kg Q3W with a 540 mg cap for ≥90 kg) and indicate no dose adjustments are needed for the evaluated covariates, including age, sex, albumin, hepatic function, and region. The models adequately describe the PK and provide a basis for exposure–response analyses.

---

---

## 📊 Figures

![Illustration of the final Dato-DXd (blue) and DXd (orange) models.]({{ site.baseurl }}/assets/digests/2026-08-31-population-pharmacokinetic-analysis-of-datopotamab-deruxtecan-and-dxd-in/figures/fig_01.jpg)

![Prediction-corrected visual predictive check of Dato-DXd (upper panel) and DXd (lower panel) concentrations versus time since first dose (truncated to 9 cycles),]({{ site.baseurl }}/assets/digests/2026-08-31-population-pharmacokinetic-analysis-of-datopotamab-deruxtecan-and-dxd-in/figures/fig_02.jpg)

![Visualization of typical Dato-DXd clearances' parameter values versus the range of Dato-DXd plasma concentrations obtained after Dato-DXd 6.0 mg/kg administratio]({{ site.baseurl }}/assets/digests/2026-08-31-population-pharmacokinetic-analysis-of-datopotamab-deruxtecan-and-dxd-in/figures/fig_03.jpg)

![Forest plots illustrating the impact, or lack of impact, of covariate effects on Dato-DXd AUC3(left panel) and DXd AUC3(right panel), based on the final Dato-DXd]({{ site.baseurl }}/assets/digests/2026-08-31-population-pharmacokinetic-analysis-of-datopotamab-deruxtecan-and-dxd-in/figures/fig_04.jpg)

![Boxplots of simulated Dato-DXd and DXdCmax3and AUC3using a body weight-based dosing of 6.0 mg/kg Q3W, up to a maximum of 540 mg for patients weighing ≥ 90 kg, ba]({{ site.baseurl }}/assets/digests/2026-08-31-population-pharmacokinetic-analysis-of-datopotamab-deruxtecan-and-dxd-in/figures/fig_05.jpg)