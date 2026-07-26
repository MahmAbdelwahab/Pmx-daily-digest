---
layout: post
title: "Redefining Parameter Estimation and Covariate Selection via Variational Autoencoders: One Run Is All You Need"
date: 2026-07-26
authors: "Rohleff J, Bihr F, Bähler D, Senn B, Nars U, Pfister M, Koch G, Schropp J"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025, 14(12): e70129"
doi: "10.1002/psp4.70129"
paper_type: methodology
tags: [methodology, covariate-analysis]
excerpt_text: "This paper presents a Variational Autoencoder (VAE) framework for NLME modeling that simultaneously estimates population parameters and performs automated covariate selection in a single run, outperforming traditional stepwise methods in efficiency while maintaining comparable accuracy."
pdf_path: "/assets/digests/2026-07-26-redefining-parameter-estimation-and-covariate-selection-via-variational/PMx_Redefining_Parameter_Estimation_and_Cova_20260726.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a Variational Autoencoder (VAE) framework for NLME modeling that simultaneously estimates population parameters and performs automated covariate selection in a single run, outperforming traditional stepwise methods in efficiency while maintaining comparable accuracy.

---

### Executive Summary
This paper introduces a Variational Autoencoder (VAE) framework adapted for nonlinear mixed effects (NLME) modeling that simultaneously estimates population parameters and performs automated covariate selection in a single run. By replacing the standard ELBO with a BICc-based objective, the VAE evaluates all covariate-parameter combinations at once, eliminating the need for iterative model fitting. Two case studies (theophylline PK and neonatal weight progression) demonstrate that the VAE achieves parameter estimates and covariate selection quality comparable to SAEM-based methods (SAMBA, COSSAC, SCM) while requiring only one run versus 2–244 runs. The approach is implemented in Python using PyTorch and TorchODE.

---

### Scientific Context & Motivation
NLME modeling is central to model-informed drug development but suffers from time-consuming iterative covariate selection. Current automated methods (SCM, SAMBA, COSSAC) require multiple model fits. VAEs offer a generative AI approach to Bayesian inference that could streamline this process, but have not been adapted for NLME covariate selection.

---

## ⚡ Methodological Snapshot
The paper adapts Variational Autoencoders (VAEs) for NLME modeling by structuring the latent space to represent individual model parameters and using a BICc-based loss function (BICc-ELBO) to simultaneously estimate population parameters and perform automated covariate selection. The VAE consists of an LSTM encoder that infers posterior distributions of individual parameters from observed data, and a decoder that reconstructs the data using the structural model and covariate effects. A burn-in phase with KL annealing stabilizes training. The method evaluates all covariate-parameter combinations in a single optimization run, eliminating iterative model fitting.

---

## 📐 Statistical Framework
The VAE approximates the intractable posterior distribution of individual parameters with a Gaussian distribution (mean and diagonal covariance) parameterized by an LSTM encoder. The decoder uses the structural model and a full covariate effect matrix. The loss function is the BICc-ELBO, which combines the ELBO with a penalty term based on the corrected Bayesian Information Criterion (BICc) to account for the number of parameters and random effects. Optimization is performed via stochastic gradient descent (Adam).

---

### Estimator Behavior
The VAE estimates population parameters with low bias relative to SAEM (e.g., theophylline clearance: 1.63 vs 1.60 L/h). Covariate effects converge to zero for irrelevant covariates and stabilize for relevant ones. The BICc-ELBO loss ensures consistent model selection. The Gaussian posterior approximation may introduce bias if the true posterior is non-Gaussian, but in the tested cases the gap was small.

---

### Validation Design
Two real-world case studies: (1) Theophylline pharmacokinetics (12 subjects, single oral dose) with 3 covariates (weight, sex, smoking status) on clearance and volume. (2) Neonatal weight progression (large dataset) with 5 covariates (sex, delivery mode, gestational age, maternal age, birth weight) on 4 model parameters. VAE results compared to SAEM-based SAMBA, COSSAC, and SCM using BICc computed via linearization and importance sampling. Likelihood and BICc values reported for all methods.

---

### Comparison to Alternatives
Compared to SAEM-based methods (SAMBA, COSSAC, SCM), the VAE achieves comparable covariate selection quality and parameter estimates but requires only a single run versus 2–244 runs for the alternatives. The VAE's Gaussian posterior approximation is less flexible than MCMC-based SAEM, but in the tested cases the approximation was adequate. The VAE is computationally more efficient because it avoids repeated ODE solutions per MCMC sample; instead, it uses a single encoder pass per sample.

---

### Implementation Guidance
Implemented in Python 3.13 with PyTorch and TorchODE. Uses a single LSTM layer with hidden dimension depending on number of individuals and parameters. Adam optimizer with automatic learning rate adaptation. Burn-in phase with KL annealing recommended for stability. For theophylline (12 individuals, 1 parameter), covariate selection added ~6% CPU time (5.8s to 6.2s). For neonatal weight (large dataset), covariate selection added ~26% CPU time. Code available on GitHub.

---

## 📊 Key Findings
The VAE simultaneously estimates population parameters and selects covariates in one run, achieving results comparable to SAEM-based methods (SAMBA, COSSAC, SCM) that require 2–244 runs. For theophylline, VAE estimates (e.g., clearance 1.63 L/h) closely match SAEM (1.60 L/h). For neonatal weight, VAE-selected covariates overlap substantially with other methods. The BICc-ELBO loss effectively identifies relevant covariate-parameter relationships.

---

### Strengths & Limitations

#### Strengths
- Single-run estimation and covariate selection dramatically reduces computational cost.
- BICc-ELBO loss provides principled model selection.
- Flexible architecture can be extended to other data types and model structures.
- Open-source implementation facilitates reproducibility and adoption.
- Burn-in phase with KL annealing improves stability.

#### Limitations (Acknowledged by Authors)
- Gaussian posterior approximation may not capture non-Gaussian true posteriors.
- VAE sensitive to hyperparameters and initialization; burn-in phase needed.
- ODE solving remains a computational bottleneck.

#### Limitations (Expert Review)
- Only tested on two case studies; broader validation needed.
- No theoretical guarantees on convergence or optimality of covariate selection.
- Comparison to SAEM-based methods may be biased if SAEM implementations are not optimally tuned.
- LSTM encoder may not scale well to very long time series.

#### Generalizability
Demonstrated on two real-world datasets (theophylline PK, neonatal weight). Applicable to any NLME model with smooth, approximately Gaussian posteriors. May not generalize to models with highly non-Gaussian posteriors or very small datasets.

---

### Key Equations

**NLME model**

{% raw %}
$$
\phi_i = X_i \beta + \eta_i,   \eta_i \sim \mathcal{N}(0, \Omega)
$$
{% endraw %}

Standard NLME model: individual parameters as function of fixed effects, covariates, and random effects.

**Marginal likelihood**

{% raw %}
$$
p(y_i | \theta) = \int p(y_i | \phi_i) p(\phi_i | \theta) d\phi_i
$$
{% endraw %}

Marginal likelihood to be maximized in NLME.

**ELBO loss**

{% raw %}
$$
\mathcal{L}_{ELBO} = \mathbb{E}_{q_\psi(\phi|y)}[\log p_\theta(y|\phi)] - KL(q_\psi(\phi|y) \| p(\phi))
$$
{% endraw %}

ELBO loss function for VAE.

**BICc-ELBO loss**

{% raw %}
$$
\mathcal{L}_{BICc-ELBO} = -2 \mathcal{L}_{ELBO} + k \log(n) + 2 \binom{k}{2} \log(n)
$$
{% endraw %}

BICc-ELBO loss function for covariate selection.

**Covariate effect matrix**

{% raw %}
$$
\beta_{p,c} \text{ estimated for each parameter-covariate pair; irrelevant effects shrink to zero}
$$
{% endraw %}

Covariate effect matrix with regularization.

**Neonatal weight model**

{% raw %}
$$
w(t) = w_0 e^{-k_e t} + G (1 - e^{-k_g t})
$$
{% endraw %}

Neonatal weight progression model (exponential decay + linear growth).

---

### Figures & Tables

- **Figure 1**: Schematic of the VAE framework showing LSTM encoder, latent space (individual parameters), and decoder (structural model + covariate effects).
  - *Significance*: Illustrates the architecture integrating NLME structure into VAE.
- **Figure 2**: Convergence of population parameters and covariate effects for theophylline dataset over training epochs.
  - *Significance*: Demonstrates burn-in phase and convergence behavior of the VAE.
- **Figure 3**: Neonatal weight progression data with covariates (sex, delivery mode, gestational age, maternal age, birth weight).
  - *Significance*: Shows the dataset used for the second case study.
- **Figure 4**: Heatmap of selected covariates by VAE, COSSAC, SAMBA, and SCM for neonatal weight model.
  - *Significance*: Compares covariate selection patterns across methods.
- **Figure 5**: Convergence of all covariate effects for neonatal weight model; effects converging to zero are not selected.
  - *Significance*: Shows how the VAE automatically prunes irrelevant covariates during training.

---

### Code & Reproducibility Assessment
Python implementation using PyTorch and TorchODE is available on GitHub (https://github.com/janrohleff/vae_nlme). Random seed fixed for reproducibility. All hyperparameters provided in Supporting Information S1.

---

### Supplementary Materials
Supporting Information S1 provides hyperparameters and implementation details. S2 contains additional theophylline results. S3 contains neonatal weight population fit results without covariates.

---

### Future Directions
Extend VAE to capture non-Gaussian posteriors using normalizing flows or mixture models. Apply to time-dependent covariates by modifying encoder output. Replace unknown decoder components with neural networks for automated model discovery. Integrate multimodal data (e.g., medical images, genomics) as encoder inputs.

---

### Expert Commentary
This work represents a significant methodological advance by marrying generative AI with pharmacometric modeling. The key innovation is the BICc-ELBO loss, which enables principled covariate selection within a VAE framework. The computational efficiency gains are substantial, especially for large covariate sets. However, the reliance on Gaussian posterior approximations may limit applicability to models with highly non-Gaussian posteriors. Future extensions to normalizing flows or mixture models could broaden the scope. The approach is particularly promising for automated model building in MIDD.

---

### Bottom Line
The VAE-NLME framework provides a practical, efficient alternative for simultaneous parameter estimation and covariate selection in one run. It is best suited for models with smooth, approximately Gaussian posteriors and moderate-to-large datasets. Practitioners should consider it when computational efficiency and automation are prioritized over capturing non-Gaussian posterior features.

---

---

## 📊 Figures

![The Variational Autoencoder (VAE) framework. In the left panel, the LSTM encoder infers the latent variablefrom the measurements. The encoder posterior distribut]({{ site.baseurl }}/assets/digests/2026-07-26-redefining-parameter-estimation-and-covariate-selection-via-variational/figures/fig_01.jpg)

![Theophylline example. Convergence of the population parameters(including covariate effects) for the theophylline data set. The VAE starts with a burn-in phase of]({{ site.baseurl }}/assets/digests/2026-07-26-redefining-parameter-estimation-and-covariate-selection-via-variational/figures/fig_02.jpg)

![Neonatal weight progression example. The neonate weight data set with clinical covariates sex (sex), mode of delivery (DelM), gestational age (GA), maternal age]({{ site.baseurl }}/assets/digests/2026-07-26-redefining-parameter-estimation-and-covariate-selection-via-variational/figures/fig_03.jpg)

![Neonatal weight progression example. Selected covariates for the VAE, COSSAC, SAMBA and SCM models.Dark greencells indicate covariates selected by all four metho]({{ site.baseurl }}/assets/digests/2026-07-26-redefining-parameter-estimation-and-covariate-selection-via-variational/figures/fig_04.jpg)

![Neonatal weight progression example. Convergence of the covariate effectsfor all possible covariate-parameter combinations. Covariate effects that converge to ze]({{ site.baseurl }}/assets/digests/2026-07-26-redefining-parameter-estimation-and-covariate-selection-via-variational/figures/fig_05.jpg)