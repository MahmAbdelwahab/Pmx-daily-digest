---
layout: post
title: "Development and Use of a Population Pharmacokinetic Model for Characterizing the Pharmacokinetics of Vonoprazan in Pediatric Patients"
date: 2026-07-02
authors: "Mulford DJ, Facius A, et al."
journal: "Clinical Pharmacology & Therapeutics, 2025"
doi: "10.1002/cpt.70000"
paper_type: popk
tags: [popk, pediatrics]
excerpt_text: "This paper presents a population PK model for vonoprazan in pediatric patients aged 6–17 years, demonstrating that fixed 10 mg and 20 mg doses provide adult-comparable exposures. The iterative model-building approach, starting with adult data and sequentially incorporating pediatric data, is a textbook example of model-informed pediatric drug development. Pharmacometricians involved in pediatric drug development or P-CAB research should read this for its methodological rigor and practical implications."
pdf_path: "/assets/digests/2026-07-02-development-and-use-of-a-population-pharmacokinetic-model-for-characterizing/PMx_Development_and_Use_of_a_Population_Phar_20260702.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a population PK model for vonoprazan in pediatric patients aged 6–17 years, demonstrating that fixed 10 mg and 20 mg doses provide adult-comparable exposures. The iterative model-building approach, starting with adult data and sequentially incorporating pediatric data, is a textbook example of model-informed pediatric drug development. Pharmacometricians involved in pediatric drug development or P-CAB research should read this for its methodological rigor and practical implications.

---

### Executive Summary
This paper presents a sequential population pharmacokinetic (popPK) model for vonoprazan, a potassium-competitive acid blocker (P-CAB), developed using data from eight adult studies, one adolescent study (12–17 years), and one pediatric study (6–12 years). The final two-compartment model with delayed absorption via three transit compartments successfully described vonoprazan pharmacokinetics across all age groups. Key findings include no age- or weight-related differences in clearance, supporting fixed 10 mg and 20 mg doses for children aged 6–17 years. Simulations predicted that 10 mg and 20 mg doses in children aged 1 to $<6$ years achieve adult-comparable exposures, while lower doses may be needed for infants $<1$ year. The iterative model-building approach demonstrates the value of model-informed pediatric drug development, reducing reliance on large pediatric trials.

---

### Scientific Context & Motivation
Gastroesophageal reflux disease (GERD) affects ~20% of children, and proton pump inhibitors (PPIs) are the standard treatment. However, PPIs have variable acid suppression and require weight-based dosing in children due to age-dependent CYP2C19 maturation. Vonoprazan, a potassium-competitive acid blocker (P-CAB), offers more rapid, potent, and sustained acid suppression in adults, but was not approved for pediatric use. Regulatory guidance supports the use of popPK modeling and adult-to-pediatric extrapolation to inform pediatric dosing. This study addresses the knowledge gap by developing a popPK model to characterize vonoprazan PK in children and adolescents, and to support dose selection without extensive pediatric trials. The model also highlights that lower doses may be needed for infants $<1$ year.

---

## ⚡ Methodological Snapshot
The authors developed a population PK model using a sequential, iterative approach. Starting with adult data (Model 1), they built a two-compartment linear model with delayed absorption via three transit compartments. Between-subject variability was estimated for $CL$, $Vc$ (with correlation), $MTT$, and $ka$. Covariate effects included dose on $Frel$, weight on $Vc$, gender on $ka$ and $Frel$, age on $ka$, and time-dependent effects on $CL$, $Vc$, and $ka$. The model was then updated with adolescent data (Model 2) and pediatric data (Model 3), with all parameters re-estimated at each step. Posterior predictive checks confirmed the model's predictive performance across age groups.

---

## 🏗️ Structural Model Breakdown
The model is a two-compartment linear PK model with delayed oral absorption. Absorption is modeled via three transit compartments, parameterized by mean transit time ($MTT$), with a first-order absorption rate constant ($ka$) from the third transit compartment to the central compartment. Relative bioavailability ($Frel$) accounts for dose-dependent absorption. Drug elimination is linear via clearance ($CL$) from the central compartment. Distribution includes central volume ($Vc$), peripheral volume ($Vp$), and distribution clearance ($Q$). Between-subject variability is estimated for $CL$, $Vc$ (with correlation), $MTT$, and $ka$. Residual variability is combined additive and proportional.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling with a two-compartment linear PK model. Absorption delay was modeled using three transit compartments parameterized by mean transit time ($MTT$). First-order absorption from the third transit compartment to central compartment. Relative bioavailability ($Frel$) was estimated (fixed to 1 for reference). Elimination via linear clearance ($CL$), distribution via central ($Vc$) and peripheral ($Vp$) volumes and distribution clearance ($Q$).

#### Data Sources
Data from eight adult studies (18–54 years), one adolescent study (12–17 years, NCT05343364), and one pediatric study (6–12 years, NCT06106022). Adult data included healthy subjects; pediatric studies included patients with GERD. Pharmacokinetics were assumed similar between healthy subjects and GERD patients based on prior analyses. Missing observations were removed; samples before first dose were set to time 0.

#### Estimation Methods
NONMEM 7.5.1 with FOCE (first-order conditional estimation) was used. The M3 method was employed to handle BLQ data. Between-subject variability was modeled as log-normal with diagonal $\Omega$ matrix initially, with off-diagonal elements added for $CL$-$Vc$ correlation. Residual variability used a combined additive and proportional error model.

#### Model Evaluation
Models were assessed using parameter precision (RSE), shrinkage, goodness-of-fit plots (observed vs. predicted), random effects diagnostics, and visual predictive checks (pcVPCs). Posterior predictive checks were used to evaluate model predictions against new pediatric data. Model updates were performed if discrepancies were identified.

#### Covariate Analysis
Covariates tested included dose, time (study day), sex, weight, and age. Continuous covariates were implemented as power models centered at 20 mg (dose), 70 kg (weight), and 18 years (age). Significant covariates included: dose effect on $Frel$ (power exponent 0.29), weight effect on $Vc$ (power exponent 0.668), gender effect on $ka$ (49% slower in females) and $Frel$ (35.1% higher in females), age effect on $ka$ (power exponent -0.693), and time-dependent effects (binary for day $>1$) on $CL$, $Vc$, and $ka$. No age or weight effects on clearance were identified.

---

### Statistical Rigor Assessment
The modeling approach is appropriate and follows best practices. The use of FOCE in NONMEM is standard for nonlinear mixed-effects models. The M3 method for BLQ data is a strength, as it avoids bias from ignoring censored data. Parameter precision (RSE) is generally good ($<20\%$ for most parameters), though some BSV estimates have higher uncertainty. The model evaluation includes VPCs and posterior predictive checks, which are appropriate. However, the modest pediatric sample size (especially for children 6–12 years) limits the power to detect subtle covariate effects. The authors acknowledge this and note that the pediatric data were not intended to independently define model structure. The decision to not include age or weight effects on clearance, despite some trends, is supported by wide confidence intervals. Sensitivity analyses (e.g., BLQ handling) are mentioned but not fully detailed.

---

## 📊 Key Findings
The final two-compartment model with three transit compartments adequately described vonoprazan PK across adults, adolescents, and children aged 6–17 years. No age- or weight-related differences in clearance were identified, supporting fixed 10 mg and 20 mg doses. The most significant parameter shifts when adding pediatric data were the age effect on $ka$ (exponent changed from -1.02 to -0.693) and the weight effect on $Vc$ (exponent changed from 0.577 to 0.668). Simulations predicted that 10 mg and 20 mg doses in children aged 1 to $<6$ years achieve adult-comparable exposures, while lower doses may be needed for infants $<1$ year. The model also identified a gender effect (49% slower $ka$ and 35.1% higher $Frel$ in females) and a time-dependent decrease in $CL$, $Vc$, and $ka$ after Day 1.

---

## 💡 Clinical & Regulatory Implications
The model supports fixed 10 mg and 20 mg doses for children aged 6–17 years without weight-based adjustments, simplifying dosing. For children aged 1 to $<6$ years, the same doses are predicted to yield adult-comparable exposures, but for infants $<1$ year, lower doses are recommended due to CYP enzyme maturation. These findings reduce the need for extensive pediatric clinical trials and provide a framework for regulatory submissions. The model also highlights that vonoprazan, unlike PPIs, does not require higher weight-normalized doses in children, which is a key clinical advantage.

---

### Strengths & Limitations

#### Strengths
- Iterative 'learn and confirm' approach aligns with regulatory guidance for pediatric drug development.
- Use of M3 method for BLQ data enhances parameter estimation.
- Model structure is physiologically plausible and parsimonious.
- Posterior predictive checks confirm model predictions against new data.
- Clear presentation of parameter estimates and their precision across model updates.
- Simulations for younger children provide actionable dose recommendations.

#### Limitations (Acknowledged by Authors)
- Modest pediatric sample size due to ethical and practical constraints.
- Pediatric data not intended to independently define model structure.
- Sparse sampling in some pediatric subjects to reduce burden.
- Need for greater age distribution to capture developmental changes.
- Simulations for infants <1 year require validation with actual data.

#### Limitations (Expert Review)
- No formal covariate selection procedure (e.g., stepwise forward-backward) was described; covariates were tested based on prior knowledge and graphical exploration.
- The model assumes linear PK, but nonlinearity at higher doses cannot be ruled out without IV data.
- The gender effect on ka and Frel is notable but not mechanistically explained.
- The time-dependent effects (day >1) are modeled as binary, which may not capture continuous changes over time.
- No external validation was performed; all evaluations were internal.

#### Generalizability
The model is based on data from adults, adolescents, and children aged 6–17 years, with simulations extending to younger children. The findings are likely generalizable to pediatric GERD patients, but caution is needed for infants <1 year where CYP maturation may alter PK. The model may not apply to patients with hepatic or renal impairment, as these populations were not included.

---

### Key Equations

**Dose effect on Frel**

{% raw %}
$$
F_{rel} = 1 \times \left(\frac{\text{dose}}{20}\right)^{\theta_{\text{dose}}}
$$
{% endraw %}

Power model for dose effect on relative bioavailability (Frel).

**Weight effect on Vc**

{% raw %}
$$
V_c = V_{c,\text{pop}} \times \left(\frac{WT}{70}\right)^{\theta_{\text{wt}}}
$$
{% endraw %}

Power model for weight effect on central volume of distribution (Vc).

**Age effect on ka**

{% raw %}
$$
k_a = k_{a,\text{pop}} \times \left(\frac{\text{age}}{18}\right)^{\theta_{\text{age}}}
$$
{% endraw %}

Power model for age effect on absorption rate constant (ka).

**BSV model**

{% raw %}
$$
P_i = P_{\text{pop}} \times e^{\eta_i},   \eta_i \sim N(0, \omega^2)
$$
{% endraw %}

Between-subject variability model assuming log-normal distribution for parameters.

**Residual error model**

{% raw %}
$$
C_{ij} = \hat{C}_{ij} \times (1 + \varepsilon_{1,ij}) + \varepsilon_{2,ij},   \varepsilon \sim N(0, \sigma^2)
$$
{% endraw %}

Combined additive and proportional residual error model.

**Transit rate constant**

{% raw %}
$$
k_{tr} = \frac{4}{\text{MTT}}
$$
{% endraw %}

Mean transit time parameterization for absorption delay compartments.

---

### Figures & Tables

- **Figure 1**: Timeline of pediatric development for vonoprazan, showing sequential model updates.
  - *Significance*: Illustrates the iterative model-building process and how each model version informed the next study.
- **Figure 2**: Schematic of the final adult model (Model 1) showing two-compartment structure with three transit compartments.
  - *Significance*: Provides a visual representation of the structural model, including absorption, distribution, and elimination pathways.
- **Figure 3**: Scatter plots of observed vs. predicted concentrations for Model 1 (adults), Model 2 (adults + adolescents), and Model 3 (adults + adolescents + children).
  - *Significance*: Demonstrates the model's predictive performance across all age groups, with good alignment between observed and predicted values.
- **Figure 4**: Posterior predictive checks for adolescents (a) and children (b) showing observed data overlaid on model predictions.
  - *Significance*: Validates that the model adequately predicts PK in pediatric populations without systematic bias.
- **Figure 5**: Dose-normalized AUC vs. age and weight for adolescents and children.
  - *Significance*: Explores potential age- and weight-related trends in exposure, supporting the decision to not include these covariates on clearance.
- **Figure 6**: Simulated steady-state AUC for infants and children aged 1 month to <6 years at 10 mg and 20 mg doses.
  - *Significance*: Provides predicted exposures for younger children, guiding dose selection for future studies.
- **Table 1**: Final parameter estimates for Models 1, 2, and 3, including covariate effects and variability.
  - *Significance*: Central table showing all model parameters, their precision (RSE), and how they change with each model update.

---

### Future Directions
The model should be updated with actual PK data from children aged 1 month to <6 years (VPED-104) to validate the predicted exposures. Future studies should also include infants <1 month to assess neonatal PK. The model could be extended to include pharmacodynamic endpoints (e.g., gastric pH) to confirm exposure-response relationships. Additionally, the impact of food and concomitant medications on vonoprazan PK in pediatric populations should be explored. The iterative modeling framework could be applied to other P-CABs or drugs with similar metabolic pathways.

---

### Expert Commentary
This paper exemplifies best practices in pediatric model-informed drug development, using an iterative 'learn and confirm' approach that leverages adult data to guide pediatric dosing. The model's strength lies in its simplicity—a two-compartment linear model with transit compartments—which is both physiologically plausible and computationally efficient. The finding that vonoprazan clearance does not change with age or weight in children aged 6–17 years is notable and contrasts with PPIs, which often require higher weight-normalized doses in children. This suggests that vonoprazan's metabolism (primarily CYP3A4) may be less affected by developmental changes than CYP2C19-dependent PPIs. The use of the M3 method for BLQ data is appropriate and enhances parameter estimation. However, the modest pediatric sample size (especially in the younger age groups) limits the ability to detect subtle developmental changes. The authors' decision to not include age or weight effects on clearance, despite some trends in the data, is conservative and justified by wide confidence intervals. The extension to predict exposures in infants <1 year using CYP maturation factors is a reasonable approach but should be validated with actual data. Overall, this work sets a strong precedent for using popPK modeling to support pediatric approvals of P-CABs.

---

### Bottom Line
The iterative popPK model demonstrates that fixed 10 mg and 20 mg doses of vonoprazan provide adult-comparable exposures in children aged 6–17 years, with no age- or weight-related changes in clearance. For children aged 1 to <6 years, the same doses are predicted to achieve similar exposures, while lower doses may be needed for infants <1 year due to CYP enzyme maturation. This model-based approach supports efficient pediatric dose selection and regulatory decision-making for vonoprazan in GERD.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-07-02-development-and-use-of-a-population-pharmacokinetic-model-for-characterizing/figures/fig_01.png)

![Timeline of the pediatric development for vonoprazan.]({{ site.baseurl }}/assets/digests/2026-07-02-development-and-use-of-a-population-pharmacokinetic-model-for-characterizing/figures/fig_02.png)

![Schematic of the final adult model (Model 1). Compartments are shown as gray boxes. The line-type indicates unobserved (dashed) or observed (solid) compartments.]({{ site.baseurl }}/assets/digests/2026-07-02-development-and-use-of-a-population-pharmacokinetic-model-for-characterizing/figures/fig_03.png)