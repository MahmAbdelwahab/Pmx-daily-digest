---
layout: post
title: "Repurposing Oxfendazole for Onchocerciasis: Population Pharmacokinetics of a Tablet Formulation in Healthy African Adults"
date: 2026-05-29
authors: "F.A., A.A., R.M.H., G.N., H.M., S.J., E.A., E.R., J.K., F.B.D.S.R., S.S., I.S., J.T."
journal: "Not specified (likely Clinical Pharmacology & Therapeutics, 2025)"
doi: "N/A"
paper_type: popk
tags: [popk]
excerpt_text: "This first population PK analysis of an oxfendazole tablet formulation in healthy African adults reveals dose-limited bioavailability and substantial interindividual variability. Simulations suggest that 400 mg once daily or 50 mg twice daily for 5 days achieves putative therapeutic exposures (≥200 ng/mL for ≥5 days) with acceptable safety margins. Essential reading for pharmacometricians and clinicians involved in neglected tropical disease drug development and repurposing."
pdf_path: "/assets/digests/2026-05-29-repurposing-oxfendazole-for-onchocerciasis-population-pharmacokinetics-of-a/PMx_Repurposing_Oxfendazole_for_Onchocercias_20260529.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This first population PK analysis of an oxfendazole tablet formulation in healthy African adults reveals dose-limited bioavailability and substantial interindividual variability. Simulations suggest that 400 mg once daily or 50 mg twice daily for 5 days achieves putative therapeutic exposures (≥200 ng/mL for ≥5 days) with acceptable safety margins. Essential reading for pharmacometricians and clinicians involved in neglected tropical disease drug development and repurposing.

---

### Executive Summary
This study presents the first population PK model for oxfendazole and its major metabolites (fenbendazole, oxfendazole sulfone) in healthy African adults using a field-applicable tablet formulation. The model incorporates first-pass metabolism and dose-limited bioavailability, with one-compartment disposition for all analytes. Simulations informed by preclinical efficacy targets (≥200 ng/mL for ≥5 days) identified 400 mg once daily or 50 mg twice daily as promising regimens for Phase 2 evaluation in onchocerciasis patients. Despite substantial variability in exposure, the model provides a quantitative framework for dose selection and supports continued development of oxfendazole as a macrofilaricidal agent.

---

### Scientific Context & Motivation
Onchocerciasis elimination is hampered by the lack of a macrofilaricidal drug capable of killing adult O. volvulus worms; current ivermectin mass drug administration only clears microfilariae and requires repeated treatment over 10–15 years. Oxfendazole, a veterinary benzimidazole anthelminthic, shows macrofilaricidal activity in preclinical models. Prior Phase 1 studies used a liquid formulation in primarily Caucasian volunteers; this study evaluates a tablet formulation in the target African population, addressing the critical gap in formulation-specific pharmacokinetics and population variability to support dose selection for future clinical trials.

---

## ⚡ Methodological Snapshot
Nonlinear mixed-effects modeling (NONMEM 7.4, FOCE-I) of pooled data from 24 healthy African adults receiving 100 mg single dose, 400 mg single dose, or 400 mg once daily for 5 days of an immediate-release tablet. The structural model includes first-order absorption with first-pass metabolism to oxfendazole sulfone, one-compartment disposition for oxfendazole and both metabolites, and linear elimination. Dose-limited bioavailability was modeled using a power function ($F = (Dose/34.7)^{-0.541}$). Allometric scaling $(WT/70)^{0.75}$ on clearances and $(WT/70)^1$ on volumes was applied a priori. Covariate screening via stepwise forward-backward (p<0.05 forward, p<0.001 backward). Model evaluation via prediction-corrected VPCs and nonparametric bootstrap (1000 runs).

---

## 🏗️ Structural Model Breakdown
The final structural model consists of: (1) A depot compartment for oral absorption with first-order rate constant $KA$. (2) First-pass metabolism: a fraction $f_{FP}$ of the absorbed dose directly enters the oxfendazole sulfone compartment, while the remainder ($1-f_{FP}$) enters the oxfendazole central compartment. (3) Oxfendazole central compartment (volume $V_{OXF}/F$) with linear elimination via two parallel pathways: 50% of clearance ($CL_{OXF}/F$) forms fenbendazole, 50% forms oxfendazole sulfone (systemic metabolism). (4) Fenbendazole one-compartment model (volume $V_{FEN}/F$, clearance $CL_{FEN}/F$). (5) Oxfendazole sulfone one-compartment model (volume $V_{SO2}/F$, clearance $CL_{SO2}/F$), receiving input from both first-pass and systemic metabolism. (6) Dose-limited bioavailability: $F = (Dose/34.7)^{-0.541}$, applied to the entire absorption process. (7) Allometric scaling on all clearance (exponent 0.75) and volume (exponent 1) parameters relative to 70 kg body weight. (8) IIV on $F$, $KA$, $f_{FP}$, $CL_{OXF}/F$, $V_{OXF}/F$, $CL_{FEN}/F$, $V_{FEN}/F$, $CL_{SO2}/F$; IOV on $F$ and $KA$. (9) Additive residual error on log scale for each analyte.

---

### Detailed Methodological Analysis

#### Modeling Approach
Population PK model developed in NONMEM 7.4 using first-order conditional estimation with interaction (FOCE-I). Structural model: first-order absorption from depot compartment with first-pass metabolism ($f_{FP}$ fraction to oxfendazole sulfone); one-compartment disposition for oxfendazole, fenbendazole, and oxfendazole sulfone; linear elimination from each compartment. Oxfendazole clearance split equally (50% each) to fenbendazole and oxfendazole sulfone for identifiability. Dose-limited bioavailability incorporated via power function $F = (Dose/34.7)^{-0.541}$ with coefficients fixed from prior study. Allometric scaling: $CL \propto (WT/70)^{0.75}$, $V \propto (WT/70)^1$. Interindividual variability (IIV) and interoccasion variability (IOV) on absorption parameters ($F$, $KA$) and IIV on other PK parameters using exponential error model. Residual variability: additive error on log-transformed concentrations (equivalent to proportional error on linear scale), estimated separately for each compound.

#### Data Sources
Data from the HELP-OFZ Phase 1 study (NCT04920292), a randomized, placebo-controlled, double-blind, single-center trial in 30 healthy African adults (24 active, 6 placebo) conducted in Bagamoyo, Tanzania. Three cohorts: 100 mg single dose, 400 mg single dose, 400 mg once daily for 5 days. Frequent blood sampling: single-dose cohorts at 0, 1, 2, 3, 4, 6, 8, 10, 12, 24, 48 h; multiple-dose cohort with intensive sampling on day 1 and day 5, plus trough samples on days 2–4. Plasma concentrations of oxfendazole, fenbendazole, and oxfendazole sulfone quantified by validated HPLC-MS/MS (LLOQ: 2 ng/mL for oxfendazole, 1 ng/mL for metabolites). 984 post-dose samples (328 per analyte); 8.4% below LLOQ (all fenbendazole formation phase) and omitted.

#### Estimation Methods
First-order conditional estimation with interaction (FOCE-I) in NONMEM 7.4. Model selection based on objective function value (OFV) difference ($\Delta OFV \geq 3.84$ for nested models, p<0.05, 1 df). Automation with Pirana v2.9.9, PsN v5.2, R v4.2.2. Bootstrap with 1000 resampled datasets (638 successful runs) to obtain parameter precision (RSE, 95% CI).

#### Model Evaluation
Goodness-of-fit plots (observed vs. predicted, conditional weighted residuals vs. time/predicted). Prediction-corrected visual predictive checks (VPCs) with 1000 simulations. $\eta$-shrinkage <25% for all parameters except $KA$ (43.7%). $\varepsilon$-shrinkage <15% for all analytes. Bootstrap diagnostics for parameter precision and stability.

#### Covariate Analysis
Stepwise covariate modeling (forward inclusion p<0.05, backward elimination p<0.001). Body weight implemented a priori via allometric scaling. Tested covariates: dose (categorical: 100 vs 400 mg), sex, age. Only dose effect on relative bioavailability ($F$) was significant in forward step ($\Delta OFV = -4.3$) but not retained in backward elimination. Based on prior knowledge and consistency with published power function, dose-limited bioavailability was retained in the final model using the published function with fixed coefficients.

---

### Statistical Rigor Assessment
The analysis uses appropriate nonlinear mixed-effects methodology with FOCE-I for log-transformed data. Model selection based on likelihood ratio test with standard significance thresholds. Bootstrap diagnostics (638/1000 successful runs) show moderate to high precision for most parameters (RSE <32%), though IIV on $F$ has high RSE (53.5%) and wide bootstrap CI (17.6–152.3% CV). The small sample size ($n=24$) limits statistical power for covariate detection; the dose effect on $F$ was included based on prior knowledge despite not meeting backward elimination significance. The high IIV in $F$ is largely driven by one subject; sensitivity analysis excluding this subject reduced IIV to 32.8% but was not adopted as the final model. PTA simulations did not propagate parameter uncertainty, which is a limitation acknowledged by the authors. Sensitivity analyses across body weight and target concentrations strengthen the robustness of dose recommendations. Overall, the statistical approach is sound for an exploratory analysis but would benefit from larger sample sizes and formal uncertainty propagation in future confirmatory studies.

---

## 📊 Key Findings
Oxfendazole exhibited dose-limited bioavailability (52% reduction in relative bioavailability from 100 to 400 mg), slow absorption (median $T_{max}$ ~3.5 h), and moderate apparent clearance (3.54 L/h for a 70 kg adult). Metabolite exposures were substantially lower: oxfendazole sulfone $AUC$ was ~9-fold lower and fenbendazole $AUC$ ~44-fold lower than parent. High interindividual variability in bioavailability (72.7% CV) was observed, largely driven by one outlier. Simulations indicated that 400 mg once daily or 50 mg twice daily for 5 days achieves >90% probability of maintaining plasma concentrations ≥200 ng/mL for ≥5 days, the putative therapeutic target derived from the L. sigmodontis mouse model. Sensitivity analyses across body weights (42–75 kg) and target concentrations (100–2000 ng/mL) supported the robustness of these regimens, though PTA declined at higher body weights and higher target concentrations.

---

## 💡 Clinical & Regulatory Implications
The model supports two dosing regimens for Phase 2 evaluation: 400 mg once daily or 50 mg twice daily for 5 days. Both are predicted to achieve >90% probability of maintaining plasma oxfendazole ≥200 ng/mL for ≥5 days, the putative therapeutic target derived from the L. sigmodontis mouse model. The twice-daily regimen uses a lower total daily dose (100 mg vs 400 mg) due to reduced dose-limited absorption and drug accumulation, potentially offering cost and safety advantages. Safety margins are acceptable based on prior Phase 1 data showing tolerability at single doses up to 60 mg/kg and multiple doses up to 15 mg/kg/day. However, the high interindividual variability in bioavailability (72.7% CV) suggests that some patients may not achieve target exposures, warranting therapeutic drug monitoring in early Phase 2 trials. Body-weight-based dose adjustments may be considered at extremes (e.g., >75 kg), as PTA declined modestly with increasing weight. The model does not support dose recommendations for special populations (renal/hepatic impairment, pediatrics) or with food. The lack of a macrofilaricidal drug for onchocerciasis makes these findings clinically significant, as oxfendazole could potentially shorten treatment duration and improve elimination efforts.

---

### Strengths & Limitations

#### Strengths
- First population PK analysis of oxfendazole tablet formulation in the target African population
- Simultaneous modeling of parent drug and two major metabolites with first-pass metabolism
- Incorporation of dose-limited bioavailability using a published power function, enabling simulations beyond studied doses
- Comprehensive simulation-based dose selection with sensitivity analyses across body weight and target concentrations
- Robust bootstrap diagnostics (638/1000 successful runs) with moderate to high parameter precision (RSE <32% for most parameters)

#### Limitations (Acknowledged by Authors)
- Translation of preclinical efficacy targets from surrogate parasite models (L. sigmodontis) to human onchocerciasis is inherently uncertain
- Small sample size ($n=24$) limits power for covariate detection and generalizability
- Assumption of 50% metabolic fraction for fenbendazole and oxfendazole sulfone formation was necessary for structural identifiability but may not reflect true physiology
- PTA simulations did not propagate parameter uncertainty; confidence intervals around PTA curves were not provided
- Healthy volunteers, not onchocerciasis patients; potential disease-related PK differences
- Potential sample mix-up at a single 6-h time point in two participants was corrected, which may introduce bias

#### Limitations (Expert Review)
- No formal covariate relationships were retained after backward elimination; the dose effect on $F$ was included based on prior knowledge despite not meeting backward elimination significance
- High IIV in bioavailability (72.7% CV) is largely driven by one subject; excluding this subject reduces IIV to 32.8% but was retained, potentially inflating variability estimates
- Lack of a mass balance study leaves the true fraction metabolized unknown
- No evaluation of food effect, which could significantly impact absorption of this BCS class II compound
- Tablet formulation may have slower dissolution compared to the oral suspension used in prior studies, limiting direct comparability
- No data in special populations (renal/hepatic impairment, pediatrics, pregnancy) or onchocerciasis patients

#### Generalizability
Findings are directly applicable to healthy African adults (19–41 years, BMI 18–29.9 kg/m²) residing in Tanzania. Extrapolation to onchocerciasis patients requires caution due to potential disease-related changes in absorption, metabolism, or protein binding. The high variability in exposure suggests that some patients may not achieve target concentrations, and body-weight-based dose adjustments may be needed at extremes. The model may not be generalizable to other ethnicities or formulations without further validation.

---

### Key Equations

**Dose-Limited Bioavailability**

{% raw %}
$$
F = \left(\frac{\text{Dose}}{34.7 \text{mg}}\right)^{-0.541}
$$
{% endraw %}

Power function describing the decrease in relative oral bioavailability with increasing dose, derived from prior SAD study and fixed in the final model.

**Allometric Scaling for Clearance**

{% raw %}
$$
CL = CL_{\text{pop}} \times \left(\frac{WT}{70}\right)^{0.75}
$$
{% endraw %}

Allometric scaling of apparent clearance to a 70 kg standard adult body weight, implemented a priori in the model.

**Allometric Scaling for Volume of Distribution**

{% raw %}
$$
V = V_{\text{pop}} \times \left(\frac{WT}{70}\right)^{1}
$$
{% endraw %}

Allometric scaling of apparent volume of distribution proportional to body weight, implemented a priori.

**Oxfendazole Central Compartment Differential Equation**

{% raw %}
$$
\frac{dA_{\text{OXF}}}{dt} = KA \times (1 - f_{FP}) \times A_{\text{depot}} - \frac{CL_{\text{OXF}}}{V_{\text{OXF}}} \times A_{\text{OXF}}
$$
{% endraw %}

Rate of change of oxfendazole amount in the central compartment, with first-order absorption (fraction ($1-f_{FP}$) escaping first-pass) and linear elimination.

**Fenbendazole Metabolite Compartment Differential Equation**

{% raw %}
$$
\frac{dA_{\text{FEN}}}{dt} = 0.5 \times CL_{\text{OXF}} \times C_{\text{OXF}} - \frac{CL_{\text{FEN}}}{V_{\text{FEN}}} \times A_{\text{FEN}}
$$
{% endraw %}

Rate of change of fenbendazole amount, formed from 50% of oxfendazole clearance, with linear elimination.

**Oxfendazole Sulfone Metabolite Compartment Differential Equation**

{% raw %}
$$
\frac{dA_{\text{SO2}}}{dt} = 0.5 \times CL_{\text{OXF}} \times C_{\text{OXF}} + KA \times f_{FP} \times A_{\text{depot}} - \frac{CL_{\text{SO2}}}{V_{\text{SO2}}} \times A_{\text{SO2}}
$$
{% endraw %}

Rate of change of oxfendazole sulfone amount, formed from both systemic metabolism (50% of oxfendazole clearance) and first-pass metabolism ($f_{FP}$ fraction of absorbed dose), with linear elimination.

**Residual Unexplained Variability (Log-Transformed)**

{% raw %}
$$
\ln(C_{\text{obs}}) = \ln(C_{\text{pred}}) + \varepsilon,   \varepsilon \sim N(0, \sigma^2)
$$
{% endraw %}

Additive residual error model on the natural log scale, equivalent to a proportional error on the original concentration scale.

---

### Figures & Tables

- **Figure 1**: Individual plasma concentration–time profiles of oxfendazole, fenbendazole, and oxfendazole sulfone across the three dosing cohorts (100 mg single dose, 400 mg single dose, 400 mg once daily for 5 days).
  - *Significance*: Provides visual overview of the raw data, showing dose-limited exposure, metabolite profiles, and interindividual variability.
- **Figure 2**: Graphical representation of the final structural model, including first-pass metabolism, one-compartment disposition for all analytes, and dose-limited bioavailability.
  - *Significance*: Illustrates the model structure and parameterization, essential for understanding the modeling approach.
- **Figure 3**: Prediction-corrected visual predictive checks (VPCs) for oxfendazole, fenbendazole, and oxfendazole sulfone.
  - *Significance*: Demonstrates adequate model fit; observed percentiles fall within the prediction intervals for most time points, supporting model adequacy for simulation.
- **Figure 4**: Simulated oxfendazole plasma concentration–time profiles for various once-daily and twice-daily dosing regimens over 5 days, with corresponding probability of target attainment (PTA) curves.
  - *Significance*: Key figure for dose selection; shows that 400 mg once daily and 50 mg twice daily achieve >90% PTA for the target of ≥200 ng/mL for ≥5 days.
- **Figure 5**: Probabilities of target attainment for a range of target concentrations (100–2000 ng/mL) across all simulated dosing regimens.
  - *Significance*: Sensitivity analysis highlighting the impact of target concentration uncertainty on PTA; only the highest doses achieve >90% PTA at targets ≥500 ng/mL.
- **Table 1**: Final population PK parameter estimates, including bootstrap 95% confidence intervals and interindividual/interoccasion variability.
  - *Significance*: Provides the quantitative basis for all simulations; key parameters include $KA$ ($0.695$ $h^{-1}$), $f_{FP}$ ($0.055$), $CL_{OXF}/F$ ($3.54$ $L/h$), $V_{OXF}/F$ ($67.2$ $L$), and high IIV in $F$ (72.7% CV).
- **Table 2**: Secondary PK parameters ($AUC_{\infty}$, $C_{max}$, $T_{max}$, $t_{1/2}$, time above target) for oxfendazole and metabolites across cohorts, derived from the model.
  - *Significance*: Summarizes exposure metrics; confirms dose-limited behavior (less than dose-proportional increase) and shows that only the multiple-dose cohort achieves >5 days above 200 ng/mL.

---

### Code & Reproducibility Assessment
NONMEM code and analysis scripts were not publicly provided. The authors used Pirana, PsN, and R; code may be available from the corresponding author upon reasonable request.

---

### Supplementary Materials
Supplementary materials include Table S1 (bioanalytical method details), Table S2 (demographic characteristics of the 24 subjects), Table S3 (comparison of parameter estimates with and without the dose-limited bioavailability function), Table S4 (sensitivity analysis excluding the outlier subject with low exposure), Figure S1 (original vs. corrected concentration profiles for the two subjects with potential sample mix-up), Figure S2 (dose-limited bioavailability function from prior SAD study), Figure S3 (goodness-of-fit plots), Figure S4 (observed vs. individually predicted profiles), Figure S5 (simulated exposure metrics for different dosing regimens), Figure S6 (PTA across body weight range 42–75 kg), Figure S7 (simulated exposure metrics at body weight extremes), Figure S8 (median simulated profiles relative to different target concentrations), Figure S9 (distributions of simulated time above target concentration).

---

### Future Directions
Confirm pharmacokinetics and exposure-response in onchocerciasis patients; evaluate food effect on tablet absorption; conduct a mass balance study to determine true metabolic fractions; refine exposure-response relationships using clinical efficacy data; explore alternative formulations (e.g., nanosuspension) to reduce variability and improve bioavailability; assess safety and efficacy in Phase 2 trials; consider body-weight-based or fixed-dose regimens; propagate parameter uncertainty in future PTA analyses to provide confidence intervals around target attainment.

---

### Expert Commentary
This study exemplifies the value of repurposing veterinary drugs for neglected tropical diseases through rigorous pharmacometric modeling. The PopPK model is well-constructed, though the high IIV in bioavailability (72.7% CV) and reliance on a single outlier subject for this estimate warrant caution in extrapolating variability to broader populations. The assumption of 50% metabolic fraction is a necessary simplification but limits interpretation of metabolite parameters as absolute physiological values. The sensitivity analyses across body weight and target concentrations are commendable and strengthen the dose recommendations. The twice-daily 50 mg regimen is particularly interesting as it achieves target exposure with a lower total daily dose (100 mg vs 400 mg), potentially reducing cost and toxicity while mitigating dose-limited absorption. However, the lack of parameter uncertainty propagation in PTA simulations is a notable gap; future analyses should follow the recommendations of Colin et al. to provide confidence intervals around PTA curves. Overall, this work provides a solid quantitative foundation for Phase 2 dose selection and highlights the importance of formulation and population-specific PK in drug repurposing.

---

### Bottom Line
The population PK model supports 400 mg once daily or 50 mg twice daily for 5 days as promising dosing regimens for Phase 2 trials in onchocerciasis, achieving >90% probability of maintaining plasma oxfendazole ≥200 ng/mL for ≥5 days. However, the high interindividual variability in bioavailability and uncertainty in exposure targets warrant careful therapeutic monitoring and potential dose individualization in future studies. The model provides a quantitative foundation for continued clinical development of oxfendazole as a macrofilaricidal drug.

---

---

## 📊 Figures

![Plasma concentration–time profiles of oxfendazole and metabolites across cohorts. Individual plasma concentration–time profiles of oxfendazole, fenbendazole, and]({{ site.baseurl }}/assets/digests/2026-05-29-repurposing-oxfendazole-for-onchocerciasis-population-pharmacokinetics-of-a/figures/fig_01.png)

![Graphical representation of the final model describing the pharmacokinetics of oxfendazole and its metabolites. The model incorporates a first-pass effect, with]({{ site.baseurl }}/assets/digests/2026-05-29-repurposing-oxfendazole-for-onchocerciasis-population-pharmacokinetics-of-a/figures/fig_02.png)

![Visual predictive checks for oxfendazole and metabolites. Prediction-corrected visual predictive checks of the final population PK model for (a) oxfendazole, (b)]({{ site.baseurl }}/assets/digests/2026-05-29-repurposing-oxfendazole-for-onchocerciasis-population-pharmacokinetics-of-a/figures/fig_03.png)

![Simulated PK profiles for oxfendazole and probability of target attainment. Plasma concentration–time profiles for different dosing regimens were simulated using]({{ site.baseurl }}/assets/digests/2026-05-29-repurposing-oxfendazole-for-onchocerciasis-population-pharmacokinetics-of-a/figures/fig_04.png)

![Probabilities of target attainment for different target concentrations. PTAs are shown for various target concentrations (100–2000 ng/mL) and dosing regimens, na]({{ site.baseurl }}/assets/digests/2026-05-29-repurposing-oxfendazole-for-onchocerciasis-population-pharmacokinetics-of-a/figures/fig_05.png)