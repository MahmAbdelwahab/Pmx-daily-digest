---
layout: post
title: "Pharmacometric-Based Evaluation of Salmeterol and Its Metabolite α-Hydroxysalmeterol in Plasma and Urine: Practical Implications for Doping Control"
date: 2026-05-30
authors: "Thoueille P, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, DOI: 10.1002/psp4.70187"
doi: "10.1002/psp4.70187"
paper_type: popk
tags: [popk]
excerpt_text: "This paper presents a population PK model for salmeterol and its major metabolite α-hydroxysalmeterol in plasma and urine, developed to evaluate the current WADA minimum reporting level (MRL) of 10 ng/mL for doping control. The model integrates data from six studies (92 individuals) and reveals that athletes have higher clearance and urinary excretion rates, leading to higher urine concentrations. Key finding: therapeutic doses (100 μg twice daily) are unlikely to exceed the MRL, but prohibited doses (200 μg twice daily) have a low probability of exceeding it, suggesting the MRL may need refinement or that the metabolite could serve as a more sensitive marker."
pdf_path: "/assets/digests/2026-05-30-pharmacometric-based-evaluation-of-salmeterol-and-its-metabolite/PMx_PharmacometricBased_Evaluation_of_Salmet_20260530.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a population PK model for salmeterol and its major metabolite α-hydroxysalmeterol in plasma and urine, developed to evaluate the current WADA minimum reporting level (MRL) of 10 ng/mL for doping control. The model integrates data from six studies (92 individuals) and reveals that athletes have higher clearance and urinary excretion rates, leading to higher urine concentrations. Key finding: therapeutic doses (100 μg twice daily) are unlikely to exceed the MRL, but prohibited doses (200 μg twice daily) have a low probability of exceeding it, suggesting the MRL may need refinement or that the metabolite could serve as a more sensitive marker.

---

### Executive Summary
This study develops a comprehensive population pharmacokinetic (popPK) model for salmeterol and its metabolite α-hydroxysalmeterol in both plasma and urine, using pooled data from six clinical studies involving healthy volunteers, asthmatics, and athletes. The model employs a two-compartment disposition for salmeterol with intravenous-like bolus absorption, complete conversion to the metabolite, and separate urine compartments with physiologic micturition approximation. Covariate analysis identified that athletes/endurance-trained individuals have 63% higher salmeterol clearance and 191% higher urinary excretion rate compared to other subjects, resulting in higher urine concentrations. Model-based simulations demonstrate that therapeutic doses (up to 200 μg/day) are unlikely to produce urine concentrations exceeding the current WADA MRL of 10 ng/mL, while prohibited doses (400 μg/day) have only a 3-4% probability of exceeding it. The authors propose that the current MRL could be refined by adjusting the dosing rule (e.g., 100 μg per 12-hour period) or by considering α-hydroxysalmeterol as an alternative analytical target due to its higher and less variable urine concentrations.

---

### Scientific Context & Motivation
Salmeterol is a long-acting β2-agonist used for asthma, included on WADA's Prohibited List with a dosing limit of 200 μg per 24 hours via inhalation. Currently, there is no urinary threshold for salmeterol; instead, a minimum reporting level (MRL) of 10 ng/mL is applied practically by WADA-accredited laboratories to flag potential doping. This MRL was based on limited pharmacokinetic data from the time of salmeterol's commercialization. With more data now available, there is a need to evaluate whether the MRL adequately discriminates between permitted therapeutic use and prohibited supratherapeutic use. Additionally, the metabolite α-hydroxysalmeterol, which accounts for the majority of the excreted dose, has not been systematically evaluated as a doping marker. This study addresses these gaps by developing a robust popPK model to simulate expected urine concentrations under various dosing scenarios and populations.

---

## ⚡ Methodological Snapshot
A population PK model was developed using NONMEM (ADVAN13) with simultaneous fitting of salmeterol and α-hydroxysalmeterol concentrations in plasma and urine. The structural model includes two-compartment disposition for salmeterol with IV bolus absorption, complete conversion to metabolite, and separate urine compartments with physiologic urine production. Covariates (subject type, device) were tested via stepwise forward addition/backward elimination. Model evaluation used pcVPCs and bootstrap (2000 replicates). Monte Carlo simulations (1000-10,000 individuals) were performed to predict urine concentrations under various dosing regimens.

---

## 🏗️ Structural Model Breakdown
The model consists of five compartments: (1) Central salmeterol ($A_1$) with volume $V_1/F$, receiving IV bolus dose. (2) Peripheral salmeterol ($A_2$) with volume $V_2/F$, connected via $Q/F$. (3) Metabolite plasma ($A_3$) with volume $V_3/F = V_1/F$, formed from $A_1$ via $k_{13}$. (4) Salmeterol urine ($A_4$) with rate $k_{14}$ from $A_1$. (5) Metabolite urine ($A_5$) with rate $k_{35}$ from $A_3$. Urine volumes are either measured ($V_4/F$, $V_5/F$) or derived from constant production rate ($UR_{PROD}$) and time interval. Elimination from plasma compartments: salmeterol via $CL_S/F$ and conversion; metabolite via $CL_{\alpha}/F$. The model assumes complete and irreversible conversion of salmeterol to α-hydroxysalmeterol.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling using NONMEM v7.5.1 with ADVAN13 subroutine (system of ODEs). The structural model: two-compartment for salmeterol plasma (central $V_1/F$, peripheral $V_2/F$, intercompartmental clearance $Q/F$), complete and irreversible conversion to α-hydroxysalmeterol ($k_{13}$) with one-compartment for metabolite ($V_3/F = V_1/F$), and urine compartments for both ($k_{14}$, $k_{35}$). Urine volume modeled using constant production rate ($UR_{PROD}$) when not measured. IIV assumed log-normal on all parameters. RUV modeled with proportional error, regrouped by matrix and compound, with correlation between salmeterol and metabolite RUV for one study.

#### Data Sources
Pooled data from six studies: 92 individuals (healthy, asthmatics, endurance-trained athletes). Total 1175 concentrations (275 salmeterol plasma, 398 salmeterol urine, 185 metabolite plasma, 317 metabolite urine). Doses: 50-400 μg single or multiple doses via MDI or DPI. Urine volumes available in two studies; USG correction applied to 42-50% of urine concentrations. One study (Bozzolino et al.) excluded due to unreliable dosing time information.

#### Estimation Methods
First-order conditional estimation (FOCE) with interaction. BQL data handled using M1 method (discard BQL) after M3 and M6 were found unsuitable due to fluctuating concentrations. Model selection based on ΔOFV (p<0.05 forward, p<0.01 backward) and AIC for non-nested models.

#### Model Evaluation
Prediction-corrected visual predictive checks (pcVPCs) comparing 5th, 50th, 95th percentiles. Bootstrap with 2000 replicates to obtain median and 95% CI for parameters. Goodness-of-fit plots (observed vs. predicted, residuals). Shrinkage assessment. Parameter precision via RSE.

#### Covariate Analysis
Two categorical covariates tested: subject type (healthy, asthmatic, athlete) and device (MDI, DPI). Forward selection (p<0.05) and backward deletion (p<0.01). Final model retained athlete effect on $CL_S/F$ (63% increase) and $k_{14}$ (191% increase). No significant device effect. Asthmatics and healthy participants regrouped as reference.

---

### Statistical Rigor Assessment
The statistical methods are appropriate for the data structure. FOCE with interaction is standard for nonlinear mixed-effects models. The use of ΔOFV for model selection is conventional, though the small sample size (92 individuals) may increase the risk of overfitting. Bootstrap validation (2000 replicates) provides robust uncertainty estimates. pcVPCs are appropriate for evaluating model performance across different matrices. The handling of BQL data via M1 (discarding) is a limitation acknowledged by the authors; M3/M6 were attempted but not robust due to data characteristics. The correlation between RUVs for salmeterol and metabolite in one study is a reasonable approach to account for correlated measurement errors. The 99.9th percentile simulations are sensitive to distributional assumptions and should be interpreted cautiously, as noted by the authors.

---

## 📊 Key Findings
The final popPK model successfully described salmeterol and α-hydroxysalmeterol concentrations in plasma and urine. Key findings include: (1) Athletes/endurance-trained individuals have 63% higher apparent clearance ($CL_S/F$) and 191% higher urinary excretion rate constant ($k_{14}$) compared to healthy participants and asthmatics, leading to higher urine concentrations. (2) No significant effect of inhalation device (MDI vs. DPI) was found. (3) Model-based simulations show that under therapeutic doses (100 μg twice daily), the median maximum salmeterol urine concentration is approximately 3.6 ng/mL (95% PI: 1.4–9.4), well below the 10 ng/mL MRL. (4) Under prohibited doses (200 μg twice daily), the median maximum concentration is 7.2 ng/mL (95% PI: 2.7–19.2), with only 3-4% probability of exceeding the MRL at 30 minutes post-dose. (5) α-Hydroxysalmeterol urine concentrations are higher and less variable over time, making it a potentially more robust marker for doping control. (6) No significant drug accumulation is expected with repeated dosing.

---

## 💡 Clinical & Regulatory Implications
The study has direct implications for anti-doping policy. Current MRL of 10 ng/mL appears safe (low false positive risk) but has limited sensitivity for detecting prohibited use (only 3-4% probability of exceedance at 400 μg/day). Proposed refinements: (1) Change dosing rule from 200 μg/24h to 100 μg/12h to better distinguish therapeutic from supratherapeutic use. (2) Consider using α-hydroxysalmeterol as a complementary marker due to higher and less variable urine concentrations. (3) Use Bayesian approaches with repeated measurements to improve individual-level discrimination. For clinicians, the model confirms that standard therapeutic doses (100 μg twice daily) produce urine concentrations well below the MRL, so athletes using salmeterol as prescribed should not face doping violations. The higher clearance in athletes suggests they may require higher doses for therapeutic effect, but this does not affect the doping threshold implications.

---

### Strengths & Limitations

#### Strengths
- Comprehensive modeling of both parent drug and metabolite in plasma and urine simultaneously, providing a holistic PK description.
- Pooled analysis of six diverse studies including healthy subjects, asthmatics, and athletes, enhancing generalizability.
- Use of physiologic urine production modeling to handle studies without urine volume data.
- Internal validation via bootstrap (2000 replicates) and prediction-corrected VPCs, showing good parameter precision and model adequacy.
- Clinically relevant simulations addressing a real-world anti-doping question with clear regulatory implications.

#### Limitations (Acknowledged by Authors)
- No external validation was performed; only internal validation techniques were used.
- Plasma α-hydroxysalmeterol data were only available from one study (endurance-trained individuals), limiting estimation of IIV on metabolite parameters.
- The 99.9th percentile predictions have poor precision and are sensitive to distributional assumptions in the tails.
- Limited covariate data (only two categorical covariates: subject type and device) due to data availability.
- BQL data handling used M1 method (discarding BQL) because M3 and M6 were not robust due to fluctuating concentrations.

#### Limitations (Expert Review)
- The assumption of complete and irreversible conversion of salmeterol to α-hydroxysalmeterol may oversimplify the metabolic pathway; other minor metabolites exist.
- The intravenous-like bolus absorption assumption, while pragmatic, ignores the potential contribution of swallowed drug absorption, which could affect later time points.
- Urine production rate ($UR_{PROD}$) was assumed constant, which may not capture diurnal variation or hydration status effects beyond USG correction.
- The model does not account for potential differences in lung deposition or inhalation technique, which could affect bioavailability and PK.
- The athlete group definition is heterogeneous (endurance-trained vs. other athletes) and may not capture all training-related physiological changes.
- Sample size (92 individuals) is modest for a popPK model with multiple compartments and metabolite data, potentially limiting power for covariate detection.

#### Generalizability
The model is based on data from healthy volunteers, asthmatics, and endurance-trained athletes, but may not fully generalize to other populations such as elite athletes from different sports, patients with renal impairment, or individuals using different inhaler devices. The lack of external validation limits confidence in predictions for unobserved populations. However, the inclusion of multiple studies and internal validation supports reasonable generalizability within the studied populations.

---

### Key Equations

**Salmeterol plasma two-compartment model**

{% raw %}
$$
\frac{dA_1}{dt} = -\left(\frac{CL_S}{V_1} + \frac{Q}{V_1}\right) \cdot A_1 + \frac{Q}{V_2} \cdot A_2 - k_{13} \cdot A_1 - k_{14} \cdot A_1
$$
{% endraw %}

Differential equation for salmeterol amount in central compartment ($A_1$), with elimination ($CL_S$), distribution to peripheral compartment ($Q$), conversion to metabolite ($k_{13}$), and urinary excretion ($k_{14}$).

**Peripheral compartment for salmeterol**

{% raw %}
$$
\frac{dA_2}{dt} = \frac{Q}{V_1} \cdot A_1 - \frac{Q}{V_2} \cdot A_2
$$
{% endraw %}

Differential equation for salmeterol amount in peripheral compartment ($A_2$).

**α-Hydroxysalmeterol plasma compartment**

{% raw %}
$$
\frac{dA_3}{dt} = k_{13} \cdot A_1 - \frac{CL_{\alpha}}{V_3} \cdot A_3 - k_{35} \cdot A_3
$$
{% endraw %}

Differential equation for metabolite amount in plasma ($A_3$), formed from salmeterol ($k_{13}$) and eliminated via clearance ($CL_{\alpha}$) and urinary excretion ($k_{35}$). $V_3$ assumed equal to $V_1$.

**Urine compartment for salmeterol**

{% raw %}
$$
\frac{dA_4}{dt} = k_{14} \cdot A_1
$$
{% endraw %}

Differential equation for salmeterol amount in urine compartment ($A_4$), with urinary excretion rate constant $k_{14}$.

**Urine compartment for α-hydroxysalmeterol**

{% raw %}
$$
\frac{dA_5}{dt} = k_{35} \cdot A_3
$$
{% endraw %}

Differential equation for metabolite amount in urine compartment ($A_5$), with urinary excretion rate constant $k_{35}$.

**Urine concentration calculation**

{% raw %}
$$
C_{\text{urine}} = \frac{A_{\text{urine}}}{V_{\text{urine}}}
$$
{% endraw %}

Urine concentration is calculated by dividing the amount in the urine compartment by the urine volume produced in the collection interval. When urine volume is not measured, $V_{\text{urine}}$ is derived from a constant urine production rate ($UR_{PROD}$) and time interval.

**Covariate effect on clearance**

{% raw %}
$$
CL_S = \theta_{CL} \times (1 + \theta_{\text{athlete}} \times I_{\text{athlete}})
$$
{% endraw %}

Apparent clearance of salmeterol is modeled with a fractional change for athletes ($\theta_{\text{athlete}} = 0.63$, i.e., 63% higher). $I_{\text{athlete}}$ is an indicator variable.

**Covariate effect on urinary excretion rate**

{% raw %}
$$
k_{14} = \theta_{k14} \times (1 + \theta_{\text{athlete,k14}} \times I_{\text{athlete}})
$$
{% endraw %}

Urinary excretion rate constant for salmeterol is modeled with a fractional change for athletes ($\theta_{\text{athlete,k14}} = 1.91$, i.e., 191% higher).

---

### Figures & Tables

- **Figure 1**: Observed concentrations versus time after dose for salmeterol and α-hydroxysalmeterol in plasma (upper panels) and urine (lower panels).
  - *Significance*: Provides visual overview of the data used for model development, showing the concentration ranges and time profiles for both analytes in both matrices.
- **Figure 2**: Structural model diagram showing compartments for salmeterol (central and peripheral), α-hydroxysalmeterol (plasma), and urine compartments for both, with rate constants.
  - *Significance*: Illustrates the final model structure, including absorption as IV bolus, two-compartment disposition, conversion to metabolite, and urinary excretion.
- **Figure 3**: Model-based simulations of urine concentrations (USG-corrected) for salmeterol (panel A) and α-hydroxysalmeterol (panel B) after 1 week of various dosing regimens in athletes.
  - *Significance*: Key figure showing predicted urine concentrations under permitted and prohibited doses, with the current MRL of 10 ng/mL indicated, demonstrating the low probability of exceedance.
- **Table 1**: Summary of studies included in the analysis, with number of subjects, type of individuals, device, study plan, and available concentrations.
  - *Significance*: Documents the data sources and their characteristics, essential for understanding the pooled dataset and potential heterogeneity.
- **Table 2**: Final model parameter estimates with RSE and bootstrap results (median and 95% CI) for all structural and variability parameters.
  - *Significance*: Provides the quantitative basis of the model, including clearance, volumes, rate constants, IIV, and residual error components, with bootstrap validation.
- **Table 3**: Predicted percentiles (2.5%, 50%, 97.5%, 99%, 99.9%) of salmeterol and α-hydroxysalmeterol urine concentrations directly after inhalation and at 30 min post-dose for various regimens in athletes and healthy participants.
  - *Significance*: Central table for evaluating the MRL, showing that therapeutic doses yield concentrations below 10 ng/mL at the 99.9th percentile, while prohibited doses have a small probability of exceedance.
- **Table S1**: Supplementary table (referenced in text) showing predicted α-hydroxysalmeterol urine concentrations across dosing regimens.
  - *Significance*: Provides additional data supporting the potential use of the metabolite as a doping marker.
- **Figure S2**: Goodness-of-fit diagnostic plots for the final model.
  - *Significance*: Validates model adequacy through observed vs. predicted plots and residuals.
- **Figure S3**: Distribution of individual $\eta$ estimates before and after covariate inclusion.
  - *Significance*: Shows improvement in IIV distribution with covariate effects (athlete status on $CL_S$ and $k_{14}$).
- **Figure S4**: Prediction-corrected visual predictive checks (pcVPCs) for the final model.
  - *Significance*: Demonstrates model performance in capturing the central tendency and variability of the observed data.
- **Figure S5**: Simulated urine concentrations comparing athletes vs. asthmatics/healthy participants under 100 μg every 12 h.
  - *Significance*: Illustrates the impact of athlete status on urine concentrations, supporting the covariate effects.

---

### Code & Reproducibility Assessment
The analysis used NONMEM v7.5.1, PsN v5.3.1, Pirana v2.9.3, and R v4.1.1. No code or data are publicly available (stated 'No additional data is available'). The NONMEM code is partially provided in Data S1 (supplementary material), but full reproducibility is limited.

---

### Supplementary Materials
Supplementary materials include Data S1 (NONMEM code and data formatting details), Table S1 (additional simulation results), and Figures S2-S5 (diagnostics and additional simulations). These provide essential details for reproducing the analysis and understanding model behavior.

---

### Future Directions
Future studies should collect more data across diverse athlete populations (e.g., different sports, training intensities) and include renal function markers to refine covariate effects. External validation with independent datasets is needed. The utility of α-hydroxysalmeterol as a doping marker should be further explored with dedicated analytical method development. Bayesian approaches using individual PK parameters from repeated measurements could enhance discrimination between therapeutic and prohibited use. Additionally, physiologically-based pharmacokinetic (PBPK) modeling could incorporate inhalation dynamics and lung deposition variability.

---

### Expert Commentary
This is a well-executed pharmacometric analysis addressing a practical anti-doping question. The simultaneous modeling of parent and metabolite in plasma and urine is methodologically sound, and the use of physiologic urine production to handle missing urine volumes is clever. The finding that athletes have higher clearance and urinary excretion is intriguing and may reflect training-induced changes in hepatic blood flow or renal function. However, the low probability of exceeding the MRL even at prohibited doses (3-4%) highlights the challenge of using a single threshold for a drug with rapid clearance and low urine concentrations. The suggestion to use the metabolite is promising, but its higher concentrations come with the need for validated analytical methods. From a regulatory perspective, adjusting the dosing rule (e.g., 100 μg per 12 hours) may be more practical than changing the MRL. The paper also underscores the importance of considering population differences in PK when setting doping thresholds.

---

### Bottom Line
This popPK model provides a robust framework for evaluating salmeterol urine concentrations in the context of anti-doping. The current WADA MRL of 10 ng/mL appears adequate to avoid false positives for therapeutic use, but its sensitivity to detect prohibited use (400 μg/day) is low (3-4% probability of exceedance). Refining the dosing rule to 100 μg per 12-hour period or incorporating α-hydroxysalmeterol as a complementary marker could improve doping control. Pharmacometricians should note the successful integration of plasma and urine data with physiologic urine production modeling, and the importance of covariate effects (athlete status) on PK parameters.

---

---

## 📊 Figures

![Observed concentrations versus time after dose for salmeterol and α-hydroxysalmeterol in both plasma (upper panels) and urine (lower panels). Data were retrieved]({{ site.baseurl }}/assets/digests/2026-05-30-pharmacometric-based-evaluation-of-salmeterol-and-its-metabolite/figures/fig_01.jpg)

![Structural model used to describe salmeterol concentration-time profiles. Ax, drug amount in the corresponding compartment, CLS/F, apparent clearance of plasma s]({{ site.baseurl }}/assets/digests/2026-05-30-pharmacometric-based-evaluation-of-salmeterol-and-its-metabolite/figures/fig_02.jpg)

![Model-based simulations of urine concentrations (corrected by the urine specific gravity) following 1 week of administration across different dosing regimens i.]({{ site.baseurl }}/assets/digests/2026-05-30-pharmacometric-based-evaluation-of-salmeterol-and-its-metabolite/figures/fig_03.jpg)