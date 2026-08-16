---
layout: post
title: "Relevance-Based Score for MIPD Model Selection: Systematic Review and External Evaluation of popPK Tacrolimus Models in Adult Transplant Recipients"
date: 2026-08-16
authors: "Baroudi S, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(8)"
doi: "10.1002/psp4.70315"
paper_type: methodology
tags: [methodology]
excerpt_text: "This paper introduces a 23-item relevance-based scoring framework to prioritize population pharmacokinetic models for external evaluation and model-informed precision dosing (MIPD), applied to 28 tacrolimus models in adult transplant recipients. External evaluation of all models in an independent 86-patient dataset showed moderate correlation between relevance scores and predictive performance (Pearson $r=0.56$, Spearman $\\rho=0.61$), with the Lu et al. model achieving the highest external score (6/14). The framework offers a structured, adaptable approach to model selection but requires further validation and consensus-building."
pdf_path: "/assets/digests/2026-08-16-relevance-based-score-for-mipd-model-selection-systematic-review-and-external/PMx_RelevanceBased_Score_for_MIPD_Model_Sele_20260816.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper introduces a 23-item relevance-based scoring framework to prioritize population pharmacokinetic models for external evaluation and model-informed precision dosing (MIPD), applied to 28 tacrolimus models in adult transplant recipients. External evaluation of all models in an independent 86-patient dataset showed moderate correlation between relevance scores and predictive performance (Pearson $r=0.56$, Spearman $\rho=0.61$), with the Lu et al. model achieving the highest external score (6/14). The framework offers a structured, adaptable approach to model selection but requires further validation and consensus-building.

---

### Executive Summary
The authors developed a generalizable relevance-based scoring system (23 criteria, max 56 points) to rank popPK models for MIPD using only publication information, addressing the practical challenge of selecting among numerous published models for external evaluation. Applying this to tacrolimus, they systematically identified 28 models, scored them, and externally evaluated all in an independent dataset of 86 adult transplant recipients (43 kidney, 43 liver) with rich PK profiles. Predictive performance was assessed via bias (MPE), imprecision (MDAPE), and AUC classification concordance, summarized in a 14-point external evaluation score. Relevance scores ranged from 6 to 38 (mean 22.3), and external scores from 0 to 6. The correlation between relevance and external scores was moderate (Pearson $r=0.56$, Spearman $\rho=0.61$), indicating that relevance criteria capture some but not all aspects of predictive performance. Population-level predictions were consistently inaccurate, while individual predictions were more acceptable. The framework provides a structured basis for model prioritization but requires further validation and expert consensus.

---

### Scientific Context & Motivation
External evaluation is the gold standard for assessing popPK model predictive performance and extrapolability, but when many models exist for the same drug, evaluating all candidates is time- and resource-intensive. No structured method has been published to prioritize models for external evaluation. This study addresses this gap by proposing a relevance-based scoring framework that uses publication information only to rank models, illustrated with tacrolimus in adult solid organ transplantation—a drug with a narrow therapeutic index, high inter-individual variability, and numerous published popPK models. The work also develops an external evaluation score to compare relevance scores with actual predictive performance, and provides new external evaluation results for tacrolimus models in a French transplant population.

---

## ⚡ Methodological Snapshot
The authors developed a two-part scoring framework. First, a general relevance-based score with 23 criteria across five domains (training dataset, study design, evaluation methodology, covariates, parameter precision) was designed, with weights from 1 to 5 based on expected impact on predictive performance. Criteria were derived from published guidelines and external evaluations, and refined through iterative expert consultation. The score was adapted to tacrolimus using descriptive statistics from identified models (e.g., patient number thresholds based on median and 75th percentile). Second, an external evaluation score (max 14 points) was developed with tacrolimus-specific thresholds for bias (MPE), imprecision (MDAPE), and AUC concordance, applied to individual and population predictions. Models were ranked by both scores, and correlations assessed using Pearson and Spearman coefficients. The framework is intended for NLME models and designed to be adaptable across drugs and clinical contexts.

---

## 📐 Statistical Framework
The relevance score is a weighted composite score based on expert-assigned weights (1–5) for 23 criteria, with no formal statistical model underlying the scoring. The external evaluation uses standard predictive performance metrics: MPE (mean prediction error) for bias and MDAPE (median absolute prediction error) for imprecision, calculated for both IPRED and PPRED. AUC concordance is assessed by comparing predicted vs observed AUC against therapeutic thresholds. Correlations between scores are assessed using Pearson (linear) and Spearman (rank) correlation coefficients. The framework assumes that publication-reported characteristics (dataset size, design, covariates, parameter precision) are proxies for model quality and generalizability, and that external evaluation metrics reflect clinical utility. Missing information is handled by assigning 0 points, with an Achievable-Adjusted Score normalizing to available criteria.

---

### Estimator Behavior
The paper does not focus on estimator properties of popPK models per se, but evaluates predictive performance of 28 models. Population predictions (PPRED) showed consistent positive bias (mean +78%) and high imprecision (MDAPE >30% for all models), indicating poor generalizability of structural models. Individual predictions (IPRED) showed lower bias (mean +10%) and better precision (19 models with MDAPE 10–20%), reflecting the benefit of rich individual data for EBE estimation. At 3-year follow-up, individual predictions showed negative bias (−63% to +5%) and high imprecision (MDAPE 36–78%), suggesting poor long-term predictive performance. The relevance score's ability to predict external performance was moderate ($r=0.56$), indicating that relevance criteria capture some but not all determinants of predictive accuracy.

---

### Validation Design
The validation design involved: (1) systematic literature review to identify 28 tacrolimus popPK models; (2) scoring of models using the relevance framework; (3) external evaluation of all 28 models in an independent dataset of 86 patients (43 kidney, 43 liver) from Rennes University Hospital, with 695 PK samples (5–10 per occasion) and 19 patients with second-occasion trough samples; (4) computation of MPE, MDAPE for IPRED and PPRED, and AUC concordance; (5) development of an external evaluation score (max 14 points) with tacrolimus-specific thresholds; (6) correlation analysis between relevance and external scores using Pearson and Spearman coefficients; (7) sensitivity analysis of threshold choices; (8) comparison of criteria fulfillment between top-10 and remaining models using Fisher's exact test. Model implementation was verified by comparing prediction interval plots against published VPCs.

---

### Applicability Boundaries
The relevance scoring framework is applicable to NLME popPK models and is designed to be adaptable across drugs, but requires contextual modification (e.g., sample number thresholds, relevant covariates). It is most useful when many models exist for the same drug and external evaluation of all is infeasible. The framework relies on publication information; incomplete reporting can limit scoring, though Achievable-Adjusted Score mitigates this. The external evaluation results are specific to tacrolimus in adult transplant recipients (French/Caucasian population) and may not generalize to other populations or drugs. The framework does not account for model structural uncertainty or model averaging. Population-level predictions were consistently poor, suggesting the framework may not identify models with good population-level performance; individual-level predictions were more reliable with rich sampling. The external evaluation score thresholds are tacrolimus-specific and require adaptation for other drugs.

---

### Comparison to Alternatives
Compared to the Hoffert et al. approach (ranking by sample-to-patient ratio), the relevance score identified different top models; seven of the top-10 relevance models were ranked much lower by Hoffert et al., while showing good predictive performance in this external evaluation. This suggests the relevance score captures additional dimensions beyond sample size. The external evaluation results are consistent with previous studies (e.g., Kirubakaran et al.) showing that even high-relevance models may fail predefined performance thresholds. The relevance score provides a more comprehensive, multi-criteria approach compared to simple sample-based ranking, but its moderate correlation with external performance ($r=0.56$) indicates it is not a perfect predictor. The external evaluation score with AUC concordance adds a clinically interpretable dimension not typically included in standard evaluations.

---

### Implementation Guidance
To implement the relevance scoring framework: (1) conduct a systematic literature review to identify popPK models; (2) adapt the 23 criteria to the specific drug and target population (e.g., adjust patient number thresholds, relevant covariates, sample number requirements); (3) score each model based on publication information, contacting authors for missing data; (4) compute raw and Achievable-Adjusted scores; (5) prioritize models with highest scores for external evaluation. For external evaluation, use independent datasets with rich PK profiles when possible, and compute MPE, MDAPE, and AUC concordance with context-specific thresholds. Models can be implemented in Monolix/Simulx or other NLME software; verification against published VPCs is recommended. The framework is computationally light, requiring only literature review and scoring; external evaluation requires PK datasets and modeling software. The authors suggest combining top models via model averaging as a future direction.

---

## 📊 Key Findings
1. A 23-item relevance score was developed covering training dataset characteristics, study design, evaluation methodology, covariates, and parameter precision, with weights from 1 to 5. 2. For tacrolimus, 28 models were scored; mean relevance score was 22.3/56 (range 6–38), with Størset et al. (38) and Lu et al. (33) scoring highest. 3. External evaluation in 86 patients (695 samples) showed population predictions were consistently inaccurate (no model met MDAPE<30% threshold), while individual predictions were more acceptable (9 models with MPE<5%, 3 with MDAPE<10%). 4. AUC concordance ranged from 56% to 94%, with overestimation being the main limitation; no model reached the 95% concordance threshold. 5. The highest external evaluation score was 6/14 (Lu et al.); 10 models reached ≥4/14. 6. Correlation between relevance and external scores was moderate (Pearson $r=0.56$, Spearman $\rho=0.61$), and similar with Achievable-Adjusted Score ($r=0.54$, $\rho=0.58$). 7. Criteria significantly associated with higher external scores included adequate IIV estimate on absorption rate constant (RSE<50%) and residual error <20% (proportional) / <LLOQ (additive).

---

### Strengths & Limitations

#### Strengths
- First structured, adaptable relevance-based scoring framework for popPK model selection using publication information only
- Comprehensive systematic review identifying 28 tacrolimus popPK models, updating previous reviews
- External evaluation of all 28 models in an independent dataset with rich PK profiles (5–10 samples/occasion), providing new performance data
- Development of a context-specific external evaluation score with clinically relevant AUC concordance assessment
- Sensitivity analysis of threshold choices and Achievable-Adjusted Score to handle missing information
- Transparent methodology with criteria derived from guidelines and expert consultation

#### Limitations (Acknowledged by Authors)
- Scoring framework is newly proposed and requires further validation
- Incomplete reporting in publications limited some criteria assessment; missing information set to 0
- Small number of second-occasion samples (19 patients) limited interpretability of medium-term predictions
- CYP3A5 covariate excluded due to unavailability in target population
- Criteria related to external evaluation and data splitting showed limited discriminatory power
- Individual-level results should be interpreted cautiously as rich sampling may compensate for structural model limitations

#### Limitations (Expert Review)
- The relevance score was developed locally with limited external input; formal consensus methodology (e.g., Delphi) not used
- Correlation between relevance and external scores was only moderate, suggesting relevance criteria may not fully capture predictive performance determinants
- External evaluation dataset was single-center with specific population (French adults, 50% liver/kidney), limiting generalizability of performance rankings
- The external evaluation score thresholds were adapted for tacrolimus but may not generalize to other drugs without further validation
- No formal handling of model structural uncertainty or model averaging in the scoring framework
- The relevance score weights were assigned by expert judgment without formal optimization or cross-validation
- AUC concordance assessment may be sensitive to the choice of therapeutic thresholds and AUC calculation method

#### Generalizability
The relevance-based scoring framework is designed to be adaptable across drugs and clinical contexts, with criteria that can be modified based on drug-specific PK characteristics. However, the tacrolimus-specific application and external evaluation results are limited to adult solid organ transplant populations, particularly French/Caucasian patients. The moderate correlation between relevance and external scores suggests the framework may be useful for prioritization but not as a substitute for external evaluation. Further validation in other drugs and populations is needed to establish generalizability.

---

---

### Figures & Tables

- **Figure 1**: PRISMA flow chart showing the systematic literature review process for identifying tacrolimus popPK models (181 identified, 28 included).
  - *Significance*: Documents the systematic review methodology and transparency of model identification.
- **Figure 2**: Prediction error (MPE) and median absolute prediction error (MDAPE) for population predictions (A, B), individual predictions (C, D), and individual predictions at 3 years (E, F) across all 28 models.
  - *Significance*: Provides comprehensive visualization of predictive performance, showing population-level inaccuracy and better individual-level performance.
- **Figure 3**: Concordance of predicted AUC with observed AUC (%) for all models, with color and hatching coding as in Figure 2.
  - *Significance*: Shows clinically relevant exposure classification performance, with overestimation being the main limitation.
- **Figure 4**: Correlation between external evaluation score and relevance score (Pearson $r=0.56$, $p<0.01$), with dashed red ellipse highlighting top 10 models.
  - *Significance*: Demonstrates the moderate association between relevance-based prioritization and actual predictive performance.
- **Table 1**: External evaluation score criteria with thresholds for AUC concordance, MPE, and MDAPE at individual and population levels.
  - *Significance*: Defines the scoring system used to compare models' predictive performance, with tacrolimus-specific thresholds.
- **Table 2**: Relevance-based scoring grid adapted to tacrolimus, listing 23 criteria with weights (max 56 points).
  - *Significance*: Core methodological contribution; provides the adaptable scoring framework for model selection.
- **Table 3**: Characteristics of the external evaluation dataset (86 patients, 695 samples), including demographics, graft type, co-treatments, and continuous data.
  - *Significance*: Describes the independent dataset used for external evaluation, supporting reproducibility and interpretation.

---

### Code & Reproducibility Assessment
The paper does not explicitly mention availability of analysis code or scripts. Models were implemented using Monolix and Simulx software (Simulation Plus Inc.), and R (with mice package) was used for data imputation and statistical analyses. Detailed methods are provided in Supporting Information, but no public code repository is referenced.

---

### Supplementary Materials
Supporting Information includes detailed search strategy, eligibility criteria, exclusion steps, imputation methods, model implementation verification plots (Figure S1), model characteristics (Tables S3, S4), relevance scores (Table S5), external evaluation scores (Table S6), sensitivity analysis of thresholds, and criteria fulfillment comparison (Figure S2).

---

### Future Directions
Future work should involve formal expert consensus (e.g., Delphi method) to refine and validate the relevance scoring framework across multiple drugs and clinical contexts. The authors suggest combining top-performing models via model averaging algorithms and evaluating predictive performance. Additional external evaluations in diverse populations and with larger second-occasion datasets would strengthen conclusions. The framework could also be extended to incorporate structural model uncertainty and Bayesian model averaging approaches.

---

### Expert Commentary
This paper addresses a practical and increasingly important problem in pharmacometrics: how to select among numerous published popPK models for MIPD. The relevance scoring framework is a thoughtful, structured approach that fills a gap in the literature. The moderate correlation between relevance and external performance ($r \approx 0.56$) is expected, as relevance criteria capture design and reporting quality but not necessarily all aspects of predictive accuracy in a new population. The finding that population-level predictions were consistently poor across models is concerning and highlights the need for cautious interpretation of popPK models in MIPD, especially when individual-level data are sparse. The framework's adaptability is a strength, but its reliance on expert judgment for weights and thresholds requires formal validation. The external evaluation results for tacrolimus provide valuable benchmarking data for the field.

---

### Bottom Line
For practitioners, this paper provides a practical, adaptable 23-item relevance scoring framework to prioritize popPK models for external evaluation and MIPD implementation when many models exist. The tacrolimus case study demonstrates that relevance scores correlate moderately with predictive performance, and identifies Lu et al. and Størset et al. as top candidates for MIPD in adult transplant recipients. However, the framework should be used as a screening tool, not a replacement for external evaluation, and requires further validation and expert consensus before widespread adoption.

---

---

## 📊 Figures

![Prisma flow chart.]({{ site.baseurl }}/assets/digests/2026-08-16-relevance-based-score-for-mipd-model-selection-systematic-review-and-external/figures/fig_01.jpg)

![Prediction error and median absolute prediction error of population predictions (A, B) and individual predictions (C, D) and individual predictions at 3 years (E]({{ site.baseurl }}/assets/digests/2026-08-16-relevance-based-score-for-mipd-model-selection-systematic-review-and-external/figures/fig_02.jpg)

![Concordance of predicted AUC with observed AUC (%). Color and hatching coding as in Figure2.]({{ site.baseurl }}/assets/digests/2026-08-16-relevance-based-score-for-mipd-model-selection-systematic-review-and-external/figures/fig_03.jpg)

![Correlation between external evaluation score and relevance score (Pearson correlation coefficient = 0.56,p< 0.01). The dashed red ellipse highlights the top 10]({{ site.baseurl }}/assets/digests/2026-08-16-relevance-based-score-for-mipd-model-selection-systematic-review-and-external/figures/fig_04.jpg)