---
layout: post
title: "A computational tool to optimize clinical trial parameter selection in Duchenne muscular dystrophy: A practical guide and case studies."
date: 2026-11-10
authors: "Jordan Wilk, Varun Aggarwal, Mike Pauley, Diane Corey, Daniela J. Conrado, Karthik Lingineni, Juan Francisco Morales, Deok Yong Yoon, Yi Zhang, Zihan Cui, Jackson Burton, Jane Larkindale, Shu Chin Ma, Collin Hovinga, Terina Martinez, Klaus Romero, Ramona Belfiore-Oshan, Sarah Kim"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.13281"
paper_type: methodology
tags: [methodology, regulatory]
excerpt_text: "The Critical Path Institute's Duchenne Regulatory Science Consortium (D-RSC) released a web-based Clinical Trial Simulator (CTS) for Duchenne muscular dystrophy (DMD) based on five validated nonlinear disease progression models. Through Monte Carlo trial replication, users can optimize sample size, study duration, assessment intervals, and patient enrichment criteria across five major functional endpoints."
pdf_path: "/assets/digests/2026-11-10-a-computational-tool-to-optimize-clinical-trial-parameter-selection-in-duchenne/PMx_A_computational_tool_to_optimize_clinica_20261110.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
The Critical Path Institute's Duchenne Regulatory Science Consortium (D-RSC) released a web-based Clinical Trial Simulator (CTS) for Duchenne muscular dystrophy (DMD) based on five validated nonlinear disease progression models. Through Monte Carlo trial replication, users can optimize sample size, study duration, assessment intervals, and patient enrichment criteria across five major functional endpoints.

---

### Executive Summary
Designing clinical trials in rare, heterogeneous pediatric diseases such as Duchenne muscular dystrophy (DMD) poses severe recruitment and statistical power challenges. Wilk and colleagues present a user-friendly quantitative Clinical Trial Simulator (CTS) hosted on the Rare Disease Cures Accelerator-Data and Analytics Platform (RDCA-DAP). Grounded in previously qualified nonlinear mixed-effects disease progression models, the simulator accommodates five standard functional endpoints: North Star Ambulatory Assessment (NSAA), forced vital capacity (FVC), and velocity of completion for supine-to-stand, four-stair climb, and 10-meter walk/run. Users define hypothetical drug efficacy via proportional shifts in maximal decay ($DP_{max}$) and age at half-maximal decline ($DP_{50}$), combined with a sigmoidal lag-time parameter (50% Effect time). Power is computed across simulated trial replicates using end-of-study hypothesis testing. Two realistic Phase III case studies demonstrate that empirical trial duration can be reduced from 24 to 14 months for FVC endpoints and sample size reduced from 150 to ~115 subjects for NSAA endpoints while maintaining 80% statistical power.

---

### Scientific Context & Motivation
Clinical drug development in DMD suffers from high attrition and inconclusive Phase II/III trials, primarily driven by extreme phenotypic heterogeneity in motor and pulmonary decline, small pool of eligible pediatric patients, and misaligned enrichment criteria. Traditional power calculations rely on simple linear decline assumptions and normal approximations that fail to reflect age-dependent sigmoidal trajectories, covariate effects (e.g., corticosteroid regimen, specific dystrophin exon deletions), and non-constant variance. While regulatory consortia have developed parametric disease progression models using aggregated natural history and placebo data, their application has historically required specialized pharmacometrics expertise and proprietary software (e.g., NONMEM). An open-access, GUI-driven clinical trial simulator bridges the translational gap by providing trialists and regulatory scientists with a standardized simulation-estimation pipeline for trial enrichment and sample size optimization.

---

## ⚡ Methodological Snapshot
The presented method is a specialized Clinical Trial Simulator (CTS) designed for protocol optimization in Duchenne muscular dystrophy. The computational core relies on previously validated nonlinear mixed-effects models describing five primary functional endpoints: the North Star Ambulatory Assessment (NSAA), forced vital capacity (FVC), and completion velocities for three timed motor tests (Velocity Stand, Velocity Climb, and Velocity Walk-Run). Each endpoint progression curve is structurally characterized by baseline functional capacity, maximal fractional decline ($DP_{max}$), and the chronological age at half-maximal decline ($DP_{50}$).

Users specify trial design parameters (sample size, 1:1 allocation, 6–60 month duration, 1–12 month visit intervals), patient population enrichment bounds (baseline score, age intervals, corticosteroid prevalence, racial composition, and genetic mutation status), and hypothesized therapeutic efficacy. Drug action is modeled as a proportional attenuation of $DP_{max}$, a rightward shift of $DP_{50}$, and an optional sigmoidal lag time (50% Effect time). The simulator runs Monte Carlo trial replicates drawing from estimated inter-individual and residual error distributions, executing end-of-study hypothesis testing on each synthetic trial.

Outputs include longitudinal trajectory graphs with 95% confidence intervals, age-bucketed distribution plots, and empirical power estimates (the fraction of replicates with $p < 0.05$). This pipeline enables systematic trial protocol sensitivity analysis, such as sample size sizing curves and trial duration trade-off evaluations.

---

## 📐 Statistical Framework
The statistical architecture is founded on parametric nonlinear mixed-effects models fit to pooled natural history and historical control trial databases. Functional decline is parameterized as an age-dependent function: $y_{ij} = f(Age_{ij}, \theta_i) + \epsilon_{ij}$, where $\theta_i = g(\theta_{pop}, \eta_i, Cov_i)$ accounts for typical fixed-effects population parameters, random inter-individual variability $\eta_i \sim N(0, \Omega)$, and individual-level baseline covariates (age, score, steroid exposure, dystrophin deletion genotypes, and race). Residual unexplained variability is represented by $\epsilon_{ij} \sim N(0, \sigma^2)$. Simulated treatment effects enter the structural equations nonlinearly post-baseline by perturbing progression parameters $DP_{max}$ and $DP_{50}$ via user-specified fractional modulations.

---

### Estimator Behavior
Statistical power estimation is calculated empirically across $K$ independent trial replicates as the empirical rejection rate: $\text{Power} = \frac{1}{K} \sum \mathbb{I}(p_k < 0.05)$, where $p_k$ is obtained from a two-sample Student's t-test comparing final post-baseline measurements between active and placebo arms. Because power is estimated via Monte Carlo sampling, the precision of the estimator follows a binomial distribution with standard error $\sqrt{P(1-P)/K}$. For $K = 100$ replicates and an estimated power $P = 0.80$, the Monte Carlo standard error is approximately 0.04 (95% CI: 0.72–0.88). Increasing replicate counts to $K = 500$ or $1000$ narrows this interval to $\pm 0.035$ and $\pm 0.025$, respectively, improving estimator convergence.

---

### Validation Design
The simulation tool's operational validity was evaluated through two clinical case studies benchmarking against realistic Phase II/III trial architectures extracted from ClinicalTrials.gov (NCT03439670, NCT01761292, NCT05540860, NCT04371666, NCT03703882, NCT02851797, NCT03039686). Case Study 1 varied sample size from 150 down to 60 subjects (decrements of 10) in an NSAA motor assessment setting. Case Study 2 varied study length across 24, 18, 12, and 6 months in an FVC respiratory setting. Results were diagnosed using longitudinal median trajectory comparisons, age-stratified box plots, and empirical power curves.

---

### Applicability Boundaries
The tool is valid for simulating single-endpoint clinical trials in male DMD patients within the age and score intervals supported by the consortium models (predominantly 4–17 years of age). It applies strictly to studies evaluating functional decline in either ambulatory motor or non-ambulatory respiratory measures. It is not suitable for: (1) trials with substantial informative attrition, as dropout mechanisms are not modeled; (2) co-primary or composite endpoint designs requiring joint multivariate correlation structures; or (3) modeling complex nonlinear pharmacokinetics or exposure-driven drug effects where plasma concentrations fluctuate substantially over time.

---

### Comparison to Alternatives
Compared to traditional sample size calculation formulas (e.g., standard normal-distribution power equations based on assumed linear mean changes and pooled standard deviations), this simulator captures disease acceleration, developmental plateaus, and covariate-driven trajectory differences across age strata. Compared to custom NONMEM or R/mrgsolve/RxODE simulation workflows, this CTS tool eliminates the requirement for coding and specialized modeling software, offering an accessible, regulatory-aligned graphical environment hosted on RDCA-DAP. However, custom scripting workflows retain greater flexibility for non-standard randomization schemes, adaptive interim analyses, and MMRM-based power calculations.

---

### Implementation Guidance
Users should access the tool through the Critical Path Institute RDCA-DAP portal. Practical workflow recommendations: (1) align baseline score and age intervals strictly with target trial eligibility criteria; (2) specify covariate prevalence (steroid use, exon 44 skipping / 3–7 deletions) matching historical recruitment demographics; (3) execute an initial low-replicate exploratory run ($K = 50$–$100$) to gauge trajectory trends, followed by a higher-replicate run ($K \ge 200$–$500$) for final power curve derivation around the 80% threshold; and (4) recognize that simulator power is based on endpoint t-tests, meaning that protocol implementation utilizing longitudinal MMRM models in the final Statistical Analysis Plan (SAP) will likely provide superior efficiency and a conservative safety margin against unexpected variance inflation.

---

## 📊 Key Findings
The web-based CTS operationalizes five longitudinal disease progression models for DMD clinical trial design. In Case Study 1 (NSAA, 1-year study in boys aged 6–11 with 20% drug slowing of disease progression), empirical power curves demonstrated that sample size could be safely reduced from 150 to 115 subjects (split 1:1) while strictly preserving 80% power. In Case Study 2 (FVC, boys aged 10–17 with 20% drug effect), simulative evaluation showed that trial duration could be trimmed from 24 months (power 0.98) down to approximately 14 months while maintaining target power of 0.80 (12 months yielded 0.75 power; 6 months yielded only 0.45). Age-stratified simulation outputs revealed critical developmental windows: NSAA separation between active drug and placebo arms was concentrated in boys aged $\ge 8$–$9$ years at baseline, whereas FVC divergence emerged prominently at $\ge 11$–$13$ years.

---

### Strengths & Limitations

#### Strengths
- Translates complex nonlinear mixed-effects disease progression models into an accessible, regulatory-grade decision tool hosted on RDCA-DAP.
- Covers five standard regulatory and clinical trial endpoints for ambulatory and non-ambulatory DMD populations (NSAA, FVC, Velocity Stand, Velocity Climb, Velocity Walk-Run).
- Incorporates key prognostic covariates derived from consortium-level datasets, including baseline age, baseline performance score, corticosteroid use, Asian race, and specific dystrophin mutations (exons 3–7 deletions, exon 44 skipping).
- Permits flexible parameterization of putative drug effects via dual mechanisms (altering disease trajectory plateau $DP_{max}$ and/or shifting the age inflection $DP_{50}$) with an adjustable onset lag time.

#### Limitations (Acknowledged by Authors)
- The simulator assumes complete adherence and does not incorporate informative subject dropout or treatment discontinuation mechanisms.
- Models are univariate; multi-endpoint joint simulations or composite efficacy assessments cannot be executed simultaneously.
- Hypothetical drug effects are parameterized through proportional shifts in structural progression parameters rather than empirical pharmacokinetic/pharmacodynamic (PK/PD) exposure-response relationships.
- Simulations are intended to guide design parameter selection (enrichment, timing, power) and cannot replace actual clinical trial safety and efficacy evaluations.

#### Limitations (Expert Review)
- Statistical hypothesis testing in the simulator is currently limited to an end-of-study independent samples t-test rather than model-based mixed-effects models for repeated measures (MMRM), potentially underestimating power achievable by longitudinal analysis.
- The tool assumes fixed, user-defined distributions of baseline covariates rather than sampling directly from real-world joint covariate distributions, which may disrupt multivariate correlation structures.
- Monte Carlo error is dependent on user-selected replicate count (typically 100 in examples), which yields relatively wide binomial confidence intervals around an estimated power of 0.80 [95% CI: 0.71–0.87].

#### Generalizability
The methodology is highly generalizable across DMD clinical trial design, particularly for evaluating ambulatory (NSAA, timed motor tests) and transition/non-ambulatory (FVC) populations. The structural framework (decay curves parameterized by baseline score, $DP_{max}$, and $DP_{50}$) serves as an exemplar for regulatory science consortia developing disease progression trial simulators in other rare neurodegenerative and neuromuscular disorders.

---

### Key Equations

**Hypothetical Drug Effect on Maximal Disease Progression (DPmax)**

{% raw %}
$$
DP_{max, drug} = DP_{max, baseline} \times \left(1 - \frac{\%\text{Effect}_{DPmax}}{100}\right)
$$
{% endraw %}

Mathematical representation of drug-induced slowing of the asymptotic maximum disease progression score, where higher percentage input reduces the total magnitude of functional decay.

**Hypothetical Drug Effect on Age at Half-Maximal Progression (DP50)**

{% raw %}
$$
DP_{50, drug} = DP_{50, baseline} \times \left(1 + \frac{\%\text{Effect}_{DP50}}{100}\right)
$$
{% endraw %}

Mathematical formulation shifting the inflection point of functional decline toward older ages, representing therapeutic postponement of disease progression.

**Empirical Power Formulation via Monte Carlo Replicates**

{% raw %}
$$
\widehat{\text{Power}} = \frac{1}{K} \sum_{k=1}^{K} \mathbb{I}\left(p_k < 0.05\right)
$$
{% endraw %}

Calculation of statistical power where $K$ is the total number of simulated clinical trial replicates and $p_k$ is the p-value obtained from a two-sample t-test comparing mean endpoint change from baseline between treatment and control arms in replicate $k$.

---

### Figures & Tables

- **Figure 1**: User interface panels of the Clinical Trial Simulator displaying: (a) endpoint selection drop-down, (b) trial design settings (sample size, trial length, assessment interval), (c) assumed drug effect controls (DPmax, DP50, and 50% effect time), and (d) inclusion/exclusion criteria sliders (age, baseline score, steroid use, Asian ancestry, and specific dystrophin mutations).
  - *Significance*: Demonstrates the complete parameter space available to trial designers for conducting in silico sensitivity analyses and protocol stress-testing.
- **Figure 2**: Simulation output trajectories for North Star Ambulatory Assessment (NSAA) comparing placebo vs active treatment: (a) boxplots of median score stratified across age buckets, and (b) median longitudinal score trajectories over trial time with 95% confidence intervals.
  - *Significance*: Illustrates how the simulator disambiguates developmental maturation from disease decline across chronological age and confirms treatment divergence over time.
- **Figure 3**: Empirical statistical power curves: (a) Case Study 1 showing power vs sample size for NSAA, pinpointing the threshold of 80% power at ~115 subjects; (b) Case Study 2 showing power vs study duration for FVC, pinpointing the 80% threshold at ~14 months.
  - *Significance*: Provides concrete quantitative evidence that model-informed trial design can prevent protocol over-engineering (excessive sample size or unnecessary trial duration) while preserving regulatory power.
- **Table 1**: Benchmarking matrix of historical and ongoing Phase II and Phase III DMD clinical trials (including vamorolone, givinostat, pamrevlumab, edasalonexent, and RO7239361) detailing study duration, enrollment numbers, functional endpoints, and inclusion/exclusion criteria.
  - *Significance*: Grounds the simulation case studies in real-world clinical development programs, ensuring that trial parameter ranges reflect regulatory precedent.

---

### Code & Reproducibility Assessment
The Clinical Trial Simulation tool is publicly accessible via the Critical Path Institute portal on the Rare Disease Cures Accelerator-Data and Analytics Platform (RDCA-DAP) at https://c-path.org/tools-platforms/dmd-clinical-trial-simulation-tool/. Model specifications and parameter estimates are detailed in published references and Supplemental Material S1. Underlying application source code is maintained by C-Path.

---

### Supplementary Materials
Supplemental Material S1 provides a comprehensive summary of the five underlying disease progression models, detailing the mathematical equations, fixed-effects parameter estimates, inter-individual variability structures, residual unexplained error variances, and identified covariate coefficients.

---

### Future Directions
Key methodological enhancements should include: (1) integrating parametric survival models to simulate informative patient dropout and loss to ambulation; (2) incorporating longitudinal repeated-measures analysis (e.g., MMRM or joint longitudinal-survival models) into the power calculation engine instead of endpoint t-tests; (3) expanding the structural framework to support multivariate joint endpoints (e.g., simultaneous motor and pulmonary trajectories); and (4) coupling the disease progression simulator with population pharmacokinetic/pharmacodynamic (PopPK/PD) modules for candidate therapeutics.

---

### Expert Commentary
From a pharmacometrics perspective, this work represents a major milestone in Model-Informed Drug Development (MIDD) for rare pediatric diseases. By packaging five nonlinear mixed-effects models (parameterized around $DP_{max}$ and $DP_{50}$) into an intuitive simulation tool, C-Path and D-RSC have removed the computational barrier that typically confines disease progression modeling to specialized quantitative teams. The case studies provide a compelling demonstration of efficiency gains: identifying that NSAA trial power is heavily driven by patients over 8 years of age (when natural history shows consistent decline rather than developmental maturation) allows sponsors to avoid enrolling cohorts where drug efficacy is statistically undetectable. However, trial biostatisticians must note a crucial technical caveat: the simulator computes power via a two-sample t-test at study completion. In actual regulatory submissions, longitudinal mixed-effects models for repeated measures (MMRM) or shared-parameter models are the standard of care. Because MMRM leverages all intermediate post-baseline visits, empirical power in a well-conducted trial may exceed the t-test power estimated here, providing an inherent conservative buffer.

---

### Bottom Line
This open-access Clinical Trial Simulator operationalizes consortium-qualified disease progression models to optimize DMD trial protocols, demonstrating that model-informed enrichment and endpoint-specific age selection can prevent underpowered studies while avoiding unnecessarily prolonged trials or excessive sample sizes.

---

---

## 📊 Figures

![Representative sidebars: (a) endpoint selection among the five functional tests, (b) clinical trial design input parameter selection, (c) assumed drug effects, and (d) in]({{ site.baseurl }}/assets/digests/2026-11-10-a-computational-tool-to-optimize-clinical-trial-parameter-selection-in-duchenne/figures/fig_01.jpg)

![Representative simulation outputs for North Star Ambulatory Assessment (NSAA). (a) simulated NSAA measure vs. age at assessment and (b) simulated NSAA measure versus tria]({{ site.baseurl }}/assets/digests/2026-11-10-a-computational-tool-to-optimize-clinical-trial-parameter-selection-in-duchenne/figures/fig_02.jpg)

![Power curves generated based on power output from (a) Case Study 1 and (b) Case Study 2. (a) Case Study 1 shows that the power output drops below 0.80 at around ~115 pati]({{ site.baseurl }}/assets/digests/2026-11-10-a-computational-tool-to-optimize-clinical-trial-parameter-selection-in-duchenne/figures/fig_03.jpg)