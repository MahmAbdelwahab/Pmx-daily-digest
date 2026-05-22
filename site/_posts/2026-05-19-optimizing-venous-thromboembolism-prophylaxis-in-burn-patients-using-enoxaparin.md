---
layout: post
title: "Optimizing Venous Thromboembolism Prophylaxis in Burn Patients Using Enoxaparin Through PBPK Modeling"
date: 2026-05-19
authors: "Sabiha Rahman Mim, Venkata K. Yellepeddi, Francine J. Azeredo"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70265"
paper_type: popk
tags: [popk, pbpk, qsp, regulatory]
excerpt_text: "This study presents the first burn-specific physiologically based pharmacokinetic (PBPK) model for enoxaparin, developed using real-world anti-Xa data from 408 patients. It demonstrates that standard weight-based dosing is frequently inadequate, particularly in obese patients and those with augmented renal clearance (ARC), and proposes PBPK-informed dose escalation strategies to improve venous thromboembolism (VTE) prophylaxis. Clinicians and pharmacometricians involved in critical care or MIDD should read this for its mechanistic framework addressing time-varying burn pathophysiology."
pdf_path: "/assets/digests/2026-05-19-optimizing-venous-thromboembolism-prophylaxis-in-burn-patients-using-enoxaparin/PMx_Optimizing_Venous_Thromboembolism_Prophy_20260519.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study presents the first burn-specific physiologically based pharmacokinetic (PBPK) model for enoxaparin, developed using real-world anti-Xa data from 408 patients. It demonstrates that standard weight-based dosing is frequently inadequate, particularly in obese patients and those with augmented renal clearance (ARC), and proposes PBPK-informed dose escalation strategies to improve venous thromboembolism (VTE) prophylaxis. Clinicians and pharmacometricians involved in critical care or MIDD should read this for its mechanistic framework addressing time-varying burn pathophysiology.

---

### Executive Summary
Mim et al. developed a whole-body PBPK model for enoxaparin in healthy adults and extrapolated it to burn patients by incorporating burn-specific physiological changes, including reduced subcutaneous absorption and decreased antithrombin levels. The model was evaluated against 1,288 anti-Xa concentrations from 408 burn patients and demonstrated acceptable predictive performance. Simulations revealed that standard prophylactic dosing (30–40 mg SC twice daily) frequently results in subtherapeutic anti-Xa exposure, especially during the first 96 hours post-burn and in patients with obesity (>100 kg) or ARC. The authors propose dose escalation up to 50–60 mg SC twice daily based on burn severity and body weight, providing a mechanistic, physiology-driven alternative to empirical dose adjustment. This work represents a significant step toward precision dosing in a complex, high-risk population where traditional compartmental models fall short.

---

### Scientific Context & Motivation
Burn patients are at high risk for VTE due to hypercoagulability, immobility, and surgical interventions. Enoxaparin is the standard of care for prophylaxis, but its pharmacokinetics are profoundly altered by burn-induced pathophysiology, including capillary leak, edema, hypermetabolism, and ARC. Previous studies have documented high rates of subtherapeutic anti-Xa levels with standard dosing, leading to empirical dose escalation strategies based on total body surface area (TBSA) and weight. However, these regression-based approaches fail to account for dynamic, phase-specific physiological changes. This study addresses the critical knowledge gap by developing a mechanistic PBPK model that explicitly integrates burn severity, injury phase, antithrombin depletion, and renal function to guide individualized dosing.

---

## ⚡ Methodological Snapshot
A whole-body PBPK model for enoxaparin was developed in PK-Sim/MoBi using physicochemical and ADME data from literature. The healthy adult model was validated against six clinical studies and then extrapolated to burn patients by reducing subcutaneous absorption rate ($k_a$ from $1.2$ to $0.4$ $h^{-1}$) and decreasing antithrombin levels (by up to $25\%$). The burn model was evaluated using 1,288 anti-Xa samples from 408 patients at a single burn center. Virtual populations ($N=100$) were simulated to assess target attainment across burn severities, body weights, and renal function (normal vs. ARC), with predictive performance assessed via AFE, AAFE, and RMSE.

---

## 🏗️ Structural Model Breakdown
The model is a whole-body PBPK model comprising 15 standard organs. Enoxaparin is administered subcutaneously with first-order absorption ($k_a = 1.2$ $h^{-1}$ in healthy adults, reduced to $0.4$ $h^{-1}$ in burn patients). The drug binds to antithrombin in plasma, characterized by a $K_D$ of $1.4-2.5$ $\mu M$ and an optimized $k_{off}$ of $0.5$ $h^{-1}$. Distribution is governed by PK-Sim standard partition coefficients and cellular permeabilities. Elimination occurs via renal clearance ($GFR$ fraction $= 1.0$, $f_{e,urine} = 40\%$) and hepatic metabolism via heparinase (intrinsic clearance $= 151$ $mL/min$). In the burn model, antithrombin expression in plasma is reduced to $60-90\%$ of normal levels, with the duration of reduction dependent on burn severity. The model does not include explicit compartments for edema or capillary leak; these effects are lumped into the reduced absorption rate constant.

---

### Detailed Methodological Analysis

#### Modeling Approach
A whole-body PBPK model with 15 organs was built using PK-Sim and MoBi (Open Systems Pharmacology Suite). Subcutaneous absorption was modeled as a first-order process. Enoxaparin binding to antithrombin was characterized by an equilibrium dissociation constant ($K_D$). Elimination included renal clearance ($40\%$ of total) and enzymatic degradation via heparinase. Anti-Xa activity served as the surrogate for drug exposure, with a conversion factor of $100$ $IU/mL$ per $1$ mg enoxaparin. The burn model incorporated reduced absorption rate constant ($k_a = 0.4$ $h^{-1}$) and decreased antithrombin expression ($60-90\%$ of normal).

#### Data Sources
The healthy adult model was developed using digitized concentration-time data from six published pharmacokinetic studies of subcutaneous enoxaparin in healthy volunteers. The burn model was evaluated using retrospective, de-identified electronic health record data from 408 burn patients admitted to the University of Utah Burn Center (July 2014–January 2023), yielding 1,288 anti-Xa concentrations. Patients had thermal, chemical, or electrical burns and received at least one dose of enoxaparin.

#### Estimation Methods
Model parameters were iteratively optimized against observed data to achieve best fit. The dissociation rate constant ($k_{off}$) was optimized using intravenous enoxaparin data. Population simulations used a virtual population of 100 individuals ($50\%$ female, ages $18-64$) with physiological parameters sampled from PK-Sim's built-in distributions. No formal parameter estimation (e.g., FOCE, SAEM) was reported; the approach was deterministic simulation with parameter optimization.

#### Model Evaluation
Predictive performance was assessed using average fold error (AFE) and absolute average fold error (AAFE), with acceptance criteria of AFE $0.5-2$ and AAFE $\le 3$. The proportion of observed data within the $90\%$ prediction interval was calculated (target $\ge 80\%$). For the burn model, twofold and threefold error criteria were used, along with RMSE, MAE, and residual plots against population-predicted concentrations. Stratified evaluations by dose, burn severity, phase, and body weight were performed.

#### Covariate Analysis
Covariates were incorporated mechanistically rather than through statistical selection. Burn severity (TBSA-based mild, moderate, severe) determined the duration and extent of antithrombin reduction and absorption impairment. Body weight was accounted for through the virtual population's physiological distributions. Augmented renal clearance (ARC, defined as $CrCl > 130$ $mL/min/1.73$ $m^2$) was implemented by simulating a virtual population with a mean normalized eGFR of $164.8$ $mL/min/1.73$ $m^2$. No formal stepwise covariate modeling was conducted.

---

### Statistical Rigor Assessment
The model evaluation relies on standard PBPK goodness-of-fit metrics (AFE, AAFE, RMSE, prediction intervals) rather than formal statistical inference. The acceptance criteria (AFE $0.5-2$, AAFE $\le 3$, $\ge 80\%$ within $90\%$ PI) are consistent with regulatory PBPK guidance. The use of a large clinical dataset (1,288 observations) strengthens the evaluation, though the retrospective, single-center design introduces potential selection bias and limits generalizability. Residual variability was assessed graphically, but no formal residual error model (e.g., proportional, additive) was described. The virtual population approach ($N=100$) captures interindividual variability but may not fully represent extreme phenotypes. Sensitivity analyses for key parameters (e.g., $k_a$, antithrombin levels) were not explicitly reported, which would have strengthened confidence in the model's robustness.

---

## 📊 Key Findings
The PBPK model adequately predicted enoxaparin anti-Xa concentrations in burn patients, with most observations falling within twofold error. Subtherapeutic exposure was most prominent during the emergent phase ($0-96$ hours post-burn) across all severities. In obese patients ($>100$ kg), dose escalation from $40$ mg to $60$ mg SC twice daily reduced the proportion of subtherapeutic troughs from $27.3\%$ to $16.9\%$. Patients with ARC consistently had lower trough concentrations than those with normal renal function, even at higher doses, indicating a need for tailored dosing. The model-informed dosing guidance recommends up to $50$ mg for moderate burns and $60$ mg for severe burns in patients $>100$ kg to achieve prophylactic targets.

---

## 💡 Clinical & Regulatory Implications
Standard enoxaparin dosing (30–40 mg SC twice daily) is frequently inadequate for VTE prophylaxis in burn patients, especially during the first 96 hours post-injury. The PBPK model supports dose escalation to 50–60 mg SC twice daily in obese patients ($>100$ kg) with moderate-to-severe burns. Patients with ARC require higher or more frequent dosing to achieve prophylactic anti-Xa targets, and anti-Xa monitoring alone may be insufficient without accounting for renal function. These findings suggest that burn centers should consider implementing PBPK-informed, physiology-driven dosing protocols rather than relying solely on weight-based or TBSA-based equations. Regulatory agencies may view this model as a supportive tool for dose justification in this special population, though prospective clinical validation is needed before widespread adoption.

---

### Strengths & Limitations

#### Strengths
- First burn-specific PBPK model for enoxaparin, incorporating phase-specific pathophysiology (emergent vs. flow phase).
- Mechanistic integration of key covariates: burn severity (TBSA), body weight, antithrombin depletion, and augmented renal clearance (ARC).
- Model evaluation using a large real-world dataset (1,288 anti-Xa samples from 408 patients), enhancing clinical relevance and generalizability.
- Provides actionable, model-informed dosing recommendations stratified by burn severity and weight, moving beyond empirical equations.
- Transparent reporting of model development workflow, parameter sources, and predictive performance metrics (AFE, AAFE, RMSE).

#### Limitations (Acknowledged by Authors)
- Retrospective, single-center design may limit generalizability to other burn populations and practice settings.
- Potential inaccuracies from electronic medical record data extraction, though quality control was implemented.
- Software limitations prevented large-scale population simulations across all dosing regimens, potentially underrepresenting extreme variability.
- Simplified representation of complex burn pathophysiology (e.g., edema, vascular permeability) via a reduced absorption rate constant rather than explicit mechanistic sub-models.
- Model does not fully capture evolving physiological changes in obese burn patients, contributing to residual prediction error.

#### Limitations (Expert Review)
- The model assumes a fixed $25\%$ reduction in antithrombin levels across all moderate-to-severe burns, without patient-specific antithrombin data, which may oversimplify inter-individual variability in anticoagulant response.
- Hepatic metabolism (desulfation/depolymerization) was not explicitly modeled despite contributing to enoxaparin clearance, potentially limiting extrapolation to patients with hepatic impairment.
- The virtual ARC population was based on a single mean eGFR value ($164.8$ $mL/min/1.73$ $m^2$), which may not capture the full spectrum of renal hyperfiltration dynamics over time.
- No external validation was performed using an independent burn patient cohort, which would strengthen confidence in the model's predictive performance.
- The model does not account for potential pharmacodynamic variability (e.g., factor Xa inhibition beyond anti-Xa levels) or clinical outcomes (VTE events, bleeding), limiting direct benefit-risk assessment.

#### Generalizability
The model is specifically tailored to adult burn patients and may not extrapolate well to pediatric or geriatric burn populations without further refinement. Its single-center derivation and reliance on specific physiological assumptions (e.g., antithrombin reduction magnitude) warrant external validation in multi-center cohorts before widespread clinical implementation. The mechanistic framework, however, is adaptable to other LMWHs or critical care populations with similar pathophysiological perturbations.

---

---

### Figures & Tables

- **Figure 1**: Schematic workflow for PBPK model development and application, from healthy adult model building to burn patient extrapolation and dosing simulations.
  - *Significance*: Provides a clear visual overview of the modeling strategy, highlighting the stepwise approach to incorporating burn-specific physiology.
- **Figure 2**: Observed versus predicted plasma anti-Xa concentrations in healthy adults following subcutaneous enoxaparin, with solid lines representing model predictions.
  - *Significance*: Demonstrates the foundational adult PBPK model's adequate fit to clinical data, supporting its validity before extrapolation to burn patients.
- **Figure 3**: Enoxaparin anti-Xa–time profiles during the emergent phase for 30, 40, 50, and 60 mg SC doses, with model-predicted median and observed data.
  - *Significance*: Illustrates the high proportion of subtherapeutic concentrations early post-burn and the impact of dose escalation on target attainment.
- **Figure 4**: Enoxaparin anti-Xa–time profiles during the flow phase for the same dosing regimens, comparing model predictions with observed data.
  - *Significance*: Shows improved target attainment in the flow phase compared to the emergent phase, but persistent subtherapeutic exposure in some subgroups.
- **Figure 5**: Simulated trough anti-Xa concentrations by dose in patients with ARC (blue) versus normal renal clearance (NRC, pink).
  - *Significance*: Visually demonstrates that ARC patients have lower trough levels even at higher doses, supporting the need for ARC-specific dose adjustment.
- **Table 1**: Summary of enoxaparin physicochemical properties, binding parameters, and ADME inputs for the healthy adult and burn PBPK models.
  - *Significance*: Provides transparency on model parameterization, including key burn-specific changes (reduced $k_a$, antithrombin levels), essential for reproducibility.
- **Table 2**: Proportion of subtherapeutic anti-Xa troughs stratified by enoxaparin dose and body weight group ($<75$ kg, $75-100$ kg, $>100$ kg).
  - *Significance*: Quantifies the benefit of dose escalation in reducing subtherapeutic exposure, particularly in obese patients, directly supporting the dosing recommendations.

---

### Future Directions
Prospective clinical studies are needed to validate the PBPK-informed dosing recommendations and assess their impact on VTE incidence and bleeding risk. The model could be extended to include pharmacodynamic endpoints (e.g., thrombin generation, clinical VTE events) to enable comprehensive benefit-risk assessment. Incorporation of patient-specific antithrombin measurements and time-varying renal function would enhance individualization. Adaptation of this PBPK framework to other anticoagulants (e.g., other LMWHs, direct oral anticoagulants) in burn or other critical care populations represents a logical next step.

---

### Expert Commentary
This paper represents a commendable application of PBPK modeling to address a genuine clinical conundrum in a niche, high-risk population. The authors correctly identify the limitations of empirical dosing and population PK models that cannot mechanistically account for the dramatic, time-varying physiological shifts following burn injury. The decision to model antithrombin depletion and ARC explicitly is clinically astute, as these are key drivers of enoxaparin's exposure-response relationship. However, the model's reliance on a fixed antithrombin reduction and a single ARC value highlights the classic PBPK trade-off between mechanistic detail and practical parameterization. The observed overprediction in severe/obese patients suggests that additional pathophysiological processes—perhaps related to edema-driven volume changes or altered protein binding—are at play. From a regulatory perspective, this model provides a strong foundation for an MIDD approach to dose justification in burn patients, though prospective verification with clinical outcomes is essential. The field should view this as an important proof-of-concept that PBPK can be leveraged for precision dosing in complex, dynamic disease states beyond oncology and pediatrics.

---

### Bottom Line
This burn-specific PBPK model provides a mechanistic basis for precision dosing of enoxaparin in a population where standard weight-based regimens frequently fail. Practitioners should consider higher initial doses (up to 50–60 mg SC twice daily) in obese patients with moderate-to-severe burns, particularly during the first 96 hours post-injury, and anticipate the need for further dose adjustment in patients exhibiting ARC. The model offers a physiology-driven alternative to trial-and-error dose escalation guided solely by anti-Xa monitoring.

---

---

## 📊 Figures

![Schematic representation of workflow for the development and application of a PBPK model of enoxaparin in burn patients.]({{ site.baseurl }}/assets/digests/2026-05-19-optimizing-venous-thromboembolism-prophylaxis-in-burn-patients-using-enoxaparin/figures/fig_01.jpg)

![Observed versus predicted plasma concentrations of enoxaparin–antithrombin (anti-Xa) complex in healthy adults following subcutaneous administration. Solid lines]({{ site.baseurl }}/assets/digests/2026-05-19-optimizing-venous-thromboembolism-prophylaxis-in-burn-patients-using-enoxaparin/figures/fig_02.jpg)

![Enoxaparin anti-Xa–time profiles during the emergent phase following subcutaneous doses of 30, 40, 50, and 60 mg. Black lines show model-predicted median concent]({{ site.baseurl }}/assets/digests/2026-05-19-optimizing-venous-thromboembolism-prophylaxis-in-burn-patients-using-enoxaparin/figures/fig_03.jpg)

![Enoxaparin anti-Xa–time profiles during the flow phase following subcutaneous doses of 30, 40, 50, and 60 mg. Black lines represent model-predicted median concen]({{ site.baseurl }}/assets/digests/2026-05-19-optimizing-venous-thromboembolism-prophylaxis-in-burn-patients-using-enoxaparin/figures/fig_04.jpg)

![Simulated trough concentrations by dose in patients with augmented renal clearance (ARC, blue) versus normal renal clearance (NRC, pink). Higher doses increased]({{ site.baseurl }}/assets/digests/2026-05-19-optimizing-venous-thromboembolism-prophylaxis-in-burn-patients-using-enoxaparin/figures/fig_05.jpg)