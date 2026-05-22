---
layout: post
title: "Multi-objective optimization in population pharmacokinetic model selection using NSGA-II and pyDarwin"
date: 2026-05-22
authors: "Li X, Mazur A, Sale M, Craig J, Nieforth K, Bies R"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026"
doi: "10.1007/s10928-026-10036-9"
paper_type: methodology
tags: [methodology, covariate-analysis, machine-learning]
excerpt_text: "This study applies multi-objective optimization (MOO) via the NSGA-II algorithm to population PK model selection, simultaneously minimizing objective function value (OFV) and number of estimated parameters (NEP). The method generates a Pareto front of non-dominated models, explicitly quantifying the trade-off between model fit and complexity. Applied to four real datasets, MOO recovered known optimal models and revealed alternative covariate relationships, providing a principled framework for incorporating subjective criteria in final model selection."
pdf_path: "/assets/digests/2026-05-22-multi-objective-optimization-in-population-pharmacokinetic-model-selection/PMx_Multiobjective_optimization_in_populatio_20260522.pdf"
retroactively_classified: false
---

**Content Source:** PMC Full Text

### Quick Take
This study applies multi-objective optimization (MOO) via the NSGA-II algorithm to population PK model selection, simultaneously minimizing objective function value (OFV) and number of estimated parameters (NEP). The method generates a Pareto front of non-dominated models, explicitly quantifying the trade-off between model fit and complexity. Applied to four real datasets, MOO recovered known optimal models and revealed alternative covariate relationships, providing a principled framework for incorporating subjective criteria in final model selection.

---

### Executive Summary
Traditional population PK model building often relies on stepwise hypothesis testing or single-objective optimization with composite fitness functions that impose arbitrary penalties for model complexity. This paper introduces multi-objective optimization using the Non-dominated Sorting Genetic Algorithm II (NSGA-II) implemented in the pyDarwin toolbox. By treating OFV and NEP as separate, competing objectives, the method produces a Pareto front of optimal models where no model is superior in both objectives. The approach was evaluated on four compounds (DMAG, ziprasidone, clozapine, quetiapine) with previously published models. Results showed that the Pareto front effectively captured the trade-off between fit and complexity; the optimal model from single-objective hybrid genetic algorithm (SOHGA) often appeared on the front. Incorporation of a local downhill search further reduced OFV for some models but occasionally introduced numerical instability. The method provides a transparent, objective basis for model shortlisting, allowing modelers to apply subjective criteria (e.g., diagnostic plots, biological plausibility) to make informed final choices. This work demonstrates that MOO is a valuable complement to existing model selection strategies, particularly in exploratory analyses where multiple plausible models exist.

---

### Scientific Context & Motivation
Population PK model selection is challenged by the need to balance goodness-of-fit against model complexity. Traditional stepwise search (forward addition/backward elimination) is prone to local optima and may miss important covariate interactions. Single-objective machine learning methods, such as genetic algorithms with a composite fitness function, improve global search but require user-defined penalty weights that can be arbitrary. Multi-objective optimization addresses these limitations by simultaneously optimizing multiple criteria without combining them into a single weighted sum. In pharmacometrics, MOO has not been widely adopted, despite its success in engineering and economics. This paper fills that gap by implementing NSGA-II within pyDarwin and demonstrating its utility for population PK model development.

---

## ⚡ Methodological Snapshot
The paper employs the Non-dominated Sorting Genetic Algorithm II (NSGA-II), an evolutionary multi-objective optimization algorithm, to search the space of population PK model structures. Two objectives are minimized simultaneously: the objective function value (OFV, $-2 \log L$) and the number of estimated parameters (NEP). The algorithm begins with a random population of models encoded as binary strings. In each generation, models are evaluated in NONMEM, and non-dominated sorting assigns ranks based on Pareto dominance; crowding distance is used to preserve diversity. Tournament selection, crossover, and mutation generate offspring. A local downhill search is optionally applied every few generations, systematically flipping one or two bits to find immediate improvements. To prevent generation of overly complex models, an 'effect limit' biases the random generation toward models with fewer covariate effects. The final output is a Pareto front of non-dominated models, representing the best trade-offs between fit and complexity found during the search.

---

## 📐 Statistical Framework
The underlying statistical model is the nonlinear mixed-effects model, with parameters estimated via first-order conditional estimation with interaction (FOCE-I) in NONMEM. The OFV is derived from the likelihood, assuming normally distributed random effects and residual errors (though the specific error models vary). The MOO framework does not impose additional statistical assumptions; it treats the OFV and NEP as deterministic objective functions. The NSGA-II algorithm is heuristic and does not guarantee convergence to the true Pareto front, but empirical results show improvement over generations. The method assumes that the OFV and NEP are sufficient and appropriate objectives for model selection, and that the search space contains the true model or reasonable approximations.

---

### Estimator Behavior
The paper does not introduce a new statistical estimator; rather, it evaluates the behavior of the optimization algorithm. The NSGA-II algorithm's performance is assessed by the quality and diversity of the Pareto front. The authors observe that the Pareto front shifts toward lower OFV and NEP over generations, indicating convergence. The inclusion of local downhill search can lead to models with lower OFV for a given NEP, but may also produce models with numerical instability (high condition numbers). The effect limit biases the search toward simpler models, which may prevent discovery of complex but well-supported models. Overall, the algorithm demonstrates an ability to recover known optimal models (from SOHGA) and to generate a range of plausible alternatives.

---

### Validation Design
Validation was performed through application to four real clinical datasets with previously published population PK models developed via stepwise search. The authors compared the Pareto-optimal models from NSGA-II to the published stepwise models and to the optimal model from single-objective hybrid genetic algorithm (SOHGA). They assessed whether the SOHGA model appeared on the Pareto front. Additionally, for the DMAG dataset, they conducted prediction-corrected visual predictive checks (pcVPCs) on four selected Pareto-optimal models to illustrate subjective model comparison. No simulation study with known true model was conducted to evaluate the algorithm's ability to recover the correct model structure or to assess false positive rates.

---

### Applicability Boundaries
The method is applicable when: (1) the model search space can be clearly defined with discrete structural choices; (2) the OFV is a reliable measure of model fit (e.g., successful convergence, no boundary estimates); (3) the number of estimated parameters is a meaningful measure of complexity; (4) the user is interested in exploring trade-offs rather than obtaining a single best model. It may not perform well when: the search space is extremely large and poorly constrained, leading to excessive computational cost; the OFV surface is highly irregular or contains many local optima that trap the local search; the data are too sparse to support complex models, making many models fail basic diagnostics; or when the objectives are not truly conflicting. The effect limit must be set appropriately; too low may miss important covariates, too high may waste computation on overfitted models.

---

### Comparison to Alternatives
Compared to traditional stepwise search, MOO provides a global search that reduces the risk of local optima and does not rely on arbitrary p-value thresholds. Compared to single-objective GA with a composite fitness function (SOHGA), MOO avoids the need to specify penalty weights for model complexity, instead explicitly showing the trade-off. Other automated tools like Pharmpy and mlxModelFinder offer single-objective criteria (AIC, BIC) or user-defined metrics, but do not generate a Pareto front. The MOO approach is more transparent about the cost of complexity. However, MOO requires more sophisticated post-hoc analysis to select a final model, and the computational burden is similar to or slightly higher than SOHGA. It is best suited for exploratory phases where multiple models are of interest.

---

### Implementation Guidance
The method is implemented in the pyDarwin Python package (https://certara.github.io/pyDarwin/), which interfaces with NONMEM. Users must define a search space using a token-based system. Key hyperparameters are provided in Table 2; typical settings include population size 100, 30 generations, crossover/mutation rates 0.95, and downhill period 5. The effect limit should be set based on the expected number of supportable covariate effects (e.g., 4-6). Local downhill search can be enabled but may increase the risk of selecting numerically unstable models; users should carefully check diagnostics (condition number, correlation). Parallel execution is supported to reduce wall-clock time. Computational cost is primarily driven by the number of NONMEM runs; for the datasets here, total elapsed time ranged from hours to a day on a 32-core machine. Users are advised to start with a smaller search space and gradually expand.

---

## 📊 Key Findings
1. NSGA-II successfully generated Pareto fronts for all four datasets, with the number of non-dominated solutions ranging from 9 to 17. 2. The optimal model from SOHGA appeared on the Pareto front for DMAG, ziprasidone, and clozapine, confirming that MOO can recover known optima. 3. Models with lower OFV generally had more estimated parameters, illustrating the inherent trade-off. 4. Local downhill search within MOO led to models with lower OFV at similar complexity but sometimes failed diagnostic criteria (e.g., high condition number). 5. MOO identified alternative covariate relationships not selected in the original stepwise models, such as weight on volume for DMAG and age on clearance for quetiapine. 6. Prediction-corrected VPCs of selected Pareto-optimal models for DMAG showed progressive improvement in prediction intervals with increasing model complexity, though all models captured the median trend. 7. Computational efficiency of NSGA-II was comparable to SOHGA, with total elapsed time scaling with the number of models evaluated.

---

### Strengths & Limitations

#### Strengths
- Provides a systematic, objective framework for handling trade-offs between model fit and complexity without arbitrary penalty weights.
- Generates a set of Pareto-optimal models rather than a single solution, enabling informed subjective selection based on diagnostic plots and biological plausibility.
- Global search capability reduces risk of local optima compared to stepwise methods.
- Implemented in the open-source pyDarwin toolbox, facilitating adoption and customization.
- Demonstrated on four real-world datasets with varying sampling richness and model complexity.
- Incorporates practical features such as effect limit to constrain search space and local downhill search for refinement.

#### Limitations (Acknowledged by Authors)
- Only two objectives (OFV and NEP) were considered; other important criteria like parameter precision or clinical endpoints were not included.
- The effect limit hyperparameter is required to prevent generation of implausibly complex models, which may introduce some subjectivity.
- Final model selection still relies on subjective evaluation (e.g., pcVPCs, biological plausibility).
- Computational cost can be high for large search spaces, though comparable to single-objective GA.

#### Limitations (Expert Review)
- No formal statistical inference on the Pareto front (e.g., confidence regions for trade-offs) is provided.
- The method's performance was not evaluated via simulation studies with known true models, limiting assessment of its ability to recover the correct model.
- The OFV is based on FOCE-I, which may have its own biases; the Pareto front is conditional on the estimation method.
- The crowding distance metric may not guarantee uniform coverage of the Pareto front in objective space.
- The effect limit, while practical, may exclude potentially valid complex models that could be supported by the data.
- Comparison is limited to SOHGA and stepwise search; other MOO algorithms (e.g., MOEA/D) or Bayesian approaches were not explored.

#### Generalizability
The MOO framework is general and can be applied to any population PK/PD model selection problem where multiple quantifiable objectives exist. However, its success depends on careful definition of the search space, appropriate choice of objectives, and availability of sufficient computational resources. The method is best suited for exploratory analyses where multiple competing models are plausible, rather than confirmatory settings requiring a single final model.

---

### Key Equations

**Objective Function Value (OFV)**

{% raw %}
$$
\text{OFV} = -2 \log L(\theta \mid y)
$$
{% endraw %}

The OFV is the -2 log-likelihood of the data given the model parameters, used as the primary measure of model fit in both single-objective and multi-objective optimization.

**Crowding Distance**

{% raw %}
$$
d_i = \sum_{m=1}^{M} \frac{f_m^{i+1} - f_m^{i-1}}{f_m^{\max} - f_m^{\min}}
$$
{% endraw %}

Crowding distance is used in NSGA-II to maintain diversity along the Pareto front by measuring the density of solutions in objective space; boundary solutions are assigned infinite distance.

---

### Figures & Tables

- **Figure 1**: Pareto fronts for DMAG, ziprasidone, clozapine, and quetiapine datasets, showing non-dominated models with and without local downhill search.
  - *Significance*: Illustrates the trade-off between OFV and NEP and the effect of local search on the Pareto front.
- **Figure 2**: Prediction-corrected VPCs for four selected Pareto-optimal models from the DMAG dataset with NEP = 5, 9, 11, 16.
  - *Significance*: Demonstrates how increasing model complexity improves prediction intervals, aiding subjective model comparison.
- **Table 2**: Hyperparameter settings for single-objective GA and NSGA-II.
  - *Significance*: Provides practical guidance for implementing the algorithms in pyDarwin.
- **Table 3**: Search space definition for each compound, including covariates, compartment numbers, and variability options.
  - *Significance*: Defines the scope of model structures explored, critical for interpreting the results.

---

### Code & Reproducibility Assessment
The pyDarwin toolbox is open-source and available at https://certara.github.io/pyDarwin/. The paper details all hyperparameters and search spaces, but the specific scripts used for these analyses are not provided. The supplementary materials include extensive tables of results, enabling partial reproducibility.

---

### Supplementary Materials
Supplementary materials include Tables S1 (covariate distributions), S2 (parameter estimates for selected DMAG models), S3-S6 (detailed non-dominated models for each dataset), and S7 (computational efficiency comparison).

---

### Future Directions
Future work should extend MOO to more than two objectives (e.g., parameter uncertainty, clinical utility), incorporate formal multi-criteria decision analysis (MCDA) for final model selection, evaluate performance via simulation studies with known truth, compare with other MOO algorithms (e.g., MOEA/D, SPEA2), and integrate with Bayesian model selection criteria. Additionally, adaptive effect limits and dynamic search space reduction could improve efficiency.

---

### Expert Commentary
This paper marks an important evolution in automated pharmacometric model selection. By shifting from a single 'best' model paradigm to a Pareto-optimal set, it acknowledges the inherent multiplicity of good models and the role of expert judgment. The NSGA-II implementation is a natural fit for the discrete, combinatorial nature of model structure search. However, the reliance on OFV as a proxy for model fit, while standard, inherits all the limitations of maximum likelihood estimation in nonlinear mixed-effects models. The true innovation lies not in the algorithm itself—NSGA-II is well-established—but in its thoughtful application to pharmacometrics and the emphasis on transparency in the trade-off. As the field moves toward more complex models and high-dimensional covariate spaces, such multi-objective approaches will become indispensable. The next challenge is to develop rigorous methods for comparing and selecting from the Pareto front that go beyond visual inspection.

---

### Bottom Line
Multi-objective optimization via NSGA-II in pyDarwin offers pharmacometricians a powerful tool to explore the trade-off between model fit and complexity without resorting to arbitrary penalties. By generating a Pareto front of optimal models, it supports transparent, informed model selection that integrates both objective metrics and subjective scientific judgment.

---

---

## 📊 Figures

![a-dFinal Pareto fronts of (a) DMAG, (b) ziprasidone, (c) clozapine, (d) quetiapine dataset. The blue points represent non-dominated models derived from MOO search without local dow]({{ site.baseurl }}/assets/digests/2026-05-22-multi-objective-optimization-in-population-pharmacokinetic-model-selection/figures/fig_01.jpg)

![a-dPrediction-corrected visual predicted check plots of non-dominated models from DMAG downhill search.a,b,c,drepresent models with number of estimated parameters (NEP) = 5, 9, 11,]({{ site.baseurl }}/assets/digests/2026-05-22-multi-objective-optimization-in-population-pharmacokinetic-model-selection/figures/fig_02.jpg)