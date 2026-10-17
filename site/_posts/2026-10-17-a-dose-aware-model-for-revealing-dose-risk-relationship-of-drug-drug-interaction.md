---
layout: post
title: "A Dose-Aware Model for Revealing Dose-Risk Relationship of Drug-Drug Interaction."
date: 2026-10-17
authors: "Yi Shi et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70114"
paper_type: methodology
tags: [methodology, dose-response]
excerpt_text: "This paper introduces a dose-aware model (DAM) that systematically searches over clinically meaningful partitions of two-drug dose combinations to estimate the dose-risk relationship (DRR) for adverse drug events. In simulations, DAM outperforms standard exposed-versus-unexposed, dose-response, and saturated conditional logistic regression models in bias and model fit when the true DRR is complex, and it identified the best-fitting model in 17 of 20 real-world datasets. The method is implemented in R and available on GitHub."
pdf_path: "/assets/digests/2026-10-17-a-dose-aware-model-for-revealing-dose-risk-relationship-of-drug-drug-interaction/PMx_A_DoseAware_Model_for_Revealing_DoseRisk_20261017.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper introduces a dose-aware model (DAM) that systematically searches over clinically meaningful partitions of two-drug dose combinations to estimate the dose-risk relationship (DRR) for adverse drug events. In simulations, DAM outperforms standard exposed-versus-unexposed, dose-response, and saturated conditional logistic regression models in bias and model fit when the true DRR is complex, and it identified the best-fitting model in 17 of 20 real-world datasets. The method is implemented in R and available on GitHub.

---

### Executive Summary
The authors propose a dose-aware model (DAM) to estimate the dose-risk relationship (DRR) for drug-drug interactions (DDIs) using real-world data. DAM enumerates a constrained set of meaningful partitions of the $5 \times 5$ dose grid (for two drugs) into groups that respect monotonicity and continuity, then selects the optimal partition via Bayesian Information Criterion (BIC) within a conditional logistic regression framework. Simulation studies show that DAM achieves lower empirical bias than standard models when the true DRR is not captured by those models, while maintaining type I error control and competitive power. In 20 real-world case-control datasets (AKI and GI bleeding), DAM yielded the best BIC in 17 cases, often revealing more complex dose-risk patterns than simpler models. The method is computationally feasible with parallelization and is provided as open-source R code.

---

### Scientific Context & Motivation
Drug-drug interactions (DDIs) are a major cause of adverse drug events (ADEs), and the risk often depends on the doses of both interacting drugs. Existing real-world data mining approaches typically treat drug exposure as binary (exposed vs. unexposed) or assume a simple dose-response trend, which can lead to model misspecification and biased risk estimates. The number of possible dose-risk relationships for a two-drug combination is astronomical (e.g., $2^{25}$ possible binary partitions of a $5 \times 5$ grid), making exhaustive search infeasible. This paper addresses the need for a principled method that identifies a parsimonious yet flexible DRR while respecting clinical plausibility (monotonicity, continuity).

---

## ⚡ Methodological Snapshot
DAM is a model selection approach for estimating the dose-risk relationship (DRR) between a two-drug combination and an adverse event. The method defines a grid of dose levels for each drug (e.g., 5 levels per drug, yielding 25 cells). It then enumerates all possible partitions of these 25 cells into $K$ groups ($K=3,4,5$) that satisfy two clinical constraints: (1) each group must be continuous (i.e., all cells in a group can be connected via adjacent dose levels) and (2) groups must be monotonic (i.e., if a higher dose cell is in a group, all lower dose cells are in the same or lower-risk groups). To make enumeration tractable, the algorithm uses 'null groups' (groups with no elevated risk) and set differences to generate candidate partitions. For each partition, a conditional logistic regression model is fit with group indicators as predictors, and the optimal partition is selected by the Bayesian Information Criterion (BIC). The final model provides odds ratios for each risk group relative to the unexposed reference group.

---

## 📐 Statistical Framework
The underlying model is a conditional logistic regression (CLRM) for matched case-control data, where the outcome is the case status and the predictors are indicator variables for the risk groups defined by the partition. For a given partition $P$ with $K$ groups, the model is: $logit(P(case)) = \alpha_m + \sum_{k=2}^{K} \beta_k I(dose\ combination \in group\ k)$, where $\alpha_m$ are stratum-specific intercepts (matched on covariates). The DRR is characterized by the odds ratios $\exp(\beta_k)$. The model assumes that within each group, the odds of the ADE are constant across dose levels, and that the partition respects monotonicity (higher dose groups have non-decreasing risk) and continuity. The search over partitions is a form of constrained model selection, with BIC used to balance goodness-of-fit and parsimony. The method does not assume a specific functional form (e.g., linear or log-linear) for the dose-response, making it flexible.

---

### Estimator Behavior
The estimator is the maximum likelihood estimator (MLE) for the conditional logistic regression parameters given a selected partition. Because the partition is selected based on the same data, the final estimates are subject to selection bias, which may lead to overfitting and underestimated standard errors. The simulation study shows that DAM has lower empirical bias (measured by EARB) than standard models when the true DRR is complex, but slightly higher bias than the correctly specified dose-response model (median EARB 17% vs. 7% in scenario A). The method tends to underestimate odds ratios for high dose levels when the true model is dose-response (Figure 3A), likely due to grouping. In terms of convergence, the MLE is standard and converges under usual regularity conditions, but the model selection step adds computational complexity. Type I error is controlled at the nominal level when testing for any DDI effect, but the authors note that without adjustment, the type I error for the selected partition may be inflated.

---

### Validation Design
The method was validated through a simulation study with four true DRR scenarios: (A) dose-response CLRM, (B) exposed-vs-unexposed CLRM, (C) a meaningful 4-group partition (higher risk at higher doses), and (D) a complex pattern not covered by any candidate model. For each scenario, 1000 simulated datasets were generated with 25 dose levels and matched case-control pairs. Performance metrics included the percentage of times each model achieved the best BIC, empirical relative bias (ERB) and empirical absolute relative bias (EARB) for each dose level, type I error, and empirical power. Real-world validation used 20 drug-ADE datasets from Optum claims data (AKI and GI bleeding), where DAM was compared to exposed-vs-unexposed, dose-response, and saturated CLRMs based on BIC and estimated ORs. The real-world analysis also included clinical interpretation of the estimated DRRs.

---

### Applicability Boundaries
DAM is applicable when: (1) the outcome is binary (e.g., ADE) and the study design is case-control or cohort with matched data; (2) drug doses can be categorized into ordinal levels (e.g., 5 levels); (3) the sample size is sufficient to support the number of parameters ($K-1$) and the number of candidate partitions; (4) the true DRR is expected to be monotonic and continuous (i.e., risk increases with dose, without non-monotonic patterns). The method may not work well if the true DRR is non-monotonic (e.g., U-shaped) or if dose levels are poorly defined (e.g., most patients on a single dose). It is also computationally intensive for high-throughput screening of many drug pairs, though parallelization can help. The method is not designed for continuous dose variables or for interactions involving more than two drugs.

---

### Comparison to Alternatives
Compared to the exposed-versus-unexposed model, DAM provides more granular risk estimates and can identify dose-dependent effects, but may have lower power when the true effect is uniform across all exposed doses. Compared to the dose-response model (which assumes a linear or log-linear trend), DAM is more flexible and avoids extreme ORs at high doses when the trend is not linear, but may have higher bias if the true relationship is indeed linear. The saturated model (one OR per dose level) is unbiased but has high variance and overfits; DAM reduces variance by grouping dose levels. In simulations, DAM had lower EARB than the saturated model in most scenarios (e.g., 7-12% vs. 16-17%) and lower than dose-response when misspecified. DAM also outperformed alternatives in BIC in real-world data, indicating better trade-off between fit and complexity.

---

### Implementation Guidance
The DAM algorithm is implemented in R and available at github.com/PengyueLab/DAM. Key steps: (1) Define dose levels for each drug (e.g., 5 levels based on quantiles of daily dose). (2) Enumerate meaningful partitions using the provided functions, with hyperparameters $K$ (number of groups), $N_0$ (max dose levels in null group), and $N_1$ (min dose levels in other groups). (3) For each partition, fit a conditional logistic regression (e.g., using 'clogit' from the survival package) and compute BIC. (4) Select the partition with the lowest BIC. (5) Obtain ORs and confidence intervals from the selected model. Computational tips: use parallel processing (e.g., 'parallel' package) to speed up enumeration; for large datasets, consider using 'nlminb' for optimization instead of 'clogit' to reduce runtime. The authors recommend clinical adjudication of dose levels and caution against over-interpreting results without external validation.

---

## 📊 Key Findings
In simulation studies, DAM achieved the best BIC in 30-100% of replicates depending on the true DRR, and had lower median empirical absolute relative bias (EARB) than standard models when the true model was complex (e.g., EARB 7-12% for DAM vs. 16-48% for alternatives). DAM maintained type I error near 0.05 and had comparable or superior power when correctly specified. In real-world analyses of 20 drug-ADE pairs, DAM selected the best-fitting model in 17 datasets, often identifying more nuanced dose-risk groups than exposed-versus-unexposed models. For example, for lisinopril-gabapentin-AKI, DAM estimated four distinct risk groups (ORs 1.3-2.5) versus a single OR of 2.0 from the exposed-versus-unexposed model. The dose-response model produced extreme ORs (up to 9.9) in some cases, suggesting overfitting, while DAM provided more clinically plausible estimates.

---

### Strengths & Limitations

#### Strengths
- Systematic enumeration of clinically meaningful partitions using null groups and set differences, reducing the model space from astronomical to tractable (e.g., ~100,000 partitions for $K=3\text{-}5$).
- Enforces monotonicity and continuity constraints, aligning with toxicological principles and reducing overfitting.
- Demonstrated superior bias reduction and model fit in simulations across diverse true DRR scenarios.
- Applicable to any regression framework (e.g., logistic, Cox) and study design, not limited to conditional logistic regression.
- Open-source implementation (R) with parallel computing support, facilitating adoption.

#### Limitations (Acknowledged by Authors)
- Data-driven dose level definitions may not be clinically meaningful, especially for drugs with narrow dose ranges (e.g., clopidogrel).
- Computational cost can be high for high-throughput screening, though parallelization helps.
- Model selection based on BIC may inflate type I error without adjustment; permutation tests are suggested.
- Results are subject to residual confounding and misclassification inherent in claims data.
- The estimated DRR may not represent the true relationship if the true partition is not among the considered meaningful partitions.

#### Limitations (Expert Review)
- The method is limited to two-drug combinations; extension to higher-order interactions is not addressed.
- The choice of hyperparameters ($N_0=10$, $N_1=4$, $K=3\text{-}5$) is somewhat arbitrary and may need tuning for different dose grids.
- BIC-based model selection assumes a true model exists within the candidate set; if not, the selected model may still be misspecified.
- The simulation study only considered four true DRR patterns; performance under other patterns (e.g., non-monotonic) is unknown.
- The real-world analysis is restricted to US claims data, limiting generalizability to other populations or healthcare systems.

#### Generalizability
The method is generalizable to any two-drug combination with ordinal dose levels and any binary or time-to-event outcome, provided sufficient sample size. However, the clinical interpretability of dose levels depends on the drug and data source; the authors note that DAM is most appropriate for drugs with a wide range of clinically used doses. The findings from real-world analyses are specific to the US commercially insured population and may not generalize to other settings.

---

---

### Figures & Tables

- **Figure 1**: Examples of meaningful and less-meaningful dose-risk relationships, illustrating the concepts of continuous, monotonic, and null groups.
  - *Significance*: Defines the structural constraints that make a partition clinically meaningful, which is central to the DAM algorithm.
- **Figure 2**: Illustration of the set difference-based algorithm to identify meaningful partitions and the DAM model structure.
  - *Significance*: Explains the algorithmic approach to reduce the search space and how the model assigns risk groups.
- **Figure 3**: Simulation results under four true DRR scenarios, showing true odds ratios, percentage of best BIC, empirical relative bias (ERB), and boxplots of empirical absolute relative bias (EARB) for all models.
  - *Significance*: Demonstrates the bias reduction of DAM compared to standard models across different misspecification scenarios.
- **Figure 4**: Empirical statistical powers in the simulation study for each model under the four true DRR scenarios.
  - *Significance*: Shows that DAM maintains competitive power, especially when correctly specified, and that all models have high power for complex patterns.
- **Figure 5**: Real-world data analysis results for three drug-ADE pairs: (A) lisinopril-gabapentin-AKI, (B) meloxicam-clopidogrel-GI bleeding, (C) spironolactone-lisinopril-AKI, showing estimated ORs for each dose level under different models.
  - *Significance*: Illustrates the practical utility of DAM in revealing more nuanced dose-risk relationships than simpler models, and highlights potential overestimation by dose-response models.

---

### Code & Reproducibility Assessment
Model codes are publicly available at github.com/PengyueLab/DAM. The paper does not provide a full simulation code repository, but the method is described in sufficient detail for replication. Real-world data (Optum Clinformatics) are proprietary and not publicly available, but summary statistics are provided in supplementary materials.

---

### Future Directions
Future work could extend DAM to handle more than two drugs, incorporate continuous dose levels, and develop adaptive hyperparameter selection. Permutation-based inference for type I error control should be formalized. Validation in external databases (e.g., EHRs, other countries) and prospective studies would strengthen clinical utility. Integration with pharmacokinetic/pharmacodynamic models could provide mechanistic insights.

---

### Expert Commentary
This is a thoughtful contribution to the DDI literature, addressing a real gap in dose-aware pharmacovigilance. The use of constrained partitions is elegant and computationally efficient. The simulation results are convincing, though the choice of BIC for model selection is debatable; alternative criteria (e.g., cross-validation) might be more robust. The real-world examples illustrate the potential to uncover clinically meaningful dose-risk patterns that simpler models miss. The method is a welcome addition to the pharmacoepidemiology toolbox, but users should be mindful of the assumptions and the need for clinical input in defining dose levels.

---

### Bottom Line
DAM provides a practical and statistically sound approach to estimate dose-risk relationships for drug-drug interactions from real-world data, outperforming standard models in bias and model fit when the true relationship is complex. It is a valuable tool for pharmacoepidemiologists and pharmacometricians seeking to identify dose-dependent DDI risks and inform dose adjustment strategies, though careful clinical adjudication of dose levels and control for multiple testing are recommended.

---

---

## 📊 Figures

![Examples of meaningful and less-meaningful dose-risk relationships.]({{ site.baseurl }}/assets/digests/2026-10-17-a-dose-aware-model-for-revealing-dose-risk-relationship-of-drug-drug-interaction/figures/fig_01.jpg)

![(A) An illustration of a set difference-based algorithm to identify meaningful partitions of doses. (B) An illustration of the dose-aware model (DAM) for estimat]({{ site.baseurl }}/assets/digests/2026-10-17-a-dose-aware-model-for-revealing-dose-risk-relationship-of-drug-drug-interaction/figures/fig_02.jpg)

![Simulation settings and results.]({{ site.baseurl }}/assets/digests/2026-10-17-a-dose-aware-model-for-revealing-dose-risk-relationship-of-drug-drug-interaction/figures/fig_03.jpg)

![Empirical statistical powers in simulation study.]({{ site.baseurl }}/assets/digests/2026-10-17-a-dose-aware-model-for-revealing-dose-risk-relationship-of-drug-drug-interaction/figures/fig_04.jpg)

![Real-world data analyses results (A, B for dose: A < dose ≤ B). (A) Lisinopril, gabapentin, and acute kidney injury (AKI); (B) meloxicam, clopidogrel, and gastro]({{ site.baseurl }}/assets/digests/2026-10-17-a-dose-aware-model-for-revealing-dose-risk-relationship-of-drug-drug-interaction/figures/fig_05.jpg)