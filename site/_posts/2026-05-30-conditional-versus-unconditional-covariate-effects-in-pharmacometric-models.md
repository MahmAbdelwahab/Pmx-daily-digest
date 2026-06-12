---
layout: post
title: "Conditional Versus Unconditional Covariate Effects in Pharmacometric Models: Implications for Interpretation, Communication, and Reporting"
date: 2026-05-30
authors: "Nyberg J, Jonsson S"
journal: "CPT Pharmacometrics Syst Pharmacol"
doi: "https://pubmed.ncbi.nlm.nih.gov/41603487/"
paper_type: methodology
tags: [methodology, covariate-analysis]
excerpt_text: "This paper demonstrates that conditional covariate effect estimates are highly sensitive to correlations among covariates, while unconditional estimates remain stable. The authors show that misinterpretation of conditional effects as standalone impacts can lead to biased dose recommendations and recommend using unconditional effects for communication and dosing, reserving the full conditional model for simulations."
pdf_path: "/assets/digests/2026-05-30-conditional-versus-unconditional-covariate-effects-in-pharmacometric-models/PMx_Conditional_Versus_Unconditional_Covaria_20260530.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper demonstrates that conditional covariate effect estimates are highly sensitive to correlations among covariates, while unconditional estimates remain stable. The authors show that misinterpretation of conditional effects as standalone impacts can lead to biased dose recommendations and recommend using unconditional effects for communication and dosing, reserving the full conditional model for simulations.

---

### Executive Summary
The paper provides a theoretical and simulation-based analysis of how covariate correlations distort conditional covariate coefficient estimates in pharmacometric models. It shows that unconditional coefficients, derived from univariable models, are robust to correlation and more interpretable for dosing and labeling. The authors illustrate the practical consequences using NHANES data and recommend a dual approach: use the full conditional model for simulations and unconditional effects for communication.

---

### Scientific Context & Motivation
Pharmacometric models often include multiple correlated covariates, leading to multicollinearity that inflates standard errors and biases conditional coefficient estimates. While multicollinearity is recognized, its impact on the interpretation and communication of covariate effects has been underexplored. This paper addresses the gap by quantifying the difference between conditional and unconditional effects and their implications for dose individualization.

---

## ⚡ Methodological Snapshot
The paper develops a theoretical framework linking conditional and unconditional covariate coefficients in the presence of correlation. It derives an expression for the conditional coefficient as a function of the unconditional coefficient, correlation, and effect size ratio. The framework is verified via simulation-estimation studies using NONMEM, and practical implications are illustrated with NHANES data for dose selection and individualization.

---

## 📐 Statistical Framework
The theoretical framework assumes a linear or log-linear relationship between covariates and parameters (exponential model). The key relationship (Equation 3) is derived under the assumption of multivariate normality of covariates and known variances. The conditional coefficient is the partial regression coefficient from a multivariable model, while the unconditional coefficient is from a univariable model. The framework shows that the conditional coefficient is a biased estimator of the unconditional effect when covariates are correlated.

---

### Estimator Behavior
Conditional coefficients exhibit bias relative to the unconditional estimand, with the bias increasing with correlation strength and decreasing with the ratio of effect sizes (beta ratio). The bias can be substantial even at moderate correlations (e.g., ±0.25 leads to 25-30% deviation). Unconditional coefficients are unbiased for the total effect and robust to correlation. The sampling variability of conditional coefficients is also affected by correlation: higher positive correlation reduces variability, while negative correlation increases it.

---

### Validation Design
Simulation study with 42 scenarios varying correlation (-0.7 to 0.7), beta ratio (0.5, 1, 1.5), and sign of coefficients. Each scenario had 50 replicates of 150 subjects. A one-compartment PK model with two covariates on clearance was used. Models were estimated using NONMEM with FOCE-I. The empirical results were compared to theoretical predictions. Additionally, a dose selection study used NHANES data ($n=7276$) with BMI and BSA (correlation 0.74).

---

### Applicability Boundaries
The method works well for linear or log-linear models with continuous covariates. It is most relevant when covariates are moderately to highly correlated ($|\rho| > 0.3$). The theoretical framework assumes known variances and multivariate normality; deviations may affect accuracy. The recommendations are less applicable when causal inference is the primary goal, as conditional effects are needed for direct effects. The approach is not directly applicable to categorical covariates or non-linear relationships without linearization.

---

### Comparison to Alternatives
The paper contrasts conditional effects (from multivariable models) with unconditional effects (from univariable models). It shows that conditional effects are sensitive to correlation and can be misleading when interpreted as standalone effects. Unconditional effects are more interpretable and robust. The paper also mentions Full Random Effects Models (FREM) as an efficient way to derive unconditional effects from a single model fit. The 'Table 2 fallacy' is cited as a common misinterpretation.

---

### Implementation Guidance
Unconditional effects can be obtained by fitting separate univariable models for each covariate, including the covariate on all relevant parameters to avoid omission bias. PsN (version 5.6.0+) can facilitate this. Alternatively, FREM provides all unconditional effects from a single fit. For communication, present unconditional effects in forest plots and labels. Use the full conditional model for simulations. Report the covariate correlation matrix to aid interpretation. Avoid mixing conditional and unconditional effects in the same table.

---

## 📊 Key Findings
Covariate correlation substantially affects conditional coefficient estimates, with deviations from unconditional estimates increasing with correlation strength and beta ratio. Unconditional estimates remain stable across correlations. Using conditional effects in isolation for dose selection leads to biased and imprecise dose predictions, while both the full conditional model and unconditional model provide accurate predictions when applied appropriately. The authors recommend reporting unconditional effects for individual covariate impacts in labels and forest plots.

---

### Strengths & Limitations

#### Strengths
- Clear theoretical framework linking conditional and unconditional coefficients via a closed-form expression.
- Comprehensive simulation study across a wide range of correlations, effect size ratios, and sign combinations.
- Practical demonstration using real-world NHANES data with high covariate correlation (BMI and BSA).
- Actionable recommendations for reporting and communication that are easy to implement.

#### Limitations (Acknowledged by Authors)
- Use of illustrative scenarios with somewhat extreme conditions (e.g., high correlations).
- Focus on exponential covariate model only; other parameterizations not tested.
- Simplification of covariates on a single parameter only.
- Focus on two covariates, though theory applies to many.

#### Limitations (Expert Review)
- Does not address impact of model misspecification or omitted covariates on unconditional estimates.
- Recommendation to use unconditional effects may not be optimal when causal inference is the primary goal.
- Simulation scenarios may not cover all practical complexities (e.g., time-varying covariates, multiple parameters).
- No formal comparison of uncertainty (e.g., confidence intervals) between conditional and unconditional estimates.

#### Generalizability
The theoretical framework is generalizable to any number of covariates and any linear or linearizable model. However, the practical recommendations are most directly applicable to models with continuous covariates and exponential parameterization. The findings are expected to hold for other parameterizations and for covariates on multiple parameters, but further validation is needed.

---

### Key Equations

**Multivariable exponential model (Equation 1)**

{% raw %}
$$
CL = \theta_{\text{CL}} \cdot \exp(\beta_1 \cdot \text{Cov}_1 + \beta_2 \cdot \text{Cov}_2) \cdot \exp(\eta_{\text{CL}})
$$
{% endraw %}

This is the 'true' model used for simulations, where $CL$ is clearance, $\theta_{\text{CL}}$ is the typical value, $\beta_1$ and $\beta_2$ are conditional covariate coefficients, and $\eta_{\text{CL}}$ is the random effect.

**Conditional-unconditional coefficient relationship (Equation 3)**

{% raw %}
$$
\beta_{1,\text{cond}} = \beta_{1,\text{uncond}} \cdot \frac{1 - \rho^2}{1 - \rho^2 \cdot (\beta_2/\beta_1)^2}
$$
{% endraw %}

This equation shows how the conditional coefficient for Cov1 depends on the correlation $\rho$ between covariates and the ratio of the true coefficients (beta ratio). It is derived under the assumption of equal covariate variability.

---

### Figures & Tables

- **Figure 1**: Normalized conditional coefficient for Cov1 versus covariate correlation for different beta ratios and same-signed coefficients.
  - *Significance*: Illustrates the theoretical relationship: conditional coefficient deviates from unconditional as correlation increases, with the deviation moderated by the beta ratio.
- **Figure 5**: Empirical estimates of normalized conditional coefficient from simulations, compared to theoretical lines.
  - *Significance*: Validates the theoretical framework; shows that empirical estimates closely follow theoretical predictions across correlations and sign combinations.
- **Figure 6**: Predicted exposure (AUC) versus BMI quintiles using different covariate models (conditional, unconditional, both conditional).
  - *Significance*: Demonstrates that using only the conditional coefficient for a single covariate leads to biased exposure predictions, while the full conditional model and unconditional model give accurate predictions.

---

### Code & Reproducibility Assessment
The paper used NONMEM and R. Code and data are available from the corresponding author upon reasonable request, but no public repository is provided.

---

### Supplementary Materials
Supplementary materials include tables of parameter estimates (Table S1) and covariate coefficients (Table S2) used in simulations.

---

### Future Directions
Future work should extend the analysis to more complex models with covariates on multiple parameters, time-varying covariates, and non-linear relationships. Formal causal inference frameworks could further clarify the distinction between direct and total effects.

---

### Expert Commentary
This paper addresses a critical but often overlooked issue in pharmacometrics. The distinction between conditional and unconditional effects is essential for clear communication of covariate impacts. The recommendations align with best practices in statistical reporting and should be adopted by modelers and regulators.

---

### Bottom Line
For pharmacometric model reporting and dosing recommendations, use unconditional covariate effects to avoid misinterpretation due to correlation. Reserve the full conditional model for simulations and mechanistic exploration. Derive unconditional effects via univariable models or FREM.

---

---

## 📊 Figures

![Changes in the normalized conditional coefficient for Cov1(/) for different degrees of covariate correlations (based on Equation3). Colored lines indicate differ]({{ site.baseurl }}/assets/digests/2026-05-30-conditional-versus-unconditional-covariate-effects-in-pharmacometric-models/figures/fig_01.png)

![Predicted CL versus WT. The plot visualizes the conditional effect of WT on CL according to Equation (1) for different covariate correlations (colored lines) and]({{ site.baseurl }}/assets/digests/2026-05-30-conditional-versus-unconditional-covariate-effects-in-pharmacometric-models/figures/fig_02.png)

![Expected sampling variability in the covariate correlation versus sample size. The plot visualizes how the sampling variability (i.e., the shaded areas) in the c]({{ site.baseurl }}/assets/digests/2026-05-30-conditional-versus-unconditional-covariate-effects-in-pharmacometric-models/figures/fig_03.png)

![Predicted CL and expected uncertainty of the predictions due to the sampling variability in the covariate correlation, plotted versus WT. CL predictions were mad]({{ site.baseurl }}/assets/digests/2026-05-30-conditional-versus-unconditional-covariate-effects-in-pharmacometric-models/figures/fig_04.png)

![Normalized covariate coefficient (/) for different degrees of covariate correlation, sign of the covariate coefficients, and a beta ratio of 1. Each vertical pan]({{ site.baseurl }}/assets/digests/2026-05-30-conditional-versus-unconditional-covariate-effects-in-pharmacometric-models/figures/fig_05.png)

![predictions versus BMI quintiles after a fixed 100-mg dose and using the conditional (Equation5), both conditional (Equation1) and unconditional (Equation2) cova]({{ site.baseurl }}/assets/digests/2026-05-30-conditional-versus-unconditional-covariate-effects-in-pharmacometric-models/figures/fig_06.png)

![The relative deviation between, obtained with the selected dose, andwhen using the conditional (Equation5), both conditional (Equation1), and unconditional (Equa]({{ site.baseurl }}/assets/digests/2026-05-30-conditional-versus-unconditional-covariate-effects-in-pharmacometric-models/figures/fig_07.png)