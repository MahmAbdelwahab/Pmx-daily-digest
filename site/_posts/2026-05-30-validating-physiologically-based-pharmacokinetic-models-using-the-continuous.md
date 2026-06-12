---
layout: post
title: "Validating Physiologically-Based Pharmacokinetic Models Using the Continuous Ranked Probability Score: Beyond Being Correct on Average"
date: 2026-05-30
authors: "Sluijterman L, van Borselen M, et al."
journal: "CPT Pharmacometrics Syst Pharmacol, 2026"
doi: "10.1002/psp4.70175"
paper_type: methodology
tags: [methodology, pbpk]
excerpt_text: "This paper proposes using the Continuous Ranked Probability Score (CRPS) to validate PBPK models by assessing how well the predicted distribution matches observed data, moving beyond simple geometric mean ratios. The CRPS is applied to compare two amoxicillin PBPK models and is accompanied by an online tool for easy implementation."
pdf_path: "/assets/digests/2026-05-30-validating-physiologically-based-pharmacokinetic-models-using-the-continuous/PMx_Validating_PhysiologicallyBased_Pharmaco_20260530.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper proposes using the Continuous Ranked Probability Score (CRPS) to validate PBPK models by assessing how well the predicted distribution matches observed data, moving beyond simple geometric mean ratios. The CRPS is applied to compare two amoxicillin PBPK models and is accompanied by an online tool for easy implementation.

---

### Executive Summary
The authors argue that current PBPK model validation, which relies primarily on predicted-to-observed geometric mean ratios (GMR), is insufficient for applications requiring accurate distributional predictions (e.g., extremes, trial design). They introduce the CRPS, a strictly proper scoring rule that quantifies the integrated squared difference between predicted and empirical cumulative distribution functions. The CRPS can compare two models via a ratio (RCRPS) and validate a single model using a skill score relative to a naive median predictor. Applied to two amoxicillin PBPK models on two small datasets, the CRPS revealed that a more detailed model significantly outperformed a simplified version for Cmax and half-life, while AUC differences were not significant. The paper provides a web-based tool to compute these metrics and emphasizes the need for reliable comparator datasets and prespecified simulation procedures.

---

### Scientific Context & Motivation
Current PBPK model evaluation frameworks (e.g., ICH MIDD guidelines) specify validation steps but lack quantitative guidance on how to compare predicted and observed distributions. The standard metric, the predicted-to-observed geometric mean ratio (GMR), only assesses average performance, which is inadequate for applications where the entire distribution matters (e.g., estimating toxicity probabilities, clinical trial sizing). There is a need for a well-founded metric that captures distributional fit, works with small datasets, and can be used for both single-model validation and model comparison.

---

## ⚡ Methodological Snapshot
The Continuous Ranked Probability Score (CRPS) is a strictly proper scoring rule that quantifies the integrated squared difference between the predicted cumulative distribution function (CDF) and the empirical CDF of the observations. For PBPK model validation, a large virtual population is simulated to obtain a smooth predicted CDF. The CRPS is then averaged over all observed data points. For comparing two models, the ratio of their average CRPS (RCRPS) with bootstrap confidence intervals indicates relative performance. For validating a single model, a skill score compares the model's CRPS to that of a naive model that always predicts the sample median. The method is accompanied by visualizations (PDF and CDF plots) and an online web tool for easy computation.

---

## 📐 Statistical Framework
The CRPS is defined as $CRPS(F, y) = \int_{-\infty}^{\infty} (F(x) - I(y \leq x))^2 dx$, where $F$ is the predicted CDF and $I$ is the indicator function. It is a strictly proper scoring rule, meaning it is uniquely minimized when F equals the true distribution of y. This property ensures that the metric rewards both calibration and sharpness. The paper assumes that observations are independent and identically distributed from the true distribution. For PBPK models, the predicted CDF is obtained from a large sample (e.g., 1000 virtual subjects) using the empirical CDF. The skill score uses the sample median as a reference, which is a nonparametric model that predicts the median for all observations. Confidence intervals are obtained via nonparametric bootstrap (10,000 resamples) of both observations and predictions.

---

### Estimator Behavior
The CRPS is unbiased for the true distribution when the model is correctly specified. It is sensitive to both bias and variance: a model with correct mean but wrong variance will have a higher CRPS than a model with correct distribution. The bootstrap confidence intervals provide coverage for the true CRPS under repeated sampling. The skill score can be negative, indicating that the model performs worse than the naive median predictor, which may occur if the model is poorly calibrated. In the example, both models had negative skill scores, suggesting systematic misspecification. The RCRPS ratio is a relative measure; its confidence interval indicates whether the difference is statistically significant.

---

### Validation Design
The method is validated through a hypothetical example with two models: one with correct variance but biased mean, and one with correct mean but underestimated variance. The CRPS correctly identifies the model with better distributional fit, while GMR fails to distinguish them. Then, the method is applied to two real amoxicillin PBPK models (basic vs. full Abduljalil model) using two small clinical datasets (Lode $n=13$, Philipson $n=12$). For each dataset, 1000 virtual subjects are simulated matching the demographics and dosing. The CRPS, skill score, and RCRPS are computed for AUC, Cmax, and half-life, each with 90% bootstrap confidence intervals. The results show that the full model performs significantly better for Cmax and half-life, while AUC differences are not significant.

---

### Applicability Boundaries
The CRPS method is appropriate when the goal is to validate a model's ability to reproduce the population distribution of a pharmacokinetic parameter (e.g., AUC, Cmax). It requires a comparator dataset that is reliable, relevant, and ideally not used in model development. The method works best with datasets of at least 10-20 observations; for smaller datasets, the empirical CDF is more reliable than kernel density estimates. It is not suitable for individual-level predictions unless the model provides individual CDFs. The method assumes that the virtual population can be simulated to produce a large sample (e.g., 1000) to approximate the predicted CDF. The skill score is sensitive to the choice of naive model; the median is a simple but reasonable reference.

---

### Comparison to Alternatives
Compared to the standard GMR, which only checks the mean, the CRPS captures both bias and variance. Compared to checking predicted variance alone, the CRPS accounts for the entire distribution shape. The log-likelihood is sensitive to outliers and can be dominated by a few bad predictions. The Kolmogorov-Smirnov test cannot distinguish between two models that both deviate from the true distribution. Reliability diagrams and normalized prediction distribution errors (NPDE) require larger datasets. The CRPS is a proper scoring rule that provides a single interpretable score with confidence intervals, making it suitable for small datasets common in PBPK validation.

---

### Implementation Guidance
The authors provide a web app (https://github.com/LaurensSluyterman/Model_validation_tool) that computes all metrics and generates plots without coding. For custom implementation, the CRPS can be computed efficiently using the formula in Equation (2) of the paper. Bootstrap confidence intervals (10,000 resamples) are computationally feasible (~10 seconds on a modern laptop). Users should generate a large virtual population (e.g., 1000 subjects) to obtain a smooth predicted CDF. It is critical to prespecify the simulation procedure (e.g., matching demographics, dosing, sampling times) to avoid post-hoc adjustments. The method is implemented in R (code provided in Data S2).

---

## 📊 Key Findings
The CRPS is a strictly proper scoring rule that measures the integrated squared difference between the predicted CDF and the empirical CDF of observations. For model comparison, the ratio of CRPS (RCRPS) with bootstrap confidence intervals provides a quantitative comparison. For single-model validation, a skill score comparing CRPS to a naive median predictor indicates improvement. Applied to two amoxicillin PBPK models (basic vs. full Abduljalil model) on two small datasets ($(n=13, 12)$), the CRPS showed that the full model performed significantly better for Cmax and half-life, while AUC differences were not statistically significant. Both models had negative skill scores, indicating poor overall performance relative to a simple median predictor.

---

### Strengths & Limitations

#### Strengths
- Introduces a rigorous, well-founded metric (CRPS) that captures distributional fit, not just mean.
- Provides confidence intervals via bootstrap, accounting for small sample uncertainty.
- Offers both model comparison (RCRPS) and single-model validation (skill score).
- Includes visual diagnostics (PDF and CDF plots) for intuitive understanding.
- Provides a freely accessible web tool for easy implementation without coding.
- Demonstrates the method on real PBPK models and datasets.

#### Limitations (Acknowledged by Authors)
- Requires a reliable and relevant comparator dataset not used in model development.
- The simulation procedure for the virtual population must be prespecified to avoid overfitting.
- Not suitable for individual-level predictions unless individual CDFs are provided.
- Small datasets may limit the precision of estimates, but CDFs are more robust than PDFs.

#### Limitations (Expert Review)
- The skill scores for both models were negative, indicating they performed worse than a naive median predictor, which raises questions about the adequacy of the models themselves.
- The validation datasets are very small (n=13, 12), making confidence intervals wide and conclusions tentative.
- Potential overfitting if the datasets were used in model development (acknowledged but not fully addressed).
- The paper does not compare CRPS to other proper scoring rules (e.g., logarithmic score) in detail.

#### Generalizability
The CRPS approach is generalizable to any model that generates a virtual population (e.g., systems pharmacology, toxicology). It is not limited to PBPK models. However, the specific implementation (e.g., using kernel density estimates for PDFs) may need adjustment for very small datasets or different types of predictions.

---

### Key Equations

**Continuous Ranked Probability Score (CRPS)**

{% raw %}
$$
CRPS(F, y) = \int_{-\infty}^{\infty} (F(x) - \mathbb{I}(y \leq x))^2 dx
$$
{% endraw %}

Measures the integrated squared difference between the predicted cumulative distribution function F and the indicator function for the observed value y. Lower values indicate better fit.

**Skill Score**

{% raw %}
$$
SS = 1 - \frac{CRPS_{\text{model}}}{CRPS_{\text{naive}}}
$$
{% endraw %}

Compares the CRPS of the model to that of a naive model predicting the sample median. A skill score of 1 indicates perfect prediction; values above 0 indicate improvement over the naive model.

**Ratio of CRPS (RCRPS)**

{% raw %}
$$
R = \frac{CRPS_1}{CRPS_2}
$$
{% endraw %}

Quantifies the relative performance of two models. R < 1 favors Model 1, R > 1 favors Model 2. Confidence intervals are obtained via bootstrap.

---

### Figures & Tables

- **Figure 2**: Hypothetical example showing PDF and CDF comparisons for two models with different distributional properties.
  - *Significance*: Illustrates how visual inspection complements the CRPS metric and reveals differences not captured by GMR.
- **Figure 5**: Visual comparison of basic and full amoxicillin PBPK models on two real datasets (Lode and Philipson) for AUC, Cmax, and half-life.
  - *Significance*: Demonstrates the practical application of the proposed method and shows that the full model better matches the observed distributions for Cmax and half-life.
- **Table 1**: Quantitative results: GMR, CRPS, skill score, and RCRPS with 90% confidence intervals for both models on both datasets.
  - *Significance*: Provides the numerical evidence for model comparison and highlights the uncertainty due to small sample sizes.

---

### Code & Reproducibility Assessment
Source code and a web app are available at https://github.com/LaurensSluyterman/Model_validation_tool. The code is provided in Data S2. The web app allows computation without installing software.

---

### Supplementary Materials
Data S1 contains appendices with additional details on the PBPK models and datasets, as well as a comparison of CRPS to alternative metrics (variance, log-likelihood, Kolmogorov-Smirnov). Data S2 contains the source code for the web app.

---

### Future Directions
Future work could extend the CRPS to individual-level predictions by requiring individual CDFs from the model. Larger and more diverse validation datasets would strengthen the evidence. Comparisons with other proper scoring rules (e.g., logarithmic score) in the context of PBPK models would be valuable.

---

### Expert Commentary
The CRPS is a well-established metric in probabilistic forecasting (e.g., weather, economics) and its application to PBPK modeling is a logical step forward. The emphasis on confidence intervals and skill scores addresses practical concerns about small datasets. However, the negative skill scores in the example highlight that even the better model may be inadequate, underscoring the need for iterative model improvement rather than just validation.

---

### Bottom Line
For PBPK model validation, supplement the traditional GMR with the CRPS to assess distributional fit, especially when extremes or variability matter. Use the provided web tool to compute CRPS, RCRPS, and skill scores with confidence intervals. Ensure the comparator dataset is reliable and the simulation procedure is prespecified.

---

---

## 📊 Figures

![Visualization of PDF and CDF. In (a), the PDF is given with a normalized histogram of 100 random samples from the PDF. The area below the PDF within a certain ra]({{ site.baseurl }}/assets/digests/2026-05-30-validating-physiologically-based-pharmacokinetic-models-using-the-continuous/figures/fig_01.jpg)

![Illustration of proposed approach. Both a normalized histogram and estimated PDF of the observations are plotted along with estimated PDFs of both models. This g]({{ site.baseurl }}/assets/digests/2026-05-30-validating-physiologically-based-pharmacokinetic-models-using-the-continuous/figures/fig_02.jpg)

![An illustration of the CRPS. In (a), we see the predicted CDF in black and the indicator function that is 0 below the observed value of 110 and 1 above. The CRPS]({{ site.baseurl }}/assets/digests/2026-05-30-validating-physiologically-based-pharmacokinetic-models-using-the-continuous/figures/fig_03.jpg)

![Illustration of evaluation of a single model. The model is compared to a hypothetical comparator model that always exactly predicts the median of the observation]({{ site.baseurl }}/assets/digests/2026-05-30-validating-physiologically-based-pharmacokinetic-models-using-the-continuous/figures/fig_04.jpg)

![Visual comparison of the Basic (Model 1) and Abduljalil Model (Model 2). For both Lode and Philipson datasets, the top row of figures provides the normalized his]({{ site.baseurl }}/assets/digests/2026-05-30-validating-physiologically-based-pharmacokinetic-models-using-the-continuous/figures/fig_05.jpg)