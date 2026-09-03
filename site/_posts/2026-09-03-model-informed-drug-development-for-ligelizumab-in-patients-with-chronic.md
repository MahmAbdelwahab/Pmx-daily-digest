---
layout: post
title: "Model-Informed Drug Development for Ligelizumab in Patients With Chronic Spontaneous Urticaria"
date: 2026-09-03
authors: "Bienczak A, Gautier A, Hua E, Ji Y, Scosyrev E, Smeets S, Severin T, Drollmann A, Patekar M, Savelieva M"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025"
doi: "10.1002/psp4.70098"
paper_type: popk
tags: [popk, dose-response, covariate-analysis, pediatrics, regulatory, clinical-trial-design]
excerpt_text: "This paper provides a comprehensive case study of how model-informed drug development (MIDD) was applied across the entire ligelizumab CSU program, from Phase 2b dose selection through pediatric extrapolation and label support. It presents the final PopPK and longitudinal UAS7 exposure-response models, revealing baseline IgE as the dominant covariate with an umbrella-shaped effect on $EC_{50}$. Pharmacometricians involved in biologic development, MIDD strategy, or anti-IgE therapies should read this for its exemplary 'learn and confirm' workflow and honest assessment of missed opportunities."
pdf_path: "/assets/digests/2026-09-03-model-informed-drug-development-for-ligelizumab-in-patients-with-chronic/PMx_ModelInformed_Drug_Development_for_Ligel_20260903.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper provides a comprehensive case study of how model-informed drug development (MIDD) was applied across the entire ligelizumab CSU program, from Phase 2b dose selection through pediatric extrapolation and label support. It presents the final PopPK and longitudinal UAS7 exposure-response models, revealing baseline IgE as the dominant covariate with an umbrella-shaped effect on $EC_{50}$. Pharmacometricians involved in biologic development, MIDD strategy, or anti-IgE therapies should read this for its exemplary 'learn and confirm' workflow and honest assessment of missed opportunities.

---

### Executive Summary
Bienczak et al. present a comprehensive overview of the MIDD framework applied throughout the clinical development of ligelizumab, a humanized anti-IgE monoclonal antibody for chronic spontaneous urticaria (CSU). The program began with a mechanistic PK-IgE binding model to guide Phase 2b dose selection in the absence of CSU data, which was subsequently retired in favor of a more parsimonious two-compartment PopPK model as patient data emerged. The final PopPK model, built on 1907 individuals (1593 adult CSU, 113 adolescent CSU, 201 healthy volunteers), identified body weight (allometric exponents 0.9 for $CL$, 0.6 for volumes), baseline total IgE (exponents 0.106 on $CL/F$ and −0.0816 on $V_p/F$), and ADA-positive status ($CL/F$ +30%, $V_p/F$ −41%) as significant covariates. The longitudinal exposure-response model for UAS7, estimated on 1808 CSU patients, employed an indirect response structure with a sigmoidal $E_{max}$ drug effect inhibiting $k_{in}$, revealing a striking umbrella-shaped effect of baseline IgE on $EC_{50}$: 747.9 ng/mL for moderate IgE (40–300 IU/mL), increasing by 75% to 1309.3 ng/mL in low IgE (<40 IU/mL) and by 219% to 2385.7 ng/mL in high IgE (≥300 IU/mL). Simulations supported the 72 and 120 mg q4w doses for Phase 3, demonstrated PK-exposure matching for pediatric extrapolation, and showed that up-titration in poor responders would provide only modest benefit (5–6% increase in symptom-free probability). The paper exemplifies the 'learn and confirm' paradigm and provides a template for integrating M&S across drug development stages, while candidly acknowledging that MIDD was not used for indirect comparison with omalizumab before Phase 3—a potential missed opportunity.

---

### Scientific Context & Motivation
Chronic spontaneous urticaria (CSU) is characterized by spontaneous wheals and/or angioedema lasting >6 weeks without an identifiable trigger, with a substantial proportion of patients remaining uncontrolled despite H1-antihistamine therapy. Ligelizumab, a high-affinity humanized anti-IgE monoclonal antibody, was developed on the hypothesis that higher binding affinity and distinct epitope binding would confer superior clinical response compared to the predecessor omalizumab. The paper addresses the knowledge gap of how MIDD can systematically guide dose selection, trial design, pediatric extrapolation, and label evidence generation for a biologic in a heterogeneous disease with complex, incompletely understood pathophysiology. It fills this gap by providing the first comprehensive longitudinal mixed-effects model for UAS7 changes comprising both placebo and drug response components, and by demonstrating the iterative evolution of model structures as data accrued across Phase 1–3 studies—from mechanistic PK-IgE binding to empirical PopPK and indirect response models. The umbrella-shaped IgE effect on the exposure-response relationship challenges simple linear covariate assumptions and highlights the need for mechanistic interpretation of empirical covariate findings.

---

## ⚡ Methodological Snapshot
The paper describes a sequential modeling approach across development stages. Initially, a mechanistic PK-IgE binding model was developed from Phase 1 data to guide Phase 2b dose selection based on predicted free IgE depletion. As patient data emerged, this was replaced by a two-compartment PopPK model with allometric scaling and covariate effects (baseline IgE, ADA status). The exposure-response analysis used a sequential approach: a placebo response model (mono-exponential decline from $U_0$ to $U_{SS}$) was developed first, followed by a drug effect model using an indirect response structure with a sigmoidal $E_{max}$ function inhibiting $k_{in}$. UAS7 scores were logit-transformed for modeling. Final models were used for extensive simulations addressing dose selection, pediatric extrapolation, subgroup response predictions, and up-titration scenarios.

---

## 🏗️ Structural Model Breakdown
The final PopPK model was a two-compartment model with first-order absorption following subcutaneous administration. Clearance and volume parameters were allometrically scaled by body weight (exponents 0.9 for $CL$, 0.6 for volumes, centered at 70 kg). Baseline total IgE affected $CL/F$ (exponent 0.106) and $V_p/F$ (exponent −0.0816), and ADA-positive status increased $CL/F$ by 30% and decreased $V_p/F$ by 41%. The exposure-response model for UAS7 comprised two components: (1) a placebo response model describing mono-exponential decline from baseline $U_0$ to steady-state $U_{SS}$ with placebo response time ($PRT$); and (2) a drug effect model using an indirect response (turnover) structure where ligelizumab inhibits the production rate $k_{in}$ via a sigmoidal $E_{max}$ function: $INH = E_{max} \cdot C^{\gamma}/(EC_{50}^{\gamma} + C^{\gamma})$, with the response variable U (logit-transformed UAS7) governed by $dU/dt = k_{in} \cdot (1 - INH) - k_{out} \cdot U$. The model was initially parameterized with a single drug response time parameter due to limited wash-out data, then re-parameterized as a classical turnover model with distinct $k_{in}$ and $k_{out}$ as wash-out data became available. Covariate effects on $EC_{50}$ (IgE subgroup), $k_{out}$ (IgE subgroup, age, ADA status, race, study), and baseline UAS7 (angioedema, prior cyclosporine, study) were included in the final model.

---

### Detailed Methodological Analysis

#### Modeling Approach
Non-linear mixed-effects modeling using a two-compartment PopPK model with first-order absorption for ligelizumab. The exposure-response model for UAS7 comprised a placebo response model (mono-exponential decline) and a drug effect model (indirect response with sigmoidal $E_{max}$ inhibition of $k_{in}$). A sequential PK/PD approach was used, with individual PK parameters predicted from the PopPK model and used as inputs to the exposure-response model. UAS7 scores were logit-transformed to handle the bounded (0–42) scale. PK concentrations below LLOQ were handled as left-censored data in model fitting. Software details are provided in the supplementary materials.

#### Data Sources
Six studies contributed data: A2103 (Phase 1, 69 healthy volunteers, 0.2–4.0 mg/kg q2w), C2101 (Phase 1, 132 healthy volunteers, 120 mg single dose), C2201 (Phase 2b, 297 adult CSU patients, 24/72/240 mg q4w and 120 mg single dose), C2202 (Phase 2b, 49 adolescent CSU patients, 24/120 mg q4w), C2302 and C2303 (Phase 3, 735 patients each, 72/120 mg q4w). The final PopPK model was built on 1907 individuals (1593 adult CSU, 113 adolescent CSU, 201 healthy volunteers); the exposure-response model on 1808 CSU patients (1693 adults, 115 adolescents). PK sampling schemes varied by study with LLOQ ranging from 200 to 1000 ng/mL.

#### Estimation Methods
Non-linear mixed-effects estimation methods were used for both PopPK and exposure-response models. The paper references standard pharmacometric estimation approaches (details in supplementary materials, Section 2), consistent with FOCE or similar likelihood-based methods. The sequential approach involved first estimating PopPK parameters, then fixing individual PK predictions for the exposure-response model estimation.

#### Model Evaluation
Models were evaluated using visual predictive checks (VPCs) for both continuous UAS7 changes and binary complete responder proportions over time, diagnostic plots (Figures S4–S7), and assessment of parameter precision via relative standard errors (RSEs). The final exposure-response model showed good descriptive and predictive performance, especially for pivotal study data, though with limitations in capturing effect offset dynamics after treatment discontinuation.

#### Covariate Analysis
Covariate testing was conducted during model building. For the PopPK model, body weight was included via allometric scaling (exponents 0.9 for $CL$, 0.6 for volumes, centered at 70 kg), and baseline total IgE (exponents 0.106 on $CL/F$, −0.0816 on $V_p/F$) and ADA-positive status ($CL/F$ +30%, $V_p/F$ −41%) were identified as statistically significant. For the exposure-response model, exploratory graphical analysis identified baseline IgE subgroups (low <40, moderate 40–300, high ≥300 IU/mL) with distinctly different response patterns, confirmed by covariate testing. $EC_{50}$ increased by 75% (low IgE) and 219% (high IgE) relative to moderate IgE. $k_{out}$ was reduced by ~31% in low IgE, adolescents, ADA-positive, and Asian patients, and increased by 39% in study C2201. Baseline UAS7 was higher in patients with angioedema at baseline (+4%), prior cyclosporine use (+4%), and in study C2201 (+13%).

---

### Statistical Rigor Assessment
The statistical methods are generally appropriate for the research questions. The large integrated dataset (1907 individuals for PK, 1808 for exposure-response) provides substantial power for covariate detection. Parameter precision was assessed via RSEs, which were small to moderate for most parameters, though IIV was high, particularly for $EC_{50}$ and $k_{out}$, reflecting the heterogeneous disease and background H1-AH treatment. The sequential estimation approach (fixing individual PK parameters for exposure-response modeling) is a recognized limitation that may underestimate uncertainty in exposure-response parameters compared to joint estimation.[^fc-1] Missing data handling was addressed through imputation rules for UAS7 and left-censoring for PK concentrations below LLOQ. Model evaluation using VPCs demonstrated good performance, though the acknowledged limitation in capturing effect offset dynamics suggests the model may not fully characterize the wash-out phase. The safety exposure-response analysis was descriptive (quartile-based comparisons) rather than formal statistical modeling, which is appropriate for a screening analysis but limits inference. The high correlations between baseline characteristics noted by the authors could confound covariate effect estimates, and no sensitivity analyses were reported to assess the robustness of covariate effects to these correlations.

---

## 📊 Key Findings
The final PopPK model was a two-compartment model with first-order absorption, allometric scaling on $CL$ and volumes (exponents 0.9 and 0.6, centered at 70 kg), baseline total IgE on $CL/F$ (exponent 0.106) and $V_p/F$ (exponent −0.0816), and ADA-positive status increasing $CL/F$ by 30% and decreasing $V_p/F$ by 41%. The exposure-response model for UAS7 used an indirect response structure with a sigmoidal $E_{max}$ drug effect inhibiting $k_{in}$; $EC_{50}$ was 747.9 ng/mL in moderate IgE patients, increasing by 75% (to 1309.3 ng/mL) in low IgE and by 219% (to 2385.7 ng/mL) in high IgE subgroups. Reference $k_{out}$ was 0.09 $day^{-1}$, reduced by ~31% in low IgE patients, adolescents, ADA-positive patients, and Asians, and increased by 39% in study C2201. Simulations demonstrated that 72 mg q4w achieves the response plateau in most patients, with dose escalation to 120 mg providing only 4–5% incremental improvement in pCR. ADA-positive patients had ~40% lower exposures but only ~4% lower pCR, with 120 mg in ADA-positive patients matching 72 mg response in ADA-negative patients. Up-titration from 72 to 120 mg in inadequate responders (UAS7 > 6) increased the probability of being symptom-free at year 1 by 5–6%. No exposure-safety trends were observed across AE/SAE rates in pivotal studies.

---

## 💡 Clinical & Regulatory Implications
The MIDD analyses support several clinically relevant conclusions. First, 72 mg q4w provides near-maximal UAS7 suppression in most CSU patients, with 120 mg q4w offering only marginal incremental benefit (4–5% increase in pCR)—information directly relevant to dose selection and labeling. Second, baseline IgE stratification identifies patient subgroups with different response trajectories: moderate IgE (40–300 IU/mL) patients achieve the highest pCR (~50–54%), while low IgE patients have slower onset but eventually reach similar response, and high IgE (≥300 IU/mL) patients have persistently lower response. However, simulations suggest that a priori dose adjustment based on IgE would provide limited clinical benefit due to high inter-patient variability. Third, ADA-positive patients experience ~40% lower exposures, but the clinical impact is modest (~4% lower pCR); a 120 mg dose in ADA-positive patients matches the response of ADA-negative patients at 72 mg, supporting dose considerations in this subgroup. Fourth, pediatric extrapolation was supported by demonstrating comparable PK (after weight adjustment) and exposure-response relationships between adolescents and adults, enabling PK-exposure matching for dose selection in younger children. Fifth, up-titration from 72 to 120 mg in inadequate responders (UAS7 > 6) at Weeks 12–20 increases the probability of symptom-free status at year 1 by only 5–6%, suggesting limited utility of this strategy. Finally, no exposure-safety trends were observed, supporting the safety profile of ligelizumab across the tested dose range.

---

### Strengths & Limitations

#### Strengths
- Comprehensive MIDD framework applied iteratively across all development stages, from Phase 2b dose selection through pediatric extrapolation and label support
- Large integrated dataset: 1907 individuals for PopPK and 1808 CSU patients for exposure-response modeling across six studies
- Model evolution following the 'learn and confirm' paradigm, with mechanistic PK-IgE binding model appropriately retired in favor of a parsimonious PopPK model as patient data emerged
- First comprehensive longitudinal mixed-effects model for UAS7 comprising both placebo and drug response components
- Pediatric extrapolation supported by model-based similarity assessment and PK-exposure matching, reducing sample size and placebo exposure in adolescents
- Transparent acknowledgment of limitations, including the missed opportunity for model-based indirect comparison with omalizumab
- Simulation-based evaluation of clinically actionable scenarios (up-titration, subgroup dose optimization) with clear presentation of prediction intervals

#### Limitations (Acknowledged by Authors)
- High inter-patient variability in UAS7 response, largely influenced by background and rescue H1-AH medication
- Model limitations in capturing the dynamics of effect offset after treatment discontinuation
- High correlations between several baseline patient characteristics potentially confounding estimated covariate effects
- MIDD was not used to facilitate an indirect comparison with omalizumab before initiation of pivotal trials
- Sequential (rather than joint) PK/PD estimation approach may not fully propagate parameter uncertainty

#### Limitations (Expert Review)
- The sequential exposure-response approach (using individual PK predictions rather than joint estimation) may underestimate uncertainty in exposure-response parameters
- Safety exposure-response analysis was limited to descriptive quartile-based comparisons in pivotal studies, lacking formal statistical modeling
- The logit transformation of UAS7, while statistically appropriate for bounded data, complicates clinical interpretation of model parameters
- The umbrella-shaped IgE effect, while mechanistically plausible, may partly reflect confounding with disease endotype or duration, which were not fully characterized
- Simulations of up-titration scenarios assume the exposure-response relationship remains valid at higher doses without formal validation of extrapolation beyond tested dose range
- The decision to discontinue development limits the ability to validate model predictions prospectively in the planned pediatric study

#### Generalizability
The MIDD framework and workflow are highly generalizable to other biologic development programs, particularly for monoclonal antibodies with target-mediated disposition and heterogeneous disease populations.[^fc-11] However, the specific covariate effects (e.g., the umbrella-shaped IgE effect on $EC_{50}$, ADA impact on clearance) are disease- and drug-specific and should not be extrapolated to other anti-IgE therapies or indications without independent validation. The pediatric extrapolation approach based on PK-exposure matching is broadly applicable, but the model-based similarity assessment requires adequate adolescent data and comparable exposure-response relationships across age groups.

---

### Key Equations

**Placebo Response Model**

{% raw %}
$$
U(t) = U_{SS} + (U_0 - U_{SS}) \cdot e^{-t/PRT}
$$
{% endraw %}

Describes the mono-exponential decline of UAS7 from baseline ($U_0$) to a new steady-state value ($U_{SS}$) with placebo response time ($PRT$), the inverse of the rate constant for change.

**Indirect Response Model for UAS7 with Drug Effect**

{% raw %}
$$
\frac{dU}{dt} = k_{in} \cdot \left(1 - \frac{E_{max} \cdot C^{\gamma}}{EC_{50}^{\gamma} + C^{\gamma}}\right) - k_{out} \cdot U
$$
{% endraw %}

Turnover model where ligelizumab inhibits the production rate ($k_{in}$) of UAS7 via a sigmoidal (hyperbolic) $E_{max}$ function with $EC_{50}$, Hill coefficient ($\gamma$), and maximum effect ($E_{max}$); $k_{out}$ represents the loss of response rate constant.

**Allometric Scaling for Clearance**

{% raw %}
$$
CL = CL_{\text{pop}} \cdot \left(\frac{WT}{70}\right)^{0.9}
$$
{% endraw %}

Body weight effect on apparent clearance using allometric scaling centered at 70 kg with estimated exponent 0.9; volumes used exponent 0.6.

**IgE Effect on Apparent Clearance**

{% raw %}
$$
CL = CL_{\text{pop}} \cdot \left(\frac{WT}{70}\right)^{0.9} \cdot \left(\frac{\text{IgE}}{\text{median}}\right)^{0.106}
$$
{% endraw %}

Baseline total IgE effect on apparent clearance with estimated exponent 0.106; a similar relationship with exponent −0.0816 was estimated for the apparent volume of the peripheral compartment ($V_p/F$).

**EC50 Modulation by Baseline IgE Subgroup**

{% raw %}
$$
EC_{50} = 747.9 \cdot (1 + 0.75 \cdot I_{\text{low}}) \cdot (1 + 2.19 \cdot I_{\text{high}}) \text{ ng/mL}
$$
{% endraw %}

$EC_{50}$ increases by 75% in patients with low baseline IgE (<40 IU/mL) and by 219% in patients with high baseline IgE (≥300 IU/mL) relative to the moderate IgE subgroup (40–300 IU/mL), where $I_{low}$ and $I_{high}$ are indicator variables.

---

### Figures & Tables

- **Figure 1**: Flow diagram of clinical studies and MIDD activities in the ligelizumab CSU program, showing the iterative sequence of modeling analyses staggered around interim and final data availability from Phase 2b and Phase 3 studies.
  - *Significance*: Provides the overarching framework for understanding how MIDD activities were sequenced and how each analysis informed subsequent development decisions, from dose selection through pediatric extrapolation to label support.
- **Figure 2**: Visual predictive checks for (a) changes in UAS7 over time and (b) proportion of complete responders (UAS7 = 0) over time, split by study and treatment arm for the final exposure-response model.
  - *Significance*: Demonstrates the descriptive and predictive performance of the final exposure-response model, particularly for the pivotal studies that provided the majority of fitted data, and highlights limitations in capturing effect offset dynamics.
- **Figure 3**: Simulated (a) ligelizumab trough concentrations at steady state, (b) longitudinal changes in UAS7, and (c) longitudinal changes in the probability of achieving complete response (pCR) for the 72, 120, and 240 mg q4w doses.
  - *Significance*: Key simulation output supporting dose selection, showing that the response plateau is achieved with 72 mg q4w in most patients and that higher doses provide only marginal incremental benefit.
- **Figure 4**: Simulated differences in ligelizumab trough concentrations at steady state and longitudinal changes in pCR for subgroups defined by baseline IgE levels (a, b), ADA status (c, d), body weight quartiles (e, f), and age group (g, h).
  - *Significance*: Comprehensive visualization of covariate impacts on exposure and response, highlighting the umbrella-shaped IgE effect, the limited clinical impact of ADA and body weight differences, and the comparability of adolescent and adult responses.
- **Table 1**: Summary of MIDD activities, data used, approaches, and outcomes across three categories: dose selection and trial design, pediatric development and extrapolation, and evidence generation for label and drug adoption.
  - *Significance*: Provides a structured overview of the entire MIDD workflow, mapping each analysis to its development-stage question and outcome, and serves as a template for planning MIDD activities in other programs.
- **Table 2**: Details of the six clinical studies included in the PopPK and exposure-response model development, including phase, population, dosage regimens, PK sampling schemes, LLOQ, and study duration.
  - *Significance*: Documents the data sources underpinning all modeling analyses, essential for assessing the breadth and quality of the integrated dataset and the generalizability of model findings.

---

### Supplementary Materials
The supplementary file (psp470098-sup-0001-datas1.pdf) contains detailed model development information, including UAS7 derivation and imputation rules, logit transformation details, handling of missing data and left-censored PK concentrations, model development and software details, mathematical and graphical representations of the placebo and drug response models, covariate assessment methods, simulation specifications, final model parameter estimates with precision, diagnostic plots (Figures S4–S7), exploratory covariate analyses (Figures S9–S15), up-titration simulation results (Figure S16), and safety exposure-response tables (Tables S12–S15).

---

### Future Directions
The paper raises several important questions for future work. First, the authors acknowledge that model-based indirect comparison with omalizumab before Phase 3 initiation could have highlighted the risk of non-superiority—a lesson for future programs to integrate comparative effectiveness modeling earlier. Second, the planned pediatric study validation steps (dose confirmation in children aged 6 to <12 years and extrapolation to ages 2 to <6 years) were not conducted due to program discontinuation; these steps illustrate the intended 'optimization loop' that should be reported in future MIDD programs. Third, the mechanistic basis of the umbrella-shaped IgE effect warrants further investigation, particularly the relationship between IgE levels, CSU endotypes (Type I vs. Type IIb), and response to IgE-neutralizing therapies. Fourth, joint PK/PD modeling approaches could better characterize uncertainty propagation compared to the sequential approach used here. Finally, the modest predicted benefit of up-titration highlights the need for alternative strategies (e.g., combination therapy or switching) for inadequate responders, which could be explored through model-based simulations in future studies.

---

### Expert Commentary
This paper is an exemplary teaching case for MIDD in practice, demonstrating how models should evolve with the drug development lifecycle rather than being static analyses. The transition from a mechanistic PK-IgE binding model to a parsimonious PopPK model is a textbook example of 'fit for purpose' modeling—the mechanistic model was essential when no clinical efficacy data existed, but the empirical model was more practical once patient data became available. The umbrella-shaped IgE effect is a fascinating finding with plausible mechanistic explanations: low IgE may indicate Type IIb endotype (IgG autoantibody-driven disease) where IgE neutralization is less relevant, while very high IgE may reflect high disease activity that overwhelms the drug's capacity. The honest discussion of the missed opportunity for model-based indirect comparison with omalizumab is commendable and serves as a cautionary tale—had such an analysis been conducted, it might have tempered expectations before the Phase 3 investment. The paper also reinforces that high inter-patient variability in response, driven by background medication and disease heterogeneity, fundamentally limits the clinical benefit of dose escalation strategies. For trainees, this paper illustrates that the value of MIDD lies not in any single model but in the disciplined, question-driven application of quantitative methods across the entire development continuum.

---

### Bottom Line
This paper is a valuable case study demonstrating how MIDD can be systematically applied across a biologic development program, with models evolving iteratively as data accrue. The key pharmacometric takeaway is the power of the 'learn and confirm' paradigm: a mechanistic model guided early dose selection, was replaced by a parsimonious PopPK model as patient data emerged, and ultimately supported dose confirmation, pediatric extrapolation, and treatment optimization. The identification of baseline IgE as the dominant covariate with an umbrella-shaped effect on both PK and exposure-response underscores the importance of mechanistic interpretation of empirical covariate findings. For practicing pharmacometricians, the paper reinforces the value of model-based pediatric extrapolation to reduce sample sizes and placebo exposure, the utility of simulation-based assessment of dose escalation strategies, and the importance of integrating M&S early and continuously—including indirect treatment comparisons—to de-risk pivotal trial decisions.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The sequential estimation approach (fixing individual PK parameters for exposure-response modeling) is a recognized limitation that may underestimate uncertainty in exposure-response parameters compared to joint estimation.” → correction: “Exposure-response modeling was conducted using a sequential approach (Section 2.2 in Supporting Information S1).”
[^fc-2]: **UNSUPPORTED** — original: “No sensitivity analyses were reported to assess the robustness of covariate effects to correlations between baseline characteristics.” → correction: “No mention of sensitivity analyses in the source text.”
[^fc-3]: **UNSUPPORTED** — original: “The final PopPK model was a two-compartment model with first-order absorption.” → correction: “the PK of ligelizumab was equally well characterized by a simpler two-compartment PopPK model”
[^fc-4]: **NUMERIC_MISMATCH** — original: “kout was reduced by ~31% in low IgE patients, adolescents, ADA-positive patients, and Asians.” → correction: “$k_{out}$ was slower in patients with low IgE (reduced by 31% to $0.062$ $day^{-1}$), adolescents (reduced by 31% to $0.062$ $day^{-1}$), patients who developed ADAs (reduced by 32% to $0.062$ $day^{-1}$), and Asians (reduced by 31% to $0.062$ $day^{-1}$).”
[^fc-5]: **UNSUPPORTED** — original: “The sequential (rather than joint) PK/PD estimation approach may not fully propagate parameter uncertainty.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “The sequential exposure-response approach (using individual PK predictions rather than joint estimation) may underestimate uncertainty in exposure-response parameters.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “The logit transformation of UAS7, while statistically appropriate for bounded data, complicates clinical interpretation of model parameters.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “The umbrella-shaped IgE effect, while mechanistically plausible, may partly reflect confounding with disease endotype or duration, which were not fully characterized.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “Simulations of up-titration scenarios assume the exposure-response relationship remains valid at higher doses without formal validation of extrapolation beyond tested dose range.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “The decision to discontinue development limits the ability to validate model predictions prospectively in the planned pediatric study.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The MIDD framework and workflow are highly generalizable to other biologic development programs, particularly for monoclonal antibodies with target-mediated disposition and heterogeneous disease populations.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “The specific covariate effects (e.g., the umbrella-shaped IgE effect on EC50, ADA impact on clearance) are disease- and drug-specific and should not be extrapolated to other anti-IgE therapies or indications without independent validation.” → correction: “No direct evidence in source text.”
[^fc-13]: **UNSUPPORTED** — original: “The pediatric extrapolation approach based on PK-exposure matching is broadly applicable.” → correction: “No direct evidence in source text.”
[^fc-14]: **UNSUPPORTED** — original: “The placebo response model equation is U(t) = USS + (U0 - USS) * e^(-t/PRT).” → correction: “No direct evidence in source text.” → original: “The placebo response model equation is $U(t) = U_{SS} + (U_0 - U_{SS}) \cdot e^{-t/PRT}$.”
[^fc-15]: **UNSUPPORTED** — original: “The indirect response model equation is dU/dt = kin * (1 - (Emax * C^gamma) / (EC50^gamma + C^gamma)) - kout * U.” → correction: “No direct evidence in source text.” → original: “The indirect response model equation is $dU/dt = k_{in} \cdot (1 - \frac{E_{max} \cdot C^{\gamma}}{EC_{50}^{\gamma} + C^{\gamma}}) - k_{out} \cdot U$.”
[^fc-16]: **UNSUPPORTED** — original: “Joint PK/PD modeling approaches could better characterize uncertainty propagation compared to the sequential approach used here.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **UNSUPPORTED** — original: “The modest predicted benefit of up-titration highlights the need for alternative strategies (e.g., combination therapy or switching) for inadequate responders.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-18]: **UNSUPPORTED** — original: “The honest discussion of the missed opportunity for model-based indirect comparison with omalizumab is commendable and serves as a cautionary tale.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Flow of clinical studies and MIDD activities in the ligelizumab program in CSU. C2201, Phase 2b study of ligelizumab in adult patients with CSU; C2202, Phase 2b]({{ site.baseurl }}/assets/digests/2026-09-03-model-informed-drug-development-for-ligelizumab-in-patients-with-chronic/figures/fig_01.jpg)

![Visual predictive checks for (a) changes in UAS7 over time and (b) proportion of complete responders (UAS7 = 0) over time split by study and treatment arm for th]({{ site.baseurl }}/assets/digests/2026-09-03-model-informed-drug-development-for-ligelizumab-in-patients-with-chronic/figures/fig_02.jpg)

![Simulated (a) ligelizumab trough concentrations at steady state, (b) longitudinal changes in UAS7, (c) longitudinal changes in the probability of achieving compl]({{ site.baseurl }}/assets/digests/2026-09-03-model-informed-drug-development-for-ligelizumab-in-patients-with-chronic/figures/fig_03.jpg)

![Simulated differences in ligelizumab trough concentrations at steady state and longitudinal changes in the probability of achieving complete response pCR for sub]({{ site.baseurl }}/assets/digests/2026-09-03-model-informed-drug-development-for-ligelizumab-in-patients-with-chronic/figures/fig_04.jpg)