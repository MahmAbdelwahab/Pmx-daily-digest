---
layout: post
title: "Breaking Barriers Between Species: Integrated Multi-Species PK Models Improve Human PK Predictions"
date: 2026-05-24
authors: "Miriam S. R. Happ et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70262"
paper_type: popk
tags: [popk, qsp]
excerpt_text: "Pharmacometricians involved in translational PK or first-in-human dose prediction should read this. The authors present and benchmark an integrated multi-species PK modeling approach that simultaneously fits preclinical data to a single model with allometric scaling, embedded within a mechanistic framework for $CL$ and $F$ prediction. The method significantly improved the prediction of late-phase concentrations ($C_{24h}$) and intercompartmental clearance ($Q/F$) compared to a leading literature benchmark, particularly for compounds exhibiting inconsistent compartmental structures across species."
pdf_path: "/assets/digests/2026-05-24-breaking-barriers-between-species-integrated-multi-species-pk-models-improve/PMx_Breaking_Barriers_Between_Species_Integr_20260524.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
Pharmacometricians involved in translational PK or first-in-human dose prediction should read this. The authors present and benchmark an integrated multi-species PK modeling approach that simultaneously fits preclinical data to a single model with allometric scaling, embedded within a mechanistic framework for $CL$ and $F$ prediction. The method significantly improved the prediction of late-phase concentrations ($C_{24h}$) and intercompartmental clearance ($Q/F$) compared to a leading literature benchmark, particularly for compounds exhibiting inconsistent compartmental structures across species.

---

### Executive Summary
This study tackles a critical gap in translational PK: the prediction of profile shape parameters ($V_c$, $V_p$, $Q$, $k_a$) beyond $CL$ and $V_{ss}$. By integrating multi-species modeling into a previously published mechanistic prediction framework (Himstedt et al., 2024), the authors jointly estimate these parameters using allometric scaling on pooled preclinical data from up to five species. Benchmarking against 40 small molecules, the integrated approach markedly improved prediction of $Q/F$ and $C_{24h}$, reducing the profile shape geometric mean fold-error (GMFE) and largely resolving prior mispredictions caused by structural model inconsistency across species. The work demonstrates that simultaneous, scaled estimation can compensate for sparse
</think>

**Content Source:** Full Text

### Quick Take
Pharmacometricians involved in translational PK or first-in-human dose prediction should read this. The authors present and benchmark an integrated multi-species PK modeling approach that simultaneously fits preclinical data to a single model with allometric scaling, embedded within a mechanistic framework for $CL$ and $F$ prediction. The method significantly improved the prediction of late-phase concentrations ($C_{24h}$) and intercompartmental clearance ($Q/F$) compared to a leading literature benchmark, particularly for compounds exhibiting inconsistent compartmental structures across species.

---

### Executive Summary
This study tackles a critical gap in translational PK: the prediction of profile shape parameters ($V_c$, $V_p$, $Q$, $k_a$) beyond $CL$ and $V_{ss}$. By integrating multi-species modeling into a previously published mechanistic prediction framework (Himstedt et al., 2024), the authors jointly estimate these parameters using allometric scaling on pooled preclinical data from up to five species. Benchmarking against 40 small molecules, the integrated approach markedly improved prediction of $Q/F$ and $C_{24h}$, reducing the profile shape geometric mean fold-error (GMFE) and largely resolving prior mispredictions caused by structural model inconsistency across species. The work demonstrates that simultaneous, scaled estimation can compensate for sparse or uncertain distributional data in individual species, representing a pragmatic and powerful evolution of standard preclinical-to-clinical translation workflows.

---

### Scientific Context & Motivation
Predicting the full human PK profile—particularly the shape-defining parameters $Q$, $V_c$, $V_p$, and $k_a$—is a long-standing challenge in drug discovery. While standard frameworks predict $CL$ and $V_{ss}$ with reasonable accuracy, the methods for translating distributional parameters often rely on naive averaging of individual species model estimates, ignoring the uncertainty and structural model discrepancies across species. This can lead to substantial errors in $C_{max}$ and $C_{trough}$, which are pivotal for efficacy and safety predictions (e.g., PK/PD indices). The paper addresses this gap by challenging the established two-step (species-then-human) paradigm and instead proposes a joint, scaled model that leverages the totality of preclinical information.

---

## ⚡ Methodological Snapshot
The authors build upon the Himstedt et al. (2024) framework by replacing the species-by-species compartmental modeling with a single integrated multi-species model. Preclinical plasma data from up to five species are pooled and fitted simultaneously in Phoenix WinNonlin, applying allometric scaling (fixed exponents: 1 for $V_c/V_p$; 0.75 for $Q$) and a shared $k_a$ (except minipig). Mechanism-based methods for $CL$ and $F$ from in vitro data and NCA are retained. Model selection is based on AIC and goodness-of-fit. The predicted human parameters are benchmarked against observed clinical PK for 40 NCEs.

---

## 🏗️ Structural Model Breakdown
The core model structure is a standard linear mammillary compartmental model (1- to 3-compartments) with first-order absorption. The key difference is the estimation step: clearance ($CL$) and bioavailability ($F$) are still estimated as species-specific parameters (fitted but not carried forward), while intercompartmental clearance ($Q$), central volume ($V_c$), and peripheral volume ($V_p$) are expressed as single allometrically scaled parameters. The model equations take the form $Q = Q_{70} \times (WT/70)^{0.75}$ and $V = V_{70} \times (WT/70)^1$, linking diverse species through a common pharmacokinetic skeleton. The human prediction subsequently uses these scaled parameters at 70 kg.

---

### Detailed Methodological Analysis

#### Modeling Approach
Compartmental modeling (1-, 2-, or 3-compartment) with linear and non-linear elimination processes (TMDD). Multi-species data are pooled and fitted to a single structural model. Phoenix WinNonlin 8.5.2 was used. Allometric scaling was embedded directly into the model code, relating parameters to a standardized body weight.

#### Data Sources
Dataset of 40 orally administered NCEs from Boehringer Ingelheim's pipeline, including plasma concentration-time data from i.v. and p.o. dosing in at least three preclinical species (typically rodent and non-rodent). Human reference data came from NCA and pooled clinical PK models from first-in-human trials.

#### Estimation Methods
Maximum likelihood (or equivalent weighted least squares) within WinNonlin's compartmental model engine. Parameters were estimated jointly with inter-occasion or inter-species variability absorbed in residual error.

#### Model Evaluation
Model selection used AIC, parameter precision ($RSE < 50\%$), and visual predictive checks against the preclinical data. Predictive performance was benchmarked using fold errors, AAFE, GMFE, MFE, and the proportion of predictions within 2-, 3-, and 5-fold of observed clinical parameters and profile concentrations.

#### Covariate Analysis
Body weight was incorporated mechanistically via allometric scaling with fixed exponents (1 for volumes, 0.75 for clearance-related parameters). No formal statistical covariate selection was employed. Minipig was treated as a covariate for absorption, with a separate $k_a$ estimated.

---

### Statistical Rigor Assessment
The methodological approach is sound for an early-discovery translational tool. The use of AIC and $\%CV$ for model selection is standard. External benchmarking against observed clinical profiles using multiple fold-error metrics provides robust evidence of performance. However, the analysis relies on fixed scaling exponents and a point-estimate framework. There is no formal uncertainty propagation from the preclinical fit to the human simulation. The absence of a bootstrapping or Bayesian joint model means that confidence intervals around the human prediction cannot be generated, which would be expected in formal regulatory-facing modeling.

---

## 📊 Key Findings
The integrated multi-species model, applied to 40 NCEs, reduced the shape GMFE from 1.41 to 1.31 and was superior to the benchmark for predicting $C_{24h}$ (AAFE reduced from 33.3 to 3.34). The most dramatic improvement was seen in $Q/F$ prediction (AAFE reduced from 9.22 to 3.27). Four compounds (#10, #21, #25, #33) accounted for most of the improvement, representing cases where single-species models had inconsistent structures or poorly estimated distribution phases—illustrated robustly with the BTK inhibitor #21. Performance on $C_{max}$ and $k_a$ prediction remained comparable to the benchmark, as these parameters are heavily influenced by unchanged $CL/F$ and absorption prediction methods.

---

## 💡 Clinical & Regulatory Implications
The primary clinical implication is a substantial improvement in the precision of trough concentration predictions ($C_{24h}$, $C_{48h}$) during first-in-human dose selection. This is directly relevant for translating preclinical efficacy and toxicology signals, especially for anti-infectives or oncology drugs where PK/PD indices (e.g., $fT > MIC$, $AUEC$) are critical. The method reduces the risk of advancing compounds with dangerously flawed late-phase PK assumptions, resulting in more robust Phase I starting doses and schedules.

---

### Strengths & Limitations

#### Strengths
- First systematic, large-scale benchmarking of simultaneous multi-species modeling for full PK profile prediction integrated into a mechanistically sound framework.
- Adds novel insight by quantifying specific improvements in $Q/F$ and $C_{24h}$, parameters crucial for PK/PD index calculation (e.g., $fT > MIC$).
- Provides clear mechanistic rationale (e.g., compensating for limited distributional data in one species with data from another) and detailed case examples.
- Highly pragmatic workflow using industry-standard software (Phoenix WinNonlin), which maximizes potential adoption.
- Demonstrates handling of complex kinetics (TMDD, non-linear elimination) within the integrated framework.

#### Limitations (Acknowledged by Authors)
- The method could not improve the prediction of $k_a$, as preclinical formulations differ from human formulations.
- Plasma protein binding differences across species were not systematically incorporated, and inclusion of $f_u$ correction introduced bias in $MRT_{tot}$ predictions.
- The framework relies on pre-existing mechanistic methods for $CL$ and $F$, meaning errors in those methods propagate unchanged.
- The benefits are primarily driven by a minority of compounds (~10%); most compounds show performance comparable to the original method.

#### Limitations (Expert Review)
- The study uses a fixed allometric exponent of 1 for $V_c/V_p$ and 0.75 for $Q$. This may be overly simplistic for compounds with extensive enterohepatic recirculation or active transport, where exponents can significantly deviate.
- The dataset, while diverse, is a proprietary, internal Boehringer Ingelheim library, which limits reproducibility and external validation on structurally distinct chemotypes.
- Model selection was based on AIC and visual inspection; no formal automated covariate model building (e.g., SCM) was applied, and the impact of sparse data on model discrimination was not fully quantified.
- The predictive performance is judged against a pooled clinical model rather than raw clinical data, which may obscure true variability in observed human responses.

#### Generalizability
The method appears generalizable to small molecules with linear and non-linear kinetics, particularly where distribution is well-described by 1-3 compartments. However, its applicability to biologics, highly permeable compounds with active transport, or drugs with extensive extravascular binding requires further study.

---

---

### Figures & Tables

- **Figure 1**: Simulation illustrating the impact of intercompartmental clearance ($Q$) on the PK profile shape in a two-compartment model.
  - *Significance*: Provides the critical motivation for the entire study by visually linking a shape-defining parameter ($Q$) to $C_{max}$ and late-phase concentrations, explaining why accurate prediction of $Q$ is pharmacologically relevant.
- **Figure 2**: Schematic workflow contrasting the traditional two-step species-specific prediction with the new integrated multi-species modeling approach.
  - *Significance*: Clarifies the methodological innovation: simultaneous estimation of $V_c$, $V_p$, and $Q$ across species with fixed scaling, while keeping mechanism-based methods for $CL$ and $F$.
- **Figure 3**: A 40-panel graphic showing 24-hour dose-normalized human PK predictions from the benchmark versus the multi-species method overlaid with clinical observations.
  - *Significance*: Shows that while most compounds are comparably predicted, a subgroup (especially #10, #21, #25, #33) are strikingly improved by the new method. This is the primary visual evidence of the method’s utility.
- **Figure 4**: Correlation plots of observed versus predicted PK parameters ($Q/F$, $V_{ss}$, $C_{max}$, $C_{24h}$, $k_a$), comparing the benchmark and multi-species approach.
  - *Significance*: Quantifies the drastic improvement in $Q$ and $C_{24h}$ prediction. The reduction in scatter for $Q/F$ vividly demonstrates the corrected biases from structural model inconsistencies.
- **Figure 5**: Detailed case study for Compound #21 (BI 705564) showing (A) poor individual species fits to i.v. data for dog and monkey versus the superior multi-species fit, and (B) a head-to-head comparison of predicted human oral profiles showing large improvement in shape and terminal half-life prediction.
  - *Significance*: Excellent pedagogical demonstration of how data pooling fixes structural model mismatch and high parameter uncertainty, turning a useless $Q$ prediction into a highly accurate one.
- **Table 1**: Summary of human PK prediction methods for each parameter, comparing the Himstedt et al. benchmark versus the multi-species model-based approach.
  - *Significance*: Provides the precise recipe for the new workflow, highlighting the unchanged mechanistic $CL/F$ methods and the use of allometric scaling for distributional parameters.
- **Table 2**: Comprehensive benchmarking statistics (AAFE, GMFE, MFE, fold-error ranges) for all key PK parameters and metrics from both methods.
  - *Significance*: The definitive quantitative evidence for superiority in specific parameters (especially $Q/F$ and $C_{24h}$) and equivalent performance otherwise. Shows GMFE drop of 23% for $C_{24h}$ and AAFE collapse for $Q/F$.

---

### Code & Reproducibility Assessment
The manuscript states the full multi-species model code is available in Data S1. The analysis relies on proprietary in vivo and in vitro data, and commercial software (Phoenix WinNonlin Version 8.5.2), which limits full public reproducibility.

---

### Supplementary Materials
The supplementary materials include a code example for a two-compartment PK model with allometric scaling (Data S1), additional goodness-of-fit plots for compound #21 after oral administration (Figure S2), human PK predictions up to 48 hours for all compounds (Figure S1), a comparison to full allometric methods using Dedrick plots (Figure S3), and a comparison of relative standard errors between individual and multi-species model fits (Figure S4).

---

### Future Directions
Future work should explore the impact of integrating plasma protein binding corrections and active transport processes into the multi-species scaling. Evaluating the method on an external, public dataset would strengthen generalizability claims. Investigation of a Bayesian or MCMC-based integrated framework could better propagate and quantify the uncertainty from the multi-species fit into the final human prediction, moving beyond point estimates for $Q/F$ and $V_c/V_p$.

---

### Expert Commentary
This paper is a pragmatic yet elegant demonstration of a principle that modelers often espouse: a model is only as good as its information content. By pooling data, the authors trade the impossible—fitting a two-compartment model to a sparse dog profile—for the feasible—fitting a two-compartment model to the combined data of dog, rat, and monkey. The results are telling: the biggest wins lie in exponentials that matter for safety and efficacy. However, the discipline's over-reliance on fixed allometric exponents still feels like a surrogate for true mechanistic understanding of distribution. A great teaching point here is how model uncertainty ($RSE > 300\%$ in the dog alone for #21) can be silently lethal in a two-step translation, and how integrating data is a powerful remedy. I would caution that this approach requires careful handling of species-specific absorption; the minipig $k_a$ exclusion is a necessary patch here. Overall, this represents a new standard of practice for cross-species translation in early development.

---

### Bottom Line
Integrating a multi-species, allometrically-scaled PK model into standard human PK prediction workflows is a practical, high-impact upgrade that dramatically reduces gross errors in distributional clearance ($Q/F$) and late-phase concentrations. Pharmacometricians should prioritize this approach when individual species analyses yield inconsistent compartmental structures or high parameter uncertainty, as it leverages cross-species data to stabilize estimates and improve critical $C_{trough}$ predictions for PK/PD assessment.

---

---

## 📊 Figures

![Impact of intercompartmental clearance (Q) on the shape of the PK profile of an exemplary two-compartment model with first-order absorption in linear (A) and sem]({{ site.baseurl }}/assets/digests/2026-05-24-breaking-barriers-between-species-integrated-multi-species-pk-models-improve/figures/fig_01.jpg)

![Schematic overview on differences between individual species model-based human PK prediction as performed by Himstedt et al. 2 (left) and integrated multi-spec]({{ site.baseurl }}/assets/digests/2026-05-24-breaking-barriers-between-species-integrated-multi-species-pk-models-improve/figures/fig_02.jpg)

![h single dose simulated human concentration-time profile for 40 evaluated novel chemical entities (NCEs). Showing dose-normalized simulation of pharmacokineti]({{ site.baseurl }}/assets/digests/2026-05-24-breaking-barriers-between-species-integrated-multi-species-pk-models-improve/figures/fig_03.jpg)

![Correlation of observed PK parameters and metrics derived from clinical PK model estimation (“observed”) versus predicted values based on Himstedt et al. 2 (le]({{ site.baseurl }}/assets/digests/2026-05-24-breaking-barriers-between-species-integrated-multi-species-pk-models-improve/figures/fig_04.jpg)

![(A) Preclinical individual (red) vs. multi-species model fit (blue) depicted as a simulation of single intravenous administration in dog, monkey and rat vs. obse]({{ site.baseurl }}/assets/digests/2026-05-24-breaking-barriers-between-species-integrated-multi-species-pk-models-improve/figures/fig_05.jpg)