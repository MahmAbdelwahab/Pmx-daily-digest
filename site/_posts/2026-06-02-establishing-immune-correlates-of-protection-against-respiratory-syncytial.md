---
layout: post
title: "Establishing Immune Correlates of Protection Against Respiratory Syncytial Virus Infection to Accelerate Vaccine Development: A Model-Based Meta-Analysis"
date: 2026-06-02
authors: "Kashihara Y, Qin L, Shimizu S, Diderichsen PM, Kotsuma M, Yoshihara K"
journal: "Manuscript (preprint)"
doi: "https://pubmed.ncbi.nlm.nih.gov/41134084/"
paper_type: popk
tags: [popk, immunology, regulatory, meta-analysis]
excerpt_text: "This model-based meta-analysis (MBMA) quantifies the relationship between serum neutralizing activity (SNA) and vaccine efficacy (VE) against respiratory syncytial virus (RSV) across three clinical severity levels in older adults. Pharmacometricians and vaccine developers will find the dose–response framework and the exploratory analysis of cell-mediated immunity (CMI) directly applicable to immunobridging strategies and regulatory submissions. The work provides preliminary evidence that SNA may serve as a surrogate marker for VE, with CMI potentially offering additional benefit for the most severe disease endpoint."
pdf_path: "/assets/digests/2026-06-02-establishing-immune-correlates-of-protection-against-respiratory-syncytial/PMx_Establishing_Immune_Correlates_of_Protec_20260602.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This model-based meta-analysis (MBMA) quantifies the relationship between serum neutralizing activity (SNA) and vaccine efficacy (VE) against respiratory syncytial virus (RSV) across three clinical severity levels in older adults. Pharmacometricians and vaccine developers will find the dose–response framework and the exploratory analysis of cell-mediated immunity (CMI) directly applicable to immunobridging strategies and regulatory submissions. The work provides preliminary evidence that SNA may serve as a surrogate marker for VE, with CMI potentially offering additional benefit for the most severe disease endpoint.

---

### Executive Summary
This study applies a meta-regression approach to aggregate data from seven randomized placebo-controlled trials of RSV vaccines in older adults (≥60 years) to establish immune correlates of protection. The primary analysis demonstrates a statistically significant positive correlation between placebo-corrected RSV-A SNA (on a log2 scale) and VE for acute respiratory infection (ARI), lower respiratory tract disease with ≥2 symptoms (LRTD2+), and LRTD with ≥3 symptoms (LRTD3+). A secondary exploratory analysis incorporating interferon-gamma (IFN-γ) as a CMI marker suggests that higher CMI is associated with additional VE for the most severe LRTD3+ endpoint, after accounting for SNA. The authors employ multiple imputation to handle missing immunogenicity data and conduct sensitivity analyses including leave-one-out and subtype substitution (RSV-B SNA). The findings support the use of SNA as a surrogate endpoint for immunobridging in RSV vaccine development, though limitations of small sample size and data heterogeneity warrant cautious interpretation.

---

### Scientific Context & Motivation
Establishing immune correlates of protection (CoP) is critical for accelerating vaccine development, enabling immunobridging strategies that can reduce reliance on large phase 3 field efficacy trials. For RSV, despite recent approvals of subunit and mRNA vaccines, quantitative relationships between vaccine-induced immunogenicity (SNA, CMI) and clinical protection across severity levels remain poorly characterized. Prior individual-level studies have associated neutralizing antibodies with reduced infection risk, and CMI with reduced disease severity, but no meta-analytic framework had integrated these across multiple vaccine platforms in older adults. This MBMA addresses the gap by providing a fit-for-purpose, transparent model that can inform dose selection, endpoint prioritization, and regulatory discussions for novel RSV vaccines.

---

## ⚡ Methodological Snapshot
The authors performed a linear mixed-effects meta-regression on aggregate data from seven randomized placebo-controlled trials of RSV vaccines in older adults. The primary model related placebo-corrected log2 SNA to VE on a complementary log-log scale, with severity-specific intercepts and slopes, a between-trial random intercept, and residual error weighted by the standard error of VE. A secondary model added a common SNA slope and a severity-specific IFN-γ slope for LRTD3+. Missing immunogenicity data were handled by cross-matching from earlier-phase studies and by multiple imputation using chained equations (mice R package). Sensitivity analyses included leave-one-out and substitution of RSV-B SNA.

---

## 🏗️ Structural Model Breakdown
The model is a linear mixed-effects meta-regression with no compartmental structure. The dependent variable is the transformed VE (complementary log-log: -log(1-VE/100)). Fixed effects: severity-specific intercepts (3 levels) and severity-specific SNA slopes (primary) or common SNA slope + IFN-γ slope on LRTD3+ (secondary). Random effects: between-trial variability (additive normal, SD ~0.3). Residual error: additive normal weighted by the standard error of VE. No latent compartments or differential equations.

---

### Detailed Methodological Analysis

#### Modeling Approach
Linear mixed-effects meta-regression on the complementary log-log transformed VE scale. The primary model included severity-specific fixed effects for intercept and SNA slope, a between-trial random intercept (additive normal), and residual error weighted by the standard error of VE (Delta method). The secondary model used a common SNA slope across severity levels and an additional IFN-γ slope for LRTD3+. Models were estimated using maximum likelihood (software not explicitly stated, but likely R or NONMEM).

#### Data Sources
Aggregate data from seven randomized, placebo-controlled phase 2b/3 trials of RSV vaccines in older adults (≥60 years). VE was reported for three severity levels: RSV-ARI, RSV-LRTD2+, and RSV-LRTD3+. Immunogenicity (SNA, IFN-γ, CD4+ T cells) was measured ~28 days post-dose. Missing immunogenicity data were imputed by cross-matching with earlier-phase studies from the same sponsor with similar design and population.

#### Estimation Methods
Maximum likelihood estimation for linear mixed-effects models. For multiple imputation, Bayesian linear regression (method='norm' in mice) was used to generate 50 imputed datasets, with parameters pooled using Rubin's rules.

#### Model Evaluation
Goodness-of-fit plots (observed vs. predicted VE, Figure S11). Leave-one-out analysis to assess influence of individual studies. Sensitivity analysis using RSV-B SNA instead of RSV-A. Comparison of complete-case analysis (CCA) and multiple imputation (MI) for the secondary CMI model.

#### Covariate Analysis
Exploratory covariate analysis evaluated study duration and SNA collection time but found no statistically significant effects. The primary analysis did not include additional covariates beyond severity level and SNA.

---

### Statistical Rigor Assessment
The analysis uses appropriate meta-analytic methods with weighting by standard errors. The complementary log-log transformation is suitable for VE as a proportion. Multiple imputation with chained equations is a principled approach for missing data under MAR, though the small sample (n=7 studies) limits the reliability of the imputation model. The leave-one-out analysis provides insight into influential studies. However, the small number of studies (7) and VE observations (19) limits the precision of random effect estimates and the ability to detect covariate effects. The assumption of normality for random effects and residuals is untestable with this sample size. The authors acknowledge these limitations appropriately.

---

## 📊 Key Findings
The primary analysis showed that higher RSV-A SNA (placebo-corrected log2 ratio) was significantly associated with increased VE across all three severity levels: slope estimates (SE) were 0.323 (0.110) for ARI, 0.285 (0.110) for LRTD2+, and 0.517 (0.117) for LRTD3+. Intercepts were not significantly different from zero, consistent with the expectation of zero VE when SNA is equal between vaccine and placebo. Model predictions indicated that an RSV-A SNA ratio of approximately 8 corresponds to ~70% VE for LRTD3+. The secondary analysis identified a significant IFN-γ slope on LRTD3+ (0.418, SE=0.112) in the complete-case analysis, suggesting CMI contributes additional protection for the most severe endpoint; however, this effect was attenuated and non-significant in the multiple imputation analysis (0.111, SE=0.138). Sensitivity analyses using RSV-B SNA yielded comparable results, and leave-one-out analysis confirmed robustness except for the LRTD2+ slope when omitting the VANIR study.

---

## 💡 Clinical & Regulatory Implications
The results suggest that SNA can serve as a surrogate endpoint for VE in RSV vaccine development, potentially enabling immunobridging strategies for new vaccines or expanded indications. For example, an RSV-A SNA ratio of ~8 relative to placebo corresponds to ~70% VE against LRTD3+, which could be used as a target for dose selection. The exploratory CMI finding indicates that vaccines eliciting strong T-cell responses may provide additional protection against severe disease, supporting the inclusion of CMI endpoints in clinical trials. Regulatory interactions should consider these preliminary findings within the ICH M15 framework for model-informed drug development.

---

### Strengths & Limitations

#### Strengths
- First MBMA to simultaneously quantify SNA–VE relationships across multiple RSV clinical severity levels and explore CMI contribution.
- Use of placebo-corrected immunogenicity reduces bias from assay and population differences.
- Multiple imputation (MI) with chained equations appropriately handles missing data under the missing-at-random assumption, with sensitivity analyses comparing complete-case and MI results.
- Leave-one-out analysis and RSV subtype substitution (RSV-B) assess robustness of findings.
- Fit-for-purpose linear model on the complementary log-log scale is transparent and facilitates regulatory interpretation.

#### Limitations (Acknowledged by Authors)
- Small sample size (7 studies, 19 VE observations) limits generalizability and power for detecting covariate effects.
- High proportion of missing IFN-γ data (3 of 7 studies) challenges the validity of MAR assumptions and MI results.
- Cross-matching of immunogenicity data from non-efficacy studies may introduce bias due to imperfect matching.
- Heterogeneity in study design (duration, geography, assays) could confound relationships despite placebo correction.
- Inability to fit a sigmoid Emax model due to lack of moderate SNA ratios (3–7) limits characterization of the dose–response shape.

#### Limitations (Expert Review)
- The model assumes a linear relationship on the complementary log-log scale, which may not capture potential nonlinearities or ceiling effects at high SNA levels.
- Between-trial variability is modeled as additive on the transformed scale, but the small number of studies (7) makes estimation of random effects imprecise.
- The secondary CMI analysis uses a common SNA slope across severity levels, which may mask severity-specific SNA effects; the primary analysis showed a steeper slope for LRTD3+.
- No formal assessment of model discrimination or calibration (e.g., VPC-like diagnostics) beyond basic goodness-of-fit plots.
- The analysis does not account for potential differences in RSV subtype circulation across seasons or regions, which could affect VE estimates.

#### Generalizability
The findings are specific to older adults (≥60 years) receiving single-dose RSV vaccines in a single season, and may not extend to pediatric populations, multi-dose regimens, or monoclonal antibody prophylaxis. The limited number of vaccine platforms (subunit, mRNA, vector-based) and the exclusion of early-phase studies restrict generalizability to novel modalities. However, the consistent SNA–VE relationship across severity levels and subtypes suggests the framework could be adapted to other populations with additional data.

---

### Key Equations

**Primary SNA–VE model (linear predictor on complementary log-log scale)**

{% raw %}
$$
g(VE_{ik}) = \text{Intercept}_k + \text{Slope}_k \times \text{SNA}_i + \eta_i + \epsilon_{ik}
$$
{% endraw %}

Linear mixed-effects model on the transformed VE scale, where g(VE) = -log(1 - VE/100). SNA_i is the placebo-corrected log2 RSV-A SNA ratio. Intercept_k and Slope_k are severity-specific fixed effects; η_i is between-trial random intercept; ε_ik is residual error weighted by the standard error of VE.

**Back-transformation to VE scale**

{% raw %}
$$
VE_{ik} = 100 \times (1 - \exp(-g(VE_{ik})))
$$
{% endraw %}

Converts the linear predictor back to the original VE percentage scale for interpretation.

**Secondary SNA + CMI model**

{% raw %}
$$
g(VE_{ik}) = \text{Intercept}_k + \text{Slope}_{SNA} \times \text{SNA}_i + \text{Slope}_{IFN,k} \times \text{CMI}_i + \eta_i + \epsilon_{ik}
$$
{% endraw %}

Extended model including a common SNA slope across severity levels and a severity-specific IFN-γ slope (only on LRTD3+). CMI_i is the placebo-corrected natural log IFN-γ response.

---

### Figures & Tables

- **Figure 1**: Relationship between RSV-A SNA (log2 ratio vs placebo) and VE for ARI, LRTD2+, and LRTD3+ based on complete-case analysis. Solid lines represent model predictions with 95% confidence intervals; points are observed VE with 95% CI.
  - *Significance*: Primary result showing positive SNA–VE correlation across all severity levels, with steepest slope for LRTD3+.
- **Figure 2**: Same as Figure 1 but using RSV-B SNA with multiple imputation for missing data.
  - *Significance*: Confirms that the SNA–VE relationship is consistent across RSV subtypes, supporting the use of either subtype as a surrogate.
- **Figure 3**: Simulated VE based on the MI model incorporating both RSV-A SNA and IFN-γ, showing the additional contribution of CMI to VE for LRTD3+.
  - *Significance*: Illustrates that higher CMI (IFN-γ) is associated with increased VE for the most severe endpoint, suggesting a potential role for CMI in mitigating disease severity.
- **Table 1**: Overview of the seven included vaccine efficacy studies, including vaccine type, population, control, number of participants, clinical outcomes, and immunogenicity outcomes.
  - *Significance*: Provides the data foundation for the meta-analysis, highlighting the diversity of vaccine platforms and endpoints.
- **Table 2**: VE values (with 95% CI) for each study across severity levels, and immunogenicity values (SNA, IFN-γ, CD4+ T cells) expressed as ratio to placebo.
  - *Significance*: Raw data used in the analysis; shows the range of VE and immunogenicity across studies, including negative VE in D4420C00005 and Resolve.
- **Table 3**: Parameter estimates (with SE and 95% CI) for the primary SNA–VE model (RSV-A and RSV-B) and the secondary SNA+CMI model (CCA and MI).
  - *Significance*: Quantifies the strength of the SNA–VE relationship and the CMI effect, with comparison between analytical approaches.

---

### Supplementary Materials
Supplementary materials include goodness-of-fit plots (Figure S11), leave-one-out analysis results (Figure S13), correlation between RSV-A and RSV-B SNA (Figure S3), simulated VE based on CCA model (Figure S9), and imputation diagnostics (Figure S7). These support the robustness and transparency of the primary and sensitivity analyses.

---

### Future Directions
Future work should expand the dataset to include more vaccine platforms, multi-dose regimens, and pediatric populations to validate and refine the SNA–VE relationship. Individual-level data meta-analysis would allow better characterization of nonlinear dose–response (e.g., sigmoid Emax) and assessment of CMI contributions with greater statistical power. Prospective studies comparing adjuvanted vs. non-adjuvanted vaccines with matched antigen could isolate the CMI effect. Additionally, incorporating time-varying immunogenicity and durability of protection would enhance the model's utility for predicting long-term efficacy.

---

### Expert Commentary
This paper represents a timely and well-executed application of MBMA to a pressing regulatory science question. The authors wisely chose a simple, transparent model structure that facilitates stakeholder understanding—a key consideration when the analysis is intended to support immunobridging for a specific vaccine candidate (VN-0200). The use of multiple imputation for missing CMI data is methodologically sound, though the small number of observed IFN-γ points (n=4) makes the MAR assumption tenuous. I would have liked to see a Bayesian approach that could formally incorporate prior information on the SNA–VE relationship from other respiratory viruses (e.g., SARS-CoV-2) and better quantify uncertainty. The leave-one-out sensitivity analysis is a strength, but the impact of the VANIR study on the LRTD2+ slope underscores the fragility of the dataset. For practicing pharmacometricians, this work is a valuable case study in fit-for-purpose modeling for regulatory decision-making, but it also highlights the importance of prospective data collection and the limitations of post-hoc meta-analyses with sparse data.

---

### Bottom Line
This MBMA provides the first quantitative evidence that SNA is a promising surrogate marker for VE against RSV infection in older adults, with a clear dose–response across clinical severity levels. For pharmacometricians, the work demonstrates a pragmatic meta-regression approach that can support immunobridging strategies and regulatory interactions, though the small dataset and missing data challenges highlight the need for cautious interpretation and further validation with individual-level data. The exploratory CMI analysis suggests that cell-mediated immunity may confer additional protection against severe disease, warranting inclusion of CMI endpoints in future vaccine trials.

---

---

## 📊 Figures

![Relationship between RSV-A serum neutralizing activity and vaccine efficacy across three different clinical severity levels based on complete case analysis. The]({{ site.baseurl }}/assets/digests/2026-06-02-establishing-immune-correlates-of-protection-against-respiratory-syncytial/figures/fig_01.png)

![Relationship between RSV-B serum neutralizing activity and vaccine efficacy across three different clinical severity levels based on a multiple imputation approa]({{ site.baseurl }}/assets/digests/2026-06-02-establishing-immune-correlates-of-protection-against-respiratory-syncytial/figures/fig_02.png)

![Contribution of cell-mediated immunity to vaccine efficacy. The solid and dashed lines represent typical value and 95% confidence interval for vaccine efficacy (]({{ site.baseurl }}/assets/digests/2026-06-02-establishing-immune-correlates-of-protection-against-respiratory-syncytial/figures/fig_03.png)