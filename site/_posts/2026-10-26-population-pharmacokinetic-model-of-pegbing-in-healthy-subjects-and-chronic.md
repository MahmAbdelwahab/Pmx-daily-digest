---
layout: post
title: "Population Pharmacokinetic Model of Pegbing in Healthy Subjects and Chronic Hepatitis B Patients."
date: 2026-10-26
authors: "Weizhe Jian et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70104"
paper_type: popk
tags: [popk]
excerpt_text: "This first integrated Pegbing PopPK analysis combines data from healthy volunteers and chronic hepatitis B (CHB) patients in a one-compartment model with target-mediated drug disposition (TMDD) and time-varying interferon receptor downregulation. It is useful to clinical pharmacologists and pharmacometricians considering PegIFN dosing, while its conclusions—particularly for renal impairment and long-term exposure—should be interpreted in light of fixed TMDD parameters and limited validation at week 48."
pdf_path: "/assets/digests/2026-10-26-population-pharmacokinetic-model-of-pegbing-in-healthy-subjects-and-chronic/PMx_Population_Pharmacokinetic_Model_of_Pegb_20261026.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This first integrated Pegbing PopPK analysis combines data from healthy volunteers and chronic hepatitis B (CHB) patients in a one-compartment model with target-mediated drug disposition (TMDD) and time-varying interferon receptor downregulation. It is useful to clinical pharmacologists and pharmacometricians considering PegIFN dosing, while its conclusions—particularly for renal impairment and long-term exposure—should be interpreted in light of fixed TMDD parameters and limited validation at week 48.

---

### Executive Summary
The authors developed a pooled PopPK model using single-dose Phase I data from 28 healthy subjects and intensive sampling from 39 CHB patients, with external evaluation in 115 additional CHB patients. The final model described Pegbing using first-order absorption, apparent linear clearance, TMDD, and a gradual reduction in receptor synthesis during repeated treatment. CHB status was associated with a $40.5\%$ lower absorption rate constant, while creatinine clearance (CrCL) was associated with apparent clearance; body weight was not retained. Simulations suggested similar steady-state AUCs in healthy subjects and CHB patients, despite differences in absorption and peak-to-trough profiles, supporting no covariate-based dose adjustment for CHB patients with normal renal function. External predictive checks were broadly supportive, although the model underpredicted week-48 concentrations in the validation data.

---

### Scientific Context & Motivation
Pegylated interferon alfa pharmacokinetics may be nonlinear because drug binds to and is internalized with interferon receptors, and repeated interferon exposure may alter receptor abundance over time. Earlier PegIFN PopPK studies generally used linear one- or two-compartment models or TMDD models, but there was no integrated Pegbing model spanning healthy volunteers and CHB patients. The study addresses this gap by pooling intensive single-dose healthy-subject data with patient data that inform repeated-dose and disease-population behavior. It also tests whether disease status, renal function, and other clinical covariates explain exposure differences.

---

## ⚡ Methodological Snapshot
The authors pooled dense single-dose Phase I data from 28 healthy volunteers with intensive PK data from 39 CHB patients to develop the model; 115 additional CHB patients with sparse sampling were reserved for external validation. They screened one-compartment structures with alternative absorption and nonlinear elimination assumptions, selected a TMDD model with first-order absorption, and added receptor downregulation to account for increased exposure during chronic dosing. Estimation used NONMEM 7.5 with FOCEI; evaluation included parameter precision, bootstrap, GOF, pcVPC, NPDE, and external pcVPC.

---

## 🏗️ Structural Model Breakdown
The model used a subcutaneous absorption depot feeding a one-compartment central drug amount/concentration. Drug disposition included apparent linear clearance plus nonlinear target-mediated binding and internalization through an IFN receptor component. Receptor abundance was allowed to decline during repeated treatment, representing downregulation of receptor synthesis; this mechanism was added to reproduce higher exposure at week 48 than week 8. The final covariate model increased $CL/F$ exponentially with CrCL and reduced $k_a$ in CHB patients by approximately $40.5\%$ relative to healthy subjects. Reported typical values were $CL/F$ $0.136$ $L/h$, $V/F$ $2.95$ $L$, $k_a$ $0.0101$ $h^{-1}$, baseline receptor concentration $R_0$ $0.328$ $\mu g/L$, complex internalization rate $k_{int}$ $0.0827$ $h^{-1}$, and receptor downregulation rate $k_R$ $0.0068$ $day^{-1}$. The receptor degradation rate $k_{deg}$ ($0.544$ $h^{-1}$) and $K_D$ ($0.0493$ $\mu g/L$) were fixed. Full differential equations were not available in the supplied text; the extracted equation markers contained only equation numbers, so they are not reconstructed here.

---

### Detailed Methodological Analysis

#### Modeling Approach
Population PK analysis in NONMEM 7.5, supported by Perl-speaks-NONMEM 5.0 and Pirana 3.0. Candidate models included one-compartment structures with Michaelis-Menten or TMDD elimination and alternative absorption models. The selected model used first-order absorption, apparent linear clearance, TMDD, and time-varying IFN receptor downregulation. IIV was modeled log-normally and residual variability with a combined proportional and additive error model.

#### Data Sources
Phase I single-ascending-dose study: 28 healthy subjects receiving $45$, $90$, $180$, or $270$ $\mu g$ subcutaneously, with serial sampling through $408$ hours. Phase II NCT01143662: 39 CHB patients with dense PK sampling after weekly dosing at $90$, $135$, or $180$ $\mu g$, included in model development. A separate sparse-sampling set of $115$ CHB patients was used for external validation. The pooled modeling dataset comprised $67$ individuals and $1,013$ observations; the validation set comprised $464$ observations. Concentrations were measured by ELISA with an LLOQ of $300$ $pg/mL$.

#### Estimation Methods
Parameters were estimated using first-order conditional estimation with interaction (FOCEI). Bootstrap uncertainty was assessed using $1,000$ nonparametric replicates. The receptor degradation rate was fixed from a related PegIFN model and the equilibrium association constant was fixed based on prior Pegbing modeling in healthy subjects because available data were insufficient to estimate all TMDD parameters reliably.

#### Model Evaluation
Evaluation considered parameter plausibility and relative standard errors, goodness-of-fit plots, prediction-corrected visual predictive checks based on $1,000$ simulations, $1,000$-replicate bootstrap, and NPDE based on $1,000$ simulations. External predictive performance was assessed with pcVPCs in the independent sparse CHB dataset. Diagnostics were generally supportive, although the model underpredicted week-48 validation concentrations.

#### Covariate Analysis
Stepwise covariate modeling screened demographic, health-status, hematologic, and biochemical variables, with covariate effects tested using linear, exponential, or power forms. Forward inclusion required an OFV decrease greater than $3.84$ and backward elimination used the stated $6.63$ criterion. Health status (healthy versus CHB) was retained on $k_a$, and CrCL on $CL/F$; body weight was initially considered on $V/F$ but not retained. Clinical relevance was judged using bootstrap confidence intervals and an $80\%$–$120\%$ reference range.

---

### Statistical Rigor Assessment
The analysis used complementary internal diagnostics and an independent validation cohort, and the reported bootstrap intervals were generally consistent with point estimates. IIV and residual error were quantified, with reported random-effect shrinkage below $30\%$. The modeling sample was modest, however, and the pooled trials had different designs and sampling intensity. Exclusion of below-LLOQ observations was considered acceptable by the authors because fewer than $5\%$ of pooled modeling observations were below quantification, although $16.5\%$ were below LLOQ in the Phase I component. TMDD parameter fixing was a pragmatic response to limited information but weakens mechanistic identifiability. NPDE tests supported mean and variance behavior, while Shapiro-Wilk tests indicated departure from normality; the authors nevertheless considered overall predictive diagnostics supportive. The week-48 external underprediction is a relevant residual concern.

---

## 📊 Key Findings
The final structural model was a one-compartment model with first-order subcutaneous absorption, apparent linear clearance, and a TMDD component incorporating declining receptor synthesis during repeated dosing. Typical parameter estimates included $CL/F$ $0.136$ $L/h$, $V/F$ $2.95$ $L$, and $k_a$ $0.0101$ $h^{-1}$. The CHB effect on $k_a$ was $-0.405$, corresponding to an approximately $40.5\%$ lower absorption rate than in healthy subjects. CrCL was positively associated with $CL/F$, with an estimated coefficient of $0.00504$ in the reported exponential covariate relationship; the authors judged this effect not clinically relevant across the observed renal-function range. Estimated IIV was $34.4\%$ for $CL/F$, $48.2\%$ for $V/F$, $44.4\%$ for $k_a$, and $52.2\%$ for $k_{int}$. The receptor-downregulation rate constant was $0.0068$ $day^{-1}$, and the authors estimated receptor levels would approach about $10\%$ of baseline by week $48$. The model projected similar steady-state AUC between healthy subjects and CHB patients, but higher $C_{max}$ and greater fluctuations in healthy subjects, associated with their higher $k_a$. External pcVPC results were generally supportive, with underprediction noted for week-48 validation concentrations.

---

## 💡 Clinical & Regulatory Implications
For CHB patients with normal renal function in the studied range, model simulations support no covariate-based Pegbing dose adjustment. CHB patients had lower estimated absorption rate and lower early $C_{max}$ than healthy subjects, while steady-state $AUC$ was predicted to be similar. CrCL was associated with clearance but its effect was not judged clinically relevant within the observed range. The analysis raises the possibility that severe renal impairment could increase exposure, but does not establish a dose adjustment; such patients require further evidence and clinical judgment. The findings should not be used to infer safety or dosing beyond the studied regimens, populations, and renal-function range.

---

### Strengths & Limitations

#### Strengths
- Integrated healthy-volunteer and CHB-patient data to characterize both inter-population differences and repeated-dose behavior.
- Compared alternative absorption and nonlinear elimination structures, then incorporated a biologically motivated time-varying receptor mechanism to address increased exposure with prolonged treatment.
- Used bootstrap assessment, goodness-of-fit diagnostics, pcVPCs, NPDE, and an independent patient dataset for external evaluation.
- Reported clinically interpretable simulations of $AUC$ and $C_{max}$ across health status and CrCL values.

#### Limitations (Acknowledged by Authors)
- The data did not adequately cover all phases of TMDD, so some TMDD parameters were fixed using literature or prior model estimates rather than estimated from these data.
- The physiological explanation for the health-status-associated absorption difference remains uncertain.
- Multiple-dose healthy-subject data were unavailable to characterize long-term PK in healthy individuals.
- Covariate distributions were relatively narrow, limiting assessment of covariate effects.

#### Limitations (Expert Review)
- The model was developed from a small pooled modeling population (67 individuals), and the healthy and CHB datasets differed in study design, sampling schedule, and dose regimen; population differences may therefore be partly confounded with study differences.
- External validation relied on sparse patient samples and showed underprediction at week 48, precisely where the time-varying mechanism is most consequential.
- Fixed TMDD parameters and the simplified receptor-downregulation assumption limit mechanistic identifiability; conclusions about receptor kinetics should not be treated as direct measurements of receptor abundance.
- The very small estimated $V/F$ and absorption-rate interpretation are apparent, formulation- and bioavailability-dependent parameters rather than direct physiological measurements.
- The reported bootstrap median for final-model $R_0$ ($0.0328$) appears inconsistent with the estimate ($0.328$) and confidence interval ($0.255$–$0.474$), suggesting a possible transcription or reporting error that should be checked against the published table.
- The analysis does not establish a dosing recommendation for severe renal impairment; the normal-function conclusion should not be extrapolated to that population.

#### Generalizability
The model is most applicable to populations and dosing conditions resembling the studied trials, particularly CHB patients with renal function within the observed range and the tested Pegbing regimen. Generalization to severe renal impairment, other indications, substantially different body-size or renal-function distributions, or long-term use in healthy subjects is uncertain. The observed week-48 underprediction also warrants caution when extrapolating long-term exposure.

---

### Key Equations

**CrCL effect on apparent clearance**

{% raw %}
$$
\text{CL/F}_{i} = \text{CL/F}_{\text{typ}} \cdot \exp\left(\theta_{\text{CrCL}} \cdot (\text{CrCL}_{i} - 110.38)\right)
$$
{% endraw %}

This is the exponential CrCL covariate relationship reported in the final-model parameter table. The estimated coefficient was $0.00504$; CrCL was centered at $110.38$ $mL/min$.

**CHB effect on absorption rate**

{% raw %}
$$
k_{a,i} = k_{a,\text{typ}} \cdot (1 + \theta_{\text{CHB}} \cdot I_{\text{CHB},i})
$$
{% endraw %}

The final model applied a proportional health-status effect to $k_a$, with the table reporting a CHB effect of $-0.405$. The indicator is $1$ for CHB patients and $0$ for healthy subjects; the supplied text describes CHB $k_a$ as $40.5\%$ lower.

---

### Figures & Tables

- **Figure 1**: Exploratory concentration-time profiles by dose and population, with exposure or apparent-clearance summaries; the profiles show nonlinear features and higher exposure later in treatment.
  - *Significance*: Motivates the nonlinear disposition structure and the addition of a time-varying mechanism to explain higher exposure at week 48 than week 8.
- **Figure 2**: Schematic of the one-compartment TMDD model with first-order absorption, shown without and with IFN receptor downregulation.
  - *Significance*: Communicates the structural assumptions that underpin the final model and its interpretation of changing exposure during repeated dosing.
- **Figure 3**: Prediction-corrected visual predictive checks for the modeling data and the independent CHB validation dataset.
  - *Significance*: Assesses predictive performance across dose and time; the validation panel supports general adequacy but also reveals underprediction of week-48 concentrations.
- **Figure 4**: Forest plot of covariate effect ratios relative to typical values, including health status and CrCL effects.
  - *Significance*: Shows the estimated size and uncertainty of covariate effects and supports the distinction between statistically retained and clinically meaningful effects.
- **Figure 5**: Simulated concentration-time profiles and AUC for virtual patients receiving $180$ $\mu g$ across CrCL and health-status categories, at first dose and steady state.
  - *Significance*: Translates the fitted covariate relationships and time-varying model into exposure comparisons relevant to dosing decisions.
- **Table 1**: Baseline demographic and clinical characteristics for the Phase I modeling, Phase II intensive modeling, and Phase II sparse validation datasets.
  - *Significance*: Establishes the population composition, covariate ranges, dose groups, and differences between modeling and validation cohorts.
- **Table 2**: Base- and final-model parameter estimates, uncertainty, shrinkage, and bootstrap results.
  - *Significance*: Provides the quantitative basis for interpreting typical PK parameters, variability, covariate effects, and fixed TMDD parameters.
- **Table S1**: Summary of the stepwise covariate screening process, referenced in the article text.
  - *Significance*: Documents covariate selection supporting the retained health-status effect on $k_a$ and CrCL effect on $CL/F$; the table contents were not included in the supplied extract.

---

### Code & Reproducibility Assessment
The authors report use of NONMEM 7.5, Perl-speaks-NONMEM 5.0, Pirana 3.0, and SimBiology 24.1. The analyzed datasets are available from the corresponding author on reasonable request. No model code or public data repository is identified in the supplied article text, limiting independent computational reproduction.

---

### Supplementary Materials
No supplementary files were supplied in the provided material. The article text references supplementary Figures S1–S9 and Table S1, including model diagnostics, covariate screening, secondary PK summaries, CrCL exposure trends, and sensitivity analysis, but their full contents were not available here.

---

### Future Directions
Collect richer concentration-time data that cover the full TMDD profile, including late elimination, and obtain multiple-dose healthy-volunteer data to test the receptor-downregulation mechanism across populations. Validate the week-48 predictions with additional dense or strategically timed sampling, and examine the model in patients with severe renal impairment and broader CrCL and body-weight distributions. Mechanistic work on interferon receptor abundance and disease-associated absorption could clarify the health-status effect and support more transferable models.

---

### Expert Commentary
The principal modeling contribution is not simply the use of TMDD, but the attempt to explain changing exposure over chronic dosing with a time-varying target process. That is a reasonable structural hypothesis, but the data do not identify all target-related parameters, so receptor kinetics are partly inherited from assumptions and prior work. The external dataset is valuable, yet its week-48 underprediction is an important qualification rather than a minor diagnostic detail. Practitioners should distinguish the statistically retained CrCL relationship from clinical relevance: the authors did not find it large enough to justify routine adjustment within the observed range, while severe impairment remains unresolved.

---

### Bottom Line
This analysis provides a useful first quantitative framework for Pegbing exposure, incorporating TMDD and a plausible time-dependent reduction in receptor-mediated elimination. For CHB patients with normal renal function, simulations support no covariate-based dose adjustment based on the effects identified here; however, the health-status effect on absorption, fixed TMDD parameters, and week-48 underprediction merit caution. Do not use this study alone to infer dosing in severe renal impairment or other populations outside the data range.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The paper was published in CPT: Pharmacometrics & Systems Pharmacology.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “The paper is classified as a population pharmacokinetic/pharmacodynamic analysis.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **CONTRADICTED** — original: “The equilibrium dissociation constant KD was fixed at 0.0493 micrograms/L.” → correction: “The equilibrium association constant (KD) with molecular specificity was fixed according to the initial estimation.”
[^fc-4]: **CONTRADICTED** — original: “The Phase II intensive-sampling CHB patients received weekly doses of 180 micrograms.” → correction: “In the MAD trial, 154 CHB patients received weekly Pegbing at 90, 135, and 180 μg for 48 weeks.”
[^fc-5]: **UNSUPPORTED** — original: “The digest recommends obtaining multiple-dose healthy-volunteer data to test the receptor-downregulation mechanism across populations.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “The digest recommends validating week-48 predictions with additional dense or strategically timed sampling.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “The digest recommends examining the model in patients with severe renal impairment.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “The digest states that mechanistic work could support more transferable models.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-10-26-population-pharmacokinetic-model-of-pegbing-in-healthy-subjects-and-chronic/figures/fig_01.jpg)

![Exploratory data analysis. (a) Individual plasma concentration–time curves of healthy subjects from the Phase I trial; (b) individual plasma concentration–time c]({{ site.baseurl }}/assets/digests/2026-10-26-population-pharmacokinetic-model-of-pegbing-in-healthy-subjects-and-chronic/figures/fig_02.jpg)

![Schematic of the one-compartment TMDD model with linear absorption. (a) original model and (b) model with IFN receptor downregulation.Xa, drug in the absorption]({{ site.baseurl }}/assets/digests/2026-10-26-population-pharmacokinetic-model-of-pegbing-in-healthy-subjects-and-chronic/figures/fig_03.jpg)

![Prediction-corrected visual Predictive Check (pcVPC) of the final model. (a) modeling dataset of healthy subjects and CHB patients with dense sampling; (b) exter]({{ site.baseurl }}/assets/digests/2026-10-26-population-pharmacokinetic-model-of-pegbing-in-healthy-subjects-and-chronic/figures/fig_04.jpg)

![Forest plot of covariate effect ratios relative to the typical values in the final model. Ratios were normalized by the typical values with health status of heal]({{ site.baseurl }}/assets/digests/2026-10-26-population-pharmacokinetic-model-of-pegbing-in-healthy-subjects-and-chronic/figures/fig_05.jpg)

![Plasma concentration–time profiles and corresponding AUC of virtual patients receiving 180 μg dose with different covariates. (a, b) creatinine clearance (CrCL)]({{ site.baseurl }}/assets/digests/2026-10-26-population-pharmacokinetic-model-of-pegbing-in-healthy-subjects-and-chronic/figures/fig_06.jpg)