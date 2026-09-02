---
layout: post
title: "The 95% CDIRAs, a Credible Interval Based Method to Capture Uncertainty in Population Modeling: Pharmacokinetics Versus Sum of Exponentials Case Study"
date: 2026-09-02
authors: "Wanika L, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70326"
paper_type: methodology
tags: [methodology]
excerpt_text: "This paper proposes the 95% CDIRA, a new uncertainty metric for population PK/PD models that captures distribution shape and quantiles, unlike variance-based RSE. Using a PK vs. SOE model case study in Stan, the authors show CDIRAs provide more reliable precision classifications, particularly for asymmetric distributions and parameters with convergence issues, and identify the PK model as more credible."
pdf_path: "/assets/digests/2026-09-02-the-95-cdiras-a-credible-interval-based-method-to-capture-uncertainty-in/PMx_The_95_CDIRAs_a_Credible_Interval_Based__20260902.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper proposes the 95% CDIRA, a new uncertainty metric for population PK/PD models that captures distribution shape and quantiles, unlike variance-based RSE. Using a PK vs. SOE model case study in Stan, the authors show CDIRAs provide more reliable precision classifications, particularly for asymmetric distributions and parameters with convergence issues, and identify the PK model as more credible.

---

### Executive Summary
This methodology paper introduces the 95% credible interval ratios (95% CDIRAs), a novel uncertainty quantification metric for population PK/PD models that captures the full shape and quantiles of a parameter's posterior distribution, unlike variance-based RSE. Using a case study comparing a one-compartment PK model to a reparameterized sum of exponentials (SOE) model fit to simulated plasma concentration data in Stan, the authors demonstrate that CDIRAs provide more nuanced and reliable precision classifications, particularly for asymmetric distributions and parameters with convergence issues. The PK model was identified as more credible by both metrics, but CDIRAs highlighted over-precision in RSE classifications for several parameters. The metric is simple to compute, bounded for positive parameters, and offers a practical complement to RSE for model comparison and uncertainty communication.

---

### Scientific Context & Motivation
Uncertainty quantification (UQ) in population PK/PD modeling is critical for model credibility, yet current metrics like RSE rely on variance and second-derivative approximations, which can be unreliable for non-normal or asymmetric distributions. This paper addresses the gap by introducing the 95% CDIRA, a Bayesian metric that leverages the full posterior distribution. The work is motivated by the need for more robust UQ in model-informed drug development, where parameter uncertainty directly impacts decision-making. The case study comparing PK and SOE models highlights how different parameterizations of the same structural model can yield different uncertainty profiles, emphasizing the importance of metric choice.

---

## ⚡ Methodological Snapshot
The paper introduces the 95% credible interval ratios (95% CDIRAs), a Bayesian UQ metric derived from the posterior distribution's 95% highest density interval (HDI) and median. For each parameter, the lower and upper CDIRA bounds are computed as the ratios of the HDI bounds to the median. These ratios provide a scale-free measure of precision that reflects the distribution's shape and asymmetry. The metric is demonstrated on a case study comparing a one-compartment PK model with first-order absorption to a reparameterized sum of exponentials (SOE) model, both fit to simulated plasma concentration data from 50 subjects using Stan with HMC sampling. The authors compare the CDIRAs to RSE in terms of precision classification and agreement with HMC diagnostics.

---

## 📐 Statistical Framework
The framework is Bayesian, using Stan's HMC (Hamiltonian Monte Carlo) for posterior sampling. The PK model is a one-compartment model with first-order absorption, parameterized by KA, CL, and VD. The SOE model is an algebraically equivalent reparameterization using α, β1, and β2. Both models assume a normal likelihood with a combined error model (additive + proportional). Priors are weakly informative: lognormal for population parameters and normal for random effects and error terms. The 95% CDIRA is defined as the ratio of the 95% HDI bounds to the median, providing a scale-free measure of precision. The metric's properties are derived from the posterior distribution, making it robust to non-normality. The paper also uses Sobol indices for global sensitivity analysis and Taylor series for structural identifiability, ensuring the models are identifiable before UQ.

---

### Estimator Behavior
The 95% CDIRA is a posterior-derived ratio (95% CDI bound / median) bounded between 0 and 1 for positively constrained parameters. It is more sensitive to distribution shape and asymmetry than RSE. In the case study, CDIRAs revealed that parameters like KA_OMEGA and β2_OMEGA had very low precision (lower bound near 0), indicating near-zero BSV estimates with high uncertainty. The metric's behavior depends on the quality of the posterior sample; poor HMC convergence (R-hat > 1.01, low ESS) can distort the CDI and thus the CDIRAs.

---

### Validation Design
The 95% CDIRA was validated using a simulated dataset (Monolix Oral1 demo) with 50 subjects and 11 time points. Two models (PK and SOE) were fit in Stan, and their posterior distributions were compared using RSE and CDIRAs. The authors also performed global sensitivity analysis (Sobol indices) and structural identifiability analysis (Taylor series) to ensure model identifiability. HMC diagnostics (R-hat, ESS_Bulk, ESS_Tail) were used to assess convergence. The impact of prior choice on convergence was explored by comparing different standard deviations for population parameter priors.

---

### Comparison to Alternatives
RSE (variance-based) can overstate precision for asymmetric or heavy-tailed posterior distributions. The 95% CDIRAs, derived from the 95% HDI, capture distribution shape and quantiles. While RSE and CDIRAs agreed on high-precision parameters (e.g., CL_POP), they diverged for less identifiable parameters (e.g., KA_OMEGA, β2_OMEGA), where RSE suggested moderate precision but CDIRAs revealed very low precision. The CDIRAs also better reflected HMC convergence issues (R-hat, ESS) than RSE.

---

### Implementation Guidance
The 95% CDIRA is computed from posterior samples: for each parameter, calculate the 95% HDI and median, then compute the ratios (lower bound/median) and (median/upper bound). It is implemented in Stan (code provided). Practitioners should ensure adequate HMC convergence (R-hat < 1.01, ESS > 400) before relying on CDIRAs. The metric is most informative when combined with RSE and diagnostic checks. Computation is fast (<10 min for the case study), but may increase for complex models.

---

## 📊 Key Findings
1) The 95% CDIRA is a novel UQ metric that captures distribution shape and quantiles, unlike variance-based RSE. 2) In the case study, both metrics identified the PK model as more credible than the SOE model, but CDIRAs revealed over-precision in RSE classifications for several parameters. 3) Parameters like KA_OMEGA and β2_OMEGA had very low precision (CDIRA lower bound near 0), indicating near-zero BSV with high uncertainty. 4) RSE underestimated the impact of HMC convergence issues, while CDIRAs better reflected poor R-hat and ESS values. 5) The metric is simple to compute and interpret, with values bounded between 0 and 1 for positive parameters.

---

### Strengths & Limitations

#### Strengths
- Introduces a novel, simple, and interpretable UQ metric that captures distribution shape and quantiles.
- Demonstrates the metric's utility in a realistic case study, highlighting its advantages over RSE.
- Provides practical guidance on implementation, including Stan code and diagnostic checks.
- Addresses a critical gap in UQ for population modeling, with potential to improve model credibility in drug development.

#### Limitations (Acknowledged by Authors)
- The 95% CDIRA is dependent on a posterior distribution, which many PKPD modeling software do not primarily use for parameter estimation.
- The metric's range of 0-1 does not hold for negative parameter estimates, though equations can be updated with absolute values.
- Computation time in Stan may increase significantly for more complex models and sparse datasets.
- The approach requires more hands-on tuning of HMC algorithms and prior distributions compared to standard PKPD software.

#### Limitations (Expert Review)
- The case study uses a single simulated dataset, limiting the generalizability of the specific numerical findings.
- The metric's frequentist properties (e.g., coverage, bias) are not explored, which may be of interest to practitioners.
- The paper does not compare the 95% CDIRA to other Bayesian UQ metrics like the posterior coefficient of variation or the width of the HDI normalized by the mean.
- The sensitivity of the CDIRA to the choice of HDI vs. equal-tailed intervals is not discussed in detail.

#### Generalizability
The 95% CDIRA is generalizable to any Bayesian population model with a well-behaved posterior. However, its performance depends on the quality of the posterior sample; poor HMC convergence can distort the CDI and thus the CDIRAs. The metric is bounded for positive parameters but requires adjustment for negative estimates. Its utility in frequentist frameworks is limited, as it requires a posterior distribution.

---

### Key Equations

**95% CDIRA Lower Bound**

{% raw %}
$$
95\%\text{CDIRA}_{\text{LB}} = \frac{95\%\text{CDI}_{\text{LB}}}{\text{median parameter estimate}}
$$
{% endraw %}

The 95% CDIRA lower bound, defined as the ratio of the lower bound of the 95% credible interval to the median parameter estimate.

**95% CDIRA Upper Bound**

{% raw %}
$$
95\%\text{CDIRA}_{\text{UB}} = \frac{\text{median parameter estimate}}{95\%\text{CDI}_{\text{UB}}}
$$
{% endraw %}

The 95% CDIRA upper bound, defined as the ratio of the median parameter estimate to the upper bound of the 95% credible interval.

**Relative Standard Error**

{% raw %}
$$
\text{RSE} = \frac{\text{SE}}{\text{Median parameter estimate}} \times 100
$$
{% endraw %}

The relative standard error (RSE) as a percentage, used as a comparator uncertainty metric.

---

### Figures & Tables

- **Figure 1**: Schematic of a typical posterior distribution showing the 95% HDI and the derivation of the 95% CDIRA bounds.
  - *Significance*: Illustrates the conceptual basis of the 95% CDIRA metric, showing how it captures distribution shape and quantiles.
- **Figure 2**: Sobol indices for PK (A) and SOE (B) models, and model predictions vs observed data (C, D).
  - *Significance*: Shows that while both models fit the data similarly, sensitivity patterns differ, highlighting the impact of parameterization on uncertainty.
- **Figure 3**: Posterior density histograms for PK model population parameters.
  - *Significance*: Visualizes the uncertainty in each parameter estimate, with KA_OMEGA showing the widest distribution.
- **Figure 4**: Posterior density histograms for SOE model population parameters.
  - *Significance*: Shows the SOE model's parameter uncertainties, with β2_OMEGA being the least precise.

---

### Code & Reproducibility Assessment
Stan code for both population models and the 95% CDIRA implementation are provided in the Supporting Information. The Monolix demo dataset (Oral1_project) is publicly available. Computation times were ~10 min (PK) and <3 min (SOE) in Stan vs <1 min in Monolix.

---

### Supplementary Materials
Supporting Information includes Stan code for both population models, the 95% CDIRA implementation, and additional results such as profile likelihood analysis and individual parameter estimates.

---

### Future Directions
The authors plan to extend UQ implementation to data-driven approaches and apply question-centric methods across model development stages. Future work could explore the 95% CDIRA's performance under model misspecification, its frequentist properties, and its utility in model selection and covariate analysis. The metric's extension to handle negative parameter estimates (via absolute values) is also noted.

---

### Expert Commentary
The 95% CDIRA is a welcome addition to the UQ toolbox, addressing a real gap in how we communicate parameter uncertainty in population modeling. Its strength lies in its simplicity and interpretability, making it accessible to practitioners. However, its reliance on posterior samples means it inherits the computational burden of Bayesian methods, which may be prohibitive for large, complex models. The metric's behavior under model misspecification and its frequentist properties warrant further investigation. The authors' demonstration that RSE can mask convergence issues is a valuable cautionary tale for the field.

---

### Bottom Line
The 95% CDIRA is a simple, distribution-aware complement to RSE for quantifying parameter uncertainty in Bayesian population PK/PD models. It captures asymmetry and tail behavior that variance-based metrics miss, making it particularly valuable for model comparison and for flagging parameters with poor identifiability or convergence issues.

---

---

## 📊 Figures

![Typical parameter distribution. A typical histogram of the posterior distribution for a parameter. Most of the draws for this example parameter estimate fall bet]({{ site.baseurl }}/assets/digests/2026-09-02-the-95-cdiras-a-credible-interval-based-method-to-capture-uncertainty-in/figures/fig_01.jpg)

![Sensitivity analyses and model predictions for PK and SOE models. Sobol indices for both the PK (A) and SOE (B) models for the simulated plasma concentration. Th]({{ site.baseurl }}/assets/digests/2026-09-02-the-95-cdiras-a-credible-interval-based-method-to-capture-uncertainty-in/figures/fig_02.jpg)

![Population parameter distributions for the PK model. Density histograms for the population posterior parameter estimates for the PK model. Each histogram showcas]({{ site.baseurl }}/assets/digests/2026-09-02-the-95-cdiras-a-credible-interval-based-method-to-capture-uncertainty-in/figures/fig_03.jpg)

![Population parameter distributions for the SOE model. Density histograms for the population posterior parameter estimates for the SOE model. Each histogram showc]({{ site.baseurl }}/assets/digests/2026-09-02-the-95-cdiras-a-credible-interval-based-method-to-capture-uncertainty-in/figures/fig_04.jpg)