---
layout: post
title: "OpenPMX Software for Nonlinear Mixed-Effect Models in Pharmacometrics: Precision Compared With NONMEM First-Order Conditional Estimation"
date: 2026-05-22
authors: "Douglas J. Eleveld, Jeroen V. Koomen, Jasper Stevens, Pieter J. Colin, Michel M.R.F. Struys"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70250"
paper_type: methodology
tags: [methodology, qsp, regulatory]
excerpt_text: "OpenPMX is a new, focused, open-source C software implementing the FOCE-I algorithm for nonlinear mixed-effects models. Across five benchmarking scenarios of varying complexity, OpenPMX demonstrated comparable or slightly superior parameter estimation precision and accuracy against the industry standard NONMEM 7.6. The software provides a transparent, dependency-light tool with all implementation details open for inspection and collaborative development."
pdf_path: "/assets/digests/2026-05-22-openpmx-software-for-nonlinear-mixed-effect-models-in-pharmacometrics-precision/PMx_OpenPMX_Software_for_Nonlinear_MixedEffe_20260522.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
OpenPMX is a new, focused, open-source C software implementing the FOCE-I algorithm for nonlinear mixed-effects models. Across five benchmarking scenarios of varying complexity, OpenPMX demonstrated comparable or slightly superior parameter estimation precision and accuracy against the industry standard NONMEM 7.6. The software provides a transparent, dependency-light tool with all implementation details open for inspection and collaborative development.

---

### Executive Summary
The paper introduces OpenPMX, an open-source (GPL-3.0) implementation of the First-Order Conditional Estimation with interaction (FOCE-I) method for population pharmacometric modeling. The software uses a derivative-free optimization algorithm (BOBYQA), numerical gradient calculations, and a novel $\Omega$ decomposition (correlation matrix plus log-transformed scaling) to ensure positive definiteness. Performance was benchmarked against NONMEM 7.6 using simulation–estimation studies across five scenarios (SCHNIDER, SPARSE, FENTANYL, WARFARIN, DATASIM). Results showed OpenPMX's bias and RMSE are comparable to NONMEM, often with slightly higher precision, and with generally faster runtimes. Key technical differences from NONMEM, including analytic vs. numeric derivatives and parameter encoding strategies, are transparently documented. The work fills a gap for a transparent, easily auditable FOCE-I implementation.

---

### Scientific Context & Motivation
NONMEM's FOCE-I is the de facto industry standard for population PK/PD modeling, but its encrypted source code (since v7.1) and complex, incompletely documented implementation details hinder transparency, inspection, and collaborative improvement. While alternatives like nlmixr2 exist, they carry complex dependencies. The paper presents OpenPMX to provide a transparent, minimal-dependency, open-source implementation of the FOCE-I method, enabling detailed scrutiny and accessibility without licensing fees.

---

## ⚡ Methodological Snapshot
OpenPMX implements the First-Order Conditional Estimation with interaction (FOCE-I) method for nonlinear mixed-effects models. Prediction variances ($V$) are calculated using summed squared derivatives of the model prediction w.r.t. independent residual errors. The precision matrix ($B$) is built by adding the inverse of the population random-effect covariance ($\Omega^{-1}$) to the Jacobian-transpose-Jacobian product of weighted residuals. Individual random effects ($\eta$) are obtained via an inner optimization using BOBYQA, a derivative-free trust-region algorithm. Outer optimization refines fixed effects ($\theta$), $\sigma$, and $\Omega$, also using BOBYQA, evaluating the sum of individualized objective functions. This nested optimization structure mirrors NONMEM's approach but eschews analytic gradient computations, favoring numerical differentiation throughout.

---

## 📐 Statistical Framework
The mathematical framework is standard FOCE-I with full maximum likelihood under a multivariate normal random-effects assumption. The likelihood is constructed via a Laplacian approximation around the empirical Bayes estimate of $\eta$. Observations are assumed independent conditional on $\eta$, and $\eta$ is modeled as a priori multivariate normal with covariance $\Omega$. Residual errors are assumed independent with diagonal variance $\sigma$. OpenPMX's default model encoding imposes unconstrained optimization via log-transformed population parameters, an unconstrained Cholesky-factor-based correlation matrix, and log-transformed $\Omega$ and $\sigma$ variance scalars.

---

### Estimator Behavior
Across all scenarios, OpenPMX's estimator exhibits low bias (<2% for most structural parameters) and RMSE closely tracking NONMEM. In the FENTANYL and DATASIM benchmarks, OpenPMX showed slightly more stable estimates of $\Omega$ off-diagonal elements, avoiding the occasional eigenvalue collapse seen with NONMEM. The derivative-free BOBYQA optimizer converged reliably even for the 30-parameter problem. No convergence failures were reported for OpenPMX, while NONMEM failed to calculate the determinant for one DATASIM replicate. Precision of parameter recovery was largely dictated by the intrinsic limitations of the FOCE-I approximation, not the software implementation.

---

### Validation Design
Performance was evaluated across 5 increasingly complex scenarios: (1) SCHNIDER: rich 3-compartment PK; (2) SPARSE: 4 random samples/subject, 1-compartment PK; (3) FENTANYL: 30-parameter full-block $\Omega$ 3-compartment PK; (4) WARFARIN: ODE-based PK/PD indirect response model; (5) DATASIM: a 1-compartment absorption model from a published blind benchmark. For scenarios 1–4, replicate datasets were simulated and estimated 100–500 times. Scenario 5 used the standard 100 datasets from the published study. Primary metrics were per-dataset bias, RMSE, and loss (difference in |relative error|). A Wilcoxon test assessed significance of loss. For DATASIM, scores were calculated to rank against historical methods.

---

### Applicability Boundaries
The method works well for standard population PK/PD models with continuous outcomes, heteroscedastic (proportional, additive, combined) error, and block $\Omega$ structures. It performs robustly for sparse sampling and high-dimensional random effects (up to 30 parameters). The derivative-free optimizer may be less competitive in models with rapidly stiff ODEs or where gradient information accelerates convergence. OpenPMX is not suitable for models requiring multi-level hierarchical random effects beyond standard individual-level nesting. The lack of analytic Hessian computation means standard errors are not yet available, limiting formal inference.

---

### Comparison to Alternatives
Compared to NONMEM 7.6 FOCE-I, OpenPMX provides similar or slightly better precision, with markedly faster per-model runtimes in some settings. It lacks NONMEM's analytic derivative efficiency and extensive library of advanced estimation methods (SAEM, IMP, Bayesian). Versus nlmixr2 (which also includes FOCE in R/C++), OpenPMX is syntactically simpler, has fewer dependencies, and exposes internals more directly at the cost of ecosystem maturity. Against exact-likelihood methods (SAEM, MCPEM, PEM) evaluated in DATASIM, OpenPMX's FOCE-I still underperforms in bias/RMSE, confirming the known methodological gap. The $\Omega$ decomposition allowing fixed diagonal elements with off-diagonal correlations is a unique advantage over NONMEM.

---

### Implementation Guidance
Software is available at github.com/OpenPMX under GPL-3.0 license. Minimum dependencies: gcc and GNU Scientific Library (GSL). Installation is compact and compiles on Linux, Windows (via MSYS2 or WSL2). A web interface for testing is provided at openpmx.com. Control files use C snippets with a translation tool mimicking NMTRAN. Parallelization uses pthreads/OpenMP; for shared-memory multi-core systems, typical usage is 4 threads. Default ODE solver is Runge-Kutta Prince-Dormand (GSL). Users should note the 1-based array convention in control files and the absence of standard error output. Verification scripts are included to confirm correct numerical behavior.

---

## 📊 Key Findings
1. OpenPMX consistently matched or slightly surpassed NONMEM 7.6 in precision ($|\Delta|$) across five validation scenarios, with significant gains in certain parameters. 2. In the DATASIM blind benchmark, OpenPMX ranked comparably to NONMEM versions and mid-range among exact-method competitors. 3. Runtime was generally faster for OpenPMX under default conditions (median 1.8s vs 11.7s for SCHNIDER 4-core), but full speed comparison is confounded by differing parallelism models (threads vs. file-passing). 4. The use of a derivative-free optimizer (BOBYQA) and numerical gradients did not degrade performance, even for the 30-parameter FENTANYL model. 5. The unique $\Omega$ encoding (correlation + log-scaling) ensures positive definiteness while allowing individual variance elements to be fixed with off-diagonal elements present.

---

### Strengths & Limitations

#### Strengths
- Comprehensive simulation–estimation benchmarking across five diverse PK/PD scenarios, including a challenging published blind comparison.
- Transparent documentation of all algorithmic differences from NONMEM (derivative calculations, optimizer choice, $\Omega/\sigma$ encoding).
- The correlation + log-scaling decomposition for $\Omega$ guarantees positive definiteness and improves numerical conditioning.
- Open-source (GPL-3.0) with minimal dependencies (C compiler + GSL), maximizing auditability and portability.
- Use of per-dataset loss metric ($\Delta$ difference) to assess relative precision, paired with Wilcoxon tests.
- Comparison includes both rich and sparse data, high-dimensional optimization, and ODE-based models.
- Provides a bilingual control file translation tool (C snippets in FORTRAN-like syntax) to ease adoption for NONMEM users.

#### Limitations (Acknowledged by Authors)
- Runtimes for simple models are dominated by compilation, making speed comparisons less meaningful.
- OpenPMX parallelization is limited to shared-memory machines (pthreads/OpenMP), not heterogeneous clusters like NONMEM's MPI option.
- No analytic variance-covariance matrix or standard errors, likelihood profiles, or normalized prediction error diagnostics are yet implemented.
- The FOCE algorithm itself is an approximation; the study confirms that 'exact' methods (SAEM, MCPEM) generally outperform it.
- Missing features: quantification limits, discrete observations, improved error checking in control files.

#### Limitations (Expert Review)
- The benchmarking was performed on a single OS (Ubuntu 24.04) and compiler, potentially limiting generalizability of compute-time comparisons.
- Only a single NONMEM version (7.6) was compared; no comparison with other open-source FOCE implementations like nlmixr2 or FOCE in Monolix.
- The 'loss' metric looks at absolute differences in relative error; this may obscure situations where both methods are heavily biased but in opposite directions, yet such a case was not observed.
- No systematic exploration of numerical differentiation step size sensitivity or BOBYQA tuning parameter effects; results may vary with less ideal starting values.
- Full validation metrics (e.g., diagnostics of relative covariance matrix error, coverage of confidence intervals) were not provided; comparison was limited to bias, RMSE, and determinant mismatch.

#### Generalizability
The findings are generally applicable to population PK/PD models estimated via FOCE-I with heteroscedastic error models. However, the study lacks evaluation outside PK/PD (e.g., QSP or disease progression models) and tested a limited set of covariate and error structures. The conclusions are specific to the C implementation and GSL solvers; reimplementations would require independent validation.

---

### Key Equations

**Individual FOCE-I Objective Function**

{% raw %}
$$
\mathrm{OBJFN}_k = \sum_{i=1}^{N\mathrm{obs}_k} \log(V_{k,i}) + \sum_{i=1}^{N\mathrm{obs}_k} \frac{(Y_{k,i} - DV_{k,i})^2}{V_{k,i}} + \eta_k^T \Omega^{-1} \eta_k + \log|\Omega| + \log|B_k|
$$
{% endraw %}

The core individual objective function minimized during FOCE-I estimation, combining weighted residuals, a random-effect penalty, and precision determinants.

**FOCE-I Prediction Variance**

{% raw %}
$$
V_{k,i} = \sum_{j=1}^{N_\sigma} \left( \frac{\partial Y_{k,i}}{\partial \varepsilon_j} \right)^2 \cdot \sigma_j
$$
{% endraw %}

Calculates the individual prediction variance by summing squared derivatives of the prediction w.r.t. independent residual errors, scaled by their variances.

**Precision Matrix Update**

{% raw %}
$$
B_k = \Omega^{-1} + J_k^T J_k
$$
{% endraw %}

The individualized precision matrix of the random effects, updated via the Jacobian of the normalized residual vector.

**Per-Dataset Loss of Precision**

{% raw %}
$$
\mathrm{loss}_i(\%) = 100 \cdot \left( |\Delta_{\mathrm{OpenPMX},i}| - |\Delta_{\mathrm{NONMEM},i}| \right)
$$
{% endraw %}

Comparative metric used to quantify the difference in relative estimation error between OpenPMX and NONMEM for each parameter in each replicate.

**Normalized Score for Cross-Method Ranking**

{% raw %}
$$
\mathrm{bias\ score} = 100 \cdot \frac{|\mathrm{bias}| - \min|\mathrm{bias}|}{\max|\mathrm{bias}| - \min|\mathrm{bias}|}
$$
{% endraw %}

A min-max normalization used to rank estimation methods across multiple parameters in the DATASIM benchmark (scores close to 0 are best).

---

### Figures & Tables

- **Figure 5**: Smoothed normalized densities of $|\Delta|$ and loss for the DATASIM analysis.
  - *Significance*: Shows the distribution of estimation errors for OpenPMX vs. NONMEM in the most challenging known benchmark, highlighting parameters where OpenPMX substantially outperforms (large negative loss).
- **Table 1 & Table 2**: Bias and RMSE scores for OpenPMX, NONMEM 7.6, and historical methods from the DATASIM study.
  - *Significance*: Provides ranking of OpenPMX among established methods (SAEM, MCPEM, PEM, etc.), confirming its place within the current method ecosystem.

---

### Code & Reproducibility Assessment
Full source code and simulation scripts are publicly available at the OpenPMX GitHub repository. The installation verification scripts enable users to confirm correct behavior against developer-provided outputs. The paper details all NONMEM and OpenPMX settings used.

---

### Supplementary Materials
Supplemental content provides detailed model schematics, parameter true values, initial estimates, individual $\Delta$ and loss distributions by parameter for all scenarios, and diagnostic plots showing NONMEM's tendency to collapse $\Omega$ eigenvalues towards zero in DATASIM.

---

### Future Directions
Suggested future developments by authors include: improved error-checking, normalized prediction error diagnostics, parameter uncertainty measures (standard errors, likelihood profiles), handling of quantification limits and discrete observations. Broader evaluation against exact-method competitors (SAEM, IMP) on a wider array of models should be pursued.

---

### Expert Commentary
As a senior methodologist, I find OpenPMX's decomposition of $\Omega$ into a correlation matrix and log-transformed scaling to be the most methodologically notable innovation. This encoding simultaneously guarantees positive definiteness during unconstrained optimization and allows practitioners to fix certain variance elements while estimating correlations—a capability absent in NONMEM. The decision to use numerical derivatives and the BOBYQA optimizer is a robust, low-maintenance approach that reduces implementation complexity without obvious precision costs in these benchmarks. However, the absence of standard error estimates currently limits its utility for inference; integrating a Richardson-extrapolation-based covariance estimator or bootstrap procedure would be a high-priority feature. The study's reliance on NONMEM's $SIM record for data generation introduces a subtle dependency, as both methods share the same underlying simulation engine; truly independent validation would require an external simulation tool.

---

### Bottom Line
OpenPMX is a credible, transparent, open-source replacement for NONMEM's FOCE-I method, offering comparable or slightly superior precision in typical pharmacometric applications, with the principal advantages of full source code accessibility, minimal dependencies, and a guarantee of positive-definite $\Omega$ matrices.

---

---

## 📊 Figures

![For the SCHNIDER analysis, smoothed normalized densities of left|Delta right| and mathrmloss for OpenPMX vs. NONME]({{ site.baseurl }}/assets/digests/2026-05-22-openpmx-software-for-nonlinear-mixed-effect-models-in-pharmacometrics-precision/figures/fig_01.jpg)

![For the SPARSE analysis, smoothed normalized densities of left|Delta right| and mathrmloss for OpenPMX vs. NON]({{ site.baseurl }}/assets/digests/2026-05-22-openpmx-software-for-nonlinear-mixed-effect-models-in-pharmacometrics-precision/figures/fig_02.jpg)

![For the FENTANYL analysis, smoothed normalized of left|Delta right| and mathrmloss for OpenPMX vs. NONMEM. For]({{ site.baseurl }}/assets/digests/2026-05-22-openpmx-software-for-nonlinear-mixed-effect-models-in-pharmacometrics-precision/figures/fig_03.jpg)

![For the WARFARIN analysis, smoothed normalized densities of left|Delta right| and mathrmloss for OpenPMX vs. N]({{ site.baseurl }}/assets/digests/2026-05-22-openpmx-software-for-nonlinear-mixed-effect-models-in-pharmacometrics-precision/figures/fig_04.jpg)

![For the DATASIM analysis, smoothed normalized densities of left|Delta right| and mathrmloss for OpenPMX versus]({{ site.baseurl }}/assets/digests/2026-05-22-openpmx-software-for-nonlinear-mixed-effect-models-in-pharmacometrics-precision/figures/fig_05.jpg)