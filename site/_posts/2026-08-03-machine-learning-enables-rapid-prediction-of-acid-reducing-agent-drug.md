---
layout: post
title: "Machine Learning Enables Rapid Prediction of Acid-Reducing Agent Drug Interactions: A Streamlined Complement to PBPK Modeling"
date: 2026-08-03
authors: "Qin Y, Yang L, Chen T, Zuo Y, Peng Q, Yin G, Wei H"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, (in press)"
doi: "10.1002/psp4.70314"
paper_type: ai-ml
tags: [ai-ml, pbpk, machine-learning]
excerpt_text: "This study trains an XGBoost model on PBPK-simulated virtual drugs to rapidly predict $\\mathrm{pH}$-dependent DDI risk between weakly basic drugs and acid-reducing agents, achieving near-perfect internal fit (test $R^2=0.98$) and acceptable external clinical validation (87.5% classification accuracy, all predictions within 0.5–2.0-fold). A free web tool integrating ADMETlab 3.0 makes the approach practical for early-stage screening, positioning it as a cost-effective complement—not a replacement—for conventional PBPK modeling."
pdf_path: "/assets/digests/2026-08-03-machine-learning-enables-rapid-prediction-of-acid-reducing-agent-drug/PMx_Machine_Learning_Enables_Rapid_Predictio_20260803.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study trains an XGBoost model on PBPK-simulated virtual drugs to rapidly predict $\mathrm{pH}$-dependent DDI risk between weakly basic drugs and acid-reducing agents, achieving near-perfect internal fit (test $R^2=0.98$) and acceptable external clinical validation (87.5% classification accuracy, all predictions within 0.5–2.0-fold). A free web tool integrating ADMETlab 3.0 makes the approach practical for early-stage screening, positioning it as a cost-effective complement—not a replacement—for conventional PBPK modeling.

---

### Executive Summary
The authors present a PBPK-informed machine learning framework to predict $\mathrm{pH}$-dependent DDI risk between weakly basic drugs and acid-reducing agents, addressing the cost and expertise barriers of conventional PBPK modeling. Using 14 literature-parameterized PBPK models, they identified eight key determinants, generated 4,339 virtual drugs via PBPK simulation, and trained an XGBoost regressor that achieved near-perfect internal performance (test $R^2=0.98$, MAPE=2.64%) and reasonable external generalization to eight clinically observed drugs (MAPE=13.22%, 87.5% classification accuracy). SHAP analysis confirmed mechanistic plausibility, with solubility at $\mathrm{pH}$ 6.8 and basic $pK_a$ as dominant features. A freely accessible web tool integrating ADMETlab 3.0 structure-based estimation makes the approach available for early-stage screening, positioning it as a streamlined complement—not a replacement—for mechanistic PBPK in regulatory and development workflows.

---

### Scientific Context & Motivation
$\mathrm{pH}$-dependent DDIs occur when ARAs raise gastric $\mathrm{pH}$ and reduce the solubility and absorption of weakly basic drugs, with clinically significant exposure reductions in ~20–37% of oncology/HIV patients. While PBPK modeling is the regulatory-endorsed standard for evaluating such DDIs, it requires specialized expertise and expensive commercial software (GastroPlus, Simcyp), limiting routine use in early drug development. ML has been applied to ADME/PK prediction from molecular structure but rarely to $\mathrm{pH}$-dependent DDI prediction. The key gap this paper addresses is whether PBPK-simulated data can serve as training labels for an ML surrogate that reproduces PBPK predictive power at a fraction of the cost and expertise, enabling high-throughput DDI risk screening alongside—rather than in place of—mechanistic modeling.

---

## ⚡ Methodological Snapshot
The study adopts a 'PBPK-as-label-generator' strategy: mechanistic PBPK models (GastroPlus ACAT) for 14 weakly basic drugs are used to (a) identify key DDI determinants via one-at-a-time sensitivity analysis and (b) generate 4,339 virtual drugs by sampling parameter distributions with moderate expansion. Each virtual drug is simulated alone and with ARAs across six gastric $\mathrm{pH}$ levels to produce DDI $AUC$ ratio labels. An XGBoost regressor is then trained on 21 physicochemical/formulation/PK features to predict the DDI $AUC$ ratio. Hyperparameters (learning rate 0.1, max depth 8, $L_1/L_2$ regularization 0.1, min child weight 5, subsample 0.8, colsample 0.8, 200 iterations) were selected via grid search with 5-fold cross-validation using $R^2$. SHAP analysis provides feature attribution, and external validation uses clinical DDI data from eight independent drugs.

---

## 🤖 Task Framing
The task is a regression problem: predict the DDI $AUC$ ratio (systemic exposure change, $AUC$ with ARA / $AUC$ without) for a weakly basic drug co-administered with an acid-reducing agent, given 21 physicochemical, formulation, and pharmacokinetic input features. A secondary task is binary DDI risk classification (positive vs. negative interaction) derived from the regression output. This matters because early, low-cost identification of $\mathrm{pH}$-dependent DDI risk enables candidate prioritization and reduces reliance on expensive PBPK modeling and clinical trials during drug development.

---

### Dataset Description
Training data were generated synthetically: PBPK models (GastroPlus 9.8.2, ACAT model) were built for 14 literature-parameterized weakly basic drugs (IR tablets/capsules, fasted). One-at-a-time sensitivity analysis identified 8 influential parameters, from which 5,000 virtual drugs were generated in R with distributions derived from the reference drugs; 4,339 (after excluding DDI $AUC$ ratio $< 0.1$) were retained. Features: 21 inputs ($\log P$, $pK_a$, solubility at $\mathrm{pH}$ 6.8, particle radius, $P_{eff}$, dose, dosage form, mean precipitation time, bile salt solubilization ratio, gastric $\mathrm{pH}$, $CL$, $V_c$, $k_{12}$, $k_{21}$, $k_{13}$, etc.); label = DDI $AUC$ ratio. Stratified 80/20 train/test split. External validation: 8 independent drugs with clinically observed DDI $AUC$ ratios.

---

### Training Details
Data preprocessing: 11 features with $|\mathrm{skewness}| > 1$ were natural-log transformed; dosage form was binary-encoded. The dataset was split 80/20 (stratified) into train/test. XGBoost hyperparameters were optimized via grid search with 5-fold cross-validation (learning rate 0.1, max depth 8, $L_1/L_2$ regularization 0.1, min child weight 5, subsample 0.8, colsample 0.8, $n_{rounds}=200$), selected by cross-validated $R^2$. Average cross-validation RMSE was 0.02, suggesting adequate training without apparent overfitting. Implementation was in R (v4.4.2) with RStudio; the web application was deployed on Ubuntu 18.04 LTS. No explicit mention of GPU acceleration or training runtime; the small tabular dataset and low iteration count imply minimal compute requirements.

---

### Evaluation Metrics
Internal metrics: MSE, MAPE ($\le 30\%$ acceptance), RMSE, MAE, $R^2$; training $R^2=1.00$ (MAPE=0.99%), test $R^2=0.98$ (MAPE=2.64%). External validation: MAPE=13.22%, RMSE=0.12, MAE=0.10, $R^2=0.62$; 100% of predictions within 0.5–2.0-fold of clinical observations; DDI risk classification accuracy 87.5% (7/8). Model selection used cross-validated $R^2$ (5-fold, grid search). No formal statistical significance tests were reported for external comparisons; SHAP analysis was used for feature importance attribution.

---

### Deployment Caveats
Generalizability is bounded to weakly basic drugs, immediate-release formulations, and fasted conditions; modified-release and fed-state scenarios are not covered. The model is trained on PBPK-simulated labels from a single platform (GastroPlus), so platform-specific systematic bias propagates to predictions. External validation is small ($n=8$) and $R^2$ drops to 0.62, with the training label distribution heavily concentrated in the 0.8–1.25 range (73.5%), raising concern for regression calibration in the high-risk tail. The web tool's structure-based parameter estimation (ADMETlab 3.0) may introduce additional uncertainty for novel chemotypes. Clinical decision support should treat predictions as screening/rank-ordering signals, not definitive estimates.

---

## 📊 Key Findings
1) The PBPK-informed XGBoost model achieved excellent internal performance (training $R^2=1.00$, MAPE=0.99%; test $R^2=0.98$, MAPE=2.64%), confirming that ML can learn the nonlinear PBPK relationships from synthetic virtual drug data. 2) External validation against clinically observed data from eight independent drugs showed all predictions within 0.5–2.0-fold of observed values (MAPE=13.22%, $R^2=0.62$) and 87.5% (7/8) accuracy in DDI risk classification, indicating reasonable generalizability to unseen weakly basic drugs. 3) SHAP analysis identified solubility at $\mathrm{pH}$ 6.8, basic $pK_a$, and gastric $\mathrm{pH}$ as dominant features, consistent with established biopharmaceutic mechanisms—supporting mechanistic plausibility and potential guidance for structural optimization. 4) The underlying PBPK models misclassified DDI risk in 78% (14/18) of $AUC$-based cases, and the XGBoost model slightly underperformed full PBPK in continuous prediction but retained strong classification performance at far lower cost. 5) A freely accessible web tool integrating ADMETlab 3.0 structure-based parameter estimation enables early-stage screening from molecular structure to DDI outcome.

---

### Strengths & Limitations

#### Strengths
- Novel and well-motivated PBPK-informed ML strategy: using mechanistic PBPK simulations as a label generator for high-throughput ML screening, mirroring the 'surrogate model' paradigm.
- Rigorous multi-stage validation: internal train/test, PBPK-based external comparison, and clinical external validation with 0.5–2.0-fold acceptance criteria.
- SHAP-based interpretability confirms mechanistic plausibility (solubility at $\mathrm{pH}$ 6.8, $pK_a$, gastric $\mathrm{pH}$), grounding the model in biopharmaceutic principles rather than data-fitting artifacts.
- Systematic one-at-a-time sensitivity analysis on 14 PBPK models to identify the 8 key determinants, providing domain rationale for feature selection.
- Practical deliverable: a freely accessible web tool integrating ADMETlab 3.0 structure-based estimation, enabling use with minimal modeling expertise.
- Honest, clearly delineated scope and limitations; does not overclaim regulatory equivalence, positioning ML as a complement to PBPK.

#### Limitations (Acknowledged by Authors)
- Virtual drug dataset did not incorporate real-world correlation structures among parameters; physicochemical and PK properties are often interrelated, potentially affecting performance on real compounds.
- Training labels derived solely from GastroPlus; differences among PBPK software packages may influence model robustness and transferability.
- Model focused on DDI $AUC$ ratio only; did not include $C_{max}$ and $T_{max}$ endpoints.
- Analysis restricted to immediate-release formulations under fasted conditions; not extended to modified-release or fed states.
- Virtual drugs generated with moderately expanded parameter ranges; limited extrapolation beyond covered chemical space despite adequate external performance.
- $R^2$ drop on external validation (0.62) attributed to small external dataset size and sensitivity to outliers; ML performance upper-bounded by underlying PBPK model accuracy.

#### Limitations (Expert Review)
- External validation lacks formal statistical significance testing; with $n=8$, $R^2$ and error metrics are highly sensitive to any single outlier (e.g., vismodegib at 0.67 fold-error).
- Class imbalance in the training label distribution (73.5% in 0.8–1.25) may bias the regressor toward the no-interaction zone, inflating apparent accuracy for low-risk compounds.
- Random split of virtual drugs, rather than grouped or scaffold split, may overstate internal performance because virtual drugs share the same underlying PBPK model structure.
- No uncertainty quantification (e.g., prediction intervals, conformal prediction) is provided, limiting clinical decision-support utility.
- The comparison with alternative algorithms (LightGBM, RF, kNN, Bayesian GLM) is relegated to supplementary material without reporting statistical significance or runtime comparisons.
- The web tool's integration of ADMETlab 3.0 structure-based predictions introduces a separate error source not validated in this study.

#### Generalizability
The model generalizes to IR weakly basic drugs with clinically observed DDI data across 8 independent drugs, but the scope is explicitly bounded: IR formulations only, fasted conditions only, and $AUC$-based endpoints. The external validation set is small ($n=8$), and the training label distribution (73.5% in the 0.8–1.25 range) means the model is best calibrated in the no/low-DDI zone and less reliable in the high-risk tail. Virtual drug generation ignored real-world parameter correlations, so performance on compounds with unusual physicochemical interdependencies is uncertain. Findings should be regarded as proof-of-concept for the PBPK-informed ML paradigm rather than a production-ready general DDI predictor.

---

### Key Equations

**DDI $AUC$ Ratio**

{% raw %}
$$
DDI\ AUC\ ratio = \frac{AUC_{coadministered}}{AUC_{alone}}
$$
{% endraw %}

The primary output variable of the ML model and the standard metric for DDI magnitude; represents the ratio of systemic exposure ($AUC$) with co-administered ARA to that without, where values $< 0.8$ indicate clinically meaningful reductions.

**$\mathrm{pH}$-Dependent Solubility of Weak Base**

{% raw %}
$$
S_{total} = S_0 \left(1 + 10^{pK_a - pH}\right)
$$
{% endraw %}

Starting from the Henderson-Hasselbalch relationship, weakly basic drug solubility increases with decreasing $\mathrm{pH}$; elevation of gastric $\mathrm{pH}$ by ARAs reduces ionization and solubility, the mechanistic basis of $\mathrm{pH}$-dependent DDIs captured by the ML features.

---

### Figures & Tables

- **Figure 1**: PBPK predicted versus observed DDI $AUC$ ratio (A) and $C_{max}$ ratios (B) for the 14 reference drugs/18 clinical studies, with line of identity.
  - *Significance*: Establishes the quality of the underlying PBPK models (94.4% of $AUC_R$ within 0.5–2.0-fold) that generate the training labels; the ceiling for ML performance is set by this figure.
- **Figure 2**: Scatter plots of predicted versus observed DDI $AUC$ ratios for the XGBoost model in training set (A) and test set (B).
  - *Significance*: Demonstrates near-perfect internal fit ($R^2=1.00$ training, 0.98 test), confirming the model can learn the nonlinear PBPK relationships embedded in the virtual dataset.
- **Figure 3**: Predicted vs. observed DDI $AUC$ ratios (A) and $C_{max}$ ratios (B) from XGBoost for the eight external validation drugs.
  - *Significance*: Core generalizability evidence: all predictions within 0.5–2.0-fold of clinical values, with 87.5% of DDI risk classifications correct, supporting the model's usefulness on unseen drugs.
- **Table 1**: Summary of PBPK model performance for the 14 reference drugs against clinical DDI observations, including observed vs predicted $AUC$ ratios.
  - *Significance*: Documents the training-data source quality and the 78% $AUC$-based DDI risk classification accuracy of the underlying PBPK models.
- **Table 2**: Performance metrics (MSE, MAPE, RMSE, MAE, $R^2$) for training, test, and external validation sets.
  - *Significance*: Quantifies the internal-external performance gap ($R^2$ 1.00/0.98 vs 0.54–0.62 externally), highlighting small-sample and PBPK-bias effects on external metrics.
- **Table 3**: External validation results for eight drugs: observed clinical, PBPK-predicted, and XGBoost-predicted DDI $AUC$ ratios with fold-error ratios.
  - *Significance*: Provides the most direct evidence of real-world translational utility, showing all XGBoost predictions within 0.5–2.0-fold of clinical observations.

---

### Code & Reproducibility Assessment
A freely accessible web tool (https://ddi-antacid.xy3yx.com/) integrates structure-based ADMETlab 3.0 parameter estimation with the trained XGBoost model. However, no public code repository or training pipeline is released; the underlying data are available only upon reasonable request from the corresponding author, which limits full reproducibility.

---

### Supplementary Materials
Supplementary materials include Table S1 (PBPK input parameters for the 14 drugs), Tables S2–S3 and Figures S1–S14 (PBPK model verification against clinical PK data), Tables S4–S5 and Figures S15–S22 (one-at-a-time sensitivity analyses), Table S6 (comparison of alternative ML algorithms), Tables S7–S8 (external validation drug parameters), Table S9 (virtual drug parameter ranges/distributions), Figure S23 (DDI $AUC$ ratio distribution of virtual drugs), and Figure S24 (SHAP analysis). These materials support the reproducibility of the PBPK models and ML pipeline.

---

### Future Directions
Priority follow-ups include: (1) incorporating realistic inter-parameter correlation structures into virtual drug generation using copula or multivariate approaches derived from large compound databases; (2) expanding external validation to larger multi-center clinical DDI datasets with statistical significance testing; (3) extending the model to $C_{max}$ and $T_{max}$ endpoints and to modified-release formulations and fed-state conditions; (4) training on multi-platform PBPK labels (e.g., Simcyp, PK-Sim) to assess model robustness to platform bias; (5) integrating time-varying gastric $\mathrm{pH}$ profiles and dosing-regimen effects; and (6) exploring deep learning or uncertainty-quantified models (e.g., Bayesian neural networks, conformal prediction) to provide confidence intervals for DDI risk screening.

---

### Expert Commentary
This is a well-executed proof-of-concept that follows the emerging 'PBPK-as-label-generator' paradigm, and it is honest about its limits. The near-perfect internal performance is expected, since the model learns the same PBPK simulation that generated its labels; the real test is the external clinical set, where $R^2=0.62$ and modest sample size temper enthusiasm. The decision to focus on DDI $AUC$ ratio risk classification (87.5% accuracy) rather than precise continuous prediction is the right framing for early screening. The SHAP results aligning with known biopharmaceutic mechanisms (solubility, $pK_a$, gastric $\mathrm{pH}$) give the model credibility and suggest the virtual-data inductive bias is sound. The glaring practical gap is the lack of realistic parameter correlations in virtual drug generation—real compounds have interdependent physicochemical properties, and ignoring this could inflate apparent generalizability. The paper is a valuable template for ML-surrogate DDI screening, but the community should push toward multi-platform PBPK labels, correlated virtual populations, and larger clinical validation cohorts before regulatory trust is warranted.

---

### Bottom Line
This PBPK-informed XGBoost framework offers a practical, low-cost, and freely accessible screening tool for early-stage $\mathrm{pH}$-dependent DDI risk assessment of weakly basic drugs co-administered with ARAs. It does not replace PBPK modeling for regulatory submissions but is a credible high-throughput triage layer that can prioritize candidates for full mechanistic evaluation, provided users respect its bounded scope (IR formulations, fasted state, $AUC$-based risk).

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-08-03-machine-learning-enables-rapid-prediction-of-acid-reducing-agent-drug/figures/fig_01.jpg)

![Predicted versus observed DDI AUC ratio (A) and Cmaxratios (B). Colored symbols represent the victim drugs, the solid straight black line marks the line of ident]({{ site.baseurl }}/assets/digests/2026-08-03-machine-learning-enables-rapid-prediction-of-acid-reducing-agent-drug/figures/fig_02.jpg)

![Scatter plots of predicted versus observed DDI AUC ratios for the XGBoost model in the training set (A) and test set (B). Blue circles represent DDI AUC ratios,]({{ site.baseurl }}/assets/digests/2026-08-03-machine-learning-enables-rapid-prediction-of-acid-reducing-agent-drug/figures/fig_03.jpg)

![Predicted vs. observed DDI AUC ratios (A) and Cmaxratios (B) from XGBoost for eight drugs in external validation. Colored symbols represent the victim drugs, the]({{ site.baseurl }}/assets/digests/2026-08-03-machine-learning-enables-rapid-prediction-of-acid-reducing-agent-drug/figures/fig_04.jpg)