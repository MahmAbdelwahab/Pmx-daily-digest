---
layout: post
title: "What Is a Digital Twin in QSP, and Are We Doing It Right?"
date: 2026-03-17
authors: "Feigelman J"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "https://doi.org/10.1002/psp4.70229"
paper_type: generic
tags: [generic, qsp, oncology, digital-twins, regulatory]
excerpt_text: "This commentary critiques the proliferation of 'digital twin' methodologies in QSP, arguing that current distance-based filtering approaches are essentially Approximate Bayesian Computation (ABC) and are statistically inefficient. Essential reading for QSP modelers using patient-specific parameterization, as it proposes modern Bayesian inference (NUTS/HMC) as the rigorous alternative for generating true posterior distributions."
retroactively_classified: true
---

### Quick Take
This commentary critiques the proliferation of 'digital twin' methodologies in QSP, arguing that current distance-based filtering approaches are essentially Approximate Bayesian Computation (ABC) and are statistically inefficient. Essential reading for QSP modelers using patient-specific parameterization, as it proposes modern Bayesian inference (NUTS/HMC) as the rigorous alternative for generating true posterior distributions.

---

### Executive Summary
This commentary provides a critical examination of the rapidly expanding field of digital twins in Quantitative Systems Pharmacology (QSP), which has generated over 100 publications since 2024. Feigelman distinguishes between engineering definitions of digital twins (real-time updating in silico replicas) and current QSP implementations (offline parameter filtering), arguing that the latter constitutes a form of Approximate Bayesian Computation (ABC). The author demonstrates that distance-based filtering methods used to generate patient-specific parameterizations are statistically inefficient and produce only approximate posterior distributions. He proposes that the QSP field should adopt modern Bayesian inference algorithms—specifically NUTS (No-U-Turn Sampler) and HMC (Hamiltonian Monte Carlo) leveraging automatic differentiation—to generate true posterior samples. This shift would provide rigorous uncertainty quantification for patient-specific predictions while improving computational efficiency, establishing a statistically sound foundation for digital twin methodology in pharmacometrics.

---

## ⚡ Methodological Snapshot
This commentary paper systematically compares four methodological approaches for generating patient-specific QSP parameterizations. The first approach, termed 'digital twins' in current QSP literature, employs distance-based filtering resembling Approximate Bayesian Computation (ABC): parameters are sampled from prior distributions, simulations are run, and samples are retained if the L2-norm distance between simulated and observed biomarker trajectories falls below an ad hoc threshold (typically the 10-25 closest matches). The second approach uses maximum likelihood estimation via optimization algorithms (gradient descent or particle swarm), defining an explicit likelihood function (typically Gaussian) to measure discrepancy between simulation and data. The third and recommended approach employs modern Bayesian inference using gradient-based MCMC methods (NUTS or HMC), which sample from the true posterior distribution proportional to the product of likelihood and prior. The fourth approach, representing the engineering standard, involves real-time updating using online learning as new data arrive. The author argues that QSP has conflated offline parameterization with true digital twins, and that current ABC-like practices are computationally inefficient compared to optimization or full Bayesian methods.

---

## 🏗️ Structural Model Breakdown
Not applicable—this is a methodological commentary paper that does not present a specific structural QSP model. The paper discusses QSP models abstractly as systems of differential equations with parameters θ and state variables X, but does not specify compartment structures, rate constants, or mechanistic equations. The focus is entirely on the statistical inference layer (how to estimate θ given data D) rather than the structural model layer. The author references various therapeutic areas (cancer, cardiology, respiratory, Gaucher's disease) where these methods apply, but no specific model equations, compartmental structures, or parameter tables are provided. The 'structural' discussion is limited to the statistical framework: prior distributions π(θ), likelihood functions P(D|θ), and posterior distributions P(θ|D).

---

### Detailed Methodological Analysis

#### Modeling Approach
Conceptual comparison of statistical inference methodologies for patient-specific QSP model parameterization. The paper contrasts likelihood-free methods (ABC), frequentist optimization (MLE), and Bayesian inference (MCMC) within the context of generating individualized virtual patients or digital twins.

#### Data Sources
The paper references existing literature including works by Susilo et al., Joslyn et al., and Chasseloup et al. as examples of current digital twin implementations. No primary data collection or clinical trials are reported. The context spans various therapeutic areas including cancer, cardiology, respiratory diseases, and Gaucher's disease.

#### Estimation Methods
Four approaches are compared: (1) Approximate Bayesian Computation (ABC) via distance-based filtering from prior distributions; (2) Maximum Likelihood Estimation (MLE) using local optimization (gradient descent) or global optimization (particle swarm); (3) Modern Bayesian MCMC using NUTS (No-U-Turn Sampler) or HMC (Hamiltonian Monte Carlo) with automatic differentiation; (4) Traditional engineering digital twins using online learning with real-time parameter updating.

#### Model Evaluation
Evaluation criteria focus on statistical properties (approximate vs. true posterior distributions), computational efficiency (number of simulations required), and uncertainty quantification capabilities. The author critiques ABC for requiring thousands of simulations to retain only those meeting arbitrary distance thresholds, while Bayesian MCMC converges more efficiently to high-density posterior regions.

#### Covariate Analysis
Not applicable - this is a methodological commentary paper discussing statistical inference frameworks rather than specific covariate modeling. The paper focuses on patient-specific parameterization rather than population covariate effects.

---

### Scientific Context & Motivation
The QSP field has rapidly adopted 'digital twin' terminology from engineering and medical device contexts, where it denotes real-time updating in silico replicas of physical systems. However, QSP implementations typically involve offline parameterization of mechanistic models to match individual patient biomarker trajectories, creating a significant semantic and methodological disconnect. This paper addresses the critical knowledge gap regarding appropriate statistical frameworks for patient-specific parameterization, highlighting that current practices—sampling from priors and filtering based on simulation distance—constitute ABC, a likelihood-free inference method developed for intractable likelihoods. The work challenges the field to recognize that with modern computational tools (automatic differentiation, gradient-based MCMC), exact Bayesian inference is now feasible for complex QSP models, rendering ABC approaches unnecessarily approximate and computationally wasteful. The commentary bridges systems pharmacology with modern computational statistics, advocating for methodological standards that align with rigorous probabilistic inference rather than ad hoc filtering.

---

### Statistical Rigor Assessment
The paper provides a strong statistical critique of current QSP practices, correctly identifying the ABC nature of distance-based filtering methods. The author appropriately notes that ABC produces approximate posteriors that do not target the true Bayesian posterior density, unlike MCMC methods which converge to the exact posterior given sufficient samples. Sample size considerations are discussed in terms of computational efficiency: ABC requires generating thousands of prior samples to retain a small fraction (e.g., 10-25), while modern MCMC methods such as NUTS or HMC leverage gradient information to converge rapidly to high-density regions. The paper acknowledges the challenge of defining appropriate likelihood functions for complex QSP models but argues this is necessary for proper inference. Missing data handling is not explicitly addressed, though the Bayesian framework naturally accommodates missingness through marginalization. Sensitivity analyses are implied as a strength of true Bayesian approaches, which provide full posterior distributions rather than point estimates.

---

## 📊 Key Findings
The paper establishes three primary findings: (1) Current QSP 'digital twins' fundamentally differ from engineering definitions by lacking real-time updating capabilities and patient-specific physiological measurements, functioning instead as 'individualized virtual patients' generated through offline parameter filtering; (2) Distance-based filtering methods recently proposed for digital twin creation (retaining samples with smallest L2-norm distances) constitute a variant of Approximate Bayesian Computation (ABC), producing approximate rather than true posterior distributions; (3) Modern Bayesian inference algorithms (NUTS, HMC) leveraging automatic differentiation provide superior alternatives, generating true posterior samples that reflect both data likelihood and prior beliefs while avoiding the computational inefficiency of rejection-based ABC approaches. The author notes that optimization-based maximum likelihood estimation, while more efficient than ABC, provides only point estimates without uncertainty quantification, making full Bayesian inference the preferred methodological standard.

---

## 💡 Clinical & Regulatory Implications
The methodology chosen for digital twin generation directly impacts the reliability of patient-specific treatment predictions and counterfactual analyses (e.g., placebo control estimation). Distance-based ABC approaches risk underestimating uncertainty due to arbitrary acceptance thresholds, potentially leading to overconfident predictions in clinical decision-making. True Bayesian digital twins provide properly calibrated uncertainty intervals, critical for assessing treatment benefit in individual patients. The shift from offline parameterization (current QSP practice) to real-time updating (engineering standard) may enable adaptive treatment protocols, though this requires infrastructure for continuous data integration. For regulatory contexts, Bayesian digital twins offer transparent probabilistic frameworks that align with model-informed drug development (MIDD) standards, whereas ABC-based methods lack the statistical guarantees needed for formal evidentiary support.

---

### Strengths & Limitations

#### Strengths
- Clear conceptual framework distinguishing four distinct methodological approaches with increasing statistical sophistication
- Rigorous identification of current QSP practices as ABC, providing important historical and statistical context
- Practical recommendation for modern Bayesian tools (NUTS/HMC) that leverage automatic differentiation
- Timely intervention in a rapidly growing field (100+ publications since 2024) before methodologies become entrenched
- Appropriate distinction between engineering digital twins (real-time updating) and QSP implementations (offline parameterization)

#### Limitations (Acknowledged by Authors)
- No empirical comparison or simulation study is provided to quantify the computational efficiency gains of Bayesian MCMC versus ABC for specific QSP model structures
- The practical challenge of defining appropriate likelihood functions for complex QSP models with multiple time scales and unobserved latent variables is acknowledged but not fully resolved
- Assumes that automatic differentiation is readily implementable for all QSP models, which may not be true for legacy code or highly stiff differential equation systems

#### Limitations (Expert Review)
- The paper does not quantify the computational cost comparison between ABC and MCMC for high-dimensional parameter spaces typical of large QSP models (e.g., 50+ parameters)
- Limited discussion of model misspecification—if the QSP model structure is wrong, the Bayesian posterior may be misleadingly precise
- No guidance provided on prior specification for patient-specific parameters, which is critical for regularization in sparse data settings
- The distinction between 'individualized virtual patients' and 'digital twins' may be overly semantic for practitioners focused on predictive performance rather than terminology

#### Generalizability
The findings are broadly applicable to any QSP modeling context requiring patient-specific parameterization, including oncology immunotherapy, cardiovascular disease, respiratory medicine, and rare diseases such as Gaucher's disease. The critique of ABC versus Bayesian methods extends to any field using simulation-based inference for complex mechanistic models. However, the recommendations assume access to likelihood functions and gradient computation capabilities, which may limit immediate applicability in some legacy modeling environments.

---

### Key Equations

**ABC Distance Criterion**

$$
d(\theta) = \sum_{t} \left(\log y_{\text{obs}}(t) - \log y_{\text{sim}}(t, \theta)\right)^2 < \epsilon
$$

ABC distance metric used in QSP digital twin generation, where parameters are accepted if the squared log-transformed L2-norm between simulated and observed trajectories falls below a threshold. This forms the acceptance criterion for Approximate Bayesian Computation.

**Composite Likelihood Function**

$$
L(\theta|D) = \prod_{j=1}^{M} L_j(\theta|D_j) = \prod_{j=1}^{M} P(D_j|\theta)
$$

Composite likelihood function for multiple uncorrelated biomarkers, expressed as the product of individual likelihood functions. This formulation enables likelihood-based inference for multi-output QSP models.

**Bayesian Posterior**

$$
P(\theta|D) \propto P(D|\theta) \cdot \pi(\theta)
$$

Bayesian posterior distribution proportional to the product of the likelihood of the data given parameters and the prior probability of the parameters. This represents the target distribution for true Bayesian digital twin generation.

**Gaussian Error Model**

$$
y_{\text{obs}} = y_{\text{sim}}(\theta) + \varepsilon,   \varepsilon \sim N(0, \sigma^2)
$$

Measurement error model assuming Gaussian residuals, where observed data equals model simulation plus random error. This forms the basis for defining the likelihood function in optimization-based approaches.

---

### Figures & Tables

- **Figure 1**: Schematic comparison of four parameterization approaches: (A) Traditional digital twins with real-time updating and online learning, (B) Approximate Bayesian Computation (ABC) with distance-based filtering from prior distributions, (C) Maximum likelihood estimation via optimization algorithms, and (D) Full Bayesian inference sampling from the true posterior using MCMC methods.
  - *Significance*: This figure provides the conceptual framework for the paper's central argument, visually distinguishing between engineering-standard digital twins (updating) and QSP-standard approaches (offline filtering). It effectively illustrates the progression from ad hoc ABC methods to statistically rigorous Bayesian inference, serving as a roadmap for methodology selection in patient-specific modeling.

---

### Future Directions
Key questions raised include: (1) Empirical benchmarking of computational efficiency between ABC and modern MCMC for high-dimensional QSP parameter spaces typical of oncology or immunology models; (2) Development of QSP-specific automatic differentiation frameworks to facilitate gradient-based inference; (3) Investigation of hybrid approaches combining MLE point estimation with Laplace approximation for uncertainty quantification when full MCMC is computationally prohibitive; (4) Standardization of 'digital twin' terminology within QSP to distinguish between real-time updating systems (engineering standard) and offline parameterization methods; (5) Extension of these methods to handle missing data, model misspecification, and structural uncertainty in QSP models; (6) Integration of digital twin frameworks with clinical trial simulation for virtual patient enrichment strategies.

---

### Expert Commentary
This paper delivers a much-needed statistical reality check to the QSP field's adoption of 'digital twin' terminology. The identification of current filtering practices as ABC is particularly astute—many practitioners appear unaware they are using approximate methods when exact Bayesian computation is now tractable. The emphasis on automatic differentiation and gradient-based MCMC reflects broader trends in computational statistics and deep learning that pharmacometrics should embrace. However, the paper somewhat understates the practical challenges: defining appropriate likelihood functions for complex QSP models with multiple time scales, unobserved latent variables, and structural model misspecification remains non-trivial. The distinction between 'individualized virtual patients' (the author's preferred term for current practices) and true 'digital twins' is an important semantic clarification that could improve interdisciplinary communication. Teaching point: Students should understand that ABC was developed for likelihood-free inference, but if you can write a likelihood (even approximately), modern MCMC will almost always outperform rejection sampling. The field trend here mirrors the broader shift in scientific computing toward differentiable programming and gradient-based inference.

---

### Bottom Line
Practicing pharmacometricians should recognize that current distance-based filtering methods for QSP digital twins are statistically equivalent to Approximate Bayesian Computation (ABC) and are computationally inefficient compared to modern Bayesian inference. For patient-specific parameterization, abandon ad hoc distance thresholds in favor of full Bayesian inference using NUTS or HMC with automatic differentiation. This approach generates true posterior distributions rather than approximate samples, providing rigorous uncertainty quantification essential for clinical prediction. While defining likelihood functions for complex QSP models requires effort, the statistical rigor and efficiency gains justify the investment, particularly as automatic differentiation tools become increasingly accessible.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: Comparison of methods for model parameterization. (A) Digital twins use an initial estimate of the parameters theta_0 and model state vari],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```