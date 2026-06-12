---
layout: post
title: "Safety, Pharmacokinetics, and Dose Recommendations for Nirmatrelvir/Ritonavir in Individuals with Mild to Moderate COVID-19 and Severe Renal Impairment"
date: 2026-06-09
authors: "Bramson CR, Shi H, Chime S, et al."
journal: "Clinical Pharmacology & Therapeutics"
doi: "10.1002/cpt.41823072"
paper_type: popk
tags: [popk]
excerpt_text: "This phase 1 study (EPIC-SRI) evaluates a modified dosing regimen of nirmatrelvir/ritonavir (300/100 mg loading dose then 150/100 mg QD) for COVID-19 patients with severe renal impairment (SRI), including those on hemodialysis. The regimen was well tolerated, achieved target exposures (Ctrough above EC90 in >93% of simulations), and is supported by an updated population PK model. Clinicians managing COVID-19 in this high-risk population now have an evidence-based dosing recommendation, filling a critical gap left by exclusion from pivotal trials."
pdf_path: "/assets/digests/2026-06-09-safety-pharmacokinetics-and-dose-recommendations-for-nirmatrelvirritonavir-in/PMx_Safety_Pharmacokinetics_and_Dose_Recomme_20260609.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This phase 1 study (EPIC-SRI) evaluates a modified dosing regimen of nirmatrelvir/ritonavir (300/100 mg loading dose then 150/100 mg QD) for COVID-19 patients with severe renal impairment (SRI), including those on hemodialysis. The regimen was well tolerated, achieved target exposures (Ctrough above EC90 in >93% of simulations), and is supported by an updated population PK model. Clinicians managing COVID-19 in this high-risk population now have an evidence-based dosing recommendation, filling a critical gap left by exclusion from pivotal trials.

---

### Executive Summary
This phase 1, open-label study (EPIC-SRI) evaluated the safety, pharmacokinetics, and appropriate dosing of nirmatrelvir/ritonavir in 15 participants with mild-to-moderate COVID-19 and severe renal impairment (eGFR <30 mL/min/1.73 m²), including 12 receiving intermittent hemodialysis. Participants received an oral loading dose of 300/100 mg on Day 1 followed by 150/100 mg once daily on Days 2–5. The regimen was well tolerated with no treatment-related adverse events. Geometric mean nirmatrelvir Cmax (3280 ng/mL), Ctrough (2188 ng/mL), and AUC0–24 (65,700 ng·h/mL) in the HD cohort were similar to exposures observed with approved regimens in patients with normal-to-moderate renal function. Hemodialysis removed only 6.9% of nirmatrelvir. An updated population PK model incorporating these data accurately predicted observed concentrations, and simulations showed >93% of virtual SRI patients achieved Ctrough above the EC90 (292 ng/mL). These results support the recommended dosing regimen for patients with SRI regardless of hemodialysis status.

---

### Scientific Context & Motivation
Patients with severe renal impairment (SRI, eGFR <30 mL/min/1.73 m²) are at high risk for severe COVID-19 and death, yet they were excluded from the pivotal EPIC-HR trial due to concerns about drug accumulation and lack of PK data. Nirmatrelvir, a CYP3A4 substrate, is primarily eliminated renally as unchanged drug when coadministered with ritonavir. Prior single-dose PK studies in healthy volunteers with renal impairment projected supra-therapeutic Ctrough in SRI with the standard 150/100 mg BID regimen, leaving this vulnerable population without an approved oral antiviral option. This study directly addresses the knowledge gap by providing clinical PK and safety data in SRI patients with active COVID-19, and uses population PK modeling to recommend a tailored dosing regimen.

---

## ⚡ Methodological Snapshot
This phase 1, open-label, single-arm study enrolled 15 nonhospitalized adults with mild-to-moderate COVID-19 and severe renal impairment (eGFR <30 mL/min/1.73 m²; 3 not on HD, 12 on intermittent HD). Participants received oral nirmatrelvir/ritonavir 300/100 mg on Day 1 followed by 150/100 mg once daily on Days 2–5. Intensive PK sampling was performed on Day 1 with trough samples on Days 2–5; HD clearance was assessed using arterial and venous port samples during dialysis. A pre-existing population PK model (12 studies) was updated with EPIC-SRI data using nonlinear mixed-effects modeling. Model evaluation used a predictive check with 1000 simulations of 100 virtual SRI subjects to generate 90% prediction intervals, and subsequent simulations of 5000 subjects per renal function category compared exposures across groups.

---

## 🏗️ Structural Model Breakdown
The population PK model for nirmatrelvir has previously been described as a two-compartment model with first-order absorption and linear elimination, incorporating renal clearance as a function of estimated glomerular filtration rate (eGFR). The updated model includes covariates for renal function using normalized creatinine clearance (nCLCR). Parameter estimates from the updated model (Table S1) were consistent with prior values, with typical apparent clearance (CL/F) and volume of distribution (Vc/F, Vp/F) values scaled by body weight and renal function. Interindividual variability was modeled on CL/F and Vc/F. The model does not include a distinct dialytic clearance component; HD was accounted for by using post-HD concentration data and timing of doses relative to HD sessions.

---

### Detailed Methodological Analysis

#### Modeling Approach
A previously published population PK model for nirmatrelvir (based on 12 phase 1/2/3 studies) was updated by adding PK data from EPIC-SRI (14 participants with SRI at baseline and 1 with normal renal function). The structural model (likely 2-compartment with first-order absorption and elimination, with renal clearance as a function of eGFR) was retained. Parameters from the updated model were comparable to prior values (Table S1).

#### Data Sources
Data from 15 participants (3 not requiring HD, 12 on intermittent HD) enrolled in the EPIC-SRI phase 1 study. Intensive PK sampling occurred on Day 1 (pre-dose and multiple post-dose time points) with trough samples on Days 2–5. HD arterial and venous port samples were collected during HD sessions. Additional PK data from 12 prior phase 1/2/3 studies were used for model updating.

#### Estimation Methods
Population PK modeling was performed using nonlinear mixed-effects modeling (software not explicitly stated in the accessible text, likely NONMEM). Parameters were estimated using a previously published base model updated with EPIC-SRI data. Estimation method is not detailed but is consistent with prior model development (likely FOCE or SAEM).

#### Model Evaluation
Evaluation employed a predictive check approach: 1000 simulations of 100 virtual SRI subjects generated 90% prediction intervals (5th–95th percentiles). Observed EPIC-SRI nirmatrelvir concentrations were plotted against these intervals (Figure 2) to assess model performance. All observations fell within the interval, indicating adequate predictive capacity. Additionally, 5000-subject simulations per renal function category were used to compare exposure metrics across groups.

#### Covariate Analysis
Renal function (eGFR/nCLCR) served as the primary covariate for dosing simulations. Creatinine clearance normalized to body surface area (nCLCR) categorized patients into normal, mild, moderate, severe, and severe HD groups. The model used previously established covariate relationships for renal function on nirmatrelvir clearance.

---

### Statistical Rigor Assessment
The study is limited by its small sample size (n=15, with only 3 in the non-HD cohort), which reduces precision and precludes formal hypothesis testing. No comparator arm was included. Descriptive statistics are used for PK parameters and safety outcomes. The population PK modeling approach leverages a larger prior dataset (12 studies) to improve robustness, but the predictive check used the same data for evaluation without an independent validation set, as acknowledged by the authors. The simulations (1000 runs of 100 virtual subjects) provide adequate precision internal to the model. Sample sizes for HD clearance calculation were modest (n=11 evaluable), leading to high variability (CV 138% for nirmatrelvir Fd). Overall, the statistical methods are appropriate for a Phase 1 study, but conclusions about comparative efficacy or long-term safety are not supported.

---

## 📊 Key Findings
The modified dosing regimen (300/100 mg Day 1, then 150/100 mg QD Days 2–5) was well tolerated with no treatment-related adverse events. Geometric mean (CV%) nirmatrelvir Cmax, Ctrough, and AUC0–24 in the Intermittent HD Cohort were 3280 ng/mL (48%), 2188 ng/mL (81%), and 65,700 ng·h/mL (59%), respectively. Hemodialysis removed only a small fraction of nirmatrelvir (geometric mean Fd = 6.9%, CV 138%). The updated population PK model predicted that >93% of virtual SRI patients receiving this regimen would achieve Ctrough above the EC90 (292 ng/mL), with exposure distributions similar to those in patients with normal-to-moderate renal function on their approved doses. SARS-CoV-2 RNA levels declined substantially from baseline to Day 5 and Day 14.

---

### Strengths & Limitations

#### Strengths
- First dedicated PK study of nirmatrelvir in SRI patients with active COVID-19 including those on hemodialysis.
- Updated population PK model now spans full renal function spectrum from normal to SRI requiring HD.
- Novel dosing regimen effectively reduces exposure to levels comparable to approved regimens in less impaired populations.
- Clear dose recommendation for a high-risk population previously excluded from treatment guidelines.
- Demonstrates the utility of model-informed drug development (MIDD) in special populations.

#### Limitations (Acknowledged by Authors)
- Small cohort sizes, especially the No HD Cohort (n=3).
- No separate model validation dataset available due to lack of additional SRI PK data.
- Enrollment in No HD Cohort was terminated early after sufficient data collected from HD cohort.

#### Limitations (Expert Review)
- Open-label, single-arm design without a control group limits assessment of comparative safety and efficacy.
- Short 5-day treatment course with limited follow-up (Day 34 safety, Day 14 virology).
- Potential selection bias: patients stable on HD may not represent all SRI patients.
- High variability in Fd (CV 138%) indicates inconsistent HD removal, possibly due to timing of dose relative to HD session.
- Lack of detailed PK model equations, convergence diagnostics, and covariate selection process in the main text.

#### Generalizability
The findings apply directly to adults with mild-to-moderate COVID-19 and SRI (eGFR <30 mL/min/1.73 m²), including those on intermittent hemodialysis. Generalizability is limited by the small sample size (especially non-HD cohort, n=3), lack of ethnic/racial diversity, and exclusion of patients with severe hepatic impairment or those on interacting medications. The results may not extend to patients with rapidly changing renal function, or those on peritoneal dialysis, nor to severe COVID-19 requiring hospitalization.

---

---

### Figures & Tables

- **Table 1**: Demographics and baseline characteristics by cohort (No HD and Intermittent HD).
  - *Significance*: Highlights the small sample size (n=3 for No HD) and baseline differences in age, weight, and SARS-CoV-2 RNA levels between cohorts.
- **Table 2**: Treatment-emergent adverse events (TEAEs) by cohort.
  - *Significance*: Demonstrates safety profile: 20% participants had TEAEs, none treatment-related, no grade 3/4 events, supporting tolerability of the regimen.
- **Table 3**: Nirmatrelvir PK parameters and hemodialysis clearance for both cohorts.
  - *Significance*: Core PK results: geometric means of Cmax, Ctrough, AUC0–24, and CLd, Fd values. Shows minimal removal by HD (Fd=6.9%), justifying dosing after HD.
- **Table 4**: Simulated nirmatrelvir Ctrough by renal function category from population PK model (5000 virtual subjects per group).
  - *Significance*: Key for dose recommendation: >93% of virtual SRI patients achieve Ctrough ≥ EC90, supporting the proposed dose regimen across all SRI subgroups.
- **Figure 1**: Nirmatrelvir plasma concentrations during hemodialysis – arterial and venous port measurements over time.
  - *Significance*: Illustrates drug removal during HD; small concentration gradients confirm minimal dialytic clearance.
- **Figure 2**: Visual predictive check: observed nirmatrelvir concentrations from EPIC-SRI overlaid on 90% prediction interval from 1000 simulations of the updated PopPK model.
  - *Significance*: Validates that the updated PopPK model adequately captures EPIC-SRI data, a critical step given the lack of an independent validation dataset.
- **Figure 3**: Simulated nirmatrelvir concentration–time profiles for different renal function categories receiving their respective approved or study dosing regimens.
  - *Significance*: Shows that the study regimen in SRI produces exposures overlapping with those in normal/mild/moderate renal impairment receiving standard doses.

---

### Future Directions
Future studies should aim to enroll larger numbers of SRI patients not receiving hemodialysis to confirm these findings. Long-term safety and efficacy data, particularly regarding prevention of severe COVID-19 and post-acute sequelae (PASC), are needed. Further PopPK modeling could explore the impact of drug-drug interactions in SRI patients on polypharmacy, and the utility of therapeutic drug monitoring in this population. Additionally, extending the model to other special populations (e.g., patients on peritoneal dialysis) would be valuable.

---

### Expert Commentary

---

### Bottom Line
For practicing pharmacometricians, this paper provides essential PopPK evidence for a novel dosing regimen of nirmatrelvir/ritonavir (300/100 mg loading dose then 150/100 mg QD) in patients with severe renal impairment (SRI), including those on hemodialysis. The regimen achieved target exposures (Ctrough > EC90 in >93% of simulations) without excessive accumulation, supported by an updated population PK model spanning the full renal function spectrum. This work demonstrates how model-informed dose selection can fill critical evidence gaps for vulnerable populations excluded from pivotal trials, offering a viable treatment option for COVID-19 in SRI.

---

---

## 📊 Figures

![Nirmatrelvir plasma concentrations during hemodialysis. Red dots and blue triangle data points represent plasma from the arterial and venous ports, respectively.]({{ site.baseurl }}/assets/digests/2026-06-09-safety-pharmacokinetics-and-dose-recommendations-for-nirmatrelvirritonavir-in/figures/fig_01.png)

![Median and 90% prediction intervals (5th and 95th percentile) for nirmatrelvir concentration based on 1000 simulations (nirmatrelvir/ritonavir 300/100 mg on Day]({{ site.baseurl }}/assets/digests/2026-06-09-safety-pharmacokinetics-and-dose-recommendations-for-nirmatrelvirritonavir-in/figures/fig_02.png)