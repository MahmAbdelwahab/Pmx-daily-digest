---
layout: post
title: "Population Pharmacokinetics and Exposure-Response Analysis of Ziftomenib in Relapsed or Refractory Acute Myeloid Leukemia Patients With NPM1 Mutation"
date: 2026-05-06
authors: "Amitava Mitra et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70244"
paper_type: popk
tags: [popk, qsp, dose-response, covariate-analysis, oncology]
excerpt_text: "This paper characterizes the population pharmacokinetics (popPK) and exposure-response (ER) relationships of ziftomenib, a selective menin inhibitor, in relapsed/refractory AML patients with NPM1 mutation. A two-compartment model with first-order absorption adequately described PK, and covariates such as food, PPIs, and strong CYP3A4 inhibitors affected exposure but not clinically relevant. Flat ER profiles indicated a wide therapeutic margin, supporting the 600 mg once-daily dose without need for dose adjustment when co-administered with antifungal azoles."
pdf_path: "/assets/digests/2026-05-06-population-pharmacokinetics-and-exposure-response-analysis-of-ziftomenib-in/PMx_Population_Pharmacokinetics_and_Exposure_20260506.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper characterizes the population pharmacokinetics (popPK) and exposure-response (ER) relationships of ziftomenib, a selective menin inhibitor, in relapsed/refractory AML patients with NPM1 mutation. A two-compartment model with first-order absorption adequately described PK, and covariates such as food, PPIs, and strong CYP3A4 inhibitors affected exposure but not clinically relevant. Flat ER profiles indicated a wide therapeutic margin, supporting the 600 mg once-daily dose without need for dose adjustment when co-administered with antifungal azoles.

---

### Executive Summary
The study provides a comprehensive popPK and ER analysis of ziftomenib in R/R NPM1-m AML patients, demonstrating that while food intake, proton-pump inhibitors, and strong CYP3A4 inhibitors significantly alter ziftomenib exposure, the magnitude of these changes does not translate into clinically meaningful differences in efficacy or safety. The flat exposure-response relationships across a broad exposure range underscore a wide therapeutic margin, justifying the fixed 600 mg once-daily dose and supporting co-administration with essential antifungal azoles without dose adjustment. These findings reinforce the utility of exposure-based dosing strategies in oncology and highlight the robustness of ziftomenib's pharmacokinetics in a heavily pretreated patient population.

---

### Scientific Context & Motivation
Prior to this analysis, the pharmacokinetics of ziftomenib and its active metabolites in the target patient population were incompletely characterized, and it was unclear whether intrinsic or extrinsic factors necessitated dose adjustments, particularly given the frequent co-administration of CYP3A4-inhibiting antifungal agents in AML patients. The study addressed these gaps by developing a robust two-stage popPK model for ziftomenib and its metabolites and conducting extensive ER analyses for multiple efficacy and safety endpoints. By demonstrating that covariates such as NPM1 mutation status, weight, age, sex, race, renal/hepatic function, and P-gp inhibition do not clinically impact exposure, and that observed exposure changes do not affect outcomes, the work challenges the assumption that targeted AML agents require therapeutic drug monitoring or dose individualization based on standard covariates.

---

## ⚡ Methodological Snapshot
A sequential two-stage population pharmacokinetic approach was employed: first, a popPK model for ziftomenib was developed using pooled data from healthy volunteers and R/R AML patients; second, individual empirical Bayes estimates of ziftomenib PK parameters were fixed to characterize the disposition of its active metabolites KO-739 and KO-516. Structural models were two-compartment with first-order elimination and absorption (with lag time) for the parent, and two-compartment linear for metabolites. Covariate relationships were tested via forward addition ($p < 0.01$) and backward elimination ($p < 0.001$). Exposure-response relationships were evaluated using logistic regression for multiple efficacy and safety endpoints.

---

## 🏗️ Structural Model Breakdown
Ziftomenib PK was described by a two-compartment model with central ($V_c$) and peripheral ($V_p$) volumes, intercompartmental clearance ($Q$), and systemic clearance ($CL$). Absorption was first-order with rate constant $k_a$ and a lag time ($ALAG$) to account for delayed systemic appearance. Oral bioavailability ($F_1$) was fixed at 0.129 based on absolute bioavailability data. Metabolites KO-739 and KO-516 were each modeled with a two-compartment linear disposition, where formation fraction ($F_M$) from parent was fixed at 0.535 total and 0.5 for each metabolite (1:1 ratio). Elimination of metabolites occurred via clearances $CL_{516}$ and $CL_{739}$. Inter-occasion variability (IOV) was applied to $F_1$ to capture variability across dosing occasions.

---

### Detailed Methodological Analysis

#### Modeling Approach
Sequential two-stage NLME modeling in NONMEM 7.5.1 using FOCE INTER; parent drug modeled with two-compartment, first-order absorption and lag time; metabolites modeled similarly with parent EBEs as input; proportional residual error models with additive term for KO-739; IOV across three occasions.

#### Data Sources
Pooled plasma concentration data from KOMET-001 (R/R AML patients, $n=174$) and KO-MEN-003 (healthy volunteers, $n=14$), yielding 2436 ziftomenib, 2376 KO-739, and 2299 KO-516 measurable samples; PK sampling included rich profiles in early occasions and sparse samples later; ER datasets comprised 100 patients for efficacy and 119 for safety from KOMET-001 phase 1/2.

#### Estimation Methods
NONMEM FOCE INTER for parameter estimation; empirical Bayes estimates derived for individual PK parameters; steady-state simulations performed in R using mrgsolve package with posterior Bayesian estimates.

#### Model Evaluation
Goodness-of-fit assessed via shrinkage (<40%) and RSE (<26%); predictive performance evaluated by prediction-corrected visual predictive checks (VPCs) showing alignment of observed and simulated medians and percentiles; bootstrap not explicitly mentioned but VPC used.

#### Covariate Analysis
Univariable forward addition ($p < 0.01$) followed by backward elimination ($p < 0.001$) to test relationships between random effects of PK parameters and covariates (age, weight, sex, race, health status, fed status, PPI, CYP3A4 inhibitors, P-gp inhibitors, renal/hepatic function, mutation status); significant covariates retained in final model.

---

### Statistical Rigor Assessment
Parameter estimates were precise with relative standard errors generally below 26% and shrinkage under 40% for most parameters, indicating adequate identifiability. The use of IOV reduced unexplained variability and improved model fit. Covariate selection employed stringent p-value thresholds (forward $p < 0.01$, backward $p < 0.001$) to limit false positives. Exposure-response analyses used logistic regression with AIC for metric selection and evaluated significance via $t$-test ($p < 0.05$). The wide exposure range (16-fold AUC) and flat ER curves strengthen confidence that lack of relationship is not due to insufficient variability. No formal external validation (e.g., independent dataset) was performed, but VPCs demonstrated good predictive performance.

---

## 📊 Key Findings
The final popPK model estimated typical clearance of $11.6$ L/h and central volume of $54.6$ L for ziftomenib in R/R AML patients, with food increasing bioavailability 6.1-fold, PPIs reducing it by 37%, and strong CYP3A4 inhibitors decreasing clearance by 54%. Exposure metrics ($AUC_{ss}$, $C_{max}$, $C_{trough}$) showed no statistically significant relationships with any of six efficacy endpoints or twelve safety endpoints, yielding flat ER curves across a 16-fold AUC range. Consequently, the 600 mg once-daily dose was affirmed as appropriate, and concomitant antifungal azoles were shown to have no clinically meaningful impact on efficacy or safety, allowing co-administration without dose adjustment.

---

## 💡 Clinical & Regulatory Implications
The results support a fixed 600 mg once-daily dosing regimen of ziftomenib in adult R/R NPM1-m AML patients without the need for dose adjustment based on age, weight, sex, race, renal or hepatic function, or mutation status. Concomitant use of proton-pump inhibitors should be avoided due to reduced bioavailability, while strong CYP3A4 inhibitors (including antifungal azoles) do not require dose adjustment given the flat exposure-response relationships and wide therapeutic margin. These findings facilitate clinical use and simplify drug-drug interaction management in a population often requiring prophylactic antifungals.

---

### Strengths & Limitations

#### Strengths
- Sequential two-stage modeling approach improved identifiability and reduced complexity for parent and metabolite PK.
- Comprehensive covariate analysis using formal forward addition ($p < 0.01$) and backward elimination ($p < 0.001$) to identify significant intrinsic and extrinsic factors.
- Inclusion of inter-occasion variability (IOV) to capture within-subject variability across different dosing occasions and study periods.
- Robust model evaluation via prediction-corrected visual predictive checks (VPCs) showing good agreement between observed and simulated concentrations.
- Exposure-response analyses conducted for multiple efficacy and safety endpoint combinations using logistic regression, with flat relationships assessed across a wide exposure range.
- Use of both healthy volunteer and patient data to characterize the effect of disease status on PK.

#### Limitations (Acknowledged by Authors)
- Lack of patients with severe renal or hepatic impairment precluded assessment of PK in these populations.
- Fraction metabolized to metabolites was not identifiable due to absence of intravenous metabolite data, requiring estimation and fixing in the model.
- High variability in the patient population due to disease severity and concomitant medications may confound exposure-response relationships.
- Metabolite concentrations were low (<10% of total exposure), limiting the ability to characterize metabolite PK with high precision.
- ER analyses were primarily based on phase 2 data, potentially limiting generalizability to earlier dose-escalation phases.

#### Limitations (Expert Review)
- Reliance on fixed oral bioavailability ($F_1$) from a single study may introduce uncertainty if bioavailability varies across formulations or populations.
- Proportional error models may not fully capture heteroscedasticity at low concentrations.
- The study did not explore potential time-varying covariates or adherence effects.
- Generalizability to other ethnicities may be limited as demographic details were not fully reported.
- The model did not evaluate food effect beyond a binary fed/fasted classification.
- Impact of genetic polymorphisms in CYP3A4 or transporters was not assessed.

#### Generalizability
The findings are likely generalizable to adult patients with R/R NPM1-m AML receiving ziftomenib 600 mg once daily, particularly regarding the lack of clinically relevant covariate effects on exposure and the flat exposure-response relationships. However, caution is warranted when extrapolating to patients with severe renal or hepatic impairment, those requiring strong CYP3A4 inducers, or pediatric populations, as these groups were not studied. The co-administration safety with antifungal azoles supports use in typical AML prophylaxis regimens.

---

---

### Figures & Tables

- **Figure 1**: Population PK model of ziftomenib and its metabolites showing compartments, clearance, volumes, absorption, lag time, and fraction metabolized.
  - *Significance*: Illustrates the structural model used for parent and metabolite PK, providing a visual schematic of the two-compartment disposition with first-order absorption and metabolite formation.
- **Figure 2**: Prediction-corrected visual predictive checks for the final population PK model over time after dose and time since first dose.
  - *Significance*: Demonstrates good model predictive performance with observed and simulated concentrations aligning well, supporting model reliability for simulation.
- **Figure 3**: Geometric Mean Ratios and 90% CIs for comparisons of steady-state $AUC_{ss}$ and $C_{max,ss}$ of ziftomenib for (A) AML patients vs. healthy volunteers; (B) in AML patients by covariates.
  - *Significance*: Quantifies the impact of intrinsic and extrinsic factors on exposure, highlighting food, PPI, and CYP3A4 inhibitors as major drivers of variability.
- **Figure 4**: Logistic regression plots between probability of efficacy and ziftomenib $AUC_{ss}$ in R/R NPM1-m AML patients for various efficacy endpoints.
  - *Significance*: Visualizes flat exposure-response relationships for efficacy, supporting the lack of exposure-efficacy correlation across the tested endpoints.
- **Figure 5**: Logistic regression plots between probability of adverse events and ziftomenib $AUC_{ss}$ in R/R NPM1-m AML patients for safety endpoints.
  - *Significance*: Visualizes flat exposure-response relationships for safety, supporting the lack of exposure-safety correlation across the tested endpoints.
- **Figure S1**: Study design of KOMET-001 showing phase 1/2 structure and dosing regimen.
  - *Significance*: Outlines the trial structure that informed the PK and ER populations, clarifying the source of data used in analyses.
- **Figure S2**: Overview of the popPK and ER modeling steps of ziftomenib and its metabolites.
  - *Significance*: Summarizes the sequential two-stage modeling approach and ER analysis workflow, clarifying the analytic strategy.
- **Figure S3**: Effects of food intake, PPI co-administration, strong CYP3A4 inhibitor use, and disease status on ziftomenib exposure ($C_{trough}$, $C_{max}$, AUC).
  - *Significance*: Quantifies the magnitude of covariate effects on exposure metrics, aiding clinical interpretation of drug-drug interaction and food effect.
- **Figure S4**: Box plots of steady-state exposure metrics ($AUC_{ss}$, $C_{max}$, $C_{trough}$) across dose levels showing wide exposure range.
  - *Significance*: Demonstrates the broad exposure range over which flat ER relationships were observed, reinforcing the conclusion of a wide therapeutic margin.
- **Table 1**: Final PK parameter estimates of ziftomenib and its metabolites, including inter-individual variability, shrinkage, and covariate effects.
  - *Significance*: Provides the quantitative basis for the popPK model, showing typical values and significance of covariates such as food, PPI, and CYP3A4 inhibitors.
- **Table 2**: Logistic regression analysis of exposure-efficacy and exposure-safety relationships, showing $p$-values for each exposure metric across endpoints.
  - *Significance*: Statistically confirms the absence of significant exposure-response relationships for both efficacy and safety endpoints.
- **Table S1**: Descriptive statistics of continuous and categorical covariates at baseline in each study and overall population.
  - *Significance*: Characterizes the demographic and clinical characteristics of the PK and ER populations, providing context for covariate analysis.
- **Table S2**: Study design with PK sampling scheme for KOMET-001 and KO-MEN-003.
  - *Significance*: Details the sampling intensity and timing that informed the PK dataset, explaining the richness of data across occasions.
- **Table S3**: Number of BLQ observations and handling method using the M1 approach.
  - *Significance*: Shows low frequency of below-limit-of-quantification data and validates the chosen method for handling BLQ values.

---

### Future Directions
Future work should evaluate the pharmacokinetics of ziftomenib in patients with severe renal or hepatic impairment, explore potential drug-drug interactions with strong CYP3A4 inducers, and assess the impact of genetic polymorphisms in CYP3A4 and transporters on exposure. Additionally, exposure-response analyses could be extended to longer-term outcomes such as overall survival and minimal residual disease clearance, and pediatric studies are warranted to inform dosing in younger patients.

---

### Expert Commentary
This study exemplifies a rigorous population PK/ER workflow that successfully leverages rich data from healthy volunteers and patients to characterize a targeted oncology agent. The flat exposure-response relationships, while somewhat unexpected for a targeted inhibitor, provide strong evidence of a wide therapeutic margin and simplify clinical use. The demonstration that concomitant antifungal azoles do not necessitate dose adjustment is particularly valuable given their routine use in AML patients. From a methodological standpoint, the sequential two-stage approach for parent and metabolite modeling is a useful strategy when metabolite data are sparse, and the thorough covariate analysis underscores the importance of distinguishing statistical significance from clinical relevance.

---

### Bottom Line
Ziftomenib exhibits predictable pharmacokinetics that are minimally affected by intrinsic patient factors; food, proton-pump inhibitors, and strong CYP3A4 inhibitors alter exposure but not efficacy or safety, supporting a fixed 600 mg once-daily dose without therapeutic drug monitoring or dose adjustments when co-administered with essential antifungal agents.

---

---

## 📊 Figures

![FIGURE 1: Population PK model of ziftomenib and its metabolites. CL, clearance of ziftomenib; CL_516, clearance of KO-516; CL_739, clearance of KO-739; F1, fraction of abs]({{ site.baseurl }}/assets/digests/2026-05-06-population-pharmacokinetics-and-exposure-response-analysis-of-ziftomenib-in/figures/fig_01.jpg)

![FIGURE 2: Prediction-corrected visual predictive checks for the final population PK model over time after dose (left panel) and time since first dose (right panel) for zif]({{ site.baseurl }}/assets/digests/2026-05-06-population-pharmacokinetics-and-exposure-response-analysis-of-ziftomenib-in/figures/fig_02.jpg)

![FIGURE 3: Geometric Mean Ratios and 90% CIs for Comparisons of Steady-state AUCssand Cmax,ssof Ziftomenib for (A) AML Patients vs. Healthy Volunteers; (B) in AML Patients]({{ site.baseurl }}/assets/digests/2026-05-06-population-pharmacokinetics-and-exposure-response-analysis-of-ziftomenib-in/figures/fig_03.jpg)

![FIGURE 4: Logistic regression plots between probability of efficacy and ziftomenib AUCssin R/RNPM1-m AML patients—(A) MLFS, CRp, CRi, CRh, CR, CRmrd-; (B) CR or CRmrd-; (C]({{ site.baseurl }}/assets/digests/2026-05-06-population-pharmacokinetics-and-exposure-response-analysis-of-ziftomenib-in/figures/fig_04.jpg)

![FIGURE 5: Logistic regression plots between probability of adverse events and ziftomenib AUCssin R/RNPM1-m AML patients—(A) treatment emergent differentiation syndrome (TE]({{ site.baseurl }}/assets/digests/2026-05-06-population-pharmacokinetics-and-exposure-response-analysis-of-ziftomenib-in/figures/fig_05.jpg)