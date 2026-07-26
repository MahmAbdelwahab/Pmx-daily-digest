---
layout: post
title: "LSTM-Based Prediction of Human PK Profiles and Parameters for Intravenous Small Molecule Drugs Using ADME and Physicochemical Properties"
date: 2026-07-26
authors: "Luo P, Chen R, Wang Z, Li Y, Zhang T"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025, 14(12): 2210-2220"
doi: "10.1002/psp4.70128"
paper_type: ai-ml
tags: [ai-ml, pbpk]
excerpt_text: "An LSTM-based autoregressive model predicts full IV concentration-time profiles in humans using only ADME descriptors and dose, achieving $R^2=0.75$ on C-t profiles with only 40 training compounds. Performance is comparable to PBPK and other ML methods but with minimal data requirements, though terminal-phase predictions suffer from error accumulation."
pdf_path: "/assets/digests/2026-07-26-lstm-based-prediction-of-human-pk-profiles-and-parameters-for-intravenous-small/PMx_LSTMBased_Prediction_of_Human_PK_Profile_20260726.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
An LSTM-based autoregressive model predicts full IV concentration-time profiles in humans using only ADME descriptors and dose, achieving $R^2=0.75$ on C-t profiles with only 40 training compounds. Performance is comparable to PBPK and other ML methods but with minimal data requirements, though terminal-phase predictions suffer from error accumulation.

---

### Executive Summary
Luo et al. developed an autoregressive LSTM framework that predicts full intravenous concentration-time profiles in humans using only ADME/physicochemical descriptors (from ADMETlab 3.0) and dose information. Trained on simulated data from 40 drugs and tested on 18, the model achieved an $R^2$ of $0.75$ for C-t profiles and predicted 77.8% of Cmax values within 2-fold error, demonstrating accuracy comparable to PBPK and other ML methods that require larger datasets or more experimental inputs. The approach is particularly notable for its minimal data requirements and potential to reduce animal testing, though it suffers from error accumulation in the terminal elimination phase.

---

### Scientific Context & Motivation
Accurate prediction of human PK profiles is critical for early drug development, but traditional methods (IVIVE, PBPK) require extensive experimental data and time-consuming calibration. ML methods have been applied to predict ADME parameters and, more recently, C-t profiles, but most require large compound datasets (hundreds to thousands) or rely on preclinical animal data. There is a need for methods that can predict full human PK profiles from minimal inputs (chemical structure only) to enable early-stage lead prioritization and reduce animal testing. This study addresses the gap by using an autoregressive LSTM that leverages dense simulated time-series data from a small number of compounds.

---

## ⚡ Methodological Snapshot
The authors propose a two-stage autoregressive LSTM framework. First, an MLP (Initial Model) predicts dose-normalized Cmax from 39 ADME descriptors. Then, two LSTM-MLP hybrid modules (CM1 with window size 1, CM2 with window size 5) sequentially predict the full 24-hour concentration-time profile. CM1 predicts early time points using Cmax, ADME descriptors, and dose; CM2 takes the predicted sequence from CM1 and continues autoregressively. All concentrations are log-transformed. Feature selection via SHAP analysis reduced the feature set from 40 to 19 (IM) and 27 (CMs). The model was trained with a weighted L1-MSE loss using the Adam optimizer. This design leverages the temporal structure of PK data to learn effectively from a small number of compounds by generating dense training sequences through sliding windows.

---

## 🤖 Task Framing
The task is multivariate time-series prediction: given a set of static compound features (ADME descriptors) and dose, predict the full 24-hour concentration-time profile following IV bolus administration. This is framed as an autoregressive sequence prediction problem where each time step's concentration is predicted from the previous time step's concentration, ADME descriptors, and dose. The key challenge is learning the temporal dynamics of drug elimination from a small number of compounds by leveraging dense simulated data.

---

### Dataset Description
58 small molecule drugs (40 training, 18 test) from diverse therapeutic classes (antibiotics, anticancer, CNS). For each drug, concentration-time profiles were simulated at 0.1-h intervals over 24 h at three dose levels using published PopPK/compartmental models (PKPDsim R package). ADME and physicochemical descriptors (39 features) were generated from SMILES strings using ADMETlab 3.0. Dose information was included as an additional feature. The training set comprised ~40,000 data points. The test set's molecular weight and property distributions were within the training set range.

---

### Model Architecture
Three-module architecture: (1) Initial Model (IM): MLP with 3 hidden layers (128, 64, 32 neurons), ReLU activation, dropout (0.2). (2) Combined Model 1 (CM1): LSTM (1 layer, 64 hidden units) + MLP (64, 32, 1), window size=1. (3) Combined Model 2 (CM2): LSTM (1 layer, 64 hidden units) + MLP (64, 32, 1), window size=5 (optimized). Input features: 39 ADME descriptors + dose (40 total, reduced via SHAP). Output: log-transformed concentration at next time step. Autoregressive: each prediction feeds into the next time step's input.

---

### Training Details
Implemented in PyTorch 2.1.1. Optimizer: Adam. Loss function: weighted combination of L1 loss and MSE (weighted L1-MSE). Learning rate scheduling: not explicitly detailed (likely fixed or reduced on plateau). Batch size: not specified. Training details for IM, CM1, and CM2 are provided in Method Section S2. The autoregressive training uses a sliding window approach to generate overlapping subsequences from the full 24-h profiles (240 time points at 0.1-h intervals). Log-transformed concentrations are used as targets. No explicit regularization beyond dropout (0.2) in the MLP layers is mentioned. Computational resources (GPU type, training time) are not reported.

---

### Evaluation Metrics
Primary metrics: $R^2$, median fold error (MFE), geometric mean fold error (GMFE), and proportion within 2-fold error. For C-t profiles: $R^2=0.75$, MFE=2.50, 41.6% within 2-fold. For PK parameters: Cmax (77.8% within 2-fold), $CL$ (55.6%), $V_{ss}$ (61.1%), $MRT$ (83.3%), $T_{1/2}$ (55.6%). Comparisons were made with published ML (DeepCt, XGBoost, RF, Alchemite), ML-PBPK hybrid, PBPK, and mechanism-based models. No formal statistical tests (e.g., bootstrap, cross-validation) were reported for model comparison.

---

### Deployment Caveats
The model is limited to IV bolus administration and may not generalize to oral or other routes. The autoregressive LSTM accumulates errors in the terminal phase, leading to biased predictions at low concentrations. Performance depends on input dose level, and the optimal dose varies by compound. The model requires uniformly spaced time steps, limiting applicability to real-world sparse or irregularly sampled PK data. The small compound set ($n=58$) raises concerns about generalizability to novel chemical space. ADME descriptors are predicted by ADMETlab 3.0, introducing additional uncertainty.

---

## 📊 Key Findings
The LSTM-based model predicted human IV C-t profiles with $R^2=0.75$, outperforming published ML and PBPK methods in profile $R^2$. 77.8% of Cmax predictions fell within 2-fold error. $MRT$ was the best-predicted PK parameter (83.3% within 2-fold). Model performance correlated with ADME descriptor space (t-SNE clustering), enabling a priori confidence estimation. The autoregressive design caused error accumulation in the terminal phase, leading to lower accuracy for $T_{1/2}$ and $CL$. Despite training on only 40 compounds, the dense simulated time series (~30,000 data points) provided sufficient signal for effective learning.

---

### Strengths & Limitations

#### Strengths
- Novel application of autoregressive LSTM to human IV PK profile prediction
- Achieves competitive accuracy with far fewer compounds than other ML methods
- Uses only in silico ADME descriptors and dose, minimizing experimental data needs
- t-SNE clustering analysis provides insight into a priori confidence estimation
- Comprehensive comparison with multiple published methods across 6 PK endpoints
- Potential to reduce animal testing in early drug development

#### Limitations (Acknowledged by Authors)
- Small dataset focused solely on IV administration
- Instability between CM1 and CM2 modules
- Deviations in terminal (elimination) phase predictions
- LSTM requires uniformly spaced time steps
- Model not yet validated for oral or other routes

#### Limitations (Expert Review)
- No external validation on real clinical PK data (all data simulated from published models)
- No uncertainty quantification or confidence intervals on predictions
- Autoregressive error accumulation not explicitly addressed (e.g., through teacher forcing or scheduled sampling)
- Comparison with published methods is informal (no statistical tests, different datasets/conditions)
- SHAP feature selection performed on the full dataset, not within cross-validation, risking data leakage
- No ablation study to isolate contribution of LSTM vs. MLP components

#### Generalizability
Limited by small compound set ($n=58$), focus on IV bolus only, and reliance on simulated data from published PK models. Performance on novel chemical scaffolds or non-linear PK is untested. The model's dependence on ADMETlab 3.0 predictions introduces additional uncertainty.

---

---

### Figures & Tables

- **Figure 1**: Overview of study design and model architecture: IM (MLP for Cmax), CM1 (LSTM+MLP, window=1), CM2 (LSTM+MLP, window=5).
  - *Significance*: Clarifies the two-stage autoregressive prediction pipeline and how ADME descriptors, dose, and prior concentrations are combined.
- **Figure 2**: Predicted vs. observed dose-normalized C-t profiles for 18 test compounds (average of 3 dose levels).
  - *Significance*: Visual assessment of overall profile prediction quality; shows good alignment for most compounds but visible deviations in terminal phase for some.
- **Figure 3**: Log-log scatter of predicted vs. observed concentrations (a) and log2 fold error over time (b).
  - *Significance*: Reveals increasing bias and variance at later time points and lower concentrations, highlighting the autoregressive error accumulation problem.
- **Figure 4**: Predicted vs. observed Cmax and PK parameters ($CL$, $V_{ss}$, $T_{1/2}$, $MRT$) on log-log scale.
  - *Significance*: Shows that most PK parameter predictions fall within 2- to 5-fold error, with $MRT$ performing best (83.3% within 2-fold).
- **Figure 5**: t-SNE projection of 58 compounds colored by dataset (a) and by k-means cluster with best-performance dose (b).
  - *Significance*: Demonstrates that compounds with similar ADME properties cluster together and show consistent prediction accuracy and optimal dose levels, suggesting a priori confidence estimation.
- **Table 1**: Comparison of window sizes for CM2: $R^2$, RMSE, MAPE for windows 2, 3, 5, 7, 10.
  - *Significance*: Window size 5 selected as optimal ($R^2=0.88$, RMSE=1.57 mg/L), balancing temporal feature extraction and robustness.
- **Table 2**: Comprehensive comparison of this study's performance metrics with published ML, PBPK, and mechanism-based methods across 6 PK endpoints.
  - *Significance*: Shows that the LSTM model achieves the highest $R^2$ for C-t profiles (0.75) among reviewed studies, with competitive fold-error metrics despite smaller training set.

---

### Code & Reproducibility Assessment
Code and data are not publicly available; the authors state that datasets are available from the corresponding author upon reasonable request.

---

### Supplementary Materials
Supplementary materials include Table S1 (list of 39 ADME descriptors and SHAP selection results), Table S2 (full list of 58 compounds with dose levels and prediction performance), Table S3 (comparison with ADMETlab 3.0 predictions), Figure S1 (distribution of molecular weight and properties in training/test sets), Figure S2 (dose-normalized C-t profiles at four input doses for selected compounds), and Figure S3 ($CL$ and $V_{ss}$ predictions vs. ADMETlab 3.0). Method sections S1-S3 provide details on metrics, model architecture, and SHAP calculation.

---

### Future Directions
Expand to oral administration and other routes; incorporate Neural ODEs or hybrid mechanistic-ML architectures to improve terminal-phase predictions; validate on real clinical PK data with sparse sampling; explore adaptive loss weighting to balance high- and low-concentration regions; increase compound diversity and dataset size; integrate uncertainty quantification for confidence-aware predictions.

---

### Expert Commentary
This paper represents a pragmatic step toward 'structure-only' PK prediction, but the reliance on simulated training data from published PK models is a double-edged sword: it enables dense temporal sampling but may not capture the true variability and noise of real clinical data. The autoregressive LSTM design is clever for time-series extrapolation but inherently fragile—errors compound, especially in the terminal phase where concentration changes are small. The t-SNE clustering analysis linking ADME descriptor space to prediction accuracy is insightful and could guide compound selection for prospective use. However, the small compound set ($n=58$) and lack of external validation limit confidence in generalizability. The comparison with ADMETlab 3.0's direct predictions (Figure S3) is revealing: the LSTM model shows less bias (MFE closer to 1) but lower $R^2$, suggesting it may be more robust for rank-ordering compounds than for precise parameter estimation. Future work should address the terminal-phase bias, perhaps by hybridizing with a mechanistic terminal slope model or using Neural ODEs.

---

### Bottom Line
This LSTM-based framework offers a practical, data-driven alternative for early human IV PK prediction using only ADME descriptors and dose, achieving accuracy comparable to PBPK and other ML methods while requiring far fewer compounds. It is most suitable for early-stage lead prioritization and virtual screening, but its autoregressive design leads to error accumulation in the terminal phase, limiting reliability for half-life and clearance estimates.

---

---

## 📊 Figures

![Overview of the study design and model architecture. (1) Chemical structures of the selected drugs were collected and represented as SMILES strings. (2) Based on]({{ site.baseurl }}/assets/digests/2026-07-26-lstm-based-prediction-of-human-pk-profiles-and-parameters-for-intravenous-small/figures/fig_01.jpg)

![Predicted dose-normalizedC-tprofiles in the testing set. Each profile represents the average of three dose levels per compound. Solid lines indicate observed val]({{ site.baseurl }}/assets/digests/2026-07-26-lstm-based-prediction-of-human-pk-profiles-and-parameters-for-intravenous-small/figures/fig_02.jpg)

![Predicted versus observed concentrations (mg/L) in the testing dataset on a log–log scale (a).log2-transformed fold error (FE) over time (b). The red dashed line]({{ site.baseurl }}/assets/digests/2026-07-26-lstm-based-prediction-of-human-pk-profiles-and-parameters-for-intravenous-small/figures/fig_03.jpg)

![Predicted versus observed forCmaxand PK parameters in the testing set on a log–log scale (a). The red dashed line represents line of identity indicating a 1:1 co]({{ site.baseurl }}/assets/digests/2026-07-26-lstm-based-prediction-of-human-pk-profiles-and-parameters-for-intravenous-small/figures/fig_04.jpg)

![t-SNE plot of 58 compounds based on ADME descriptors (a). Point color indicates dataset (blue: Training, orange: Testing), and shape indicates prediction accurac]({{ site.baseurl }}/assets/digests/2026-07-26-lstm-based-prediction-of-human-pk-profiles-and-parameters-for-intravenous-small/figures/fig_05.jpg)