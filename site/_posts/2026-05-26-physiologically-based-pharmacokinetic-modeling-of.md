---
layout: post
title: "Physiologically Based Pharmacokinetic Modeling of Elexacaftor/Tezacaftor/Ivacaftor in Infants With Cystic Fibrosis"
date: 2026-05-26
authors: "Ngoc Hoa Truong et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70225"
paper_type: popk
tags: [popk, pbpk, qsp, pediatrics, regulatory]
excerpt_text: "This study uses PBPK modeling to predict elexacaftor/tezacaftor/ivacaftor (ETI) pharmacokinetics in infants with CF aged 1 month to <2 years, extrapolating dosing from ivacaftor monotherapy. Simulations suggest most infants achieve adult-comparable exposures, though the youngest (1-2 months) may have lower and the heaviest (≥14 kg) may have higher exposures. The work provides initial dosing guidance pending clinical confirmation, with therapeutic drug monitoring recommended."
pdf_path: "/assets/digests/2026-05-26-physiologically-based-pharmacokinetic-modeling-of/PMx_Physiologically_Based_Pharmacokinetic_Mo_20260526.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study uses PBPK modeling to predict elexacaftor/tezacaftor/ivacaftor (ETI) pharmacokinetics in infants with CF aged 1 month to <2 years, extrapolating dosing from ivacaftor monotherapy. Simulations suggest most infants achieve adult-comparable exposures, though the youngest (1-2 months) may have lower and the heaviest (≥14 kg) may have higher exposures. The work provides initial dosing guidance pending clinical confirmation, with therapeutic drug monitoring recommended.

---

### Executive Summary
Truong et al. developed and validated PBPK models for ETI in adults and children ≥2 years, then scaled to infants using the Simcyp pediatric simulator with Uprety–Wahlström CYP3A4 ontogeny. After verifying ivacaftor monotherapy predictions against literature, they extrapolated ETI dosing based on FDA-recommended ivacaftor doses, simulating steady-state exposures. Results indicate that infants >2 months achieve exposures within adult ranges, while those 1-2 months show lower AUCs but still above EC50 thresholds. Heavier infants (≥14 kg) may exceed adult Cmax and AUC, suggesting dose reduction. The study is limited by sparse infant validation data and uncertain PK/PD relationships, but offers a rational framework for early ETI use in this vulnerable population.

---

### Scientific Context & Motivation
CFTR modulators have transformed CF care, but ETI is only approved for ages ≥2 years. Early intervention in infants could prevent irreversible lung damage. Ivacaftor monotherapy is approved from 1 month, but triple therapy may offer greater benefit. However, dosing in infants is challenging due to rapid developmental changes in drug metabolism, particularly CYP3A4. PBPK modeling can integrate ontogeny and physiology to predict pediatric PK, but no prior study has applied it to ETI in infants <2 years. This study fills that gap by leveraging validated adult and pediatric models to propose infant dosing.

---

## ⚡ Methodological Snapshot
The study employed PBPK modeling using Simcyp v22. Adult ETI compound models were built from literature and validated against clinical data. These were scaled to children 2-18 years using the pediatric simulator with Uprety-Wahlström CYP3A4 ontogeny. Ivacaftor monotherapy was simulated in infants to verify model performance, then ETI dosing was extrapolated by matching ivacaftor doses. Simulations used virtual populations of 200 subjects per regimen, with steady-state achieved after 14 days. Model evaluation used visual predictive checks, proportion within prediction intervals, and fold error metrics.

---

## 🏗️ Structural Model Breakdown
Each drug was modeled with a full PBPK distribution model assuming perfusion-limited kinetics. Absorption was first-order with fed-state parameters. Metabolism primarily via CYP3A4, with competitive inhibition between tezacaftor and the other two drugs. Biliary clearance was included for elexacaftor and ivacaftor, scaled to adult values without ontogeny. The pediatric models used Simcyp's built-in physiological databases for organ weights, blood flows, and plasma protein binding, with age-dependent CYP3A4 abundance from Uprety-Wahlström. The models did not include enterohepatic recirculation or active transport.

---

### Detailed Methodological Analysis

#### Modeling Approach
Full PBPK models for elexacaftor, tezacaftor, and ivacaftor were developed in Simcyp, incorporating physicochemical properties, first-order absorption, perfusion-limited distribution, CYP3A4 metabolism, and biliary clearance (for elexacaftor and ivacaftor). Drug-drug interactions via competitive CYP3A inhibition were captured by co-administering the three compounds. Pediatric scaling used the Simcyp Pediatric Simulator with age-dependent organ weights, blood flows, and CYP3A4 ontogeny (Uprety-Wahlström method).

#### Data Sources
Adult validation used TDM data from two clinical studies (n=350 virtual subjects). Pediatric validation used the MODUL-CF study (2-18 years). Infant ivacaftor validation used literature AUC data and the McNally et al. study (1-4 months). Infant ETI validation used three infants (7-16 months) from MODUL-CF. Virtual populations were generated from Simcyp's healthy volunteer and pediatric databases, with sex ratio adjusted to 1:1.

#### Estimation Methods
Deterministic PBPK simulations; no parameter estimation was performed. Virtual trials with 200 subjects per dosing group were run to capture population variability. Steady-state was assumed after 14 days of repeated dosing.

#### Model Evaluation
Model performance was assessed by: (1) visual inspection of observed vs. predicted concentration-time profiles and proportion of observations within the 90% prediction interval; (2) comparison of simulated AUC, Cmax, Cmin with observed values; (3) calculation of mean fold error (MFE), average fold error (AFE), and absolute average fold error (AAFE). Acceptance criteria: MFE between 0.5 and 2.

#### Covariate Analysis
No formal covariate analysis was conducted. Age and body weight were used to define dosing groups, and CYP3A4 ontogeny served as the primary covariate influencing clearance maturation. The impact of different ontogeny models (Salem vs. Uprety-Wahlström) was evaluated, with the latter selected based on superior predictive performance.

---

### Statistical Rigor Assessment
The PBPK approach is appropriate for pediatric extrapolation, leveraging mechanistic physiological scaling. Virtual sample sizes (200 per group) provide robust estimates of population variability. Model performance was assessed with multiple metrics, though no formal sensitivity analysis was conducted. The lack of infant ETI data limits statistical validation; the three available infants are insufficient to confirm model accuracy. The use of adult reference exposures as targets is reasonable but assumes similar PK/PD relationships. Overall, the methodology is sound but would benefit from more extensive clinical data and uncertainty quantification.

---

## 📊 Key Findings
The adult and pediatric (2-18 years) ETI PBPK models showed good predictive performance, with 70-100% of observed concentrations within the 90% prediction interval and MFE within 0.5-2. Ivacaftor monotherapy simulations in infants yielded MFE within acceptable range, though overprediction occurred in older infants. Extrapolated ETI dosing in infants >2 months produced AUC0-τ comparable to adults; infants 1-2 months had lower exposures but elexacaftor Cavg and ivacaftor Cmin remained above EC50. Infants ≥14 kg had elevated exposures, with Cmax exceeding adult references. The study highlights the need for cautious dosing and TDM.

---

## 💡 Clinical & Regulatory Implications
The study suggests that ETI could be initiated in infants >2 months using doses extrapolated from ivacaftor monotherapy, with granule counting for precision. Infants 1-2 months may require higher doses or alternative strategies, while those ≥14 kg may need dose reduction to avoid supratherapeutic exposures. Therapeutic drug monitoring is strongly recommended, especially given the risk of neuropsychiatric effects. These findings could inform early access programs and clinical trial design, but regulatory approval will require confirmatory studies.

---

### Strengths & Limitations

#### Strengths
- First PBPK model for ETI in infants <2 years, addressing a critical knowledge gap.
- Rigorous stepwise validation from adults to children to infants, using real-world clinical data.
- Practical dose extrapolation via granule counting, enabling individualized dosing in clinical practice.
- Incorporation of CYP3A-mediated drug-drug interactions and ontogeny, enhancing mechanistic accuracy.
- Use of multiple evaluation metrics (visual checks, prediction intervals, fold errors) to assess model performance.

#### Limitations (Acknowledged by Authors)
- Infant ETI model validated with only three infants (7-16 months), limiting confidence in predictions for the youngest age group.
- No CF-specific physiological parameters (e.g., altered protein binding, gastrointestinal function) were included.
- Ivacaftor model underpredicted high concentrations and showed overprediction in older infants.
- PK/PD targets for ETI are not well-defined; adult exposure references may not directly translate to infants.
- Impact of infant feeding on absorption was not modeled, despite known food effects on elexacaftor.

#### Limitations (Expert Review)
- Biliary clearance assumed adult-like without transporter ontogeny, which may be inaccurate in very young infants.
- Virtual populations may not capture extreme variability in CF infants (e.g., severe malnutrition, liver disease).
- No formal sensitivity analysis was performed to assess the influence of key parameters (e.g., CYP3A4 abundance, absorption rate).
- Extrapolation relies on ivacaftor monotherapy dosing, which may not be optimal for elexacaftor and tezacaftor due to differing PK profiles.
- Lack of safety data in infants; supratherapeutic exposures in heavier infants raise concerns about neuropsychiatric adverse events.

#### Generalizability
The PBPK framework is generalizable to other pediatric CF populations and could be adapted for other CFTR modulators. However, the specific dosing recommendations require prospective clinical validation. The approach is most applicable to infants with normal organ function and typical growth patterns; caution is needed in those with comorbidities affecting drug disposition.

---

---

### Figures & Tables

- **Figure 1**: Schematic representation of the PBPK model development workflow, from adult model building to pediatric scaling and infant dose extrapolation.
  - *Significance*: Provides a clear overview of the stepwise modeling strategy, essential for understanding the study design.
- **Figure 2**: Validation graphs of elexacaftor, tezacaftor, and ivacaftor plasma concentrations in adults, showing observed data overlaid with simulated 5th-95th percentiles.
  - *Significance*: Demonstrates that the adult PBPK models adequately capture clinical PK, supporting their use as a basis for pediatric scaling.
- **Figure 3**: Validation graphs for children aged 2-18 years, stratified by age and weight groups, comparing observed MODUL-CF data with model predictions.
  - *Significance*: Confirms that the pediatric models, incorporating CYP3A4 ontogeny, accurately predict ETI exposure across a wide age range, a prerequisite for infant extrapolation.
- **Figure 4**: Boxplots of steady-state ivacaftor AUC0-12h in infants 1 month to <2 years, simulated under FDA monotherapy dosing, with adult reference range.
  - *Significance*: Illustrates the age-dependent changes in ivacaftor exposure and identifies the youngest infants as having lower AUC, informing the subsequent ETI dose extrapolation.
- **Figure 5**: Predicted-to-observed AUC ratios (MFE) for ivacaftor across infant dosing regimens and clinical datasets.
  - *Significance*: Quantifies the predictive performance of the ivacaftor infant model, showing acceptable accuracy (MFE 0.5-2) but a trend toward overprediction in older infants.
- **Figure 6**: Boxplots of simulated steady-state ETI AUC0-τ in infants, using doses extrapolated from ivacaftor monotherapy, with adult reference ranges.
  - *Significance*: Central result figure showing that most infants achieve adult-comparable exposures, while the youngest and heaviest subgroups deviate, directly supporting the dosing recommendations.
- **Table 1**: Mean (SD) PK parameters (AUC, Cmax, Cmin) and MFE for elexacaftor, tezacaftor, and ivacaftor in children 2-18 years, stratified by age/weight groups.
  - *Significance*: Provides quantitative evidence of model accuracy in the pediatric population, with all MFE values within the 0.5-2 acceptance range, validating the models for further scaling.

---

### Code & Reproducibility Assessment
The study used the commercial Simcyp Simulator (v22) and published compound files; no custom code was provided. Reproducibility is limited to users with Simcyp access and the specific model parameters detailed in File S1. No public repository or script was shared.

---

### Future Directions
Prospective clinical trials to validate predicted ETI exposures and efficacy in infants; incorporation of feeding effects and ontogeny of biliary transporters; development of PK/PD models linking exposure to sweat chloride and lung function in infants; evaluation of alternative dosing strategies for extreme weight groups; investigation of long-term safety, particularly neuropsychiatric outcomes, in young children receiving ETI.

---

### Expert Commentary
This work exemplifies the power of PBPK in pediatric drug development, especially for rare diseases where clinical trials are challenging. The stepwise validation approach is commendable, but the reliance on only three infant data points for ETI is a major limitation. The use of ivacaftor monotherapy as a dosing anchor is pragmatic, yet the differing PK profiles of elexacaftor and tezacaftor may require independent optimization. The finding that infants ≥14 kg may be overexposed is clinically important and echoes concerns about neuropsychiatric adverse events in young children. Overall, this study provides a valuable template for early access programs, but regulatory decisions will need more robust evidence.

---

### Bottom Line
This PBPK study provides the first pharmacokinetic predictions for ETI in infants with CF, supporting cautious dose extrapolation from ivacaftor monotherapy. While most infants may achieve therapeutic exposures, the youngest and heaviest subgroups require careful monitoring. Clinicians should use these findings as a starting point, with therapeutic drug monitoring and clinical follow-up, until prospective trials confirm safety and efficacy.

---

---

## 📊 Figures

![Schematic representation of physiologically based pharmacokinetic (PBPK) model development workflow.]({{ site.baseurl }}/assets/digests/2026-05-26-physiologically-based-pharmacokinetic-modeling-of/figures/fig_01.jpg)

![Validation graphs of elexacaftor, tezacaftor, and ivacaftor according to adult dosing recommendations. Solid lines indicate mean simulated concentrations; blue a]({{ site.baseurl }}/assets/digests/2026-05-26-physiologically-based-pharmacokinetic-modeling-of/figures/fig_02.jpg)

![Validation graphs of elexacaftor, tezacaftor, and ivacaftor as a function of dosing recommendations in children aged 2 to 18 years, stratified by weight and age]({{ site.baseurl }}/assets/digests/2026-05-26-physiologically-based-pharmacokinetic-modeling-of/figures/fig_03.jpg)

![Boxplots of steady-state ivacaftor exposure (AUC0-12h) across age-weight bands simulated using the final PBPK model under current FDA monotherapy dosing recommen]({{ site.baseurl }}/assets/digests/2026-05-26-physiologically-based-pharmacokinetic-modeling-of/figures/fig_04.jpg)

![Predicted-to-observed steady state AUC₀–τ ratios (MFE) for ivacaftor across dosing regimens and clinical datasets 10-12 in infants aged 1 to 24 months.]({{ site.baseurl }}/assets/digests/2026-05-26-physiologically-based-pharmacokinetic-modeling-of/figures/fig_05.jpg)

![Boxplots of the simulated steady-state ETI drug exposure (AUC0-tho) across age-weight bands. The ETI drug dosing are extrapolated from the ivacaftor monotherapy]({{ site.baseurl }}/assets/digests/2026-05-26-physiologically-based-pharmacokinetic-modeling-of/figures/fig_06.jpg)