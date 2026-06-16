---
layout: post
title: "Integrating Population Approaches With Physiologically Based Pharmacokinetic Models: A Novel Framework for Parameter Estimation"
date: 2026-06-16
authors: "Teutonico D, Marchante D, Ngo L, Lavielle M"
journal: "CPT: Pharmacometrics & Systems Pharmacology (2026) 15(1), 1–14"
doi: "10.1002/psp4.70186"
paper_type: methodology
tags: [methodology, pbpk, covariate-analysis]
excerpt_text: "This tutorial introduces a computational framework (popWB-PBPK) that couples whole-body PBPK models with the SAEM algorithm via an adaptive parameter grid and linear interpolation, enabling population estimation of inter-individual variability and covariate effects on physiologically relevant parameters. A >2000-fold reduction in runtime versus standard coupling is demonstrated, with theophylline as a case study."
pdf_path: "/assets/digests/2026-06-16-integrating-population-approaches-with-physiologically-based-pharmacokinetic/PMx_Integrating_Population_Approaches_With_P_20260616.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This tutorial introduces a computational framework (popWB-PBPK) that couples whole-body PBPK models with the SAEM algorithm via an adaptive parameter grid and linear interpolation, enabling population estimation of inter-individual variability and covariate effects on physiologically relevant parameters. A >2000-fold reduction in runtime versus standard coupling is demonstrated, with theophylline as a case study.

---

### Executive Summary
This work bridges two established modeling paradigms—mechanistic PBPK and nonlinear mixed-effects (NLME) modeling—by proposing a computationally feasible estimation framework for whole-body PBPK models using a modified SAEM algorithm. The key innovation is a subject-specific adaptive parameter grid that pre-computes model outputs at selected points, then uses linear interpolation in place of full ODE evaluations during SAEM iterations, reducing runtime from hours to seconds for a two-parameter estimation. The method is implemented in the open-source R package saemixPBPK, which interfaces the OSP Suite (PK-Sim) with saemix. Using a simulated theophylline dataset with 24 subjects, the framework recovered CYP1A2-specific clearance (true $0.00671$ $\text{min}^{-1}$, estimated $0.00701$ $\text{min}^{-1}$, RSE 10%) and lipophilicity (true $0.91$, estimated $0.934$, RSE 4%), as well as a smoking covariate effect (true $1.28$, estimated $1.27$, $p=0.04$). The approach preserves the full physiological structure of the PBPK model while estimating population parameters, variability, and uncertainty in a single step.

---

### Scientific Context & Motivation
Parameter estimation in whole-body PBPK models is notoriously difficult due to the large number of parameters, the computational burden of solving stiff ODE systems for many subjects, and the common practice of fixing most parameters to literature values. Standard NLME methods like SAEM, while powerful for popPK models, require repeated model evaluations across all individuals and iterations, making direct application to PBPK models computationally prohibitive. Current practice often resorts to naive-pooled analyses that ignore IIV or two-stage approaches that provide biased estimates. This tutorial addresses the absence of a practical, accessible framework for integrating population estimation with mechanistic full-body PBPK models, enabling simultaneous estimation of physiological parameters, IIV, covariate effects, and uncertainty.

---

## ⚡ Methodological Snapshot
The popWB-PBPK framework couples a whole-body PBPK model (from the OSP Suite, PK-Sim) with the SAEM algorithm for nonlinear mixed-effects modeling. The central innovation is a subject-specific adaptive parameter grid: for each subject, a limited set of parameter values is selected around initial estimates, and the full ODE-based PBPK model is evaluated only at those grid points. During SAEM iterations, predictions for any parameter vector are obtained by linear interpolation between grid points, reducing ODE evaluations from thousands to tens. The grid is built adaptively: it starts from a user-defined range, then refines or coarsens the spacing based on a linearity deviation criterion (default 5% relative error). An average grid across a subset of subjects is used for the population, and it is extended per subject if needed. The implementation in the saemixPBPK R package interfaces ospsuite (model simulation) and saemix (SAEM engine). The workflow has four steps: (1) create subject-specific physiology from demographics; (2) create a vector of PBPK simulations; (3) (optional) compute the adaptive grid via gridfuncd(); (4) run SAEM estimation via saemixModelPBPK(). Post-estimation, the interpeval() function validates interpolation accuracy.

---

## 📐 Statistical Framework
The statistical model follows the NLME framework: $y_{ij} = f(\theta_i, t_{ij}) + \varepsilon_{ij}$, where $f$ is the PBPK model, $\theta_i = g(\mu, \beta, \eta_i)$ with $\eta_i \sim N(0, \Omega)$, and $\varepsilon \sim N(0, \Sigma)$. The key assumption is that the PBPK model output $f(\theta, t)$ is sufficiently smooth in $\theta$ to allow accurate linear interpolation between pre-computed grid points. The method relies on the standard SAEM assumptions (data missing at random, proper MCMC convergence) as implemented in saemix. The adaptive grid introduces additional assumptions: (1) the parameter space can be bounded a priori (default $0.05\times$ to $10\times$ initial value); (2) second-order (curvature) terms are negligible relative to the tolerance when using linear interpolation; (3) the optimal grid for a subset of 6 subjects is representative for the whole population. The covariate model distinguishes between 'mechanistic covariates' (demographics → physiology, handled outside SAEM) and 'empirical covariates' (e.g., smoking → clearance, handled within SAEM), preventing double-counting. The error model used is proportional (CV 30%), consistent with typical PK assay error.

---

### Estimator Behavior
Empirically, the SAEM estimator with adaptive grid recovered population fixed effects (CYP1A2 clearance, lipophilicity) with low bias (<5%) and good precision (RSE 4–10%). The IIV estimate ($\omega^2$) for clearance showed higher RSE (35%), attributable to the small sample ($n=24$). The covariate effect estimate was nearly unbiased (1.27 vs. 1.28). Convergence properties of SAEM were not explicitly studied; the algorithm used default saemix settings. A key concern is interpolation bias: the linear approximation may introduce systematic errors if the true response surface has strong curvature near the final estimates. The authors provide a diagnostic (interpeval) to check this post-hoc, but no quantitative bounds on how interpolation tolerance ($\epsilon=5\%$) translates to bias in parameter estimates or their standard errors. The run-to-run Monte Carlo variability (not reported) would be useful to assess. The method's efficiency is extraordinary (>2000× faster), but this comes at the cost of accepting a controlled approximation error.

---

### Validation Design
Validation uses a single simulated dataset based on theophylline: 24 subjects (12 controls + 12 smokers), PK-Sim PBPK model, CYP1A2-specific clearance with CV 32%, a 28% smoking effect on clearance, lipophilicity fixed, and 30% proportional residual error. Two fixed effects (clearance and lipophilicity), one IIV on clearance, one covariate effect, and one error parameter were estimated. Model diagnostics included individual fits, VPC (1000 simulations), and Wald test for the covariate effect ($p=0.04$). Grid accuracy was validated by comparing full model predictions vs. interpolated predictions at grid extremes and at the final EBEs, with a 5% tolerance criterion. No cross-validation, bootstrap, or independent test set was used. No comparison to alternative methods (e.g., naive-pooled, two-stage, or using the grid without SAEM) was performed to quantify the value added by the full NLME approach. The runtime comparison (Table 1) is informative but limited to a single-parameter estimation scenario.

---

### Applicability Boundaries
The method is best suited when: (1) a whole-body PBPK model exists in the OSP Suite format; (2) individual concentration-time data are available for ≥12 subjects; (3) no more than 5 fixed effects need estimation (grid calculation becomes a bottleneck otherwise); (4) the parameter space can be reasonably bounded (default $0.05\times$ to $10\times$ initial values); (5) the model output is smooth enough for linear interpolation within 5% tolerance. The method is less suitable for: (1) models with stiff dynamics where small parameter changes cause large, nonlinear prediction shifts; (2) cases where many parameters (>5) must be estimated simultaneously; (3) studies with complex multi-output estimation (parent+metabolite, PK+PD) not yet supported; (4) sparse data (1–2 samples per subject) where individual predictions are poorly constrained; (5) scenarios where the PBPK model requires >5 minutes per evaluation per subject, making even grid evaluation time-prohibitive. The requirement for demographic covariates (age, sex, height, weight, ethnicity) to generate subject-specific physiology may limit applicability to datasets with incomplete covariate records.

---

### Comparison to Alternatives
Compared to the current standard practice of naive-pooled fitting (fit to average data or fit individuals separately), the popWB-PBPK approach provides unbiased population estimates, IIV, and uncertainty quantification, and can recover covariate effects. Compared to more computationally intensive Bayesian methods (MCMC, Stan, or Bayesian PBPK frameworks), the SAEM+grid approach offers much faster runtimes but potentially less flexibility in prior specification and posterior exploration. Compared to non-parametric or machine-learning-based PBPK emulators, the proposed method maintains the physiological structure of the model. The SAEM algorithm itself is standard; the novelty is the adaptive grid that reduces ODE calls. The authors do not compare against other fast NLME-PBPK coupling approaches (e.g., using ODE solvers with fast sensitivity analysis, or using automatic differentiation to compute gradients). The key advantage is practical: it works within existing Open Systems Pharmacology infrastructure. A disadvantage is the lack of formal guarantees on interpolation error propagation—users must rely on the interpeval diagnostic post-hoc.

---

### Implementation Guidance
The framework is implemented in the saemixPBPK R package (GitHub). Dependencies: ospsuite (OSP Suite interface), saemix (CRAN), and a PBPK model in .pkml format (e.g., from PK-Sim). Key functions: create_individuals() (generates subject physiology from demographics), createSimulations() (couples subjects to PBPK model), gridfuncd() (computes adaptive grid with tolerance $\epsilon$, default 5%, and range $0.05\times$–$10\times$ initial values), saemixModelPBPK() (runs SAEM with or without grid). Practical tips: (1) Store grid evaluations (file argument) to reuse across covariate models without recomputation. (2) Run interpeval() post-estimation to verify grid accuracy; if deviations >5%, increase grid density (lower tolerance) or recalculate around updated estimates. (3) Start with ≤3 parameters to gauge feasibility. (4) For time-varying covariates or complex dosing, ensure study designs are correctly linked in the subject simulations. Computational cost: for a 2-parameter estimation with 24 subjects, total runtime ~ $0.04$ hr (≤3 min) with grid, compared to $12.6$ hr without. Scaling: $O(n_{subjects} \times n_{grid\_{points}} \times n_{iterations})$ but grid points are typically 10–20 per parameter. The package currently supports single-output estimation only; extension to multiple outputs is planned.

---

## 📊 Key Findings
1. The popWB-PBPK framework recovered CYP1A2-specific clearance (pop. estimate $0.00701$ $\text{min}^{-1}$, true $0.00671$) and lipophilicity ($0.934$ vs. $0.91$) with RSEs ≤10%. 2. Smoking covariate effect was estimated at $1.27$ (true $1.28$, $p=0.0398$). 3. IIV on intrinsic clearance ($\omega^2$) was estimated as $0.0941$ (true $0.103$, RSE 35%), reasonable given $n=24$. 4. The adaptive parameter grid combined with linear interpolation reduced runtime by ~2000-fold relative to default ospsuite+saemix coupling ($12.6$ h $\rightarrow$ $0.006$ h for a single fixed-effect estimation). 5. Grid interpolation accuracy was verified to remain within a 5% tolerance. 6. The framework correctly handles demographic covariates independently (via PBPK physiology) and empirical covariates (via NLME), avoiding double-counting of covariate effects.

---

### Strengths & Limitations

#### Strengths
- Provides a practical, computationally feasible solution to a long-standing problem (NLME estimation with full WB-PBPK models).
- The adaptive grid approach is well-reasoned and validated: it focuses computational effort where non-linearity is highest and maintains user-controlled tolerance (default 5%).
- Demonstrates a >2000-fold speed improvement over naive implementation, making the approach practical for typical drug development timelines.
- Clear separation of mechanistic covariates (demographics used to generate subject-specific physiology via PK-Sim) and empirical covariates (e.g., smoking status) avoids confounding in NLME estimation.
- Open-source implementation (saemixPBPK R package) with public GitHub repository, integrated with established tools (ospsuite, saemix).
- The workflow is modular and generalizable to any OSP-compatible PBPK or QSP model.
- Provides diagnostic tools (interpeval function) to validate interpolation accuracy post-estimation.

#### Limitations (Acknowledged by Authors)
- Grid calculation benefits diminish when more than ~5 fixed effects are estimated simultaneously.
- Precomputed grids cannot be reused if dosing regimen or observation times change.
- The case study uses only 24 simulated subjects; real-world performance with sparse data or many parameters remains to be characterized.
- The grid is built around initial parameter values; significant deviation from initials may require grid recalculation and re-estimation.

#### Limitations (Expert Review)
- No formal theoretical analysis of interpolation bias or impact on SAEM convergence properties is provided; empirical assessment relies on a single simulated dataset.
- The grid uses a fixed 5% tolerance; the sensitivity of final estimates to this tolerance (e.g., 1% vs. 10%) was not explored.
- Runtime comparisons (Table 1) are for a single parameter; scaling behavior and wall-clock time for realistic multi-parameter (2–5) estimation in large datasets ($n>100$) are not reported.
- The method assumes that a limited number of parameters (<5) are estimable from typical concentration-time data; this is consistent with PBPK practice but may limit scope for complex models with many uncertain parameters.
- No comparison was made against alternative fast NLME approaches for PBPK (e.g., gradient-based optimization via ODE adjoint methods, or machine learning emulators).
- The SAEM algorithm used is the standard version from saemix; no modifications were made to the stochastic or MCMC steps to account for the PBPK model structure (e.g., stiffness).

#### Generalizability
The method is generalizable to any PBPK or QSP model compatible with the OSP Suite and any drug with available concentration-time data. However, performance will depend on model stiffness, number of parameters to estimate, and dataset size. The framework currently supports only single-output (e.g., plasma concentration) estimation; extension to multiple outputs is noted as future work. The approach is likely most valuable for drugs where prior PBPK models exist but need calibration with clinical PK data and estimation of IIV.

---

### Key Equations

**Linear interpolation for grid-based approximation**

{% raw %}
$$
\hat{y}(\theta) = y(\theta_i) + \frac{y(\theta_{i+1}) - y(\theta_i)}{\theta_{i+1} - \theta_i} (\theta - \theta_i)
$$
{% endraw %}

During SAEM iterations, the full ODE solution y(θ) for a given parameter vector θ is approximated by linear interpolation between pre-computed grid points (θ_i, y(θ_i)), avoiding costly re-evaluation of the PBPK ODE system.

**Deviation from linearity criterion for grid adaptation**

{% raw %}
$$
D(\theta_i, \theta_j) = \max_t \left| \frac{y(t; \theta_j) - \hat{y}(t; \theta_j)}{y(t; \theta_j)} \right| < \epsilon
$$
{% endraw %}

This criterion ensures that the maximum relative prediction error between the full model y(t; θ_j) and the linearly interpolated value ŷ(t; θ_j) at any time point t remains below a preset threshold ε (default 5%), guiding the adaptive placement of grid points.

---

### Figures & Tables

- **Figure 1**: Conceptual comparison between classical naive-pooled PBPK fitting (left) and the proposed popWB-PBPK approach (right).
  - *Significance*: Highlights the key paradigm shift—from pooling data across individuals to a hierarchical framework that retains individual physiological covariates and estimates IIV.
- **Figure 2**: Diagram contrasting model components in standard popPK (left) vs. popWB-PBPK (right).
  - *Significance*: Shows how demographic covariates are integrated differently: in popPK they enter as empirical relationships; in popWB-PBPK they generate subject-specific physiology via PK-Sim, ensuring mechanistic plausibility.
- **Figure 3**: Schematic of covariate integration types in the SAEM-PBPK approach.
  - *Significance*: Clarifies the dual role of covariates: mechanistic (demographics → physiology) and empirical (e.g., smoking → clearance), avoiding double inclusion.
- **Figure 4**: Complete workflow diagram with main package functions: create_individuals, createSimulations, gridfuncd, saemixModelPBPK, and interpeval.
  - *Significance*: Serves as a practical guide for users implementing the framework; maps each conceptual step to a specific package function.
- **Figure 5**: Diagnostic plots: (A) Individual fits using final EBEs; (B) VPC with 5th/50th/95th percentiles (shaded: 95% CI from 1000 simulations).
  - *Significance*: Demonstrates adequate model fit and captures both central tendency and variability, validating the popWB-PBPK estimation for the theophylline case.
- **Figure 6**: Grid interpolation accuracy validation: (A) full vs. interpolated predictions at grid extremes; (B) grid points with final estimate; (C) EBE predictions comparison; (D) scatter plot of approximated vs. full predictions with 5% tolerance zone.
  - *Significance*: Critical for establishing the reliability of the grid+interpolation approach; shows that errors remain within the predefined 5% tolerance.
- **Table 1**: Runtime comparison (hours) across four coding configurations for single-parameter estimation.
  - *Significance*: Quantifies the >2000-fold speedup achieved by combining batch simulation with the adaptive grid, making NLME estimation with PBPK models practical.
- **Table 2**: Parameter estimates vs. true values for the theophylline case study.
  - *Significance*: Demonstrates the method's accuracy in recovering true parameter values, including the smoking covariate effect (estimated $1.27$ vs. true $1.28$).

---

### Code & Reproducibility Assessment
The saemixPBPK R package is publicly available on GitHub. Supporting Information includes R code and the simulated dataset for the theophylline case study. The package interfaces with ospsuite (OSP Suite) for PBPK simulation and saemix (CRAN) for the SAEM algorithm. All dependencies are open-source. The paper provides sufficient detail to reproduce the presented results, though the exact implementation of the adaptive grid algorithm (e.g., stopping criteria for linearity deviation) is described algorithmically rather than with full mathematical pseudocode.

---

### Future Directions
The authors indicate plans to (1) extend the workflow to multiple outputs (e.g., parent+metabolite, PK+PD), (2) assess grid performance under varying conditions, (3) improve tools for quality assessment of parameter estimates. Additional needed work includes: formal testing of interpolation bias across parameter spaces, exploration of tolerance threshold settings, benchmarking against alternative methods (e.g., gradient-based, approximate Bayesian computation, neural ODE emulators), and application to real-world clinical datasets with different study designs and sparser sampling.

---

### Expert Commentary
This tutorial addresses a genuine practical bottleneck in pharmacometrics: integrating full PBPK models into NLME frameworks. The adaptive grid approach is clever—it leverages the fact that many PBPK responses are locally linear in log-parameter space, allowing efficient interpolation. However, the lack of formal investigation into how interpolation error propagates into the SAEM estimator's bias and variance is a gap; users should be aware that the 5% tolerance on predictions does not guarantee 5% tolerance on parameter estimates. The runtime improvement is impressive and will lower the barrier for adoption. The package's compatibility with the widely-used OSP ecosystem is a major strength. I consider this a valuable contribution but not yet a definitive solution; follow-up work should include a rigorous simulation study covering diverse scenarios (sparse data, many subjects, multiple parameters) and a comparison with state-of-the-art alternatives like PBPK-specific implementations of the stochastic gradient or Hamiltonian Monte Carlo.

---

### Bottom Line
For pharmacometricians and PBPK modelers seeking to estimate inter-individual variability and covariate effects from clinical data while retaining mechanistic PBPK structure, this framework offers a practical and open-source solution. The adaptive grid + interpolation approach makes NLME estimation with full PBPK models computationally feasible, with runtimes reduced from hours to minutes. However, users should carefully validate grid accuracy and be aware of the method's limitations with >5 estimated parameters. This is a significant methodological advance for confirmatory PBPK modeling in drug development.

---

---

## 📊 Figures

![Representation of the classical naïve-pool approach often used in PBPK modeling with the proposed hybrid popWB-PBPK approach implemented in this workflow using S]({{ site.baseurl }}/assets/digests/2026-06-16-integrating-population-approaches-with-physiologically-based-pharmacokinetic/figures/fig_01.jpg)

![Diagram illustrating the different model components in population PK (left) and popWB-PBPK (right). In the popWB-PBPK approach, the model is composed of a struct]({{ site.baseurl }}/assets/digests/2026-06-16-integrating-population-approaches-with-physiologically-based-pharmacokinetic/figures/fig_02.jpg)

![Schematic representation of the different types of covariates that can be included in the SAEM-PBPK approach proposed. Demographic covariates are included in the]({{ site.baseurl }}/assets/digests/2026-06-16-integrating-population-approaches-with-physiologically-based-pharmacokinetic/figures/fig_03.jpg)

![Schematic representation of the complete workflow, composed of the different steps required to perform the parameter estimation as well as the main functions ava]({{ site.baseurl }}/assets/digests/2026-06-16-integrating-population-approaches-with-physiologically-based-pharmacokinetic/figures/fig_04.jpg)

![Results of the estimation performed with the popWB-PBPK modeling approach. (A) Individual fit with the final individual parameters. (B) Visual Predictive Check o]({{ site.baseurl }}/assets/digests/2026-06-16-integrating-population-approaches-with-physiologically-based-pharmacokinetic/figures/fig_05.jpg)

![Validation of parameter grid interpolation accuracy in the saemixPBPK package. (A) Comparison of model predictions (concentrations mg/l vs. time h) from the full]({{ site.baseurl }}/assets/digests/2026-06-16-integrating-population-approaches-with-physiologically-based-pharmacokinetic/figures/fig_06.jpg)