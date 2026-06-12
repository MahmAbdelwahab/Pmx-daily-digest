---
layout: post
title: "Albumin Levels Are Predictive of Cachexia-Induced Time-Dependent Clearance of Therapeutic Antibodies: A Physiologically Based Pharmacokinetic Model of Durvalumab"
date: 2026-05-30
authors: "J.R.P., H.W."
journal: "N/A"
doi: "https://pubmed.ncbi.nlm.nih.gov/41543435/"
paper_type: popk
tags: [popk, pbpk, dose-response]
excerpt_text: "This paper demonstrates that longitudinal albumin data can be incorporated into a PBPK model to mechanistically predict time-dependent clearance of monoclonal antibodies due to cachexia, without fitting to clinical PK data. Pharmacometricians interested in mechanistic modeling of time-varying PK or exposure-response confounding should read this."
pdf_path: "/assets/digests/2026-05-30-albumin-levels-are-predictive-of-cachexia-induced-time-dependent-clearance-of/PMx_Albumin_Levels_Are_Predictive_of_Cachexi_20260530.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper demonstrates that longitudinal albumin data can be incorporated into a PBPK model to mechanistically predict time-dependent clearance of monoclonal antibodies due to cachexia, without fitting to clinical PK data. Pharmacometricians interested in mechanistic modeling of time-varying PK or exposure-response confounding should read this.

---

### Executive Summary
The authors extended a published PBPK model to describe time-varying clearance of durvalumab by fitting only to longitudinal albumin data from cancer patients. The model predicted the magnitude and time course of clearance changes consistent with empirical popPK models, supporting the hypothesis that cachexia-driven changes in protein turnover drive the time-dependent clearance. This mechanistic framework offers a tool to anticipate evolving clearance in oncology and potentially improve dose optimization.

---

### Scientific Context & Motivation
Cachexia in cancer patients accelerates monoclonal antibody clearance, and successful treatment ameliorates cachexia, resulting in declining clearance over time—a phenomenon known to confound exposure-response analyses. While empirical popPK models and time-varying covariates have been used, mechanistic PBPK models incorporating albumin metabolism have not been applied to predict time-dependent clearance. This study fills that gap by linking albumin, a clinical biomarker of cachexia, to changes in the endosomal degradation rate constant (kdeg) in a PBPK model, enabling prediction of clearance changes without direct PK fitting.

---

## ⚡ Methodological Snapshot
A whole-body PBPK model with two-pore tissue distribution and FcRn-mediated recycling was extended by allowing the endosomal degradation rate constant ($k_{deg}$) to decline exponentially over time. Three parameters ($k_{deg,inf}$, $k_{deg,T}$, $k_{tv}$) were fitted to longitudinal albumin data digitized from a durvalumab popPK analysis using fminsearch in SimBiology. The resulting $k_{deg}(t)$ function was used to simulate durvalumab PK and compared to empirical popPK models.

---

## 🏗️ Structural Model Breakdown
Whole-body PBPK model with 15 tissue compartments (lung, heart, brain, muscle, skin, adipose, bone, kidney, liver, gut, pancreas, spleen, thymus, and 'rest'). Each tissue has plasma, endosomal, and interstitial spaces. FcRn binding sites for IgG and albumin are separate. Model equations from Liu et al. (2024). The time-varying component introduces an exponential decay in $k_{deg}$.

---

### Detailed Methodological Analysis

#### Modeling Approach
Extended the two-pore PBPK model of Liu et al. (2024) implemented in SimBiology (MATLAB 2023b). The model comprises whole-body compartments with plasma, endosomal, and interstitial subcompartments per tissue. Protein catabolism is modeled via nonspecific pinocytosis and lysosomal degradation, with FcRn-mediated recycling. Time-dependent clearance is modeled by an exponentially decaying $k_{deg}$: $k_{deg}(t) = k_{deg,inf} + k_{deg,T} \cdot \exp(-k_{tv} \cdot t)$.

#### Data Sources
Longitudinal serum albumin data (mean values up to 450 days) digitized from Figure 5 of the durvalumab popPK analysis (Baheti et al. 2020). No individual-level data. Clinical PK data from durvalumab and other checkpoint inhibitors obtained from published popPK model parameters (Table S3).

#### Estimation Methods
Fminsearch algorithm in SimBiology for nonlinear least-squares fitting of three $k_{deg}$ parameters to albumin data. No hierarchical estimation (NONMEM-style); only mean data fitted.

#### Model Evaluation
Visual inspection of fit (Figure 2); low RSE (<10%) of parameter estimates; comparison of predicted change in clearance to empirical popPK model confidence intervals; RMSE comparison to alternative model (varying FcRn).

#### Covariate Analysis
Not applicable; only albumin data used as driver. No patient covariates beyond the time-varying albumin.

---

### Statistical Rigor Assessment
The fitting used summary data, not individual-level data, so uncertainty estimates may be optimistic. Standard errors assume normality and are likely underestimated due to lack of residual error modeling. The authors did not perform bootstrap or nonparametric uncertainty quantification. Comparison to empirical popPK model confidence intervals provides some validation.

---

## 📊 Key Findings
The PBPK model fitted to longitudinal albumin data from durvalumab trials predicted a 12% decline in clearance over 60 weeks, similar to the 14% decline estimated by the empirical popPK model. The degradation rate constant $k_{deg}$ decreased by 34% over time. The model also predicted a 14% increase in endogenous IgG, consistent with clinical observations. When compared across 10 checkpoint inhibitors, the PBPK prediction fell within the range of estimated clearance changes, though variability among drugs was substantial.

---

## 💡 Clinical & Regulatory Implications
This modeling approach could inform dose adjustment strategies in patients with cachexia. If albumin levels are monitored, one could predict the time course of clearance changes and potentially adjust dosing regimens to maintain target exposure. Regulatory impact: could support model-informed drug development by reducing confounding in exposure-response analyses.

---

### Strengths & Limitations

#### Strengths
- Mechanistic link between albumin and antibody clearance without fitting to clinical PK data.
- Uses publicly available summary-level albumin data.
- Captures the trend across multiple checkpoint inhibitors.
- Low parameter uncertainty (RSE < 10%) for the three fitted parameters.
- Provides a platform for exploring time-dependent clearance mechanisms.

#### Limitations (Acknowledged by Authors)
- Fitted to summary-level rather than individual-level albumin data.
- Longitudinal albumin data only available for durvalumab.
- Unable to account for inter-individual variability in albumin and clearance.
- Model did not include tumor burden or other potential factors like FcRn expression.
- Variability among checkpoint inhibitors not fully captured by a single albumin profile.

#### Limitations (Expert Review)
- Use of summary data may obscure patient-specific dynamics and underestimate uncertainty.
- Assumption that $k_{deg}$ decline solely represents cachexia improvement, ignoring other mechanisms.
- No formal model selection against alternative mechanisms (e.g., FcRn variation) beyond RMSE comparison.
- Lack of external validation with independent PK data.
- Time scale of clearance change assumed identical for all patients/cancers.

#### Generalizability
The model appears representative of a typical immune checkpoint inhibitor profile, but individual drug-specific predictions would require drug-specific longitudinal albumin data. Applicability to non-checkpoint inhibitors or biologics with different FcRn binding affinities is uncertain.

---

### Key Equations

**Time-varying endosomal degradation rate constant**

{% raw %}
$$
k_{\text{deg}}(t) = k_{\text{deg,inf}} + k_{\text{deg,T}} \cdot e^{-k_{\text{tv}} \cdot t}
$$
{% endraw %}

Models the decline in protein catabolism over time, driven by improvement in cachexia; used to simulate time-dependent clearance.

---

### Figures & Tables

- **Figure 1**: Organ-level structure of the whole-body PBPK model (A) and internal compartments comprising each organ (B).
  - *Significance*: Illustrates the mechanistic framework of the PBPK model, including tissue subcompartments and FcRn recycling pathways.
- **Figure 2**: PBPK model-simulated serum albumin level over time fitted to albumin data from durvalumab-treated patients.
  - *Significance*: Demonstrates good fit of the model to observed albumin data, with increasing albumin over treatment course.
- **Figure 3**: Time course of the fitted degradation rate constant $k_{deg}$.
  - *Significance*: Shows a 34% decline in $k_{deg}$, representing the mechanistic driver of decreasing clearance.
- **Figure 4**: Concentration-time profile of durvalumab 10 mg/kg Q2W from the PBPK model and the empirical popPK model.
  - *Significance*: Direct comparison shows close agreement, validating the PBPK prediction without fitting to PK data.
- **Figure 5**: Change from baseline clearance predicted by PBPK model versus empirical popPK model with 95% CI.
  - *Significance*: PBPK prediction falls within the confidence interval of the popPK model, supporting mechanistic plausibility.
- **Figure 6**: PBPK-model predicted change in clearance compared to empirical popPK models of 10 checkpoint inhibitors.
  - *Significance*: Demonstrates that the PBPK prediction is representative of a typical profile despite variability among drugs.
- **Table 1**: Parameter estimates for the time-varying $k_{deg}$ model: $k_{deg,inf}$, $k_{deg,T}$, and $k_{tv}$ with standard errors and RSEs.
  - *Significance*: Provides fitted values and low uncertainty, key for model credibility.

---

### Supplementary Materials
Supplementary materials include Table S1 (compartment volumes and flow rates), Table S2 (remaining model parameters), Table S3 (popPK parameters for 10 checkpoint inhibitors), Table S4 (RMSE comparison between $k_{deg}$ and FcRn models), and Figures S1–S4 (additional simulation results).

---

### Future Directions
Incorporate individual patient albumin data to capture inter-individual variability. Include tumor size as a covariate to disentangle cachexia versus tumor burden effects. Expand to other biologics and indications. Validate against external PK data from independent studies. Develop a tool for clinical trial simulation with time-dependent clearance.

---

### Expert Commentary
This is a clever use of a mechanistic PBPK model to address a clinically relevant problem—confounding in exposure-response analyses for checkpoint inhibitors. The key innovation is using albumin as a surrogate for cachexia status without fitting to PK data. However, the reliance on summary data limits the ability to quantify inter-individual variability, which is crucial for dose individualization. The approach could be strengthened by a full population analysis with individual-level albumin and PK data. Nevertheless, it provides a solid foundation for future work and highlights the value of joint modeling of biomarkers and PK in oncology.

---

### Bottom Line
This study provides a proof-of-concept that albumin levels can serve as a mechanistic biomarker to predict time-dependent clearance of monoclonal antibodies using a PBPK framework. Pharmacometricians should consider incorporating longitudinal albumin data to anticipate evolving clearance in oncology populations, which may help disentangle exposure-response relationships for dose optimization.

---

---

## 📊 Figures

![Organ-level structure of the whole body PBPK model (A), and internal compartments comprising each organ (B). (A) Boxes represent tissue compartments. Solid arrow]({{ site.baseurl }}/assets/digests/2026-05-30-albumin-levels-are-predictive-of-cachexia-induced-time-dependent-clearance-of/figures/fig_01.png)

![PBPK model-simulated serum albumin level over time (black line) fitted to albumin in patients with advanced cancer treated with durvalumab (black circles).]({{ site.baseurl }}/assets/digests/2026-05-30-albumin-levels-are-predictive-of-cachexia-induced-time-dependent-clearance-of/figures/fig_02.png)

![Model predicted change in degradation rate constant of free proteins in the endosome fitted to longitudinal albumin data from durvalumab.]({{ site.baseurl }}/assets/digests/2026-05-30-albumin-levels-are-predictive-of-cachexia-induced-time-dependent-clearance-of/figures/fig_03.png)

![Concentration-time profile of 10 mg/kg every 2 weeks for 40 weeks of the time-varying PBPK model versus the previously published popPK model of durvalumab 19.]({{ site.baseurl }}/assets/digests/2026-05-30-albumin-levels-are-predictive-of-cachexia-induced-time-dependent-clearance-of/figures/fig_04.png)

![PBPK model-predicted change from baseline clearance (CL) over time (red line) versus empirical popPK model of durvalumab with 95% confidence intervals (black poi]({{ site.baseurl }}/assets/digests/2026-05-30-albumin-levels-are-predictive-of-cachexia-induced-time-dependent-clearance-of/figures/fig_05.png)

![PBPK-model predicted change from baseline clearance over time (black line) versus empirical popPK models of 10 immune checkpoint inhibitor monoclonal antibody dr]({{ site.baseurl }}/assets/digests/2026-05-30-albumin-levels-are-predictive-of-cachexia-induced-time-dependent-clearance-of/figures/fig_06.png)