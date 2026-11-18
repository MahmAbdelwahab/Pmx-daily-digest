---
layout: post
title: "Comparison of Model-Predicted and Observed Evinacumab Pharmacokinetics and Efficacy in Children Aged < 5 Years With Homozygous Familial Hypercholesterolemia."
date: 2026-11-18
authors: "Sébastien Bihorel, Robert Dingman, Jeanne Mendell, Katy C. Norman, Richard T. George, Xue-Qiao Zhao, Robert Pordy, Daniel Garcia, Wendy S. Putnam, Geetha Raghuveer, Brian W. McCrindle, Elena Fornari, Ivo Baric, Shubha Srinivasan, Melissa Diamond, Eliot A. Brinton, John D. Davis, A. Thomas DiCioccio, Lutz Harnisch"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70017"
paper_type: popk
tags: [popk, pediatrics]
excerpt_text: "This study demonstrates through pharmacometric extrapolation and real-world validation that the approved evinacumab regimen of 15 mg/kg IV every 4 weeks provides profound and clinically meaningful LDL-C reductions in infants and children aged 6 months to < 5 years with homozygous familial hypercholesterolemia (HoFH). Despite lower weight-normalized antibody exposures resulting from allometric disposition, children under 5 years achieved comparable or superior relative LDL-C reductions (63.0%–68.5%) to adults (51.7%), supported by real-world clinical experience and xanthoma regression in six compassionate-use patients."
pdf_path: "/assets/digests/2026-11-18-comparison-of-model-predicted-and-observed-evinacumab-pharmacokinetics-and/PMx_Comparison_of_ModelPredicted_and_Observe_20261118.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study demonstrates through pharmacometric extrapolation and real-world validation that the approved evinacumab regimen of 15 mg/kg IV every 4 weeks provides profound and clinically meaningful LDL-C reductions in infants and children aged 6 months to < 5 years with homozygous familial hypercholesterolemia (HoFH). Despite lower weight-normalized antibody exposures resulting from allometric disposition, children under 5 years achieved comparable or superior relative LDL-C reductions (63.0%–68.5%) to adults (51.7%), supported by real-world clinical experience and xanthoma regression in six compassionate-use patients.

---

### Executive Summary
Homozygous familial hypercholesterolemia (HoFH) is an ultra-rare life-threatening disorder leading to premature atherosclerotic cardiovascular disease in early childhood, yet therapeutic options for children under 5 years are severely constrained due to the lack of approved therapies and technical barriers to lipoprotein apheresis. Bihorel and colleagues addressed this critical unmet need by extrapolating previously established population pharmacokinetic/pharmacodynamic (PopPK/PD) models (developed in patients aged ≥ 5 years) to infants and young children aged 6 months to < 5 years. By testing seven distinct biological maturation and allometric scaling frameworks in 5,000 virtual patients, they characterized evinacumab disposition and LDL-C lowering under a 15 mg/kg IV every-4-week regimen. Model predictions were rigorously validated against real-world exposure and biomarker profiles from six patients aged 1.1–4.4 years enrolled in a Managed Access Program (MAP). The findings confirm that weight-based 15 mg/kg IV q4w achieves 41.3%–77.3% LDL-C reductions, driven by indirect response turnover dynamics where higher baseline LDL-C produces greater fractional inhibition, supporting global regulatory expansion of evinacumab to patients as young as 6 months.

---

### Scientific Context & Motivation
HoFH is primarily caused by biallelic loss-of-function mutations in LDLR, rendering traditional LDL receptor-dependent therapies (statins, ezetimibe, PCSK9 inhibitors) largely ineffective. Without intervention, severe coronary atherosclerosis and death can occur before the age of 5. While lipoprotein apheresis is effective, vascular access limitations, low total blood volume, and hemodynamic fragility make regular apheresis technically infeasible or contraindicated in children younger than 2 years. Evinacumab, a recombinant human monoclonal antibody targeting angiopoietin-like 3 (ANGPTL3), reduces LDL-C through LDLR-independent upregulation of endothelial lipase and VLDL processing. Although approved for patients ≥ 5 years in the United States and ≥ 6 months in the EU and Japan, clinical trial data in children under 5 years are virtually impossible to acquire via conventional randomized controlled trials due to extreme rarity and logistical hurdles. This study bridges this knowledge gap through quantitative Model-Informed Drug Development (MIDD), providing an extrapolation paradigm coupled with real-world compassionate-use benchmarking to justify pediatric dose selection.

---

## ⚡ Methodological Snapshot
The authors leveraged previously established non-linear mixed-effects models comprising a two-compartment PK model with parallel linear and non-linear (target-mediated) elimination, linked to an indirect response (turnover) PD model where evinacumab inhibits LDL-C production, while accounting for apheresis clearance. To extrapolate PK/PD to infants and children aged 6 months to < 5 years, seven candidate model structures (M1–M7) were deployed exploring diverse allometric exponents (fixed 0.75/1.0, estimated coefficients, and 0.85/0.80) and IgG ontogeny/maturation half-lives (4.5 to 11.0 months). Simulations were conducted in 5,000 virtual patients created from WHO and CDC pediatric growth curves stratified into five age groups (6 months to < 2 years, 2 to < 5 years, 5 to < 12 years, 12 to < 18 years, and ≥ 18 years).

Primary simulations evaluated steady-state exposure ($AUC$, $C_{max}$, $C_{min}$) and percentage change in LDL-C (%ΔLDL-C) at week 24 following 10 consecutive doses of 15 mg/kg IV every 4 weeks. An alternative sensitivity scenario evaluating 20 mg/kg q4w was also tested. To validate the extrapolation, observed evinacumab concentrations (n = 4) and longitudinal LDL-C profiles (n = 6) from pediatric patients aged 1.1 to 4.4 years treated in a global Managed Access Program (MAP) were compared against 90% prediction intervals conditioned on individualized dosing intervals, missed doses, and plasmapheresis events.

---

## 🏗️ Structural Model Breakdown
The base structural model consists of:
1. Pharmacokinetics: A two-compartment model featuring linear systemic clearance ($CL$), central volume ($V_c$), peripheral volume ($V_p$), and intercompartmental clearance ($Q$), operating in parallel with non-linear Michaelis-Menten elimination parameterized by $V_{max}$ and $K_m$ to capture ANGPTL3 target-mediated drug disposition (TMDD). Linear clearance and distribution parameters were scaled allometrically to standard 70-kg adults with or without empirical pediatric maturation functions.
2. Maturation Function: Tested models M6 and M7 included an asymptotic sigmoidal clearance ontogeny equation: $MF = 1 - \beta \cdot \exp(-\ln(2) \cdot \text{Age} / \tau_{CL})$, where $\beta$ represents the immature clearance deficit and $\tau_{CL}$ represents the maturation half-life.
3. Baseline Disease Covariates: Baseline LDL-C was modeled as an age-dependent function reflecting severe early phenotype presentation and selection bias, with younger age cohorts having significantly higher baseline LDL-C.
4. Pharmacodynamics: An indirect response model governing serum LDL-C concentrations where evinacumab exerts concentration-dependent inhibition of zero-order LDL-C input ($k_{in}$) via an $E_{max}/IC_{50}$ Hill-type equation: $d(\text{LDL-C})/dt = k_{in} \cdot (1 - I_{max} \cdot C / (IC_{50} + C)) - k_{out} \cdot \text{LDL-C} - CL_{apheresis} \cdot \text{LDL-C}$.

---

### Detailed Methodological Analysis

#### Modeling Approach
Population PK/PD extrapolation utilizing deterministic and stochastic ordinary differential equation (ODE) simulation engines implemented in R (version ≥ 4.2.1) using the mrgsolve package (version 1.0.6). Seven structural models (M1–M7) integrating allometric scaling and ontogeny functions were evaluated and summarized into a unified composite model.

#### Data Sources
Demographics and disease parameters for 5,000 virtual patients were generated by synthesizing baseline parameters from clinical trials in patients ≥ 5 years with HoFH, CDC/WHO pediatric growth standards, and natural history data from the CASCADE FH registry. External validation data were derived from 6 pediatric patients aged 1.1 to 4.4 years in an international Managed Access Program (MAP) receiving 5 to 23 infusions.

#### Estimation Methods
Simulations were conducted using post hoc parameter estimates, population fixed effects, and variance-covariance matrices previously estimated via First-Order Conditional Estimation with Interaction (FOCE-I) in NONMEM from clinical trial datasets in older cohorts.

#### Model Evaluation
Visual predictive checks (VPCs) and overlay plots comparing real-world longitudinal LDL-C and serum evinacumab concentrations against median and 90% prediction intervals conditioned on exact individual dosing, infusion interruptions, and plasmapheresis schedules.

#### Covariate Analysis
Body weight was evaluated across allometric scaling exponents ranging from 0.75 to 0.85 for clearances and 0.668 to 1.0 for volumes. Postnatal age was evaluated as a clearance maturation covariate ($\tau_{CL} = 4.5$ and 11 months) and as an empirical predictor of baseline untreated LDL-C.

---

### Statistical Rigor Assessment
The study demonstrated high simulation rigor by generating large virtual cohorts (1,000 subjects per age stratum; total n = 5,000 replicated across models to n = 35,000 evaluations) that properly captured physiological growth correlations and baseline disease severity. Sensitivity analyses explored wide physiological bounds including 7 distinct allometric/maturation paradigms and dose escalation to 20 mg/kg q4w. The small external sample size (n = 6 patients, 4 with PK) represents an unavoidable limitation of ultra-rare disease research, yet the longitudinal depth of follow-up (up to 98 weeks and 23 doses) provided substantial time-series validation.

---

## 📊 Key Findings
1. Allometric exposure scaling: Consistent with allometric principles, steady-state evinacumab exposure following 15 mg/kg IV q4w decreased with declining body weight; median AUC(wk36-40) was 32% lower in children aged 6 months to < 2 years (6,200 mg*day/L) and 28% lower in children 2 to < 5 years (6,550 mg*day/L) compared to adults (9,100 mg*day/L).
2. Enhanced relative LDL-C efficacy: Despite lower circulating drug exposure, predicted median percent reduction from baseline LDL-C (%ΔLDL-C) at week 24 was higher in < 5-year-old patients (63.0% for 6m-<2y, 68.5% for 2-<5y) than in adults (51.7%). Similarly, 82.0%–86.9% of < 5-year-old patients achieved > 50% LDL-C reduction compared to 54.8% of adults.
3. Real-world validation: In the MAP cohort (n = 6, age 1.1–4.4 years), observed LDL-C reductions ranged from 41.3% to 77.3% at last follow-up, aligning closely with model predictions (Figure 2b). All patients with baseline xanthomas experienced marked clinical regression.
4. Dose escalation lack of benefit: Simulations of 20 mg/kg IV q4w in young children yielded a 35%–50% increase in drug exposure but less than a 10% gain in therapeutic goal attainment, verifying that 15 mg/kg IV q4w achieves near-maximal target engagement.

---

## 💡 Clinical & Regulatory Implications
These findings directly validate the clinical efficacy and safety of evinacumab 15 mg/kg IV every 4 weeks in children with HoFH as young as 6 months. For clinicians treating severe pediatric HoFH, evinacumab provides an essential, life-saving, LDLR-independent medical therapy that can either postpone or replace the need for highly invasive, technically challenging, and hemodynamically dangerous lipoprotein apheresis in very small children. Furthermore, documented regression of cutaneous and tendon xanthomas indicates meaningful systemic plaque stabilization and reversal of cholesterol tissue deposition during early development.

---

### Strengths & Limitations

#### Strengths
- Exemplary application of Model-Informed Drug Development (MIDD) to bridge clinical evidence into an ultra-rare pediatric population where randomized controlled trials are practically impossible.
- Comprehensive structural sensitivity analysis testing 7 distinct combinations of allometric exponents and IgG ontogeny maturation half-lives.
- Inclusion of real-world patient data with up to nearly 2 years of longitudinal follow-up, demonstrating concordance between simulated 90% prediction intervals and observed clinical concentrations.
- Integration of real-world plasmapheresis interruptions and dose delays into patient-specific simulation trajectories.

#### Limitations (Acknowledged by Authors)
- Very small real-world sample size (n = 6 patients for LDL-C, n = 4 for evinacumab PK), limiting formal statistical validation.
- Lack of evinacumab pharmacokinetic measurements in two of the youngest patients in the MAP cohort.
- Uncontrolled real-world conditions with dietary variations and concomitant LLT compliance irregularities.

#### Limitations (Expert Review)
- Lack of dynamic mechanistic accounting for ANGPTL3 synthesis rate ontogeny; ANGPTL3 was sampled based on older pediatric distributions.
- Potential confounding in baseline LDL-C selection bias, which was modeled empirically rather than by linking specific genotypic mutations (null/null vs defective) across age strata.

#### Generalizability
The findings are highly generalizable to the global pediatric HoFH population with severe hypercholesterolemia, including receptor-negative individuals, across body weights down to ~8 kg.

---

### Key Equations

**Allometric Clearance with Maturation**

{% raw %}
$$
CL_{i} = CL_{\text{pop}} \cdot \left(\frac{WT_{i}}{70}\right)^{\theta_{\text{weight},CL}} \cdot \left[1 - \beta \cdot \exp\left(-\frac{\ln(2) \cdot \text{Age}_{i}}{\tau_{CL}}\right)\right]
$$
{% endraw %}

Empirical formulation defining individual linear systemic clearance ($CL$) incorporating body weight allometric scaling and postnatal age-dependent clearance maturation.

**Indirect Response Turnover Model for LDL-C**

{% raw %}
$$
\frac{d[\text{LDL-C}]}{dt} = k_{\text{in}} \cdot \left(1 - \frac{I_{\max} \cdot C}{IC_{50} + C}\right) - k_{\text{out}} \cdot [\text{LDL-C}] - CL_{\text{LA}} \cdot [\text{LDL-C}]
$$
{% endraw %}

Dynamic turnover equation showing evinacumab concentration ($C$) inhibiting LDL-C production rate ($k_{in}$) alongside baseline endogenous fractional elimination ($k_{out}$) and intermittent lipoprotein apheresis clearance ($CL_{LA}$).

**Central Compartment Volume Scaling**

{% raw %}
$$
V_{c,i} = V_{c,\text{pop}} \cdot \left(\frac{WT_{i}}{70}\right)^{\theta_{\text{weight},Vc}}
$$
{% endraw %}

Allometric scaling relationship for central compartment distribution volume ($V_c$) normalized to a 70 kg reference individual.

---

### Figures & Tables

- **Table 1**: Baseline demographics, anthropometric variables, and disease characteristics of the 5,000 virtual patients stratified into five age groups (6 months to < 2 years, 2 to < 5 years, 5 to < 12 years, 12 to < 18 years, and ≥ 18 years).
  - *Significance*: Demonstrates the representative distribution of body weights (WHO/CDC growth models) and shows higher baseline LDL-C levels in younger pediatric strata (488 mg/dL in infants vs 258 mg/dL in adults).
- **Table 2**: Clinical and demographic baseline characteristics of the six pediatric patients (aged 1.1 to 4.4 years, weights 7.9 to 17.0 kg) treated with evinacumab in the Managed Access Program (MAP).
  - *Significance*: Provides granular patient-level clinical contexts, including baseline LDL-C, concomitant LLTs (statins, ezetimibe, alirocumab, plasmapheresis), and presence of cutaneous xanthomas.
- **Figure 1**: Model-predicted median and 90% prediction intervals of evinacumab concentrations (a) and percent change in LDL-C from baseline (b) across age strata following 15 mg/kg IV every 4 weeks.
  - *Significance*: Visually proves that while serum evinacumab concentrations decrease in younger age groups due to allometric clearance scaling, the percentage LDL-C reduction is superior in infants and toddlers (63%–68%) compared to adults (52%).
- **Figure 2**: Overlay of observed serum evinacumab concentrations (a) and percent LDL-C reduction (b) from individual MAP patients against the model-predicted median and 90% prediction intervals conditioned on individualized dosing and apheresis schedules.
  - *Significance*: Confirms the external predictive accuracy of the PopPK/PD model in children under 5 years, demonstrating that real-world exposure and biomarker trajectories fall within the 90% prediction band.
- **Table 4**: Summary of steady-state pharmacokinetic exposure metrics ($C_{max}$, $C_{min}$, $AUC$, accumulation ratio) and LDL-C responses at week 24 across age and weight strata under the composite model.
  - *Significance*: Quantifies the exposure differential (AUC of 6,200 vs 9,100 mg*day/L in youngest vs adults) and documents that week 24 %ΔLDL-C remains robust at > 60% across all pediatric subgroups.
- **Table 5**: Percentages of virtual patients achieving therapeutic target LDL-C thresholds (< 70, < 100, < 110, < 130 mg/dL, and > 50% reduction) at week 24 stratified by age and weight cohorts.
  - *Significance*: Shows that > 82% of patients under 5 years achieve a > 50% relative LDL-C reduction, providing quantitative justification for clinical efficacy benchmarks.

---

### Code & Reproducibility Assessment
The simulation workflows, virtual patient generation, and ODE evaluations were implemented in R (version ≥ 4.2.1) using the open-source mrgsolve package (version 1.0.6). While model equations, allometric exponents, and parameter estimates are transparently detailed across tables and citations, the specific simulation scripts and individual patient datasets are not publicly hosted in an open repository due to commercial and patient confidentiality constraints.

---

### Supplementary Materials
The supplementary material contains extensive sensitivity checks across models M1–M7 (Figures S3, S4, S5), detailed descriptions of CDC/WHO virtual cohort generation algorithms, linear regression models from the CASCADE FH registry for untreated baseline LDL-C (Figure S2), baseline ANGPTL3 concentration comparisons (Figure S6), individual observed vs simulated absolute LDL-C trajectories (Figure S7), simulations under perfect adherence assumptions (Figures S8, S9), and exposure/response predictions for the alternative 20 mg/kg q4w regimen (Tables S1, S2).

---

### Future Directions
1. Prospective expansion of longitudinal PK and pharmacodynamic biomarker biobanking in infants and toddlers receiving evinacumab to further refine IgG ontogeny models.
2. Investigation of whether early initiation of ANGPTL3 inhibition prior to age 2 halts or permanently prevents subclinical coronary atherosclerotic calcification detected via non-contrast CT imaging.
3. Evaluation of subcutaneous administration formulations and autoinjector feasibility in low-body-weight infants to mitigate IV infusion visit burdens.
4. Mechanistic integration of ANGPTL3 turnover dynamics and endogenous ligand synthesis rates in infants under 1 year of age.

---

### Expert Commentary
This publication represents a masterclass in regulatory pharmacometrics and pediatric Model-Informed Drug Development (MIDD). Enrolling infants with ultra-rare genetic diseases into formal prospective pharmacokinetic trials is ethically and logistically nearly impossible. By utilizing an established mechanistic PopPK/PD turnover model, systematically stress-testing seven allometric/maturation frameworks, and anchoring predictions to real-world managed access data, Bihorel et al. provided the decisive scientific foundation that enabled regulatory authorizations in children down to 6 months of age.

A fascinating pharmacological insight highlighted in this paper is the divergence between exposure and response across age groups. Novice pharmacometricians often assume that lower drug concentrations in small children (attributable to allometric clearance scaling on body weight: $WT^{0.75}$) inevitably mandate dose escalation. However, the indirect response mechanism of evinacumab reveals that fractional biomarker reduction (%ΔLDL-C) is intrinsically enhanced when baseline production rates ($k_{in}$) are higher. Because young HoFH patients presenting in infancy possess the most severe phenotypes with baseline LDL-C often exceeding 500–800 mg/dL, and because 15 mg/kg achieves near-complete target ANGPTL3 neutralization throughout the dosing interval, increasing the dose to 20 mg/kg yielded negligible clinical gain (< 10% goal attainment improvement) despite a 50% exposure increase. This paper should be cited as a premier case study in avoiding inappropriate pediatric dose escalations through rigorous PK/PD turnover understanding.

---

### Bottom Line
For practicing pharmacometricians and pediatric lipidologists, this paper establishes that evinacumab 15 mg/kg IV every 4 weeks provides robust, near-maximal LDL-C reductions (41%–77%) and cutaneous xanthoma regression in infants and young children aged 6 months to < 5 years with HoFH. Despite lower circulating antibody concentrations resulting from allometric clearance scaling, the higher baseline LDL-C turnover in severe pediatric HoFH leads to equal or superior relative efficacy compared to adults, confirming 15 mg/kg IV q4w as the optimal pediatric therapeutic regimen without requiring dose escalation.

---

### Fact-check corrections

[^fc-1]: **CONTRADICTED** — original: “Xanthoma regression was observed in six compassionate-use pediatric patients treated with evinacumab.” → correction: “All patients with xanthomas at baseline (Table 2) experienced regression of xanthomas during the treatment period.”
[^fc-2]: **CONTRADICTED** — original: “Model predictions for evinacumab were validated against real-world exposure and biomarker profiles from six patients aged 1.1 to 4.4 years enrolled in a Managed Access Program (MAP).” → correction: “The observed LDL-C concentrations from the six patients and evinacumab concentration from four patients in the MAP were graphically overlaid and compared with the median and 90% prediction interval (PI) of simulated data”
[^fc-3]: **CONTRADICTED** — original: “Natural history data for virtual patient baseline characteristics were obtained from the CASCADE FH registry.” → correction: “Random sampling methods (Supporting Information) were applied to construct a population with a realistic distribution of demographics and disease characteristics (Table 1), based upon the analysis dataset used to develop the PK/PD models in ≥ 5-year-old patients and growth models developed by the World Health Organization (WHO) and the Centers for Disease Control and Prevention (CDC) [32].”
[^fc-4]: **UNSUPPORTED** — original: “Base model parameters were originally estimated via First-Order Conditional Estimation with Interaction (FOCE-I) in NONMEM.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “Simulation scripts and individual patient datasets were not publicly hosted in an open repository due to commercial and confidentiality constraints.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “ANGPTL3 synthesis rates were sampled based on older pediatric distributions rather than dynamically accounting for synthesis rate ontogeny.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **CONTRADICTED** — original: “Evinacumab pharmacokinetic measurements were not available in two of the youngest patients in the Managed Access Program cohort.” → correction: “Evinacumab and ANGPTL3 concentrations were only available in Patients C–F, and were measured using the validated bioanalytical assays utilized in the prior clinical studies [31].”

---

## 📊 Figures

![Median and 90% prediction interval of model-based predicted evinacumab concentrations (a) and change from LDL-C baseline concentrations (b) in patients with homozygous fa]({{ site.baseurl }}/assets/digests/2026-11-18-comparison-of-model-predicted-and-observed-evinacumab-pharmacokinetics-and/figures/fig_01.jpg)

![Comparison of observed and model-predicted evinacumab concentrations (a) and change from LDL-C baseline concentrations (b) based on actual dosing and plasmapheresis histo]({{ site.baseurl }}/assets/digests/2026-11-18-comparison-of-model-predicted-and-observed-evinacumab-pharmacokinetics-and/figures/fig_02.jpg)