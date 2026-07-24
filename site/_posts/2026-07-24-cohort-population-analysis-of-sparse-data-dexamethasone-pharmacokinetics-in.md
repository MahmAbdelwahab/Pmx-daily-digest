---
layout: post
title: "Cohort population analysis of sparse data: Dexamethasone pharmacokinetics in mother and fetus based on blood sampling at birth"
date: 2026-07-24
authors: "Krzyzanski W"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026, 53:36"
doi: "10.1007/s10928-026-10048-5"
paper_type: methodology
tags: [methodology]
excerpt_text: "This paper introduces a parametric estimation method for nonlinear mixed effects models that uses a Gauss-Hermite quadrature-based discrete mixture (cohorts) to approximate continuous random effects. The method is designed for extremely sparse data (e.g., one observation per subject) and is shown to provide more accurate and precise estimates of inter-individual variability than standard methods (FOCE, IMP, SAEM) in such settings. The approach is implemented in NONMEM and demonstrated on simulated data and a real dexamethasone pharmacokinetic study in pregnant women."
pdf_path: "/assets/digests/2026-07-24-cohort-population-analysis-of-sparse-data-dexamethasone-pharmacokinetics-in/PMx_Cohort_population_analysis_of_sparse_dat_20260724.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper introduces a parametric estimation method for nonlinear mixed effects models that uses a Gauss-Hermite quadrature-based discrete mixture (cohorts) to approximate continuous random effects. The method is designed for extremely sparse data (e.g., one observation per subject) and is shown to provide more accurate and precise estimates of inter-individual variability than standard methods (FOCE, IMP, SAEM) in such settings. The approach is implemented in NONMEM and demonstrated on simulated data and a real dexamethasone pharmacokinetic study in pregnant women.

---

### Executive Summary
This paper introduces a novel parametric estimation technique for nonlinear mixed effects models, termed 'cohort population analysis,' which approximates a continuous normal distribution of random effects by a discrete Gauss-Hermite quadrature-based mixture of point masses (cohorts). The method is designed to handle extremely sparse data (e.g., one observation per subject) where traditional methods like FOCE, IMP, or SAEM struggle. Through simulation studies and a real-data application to dexamethasone pharmacokinetics in parturient women, the author demonstrates that the cohort approach provides more accurate and precise estimates of inter-individual variability parameters than standard methods when data are sparse, at the cost of biased residual variability estimates. The method is implemented in NONMEM using mixture models and is shown to be robust, with 100% convergence success.

---

### Scientific Context & Motivation
Estimating population pharmacokinetic parameters from sparse data (e.g., one observation per subject) is a common challenge in clinical studies involving special populations such as pregnant women, neonates, or critically ill patients. Standard maximum likelihood methods (FOCE, IMP, SAEM) often struggle with such data because they rely on individual parameter estimates, which shrink towards the population mean when individual data are insufficient. Nonparametric methods offer an alternative but may not be fully parametric. This paper addresses the gap by proposing a fully parametric method that avoids individual-level estimation by using a discrete approximation of the random effects distribution, thereby enabling robust estimation from extremely sparse data.

---

## ⚡ Methodological Snapshot
The cohort population method replaces the continuous normal distribution of a random effect (e.g., $log(CL)$) with a discrete mixture of N point masses (cohorts). The locations and probabilities of these point masses are determined by the Gauss-Hermite quadrature nodes and weights, respectively, such that the discrete distribution has the same first $2N-1$ moments as the target normal distribution. In a nonlinear mixed effects model, this means that instead of integrating over a continuous random effect, the likelihood is approximated by a weighted sum over N discrete cohorts. The method is implemented in NONMEM using the $MIX record to define a mixture of N subpopulations, each with a fixed typical value ($\theta + \sqrt{2} \omega \xi_i$) and zero inter-individual variability. The mixing probabilities are fixed to the Gauss-Hermite weights. The between-cohort standard deviation $\omega$ is estimated as a fixed effect. This approach avoids the need for numerical integration or individual-level parameter estimation, making it particularly suitable for extremely sparse data where individual profiles cannot be estimated.

---

## 📐 Statistical Framework
The method is based on the Gauss-Hermite quadrature approximation of integrals involving a normal density. For a random effect $\eta \sim N(0, \omega^2)$, the marginal likelihood involves an integral of the form $\int f(\eta) \phi(\eta; 0, \omega^2) d\eta$. Gauss-Hermite quadrature approximates this integral as a weighted sum of $f$ evaluated at specific nodes: $\sum (w_i/\sqrt{\pi}) f(\theta + \sqrt{2} \omega \xi_i)$. The key theoretical insight is that this approximation can be reinterpreted as a mixture of point masses (cohorts) at locations $\theta + \sqrt{2} \omega \xi_i$ with probabilities $w_i/\sqrt{\pi}$. This discrete distribution has the same first $2N-1$ moments as the continuous normal distribution. The method assumes that the random effects are normally distributed (or log-normally distributed for positive parameters). The number of cohorts $N$ determines the accuracy of the moment matching; $N=3$ matches moments up to order 5. The between-cohort variability $\omega$ is estimated as a fixed effect, and the residual variability captures all remaining unexplained variation.

---

### Estimator Behavior
For dense data, cohort estimates of structural parameters ($CL, V$) had accuracy <4% and precision (%RRMSE) <12%, comparable to standard methods. IIV estimates were biased downward (≤20%) with precision improving from 35% (2×2-cohort) to 19% (5×5-cohort). Residual variability was grossly overestimated (634% for 1-cohort, decreasing to 36% for 5×5-cohort). For sparse data, structural parameter accuracy remained <5%, with best performance for 5×5-cohort (<1% bias). IIV estimates were more accurate (≤20% bias) than FOCE/IMP (30-45% underestimation) and SAEM (24% overestimation for $\omega_{CL}$). Precision of IIV estimates was better for cohort methods (%RRMSE 30-60%) than standard methods (50-85%). Residual variability estimates were poor for all methods. The method showed 100% convergence success for both dense and sparse data.

---

### Validation Design
The method was validated through two studies. Study I (proof of concept) used 100 simulated datasets from a one-compartment IV bolus model with log-normal IIV on $CL$ and $V$. Two data scenarios were considered: dense (5 samples/subject) and sparse (1 sample/subject). Nine estimation methods were compared: 1-cohort (naive pooled), 2×2- to 5×5-cohort, FOCE, IMP, and SAEM. Performance was assessed by success rate (non-singular covariance matrix), accuracy (%RΔP), and precision (%RRMSE) for $CL$, $V$, $\omega_{CL}$, $\omega_{V}$, and $CV^2$. Study II applied the 1-cohort and 3-cohort models to real clinical data: dexamethasone concentrations from 14 mother-fetus pairs, each with a single blood sample at birth. Model performance was evaluated using objective function value, %RSE, diagnostic plots, and VPC. The simulation design is appropriate but limited to a simple model; the real-data application demonstrates feasibility but has a small sample size (N=14).

---

### Comparison to Alternatives
Compared to FOCE, IMP, and SAEM, the cohort method showed 100% success rate for sparse data (vs. 19% for FOCE, 68% for SAEM). For IIV parameters, cohort methods had lower bias (≤20% vs. 30-45% underestimation for FOCE/IMP) and better precision (%RRMSE 30-60% vs. 50-85%). However, cohort methods overestimated residual variability ($CV^2$) more severely for dense data (e.g., 634% for 1-cohort vs. <6% for standard methods). For sparse data, all methods performed poorly on residual variability. The cohort method does not require individual parameter estimates, which is a key advantage when data are too sparse for individual-level estimation.

---

### Implementation Guidance
The method is implemented in NONMEM 7.6 using the $MIX record to define a mixture of N subpopulations (cohorts). For each cohort, the typical value of the random effect is set to $\theta + \sqrt{2} \omega \xi_i$, where $\xi_i$ are the Gauss-Hermite nodes and $\omega$ is the between-cohort standard deviation. The mixing probabilities are fixed to the Gauss-Hermite weights $w_i/\sqrt{\pi}$. The IIV variances (OMEGA) are fixed to zero. The FOCE method is used for estimation. The number of cohorts $N$ should be chosen based on data sparsity and model complexity; $N=3$ was used in the case study. The computational cost is low, as it avoids the need for numerical integration over random effects. The method is most beneficial when the number of observations per subject is less than the number of model parameters.

---

## 📊 Key Findings
1. The Gauss-Hermite cohort population method achieved 100% estimation success for both dense and sparse simulated datasets, outperforming FOCE (19% success) and SAEM (68% success) for sparse data. 2. For sparse data (1 observation/subject), cohort methods provided more accurate and precise estimates of inter-individual variability (IIV) parameters (bias ≤20%, %RRMSE 30-60%) compared to FOCE, IMP, and SAEM (bias 30-45% underestimation or 24% overestimation, %RRMSE 50-85%). 3. Structural parameter estimates ($CL, V$) were accurate (<5% bias) for all methods with sparse data. 4. Residual variability was poorly estimated by all methods for sparse data, with cohort methods showing a systematic trade-off where between-cohort variability partially absorbed residual variability. 5. In the dexamethasone case study (14 subjects, one sample each), the 3-cohort model identified three distinct clearance groups (23.1, 38.8, 65.2 L/h) and reduced residual variance by 2.4-fold compared to the 1-cohort (naive pooled) model.

---

### Strengths & Limitations

#### Strengths
- Novel and elegant theoretical connection between Gauss-Hermite quadrature and mixture models.
- 100% estimation success rate for both dense and sparse data, outperforming standard methods for sparse data.
- More accurate and precise IIV estimates than FOCE, IMP, and SAEM for sparse data.
- Fully parametric and implementable in standard software (NONMEM) using existing mixture model functionality.
- Provides a natural way to classify subjects into discrete groups (e.g., slow/fast metabolizers).
- Avoids the need for numerical integration or individual-level parameter estimation.

#### Limitations (Acknowledged by Authors)
- The method does not estimate between-subject variability but rather between-cohort variability, leading to a trade-off with residual variability.
- Residual variability estimates are biased, especially for small $N$.
- The study did not compare with nonparametric or Bayesian methods.
- Results are introductory; more thorough studies are needed.

#### Limitations (Expert Review)
- The method assumes normally distributed random effects; performance under non-normal distributions is not evaluated.
- The optimal number of cohorts $N$ is not systematically determined; $N=3$ was chosen ad hoc for the case study.
- For multiple random effects, the number of cohorts grows exponentially ($N^K$), which may limit applicability to models with many random effects.
- The method does not provide individual-level parameter estimates (only cohort assignment probabilities), which may be a limitation for some applications (e.g., therapeutic drug monitoring).
- The simulation study used a relatively simple one-compartment model; performance with more complex models (e.g., with absorption, multiple compartments) is unknown.

#### Generalizability
The method is generalizable to any nonlinear mixed effects model where random effects are assumed to be normally distributed. It is particularly useful for extremely sparse data (1 observation/subject) but may be less beneficial for richer data where standard methods perform well. The extension to multiple random effects requires a product of cohorts ($N^K$ cohorts for $K$ random effects), which may become computationally expensive for large $K$.

---

### Key Equations

**Cohort population probability density function**

{% raw %}
$$
p_X(x) = \sum_{i=1}^{N} w_i \delta(x - x_i)
$$
{% endraw %}

Defines the probability density function of a cohort population as a sum of Dirac delta functions at support points x_i with weights w_i.

**Gauss-Hermite quadrature**

{% raw %}
$$
\int_{-\infty}^{\infty} f(x) e^{-x^2} dx = \sum_{i=1}^{N} w_i^{(N)} f(\xi_i^{(N)}) + \frac{N! \sqrt{\pi}}{2^N (2N)!} \frac{d^{2N}f}{dx^{2N}}(\xi^{(N)})
$$
{% endraw %}

Gauss-Hermite quadrature rule for approximating an integral with a normal weighting function. The nodes ξ_i are roots of Hermite polynomials, and w_i are the corresponding weights.

**Gauss-Hermite approximation of normal integral**

{% raw %}
$$
\int_{-\infty}^{\infty} f(x) \frac{1}{\sqrt{2\pi \omega^2}} e^{-(x-\theta)^2/(2\omega^2)} dx \approx \sum_{i=1}^{N} \frac{w_i^{(N)}}{\sqrt{\pi}} f(\theta + \sqrt{2}\omega \xi_i^{(N)})
$$
{% endraw %}

Approximation of the integral of f(x) against a normal density with mean θ and variance ω² using Gauss-Hermite quadrature.

**Gauss-Hermite N-cohort population p.d.f.**

{% raw %}
$$
p_N(x) = \sum_{i=1}^{N} \frac{w_i^{(N)}}{\sqrt{\pi}} \delta(x - \theta - \sqrt{2}\omega \xi_i^{(N)})
$$
{% endraw %}

The Gauss-Hermite N-cohort population probability density function, which approximates a normal distribution with mean θ and variance ω².

---

### Figures & Tables

- **Figure 1**: Comparison of the Gauss-Hermite 3-cohort probability density function (discrete point masses) with the continuous normal distribution having the same mean and variance.
  - *Significance*: Illustrates the core concept: a discrete mixture of point masses approximates a continuous normal distribution, with matching moments up to order 2N-1.
- **Figure 2**: Example of dense (5 samples/subject) and sparse (1 sample/subject) simulated plasma concentration-time profiles for the one-compartment model.
  - *Significance*: Visualizes the two data scenarios used in the simulation study, highlighting the extreme sparsity of the sparse dataset.
- **Figure 3**: Observed maternal and fetal dexamethasone concentrations overlaid with typical model predictions for the 1-cohort and 3-cohort population models.
  - *Significance*: Shows the model fit to the real clinical data; both models capture the data reasonably well, with the 3-cohort model showing a modest improvement.
- **Figure 4**: Visual predictive check (VPC) plots for the 1-cohort and 3-cohort models applied to the dexamethasone data.
  - *Significance*: Demonstrates that the 3-cohort model has narrower prediction intervals than the 1-cohort model, indicating better precision in describing the data variability.
- **Figure 5**: Histogram of individual $CL/F$ values assigned to the 14 subjects based on the 3-cohort model, showing three distinct clearance groups.
  - *Significance*: Illustrates how the cohort method can classify subjects into discrete groups (e.g., slow, medium, fast metabolizers) based on their most probable cohort assignment.

---

### Code & Reproducibility Assessment
NONMEM control stream and dataset are provided in Appendix 1. Simulation code in RStudio is mentioned but not provided. Reproducibility is partial.

---

### Supplementary Materials
Supplementary material includes Table S1 (Gauss-Hermite nodes and weights for N≤5), Table S2 (dexamethasone concentration data), Tables S3-S4 (detailed simulation results), and Figures S1-S2 (diagnostic plots). The supplementary file is a Word document (231 KB).

---

### Future Directions
Further studies should investigate: (1) the optimal number of cohorts for different data sparsity levels and model complexities; (2) extension to non-normal random effects distributions using other quadrature rules; (3) comparison with nonparametric and Bayesian methods; (4) application to pharmacodynamic and more complex pharmacokinetic models; (5) theoretical characterization of the bias-variance trade-off between cohort and residual variability.

---

### Expert Commentary
This is a clever and practically useful adaptation of Gauss-Hermite quadrature for a challenging data scenario. The key insight—replacing continuous random effects with a discrete mixture whose moments match the target distribution up to order 2N-1—is elegant. The trade-off between between-cohort and residual variability is expected and well-discussed. The method's main value is for 'ultra-sparse' data where individual-level estimation is impossible. A limitation not fully explored is the sensitivity to the choice of N (number of cohorts) and the assumption that the random effects distribution is normal. Extensions to non-normal distributions (e.g., using other quadrature rules) would be valuable. The NONMEM implementation is straightforward, which should facilitate adoption.

---

### Bottom Line
The Gauss-Hermite cohort population method offers a viable parametric alternative for estimating population PK parameters from extremely sparse data (e.g., one observation per subject). It provides more accurate and precise estimates of inter-individual variability than standard methods (FOCE, IMP, SAEM) in such settings, at the cost of biased residual variability estimates. The method is implementable in NONMEM using mixture models and is particularly suited for studies where individual profiles cannot be estimated.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-07-24-cohort-population-analysis-of-sparse-data-dexamethasone-pharmacokinetics-in/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-07-24-cohort-population-analysis-of-sparse-data-dexamethasone-pharmacokinetics-in/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-07-24-cohort-population-analysis-of-sparse-data-dexamethasone-pharmacokinetics-in/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-07-24-cohort-population-analysis-of-sparse-data-dexamethasone-pharmacokinetics-in/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-07-24-cohort-population-analysis-of-sparse-data-dexamethasone-pharmacokinetics-in/figures/fig_05.png)