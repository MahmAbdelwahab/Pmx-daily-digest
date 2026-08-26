---
layout: post
title: "Diffusion models for virtual populations and pharmacometric simulations"
date: 2026-08-26
authors: "Gadgil PK, Poojari SM, Ramanathan M"
journal: "J Pharmacokinet Pharmacodyn 53, 45 (2026)"
doi: "10.1007/s10928-026-10054-7"
paper_type: ai-ml
tags: [ai-ml, digital-twins]
excerpt_text: "This paper evaluates denoising diffusion probabilistic models (DDPMs) for generating virtual patient populations with physiological determinants of drug dosing (PDODD) and pharmacokinetic (PK) profiles. The DDPM outperformed a tabular VAE on categorical variable fidelity (0.31% vs. 1.07% MAE) and bivariate correlation preservation (0.033 vs. 0.091 MAE), while a time-aware diffusion model with temporal self-attention accurately imputed masked PK timepoints (KSD ≤ 0.014, correlations ≥ 0.999)."
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper evaluates denoising diffusion probabilistic models (DDPMs) for generating virtual patient populations with physiological determinants of drug dosing (PDODD) and pharmacokinetic (PK) profiles. The DDPM outperformed a tabular VAE on categorical variable fidelity (0.31% vs. 1.07% MAE) and bivariate correlation preservation (0.033 vs. 0.091 MAE), while a time-aware diffusion model with temporal self-attention accurately imputed masked PK timepoints (KSD ≤ 0.014, correlations ≥ 0.999).

---

### Executive Summary
The authors applied denoising diffusion probabilistic models (DDPMs) to two pharmacometric generative tasks: (1) cross-sectional generation of 31 PDODD covariates from NHANES (n=17,480) and (2) longitudinal generation of nivolumab PK trajectories (12,000 simulated patients, 13 timepoints, 5 covariates). For the cross-sectional task, the DDPM achieved mean KSD of 0.014 for continuous biomarkers, 0.31% MAE for disease-status frequencies, and 0.033 MAE for bivariate correlations, outperforming TVAE on categorical fidelity (0.31% vs. 1.07% MAE) and correlation preservation (0.033 vs. 0.091 MAE). For PK trajectories, a sequence-based diffusion model (SDM) achieved mean KSD of 0.047 and 1.36% trajectory relative error, while a time-aware diffusion model (TDM) with temporal self-attention achieved mean KSD of 0.028 and accurately imputed masked timepoints (MAPE 0.25–0.76%, correlations ≥ 0.999). The results provide proof-of-concept that diffusion models can capture complex distributional and temporal dependencies in pharmacometric data, offering a flexible alternative to GANs and VAEs for virtual population generation.

---

### Scientific Context & Motivation
Traditional pharmacometric approaches (NLME, PBPK, QSP) require explicit specification of structural, covariate, and error models, limiting their utility for high-dimensional datasets with complex dependencies. Resampling, Bayesian, and copula-based methods for virtual population generation also face limitations: resampling provides only random subsets, Bayesian methods require prior distributions, and copula methods need marginal distributions plus a copula function. Generative AI methods (GANs, VAEs) have been explored but have limitations: GANs suffer from training instability and mode collapse, while VAEs tend to produce overly smooth distributions and struggle with categorical variables.[^fc-5] Diffusion models, which learn to iteratively reverse a stochastic noise process, have shown promise in image generation, molecular modeling, and time-series imputation but have not been extensively investigated in clinical pharmacology. This paper addresses that gap by evaluating DDPMs for both cross-sectional covariate generation and longitudinal PK trajectory generation, comparing against TVAE baselines, and introducing a time-aware architecture with temporal self-attention for PK data.

---

## ⚡ Methodological Snapshot
The paper evaluates denoising diffusion probabilistic models (DDPMs) for two pharmacometric generative tasks. For cross-sectional PDODD covariates, a DDPM with an MLP denoising network (4 hidden layers: 256, 512, 512, 256; residual connections, layer normalization, SiLU activations, dropout 0.1) was trained on ORQ-normalized NHANES data using a linear noise schedule (β from 0.0001 to 0.02 over 1000 timesteps). Class-weighted loss addressed rare categorical variables, and generation proceeded via 1000-step reverse diffusion from pure noise. The model was compared against a TVAE baseline on identical data partitions using univariate (KSD, TVC), bivariate (correlation differences), and multivariate (MMD, dimensionality reduction) metrics.

---

## 🤖 Task Framing
The paper addresses two generative modeling tasks in pharmacometrics. Task 1: unconditional generation of cross-sectional PDODD covariate vectors (31 variables: 18 continuous biomarkers + 13 binary disease-status indicators) from a learned high-dimensional joint distribution, enabling virtual patient population synthesis for clinical trial simulation. Task 2: conditional generation of longitudinal nivolumab PK concentration-time profiles (13 timepoints) given patient covariates (WT, ALB, TUM, SEX, ECOG), evaluated via two strategies: sequence-based (SDM, treating the profile as a vector) and time-aware (TDM, using time-concentration pairs with temporal self-attention). The TDM additionally performs a conditional imputation task: reconstructing masked timepoints from observed data and covariates, framed as a missing-data recovery problem relevant to sparse clinical sampling.

---

### Dataset Description
Two datasets were used. (1) Cross-sectional PDODD covariates: NHANES 2009–2018 (5 cycles), 17,480 complete cases retained after listwise deletion from 23,825 subjects (73.4%), comprising 31 variables (18 continuous biomarkers spanning anthropometric, hepatic, renal, hematologic, and metabolic domains; 13 binary disease-status indicators). Continuous variables were log-transformed (except albumin and eGFR) and ORQ-normalized; the dataset was split 80:20 (13,984 train / 3,496 test) stratified by diabetes status. (2) Longitudinal nivolumab PK: simulated from a two-compartment population PK model with time-varying clearance, 12,000 virtual patients, 13 clinically relevant sampling timepoints (Day 1 through Day 322 terminal phase), 5 covariates (WT, ALB, TUM, SEX, ECOG). Split 80:20 (10,000 train / 2,000 test) stratified by sex. For SDM, data were reshaped into 18-feature vectors (13 concentrations + 5 covariates); for TDM, time-concentration pairs (26 variables) plus covariates were used.

---

### Model Architecture
Three diffusion architectures were evaluated. (1) Cross-sectional DDPM: MLP denoising network with 4 hidden layers (256, 512, 512, 256 units), residual connections, layer normalization, SiLU activations, dropout 0.1, sinusoidal position embeddings for timestep encoding, 1000 timesteps with linear noise schedule (β: 0.0001→0.02). (2) Sequence-based diffusion model (SDM): same DDPM architecture applied to 18-feature nivolumab vectors (13 concentrations + 5 covariates), with dimension-specific loss weights (binary dimensions weighted 15× relative to continuous). (3) Time-aware diffusion model (TDM): transformer-style architecture with 4 blocks, each comprising multi-head self-attention (4 heads), layer normalization, and feed-forward network with GELU activation (hidden dim 128). Temporal position encoding used ORQ-normalized log-transformed sampling times. Dual conditioning: global covariate embedding (3-layer MLP) fused with sinusoidal timestep embeddings added to all timepoint representations, plus per-timepoint covariate projections for timepoint-specific effects. Input at each timepoint consisted of two channels (noised concentration + binary mask). TVAE baseline: encoder/decoder dimensions (512, 512), embedding dim 128, from SDV library.

---

### Training Details
Cross-sectional DDPM: Adam optimizer, learning rate 0.0001, weight decay 0.0001, cosine annealing with 10-epoch warmup, EMA decay 0.9999, batch size 256, up to 500 epochs with early stopping (patience 50); trained for 202 epochs (best validation loss 0.2495, ~3 min on A100). Class-specific weights from inverse frequency ratios for categorical dimensions. SDM: cosine annealing from 0.001 to 0.00002 over 800 epochs, dimension-specific loss weights (binary dimensions weighted 15× relative to continuous, normalized to unit mean); trained for 800 epochs (best loss 0.082, ~7.7 min). TDM: Adam with cosine annealing (0.001→0.00002), 2000 epochs (best loss 0.010, ~70 min). Mixed masking strategy: 30% full masking (all 13 timepoints) for de novo generation, 70% random partial masking (20–80% of timepoints) for imputation training. Loss computed as MSE between predicted and actual noise, restricted to masked positions in partial batches. TVAE: Adam, learning rate 0.001, batch size 2000, L2 regularization 10⁻⁷, loss factor 4, KL annealing 0→1 over 100 epochs, 1000 epochs, ELBO loss. All training on single NVIDIA A100 GPU at University at Buffalo CCR cluster. Python 3.9, PyTorch 2.0, scikit-learn, SDV, NumPy/Pandas; evaluation in R.

---

### Evaluation Metrics
Univariate: Kolmogorov-Smirnov D-statistic (KSD) for continuous variables; total variation complement (TVC) and mean absolute error (MAE) for categorical frequencies. Bivariate: mean absolute Pearson correlation difference; Spearman correlation difference for PK data. Multivariate: maximum mean discrepancy (MMD) with Gaussian RBF kernel; t-SNE, UMAP, and PCA projections for visual assessment. Trajectory quality: relative error of mean concentration profiles and smoothness ratio of adjacent concentration changes. Imputation: mean absolute percentage error (MAPE) and Pearson correlation between real and imputed values. Baselines: TVAE implemented via SDV on identical ORQ-normalized data and train/test partitions. No formal statistical significance tests were reported for model comparisons.

---

### Deployment Caveats
The models were validated on a single cross-sectional source (NHANES) and simulated PK data from one drug (nivolumab), limiting generalizability to real-world clinical datasets with measurement error, sparsity, and heterogeneous sampling schedules. The TDM's imputation was tested at only three predefined timepoints spanning distinct PK phases; broader missing-data scenarios remain unexplored. Privacy concerns regarding re-identification of rare patient subgroups are acknowledged but not quantitatively assessed. The approach requires substantial training data and GPU resources (A100). ORQ normalization amplifies errors in tail regions during inverse transformation (2.6-fold greater at tail vs. central timepoints), which may affect extreme quantile predictions. The TDM's exact reproduction of binary covariates (because generation was conditioned on real test covariates) may overstate generation quality in unconditional settings.

---

## 📊 Key Findings
1. The DDPM achieved mean KSD of 0.014 across 18 continuous PDODD biomarkers, with 14 of 18 variables below 0.01 (best: BSA 0.0003, eGFR 0.0009, SII 0.0011, HSI 0.0014); largest departures were serum albumin (0.077) and age (0.055). 2. The DDPM reproduced disease-status frequencies with 0.31% mean absolute error across 13 categorical variables, including rare conditions (dialysis: 0.14% generated vs. 0.11% test; hepatitis C: 1.06% vs. 0.89%). 3. The DDPM preserved bivariate correlations with mean absolute difference of 0.033, outperforming TVAE (0.091). 4. The DDPM outperformed TVAE on categorical fidelity (0.31% vs. 1.07% MAE) and on 12 of 13 categorical variables; TVAE systematically underestimated minority classes (kidney disease: 0.94% vs. 2.92% observed). 5. The SDM generated PK trajectories with mean KSD of 0.047 across 13 timepoints, 1.36% trajectory relative error, smoothness ratio 1.008, and preserved Spearman correlations (mean absolute difference 0.012). 6. The TDM achieved mean KSD of 0.028 for concentration timepoints and imputed masked PK timepoints with MAPE of 0.25% (Cmax Dose-9), 0.43% (Day 1), and 0.76% (Terminal), all with correlations ≥ 0.999 and KSD ≤ 0.014. 7. Multivariate agreement was confirmed by MMD of 0.006 and extensive overlap in t-SNE, UMAP, and PCA projections with no evidence of mode collapse. 8. The TDM preserved exposure metrics (trough concentrations at Cycles 6, 9, 12 with KSD 0.020–0.034) and covariate-exposure relationships (sex, ECOG, WT, TUM).

---

### Strengths & Limitations

#### Strengths
- Comprehensive evaluation across univariate, bivariate, and multivariate metrics (KSD, TVC, correlation differences, MMD, t-SNE/UMAP/PCA)
- Two complementary PK modeling strategies (SDM and TDM) with different input representations, enabling both generation and imputation
- TDM's imputation capability demonstrated via masked timepoint reconstruction with high accuracy (correlations ≥ 0.999)
- Class-weighted loss effectively handled rare categorical variables (dialysis at 0.1% prevalence)
- ORQ normalization appropriately matched the diffusion model's Gaussian noise assumption and is invertible
- Fair comparison against TVAE on identical ORQ-normalized data and train/test partitions
- Stability analysis across five generated datasets confirmed reproducibility
- Preservation of clinically relevant exposure metrics (trough concentrations) and covariate-exposure relationships
- Clear discussion of limitations and appropriate acknowledgment of confounding factors in model comparisons

#### Limitations (Acknowledged by Authors)
- Listwise deletion reduced sample size from 23,825 to 17,480 subjects (73.4% retention); missingness patterns were not random, potentially biasing joint distributions
- Single data source (NHANES) for covariate evaluation; could be strengthened with disease registries and multi-omics data
- PK data were simulated from an established nivolumab population PK model, representing a structured and favorable simulation environment
- Imputation evaluated at only three predefined timepoints representing distinct PK phases; broader missing-data scenarios not explored
- Diffusion model incorporated additional architectural optimizations (residual connections, EMA, class-weighted loss, cosine annealing, early stopping) not applied to TVAE, potentially confounding performance comparisons
- No investigation of neural ODEs, which are primarily tools for time-course simulation rather than generation
- Low-frequency subgroups (e.g., dialysis, n=23) exhibit high coefficients of variation, affecting all modeling approaches

#### Limitations (Expert Review)
- No formal statistical significance testing between diffusion and TVAE performance differences; conclusions rely on point estimates
- The 80:20 split stratified only by diabetes status (NHANES) or sex (PK data); other stratification factors may be relevant
- No evaluation of downstream pharmacometric tasks (e.g., population PK parameter recovery, model refitting accuracy) from synthetic data
- The TDM's exact reproduction of binary covariates (because generation was conditioned on real test covariates) may overstate generation quality in unconditional settings
- Privacy and re-identification risk acknowledged but not quantitatively assessed
- Limited discussion of hyperparameter sensitivity and model selection criteria
- The synthetic data achieved 95.9% of real-data AUC in a downstream task, but the nature of this task is not described in the main text
- No comparison against GAN-based approaches (e.g., CTGAN) despite prior work by the same group

#### Generalizability
The approach was validated on a single cross-sectional dataset (NHANES) and simulated PK data from one drug (nivolumab), limiting generalizability to real-world clinical datasets with challenging dependencies, sparsity, and measurement error. The TDM's time-aware architecture is potentially generalizable to other longitudinal pharmacometric data, but this requires validation on real clinical PK data with heterogeneous sampling schedules. The authors note that the PK simulation environment was favorable and that additional real-world datasets would strengthen confidence in generalizability.

---

### Key Equations

**Forward diffusion sequence**

{% raw %}
$$
x_1, x_2,..., x_T
$$
{% endraw %}

The forward diffusion process sequentially adds Gaussian noise to training data x₀ over T timesteps, producing progressively noisier versions x₁, x₂, ..., x_T until the data distribution is transformed into pure noise.

**Neural network parameters**

{% raw %}
$$
\theta
$$
{% endraw %}

The reverse denoising process trains a neural network parameterized by θ to recover the data from noise.

**Reverse process conditional transition**

{% raw %}
$$
{p}_{\theta }\left({x}_{t+1}\right|{x}_{t})
$$
{% endraw %}

The reverse process learns the conditional transition probability at each timestep, enabling iterative denoising from noise back to data.

**Pure noise starting point**

{% raw %}
$$
{x}_{T}
$$
{% endraw %}

New synthetic data are generated by starting from random noise x_T and iteratively denoising through the learned reverse transitions.

**Diffusion timestep**

{% raw %}
$$
t
$$
{% endraw %}

Each timestep t in the diffusion process corresponds to a specific noise level governed by the linear noise schedule.

**Noised input at timestep t**

{% raw %}
$$
{x}_{t}
$$
{% endraw %}

At each timestep t, a noised version of the input x_t is computed from the original data and Gaussian noise using a closed-form expression.

**Original data**

{% raw %}
$$
{x}_{0}
$$
{% endraw %}

The original data x₀ serves as the starting point for the forward diffusion process and the target for the reverse denoising process.

**Directly sampled noised input**

{% raw %}
$$
{x}_{t}
$$
{% endraw %}

The closed-form formulation permits direct sampling of x_t at any arbitrary timestep without sequential computation of all preceding steps.

**Total variation complement**

{% raw %}
$$
TVC=1-\frac{1}{2}\left(\sum _{{\upomega }\in {\Omega }}\left|R\left({\upomega }\right)-S\left({\upomega }\right)\right|\right)
$$
{% endraw %}

The total variation complement (TVC) compares marginal distributions of categorical variables between real (R) and synthetic (S) datasets, where ω denotes elements in the event space Ω. Values near 1 indicate close agreement.

**Kolmogorov-Smirnov complement**

{% raw %}
$$
KSC=1-KSD\left(R,S\right)
$$
{% endraw %}

The Kolmogorov-Smirnov complement (KSC) assesses distributional agreement for continuous variables, expressed in terms of the Kolmogorov-Smirnov statistic (KSD) between real (R) and synthetic (S) distributions. Values near 1 indicate close agreement.

---

### Figures & Tables

- **Figure 1**: Schematic of the diffusion model architecture showing the forward diffusion process (bottom arrows, sequential Gaussian noise addition from x₀ to x_T over T timesteps) and the reverse denoising process (top arrows, neural network parameterized by θ learning conditional transitions p_θ(x_{t+1}|x_t)).
  - *Significance*: Provides the conceptual framework for both the cross-sectional DDPM and the sequence/time-aware PK diffusion models.
- **Figure 2**: Probability density histograms of diffusion-generated data (red bars) overlaid on test data (green bars) for the ORQ-transformed versions of all 18 continuous PDODD biomarkers.
  - *Significance*: Demonstrates the univariate distributional fidelity of the DDPM for continuous biomarkers, with extensive overlap across all variables.
- **Figure 3**: Three-panel evaluation: (top) bar charts comparing disease-status frequencies between test and diffusion-generated data; (middle) correlation heatmaps and difference heatmap for 18 continuous variables; (bottom) t-SNE, UMAP, and PCA 2D projections of the high-dimensional joint distribution.
  - *Significance*: Comprehensive multivariate evaluation showing the DDPM captures categorical frequencies, bivariate correlations, and the high-dimensional joint distribution.
- **Figure 4**: SDM results for nivolumab PK: (A) mean concentration profiles of test vs. generated data; (B, C) binary covariate frequencies (sex, ECOG); (F) Spearman correlation heatmap comparison.
  - *Significance*: Demonstrates the sequence-based diffusion model's ability to generate pharmacokinetically plausible concentration-time profiles with preserved covariate relationships.
- **Figure 5**: TDM results: (A) mean concentration profiles of test vs. generated data; (B, C) imputation results for masked Day 1, Cmax Dose-9, and Terminal phase timepoints showing real vs. imputed concentrations.
  - *Significance*: Demonstrates the time-aware diffusion model's superior trajectory fidelity and its imputation capability for missing PK timepoints.
- **Figure 6**: Exposure and covariate-exposure evaluation for TDM: (A-C) probability density histograms of trough concentrations at Cycles 6, 9, and 12; (D-E) box plots of Cycle 12 trough by sex and ECOG; (F-G) loess-fitted scatter plots showing dependence on WT, ALB, and TUM.
  - *Significance*: Validates that the generated data preserve clinically relevant exposure metrics and covariate-exposure relationships, supporting utility for model-informed drug development.

---

### Code & Reproducibility Assessment
No code or repository link is provided. Models were implemented in Python 3.9 with PyTorch 2.0, using scikit-learn for ordered quantile normalization and the Synthetic Data Vault (SDV) library for TVAE. Training was performed on a single NVIDIA A100 GPU on the University at Buffalo CCR cluster. The nivolumab PK simulation used nlmixr2 with the PK_2cmt_tdcl_des model from nlmixr2lib, and NHANES data were accessed via the nhanesA R package. While methods are described in sufficient detail for replication, the absence of released code limits direct reproducibility.

---

### Supplementary Materials
One supplementary file (docx, 3.47 MB) is available. It contains Supplementary Table S1 (nivolumab population PK model parameters), Supplementary Table S2 (13-point clinical sampling schedule), and Supplementary Figures S1–S4: S1 (bivariate pairs plot for eight continuous variables), S2 (conditional distributions of EGFR, urine albumin-creatinine ratio, and plasma volume across disease states), S3 (stability analysis histograms across five generated datasets), and S4 (univariate marginal distributions of the 13 concentration timepoints for SDM).

---

### Future Directions
Validation on real-world PK datasets with heterogeneous sampling schedules, measurement error, and sparsity. Evaluation of downstream pharmacometric tasks including population PK parameter recovery, model refitting accuracy, and covariate selection consistency from synthetic data. Investigation of more general missing-data scenarios (random masking patterns, varying missingness levels). Exploration of neural ODEs for time-course simulation. Integration of proteomic, metabolomic, and genetic data to extend beyond the current biomarker panel. Quantitative assessment of privacy and re-identification risk in generated data. Application of k-fold cross-validation to enhance robustness for low-frequency subgroups.

---

### Expert Commentary
This paper provides a solid proof-of-concept for diffusion models in pharmacometrics, addressing a genuine gap in the generative AI literature for this domain. The TDM's temporal self-attention mechanism with dual conditioning (global covariate embedding plus per-timepoint projections) is particularly innovative, enabling both generation and imputation within a unified framework. The comparison with TVAE is useful but somewhat confounded by the additional architectural optimizations in the diffusion model (residual connections, EMA, class-weighted loss, cosine annealing, early stopping), which the authors appropriately acknowledge. The most significant limitation is the reliance on simulated PK data, which represents a favorable evaluation environment; real-world data with measurement error and irregular sampling would provide a stronger test. The imputation results (correlations ≥ 0.999) are impressive but should be interpreted cautiously given the simulated data source. The ORQ normalization strategy is well-motivated for diffusion models' Gaussian noise assumption, but the tail-region error amplification identified by the authors is an important practical consideration for pharmacometric applications where extreme concentrations may be clinically relevant.

---

### Bottom Line
Diffusion models, particularly time-aware variants with temporal self-attention, are viable generative approaches for virtual populations in pharmacometrics. They offer advantages over VAEs for categorical variable fidelity and correlation structure preservation, and the TDM's imputation capability suggests potential utility for handling missing PK data. However, validation on real-world datasets and downstream pharmacometric tasks (e.g., population PK parameter recovery) is needed before clinical deployment.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The best KSD values for continuous biomarkers were BSA 0.0003, eGFR 0.0009, SII 0.0011, and HSI 0.0014.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **NUMERIC_MISMATCH** — original: “The PK dataset was split 80:20 into 10,000 training and 2,000 test patients.” → correction: “The dataset was divided into training (n = 10,000) and test (n = 2,000) subsets using stratified random sampling by sex.”
[^fc-3]: **UNSUPPORTED** — original: “Supplementary Figures S1–S4 include bivariate pairs plot, conditional distributions, stability analysis histograms, and univariate marginal distributions for SDM.” → correction: “The text mentions Supplementary Figure S1 for bivariate pairs, S2 for conditional distributions, S2 for stability histograms (inconsistent), and S4 for univariate marginal distributions for SDM. No mention of S3.”
[^fc-4]: **UNSUPPORTED** — original: “GANs suffer from training instability and mode collapse.” → correction: “No mention of GANs' training instability or mode collapse in the source text.”
[^fc-5]: **UNSUPPORTED** — original: “VAEs tend to produce overly smooth distributions and struggle with categorical variables.” → correction: “No mention of VAEs producing overly smooth distributions or struggling with categorical variables in the source text.”
[^fc-6]: **UNSUPPORTED** — original: “The TDM's exact reproduction of binary covariates may overstate generation quality in unconditional settings.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “Future directions include exploration of neural ODEs for time-course simulation.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “Future directions include quantitative assessment of privacy and re-identification risk.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “The TDM's temporal self-attention mechanism with dual conditioning is particularly innovative.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “The most significant limitation is the reliance on simulated PK data.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-08-26-diffusion-models-for-virtual-populations-and-pharmacometric-simulations/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-08-26-diffusion-models-for-virtual-populations-and-pharmacometric-simulations/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-08-26-diffusion-models-for-virtual-populations-and-pharmacometric-simulations/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-08-26-diffusion-models-for-virtual-populations-and-pharmacometric-simulations/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-08-26-diffusion-models-for-virtual-populations-and-pharmacometric-simulations/figures/fig_05.png)

![Figure 6]({{ site.baseurl }}/assets/digests/2026-08-26-diffusion-models-for-virtual-populations-and-pharmacometric-simulations/figures/fig_06.png)