---
layout: post
title: "Evaluating Preclinical-to-Human Bioavailability Classification Using Smooth ROC Curve Estimation"
date: 2026-05-01
authors: "Mahmut Sami Erdoğan"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, e70248"
doi: "10.1002/psp4.70248"
paper_type: generic
tags: [generic, qsp, regulatory]
excerpt_text: "This study applies Bernstein polynomial-based smooth ROC estimation to improve interpretability of animal-to-human oral bioavailability classification. Compared to empirical ROC curves, the smooth method yields continuous curves, lower optimal thresholds (more inclusive), and comparable AUC with overlapping confidence intervals, particularly beneficial for small sample sizes."
pdf_path: "/assets/digests/2026-05-01-evaluating-preclinical-to-human-bioavailability-classification-using-smooth-roc/PMx_Evaluating_PreclinicaltoHuman_Bioavailab_20260501.pdf"
retroactively_classified: false
---

### Quick Take
This study applies Bernstein polynomial-based smooth ROC estimation to improve interpretability of animal-to-human oral bioavailability classification. Compared to empirical ROC curves, the smooth method yields continuous curves, lower optimal thresholds (more inclusive), and comparable AUC with overlapping confidence intervals, particularly beneficial for small sample sizes.

---

### Executive Summary
Reanalyzing a published dataset of 184 compounds with oral bioavailability across mouse, rat, dog, and nonhuman primates, this paper demonstrates that smooth ROC estimation using Bernstein polynomials provides more stable and interpretable classification than conventional empirical ROC curves. The smooth estimator systematically produces lower optimal thresholds, increasing sensitivity while moderately reducing specificity, and maintains comparable discriminatory power (AUC) with overlapping confidence intervals. The approach is especially valuable for species with limited sample sizes and supports more flexible, data-driven decision-making in early-stage drug development.

---

### Scientific Context & Motivation
Oral bioavailability ($F_{human}$) is a critical pharmacokinetic parameter, but direct extrapolation from animal data is hampered by weak interspecies correlations. ROC analysis offers a binary classification framework to evaluate whether animal bioavailability predicts human bioavailability above a clinically relevant threshold (e.g., 50%). However, empirical ROC curves are stepwise, discontinuous, and unstable in small-sample settings, complicating threshold determination. This study addresses the need for smoother, more interpretable ROC curves to improve classification reliability in translational pharmacokinetics.

---

## ⚡ Methodological Snapshot
The study uses a curated dataset of 184 compounds with oral bioavailability values for human and four preclinical species (mouse, rat, dog, NHP). Binary classification labels compounds as high bioavailability ($F_{human} \ge 50\%$) or low bioavailability. ROC curves are constructed by varying animal bioavailability thresholds and computing sensitivity and specificity against the human label. Two nonparametric ROC estimators are compared: (1) the empirical estimator based on empirical cumulative distribution functions (ECDFs), which yields stepwise curves, and (2) a smooth estimator using Bernstein polynomials, which produces continuous and differentiable curves. The degree of the Bernstein polynomial is selected using a rule-of-thumb criterion. Optimal thresholds are identified by maximizing Youden's index ($sensitivity + specificity - 1$). All estimates are accompanied by 95% confidence intervals derived from 10,000 bootstrap resamples.

---

## 📋 Detailed Analysis
The paper's core contribution is demonstrating that a simple nonparametric smoothing technique can substantially improve the interpretability of ROC-based classification in a translational PK context. The Bernstein estimator effectively mitigates the jaggedness of empirical ROC curves, which is particularly problematic when sample sizes are small (e.g., mouse $n=30$, NHP $n=41$). The systematic lowering of optimal thresholds is a direct consequence of smoothing: the empirical curve's step function can produce artificially high thresholds due to discrete jumps, while the smooth curve better captures the underlying continuous relationship. This shift has practical implications: compounds with animal bioavailability in the 30-50% range (depending on species) would be classified as low bioavailability by the empirical method but high by the Bernstein method. From a drug development perspective, this reduces false negatives (missing potentially good compounds) at the cost of some false positives. The extension to very low bioavailability ($\le 23\%$) is particularly interesting: the original study by Thomas et al. (2014) concluded that only rats were predictive, but the current analysis, using a slightly higher threshold and smooth ROC, finds that dogs and NHPs also show strong discrimination. This suggests that previous negative findings may have been influenced by the instability of empirical ROC curves in small samples. The bootstrap confidence intervals provide a measure of uncertainty, and the overlapping intervals between methods indicate that the smoothing does not significantly degrade overall classification performance. However, the paper does not address the optimality of the Youden index for drug development decisions, where the costs of false positives and false negatives are often asymmetric. Future work could incorporate cost-sensitive threshold selection or utility-based frameworks.

---

### Domain Context
This work sits at the intersection of translational pharmacokinetics and statistical methodology. In early drug discovery, predicting human oral bioavailability from animal data remains a challenge due to interspecies differences in absorption, metabolism, and transport. Traditional approaches rely on allometric scaling or correlation analyses, which often yield weak relationships. ROC-based classification offers a pragmatic alternative by focusing on whether a compound meets a predefined threshold (e.g., 50% bioavailability) rather than predicting exact values. The use of smooth ROC estimation is relatively novel in this domain, where empirical methods have been standard. The paper aligns with broader trends in pharmacometrics toward more robust, nonparametric, and interpretable methods for small-sample decision-making.

---

## 📊 Key Findings
1) Bernstein-based smooth ROC curves are continuous and visually coherent across all species, unlike jagged empirical curves. 2) AUC values from the Bernstein estimator are slightly lower but with overlapping 95% confidence intervals, especially in small samples (mouse $n=30$, NHP $n=41$). 3) Optimal thresholds from Bernstein are systematically lower (e.g., mouse: 35.6% vs 61.35%; rat: 29.77% vs 48.00%), leading to more inclusive classification with improved sensitivity and moderate specificity loss. 4) For detecting very low bioavailability ($F_{human} \le 23\%$), dogs and NHPs also show strong discriminatory power ($AUC > 0.8$), not just rats as previously reported.

---

### Strengths & Limitations

#### Strengths
- Uses a well-established, publicly available multispecies bioavailability dataset
- Provides clear, side-by-side comparison of empirical and smooth ROC methods
- Includes bootstrap confidence intervals for all key metrics (AUC, thresholds, sensitivity, specificity)
- Extends analysis to a clinically relevant low-bioavailability subclass ($\le 23\%$)
- Practical implications for early-stage compound prioritization and threshold selection

#### Limitations (Acknowledged by Authors)
- Bernstein estimator slightly underestimates AUC in small samples due to smoothing bias
- Smoothing introduces a trade-off between curve smoothness and discriminatory power
- Lower thresholds may increase false positives, requiring context-dependent evaluation

#### Limitations (Expert Review)
- Analysis is based on a single dataset; external validation is lacking
- Only one smoothing method (Bernstein polynomials) is compared; other approaches (e.g., kernel smoothing) are not considered
- Youden's index assumes equal cost of false positives and false negatives, which may not reflect real-world drug development priorities
- No assessment of the impact of different polynomial degree selection criteria on results
- The 23% threshold for low bioavailability, while justified, deviates from the original 20% and may affect comparability

#### Generalizability
The methodological framework (Bernstein-based smooth ROC) is generalizable to any binary classification task with continuous predictors and small samples. However, the specific optimal thresholds and AUC values are dataset-dependent and should not be directly extrapolated to other compounds or endpoints without reanalysis.

---

---

### Figures & Tables

- **Figure 3**: ROC curves for each species (mouse, rat, dog, NHP) comparing empirical (stepwise) and Bernstein (smooth) estimators.
  - *Significance*: Visually demonstrates the smoothness improvement and threshold stability of the Bernstein method, especially for small-sample species.
- **Figure 4**: ROC curves for the all-species combined dataset ($n=318$) using both estimators.
  - *Significance*: Shows the overall classification performance and the effect of smoothing on the pooled dataset.
- **Table 1**: Comparison of AUC values with 95% bootstrap confidence intervals for each species and the combined dataset.
  - *Significance*: Quantifies the trade-off: Bernstein AUCs are slightly lower but CIs overlap, indicating comparable discriminatory power.
- **Table 2**: Optimal thresholds (Youden index), sensitivity, specificity, and Youden index values with bootstrap CIs.
  - *Significance*: Highlights the systematic downward shift in thresholds with the Bernstein method and the resulting sensitivity/specificity trade-off.
- **Table 3**: AUC values for detecting very low bioavailability ($F_{human} \le 23\%$) across species.
  - *Significance*: Shows that dogs and NHPs also perform well, extending previous findings that only rats were reliable.

---

### Code & Reproducibility Assessment
No code is provided in the paper. The dataset is publicly available (from reference 8). The method is described algorithmically but not implemented in a shared repository.

---

### Future Directions
Apply the smooth ROC framework to other pharmacokinetic endpoints (e.g., clearance, half-life); compare with alternative smoothing techniques (kernel, spline); incorporate cost-sensitive threshold optimization; validate on independent datasets; extend to multi-class or continuous prediction frameworks.

---

### Expert Commentary
This paper addresses a practical pain point in translational PK: how to set animal bioavailability thresholds for human prediction. The Bernstein smoothing approach is methodologically sound and easy to implement. The lower thresholds may reduce false negatives, which is valuable in early discovery where missing a promising compound is costly. However, the trade-off in specificity should be carefully considered based on the cost of false positives. The extension to very low bioavailability is insightful, showing that dogs and NHPs may be underutilized. Overall, a useful contribution that could be readily adopted by pharmacometricians.

---

### Bottom Line
Smooth ROC estimation using Bernstein polynomials offers a practical improvement over empirical ROC for preclinical-to-human bioavailability classification, providing more stable thresholds and interpretable curves, especially when sample sizes are limited. It supports more inclusive early-stage compound selection without major loss in specificity, making it a valuable addition to the translational pharmacometrics toolkit.

---