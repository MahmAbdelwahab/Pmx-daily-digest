---
layout: post
title: "Population Pharmacokinetics of Asundexian in People at Risk for Thromboembolic/Cardiovascular Events."
date: 2026-11-10
authors: "Ashraf Yassen, Friederike Kanefendt, Jochen Zisowsky, Astrid Broeker, Hardi Mundl, Peter Vis, Dirk Garmann, Jan Berkhout"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70142"
paper_type: popk
tags: [popk, covariate-analysis]
excerpt_text: "This comprehensive population pharmacokinetic analysis pools data from 2,914 participants across nine Phase I and II trials to characterize asundexian disposition across diverse cardiovascular patient populations and healthy volunteers. The findings establish that observed exposure differences between trials are predominantly driven by demographic and renal covariates (age, weight, sex, eGFR) rather than underlying disease etiology. Importantly, none of the identified covariate effects alter systemic exposure by more than 25%, supporting a flat, unadjusted once-daily dosing regimen across adult patient subgroups."
pdf_path: "/assets/digests/2026-11-10-population-pharmacokinetics-of-asundexian-in-people-at-risk-for/PMx_Population_Pharmacokinetics_of_Asundexia_20261110.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This comprehensive population pharmacokinetic analysis pools data from 2,914 participants across nine Phase I and II trials to characterize asundexian disposition across diverse cardiovascular patient populations and healthy volunteers. The findings establish that observed exposure differences between trials are predominantly driven by demographic and renal covariates (age, weight, sex, eGFR) rather than underlying disease etiology. Importantly, none of the identified covariate effects alter systemic exposure by more than 25%, supporting a flat, unadjusted once-daily dosing regimen across adult patient subgroups.

---

### Executive Summary
Asundexian, a potent, selective, reversible small-molecule oral factor XIa (FXIa) inhibitor, is under clinical development for the secondary prevention of recurrent non-cardioembolic ischemic stroke. This study presents a pooled population pharmacokinetic (popPK) model utilizing 16,599 plasma concentrations from 2,914 individuals across six Phase I trials and three Phase II studies (PACIFIC-STROKE, PACIFIC-AMI, and PACIFIC-AF). The disposition of asundexian was robustly captured using a linear two-compartment model featuring two transit absorption compartments, first-order elimination, and equal volumes assigned to central and peripheral compartments to ensure stability across heterogeneous sparse and dense sampling designs. Apparent clearance (CL/F) was estimated at 2.25 L/h and central volume (VC/F) at 35.3 L in a typical 68-year-old male weighing 79 kg with an eGFR of 77 mL/min/1.73 m². Although body weight, age, sex, eGFR, and co-administration of CYP3A4 inhibitors were statistically significant covariates, individual covariate impacts on steady-state AUC and Cmax fell within an 80% to 120% window relative to reference subjects. These results provide vital regulatory and clinical support for fixed 50 mg once-daily dosing without mandatory adjustments for age, renal function, sex, or body weight in secondary stroke prevention.

---

### Scientific Context & Motivation
Direct oral anticoagulants targeting thrombin or factor Xa carry significant bleeding liabilities, frequently necessitating dose reductions or treatment discontinuation in elderly patients or those with multi-morbidity and renal compromise. Factor XIa inhibition provides a promising therapeutic alternative because FXI plays a vital role in pathological thrombus amplification and propagation while remaining largely dispensable for baseline hemostasis. Asundexian is advancing through Phase III trials (e.g., OCEANIC-STROKE) to address recurrent ischemic stroke prevention on background antiplatelet therapy. While Phase I investigations detailed elimination pathways—primarily non-renal clearance mediated by carboxylesterase-1 (~47%) and CYP3A4 (~13%), with hepatobiliary excretion (~80%)—apparent exposure was observed to be approximately two-fold higher in elderly Phase II cohorts (notably PACIFIC-AF) relative to younger healthy Phase I participants. It was critical to determine whether this divergence reflected intrinsic disease-induced alterations in clearance or distribution, or was fully attributable to physiological shifts in age, body weight, and renal clearance across patient cohorts.

---

## ⚡ Methodological Snapshot
The model was constructed using non-linear mixed-effects modeling in NONMEM 7.5 paired with PsN 5.3.0 and GFortran 9.4.0. The pooled dataset integrated rich PK sampling from six Phase I trials (multiple ascending dose, organ impairment, age/sex, and ethnically distinct Japanese and Chinese cohorts) with sparse PK observations from the Phase II PACIFIC program (stroke, acute myocardial infarction, and atrial fibrillation cohorts) over an oral dose range of 10 to 100 mg daily. Structural development explored one- and two-compartment disposition alongside zero-, first-order, lagged, and transit absorption structures.

To resolve overparameterization and numerical instability stemming from the vast preponderance of sparse trough/peak sampling in Phase II relative to dense Phase I profiles, peripheral volume (VP/F) was constrained equal to central volume (VC/F). Inter-individual variability was parameterized log-normally on CL/F, VC/F, and Ka, along with full covariance estimation between clearance, volume, and absorption rate. Residual unexplained variability was characterized using an additive error model on the log-transformed concentration scale.

Covariate model selection adhered to a classical stepwise approach: forward inclusion (reduction in objective function value ΔOFV > 6.63, p < 0.01, 1 df) followed by backward elimination (increase in ΔOFV > 10.8, p < 0.001, 1 df). Continuous parameters were tested using centered power models, whereas categorical variables were evaluated as proportional fractional shifts. Parameter uncertainty was definitively quantified using Sampling Importance Resampling (SIR; 1,000 importance samples, 500 resamples). Clinical relevance was evaluated through 10,000-subject Monte Carlo simulations generating 90% confidence intervals of steady-state exposure ratios (AUCss and Cmax,ss) depicted as forest plots.

---

## 🏗️ Structural Model Breakdown
The pharmacokinetics of asundexian were modeled using a two-compartment open system linked to a two-stage transit absorption model. Transit absorption successfully accounted for the observed delay and extended plateau in early systemic appearance. The differential equations governing transit compartments, central compartment (Ac), and peripheral compartment (Ap) are represented as:

\frac{dA_{\text{transit},1}}{dt} = -k_{\text{tr}} \cdot A_{\text{transit},1}
\frac{dA_{\text{transit},2}}{dt} = k_{\text{tr}} \cdot A_{\text{transit},1} - k_{\text{tr}} \cdot A_{\text{transit},2}
\frac{$dA_{c}$}{dt} = k_{\text{tr}} \cdot A_{\text{transit},2} - \left(\frac{CL}{$V_{c}$} + \frac{Q}{$V_{c}$}\right) \cdot $A_{c}$ + \frac{Q}{$V_{p}$} \cdot $A_{p}$
\frac{$dA_{p}$}{dt} = \frac{Q}{$V_{c}$} \cdot $A_{c}$ - \frac{Q}{$V_{p}$} \cdot $A_{p}$

where ktr was set equal to Ka (1.87 h⁻¹), and Vp was set equal to Vc (35.3 L) to ensure identifiability under sparse sampling. Elimination occurs exclusively from the central compartment.

---

### Detailed Methodological Analysis

#### Modeling Approach
Non-linear mixed-effects modeling was executed in NONMEM 7.5 with PsN 5.3.0 and GFortran 9.4.0 compiler. Structural models explored 1- and 2-compartment models with various input functions (first-order, zero-order, transit absorption with discrete delay compartments). Model selection was guided by ΔOFV, standard goodness-of-fit diagnostics, condition number (constrained < 1000), and physiological plausibility. Post-processing and visualization were conducted in R version 4.2.

#### Data Sources
Integrated data pooled from nine clinical trials comprising 2,914 participants and 16,599 valid plasma observations (1.62% BLQ data were excluded). Data included six Phase I clinical pharmacology trials (single- and multiple-ascending dose, renal impairment, hepatic impairment, elderly/sex, Japanese/Chinese ethnic bridge studies) and three Phase II studies: PACIFIC-STROKE (n = 1,186), PACIFIC-AMI (n = 1,074), and PACIFIC-AF (n = 470). Oral doses ranged from 10 to 100 mg administered once or twice daily.

#### Estimation Methods
First-Order Conditional Estimation with Interaction (FOCE-I) in NONMEM. Covariance step converged successfully. Final parameter confidence intervals and non-asymptotic distributions were evaluated using Sampling Importance Resampling (SIR) with 1,000 importance samples and 500 resamples.

#### Model Evaluation
Goodness-of-fit diagnostic plots (observed vs population/individual predictions, conditional weighted residuals vs time/predictions), parameter shrinkage calculations, prediction-corrected Visual Predictive Checks (pcVPCs; 1,000 simulation replicates across dose levels and clinical subpopulations), and forest plots derived from 10,000 Monte Carlo subject simulations.

#### Covariate Analysis
Pre-specified step-wise forward inclusion (ΔOFV > 6.63, p < 0.01, 1 df) and backward elimination (ΔOFV > 10.8, p < 0.001, 1 df). Tested covariates on CL/F and VC/F: age, body weight, BMI, race, sex, eGFR (CKD-EPI formula), serum creatinine, bilirubin, albumin, AST, ALT, co-medication with CYP3A4 inhibitors (weak, moderate, strong) or inducers, and disease history (heart failure, myocardial infarction).

---

### Statistical Rigor Assessment
The statistical methodology is robust, leveraging non-linear mixed-effects modeling across a massive multi-study dataset (N = 2,914; 16,599 observations). Fixed-effects parameters demonstrated exceptional precision, with relative standard errors (RSE) below 2% for primary structural parameters and between 6% and 24% for covariate coefficients. Sampling Importance Resampling (SIR) provided empirical 95% confidence intervals that closely matched NONMEM asymptotic covariance estimates without relying on asymptotic normality assumptions. Residual error shrinkage was low (14%), and IIV on clearance had minimal shrinkage (11%), confirming that empirical Bayes estimates for CL/F were reliable. Moderate-to-high shrinkage was observed for VC/F (61%) and Ka (32%), which is expected given that Phase II studies supplied predominantly sparse post-dose and trough samples lacking rich early absorption/distribution profiling. The decision to fix VP/F equal to VC/F was a pragmatic, well-justified step to eliminate structural overparameterization.

---

## 📊 Key Findings
The systemic clearance of asundexian in a typical patient is low (2.25 L/h), with a central volume of 35.3 L and a prolonged terminal elimination half-life averaging 15.8 hours in young healthy subjects and 22.4 hours in stroke patients. While steady-state exposure (AUCss) was approximately two-fold higher in PACIFIC-AF (26,816 μg·h/L for 50 mg OD) and PACIFIC-STROKE (23,941 μg·h/L) compared to young healthy Phase I subjects (13,800 μg·h/L), the covariate analysis revealed that this was entirely explained by demographic differences: Phase II participants were older (median age 68 vs 33.5 years), had lower mean body weight, and had lower baseline renal function (mean eGFR 62.3–79.2 vs > 90 mL/min/1.73 m²). Disease state itself contributed only an inconsequential 2% reduction in CL/F (0.04 L/h, p < 0.05). Covariate exponents showed that CL/F scales with body weight (power 0.396), age (power -0.426), eGFR (power 0.184), sex (12.1% lower in females), and concomitant CYP3A4 inhibitors (5.3% reduction). In simulated forest plots, the 90% confidence intervals for all covariate impacts on AUCss and Cmax,ss fell entirely within the 0.8–1.2 window (±20-25%), indicating no clinically meaningful exposure deviations across patient subsets.

---

## 💡 Clinical & Regulatory Implications
The clinical impact of this work is clear and decisive for clinical pharmacology and regulatory strategy: asundexian does not require dose adjustments based on age, sex, body weight, ethnic background (Asian vs non-Asian), or mild-to-moderate renal impairment in patients receiving 50 mg once daily for secondary stroke prevention. A single, uniform tablet strength simplifies therapeutic adherence in an elderly post-stroke population with polypharmacy. Furthermore, weak and moderate CYP3A4 inhibitors produce only minor systemic exposure increments in the real-world trial setting; however, clinicians should remain cautious with co-administration of strong dual P-gp/CYP3A4 inhibitors, which were excluded from Phase II trials but produced ~2-fold AUC increases in dedicated Phase I interaction trials.

---

### Strengths & Limitations

#### Strengths
- Large, diverse dataset integrating 2,914 subjects and 16,599 observations spanning healthy individuals, organ impairment, and three distinct cardiovascular disease indications (AF, stroke, AMI).
- Rigorous parameter uncertainty estimation using Sampling Importance Resampling (SIR) with 1,000 importance samples and 500 resamples.
- Clear, actionable clinical translation demonstrated through 10,000-subject Monte Carlo simulation forest plots evaluating AUCss and Cmax,ss ratios.
- Thorough evaluation of transit absorption kinetics resolving prolonged and delayed absorption features of asundexian.

#### Limitations (Acknowledged by Authors)
- The popPK model underestimated Cmax following multiple-dose administration in healthy volunteers.
- The effect of strong CYP3A4/P-gp inhibitors could not be adequately characterized because strong inhibitors were protocol-excluded in Phase II, resulting in pooling with weak/moderate inhibitors and an apparent minor (5.3%) clearance reduction that underestimates dedicated Phase I DDI findings (up to 103% AUC increase).
- Underrepresentation of non-Asian racial minorities (< 1% Black/African American, Native American), precluding independent covariate evaluation for these groups.

#### Limitations (Expert Review)
- High shrinkage on VC/F (61%) indicates that individual empirical Bayes estimates for central volume of distribution are heavily shrunk toward the population mean, limiting individual-level distribution diagnostic inferences.
- Fixing peripheral volume (VP/F) equal to central volume (VC/F) was necessary to achieve numerical stability, but artificially restricts the true physiological distribution profile.
- Lack of timing records for concomitant medications in Phase II trials limits the capacity of population models to dissect dynamic drug-drug interactions relative to Phase I crossover designs.

#### Generalizability
The model demonstrates high generalizability to adult patients with non-cardioembolic ischemic stroke, acute myocardial infarction, and atrial fibrillation over an age range of 21–92 years, weights of 34.6–178 kg, and renal function down to severe renal impairment (eGFR 15–29 mL/min/1.73 m²). However, generalizability is restricted in patients requiring potent dual CYP3A4/P-gp inhibitors and in non-White, non-Asian racial groups where sample size was insufficient.

---

### Key Equations

**Prediction-Corrected Observation Formula**

{% raw %}
$$
\text{pc}Y_{ij} = \text{lb}_{ij} + (Y_{ij} - \text{lb}_{ij}) \cdot \frac{\widetilde{\text{PRED}}_{\text{bin}} - \text{lb}_{ij}}{\text{PRED}_{ij} - \text{lb}_{ij}}
$$
{% endraw %}

Equation utilized for generating prediction-corrected visual predictive checks (pcVPC), scaling observed concentrations to account for bin-dependent and covariate-driven variability in population predictions.

**Inter-Individual Variability Coefficient of Variation**

{% raw %}
$$
CV_{\omega} = 100 \cdot \sqrt{\exp(\omega^2) - 1}
$$
{% endraw %}

Conversion formula used to express log-normal variance (\omega^2) of random inter-individual effects as an apparent percent coefficient of variation (%CV).

**Apparent Clearance Covariate Model**

{% raw %}
$$\begin{aligned}
CL/F \\
&= \theta_{CL} \cdot \left(\frac{BW}{79}\right)^{\theta_{BW,CL}} \cdot \left(\frac{\text{Age}}{68}\right)^{\theta_{\text{Age},CL}} \cdot \left(\frac{eGFR}{77}\right)^{\theta_{eGFR,CL}} \cdot (1 + \theta_{\text{Sex},CL} \cdot \text{Sex}) \cdot (1 \\
& + \theta_{\text{CYP},CL} \cdot \text{CYP}_{\text{inh}})
\end{aligned}$$
{% endraw %}

Full parametric equation describing apparent clearance as a function of physiological continuous predictors (normalized to typical values) and categorical shifts.

**Apparent Central Volume Covariate Model**

{% raw %}
$$
V_c/F = \theta_{VC} \cdot \left(\frac{BW}{79}\right)^{\theta_{BW,VC}} \cdot \left(\frac{\text{Age}}{68}\right)^{\theta_{\text{Age},VC}} \cdot (1 + \theta_{\text{Sex},VC} \cdot \text{Sex})
$$
{% endraw %}

Parametric power and shift relationship describing the apparent central volume of distribution across patient demographics.

---

### Figures & Tables

- **Figure 1**: Prediction-corrected visual predictive checks (pcVPC) for asundexian 50 mg OD in PACIFIC-AF, PACIFIC-STROKE, and PACIFIC-AMI.
  - *Significance*: Demonstrates excellent model qualification across Phase II patient cohorts, with observed 5th, 50th, and 95th percentiles overlaying the 95% simulated confidence intervals.
- **Figure 2**: Prediction-corrected visual predictive checks across single and multiple ascending doses (25, 50, 100 mg) in Phase I healthy volunteers.
  - *Significance*: Demonstrates adequate characterization of elimination kinetics across dose tiers, while highlighting a slight model underprediction of Cmax following multiple dosing in healthy cohorts.
- **Figure 3**: Boxplots of dose-normalized steady-state AUC (AUCss) for Asian versus non-Asian participants across PACIFIC-AF, PACIFIC-AMI, and PACIFIC-STROKE.
  - *Significance*: Visually proves that apparent ethnic differences in exposure disappear once body weight differences are controlled for (511 vs 481 μg·h/L per mg in PACIFIC-STROKE).
- **Figure 4**: Forest plots depicting geometric mean ratios and 90% confidence intervals of AUCss and Cmax,ss relative to a reference subject.
  - *Significance*: The primary clinical translation graphic demonstrating that extreme percentiles of age, body weight, eGFR, sex, and CYP3A4 inhibitors yield exposure shifts constrained within 0.8–1.2, precluding the need for dose adjustments.
- **Table 1**: Summary of nine clinical studies, patient populations, dose regimens, and PK sampling schedules.
  - *Significance*: Details the data foundation of 2,914 subjects contrasting intensive Phase I profiling with sparse Phase II trough/peak sampling.
- **Table 2**: Baseline continuous demographic characteristics (age, body weight, eGFR) across PACIFIC trials.
  - *Significance*: Highlights key baseline demographic disparities, illustrating that PACIFIC-AF participants were older (mean 73.3 vs 66.7 years) with lower eGFR (62.3 vs 79.2 mL/min/1.73 m²), explaining apparent exposure discrepancies.
- **Table 3**: Baseline categorical covariates across the PACIFIC Phase II clinical trials.
  - *Significance*: Documents the low frequency of strong (0.62%) and moderate (10.5%) CYP3A4 inhibitors and racial distribution across trials.
- **Table 4**: Final population pharmacokinetic parameter estimates from NONMEM and Sampling Importance Resampling (SIR).
  - *Significance*: Provides authoritative numerical values, standard errors, shrinkage metrics, and empirical 95% CIs for all structural, covariate, and variance parameters.
- **Table 5**: Post hoc steady-state pharmacokinetic exposure metrics across PACIFIC-AF, PACIFIC-STROKE, and PACIFIC-AMI by dose cohort.
  - *Significance*: Confirms dose-proportional increases in AUCss and Cmax,ss from 10 to 50 mg OD and establishes steady-state exposure parity between stroke and myocardial infarction populations.

---

### Code & Reproducibility Assessment
Code and modeling scripts are not provided in the manuscript or supplementary materials. Anonymized participant-level data, study protocols, and clinical trial reports may be requested by qualified researchers through www.clinicalstudydatarequest.com subject to Bayer criteria and approval by an independent scientific review panel.

---

### Future Directions
Key future directions include updating the popPK model with dense and sparse sampling data from the ongoing Phase III OCEANIC-STROKE trial (NCT05686070) to verify exposure distributions in global real-world stroke populations. In addition, coupling this popPK framework directly to target engagement biomarkers (FXIa clotting activity inhibition) and clinical outcomes (prevention of recurrent stroke vs major bleeding) within an integrated exposure-response/QSP model will be essential. Further investigation into the pharmacokinetics of asundexian in patients with severe hepatic impairment (Child-Pugh C) or end-stage renal disease on dialysis will clarify dosing boundaries at the extreme margins of organ failure.

---

### Expert Commentary
This publication represents a textbook example of Model-Informed Drug Development (MIDD) fulfilling a decisive regulatory purpose: resolving an apparent 'disease effect' on drug exposure through rigorous covariate modeling. Early in development, teams often observe a doubling of AUC in Phase II cardiac/stroke patients compared to Phase I healthy volunteers and reflexively consider disease-specific clearance downregulation. Yassen and colleagues elegantly demonstrate that this apparent discrepancy was entirely an artifact of participant demography—Phase II patients were older, lighter, more frequently female, and had reduced glomerular filtration rates.

From a structural perspective, their decision to constrain VP/F equal to VC/F is a classic and necessary pharmacometric trade-off. Attempting to freely estimate peripheral distribution parameters when 90% of the dataset consists of sparse 2-3 sample trough/peak measurements inevitably leads to ill-conditioned covariance matrices and parameter drift. By anchoring peripheral volume to central volume, they secured rock-solid stability while maintaining an accurate characterization of total systemic clearance and steady-state AUC.

The paper also provides an important lesson regarding real-world DDI assessment in late-stage popPK. While dedicated Phase I crossover trials revealed a ~100% AUC increase with strong dual CYP3A4/P-gp inhibitors, the popPK model estimated only a 5.3% reduction in clearance. The authors transparently explain why: Phase II protocols banned strong inhibitors, clock times for concomitant medications were missing, and weak inhibitors dominated the pooled covariate pool. Regulatory reviewers will rely on the Phase I DDI study for specific co-prescription labeling, while utilizing this popPK model to substantiate broad population flat-dosing.

---

### Bottom Line
Asundexian exhibits linear, dose-proportional, two-compartment pharmacokinetics with low systemic clearance (2.25 L/h) and a half-life supporting once-daily dosing (~16–22 hours). Although body weight, age, sex, and renal function statistically influence clearance and volume, their individual effects shift steady-state exposure by less than 20–25%, confirming that fixed, unadjusted 50 mg once-daily dosing is appropriate across adult patient populations in secondary ischemic stroke prevention.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The transit absorption rate constant (ktr) was set equal to Ka at 1.87 h⁻¹.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **CONTRADICTED** — original: “Asundexian oral doses of 10 to 100 mg were administered once or twice daily in the pooled studies.” → correction: “Within the investigated dose range of asundexian 10–100 mg once daily, the PK of asundexian was dose-proportional.”
[^fc-3]: **UNSUPPORTED** — original: “Model estimation used the First-Order Conditional Estimation with Interaction (FOCE-I) method in NONMEM.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “Mean eGFR was 62.3–79.2 mL/min/1.73 m² in Phase II participants compared to > 90 mL/min/1.73 m² in Phase I subjects.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **CONTRADICTED** — original: “Non-Asian racial minorities (Black/African American, Native American) represented less than 1% of the pooled dataset.” → correction: “As participants in race categories described as “Black or African American”, “American Indian/Alaska Native”, or “other” individually constituted less than 1% of the total population in the PACIFIC program, identification of robust covariate relationships for individual race categories was not feasible.”
[^fc-6]: **NUMERIC_MISMATCH** — original: “In Table 2, PACIFIC-AF participants had a mean age of 73.3 years compared to 66.7 years in other PACIFIC cohorts.” → correction: “Participants in the PACIFIC-AF study were older (mean age of 73.3 years) than participants from the PACIFIC-STROKE and the PACIFIC-AMI studies (mean age of 66.7 and 66.6 years, respectively; Table 2).”
[^fc-7]: **NUMERIC_MISMATCH** — original: “In Table 2, PACIFIC-AF participants had a mean eGFR of 62.3 mL/min/1.73 m² compared to 79.2 mL/min/1.73 m² in other PACIFIC cohorts.” → correction: “In the PACIFIC-AF study, the mean eGFR value (62.3 mL/min/1.73 m2) was lower than in participants in the PACIFIC-STROKE (79.2 mL/min/1.73 m2) or PACIFIC-AMI (74.6 mL/min/1.73 m2) studies (Table 2).”

---

## 📊 Figures

![Prediction-corrected visual predictive checks: Asundexian PK (50 mg OD) in the PACIFIC-AF, PACIFIC-STROKE, and PACIFIC-AMI studies, obtained with the final PK model based]({{ site.baseurl }}/assets/digests/2026-11-10-population-pharmacokinetics-of-asundexian-in-people-at-risk-for/figures/fig_01.jpg)

![Prediction-corrected visual predictive checks: Asundexian PK (25, 50, and 100 mg single and multiple dose) in the healthy volunteers multiple-dose study, obtained with th]({{ site.baseurl }}/assets/digests/2026-11-10-population-pharmacokinetics-of-asundexian-in-people-at-risk-for/figures/fig_02.jpg)

![Boxplots of dose-normalized AUCssfor Asian versus non-Asian participants in the PACIFIC-AF, PACIFIC-AMI, and PACIFIC-STROKE studies. Boxes represent the interquartile ran]({{ site.baseurl }}/assets/digests/2026-11-10-population-pharmacokinetics-of-asundexian-in-people-at-risk-for/figures/fig_03.jpg)

![Forest plots of the geometric mean ratios relative to the reference subject and 90% CIs of the exposure metrics. Results are presented relative to a reference/typical par]({{ site.baseurl }}/assets/digests/2026-11-10-population-pharmacokinetics-of-asundexian-in-people-at-risk-for/figures/fig_04.jpg)