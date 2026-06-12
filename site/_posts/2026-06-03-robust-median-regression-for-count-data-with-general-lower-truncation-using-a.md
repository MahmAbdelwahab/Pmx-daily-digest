---
layout: post
title: "Robust median regression for count data with general lower truncation using a contaminated discrete Weibull model"
date: 2026-06-03
authors: "Burger DA, van Niekerk J, Lesaffre E"
journal: "International Journal of Biostatistics, 2026"
doi: "10.1515/ijb-2025-0066"
paper_type: methodology
tags: [methodology]
excerpt_text: "Proposes a contaminated discrete Weibull (cDW) regression model for robust median inference in count data with heavy tails and lower truncation. The two-component mixture shares a common median but allows a more dispersed component to accommodate outliers, estimated via Bayesian MCMC. Applied to hospital length-of-stay data, the cDW model reduces outlier influence and improves predictive performance over single-component discrete Weibull models."
pdf_path: "/assets/digests/2026-06-03-robust-median-regression-for-count-data-with-general-lower-truncation-using-a/PMx_Robust_median_regression_forcount_data_w_20260603.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
Proposes a contaminated discrete Weibull (cDW) regression model for robust median inference in count data with heavy tails and lower truncation. The two-component mixture shares a common median but allows a more dispersed component to accommodate outliers, estimated via Bayesian MCMC. Applied to hospital length-of-stay data, the cDW model reduces outlier influence and improves predictive performance over single-component discrete Weibull models.

---

### Executive Summary
This paper introduces a contaminated discrete Weibull (cDW) regression model that extends the standard discrete Weibull by adding a more dispersed component to handle heavy-tailed count distributions. The model directly links covariates to the median, accommodates general lower truncation at an arbitrary threshold, and is estimated via Markov chain Monte Carlo in JAGS. Simulation studies and an application to hospital length-of-stay data demonstrate that the cDW model reduces the influence of outliers and provides superior fit and predictive performance compared to single-component discrete Weibull models, as assessed by leave-one-out cross-validation and Kullback-Leibler influence diagnostics.

---

### Scientific Context & Motivation
Count data in health outcomes research often exhibit heavy tails and outliers that can distort mean-based regression estimates. Median regression offers robustness, but existing median-based count models (e.g., discrete Weibull) may not adequately capture extreme values. The paper addresses this gap by proposing a contaminated mixture model that retains a single median interpretation while accommodating heavy tails through a more dispersed secondary component, thereby stabilizing median regression coefficients.

---

## ⚡ Methodological Snapshot
The contaminated discrete Weibull (cDW) regression model is a two-component finite mixture of truncated discrete Weibull distributions that share the same median but differ in dispersion. The baseline component (weight $\delta$) captures the bulk of the data, while the second component (weight $1-\delta$) has larger dispersion ($\eta>1$) to accommodate outliers. The model is parameterized directly in terms of the median $m^*$, which is linked to covariates via a log link, ensuring interpretability. General lower truncation at threshold $c$ ($c=0$ for nonnegative, $c=1$ for positive counts) is handled naturally. Estimation is performed using Bayesian MCMC in JAGS, with weakly informative priors. The model provides full posterior distributions for all parameters, including the mixture weight $\delta$ and dispersion ratio $\eta$.

---

## 📐 Statistical Framework
The model assumes $Y$ follows a mixture: with probability $\delta$, $Y \sim \text{TDW}(m^*, \alpha, c)$; with probability $1-\delta$, $Y \sim \text{TDW}(m^*, \eta\alpha, c)$, where $\eta>1$. The TDW distribution is a discrete Weibull with probability mass function $P(Y=y) = q^{y^{1/a}} - q^{(y+1)^{1/a}}$ for $y \ge c$, where $q = \exp[\ln(0.5)/((m^*)^{1/a} - c^{1/a})]$ and $a$ is the dispersion parameter. The median $m^*$ is linked to covariates via $\log(m^*) = X\beta$. The likelihood is straightforward, and priors are specified for $\beta$, $\alpha$, $\eta$, and $\delta$ (e.g., normal for $\beta$, gamma for $\alpha$, truncated normal for $\log(\eta)$, beta for $\delta$). The model is identifiable due to the constraint $\eta>1$ and the separation of components via dispersion.

---

### Estimator Behavior
The Bayesian estimator provides posterior means/medians for regression coefficients with full uncertainty quantification. Under heavy-tailed mixtures, the cDW model yields less biased estimates of median regression coefficients compared to the single-component DW model, as shown in simulations. The mixture components are identifiable due to $\eta>1$. MCMC convergence is assessed using Gelman-Rubin diagnostics and effective sample sizes. The estimator is consistent under correct specification and robust to misspecification of the tail component as long as the median is correctly specified.

---

### Validation Design
Simulation studies varied sample sizes ($N=200, 500$), mixture proportions ($\delta=0.7, 0.9$), dispersion ratios ($\eta=2, 5$), and truncation points ($c=0, 1$). Performance metrics included bias, empirical standard error, and coverage of 95% credible intervals for regression coefficients. The cDW model was compared to the single-component DW model. Additionally, a real data application used Arizona hospital length-of-stay data ($N=500$) with covariates age, gender, and procedure type. Model comparison used leave-one-out cross-validation (LOO-CV) and Kullback-Leibler influence diagnostics.

---

### Applicability Boundaries
The method works well when count data have a heavy upper tail that can be captured by a more dispersed component. It is not suitable for data with structural zeros unless combined with a hurdle model (as recommended by the authors). The model assumes the median is the same across components, which may be restrictive if outliers shift the median. Data requirements: count outcomes with known lower truncation threshold $c$. The method is most effective when the proportion of outliers is moderate ($\delta$ not too close to 0 or 1). Computational cost increases with sample size and number of covariates.

---

### Comparison to Alternatives
Compared to single-component discrete Weibull regression, the cDW model provides better fit and outlier resistance, as demonstrated by LOO-CV and K-L diagnostics. Compared to robust GLM approaches (e.g., Cantoni & Ronchetti, 2001), the cDW model directly models the median and handles truncation naturally, but requires MCMC computation. Compared to other mixture models for count data (e.g., negative binomial mixtures), the cDW model retains median interpretation and is tailored for heavy tails. The Bayesian framework allows full uncertainty quantification, unlike frequentist robust methods that rely on asymptotic approximations.

---

### Implementation Guidance
The model is implemented in JAGS via the runjags R package. R code is provided on GitHub. Practical tips: use weakly informative priors (e.g., $N(0, 10)$ for regression coefficients, $\text{Gamma}(2, 1)$ for $\alpha$, $N(0, 1)$ for $\log(\eta)$ truncated to positive, $\text{Beta}(2, 2)$ for $\delta$). Run at least 3 chains with 10,000 iterations after burn-in of 5,000. Check convergence with Gelman-Rubin $\hat{R} < 1.1$. For zero-inflated data, embed in hurdle framework: model zero probability separately with logistic regression, then apply cDW to positive counts. Computational cost is moderate; for $N=500$, MCMC runs in minutes on a standard desktop.

---

## 📊 Key Findings
The cDW model outperforms the single-component DW model in terms of leave-one-out cross-validation and Kullback-Leibler influence diagnostics on hospital length-of-stay data. Simulation experiments show that under strongly heavy-tailed mixture settings, the cDW model accurately recovers regression coefficients and improves on the single-component DW model. The model also provides a natural outlier detection mechanism via posterior component membership probabilities and K-L divergence. The authors recommend embedding the cDW in a hurdle framework when structural zeros are present.

---

### Strengths & Limitations

#### Strengths
- Robust median inference for count data with heavy tails and outliers
- Handles general lower truncation at arbitrary threshold $c$
- Bayesian framework provides full posterior uncertainty quantification
- Outlier detection via Kullback-Leibler divergence and component membership probabilities
- Direct median interpretation through covariate link
- Comprehensive simulation studies and real data application

#### Limitations (Acknowledged by Authors)
- Computational cost of MCMC estimation
- Potential identifiability issues in mixture components
- Recommendation to embed in hurdle framework for zero-inflated data
- Assumption of common median across components may be restrictive

#### Limitations (Expert Review)
- Reliance on JAGS may limit scalability to very large datasets
- Parametric form of the mixture may not capture all types of heavy-tailed behavior
- Sensitivity to prior specification for dispersion parameters $\alpha$ and $\eta$
- No formal model selection criterion for number of components (fixed at two)

#### Generalizability
The method is generalizable to any count outcome with lower truncation and potential heavy tails, particularly in health services research (e.g., length of stay, hospital visits). The Bayesian implementation allows adaptation to other settings, but the parametric assumptions may limit applicability to data with complex tail behavior not captured by a single additional component.

---

### Key Equations

**cTDW mixture definition**

{% raw %}
$$
Y \sim \delta   \text{TDW}(m^*, \alpha, c) + (1-\delta)   \text{TDW}(m^*, \eta\alpha, c)
$$
{% endraw %}

Defines the contaminated discrete Weibull distribution as a two-component mixture sharing the same median $m^*$ but with different dispersion parameters $\alpha$ and $\eta\alpha$ ($\eta>1$).

**Raw moment of cTDW**

{% raw %}
$$
M_{\text{cTDW},k} = \delta   M_{\text{TDW},k}(\alpha) + (1-\delta)   M_{\text{TDW},k}(\eta\alpha)
$$
{% endraw %}

The k-th raw moment of the cTDW distribution is a weighted average of the component raw moments, enabling computation of mean, variance, and kurtosis.

**Kullback-Leibler divergence for outlier detection**

{% raw %}
$$
\text{KL}_R\big(P(\boldsymbol{\theta}|\mathcal{D}), P(\boldsymbol{\theta}|\mathcal{D}_{[i]})\big) = \log\left\{ \frac{1}{K} \sum_{k=1}^K \big[ P(\mathcal{D}_i|\boldsymbol{\theta}^{(k)}) \big]^{-1} \right\} + \frac{1}{K} \sum_{k=1}^K \log\big[ P(\mathcal{D}_i|\boldsymbol{\theta}^{(k)}) \big]
$$
{% endraw %}

Approximates the Kullback-Leibler divergence between posterior distributions with and without observation i, used to identify influential outliers.

**Outlier classification criterion**

{% raw %}
$$
0.5\left(1 + \sqrt{1 - \exp\big[-2 \text{KL}_R\big(P(\boldsymbol{\theta}|\mathcal{D}), P(\boldsymbol{\theta}|\mathcal{D}_{[i]})\big)\big]}\right) \geq 0.8
$$
{% endraw %}

Threshold criterion based on Tomazella et al. to flag observations that significantly alter the posterior when omitted.

---

### Figures & Tables

- **Figure 1**: Simulation results showing bias and coverage of regression coefficients for cDW vs DW under various heavy-tailed scenarios.
  - *Significance*: Demonstrates the improved accuracy of cDW in recovering true median regression coefficients under mixture settings.
- **Figure 2**: Application to hospital length-of-stay data: fitted distributions and outlier diagnostics.
  - *Significance*: Illustrates practical utility and superior fit of cDW compared to DW.
- **Table 1**: Simulation study results: bias, empirical standard error, and coverage probabilities for cDW and DW models.
  - *Significance*: Quantifies the performance gains of cDW under different sample sizes and mixture proportions.
- **Table 2**: Leave-one-out cross-validation (LOO-CV) comparison for hospital length-of-stay data.
  - *Significance*: Shows that cDW achieves better predictive performance than DW.

---

### Code & Reproducibility Assessment
R code for reproducing the application results is available on GitHub at https://github.com/DABURGER1/Robust-Count-cTDW. The model is implemented in JAGS via the runjags R package.

---

### Supplementary Materials
Supplementary material includes additional simulation results, derivations of moment formulas, and further details on the Kullback-Leibler diagnostic. Available at https://doi.org/10.1515/ijb-2025-0066.

---

### Future Directions
Extensions to zero-inflated hurdle frameworks, multivariate count outcomes, nonparametric median regression, and incorporation of random effects for clustered data. Further investigation of prior sensitivity and model selection criteria for the number of mixture components.

---

### Expert Commentary
This paper presents a principled and computationally feasible approach to robust median regression for count data, filling an important methodological gap. The contaminated mixture framework elegantly handles heavy tails while preserving median interpretability. The Bayesian implementation with JAGS makes the method accessible. The application to hospital length-of-stay data demonstrates practical utility. Future work could explore adaptive component selection and extensions to longitudinal settings.

---

### Bottom Line
The contaminated discrete Weibull regression model provides a robust, median-centered alternative for analyzing skewed, possibly truncated count outcomes, offering better outlier resistance and predictive performance than standard discrete Weibull models. Practitioners should consider this method when count data exhibit heavy tails and a robust median interpretation is desired.