---
layout: post
title: "Beyond Traditional Covariates: An Interpretable Machine Learning Workflow for Improved Hybrid Pharmacometric Modeling"
date: 2026-08-06
authors: "Relouw FJA, Luyten JJMT, Preijers T, Schouten SDT, van Rongen NAW, Koch BCP"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70313"
paper_type: ai-ml
tags: [ai-ml, covariate-analysis, machine-learning]
excerpt_text: "This paper presents a hybrid ML-popPK workflow that uses MAP-BE-derived empirical Bayes estimates (EBEs) of vancomycin clearance and central volume as training targets for XGBoost and symbolic regression models built on 50 clinical features from MIMIC-IV. The hybrid models improved a priori trough concentration prediction error by up to ~20% over traditional covariate models, with XGBoost achieving the highest accuracy (CL R² 0.42→0.70) and symbolic regression providing interpretable equations that surfaced non-traditional predictors (RDW, BUN). The workflow is presented as a generalizable strategy for data-adaptive reparameterization of existing popPK models without full re-estimation."
pdf_path: "/assets/digests/2026-08-06-beyond-traditional-covariates-an-interpretable-machine-learning-workflow-for/PMx_Beyond_Traditional_Covariates_An_Interpr_20260806.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a hybrid ML-popPK workflow that uses MAP-BE-derived empirical Bayes estimates (EBEs) of vancomycin clearance and central volume as training targets for XGBoost and symbolic regression models built on 50 clinical features from MIMIC-IV. The hybrid models improved a priori trough concentration prediction error by up to ~20% over traditional covariate models, with XGBoost achieving the highest accuracy (CL R² 0.42→0.70) and symbolic regression providing interpretable equations that surfaced non-traditional predictors (RDW, BUN). The workflow is presented as a generalizable strategy for data-adaptive reparameterization of existing popPK models without full re-estimation.

---

### Executive Summary
The authors propose a hybrid pharmacometric workflow that integrates machine learning into established two-compartment vancomycin population PK models to improve a priori individualized parameter estimation in critically ill ICU patients. Using MIMIC-IV data (n=1316), they derived individual CL and Vc estimates via MAP-BE from a single trough TDM observation, then trained XGBoost and symbolic regression models on 50 clinical features to predict these parameters without requiring TDM input. Both hybrid approaches outperformed the reference popPK covariate models: XGBoost improved CL R² from 0.42 to 0.70 (Garibay model) and reduced trough RMSE from 7.31 to 5.92 mg/L, while symbolic regression produced interpretable equations with slightly lower accuracy (CL R² 0.63). The workflow preserves mechanistic model structure while enabling data-driven refinement, and identified red blood cell distribution width and blood urea nitrogen as consistent non-traditional predictors of vancomycin clearance. The authors emphasize that trained models are dataset-specific and require recalibration for external deployment.

---

### Scientific Context & Motivation
Traditional population PK covariate modeling relies on predefined covariates (age, weight, sex, SCr) and stepwise methods that may miss nonlinear, synergistic, or latent predictor effects, particularly in heterogeneous ICU populations where physiology changes rapidly. Hybrid ML-PK approaches to date have largely focused on direct concentration or AUC prediction rather than improving individualized PK parameter estimates within existing popPK models. This study addresses the gap by using MAP-BE-derived EBEs as ML targets, enabling data-adaptive reparameterization of established models and discovery of non-traditional predictors from high-dimensional EHR data, while preserving mechanistic interpretability.

---

## ⚡ Methodological Snapshot
The workflow operates in three stages. First, MAP-BE (via the MAPBAYR R package) is applied to two published two-compartment vancomycin popPK models (Garibay, Goti) using MIMIC-IV data (n=1316 ICU patients), incorporating dosing records, a single trough TDM measurement, and standard covariates to produce individual posterior estimates of CL and Vc (EBEs). Second, these EBEs serve as regression targets for two ML approaches: XGBoost (gradient-boosted trees with Optuna/TPE hyperparameter tuning, 5-fold CV, 500 trials) and symbolic regression (PySR with parsimony coefficient 5.0, 200 candidate functions per complexity level, 1-15 interaction terms, basic operators only). Third, ML-predicted CL and Vc are reinserted into the original PK equations to simulate a priori vancomycin trough concentrations without TDM input. Feature importance from XGBoost guides dimensionality reduction (top-8 features) for SR. The design deliberately excludes calculated CRCL in favor of its components to allow unbiased discovery of renal determinants.

---

## 🤖 Task Framing
The task is regression: predict individual vancomycin clearance (CL, L/h) and central volume of distribution (Vc, L) from 50 clinical features, where the targets are MAP-BE-derived EBEs. The downstream objective is improved a priori trough concentration prediction (before TDM is available) to support model-informed precision dosing in critically ill ICU patients. This parameter-level framing differs from prior hybrid approaches that directly predict concentrations or AUC, and it preserves the mechanistic structure of the popPK model for arbitrary dosing simulation.

---

### Dataset Description
Data were sourced from MIMIC-IV version 3.1 (Beth Israel Deaconess Medical Center, de-identified ICU records). Inclusion criteria: no renal replacement therapy, available key covariates, ≥3 vancomycin doses before TDM, therapy ≥12h, TDM >5h after last dose, TDM within 48h of initiation, no extreme outliers (|z|>5), complete dosing info. Final dataset: 1316 patients (62.8% male, median age 62.6 years, median weight 81 kg). Features: 50 clinical variables spanning demographics, disease scores (SOFA, APSIII), renal function, electrolytes, metabolism, hematology, liver function, blood gas, and vital signs, with missingness up to 46.6% (height). Missing data were retained without imputation. Data were split 80/20 train/test; SR additionally used 3-fold CV on reduced datasets (top-8 features, complete cases only).

---

### Model Architecture
Two model families were used. (1) XGBoost: gradient-boosted decision trees with per-model Optuna-tuned hyperparameters (e.g., Garibay CL: max depth 5, learning rate 0.025, 768 estimators, L1 α=5.0, L2 λ=0.041, subsample 0.536; Garibay Vc: max depth 4, learning rate 0.021, 464 estimators). Separate models were trained for CL and Vc for each base popPK model (4 total). (2) Symbolic regression via PySR: genetic-algorithm-based search over mathematical expressions using addition, subtraction, multiplication, division, and exponentiation (restricted to single variables/constants), with complexity levels 1-15, parsimony coefficient 5.0, 200 candidate functions per complexity, 150 optimization iterations, single-threaded with fixed random seed.

---

### Training Details
XGBoost: Optuna optimization with Tree-structured Parzen Estimator (TPE) sampler, 500 trials per model, objective to maximize R² on 5-fold cross-validation of the training set (80% of data). Regularization included L1 (α) and L2 (λ) penalties, column sampling, subsampling, and minimum child weight. SR: PySR with MSE objective, 3-fold cross-validation on reduced datasets (patients with complete data for top-8 features), parsimony coefficient 5.0 balancing complexity vs. accuracy, 150 iterations, random seed control for reproducibility. Both approaches used 80/20 train/test splits.

---

### Evaluation Metrics
Primary metrics: R² (coefficient of determination), RMSE (root mean squared error), and MAPE (mean absolute percentage error) for PK parameter prediction (CL, Vc) and for a priori trough concentration prediction. Baselines: reference popPK models evaluated on the same test set (rf.) and on the full dataset (fl.). rRMSE (relative RMSE) also reported for trough concentrations. Goodness-of-fit plots with linear regression and identity line provided visual assessment. No formal statistical significance testing (e.g., bootstrap CIs or paired tests) was reported. SR results were reported across all folds to assess stochastic variability.

---

### Deployment Caveats
The trained XGBoost models and SR equations are specific to MIMIC-IV and should not be transferred to other settings without retraining or recalibration, as population differences, data collection practices, and missingness patterns could substantially alter performance. SR equations lack physiological/monotonicity constraints and should not be applied beyond training covariate ranges (Table 1). The workflow's reliance on MAP-BE targets inherits shrinkage and single-trough limitations, potentially biasing toward CL over Vc. The observed performance gains partly reflect data-conditioning effects (training and evaluation on the same dataset). Clinical deployment requires prospective external validation, integration into clinical decision support software, and assessment of whether RMSE reductions translate into changed dosing decisions and improved target attainment. The inverse relationship between base-model IIV and ML performance suggests the approach may be less effective for drugs/models with high IIV, where MAP-BE targets are more uncertain.

---

## 📊 Key Findings
1) XGBoost hybrid models improved CL prediction R² from 0.42 to 0.70 (Garibay) and 0.64 to 0.70 (Goti), with corresponding Vc R² improvements from 0.56 to 0.77 and 0.35 to 0.45. 2) A priori vancomycin trough concentration RMSE decreased from 7.31 to 5.92 mg/L (Garibay, ~19% reduction) and MAPE from 44.6% to 28.0%. 3) Symbolic regression achieved interpretable equations with slightly lower accuracy (CL R² 0.63, trough RMSE 5.90 mg/L for Garibay), demonstrating a clear accuracy-interpretability trade-off. 4) Red blood cell distribution width (RDW) and blood urea nitrogen (BUN) were consistently identified as non-traditional predictors of vancomycin clearance, complementing established renal function markers. 5) ML performance showed an inverse relationship with base-model IIV magnitude, reflecting uncertainty propagation from MAP-BE targets into ML training. 6) The workflow is model-agnostic and adaptable to other drugs and populations, though trained models require local recalibration.

---

### Strengths & Limitations

#### Strengths
- Novel workflow that refines PK parameter estimation within existing popPK models rather than predicting concentrations directly, preserving mechanistic structure and enabling arbitrary dosing regimen simulation
- Use of two independent popPK base models (Garibay, Goti) to assess consistency of identified predictor associations across model structures
- Deliberate exclusion of calculated CRCL in favor of its components (SCr, age, weight) to allow unbiased discovery of renal function determinants
- Rigorous hyperparameter tuning via Optuna with TPE sampler and 5-fold cross-validation (500 trials per model)
- Dual modeling approach (XGBoost for accuracy, symbolic regression for interpretability) explicitly characterizing the accuracy-interpretability trade-off
- Transparent handling of missing data (retained without imputation, treating missingness as potentially informative)
- Code and data availability (GitHub repository, MIMIC-IV open access)
- Honest discussion of shrinkage, data-conditioning effects, and the associational (non-causal) nature of identified predictors

#### Limitations (Acknowledged by Authors)
- MAP-BE with single trough observation may bias estimates toward CL over Vc; ideal estimation requires both peak and trough measurements
- EBE shrinkage constrains the parameter space accessible to ML models and may attenuate predictor associations
- Performance improvements partly reflect data-conditioning effects (ML trained on MIMIC-IV vs. reference models developed on different cohorts)
- SR implemented without physiological or monotonicity constraints, risking implausible functional forms outside training covariate ranges
- No direct comparison with GAM, SCM, FFEM, or FREM covariate methods
- MIMIC-IV data quality concerns (possible undocumented administrations, near-simultaneous dosing/TDM)
- Trained models are dataset-specific and should not be transferred without recalibration

#### Limitations (Expert Review)
- No external validation cohort; all evaluation is within-dataset, limiting confidence in generalizability despite the workflow's methodological portability
- The clinical significance of RMSE reductions (e.g., 7.31→5.92 mg/L) is discussed qualitatively but not quantified in terms of dosing decision impact or target attainment rates
- SR models used only top-8 features and excluded patients with missing values, potentially introducing selection bias and reducing comparability with XGBoost results
- No statistical significance testing (e.g., bootstrap CIs, paired tests) reported for performance differences between hybrid and reference models
- The inverse IIV-performance relationship is observed but not formally modeled or tested as a hypothesis
- Single TDM per patient limits the ability to assess within-patient temporal dynamics, which are clinically relevant in ICU settings
- Vp was fixed to population typical values without IIV, potentially underestimating true parameter uncertainty

#### Generalizability
The methodological workflow is designed to be drug- and dataset-agnostic and is a genuine strength. However, the trained XGBoost models and SR equations are specific to MIMIC-IV's patient population, feature availability, and missingness patterns. The authors appropriately caution against direct transfer without retraining or recalibration on local data. External prospective validation in different ICU cohorts and health systems is needed to establish clinical utility. The framework's reliance on MAP-BE-derived targets also inherits the limitations of the base popPK model priors.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the proposed hybrid workflow: popPK model → MAP-BE → EBE targets (CL, Vc) → XGBoost/SR training on 50 clinical features → reinsertion of ML-predicted parameters into PK equations for a priori trough prediction.
  - *Significance*: Provides the conceptual framework of the entire study, illustrating how ML refines PK parameter estimation within an established popPK structure without TDM input at prediction time.
- **Figure 2**: Goodness-of-fit plots comparing MAP-BE-derived trough concentrations against observed TDM values for both Garibay and Goti base models.
  - *Significance*: Validates that MAP-BE successfully reconstructs individual concentration-time profiles and establishes the quality of the training targets for subsequent ML models.
- **Table 1**: Baseline characteristics of the 1316 MIMIC-IV patients, including demographics, disease scores, renal function, electrolytes, metabolism, hematology, liver function, blood gas, and vital signs with missingness percentages.
  - *Significance*: Documents the high-dimensional feature set (50 features) and the heterogeneity of the ICU population, including substantial missingness in several features (e.g., height 46.6%, albumin 44.9%).
- **Table 3**: XGBoost hyperparameters (Optuna-tuned) and performance metrics (R², RMSE) for CL and Vc prediction, plus trough concentration RMSE, rRMSE, and MAPE, compared against reference (rf.) and full-dataset (fl.) baselines for both base models.
  - *Significance*: Central quantitative results demonstrating XGBoost's superiority over traditional covariate models, with detailed hyperparameter transparency for reproducibility.
- **Table 4**: Symbolic regression performance metrics and SR expressions for CL and Vc across both base models, with complexity levels and comparison to baselines.
  - *Significance*: Quantifies the accuracy-interpretability trade-off and provides the interpretable equations that constitute the practical output for clinical implementation.

---

### Code & Reproducibility Assessment
Scripts are openly available on GitHub (https://github.com/fja-relouw/Hybrid_PK_Modelling) and data are accessible via MIMIC-IV (https://doi.org/10.13026/07hj-2a80). The paper reports detailed hyperparameter configurations (Optuna trials, tree depth, learning rate, regularization) and SR settings (parsimony coefficient 5.0, 200 candidate functions, 150 iterations), supporting reproducibility. Random seed control and single-threaded execution were used for SR. However, the stochastic nature of SR means reported equations are non-unique, and the paper appropriately reports results across all folds.

---

### Supplementary Materials
Supplementary materials include Table S1 (XGBoost hyperparameter search space), Tables S2-S3 (SR equations across all three cross-validation folds), and Figures S1-S4 (XGBoost feature importance rankings and goodness-of-fit plots for both base models). These provide additional transparency into model tuning and the stochastic variability of SR solutions.

---

### Future Directions
Logical next steps include: (1) prospective external validation in independent ICU cohorts and health systems; (2) extension to continuous infusion regimens and longitudinal TDM measurements with time-series models (e.g., recurrent or transformer architectures) to capture temporal changes in renal function and inflammation; (3) formal comparison with GAM, SCM, FFEM, and FREM covariate methods; (4) integration of SHAP-based interpretability alongside SR equations for richer mechanistic insight; (5) incorporation of physiological or monotonicity constraints in SR to improve plausibility; (6) assessment of clinical impact via dosing decision simulations and target attainment metrics; and (7) development of software tools embedding ML-enhanced popPK models into clinical decision support systems.

---

### Expert Commentary
This work represents a thoughtful contribution to the emerging hybrid ML-PK literature. The decision to target PK parameters (CL, Vc) rather than concentrations directly is methodologically sound, as it preserves the mechanistic structure of the popPK model and enables simulation under arbitrary dosing regimens. The use of two base models to check consistency of predictor associations is a good practice that strengthens confidence in findings like RDW and BUN. However, the within-dataset evaluation and reliance on single-trough MAP-BE targets are significant caveats; the reported R² improvements partly reflect the ML models being trained on the same data distribution they are evaluated on. The inverse relationship between base-model IIV and ML performance is an important observation that deserves formal investigation, as it suggests fundamental limits to EBE-based ML approaches when priors are weakly informative. The clinical translation pathway remains unclear—a 20% RMSE reduction in trough prediction is promising but needs to be tied to dosing decisions and patient outcomes. Overall, this is a well-executed proof-of-concept that advances the field's understanding of how ML can complement, rather than replace, pharmacometric modeling.

---

### Bottom Line
For pharmacometricians and ML practitioners, this paper demonstrates a practical, reproducible workflow for enhancing a priori PK predictions by training ML models on MAP-BE-derived EBEs within existing popPK frameworks. XGBoost provides the best accuracy (trough RMSE reduced ~20%), while symbolic regression offers interpretable equations suitable for clinical implementation. The key takeaway is that hybrid ML-popPK approaches can meaningfully improve initial dosing precision before TDM is available, but trained models must be recalibrated locally, and the identified non-traditional predictors (RDW, BUN) warrant prospective validation as potential covariates.

---

---

## 📊 Figures

![Overview of the proposed workflow. A population PK (popPK) model from literature is obtained, implemented, and evaluated on the acquired clinical data. Using the]({{ site.baseurl }}/assets/digests/2026-08-06-beyond-traditional-covariates-an-interpretable-machine-learning-workflow-for/figures/fig_01.jpg)

![Results of the vancomycin trough concentrations calculated using the MAP-BE-derived EBEs compared with the observed TDM values for the studies from Garibay et al]({{ site.baseurl }}/assets/digests/2026-08-06-beyond-traditional-covariates-an-interpretable-machine-learning-workflow-for/figures/fig_02.jpg)