---
layout: post
title: "Modeling Peak Expiratory Flow in Patients With Asthma and Quantifying Treatment Effects Using a Mixed-Effects Hidden Markov Model"
date: 2026-06-07
authors: "Ludvig Jakobsson, Mikael Baaz, Johan Leander, Philip Gerlee, and Mats Jirstrand"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(6): e70281"
doi: "10.1002/psp4.70281"
paper_type: popk
tags: [popk]
excerpt_text: "This paper presents a novel mixed-effects hidden Markov model (MEHMM) for analyzing home-measured peak expiratory flow (PEF) in asthma patients, with the goal of quantifying treatment effects from underlying disease-state dynamics. The method is validated through a simulation study and then applied to phase 2b clinical trial data for velsecorat, successfully identifying statistically significant treatment effects on transition probabilities and variability. Pharmacometricians interested in leveraging rich longitudinal spirometry data to shorten clinical trial durations will find this approach both innovative and practical."
pdf_path: "/assets/digests/2026-06-07-modeling-peak-expiratory-flow-in-patients-with-asthma-and-quantifying-treatment/PMx_Modeling_Peak_Expiratory_Flow_in_Patient_20260607.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a novel mixed-effects hidden Markov model (MEHMM) for analyzing home-measured peak expiratory flow (PEF) in asthma patients, with the goal of quantifying treatment effects from underlying disease-state dynamics. The method is validated through a simulation study and then applied to phase 2b clinical trial data for velsecorat, successfully identifying statistically significant treatment effects on transition probabilities and variability. Pharmacometricians interested in leveraging rich longitudinal spirometry data to shorten clinical trial durations will find this approach both innovative and practical.

---

### Executive Summary
This work develops a two-state Gaussian mixed-effects hidden Markov model (MEHMM) for home-measured peak expiratory flow (PEF) in asthma. The latent states represent periods of high (normal) and low (worsened) lung function, with treatment effects modeled on transition probabilities, observation mean, and variability. An inference framework based on a modified stochastic approximation expectation–maximization (SAEM) algorithm is implemented in R and validated via simulation. Applied to a phase 2b trial of velsecorat, the model detects significant dose-dependent effects on the transition probability from low to high state and on within-state variability, while no effect on mean high-state PEF was observed, possibly due to informative dropout. The approach provides a proof-of-concept for extracting treatment-relevant signals from home spirometry data without requiring predefined event thresholds.

---

### Scientific Context & Motivation
In asthma and COPD, exacerbations (acute worsening events) are a key clinical endpoint, but their low incidence leads to long and costly trials. Home-measured spirometry, especially PEF, offers rich temporal data, but its irregular dynamics challenge conventional analysis. Previous methods such as detrended fluctuation analysis or stochastic mixed-effects models have linked PEF variability to exacerbation risk. More recently, composite endpoints like CompEx use threshold-based PEF drops to define events, but these may miss individual-level dynamics. This paper addresses the gap by modeling PEF with a latent disease-state process that identifies sustained worsening periods at the individual level, enabling direct estimation of treatment effects on state dynamics without predetermined cutoffs.

---

## ⚡ Methodological Snapshot
The authors develop a two-state Gaussian mixed-effects hidden Markov model (MEHMM) for home-measured peak expiratory flow (PEF). The latent Markov chain has states 'high PEF' (normal) and 'low PEF' (worsened), with transition probabilities modeled on the logistic scale. Observation model: PEF given state is normal with state-dependent mean (log-transformed high mean + drop for low state) and common log-variance. Random effects (log or logit transformed) are independent, with covariate/dose effects additive on transformed parameters. Estimation uses a modified SAEM algorithm incorporating forward-backward recursions, MCMC sampling for random effects, and Viterbi decoding for latent states. Dose–response relationships (categorical, linear, Emax) are directly integrated. Implemented in R.

---

## 🏗️ Structural Model Breakdown
The model is a discrete-time, two-state hidden Markov model (HMM) extended with mixed effects. Latent states: $S_t \in \{0 \text{ (high PEF)}, 1 \text{ (low PEF)}\}$. Transition probabilities: $p_{0,1} = P(S_t=1|S_{t-1}=0)$ and $p_{1,0} = P(S_t=0|S_{t-1}=1)$, both constrained to $\leq 0.5$ to enforce sustained periods. Observation model: $PEF_t | S_t=0 \sim N(\mu_{\text{high}}, \sigma^2)$, $PEF_t | S_t=1 \sim N(\mu_{\text{high}} - \text{drop}, \sigma^2)$, where $\mu_{\text{high}} = \exp(\theta_1)$, $\text{drop} = \exp(\theta_2)$ (so low state mean $= \exp(\theta_1) - \exp(\theta_2)$). Between-subject variability: individual parameters $\theta_i$ (log or logit transformed) are multivariate normal with diagonal covariance (independent random effects): $\log(\mu_{\text{high},i}) = \mu_1 + \beta_1 \cdot \text{dose} + \eta_{1,i}$; $\log(\text{drop}_i) = \mu_2 + \beta_2 \cdot \text{dose} + \eta_{2,i}$; $\log(\sigma^2_i) = \mu_3 + \beta_3 \cdot \text{dose} + \eta_{3,i}$; $\text{logit}(p_{0,1,i}) = \mu_4 + \beta_4 \cdot \text{dose} + \eta_{4,i}$ with constraint $\text{logit}(p) = 2 \cdot \text{logit}(p')$; $\text{logit}(p_{1,0,i}) = \mu_5 + \beta_5 \cdot \text{dose} + \eta_{5,i}$ with same constraint. Dose effects $\beta$ can take categorical, linear, or Emax forms.

---

### Detailed Methodological Analysis

#### Modeling Approach
Mixed-effects hidden Markov model (MEHMM) with two latent states (high PEF, low PEF). Observation: $PEF \sim N(\mu_{\text{state}}, \sigma^2)$ with $\mu_{\text{high}} = \exp(\eta_1)$, $\mu_{\text{low}} = \exp(\eta_1 - \eta_2)$ (drop). Log-variance $\eta_3 = \log(\sigma^2)$. Transition probabilities: $\text{logit}(p_{0,1}) = \eta_4$, $\text{logit}(p_{1,0}) = \eta_5$, constrained to $[0,0.5]$ via factor 2 in logit transformation. Random effects: $\eta_i \sim N(\mu + \beta \cdot \text{dose\_design}, \text{diag}(\omega^2))$, with independent components. Dose–response via constant, linear, Emax, or categorical functions on $\beta$. Software: R (custom implementation of SAEM).

#### Data Sources
Simulation: 200 datasets with parameters mimicking clinical trial ($N=100$ per arm, 2 arms: placebo + active, $T=200$ measurements). Clinical: Phase 2b dose-finding trial of velsecorat (NCT03622112): 5 active dose groups + placebo, twice-daily home PEF over 12 weeks. Subject demographics not detailed but informed consent reviewed for reuse.

#### Estimation Methods
Modified stochastic approximation expectation–maximization (SAEM) algorithm with MCMC step (Metropolis-Hastings) to sample individual random effects from posterior conditional on latent states. E-step uses forward-backward algorithm (Baum-Welch) to compute smoothed state probabilities. Maximization step updates population parameters (fixed effects, random-effects variances, covariate coefficients). Standard errors via Louis' formula with MCMC approximation of Fisher information.

#### Model Evaluation
Simulation study: bias, standard deviation of estimates, mean standard error, coverage of 95% CI, EBE accuracy ($R^2$, shrinkage), Viterbi path accuracy via confusion matrix. Clinical: AIC comparison among models (no effect, categorical, mixed Emax/constant), $R^2$ of observed vs. predicted PEF, visual inspection of latent paths.

#### Covariate Analysis
Covariates: treatment dose (continuous or categorical). Stepwise approach: first fit categorical model to identify parameters with significant effects (drop $d$, variability $\sigma^2$, transition $p_{1,0}$), then fit parametric dose–response (Emax for $d$ and $\sigma^2$, constant for $p_{1,0}$). Effects on high-mean and other transition were non-significant and removed. No other covariates (age, sex, etc.) were considered.

---

### Statistical Rigor Assessment
The simulation study is well-designed with 200 replicates, evaluating bias, precision, and coverage. The coverage of 95% CIs (91–97%) is acceptable, though slightly low for transition probability parameters. The use of Louis' formula for standard errors is appropriate. The clinical application uses AIC for model selection, a standard approach. However, the diagonal covariance assumption is restrictive and may lead to biased variance estimates if correlations exist (observed a posteriori). The large shrinkage (66%, 57%) for transition probability EBEs indicates limited individual-level information, but the random-effects structure still yields unbiased population estimates. No formal goodness-of-fit tests are reported beyond $R^2$ of predictions. Missing data from dropout is not handled (informative censoring acknowledged). The confidence intervals for dose–response curves via sampling from covariance matrix are appropriate.

---

## 📊 Key Findings
The simulation study (200 datasets, length 200 per subject) showed low bias and good coverage (91–97%) for population parameters, with individual empirical Bayes estimates (EBEs) accurate for observation parameters but with moderate shrinkage for transition probabilities. State decoding accuracy (Viterbi) averaged 98.9%. In the clinical trial application (velsecorat, 5 active doses + placebo), statistically significant treatment effects were found on the drop parameter (less severe worsening), inter-state variability (more stable measurements), and transition probability from low to high state (faster recovery). An Emax model best described these dose–response relationships. No significant effect on mean high-state PEF was detected, possibly due to informative dropout in the placebo group. Predictions showed good agreement ($R^2 = 0.94$) with observed PEF.

---

## 💡 Clinical & Regulatory Implications
The model provides a new way to quantify treatment effects on home-measured PEF without relying on rare exacerbation events. Statistically significant effects were found on the drop parameter (disease severity in low state), within-state variability (stability), and recovery transition (speed of returning to normal). These effects could be used to differentiate doses in early-phase trials, potentially shortening development timelines. However, the clinical relevance of these latent-state parameters needs to be linked to hard outcomes like exacerbations or CompEx events before supporting regulatory decisions. The lack of effect on mean high-state PEF is surprising and may indicate the need to model time-to-effect or dropout. For practitioners, the MEHMM offers a complementary endpoint class that captures treatment effects on lung function dynamics beyond simple mean changes.

---

### Strengths & Limitations

#### Strengths
- Novel application of MEHMM to home-measured PEF, enabling individual-level identification of disease states
- Comprehensive simulation study validating parameter recovery and state decoding accuracy
- Flexible dose–response modeling (categorical, Emax, linear) directly integrated in the estimation framework
- Full methodological transparency with publicly available R code on GitHub
- Use of clinically relevant data from a phase 2b trial with multiple dose arms

#### Limitations (Acknowledged by Authors)
- Diagonal covariance matrix for random effects may miss correlations (some observed between parameters)
- Upper bound of 0.5 on transition probabilities to avoid rapid unrealistic switches
- Assumption of instantaneous state transitions; real transitions are likely smoother
- Substantial dropout in the placebo group may have biased mean high-state PEF estimates
- High shrinkage (66% and 57%) for transition probability EBEs limits individual-level inference

#### Limitations (Expert Review)
- Model does not account for temporal autocorrelation within states; future work could add autoregressive components
- No joint modeling of dropout (informative censoring) which biases treatment effect estimates
- $ED_{50}$ parameter in Emax model had large uncertainty due to limited dose range, reducing confidence in the dose–response shape
- Only PEF is used; combining with symptoms or reliever use could improve state identification
- Two-state assumption may oversimplify the true spectrum of disease severity

#### Generalizability
The approach is generalizable to other respiratory diseases with home-monitored spirometry and potentially to other biomarkers with latent health states. However, model assumptions (instantaneous transitions, diagonal random-effects covariance) may need adaptation for different populations or longer time series. The software implementation is freely available, facilitating replication and extension.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the MEHMM estimation framework, showing the SAEM algorithm with MCMC step for sampling random effects and E-step using forward-backward algorithm.
  - *Significance*: Provides a high-level overview of the computational workflow, essential for understanding how population parameters, individual parameters, and latent states are jointly estimated.
- **Figure 2**: Four simulated individual PEF time series with true latent states (blue/red shading) and estimated latent paths (black lines) from the Viterbi algorithm.
  - *Significance*: Illustrates the model's ability to recover underlying disease-state transitions, with some short-duration states missed, validating the state decoding accuracy (98.9%) reported in the simulation study.
- **Figure 3**: Estimated dose–response curves for three parameters: drop parameter ($d$), inter-state variability ($\sigma^2$), and transition probability $p_{1,0}$ (low to high state). Categorical exploratory estimates (points) and fitted Emax/constant curves with 95% CI.
  - *Significance*: Core result showing treatment effects: drug reduces severity of low state, reduces within-state variability, and increases recovery rate. The Emax fit recapitulates the categorical estimates with tighter uncertainty.
- **Figure 4**: Six individual PEF time series (one per treatment group: placebo to 720 μg) with the most likely latent path (red/black shading) from the final model.
  - *Significance*: Demonstrates face validity: latent states correspond to sustained periods of high/low PEF, and transitions align with clinical expectation. Patients on higher doses appear to recover more quickly (shorter low-state periods).
- **Figure 5**: (A) Individual predicted vs. observed PEF with $R^2=0.94$. (B) Distribution of random effects: population density (black) vs. empirical Bayes estimates (shaded histograms), showing shrinkage particularly for transition probabilities.
  - *Significance*: Confirms good overall model fit at the observed data level. The shrinkage plots highlight limited individual-level identifiability for transition parameters, justifying the random effects approach.
- **Table 1**: Simulation results: true parameter values, mean estimates, standard deviations, mean standard errors, and 95% CI coverage for all 11 population parameters (high PEF, drop, variability, transition probabilities) with categorical treatment effects.
  - *Significance*: Validates estimation performance: low bias, standard errors matching empirical variability, coverage around 94% (range 91-97%), confirming the SAEM algorithm works reliably for MEHMM.
- **Table 2**: Mean model parameters (transformed to original scale) for placebo and highest-dose (720 μg) groups with 95% CI: high PEF (317 for both), drop (0.879 vs. 0.900), intra-state variability (30.5 vs. 25.4 L/min), and transition probabilities ($p_{0,1}: 0.031 \text{ vs. } 0.031$; $p_{1,0}: 0.023 \text{ vs. } 0.043$).
  - *Significance*: Provides clinically interpretable effect sizes: the highest dose increases the recovery transition probability almost twofold (0.023 to 0.043) and reduces within-state variability by ~17%, while mean high-state PEF remains unchanged.

---

### Code & Reproducibility Assessment
The MEHMM inference framework is implemented in R and available in a public GitHub repository (link provided in Supporting Information). The implementation includes the SAEM algorithm, forward-backward algorithm, Viterbi decoding, and dose–response modeling capabilities. Simulation code and clinical trial analysis scripts are also likely included, though exact reproducibility details are not explicitly described.

---

### Supplementary Materials
The supplementary materials include Tables S1–S5: results for time series lengths 50 and 1000 (Tables S1–S2), exploratory categorical model estimates (Table S3), final mixed dose–response model estimates (Table S4), and AIC/$R^2$ comparison across models (Table S5). Also includes Figures S1–S3: EBE vs. true parameters, $\eta$-shrinkage distributions, and random effects boxplots by treatment group.

---

### Future Directions
Immediate extensions include adding autoregressive or stochastic process to model within-state temporal correlation, jointly modeling dropout to address informative censoring, and expanding to multivariate outcomes (e.g., symptoms, reliever use). Future work should also validate the relationship between estimated disease-state parameters and clinical outcomes like exacerbation risk or CompEx events. Further simulation studies with varying dropout rates and dose ranges would strengthen confidence in the model's utility for go/no-go decisions.

---

### Expert Commentary
This paper represents a significant methodological advance in respiratory pharmacometrics by moving from heuristic fluctuation analysis to formal latent-state modeling of home spirometry. The use of SAEM for MEHMM inference is technically sound and builds on established theory. The approach elegantly addresses the challenge of low-exacerbation-rate trials by extracting information from the entire PEF trajectory. A notable limitation is the assumption of instantaneous transitions, which contradicts the gradual worsening often seen clinically; however, the pragmatic constraint of $p<0.5$ mitigates this somewhat. The lack of treatment effect on mean high-state PEF is intriguing and likely reflects placebo dropout—a reminder that missing data mechanisms must be addressed in such analyses. The open-source R implementation is a valuable resource for the field. I would recommend exploring a three-state model (e.g., normal, moderate, severe) and incorporating a turnover model for delayed drug effects. Overall, this work sets the stage for a new class of endpoints based on disease-state dynamics rather than event rates.

---

### Bottom Line
This study provides a well-validated MEHMM framework for extracting treatment effects from home-measured PEF in asthma, demonstrating that latent disease-state modeling can capture meaningful drug effects on transition dynamics and variability. While additional work is needed to link these effects to exacerbation risk and address limitations like informative dropout, the approach offers a promising path toward more efficient clinical trials by leveraging high-resolution spirometry data. Practitioners should consider this method as a complement or alternative to threshold-based composite endpoints.

---

---

## 📊 Figures

![A schematic view of the estimation framework used in this work. The algorithm alternates between a Markov chain Monte Carlo (MCMC) step where patient-specific pa]({{ site.baseurl }}/assets/digests/2026-06-07-modeling-peak-expiratory-flow-in-patients-with-asthma-and-quantifying-treatment/figures/fig_01.jpg)

![Four simulated individual time series from a mixed-effects hidden Markov model with the population parameters from Table1. The true latent state for each observa]({{ site.baseurl }}/assets/digests/2026-06-07-modeling-peak-expiratory-flow-in-patients-with-asthma-and-quantifying-treatment/figures/fig_02.jpg)

![Estimated dose effect for the drop parameter, the inter-state variability, and the transition probability. The fitted dose–response curve (constant effect for, a]({{ site.baseurl }}/assets/digests/2026-06-07-modeling-peak-expiratory-flow-in-patients-with-asthma-and-quantifying-treatment/figures/fig_03.jpg)

![Six individual PEF time series from the clinical trial, one from each treatment group. The most likely latent path, estimated using the Viterbi algorithm and the]({{ site.baseurl }}/assets/digests/2026-06-07-modeling-peak-expiratory-flow-in-patients-with-asthma-and-quantifying-treatment/figures/fig_04.jpg)

![(A) Individual PEF predictions plotted against PEF measurements with a unit slope line and the coefficient of determination () of a linear regression. (B) Distri]({{ site.baseurl }}/assets/digests/2026-06-07-modeling-peak-expiratory-flow-in-patients-with-asthma-and-quantifying-treatment/figures/fig_05.jpg)