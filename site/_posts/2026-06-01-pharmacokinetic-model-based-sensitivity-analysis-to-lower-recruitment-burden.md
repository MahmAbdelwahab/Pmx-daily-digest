---
layout: post
title: "Pharmacokinetic Model Based Sensitivity Analysis to Lower Recruitment Burden for Young Children Requiring Intravenous Immunoglobulin G Replacement"
date: 2026-06-01
authors: "Dumas T, Mian S, Anam R, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70275"
paper_type: popk
tags: [popk, pediatrics, regulatory]
excerpt_text: "This paper demonstrates how a model-informed drug development (MIDD) approach, combining pooled adult/pediatric data with allometric sensitivity analysis, can overcome recruitment barriers for very young children (2–<6 years) in a post-marketing PK study of IVIG 10% (BIVIGAM). Pediatric pharmacometricians and regulatory scientists will find the use of fixed vs. estimated allometry as a conservative extrapolation strategy particularly instructive. The key takeaway: even with only 3 subjects in the youngest age group, simulations supported that weight-based dosing (300–800 mg/kg) achieves clinically acceptable trough IgG levels (≥5 g/L) in ≥90% of children ≥2 years."
pdf_path: "/assets/digests/2026-06-01-pharmacokinetic-model-based-sensitivity-analysis-to-lower-recruitment-burden/PMx_Pharmacokinetic_Model_Based_Sensitivity__20260601.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper demonstrates how a model-informed drug development (MIDD) approach, combining pooled adult/pediatric data with allometric sensitivity analysis, can overcome recruitment barriers for very young children (2–<6 years) in a post-marketing PK study of IVIG 10% (BIVIGAM). Pediatric pharmacometricians and regulatory scientists will find the use of fixed vs. estimated allometry as a conservative extrapolation strategy particularly instructive. The key takeaway: even with only 3 subjects in the youngest age group, simulations supported that weight-based dosing (300–800 mg/kg) achieves clinically acceptable trough IgG levels (≥5 g/L) in ≥90% of children ≥2 years.

---

### Executive Summary
To fulfill a Pediatric Research Equity Act post-marketing requirement for IVIG 10% in children 2–16 years, the authors developed a population PK model using pooled data from two studies (79 subjects, 1243 IgG levels) including only 3 subjects aged 2–<6 years. A two-compartment model with allometric scaling (estimated exponents: $CL$ $0.939$, $V_c$ $0.528$) adequately described total IgG PK. Both estimated- and fixed-allometry models were qualified and used for simulations. Predicted trough IgG levels for doses of 300–800 mg/kg every 3–4 weeks showed that ≥90% of virtual pediatric subjects would achieve the minimum recommended trough of 5 g/L at 500 mg/kg. The MIDD approach, leveraging prior knowledge of IVIG PK and weight-based dosing, provided sufficient evidence to support supplemental labeling for children ≥2 years, effectively lowering the recruitment burden for the youngest age group.

---

### Scientific Context & Motivation
Primary immune deficiency (PID) disorders require lifelong immunoglobulin replacement therapy. IVIG 10% (BIVIGAM) was approved for adults in 2012, but a pediatric post-marketing study faced extreme difficulty enrolling children under 6 years (only 3 of a planned 6 subjects). Traditional noncompartmental analysis could not leverage trough-only data from the Phase 3 study. The knowledge gap was whether PK in very young children differs from older children and adults in a way that would require dose adjustment. This study fills that gap by pooling all available data (including troughs) and using allometric scaling as a sensitivity analysis to extrapolate from older subjects. It challenges the notion that large pediatric PK samples are always necessary for well-characterized biologics with weight-based dosing, provided robust modeling and simulation are employed.

---

## ⚡ Methodological Snapshot
A population PK model for total IgG after IVIG 10% infusion was developed using NONMEM (FOCEI) with pooled data from two clinical studies (79 subjects, 1243 observations). A two-compartment disposition model with first-order elimination was selected. Body weight was included a priori via allometric scaling; exponents were either estimated (shared for $CL/Q$ and $V_c/V_p$) or fixed to standard values ($0.75$ for $CL$, $1.0$ for volumes). Covariate screening (age, sex, race) found no significant effects beyond weight. Interindividual variability was estimated on $CL$, $V_c$, and $V_p$ with a diagonal $\Omega$ matrix. Residual variability was modeled as proportional error, separate for two assay sources. Model qualification included pcVPCs and sampling importance resampling (SIR). Simulations for 1000 virtual subjects per age group (weights from NHANES) were performed for 300, 500, 800 mg/kg doses on 3- and 4-week cycles.

---

## 🏗️ Structural Model Breakdown
The final structural model is a two-compartment disposition model with first-order elimination from the central compartment. The central compartment ($V_c$) and peripheral compartment ($V_p$) are connected by intercompartmental clearance ($Q$). Baseline total IgG concentration was used to initialize both compartments assuming steady-state distribution at time zero. Body weight was incorporated via allometric scaling on $CL$, $Q$, $V_c$, and $V_p$. In the estimated allometry model, a single exponent was shared for $CL$ and $Q$ ($\theta_{CL} = 0.939$), and a separate exponent shared for $V_c$ and $V_p$ ($\theta_V = 0.528$). In the fixed allometry model, exponents were set to $0.75$ for $CL/Q$ and $1.0$ for $V_c/V_p$. Interindividual variability was modeled as log-normal for $CL$, $V_c$, and $V_p$. Residual error was proportional, with separate estimates for the two assay sources.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling using NONMEM 7.4.3 with FOCEI. Structural model: two-compartment disposition with linear elimination. Allometric scaling normalized to 70 kg. Two models: estimated exponents (shared for $CL/Q$ and $V_c/V_p$) and fixed exponents ($0.75$ for $CL$, $1.0$ for $V$). Diagonal $\Omega$ matrix for IIV on $CL$, $V_c$, $V_p$. Proportional residual error estimated separately for PK concentration records (SDTM.PC) and clinical lab records (SDTM.LB).

#### Data Sources
Pooled data from Phase 3 study (NCT00538915, $n=63$) and Phase 4 study (NCT03164967, $n=16$). Total of 79 evaluable subjects: 3 aged 2–<6 years, 9 aged 6–<12 years, 13 aged 12–16 years, 54 >16 years. 1243 total IgG observations. Dosing: 300–800 mg/kg every 3–4 weeks, individualized to maintain trough ≥5 g/L. Sampling: frequent PK in Phase 3 (21 subjects) and troughs in remaining subjects.

#### Estimation Methods
First-order conditional estimation with interaction (FOCEI). Sampling importance resampling (SIR) used for confidence intervals and stability assessment.

#### Model Evaluation
Goodness-of-fit plots (observed vs. predicted, residuals), pcVPCs stratified by overall and adult/pediatric, condition number, successful covariance step. Both estimated and fixed allometry models were qualified.

#### Covariate Analysis
Stepwise covariate selection (forward inclusion $p<0.05$, backward elimination $p<0.001$) screened age, age group, race, ethnicity on $CL$, $V_c$, $V_p$. No covariates other than body weight were significant. Baseline IgG was used to initialize compartments but not tested as a covariate.

---

### Statistical Rigor Assessment
The sample size (79 subjects, 1243 observations) is adequate for a population PK analysis, though the youngest age group ($N=3$) is extremely limited. Parameter precision was acceptable ($RSE \leq 21\%$ for structural parameters). The use of SIR for confidence intervals is appropriate. The high IIV on $V_p$ ($312\%CV$) suggests limited information to estimate peripheral distribution, likely due to the predominance of trough samples. The decision to use a diagonal $\Omega$ matrix (rather than full block) was justified by model stability and condition number. The separate residual error for two assay sources is a pragmatic approach to handle potential assay differences. Sensitivity analysis with fixed allometry addresses concerns about estimated exponents from sparse data. However, simulations did not propagate parameter uncertainty, which would have provided more realistic prediction intervals for trough attainment.

---

## 📊 Key Findings
Total IgG PK after IVIG 10% was best described by a two-compartment model with linear clearance. Estimated allometric exponents were $0.939$ for $CL/Q$ and $0.528$ for $V_c/V_p$, contrasting with fixed values of $0.75$ and $1.0$. Model-based clearance per kg was similar across age groups (mean ~$0.0145$ dL/day/kg). Simulations using both estimated and fixed allometry models predicted that at 500 mg/kg every 4 weeks, $\geq 90\%$ of subjects in all pediatric age groups would achieve trough IgG $\geq 5$ g/L, and $\geq 68\%$ would achieve $\geq 7$ g/L. The fixed-allometry model gave slightly lower trough predictions for the youngest group, confirming a conservative extrapolation. No covariate other than body weight (age, sex, race) was significant. The high IIV on $V_p$ ($312\%CV$) reflects the steady-state nature of the data and limited information on peripheral distribution.

---

## 💡 Clinical & Regulatory Implications
The study supports the current weight-based dosing of IVIG 10% (300–800 mg/kg every 3–4 weeks) for pediatric patients $\geq 2$ years of age with PID. No dose adjustment based on age is needed beyond weight-based dosing. The simulations confirm that 500 mg/kg every 4 weeks achieves the minimum recommended trough of 5 g/L in $\geq 90\%$ of patients, and the average trough ($\sim 7$ g/L) is consistent with clinically effective levels. The MIDD approach provides regulatory justification for reduced PK sampling in future pediatric studies of similar biologics. Clinicians should continue to individualize doses based on trough monitoring and infection frequency, as emphasized by the authors.

---

### Strengths & Limitations

#### Strengths
- Pooled analysis of two studies increased pediatric sample from 16 to 25 subjects, maximizing information from limited data.
- Use of both estimated and fixed allometry as a sensitivity analysis provides a conservative, transparent extrapolation framework.
- Simulations incorporated realistic body weight distributions from NHANES, enhancing generalizability.
- Model diagnostics (pcVPC, SIR) demonstrated acceptable predictive performance despite sparse data in youngest group.
- Clear regulatory context (PREA PMR) and alignment with FDA/EMA guidance on population PK and exposure-response.

#### Limitations (Acknowledged by Authors)
- Only 3 subjects in the 2–<6 years age group, limiting direct inference.
- High interindividual variability on $V_p$ ($312\%CV$) and some misspecification at extreme concentration ranges.
- All data were at steady state; no data from treatment-naïve patients to estimate endogenous IgG production.
- No exposure-response analysis linking trough levels to infection rates.

#### Limitations (Expert Review)
- The estimated allometric exponent for clearance ($0.939$) is higher than the theoretical $0.75$, possibly influenced by the small sample and confounding with age-related changes in IgG catabolism.
- The fixed-allometry model forced a steeper weight-dependence, which may over-predict clearance in very young children, yet was used as the 'conservative' approach—this choice could be debated.
- Residual variability was modeled separately for two assay sources (PC vs. LB), but the clinical relevance of this distinction is unclear.
- Simulations did not account for parameter uncertainty (only stochastic simulations), which may underestimate variability in predicted trough attainment.

#### Generalizability
The results are specific to IVIG 10% (BIVIGAM) in PID patients and may not directly apply to other IVIG products or indications (e.g., autoimmune diseases). However, the MIDD framework—pooling data, allometric sensitivity analysis, and simulation—is broadly applicable to other biologics with weight-based dosing and similar PK characteristics. The conclusions are limited to children $\geq 2$ years; extrapolation to infants $<2$ years would require additional data.

---

### Key Equations

**Two-compartment PK model (central and peripheral compartments)**

{% raw %}
$$
\frac{dA_c}{dt} = -\left(\frac{CL}{V_c} + \frac{Q}{V_c}\right) \cdot A_c + \frac{Q}{V_p} \cdot A_p + \text{infusion}
$$
{% endraw %}

Differential equation for the amount in the central compartment (Ac) after IV infusion. CL is clearance, Q is intercompartmental clearance, Vc and Vp are central and peripheral volumes.

**Peripheral compartment ODE**

{% raw %}
$$
\frac{dA_p}{dt} = \frac{Q}{V_c} \cdot A_c - \frac{Q}{V_p} \cdot A_p
$$
{% endraw %}

Differential equation for the amount in the peripheral compartment (Ap).

**Allometric scaling for clearance**

{% raw %}
$$
CL_i = CL_{\text{pop}} \times \left(\frac{WT_i}{70}\right)^{\theta_{CL}} \times e^{\eta_{CL,i}}
$$
{% endraw %}

Individual clearance (CL_i) scaled by body weight (WT_i) normalized to 70 kg, with estimated exponent θ_CL (0.939 in estimated model) and interindividual variability η_CL.

**Allometric scaling for volume of distribution**

{% raw %}
$$
V_{c,i} = V_{c,\text{pop}} \times \left(\frac{WT_i}{70}\right)^{\theta_V} \times e^{\eta_{V_c,i}}
$$
{% endraw %}

Individual central volume (Vc_i) scaled by body weight with estimated exponent θ_V (0.528 in estimated model) and interindividual variability η_Vc.

**Residual error model (proportional)**

{% raw %}
$$
C_{obs,ij} = C_{pred,ij} \times (1 + \varepsilon_{1,ij})   \text{or}   C_{obs,ij} = C_{pred,ij} \times (1 + \varepsilon_{2,ij})
$$
{% endraw %}

Proportional residual error estimated separately for PK concentration records (SDTM.PC, ε1) and clinical laboratory records (SDTM.LB, ε2).

---

### Figures & Tables

- **Figure 1**: Total IgG concentrations versus time on log scale with LOESS smoother, stratified by 3-week and 4-week cycles and by study (Phase 3 vs Phase 4).
  - *Significance*: Shows biexponential disposition and supports the choice of a two-compartment model.
- **Figure 2**: Prediction-corrected visual predictive checks (pcVPCs) for the estimated allometry model (A: overall, B: stratified by adult/pediatric) and fixed allometry model (C: overall, D: stratified).
  - *Significance*: Demonstrates adequate predictive performance of both models; median and 5th/95th percentiles of observed data are well captured.
- **Figure 3**: Boxplots of simulated steady-state trough IgG concentrations for 3-week and 4-week cycles at doses 300, 500, 800 mg/kg, for estimated (left) and fixed (right) allometry models, stratified by age group.
  - *Significance*: Key simulation results showing that 500 mg/kg every 4 weeks achieves median trough >5 g/L in all age groups; fixed allometry gives slightly lower troughs in youngest children, confirming conservative extrapolation.
- **Table 1**: Demographics and baseline characteristics by age group (2–<6, 6–<12, 12–16, >16 years): number of subjects, age, sex, body weight, baseline IgG, dose.
  - *Significance*: Documents the sparse data in the youngest group (N=3) and the comparability of baseline IgG and dose across groups.
- **Table 2**: Population PK parameter estimates for both estimated and fixed allometry models: structural parameters ($CL$, $V_c$, $V_p$, $Q$), allometric exponents, random effects (IIV $\%CV$), and residual error.
  - *Significance*: Core results showing precise estimates (RSE ≤21% for structural parameters), high IIV on Vp (312%), and the difference in allometric exponents between models.
- **Table 3**: Post-hoc individual $CL$ (dL/day/kg) and $V_c$ (dL/kg) summarized by age group for both models.
  - *Significance*: Shows that weight-normalized clearance is similar across age groups (0.0137–0.0149 dL/day/kg for estimated model), supporting the extrapolation.
- **Table 4**: Proportion of simulated subjects achieving trough IgG thresholds ($\geq 5$, $\geq 7$, $\geq 10$ g/L) by dose, age group, and dosing interval for both models.
  - *Significance*: Primary evidence for regulatory decision: at 500 mg/kg q4w, ≥90% achieve ≥5 g/L in all age groups with fixed allometry (conservative), and ≥98% with estimated allometry.

---

### Code & Reproducibility Assessment
The NONMEM control stream for the estimated allometry model is provided in Listing S1 (supplementary material). The authors state that simulation datasets were generated using R (version 4.0.2+), but the full code for simulations and diagnostics is not publicly available. Access to anonymized data is available from the corresponding author upon reasonable request for 12 months after publication.

---

### Future Directions
Future studies could include: (1) prospective evaluation of the model's predictions in a larger cohort of children $<6$ years; (2) incorporation of endogenous IgG production and catabolism to better characterize PK in treatment-naïve patients; (3) exposure-response modeling linking trough IgG levels to infection rates to refine target trough levels; (4) application of the same MIDD framework to subcutaneous IgG formulations or other biologics with similar enrollment challenges.

---

### Expert Commentary
This is a well-executed example of pragmatic pharmacometrics in a regulatory setting. The decision to use both estimated and fixed allometry as parallel models is particularly astute—it addresses the inevitable reviewer concern about over-reliance on estimated exponents from a small dataset. The estimated exponent for clearance ($0.939$) is notably higher than the standard $0.75$, which likely reflects the combined effects of body size and maturation of IgG catabolism in children. The fixed-allometry model, by forcing a lower exponent, actually predicts higher clearance per kg in young children, making it the more conservative choice for trough attainment—a clever regulatory strategy. One minor critique: the simulations did not propagate parameter uncertainty, which would have provided a more complete picture of the confidence in trough attainment predictions. Nonetheless, this paper should be required reading for anyone involved in pediatric extrapolation for biologics.

---

### Bottom Line
For practicing pharmacometricians, this paper provides a compelling case study of how MIDD can fulfill regulatory requirements even when enrollment of very young children is nearly impossible. The key methodological lesson is the use of fixed allometry as a sensitivity analysis to create a conservative extrapolation, which can be more persuasive to regulators than relying solely on estimated exponents from sparse data. The work reinforces that for well-characterized biologics with weight-based dosing, a small number of pediatric PK samples combined with robust modeling can support labeling without requiring large, impractical sample sizes.

---

---

## 📊 Figures

![Total IgG concentrations versus time with LOESS on a logarithmic scale stratified by cycle and study. Red lines represent the LOESS, and gray lines represent ind]({{ site.baseurl }}/assets/digests/2026-06-01-pharmacokinetic-model-based-sensitivity-analysis-to-lower-recruitment-burden/figures/fig_01.jpg)

![Prediction-corrected visual predictive check of the population PK model. (A) Estimated allometric exponents–overall. (B) Estimated allometric exponents stratifie]({{ site.baseurl }}/assets/digests/2026-06-01-pharmacokinetic-model-based-sensitivity-analysis-to-lower-recruitment-burden/figures/fig_02.jpg)

![Boxplots for simulated total trough IgG concentration following 3- and 4-week cycles of IVIG 10%. (A) 3-week cycle estimated (left panel) and fixed (right panel)]({{ site.baseurl }}/assets/digests/2026-06-01-pharmacokinetic-model-based-sensitivity-analysis-to-lower-recruitment-burden/figures/fig_03.jpg)