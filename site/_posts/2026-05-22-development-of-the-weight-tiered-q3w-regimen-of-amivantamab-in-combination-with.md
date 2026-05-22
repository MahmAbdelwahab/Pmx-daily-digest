---
layout: post
title: "Development of the Weight-Tiered Q3W Regimen of Amivantamab in Combination With Carboplatin-Pemetrexed in EGFR-Mutated Non-Small Cell Lung Cancer"
date: 2026-05-22
authors: "Yuan D, Bishop CJ, Mehta J, et al."
journal: "CPT Pharmacometrics Syst Pharmacol. 2026; e70263"
doi: "10.1002/psp4.70263"
paper_type: popk
tags: [popk, dose-response, covariate-analysis, oncology, regulatory]
excerpt_text: "This paper describes the population PK and exposure-response analyses that supported the weight-tiered Q3W dosing regimen of amivantamab combined with carboplatin-pemetrexed for EGFR-mutated NSCLC. It demonstrates how PK bridging from an approved Q2W regimen and E-R analyses can enable a dosing schedule change without dedicated dose-finding studies. Clinical pharmacologists, regulatory scientists, and oncology drug developers will find this a practical example of fit-for-purpose pharmacometrics in streamlining clinical development."
pdf_path: "/assets/digests/2026-05-22-development-of-the-weight-tiered-q3w-regimen-of-amivantamab-in-combination-with/PMx_Development_of_the_WeightTiered_Q3W_Regi_20260522.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper describes the population PK and exposure-response analyses that supported the weight-tiered Q3W dosing regimen of amivantamab combined with carboplatin-pemetrexed for EGFR-mutated NSCLC. It demonstrates how PK bridging from an approved Q2W regimen and E-R analyses can enable a dosing schedule change without dedicated dose-finding studies. Clinical pharmacologists, regulatory scientists, and oncology drug developers will find this a practical example of fit-for-purpose pharmacometrics in streamlining clinical development.

---

### Executive Summary
Amivantamab, an EGFR-MET bispecific antibody, was initially approved as monotherapy using a weight-tiered Q2W regimen. To enable combination with Q3W carboplatin-pemetrexed, a new weight-tiered Q3W regimen was developed. This paper presents the population PK and exposure-response analyses from the PAPILLON and MARIPOSA-2 phase 3 trials that supported the registration of the Q3W regimen. A two-compartment model with parallel linear and Michaelis-Menten elimination, built on prior monotherapy data and updated with pooled data from 639 participants, adequately described amivantamab PK. Simulations confirmed that the Q3W regimen achieved comparable trough concentrations to the approved Q2W regimen, with weight-tiered dosing (cutoff 80 kg) providing similar exposure across tiers. Exposure-efficacy analyses using Cox proportional hazards models showed a flat relationship with progression-free survival after adjusting for confounders (sex, brain metastases, EGFR mutation type). Exposure-safety analyses revealed trends of higher incidence of mechanism-related adverse events with increasing exposure, but the overall safety profile was manageable. No dose adjustments beyond weight tier were warranted. This work exemplifies how pharmacometric analyses can support dose regimen changes and regulatory approval without extensive dose-selection trials.

---

### Scientific Context & Motivation
The challenge was to combine amivantamab with a Q3W chemotherapy backbone while maintaining efficacy and safety. The approved Q2W monotherapy regimen was established through dose escalation, but a new regimen was needed for combination therapy. The knowledge gap was whether a Q3W regimen with higher doses could achieve comparable exposure and whether the exposure-response relationships for efficacy and safety would support the new regimen. This work addressed the gap by leveraging prior PK knowledge, PK bridging, and E-R analyses to justify the regimen change without conducting a separate dose-ranging study in the combination setting. It challenges the traditional paradigm of requiring dedicated dose-finding for every new combination, demonstrating a model-informed approach.

---

## ⚡ Methodological Snapshot
Population PK analysis was performed using NONMEM with FOCEI, starting from a prior two-compartment model with parallel linear and Michaelis-Menten elimination developed from monotherapy data. The model was updated using pooled data from 639 participants (CHRYSALIS and PAPILLON) and then applied to MARIPOSA-2 via Bayesian estimation. Covariate analysis included stepwise forward addition ($p<0.01$) and backward elimination ($p<0.001$). PK simulations compared the Q3W and Q2W regimens. Exposure-response analyses for efficacy used Cox proportional hazards models with adjustment for confounders; safety was assessed graphically. The approach successfully supported the weight-tiered Q3W regimen without a dedicated dose-finding study.

---

## 🏗️ Structural Model Breakdown
The structural model is a two-compartment model with first-order distribution and parallel linear and nonlinear elimination from the central compartment. The central compartment volume is $V_1$, peripheral volume $V_2$, and intercompartmental clearance $Q$. Linear clearance is $CL$. The nonlinear pathway follows Michaelis-Menten kinetics with maximum rate $V_{max}$ and Michaelis constant $K_m$. The model equations are:

$dA_1/dt = - (CL/V_1 + Q/V_1) \cdot A_1 + (Q/V_2) \cdot A_2 - (V_{max} \cdot (A_1/V_1)) / (K_m + (A_1/V_1))$
$dA_2/dt = (Q/V_1) \cdot A_1 - (Q/V_2) \cdot A_2$

where $A_1$ and $A_2$ are amounts in central and peripheral compartments, respectively. The concentration in the central compartment is $C = A_1/V_1$. At steady state, the Michaelis-Menten pathway contributed up to 30% of total clearance. Covariate effects were incorporated as power functions on $CL$ and volumes, and a linear shift for sex on $CL$. The model adequately described the PK across a wide dose range and both Q2W and Q3W regimens.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling using NONMEM (versions 7.4.0 and 7.5.0) with first-order conditional estimation with interaction (FOCEI). The structural model was a two-compartment model with parallel linear clearance ($CL$) and Michaelis-Menten elimination ($V_{max}$, $K_m$). Interindividual variability (IIV) was modeled using exponential terms on $CL$, $V_1$, $V_2$, and $V_{max}$. Residual unexplained variability (RUV) was modeled as additive on the natural log scale, equivalent to a proportional error model. Covariate-parameter relationships were modeled as power functions for continuous covariates (e.g., weight, albumin, age) and linear shifts for categorical covariates (sex). The model was parameterized in terms of $CL$, $V_1$, $V_2$, $Q$, $V_{max}$, and $K_m$.

#### Data Sources
Data were pooled from three clinical trials: CHRYSALIS (phase 1, N=433, including monotherapy Q2W and ACP Q3W cohorts), PAPILLON (phase 3, N=206, ACP and monotherapy crossover), and MARIPOSA-2 (phase 3, N=123, ACP). PK sampling schedules varied from rich in CHRYSALIS to sparse in the phase 3 trials (details in Table S1). Amivantamab serum concentrations were measured using a validated Meso Scale Discovery electrochemiluminescence immunoassay. Samples below the limit of quantification (BLQ, 0.8%) were omitted from the analysis. The dataset for model development included 16,321 measurable concentrations from 639 participants.

#### Estimation Methods
The population PK model was developed using FOCEI in NONMEM. An initial Bayesian approach (MAXEVAL=0) was used to evaluate the prior model with PAPILLON data. After observing trends in ETA-covariate plots, the model was refined using pooled CHRYSALIS and PAPILLON data with stepwise covariate selection. Forward addition was based on graphical analysis and clinical interest, followed by backward elimination using a log-likelihood ratio test with a significance level of $p<0.001$. The final model was then applied to MARIPOSA-2 data using the Bayesian MAXEVAL=0 method for external validation.

#### Model Evaluation
Model evaluation included standard goodness-of-fit plots (observed vs. population and individual predicted concentrations, conditional weighted residuals vs. time and predictions). A prediction-corrected visual predictive check (pcVPC) was performed to assess the model's ability to reproduce the central tendency and variability of the observed data. External validation was conducted by applying the final model to the independent MARIPOSA-2 dataset and examining GOF plots. Parameter precision was assessed using relative standard errors (RSE) from the NONMEM covariance step.

#### Covariate Analysis
Covariates evaluated included baseline weight, sex, age, race, baseline serum albumin, and concomitant chemotherapy (yes/no). The prior model already included weight on $CL$ and $V_1$, and sex on $CL$. In the updated model, additional covariates were added based on graphical analysis of empirical Bayes estimates versus covariates. The full model was then subjected to backward elimination ($p<0.001$). The final model retained weight on $CL$, $V_1$, and $V_2$ (with the same exponent for $V_1$ and $V_2$); sex on $CL$ and $V_1$; baseline albumin on $CL$; and age on $CL$. Race and concomitant chemotherapy did not significantly impact PK. No covariate effects were included on $Q$, $V_{max}$, or $K_m$.

---

### Statistical Rigor Assessment
The population PK analysis employed a large sample size (639 participants) and rich data, ensuring reliable parameter estimation. The use of FOCEI with interaction is appropriate for the model complexity. The stepwise covariate selection with stringent p-value (0.001) reduces the risk of spurious covariate effects. External validation in an independent study strengthens the model's credibility. The E-R efficacy analysis used Cox proportional hazards models, which are standard for time-to-event data; the proportional hazards assumption was tested and addressed (stratification for EGFR mutation type). Multivariable modeling accounted for confounding, and the flat E-R conclusion is robust. However, the E-R safety analysis was limited to graphical exploration without formal statistical modeling or adjustment for confounders, which may limit the strength of safety conclusions. The omission of BLQ samples (0.8%) is unlikely to bias results. No sensitivity analyses for model misspecification or handling of BLQ were reported. Overall, the statistical methods are fit-for-purpose and support the regulatory decisions.

---

## 📊 Key Findings
1) The Q3W regimen (1400/1750 mg weekly x4 then 1750/2100 mg Q3W for <80/≥80 kg) achieved comparable $C_{trough,max}$ and $C_{trough,ss}$ to the approved Q2W regimen. 2) Population PK model with parallel linear and nonlinear clearance described the data well; weight, sex, albumin, and age were significant covariates, but only weight-tiered dosing was needed. 3) In both PAPILLON (first-line Ex20ins) and MARIPOSA-2 (second-line Ex19del/L858R), no significant exposure-PFS relationship was found after adjusting for confounders, indicating the dose is on the plateau of the efficacy curve. 4) Safety analyses showed trends of increased paronychia, constipation, and hypoalbuminemia with higher exposure, but the overall safety profile was manageable with low rates of dose reduction/discontinuation. 5) The weight cutoff of 80 kg was confirmed; within the <80 kg tier, the 70-80 kg subgroup had lower exposure but similar PFS, supporting no need for further stratification.

---

## 💡 Clinical & Regulatory Implications
The weight-tiered Q3W regimen (1400 mg/1750 mg weekly for 4 weeks, then 1750 mg/2100 mg every 3 weeks for patients <80/≥80 kg) is the approved dosing for amivantamab in combination with carboplatin-pemetrexed for first-line treatment of NSCLC with EGFR exon 20 insertion mutations, and second-line treatment of NSCLC with EGFR exon 19 deletions or L858R mutations after osimertinib. No dose adjustments are required for age, sex, race, mild renal or hepatic impairment, or other covariates. The flat exposure-efficacy relationship indicates that the selected dose is on the plateau of the dose-response curve, providing confidence in efficacy. The safety profile is manageable, with low rates of dose modification or discontinuation. This pharmacometric analysis was pivotal in obtaining regulatory approval without additional dose-finding trials, highlighting the value of model-informed drug development in oncology.

---

### Strengths & Limitations

#### Strengths
- Robust population PK model built on a large dataset (639 participants, >16,000 observations) with external validation in an independent trial (MARIPOSA-2).
- Incorporation of saturable clearance (Michaelis-Menten) improved model fit and provided mechanistic insight into target-mediated drug disposition.
- Thorough covariate analysis with stepwise forward addition and backward elimination, ensuring parsimony.
- E-R efficacy analyses appropriately accounted for confounding covariates (sex, brain metastases, mutation type) using multivariable Cox models and stratified analyses.
- Clear demonstration of PK bridging between regimens, supporting regulatory acceptance without additional dose-finding studies.
- Provision of NONMEM control stream and example R codes enhances transparency and reproducibility.

#### Limitations (Acknowledged by Authors)
- Only one dose regimen of amivantamab was studied in the combination trials, limiting direct dose-response assessment.
- Exposure-safety analyses were only graphical; no formal statistical modeling was performed for dose optimization of safety.
- The estimate of $K_m$ had relatively low precision (RSE 43.3%) due to limited data at low concentrations.

#### Limitations (Expert Review)
- The E-R safety analysis did not adjust for potential confounders (e.g., baseline risk factors for AEs), which could bias the observed trends.
- The apparent negative E-R for IRR is likely confounded by infusion interruptions; a more sophisticated time-to-event analysis or causal inference approach could better characterize this relationship.
- The model did not evaluate the impact of immunogenicity on PK, which could be relevant for long-term treatment.
- Generalizability to non-Asian populations may be limited as the studies had a high proportion of Asian patients; however, race was not a significant covariate.
- The flat E-R for PFS might not hold for overall survival, which was not analyzed.

#### Generalizability
The findings are directly applicable to the approved indications (first-line EGFR Ex20ins and second-line EGFR Ex19del/L858R NSCLC) in combination with carboplatin-pemetrexed. The PK model and bridging approach could inform future combinations or dosing schedule changes, but extrapolation to other tumor types or monotherapy settings would require additional verification.

---

### Key Equations

**Central compartment mass balance**

{% raw %}
$$
\frac{dA_1}{dt} = - \frac{CL}{V_1} A_1 - \frac{Q}{V_1} A_1 + \frac{Q}{V_2} A_2 - \frac{V_{max} \cdot (A_1/V_1)}{K_m + (A_1/V_1)}
$$
{% endraw %}

Rate of change of amivantamab amount in the central compartment, including linear clearance, distribution to peripheral compartment, and saturable Michaelis-Menten elimination.

**Peripheral compartment mass balance**

{% raw %}
$$
\frac{dA_2}{dt} = \frac{Q}{V_1} A_1 - \frac{Q}{V_2} A_2
$$
{% endraw %}

Rate of change of amivantamab amount in the peripheral compartment.

**Michaelis-Menten elimination rate**

{% raw %}
$$
v = \frac{V_{max} \cdot C}{K_m + C}
$$
{% endraw %}

Saturable elimination rate as a function of central compartment concentration $C = A_1/V_1$.

**Covariate model for linear clearance**

{% raw %}
$$\begin{aligned}
CL \\
&= CL_{pop} \times \left( \frac{WT}{70} \right)^{\theta_{WT,CL}} \times \left( \frac{ALB}{40} \right)^{\theta_{ALB,CL}} \times \left( \frac{AGE}{60} \right)^{\theta_{AGE,CL}} \times (1 \\
& + \theta_{SEX,CL} \cdot SEX) \times e^{\eta_{CL}}
\end{aligned}$$
{% endraw %}

Typical value of linear clearance incorporating effects of weight, albumin, age, and sex. SEX is an indicator variable (0 for male, 1 for female). Reference values are illustrative.

---

### Figures & Tables

- **Figure 1**: Comparison of simulated amivantamab concentration-time profiles and trough concentrations ($C_{trough,max}$ and $C_{trough,ss}$) between the Q2W and Q3W regimens.
  - *Significance*: Demonstrates PK bridging, showing that the Q3W regimen achieves comparable trough concentrations to the approved Q2W regimen, supporting the dose change.
- **Figure 2**: Forest plot of steady-state AUC over 3 weeks ($AUC_{3weeks,ss}$) across subgroups in the PAPILLON PK population.
  - *Significance*: Shows that weight-tiered dosing provides comparable exposure between weight tiers, and identifies covariates (sex, weight within tier) that affect exposure but do not warrant dose adjustment.
- **Figure 3**: Kaplan-Meier plots of progression-free survival by $C_{trough,max}$ tertiles in PAPILLON and MARIPOSA-2.
  - *Significance*: Illustrates the flat exposure-efficacy relationship; no significant difference in PFS across exposure groups, supporting that the dose is on the plateau of the dose-response curve.
- **Figure 4**: Bar plots of infusion-related reaction rate by amivantamab exposure quartile ($C_{eoi,1st}$) in PAPILLON and MARIPOSA-2.
  - *Significance*: Shows an apparent negative relationship, likely due to infusion interruptions in patients experiencing IRR, highlighting a confounding factor in E-R safety analysis.
- **Figure 5**: Bar plots of rash, paronychia, hypoalbuminemia, nausea, and constipation rates by amivantamab exposure quartiles in PAPILLON.
  - *Significance*: Reveals trends of higher incidence of some mechanism-related adverse events with increasing exposure, informing the safety profile.
- **Figure 6**: Bar plots of the same adverse events by exposure quartiles in MARIPOSA-2.
  - *Significance*: Confirms consistent trends across studies, supporting the generalizability of the safety findings.
- **Table S1**: Study design and PK sampling timepoints for CHRYSALIS, PAPILLON, and MARIPOSA-2.
  - *Significance*: Provides context for the data used in the population PK analysis.
- **Table S2**: Demographics and baseline characteristics of participants included in the population PK analysis.
  - *Significance*: Describes the population and allows assessment of generalizability.
- **Table S3**: Population PK parameter estimates from the final model (pooled CHRYSALIS and PAPILLON).
  - *Significance*: Key results showing the typical values, interindividual variability, and covariate effects, with precision estimates.
- **Table S4**: Observed $C_{trough,max}$ and $C_{trough,ss}$ in ACP participants across studies.
  - *Significance*: Empirical evidence that the Q3W regimen achieves comparable trough concentrations to the Q2W regimen.
- **Table S5**: Demographics and baseline characteristics of PAPILLON ACP participants by $C_{trough,max}$ tertile.
  - *Significance*: Reveals imbalance in covariates (e.g., sex) across exposure groups, motivating the need for multivariable E-R analysis.
- **Table S7**: Multivariable Cox proportional hazards model for PFS in PAPILLON, evaluating the impact of $C_{trough,max}$ and covariates.
  - *Significance*: Demonstrates that after adjusting for sex and brain metastases, amivantamab exposure does not significantly affect PFS.
- **Table S8**: Final Cox PH model for PFS in PAPILLON after stepwise covariate selection, with $C_{trough,max}$ retained.
  - *Significance*: Confirms the flat E-R relationship with a 95% CI for the exposure coefficient including zero.
- **Table S9**: Demographics and baseline characteristics of MARIPOSA-2 ACP participants by $C_{trough,max}$ tertile.
  - *Significance*: Similar to Table S5, shows covariate distribution across exposure groups.
- **Table S11**: Multivariable Cox PH model for PFS in MARIPOSA-2, evaluating $C_{trough,max}$ and covariates.
  - *Significance*: Shows no significant exposure effect after adjusting for EGFR mutation type.
- **Table S12**: Stratified Cox PH model for PFS in MARIPOSA-2 by EGFR mutation type.
  - *Significance*: Addresses violation of proportional hazards assumption and confirms lack of exposure-PFS relationship.

---

### Code & Reproducibility Assessment
The NONMEM control stream for the final population PK model and example R codes for exposure-response efficacy analyses are provided in the Supporting Information, facilitating reproducibility and application by other modelers.

---

### Future Directions
Future work could explore the exposure-response relationship for overall survival, investigate the impact of immunogenicity on long-term PK, and apply the model to optimize dosing in other combinations (e.g., with lazertinib). A formal risk-benefit analysis integrating efficacy and safety E-R could further refine the dose. Additionally, the contribution of the nonlinear clearance pathway could be better characterized with more data at low concentrations, potentially informing dosing in patients with varying target burden.

---

### Expert Commentary
This paper is a commendable example of modern model-informed drug development. The authors successfully leveraged a prior monotherapy PK model to bridge to a new combination regimen, avoiding a redundant dose-finding study. The use of a two-compartment model with parallel linear and Michaelis-Menten elimination is appropriate for a bispecific antibody with target-mediated drug disposition. The careful handling of confounding in E-R efficacy analyses—particularly the recognition that sex and brain metastases could distort the exposure-PFS relationship—is a highlight and a teaching point for pharmacometricians. The flat E-R relationship for PFS, despite some exposure variability, provides confidence that the dose is adequate. However, the safety analysis is less rigorous; the graphical approach, while pragmatic, leaves open questions about the true exposure-safety relationship. In an era where dose optimization is increasingly emphasized by regulators, a more quantitative safety analysis might have been expected. Nonetheless, the overall package is robust and clearly supported the regulatory approvals. This work reinforces the value of fit-for-purpose pharmacometrics in accelerating oncology drug development.

---

### Bottom Line
The weight-tiered Q3W regimen of amivantamab (1400/1750 mg weekly for 4 weeks, then 1750/2100 mg Q3W for patients <80/≥80 kg) in combination with carboplatin-pemetrexed provides amivantamab exposure comparable to the approved Q2W monotherapy regimen. Exposure-efficacy analyses show a flat relationship with PFS, confirming the dose is on the plateau of response, while safety is manageable despite some exposure-dependent adverse events. No dose adjustments beyond the weight tier are necessary. This pharmacometric approach successfully supported regulatory approval and can serve as a template for dose regimen changes in oncology.

---

---

## 📊 Figures

![Comparison of simulated amivantamab exposure in Q2W versus Q3W regimen. In (A), the solid lines and shaded areas represent the simulated median and 90% predictio]({{ site.baseurl }}/assets/digests/2026-05-22-development-of-the-weight-tiered-q3w-regimen-of-amivantamab-in-combination-with/figures/fig_01.jpg)

![Forest plot of AUC3weeks,ss in PAPILLON PK population. CI = confidence interval; ECOG = Eastern Cooperative Oncology Group performance status; GMR = geometric me]({{ site.baseurl }}/assets/digests/2026-05-22-development-of-the-weight-tiered-q3w-regimen-of-amivantamab-in-combination-with/figures/fig_02.jpg)

![Kaplan–Meier plot of PFS by BICR in ACP participants in PAPILLON and MARIPOSA-2. ACP = amivantamab in combination with carboplatin-pemetrexed; BICR = blinded ind]({{ site.baseurl }}/assets/digests/2026-05-22-development-of-the-weight-tiered-q3w-regimen-of-amivantamab-in-combination-with/figures/fig_03.jpg)

![Bar plots of infusion related reaction rate stratified by amivantamab exposure quartile in ACP participants in PAPILLON and MARIPOSA-2. ACP = amivantamab in comb]({{ site.baseurl }}/assets/digests/2026-05-22-development-of-the-weight-tiered-q3w-regimen-of-amivantamab-in-combination-with/figures/fig_04.jpg)

![Bar plots of rash, paronychia, hypoalbuminemia, nausea, and constipation rate stratified by amivantamab exposure quartiles in PAPILLON ACP participants. ACP = am]({{ site.baseurl }}/assets/digests/2026-05-22-development-of-the-weight-tiered-q3w-regimen-of-amivantamab-in-combination-with/figures/fig_05.jpg)

![Bar plots of rash, paronychia, hypoalbuminemia, nausea, and constipation rate stratified by amivantamab exposure quartiles in MARIPOSA-2 ACP participants. ACP =]({{ site.baseurl }}/assets/digests/2026-05-22-development-of-the-weight-tiered-q3w-regimen-of-amivantamab-in-combination-with/figures/fig_06.jpg)