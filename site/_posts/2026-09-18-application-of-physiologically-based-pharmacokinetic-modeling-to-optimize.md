---
layout: post
title: "Application of Physiologically Based Pharmacokinetic Modeling to Optimize Assessment of Age-Related Fluoxetine Accumulation in the Elderly"
date: 2026-09-18
authors: "Jang YJ, Heo D-G, Hong E"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026;15(9):e70319"
doi: "10.1002/psp4.70319"
paper_type: popk
tags: [popk, pbpk, clinical-trial-design]
excerpt_text: "This study uses PBPK modeling integrated with real-world therapeutic drug monitoring data to show that elderly patients achieve substantially higher fluoxetine exposure at steady state (~2-fold parent drug, ~1.5-fold active moiety) due to reduced clearance and delayed steady-state attainment (~40–45 days). CYP2D6 phenotype affects parent drug levels but not overall active moiety exposure, suggesting that CYP2D6 genotyping is not necessary for dose selection in elderly patients. Pharmacometricians and geriatric psychiatrists should adopt conservative dosing and extended monitoring in this population."
pdf_path: "/assets/digests/2026-09-18-application-of-physiologically-based-pharmacokinetic-modeling-to-optimize/PMx_Application_of_Physiologically_Based_Pha_20260918.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study uses PBPK modeling integrated with real-world therapeutic drug monitoring data to show that elderly patients achieve substantially higher fluoxetine exposure at steady state (~2-fold parent drug, ~1.5-fold active moiety) due to reduced clearance and delayed steady-state attainment (~40–45 days). CYP2D6 phenotype affects parent drug levels but not overall active moiety exposure, suggesting that CYP2D6 genotyping is not necessary for dose selection in elderly patients. Pharmacometricians and geriatric psychiatrists should adopt conservative dosing and extended monitoring in this population.

---

### Executive Summary
This work quantifies age-related pharmacokinetic changes in fluoxetine and norfluoxetine under chronic dosing using a PBPK framework (Simcyp) combined with a retrospective TDM cohort of 47 Korean patients. Model verification against published single- and multiple-dose studies, including elderly data, yielded predicted-to-observed ratios within the two-fold acceptance criterion. Simulations predicted that elderly patients (65–98 y) achieve steady state approximately 15 days later than younger adults and exhibit approximately two-fold higher fluoxetine $AUC$ and 1.5-fold higher total active moiety exposure after 50 days of 20 mg once-daily dosing, driven by reduced apparent oral clearance (11.2 vs 20.8 L/h). Clinical TDM confirmed significantly higher dose-normalized trough concentrations in elderly patients (1.32-fold for combined active moiety). Across CYP2D6 phenotypes, fluoxetine exposure varied up to 1.41-fold (PM vs EM), but active moiety exposure varied only modestly (0.91–1.20-fold), indicating that CYP2D6 phenotyping is unlikely to guide fluoxetine dosing in the elderly. The study underscores the value of PBPK modeling for assessing long-term exposure in special populations where experimental steady-state studies are impractical.

---

### Scientific Context & Motivation
Fluoxetine is widely prescribed in older adults, yet its pharmacokinetics under chronic therapy are poorly characterized. Age-related physiological changes (reduced hepatic blood flow, liver volume, and metabolic capacity) are expected to increase exposure, but current dosing recommendations remain empirical. Single-dose studies, which product labeling relies on, fail to capture the full extent of accumulation because of the long half-lives of fluoxetine and norfluoxetine. Additionally, the clinical relevance of CYP2D6 polymorphism in elderly patients is unknown. This study addresses these gaps by using PBPK modeling—mechanistically incorporating age-dependent physiology—and validating predictions with real-world TDM data. It provides quantitative evidence to support cautious dose titration and extended monitoring in the elderly, while clarifying that CYP2D6 phenotype has limited impact on total active moiety exposure, thus challenging the need for genotype-guided dosing.

---

## ⚡ Methodological Snapshot
A PBPK model for fluoxetine and its active metabolite norfluoxetine was built in the Simcyp Simulator (version 25) using a minimal PBPK distribution model with first-order absorption. The model incorporated enzyme kinetic parameters for CYP2D6 (52.65 μL/min/pmol), CYP2C9 (13.31), and CYP3A4 (2.56) for metabolic clearance, with $V_{ss}$ values of 10.42 L/kg (fluoxetine) and 6.9954 L/kg (norfluoxetine), and fraction unbound values of 0.079 and 0.165, respectively. The model was verified against two single-dose and two multiple-dose published studies, including an elderly cohort, using acceptance criteria of predicted-to-observed ratios within 0.5–2.0 for $C_{max}$ and $AUC$. Simulations were then performed in the Simcyp Healthy Volunteer (18–65 y) and Geriatric (65–98 y) populations under a 20 mg once-daily regimen for up to 50 days. Separate simulations were run with uniform CYP2D6 phenotype cohorts (UM, EM, IM, PM) to isolate phenotype effects. Clinical TDM data from 47 Korean patients receiving fluoxetine for ≥5 weeks were analyzed to compare dose-normalized trough concentrations between age groups (<65 vs ≥65 years).

---

## 🏗️ Structural Model Breakdown
The fluoxetine PBPK model is a minimal PBPK model with first-order absorption. It includes a central compartment (systemic circulation) and distribution described by a steady-state volume of distribution ($V_{ss} = 10.42$ L/kg). Clearance is driven by hepatic metabolism via CYP2D6 (intrinsic clearance 52.65 μL/min/pmol), CYP2C9 (13.31), and CYP3A4 (2.56). Fraction unbound in plasma is 0.079, and fraction unbound in enterocytes was assumed to be equal. Norfluoxetine is modeled as a linked metabolite with $V_{ss} = 6.9954$ L/kg, $f_u = 0.165$, and elimination via in vivo intravenous clearance of 5 L/h. The geriatric population model modifies physiological parameters such as liver blood flow, liver volume, and microsomal protein content as functions of age. No explicit equations were provided in the paper.

---

### Detailed Methodological Analysis

#### Modeling Approach
PBPK modeling in Simcyp (v25) using a minimal PBPK model with first-order absorption, metabolic clearance through CYP2D6, CYP2C9, and CYP3A4. Fluoxetine was linked to its major active metabolite norfluoxetine, which was modeled with its own disposition and elimination parameters. The geriatric population model incorporated age-dependent changes in cardiac output, liver blood flow, liver volume, microsomal protein, and GFR. CYP2D6 phenotypes were simulated by modifying the default allele distribution to create uniform phenotype groups. No parameter estimation was performed; all parameters were derived from literature or in silico predictions.[^fc-2]

#### Data Sources
Model verification used published PK data: Kang et al. (single dose, 80 mg), Nam et al. (single dose, 60 mg), Harvey et al. (multiple dose, 20 mg), and Ferguson et al. (elderly, 40 mg for 5 weeks). Clinical validation used a retrospective TDM cohort from Samsung Medical Center (2017–2024) of 47 Korean patients (18–88 y) with major depressive disorder, treated with fluoxetine for ≥5 weeks; trough concentrations of fluoxetine and norfluoxetine were measured by validated LC–MS/MS.

#### Estimation Methods
PBPK simulation, not parameter estimation. The model parameters were defined a priori, and simulations were compared to observed data. For the TDM comparison, simulated and observed dose-normalized trough concentrations were compared using ratio calculations. No Bayesian or nonlinear mixed-effects methods were used.

#### Model Evaluation
Verification: predicted-to-observed ratios of $C_{max}$ and $AUC$ within the pre-specified two-fold range (ratios ranged 0.75–1.62). Internal validation: simulated vs observed dose-normalized trough concentrations in TDM subgroups (ratios 0.77–1.40). Additionally, the model reproduced the reported CYP2D6 phenotype effect on fluoxetine $C/D$ ratios (observed vs simulated: 1.00/1.00 for EM, 1.25/1.28 for IM, 1.70/1.53 for PM, 0.84/0.79 for UM).

#### Covariate Analysis
No formal covariate analysis was performed. Age was the primary covariate, implemented through the Simcyp geriatric population model. CYP2D6 phenotype was evaluated as a nominal scenario by simulating uniform phenotype cohorts. Other covariates (sex, weight) were not individually tested; the model implicitly incorporates physiological scaling.

---

### Statistical Rigor Assessment
The PBPK verification used a pre-defined two-fold acceptance criterion for $C_{max}$ and $AUC$, which is conventional in PBPK modeling. The lack of formal confidence intervals for simulated ratios is a minor limitation. The clinical statistical analysis used appropriate nonparametric tests (Kruskal–Wallis, Fisher's exact) given skewed distributions and small sample sizes. A subgroup analysis (excluding 60 mg/d patients) was performed to address potential dose linearity concerns. However, the small elderly subgroup (n=10) limits power, and no adjustment for multiple comparisons was made. The simulation study design (100 subjects per trial, 10 trials) is standard, but no formal uncertainty analysis was reported. Overall, statistical rigor is adequate for hypothesis-generating and mechanistic modeling, but the absence of sensitivity analyses and confidence intervals for key ratios weakens quantitative claims.

---

## 📊 Key Findings
PBPK simulations predicted that steady state is achieved at ~25–30 days in younger adults (18–65 y) but at ~40–45 days in elderly patients (65–98 y), reflecting prolonged effective half-lives (8–9 days). After 50 days of 20 mg once-daily dosing, fluoxetine $AUC$ was 2-fold higher in elderly (5707 vs 2945 ng·h/mL), and combined fluoxetine + norfluoxetine $AUC$ was 1.5-fold higher (8807 vs 5885 ng·h/mL). Apparent oral clearance was reduced from 20.8 L/h in younger adults to 11.2 L/h in the elderly. TDM data from 47 patients (10 aged ≥65 y) showed that dose-normalized trough concentrations of fluoxetine, norfluoxetine, and their sum were significantly higher in elderly patients (1.32-fold for combined; $p=0.031$), consistent with model predictions. CYP2D6 phenotype simulations in the elderly indicated fluoxetine $AUC$ ratios of 1.41 (PM), 1.23 (IM), and 0.82 (UM) relative to EM, but active moiety $AUC$ ratios ranged only 0.91–1.20, demonstrating preserved overall exposure across phenotypes. These findings support dose reduction in elderly and deprioritize routine CYP2D6 testing.

---

## 💡 Clinical & Regulatory Implications
The study provides quantitative support for conservative dosing of fluoxetine in elderly patients: starting at lower doses (e.g., 20 mg/day or less) and titrating slowly, with continued monitoring for tolerability beyond 4–6 weeks, because steady state may not be reached until 40–45 days and exposure may continue to rise. Clinicians should be alert to delayed-onset adverse effects (e.g., hyponatremia, weight loss) that may emerge after prolonged treatment. The finding that CYP2D6 phenotype does not materially affect total active moiety exposure suggests that CYP2D6 genotyping is unlikely to guide fluoxetine dose selection in the elderly, contrary to what might be expected from parent drug levels alone. However, caution is still warranted with concomitant CYP2D6 inhibitors or in patients with extreme phenotypes (e.g., PMs) where fluoxetine concentrations could be high, though such effects are likely buffered by norfluoxetine. These results align with current recommendations to 'start low and go slow' and may inform regulatory labeling updates for geriatric dosing, although exposure-based dose adjustments require additional outcome data.

---

### Strengths & Limitations

#### Strengths
- Integration of PBPK modeling with real-world TDM data provides both mechanistic and empirical validation.
- Model verification against multiple independent published studies, including a geriatric cohort, met predefined two-fold acceptance criteria.
- Use of Simcyp's geriatric population model incorporates continuous age-related physiological changes, enabling mechanistic prediction.
- Direct head-to-head comparison of younger and elderly populations under steady-state conditions within a single analytical framework.
- Evaluation of CYP2D6 phenotype effects specifically in the elderly, a previously unexplored scenario.
- Clinical relevance: findings support empirical dose reduction and extended monitoring, and suggest CYP2D6 genotyping is unnecessary.

#### Limitations (Acknowledged by Authors)
- CYP2D6 phenotype analysis in elderly was simulation-based and not validated with genotype-stratified clinical data (genotyping was not performed).
- Limited external geriatric pharmacokinetic data for fluoxetine/norfluoxetine; internal TDM validation had a small elderly subgroup (n=10).
- Simcyp geriatric population model is largely derived from White individuals and may not fully represent Korean physiological characteristics, particularly CYP2D6 allele distribution (e.g., higher *10 allele frequency).
- Retrospective TDM data introduce variability related to adherence, comedications, and comorbidities that could not be fully controlled.
- Small sample size (n=47) limits statistical power.

#### Limitations (Expert Review)
- No equations, parameter details, or full model code were provided in the main text, limiting reproducibility and external implementation.[^fc-8]
- Model verification relied only on $C_{max}$ and $AUC$ ratios; no assessment of concentration–time profile shape or residual variability was performed.
- Simulated population of 100 subjects per trial may not capture full interindividual variability; no confidence intervals for simulated ratios.[^fc-9]
- No sensitivity analysis on key physiological parameters (e.g., liver blood flow, microsomal protein) was reported.[^fc-10]
- The model assumes linear PK up to 40 mg, but some TDM patients received 60 mg; the subgroup analysis excluded these, yet the model simulations used only 20 mg.
- No formal pharmacodynamic or clinical outcome linkage; findings are purely pharmacokinetic.
- CYP2D6 phenotype simulation used uniform phenotype groups, which is an artificial representation of the mixed population distribution.
- TDM trough concentrations were not timed relative to last dose, though they are described as trough; adherence was not verified.

#### Generalizability
The findings are likely generalizable to other SSRIs with active metabolites and prolonged half-lives, but direct extrapolation to non-Korean populations or to other agents requires caution due to ethnic differences in CYP2D6 allele frequencies and physiological parameters.[^fc-11] The core message—elderly patients accumulate more slowly but reach higher steady-state exposure—is mechanistically robust and likely applicable broadly, while the CYP2D6 phenotype finding is consistent with prior observations in younger adults and suggests that active moiety exposure is buffered across phenotypes in most populations. However, the model's geriatric physiology parameters are based on White data, so predictions for other ethnicities may be less accurate; further validation in diverse populations is needed.

---

---

### Figures & Tables

- **Figure 1**: Simulated mean plasma concentration–time profiles of fluoxetine and norfluoxetine after repeated oral 20 mg once-daily dosing in younger (18–65 y) and elderly (65–98 y) populations over 50 days, illustrating differential accumulation and delayed steady state in the elderly.
  - *Significance*: Visually demonstrates the primary finding: elderly patients achieve higher fluoxetine concentrations and reach steady state later (~40–45 days vs 25–30 days), providing the basis for the quantitative exposure differences reported in Table 3.
- **Figure 2**: Simulated steady-state concentration–time profiles of fluoxetine and norfluoxetine across CYP2D6 phenotypes (UM, EM, IM, PM) in the elderly population.
  - *Significance*: Shows that fluoxetine concentrations differ markedly by phenotype (PM highest, UM lowest) while norfluoxetine concentrations are relatively similar, illustrating the compensatory nature of the active moiety across phenotypes.
- **Table 1**: Verification results comparing observed and simulated $C_{max}$ and $AUC$ for fluoxetine (and norfluoxetine where available) from four published studies, including single- and multiple-dose and elderly data.
  - *Significance*: Confirms the PBPK model meets the a priori two-fold acceptance criterion for all comparisons (ratios 0.75–1.62), supporting its use for subsequent simulations.
- **Table 2**: Comparison of observed and simulated dose-adjusted trough concentration ($C/D$) ratios for fluoxetine and active moiety across CYP2D6 phenotypes (EM, IM, PM, UM) relative to EM.
  - *Significance*: Demonstrates that the model accurately reproduces the published phenotype-dependent effects on fluoxetine but not on active moiety, validating the model's CYP2D6 sensitivity.
- **Table 3**: Simulated pharmacokinetic parameters ($C_{max}$, $C_{min}$, $AUC$) for fluoxetine, norfluoxetine, and combined active moiety in younger and elderly populations at days 10, 30, and 50 of repeated 20 mg once-daily dosing.
  - *Significance*: Quantifies the progressive age-related accumulation: by day 50, fluoxetine $AUC$ is 2-fold higher and active moiety 1.5-fold higher in elderly vs younger adults, while early (day 10) differences are modest (~1.15-fold).
- **Table 4**: Simulated steady-state $AUC$ values for fluoxetine, norfluoxetine, and combined active moiety across CYP2D6 phenotypes in the elderly, with ratios to EM.
  - *Significance*: Shows fluoxetine $AUC$ ratios of 1.41 (PM), 1.23 (IM), and 0.82 (UM) vs EM, but active moiety $AUC$ ratios only 0.91–1.20, providing the evidence that CYP2D6 phenotyping is unlikely to alter dosing decisions.
- **Table 5**: Baseline characteristics and steady-state trough concentrations (absolute and dose-normalized) of fluoxetine, norfluoxetine, and combined active moiety in the TDM cohort, stratified by age (<65 vs ≥65 years).
  - *Significance*: Real-world validation showing significantly higher dose-normalized concentrations in elderly patients (combined ratio 1.32, $p=0.031$), consistent with PBPK predictions. Also shows that absolute concentrations were similar because elderly received lower doses.

---

### Supplementary Materials
Supplementary materials include Table S1 (detailed model input parameters for fluoxetine and norfluoxetine, such as fraction unbound, volume of distribution, and enzyme kinetic values), Table S2 (internal validation comparing simulated vs observed dose-normalized trough concentrations in younger and elderly TDM subgroups, with ratios 0.77–1.40), and Figure S1 (age distribution of dose-normalized trough concentrations in the full and 20–40 mg/day subgroups). These provide additional context for model parameters and validation.

---

### Future Directions
Future studies should validate CYP2D6 phenotype predictions with genotype-stratified clinical data in elderly patients, particularly in Asian populations with higher prevalence of reduced-function alleles (e.g., CYP2D6*10).[^fc-13] Incorporation of Korean-specific physiological and genetic parameters into the geriatric model would improve regional accuracy.[^fc-14] Prospective TDM studies with rigorous adherence monitoring, timed trough samples, and PK–PD linkage to efficacy/safety outcomes are needed to translate exposure differences into actionable dosing recommendations. Additionally, evaluating drug–drug interactions with CYP2D6 inhibitors (e.g., bupropion, antipsychotics) in the elderly using the PBPK model could guide co-prescribing decisions. The approach could be extended to other SSRIs with long-lived active metabolites (e.g., sertraline) to compare their accumulation profiles.[^fc-17]

---

### Expert Commentary
This paper exemplifies the practical utility of PBPK modeling in geriatric psychopharmacology, where traditional clinical trials are often impractical due to ethical and logistical constraints. The integration of real-world TDM data strengthens the credibility of the model, and the two-fold difference in fluoxetine exposure at steady state is a clinically meaningful finding that should prompt re-evaluation of current empirical dosing in the elderly. The CYP2D6 neutrality of active moiety exposure is pharmacologically intuitive—norfluoxetine exposure compensates for reduced parent clearance—but it is reassuring to see it quantified in simulations. However, the lack of model parameter details and code limits reproducibility, which is a common shortcoming in PBPK publications. The reliance on Simcyp's default geriatric population, derived from White cohorts, is a significant limitation for Korean patients, and I would have liked to see a sensitivity analysis on physiological parameters or a direct comparison with Korean physiological data. Nevertheless, this study sets a good precedent for using PBPK to answer dosing questions in special populations, and it aligns with current regulatory interest in model-informed drug development. Clinicians should interpret the exposure differences as evidence for cautious titration and prolonged monitoring, not necessarily as justification for TDM-based dose adjustments until outcome data are available.

---

### Bottom Line
For practicing pharmacometricians and clinicians, this study provides quantitative evidence that elderly patients accumulate fluoxetine significantly more than younger adults under chronic therapy: steady state is delayed (40–45 days) and exposure (active moiety) is ~1.5-fold higher at 50 days, with fluoxetine itself doubling. Clinically, this supports starting at lower doses (e.g., 20 mg or half of that), titrating cautiously, and continuing monitoring for adverse effects beyond the first month.[^fc-21] CYP2D6 phenotype does not meaningfully alter total active moiety exposure, so routine genotyping is not warranted for dose selection; however, caution with concomitant CYP2D6 inhibitors remains prudent. The use of PBPK modeling with TDM validation is a model for addressing long half-life drugs in special populations where experimental steady-state studies are infeasible.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The fluoxetine PBPK model includes a central compartment and distribution described by a steady-state volume of distribution.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “No parameter estimation was performed; all parameters were derived from literature or in silico predictions.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “No formal covariate analysis was performed; age was the primary covariate implemented through the Simcyp geriatric population model.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **NUMERIC_MISMATCH** — original: “The simulation study design used 100 subjects per trial and 10 trials.” → correction: “For trial design, we used a population size of 100, with 10 trials and 10 subjects per trial”
[^fc-5]: **UNSUPPORTED** — original: “The study provides quantitative support for conservative dosing of fluoxetine in elderly patients: starting at lower doses (e.g., 20 mg/day or less) and titrating slowly.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “Caution is still warranted with concomitant CYP2D6 inhibitors or in patients with extreme phenotypes (e.g., PMs) where fluoxetine concentrations could be high.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “The results align with current recommendations to 'start low and go slow' and may inform regulatory labeling updates for geriatric dosing.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **CONTRADICTED** — original: “No equations, parameter details, or full model code were provided in the main text, limiting reproducibility and external implementation.” → correction: “The fraction unbound in plasma was set to 0.079, and the fraction unbound in gut enterocytes was assumed to be identical. Intestinal permeability was predicted using MDCK-II cell permeability data. The steady-state volume of distribution (Vss) was set to 10.42 L/kg.”
[^fc-9]: **UNSUPPORTED** — original: “Simulated population of 100 subjects per trial may not capture full interindividual variability; no confidence intervals for simulated ratios.” → correction: “No evidence found”
[^fc-10]: **UNSUPPORTED** — original: “No sensitivity analysis on key physiological parameters (e.g., liver blood flow, microsomal protein) was reported.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The findings are likely generalizable to other SSRIs with active metabolites and prolonged half-lives, but direct extrapolation to non-Korean populations or to other agents requires caution due to ethnic differences in CYP2D6 allele frequencies and physiological parameters.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “The core message—elderly patients accumulate more slowly but reach higher steady-state exposure—is mechanistically robust and likely applicable broadly.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “Future studies should validate CYP2D6 phenotype predictions with genotype-stratified clinical data in elderly patients, particularly in Asian populations with higher prevalence of reduced-function alleles (e.g., CYP2D6*10).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “Incorporation of Korean-specific physiological and genetic parameters into the geriatric model would improve regional accuracy.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “Prospective TDM studies with rigorous adherence monitoring, timed trough samples, and PK-PD linkage to efficacy/safety outcomes are needed to translate exposure differences into actionable dosing recommendations.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “Evaluating drug-drug interactions with CYP2D6 inhibitors (e.g., bupropion, antipsychotics) in the elderly using the PBPK model could guide co-prescribing decisions.” → correction: “No direct evidence in source text.”
[^fc-17]: **UNSUPPORTED** — original: “The approach could be extended to other SSRIs with long-lived active metabolites (e.g., sertraline) to compare their accumulation profiles.” → correction: “No direct evidence in source text.”
[^fc-18]: **CONTRADICTED** — original: “The lack of model parameter details and code limits reproducibility, which is a common shortcoming in PBPK publications.” → correction: “The input parameters for fluoxetine and norfluoxetine are summarized in Table S1.”
[^fc-19]: **UNSUPPORTED** — original: “A sensitivity analysis on physiological parameters or a direct comparison with Korean physiological data would have been valuable.” → correction: “No direct evidence in source text.”
[^fc-20]: **UNSUPPORTED** — original: “This study sets a good precedent for using PBPK to answer dosing questions in special populations, and it aligns with current regulatory interest in model-informed drug development.” → correction: “No direct evidence in source text.”
[^fc-21]: **UNSUPPORTED** — original: “Clinically, this supports starting at lower doses (e.g., 20 mg or half of that), titrating cautiously, and continuing monitoring for adverse effects beyond the first month.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Simulated pharmacokinetic profiles of fluoxetine and norfluoxetine in younger (18–65 years) and elderly (65–98 years) populations following repeated dosing until]({{ site.baseurl }}/assets/digests/2026-09-18-application-of-physiologically-based-pharmacokinetic-modeling-to-optimize/figures/fig_01.jpg)

![Simulated steady-state pharmacokinetic profiles of fluoxetine and norfluoxetine across CYP2D6 phenotypes (EM, IM, PM, and UM) in the elderly population.]({{ site.baseurl }}/assets/digests/2026-09-18-application-of-physiologically-based-pharmacokinetic-modeling-to-optimize/figures/fig_02.jpg)