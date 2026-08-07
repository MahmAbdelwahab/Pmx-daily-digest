---
layout: post
title: "Refinement of Operating Characteristics for Model-Based TGI Metrics Decision Support to Ungate a Pivotal Trial in Oncology"
date: 2026-08-07
authors: "Marchand M, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70304"
paper_type: methodology
tags: [methodology, oncology]
excerpt_text: "This paper refines a simulation-based operating characteristics (OC) framework for model-based tumor growth inhibition (TGI) metrics used to support Go/No-Go decisions in early oncology trials. Using 500 resampled replicates from the IMpower150 Phase III trial, the authors show that the Week-24 tumor ratio (TR24) median ratio yields the most favorable OCs (AUC 0.934), outperforming both RECIST endpoints (ORR difference AUC 0.865; PFS HR AUC 0.828) and the directly estimated growth-rate constant (KG), which suffered from shrinkage on short follow-up."
pdf_path: "/assets/digests/2026-08-07-refinement-of-operating-characteristics-for-model-based-tgi-metrics-decision/PMx_Refinement_of_Operating_Characteristics__20260807.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper refines a simulation-based operating characteristics (OC) framework for model-based tumor growth inhibition (TGI) metrics used to support Go/No-Go decisions in early oncology trials. Using 500 resampled replicates from the IMpower150 Phase III trial, the authors show that the Week-24 tumor ratio (TR24) median ratio yields the most favorable OCs (AUC 0.934), outperforming both RECIST endpoints (ORR difference AUC 0.865; PFS HR AUC 0.828) and the directly estimated growth-rate constant (KG), which suffered from shrinkage on short follow-up.

---

### Executive Summary
Marchand et al. refine a previously developed OC framework for model-based TGI metrics to support Go/No-Go decisions in early randomized oncology trials. Using 500 replicates of 40-patient-per-arm datasets resampled from the IMpower150 Phase III trial (ABCP vs BCP), they evaluated TGI metrics (KG, TR24, TR12, TR6, TRMAX, TTG) against RECIST endpoints (ORR difference, PFS HR). Key methodological refinements include treatment-specific TGI parameters under both alternative and null hypotheses, deriving a hazard ratio for TTG via Cox proportional hazards instead of a median ratio, and smoothed ROC curves with confidence intervals and AUC. TR24 MedR demonstrated the most favorable OCs (AUC 0.934 [0.918; 0.949]), significantly outperforming PFS HR (0.828 [0.802; 0.853]) and ORR difference (0.865 [0.843; 0.887]). Notably, KG MedR performance shifted downward relative to prior work, attributed to excessive shrinkage in KG estimation on short follow-up. The authors emphasize that OCs are highly sensitive to methodological details and that subsample design must mimic the real drug-development decision context.

---

### Scientific Context & Motivation
The oncology market is evolving rapidly, with an increasing number of therapeutic options making early inference of treatment benefit critical. Go/No-Go decisions in early-stage trials typically rely on probabilities of achieving meaningful improvements in endpoints such as objective response rate (ORR), tailored to product profiles, to support faster transitions to confirmatory trials. However, classical endpoints may be suboptimal for early decision-making. Model-based tumor growth inhibition (TGI) metrics derived from longitudinal tumor size data offer a potentially more informative and earlier readout of treatment efficacy. The paper addresses the gap of establishing a robust early decision framework for ungating pivotal trials, refining a previously developed OC framework by addressing methodological details that can materially affect outcomes.

---

## ⚡ Methodological Snapshot
The paper refines a simulation-based operating characteristics (OC) framework for model-based TGI metrics to evaluate Go/No-Go decisions in early oncology trials. The framework uses 500 resampled replicates of 40-patient-per-arm datasets from the IMpower150 Phase III trial (ABCP vs BCP), with data restricted to 24 weeks of follow-up. Longitudinal SLD data are analyzed with a biexponential TGI nonlinear mixed-effects model in NONMEM, with treatment-specific fixed-effect parameters under both the alternative (experimental vs control) and null (control vs control) hypotheses to minimize shrinkage. TGI metrics (KG, TR24, TR12, TR6, TRMAX, TTG) are derived, and effect sizes are computed as median ratios (MedR) for continuous metrics and hazard ratios (HR) for time-to-event metrics (TTG, PFS). Smoothed ROC curves with confidence intervals and AUC are used to compare decision performance across metrics.

---

## 📐 Statistical Framework
The statistical framework is based on a nonlinear mixed-effects (NLME) model for longitudinal tumor size (SLD) data, using a biexponential TGI model with treatment arm as a fixed effect on both KG and KS parameters. The model is estimated under both the alternative hypothesis (experimental vs control) and the null hypothesis (control vs control), with treatment-specific fixed-effect thetas to minimize shrinkage and reflect distinct treatment effects. Effect sizes are computed as the ratio of medians (MedR) for TGI metrics and hazard ratios (HR) for time-to-event endpoints (TTG, PFS) via Cox proportional hazards models. The OC framework evaluates the probability of correct Go (power) versus incorrect Go (type I error) across 500 replicates, using smoothed ROC curves and AUC with confidence intervals.

---

### Estimator Behavior
The paper highlights that the KG estimator suffers from substantial shrinkage on short follow-up studies (24 weeks), leading to reduced power and increased type I error in the OC analysis. This is a key finding, as KG previously showed strong predictive capability. In contrast, TR24, a derived metric integrating both KG and KS, showed robust estimator behavior with the most favorable OCs. The TTG estimate may also be shrunk in some patients, affecting its performance. The use of treatment-specific parameters under each hypothesis reduces shrinkage and improves the robustness of the framework. The HR-based TTG analysis provides a more appropriate treatment-effect comparison than the median ratio used previously.

---

### Validation Design
The validation design uses a simulation-based resampling approach. 500 replicates of 40-patient-per-arm datasets are generated by resampling longitudinal SLD, ORR, PFS, and baseline characteristics from patients in the ABCP and BCP arms of the IMpower150 trial, restricted to 24 weeks of follow-up. A null scenario is simulated by resampling the control arm twice (BCP/BCP). The OC framework compares correct Go rates (ABCP/BCP) versus incorrect Go rates (BCP/BCP) across the 500 replicates. Smoothed ROC curves with confidence intervals and AUC are used to compare the discriminative ability of each metric. The primary scenario uses 40 patients per arm and 24-week follow-up, with thresholds of TR24 MedR < 0.90 or < 0.85 evaluated for decision support.

---

### Applicability Boundaries
The framework is designed for early randomized clinical trials in oncology, particularly for immunotherapy combinations. It is most applicable when longitudinal tumor size (SLD) data are available and a TGI model can be fitted. The framework works best when the follow-up duration is sufficient to capture tumor dynamics (e.g., 24 weeks) and when the control arm is well-defined. The framework is highly sensitive to methodological details: sample size, choice of control (historical vs randomized), and follow-up duration must mimic the real drug development decision. The KG metric is less reliable on short follow-up due to shrinkage. The framework may not generalize to other indications or treatment mechanisms without re-validation, as the authors note ongoing evaluations in multiple myeloma and biliary tract cancer.

---

### Comparison to Alternatives
The paper compares TGI metrics against classical endpoints (ORR difference and PFS HR). TR24 MedR demonstrated superior performance (AUC 0.934) compared to both PFS (0.828) and ORR difference (0.865). Among TGI metrics, TR24 was the most favorable, followed by TRMAX, KG, TR12, TR6, and TTG HR. The paper also compares the refined framework to the previous version [1], noting that KG MedR performance shifted downward due to shrinkage, while TR24 remained robust. The use of HR for TTG (instead of MedR) is a methodological improvement that allows consistent comparison with time-to-event endpoints. The smoothed ROC curves provide a more interpretable comparison than the discrete points used previously.

---

### Implementation Guidance
The TGI model is implemented in NONMEM (version 7.3.0) as a nonlinear mixed-effects model. The Cox proportional hazards model for TTG and PFS is implemented in R using the survival package (coxph function). Smoothed ROC curves are generated using the pROC package in R. The computational workflow involves: (1) resampling longitudinal SLD data from a reference trial, (2) fitting the biexponential TGI model to each replicate with treatment-specific parameters, (3) deriving TGI metrics (KG, TR24, TR12, TR6, TRMAX, TTG), (4) computing effect sizes (MedR or HR), and (5) generating smoothed ROC curves with AUC and confidence intervals. The computational cost is substantial, as 500 replicates of nonlinear mixed-effects model fits are required, which can be time-consuming. Practitioners should ensure the subsample design (sample size, control arm, follow-up duration) mirrors the real study context.

---

## 📊 Key Findings
TR24 MedR exhibited the most favorable operating characteristics, closely followed by TRMAX, KG, TR12, TR6 MedR, and TTG HR. TR24 MedR outperformed both ORR difference and PFS HR, with thresholds of TR24 MedR < 0.90 or < 0.85 emerging as promising decision targets, contingent on acceptable incorrect-Go risk (< 20% or < 10%, respectively). TR24 showed significantly higher AUC than both PFS (0.934 [0.918; 0.949] vs 0.828 [0.802; 0.853]) and ORR difference (0.934 [0.918; 0.949] vs 0.865 [0.843; 0.887]). In contrast to prior findings, the KG MedR ROC curve shifted downward and rightward, indicating reduced power and increased type I error, likely due to excessive shrinkage in KG estimation on short follow-up. The gray region (correct Go > 70%, incorrect Go < 20%) in Figure 1 highlights the decision-relevant operating region.

---

### Strengths & Limitations

#### Strengths
- Comprehensive evaluation of six TGI metrics (KG, TR24, TR12, TR6, TRMAX, TTG) against RECIST endpoints (ORR, PFS) within a unified OC framework
- Methodological refinements that improve the framework: treatment-specific TGI parameters under both hypotheses, HR-based TTG analysis via Cox proportional hazards, and smoothed ROC curves with confidence intervals and AUC
- Use of a large Phase III trial (IMpower150) as a realistic data source, with resampling to mimic early-phase trial designs
- Explicit handling of both alternative (true effect) and null (no effect) scenarios, enabling simultaneous assessment of power and type I error
- Clear, actionable decision thresholds (e.g., TR24 MedR < 0.90 or < 0.85) tied to acceptable incorrect-Go risk

#### Limitations (Acknowledged by Authors)
- KG estimation suffers from shrinkage on short follow-up, limiting its reliability
- TTG estimates may be shrunk in some patients, affecting its performance
- Interpretation of results should account for the association of the selected metric with the primary endpoint of the pivotal trial to be ungated
- Further work is ongoing to evaluate different resampling approaches and the robustness of the model used to assess OCs

#### Limitations (Expert Review)
- The simulation study is based on a single trial (IMpower150) in a specific setting (first-line NSCLC), limiting generalizability to other indications and treatment mechanisms
- The resampling design (40 patients per arm, 24-week follow-up) may not capture the full heterogeneity of real-world early-phase trial designs
- The framework relies on a single biexponential TGI model structure without exploring model misspecification or alternative structural models
- Decision rules are based on point estimates of effect sizes without incorporating estimation uncertainty into the decision framework
- Comparing TTG HR (a time-to-event effect) with MedR-based metrics (KG, TR24) mixes effect-size scales, potentially complicating direct comparisons

#### Generalizability
The framework is demonstrated in a single Phase III trial (IMpower150) in first-line NSCLC with immunotherapy combinations. The methodological refinements (treatment-specific parameters, HR-based TTG, smoothed ROC) are likely generalizable, but the specific performance characteristics and decision thresholds may need re-validation in other indications and treatment settings. The authors note ongoing evaluations in multiple myeloma and biliary tract cancer to confirm the approach.

---

### Key Equations

**Biexponential TGI model**

{% raw %}
$$
\frac{dTS}{dt} = KG \cdot TS - KS \cdot TS
$$
{% endraw %}

The biexponential tumor growth inhibition model describing the rate of change of tumor size (TS) as a function of the growth rate constant (KG) and shrinkage rate constant (KS), with treatment arm as a fixed effect on both parameters.

**Median ratio (MedR) effect size**

{% raw %}
$$
MedR = \frac{\text{median}(\hat{\theta}_{exp})}{\text{median}(\hat{\theta}_{ctrl})}
$$
{% endraw %}

The ratio of medians of individual estimated TGI metrics (e.g., KG, TR24) between experimental and control arms, used as the effect size measure for continuous TGI metrics.

**Hazard ratio for TTG**

{% raw %}
$$
HR = \exp(\lambda_{treatment})
$$
{% endraw %}

The hazard ratio derived from a Cox proportional hazards model applied to individual TTG values, representing the relative risk of tumor regrowth in the experimental arm compared to control, enabling consistent comparison with time-to-event endpoints like PFS.

---

### Figures & Tables

- **Figure 1**: Probabilities to achieve desired effect sizes when comparing ABCP versus BCP (correct Go rate) and BCP versus BCP (incorrect Go rate) for the primary scenario (40 patients per arm, 24-week follow-up). The gray region (top left) represents a correct Go rate > 70% for an incorrect Go rate < 20%.
  - *Significance*: This figure presents the main operating characteristics (ROC) for all TGI metrics (TR24, TRMAX, KG, TR12, TR6, TTG HR), showing that TR24 MedR exhibits the most favorable OCs, closely followed by TRMAX, KG, TR12, TR6, and TTG HR.
- **Figure 2**: Probabilities of the desired effect sizes when comparing ABCP versus BCP (correct Go rate) and BCP versus BCP (incorrect Go rate) for the primary scenario, comparing TR24 MedR against RECIST endpoints (ORR difference and PFS HR).
  - *Significance*: This figure demonstrates the superior performance of TR24 MedR over classical endpoints, with significantly higher AUC than both PFS (0.934 vs 0.828) and ORR difference (0.934 vs 0.865), supporting TR24 as a promising early decision metric.

---

### Code & Reproducibility Assessment
The paper does not provide explicit code or data availability statements. The analysis uses NONMEM (version 7.3.0) for TGI model estimation and R with the survival package (coxph) and pROC package for effect-size and ROC analysis. The resampling procedure is described in detail but the underlying code is not publicly released.

---

### Future Directions
The authors report ongoing evaluations in multiple myeloma and biliary tract cancer to confirm the approach. Additional research should explore different resampling strategies, assess the robustness of the TGI model structure, and investigate the association of selected metrics with primary endpoints of pivotal trials. Future work could also incorporate estimation uncertainty into decision rules and evaluate the impact of model misspecification on OC performance.

---

### Expert Commentary
This paper makes a valuable contribution by systematically demonstrating the sensitivity of operating characteristics to methodological details in model-based TGI decision frameworks. The finding that TR24 (a derived metric integrating both KG and KS) outperforms the directly estimated KG is particularly important: it highlights that derived metrics can be more robust than structural parameters when shrinkage is substantial on short follow-up. The shift in KG performance relative to prior work underscores the need for careful validation of OC frameworks across data and settings. The practical decision thresholds (TR24 MedR < 0.90 or < 0.85) are useful, but the single-trial basis limits the generalizability of the specific performance characteristics; the framework should be re-validated in each new indication.

---

### Bottom Line
For practitioners, this study provides a refined, quantitative framework for using model-based TGI metrics to support Go/No-Go decisions in early oncology trials. TR24 (tumor ratio at Week 24) is the most robust and interpretable metric, with thresholds of MedR < 0.90 or < 0.85 recommended for decision support. However, OCs are highly sensitive to methodological choices (modeling strategy, parameter estimation, effect-size processing, control-arm size), so the OC subsample design must closely mimic the real drug development decision context. The framework should be re-validated in each new indication and treatment setting.

---

---

## 📊 Figures

![Probabilities to achieve desired effect sizes when comparing ABCP versus BCP (correct Go rate) and BCP versus BCP (incorrect Go rate) for the primary scenario (4]({{ site.baseurl }}/assets/digests/2026-08-07-refinement-of-operating-characteristics-for-model-based-tgi-metrics-decision/figures/fig_01.jpg)

![Probabilities to achieve desired effect sizes when comparing ABCP versus BCP (correct Go rate) and BCP versus BCP (incorrect Go rate) for the primary scenario (4]({{ site.baseurl }}/assets/digests/2026-08-07-refinement-of-operating-characteristics-for-model-based-tgi-metrics-decision/figures/fig_02.jpg)