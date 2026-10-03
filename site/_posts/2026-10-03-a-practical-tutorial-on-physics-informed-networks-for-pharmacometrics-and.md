---
layout: post
title: "A Practical Tutorial on Physics-Informed Networks for Pharmacometrics and Quantitative Systems Pharmacology"
date: 2026-10-03
authors: "Ahmadi Daryakenari N, Kohandel M"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(10)"
doi: "10.1002/psp4.70343"
paper_type: methodology
tags: [methodology, qsp]
excerpt_text: "This tutorial provides an end-to-end, reproducible workflow for applying physics-informed neural networks (PINNs) to PK/PD/QSP inverse problems and gray-box discovery, implemented in the open-source PhINs library. Three worked examples demonstrate constant-parameter recovery, unknown right-hand-side function discovery, and time-varying efficacy inference under partial observation, with practical guidance on collocation design, loss weighting, residual-based attention, numerical precision, and MLP-versus-KAN architecture choices."
pdf_path: "/assets/digests/2026-10-03-a-practical-tutorial-on-physics-informed-networks-for-pharmacometrics-and/PMx_A_Practical_Tutorial_on_PhysicsInformed__20261003.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This tutorial provides an end-to-end, reproducible workflow for applying physics-informed neural networks (PINNs) to PK/PD/QSP inverse problems and gray-box discovery, implemented in the open-source PhINs library. Three worked examples demonstrate constant-parameter recovery, unknown right-hand-side function discovery, and time-varying efficacy inference under partial observation, with practical guidance on collocation design, loss weighting, residual-based attention, numerical precision, and MLP-versus-KAN architecture choices.

---

### Executive Summary
This tutorial presents an implementation-focused, reproducible workflow for applying physics-informed neural networks (PINNs) to PK/PD/QSP inverse problems and gray-box discovery, implemented in the open-source PhINs library. It addresses the ill-posedness of inverse problems with sparse, noisy, and partially observed data by embedding mechanistic ODE structure directly into neural network training through residual losses at collocation points. Three worked examples cover (1) constant PK parameter recovery in a three-state compartmental model, (2) gray-box discovery of an unknown right-hand-side function, and (3) inference of a time-varying chemotherapy efficacy function under partial observation. The tutorial emphasizes that accurate state reconstruction alone is insufficient; recovered parameters and hidden functions must be validated via forward simulation, identifiability assessment, and residual diagnostics. It provides detailed practical guidance on feature expansion, collocation design, constraint enforcement, loss weighting, residual-based attention (RBA), numerical precision, and optimizer selection, and systematically compares MLP-based PINNs with Chebyshev-KAN (PIKAN) alternatives.

---

### Scientific Context & Motivation
Inverse problems in pharmacometrics and QSP — estimating parameters, hidden states, or missing dynamical terms from sparse, noisy, and partially observed data — are frequently ill-posed, stiff, non-identifiable, or computationally expensive. Traditional methods (nonlinear least squares, maximum likelihood, Bayesian approaches) struggle with gray-box scenarios where only part of the system dynamics is known or observable, and with time-varying or abrupt dynamics. Physics-informed neural networks have emerged as a promising alternative that embeds mechanistic knowledge directly into training, but practical, implementation-focused guidance for pharmacometric applications has been limited. This tutorial fills that gap by providing a reproducible workflow and library, addressing collocation design, feature expansion, constraint enforcement, loss weighting, residual-based attention, numerical precision, and architecture selection (MLP vs KAN), while emphasizing that identifiability assessment and validation beyond training fit are prerequisites for trustworthy inference.

---

## ⚡ Methodological Snapshot
The paper presents a physics-informed neural network framework in which a neural representation (MLP or Chebyshev-KAN) maps time to state variables, and the governing ODE is enforced through residual losses at collocation points. Unknown quantities are declared either as constant parameters (optimized jointly with the network) or as time-varying network outputs inserted directly into the residual. The workflow comprises: data preparation and scaling, feature expansion (e.g., exponential features for compartmental PK), collocation design (fixed uniform, random resampling, or adaptive), constraint enforcement (softplus for positive constants, sigmoid bounds for time-varying functions), loss weighting (static, adaptive, or residual-based attention), optimizer selection (Adam/RAdam with cosine decay, with quasi-Newton/curvature-aware methods flagged as future additions), and validation via forward simulation and residual diagnostics. The tutorial distinguishes adaptive loss-term weighting (rebalancing competing objectives) from residual-based attention (local reweighting within a residual term), and provides a reproducible PhINs library implementation.

---

## 📐 Statistical Framework
The framework minimizes a composite loss combining data-fit (mean squared error against observations), initial-condition, and physics-residual terms, where the physics residual enforces the ODE structure via automatic differentiation of the neural output. Key assumptions: the known mechanistic model structure is correct; noise is additive, proportional, or log-normal as specified by the observation model; and the neural network has sufficient capacity to represent the solution. Identifiability is treated as a prerequisite: the paper distinguishes structural identifiability (unique determination from ideal noise-free data) from practical identifiability (acceptable uncertainty under realistic noise/observability), and discusses local (Fisher Information Matrix) and global (profile likelihood) assessment tools. The authors emphasize that PINNs regularize training by enforcing mechanistic consistency but do not eliminate fundamental limitations from non-identifiability, sparse/noisy data, insufficient observability, or model misspecification. Loss weights are treated as modeling choices, with dynamic reweighting strategies (gradient-based annealing, self-adaptive balancing, NTK-based weighting) discussed.

---

### Estimator Behavior
The paper reports empirical recovery accuracy rather than formal statistical properties (bias/efficiency). Both PINNs and PIKANs recover PK parameters accurately at 50 observations (errors ~1.9–6% for k_e at 2–7% noise); sensitivity increases markedly when observations are reduced to 10–20, particularly for certain parameters. Higher noise (7% vs 2%) increases parameter error. For gray-box discovery, both architectures achieved low RMSE on the hidden right-hand-side function. For time-varying efficacy under partial observation, all variants recovered the hidden function, with adaptive weighting and residual-based attention improving performance.[^fc-2] The authors note that first-order optimizers (Adam/RAdam) may plateau on stiff or ill-conditioned problems, motivating quasi-Newton/curvature-aware methods, and recommend double precision for ill-conditioned inverse problems. No formal convergence guarantees or repeated-run variance statistics are reported.[^fc-3]

---

### Validation Design
Validation uses synthetic data with known ground truth across three examples. Example 1 (constant parameter recovery): three-state compartmental model, 50 observations over 50 h with 2% and 7% noise, 300 collocation points; sensitivity analysis reduces observations to 10–20. Example 2 (gray-box discovery): unknown right-hand-side function recovered with RMSE comparison for both PINNs and PIKANs. Example 3 (time-varying efficacy under partial observation): single observed state, 600 h simulation, sampling every 5 h or 30 h, comparing fixed vs random collocation, adaptive weighting vs residual-based attention, PINNs vs PIKANs, and 0% vs 5% noise. Validation includes: comparison with ground truth, forward simulation of inferred quantities in a conventional ODE solver, residual diagnostics, and a suggested leave-one-out cross-validation protocol (12 subjects, train on 11, test on 1, repeated over 12 folds). The paper emphasizes that verification (are equations solved correctly?) and validation (are equations appropriate?) are distinct and both required for trustworthy inference.

---

### Comparison to Alternatives
Compared with traditional nonlinear least squares or maximum likelihood estimation, PINNs handle ill-posed, partially observed, and gray-box problems more gracefully by enforcing mechanistic consistency through residual losses, avoiding the repeated ODE solving required by Neural ODE approaches (the network is differentiated directly via automatic differentiation). Compared with Bayesian methods, PINNs are far less computationally intensive but lack inherent uncertainty quantification (though Bayesian PINN variants exist). KAN-based PIKANs (Chebyshev-based) introduce a different inductive bias and showed particularly strong performance in noisy-data settings, but are more computationally demanding and require more careful tuning. The authors position PINNs as complementary tools rather than replacements for established frequentist, Bayesian, and NLME approaches, and emphasize that PINNs regularize but do not eliminate fundamental non-identifiability.

---

### Implementation Guidance
The PhINs library (https://github.com/NazAhmadi/PhINs/) provides modular components: PINNConfig (top-level), FeatureConfig (Fourier/exponential/polynomial feature expansion), ArchitectureConfig (MLP or Chebyshev-KAN), TrainingConfig (epochs, optimizer, scheduler, loss weights, RBA), DataConfig, ParameterSpec (constant vs time-varying unknowns), PINNDataBundle, PINNProblem, and PINNTrainer. Practical recommendations: use exponential feature expansion for compartmental PK (mono/multi-exponential decay); use smooth activations (tanh, not ReLU) since the physics residual requires derivatives; use softplus for positive constants and sigmoid-based bounded mappings for time-varying functions; start with fixed uniform collocation (reproducible/interpretable), then consider random resampling or adaptive sampling for localized residuals; use Adam/RAdam with cosine learning-rate decay; enable double precision for ill-conditioned problems; monitor data/IC/physics loss terms separately; use RBA (with lr_lambda and gamma as tunable hyperparameters, gamma≈0.999 for smooth updates, normalize_by_max=True) for localized residual errors; consider PIKANs for noisy-data settings. Computational cost: KANs are more demanding than MLPs and require more careful tuning.

---

## 📊 Key Findings
Both PINNs and PIKANs accurately recover PK parameters in the baseline 50-observation setting; reducing observations to 10–20 increases sensitivity of parameter recovery, particularly for certain parameters. Gray-box discovery of an unknown right-hand-side function achieves low RMSE with both architectures. For time-varying efficacy inference under partial observation (single observed state), all variants recover the hidden function, with adaptive weighting and residual-based attention improving performance; PIKANs showed particularly strong performance in noisy-data settings. Critically, accurate state reconstruction does not guarantee correct mechanistic recovery — validation via forward simulation with a conventional ODE solver is essential. Scaling, constraints, loss weighting, and numerical precision strongly affect recovery, especially when the hidden quantity is small in magnitude or only indirectly observed. The tutorial also clarifies that adaptive residual-based sampling should be viewed as an optimization heuristic, not automatically beneficial, and can be counterproductive under model misspecification.

---

### Strengths & Limitations

#### Strengths
- End-to-end reproducible workflow with an open-source library (PhINs) and publicly available notebooks.
- Covers three complementary problem types (constant-parameter inverse, gray-box discovery, time-varying hidden-function inference under partial observation).
- Provides detailed, actionable guidance on collocation design, feature expansion, constraint enforcement, loss weighting, residual-based attention, numerical precision, and optimizer selection.
- Systematically compares MLP-based PINNs with Chebyshev-KAN (PIKAN) architectures under the same workflow.
- Emphasizes validation beyond training fit — forward simulation with a conventional ODE solver, residual diagnostics, identifiability assessment, and leave-one-out cross-validation.
- Clear conceptual distinction between adaptive loss-term weighting and residual-based attention, and a mature caution that adaptive residual-based sampling can be counterproductive under model misspecification.
- Honest framing of limitations and open research directions (population modeling, multi-dose settings, uncertainty quantification).

#### Limitations (Acknowledged by Authors)
- Training and optimization sensitivity: performance depends strongly on optimizer choice, numerical precision, collocation design, and loss weighting; training may plateau on stiff or ill-conditioned inverse problems.
- Partial observability and hidden-function recovery: accurate fits to observed trajectories do not always imply accurate recovery of latent states or weak time-varying mechanisms.
- Population modeling remains open: current PINN workflows are better established for single-subject or pooled inverse problems than for hierarchical population PK/PD, which requires interindividual variability, likelihood-based residual-error models, covariate effects, and dosing-event handling.
- Multi-dose and multi-regimen settings remain difficult: repeated drug administration introduces discontinuities or sharp state changes that can dominate derivative-based physics residuals near dosing times.
- PINNs are complementary tools, not replacements for established frequentist, Bayesian, and NLME approaches.

#### Limitations (Expert Review)
- All three worked examples use synthetic data with known ground truth; robustness to realistic model misspecification is not stress-tested.
- The PINN vs PIKAN comparison is empirical without formal statistical rigor — no repeated-run variance, confidence intervals, or hypothesis testing are reported for the architecture comparisons.
- Identifiability analysis is discussed as essential but is not systematically applied within the worked examples themselves.
- No formal uncertainty quantification is provided for the recovered parameters or hidden functions in the presented examples.
- The tutorial focuses on single-subject/single-trajectory problems; the gap to population-level inference is acknowledged but not bridged.
- The extracted equations (10)–(28) are referenced but not fully reproduced in the available content, limiting direct mathematical verification of the loss formulations.

#### Generalizability
The workflow is generalizable to a broad range of PK/PD/QSP inverse problems and gray-box discovery tasks, as demonstrated across three complementary problem types. However, performance depends strongly on problem conditioning, observability, and hyperparameter tuning. The guidance is most reliable for single-subject or pooled inverse problems; population-level (NLME) extensions and multi-dose settings remain open research directions. All demonstrations use synthetic data with known ground truth, so real-world applicability under model misspecification is not directly tested.

---

### Key Equations

**Physics Residual**

{% raw %}
$$
r(t) = \frac{d u_\theta(t)}{dt} - f(u_\theta(t), t, \theta)
$$
{% endraw %}

The physics residual enforces the governing ODE at collocation points by differentiating the neural approximation u_θ with respect to time via automatic differentiation; this is the core mechanism by which mechanistic knowledge enters training.

**Total Training Loss**

{% raw %}
$$
L = \lambda_{\text{data}} L_{\text{data}} + \lambda_{\text{ic}} L_{\text{ic}} + \lambda_{\text{physics}} L_{\text{physics}}
$$
{% endraw %}

The composite training objective combines data fit, initial-condition enforcement, and physics-residual enforcement, with weights λ that are treated as modeling choices (static, adaptive, or locally reweighted via residual-based attention).

**Gray-Box Equation with Learned Hidden Function**

{% raw %}
$$
\frac{du}{dt} = f(u, t) + g_\theta(t)
$$
{% endraw %}

In the gray-box/time-varying efficacy example, the unknown right-hand-side term g_θ(t) is represented as an additional network output and inserted into the residual, allowing inference of a hidden time-varying mechanism under partial observation.

---

### Figures & Tables

- **Figure 1**: Schematic of the physics-informed training structure: a neural representation (MLP or KAN) maps time to state variables, and the governing ODE is enforced through physics residuals at collocation points.
  - *Significance*: Establishes the core architecture and loss composition (data, initial-condition, physics residual) that underlies all three worked examples.
- **Figure 2**: Summary of the end-to-end workflow: define mechanistic model, generate/assemble observations, preprocess/scale, specify collocation points, construct residual, choose representation, set loss weights/constraints, train, tune, validate.
  - *Significance*: Provides the reproducible template that the PhINs library operationalizes and that practitioners can follow for new problems.
- **Figure 3**: Summary of outcomes across the three worked examples (inverse, gray-box, time-varying inference), highlighting trajectory reconstruction and recovery of unknown parameters/hidden functions.
  - *Significance*: Synthesizes the tutorial's main results and illustrates the role of architectural choices and training strategies across problem types.
- **Table 2**: Parameter recovery errors for Example 1 (constant PK parameters) comparing PINNs vs PIKANs across noise levels (2%, 7%) and observation counts (10, 20, 50).
  - *Significance*: Quantifies estimator accuracy and shows how reduced observation density increases sensitivity of parameter recovery, particularly for certain parameters.
- **Table 3**: Hidden efficacy recovery RMSE for Example 3 (time-varying chemotherapy efficacy under partial observation) across configurations: fixed vs random collocation, adaptive weighting vs RBA, PINNs vs PIKANs, varying observation counts and noise.
  - *Significance*: Demonstrates the comparative performance of training strategies and architectures for the most challenging partially observed problem.

---

### Code & Reproducibility Assessment
All code and example notebooks are publicly available at https://github.com/NazAhmadi/PhINs/ (PhINs library, short for Pharmacometrics-Informed Networks). The tutorial provides an end-to-end reproducible workflow with documented components (PINNConfig, FeatureConfig, ArchitectureConfig, TrainingConfig, DataConfig, ParameterSpec, PINNDataBundle, PINNProblem, PINNTrainer).

---

### Future Directions
The authors identify five priority directions: (1) tighter integration of PINNs with Bayesian and uncertainty-aware workflows (Bayesian PINNs, dropout, deep ensembles, functional priors, separation of epistemic/aleatoric uncertainty); (2) extension to population PK/PD and NLME-style modeling with interindividual variability, likelihood-based residual-error models, and covariate effects; (3) more robust training strategies for sparse, noisy, multi-dose datasets across different regimens and initial conditions (domain decomposition, interval-wise training, explicit dosing-event handling); (4) multi-fidelity learning combining sparse clinical data with richer preclinical, simulated, or mechanistic data; and (5) latent-variable and generative formulations (VAE/conditional-VAE-based physics-informed models) to represent patient-specific variability and distributions over unknown functions. Curvature-aware/quasi-Newton optimizers are also flagged as promising additions to PhINs.

---

### Expert Commentary
This tutorial fills an important practical gap by translating PINN methodology into an accessible, reproducible workflow tailored to pharmacometrics. Its strongest methodological contribution is the insistence that validation extend beyond training-set agreement — forward simulation with a conventional ODE solver, identifiability assessment, and residual diagnostics — which directly addresses the common failure mode where PINNs fit observed trajectories but recover mechanistically meaningless parameters or hidden functions. The conceptual distinction between adaptive loss-term weighting (rebalancing competing objectives) and residual-based attention (local reweighting within a residual term) is a useful clarification often blurred in the literature. The caution that adaptive residual-based sampling can be counterproductive under model misspecification is a mature and important point. The main caveat is that all demonstrations use synthetic data with known ground truth; real-world applicability will hinge on robustness to model misspecification, which the authors acknowledge but do not stress-test. The population/NLME integration gap remains the most significant barrier to routine pharmacometric adoption, and the tutorial honestly frames this as an open research direction rather than a solved problem.

---

### Bottom Line
For practitioners, PINNs (with optional Chebyshev-KAN/PIKAN variants) provide a practical, mechanistically constrained approach to inverse problems and gray-box discovery in pharmacometrics/QSP, particularly when data are sparse, noisy, or only partially observed and part of the dynamics is unknown. The open-source PhINs library offers a reproducible starting point. Key lessons: (1) accurate state reconstruction alone is insufficient — validate recovered parameters/hidden functions via forward simulation with a conventional ODE solver; (2) treat loss weights, collocation design, and numerical precision as modeling choices, not defaults; (3) use scaling and bounded parameterizations when hidden quantities are small or only indirectly observed; (4) consider KAN architectures for noisy-data settings. PINNs are complementary tools, not replacements for established NLME/Bayesian workflows.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “Key assumptions of the framework include: the known mechanistic model structure is correct; noise is additive, proportional, or log-normal as specified by the observation model; and the neural network has sufficient capacity to represent the solution.” → correction: “noise may be modeled as additive, proportional, or log-normal”
[^fc-2]: **UNSUPPORTED** — original: “For time-varying efficacy under partial observation, all variants recovered the hidden function, with adaptive weighting and residual-based attention improving performance.” → correction: “As shown in Table 3, all variants recover”
[^fc-3]: **UNSUPPORTED** — original: “No formal convergence guarantees or repeated-run variance statistics are reported.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **CONTRADICTED** — original: “Compared with Bayesian methods, PINNs are far less computationally intensive but lack inherent uncertainty quantification.” → correction: “Bayesian approaches provide uncertainty quantification but can be computationally intensive for complex models. ... Uncertainty quantification is not absent in PINNs: Bayesian PINNs, dropout-based methods, deep ensembles, GAN-based approaches, and functional-prior models have already been proposed for noisy and gappy data.”
[^fc-5]: **UNSUPPORTED** — original: “For time-varying efficacy inference under partial observation (single observed state), all variants recover the hidden function, with adaptive weighting and residual-based attention improving performance.” → correction: “As shown in Table 3, all variants recover”
[^fc-6]: **UNSUPPORTED** — original: “The second future direction is extension to population PK/PD and NLME-style modeling with interindividual variability, likelihood-based residual-error models, and covariate effects.” → correction: “(2) extension to population PK/PD and NLME-style modeling with interindividual variability”
[^fc-7]: **UNSUPPORTED** — original: “The tutorial's strongest methodological contribution is the insistence that validation extend beyond training-set agreement — forward simulation with a conventional ODE solver, identifiability assessment, and residual diagnostics.” → correction: “A good fit to the observed data is not sufficient for trustworthy physics-informed inference. ... Verification should include residual diagnostics, training stability, collocation accuracy, and numerical consistency checks. Validation should include comparison with ground truth when available, recovery of hidden states or functions, biologically plausible parameter values, and forward simulation using the inferred quantities in a conventional ODE solver/PINNs [8, 11, 14].”
[^fc-8]: **UNSUPPORTED** — original: “The conceptual distinction between adaptive loss-term weighting and residual-based attention is a useful clarification often blurred in the literature.” → correction: “In this tutorial, we distinguish between adaptive loss-term weighting and RBA. Adaptive loss-term weighting changes the relative weights assigned to different components of the composite PINN objective... In contrast, RBA acts locally within a selected residual term.”
[^fc-9]: **UNSUPPORTED** — original: “The population/NLME integration gap remains the most significant barrier to routine pharmacometric adoption.” → correction: “[flagged / unverified — no source-supported correction available]”