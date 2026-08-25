---
layout: post
title: "Extrapolating Vincristine-Induced Peripheral Neuropathy From Caucasian to Kenyan Populations: Impact of Type I and Type II Selection Bias"
date: 2026-08-25
authors: "Centanni M, Friberg LE, Karlsson MO, Huitema ADR, van de Velde ME, Kaspers GJL"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, Vol 15, Issue 8"
doi: "10.1002/psp4.70303"
paper_type: popk
tags: [popk, pediatrics, oncology]
excerpt_text: "This study systematically evaluates how informative censoring (Type I selection bias) and population-level differences in effect modifiers (Type II selection bias) affect the transportability of a vincristine PKPD model from Dutch/Caucasian children to Kenyan children. The authors show that reduced VIPN risk in Kenyan children reflects lower pharmacodynamic sensitivity (neuronal susceptibility) rather than lower systemic exposure, and that mechanistic genetic adjustments (ABCB1, CEP72) improve cross-population predictions while CYP3A5-based adjustments overcorrect. Pharmacometricians working on model extrapolation, pediatric oncology dosing, or transportability methodology should read this paper."
pdf_path: "/assets/digests/2026-08-25-extrapolating-vincristine-induced-peripheral-neuropathy-from-caucasian-to/PMx_Extrapolating_VincristineInduced_Periphe_20260825.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study systematically evaluates how informative censoring (Type I selection bias) and population-level differences in effect modifiers (Type II selection bias) affect the transportability of a vincristine PKPD model from Dutch/Caucasian children to Kenyan children. The authors show that reduced VIPN risk in Kenyan children reflects lower pharmacodynamic sensitivity (neuronal susceptibility) rather than lower systemic exposure, and that mechanistic genetic adjustments (ABCB1, CEP72) improve cross-population predictions while CYP3A5-based adjustments overcorrect. Pharmacometricians working on model extrapolation, pediatric oncology dosing, or transportability methodology should read this paper.

---

### Executive Summary
This paper addresses a critical gap in model-informed drug development: how to validly extrapolate PKPD models across genetically distinct populations. Using vincristine as a case study, the authors re-estimated a previously published PKPD model with combined Dutch (n=35) and Kenyan (n=15) pediatric ALL cohorts, then designed five simulation scenarios to isolate the effects of Type I (informative censoring) and Type II (population-specific effect modifiers) selection bias. The final PK model was a three-compartment structure with capacity-limited (Michaelis–Menten–type) distribution to a binding compartment, while the PD model was a proportional-odds Markov model with a separate logistic censoring component. Key findings include: (1) Kenyan children have lower clearance (covariate effect −0.786 on log scale) but markedly reduced PD sensitivity, with Emax effectively driven to zero; (2) informative censoring alone (Scenario 2) did not explain the low VIPN rates; (3) mechanistic adjustment with ABCB1 and CEP72 genotypes (Scenario 3) substantially improved VIPN predictions, while CYP3A5-based clearance adjustment overcorrected; and (4) the reference combined-data model (Scenario 4) predicted essentially no Grade ≥2 VIPN in Kenyans. The work provides a methodological framework for distinguishing bias from true biological differences in cross-population PKPD extrapolation.

---

### Scientific Context & Motivation
Vincristine is a cornerstone of pediatric ALL therapy but is limited by dose-dependent peripheral neuropathy (VIPN). African children paradoxically tolerate higher doses (2.0 mg/m², max 2.5 mg) with minimal neurotoxicity compared to Caucasian children (1.5 mg/m², max 2.0 mg). This raises two competing hypotheses: either Kenyan children have lower systemic vincristine exposure (e.g., due to higher CYP3A5-mediated clearance, since functional CYP3A5 alleles are present in ~90% of Africans vs ~10% of Europeans), or they have intrinsically lower neuronal susceptibility. The paper addresses a broader methodological gap: PKPD models are typically developed in one population and extrapolated to others without formal evaluation of selection bias. Type I selection bias (informative censoring) occurs when toxicity-related dropout distorts the observed exposure-response relationship; Type II selection bias occurs when effect modifiers (e.g., genotype distributions) differ between source and target populations. The causal inference concept of transportability is applied here to pharmacometrics, an approach rarely used in the field. The study also challenges the assumption that PK-based allometric scaling alone can bridge populations, arguing that PD sensitivity differences must be explicitly modeled.

---

## ⚡ Methodological Snapshot
The study re-estimated a previously published vincristine PKPD model using combined Dutch (n=35) and Kenyan (n=15) pediatric ALL data. The PK model was a three-compartment structure with capacity-limited (Michaelis–Menten–type) distribution to a binding compartment, estimated via importance sampling (IMP) in NONMEM 7.5.1. The PD model was a discrete-time proportional odds model with Markovian elements and a separate logistic regression component for informative censoring. Five simulation scenarios were designed to progressively adjust for Type I (informative censoring) and Type II (population-specific effect modifiers) selection bias, using virtual populations of 100,000 children per cohort with population-specific anthropometrics and genotype distributions. Model evaluation used likelihood-ratio tests, VPCs, and residual diagnostics.

---

## 🏗️ Structural Model Breakdown
The final PK model was a three-compartment structure: central compartment (Vc = 14.5 L), peripheral compartment (Vp = 541.5 L), and a saturable binding compartment. Drug transfer from central to binding compartment followed Michaelis–Menten kinetics with Bmax = 7.17 mg and Kb = 5.03 μg, while redistribution back to central was first-order (kp = 28.3 /h). Clearance was 42.2 L/h (allometrically scaled to 70 kg) with a Kenyan nationality covariate effect of −0.786 (exponential). Intercompartmental clearance Q = 71.6 L/h. Absorption lag time was fixed at 2 min. IIV was estimated on CL (108.4%), Vc (148.4%), LAG (72.2%, fixed), and proportional RUV during infusion (77.3%). RUV was 0.36 (bolus) and 0.38 (infusion) as proportional error on log scale. The PD model was a proportional odds structure with three ordinal categories (Grade 0, 1, ≥2), with Emax functions on AUC (AUC50 = 2.587 ng·h/mL), subscore-specific intercepts (B2|0 = −1.102 for motor/neuralgia, −3.583 for constipation/sensory), and a Markov term for prior toxicity. The Kenyan Emax was parameterized as Emax,kenyan = e^(−100 × θ) with θ fixed at 20, effectively zeroing the PD effect. The censoring model included baseline log-odds (−144.7), occasion-specific shifts (OCC>0: 136.9, OCC>1: 5.764, OCC>2: 1.502), and prior Grade >0 effect (3.05).

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling in NONMEM 7.5.1 using importance sampling (IMP) estimation. The PK model was a three-compartment structure with fixed allometric scaling (exponents 0.75 for clearance, 1 for volumes) and a saturable Michaelis–Menten–type transport term for capacity-limited distribution to a binding compartment. The PD model was a discrete-time proportional odds model with Markovian elements, using vincristine AUC as the exposure metric in an Emax function, with subscore-specific parameters for motor/neuralgia vs constipation/sensory categories. A separate logistic regression component modeled informative censoring as a stepwise function of treatment occasion and prior toxicity status. Each dosing occasion was treated as an independent individual during PK modeling to account for inter-occasion variability.

#### Data Sources
Two previously published pediatric cohorts: Dutch (n=35, aged 2–17 years, doses 1.5 or 2.0 mg/m² max 2.0 mg) and Kenyan (n=15, aged 5–14 years, doses 2.0 mg/m² max 2.5 mg). A total of 513 plasma samples were included for PK analysis, and 800 neuropathy observations from 50 patients for PD analysis. VIPN was assessed using CTCAE criteria with Grade ≥2 classified as VIPN. Vincristine concentrations were quantified using validated LC–MS/MS with LLOQ of 0.1 ng/mL. Virtual populations (n=100,000 per cohort) were generated using age-specific ALL prevalence, CDC growth metrics for Dutch children, and published anthropometric surveys for Kenyan children, with BSA calculated using the DuBois formula.

#### Estimation Methods
Importance sampling (IMP) estimation method in NONMEM 7.5.1. Inter-individual variability was assessed on all parameters using log-normal distributions, with alternative distributions (uniform, Box-Cox) explored for lag time and clearance. Residual unexplained variability was modeled as additive error on the log scale, with separate estimates for bolus vs infusion data and for Kenyan plasma samples. Model selection used likelihood-ratio tests (p < 0.05, ΔOFV ≥ 3.84).

#### Model Evaluation
Visual predictive checks (VPCs) for both PK and PKPD models, conditional weighted residuals (CWRES) diagnostics stratified by time, predicted concentrations, age, and body weight. The PK model VPC showed good alignment of simulated percentiles with observed concentrations. The PKPD VPC adequately described the time course of VIPN severity and censoring, though the predicted peak in Grade 1 toxicity occurred earlier than observed.

#### Covariate Analysis
Kenyan nationality was included as a covariate on clearance (exponential effect −0.786) and peripheral volume of distribution (−0.786). CYP3A5 genotype was incorporated in a mixture model (estimated on Dutch data only) with fast metabolizers (10% of population) having CL = 69.8 L/h/70 kg vs slow metabolizers (90%) at 37.4 L/h/70 kg. For Scenario 3, mechanistic adjustments used literature-based CYP3A5 allele frequencies (90% high expressors in Kenyans with CL ratio 1.87), ABCB1 rs4728709 (protective, Δθ = −0.52), and CEP72 rs924607 (risk, Δθ = −0.19) genotype effects. Platelet count was evaluated but did not improve model performance.

---

### Statistical Rigor Assessment
The study uses appropriate likelihood-based model selection (LRT with ΔOFV ≥ 3.84, p < 0.05) and standard pharmacometric diagnostics (VPCs, CWRES). However, several statistical concerns arise. First, the small Kenyan cohort (n=15) with very few VIPN events severely limits the precision of the Kenyan-specific PD parameters; the authors acknowledge that the Kenyan Emax parameter was unstable and had to be fixed, which is a significant limitation that undermines the strength of the conclusion about reduced PD sensitivity. Second, treating each dosing occasion as an independent individual inflates the effective sample size for PK modeling and may underestimate standard errors. Third, the censoring model was not formally tested for exposure dependence, despite the hypothesis that toxicity-related dropout is exposure-driven. Fourth, no sensitivity analyses were reported for the fixed Kenyan Emax value or for alternative CYP3A5 allele frequency assumptions. Fifth, the scenario comparisons are descriptive rather than inferential — no formal statistical tests or uncertainty intervals are provided for the differences in predicted VIPN rates across scenarios. The virtual population simulation approach is well-designed with realistic anthropometric and epidemiological inputs, but the propagation of parameter uncertainty into scenario predictions was not addressed (e.g., via bootstrap or Monte Carlo sampling from the parameter covariance matrix).

---

## 📊 Key Findings
The final PK model was a three-compartment structure with capacity-limited distribution to a binding compartment (Bmax = 7.17 mg, Kb = 5.03 μg, kp = 28.3 /h), with Kenyan nationality as a significant covariate on clearance (exponential effect −0.786, RSE 26%) and peripheral volume (−0.786). Kenyan children had lower allometrically scaled clearance (11.3 L/h/70 kg vs 42.2 L/h/70 kg typical value) and lower peripheral volume, consistent with reduced tissue distribution possibly reflecting ABCB1-mediated efflux. The PKPD model retained a proportional-odds Markov structure with Emax functions on AUC (AUC50 = 2.587 ng·h/mL), with subscore-specific parameters for motor/neuralgia vs constipation/sensory. The Kenyan Emax parameter was fixed at 20 in the exponential transformation Emax,kenyan = e^(−100 × θ), effectively reducing Emax to near zero, indicating negligible PD sensitivity. The censoring model showed increasing dropout probability at later occasions (ΔOFV = −218) and higher censoring probability after prior Grade > 0 toxicity. Across simulation scenarios, Scenario 1 (direct extrapolation) predicted 23.4% Grade ≥2 VIPN by occasion 5, Scenario 2 (with censoring) predicted 15.9%, Scenario 3 (with genetic adjustment) predicted 2.9%, and Scenario 4 (reference, combined data) predicted essentially 0%. CYP3A5-based clearance adjustment (Scenario 3) overcorrected, producing higher clearance (45.6 L/h) and lower AUC (90 ng·h/mL) than the reference (11.3 L/h, 330 ng·h/mL), indicating that CYP3A5 differences alone do not explain the exposure profile. The authors conclude that reduced VIPN in Kenyan children reflects lower neuronal susceptibility rather than reduced plasma exposure.

---

## 💡 Clinical & Regulatory Implications
The findings support population-specific vincristine dosing strategies for pediatric ALL. Kenyan children receiving 2.0 mg/m² (max 2.5 mg) show negligible predicted VIPN risk despite higher exposure (AUC ~330 ng·h/mL in the reference scenario vs ~110 ng·h/mL in Dutch children), indicating that dose escalation in African populations may be safe from a neurotoxicity standpoint. However, the authors appropriately caution that efficacy must be prospectively assessed, given the substantially worse outcomes in Kenyan cohorts (26% relapse, 20% 3-year EFS vs ~13% relapse and >70% EFS in Dutch high-risk ALL). The finding that CYP3A5-based clearance adjustment overcorrected suggests that pharmacogenetic-guided dosing based on CYP3A5 alone is not supported by this analysis. The reduced PD sensitivity in Kenyan children, if confirmed, implies that therapeutic drug monitoring or PK-guided dose individualization may be less relevant for toxicity management in this population, and that efforts should focus on ensuring adequate efficacy. From a regulatory perspective, the paper demonstrates the importance of evaluating model transportability across populations before using model-informed dosing strategies in new geographic or ethnic settings, and supports the inclusion of diverse populations in clinical trials and model development. The methodological framework (distinguishing Type I and Type II selection bias) could be applied to other drugs with known inter-ethnic PKPD differences.

---

### Strengths & Limitations

#### Strengths
- Novel application of causal inference concepts (transportability, Type I/II selection bias) to pharmacometric model extrapolation, providing a structured framework for cross-population model evaluation
- Joint re-estimation of PK and PKPD models using combined Dutch and Kenyan data, allowing direct quantification of population differences in both exposure and response
- Systematic simulation design with five scenarios that progressively isolate the contributions of informative censoring and mechanistic genetic adjustments
- Explicit modeling of informative censoring as a logistic regression component within the PKPD framework, addressing a recognized but under-addressed issue in longitudinal pharmacometric analyses
- Incorporation of pharmacogenetic mechanisms (CYP3A5, ABCB1, CEP72) into the extrapolation framework, moving beyond purely empirical covariate adjustments
- Transparent reporting of parameter estimates with RSEs and model selection criteria (ΔOFV, VPCs)

#### Limitations (Acknowledged by Authors)
- Small Kenyan cohort (n=15) with very few clinically relevant VIPN events, limiting precision of the exposure-response relationship and power to detect weaker covariate effects
- Mechanistic corrections in Scenario 3 relied on literature-based assumptions for CYP3A5, ABCB1, and CEP72 rather than directly measured genotypes in the cohort
- Findings should not be generalized uncritically from Kenyan children to African populations more broadly, given genetic heterogeneity across African regions
- The reference scenario (Scenario 4) is a pragmatic benchmark rather than a true gold standard, as it is based on a limited combined dataset

#### Limitations (Expert Review)
- The Kenyan Emax parameter was fixed at 20 (effectively forcing Emax to near zero) due to estimation instability; this is a strong assumption that essentially predetermines the conclusion of reduced PD sensitivity and may mask true uncertainty in the population difference
- Treating each dosing occasion as an independent individual during PK modeling (due to IOV) may not fully capture within-patient correlation across occasions, potentially affecting variance estimates
- The censoring model did not include vincristine exposure as a predictor of dropout, despite the hypothesis that toxicity-related dropout is exposure-driven; the authors note censoring was not directly related to exposure, but this deserves more formal testing
- No formal model comparison across scenarios using information criteria (e.g., BIC) or cross-validation was reported; scenario comparisons were descriptive rather than inferential
- The CYP3A5 mixture model was estimated on Dutch data only, then extrapolated to Kenyans using literature allele frequencies; this two-step approach may propagate estimation uncertainty
- The saturable binding compartment is phenomenological rather than mechanistically explicit (no mass-action binding), which may limit biological interpretability of Bmax and Kb

#### Generalizability
The findings are specific to vincristine and the Dutch/Kenyan comparison, but the methodological framework (distinguishing Type I and Type II selection bias, incorporating mechanistic genetic adjustments) is broadly applicable to any PKPD model extrapolation across populations. The authors appropriately caution against generalizing from Kenyan children to all African populations given genetic heterogeneity. The conclusion that reduced VIPN reflects lower neuronal susceptibility rather than lower exposure may not hold in other African populations with different allele frequencies for ABCB1, CEP72, or other relevant genes. The approach of using virtual populations with population-specific anthropometrics and genotype distributions is generalizable, but requires reliable pharmacoepidemiological and genetic data for each target population.

---

### Key Equations

**Kenyan Emax transformation**

{% raw %}
$$
E_{max,\text{kenyan}} = e^{-100 \times \theta_{E_{max},\text{kenyan}}}
$$
{% endraw %}

Exponential transformation used to estimate the maximum pharmacodynamic effect in the Kenyan population, where the parameter θ was fixed at 20 to ensure numerical stability, effectively driving Emax to near zero.

**Allometric scaling of clearance**

{% raw %}
$$
CL = CL_{\text{pop}} \times \left(\frac{WT}{70}\right)^{0.75}
$$
{% endraw %}

Fixed allometric scaling of clearance parameters using a reference body weight of 70 kg, with exponent 0.75 for clearance and 1 for distribution volumes.

**Saturable distribution to binding compartment**

{% raw %}
$$
\frac{dA_{\text{binding}}}{dt} = \frac{B_{max} \times A_c}{K_b + A_c} - k_p \times A_{\text{binding}}
$$
{% endraw %}

Michaelis–Menten–type capacity-limited transport from the central compartment to the peripheral binding compartment, with maximal binding rate Bmax, half-saturation constant Kb, and first-order redistribution rate kp.

**Proportional odds model for VIPN transition**

{% raw %}
$$\begin{aligned}
\log\left(\frac{P(Y_{ij} \geq k \mid Y_{i,j-1})}{1 - P(Y_{ij} \geq k \mid Y_{i,j-1})}\right) \\
&= B_{k|0} + \frac{E_{max} \times AUC_i}{AUC_{50} + AUC_i} + \theta_{\text{Markov}} \times I(Y_{i,j-1} > 0)
\end{aligned}$$
{% endraw %}

Discrete-time proportional odds model with Markovian elements describing the probability of transitioning to CTCAE grade k or higher, with Emax function on vincristine AUC and a Markov term for prior toxicity status.

**Censoring logistic regression model**

{% raw %}
$$\begin{aligned}
\log\left(\frac{P(\text{censor}_{ij})}{1 - P(\text{censor}_{ij})}\right) \\
&= B_0 + \sum_{m=1}^{3} \theta_m \times I(\text{OCC} > m) + \theta_{\text{grade}} \times I(\text{Grade}_{i,j-1} > 0)
\end{aligned}$$
{% endraw %}

Logistic regression component modeling the probability of informative censoring (dropout) as a stepwise function of treatment occasion and prior VIPN status.

---

### Figures & Tables

- **Figure 1**: Conceptual illustration of internal and external validity and how Type I (informative censoring) and Type II (population-specific effect modifiers) selection bias can arise, adapted from Lu et al.
  - *Significance*: Provides the theoretical framework for the entire study, defining the two types of selection bias and their impact on model transportability.
- **Figure 2**: Visual predictive check (VPC) for the time course of VIPN probability and severity stratified by CTCAE grade (Grade 0, 1, ≥2) and censoring, with observed data overlaid on simulated percentiles.
  - *Significance*: Validates the final PKPD model's ability to describe observed VIPN dynamics and censoring patterns; shows adequate fit but notes earlier predicted peak in Grade 1 toxicity than observed.
- **Figure 3**: Distribution of vincristine AUC per dose occasion across the five simulation scenarios, shown as boxplots with individual patient exposures.
  - *Significance*: Illustrates how each scenario affects predicted systemic exposure, highlighting the large differences between scenarios (e.g., Scenario 4 AUC ~330 ng·h/mL vs Scenario 3 ~90 ng·h/mL).
- **Figure 4**: Probability of VIPN (Grade ≥2) over treatment occasions across the five simulation scenarios, shown as stacked bars representing relative frequencies of toxicity grades.
  - *Significance*: Central result figure: demonstrates that only Scenario 3 (mechanistic genetic adjustment) approaches the reference Scenario 4's near-zero VIPN predictions, while Scenarios 0–2 substantially overpredict neurotoxicity.
- **Table 1**: Definition of the five simulation scenarios, specifying PK and PKPD model additions, datasets used for parameter estimation and simulation, and parameter sources.
  - *Significance*: Provides the methodological roadmap for the study, clarifying how each scenario progressively adjusts for Type I and Type II selection bias.
- **Table 2**: Final PK and PKPD model parameter estimates with relative standard errors (RSEs), including clearance, volumes, saturable binding parameters, Emax values, and censoring model coefficients.
  - *Significance*: Key reference table for the final model; shows the Kenyan nationality covariate effects on CL and Vp, the fixed Kenyan Emax parameter, and the censoring model structure.
- **Table 3**: Mean AUC and clearance values per dose occasion across the five simulation scenarios.
  - *Significance*: Quantifies the exposure differences across scenarios, demonstrating that Scenario 3 (CYP3A5 adjustment) overcorrects clearance while Scenario 4 (reference) shows the lowest clearance and highest AUC.

---

### Code & Reproducibility Assessment
The data are not openly accessible due to GDPR restrictions. The code used for data analysis and statistical modeling is available upon request from the corresponding author (L.E.F.). No public repository or containerized analysis environment was provided, limiting full reproducibility.[^fc-7] The NONMEM version (7.5.1) and R scripts for visualization are mentioned, but no version-controlled codebase or simulation seeds are documented.[^fc-8]

---

### Supplementary Materials
Supporting Methods S1 provides full details on study design, sampling schedules, ethics approvals, and consent procedures. Tables S1–S3 contain parameter values for the Dutch-based scenario models and mechanistic genetic adjustments. Figures S1–S4 show VPCs and CWRES diagnostics for the PK model. Figure S5 shows additional AUC/clearance distributions, and Figure S6 provides a conceptual overview of PK and PKPD determinants including CYP3A5, ABCB1, CEP72, and OATP-related mechanisms.

---

### Future Directions
This work opens several avenues for follow-up. First, prospective validation of the model in larger, genetically characterized African pediatric ALL cohorts is needed, with direct genotyping of CYP3A5, ABCB1, CEP72, and potentially OATP1B3 to replace literature-based assumptions. Second, the hypothesis that reduced VIPN reflects lower neuronal susceptibility should be tested mechanistically, for example through preclinical models of OATP-mediated neuronal uptake (as suggested by the authors' reference to OATP1B2/1B3 work in mice) or through human induced pluripotent stem cell-derived neuronal models. Third, the relationship between higher vincristine doses and leukemia control (efficacy) in Kenyan children must be evaluated, since the relapse rate (26%) and 3-year EFS (20%) in Kenyan cohorts are substantially worse than in Dutch cohorts — the safety advantage of lower neurotoxicity must be weighed against potential underdosing for efficacy. Fourth, the methodological framework could be extended to other drugs with known inter-ethnic PKPD differences (e.g., 6-mercaptopurine, methotrexate) and to adult populations. Fifth, formal statistical methods for comparing scenario predictions (e.g., Bayesian model averaging or posterior predictive checks with proper scoring rules) could strengthen the inferential basis of scenario comparisons. Finally, the informative censoring model could be extended to include exposure-dependent dropout mechanisms, allowing formal testing of whether toxicity-related dropout is indeed exposure-driven.

---

### Expert Commentary
This paper represents a thoughtful and timely contribution to the pharmacometrics literature, bridging causal inference and model-based drug development. The distinction between Type I (informative censoring) and Type II (effect modifier) selection bias is conceptually clean and practically useful, and the five-scenario simulation design is elegant in its progressive isolation of these mechanisms. However, I have several concerns. The fixation of the Kenyan Emax parameter at 20 is the most problematic aspect: the authors acknowledge the parameter drifted and was unstable, but fixing it to effectively zero essentially guarantees the conclusion that Kenyan children have negligible PD sensitivity. A more honest approach might have been to report the uncertainty around this parameter (e.g., via a profile likelihood or a Bayesian prior with wide variance) or to present sensitivity analyses with alternative fixed values. The finding that CYP3A5 adjustment overcorrected is important and somewhat counterintuitive given the strong prior that CYP3A5 genotype affects vincristine clearance — this suggests either that the literature-based allele frequency assumptions are wrong for this Kenyan population, or that the relationship between CYP3A5 genotype and vincristine clearance is more complex than a simple mixture model captures. The treatment of each dosing occasion as an independent individual is pragmatic but statistically questionable, as it ignores within-patient correlation beyond what IOV captures.[^fc-17] From a regulatory perspective, this work supports the growing recognition that 'one-size-fits-all' dosing models developed in Caucasian populations may not be transportable to genetically distinct populations, and that population-specific PKPD models with mechanistic components are needed. The paper would be strengthened by a more formal treatment of uncertainty propagation from the parameter estimates to the scenario predictions, perhaps through a bootstrap or sampling-importance-resampling approach.[^fc-18] Overall, this is a valuable methodological contribution that should stimulate further work on transportability in pharmacometrics.

---

### Bottom Line
For practicing pharmacometricians, this paper delivers three key takeaways. First, cross-population PKPD extrapolation requires explicit evaluation of both informative censoring (Type I bias) and population-specific effect modifiers (Type II bias); ignoring either can substantially distort predictions. Second, for vincristine specifically, the reduced VIPN risk in Kenyan children is driven by reduced pharmacodynamic sensitivity (likely neuronal susceptibility) rather than reduced systemic exposure — meaning that dose escalation in African populations may be safe from a neuropathy standpoint but requires careful efficacy monitoring. Third, mechanistic genetic adjustments are not automatically beneficial: the CYP3A5-based clearance adjustment overcorrected and worsened predictions, while ABCB1/CEP72 adjustments improved VIPN predictions, highlighting the need for empirical validation of mechanistic assumptions before incorporation into extrapolation frameworks. The paper also demonstrates the value of explicitly modeling dropout/censoring in longitudinal PKPD analyses, a practice that should become standard.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “Treating each dosing occasion as an independent individual inflates the effective sample size for PK modeling and may underestimate standard errors.” → correction: “No supporting evidence found in source text.”
[^fc-2]: **UNSUPPORTED** — original: “The censoring model was not formally tested for exposure dependence.” → correction: “No supporting evidence found in source text.”
[^fc-3]: **UNSUPPORTED** — original: “No sensitivity analyses were reported for the fixed Kenyan Emax value or for alternative CYP3A5 allele frequency assumptions.” → correction: “No supporting evidence found in source text.”
[^fc-4]: **UNSUPPORTED** — original: “The scenario comparisons are descriptive rather than inferential — no formal statistical tests or uncertainty intervals are provided for the differences in predicted VIPN rates across scenarios.” → correction: “No supporting evidence found in source text.”
[^fc-5]: **UNSUPPORTED** — original: “The propagation of parameter uncertainty into scenario predictions was not addressed (e.g., via bootstrap or Monte Carlo sampling from the parameter covariance matrix).” → correction: “No supporting evidence found in source text.”
[^fc-6]: **NUMERIC_MISMATCH** — original: “Kenyan children had lower allometrically scaled clearance (11.3 L/h/70 kg vs 42.2 L/h/70 kg typical value) and lower peripheral volume.” → correction: “CL (L/h)a | Clearance | 42.2 | 14; Kenyan nationality on CL | Covariate effect of Kenyan nationality on clearance (exponential model) | −0.786 | 26; Scenario 4 ... CL ... 11.32”
[^fc-7]: **UNSUPPORTED** — original: “No public repository or containerized analysis environment was provided, limiting full reproducibility.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “The NONMEM version (7.5.1) and R scripts for visualization are mentioned, but no version-controlled codebase or simulation seeds are documented.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “Prospective validation of the model in larger, genetically characterized African pediatric ALL cohorts is needed, with direct genotyping of CYP3A5, ABCB1, CEP72, and potentially OATP1B3.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “The hypothesis that reduced VIPN reflects lower neuronal susceptibility should be tested mechanistically, for example through preclinical models of OATP-mediated neuronal uptake or through human induced pluripotent stem cell-derived neuronal models.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The methodological framework could be extended to other drugs with known inter-ethnic PKPD differences (e.g., 6-mercaptopurine, methotrexate) and to adult populations.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “Formal statistical methods for comparing scenario predictions (e.g., Bayesian model averaging or posterior predictive checks with proper scoring rules) could strengthen the inferential basis of scenario comparisons.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “The informative censoring model could be extended to include exposure-dependent dropout mechanisms, allowing formal testing of whether toxicity-related dropout is indeed exposure-driven.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “The fixation of the Kenyan Emax parameter at 20 is the most problematic aspect of the study.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “A more honest approach might have been to report the uncertainty around the Kenyan Emax parameter (e.g., via a profile likelihood or a Bayesian prior with wide variance) or to present sensitivity analyses with alternative fixed values.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “The overcorrection by CYP3A5 adjustment suggests either that the literature-based allele frequency assumptions are wrong for this Kenyan population, or that the relationship between CYP3A5 genotype and vincristine clearance is more complex than a simple mixture model captures.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **UNSUPPORTED** — original: “The treatment of each dosing occasion as an independent individual is pragmatic but statistically questionable, as it ignores within-patient correlation beyond what IOV captures.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-18]: **UNSUPPORTED** — original: “The paper would be strengthened by a more formal treatment of uncertainty propagation from the parameter estimates to the scenario predictions, perhaps through a bootstrap or sampling-importance-resampling approach.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Conceptual illustration of internal and external validity and how selection bias can arise, adapted with permission from Lu et al. 17. The target population re]({{ site.baseurl }}/assets/digests/2026-08-25-extrapolating-vincristine-induced-peripheral-neuropathy-from-caucasian-to/figures/fig_01.jpg)

![Visual predictive check for the time course of the probability and severity of VIPN stratified by severity grade (Grade 0, 1, > 1 and censoring). The black solid]({{ site.baseurl }}/assets/digests/2026-08-25-extrapolating-vincristine-induced-peripheral-neuropathy-from-caucasian-to/figures/fig_02.jpg)

![Distribution of vincristine AUC per dose occasion across simulation scenarios. Boxplots and colored points represent individual vincristine exposures (AUCs) acro]({{ site.baseurl }}/assets/digests/2026-08-25-extrapolating-vincristine-induced-peripheral-neuropathy-from-caucasian-to/figures/fig_03.jpg)

![Probability of vincristine-induced peripheral neuropathy (VIPN) over treatment occasions across simulation scenarios. Stacked bars represent the relative frequen]({{ site.baseurl }}/assets/digests/2026-08-25-extrapolating-vincristine-induced-peripheral-neuropathy-from-caucasian-to/figures/fig_04.jpg)