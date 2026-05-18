---
layout: post
title: "Towards a Quantitative Understanding of Aficamten Clinical Pharmacology: Pharmacokinetic-Cardiodynamic Modeling to Support Safety and Efficacy"
date: 2026-05-10
authors: "Justin D. Lutz et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70237"
paper_type: popk
tags: [popk, qsp, dose-response, covariate-analysis, regulatory, clinical-trial-design]
excerpt_text: "This paper develops PKPD models linking aficamten exposure to cardiac safety (LVEF) and efficacy (LVOT-G) in obstructive hypertrophic cardiomyopathy patients. Using data from phase 2 and 3 trials, the authors show a ~2% LVEF drop per 100 ng/mL increase in average 24h concentration and a ~10-fold steeper LVOT-G response, indicating a wide therapeutic window. Clinical trial simulations support the FDA-approved flexible dosing regimen (2–8 week titration, up to 6-month maintenance) as maintaining efficacy with low risk of excessive LVEF reduction."
pdf_path: "/assets/digests/2026-05-10-towards-a-quantitative-understanding-of-aficamten-clinical-pharmacology/PMx_Towards_a_Quantitative_Understanding_of__20260510.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper develops PKPD models linking aficamten exposure to cardiac safety (LVEF) and efficacy (LVOT-G) in obstructive hypertrophic cardiomyopathy patients. Using data from phase 2 and 3 trials, the authors show a ~2% LVEF drop per 100 ng/mL increase in average 24h concentration and a ~10-fold steeper LVOT-G response, indicating a wide therapeutic window. Clinical trial simulations support the FDA-approved flexible dosing regimen (2–8 week titration, up to 6-month maintenance) as maintaining efficacy with low risk of excessive LVEF reduction.

---

### Executive Summary
The study quantifies the exposure-response relationships for aficamten, a next-in-class cardiac myosin inhibitor, using linear log-log PKPD models derived from REDWOOD-HCM and SEQUOIA-HCM trials. It demonstrates low within-subject variability for LVEF ($CV=7.6\%$), making prior LVEF highly predictive of future values, and estimates that LVOT-G decreases approximately ten times faster than LVEF with increasing aficamten concentration. Clinical trial simulations of the commercial flexible dosing regimen show minimal differences in achieving LVOT-G <30 mmHg and keeping LVEF ≥50% across titration intervals of 2, 4, 6, or 8 weeks, supporting a wide dosing window. Over a 3-year simulation, the regimen yields a ~60% probability of maintaining LVOT-G <30 mmHg and only a ~3% probability of LVEF <50%, indicating a favorable benefit-risk profile for long-term use.

---

### Scientific Context & Motivation
While aficamten showed efficacy and safety in the phase 3 SEQUOIA-HCM trial, the quantitative relationship between its pharmacokinetics and pharmacodynamics—particularly how exposure translates to changes in LVEF (safety) and LVOT-G (efficacy)—was not fully characterized. Understanding these relationships is essential to inform flexible dosing strategies that balance efficacy with the risk of excessive systolic dysfunction. The study fills this gap by developing PKPD models that incorporate both core laboratory and site-read echocardiographic measurements, accounting for measurement type as a covariate, and linking these models to clinical trial simulations to evaluate real-world dosing regimens.

---

## ⚡ Methodological Snapshot
The analysis employed log-linear mixed-effects PKPD models linking aficamten average concentration over 24h ($C_{avg,24}$) to log-transformed LVOT-G and LVEF, with baseline PD values and measurement type (site-read vs. core) as covariates. Model selection was guided by likelihood ratio tests and diagnostic plots. Parameters were estimated using the nlme package in R, and uncertainty was propagated via bootstrapping ($N=200$). Clinical trial simulations were performed by linking the population PK model to the PD models and applying echocardiography-guided dose-titration rules in a virtual population of 10,000 subjects.

---

## 🏗️ Structural Model Breakdown
The structural model for each endpoint (LVOT-G, LVEF) is a log-linear mixed-effects model: $\log(PD) = \theta_1 + \theta_2 \cdot C_{avg,24} + \theta_3 \cdot \text{BaselinePD} + \theta_4 \cdot \text{MeasType} + \eta_1 +$

---

### Detailed Methodological Analysis

#### Modeling Approach
Log-linear mixed-effects models were tested for LVOT-G and LVEF. Both intercept and slope included random effects; baseline PD and measurement type were tested as fixed effects on intercept and slope. A log-linear structure was chosen to ensure positive PD predictions and to capture the approximately linear relationship observed in the linear scale at lower concentrations. The final model included baseline PD and measurement type as covariates on both intercept and slope for LVOT-G, and on intercept (with slope retained for consistency) for LVEF.

#### Data Sources
Data came from the phase 2 REDWOOD-HCM ($N=41$) and phase 3 SEQUOIA-HCM ($N=142$) aficamten-treated participants with obstructive hypertrophic cardiomyopathy. Echocardiographic LVEF and post-Valsalva LVOT-G were collected at baseline and periodically during treatment (weeks 2,4,6,8,12,16,20,24 in SEQUOIA-HCM; weeks 2,4,6,10 in REDWOOD-HCM). Exposure metric was the population PK model-estimated average aficamten concentration over 24h prior to each PD assessment ($C_{avg,24}$).

#### Estimation Methods
Parameter estimation was performed using the nlme package in R, which implements maximum likelihood estimation via the FOCE algorithm. Random effects were assumed normally distributed. Bootstrap resampling ($N=200$) of the PD models was conducted to derive confidence intervals and propagate uncertainty into simulations.

#### Model Evaluation
Model fit was assessed using visual predictive checks (VPCs) and numerical predictive checks for both core and site-read LVOT-G and LVEF. Standard goodness-of-fit plots (residuals vs. predicted, QQ plots) were inspected. The log-likelihood objective function was used to compare nested models during covariate selection, with a $p<0.05$ threshold for significance.

#### Covariate Analysis
Covariates were evaluated in a stepwise manner. Baseline PD values and measurement type were retained due to significance ($p<0.001$) and necessity for simulation. Other covariates (age, weight, sex, race, region, baseline NYHA class, concomitant disopyramide or beta-blockers, study) were tested univariately; those showing $p<0.05$ were retained only if they meaningfully reduced residual variability and were relevant for simulation. Ultimately, only baseline PD and measurement type were included in the final model due to minimal incremental benefit of other covariates.

---

## 📊 Key Findings
The final PKPD model revealed a baseline core laboratory LVOT-G of 89.4 mmHg and LVEF of 75.5%. LVOT-G decreased by half with each 164 ng/mL increase in $C_{avg,24}$, whereas LVEF decreased by half with each 2219 ng/mL increase, indicating a ~10-fold steeper slope for LVOT-G. Within-subject variability for LVEF was low ($CV=7.6\%$), suggesting high stability of LVEF measurements over time. Clinical trial simulations of the commercial regimen (5–20 mg QD with echocardiography-guided titration every 2–8 weeks and maintenance every 6 months) predicted that approximately 60% of patients would maintain LVOT-G <30 mmHg while only about 3% would experience LVEF <50% after the initial titration period, supporting the regimen’s safety and efficacy in a post-approval setting.

---

### Strengths & Limitations

#### Strengths
- Integration of both phase 2 and phase 3 data to increase robustness of PKPD estimates.
- Explicit differentiation between site-read (used for dosing) and core laboratory-read (used as endpoint) echocardiographic measurements, improving simulation relevance to clinical practice.
- Use of bootstrapping ($N=200$) to quantify uncertainty in PD parameters for steady-state simulations.
- Comprehensive clinical trial simulations covering titration, maintenance, and long-term (3-year) exposure.
- Clear quantification of the therapeutic window via comparative slopes of LVOT-G vs. LVEF.

#### Limitations (Acknowledged by Authors)
- The model assumes instantaneous PD response (no effect compartment), which may not capture delayed effects.
- Treatment interruptions for LVEF <40% were not included in simulations due to rarity and implementation complexity.
- Physician discretion and integration of symptomatic status or borderline LVEF/LVOT-G values were not modeled.
- The maintenance visit frequency in simulations was fixed at every 6 months, whereas the label allows every 3 months for certain LVEF ranges.

#### Limitations (Expert Review)
- The log-linear model, while ensuring positive predictions, may not fully capture potential nonlinearity at higher concentrations beyond the observed range.
- Between-subject variability in slopes was high (LVOT-G $CV=59.6\%$, LVEF $CV=75.9\%$), indicating substantial heterogeneity in drug response that is only partially explained by baseline values.
- The correlation between LVOT-G and LVEF random effects (0.31) was assumed constant; time-varying relationships were not explored.
- Virtual trial simulations used a fixed virtual population of 10,000; sensitivity to population size or demographic shifts was not assessed.

#### Generalizability
Findings are generalizable to patients with obstructive hypertrophic cardiomyopathy receiving aficamten under similar dosing and monitoring conditions. The low within-subject LVEF variability supports extrapolation to longer-term use, but caution is warranted when applying results to non-obstructive HCM or populations with significant comorbidities that affect cardiac function, as these were not explicitly studied.

---

---

### Figures & Tables

- **Figure 1**: Visual predictive check showing observed vs. predicted LVOT-G and LVEF (core and site-read) as a function of aficamten $C_{avg,24}$.
  - *Significance*: Confirms the adequacy of the log-linear PKPD model across the observed exposure range and justifies model selection for subsequent simulations.
- **Figure 2**: Observed LVOT-G and LVEF over time in SEQUOIA-HCM, stratified by dose level.
  - *Significance*: Illustrates the time-course of pharmacodynamic response and supports the model’s ability to reproduce trial data when linked to the dosing regimen.
- **Figure 3**: Simulation of aficamten $C_{avg,24}$ and the percentage of participants with site-read LVOT-G <30 mmHg and LVEF <50% over 3 years under the commercial dosing regimen.
  - *Significance*: Demonstrates rapid achievement of steady-state after titration and long-term stability of efficacy and safety metrics, supporting the maintenance phase interval.
- **Figure 4**: Percentage of simulated patients on each aficamten dose level (5–20 mg) over 3 years of administration. QXW, frequency of dose titrati
  - *Significance*: Shows dose distribution evolution, indicating a shift toward higher doses over time as patients achieve maintenance, which informs expectations for real-world prescribing patterns.
- **Table 1**: Parameter estimates for the final PKPD model of LVOT-G and LVEF, including intercepts, slopes, covariate effects, and variability terms.
  - *Significance*: Provides the quantitative foundation for all subsequent simulations; highlights the ~10-fold difference in slope between LVOT-G and LVEF and the low within-subject variability for LVEF.
- **Table 2**: Steady-state predictions of LVOT-G and LVEF (core and site-read) for fixed aficamten doses from 0 to 20 mg.
  - *Significance*: Characterizes the intrinsic exposure-response relationship, showing that LVOT-G <30 mmHg is achieved by most patients at 20 mg while LVEF <50% remains uncommon (<10%) even at the highest dose.
- **Table 3**: Explicit tabulation of the FDA-approved aficamten commercial dose regimen, including titration and maintenance rules based on LVEF and LVOT-G thresholds.
  - *Significance*: Serves as the direct input for clinical trial simulations, enabling assessment of the regimen’s real-world performance.

---

### Code & Reproducibility Assessment
Code and simulated datasets are not publicly available; analyses were performed in R (v4.2.2) using the nlme package for mixed-effects modeling and rxode2 for simulation of clinical trial regimens.

---

### Future Directions
Future work could explore time-varying PD effects to capture potential delayed cardiac remodeling, incorporate patient-reported outcomes and biomarkers (e.g., NT-proBNP) into the PKPD framework, and evaluate the impact of concomitant medications that affect myocardial contractility. Additionally, prospective validation of the predicted LVEF and LVOT-G distributions in real-world aficamten use would strengthen confidence in the modeling approach.

---

### Expert Commentary
This study exemplifies modern pharmacometrics in action: leveraging rich longitudinal PKPD data from early and late-phase trials to build a mechanistic yet parsimonious model that directly informs regulatory labeling and clinical practice. The clear separation of safety and efficacy endpoints, coupled with the demonstration of low within-subject variability for LVEF, provides a powerful argument for less frequent monitoring without compromising safety. The approach—using clinical trial simulations to justify flexible dosing intervals—should become a benchmark for future cardiovascular drug development programs.

---

### Bottom Line
For clinicians and drug developers, this work confirms that aficamten’s exposure-response relationship provides a wide therapeutic window: efficacy (LVOT-G reduction) occurs at much lower exposures than those associated with meaningful LVEF decline. The flexible dosing regimen approved by the FDA—allowing titration every 2–8 weeks and maintenance checks every 3–6 months—is robustly supported by modeling, predicting sustained efficacy with a low risk of excessive systolic dysfunction. Pharmacometricians can rely on the presented PKPD framework as a template for exposure-response modeling of other cardiac-targeted therapies where safety and efficacy are measured by complementary hemodynamic endpoints.

---

---

## 📊 Figures

![FIGURE 1: Visual predictive check for core laboratory (top) and site-read (bottom) LVOT-G (left) and LVEF (right) as a function of aficamten exposure (Cavg,24) in particip]({{ site.baseurl }}/assets/digests/2026-05-10-towards-a-quantitative-understanding-of-aficamten-clinical-pharmacology/figures/fig_01.jpg)

![FIGURE 2: Core laboratory (top) and site-read (bottom) post-Valsalva LVOT-G (left) or LVEF (right) as a function of study week in participants with oHCM in the phase 3 tri]({{ site.baseurl }}/assets/digests/2026-05-10-towards-a-quantitative-understanding-of-aficamten-clinical-pharmacology/figures/fig_02.jpg)

![FIGURE 3: Commercial dose regimen: Simulation of aficamten Cavg,24and percent of participants with site-read post-Valsalva LVOT-G < 30 mmHg and site-read LVEF < 50% over 3]({{ site.baseurl }}/assets/digests/2026-05-10-towards-a-quantitative-understanding-of-aficamten-clinical-pharmacology/figures/fig_03.jpg)

![FIGURE 4: Commercial dose regimen: Simulation of the percent of participants on a given dose (5–20 mg) over 3 years of daily administration. QXW, frequency of dose titrati]({{ site.baseurl }}/assets/digests/2026-05-10-towards-a-quantitative-understanding-of-aficamten-clinical-pharmacology/figures/fig_04.jpg)