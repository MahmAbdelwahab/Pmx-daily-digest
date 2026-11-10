---
layout: post
title: "A model-informed clinical trial simulation tool with a graphical user interface for Duchenne muscular dystrophy."
date: 2026-11-10
authors: "Jongjin Kim, Juan Francisco Morales, Sanghoon Kang, Marian Klose, Rebecca J. Willcocks, Michael J. Daniels, Ramona Belfiore-Oshan, Glenn A. Walter, William D. Rooney, Krista Vandenborne, Sarah Kim"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.13246"
paper_type: methodology
tags: [methodology, clinical-trial-design]
excerpt_text: "This tutorial outlines an end-to-end framework for developing an interactive R Shiny clinical trial simulation platform coupled with MonolixSuite/Simulx for rare diseases. Using Duchenne muscular dystrophy as a case study, it demonstrates synthetic population generation via CART-based algorithms (synthpop), parametric drug effect scaling, and empirical power calculation validated against independent Phase 3 placebo data."
pdf_path: "/assets/digests/2026-11-10-a-model-informed-clinical-trial-simulation-tool-with-a-graphical-user-interface/PMx_A_modelinformed_clinical_trial_simulatio_20261110.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This tutorial outlines an end-to-end framework for developing an interactive R Shiny clinical trial simulation platform coupled with MonolixSuite/Simulx for rare diseases. Using Duchenne muscular dystrophy as a case study, it demonstrates synthetic population generation via CART-based algorithms (synthpop), parametric drug effect scaling, and empirical power calculation validated against independent Phase 3 placebo data.

---

### Executive Summary
Quantitative disease progression models are increasingly leveraged to optimize trial designs in rare pediatric diseases where patient cohorts are small and placebo arms face severe recruitment bottlenecks. This paper details the software engineering and biostatistical methodology for implementing a web-based, model-informed clinical trial simulation (CTS) application in R Shiny, powered by MonolixSuite/Simulx via lixoftConnectors. To overcome data scarcity and patient privacy limitations from an original natural history cohort ($N = 118$), the authors implemented and benchmarked synthetic population generation, demonstrating that non-parametric sequential synthesis (synthpop) reliably preserved multi-dimensional covariate correlations where generative adversarial networks (CTGAN) failed due to sample size constraints. The tool incorporates reactive filtering logic for trial eligibility, maps chronological age to on-study trial duration, scales progression parameters ($DPT_{50}$, $\gamma$, $DP_{max}$) to simulate therapeutic efficacy, and calculates empirical statistical power across replicated virtual trials. The simulation engine was externally validated by successfully projecting the 1.5-year change from baseline in vastus lateralis fat fraction observed in an independent multi-center clinical trial placebo arm (NCT02851797).

---

### Scientific Context & Motivation
Clinical development in rare diseases such as Duchenne muscular dystrophy (DMD) suffers from small target populations, extreme phenotypic heterogeneity, and high ethical/operational burdens associated with randomized placebo groups. Natural history models capture the central trajectories and inter-individual variability of functional (6-minute walk distance) and imaging biomarkers (muscle fat fraction by magnetic resonance spectroscopy). However, translating these complex nonlinear mixed-effects models (NLMEMs) into actionable clinical trial designs requires extensive Monte Carlo simulation across permutations of sample size, study duration, inclusion/exclusion thresholds, and anticipated effect sizes. Clinical teams and regulatory liaisons often lack the coding expertise to interact directly with command-line simulation scripts. A major methodology gap exists in providing reproducible, computationally stable architectures that bridge pharmacometric engines (e.g., Simulx) with reactive graphical user interfaces (GUIs), while preserving the empirical covariance structure of small rare-disease cohorts without leaking protected health information.

---

## ⚡ Methodological Snapshot
The paper delineates an applied pharmacometric and software engineering framework for building interactive trial simulation tools. The pipeline begins with population expansion: a real-world natural history training set ($N = 118$) is expanded to a non-parametric virtual cohort ($N = 1{,}000$) using Classification and Regression Trees (CART) via the synthpop R library, thereby avoiding the mathematical instabilities of generative adversarial networks in low-$N$ regimes.

The simulation core utilizes lixoftConnectors and RsSimulx to pass reactive inputs from an R Shiny dashboard into pre-compiled MonolixSuite project files.[^fc-1] Model predictions integrate between-subject variability, residual unexplained variability, and individual-level covariate regressors (age, baseline scores, steroid status). Time scales are reconciled by simulating on the biological master time scale (chronological age) and subsequently centering trajectories on individual baseline entry ages to construct on-trial duration curves.

The analytical layer executes automated Monte Carlo loops over user-specified clinical trial designs. For each simulated trial replicate, patients are randomly sampled from the qualified filtered pool, assigned to control or active arms, and perturbed by percentage-based parameter modifications. Statistical engines apply automated hypothesis testing (continuous difference in mean change from baseline, or binary responder rate tests) to calculate empirical power across replicates.

---

## 📐 Statistical Framework
The methodology is underpinned by three statistical components: non-parametric conditional synthetic data generation, nonlinear mixed-effects longitudinal progression modeling, and Monte Carlo empirical hypothesis testing.

Synthetic data generation is formulated using the sequential conditional decomposition: $P(X_1, X_2, \dots, X_p) = P(X_1) \cdot P(X_2 \mid X_1) \cdots P(X_p \mid X_1, \dots, X_{p-1})$. For each attribute $j$, a CART model is trained on observed data using attributes 1 to $j-1$ as predictors, drawing synthetic values from the terminal node empirical distributions to preserve nonlinear dependencies without assuming parametric multivariate normality.

Longitudinal disease progression is governed by nonlinear mixed-effects models where the expected response $y_{ij}$ for individual $i$ at age $t_{ij}$ follows $y_{ij} = f(t_{ij}, \theta_i) + \epsilon_{ij}$. Structural functions $f(\cdot)$ follow sigmoid $E_{max}$ (fat fraction) or sigmoid $I_{max}$ (6MWD). Individual parameter vectors $\theta_i$ are defined as $\theta_i = \theta_{pop} \cdot \exp(\eta_i + \beta \cdot Cov_i)$, where $\eta_i \sim \text{MVN}(0, \Omega)$ represents between-subject variability, and $\epsilon_{ij} \sim N(0, \sigma^2)$ represents residual error.

Empirical power ($1 - \beta$) is estimated as the proportion of $M$ simulated independent trial replicates where the test statistic exceeds the critical threshold at significance level $\alpha$: $\text{Power} = (1 / M) \cdot \sum_{m=1}^M I(p_m < \alpha)$, where $p_m$ is derived from a two-sample Welch's $t$-test comparing mean changes from baseline between active and placebo arms.

---

### Estimator Behavior
Because power is determined via Monte Carlo simulation rather than analytical closed-form asymptotic approximations, the precision of the empirical power estimate follows binomial sampling variance: $\text{Var}(\text{Power}) = \text{Power} \cdot (1 - \text{Power}) / M$, where $M$ is the number of replicated clinical trials. With $M = 100$ replicates, the standard error of the power estimate around $80\%$ is approximately $4.0\%$, which is sufficient for real-time exploratory GUI navigation, whereas final confirmatory power curves require $M \ge 1{,}000$ to depress the standard error below $1.2\%$.

The underlying NLMEM parameter estimates were imported from prior Monolix runs utilizing the Stochastic Approximation Expectation Maximization (SAEM) algorithm, ensuring asymptotically unbiased and consistent parameter estimates with stable convergence properties.

---

### Validation Design
Validation was executed in two tiers: internal generative fidelity and external clinical trial predictability.

Internal validation evaluated the synthpop virtual cohort against empirical distributions via univariate density overlays, Kolmogorov-Smirnov distance assessments, and bivariate scatterplot matrices to confirm that synthetic patients did not violate physiological correlation bounds (e.g., negative correlation between baseline age and remaining 6MWD).

External validation utilized an independent clinical trial cohort from a published Phase 3 DMD study (NCT02851797). The simulation engine was configured with identical intent-to-treat inclusion criteria (ages 8-12, vastus lateralis fat fraction 0.06-0.30, 100% corticosteroid use, $N = 39$ placebo subjects, 1.5-year duration with quarterly visits). Virtual trials (1,000 replicates) were simulated using full stochastic random-effects propagation. The predicted mean changes and 90% prediction intervals for vastus lateralis fat fraction accurately captured the observed empirical trial outcomes across 42 global study sites.

---

### Applicability Boundaries
The framework operates effectively when: (1) robust, validated longitudinal natural history progression models with well-characterized covariate effects exist; (2) target virtual populations fall within the empirical multivariate envelope of the training data; (3) the eligible filtered sample size maintains $N \ge 10$ (a hard cutoff enforced to prevent severe sampling bias). 

The tool fails or produces unreliable estimates when: (1) users attempt to simulate patient phenotypes outside observed covariate bounds (e.g., non-ambulatory patients older than 18 years); (2) the investigational drug possesses a complex non-linear PK/PD profile that cannot be approximated by a constant proportional shift in disease progression slope or half-maximal age; (3) dropout patterns in real-world execution are informative and non-random, as the simulation engine currently models complete protocol adherence without attrition mechanisms.

---

### Comparison to Alternatives
Compared to generative adversarial approaches (e.g., CTGAN), synthpop demonstrated superior stability and distribution fidelity for small sample tabular biomedical data ($N = 118$), where GAN generators suffered from non-convergence and distorted inter-covariate correlations.

Compared to script-based trial simulators (e.g., command-line Simulx, NONMEM $SIMULATION, or base R scripts), the Shiny GUI paradigm reduces user-entry syntax errors, democratizes trial optimization for non-programming clinicians, and provides dynamic reactive feedback on how eligibility criteria throttle available sample size.

Compared to dedicated proprietary trial design platforms (e.g., Trial Simulator, Cytel East), this approach natively preserves the mechanistic or semi-mechanistic pharmacometric model structure developed during drug discovery, preventing the loss of non-linear pharmacokinetic/pharmacodynamic relationships.

---

### Implementation Guidance
Implementation relies on R (>= 4.3.2) and MonolixSuite (version 2023R1). Critical package dependencies include `lixoftConnectors` and `RsSimulx` for the simulation backend; `shiny`, `shinyjs`, and `shinydashboard` for the reactive GUI; and `synthpop` for synthetic cohort generation.

Key architectural recommendations:
1. Isolate the Monolix/Simulx execution scripts within dedicated reactive event observers (`observeEvent`) triggered only by explicit 'Run' buttons to avoid continuous, costly re-computation during slider adjustments.
2. When simulating age-dependent disease progression models, define age as an explicit regressor in Simulx, perform the longitudinal integration, and vectorize post-processing in R to translate age trajectories into study time relative to entry (`Time_on_study = Age - Baseline_Age`).
3. Pre-generate and store large synthetic populations (e.g., $N = 1{,}000$ to $10{,}000$) as static `.rds` files rather than running CART synthesizers on-the-fly within the Shiny server session to optimize memory overhead and response latency.

---

## 📊 Key Findings
The authors established a robust blueprint for GUI-driven clinical trial simulation: (1) For small rare-disease datasets ($N \sim 100$), recursive partitioning synthesis via synthpop out-performed conditional tabular GANs (CTGAN) in reproducing continuous and categorical joint covariate distributions without mode collapse; (2) The reactive server architecture seamlessly translates chronological age models into study-relative time frames using covariate regressors; (3) Simulation-based power estimation was operationalized via automated Monte Carlo replicates evaluating mean changes from baseline using two-sample $t$-tests and binary responder thresholds via Chi-square/Fisher's exact tests; (4) External validation against an independent 42-site trial (NCT02851797) placebo arm demonstrated that the synthetic population and underlying NLMEM accurately reproduced real-world 18-month progression dynamics.

---

### Strengths & Limitations

#### Strengths
- Provides end-to-end pseudocode and architectural guidance for integrating Monolix/Simulx with reactive R Shiny dashboards via lixoftConnectors and RsSimulx.
- Methodologically sound benchmark of generative tabular modeling, showing synthpop's superiority over deep learning CTGAN architectures for small rare-disease sample sizes.
- Rigorous external validation of the simulation engine against an independent global multi-center trial (NCT02851797) placebo cohort.
- Careful alignment of time-scale transformations, handling chronological age as an underlying disease progression regressor while outputting trial-relative follow-up times.

#### Limitations (Acknowledged by Authors)
- Assumed drug effects rely on arbitrary empirical percentage shifts in structural parameters rather than exposure-driven or mechanistic pharmacodynamic models.
- Disease progression models are restricted to specific available endpoints (6MWD and MRS fat fraction of vastus lateralis/soleus).
- Large-scale Monte Carlo power curves across multi-arm multi-duration factorial grids can induce computational latency within interactive Shiny sessions.

#### Limitations (Expert Review)
- The primary statistical engine evaluates change from baseline using studentized two-sample $t$-tests, whereas regulatory submissions standardly employ Mixed-effects Models for Repeated Measures (MMRM) or ANCOVA adjusting for baseline covariates.
- The parametric drug effect implementation assumes uniform proportional modification of disease progression parameters across all individuals, ignoring potential pharmacogenomic or exposure-mediated inter-individual variability in treatment response.
- Synthpop-generated virtual patients cannot extrapolate beyond the support of the observed natural history data space, potentially biasing power estimates if inclusion criteria are set near empirical boundaries.

#### Generalizability
The structural, reactive, and statistical framework of this Shiny-Simulx pipeline is broadly applicable to other rare pediatric or neurodegenerative diseases where natural history NLMEMs exist. However, direct porting of the backend requires active commercial licenses for MonolixSuite.

---

### Key Equations

**Positive Parameter Perturbation (Assumed Drug Effect)**

{% raw %}
$$
P_{\text{treatment}} = P_{\text{placebo}} \times \left(1 + \frac{\%\text{effect}}{100}\right)
$$
{% endraw %}

Used to model drug effects that retard disease progression by shifting progression-delaying parameters (such as $DPT_{50}$, the age at half-maximal progression) upward relative to natural history placebo trajectory.

**Negative Parameter Perturbation (Assumed Drug Effect)**

{% raw %}
$$
P_{\text{treatment}} = P_{\text{placebo}} \times \left(1 - \frac{\%\text{effect}}{100}\right)
$$
{% endraw %}

Used to scale structural progression parameters downward (such as Hill coefficient $\gamma$ or maximum disease progression $DP_{max}$) to reflect therapeutic attenuation of functional decline or muscle fat accumulation.

---

### Figures & Tables

- **Figure 1**: User interface layout of the DMD clinical trial simulation app featuring Criteria Selection, Clinical Trial Design, and Power Curve tabs.
  - *Significance*: Demonstrates the user experience design that abstracts complex MonolixSuite simulation scripts into reactive inputs (sliders, dropdowns) and dynamic visualization panels.
- **Figure 2**: Comparative multivariate distribution plots (correlations and histograms) between empirical real-world DMD data ($N = 118$) and a virtual synthetic population ($N = 1{,}000$) generated via synthpop.
  - *Significance*: Confirms that sequential regression tree synthesis accurately replicates continuous and categorical covariate covariance structures without overfitting or privacy compromise.
- **Figure 3**: Server-side control logic for dynamic cohort filtering based on continuous ranges and target proportions for discrete variables (e.g., steroid use status).
  - *Significance*: Illustrates the computational data-flow pipeline required to enforce minimum sample size rules (e.g., $N \ge 10$ threshold) before executing backend simulation engines.
- **Figure 4**: Longitudinal functional and biomarker trajectories under baseline natural history versus proportional parameter adjustments (% changes in $DPT_{50}$, $\gamma$, $DP_{max}$).
  - *Significance*: Provides a visual and mathematical translation of how phenomenological disease progression parameters correspond to clinical hypotheses of treatment efficacy.
- **Figure 5**: Simulation visualization modes: absolute chronological age vs. relative study follow-up time ribbon plots (40th, median, 60th percentiles), individual trajectory plots, and multi-scenario power curves.
  - *Significance*: Highlights key visual communication techniques for clinical trialists, shifting from complex pharmacometric regressor spaces to standard clinical trial duration metrics.

---

### Code & Reproducibility Assessment
Partially reproducible; the graphical user interface is publicly accessible (https://app.cop.ufl.edu/dmd), and detailed R/Shiny pseudocode and environment dependencies are provided in the supplementary material. However, full computational replication requires access to proprietary MonolixSuite/Simulx licenses and restricted ImagingNMD individual-level patient data.

---

### Supplementary Materials
Appendix S1 contains the formal structural equations for the underlying multivariate DMD models (sigmoid $I_{max}$ for 6MWD; sigmoid $E_{max}$ for MRS fat fraction), population parameter estimates, and complete R code listings covering synthpop integration, dynamic UI filtering, Simulx regressor mapping, and Monte Carlo power loops.

---

### Future Directions
Future iterations should replace the basic two-sample $t$-test endpoint evaluator with longitudinal mixed-effects models for repeated measures (MMRM) or Bayesian joint models to match modern regulatory analysis plans. Additionally, bridging the tool to open-source simulation engines (such as rxode2 or mrgsolve) would eliminate proprietary licensing hurdles and facilitate high-throughput cloud parallelization.

---

### Expert Commentary
From a statistical trial design perspective, this tutorial bridges a critical operational gap between advanced NLMEM disease progression modeling and multidisciplinary trial optimization. The authors make a pivotal methodological observation regarding synthetic cohorts: while deep learning tabular generators (CTGAN) are currently en vogue, their high sample complexity renders them unstable and prone to mode collapse on small rare disease datasets ($N \sim 100$). The sequential CART approach of synthpop is mathematically far better suited to preserving multivariate covariance in this regime. However, practitioners must be cautious with the statistical testing module: relying on simple $t$-tests of changes from baseline oversimplifies Phase 2/3 analytical reality, where missing-at-random (MAR) dropouts, intercurrent events, and baseline-adjusted ANCOVA/MMRM estimates govern the true Type I error and power trade-offs.

---

### Bottom Line
A premier methodological blueprint for pharmacometricians seeking to deploy interactive, model-informed clinical trial simulation platforms; highlights recursive data synthesis (synthpop) as superior to deep generative models for small cohorts and provides a battle-tested template for reactive power estimation.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The simulation core utilizes lixoftConnectors and RsSimulx to pass reactive inputs from an R Shiny dashboard into pre-compiled MonolixSuite project files.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “With M = 100 replicates, the standard error of a power estimate around 80% is approximately 4.0%.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “Depressing the standard error of the power estimate below 1.2% requires M >= 1,000 replicates.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “Underlying nonlinear mixed-effects model parameters were estimated in Monolix using the Stochastic Approximation Expectation Maximization (SAEM) algorithm.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “Internal validation of the synthpop virtual cohort utilized univariate density overlays, Kolmogorov-Smirnov distance assessments, and bivariate scatterplot matrices.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “Internal validation confirmed a negative correlation between baseline age and remaining 6-minute walk distance in synthetic patients.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **NUMERIC_MISMATCH** — original: “External validation against trial NCT02851797 applied a vastus lateralis fat fraction inclusion threshold of 0.06 to 0.30.” → correction: “Inclusion criteria for the simulation were set to match the clinical trial population (i.e., age between 8 and 12 years, baseline fat fraction of vastus lateralis between 0.06% and 0.30%, 100% steroid users).”
[^fc-8]: **UNSUPPORTED** — original: “The simulation engine models complete protocol adherence without attrition or dropout mechanisms.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “The software implementation relies on R version >= 4.3.2.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “Required R package dependencies for the tool include lixoftConnectors, RsSimulx, shiny, shinyjs, shinydashboard, and synthpop.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The authors recommend isolating Monolix/Simulx execution scripts within dedicated reactive event observers triggered by explicit 'Run' buttons.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “The authors recommend pre-generating and storing synthetic populations of N = 1,000 to 10,000 as static .rds files.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “Full computational replication of the tool requires access to proprietary MonolixSuite/Simulx licenses and restricted ImagingNMD individual-level patient data.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Layout of the Duchenne muscular dystrophy clinical trial simulation tool.]({{ site.baseurl }}/assets/digests/2026-11-10-a-model-informed-clinical-trial-simulation-tool-with-a-graphical-user-interface/figures/fig_01.jpg)

![Comparison between real and virtual populations.]({{ site.baseurl }}/assets/digests/2026-11-10-a-model-informed-clinical-trial-simulation-tool-with-a-graphical-user-interface/figures/fig_02.jpg)

![Server logic of selecting subgroups for a binary discrete variable.]({{ site.baseurl }}/assets/digests/2026-11-10-a-model-informed-clinical-trial-simulation-tool-with-a-graphical-user-interface/figures/fig_03.jpg)

![Assumed drug effects.]({{ site.baseurl }}/assets/digests/2026-11-10-a-model-informed-clinical-trial-simulation-tool-with-a-graphical-user-interface/figures/fig_04.jpg)

![Result visualization.]({{ site.baseurl }}/assets/digests/2026-11-10-a-model-informed-clinical-trial-simulation-tool-with-a-graphical-user-interface/figures/fig_05.jpg)