---
layout: post
title: "MBMA Bridging Models as a Tool for Exploration of Clinical Endpoints in Unstudied Indications"
date: 2026-05-26
authors: "Alexander GE, Kosoglou T, Valiathan C, et al."
journal: "Journal of Clinical Pharmacology, 2025"
doi: "N/A"
paper_type: methodology
tags: [methodology, dose-response, covariate-analysis, regulatory, meta-analysis, clinical-trial-design]
excerpt_text: "This paper proposes an MBMA framework to bridge efficacy endpoints across related indications, using psoriasis (PsO) and psoriatic arthritis (PsA) as a case study. A two-step modeling strategy links PASI75 (PsO) to ACR20/50/70 (PsA), with external validation against a held-out deucravacitinib trial demonstrating accurate projections."
pdf_path: "/assets/digests/2026-05-26-mbma-bridging-models-as-a-tool-for-exploration-of-clinical-endpoints-in/PMx_MBMA_Bridging_Models_as_a_Tool_for_Explo_20260526.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper proposes an MBMA framework to bridge efficacy endpoints across related indications, using psoriasis (PsO) and psoriatic arthritis (PsA) as a case study. A two-step modeling strategy links PASI75 (PsO) to ACR20/50/70 (PsA), with external validation against a held-out deucravacitinib trial demonstrating accurate projections.

---

### Executive Summary
The authors develop a novel quantitative MBMA framework to project treatment efficacy in an unstudied indication by bridging across indications (PsO to PsA) and across endpoints (ACR20 to ACR50/ACR70). Two hierarchical models are fit to aggregate data from 67 RCTs using nonlinear mixed-effects modeling. Model 1 relates PASI75 and ACR20 across indications, incorporating trial-level random effects, an $AR(1)$ autocorrelation structure, and covariates (indication, endpoint, study phase). Model 2 links ACR20 to ACR50/ACR70 within PsA using logistic-type functions. The framework is validated internally via visual predictive checks and externally by withholding a deucravacitinib PsA trial, for which projected ACR20 (51.4%) and ACR50 (24.7%) closely match observed values (52.9% and 24.3%). The work illustrates how MBMA can support dose selection and trial design in early development for new indications.

---

### Scientific Context & Motivation
Predicting therapeutic efficacy in a new indication when only data from related indications exist remains a key challenge in drug development. While MBMA has been used for dose-response and longitudinal modeling within single indications, systematic quantitative bridging across different but pathophysiologically related indications is underexplored. PsO and PsA share common inflammatory pathways, and many drugs approved for PsO are subsequently studied in PsA, yet the efficacy translation between their distinct endpoints (PASI75 vs. ACR20) is not well characterized quantitatively. This work addresses the gap by proposing a formal statistical modeling framework to leverage historical trial data for cross-indication efficacy projections.

---

## ⚡ Methodological Snapshot
The paper proposes a two-step MBMA bridging framework. Model 1 uses a nonlinear mixed-effects model with an $AR(1)$ autocorrelation structure to jointly model PASI75 in PsO, PASI75 in PsA, and ACR20 in PsA across time, dose, and covariates (indication, endpoint, study phase). Trial-level random effects account for between-study variability. Model 2 uses a logistic transformation to link ACR20 to ACR50/ACR70 within PsA at specific time points (16, 24 weeks), with covariates for prior TNF exposure, study phase, and drug class. Parameter uncertainty is propagated through bootstrap simulations from the asymptotic covariance matrix to generate prediction intervals. The framework is validated via visual predictive checks, partial residual plots, and leave-one-out external validation.

---

## 📐 Statistical Framework
The analysis uses frequentist nonlinear mixed-effects modeling via maximum likelihood estimation (nlme package). Model 1 assumes: (1) normally distributed residuals with $AR(1)$ correlation; (2) trial-level random effects on baseline (placebo response) and potentially on drug effects; (3) monotonic time-course described by an empirical function $g(t)$; (4) additive covariate effects that do not modify relative treatment effects between active comparators. Model 2 assumes a logistic-linear relationship between the logit-transformed ACR20 and ACR50/ACR70 probabilities. The underlying assumption is that sharing of common pathophysiological pathways allows translation of treatment effects across indications via a common anchor (PASI75 in this case). The method implicitly assumes that the drug mechanism of action is consistent across the two indications, which is biologically plausible for the cytokines targeted.

---

### Estimator Behavior
Maximum likelihood estimators are used within the nlme framework. Under standard mixed-model regularity conditions, these are consistent and asymptotically efficient. The authors do not report convergence diagnostics or Hessian evaluations. Several covariate coefficients have high standard errors, suggesting possible near-non-identifiability or multicollinearity for some parameters. The bootstrap-based prediction intervals (50,000 samples from multivariate normal parameter distribution) rely on the asymptotic normality of the MLEs, which may be questionable with only 67 studies. No assessment of finite-sample bias (e.g., via simulation-estimation studies) was conducted. The external validation showed good point predictions but wide confidence intervals for the deucravacitinib ACR20 projection (51.4% [14.3–87.1%]), reflecting substantial uncertainty.

---

### Validation Design
Internal validation: Visual predictive checks comparing model predictions to observed data across all studies, partitioned by drug (Figure 3). Normalized partial residual plots to assess covariate functional forms. Posterior predictive checks. External validation: Leave-one-study-out (LOOV) by excluding the deucravacitinib Phase 2 PsA trial (IM011-084) from model development and comparing projected vs. observed ACR20, ACR50, and ACR70 responses. The excluded study was selected based on network connectivity and availability of matching dose regimens in PsO. No cross-validation across multiple studies or drugs was performed.

---

### Applicability Boundaries
The method works best when: (1) there is strong biological rationale for shared disease mechanisms; (2) a common endpoint (e.g., PASI75) is measured in both indications; (3) sufficient network connectivity exists (≥3-4 compounds studied in both indications); (4) doses studied in the source indication match or can be scaled to the target indication. The method may fail when: (1) the relationship between endpoints is non-monotonic or indication-specific; (2) trial-level heterogeneity is too large relative to signal; (3) covariate effects are predictive rather than purely prognostic; (4) the drug's mechanism of action differs across indications. The current model does not handle combination therapies or sequential treatment effects. Data requirements: aggregate-level data from at least 20-30 trials per indication, with consistent endpoint reporting across studies.

---

### Comparison to Alternatives
Compared to standard univariate meta-analysis per endpoint, the MBMA bridging framework explicitly models the relationship between endpoints and across indications, enabling projection to new settings. Compared to joint modeling of multiple endpoints (e.g., multivariate meta-analysis), this approach allows use of data from different studies reporting different endpoints, increasing information utilization. Compared to network meta-regression, the longitudinal component captures time-course, which is important for PsA endpoints that change over time. The key limitation relative to alternatives is the empirical, rather than mechanistic, nature of the bridging equations; a more mechanistic disease progression model could provide better extrapolation beyond the observed data range. The additive covariate assumption is also more restrictive than approaches that allow covariate-by-treatment interactions.

---

### Implementation Guidance
Implementation in R using nlme package. Key practical steps: (1) ensure adequate network connectivity by plotting treatment-indication network graphs; (2) select a common anchor endpoint measured in both indications; (3) fit the cross-indication model with $AR(1)$ correlation structure; (4) fit the cross-endpoint model using data from the target indication only; (5) use bootstrap from multivariate normal of parameter estimates for prediction intervals. Computational cost is moderate (minutes to hours depending on data size). Important diagnostics: VPCs, partial residual plots for covariates, and at least one LOOV validation. The authors note that the nlme package's linNlme function may provide faster fitting if logistic-linear relationships suffice. Sensitivity to random effect distributional assumptions should be checked.

---

## 📊 Key Findings
1. Model 1 (cross-indication bridge) describes PASI75 and ACR20 across PsO and PsA well, with observed data falling within 95% prediction intervals. 2. Model 2 (cross-endpoint bridge within PsA) adequately projects ACR50 and ACR70 from ACR20 data. 3. External validation: For deucravacitinib 6 mg QD at week 16 in PsA, Model 1 projected ACR20 = 51.4% [14.3–87.1%] vs. observed 52.9%; Model 2 projected ACR50 = 24.7% [18.7–32.5%] vs. observed 24.3% and ACR70 = 11.6% [8.2–16.2%] vs. observed 14.3%. 4. Simulated placebo and anti-TNF responses show distinct dynamics across indications and endpoints, with PASI75 demonstrating a wider dynamic range in PsO than PsA. 5. Study phase and drug class influence absolute response levels, with Phase 3 trials showing slightly higher placebo responses in PsO.

---

### Strengths & Limitations

#### Strengths
- Novel application of MBMA for cross-indication efficacy bridging, addressing an important practical need.
- External validation with a held-out trial (deucravacitinib) strengthens credibility.
- Two-step modeling framework allows flexible linking of distinct endpoints across diseases.
- Incorporation of trial-level random effects and $AR(1)$ correlation respects hierarchical data structure.
- Comprehensive model diagnostics including VPCs, partial residual plots, and LOOV.
- Practical utility demonstrated through dose-regimen-specific projections with uncertainty intervals.

#### Limitations (Acknowledged by Authors)
- Low number of compounds tested in both indications limits generalizability.
- Limited covariate exploration; prior-TNF status effect not detectable in Model 1.
- Covariates included as additive parameters assume no differential modification of relative treatment effects.
- Several covariate coefficients had high standard errors and were not statistically significant.
- No systematic univariate covariate screening performed.
- Only a subset of compounds had sufficient data across multiple dose levels for dose-response characterization.

#### Limitations (Expert Review)
- The $AR(1)$ correlation structure assumes equally spaced time points and constant correlation decay, which may not hold for irregularly spaced clinical visits.
- The bootstrap-based confidence intervals (50,000 samples from multivariate normal) rely on the asymptotic normality assumption of parameter estimates, which may be questionable with relatively few studies.
- Model 2's logistic form linking ACR20 to ACR50/ACR70 is empirical; no biological or pharmacological rationale is provided for the functional form.
- No assessment of model sensitivity to prior distributions or random-effect distributional assumptions (e.g., normality of random effects).
- The leave-one-out validation was performed on a single study; more comprehensive LOOV across multiple studies would strengthen the evidence.
- Model 2 uses data at 16 and 24 weeks only, potentially missing time-course dynamics between these endpoints.
- No formal comparison to alternative bridging approaches (e.g., joint modeling of multiple endpoints, network meta-regression) is provided.

#### Generalizability
The framework is conceptually generalizable to other disease pairs sharing common pathophysiology, but the specific parameter estimates and covariate effects are not transportable. Generalizability depends on sufficient network connectivity (common treatments across both indications) and consistent endpoint definitions. The approach is most applicable when a drug has robust data in one indication and a closely related second indication is targeted.

---

### Key Equations

**Model 1: AR(1) Correlation Structure**

{% raw %}
$$
\text{Corr}(\epsilon_{ijklm}(t_1), \epsilon_{ijklm}(t_2)) = \phi^{|t_1 - t_2|}
$$
{% endraw %}

This defines the autocorrelation between residuals within the same trial arm over time, with $\phi$ the autocorrelation parameter.

**Model 1: Response Model**

{% raw %}
$$
f(t) = (E_0 + \eta_i + \eta_j) + E_{\text{max}} \cdot \frac{D^\gamma}{\text{ED}_{50}^\gamma + D^\gamma} \cdot g(t)
$$
{% endraw %}

General structure for the time-course of endpoint response, including baseline with trial/arm random effects ($\eta_i, \eta_j$), an $E_{max}$ dose-response component, and a time function $g(t)$.

**Model 2: Logistic Bridge**

{% raw %}
$$
\text{logit}(p_{k}(t)) = \alpha_k + \beta_k \cdot \text{logit}(p_{\text{ACR20}}(t))
$$
{% endraw %}

Links ACR50 (k=1) or ACR70 (k=2) to ACR20 via a logistic transformation, with $\alpha_k$ and $\beta_k$ estimated parameters.

---

### Figures & Tables

- **Figure 1**: Longitudinal plots and network graphs of PASI75 (PsO and PsA) and ACR20 (PsA) across trials used in Model 1.
  - *Significance*: Illustrates data coverage and network connectivity essential for cross-indication bridging.
- **Figure 3**: Visual predictive checks for ACR20 in PsA, partitioned by drug, showing predicted (red lines) vs. observed (blue circles) across time.
  - *Significance*: Demonstrates adequate model fit and predictive performance of Model 1 across multiple drugs.
- **Figure 4**: Scatter plots of predicted vs. observed ACR50 and ACR70 at 16 and 24 weeks from Model 2.
  - *Significance*: Validates the cross-endpoint bridging model within PsA.
- **Table 1**: Simulated endpoint values with 95% CIs at weeks 16 and 24 for placebo and anti-TNF class across Phase 2 and Phase 3.
  - *Significance*: Shows how study phase, indication, and endpoint affect projected responses, demonstrating practical utility for trial design.

---

### Code & Reproducibility Assessment
R code is provided in Supporting Information using the nlme package (Version 3.1-160). The level of detail in the Supporting Information is not fully verifiable from the abstract text. Data are proprietary, limiting full reproducibility.

---

### Supplementary Materials
Supporting Information includes R code, data screening flow diagram, additional VPC figures (Figures S4–S16), covariate exploration plots (Figures S1–S3, S17–S20), and detailed study references (Table S5).

---

### Future Directions
Extension to incorporate patient-level data, additional endpoints (e.g., safety), mechanistic disease progression models, and formal covariate selection procedures. Validation across more disease pairs and multiple held-out studies would strengthen the evidence base. Prospective application in a real drug development program with comparison to actual Phase 2/3 outcomes would be a natural next step.

---

### Expert Commentary
This is a well-executed demonstration of how MBMA can be leveraged for cross-indication extrapolation, a topic of high practical relevance. The key methodological strength is the two-step hierarchical modeling that acknowledges the correlated structure of trial data. However, the reliance on a single LOOV study is a limitation; a more extensive cross-validation, including multiple drugs and doses, would be important before relying on such projections for regulatory decisions. The authors correctly acknowledge that the covariates are not comprehensively identified; for a drug development decision, a more rigorous covariate analysis would be warranted. The framework is promising for internal decision-making but would require additional validation before regulatory acceptance as primary evidence.

---

### Bottom Line
The MBMA bridging framework provides a practical, data-driven tool for projecting efficacy in untested indications using historical trial data. When adequate network connectivity exists (shared treatments across indications), this method can inform dose selection and trial design decisions, potentially reducing the need for separate Phase 2 programs. However, the model's predictive accuracy depends on the closeness of the disease relationship and the quality/density of available data.

---

---

## 📊 Figures

![(Left column) Longitudinal plots showing the observed data of PASI75 in PsO, PASI75 in PsA and ACR20 in PsA for each trial that has been used in Model 1. Points]({{ site.baseurl }}/assets/digests/2026-05-26-mbma-bridging-models-as-a-tool-for-exploration-of-clinical-endpoints-in/figures/fig_01.png)

![Scatter plots show the observed data of ACR50 or ACR70 versus ACR20 at 16 and 24 weeks for each trial arm that has been used in Model 2. Points are colored based]({{ site.baseurl }}/assets/digests/2026-05-26-mbma-bridging-models-as-a-tool-for-exploration-of-clinical-endpoints-in/figures/fig_02.png)

![Visual predictive checks of ACR20 in PsA. The figure is partitioned by drug, and the red lines show the predicted values from Model 1 while the blue circles are]({{ site.baseurl }}/assets/digests/2026-05-26-mbma-bridging-models-as-a-tool-for-exploration-of-clinical-endpoints-in/figures/fig_03.png)

![Scatter plots show predictions compared to observed values of ACR50 and ACR70 in PsA at 16 and 24 weeks for each trial arm. The figure is partitioned based on th]({{ site.baseurl }}/assets/digests/2026-05-26-mbma-bridging-models-as-a-tool-for-exploration-of-clinical-endpoints-in/figures/fig_04.png)

![Simulation results for placebo and anti-TNF drug class across indication, endpoint and study phase up to 24 weeks. The shaded area represents the 95% CIs estimat]({{ site.baseurl }}/assets/digests/2026-05-26-mbma-bridging-models-as-a-tool-for-exploration-of-clinical-endpoints-in/figures/fig_05.png)