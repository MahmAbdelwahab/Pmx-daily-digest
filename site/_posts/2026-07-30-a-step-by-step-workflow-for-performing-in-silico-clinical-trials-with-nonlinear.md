---
layout: post
title: "A Step-by-Step Workflow for Performing In Silico Clinical Trials With Nonlinear Mixed Effects Models"
date: 2026-07-30
authors: "Cortés-Ríos J, Jusko WJ, Malamas M, Sreedharan A, Desikan R"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025, 14(12): 1949-1964"
doi: "10.1002/psp4.70122"
paper_type: methodology
tags: [methodology, qsp, oncology]
excerpt_text: "This tutorial provides a step-by-step workflow for conducting in silico clinical trials (ISCTs) using nonlinear mixed effects (NLME) models. It introduces copula-based multivariate sampling to preserve parameter distributions and correlations, and a mixed-integer linear programming algorithm for virtual population calibration. The workflow is demonstrated on a simple tumor dynamics model and a complex hepatitis B QSP model."
pdf_path: "/assets/digests/2026-07-30-a-step-by-step-workflow-for-performing-in-silico-clinical-trials-with-nonlinear/PMx_A_StepbyStep_Workflow_for_Performing_In__20260730.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This tutorial provides a step-by-step workflow for conducting in silico clinical trials (ISCTs) using nonlinear mixed effects (NLME) models. It introduces copula-based multivariate sampling to preserve parameter distributions and correlations, and a mixed-integer linear programming algorithm for virtual population calibration. The workflow is demonstrated on a simple tumor dynamics model and a complex hepatitis B QSP model.

---

### Executive Summary
This tutorial presents a comprehensive, step-by-step workflow for conducting in silico clinical trials (ISCTs) using nonlinear mixed effects (NLME) models. The workflow covers model development, parameter estimation, sensitivity and identifiability analysis, virtual patient generation via copula-based multivariate sampling, virtual population calibration using a mixed-integer linear programming (MILP) algorithm, and simulation of clinical trials. The approach is illustrated with two examples: a simple tumor dynamics model and a complex mechanistic QSP model of hepatitis B virus infection. The paper provides practical guidance on maintaining parameter distributions and correlations, handling model complexity, and ensuring model credibility.

---

### Scientific Context & Motivation
ISCTs are a key component of model-informed drug development (MIDD), enabling virtual patient simulations to optimize therapies, inform regulatory decisions, and accelerate drug development. However, generating virtual populations from NLME models—which estimate parameter distributions and correlations—poses challenges not addressed by existing workflows designed for average data or individually fit models. This tutorial addresses the gap by providing a unified workflow tailored to NLME models, with practical guidance on parameter sampling, population calibration, and model credibility assessment.

---

## ⚡ Methodological Snapshot
This tutorial proposes a 7-step workflow for conducting ISCTs using NLME models. The core methodological contributions are: (1) a copula-based multivariate sampling method to generate plausible patients (PPs) that preserve the parameter distributions and correlations estimated by NLME; and (2) a mixed-integer linear programming (MILP) algorithm for calibrating the virtual population (Vpop) to match a target clinical population distribution. The workflow also includes steps for model development, sensitivity/identifiability analysis, PP selection based on physiological feasibility, ISCT simulation, and statistical analysis. The approach is demonstrated on two models: a simple tumor dynamics model and a complex mechanistic QSP model of hepatitis B virus infection.

---

## 📐 Statistical Framework
The workflow is built on the NLME framework, where parameters are modeled as fixed effects (population means) and random effects (inter-individual variability). The key statistical challenge is generating virtual patients that preserve the estimated multivariate parameter distribution, including correlations. The paper proposes using copulas (specifically Gaussian copula) to model the dependence structure between parameters, followed by inverse transformation to convert uniform copula samples into the target marginal distributions (e.g., normal, log-normal). This approach allows for arbitrary marginal distributions and correlation structures. The MILP calibration algorithm then adjusts the Vpop to match a target distribution (e.g., baseline HBsAg) by solving an optimization problem that minimizes the maximum deviation between the Vpop and target bin percentages.

---

### Estimator Behavior
Not applicable (this is a tutorial, not an estimator evaluation study). The paper does not present new estimators or evaluate bias/efficiency/convergence of existing ones. The focus is on workflow and methodology for generating virtual populations from already-estimated NLME model parameters.

---

### Validation Design
The workflow is validated through two case studies. The first uses a simple tumor dynamics model to predict complete response rates to chemotherapy, which are compared to a published clinical study (2.2% CR at 9 weeks vs. 2.5% at 18 weeks). The second uses a complex HBV QSP model to simulate the Everest clinical trial, reproducing the inverse relationship between baseline HBsAg and functional cure rates. The calibration step is validated by showing that the calibrated Vpop matches the target HBsAg baseline distribution exactly. No formal simulation-estimation or cross-validation studies are performed; validation relies on qualitative and quantitative comparison to external clinical data and literature values.

---

### Comparison to Alternatives
Compared to existing ISCT workflows (e.g., Craig et al., 2017; Kaddi et al., 2022), this tutorial specifically addresses the challenges of NLME models, where parameter distributions and correlations are estimated simultaneously. The use of copulas for multivariate sampling is a key differentiator, as it allows preservation of non-Gaussian marginal distributions and arbitrary correlation structures, unlike simpler multivariate normal sampling. The MILP calibration algorithm provides a principled, optimization-based approach to match target distributions, which is more flexible than rejection sampling or simple binning. The workflow is also more comprehensive than typical QSP-focused ISCT pipelines, as it integrates sensitivity analysis, identifiability assessment, and model credibility evaluation.

---

### Implementation Guidance
The workflow is implemented in MATLAB (Statistics and Machine Learning Toolbox for copularnd, Optimization Toolbox for MILP). NLME fitting was performed in Monolix 2023R1. Key practical tips: (1) Use a large initial sample size (e.g., 100,000) to ensure sufficient VPs after calibration, especially for rare events. (2) The MILP algorithm requires defining bins and target percentages for the calibration variable; careful bin selection is critical. (3) Sensitivity analysis (global, e.g., Sobol indices) is recommended for complex models to identify key parameters. (4) Practical identifiability should be assessed via covariance matrix or profile likelihoods. (5) RUV should be excluded from VP generation but may be added for specific predictive contexts. (6) Parallel computing can mitigate computational cost for large ISCTs. The provided MATLAB codes are a good starting point, but users should adapt them to their specific model and software environment.

---

## 📊 Key Findings
The paper presents a unified workflow for ISCTs with NLME models, demonstrating its application on two examples. Key findings include: (1) Copula-based multivariate sampling effectively preserves NLME-estimated parameter distributions and correlations in virtual populations. (2) The MILP calibration algorithm successfully matches the Vpop's baseline HBsAg distribution to that of a target clinical trial population (Everest study). (3) The workflow reproduces the inverse relationship between baseline HBsAg and functional cure rates observed in the Everest trial, providing mechanistic insights into treatment response. (4) The workflow is scalable from simple (tumor dynamics) to complex (HBV QSP) models.

---

### Strengths & Limitations

#### Strengths
- Provides a clear, step-by-step workflow that bridges the gap between NLME model fitting and ISCT simulation.
- Introduces copula-based multivariate sampling as a principled method for preserving parameter distributions and correlations.
- Presents a novel MILP-based calibration algorithm for matching target population distributions.
- Demonstrates the workflow on two models of varying complexity, showing scalability.
- Integrates model credibility assessment (verification, validation, uncertainty quantification) throughout the workflow.
- Provides practical guidance on sensitivity analysis, identifiability, and computational considerations.

#### Limitations (Acknowledged by Authors)
- The workflow does not include residual unexplained variability (RUV) in VP generation, which may be relevant for some predictive contexts.
- The MILP algorithm requires defining bins and target percentages, which may be subjective.
- Computational cost can be high for complex models, especially with global sensitivity analysis.
- The workflow assumes that the NLME model is adequately validated and that parameter estimates are reliable.

#### Limitations (Expert Review)
- The choice of copula family (Gaussian) is not rigorously justified; other copulas (e.g., t, Clayton) may better capture tail dependencies.
- The impact of sample size on the preservation of correlation structure is not systematically evaluated.
- The MILP algorithm is demonstrated only for a single calibration variable (HBsAg baseline); extension to multiple variables is not discussed.
- The workflow does not address model uncertainty or model averaging across candidate models.
- The tutorial does not provide a formal comparison of the MILP algorithm to alternative calibration methods (e.g., rejection sampling, Bayesian melding).

#### Generalizability
The workflow is demonstrated on two models of varying complexity (simple tumor dynamics and complex HBV QSP), suggesting broad applicability to NLME models in pharmacometrics. However, the specific methods (copula choice, MILP calibration) may need adaptation for models with different parameter structures or data types.

---

### Key Equations

**Tumor Burden Model**

{% raw %}
$$
\frac{dD}{dt} = k_g \cdot D - k_d \cdot C \cdot D
$$
{% endraw %}

This equation defines the tumor burden model used in the first example, where normalized tumor diameter ($D$) changes over time ($t$) with growth rate ($k_g$) and drug effect ($k_{de}$).

**MILP Calibration Objective**

{% raw %}
$$
\min \epsilon   \text{s.t.}   \left| \frac{N_{bin_i}}{N_{total}} - P_{target, bin_i} \right| \leq \epsilon,   \forall i
$$
{% endraw %}

This equation describes the MILP optimization problem for Vpop calibration, where the objective is to minimize the maximum matching error per bin ($\epsilon$) subject to constraints on the percentage of VPs in each bin.

---

### Figures & Tables

- **Figure 1**: 7-step workflow diagram for ISCTs with NLME models, including model creation, parametrization, sensitivity/identifiability analysis, parameter sampling, VP selection, ISCT simulation, and answering questions.
  - *Significance*: Provides the overall framework and roadmap for the entire tutorial.
- **Figure 2**: Method for generating plausible patients from NLME models using copulas for multivariate sampling and inverse transformation to maintain parameter distributions and correlations.
  - *Significance*: Illustrates the key methodological innovation for preserving NLME-estimated parameter structure in virtual populations.
- **Figure 3**: MILP-based virtual population calibration algorithm for matching target population distributions.
  - *Significance*: Describes the novel calibration algorithm that ensures the Vpop reflects a target clinical population.
- **Figure 4**: Tumor burden model schematic and sampled parameter distributions/correlations.
  - *Significance*: Shows the simpler example model and the parameter sampling results.
- **Figure 5**: ISCT results for the tumor model: design, trajectories, and complete response rates.
  - *Significance*: Demonstrates the application of the workflow to answer specific clinical questions.
- **Figure 6**: HBV QSP model schematic and estimated parameter distributions/correlations.
  - *Significance*: Shows the complex example model and its NLME-estimated parameter structure.
- **Figure 7**: Impact of PP selection and Vpop calibration on parameter distributions and HBsAg baseline distribution.
  - *Significance*: Demonstrates the calibration process and its effect on matching target population characteristics.
- **Figure 8**: ISCT results for the HBV model: trial design, HBsAg loss/FC rates by baseline HBsAg, and comparison to Everest trial.
  - *Significance*: Validates the workflow by reproducing clinical trial results and providing mechanistic insights.

---

### Code & Reproducibility Assessment
MATLAB codes and functions for parameter sampling (copularnd) and Vpop calibration (MILP problem-based algorithm) are provided as Supporting Information. The NLME fitting was performed in Monolix 2023R1. The tumor model and HBV model code are described but not fully archived in a public repository.

---

### Supplementary Materials
Supporting Information includes MATLAB codes and functions for parameter sampling (copularnd) and Vpop calibration using the MILP problem-based algorithm. Additional details on the HBV model development, sensitivity analysis, and mechanistic insights are provided in Cortés-Ríos et al. [55] (Material S1).

---

### Future Directions
Future work could extend this workflow to include: (1) integration of residual unexplained variability for sample size determination and uncertainty quantification; (2) application to other complex models (e.g., PBPK, disease progression models); (3) development of automated software tools implementing the workflow; (4) comparison of the MILP calibration algorithm to other methods (e.g., rejection sampling, Bayesian melding); (5) extension to handle time-varying covariates and dropout mechanisms; and (6) incorporation of model selection and averaging across multiple candidate models.

---

### Expert Commentary
This tutorial fills a critical gap in the MIDD literature by providing a clear, actionable workflow for generating virtual populations from NLME models. The use of copulas for multivariate sampling is a particularly elegant solution to the challenge of preserving non-Gaussian marginal distributions and arbitrary correlation structures. The MILP calibration algorithm is a novel and rigorous approach to matching target population distributions. The two examples effectively illustrate the scalability of the workflow from simple to complex models. The paper would benefit from a more detailed discussion of the statistical properties of the copula-based sampling (e.g., sensitivity to the choice of copula family, impact of sample size on correlation preservation) and a comparison of the MILP algorithm to alternative calibration methods (e.g., rejection sampling, Bayesian melding). The tutorial is a valuable resource for pharmacometricians and QSP modelers seeking to integrate ISCTs into their drug development workflows.

---

### Bottom Line
This tutorial provides a practical, step-by-step workflow for generating calibrated virtual populations from NLME models and conducting ISCTs. The key methodological contributions are the use of copulas for multivariate parameter sampling that preserves estimated correlations and a MILP-based calibration algorithm to match target population distributions. The workflow is demonstrated on two models of varying complexity, offering a template for practitioners seeking to integrate NLME-based ISCTs into MIDD.

---

---

## 📊 Figures

![A 7-step workflow for performing ISCTs using NLME models. **Satisfactory results may vary depending on the specific questions being addressed, necessitating veri]({{ site.baseurl }}/assets/digests/2026-07-30-a-step-by-step-workflow-for-performing-in-silico-clinical-trials-with-nonlinear/figures/fig_01.jpg)

![Proposed method to obtain plausible patients from NLME models. Correlation coefficients between parameter values of a NLME model may refer to Pearson, Spearman,]({{ site.baseurl }}/assets/digests/2026-07-30-a-step-by-step-workflow-for-performing-in-silico-clinical-trials-with-nonlinear/figures/fig_02.jpg)

![Virtual population calibration algorithm for discrete distributions (adapted from Cortés-Ríos et al. 55). This algorithm consists of five main steps: (1) First]({{ site.baseurl }}/assets/digests/2026-07-30-a-step-by-step-workflow-for-performing-in-silico-clinical-trials-with-nonlinear/figures/fig_03.jpg)

![Model schematic and sampled parameters of the tumor burden model. Tumor burden model schematic, changes in normalized tumor diameter at timet() is defined by gro]({{ site.baseurl }}/assets/digests/2026-07-30-a-step-by-step-workflow-for-performing-in-silico-clinical-trials-with-nonlinear/figures/fig_04.jpg)

![In silicoclinical trial results of the tumor burden model. ISCT design schematic (A) and model predictions (median, Q1–Q3) for control and treatment arm (B). Per]({{ site.baseurl }}/assets/digests/2026-07-30-a-step-by-step-workflow-for-performing-in-silico-clinical-trials-with-nonlinear/figures/fig_05.jpg)

![HBV model and estimated parameters (adapted from Cortés-Ríos et al. 55). (A) Model schematic of the HBV QSP model including all the relevant physiological inte]({{ site.baseurl }}/assets/digests/2026-07-30-a-step-by-step-workflow-for-performing-in-silico-clinical-trials-with-nonlinear/figures/fig_06.jpg)

![Plausible patient selection and distribution of HBsAg at baseline before and after Vpop calibration (adapted from Cortés-Ríos et al. 55). In the upper panel, p]({{ site.baseurl }}/assets/digests/2026-07-30-a-step-by-step-workflow-for-performing-in-silico-clinical-trials-with-nonlinear/figures/fig_07.jpg)

![In silicoclinical trial mimicking Everest trial reproduces HBsAg loss dependency on HBsAg at baseline and gives mechanistic insights for FC achievement (figures]({{ site.baseurl }}/assets/digests/2026-07-30-a-step-by-step-workflow-for-performing-in-silico-clinical-trials-with-nonlinear/figures/fig_08.jpg)