---
layout: post
title: "B Cell Differentiation Model for Identifying Predictors of Responses to Rituximab-Mediated B Cell Depletion in Rheumatic Diseases"
date: 2026-06-25
authors: "Nakada T, Mager DE"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(1): e70151"
doi: "10.1002/psp4.70151"
paper_type: popk
tags: [popk, qsp]
excerpt_text: "This paper presents a quantitative systems pharmacology (QSP) model of B cell differentiation that captures the dynamics of B cell subsets in bone marrow and secondary lymphoid organs following rituximab and glucocorticoid treatment in rheumatoid arthritis. The model identifies CD20–rituximab binding affinity, Fcγ-mediated degradation/internalization, and baseline plasmablast/plasma cell counts as key determinants of antibody-secreting cell depletion, offering mechanistic insights into responder/non-responder variability. Clinicians and modelers interested in optimizing anti-CD20 therapy in autoimmune diseases will find the framework valuable for hypothesis generation and dose optimization."
pdf_path: "/assets/digests/2026-06-25-b-cell-differentiation-model-for-identifying-predictors-of-responses-to/PMx_B_Cell_Differentiation_Model_for_Identif_20260625.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a quantitative systems pharmacology (QSP) model of B cell differentiation that captures the dynamics of B cell subsets in bone marrow and secondary lymphoid organs following rituximab and glucocorticoid treatment in rheumatoid arthritis. The model identifies CD20–rituximab binding affinity, Fcγ-mediated degradation/internalization, and baseline plasmablast/plasma cell counts as key determinants of antibody-secreting cell depletion, offering mechanistic insights into responder/non-responder variability. Clinicians and modelers interested in optimizing anti-CD20 therapy in autoimmune diseases will find the framework valuable for hypothesis generation and dose optimization.

---

### Executive Summary
Nakada and Mager developed a mechanistic B cell differentiation (BCD) model that recapitulates the tissue-specific localization and differentiation of B cell subsets from hematopoietic stem cells to antibody-secreting cells (ASCs) in bone marrow and secondary lymphoid organs. The model integrates pharmacokinetic models for rituximab and glucocorticoids (methylprednisolone, prednisolone, prednisone) with pharmacodynamic effects on CD19+, CD20+, and plasmablast populations using clinical data extracted from published rheumatoid arthritis studies. Global sensitivity analysis identified the CD20–rituximab elimination rate constant (reflecting Fcγ-mediated degradation and internalization) and baseline B cell subset counts as major drivers of both CD19+ and ASC responses. Model validation against external combination therapy data confirmed the model's ability to capture the variability and trends in B cell dynamics without empirical drug–drug interaction parameters. This work provides a mechanistic framework for understanding variability in rituximab responses and may guide future dosing strategies and combination therapy evaluations in autoimmune diseases.

---

### Scientific Context & Motivation
Rituximab, an anti-CD20 monoclonal antibody, is widely used in autoimmune diseases such as rheumatoid arthritis (RA) and systemic lupus erythematosus, yet therapeutic response variability and early relapse remain significant challenges. Previous studies have implicated pre-treatment B cell subset levels, CD20 internalization, and Fcγ receptor polymorphisms as potential determinants of response, but a comprehensive quantitative evaluation integrating these factors has been lacking. Existing pharmacokinetic/pharmacodynamic models for B cells have not incorporated the full differentiation cascade from bone marrow precursors to antibody-secreting cells, nor have they accounted for tissue localization in bone marrow and secondary lymphoid organs. This study addresses these gaps by developing a systems model that mechanistically represents B cell differentiation, tissue partitioning, and the effects of both rituximab and glucocorticoids, enabling simultaneous evaluation of multiple hypothesized drivers of therapeutic variability.

---

## ⚡ Methodological Snapshot
The authors developed a mechanistic B cell differentiation model using ordinary differential equations implemented in MATLAB SimBiology. The model includes 12 B cell subset compartments distributed across bone marrow, peripheral blood, and secondary lymphoid organs, with drug effects from rituximab (anti-CD20) and glucocorticoids. Pharmacokinetic models for rituximab (minimal PBPK) and glucocorticoids (standard compartmental) were first fitted to clinical data. A sub-model for CD20–rituximab binding and internalization was calibrated using in vivo mouse data. Drug effects on B cells were then incorporated stepwise: glucocorticoid effects (apoptosis and differentiation stimulation) and rituximab effects (CD20-mediated depletion via internalization and Fcγ-mediated degradation). Global sensitivity analysis using the Sobol method evaluated parameter importance across time. Model validation was performed using external combination therapy data with inter-individual variability in key parameters.

---

## 🏗️ Structural Model Breakdown
The B cell differentiation model consists of 12 ODE compartments representing sequential B cell developmental stages: hematopoietic stem cells (HSC) → pro-B cells → pre-B cells → immature B cells → transitional B cells (TBs) → naïve B cells (NBs) → memory B cells (MBs) → plasmablasts (PBs) → plasma cells (PCs). Cells are distributed across three physiological spaces: bone marrow (BM), peripheral blood (PB), and secondary lymphoid organs (SLOs). Early B cells (HSC through immature B cells) reside exclusively in BM. TBs and NBs appear in PB after differentiation. MBs, PBs, and PCs localize in SLOs and BM. Partition coefficients govern distribution between compartments. The model includes a normalized IL-6 signal that promotes B cell differentiation and PC survival. Drug effects: glucocorticoids induce apoptosis of CD19+ cells (all B cell subsets except PCs) and stimulate differentiation of NBs to MBs. Rituximab depletes CD20+ cells (TBs, NBs, MBs, and PBs) via CD20–RTX complex formation, internalization, and Fcγ-mediated degradation. PCs are CD20-negative and not directly affected by rituximab.

---

### Detailed Methodological Analysis

#### Modeling Approach
Ordinary differential equation (ODE) model implemented in MATLAB SimBiology. The B cell differentiation model comprises 12 compartments representing hematopoietic stem cells, pro-B cells, pre-B cells, immature B cells, transitional B cells, naïve B cells, memory B cells, plasmablasts, and plasma cells, distributed across bone marrow, peripheral blood, and secondary lymphoid organs. Rituximab PK was modeled using a minimal PBPK approach with compartments for bone marrow and secondary lymphoid organs. Glucocorticoid PK used standard compartmental models (i.v. and oral). Drug effects were modeled as: glucocorticoids induce apoptosis of CD19+ cells and stimulate B cell differentiation; rituximab depletes CD20+ cells via CD20–RTX complex internalization and Fcγ-mediated degradation. IL-6 effects on B cell differentiation and plasma cell survival were included as a normalized signal.

#### Data Sources
Clinical data were extracted from published studies (Table 1): PK data for methylprednisolone (100 mg i.v.), prednisolone (16.4, 49.2 mg/day i.v.), prednisone (20, 50 mg/day p.o.), and rituximab (500, 1000 mg i.v. at days 1 and 15). PD data included CD19+ cell counts following glucocorticoids, CD20+ cells following rituximab monotherapy, and plasmablasts following rituximab with methylprednisolone. External validation data came from combination therapy studies (rituximab 1000 mg with prednisolone ≤12.5 mg/day or methylprednisolone 100 mg). CD20 internalization sub-model was calibrated using in vivo data from human CD20 transgenic FcγR−/− mice.

#### Estimation Methods
Parameters were estimated by fitting model simulations to extracted clinical data using MATLAB SimBiology's built-in optimization routines. Precision was evaluated using relative standard errors (RSEs, %CV) calculated from the model variance–covariance matrix. ODE solvers included SUNDIALs suite and ode15s.

#### Model Evaluation
Goodness-of-fit was assessed by visual inspection of predicted vs. observed concentrations and B cell counts, with criteria that most values should be within 2-fold of observations. Global sensitivity analysis (Sobol method) was performed for changes in CD19+ cells and ASCs at 8, 24, and 48 weeks post-rituximab, varying parameters within plausible ranges (Table S4). Model validation used external datasets not used in development, with simulations incorporating inter-individual variability in key parameters identified by GSA.

#### Covariate Analysis
No formal covariate analysis was performed. Instead, global sensitivity analysis identified baseline B cell subset counts (naïve B cells, memory B cells, plasmablasts, plasma cells) and drug-related parameters ($k_{elm,CD20-RTX}$, $K_{ss,CD20-RTX}$) as key determinants of response. Inter-individual variability for validation simulations was assumed based on plausible ranges of these parameters rather than estimated from data.

---

### Statistical Rigor Assessment
The study uses a deterministic modeling approach with parameter estimation from extracted summary-level data rather than individual patient data. Parameter precision was assessed via RSEs from the variance-covariance matrix, which is appropriate for nonlinear regression but may underestimate uncertainty in the presence of model misspecification. Global sensitivity analysis using the Sobol method is a strength, providing variance-based measures of parameter importance that account for interactions. However, the analysis assumes uniform distributions over plausible ranges, which may not reflect true parameter uncertainty. Model validation was qualitative (visual comparison of simulations to external data) rather than quantitative (e.g., prediction-corrected VPCs or numerical prediction errors). No formal model selection criteria (e.g., AIC, BIC) were reported for comparing alternative structural models. The lack of individual patient data precludes assessment of inter-individual variability and covariate effects through traditional population PK/PD methods.

---

## 📊 Key Findings
The BCD model successfully captured the temporal dynamics of CD19+ cells, CD20+ cells, and plasmablasts following rituximab monotherapy and combination with glucocorticoids, with most fitted values within 2-fold of observed data. Global sensitivity analysis revealed that the CD20–rituximab elimination rate constant ($k_{elm,CD20-RTX}$) and the steady-state binding constant ($K_{ss,CD20-RTX}$) were the dominant drug-related parameters driving both CD19+ and ASC responses throughout the 48-week treatment period. Baseline peripheral naïve B cells and memory B cells were key for CD19+ cell responses, while baseline plasmablasts and plasma cells were most influential for ASC responses, particularly at early (8-week) and late (48-week) time points. The differentiation rate parameter ($k_{df}$) and baseline IL-6 showed increasing sensitivity at later time points for ASCs, suggesting their role in sustaining long-term antibody production. Model validation against external combination therapy data demonstrated that simulations incorporating inter-individual variability in key parameters accurately reproduced the range of observed CD19+ cell profiles, confirming the model's predictive capability.

---

## 💡 Clinical & Regulatory Implications
The model suggests that patients with higher baseline plasmablast and plasma cell counts may experience less complete ASC depletion and potentially poorer clinical responses to rituximab, supporting the use of baseline B cell subset profiling for patient stratification. The identification of the CD20–RTX elimination rate constant as a key driver highlights the potential impact of FCGR3A polymorphisms on therapeutic outcomes, suggesting that genotyping for Fcγ receptor variants could guide dose selection or alternative therapy choices. The model predicts that ASC depletion is less extensive and shorter-lasting than CD19+ cell depletion, which may explain early relapse in some patients and supports the investigation of maintenance dosing strategies or combination with agents targeting plasma cell survival (e.g., proteasome inhibitors, anti-CD38 antibodies). The framework can be used to simulate alternative dosing regimens (e.g., higher doses, more frequent administration) to achieve sustained ASC suppression in identified non-responder phenotypes.

---

### Strengths & Limitations

#### Strengths
- Mechanistic representation of B cell differentiation from hematopoietic stem cells to antibody-secreting cells with tissue-specific localization in bone marrow and secondary lymphoid organs
- Integration of pharmacokinetic models for both rituximab and multiple glucocorticoids (methylprednisolone, prednisolone, prednisone) within a unified framework
- Use of global sensitivity analysis (Sobol method) to comprehensively evaluate parameter contributions across multiple time points
- Model validation using external datasets not used in model development, demonstrating generalizability
- Good parameter precision (low RSEs) supporting practical identifiability of the model

#### Limitations (Acknowledged by Authors)
- Residual errors between model predictions and observed data may be attributed to patient-specific factors such as baseline B cell subset counts that were unavailable in clinical studies
- The model does not include dynamics of NK cells or other immune effectors involved in antibody-dependent cell-mediated cytotoxicity
- Non-modeled biological inputs (IL-4, BAFF, Pax5) likely contribute to later-stage variability captured by the differentiation rate parameter $k_{df}$
- Model validation was conducted against B cell dynamics rather than direct clinical endpoints (e.g., DAS28, autoantibody titers)

#### Limitations (Expert Review)
- The model assumes linear pharmacokinetics for rituximab in RA patients, which may not hold at lower doses or in other disease populations with higher target burden
- Glucocorticoid effects on B cells were modeled using a simplified stimulatory mechanism on differentiation; the rebound phenomenon may involve additional redistribution and T cell-mediated effects not explicitly represented
- Tissue-level B cell dynamics in bone marrow and secondary lymphoid organs were inferred from peripheral blood data and literature-based partitioning; direct validation against tissue measurements is lacking
- The model does not account for potential feedback loops involving autoantibody production and B cell regulation
- Inter-individual variability was only incorporated for a subset of parameters identified by sensitivity analysis; full population analysis was not performed

#### Generalizability
The model was developed using data from rheumatoid arthritis patients and validated against external RA datasets. The mechanistic framework is potentially generalizable to other autoimmune diseases where rituximab is used (e.g., SLE, Sjögren's syndrome, NMOSD), but would require recalibration with disease-specific data. The model's reliance on peripheral blood biomarkers as surrogates for tissue-level effects may limit its applicability to diseases where tissue-resident B cells play a dominant role.

---

### Key Equations

**CD20–RTX complex internalization and degradation**

{% raw %}
$$\begin{aligned}
\frac{d[CD20\text{-}RTX]}{dt} \\
&= k_{on,RTX} \cdot [RTX] \cdot [CD20] - (k_{off,RTX} + k_{elm,CD20\text{-}RTX}) \cdot [CD20\text{-}RTX]
\end{aligned}$$
{% endraw %}

Describes the binding of rituximab to CD20 on B cells, internalization of the complex, and Fcγ-mediated degradation. $k_{elm,CD20-RTX}$ is the elimination rate constant of the CD20–RTX complex.

**Steady-state binding constant for CD20–RTX**

{% raw %}
$$
K_{ss,CD20\text{-}RTX} = \frac{k_{off,RTX} + k_{elm,CD20\text{-}RTX}}{k_{on,RTX}}
$$
{% endraw %}

Defines the steady-state binding constant that characterizes the equilibrium between free rituximab, free CD20, and the CD20–RTX complex, incorporating both dissociation and internalization.

**Calculation of $k_{on,RTX}$ from $k_{elm,CD20-RTX}$**

{% raw %}
$$
k_{on,RTX} = \frac{k_{elm,CD20\text{-}RTX}}{K_{ss,CD20\text{-}RTX} \cdot (1 - I_{max,CD20})}
$$
{% endraw %}

Equation (11) used to derive the association rate constant from the estimated elimination rate constant and steady-state binding parameters, where $I_{max,CD20}$ represents the maximum fraction of CD20 internalization.

**Calculation of $k_{off,RTX}$ from $k_{elm,CD20-RTX}$**

{% raw %}
$$
k_{off,RTX} = k_{elm,CD20\text{-}RTX} \cdot \left(\frac{1}{1 - I_{max,CD20}} - 1\right)
$$
{% endraw %}

Equation (12) used to derive the dissociation rate constant from the estimated elimination rate constant and internalization parameters.

---

### Figures & Tables

- **Figure 1**: Workflow of model calibration and validation showing the stepwise process: PK model fitting, CD20 internalization sub-model, glucocorticoid effects, RTX effects, global sensitivity analysis, and external validation.
  - *Significance*: Provides an overview of the modeling strategy and how internal and external datasets were used at each stage.
- **Figure 2**: Schematic diagram of the B cell differentiation model showing compartments for hematopoietic stem cells, pro-B cells, pre-B cells, immature B cells, transitional B cells, naïve B cells, memory B cells, plasmablasts, and plasma cells, with tissue localization in bone marrow, peripheral blood, and secondary lymphoid organs.
  - *Significance*: Illustrates the comprehensive mechanistic structure of the model, including drug effects and IL-6 signaling.
- **Figure 3**: Goodness-of-fit plots for PK models (A), fitted serum concentration-time course of rituximab (B), and fitted time-courses of CD20+ cells and plasmablasts following rituximab administration (C, D).
  - *Significance*: Demonstrates the model's ability to capture both PK and PD data with good precision, with most values within 2-fold of observations.
- **Figure 4**: Global sensitivity analysis results showing first-order and total-order Sobol indices for CD19+ cells and ASCs at 8, 24, and 48 weeks post-rituximab.
  - *Significance*: Identifies $k_{elm,CD20-RTX}$, $K_{ss,CD20-RTX}$, baseline B cell subsets, and differentiation rate as key drivers of response, with time-dependent patterns.
- **Figure 5**: Model-based simulations of CD19+ cells and ASCs following combination rituximab and prednisolone treatment, compared with external validation data.
  - *Significance*: Validates the model's predictive capability for combination therapy and shows that ASC depletion is less extensive than CD19+ cell depletion.
- **Table 1**: Summary of clinical studies used for model development (internal) and validation (external), including drug, measurements, dose regimens, and references.
  - *Significance*: Provides the data foundation for the model, listing sources for PK and PD data for rituximab, methylprednisolone, prednisolone, and prednisone.

---

### Code & Reproducibility Assessment
The model was developed using MATLAB SimBiology (MathWorks, Natick, MA). Simulations utilized validated ODE solvers (SUNDIALs suite, ode15s). Graphical visualization was performed using the ggplot2 package (version 3.5.1) in R. No publicly available code repository or model files were mentioned.

---

### Supplementary Materials
Supplementary materials include Figure S1 (mPBPK model structure for rituximab), Figure S3 (fitted PK profiles for glucocorticoids), Figure S4 (CD20 internalization sub-model fit and glucocorticoid effect on CD19+ cells), Table S3 (estimated parameter values with RSEs), and Table S4 (plausible parameter ranges for sensitivity analysis and validation simulations). These materials provide essential details for reproducing the model and understanding parameter identifiability.

---

### Future Directions
Future work should incorporate additional B cell regulators such as IL-4, BAFF, and Pax5 to better capture later-stage variability in ASC responses. Incorporation of longitudinal clinical endpoints (e.g., DAS28, autoantibody titers) would enhance translational potential for guiding dosing strategies. The model could be extended to evaluate other anti-CD20 therapies (e.g., ofatumumab, obinutuzumab) or combination therapies targeting different B cell survival pathways. Direct validation against tissue-level B cell data from bone marrow or lymphoid organs would strengthen the model's mechanistic basis. Population PK/PD analysis with individual patient data would enable formal covariate testing and identification of predictive biomarkers.

---

### Expert Commentary
This paper represents a thoughtful application of QSP principles to a clinically relevant problem in rheumatology. The authors strike a good balance between mechanistic detail and practical identifiability, using a stepwise calibration approach that builds complexity incrementally. The global sensitivity analysis is particularly well-executed, providing time-dependent insights into parameter importance that would be missed by local methods. From a regulatory perspective, the model could support dose optimization in special populations or inform clinical trial design by identifying patient subgroups most likely to benefit from intensified or alternative dosing regimens. The identification of the CD20–RTX elimination rate constant as a key driver aligns well with the known role of FCGR3A polymorphisms in rituximab response, lending biological plausibility to the model. One area for improvement would be a more formal assessment of model uncertainty propagation, perhaps through Bayesian calibration or bootstrap methods. The lack of individual patient data limits the ability to quantify inter-individual variability rigorously, but the authors appropriately acknowledge this constraint. Overall, this work provides a solid foundation for mechanism-based evaluation of B cell-depleting therapies.

---

### Bottom Line
This QSP model of B cell differentiation provides a mechanistic framework to identify key drivers of rituximab response variability in autoimmune diseases, highlighting the importance of CD20–rituximab binding/internalization kinetics and baseline B cell subset composition. The model successfully recapitulates B cell dynamics under monotherapy and combination therapy without empirical interaction parameters, offering a platform for hypothesis testing and dose optimization. For practicing pharmacometricians, this work demonstrates the value of integrating detailed biological pathways with drug mechanisms to explain clinical variability and suggests that patient stratification based on baseline plasmablast/plasma cell counts and Fcγ receptor genotype could improve therapeutic outcomes with rituximab.

---

---

## 📊 Figures

![Workflow of model calibration and validation in this study. Input and external testing data were extracted from the literature (Table1). ASCs, antibody-secreting]({{ site.baseurl }}/assets/digests/2026-06-25-b-cell-differentiation-model-for-identifying-predictors-of-responses-to/figures/fig_01.jpg)

![Schematic diagram of the B cell differentiation model. White and gray compartments show B cell counts and normalized signals. Effects of glucocorticoids (black)]({{ site.baseurl }}/assets/digests/2026-06-25-b-cell-differentiation-model-for-identifying-predictors-of-responses-to/figures/fig_02.jpg)

![Goodness-of-fit plots and fitted time–courses of PK and B cells for the study drugs. (A) Goodness-of-fit plots of PK models. (B) Fitted and extracted serum conce]({{ site.baseurl }}/assets/digests/2026-06-25-b-cell-differentiation-model-for-identifying-predictors-of-responses-to/figures/fig_03.jpg)

![Global sensitivity analysis for changes in CD19+cells and antibody-secreting cells (ASCs) by rituximab (RTX). The total/first sensitivity indices for percent cha]({{ site.baseurl }}/assets/digests/2026-06-25-b-cell-differentiation-model-for-identifying-predictors-of-responses-to/figures/fig_04.jpg)

![Model-based simulations of time–courses of CD19+cells and antibody-secreting cells (ASCs) by rituximab (RTX) and prednisolone (PNL). Simulated time–courses of pe]({{ site.baseurl }}/assets/digests/2026-06-25-b-cell-differentiation-model-for-identifying-predictors-of-responses-to/figures/fig_05.jpg)