---
layout: post
title: "Exposure-safety Markov modeling of ocular adverse events in patient populations treated with tisotumab vedotin"
date: 2026-05-15
authors: "Feng S, Gunawan R, Passey C, Polhamus D, Voellinger J, O'Day C, Gerritsen A, Hanley WD, Carret A-S, Soumaoro I, Gupta M"
journal: "J Pharmacokinet Pharmacodyn 52, 55 (2025)"
doi: "10.1007/s10928-025-10003-w"
paper_type: popk
tags: [popk, covariate-analysis, oncology]
excerpt_text: "This paper develops a discrete-time Markov model (DTMM) to characterize the exposure–response relationship between tisotumab vedotin (TV) ADC exposure and the longitudinal time course of grade $\\ge 2$ ocular adverse events (OAEs) in 757 patients with advanced solid tumors. The model incorporates severity, onset, duration, and dose modifications, and was used to simulate alternative dosing regimens. Pharmacometricians involved in ADC development or safety modeling will find the Markov framework and integrated simulation approach highly relevant for dose optimization."
pdf_path: "/assets/digests/2026-05-15-exposure-safety-markov-modeling-of-ocular-adverse-events-in-patient-populations/PMx_Exposuresafety_Markov_modeling_of_ocular_20260515.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper develops a discrete-time Markov model (DTMM) to characterize the exposure–response relationship between tisotumab vedotin (TV) ADC exposure and the longitudinal time course of grade $\ge 2$ ocular adverse events (OAEs) in 757 patients with advanced solid tumors. The model incorporates severity, onset, duration, and dose modifications, and was used to simulate alternative dosing regimens. Pharmacometricians involved in ADC development or safety modeling will find the Markov framework and integrated simulation approach highly relevant for dose optimization.

---

### Executive Summary
Feng et al. present a comprehensive exposure–safety analysis of tisotumab vedotin, an anti‑TF ADC, using a discrete‑time Markov model to describe the daily probability of transitioning between OAE severity states (grade $\le 1$ and $\ge 2$). The model, built on pooled data from seven clinical trials, identified a delayed, hyperbolic relationship between ADC exposure (via an effect compartment) and the risk of grade $\ge 2$ OAEs, with a non‑proportionality adjustment once in the higher severity state. The only covariate significantly reducing risk was implementation of an eye care plan (ECP). The DTMM was integrated with time‑to‑event models for dose reduction and discontinuation to simulate realistic treatment courses under alternative dosing schedules. Simulations suggested that $1.7$ mg/kg every 2 weeks may offer higher dose intensity with a modest increase in OAE risk compared to the approved $2.0$ mg/kg Q3W, supporting ongoing clinical evaluation. The work exemplifies how Markov models can capture the time‑dependent nature of adverse events and inform dose optimization beyond static logistic regression.

---

### Scientific Context & Motivation
Ocular adverse events are a class‑specific toxicity of many ADCs, including tisotumab vedotin, and represent a key safety concern that can limit dose intensity and therapeutic benefit. Previous exposure–response analyses for TV used logistic regression, which could not account for the onset, duration, or recurrence of OAEs, nor the impact of dose modifications over time. This study fills a critical gap by applying a discrete‑time Markov model with a first‑order Markov element to characterize the full time course of OAEs, thereby enabling dynamic simulation of alternative dosing regimens while incorporating protocol‑driven dose adjustments. The work also addresses the challenge of separating ADC and payload (MMAE) exposure effects, ultimately selecting ADC alone due to identifiability issues.

---

## ⚡ Methodological Snapshot
A discrete-time Markov model with a first-order Markov element and proportional-odds structure was developed to describe daily transitions between OAE severity states (grade $\le 1$ and $\ge 2$). ADC exposure, derived from a prior PopPK model, entered through an effect compartment and was modeled as a hyperbolic function on the log-odds of transition. Covariate effects were assessed using a full-model approach. The OAE model was integrated with parametric time-to-event models for dose reduction and treatment discontinuation, enabling joint simulations of alternative dosing regimens that account for protocol-specified dose modifications.

---

## 🏗️ Structural Model Breakdown
The core model is a two-state discrete-time Markov chain with states: grade $\le 1$ OAE and grade $\ge 2$ OAE. The daily transition probabilities are modeled via a logit link with a proportional-odds structure, allowing the exposure effect to differ between entering and staying in the high-severity state (non-proportionality factor). ADC exposure influences the log-odds through a hyperbolic (Emax) function after passing through a first-order effect compartment to account for delayed onset. The baseline transition probabilities include lognormal interindividual variability. The model is coupled with an exponential time-to-dose-reduction model (hazard linearly dependent on ADC after two transit compartments) and an exponential time-to-discontinuation model (hazard linearly dependent on ADC from an effect compartment). These submodels are integrated in mrgsolve to simulate patient courses with protocol-driven dose reductions ($30\%$ decrease per event, maximum two reductions) and discontinuation after 6 consecutive weeks of grade $\ge 2$ OAE.

---

### Detailed Methodological Analysis

#### Modeling Approach
Discrete-time Markov model (DTMM) with daily intervals, logit link, and cumulative probabilities. A partial proportional odds structure allowed non-proportionality of the exposure effect across states. Exposure was tested as linear or hyperbolic functions of ADC and MMAE concentrations, with and without effect compartments. Interindividual variability was included on baseline transition probabilities. Time-to-event models for dose reduction and discontinuation used exponential (and other parametric) survival distributions with hazard dependent on ADC exposure through transit compartments. All models were implemented in NONMEM 7.5.

#### Data Sources
Pooled data from 757 patients in seven clinical trials (innovaTV 201, 202, 204, 205, 206, 207, 208) of TV monotherapy and combinations (with carboplatin, bevacizumab, pembrolizumab) in advanced solid tumors. OAE grades were recorded at each study visit; missing end dates ($\sim 20$–$30\%$) were imputed at study-median durations. PK exposures were empirical Bayes estimates from a previously developed PopPK model.

#### Estimation Methods
Maximum likelihood estimation via NONMEM with the Laplacian method (FOCE-LAPLACE) for the Markov model. Time-to-event models used parametric survival likelihoods with numerical integration of the hazard. Model selection was based on AIC, parameter precision, and convergence diagnostics.

#### Model Evaluation
Primary evaluation used visual predictive checks (VPCs) stratified by regimen, comparing observed and simulated transition counts, prevalence of grade $\ge 2$ OAEs over time, and Kaplan–Meier curves for time to first OAE. Additional diagnostics included inspection of residual trends and covariate effects.

#### Covariate Analysis
A full-model approach was used: all prespecified covariates (combination therapy type, baseline OAE/dry eye, ECP implementation) were added simultaneously, and their effects were retained based on clinical relevance and estimation precision. The eye care plan was the only covariate with a statistically significant effect ($31.3\%$ risk reduction).

---

### Statistical Rigor Assessment
The modeling approach is appropriate for the ordinal, longitudinal nature of the data. The use of a Markov element correctly accounts for the dependence of current OAE status on the previous day's status. Model selection was systematic, comparing multiple functional forms and using AIC. VPCs demonstrated adequate model performance, though some overprediction of first-event incidence was noted. The sample size (757 patients) is substantial for a pharmacometric safety analysis. Missing OAE end dates were handled by median imputation under a missing-at-random assumption, which is reasonable but could introduce bias if missingness is informative. The decision to exclude MMAE due to identifiability issues is pragmatic but not formally tested. The integrated simulation framework, while complex, relies on several assumptions (e.g., fixed dose-reduction rules) that may not fully capture clinical variability.

---

## 📊 Key Findings
The DTMM revealed that the daily probability of transitioning from grade $\le 1$ to grade $\ge 2$ OAE was low at zero exposure ($0.0002$) but increased with ADC exposure through a hyperbolic (Emax‑like) function after a time delay (effect compartment). Once in the grade $\ge 2$ state, the probability of remaining there was high ($0.963$), indicating persistence of moderate‑to‑severe ocular toxicity. A non‑proportionality adjustment (factor $0.215$) improved model fit, suggesting that exposure has a different effect on staying in the high‑severity state versus entering it. The eye care plan reduced the risk of grade $\ge 2$ OAEs by $31.3\%$ ($90\%$ CI: $22.8$–$39.7$), while combination therapies (pembrolizumab, carboplatin, bevacizumab) did not significantly alter risk. Simulations accounting for dose reductions and discontinuations predicted that $1.7$ mg/kg Q2W yields a slightly higher OAE probability than $2.0$ mg/kg Q3W, but the difference is manageable with the ECP, and the higher dose intensity may improve efficacy.

---

## 💡 Clinical & Regulatory Implications
The model supports the ongoing evaluation of $1.7$ mg/kg Q2W as an alternative dosing regimen for tisotumab vedotin, predicting a modest increase in OAE risk that is manageable with the eye care plan. The finding that the ECP significantly reduces OAE risk reinforces the importance of prophylactic measures. The simulation framework can be used to explore other dosing schedules and to inform the design of future trials. For regulatory purposes, this analysis provides a more comprehensive safety assessment than traditional logistic regression, potentially supporting dose optimization without requiring a large randomized safety study.

---

### Strengths & Limitations

#### Strengths
- Innovative use of a discrete‑time Markov model with proportional‑odds structure to capture the time course, severity, and recurrence of OAEs, moving beyond static logistic regression.
- Integration of exposure‑driven models for OAE, dose reduction, and discontinuation into a joint simulation framework that reflects real‑world dose modification practices.
- Thorough exploration of exposure functional forms (linear, hyperbolic, effect compartment) and non‑proportionality adjustments, with clear model selection criteria.
- Large pooled dataset (757 patients) from seven clinical trials, covering multiple tumor types and combination regimens.
- Practical application to dose optimization, directly informing the ongoing innovaTV 207 trial.

#### Limitations (Acknowledged by Authors)
- None of the included studies were prospectively designed or powered to detect differences in grade $\ge 2$ OAEs between dosing regimens; the analysis is exploratory.
- The effect of OAEs on dose reductions was not directly modeled; instead, a pooled exposure‑dose reduction model was used, which relies on the assumption that the safety‑dose relationship is consistent across regimens.
- The eye care plan was modeled as a simple covariate effect, not as a multi‑state process (e.g., dose holds, stepwise reductions).
- Missing OAE end dates ($\sim 20$–$30\%$) were imputed at study‑median durations, assuming missing at random.
- Overprediction of the number of patients experiencing at least one grade $\ge 2$ OAE was noted in VPCs for the $2.0$ mg/kg Q3W monotherapy regimen, possibly due to censoring mechanisms.

#### Limitations (Expert Review)
- The counterintuitive finding that MMAE exposure appeared protective against OAEs was attributed to lack of identifiability, but no formal identifiability analysis (e.g., profile likelihood, Bayesian sensitivity) was presented to support excluding MMAE from the final model.
- The model uses empirical Bayes estimates from a prior PopPK model as exposure inputs, which does not propagate uncertainty from the PK parameter estimates into the safety model.
- The simulation of dose reductions assumed a fixed $30\%$ dose decrease per event and a maximum of two reductions, which may not fully capture the variability in clinical practice.
- The generalizability to non‑cervical tumors is based on simulations; the model was developed predominantly in cervical cancer patients, and tumor‑type effects were not significant in the OAE model but were present in the dose‑reduction and discontinuation models.

#### Generalizability
The Markov modeling framework is broadly applicable to other ADC safety endpoints with recurrent, time‑varying events. However, the specific parameter estimates and predicted OAE risks are most reliable for the studied populations (predominantly cervical cancer) and dosing regimens. Extrapolation to other tumor types or ADCs with different payloads should be done cautiously, as the underlying toxicity mechanisms may differ.

---

### Key Equations

**Discrete-time Markov model with proportional odds**

{% raw %}
$$\begin{aligned}
\text{logit}[P(OAE_{i,j} \ge m \mid OAE_{i,j-1} \\
&= k)] = \log\left(\frac{P(OAE_{i,j} \ge m \mid OAE_{i,j-1}=k)}{1-P(OAE_{i,j} \ge m \mid OAE_{i,j-1}=k)}\right) = \beta_{mk}^{0} \\
& + D(t_{ij}, f(C_{ij}^{ADC}, \beta^{ADC}), g(C_{ij}^{TOX}, \beta^{TOX})) \times \prod_{p=1}^{P} \gamma_{p}^{X_{ip}}
\end{aligned}$$
{% endraw %}

Core structural equation of the discrete-time Markov model linking the log-odds of being in at least state $m$ (grade $\ge 2$) to a baseline logit, an exposure effect function $D$, and covariate effects.

**Linear exposure effect function**

{% raw %}
$$
D(f(C^{ADC}(t), \beta^{ADC}), g(C^{TOX}(t), \beta^{TOX})) = \beta_{1}^{ADC} C^{ADC}(t) + \beta_{1}^{TOX} C^{TOX}(t)
$$
{% endraw %}

Linear additive combination of ADC and MMAE concentrations on the log-odds of OAE.

**Hyperbolic (Emax) exposure effect for ADC**

{% raw %}
$$\begin{aligned}
D(f(C^{ADC}(t), \beta^{ADC}), g(C^{TOX}(t), \beta^{TOX})) \\
&= \frac{\beta_{1}^{ADC} C^{ADC}(t)}{\beta_{2}^{ADC} + C^{ADC}(t)} + \beta_{1}^{TOX} C^{TOX}(t)
\end{aligned}$$
{% endraw %}

Hyperbolic transformation of ADC concentration, representing a saturable effect, while MMAE effect remains linear.

**Effect compartment for ADC**

{% raw %}
$$
\frac{d C_{e}^{ADC}(t)}{dt} = k_{e}^{ADC} \left( C^{ADC}(t) - C_{e}^{ADC}(t) \right)
$$
{% endraw %}

First-order effect compartment model to account for the delay between plasma ADC concentration and OAE onset.

**Interindividual variability on transition probabilities**

{% raw %}
$$
\beta_{mki}^{0} = \beta_{mk}^{0} e^{\eta_i}
$$
{% endraw %}

Lognormal interindividual variability on the baseline logit transition probabilities.

**Distribution of random effects**

{% raw %}
$$
\eta_i \sim N(0, \omega^2)
$$
{% endraw %}

Normal distribution of interindividual random effects with variance $\omega^2$.

**Hazard model for time-to-event endpoints**

{% raw %}
$$
h(t_i) = h_0(t_i) \times D(f(C(t_i)^{ADC}, \beta^{ADC}), g(C(t_i)^{TOX}, \beta^{TOX})) \times \prod_{p=1}^{P} \gamma_{p}^{X_{ip}}
$$
{% endraw %}

Proportional hazards model for dose reduction or discontinuation, where the baseline hazard $h_0$ is modulated by exposure and covariates.

**Likelihood for time-to-event data**

{% raw %}
$$
L(t_i) = h(t_i)^{\delta_i} \times \exp\{-H(t_i)\}
$$
{% endraw %}

Likelihood contribution for a single subject, with $\delta_i$ indicating event (1) or censoring (0).

**Cumulative hazard**

{% raw %}
$$
H(t_i) = \int_{0}^{t_i} h(u) du
$$
{% endraw %}

Cumulative hazard function obtained by integrating the hazard over time.

---

### Figures & Tables

- **Figure 1**: Schematic of the integrated simulation framework combining OAE Markov model, dose reduction, discontinuation, and disease progression models.
  - *Significance*: Illustrates how the exposure-driven safety models are linked to simulate realistic patient trajectories under alternative dosing regimens.
- **Figure 2**: Model development decision tree showing the evaluation of exposure functional forms, effect compartments, and IIV structures.
  - *Significance*: Provides transparency into the model building process and justifies the final model selection.
- **Figure 3**: Forest plot of covariate effects on the risk of grade $\ge 2$ OAEs, including combination therapies, baseline conditions, and eye care plan.
  - *Significance*: Clearly demonstrates that only the eye care plan significantly reduces OAE risk, while other covariates show non-significant trends.
- **Figure 4**: Visual predictive checks (VPCs) for transition counts (a) and time profiles of grade $\ge 2$ OAE prevalence (b) by regimen.
  - *Significance*: Confirms that the final Markov model adequately reproduces both the total number of transitions and the temporal pattern of OAEs across dosing regimens.
- **Figure 5**: Kaplan–Meier type VPCs for time to first grade $\ge 2$ OAE by regimen.
  - *Significance*: Shows reasonable agreement between observed and simulated first-event times, though slight overprediction is noted for $2.0$ mg/kg Q3W monotherapy.
- **Figure 6**: Simulated probability of grade $\ge 2$ OAE over time for alternative dosing regimens (Q2W vs Q3W) in non-cervical tumors, incorporating dose modifications.
  - *Significance*: Directly informs dose optimization by comparing predicted OAE burden across regimens, highlighting that $1.7$ mg/kg Q2W has a modestly higher risk than $2.0$ mg/kg Q3W.
- **Table 1**: Summary of key steps in OAE model development, including base model structures and AIC values.
  - *Significance*: Documents the model selection process and justifies the choice of ADC-only exposure with hyperbolic effect compartment.
- **Table 2**: Parameter estimates of the final discrete-time Markov model for grade $\ge 2$ OAEs.
  - *Significance*: Provides the quantitative basis for simulations, including transition probabilities, exposure effect parameters, and covariate effects.

---

### Code & Reproducibility Assessment
The analysis was performed using NONMEM 7.5 and R 4.1.1 with mrgsolve for simulations. Code and data are stored in version‑controlled repositories and are available upon request from Pfizer, subject to review and certain conditions (see Pfizer’s clinical trial data sharing policy).

---

### Supplementary Materials
Supplementary material includes detailed tables of patient demographics, OAE incidence by study, model development steps (Supplementary Table 3), parameter estimates for dose-reduction and discontinuation models (Supplementary Tables 5, 7), additional VPCs, and simulated PK profiles. These support the main text and provide full transparency of the modeling process.

---

### Future Directions
Further work could extend the Markov model to a three‑state version (grade $\le 1$, 2, $\ge 3$) if larger datasets with more grade $\ge 3$ events become available. Incorporating a more mechanistic understanding of OAE pathophysiology (e.g., TF expression in ocular tissues) could improve the biological plausibility of the exposure–response relationship. A joint model that simultaneously estimates PK, OAE, and dose modifications within a single Bayesian framework would better propagate uncertainty. External validation of the simulation predictions against emerging data from the innovaTV 207 trial is essential.

---

### Expert Commentary
This paper is a strong example of modern pharmacometric safety modeling. The shift from logistic regression to a Markov model is not merely a methodological upgrade; it fundamentally changes the questions we can ask about dose optimization. By modeling the daily probability of transitioning between severity states, the authors can simulate realistic patient journeys, including dose holds and reductions, which is far more informative than a single snapshot of AE probability. The careful handling of the non‑proportionality of the exposure effect across states is a nice touch that many analysts overlook. However, the decision to drop MMAE from the model due to a counterintuitive direction of effect, while pragmatic, highlights a common challenge in ADC exposure–response: the high correlation between ADC and payload exposures often precludes separating their individual contributions. A Bayesian approach with informative priors on the direction of effect could have been a more satisfying resolution. Overall, this work sets a high bar for safety exposure–response analyses and should encourage the field to adopt time‑to‑event and Markov models for recurrent adverse events.

---

### Bottom Line
This work demonstrates that a discrete‑time Markov model can effectively characterize the longitudinal risk of ocular adverse events for an ADC, capturing onset, duration, and severity while accounting for dynamic dosing. The integrated simulation approach provides a powerful tool for dose optimization, showing that $1.7$ mg/kg Q2W of tisotumab vedotin may offer a favorable benefit–risk profile when combined with an eye care plan. Practitioners should consider Markov models for safety endpoints with recurrent events, especially when time‑course information is critical for regimen selection.

---

## 📊 Figures

![Figure 1 (caption recovered after Plan 068 repair)]({{ site.baseurl }}/assets/digests/2026-05-15-exposure-safety-markov-modeling-of-ocular-adverse-events-in-patient-populations/figures/fig_01.png)

![Figure 2 (caption recovered after Plan 068 repair)]({{ site.baseurl }}/assets/digests/2026-05-15-exposure-safety-markov-modeling-of-ocular-adverse-events-in-patient-populations/figures/fig_02.png)

![Figure 3 (caption recovered after Plan 068 repair)]({{ site.baseurl }}/assets/digests/2026-05-15-exposure-safety-markov-modeling-of-ocular-adverse-events-in-patient-populations/figures/fig_03.png)

![Figure 4 (caption recovered after Plan 068 repair)]({{ site.baseurl }}/assets/digests/2026-05-15-exposure-safety-markov-modeling-of-ocular-adverse-events-in-patient-populations/figures/fig_04.png)

![Figure 5 (caption recovered after Plan 068 repair)]({{ site.baseurl }}/assets/digests/2026-05-15-exposure-safety-markov-modeling-of-ocular-adverse-events-in-patient-populations/figures/fig_05.png)

![Figure 6 (caption recovered after Plan 068 repair)]({{ site.baseurl }}/assets/digests/2026-05-15-exposure-safety-markov-modeling-of-ocular-adverse-events-in-patient-populations/figures/fig_06.png)