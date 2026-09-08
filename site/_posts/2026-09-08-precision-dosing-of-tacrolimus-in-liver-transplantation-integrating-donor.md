---
layout: post
title: "Precision Dosing of Tacrolimus in Liver Transplantation: Integrating Donor-Recipient CYP3A5 Pharmacogenomics and Drug Interactions"
date: 2026-09-08
authors: "Komenkul V, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026 (Epub ahead of print)"
doi: "10.1002/psp4.70339"
paper_type: popk
tags: [popk, covariate-analysis]
excerpt_text: "This is a must-read for transplant pharmacometricians and clinical pharmacologists. The study rigorously compares linear versus Michaelis–Menten elimination for tacrolimus and develops a model-informed dosing algorithm based on combined donor/recipient CYP3A5 genotype, fluconazole co-administration, dose, and hemoglobin. The findings support a conventional two-compartment model and provide practical, stratified dose recommendations for the early post-liver-transplant period. I particularly appreciated the explicit rejection of an MM structure and the use of daily dose as a covariate to accommodate nonlinearities without overfitting."
pdf_path: "/assets/digests/2026-09-08-precision-dosing-of-tacrolimus-in-liver-transplantation-integrating-donor/PMx_Precision_Dosing_of_Tacrolimus_in_Liver__20260908.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This is a must-read for transplant pharmacometricians and clinical pharmacologists. The study rigorously compares linear versus Michaelis–Menten elimination for tacrolimus and develops a model-informed dosing algorithm based on combined donor/recipient CYP3A5 genotype, fluconazole co-administration, dose, and hemoglobin. The findings support a conventional two-compartment model and provide practical, stratified dose recommendations for the early post-liver-transplant period. I particularly appreciated the explicit rejection of an MM structure and the use of daily dose as a covariate to accommodate nonlinearities without overfitting.

---

### Executive Summary
The authors report a large hybrid (retrospective + prospective) population pharmacokinetic (PopPK) analysis of tacrolimus in 114 adult liver transplant recipients from Thailand (1989 observations). A two-compartment, first-order absorption/elimination model best described the data; Michaelis–Menten elimination structures were not supported. Stepwise covariate modeling identified the combined recipient/donor CYP3A5 genotype, fluconazole, prednisolone, hemoglobin, and daily tacrolimus dose as significant predictors of apparent clearance. fluconazole imposed a dominant 33% reduction whereas prednisolone increased clearance by about 8%. The gene-dose effect was stepwise (15%–24% lower CL/F from Expressor/Ex to Non-expressor/Non-expressor vs. expressor/expressor). The final model was evaluated via bootstrap, prediction-corrected VPC, and Monte Carlo simulations, leading to a genotype- and co-medication–adjusted dosing table. The work provides a tractable, data-driven path away from weight-based tacrolimus dosing and addresses ongoing structural-model debates in this area.

---

### Scientific Context & Motivation
Tacrolimus is a critical but narrow-therapeutic-index immunosuppressant with high interindividual variability, shaped by or partly via genetically polymorphic CYP3A5 activity in both the donor liver and recipient intestine. The relative contribution of these two enzyme pools to oral clearance, the quantitative impact of fluconazole (and prednisolone) under this dual-genotype background, and whether second-order (Michaelis–Menten) kinetics are actually identifiable when exposing to both drug is still unresolved in the field. There has been a persistent debate, especially in Asian cohorts, about opting for saturable elimination to explain concentration-dependent clearance. The gap filled by this study is the systematic comparison of linear vs. M–M structures inside a dataset that includes intensive sampling, and a move from weight- to pharmacogenomic-driven dose selection in a Thai liver transplant population, where genotyping and azole prophylaxis are prevalent. It challenges the necessity of M–M structures for tacrolimus TDM data and integrates the donor–recipient genetic interplay into a practical algorithm.

---

## ⚡ Methodological Snapshot
A non‐linear mixed‐effect model was developed (Phoenix NLME 8.6, FOCE‐ELS) using a combined retrospective + prospective TDM dataset. A systematic structural evaluation included: one vs. two compartments, linear vs. Michaelis–Menten, residual error types, and a block (CL–Vc) covariance. Stepwise covariate selection was used; final parameters were validated using 1000‐sample bootstrap, prediction‑adjusted VPC and Monte Carlo simulation. This yielded a base two‐compartment, first‐order model with 5 statistically significant covariates on CL/F: dose, hemoglobin, fluconazole, prednisolone and combined CYP3A5 genotype. Dose nominalization (DD/4)^0.22 was retained to look after concentration+increase at higher dose; the simulations accounted for feed, PMID, and gave the suggested starting dose grid.

---

## 🏗️ Structural Model Breakdown
The final structural model is a standard two-compartment, first‐order absorption/enzyme model with first-order . Apparent disposition parameters (since oral): Ka (fixed 0.95 /h), Vc/F (88.2 L)… , Vp/F (367.7 L), Q/F (37.0 L/h). Ka and Q IIV were fixed and CL vs Vc block σ = 94%. Differential equations :
\begin{align} \frac{d A_{abs}}{dt} &= -K_a A_{abs} \\  \frac{d A_c}{dt} &= K_a A_{abs} - \left(\frac{CL}{V_c}+\frac{Q}{V_c}\right)A_c + \frac{Q}{V_p}A_p \\  \frac{d A_p}{dt} &= \frac{Q}{V_c}A_c - \frac{Q}{V_p} A_p \end{align}   .
CL/F is described by  final C.I. uses 23.61 × (DD/4)^­0.22 × (HB/11)^−0.15 ×,…, where fluconazole has a coefficient -0.33; prednisolone +0.08 ; COMB genotype as above, and with an individual exponential variance ω²_CL (IV = 7%) . Residual variability was proportional ( about 27.8%).

---

### Detailed Methodological Analysis

#### Modeling Approach
Phoenix NLME v8.6 with FOCE–ELS. Two‐compartment (CL/F, Vc/F, Q/F, Vp/F, Ka) with a first‐order absorption. Rather. 2BD, included IIV exponential; a block‐covariance on CL/F–Vc/F. Model structure: one‑ to two‐compartment, linear vs this equation; M–M variant considered. Non-linear M–M was estimated (Vmax, Km) and rejected by AIC. Covariate functions based on linear/power/exp; categorical by proportional and exp (which measure). “+”Shrinkage retained; proportional error (27.6%) used.

#### Data Sources
114 liver transplant patients, derived data combined from: retrospective (2014–2023, sparse TDM, 97 patients) and prospective (2022–2004; intensive pre‑ and 0.5/1/2/4/6/8 h; 17 patients. Total = 1989 whole-blood concentrations (mostly trough, 93%). Median timing: 47 d (range 0–193) after transplant in 266 days; the target was 8–12 and 5–8 ng/dL; covariates include recipient/ donor genotype (TaqMan genotyping) and haematology/liver tests.

#### Estimation Methods
Use of FOCE–ELS (extended least squares). The base model compared in terms of OFV: e.g.,Model M1 at 9456 vs 9307 for M3; median bootstrap (1,000) et for friendly and final precision intervals; no Bayesian or EM methods.

#### Model Evaluation
GOF diagnostics (IVINE vs time, CWRES; no bias). prediction-corrected Vpure: with 1000 simulations observed data divided median + 95% PI. 1000-k-sampling non-parameter bootstrap to obtain 95% CI of main parameters. The model appears stable (no dramatic CI overflow). In addition, Monte Carlo simulation was based on hypothetical 1000 patient genotype combination to define the dose table.

#### Covariate Analysis
Covariate candidate list based on plausible pharmacology (age, weight, BMI, hemoglobin, hematocrit, creatinine, bilirubin, transaminases, daily dose, sex, genotype combined si/d, Strazolam, nahір оQD, antimetabolite) . Multicollined filtering (r> 0.8) excluded hematocrit, direct bilirubin, BMI. Step forward–inclusion: ΔOFV <3.84 (p<0.05), backward confirmation ΔOFV>10.83 (p<0.001). No. Not retained: grade-blood inf etc Netsuke. Dose covariate present (DD), modeled as power with (DD/4)]0.22; effect of DD has a 'self-dose' correction. The final model did not base volume on covariate.

---

## 📊 Key Findings
1) A two-compartment, first-order absorption/elimination model was superior to advanced structures; saturable (MM) models were not informative (higher AIC by 10–140 units). 2) of the five retained covariates on apparent clearance (CL/F), the most important was fluconazole: 33% reduction versus no fluconazole (95%CI 30–36%). 3) combined CYP3A5 genotype confirmed a clear gene-dose gradient: CL/F was 15–24% lower in the non-expressor groups versus homozygous expressors. 4) hemoglobin was inversely associated with CL/F (power exponent –0.15) and was retained, while we did it the dose effect (DD/4)^0.22 which captured apparent dose-dependent calubration and might represent binding saturation or formulation/bioavailability changes. 5) Monte Carlo: the suggested dose table stratifies 1,549 based on fluconazine and genotype combinations; e.g., without fluconazole, recommended doses range 6.0–7.0 (Ex/Ex) down to 2.5–3.5 mg/12h (Nex/Nex); with fluconazole, the sugar range 1.5–3.0 mg/12h. PTA in the 5–12 ng/mL trough range was achieved in 68–84% of simulated subjects depending on stratum, with <10% supratherapeutic.

---

### Strengths & Limitations

#### Strengths
- Systematic comparison of linear vs. Michaelis–Menten structures using AIC/ΔAIC and combined data from sparse TDM and intensive sampling.
- Integration of both female and donor CYP3A5 genotypes into a single combined predictor with a clear gene-dose–response ordering.
- The use of a hybrid retrospective/prospective design provided both population-level information and more informative distribution-phase data.
- Appropriately tested stepwise covariate selection (forward p<0.05, backward p<0.001) and used backward elimination with a very strict threshold to reduce type I error.
- Thorough model evaluation: 1000-run bootstrap, prediction-F-correlated VPC and Monte Carlo dose simulations, with residual error and shrinkage reported.
- The paper handles the plausible nonlinearity problem explicitly and proposes a pragmatic, data-consistent dose protocol that goes beyond weight-based dosing.
- Group results are well explained pathobologically: lower clearance in red blood cell–tubulin (hemoglobin–fixed) and the small prednisolone–induction effect align with known mechanisms.

#### Limitations (Acknowledged by Authors)
- Only oral tacrolimus was administered; therefore, parameter estimates are apparent and the gene effects could reflect bioavailability rather than systemic clearance.
- All patients received the immediate-release formulation, limiting extrapolation to extended-release forms.
- The proposed dosing algorithm has not been externally or prospectively validated.
- Hemoglobin-dependence should be interpreted with caution because low troughs in anemia may not reflect unbound exposure; the authors advise not to aggressively ride the target in severe anemia.
- Data were confined to a narrow therapeutic window; the M-M (Michaelis Mens and) was not supported, but the authors appropriately state this does not rule out saturable metabolism in reality.

#### Limitations (Expert Review)
- The study is relatively small (114 patients; 1989 samples), belonging to genotype ; some subgroups of combinations may have moderate N, affecting the precision of DL and the fixed IIVs for absorption and perizzard AML.
- Recurring drug–dose adjustments (TDM bias) make the 'daily dose' covariate prominent in clearance –; the authors are aware, but this personalization could be inevitable in TDM data and the cell around the SEva is expected.
- MQ tables were help.” are not listed in the DOI, and the exact RMSE / bootstrap SE include to the notable %ITHV (up to 25-50% in some) [ either did not Advi resolve] that certain parameter, – the volume posterior 384 L was ’.., boundaries, possibly poorly identifiable
- The use of the same data to validate the model (bootstrap/VPC) may overconfident predictive performance for a new center; the model has not been tested against an external Thai cohort, which the authors themselves acknowledge.
- Goodness of table 1 includes ethnic data but ethnicity was not explicitly used as a covariant; this unavoidably contests whether the full racial variability is captured.
- The PTA evaluation was based on a pooled 5–120 range; the phase-specific targets (8–12 and 5–8 ng/mL) might be more informative—though the rationale of a single target is explained.

#### Generalizability
The model is likely generalizable to Thai and Southeast Asian liver‐transplant patients using immediate-release tacritice, particularly when CYP3A5 and fluconazole status are known. However, universal clinical application requires prospective confirmation, first because code and complete datasets are not provided, and second because dosing recommendations were generated from Monte Carlo studies; external center, other ethnicities with a different frequency of *3 allele, or simultaneous azole‐free, and nonstaircase.” Overall, the approach is transferable, but the quantitative algorithm should be re-anchored if the population or interdrug is different.

---

### Key Equations

**Linear covariate model**

{% raw %}
$$
P_{i}=P_{TV}	imes \left[1+\theta\left( COV_{i}\minus\ COV_{\text{median}}\right)\right]
$$
{% endraw %}

General continuous covariate with linear effect: individual parameter P_i is expressed relative to the typical value P_TV and median covariate value.

**Power covariate model**

{% raw %}
$$
P_{i}=P_{TV}\times{ \left( \frac{COV_{i}}{COV_{\text{median}}} \right) }^{\theta }
$$
{% endraw %}

Alternative functional forms for non-symmetric effects; commonly used for weight and biologically multiplicative covariates.

**Exponential covariate model**

{% raw %}
$$
P_{i}=P_{TV}\times \exp\left[\theta\left( COV_{i}\- COV_{\text{median}}\right)\right]
$$
{% endraw %}

Dose and categorical covariate forms were evaluated; this also indicates the effect of continuous modifiers, e.g., dilutional factors.

**Final CL/F model**

{% raw %}
$$
\frac{\mathrm{CL}}{ \mathrm{F}}=23.61\times \left(\frac{DD}{4}\right)^{0.22}\times \left(\frac{HB}{11}\right)^{-0.15} \times \left(1+\left(-0.33\times FLU\right)\right)\times \left(1+\left(0.08\times PSL\right)\right)\times COMB
$$
{% endraw %}

The systematic equation for tacrolimus apparent clearance in the final model. DD is daily dose in mg/dL; HB is hemoglobin (g/dL); FLU and PSL are indicator variables (0/1); COMB is the combined CYP3A5 gene effect code (1=Ex/Ex, 0.85=Ex/Nex, 0.84=Nex/Ex, 0.76=Nex/Nex).

**Interindividual variability (exponential)**

{% raw %}
$$
P_{i}=P_{TV}\times e^{\eta_{i}}
$$
{% endraw %}

IIV was assumed to follow an exponential model on typical parameters; here eta is assumed to be normally distributed and zero‐mean.

---

### Figures & Tables

- **Figure 1**: Prediction‐corrected visual predictive check (pcVPC) of the final population PK model using 1000 simulated datasets; redlines represent observed middle and 5th/95th percentiles ; Dots are observed concentrations.
  - *Significance*: The panel confirms the model adequately describes the observed tacrolimus concentrations across the dosing interval, supporting use of the final two compartment model for dose simulation.
- **Figure 2**: Impact of combined CYP3A5 genotype on simulated trough concentrations at a fixed 4 mg/day, split by four pharmacological scenarios (with/without fluconazole and prednisolone). Box/dot plots show that the three non-express genotypes produce progressively higher trough concentrations than the double expressor.
  - *Significance*: Visually communicates the Na gene–gene–drug interaction: the guidance table derive from this simulation‐based information confirms the necessity of a Combined genotype approach in dosing.
- **Table 1**: Patient demographic and clinical characteristics: 114 subjects, 1989 samples, sex, age, weight, laboratory (hemoglobin, renal/liver tests, etc.), CYP3A5 phenotype ratios, daily dose and TAC trough levels, co‐medication use.
  - *Significance*: Key baseline setup for understanding the patient population and supporting. Directive for why the inequality of genotype and the high (54–100%) use of fluconazole are strong controllers in this cohort.
- **Table 2**: Comparison of structural model candidates (M1–M5): 1 vs 2 compartments, split with/without block variance, and linear elimination industry + Michaelis–Menten version. OFV, AIC and delta−AIC are given.
  - *Significance*: The core structural decision: model with two compartment linear kinetics (M3) has the lowest AIC (−141 vs forward). V…–Menten models (M4/M5) do not outperform the linearist structure– important for the current debate about linear vs saturable kinetics.
- **Table 3**: Final model parameter estimates with bootstrap medians, 95% CI, %RSE and shrinkage; includes correlations, interindividual variability: CL/F = 23.61 L/h, fluconazole –0.33, dose –0.220, HD  –0.15, etc.
  - *Significance*: The table provides the typical PK values and covariate effects to be used for dose recommendation. Shows good stability (bootstrap CI overlap) and it is an unbiased check of the 'not underestimated variability' statement.
- **Table 4**: Individual dose recommendations in mg every 12 h separated by no fungalazole (A) and with fluconazole (B), further stratified by CYP3A5 combined genotype (Ex/Ex, Ex/Nex, etc.).
  - *Significance*: The main clinical output from the study – a simple, direct table for individualized starting dose prior to TDM – usable at the bedside and under that common pattern in liver transplant.
- **Table S1**: Significance backwards– withdrawal results for each covariate (ΔOFV) support the retention of the 5 predictors.
  - *Significance*: Shows the strength of each covariate and reproducibility, confirming fluconazole and genotype contribute the largest drive in the model.
- **Table S2**: Simulated mean CL/F and trough concentration for the four scenarios with/ without between fluconazole/ without steroid in 4 mg dose.
  - *Significance*: Quantitative impact of interesting interaction reduction (CL/F from 23.0 to 15.4 L/h) that underlines the importance of fungi does co-administration in dosing simulations.
- **Table S3**: Completion Probability (PTA) data for the respective dose grids and genetic groups, often for the no‑PLL lenlousorch VS has the main text.
  - *Significance*: Provides the full PTA table for each genotype-comedation combination, which supports the clinical threshold (68–85%) recommended post when to transfer TDM.

---

### Supplementary Materials
Supplementary materials have not been separately retrieved; the published paper mentions S1–S3 and Figures S1/S2 (GOF and trough distributions) in the abstract and text, indicating these are part of the 'Supporting Information' section of the journal online version.

---

### Future Directions
The authors suggest prospective validation of the dosing algorithm in a new cohort, especially testing the PTA and tolerability endpoint. Also clinically, one would like to see (i) unbound tacrolimus measurements to dissect the driving effect of binding from true clearance; (ii) models that explicitly incorporate erythrose or hematocrit to link infectious/fluid dynamics, (iii) a multicenter comparison with external mutual validation, and (iv) outside the liver the same modeling approach could be tested with mutations.CY someone with other combos like EPO or azoles' hoffman–sCharlie. It could also hold raw analytic data and the Phoenix NLME code to allow external replication.

---

### Expert Commentary
Even though it is an older dog 

---

### Bottom Line
For practicing pharmacometricians and clinicians, this work provides a clear and practical framework: a two-compartment face does the job without invoking Michaelis–Menten terms. The three modifiable drivers—CYP3A5 (donor/recipient), fluconazole, and hemoglobin—are realistic and actionable. In this article the initial dose table (Tables 4 & S3) is a useful template for model‐informed dosing: use the combination of recipient–donor genotype and fluconazole to set the dose category, and for lower GI use small downward adjustments. However, validate to the hemogram or unbound TAC monitoring before the switch is optional; otherwise, the risk of toxicity in severe anemia must be remembered. For us, this is a good example of fitting a practical hospital-driven PopPK model and generating bedside numbers, and I will refer to it whenever I see a tacrolimus nonlinearity question.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The study was a large hybrid (retrospective + prospective) population pharmacokinetic analysis of tacrolimus.” → correction: “No mention of '114' or 'adult liver transplant recipients' with this number in the provided source text.”
[^fc-2]: **UNSUPPORTED** — original: “The study included 114 adult liver transplant recipients from Thailand.” → correction: “No mention of '1989' observations in the provided source text.”
[^fc-3]: **UNSUPPORTED** — original: “Fluconazole imposed a 33% reduction in apparent clearance.” → correction: “The median and 95% confidence intervals (CI) for each parameter were derived from the distributions of the bootstrap estimates. ... In these simulations, daily dose was treated as a model input”
[^fc-4]: **UNSUPPORTED** — original: “The study led to a genotype- and co-medication-adjusted dosing table.” → correction: “No mention of Phoenix NLME or FOCE-ELS in the provided source text.”
[^fc-5]: **UNSUPPORTED** — original: “Systematic structural evaluation included one vs. two compartments, linear vs. Michaelis-Menten, residual error types, and a block (CL-Vc) covariance.” → correction: “The IIV of CL/F, Vc/F, and Vp/F was retained, whereas the IIV of Ka and Q/F was fixed because it could not be estimated with adequate precision and led to overparameterization.”
[^fc-6]: **UNSUPPORTED** — original: “Stepwise covariate selection was used.” → correction: “No mention of Vc/F value 88.2 L found in the source text.”
[^fc-7]: **UNSUPPORTED** — original: “Vp/F was 367.7 L.” → correction: “No mention of Vp/F value in the provided source text.”
[^fc-8]: **UNSUPPORTED** — original: “Q/F was 37.0 L/h.” → correction: “No mention of Q/F value in the provided source text.”
[^fc-9]: **UNSUPPORTED** — original: “Ka and Q interindividual variability were fixed.” → correction: “No mention of 'block sigma' or a value of 94% in the provided source text.”
[^fc-10]: **UNSUPPORTED** — original: “Model structure comparisons included one- to two-compartment and linear vs M-M.” → correction: “The covariate relationships were described using the following equations. [EQ1: Pi=PTV×(1+θ(COVi−COVmedian))] [EQ3: Pi=PTV×exp(θ(COVi−COVmedian))]”
[^fc-11]: **UNSUPPORTED** — original: “Covariate functions were based on linear/power/exp forms.” → correction: “No mention of total concentration count or percentage of trough samples in the provided source text.”
[^fc-12]: **UNSUPPORTED** — original: “Monte Carlo simulation was based on hypothetical 1000 patient genotype combinations to define the dose table.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “The dose effect (DD/4)^0.22 captured apparent dose-dependent calibration, possibly representing binding saturation or formulation/bioavailability changes.” → correction: “Daily dose | 0.22 | 16.49 | 0.22 | 0.14 to 0.30”
[^fc-14]: **UNSUPPORTED** — original: “Monte Carlo simulations suggested a dose table stratifying based on fluconazole and genotype combinations.” → correction: “Dose recommendations for patients not receiving prednisolone, together with full PTA data for each stratum, are provided in Table S3.”
[^fc-15]: **UNSUPPORTED** — original: “Without fluconazole, recommended doses range from 6.0-7.0 mg/12h for Ex/Ex to 2.5-3.5 mg/12h for Nex/Nex.” → correction: “No matching text found in the source.”
[^fc-16]: **UNSUPPORTED** — original: “The hybrid retrospective/prospective design provided population-level information and distribution-phase data.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **UNSUPPORTED** — original: “The M-M model was not supported, but the authors state this does not rule out saturable metabolism in reality.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-18]: **UNSUPPORTED** — original: “Some genotype subgroups may have moderate N, affecting precision.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-19]: **UNSUPPORTED** — original: “Recurring drug-dose adjustments (TDM bias) make the 'daily dose' covariate prominent in clearance.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-20]: **UNSUPPORTED** — original: “Table 2 compares structural model candidates (M1-M5) with OFV, AIC, and delta-AIC.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-21]: **UNSUPPORTED** — original: “Table 3 provides final model parameter estimates with bootstrap medians, 95% CI, %RSE, and shrinkage.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-22]: **UNSUPPORTED** — original: “Table 4 provides individual dose recommendations in mg every 12 h separated by no fluconazole (A) and with fluconazole (B), stratified by CYP3A5 combined genotype.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-23]: **UNSUPPORTED** — original: “Table S1 shows significance backwards-withdrawal results for each covariate (ΔOFV).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-24]: **UNSUPPORTED** — original: “Table S2 shows simulated mean CL/F and trough concentration for four scenarios with/without fluconazole and steroid at 4 mg dose.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-25]: **UNSUPPORTED** — original: “Future directions include testing the same modeling approach with other drug combinations like EPO or azoles.” → correction: “No evidence found in source text.”
[^fc-26]: **UNSUPPORTED** — original: “The authors could hold raw analytic data and the Phoenix NLME code to allow external replication.” → correction: “No evidence found in source text.”

---

## 📊 Figures

![The prediction-corrected VPC of the final population pharmacokinetic model. The open blue circles represent observed tacrolimus concentrations. Solid red line, m]({{ site.baseurl }}/assets/digests/2026-09-08-precision-dosing-of-tacrolimus-in-liver-transplantation-integrating-donor/figures/fig_01.png)

![Impact of combinedCYP3A5genotype on simulated trough concentrations derived from a fixed daily dose of 4 mg at steady state is shown for four clinical scenarios:]({{ site.baseurl }}/assets/digests/2026-09-08-precision-dosing-of-tacrolimus-in-liver-transplantation-integrating-donor/figures/fig_02.jpg)