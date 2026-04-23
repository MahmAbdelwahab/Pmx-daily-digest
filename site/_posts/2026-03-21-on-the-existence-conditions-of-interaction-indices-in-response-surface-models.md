---
layout: post
title: "On the existence conditions of interaction indices in response surface models"
date: 2026-03-21
authors: "Yumuk E, Ionescu C"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026"
doi: "https://doi.org/10.1007/s10928-026-10026-x"
paper_type: methodology
tags: [methodology, oncology, regulatory]
excerpt_text: "This theoretical pharmacometrics paper provides a rigorous mathematical framework for determining when response surface models (RSMs) for drug combinations yield biologically interpretable results. Essential reading for pharmacometricians working with combination therapy models, particularly in anesthesia and oncology drug development, as it identifies parameter constraints that prevent singularities and complex-valued predictions in Greco, Minto, and Finney models."
pdf_path: "/assets/digests/2026-03-21-on-the-existence-conditions-of-interaction-indices-in-response-surface-models/PMx_On_the_existence_conditions_of_interacti_20260321.pdf"
retroactively_classified: true
---

### Quick Take
This theoretical pharmacometrics paper provides a rigorous mathematical framework for determining when response surface models (RSMs) for drug combinations yield biologically interpretable results. Essential reading for pharmacometricians working with combination therapy models, particularly in anesthesia and oncology drug development, as it identifies parameter constraints that prevent singularities and complex-valued predictions in Greco, Minto, and Finney models.

---

### Executive Summary
Yumuk and Ionescu present a comprehensive feasibility analysis framework for three canonical response surface interaction models, addressing a critical gap in pharmacometrics methodology. By distinguishing between isobole-level feasibility (valid predictions at specific effect levels) and global feasibility (well-posedness across all dose combinations), the authors derive explicit mathematical conditions and characterize singular sets where models fail. The work demonstrates that antagonistic interactions (negative interaction indices) can produce biologically implausible predictions, with model-specific thresholds: Greco requires alpha >= -1 for global feasibility, Minto requires alpha >= -1, and Finney requires alpha >= -rho where rho is the relative potency. This framework provides practical guidance for parameter selection and model validation in drug combination studies.

---

## ⚡ Methodological Snapshot
The authors develop a unified feasibility analysis framework based on three core assumptions: positive input levels and median effect doses (Assumption 1), strictly positive Hill coefficients (Assumption 2), and the requirement that the normalized index I remain non-negative for biological interpretability (Proposition 1). For each of the three models—Greco, Minto, and Finney—they derive global feasibility conditions (Theorems 1, 3, and 5) and isobole-level feasibility conditions (Theorems 2, 4, and 6), with explicit characterization of singular sets where models become undefined. The mathematical approach combines algebraic analysis of denominators, discriminant analysis for quadratic forms, and geometric characterization of singularity lines in both normalized and input spaces. Numerical illustrations with selected Hill coefficients demonstrate feasible, boundary, and infeasible scenarios for each model class.

---

## 🏗️ Structural Model Breakdown
All three models derive from the Hill equation foundation with median-effect normalization. The Greco model (Eq. 7) expresses effect as E = 1/(1+I) where I is the normalized index combining single-agent and interaction terms. The Minto model (Eq. 8-10) introduces normalized ratios u = (c1/c50,1)^n1 / [(c1/c50,1)^n1 + (c2/c50,2)^n2] and v = 1-u, with interaction through modified potency function. The Finney model (Eq. 11) uses log-transformation Y = log10(c1 + rho*c2 + alpha*sqrt(c1*c2)), requiring strict positivity of the log argument. Key structural difference: Greco and Minto use rational function forms with denominators that can vanish, while Finney uses logarithmic transformation requiring positive arguments. Singular sets emerge as: vertical/horizontal lines in Greco (Corollary 1), lines through origin in Minto (Corollaries 2-3), and single line or sector boundaries in Finney (Corollary 4).

---

### Detailed Methodological Analysis

#### Modeling Approach
Three canonical response surface models analyzed: Greco model (Eq. 6-7) with normalized interaction index I = (c1/c50,1)^n1 + (c2/c50,2)^n2 + alpha*(c1/c50,1)^n1*(c2/c50,2)^n2; Minto model (Eq. 8-10) treating fixed-ratio combinations as new entities with normalized ratios u and v; Finney model (Eq. 11) with log-linear transformation Y = log10(c1 + rho*c2 + alpha*sqrt(c1*c2)). All models built on Hill/median-effect foundation with Emax = 1 normalization. Feasibility analysis distinguishes global feasibility (all input pairs) from isobole-level feasibility (fixed effect levels).

#### Data Sources
No empirical data analyzed; purely theoretical/mathematical study. Numerical illustrations use illustrative parameter sets: Greco model with c50,1 = 5, c50,2 = 10, n1 = n2 = 2; Minto model with same parameters; Finney model with c50,1 = 5, c50,2 = 10, rho = 2, n = 2. Hill coefficients selected to expose feasibility boundaries rather than represent specific pharmacological binding mechanisms.

#### Estimation Methods
Not applicable—no parameter estimation performed. Theoretical derivation of feasibility conditions through algebraic analysis, discriminant conditions, and inequality constraints. Analytical solutions for singularity lines and feasible parameter regions.

#### Model Evaluation
Numerical validation of theoretical feasibility conditions through isobole visualization across three scenarios per model: (1) globally feasible, (2) isobole-feasible but globally infeasible, (3) completely infeasible. Figures 3-8 demonstrate predicted singularity lines and model behavior at feasibility boundaries.

#### Covariate Analysis
Not applicable—no covariate analysis performed. However, the framework implicitly addresses how relative potency (rho) and Hill coefficients (n) influence feasibility boundaries, particularly in Finney model where rho determines the critical threshold alpha >= -rho.

---

### Scientific Context & Motivation
Response surface models have been foundational in pharmacometrics for characterizing drug-drug interactions since the seminal work of Loewe (1926) and Bliss (1939), with modern implementations by Greco, Minto, and Finney widely used in anesthesia research and combination oncology trials. Despite their ubiquity, practitioners have empirically observed that certain parameter combinations yield undefined or complex-valued predictions, particularly with strong antagonistic interactions. However, no systematic theoretical framework existed to predict and prevent these failures. This work fills that critical gap by providing rigorous existence conditions, enabling pharmacometricians to constrain parameter estimation spaces a priori and avoid computational failures during model fitting. The work builds on recent advances in computational pharmacology and drug combination optimization while addressing fundamental mathematical properties that have been overlooked in applied pharmacometrics literature.

---

### Statistical Rigor Assessment
As a theoretical mathematics paper, statistical rigor is replaced by mathematical rigor. The derivations are formally correct with explicit theorem-proof structure. Assumptions are clearly stated and their implications traced through remarks and propositions. The limitation is that no statistical validation of the feasibility conditions' practical importance is provided—no simulation studies assess how often estimation algorithms encounter infeasible regions, nor is there empirical validation with real combination datasets. The numerical illustrations, while pedagogically useful, use arbitrarily selected Hill coefficients (n=2) that may exceed physiologically typical ranges, potentially exaggerating feasibility boundary effects.

---

## 📊 Key Findings
The Greco model is globally feasible if and only if alpha >= -1 (Theorem 1); for alpha < -1, isobole-level feasibility requires alpha > -1 - 1/(u*v) where u,v are normalized ratios at that effect level (Theorem 2), with singularity lines at c1/c50,1 = (-1-alpha)^(1/n1) and c2/c50,2 = (-1-alpha)^(1/n2) (Corollary 1). The Minto model has global feasibility for alpha >= -1 (Theorem 3); for alpha < -1, singularities occur at u = 0.5 +/- 0.5*sqrt(1+alpha) within [0,1] (Theorem 3), mapping to lines through origin in input space (Corollary 3). The Finney model requires alpha >= -rho for global feasibility where rho is relative potency (Theorem 5); at alpha = -rho, single singularity line; for alpha < -rho, two lines bounding undefined sector (Corollary 4). Isobole-level feasibility in Finney requires alpha >= -2*rho*sqrt(y/(1-y)) where y is effect-dependent ratio (Theorem 6).

---

## 💡 Clinical & Regulatory Implications
For anesthesia drug combinations (propofol-remifentanil, etc.), these results suggest that strongly antagonistic interactions (alpha < -1) should be treated with caution in Minto and Greco models, as they produce undefined regions in clinically relevant dose ranges. The Finney model's relative potency-dependent threshold (alpha >= -rho) implies that combinations with high potency ratios require more stringent constraints on antagonism. In oncology combination trials, feasibility analysis should precede population PKPD modeling to constrain estimation spaces and prevent optimization failures. The isobole-level feasibility conditions enable adaptive trial designs where model validity can be assessed at planned effect levels. Regulatory submissions involving combination models should include feasibility justification for estimated interaction parameters, particularly when antagonism is suggested.

---

### Strengths & Limitations

#### Strengths
- First systematic theoretical framework for RSM feasibility in pharmacometrics
- Clear distinction between global and isobole-level feasibility provides practical granularity
- Explicit closed-form conditions for all three major model classes enable immediate implementation
- Geometric characterization of singular sets aids visualization and debugging
- Mathematically rigorous theorem-proof structure with verifiable derivations
- Numerical illustrations effectively demonstrate theoretical predictions

#### Limitations (Acknowledged by Authors)
- Hill coefficients selected for illustrative purposes may exceed physiologically plausible ranges
- Extension to three or more agents mentioned as future work, not addressed here
- No empirical validation with real combination datasets
- No assessment of how frequently estimation algorithms encounter infeasible regions in practice

#### Limitations (Expert Review)
- Limited discussion of how feasibility constraints interact with parameter estimation algorithms (FOCE, SAEM, MCMC)
- No guidance on how to modify estimation when feasibility violations are detected during fitting
- Missing comparison with alternative combination models (Bliss independence, ZIP, etc.) that may have different feasibility properties
- No discussion of uncertainty propagation—how parameter uncertainty affects probability of feasibility violation
- Practical implementation guidance (code, software constraints) not provided
- The 'biological interpretability' criterion (E in [0,1)) is necessary but not sufficient for clinical validity—other PKPD constraints (time-dependence, tolerance, etc.) not considered

#### Generalizability
The feasibility conditions are mathematically general and apply across any domain using these RSM formulations. However, the biological interpretability framing is specific to PKPD applications with Emax=1 normalization. The results are immediately applicable to anesthesia pharmacology where Minto models dominate, and to oncology combination studies using Greco or Finney approaches. Generalizability to other therapeutic areas depends on whether the Hill/median-effect foundation and Loewe additivity framework are appropriate. The three-agent extension mentioned as future work would substantially broaden applicability to complex combination therapies increasingly common in oncology and infectious disease.

---

### Key Equations

**Hill Function (Emax Model)**

$$
E = E_{max} \cdot \frac{c^n}{c_{50}^n + c^n}
$$

Foundation for single-agent dose-response relationships in all RSMs, where c is concentration, c_50 is median effective concentration, n is Hill coefficient, and E_max is maximum effect

**Median-Effect Equation**

$$
\frac{E}{1-E} = \left(\frac{c}{c_{50}}\right)^n
$$

Normalized form with E_max = 1, enabling linear transformation and combination model derivation

**Median-Effect Linearization**

$$
Y = \log_{10}\left(\frac{E}{1-E}\right) = n \cdot \log_{10}(c) - n \cdot \log_{10}(c_{50})
$$

Linear form relating transformed response Y to log-concentration, with slope m = n and intercept b = -n*log10(c_50)

**Loewe Additivity Model**

$$
\frac{c_1}{c_{x,1}} + \frac{c_2}{c_{x,2}} = 1
$$

Classical additivity condition where c_x,1 and c_x,2 are single-agent doses producing effect level x; isoboles are straight lines in this formulation

**Greco Model - Isobole Equation**

$$
\frac{c_1}{c_{x,1}} + \frac{c_2}{c_{x,2}} + \alpha \cdot \frac{c_1}{c_{x,1}} \cdot \frac{c_2}{c_{x,2}} = 1
$$

Extended isobole equation with interaction parameter alpha; reduces to Loewe when alpha = 0

**Greco Model - Effect Equation**

$$
E = \frac{1}{1+I},   I = \left(\frac{c_1}{c_{50,1}}\right)^{n_1} + \left(\frac{c_2}{c_{50,2}}\right)^{n_2} + \alpha \cdot \left(\frac{c_1}{c_{50,1}}\right)^{n_1} \cdot \left(\frac{c_2}{c_{50,2}}\right)^{n_2}
$$

Normalized index formulation where I represents combined drug effect; alpha > 0 for synergy, alpha = 0 for additivity, alpha < 0 for antagonism

**Minto Model - Normalized Index**

$$
E = \frac{1}{1+I},   I = \frac{u^{1+\alpha} + v^{1+\alpha}}{(u \cdot v)^\alpha}
$$

Alternative formulation using normalized ratios u and v representing relative contribution of each agent

**Minto Model - Normalized Ratios**

$$
u = \frac{(c_1/c_{50,1})^{n_1}}{(c_1/c_{50,1})^{n_1} + (c_2/c_{50,2})^{n_2}},   v = 1-u
$$

Definition of normalized ratios mapping input space to [0,1] interval

**Minto Model - Mixture Potency**

$$
\frac{1}{c_{50,mix}^{n_{mix}}} = \frac{1}{c_{50,1}^{n_1} \cdot u^{-\alpha}} + \frac{1}{c_{50,2}^{n_2} \cdot v^{-\alpha}}
$$

Potency of drug mixture as function of individual potencies and interaction parameter

**Finney Model**

$$
Y = \log_{10}\left(c_1 + \rho \cdot c_2 + \alpha \cdot \sqrt{c_1 \cdot c_2}\right)
$$

Log-linear model with relative potency rho = c_50,2/c_50,1 and interaction term alpha; requires strict positivity of log argument

**Greco Global Feasibility Condition**

$$
\alpha \geq -1
$$

Necessary and sufficient condition for global feasibility; when violated, singularities emerge in positive quadrant

**Greco Singularity Lines**

$$
\frac{c_1}{c_{50,1}} = (-1-\alpha)^{1/n_1},   \frac{c_2}{c_{50,2}} = (-1-\alpha)^{1/n_2}
$$

Vertical and horizontal lines where Greco model becomes singular for alpha < -1

**Minto Singularity Points**

$$
u = \frac{1}{2} \pm \frac{1}{2}\sqrt{1+\alpha}
$$

Singularity locations in normalized space for alpha < -1; exist within [0,1] when alpha in [-1, 0]

**Finney Global Feasibility Condition**

$$
\alpha \geq -\rho
$$

Threshold depends on relative potency; at equality, single singularity line; below threshold, undefined sector emerges

**Finney Isobole-Level Feasibility**

$$
\alpha \geq -2\rho\sqrt{\frac{y}{1-y}}
$$

Effect-dependent threshold where y is ratio of fixed variable terms; always satisfied when alpha >= -rho

---

### Figures & Tables

- **Figure 1**: Isobologram of Loewe additivity model with straight-line isoboles connecting single-agent effective doses
  - *Significance*: Establishes baseline additivity concept that all three RSMs extend; deviation below line = synergy, above = antagonism
- **Figure 2**: Greco model representation showing additivity (alpha=0), synergy (alpha=2), and antagonism (alpha=-0.5) with isoboles at effect level 0.5
  - *Significance*: Visual demonstration of how interaction parameter shapes isobole curvature; note alpha=-0.5 remains feasible (above -1 threshold)
- **Figure 3**: Greco model isoboles: left panel shows globally feasible scenario (alpha=2), right panel shows isobole-feasible but globally infeasible scenario (alpha=-0.5) for effects 0.25, 0.5, 0.75
  - *Significance*: Direct illustration of Theorems 1 and 2; demonstrates that global infeasibility does not preclude valid predictions at specific effect levels
- **Figure 4**: Greco model singularity lines: left panel alpha=-2, n1=n2=2 showing vertical/horizontal singularities; right panel alpha=-1.5, n1=3, n2=2 with different singularity locations
  - *Significance*: Validates Corollary 1; demonstrates how Hill coefficients affect singularity placement in input space
- **Figure 5**: Minto model globally feasible scenarios with alpha=0 (additivity), alpha=2 (synergy), alpha=-0.5 (weak antagonism) for effects 0.25, 0.5, 0.75
  - *Significance*: Illustrates Theorem 3 condition (alpha >= -1); shows isobole shapes differ from Greco even with same alpha values
- **Figure 6**: Minto model singularities: top panel alpha=-1 showing single singularity at u=0.5; bottom panel alpha=-2 showing two singularities at u=0.5±0.5i (complex, outside domain) mapping to lines through origin
  - *Significance*: Validates Theorem 3 and Corollaries 2-3; geometric demonstration of how singularity structure changes with interaction strength
- **Figure 7**: Finney model globally feasible scenarios with alpha=-1, 0, 2 (all above -rho=-2 threshold) for effects 0.25, 0.5, 0.75
  - *Significance*: Illustrates Theorem 5; note alpha=-1 remains feasible due to rho=2, unlike Greco/Minto where alpha<-1 fails
- **Figure 8**: Finney model singularities: left panel alpha=-2 (boundary case, single line); right panel alpha=-4 (below threshold, two lines bounding undefined sector)
  - *Significance*: Validates Corollary 4; critical demonstration that strong antagonism produces regions of complete model failure

---

### Code & Reproducibility Assessment
No code or software provided. The paper is purely theoretical with numerical illustrations presumably generated using standard mathematical software (MATLAB, Mathematica, or similar). Implementation of feasibility checks in pharmacometric software (NONMEM, Monolix, nlmixr) would require custom coding of the derived conditions. Reproducibility is limited to mathematical verification of theorems rather than computational replication.

---

### Future Directions
The authors explicitly identify extension to three or more agents as the primary future direction, noting this will require reformulating interaction terms and feasibility conditions in higher-dimensional domains. Additional important extensions include: (1) incorporating time-dependence and dynamic feasibility for repeated-dose or infusion scenarios; (2) developing Bayesian prior specifications that encode feasibility constraints to prevent MCMC sampling from invalid regions; (3) creating diagnostic tools for real-time feasibility monitoring during population estimation; (4) extending to dose-dependent interaction indices that vary across the response surface; (5) comparing feasibility properties of emerging machine learning-based combination models; and (6) empirical validation with large combination trial databases to assess practical frequency of feasibility violations.

---

### Expert Commentary
This paper addresses a problem that many practicing pharmacometricians have encountered but few have systematically analyzed: the mysterious optimization failures and complex-valued predictions that emerge when fitting combination models with antagonistic interactions. The mathematical rigor is welcome, though I suspect the practical impact would be enhanced by companion software implementing these feasibility checks. The distinction between global and isobole-level feasibility is particularly valuable for adaptive trials where specific effect levels are targeted. I note that the Hill coefficient selection (n=2) in examples, while mathematically convenient, exceeds typical values for most receptor-mediated effects (usually 1-1.5), potentially overstating feasibility concerns for standard applications. The field trend toward complex multi-drug combinations in oncology and immunology makes the three-agent extension urgent. A teaching point: always verify that your final parameter estimates satisfy the relevant feasibility condition before submitting to regulatory agencies—this paper provides the explicit checks needed.

---

### Bottom Line
Pharmacometricians fitting Greco, Minto, or Finney response surface models should constrain interaction parameters (alpha) to satisfy the feasibility conditions derived here: alpha >= -1 for Greco and Minto, alpha >= -rho for Finney. Before estimation, verify that your planned effect levels permit feasible solutions; if antagonism is expected, consider whether your model can remain valid across the clinically relevant dose range. This theoretical framework prevents computational failures and ensures biologically interpretable predictions, though practical implementation in standard software (NONMEM, Monolix, nlmixr) will require custom coding of feasibility constraints.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [Isobologram of the Loewe additivity model (), with parameters],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [Greco model representation of additivity, synergy, and antagonism, with isoboles shown at effect level. Parameters:],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [Isoboles forandto produce the effectand],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [Isoboles forandto produce the effect(left) and Isoboles forandto produce the effect(right)],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [Isoboles forandto produce the effectand],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_06.jpg", width: 90%),
  caption: [Singularity points and lines forand],
  placement: auto,
) <fig-6>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_07.jpg", width: 90%),
  caption: [Isoboles forandto produce the effectand],
  placement: auto,
) <fig-7>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_08.jpg", width: 90%),
  caption: [Isoboles for, andto produce the effect(left) and Isoboles forandto produce the effect(right)],
  placement: auto,
) <fig-8>
#set page(flipped: false)
```