---
layout: post
title: "Exposure-safety analyses of talazoparib in combination with enzalutamide in patients with metastatic castration-resistant prostate cancer (mCRPC) in the TALAPRO-2 trial"
date: 2026-06-09
authors: "Wang Y, Hadigol M, Lincha VR, et al."
journal: "J Pharmacokinet Pharmacodyn 53, 30 (2026)"
doi: "10.1007/s10928-026-10038-7"
paper_type: popk
tags: [popk, oncology]
excerpt_text: "This paper presents exposure-safety analyses for talazoparib plus enzalutamide in mCRPC patients from the phase 3 TALAPRO-2 trial. Pharmacometricians and clinical pharmacologists should read this to understand how time-varying exposure metrics ($C_{avg,t}$) were used in Cox proportional hazards models to link higher talazoparib exposure with increased risk of grade ≥3 anemia, thrombocytopenia, and neutropenia. The findings directly support the dose modification algorithm that was employed in the trial, demonstrating that dose interruptions and reductions effectively manage hematologic toxicities."
pdf_path: "/assets/digests/2026-06-09-exposure-safety-analyses-of-talazoparib-in-combination-with-enzalutamide-in/PMx_Exposuresafety_analyses_of_talazoparib_i_20260609.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents exposure-safety analyses for talazoparib plus enzalutamide in mCRPC patients from the phase 3 TALAPRO-2 trial. Pharmacometricians and clinical pharmacologists should read this to understand how time-varying exposure metrics ($C_{avg,t}$) were used in Cox proportional hazards models to link higher talazoparib exposure with increased risk of grade ≥3 anemia, thrombocytopenia, and neutropenia. The findings directly support the dose modification algorithm that was employed in the trial, demonstrating that dose interruptions and reductions effectively manage hematologic toxicities.

---

### Executive Summary
Using data from 412 patients in the TALAPRO-2 trial, the authors characterized the relationship between talazoparib exposure (time-varying average concentration, $C_{avg,t}$) and the risk of grade ≥3 anemia, thrombocytopenia, and neutropenia via Cox proportional hazards models. Higher $C_{avg,t}$ was consistently associated with a higher hazard for all three hematologic endpoints. Additionally, lower baseline hemoglobin, lower body weight, and higher baseline lactate dehydrogenase were identified as significant covariates for anemia; lower baseline hemoglobin for thrombocytopenia; and lower baseline absolute neutrophil count, lower body weight, and lower baseline hemoglobin for neutropenia. The analyses accounted for dose modifications over time by using a time-varying exposure metric, which avoids the bias that would arise from using a single average exposure. These results provide quantitative evidence that the protocol-defined dose modification strategy (interruption and reduction) is effective in managing hematologic adverse events, supporting the benefit-risk profile of the talazoparib 0.5 mg (or 0.35 mg for moderate renal impairment) starting dose in combination with enzalutamide.

---

### Scientific Context & Motivation
The TALAPRO-2 trial demonstrated that talazoparib plus enzalutamide significantly improves radiographic progression-free survival in mCRPC, but hematologic adverse events (anemia, neutropenia, thrombocytopenia) are common, leading to dose interruptions (62%) and reductions (53%). Understanding the exposure-response relationship for these toxicities is critical to support dose management guidelines and to ensure that dose modifications do not compromise efficacy. Prior exposure-safety analyses for talazoparib monotherapy in breast cancer (EMBRACA/ABRAZO) showed similar associations, but the combination with enzalutamide alters talazoparib pharmacokinetics (due to P-gp inhibition), necessitating dedicated analyses. This study fills the gap by evaluating the exposure-safety relationship in the combination setting using a time-varying exposure metric that accounts for the dynamic nature of dosing due to adverse events and the drug-drug interaction.

---

## ⚡ Methodological Snapshot
The authors used Cox proportional hazards models with a time-varying exposure metric ($C_{avg,t}$) to evaluate the relationship between talazoparib exposure and the time to first grade ≥3 hematologic adverse event (anemia, thrombocytopenia, neutropenia). $C_{avg,t}$ was derived from individual post-hoc PK parameter estimates from a prior population PK model, recalculated at each event time across the population. Univariate screening identified candidate covariates (demographics, baseline labs, prior therapy), which were then entered into a multivariate model with stepwise elimination (p<0.05 to retain). The exposure metric was forced in all models. Proportional hazards assumption was tested using scaled Schoenfeld residuals. The analysis was performed in R using the survival package.

---

## 🏗️ Structural Model Breakdown
The analysis does not involve a structural pharmacokinetic or pharmacodynamic model; instead, it uses a semi-parametric survival model (Cox PH). The hazard function $h(t)$ is modeled as $h_0(t) \cdot \exp(\beta_1 \cdot C_{avg,t} + \beta_2 \cdot \text{cov}_1 + \dots)$. The baseline hazard $h_0(t)$ is left unspecified. The time-varying exposure $C_{avg,t}$ is a derived metric from a separate population PK model (not detailed in this paper). The model structure is additive on the log-hazard scale, with no compartments or differential equations.

---

### Detailed Methodological Analysis

#### Modeling Approach
Cox proportional hazards (PH) models were used to estimate hazard ratios for time to first grade ≥3 anemia, thrombocytopenia, and neutropenia. The primary exposure metric was time-varying average concentration ($C_{avg,t}$). Log-transformed $C_{avg,t}$ was also tested. Covariates included demographics (age, body weight, race), baseline labs (hemoglobin, platelet count, absolute neutrophil count, LDH, albumin, etc.), ECOG performance status, and prior therapy. Stepwise selection was used with a p-value threshold of 0.05 for retention; exposure metric was forced in all models. Software: R 4.1.1, survival package.

#### Data Sources
Data from the TALAPRO-2 phase 3 trial (NCT03395197), including 412 patients from the talazoparib + enzalutamide arm (Part 1 open-label and Part 2 double-blind). Patients received talazoparib 0.5 mg QD (0.35 mg for moderate renal impairment) plus enzalutamide 160 mg QD. PK samples were collected at multiple visits; individual concentration-time profiles were generated using post-hoc estimates from a prior population PK model. Adverse events were graded per CTCAE v4.03.

#### Estimation Methods
Cox proportional hazards models were estimated using partial likelihood maximization (coxph function in R). Time-varying exposure ($C_{avg,t}$) was updated at each unique event time. No Bayesian or parametric survival methods were used.

#### Model Evaluation
Proportional hazards assumption was tested using scaled Schoenfeld residuals (cox.zph function). For covariates with significant non-proportionality (e.g., baseline hemoglobin in anemia model), sensitivity analyses with interaction terms and log-transformations were performed. No internal validation (e.g., bootstrap or cross-validation) was reported.

#### Covariate Analysis
Covariates were preselected based on clinical relevance. Univariate Cox regression screened each covariate; those with p≤0.05 were entered into a multivariate model. Stepwise backward elimination was applied (p>0.05 removed) while forcing the exposure metric. Correlation among covariates was assessed visually (Supplemental Figure S2) to avoid multicollinearity. The final models retained only significant covariates (p<0.05) plus exposure.

---

### Statistical Rigor Assessment
The use of Cox PH models is appropriate for time-to-event data. The time-varying exposure metric is a strength, as it accounts for dose modifications. Univariate screening followed by stepwise multivariate selection is a common but potentially biased approach; no correction for multiple testing was applied. The proportional hazards assumption was tested and found to be violated for baseline hemoglobin in the anemia model; sensitivity analyses were conducted but did not fully resolve the issue. The low event count for thrombocytopenia (32 events) limits statistical power and may lead to unstable estimates. No internal validation (e.g., bootstrap) was performed to assess model optimism. Overall, the statistical methods are adequate for the exploratory nature of the analysis, but confirmatory conclusions should be drawn cautiously.

---

## 📊 Key Findings
Higher talazoparib time-varying average concentration ($C_{avg,t}$) was significantly associated with an increased hazard of grade ≥3 anemia (HR per unit increase in $C_{avg,t}$: 1.13, 95% CI: 1.04–1.22, p=0.003), thrombocytopenia (HR: 1.20, 95% CI: 1.07–1.35, p=0.002), and neutropenia (HR per log-unit increase: 2.08, 95% CI: 1.26–3.44, p=0.004). For anemia, additional significant covariates were lower baseline hemoglobin (HR per g/dL: 0.56, p<0.001), lower baseline body weight (HR per kg: 0.97, p=0.002), and higher baseline lactate dehydrogenase (HR per log-unit: 1.83, p=0.002). For thrombocytopenia, only lower baseline hemoglobin was significant (HR per g/dL: 0.62, p<0.001). For neutropenia, lower baseline absolute neutrophil count (HR per $10^9$/L: 0.60, p<0.001), lower baseline body weight (HR per kg: 0.97, p=0.003), and lower baseline hemoglobin (HR per g/dL: 0.68, p<0.001) were significant. The analyses also showed that the apparent higher risk in Asian patients was confounded by lower body weight, not a true racial effect.

---

## 💡 Clinical & Regulatory Implications
The results support the talazoparib dose modification algorithm used in TALAPRO-2: starting dose of 0.5 mg (0.35 mg for moderate renal impairment) with enzalutamide, and dose reductions to 0.35 mg, 0.25 mg, or 0.1 mg as needed to manage hematologic toxicities. Higher exposure increases risk of grade ≥3 anemia, neutropenia, and thrombocytopenia, so dose interruption/reduction is an effective strategy. Patients with lower baseline hemoglobin, lower body weight, higher LDH (for anemia), or lower baseline neutrophil count (for neutropenia) are at higher risk and may require closer monitoring. The confounding of race by body weight suggests that weight-based dosing considerations may be relevant for Asian populations. These findings were used to support regulatory submissions for the combination in mCRPC.

---

### Strengths & Limitations

#### Strengths
- Use of a time-varying exposure metric ($C_{avg,t}$) that accounts for dose modifications over time, avoiding the bias inherent in using a single average exposure for drugs with frequent dose changes.
- Large phase 3 dataset (412 patients) with well-characterized adverse event data and rich covariate information.
- Comprehensive covariate screening including demographics, baseline labs, prior therapy, and performance status.
- Sensitivity analyses exploring log-transformed exposure and assessment of proportional hazards assumption.
- Clinical relevance: directly supports the dose modification algorithm used in the trial and regulatory submissions.

#### Limitations (Acknowledged by Authors)
- Low incidence of grade ≥3 thrombocytopenia (7.8%) limits the reliability of the exposure-response analysis for this endpoint.
- Non-proportional hazards were observed for some covariates (e.g., baseline hemoglobin for anemia), though the exposure effect remained robust.
- The analysis is based on investigator-reported adverse events, which may have variability.
- Cox proportional hazards model assumes constant hazard ratios over time, which may not hold for all covariates.

#### Limitations (Expert Review)
- The time-varying exposure metric $C_{avg,t}$ is derived from individual post-hoc PK parameter estimates, which may introduce shrinkage and bias, especially for patients with sparse PK sampling.
- The analysis does not account for competing risks (e.g., death, disease progression) that may preclude the occurrence of the safety event.
- Stepwise covariate selection may lead to overfitting; no internal validation (e.g., bootstrap) was performed to assess model stability.
- The exposure metric is a simple average; more sophisticated metrics (e.g., cumulative AUC, time above threshold) might better capture the pharmacodynamic effect on hematologic toxicity.
- The analysis does not model the time course of toxicity (e.g., severity over time) but only time to first grade ≥3 event.

#### Generalizability
The results are specific to mCRPC patients receiving talazoparib in combination with enzalutamide at the doses studied. The findings may not directly apply to other PARP inhibitors, other combinations, or other cancer types. However, the methodological approach (time-varying exposure in Cox models) is broadly applicable to exposure-safety analyses for drugs with frequent dose modifications.

---

### Key Equations

**Time-varying AUC calculation**

{% raw %}
$$
\frac{d\text{AUC}_t}{dt} = C(t)
$$
{% endraw %}

The area under the concentration-time curve up to time t ($\text{AUC}_t$) is defined as the integral of talazoparib concentration $C(t)$ over time, used to derive the time-varying average concentration.

**Time-varying average concentration**

{% raw %}
$$
\text{Cavg}_t = \frac{\text{AUC}_t}{t}
$$
{% endraw %}

The time-varying average concentration ($\text{Cavg}_t$) is calculated as the $\text{AUC}$ up to time $t$ divided by $t$, representing the average exposure up to each event time.

**Cox proportional hazards model**

{% raw %}
$$
h(t) = h_0(t) \times \exp(\theta \times \text{cov})
$$
{% endraw %}

The hazard $h(t)$ at time $t$ is modeled as the baseline hazard $h_0(t)$ multiplied by the exponential of the product of the coefficient $\theta$ and the covariate value $\text{cov}$. This is the standard Cox PH model used for all endpoints.

**Regression coefficient**

{% raw %}
$$
\theta
$$
{% endraw %}

The coefficient $\theta$ quantifies the effect of a covariate (including talazoparib exposure) on the log-hazard. A positive $\theta$ indicates increased hazard with higher covariate values.

---

### Figures & Tables

- **Figure 1**: Boxplots of $C_{avg,t}$ distribution for patients without anemia events (gray) and individual $C_{avg,t}$ values for patients with grade ≥3 anemia events (blue dots) at each event day, with LOWESS trend lines.
  - *Significance*: Provides visual evidence that patients experiencing anemia tend to have higher talazoparib exposure, supporting the exposure-response relationship.
- **Figure 2**: Similar boxplot for thrombocytopenia events, showing higher $C_{avg,t}$ in patients with events.
  - *Significance*: Demonstrates the exposure-response trend for thrombocytopenia, though with fewer events.
- **Figure 3**: Similar boxplot for neutropenia events, showing higher $C_{avg,t}$ in patients with events.
  - *Significance*: Confirms the exposure-response relationship for neutropenia, the second most common grade ≥3 AE.
- **Table 1**: Baseline demographics and disease characteristics of the 412 patients included in the exposure-safety analysis.
  - *Significance*: Provides context for the study population and covariate distributions.
- **Table 2**: Number and percentage of patients with treatment-emergent grade ≥3 anemia, thrombocytopenia, and neutropenia.
  - *Significance*: Summarizes the incidence of the safety endpoints, with anemia being most common (46%), followed by neutropenia (18%) and thrombocytopenia (7.8%).
- **Table 3**: Final Cox proportional hazards model results for grade ≥3 anemia, including hazard ratios, confidence intervals, and p-values for $C_{avg,t}$, baseline body weight, baseline hemoglobin, and baseline lactate dehydrogenase.
  - *Significance*: Quantifies the independent effects of exposure and key covariates on anemia risk.
- **Table 4**: Final Cox model results for grade ≥3 thrombocytopenia, showing significant effects of $C_{avg,t}$ and baseline hemoglobin.
  - *Significance*: Identifies the limited set of predictors for thrombocytopenia due to low event count.
- **Table 5**: Final Cox model results for grade ≥3 neutropenia, showing significant effects of $\log(C_{avg,t})$, baseline body weight, baseline absolute neutrophil count, and baseline hemoglobin.
  - *Significance*: Highlights the role of baseline neutrophil count as a key predictor beyond exposure.

---

### Code & Reproducibility Assessment
The analysis was performed using R version 4.1.1 with the survival package. Individual deidentified participant data are available from Pfizer upon request subject to a data access agreement. No custom code repository was provided.

---

### Supplementary Materials
Supplementary materials include Figure S1 (trial schematic), Figure S2 (correlation plot of covariates), Figures S3-S5 (Schoenfeld residual diagnostic plots for proportional hazards assumption for anemia, thrombocytopenia, and neutropenia models), and Figure S6 (distribution of body weight by Asian vs. non-Asian subgroups). These figures support the robustness of the primary analyses and the exploration of confounding.

---

### Future Directions
Future analyses could employ joint modeling of efficacy and safety to optimize the benefit-risk trade-off, or use time-to-event models with time-varying covariates that allow for non-proportional hazards (e.g., piecewise exponential or spline-based models). Additionally, a more mechanistic pharmacodynamic model linking talazoparib concentration to hemoglobin/neutrophil dynamics over time could provide deeper insights into the time course of toxicity and recovery after dose modifications. The confounding between race and body weight warrants further investigation in diverse populations.

---

### Expert Commentary
This analysis is a textbook example of how to handle exposure-safety relationships when dose modifications are frequent. The key innovation is the use of $C_{avg,t}$, a time-varying exposure metric that recalculates average concentration up to each event time, rather than a single overall average. This avoids the 'survivor bias' where patients who tolerate higher doses longer have higher average exposure, artificially inflating the exposure-toxicity association. The authors correctly note that using a single $C_{avg}$ would exaggerate the relationship. The stepwise covariate selection is standard but could be complemented by LASSO or other regularization methods to reduce overfitting. The non-proportional hazards for baseline hemoglobin in the anemia model are a concern, but the authors' sensitivity analyses showing robustness of the exposure effect are reassuring. The finding that race (Asian vs. non-Asian) is confounded by body weight is clinically important and highlights the need for weight-based dosing considerations in Asian populations. Overall, this paper provides strong evidence for the dose modification strategy and should be referenced in future regulatory submissions for PARP inhibitor combinations.

---

### Bottom Line
Higher talazoparib exposure is consistently associated with increased risk of grade ≥3 anemia, thrombocytopenia, and neutropenia in mCRPC patients receiving talazoparib plus enzalutamide. The use of a time-varying average concentration ($C_{avg,t}$) appropriately captures the impact of dose modifications on exposure. These results provide quantitative support for the dose interruption and reduction algorithm used in TALAPRO-2, confirming that lowering exposure through dose modifications effectively reduces hematologic toxicity risk. For practicing pharmacometricians, this paper exemplifies best practices in exposure-safety analysis for drugs with dynamic dosing and highlights the importance of selecting exposure metrics that reflect the time-varying nature of drug exposure.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-06-09-exposure-safety-analyses-of-talazoparib-in-combination-with-enzalutamide-in/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-06-09-exposure-safety-analyses-of-talazoparib-in-combination-with-enzalutamide-in/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-06-09-exposure-safety-analyses-of-talazoparib-in-combination-with-enzalutamide-in/figures/fig_03.png)