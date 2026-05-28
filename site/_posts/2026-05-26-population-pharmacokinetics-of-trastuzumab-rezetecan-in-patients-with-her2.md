---
layout: post
title: "Population Pharmacokinetics of Trastuzumab Rezetecan in Patients With HER2-Expressing or Mutated Advanced Solid Tumors"
date: 2026-05-26
authors: "Gao X, et al."
journal: "CPT Pharmacometrics Syst Pharmacol. 2026; e70259."
doi: "10.1002/psp4.70259"
paper_type: popk
tags: [popk, dose-response, covariate-analysis, oncology, clinical-trial-design]
excerpt_text: "This population PK analysis of trastuzumab rezetecan (SHR-A1811), a HER2-targeting ADC, characterizes intact ADC and released payload pharmacokinetics in 645 patients with advanced solid tumors. Covariate analysis found no clinically meaningful effects on exposure, supporting no dose adjustments for body weight, age, hepatic/renal function, or cancer type. Pharmacometricians and clinical pharmacologists involved in ADC development will find this model useful for exposure-response analyses and dose selection."
pdf_path: "/assets/digests/2026-05-26-population-pharmacokinetics-of-trastuzumab-rezetecan-in-patients-with-her2/PMx_Population_Pharmacokinetics_of_Trastuzum_20260526.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This population PK analysis of trastuzumab rezetecan (SHR-A1811), a HER2-targeting ADC, characterizes intact ADC and released payload pharmacokinetics in 645 patients with advanced solid tumors. Covariate analysis found no clinically meaningful effects on exposure, supporting no dose adjustments for body weight, age, hepatic/renal function, or cancer type. Pharmacometricians and clinical pharmacologists involved in ADC development will find this model useful for exposure-response analyses and dose selection.

---

### Executive Summary
This study presents the first population PK model for trastuzumab rezetecan, a novel HER2-targeting ADC with a topoisomerase I inhibitor payload. Using data from three phase I trials (645 patients, 18,671 samples), a two-analyte model was developed: a two-compartment linear model for intact ADC and a one-compartment model with first-order release for the payload. Covariate analysis identified statistically significant effects of body weight, tumor size, albumin, AST, age, and cancer type on PK parameters, but none resulted in clinically relevant changes in exposure (<20%). The model supports the approved 4.8 mg/kg every-3-weeks dosing regimen without need for dose adjustments based on these covariates. This work provides a robust framework for future exposure-response analyses and dose selection in ongoing clinical trials across multiple HER2-expressing tumor types.

---

### Scientific Context & Motivation
Trastuzumab rezetecan is a third-generation HER2-targeting ADC with a novel enzyme-cleavable linker and a high drug-to-antibody ratio (~6). Prior to this analysis, no population PK model had been published for this ADC. Understanding the PK of both intact ADC and released payload is critical for dose optimization, especially given the payload's bystander killing effect and potential for off-target toxicity. This study fills the gap by characterizing the PK in a large, diverse patient population and evaluating the impact of intrinsic and extrinsic factors on exposure.

---

## ⚡ Methodological Snapshot
A two-step sequential population PK analysis was performed using NONMEM 7.5.1 with FOCE-I. First, the intact ADC model was developed; then payload parameters were estimated with ADC parameters fixed. The final model was selected based on OFV, diagnostic plots, and physiological plausibility. Covariate analysis used stepwise forward inclusion (p<0.01) and backward deletion (p<0.001). Model evaluation included bootstrap (200 replicates) and prediction-corrected VPC.

---

## 🏗️ Structural Model Breakdown
The intact ADC model is a two-compartment model with first-order elimination ($CL$) and intercompartmental clearance ($Q$). Central volume $V_1$, peripheral volume $V_2$. The payload model is a one-compartment model with first-order release rate ($RAT$) from the ADC central compartment and linear elimination ($CL_3$). Payload volume of distribution $V_3$ was fixed to 30 L. The release rate constant was modeled with covariates, and distinct rates for cycle 1 vs later cycles were considered but not retained in the final model. The payload formation is formation-limited, meaning payload PK is driven by ADC elimination.

---

### Detailed Methodological Analysis

#### Modeling Approach
Two-analyte PopPK model: intact ADC described by a two-compartment model with linear elimination; released payload described by a one-compartment model with first-order release from ADC and linear elimination. Covariate effects were modeled as power functions for continuous covariates and proportional shifts for categorical covariates. IIV was modeled exponentially. Residual error included proportional and additive components for ADC, proportional only for payload.

#### Data Sources
Data from three phase I trials (SHR-A1811-I-101, -102, -103) in patients with HER2-expressing or mutated advanced solid tumors. 645 patients, 18,671 concentration records (9421 ADC, 9250 payload). Doses ranged from 1.0 to 8.0 mg/kg every 3 weeks. Rich sampling in cycle 1 and sparse sampling thereafter.

#### Estimation Methods
NONMEM 7.5.1 with FOCE-I. Two-step sequential approach: first ADC model, then payload model with ADC parameters fixed. One-step approach also tested but not used due to longer run times.

#### Model Evaluation
Goodness-of-fit plots, prediction-corrected VPC, nonparametric bootstrap (200 replicates). Parameter precision assessed via RSE and bootstrap 95% CI.

#### Covariate Analysis
Stepwise forward inclusion (ΔOFV >6.63, p<0.01) and backward deletion (ΔOFV <10.8, p<0.001). Covariates tested: body weight, age, sex, race, albumin, AST, ALT, bilirubin, creatinine clearance, tumor type, tumor size, hepatic/renal function, formulation. Final covariates: body weight, tumor size, albumin, AST, age, cancer type.

---

### Statistical Rigor Assessment
The analysis uses appropriate methods for PopPK model building. The large sample size (645 patients) and rich sampling provide robust parameter estimates. The stepwise covariate selection is standard, though more advanced methods (e.g., full model approach) could reduce selection bias. The bootstrap and VPC confirm model stability. However, the two-step approach may underestimate parameter uncertainty due to fixing ADC parameters. The underprediction of high payload concentrations suggests model misspecification that could affect exposure-response analyses. Shrinkage for some parameters (e.g., $Q$, $V_2$) was moderate (21-56%), which may limit individual predictions.

---

## 📊 Key Findings
The intact ADC followed a two-compartment model with linear elimination ($CL = 0.360$ L/day, $V_1 = 2.86$ L). The released payload exhibited formation-limited kinetics, described by a one-compartment model with first-order release ($RAT = 0.814$ day$^{-1}$) and linear elimination ($CL_3 = 392$ L/day). Statistically significant covariates included body weight, tumor size, albumin, AST, age, and cancer type, but their effects on steady-state $AUC$, $C_{max}$, and $C_{min}$ were all within 80–125% of the typical patient. No clinically relevant differences were observed across hepatic/renal function categories, race, sex, or formulation. The model adequately predicted observed concentrations, with good precision (RSE <32%) and acceptable shrinkage.

---

## 💡 Clinical & Regulatory Implications
The model supports the approved 4.8 mg/kg every-3-weeks dosing regimen without dose adjustments for body weight, age, hepatic/renal function, or cancer type. The lack of clinically significant covariate effects simplifies clinical use. The model can be used to simulate exposures for exposure-response analyses to support dose selection in ongoing trials. However, caution is advised when interpreting payload $C_{max}$ predictions due to underprediction at high concentrations.

---

### Strengths & Limitations

#### Strengths
- Large sample size (645 patients) and rich PK sampling (18,671 samples) provide robust parameter estimates.
- Rigorous stepwise covariate analysis with forward inclusion and backward deletion.
- Model evaluation using bootstrap (200 replicates) and prediction-corrected VPC.
- Comparison of one-step vs two-step modeling approaches to assess bias.
- Comprehensive assessment of intrinsic and extrinsic factors on exposure.

#### Limitations (Acknowledged by Authors)
- Limited data at low doses (1-2 mg/kg) precluded characterization of target-mediated drug disposition (TMDD).
- Slight underprediction of high payload concentrations may affect exposure-response analyses.
- Time-varying release rate not fully mechanistically modeled due to limited longitudinal tumor-size data.
- Two-step approach may not capture feedback between ADC and payload.

#### Limitations (Expert Review)
- The two-step approach may underestimate parameter uncertainty due to fixing ADC parameters.
- Payload model underprediction at high concentrations could bias safety analyses involving $C_{max}$.
- Model developed using phase I data only; generalizability to later-stage patients or other tumor types requires further validation.
- Covariate analysis did not include pharmacogenetic factors or immunogenicity data.
- Shrinkage for some parameters (e.g., $Q$, $V_2$) was moderate (21-56%), limiting individual predictions.

#### Generalizability
The model is generalizable to adult patients with HER2-expressing or mutated advanced solid tumors, but caution is needed for patients with severe hepatic/renal impairment (excluded from trials) and for tumor types not well represented (e.g., colorectal cancer). External validation in independent cohorts is recommended.

---

### Key Equations

**Intact ADC Two-Compartment Model**

{% raw %}
$$
\frac{dA_c}{dt} = -\left(\frac{CL}{V_1} + \frac{Q}{V_1}\right) \cdot A_c + \frac{Q}{V_2} \cdot A_p \\ \frac{dA_p}{dt} = \frac{Q}{V_1} \cdot A_c - \frac{Q}{V_2} \cdot A_p
$$
{% endraw %}

Two-compartment model with linear elimination for intact ADC. A_c and A_p are amounts in central and peripheral compartments.

**Released Payload One-Compartment Model**

{% raw %}
$$
\frac{dA_{\text{tox}}}{dt} = RAT \cdot A_c - \frac{CL_3}{V_3} \cdot A_{\text{tox}}
$$
{% endraw %}

One-compartment model for released payload with first-order release from ADC central compartment and linear elimination.

**Clearance Covariate Model**

{% raw %}
$$
CL = 0.360 \cdot \left(\frac{WT}{70}\right)^{0.525} \cdot \left(\frac{SOD_B}{\text{median}_{SOD}}\right)^{0.0686} \cdot e^{\eta_{CL}}
$$
{% endraw %}

Covariate model for intact ADC clearance, including body weight and baseline tumor size.

**Central Volume Covariate Model**

{% raw %}
$$
V_1 = 2.86 \cdot \left(\frac{WT}{70}\right)^{0.544} \cdot \left(\frac{AGE}{\text{median}_{AGE}}\right)^{0.198} \cdot \left(\frac{ALB}{\text{median}_{ALB}}\right)^{-0.363} \cdot e^{\eta_{V_1}}
$$
{% endraw %}

Covariate model for central volume of intact ADC, including body weight, age, and albumin.

**Release Rate Constant Covariate Model**

{% raw %}
$$
RAT = 0.814 \cdot \left(\frac{WT}{70}\right)^{-0.546} \cdot \left(\frac{SOD_B}{\text{median}_{SOD}}\right)^{0.100} \cdot e^{\theta_{CT}} \cdot e^{\eta_{RAT}}
$$
{% endraw %}

Covariate model for payload release rate constant, including body weight, tumor size, and cancer type effects (θ_CT = 0.0562 for breast, -0.129 for gastric/GEJ, 0.0464 for other).

**Payload Clearance Covariate Model**

{% raw %}
$$
CL_3 = 392 \cdot \left(\frac{AST}{\text{median}_{AST}}\right)^{-0.167} \cdot e^{\eta_{CL_3}}
$$
{% endraw %}

Covariate model for payload clearance, including AST.

**Payload Volume Covariate Model**

{% raw %}
$$
V_3 = 30.0 \cdot \left(\frac{AGE}{\text{median}_{AGE}}\right)^{0.420} \cdot e^{\eta_{V_3}}
$$
{% endraw %}

Covariate model for payload volume of distribution, including age.

---

### Figures & Tables

- **Figure 1**: Mean pharmacokinetic profiles by study and dose for intact ADC and released payload after first administration.
  - *Significance*: Shows biphasic ADC decline and payload formation/elimination, supporting model structure.
- **Figure 2**: Schematic of the two-analyte PopPK model structure.
  - *Significance*: Illustrates the two-compartment ADC model and one-compartment payload model with first-order release.
- **Figure 3**: Goodness-of-fit plots for final intact ADC (A) and released payload (B) models.
  - *Significance*: Demonstrates acceptable model fit, though slight underprediction at high payload concentrations.
- **Figure 4**: Prediction-corrected visual predictive checks for final ADC (A) and payload (B) models.
  - *Significance*: Confirms model's predictive performance across dose levels and time.
- **Figure 5**: Forest plot of covariate effects on intact ADC steady-state exposures (AUC, Cmax, Cmin).
  - *Significance*: Shows that no covariate effect exceeds 20% change, supporting no dose adjustment.
- **Figure 6**: Forest plot of covariate effects on released payload steady-state exposures.
  - *Significance*: Similar to Figure 5, confirming lack of clinically relevant covariate effects.
- **Table 1**: Final population PK parameter estimates and bootstrap results for intact ADC and released payload.
  - *Significance*: Provides key parameter values and demonstrates model stability via bootstrap 95% CIs.

---

### Future Directions
Future work should incorporate data from ongoing phase II/III trials to refine the payload model, particularly at high concentrations, and to explore time-varying release mechanisms linked to tumor dynamics. Pharmacogenetic and immunogenicity data could further explain IIV. A fully simultaneous one-step model with TMDD may be explored if lower-dose data become available. External validation in independent patient cohorts is recommended.

---

### Expert Commentary
This analysis is a solid example of ADC PopPK modeling, balancing model complexity with practical utility. The authors' decision to use a two-step approach is pragmatic given the formation-limited kinetics, but the underprediction of payload $C_{max}$ is a notable limitation that could impact exposure-safety analyses. The covariate analysis is thorough, though the clinical relevance threshold of 20% may be conservative; some covariates (e.g., AST) approached this boundary. The model's application to support dose selection in NSCLC and other indications is appropriate, but confirmatory exposure-response analyses should be conducted. Overall, this work sets a strong foundation for the clinical pharmacology package of trastuzumab rezetecan.

---

### Bottom Line
For practicing pharmacometricians, this PopPK model provides a well-validated tool for simulating trastuzumab rezetecan and payload exposures in diverse patient populations. The lack of clinically significant covariate effects simplifies dosing and supports the current weight-based regimen. However, the underprediction of high payload concentrations warrants caution when using the model for safety analyses involving $C_{max}$. The model can be leveraged for exposure-response analyses to support dose selection in ongoing trials.

---

---

## 📊 Figures

![The mean pharmacokinetic profiles by study and dose derived from rich sampling after the first administration for the intact ADC (left panels—A, C and E) and rel]({{ site.baseurl }}/assets/digests/2026-05-26-population-pharmacokinetics-of-trastuzumab-rezetecan-in-patients-with-her2/figures/fig_01.jpg)

![The population pharmacokinetic model structure of the intact ADC. CL, intact ADC clearance; Q, inter-compartment clearance; and V1 and V2 for central and periphe]({{ site.baseurl }}/assets/digests/2026-05-26-population-pharmacokinetics-of-trastuzumab-rezetecan-in-patients-with-her2/figures/fig_02.jpg)

![Goodness of fit of the final (A) intact Trastuzumab Rezetecan model and (B) final released payload model. The blue circles represent observations, the gray line]({{ site.baseurl }}/assets/digests/2026-05-26-population-pharmacokinetics-of-trastuzumab-rezetecan-in-patients-with-her2/figures/fig_03.jpg)

![Visual predictive check plots for the final model: (A) intact Trastuzumab Rezetecan and (B) released toxin rezetecan. The black dashed lines from top to bottom r]({{ site.baseurl }}/assets/digests/2026-05-26-population-pharmacokinetics-of-trastuzumab-rezetecan-in-patients-with-her2/figures/fig_04.jpg)

![Forest plot of covariate effects on intact Trastuzumab Rezetecan exposure. The solid vertical line corresponds to a ratio of 1 and represents the typical patient]({{ site.baseurl }}/assets/digests/2026-05-26-population-pharmacokinetics-of-trastuzumab-rezetecan-in-patients-with-her2/figures/fig_05.jpg)

![Forest plot of covariate effects on released payload rezetecan exposures. The solid vertical line corresponds to a ratio of 1 and represents the typical patient.]({{ site.baseurl }}/assets/digests/2026-05-26-population-pharmacokinetics-of-trastuzumab-rezetecan-in-patients-with-her2/figures/fig_06.jpg)