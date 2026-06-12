---
layout: post
title: "Brain Amyloid Plaque Levels Affect Clinical Progression in Alzheimer Disease: Assessment of Amyloid PET and Change in CDR-SB Utilizing Semi-Mechanistic Model"
date: 2026-05-31
authors: "Bhagunde P, Patel N, Willis BA, Balser R, Cariou A, Irizarry MC, Hefting S, Ristic L"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 14(2), 70173"
doi: "10.1002/psp4.70173"
paper_type: popk
tags: [popk, qsp]
excerpt_text: "This paper presents a semi-mechanistic PK/PD model linking lecanemab-mediated amyloid PET reduction to slowing of CDR-SB progression in early Alzheimer's disease, using data from Phase 2 (Study 201) and Phase 3 (Clarity AD) trials. The key innovation is the separation of disease progression into amyloid-dependent and non-amyloid-dependent intrinsic rate components, demonstrating that amyloid PET is a better predictor of drug effect than drug exposure or binary treatment assignment. Pharmacometricians working on neurodegenerative disease modeling, quantitative systems pharmacology of Alzheimer's disease, and surrogate endpoint validation will find this work directly relevant to their practice."
pdf_path: "/assets/digests/2026-05-31-brain-amyloid-plaque-levels-affect-clinical-progression-in-alzheimer-disease/PMx_Brain_Amyloid_Plaque_Levels_Affect_Clini_20260531.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a semi-mechanistic PK/PD model linking lecanemab-mediated amyloid PET reduction to slowing of CDR-SB progression in early Alzheimer's disease, using data from Phase 2 (Study 201) and Phase 3 (Clarity AD) trials. The key innovation is the separation of disease progression into amyloid-dependent and non-amyloid-dependent intrinsic rate components, demonstrating that amyloid PET is a better predictor of drug effect than drug exposure or binary treatment assignment. Pharmacometricians working on neurodegenerative disease modeling, quantitative systems pharmacology of Alzheimer's disease, and surrogate endpoint validation will find this work directly relevant to their practice.

---

### Executive Summary
Bhagunde et al. developed a longitudinal, semi-mechanistic PK/PD model that quantitatively links lecanemab exposure to amyloid PET reduction and, in turn, to slowing of CDR-SB progression via a beta-regression-based Richard's growth function. Using pooled data from lecanemab Phase 2 and Phase 3 studies (total ~1000 subjects, up to 110 months), the model decomposes the intrinsic rate of disease progression into an amyloid-dependent component (captured by a piecewise linear function saturating at ~105 Centiloids) and a non-amyloid-dependent component. The analysis demonstrates that amyloid PET is a superior predictor of clinical benefit compared to drug concentration or binary treatment assignment, providing a quantitative framework for understanding amyloid as a surrogate endpoint. The model projects that continuous lecanemab treatment yields increasing separation from placebo over 4 years (~2.15 points CDR-SB difference at 48 months) and supports a monthly maintenance regimen after 18 months of biweekly dosing. Key covariates include baseline diagnosis (MCI vs mild AD) and baseline MMSE on baseline CDR-SB, and APOE4 carrier status on baseline amyloid PET.

---

### Scientific Context & Motivation
Alzheimer's disease progression is known to be nonlinear, driven by multiple interacting pathological processes including amyloid-beta accumulation, tau pathology, neuroinflammation, and neurodegeneration. While the 'amyloid hypothesis' has motivated development of anti-amyloid immunotherapies like lecanemab, crude correlations between amyloid PET and clinical endpoints are highly confounded by baseline amyloid levels, baseline cognition, and the extent of amyloid clearance achievable. Existing disease progression models have used Richard's functions to capture nonlinear CDR-SB trajectories but have not quantitatively linked treatment-mediated amyloid reduction to clinical slowing in a single integrated framework. This analysis addresses the critical gap of whether amyloid PET reduction can serve as a valid surrogate endpoint for clinical benefit, moving beyond simple correlation to a mechanistic, model-based assessment. The key paradigm challenge is that amyloid-dependent and non-amyloid-dependent disease components are additive and may interact in complex ways that evolve over the disease course.

---

## ⚡ Methodological Snapshot
The modeling approach combines a turnover model for amyloid PET dynamics (with lecanemab-driven amyloid removal) and a beta-regression Richard's function for CDR-SB disease progression. The key innovation is the decomposition of the intrinsic rate of disease progression into an amyloid-dependent component (piecewise function of current amyloid PET, saturating at ~105 Centiloids) and a non-amyloid component. Model development proceeded sequentially: first, a population PK model for lecanemab from prior work; second, an amyloid PET PK/PD model relating drug exposure to amyloid reduction; third, a disease progression model using placebo data; and finally, the integrated PK-amyloid PET-CDR-SB model. Estimation used NONMEM's FOCE-I and SAEM methods. Model evaluation included pcVPCs, goodness-of-fit diagnostics, and nonparametric bootstrap (500 replicates). Covariate selection used forward inclusion ($p<0.01$) and backward elimination ($p<0.001$).

---

## 🏗️ Structural Model Breakdown
The model consists of two linked components:

**Amyloid PET Turnover Model:**
- Baseline amyloid (BSL) modeled on logit scale constrained 0-250 Centiloids
- Drug effect (DESLP) drives amyloid removal as a function of lecanemab concentration
- Amyloid floor (AMFLOOR) allows plateau above zero
- Kout (0.0572/year) governs natural re-accumulation rate

**CDR-SB Disease Progression Model (Beta Regression with Richard's function):**
- Baseline CDR-SB (BASL) on logit scale (0-18 bound)
- Precision parameter for beta distribution
- Shape parameter (SHP fixed to 8.23) controls curve inflection
- $IR = IR_{\text{amyloid}} + IR_{\text{non-amyloid}}$
- $IR_{\text{amyloid}}$: piecewise function of current amyloid PET (slope $0-\theta_{PET}$, plateau beyond)
- $IR_{\text{non-amyloid}}$: constant (time-invariant in current model)
- Covariates: diagnosis and BMMSE on BASL; BMMSE on $IR_{\text{non-amyloid}}$

---

### Detailed Methodological Analysis

#### Modeling Approach
The modeling framework is a sequential, semi-mechanistic PK/PD model implemented in NONMEM 7.5.1. The amyloid PET component uses an indirect response turnover model where lecanemab concentration enhances the removal rate of amyloid (measured in Centiloids). The CDR-SB component uses a beta regression with a logistic link function and a Richard's (generalized logistic) growth model to capture nonlinear disease trajectory. The intrinsic rate (IR) is decomposed into: $IR = IR_{\text{amyloid}} + IR_{\text{non-amyloid}}$, where $IR_{\text{amyloid}}$ depends on current amyloid PET via a piecewise linear function (slope 0 for $<0$ CL, linear increase $0-\theta_{PET}$, plateau $>\theta_{PET}$). Inter-individual variability was modeled as lognormal (for IR, baseline) and additive (for amyloid floor). Residual variability for amyloid PET was modeled as combined proportional + additive. Beta regression precision parameter was estimated.

#### Data Sources
Pooled data from lecanemab Study 201 (Phase 2, Core + OLE) and Study 301/Clarity AD (Phase 3, Core + OLE), totaling 1119 subjects (4575 observations) for amyloid PET model and 1012 subjects (8456 observations) for the integrated CDR-SB model. Data spanned up to 110 months (Study 201) and 54 months (Clarity AD). Amyloid PET was measured in Centiloid scale. CDR-SB scores ranged from 0-18. Baseline covariates included: diagnosis (MCI vs mild AD), BMMSE (baseline Mini-Mental State Examination), APOE4 carrier status, age, sex, body weight, race, ADA, and NAb status. Study 201 had a 9-59 month treatment gap between Core and OLE.

#### Estimation Methods
First-order conditional estimation with interaction (FOCE-I) and stochastic approximation expectation maximization (SAEM) as implemented in NONMEM 7.5.1. The paper does not specify which parameters were estimated with which method, but SAEM is typically used for complex PK/PD models with many random effects. Parameter precision was computed using the R matrix (standard errors) and nonparametric bootstrap.

#### Model Evaluation
Model evaluation included: (1) prediction-corrected visual predictive checks (pcVPC) with at least 500 simulations for each model, showing good agreement between model predictions and observed data across dose groups and time; (2) standard goodness-of-fit plots (observed vs predicted, conditional weighted residuals vs time/predictions) showing no major bias; (3) nonparametric bootstrap with 500 replicates to obtain 95% CIs for parameter estimates and assess robustness; (4) shrinkage assessment ($\eta$ shrinkage 13.7-41.8% for amyloid model, 6.3-14.4% for CDR-SB model).

#### Covariate Analysis
Covariates were tested using a forward-inclusion ($p<0.01$, $\Delta OFV > 6.63$ for 1 df) and backward-elimination ($p<0.001$, $\Delta OFV > 10.83$ for 1 df) approach. In the amyloid PET model, only APOE4 carrier status on baseline amyloid (carriers 33% higher) and age on drug effect (older subjects have faster amyloid removal) were retained. In the CDR-SB model, retained covariates were: diagnosis on baseline CDR-SB (MCI vs mild AD), BMMSE on baseline CDR-SB, and BMMSE on non-amyloid intrinsic rate. Notably, APOE4 heterozygous carrier status on $IR_{\text{amyloid}}$ was significant in univariate but excluded due to poor precision and high condition number.

---

### Statistical Rigor Assessment
The statistical methods are appropriate for the data and modeling objectives. Beta regression is correctly chosen for a bounded outcome (CDR-SB 0-18) and avoids issues with normal-error models. The sequential model building approach is reasonable, though joint estimation might be theoretically preferable to propagate uncertainty across components. The forward-backward covariate selection uses appropriate significance thresholds ($p<0.01$ forward, $p<0.001$ backward), balancing false discovery and overfitting. Bootstrap with 500 replicates provides robust uncertainty quantification. Sample sizes are large (1119 for amyloid, 1012 for CDR-SB), providing adequate power for covariate detection. The treatment gap in Study 201 could introduce unmodeled bias if off-treatment disease trajectory differs from on-treatment, though the turnover model partially accounts for this through Kout. Shrinkage for drug effect on amyloid (41.8%) is moderate and could affect individual post hoc estimates used for graphical analysis. The fixed shape parameter ($SHP=8.23$) was determined by sensitivity analysis but not re-estimated in the final model, which may understate uncertainty. Missing data handling is not explicitly discussed, but repeated measures analyses like mixed-effects models are generally robust to missing-at-random assumptions.

---

## 📊 Key Findings
The final PK-amyloid PET-CDR-SB model reveals several key findings. First, the amyloid-dependent intrinsic rate of disease progression increases linearly with amyloid PET from 0 to approximately 105 Centiloids, then plateaus, consistent with amyloid accumulation having a direct, saturable effect on cognitive decline in early disease. Second, amyloid PET is a significantly better predictor of drug effect than lecanemab steady-state concentration ($C_{avg}$) or binary treatment assignment, supporting amyloid reduction as a surrogate for efficacy. Third, the estimated half-life of amyloid re-accumulation (from $K_{out} = 0.0572$ $year^{-1}$) is approximately 12.1 years, consistent with published estimates. Fourth, APOE4 carriers had 33% higher baseline amyloid PET (83 vs 62 Centiloids) but genotype did not affect drug effect on amyloid removal. Fifth, baseline MMSE and diagnosis (MCI vs mild AD) predicted baseline CDR-SB, with MCI subjects having lower baseline scores. Sixth, the model projected that lecanemab 10 mg/kg biweekly yields ~0.43 points CDR-SB slowing at 18 months (matching Clarity AD observed 0.45 points), increasing to ~1.5 points at 36 months and ~2.15 points at 48 months. Finally, transitioning to monthly maintenance dosing at 18 months preserves similar efficacy to continued biweekly dosing over 4 years, while less frequent dosing (every 3 or 6 months) results in amyloid re-accumulation and loss of clinical benefit.

---

## 💡 Clinical & Regulatory Implications
This model provides direct quantitative evidence supporting several key clinical and regulatory decisions for lecanemab: (1) amyloid PET reduction is a valid surrogate for clinical benefit, justifying its use as a primary endpoint in accelerated approval pathways; (2) early treatment is critical—subjects with lower baseline amyloid (40 vs 80 CL) reach amyloid negativity faster and have greater relative slowing (40% vs 31% at 18 months); (3) continuous treatment is necessary, with monthly maintenance dosing after 18 months of biweekly treatment preserving efficacy; (4) less frequent dosing (every 3 or 6 months) leads to amyloid re-accumulation and reduced benefit; (5) the projected increasing separation in CDR-SB over 4 years (0.45 points at 18 mo, 1.5 points at 36 mo, 2.15 points at 48 mo) supports long-term treatment benefit; (6) APOE4 carriers start with higher amyloid but respond similarly to non-carriers in terms of drug effect on amyloid removal; (7) older subjects have faster amyloid clearance, which may inform age-specific expectations. The monthly maintenance strategy reduces treatment burden (infusion visits from twice monthly to monthly) while maintaining efficacy, which has significant practical implications for patients, caregivers, and healthcare systems.

---

### Strengths & Limitations

#### Strengths
- Large pooled dataset from Phase 2 and Phase 3 studies with up to 110 months follow-up, providing rich longitudinal information to inform both amyloid and clinical trajectories.
- Novel semi-mechanistic decomposition of intrinsic disease progression rate into amyloid-dependent and non-amyloid-dependent components, accounting for saturable amyloid effect and non-linear disease trajectory.
- Comprehensive comparison of three methods to describe drug effect (binary treatment, drug exposure, amyloid PET), rigorously demonstrating amyloid PET as a superior predictor.
- Well-conducted model evaluation with goodness-of-fit plots, pcVPCs, and nonparametric bootstrapping with 500 replicates, showing good parameter precision and predictive performance.
- Clinically actionable simulations evaluating maintenance dosing regimens directly inform therapeutic strategy and dosing frequency recommendations.
- Appropriate use of beta regression with Richard's function to handle the bounded (0-18) ordinal-like nature of CDR-SB scores.

#### Limitations (Acknowledged by Authors)
- The model defines disease progression as the sum of two pathways (amyloid and non-amyloid) and does not distinguish between various non-amyloid mechanisms such as neuroinflammation and tau accumulation.
- The additive structure assumes no interaction between amyloid and non-amyloid pathways, which may be an oversimplification.
- Future development of pathway-specific biomarkers would allow more granularity/complexity in model structure.

#### Limitations (Expert Review)
- The model does not incorporate tau PET or CSF biomarkers, which could provide mechanistic insight into the non-amyloid component and improve predictions, especially for later disease stages.
- The piecewise function for amyloid effect on IR uses an abrupt breakpoint at 0 and 105 Centiloids. A smooth transition (e.g., $E_{max}$ or sigmoidal) might be more physiologically plausible and was not explicitly compared in terms of fit statistics.
- The Shape parameter (SHP) of the Richard's function was fixed to 8.23 rather than estimated in the final model, which may limit flexibility in capturing varying trajectory shapes across the population.
- The study includes a 9-59 month treatment gap in Study 201 (between Core and OLE), which may introduce unmodeled complexity in disease trajectory during the off-treatment period.
- The impact of concomitant medications (e.g., symptomatic treatments like donepezil) was partially tested but the model may not fully capture time-varying symptomatic treatment effects.
- The bootstrap 95% CI for some parameters (e.g., $K_{out}$ for amyloid, $0.0292-0.0869$ $year^{-1}$) is somewhat wide, suggesting limited information to precisely estimate amyloid re-accumulation kinetics.
- The model assumes the non-amyloid dependent IR is constant over time, which may not hold as non-amyloid pathologies (tau, inflammation) themselves progress nonlinearly.

#### Generalizability
The model was developed in a clinical trial population with early symptomatic AD (MCI and mild AD) meeting specific inclusion/exclusion criteria, which may not fully represent the general AD population seen in clinical practice. Results are likely generalizable to similar early AD populations treated with anti-amyloid therapies that achieve comparable amyloid PET reduction. The quantitative relationship between amyloid PET and CDR-SB progression may be specific to the mechanism of action of lecanemab (targeting protofibrils and plaques) and may not directly translate to other anti-amyloid agents with different binding profiles or clearance mechanisms. External validation in independent datasets (e.g., other anti-amyloid trials or natural history cohorts) would strengthen generalizability.

---

### Key Equations

**Richard's Function for CDR-SB Disease Progression (Beta Regression on logit scale)**

{% raw %}
$$
\text{logit}\left(\frac{\text{CDR-SB}}{18}\right) = \text{BASL} + \frac{\text{IR} \cdot t^{\text{SHP}}}{1 + t^{\text{SHP}}}
$$
{% endraw %}

Describes the nonlinear progression of CDR-SB over time t, where BASL is baseline CDR-SB on logit scale, IR is intrinsic rate of progression (combined amyloid and non-amyloid components), and SHP is a shape parameter controlling the inflection point of the growth curve.

**Total Intrinsic Rate of Disease Progression**

{% raw %}
$$
\text{IR} = \text{IR}_{\text{amyloid}} + \text{IR}_{\text{non-amyloid}}
$$
{% endraw %}

Decomposes the intrinsic rate into an amyloid-dependent component (function of current amyloid PET) and a non-amyloid-dependent component (constant over time in the model).

**Piecewise Amyloid-Dependent Intrinsic Rate**

{% raw %}
$$
\text{IR}_{\text{amyloid}} = \begin{cases} 0, & \text{AmPET} < 0 \\ \frac{\text{IR}_{\text{max,amyloid}}}{\theta_{\text{PET}}} \cdot \text{AmPET}, & 0 \leq \text{AmPET} \leq \theta_{\text{PET}} \\ \text{IR}_{\text{max,amyloid}}, & \text{AmPET} > \theta_{\text{PET}} \end{cases}
$$
{% endraw %}

Piecewise linear relationship between amyloid PET (Centiloids) and amyloid-dependent intrinsic rate, with no effect below 0 Centiloids, linear increase up to breakpoint theta_PET (~105 CL), and plateau for higher amyloid levels.

**Amyloid PET Model (Turnover with Drug Effect)**

{% raw %}
$$
\frac{d\text{AmPET}}{dt} = k_{\text{in}} - k_{\text{out}} \cdot \text{AmPET} \cdot (1 - \text{DRUG})
$$
{% endraw %}

Describes amyloid PET dynamics as a turnover process with production rate k_in and elimination rate k_out, modulated by drug effect (DRUG) driven by lecanemab concentration.

**Baseline Amyloid PET (Logit Transform)**

{% raw %}
$$
\text{BSL} = 250 \cdot \frac{e^{\phi}}{1 + e^{\phi}}
$$
{% endraw %}

Logit transform to constrain baseline amyloid PET estimates between 0 and 250 Centiloids, where phi is the typical value with covariate effects and inter-individual variability.

---

### Figures & Tables

- **Figure 1**: Schematic of the PK-amyloid-PET and PK-amyloid-PET-CDR-SB PK/PD models, showing the two-stage modeling approach: lecanemab PK → amyloid PET reduction → effect on CDR-SB through amyloid-dependent and non-amyloid dependent pathways.
  - *Significance*: Provides a clear overview of the integrated modeling framework and the mechanistic link between drug exposure, biomarker (amyloid PET), and clinical endpoint (CDR-SB).
- **Figure 2**: Relationship between model-estimated intrinsic rate of disease progression (IR) and baseline amyloid PET, showing the piecewise function with linear increase from 0 to ~100 Centiloids and plateau above.
  - *Significance*: Key exploratory finding that motivates the piecewise functional form for $IR_{\text{amyloid}}$ and demonstrates that disease progression rate increases with amyloid load up to a saturation point.
- **Figure 3**: Model-predicted and observed (mean, 95% CI) CDR-SB profiles for lecanemab 10 mg/kg biweekly and placebo over 48 months, with projection showing continued separation over time.
  - *Significance*: Validates the model against observed Clarity AD data and demonstrates the projected increasing benefit of continuous treatment over 4 years (projected ~2.15 point difference at 48 months).
- **Figure 4**: Simulated amyloid PET and change from baseline CDR-SB for representative subjects with varying baseline amyloid PET (40 vs 80 CL) and MMSE (23 vs 28), illustrating the benefit of early treatment.
  - *Significance*: Illustrates that subjects with lower baseline amyloid reach amyloid negativity earlier (3 months vs 12 months) and have greater relative slowing of CDR-SB progression (40% vs 31% at 18 months).
- **Figure 5**: Simulated mean amyloid PET and CDR-SB profiles comparing continued biweekly dosing vs monthly maintenance starting at 18 months vs less frequent regimens (every 3 or 6 months).
  - *Significance*: Provides quantitative evidence that monthly maintenance after 18 months of biweekly treatment preserves efficacy, while less frequent dosing leads to amyloid re-accumulation and reduced clinical benefit.
- **Table 1**: Final amyloid PET PK/PD model parameter estimates with %RSE, shrinkage, and bootstrap 95% CI, including baseline amyloid, Kout, drug effect (DESLP), APOE4 and age covariates, and IIV/residual variability.
  - *Significance*: Provides the quantitative basis for amyloid PET dynamics with lecanemab treatment, including the estimated half-life of amyloid re-accumulation (~12.1 years).
- **Table 2**: Final PK-amyloid PET-CDR-SB PK/PD model parameter estimates with %RSE and bootstrap CI, including amyloid-dependent IR (0.205), non-amyloid IR (0.552), shape parameter (8.23 fixed), precision (75.4), breakpoint (105 CL), and covariate effects (diagnosis on baseline, BMMSE on baseline and non-amyloid IR).
  - *Significance*: Central repository of the final model's numerical results, including the decomposition of disease progression into amyloid and non-amyloid components and key covariate effects.

---

### Code & Reproducibility Assessment
The paper does not provide code, model files, or NONMEM control streams. The analysis was conducted using NONMEM 7.5.1 and R 4.1.3 (with mrgsolve for simulation). No mention of public availability of code or data repository is made, so reproducibility is limited to replication by the sponsor's internal teams.

---

### Future Directions
Several extensions are suggested by this work. First, incorporating tau PET or CSF phosphorylated tau measures would allow separation of the non-amyloid component into specific mechanistic pathways, potentially revealing interactions between amyloid and tau pathologies. Second, external validation of the model using data from other anti-amyloid therapies (e.g., donanemab, aducanumab) would test whether the amyloid PET-CDR-SB relationship is drug-specific or generalizable across mechanisms. Third, extending the model to later disease stages (moderate AD) could quantify how the balance between amyloid and non-amyloid components shifts over the full disease continuum. Fourth, joint modeling of amyloid PET and other biomarkers (e.g., volumetric MRI, FDG-PET) could provide a more comprehensive quantitative systems pharmacology framework. Fifth, the model could be used for clinical trial simulation to optimize trial design (e.g., enrichment strategies based on baseline amyloid PET, duration, sample size). Finally, the impact of treatment gaps on long-term outcomes merits further exploration, given the 9-59 month gap in Study 201.

---

### Expert Commentary
This is a well-executed example of contemporary PK/PD modeling in a therapeutic area—neurodegenerative disease—where traditional exposure-response models often fall short due to the slow, nonlinear, multi-factorial nature of disease progression. The authors made several commendable modeling decisions: (1) using beta regression with a Richard's function for CDR-SB is appropriate given the bounded, ordinal-like nature of the endpoint; (2) the systematic comparison of binary treatment, drug exposure, and biomarker as predictors of drug effect is rigorous and provides strong evidence for amyloid PET as a surrogate; (3) the decomposition into amyloid-dependent and non-amyloid components reflects biological reality and avoids the pitfall of attributing all drug effect to one pathway. One pedagogical point: the piecewise function for amyloid-dependent IR (0 slope below 0 CL, linear increase 0-105 CL, plateau above 105 CL) is a practical choice but has discontinuities in the first derivative. An $E_{max}$ model with a baseline effect might be smoother and more mechanistic, though the data appear to support the piecewise form. The estimated half-life of amyloid re-accumulation (~12 years) is a critical parameter for understanding the durability of treatment effects and the need for continued dosing. From a regulatory perspective, this model provides strong quantitative support for amyloid PET as a reasonably likely surrogate endpoint (accelerated approval context) and for the monthly maintenance strategy. The gap in Study 201 (9-59 months off treatment) is a challenge but also provides useful information on the reversibility of amyloid reduction—the model captures this through the Kout parameter. I would have liked to see more discussion of model sensitivity to the fixed shape parameter ($SHP=8.23$) and a comparison of AIC/BIC between alternative functional forms for the amyloid-IR relationship. Overall, this is a high-quality contribution that advances the field of neurodegenerative disease modeling.

---

### Bottom Line
This semi-mechanistic model firmly establishes that lecanemab's clinical benefit (slowing of CDR-SB progression) is mediated through amyloid PET reduction, with amyloid-dependent disease progression saturating at approximately 105 Centiloids. For practicing pharmacometricians, this work provides a rigorous template for linking biomarker changes to clinical outcomes in neurodegenerative diseases, demonstrates the value of decomposing disease progression into mechanistic components, and offers quantitative support for the choice of monthly maintenance dosing after 18 months of biweekly treatment. The modeling framework can be repurposed for other anti-amyloid agents or for integrating additional biomarker modalities (e.g., tau PET) as they become available.

---

---

## 📊 Figures

![Schematic of PK-amyloid-positron emission tomography (PET) and PK-amyloid-PET-CDR-SB PK/PD models.]({{ site.baseurl }}/assets/digests/2026-05-31-brain-amyloid-plaque-levels-affect-clinical-progression-in-alzheimer-disease/figures/fig_01.jpg)

![Intrinsic rate of disease progression (IR) as a Function of baseline amyloid positron emission tomography (PET) using piecewise function of baseline amyloid PET.]({{ site.baseurl }}/assets/digests/2026-05-31-brain-amyloid-plaque-levels-affect-clinical-progression-in-alzheimer-disease/figures/fig_02.jpg)

![Model-predicted and mean (95% CI) observed CDR-SB profiles for 10 mg/kg biweekly Lecanemab and Placebo over 48 months. LEC10-BW, lecanemab 10 mg/kg biweekly. Fig]({{ site.baseurl }}/assets/digests/2026-05-31-brain-amyloid-plaque-levels-affect-clinical-progression-in-alzheimer-disease/figures/fig_03.jpg)

![Simulated amyloid PET and change from baseline in CDR-SB for representative subjects treated with 10 mg/kg Lecanemab biweekly (LEC10-BW) or placebo.]({{ site.baseurl }}/assets/digests/2026-05-31-brain-amyloid-plaque-levels-affect-clinical-progression-in-alzheimer-disease/figures/fig_04.jpg)

![Simulated mean amyloid PET and CDR-SB profiles for 10 mg/kg biweekly for 48 months comparing initiation of monthly 10 mg/kg IV maintenance dose at 18 months.]({{ site.baseurl }}/assets/digests/2026-05-31-brain-amyloid-plaque-levels-affect-clinical-progression-in-alzheimer-disease/figures/fig_05.jpg)