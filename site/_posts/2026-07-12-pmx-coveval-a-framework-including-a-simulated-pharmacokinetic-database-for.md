---
layout: post
title: "PMX-CovEval: A Framework Including a Simulated Pharmacokinetic Database for Covariate Model Building Methods Benchmarking"
date: 2026-07-12
authors: "Karlsen M, Fabre D, Marchionni D, Calvier EAM"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025"
doi: "N/A"
paper_type: methodology
tags: [methodology, covariate-analysis, clinical-trial-design]
excerpt_text: "PMX-CovEval provides 127 simulated population PK datasets with corresponding NONMEM and Monolix model files and EBEs, designed for standardized benchmarking of covariate model building methods. The scenarios systematically vary structural, statistical, covariate, and trial design factors, enabling comprehensive evaluation of method performance. Initial benchmark results for COSSAC and covSAMBA are included."
pdf_path: "/assets/digests/2026-07-12-pmx-coveval-a-framework-including-a-simulated-pharmacokinetic-database-for/PMx_PMXCovEval_A_Framework_Including_a_Simul_20260712.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
PMX-CovEval provides 127 simulated population PK datasets with corresponding NONMEM and Monolix model files and EBEs, designed for standardized benchmarking of covariate model building methods. The scenarios systematically vary structural, statistical, covariate, and trial design factors, enabling comprehensive evaluation of method performance. Initial benchmark results for COSSAC and covSAMBA are included.

---

### Executive Summary
This paper introduces PMX-CovEval, a publicly available framework comprising 127 simulated population PK datasets designed for standardized benchmarking of covariate model building (CMB) methods. The scenarios systematically vary structural models (1- and 2-compartment with linear, Michaelis-Menten, or mixed elimination), statistical models (IIV levels, residual error, correlation), covariate models (number, type, functional form, effect size, affected parameters), clinical trial populations (pooled phase I-III vs. phase I only), and available covariate sets (including correlated and time-varying covariates). The framework includes NONMEM and Monolix base model files, empirical Bayes estimates (EBEs), and initial benchmark results for COSSAC and covSAMBA. It is designed to enable reproducible, comprehensive evaluation of CMB methods and to foster community adoption for establishing a living benchmark.

---

### Scientific Context & Motivation
Covariate model building (CMB) is a critical step in population PK model development, but there is no consensus on standardized evaluation procedures for CMB methods. A recent systematic review (Karlsen et al., 2024) found that among 28 articles evaluating CMB methods, 17 used simulated PK datasets, but comparisons were limited to a few scenarios and varied between articles. This heterogeneity hinders robust comparison across publications and slows method development. PMX-CovEval addresses this gap by providing a publicly available, standardized framework with a large set of simulated datasets covering a wide range of realistic scenarios, enabling reproducible and comparable benchmarking of CMB methods.

---

## ⚡ Methodological Snapshot
PMX-CovEval is a simulation-based benchmarking framework for covariate model building (CMB) methods in population PK. It provides 127 simulated datasets, each corresponding to a unique combination of structural model (1- or 2-compartment with linear, MM, or mixed elimination), statistical model (varying IIV on $CL$ and $V$, residual error, correlation), covariate model (number, type, functional form, effect size, affected parameters), clinical trial population (pooled phase I-III or phase I only), and available covariate set (including correlated and time-varying covariates). The framework includes NONMEM and Monolix base model files and EBEs, enabling immediate use of standard CMB tools (e.g., SCM, COSSAC, covSAMBA) as well as EBE-based regression methods (e.g., machine learning). Initial benchmark results for COSSAC and covSAMBA are provided, and the framework is designed for community adoption to establish a living benchmark.

---

## 📐 Statistical Framework
The framework is based on non-linear mixed effects models (NLMEM) for population PK. The structural models include 1-compartment (first-order elimination) and 2-compartment models with first-order, Michaelis-Menten, or mixed first-order/MM elimination. The statistical model includes proportional residual error, log-normal IIV on $CL$ and $V$ (with correlation), and additive IIV on other parameters. Covariate effects are modeled using exponential, power, linear, or Emax functions. The simulation uses the R campsis package with mrgsolve. The framework does not introduce new statistical theory but provides a controlled environment for evaluating CMB methods under known ground truth.

---

### Estimator Behavior
The paper does not focus on estimator properties per se, but the quality control SSE results provide relevant information. For the 9 least identifiable scenarios, relative RMSE of $\theta$ parameters was below 30% in 6 scenarios but reached 45%, 156%, and 265% in 3 cases, indicating potential convergence issues or near-non-identifiability under high IIV or complex structural models (e.g., MM elimination). $\omega$ parameter relative RMSE was at most 64%. Relative bias reached 62% for $\theta$s and 45% for $\omega$s. These results highlight that even in a controlled simulation setting, some scenarios pose estimation challenges, which is important for benchmarking CMB methods that rely on base model estimates. The empirical power to detect the true covariate set in the phase I subset was 99% (1 covariate), 69.6% (2 covariates), and 34.4% (3 covariates), demonstrating the impact of statistical power on CMB performance.

---

### Validation Design
The framework includes several quality control steps: (1) Successful minimization and acceptable RSE (<50%) of base model parameter estimates were checked for all scenarios. (2) Stochastic simulation and estimation (SSE) was performed on 9 scenarios with the least expected identifiability (highest IIV or complex structural models) to assess parameter recovery (relative RMSE and bias). (3) Complete PK profiles until steady state were simulated for three hypothetical individuals (5th, 50th, 95th percentiles of covariates) to visually confirm plausibility. (4) Empirical power to detect the true covariate model was assessed for the phase I subset using SSE with 1000 samples and likelihood ratio tests. Results showed that most scenarios are identifiable, but some (e.g., with high IIV or MM elimination) have high relative RMSE (up to 265% for $\theta$s). Empirical power in phase I data was 99% (1 covariate), 69.6% (2 covariates), and 34.4% (3 covariates).

---

### Comparison to Alternatives
PMX-CovEval addresses a critical gap: the lack of a standardized evaluation framework for CMB methods. Previously, comparisons across publications were hindered by heterogeneous datasets, metrics, and reporting. Existing simulated data studies typically used only a few scenarios, limiting generalizability. PMX-CovEval provides a comprehensive, multi-scenario benchmark that allows direct comparison of methods (e.g., SCM, COSSAC, covSAMBA, ML-based approaches) under identical conditions. It also includes initial benchmark results for COSSAC and covSAMBA, facilitating future comparisons without re-running all methods. The framework's systematic variation of factors (structural model, statistical model, covariate model, trial population, covariate set) enables sensitivity analyses that were previously impractical.

---

### Implementation Guidance
The framework is immediately usable. Users can download the GitHub repository containing the scenario table, simulated datasets (CSV), NONMEM control streams (.mod), Monolix project files (.mlxtran), and EBEs (CSV). For CMB evaluation, users can run their method of choice (e.g., SCM via PsN, COSSAC, covSAMBA, or custom ML approaches) on the datasets and compare results against the true covariate model. The authors recommend reporting TPR, TNR, PPV, correct_model, BIC, rMPE, rRMSE, and iRSE50. Computational cost will vary by method and scenario; the authors suggest re-running at least one benchmark method under the new environment for time comparisons. The framework is designed for NONMEM and Monolix, but datasets are in CSV format and can be used with any software (e.g., nlmixr2, Pumas).

---

## 📊 Key Findings
The paper presents the PMX-CovEval framework, not a single finding from a study. Key features include: (1) 127 simulated PK datasets covering a wide range of realistic scenarios; (2) systematic variation of structural models (4), statistical models (13), covariate models (35), clinical trial populations (2), and covariate sets (3); (3) inclusion of base model files for NONMEM and Monolix, and EBEs; (4) initial benchmark results for COSSAC and covSAMBA; (5) quality control showing that most scenarios are identifiable (relative RMSE <30% for $\theta$s in 6/9 challenging scenarios) and that empirical power to detect true covariates in phase I data decreases with number of covariates (99% for 1, 69.6% for 2, 34.4% for 3).

---

### Strengths & Limitations

#### Strengths
- Provides a large, systematic, and reproducible set of simulated datasets (127 scenarios) covering a wide range of realistic factors.
- Includes base model files for both NONMEM and Monolix, lowering the barrier for adoption.
- Provides EBEs, enabling use of EBE-based regression methods (e.g., machine learning).
- Includes initial benchmark results for COSSAC and covSAMBA, facilitating future comparisons.
- Follows FAIR principles (Findable, Accessible, Interoperable, Reusable).
- Quality control includes SSE for identifiability checks and visual inspection of PK profiles.
- Proposes a standardized set of performance metrics (TPR, TNR, PPV, BIC, rMPE, rRMSE, iRSE50) for reporting.

#### Limitations (Acknowledged by Authors)
- Simulated data rely on predefined models and assumptions that may not capture real-world complexity.
- Real datasets remain essential for assessing practical relevance but are rarely shared due to regulatory constraints.
- The framework is based on a single molecule's PK parameters.
- The number of scenarios (127) is a trade-off between comprehensiveness and practical usability.

#### Limitations (Expert Review)
- All scenarios are based on a single set of population PK parameters from one molecule; results may not generalize to drugs with different PK properties (e.g., different absorption, distribution, or elimination characteristics).
- The clinical trial design is fixed (pooled phase I-III studies); scenarios with different designs (e.g., pediatric, sparse sampling, adaptive designs) are not included.
- The framework does not include scenarios with model misspecification (e.g., wrong structural model, misspecified residual error structure), which is common in real-world analyses.
- The initial benchmark includes only two methods (COSSAC and covSAMBA); more methods are needed for a comprehensive benchmark.
- The quality control SSE results show that some scenarios have high relative RMSE (up to 265% for $\theta$s), indicating potential identifiability issues that may affect CMB method evaluation.

#### Generalizability
The framework is based on a single molecule's PK parameters and a specific clinical trial design (pooled phase I-III studies for a small molecule). While the scenarios cover a wide range of realistic variations, generalizability to other drugs (e.g., monoclonal antibodies, prodrugs) or different trial designs (e.g., sparse sampling in pediatrics) may be limited. The authors acknowledge this and suggest future extensions.

---

### Key Equations

**Exponential covariate model**

{% raw %}
$$
\text{TVCL} = \theta_{\text{CL}} \cdot \prod_{k} \left(\frac{\text{cov}_k}{\text{ref}_k}\right)^{\theta_{\text{cov}_k}}
$$
{% endraw %}

Exponential covariate model used in the reference scenarios (covm 2-4) and many others.

**Power covariate model**

{% raw %}
$$
\text{TVCL} = \theta_{\text{CL}} \cdot \prod_{k} \left(\frac{\text{cov}_k}{\text{ref}_k}\right)^{\theta_{\text{cov}_k}}
$$
{% endraw %}

Power covariate model used in scenarios 5-7.

**Linear covariate model**

{% raw %}
$$
\text{TVCL} = \theta_{\text{CL}} \cdot \left(1 + \sum_{k} \theta_{\text{cov}_k} \cdot (\text{cov}_k - \text{ref}_k)\right)
$$
{% endraw %}

Linear covariate model used in scenarios 8-10.

**Emax covariate model**

{% raw %}
$$
\text{TVCL} = \theta_{\text{CL}} \cdot \left(1 + \frac{E_{\text{max}} \cdot (\text{cov}_k - \text{ref}_k)}{\text{EC}_{50} + (\text{cov}_k - \text{ref}_k)}\right)
$$
{% endraw %}

Emax covariate model used in scenarios 11-13.

---

### Figures & Tables

- **Figure 1**: Process used to build the pooled clinical trial population from NHANES covariates and a pooled clinical trial design (phase I and III studies).
  - *Significance*: Illustrates the construction of the virtual population and clinical trial design, which is the foundation for all simulated datasets.
- **Figure 2**: Visual representation of the combinations of structural model, statistical model, covariate model, clinical trial population, and available covariates that define the 127 scenarios.
  - *Significance*: Provides an overview of the scenario space, showing how different factors are varied systematically.
- **Figure 3**: Workflow for generating all framework components: scenario table, simulated datasets, base model files, and EBEs.
  - *Significance*: Summarizes the generation process, highlighting the use of R campsis, Python Pharmpy, and R lixoftConnectors.
- **Table 1**: Details of the five clinical studies (phase I and III) including number of patients, samples, sampling schedules, and dosing regimens.
  - *Significance*: Defines the clinical trial design used for simulation, which mimics real-world data available at the time of drug labeling.

---

### Code & Reproducibility Assessment
The framework is fully reproducible: all simulated datasets, NONMEM control streams, Monolix project files, EBEs, and a scenario table are publicly available in a GitHub repository. The R package campsis was used for simulation, and Python Pharmpy and R lixoftConnectors for model file generation. Quality control included SSE for identifiability checks and visual inspection of PK profiles. The repository follows FAIR principles.

---

### Supplementary Materials
File S1: Sampling schedules overlaid on PK profiles for all structural model-dose combinations. File S2: Details on time-varying CLCR creation and correlation matrix of continuous baseline covariates. File S3: Justification of numerical values chosen in scenarios, including population parameter values and derivation. File S4: Formulas and definitions of proposed performance metrics (TPR, TNR, PPV, correct_model, BIC, rMPE, rRMSE, iRSE50).

---

### Future Directions
Future work should focus on community adoption and expansion of the benchmark with additional CMB methods (e.g., SCM, LASSO, random forests, deep learning). Extending the framework to include scenarios with different drug properties (e.g., monoclonal antibodies, prodrugs), more complex absorption models, or multiple endpoints (PD) would increase generalizability. The framework could also be adapted for evaluating covariate model building in non-linear mixed effects models for other therapeutic areas. A systematic comparison of the proposed metrics (TPR, TNR, PPV, BIC, rMPE, rRMSE) across methods would help identify the most informative performance measures.

---

### Expert Commentary
PMX-CovEval is a timely and well-designed resource that addresses a critical methodological gap in pharmacometrics. The systematic coverage of 127 scenarios, while not exhaustive, provides a balanced trade-off between comprehensiveness and practical usability. The inclusion of both NONMEM and Monolix files lowers the barrier for adoption. The initial benchmark results for COSSAC and covSAMBA are a valuable starting point. The framework's success will depend on community adoption; the authors' call for standardized metrics (TPR, TNR, PPV, BIC, etc.) is sensible. A potential limitation is that all scenarios are based on a single molecule's PK parameters, which may limit generalizability to other drugs with different PK properties. Future extensions could include scenarios with different absorption models, metabolite kinetics, or more complex IIV structures (e.g., on multiple parameters simultaneously). The framework's FAIR compliance is commendable and should facilitate its use.

---

### Bottom Line
PMX-CovEval provides a much-needed, standardized, and reproducible simulation-based benchmarking framework for covariate model building methods in population PK. Its 127 scenarios systematically vary structural, statistical, covariate, and trial design factors, enabling rigorous evaluation of method performance (sensitivity, specificity, precision) under controlled conditions. The framework is immediately usable with NONMEM and Monolix, includes base model files and EBEs, and comes with initial benchmark results for COSSAC and covSAMBA. It is a foundational resource for method developers and a strong candidate for community adoption to establish consensus in CMB evaluation.

---

---

## 📊 Figures

![Process used to build the pooled clinical trial population.]({{ site.baseurl }}/assets/digests/2026-07-12-pmx-coveval-a-framework-including-a-simulated-pharmacokinetic-database-for/figures/fig_01.png)