---
layout: post
title: "Utilizing Virtual Clinical Trials to Inform Target Coverage That Drives RSV Antiviral Efficacy"
date: 2026-08-03
authors: "Herron JC, Link KG, Musante CJ, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, Vol 15, Issue 8"
doi: "10.1002/psp4.70308"
paper_type: popk
tags: [popk, qsp, pediatrics, clinical-trial-design]
excerpt_text: "This paper presents a quantitative systems pharmacology (QSP) model of RSV viral dynamics, calibrated to healthy adult challenge studies and pediatric Phase 2 data, to project the target coverage and treatment window needed for antiviral efficacy. The model predicts that a minimum coverage >1× free EC90 at Cmin with a 5–7 day post-symptom-onset treatment window is feasible for virological efficacy in pediatric patients, while healthy adults require earlier intervention (~3 days PSO). Pharmacometricians and translational scientists designing RSV antiviral programs will find the virtual clinical trial framework and target coverage–response analysis directly actionable for dose selection and trial design."
pdf_path: "/assets/digests/2026-08-03-utilizing-virtual-clinical-trials-to-inform-target-coverage-that-drives-rsv/PMx_Utilizing_Virtual_Clinical_Trials_to_Inf_20260803.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a quantitative systems pharmacology (QSP) model of RSV viral dynamics, calibrated to healthy adult challenge studies and pediatric Phase 2 data, to project the target coverage and treatment window needed for antiviral efficacy. The model predicts that a minimum coverage >1× free EC90 at Cmin with a 5–7 day post-symptom-onset treatment window is feasible for virological efficacy in pediatric patients, while healthy adults require earlier intervention (~3 days PSO). Pharmacometricians and translational scientists designing RSV antiviral programs will find the virtual clinical trial framework and target coverage–response analysis directly actionable for dose selection and trial design.

---

### Executive Summary
This work extends prior viral dynamics models (SARS-CoV-2, RSV) to build a QSP framework that integrates in vitro potency data, clinical PK, and longitudinal viral load data from six healthy adult challenge studies and eight pediatric patient cohorts. The authors develop separate virtual populations for healthy adults and pediatric patients (1–36 months) using acceptance-rejection sampling, capturing the key differences in viral dynamics: pediatric patients exhibit significantly higher peak viral loads (6.6 vs. 4.8 log10 copies/mL) and slower post-peak decline (0.41 vs. 0.84 log10 copies/mL/day). The model recapitulates observed treatment effects for sisunatovir (F-protein inhibitor) and zelicapavir (N-protein inhibitor) in challenge studies and the zelicapavir pediatric Phase 2 trial, and was prospectively validated by predicting an 86% AUC reduction for EDP-323 without using its data for calibration. The central projection—that a day-1 Cmin >3× free EC90 maximizes viral load AUC reduction in challenge studies, and that pediatric patients retain a viable treatment window of 5–7 days post-symptom onset—provides a quantitative framework for dose selection and trial design decisions in RSV antiviral development.

---

### Scientific Context & Motivation
RSV remains a major unmet medical need: no antiviral is approved for adults, and ribavirin—the only pediatric option—has limited use due to uncertain efficacy and operational challenges. A recurring translational failure in RSV antiviral development is that compounds showing virological efficacy in healthy adult challenge studies subsequently fail in patient trials. This disconnect stems from fundamental differences between populations: healthy adults have lower peak viral loads, faster viral clearance, and treatment is initiated within 12 hours of confirmed infection, whereas pediatric patients present 3–7 days after symptom onset with higher, more persistent viral loads and immature immune responses. The paper addresses the knowledge gap of how to translate preclinical potency and challenge study data into predictions of patient efficacy, and specifically what target coverage (exposure relative to EC90) is needed for success. The QSP approach fills this gap by mechanistically representing viral infection, immune response, and drug effect, enabling forward simulation of clinically feasible intervention timings across populations. This work challenges the implicit assumption that challenge study efficacy translates directly to patient efficacy, and provides a quantitative framework for de-risking phase 2/3 trial design.

---

## ⚡ Methodological Snapshot
The authors developed a QSP model of RSV viral dynamics incorporating susceptible cell infection, productively infected cells, viral shedding, innate and adaptive immune responses, and tissue damage. Virtual populations were generated using acceptance-rejection sampling to match observed viral load time courses and summary statistics (AUC, post-peak slope, peak) from six healthy adult challenge studies and eight pediatric patient cohorts. Drug effect was modeled using Emax models with Hill coefficients informed by in vitro data (n=2 for sisunatovir, n=3 for zelicapavir), with clinical PK from one-compartment models fit to published Phase 1 data. The model was calibrated to treatment arms from sisunatovir and zelicapavir challenge studies and the zelicapavir pediatric Phase 2 trial, then used to project target coverage–response relationships and treatment window effects across populations.

---

## 🏗️ Structural Model Breakdown
The QSP model represents the upper respiratory tract as the key site of infection. The model structure includes: (1) susceptible epithelial cells that can be infected by virus; (2) productively infected cells that shed viable virus particles; (3) free virus (viral RNA measured clinically); (4) innate immune response activated by infected cells, damaged cells, and viral shedding; (5) adaptive immune response; and (6) damaged cells produced by immune-mediated killing. Infected cells are removed via simplified innate and adaptive immune mechanisms. The drug effect for sisunatovir (F-protein inhibitor) reduces the rate of susceptible cell infection via an Emax model (Emax=1, n=2, EC90=5.52 nM free for M37b strain). The drug effect for zelicapavir (N-protein inhibitor) directly reduces viral production via an Emax model (Emax=1, n=3, EC90=36.4 nM free for M37b strain in challenge simulations; 47.62 nM free median across strains for pediatric simulations). Initial viral inoculum varied between plausible patients, with all other initial conditions fixed. Virtual populations were constrained to physiologically plausible ranges: peak viral load and post-peak slope within observed ranges, time-to-peak within 3–9 days incubation period, and susceptible cells not depleted below 15% of baseline.

---

### Detailed Methodological Analysis

#### Modeling Approach
Quantitative systems pharmacology (QSP) model of RSV viral dynamics, extending prior viral dynamics models for SARS-CoV-2 and RSV. The model includes susceptible cells, infected cells, viral particles, innate and adaptive immune responses, and damaged cells. Drug effects modeled via Emax functions: for the F-protein inhibitor sisunatovir, reduction of susceptible cell infection rate (Emax=1, Hill n=2); for the N-protein inhibitor zelicapavir, direct reduction of viral production (Emax=1, Hill n=3). One-compartment PK models fit to published Phase 1 geometric mean exposures. Virtual populations generated via acceptance-rejection sampling. Software: not explicitly stated, but code is available on GitHub.

#### Data Sources
In vitro potency data: 29 RSV strains (A and B subtypes, lab and clinical isolates, 1961–2023) tested against sisunatovir and zelicapavir using 8- or 10-point plaque assay curves. Clinical PK: published Phase 1 data for zelicapavir 600 mg QD and sisunatovir 200 mg BID. Viral load data: 6 healthy adult challenge studies (7 cohorts) and 8 pediatric patient studies (9 cohorts) with longitudinal RSV viral load measurements. Challenge studies used RSV-A Memphis-37b strain with treatment initiated 12 h post-confirmed infection. Pediatric studies included the zelicapavir Phase 2 trial (mITT-3 and Part 2 cohorts) in children 1–36 months. Plasma protein binding determined by equilibrium dialysis for sisunatovir; zelicapavir fraction unbound from literature (0.05).

#### Estimation Methods
Acceptance-rejection sampling for virtual population generation, matching observed viral load time courses and summary statistics (AUC, post-peak slope, peak). One-compartment PK models fit to approximate geometric mean exposures from published data. In vitro potency curves fit using 4-parameter (min, max, IC50, hill) models. Post-peak slopes calculated via log-linear least squares fitting with constraint that line intercepts peak viral load.

#### Model Evaluation
Virtual populations validated by comparing simulated vs. observed viral load AUC in challenge studies (sisunatovir: 220±40 SE simulated vs. 210±30 SE observed treatment arm; zelicapavir Part 1: 200±40 vs. 120±30; Part 2: 200±40 vs. 200±50) and pediatric RCT endpoints (mITT-3 change from baseline, Part 2 difference between arms). Prospective validation: predicted 86% AUC reduction for EDP-323 (600 mg QD) without using its challenge data for calibration. Virtual population metrics (peak, post-peak slope) compared to study observations (Figure 3).

#### Covariate Analysis
No traditional covariate analysis was performed. Population differences were addressed by developing separate virtual populations for healthy adults and pediatric patients, capturing differences in peak viral load and post-peak slope. Within-population variability was represented through parameter distributions in the virtual population generation. PK variability and viral strain variability were not explicitly modeled in pediatric patients; variability was lumped into other parameters.

---

### Statistical Rigor Assessment
The study uses a combination of descriptive statistics and simulation-based inference. Population differences in peak viral load and post-peak slope were tested using Wilcoxon rank-sum tests (p=0.008 and p=0.003, respectively), appropriate for small sample sizes (7 adult cohorts, 9 pediatric cohorts). Virtual population generation used acceptance-rejection sampling, a well-established method for matching observed data distributions while maintaining parameter diversity. Standard errors for virtual population metrics were calculated using the sample sizes of the respective challenge studies to account for the small observed sample sizes. The model was validated both retrospectively (matching challenge study and pediatric RCT outcomes) and prospectively (EDP-323 prediction). Limitations in statistical rigor include: the small number of pediatric studies (n=9 cohorts) used to characterize population viral dynamics; the assumption of equivalent viral load units across assays; the simplification of symptom onset timing (fixed at 1 day prior to peak viral load); and the lack of explicit uncertainty quantification for model parameters beyond the virtual population variability. Sensitivity analysis was performed locally to inform parameter bounds but not reported in detail. The absence of formal model comparison or information criteria for the structural model is a minor limitation.

---

## 📊 Key Findings
1) In vitro potency: sisunatovir is ~20× more potent than zelicapavir (median free EC90 2.67 vs. 47.62 nM across 29 RSV A/B strains), yet clinical target coverage at day 1 Cmin is similar (1.1× vs. 1.43× EC90 for the M37b strain) due to dose and PK differences. 2) Population viral dynamics: pediatric patients have significantly higher peak viral loads (6.6 vs. 4.8 log10 copies/mL, p=0.008) and slower post-peak decline (0.41 vs. 0.84 log10 copies/mL/day, p=0.003) than healthy adults, indicating a longer window for therapeutic intervention. 3) Target coverage–response: the model predicts a near-saturating viral load AUC reduction (~86%) in challenge studies when day-1 Cmin exceeds ~3× free EC90; beyond this, additional exposure yields diminishing returns. 4) Treatment window: healthy adults show minimal viral load reduction when treatment is delayed beyond ~3 days PSO, whereas pediatric patients retain meaningful virological efficacy with treatment initiated up to 5–7 days PSO, driven by higher and more persistent viral loads. 5) Prospective validation: the model predicted 86% AUC reduction for EDP-323 (600 mg QD) without using its challenge data for calibration, supporting the framework's predictive utility.

---

## 💡 Clinical & Regulatory Implications
The model provides several directly actionable clinical implications: (1) For challenge study design, a day-1 Cmin >3× free EC90 is needed to achieve near-saturating viral load AUC reduction (~86%), informing dose selection for proof-of-mechanism studies. (2) For pediatric patient trials, a minimum coverage >1× free EC90 at Cmin with treatment initiated up to 5–7 days post-symptom onset can yield meaningful virological efficacy, supporting a feasible treatment window for Phase 3 pivotal trials. (3) The wider treatment window in pediatrics (5–7 days PSO) compared to healthy adults (~3 days PSO) suggests that pediatric trials may be more forgiving of delays in treatment initiation, which is clinically relevant given that pediatric patients typically present 3–7 days after symptom onset. (4) The model highlights that achieving saturating response in patients may require greater exposure than in challenge studies due to later treatment initiation and broader strain coverage needs. (5) The framework can be used to de-risk Phase 2/3 trial design by simulating expected viral load reductions across clinically feasible intervention timings, potentially reducing the risk of failed pivotal trials. Regulatory implications include the potential use of this model to support dose selection discussions and provide quantitative justification for treatment window choices in pediatric trial protocols.

---

### Strengths & Limitations

#### Strengths
- Integration of diverse data sources (in vitro potency across 29 strains, clinical PK, challenge study and pediatric RCT viral load data) into a single mechanistic framework
- Separate virtual populations for healthy adults and pediatric patients that capture the fundamentally different viral dynamics between populations
- Prospective validation against EDP-323 challenge data without calibration, demonstrating predictive utility
- Transparent acceptance-rejection sampling approach for virtual population generation, building on established SARS-CoV-2 QSP methodology
- Clinically actionable outputs: target coverage thresholds and treatment window projections directly usable for dose selection and trial design
- Code made publicly available on Pfizer Open Source GitHub, supporting reproducibility
- Careful handling of protein binding corrections (plasma and media) for both compounds

#### Limitations (Acknowledged by Authors)
- PK variability and viral strain variability in pediatric patients are not explicitly represented; variability is lumped into other parameters, which could be misleading if circulating strain profiles change
- Innate and adaptive immune system components are parameterized vaguely due to lack of informing data
- Viral load units (copies/mL vs. PFUe/mL) are assumed equivalent, which may not hold across assays
- The link between virological response and clinical endpoints (symptoms, hospitalization) remains unestablished
- No data for at-risk adult patients (elderly, immunocompromised) is included; treatment window for this population is expected to fall between healthy adults and pediatrics but is not modeled

#### Limitations (Expert Review)
- The assumption that symptom onset occurs exactly 1 day prior to peak viral load in all individuals is a strong simplification that may not hold across the pediatric age range (1–36 months) or disease severities
- The one-compartment PK models approximate geometric mean exposures with ~20% accuracy, which may not capture the 40–70% CV in clinical PK parameters; this could affect coverage projections at the individual level
- The model assumes plasma exposure is a surrogate for site-of-action (lung) exposure, which is reasonable but unverified for both compounds
- The pediatric VPop was calibrated to a single zelicapavir Phase 2 study; generalizability to other mechanisms (e.g., F-protein inhibitors) or dosing regimens in pediatrics is untested
- The treatment window projections (5–7 days PSO) are based on simulated viral load reduction only and do not account for the clinical reality that many pediatric patients present with lower respiratory tract disease where viral load dynamics may differ
- The acceptance-rejection sampling approach, while effective, may not fully explore parameter space and could be sensitive to the choice of acceptance criteria and parameter bounds

#### Generalizability
The QSP framework is mechanism-agnostic and should generalize to other RSV antivirals with different mechanisms of action, provided in vitro potency and clinical PK data are available. The target coverage–response relationship (day-1 Cmin >3× EC90 for saturating response in challenge studies) is likely transferable across compounds. However, the pediatric treatment window projections are based on zelicapavir data and may not directly translate to compounds with different PK profiles or mechanisms. The model does not yet cover at-risk adult populations (elderly, immunocompromised), limiting its immediate applicability to the full RSV patient spectrum. The approach is generalizable to other acute respiratory viral infections (e.g., influenza, SARS-CoV-2) given appropriate data.

---

### Key Equations

**Emax drug effect model for F-protein inhibitor (sisunatovir)**

{% raw %}
$$
\text{Effect}_{F} = \frac{E_{max} \cdot C^{n}}{EC_{90}^{n} + C^{n}}
$$
{% endraw %}

Reduction of susceptible cell infection rate modulated by clinical plasma PK. Emax fixed to 1, Hill coefficient n=2, EC90 = 5.52 nM free (M37b strain).

**Emax drug effect model for N-protein inhibitor (zelicapavir)**

{% raw %}
$$
\text{Effect}_{N} = \frac{E_{max} \cdot C^{n}}{EC_{90}^{n} + C^{n}}
$$
{% endraw %}

Reduction of viral load production directly. Emax fixed to 1, Hill coefficient n=3, EC90 = 36.4 nM free (M37b strain) for challenge simulations and 47.62 nM free (median across strains) for pediatric patient simulations.

**Target coverage metric**

{% raw %}
$$
\text{Coverage}_{C_{min}} = \frac{C_{min,day1}}{f_u \cdot EC_{90}}
$$
{% endraw %}

Day 1 trough concentration normalized by free fraction and in vitro EC90, used to project viral load AUC reduction in challenge studies and patient populations.

---

### Figures & Tables

- **Figure 1**: Schematic of the QSP modeling approach showing data inputs (in vitro potency, clinical PK, challenge study and pediatric RCT viral load data) feeding into the mechanistic model of viral dynamics, immune response, and drug effect, with outputs including challenge projections and treatment projections.
  - *Significance*: Provides the overall framework and workflow of the study, illustrating how preclinical and clinical data are integrated to inform trial design decisions.
- **Figure 2**: In vitro RSV potencies (EC90) for sisunatovir and zelicapavir across 29 RSV A and B strains (panel A), and clinical target coverage at day 1 Cmin relative to M37b strain EC90 for both compounds (panel B).
  - *Significance*: Demonstrates the ~20× potency difference between compounds and shows that clinical target coverage is similar despite this difference, highlighting the importance of exposure relative to potency rather than absolute potency.
- **Figure 3**: Comparison of peak viral load (panel A) and post-peak viral load slope (panel B) between healthy adult challenge studies and pediatric patient cohorts, with simulated virtual population metrics overlaid.
  - *Significance*: Establishes the key population differences (higher peak, slower decline in pediatrics) that drive the treatment window projections, and validates that virtual populations capture these observed differences.
- **Figure 4**: Calibration of virtual populations to challenge study data (panels A-C: sisunatovir and zelicapavir Parts 1 and 2 AUC viral load) and pediatric RCT data (panels D-F: zelicapavir Phase 2 mITT-3 and Part 2 change from baseline).
  - *Significance*: Demonstrates the model's ability to recapitulate observed treatment effects across different study designs and populations, providing confidence in the virtual populations for forward predictions.
- **Figure 5**: Predicted dose-response curve of viral load AUC reduction (%) as a function of day-1 Cmin target coverage (fold EC90), with mean and 95% prediction interval, including the EDP-323 validation point (orange).
  - *Significance*: Central target coverage analysis showing near-saturating response at ~3× EC90, and the prospective validation against EDP-323 (86% predicted AUC reduction) without calibration.
- **Figure 6**: Projected viral load reductions in healthy adult versus pediatric virtual populations with zelicapavir treatment initiated at varying days post-symptom onset (day 3, 4, 5, 7).
  - *Significance*: Key translational finding: pediatric patients retain meaningful virological efficacy with treatment up to 5–7 days PSO, while healthy adults show minimal benefit beyond ~3 days PSO, supporting a wider treatment window in pediatrics.

---

### Code & Reproducibility Assessment
Code is available on the Pfizer Open Source GitHub at https://github.com/pfizer-opensource/rsv-qsp-model-CPT-PSP. The repository includes the QSP model implementation and virtual population generation scripts, enabling reproduction of the simulations and adaptation to new compounds. No explicit statement about data availability for the underlying clinical datasets is provided, though the model relies on published clinical data.

---

### Supplementary Materials
Supporting information includes: detailed methods for plasma protein binding determination, one-compartment PK model fitting details and comparison of PK metrics to published data, local sensitivity analysis for virtual population parameter bounds, additional model equations and parameter definitions, viral load profile pre-processing details, and supplementary figures (Figs. S5, S7, S8) showing individual viral load trajectories for sisunatovir and zelicapavir treatment arms. Table S1 provides peak viral load values across placebo cohorts.

---

### Future Directions
The authors identify several extensions: (1) incorporating at-risk adult populations (elderly, immunocompromised) as viral load data becomes available; (2) explicitly modeling PK variability and viral strain variability in pediatric patients to avoid lumping effects; (3) strengthening the link between virological response and clinical endpoints (symptoms, hospitalization) using quantitative frameworks like the symptom hazard model developed for challenge data; (4) incorporating biomarker data to better parameterize innate and adaptive immune components; and (5) extending to immunocompromised sub-populations. Additional future work could include: modeling combination therapy (F + N inhibitors), resistance emergence under suboptimal coverage, and using the framework to optimize pediatric dosing regimens across age bands.

---

### Expert Commentary
This paper represents a mature application of QSP modeling to a persistent translational problem in antiviral development—the disconnect between challenge study efficacy and patient trial outcomes. The authors' decision to build separate virtual populations for healthy adults and pediatric patients, rather than forcing a single population, is methodologically sound and reflects the fundamentally different viral dynamics between these groups. The prospective validation against EDP-323 is particularly commendable and should be the gold standard for QSP model credibility. From a regulatory perspective, this framework could support dose selection discussions and provide quantitative justification for treatment window choices in pediatric trials. The target coverage analysis (day-1 Cmin >3× EC90) is a useful, simple metric that aligns with the growing emphasis on early exposure driving response for acute viral infections. One caution: the assumption of equivalent viral load units (copies/mL vs. PFUe/mL) across studies is a known simplification that could introduce systematic bias, and the pediatric treatment window projection relies on a single Phase 2 dataset. Nevertheless, the framework is a significant contribution that should accelerate RSV antiviral development and serve as a template for other acute respiratory viral infections.

---

### Bottom Line
For pharmacometricians and translational scientists developing RSV antivirals, this paper provides a validated QSP framework that translates in vitro potency and clinical PK into actionable target coverage and treatment window projections. The key quantitative takeaways are: (1) in challenge studies, a day-1 Cmin >3× free EC90 achieves near-saturating viral load AUC reduction (~86%); (2) in pediatric patients, a minimum coverage >1× free EC90 at Cmin with treatment initiated up to 5–7 days post-symptom onset can yield meaningful virological efficacy, a substantially wider window than the ~3 days PSO for healthy adults; and (3) the model can be used prospectively to de-risk phase 2/3 trial design by simulating expected viral load reductions across clinically feasible intervention timings. The publicly available code enables rapid adaptation to new compounds and populations.

---

---

## 📊 Figures

![A quantitative systems pharmacology modeling (QSP) approach supports strategy and trial design for RSV antiviral therapeutics. Clinical and preclinical data inpu]({{ site.baseurl }}/assets/digests/2026-08-03-utilizing-virtual-clinical-trials-to-inform-target-coverage-that-drives-rsv/figures/fig_01.jpg)

![In vitro RSV potencies and clinical target coverage. (A) In vitro EC90values from plaque assay data for compounds with a group of RSV A and B viral strains. Blac]({{ site.baseurl }}/assets/digests/2026-08-03-utilizing-virtual-clinical-trials-to-inform-target-coverage-that-drives-rsv/figures/fig_02.jpg)

![Studies suggest different viral load measures differ between healthy adult volunteers and pediatric patients; similar metrics captured by model. (A) Peak (or bas]({{ site.baseurl }}/assets/digests/2026-08-03-utilizing-virtual-clinical-trials-to-inform-target-coverage-that-drives-rsv/figures/fig_03.jpg)

![Virtual populations calibrated to capture key virological metrics in challenge studies (A-C) and pediatric RCTs (D-F). (A) Schematic of viral challenge studies,]({{ site.baseurl }}/assets/digests/2026-08-03-utilizing-virtual-clinical-trials-to-inform-target-coverage-that-drives-rsv/figures/fig_04.jpg)

![Predicted dose response of AUC viral load reduction (%) with varying target coverage of Cminat Day 1. Mean predicted dose response and 95% prediction interval (P]({{ site.baseurl }}/assets/digests/2026-08-03-utilizing-virtual-clinical-trials-to-inform-target-coverage-that-drives-rsv/figures/fig_05.jpg)

![Projections suggest pediatric patients have a wider treatment window for reducing viral load compared to healthy adults with RSV infection. Treatment of zelicapa]({{ site.baseurl }}/assets/digests/2026-08-03-utilizing-virtual-clinical-trials-to-inform-target-coverage-that-drives-rsv/figures/fig_06.jpg)