---
layout: post
title: "Stochastic Gates for Covariate Selection in Population Pharmacokinetics Modeling"
date: 2026-02-09
authors: "Kekic M, Neuneyer A, Reith S, Tjelmeland C, Ziemen D, Tang W, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "https://doi.org/10.1002/psp4.70147"
paper_type: ai-ml
tags: [ai-ml, qsp, covariate-analysis, machine-learning]
excerpt_text: "A machine learning approach using Neural Networks with 'Stochastic Gates' to automate covariate pre-selection in PopPK. This method explicitly penalizes the number of features, handling highly correlated covariates better than standard methods like XGBoost, though it still relies on EBEs."
pdf_path: "/assets/digests/2026-02-09-stochastic-gates-for-covariate-selection-in-population-pharmacokinetics-modeling/PMx_Stochastic_Gates_for_Covariate_Selection_20260209.pdf"
retroactively_classified: true
---

### Quick Take
A machine learning approach using Neural Networks with 'Stochastic Gates' to automate covariate pre-selection in PopPK. This method explicitly penalizes the number of features, handling highly correlated covariates better than standard methods like XGBoost, though it still relies on EBEs.

---

### Executive Summary
This study introduces a novel machine learning method for covariate selection in population pharmacokinetics (PopPK) using Neural Networks equipped with Stochastic Gates (STG). Addressing the time-consuming nature of traditional Stepwise Covariate Modeling (SCM), the authors demonstrate that STG can efficiently identify relevant covariates by simultaneously modeling the data and penalizing the number of active features. Tested against synthetic datasets and two large clinical trials (Monalizumab and Tixagevimab/Cilgavimab), the method proved robust in handling correlated predictors and non-linear relationships. While it matched expert selection in one case, it identified a superset of covariates in another, suggesting it serves best as a high-sensitivity pre-screening tool to be followed by backward elimination.

---

## ⚡ Methodological Snapshot
The authors utilized a Neural Network architecture incorporating a 'Stochastic Gates' layer immediately after the input. Each covariate is assigned a trainable gate parameter ($\mu$) that probabilistically controls its inclusion. The training loss function combines Mean Squared Error (MSE) with a regularization term scaled by a hyperparameter ($\lambda$) to penalize the number of active gates.

The method takes Empirical Bayes Estimates (EBEs) from a base PopPK model as targets. Training involves a grid search for the optimal $\lambda$ that minimizes validation loss while minimizing the feature count. A unique 'warm start' feature allows modelers to initialize gate parameters to favor biologically plausible covariates over correlated confounders.

---

## 🏗️ Structural Model Breakdown
The core innovation is the covariate selection layer, not the PK structural model. The selection model predicts individual random effects ($\eta$) based on covariates.

**Stochastic Gate Mechanism:**
1. **Input:** Covariate vector $x$.
2. **Gate:** A probabilistic binary variable $z_d$ derived from a trainable parameter $\mu_d$.
3. **Regularization:** The objective function includes a term $\lambda \sum P(z_d = 1)$ to suppress unnecessary features.

**Base PK Models (for EBE generation):**
- **Monalizumab:** Two-compartment model with linear elimination.
- **Tixagevimab/Cilgavimab:** Two-compartment model with first-order absorption and elimination.

---

### Detailed Methodological Analysis

#### Modeling Approach
Neural Networks with Stochastic Gates (STG) for feature selection; comparison with XGBoost (SHAP/BorutaShap) and traditional expert modeling.

#### Data Sources
Synthetic datasets (varying correlation, frequency, and non-linearity); Clinical data from Monalizumab (N=507) and Tixagevimab/Cilgavimab (N=4940) trials.

#### Estimation Methods
Gradient descent minimizing a composite loss function (MSE + regularization penalty). Hyperparameter tuning via 5-fold cross-validation.

#### Model Evaluation
MSE on test sets; Recovery rate of true covariates in synthetic scenarios; Concordance with expert-developed models for clinical datasets.

#### Covariate Analysis
Evaluated continuous and categorical covariates. Specifically tested handling of high correlations (e.g., Body Weight vs. BSA) and non-linear dependencies (XOR function).

---

### Scientific Context & Motivation
Covariate selection is a critical but bottleneck step in PopPK modeling. Traditional SCM is computationally expensive, while newer ML methods (like XGBoost with SHAP) often struggle with highly correlated features or lack explicit mechanisms to limit the number of selected predictors. This paper applies Stochastic Gates, a regularization technique for neural networks, to bridge the gap between predictive performance and parsimonious feature selection in pharmacometrics.

---

### Statistical Rigor Assessment
The study employed 5-fold cross-validation to ensure robustness of the $\lambda$ hyperparameter selection. The authors acknowledged the limitation of using EBEs (shrinkage) and excluded parameters with high shrinkage (>30%) from the analysis. Synthetic scenarios were designed to stress-test the method against specific statistical challenges like multicollinearity and low covariate frequency.

---

## 📊 Key Findings
1. **Synthetic Performance:** STG successfully identified true covariates in correlated scenarios where XGBoost failed (e.g., correctly selecting Weight over BSA). It also detected non-linear (XOR) relationships missed by linear screening.
2. **Monalizumab:** The method identified the exact same covariates (Albumin, Body Weight, Sex, Smoking) as the final expert model.
3. **Tixagevimab/Cilgavimab:** STG identified a superset of the expert covariates (finding all expert covariates plus additional ones like injection site), indicating high sensitivity but a need for subsequent pruning.
4. **Warm Start:** Demonstrating that initializing gate parameters based on prior knowledge can successfully guide the model to select biologically preferred covariates among correlated options.

---

## 💡 Clinical & Regulatory Implications
This method offers a rapid 'pre-screening' tool for large Phase III datasets, potentially reducing weeks of SCM runtimes to hours. It allows pharmacometricians to screen a broader net of covariates (including non-linear ones) and then refine the list, ensuring no critical factors are missed in dose adjustment considerations.

---

### Strengths & Limitations

#### Strengths
- Explicit penalization of feature count within the training process (embedded selection).
- Superior handling of multicollinearity compared to tree-based methods.
- Ability to incorporate expert prior knowledge via 'warm start' initialization.
- Detection of non-linear covariate relationships.

#### Limitations (Acknowledged by Authors)
- Reliance on EBEs makes the method sensitive to shrinkage bias.
- Does not provide the functional form (equation) for the covariate relationship, only the selection.
- Requires careful tuning of the $\lambda$ hyperparameter.

#### Limitations (Expert Review)
- The 'Superset' finding in the large clinical dataset suggests the method may be too aggressive in inclusion without a secondary backward elimination step.
- Performance drops in small populations (N=100) due to overfitting risks.

#### Generalizability
Highly generalizable as a pre-processing step for any PopPK analysis with sufficient sample size and low shrinkage, regardless of the therapeutic area.

---

### Key Equations

**Individual Parameter Model**

$$
\Theta_i = \Theta_{pop} \times e^{\eta_i}
$$

Standard log-normal distribution of individual PK parameters, where $\eta_i$ are the random effects used as targets for the neural network.

**Regularization Parameter**

$$
\lambda \approx 0.1
$$

An approximate optimal value for the penalization term found in the clinical case studies, balancing model fit with sparsity.

---

### Figures & Tables

- **Figure 2**: Validation loss and covariate frequency vs. Lambda for synthetic data.
  - *Significance*: Demonstrates the 'sweet spot' for the regularization parameter $\lambda$, where the model minimizes error while selecting the correct number of features (4 in this scenario).
- **Figure 4**: Convergence of gate parameters ($\mu$) with and without 'Warm Start'.
  - *Significance*: Visually proves that initializing the model with priors can force the selection of a biologically relevant covariate (e.g., Smoking) over a statistically equivalent but artificial confounder.
- **Table 1**: Summary of covariates selected by STG vs. BorutaShap vs. Expert across all datasets.
  - *Significance*: Provides the head-to-head comparison showing STG is generally more parsimonious than BorutaShap and aligns well with expert models.

---

### Code & Reproducibility Assessment
Yes, Python code and synthetic datasets are available at https://github.com/AstraZeneca/Stochastic-gates-for-covariate-selection-in-population-pharmacokinetics-modelling-

---

### Supplementary Materials
Supplementary materials include details on the synthetic data generation, hyperparameter tuning grids, and additional plots for the XGBoost/SHAP comparisons.

---

### Future Directions
Future work should investigate the impact of shrinkage on STG performance more rigorously. The authors also suggest coupling this selection method with Symbolic Regression to automatically derive the functional forms of the covariate relationships.

---

### Expert Commentary
This paper represents a maturing of ML applications in pharmacometrics. Moving beyond simple 'importance ranking' (like SHAP) to 'embedded selection' (Stochastic Gates) addresses a specific pain point: multicollinearity. The 'warm start' feature is particularly appealing for regulatory science, where biological plausibility often trumps pure statistical fit. However, the reliance on EBEs remains the Achilles' heel of all such two-stage approaches; this tool is best viewed as a powerful hypothesis generator rather than a model builder.

---

### Bottom Line
Stochastic Gates offer a sophisticated, fast alternative to GAMs or correlation plots for covariate pre-selection. By explicitly handling correlations and allowing for prior knowledge injection, it outperforms standard ML ranking methods. Pharmacometricians should consider this for high-dimensional datasets, using it to generate a candidate list for a final confirmatory backward elimination run in NONMEM.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.png", width: 90%),
  caption: [Figure 1],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.png", width: 90%),
  caption: [FIGURE 1: Schematic view of neural network with stochastic gates layer applied to covariate selection on the clearance parameter.],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 2: Stochastic Gates output for the Reference scenario, for clearance parameter. (a) Validation and Training loss across different lambdas. (b) Covariates frequencie],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [FIGURE 3: XGBoost and SHAP modeling of clearance parameter for the Reference scenario; a. beeswarm plot of SHAP values and b. BorutaShap boxplot.],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.png", width: 90%),
  caption: [FIGURE 4: Convergence of the upmu gates without (a) and with (b) warm start in the Linearly dependent covariates scenario, for clearance parameter.],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_06.jpg", width: 90%),
  caption: [FIGURE 5: Monalizumab covariates for CL (a) and Vc (b). Left panels show validation/train loss and number of relevant features as a function of lambda parameter; right pan],
  placement: auto,
) <fig-6>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_07.jpg", width: 90%),
  caption: [FIGURE 6: Tixagevimab/cilgavimab covariates for ka (a), CL (b) and Vc (c). Left panels show validation/train loss and number of relevant features as a function of lambda p],
  placement: auto,
) <fig-7>
#set page(flipped: false)
```