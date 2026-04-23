---
layout: post
title: "A physics-informed neural network approach for estimating population pharmacokinetic parameters from aggregated data"
date: 2026-03-23
authors: "Tsiros P, Minadakis V, Sarimveis H"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026"
doi: "https://doi.org/10.1007/s10928-026-10019-w"
paper_type: ai-ml
tags: [ai-ml, pbpk, machine-learning, meta-analysis]
excerpt_text: "This paper introduces Distributional Physics-Informed Neural Networks (D-PINNs), a novel deep learning method that estimates population pharmacokinetic parameters from published mean and variance summaries rather than individual data. Essential reading for pharmacometricians involved in meta-analysis, biosimilar development, or leveraging legacy literature data, as it offers a computationally efficient alternative to MCMC for aggregated data analysis with demonstrated accuracy on both simulated and real monoclonal antibody data."
pdf_path: "/assets/digests/2026-03-23-a-physics-informed-neural-network-approach-for-estimating-population/PMx_A_physicsinformed_neural_network_approac_20260323.pdf"
retroactively_classified: true
---

### Quick Take
This paper introduces Distributional Physics-Informed Neural Networks (D-PINNs), a novel deep learning method that estimates population pharmacokinetic parameters from published mean and variance summaries rather than individual data. Essential reading for pharmacometricians involved in meta-analysis, biosimilar development, or leveraging legacy literature data, as it offers a computationally efficient alternative to MCMC for aggregated data analysis with demonstrated accuracy on both simulated and real monoclonal antibody data.

---

### Executive Summary
This paper introduces Distributional Physics-Informed Neural Networks (D-PINNs), a novel deep learning framework that extends traditional PINNs to estimate population-level pharmacokinetic parameter distributions using only aggregated concentration summary statistics (means and variances). Unlike conventional PINNs that provide deterministic point estimates, D-PINNs incorporate distributional assumptions directly into the optimization process through a sampling-based residual network architecture. The methodology was validated using a simulated one-compartment IV bolus model and applied to real-world monoclonal antibody data (TAB008), demonstrating comparable accuracy to Markov Chain Monte Carlo (MCMC) methods with approximately 10-fold faster computation. This work fills a critical methodological gap for meta-analysis of published PK studies where individual-level data are unavailable, offering a computationally efficient alternative to full Bayesian approaches for population parameter inference.

---

## ⚡ Methodological Snapshot
The D-PINN framework represents a hybrid approach combining deep learning with mechanistic modeling. At its core, a conventional feedforward neural network predicts the mean and variance of drug concentrations over time, rather than deterministic values. These predictions parameterize a joint probability distribution over system states and PK parameters. During each training iteration, Monte Carlo samples are drawn from this joint distribution, 'denoised' using the residual error model, and propagated through the ODE system to compute physics-based derivatives of the mean and variance. The total loss function integrates three components: (1) data fidelity terms ensuring predicted means and variances match observed summary statistics; (2) ODE residual terms ensuring the predicted moments evolve according to the mechanistic model; and (3) initial condition constraints. This architecture enables simultaneous estimation of population parameter distributions (means, variances, and correlations) and residual error magnitude, effectively performing population PK analysis without requiring individual concentration-time profiles.

---

## 🏗️ Structural Model Breakdown
Case Study 1 employed a one-compartment IV bolus model with first-order elimination characterized by two parameters: elimination rate constant (k_el) and volume of distribution (V_d). The ODE system is dC/dt = -k_el*C with initial condition C(0) = Dose/V_d. Both parameters were assumed log-normally distributed across the population with means and variances estimated by the D-PINN. Case Study 2 utilized a minimal physiologically-based pharmacokinetic (mPBPK) model for monoclonal antibodies comprising four compartments: plasma (central), lymph, tight interstitial fluid (ISF), and leaky ISF. The model assumes convection-driven distribution governed by capillary reflection coefficients (sigma_T for tight tissues, sigma_leaky for leaky tissues, sigma_L for lymphatic capillaries) with the constraint sigma_T > sigma_leaky. Clearance (CL) occurs from plasma and was modeled with interindividual variability (log-normal), while reflection coefficients were treated as fixed population parameters. Physiological parameters (volumes, blood flows) were scaled allometrically to body weight. The ODE system (Eqs. 28-31) describes mass balance with lymphatic circulation and capillary extravasation.

---

### Detailed Methodological Analysis

#### Modeling Approach
Distributional Physics-Informed Neural Networks (D-PINNs) extend conventional PINNs by predicting both mean and variance of concentration-time profiles. The architecture employs a feedforward neural network (2 hidden layers, 3-30 neurons, tanh activation) to output statistical moments, coupled with a sampling-based residual network that enforces ODE constraints. The framework assumes log-normal distributions for PK parameters and residual errors. Min-Max scaling (0-1) was applied to outputs in the mPBPK case to handle wide dynamic ranges. Automatic differentiation computed derivatives of NN outputs, while ODE-based derivatives were approximated via Monte Carlo sampling (N_s=100) from the joint parameter-state distribution.

#### Data Sources
Two data sources were employed: (1) Simulated data from a one-compartment IV bolus model with 30 virtual patients, log-normal IIV (CV 20-30%), and proportional residual error (sigma=0.1), with sampling at 0.5, 1, 2, 6, 12, and 24 hours; (2) Real-world aggregated data from a Phase I study of TAB008 (bevacizumab biosimilar) in 49 healthy Chinese males, with 15 summary statistics (mean and SD) extracted from published figures using PlotDigitizer software, covering 0.75 hours to 99 days post-dose.

#### Estimation Methods
D-PINNs were implemented in Python using DeepXDE (v1.9.3) with TensorFlow (v2.1.3) backend. Optimization utilized the Adam optimizer with learning rate 0.0005 (Case 1) or 5e-4 with exponential decay (Case 2). Gradient clipping (Euclidean norm < 10) ensured stability. Trainable parameters included neural network weights, distributional parameters (population means and variances of log-normal distributions), and residual error standard deviation. Constraints were enforced via transformations: softplus for standard deviations (ensuring positivity), tanh for correlation parameters (bounding to [-1,1]), and inverse-logit for reflection coefficients (bounding to [0,1]).

#### Model Evaluation
Model performance was assessed using Mean Absolute Percentage Error (MAPE) between estimated and true parameters (simulation study), visual predictive checks comparing predicted versus observed mean and variance trajectories, and sensitivity analyses examining the impact of loss weights, collocation points (N_t), Monte Carlo sample size (N_s), parameter correlations, and missing data patterns. MCMC implemented in Stan (RStan v2.17.3) with NUTS algorithm served as the gold-standard benchmark for Case Study 2, using 4 chains with 1000 iterations (400 warm-up).

#### Covariate Analysis
Body weight was incorporated as a covariate in the mPBPK model (Case Study 2) by sampling from a uniform distribution (50-75 kg) based on reported clinical trial demographics. Physiological parameters (plasma volume, lymph volume, interstitial fluid volumes) were allometrically scaled to body weight using established physiological scaling relationships (Eqs. 65-72). No other covariate relationships were explored; the authors note that covariate effects on variance parameters cannot be estimated from summary statistics alone.

---

### Scientific Context & Motivation
The pharmacokinetic literature contains extensive aggregated data (mean and standard deviation of concentrations at each time point) from which valuable population information could theoretically be extracted, yet methodological tools for this purpose remain limited. Traditional Nonlinear Mixed Effects (NLME) modeling requires individual concentration-time profiles, which are often unavailable in older studies or published literature. While Physics-Informed Neural Networks (PINNs) have emerged as powerful tools for solving differential equations, conventional implementations provide only point estimates and cannot characterize interindividual variability. Full Bayesian MCMC approaches can analyze summary statistics but are computationally intensive. This work fills the methodological gap by extending PINNs to handle distributional assumptions, enabling direct estimation of population parameter distributions from summary statistics while maintaining the computational efficiency of gradient-based optimization.

---

### Statistical Rigor Assessment
The statistical approach is appropriate for a proof-of-concept study, though several limitations warrant consideration. Sample sizes (n=30 for simulation, n=49 for real data) are modest but sufficient to demonstrate methodology. The log-normal distributional assumptions for both parameters and residual errors align with standard pharmacometric practice. Sensitivity analyses comprehensively address hyperparameter tuning (loss weights, collocation points, sample size), parameter correlations, and missing data patterns (20-80% missingness), demonstrating robustness across realistic scenarios. However, correlation parameters between PK parameters cannot be identified from summary statistics alone—a fundamental information limitation acknowledged by the authors. The assumption of independence between measurement error and true concentration may not hold in all experimental settings. Bootstrap or cross-validation procedures were not reported, limiting assessment of estimator variance. The MCMC benchmark provides appropriate gold-standard comparison, though computational time comparisons should be interpreted cautiously given different convergence criteria and implementation optimizations.

---

## 📊 Key Findings
In Case Study 1 (simulated one-compartment model), D-PINNs accurately recovered population mean parameters (k_el: 0.115 vs 0.116 true; V_d: 14.53 vs 15.0 true) with MAPE < 10%, though slightly underestimating high-variance parameters (V_d CV: 0.030 vs 0.046 true). The residual error parameter was well-estimated (0.093 vs 0.100 true). Hyperparameter tuning revealed that unit loss weights generally performed optimally, while increasing initial condition weights beyond 5x degraded performance. The number of Monte Carlo samples (N_s) significantly impacted accuracy, with N_s=100 providing optimal balance of precision and computational cost (141s vs 329s for N_s=500). Sensitivity analysis demonstrated robustness to missing data, maintaining acceptable accuracy even with 80% of observations missing, though parameter correlation adversely affected estimation precision. In Case Study 2 (TAB008 mAb), D-PINN estimates closely matched MCMC results (CL: 0.0115 vs 0.0119 L/day; sigma_T: 0.8378 vs 0.8835; sigma_leaky: 0.7529 vs 0.6657), with D-PINNs requiring only 400 seconds versus 5000 seconds for MCMC. Both methods slightly overestimated variability at late time points, likely due to limited information content in summary statistics for terminal phase characterization.

---

## 💡 Clinical & Regulatory Implications
The D-PINN framework addresses a critical unmet need in drug development: extracting population PK information from legacy studies and literature meta-analyses where only mean and standard deviation summaries are reported. For biosimilar development (as demonstrated with TAB008), this enables comparative PK assessments using published originator data without requiring individual subject profiles. The ability to estimate interindividual variability (IIV) from aggregated data supports dosing regimen optimization for special populations when individual trials are underpowered. However, the inability to estimate parameter correlations from summary statistics limits the characterization of covariate relationships and may impact simulation-based dosing recommendations. Regulatory acceptance would require validation against traditional NLME methods and demonstration of robustness to missing data patterns common in sparse sampling designs.

---

### Strengths & Limitations

#### Strengths
- Novel extension of PINNs to distributional estimation enabling population PK analysis from aggregated data
- Computational efficiency (10x faster than MCMC) facilitates rapid meta-analyses and sensitivity explorations
- Rigorous sensitivity analysis on hyperparameters, missing data, and correlation structures
- Open-source implementation with reproducible code repository
- Successful application to both simple (1-compartment) and complex (mPBPK) PK models
- Physiological constraints (e.g., reflection coefficients bounded [0,1]) naturally incorporated via parameter transformations
- Demonstrated robustness to high proportions of missing data (up to 80%)

#### Limitations (Acknowledged by Authors)
- Inability to estimate correlation parameters between PK parameters or between parameters and state variables from summary statistics alone
- Sensitivity to loss weight tuning requiring careful hyperparameter optimization
- Assumption of log-normal distributions for parameters and residual errors may not apply to all PK systems
- Computational cost increases with model complexity and number of samples
- Limited to single homogeneous population; covariate effects on variance not estimable
- In Case Study 2, estimation of IIV in clearance and measurement error proved unstable, requiring fixing of residual error

#### Limitations (Expert Review)
- No uncertainty quantification provided for D-PINN parameter estimates (point estimates only) unlike MCMC credible intervals
- Limited validation on sparse sampling designs typical of Phase I studies beyond the missing data sensitivity analysis
- Neural network architecture selection (layers, neurons) not systematically optimized; potential for overfitting with more complex models
- No comparison with traditional NLME methods (e.g., SAEM) using individual-level data to quantify information loss from aggregation
- Assumes correct structural model specification; no diagnostic tools provided for model misspecification detection
- Gradient clipping and learning rate scheduling require manual tuning that may not generalize across different PK models

#### Generalizability
The methodology is generalizable to any PK system described by ODEs where aggregated summary statistics are available, making it particularly valuable for meta-analysis across diverse therapeutic areas. However, generalizability is limited to single-population scenarios; multi-study meta-analyses requiring covariate modeling across different populations would require methodological extensions. The inability to estimate parameter correlations restricts application to scenarios where correlation structure is either known or ignorable.

---

### Key Equations

**One-Compartment Elimination**

$$
\frac{dC(t)}{dt} = -k_{el} \cdot C(t)
$$

One-compartment IV bolus pharmacokinetic model used in simulation studies (Case Study 1), describing drug elimination from central compartment

**Initial Concentration**

$$
C(0) = \frac{\text{Dose}}{V_d}
$$

Initial condition for one-compartment model following IV bolus administration, where dose is administered instantaneously at time zero

**D-PINN Total Loss Function**

$$
\mathcal{L}_{\text{total}} = \mathcal{L}_{\mu}^{\text{ODE}} + \mathcal{L}_{\sigma^2}^{\text{ODE}} + \mathcal{L}_{\mu}^{\text{IC}} + \mathcal{L}_{\sigma^2}^{\text{IC}} + \mathcal{L}_{\mu}^{\text{data}} + \mathcal{L}_{\sigma^2}^{\text{data}}
$$

Total loss function for D-PINN optimization combining ODE constraints, initial conditions, and data fit for both mean and variance predictions

**Mean ODE Loss**

$$
\mathcal{L}_{\mu}^{\text{ODE}} = \frac{1}{N_c N_t} \sum_{i=1}^{N_c} \sum_{j=1}^{N_t} \left| \frac{d\hat{\mu}_{ij}}{dt} - \frac{\tilde{d\mu}_{ij}}{dt} \right|
$$

ODE loss term for mean predictions comparing automatic differentiation of neural network output with ODE-based derivative estimates

**Mean Derivative Approximation**

$$
\frac{\tilde{d\mu}}{dt} \approx \frac{1}{N_s} \sum_{i=1}^{N_s} f\left(C^{(i)}, \theta^{(i)}, t\right)
$$

Approximation of ODE-based derivative of concentration mean using Monte Carlo sampling from parameter distributions, where f represents the ODE right-hand side

**Variance Derivative Approximation**

$$
\frac{\tilde{d\sigma^2}}{dt} \approx \frac{2}{N_s} \sum_{i=1}^{N_s} \left(C^{(i)} - \mu\right) \cdot f\left(C^{(i)}, \theta^{(i)}, t\right)
$$

Approximation of ODE-based derivative of concentration variance using Monte Carlo sampling, accounting for propagation of variability through system dynamics

**Residual Error Model**

$$
C_{obs}(t) = C_{true}(t) \cdot e^{\epsilon}
$$

Log-normal residual error model relating observed concentration to true (noise-free) concentration through multiplicative error term

**mPBPK Plasma Compartment**

$$
\frac{dC_p}{dt} = \frac{1}{V_p} \left[ L(1-\sigma_L)C_{lymph} - L(1-\sigma_T)C_p - L(1-\sigma_{leaky})C_p + R(t) - CL \cdot C_p \right]
$$

Minimal PBPK model differential equation for plasma compartment concentration (C_p) accounting for lymphatic return, capillary extravasation, and clearance

**mPBPK Lymph Compartment**

$$
\frac{dC_{lymph}}{dt} = \frac{1}{V_{lymph}} \left[ L(1-\sigma_T)C_{tight} + L(1-\sigma_{leaky})C_{leaky} - L(1-\sigma_L)C_{lymph} \right]
$$

Minimal PBPK model differential equation for lymph compartment concentration (C_lymph) with return from tight and leaky interstitial fluid compartments

**mPBPK Tight ISF Compartment**

$$
\frac{dC_{tight}}{dt} = \frac{L(1-\sigma_T)}{V_{tight}} \left(C_p - C_{tight}\right)
$$

Minimal PBPK model differential equation for tight tissue interstitial fluid compartment with convection-driven exchange with plasma

**mPBPK Leaky ISF Compartment**

$$
\frac{dC_{leaky}}{dt} = \frac{L(1-\sigma_{leaky})}{V_{leaky}} \left(C_p - C_{leaky}\right)
$$

Minimal PBPK model differential equation for leaky tissue interstitial fluid compartment with convection-driven exchange with plasma

---

### Figures & Tables

- **Figure 1**: Simplified schematic of the D-PINN framework showing the integration of neural network predictions with ODE system constraints for extracting population parameters from aggregated PK data
  - *Significance*: Provides conceptual overview of the novel architecture distinguishing D-PINNs from traditional PINNs and NLME approaches
- **Figure 2**: Detailed schematic of the D-PINN algorithm applied to a one-dimensional ODE problem, highlighting the computation of ODE loss terms through the sampling-based residual network
  - *Significance*: Illustrates the core methodological innovation: using sampled parameter distributions to compute physics-informed residuals for both mean and variance predictions
- **Figure 3**: Complete algorithmic workflow for D-PINN implementation showing the iterative process of sampling, denoising, ODE residual calculation, and parameter optimization
  - *Significance*: Serves as a practical implementation guide for researchers seeking to apply the methodology
- **Figure 4**: Modeling workflow for Case Study 1 showing simulation of virtual cohort, addition of measurement noise, aggregation to summary statistics, and D-PINN estimation
  - *Significance*: Demonstrates the proof-of-concept validation pipeline comparing estimated parameters against known simulation truth
- **Figure 5**: Structural representation of the one-compartment IV bolus pharmacokinetic model used in simulation studies
  - *Significance*: Defines the simple structural model used to validate the methodology before application to complex systems
- **Figure 6**: Structural representation of the minimal PBPK model for monoclonal antibodies showing plasma, lymph, tight ISF, and leaky ISF compartments with convection-driven transport
  - *Significance*: Illustrates the physiological complexity of the real-world case study involving mAb distribution and clearance
- **Figure 7**: Comparison of D-PINN predicted mean and variance of plasma concentration against observed values from simulated data, showing full time series and sampling time points
  - *Significance*: Demonstrates the model's ability to capture both central tendency and variability without overfitting to sampling noise
- **Figure 8**: Density plots comparing true population parameter distributions with D-PINN estimated distributions for elimination rate constant and volume of distribution
  - *Significance*: Visual validation showing accurate recovery of log-normal parameter distributions from aggregated data
- **Figure 9**: Sensitivity analysis showing evolution of MAPE and total loss as a function of collocation points (N_t)
  - *Significance*: Informs practical implementation decisions regarding computational cost versus accuracy trade-offs
- **Figure 10**: Sensitivity analysis showing evolution of MAPE and total loss as a function of sample size (N_s)
  - *Significance*: Demonstrates that increasing sample size improves parameter estimation accuracy but with diminishing returns beyond N_s=100
- **Figure 11**: Impact of varying correlation between PK parameters (k_el and V_d) on estimation accuracy
  - *Significance*: Highlights robustness of the method to moderate parameter correlations, though accuracy degrades with strong correlations
- **Figure 12**: Impact of missing observations (20-80% missing data) on D-PINN parameter estimation accuracy
  - *Significance*: Demonstrates remarkable robustness to sparse sampling, supporting application to incomplete datasets common in literature meta-analyses
- **Figure 13**: Comparison of D-PINN and MCMC model predictions against TAB008 plasma concentration summary statistics with median predictions and 95% prediction intervals
  - *Significance*: Real-world validation showing equivalent performance between D-PINNs and gold-standard MCMC methods for mAb PK modeling
- **Table 1**: Comparison of true population parameter values with D-PINN estimates for the one-compartment model, showing means and standard deviations of log-normal distributions
  - *Significance*: Quantitative validation demonstrating high accuracy for mean parameters and slight underestimation of high-variance parameters
- **Table 2**: Sensitivity of MAPE to loss weight configurations for ODE, initial condition, and data loss terms
  - *Significance*: Critical guidance for practitioners on hyperparameter tuning, showing that unit weights generally perform well but initial condition weights require careful balancing
- **Table 3**: Comparison of estimated parameters between D-PINN and MCMC methods for the mPBPK model of TAB008
  - *Significance*: Benchmark results showing comparable estimates for clearance (CL), reflection coefficients (sigma_T, sigma_leaky), and their variability

---

### Code & Reproducibility Assessment
The authors provide open-source Python implementations using DeepXDE (v1.9.3) with TensorFlow (v2.1.3) backend, available at https://github.com/ntua-unit-of-control-and-informatics/d-pinns-pharmacokinetics. Stan (v2.17.3 via RStan) code is provided for MCMC benchmarking. The repository includes complete workflows for both case studies, hyperparameter configurations, and data extraction protocols. This high level of transparency facilitates reproducibility and extension to other PK systems, though users should note the specific software versions and potential compatibility issues with newer TensorFlow releases.

---

### Supplementary Materials
The supplementary materials include three appendices providing detailed mathematical derivations. Appendix A derives the ODE-based estimates of concentration mean and variance derivatives using Leibniz's rule for differentiation under the integral sign, justifying the Monte Carlo approximations used in the loss function. Appendix B derives the relationship between observed and true (denoised) concentration variances under the log-normal error model, enabling separation of measurement noise from biological variability. Appendix C provides the complete physiological parameterization of the mPBPK model, including equations for calculating plasma volume, lymph volume, and interstitial fluid volumes based on body weight, hematocrit, and tissue-specific scaling factors. No additional datasets or code supplements are provided beyond the GitHub repository link.

---

### Future Directions
The authors identify several critical extensions: (1) incorporation of sample size information to better characterize uncertainty in summary statistics, as current implementation treats all summary statistics equally regardless of underlying sample size; (2) extension to multi-population analyses enabling covariate modeling across different demographic groups; (3) application to more complex systems including nonlinear pharmacokinetics and pharmacodynamic models; (4) development of hybrid approaches combining D-PINNs for rapid initial estimation with MCMC for rigorous uncertainty quantification; (5) incorporation of prior information for correlation parameters when individual-level data are partially available; and (6) extension to handle categorical covariates and mixture models. Additionally, investigation of self-adaptive loss weighting schemes could reduce the manual tuning burden currently required for optimal performance.

---

### Expert Commentary
From a senior pharmacometrics perspective, D-PINNs represent an elegant fusion of physics-informed machine learning and population PK principles. The key innovation—using neural networks to predict both mean and variance while enforcing ODE constraints via sampling—is conceptually sound and addresses a genuine pain point in our field: the wealth of unexploited aggregated data in the literature. The 10x speed improvement over MCMC is significant for industrial applications, particularly during early-stage meta-analyses requiring rapid iteration. However, several caveats warrant consideration: first, the 'black box' nature of neural networks may challenge regulatory acceptance compared to established NLME frameworks; second, the sensitivity to loss weight tuning (Table 2) requires expertise not typically found in standard PK groups; third, the identifiability issues with correlation parameters highlight fundamental information limits when working with summary statistics. Teaching points include the importance of understanding when aggregated data suffice versus when individual data are essential, and the potential for hybrid approaches combining D-PINNs for initial estimates with MCMC for final uncertainty quantification. This work foreshadows a broader trend toward physics-informed machine learning in MIDD, particularly for complex biological systems where mechanistic models meet data-driven approximations.

---

### Bottom Line
D-PINNs represent a paradigm shift for meta-analysis of legacy pharmacokinetic studies, enabling recovery of population parameter distributions from published mean and variance summaries without individual-level data. While offering 10-fold computational speed advantages over MCMC and comparable estimation accuracy, practitioners must carefully tune loss weights and acknowledge fundamental identifiability limitations—particularly the inability to estimate parameter correlations from summary statistics alone. This methodology is immediately applicable to biosimilar development and drug-drug interaction meta-analyses where only aggregated literature data exist, though it should be viewed as complementary to, rather than a replacement for, traditional NLME when individual data are available.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [Simplified representation of the D-PINNs framework. A physics-informed neural network (PINN), combining a neural network with an ODE system describing the pharmacokinetic model, ex],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [Schematic representation of the D-PINN algorithm applied to a simple one-dimensional problem. This schematic highlights the core component of the algorithm: the computation of the ],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [D-PINNs Algorithm],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [Modelling workflow for Case Study 1. A predefined population parameter distribution is used to generate a virtual cohort and simulate IV concentration–time profiles. After adding m],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [Schematic presentation of the simple, one-compartment pharmacokinetic model],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_06.jpg", width: 90%),
  caption: [Structural representation of the mPBPK model, redrawn and adapted from 23. The current implementation considers that mAbs are eliminated only through the plasma compartment],
  placement: auto,
) <fig-6>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_07.jpg", width: 90%),
  caption: [Comparison between the predicted mean and variance of the plasma concentration against the corresponding observed values. The full simulated time series of the simulated mean and v],
  placement: auto,
) <fig-7>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_08.jpg", width: 90%),
  caption: [Comparison of population parameter distribution and predicted parameter distribution using the parameter estimates from the D-PINN model. Both distributions were generated using 10],
  placement: auto,
) <fig-8>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_09.jpg", width: 90%),
  caption: [Evolution of the mean absolute percentage error (MAPE) of the D-PINN model with respect to the true parameter values (dashed line) along with evolution of the total loss (solid lin],
  placement: auto,
) <fig-9>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_10.jpg", width: 90%),
  caption: [Evolution of the mean absolute percentage error (MAPE) of the D-PINN model with respect to the true parameter values (dashed line) along with evolution of the total loss (solid lin],
  placement: auto,
) <fig-10>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_11.jpg", width: 90%),
  caption: [Impact of varying parameter correlation values,, on the accuracy of D-PINN parameter estimation. The model was configured with,, and unit loss weights],
  placement: auto,
) <fig-11>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_12.jpg", width: 90%),
  caption: [Impact of the percentage of missing observations on D-PINN parameter estimation accuracy. Simulated data were generated using, and the model was configured with,, and unit loss wei],
  placement: auto,
) <fig-12>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_13.jpg", width: 90%),
  caption: [Comparison of the D-PINN and MCMC model predictions against TAB008 plasma concentration summary statistics. The observed mean data are plotted as open circles with error bars repre],
  placement: auto,
) <fig-13>
#set page(flipped: false)
```