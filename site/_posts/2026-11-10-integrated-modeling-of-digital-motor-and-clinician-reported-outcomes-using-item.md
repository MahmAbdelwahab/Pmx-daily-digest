---
layout: post
title: "Integrated Modeling of Digital-Motor and Clinician-Reported Outcomes Using Item Response Theory: Towards Powerful Trials for Rare Neurological Diseases."
date: 2026-11-10
authors: "Alzahra Hamdan, Andreas Traschütz, Lukas Beichert, Xiaomei Chen, Cynthia Gagnon, Bart P. van de Warrenburg, Filippo M. Santorelli, Nazlı Başak, Giulia Coarelli, Rita Horvath, Stephan Klebe, Rebecca Schüle, Andrew C. Hooker, Matthis Synofzik, Mats O. Karlsson"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70081"
paper_type: methodology
tags: [methodology]
excerpt_text: "Hamdan and colleagues establish a joint continuous-and-categorical Item Response Theory (ccIRT) framework implemented in NONMEM that concurrently models ordinal clinician-reported items (SARA) and high-dimensional, continuous digital-motor sensor outcomes (wearable gait and stationary limb coordination). By coupling digital sensors to a unidimensional latent disease severity metric, the joint model decreased individual estimation uncertainty by 49% and reduced simulated clinical trial sample size requirements by 49% to 61% while maintaining nominal Type I error control."
pdf_path: "/assets/digests/2026-11-10-integrated-modeling-of-digital-motor-and-clinician-reported-outcomes-using-item/PMx_Integrated_Modeling_of_DigitalMotor_and__20261110.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
Hamdan and colleagues establish a joint continuous-and-categorical Item Response Theory (ccIRT) framework implemented in NONMEM that concurrently models ordinal clinician-reported items (SARA) and high-dimensional, continuous digital-motor sensor outcomes (wearable gait and stationary limb coordination). By coupling digital sensors to a unidimensional latent disease severity metric, the joint model decreased individual estimation uncertainty by 49% and reduced simulated clinical trial sample size requirements by 49% to 61% while maintaining nominal Type I error control.

---

### Executive Summary
In rare neurodegenerative conditions such as autosomal recessive cerebellar ataxias (e.g., ARSACS, SPG7), therapeutic trials are severely constrained by low patient prevalence, slow disease progression, and the substantial measurement noise of composite ordinal endpoints like the Scale for the Assessment and Rating of Ataxia (SARA). This paper introduces a pharmacometric methodology—continuous-and-categorical Item Response Theory (ccIRT)—to integrate mixed data types across modalities into a single latent variable framework. Leveraging longitudinal natural history data from 187 patients (331 visits) in the PROSPAX study, the authors mapped 8 ordinal SARA items alongside 26 sensor-derived digital-motor outcomes (9 wearable gait metrics and 17 stationary upper/lower-limb coordination metrics) onto a common latent disease construct ($\psi$). Through a structured multi-step selection and collinearity screening workflow based on residual correlation structures, three digital gait and three digital limb coordination metrics were retained. The integrated ccIRT model reduced the variance of individual latent disease severity estimates by an average of 49% (SE dropping from 0.30 to 0.21). In clinical trial simulations using stochastic simulation and estimation (SSE), this translated into a 49% (ARSACS) and 61% (SPG7) reduction in the sample sizes required to detect complete halting of progression with 80% power, proving that multimodal latent variable integration dramatically enhances statistical power in rare disease trials.

---

### Scientific Context & Motivation
Clinical trials in rare degenerative neurological disorders face systemic design hurdles: clinical endpoints such as SARA rely on integer-graded clinician assessments that suffer from inter-rater subjectivity, non-linear floor/ceiling scale compression, and limited longitudinal sensitivity over realistic 1- to 2-year trial windows. While Item Response Theory (IRT) has gained traction in pharmacometrics to extract item-level information from ordinal clinical scales, it has historically been restricted to discrete categorical rating scales. In parallel, continuous digital health technologies (wearable inertial measurement units and high-frequency force/kinematic sensors) offer objective, granular quantification of motor deficits (e.g., gait stride variability, spiral drawing smoothness, target reaching dysmetria), but are typically analyzed as disconnected secondary endpoints. Prior to this work, there was no unified statistical and computational framework within population mixed-effects modeling tools (e.g., NONMEM) to jointly co-calibrate continuous digital sensor measures and categorical clinical scale items onto a single latent disease continuum while explicitly handling residual inter-measure covariance, non-linear item-characteristic mappings, and longitudinal progression.

---

## ⚡ Methodological Snapshot
The paper develops a continuous-categorical Item Response Theory (ccIRT) modeling framework that integrates multi-category ordinal rating scale items with continuous biomechanical sensor streams within a unified population likelihood. In traditional IRT, observed categorical item scores are modeled as probabilistic functions of an unobserved scalar latent trait representing disease severity. Hamdan et al. expand this architecture by expressing continuous, Z-score standardized digital-motor outcomes (DMOs) as linear or non-linear regression functions of the identical underlying latent variable, corrupted by additive Gaussian residual error.

The methodological implementation utilizes a sequentially anchored parameter estimation strategy in NONMEM. Item parameters (slopes and category threshold boundaries) for the categorical Scale for the Assessment and Rating of Ataxia (SARA) are fixed to validated historical values derived from a large reference cohort (n=990), establishing an invariant latent severity coordinate system. Continuous sensor metrics are then calibrated onto this latent scale by estimating task-specific location ($\theta_1$), slope/sensitivity ($\theta_2$), non-linear shape ($\theta_3$), and residual variance/covariance terms via maximum marginal likelihood using Laplace approximation.

A central innovation is the diagnostic curation workflow: candidate continuous sensor features are evaluated via individual ccIRT runs, ranked by their empirical Bayes posterior variance reduction, and subsequently tested in joint multidimensional blocks. Crucially, residual correlation matrices are estimated across all continuous metrics. Features displaying high collinearity (residual $r > 0.5$) are systematically weeded out to enforce local item independence, ensuring that the joint model accumulates true orthogonal disease information rather than redundantly amplifying correlated measurement noise.

---

## 📐 Statistical Framework
The statistical foundation integrates the Samejima Graded Response Model (GRM) for ordered categorical responses with a continuous linear/non-linear measurement error model under a unified conditional independence assumption. For patient $i$ and categorical SARA item $j$ with $K$ ordered response categories, the cumulative probability of scoring at or above category $k$ is defined by the logistic link: $P(Y_{ij} \ge k \mid \psi_i) = \text{logit}^{-1} [a_j \cdot (\psi_i - b_{j,k})]$, where $a_j$ is item discrimination, $b_{j,k}$ is the boundary threshold, and $\psi_i \sim N(\mu, \sigma^2)$ is the latent ataxia severity trait. Observed multinomial item probabilities are derived via successive category subtractions: $P(Y_{ij} = k \mid \psi_i) = P(Y_{ij} \ge k \mid \psi_i) - P(Y_{ij} \ge k+1 \mid \psi_i)$.

Concurrently, for continuous sensor-derived outcome $m$, the standardized observation $DMO_{im}$ is linked to $\psi_i$ via either a linear mapping ($DMO_{im} = \theta_{1m} + \theta_{2m} \cdot \psi_i + \varepsilon_{im}$) or a shifted power function ($DMO_{im} = \theta_{1m} + \theta_{2m} \cdot (\psi_i + a)^{\theta_{3m}} - a + \varepsilon_{im}$), where $\varepsilon_i = (\varepsilon_{i1}, \dots, \varepsilon_{im})^T \sim \text{MVN}(0, \Sigma)$. Model selection between linear and power links was adjudicated via the Bayesian Information Criterion for mixed-effects models ($\text{BIC} = -2LL + p \cdot \ln(N)$).

Under local independence, the joint individual marginal likelihood integrates across the distribution of $\psi_i$: $L_i = \int \left[ \prod_j P(Y_{ij} \mid \psi_i) \cdot f(DMO_i \mid \psi_i, \Sigma) \cdot g(\psi_i \mid \mu, \sigma^2) \, d(\psi_i) \right]$. In NONMEM, this mixed continuous-discrete likelihood is approximated numerically using the second-order Laplace method, maximizing the objective function value to yield population parameters and individual Empirical Bayes Estimates (EBEs) with corresponding posterior standard errors.

---

### Estimator Behavior
Individual latent trait scores ($\psi_i$) are estimated as posterior modes (Empirical Bayes / maximum a posteriori estimates). When only categorical SARA items inform $\psi_i$, posterior variance is bounded by the Fisher information of the discrete item characteristic curves, yielding an average estimation standard error of 0.30. Adding continuous DMO metrics inflates total test information along the latent continuum, causing the posterior standard error to drop monotonically to 0.21 (a 49% variance reduction), with negligible shrinkage due to the richness of the combined item vector.

Estimator agreement between the SARA-only IRT model and the joint ccIRT model was exceptionally high (Pearson's $r = 0.91$ to $0.95$), verifying that integrating digital outcomes did not introduce structural bias or distort the clinical construct of ataxia severity. Across 1,000 stochastic null trial replicates, the Wald test statistic for drug effect on latent progression exhibited perfect nominal calibration (empiric Type I error rate = 4.2%–6.0%, completely covering the theoretical 5% confidence interval [3.8%–6.5%]), establishing that the estimator is asymptotically unbiased and robust against false-positive inference.

---

### Validation Design
Model validation employed a multi-tier framework consisting of external clinical cohort cross-validation, empirical residual correlation diagnostics, and comprehensive Monte Carlo trial simulations:
1. Cohort Cross-Validation: SARA item parameters fixed from the external ARCA reference population (n=990) were compared against freely re-estimated parameters on the PROSPAX study dataset (n=187). Latent $\psi$ estimates showed near-perfect agreement ($r = 0.99$, identity line alignment).
2. Residual Error Diagnostics: Multidimensional residual covariance blocks were evaluated to identify and exclude collinear sensor metrics (e.g., rejecting Swing CV due to $r = 0.68$ correlation with stride length CV).
3. Stochastic Simulation and Estimation (SSE): Two-year balanced, placebo-controlled parallel trials (visits at 0, 6, 12, 18, 24 months; 5 occasions/subject) were simulated across two genetic disease populations (ARSACS, characterized by faster progression, and SPG7, characterized by slower progression). Using PsN's PPE tool, 250 trial replicates per scenario evaluated power across sample sizes, while 1,000 replicates under zero treatment effect evaluated Type I error.

---

### Applicability Boundaries
The ccIRT method requires that continuous digital outcomes measure the identical underlying latent biological construct as the anchor clinical rating scale; if a sensor metric captures an unrelated physiological signal (e.g., cardiovascular fatigue or orthopedic co-morbidities), the unidimensionality assumption is violated, distorting $\psi$ estimation.

A critical operational boundary is patient ambulatory status: digital gait protocols require independent or minimally assisted ambulation (10-meter walk). In PROSPAX, gait measures were completely missing in non-ambulatory patients (available in only 97/187 subjects). Consequently, ccIRT models incorporating gait metrics are strictly bounded to mild-to-moderate ambulatory populations (SARA $\le 21$), whereas digital limb coordination tasks (tapping, spiral drawing) exhibit broader applicability across both ambulatory and wheelchair-bound disease stages.

---

### Comparison to Alternatives
Relative to standard Total Score analysis (summing raw SARA integer items and testing via ANCOVA or linear mixed-effects models [LMM]), ccIRT eliminates non-linear scale distortion, equalizes bounded floor/ceiling effects, and weights individual item informativeness. Prior work demonstrated that categorical IRT of SARA alone cut trial sample sizes substantially relative to raw sum-score LMM.

Relative to standard categorical IRT, the ccIRT framework further decreases required sample sizes by an additional 49% (ARSACS) and 61% (SPG7) by tapping into the continuous precision of sensor data. Compared to two-stage sequential modeling (e.g., extracting digital features, predicting total SARA, then modeling predicted scores), ccIRT simultaneously estimates measurement noise and latent progression within a single coherent likelihood, preventing error propagation and preserving exact Type I error control.

---

### Implementation Guidance
1. Software & Algorithms: Implementable in NONMEM (version >= 7.4) using $PRED or combined $PK/$ERROR blocks with the LAPLACE option (NUMERICAL DERIVATIVES recommended for stability). Utilize Perl-speaks-NONMEM (PsN) for automated SSE execution.
2. Likelihood Formulation: For categorical items, accumulate the negative log of multinomial probabilities ($(-2 \cdot \ln(P_{ij}))$); for continuous DMOs, compute standard Gaussian log-likelihood contributions ($(-2 \cdot \ln(f_{\text{norm}}(DMO_{im})))$). Combine into a unified objective function: $Y = -2 \cdot \ln(L_{\text{joint}})$.
3. Variable Standardization: Pre-process all continuous sensor features into standardized Z-scores (mean=0, SD=1) across the baseline population. This harmonizes parameter scales, prevents Hessian matrix ill-conditioning, and aids gradient convergence.
4. Computational Cost: Bivariate and trivariate digital models converge rapidly (< 5 minutes per run). However, when estimating full $\Sigma$ residual correlation matrices across > 10 continuous measures simultaneously, execution times increase substantially and boundary estimation flags may occur. Sponsors should adhere strictly to the authors' sequential pruning workflow.

---

## 📊 Key Findings
The joint ccIRT framework successfully coupled ordinal polytomous SARA items with continuous digital sensor outputs into a single latent variable ($\psi$) in NONMEM using Laplace conditional estimation. A rigorous 7-step screening workflow narrowed 26 candidate digital metrics down to 6 non-redundant outcomes (Gait: CV of gait cycle duration, MADN of pitch at toe-off, CV of stride length; Limb: speed of target reaching, dynamic time warping variability of target reaching, and smoothness of spiral drawing). The unified model reduced the average standard error of individual severity estimates from 0.30 to 0.21, reflecting a 49% mean reduction in estimation variance. The added informativeness of digital measures was particularly pronounced at moderate-to-severe disease stages (SARA scores 10-21). In simulated 2-year parallel-group trials, analyzing trials with the complete ccIRT model reduced required sample sizes by 49% (ARSACS; from 356 to 182 subjects) and 61% (SPG7; from 1780 to 702 subjects) compared to SARA-only IRT analysis, while maintaining exact nominal Type I error rates (4.2%–6.0% across 1,000 null replicates).

---

### Strengths & Limitations

#### Strengths
- Pioneering statistical integration of continuous sensor-derived biometric data and ordinal categorical rating scale items within a single joint latent variable IRT likelihood framework in NONMEM.
- Methodical 7-step model building and diagnostic workflow that explicitly inspects residual error correlations among digital metrics to prevent information double-counting and multi-collinearity artifacts.
- Anchoring item characteristic parameters on an extensive reference population (ARCA registry, n=990), with successful independent validation in the target PROSPAX natural history cohort ($r = 0.99$ between latent estimates).
- Rigorous simulation-based evaluation using stochastic simulation and estimation (SSE) evaluating both power (PPE algorithm) and empiric Type I error rates across 1,000 Monte Carlo replicates under the null.

#### Limitations (Acknowledged by Authors)
- Digital gait metrics could only be acquired from ambulatory subjects (available in only 97 of 187 patients, 157 of 331 visits), creating informative missingness at severe disease stages (loss of ambulation).
- Digital outcomes were constrained to reflect the exact same unidimensional construct captured by SARA, potentially ignoring orthogonal digital phenotypes or motor sub-domains.
- Even with a 50%–60% sample size reduction, absolute trial sizes for slow-progressing SPG7 ($n \sim 700$) remain challenging for ultra-rare disease recruitment without enriched multi-year designs or external control arms.

#### Limitations (Expert Review)
- Cross-sectional anchoring assumption: fixing SARA item difficulty and discrimination parameters from historical natural history assumes parameter invariance across disease genotypes and clinical study environments.
- Potential numerical sensitivity and computational burden of full Laplace approximation in NONMEM when expanding the continuous residual covariance block to higher-dimensional sensor panels.
- Absence of out-of-sample longitudinal predictive validation or sensitivity analyses regarding non-ignorable dropout in ambulatory gait assessments.

#### Generalizability
The ccIRT mathematical architecture and screening workflow are readily generalizable to any therapeutic area where sparse, discrete clinical outcome assessments (e.g., UPDRS in Parkinson's, ALSFRS-R in ALS, EDSS in Multiple Sclerosis) coexist with objective continuous digital health technologies, fluid biomarkers, or quantitative neuroimaging modalities.

---

### Key Equations

**Standardized Digital-Motor Outcome Transformation**

{% raw %}
$$
DMO_{im} = \frac{DMO_{im,\text{raw}} - \text{mean}(DMO_{m,\text{raw}})}{\text{SD}(DMO_{m,\text{raw}})}
$$
{% endraw %}

Standard Z-score transformation applied to each raw continuous digital-motor outcome $m$ in subject $i$ across visits to harmonize dimensional scaling prior to joint non-linear mixed-effects parameter estimation.

**Graded Response Model for Categorical SARA Items**

{% raw %}
$$
P(Y_{ij} \ge k \mid \psi_i) = \frac{e^{a_j (\psi_i - b_{j,k})}}{1 + e^{a_j (\psi_i - b_{j,k})}}
$$
{% endraw %}

Logistic item characteristic function defining the probability of patient $i$ scoring at or above category $k$ on SARA item $j$, parameterized by item discrimination ($a_j$) and category boundary threshold ($b_{j,k}$) along the latent ataxia severity scale $\psi_i$.

**Linear Continuous Item Function for Digital-Motor Outcomes**

{% raw %}
$$
DMO_{im} = \theta_{1m} + \theta_{2m} \cdot \psi_i + \varepsilon_{im}
$$
{% endraw %}

Linear linkage function relating the standardized continuous digital measure $m$ for individual $i$ to latent ataxia severity $\psi_i$, where $\theta_{1m}$ is the baseline intercept, $\theta_{2m}$ is the slope (discrimination), and $\varepsilon_{im}$ is Gaussian residual error.

**Nonlinear Fractional Exponent Linkage for Digital-Motor Outcomes**

{% raw %}
$$
DMO_{im} = \theta_{1m} + \theta_{2m} \cdot (\psi_i + a)^{\theta_{3m}} - a + \varepsilon_{im}
$$
{% endraw %}

Nonlinear item response function accommodating curvilinear saturation or threshold dynamics between latent severity $\psi_i$ and continuous sensor metrics, with scaling parameters $\theta_{1m}$, $\theta_{2m}$, shape exponent $\theta_{3m}$, and shift constant $a$.

**Relative Reduction in Individual Latent Estimation Variance**

{% raw %}
$$\begin{aligned}
\%\text{ decrease in uncertainty} \\
&= \frac{\text{Var}(\hat{\psi}_i^{\text{SARA}}) - \text{Var}(\hat{\psi}_i^{\text{SARA}+\text{DMO}})}{\text{Var}(\hat{\psi}_i^{\text{SARA}})} \times 100
\end{aligned}$$
{% endraw %}

Metric quantifying the informativeness gain in empirical Bayes latent severity estimation ($\psi_i$) achieved by augmenting the discrete SARA questionnaire with continuous digital-motor outcomes.

---

### Figures & Tables

- **Figure 1**: Multi-tier implementation and selection workflow for embedding digital-motor outcomes within a joint ccIRT architecture.
  - *Significance*: Illustrates the 7-step screening and validation pipeline, spanning initial single-DMO linkage modeling, performance ranking, residual error correlation matrix estimation, and final multimodal joint model consolidation.
- **Figure 2**: Performance, uncertainty reduction rankings, and residual correlation matrix for 9 candidate digital gait measures.
  - *Significance*: Demonstrates why Swing CV—despite high nominal informativeness—was rejected due to strong collinearity ($r = 0.68$ and $r = 0.62$) with stride length and gait cycle duration CV, ultimately selecting 3 orthogonal gait metrics.
- **Figure 3**: Performance rankings and inter-measure residual correlation matrix for 17 digital limb coordination metrics across motor tasks.
  - *Significance*: Highlights the data-driven selection of three mutually independent upper/lower-limb coordination metrics (target pointing speed, target reaching variability, and spiral drawing smoothness; max residual correlation = 0.27).
- **Figure 4**: Latent severity distribution and standard error of estimation profiles across disease severity (SARA range 4 to 21).
  - *Significance*: Reveals that while SARA provides broad baseline informativeness, digital gait and limb sensors provide concentrated variance reduction in moderate-to-severe disease states (SARA 10-21), precisely where clinician rating scales lose discriminative fidelity.
- **Figure 5**: Comparative statistical power and Type I error evaluation across simulated 2-year parallel-group trials.
  - *Significance*: Confirms that joint ccIRT modeling cuts sample size requirements by ~50% in ARSACS and ~61% in SPG7 under 80% power while strictly preserving nominal Type I error control (4.2%–6.0%).

---

### Code & Reproducibility Assessment
Model code for implementing the joint continuous-categorical IRT likelihood in NONMEM is provided in Supplementary Appendix S3. Simulation and estimation workflows were conducted using PsN (SSE tool) and NONMEM 7.5.0/7.5.1 with the Laplace approximation. Natural history data supporting the findings are maintained within the PROSPAX consortium and are available upon formal request.

---

### Supplementary Materials
The supplementary document (psp470081-sup-0001-supinfo.pdf) provides extensive technical and mathematical details: Appendix S1 plots raw relationships between SARA latent $\psi$ and individual digital sensor metrics; Appendix S2 tabulates Bayesian Information Criterion (BIC) comparisons for linear versus non-linear linkage models; Appendix S3 contains fully annotated NONMEM control streams demonstrating joint discrete-continuous $-2LL$ coding using the Laplace estimation method; Appendix S4 details the Stochastic Simulation and Estimation (SSE) protocol and PPE sample size calculation parameters; Appendix S5 reports external validation diagnostics and item parameter stability comparisons between the ARCA registry and PROSPAX; Appendix S6 catalogs final parameter estimates (thetas and sigmas) for all digital sensor equations; Appendix S7 compares variance reductions item-by-item against individual SARA questions; and Appendix S8 illustrates individual patient longitudinal shrinkage and confidence interval narrowing.

---

### Future Directions
1. Extend the unidimensional ccIRT model to multidimensional latent space to capture distinct, partially dissociated motor and cognitive domains (e.g., separate upper-limb dexterity, axial balance, and pyramidal spasticity dimensions). 2. Integrate continuous fluid biomarkers (e.g., serum Neurofilament Light Chain [NfL]) and volumetric MRI neuroimaging metrics into the joint likelihood. 3. Formulate individual trajectory prediction algorithms utilizing joint ccIRT estimates to power decentralized N-of-1 trial designs and synthetic natural history control arms.

---

### Expert Commentary
This paper represents a watershed development in pharmacometrics methodology. Historically, pharmacometricians analyzing clinical rating scales have either relied on item-level IRT for categorical questionnaires or standard nonlinear mixed-effects models for continuous biomarkers, treating them in parallel or sequential two-stage architectures. Hamdan et al. correctly recognize that digital health technologies (DHTs)—despite generating megabytes of continuous kinematic data—ultimately measure the same underlying pathological process as clinical rating scales. Their ccIRT formulation is statistically elegant: the continuous sensor metrics act as high-precision continuous 'items' alongside the discrete SARA items, all informing the same individual empirical Bayes estimate (EBE) of latent disease severity ($\psi$). Crucially, the authors avoid the naive pitfall of dumping dozens of sensor features into the model, which would severely violate local independence assumptions and inflate Type I error; their systematic pruning of redundant features using off-diagonal residual covariance screening is textbook methodology. Regulatory bodies (FDA, EMA) increasingly urge sponsors to integrate DHTs into rare disease development programs; this ccIRT framework provides the exact mathematical substrate required to translate exploratory digital metrics into formal sample-size-sparing primary or composite endpoints.

---

### Bottom Line
By bridging continuous digital health biomarkers and discrete clinician-reported items into a unified ccIRT model, pharmacometricians can reduce individual disease severity estimation variance by half and slash required rare disease trial sample sizes by 50% to 60%, delivering an immediately actionable methodology for small-population drug development.

---

---

## 📊 Figures

![The implementation and assessment workflow of the digital-motor outcomes within a joint Item Response Theory framework for Continuous and Categorical data (ccIRT) along w]({{ site.baseurl }}/assets/digests/2026-11-10-integrated-modeling-of-digital-motor-and-clinician-reported-outcomes-using-item/figures/fig_01.jpg)

![Assessment results of digital gait measures in joint ccIRT models with SARA. Panel A: Performance and selection results of the digital gait measures starting with a scree]({{ site.baseurl }}/assets/digests/2026-11-10-integrated-modeling-of-digital-motor-and-clinician-reported-outcomes-using-item/figures/fig_02.jpg)

![Assessment results of digital limb coordination measures in joint ccIRT models with SARA. The measures are named following the format “Task: Feature” (for full names see ]({{ site.baseurl }}/assets/digests/2026-11-10-integrated-modeling-of-digital-motor-and-clinician-reported-outcomes-using-item/figures/fig_03.jpg)

![The performance of the final ccIRT model of SARA, digital gait, and digital limb coordination outcomes and the differential contribution of the model components, in asses]({{ site.baseurl }}/assets/digests/2026-11-10-integrated-modeling-of-digital-motor-and-clinician-reported-outcomes-using-item/figures/fig_04.jpg)

![Sample size required to detect disease-modifying drug effect with 80% power (A) and Type I error (B) under multiple analysis models with different components of the ccIRT]({{ site.baseurl }}/assets/digests/2026-11-10-integrated-modeling-of-digital-motor-and-clinician-reported-outcomes-using-item/figures/fig_05.jpg)