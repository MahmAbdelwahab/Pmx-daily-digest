---
layout: post
title: "Risks encountered when not adjusting for food and clock time in concentration-QTc analyses of Phase I studies"
date: 2026-03-25
authors: "Bardol M, Laveille C, Sarr C, Hooker AC"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026, 53(1):10012-9"
doi: "https://doi.org/10.1007/s10928-025-10012-9"
paper_type: generic
tags: [generic, covariate-analysis, regulatory]
excerpt_text: "This simulation study demonstrates that uncontrolled and unbalanced food intake or clock time variations in Phase I studies can inflate false-negative rates in concentration-QTc analyses by up to 50% when using the standard pre-specified linear model (PLM). Pharmacometricians and cardiac safety scientists should read this to understand how simple adjustments for food status and diurnal variation can rescue TQT waiver strategies from suboptimal study designs."
pdf_path: "/assets/digests/2026-03-25-risks-encountered-when-not-adjusting-for-food-and-clock-time-in-concentration/PMx_Risks_encountered_when_not_adjusting_for_20260325.pdf"
retroactively_classified: true
---

### Quick Take
This simulation study demonstrates that uncontrolled and unbalanced food intake or clock time variations in Phase I studies can inflate false-negative rates in concentration-QTc analyses by up to 50% when using the standard pre-specified linear model (PLM). Pharmacometricians and cardiac safety scientists should read this to understand how simple adjustments for food status and diurnal variation can rescue TQT waiver strategies from suboptimal study designs.

---

### Executive Summary
As the pharmaceutical industry increasingly relies on Phase I single and multiple ascending dose studies to support thorough QT/QTc (TQT) study waivers, the validity of concentration-QTc modeling under real-world design constraints becomes critical. This comprehensive simulation analysis evaluates the robustness of the Garnett et al. pre-specified linear model (PLM) across five scenarios ranging from optimal designs to suboptimal designs with systematic imbalances in food intake, dosing time, or sampling time between treatment groups. The study reveals that while random variations have minimal impact, systematic imbalances between placebo and active treatment groups—particularly regarding food intake (70% vs 30% breakfast patterns) or dosing clock times—can dramatically inflate negative rates (falsely concluding no QT liability) from 20.8% to nearly 50%. Importantly, the authors propose and validate an adjusted PLM incorporating time-varying food status and clock time corrections (diurnal variation adjustment factors), which successfully restores appropriate negative rates comparable to or more conservative than the reference optimal design. These findings have immediate regulatory implications, emphasizing that meticulous documentation of meal times and clock times in Phase I trials is essential for reliable cardiac safety assessment, and that pre-specified adjustments can salvage analyses from otherwise compromised datasets.

---

## ⚡ Methodological Snapshot
The authors employed a rigorous simulation framework using R (version 4.2.2) with mrgsolve (v1.0.6) for PK/PD simulation and lme4 (v1.1.30) for model fitting. They simulated 1000 replicate datasets for each of five scenarios (A: optimal reference; B: random variation; C: unbalanced food; D: unbalanced dosing time; E: unbalanced sampling time for long half-life drugs). Each scenario utilized parallel groups of 10 subjects per treatment (placebo vs active doses 10-250 mg). Pharmacokinetics were generated using a one-compartment model with first-order absorption (MAT=1h, Vc=5L, t1/2=12h or days for Scenario E). QTcF data were simulated using a mechanistic placebo model incorporating baseline QTcF, circadian rhythms (24h, 12h, and 6h harmonics relative to midnight), and food effects based on time since last meal (TSLM), plus a linear drug effect (slope 0.2 for mild, 0.5 for moderate) evaluated at twice Cmax of 100 mg (HCRE=35 mg/L). The analysis compared the standard unadjusted PLM (with nominal time-after-dose and baseline QTcF covariates) against an adjusted PLM incorporating time-varying binary food status (fed if TSLM 2-4h) and clock time-based diurnal correction factors (DBCG: discrete adjustments based on hour of day). Performance was evaluated via negative rates—percentage of simulations where the upper 90% confidence interval bound fell below the 10 ms regulatory threshold.

---

## 🏗️ Structural Model Breakdown
Pharmacokinetic Model: One-compartment with first-order absorption and elimination. Key parameters: mean absorption time (MAT) = 1 hour, central volume (Vc) = 5 L, elimination half-life = 12 hours (Scenarios A-D) or days (Scenario E). Between-subject variability: 25% CV on primary PK parameters. Residual error: 7.5% proportional. QTcF Placebo Model: Baseline QTcF (population mean with inter-individual variability) + Circadian component (sum of 24h, 12h, and 6h sine/cosine harmonics relative to midnight) + Food effect (function of time since last meal) + Additive residual error. The circadian component captures diurnal variation in cardiac repolarization. QTcF Drug Effect: Linear slope model (E = β × C) where β = 0.2 (mild effect) or 0.5 (moderate effect). Combined additively with placebo model: QTcF_total = Placebo + β × C. PLM Structural Model: ΔQTcF_ij = θ₀ + θ₁×TRT_i + θ₂×C_ij + θ₃,ⱼ + θ₄×(QTcF₀,i - QTcF₀,median) + η₀,i + η₂,i×C_ij + ε_ij. Where θ₀ is placebo intercept, θ₁ is treatment effect on intercept, θ₂ is concentration slope, θ₃,ⱼ are N-TAD-specific effects (categorical), θ₄ is baseline covariate effect, η are random effects (IIV on intercept and slope, diagonal covariance), and ε is additive residual error.

---

### Detailed Methodological Analysis

#### Modeling Approach
Pharmacokinetic simulations used a one-compartment model with first-order absorption and elimination. QTcF simulations employed a semi-mechanistic model combining: (1) baseline QTcF with inter-individual variability; (2) circadian rhythm components (24h, 12h, and 6h harmonics); (3) food effect as function of time since last meal; (4) linear concentration-QTcF relationship (slope model); and (5) additive residual error. The concentration-QTc analysis utilized the Garnett et al. pre-specified linear mixed-effects model (PLM) with treatment-specific intercept, concentration slope, categorical nominal time-after-dose (N-TAD) covariate, and baseline QTcF centering. An adjusted PLM added time-varying food status and diurnal variation adjustment factors (DBCG) derived from Minocha et al. All models fitted using lme4 in R.

#### Data Sources
In silico simulation of Phase I single ascending dose studies. Parallel group design with 10 subjects per group receiving either placebo or active treatment (doses: 10, 25, 50, 75, 100, 150, 250 mg). Simulated healthy volunteer population with PK variability (25% CV on primary parameters) and QTcF variability (IIV and residual error). Five scenarios representing different levels of design control: optimal (Scenario A), random variation (B), unbalanced food intake (C), unbalanced dosing time (D), and unbalanced sampling time for long half-life drugs (E).

#### Estimation Methods
Linear mixed-effects modeling using the lme4 package in R (v4.2.2). Maximum likelihood estimation via restricted maximum likelihood (REML) or similar algorithms inherent to lme4. Random effects implemented for intercept and slope with diagonal covariance structure (no correlation between IIV terms to aid convergence).

#### Model Evaluation
Simulation-based evaluation using 1000 replicates per scenario. Primary metric: negative rate (percentage of simulations with upper 90% CI bound <10 ms at HCRE). Comparison of unadjusted vs adjusted PLM performance against reference Scenario A. Visual assessment of ΔΔQTcF-concentration relationships with prediction intervals.

#### Covariate Analysis
Covariates included a priori per Garnett et al.: baseline QTcF (continuous, centered at median) and nominal time-after-dose (categorical). Adjusted PLM added: (1) food status (binary time-varying: 1 if TSLM 2-4h, else 0); and (2) DBCG (categorical diurnal adjustment factor based on clock time: values of -7.5, -5, -2.5, 0, 2.5, 5, 7.5 ms based on hour of day relative to midnight). No stepwise covariate selection performed; adjustments pre-specified based on known physiological mechanisms.

---

### Scientific Context & Motivation
The ICH E14 guideline and subsequent Q&A updates have established that well-designed Phase I studies with concentration-QTc modeling can replace dedicated TQT studies for QT liability assessment. The Garnett et al. white paper proposed a standardized pre-specified linear mixed-effects model (PLM) to ensure consistency across analyses. However, Phase I studies are primarily designed for safety and tolerability, not optimized for ECG pharmacokinetic/pharmacodynamic (PK/PD) modeling, often resulting in uncontrolled confounders such as diurnal variation (circadian rhythms in cardiac repolarization) and prandial effects (food-induced QTc shortening of approximately 10 ms). Prior work by Minocha et al. characterized circadian patterns, while others documented food effects, yet no systematic evaluation existed regarding how these uncontrolled factors—when systematically imbalanced between treatment arms—bias the PLM. This study fills that critical gap by quantifying the bias and demonstrating adjustment strategies, directly addressing the regulatory need for reliable early cardiac safety assessment while acknowledging operational realities of Phase I clinical units.

---

### Statistical Rigor Assessment
The study employs a robust simulation design with 1000 replicates per scenario, providing adequate power to detect differences in negative rates. The use of validated software (R, mrgsolve, lme4) ensures numerical reliability. The authors appropriately tested both random (Scenario B) and systematic (Scenarios C-E) variations, distinguishing between balanced noise and confounding imbalance. However, several limitations exist: (1) Simulated data only—no empirical validation in real Phase I studies; (2) Fixed effect sizes for food (~10 ms) and circadian variation may not generalize to all populations or baseline correction methods; (3) Diagonal covariance structure for IIV may oversimplify correlation between intercept and slope variability; (4) No assessment of model misspecification diagnostics (goodness-of-fit plots mentioned only briefly for Scenario C); (5) Single sample size (n=10/group) tested; power implications for smaller or larger studies unclear; (6) Missing data mechanisms not explicitly addressed. The conservative approach of using adjusted models when unnecessary (Scenario B) showing no penalty is reassuring regarding Type I error control.

---

## 📊 Key Findings
In the reference optimal design (Scenario A) with mild QT liability (true effect slightly above 10 ms threshold), the unadjusted PLM yielded a 20.8% negative rate (false negatives). Scenario B (random ±1h variation in dosing/meal times, balanced between groups) showed similar negative rates for both unadjusted and adjusted PLM, confirming that balanced random noise does not bias results. Critical vulnerabilities emerged in unbalanced scenarios: Scenario C (unbalanced food: 70% treated vs 30% placebo had breakfast) inflated negative rates to 42.3% with unadjusted PLM, corrected to 22.7% with food-adjusted PLM. Scenario D (unbalanced dosing times) showed inflated negative rates (up to ~50%) with unadjusted PLM, which the adjusted PLM corrected to more conservative levels (below reference). Scenario E (unbalanced sampling for long half-life drug) similarly benefited from adjustment. The adjusted PLM consistently reduced false-negative rates toward or below the reference 20.8%, demonstrating that systematic confounders—when documented and modeled—can be statistically controlled without inflating Type I error.

---

## 💡 Clinical & Regulatory Implications
These findings carry significant regulatory and operational implications for cardiac safety assessment. First, they validate that Phase I studies can support TQT waivers even with imperfect designs, provided food intake and clock times are meticulously documented and adjusted for in the PLM. This reduces the burden of repeating studies due to minor protocol deviations. Second, they mandate that clinical teams must record actual (not just nominal) dosing times, sampling times, and meal times in electronic data capture systems to enable post-hoc adjustments. Third, for drugs with long half-lives where sampling spans multiple days (Scenario E), special attention must be paid to sampling clock time standardization or adjustment. Fourth, the food effect adjustment (TSLM 2-4h window) can serve dual purposes: correcting confounding while potentially demonstrating assay sensitivity (food-induced QTc shortening). Importantly, the adjusted model remains fully pre-specifiable, preserving the regulatory advantage of the PLM approach while enhancing robustness against operational variability inherent in early clinical development.

---

### Strengths & Limitations

#### Strengths
- First systematic evaluation of uncontrolled design factors on PLM performance in Phase I QTc assessment
- Comprehensive simulation framework (1000 replicates) providing robust statistical power for scenario comparisons
- Practical relevance: addresses real-world Phase I operational constraints (meal timing, sampling windows)
- Adjustment strategies are pre-specifiable, maintaining regulatory acceptability for TQT waiver submissions
- Demonstrates both the problem (inflation of false negatives to 50%) and solution (adjustment reducing to ~20%)
- Use of established models (Minocha et al. for circadian, Garnett et al. for PLM) ensures generalizability to current industry practice

#### Limitations (Acknowledged by Authors)
- Simulated data only—no validation in actual clinical trials
- Food effect magnitude (~10 ms) and circadian patterns based on literature may not represent all populations
- Minocha et al. model developed from pooled Phase I studies with potentially uncontrolled food intake, potentially partially accounting for food effects already
- Time drift component from Minocha model (day-to-day variation) excluded as unclear if physiological
- Covariates age, sex, and race excluded from simulations to prevent additional assumptions, potentially affecting absolute QTcF variability representation

#### Limitations (Expert Review)
- Fixed sample size (n=10/group) limits generalizability to smaller or larger Phase I studies
- Diagonal covariance structure for IIV may not reflect true correlation between baseline QTcF and drug sensitivity
- No evaluation of model diagnostics (goodness-of-fit, residual patterns) across the 1000 replicates to assess model adequacy
- Binary food classification (TSLM 2-4h) may be overly simplistic compared to continuous meal effects
- Discrete DBCG categories (hourly rounding) for circadian adjustment may introduce residual confounding compared to continuous sinusoidal models
- No assessment of assay sensitivity using positive controls (e.g., moxifloxacin) in the simulation framework
- Limited exploration of interaction effects between food, circadian, and concentration effects

#### Generalizability
Findings are highly generalizable to standard Phase I SAD/MAD studies in healthy volunteers for oral small molecules with similar PK characteristics (moderate half-life). Generalizability decreases for: non-oral routes (where food effects differ), patient populations with altered circadian rhythms or baseline QTcF (e.g., shift workers, severe renal/hepatic impairment), drugs with non-linear PK or complex absorption profiles (food effects on PK not considered here), and compounds with hysteresis in concentration-QTc relationships. The principles apply broadly to any concentration-response analysis where time-varying confounders (food, circadian) may differ between treatment arms.

---

### Key Equations

**Drug Effect on QTcF (Slope Model)**

$$
E_{\text{drug},ij} = \beta \cdot C_{ij}
$$

Linear concentration-QTcF relationship where beta is the population slope parameter (0.2 for mild effect, 0.5 for moderate effect) and C_ij is the drug concentration for individual i at time j.

**Combined QTcF Model**

$$
QTcF_{ij} = \text{Placebo}_{ij} + \beta \cdot C_{ij}
$$

Additive combination of placebo model (comprising baseline, circadian rhythm, and food effects) with drug effect for total QTcF prediction.

**Unadjusted Pre-specified Linear Model (PLM)**

$$
\Delta QTcF_{ij} = \theta_0 + \theta_1 \cdot TRT_i + \theta_2 \cdot C_{ij} + \theta_{3,j} + \theta_4 \cdot (QTcF_{0,i} - QTcF_{0,\text{median}}) + \eta_{0,i} + \eta_{2,i} \cdot C_{ij} + \epsilon_{ij}
$$

Core mixed-effects model with placebo intercept (theta_0), treatment intercept (theta_1), concentration slope (theta_2), nominal time-after-dose categorical effects (theta_3,j), baseline QTcF covariate (theta_4), inter-individual random effects on intercept and slope (eta), and residual error (epsilon).

**Residual Error Model**

$$
y_{ij} = \hat{y}_{ij} + \epsilon_{\text{add},ij}
$$

Additive residual unexplained variability where epsilon_add is normally distributed with mean 0 and standard deviation sigma_add.

**Mean Signal Prediction**

$$
\Delta\Delta QTcF = \hat{\theta}_1 + \hat{\theta}_2 \cdot C
$$

Predicted placebo-corrected change from baseline QTcF at concentration C, representing the point estimate of drug effect from the PLM.

**Upper Bound of 90% Confidence Interval**

$$
UB = \hat{\theta}_1 + \hat{\theta}_2 \cdot C + t \cdot SE
$$

Calculation of the upper bound for regulatory decision-making, where t is the critical value from t-distribution and SE is the standard error of the prediction.

**Standard Error of Prediction**

$$
SE = \sqrt{\sigma_{\theta_1}^2 + C^2 \cdot \sigma_{\theta_2}^2 + 2 \cdot C \cdot \sigma_{\theta_1,\theta_2}}
$$

Standard error accounting for variance in intercept (sigma_theta1), variance in slope (sigma_theta2), and their covariance, evaluated at concentration C.

---

### Figures & Tables

- **Table 1**: Scenario definitions comparing five Phase I study designs (A: optimal reference; B: random variation; C: unbalanced food; D: unbalanced dosing time; E: unbalanced sampling for long half-life drug) with specific protocols for dosing clock time, sampling times, meal clock times, and PLM adjustments applied.
  - *Significance*: Critical reference defining the systematic variations tested, enabling readers to map the simulation results to specific real-world protocol deviations and understand which design features require statistical adjustment.
- **Figure 1**: Change from baseline (ΔQTcF) versus clock time (Scenarios A-D) or time since first dose (Scenario E) stratified by scenario and colored by food effect status, illustrating the confounding patterns induced by different design imbalances.
  - *Significance*: Visual demonstration of how uncontrolled food intake and clock time create distinct QTcF profiles across scenarios, establishing the biological plausibility of the confounding mechanisms tested.
- **Figure 2**: Scatter plot of predicted ΔΔQTcF signal versus drug concentration for Scenario A (optimal design), showing observed data overlaid with model-predicted slope and 90% confidence interval bands for no, mild, and moderate drug effects.
  - *Significance*: Validates the simulation framework by showing expected concentration-dependent QTc prolongation and demonstrating the mild effect case (20.8% negative rate) used as the reference standard for subsequent comparisons.
- **Figure 3**: Scatter plots of predicted ΔΔQTcF signals assuming mild drug effect for Scenarios B through E, comparing unadjusted versus adjusted PLM fits, with negative rates annotated for each approach.
  - *Significance*: Primary results showing the dramatic improvement in signal detection when using adjusted PLM (accounting for food and clock time) versus unadjusted PLM in suboptimal designs, with negative rates decreasing from up to 50% toward the 20.8% reference.

---

### Code & Reproducibility Assessment
Software environment documented (R v4.2.2, packages lme4 v1.1.30 and mrgsolve v1.0.6), facilitating replication of analysis methods. However, no simulation code, analysis scripts, or simulated datasets are publicly provided, limiting full reproducibility. The study used standard PK/PD modeling approaches that could be replicated by experienced pharmacometricians using the detailed parameter specifications in the Methods section and Online Resource 1 (supplementary material not available in this extraction).

---

### Supplementary Materials
The authors reference supplementary materials (Online Resource 1) containing detailed simulation settings for QTcF data generation across the three drug effect cases (no, mild, moderate). This material likely includes specific parameter values for the circadian rhythm components and food effect models that were not fully detailed in the main text. The supplementary materials were not available for this analysis but would be essential for exact replication of the simulation study.

---

### Future Directions
Immediate extensions should validate these findings in retrospective analyses of actual Phase I studies with documented food and clock time imbalances. Future research could explore: (1) continuous parametric models for food and circadian effects rather than categorical adjustments; (2) joint PK-QTc models accounting for food effects on both PK parameters (bioavailability) and PD (QTc) simultaneously; (3) optimal design theory to determine the most informative sampling windows that are robust to ±2-4 hour timing variations; (4) machine learning approaches to detect systematic imbalances in baseline characteristics or time-varying covariates between treatment arms; (5) extension to other cardiac biomarkers (e.g., J-Tpeakc, T-wave morphology); (6) evaluation in special populations (elderly, obese) where food and circadian effects may differ; and (7) integration of wearable ECG devices providing continuous monitoring rather than discrete timepoints, requiring new modeling frameworks for high-frequency time-series data with meal and activity annotations.

---

### Expert Commentary
This work arrives at a critical juncture as the industry pivots from dedicated TQT studies to integrated Phase I cardiac safety assessments. The authors elegantly demonstrate that 'pre-specified' does not mean 'immutable'—the PLM framework can and should be pre-specified to include mechanistic adjustments for known confounders like food and clock time. The 50% false-negative rate in unbalanced designs is sobering and likely explains some historical discrepancies between Phase I signals and later cardiac safety findings. From a teaching perspective, this paper exemplifies the pharmacometric principle that 'all models are wrong, but some are useful'—the unadjusted PLM is wrong when confounders are unbalanced, while the adjusted PLM retains utility. The use of time-varying covariates (food status) in a linear mixed-model framework is methodologically sound, though I caution that the binary classification (2-4h post-meal) should be tested against continuous TSLM models in future work. Operationally, this study mandates that Phase I units treat meal diaries as essential safety data, not optional administrative records. The finding that adjustments make the analysis more conservative (lower negative rates) in some scenarios provides reassurance that we are not trading bias for inflated Type I error. Finally, the approach aligns with the FDA's Model-Informed Drug Development (MIDD) paradigm, where simulation precedes critical decisions—here, simulation guides protocol design and analysis planning.

---

### Bottom Line
When conducting concentration-QTc analyses for TQT waiver support, pharmacometricians must pre-specify adjustments for food status (using time-varying binary covariates for 2-4h post-meal windows) and diurnal variation (using clock time-based categorical factors) in the PLM, particularly when dosing or sampling times vary systematically between treatment groups. Meticulous documentation of actual (not scheduled) meal times, dosing times, and ECG sampling clock times in Phase I protocols is no longer optional but essential for valid cardiac safety assessment. When these adjustments are implemented, even suboptimal Phase I designs with unbalanced confounders can yield reliable QTc liability assessments comparable to well-controlled studies, preventing unnecessary false-negative conclusions that could endanger patients in later development.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [Change from baseline (ΔQTcF) versus clock time (Scenarios A, B, C, D) or time since first dose (Scenario E) when assuming a mild drug effect stratified by Scenario and colored by f],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [Scatter plot of predicted signal for ΔΔQTcF when applying the PLM to Scenario A. Observed ΔΔQTcF versus drug concentration overlaid with the slope and the associated predicted 90% ],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [Scatter plot of predicted signal for ΔΔQTcF assuming mild effect when applying unadjusted and adjusted PLM to Scenarios B, C, D, and E. Observed ΔΔQTcF versus drug concentration ov],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```