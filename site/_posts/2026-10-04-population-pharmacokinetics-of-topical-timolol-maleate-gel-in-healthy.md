---
layout: post
title: "Population Pharmacokinetics of Topical Timolol Maleate Gel in Healthy Volunteers and Infants With Superficial Infantile Hemangioma"
date: 2026-10-04
authors: "Li Li, Yanming Li, Fan Hu, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, vol. 15, no. 10, pp. e70334"
doi: "10.1002/psp4.70334"
paper_type: popk
tags: [popk]
excerpt_text: "This paper presents the first popPK model for a commercial topical timolol gel in infants with superficial hemangioma, showing that systemic exposure is ~200–250-fold higher in infants than adults but remains below safety thresholds. Clinicians and regulators should note the lack of covariates affecting clearance and the absence of exposure–safety relationships, supporting the formulation's favorable safety profile."
pdf_path: "/assets/digests/2026-10-04-population-pharmacokinetics-of-topical-timolol-maleate-gel-in-healthy/PMx_Population_Pharmacokinetics_of_Topical_T_20261004.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents the first popPK model for a commercial topical timolol gel in infants with superficial hemangioma, showing that systemic exposure is ~200–250-fold higher in infants than adults but remains below safety thresholds. Clinicians and regulators should note the lack of covariates affecting clearance and the absence of exposure–safety relationships, supporting the formulation's favorable safety profile.

---

### Executive Summary
This study presents the first population pharmacokinetic (popPK) model for a commercially manufactured topical timolol maleate gel developed specifically for superficial infantile hemangioma (IH). Integrating data from Phase I–III trials (24 healthy adults, 114 infants; 810 plasma concentrations), a one-compartment model with first-order absorption and elimination adequately described timolol PK. Allometric scaling on clearance (exponent 0.75) and volume (exponent 1) was used, and relative bioavailability was estimated to be 202–252-fold higher in infants than adults, reflecting enhanced skin permeability and lesion vascularity. No covariates significantly influenced clearance. Model-predicted steady-state peak concentrations in Phase III infants (median 4.62 ng/mL) were below literature-derived safety thresholds (212 ng/mL) in 98.7% of patients, and exploratory exposure–safety analyses found no associations with adverse events, including cardiac disorders. The findings support the favorable systemic safety profile of this topical formulation and provide quantitative guidance for its rational use.

---

### Scientific Context & Motivation
Infantile hemangioma (IH) is the most common benign vascular tumor in infants, and topical timolol has been used off-label despite lack of a dedicated formulation. Systemic absorption in infants is a concern due to immature skin barrier and high surface-area-to-weight ratio. This study addresses the gap by developing a popPK model for a newly approved topical timolol gel, quantifying systemic exposure and exploring covariates and exposure–safety relationships. It provides the first quantitative framework for rational dosing and safety assessment in this vulnerable population.

---

## ⚡ Methodological Snapshot
A population PK model was developed using pooled data from Phase I–III trials. The final model was a one-compartment model with first-order absorption and elimination, allometric weight scaling, and relative bioavailability factors for infants. Model evaluation included bootstrap and VPCs. Exposure–safety analyses were exploratory, using ANOVA and graphical comparisons across exposure strata.

---

### Detailed Methodological Analysis

#### Modeling Approach
One-compartment structural model with first-order absorption and elimination. Allometric scaling on CL (exponent 0.75) and Vc (exponent 1) with reference weight 60 kg. Relative bioavailability (F1) estimated for infant populations relative to adults (fixed to 1). Alternative absorption models (zero-order, sequential zero-first-order, transit compartments) and two-compartment models were tested but did not improve fit or stability.

#### Data Sources
Data from three clinical trials: Phase I in healthy adults (CTR20191402), Phase Ib/II in infants with proliferative superficial IH (CTR20202613), and Phase III randomized double-blind placebo-controlled trial (CTR20221992). Dosing regimens varied (once to six times daily) with nominal dose ~3 mg/cm². PK samples were dried blood spots (DBS) analyzed by LC-MS/MS (LLOQ 0.05 ng/mL). Final dataset: 478 concentrations from 24 adults, 332 from 114 infants.

#### Estimation Methods
Nonlinear mixed-effects modeling using NONMEM 7.5.0 with first-order conditional estimation with interaction (FOCE-I). Interindividual variability on CL/F was exponential; residual variability was proportional. Bootstrap (1000 replicates) and VPC (1000 simulations) were used for evaluation.

#### Model Evaluation
Goodness-of-fit plots, nonparametric bootstrap (99.9% minimization success), and visual predictive checks (VPCs) stratified by study population and dosing regimen. Bootstrap medians and 95% CIs overlapped with final estimates. VPCs showed adequate coverage of observed data.

#### Covariate Analysis
Covariates evaluated included age, sex, baseline albumin, ALT, AST, total bilirubin, creatinine clearance, hemangioma thickness, and hemangioma surface area. Screening used scatterplots of individual random effects vs covariates with p<0.01 for formal testing, followed by stepwise forward addition (α<0.01) and backward elimination (α<0.001). No covariates met the criteria, so the base model was retained.

---

### Statistical Rigor Assessment
The analysis used a robust nonlinear mixed-effects approach with FOCE-I, bootstrap validation (99.9% success), and VPCs. The dataset included sparse sampling typical of pediatric trials, and BQL handling was appropriate (M3/M6). Covariate screening was conservative (p<0.01 forward, p<0.001 backward). Exposure–safety analyses were exploratory with ANOVA, but lacked adjustment for confounders and multiple testing. The high IIV on CL (139.6%) indicates substantial unexplained variability, and the model's population predictions showed some bias, though individual fits were adequate. Sensitivity analyses using observed Cmax supported the ER conclusions.

---

## 📊 Key Findings
The final popPK model was a one-compartment model with first-order absorption and elimination. CL/F was 3030 × 10^3 L/h (RSE 39.4%), Vc/F 22,100 × 10^3 L (RSE 21.3%), Ka 0.01 h⁻¹ (RSE 4.3%). Relative bioavailability was 252-fold (Phase Ib/II) and 202-fold (Phase III) higher in infants than adults. IIV on CL/F was 139.6%, and residual variability (proportional) was 49.0%. No covariates (age, sex, hepatic/renal function, lesion characteristics) significantly affected CL/F. In Phase III infants, median Bayesian-estimated Cmax,ss was 4.62 ng/mL (range 0.234–248), with 98.7% below the literature-derived safety threshold of 212 ng/mL. Exploratory exposure–safety analyses found no significant associations between exposure metrics (Cmax,ss, Cmin,ss, AUCτ,ss) and TEAEs, ADRs, cardiac disorders, or specific adverse events. The incidence of bronchitis and cardiac events was numerically higher in the high-exposure group but comparable to placebo, and all events were mild/moderate.

---

## 💡 Clinical & Regulatory Implications
The model supports the NMPA-approved 0.5% timolol maleate gel (three times daily) for superficial infantile hemangioma. Systemic exposure in infants is markedly higher than in adults but remains below safety thresholds, and no dose adjustments are needed based on age, sex, weight, or lesion characteristics. The absence of exposure–safety relationships for cardiac and other adverse events provides reassurance for routine clinical use, though the exploratory nature of the ER analyses warrants continued pharmacovigilance.

---

### Strengths & Limitations

#### Strengths
- First popPK model for a commercial topical timolol gel in infants with IH.
- Integration of data from Phase I–III trials, covering a wide range of dosing regimens and ages.
- Rigorous model evaluation with bootstrap and VPCs, and sensitivity analyses for exposure–response.
- Use of a validated LC-MS/MS method for DBS samples with low LLOQ (0.05 ng/mL).
- Exploration of multiple structural and absorption models, with clear justification for the final choice.
- Clinically relevant comparison of systemic exposure to literature-derived safety thresholds.

#### Limitations (Acknowledged by Authors)
- Sparse PK sampling limited accurate characterization of peak concentrations, leading to some bias in population predictions.
- Exposure–response analyses were exploratory, without adjustment for confounding factors.
- Literature-derived safety thresholds are not validated systemic safety limits for topical timolol in infants.
- The model could not reliably estimate IIV on absorption or volume parameters.

#### Limitations (Expert Review)
- The high relative bioavailability in infants (202–252-fold) may be partly confounded by differences in application area and dose per body weight; the model assumes a fixed dose per cm², but actual applied dose may vary.
- The one-compartment model with first-order absorption may not fully capture the slow absorption phase; the terminal half-life is likely absorption-limited, and the model may overestimate elimination clearance.
- No covariate effects were found, but the small sample size and limited covariate ranges (e.g., age 2–6 months) reduce power to detect clinically relevant relationships.
- The exposure–safety analysis used only Phase III data (n=79), which may be underpowered to detect rare cardiac events.
- DBS sampling may introduce additional variability compared to plasma sampling, though the assay was validated.

#### Generalizability
The model is based on a relatively small infant population (n=114) from three trials, with limited preterm representation (gestational age down to 29 weeks). Findings may not generalize to older children, larger hemangiomas, or different formulations. The exposure–safety results are exploratory and require confirmation in larger, real-world cohorts.

---

### Key Equations

**Clearance allometric scaling**

{% raw %}
$$
CL = CL_{TV} \times \left(\frac{WT}{60}\right)^{0.75}
$$
{% endraw %}

Allometric scaling of apparent clearance based on body weight, with a fixed exponent of 0.75 and reference weight of 60 kg.

**Volume allometric scaling**

{% raw %}
$$
V_c = V_{c,TV} \times \left(\frac{WT}{60}\right)
$$
{% endraw %}

Allometric scaling of apparent central volume of distribution with a fixed exponent of 1.

**Absorption compartment**

{% raw %}
$$
\frac{dA_a}{dt} = -k_a \cdot A_a
$$
{% endraw %}

Differential equation for the absorption compartment (first-order absorption).

**Central compartment**

{% raw %}
$$
\frac{dA_c}{dt} = k_a \cdot A_a - \frac{CL}{V_c} \cdot A_c
$$
{% endraw %}

Differential equation for the central compartment (one-compartment model with first-order elimination).

**Concentration equation**

{% raw %}
$$
C = \frac{A_c}{V_c}
$$
{% endraw %}

Plasma concentration as a function of central compartment amount and volume.

---

### Figures & Tables

- **Figure 1**: Goodness-of-fit diagnostics: observed vs population-predicted and individual-predicted concentrations, conditional weighted residuals vs time and predictions.
  - *Significance*: Demonstrates adequate model fit, with some bias in population predictions due to sparse sampling and a few high concentrations, but acceptable individual-level fits.
- **Figure 2**: Visual predictive check (VPC) stratified by study population and dosing regimen, showing observed median and 5th/95th percentiles against model predictions.
  - *Significance*: Confirms the model's predictive performance across healthy adults and infants, with prediction intervals covering observed data.
- **Table 1**: Final model parameter estimates with RSEs, bootstrap medians and 95% CIs, including CL/F, Vc/F, Ka, relative bioavailability factors, IIV, and residual variability.
  - *Significance*: Provides the quantitative basis for the model, showing high IIV on CL (139.6%) and precise estimates of Ka and relative bioavailability.
- **Supplementary Materials**: Supplementary tables S1–S7 and figures S1–S7, including dosing regimens, data cleaning steps, demographics, covariate plots, exposure–safety boxplots, and sensitivity analyses.
  - *Significance*: Support the main findings and provide additional detail on study design, covariate screening, and robustness of exposure–response conclusions.

---

### Code & Reproducibility Assessment
No code or data sharing is mentioned. The analysis used NONMEM 7.5.0 and R 4.2.0, but model code and datasets are not publicly available.

---

### Supplementary Materials
Supplementary materials include Table S1 (dosing regimens), Table S2 (data cleaning steps), Tables S3–S4 (demographics), Table S5 (adverse events by exposure group), Table S6 (detailed adverse events), Table S7 (subject with Cmax,ss >212 ng/mL), Figures S1–S7 (concentration-time profiles, covariate plots, GOF stratified, exposure-safety boxplots, sensitivity analyses). These provide additional detail supporting the main findings.

---

### Future Directions
Future studies should validate the popPK model in larger, more diverse infant populations, including preterm infants and those with larger or ulcerated hemangiomas. Prospective evaluation of exposure–safety relationships with continuous cardiac monitoring and longer follow-up would strengthen the evidence. Physiologically based pharmacokinetic (PBPK) modeling could further elucidate age-dependent skin permeability and lesion blood flow contributions. Additionally, the model could be extended to support dose optimization for special populations (e.g., low birth weight infants) and to inform regulatory decisions for other topical β-blockers.

---

### Expert Commentary

---

### Bottom Line
This first popPK model for a commercially manufactured topical timolol maleate gel demonstrates that, despite ~200–250-fold higher systemic absorption in infants than adults, steady-state peak concentrations remain below literature-derived safety thresholds in >98% of infants. No clinically relevant covariates or exposure–safety relationships were identified, supporting the favorable systemic safety profile of this formulation for superficial infantile hemangioma under the approved three-times-daily regimen.

---

---

## 📊 Figures

![Goodness-of-fit (GOF) diagnostics for the final population pharmacokinetic model of topical timolol maleate gel. (A) Observed versus population-predicted concent]({{ site.baseurl }}/assets/digests/2026-10-04-population-pharmacokinetics-of-topical-timolol-maleate-gel-in-healthy/figures/fig_01.png)

![Visual predictive check of the final popPK model. (A) Healthy adults, twice daily dosing; (B) Healthy adults, four times daily dosing; (C) Healthy adults, six ti]({{ site.baseurl }}/assets/digests/2026-10-04-population-pharmacokinetics-of-topical-timolol-maleate-gel-in-healthy/figures/fig_02.jpg)