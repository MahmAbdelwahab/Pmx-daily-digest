---
layout: post
title: "High-dimensional neural ODE model to characterize clinical pharmacokinetics of MMAE-based antibody-drug conjugates."
date: 2026-11-24
authors: "Huang, Hsien Wei, Bräm, Dominic Stefan, Chang, Hsuan-Ping, Nguyen, Anne, Ghobrial, Raphael, Shah, Dhaval K."
journal: "Journal of Pharmacokinetics and Pharmacodynamics"
doi: "10.1007/s10928-026-10072-5"
paper_type: ai-ml
tags: [ai-ml]
excerpt_text: "A small fully connected neural ODE ($2\\times 32$ SELU, dopri5, adjoint training) is trained on digitized mean clinical PK profiles of four MMAE-ADC analytes pooled across 18 products. It uses only single-dose data at 5 dose levels and extrapolates to unseen single doses (0.15–3.3 mg/kg) and Q1W/Q3W multiple-dose regimens. Single-state models (one NODE per analyte) were slightly more accurate than one joint 8-state NODE, with pooled $\\%PE$ of about $-14$ to $+40$. The paper is a proof of concept with serious data limitations and no formal statistical comparison against the mechanistic model.[^fc-1]"
pdf_path: "/assets/digests/2026-11-24-high-dimensional-neural-ode-model-to-characterize-clinical-pharmacokinetics-of/PMx_Highdimensional_neural_ODE_model_to_char_20261124.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
A small fully connected neural ODE ($2\times 32$ SELU, dopri5, adjoint training) is trained on digitized mean clinical PK profiles of four MMAE-ADC analytes pooled across 18 products. It uses only single-dose data at 5 dose levels and extrapolates to unseen single doses (0.15–3.3 mg/kg) and Q1W/Q3W multiple-dose regimens. Single-state models (one NODE per analyte) were slightly more accurate than one joint 8-state NODE, with pooled $\%PE$ of about $-14$ to $+40$. The paper is a proof of concept with serious data limitations and no formal statistical comparison against the mechanistic model.[^fc-1]

---

### Executive Summary
The authors pooled 1557 digitized study-mean concentrations (total antibody, antibody-conjugated MMAE, free MMAE, ADC) from clinical studies of vc-MMAE ADCs. They trained autonomous neural ODEs whose vector field is an MLP (2 hidden layers of 32 SELU units). Observed states are augmented with latent states initialized at zero ($1+3$ per analyte for single-state; $4+4$ for the joint model). Initial conditions are computed from dose, assumed body weight (70 kg), MW (150 kDa), DAR (4) and plasma volume (3.126 L). Training used Adam, adjoint gradients, a dose-, concentration- and count-normalized squared-error loss with an added temporal-difference (slope-matching) term, random-length time-window augmentation, and best-validation checkpointing. Only 0.1, 0.5, 1.0, 1.8 and 2.4 mg/kg single-dose data were used for training and validation; all other single doses and all multiple-dose regimens were held out. Pooled AUC-based $\%PE$ was $9.4/-11/6.6/40$ (single-state) and $5.2/-14/17/31$ (joint) for tmAb/acMMAE/fMMAE/ADC. The joint model needed 6000 vs 1000 epochs, was slightly less accurate, and showed overfitting signs on fMMAE. Qualitatively, predictions are comparable to a published mechanistic model, but ADC and some Q3W regimens are mispredicted, ADC predictions fall sharply at late times for some regimens, and extrapolation beyond the observed time range is unreliable. Study-ID 5-fold CV was unstable, producing very wide, nearly rectangular CIs, because dose levels were missing from folds. The main value is the practical training lessons; it is not yet a deployable model.

---

### Scientific Context & Motivation
ADC PK involves several analytes with distinct kinetics, and conventional compartmental, NLME and PBPK models describe them by hand-specified ODEs. Prior pharmacometric NODE work (e.g., Lu 2021, Bräm 2024, Giacometti 2025) mostly used one observed state, low dimension, or simulated or well-controlled data.[^fc-3] The authors claim, and I could not verify, that none had tested dose-dependent extrapolation on real-world data or a single NODE fitted jointly to several analytes. ADCs are a good test case: four analytes, TMDD-like nonlinearity at low doses, a zero initial condition for free MMAE, and high inter-study variability. Previous work indicates MMAE-ADC PK is similar enough across products to be pooled, which justifies a product-agnostic model. The stated aim is a foundation for pure-ML or hybrid mechanistic-ML approaches for preclinical-to-clinical translation of new ADCs.

---

## ⚡ Methodological Snapshot
Digitized mean concentration–time profiles (nM) of four analytes from vc-MMAE ADC clinical studies were used to train autonomous neural ODEs with a small MLP vector field. Observed states were padded with latent states initialized at 0 (single-state: $1+3$; fMMAE model: ADC+fMMAE+2 latent; joint: $4+4$). Initial conditions come from dose, body weight, MW, DAR and plasma volume. The ODE was integrated with dopri5 (torchdiffeq) and gradients were obtained by the adjoint method.

The loss combined a concentration-, dose- and count-normalized squared error with a temporal-difference term, with latent outputs masked. Training and validation data were augmented by truncating each profile to windows of $21/k$ days ($k = 1\ldots 10$). Models were trained on single-dose data at 0.1, 0.5, 1.0, 1.8 and 2.4 mg/kg. Remaining single-dose data (0.15–3.3 mg/kg) and all multiple-dose data (Q1W/Q3W, 0.3–3.0 mg/kg) formed the test set. The best validation checkpoint was retained.

Multiple dosing was simulated by re-solving piecewise: at each dose, the residual observed states were added to the new dose, latent states were reset to zero, and the NODE was integrated from the dose time. Performance was summarized with AUC-based $\%PE$ and visual comparison to a published mechanistic PK/PD model. A 5-fold study-ID CV ensemble was also evaluated.

---

## 🤖 Task Framing
Regression/forecasting of continuous multi-output concentration–time trajectories for four ADC analytes, given dose level only (no covariates). The model is meant to learn dose-dependent dynamics from a subset of dose levels, then extrapolate to unseen single-dose levels and to multiple-dose regimens. It is deterministic at the population-mean level, with no inter-study or inter-product variability. The motivation is to provide a data-driven alternative or complement to compartmental, NLME or PBPK models and a foundation for preclinical-to-clinical ADC PK translation. The secondary question is whether a single network can learn all four coupled analytes jointly rather than one network per analyte.

---

### Dataset Description
Sources: literature, FDA/EMA review documents, abstracts, and ClinicalTrials.gov for 18 MMAE-based ADCs with vc-MMAE linker/DAR $\approx 4$. Studies with site-specific conjugation or different linkers were excluded. Eligibility required at least one of four analytes (tmAb, conjugated mAb, free MMAE, conjugated MMAE). Control groups in DDI and organ-impairment studies were included. Mean concentration–time profiles were digitized with WebPlotDigitizer; BLQ data and records lacking dosing information were excluded.

Single-dose data: 1557 mean concentrations (nM) in total (tmAb 302, acMMAE 207, fMMAE 603, ADC 445), doses 0.1–3.3 mg/kg. Only the first dosing cycle was used for training. Dose levels with completely missing data for any of the four states were moved to the test set. The remaining dose levels (0.1, 0.5, 1.0, 1.8, 2.4 mg/kg) were randomly split into training and validation sets, with 0.1 mg/kg observations duplicated across both when only one source existed. All multiple-dose regimen data (Q1W, Q3W; 0.3–3.0 mg/kg) were test only. Data were assembled into tensors of shape $(T\times D\times S)$, with initial conditions of shape $(D\times S)$. Assumptions: $BW$ 70 kg, $MW$ 150 kDa, plasma volume 3.126 L, DAR 4. Augmentation truncated profiles to $0 \le t \le 21/k$ days, $k = 1\ldots 10$. Dose levels are imbalanced and nonlinearity (0.1 mg/kg) is present in tmAb and ADC data.

---

### Model Architecture
Autonomous NODE with a fully connected network $f_{NN}$: 3 linear layers (2 hidden layers of 32 neurons with SELU, plus a linear output layer returning dY/dt with the same dimension as the state vector). Weights were initialized $N(0, 0.01^2)$ and biases to 0. State dimensions: single-state models 1 observed + 3 latent (all analytes), except the fMMAE model, which had 2 observed (ADC as an auxiliary dose-carrying state plus fMMAE) + 2 latent. The joint model had 4 observed + 4 latent. Latent states start at zero. No time input, no covariates, no inter-individual random effects. ODE solver: dopri5 with rtol $1\mathrm{e}{-6}$, atol $1\mathrm{e}{-9}$. The architecture was deliberately held the same for single-state and joint models to enable a head-to-head comparison.

---

### Training Details
Optimizer Adam, learning rate $5\times10^{-4}$, weight decay $1\times10^{-8}$. Gradients obtained by the adjoint sensitivity method. Loss clamped at $1\times10^{-9}$ for numerical stability. Composite loss with $\lambda_{data} = 10$ and $\lambda_{temporal} = 1$, selected empirically. Normalization was by concentration, dose level, and number of observations. A log-transformed loss was tried but not used (results not shown). Latent-state outputs were masked in the loss. Epochs: 1000 for single-state and 6000 for the joint model. The validation loss was monitored only for checkpoint selection (best checkpoint kept), not for updates. Regularization included weight decay and time-window data augmentation. An alternative 5-fold CV (by study ID, and also by ADC ID, not shown) trained five models per configuration; the ensemble mean and 95% CI were used. LSODA via SciPy stalled or was slow and was replaced by dopri5. Compute resources, run time, batch size, and seeds were not reported.

---

### Evaluation Metrics
Primary metric: $\%PE$ based on $AUC_{0-tlast}$ of predicted vs observed profiles, with a symmetric-denominator formula ($\pm100\%$ = 2-fold). Reported as averages pooled across studies per analyte (Supp. Table 1) and per dataset (Supp. Table 2). Headline values: single-state $9.4/-11/6.6/40$; joint $5.2/-14/17/31$ for tmAb/acMMAE/fMMAE/ADC. Qualitative comparison with population-mean predictions of a published mechanistic PK/PD model (Chang 2024), with visual overlays for single and repeated dosing. No other quantitative metrics (RMSE, $R^2$, GMFE, $C_{max}$/$T_{max}$ error) were reported in the main text, and no formal statistical tests, bootstrap CIs on $\%PE$, or ablation of the temporal loss or latent states are shown. Baselines other than the mechanistic model were not evaluated. The 5-fold CV ensemble provides an uncertainty band but is described as unreliable.

---

### Deployment Caveats
Not ready for decision support. The model is a population-mean, covariate-free emulator trained on a few digitized study means and valid only for vc-MMAE ADCs (DAR ≈ 4) with weight-based dosing. It was not validated on a truly independent product or dataset. Predictions degrade beyond the observed time window (the authors recommend training data spanning about 5 terminal half-lives). Repeated-dose predictions rely on an ad hoc re-initialization scheme, and for ADC the model mispredicts several Q3W regimens and shows late declines. Shifts in dose range, population, bioanalytical method (different tmAb/ADC assays), payload/linker chemistry, or DAR distribution would produce data drift that the model cannot detect, as it has no uncertainty quantification or out-of-domain flagging. Non-weight-based dosing and individual-patient prediction are not supported. For regulatory or dose-selection use, expect needs for variability modeling, uncertainty quantification, external validation, and interpretability.

---

## 📊 Key Findings
1) Single-state NODEs learned all four analytes from five training dose levels. They extrapolated to unseen single doses with acceptable agreement and approximated multiple-dose Q1W/Q3W profiles, using sequential re-solving with residual states carried over, latent states reset to zero, and a new dose added to the observed states. 2) Average pooled $\%PE$ (AUC-based, $\pm100\%$ = 2-fold) was 9.4, −11, 6.6, 40 for single-state and 5.2, −14, 17, 31 for the joint 8-state model (tmAb, acMMAE, fMMAE, ADC). The ADC analyte was worst. $\%PE$ is reported only as pooled values in the main text; per-dataset values are in the supplement. 3) The joint model was harder to train (6000 epochs, fluctuating fMMAE fit signalling overfitting) and slightly less accurate than the single-state models at matched architecture. The authors suggest single-state models for predictive accuracy and the joint model if inter-analyte relationships matter. 4) The models tended toward simple (linear) solutions. tmAb predictions were roughly linear despite nonlinear low-dose data, whereas ADC predictions remained nonlinear. This behavior was sensitive to how the two 0.1 mg/kg studies were split between training and validation. 5) Multiple-dose predictions were off for ADC Q3W regimens (under-prediction at 0.3/0.6/1.2/1.8 mg/kg, over-prediction at 1.88 mg/kg). The joint model also produced faster acMMAE clearance on subsequent doses, which the authors attribute to learned coupling between ADC and acMMAE initial-state ratios. 6) Study-ID and ADC-ID 5-fold CV performed worse because folds lacked 0.1/0.5 mg/kg data. Ensemble means were acceptable for single-state models but the CIs were nearly rectangular. 7) Extrapolation beyond the training time range was poor (Supplementary Figs. 14–15). 8) Practical training recommendations: normalize the loss by concentration, dose and sample count; add a temporal-difference loss; use a non-stiff solver (dopri5) after LSODA stalled; tune the number of latent states; and cover about 5 terminal half-lives.

---

### Strengths & Limitations

#### Strengths
- Realistic and messy data: pooled clinical data across 18 ADCs and many sources, rather than synthetic or single-study data.
- Held-out test design is meaningful: unseen dose levels and unseen multiple-dose regimens, with multiple-dose data never used in training.
- Direct comparison of single-state vs joint multi-state NODEs at deliberately matched architecture, which isolates the effect of dimensionality.
- Honest reporting of failure modes: overfitting on fMMAE, CV instability, late-time ADC collapse, and poor time extrapolation.
- Useful engineering detail: loss normalization, the temporal loss, latent-state choices, solver choice, tolerances, and initialization.
- Handles the zero-initial-condition free-MMAE state by adding an auxiliary ADC state that carries dose information.
- Multiple-dose simulation via piecewise re-solving with latent-state reset is transparent and reusable.
- Minimal architecture (about $2\times32$ MLP) gives a clear stress test and a low computational burden.

#### Limitations (Acknowledged by Authors)
- Training and validation data overlap for 0.1 mg/kg (duplicated when only one source existed), which can bias checkpoint selection.
- Highly imbalanced dose coverage and incomplete analyte coverage per study; 5-fold CV was suboptimal and gave very wide CIs.
- No inter-study or inter-product variability and no covariates; single typical weight, MW, DAR and plasma volume are assumed.
- Black-box model with no physiological interpretability; the terminal slope is not constrained to be log-linear.
- Extrapolation beyond the observed time window is unreliable.
- The joint model overfits fMMAE while the other states are still converging.
- The non-stiff solver (dopri5) may not be ideal for potentially stiff PK systems.
- Model complexity was kept constant, so the joint model was not given extra capacity.
- Loss weights ($\lambda_{data} = 10$, $\lambda_{temporal} = 1$) were selected empirically and not systematically tuned.

#### Limitations (Expert Review)
- Unit of analysis is digitized study-mean curves, not individual-level data. WebPlotDigitizer error, study-level averaging, and the exclusion of BLQ data introduce bias and censoring effects not discussed. $\%PE$ therefore reflects agreement with mean profiles, not predictive performance for patients.
- Possible leakage in the 'unseen dose' test: test doses likely come from the same studies or products as training doses (e.g., dose-escalation studies), so this is not clean product- or study-level generalization. The held-out multiple-dose sets partly share products too.
- Effective sample size is very small: roughly 5 dose levels × a handful of studies per analyte. Random splitting at the study/dose-group level with 0.1 mg/kg duplication makes validation-loss selection noisy and optimistic. Results are from one seed or split, with no variance across initializations reported.
- No quantitative head-to-head against the mechanistic model (Chang 2024) or simple baselines (linear compartmental fit, dose-proportional scaling); comparisons are visual overlays. No statistical tests or uncertainty on $\%PE$.
- $\%PE$ based on $AUC_{0-tlast}$ is a coarse metric. It can hide shape errors (peak timing, terminal slope) and compensating errors, and there is no $C_{max}$, $T_{max}$, or trough accuracy for repeated dosing.
- ADC $\%PE$ of 31–40% is substantial and is not the 'acceptable' range in typical PBPK/PK qualification (e.g., within 2-fold is a very loose criterion; $\pm100\%$ = 2-fold). The sign convention (positive = overprediction) means ADC is systematically over-predicted.
- The multiple-dose strategy (adding residual states and resetting latent states) is not equivalent to training with multi-dose dynamics. Autonomous NODEs implicitly learn dose-dependent behavior from the initial state alone, so non-superposition and latent-state resets are ad hoc. The ADC-to-acMMAE coupling artifact suggests extrapolation outside the training state space. Initial states in multiple-dose simulations lie in regions unseen in training.
- Loss defined with $1/\hat{Y}$ (prediction-weighted) while the text describes normalization by observations; this can bias fitting toward under-prediction and requires clamping. It is ambiguous and could affect reproducibility.
- Calling the model 'high-dimensional' is generous. The joint model has 8 states, which is low by ML standards, and the claim of learning inter-analyte interactions is not tested (e.g., no perturbation or ablation). The assertion that the model 'understands state-to-state influence' is untested.
- The paper claims linear PK is 'favored' by NODEs as a general property, but evidence is anecdotal and confounded by data composition.
- The $21/k$-day augmentation ($k = 1\ldots 10$) yields correlated truncated copies of the same series, so effective sample size does not grow, and it also risks inflating validation performance if the validation set is augmented the same way.
- No code, data tables, or trained weights are explicitly released; data are 'in the references', which requires re-digitization.

#### Generalizability
Limited. Results apply to vc-MMAE ADCs with DAR $\approx 4$ under body-weight-based dosing in a population-mean sense, and within the training dose and time ranges. The model has no product-, target-, or patient-level inputs, so it cannot predict new ADCs or individual variability, and it was not validated on an independent external dataset or a held-out ADC product. Extrapolation to other payloads, linkers, non-weight-based regimens, or longer time horizons is unsupported.

---

### Key Equations

**Neural ODE (autonomous)**

{% raw %}
$$
\frac{dY(t)}{dt}=f_{NN}\left(Y(t);\theta\right),  Y(t_0)=Y_0,  t\in[0,T]
$$
{% endraw %}

The right-hand side of the ODE is replaced by a neural network of parameters $\theta$. Time is not an input, so the system is autonomous. State $Y$ includes observed and latent states.

**MLP vector field layers**

{% raw %}
$$
z^{(\ell)}=W^{(\ell)}h^{(\ell-1)}+b^{(\ell)},  h^{(\ell)}=\sigma_{\ell}\left(z^{(\ell)}\right),  h^{(0)}=Y(t)
$$
{% endraw %}

Fully connected network with two hidden layers of 32 neurons (SELU) and a linear output layer that returns $dY/dt$ for all states, including latent states.

**Composite training loss**

{% raw %}
$$\begin{aligned}
L(\theta) \\
&= \lambda_{data}\sum_{r}\frac{1}{r N_r}\sum_{q,s,t}\frac{(Y_{r,q,s,t}-\hat{Y}_{r,q,s,t})^2}{\hat{Y}_{r,q,s,t}}+\lambda_{temporal}\sum_{r}\frac{1}{r N_{\Delta,r}}\sum_{q,s,t}\frac{(\Delta Y_{r,q,s,t}-\Delta\hat{Y}_{r,q,s,t})^2}{\hat{Y}_{r,q,s,t}}
\end{aligned}$$
{% endraw %}

Concentration-, dose- ($r$) and count-normalized squared error plus a temporal-difference term that matches successive-point slopes. The weights were set empirically to $\lambda_{data} = 10$ and $\lambda_{temporal} = 1$.

**Temporal difference**

{% raw %}
$$
\Delta Y_{r,q,s,t}=Y_{r,q,s,t+1}-Y_{r,q,s,t};  \Delta\hat{Y}_{r,q,s,t}=\hat{Y}_{r,q,s,t+1}-\hat{Y}_{r,q,s,t}
$$
{% endraw %}

Difference between successive time points for observations and predictions, used in the slope-matching term.

**Initial condition for ADC/tmAb**

{% raw %}
$$
tmAbs_{IC}(nM)=ADCs_{IC}(nM)=\frac{dose_{adc}\cdot BW/MW\cdot 10^{6}}{V_{plasma}}
$$
{% endraw %}

Dose-based initial concentration assuming $BW = 70$ kg, $MW = 150$ kDa and a plasma volume of 3.126 L; acMMAE is multiplied by DAR (4), and fMMAE starts at 0.

**Percent prediction error (AUC-based)**

{% raw %}
$$
\%PE=\begin{cases}\frac{AUC_{pred}-AUC_{obs}}{AUC_{obs}}\times100 & AUC_{pred}\ge AUC_{obs}\\ \frac{AUC_{pred}-AUC_{obs}}{AUC_{pred}}\times100 & AUC_{pred}<AUC_{obs}\end{cases}
$$
{% endraw %}

Symmetric-style $\%PE$ based on $AUC_{0-tlast}$. A value of $\pm100\%$ corresponds to a 2-fold difference between predicted and observed profiles.

---

### Figures & Tables

- **Figure 1**: Distinct kinetics of the four ADC analytes (panel a) and the data-processing/train-validation-test workflow (panel b).
  - *Significance*: Frames the multi-analyte problem and clarifies that multiple-dose data were never used for training.
- **Figure 2**: Summary of the single-dose dataset (a) and dose-normalized profiles of the training/validation data (b).
  - *Significance*: Shows the dose coverage, the nonlinearity at 0.1 mg/kg and the inter-study variability that limit training.
- **Figure 3**: Three NODE architectures: single observed state + latent states (a), fMMAE + auxiliary ADC state + latent states (b), and joint four-analyte model (c).
  - *Significance*: Core design of the study; the auxiliary ADC state solves the zero-initial-condition problem for fMMAE.
- **Figure 4**: Training progression (epochs 0, 200, 500, 1000) for the four single-state NODE models on log-concentration axes, colored by dose.
  - *Significance*: Shows learning dynamics from flat predictions to correct shapes, including the TMDD-like ADC trend and the free-MMAE peak and shoulder.
- **Figure 5**: Training progression (epochs 0, 200, 2000, 6000) of the joint four-analyte NODE.
  - *Significance*: Shows slower convergence and residual error at low-dose ADC, and the context for the fMMAE overfitting trade-off.
- **Figures 6–9**: Single-state NODE predictions vs observed study means and the mechanistic model for tmAb (6), acMMAE (7), fMMAE (8) and ADC (9), for single doses (0.1–3.3 mg/kg) and Q1W/Q3W regimens.
  - *Significance*: Primary test of dose and regimen extrapolation; show under/over-prediction for some ADC Q3W regimens and late NODE ADC decline.
- **Figure 10**: Joint multi-state NODE predictions vs observations and the mechanistic PK/PD model for all four analytes, single and repeated dosing.
  - *Significance*: Shows slightly worse accuracy than single-state models, faster acMMAE clearance after subsequent doses, and the late ADC decline.
- **Supplementary Tables 1–2**: Pooled and per-dataset $\%PE$ values.
  - *Significance*: Quantitative basis for the headline performance, referenced in the text but not extracted here.

---

### Code & Reproducibility Assessment
No code repository or model weights are mentioned in the text; data are described as 'all included in this paper or in the references', so the digitized dataset must be re-created. Software is named (PyTorch, torchdiffeq dopri5 with rtol $1\mathrm{e}{-6}$/atol $1\mathrm{e}{-9}$, adjoint method, Adam, SciPy, matplotlib) and key hyperparameters are given ($2\times32$ SELU, lr $5\times10^{-4}$, weight decay $1\times10^{-8}$, loss clamp $1\times10^{-9}$, $\lambda_{data} = 10$, $\lambda_{temporal} = 1$, $N(0, 0.01^2)$ weight init, 1000/6000 epochs). Not clearly specified: random seeds, exact train/validation assignments, batch size, number of latent-state initializations, the exact study list per dose, and the normalization formula (some ambiguity between observed and predicted values in the $1/\hat{Y}$ term). Supplementary PDF (Tables 1–2, Figs. 1–15) was not available in extracted form. Reproducibility is therefore moderate at best.

---

### Supplementary Materials
The supplementary PDF (about 3.8 MB) was not available as extracted text. Per the main text, it contains the pooled and per-dataset $\%PE$ tables (Supp. Tables 1–2), train/validation loss curves (Supp. Fig. 1), the 5-fold CV single-state results with ensemble means and 95% CIs (Supp. Figs. 2–5), the CV joint-model results (Supp. Fig. 6), clearer per-analyte joint-model plots (Supp. Figs. 7–13), and the time-extrapolation failure cases (Supp. Figs. 14–15).

---

### Future Directions
(1) Add inter-product and covariate inputs (structural descriptors, target, linker, patient factors) and train on individual-level or population data. (2) Hybrid mechanistic/NODE or PINN-style 'grey-box' constraints (e.g., log-linear terminal phase, mass balance) to improve interpretability and time extrapolation. (3) Train with both single- and multiple-dose data and test non-autonomous (time-dependent) formulations and proper dosing event handling. (4) Add uncertainty quantification (ensembles, Bayesian NODEs, mixed-effects NODEs) and use censoring-aware losses for BLQ data. (5) Rigorous validation: hold out entire ADC products or studies, repeat over seeds, compare against NLME/PBPK and simple baselines with statistical tests. (6) Test stiff solvers and architectures with greater capacity for the joint model. (7) Use the framework for preclinical-to-clinical translation of new ADCs.

---

### Expert Commentary
The honesty about failure modes is refreshing, and the results are reasonable for the amount of data available. Several points temper the headline. First, the setting is closer to a regression on a handful of mean curves than to a data-rich ML problem, so differences between single-state and joint models (e.g., $\%PE$ of 17 vs 6.6 for fMMAE) are within what a different split could change; no seed-to-seed variance is shown. Second, the 'unseen dose' framing is easier than it sounds when test doses come from the same products and often the same studies; the harder, more relevant test, an unseen ADC product, is not performed. Third, comparing against the mechanistic model only visually leaves open whether the NODE adds anything. A fair benchmark would also include a simple compartmental model or dose-scaling baseline. Fourth, the multiple-dose procedure shows a known weakness of autonomous NODEs: a vector field learned from single-dose trajectories is queried at novel state combinations (residuals plus a fresh dose), and the odd acMMAE behavior and late ADC collapse are symptoms of extrapolating outside the training manifold. Fifth, an additive latent-state reset is ad hoc and not guaranteed to preserve mass-balance. The practical recommendations (normalizing by dose and count, temporal-difference loss, five terminal half-lives, using non-stiff solvers with caution, inspecting intermediate fits) are valuable for pharmacometricians trying NODEs, and the paper is best read as a field guide rather than evidence of superiority.

---

### Bottom Line
This is a thoughtful proof of concept showing that a very small NODE can fit and moderately extrapolate multi-analyte ADC mean PK across dose levels and to Q1W/Q3W regimens. The training notes are the most useful part. It is not a validated predictive tool: it rests on digitized means, small and imbalanced data, a loose AUC-based $\%PE$, and no variability or covariates. A mechanistic or NLME model remains the default for ADC PK. NODE users should adopt the loss-normalization and solver lessons, but add independent product- or study-level hold-out, individual-level data, and proper baselines before claiming advantage.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The paper is a proof of concept with serious data limitations and no formal statistical comparison against the mechanistic model.” → correction: “This study provides proof of concept for training a NODE model on high-dimensional, highly variable real-world PK data.”
[^fc-2]: **NUMERIC_MISMATCH** — original: “The authors pooled 1557 digitized study-mean concentrations of total antibody, antibody-conjugated MMAE, free MMAE and ADC from clinical studies of vc-MMAE ADCs.” → correction: “The single dose regimen PK data includes 1557 “mean” concentrations in the unit of nanomolar at various time points from all sources. The total record numbers are 302, 207, 603, and 445 for tmAbs, acMMAE, fMMAE, and ADCs, respectively.”
[^fc-3]: **UNSUPPORTED** — original: “Prior pharmacometric NODE work (e.g., Lu 2021, Bräm 2024, Giacometti 2025) mostly used one observed state, low dimension, or simulated or well-controlled data.” → correction: “the published NODE approaches are restricted to single-state PK/PD prediction, or in other words, the objective function only calculated from the difference between observation and prediction of one single state.”
[^fc-4]: **UNSUPPORTED** — original: “Regulatory or dose-selection use would require variability modeling, uncertainty quantification, external validation and interpretability.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **CONTRADICTED** — original: “The authors acknowledge the non-stiff solver dopri5 may not be ideal for potentially stiff PK systems.” → correction: “Final model performance was acceptable even though dopri5 is a non-stiff solver and traditional PK models could possibly be stiff.”
[^fc-6]: **UNSUPPORTED** — original: “Random seeds, exact train/validation assignments, batch size, number of latent-state initializations, exact study list per dose and the normalization formula are not clearly specified.” → correction: “The remaining dose levels are 0.1, 0.5, 1.0, 1.8, 2.4 mg/kg which is randomly divided into training dataset and validation dataset.”
[^fc-7]: **UNSUPPORTED** — original: “Future directions include uncertainty quantification (ensembles, Bayesian NODEs, mixed-effects NODEs) and censoring-aware losses for BLQ data.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “Future directions include rigorous validation holding out entire ADC products or studies, repeating over seeds, and comparing against NLME/PBPK and simple baselines with statistical tests.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “The expert commentary states that differences between single-state and joint models (e.g., fMMAE %PE of 17 versus 6.6) are within what a different split could change, and no seed-to-seed variance is shown.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “The expert commentary states the unseen-dose framing is easier than it sounds when test doses come from the same products and often the same studies, and an unseen ADC product test was not performed.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The expert commentary states that comparing against the mechanistic model only visually leaves open whether the NODE adds anything, and a fair benchmark would include a simple compartmental or dose-scaling baseline.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “The expert commentary states the odd acMMAE behavior and late ADC collapse are symptoms of extrapolating outside the training manifold, a known weakness of autonomous NODEs.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “The expert commentary states the additive latent-state reset is ad hoc and not guaranteed to preserve mass balance.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “The expert commentary states the paper is best read as a field guide rather than evidence of superiority.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-11-24-high-dimensional-neural-ode-model-to-characterize-clinical-pharmacokinetics-of/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-11-24-high-dimensional-neural-ode-model-to-characterize-clinical-pharmacokinetics-of/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-11-24-high-dimensional-neural-ode-model-to-characterize-clinical-pharmacokinetics-of/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-11-24-high-dimensional-neural-ode-model-to-characterize-clinical-pharmacokinetics-of/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-11-24-high-dimensional-neural-ode-model-to-characterize-clinical-pharmacokinetics-of/figures/fig_05.png)

![Figure 6]({{ site.baseurl }}/assets/digests/2026-11-24-high-dimensional-neural-ode-model-to-characterize-clinical-pharmacokinetics-of/figures/fig_06.png)

![Figure 7]({{ site.baseurl }}/assets/digests/2026-11-24-high-dimensional-neural-ode-model-to-characterize-clinical-pharmacokinetics-of/figures/fig_07.png)

![Figure 8]({{ site.baseurl }}/assets/digests/2026-11-24-high-dimensional-neural-ode-model-to-characterize-clinical-pharmacokinetics-of/figures/fig_08.png)

![Figure 9]({{ site.baseurl }}/assets/digests/2026-11-24-high-dimensional-neural-ode-model-to-characterize-clinical-pharmacokinetics-of/figures/fig_09.png)

![Figure 10]({{ site.baseurl }}/assets/digests/2026-11-24-high-dimensional-neural-ode-model-to-characterize-clinical-pharmacokinetics-of/figures/fig_10.png)