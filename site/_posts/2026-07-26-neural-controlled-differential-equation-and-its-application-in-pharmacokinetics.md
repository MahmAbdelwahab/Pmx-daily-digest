---
layout: post
title: "Neural Controlled Differential Equation and Its Application in Pharmacokinetics and Pharmacodynamics"
date: 2026-07-26
authors: "Wu Z, Li P, Chen R, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70146"
paper_type: ai-ml
tags: [ai-ml]
excerpt_text: "This paper introduces Neural Controlled Differential Equations (NCDE) for data-driven PK/PD modeling, demonstrating accurate fitting and extrapolation across five simulated scenarios with multiple dosing. NCDE flexibly incorporates continuous, discontinuous, and constant inputs while preserving interpretability through learned dynamics that correspond to underlying biological processes. Key practical insights include the superiority of AdaMax over Adam optimizer and the importance of L1 regularization for stable training."
pdf_path: "/assets/digests/2026-07-26-neural-controlled-differential-equation-and-its-application-in-pharmacokinetics/PMx_Neural_Controlled_Differential_Equation__20260726.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper introduces Neural Controlled Differential Equations (NCDE) for data-driven PK/PD modeling, demonstrating accurate fitting and extrapolation across five simulated scenarios with multiple dosing. NCDE flexibly incorporates continuous, discontinuous, and constant inputs while preserving interpretability through learned dynamics that correspond to underlying biological processes. Key practical insights include the superiority of AdaMax over Adam optimizer and the importance of L1 regularization for stable training.

---

### Executive Summary
This paper introduces Neural Controlled Differential Equations (NCDE) as a novel machine learning method for data-driven modeling of PK and PD profiles, particularly in multiple dosing scenarios. Through systematic simulation studies across five PK/PD settings, the authors demonstrate that NCDE can accurately fit and extrapolate irregularly sampled data, flexibly incorporate continuous, discontinuous, and constant inputs, and learn interpretable dynamics that correspond to underlying biological processes. Key methodological insights include the importance of L1 regularization and AdaMax optimizer for stable training, and the ability to recover derivative dynamics and phase-plane diagrams ($dy/dt$ vs. $y$) that align with known pharmacokinetic/pharmacodynamic principles.

---

### Scientific Context & Motivation
Traditional PK/PD modeling relies on hypothesis-driven ODEs, which are interpretable but time-consuming and require expert knowledge. Neural ODEs (NODEs) offer a data-driven alternative but struggle with discontinuous dynamics (e.g., multiple dosing) and cannot easily incorporate non-state variables (e.g., time since last dose). Latent-ODEs handle complex inputs but sacrifice interpretability and produce probabilistic outputs. NCDE addresses these gaps by directly incorporating control variables, enabling modeling of discontinuous dynamics and flexible input integration while maintaining interpretability through direct correspondence between learned and actual dynamics.

---

## ⚡ Methodological Snapshot
The authors implement Neural Controlled Differential Equations (NCDE) using the Diffrax library (JAX-based). NCDE extends neural ODEs by allowing the vector field to be controlled by an external signal (control variable), which is constructed from input features via cubic spline interpolation. The model learns a neural network that defines the vector field $f_\theta$, and the hidden state evolves according to $dz/dt = f_\theta(z(t)) \cdot dX/dt$, where $X(t)$ is the control path. This formulation enables handling of discontinuous dynamics (e.g., at dosing times) and flexible incorporation of various input types. Training uses mean squared error loss with L1 regularization on network weights. Hyperparameter tuning explored L1 coefficient, loss function, numerical solver (Heun vs. implicit Euler), optimizer (Adam vs. AdaMax), and batch size. The final models use hidden state dimension 6–8, Heun solver (except for stiff cases), AdaMax optimizer, and L1 coefficient tuned per dataset.

---

## 🤖 Task Framing
The task is data-driven modeling of PK and PD profiles from irregularly sampled time-series data, with the goal of accurate fitting (interpolation) and extrapolation to unseen doses. This is a regression problem where the model predicts concentration or effect over time given inputs including time, time since last dose, and dose amount. The task is particularly challenging due to multiple dosing events causing discontinuities in the dynamics.

---

### Dataset Description
Five simulated PK/PD datasets: (1) IV injection PK, (2) extravascular linear elimination PK, (3) extravascular nonlinear elimination PK, (4) PD biophase model, (5) PD indirect response (IDR) model. Training: 44 groups per scenario; test: 4 groups. Each group: initial observation ($t=0$) + 19 irregularly sampled points over 9–10 dosing intervals. Gaussian noise added. Two doses (1 and 5 mg) for training; intermediate doses (2,3,4 mg) for extrapolation testing.

---

### Model Architecture
NCDE with a neural network defining the vector field $f_\theta$. Hidden state dimension: 6 (most cases) or 8 (nonlinear elimination PK). Control path $X(t)$ constructed from input features (time, time since last dose, dose) via cubic spline interpolation. The vector field is a feedforward neural network (architecture not explicitly specified but implied to be small). Numerical solvers: Heun (explicit, 2nd order) for most cases; implicit Euler for stiff systems (nonlinear elimination PK, biophase PD).

---

### Training Details
Optimizer: AdaMax (found more stable than Adam). Loss: Mean squared error + L1 regularization on network weights. L1 coefficient: tuned per dataset (range 1e-3 to 7e-3 for linear PK; lower for nonlinear dynamics). Batch size: 8 (with dataset size 44). Numerical solver: Heun (explicit) for most cases; implicit Euler for stiff systems. Training iterations: 8001 for hyperparameter tuning; presumably more for final models (not specified). Framework: Diffrax (JAX-based). No mention of learning rate scheduling, early stopping, or cross-validation. Computation: not detailed, but JAX provides GPU acceleration. Reproducibility: methodology described but no public code provided; Diffrax library is open-source.

---

### Evaluation Metrics
Train MSE, Test MSE, $R^2$ score, MAE, L1 norm of model parameters. Visual inspection of fitting and extrapolation curves. t-SNE projection of model parameters to monitor training stability. No formal statistical tests or baseline comparisons (e.g., vs. NODE or traditional models) were performed.

---

### Deployment Caveats
Generalizability limited by simulated data; real-world sparsity, noise, and small sample sizes pose challenges. Linear extrapolation may fail for nonlinear PK/PD; inclusion of intermediate doses helps but may not always be feasible. Computational complexity and difficulty in simulation are key drawbacks. Hyperparameter tuning (L1 coefficient, batch size) is dataset-dependent and must be re-evaluated for new data. The model is a 'gray-box'—dynamics are interpretable but not algebraically explicit.

---

## 📊 Key Findings
NCDE accurately fits and extrapolates PK/PD profiles across five simulated scenarios, including multiple dosing with discontinuous dynamics. The learned dynamics (derivatives and phase-plane diagrams) correspond to known biological processes, demonstrating intrinsic interpretability. L1 regularization and AdaMax optimizer stabilize training and improve generalization. NCDE can incorporate continuous (time), discontinuous (time since last dose), and constant (dose) inputs flexibly. Linear extrapolation to unseen doses is observed but may be inadequate for nonlinear systems; inclusion of intermediate doses improves nonlinear extrapolation.

---

### Strengths & Limitations

#### Strengths
- First implementation of NCDE in pharmacometrics, addressing key limitations of NODE and latent-ODE.
- Demonstrates intrinsic interpretability through learned dynamics (derivatives, phase-plane diagrams) that correspond to known biological processes.
- Flexible incorporation of diverse input types (continuous, discontinuous, constant).
- Systematic hyperparameter investigation provides practical guidance for stable training.
- Handles multiple dosing scenarios with discontinuous dynamics effectively.

#### Limitations (Acknowledged by Authors)
- NCDE is a 'gray-box'—dynamics are interpretable but not algebraically explicit.
- Linear extrapolation may fail for nonlinear PK/PD; intermediate doses help but may not always be available.
- Higher computational complexity and difficulty in simulation compared to traditional methods.
- Only single dependent variable considered; real-world datasets often have multiple biomarkers.
- Hyperparameter choices (L1 coefficient, batch size) are dataset-dependent and must be re-evaluated.

#### Limitations (Expert Review)
- No formal comparison to baseline methods (NODE, latent-ODE, traditional ODE models) in terms of accuracy or computational cost.
- Simulated datasets have relatively low noise and regular dosing schedules; real-world applicability uncertain.
- No statistical tests (e.g., confidence intervals, hypothesis tests) for performance metrics.
- The neural network architecture for the vector field is not fully specified, hindering exact reproducibility.
- Extrapolation to unseen doses is tested only for intermediate doses within the training range; extrapolation beyond the range is not evaluated.

#### Generalizability
Demonstrated on simulated data with controlled noise; generalizability to real-world clinical data (higher sparsity, noise, smaller samples) remains unproven. The method's flexibility suggests potential for broader application, but hyperparameter sensitivity requires re-tuning per dataset.

---

---

### Figures & Tables

- **Figure 1**: Comparison of NODE, latent-ODE, and NCDE architectures, highlighting NCDE's ability to incorporate control variables directly.
  - *Significance*: Establishes the structural novelty of NCDE over existing NDE approaches in pharmacometrics.
- **Figure 2**: Hyperparameter influence on training: error-iteration curves and t-SNE projections for L1 regularization, solver, optimizer, and batch size.
  - *Significance*: Provides practical guidance for stable NCDE training; shows AdaMax outperforms Adam.
- **Figure 3**: Fitting and extrapolation results for three PK datasets (IV, extravascular linear, extravascular nonlinear).
  - *Significance*: Demonstrates NCDE's ability to accurately fit and extrapolate PK profiles across different administration routes and elimination kinetics.
- **Figure 4**: Fitting and extrapolation results for two PD datasets (IDR, biophase).
  - *Significance*: Shows NCDE's capability to model PD profiles, including nonlinear dose-response relationships.
- **Figure 5**: Learned derivatives ($dy/dt$) from NCDE models across all PK/PD settings.
  - *Significance*: Illustrates NCDE's interpretability by recovering underlying dynamics, including discontinuities at dosing times.
- **Figure 6**: $dy/dt$ vs. $y$ phase-plane diagrams for PK and PD settings.
  - *Significance*: Demonstrates that NCDE recovers known phase-plane characteristics (e.g., straight line for IV PK, loops for non-monotonic dynamics), confirming interpretability.
- **Table 1**: Summary of performance metrics (MSE, $R^2$, MAE, L1 norm) for all PK/PD settings.
  - *Significance*: Quantifies NCDE's accuracy and sparsity across diverse scenarios; shows higher L1 norm for more complex dynamics.

---

### Code & Reproducibility Assessment
The implementation uses the Diffrax library (JAX-based). No public code repository is mentioned, but the methodology is described in sufficient detail for replication.

---

### Future Directions
Validation on real-world clinical datasets with higher sparsity and noise; integration with symbolic regression to obtain explicit algebraic expressions; extension to multiple dependent variables (e.g., joint PK/PD modeling); incorporation of other data modalities (QSAR, genomics, imaging); exploration of other NDE variants (neural SDE, DDE, IDE) for pharmacometrics.

---

### Expert Commentary
This work represents a meaningful step toward bridging neural differential equations with pharmacometric practice. The emphasis on interpretability—via direct correspondence between learned dynamics and biological processes—addresses a key criticism of black-box ML models. However, the reliance on simulated data with relatively low noise and regular dosing schedules limits immediate clinical applicability. The finding that AdaMax outperforms Adam for NCDE training is a practical insight worth noting. Future work should validate on real-world datasets and explore integration with symbolic regression for full mechanistic interpretability.

---

### Bottom Line
NCDE offers a flexible, interpretable, and accurate data-driven approach for modeling PK/PD profiles under multiple dosing, with demonstrated ability to handle discontinuous dynamics and incorporate diverse input types. Practitioners should consider NCDE as a viable alternative to NODE or latent-ODE when interpretability and handling of multiple dosing are priorities, but must carefully tune hyperparameters (L1 regularization, optimizer, batch size) and be aware of its computational cost and sensitivity to dataset size.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-07-26-neural-controlled-differential-equation-and-its-application-in-pharmacokinetics/figures/fig_01.jpg)

![Comparison of structures of original or low-dimensional NODE (a), latent ODE (b), and NCDE (c), where NODE and NCDE are isomorphic with ODE and CDE, respectively]({{ site.baseurl }}/assets/digests/2026-07-26-neural-controlled-differential-equation-and-its-application-in-pharmacokinetics/figures/fig_02.jpg)

![Influence of hyperparameters. Left panel: Error-iteration curves smoothed with a moving average (window size: 100) for illustrative purposes. Right panel: TSNE p]({{ site.baseurl }}/assets/digests/2026-07-26-neural-controlled-differential-equation-and-its-application-in-pharmacokinetics/figures/fig_03.jpg)

![Fitting and extrapolating performances of NCDE for PK datasets. (a) Intravenous injection (kel: 0.06 h−1); (b) Extravascular administration with linear eliminati]({{ site.baseurl }}/assets/digests/2026-07-26-neural-controlled-differential-equation-and-its-application-in-pharmacokinetics/figures/fig_04.jpg)

![Fitting and extrapolating performances of NCDE for PD datasets. (a) PD of IDR model (kin: 10; kout: 1 h−1; Imax: 0.8; IC50: 10 mg·L−1); (b)(c) PD of biophase mod]({{ site.baseurl }}/assets/digests/2026-07-26-neural-controlled-differential-equation-and-its-application-in-pharmacokinetics/figures/fig_05.jpg)

![Learned derivatives of NCDE in different PK and PD settings. (a) Derivative of one-compartmental intravenous injection PK; (b) Derivative of one-compartmental ex]({{ site.baseurl }}/assets/digests/2026-07-26-neural-controlled-differential-equation-and-its-application-in-pharmacokinetics/figures/fig_06.jpg)

![Derivative-concentration or derivative-effect diagram (dy/dt vs. y). (a) PK of intravenous injection; (b) PK of extravascular administration with linear eliminat]({{ site.baseurl }}/assets/digests/2026-07-26-neural-controlled-differential-equation-and-its-application-in-pharmacokinetics/figures/fig_07.jpg)