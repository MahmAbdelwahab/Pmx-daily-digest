---
layout: post
title: "The Regularized Horseshoe for Covariate Selection Improves Convenience and Predictive Performance in Population PK/PD Models"
date: 2026-05-30
authors: "A.P., C.D."
journal: "N/A (likely CPT: Pharmacometrics & Systems Pharmacology or similar)"
doi: "N/A"
paper_type: methodology
tags: [methodology, covariate-analysis]
excerpt_text: "The Regularized Horseshoe (RHS) prior is introduced for covariate selection in population PK/PD models, offering a single-fit Bayesian approach that avoids overestimation of effect sizes common in stepwise methods. Simulation studies and real-world data show RHS provides superior predictive performance on held-out data compared to SCM, COSSAC, and LASSO. The paper provides Stan code and hyperparameters for general use."
pdf_path: "/assets/digests/2026-05-30-the-regularized-horseshoe-for-covariate-selection-improves-convenience-and/PMx_The_Regularized_Horseshoe_for_Covariate__20260530.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
The Regularized Horseshoe (RHS) prior is introduced for covariate selection in population PK/PD models, offering a single-fit Bayesian approach that avoids overestimation of effect sizes common in stepwise methods. Simulation studies and real-world data show RHS provides superior predictive performance on held-out data compared to SCM, COSSAC, and LASSO. The paper provides Stan code and hyperparameters for general use.

---

### Executive Summary
This paper introduces the Regularized Horseshoe (RHS) prior as a Bayesian method for covariate selection in population PK/PD models. Unlike stepwise approaches that require multiple fits and suffer from selection bias and overestimation, RHS includes all parameter-covariate relationships in a single MCMC fit, using a sparsifying prior that shrinks small effects toward zero while preserving large effects. The authors provide a set of hyperparameters applicable to general PK/PD models and demonstrate through extensive simulations and four real-world datasets that RHS yields lower bias, lower MSE, better-calibrated prediction intervals, and superior log predictive density on held-out data compared to SCM, COSSAC, and LASSO. The method's ability to average over posterior uncertainty further reduces overfitting and improves predictive performance.

---

### Scientific Context & Motivation
Covariate selection in population PK/PD models is critical for understanding drug properties and dose optimization, but commonly used stepwise methods (SCM, COSSAC) suffer from selection bias, overestimation of effect sizes, and require multiple model fits. Full model approaches like FFEM and FREM avoid selection bias but can have high variance or require post-hoc selection. The LASSO provides regularization but still requires tuning and multiple fits. There is a need for a method that combines regularization, single-fit convenience, and proper uncertainty quantification. The Regularized Horseshoe prior, a Bayesian sparsifying prior, has been successful in other fields but had not been systematically applied to PK/PD covariate selection.

---

## ⚡ Methodological Snapshot
The Regularized Horseshoe (RHS) is a Bayesian sparsifying prior for regression coefficients that shrinks small effects toward zero while preserving large effects. It is an extension of the horseshoe prior that includes a slab component to avoid over-shrinkage of truly large coefficients. In the context of population PK/PD models, all parameter-covariate relationships are included in a single model, and the RHS prior is placed on the corresponding coefficients. The model is fit using MCMC (Stan/Torsten), yielding a posterior distribution over coefficients. The global shrinkage parameter tau controls the expected sparsity, while local shrinkage parameters lambda_j allow individual coefficients to escape shrinkage. The slab scale c ensures that large effects are not overly penalized. The authors provide default hyperparameters (global df=1, global scale=0.5, slab df=4, slab scale=2.5) that work well for general PK/PD models. Inference is based on the full posterior, enabling uncertainty quantification and posterior averaging for predictions.

---

## 📐 Statistical Framework
The RHS is a Bayesian hierarchical model. For each regression coefficient beta_j (representing the effect of a covariate on a PK/PD parameter), the prior is: beta_j ~ N(0, (c^2 * tau^2 * lambda_j^2) / (c^2 + tau^2 * lambda_j^2)), where lambda_j ~ Cauchy+(0,1), tau ~ Cauchy+(0, tau0), and c ~ Inv-Gamma(nu/2, nu*s^2/2). The global tau controls overall sparsity: a small tau shrinks all coefficients toward zero. The local lambda_j allow individual coefficients to have large values if supported by the data. The slab component c prevents the prior from shrinking large coefficients too much (a known issue with the original horseshoe). The hyperparameters tau0, nu, and s are set to 0.5, 4, and 2.5 respectively, based on prior predictive checks to achieve a realistic sparsity range (10-50% non-zero coefficients) and effect sizes typical in PK/PD. The likelihood is the standard nonlinear mixed-effects model for PK/PD data. The posterior is sampled using Hamiltonian Monte Carlo (Stan).

---

### Estimator Behavior
The RHS estimator (posterior mean) exhibits low bias across a range of true effect sizes, unlike stepwise methods which overestimate absolute effect sizes due to selection bias. The MSE is consistently lower than stepwise methods, especially in small samples. The Type M error (exaggeration factor) is close to 1 for RHS, indicating no systematic overestimation, while stepwise methods show exaggeration factors of 2-5 for small true effects. The Type S error (probability of wrong sign) is also lower for RHS. The posterior intervals are well-calibrated, providing correct coverage for prediction intervals. Convergence of MCMC is required; the paper reports that all chains converged with standard diagnostics (Rhat < 1.1). The method is robust to hyperparameter misspecification, with predictive performance not very sensitive to the sparsity hyperparameter.

---

### Validation Design
The validation consists of two parts: (1) A simulation study using a two-compartment PK model with 10 covariates (7 from NHANES with realistic correlations, 3 simulated). True effect sizes were set at 0.05, 0.25, 0.5, and 1 on log-scale, with sparsity levels of 0%, 25%, 50%, and 75% non-zero coefficients. Sample sizes were 12, 50, and 300 subjects. 100 replicates per setting. Metrics: bias, MSE, Type1/2/S/M errors, and LPPD on held-out test data (300 subjects). RHS was compared to SCM and COSSAC (LASSO excluded due to run time). (2) Four real-world datasets (remifentanil PK, theophylline PK, tobramycin PK, warfarin PK/PD) with varying complexity (12-97 subjects, 2-8 parameters, 2-6 covariates). Predictive performance was evaluated using LOGO-CV LPPD. RHS was compared to SCM, COSSAC, and LASSO. The paper also reports calibration of prediction intervals for the simulation study.

---

### Applicability Boundaries
The RHS works well when the assumption of sparsity (few true non-zero covariate effects) holds, which is common in PK/PD. It requires standardized continuous covariates (centered and scaled) and log-transformation of positive covariates. The method is applicable to any nonlinear mixed-effects model that can be coded in Stan/Torsten. It may struggle with highly correlated covariates, where explanatory power can be spread across multiple covariates, making discrete selection difficult. The method does not automatically provide a binary 'selected/not selected' decision; practitioners must define a criterion (e.g., 95% posterior interval not containing zero) or use post-hoc projection methods. MCMC convergence is essential and may be challenging for very complex models or large datasets. The provided hyperparameters are a good default but may not be optimal for all applications; sensitivity analysis is recommended.

---

### Comparison to Alternatives
Compared to stepwise methods (SCM, COSSAC): RHS requires only a single fit, avoids overestimation of effect sizes, provides posterior uncertainty, and yields better predictive performance. Stepwise methods are more prone to Type M error and have higher variance in predictions. Compared to LASSO: RHS also requires a single fit (LASSO requires tuning via cross-validation), avoids downward bias of LASSO for large effects, and provides full posterior uncertainty. LASSO can be faster for a single fit but requires multiple fits for tuning. Compared to FFEM: RHS has lower variance and provides sparse estimates. Compared to FREM: RHS is simpler to implement (no need to model covariates as outcomes) and provides automatic sparsity, but FREM can handle missing covariate data more naturally. Overall, RHS combines the advantages of regularization, single-fit convenience, and Bayesian uncertainty quantification.

---

### Implementation Guidance
The RHS can be implemented in Stan/Torsten using the provided code (Data S1, S2). Key steps: (1) Standardize all continuous covariates (center and scale) and log-transform positive covariates. (2) Set hyperparameters: global_df=1, global_scale=0.5, slab_df=4, slab_scale=2.5. (3) Run MCMC with 4 chains, 500 warmup, 1000 post-warmup samples (or more for complex models). (4) Check convergence (Rhat < 1.1, effective sample size > 100 per chain). (5) Use posterior means or medians for point estimates, and full posterior for predictions. For discrete selection, use 95% posterior intervals not containing zero or consider projective inference. Computational cost: single MCMC run, which may take hours for complex models, but is still often faster than stepwise methods that require dozens of fits. The paper used a cloud VM with 96 vCPUs; run times are not explicitly reported but are manageable for typical PK/PD models.

---

## 📊 Key Findings
1) RHS provides lower bias and MSE than stepwise methods across a range of sparsity levels and sample sizes (12, 50, 300 subjects). 2) RHS avoids the overestimation of effect sizes (Type M error) that plagues stepwise methods. 3) RHS yields higher log predictive density (LPPD) on held-out data in both simulated and real-world examples, with improvements of up to tens of percentage points in residual SD. 4) RHS requires only a single MCMC fit, making it more convenient than stepwise or LASSO approaches. 5) The provided hyperparameters (global df=1, global scale=0.5, slab df=4, slab scale=2.5) work well across general PK/PD models. 6) Posterior averaging in RHS further improves predictive performance beyond the regularization alone.

---

### Strengths & Limitations

#### Strengths
- Single MCMC fit required, reducing computational burden compared to stepwise methods
- Avoids overestimation of effect sizes (Type M error) common in stepwise selection
- Provides full posterior uncertainty, enabling well-calibrated prediction intervals
- Superior predictive performance on held-out data demonstrated in simulations and four real-world datasets
- Readily applicable Stan/Torsten code and hyperparameters provided for general use
- Robust to hyperparameter misspecification (predictive performance not very sensitive to sparsity hyperparameter)

#### Limitations (Acknowledged by Authors)
- Hyperparameters may not be optimal for all applications; tailoring can improve performance
- With correlated covariates, explanatory power can spread over multiple covariates, complicating discrete selection
- Does not provide a binary selection; practitioners may need post-hoc methods like projective inference for discrete decisions

#### Limitations (Expert Review)
- MCMC convergence requires careful diagnostics (Rhat, effective sample size), which may be challenging for complex models
- Computational cost of MCMC may be higher than a single stepwise fit, though stepwise requires many fits
- Not evaluated on LASSO in simulation due to prohibitive run times, limiting direct comparison in that setting
- Real-world datasets are limited to four examples; broader validation across diverse PK/PD scenarios is needed

#### Generalizability
The method is demonstrated on typical PK/PD models (one- and two-compartment, with continuous covariates) and hyperparameters are set for general use. The approach should generalize to other nonlinear mixed-effects models, but performance may depend on model complexity, number of covariates, and correlation structure. The provided hyperparameters are a reasonable starting point for most applications.

---

### Key Equations

**Regularized Horseshoe Prior**

{% raw %}
$$\begin{aligned}
\beta_j \sim N(0, \frac{c^2 \tau^2 \lambda_j^2}{c^2 \\
& + \tau^2 \lambda_j^2}),   \lambda_j \sim \text{Cauchy}^+(0,1),   \tau \sim \text{Cauchy}^+(0, \tau_0),   c \sim \text{Inv-Gamma}(\nu/2, \nu s^2/2)
\end{aligned}$$
{% endraw %}

The regularized horseshoe prior for regression coefficients beta_j. The global shrinkage parameter tau controls overall sparsity, local lambda_j allow individual shrinkage, and the slab scale c prevents over-shrinkage of large effects. Hyperparameters tau0, nu, and s are set to default values (tau0=0.5, nu=4, s=2.5).

**Shrinkage Factor**

{% raw %}
$$
\kappa_j = \frac{1}{1 + \lambda_j^2 \tau^2}
$$
{% endraw %}

The shrinkage factor for coefficient j under the standard horseshoe prior. Values near 1 indicate strong shrinkage toward zero, while values near 0 indicate no shrinkage. The regularized horseshoe modifies this to avoid over-shrinkage of large effects.

---

### Figures & Tables

- **Figure 3**: Posterior distributions of the CL-age coefficient across five simulated datasets and four sparsity settings for 12-subject datasets. Ground truth values and point estimates from SCM and COSSAC are overlaid.
  - *Significance*: Illustrates that RHS posterior distributions are centered near the true value, while stepwise methods often produce zero or overestimated point estimates, especially at higher sparsity.
- **Figure 4**: Point estimates from each method across 100 replicates for 12-subject datasets at varying sparsity levels. True values are overlaid in black.
  - *Significance*: Shows the variability and bias of each method. Stepwise methods exhibit high variance and overestimation, while RHS estimates are more concentrated around the truth.
- **Figure 5**: Evaluation metrics (bias, MSE, Type1, Type2, TypeS, TypeM errors) for the CL-weight coefficient as a function of sparsity and number of subjects.
  - *Significance*: Quantifies the superior performance of RHS: lower bias, MSE, and TypeM error across all settings, especially in small samples.
- **Table 1**: Comparison of covariate selection methods (FFEM, FREM, Stepwise, LASSO, RHS) across criteria: bias, variance, sparsity, single fit, posterior averaging.
  - *Significance*: Summarizes the theoretical advantages of RHS: it is the only method that avoids both upward and downward bias, provides low variance, sparse estimates, single fit, and posterior averaging.
- **Table 2**: Real-world datasets (remifentanil, theophylline, tobramycin, warfarin) with covariates selected by each method and LOGO-CV LPPD.
  - *Significance*: Demonstrates that RHS achieves higher LPPD than SCM, COSSAC, and LASSO on all four datasets, confirming its predictive advantage in practice.

---

### Code & Reproducibility Assessment
Stan/Torsten code and R scripts are provided in supplementary materials (Data S1, S2, S4). The simulation and real-data analyses are reproducible with the provided code and hyperparameters. The paper uses publicly available NHANES data and four real-world datasets from a previous publication.

---

### Supplementary Materials
Supplementary materials include Data S1 (Stan code for theophylline model), Data S2 (R script for running the model), Data S3 (detailed simulation results, additional metrics, and sensitivity analyses), and Data S4 (additional R scripts). These provide full reproducibility and additional validation.

---

### Future Directions
The authors suggest projective predictive inference as a way to obtain discrete covariate selection while preserving posterior uncertainty. Future work could also explore adaptive hyperparameters, application to time-varying covariates, and integration with other Bayesian pharmacometric workflows.

---

### Expert Commentary
The RHS prior is a welcome addition to the pharmacometrician's toolbox, addressing key shortcomings of stepwise methods. The provided hyperparameters lower the barrier to adoption, but users should invest in MCMC diagnostics and consider the trade-off between computational cost and improved inference. The superior predictive performance, especially in small datasets, makes RHS particularly valuable in early-phase drug development.

---

### Bottom Line
The Regularized Horseshoe prior offers a convenient, single-fit Bayesian alternative to stepwise covariate selection in population PK/PD models, delivering better predictive performance and more accurate effect size estimates. Practitioners should adopt RHS as a primary tool for covariate selection, especially when predictive accuracy and uncertainty quantification are important, while being mindful of MCMC diagnostics and the need for post-hoc discrete selection if required.

---

---

## 📊 Figures

![Prior density of(left) and(right).]({{ site.baseurl }}/assets/digests/2026-05-30-the-regularized-horseshoe-for-covariate-selection-improves-convenience-and/figures/fig_01.png)

![Median and 90% quantiles of the sparsity in simulated datasets for varying values of. Observed values are overlaid as dotted lines. Ribbons represent the 90% qua]({{ site.baseurl }}/assets/digests/2026-05-30-the-regularized-horseshoe-for-covariate-selection-improves-convenience-and/figures/fig_02.png)

![Posterior distributions of theparameter across five simulated datasets and four sparsity settings for the 12 subject datasets. Ground truth values and point esti]({{ site.baseurl }}/assets/digests/2026-05-30-the-regularized-horseshoe-for-covariate-selection-improves-convenience-and/figures/fig_03.png)

![Point estimates from each method across the 100 replicates from the 12 subject datasets across the varying sparsity levels. True values are overlaid in black. Fo]({{ site.baseurl }}/assets/digests/2026-05-30-the-regularized-horseshoe-for-covariate-selection-improves-convenience-and/figures/fig_04.png)

![Evaluation metrics of methods foras a function of ground-truth sparsity value and number of subjects fit. For all but the zero sparsity setting the true value of]({{ site.baseurl }}/assets/digests/2026-05-30-the-regularized-horseshoe-for-covariate-selection-improves-convenience-and/figures/fig_05.png)