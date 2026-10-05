---
layout: post
title: "Population Pharmacokinetics of Dolutegravir in Plasma and Cerebrospinal Fluid in Adults Living With HIV"
date: 2026-10-05
authors: "Ali MW, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70345"
paper_type: popk
tags: [popk]
excerpt_text: "This paper presents a population PK model for dolutegravir in plasma and CSF, revealing rapid equilibration (half-life 1.82 h) and low steady-state CSF penetration (0.15%) in a predominantly overweight/obese African cohort. The inverse correlation between BMI and exposure suggests that obesity-related increases in clearance may reduce CNS drug concentrations, though CSF levels remain above the protein-adjusted IC50. The effect-compartment framework offers a reproducible method for characterizing CNS penetration, but the high proportion of BLQ CSF samples and lack of IIV on KE0 limit individual-level inferences."
pdf_path: "/assets/digests/2026-10-05-population-pharmacokinetics-of-dolutegravir-in-plasma-and-cerebrospinal-fluid/PMx_Population_Pharmacokinetics_of_Dolutegra_20261005.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a population PK model for dolutegravir in plasma and CSF, revealing rapid equilibration (half-life 1.82 h) and low steady-state CSF penetration (0.15%) in a predominantly overweight/obese African cohort. The inverse correlation between BMI and exposure suggests that obesity-related increases in clearance may reduce CNS drug concentrations, though CSF levels remain above the protein-adjusted IC50. The effect-compartment framework offers a reproducible method for characterizing CNS penetration, but the high proportion of BLQ CSF samples and lack of IIV on KE0 limit individual-level inferences.

---

### Executive Summary
This study characterizes dolutegravir (DTG) pharmacokinetics in plasma and cerebrospinal fluid (CSF) using a population PK approach in 121 treatment-experienced adults (predominantly overweight/obese, BMI 32.2±8.7 kg/m²) from South Africa. A one-compartment model with first-order absorption and allometric scaling described plasma DTG, with apparent clearance of 1.38 L/h/70 kg and smoking as a significant covariate. CSF data were modeled using a sequential effect-compartment approach, yielding a plasma-to-CSF equilibration rate constant (KE0) of 0.38 h⁻¹ (half-life 1.82 h) and a CSF-to-plasma pseudo-partition coefficient (PPC) of 0.0015 (0.15% penetration). The model revealed rapid equilibration and low steady-state CSF penetration, with an inverse correlation between BMI and plasma AUC (r = −0.34). The study highlights the importance of population-specific PK characterization and provides a reproducible framework for assessing CNS drug penetration.

---

### Scientific Context & Motivation
Dolutegravir is a preferred antiretroviral with known low CNS penetration, but previous estimates were based on single-timepoint ratios or models without explicit equilibration kinetics. This study addresses the gap by using an effect-compartment model to estimate the plasma-to-CSF equilibration rate constant and pseudo-partition coefficient in a population with high BMI, which is underrepresented in PK studies. The findings challenge previous penetration estimates and highlight the impact of body composition on drug exposure.

---

## ⚡ Methodological Snapshot
A sequential population PK modeling approach was used. Plasma DTG was modeled with a one-compartment model with first-order absorption and allometric scaling. CSF data were then linked via an effect-compartment model to estimate the equilibration rate constant (KE0) and pseudo-partition coefficient (PPC). The model was developed in NONMEM using FOCEI, with model evaluation via pcVPCs and goodness-of-fit diagnostics.

---

## 🏗️ Structural Model Breakdown
Plasma model: one-compartment with first-order absorption and lag time. Parameters: CL/F, V/F, Ka, Tlag. Allometric scaling on CL/F (exponent 0.75) and V/F (exponent 1.0). Smoking covariate on CL/F. CSF model: hypothetical effect compartment linked to plasma, with first-order equilibration rate constant KE0 and pseudo-partition coefficient PPC. The CSF compartment has negligible volume, so it does not affect plasma PK. The differential equation for CSF concentration is dC_CSF/dt = KE0*($C_{plasma}$ - C_CSF/PPC).

---

### Detailed Methodological Analysis

#### Modeling Approach
Plasma DTG was described by a one-compartment model with first-order absorption and lag time (Tlag and Ka fixed to literature values). Allometric scaling was applied to CL/F and V/F. CSF data were modeled using a hypothetical effect compartment linked to plasma, estimating KE0 and PPC. BLQ data were handled using the M1 method (treated as missing) after M3/M4/M5 failed to converge.

#### Data Sources
Sparse PK samples from 121 ART-experienced adults (98 with paired CSF samples) from the CONNECT study in Cape Town, South Africa. Participants were predominantly female (78.5%) and overweight/obese (mean BMI 32.2 kg/m²). Plasma and CSF samples were collected at a single timepoint per participant, with median plasma sampling time 2.5 h post-dose. DTG concentrations were measured by LC-MS/MS.

#### Estimation Methods
Nonlinear mixed-effects modeling in NONMEM 7.5 using first-order conditional estimation with interaction (FOCEI). A sequential two-step approach was used: first, plasma PK parameters were estimated; then, CSF parameters were estimated with individual plasma parameters fixed to EBEs.

#### Model Evaluation
Goodness-of-fit plots (observed vs. predicted, CWRES vs. time and PRED) and prediction-corrected visual predictive checks (pcVPC) were used. For plasma, 8.15% of observations fell outside the 90% prediction interval; for CSF, 13.6% (acceptable given n=22).

#### Covariate Analysis
Covariates tested included body weight (allometric scaling), age, sex, and smoking status on CL/F and V/F. Only smoking on CL/F was retained (ΔOFV = −7.02, p < 0.01). Allometric scaling with weight was retained based on biological plausibility and improved information criteria, though the OFV reduction was not statistically significant (ΔOFV = −3.34).

---

### Statistical Rigor Assessment
The model was developed using standard NONMEM procedures with FOCEI. Parameter precision was acceptable (RSE < 50% for most parameters), and pcVPCs indicated adequate model performance. However, the high proportion of BLQ CSF samples (77.6%) and the use of M1 method (treating BLQ as missing) may introduce bias. The lack of IIV on KE0 and PPC is a simplification due to sparse data. No formal sensitivity analysis or external validation was performed.

---

## 📊 Key Findings
The final model estimated apparent oral clearance (CL/F) of 1.38 L/h/70 kg and volume of distribution (V/F) of 30.8 L. Smoking increased CL/F by 62.5%. The CSF model yielded a plasma-to-CSF equilibration rate constant (KE0) of 0.38 h⁻¹ (half-life 1.82 h) and a CSF-to-plasma pseudo-partition coefficient (PPC) of 0.0015, indicating 0.15% CSF penetration. Post hoc AUC0-24 showed a moderate inverse correlation with BMI (r = −0.34). The median CSF concentration (2.26 ng/mL) was above the protein-adjusted IC50 (0.21 ng/mL) for wild-type HIV, suggesting therapeutic adequacy despite low penetration.

---

## 💡 Clinical & Regulatory Implications
The findings suggest that overweight/obese individuals may have lower dolutegravir exposure, potentially warranting population-specific dosing considerations. However, CSF concentrations remain above the protein-adjusted IC50 for wild-type HIV, supporting therapeutic adequacy. The rapid equilibration half-life implies that CSF concentrations closely track plasma fluctuations, so individuals with subtherapeutic troughs (e.g., due to drug interactions) may be at risk for inadequate CNS exposure. The model framework can inform clinical trial design for CNS-penetrant antiretrovirals.

---

### Strengths & Limitations

#### Strengths
- First study to characterize DTG-specific equilibration kinetics using an effect-compartment model in a predominantly overweight/obese population.
- Sequential modeling approach is pragmatic and stable given sparse CSF data.
- Provides a reproducible framework for estimating CNS penetration parameters that can be applied to other antiretrovirals.
- Includes a comprehensive comparison with previous DTG PK models (Table 4).
- Demonstrates that CSF concentrations remain above the protein-adjusted IC50 despite low penetration, supporting therapeutic adequacy.

#### Limitations (Acknowledged by Authors)
- Sparse PK sampling design limits precision of individual parameter estimates and intraindividual variability.
- High proportion of CSF samples (77.6%) were BLQ, and M1 method (treating BLQ as missing) may introduce upward bias in PPC and KE0.
- No pharmacogenetic analysis to explain IIV in DTG PK.
- Unbound plasma concentrations were not measured, limiting mechanistic interpretation of blood-brain barrier penetration.
- Cross-sectional design prevents assessment of temporal changes in CSF penetration.
- No formal sensitivity analysis or external validation due to limited paired plasma-CSF data.

#### Limitations (Expert Review)
- The effect-compartment model assumes a negligible CSF volume and does not account for explicit CSF turnover or separate influx/efflux constants, which may oversimplify CNS disposition.
- The lack of IIV on KE0 and PPC prevents assessment of inter-individual variability in CNS penetration, which could be clinically relevant.
- The use of fixed literature values for Tlag and Ka may not be appropriate for this population, potentially affecting parameter estimates.
- The inverse correlation between BMI and AUC (r = −0.34) is moderate and may be confounded by other factors not explored.
- The model does not account for potential circadian or food effects on absorption.

#### Generalizability
The findings are specific to a predominantly overweight/obese, female, African population, which may limit generalizability to leaner or more diverse cohorts. The low CSF penetration estimate (0.15%) is lower than previous studies, possibly due to population differences and methodological differences. The model framework is generalizable, but parameter estimates may not apply to other populations.

---

### Key Equations

**Allometric scaling for clearance**

{% raw %}
$$
CL/F = TVCL \times \left(\frac{WT}{70}\right)^{0.75}
$$
{% endraw %}

Allometric scaling of apparent clearance and volume of distribution with total body weight normalized to 70 kg.

**Allometric scaling for volume**

{% raw %}
$$
V/F = TVV \times \left(\frac{WT}{70}\right)^{1.0}
$$
{% endraw %}

Allometric scaling of apparent volume of distribution with total body weight normalized to 70 kg.

**CSF effect-compartment equation**

{% raw %}
$$
\frac{dC_{CSF}}{dt} = KE0 \times \left( C_{plasma} - \frac{C_{CSF}}{PPC} \right)
$$
{% endraw %}

Effect-compartment model describing the rate of change of CSF concentration, where KE0 is the equilibration rate constant and PPC is the pseudo-partition coefficient.

**Equilibration half-life**

{% raw %}
$$
t_{1/2,eq} = \frac{\ln(2)}{KE0}
$$
{% endraw %}

Equilibration half-life calculated from the first-order rate constant KE0.

---

### Figures & Tables

- **Figure 1**: Sparse concentration-time plots of DTG in plasma and CSF, showing sampling predominantly within 5 h post-dose and the lower limit of quantification.
  - *Significance*: Illustrates the sparse sampling design and the high proportion of CSF samples below the limit of quantification, which is critical for understanding model limitations.
- **Figure 2**: Schematic of the plasma and CSF model, showing the central compartment linked to a hypothetical effect compartment via KE0 and PPC.
  - *Significance*: Provides a visual representation of the structural model, clarifying the effect-compartment framework used to estimate CNS penetration parameters.
- **Figure 3**: Prediction-corrected visual predictive checks for plasma (a) and CSF (b) models, showing observed percentiles within the 90% prediction intervals.
  - *Significance*: Demonstrates adequate model performance for both compartments, supporting the reliability of the parameter estimates.
- **Table 1**: Demographic and clinical characteristics of the study population (n=121), including BMI distribution and CSF sample availability.
  - *Significance*: Highlights the predominantly overweight/obese, female African cohort, which is key to interpreting the PK findings and generalizability.
- **Table 2**: Final population PK parameter estimates for plasma and CSF models, including CL/F, V/F, KE0, PPC, and variability components.
  - *Significance*: Provides the key model parameters and their precision, essential for understanding the quantitative findings and comparing with other studies.
- **Table 3**: Model-predicted steady-state exposure metrics (AUC, Cmax, Ctrough) for DTG 50 mg once daily.
  - *Significance*: Summarizes the simulated exposure metrics that inform clinical dosing considerations and correlate with BMI.
- **Table 4**: Comparison of DTG PK parameters across multiple published population PK models, including the current study.
  - *Significance*: Contextualizes the current findings within the literature, highlighting differences in clearance and volume estimates across populations and study designs.

---

### Code & Reproducibility Assessment
No code or model files were provided. The data are available on reasonable request to the corresponding author.

---

### Supplementary Materials
Supplementary materials include Data S1 (goodness-of-fit plots) and Figures S1-S3 (model schematics and BMI-AUC correlation). No additional tables or methods were provided.

---

### Future Directions
Future studies should include intensive CSF sampling to estimate IIV on KE0 and PPC, measure unbound plasma concentrations to better understand blood-brain barrier transport, and investigate the mechanistic basis of obesity-related increases in DTG clearance. Longitudinal assessments of CSF penetration and neurocognitive outcomes in overweight/obese populations are warranted. External validation of the model in independent cohorts would strengthen its generalizability.

---

### Expert Commentary
This paper addresses a clinically relevant gap by providing DTG-specific CNS equilibration kinetics using an effect-compartment model, which is more informative than single-timepoint CSF-to-plasma ratios. The sequential modeling approach is pragmatic given sparse CSF data, but the high BLQ proportion (77.6%) and use of M1 method likely bias PPC and KE0 upward. The lack of IIV on KE0 is a limitation, as it precludes assessment of inter-individual differences in blood-brain barrier transport. The inverse BMI-exposure correlation is consistent with known obesity effects on DTG clearance, but the mechanistic basis remains unclear. Future studies with intensive CSF sampling and unbound plasma concentrations are needed to validate these findings and explore individual variability in CNS penetration.

---

### Bottom Line
This study provides a population PK model for dolutegravir in plasma and CSF, revealing rapid equilibration (half-life 1.82 h) and low steady-state CSF penetration (0.15%) in a predominantly overweight/obese African cohort. The inverse correlation between BMI and exposure suggests that obesity-related increases in clearance may reduce CNS drug concentrations, though CSF levels remain above the protein-adjusted IC50. The effect-compartment framework offers a reproducible method for characterizing CNS penetration, but the high proportion of BLQ CSF samples and lack of IIV on KE0 limit individual-level inferences.

---

---

## 📊 Figures

![(a) Concentration-time plots of plasma and cerebrospinal fluid dolutegravir showing sparse sampling data collected predominantly within 5 h post-dose, with limit]({{ site.baseurl }}/assets/digests/2026-10-05-population-pharmacokinetics-of-dolutegravir-in-plasma-and-cerebrospinal-fluid/figures/fig_01.jpg)

![Schematic of the dolutegravir plasma and cerebrospinal fluid model. The KE0 represents the first-order equilibration rate constant between the central compartmen]({{ site.baseurl }}/assets/digests/2026-10-05-population-pharmacokinetics-of-dolutegravir-in-plasma-and-cerebrospinal-fluid/figures/fig_02.jpg)

![Prediction-corrected visual predictive check of the plasma (a) and CSF models (b). Black lines represent the 5th percentile (dotted), 50th percentile (solid), 95]({{ site.baseurl }}/assets/digests/2026-10-05-population-pharmacokinetics-of-dolutegravir-in-plasma-and-cerebrospinal-fluid/figures/fig_03.jpg)