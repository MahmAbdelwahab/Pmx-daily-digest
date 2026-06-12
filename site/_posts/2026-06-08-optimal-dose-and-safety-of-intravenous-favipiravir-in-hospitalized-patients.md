---
layout: post
title: "Optimal Dose and Safety of Intravenous Favipiravir in Hospitalized Patients With COVID-19: A Dose-Escalating, Randomized Controlled Phase Ib Study"
date: 2026-06-08
authors: "Rowland T, Fletcher TE, FitzGerald R, et al."
journal: "Clinical Pharmacology & Therapeutics, 2026, 119(6)"
doi: "10.1002/cpt.70261"
paper_type: popk
tags: [popk, regulatory, clinical-trial-design]
excerpt_text: "This Phase Ib dose-escalation study demonstrates that intravenous favipiravir up to 2,400 mg twice daily is safe and well-tolerated in hospitalized, frail, and co-morbid COVID-19 patients. The pharmacokinetic analysis reveals marked inter-individual variability and dose-dependent non-linear accumulation, with the 2,400 mg b.i.d. dose achieving trough concentrations above the pre-specified EC90 target of 159 μM for SARS-CoV-2. Pharmacometricians involved in antiviral drug development or MIDD for emerging pathogens should read this for its pragmatic Bayesian adaptive design, PK characterization in a complex population, and dosing recommendations for future efficacy trials."
pdf_path: "/assets/digests/2026-06-08-optimal-dose-and-safety-of-intravenous-favipiravir-in-hospitalized-patients/PMx_Optimal_Dose_and_Safety_of_Intravenous_F_20260608.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This Phase Ib dose-escalation study demonstrates that intravenous favipiravir up to 2,400 mg twice daily is safe and well-tolerated in hospitalized, frail, and co-morbid COVID-19 patients. The pharmacokinetic analysis reveals marked inter-individual variability and dose-dependent non-linear accumulation, with the 2,400 mg b.i.d. dose achieving trough concentrations above the pre-specified EC90 target of 159 μM for SARS-CoV-2. Pharmacometricians involved in antiviral drug development or MIDD for emerging pathogens should read this for its pragmatic Bayesian adaptive design, PK characterization in a complex population, and dosing recommendations for future efficacy trials.

---

### Executive Summary
This study reports the first clinical evaluation of a novel intravenous formulation of favipiravir in hospitalized COVID-19 patients, conducted within the AGILE platform trial (NCT04746183) using a Bayesian adaptive dose-escalation design. Twenty-four participants (median age 74 years, multiple comorbidities) were randomized 2:1 to IV favipiravir at 600, 1,200, 1,800, or 2,400 mg twice daily, or standard of care. No dose-limiting toxicities were observed; all drug-related adverse events were asymptomatic hyperuricemia. The Bayesian toxicity model estimated a 16.8% DLT risk at 2,400 mg b.i.d., with only a 2.7% probability of unacceptable toxicity. PK analysis showed greater-than-proportional increases in exposure with dose, significant accumulation between days 1 and 3, and extreme inter-individual variability. A one-compartment population PK model was developed, and simulations indicate that doses between 1,800 and 2,400 mg b.i.d. achieve target trough concentrations. The data support the safety of IV favipiravir at these doses for future Phase II studies, with relevance beyond COVID-19 to other RNA viruses.

---

### Scientific Context & Motivation
Favipiravir is a broad-spectrum antiviral targeting RNA-dependent RNA polymerase, licensed orally for influenza in Japan. Clinical trials of oral favipiravir in COVID-19 have yielded mixed results, largely attributed to inadequate plasma concentrations due to dose limitations (pill burden, tolerability) and complex auto-inhibition of aldehyde oxidase metabolism leading to non-linear PK. Preclinical studies suggest that intravenous administration can achieve 4-fold higher Cmax than oral dosing, potentially improving intracellular active metabolite (T-705-RTP) formation. The key knowledge gap addressed is whether high-dose IV favipiravir is safe and can achieve pre-specified PK targets (steady-state trough > 159 μM, the EC90 from in vitro assays) in a real-world hospitalized population - precisely the frail, elderly, multi-morbid patients often excluded from early-phase trials but most likely to benefit from antiviral therapy.

---

## ⚡ Methodological Snapshot
The study used a Bayesian adaptive dose-escalation design embedded within the AGILE platform trial. Participants were randomized 2:1 to IV favipiravir or standard of care in sequential cohorts of 6 at four dose levels (600, 1,200, 1,800, 2,400 mg b.i.d.), delivered as 1-hour infusions for 7 days. A two-parameter Bayesian logistic toxicity model guided escalation based on DLT probability at day 8. PK was characterized using non-compartmental analysis (Phoenix WinNonlin) and a one-compartment population PK model with first-order elimination developed in an unspecified software (likely NONMEM or similar). Monte Carlo simulations (N=2,000 virtual participants) were used to predict trough concentration attainment relative to the EC90 target of 159 μM.

---

## 🏗️ Structural Model Breakdown
A one-compartment pharmacokinetic model with first-order elimination was used. The structural model is defined by two parameters: clearance (CL) and volume of distribution (V). Inter-individual variability was modeled on both parameters, assumed to follow log-normal distributions. No covariates were included. The model was parameterized for intravenous infusion administration (zero-order input of duration 1 hour). The estimated parameters (from supplementary S2, as referenced in text) conformed with previous oral favipiravir studies. The authors noted that a dose-dependent clearance model could not be fitted due to insufficient data, despite evidence of non-linear PK from the NCA results.

---

### Detailed Methodological Analysis

#### Modeling Approach
Non-compartmental analysis (Phoenix WinNonlin 8.3) for descriptive PK parameters (Cmax, Tmax, AUC0-last, Ctrough). A one-compartment population PK model with first-order elimination and inter-individual variability on clearance and volume of distribution was developed (software not explicitly named, likely NONMEM). The Bayesian toxicity model was a two-parameter logistic model with information sharing across doses, using priors calibrated to maximize correct dose selection. Monte Carlo simulation of 2,000 virtual participants sampled body weight, clearance, and volume from fitted distributions to predict trough concentrations at candidate doses.

#### Data Sources
Single-center (NIHR Liverpool Clinical Research Facility, UK). 24 hospitalized adults with PCR-confirmed SARS-CoV-2, WHO Clinical Progression Scale grades 4-6, within 14 days of symptom onset. Median age 74 years, median 11 comorbidities. PK blood samples collected on days 1, 3, and 5: pre-dose, 0-1h, 2-4h (days 1&3 only), and 6-12h post-infusion. Favipiravir plasma concentrations measured by validated LC-MS/MS assay (LLQ 1 μg/mL).

#### Estimation Methods
Non-compartmental analysis: linear trapezoidal rule for AUC. Population PK: likely first-order conditional estimation (FOCE) or similar. Bayesian toxicity model: Markov chain Monte Carlo (MCMC) methods (software not specified, likely Stan or BUGS). Model priors calibrated to maximize probability of correct dose selection under various scenarios.

#### Model Evaluation
Population PK model evaluated using prediction-corrected visual predictive check (VPC, Figure 4a). Bayesian toxicity model evaluated through simulation-based calibration of operating characteristics (supplementary S4). Model-predicted DLT rates with 95% credible intervals reported after each cohort.

#### Covariate Analysis
No formal covariate analysis was performed in the population PK model due to the small sample size. The authors note that factors contributing to inter-individual variability (weight, sex, genetics, clinical status) are incompletely understood.

---

### Statistical Rigor Assessment
The Bayesian adaptive design provides formal statistical control of the dose-escalation process, with pre-defined stopping rules based on the probability of unacceptable toxicity. The two-parameter logistic model with shared information across doses is appropriate for small sample sizes. The use of an independent, blinded adjudicator for DLT classification reduces ascertainment bias. However, the sample size of only 4 treated participants per dose level severely limits statistical power for any between-group comparisons, including virology and clinical outcomes. Missing data (1 withdrawal, 1 excluded PK sample) are minimal and adequately handled. No formal sensitivity analysis for the toxicity model is reported, but the priors were calibrated using simulations. The lack of a formal covariate analysis in the PK model is a limitation, though understandable given the small N.

---

## 📊 Key Findings
1) No dose-limiting toxicities were observed up to 2,400 mg b.i.d.; the Bayesian model estimated a 16.8% DLT rate at this dose with 2.7% probability of unacceptable toxicity (>30% excess over control). 2) All drug-related adverse events (10 events in 16 treated participants) were asymptomatic, transient hyperuricemia, consistent with known favipiravir pharmacology. 3) PK showed dose-dependent non-linear exposure: median day 3 AUC0-last ranged from 38.5 μg·h/mL (600 mg) to 1,004 μg·h/mL (2,400 mg), with Cmax increasing from 16.8 to 201 μg/mL. 4) Marked inter-individual variability was observed; for example, day 3 Ctrough at 2,400 mg ranged from 24.5 to 201.4 μg/mL. 5) A one-compartment population PK model with first-order elimination adequately described the data, with simulation showing mean Ctrough exceeding the EC90 target at ≥1,800 mg b.i.d. 6) No significant difference in WHO clinical progression scores or viral load between treatment groups, though the study was not powered for efficacy.

---

## 💡 Clinical & Regulatory Implications
This study provides the safety basis for using IV favipiravir at 1,800-2,400 mg b.i.d. in future Phase II efficacy trials for COVID-19 and potentially other RNA virus infections. The IV formulation is particularly valuable for hospitalized patients with impaired gastrointestinal absorption or those unable to take oral medications. The dose-dependent non-linear PK means that small changes in dose can lead to large changes in exposure, and the marked inter-individual variability suggests that fixed dosing may not be optimal; therapeutic drug monitoring or model-informed individualization may be needed. The safety observation of asymptomatic hyperuricemia is expected, reversible, and should not preclude use. For pandemic preparedness, having a well-characterized IV formulation at doses that achieve target concentrations is a significant advance.

---

### Strengths & Limitations

#### Strengths
- Bayesian adaptive design allowed efficient dose escalation with formal toxicity monitoring, maximizing information from a small sample size.
- Inclusion of a realistic, frail, elderly, and multi-morbid population, increasing generalizability to real-world patients who would receive antivirals.
- Rich PK sampling on days 1, 3, and 5 with both peak and trough measurements enabled characterization of accumulation and non-linearity.
- Use of a population PK model with VPCs and simulations to directly inform dose selection against a pre-specified PK target (EC90).
- Independent, blinded adjudication of all ≥ Grade 3 AEs for DLT classification reduced bias.

#### Limitations (Acknowledged by Authors)
- Small sample size (N=24) typical of Phase Ib; efficacy cannot be assessed.
- Heterogeneity in baseline viral load and concomitant medications confounds virological analysis.
- Unable to fit a dose-dependent clearance model due to insufficient data, despite evidence of non-linear PK.
- Uncertainty in translating in vitro EC90 (159 μM) to in vivo clinical efficacy; more recent data suggest a higher target (~500 μM).
- Intracellular T-705-RTP concentrations were not measured.

#### Limitations (Expert Review)
- The one-compartment model may oversimplify distribution, especially given the non-linear PK and active metabolite kinetics.
- Only 4 participants per dose level limits precision of PK parameter estimates and covariate identification.
- No formal covariate analysis was performed (e.g., weight, age, renal function), despite known effects on favipiravir PK from oral studies.
- Sampling schedule (0-1h and 6-12h post-infusion) may miss the true peak and terminal phase, particularly at higher doses with prolonged absorption/distribution.
- AUC0-last on day 5 could not be calculated due to insufficient data points, limiting characterization of steady-state exposure.
- The Bayesian toxicity model's prior calibration and operating characteristics are not fully detailed for independent evaluation.

#### Generalizability
Findings are primarily applicable to hospitalized COVID-19 patients with frailty and multiple comorbidities (WHO grade 4-6). Extrapolation to other populations (e.g., immunocompromised, critically ill on ventilation, non-hospitalized) or other RNA viruses requires further study, though PK principles are likely similar. The IV formulation is particularly relevant for patients unable to take oral medication.

---

---

### Figures & Tables

- **Figure 1**: CONSORT diagram showing participant flow through the trial (a), and trial schema for dose-finding and efficacy evaluation (b).
  - *Significance*: Documents the trial design and participant disposition; essential for understanding the Bayesian adaptive dose-escalation process.
- **Figure 2**: Bayesian model estimates of dose-limiting toxicity (DLT) rates for each dose level, with 95% credible intervals.
  - *Significance*: Primary safety analysis output; shows that at 2,400 mg b.i.d., the estimated DLT rate is 16.8% with a <3% probability of unacceptable toxicity, supporting dose recommendation.
- **Figure 3**: Individual and median plasma favipiravir concentration-time profiles stratified by dose cohort and study day (days 1, 3, and 5).
  - *Significance*: Illustrates marked inter-individual variability, dose-dependent accumulation, and the general PK profile. Key visual for understanding exposure differences across doses.
- **Figure 4**: Population PK model results: (a) Prediction-corrected Visual Predictive Check (VPC); (b) Simulated dose-exposure relationships showing median and individual trough concentrations relative to the EC90 target.
  - *Significance*: Validates the one-compartment model and demonstrates that 1,800-2,400 mg b.i.d. achieves target trough concentrations. The VPC confirms adequate model performance.
- **Table 1**: Baseline demographic and clinical characteristics of participants by treatment group and dose cohort.
  - *Significance*: Highlights the frailty and comorbidity burden of the study population (median age 74, median 11 comorbidities), supporting generalizability to real-world hospitalized patients.
- **Table 2**: Adverse events by system organ class and treatment group.
  - *Significance*: Provides comprehensive safety data; shows high background AE rate (100% in favipiravir groups, 62.5% in controls) and the predominance of asymptomatic hyperuricemia as the only drug-related AE.
- **Table 3**: Non-compartmental PK parameters (Tmax, Cmax, Ctrough, AUC0-last) for each dose cohort on days 1, 3, and 5.
  - *Significance*: Core PK results table demonstrating dose-dependent increases in exposure, accumulation between day 1 and 3, and inter-individual variability (wide ranges for all parameters).

---

### Code & Reproducibility Assessment
No code or model files are publicly provided. The data sharing statement indicates anonymized data may be available upon reasonable request to the AGILE Trial Steering Committee via the University of Liverpool. Population PK model details are in supplementary materials (S2, S3).

---

### Supplementary Materials
Supplementary materials (S1-S4) include the CST-6 protocol (S1), population PK model details (S2), PK simulation details (S3), and Bayesian toxicity model calibration details (S4). These are essential for full reproducibility but were not included in the source document provided.

---

### Future Directions
1) Phase II efficacy trials of IV favipiravir at 1,800-2,400 mg b.i.d. for COVID-19 are warranted. 2) Formal population PK modeling with covariate analysis (weight, renal function, age) using pooled data from ongoing studies should be performed. 3) Measurement of intracellular T-705-RTP and its relationship to plasma favipiravir is critical to refine the PK target. 4) Studies in other RNA virus indications (Crimean-Congo Hemorrhagic Fever, pandemic influenza) are ongoing and should incorporate the PK data from this study. 5) A loading dose regimen to achieve therapeutic concentrations more rapidly could be explored. 6) Evaluation in patients with renal impairment or on extracorporeal membrane oxygenation (ECMO) would expand the label.

---

### Expert Commentary
This is a well-conducted Phase Ib study that exemplifies efficient dose-finding using Bayesian methods in a population that is notoriously difficult to enroll. The PK characterization confirms the known non-linear behavior of favipiravir due to aldehyde oxidase auto-inhibition, and the marked inter-individual variability is a recurring theme with this drug. From a pharmacometric perspective, the decision to use a one-compartment model is pragmatic for a small dataset, but the inability to characterize non-linear clearance is a missed opportunity - even a simple Michaelis-Menten or dose-dependent clearance model might have captured the accumulation pattern better. The choice of EC90 as a target is debatable given the wide range of reported in vitro potencies, but the authors are transparent about this uncertainty. The key teaching point is that in antiviral development, PK target attainment should be the primary dose-selection criterion, and this study demonstrates a clear path to doing so even in early-phase trials. The absence of any related SAEs is reassuring and supports continued development. I would have liked to see more exploration of factors driving the inter-individual variability, as this has implications for individualized dosing.

---

### Bottom Line
Intravenous favipiravir at doses up to 2,400 mg twice daily is safe in hospitalized COVID-19 patients, achieving plasma trough concentrations exceeding the EC90 target for SARS-CoV-2. This dose is recommended for Phase II efficacy evaluation. The non-linear PK and extreme inter-individual variability underscore the need for therapeutic drug monitoring or model-based dosing in future trials. Pharmacometricians should note the successful application of Bayesian adaptive dose-escalation in a frail population, and the critical role of PK target attainment in antiviral drug development.

---

---

## 📊 Figures

![Trial design. (a) CST-6 CONSORT diagram describing participant disposition and follow up. (b) Trial Schema for dose finding and efficacy evaluation, as described]({{ site.baseurl }}/assets/digests/2026-06-08-optimal-dose-and-safety-of-intravenous-favipiravir-in-hospitalized-patients/figures/fig_01.jpg)

![Bayesian model estimates of dose toxicity. Bayesian model output plots, updated after each cohort and presented as estimated DLT rates for each dose, alongside e]({{ site.baseurl }}/assets/digests/2026-06-08-optimal-dose-and-safety-of-intravenous-favipiravir-in-hospitalized-patients/figures/fig_02.jpg)

![Favipiravir plasma pharmacokinetic profile. Favipiravir concentrations over actual time post-infusion stratified by study day in hospitalized patients with COVID]({{ site.baseurl }}/assets/digests/2026-06-08-optimal-dose-and-safety-of-intravenous-favipiravir-in-hospitalized-patients/figures/fig_03.jpg)

![Population-pharmacokinetic modeling. (a) A Prediction-Corrected Visual Predictive Check of the fitted 1-compartment IV infusion model. The solid black line repre]({{ site.baseurl }}/assets/digests/2026-06-08-optimal-dose-and-safety-of-intravenous-favipiravir-in-hospitalized-patients/figures/fig_04.jpg)