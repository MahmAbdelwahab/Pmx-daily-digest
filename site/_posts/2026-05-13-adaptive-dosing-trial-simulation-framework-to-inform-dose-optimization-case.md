---
layout: post
title: "Adaptive Dosing Trial Simulation Framework to Inform Dose Optimization: Case Study Using Longitudinal PKPD Models With PF-06804103 Phase 1 Data in Participants With Human Epidermal Growth Factor Receptor 2 (HER2) Positive and Low Solid Tumors"
date: 2026-05-13
authors: "Li J, Zhou L, Leung ACF, Yin D, Chen X"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026; e70261"
doi: "10.1002/psp4.70261"
paper_type: popk
tags: [popk, qsp, oncology, regulatory, clinical-trial-design]
excerpt_text: "Pharmacometricians and clinical pharmacologists involved in oncology dose optimization should read this paper. It presents an adaptive dosing simulation framework that integrates population PK, repeated time-to-event safety, and tumor dynamic models to account for adverse event-driven dose modifications. The case study with the anti-HER2 ADC PF-06804103 demonstrates how this approach can inform optimal starting dose and dose modification schedules when a narrow therapeutic window exists."
pdf_path: "/assets/digests/2026-05-13-adaptive-dosing-trial-simulation-framework-to-inform-dose-optimization-case/PMx_Adaptive_Dosing_Trial_Simulation_Framewo_20260513.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
Pharmacometricians and clinical pharmacologists involved in oncology dose optimization should read this paper. It presents an adaptive dosing simulation framework that integrates population PK, repeated time-to-event safety, and tumor dynamic models to account for adverse event-driven dose modifications. The case study with the anti-HER2 ADC PF-06804103 demonstrates how this approach can inform optimal starting dose and dose modification schedules when a narrow therapeutic window exists.

---

### Executive Summary
This paper describes an adaptive clinical trial simulation framework that links longitudinal population pharmacokinetic (popPK), repeated time-to-event (RTTE) safety, and tumor dynamic models to guide dose optimization for oncology therapeutics. Using phase 1 data from 95 patients treated with the ADC PF-06804103, the authors developed a two-compartment popPK model, a Weibull RTTE model for Grade ≥2 peripheral neuropathy (PN), and an exposure-dependent tumor growth model with resistance. These models were integrated to simulate four dosing regimens (3, 3.5, 4 mg/kg Q3W, and 3 mg/kg with a 1-week delay) with protocol-specified dose modifications upon PN events. Simulations predicted that the 4 mg/kg starting dose provided the highest objective response rate (ORR) despite more frequent dose reductions, while the 3.5 mg/kg regimen offered a slightly lower but comparable benefit–risk profile. The framework captures the dynamic interplay between exposure, safety, and efficacy, addressing a critical gap in dose optimization under FDA's Project Optimus. It is adaptable to other oncology agents with time-dependent toxicities, though limitations include the exclusion of non-PN adverse events and reliance on early-phase data.

---

### Scientific Context & Motivation
Dose modifications due to intolerable toxicities are common in oncology (dose reduction rates 4–50%, interruption 23–77%, discontinuation 5–18% per FDA analysis). Traditional exposure–response analyses often use time-agnostic endpoints and may be confounded when dose modifications occur. While static, pre-specified dose modification scenarios can be simulated, they fail to capture the stochastic, time-dependent nature of adverse events. The FDA's Project Optimus emphasizes the need for robust dose optimization, especially for drugs with narrow therapeutic indices. This study addresses the gap by proposing an adaptive dosing simulation framework that dynamically links PK, safety, and efficacy models, allowing adverse event-driven dose changes to feed back into exposure and response predictions. The framework is demonstrated with PF-06804103, an anti-HER2 ADC that showed dose-dependent antitumor activity and peripheral neuropathy, making dose selection challenging.

---

## ⚡ Methodological Snapshot
The framework consists of three independently developed longitudinal models: (1) a two-compartment popPK model with first-order elimination, built using SAEM/IMP; (2) a repeated time-to-event model for Grade ≥2 peripheral neuropathy with a Weibull hazard and linear drug effect, estimated via Laplace; (3) a tumor dynamic model with exponential growth, drug-induced death, and resistance, using time-varying PK in the tumor compartment. Covariate selection used stepwise covariate modeling (SCM). The models were integrated in a simulation engine where, upon each simulated PN event, the dosing regimen is modified according to protocol rules (dose delay, reduction, or discontinuation), and the updated dosing history feeds back into the PK and PD models. Simulations were run 500 times per regimen using individual post hoc PK parameters and population PD parameter distributions.

---

## 🏗️ Structural Model Breakdown
PopPK: Two-compartment model with linear elimination. Parameters: $CL$ ($0.0309$ L/h), $V_c$ ($1.68$ L), $V_p$ ($3.01$ L), $Q$ ($24.9$ L/h). Covariates: male sex reduced $V_c$ by ~27% ($\Theta_{Male-V1} = -0.319$); a sex-body weight interaction further modified $V_c$ ($\Theta_{Sex-BWT} = -0.620$). IIV was estimated on $CL$, $V_c$, $V_p$, $Q$ with $\%CV$ $9.6$–$27.9\%$. RTTE PN: Hazard function $h(t) = \lambda \cdot \gamma \cdot t^{\gamma-1} \cdot (1 + \beta \cdot C)$, where $\lambda = \exp(\alpha)$ is the scale, $\gamma$ the shape (Weibull), and $\beta$ the linear drug effect slope ($\log(\gamma) = -0.959$). A transition rate $K_{TR}$ ($\log = -7.47$) governed the time between recurrent events. IIV on $\log(\alpha)$ ($\%CV$ $14\%$). Tumor dynamics: $\frac{dTS}{dt} = K_G \cdot TS - K_D \cdot C \cdot TS \cdot \exp(-\lambda \cdot t)$, where $TS$ is tumor size, $C$ is time-varying PF-06804103 concentration. $K_G$ ($1.96 \times 10^{-5}$ h$^{-1}$) increased with body weight and baseline tumor burden; $K_D$ ($4.08 \times 10^{-5}$ h$^{-1}$ per $\mu$g/mL); $\lambda$ ($0.0015$ h$^{-1}$). High IIV on all parameters ($\%CV$ $95$–$143\%$).

---

### Detailed Methodological Analysis

#### Modeling Approach
Population PK: two-compartment model with first-order elimination, parameterized in terms of clearance ($CL$), central volume ($V_c$), peripheral volume ($V_p$), and intercompartmental clearance ($Q$). RTTE safety: parametric time-to-event model with Weibull baseline hazard and linear drug effect on the hazard. Tumor dynamics: semi-mechanistic model with exponential tumor growth ($K_G$), drug-induced tumor shrinkage proportional to concentration ($K_D$), and exponential development of resistance ($\lambda$). All models were implemented in NONMEM 7.4.3.

#### Data Sources
Phase 1 dose-escalation/expansion study (NCT03284723) in 95 patients with HER2-positive or HER2-low breast/gastric cancer. Doses ranged from 0.15 to 5 mg/kg Q3W. PK sampling: predose and end-of-infusion on Day 1 of each cycle, with additional samples in Cycles 1 and 4 (1508 total observations). Tumor assessments: RECIST 1.1 every 6 weeks from Cycle 3 (335 measurements). Peripheral neuropathy graded by CTCAE v4.03; 35 Grade ≥2 events observed.

#### Estimation Methods
PopPK and tumor dynamic models: stochastic approximation expectation–maximization (SAEM) with Monte Carlo importance sampling (IMP). RTTE model: Laplace approximation. Interindividual variability modeled as log-normal; residual error as proportional (log-transformed data).

#### Model Evaluation
Model selection based on objective function value (OFV) change, diagnostic plots, and model stability. Final models evaluated via simulation-based diagnostics (visual predictive checks, VPCs) using parameter estimates from the final model. No bootstrap or external validation reported.

#### Covariate Analysis
Stepwise covariate modeling (SCM) with forward inclusion ($\alpha=0.05$ for PK and tumor, $\alpha=0.05$ for RTTE) and backward elimination ($\alpha=0.001$ for PK, $\alpha=0.005$ for tumor, $\alpha=0.01$ for RTTE). Tested covariates: age, sex, race, body weight, HER2 status, tumor type, baseline tumor burden, ADA status. Continuous covariates modeled via power function; categorical via linear shift. For RTTE, Kaplan–Meier mean covariate (KMMC) plots were used for initial screening.

---

### Statistical Rigor Assessment
The statistical methods are appropriate for the data types and objectives. SAEM is well-suited for complex PKPD models, and Laplace is standard for parametric TTE models. The SCM approach, while commonly used, can be prone to selection bias; the authors used stringent backward elimination criteria to mitigate this. Sample size (95 patients) is typical for phase 1 popPK but limited for covariate detection, especially with only 35 events in the RTTE model. The high $RSE\%$ for some tumor dynamic parameters (e.g., $77\%$ for $\lambda$) and large IIV ($\%CV > 100\%$) indicate substantial uncertainty. No formal power analysis was conducted. Missing data were handled by censoring in the TTE model and by using all available observations in the continuous models; no imputation was described. Sensitivity analyses (e.g., varying dose modification rules, excluding outliers) were not reported, which would have strengthened the conclusions. The VPCs provide visual evidence of model adequacy but do not quantify predictive performance. Overall, the analysis is fit-for-purpose for internal decision-making but would require additional rigor for regulatory submission.

---

## 📊 Key Findings
The popPK model was a two-compartment model with body weight and sex as covariates on central volume. The RTTE PN model used a linear drug effect and Weibull hazard; no covariates were significant. The tumor dynamic model included tumor growth rate ($K_G$), drug-induced death rate ($K_D$), and resistance ($\lambda$); baseline weight and tumor burden influenced $K_G$. Adaptive simulations (500 replicates per regimen) showed that the 4 mg/kg starting dose yielded the highest ORR (median 49% at Cycle 5, 50% at Cycle 9) despite the highest dose reduction rate (47% at Cycle 5, 69% at Cycle 9). The 3.5 mg/kg regimen (not clinically tested) gave slightly lower ORR (44% at Cycle 5) with similar dose modification rates. The 3 mg/kg regimens had lower ORR and higher discontinuation rates because patients reached the 2 mg/kg floor sooner. Shortening the dose delay from 2 to 1 week did not improve outcomes. Overall, 4 mg/kg was identified as the optimal starting dose, balancing superior efficacy against manageable toxicity.

---

## 💡 Clinical & Regulatory Implications
The simulations supported 4 mg/kg Q3W as the optimal starting dose for PF-06804103, offering the highest ORR despite increased PN risk. This dose could be taken forward into later-phase trials. The framework provides a template for dose optimization of other ADCs or targeted therapies where dose-limiting toxicities necessitate modifications. It aligns with FDA's Project Optimus by prospectively evaluating multiple dosages and dose modification schedules to identify the best benefit–risk balance. Clinically, the finding that a 1-week delay did not improve outcomes suggests that maintaining dose intensity (via shorter interruptions) may not compensate for reduced dose levels. The high discontinuation rate predicted for 3 mg/kg starting dose highlights the importance of allowing sufficient dose reduction steps before reaching a subtherapeutic floor. For special populations, the covariate effects (weight, sex) could inform initial dosing, though the overall framework already individualizes exposure based on PK. Regulatory reviewers may view such integrative simulations favorably if component models are well-validated and assumptions transparent.

---

### Strengths & Limitations

#### Strengths
- Innovative integration of three longitudinal models (popPK, RTTE safety, tumor dynamics) into a single adaptive simulation framework that captures the real-time impact of safety-driven dose modifications on PK and efficacy.
- Addresses a critical need in oncology dose optimization under FDA's Project Optimus, moving beyond static dose modification scenarios.
- Uses actual phase 1 clinical data (95 patients, rich PK and tumor measurements) to build and parameterize the models.
- Simulations incorporate individual post hoc PK parameters and population PD variability, reflecting realistic inter-patient differences.
- Provides sample simulation code and dataset in Supporting Information, enhancing transparency and reproducibility.
- Demonstrates practical application by comparing multiple untested dosing regimens and dose modification schedules to inform go/no-go development decisions.

#### Limitations (Acknowledged by Authors)
- Only Grade ≥2 peripheral neuropathy was modeled; other adverse events leading to dose modifications (e.g., skin toxicity, myalgia) were not included, potentially overestimating tolerability.
- Efficacy endpoint was limited to objective response rate (ORR); duration of response, progression-free survival, and overall survival were not evaluated due to early-phase data limitations.
- Simulations assume timely data availability and strict adherence to dose modification rules, which may not reflect real-world clinical practice where clinicians may deviate for patient safety.
- The framework was developed as a fit-for-purpose analysis to support internal program decisions, not as a fully validated regulatory tool.

#### Limitations (Expert Review)
- Small sample size (95 patients) and only 35 Grade ≥2 PN events limit the power to detect covariate effects and may lead to imprecise parameter estimates (e.g., high $RSE\%$ for tumor dynamic parameters).
- No external validation of the integrated simulation framework was performed; predictions were not compared against an independent dataset.
- The tumor dynamic model assumed a simple exponential growth with resistance; more complex mechanisms (e.g., immune effects, metastasis) were not considered.
- Potential impact of immunogenicity on PK and efficacy was not incorporated, though ADA formation was evaluated as a covariate and found non-significant.
- The simulation assumed that all dose modifications are driven solely by the modeled PN events; in reality, multiple toxicities may interact and influence clinician decisions.
- The framework's reliance on post hoc EBEs from the popPK model for the PD models may introduce bias if the PK model is misspecified or shrinkage is high.

#### Generalizability
The adaptive dosing simulation framework is conceptually generalizable to any oncology therapeutic with time-dependent, exposure-related safety and efficacy profiles. However, the specific models (structural forms, covariate effects) are drug- and indication-specific. Successful application requires adequate early-phase data to develop robust component models and careful definition of dose modification rules. The approach is particularly valuable for drugs with narrow therapeutic windows where dose modifications are frequent.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the adaptive dosing framework showing the integration of popPK, RTTE neuropathy, and tumor dynamic models. After drug administration, the PK model drives exposure, which feeds into safety and efficacy models. When a Grade ≥2 PN event occurs, the dose is modified per protocol, updating the PK profile and subsequent safety/efficacy predictions.
  - *Significance*: Illustrates the core concept of the framework—the closed-loop feedback between safety-driven dose modifications and PK/efficacy—which is the key innovation of the paper.
- **Figure 2**: Individual predicted longitudinal PK profiles and tumor volume changes for one simulated patient under each of the four dosing regimens. Shows how dose reductions due to PN events lead to lower drug concentrations and altered tumor trajectories.
  - *Significance*: Demonstrates the patient-level impact of adaptive dosing, making the simulation results tangible and highlighting the interplay between exposure, toxicity, and tumor response.
- **Figure 3**: Median tumor size change from baseline over time for each simulated dosing regimen. Colored lines represent the four starting doses, with shaded areas likely indicating prediction intervals.
  - *Significance*: Provides a comparative summary of predicted antitumor activity across regimens, showing that 4 mg/kg leads to the greatest tumor shrinkage despite more dose modifications.
- **Table 1**: Parameter estimates of the final popPK model (two-compartment) including clearance, volumes, intercompartmental clearance, residual error, and covariate effects (male on $V_c$, sex-body weight interaction). Also lists interindividual variability ($\%CV$).
  - *Significance*: Establishes the foundational PK model used to drive exposure in all subsequent PKPD analyses and simulations.
- **Table 2**: Parameter estimates of the RTTE peripheral neuropathy model: $\log(K_{TR})$ (transition rate), $\log(\alpha)$ (Weibull shape), $\log(\gamma)$ (drug effect slope), and IIV on $\log(\alpha)$.
  - *Significance*: Quantifies the exposure–safety relationship for the most common dose-limiting toxicity, which is central to the adaptive dosing rules.
- **Table 3**: Parameter estimates of the tumor dynamic model: $K_G$ (growth rate), $K_D$ (drug-induced death rate), $\lambda$ (resistance rate), residual error, and covariate effects (body weight and baseline tumor burden on $K_G$). High IIV $\%CV$ values are noted.
  - *Significance*: Defines the exposure–efficacy relationship and highlights the high variability in tumor dynamics, which influences the uncertainty in predicted ORR.
- **Table 4**: Simulated outcomes for each dosing regimen: ORR, percentage of patients with ≥1 dose reduction, and discontinuation rate at Cycle 5 and Cycle 9, presented as median [95% CI].
  - *Significance*: Provides the key decision-making summary, directly comparing the benefit–risk profiles of the four regimens and supporting the selection of 4 mg/kg as optimal.

---

### Code & Reproducibility Assessment
Sample adaptive dosing simulation code (including popPK, RTTE, and tumor dynamic models) and a simulation dataset are provided in Supporting Information S1. This enhances reproducibility of the simulation results. However, the full model development code (e.g., NONMEM control streams for base and final models) is not included, and the original clinical data are subject to Pfizer's data access policy, which requires a data access agreement.

---

### Supplementary Materials
Supporting Information S1 contains sample adaptive dosing simulation code (NONMEM-based) and a simulation dataset, allowing readers to reproduce the integrated simulations. Supporting Information S2 provides the detailed model equations for the RTTE neuropathy and tumor dynamic models, which are not included in the main text. No other supplementary materials were noted.

---

### Future Directions
Future work could expand the safety model to include multiple adverse events (e.g., skin toxicity, myelosuppression) and their competing risks. Incorporating survival endpoints (PFS, OS) would strengthen the framework for later-stage development. External validation using independent phase 2/3 data or other ADC programs is needed to assess predictive performance. The framework could be enhanced with more mechanistic tumor models (e.g., immune dynamics, metastasis) and adaptive dose modification rules based on continuous safety biomarkers rather than discrete grade events. Machine learning algorithms could be explored to optimize individualized dose modification schedules. Finally, regulatory acceptance of such integrative frameworks for dose justification should be further demonstrated through real-world case studies.

---

### Expert Commentary
This paper represents a timely and pragmatic advance in model-informed drug development, directly addressing the FDA's call for better dose optimization. The adaptive dosing framework is not entirely novel—similar concepts have been used in other therapeutic areas—but its application to an ADC with a narrow therapeutic index and the explicit integration of a repeated time-to-event safety model is a valuable contribution. From a senior pharmacometrician's perspective, the strength lies in the realistic simulation of the treatment course: each virtual patient's dosing is dynamically adjusted based on their own simulated toxicity, which then alters their exposure and subsequent efficacy. This is far more informative than traditional exposure–response analyses that ignore the confounding effect of dose modifications. However, the work also highlights the challenges: the tumor dynamic model parameters had high interindividual variability ($\%CV > 100\%$), reflecting the noisy nature of early-phase tumor data. The reliance on a single toxicity (PN) may overestimate the benefit–risk ratio; in practice, multiple toxicities often lead to treatment discontinuation. The framework's assumption of perfect adherence to dose modification rules is a simplification—real-world dose adjustments are often more nuanced. Nonetheless, as a fit-for-purpose tool to inform internal decisions, it is well executed. The provision of sample code is commendable and should be encouraged more broadly. For the field, this paper serves as a template for how to integrate multi-dimensional longitudinal models to support dose selection. I would advise practitioners to carefully assess the quality of each component model and to perform sensitivity analyses on the dose modification rules, as these can heavily influence simulation outcomes. Overall, this is a solid example of applied pharmacometrics that bridges the gap between modeling and clinical decision-making.

---

### Bottom Line
This adaptive dosing simulation framework provides a powerful and practical tool for dose optimization in oncology when adverse events frequently lead to dose modifications. By integrating PK, safety, and efficacy models, it captures the dynamic interplay that static analyses miss, enabling more realistic predictions of clinical outcomes. The case study with PF-06804103 illustrates how the framework can identify an optimal starting dose (4 mg/kg) that maximizes efficacy while accounting for subsequent dose reductions. Pharmacometricians should consider adopting similar integrative approaches to support regulatory and clinical dose selection, especially under Project Optimus, while being mindful of data limitations and the need for thorough model evaluation.

---

---

## 📊 Figures

![FIGURE 1: Adaptive dosing framework integrating longitudinal population PK, tumor dynamic, and repeated time-to-event neuropathy models. Following administration of the in]({{ site.baseurl }}/assets/digests/2026-05-13-adaptive-dosing-trial-simulation-framework-to-inform-dose-optimization-case/figures/fig_01.jpg)

![FIGURE 2: Individual predicted longitudinal PK profiles and tumor volume changes for each of the simulated dosing regimens. One simulated patient for each of the regimens]({{ site.baseurl }}/assets/digests/2026-05-13-adaptive-dosing-trial-simulation-framework-to-inform-dose-optimization-case/figures/fig_02.jpg)

![FIGURE 3: Predicted tumor size changes from baseline for each simulated dosing regimen. Colored lines represent median tumor burden change from baseline by starting dose r]({{ site.baseurl }}/assets/digests/2026-05-13-adaptive-dosing-trial-simulation-framework-to-inform-dose-optimization-case/figures/fig_03.jpg)