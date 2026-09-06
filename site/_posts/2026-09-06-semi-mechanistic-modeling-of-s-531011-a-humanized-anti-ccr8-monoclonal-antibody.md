---
layout: post
title: "Semi-Mechanistic Modeling of S-531011, a Humanized Anti-CCR8 Monoclonal Antibody, for Prediction of CCR8 Receptor Occupancy in Human Tumor Tissues"
date: 2026-09-06
authors: "Yamaguchi D, Nogami W, Sonoda Y, Morihara H, Katsube T"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(9) (Epub ahead of print)"
doi: "10.1002/psp4.70332"
paper_type: popk
tags: [popk, oncology, clinical-trial-design]
excerpt_text: "This paper describes a semi-mechanistic PK/RO model for S-531011, an anti-CCR8 monoclonal antibody, to predict tumor receptor occupancy in humans. It integrates clinical PK data, non-clinical binding kinetics, and physiological scaling, then refines the model using mouse tumor RO data. The final model suggests that doses of 80-800 mg Q3W maintain >90% tumor RO, providing a quantitative basis for dose selection."
pdf_path: "/assets/digests/2026-09-06-semi-mechanistic-modeling-of-s-531011-a-humanized-anti-ccr8-monoclonal-antibody/PMx_SemiMechanistic_Modeling_of_S531011_a_Hu_20260906.pdf"
retroactively_classified: false
---

> **WARNING:** Fact-check not completed for this paper. The claims below were **not** verified against the source. Treat quantitative details with caution.

**Content Source:** Full Text

### Quick Take
This paper describes a semi-mechanistic PK/RO model for S-531011, an anti-CCR8 monoclonal antibody, to predict tumor receptor occupancy in humans. It integrates clinical PK data, non-clinical binding kinetics, and physiological scaling, then refines the model using mouse tumor RO data. The final model suggests that doses of 80-800 mg Q3W maintain >90% tumor RO, providing a quantitative basis for dose selection.

---

### Executive Summary
The authors developed a three-compartment (central, peripheral, tumor) PK/RO model with a two-site sequential binding scheme for S-531011, a humanized anti-CCR8 antibody. Model parameters were derived from clinical serum PK data (24 mg dose), in vitro binding constants (Kd=18.62 pM, kon=11.85 L/nmol/h), and physiological estimates of CCR8 expression. Sensitivity analysis identified Kd as the most influential parameter, warranting refinement; using mouse tumor RO data, Kd was optimized to 558.6 pM (30-fold higher). The refined model predicted that 80-800 mg Q3W achieves >90% RO in tumor at trough, even under conservative assumptions for tumor penetration (Pdist/10). This modeling framework supports rational dose selection for ongoing phase 1b/2 trials and can be extended to link RO to efficacy.

---

### Scientific Context & Motivation
CCR8 is overexpressed on tumor-infiltrating regulatory T cells (Tregs), and its selective depletion can enhance anti-tumor immunity. S-531011 is a humanized anti-CCR8 antibody in early clinical trials, but direct measurement of tumor RO is infeasible. Semi-mechanistic PK/RO models provide a quantitative way to predict target engagement at the site of action, thereby guiding dose selection in oncology. This study addresses the gap of estimating tumor RO from available clinical PK and non-clinical data, and demonstrates a translational approach that could be applied to other mAbs targeting immune checkpoints.

---

## ⚡ Methodological Snapshot
A semi-mechanistic PK/RO model was built using a three-compartment structure (central, peripheral, tumor) with four species per compartment. Binding followed a sequential two-site model with identical kon/koff. Parameters were sourced from clinical PK (two-compartment fit), in vitro binding data, and physiological literature. Mouse model was used for sensitivity analysis and optimization of Kd against observed tumor RO. Final simulations assessed RO across dose levels and conservative tumor-penetration scenarios.

---

## 🏗️ Structural Model Breakdown
The model is a system of ordinary differential equations (ODEs) for 12 state variables (4 species across 3 compartments). For each compartment i (central, peripheral, tumor), the following equations describe the dynamics (using text notation):
- Free antibody (Ab_i): dAb_i/dt = input_i (infusion for central) - (k12 + k13 + kel)*Ab_cen if i=central, etc. + transfer terms - kon*Ab_i*R_free_i + koff*C1_i (for first binding) - kon*Ab_i*C1_i? Actually second binding is on complex1, so Ab is not directly consumed for second step. The consumption of Ab is only via first binding. So: dAb_i/dt = -kon*Ab_i*R_free_i + koff*C1_i + transfer terms - elimination.
- Free CCR8 (R_free_i): dR_free_i/dt = ksyn_i - kdeg*R_free_i - kon*R_free_i*Ab_i + koff*C1_i - kon*R_free_i*C1_i + koff*C2_i (second binding consumes free CCR8).
- Complex 1 (C1_i): dC1_i/dt = kon*R_free_i*Ab_i - koff*C1_i - kdeg*C1_i - kon*R_free_i*C1_i + koff*C2_i.
- Complex 2 (C2_i): dC2_i/dt = kon*R_free_i*C1_i - koff*C2_i - kdeg*C2_i.
RO in compartment i is defined as (C1_i + C2_i) / (R_free_i + C1_i + C2_i). Initial conditions: Ab=0, C1=0, C2=0, R_free_i = steady state amount = ksyn_i/kdeg. The model parameters (transfer constants, Vtum, etc.) are as listed in Table 1. The k13 and k31 are calculated using formulas from reference [16] involving Tdist, Pdist, fint, Vcen, Vtum.

---

### Detailed Methodological Analysis

#### Modeling Approach
Structural model: three compartments (central, peripheral, tumor) each containing S-531011, CCR8, complex 1 (1:1), and complex 2 (1:2). CCR8 synthesis (ksyn) and degradation (kdeg) included. Elimination only from central compartment. Binding follows second-order association (kon) and first-order dissociation (koff). Transfer between central and peripheral/tumor compartments via k12/k21 and k13/k31. Tumor volume (Vtum) fixed; k13/k31 calculated using Tdist, Pdist, fint. Software: MATLAB/SimBiology for building, simulation, sensitivity analysis; Phoenix WinNonlin for PK parameter estimation.

#### Data Sources
Non-clinical: in vitro Kd, kon, Thalf,CPX from cell lines; mouse PK and tumor RO data from CT26.WT tumor-bearing hCCR8-KI mice. Clinical: serum S-531011 concentrations from 3 patients in 24 mg dose group (Part A-1) of Phase 1b/2 study. Physiological: literature values for cell counts, CCR8 expression, interstitial fraction (fint=0.55).

#### Estimation Methods
Human and mouse PK parameters estimated via unweighted least-squares regression (two-compartment model) in Phoenix WinNonlin. PK/RO model parameters derived analytically from non-clinical data or fixed. Sensitivity analysis used variance-based Sobol indices (first-order and total-order). Kd optimization performed by visual fitting to mouse RO data.

#### Model Evaluation
Model evaluation included: (1) Predicted vs observed serum concentration plots (Figure S1,S2), (2) Sensitivity analysis to identify influential parameters, (3) Comparison of simulated RO to observed mouse RO in blood and tumor (Figures S5,S6), (4) Additional sensitivity analyses on assumptions (Figure S10,S11). No formal VPC or bootstrap was performed, but simulation-based prediction intervals were used.

#### Covariate Analysis
No typical covariate analysis was performed. Instead, between-subject variability was incorporated in simulations by applying CVs to key parameters (kel, Vcen, kon, Pdist, fint, Kd, Thalf,CPX, Vtum). No demographic covariates (e.g., weight, sex) were included due to limited clinical data.

---

### Statistical Rigor Assessment
The study uses a combination of fitting and simulation. PK parameter estimates for human were based on only 3 patients, which provides limited precision. Non-clinical data come from single studies with small sample sizes. Sensitivity analysis via Sobol indices is appropriate for identifying influential parameters, but the optimization of Kd is done by visual inspection, lacking formal optimization criteria. The simulation incorporates variability via arbitrary CVs, which are not estimated from data. The paper does not provide confidence intervals for model predictions. Overall, the statistical rigor is moderate, but adequate for the exploratory purpose of dose selection.

---

## 📊 Key Findings
The final PK/RO model predicted that with typical model assumptions, S-531011 doses of 80 mg and above (tested up to 1600 mg) Q3W maintain >90% RO in tumor tissue at trough after the third dose. Under a conservative assumption of 10-fold lower tumor perfusion (Pdist/10), 800 mg Q3W was needed to maintain >90% RO. Sensitivity analysis highlighted Kd as the most critical parameter, and optimization against mouse tumor RO data increased Kd from 18.62 to 558.6 pM, which markedly altered predictions. The model also indicated that other parameters (kon, kdeg for unbound CCR8) have moderate impact, but overall predictions are robust to most physiological assumptions except for CCR8 degradation rate.

---

## 💡 Clinical & Regulatory Implications
The model predicts that S-531011 at doses 80-800 mg Q3W achieves >90% tumor RO, supporting dose selection for ongoing clinical trials. The conservative scenario suggests higher doses (800 mg) may be needed if tumor penetration is poor. The model also highlights the importance of Kd and suggests that in vitro Kd may underestimate the dose needed, potentially leading to subtherapeutic dosing. Thus, the model informs clinical development by recommending dose levels that ensure target engagement, and it can be updated once clinical tumor RO data become available.

---

### Strengths & Limitations

#### Strengths
- Integration of clinical PK, in vitro binding, and physiological scaling in a semi-mechanistic framework.
- Use of mouse tumor RO data to calibrate uncertain parameters (Kd), enhancing translational credibility.
- Conservative scenario analyses (reduced Pdist) to address uncertainty in tumor penetration.
- Model code provided (SimBiology report) facilitating reproducibility and reuse.
- Clear clinical decision-oriented output (RO thresholds) for dose selection.

#### Limitations (Acknowledged by Authors)
- No observed tumor RO in humans; model relies on non-clinical extrapolation.
- Kd from in vitro may not reflect in vivo conditions; optimized value based on mouse data may still be uncertain.
- Tumor volume (Vtum) assumed constant, ignoring disease progression or treatment effects.
- kdeg for unbound CCR8 assumed equal to that of complexes; sensitivity analysis showed potential impact.
- Model predicts receptor-binding driven RO, not the actual occupancy after Treg depletion.

#### Limitations (Expert Review)
- Human PK parameters estimated from only 3 patients (24 mg dose), which may limit representativeness.
- The two-site binding model assumes equal kon/koff for both binding steps, which is a simplification.
- Pdist derived from a single mouse study (0.61) may not be transferable across tumor types or species.
- The CC8 expression levels and cell counts were taken from literature with potential variability across tumor types.
- The model does not incorporate target-mediated drug disposition (TMDD) effects, which may be relevant at low doses.
- Simulation variability was arbitrary (30-50% CV) without formal estimation of between-subject variability.

#### Generalizability
The modeling approach is generalizable to other monoclonal antibodies targeting cell-surface receptors, especially when tumor RO is not directly measurable. However, the specific parameter values and conclusions are tailored to S-531011 and may not directly extend to different targets or disease contexts. The framework can be adapted but requires careful recalibration with appropriate non-clinical and clinical data.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the PK/RO model showing three compartments (central, peripheral, tumor) and four species (S-531011, CCR8, complex 1, complex 2) with transfer and binding/degradation rate constants.
  - *Significance*: Provides the structural foundation for the model, illustrating the two-site binding interaction and tissue compartments.
- **Figure 2**: Simulated RO time courses in the tumor compartment for human doses 8-1600 mg Q3W using the final PK/RO model. Median values and 95% prediction intervals are shown.
  - *Significance*: Demonstrates that 80 mg and higher doses maintain >90% RO at trough, informing dose selection.
- **Figure 3**: Simulated RO values in the tumor at pre-dose of Cycle 2 (trough) for each dose, with typical and conservative (Pdist/10) assumptions.
  - *Significance*: Summarizes the dose-RO relationship and highlights the margin of safety for achieving >90% RO.
- **Table 1**: Key model parameters for human and mouse PK/RO models, including k12, k21, kel, volumes, kon, koff (initial and optimized), CCR8 amounts, and synthesis/degradation constants.
  - *Significance*: Provides the numerical values used in simulations, essential for reproducibility and comparison.

---

### Code & Reproducibility Assessment
The final model code is provided as a SimBiology report in the supplementary material (Data S1). The manuscript does not mention public availability of analysis scripts or raw data. Parameters and model structure are described in tables and equations, enabling independent reimplementation with SimBiology or other tools.

---

### Supplementary Materials
Supplementary materials include additional tables (S1-S5) with model equations and parameter calculations, and figures (S1-S11) showing model fitting, sensitivity analyses, and additional simulation scenarios. The final SimBiology model code is provided as Data S1.

---

### Future Directions
Future work should incorporate quantitative relationships between RO and Treg depletion, tumor size dynamics, and clinical efficacy. Once clinical RO data (e.g., from tumor biopsies) become available, the model should be re-validated. Extensions to include TMDD and mechanistic tumor penetration models would improve predictions. Additionally, linking the PK/RO model to tumor growth inhibition models could enable model-based dose optimization for Phase 2/3.

---

### Expert Commentary
This paper exemplifies the value of semi-mechanistic modeling in early drug development, particularly for oncology mAbs where target engagement in tissue is hard to measure. The use of mouse data to refine an in vitro-derived Kd is a clever and pragmatic step, though the 30-fold increase highlights how unreliable in vitro Kd can be. The conservative scenarios for tumor perfusion provide a range of predicted exposure, which is useful for dose planning. A key takeaway is the importance of identifying sensitive parameters and grounding them with in vivo data. The model could be further enriched by incorporating tumor heterogeneity and target expression variability. Overall, this is a well-executed translational modeling study that will likely inform clinical development decisions.

---

### Bottom Line
This study provides a pragmatic, semi-mechanistic PK/RO model for predicting tumor receptor occupancy of anti-CCR8 antibodies. The model suggests that S-531011 doses of 80-800 mg Q3W are likely to maintain >90% RO in tumors, supporting ongoing clinical dose selection. Pharmacometricians can apply similar translational workflows to other immune-oncology mAbs, but should be mindful of parameter uncertainty and validate with animal data where available.

---

---

## 📊 Figures

![Scheme of the PK/RO model for S-531011. CCR8 = C-C motif chemokine receptor 8; kdeg= degradation rate constant of CCR8, complex 1, and complex 2; kel= first-orde]({{ site.baseurl }}/assets/digests/2026-09-06-semi-mechanistic-modeling-of-s-531011-a-humanized-anti-ccr8-monoclonal-antibody/figures/fig_01.jpg)

![Simulated RO time courses for humans in the tumor compartment after S-531011 administration using the final PK/RO model. Blue lines show median RO values and gra]({{ site.baseurl }}/assets/digests/2026-09-06-semi-mechanistic-modeling-of-s-531011-a-humanized-anti-ccr8-monoclonal-antibody/figures/fig_02.jpg)

![Simulated RO values in the tumor at predose for Cycle 2 (Q3W) using the final PK/RO model. Blue lines show median RO values and light blue areas show simulated 2]({{ site.baseurl }}/assets/digests/2026-09-06-semi-mechanistic-modeling-of-s-531011-a-humanized-anti-ccr8-monoclonal-antibody/figures/fig_03.jpg)