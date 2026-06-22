---
layout: post
title: "Population Pharmacokinetics and Exposure-Response Model-Based Bayesian Extrapolation of FVC-Based Efficacy Endpoints From Adults to Pediatric Patients Receiving Nintedanib"
date: 2026-06-21
authors: "S.H., M.G., J.K., J.R., A.C.K."
journal: "Unknown journal (likely CPT: Pharmacometrics & Systems Pharmacology)"
doi: "N/A"
paper_type: popk
tags: [popk, dose-response, pediatrics]
excerpt_text: "This paper presents a Bayesian extrapolation approach using adult popPK and exposure-response models to support nintedanib dosing in pediatric patients (6–17 years) with fibrosing ILD. The weight-based dosing regimen achieved exposures similar to adults at 150 mg BID, and ER models showed comparable treatment effects on FVC endpoints. Essential reading for pharmacometricians involved in pediatric extrapolation and rare disease drug development."
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a Bayesian extrapolation approach using adult popPK and exposure-response models to support nintedanib dosing in pediatric patients (6–17 years) with fibrosing ILD. The weight-based dosing regimen achieved exposures similar to adults at 150 mg BID, and ER models showed comparable treatment effects on FVC endpoints. Essential reading for pharmacometricians involved in pediatric extrapolation and rare disease drug development.

---

### Executive Summary
The authors developed pediatric popPK and exposure-response models for nintedanib using Bayesian priors from extensive adult data across IPF, SSc-ILD, and progressive fibrosing ILDs. The pediatric popPK model confirmed that weight-based dosing yields exposures matching adult therapeutic levels. ER models for FVC %predicted and FVC Z-score estimated similar $EC_{50}$ (~8 nM) and $E_{max}$ values as adults, with a slower placebo decline in children. Simulations supported dose adjustments for mild hepatic impairment. The work demonstrates successful application of model-based extrapolation to support pediatric approval in a rare disease.

---

### Scientific Context & Motivation
Pediatric interstitial lung disease (ILD) is a rare condition, making standalone efficacy trials infeasible. There was no established dosing or efficacy evidence for nintedanib in children. This paper fills the knowledge gap by leveraging rich adult data (IPF, SSc-ILD, progressive fibrosing ILD) via Bayesian methods to extrapolate PK and efficacy endpoints to pediatric patients, addressing a critical need in pediatric drug development for rare diseases.

---

## ⚡ Methodological Snapshot
Bayesian extrapolation using adult popPK (one-compartment with lag time, first-order absorption/elimination, allometric scaling) and ER models (linear placebo + $E_{max}$ disease-modifying effect) as priors for pediatric data. NONMEM with PRIOR functionality (NWPRI), FOCE with interaction. Covariate selection via stepwise covariate modeling (SCM) at p<0.05. Model evaluation via VPCs and SIR for uncertainty.

---

## 🏗️ Structural Model Breakdown
One-compartment PK model with lag time ($t_{lag}$), first-order absorption ($k_a$), and first-order elimination ($CL/F$, $V/F$). IIV on $V/F$, $k_a$, $F_{rel}$. IOV on $F_{rel}$. Allometric scaling: $CL/F = CL_{pop}\cdot (WT/70)^{0.75}$, $V/F = V_{pop}\cdot (WT/70)^{1}$. Covariates on $F_{rel}$: ethnicity, SSc-ILD, baseline LDH. ER model: FVC endpoint = Baseline + ($Slope_{placebo}$ + Drug_effect)*time, where Drug_effect = $E_{max}\cdot C_{trough,ss}/(EC_{50}+C_{trough,ss})$. IIV on baseline, slope, RUV. Additive residual error on log-transformed PK and untransformed FVC endpoints.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling in NONMEM 7.5. PopPK: one-compartment with lag time, first-order absorption/elimination, IIV on $V/F$, $k_a$, $F_{rel}$, IOV on $F_{rel}$. Allometric scaling (0.75 $CL$, 1 $V$). ER: linear placebo model + $E_{max}$ model for drug effect on slope. Bayesian priors from adult models using NWPRI. FOCE with interaction estimation.

#### Data Sources
InPedILD (Phase 3, randomized, double-blind, placebo-controlled, 24 weeks) and InPedILD-ON (open-label extension, up to 52 weeks). 53 pediatric patients (6–17 years) with clinically significant fibrosing ILD. PK samples: intensive (0–8h at weeks 2 and 26) or sparse (pre-dose, 1h, 3h). FVC measurements at screening, baseline, and multiple follow-up visits.

#### Estimation Methods
First-order conditional estimation with interaction (FOCE+I). PRIOR functionality in NONMEM (NWPRI) for Bayesian parameter estimation with adult priors.

#### Model Evaluation
Visual predictive checks (VPCs) for predictive performance. Sampling-importance-resampling (SIR) for parameter uncertainty. Goodness-of-fit plots. Objective function value (OFV) for model selection.

#### Covariate Analysis
Stepwise covariate modeling (SCM) with p<0.05 for forward inclusion and backward elimination. Tested covariates: age, body weight, sex, ethnicity, ILD diagnosis, LDH, SSc-ILD, etc. Pediatric age effect on IOV $F_{rel}$ identified. Covariates from adult models (ethnicity, SSc-ILD, LDH on $F_{rel}$) retained.

---

### Statistical Rigor Assessment
Appropriate use of Bayesian priors given small sample size. FOCE method suitable for sparse pediatric data. VPCs show adequate predictive performance. SIR used for uncertainty quantification. However, covariate selection at p<0.05 may be liberal given multiple testing and small N (only 44 PK patients). No formal sensitivity analysis for prior influence on parameter estimates. The age effect on IOV $F_{rel}$, while statistically significant, may lack physiological plausibility and could be data-driven.

---

## 📊 Key Findings
Primary findings: (1) Pediatric popPK model structure matches adult one-compartment model with lag time, first-order absorption/elimination, and allometric scaling. (2) Weight-based dosing yields exposures comparable to adults at 150 mg BID, with less variability in children. (3) Pediatric placebo decline is slower than adults: −2.45%/year vs −4.78%/year for FVC %predicted; −0.174 Z-score/year vs −0.309 Z-score/year for FVC Z-score. (4) $EC_{50}$ ~8 nM for both endpoints, similar to adults. (5) $E_{max}$ ~4.17%/year improvement in FVC %predicted and 0.292 Z-score/year for FVC Z-score. (6) Dose reduction by one step recommended for pediatric patients with mild hepatic impairment (Child-Pugh A).

---

## 💡 Clinical & Regulatory Implications
Weight-based dosing (Table S1) recommended for pediatric patients 6–17 years with fibrosing ILD. For mild hepatic impairment (Child-Pugh A), reduce starting dose by one step. Exposures above $EC_{50}$ (~8 nM) achieved in most patients, suggesting efficacious dosing. No additional dose adjustment needed based on age beyond weight-based dosing. The slower placebo decline in children suggests disease progression may be slower, but treatment effect magnitude is similar to adults.

---

### Strengths & Limitations

#### Strengths
- Bayesian approach leverages extensive adult data to overcome small pediatric sample size
- Comprehensive modeling of both popPK and exposure-response for two FVC endpoints
- Simulation-based dose recommendations including hepatic impairment scenarios
- Addresses a rare disease with high unmet medical need
- Transparent reporting of model building steps and covariate selection

#### Limitations (Acknowledged by Authors)
- Small pediatric sample (N=44 PK, N=53 ER) limits independent parameter estimation
- Adult priors dominate parameter estimates; many parameters could not be estimated without prior
- No pediatric patients with hepatic impairment were included in the analysis
- Trial was not powered to estimate efficacy
- Covariate selection used liberal p<0.05 threshold

#### Limitations (Expert Review)
- Age effect on IOV $F_{rel}$ identified at p<0.05 may be spurious given small sample and multiple testing
- Assumption that hepatic impairment effect on bioavailability is identical in children and adults may not account for ontogeny of metabolic pathways (though maturation likely complete by age 6)
- No exposure-response modeling for safety endpoints
- Limited ethnic diversity in pediatric cohort; covariates for Asian ethnicity from adult models not applicable
- No formal sensitivity analysis to quantify influence of adult priors on pediatric parameter estimates

#### Generalizability
Findings apply to children aged 6–17 years with clinically significant fibrosing ILD. Extrapolation to younger children (<6 years) is not supported. The weight-based dosing strategy and ER models may be applicable to other fibrosing ILD subtypes, but validation in larger, more diverse populations is needed.

---

### Key Equations

**One-compartment PK model with lag time**

{% raw %}
$$
C(t) = \frac{F \cdot \text{Dose} \cdot k_a}{V \cdot (k_a - k_e)} \left( e^{-k_e (t - t_{\text{lag}})} - e^{-k_a (t - t_{\text{lag}})} \right)
$$
{% endraw %}

Describes nintedanib plasma concentration over time after oral administration with lag time and first-order absorption/elimination.

**Allometric scaling for clearance**

{% raw %}
$$
CL = CL_{\text{pop}} \times \left( \frac{WT}{70} \right)^{0.75}
$$
{% endraw %}

Body weight scaling of apparent clearance with standard exponent 0.75.

**Allometric scaling for volume**

{% raw %}
$$
V = V_{\text{pop}} \times \left( \frac{WT}{70} \right)^{1}
$$
{% endraw %}

Body weight scaling of apparent volume of distribution with exponent 1.

**Exposure-response model for FVC %predicted**

{% raw %}
$$\begin{aligned}
\text{FVC\%pred}(t) \\
&= \text{Baseline} + \left( \text{Slope}_{\text{placebo}} + \frac{E_{\text{max}} \cdot C_{\text{trough,ss}}}{EC_{50} + C_{\text{trough,ss}}} \right) \cdot t
\end{aligned}$$
{% endraw %}

Linear placebo model with $E_{max}$ disease-modifying drug effect on the slope for FVC %predicted endpoint.

**Exposure-response model for FVC Z-score**

{% raw %}
$$\begin{aligned}
\text{FVC Z-score}(t) \\
&= \text{Baseline} + \left( \text{Slope}_{\text{placebo}} + \frac{E_{\text{max}} \cdot C_{\text{trough,ss}}}{EC_{50} + C_{\text{trough,ss}}} \right) \cdot t
\end{aligned}$$
{% endraw %}

Same structural model as FVC %predicted but for FVC Z-score endpoint.

---

### Figures & Tables

- **Figure 1**: Predicted nintedanib $C_{max,ss}$, $C_{trough,ss}$, $C_{av,ss}$, and $AUC_{\tau,ss}$ versus weight bins stratified by age group, comparing pediatric to adult exposures.
  - *Significance*: Demonstrates exposure matching between pediatric weight-based dosing and adult fixed dosing; shows lower $C_{trough}$ in low-weight children.
- **Figure 2**: Typical population predictions of (A) FVC %predicted and (B) FVC Z-score change from baseline versus time, stratified by treatment and age group.
  - *Significance*: Illustrates slower placebo decline in pediatric patients and comparable treatment effect across age groups.
- **Figure 3**: Typical population predictions of (A) FVC %predicted and (B) FVC Z-score change from baseline versus $C_{trough,ss}$ for pediatric and adult patients.
  - *Significance*: Shows ER relationship and that pediatric exposures achieve similar effect as adults at given $C_{trough}$.
- **Figure 4**: Typical population predictions of (A) FVC %predicted and (B) FVC Z-score difference from placebo versus $C_{trough,ss}$.
  - *Significance*: Quantifies treatment effect relative to placebo across exposure range; confirms pediatric effect comparable to adults.
- **Table 1**: Baseline characteristics of pediatric patients included in the ER analysis, stratified by age group and treatment.
  - *Significance*: Provides demographic and disease severity context; shows similar FVC %predicted across groups.
- **Table 2**: Final parameter estimates for the FVC %predicted exposure-response model.
  - *Significance*: Key estimates: $Baseline$ 54.9%, $Slope$ −4.74%/year, $E_{max}$ 4.17%/year, $EC_{50}$ 8.05 nM, pediatric slope change 2.28%/year.
- **Table 3**: Final parameter estimates for the FVC Z-score exposure-response model.
  - *Significance*: Key estimates: $Baseline$ −3.49 Z-score, $Slope$ −0.308 Z-score/year, $E_{max}$ 0.292 Z-score/year, $EC_{50}$ 8.12 nM, pediatric slope change 0.133 Z-score/year.

---

### Code & Reproducibility Assessment
No code or data provided. Analysis used NONMEM 7.5, Perl-speaks-NONMEM 5.3.2, and R 3.5.3. Proprietary data from Boehringer Ingelheim; models are described in detail but not publicly available.

---

### Supplementary Materials
Supplementary materials include dosing table (Table S1), covariate lists for PK (Table S2) and ER (Table S3), baseline characteristics for PK population (Table S4), final PK parameter estimates (Table S5), and VPCs for PK and ER models (Figures S1–S6). Also includes simulations for hepatic impairment dose adjustments (Figures S5–S6).

---

### Future Directions
Validation in larger pediatric cohorts across multiple centers; inclusion of younger children (<6 years) with appropriate allometric scaling; safety exposure-response modeling for adverse events; assessment of long-term outcomes beyond 52 weeks; application of similar Bayesian extrapolation framework to other ILD subtypes and other tyrosine kinase inhibitors.

---

### Expert Commentary
This is a textbook example of Bayesian extrapolation in pediatric drug development. The use of adult priors is justified given the rarity of pediatric ILD. The weight-based dosing strategy is pragmatic and aligns with allometric principles. However, the reliance on liberal p-values for covariate selection (age effect on IOV) and the assumption of identical hepatic impairment effects warrant caution. The $EC_{50}$ estimates (~8 nM) are consistent across both FVC endpoints, strengthening confidence in the ER relationship. The slower placebo decline in children is interesting and may reflect different disease natural history or measurement challenges. Overall, this analysis supports regulatory approval and provides a framework for similar extrapolations in rare pediatric diseases.

---

### Bottom Line
This analysis provides a robust framework for pediatric extrapolation of nintedanib using Bayesian popPK and ER modeling. The weight-based dosing regimen is validated, and efficacy is predicted to be comparable to adults. The approach serves as a template for pediatric drug development in rare fibrosing lung diseases and supports regulatory decision-making.

---

---

## 📊 Figures

![Predicted nintedanib$C_{max,ss}$,$C_{trough,ss}$,$C_{av,ss}$, and $AUC_{\tau,ss}$versus weight bins and stratified by age group, for the PK simulation data set. The blue line is the ge]({{ site.baseurl }}/assets/digests/2026-06-21-population-pharmacokinetics-and-exposure-response-model-based-bayesian/figures/fig_01.png)

![Typical population predictions of (A) FVC %predicted and (B) FVCZ-score change from baseline versus time, stratified by treatment arm, age group and by trial for]({{ site.baseurl }}/assets/digests/2026-06-21-population-pharmacokinetics-and-exposure-response-model-based-bayesian/figures/fig_02.png)

![Typical population predictions of (A) FVC %predicted and (B) FVCZ-score change from baseline versus$C_{trough,ss}$for the final FVC %predicted and FVCZ-score models,]({{ site.baseurl }}/assets/digests/2026-06-21-population-pharmacokinetics-and-exposure-response-model-based-bayesian/figures/fig_03.png)

![Typical population predictions of (A) FVC %predicted and (B) FVCZ-score difference from placebo versus$C_{trough,ss}$for the final FVC %predicted and FVCZ-score model]({{ site.baseurl }}/assets/digests/2026-06-21-population-pharmacokinetics-and-exposure-response-model-based-bayesian/figures/fig_04.png)