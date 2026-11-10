---
layout: post
title: "A Systematic Comparative Analysis of Tumor Size Models Based on Erlotinib Clinical Data in Advanced NSCLC."
date: 2026-11-10
authors: "Anna Mishina, Kirill Zhudenkov, Gabriel Helmlinger, Kirill Peskov"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70095"
paper_type: methodology
tags: [methodology, oncology]
excerpt_text: "This study presents a rigorous cross-validation benchmarking workflow to systematically evaluate five empirical tumor size dynamics models using clinical trial data from erlotinib-treated NSCLC patients. While Claret's Tumor Growth Inhibition (TGI) model delivered superior descriptive and interpolation predictive performance, linear-growth models (LExp) proved far more robust against catastrophic outlier predictions during long-term forward extrapolation. Furthermore, all empirical models conditioned on early 3-month data reliably identified RECIST responders but universally failed to predict the emergence of acquired drug resistance."
pdf_path: "/assets/digests/2026-11-10-a-systematic-comparative-analysis-of-tumor-size-models-based-on-erlotinib/PMx_A_Systematic_Comparative_Analysis_of_Tum_20261110.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study presents a rigorous cross-validation benchmarking workflow to systematically evaluate five empirical tumor size dynamics models using clinical trial data from erlotinib-treated NSCLC patients. While Claret's Tumor Growth Inhibition (TGI) model delivered superior descriptive and interpolation predictive performance, linear-growth models (LExp) proved far more robust against catastrophic outlier predictions during long-term forward extrapolation. Furthermore, all empirical models conditioned on early 3-month data reliably identified RECIST responders but universally failed to predict the emergence of acquired drug resistance.

---

### Executive Summary
Empirical nonlinear mixed-effects models of sum of longest diameters (SLD) are widely deployed for oncology dose justification and survival endpoint forecasting, yet comparative methodology regarding their identifiability, variance-covariance architecture, and extrapolation stability has been lacking. Mishina and colleagues evaluated five prominent structural formulations—Biexponential (BiExp), Linear-Exponential (LExp), Quadratic-Exponential (QExp), Two-Population Biexponential with Sensitive Fraction (BiExpS), and Simplified Tumor Growth Inhibition (TGI)—across 50 repeated 2:1 cross-validation training/test splits of 381 advanced NSCLC patients receiving erlotinib. QExp and BiExpS suffered severe practical non-identifiability and were eliminated. Among the viable models, TGI achieved the lowest AIC and interpolation RMSE, followed by LExp and BiExp. However, forward extrapolation beyond observed boundaries (3 to 16 months) exposed a key trade-off: exponential growth functions (BiExp, TGI) produced extreme explosion outliers (RMSE > 150 cm), whereas LExp exhibited stable, bounded trajectories. Crucially, classifier performance using 3-month priors showed high discriminatory accuracy for RECIST objective response (F1 ~ 0.82–0.84) but poor accuracy for acquired resistance (F1 ~ 0.43–0.47), demonstrating the inherent boundary of empirical SLD formulations for mechanistic resistance forecasting.

---

### Scientific Context & Motivation
Longitudinal modeling of tumor size dynamics (RECIST SLD) informs critical Phase II/III oncology decisions, primarily serving as longitudinal drivers for overall survival (OS) and progression-free survival (PFS) in joint or sequential time-to-event frameworks. Despite decades of routine usage, modelers frequently select empirical functional forms (e.g., BiExp vs. LExp vs. TGI) based on historical precedent or local software defaults without evaluating statistical identifiability, parameter correlation structures, or predictive extrapolation bounds. Real-world SLD data present major statistical hurdles: extreme noise from inter-operator imaging variability, measurement threshold truncation (5 mm limits), irregular sparse visits, and non-random dropout/censoring at disease progression. The pharmacometrics field lacked an objective, data-driven benchmark evaluating whether complex resistance terms or growth geometries genuinely improve out-of-sample predictive validity and clinical outcome classification.

---

## ⚡ Methodological Snapshot
This paper formulates a structured benchmarking methodology for longitudinal nonlinear mixed-effects models of tumor dynamics. Using a repeated cross-validation scheme (50 Monte Carlo training-validation splits, 2:1 ratio), it assesses five standard empirical SLD equations across structural identifiability, stochastic variance-covariance stability, predictive interpolation, and long-term forward extrapolation.

Model parameters were estimated via Stochastic Approximation Expectation Maximization (SAEM) in Monolix. The base model optimization utilized conditional distribution sampling to detect non-diagonal random effects correlations prior to covariate selection. Stepwise covariate modeling (SCM) was subsequently executed for each candidate structure to quantify whether covariate-parameter relationships are universal or artifacts of structural choice.

Finally, models were evaluated on their translational utility via deterministic binary classifiers. Individual parameter conditional modes (EBEs) estimated using early data ($t \le 3$ months) were used to project trajectories out to 16 months, classifying patients into RECIST v1.1 objective responders (CR/PR) versus non-responders, and acquired resistance (progression following initial disease stabilization $\ge 6$ months). Discriminatory power was quantified using F1-score and Cohen's kappa.

---

## 📐 Statistical Framework
The statistical modeling framework assumes an empirical nonlinear mixed-effects representation where log-transformed sum of longest diameters $y_{ij} = \ln(\text{SLD}_{ij})$ for individual $i$ at visit $j$ is modeled as:
{% raw %}
$$y_{ij} = \ln(f(t_{ij}, \psi_i)) + \varepsilon_{ij},   \varepsilon_{ij} \sim \mathcal{N}(0, \sigma^2)$$
{% endraw %}
where $f(t, \psi_i)$ is the deterministic structural tumor dynamics model and $\varepsilon_{ij}$ represents additive residual error on the log-scale (equivalent to proportional error on the natural scale). Individual parameters follow a multivariate log-normal distribution:
{% raw %}
$$\psi_i = \theta \cdot \exp(\eta_i),   \eta_i \sim \mathcal{N}(0, \Omega)$$
{% endraw %}
Random effects covariance $\Omega$ was diagnosed by sampling from the conditional distribution $p(\eta_i | y_i; \hat{\theta}, \hat{\Omega}, \hat{\sigma}^2)$ to evaluate empirical correlations before opening off-diagonal terms in $\Omega$.

In Stepwise Covariate Modeling, forward inclusion required an objective function value (OFV) reduction of $\Delta \text{OFV} > 3.84$ ($p < 0.05, \chi^2_1$), while backward elimination enforced a stricter threshold of $\Delta \text{OFV} > 6.63$ ($p < 0.01, \chi^2_1$). Model performance comparisons utilized the non-parametric Wilcoxon signed-rank test with Benjamini-Hochberg false discovery rate adjustments.

---

### Estimator Behavior
1. Identifiability & Boundary Convergence: The QExp model proved structurally non-viable under SAEM; in 62% of validation splits, the second-order growth parameter $k_{g2}$ collapsed to the zero-boundary or generated an ill-conditioned Fisher Information Matrix. BiExpS exhibited severe parameter redundancy, with $\phi$ estimated at 1.0 across all splits, collapsing the model into standard BiExp.
2. Variance Component Robustness: In the LExp structure, estimating inter-individual variability on the shrinkage rate constant ($\omega_{k_d}$) was unstable, with 36% of cross-validation splits dropping the variance term, showing that linear regrowth models require substantial data density to disentangle individual shrinkage kinetics.
3. Covariance Directionality: Base model convergence revealed distinct, mathematically interpretable off-diagonal correlations. In exponential growth models (BiExp, TGI), $\text{corr}(\text{Base}, k_d)$ was consistently negative ($-0.33$ to $-0.35$), demonstrating that patients with higher baseline tumor burden experience attenuated drug-induced shrinkage rates. In contrast, LExp forced a positive correlation between Base and linear growth ($\text{corr}(\text{Base}, k_g) = +0.484$), demonstrating that SAEM inflates linear slopes in large tumors to compensate for structural lack-of-fit to underlying exponential growth kinetics.

---

### Validation Design
The benchmarking pipeline employed a 50-fold Monte Carlo cross-validation design on 381 patients from the erlotinib arm of trial NCT00364351. Each iteration randomly partitioned the cohort at a 2:1 ratio into a training calibration dataset ($n=254$) and an independent validation dataset ($n=127$).

Descriptive performance was evaluated using AIC, corrected BIC (BICc), and training RMSE. Predictive validity was assessed by projecting the calibrated population models onto the validation sets using individual EBEs derived from early measurements ($t \le 3$ months) and computing validation RMSE distributions. Outliers were formally flagged using Tukey's interquartile rule ($Q_3 + 3 \times \text{IQR}$).

Translational discrimination was validated by calculating F1-score and Cohen's kappa for two clinically relevant binary endpoints: (1) RECIST v1.1 objective response (CR/PR achievement), and (2) emergence of acquired resistance (PD occurring after sustained SD/PR for $\ge 6$ months).

---

### Applicability Boundaries
1. Data Requirements: Empirical SLD models require baseline measurements and at least 2–3 post-baseline assessments to reliably estimate shrinkage ($k_d$) and growth ($k_g$) parameters. QExp and BiExpS should not be utilized on standard clinical trial visit schedules due to non-identifiability.
2. Extrapolation Boundary: TGI and BiExp models should be strictly bounded to short- and intermediate-term prediction horizons (within the range of observed follow-up, typically $\le 6$ months). They are prone to unphysical exponential runaway when simulating long-term outcomes (e.g., forward simulating synthetic controls or late survival endpoints out to 12–24 months). For long-term extrapolations, LExp provides superior operational stability.
3. Clinical Discriminatory Boundary: None of the evaluated empirical models can be used to predict acquired drug resistance based on early on-treatment imaging ($\le 3$ months). Mechanistic or multi-clonal models incorporating longitudinal ctDNA or resistance biomarkers are required for this objective.

---

### Comparison to Alternatives
Relative to standard ad-hoc model selection practices:
- Versus BiExp: TGI demonstrated statistically superior goodness-of-fit and predictive accuracy ($p < 10^{-8}$), while requiring the same degree of base model stability. BiExp exhibited wider prediction intervals around the 90th percentile and larger validation RMSE modes.
- Versus LExp: TGI provided superior local interpolation and lower median RMSE (0.67 cm vs 0.68 cm, $p = 7.3 \times 10^{-3}$), but LExp exhibited far superior stability during long-term forward extrapolation, completely avoiding the catastrophic explosion outliers observed in TGI.
- Covariate Transferability: The study proved that covariate-parameter relationships are not model-agnostic. For instance, baseline sum of longest diameters (SLDb) was selected as a significant covariate on $k_g$ and $k_d$ in the LExp model, but was not retained in BiExp or TGI. Consequently, biological inferences drawn from SCM covariate models cannot be abstracted from the underlying structural equation.

---

### Implementation Guidance
1. Software & Tooling: The workflow is implemented using Monolix 2023 for population estimation, Simulx 2023 for longitudinal trajectory simulation, and R 4.2.3 via `lixoftConnectors`. Equivalent SAEM implementations are achievable in NONMEM (METHOD=SAEM) or open-source Pumas (Pumas.jl).
2. Error Model Selection: Log-transform SLD data and specify an additive residual error model ($y = \ln(\text{SLD})$, error $\sim \mathcal{N}(0, \sigma^2)$). This naturally constrains SLD predictions to positive values and standardizes residual variance.
3. Base Model Convergence Strategy: Rather than executing exhaustive diagonal and non-diagonal covariance searches across all random effects, inspect the empirical correlation matrix of individual parameters sampled from the conditional distribution in Monolix. Introduce covariance elements (e.g., Base-$k_d$ for TGI/BiExp; Base-$k_g$ for LExp) only when empirical correlation exceeds $|r| > 0.3$.
4. Extrapolation Safeguards: When utilizing the TGI model in forward trial simulations (e.g., simulating Phase III PFS/OS), modelers must implement truncation caps or transition functions on the exponential regrowth term ($e^{k_g \cdot t}$) to prevent simulated individuals from attaining biologically impossible tumor dimensions.

---

## 📊 Key Findings
1. Identifiability & Structural Reproducibility: Across 50 random splits, QExp was structurally unidentifiable in 62% of runs (quadratic growth parameter $k_{g2}$ collapsing to 0). BiExpS proved overparameterized, with the sensitive fraction parameter $\phi$ consistently pinning to 1.0, rendering it identical to BiExp.
2. Descriptive & Predictive Ranking: The simplified TGI model ranked highest in data fitting and internal cross-validation predictive accuracy (lowest AIC and validation RMSE mode = 1.47 cm), followed by LExp (RMSE mode = 1.58 cm) and BiExp (RMSE mode = 2.35 cm).
3. Extrapolation Vulnerability: When extrapolating from month 3 out to month 16, exponential growth models (TGI and BiExp) suffered mathematical instability and generated catastrophic over-prediction outliers (RMSEs > 150–200 cm), whereas linear growth (LExp) maintained consistent bounded trajectories.
4. Correlation Architectures: Exponential models systematically exhibited negative correlations between baseline tumor burden (Base) and shrinkage rate ($k_d$), reflecting reduced sensitivity in bulkier disease. Conversely, LExp displayed a positive correlation between Base and linear growth ($k_g$), statistically compensating for an unmodeled exponential growth component.
5. Classification Dichotomy: All three converged models accurately classified RECIST v1.1 objective responders (median F1: 0.82–0.84; Cohen's kappa: 0.79–0.81), but none could forecast acquired resistance from 3-month data (median F1: 0.43–0.47; Cohen's kappa: 0.25–0.30).

---

### Strengths & Limitations

#### Strengths
- Rigorous repeated cross-validation design (50 independent 2:1 random splits of 381 patients) evaluating base model reproducibility, covariance structures, and predictive distributions.
- Clear quantitative separation of model capabilities between descriptive fit, short-term interpolation, and long-term extrapolation.
- Implementation of diagnostic evaluation for random effects correlation structures via conditional distribution sampling, demonstrating improved convergence over brute-force search.
- Translational linkage of mathematical model output to binary clinical decision endpoints (RECIST response vs. acquired resistance classification) using F1 and Cohen's kappa metrics.

#### Limitations (Acknowledged by Authors)
- Evaluation restricted to a single clinical trial dataset (erlotinib control arm in advanced NSCLC).
- Omission of pharmacokinetic (PK) exposure drivers due to the fixed 150 mg daily dosing design without intensive PK sampling.
- Impact of empirical model selection on downstream sequential or joint time-to-event (OS/PFS) models was not directly evaluated.

#### Limitations (Expert Review)
- No formal correction or likelihood conditioning for informative dropout (disease progression censoring), which selectively truncates fast-growing profiles.
- Classifier cutoff was fixed deterministically at 3 months; sensitivity to earlier (e.g., 6 weeks) or later (e.g., 4.5 months) landmarks was not explored.
- Log-transformation of SLD with an additive residual error structure was pre-selected across all candidates rather than evaluating whether multiplicative or combined error models would reduce exponential tail divergence.

#### Generalizability
The methodological framework (repeated split cross-validation, stability testing of variance-covariance matrices, and extrapolation stress testing) is completely generalizable across solid tumors. However, the specific structural supremacy of TGI and the positive Base-$k_g$ correlation of LExp reflect targeted EGFR inhibition dynamics and cannot be directly assumed for immuno-oncology (pseudoprogression/delayed response) or cytotoxic chemotherapies without recalibration.

---

### Key Equations

**Biexponential Model (BiExp)**

{% raw %}
$$
SLD(t) = \text{Base} \cdot \left( e^{k_g \cdot t} + e^{-k_d \cdot t} - 1 \right)
$$
{% endraw %}

Classical bi-exponential formulation capturing net tumor dynamics as the simultaneous superposition of zero-time exponential growth and exponential drug-induced decay from baseline.

**Linear-Exponential Model (LExp)**

{% raw %}
$$
SLD(t) = \text{Base} \cdot e^{-k_d \cdot t} + k_g \cdot t
$$
{% endraw %}

Empirical model assuming exponential therapeutic shrinkage coupled with constant linear regrowth over time; exhibits bounded forward extrapolation.

**Simplified Tumor Growth Inhibition Model (TGI / Claret Model)**

{% raw %}
$$
SLD(t) = \text{Base} \cdot e^{k_g \cdot t - \frac{k_d}{\lambda} \cdot (1 - e^{-\lambda \cdot t})}
$$
{% endraw %}

Analytical formulation derived by Claret et al. where exponential shrinkage decays exponentially at rate $\lambda$, modeling the empirical loss of treatment efficacy over time.

**Two-Population Sensitive Fraction Model (BiExpS)**

{% raw %}
$$
SLD(t) = \text{Base} \cdot \left[ \phi \cdot e^{-k_d \cdot t} + e^{k_g \cdot t} - \phi \right]
$$
{% endraw %}

Bi-exponential variant separating tumor burden into a drug-sensitive fraction ($\phi$) and an intrinsically resistant subpopulation; found to suffer practical non-identifiability in clinical RECIST data with $\phi$ collapsing to 1.

---

### Figures & Tables

- **Figure 1**: Schematic workflow of the systematic comparative framework, outlining the 50-fold 2:1 cross-validation split into training ($n=254$) and validation ($n=127$) subsets, base model development, SCM covariate modeling, GoF diagnostics, and deterministic clinical classification.
  - *Significance*: Establishes the standardized methodological pipeline necessary for unbiased model structure evaluation in clinical pharmacometrics.
- **Figure 2**: Bar plots showing the percentage reproducibility of base model variance-covariance structures across the 50 cross-validation splits for the five candidate models.
  - *Significance*: Demonstrates the catastrophic failure of QExp (8 unstable IIV configurations; $k_{g2}=0$ in 62%) and highlights the split identifiability of $k_d$ random effects in LExp (48% vs 36%), while BiExp and TGI maintained stable configurations.
- **Figure 4**: Training dataset Visual Predictive Checks (VPCs) alongside violin plots and paired Wilcoxon signed-rank tests comparing AIC and RMSE distributions across the 50 training splits for BiExp, LExp, and TGI.
  - *Significance*: Statistically proves the descriptive hierarchy of TGI > LExp > BiExp ($p < 10^{-8}$ for AIC), confirming superior within-sample explanatory power for the TGI model.
- **Figure 5**: Validation dataset VPCs and violin plots of predictive RMSE across validation splits, illustrating predictive density modes and outlier distributions.
  - *Significance*: Reveals the crucial trade-off: TGI exhibits the tightest central predictive mode (1.47 cm), but displays extreme outlier divergence (RMSE > 150–200 cm) compared to the well-behaved, bounded error distribution of LExp.
- **Figure 6**: Conceptual schematic of clinical responder/resistance classification based on 3-month landmark SLD data and boxplots of F1-scores and Cohen's kappa for BiExp, LExp, and TGI.
  - *Significance*: Illustrates that empirical SLD models possess high discriminatory utility for early RECIST response (F1 > 0.8) but are fundamentally inadequate for predicting delayed acquired resistance (F1 < 0.47).

---

### Code & Reproducibility Assessment
The modeling protocol is described in detail utilizing Monolix 2023, Simulx 2023, and R version 4.2.3 via the lixoftConnectors library (v2023.1). Clinical trial data are publicly available through Project Data Sphere (NCT00364351). While complete run scripts and Monolix MLXT files are not provided in a standalone GitHub repository, the mathematical equations, covariate model search algorithms, and cross-validation workflows are fully detailed in the main text and supplementary materials.

---

### Supplementary Materials
Appendix S1 provides extensive documentation on: baseline patient demographics (Table S1); mathematical derivations and individual parameter conditional distribution sampling algorithms; full-dataset parameter estimates with relative standard errors (RSE) for all candidates; detailed Stepwise Covariate Model (SCM) selection runs demonstrating model-dependent covariate inclusion (LDH, NLR, smoking status); complete goodness-of-fit diagnostic panels (individual weighted residuals, NPDE, observations vs. individual predictions); and detailed outlier profile analyses identifying the specific patient kinetics causing exponential explosion in the TGI and BiExp validation splits.

---

### Future Directions
1. Extend the cross-validation benchmarking framework across diverse therapeutic mechanisms, particularly immune checkpoint inhibitors exhibiting non-monotonic response kinetics.
2. Evaluate how structural differences among these empirical SLD models propagate bias and variance into downstream joint time-to-event models for Overall Survival and Progression-Free Survival.
3. Integrate semi-mechanistic clonal resistance models (e.g., sensitive vs. pre-existing/acquired resistant subpopulation ODEs) with circulating tumor DNA (ctDNA) kinetics to address the failure of empirical models in forecasting acquired resistance.
4. Incorporate joint likelihood modeling to account for informative dropouts caused by disease progression or death.

---

### Expert Commentary
This paper addresses a pervasive cognitive bias in the pharmacometrics community: assuming that goodness-of-fit (AIC/BIC) and early visual predictive checks guarantee reliable forward simulation. Mishina et al. show that mathematical convenience can lead to operational failure. Claret's TGI model is mathematically elegant because the analytical decay parameter $\lambda$ allows a smooth transition from shrinkage to regrowth. Yet, in practice, because clinical trial data lack pre-treatment growth measurements, estimating both intrinsic growth ($k_g$) and resistance emergence ($\lambda$) from noisy, sparse SLD points induces severe parameter correlation. Under forward extrapolation, individual empirical Bayes estimates (EBEs) with slightly elevated $k_g$ or misestimated $\lambda$ cause the exponential term to violently explode, producing unphysical tumor burdens exceeding 150–200 cm.

Another critical contribution is the statistical diagnosis of the Linear-Exponential (LExp) model. LExp is often described as a first-order Taylor expansion of BiExp. Mishina et al. demonstrate that LExp is not merely an approximation: its population estimator actively forces a positive correlation between baseline tumor size and linear growth rate ($\text{corr}_{k_g, \text{Base}} = +0.484$). The model artificially scales its linear slope by initial tumor burden to mimic exponential acceleration. Recognizing these structural compensatory behaviors is vital when pharmacometricians incorporate baseline tumor burden into covariate selection or disease progression platforms.

---

### Bottom Line
For interpolation, short-to-medium term clinical trial simulations, and objective responder classification, Claret's TGI model provides superior statistical performance; however, when extrapolating beyond 3–6 months to simulate long-term progression or synthetic control arms, practitioners should favor or benchmark against the Linear-Exponential (LExp) model to prevent exponential explosion artifacts.

---

### Fact-check corrections

[^fc-1]: **CONTRADICTED** — original: “Among viable models, Claret's TGI model achieved the lowest AIC and lowest interpolation RMSE on the training and validation datasets.” → correction: “Figure 4(D, E) Violin plots of AIC and RMSE model performance characteristics retrieved for 50 training dataset splits for the BiExp, LExp, and TGI models... Figure 5(D) Violin plots of RMSE retrieved for 42 validation dataset splits for the BiExp, LExp, and TGI models.”
[^fc-2]: **CONTRADICTED** — original: “When forward extrapolating from month 3 to month 16, exponential growth models (BiExp and TGI) produced extreme outlier predictions with RMSEs exceeding 150 to 200 cm.” → correction: “Applying the empirical rule to detect strong outliers allowed identification of such only in the TGI model, with 8 cases in total, 2 of which were extreme outliers with RMSEs of 153.6 and 208.0 cm (Figure S3).”
[^fc-3]: **UNSUPPORTED** — original: “The SAEM algorithm inflates the linear growth slope in larger tumors in the LExp model to compensate for structural lack-of-fit to underlying exponential growth kinetics.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “Empirical SLD models require baseline measurements and at least 2 to 3 post-baseline assessments to reliably estimate shrinkage and growth parameters.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Overview of the methodological framework applied for systematic comparative analysis of empirical models of tumor size dynamics in NSCLC treated with erlotinib. AIC, Akai]({{ site.baseurl }}/assets/digests/2026-11-10-a-systematic-comparative-analysis-of-tumor-size-models-based-on-erlotinib/figures/fig_01.jpg)

![Comparison of base model reproducibility across five structural models. A single bar represents the percentage of dataset splits with a base model configuration, relative]({{ site.baseurl }}/assets/digests/2026-11-10-a-systematic-comparative-analysis-of-tumor-size-models-based-on-erlotinib/figures/fig_02.jpg)

![Heatmap of covariate occurrence, relative to 50 dataset splits in the final model (BiExp, LExp, or TGI model). TheBase-SLDbcombination was excluded from the covariate sea]({{ site.baseurl }}/assets/digests/2026-11-10-a-systematic-comparative-analysis-of-tumor-size-models-based-on-erlotinib/figures/fig_03.jpg)

![(A–C) VPC plots of SLD dynamics for a selected training dataset. Green squares represent observed data of the 10th, 50th, and 90th percentiles; model-based percentiles as w]({{ site.baseurl }}/assets/digests/2026-11-10-a-systematic-comparative-analysis-of-tumor-size-models-based-on-erlotinib/figures/fig_04.jpg)

![(A–C) VPC plots of SLD dynamics for a selected validation dataset. Green squares represent observed data of the 10th, 50th, and 90th percentiles; model-based percentiles as]({{ site.baseurl }}/assets/digests/2026-11-10-a-systematic-comparative-analysis-of-tumor-size-models-based-on-erlotinib/figures/fig_05.jpg)

![(A) Created SLD profiles explaining all types of classification outputs (responder/non-responder, with/without acquired resistance). Green squares represent observed indivi]({{ site.baseurl }}/assets/digests/2026-11-10-a-systematic-comparative-analysis-of-tumor-size-models-based-on-erlotinib/figures/fig_06.jpg)