---
layout: post
title: "A Perspective on the Use of Poisson Versus Logistic Regression in Exposure-Response Analysis: Insights and Considerations."
date: 2026-10-30
authors: "Yiming Cheng, Ping Chen, Yan Li"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70100"
paper_type: methodology
tags: [methodology, dose-response]
excerpt_text: "This perspective compares Poisson and logistic regression for binary exposure-response (ER) data via simulations across sample sizes, event rates, and ER slopes. Poisson regression performs well only under low event rates and small slopes, while logistic regression is consistently robust, guiding model selection in drug development."
pdf_path: "/assets/digests/2026-10-30-a-perspective-on-the-use-of-poisson-versus-logistic-regression-in-exposure/PMx_A_Perspective_on_the_Use_of_Poisson_Vers_20261030.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This perspective compares Poisson and logistic regression for binary exposure-response (ER) data via simulations across sample sizes, event rates, and ER slopes. Poisson regression performs well only under low event rates and small slopes, while logistic regression is consistently robust, guiding model selection in drug development.

---

### Executive Summary
The authors systematically evaluate Poisson versus logistic regression for modeling binary ER data, motivated by the recent PoissonERM framework. Through simulation studies varying sample size, event rate, and true ER slope, they demonstrate that Poisson regression yields biased slope estimates and higher relative standard errors at high event rates and steep slopes, whereas logistic regression maintains consistent performance across all scenarios. The paper concludes that Poisson regression is suitable for rare events and small drug effects, while logistic regression is the more reliable default for binary outcomes, with dispersion checks recommended when using Poisson.

---

### Scientific Context & Motivation
Exposure-response (ER) analysis is central to dose selection and benefit-risk assessment in drug development. Logistic regression is the standard for binary outcomes, but a recent publication (Wang et al.) proposed Poisson regression as an automated alternative (PoissonERM). The theoretical equivalence of binomial and Poisson distributions under rare events motivates a direct comparison to define when Poisson regression is appropriate, addressing a gap in guidance for model selection.

---

## ⚡ Methodological Snapshot
The authors conducted simulation studies to compare Poisson and logistic regression for binary ER data. They varied sample size (via resampling from a real dataset), event rate (4.9%-95.5%), and true ER slope (0.000195-0.039). For each scenario, they fitted both models and compared estimated slopes, p-values, and relative standard errors. Dispersion statistics were computed for Poisson models to assess model adequacy.

---

## 📐 Statistical Framework
The theoretical basis is that the binomial distribution approximates a Poisson distribution when event rates are low and sample sizes are large ($\lambda = np$). Logistic regression models the probability directly via the logit link, while Poisson regression models the mean count with a log link and time offset. The authors assume a linear ER relationship on the respective link scale, with average concentration as the exposure metric.

---

### Estimator Behavior
Poisson regression shows increasing bias in slope estimates and higher RSE as event rates increase beyond ~50% and as ER slopes steepen. Logistic regression exhibits minimal bias and stable RSE across all scenarios. Both models show similar sensitivity to sample size. Dispersion statistics for Poisson indicate underdispersion at high event rates/slopes and overdispersion at small sample sizes, signaling misspecification.

---

### Validation Design
Simulation studies were designed to isolate the effects of sample size, event rate, and ER slope. Sample size was varied by resampling from a real dataset (obsdata). Event rate was varied by sampling to achieve rates from 4.9% to 95.5% with fixed true slope. ER slope was varied by simulating datasets from a Poisson model with fixed intercept and varying slopes. Model performance was assessed via slope estimates, p-values, RSE, and dispersion.

---

### Applicability Boundaries
Poisson regression is appropriate for binary ER data when event rates are low (<50%) and ER slopes are small (small drug effects). It is not suitable for high event rates or steep slopes, where it produces biased estimates. Logistic regression is robust across all simulated scenarios and is the preferred default. Poisson regression may be advantageous when modeling time-varying exposure or comparing studies with different durations, but this was not tested here.

---

### Comparison to Alternatives
Compared to logistic regression, Poisson regression offers automation (PoissonERM) and can handle time offsets, but it is less robust for common event rates. Logistic regression provides direct probability modeling and consistent performance. The authors note that Ijomah et al. found lower AIC/BIC for logistic regression on binary data, supporting its superiority in model fit.

---

### Implementation Guidance
When using Poisson regression for binary ER data, practitioners should routinely check dispersion statistics; values far from 1 indicate misspecification. For high event rates or steep slopes, logistic regression is recommended. Software implementation is standard (e.g., glm in R), but the PoissonERM framework offers automation. Computational cost is low for both methods.

---

## 📊 Key Findings
Both models show similar sensitivity to sample size. At low-to-modest event rates (<50%), both perform well, but Poisson regression degrades at higher event rates, showing increased slope deviation and RSE. Performance worsens with increasing ER slope (which raises event rates), while logistic regression remains agnostic. Dispersion statistics for Poisson show underdispersion (~0.8) generally, more pronounced at high event rates/slopes (~0.5), and overdispersion with small samples, indicating model misspecification.

---

### Strengths & Limitations

#### Strengths
- Systematic simulation study covering a wide range of sample sizes, event rates, and ER slopes.
- Direct comparison of two modeling approaches with clear practical guidance.
- Includes dispersion diagnostics to assess Poisson model adequacy.
- Addresses a timely methodological question raised by recent literature.

#### Limitations (Acknowledged by Authors)
- Assumes time-independent PK and average concentration as exposure metric.
- Does not explore variability in follow-up time or time-dependent exposure.
- Simulation scenarios may not capture all real-world complexities.

#### Limitations (Expert Review)
- Limited detail on simulation design and data generation (referred to Supporting Information).
- No formal statistical criteria (e.g., AIC/BIC) for model comparison beyond slope estimates.
- The perspective format may not provide exhaustive validation across all possible ER shapes.
- Potential confounding between slope and event rate in simulation design.

#### Generalizability
Findings are generalizable to binary ER analyses in drug development, but may not extend to count outcomes or time-to-event data. The conclusions are robust across the simulated scenarios, though real-world data with complex covariates or time-varying exposures may require additional considerations.

---

### Key Equations

**Logistic Regression Model**

{% raw %}
$$
\text{logit}(p) = \log\left(\frac{p}{1-p}\right) = \beta_0 + \beta_1 f(C)
$$
{% endraw %}

Models the log-odds of an event as a linear function of exposure, where p is the event probability and f(C) is the exposure metric.

**Poisson Regression Model**

{% raw %}
$$
\log(\lambda) = \beta_0 + \beta_1 f(C) + \log(t)
$$
{% endraw %}

Models the log of the mean event count as a linear function of exposure with an offset for time, where $\lambda$ is the mean count and t is the time interval.

---

### Figures & Tables

- **Figure 1**: Comparison of logistic and Poisson regression: (A) p-values vs sample size, (B) p-values and RSE vs event rate, (C) fitted vs true slopes across varying slopes and event rates.
  - *Significance*: Central figure demonstrating the performance differences, showing Poisson's degradation at high event rates and slopes while logistic remains stable.

---

### Code & Reproducibility Assessment
No code or data availability statement is provided; simulation details are in Supporting Information, but reproducibility is limited without access to the code.

---

### Supplementary Materials
Supporting Information includes simulation details, additional figures (S1-S5) on RSE, slope comparisons, model fits, and dispersion statistics.

---

### Future Directions
Future work should explore the impact of variable follow-up times and time-dependent exposure on Poisson versus logistic regression performance, as well as more complex ER shapes and covariate interactions.

---

### Expert Commentary
This perspective provides a valuable cautionary note on the use of Poisson regression for binary ER data. The simulation results align with statistical theory, reinforcing that logistic regression is the standard for binary outcomes. The recommendation to check dispersion is critical, as Poisson models are often misapplied. The paper would benefit from more detailed simulation specifications and formal model comparison metrics, but the practical guidance is sound.

---

### Bottom Line
For binary exposure-response data, logistic regression is the safer default due to its consistent performance across event rates and slopes. Poisson regression should be reserved for low event rates and small drug effects, with routine dispersion checks to detect misspecification.

---

---

## 📊 Figures

![Comparison of Logistic Regression and Poisson Regression. Logistic regression: Logit (p) = log (p/(1−p)) =β0+β1×f(C); Poisson regression: Log (λ) =β0+β1×f(C) + log (t), w]({{ site.baseurl }}/assets/digests/2026-10-30-a-perspective-on-the-use-of-poisson-versus-logistic-regression-in-exposure/figures/fig_01.jpg)