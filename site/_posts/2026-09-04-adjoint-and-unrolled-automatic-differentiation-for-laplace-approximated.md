---
layout: post
title: "Adjoint and Unrolled Automatic Differentiation for Laplace-Approximated Likelihoods in Population PK and PK/PD Models"
date: 2026-09-04
authors: "Jajamovich GH, Huang W, Lin C-W, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(9)"
doi: "10.1002/psp4.70333"
paper_type: methodology
tags: [methodology]
excerpt_text: "This paper develops and benchmarks three automatic differentiation (AD)-based strategies for computing population-parameter derivatives of Laplace-approximated NLME objectives, comparing them against finite differences (FD). The FULL-implicit method, which accounts for EBE sensitivity via an adjoint linear solve, matched or improved final OFVs while reducing median wall time by ~17-fold (synthetic PK) and ~36-fold (warfarin PK/PD) relative to FD."
pdf_path: "/assets/digests/2026-09-04-adjoint-and-unrolled-automatic-differentiation-for-laplace-approximated/PMx_Adjoint_and_Unrolled_Automatic_Different_20260904.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper develops and benchmarks three automatic differentiation (AD)-based strategies for computing population-parameter derivatives of Laplace-approximated NLME objectives, comparing them against finite differences (FD). The FULL-implicit method, which accounts for EBE sensitivity via an adjoint linear solve, matched or improved final OFVs while reducing median wall time by ~17-fold (synthetic PK) and ~36-fold (warfarin PK/PD) relative to FD.

---

### Executive Summary
The authors address a computational bottleneck in Laplace-based population PK/PD estimation: the need for repeated EBE estimation, curvature evaluation, and population-parameter derivatives. They implement three AD-based derivative methods—FULL-implicit (adjoint correction via EBE mode equations), FULL-unroll (differentiating through Newton steps), and STOP (omitting EBE sensitivity)—and compare them to central finite differences. In a synthetic one-compartment PK model with absorption/elimination ambiguity, FULL-implicit, FULL-unroll, and FD all reached the same OFV minimum within 1e-4 units, while STOP showed a small systematic gap (max ΔOFV=1.9). FULL-implicit was ~17-fold faster than FD by median wall time. In a public warfarin PK/PD ODE model, FULL-implicit achieved the lowest OFV (1624.02 vs 1628.60 for FD) and was ~36-fold faster (0.45 vs 16.3 min). The paper provides a clear theoretical framework for the adjoint correction and practical guidance for implementation.

---

### Scientific Context & Motivation
Population PK/PD NLME models require integrating out subject-specific random effects, which is analytically intractable. Laplace approximation replaces the integral with a local quadratic expansion around the EBE, but this still requires repeated EBE estimation and curvature evaluation. Population-parameter derivatives are commonly computed via finite differences, which are computationally expensive and sensitive to step-size choices, especially on flat or ill-conditioned OFV surfaces. The paper addresses the gap of efficient and robust derivative computation for Laplace-based estimation, building on emerging AD-enabled pharmacometric tools (ADPO in Phoenix NLME, Pumas).

---

## ⚡ Methodological Snapshot
The paper develops three AD-based methods for computing population-parameter derivatives of Laplace-approximated NLME objectives. FULL-implicit uses the EBE mode equation to derive an adjoint correction, solving a q×q linear system per subject to account for EBE sensitivity without forming the full sensitivity matrix. FULL-unroll differentiates through the realized Newton steps used to find EBEs, treating the computational path as fixed. STOP omits EBE sensitivity during outer differentiation, treating the EBE as constant. All methods target the same Laplace objective and are compared against central finite differences. The implementation uses forward-mode AD (ForwardDiff.jl) for random-effect gradients/Hessians and population-parameter derivatives, with L-BFGS for outer optimization and a damped-Newton solver for EBEs.

---

## 📐 Statistical Framework
The methods are based on the Laplace approximation to the marginal likelihood, which replaces the intractable integral over random effects with a local quadratic expansion around the EBE. The key statistical assumption is that the conditional posterior of the random effects is approximately Gaussian, with the Hessian of the negative log joint density providing the curvature. The FULL-implicit method leverages the implicit function theorem on the EBE first-order condition to derive the sensitivity of the EBE to population parameters, yielding an exact gradient of the Laplace objective. The STOP method is a conditional approximation that assumes EBE sensitivity is negligible, which is valid when the individual objective is nearly quadratic in random effects or IIV is small.

---

### Estimator Behavior
FULL-implicit and FULL-unroll produce gradients that are exact for the Laplace objective (up to AD precision), while STOP produces a biased gradient that omits the EBE-sensitivity correction. In the synthetic PK example, FULL-implicit, FULL-unroll, and FD all converged to the same OFV minimum within 1e-4 units, while STOP showed a small but systematic positive gap (max ΔOFV=1.9). The bias in STOP is expected to be larger when the individual objective is non-quadratic or IIV is large. FULL-unroll is computationally more expensive than FULL-implicit because it differentiates through Hessian-dependent Newton steps, but it may be useful when the derivative of the realized EBE path is desired.

---

### Validation Design
The methods were validated in two case studies. The first is a synthetic one-compartment PK model with absorption/elimination ambiguity, designed to test robustness to competing basins. 100 matched multi-start runs per method were performed, comparing final OFV and wall-clock time. The second is a public warfarin PK/PD dataset with an ODE-based effect-compartment model, comparing 10 runs per method. All methods used the same L-BFGS settings, EBE solver, and FD step sizes where applicable. The primary metrics were final OFV (under a common evaluation) and median wall-clock time.

---

### Applicability Boundaries
FULL-implicit is the most practical method for Laplace-based NLME estimation, providing exact gradients with modest computational cost (one q×q adjoint solve per subject). It is applicable to models where the Laplace approximation is valid and the EBE Hessian is positive definite. STOP is only appropriate when the EBE-sensitivity correction is negligible, such as when the individual objective is nearly quadratic or IIV is small; it should be used as a screening tool, not for final estimation. FULL-unroll is useful when the derivative of the realized EBE path is desired (e.g., truncated or difficult mode solves) but is computationally more expensive. FD remains useful diagnostically and for small problems but scales poorly with the number of population parameters and is step-size sensitive.

---

### Comparison to Alternatives
Compared to finite differences, FULL-implicit provides exact gradients (no step-size tuning) and is substantially faster (17-36x in the case studies). FULL-unroll is also exact but slower than FULL-implicit due to differentiating through Newton steps. STOP is the fastest but introduces bias.[^fc-2] Compared to sensitivity equations for ODE-defined models, AD-based methods avoid the solver burden of sensitivity equations and are more general. The paper notes that ADPO in Phoenix NLME and Pumas use AD for inner optimization, but the present work differentiates the Laplace approximation itself, providing a more complete treatment of EBE sensitivity.

---

### Implementation Guidance
The implementation uses Julia with ForwardDiff.jl for forward-mode AD, L-BFGS for population-parameter optimization, and a damped-Newton solver for EBEs. For the FULL-implicit method, the key step is solving the adjoint system H_i λ_i = 0.5 ∇_η log det H_i at the EBE. The paper recommends using forward-mode AD for low-dimensional random-effect derivatives and Hessian-related operations, and reverse-mode or vector-Jacobian products for high-dimensional population-parameter terms in larger models. The adjoint correction can be evaluated as a gradient of the scalar quantity (∇_η h_i)^T λ_i, avoiding explicit construction of the q×p mixed-derivative matrix. Code is available at https://github.com/gjajamo/laplace-paper-code.

---

## 📊 Key Findings
FULL-implicit, FULL-unroll, and FD all reached the same OFV minimum within 1e-4 units in the synthetic PK example, while STOP showed a small but systematic positive gap (max ΔOFV=1.9). Median wall times were 0.045 s (FULL-implicit), 0.108 s (FULL-unroll), 0.068 s (STOP), and 0.758 s (FD), making FULL-implicit ~17-fold faster than FD. In the warfarin PK/PD ODE model, FULL-implicit achieved the lowest best OFV (1624.02) and was ~36-fold faster by median wall time (0.45 vs 16.3 min) than FD. FULL-unroll was slower than FULL-implicit because it differentiates through Hessian-dependent Newton steps. STOP is best viewed as a low-cost screening tool, not a general replacement for full EBE-sensitivity derivatives.

---

### Strengths & Limitations

#### Strengths
- Clear theoretical derivation of the FULL-implicit adjoint correction using the EBE mode equation, avoiding explicit formation of the full sensitivity matrix
- Comprehensive comparison of three AD-based methods against FD across two distinct case studies (synthetic PK with competing basins, real warfarin PK/PD with ODE)
- Demonstrates substantial computational speedups (17-36x) while maintaining or improving OFV quality
- Provides practical implementation guidance (forward-mode AD, L-BFGS, damped-Newton EBE solver) and open-source code
- Addresses a real bottleneck in pharmacometrics: FD step-size sensitivity and cost in Laplace estimation

#### Limitations (Acknowledged by Authors)
- STOP approximation is not a general replacement for full EBE-sensitivity derivatives; it is best used as a screening tool
- Forward-mode AD was used because case-study dimensions were modest; larger models may require mixed-mode AD
- Two-stage STOP+FULL and FULL+STOP strategies did not provide consistent benefit in the warfarin analysis
- Future work needed on richer random-effects structures, covariate models, alternative EBE solvers, and post hoc covariance estimation

#### Limitations (Expert Review)
- The synthetic PK example is deliberately constructed with a specific ambiguity structure; results may not generalize to all NLME models
- The warfarin dataset is small (32 subjects) and the model is a specific ODE representation; performance may differ with other ODE solvers or model structures
- The paper does not report detailed convergence diagnostics (e.g., gradient norms, Hessian conditioning) across methods
- The comparison is limited to forward-mode AD; reverse-mode or mixed-mode implementations were not empirically tested
- The paper does not address uncertainty quantification or covariance estimation, which are critical for pharmacometric inference

#### Generalizability
The methods are general to Laplace-approximated NLME objectives and should apply to a wide range of PK/PD models, including those with nonnormal likelihoods. However, the demonstrated speedups are case-specific and may vary with model complexity, ODE solver choice, and the number of population parameters. The FULL-implicit approach is theoretically sound and should scale to larger models with mixed-mode AD, but empirical validation in higher-dimensional settings is needed.

---

### Key Equations

**Marginal likelihood**

{% raw %}
$$
p(\mathbf{y}_i|\boldsymbol{\theta}) = \int_{\mathbb{R}^q} p(\mathbf{y}_i|\boldsymbol{\eta}_i,\boldsymbol{\theta}) p(\boldsymbol{\eta}_i|\boldsymbol{\theta}) d\boldsymbol{\eta}_i
$$
{% endraw %}

The marginal likelihood for subject i, integrating over random effects, which is the target of Laplace approximation.

**Negative log joint density**

{% raw %}
$$
h_i(\boldsymbol{\eta}_i,\boldsymbol{\theta}) \equiv -\log p(\mathbf{y}_i|\boldsymbol{\eta}_i,\boldsymbol{\theta}) - \log p(\boldsymbol{\eta}_i|\boldsymbol{\theta})
$$
{% endraw %}

The negative log joint density used in the Laplace approximation; its mode is the EBE.

**Laplace approximation to -log marginal likelihood**

{% raw %}
$$
-\log p(\mathbf{y}_i|\boldsymbol{\theta}) \approx h_i(\hat{\boldsymbol{\eta}}_i,\boldsymbol{\theta}) + \frac{1}{2}\log \det H_i(\boldsymbol{\theta}) - \frac{q}{2}\log(2\pi)
$$
{% endraw %}

The Laplace approximation replaces the intractable integral with a quadratic expansion around the EBE, yielding the subject-level contribution to the objective.

**EBE sensitivity via implicit function theorem**

{% raw %}
$$
\frac{d\hat{\boldsymbol{\eta}}_i}{d\boldsymbol{\theta}} = -H_i(\boldsymbol{\theta})^{-1} \nabla_{\boldsymbol{\eta}_i\boldsymbol{\theta}}^2 h_i(\hat{\boldsymbol{\eta}}_i(\boldsymbol{\theta}),\boldsymbol{\theta})
$$
{% endraw %}

The derivative of the EBE with respect to population parameters, derived from the first-order condition of the EBE optimization.

**FULL-implicit population gradient**

{% raw %}
$$
\nabla_{\boldsymbol{\theta}} \mathcal{L}_i(\boldsymbol{\theta}) = \partial_{\boldsymbol{\theta}} h_i(\hat{\boldsymbol{\eta}}_i,\boldsymbol{\theta}) + \frac{1}{2}\partial_{\boldsymbol{\theta}} \log \det H_i(\hat{\boldsymbol{\eta}}_i,\boldsymbol{\theta}) - (\nabla_{\boldsymbol{\eta}_i\boldsymbol{\theta}}^2 h_i(\hat{\boldsymbol{\eta}}_i,\boldsymbol{\theta}))^\top \boldsymbol{\lambda}_i(\boldsymbol{\theta})
$$
{% endraw %}

The FULL-implicit gradient accounts for EBE dependence through the adjoint variable λ_i, avoiding explicit formation of the full sensitivity matrix.

**Adjoint solve for λ_i**

{% raw %}
$$
H_i(\boldsymbol{\theta}) \boldsymbol{\lambda}_i(\boldsymbol{\theta}) = \frac{1}{2} \nabla_{\boldsymbol{\eta}_i} \log \det H_i(\boldsymbol{\eta}_i,\boldsymbol{\theta}) \Big|_{\boldsymbol{\eta}_i = \hat{\boldsymbol{\eta}}_i(\boldsymbol{\theta})}
$$
{% endraw %}

The adjoint variable λ_i is obtained by solving a q×q linear system, which is the key computational step in the FULL-implicit method.

**STOP gradient (omitting EBE sensitivity)**

{% raw %}
$$
\nabla_{\boldsymbol{\theta}} \mathcal{L}_i^{\mathrm{STOP}}(\boldsymbol{\theta}) = \partial_{\boldsymbol{\theta}} h_i(\hat{\boldsymbol{\eta}}_i,\boldsymbol{\theta}) + \frac{1}{2}\partial_{\boldsymbol{\theta}} \log \det H_i(\hat{\boldsymbol{\eta}}_i,\boldsymbol{\theta})
$$
{% endraw %}

The STOP method omits the EBE-sensitivity correction, treating the EBE as fixed during outer differentiation.

---

### Figures & Tables

- **Figure 1**: Two-dimensional slice of the Laplace OFV over (log k_a, log V) for the synthetic one-compartment PK model, showing two low-OFV basins connected by a curved corridor.
  - *Significance*: Illustrates the competing-basin geometry that tests robustness of the derivative methods to multi-start optimization.
- **Figure 2**: Matched multi-start performance across methods: (a) ΔOFV relative to the best endpoint on a log scale, (b) wall-clock time per optimization.
  - *Significance*: Shows that FULL-implicit, FULL-unroll, and FD reach the same OFV minimum, while STOP shows a small systematic gap; FULL-implicit is ~17x faster than FD.
- **Figure 3**: Warfarin PK/PD objective slice over (log C50, logit Emax), showing elongated low-objective region.
  - *Significance*: Demonstrates the flat/elongated objective surface that makes FD step-size tuning challenging and motivates AD-based derivatives.
- **Figure 4**: Warfarin PK/PD 10-run-per-method analysis: (a) final OFV gaps, (b) wall-clock times.
  - *Significance*: Shows FULL-implicit achieves the lowest OFV (1624.02) and is ~36x faster than FD (0.45 vs 16.3 min).
- **Table 1**: Summary of the four population-parameter derivative methods (FULL-implicit, FULL-unroll, STOP, FD) and their key characteristics.
  - *Significance*: Provides a clear comparison of how each method handles EBE dependence and its computational cost.

---

### Code & Reproducibility Assessment
Code for both case studies is available at https://github.com/gjajamo/laplace-paper-code. The warfarin dataset is publicly available. The implementation uses Julia with ForwardDiff.jl, L-BFGS, and a damped-Newton EBE solver. The paper provides sufficient detail for reproduction, though exact FD step sizes and solver tolerances are not fully specified in the main text.

---

### Supplementary Materials
Supplementary materials include Table S1 (parameter estimates from best runs for each method) and Supporting Methods S1-S3 (theoretical derivations and implementation maps).

---

### Future Directions
Future work should evaluate the methods in models with richer random-effects structures (e.g., correlated IIV, non-diagonal Omega), covariate models, and alternative EBE solvers. The impact of differentiation choices on post hoc covariance estimation and uncertainty quantification should be investigated. Mixed-mode AD implementations (forward for random effects, reverse for population parameters) should be empirically tested in high-dimensional settings.[^fc-9] The methods could also be extended to other likelihood approximations (e.g., FOCEI, SAEM) and to nonnormal outcomes.

---

### Expert Commentary
This is a well-executed methodology paper that addresses a practical and often overlooked bottleneck in pharmacometrics. The FULL-implicit adjoint approach is theoretically elegant and computationally efficient, and the empirical results are compelling. The paper would benefit from more detailed convergence diagnostics and a broader set of benchmark models, but the core contribution—demonstrating that AD-based derivatives can replace FD in Laplace estimation with substantial speedups—is solid and likely to influence future software development in the field.

---

### Bottom Line
For practitioners using Laplace-based NLME estimation, FULL-implicit AD derivatives offer a practical, faster alternative to finite differences, avoiding step-size tuning while reaching comparable or lower OFVs. STOP is a useful low-cost screening tool but should not be used for final estimation unless the EBE-sensitivity correction is shown to be negligible. The open-source implementation provides a starting point for adoption.[^fc-17]

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “FULL-implicit is applicable to models where the Laplace approximation is valid and the EBE Hessian is positive definite.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **CONTRADICTED** — original: “STOP is the fastest but introduces bias.” → correction: “Median wall-clock times were 0.045 s for FULL-implicit, 0.108 s for FULL-unroll, 0.068 s for STOP, and 0.758 s for FD.”
[^fc-3]: **UNSUPPORTED** — original: “AD-based methods are more general than sensitivity equations.” → correction: “Another option is to use sensitivity equations, which can supply accurate derivatives for ODE-defined PK/PD models, but may increase solver burden for large, nonlinear, or stiff systems [4].”
[^fc-4]: **UNSUPPORTED** — original: “Performance may differ with other ODE solvers or model structures.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “The paper does not report detailed convergence diagnostics (e.g., gradient norms, Hessian conditioning) across methods.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “The demonstrated speedups are case-specific and may vary with model complexity, ODE solver choice, and the number of population parameters.” → correction: “In both scenarios, FULL-implicit provided a faster AD-based alternative to FD, avoiding FD step-size tuning while reaching comparable or lower OFVs.”
[^fc-7]: **UNSUPPORTED** — original: “Figure 3 demonstrates the flat/elongated objective surface that makes FD step-size tuning challenging.” → correction: “This is consistent with the bounded Emax parameterization: as logit(Emax) increases and the inverse-logit map pushes Emax toward its upper bound of 1, further changes in logit(Emax) produce progressively smaller changes in the pharmacodynamic effect, contributing to the elongated contours.”
[^fc-8]: **UNSUPPORTED** — original: “The paper provides sufficient detail for reproduction.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “Mixed-mode AD implementations (forward for random effects, reverse for population parameters) should be empirically tested in high-dimensional settings.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “The methods could be extended to other likelihood approximations (e.g., FOCEI, SAEM).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The methods could be extended to nonnormal outcomes.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “The FULL-implicit adjoint approach is theoretically elegant and computationally efficient.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “The empirical results are compelling.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “The paper would benefit from more detailed convergence diagnostics.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “The paper would benefit from a broader set of benchmark models.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “The core contribution is likely to influence future software development in the field.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **UNSUPPORTED** — original: “The open-source implementation provides a starting point for adoption.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![One-compartment population pharmacokinetic model with absorption/elimination ambiguity, diagonal IIV on V and k_a ,]({{ site.baseurl }}/assets/digests/2026-09-04-adjoint-and-unrolled-automatic-differentiation-for-laplace-approximated/figures/fig_01.jpg)

![One-compartment population pharmacokinetic absorption/elimination-ambiguity simulation: matched multi-start performance across population-parameter derivative me]({{ site.baseurl }}/assets/digests/2026-09-04-adjoint-and-unrolled-automatic-differentiation-for-laplace-approximated/figures/fig_02.jpg)

![Warfarin PK/PD: 10-run-per-method analysis for the common Laplace objective over left(log C_50,mathrmlogitleft(E_m]({{ site.baseurl }}/assets/digests/2026-09-04-adjoint-and-unrolled-automatic-differentiation-for-laplace-approximated/figures/fig_03.jpg)

![Warfarin PK/PD: 10-run-per-method analysis. (a) Final common Laplace OFV gaps from the 10-run-per-method analysis; the overall best final OFV was 1624.02. (b) Co]({{ site.baseurl }}/assets/digests/2026-09-04-adjoint-and-unrolled-automatic-differentiation-for-laplace-approximated/figures/fig_04.jpg)