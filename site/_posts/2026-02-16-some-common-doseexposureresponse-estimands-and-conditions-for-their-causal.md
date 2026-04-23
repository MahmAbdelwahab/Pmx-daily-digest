---
layout: post
title: "Some Common Dose–Exposure–Response Estimands and Conditions for Their Causal Identifiability"
date: 2026-02-16
authors: "Bartels C, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "https://doi.org/10.1002/psp4.70202"
paper_type: methodology
tags: [methodology, qsp, dose-response, covariate-analysis, regulatory, clinical-trial-design]
excerpt_text: "A landmark methodological paper bridging pharmacometrics with the ICH E9(R1) estimand framework. It provides the causal inference justification for pooling data from multiple studies to perform exposure-response analyses for dose selection."
pdf_path: "/assets/digests/2026-02-16-some-common-doseexposureresponse-estimands-and-conditions-for-their-causal/PMx_Some_Common_DoseExposureResponse_Estiman_20260216.pdf"
retroactively_classified: true
---

### Quick Take
A landmark methodological paper bridging pharmacometrics with the ICH E9(R1) estimand framework. It provides the causal inference justification for pooling data from multiple studies to perform exposure-response analyses for dose selection.

---

### Executive Summary
This paper formally integrates dose-exposure-response (D-E-R) analyses within the ICH E9(R1) estimand framework, addressing a critical gap in regulatory science. By utilizing causal inference tools—specifically Directed Acyclic Graphs (DAGs) and Single World Intervention Graphs (SWIGs)—the authors derive the conditions under which D-E-R analyses yield valid causal estimates of clinical outcomes. Through a simulation study mimicking a lymphoma drug development program, the authors demonstrate that while D-E-R and traditional Dose-Response (D-R) analyses can target the same estimand, D-E-R offers superior statistical precision (lower Mean Squared Error) by leveraging exposure as a mediator. This work provides the necessary theoretical foundation for justifying covariate-adjusted E-R analyses in regulatory submissions, particularly when extrapolating to special populations or pooling data from heterogeneous sources.

---

## ⚡ Methodological Snapshot
The authors define theoretical 'target trials' and estimands using potential outcome notation. They employ DAGs to map causal relationships between covariates, study participation, dose, exposure, and response. A simulation study compares D-R and D-E-R estimation performance across 1000 replicates of a sparse-data scenario (rare disease population). The analysis evaluates bias and precision (MSE) when estimating event rates for specific doses in a target population.

---

## 🏗️ Structural Model Breakdown
The 'structural model' here is the Causal DAG rather than a system of ODEs. The flow is defined as: Baseline Covariates ($L$) -> Study Selection ($S$) & Dose ($D$). Dose ($D$) + Covariates ($L$) -> Early Exposure ($E$). Exposure ($E$) + Covariates ($L$) -> Response ($R$/$Y$). The mathematical structure relies on the Law of Total Probability to integrate over the distribution of covariates in the target population.

---

### Detailed Methodological Analysis

#### Modeling Approach
The study utilizes causal inference theory (DAGs/SWIGs) for derivation and parametric regression (Logistic Regression for binary outcomes, Linear models for exposure) for estimation. It contrasts 'pooled dose-exposure-response' against 'pooled covariate-adjusted dose-response'.

#### Data Sources
Simulated datasets representing two studies: Study 1 (dose-ranging in a diverse population) and Study 2 (single dose in the specific target population, e.g., ATLL patients).

#### Estimation Methods
Maximum Likelihood Estimation via logistic regression was used for the response models. The simulation treated exposure (AUC) as a derived variable, though the text notes this could be replaced by PopPK estimates.

#### Model Evaluation
Performance was evaluated using Mean Squared Error (MSE) and Bias of the estimated incidence rates compared to the 'true' simulated counterfactual incidence rates.

#### Covariate Analysis
Covariates ($L$) were critical for confounding adjustment. The analysis distinguished between covariates affecting PK ($L_E$), PD ($L_Y$), and study enrollment ($L_P$).

---

### Scientific Context & Motivation
Pharmacometricians frequently pool data from various studies (Phase 1/2, randomized/non-randomized) to inform dose selection. However, the formal statistical justification for this pooling, particularly in the context of the rigorous ICH E9(R1) estimand framework used by biostatisticians, has been lacking. This paper addresses the 'identifiability' of causal effects in these scenarios, challenging the field to move beyond curve-fitting to formally defined causal questions.

---

### Statistical Rigor Assessment
The paper exhibits high theoretical rigor, grounding pharmacometric practice in fundamental statistical theory. The simulation study appropriately addresses the 'positivity' assumption (overlap of covariate distributions) and demonstrates where parametric extrapolation is necessary when non-parametric identifiability fails.

---

## 📊 Key Findings
1. D-E-R analyses yielded significantly lower Mean Squared Error (up to 3-fold lower) compared to D-R analyses for estimating event rates, indicating higher precision.
2. Both D-R and D-E-R showed similar bias when appropriate covariate adjustments were made, confirming they can target the same estimand.
3. The validity of D-E-R relies on the strong assumption that the effect of dose on response is entirely mediated by exposure (no direct D->R path unmediated by E).

---

## 💡 Clinical & Regulatory Implications
The framework justifies using D-E-R to select doses for specific subpopulations (e.g., renal impairment) even when those populations were not randomized to all doses. It provides a regulatory-grade argument for why exposure-response modeling is superior to simple dose-response analysis for decision-making in sparse data settings.

---

### Strengths & Limitations

#### Strengths
- First rigorous application of SWIGs to pharmacometric D-E-R problems.
- Clear demonstration of the efficiency gain (precision) of D-E-R over D-R.
- Provides a template for defining estimands in PMx regulatory documents.

#### Limitations (Acknowledged by Authors)
- Simulation used simplified linear PK; real-world non-linear PK with shrinkage might complicate results.
- Assumes no unmeasured confounding, which is critical for observational data pooling.
- Positivity assumption was not strictly met, requiring reliance on parametric model validity.

#### Limitations (Expert Review)
- The complexity of DAG/SWIG notation may be a barrier for practical implementation by non-statistician pharmacometricians.
- Does not explicitly address time-varying confounding or feedback loops (e.g., dose adjustments based on early response).

#### Generalizability
Highly generalizable framework applicable to any development program requiring data pooling for dose selection, specifically End-of-Phase 2 decisions.

---

### Key Equations

**Dose-Response Estimand (Identification)**

$$
\Pr(R^d|S=0) = \int_l \Pr(R|L=l, D=d)\Pr(L=l|S=0) dl
$$

Calculates the probability of response to dose d in the target population (S=0) by integrating the conditional dose-response over the target covariate distribution.

**Dose-Exposure-Response Estimand (Identification)**

$$
\Pr(R^d|S=0) = \int_{l,e} \Pr(R|L_Y=l_Y, E=e)\Pr(E=e|L_E=l_E, D=d)\Pr(L=l|S=0) dl de
$$

Calculates the same probability but decomposes the effect through exposure (E), integrating over both covariate and exposure distributions.

**Conditional Independence for Pooling**

$$
R^d \perp S \mid L
$$

The fundamental assumption required to pool data: potential outcomes are independent of the study source given the covariates.

---

### Figures & Tables

- **Figure 1**: Directed Acyclic Graph (DAG) showing relationships between Covariates (L), Study (S), Dose (D), Exposure (E), and Response (R/Y).
  - *Significance*: Visually defines the causal assumptions. The arrows from L to S and S to D explain why simple pooling without adjustment is biased.
- **Table 2**: Simulation results comparing Bias and MSE for D-R vs D-E-R approaches across different estimands.
  - *Significance*: Empirically demonstrates that D-E-R provides lower MSE (higher precision) than D-R, justifying the additional modeling effort.

---

### Code & Reproducibility Assessment
High. R code for data simulation and analysis is provided in Appendix S2.

---

### Supplementary Materials
Appendix S1 contains details of the simulation setup. Appendix S2 contains the R code for the simulations and analyses, ensuring full reproducibility.

---

### Future Directions
Future work should address the impact of shrinkage in individual exposure estimates (from PopPK models) on the bias/precision of the causal estimand. Extensions to time-to-event endpoints and time-varying confounders are also suggested.

---

### Expert Commentary
This is a 'must-read' for senior pharmacometricians involved in regulatory interactions. It bridges the cultural and linguistic gap between pharmacometrics and biostatistics. While we intuitively know D-E-R is 'better' because it uses actual exposure, this paper mathematically proves *why* and *when* it is valid. The use of DAGs to explicitly declare assumptions (like 'no direct effect of dose not mediated by exposure') will likely become a standard requirement in future regulatory justifications for complex models.

---

### Bottom Line
Dose-Exposure-Response (D-E-R) analysis is not just a curve-fitting exercise; it is a causal inference method that, under specific assumptions, provides more precise estimates for dose selection than standard Dose-Response analysis. To ensure regulatory acceptance, modelers should adopt the estimand framework and explicitly state causal assumptions (using DAGs) regarding covariate control and mediation.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.png", width: 90%),
  caption: [FIGURE 1: Directed acyclic graph (DAG). L_P,L_E,L_Y , baseline covariates; S , clinical studies or trials;D, as],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```