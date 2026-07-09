---
layout: post
title: "Optimizing Clinical Study Designs for CAR-T Cell Therapy: Development of an Efficient Sampling Strategy Through Optimal Experimental Design"
date: 2026-07-09
authors: "Klima F, Mueller-Schoell A, Michelet R, Hempel K, Huisinga W, Hooker AC, Kloft C"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 1–16"
doi: "10.1002/psp4.70274"
paper_type: methodology
tags: [methodology, oncology]
excerpt_text: "This paper develops an optimal experimental design framework for CAR-T clinical studies, identifying a robust design of 60 patients with three flexible CAR-T sampling windows and three fixed tumor burden assessments. The flexible windows outperform fixed timepoints in stochastic simulations, particularly for tumor-killing parameters."
pdf_path: "/assets/digests/2026-07-09-optimizing-clinical-study-designs-for-car-t-cell-therapy-development-of-an/PMx_Optimizing_Clinical_Study_Designs_for_CA_20260709.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper develops an optimal experimental design framework for CAR-T clinical studies, identifying a robust design of 60 patients with three flexible CAR-T sampling windows and three fixed tumor burden assessments. The flexible windows outperform fixed timepoints in stochastic simulations, particularly for tumor-killing parameters.

---

### Executive Summary
This paper develops an optimal experimental design (OED) framework for CAR-T cell therapy clinical studies, based on a published mechanistic NLME model of CAR-T kinetics and tumor dynamics. By evaluating population size, sampling strategies, and parameter uncertainty, the authors identify a robust design: 60 patients, three fixed tumor burden assessments (days 0, 30, 90), and three flexible CAR-T sampling windows (days 2–4, 12–18, 32–47). Stochastic simulation and estimation confirm that this design outperforms fixed-timepoint alternatives, particularly for parameters characterizing heterogeneous outcomes. The framework provides a pragmatic, resource-efficient approach for clinical data collection in complex immunotherapies.

---

### Scientific Context & Motivation
CAR-T cell therapy shows impressive efficacy but high variability in response. Nonlinear mixed-effects modeling can improve understanding of dose-exposure-response relationships, but requires informative clinical data. Current CAR-T studies often use sparse, fixed sampling schedules (e.g., days 7, 14, 28) that may not be optimal. There is a need for efficient, feasible study designs that maximize information while respecting practical constraints. OED has been applied to conventional therapies but not to cellular immunotherapies.

---

## ⚡ Methodological Snapshot
The authors develop an OED framework for CAR-T clinical studies using a published mechanistic NLME model of CAR-T kinetics (four phenotypes) and tumor dynamics. They evaluate population size (10–150 patients) and sampling strategies (removing/shifting samples, adding early samples) using D-optimality based on the expected FIM. To account for parameter uncertainty, they use sampling importance resampling (SIR) to generate parameter vectors and optimize sampling windows. The final design is validated via SSE with 500 replicates, comparing fixed vs. flexible sampling timepoints.

---

## 📐 Statistical Framework
The OED framework is based on D-optimality using the expected Fisher Information Matrix (FIM) approximated via first-order (FO) linearization. The model is a nonlinear mixed-effects model with ODEs describing CAR-T phenotype dynamics and tumor growth/killing. Random effects include IIV on $Vmax_{ref}$ and $Vmax_{5,2}$ (log-normal), and proportional RUV on all observations. A mixture model for CAR-T expansion subpopulations (reference/low) is implemented as a dichotomous patient characteristic. To account for bioanalytical constraints, a small fixed additive RUV is added. Parameter uncertainty is incorporated via sampling from the SIR posterior distribution.

---

### Estimator Behavior
In SSE, parameters related to CAR-T disposition and expansion ($Vmax_{ref}$, $Vmax_{low}$) were estimated with high accuracy (median REE $<5.84\%$) and precision (IQR within $\pm 20\%$) across all designs. Tumor-killing parameters ($Vmax_{5,2}$, $KM_{5}$) showed lower accuracy and precision, with a positive bias in fixed-timepoint designs (median REE 25.8%–36.5%). The flexible-window design reduced this bias to within $\pm 20\%$ and improved precision. Convergence was high (96.8%–97.4% of replicates minimized successfully; additional 2.2%–3% had only rounding errors).

---

### Validation Design
The final design was validated using stochastic simulation and estimation (SSE) with 500 replicates. Three scenarios were compared: (1) fixed reference sampling (days 7, 14, 28 for CAR-T; baseline, days 30, 90 for MTV); (2) fixed optimal timepoints (median of optimized windows: days 2, 15, 39); (3) flexible optimal windows (days 2–4, 12–18, 32–47). Individual timepoints in windows were sampled from uniform distributions. Performance was assessed via relative estimation errors (REE) for all model parameters. The flexible-window design was the only one achieving median REE within $\pm 20\%$ for all parameters.

---

### Comparison to Alternatives
The optimized design with flexible sampling windows was compared to two fixed-timepoint designs: (1) the reference design (days 7, 14, 28 for CAR-T; baseline, days 30, 90 for MTV) and (2) the median optimal fixed timepoints (days 2, 15, 39). In SSE, both fixed designs yielded median REEs $>20\%$ for tumor-killing parameters (25.8%–36.5%) with wide IQRs (93.5–116 percentage points), while the flexible-window design achieved median REEs within $\pm 20\%$ and narrower IQRs ($\leq 70.1$ percentage points). This demonstrates that accounting for parameter uncertainty via flexible windows is more impactful than simply optimizing fixed timepoints.

---

### Implementation Guidance
The OED analysis was performed using PopED v0.6.0 with rxode2 v2.1.3 for model implementation and FO approximation for the FIM. SSE used NONMEM v7.5.1 via PsN. Code is available on GitHub. Practical tips: (1) Account for bioanalytical constraints by adding a small fixed additive RUV to reduce informativeness of low concentrations; (2) use SIR to sample from the parameter uncertainty distribution for robust design optimization; (3) for sampling windows, assume a uniform distribution for individual timepoints; (4) computational cost is moderate—100 population replicates for design evaluation, 500 SSE replicates for validation.

---

## 📊 Key Findings
The minimal informative population size is 60 patients. Three CAR-T sampling windows (days 2–4, 12–18, 32–47) with three fixed MTV assessments (days 0, 30, 90) provide robust parameter estimation. Flexible windows outperform fixed timepoints, especially for tumor-killing parameters. The design efficiency is 111% (11% fewer patients needed vs. reference).

---

### Strengths & Limitations

#### Strengths
- First application of OED to cellular immunotherapy, addressing a critical gap.
- Comprehensive evaluation of population size, sampling strategies, and parameter uncertainty.
- Use of sampling windows rather than fixed timepoints increases clinical feasibility and robustness.
- SSE validation confirms the superiority of the flexible design over fixed alternatives.
- Code and methods are openly available, facilitating reproducibility and extension.

#### Limitations (Acknowledged by Authors)
- The model does not include initial CAR-T distribution (lag time), which may affect interpretation of the first sampling window.
- No infusion product or later samples (> month 2) were considered.
- The mixture model was simplified to a dichotomous characteristic.
- Sampling windows assumed uniform, independent distributions for individual timepoints.
- Results depend on the underlying model structure and parameter values.

#### Limitations (Expert Review)
- The FO approximation for the FIM may be less accurate for highly nonlinear models with large IIV (e.g., IIV on $Vmax_{5,2} > 300\%$ CV).
- The additive RUV approach, while simple, may not fully capture bioanalytical constraints at low concentrations.
- The SSE validation did not assess robustness to model misspecification (e.g., different structural model).
- The design was optimized for parameter estimation, not for prediction or decision-making.

#### Generalizability
The design is based on a model developed for axicabtagene ciloleucel in non-Hodgkin lymphoma. The authors argue that robustness to parameter uncertainty suggests applicability to other CAR-T constructs, but fundamentally different kinetics (e.g., different tumor burden implementation) may require re-optimization.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the mechanistic model (CAR-T phenotypes, tumor dynamics) and the final optimized design (60 patients, three CAR-T sampling windows, three fixed MTV timepoints).
  - *Significance*: Provides a visual summary of the model structure and the proposed study design, essential for understanding the OED framework.
- **Figure 2**: eRSE vs. population size (10–150 patients) for key model parameters, showing that 60 patients are needed for tumor-killing parameters.
  - *Significance*: Establishes the minimal informative population size, a key design element.
- **Figure 3**: Impact of removing late samples or adding an early CAR-T sample on eRSEs.
  - *Significance*: Demonstrates the importance of late CAR-T sampling and the potential benefit of an early sample (days 1–5).
- **Figure 4**: eRSE as a function of shifting the last CAR-T or MTV sampling timepoint.
  - *Significance*: Shows that CAR-T sampling times require optimization (optimal around day 50 for tumor killing, day 18 for expansion), while MTV timing has little impact.
- **Figure 5**: Relative estimation errors (REE) from SSE comparing fixed reference, fixed optimal, and flexible window designs.
  - *Significance*: Key validation figure: only the flexible-window design achieves median REE within $\pm 20\%$ for all parameters, confirming its superiority.

---

### Code & Reproducibility Assessment
Code is available on GitHub (https://github.com/Kloft-Lab). The OED analysis used PopED v0.6.0 and rxode2 v2.1.3 in R; SSE used NONMEM v7.5.1 via PsN v4.7.0.

---

### Supplementary Materials
Supporting Information includes sensitivity analysis of additive RUV on optimal sampling times (Figures S2, S3), additional eRSE results for sampling strategies (Figures S4, S5), and SSE results for all parameters (Figure S6).

---

### Future Directions
The authors suggest applying the framework to other CAR-T constructs and indications, incorporating multiple candidate models to handle model uncertainty, and extending to adaptive designs that guide treatment decisions or sampling strategies based on early CAR-T expansion. Validation with real-world clinical data is also recommended.

---

### Expert Commentary
This work is a timely and rigorous application of OED to a novel therapeutic modality. The use of sampling windows rather than fixed timepoints is a pragmatic innovation that acknowledges real-world clinical constraints. The SSE validation is particularly valuable, as it reveals that fixed optimal timepoints derived from OED can be misleading when parameter uncertainty is ignored. The framework is generalizable to other cell therapies and immunotherapies, though the specific windows may need adjustment for different constructs or indications.

---

### Bottom Line
For practitioners designing CAR-T clinical studies, a design with 60 patients, three fixed tumor burden assessments (days 0, 30, 90), and three flexible CAR-T sampling windows (days 2–4, 12–18, 32–47) provides robust parameter estimation. The flexible windows outperform fixed timepoints, especially for tumor-killing parameters, and the framework is implementable using PopED and NONMEM.

---

---

## 📊 Figures

![Schematic representation of the previously published model of CAR-T kinetics and tumor dynamics adapted from Mueller-Schoell et al. 12 (a), simulations illustr]({{ site.baseurl }}/assets/digests/2026-07-09-optimizing-clinical-study-designs-for-car-t-cell-therapy-development-of-an/figures/fig_01.jpg)

![Expected relative standard errors (eRSE) comparing design evaluations of the reference design with 10–150 patients (step size: 10) for structural model parameter]({{ site.baseurl }}/assets/digests/2026-07-09-optimizing-clinical-study-designs-for-car-t-cell-therapy-development-of-an/figures/fig_02.jpg)

![Expected relative standard errors (eRSE) comparing design evaluations of sampling strategies assessing the need for late or additional early samples for structur]({{ site.baseurl }}/assets/digests/2026-07-09-optimizing-clinical-study-designs-for-car-t-cell-therapy-development-of-an/figures/fig_03.jpg)

![Expected relative standard errors (eRSE) comparing design evaluations of sampling strategies assessing the impact of shifting late sampling timepoints for struct]({{ site.baseurl }}/assets/digests/2026-07-09-optimizing-clinical-study-designs-for-car-t-cell-therapy-development-of-an/figures/fig_04.jpg)

![Relative estimation errors comparing the performance of three designs to inform structural model parameters. The tested designs all comprised 60 patients with th]({{ site.baseurl }}/assets/digests/2026-07-09-optimizing-clinical-study-designs-for-car-t-cell-therapy-development-of-an/figures/fig_05.jpg)