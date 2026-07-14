---
layout: post
title: "PK and PK/PD Modeling of Bcl2 Inhibitor S65487 in Patients With AML and Investigation of Nonlinearity With Microdosing"
date: 2026-07-14
authors: "Burlot C, Riglet F, Romagnoli M, Leconte A, Delmas A, Schmitt A, Fouliard S"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025"
doi: "10.1002/psp4.70000"
paper_type: popk
tags: [popk]
excerpt_text: "This paper presents a PK/PD model for the Bcl2 inhibitor S65487 and a novel approach to reconcile microdose and therapeutic dose data using Michaelis-Menten approximations. Pharmacometricians working on small molecules with nonlinear PK or microdosing strategies should read this for its practical modeling framework and insights into target-mediated drug disposition in small molecules."
pdf_path: "/assets/digests/2026-07-14-pk-and-pkpd-modeling-of-bcl2-inhibitor-s65487-in-patients-with-aml-and/PMx_PK_and_PKPD_Modeling_of_Bcl2_Inhibitor_S_20260714.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a PK/PD model for the Bcl2 inhibitor S65487 and a novel approach to reconcile microdose and therapeutic dose data using Michaelis-Menten approximations. Pharmacometricians working on small molecules with nonlinear PK or microdosing strategies should read this for its practical modeling framework and insights into target-mediated drug disposition in small molecules.

---

### Executive Summary
This study presents a comprehensive population PK/PD analysis of the Bcl2 inhibitor S65487 in patients with hematological malignancies, alongside a novel approach to reconcile microdose and therapeutic dose data. The PK was described by a linear three-compartment model, and the PD by an indirect response model where S65487 inhibits Bcl2/Bim complex formation. Simulations predicted up to 97.6% complex disruption at 1200 mg, with a plateau above 300-800 mg. To address the observed nonlinearity between microdose (0.1 mg) and therapeutic doses (25-1200 mg), the authors developed a Microdose-Optimized (MO) PK model incorporating Michaelis-Menten approximations for both elimination and distribution. This model reduced the exposure prediction error from 5-fold to 1.1-fold for microdose data, providing a unified framework for dose extrapolation. The work demonstrates the value of mechanistic modeling in maximizing information from microdose studies and highlights the potential for TMDD-like nonlinearity in small molecules.

---

### Scientific Context & Motivation
Bcl2 inhibitors are a promising class of targeted cancer therapeutics, with venetoclax being the most prominent example. Understanding the relationship between drug exposure and target engagement (Bcl2/Bim complex disruption) is critical for dose optimization. Microdose studies offer early PK insights but are complicated by nonlinear PK due to saturation of transporters, metabolism, or target binding. Target-mediated drug disposition (TMDD) is well-characterized for large molecules but less studied for small molecules. This work addresses the gap by developing a unified PK model that accounts for nonlinearity between microdose and therapeutic doses, using a Michaelis-Menten approximation of TMDD. The study also provides the first clinical PK/PD characterization of S65487, a novel Bcl2 inhibitor.

---

## ⚡ Methodological Snapshot
The authors developed two main models using nonlinear mixed-effects modeling in Monolix. First, a PK/PD model for therapeutic doses: a linear three-compartment PK model linked to an indirect response PD model where S65487 inhibits Bcl2/Bim complex formation. Second, a Microdose-Optimized (MO) PK model that incorporates Michaelis-Menten approximations for both elimination and distribution to reconcile microdose and therapeutic dose data. The MO PK model uses separate residual error models for the two dose groups to account for different bioanalytical methods. Model evaluation included standard diagnostics (VPCs, pcVPCs, GOF plots) and a novel pAUC/oAUC ratio to assess exposure prediction accuracy.

---

## 🏗️ Structural Model Breakdown
The PK/PD model consists of a linear three-compartment PK model (central, two peripheral compartments) with first-order elimination from the central compartment. The PD component is an indirect response model where the Bcl2/Bim complex concentration (R) is governed by a zero-order production rate ($k_{in}$) and a first-order degradation rate ($k_{out}$). S65487 inhibits the production rate via an $E_{max}$ model with $I_{max}$ fixed to 1. The MO PK model modifies the elimination and distribution to the second peripheral compartment by adding Michaelis-Menten terms: elimination rate = ($CL/V_c$ + $V_{max,Elimination}/(K_{m,Elimination} + C)$) × $C$, and distribution to the second peripheral compartment = $V_{max,Distribution}/(K_{m,Distribution} + C)$ × $C$. The first peripheral compartment remains linear. Separate residual error models are used for microdose (additive + proportional) and therapeutic doses (additive + proportional).

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling. PK: three-compartment model. PK/PD: indirect response model with inhibition of complex formation ($I_{max}$ fixed to 1). MO PK: Michaelis-Menten approximations for elimination and distribution, with separate residual error models for microdose and therapeutic doses.

#### Data Sources
Data from three clinical studies: a phase 0 microdose study (0.1 mg IV, 5 healthy volunteers, 84 PK samples), a phase I study (25-1200 mg, 60 patients, 1265 PK samples, 237 PD samples), and a phase I/II study (50-533 mg, 41 patients, 682 PK samples, 219 PD samples). Total: 2031 PK and 456 PD samples from 106 subjects. PD samples were Bcl2/Bim complex concentrations normalized by total plasma protein.

#### Estimation Methods
Stochastic Approximation Expectation-Maximization (SAEM) algorithm implemented in Monolix 2023R1. BLQ data handled using the M3 method.

#### Model Evaluation
Models evaluated using RSE, BIC, goodness-of-fit plots (observed vs. predicted, residuals), VPCs, and pcVPCs. For the MO PK model, an additional evaluation used the ratio of population-predicted AUC to observed AUC (pAUC/oAUC).

#### Covariate Analysis
Covariates tested included study effect, demographics (age, sex, weight, BMI, BSA), and baseline biology (albumin, ASAT, ALAT, bilirubin, creatinine, CrCl). Forward selection/backward exclusion with $p<0.05$ and $p<0.01$ thresholds. Only study effect on $IC_{50}$ was significant in the PK/PD model. No significant covariates were found in the MO PK model.

---

### Statistical Rigor Assessment
The analysis is methodologically sound, with appropriate use of SAEM for parameter estimation and standard model evaluation techniques. The sample size (106 subjects, 2031 PK samples) is adequate for the PK model, though the PD component relies on 456 samples from 87 patients. The use of the M3 method for BLQ data is appropriate. The pAUC/oAUC ratio is a practical metric for assessing exposure prediction. However, the extremely high IIV on several parameters (e.g., $IC_{50}$: 1386.5% CV) raises concerns about model identifiability and suggests potential misspecification. The structural confounding between dose and population (healthy volunteers vs. patients) is a major limitation that cannot be fully addressed statistically. Sensitivity analyses for the Michaelis-Menten parameters are not reported, and the model's performance at the plateau doses (300-800 mg) is not explicitly validated.

---

## 📊 Key Findings
The PK of S65487 is best described by a linear three-compartment model with clearance of 12.2 L/h and central volume of 7.6 L. The PD is described by an indirect response model with inhibition of Bcl2/Bim complex formation, with an $IC_{50}$ of 140.9 μg/L in phase I and 29.4 μg/L in phase I/II. Simulations predict a maximum complex reduction of 97.6% at 1200 mg, with a plateau above 300-800 mg. The MO PK model, incorporating Michaelis-Menten approximations for elimination ($V_{max}$ = 892.5 μg/h, $K_m$ = 17.7 μg/L) and distribution ($V_{max}$ = 5105.4 μg/h, $K_m$ = 145.1 μg/L), reduces the exposure prediction error from 5-fold to 1.1-fold for microdose data. The model suggests that at microdose concentrations (0.001-5 μg/L), elimination and distribution follow first-order kinetics, while at therapeutic doses, saturable pathways become engaged.

---

## 💡 Clinical & Regulatory Implications
The PK/PD model predicts that doses above 300-800 mg provide no additional pharmacological benefit in terms of Bcl2/Bim complex disruption, with a maximum reduction of 97.6% at 1200 mg. The study effect on $IC_{50}$ (140 vs 29.4 μg/L) suggests that previously treated patients may require higher doses than treatment-naïve patients. The MO PK model enables more accurate prediction of therapeutic dose exposure from microdose data, potentially reducing the need for extensive dose-finding studies. However, the model does not directly support specific dosing recommendations for special populations, as no significant covariates were identified beyond the study effect on $IC_{50}$.

---

### Strengths & Limitations

#### Strengths
- Comprehensive PK/PD characterization of a novel Bcl2 inhibitor using clinical data.
- Innovative use of Michaelis-Menten approximation to reconcile microdose and therapeutic dose data.
- Practical model evaluation using pAUC/oAUC ratio in addition to standard diagnostics.
- Systematic exploration of multiple mechanistic hypotheses for nonlinear PK.
- Clear presentation of model development and selection process.
- Simulations provide actionable insights for dose optimization.

#### Limitations (Acknowledged by Authors)
- Microdose administration was in healthy volunteers, creating a confounding factor between dose and population.
- The structural imbalance between healthy volunteers and patients does not allow ruling out other population-related confounding factors.
- Plasma protein binding was not tested at microdose concentrations, potentially confounding the results.
- The CYP3A4 auto-inhibition hypothesis could not be confirmed due to model instability.
- The Michaelis-Menten model is an approximation; a full TMDD model could not be estimated due to parameter identifiability issues.

#### Limitations (Expert Review)
- Extremely high IIV on $IC_{50}$ (1386.5% CV) suggests the PD model may be misspecified or missing key covariates.
- The study effect on $IC_{50}$ is confounded with both treatment (monotherapy vs. combination) and patient population (previously treated vs. treatment-naïve).
- No external validation of the MO PK model is provided; the pAUC/oAUC evaluation uses the same data used for model development.
- The Michaelis-Menten parameters ($V_{max}$, $K_m$) are not linked to any physiological measurements, limiting mechanistic interpretability.
- The model does not account for potential time-varying covariates or disease progression.
- The simulation-based dose optimization (plateau at 300-800 mg) is not validated against clinical outcomes.

#### Generalizability
The PK/PD model is specific to S65487 and the studied populations (AML, NHL, multiple myeloma). The MO PK model framework may be generalizable to other small molecules with nonlinear PK, but the specific parameter estimates are drug-dependent. The microdose-to-therapeutic dose extrapolation approach is conceptually generalizable but requires validation in other compounds.

---

### Key Equations

**Indirect Response PD Model**

{% raw %}
$$
\frac{dR}{dt} = k_{in} \times \left(1 - \frac{I_{max} \times C}{IC_{50} + C}\right) - k_{out} \times R
$$
{% endraw %}

Indirect response model for Bcl2/Bim complex inhibition. The rate of change of the complex concentration (R) is governed by a zero-order production rate ($k_{in}$) and a first-order degradation rate ($k_{out}$). S65487 inhibits the production rate via an $E_{max}$ model with $I_{max}$ fixed to 1.

**Michaelis-Menten Elimination**

{% raw %}
$$
\frac{dA_c}{dt} = -\left(\frac{CL}{V_c} + \frac{V_{max}^{Elimination}}{K_m^{Elimination} + C}\right) \times C + \text{input} - \text{distribution}
$$
{% endraw %}

Michaelis-Menten approximation for saturable elimination, used in the MO PK model to describe nonlinear clearance at low concentrations.

**Michaelis-Menten Distribution**

{% raw %}
$$
\frac{dA_{p2}}{dt} = \frac{V_{max}^{Distribution}}{K_m^{Distribution} + C} \times C - k_{31} \times A_{p2}
$$
{% endraw %}

Michaelis-Menten approximation for saturable distribution to the second peripheral compartment, used in the MO PK model.

**Baseline Complex Concentration**

{% raw %}
$$
R_0 = \frac{k_{in}}{k_{out}}
$$
{% endraw %}

Baseline condition for the indirect response model, where at steady state the production rate equals the degradation rate.

---

### Figures & Tables

- **Table 1**: Study design and patient demographics for the three clinical studies (microdose phase 0, phase I, phase I/II)
  - *Significance*: Provides essential context for understanding the data sources and population differences that may confound the microdose-to-therapeutic dose comparison.
- **Table 2**: Parameter estimates for the base and final PhI-II PK/PD models
  - *Significance*: Provides the key parameter values for the PK/PD model, including the study effect on $IC_{50}$ and the high interindividual variability estimates.
- **Table 3**: Parameter estimates for the Microdose-Optimized PK model
  - *Significance*: Provides the key parameter values for the MO PK model, including the Michaelis-Menten parameters for elimination and distribution.
- **Figure 1**: Observed concentration-time data for S65487 across all dose levels
  - *Significance*: Visualizes the full PK dataset, showing the wide dose range and the sparse sampling at microdose levels.
- **Figure 2**: Simulated reduction in normalized Bcl2/Bim complex for different doses and schedules
  - *Significance*: Demonstrates the plateau effect above 300-800 mg, supporting dose optimization recommendations.
- **Figure 3A**: Dose-normalized AUC and individual parameter distributions showing nonlinearity
  - *Significance*: Provides model-independent evidence of nonlinear PK between microdose and therapeutic doses.
- **Figure 3B and 3C**: Goodness-of-fit plots for the PhI-II PK model at microdose and therapeutic doses
  - *Significance*: Shows the systematic overestimation of microdose concentrations by the linear model.
- **Figure 3D and 3E**: Goodness-of-fit plots for the MO PK model at microdose and therapeutic doses
  - *Significance*: Demonstrates the improved fit of microdose data with the Michaelis-Menten model.
- **Figure 4**: pAUC/oAUC ratio comparison between PhI-II PK and MO PK models
  - *Significance*: Quantifies the improvement in exposure prediction, showing reduction from 5-fold to 1.1-fold for microdose data.

---

### Code & Reproducibility Assessment
No code or data repositories are mentioned. The analysis was performed using Monolix 2023R1, RStudio, PKanalix, and Simulx, all commercial software. Reproducibility would require access to the proprietary datasets and software licenses.

---

### Supplementary Materials
Supporting Information S1-S11 are referenced but not provided in the main text. These include: S1 (study designs), S2 (covariate analysis details), S3 (PK/PD model structure), S4 (explanation of IIV), S5 (GOF and pcVPCs for PK/PD model), S6 (pcVPCs for MO PK model), S9 (further GOF for MO PK model), S10 (CYP3A4 inhibition models), S11 (interpretation of MM parameters). These supplementary materials are critical for fully understanding the model development process and should be consulted for a complete assessment.

---

### Future Directions
The study raises several important questions for future research. First, the structural confounding between dose and population (healthy volunteers vs. patients) should be addressed by conducting microdose studies in patients or therapeutic dose studies in healthy volunteers. Second, the Michaelis-Menten parameters ($V_{max}$, $K_m$) should be linked to physiological quantities such as target abundance, potentially through imaging techniques or biomarker measurements. Third, the extremely high IIV on $IC_{50}$ (1386.5% CV) warrants investigation into additional covariates or alternative PD models. Fourth, the hypothesis of CYP3A4 auto-inhibition could not be confirmed due to model instability; further in vitro or clinical studies could clarify this mechanism. Fifth, the model should be validated with external datasets, particularly at the plateau doses (300-800 mg) to confirm the predicted lack of additional benefit. Finally, the MO PK model framework could be applied to other small molecules with nonlinear PK to assess its generalizability.

---

### Expert Commentary
This paper represents a thoughtful and methodologically rigorous approach to a common but often underappreciated challenge in early drug development: reconciling microdose and therapeutic dose PK data. The authors' decision to use a Michaelis-Menten approximation rather than a full TMDD model is pragmatic and justified by the very slow dissociation of the Bcl2/S65487 complex. This is a valuable teaching point for pharmacometricians: sometimes a simpler mechanistic approximation can be more useful than a fully parameter-rich model, especially when data are sparse. The study effect on $IC_{50}$ is particularly interesting—the 5-fold difference between phase I (140 μg/L) and phase I/II (29.4 μg/L) likely reflects differences in prior treatment history rather than a direct drug-drug interaction with azacitidine. This underscores the importance of considering patient population heterogeneity in PD analyses. The extremely high IIV on $IC_{50}$ (1386.5% CV) is concerning and suggests that the model may not be capturing all relevant sources of variability. The use of pAUC/oAUC ratio as a model evaluation metric is innovative and practical, though it should be complemented by more traditional diagnostics like VPCs. The structural imbalance between healthy volunteers (microdose) and patients (therapeutic doses) is a significant limitation that the authors acknowledge but cannot fully resolve. Future studies should consider crossover designs or at least include a patient microdose cohort to disentangle dose and population effects.

---

### Bottom Line
This paper presents a comprehensive PK/PD model for the Bcl2 inhibitor S65487, demonstrating that a linear three-compartment PK model with an indirect response PD model adequately describes target engagement at therapeutic doses. The key innovation is the use of a Michaelis-Menten approximation of target-mediated drug disposition to reconcile microdose and therapeutic dose data, reducing the exposure prediction error from 5-fold to 1.1-fold. For practicing pharmacometricians, this work provides a valuable case study in handling nonlinear PK across dose ranges and highlights the potential of microdosing studies when combined with appropriate mechanistic modeling.

---