---
layout: post
title: "Application of Physiologically Based Pharmacokinetic Modeling to Predict CYP3A4-Mediated Drug–Drug Interactions for Pirtobrutinib"
date: 2026-07-26
authors: "Dan‐Dan Tian, S.D. Hall, S.C. Chang, M.M. Posada"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025"
doi: "10.1002/psp4.70134"
paper_type: popk
tags: [popk, pbpk, regulatory]
excerpt_text: "This paper presents a regulatory-grade PBPK model for pirtobrutinib, a BTK inhibitor with complex CYP3A4 modulation (substrate, inhibitor, inducer). Pharmacometricians involved in DDI prediction, PBPK modeling, or regulatory submissions will find the pragmatic approach to handling concurrent inhibition/induction and the use of clinical data to calibrate in vitro TDI parameters particularly valuable. The model successfully predicted DDI magnitudes and supported label recommendations."
pdf_path: "/assets/digests/2026-07-26-application-of-physiologically-based-pharmacokinetic-modeling-to-predict-cyp3a4/PMx_Application_of_PhysiologicallyBased_Phar_20260726.pdf"
retroactively_classified: false
---

**Content Source:** PMC Full Text

### Quick Take
This paper presents a regulatory-grade PBPK model for pirtobrutinib, a BTK inhibitor with complex CYP3A4 modulation (substrate, inhibitor, inducer). Pharmacometricians involved in DDI prediction, PBPK modeling, or regulatory submissions will find the pragmatic approach to handling concurrent inhibition/induction and the use of clinical data to calibrate in vitro TDI parameters particularly valuable. The model successfully predicted DDI magnitudes and supported label recommendations.

---

### Executive Summary
This study develops and verifies a physiologically based pharmacokinetic (PBPK) model for pirtobrutinib, a reversible BTK inhibitor, to predict CYP3A4-mediated drug-drug interactions (DDIs). The model integrates physicochemical properties, in vitro data (metabolism, inhibition, induction), and clinical PK/DDI study results. It successfully captures observed interactions with itraconazole (strong inhibitor), rifampin (strong inducer), and midazolam (CYP3A4 substrate). The model then predicts DDI magnitudes with a range of moderate/weak CYP3A4 modulators, informing dose adjustment recommendations in the product label. This work exemplifies the regulatory utility of PBPK modeling for complex enzyme modulation scenarios.

---

### Scientific Context & Motivation
Pirtobrutinib is a reversible BTK inhibitor approved for hematological malignancies. In vitro, it is metabolized by CYP3A4 and UGTs, and it exhibits both reversible and time-dependent inhibition (TDI) as well as induction of CYP3A4. This complex, concurrent modulation makes it challenging to predict the net clinical DDI effect using in vitro data alone. Clinical DDI studies with itraconazole (strong inhibitor), rifampin (strong inducer), and midazolam (CYP3A4 substrate) were conducted to characterize the net effect. The knowledge gap was to predict DDI magnitudes with other CYP3A4 modulators (moderate/weak inhibitors and inducers) that were not clinically tested, to inform dosing recommendations in the product label. This study addresses that gap by developing a mechanistic PBPK model that integrates all available data.

---

## ⚡ Methodological Snapshot
The authors developed a minimal PBPK model for pirtobrutinib within the Simcyp platform. Key parameters were derived from in vitro data (e.g., LogP, fup, CYP3A4 kinetics) and clinical studies (e.g., $CL_R$, $V_{ss}$, $F$). The fraction metabolized by CYP3A4 ($fm_{CYP3A4} = 0.40$) and intestinal availability ($F_g = 0.96$) were estimated using a top-down approach from the itraconazole and rifampin DDI studies. A critical step was fitting the TDI parameter $k_{inact}$ to clinical multiple-dose PK data to correct for overprediction from in vitro microsomal assays. The model was verified against observed PK and DDI data, then used to predict interactions with a panel of CYP3A4 modulators.

---

## 🏗️ Structural Model Breakdown
The model uses a minimal PBPK structure with a single adjusting compartment (SAC) for distribution. Absorption is modeled as first-order with a lag time ($k_a = 0.82$ $h^{-1}$, $t_{lag} = 0.25$ h). The model includes a gut compartment to account for intestinal CYP3A4 metabolism ($F_g = 0.96$). Elimination pathways include: (1) CYP3A4 metabolism with TDI ($K_I = 4.70$ μM, fitted $k_{inact} = 0.056$ $h^{-1}$) and induction ($EC_{50} = 17.6$ μM, $E_{max} = 20.4$), (2) other non-CYP3A4 metabolism ($fm_{other} = 0.39$, representing UGT and hydrolysis), (3) renal clearance ($CL_R = 0.12$ $L/h$), and (4) biliary clearance ($CL_{bile} = 0.24$ $L/h$). The model assumes perfusion-rate limited distribution and uses a $K_p$ scalar of $0.145$ to match the observed $V_{ss}$ of $0.54$ $L/kg$.

---

### Detailed Methodological Analysis

#### Modeling Approach
A minimal PBPK model with a single adjusting compartment (SAC) was used for distribution, as the full PBPK model did not capture the multi-compartmental IV PK. Absorption was modeled as first-order with a lag time. Elimination included CYP3A4 metabolism (with TDI), other non-CYP3A4 metabolism (UGT, hydrolysis), renal clearance, and biliary clearance. CYP3A4 induction was also incorporated. The model was built and simulated using the Simcyp Simulator (Version 19).

#### Data Sources
Data from multiple clinical pharmacology studies in healthy volunteers were used: mass balance study (IV and oral [14C]-pirtobrutinib), absolute bioavailability study, single- and multiple-dose PK studies, and DDI studies with itraconazole (capsule), rifampin, and midazolam (IV and oral). Pirtobrutinib was dosed at 200 mg (tablet) in all studies.

#### Estimation Methods
Parameter estimation within Simcyp (genetic algorithm, least squares objective function) was used to estimate intercompartmental clearance ($Q$) and volume of the single adjusting compartment ($V_{SAC}$) from IV data. The absorption rate constant ($k_a$) and lag time were manually fitted. The TDI parameter $k_{inact}$ was fitted to individual pirtobrutinib concentration-time data from the midazolam DDI study. The $fm_{CYP3A4}$ was estimated via sensitivity analysis by matching predicted DDI ratios with itraconazole and rifampin.

#### Model Evaluation
Model verification was performed by comparing predicted vs. observed PK parameters ($C_{max}$, $AUC$, $t_{max}$) and concentration-time profiles after single and multiple doses of pirtobrutinib alone and in the presence of itraconazole, rifampin, and midazolam. The model was also evaluated by its ability to predict the midazolam DDI (both IV and oral).

#### Covariate Analysis
No formal covariate analysis was performed. The model was developed for healthy volunteers, and the impact of patient-specific factors (e.g., disease state, age) was not explored. Sensitivity analyses were conducted for key parameters ($fm_{CYP3A4}$, $CL_R$, $CL_{bile}$) to assess their impact on DDI predictions.

---

### Statistical Rigor Assessment
The study uses a deterministic PBPK modeling approach within Simcyp, which incorporates population variability through virtual trial simulations. The model verification is based on visual predictive checks and comparison of geometric mean ratios (predicted vs. observed). Sensitivity analyses were performed for key parameters ($fm_{CYP3A4}$, $CL_R$, $CL_{bile}$) to assess their impact on DDI predictions. However, formal statistical measures (e.g., confidence intervals on predicted ratios, bootstrap analysis) are not presented. The sample sizes for the clinical studies are not detailed in the main text, but the model appears to capture the central tendency well. The approach is appropriate for regulatory decision-making, where the focus is on accurate prediction of mean DDI magnitude.

---

## 📊 Key Findings
The PBPK model accurately predicted the observed DDI magnitudes: pirtobrutinib AUC ratio with itraconazole (1.49 observed vs. 1.47 predicted) and with rifampin (0.29 observed vs. 0.27 predicted). The model also captured the net weak inhibition of CYP3A4 by pirtobrutinib, with midazolam AUC ratios of 1.12 (IV) and 1.70 (oral) predicted within 0.92- to 1.16-fold of observed. The estimated $fm_{CYP3A4}$ was 0.40, and $F_g$ was 0.96, indicating high intestinal availability and moderate hepatic metabolism. The model predicted that strong/moderate CYP3A4 inhibitors increase pirtobrutinib AUC by 1.20- to 1.73-fold, while moderate/weak inducers decrease AUC to 0.51–0.86 of control.

---

## 💡 Clinical & Regulatory Implications
The PBPK model predicts that coadministration of strong or moderate CYP3A4 inhibitors with pirtobrutinib 200 mg QD increases AUC by 1.20- to 1.73-fold, while moderate and weak inducers decrease AUC to 0.51–0.86 of control. These predictions, combined with exposure-response relationships for safety/efficacy, informed dosing recommendations in the product label. For example, dose reductions may be warranted with strong inhibitors, while dose increases may be needed with strong inducers. The model also confirms that pirtobrutinib is a net weak CYP3A4 inhibitor (midazolam AUC ratio 1.12 IV, 1.70 oral), which has implications for coadministered sensitive CYP3A4 substrates.

---

### Strengths & Limitations

#### Strengths
- Comprehensive integration of in vitro, clinical PK, and DDI data to build a mechanistic model.
- Pragmatic approach to handling concurrent CYP3A4 inhibition and induction by fitting TDI parameters to clinical data.
- Successful verification against multiple independent clinical studies (single-dose, multiple-dose, and DDI with midazolam).
- Use of sensitivity analyses to estimate key parameters ($fm_{CYP3A4}$) and assess robustness.
- Direct regulatory impact: model predictions informed dosing recommendations in the product label.
- Clear and logical modeling strategy (development, verification, prediction) that follows regulatory guidance.

#### Limitations (Acknowledged by Authors)
- TDI parameters from human liver microsomes overpredict the clinical DDI, requiring fitting of $k_{inact}$ to clinical data.
- The fecal recovery of unchanged pirtobrutinib after IV dosing may be due to degradation of glucuronide conjugates, not solely biliary excretion, introducing uncertainty in $CL_{bile}$.
- The model assumes that the effects of itraconazole and rifampin are solely due to CYP3A4 modulation, ignoring potential P-gp effects (though argued to be minimal).
- The model was not verified in cancer patients; a popPK analysis did not detect the small TDI effect in patients.

#### Limitations (Expert Review)
- The fitted $k_{inact}$ value ($0.056$ $h^{-1}$) is a single point estimate without uncertainty quantification; a Bayesian approach could provide a distribution.
- The model does not explicitly account for the potential impact of UGT induction by rifampin, though a static analysis suggested it is minimal.
- The model's predictive performance for moderate/weak inducers and inhibitors is based on simulations only, without clinical verification.
- The use of a minimal PBPK model (SAC) rather than a full PBPK model may limit mechanistic interpretation of tissue distribution.
- The model assumes a fixed $F_g$ value ($0.96$) estimated from the itraconazole DDI, which may not be constant across different scenarios.

#### Generalizability
The model is developed for healthy volunteers and may not fully capture PK in cancer patients due to potential differences in physiology, concomitant medications, or disease state. The predictions for moderate/weak inducers and inhibitors are based on simulations and have not been clinically verified. The model assumes that the fitted $k_{inact}$ value is generalizable across different DDI scenarios, which may not hold if the balance of inhibition and induction changes with different perpetrators.

---

### Key Equations

**Hepatic Clearance ($CL_H$)**

{% raw %}
$$
CL_H = CL - CL_R
$$
{% endraw %}

Hepatic clearance calculated as total systemic clearance minus renal clearance, assuming no other extrahepatic clearance.

**Hepatic Availability ($F_h$)**

{% raw %}
$$
F_h = 1 - \frac{CL_H}{B:P \times Q_H}
$$
{% endraw %}

Hepatic availability calculated from hepatic clearance, blood-to-plasma ratio, and hepatic blood flow.

**Biliary Clearance ($CL_{bile}$)**

{% raw %}
$$
CL_{\text{bile}} = f_{e,\text{bile}} \times CL
$$
{% endraw %}

Biliary clearance calculated as the fraction of dose excreted unchanged in bile times total systemic clearance.

**$C_{max}$ Ratio Approximation**

{% raw %}
$$
C_{\text{max ratio}} = \frac{1}{X} \times (1 - F_g) + F_g
$$
{% endraw %}

Approximation of the $C_{max}$ ratio in the presence of a CYP3A4 inhibitor, based on intestinal availability ($F_g$) and remaining intestinal CYP3A4 activity ($X$).

**Intestinal Availability ($F_g$) Calculation**

{% raw %}
$$
F_g = \frac{1}{\frac{C_{\text{max ratio}} - X}{1 - X}}
$$
{% endraw %}

Rearranged equation to calculate intestinal availability ($F_g$) from the observed $C_{max}$ ratio and estimated remaining intestinal CYP3A4 activity ($X$).

**Fraction Absorbed ($F_a$)**

{% raw %}
$$
F_a = \frac{F}{F_h \times F_g}
$$
{% endraw %}

Fraction absorbed ($F_a$) calculated from absolute oral bioavailability ($F$), hepatic availability ($F_h$), and intestinal availability ($F_g$).

**Fraction Metabolized by Other Enzymes ($f_{m,other}$)**

{% raw %}
$$
f_{m,\text{other}} = 1 - f_{m,\text{CYP3A4}} - f_{e,\text{urine}} - f_{e,\text{bile}}
$$
{% endraw %}

Fraction of systemic clearance attributed to non-CYP3A4 enzymes (e.g., UGTs, hydrolase), calculated as the remainder after accounting for CYP3A4, renal, and biliary clearance fractions.

---

### Figures & Tables

- **Figure 1**: Schematic of the PBPK modeling strategy: development, verification, and prediction workflow.
  - *Significance*: Provides a clear overview of the stepwise approach used, from model building with in vitro/clinical data to verification with observed DDI studies and final predictions for untested scenarios.
- **Figure 2**: Proposed disposition diagram of pirtobrutinib showing absorption, distribution, metabolism (CYP3A4, UGT, hydrolysis), and excretion (renal, biliary) pathways.
  - *Significance*: Visually summarizes the key clearance pathways and the basis for the PBPK model structure, including the estimated fractions metabolized by each route.
- **Figure 3**: Observed vs. predicted concentration-time profiles after a single 200 mg oral dose of pirtobrutinib alone from three clinical studies.
  - *Significance*: Demonstrates the model's ability to capture single-dose PK across different studies, supporting model verification for the absorption and distribution parameters.
- **Figure 4**: Observed vs. predicted concentration-time profiles at steady state (200 mg QD) with and without TDI parameters.
  - *Significance*: Critically shows the impact of including the fitted TDI ($k_{inact} = 0.056$ $h^{-1}$) to match observed multiple-dose PK, highlighting the need to correct for overprediction from in vitro data.
- **Figure 5**: Forest plot of predicted single-dose pirtobrutinib AUC and $C_{max}$ ratios with various CYP3A4 inhibitors and inducers, compared to observed data for itraconazole and rifampin.
  - *Significance*: Central figure for clinical decision-making, summarizing all predicted DDI magnitudes and providing the basis for dose adjustment recommendations in the label.
- **Table 1**: Pirtobrutinib PBPK model input parameters: physicochemical, absorption, distribution, elimination, and inhibition/induction values.
  - *Significance*: Essential reference for model reproducibility and understanding the source of each parameter (measured, predicted, fitted).
- **Table 2**: Comparison of predicted vs. observed pirtobrutinib PK parameters ($C_{max}$, $AUC$, $t_{max}$) after single and multiple doses across multiple clinical studies.
  - *Significance*: Quantitative verification of the model's predictive performance, showing good agreement (predicted/observed ratios close to 1) for both single-dose and steady-state PK.

---

### Code & Reproducibility Assessment
The study used the Simcyp Simulator (Version 19, Certara), a commercial platform. No custom code or open-source scripts were provided. The PBPK models for perpetrator drugs (e.g., itraconazole, rifampin, midazolam) were either previously published or default Simcyp models. Reproducibility is limited to users with access to Simcyp and the specific model files, which were not shared.

---

### Future Directions
The model could be extended to predict DDIs with other CYP3A4 substrates beyond midazolam, especially those with different gut vs. liver extraction. Further refinement could include incorporating a more mechanistic model of CYP3A4 enzyme turnover to better separate inhibition and induction effects. The uncertainty in the fitted $k_{inact}$ value could be quantified using a Bayesian approach. Additionally, the model could be applied to special populations (e.g., hepatic impairment) or to predict the impact of UGT inhibition if a clinical inhibitor becomes available.

---

### Expert Commentary
This is a textbook example of a regulatory-grade PBPK analysis for a compound with complex CYP3A4 modulation (substrate, TDI, and inducer). The authors' pragmatic approach to handling the overprediction of TDI from microsomal data by fitting $k_{inact}$ to clinical PK is a common and necessary step in industry. The use of the midazolam DDI study to validate the net effect of inhibition/induction is critical and well-executed. The sensitivity analysis on $fm_{CYP3A4}$ and the careful estimation of $F_g$ from the itraconazole $C_{max}$ ratio are methodologically sound. A teaching point is the importance of understanding the interplay between absorption ($F_g$) and metabolism ($fm$) when interpreting DDI results. The model's reliance on a single fitted $k_{inact}$ value, while practical, introduces uncertainty that could be explored with Bayesian methods or more complex mechanistic models of enzyme turnover.

---

### Bottom Line
This paper presents a well-constructed PBPK model for pirtobrutinib that successfully integrates in vitro, clinical PK, and DDI data to predict the net effect of CYP3A4 modulation. The model was used to support regulatory labeling for dose adjustments with CYP3A4 inhibitors and inducers, demonstrating the value of MIDD. The key takeaway for pharmacometricians is the pragmatic approach to handling concurrent CYP3A4 inhibition and induction by fitting the TDI parameter ($k_{inact}$) to clinical data, a common necessity when in vitro assays overpredict DDI magnitude.

---

---

## 📊 Figures

![PBPK modeling strategy.]({{ site.baseurl }}/assets/digests/2026-07-26-application-of-physiologically-based-pharmacokinetic-modeling-to-predict-cyp3a4/figures/fig_01.jpg)

![Proposed disposition diagram of pirtobrutinib.]({{ site.baseurl }}/assets/digests/2026-07-26-application-of-physiologically-based-pharmacokinetic-modeling-to-predict-cyp3a4/figures/fig_02.jpg)

![Observed and predicted concentration‐time profiles of pirtobrutinib after a single oral dose of 200 mg alone. (a) Pirtobrutinib–itraconazole interaction study, (b) pirtobrutinib–ri]({{ site.baseurl }}/assets/digests/2026-07-26-application-of-physiologically-based-pharmacokinetic-modeling-to-predict-cyp3a4/figures/fig_03.jpg)

![Observed and predicted concentration‐time profiles of pirtobrutinib after 200 mg once daily. (a) Pirtobrutinib–midazolam interaction study, pirtobrutinib was dosed alone, (b) pirto]({{ site.baseurl }}/assets/digests/2026-07-26-application-of-physiologically-based-pharmacokinetic-modeling-to-predict-cyp3a4/figures/fig_04.jpg)

![Observed and predicted single dose pirtobrutinib AUC andCmaxratios in the presence of CYP3A4 inhibitors and inducers. CI, confidence interval.]({{ site.baseurl }}/assets/digests/2026-07-26-application-of-physiologically-based-pharmacokinetic-modeling-to-predict-cyp3a4/figures/fig_05.jpg)