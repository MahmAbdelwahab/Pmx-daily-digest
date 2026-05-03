---
layout: post
title: "Population Pharmacokinetic Modeling and Exposure-Response Analyses of Nemtabrutinib in Patients With Hematologic Malignancies"
date: 2026-05-02
authors: "Chiara C. Kemal, Eline H.J. Krekels, Thomas J. Ziegler, Michael S. Cartwright"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70257"
paper_type: popk
tags: [popk, qsp, dose-response, covariate-analysis, regulatory, clinical-trial-design]
excerpt_text: "This paper presents a preliminary population PK model and exposure-response analyses for nemtabrutinib, a reversible non-covalent BTK inhibitor, in 578 patients with hematologic malignancies. Pharmacometricians and clinical pharmacologists should read this to understand the PK profile, covariate effects (none clinically significant), and the exposure-response relationships that support the 65 mg daily dose for CLL/SLL. The full covariate modeling approach and logistic regression for efficacy/safety are methodologically sound, though limited by covariate correlations and preliminary data."
pdf_path: "/assets/digests/2026-05-02-population-pharmacokinetic-modeling-and-exposure-response-analyses-of/PMx_Population_Pharmacokinetic_Modeling_and__20260502.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a preliminary population PK model and exposure-response analyses for nemtabrutinib, a reversible non-covalent BTK inhibitor, in 578 patients with hematologic malignancies. Pharmacometricians and clinical pharmacologists should read this to understand the PK profile, covariate effects (none clinically significant), and the exposure-response relationships that support the 65 mg daily dose for CLL/SLL. The full covariate modeling approach and logistic regression for efficacy/safety are methodologically sound, though limited by covariate correlations and preliminary data.

---

### Executive Summary
A two-compartment population PK model with first-order absorption and lag time was developed for nemtabrutinib using data from two clinical studies (BELLWAVE-001 and BELLWAVE-003). The model adequately described concentrations across doses 5–80 mg. A full covariate approach identified body weight, sex, race, disease indication, age, albumin, CYP3A4 modulators, and acid-reducing agents as covariates, but none had a clinically meaningful impact on exposure (geometric mean ratios within 0.8–1.25). Exposure-efficacy analysis in CLL/SLL patients showed a significant positive trend between average concentration ($C_{avg}$) and best overall response, while exposure-safety analysis showed significant trends for any-grade drug-related adverse events and hypertension, but not for Grade $\ge 3$ events. The integrated benefit-risk assessment supports 65 mg daily as the recommended phase 2 dose.

---

### Scientific Context & Motivation
Resistance to covalent BTK inhibitors (e.g., ibrutinib, acalabrutinib) frequently arises via C481 mutations, creating an unmet need for non-covalent BTK inhibitors that retain activity against mutant BTK. Nemtabrutinib is a reversible, non-covalent, ATP-competitive BTK inhibitor that does not require C481 for binding. Prior to this analysis, the population PK and exposure-response relationships of nemtabrutinib had not been systematically characterized. This study fills the gap by providing a comprehensive PK model and preliminary exposure-response analyses to inform dose selection and evaluate the need for dose adjustments in special populations.

---

## ⚡ Methodological Snapshot
A nonlinear mixed-effects modeling approach was used to develop a population PK model for nemtabrutinib. The structural model was a two-compartment model with first-order absorption (with lag time) and first-order elimination. Interindividual variability was included on $CL$ and $V_c$ with log-normal distribution. Residual error was modeled as combined proportional and additive. A full covariate modeling approach was adopted, where all prespecified covariates were retained regardless of statistical significance. Body weight effects on $CL$ and $V_c$ were estimated first and fixed. Covariates included age, sex, race, disease indication, albumin, CYP3A4 modulators, hepatic/renal impairment, and acid-reducing agents. Model evaluation used goodness-of-fit plots and visual predictive checks. Exposure-response analyses used multivariate logistic regression with $C_{avg}$ as the exposure metric and time on treatment as a saturable sigmoidal predictor.

---

## 🏗️ Structural Model Breakdown
The final structural model is a two-compartment disposition model with first-order absorption and a lag time. The absorption compartment (depot) has a first-order rate constant $K_a$. The central compartment (volume $V_c$) receives drug from the depot after a lag time ($ALAG_1$). Elimination occurs from the central compartment with clearance $CL$. Distribution to a peripheral compartment (volume $V_p$) is governed by intercompartmental clearance $Q$. The model can be described by differential equations: $\frac{dA_{depot}}{dt} = -K_a \cdot A_{depot}$; $\frac{dA_{central}}{dt} = K_a \cdot A_{depot} - \left(\frac{CL}{V_c} + \frac{Q}{V_c}\right) \cdot A_{central} + \frac{Q}{V_p} \cdot A_{peripheral}$; $\frac{dA_{peripheral}}{dt} = \frac{Q}{V_c} \cdot A_{central} - \frac{Q}{V_p} \cdot A_{peripheral}$. Bioavailability ($F$) was estimated to be 15% lower for doses <30 mg compared to 30–80 mg. Typical parameter values: $CL/F = 3.33$ L/h, $V_c/F = 120$ L, $Q/F = 0.681$ L/h, $V_p/F = 66.9$ L, $K_a = 2.83$ h$^{-1}$, lag time = 0.494 h.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling in NONMEM v7.5.1 with PsN v5.3.1. Structural model: two-compartment with first-order absorption and lag time, first-order elimination. Interindividual variability on $CL$ and $V_c$ (log-normal). Residual error: combined proportional and additive. Full covariate model with body weight exponents fixed after initial estimation.

#### Data Sources
Pooled data from two ongoing clinical studies: BELLWAVE-001 (phase 1/2, dose escalation 5–75 mg daily) and BELLWAVE-003 (phase 2, doses 45, 65, 80 mg daily). Total 578 patients with hematologic malignancies (CLL/SLL, B-cell NHL, Waldenstrom macroglobulinemia, other). Intensive and sparse PK sampling. Plasma concentrations measured by LC-MS/MS (LLOQ 1 ng/mL). 4% of observations below LLOQ were excluded.

#### Estimation Methods
First-order conditional estimation (FOCE) with interaction, as implemented in NONMEM. Model selection based on drop in objective function value ($p < 0.05$) and visual inspection of goodness-of-fit plots.

#### Model Evaluation
Standard goodness-of-fit plots (DV vs IPRED/PRED, CWRES vs time/PRED) stratified by dose. Visual predictive checks (VPCs) based on 500 simulations to assess predictive performance.

#### Covariate Analysis
Full covariate modeling approach: all prespecified covariates retained regardless of significance. Continuous covariates modeled as power functions (log-linear): $P_i = P_p \cdot (cov_i/cov_m)^{pow}$. Categorical covariates modeled as fractional differences: $P_i = P_p \cdot (1 + diff)$. Body weight exponents on $CL$ and $V_c$ estimated first and fixed. Covariates: body weight, sex, race, disease indication on $CL$ and $V_c$; age, albumin, moderate CYP3A4 inducers, strong CYP3A4 inhibitors, mild hepatic impairment, moderate renal impairment on $CL$; acid-reducing agents (PPI, H2 antagonists, antacids) on bioavailability. Missing covariates imputed with median or merged with largest category. Clinical significance assessed via simulations of $C_{avg}$ and comparison to 0.8–1.25 bounds.

---

### Statistical Rigor Assessment
The analysis uses standard NLME methodology with FOCE estimation. Sample size (578 patients, 5669 observations) is adequate for the number of parameters estimated. Missing data (4% BLQ, <2% missing covariates) were handled appropriately (exclusion or imputation). The full covariate approach avoids multiple testing issues but does not provide formal hypothesis tests for individual covariates. Uncertainty in parameter estimates is reported via RSE and 95% CI; many covariate effects have high RSE (>50%), indicating imprecision. Model evaluation relies on graphical diagnostics (GoF, VPC) rather than quantitative metrics (e.g., NPDE). Sensitivity analyses for covariate correlations were not formally conducted, but simulations preserving correlation structure were used to assess clinical significance. The exposure-response logistic regression models assume linear exposure effect on logit scale, which may not capture nonlinear relationships. Overall, the statistical methods are appropriate for a preliminary analysis, but the high uncertainty in some estimates warrants cautious interpretation.

---

## 📊 Key Findings
The final PK model estimated apparent clearance ($CL/F$) of 3.33 L/h, central volume ($V_c/F$) of 120 L, and terminal half-life of 85 h. Bioavailability was 15% lower for doses <30 mg. Covariate effects on $CL/F$ and $V_c/F$ were generally small; all geometric mean ratios for $C_{avg}$ fell within 0.8–1.25, indicating no clinically significant impact. Exposure-efficacy analysis in 288 CLL/SLL patients revealed a significant positive relationship between $C_{avg}$ and probability of best overall response (partial or complete response), with longer treatment duration also associated with higher response probability. Exposure-safety analysis in 578 patients showed significant trends for any-grade drug-related adverse events and any-grade hypertension with increasing $C_{avg}$, but no significant trends for Grade $\ge 3$ events or other selected safety endpoints. The 65 mg dose was identified as providing the best benefit-risk balance.

---

## 💡 Clinical & Regulatory Implications
The analysis supports the 65 mg daily dose of nemtabrutinib monotherapy for CLL/SLL. No dose adjustments are needed based on age, sex, race, body weight, mild hepatic impairment, mild/moderate renal impairment, or concomitant use of acid-reducing agents or CYP3A4 modulators. The exposure-response relationships indicate that doses below 45 mg are less efficacious, while doses above 80 mg are associated with increased toxicity without clear efficacy benefit. The 65 mg dose provides a favorable benefit-risk profile. For patients with moderate renal impairment, no dose adjustment is recommended based on the current data, but caution is warranted given the small sample size and potential confounding. The lack of data on severe hepatic/renal impairment precludes recommendations for those populations until dedicated studies are completed.

---

### Strengths & Limitations

#### Strengths
- Large dataset (578 patients) with intensive and sparse sampling across multiple doses (5–80 mg).
- Use of a full covariate modeling approach avoids selection bias and retains all prespecified covariates.
- Exposure-response analyses incorporate time-varying exposure metrics and account for treatment duration.
- Comprehensive evaluation of intrinsic (age, weight, sex, race, organ impairment) and extrinsic (CYP3A4 modulators, acid-reducing agents) factors.
- Model evaluation includes visual predictive checks and goodness-of-fit plots showing adequate performance.

#### Limitations (Acknowledged by Authors)
- Covariate correlations (e.g., weight with race, sex, disease) prevent unique identification of individual covariate effects; clinical significance assessed via simulations.
- Limited data for CYP3A4 inhibitor/inducer co-administration (small number of observations) leads to imprecise estimates.
- Exposure-efficacy analysis restricted to CLL/SLL patients; missing data on TP53 mutation status and prior treatment lines could confound results.
- Preliminary nature of the analysis; models will be updated with phase 3 data.

#### Limitations (Expert Review)
- The full covariate model fixed body weight exponents a priori, which may underestimate the true uncertainty in these parameters.
- Exposure-safety analysis pooled across all hematologic malignancies, potentially masking disease-specific safety profiles.
- Logistic regression for efficacy does not account for competing risks (e.g., death, dropout) that may be exposure-related.
- No formal model-based dose optimization (e.g., using utility functions) was performed; dose selection relied on observed response rates and safety trends.

#### Generalizability
The results are primarily applicable to patients with CLL/SLL and other hematologic malignancies similar to those enrolled in the phase 1/2 studies. The lack of data on severe hepatic/renal impairment and limited diversity in race (85.8% White) may limit generalizability to broader populations. The findings support the 65 mg dose for monotherapy, but combination therapy or different dosing schedules were not evaluated.

---

---

### Figures & Tables

- **Table 1**: Summary of patient demographics and baseline characteristics for BELLWAVE-001, BELLWAVE-003, and total population.
  - *Significance*: Provides the distribution of covariates used in the full covariate model, including sex, race, renal/hepatic impairment, disease indication, age, weight, albumin, and concomitant medication use.
- **Table 2**: Final population PK parameter estimates with RSE% and 95% confidence intervals.
  - *Significance*: Presents all structural model parameters, covariate effects, interindividual variability, and residual variability. Key for understanding the PK profile and the magnitude/uncertainty of covariate effects.
- **Figure 1**: Forest plot showing the effect of intrinsic covariates on nemtabrutinib $C_{avg}$ (dose-normalized average concentration).
  - *Significance*: Visually demonstrates that all covariate effects on exposure fall within the 0.8–1.25 bioequivalence bounds, supporting no need for dose adjustments.
- **Figure 2**: Individual $C_{avg}$ and $C_{max}$ values by dose and study, with error bars showing variability.
  - *Significance*: Illustrates the wide interindividual variability in exposure and the general increase with dose, supporting the dose-exposure relationship.
- **Figure 3**: Exposure-efficacy relationship: predicted probability of best overall response (PR/CR) as a function of $C_{avg}$, stratified by treatment duration (180 vs 360 days).
  - *Significance*: Shows a significant positive trend between exposure and response, with longer treatment duration increasing response probability. Supports the 65 mg dose by showing higher response rates compared to lower doses.
- **Figure 4**: Exposure-safety relationships: predicted probability of any-grade drug-related adverse events and any-grade hypertension as a function of $C_{avg}$.
  - *Significance*: Demonstrates significant trends for these safety endpoints with increasing exposure, but no trend for Grade $\ge 3$ events. Helps define the upper bound of acceptable exposure.

---

### Future Directions
The models will be updated with data from ongoing phase 3 studies, including progression-free survival, overall survival, and longer-term safety. Future analyses should incorporate patient-specific disease characteristics such as TP53 mutation status, prior BTKi/BCL2 inhibitor treatment, and number of prior lines of therapy. Additionally, exposure-response analyses for other efficacy endpoints (e.g., time to progression) and formal model-based dose optimization could further refine the dosing strategy. Dedicated organ impairment studies are ongoing to assess PK in moderate/severe hepatic and severe renal impairment.

---

### Expert Commentary
This is a well-conducted preliminary PopPK and exposure-response analysis typical of early-phase oncology drug development. The use of a full covariate model is appropriate given the high correlations among covariates, and the simulation-based assessment of clinical significance is a pragmatic approach. The exposure-efficacy relationship for BOR is encouraging, but the lack of a significant trend for Grade $\ge 3$ adverse events is reassuring for the 65 mg dose. However, the high uncertainty in many covariate effect estimates ($RSE > 50\%$) and the small number of patients on CYP3A4 modulators limit the conclusiveness of those findings. The authors appropriately acknowledge the preliminary nature and plan to update with phase 3 data. From a teaching perspective, this paper illustrates the challenges of covariate modeling in correlated datasets and the importance of using simulations rather than point estimates to assess clinical relevance.

---

### Bottom Line
Nemtabrutinib 65 mg daily is the recommended monotherapy dose for CLL/SLL based on preliminary population PK and exposure-response analyses. No dose adjustments are required for age, sex, race, body weight, mild hepatic impairment, mild/moderate renal impairment, or concomitant use of acid-reducing agents or CYP3A4 modulators. The exposure-response relationships support a favorable benefit-risk profile at 65 mg compared to lower or higher doses. These models will be refined with ongoing phase 3 data.

---