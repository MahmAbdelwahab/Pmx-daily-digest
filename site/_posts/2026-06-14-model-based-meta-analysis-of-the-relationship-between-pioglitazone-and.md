---
layout: post
title: "Model-Based Meta-Analysis of the Relationship Between Pioglitazone and Histological Outcomes in Metabolic Dysfunction-Associated Steatohepatitis Patients"
date: 2026-06-14
authors: "Quan Thi Truong, Thien Thu Bui, Lily Trinh Nguyen, Bo Ram Yun, In-Hwan Baek, Van-Huong Nguyen, Hwi-yeol Yun, Jung-woo Chae, Soyoung Lee, Jae Hyun Kim, Woojin Jung"
journal: "Clinical Pharmacology and Therapeutics, 2025 (Epub ahead of print). PMID: 40248984"
doi: "N/A"
paper_type: generic
tags: [generic, meta-analysis]
excerpt_text: "This model-based meta-analysis (MBMA) of 8 studies (540 patients) demonstrates that pioglitazone dose- and time-dependently improves steatosis, inflammation, ballooning, and fibrosis and reduces ALT/AST in MASH. Using logit models for ordinal histological outcomes and Weibull models for liver enzymes, the analysis provides a quantitative benchmark for evaluating novel MASH therapies against a recognized off-label standard."
pdf_path: "/assets/digests/2026-06-14-model-based-meta-analysis-of-the-relationship-between-pioglitazone-and/PMx_ModelBased_MetaAnalysis_of_the_Relations_20260614.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This model-based meta-analysis (MBMA) of 8 studies (540 patients) demonstrates that pioglitazone dose- and time-dependently improves steatosis, inflammation, ballooning, and fibrosis and reduces ALT/AST in MASH. Using logit models for ordinal histological outcomes and Weibull models for liver enzymes, the analysis provides a quantitative benchmark for evaluating novel MASH therapies against a recognized off-label standard.

---

### Executive Summary
Given the high prevalence of MASH and the limited approved treatment options (notably, only Rezdiffra), pioglitazone—a T2D drug—is widely used off-label. This MBMA integrated sparse histological outcome data via virtual patient generation (beta distribution and bootstrap) to develop ordinal logistic models (logit link) describing dose- and time-dependent improvements in steatosis, inflammation, ballooning, and fibrosis. The $E_{max}$-time model best described steatosis and ballooning; linear time relationships fitted inflammation and fibrosis. A Weibull model provided the best fit for ALT and AST decline. The models, evaluated using VPC, bootstrap, leave-one-out analysis, and external validation (27 patients), show pioglitazone efficacy and provide a quantitative framework for benchmarking new MASH drugs.

---

### Scientific Context & Motivation
MASH affects ~20-30% of the global population with limited pharmacotherapy options. Only Rezdiffra (resmetirom) is officially approved; however, pioglitazone is recommended as off-label therapy by major liver societies (AASLD, EASL, JSH). While multiple RCTs and systematic reviews confirm pioglitazone's histological benefits, no previous MBMA has quantitatively integrated dose-response and longitudinal effects on individual histological endpoints (steatosis, ballooning, inflammation, fibrosis) and liver enzymes. This gap limits the ability to benchmark new therapies against a well-characterized standard of care with appropriate time and dose dependence.

---

## ⚡ Methodological Snapshot
Studies were identified through PubMed/clinicaltrials.gov. Inclusion criteria: clinical studies of pioglitazone in MASH reporting histology scores or liver enzymes. Of 453 screened, 8 studies (540 patients) provided data. For ordinal histological outcomes (steatosis 0–3, inflammation 0–3, ballooning 0–2, fibrosis 0–4), sparse reporting formats (mean±SD or score counts) were converted to virtual patient-level data using beta distribution (for mean/SD) or bootstrap (for counts). A cumulative logit model with random study effects was used, with the linear predictor including dose (30 vs 45 mg), time, and a dose-by-time interaction. The best time course model for steatosis and ballooning was an $E_{max}$ model (dose-independent $E_{max}$, dose-dependent potency); for inflammation and fibrosis, a linear time effect was sufficient. For ALT and AST, a Weibull model with baseline, amplitude, rate ($\lambda$), and shape ($\gamma$) parameters, with random effects on baseline and amplitude, was selected over an exponential model based on OFV. Models were evaluated using VPC (1000 simulations), bootstrap (1000 replicates), leave-one-study-out analysis, and external validation with an independent dataset of 27 MASLD patients.

---

## 📋 Detailed Analysis
The authors present a well-structured MBMA tackling a clinically relevant question with an innovative analytical approach. The decision to generate virtual patient data from aggregate summaries is pragmatic but carries assumptions about the distribution of scores within each study arm. The beta distribution approach for mean/SD data assumes a unimodal continuous distribution of the ordinal scale, which may not exactly match the true multinomial distribution, potentially smoothing out some features of the data. The bootstrap approach for count data is more defensible but relies on the original sample's score distribution. A more rigorous alternative would be to directly model the observed counts using a multinomial likelihood within NONMEM or via Bayesian methods; however, this is computationally demanding and may be less familiar to many pharmacometricians. The $ET_{50}$ estimate for ballooning (17.4 months, RSE 27%) is particularly important: it implies that maximal benefit on hepatocyte injury requires well over a year of treatment, which has clear implications for clinical trial duration. The relatively large RSE here suggests the data are only marginally informative for this parameter, likely because few studies extended beyond 12 months. The liver enzyme models, while well-fitted, could have benefited from an indirect response model to better reflect the underlying biology of hepatocyte turnover and enzyme clearance. The external validation results (~50% within prediction intervals) are moderate; the authors rightly attribute this partly to dose mismatch (external data included 15 mg). More importantly, the external population was 'MASLD' not exclusively 'MASH', which reduces the specificity of model validation.

---

### Domain Context
Model-based meta-analysis has become a cornerstone of drug development decision-making, particularly in metabolic diseases where multiple competing therapies and long trial durations make head-to-head comparisons impractical. In the MASH space, the field has struggled with endpoint selection — the FDA requires one of two co-primary endpoints: NASH resolution without worsening fibrosis, or fibrosis improvement without worsening NASH, evaluated by central histology. The ordinal scores analyzed here (steatosis, inflammation, ballooning, fibrosis) are the individual components that contribute to the NASH Activity Score (NAS) and fibrosis stage. Quantitative models linking pioglitazone to these components are valuable because they can be used to simulate expected outcomes on the co-primary endpoints, providing a virtual placebo or active comparator arm for single-arm studies or for designing non-inferiority trials. This work extends the growing library of quantitative disease-drug-trial models for MASH, which includes prior work by the Critical Path Institute's NASH model consortium. The emphasis on dose-response and time-dependence fills a gap left by conventional pairwise meta-analyses, which typically only provide a pooled effect size at a single time point.

---

## 📊 Key Findings
1) Pioglitazone (30 and 45 mg daily) improved all four histological endpoints relative to placebo in a dose- and time-dependent fashion. Steatosis and ballooning followed an $E_{max}$-time relationship ($ET_{50}$ 0.584 months and 17.4 months, respectively), while inflammation and fibrosis showed a linear time effect. 2) The fibrosis improvement, though statistically significant, was relatively modest compared to other outcomes, consistent with the challenge of reversing fibrosis. 3) ALT and AST reductions were best captured by a Weibull model, with shape parameters ($\lambda$) notably higher in the pioglitazone group, indicating rapid, sustained normalization of transaminases. 4) External validation on 27 MASLD patients (15 and 30 mg) showed ~50% of observations within prediction intervals, suggesting reasonable trend capturing but limited precision at lower doses. 5) Placebo groups showed minimal changes, underscoring no spontaneous improvement and highlighting the treatment effect.

---

### Strengths & Limitations

#### Strengths
- First MBMA to quantitatively link pioglitazone dose and exposure duration to individual ordinal histological endpoints using a principled ordinal logit framework.
- Sophisticated handling of sparse ordinal data via virtual patient generation, with transparent justification of beta distribution and bootstrap methods.
- Comprehensive model evaluation: VPC, bootstrap, leave-one-out study-level analysis, and external validation with independent clinical data.
- Clinically relevant — pioglitazone remains a global standard of care, and this model provides a much-needed quantitative benchmark for emerging MASH drugs.
- Clear presentation of time- and dose-dependence, with distinct $ET_{50}$ estimates for steatosis vs. ballooning, offering mechanistic insights into differential response timelines.

#### Limitations (Acknowledged by Authors)
- Sparse data necessitated generation of virtual patient-level data, which may not fully reflect real-world variability.
- Only one study (Cusi et al.) contributed 45 mg dose data for inflammation, limiting inference for that dose-endpoint combination.
- In Belfort (2006) and Cusi (2016), dose was increased from 30 to 45 mg after 2 months, complicating the early exposure–response for the 45 mg group.
- External validation dataset comprised patients on 15–30 mg, whereas the model was developed on 30–45 mg, leading to potential dose-mismatch bias.

#### Limitations (Expert Review)
- Histological scores were harmonized to a common scale (0–3 for steatosis/inflammation, 0–2 for ballooning) by collapsing higher categories, leading to potential loss of information and ordinal category boundary effects.
- The virtual data generation step, while necessary, may inflate precision and underestimate uncertainty in the original estimates; this is not explicitly reported.
- No formal covariate analysis (e.g., T2D status, BMI, baseline fibrosis stage, concomitant medications) could be performed due to data limitations, reducing generalizability to specific patient subgroups.
- The external validation set is small (n=27, 59 observations) and based on MASLD rather than exclusively MASH, limiting assessment of the model's predictive performance.
- Model comparison with alternative structural models (e.g., indirect response models for liver enzymes) was not explored in detail beyond Weibull vs. exponential.
- No assessment of model identifiability — large RSE for some parameters (e.g., $ET_{50}$ for ballooning: 27.1%) suggests potential over-parameterization relative to the information content.

#### Generalizability
The models are expected to generalize to T2D patients with biopsy-proven MASH receiving pioglitazone 30–45 mg, which represents the primary target population and dose range. Generalizability to non-diabetic MASH, pediatric populations, or patients with advanced cirrhosis is limited by the source study populations. The lower-dose (15 mg), represented only in the small external validation set, shows reduced model fit, suggesting caution for low-dose extrapolation.

---

### Key Equations

**Logit model for ordinal histological outcomes**

{% raw %}
$$
\log\left(\frac{P(Y \leq k)}{1 - P(Y \leq k)}\right) = \alpha_k + \beta_1 \cdot \text{Dose} + \beta_2 \cdot \text{Time} + \eta_{\text{study}}
$$
{% endraw %}

Cumulative logit model for the probability of being in score category ≤ k, where $\alpha_k$ are threshold intercepts, $\beta_1$ and $\beta_2$ are dose and time effects, and $\eta_{\text{study}}$ is a random study effect.

**Emax-time model for steatosis/ballooning**

{% raw %}
$$
E = E_0 + \frac{E_{\max} \cdot \text{Time}^{\gamma}}{\text{ET}_{50}^{\gamma} + \text{Time}^{\gamma}} \cdot f(\text{Dose})
$$
{% endraw %}

Describes the treatment effect over time, with $E_{max}$ as maximum effect, $ET_{50}$ as the time to half-maximal effect, and $\gamma$ as the sigmoidicity factor.

**Weibull model for ALT/AST**

{% raw %}
$$
\text{ALT}(t) = \text{Baseline} - A \cdot \left(1 - e^{-(\lambda t)^{\gamma}}\right)
$$
{% endraw %}

Weibull model to characterize the longitudinal reduction in liver enzymes, where Baseline is starting ALT/AST, $A$ is the maximum reduction, $\lambda$ is the rate parameter, and $\gamma$ is the shape parameter.

---

### Figures & Tables

- **Figure 2**: Visual predictive check (VPC) for the steatosis model, showing observed proportions vs. model-predicted median and 95% CI for each score category over time.
  - *Significance*: Demonstrates the ordinal logit model's ability to capture the distribution of steatosis scores across time and dose groups.
- **Figure 3**: Stacked bar plot comparing observed vs. simulated distribution of steatosis scores at different time points for 30 and 45 mg doses.
  - *Significance*: Provides intuitive visual validation of the model's prediction of categorical outcomes over time.
- **Table 1**: Parameter estimates (final model and bootstrap) for all four histological outcomes: intercepts, slopes, $E_{max}$, $ET_{50}$, and $\omega$ random effects.
  - *Significance*: Central quantitative result — all parameters were precisely estimated with bootstrap 95% CIs consistent with the final model, supporting reliability.
- **Table 2**: Parameter estimates for Weibull ALT and AST models including baseline, amplitude $A$, rate $\lambda$, shape $\gamma$, and residual error components.
  - *Significance*: Establishes the quantitative time course of liver enzyme normalization, with higher shape parameters confirming drug effect over placebo.
- **Figure 4 & 5**: VPC for external validation of ALT and AST models using data from 27 MASLD patients.
  - *Significance*: Provides independent (though limited) evaluation of model performance in a real-world clinical setting, highlighting potential dose-mismatch issues.

---

### Code & Reproducibility Assessment
The authors state that code for virtual data generation is provided in the Supporting Information (R, version 4.2.1). However, no public repository (GitHub, Zenodo) is referenced, limiting direct full reproduction without manual access to supplementary files.

---

### Supplementary Materials
Supplementary materials include Table S1 (scoring system definitions), Table S2 (study characteristics), Table S3 (HO data summary), Table S4 (detailed HO data), Figure S1 (stacked bar plot of virtual data), Figures S2–S10 (additional VPCs and stacked bar plots for inflammation, ballooning, fibrosis, ALT, AST), Figure S11 (leave-one-out z-score plots), and R code for virtual data generation.

---

### Future Directions
1) Extend the MBMA framework to include resmetirom data for comparative benchmarking. 2) Incorporate covariates (T2D status, BMI, HbA1c, baseline fibrosis stage) to enable subgroup predictions. 3) Apply a full joint model for correlated ordinal outcomes (steatosis, inflammation, ballooning) to improve precision. 4) Conduct a prospective validation in a larger, independent MASH cohort receiving pioglitazone across a wider dose range (15–45 mg) and with longer follow-up. 5) Explore indirect response models for ALT/AST to better capture the delay between drug exposure and enzyme reduction, possibly offering mechanistic insights.

---

### Expert Commentary
This work fills an important gap — while pioglitazone is a recognized off-label therapy for MASH, there has been no integrated, quantitative synthesis of its dose- and time-response across all four histological hallmarks. The ordinal logit approach, while standard in meta-analysis of ordered categorical data, is applied here with a careful treatment of sparse data. The $ET_{50}$ difference between steatosis (~0.6 months) and ballooning (~17 months) is particularly interesting, suggesting early improvement in fat content but much slower resolution of hepatocyte injury. This has practical implications for trial design — short-term studies may miss ballooning changes. The external validation, though limited, is a welcome addition. However, the reliance on virtual data generation is a notable epistemic limitation — it treats generated data as 'observed,' which can subtly distort uncertainty estimates. For regulatory-grade model-based meta-analyses, direct modeling of the aggregate ordinal data (e.g., using a multinomial likelihood with cumulative logit) would be more rigorous, even if computationally more complex. Nonetheless, for its stated goal of providing a benchmark, this model is fit-for-purpose and should be of practical utility to drug developers in the MASH space.

---

### Bottom Line
This MBMA provides a robust, quantitative evidence base confirming pioglitazone's dose- and time-dependent efficacy across all four key histological endpoints and liver enzymes in MASH. The developed logit and Weibull models can serve as a valuable benchmarking tool for the development and regulatory evaluation of novel MASH therapies, enabling comparison with an established standard of care.

---

---

## 📊 Figures

![Flow chart of the selection process of all articles included in this MBMA.]({{ site.baseurl }}/assets/digests/2026-06-14-model-based-meta-analysis-of-the-relationship-between-pioglitazone-and/figures/fig_01.png)

![Visual predictive check of steatosis model. Points represent the proportion of each score at a specific time point from observation, solid line and pink area rep]({{ site.baseurl }}/assets/digests/2026-06-14-model-based-meta-analysis-of-the-relationship-between-pioglitazone-and/figures/fig_02.png)

![Stacked bar plot of steatosis. Each score was presented as proportion. 30 mg, 45 mg indicates pioglitazone 30 mg or 45 mg daily. Left plot: From observation; Rig]({{ site.baseurl }}/assets/digests/2026-06-14-model-based-meta-analysis-of-the-relationship-between-pioglitazone-and/figures/fig_03.png)

![VPC for external dataset of ALT.]({{ site.baseurl }}/assets/digests/2026-06-14-model-based-meta-analysis-of-the-relationship-between-pioglitazone-and/figures/fig_04.png)

![VPC for external dataset of AST.]({{ site.baseurl }}/assets/digests/2026-06-14-model-based-meta-analysis-of-the-relationship-between-pioglitazone-and/figures/fig_05.png)