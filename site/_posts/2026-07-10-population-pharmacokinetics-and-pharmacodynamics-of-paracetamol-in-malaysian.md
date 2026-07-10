---
layout: post
title: "Population Pharmacokinetics and Pharmacodynamics of Paracetamol in Malaysian Patients With Plasmodium knowlesi Malaria"
date: 2026-07-10
authors: "Wattanakul T, Hoglund RM, Cooper DJ, Plewes K, Grigg MJ, Rajahram GS, William T, Dondorp AM, Edstein MD, Birrell GW, Anstey NM, Barber BE, Tarning J"
journal: "Clinical Pharmacology & Therapeutics, 2025"
doi: "10.1002/cpt.70000"
paper_type: popk
tags: [popk]
excerpt_text: "This PK/PD analysis of the PACKNOW trial in 372 patients with Plasmodium knowlesi malaria demonstrates that higher paracetamol exposure is associated with faster creatinine decline and fever clearance, without clinically significant hepatotoxicity. The renoprotective effect was exposure-dependent and extended to non-severe malaria, supporting broader use of paracetamol as an adjunct in malaria management. Pharmacometricians and clinicians interested in malaria-associated AKI and drug repurposing will find this analysis valuable."
pdf_path: "/assets/digests/2026-07-10-population-pharmacokinetics-and-pharmacodynamics-of-paracetamol-in-malaysian/PMx_Population_Pharmacokinetics_and_Pharmaco_20260710.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This PK/PD analysis of the PACKNOW trial in 372 patients with Plasmodium knowlesi malaria demonstrates that higher paracetamol exposure is associated with faster creatinine decline and fever clearance, without clinically significant hepatotoxicity. The renoprotective effect was exposure-dependent and extended to non-severe malaria, supporting broader use of paracetamol as an adjunct in malaria management. Pharmacometricians and clinicians interested in malaria-associated AKI and drug repurposing will find this analysis valuable.

---

### Executive Summary
This study presents a comprehensive population PK/PD analysis of paracetamol in 372 Malaysian patients with Plasmodium knowlesi malaria from the PACKNOW trial. The PK model, built using an informative prior from falciparum malaria, revealed a time-dependent decline in paracetamol bioavailability during acute illness. The PD models demonstrated that higher paracetamol exposure ($AUC_{0-72H}$) was significantly associated with faster creatinine decline (25.4% increase in reduction rate per 10-fold AUC increase) and faster fever clearance (15.8% faster per 100 mg·h/L increase), while showing only a weak, non-clinically significant association with ALT elevation. No effect on parasite clearance was observed. These findings provide quantitative evidence supporting the renoprotective and antipyretic benefits of paracetamol in knowlesi malaria, extending previous observations from falciparum malaria.

---

### Scientific Context & Motivation
Acute kidney injury (AKI) is a frequent and serious complication of severe malaria, associated with mortality and long-term morbidity. The pathophysiology involves oxidative damage from cell-free hemoglobin (CFH) released during hemolysis. Paracetamol has been shown to inhibit ferryl heme-mediated lipid peroxidation, suggesting a renoprotective mechanism. Previous studies in falciparum malaria showed paracetamol improved renal function, but data in knowlesi malaria were limited. The PACKNOW trial found renoprotection only in subgroups with severe malaria, AKI, and hemolysis, but not in the overall cohort. This PK/PD analysis aimed to quantify the exposure-response relationship to clarify whether paracetamol benefits extend to non-severe disease.

---

## ⚡ Methodological Snapshot
The PK model was a two-compartment model with first-order absorption and time-dependent relative bioavailability, using an informative prior from a previously published model in falciparum malaria. The PK/PD creatinine model used an exponential decay with plateau function, with paracetamol $AUC_{0-72H}$ as a linear covariate on the rate constant. Fever clearance was modeled using a parametric time-to-event (log-logistic hazard) approach. ALT was modeled using a log-linear model. All models were evaluated using goodness-of-fit plots, VPCs, and bootstrap.

---

## 🏗️ Structural Model Breakdown
PK model: Two-compartment model with first-order absorption and time-dependent relative bioavailability ($F_t$ decreases from 1 to $F_{MIN}$ via a sigmoidal function with $F_{50}$). Parameters: $k_a$ ($0.917$ $h^{-1}$), $CL/F$ ($9.80$ $L/h$), $V_C/F$ ($53.7$ L), $Q/F$ ($10.7$ $L/h$), $V_P/F$ ($33.2$ L), $F_{50}$ (10.2 h), $F_{MIN}$ (0.22). IIV on $CL$, $V_C$, $Q$, $V_P$, and $k_a$. IOV on $F$. Residual error: additive on log scale. Creatinine PD model: Exponential decay with plateau. Rate constant $k$ ($0.0477$ $h^{-1}$) modified by $\log_{10}(AUC_{0-72H})$. Plateau ($-9.9\%$) modified by KDIGO stage. IIV on $k$ and plateau. Additive residual error. Fever clearance: Log-logistic hazard model with $AUC_{0-72H}$ as linear covariate on hazard. ALT model: Log-linear model with slope ($0.00236$ $h^{-1}$) modified by $AUC_{0-72H}$, age, and baseline ALT. Intercept modified by body weight. IIV on slope and intercept.

---

### Detailed Methodological Analysis

#### Modeling Approach
Population PK model: two-compartment with first-order absorption and time-dependent relative bioavailability, using an informative prior from a published falciparum malaria model. PK/PD creatinine model: exponential decay with plateau, with paracetamol $AUC_{0-72H}$ as a linear covariate on the rate constant. Fever clearance: parametric time-to-event (log-logistic hazard) with $AUC_{0-72H}$ as linear covariate on hazard. ALT: log-linear model with $AUC_{0-72H}$ as linear covariate on slope. Parasite clearance: linear regression of exposure vs. clearance parameters.

#### Data Sources
Data from the PACKNOW trial (NCT03056391), a two-arm, open-label RCT in 372 Malaysian patients with Plasmodium knowlesi malaria (paracetamol n=183, control n=189). Patients received paracetamol 1 g orally every 6 h for 72 h or no paracetamol. Plasma paracetamol concentrations (2435 samples) were measured by LC-MS/MS under intensive (22 patients) or sparse (161 patients) sampling. Creatinine was measured every 12 h for 72 h. Fever was assessed every 6 h. ALT was measured over 0-168 h.

#### Estimation Methods
NONMEM with FOCE+I was used for the PK model. The PK/PD creatinine model used FOCE+I. The time-to-event fever clearance model used Laplacian estimation. Bootstrap (1000 runs) was used for parameter uncertainty. Linear regression in GraphPad Prism was used for parasite clearance associations.

#### Model Evaluation
Goodness-of-fit plots (observed vs. predicted, conditional weighted residuals), prediction-corrected VPCs (n=1000 simulations), and bootstrap (1000 runs) for parameter uncertainty and 95% CIs. Shrinkage was reported for random effects.

#### Covariate Analysis
Stepwise covariate modeling was used for the ALT model, identifying age, baseline ALT, and body weight as significant covariates. For the creatinine model, KDIGO stage was included as a categorical covariate on the plateau. For fever clearance, severe malaria and CFH ≥77,600 ng/mL were evaluated but not retained. All covariate effects were assessed for clinical relevance.

---

### Statistical Rigor Assessment
The analysis uses appropriate nonlinear mixed-effects modeling with FOCE+I and Laplacian estimation. Parameter uncertainty is assessed via 1000 bootstrap replicates, providing robust 95% CIs. Model evaluation includes VPCs and goodness-of-fit plots. The sample size (n=372) is adequate for the PK/PD models, though the severe malaria subgroup (n=28) is small, limiting power for subgroup analyses. Missing data handling is not explicitly described but appears minimal. The time-to-event model for fever clearance has high RSE on the exposure effect (45-50%), indicating some imprecision. The linear regression for parasite clearance is appropriate but lacks adjustment for multiple comparisons.

---

## 📊 Key Findings
Higher paracetamol exposure ($AUC_{0-72H}$) was significantly associated with a faster decline in creatinine (25.4% increase in reduction rate per 10-fold AUC increase, $p<0.01$), with a mean maximal reduction of 9.9% below baseline. The effect was more pronounced in patients with higher KDIGO stages. Fever clearance time was also faster with higher exposure (15.8% faster per 100 mg·h/L for FCT-A, 12.6% for FCT-B). Paracetamol exposure showed a weak positive association with ALT slope (0.3% increase per mg·h/L), but values remained well below hepatotoxicity thresholds. No significant relationship was found between paracetamol exposure and parasite clearance. The PK model revealed a time-dependent decline in relative bioavailability, with $F_{50}$ of 10.2 h and $F_{MIN}$ of 0.22.

---

## 💡 Clinical & Regulatory Implications
The exposure-response relationship supports the use of paracetamol 1 g every 6 h for 72 h as a renoprotective and antipyretic adjunct in Plasmodium knowlesi malaria. The benefit was most pronounced in patients with higher KDIGO stages (AKI), but the PK/PD model suggests potential benefit even in non-severe cases. No dose adjustment is needed based on these data, but the time-dependent decline in exposure suggests that therapeutic drug monitoring or dose escalation in severe cases could be explored. The lack of hepatotoxicity at these exposures supports safety in this population.

---

### Strengths & Limitations

#### Strengths
- Large, well-characterized dataset from a randomized controlled trial
- Use of informative prior from falciparum malaria to stabilize PK model in a smaller cohort
- Comprehensive PK/PD analysis covering renal, hepatic, fever, and parasite outcomes
- Robust model evaluation with bootstrap and VPCs
- Clinically relevant exposure-response relationships with clear dose-response gradients

#### Limitations (Acknowledged by Authors)
- Inability to differentiate whether time-dependent exposure decline is due to changes in bioavailability or clearance
- Small sample size in severe malaria subgroup (n=28) limiting power for subgroup analyses
- Lack of metabolite measurements to elucidate mechanism of time-dependent PK
- Open-label design of the PACKNOW trial

#### Limitations (Expert Review)
- High relative standard error (45-50%) on the paracetamol exposure effect in fever clearance models
- The creatinine model uses percentage change from baseline, which may not capture absolute changes in patients with normal baseline creatinine
- No formal model-based dose optimization or simulation to recommend alternative dosing regimens
- The ALT model shows a statistically significant but clinically negligible effect; the clinical relevance is questionable
- No assessment of paracetamol's effect on hard renal outcomes (e.g., need for RRT, mortality)

#### Generalizability
The study population is representative of Malaysian patients with knowlesi malaria, predominantly non-severe. Results may not generalize to other Plasmodium species, pediatric patients <5 years, or different dosing regimens. The prior PK model from falciparum malaria may not fully capture knowlesi-specific PK, though the informative prior approach mitigates this.

---

### Key Equations

**Time-dependent bioavailability**

{% raw %}
$$
F_t = 1 - (1 - F_{MIN}) \times \frac{t}{t + F_{50}}
$$
{% endraw %}

Time-dependent relative bioavailability model for paracetamol, where F_t decreases from 1 to F_MIN over time.

**Creatinine change from baseline**

{% raw %}
$$
\%\Delta Cr_t = \text{Plateau} + (\%\Delta Cr_0 - \text{Plateau}) \times e^{-k \times t}
$$
{% endraw %}

Exponential decay with plateau model for percentage change from baseline creatinine.

**Exposure effect on creatinine rate**

{% raw %}
$$
k = k_{pop} \times (1 + \theta_{AUC} \times \log_{10}(AUC_{0-72H}))
$$
{% endraw %}

Effect of paracetamol exposure on the rate constant of creatinine decline.

**ALT log-linear model**

{% raw %}
$$
\ln(ALT_t) = \text{Intercept} + \text{Slope} \times t
$$
{% endraw %}

Log-linear model for ALT change over time.

**Exposure effect on ALT slope**

{% raw %}
$$
\text{Slope} = \text{Slope}_{pop} \times (1 + \theta_{AUC} \times AUC_{0-72H})
$$
{% endraw %}

Effect of paracetamol exposure on the slope of ALT change.

---

### Figures & Tables

- **Figure 1**: Goodness-of-fit plots and prediction-corrected VPC for the final PK model of paracetamol
  - *Significance*: Validates the PK model's descriptive and predictive performance, showing good agreement between observed and predicted concentrations.
- **Figure 2**: Goodness-of-fit plots and VPC for the PK/PD model of paracetamol effect on creatinine
  - *Significance*: Demonstrates the model's ability to capture the time course of creatinine change from baseline, supporting the renoprotective effect.
- **Figure 3**: Goodness-of-fit plots and VPC for the PK/PD model of paracetamol effect on ALT
  - *Significance*: Shows the model's performance for ALT, confirming the weak but statistically significant association with paracetamol exposure.
- **Table 1**: Baseline characteristics of the study population by treatment arm
  - *Significance*: Provides demographic and clinical context, showing balanced randomization and the proportion of patients with severe malaria and AKI.
- **Table 2**: Parameter estimates for the final population PK model of paracetamol
  - *Significance*: Lists all PK parameters including time-dependent bioavailability, with bootstrap-derived confidence intervals and shrinkage.
- **Table 3**: Parameter estimates for the final PK/PD model of paracetamol effect on creatinine
  - *Significance*: Quantifies the exposure-response relationship and KDIGO stage effects on creatinine plateau.
- **Table 4**: Parameter estimates for the final PK/PD model of paracetamol effect on ALT
  - *Significance*: Shows the small but significant effect of paracetamol exposure on ALT slope, along with covariate effects.

---

### Code & Reproducibility Assessment
NONMEM was used for all PK/PD modeling. No public code repository was provided. The prior PK model from falciparum malaria was used as an informative prior, but the specific code and control streams are not publicly available.

---

### Supplementary Materials
Supplementary materials include study procedures (File S1), PK model details (File S2), PK/PD model details (File S3), and additional figures/tables (Figure S1-S3, Table S1). These are referenced in the main text but not provided in the extracted content.

---

### Future Directions
Future studies should include metabolite measurements (glucuronide, sulfate, NAPQI) to elucidate the mechanism of time-dependent paracetamol bioavailability decline in acute malaria. Pooled PK analyses across Plasmodium species could identify species-specific differences. Prospective dose-ranging studies in severe malaria with AKI could optimize the renoprotective dose. Long-term follow-up for renal outcomes beyond 72 h would strengthen the clinical relevance. Finally, mechanistic PK/PD models incorporating cell-free hemoglobin as a biomarker could further validate the proposed oxidative stress pathway.

---

### Expert Commentary
This is a well-executed PK/PD analysis that leverages a large, randomized trial dataset to address a clinically important question. The use of an informative prior from falciparum malaria to stabilize the PK model in a smaller knowlesi cohort is a pragmatic and statistically sound approach. The time-dependent bioavailability model is particularly interesting—it suggests that acute malaria infection alters drug disposition, possibly through downregulation of metabolic enzymes. This phenomenon deserves further study with metabolite data. The creatinine model is robust, with clear exposure-response and KDIGO-dependent effects. The fever clearance time-to-event model is appropriately handled, though the high RSE on the exposure effect (45-50%) indicates some uncertainty. The ALT model, while statistically significant, shows a very small effect size (0.3% increase per mg·h/L) that is unlikely to be clinically meaningful. Overall, this analysis strengthens the evidence base for paracetamol as a renoprotective agent in malaria and provides a template for PK/PD analyses in resource-limited settings.

---

### Bottom Line
This PK/PD analysis of the PACKNOW trial demonstrates that higher paracetamol exposure is associated with faster creatinine decline and fever clearance in Plasmodium knowlesi malaria, without clinically significant hepatotoxicity. The renoprotective effect was exposure-dependent and extended to patients with non-severe disease, supporting broader use of paracetamol in malaria management. The model also revealed a time-dependent decline in paracetamol bioavailability during acute illness, warranting further mechanistic investigation.

---

---

## 📊 Figures

![Goodness-of-fit plots and prediction-corrected visual predictive check of the final population pharmacokinetic model of paracetamol inPlasmodium knowlesipatients]({{ site.baseurl }}/assets/digests/2026-07-10-population-pharmacokinetics-and-pharmacodynamics-of-paracetamol-in-malaysian/figures/fig_01.png)

![Goodness-of-fit plots and visual predictive check of the final PK/PD model for paracetamol effect on creatinine. Observed creatinine change from baseline versus]({{ site.baseurl }}/assets/digests/2026-07-10-population-pharmacokinetics-and-pharmacodynamics-of-paracetamol-in-malaysian/figures/fig_02.png)

![Goodness-of-fit plots and visual predictive check of PK/PD model for paracetamol effect on alanine aminotransferase (ALT). Observed ln (ALT) versus population pr]({{ site.baseurl }}/assets/digests/2026-07-10-population-pharmacokinetics-and-pharmacodynamics-of-paracetamol-in-malaysian/figures/fig_03.png)