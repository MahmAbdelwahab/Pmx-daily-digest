---
layout: post
title: "Reliable Apparent Permeability Prediction Through Benchmarking, Stability, Uncertainty Quantification, and Explainable Machine Learning"
date: 2026-08-15
authors: "Mondal R, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(8)"
doi: "10.1002/psp4.70305"
paper_type: ai-ml
tags: [ai-ml, machine-learning]
excerpt_text: "This study benchmarks four molecular representations (descriptors, MRGCN, VAE, Mol2Vec) across three regressors (ε-SVR, RF, NN) for Caco-2 apparent permeability (log Papp) prediction. The MRGCN+RF combination was designated best for its consistent performance and favorable uncertainty behavior (R²=0.65, RMSE=0.43 on test; R²=0.54 on independent data), with SHAP-based interpretation confirming alignment with established physicochemical principles and jackknife+ providing reliable confidence intervals."
pdf_path: "/assets/digests/2026-08-15-reliable-apparent-permeability-prediction-through-benchmarking-stability/PMx_Reliable_Apparent_Permeability_Predictio_20260815.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study benchmarks four molecular representations (descriptors, MRGCN, VAE, Mol2Vec) across three regressors (ε-SVR, RF, NN) for Caco-2 apparent permeability (log Papp) prediction. The MRGCN+RF combination was designated best for its consistent performance and favorable uncertainty behavior (R²=0.65, RMSE=0.43 on test; R²=0.54 on independent data), with SHAP-based interpretation confirming alignment with established physicochemical principles and jackknife+ providing reliable confidence intervals.

---

### Executive Summary
The authors construct a curated Caco-2 permeability dataset from three public sources and systematically evaluate 12 representation-regressor combinations for predicting log Papp. Molecular descriptor representations (RDKit+Mordred, 2309 features) achieved the highest test R² (0.68 with ε-SVR), while MRGCN-based representations demonstrated superior out-of-distribution generalization on scaffold-split independent data (R²=0.54 with RF). SHAP analysis revealed that TPSA, nBase, and MolLogP dominate predictions, with dependence plots showing non-linear lipophilicity effects consistent with known PK principles. Jackknife+ uncertainty quantification showed 96.12% coverage of true values at 95% confidence on test data. The work addresses critical gaps in model interpretability, data leakage control, and uncertainty quantification for permeability QSPR models.

---

### Scientific Context & Motivation
Caco-2 cell permeability (Papp) is a key in vitro surrogate for intestinal drug absorption, but the 21–24 day culture period makes it expensive and slow. Existing ML models for Papp prediction largely operate as black boxes with limited interpretability, and prior comparisons between graph-based and descriptor-based representations have been incomplete. Additionally, overlapping datapoints between train/test splits after SMILES canonicalization can lead to inflated performance estimates. This study addresses these gaps by systematically benchmarking four representations across three regressors, incorporating scaffold-based OOD evaluation, SHAP-based interpretability, and distribution-free uncertainty quantification via jackknife+.

---

## ⚡ Methodological Snapshot
The study systematically evaluates four molecular representations—(1) 2309 RDKit+Mordred molecular descriptors with feature selection, (2) 500-dimensional MRGCN embeddings from multi-relational molecular graphs with 17 atom-level features, (3) 300-dimensional VAE embeddings pretrained on 39M ZINC SMILES, and (4) Mol2Vec embeddings—each paired with three regressors (ε-SVR, RF, NN). Data is curated from three public Caco-2 datasets with filtering for biologically relevant atoms, MW<900 Da, and low-variance replicates. Evaluation includes random splits with 10-fold CV plus Bemis-Murcko scaffold-based OOD splits. Interpretability uses SHAP values for RF/NN with Morgan fingerprint substructure analysis. Uncertainty quantification employs jackknife+ for distribution-free confidence intervals.

---

## 🤖 Task Framing
Regression task: predict log-transformed Caco-2 apparent permeability (log Papp) from molecular structure (SMILES). This is a QSPR (quantitative structure-property relationship) problem critical for early ADME screening in drug discovery, where accurate in silico prediction can replace expensive and time-consuming (21–24 day) in vitro Caco-2 assays. The task is framed as a supervised learning problem with continuous target values, evaluated on both in-distribution (random split) and out-of-distribution (scaffold split) test sets.

---

### Dataset Description
Caco-2 permeability dataset curated from three public sources (Wang et al., Chen et al., Falcón-Cano et al.). Filtering criteria: (i) only biologically relevant atoms (C, H, N, O, S, P, Br, Cl, F, I), (ii) MW < 900 Da, (iii) low standard deviation across replicate measurements. The unified dataset was partitioned into train, validation, and test sets (n=3515 for test set per Table 2). An independent scaffold-based split (Bemis-Murcko) was generated for OOD evaluation. Labels are experimentally measured log Papp values with inherent inter-lab variability. No class imbalance issues (regression task), but potential label noise from experimental variability across source datasets.

---

### Model Architecture
Three regressors evaluated: (1) ε-SVR (epsilon-support vector regression) with RBF kernel, (2) Random Forest (RF) with default hyperparameters, (3) Neural Network (NN) with multi-layer perceptron architecture. Four feature representations: (1) Molecular descriptors: 2309 RDKit+Mordred features reduced via feature selection; (2) MRGCN: multi-relational graph convolutional network producing 500-dimensional embeddings from molecular graphs with 17 atom-level node features and bond-type-specific adjacency tensors; (3) VAE: 300-dimensional latent embeddings from a variational autoencoder pretrained on 39M ZINC SMILES (63-token vocabulary, one-hot encoding); (4) Mol2Vec: pretrained unsupervised molecular embeddings. The best-performing combination was MRGCN representation with RF regressor.

---

### Training Details
MRGCN was trained to produce molecular embeddings (500-dim) using multi-relational graph convolution with 3D adjacency and degree tensors. VAE was pretrained on ZINC (39M SMILES) with reconstruction objective. Regressors were trained on the curated dataset with standard optimization: RF with ensemble of decision trees, NN with backpropagation, ε-SVR with RBF kernel. 10-fold cross-validation was applied across all 12 combinations to ensure split-independence. Feature selection was applied to descriptors. Hyperparameter details for NN (layers, learning rate, regularization) and RF (tree count, depth) are not fully specified in the extracted content—likely in supplementary materials.

---

### Evaluation Metrics
Primary metrics: R² (coefficient of determination), RMSE (root mean squared error), MAE (mean absolute error). Additional metrics: percentage of datapoints with prediction error <10% and <20% of original value. Evaluation protocols: (1) random train/validation/test split, (2) 10-fold cross-validation for split-independence, (3) Bemis-Murcko scaffold-based splitting for OOD assessment. Uncertainty evaluation: jackknife+ confidence intervals with coverage assessment of true and predicted values at multiple α levels (0.001–0.10). Baseline comparisons: Falcón-Cano et al. (R²=0.61, RMSE=0.43, MAE=0.33) and Wang et al. (R²=0.55, MAE=0.39). No formal statistical significance testing (e.g., paired t-tests) between model combinations was reported.

---

### Deployment Caveats
The model's moderate R² (~0.65) limits its use as a standalone decision tool; it is best suited for early-stage compound prioritization and triage. Performance degrades on scaffold-disjoint data (R²=0.54), indicating reduced reliability for novel chemotypes. Jackknife+ coverage on independent data (86.73% at α=0.01) falls below nominal confidence, suggesting miscalibration under distribution shift. Activity-cliff failures (structurally similar compounds with divergent permeability) represent a fundamental limitation of similarity-based approaches. The model is trained on Caco-2 data, which may not perfectly reflect human intestinal absorption; integration with PBPK models would require careful translation. For deployment, users should monitor applicability domain (e.g., molecular weight, lipophilicity ranges) and consider periodic retraining as new permeability data becomes available.

---

## 📊 Key Findings
1) MRGCN-based representations were more generalizable than molecular descriptors, particularly on scaffold-split independent data (R²=0.54 vs 0.44–0.45 for descriptors). 2) Molecular descriptors with ε-SVR achieved the highest test-set R² (0.68), but MRGCN+RF was designated best overall due to consistency and uncertainty behavior. 3) SHAP analysis identified TPSA, nBase, and MolLogP as dominant descriptors; the RF model revealed a non-linear lipophilicity relationship where permeability increases up to MolLogP≈5.0 then declines, consistent with known PK principles. 4) Jackknife+ confidence intervals at α=0.01 covered 96.12% of true and 99.87% of predicted log Papp values on test data. 5) Error analysis revealed activity-cliff limitations where structurally similar molecules have divergent permeability, suggesting the need for graph-isomorphic architectures.

---

### Strengths & Limitations

#### Strengths
- Comprehensive benchmarking of 12 representation-regressor combinations with consistent preprocessing and evaluation protocols
- Scaffold-based (Bemis-Murcko) splitting for out-of-distribution generalization assessment, addressing data leakage concerns
- Integration of SHAP-based interpretability with substructure-level (Morgan fingerprint) analysis linking model behavior to physicochemical principles
- Distribution-free, model-agnostic uncertainty quantification via jackknife+, providing calibrated confidence intervals without distributional assumptions
- 10-fold cross-validation across all combinations to ensure split-independence of results
- Explicit error analysis on worst-performing molecules with KNN-based nearest-neighbor comparison to diagnose activity cliffs

#### Limitations (Acknowledged by Authors)
- Similarity-based models fail on activity cliffs where structurally similar molecules have substantially different permeability values
- VAE representation performed poorly, attributed to lack of physicochemical descriptor information in training
- Performance drops on independent scaffold-split data, indicating limited extrapolation to novel chemotypes

#### Limitations (Expert Review)
- The test R² of 0.68 (best) remains moderate, suggesting substantial unexplained variance in permeability prediction
- No explicit handling of experimental variability across source datasets beyond standard deviation filtering; inter-lab variability may still confound labels
- Jackknife+ coverage on independent data (86.73% at α=0.01) falls short of nominal 95%, indicating calibration drift under distribution shift
- SHAP analysis limited to RF and NN regressors; ε-SVR (which achieved best test R²) was excluded from interpretability analysis
- No comparison with modern transformer-based or graph-isomorphism architectures that may better handle activity cliffs
- The 'best model' designation (MRGCN+RF) is based on qualitative consistency rather than statistically significant superiority over descriptor-based approaches

#### Generalizability
The MRGCN+RF model showed reasonable generalization to scaffold-disjoint independent data (R²=0.54), but performance degradation from test (R²=0.65) to independent (R²=0.54) sets indicates sensitivity to chemical space shift. The model is trained on Caco-2 permeability data, which may not fully represent human intestinal absorption across all compound classes. The curated dataset (biologically relevant atoms, MW<900 Da) limits applicability to typical drug-like space but may underperform for novel modalities (e.g., PROTACs, peptides).

---

### Key Equations

**Apparent Permeability**

{% raw %}
$$
P_{app}
$$
{% endraw %}

Apparent permeability coefficient (cm/s) measured in Caco-2 assays, the primary endpoint predicted by the ML models.

**Log-transformed Permeability**

{% raw %}
$$
\log P_{app}
$$
{% endraw %}

Logarithmic transformation of apparent permeability used as the regression target to handle the wide dynamic range of permeability values.

**Coefficient of Determination**

{% raw %}
$$
R^2 = 1 - \frac{\sum_{i}(y_i - \hat{y}_i)^2}{\sum_{i}(y_i - \bar{y})^2}
$$
{% endraw %}

Primary evaluation metric quantifying the proportion of variance in observed log Papp explained by the model predictions.

---

### Figures & Tables

- **Table 1**: Comparative performance (R², RMSE, MAE, 10%/20% error thresholds) for all 12 representation-regressor combinations on test and independent datasets.
  - *Significance*: Central benchmarking result; shows descriptor+ε-SVR best on test (R²=0.68) but MRGCN+RF best on independent data (R²=0.54), supporting the 'best model' designation.
- **Table 2**: Jackknife+ uncertainty quantification results for MRGCN+RF across α levels, showing confidence values, coverage of original/predicted values, and interval lengths.
  - *Significance*: Demonstrates calibrated uncertainty: 96.12% coverage of true values at α=0.01 on test data, establishing reliability of predictions.
- **Table 3**: Comparison of model performance against previously published approaches (Falcón-Cano et al., Wang et al.).
  - *Significance*: Shows improvement over prior state-of-the-art, with ε-SVR+feature selection achieving R²=0.68 vs 0.61 baseline.
- **Figure 1**: MRGCN+RF performance plots: original vs predicted values with percentage errors on test and independent datasets, including Bland-Altman plots.
  - *Significance*: Visualizes prediction quality and near-zero systematic bias, supporting model reliability claims.
- **Figure 2**: Top 10 most influential features by SHAP values for NN and RF models, with substructure identification from Morgan fingerprints.
  - *Significance*: Establishes interpretability: TPSA, nBase, and MolLogP dominate, linking model behavior to physicochemical principles.
- **Figure 3**: SHAP dependence plots for TPSA, nBase, and MolLogP showing feature-value vs SHAP-value relationships for NN and RF models.
  - *Significance*: Reveals non-linear lipophilicity effect (peak at MolLogP≈5.0) in RF model, consistent with known PK principles and demonstrating model plausibility.
- **Figure 4**: Common substructures (present in ≥10% of test set) exhibiting positive and negative influences on permeability via SHAP analysis.
  - *Significance*: Provides actionable medicinal chemistry insights on which functional groups enhance or reduce permeability.

---

### Code & Reproducibility Assessment
No explicit code repository or data availability statement is provided in the extracted content. The study uses publicly available datasets (Wang et al., Chen et al., Falcón-Cano et al.) and open-source tools (RDKit, Mordred), but the specific preprocessing pipeline, MRGCN architecture, and training configurations are only partially described in supplementary materials (Data S1–S9). Full reproducibility would require release of the curated dataset and model training code.

---

### Supplementary Materials
Supplementary materials (Data S1–S9) include: source dataset details, MRGCN architecture and node feature selection, feature selection pipeline, scaffold-based splitting methodology, 10-fold CV results (Table S8), OOD performance (Table S9), jackknife+ details and results for all combinations (S7, S21), RMSE/RMV uncertainty comparison (S8), substructure analysis methodology (S9), and error analysis case studies (Figures S4–S7).

---

### Future Directions
1) Application of graph isomorphic networks (GIN) or other expressive GNN architectures to address activity-cliff limitations. 2) Multi-task learning across related ADME endpoints (e.g., Papp, P-gp substrate, fraction absorbed) to leverage shared information. 3) Incorporation of experimental variability as label noise in training to improve robustness. 4) Prospective validation against newly measured Caco-2 data to assess temporal drift. 5) Extension to human intestinal absorption (Fa%) prediction to bridge the gap between in vitro surrogate and clinical relevance. 6) Benchmarking against large language model-based molecular representations (e.g., MolT5, ChemBERTa).

---

### Expert Commentary
This paper represents a solid, methodical contribution to the ADME ML literature. The systematic benchmarking across representations and regressors, combined with rigorous OOD evaluation and uncertainty quantification, sets a good standard for the field. The key insight—that graph-based representations generalize better than descriptor-based ones despite similar in-distribution performance—is valuable and aligns with broader trends in molecular ML. However, the modest absolute performance (R²≈0.65) and the acknowledged activity-cliff failures highlight that permeability prediction remains challenging. The jackknife+ uncertainty framework is a particularly welcome addition, as most prior QSPR models lack calibrated uncertainty estimates. From a pharmacometrics perspective, the integration of such ML predictions with PBPK models (e.g., as prior distributions for Peff) would be a natural next step to leverage these models in a quantitative systems pharmacology framework.

---

### Bottom Line
For practitioners building permeability QSPR models, this paper demonstrates that graph-based representations (MRGCN) combined with tree ensembles (RF) offer the best balance of predictive accuracy, out-of-distribution robustness, and uncertainty calibration. The integration of SHAP interpretability and jackknife+ uncertainty quantification provides a template for trustworthy ADME ML models. However, the moderate R² (~0.65) and activity-cliff failures underscore that ML permeability prediction should complement, not replace, experimental screening for critical decisions.

---

---

## 📊 Figures

![MRGCN with RF model performance plot on test and independent test sets: (a) and (b) Original vs. predictedvalues with percentage (%) errors on test and independe]({{ site.baseurl }}/assets/digests/2026-08-15-reliable-apparent-permeability-prediction-through-benchmarking-stability/figures/fig_01.jpg)

![Most influencing features. (a) and (b) Top 10 most important features according to average absolute SHAP values for NN and RF model, respectively. Blue and red c]({{ site.baseurl }}/assets/digests/2026-08-15-reliable-apparent-permeability-prediction-through-benchmarking-stability/figures/fig_02.jpg)

![Dependence plots for the common most influential features for Neural Network (NN) and Random Forest (RF) models: (a, d) Topological polar surface area (TPSA); (b]({{ site.baseurl }}/assets/digests/2026-08-15-reliable-apparent-permeability-prediction-through-benchmarking-stability/figures/fig_03.jpg)

![Common substructures (present in at leastof the test set) exhibiting (a) positive and (b) negative influences on thevalue using SHAP analysis for the descriptors]({{ site.baseurl }}/assets/digests/2026-08-15-reliable-apparent-permeability-prediction-through-benchmarking-stability/figures/fig_04.jpg)