---
layout: post
title: "Pharmacokinetics of Odronextamab, A Bispecific T-Cell-Engaging Antibody, in Adult Patients With Relapsed or Refractory B-Cell Non-Hodgkin Lymphoma"
date: 2026-06-22
authors: "Patel MB, Carlile DJ, Sweeney K, Hult LO, Davis JD, Zhu M"
journal: "Clinical Pharmacology & Therapeutics, 2025"
doi: "N/A"
paper_type: popk
tags: [popk, covariate-analysis]
excerpt_text: "This paper presents a population PK model for odronextamab, a CD20xCD3 bispecific T-cell engager, in 507 patients with relapsed/refractory B-NHL. The model incorporates parallel linear and time-dependent target-mediated elimination, with body weight, albumin, and IL-10 as key covariates. The analysis supports the dosing regimen for late-phase trials and demonstrates that covariate effects are not clinically relevant."
pdf_path: "/assets/digests/2026-06-22-pharmacokinetics-of-odronextamab-a-bispecific-t-cell-engaging-antibody-in-adult/PMx_Pharmacokinetics_of_Odronextamab_A_Bispe_20260622.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a population PK model for odronextamab, a CD20xCD3 bispecific T-cell engager, in 507 patients with relapsed/refractory B-NHL. The model incorporates parallel linear and time-dependent target-mediated elimination, with body weight, albumin, and IL-10 as key covariates. The analysis supports the dosing regimen for late-phase trials and demonstrates that covariate effects are not clinically relevant.

---

### Executive Summary
Odronextamab PK was characterized using data from Phase I (ELM-1) and Phase II (ELM-2) studies. A two-compartment model with parallel linear clearance and Michaelis-Menten elimination described the data well. Target-mediated clearance decreased over time, consistent with B-cell depletion. Body weight had the largest effect on exposure, followed by albumin and IL-10. Despite statistical significance, covariate effects were within acceptable bounds, supporting the proposed dosing regimen without dose adjustments.

---

### Scientific Context & Motivation
Non-Hodgkin lymphoma is the fifth most common malignancy in the US, and patients often relapse after standard therapies including anti-CD20 antibodies and CAR T. Odronextamab is a novel bispecific antibody that engages T cells to kill CD20+ B cells. Understanding its PK and variability sources is crucial for dose optimization. Prior knowledge of monoclonal antibody PK and target-mediated disposition informed the model. The key gap was to characterize the time-dependent target-mediated clearance and identify clinically relevant covariates that could impact exposure.

---

## ⚡ Methodological Snapshot
A two-compartment model with parallel linear and Michaelis-Menten elimination, where $V_{max}$ declines exponentially over time to an asymptote. Covariates included body weight, albumin, IgG, lymphocyte count, IL-10, IFN-gamma, sex, Ann Arbor stage, prior CAR T, tumor size, and B-NHL subtype. Estimation used FOCE with interaction in NONMEM 7.5. Model evaluation via VPC and bootstrap.

---

## 🏗️ Structural Model Breakdown
Two compartments: central ($V_c=4.99$ L) and peripheral ($V_p=4.42$ L). Intercompartmental clearance $Q=1.21$ L/day. Linear clearance $CL=0.189$ L/day. Michaelis-Menten parameters: baseline $V_{max,0}=2.93$ mg/L/day, $k_m=1.95$ mg/L, $K_v=1.09$/day (rate of $V_{max}$ decline), $R_v=0.262$ (asymptotic ratio). $V_{max}(t)=R_v \cdot V_{max,0} + (1-R_v) \cdot V_{max,0} \cdot e^{-K_v t}$. Total elimination rate = $CL \cdot C + V_{max}(t) \cdot C / (k_m + C)$. Between-subject variability estimated on $V_c$ (variance 0.0983), $V_p$ (0.709), and $V_{max,0}$ (0.403). Residual variability variance 0.136 (ln mg/L).

---

### Detailed Methodological Analysis

#### Modeling Approach
Two-compartment PK model with first-order elimination from central compartment and Michaelis-Menten elimination from central compartment. $V_{max}(t) = V_{max,asym} + (V_{max,0} - V_{max,asym}) \cdot e^{-K_v t}$. Between-subject variability on $V_c$, $V_p$, $V_{max,0}$ (log-normal). Residual variability additive on log scale. Software: NONMEM 7.5, mrgsolve, R.

#### Data Sources
507 patients from Phase I (ELM-1, $n=167$) and Phase II (ELM-2, $n=340$). Doses 0.03-320 mg IV. Step-up dosing followed by QW then Q2W maintenance. Median 29 samples per patient over 5 months. Excluded pre-dose, mis-matched, and BQL samples (3.4%).

#### Estimation Methods
First-order conditional estimation with interaction (FOCE-I). Bootstrap with 300 replicates for parameter precision.

#### Model Evaluation
Goodness-of-fit plots, VPCs stratified by B-NHL subtype, bootstrap parameter distributions, condition number (69.1).

#### Covariate Analysis
Pre-specified covariates based on plausibility. Full model then forward inclusion/backward elimination ($p<0.001$). Retained covariates: body weight, albumin, IgG, lymphocyte count, IL-10, IFN-gamma, sex, Ann Arbor stage, prior CAR T, tumor size, B-NHL subtype on $V_{max}$ parameters. Albumin time-varying on $CL$.

---

### Statistical Rigor Assessment
Appropriate use of FOCE-I for nonlinear mixed effects. Bootstrap confirms parameter precision. VPC shows adequate model performance across subtypes. Condition number 69.1 indicates no severe ill-conditioning. $\eta$-shrinkage acceptable for $V_c$ (8.3%) and $V_{max}$ (8.6%) but higher for $V_p$ (20.1%). Missing data handled by exclusion; covariate missingness <10% except for lymphocyte subsets (50% missing, excluded). Sensitivity analyses not explicitly reported but covariate selection used rigorous criteria with $p<0.001$ for inclusion/elimination.

---

## 📊 Key Findings
Linear clearance was 0.189 L/day, steady-state volume of distribution 9.41 L. Baseline target-mediated clearance was approximately 5 L/day, declining to about 0.03 L/day at steady state. Body weight (allometric exponents 0.854 for $CL$, 0.372 for $V$) had the largest effect on exposure. Albumin was inversely correlated with $CL$ and $V$; IL-10 was inversely correlated with $CL$. Despite these effects, exposure differences were within 80-125% for most patients, suggesting no need for dose adjustments. Time to steady state was approximately 29 weeks, and washout to below quantification limit was 19-24 weeks depending on dose regimen.

---

## 💡 Clinical & Regulatory Implications
No dose adjustments recommended based on body weight, albumin, IL-10, or other covariates. The step-up dosing regimen mitigates cytokine release risk. Time to steady state ~29 weeks supports long-term dosing. Washout period of 19-24 weeks informs monitoring after discontinuation. Higher exposure in low body weight patients and those with renal impairment is explained by body weight effect, not renal function per se. The model supports the proposed dosing regimens for FL (80 mg QW/160 mg Q2W) and DLBCL (160 mg QW/320 mg Q2W) without need for therapeutic drug monitoring.

---

### Strengths & Limitations

#### Strengths
- Large dataset (507 patients) from both Phase I and Phase II studies with rich sampling (median 29 samples per patient)
- Incorporation of time-dependent target-mediated clearance, consistent with the mechanism of B-cell depletion
- Comprehensive covariate analysis with pre-specified and exploratory covariates, using rigorous forward inclusion/backward elimination
- Robust model evaluation including visual predictive checks stratified by B-NHL subtype and bootstrap parameter precision
- Fit-for-purpose model that adequately describes data across diverse B-NHL subtypes and dose regimens

#### Limitations (Acknowledged by Authors)
- Missing data on target abundance (CD20+ B cells and CD3+ T cells) prevented development of a fully mechanistic model
- Empirical nature of the time-dependent clearance function; mechanistic conclusions should be drawn with caution
- Limited washout phase data to characterize terminal elimination
- Body weight range limited to adult patients, preventing reliable estimation of allometric exponents across a wider range
- Potential confounding in renal impairment analysis due to imbalance in body weight and other covariates

#### Limitations (Expert Review)
- High $\eta$-shrinkage for peripheral volume of distribution (20.1%) may affect individual predictions
- No between-subject variability estimated on linear clearance; reliance on time-varying albumin to explain variability may not capture all sources
- Step-up dosing complicates interpretation of early PK and may influence parameter estimates
- No external validation cohort; model performance in independent datasets is unknown
- Correlation among inflammatory biomarkers (e.g., interleukins) may lead to overfitting despite selection criteria

#### Generalizability
Results apply to adult patients with relapsed/refractory B-NHL, including DLBCL, FL, MCL, MZL, and other subtypes. Findings may not extend to pediatric populations, patients with other CD20+ malignancies, or those receiving combination therapies. The model is specific to the step-up dosing regimen used in these studies.

---

### Key Equations

**Central compartment differential equation**

{% raw %}
$$
\frac{dC_c}{dt} = -\left(\frac{CL}{V_c} + \frac{Q}{V_c}\right) \cdot C_c + \frac{Q}{V_p} \cdot C_p - \frac{V_{max}(t) \cdot C_c}{k_m + C_c}
$$
{% endraw %}

Rate of change of odronextamab concentration in the central compartment, including linear elimination, intercompartmental transfer, and Michaelis-Menten elimination.

**Peripheral compartment differential equation**

{% raw %}
$$
\frac{dC_p}{dt} = \frac{Q}{V_c} \cdot C_c - \frac{Q}{V_p} \cdot C_p
$$
{% endraw %}

Rate of change of odronextamab concentration in the peripheral compartment.

**Time-dependent maximum elimination rate**

{% raw %}
$$
V_{max}(t) = V_{max,asym} + (V_{max,0} - V_{max,asym}) \cdot e^{-K_v \cdot t}
$$
{% endraw %}

Empirical function describing the decline in target-mediated elimination capacity over time, where $V_{max,asym} = R_v \cdot V_{max,0}$.

**Linear clearance covariate model**

{% raw %}
$$\begin{aligned}
CL \\
&= CL_{pop} \cdot \left(\frac{WT}{72.6}\right)^{0.854} \cdot \left(\frac{ALB}{38.7}\right)^{-0.933} \cdot \left(\frac{IgG}{38.2}\right)^{0.118} \cdot \left(\frac{IL10}{3.01}\right)^{-0.0712} \\
& \cdot \left(\frac{IFNg}{3.66}\right)^{0.0288}
\end{aligned}$$
{% endraw %}

Full covariate model for linear clearance, with reference patient values and estimated exponents from the fit-for-purpose model.

**Volume of distribution covariate model**

{% raw %}
$$
V_c = V_{c,pop} \cdot \left(\frac{WT}{72.6}\right)^{0.372} \cdot \left(\frac{ALB}{38.7}\right)^{-0.561} \cdot \left(\frac{LYM}{0.792}\right)^{0.0895} \cdot e^{\theta_{sex} \cdot I_{female}}
$$
{% endraw %}

Covariate model for central volume of distribution; same allometric and albumin effects apply to $V_p$.

**Baseline $V_{max}$ covariate model**

{% raw %}
$$\begin{aligned}
V_{max,0} \\
&= V_{max0,pop} \cdot \left(\frac{LYM}{0.792}\right)^{0.313} \cdot e^{\theta_{FL} \cdot I_{FL}} \cdot e^{\theta_{CAR} \cdot I_{priorCAR}} \cdot e^{\theta_{stage} \cdot I_{stage<4}} \\
& \cdot \left(\frac{TS}{2930}\right)^{0.0601}
\end{aligned}$$
{% endraw %}

Covariate model for baseline maximum elimination rate, including effects of lymphocyte count, follicular lymphoma, prior CAR T therapy, Ann Arbor stage, and tumor size.

---

### Figures & Tables

- **Figure 1**: Schematic of the PK model for odronextamab, showing central and peripheral compartments with linear clearance ($CL$) and Michaelis-Menten elimination ($V_{max}$, $k_m$).
  - *Significance*: Illustrates the structural model with parallel linear and target-mediated elimination pathways.
- **Figure 2**: Visual predictive checks (VPC) for all B-NHL subtypes combined and stratified by DLBCL CAR T naïve, DLBCL CAR T failure, FL, MCL, MZL, and other B-NHL.
  - *Significance*: Demonstrates adequate model performance across different patient populations; observed percentiles fall within simulated confidence intervals.
- **Figure 3**: Forest plot of marginal covariate effects on steady-state $AUC$, $C_{max}$, and $C_{min}$, showing fold change relative to reference patient.
  - *Significance*: Identifies body weight, albumin, and IL-10 as covariates with effects outside the 80-125% range, but contextualizes with BSV distribution.
- **Figure 4**: Predicted odronextamab concentration and $V_{max}$ over time after simulated administration of the 0.7/4/20/160 mg QW/320 mg Q2W regimen to DLBCL and FL patients.
  - *Significance*: Shows modest differences in early PK between DLBCL and FL, consistent with faster Vmax decline in DLBCL, but similar exposures after week 3.
- **Table 1**: Baseline patient characteristics by study (ELM-1, ELM-2) and overall, including NHL type, demographics, disease status, and laboratory values.
  - *Significance*: Provides context for the analysis population and highlights differences between Phase I and Phase II cohorts.
- **Table 2**: Population PK parameter estimates for base, full, and fit-for-purpose models, with 95% confidence intervals and bootstrap results.
  - *Significance*: Central table showing all model parameters, covariate effects, and variability estimates; confirms robustness via bootstrap.
- **Table 3**: Steady-state exposure metrics ($C_{min}$, $C_{max}$, $AUC$) stratified by patient subgroups including anti-drug antibody status, Ann Arbor stage, ECOG score, prior CAR T, renal/hepatic function, sex, age, body weight, tumor size, albumin, IgG, lymphocyte count, IFN-gamma, and IL-10.
  - *Significance*: Demonstrates that despite covariate effects, exposure differences across subgroups are modest and generally within acceptable ranges.

---

### Code & Reproducibility Assessment
NONMEM code is provided in the Supporting Information. R packages used (mrgsolve, coveffectsplot) are open-source. Individual patient data are not publicly available but can be requested via Vivli (https://vivli.org/) after regulatory approval.

---

### Supplementary Materials
Supplementary materials include Figure S1 (observed concentration-time profiles by dose regimen and B-NHL type), Figure S2 (goodness-of-fit plots), Figure S3-S4 (simulated concentration-time profiles for FL and DLBCL regimens), Figure S5 (body weight distribution by renal function), Table S1 (rationale for covariate selection), Table S2 (baseline characteristics by B-NHL type), Table S3 (forward inclusion/backward elimination steps), Tables S4-S5 (time to steady state and washout), Table S6 (exposure by subgroups for FL regimen), Table S7 (covariate imbalance in low albumin patients), Table S8 (exposure by renal function), Table S9 (exposure by B-NHL subtype over time). NONMEM code is also provided.

---

### Future Directions
Mechanistic modeling with target abundance data (CD20+ B cells, CD3+ T cells) could refine understanding of time-dependent clearance. Exposure-response analyses for efficacy and safety endpoints are needed to define optimal exposure targets. Pediatric PK and dosing studies would extend applicability. Combination therapy PK interactions with other agents should be evaluated. Longitudinal modeling of biomarkers (e.g., IL-10, albumin) could improve covariate handling.

---

### Expert Commentary
This is a well-conducted PopPK analysis for a bispecific antibody. The time-dependent target-mediated clearance is a key feature, consistent with B-cell depletion. The decision to not estimate BSV on $CL$ and instead use time-varying albumin is pragmatic and justified by the data. The covariate analysis is comprehensive, though the clinical relevance of IL-10 and IFN-gamma effects is questionable given their variability and correlation with disease severity. The model is fit-for-purpose for regulatory submission. The use of FOCE is standard, but SAEM might have been more robust for this complex model with multiple nonlinearities. The thorough evaluation with VPC and bootstrap provides confidence in the model.

---

### Bottom Line
The population PK model for odronextamab adequately describes its complex disposition with time-dependent target-mediated clearance. Covariate effects, though statistically significant, are not clinically meaningful, supporting the current dosing regimen without adjustment for body weight, albumin, or IL-10. The model is fit-for-purpose for exposure-response analyses and regulatory submissions.

---

---

## 📊 Figures

![Schematic of the PK model for odronextamab.Kcpis the first-order rate constant describing the transfer of odronextamab from the central compartment (plasma) to t]({{ site.baseurl }}/assets/digests/2026-06-22-pharmacokinetics-of-odronextamab-a-bispecific-t-cell-engaging-antibody-in-adult/figures/fig_01.png)

![Visual predictive checks. (A) All B-NHL subpopulations, population prediction-corrected; (B) All B-NHL subpopulations; (C) DLBCL CAR T naïve, population predicti]({{ site.baseurl }}/assets/digests/2026-06-22-pharmacokinetics-of-odronextamab-a-bispecific-t-cell-engaging-antibody-in-adult/figures/fig_02.png)

![Marginal effects of covariates on odronextamab exposure in serum. (A) AUC at steady state; (B)Cmaxat steady state; (C)Cminat steady state. Reference patient is a]({{ site.baseurl }}/assets/digests/2026-06-22-pharmacokinetics-of-odronextamab-a-bispecific-t-cell-engaging-antibody-in-adult/figures/fig_03.png)

![Predicted odronextamab concentration and clearance over time after simulated administration of the 0.7/4/20/160 mg QW/320 mg Q2W dose regimen to patients with DL]({{ site.baseurl }}/assets/digests/2026-06-22-pharmacokinetics-of-odronextamab-a-bispecific-t-cell-engaging-antibody-in-adult/figures/fig_04.png)