---
layout: post
title: "Model Ensembling and Machine Learning Approaches to Predict the First Dose of Amoxicillin in Intensive Care"
date: 2026-07-16
authors: "Leiwolf M, Grégoire N, Marchand S, Folliard B, Kone O, Woillard JB, Couet W, Aranzana-Climent V"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025"
doi: "10.1002/psp4.70000"
paper_type: popk
tags: [popk, machine-learning]
excerpt_text: "This paper systematically compares 18 a priori dose prediction methods for amoxicillin in ICU patients, including novel model ensembling (FAMD, RT-informed) and ML approaches. Pharmacometricians will find the head-to-head comparison of ensembling vs. ML vs. single-model methods valuable, along with the openMIPD R package for applying these methods to other drugs. Key takeaway: MIPD outperforms empirical dosing, but performance drops on clinical data, and ML methods are more sensitive to training data characteristics than PopPK ensembling."
pdf_path: "/assets/digests/2026-07-16-model-ensembling-and-machine-learning-approaches-to-predict-the-first-dose-of/PMx_Model_Ensembling_and_Machine_Learning_Ap_20260716.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper systematically compares 18 a priori dose prediction methods for amoxicillin in ICU patients, including novel model ensembling (FAMD, RT-informed) and ML approaches. Pharmacometricians will find the head-to-head comparison of ensembling vs. ML vs. single-model methods valuable, along with the openMIPD R package for applying these methods to other drugs. Key takeaway: MIPD outperforms empirical dosing, but performance drops on clinical data, and ML methods are more sensitive to training data characteristics than PopPK ensembling.

---

### Executive Summary
This study systematically compares 18 a priori dose prediction methods for amoxicillin in ICU patients, including standard dosing, nomograms, single PopPK models, five model ensembling approaches (including two novel methods: FAMD and RT-informed ensembling), and five ML algorithms (XGBoost, RF, KNN, SVM, stacking). Using simulated data from four published PopPK models and external validation on 121 clinical observations, the authors demonstrate that MIPD methods generally outperform empirical dosing. On simulated data, ensembling (24–40% correct) and ML (36–39%) exceeded single-model approaches (17–32%). On clinical data, performance dropped, with FAMD achieving the highest continuous infusion target attainment (47%). The study highlights the trade-offs between mechanistic interpretability (PopPK ensembling) and data-driven flexibility (ML), and provides an R package (openMIPD) to facilitate broader application.

---

### Scientific Context & Motivation
A priori MIPD (predicting the first dose based solely on covariates) is clinically important for faster target attainment in ICU patients, where delayed effective therapy increases mortality risk. However, selecting among multiple published PopPK models is challenging because models can give vastly different predictions for the same patient (e.g., vancomycin PTA ranging 9–94%). Previous work by Agema et al. and van Os et al. showed that model ensembling outperforms single-model selection for vancomycin and imatinib, but no single ensembling method was consistently best. This study fills the gap by systematically comparing all available a priori MIPD approaches (ensembling, ML, single-model, empirical) in a single case study (amoxicillin in ICU), developing two novel ensembling methods (FAMD and RT-informed), and providing an R package for broader application.

---

## ⚡ Methodological Snapshot
The study uses a simulation-based training framework: 2500 virtual patients are generated from four published amoxicillin PopPK models, with covariates and dosing regimens matching each model's original development cohort. True trough concentrations ($C_{ind}$) are simulated using individual predictions (IPRED) without residual error. The target dose ($Dose_{target}$) is calculated by linear extrapolation to achieve $60$ $mg/L$. Eighteen methods are compared: empirical, single-model, five PopPK ensembling (including two novel: FAMD and RT-informed), and five ML algorithms. FAMD assigns model weights based on covariate similarity to original model cohorts using principal components. RT-informed ensembling uses a regression tree to predict the $\log$ of the individual prediction/observation ratio. ML methods (XGBoost, RF, KNN, SVM) directly predict $Dose_{pred}$ from covariates and dosing scheme. All methods are evaluated on a held-out simulated test set (24% of data) and externally validated on 121 clinical observations without retraining.

---

## 🏗️ Structural Model Breakdown
The four PopPK models share a two-compartment structure with linear elimination, but differ in covariate parameterizations: Carlier includes $CRCL$ on $CL$ and $WT$ on $V_1$; Fournier includes $CRCL$ on $CL$ and $WT$ on $V_1$ and $V_2$; Mellon has no covariates; Rambaud (originally nonparametric, converted to parametric) includes $WT$ on $CL$ and $V_1$. The meta-model developed from simulated data also uses two compartments with linear elimination, interindividual variability on all parameters, proportional residual error, and power-model covariates ($CREAT$ on $CL$, $WT$ on $CL$).

---

### Detailed Methodological Analysis

#### Modeling Approach
Eighteen methods compared: (1) empirical: standard dose ($200$ $mg/kg$), nomogram; (2) single-model: Carlier, Fournier, Mellon, Rambaud; (3) meta-model; (4) PopPK ensembling: uninformed (equal weights), WME, CT-informed, RT-informed (novel), FAMD (novel); (5) ML: XGBoost, RF, KNN, SVM, stacking (Lasso); (6) method ensembling (regression tree combining all methods).

#### Data Sources
Simulated data: 2500 virtual subjects (625 per model) generated from four published PopPK models: Carlier (ICU patients), Fournier (ICU burn patients), Mellon (obese healthy subjects), Rambaud (ICU infective endocarditis, continuous infusion). Clinical data: 121 observations from 74 patients at two French ICUs (84 continuous infusion, 37 intermittent infusion).

#### Estimation Methods
PopPK models were implemented in mrgsolve v1.5.2. ML methods (XGBoost, RF, KNN, SVM) were trained using standard R packages. No Bayesian or FOCE estimation was used; individual predictions (IPRED) were simulated directly from the PopPK models without residual error.

#### Model Evaluation
Primary metric: proportion of subjects with predicted dose ($Dose_{pred}$) within the target range ($Dose_{inf}$ to $Dose_{sup}$), corresponding to trough concentrations of $40$–$80$ $mg/L$. External validation on clinical data without retraining. Sensitivity analyses: model inclusion/exclusion, dosing regimen variation, sample size (100–3000 subjects).

#### Covariate Analysis
Covariates included in the four PopPK models: $CREAT$, $WT$, age, BMI, OBESE (binary), ICU status, burn status, and infusion type (intermittent vs. continuous). For FAMD, seven covariates were reduced to five principal components; ICU status, $WT$, and OBESE contributed most. For RF and XGBoost, impurity-based importance identified $CREAT$, $WT$, age, and number of daily administrations as most influential. WME used eight covariates to define subgroups, with continuous infusion having the weakest influence ($0.7$ vs. ~$0.85$).

---

### Statistical Rigor Assessment
The study uses a well-designed simulation framework with 2500 subjects (625 per model) and a 76:24 train/test split, confirmed non-different by ANOVA ($p=0.05$). Sensitivity analyses are comprehensive: model inclusion/exclusion, dosing regimen variation, and sample size (100–3000). However, the primary metric (binary target attainment) discards error magnitude information. The clinical dataset is small ($n=121$) and heterogeneous, with potential documentation errors (alternating amoxicillin and amoxicillin-clavulanic acid, inconsistent sampling times). No confidence intervals or uncertainty quantification are provided for the performance estimates. The authors appropriately note that simulation-based training creates circular dependency (models assessed against their own assumptions), likely overestimating performance on simulated data.

---

## 📊 Key Findings
On simulated data, all MIPD methods (24–40% correct) outperformed standard dosing (16%) and the nomogram (22%). Among single models, Fournier performed best (32%) and Rambaud worst (17%). Novel ensembling methods (FAMD: 40%, RT-informed: 39%) exceeded the best single model, while WME (24%) and CT-informed (28%) did not. ML methods (XGBoost: 39%, RF: 39%, KNN: 36%, SVM: 36%) matched ensembling performance. On full clinical data, performance dropped: standard dosing (27%), nomogram (30%), Carlier single model (36%), FAMD (36%), RT-informed (35%), XGBoost (33%), RF (12%). On continuous infusion clinical data, FAMD achieved the highest target attainment (47%). Sensitivity analyses revealed that ML methods are highly sensitive to dosing regimen mismatch, while PopPK ensembling methods are more robust. Performance plateaued at $\sim 300$ training subjects.

---

## 💡 Clinical & Regulatory Implications
A priori MIPD methods can improve first-dose target attainment for amoxicillin in ICU patients compared to standard weight-based dosing ($200$ $mg/kg$, 16% correct) and nomograms (22% correct). On continuous infusion clinical data, FAMD achieved 47% correct predictions vs. 27% for standard dosing. However, no method exceeded 50% correct predictions on the full clinical dataset, underscoring that a priori MIPD should complement, not replace, TDM and a posteriori dose adjustments. The openMIPD R package enables clinicians to apply these methods to other drugs, but regulatory endorsement would require prospective validation in representative ICU populations.

---

### Strengths & Limitations

#### Strengths
- Systematic comparison of 18 methods in a single case study, enabling direct head-to-head comparison.
- Novel ensembling methods (FAMD, RT-informed) that address limitations of existing approaches.
- Comprehensive sensitivity analyses (model inclusion, dosing regimen, sample size).
- External validation on clinical data without retraining, providing realistic performance estimates.
- Open-source R package (openMIPD) to facilitate application to other drugs.
- Clear identification of ML limitations (dosing regimen sensitivity, performance drop on clinical data).

#### Limitations (Acknowledged by Authors)
- Simulation-based training creates circular dependency: models assessed against their own assumptions, likely overestimating performance.
- Clinical dataset is small ($n=121$) with potential documentation errors (alternating amoxicillin and amoxicillin-clavulanic acid, inconsistent sampling times).
- Binary target attainment metric discards error magnitude information.
- Only four amoxicillin models available, limiting the potential benefits of ensembling.
- ML methods are sensitive to dosing regimen mismatch and may capture spurious correlations.
- A priori MIPD does not eliminate the need for TDM and a posteriori dose adjustments.

#### Limitations (Expert Review)
- No confidence intervals or uncertainty quantification for performance estimates.
- The meta-model approach (two-compartment, linear elimination) is simplistic and may not capture the structural differences between the four source models.
- Rambaud model was converted from nonparametric to parametric, potentially introducing approximation errors.
- Clinical data treated each observation as independent, ignoring within-patient correlation.
- No assessment of clinical outcomes (e.g., clinical cure, mortality) only concentration-based surrogate endpoints.
- The method ensembling approach (regression tree combining all methods) defaulted to XGBoost for all subjects, suggesting limited added value.

#### Generalizability
Generalizability is limited by the small number of available amoxicillin models (4), the narrow clinical dataset (74 patients, 2 centers), and the simulation-based training. The authors acknowledge that ensembling benefits may be more pronounced for drugs with more models. The openMIPD R package facilitates application to other molecules, but each new drug would require its own validation.

---

### Key Equations

**Target Dose Calculation**

{% raw %}
$$
\text{Dose}_{\text{target}} = \frac{\text{Dose}_{\text{adm}}}{C_{\text{ind}}} \times 60
$$
{% endraw %}

Linear extrapolation to calculate the target dose that would yield a trough concentration of $60$ $mg/L$, assuming linear PK.

**Predicted Dose from Ensembled Concentration**

{% raw %}
$$
\text{Dose}_{\text{pred}} = \frac{\text{Dose}_{\text{adm}}}{C_{\text{pred}}} \times 60
$$
{% endraw %}

Predicted dose based on ensembled predicted concentration, used for all PopPK-based methods.

**Target Dose Range**

{% raw %}
$$
\text{Dose}_{\text{inf}} = \frac{\text{Dose}_{\text{adm}}}{C_{\text{ind}}} \times 40,   \text{Dose}_{\text{sup}} = \frac{\text{Dose}_{\text{adm}}}{C_{\text{ind}}} \times 80
$$
{% endraw %}

Definition of correct prediction: predicted dose falls within the range that yields trough concentrations between $40$ and $80$ $mg/L$.

---

### Figures & Tables

- **Figure 1**: Flow chart of the methodology: simulation, training/test split, method application, and evaluation.
  - *Significance*: Provides a clear overview of the study design and workflow.
- **Figure 2**: Distributions of serum creatinine, body weight, BMI, and age across simulated cohorts and clinical data.
  - *Significance*: Illustrates covariate differences between model development cohorts and the clinical dataset, highlighting generalizability challenges.
- **Figure 3**: Target attainment (percentage correct predictions) for all 18 methods on simulated test data, full clinical data, and continuous infusion clinical subset.
  - *Significance*: Primary performance comparison figure; shows MIPD superiority over empirical methods and performance drop on clinical data.
- **Figure 4**: Dose-normalized trough concentrations predicted by each model vs. ground truth for simulated subjects, stratified by cohort.
  - *Significance*: Reveals systematic biases (e.g., Rambaud underpredicts for intermittent infusion) and variability differences.
- **Figure 5**: Average model weights assigned by ensembling methods across patient strata.
  - *Significance*: Explains why RT-informed ensembling outperforms WME: it effectively downweights biased models (Rambaud, Mellon) for inappropriate cohorts.
- **Figure 6**: Dose-normalized predicted vs. observed concentrations for clinical data, stratified by infusion type.
  - *Significance*: Shows systematic underprediction for intermittent infusion, raising data quality concerns and justifying focus on continuous infusion subset.
- **Figures S11 and S12**: Covariate distributions and principal component analysis for FAMD.
  - *Significance*: Supporting figures showing that ICU status, WT, and OBESE are the most influential covariates in FAMD.
- **Figures S15 and S16**: Subgroup influence for WME and impurity-based feature importance for RF and XGBoost.
  - *Significance*: Highlights that CREAT, WT, age, and number of daily administrations are key predictors for ML methods.
- **Tables S3–S6 and Figures S19–S20**: Sensitivity analysis results for model inclusion, dosing regimen, and sample size.
  - *Significance*: Demonstrates that ML methods are more sensitive to training data characteristics than PopPK ensembling, and performance plateaus at ~300 subjects.

---

### Code & Reproducibility Assessment
R code for reproducing results based on simulated data is available at https://inserm-u1070-phar2.github.io/amoxicillinOpenMIPDpaper/. The openMIPD R package is available at https://github.com/INSERM-U1070-PHAR2/openMIPD.

---

### Supplementary Materials
Supporting Information includes detailed method descriptions, covariate distributions (Table S1), dosing regimens (Table S2), sensitivity analysis results (Tables S3–S6), FAMD principal component analysis (Figures S11–S12), WME subgroup influence (Figure S15), ML feature importance (Figure S16), and sample size sensitivity (Figures S19–S20). R code is available online.

---

### Future Directions
The authors identify several key next steps: (1) evaluate these methods on larger, higher-quality clinical datasets with accurate dosing and sampling records; (2) extend the comparison to drugs with more published PopPK models (e.g., vancomycin, tacrolimus) where ensembling benefits may be more pronounced; (3) integrate a priori MIPD into a continuous learning framework that updates model weights as new clinical data accumulate; (4) define standardized performance metrics and evaluation standards for regulatory acceptance of a priori MIPD methods; and (5) prospectively validate the best-performing methods (e.g., FAMD, XGBoost) in randomized clinical trials to demonstrate improved clinical outcomes.

---

### Expert Commentary
This is a methodologically rigorous head-to-head comparison that addresses a critical gap: how to select among multiple PopPK models for a priori dosing. The development of FAMD is particularly clever—it leverages covariate similarity to model development cohorts rather than relying on performance metrics that may be circular when training on simulated data. The sensitivity analyses are commendable, especially the demonstration that ML methods are highly sensitive to dosing regimen mismatch (e.g., training on intermittent data fails for continuous infusion). This is a key teaching point: ML captures statistical associations, not causal PK relationships. The drop in ML performance from simulated to clinical data (e.g., RF from 39% to 12%) is a sobering reminder that simulation-based training can overestimate real-world performance. The field should take note: a priori MIPD is promising but not yet ready for prime time without rigorous external validation. The openMIPD package is a valuable contribution that will accelerate method comparison for other drugs.

---

### Bottom Line
For a priori amoxicillin dosing in ICU patients, model ensembling (especially FAMD and RT-informed) and ML methods (XGBoost, RF) outperform standard dosing and single-model approaches on simulated data, but performance drops on clinical data due to model misspecification and limited covariate explanatory power. FAMD showed the best continuous infusion performance (47% correct). The openMIPD R package facilitates application to other drugs, but external validation on high-quality clinical datasets remains essential before routine use.

---

---

## 📊 Figures

![Flow chart of the methodology: First, covariates of virtual subjects are simulated. Thentrueconcentrations (individual predictions—Cind) are simulated with each]({{ site.baseurl }}/assets/digests/2026-07-16-model-ensembling-and-machine-learning-approaches-to-predict-the-first-dose-of/figures/fig_01.png)

![Distribution of serum creatinine (a), body weight (b), body mass index (c), and age (d) in the simulated training datasets corresponding to the Carlier, Fournier]({{ site.baseurl }}/assets/digests/2026-07-16-model-ensembling-and-machine-learning-approaches-to-predict-the-first-dose-of/figures/fig_02.png)

![Target attainment across methods on simulated test data, clinical data, and patients in the clinical set receiving continuous infusion (ci) expressed as the perc]({{ site.baseurl }}/assets/digests/2026-07-16-model-ensembling-and-machine-learning-approaches-to-predict-the-first-dose-of/figures/fig_03.png)

![Cmin_pred(Carlier, Fournier, Mellon, Rambaud) and ground truth trough concentrations (mg/L) normalized by the dose (g) for simulated subjects. To ensure comparab]({{ site.baseurl }}/assets/digests/2026-07-16-model-ensembling-and-machine-learning-approaches-to-predict-the-first-dose-of/figures/fig_04.png)