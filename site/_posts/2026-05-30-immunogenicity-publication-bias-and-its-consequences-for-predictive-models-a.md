---
layout: post
title: "Immunogenicity Publication Bias and Its Consequences for Predictive Models: A Call for Transparent Reporting"
date: 2026-05-30
authors: "F. Hoffmann-La Roche Ltd. (L.C.F., H.P.G., Z.H., et al.)"
journal: "Unpublished manuscript / Preprint (2025)"
doi: "Not"
paper_type: generic
tags: [generic]
excerpt_text: "This paper demonstrates that published antidrug antibody (ADA) incidence data for monoclonal antibodies are biased toward lower values because early‐phase trials with high immunogenicity are often terminated and their results remain unpublished. Using Roche internal data across Phase I–III and a published dataset of approved mAbs, the authors fit an empirical model to show that predictions based solely on published data under‐predict peak ADA incidence and overstate precision. The findings underscore the urgent need for transparent reporting of immunogenicity data from all development phases."
pdf_path: "/assets/digests/2026-05-30-immunogenicity-publication-bias-and-its-consequences-for-predictive-models-a/PMx_Immunogenicity_Publication_Bias_and_Its__20260530.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper demonstrates that published antidrug antibody (ADA) incidence data for monoclonal antibodies are biased toward lower values because early‐phase trials with high immunogenicity are often terminated and their results remain unpublished. Using Roche internal data across Phase I–III and a published dataset of approved mAbs, the authors fit an empirical model to show that predictions based solely on published data under‐predict peak ADA incidence and overstate precision. The findings underscore the urgent need for transparent reporting of immunogenicity data from all development phases.

---

### Executive Summary
This paper demonstrates that published antidrug antibody (ADA) incidence data for monoclonal antibodies are systematically biased toward lower values because early‐phase trials with high immunogenicity are often terminated and their results remain unpublished. By comparing Roche internal data across Phase I–III with a published dataset of 65 approved mAbs, the authors show that early‐phase compounds have higher and more variable ADA rates. An empirical model, initially fitted to NHP data and translated to humans using phase‐specific peak incidence distributions, is used to simulate ADA time courses. Compared to simulations based on Phase I in‐house data, those based on published data predict a lower median peak incidence (2.7% vs. up to 4.3%) and narrower prediction intervals. This discrepancy directly impacts early‐stage risk assessment and underscores the need for industry‐wide transparent reporting of immunogenicity data across all development phases.

---

### Scientific Context & Motivation
Immunogenicity (the development of anti‐drug antibodies) remains a major cause of attrition in therapeutic protein development. Accurate prediction of ADA incidence and its clinical impact could improve candidate selection and trial design. However, published immunogenicity data are predominantly from approved products or late‐phase studies, creating a significant publication bias: early‐phase programs with high immunogenicity are often terminated and their ADA data are never made public. This bias compromises the development and validation of in silico and in vitro predictive models, which rely on public datasets. The paper addresses this gap by comparing proprietary phase‐specific ADA data with a published reference dataset and quantifying the consequences of the bias for model‐based predictions.

---

## ⚡ Methodological Snapshot
The study combines two sources of human cumulative ADA‐positivity data: a published dataset of 65 approved mAbs (Vaisman‐Mentesh 2020) and Roche internal data from 22 Phase I, 8 Phase II, and 15 Phase III studies (2014–2024). Additionally, subject‐level ADA time courses from 33 cynomolgus monkey studies (15 to 386 days, various dosing regimens) were used. An empirical four‐parameter model (baseline incidence $b$, maximum incidence $y_{\max}$, lag time $t_{\text{lag}}$, transition rate $k_{\text{np}}$) was first fitted to the NHP data. For the human translation, $b$, $t_{\text{lag}}$, and $k_{\text{np}}$ were sampled from distributions based on NHP random effects; $y_{\max}$ was sampled from logit‐normal distributions fitted either to the published dataset or to each phase‐specific internal dataset. The model assumes that the structural dynamics (onset, transition) are conserved across species, while peak incidence is species‐specific. 10,000 Monte Carlo simulations were run per scenario to generate ADA incidence trajectories over 300 days. No complex covariates or dropout modeling were included; the focus is on illustrating the impact of the $y_{\max}$ distribution choice on population‐level predictions.

---

## 📋 Detailed Analysis
The paper makes a convincing case that publication bias in ADA incidence data is not a theoretical issue but a tangible problem that distorts predictive modeling. The comparison of Roche internal data (disaggregated by phase) with an established published dataset (Vaisman‐Mentesh et al.) is a key strength; it provides direct empirical evidence that early‐phase compounds exhibit higher and more variable ADA rates. The empirical model, though simple, serves its purpose as a “thought experiment” to quantify the downstream impact of bias.

The model assumes that the structural parameters (baseline, lag, transition rate) translate from NHP to humans, which is a strong assumption not validated here. Given the sparsity of human time‐course data, the authors acknowledge this limitation and correctly position the model as illustrative. A more rigorous approach would require a fully human data‐driven model, perhaps leveraging joint modeling of ADA incidence, dropout, and exposure.

The authors stop short of recommending a specific correction factor, but the phase‐specific distributions they provide could be used as informative priors. The “thought experiment” on terminating high‐risk compounds early is provocative and highlights the potential economic value of better predictions. The call for transparent reporting is timely, especially as regulatory agencies (FDA draft guidance) emphasize ADA impact on safety and efficacy labels. The paper would benefit from a discussion on assay sensitivity changes over time (2009, 2014 guidances) which could explain part of the observed phase differences. Overall, this is a clear, well‐motivated study that underscores a critical data gap in immunogenicity research.

---

### Domain Context
Immunogenicity assessment is a mandatory component of therapeutic protein development. Regulatory submissions require ADA data from clinical trials, but publicly available data are overwhelmingly from approved products or later‐phase studies because early termination due to high immunogenicity is rarely reported. This creates a systematic underestimation of immunogenicity risk when using public data for model training or validation. The problem is compounded by the proprietary nature of early development data. Initiatives like the IMI ABIRISK consortium have attempted to share data, but industry‐wide adoption remains limited. The current paper contributes to the growing recognition that publication bias undermines the utility of in silico and in vitro immunogenicity prediction tools. It reinforces the need for pre‐competitive data sharing, standardized reporting of ADA incidence and its clinical impact, and transparent publication of Phase I/II immunogenicity results even (or especially) from terminated programs.

---

## 📊 Key Findings
1. Published ADA incidence rates from approved mAbs (Vaisman‐Mentesh dataset) are significantly lower than those from Roche internal Phase I and Phase II compounds. 2. Early‐phase internal compounds exhibit a broader distribution of ADA rates, reflecting higher variability and likely inclusion of programs terminated due to immunogenicity. 3. Phase III internal data closely resemble approved mAb data, suggesting that high‐ADA compounds are filtered out before late development. 4. Simulations show that using published data as the sole source for $y_{\max}$ yields a median peak ADA incidence of 2.7% (vs. 4.3% for Phase I data) and narrower prediction intervals, implying overconfidence in low immunogenicity predictions. 5. The bias is most consequential for early‐development decisions, where predictive models are most useful.

---

### Strengths & Limitations

#### Strengths
- Direct, phase‐wise comparison of proprietary and published ADA data provides empirical evidence of publication bias.
- Integration of both NHP and human data in a translational modeling framework strengthens the plausibility of the simulation approach.
- The model is deliberately simple, making the bias effect transparent and easy to communicate.
- Code and data simulation details are publicly available, enabling reproduction and extension.
- The paper addresses a critical, underappreciated problem with clear implications for both drug development and regulatory science.

#### Limitations (Acknowledged by Authors)
- Sparse Roche‐internal data may not represent industry‐wide mAbs; a single company’s portfolio may not capture full variability.
- Model simplification ignores compound‐, study‐, and patient‐specific features (e.g., dose, route, prior exposure, immune status).
- Human translation relies on NHP data for structural parameters ($b$, $t_{\text{lag}}$, $k_{\text{np}}$) due to scarcity of human time‐course data; interspecies translation is unvalidated.
- Model only predicts ADA incidence, not impact on exposure, efficacy, or safety, which is the more clinically relevant endpoint.
- Published dataset (Vaisman‐Mentesh) includes only approved mAbs up to 2020; newer or non‐approved molecules are not represented.

#### Limitations (Expert Review)
- No formal hypothesis test or effect size is provided to quantify the statistical significance of the bias across phases.
- Sample sizes for internal Phase II (8) and Phase III (15) are small, making distribution estimates (e.g., trimodality) unreliable.
- The model does not account for assay sensitivity differences over time (e.g., FDA guidance changes in 2009 and 2014), which could confound phase comparisons.
- Dropout, censoring, and intermittent sampling in clinical trials are not simulated; the model assumes all patients are followed to the end.
- The NHP‐to‐human translation assumption is biologically plausible but untested; no sensitivity analysis around $b$, $t_{\text{lag}}$, or $k_{\text{np}}$ is provided.

#### Generalizability
The bias pattern is likely general to monoclonal antibodies across the industry, but its magnitude may vary by company, therapeutic area, and era. The Roche internal data, while limited in sample size (especially Phase II and III), provide a plausible upper bound for the bias. The empirical model is simplified and may not directly apply to other therapeutic modalities (fusion proteins, bispecifics, nanobodies) without recalibration. The core message—that published data systematically underestimate early‐phase immunogenicity—is highly generalizable.

---

### Key Equations

**ADA positivity model over time**

{% raw %}
$$
ADA(t) = \begin{cases} b & t \leq t_{\text{lag}} \\ b + (y_{\max} - b)\left(1 - e^{-k_{\text{np}}(t - t_{\text{lag}})}\right) & t > t_{\text{lag}} \end{cases}
$$
{% endraw %}

Empirical model describing cumulative ADA‐positive incidence over time after a lag period. $b$ is baseline incidence, $y_{\max}$ is maximum incidence, $t_{\text{lag}}$ is the latency period, and $k_{\text{np}}$ is the first‐order transition rate from negative to positive.

**Parameter sampling distributions**

{% raw %}
$$
y_{\max}, b \sim \text{LogitNormal}(\mu, \sigma),   t_{\text{lag}}, k_{\text{np}} \sim \text{LogNormal}(\mu_{\text{log}}, \sigma_{\text{log}})
$$
{% endraw %}

Parameter distributions: $y_{\max}$ and baseline $b$ are sampled from logit‐normal distributions fitted to human (phase‐specific) data; $t_{\text{lag}}$ and $k_{\text{np}}$ are sampled from lognormal distributions derived from NHP data.

---

### Figures & Tables

- **Figure 1**: Distribution of cumulative ADA‐positivity ratios for approved mAbs (gray line) compared to Roche internal Phase I, II, and III compounds (three panels, blue lines).
  - *Significance*: Visually confirms the publication bias: early‐phase (Phase I/II) compounds show higher median ADA rates and broader variability than approved or Phase III compounds. This supports the premise that high‐ADA programs are often discontinued before results are published.
- **Figure 2**: Simulated ADA‐positivity ratio over time (up to 300 days) using $y_{\max}$ sampled from published (leftmost panel) or phase‐specific internal distributions (three following panels, and a phase‐merged panel).
  - *Significance*: Quantifies the impact of data source on predictions. Using published data yields lower median peak incidence (2.7%) and narrower prediction percentiles (shaded bands), potentially undermining confidence in early‐development immunogenicity risk assessments.

---

### Code & Reproducibility Assessment
Code publicly available at https://github.com/SopTax/IG-publication-bias ; includes all simulation code for the empirical model, parameter fitting, and figure generation.

---

### Supplementary Materials
Supplementary materials (mentioned as Supplement S1 and S2) include detailed descriptions of the NHP study data (dose groups, covariates, paratope quality scores) and additional simulation results from phase‐merged analyses. These are not reproduced in the main text but support the robustness of the findings.

---

### Future Directions
1. Incorporate compound‐, study‐, and patient‐specific covariates (e.g., paratope quality scores, dose regimen, prior exposure) into the model to enable study‐centric predictions. 2. Expand the dataset to include industry‐wide Phase I/II ADA data through pre‐competitive consortia (e.g., ABIRISK). 3. Extend the model to predict not only ADA incidence but also impact on PK, efficacy, and safety. 4. Validate the simulation framework against external datasets from other sponsors. 5. Develop bias correction methods (e.g., using phase‐specific prior distributions) for models trained on published data.

---

### Expert Commentary

---

### Bottom Line
When building predictive immunogenicity models for early development, practitioners must account for the systematic underreporting of high‐ADA compounds. Published data alone yield overly optimistic peak incidence estimates and artificially narrow confidence intervals. Incorporating internal Phase I/II data or adjusting for publication bias is essential for realistic risk assessment. Industry‐wide sharing of phased ADA data would significantly improve model accuracy and support better regulatory and development decisions.

---

---

## 📊 Figures

![Distribution of ADA-positives ratio for approved mAbs (gray solid line) and for phase-separated in-house compounds (3 shades of blue, one panel per phase). The f]({{ site.baseurl }}/assets/digests/2026-05-30-immunogenicity-publication-bias-and-its-consequences-for-predictive-models-a/figures/fig_01.png)

![Simulated ADA-positive ratio over time based onymaxvalues sampled from logit-normal distributions fitted to published (magenta, last panel) and in-house cumulati]({{ site.baseurl }}/assets/digests/2026-05-30-immunogenicity-publication-bias-and-its-consequences-for-predictive-models-a/figures/fig_02.png)