---
layout: post
title: "In silico modeling of methadone-related ion current effects to predict QT interval prolongation."
date: 2026-10-14
authors: "Lindsey, Jacob A. et al."
journal: "Journal of Pharmacokinetics and Pharmacodynamics"
doi: "10.1007/s10928-026-10059-2"
paper_type: popk
tags: [popk]
excerpt_text: "This paper uses the ten Tusscher-Noble-Noble-Panfilov (TNNP) 2004 cardiomyocyte model within the Cardiac Safety Simulator to predict methadone-induced QTc prolongation by incorporating inhibition of IKr, IK1, ICaL, and INa. It demonstrates that IK1 blockade contributes comparably to IKr in prolonging QTc, challenging the traditional focus on IKr alone. Pharmacometricians and cardiac safety scientists should read this for a mechanistic, multi-channel approach to in silico proarrhythmia risk assessment."
pdf_path: "/assets/digests/2026-10-14-in-silico-modeling-of-methadone-related-ion-current-effects-to-predict-qt/PMx_In_silico_modeling_of_methadonerelated_i_20261014.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper uses the ten Tusscher-Noble-Noble-Panfilov (TNNP) 2004 cardiomyocyte model within the Cardiac Safety Simulator to predict methadone-induced QTc prolongation by incorporating inhibition of IKr, IK1, ICaL, and INa. It demonstrates that IK1 blockade contributes comparably to IKr in prolonging QTc, challenging the traditional focus on IKr alone. Pharmacometricians and cardiac safety scientists should read this for a mechanistic, multi-channel approach to in silico proarrhythmia risk assessment.

---

### Executive Summary
The authors developed a computational electrophysiology model to predict methadone-induced QT interval prolongation by integrating in vitro ion current inhibition data (IC50 and Hill coefficients) for IKr, IK1, ICaL, and INa into the TNNP 2004 human ventricular cardiomyocyte model. Single-cell action potential simulations reproduced experimental APD90 trends at therapeutic concentrations, and pseudo-ECG simulations in a virtual population matched clinical QTc values within 1.5% across four concentration ranges. Stepwise inhibition analyses revealed that IK1 and IKr contribute nearly equally to QTc prolongation, while ICaL inhibition shortens the interval, particularly at high concentrations. The study underscores the importance of multi-channel assessment in cardiac safety and supports the inclusion of IK1 in translational in silico models.

---

### Scientific Context & Motivation
Drug-induced QT prolongation is a major cause of drug attrition and post-marketing withdrawal. Historically, IKr (hERG) blockade has been the primary focus, but the CiPA initiative emphasizes multi-channel effects. Methadone is known to prolong QTc, but the relative contributions of non-IKr currents, especially IK1, have been unclear. This study addresses the gap by using a mechanistic in silico model to isolate the effects of individual ion currents on APD90 and QTc, validating against clinical data, and providing a framework for comprehensive torsadogenic risk assessment.

---

## ⚡ Methodological Snapshot
The study used the Cardiac Safety Simulator (CSS) v2.2 with the ten Tusscher-Noble-Noble-Panfilov (TNNP) 2004 human ventricular cardiomyocyte model. Single-cell action potentials were simulated in 20 virtual midmyocardial cells per concentration, incorporating methadone-induced inhibition of IKr, IK1, ICaL, and INa using literature-derived IC50 and Hill coefficients. Pseudo-ECGs were generated from a 1D strand of ventricular tissue with transmural heterogeneity (50% endocardial, 30% midmyocardial, 20% epicardial) and a virtual population created using Simcyp to match a clinical study (Eap et al.). QTc was corrected using Bazett's formula. Model performance was assessed by comparing simulated APD90 and QTc to observed data, and stepwise inhibition simulations isolated individual ion current contributions.

---

## 🏗️ Structural Model Breakdown
The TNNP 2004 model represents a human ventricular cardiomyocyte with 12 ion currents: IKr, IKs, Ito, IK1, INa, ICaL, INaCa, INaK, IpCa, IpK, IbCa, IbNa. The total ionic current Iion is the sum of these. Methadone-induced inhibition was applied to IKr, IK1, ICaL, and INa using the inhibition factor equation. For single-cell simulations, midmyocardial cells were used. For pseudo-ECG, a 1D strand with transmural heterogeneity (endocardial, midmyocardial, epicardial) and a diffusion coefficient of 0.0016 cm²/ms was used. The String Length Sjogren model determined ventricular wall thickness based on age and sex. Bazett's formula was used for heart rate correction.

---

### Detailed Methodological Analysis

#### Modeling Approach
The TNNP 2004 model was selected after comparing with O'Hara-Rudy and TNNP 2006 models based on agreement with clinical QTc data. The model includes 12 ion currents; methadone effects were applied to IKr, IK1, ICaL, and INa using an inhibition factor equation. Single-cell AP simulations used 20 virtual midmyocardial cells with physiological variability (age, sex, ion concentrations). Pseudo-ECG simulations used a 1D strand with the String Length Sjogren model for ventricular wall thickness and transmural cell type distribution. Simulations were performed in CSS v2.2 with default numerical settings.

#### Data Sources
In vitro IC50 and Hill coefficient data were extracted from published studies (Klein et al. for IK1, and others for IKr, ICaL, INa). Clinical validation data came from Eap et al. (179 chronic methadone users with plasma concentrations and QTc). APD90 validation used Klein et al. (swine cardiomyocytes). Subject-level data were digitized from figures using WebPlotDigitizer.

#### Estimation Methods
No parameter estimation was performed; all model parameters were fixed from literature. The inhibition factor equation was used to compute current block at given concentrations. Simulations were run with fixed time steps and solver tolerances.

#### Model Evaluation
Model performance was evaluated by comparing simulated APD90 percent changes to observed values using Student's t-test, and QTc intervals across concentration ranges using two-way ANOVA with Tukey's HSD. Linear regression was used to compare QTc vs concentration slopes and intercepts. Goodness-of-fit plots of $\Delta QTc$ were also used.

#### Covariate Analysis
Physiological variability was incorporated via age and sex effects on cardiomyocyte volume, area, and ion concentrations. No formal covariate analysis was performed; the virtual population was matched to the reference study demographics.

---

### Statistical Rigor Assessment
The study used appropriate statistical tests: Student's t-test for APD90 comparisons, two-way ANOVA with Tukey's HSD for QTc comparisons across groups. The sample size of 20 virtual cells per concentration and 3 virtual patients per observed concentration may be limited, but the model predictions were consistent. The lack of individual-level clinical data prevented assessment of inter-individual variability. Sensitivity analyses were not explicitly reported, though alternative ICaL IC50 values were tested and did not alter conclusions. The use of digitized data from figures introduces potential measurement error, but the close agreement with observed data supports robustness.

---

## 📊 Key Findings
The final ECG model predicted QTc intervals within 1.5% of observed clinical data across four methadone concentration ranges (0-0.75, 0.75-1.25, 1.25-2, 2-5.15 µM). At 1 µM, simulated APD90 increased from 356 ms to 372 ms, with IKr and IK1 inhibition contributing 19 ms and 12 ms, respectively, while ICaL inhibition shortened APD90 by 17 ms. In pseudo-ECG simulations, isolated IK1 inhibition produced QTc prolongation comparable to IKr (422 ms vs 418 ms at median concentration), and in all concentration ranges IK1 alone caused greater $\Delta QTc$ than IKr alone. ICaL inhibition shortened QTc, and INa had negligible effect. The linear regression slopes for observed and simulated QTc vs concentration were 8.83 and 9.28 ms/µM, respectively, with intercepts of 409 and 407 ms.

---

## 💡 Clinical & Regulatory Implications
The findings suggest that methadone's QT prolongation is not solely due to IKr blockade; IK1 inhibition contributes equally. This has implications for risk stratification in methadone patients, particularly those with conditions affecting IK1 (e.g., hypokalemia). The model supports the use of multi-channel in silico assessment in regulatory submissions, potentially reducing the need for TQT studies. For dosing, the concentration-dependent QTc prolongation suggests that lower methadone doses or therapeutic drug monitoring could mitigate risk, though no specific dosing recommendations are made. The study also highlights the importance of considering ICaL blockade, which may attenuate QT prolongation at high concentrations, complicating risk assessment.

---

### Strengths & Limitations

#### Strengths
- Comprehensive multi-channel approach incorporating IKr, IK1, ICaL, and INa, aligning with CiPA recommendations.
- Validation against both cellular (APD90) and clinical (QTc) data, with QTc predictions within 1.5% of observed values.
- Stepwise isolation of individual ion current contributions provides mechanistic insight not achievable in vitro.
- Use of a virtual population with physiological variability (age, sex, ion concentrations) enhances translational relevance.
- Transparent model selection process comparing three cardiomyocyte models.

#### Limitations (Acknowledged by Authors)
- Simulations based on racemic methadone; enantiomer-specific effects not evaluated due to missing IC50 data.
- TNNP model lacks INaL, which may affect behavior at high concentrations, though ICaL blockade likely dominates.
- APD90 validation used swine cardiomyocytes, with interspecies differences limiting direct comparison.
- Model parameters represent Northern European physiology; extrapolation to other populations requires caution.
- Grouped comparisons rather than individual-level predictions due to lack of subject-level demographic data.

#### Limitations (Expert Review)
- The IC50 for IK1 was derived from a single study, increasing parameter uncertainty.
- Hill coefficients were fixed from literature and not fitted, potentially affecting concentration-response shape.
- The virtual population used only three virtual patients per observed concentration, which may underrepresent inter-individual variability.
- QTc correction used Bazett's formula, which is known to overcorrect at high heart rates; other corrections (Fridericia) were not tested.
- The model does not include organ-level effects (e.g., autonomic tone, structural heart disease) that could influence QT in real patients.

#### Generalizability
The findings are specific to methadone but the methodology is generalizable to other drugs with multi-channel effects. The TNNP-based CSS platform is widely used for cardiac safety assessment, and the stepwise approach can be applied to any compound with known ion channel inhibition profiles. However, extrapolation to non-Northern European populations or to patients with cardiac comorbidities should be done cautiously.

---

### Key Equations

**Inhibition factor**

{% raw %}
$$
\text{Inhibition factor} = \frac{1}{1 + \left(\frac{IC_{50}}{\text{Concentration} (\mu M)}\right)^{n_H}}
$$
{% endraw %}

Describes the fractional inhibition of an ion current as a function of drug concentration, IC50, and Hill coefficient.

**Total transmembrane ionic current**

{% raw %}
$$\begin{aligned}
I_{ion} \\
&= I_{Kr} + I_{K1} + I_{CaL} + I_{Na} + I_{to} + I_{Ks} + I_{NaCa} + I_{NaK} + I_{pCa} + I_{pK} + I_{bCa} + I_{bNa}
\end{aligned}$$
{% endraw %}

Sum of all individual ion currents in the TNNP model; methadone effects were applied to IKr, IK1, ICaL, and INa.

**Bazett's heart rate correction**

{% raw %}
$$
QTc = \frac{QT}{\sqrt{RR}}
$$
{% endraw %}

Standard formula used to correct QT interval for heart rate, as applied in the reference clinical study.

**Observed QTc-concentration regression**

{% raw %}
$$
QTc = 409.06 + 8.83 \cdot C
$$
{% endraw %}

Linear regression fit to observed clinical data (Eap et al.) relating QTc (ms) to methadone concentration C (µM).

**Simulated QTc-concentration regression**

{% raw %}
$$
QTc = 407.57 + 9.28 \cdot C
$$
{% endraw %}

Linear regression fit to simulated pseudo-ECG data, showing close agreement with observed slope and intercept.

---

### Figures & Tables

- **Figure 1**: Simulated action potential duration at 90% repolarization (APD90) at baseline and with methadone, and contributions of individual ion current inhibition (IKr, IK1, ICaL, INa) to APD90 changes.
  - *Significance*: Demonstrates that IKr and IK1 inhibition prolong APD90 similarly, while ICaL shortens it, providing mechanistic insight at the cellular level.
- **Figure 2**: Linear regression of QTc vs methadone concentration for observed clinical data and simulated pseudo-ECG data.
  - *Significance*: Shows close agreement between simulated and observed QTc trends, with slopes of 9.28 and 8.83 ms/µM, respectively.
- **Figure 3**: Goodness-of-fit plot of predicted $\Delta QTc$ vs observed $\Delta QTc$, with most points within 10 ms.
  - *Significance*: Validates the model's ability to predict concentration-dependent QTc changes at the individual level.
- **Figure 4**: Predicted $\Delta QTc$ interval trend across the full range of methadone concentrations.
  - *Significance*: Illustrates the concentration-dependent increase in QTc prolongation predicted by the full multi-channel model.
- **Figure 5**: Simulated ECG traces for a virtual patient at median methadone concentration, showing full model effect and isolated ion current inhibition effects on QTc and T-wave morphology.
  - *Significance*: Highlights that IKr and IK1 produce similar QTc prolongation but different T-wave morphologies, and that ICaL shortens QTc.
- **Table 1**: IC50 and Hill coefficient values for methadone on IKr, IK1, ICaL, and INa extracted from literature.
  - *Significance*: Provides the parameter inputs for the model; shows consistency of IKr data and single-source IK1 data.
- **Table 2**: Comparison of observed (Klein et al.) and simulated APD90 percent changes at 0.1, 1, and 10 µM methadone.
  - *Significance*: Shows model captures therapeutic concentration trends but not the supratherapeutic reversal seen in swine cells.
- **Table 3**: Demographic and clinical characteristics of the virtual population compared to the Eap et al. study population.
  - *Significance*: Confirms that the virtual population closely matches the reference study, supporting the validity of QTc comparisons.
- **Table 4**: Mean QTc intervals for observed and simulated data across four methadone concentration ranges.
  - *Significance*: Demonstrates the model's accuracy, with deviations less than 1.5% in all ranges.
- **Table 5**: Mean $\Delta QTc$ from baseline for full model and individual ion current inhibitions across concentration ranges.
  - *Significance*: Quantifies the relative contributions of IKr, IK1, ICaL, and INa to QTc prolongation, showing IK1 often exceeds IKr.

---

### Future Directions
Future studies should incorporate enantiomer-specific IC50 data for methadone to assess stereoselective effects. Inclusion of INaL and other currents (e.g., IKs, Ito) may improve predictions at supratherapeutic concentrations. Validation against individual patient data with known demographics would enable personalized risk assessment. Extending the model to other drugs with mixed ion channel profiles could further establish the generalizability of the approach. Additionally, linking QTc predictions to TdP risk using metrics like the TdP score could enhance regulatory decision-making.

---

### Expert Commentary
This paper is a timely contribution to the shift toward mechanistic, multi-channel cardiac safety assessment. The finding that IK1 contributes comparably to IKr in methadone-induced QTc prolongation is clinically important, as it suggests that hERG-focused screening may underestimate torsadogenic risk for drugs with IK1 activity. The stepwise inhibition approach is elegant and provides a template for deconvoluting complex pharmacology. However, the reliance on a single IK1 IC50 and the use of swine APD90 data are limitations that should be addressed in future work. The validation against clinical QTc data within 1.5% is impressive and supports the use of such models in regulatory submissions, particularly in the context of ICH E14/S7B revisions. I would recommend this paper to anyone involved in cardiac safety prediction or QSP modeling of drug effects.

---

### Bottom Line
This study provides strong evidence that methadone-induced QTc prolongation is driven by both IKr and IK1 blockade, with ICaL inhibition partially offsetting the effect. The in silico framework, validated against clinical data, demonstrates the value of multi-channel modeling for cardiac safety assessment. For pharmacometricians, this work reinforces the need to incorporate IK1 (and other non-hERG currents) in translational models and highlights the utility of mechanistic simulations to deconvolute complex drug effects on cardiac repolarization.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-10-14-in-silico-modeling-of-methadone-related-ion-current-effects-to-predict-qt/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-10-14-in-silico-modeling-of-methadone-related-ion-current-effects-to-predict-qt/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-10-14-in-silico-modeling-of-methadone-related-ion-current-effects-to-predict-qt/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-10-14-in-silico-modeling-of-methadone-related-ion-current-effects-to-predict-qt/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-10-14-in-silico-modeling-of-methadone-related-ion-current-effects-to-predict-qt/figures/fig_05.png)