---
layout: post
title: "Bayesian Workflow for Minimal PBPK Models: Case Study of Dapagliflozin"
date: 2026-08-04
authors: "Mikhailova A, Shvets V, Peskov K, Helmlinger G"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70307"
paper_type: methodology
tags: [methodology, pbpk]
excerpt_text: "This study proposes a systematic Bayesian workflow for developing minimal physiologically-based pharmacokinetic (mPBPK) models from aggregated published data, demonstrated with dapagliflozin. Three Bayesian software packages (NIMBLE, MCSim, Torsten) and three prior specification strategies were compared, with Torsten showing superior sampling efficiency. The workflow integrates prior information from published models and clinical data, providing a transferable framework for mechanistic model development."
pdf_path: "/assets/digests/2026-08-04-bayesian-workflow-for-minimal-pbpk-models-case-study-of-dapagliflozin/PMx_Bayesian_Workflow_for_Minimal_PBPK_Model_20260804.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study proposes a systematic Bayesian workflow for developing minimal physiologically-based pharmacokinetic (mPBPK) models from aggregated published data, demonstrated with dapagliflozin. Three Bayesian software packages (NIMBLE, MCSim, Torsten) and three prior specification strategies were compared, with Torsten showing superior sampling efficiency. The workflow integrates prior information from published models and clinical data, providing a transferable framework for mechanistic model development.

---

### Executive Summary
The authors present a comprehensive Bayesian workflow for mPBPK model development that integrates systematically collected published PK data and prior model information. Using dapagliflozin as a case study, they demonstrate that posterior distributions are consistent across three Bayesian software implementations (NIMBLE, MCSim, Torsten), though Torsten offers superior effective sample size efficiency. The study evaluates three prior specification strategies, finding that inverse-variance weighted priors introduce bias while sample-size weighted and extended inverse-variance priors perform well. External validation against crossover-design trial data and urinary recovery measurements confirms model adequacy, with sensitivity analysis identifying clearance, GFR, and fraction unbound as key drivers of variability. The workflow is presented as flexible and transferable to other mechanistic model types including QSP models.

---

### Scientific Context & Motivation
Dapagliflozin has extensive published PK data and multiple independently developed population PK models with inconsistent structures and parameter estimates. Traditional approaches to generalized PK model development are limited by restricted access to individual patient data and failure to account for inter-study heterogeneity. Bayesian methods offer advantages for integrating prior information and quantifying uncertainty but remain underrepresented in mechanistic model development. This study addresses the need for a systematic Bayesian workflow that synthesizes existing clinical and mechanistic data into a unified mPBPK framework.

---

## ⚡ Methodological Snapshot
The proposed workflow comprises three phases: (1) systematic literature search and data collection following PRISMA guidelines, (2) model calibration with Bayesian inference and comparative software evaluation, and (3) model validation and sensitivity analysis. A two-compartment mPBPK model with transit-compartment absorption and linear elimination was developed, with a renal filtration sub-model for the effect compartment. Three prior specification strategies were evaluated: sample-size weighted, inverse-variance weighted, and extended inverse-variance (hierarchical) priors. Posterior inference was performed using NIMBLE, MCSim, and Torsten, with Monolix (SAEM) providing frequentist reference estimates.

---

## 📐 Statistical Framework
The model assumes lognormal prior distributions for all PK parameters (except residual error, which used a uniform prior on (0,100]) to ensure physiological plausibility. An exponential additive residual error model was used. No inter-individual variability was included due to the aggregated nature of the data. Three prior construction strategies were evaluated: (1) sample-size weighted mean/variance of published parameter estimates, (2) inverse-variance weighted meta-analytic priors, and (3) an extended inverse-variance approach analogous to hierarchical modeling that incorporates both between-study variability and estimation uncertainty. Convergence was assessed using R-hat < 1.01 and ESS > 100 per chain.

---

### Estimator Behavior
Posterior distributions were consistent across the three Bayesian software implementations, with overlapping 95% HPDIs. Torsten demonstrated superior sampling efficiency with 5.7 times higher tail-ESS and 10.0 times higher bulk-ESS compared to NIMBLE and MCSim, though ESS per hour was comparable between Torsten and MCSim (913 vs 1551 tail-ESS/hour; 1049 vs 1083 bulk-ESS/hour). The inverse-variance weighted prior produced biased posterior estimates relative to the other priors and Monolix reference, demonstrating the risk of overly informative priors. Bayesian credible intervals for ka and ktr were substantially wider than Monolix confidence intervals, suggesting more comprehensive uncertainty characterization.

---

### Validation Design
Model validation used two independent data sources: (1) plasma PK data from crossover-design clinical trials not included in calibration, and (2) urinary recovery data. Posterior predictive distributions were compared against observed crossover trial data, with most measurements falling within the 95% CrI. Urinary recovery predictions (2.2%-4.4%, mean 3.2%) were compared to observed values (0.8%-4.0%, mean 2.0%). Sensitivity analysis employed both local one-at-a-time (20% perturbation) and global eFAST methods, evaluating Cmax, AUC, and urinary recovery as model outputs.

---

### Applicability Boundaries
The workflow is applicable when: (1) individual patient data are unavailable but aggregated published data exist, (2) prior information from published models is available, and (3) the target model structure can be informed by literature. The method works well for drugs with extensive published PK data and multiple existing models. Limitations include: no inter-individual variability can be estimated from aggregated data; the approach may overpredict urinary recovery when renal reabsorption/secretion mechanisms are not modeled; exclusion of special populations (pediatrics, obesity, comorbidities) limits generalizability; and the modest proportion of observations within credible intervals suggests the model may not fully capture between-study heterogeneity.

---

### Comparison to Alternatives
Compared to pooled individual-level data modeling, this approach requires only publicly available aggregated data, making it feasible when individual data are proprietary. Compared to fixed-effects meta-analytic modeling of aggregated data, the Bayesian approach explicitly quantifies parameter uncertainty and integrates prior information. The three evaluated software packages (NIMBLE, MCSim, Torsten) produced comparable posterior distributions, with Torsten offering superior sampling efficiency. Monolix (frequentist SAEM) produced overlapping confidence intervals with Bayesian credible intervals, though with narrower uncertainty for absorption parameters. The inverse-variance prior approach, commonly used in meta-analysis, was shown to introduce bias when applied as a prior, highlighting a key methodological caution.

---

### Implementation Guidance
Recommended software: Torsten (Stan extension) for superior MCMC sampling efficiency, enabling shorter chains (e.g., 2000 iterations with 1000 burn-in) while maintaining reliable posterior estimates. NIMBLE and MCSim are viable alternatives with comparable ESS per hour. Practical recommendations: (1) use extended inverse-variance priors to balance informativeness and bias risk; (2) conduct prior predictive checks with ~500 samples; (3) use R-hat < 1.01 and ESS > 100 per chain as convergence thresholds; (4) complement standard Bayesian diagnostics with pharmacometrics-specific tools (observed vs predicted, weighted residuals); (5) validate against independent data sources including effect-compartment measurements. Computational cost: runs performed on Intel Xeon Platinum (2.6 GHz), 8 GB RAM, Windows Server 2019.

---

## 📊 Key Findings
- 18 clinical studies (38 study arms, 578 participants, 8 dose levels) and 10 published PK models were systematically identified and digitized
- Posterior distributions were consistent across NIMBLE, MCSim, and Torsten, with overlapping 95% credible intervals
- Torsten demonstrated 5.7-10.0 times higher sampling efficiency (tail and bulk ESS) than NIMBLE and MCSim, though ESS per hour was comparable between Torsten and MCSim
- Inverse-variance weighted priors produced biased posteriors; sample-size weighted and extended inverse-variance priors performed comparably
- Predicted urinary recovery (2.2%-4.4%, mean 3.2%) fell within observed clinical range (0.8%-4.0%, mean 2.0%)
- Sensitivity analysis identified GFR and fraction unbound as main contributors to inter-trial variability in urinary recovery; volume of distribution and clearance most influenced Cmax and AUC, respectively
- Monolix (frequentist SAEM) estimates overlapped with Bayesian credible intervals, though Bayesian methods provided wider uncertainty for ka and ktr

---

### Strengths & Limitations

#### Strengths
- Systematic PRISMA-guided literature search ensuring comprehensive data collection
- Rigorous comparison of three Bayesian software packages with quantitative efficiency metrics
- Evaluation of three prior specification strategies with clear demonstration of prior-induced bias
- External validation using independent crossover-design trial data and urinary recovery data
- Combined local (OAT) and global (eFAST) sensitivity analysis
- Transferable workflow applicable to other mechanistic model types

#### Limitations (Acknowledged by Authors)
- No inter-individual variability included due to absence of individual patient data
- Urinary recovery predictions overestimated observed values (mean 3.2% vs 2.0%)
- Sparse and highly variable urinary recovery data limited validation precision
- Only aggregated GFR values used; no renal blood flow data available
- Potential renal reabsorption/secretion not incorporated in model

#### Limitations (Expert Review)
- Model fit metrics (mKS, % observations within CrI) indicated modest descriptive performance, suggesting model misspecification or unaccounted between-study variability
- The comparison of software packages used default settings, which may not represent optimal configurations for each tool
- Prior construction relied on published model estimates which may share common biases
- The exclusion of specific patient populations (pediatrics, obesity, comorbidities) limits generalizability to broader clinical populations
- No formal assessment of prior sensitivity beyond the three strategies tested

#### Generalizability
The workflow is designed to be transferable to other drugs and mechanistic model types (full PBPK, QSP). However, the specific findings regarding dapagliflozin parameter estimates and the relative performance of software packages may not generalize directly, particularly given the drug-specific absorption characteristics and the aggregated-data-only modeling approach.

---

### Key Equations

**Sample-size weighted prior parameters**

{% raw %}
$$
\mu_{\log} = \frac{\sum n_i \log(\theta_i)}{\sum n_i},   \sigma^2_{\log} = \frac{\sum n_i (\log(\theta_i) - \mu_{\log})^2}{\sum n_i}
$$
{% endraw %}

Sample-size weighted mean and variance of log-transformed published parameter estimates, back-transformed to original scale for lognormal prior specification.

**Inverse-variance weighted prior parameters**

{% raw %}
$$
\mu = \frac{\sum w_i \theta_i}{\sum w_i},   w_i = \frac{1}{\sigma_i^2}
$$
{% endraw %}

Inverse-variance weighted mean of published parameter estimates, commonly used in meta-analysis, producing a narrow and highly informative prior.

**Extended inverse-variance prior parameters**

{% raw %}
$$
\mu = \frac{\sum w_i \theta_i}{\sum w_i},   w_i = \frac{1}{\sigma_i^2 + \tau^2}
$$
{% endraw %}

Extended inverse-variance prior incorporating both estimation uncertainty ($\sigma^2$) and between-study variability ($\tau^2$), analogous to a hierarchical model.

---

### Figures & Tables

- **Figure 1**: Schematic representation of the model development workflow, illustrating the three phases: systematic literature search, model calibration with Bayesian inference, and model validation/analysis.
  - *Significance*: Provides the overall methodological framework that is the paper's primary contribution.
- **Figure 2**: Schematic representation of the minimal physiologically-based dapagliflozin PK model structure, including central/peripheral compartments, transit absorption, and renal filtration effect compartment.
  - *Significance*: Defines the structural model architecture used throughout the analysis.
- **Figure 3**: Posterior parameter distributions (medians with 95% HPDIs) obtained from NIMBLE, MCSim, and Torsten, compared with Monolix estimates (95% CI).
  - *Significance*: Demonstrates cross-software consistency of Bayesian inference and comparison with frequentist reference.
- **Figure 4**: Observed and predicted plasma dapagliflozin concentration-time profiles after first dose and upon repeat dosing.
  - *Significance*: Shows descriptive performance of the calibrated model against calibration data.
- **Figure 5**: Model validation results: (A) posterior predictive distribution vs crossover trial data, (B) predicted vs observed urinary recovery, (C) local sensitivity analysis, (D) global eFAST sensitivity analysis.
  - *Significance*: Provides the key external validation evidence and identifies influential parameters.
- **Table 1**: Software comparison metrics: WAIC, LOO-PSIS, mKS, % observations within 50%/95% CrI, and ESS metrics (raw and per hour) for MCSim, NIMBLE, and Torsten.
  - *Significance*: Quantifies the comparative performance of the three Bayesian software packages.

---

### Code & Reproducibility Assessment
The study uses openly available Bayesian software (NIMBLE, MCSim, Torsten/Stan) and R packages (RxODE2, tidyverse). However, the manuscript does not provide direct access to the analysis code or digitized datasets. The systematic search strategy is described in supplementary materials, but full reproducibility would require access to the digitized PK data and model implementation scripts.

---

### Future Directions
Future work could extend the workflow to include inter-individual variability when individual-level data become available, incorporate renal reabsorption/secretion mechanisms to improve urinary recovery predictions, apply the framework to full PBPK and QSP models, and explore more sophisticated prior strategies such as power priors or meta-analytic predictive priors. Additional validation across multiple drugs would strengthen the generalizability claims.

---

### Expert Commentary
This study makes a valuable contribution by formalizing a Bayesian workflow for mechanistic model development from aggregated data—a scenario frequently encountered in drug development when individual patient data are proprietary. The systematic comparison of three Bayesian software packages provides practical guidance for practitioners. The demonstration that overly informative priors (inverse-variance weighting) can introduce bias is an important cautionary finding. The modest model fit metrics (only ~19% of observations within 95% CrI) warrant attention, suggesting that the model may not fully capture between-study variability or measurement error. The workflow's transferability to QSP models is particularly promising given the growing interest in Bayesian approaches in systems pharmacology.

---

### Bottom Line
This paper provides a practical, well-documented Bayesian workflow for developing mPBPK models from aggregated published data. Key takeaways: (1) extended inverse-variance priors offer a balanced approach to prior specification; (2) Torsten provides superior MCMC sampling efficiency, enabling shorter chains; (3) Bayesian credible intervals offer more comprehensive uncertainty characterization than frequentist confidence intervals; (4) the workflow is adaptable to other mechanistic modeling contexts. Practitioners should be cautious about overly informative priors and should validate models against independent data sources.

---

---

## 📊 Figures

![Schematic representation of the model development workflow.]({{ site.baseurl }}/assets/digests/2026-08-04-bayesian-workflow-for-minimal-pbpk-models-case-study-of-dapagliflozin/figures/fig_01.jpg)

![Schematic representation of the minimal physiologically-based dapagliflozin PK model structure.]({{ site.baseurl }}/assets/digests/2026-08-04-bayesian-workflow-for-minimal-pbpk-models-case-study-of-dapagliflozin/figures/fig_02.jpg)

![Dapagliflozin model posterior parameter distributions. Circles with error bars—median values of model parameters with 95% credible intervals (CrI) for MCSim, NIM]({{ site.baseurl }}/assets/digests/2026-08-04-bayesian-workflow-for-minimal-pbpk-models-case-study-of-dapagliflozin/figures/fig_03.jpg)

![Observed and predicted change over time in plasma dapagliflozin concentration: (A) after first dose; (B) upon repeat dosing. Black solid circles—mean of the obse]({{ site.baseurl }}/assets/digests/2026-08-04-bayesian-workflow-for-minimal-pbpk-models-case-study-of-dapagliflozin/figures/fig_04.jpg)

![(A) Model validation based on plasma PK data from trials with a crossover design. Dots—observed mean; solid lines with shaded area—median (95% CrI) of predicted]({{ site.baseurl }}/assets/digests/2026-08-04-bayesian-workflow-for-minimal-pbpk-models-case-study-of-dapagliflozin/figures/fig_05.jpg)