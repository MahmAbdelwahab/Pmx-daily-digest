---
layout: post
title: "Predictors of Ability to Work in Multiple Sclerosis"
date: 2026-07-26
authors: "Ueckert S, Wastesson G, Nyman E, Smedby C, Li X, Bentzen J, Karlsson M"
journal: "Clinical Pharmacology & Therapeutics, 2025"
doi: "10.1002/cpt.70000"
paper_type: popk
tags: [popk]
excerpt_text: "This study uses Swedish registry data to quantify how MS disability measures (EDSS, MSIS-29, FSMC) predict sickness benefit days. The EDSS, a physician-assessed score, is the strongest predictor, with physical disability measures outperforming psychological ones. The model enables patient-level predictions of work disability, supporting treatment evaluation and cost-effectiveness analyses. Pharmacometricians interested in linking clinical endpoints to real-world economic outcomes will find the IRT-Markov modeling framework particularly valuable."
pdf_path: "/assets/digests/2026-07-26-predictors-of-ability-to-work-in-multiple-sclerosis/PMx_Predictors_of_Ability_to_Work_in_Multipl_20260726.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study uses Swedish registry data to quantify how MS disability measures (EDSS, MSIS-29, FSMC) predict sickness benefit days. The EDSS, a physician-assessed score, is the strongest predictor, with physical disability measures outperforming psychological ones. The model enables patient-level predictions of work disability, supporting treatment evaluation and cost-effectiveness analyses. Pharmacometricians interested in linking clinical endpoints to real-world economic outcomes will find the IRT-Markov modeling framework particularly valuable.

---

### Executive Summary
This study combines two large Swedish registries (SMSreg and MiDAS) to develop a quantitative model linking MS disability measures to sickness benefit days. Using item response theory (IRT), the authors constructed a five-dimensional latent variable model capturing EDSS, MSIS-29 (physical and psychological), and FSMC (motor and cognitive) scores. A five-state Markov model was then developed to predict daily sickness benefit levels (0%, 25%, 50%, 75%, 100%) as a function of these latent variables and age. The EDSS latent variable was the strongest predictor, with physical disability measures outperforming psychological ones. Patients with EDSS <3 had minimal benefit days, while those with EDSS ≥6 spent >50% of days on benefits. The model enables patient-level predictions of work disability, supporting treatment evaluation and cost-effectiveness analyses.

---

### Scientific Context & Motivation
Multiple sclerosis (MS) is a leading cause of disability in young adults, with substantial societal costs due to reduced work capacity. While clinical trials measure disability progression via EDSS and patient-reported outcomes (PROs), the quantitative link between these measures and real-world work disability (e.g., sickness benefits) is poorly characterized. Previous studies have estimated MS-associated costs at group aggregate levels but lacked patient-level predictive models. This work addresses the gap by combining two unique Swedish registries (SMSreg and MiDAS) to develop a model that predicts individual-level sickness benefit days from routinely collected disability assessments. The use of item response theory (IRT) to jointly model multiple disability scales is novel in this context, as is the application of a Markov state model to capture the dynamics of work disability over time.

---

## ⚡ Methodological Snapshot
The analysis proceeds in two stages. First, an item response theory (IRT) model with five correlated latent variables (LVs) is developed to capture the multidimensional disability construct measured by EDSS, MSIS-29 (physical and psychological subscales), and FSMC (motor and cognitive subscales). This model uses item-level data for the patient-reported outcomes, preserving granularity. Second, a five-state Markov model (states: 0%, 25%, 50%, 75%, 100% sickness benefit) is built to describe daily transitions between benefit levels. A subject-specific sickness propensity parameter links covariates (age and LVs) to all transition probabilities simultaneously, assuming coherent changes (higher propensity increases probability of moving to higher benefit states). The LVs from the disability model are included as time-varying covariates, carried forward between assessments. Model selection is based on objective function value (OFV) improvements.

---

## 🏗️ Structural Model Breakdown
The disability model is a five-dimensional item response theory (IRT) model with correlated latent variables (LVs). Each LV corresponds to one assessment: LV1 (EDSS), LV2 (MSIS-29 physical), LV3 (MSIS-29 psychological), LV4 (FSMC motor), LV5 (FSMC cognitive). The EDSS is modeled as a single observed ordinal score (0–10 in 0.5 steps), while MSIS-29 and FSMC are modeled at the item level (20 items for MSIS-29 physical, 9 for MSIS-29 psychological, 10 for FSMC motor, 10 for FSMC cognitive). Each item follows a graded response model (Samejima's model) with item-specific discrimination and difficulty parameters. The five LVs are assumed to follow a multivariate normal distribution with estimated correlations. The sickness benefit model is a five-state Markov model with states representing daily benefit levels (0%, 25%, 50%, 75%, 100% sick). Transition probabilities are parameterized via a subject-specific sickness propensity (ψ), where higher ψ increases probabilities of transitioning to higher benefit states and decreases probabilities of transitioning to lower states. Covariates (age, LVs) are included as linear predictors on ψ: ψ = β₀ + β_age × age + β_LV × LV. The LVs are time-varying, carried forward from the last assessment date.

---

### Detailed Methodological Analysis

#### Modeling Approach
Two-stage modeling approach: (1) Item Response Theory (IRT) model with five correlated latent variables (EDSS, MSIS-29 physical, MSIS-29 psychological, FSMC motor, FSMC cognitive) linking observed item-level scores to underlying disability constructs. (2) Five-state Markov model for daily sickness benefit levels (0%, 25%, 50%, 75%, 100%) with a subject-specific sickness propensity parameter. Covariates (age, latent variables) affect the sickness propensity, which in turn influences all transition probabilities coherently.

#### Data Sources
Two Swedish registries were linked: (1) Swedish MS Registry (SMSreg) providing EDSS, MSIS-29 (item-level), and FSMC (item-level) assessments from 2014–2018 for 9,611 patients (81,079 records). (2) MiDAS registry from the Swedish Social Insurance Agency providing daily sickness benefit levels (0%, 25%, 50%, 75%, 100%) for 14,626 individuals (20,840,662 days). Only MS-related sickness periods (ICD-10: G35, G36, G37, H46) were included. Age range: 18–62 years.

#### Estimation Methods
Disability model (IRT): Maximum likelihood estimation using the mirt package in R. Sickness benefit model: NONMEM 7.4 with LAPLACE estimation algorithm for the Markov model parameters.

#### Model Evaluation
Disability model: Visual predictive checks (VPCs) comparing observed and simulated item-level scores and score correlations (Figures S1–S7). Sickness benefit model: VPC comparing observed and simulated fraction of days in each benefit level as a function of age (Figure 2). Stepwise covariate inclusion assessed via change in objective function value (dOFV).

#### Covariate Analysis
Covariate selection was performed stepwise, starting from a base model including age (linear effect on sickness propensity). Each latent variable (LV) from the disability model was tested individually, then in combination with the best predictor (EDSS LV). The final model included EDSS LV, MSIS-29 psychological LV, and FSMC cognitive LV based on improvement in objective function value (dOFV). Age was retained as a linear covariate; nonlinear trends were not supported (Figure S8).

---

### Statistical Rigor Assessment
The study uses a large, population-based sample (9,611 patients for disability model; 14,626 for sickness benefit model) with high coverage of the Swedish MS population (>80%). The IRT model appropriately handles the ordinal nature of item-level PRO data. The Markov model accounts for the longitudinal, categorical nature of daily benefit levels. Model evaluation includes visual predictive checks (VPCs) for both the disability and sickness benefit models. Covariate selection is based on objective function value (OFV) changes, a standard approach in NONMEM. However, several limitations should be noted: (1) The first 14 days of sick leave (paid by employer) are not included, potentially underestimating short-term work disability. (2) Only MS-coded sickness periods are considered; non-MS sickness may also be MS-related (e.g., comorbidities). (3) The Markov model assumes first-order transitions (only previous day matters), which may not capture longer-term disability trajectories. (4) The coherent transition assumption (single sickness propensity affecting all transitions) may oversimplify state-specific dynamics. (5) No formal sensitivity analyses or bootstrap evaluations are reported for the final model parameters.

---

## 📊 Key Findings
The EDSS latent variable was the strongest predictor of MS-related sickness benefit days, with a difference in objective function value (dOFV) of −1661.6 when added to the base model (age only). Physical disability measures (EDSS, MSIS-29 physical, FSMC motor) consistently outperformed psychological/cognitive measures (MSIS-29 psychological, FSMC cognitive) in predicting work ability. Patients with low disability (EDSS <3) had minimal expected benefit days (21 days/year for EDSS 0–2.5), while those with severe disability (EDSS ≥6) spent >50% of days on benefits (262 days/year). Age was an important modifier: younger patients (<30 years) with mild disability had only 1 expected benefit day/year, whereas older patients (>50 years) with severe disability had >300 expected days/year. The five correlated latent variables showed high correlations between physical measures (EDSS-MSIS-29 physical r=0.73; MSIS-29 physical-FSMC motor r=0.72) and low correlations between EDSS and psychological/cognitive measures (r=0.28–0.30). MSIS-29 physical provided additional discrimination within low EDSS groups (0–2.5), where patients with high MSIS-29 physical had >3 times the expected benefit days compared to those with low scores.

---

## 💡 Clinical & Regulatory Implications
The model provides a quantitative basis for predicting work disability in MS patients based on routinely collected clinical and patient-reported data. Key implications include: (1) EDSS remains the most informative single predictor of sickness benefit days, supporting its continued use in clinical decision-making regarding work capacity. (2) For patients with low EDSS (0–2.5), MSIS-29 physical score adds significant discriminatory power, suggesting that patient-reported physical function should be considered when EDSS is low. (3) Age is an important modifier: younger patients (<30 years) with mild disability have virtually no expected benefit days, while older patients (>50 years) with severe disability (EDSS ≥6) are expected to spend >300 days/year on benefits. (4) The model can be used to simulate the economic impact of treatments that improve disability measures, facilitating cost-effectiveness analyses and pricing discussions. (5) The approach supports regulatory and payer discussions by linking clinical trial endpoints to real-world economic outcomes.

---

### Strengths & Limitations

#### Strengths
- Large, population-based sample with high coverage (>80%) of Swedish MS patients, enhancing representativeness.
- Use of item-level PRO data (MSIS-29, FSMC) rather than total scores, preserving granularity and improving latent variable estimation.
- Novel integration of IRT and Markov modeling to link clinical endpoints to real-world economic outcomes.
- Comprehensive evaluation of multiple disability measures (physician-assessed and patient-reported) within a unified framework.
- Clinically interpretable results (expected benefit days per year) that can directly inform cost-effectiveness analyses.
- Time-varying covariate implementation (carry-forward of LVs) appropriately handles irregular assessment intervals.

#### Limitations (Acknowledged by Authors)
- Only MS-related sickness benefit periods (ICD-10 coded) were considered, potentially underestimating total work disability.
- The first 14 days of sick leave (paid by employer) were not included, masking short-term disability patterns.
- The physician-assessed EDSS may be systematically biased as physicians also certify sickness benefits.
- The model predicts benefit days, not direct economic costs; translation to currency is a natural extension.

#### Limitations (Expert Review)
- The Markov model assumes first-order transitions (only previous day matters), which may not capture longer-term disability trajectories or relapsing-remitting patterns.
- The coherent transition assumption (single sickness propensity affecting all transitions) may oversimplify state-specific dynamics (e.g., transitions from 0% to 100% may differ from 50% to 75%).
- No formal sensitivity analyses or bootstrap confidence intervals are reported for parameter estimates.
- The stepwise covariate selection approach may be prone to overfitting; no cross-validation or penalized methods were used.
- The IRT model assumes unidimensionality within each subscale, which may not fully capture the complexity of MS disability.
- Missing data mechanisms (e.g., why some patients have fewer assessments) are not explicitly modeled.

#### Generalizability
The model is based on Swedish registry data with high population coverage, but generalizability to other countries with different social insurance systems, healthcare structures, and MS treatment patterns may be limited. The age restriction (18–62 years) excludes older patients who may have different work disability patterns. The model's performance in non-Swedish populations or in settings with different MS treatment access remains to be validated.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the EDSS-PRO model showing five correlated latent variables (EDSS, MSIS-29 physical, MSIS-29 psychological, FSMC motor, FSMC cognitive) and their item-level indicators.
  - *Significance*: Illustrates the structural model linking observed scores to latent disability constructs, with estimated correlations between LVs shown as arrows.
- **Figure 2**: Visual predictive check comparing observed (solid blue line) and model-simulated (shaded blue area) fraction of days spent in each benefit level (0%, 25%, 50%, 75%, 100%) as a function of age.
  - *Significance*: Demonstrates the base Markov model's ability to capture age-related trends in sickness benefit levels, validating the model structure before adding disability covariates.
- **Figure 3**: Expected number of days with benefits per year for different score ranges (EDSS, MSIS-29 physical, MSIS-29 psychological, FSMC motor, FSMC cognitive) and three age groups (<30, 30–50, >50 years).
  - *Significance*: Shows the univariate relationship between each disability measure and expected benefit days, highlighting EDSS as the most discriminative predictor across age groups.
- **Figure 4**: Expected number of days with benefits per year stratified by EDSS score group (0–2.5, 2.5–4, 4–6, 6–9) and age group, with additional stratification by PRO score ranges.
  - *Significance*: Reveals that MSIS-29 physical provides additional discrimination within low EDSS groups, suggesting its complementary value when EDSS is not yet elevated.
- **Table 1**: Estimated correlations between the five latent variables (EDSS, MSIS-29 physical, MSIS-29 psychological, FSMC motor, FSMC cognitive).
  - *Significance*: Quantifies the relationships between different disability measures: high correlations (>0.7) between physical measures (EDSS-MSIS-29 physical, MSIS-29 physical-FSMC motor) and low correlations (≤0.3) between EDSS and psychological/cognitive measures.
- **Table 2**: Stepwise covariate selection results showing improvement in objective function value (dOFV) when adding latent variables to the base Markov model (age only).
  - *Significance*: Demonstrates that EDSS LV provides the largest improvement (dOFV −1661.6), followed by MSIS-29 physical (−1589.8) and FSMC motor (−1044.2), with psychological/cognitive LVs showing smaller improvements.

---

### Code & Reproducibility Assessment
Model development and parameter estimation for the EDSS-PRO model were performed using the mirt package in R. Sickness benefit modeling was performed in NONMEM 7.4 using the LAPLACE estimation algorithm. Supplemental Code 1 and Supplemental Code 2 are referenced but not publicly available in the manuscript. No explicit statement about code sharing is provided.

---

### Supplementary Materials
Supplementary materials include detailed model evaluation figures (Figures S1–S8) and Supplemental Code 1 (disability model parameters) and Supplemental Code 2 (sickness benefit model code). These are referenced but not publicly available in the manuscript text.

---

### Future Directions
Several extensions are suggested: (1) Inclusion of non-MS-related sickness benefits to capture total work disability burden. (2) Translation of benefit days to economic costs (Euros or Swedish crowns) for cost-effectiveness analyses. (3) Incorporation of shorter sickness periods (first 14 days paid by employer) for a more complete picture. (4) Evaluation of treatment effects by linking changes in disability measures to expected changes in benefit days. (5) Exploration of additional covariates such as disease duration, treatment history, and socioeconomic status. (6) External validation in other healthcare systems with different social insurance structures. (7) Extension to predict disability pension (long-term) versus short-term sickness benefits.

---

### Expert Commentary
This paper represents a sophisticated integration of two modeling paradigms—IRT for latent disability constructs and Markov modeling for longitudinal health economic outcomes—that is relatively novel in the pharmacometrics literature. The use of item-level data for MSIS-29 and FSMC (rather than total scores) is a methodological strength, as it preserves the granularity of patient responses and allows for more precise latent variable estimation. The five-correlated-factor IRT model is well-suited to the multidimensional nature of MS disability, where physical and cognitive/psychological domains are distinct but correlated. From a regulatory perspective, this work addresses a growing need to link clinical trial endpoints (e.g., EDSS, PROs) to real-world outcomes that matter to patients and payers. The Markov state model with a sickness propensity parameter is elegant, as it parsimoniously captures the effect of covariates on all transition probabilities simultaneously. However, the assumption that transition probabilities change coherently with a single propensity may oversimplify the dynamics of work disability, where transitions between specific states (e.g., 50% to 100%) might have different drivers. The finding that EDSS outperforms PROs is expected but should be interpreted cautiously: physician-assessed EDSS may be confounded with the physician's role in certifying sickness benefits. The authors acknowledge this potential bias. For pharmacometricians, this work offers a template for combining IRT with state-transition models—a methodology that could be applied to other therapeutic areas where latent disease severity predicts categorical health economic outcomes.

---

### Bottom Line
This work provides a quantitative, model-based framework linking MS disability measures (EDSS, MSIS-29, FSMC) to sickness benefit days using Swedish registry data. The EDSS, a physician-assessed score, emerged as the strongest predictor of work ability, followed by physical subscales of patient-reported outcomes. The model enables patient-level predictions of expected benefit days, offering a tool for evaluating treatment effects on societal and individual costs. For pharmacometricians, this study exemplifies the integration of item response theory (IRT) with Markov state modeling to bridge clinical endpoints with real-world economic outcomes.

---

---

## 📊 Figures

![Schematic representation of the EDSS-PRO score model. Numbers indicate items, black arrows indicate the estimated correlations, and colors indicate the different]({{ site.baseurl }}/assets/digests/2026-07-26-predictors-of-ability-to-work-in-multiple-sclerosis/figures/fig_01.png)

![Visual predictive check comparing observed (solid blue line) and model simulated (shaded blue area) fraction of days spent in each benefit level as a function of]({{ site.baseurl }}/assets/digests/2026-07-26-predictors-of-ability-to-work-in-multiple-sclerosis/figures/fig_02.png)

![Expected number of days with benefits per year for different scores and age ranges. The dashed lines indicate 0 and 365 days; the dotted line indicates 182.5 day]({{ site.baseurl }}/assets/digests/2026-07-26-predictors-of-ability-to-work-in-multiple-sclerosis/figures/fig_03.png)

![Expected number of days with benefits per year for different PRO score ranges, stratified by EDSS value and age. The dashed lines indicate 0 and 365 days, the do]({{ site.baseurl }}/assets/digests/2026-07-26-predictors-of-ability-to-work-in-multiple-sclerosis/figures/fig_04.png)