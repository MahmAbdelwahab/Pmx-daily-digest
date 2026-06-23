---
layout: post
title: "Analyzing Pharmacodynamic Count Data That Rapidly Decrease to Zero"
date: 2026-06-23
authors: "Walter M. Yamada et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70140"
paper_type: methodology
tags: [methodology]
excerpt_text: "This paper presents a hybrid Poisson-normal statistical framework for analyzing pharmacodynamic count data (CFU) that rapidly drop to zero. It compares four error models and demonstrates that using a Poisson distribution for low counts and a normal distribution for high counts best predicts infection rebound. Censoring low counts leads to biased models."
pdf_path: "/assets/digests/2026-06-23-analyzing-pharmacodynamic-count-data-that-rapidly-decrease-to-zero/PMx_Analyzing_Pharmacodynamic_Count_Data_Tha_20260623.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a hybrid Poisson-normal statistical framework for analyzing pharmacodynamic count data (CFU) that rapidly drop to zero. It compares four error models and demonstrates that using a Poisson distribution for low counts and a normal distribution for high counts best predicts infection rebound. Censoring low counts leads to biased models.

---

### Executive Summary
The paper addresses the challenge of modeling sparse count data from PK-PD studies where bacterial counts fall to zero quickly. Using a simulated population with known rebound proportion, the authors compare four error models: all Poisson, hybrid Poisson-normal (Plow), all normal, and normal with censoring. The hybrid model (Plow) best estimated rebound in 5/7 experiments and was the only one with all estimates within the 95% CI. Censoring (Nlow) performed worst, never having the best prediction. The study suggests that retaining low counts with a Poisson assumption and using normal approximation for higher counts avoids bias and improves predictive power.

---

### Scientific Context & Motivation
Modeling low CFU counts in PK-PD studies is challenging due to uncertainty and high proportion of zeros. Standard practice is to censor counts below a threshold (e.g., 10 CFU) or use hurdle/zero-inflated models, but these require sufficient data to estimate extra parameters. This paper proposes a method to retain low counts by using a hybrid error model that treats low counts as Poisson and higher counts as normal, avoiding the need for additional parameters.

---

## ⚡ Methodological Snapshot
The paper proposes a hybrid error model for count data (CFU) that uses a Poisson distribution for low counts (<32 CFU), a normal approximation to Poisson for medium counts (32-128), and a normal distribution for high counts (≥128). This avoids censoring low counts and accounts for the changing variance structure. The method is implemented within the Pmetrics package using nonparametric population modeling (NPAG) to estimate random parameter distributions. The simulation study compares four error models: all Poisson, hybrid Poisson-normal, all normal, and normal with censoring. The hybrid model (Plow) best predicts rebound after drug withdrawal.

---

## 📐 Statistical Framework
The method assumes that observed CFU counts follow a Poisson process at low counts, where the variance equals the mean. At higher counts, the variance increases due to dilution and sampling errors, so a normal approximation is used with variance modeled as mean + mean²/k (negative binomial form). The transition thresholds (32 and 128 CFU) are based on empirical observation of variance behavior. The likelihood for each observation is computed based on its count category. Maximum likelihood estimation is used to optimize random parameter densities (growth rate, death rate, EC50, etc.) using the NPAG algorithm, which is nonparametric and does not assume a specific distribution for random effects.

---

### Estimator Behavior
The hybrid model (Plow) shows good performance in estimating rebound proportions, with all estimates within the 95% CI of the true mean in 5/7 experiments. The all-Poisson model (Pall) underestimates rebound in some cases, likely due to misspecification at high counts where variance is larger. The all-normal model (Nall) tends to overestimate rebound. The censoring model (Nlow) has the worst bias, often predicting rebound outside the true CI. The hybrid model appears to balance the bias-variance tradeoff by using appropriate distributions for each count range.

---

### Validation Design
The study uses a simulated true population of 4000 CFU-time profiles with known rebound proportion (33% at 104 h). Seven random subsets of 414 observations are drawn. For each subset, the four error models are fitted to optimize random parameter densities. Then, new populations are simulated from each model and rebound proportion is compared to the true 95% CI. The primary metric is whether the predicted rebound falls within the true CI. The study also checks which model gives the closest estimate to the true mean.

---

### Applicability Boundaries
The method works best when: (1) count data are sparse (e.g., 16 observations per treatment), (2) counts rapidly drop to zero, (3) the underlying PK-PD model has a clear mechanism (Emax inhibition). It may not work if there is significant overdispersion at low counts (e.g., due to clumping) or if the transition thresholds are not appropriate. The method assumes that the variance at low counts is purely Poisson; if there is extra-Poisson variation, a negative binomial might be needed. The simulation is limited to one set of parameters; real-world data may require different thresholds.

---

### Comparison to Alternatives
Compared to standard practice (censoring low counts and using normal assumptions), the hybrid model avoids bias and improves prediction. Compared to zero-inflated or hurdle models, the hybrid model does not require additional parameters for excess zeros, which is advantageous with sparse data. The all-Poisson model is theoretically correct but performs worse due to misspecification at high counts. The all-normal model with censoring is the worst. The hybrid model is a practical compromise that retains the Poisson nature at low counts while using normal approximations where appropriate.

---

### Implementation Guidance
The method is implemented in the Pmetrics package for R, with the NPAG algorithm for nonparametric population modeling. The Poisson likelihood is available on request via GitHub. Users need to specify the transition thresholds (e.g., 32 and 128 CFU) based on their data. The computational cost is moderate, as NPAG is an iterative algorithm. Practical tips: ensure that the PK-PD model includes factors for growth and death rates; use the hybrid model for all count ranges; avoid censoring low counts. The method has been used in real experiments with M. tuberculosis.

---

## 📊 Key Findings
The Plow model (Poisson for CFU < 32, normal for 32-128, normal for ≥128) best predicted rebound in 5/7 experiments and was the only model with all predictions within the 95% CI of the true mean. The Nlow model (normal with censoring for CFU < 10) never had the best prediction and had the highest number of predictions outside the 95% CI. The Pall model (all Poisson) did not perform as well as expected, likely due to misspecification at higher counts.

---

### Strengths & Limitations

#### Strengths
- Novel hybrid error model that retains low count data
- Avoids bias from censoring
- Provides a practical framework for sparse count data
- Uses maximum likelihood estimation with nonparametric population modeling (NPAG)

#### Limitations (Acknowledged by Authors)
- Single simulation set based on specific experimental conditions
- Need for real-world validation

#### Limitations (Expert Review)
- Assumption of Poisson for low counts may not always hold if there is overdispersion
- The transition thresholds (32, 128) are arbitrary and may need tuning
- The method assumes no extra variance at low counts, which may not be true in all cases

#### Generalizability
Moderate; the method is designed for in vitro and animal models with sparse sampling and rapid decline to zero. The authors claim it has been used in real experiments with M. tuberculosis, but further validation is needed.

---

### Key Equations

**Poisson likelihood for low CFU**

{% raw %}
$$
P(obs|exp) = \frac{e^{-\text{exp}} \cdot \text{exp}^{\text{obs}}}{\text{obs}!}
$$
{% endraw %}

Likelihood for observed CFU when assuming a Poisson distribution, used for low counts (CFU < 32).

**Normal approximation for high CFU**

{% raw %}
$$
L(obs|exp) = \frac{1}{\sqrt{2\pi \sigma^2}} \exp\left(-\frac{(\text{obs} - \text{exp})^2}{2\sigma^2}\right)
$$
{% endraw %}

Likelihood for observed CFU when assuming a normal distribution, used for high counts (CFU ≥ 128) with variance σ² = exp + exp²/k.

**Negative binomial variance**

{% raw %}
$$
\sigma^2 = \mu + \frac{\mu^2}{k}
$$
{% endraw %}

Variance of the negative binomial distribution used to model overdispersion at medium counts (32-128 CFU).

---

### Figures & Tables

- **Figure 1**: Overview of the simulation experiment: true population (4000 simulated CFU-time curves) is sampled, and four error models are fitted to optimize parameter densities, then used to predict rebound.
  - *Significance*: Illustrates the workflow for comparing error models and evaluating rebound prediction.
- **Figure 2**: Semi-log plot of simulated expected (gray) and observed CFU (black circles) versus time, with green circles at 104 h indicating rebound assessment.
  - *Significance*: Shows the typical profile of CFU dropping to zero and the timing of rebound evaluation.
- **Table 3**: Rebound proportions for each error model across 7 experiments, with true mean and 95% CI.
  - *Significance*: Main results table showing that Plow best predicts rebound and Nlow performs worst.

---

### Code & Reproducibility Assessment
The Pmetrics package (available on GitHub) was used for simulation and estimation. The Poisson likelihood implementation is available on request.

---

### Future Directions
Test the method with real-world experimental data, especially with different pathogens and drug combinations. Extend to other count data types (e.g., immune response). Investigate the impact of different transition thresholds.

---

### Expert Commentary
This work provides a pragmatic solution to a common problem in PK-PD modeling: how to handle count data that fall to zero. By avoiding censoring and using a hybrid error model, the method retains information and improves predictive accuracy. The simulation study is well-designed, but real-world validation is needed. The approach is particularly useful for factorial studies where many treatment arms are compared.

---

### Bottom Line
For pharmacodynamic count data that rapidly drop to zero, use a hybrid error model: treat low counts (e.g., <32 CFU) as Poisson, medium counts as normal approximation to Poisson, and high counts as normal. Avoid censoring low counts, as it leads to biased models.

---

---

## 📊 Figures

![Overview of the simulation experiment. The true population (top left pane) are 4000 simulated time-kill curves as measured by CFU of bacteria exposed to drug whi]({{ site.baseurl }}/assets/digests/2026-06-23-analyzing-pharmacodynamic-count-data-that-rapidly-decrease-to-zero/figures/fig_01.jpg)

![Semi-log plot of simulated expected (gray profiles) and observed CFU (black circles) versus time. The green circles at 104 h indicate when rebound or efficacy wa]({{ site.baseurl }}/assets/digests/2026-06-23-analyzing-pharmacodynamic-count-data-that-rapidly-decrease-to-zero/figures/fig_02.jpg)