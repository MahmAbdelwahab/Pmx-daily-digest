---
layout: post
title: "Pharmacokinetic Model Selection for Personalized Infliximab Dosing in IBD"
date: 2026-06-30
authors: "Sahira C, Gaudriault P, Concordet D, et al."
journal: "Clinical Pharmacology & Therapeutics, 2025"
doi: "10.17632/s86hys6tdn.2"
paper_type: popk
tags: [popk]
excerpt_text: "This paper tackles the practical challenge of selecting among multiple published PopPK models for infliximab when personalizing doses in IBD patients. Using a novel statistical method (MED) and data from 34 patients, the authors show that no single model fits all patients and propose a three-tier classification (red/orange/green) to guide model selection. This is essential reading for pharmacometricians and clinicians involved in model-informed precision dosing of biologics."
pdf_path: "/assets/digests/2026-06-30-pharmacokinetic-model-selection-for-personalized-infliximab-dosing-in-ibd/PMx_Pharmacokinetic_Model_Selection_for_Pers_20260630.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper tackles the practical challenge of selecting among multiple published PopPK models for infliximab when personalizing doses in IBD patients. Using a novel statistical method (MED) and data from 34 patients, the authors show that no single model fits all patients and propose a three-tier classification (red/orange/green) to guide model selection. This is essential reading for pharmacometricians and clinicians involved in model-informed precision dosing of biologics.

---

### Executive Summary
This retrospective study evaluates the compatibility of 16 published population pharmacokinetic (PopPK) models of infliximab with data from 34 adult Crohn's disease patients. Using the Multivariate Exact Discrepancy (MED) method with 100,000 Monte Carlo simulations, the authors found that no single model was compatible with all patients. A three-tier classification emerged: 29.4% of patients were compatible with all models (green zone), 55.9% with 5–16 models (orange zone), and 14.7% with none (red zone). The Metropolis-Hastings algorithm was used to estimate individual parameter distributions and compute doses required to achieve a target AUC of 2079 mg·day/L. The mean median dose was 9.25 mg/kg, with a mean imprecision of 6.63 mg/kg. The study highlights the importance of model selection in personalized dosing and proposes a practical classification to guide clinical decisions.

---

### Scientific Context & Motivation
Infliximab exhibits high interindividual pharmacokinetic variability, and weight-based dosing alone is insufficient to achieve target exposures. Population PK models can personalize dosing, but the proliferation of published models raises the question of which model to use for a given patient. Previous studies have compared models on summary statistics (e.g., VPC, prediction error) but have not systematically assessed model-patient compatibility at the individual level. This study fills that gap by introducing the MED method, which evaluates whether a patient's entire concentration profile is consistent with a model's predictions. The work challenges the assumption that a single 'best' model can be applied universally and highlights the need for model selection strategies in clinical practice.

---

## ⚡ Methodological Snapshot
The study uses a two-step approach. First, the Multivariate Exact Discrepancy (MED) method, a novel statistical test, evaluates the compatibility of each patient's concentration profile with each of 16 published PopPK models. MED uses 100,000 Monte Carlo simulations to generate the expected distribution of concentrations under each model, and the observed data are compared to this distribution. Second, for compatible patient-model pairs (MED ≥ 0.05), the Metropolis-Hastings algorithm (MHA) generates posterior distributions of PK parameters (especially clearance) to compute the dose required to achieve a target AUC of 2079 mg·day/L. Dose imprecision is defined as the width of the 90% CI of the dose. The analysis accounts for censored data (below LLOQ, above ULOQ) and manually varies key covariates (FCGR3A, fecal calprotectin, TNF-α) to explore their impact on model compatibility.

---

## 🏗️ Structural Model Breakdown
The study tested 16 models with varying structures: 4 mono-compartmental models (M1–M4) with one central compartment and first-order elimination; 9 bi-compartmental models (B1–B9) with central and peripheral compartments; 2 TMDD models (TMDD1, TMDD2) incorporating target-mediated clearance via TNF-α binding; and 1 PKPD model (B6) linking fecal calprotectin to clearance. All models included inter-individual variability (IIV) on clearance and volume parameters, with covariance between CL and V1 in some models. Residual error was modeled as proportional, additive, or combined. Key covariates included body weight, albumin, fecal calprotectin, TNF-α, and FCGR3A genotype. The structural models are standard for monoclonal antibodies, with TMDD models providing a mechanistic basis for concentration-dependent clearance.

---

### Detailed Methodological Analysis

#### Modeling Approach
Sixteen published PopPK models were tested: 4 mono-compartmental, 9 bi-compartmental, 2 TMDD, and 1 PKPD model. Models were identified through systematic literature search (PubMed and Google Scholar, 2000–2025). All models were implemented in R using the ks package.

#### Data Sources
Retrospective data from 34 adult Crohn's disease patients at Toulouse University Hospital. Patients received at least two infliximab administrations with at least one concentration measurement after each. Concentrations above ULOQ were set to 20 mg/L, below LLOQ to 0.3 mg/L. Values outside calibration range were treated as censored.

#### Estimation Methods
Metropolis-Hastings algorithm (MHA) with 10,000 iterations to generate posterior distributions of PK parameters for each patient-model pair with MED ≥ 0.05. The log-likelihood equation was used to compute the posterior.

#### Model Evaluation
Model-patient compatibility was assessed using the Multivariate Exact Discrepancy (MED) method with 100,000 Monte Carlo simulations per patient-model pair. MED scores were interpreted as p-values, with significance at alpha < 5%. Models with high residual error (>40%) were excluded from dose calculations.

#### Covariate Analysis
Missing covariates were imputed using median values to avoid combinatorial explosion. The FCGR3A genotype was treated as binary (wild-type vs. F-carrier), and clearance was divided by 1.16 for F-carriers. Baseline fecal calprotectin (50, 274, 500, 1000 μg/g) and TNF-α (0–38 pM) were manually varied to explore their impact on MED scores. Only TNF-α showed meaningful effects in some patients.

---

### Statistical Rigor Assessment
The MED method is a statistically rigorous approach for assessing model compatibility, using 100,000 simulations per patient-model pair to generate the null distribution. The use of MHA for parameter estimation is appropriate for Bayesian inference. However, the sample size (n=34) is small, and the results may not generalize to other populations (e.g., ulcerative colitis, rheumatoid arthritis). The handling of censored data (LLOQ/ULOQ) is appropriate, but the imputation of missing covariates using median values may mask important variability. The authors acknowledge that clearance was assumed to change discontinuously between administrations, which is physiologically implausible. Sensitivity analyses were limited to a few covariates (FCGR3A, FC, TNF-α), and the impact of other missing covariates (e.g., albumin, antibodies) was not explored.

---

## 📊 Key Findings
No single PopPK model was compatible with all 34 patients. Two models (M4 and B3) fit 91% of patients but were excluded due to high proportional residual error (>40%), which artificially inflated compatibility. Among the remaining 14 models, 29.4% of patients were compatible with all models (green zone), 55.9% with 5–16 models (orange zone), and 14.7% with none (red zone). The mean median dose across all patient-model pairs was 9.25 mg/kg (range: 2.74–23.21 mg/kg), with a mean imprecision of 6.63 mg/kg (range: 0.37–25.69 mg/kg). The highest imprecisions occurred in patients with concentrations below the LLOQ, indicating that censored data increase dose uncertainty. The FCGR3A genotype and baseline fecal calprotectin had negligible impact on model compatibility, while baseline TNF-α improved fit in some patients.

---

## 💡 Clinical & Regulatory Implications
The study provides a framework for model-informed precision dosing of infliximab in clinical practice. For patients whose data are compatible with multiple models (orange zone), clinicians should consider intensified therapeutic drug monitoring to reduce dose uncertainty. For patients in the green zone, any compatible model can be used with confidence. For red-zone patients, standard weight-based dosing per guidelines is recommended. The mean median dose across all patients was 9.25 mg/kg, consistent with standard dosing (5–10 mg/kg), but the range (2.74–23.21 mg/kg) highlights the need for individualization. The high imprecision (up to 25.69 mg/kg) in some patients suggests that model-based dosing should be coupled with frequent concentration monitoring.

---

### Strengths & Limitations

#### Strengths
- Comprehensive evaluation of 16 published PopPK models identified through systematic literature review.
- Novel use of the MED method to assess model-patient compatibility at the individual level.
- Incorporation of censored data (LLOQ/ULOQ) in both MED and dose calculations.
- Use of MHA to propagate parameter uncertainty into dose recommendations.
- Clinically actionable three-tier classification (red/orange/green) for model selection.
- Exploration of key covariates (FCGR3A, FC, TNF-α) to explain model incompatibility.

#### Limitations (Acknowledged by Authors)
- Missing covariates were imputed using median values, which may mask inter-individual variability.
- Censored data (LLOQ/ULOQ) introduced additional uncertainty in clearance estimates.
- Clearance was assumed to change discontinuously between administrations, which is physiologically implausible.
- PK parameters were not stationary; η was allowed to change with covariates, but Ω was assumed constant.
- The target AUC of 2079 mg*day/L is based on limited literature and may not be optimal for all patients.

#### Limitations (Expert Review)
- Small sample size (n=34) limits statistical power and generalizability.
- Only 16 models were tested; other published models may have been missed.
- The MED method, while novel, has not been widely validated; its operating characteristics (e.g., power, false positive rate) are unknown.
- The impact of anti-drug antibodies on PK was not explicitly modeled, though some models may indirectly account for it.
- The study did not assess the clinical outcomes (e.g., remission, adverse events) associated with model-based dosing.

#### Generalizability
The study is limited to adult Crohn's disease patients from a single center (n=34). Results may not generalize to other IBD subtypes (ulcerative colitis), other diseases (rheumatoid arthritis, psoriasis), or pediatric populations. The models tested were developed in diverse populations, but the small sample size limits the power to detect differences.

---

### Key Equations

**Multivariate Exact Discrepancy (MED)**

{% raw %}
$$
MED = P(\text{observed data} \mid \text{model})
$$
{% endraw %}

The Multivariate Exact Discrepancy (MED) is a statistical test that estimates the probability that a patient's observed concentration profile could have been generated by a given PopPK model. It is interpreted like a p-value, with significance set at alpha < 5%.

**Metropolis-Hastings Posterior Distribution**

{% raw %}
$$
P(\theta \mid y) \propto L(y \mid \theta) \cdot \pi(\theta)
$$
{% endraw %}

The Metropolis-Hastings algorithm was used to generate the posterior distribution of PK parameters (especially clearance) for each patient-model pair, using the log-likelihood of the data given the model.

**Dose Calculation from AUC Target**

{% raw %}
$$
\text{Dose} = CL \times \text{AUC}_{\text{target}}
$$
{% endraw %}

The dose required to achieve the target AUC of 2079 mg*day/L was calculated as Dose = CL * AUC_target, where CL is the individual clearance estimate.

---

### Figures & Tables

- **Figure 1**: PRISMA-style flowchart showing the literature search and model selection process, from 42,600 Google Scholar and 309 PubMed results to 15 retained articles (16 models).
  - *Significance*: Documents the systematic and reproducible approach to model identification, ensuring comprehensive coverage of available PopPK models.
- **Figure 2**: Forest plot of median dose and 90% CI for each patient-model pair (first administration), with models color-coded. Shows the variability in dose recommendations across models and patients.
  - *Significance*: Illustrates the key finding that model selection can lead to substantially different dose recommendations, especially for patients with rapid clearance or low concentrations.
- **Table 1**: Summary of the 16 selected models, including model type (mono-, bi-compartmental, TMDD, PKPD), number of patients, covariates, inter-individual variability, residual error, and LLOQ.
  - *Significance*: Provides a comprehensive reference for the structural and statistical characteristics of all tested models, essential for understanding their differences.
- **Table 2**: MED scores for all 34 patients (rows) and 16 models (columns), color-coded (green = good fit, red = poor fit). Shows the three patient blocks (green, orange, red).
  - *Significance*: Central result of the study, demonstrating that no model fits all patients and revealing the three-tier classification that guides clinical decision-making.

---

### Code & Reproducibility Assessment
The R code is available at https://doi.org/10.17632/s86hys6tdn.2

---

### Future Directions
The study raises several important questions for future research. First, how should multiple compatible models be combined (e.g., Bayesian model averaging) to provide a single dose recommendation? Second, can time-varying clearance models (e.g., with inter-occasion variability) better capture the non-stationary PK observed in some patients? Third, what is the optimal sampling strategy to reduce dose imprecision? Fourth, should pharmacodynamic biomarkers (e.g., fecal calprotectin, TNF-α) be integrated into model selection to improve compatibility? Finally, prospective studies are needed to validate the clinical utility of the three-tier classification in improving patient outcomes.

---

### Expert Commentary
This paper addresses a critical but often overlooked issue in model-informed precision dosing: model selection. While the field has focused on developing increasingly complex PopPK models, the practical question of which model to use for a given patient has received little attention. The MED approach is a novel and statistically rigorous method for assessing model-patient compatibility, and the three-tier classification is clinically actionable. However, the small sample size (n=34) and the fact that 14.7% of patients were incompatible with all models raise questions about the generalizability of the findings. The authors' decision to exclude two models with high residual error (>40%) is sound, as such models would yield unreliable predictions. The use of MHA to propagate parameter uncertainty into dose recommendations is a strength, but the assumption that η changes discontinuously between administrations is physiologically questionable. Future work should explore time-varying clearance models and the integration of pharmacodynamic biomarkers to improve model selection.

---

### Bottom Line
This study demonstrates that no single PopPK model fits all IBD patients, and proposes a practical three-tier classification (red/orange/green) to guide model-informed infliximab dosing. For patients in the 'green' zone, any compatible model yields similar dose recommendations; for 'orange' patients, multiple models apply but require careful selection or combination; for 'red' patients, no model fits, and standard dosing should be used. The work underscores the need for therapeutic drug monitoring to refine model selection and improve dose precision, especially in patients with rapid clearance or atypical PK.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-06-30-pharmacokinetic-model-selection-for-personalized-infliximab-dosing-in-ibd/figures/fig_01.png)

![A PRSIMA-style flowchart of Model Selection from the Literature. It illustrates the screening process conducted in PubMed and Google Scholar to identify pharmaco]({{ site.baseurl }}/assets/digests/2026-06-30-pharmacokinetic-model-selection-for-personalized-infliximab-dosing-in-ibd/figures/fig_02.png)