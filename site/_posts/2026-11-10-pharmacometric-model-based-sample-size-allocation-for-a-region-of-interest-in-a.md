---
layout: post
title: "Pharmacometric Model-Based Sample Size Allocation for a Region of Interest in a Multi-Regional Phase 2 Trial: A Case Study of an Anti-Psoriatic Drug."
date: 2026-11-10
authors: "Xiao Zhang, Yubo Xiao, Junyi Wu, Scott Marshall, Xuan Zhou"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70090"
paper_type: methodology
tags: [methodology, dose-response]
excerpt_text: "Allocating sample size to a specific region of interest in exploratory multi-regional clinical trials (MRCTs) using conventional single-timepoint, single-arm statistical testing is severely underpowered (<40% power at 50% sample allocation). A pharmacometric (PMx) longitudinal dose-exposure-response approach pools information across all dose arms and visits, attaining >80% power with only 26% regional allocation (N = 45 of 175) to detect clinically meaningful regional heterogeneity."
pdf_path: "/assets/digests/2026-11-10-pharmacometric-model-based-sample-size-allocation-for-a-region-of-interest-in-a/PMx_Pharmacometric_ModelBased_Sample_Size_Al_20261110.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
Allocating sample size to a specific region of interest in exploratory multi-regional clinical trials (MRCTs) using conventional single-timepoint, single-arm statistical testing is severely underpowered (<40% power at 50% sample allocation). A pharmacometric (PMx) longitudinal dose-exposure-response approach pools information across all dose arms and visits, attaining >80% power with only 26% regional allocation (N = 45 of 175) to detect clinically meaningful regional heterogeneity.

---

### Executive Summary
In early exploratory drug development (Phase 2), multi-regional clinical trials (MRCTs) are increasingly utilized to accelerate global development, yet investigators face the challenge of evaluating regional heterogeneity (e.g., in East Asian subpopulations) within small overall trial sizes. Using a simulated 5-arm Phase 2 dose-ranging trial (N = 175) for an anti-psoriatic biologic, this methodology paper compares conventional end-of-trial pairwise hypothesis testing against a semi-mechanistic pharmacometric (PMx) model-based design. The PMx framework parameterized regional divergence as a shift in drug potency (ratio of $IC_{50}$, $R_{regionX}$) within a two-compartment PK and indirect response PD model, evaluated via Monte-Carlo Mapped Power (MCMP) and Stochastic Simulation and Estimation (SSE). The conventional t-test achieved less than 40% power to detect a borderline clinically meaningful difference (PASI50 vs 68.4% reduction) even when allocating 50% of the trial to Region X. In contrast, the PMx approach leveraged longitudinal data across all active doses and placebo, achieving >80% power with 26% allocation (N = 45). Furthermore, the authors delineate clinical decision boundary zones (reliable vs. gray/inconclusive) and demonstrate that integrating Bayesian informative priors centered on cross-regional exchangeability substantially shrinks decision uncertainty.

---

### Scientific Context & Motivation
Global simultaneous drug development relies heavily on multi-regional clinical trials (MRCTs), as advocated by ICH E17 guidance. However, including genetically and environmentally diverse regional populations in Phase 3 confirmatory trials without early characterization of intrinsic and extrinsic factors (e.g., body weight, metabolic polymorphisms, baseline disease dynamics) risks study failure or suboptimal regional dosing. While ICH E17 encourages evaluating potential heterogeneity in exploratory learning phases (Phase 2), it offers no formal quantitative rules for allocating sample size to specific regions of interest (e.g., China, Japan). Traditional MRCT sample size allocation methods are rooted in confirmatory consistency tests (e.g., preservation of at least 50% overall treatment effect in Region X), which are mathematically ill-suited for exploratory dose-ranging studies aimed at hypothesis generation and heterogeneity detection under strict sample size caps (e.g., N = 100–200).

---

## ⚡ Methodological Snapshot
This paper presents a simulation-estimation framework for determining regional sample size allocation in Phase 2 dose-ranging MRCTs. Rather than relying on isolated end-of-trial pairwise tests, the methodology leverages a semi-mechanistic pharmacometric model developed from early-phase data to simulate longitudinal clinical scores across multi-arm trial designs. Regional divergence is parameterized as a structural covariate on pharmacodynamic parameters, capturing the biology of differential sensitivity.

The framework couples Monte-Carlo Mapped Power (MCMP) with formal likelihood-ratio testing to screen regional allocation fractions (from 10% to 50% of total N = 175) required to achieve 80% power at $\alpha = 0.05$. It then constructs two-dimensional operating characteristic curves defining 'green' (ruling out regional differences), 'red' (confirming regional differences), and 'gray' (indeterminate) decision zones, evaluated across point estimates and 80% confidence intervals.

Finally, the methodology outlines a Bayesian evidence-synthesis extension, illustrating how informative priors reflecting cross-regional exchangeability or historical class data can be incorporated into non-linear estimation to compress decision uncertainty in exploratory cohorts without inflating patient burden.

---

## 📐 Statistical Framework
The underlying statistical framework assumes a longitudinal non-linear mixed-effects structure where individual response vectors $y_i$ follow $y_i = f(x_i, \theta_i) + \epsilon_i$, with $\epsilon_i \sim N(0, \sigma^2)$. The structural model $f$ is an indirect response model: $dR/dt = K_{syn} - K_{out} \cdot [1 - (I_{max} \cdot C_t) / (IC_{50} \cdot R_{regionX}^{IND_i} + C_t)] \cdot R$, where $IND_i$ is an indicator for Region X membership.

Hypothesis testing evaluates $H_0: R_{regionX} = 1$ versus $H_1: R_{regionX} \neq 1$. Under conventional testing, only $y_i(t_{end})$ for the 210 mg cohort is evaluated via two-sample Student's t-test: $t = (\bar{y}_{typ} - \bar{y}_{regX}) / [s_p \cdot \sqrt{1/n_{typ} + 1/n_{regX}}]$, discarding all intermediary time points and lower dose tiers. Under the PMx framework, test statistics are derived from the asymptotic chi-square distribution of the objective function value difference: $-2LL_{reduced} - (-2LL_{full}) \sim \chi^2(df=1)$. In the Bayesian extension, the prior distribution on $\ln(R_{regionX})$ is parameterized as $N(0, \tau^2_{prior})$, updated to a posterior distribution via maximum a posteriori (MAP) estimation.

---

### Estimator Behavior
The conventional endpoint t-test estimator is asymptotically unbiased for the mean difference at Week 12 in the evaluated dose tier, but exhibits severe variance inflation due to small regional subsamples (e.g., n = 8 to 18 per arm) and total neglect of covariance across longitudinal visits. MMRM recovers efficiency by borrowing covariance across visits under Missing at Random (MAR) assumptions, but still estimates discrete time-by-treatment categorical parameters.

The PMx non-linear mixed-effects estimator pool-estimates structural parameters ($K_{syn}$, $K_{out}$, $I_{max}$, $IC_{50}$) across all 5 trial arms (N = 175), confining regional estimation to a single covariate scalar ($R_{regionX}$). This functional constraint dramatically reduces the standard error of $R_{regionX}$, yielding steep power gains. MCMP estimation demonstrates negligible bias relative to full Stochastic Simulation and Estimation (SSE), with virtually identical power curves across all sample size allocation tiers.

---

### Validation Design
Validation was executed via extensive Monte Carlo clinical trial simulation. A master pseudo-population of N = 21,000 subjects (120x trial size) was generated from the semi-mechanistic model for each regional disparity scenario. Subsampling according to the 1:1:1:1:1 randomized 5-arm design (70, 140, 210, 280 mg, placebo) yielded 5,000 synthetic clinical trials of N = 175 each.

Power calculations were conducted across regional sample size fractions ranging from 10% to 50%. The primary benchmark scenario evaluated a 'borderline' difference where Region X achieves exactly PASI50 at Week 12 under 210 mg Drug A, compared to 68.4% in typical patients. Sensitivity benchmarks evaluated varying true $R_{regionX}$ values from 1.0 (no difference) to 5.4 (profound resistance). MCMP power was cross-validated against standard SSE across 500 fully re-estimated trials (Data S3).

---

### Applicability Boundaries
The method requires:
1. An existing, biologically plausible structural PK/PD or E-R model (typically derived from Phase 1/1b ascending-dose data) that can simulate longitudinal outcomes.
2. Mechanistic rationale regarding which model parameter mediates regional differences (e.g., clearance shifts vs receptor sensitivity).

The method is NOT recommended when:
- No prior longitudinal PK/PD data exist, precluding parametric model construction.
- Regional differences involve unmodeled, highly idiosyncratic qualitative endpoints or complex multimodal toxicities.
- Extreme model misspecification exists (e.g., assuming an indirect response model when the mechanism exhibits rapid target-mediated disposition or irreversible receptor inactivation).

---

### Comparison to Alternatives
Relative to Conventional End-of-Trial t-test:
- Advantages: Massive sample size reduction (26% allocation vs >50% required); utilizes all dose levels and longitudinal visits; directly informs dose-response curvature.
- Disadvantages: Requires structural model assumptions; higher computational and analytical overhead.

Relative to MMRM:
- Advantages: Parameterizes continuous time and dose mechanisms, gaining statistical power from underlying pharmacodynamic curvature rather than treating time/dose as unconstrained categorical factors.
- Disadvantages: MMRM is model-agnostic and easier to specify in standard statistical analysis plans (SAPs).

Relative to ICH E17 Consistency Criteria (e.g., Method 1 / Method 2):
- Advantages: Specifically designed for hypothesis-testing and heterogeneity detection in exploratory learning phases, avoiding the pitfall of underpowered confirmatory consistency rules in small sample sizes.

---

### Implementation Guidance
1. Software Workflow: Implement PK/PD simulation in NONMEM or R (mrgsolve/RxODE). For fast power evaluations, utilize PsN's `mcmp` command applied to an expanded master dataset (e.g., 100–120x trial size) rather than full SSE to reduce computational runtime from days to hours.
2. Randomization Strategy: Sizing algorithms must assume regional block-randomization across all dose groups (e.g., 1:1:1:1:1 within Region X) to avoid aliasing regional covariates with dose levels.
3. Sensitivity Auditing: Conduct multidimensional sensitivity checks perturbing baseline $K_{out}$, between-subject variability (BSV), and residual unexplained variability (RUV) by $\pm 30\%$ to assess power stability.
4. Bayesian Regularization: If implementing informative priors for decision-making, define prior distributions a priori in the statistical analysis plan and evaluate operating characteristics across weak, moderate, and robust prior variances.

---

## 📊 Key Findings
1. Conventional statistical testing (one-tailed t-test at Week 12 on the highest dose group) suffered from severe power deficits, plateauing below 40% power to detect a borderline regional difference (50% vs 68.4% median PASI reduction) even when allocating half of the entire trial (88/175 patients) to Region X.
2. The PMx model-based approach attained >80% power to detect the same regional effect with only 26% sample size allocation (45 patients across 5 arms: 9 subjects/arm), while preserving the study's overall objective of establishing the global dose-response profile.
3. Repeated-measures ANOVA / MMRM improved power relative to end-of-trial t-tests by handling missing data and borrowing variance information across time, but remained markedly inferior to PMx because categorical time formulations do not model the underlying functional trajectory of the pharmacological response.
4. When incorporating parameter estimation uncertainty (80% confidence intervals rather than point estimates), both approaches revealed wide 'gray zones' of inconclusive regional relevance near the clinical boundary ($R_{regionX} = 2.6$). Incorporating weakly-to-moderately informative Bayesian priors (variance 0.36 to 0.09) centered on regional parity ($R_{regionX} = 1.0$) resolved borderline ambiguity and minimized decision risk without inflating sample size.

---

### Strengths & Limitations

#### Strengths
- Provides a concrete, mathematically sound alternative to consistency-based methods that misalign with exploratory trial objectives.
- Integrates longitudinal PK/PD information across all dose arms and timepoints, substantially increasing statistical efficiency.
- Employs Monte-Carlo Mapped Power (MCMP) to enable rapid evaluation of complex nonlinear mixed-effects designs, benchmarked against gold-standard Stochastic Simulation and Estimation (SSE).
- Explicitly quantifies decision risk by constructing operating characteristic zones (green = reliable consistency, red = reliable divergence, gray = inconclusive/uncertain).

#### Limitations (Acknowledged by Authors)
- Total trial sample size (N = 175) was fixed a priori; the framework addresses conditional regional allocation rather than joint global-regional sample size optimization.
- The true functional locus of regional heterogeneity was assumed to manifest exclusively as an $IC_{50}$ potency shift, whereas true clinical divergence could alter $I_{max}$, baseline turnover ($K_{syn}/K_{out}$), or linear clearance.
- Computational runtime and engineering complexity for nonlinear mixed-effects simulation-estimation are substantially higher than standard statistical testing.

#### Limitations (Expert Review)
- The Bayesian illustrative example utilized arbitrary conjugate/normal prior variances (0.09, 0.36, 1.44) without formal robust mixture priors or commensurate priors to guard against prior-data conflict.
- Assumed balanced regional block-randomization across all dose tiers, which may be operationally challenging to recruit in rapid exploratory global studies.
- Did not evaluate model misspecification penalties (e.g., fitting an Emax indirect response model when the true biological system displays tolerance or rebound kinetics).

#### Generalizability
Highly generalizable across therapeutic areas featuring longitudinal continuous or biomarker endpoints (e.g., immunology, metabolic disease, oncology tumor kinetics) where early Phase 1/2a data allow construction of a preliminary semi-mechanistic or empirical E-R model. The framework is directly transferable to allocating sample size across any discrete subgroup (e.g., pediatric cohorts, renal impairment tiers, pharmacogenomic strata).

---

### Key Equations

**Regional Potency Covariate Parameterization**

{% raw %}
$$
IC_{50, \text{RegionX}} = IC_{50, \text{typical}} \times R_{\text{regionX}}
$$
{% endraw %}

Characterizes the pharmacodynamic divergence in Region X as a proportional scalar on drug potency ($IC_{50}$), where $R_{regionX} = 1$ denotes identical potency and $R_{regionX} > 1$ indicates reduced sensitivity in the regional population.

**Monte-Carlo Mapped Power Test Statistic**

{% raw %}
$$
\sum \Delta iOFV = \sum_{i=1}^{N_{\text{sample}}} \left( iOFV_{i, \text{reduced}} - iOFV_{i, \text{full}} \right) > 3.84
$$
{% endraw %}

Likelihood ratio test criterion for evaluating regional covariate significance ($\alpha = 0.05$, $df = 1$) across simulated trial realizations using pre-computed individual objective function values.

---

### Figures & Tables

- **Figure 1**: Schematic of the two-compartment PK and indirect response PD model (Panel A) and simulated longitudinal PASI reduction trajectories for typical vs Region X patients at 210 mg Drug A illustrating borderline divergence (Panel B).
  - *Significance*: Defines the structural model architecture and visualizes the minimum clinically meaningful regional difference (PASI50 at Week 12, corresponding to $R_{regionX} = 2.6$).
- **Figure 2**: Statistical power comparison across regional sample size allocations (Panel A) and across varying underlying regional effect sizes $R_{regionX}$ (Panel B) for PMx vs conventional t-test.
  - *Significance*: Demonstrates that the PMx approach attains >80% power at 26% allocation (N=45), whereas conventional testing peaks under 40% power at 50% allocation (N=88).
- **Figure 3**: Operating characteristic curves delineating green (reliable consistency), red (reliable divergence), and gray (inconclusive/unreliable) decision zones based on point estimates and 80% CIs.
  - *Significance*: Reveals that incorporating estimation uncertainty substantially expands the gray decision zone, but the PMx model maintains a sharper decision gradient than conventional stats.
- **Figure 4**: Bayesian posterior estimates and 80% CIs for Region X PASI reduction when conditioning trial data on informative priors of varying precision (variance = 0.09, 0.36, 1.44).
  - *Significance*: Shows that borrowing prior mechanistic or historical knowledge resolves borderline uncertainty and drives posterior intervals away from the ambiguous PASI50 boundary.

---

### Code & Reproducibility Assessment
Analyses were conducted using NONMEM (v7.5.0), PsN (v5.3.1), and R (v4.3.2) on an Ubuntu cluster. Model parameter values and design schedules are thoroughly tabulated in Supplementary Data S1 and S2; however, raw NONMEM control streams and executable R workflow scripts were not deposited in a public repository.

---

### Supplementary Materials
Five supplementary documents provide detailed modeling parameters (Table S1), full trial simulation schedules (Data S1/Figure S1), impact assessments on overall trial dose-response characterization when regional heterogeneity is present (Data S2/Figure S4), comparison of MCMP vs SSE runtime/accuracy (Data S3/Figure S5), and comparative evaluations against Mixed Models for Repeated Measures (MMRM).

---

### Future Directions
1. Extend the PMx allocation framework to simultaneous joint optimization of overall trial sample size, regional allocation proportions, and dose selection under multi-objective utility functions.
2. Evaluate robust Bayesian meta-analytic priors (MAP) and elastic mixture priors to handle prior-data conflict without artificially suppressing true regional heterogeneity.
3. Investigate the impact of structural model misspecification and time-varying compliance/dropout on PMx operating characteristics.

---

### Expert Commentary
This paper tackles a persistent friction point between global quantitative clinical pharmacology teams and regional regulatory biostatisticians. Regulatory bodies in East Asia (e.g., NMPA, PMDA) often mandate regional enrollment in early Phase 2 MRCTs to de-risk Phase 3 bridging, yet biostatisticians frequently resort to traditional pairwise power calculations that demand 50% or more of trial slots for a single region—effectively derailing the exploratory global trial. Zhang and colleagues elegantly prove that this 'sample size bloat' is an artifact of inefficient statistical estimators that throw away 80% of the trial data (placebo and lower dose arms) and ignore the functional time dimension. By framing regional heterogeneity as a parametric covariate shift within an indirect response PK/PD model, statistical power shifts from an N-per-arm comparison to an integrated curvature-estimation exercise. Methodologists should note the pragmatic utility of MCMP here: re-estimating a full vs. reduced model once on an expanded dataset and computing individual OFV differences provides an accurate shortcut that avoids the computational bottleneck of thousands of nonlinear mixed-effects re-estimations.

---

### Bottom Line
For exploratory multi-regional Phase 2 trials, abandon single-arm endpoint t-tests or MMRMs for regional sample size sizing; leveraging a pharmacometric D-E-R model across all dose cohorts and visits cuts the required regional patient commitment in half while achieving target statistical power and clearer decision boundaries.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “Confirmatory consistency tests are mathematically ill-suited for exploratory dose-ranging studies with strict sample size caps of N = 100 to 200.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “The framework screens regional allocation fractions from 10% to 50% of total N = 175 using Monte-Carlo Mapped Power coupled with likelihood-ratio testing to achieve 80% power at $\alpha = 0.05$.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “The statistical framework assumes individual response vectors follow $y_i = f(x_i, \theta_i) + \epsilon_i$, with $\epsilon_i \sim N(0, \sigma^2)$.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “The structural pharmacodynamic model is an indirect response model: $dR/dt = K_{syn} - K_{out} \cdot [1 - (I_{max} \cdot C_t) / (IC_{50} \cdot R_{regionX}^{IND_i} + C_t)] \cdot R$.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “In the indirect response model, $IND_i$ is an indicator variable for Region X membership.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “The hypothesis testing framework evaluates $H_0: R_{regionX} = 1$ versus $H_1: R_{regionX} \neq 1$.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **CONTRADICTED** — original: “Under conventional testing, only $y_i(t_{end})$ for the 210 mg cohort is evaluated using a two-sample Student's t-test.” → correction: “The conventional statistical approach employed a one-tailed t-test [15] to compare the clinical responses to 210 mg doses of Drug A at the end of the trial (Week 12) between Region X and typical patients in each sampled trial.”
[^fc-8]: **UNSUPPORTED** — original: “In the Bayesian extension, the prior distribution on $\ln(R_{regionX})$ is parameterized as $N(0, \tau^2_{prior})$ and updated via maximum a posteriori (MAP) estimation.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “The conventional endpoint t-test estimator is asymptotically unbiased for the mean difference at Week 12 in the evaluated dose tier.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “The conventional endpoint t-test exhibits variance inflation due to small regional subsamples of n = 8 to 18 per arm and neglect of longitudinal covariance.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The pharmacometric non-linear mixed-effects estimator pool-estimates $K_{syn}$, $K_{out}$, $I_{max}$, and $IC_{50}$ across all 5 trial arms (N = 175).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “Confining regional estimation to a single covariate scalar ($R_{regionX}$) reduces its standard error and yields power gains.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **CONTRADICTED** — original: “The pharmacometric method requires a mechanistic rationale regarding which model parameter mediates regional differences.” → correction: “This lack of information introduces uncertainties into the D-E-R model, particularly in parameterizing inter-regional effects. For instance, the $IC_{50}$ value determined after the Phase 2 study may differ significantly from the current model, or the inter-regional effects may be better explained by parameters such as $I_{max}$ or $K_{syn}$ rather than $IC_{50}$. In addition, between-subject and within-subject variabilities should also influence sample size estimation for the planned trials. Due to the high degree of uncertainty inherent in small-scale trials during the early stages of drug development, greater attention should be paid to study design from the outset to ensure the model's ability to robustly characterize and distinguish variabilities. Conducting sensitivity analysis of model parameters and variabilities, as well as evaluating various assumptions regarding inter-regional effects, can help explore potential scenarios, enabling more cautious and informed decision-making.”
[^fc-14]: **UNSUPPORTED** — original: “The pharmacometric method is not recommended when no prior longitudinal PK/PD data exist.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “The pharmacometric method is not recommended when regional differences involve unmodeled idiosyncratic qualitative endpoints or complex multimodal toxicities.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “The pharmacometric method is not recommended when extreme model misspecification exists, such as assuming an indirect response model for mechanisms with rapid target-mediated disposition or irreversible receptor inactivation.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **CONTRADICTED** — original: “Compared to the conventional t-test, the pharmacometric method reduces required regional allocation from over 50% to 26%.” → correction: “The statistical approach, relying solely on end-of-trial observations from a single dose group, exhibited a maximum power of less than 40% in detecting treatment differences across regions when Region X accounts for 50% of the total sample size.”
[^fc-18]: **UNSUPPORTED** — original: “Compared to MMRM, the pharmacometric method parameterizes continuous time and dose mechanisms to gain statistical power from pharmacodynamic curvature.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-19]: **UNSUPPORTED** — original: “MMRM is model-agnostic and easier to specify in standard statistical analysis plans compared to pharmacometric models.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-20]: **UNSUPPORTED** — original: “For fast power evaluations, PsN's mcmp command applied to an expanded master dataset of 100 to 120 times the trial size reduces computational runtime from days to hours compared to full SSE.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-21]: **UNSUPPORTED** — original: “Regional block-randomization across all dose groups (such as 1:1:1:1:1 within Region X) is required to avoid aliasing regional covariates with dose levels.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-22]: **UNSUPPORTED** — original: “The authors recommend conducting sensitivity checks by perturbing baseline $K_{out}$, between-subject variability, and residual unexplained variability by $\pm 30\%$.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-23]: **UNSUPPORTED** — original: “If implementing informative priors, prior distributions should be defined a priori in the statistical analysis plan and evaluated across weak, moderate, and robust prior variances.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-24]: **CONTRADICTED** — original: “Repeated-measures ANOVA and MMRM improve power relative to end-of-trial t-tests by borrowing variance information across time, but remain inferior to the pharmacometric approach.” → correction: “Methods such as Mixed Models for Repeated Measures (MMRM) can leverage data across multiple dose groups, offering increased power to detect inter-regional differences when compared to the t-test (Figure S5). However, MMRM gains limited power from analyzing rich longitudinal data, particularly in comparison to the PMx approach, where power increases substantially. This limitation arises because MMRM typically treats time as a factor or categorical variable, without explicitly modeling the trajectory of treatment effects over time... However, in the context of complete data from a single dose group—even with longitudinal measurements—MMRM offers limited benefit over the t-test in enhancing the statistical power of a trial.”
[^fc-25]: **UNSUPPORTED** — original: “The Bayesian illustrative example utilized conjugate normal prior variances of 0.09, 0.36, and 1.44 without formal robust mixture or commensurate priors.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-26]: **UNSUPPORTED** — original: “The simulation study did not evaluate model misspecification penalties such as tolerance or rebound kinetics.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-27]: **UNSUPPORTED** — original: “Model parameter values and design schedules are tabulated in Supplementary Data S1 and S2.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-28]: **UNSUPPORTED** — original: “Raw NONMEM control streams and executable R workflow scripts were not deposited in a public repository.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-11-10-pharmacometric-model-based-sample-size-allocation-for-a-region-of-interest-in-a/figures/fig_01.jpg)

![The dose-exposure-response (D-E-R) model (A) and the borderline interregional difference in clinical response (B). RregionXhas a value of 2.6, indicating a borderline dif]({{ site.baseurl }}/assets/digests/2026-11-10-pharmacometric-model-based-sample-size-allocation-for-a-region-of-interest-in-a/figures/fig_02.jpg)

![Power to detect statistically significant inter-regional differences assuming a borderline difference between Region X and typical patients (A) and varying magnitudes of ]({{ site.baseurl }}/assets/digests/2026-11-10-pharmacometric-model-based-sample-size-allocation-for-a-region-of-interest-in-a/figures/fig_03.jpg)

![Probability of providing reliable or unreliable conclusions regarding the clinical relevance of inter-regional differences using a conventional statistical approach (A, B]({{ site.baseurl }}/assets/digests/2026-11-10-pharmacometric-model-based-sample-size-allocation-for-a-region-of-interest-in-a/figures/fig_04.jpg)

![Assessment of treatment response in Region X patients through the integration of prior knowledge and trial outcomes. Results are shown as median (black dot) and 80% confi]({{ site.baseurl }}/assets/digests/2026-11-10-pharmacometric-model-based-sample-size-allocation-for-a-region-of-interest-in-a/figures/fig_05.jpg)