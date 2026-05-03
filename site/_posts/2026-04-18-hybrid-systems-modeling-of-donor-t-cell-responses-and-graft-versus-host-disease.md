---
layout: post
title: "Hybrid Systems Modeling of Donor T-Cell Responses and Graft-Versus-Host-Disease After Posttransplantation Cyclophosphamide Administration"
date: 2026-04-18
authors: "Hsuan-Hao Fan, Jonathan S. Maltzman, Christopher G. Kanakry, David E. Mould"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70252"
paper_type: ai-ml
tags: [ai-ml, qsp, oncology, immunology, regulatory, machine-learning]
excerpt_text: "A hybrid QSP-neural network model predicts GVHD scores in murine HCT by mapping mechanistic T-cell simulations to clinical outcomes. SHAP analysis reveals preceding clinical score, body weight, and Treg counts (not direct PK exposure) as top predictors, with successful validation on held-out PTCy doses."
pdf_path: "/assets/digests/2026-04-18-hybrid-systems-modeling-of-donor-t-cell-responses-and-graft-versus-host-disease/PMx_Hybrid_Systems_Modeling_of_Donor_TCell_R_20260418.pdf"
retroactively_classified: false
---

### Quick Take
A hybrid QSP-neural network model predicts GVHD scores in murine HCT by mapping mechanistic T-cell simulations to clinical outcomes. SHAP analysis reveals preceding clinical score, body weight, and Treg counts (not direct PK exposure) as top predictors, with successful validation on held-out PTCy doses.

---

### Executive Summary
The authors developed a hybrid quantitative systems pharmacology model combining mechanistic PK/PD and T-cell biodistribution simulations with a neural network to predict acute GVHD scores in a murine HCT model. A single-hidden-layer neural network ($9$ nodes full, $15$ nodes final) mapped simulated drug exposures and T-cell subset trajectories to clinical GVHD scores. Using a prospective validation design (training on $0/5/25/100$ mg/kg PTCy; testing on $10/50$ mg/kg), the model achieved good predictive performance. SHAP analysis revealed that preceding GVHD score, body weight, PTCy dose, and Treg counts in blood and liver were the dominant predictors, while direct PK metrics ($4HCY/CEPM$ concentrations) contributed less. This hybrid approach successfully integrates mechanistic immunology with machine learning to identify key mediators of GVHD.

---

### Scientific Context & Motivation
Post-transplant cyclophosphamide (PTCy) is the standard immunosuppression for preventing GVHD in HCT, but optimal dosing remains undefined—preclinical data suggest intermediate doses ($25$ mg/kg) may outperform high doses ($50$ mg/kg) by preferentially preserving regulatory T cells (Tregs). Traditional mechanistic PK/PD models struggle to directly link complex, multi-compartment immune cell dynamics to composite clinical scores. There is a need for integrative frameworks that combine mechanistic understanding of drug-immune interactions with data-driven approaches to predict clinical outcomes and optimize dosing regimens, particularly under the FDA's Project Optimus initiative for dose optimization in oncology.

---

## ⚡ Methodological Snapshot
The authors employed a two-stage hybrid modeling architecture. First, a mechanistic QSP framework simulated: (i) cyclophosphamide and metabolite PK using a published model, (ii) time-delayed drug effects via a signal transduction PD model, and (iii) T-cell biodistribution across blood, spleen, lymph nodes, and liver incorporating proliferation, death, and thymic output. Second, a feedforward neural network (scikit-learn MLPRegressor) mapped the simulated PK/PD outputs and T-cell trajectories to ordinal GVHD clinical scores. Feature scaling used MinMaxScaler $[0,1]$. Architecture selection ($1$ hidden layer, $9$–$15$ nodes) was performed by minimizing MSE on both training and test sets. SHAP analysis provided post-hoc interpretability to identify the minimal predictive feature set.

---

## 🤖 Task Framing
Supervised regression task: Predict acute GVHD clinical severity scores (continuous or ordinal scale based on activity, posture, fur, skin, eye metrics) from time-varying inputs including simulated PK exposures ($CY$, $4HCY$, $CEPM$), T-cell subset counts ($Tc$, $Th$, $Tregs$) across multiple tissues (blood, liver, spleen, LN), PTCy dose, time post-transplant, body weight, and preceding GVHD score. The task addresses the clinical need to identify drivers of GVHD and optimize PTCy dosing by learning the mapping between mechanistic immune markers and clinical outcomes.

---

### Dataset Description
Data derived from a murine MHC-haploidentical hematopoietic cell transplant (HCT) model with post-transplant cyclophosphamide (PTCy) dosing at $0$, $5$, $10$, $25$, $50$, and $100$ mg/kg/day on Days $3$ and $4$. Training/calibration utilized doses of $0$, $5$, $25$, and $100$ mg/kg; validation held out doses of $10$ and $50$ mg/kg. T-cell subsets (CD8+ cytotoxic T cells [$Tc$], CD4+Foxp3− helper T cells [$Th$], CD4+CD25+Foxp3+ regulatory T cells [$Tregs$]) were quantified in blood, lymph nodes (LN), spleen, and liver at Days $7$, $21$, and $200$ via flow cytometry. Each mouse contributed a single observation (sparse sampling design). GVHD clinical scores (activity, posture, fur, skin, eye) and body weights were assessed every $3$ days up to Day $200$. Simulated PK data for $CY$, $4HCY$, and $CEPM$ were generated from a prior published model due to inability to collect serial PK in mice.

---

### Model Architecture
Feedforward neural network (multilayer perceptron) with a single hidden layer. Full model: $9$ nodes in hidden layer, $18$ input features (PK metrics, T-cell subsets across tissues, dose, time, body weight, PreScore). Final model: $15$ nodes in hidden layer, $6$ input features (PreScore, BWT, Dose, Time, $Treg_{blood}$, $Treg_{liver}$). Activation function not explicitly stated (default scikit-learn ReLU assumed). Output layer: single node for GVHD score regression. Optimization: Adam (stochastic gradient-based). Loss function: Mean Squared Error. Regularization: Implicit via small network size and early stopping (convergence before $6000$ max iterations). Interpretability: SHAP (SHapley Additive exPlanations) values calculated to rank feature contributions.

---

### Training Details
Implementation: scikit-learn (Python). Preprocessing: MinMaxScaler to $[0,1]$ range for all input features. Optimizer: Adam (stochastic gradient descent). Loss: Mean Squared Error. Maximum iterations: $6000$ (convergence typically reached earlier). Random state: $100$ (for reproducibility). Architecture selection: Grid search over hidden node count ($1$–$20+$) minimizing MSE on both training and validation sets; selected $9$ nodes (full model) and $15$ nodes (final reduced model). No explicit regularization ($L1/L2$) or dropout reported; regularization achieved via early stopping and constrained architecture. Training data: PTCy doses $0$, $5$, $25$, $100$ mg/kg. Validation data: PTCy doses $10$, $50$ mg/kg (prospective holdout).

---

### Evaluation Metrics
Primary metric was Mean Squared Error (MSE) comparing predicted vs observed GVHD scores for both training ($0$, $5$, $25$, $100$ mg/kg) and test/validation ($10$, $50$ mg/kg) datasets. Model architecture selection (number of hidden nodes) was performed by minimizing MSE across both datasets (Figure 4A, 5A). SHAP (SHapley Additive exPlanations) values were calculated to quantify feature importance and identify the six most predictive inputs. No statistical hypothesis testing (e.g., confidence intervals, permutation tests) was reported for the neural network performance differences.

---

### Deployment Caveats
Generalizability is limited by the preclinical murine model (single strain, single conditioning regimen) and the sparse, single-observation-per-mouse sampling design. Translation to humans faces significant hurdles: (1) PK variability is substantially higher in patients than inbred mice; (2) optimal scaling of donor cell doses from mouse to human is undefined; (3) the model assumes washout of drug effects by Day $21$ which may not hold in humans with altered metabolism; (4) inclusion of preceding GVHD score (PreScore) as a predictor creates temporal dependency that may limit utility for initial prediction or in scenarios with missing longitudinal data; (5) survival bias exists as only live mice were scored, though mortality was low in mid-dose groups. Data drift concerns arise from differences in T-cell biodistribution and thymic output kinetics between species.

---

## 📊 Key Findings
The hybrid systems model successfully captured time-varying T-cell subset dynamics ($Tc$, $Th$, $Tregs$) across blood and tissues up to Day $21$ post-transplant. The neural network component identified the immediately preceding GVHD score (PreScore), body weight, PTCy dose, and regulatory T-cell concentrations in blood and liver as the six most important predictors of acute GVHD severity—surpassing direct PK metrics ($4HCY/CEPM$ concentrations). The model validated prospectively on held-out intermediate doses ($10$ and $50$ mg/kg), demonstrating that intermediate-dose PTCy ($25$ mg/kg) optimizes the balance between $Th$ suppression and $Treg$ recovery. The final reduced model ($15$ hidden nodes, $6$ inputs) maintained predictive performance equivalent to the full feature set, suggesting that $Treg$-mediated immunomodulation is the primary mechanistic driver of GVHD outcomes.

---

### Strengths & Limitations

#### Strengths
- Prospective validation design using held-out dose groups ($10$, $50$ mg/kg) rather than random train/test split
- Hybrid approach combines mechanistic biological plausibility (QSP) with ML flexibility for clinical endpoint prediction
- SHAP analysis provides interpretability and identifies minimal sufficient feature set
- Feature selection based on importance rankings reduces overfitting risk
- Addresses contemporary clinical question of PTCy dose optimization under Project Optimus framework
- Reproducible random seed and hyperparameter reporting

#### Limitations (Acknowledged by Authors)
- Sparse T-cell subset data with limited time points (Days $7$, $21$, $200$)
- Single observation per mouse (no serial sampling) necessitating naïve pooled data approach
- Only live mice scored for GVHD, introducing potential survival bias at late timepoints
- Simulated rather than observed PK data for $CY$/metabolites due to blood volume constraints
- Model calibrated to single murine strain/conditioning regimen

#### Limitations (Expert Review)
- Very small effective sample size ($4$ dose groups for training, $2$ for validation) limits robustness of neural network training
- Heavy reliance on 'PreScore' (autoregressive feature) may limit utility for initial prediction or in cross-sectional clinical scenarios
- No uncertainty quantification (confidence intervals, prediction intervals) provided for neural network predictions
- Single hidden layer architecture may underfit complex biological interactions, though this is a necessary bias-variance trade-off given data sparsity
- Potential data leakage concerns if PreScore at time $t$ incorporates information from the same underlying biological process generating the outcome at time $t$
- Lack of baseline model comparison (e.g., linear regression, random forest) to justify neural network complexity

#### Generalizability
Limited to preclinical murine models with specific MHC-haploidentical conditioning; requires substantial modification for human translation due to species differences in PK variability, thymic output timing, and T-cell biodistribution. The held-out dose validation improves generalizability within the preclinical space, but external validation in independent datasets or human cohorts is absent.

---

---

### Figures & Tables

- **Figure 2**: Overall hybrid modeling strategy schematic showing: (A) Simulated PK of $CY$ and metabolites, (B) Time-dependent signal transduction PD model for drug effect, (C) T-cell biodistribution model with proliferation and thymic output, and (D) Neural network mapping inputs to GVHD scores.
  - *Significance*: Provides the architectural blueprint for the hybrid approach, distinguishing the mechanistic simulation components from the data-driven neural network mapping.
- **Figure 3**: Observed (symbols) and model-fitted (lines) donor T-cell subset kinetics ($Tc$, $Th$, $Tregs$) in blood, liver, lymph nodes, and spleen over $21$ days across PTCy dose groups.
  - *Significance*: Demonstrates the ability of the mechanistic PK/PD and biodistribution submodels to capture dose-dependent T-cell dynamics, particularly the preferential Treg recovery at intermediate doses.
- **Figure 4**: Neural network diagnostics: (A) MSE vs number of hidden nodes for training/test sets, (B) Fitted GVHD scores for training data, (C) SHAP value analysis showing feature importance ranking, (D) Predictions vs observations for validation (test) dataset.
  - *Significance*: Critical ML diagnostics showing architecture selection process ($9$ nodes optimal), feature importance hierarchy (PreScore > BWT > Dose > $Tregs$), and successful external validation on held-out dose groups.
- **Figure 5**: Final reduced model ($6$ inputs, $15$ hidden nodes) performance: (A) MSE optimization curve, (B) Training set fits, (C) Test set predictions using only top $6$ features from SHAP analysis.
  - *Significance*: Demonstrates that dimensionality reduction based on SHAP importance retains predictive performance, suggesting robustness against overfitting and identifying the minimal feature set for clinical translation.

---

### Code & Reproducibility Assessment
No code repository or software implementation details were provided. The study utilized scikit-learn for neural network implementation (MinMaxScaler, Adam optimizer), but random seed ($100$) and hyperparameter ranges are reported, enabling partial reproduction if the underlying mechanistic model outputs were available.

---

### Future Directions
Immediate priorities include: (1) Translation to human HCT data with actual measured PK ($4HCY/CEPM$) rather than simulations to characterize inter-individual variability; (2) Incorporation of uncertainty quantification (e.g., Bayesian neural networks, dropout-based Monte Carlo) given the sparse data constraints; (3) Extension to combination immunosuppression (tacrolimus, sirolimus, mycophenolate) to optimize multi-drug regimens; (4) Evaluation of allometric scaling approaches (body weight$^{-0.25}$) for translating cell doses and PTCy exposures from mouse to human; (5) Investigation of the LN $Treg$ contribution when PreScore is excluded, to develop predictive models for de novo patients without prior GVHD measurements; (6) Virtual patient simulation ('digital twins') to prospectively test alternative dosing schedules (e.g., Day $2$ vs Day $3$ administration) prior to clinical trials.

---

### Expert Commentary
This work exemplifies the 'hybrid QSP-ML' paradigm that is gaining traction in pharmacometrics: using mechanistic models to generate physiologically meaningful features from sparse, expensive experimental data, then employing lightweight ML (here, a deliberately simple single-layer NN) to map to noisy clinical endpoints. The choice of a shallow network is prudent given the small sample size (effectively $n=4$ dose groups for training), avoiding overfitting while maintaining interpretability via SHAP values. The validation strategy—holding out intermediate doses ($10$, $50$ mg/kg) rather than random splitting—is methodologically sound for dose-finding contexts. However, the heavy reliance on 'PreScore' (preceding GVHD score) as the top predictor raises questions about the model's utility for early prediction or de novo dosing optimization; it essentially creates an autoregressive structure that may mask the biological signal of interest. Future iterations should incorporate dropout layers or Bayesian neural networks to quantify prediction uncertainty, particularly given the sparse data constraints.

---

### Bottom Line
This hybrid QSP-ML framework demonstrates that a simple neural network can effectively map mechanistic T-cell kinetic simulations to clinical GVHD scores, identifying $Treg$ counts in blood/liver and preceding clinical score as key predictors. While the approach offers a promising translational bridge between preclinical mechanistic insights and clinical endpoints, direct deployment requires validation in human HCT cohorts and careful consideration of PK variability and cell dose scaling between species.

---

---

## 📊 Figures

![FIGURE 2: Overall modeling strategy and detailed sub-model schematics. (A) Simulated pharmacokinetics of cyclophosphamide (CY) and its metabolites, 4-hydroxycyclophosphami]({{ site.baseurl }}/assets/digests/2026-04-18-hybrid-systems-modeling-of-donor-t-cell-responses-and-graft-versus-host-disease/figures/fig_01.png)

![FIGURE 3: Donor T-cell subset kinetics in blood, liver, LN, and spleen, for 21 days after transplantation with or without PTCy administered on Days 3 and 4.: Cytotoxic (CD]({{ site.baseurl }}/assets/digests/2026-04-18-hybrid-systems-modeling-of-donor-t-cell-responses-and-graft-versus-host-disease/figures/fig_02.png)

![FIGURE 4: Diagnostics and predictive performance of the full neural network model for predicting GVHD scores. (A) The mean squared error for training and test datasets is]({{ site.baseurl }}/assets/digests/2026-04-18-hybrid-systems-modeling-of-donor-t-cell-responses-and-graft-versus-host-disease/figures/fig_03.png)

![FIGURE 5: Predictive performance of the final neural network model to predict GVHD scores. (A) Mean squared error for training and test datasets (solid line) following var]({{ site.baseurl }}/assets/digests/2026-04-18-hybrid-systems-modeling-of-donor-t-cell-responses-and-graft-versus-host-disease/figures/fig_04.png)