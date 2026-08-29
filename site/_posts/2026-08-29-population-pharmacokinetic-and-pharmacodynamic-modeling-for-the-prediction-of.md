---
layout: post
title: "Population Pharmacokinetic and Pharmacodynamic Modeling for the Prediction of the Extended Amlitelimab Phase 3 Dosing Regimen in Atopic Dermatitis"
date: 2026-08-29
authors: "Tiraboschi G, Papp K, Bieber T, Weidinger S, Beck L, Lee CH, O'Malley JT, Yen K, Bernigaud C, Fabre D, Hurbin F"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025, 14(12):2161-2172"
doi: "10.1002/psp4.70121"
paper_type: popk
tags: [popk, regulatory, clinical-trial-design]
excerpt_text: "This paper presents the PopPK and PopPK/PD-EASI models for amlitelimab, an anti-OX40L monoclonal antibody for moderate-to-severe atopic dermatitis. The models support an extended dosing regimen of 250 mg every 12 weeks (Q12W) with a loading dose, showing similar predicted efficacy to the Q4W regimen and enabling a 2-fold dose reduction for adolescents weighing <40 kg. Practitioners involved in dose selection for biologics in inflammatory diseases should read this for a robust example of model-informed drug development."
pdf_path: "/assets/digests/2026-08-29-population-pharmacokinetic-and-pharmacodynamic-modeling-for-the-prediction-of/PMx_Population_Pharmacokinetic_and_Pharmacod_20260829.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents the PopPK and PopPK/PD-EASI models for amlitelimab, an anti-OX40L monoclonal antibody for moderate-to-severe atopic dermatitis. The models support an extended dosing regimen of 250 mg every 12 weeks (Q12W) with a loading dose, showing similar predicted efficacy to the Q4W regimen and enabling a 2-fold dose reduction for adolescents weighing <40 kg. Practitioners involved in dose selection for biologics in inflammatory diseases should read this for a robust example of model-informed drug development.

---

### Executive Summary
The study developed a population pharmacokinetic (PopPK) model using data from five phase 1/2 studies (healthy volunteers and AD patients) and a PopPK/PD-EASI model from two phase 2 studies, to inform dosing for phase 3 trials of amlitelimab. The PopPK model featured a two-compartment structure with linear and Michaelis-Menten nonlinear clearances, first-order SC absorption with lag time and bioavailability. Key covariates included body weight (allometric), baseline EASI (increasing clearance), and serum albumin (increasing bioavailability). The PD model was an indirect-response (type I inhibition) model with Imax, IC50, and Kout, with responder status as a significant covariate. Simulations demonstrated that a 250 mg Q12W + loading dose regimen yields exposures between the 62.5 mg and 250 mg Q4W regimens and predicted EASI responses comparable to continuous Q4W. A two-fold dose reduction (125 mg Q4W or Q12W with a 250 mg loading dose) in individuals <40 kg was predicted to match adult exposures. These results supported the phase 3 evaluation of Q12W dosing in adults and adolescents.

---

### Scientific Context & Motivation
Atopic dermatitis (AD) is a chronic inflammatory skin disease with high treatment burden, and current therapies require frequent dosing. Amlitelimab, an anti-OX40L antibody, has shown efficacy in phase 2 trials with Q4W dosing, but extended dosing intervals could reduce burden. The knowledge gap was whether a Q12W regimen could maintain efficacy while sustaining adequate exposures. This study applied model-informed drug development to predict pharmacokinetics and pharmacodynamics across populations (including adolescents) and support dose selection for phase 3, addressing a key clinical need.

---

## ⚡ Methodological Snapshot
Nonlinear mixed-effects modeling was performed in NONMEM 7.5.1 with FOCE with interaction. A two-compartment PopPK model with linear + Michaelis-Menten clearance, first-order SC absorption with lag time and bioavailability, and allometric scaling on linear clearance and volumes was developed stepwise. Covariates were selected via forward inclusion (p<0.05) and backward deletion (p<0.001). The PD model was an indirect response type I where amlitelimab inhibits EASI production (Imax/IC50), with responder status as a covariate on Imax and Kout. Model qualification included GOF, VPC, and SIR. Simulations for dosing scenarios used 1000 virtual patients per scenario, with covariate distributions from observed phase 2 data.

---

## 🏗️ Structural Model Breakdown
The PopPK model is a two-compartment model with an SC absorption compartment. The central and peripheral compartments exchange via intercompartmental clearance (Q). Elimination from the central compartment is the sum of a linear clearance (CL) and a nonlinear Michaelis-Menten clearance (Vmax·C/(Km+C)). SC absorption is modeled as a first-order rate (ka) with lag time and a bioavailability fraction (Fsc). Allometric scaling is applied to CL, Q, Vc, and Vp using body weight (WT) with typical exponents (0.75 for clearances, 1 for volumes).[^fc-1] The PD model links free amlitelimab concentration to EASI via an indirect response model: EASI production rate (kin) is inhibited by a saturable function (Imax·C/(IC50+C)), and EASI is eliminated by a first-order rate (kout). The baseline EASI (E0) defines kin = kout·E0.[^fc-2] Responder status affects Imax and kout.

---

### Detailed Methodological Analysis

#### Modeling Approach
Population PK and PK/PD modeling using NONMEM 7.5.1. The PopPK model was a two-compartment structure with both linear (first-order) and nonlinear (Michaelis-Menten) clearance from the central compartment. SC absorption was described by a first-order rate constant, a lag time, and a bioavailability factor (Fsc). Allometric scaling with fixed exponents (0.75 for clearance, 1.0 for volumes) was applied to body weight. The PD model was an indirect response model (type I – inhibition of production) where amlitelimab concentration inhibits the production rate of EASI, parameterized with Kout, Imax, and IC50. Covariate relationships were explored for demographic, laboratory, and disease-related factors.

#### Data Sources
Data from 5 clinical studies: 3 phase 1 studies in healthy volunteers (IV, SC, single and multiple doses) and 2 phase 2 studies in adults with moderate-to-severe AD (phase 2a and STREAM-AD phase 2b). A total of 439 participants (78 healthy, 361 AD) contributed 4660 PK samples; the PD model used 2477 EASI measurements from 269 AD patients. Doses ranged from 0.006 mg/kg IV to 250 mg SC Q4W, with and without loading doses. Sampling times included intensive and sparse PK and EASI assessments during induction and maintenance/withdrawal periods.

#### Estimation Methods
First-order conditional estimation with interaction (FOCE-I) was used for all models. Model selection was based on objective function value differences, goodness-of-fit plots, and physiological plausibility. The final models were refined with iterative sampling importance resampling (SIR) for parameter uncertainty.

#### Model Evaluation
Goodness-of-fit plots (observed vs predicted, residuals), prediction-corrected visual predictive checks (VPCs) stratified by route and population, and SIR-based confidence intervals. The PopPK model was further evaluated by comparing predictive performance in AD vs healthy volunteers, and by simulating individual exposures. The PD model was validated via VPCs for responder and non-responder subgroups.

#### Covariate Analysis
Stepwise covariate modeling (forward inclusion at α=0.05, backward deletion at α=0.001) was conducted. For the PopPK model, significant covariates were body weight (allometric on CL and V), baseline EASI (increasing linear CL), and serum albumin (increasing SC bioavailability). For the PD model, only responder status was significant on Imax and Kout. Other covariates (age, sex, race, renal/hepatic function, ADA) were tested but not retained.

---

## 📊 Key Findings
1. The PopPK model described a dose-proportional increase in exposure across 62.5–250 mg Q4W doses with a two-fold accumulation at Q4W without loading dose; nonlinearity (TMDD) became relevant below ~1 μg/mL, representing ~20% of total clearance at therapeutic concentrations and 66% at the LLOQ. 2. Body weight was the main covariate: patients <74 kg had 42–58% higher AUC4W than heavier patients; baseline EASI ≥21 increased clearance (up to 32% higher AUC in moderate vs severe). 3. The PopPK/PD-EASI model (indirect response type I) with responder status as covariate predicted EASI trajectories well. 4. Simulations showed that 250 mg Q12W + LD, either from initiation or after 24 weeks of Q4W, produces similar EASI reductions as continuous 250 mg Q4W, and exposures fall between the 62.5 and 250 mg Q4W arms. 5. A two-fold dose reduction in individuals <40 kg yields exposures comparable to adults ≥40 kg.

---

## 💡 Clinical & Regulatory Implications
The study supports a 250 mg Q12W (with a 500 mg loading dose) dosing regimen for amlitelimab in adults and adolescents ≥40 kg, as this is predicted to maintain efficacy (EASI reduction) similar to the Q4W regimen while reducing dosing frequency. For adolescents <40 kg, a two-fold dose reduction (125 mg Q4W or Q12W with a 250 mg loading dose) is recommended to match adult exposures. These findings directly inform the phase 3 program design. From a regulatory perspective, this model-based approach aligns with the FDA/EMA guidance on MIDD, potentially expediting approval if phase 3 data confirm the predictions. The reduction in dosing frequency could improve adherence and quality of life for AD patients.

---

### Strengths & Limitations

#### Strengths
- Robust dataset from 5 studies (439 participants, 4660 PK samples, 2477 EASI evaluations) with a broad dose range and both IV/SC routes.
- Comprehensive model development with allometric scaling, covariate selection, and thorough qualification (GOF, VPC, SIR).
- Explicit consideration of TMDD and its impact at low concentrations.
- Use of a responder-status covariate rather than a mixture model, with improved prediction during withdrawal.
- Practical simulations for adolescent dosing supporting a 2-fold dose reduction, directly informing phase 3.
- Transparent presentation of parameter estimates and supporting tables in supplement.

#### Limitations (Acknowledged by Authors)
- Only two participants had completed the maintenance/withdrawal period at analysis time, limiting long-term withdrawal predictions to 32 weeks off therapy.
- No data on OX40L target expression to fully characterize the relationship between target occupancy and nonlinear clearance.
- Difference in PK between healthy volunteers and AD patients could not be fully explained.
- Albumin's effect on bioavailability was small and its unexpected direction requires confirmation.

#### Limitations (Expert Review)
- The PopPK model's allometric scaling was applied to linear clearance and volumes but not to the Michaelis-Menten parameters; potential misspecification for very low concentrations.[^fc-6]
- The PD model uses responder status as a covariate, which is not known a priori in clinical use; this may limit prospective predictions for individual patients.[^fc-7]
- Simulations assume that responder status distribution remains constant across regimens; this may not hold if different doses produce different responder fractions.[^fc-8]
- The 2-fold dose reduction for <40 kg is based on exposure matching, not directly on efficacy data from adolescents.
- Only 1.69% of samples below LLOQ were excluded, but the handling of these data was not detailed (e.g., M3 method).
- No external validation dataset was used for the final models (only internal VPC/SIR).

#### Generalizability
The models were developed in adults with moderate-to-severe AD and healthy volunteers; extrapolation to adolescents relies on body weight as the main covariate. The phase 3 program will test this dosing in adolescents, but until then, the predictions remain simulated. The modeling framework is applicable to other biologics with similar disposition, though the specific parameter values are amlitelimab-specific.[^fc-9]

---

### Key Equations

**Indirect Response Model (Type I Inhibition)**

{% raw %}
$$
dEASI/dt = kin * (1 - (Imax * C) / (IC50 + C)) - kout * EASI
$$
{% endraw %}

Describes the rate of change of EASI, where C is free amlitelimab concentration, kin is the production rate of EASI (often set as kin = kout * EASI_baseline), and amlitelimab inhibits the production (type I).

**Michaelis-Menten Nonlinear Clearance**

{% raw %}
$$
Vmax * C / (Km + C)
$$
{% endraw %}

Represents the target-mediated drug disposition (TMDD) component added to the linear clearance in the two-compartment PopPK model.

**Allometric Scaling for Clearance**

{% raw %}
$$
CL = CL_pop * (WT / 70)^0.75
$$
{% endraw %}

Allometric scaling of linear clearance using body weight (WT) with a fixed exponent of 0.75, as applied in the PopPK model.

---

### Figures & Tables

- **Figure 1**: Schematic representation of the final PopPK model (two-compartment with linear and MM clearance, SC absorption) and the PopPK/PD-EASI model (indirect response).
  - *Significance*: Provides a visual overview of the structural models used for simulations.
- **Figure 2**: Amlitelimab exposures (AUC4W, Cmax, Ctrough) by dose arm in STREAM-AD after first and last dose (Part 1).
  - *Significance*: Demonstrates dose-proportional PK and the accumulation ratio; confirms linearity across the studied dose range.
- **Figure 3**: Predicted clearance rates versus free amlitelimab serum concentrations in a typical patient with AD (75 kg, EASI 27.5), showing TMDD contribution.
  - *Significance*: Illustrates the nonlinear clearance behavior at low concentrations and the relative contribution of TMDD at different concentrations (e.g., 66% at LLOQ).
- **Figure 4**: Predicted changes from baseline in EASI for responders and non-responders, with VPC showing model fit.
  - *Significance*: Validates the PopPK/PD-EASI model's predictive performance over induction and withdrawal periods.
- **Figure 5**: Simulated scenarios: (a) Q4W for 24 weeks then Q12W vs Q4W continuous; (b) Q12W from initiation vs Q4W reference; (c) exposure comparisons for the Q12W regimen.
  - *Significance*: Primary evidence supporting the Q12W regimen, showing similar predicted efficacy and exposure within the efficacious range.
- **Figure 6**: Predicted amlitelimab exposures by body weight band for adolescents <40 kg (25-<40 kg) compared with adults ≥40 kg with a two-fold dose reduction.
  - *Significance*: Supports the 125 mg Q4W or Q12W dose recommendation for low-body-weight adolescents.
- **Table 1**: Summary of clinical studies used in the analysis (phase, number of subjects, PK/EASI samples, dosing regimens).
  - *Significance*: Describes the data sources and breadth of the analysis.
- **Table S2**: Final PopPK parameter estimates and covariate relationships.
  - *Significance*: Provides numerical details for the PopPK model, including CL, V, Vmax, Km, absorption parameters, and covariate effects.
- **Table S6**: Final PopPK/PD-EASI parameter estimates and covariate relationships.
  - *Significance*: Provides the PD model parameters (Imax, IC50, Kout) and responder status covariate effects.

---

### Code & Reproducibility Assessment
No code or full NONMEM control streams were provided.[^fc-10] Data availability is via Vivli (https://www.vivli.org/) for qualified researchers, but no explicit model code is stated. The supplementary tables include detailed parameter estimates (Tables S2, S6) but not the PROV/R scripts.[^fc-11]

---

### Supplementary Materials
Supplementary materials include additional tables and figures, such as Table S1 (participant characteristics), Table S2 (PopPK parameters), Table S3 (impact of covariates on exposures), Table S4 (withdrawal data), Table S5 (baseline characteristics for PD model population), Table S6 (PD model parameters), Table S7 (Q12W exposure values), and Figures S1–S3 (goodness-of-fit plots and VPCs).

---

### Future Directions
Future work should confirm the predicted Q12W efficacy in the ongoing phase 3 trials, particularly in adolescents. Long-term follow-up beyond 32 weeks off-treatment is needed to characterize the durability of response. Additional studies could explore the impact of OX40L target expression on TMDD and refine the dose-exposure relationship. Also, a full model-based meta-analysis comparing amlitelimab with other AD biologics (dupilumab, tralokinumab) would place these results in the therapeutic landscape.

---

### Expert Commentary
This work exemplifies how a well-qualified PopPK/PD model can be used to extend dosing intervals in a biologics program. The use of an indirect-response model with responder status as a covariate is pragmatic, though it raises the question of how to predict response in future patients not yet classified.[^fc-13] The TMDD characterization at low concentrations is a nice touch, but the assumption of linearity in the phase 3 dose range seems well supported.[^fc-14] The body-weight-based dose reduction for adolescents is a classic application of allometric principles. The main caution is that the PD model predictions for Q12W rely on extrapolating beyond the observed dosing interval, but the VPC results support robustness.[^fc-15] Overall, this paper is a solid contribution to the pharmacometrics literature and a model template for other biologics development programs.

---

### Bottom Line
The PopPK and PopPK/PD-EASI analyses support a 250 mg Q12W (with loading dose) regimen for amlitelimab in adults and adolescents ≥40 kg, and a 125 mg Q12W/Q4W (with 250 mg LD) for adolescents <40 kg. These regimens are predicted to maintain efficacy similar to the established Q4W regimens while reducing dosing frequency, likely improving treatment adherence and patient burden. The modeling approach is a strong example of MIDD for dose selection in phase 3.[^fc-16]

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “Allometric scaling is applied to CL, Q, Vc, and Vp using body weight (WT) with typical exponents (0.75 for clearances, 1 for volumes).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “The baseline EASI (E0) defines kin = kout·E0.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **NUMERIC_MISMATCH** — original: “A total of 439 participants (78 healthy, 361 AD) contributed 4660 PK samples.” → correction: “In total, 4660 concentration time points from 438 participants were included in the final dataset of the PopPK analysis.”
[^fc-4]: **UNSUPPORTED** — original: “This model-based approach aligns with the FDA/EMA guidance on MIDD, potentially expediting approval if phase 3 data confirm the predictions.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **NUMERIC_MISMATCH** — original: “The dataset included 439 participants, 4660 PK samples, and 2477 EASI evaluations from 5 studies.” → correction: “In total, 4660 concentration time points from 438 participants were included in the final dataset of the PopPK analysis.”
[^fc-6]: **UNSUPPORTED** — original: “The PopPK model's allometric scaling was applied to linear clearance and volumes but not to the Michaelis-Menten parameters; potential misspecification for very low concentrations.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “The PD model uses responder status as a covariate, which is not known a priori in clinical use; this may limit prospective predictions for individual patients.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “Simulations assume that responder status distribution remains constant across regimens; this may not hold if different doses produce different responder fractions.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “The modeling framework is applicable to other biologics with similar disposition, though the specific parameter values are amlitelimab-specific.” → correction: “No mention of applicability to other biologics in source text.”
[^fc-10]: **UNSUPPORTED** — original: “No code or full NONMEM control streams were provided.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The supplementary tables include detailed parameter estimates (Tables S2, S6) but not the PROV/R scripts.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “A full model-based meta-analysis comparing amlitelimab with other AD biologics (dupilumab, tralokinumab) would place these results in the therapeutic landscape.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “The use of an indirect-response model with responder status as a covariate is pragmatic, though it raises the question of how to predict response in future patients not yet classified.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “The TMDD characterization at low concentrations is a nice touch, but the assumption of linearity in the phase 3 dose range seems well supported.” → correction: “Linearity was observed from the lowest dosing regimen (62.5 mg Q4W) tested in participants with AD, consistent with saturation of the OX40L target in the dose range investigated in STREAM-AD.”
[^fc-15]: **UNSUPPORTED** — original: “The main caution is that the PD model predictions for Q12W rely on extrapolating beyond the observed dosing interval, but the VPC results support robustness.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “The modeling approach is a strong example of MIDD for dose selection in phase 3.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-08-29-population-pharmacokinetic-and-pharmacodynamic-modeling-for-the-prediction-of/figures/fig_01.jpg)

![Schematic representation of the final PopPK model and PopPK/PD-EASI model. CL, clearance; Fsc, bioavailability after subcutaneous injection; IC50, free drug conc]({{ site.baseurl }}/assets/digests/2026-08-29-population-pharmacokinetic-and-pharmacodynamic-modeling-for-the-prediction-of/figures/fig_02.jpg)

![Amlitelimab exposures by dose arm in participants with AD after first dose and last dose following Q4W administration in the STREAM-AD phase 2b trial (Part 1; ba]({{ site.baseurl }}/assets/digests/2026-08-29-population-pharmacokinetic-and-pharmacodynamic-modeling-for-the-prediction-of/figures/fig_03.jpg)

![Predicted clearance rates versus free amlitelimab serum concentrations in a typical patient with AD. Baseline body weight: 75 kg; baseline EASI: 27.5; LLOQ = 0.0]({{ site.baseurl }}/assets/digests/2026-08-29-population-pharmacokinetic-and-pharmacodynamic-modeling-for-the-prediction-of/figures/fig_04.jpg)

![Predicted changes from baseline in EASI for (A) responder participants receiving amlitelimab from Week 0 and during the withdrawal period, (B) responder particip]({{ site.baseurl }}/assets/digests/2026-08-29-population-pharmacokinetic-and-pharmacodynamic-modeling-for-the-prediction-of/figures/fig_05.jpg)

![Simulated extended dosing regimen scenarios performed in 1000 virtual responder participants per scenario. (A) PopPK/PD-EASI model-predicted percent changes from]({{ site.baseurl }}/assets/digests/2026-08-29-population-pharmacokinetic-and-pharmacodynamic-modeling-for-the-prediction-of/figures/fig_06.jpg)

![Predicted amlitelimab exposures by body weight band for adolescents < 40 kg (range: 25 to < 40 kg) compared with adults ≥ 40 kg based on a twofold dose reduction]({{ site.baseurl }}/assets/digests/2026-08-29-population-pharmacokinetic-and-pharmacodynamic-modeling-for-the-prediction-of/figures/fig_07.jpg)