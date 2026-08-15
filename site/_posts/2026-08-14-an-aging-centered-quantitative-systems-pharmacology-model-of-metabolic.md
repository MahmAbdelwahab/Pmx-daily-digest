---
layout: post
title: "An aging-centered quantitative systems pharmacology model of metabolic combination therapies identifies distinct metabolic and healthspan-oriented optima"
date: 2026-08-14
authors: "Goryanin I, Damms B, Goryanin I"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026 (in press)"
doi: "10.1002/psp4.70322"
paper_type: popk
tags: [popk, qsp]
excerpt_text: "This paper presents a mechanistic QSP model that treats aging as a pharmacologically modifiable systems process, coupling semaglutide pharmacodynamics with a damage–repair–frailty–biological-age-gap architecture. It is essential reading for modelers and clinical pharmacologists interested in healthspan-directed drug development, combination therapy prioritization, and the use of surrogate biomarker calibration. The headline finding—that metabolic optimization and aging modulation are mechanistically distinct objectives—has direct implications for trial endpoint selection."
pdf_path: "/assets/digests/2026-08-14-an-aging-centered-quantitative-systems-pharmacology-model-of-metabolic/PMx_A_Systems_Pharmacology_Model_of_Aging_Id_20260814.pdf"
retroactively_classified: false
---

**Content Source:** PMC Full Text

### Quick Take
This paper presents a mechanistic QSP model that treats aging as a pharmacologically modifiable systems process, coupling semaglutide pharmacodynamics with a damage–repair–frailty–biological-age-gap architecture. It is essential reading for modelers and clinical pharmacologists interested in healthspan-directed drug development, combination therapy prioritization, and the use of surrogate biomarker calibration. The headline finding—that metabolic optimization and aging modulation are mechanistically distinct objectives—has direct implications for trial endpoint selection.

---

### Executive Summary
The authors construct an SBML-compliant, four-layer QSP model (metabolic/pharmacodynamic, drug-effect, adverse-event, and aging/biomarker) calibrated against digitized STEP 1/2 semaglutide trajectories and literature-derived population anchors. A Bayesian hierarchical meta-analysis of 37 trial arms, global sensitivity analysis (LHS, N=3000), and practical identifiability assessment (FIM and profile likelihood) support the model. Combination simulations reveal two mechanistically distinct optima: GLP-1 RA + SGLT2i + metformin maximizes metabolic benefit, whereas GLP-1 RA + SGLT2i + rapamycin maximizes repair capacity and reduces damage, frailty, and biological age gap. The authors are appropriately cautious, framing the aging-oriented arm as a mechanistic hypothesis requiring external validation, safety evaluation, and population-variability modeling rather than a clinical recommendation.

---

### Scientific Context & Motivation
Aging is the dominant shared risk factor for cardiometabolic, renal, and functional diseases, yet pharmacological development remains organized around conventional disease boundaries. The paper addresses the gap that existing incretin and metabolic QSP models stop short of representing aging as a formal state variable or therapeutic endpoint. By embedding aging as a dynamic damage–repair–frailty system, the model challenges the implicit assumption that optimal metabolic control and optimal healthspan modulation converge on the same drug combination. It also addresses the knowledge gap of how GLP-1 RAs, SGLT2 inhibitors, metformin, and rapamycin might interact within a unified causal framework.

---

## ⚡ Methodological Snapshot
The model is a deterministic ODE-based QSP system with four coupled layers: (1) semaglutide pharmacodynamics (weight, HbA1c via logistic approach-to-maximum ODEs; nausea via an adaptation-state model), (2) drug-effect layer using a Hill exposure function with scenario-defined damage-suppression (drug_D) and repair-induction (drug_R) scalars, (3) adverse-event layer, and (4) aging/biomarker layer with four coupled state variables (DAM, REP, FRA, BAG) and five first-order biomarker outputs. Calibration used a three-stage workflow against digitized STEP 1/2 data and literature anchors, followed by Bayesian hierarchical meta-analysis (PyMC/NUTS), Latin Hypercube global sensitivity analysis (N=3000, ±30%), and practical identifiability via FIM and profile likelihood.

---

## 🏗️ Structural Model Breakdown
The model comprises four coupled mechanistic layers. Layer 1 (metabolic/pharmacodynamic) uses logistic approach-to-maximum ODEs for semaglutide-driven body weight (W, % from baseline) and HbA1c reduction (A, % absolute), driven by the Hill exposure function E = D/(EC50 + D) with separate rate constants (k_W, k_A) and maximum effects (Emax_W, Emax_A). Nausea (N, %) is modeled with an adaptation state T: dN/dt = k_N·E·(1−T) − 0.15·N and dT/dt = k_T·N·(1−T). Layer 2 (drug-effect) maps exposure to aging-layer inputs via scenario-defined scalars: drug_D (damage suppression) and drug_R (repair induction). Layer 3 (aging) contains four coupled state variables: damage accumulation (DAM), repair capacity (REP), frailty (FRA), and biological age gap (BAG), governed by the damage–repair ODEs. Layer 4 (biomarker) produces five first-order production–degradation outputs (GDF15, cystatin C, leptin, adiponectin, eGDR) with damage-sensitive amplification terms. For the metabolic combination (GLP-1 RA + SGLT2i + metformin), drug_D = 0.40 and drug_R = 0.10; for the aging-oriented combination (GLP-1 RA + SGLT2i + rapamycin), drug_D = 0.50 and drug_R = 0.60.

---

### Detailed Methodological Analysis

#### Modeling Approach
Deterministic ODE-based QSP model encoded in SBML Level 3 Version 2 (model ID: IQANOVA_GLP1_Aging_QSP) with MIRIAM metadata and SBO-oriented reaction terms. Four interacting layers: metabolic/pharmacodynamic (semaglutide weight and HbA1c via logistic approach-to-maximum ODEs), drug-effect (Hill exposure function with scenario-defined drug_D and drug_R scalars), adverse-event (nausea with tolerance/adaptation state), and aging/biomarker (DAM, REP, FRA, BAG coupled states with five first-order biomarker outputs). Combination effects approximated as additive in the base case, with qualitative scenario comparisons for additive, subadditive, and Bliss-style interaction assumptions.

#### Data Sources
Synthetic calibration data digitized from STEP 1 and STEP 2 trial figures and adverse-event tables at seven time points (0, 4, 12, 24, 36, 52, 68 weeks). Standard errors propagated from 95% CIs for weight/HbA1c and binomial SE for nausea. Monotone cubic spline interpolation. Literature-derived population anchors for aging states (Clegg/Fried frailty frameworks, Mannick/PEARL rapamycin data, metformin metabolic literature, biomarker targets from GDF15/kidney/eGDR studies). Bayesian meta-analysis pooled 37 trial-arm observations from STEP 1–5, SUSTAIN 6, SELECT, PIONEER 6, SURPASS-2, EMPA-REG OUTCOME, DECLARE-TIMI 58, DAPA-HF, CREDENCE, CANVAS, UKPDS, DPP, and Mannick/PEARL studies.

#### Estimation Methods
Three-stage calibration workflow: Stage 1 calibrated semaglutide PD and adverse-event layers against STEP 1/2; Stage 2 anchored aging and biomarker layers using literature targets; Stage 3 integrated recalibration with highest weights on clinical semaglutide endpoints. Bayesian random-effects hierarchical meta-analysis used weakly informative priors and the No-U-Turn Sampler (NUTS) in PyMC with 4 chains × 1500 draws, convergence assessed via R̂ and effective sample size. Practical identifiability via Fisher Information Matrix (Cramér–Rao lower bound) and profile likelihood.

#### Model Evaluation
Pre-specified RMSE benchmarks: body weight < 1.0% change from baseline, HbA1c < 0.15% absolute, nausea < 5% absolute. Model reproduced weight (RMSE 0.637%/0.543%), HbA1c (0.039%/0.036%), and nausea (1.741%/1.360%) within benchmarks. Global sensitivity analysis via Latin Hypercube Sampling (N=3000, ±30% variation over 11 primary parameters) with supplementary extended GSA for biomarker parameters and ±50% robustness analysis for weakly identified nausea parameters. Deterministic bounding analyses for lean mass (f_LM = 0–0.40) and epigenetic translation (s_epi = 0.5–1.5, ±3.6 years).

#### Covariate Analysis
No formal covariate analysis was performed. The model does not include a virtual-patient population or covariates such as sex, baseline age, frailty, muscle mass, renal function, or metabolic reserve. The authors explicitly identify the need for virtual-patient variability modeling as a future direction. Scenario-defined drug scalars (drug_D, drug_R) serve as the primary 'input' variation rather than patient covariates.

---

### Statistical Rigor Assessment
The statistical framework is generally rigorous and well-documented. The Bayesian hierarchical meta-analysis used weakly informative priors for hierarchical variance parameters, NUTS sampling with 4 chains × 1500 draws, and convergence diagnostics (R̂ ≤ 1.001, minimum ESS > 1900), which are excellent. Between-study heterogeneity was quantified via I² and τ. The practical identifiability analysis using FIM (Cramér–Rao lower bound) and profile likelihood is appropriate, though the very low RSE values for aging-layer parameters (< 3%) should be interpreted cautiously as local identifiability under surrogate-integrated calibration rather than estimability from future data. The GSA with LHS (N=3000, ±30%) is standard for exploratory QSP. The main statistical weaknesses are: (1) small numbers of trial arms per drug class (2–6) limiting heterogeneity estimation, (2) the absence of a hold-out validation dataset, and (3) the scenario-defined drug scalars that are not statistically estimated. The deterministic bounding analyses for omitted domains (lean mass, epigenetic age) are a commendable approach to quantifying unmodeled uncertainty without overclaiming validation.

---

## 📊 Key Findings
The calibrated model reproduced semaglutide dose-dependent weight loss (RMSE 0.637% and 0.543% for 1.0 mg and 2.4 mg arms), HbA1c reduction (RMSE 0.039% and 0.036%), and nausea prevalence (RMSE 1.741% and 1.360%), all within pre-specified benchmarks. The Bayesian meta-analysis confirmed semaglutide as the strongest weight-loss agent (−10.3%, 95% CrI −12.8 to −7.7) and showed rapamycin had near-zero glycaemic effect (+0.006%, 95% CrI −0.50 to +0.52), supporting separation of glycaemic and repair mechanisms. GSA identified k_Rap as the dominant driver of repair capacity and biological age gap while contributing negligibly to weight or HbA1c. Combination simulations showed GLP-1 RA + SGLT2i + metformin produced the strongest metabolic profile, while GLP-1 RA + SGLT2i + rapamycin produced larger reductions in damage, frailty (−13% vs −8%), and biological age gap (−20% vs −11%) with greater repair induction. All aging-layer parameters were locally well identified (RSE < 3%), whereas nausea parameters (k_N, k_T) and EC50 were weakly identified.

---

## 💡 Clinical & Regulatory Implications
The model supports a shift from disease-centered pharmacology toward aging-aware therapeutic design. For trial design, the key implication is that endpoint selection determines which combination appears optimal: if weight loss and HbA1c are the only decision criteria, the metabolic optimum (GLP-1 RA + SGLT2i + metformin) will be favored; if healthspan-related biology is the objective, biomarkers of damage, repair, frailty, and metabolic reserve (GDF15, cystatin C, adiponectin, eGDR) must also be measured. The rapamycin-containing combination is explicitly a theoretical mechanistic construct, not a clinical recommendation, given risks of immunosuppression, dyslipidaemia, impaired wound healing, and CYP3A4/P-gp interactions with GLP-1RA-delayed gastric emptying. The authors correctly note that aging is not an FDA/EMA-approved indication and frame the model for mechanism-based prioritization of trials targeting accepted age-related outcomes (frailty, multimorbidity, physical function) with exploratory aging biomarkers. The model is not regulatory-ready and requires external validation, virtual-patient variability modeling, and safety evaluation before translation.

---

### Strengths & Limitations

#### Strengths
- Novel aging-centered QSP architecture that formalizes damage, repair, frailty, and biological age gap as coupled dynamic state variables rather than static surrogates
- Rigorous multi-stage calibration workflow with pre-specified RMSE benchmarks tied to clinical meaningfulness
- Bayesian hierarchical meta-analysis with weakly informative priors, NUTS sampling, and convergence diagnostics (R̂ ≤ 1.001)
- Comprehensive uncertainty quantification combining global sensitivity analysis, practical identifiability (FIM + profile likelihood), and deterministic bounding analyses for omitted domains
- SBML Level 3 Version 2 encoding with MIRIAM metadata and libSBML structural validation (zero errors/warnings), supporting reproducibility and tool interoperability
- Intellectual honesty in distinguishing calibrated hypotheses from validated predictions and in flagging safety concerns for rapamycin

#### Limitations (Acknowledged by Authors)
- No reserved hold-out dataset; STEP endpoints and literature anchors were used for calibration and internal consistency checks, not independent validation
- Aging layer relies on surrogate population anchors rather than individual-level longitudinal trajectories
- Drug effect scalars (drug_D, drug_R) are scenario inputs, not claimed clinical effect sizes; combination effects approximated as additive
- Time-averaged drug_D and drug_R over 52 weeks do not capture intra-dosing-interval PK peaks/troughs, most relevant for intermittent rapamycin regimens
- Frailty equation lacks lean-mass/muscle-function penalty, so simulated frailty improvements are upper-bound benefits
- BAG is dimensionless and not calibrated to a DNA-methylation clock; epigenetic-age mapping remains unvalidated
- Sodium-fluid homeostasis, renal haemodynamic modulation, and heart-failure-specific SGLT2 mechanisms are outside scope

#### Limitations (Expert Review)
- The very low RSE values for aging-layer parameters (< 3%) are an artifact of surrogate-integrated calibration and could mislead readers into overconfidence; the authors note this but the framing risks being under-emphasized
- The Hill exposure function E = D/(EC50 + D) with EC50 weakly identified (RSE 82%) undermines the quantitative reliability of the drug-effect layer, though it was fixed from literature in scenario simulations
- The two-optima result depends on scenario-defined drug_D and drug_R scalars that are not estimated from data; the qualitative conclusion is therefore sensitive to these arbitrary inputs
- Nausea model with collinear k_N and k_T (RSE > 170%) was fixed at literature values, but the tolerance-state formulation may not generalize across GLP-1 RAs with different titration schedules
- The meta-analysis pools heterogeneous trial designs (e.g., STEP vs SUSTAIN vs SELECT) with only 2–6 arms per drug class, limiting between-study heterogeneity estimation
- No virtual-patient population or covariate analysis (sex, age, baseline frailty, renal function) is included, limiting translation to trial design
- The additive combination assumption is tested only via qualitative scenario comparisons (additive vs subadditive vs Bliss), not formal model selection

#### Generalizability
The model is explicitly positioned as a hypothesis-generation tool for adults with obesity and/or type 2 diabetes, not for CKD or heart-failure populations. The aging-layer architecture is generalizable in principle, but the surrogate anchors and scenario scalars would require re-calibration for other populations, age ranges, or drug classes. The authors correctly state the model is not regulatory-ready and requires external validation against independent longitudinal datasets before use in Phase II/III decision-making.

---

### Key Equations

**Hill-type exposure function**

{% raw %}
$$
E = \frac{D}{EC_{50} + D}
$$
{% endraw %}

Effective drug exposure E as a saturating function of administered dose D, with EC50 the half-maximal effective dose; used to drive weight, HbA1c, nausea, and aging-layer effects.

**Damage accumulation dynamics**

{% raw %}
$$
\frac{dDAM}{dt} = k_{dam} \cdot (1 - \text{drug}_D) - k_{rep} \cdot REP \cdot DAM
$$
{% endraw %}

Damage accumulation (DAM) increases at rate k_dam suppressed by the scenario-defined damage-suppression scalar drug_D, and is repaired at rate proportional to repair capacity REP.

**Repair capacity dynamics**

{% raw %}
$$
\frac{dREP}{dt} = k_{Rap} \cdot \text{drug}_R - k_{Rdeg} \cdot REP
$$
{% endraw %}

Repair capacity (REP) is induced by the repair-induction scalar drug_R at rate k_Rap (rapamycin-driven) and degrades at rate k_Rdeg.

**Frailty dynamics**

{% raw %}
$$
\frac{dFRA}{dt} = k_F \cdot DAM - k_{Frep} \cdot REP
$$
{% endraw %}

Frailty (FRA) is driven by damage accumulation and suppressed by repair capacity, consistent with the frailty-as-deficit and resource-vulnerability framework.

**Biological age gap dynamics**

{% raw %}
$$
\frac{dBAG}{dt} = k_B \cdot DAM - 0.5 \cdot REP
$$
{% endraw %}

Biological age gap (BAG) is the net balance between damage-driven aging and repair-driven rejuvenation, with a fixed 0.5 weighting on repair contribution.

**Biomarker production-degradation**

{% raw %}
$$
\frac{dB_i}{dt} = k_{prod_i} \cdot \text{pot\_drug} \cdot \sigma_i \cdot (1 + \gamma_i \cdot DAM) - k_{deg_i} \cdot B_i
$$
{% endraw %}

Each biomarker output B_i (GDF15, cystatin C, leptin, adiponectin, eGDR) follows first-order production-degradation with damage-sensitive amplification (γ_i) and drug-potency scaling.

**Nausea prevalence with adaptation**

{% raw %}
$$
\frac{dN}{dt} = k_N \cdot E \cdot (1 - T) - 0.15 \cdot N
$$
{% endraw %}

Nausea prevalence N is induced by exposure E modulated by tolerance state T, with fixed first-order resolution rate 0.15 wk⁻¹, reproducing the peak-and-decline pattern of STEP trials.

**Nausea tolerance state**

{% raw %}
$$
\frac{dT}{dt} = k_T \cdot N \cdot (1 - T)
$$
{% endraw %}

Tolerance/adaptation state T accumulates in proportion to nausea prevalence, capturing the observed resolution of gastrointestinal adverse events despite continued drug exposure.

---

### Figures & Tables

- **Figure 1**: Schematic of the semaglutide metabolic, glycaemic, and nausea architecture within the four-layer QSP model.
  - *Significance*: Establishes the model structure and how the exposure function E propagates through weight, HbA1c, and adverse-event layers.
- **Figure 2**: Calibrated model fits versus digitized STEP 1/2 trajectories for body weight, HbA1c, and nausea prevalence at 1.0 mg and 2.4 mg semaglutide doses.
  - *Significance*: Demonstrates quantitative reproduction of primary clinical endpoints within pre-specified RMSE benchmarks (weight < 1.0%, HbA1c < 0.15%, nausea < 5%).
- **Figure 3**: Posterior drug-class effect estimates from the Bayesian hierarchical meta-analysis for weight, HbA1c, and nausea.
  - *Significance*: Provides the quantitative evidence base for separating glycaemic (semaglutide, SGLT2i, metformin) from repair-oriented (rapamycin) mechanisms.
- **Figure 4**: Global sensitivity analysis results showing parameter influence on body weight, HbA1c, nausea, repair capacity, and biological age gap.
  - *Significance*: Reveals the mechanistic separation between metabolic and aging parameter spaces, with k_Rap dominating REP and BAG but contributing negligibly to metabolic endpoints.
- **Figure 5**: Combination simulation results identifying two mechanistically distinct therapeutic optima: metabolic (GLP-1 RA + SGLT2i + metformin) and aging-oriented (GLP-1 RA + SGLT2i + rapamycin).
  - *Significance*: The central finding of the paper—that optimal metabolic control and optimal aging modulation do not converge on the same combination.
- **Figure 6**: Comparison of damage accumulation, repair capacity, frailty, and biological age gap trajectories between the two combination arms.
  - *Significance*: Quantifies the aging-layer advantage of the rapamycin-containing arm (−13% frailty, −20% BAG) versus the metabolic arm (−8% frailty, −11% BAG).
- **Figure S2**: Biomarker output layer predictions for GDF15, cystatin C, leptin, adiponectin, and eGDR under treatment.
  - *Significance*: Provides translational readouts for prospective evaluation, though not independently validated clinical predictions.
- **Table 1**: Bayesian hierarchical meta-analysis posterior drug-class effect estimates (weight, HbA1c, nausea) with 95% credible intervals and direction probabilities.
  - *Significance*: Quantifies the evidence base: semaglutide −10.3% weight, rapamycin +0.006% HbA1c (near-zero), supporting mechanistic separation.
- **Table 2**: Parameter identifiability summary with Cramér–Rao relative standard errors, classification (well/moderate/weak), and recommendations.
  - *Significance*: Documents which parameters are reliably estimated (aging layer, Emax_A) versus weakly identified (k_N, k_T, EC50) and the corresponding remediation strategy.
- **Table 3**: Quantitative sensitivity bounds for omitted sarcopenia (f_LM = 0–0.40) and epigenetic-age (s_epi = 0.5–1.5, ±3.6 years) domains.
  - *Significance*: Provides deterministic bounding analyses showing frailty improvements are upper bounds and epigenetic-age separation is unvalidated, exemplifying rigorous uncertainty communication.

---

### Code & Reproducibility Assessment
The model is encoded in SBML Level 3 Version 2 (model ID: IQANOVA_GLP1_Aging_QSP) with MIRIAM-compatible metadata and complete unit definitions, and the synthetic calibration dataset is provided as all_synthetic_data.csv. Structural validation used libSBML. However, the paper does not report a public repository URL for the SBML file, PyMC sampling code, or GSA/identifiability scripts, so full end-to-end reproducibility is not verifiable from the text alone.

---

### Future Directions
The authors identify the need for external validation against independent semaglutide, SGLT2i combination, rapamycin/rapalogue, body-composition, functional-frailty, and aging-biomarker datasets. A virtual-patient population is required to represent sex, baseline age, frailty, muscle mass, renal function, metabolic reserve, and epigenetic-clock variability. Future model versions should incorporate explicit rapamycin PK (including CYP3A4/P-gp interactions and intermittent dosing), sodium-fluid and renal haemodynamic SGLT2i mechanisms, lean-mass-to-frailty coupling, individual-level longitudinal biomarker data, and prospective validation. These extensions would move the model from mechanistic prioritization toward trial design and sample-size estimation for healthspan-directed pharmacology.

---

### Expert Commentary
This is a thoughtful and intellectually honest contribution that pushes QSP beyond conventional disease silos. The two-optima finding is biologically plausible and consistent with the hallmarks-of-aging framework, where nutrient sensing (mTOR), damage accumulation, and repair capacity are partially separable axes. From a senior modeling perspective, the most valuable aspects are the disciplined uncertainty quantification—pre-specified RMSE benchmarks, deterministic bounding analyses for omitted domains, and clear separation of calibrated hypotheses from validated predictions. The main caution is that the aging-layer parameters appear 'well identified' only because of the surrogate-integrated calibration structure; this is a local property, not evidence of estimability from future individual-level data. The scenario-defined drug_D and drug_R scalars are the model's soft underbelly, and the authors are transparent about this. I would have liked to see a formal sensitivity analysis over these scalars themselves, since the two-optima conclusion hinges on them. The regulatory framing (mechanism-based prioritization for accepted age-related outcomes rather than an 'aging indication') is pragmatic and correct. This paper is a strong teaching example for how to communicate model-based hypotheses with appropriate epistemic humility.

---

### Bottom Line
For practicing pharmacometricians, this paper demonstrates a credible template for aging-aware QSP modeling that separates metabolic and healthspan objectives mechanistically. The key takeaway is that endpoint choice determines which combination appears optimal: if weight and HbA1c dominate, GLP-1 RA + SGLT2i + metformin wins; if damage, repair, frailty, and biological age gap are the targets, the rapamycin-containing arm is mechanistically favored. The model should be used for hypothesis generation and biomarker-panel prioritization (GDF15, cystatin C, adiponectin, eGDR), not for dose selection or regulatory submission. The rigorous uncertainty quantification—especially the deterministic bounding analyses for lean mass and epigenetic translation—sets a good standard for communicating model limitations.

---