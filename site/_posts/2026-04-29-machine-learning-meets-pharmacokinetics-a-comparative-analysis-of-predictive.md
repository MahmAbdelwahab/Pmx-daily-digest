---
layout: post
title: "Machine Learning Meets Pharmacokinetics: A Comparative Analysis of Predictive Models for Plasma Concentration-Time Profiles"
date: 2026-04-29
authors: "Jost F, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70226"
paper_type: generic
tags: [generic, pbpk, qsp, regulatory, machine-learning]
excerpt_text: "This study systematically compares five machine learning approaches for predicting rat plasma concentration-time profiles from molecular structures using a consistent dataset of 696 compounds. Physics-informed neural networks (CMT-PINN) achieved the highest accuracy ($R^2_{\\log}=0.854$, 65.9% within twofold error), outperforming methods that rely on predicted PK parameters. Training directly on concentration-time profiles proved more effective than using derived parameters, especially with limited data."
retroactively_classified: true
---

### Quick Take
This study systematically compares five machine learning approaches for predicting rat plasma concentration-time profiles from molecular structures using a consistent dataset of 696 compounds. Physics-informed neural networks (CMT-PINN) achieved the highest accuracy ($R^2_{\log}=0.854$, 65.9% within twofold error), outperforming methods that rely on predicted PK parameters. Training directly on concentration-time profiles proved more effective than using derived parameters, especially with limited data.

---

### Executive Summary
The authors benchmarked five distinct ML frameworks—NCA-ML, PBPK-ML, CMT-ML, CMT-PINN, and PURE-ML—for predicting in vivo rat plasma PK profiles from molecular structures, using a curated dataset of 739 study arms (696 molecules) with consistent data splitting and evaluation metrics. CMT-PINN, a physics-informed neural network trained directly on concentration-time profiles, achieved the best predictive performance ($R^2_{\log}=0.854$, $Spearman=0.933$, 65.9% within twofold error), closely followed by PURE-ML (XGBoost). Methods that first predicted PK parameters (NCA-ML, CMT-ML, PBPK-ML) performed substantially worse, highlighting the advantage of end-to-end learning on raw profiles. The study provides a standardized evaluation framework and demonstrates the feasibility of in silico PK prediction for early drug discovery, with potential to reduce animal studies and accelerate compound selection.

---

### Scientific Context & Motivation
Predicting pharmacokinetic profiles from molecular structure is a key goal in drug discovery, but existing ML approaches differ widely in methodology, datasets, and evaluation metrics, making direct comparisons impossible. This study addresses the lack of a standardized benchmark by evaluating five representative methods—ranging from hybrid mechanistic-ML to pure ML—on the same curated in vivo rat dataset, using identical data splits and a comprehensive set of performance metrics. The work fills a critical gap by enabling objective assessment of methodological choices and identifying the most promising strategies for early-stage PK prediction.

---

## ⚡ Methodological Snapshot
The study compares five ML approaches for predicting rat plasma PK profiles from molecular structures. NCA-ML uses a graph convolutional neural network (GCNN) to predict non-compartmental analysis parameters ($V_{ss}$, $CL$), which are then fed into a one-compartment PK model to generate profiles. CMT-ML similarly uses a GCNN to predict parameters of one-, two-, or three-compartment models ($V_1$–$V_3$, $CL_1$–$CL_3$) selected by AIC, then simulates profiles. CMT-PINN replaces the separate parameter prediction step with a physics-informed neural network that learns the compartmental model parameters directly from concentration-time data, using the ODE as a physical constraint. PURE-ML uses XGBoost to predict concentration values at specific time points, using predicted NCA parameters and dose as inputs. PBPK-ML predicts physicochemical and ADME properties ($\log D$, $pK_a$, microsomal stability, etc.) via internal ML models and uses them to parameterize a whole-body PBPK model in PK-Sim, simulating profiles without further optimization.

All methods were trained and evaluated on the same curated dataset of 739 rat IV study arms (696 molecules, 14,155 data points), split 80/10/10 by chemical diversity (MinMax picking). Performance was assessed using multiple metrics: $R^2$ (on log-transformed data), Spearman correlation, MAPE, MDAPE, MFCE, GMFE, and percentage of predictions within twofold/threefold error. The CMT-PINN approach achieved the best overall performance, followed by PURE-ML, while parameter-based methods (NCA-ML, CMT-ML, PBPK-ML) showed substantially lower accuracy.

---

## 🏗️ Structural Model Breakdown
Not extracted

---

### Detailed Methodological Analysis

#### Modeling Approach
Not extracted

#### Data Sources
Not extracted

#### Estimation Methods
Not extracted

#### Model Evaluation
Not extracted

#### Covariate Analysis
Not extracted

---

### Statistical Rigor Assessment
Not extracted

---

## 💡 Clinical & Regulatory Implications
Not extracted

---

## 📊 Key Findings
['CMT-PINN (physics-informed neural network) achieved the highest predictive accuracy across all metrics: $R^2_{\log}=0.854$, $Spearman=0.933$, 65.9% of predictions within twofold error, and median $GMFE=2.10$.', 'PURE-ML (XGBoost) was the second best ($R^2_{\log}=0.789$, 61.0% within twofold error), demonstrating that pure ML can be competitive when trained directly on profiles.', 'Methods that first predict PK parameters (NCA-ML, CMT-ML, PBPK-ML) performed significantly worse ($R^2_{\log}$ 0.284–0.471, <28% within twofold error), indicating that parameter prediction introduces error propagation.', 'Training directly on concentration-time profiles (CMT-PINN, PURE-ML) consistently outperformed training on derived parameters, especially with the relatively small dataset (696 molecules).', 'PBPK-ML performance was highly variable ($R^2_{\log}$ 0.284–0.639) and depended on the quality of predicted physicochemical and ADME properties, without reaching the accuracy of profile-trained methods.']

---

### Strengths & Limitations

#### Strengths
- Systematic, head-to-head comparison of five diverse ML approaches under identical conditions (same dataset, split, metrics).
- Use of a large, curated in vivo rat PK dataset (739 study arms, 14,155 data points) from a single source, reducing inter-lab variability.
- Inclusion of physics-informed neural networks (PINNs), a relatively novel approach in PK prediction, and comparison with established methods.
- Comprehensive evaluation using multiple metrics ($R^2$, Spearman, MAPE, GMFE, fold-error ranges) and PK-specific endpoints ($AUC$, $C_0$, $C_{min}$).
- Clear demonstration that training on raw concentration-time profiles outperforms parameter-based methods, with practical implications for model design.

#### Limitations (Acknowledged by Authors)
- Dataset limited to intravenous administration in rats; no oral or other routes, and no human data.
- Relatively small chemical space (696 molecules) from a single company, limiting generalizability.
- PBPK-ML approach depends on predicted in vitro properties, which may have their own errors and were not optimized.
- No uncertainty quantification or applicability domain assessment for the predictions.
- CMT-ML and NCA-ML required parameter estimation steps that may introduce bias and reduce the number of usable compounds (e.g., CMT-ML excluded compounds with high coefficient of variation).

#### Limitations (Expert Review)
- The dataset split (80/10/10) was based on chemical diversity but not temporal order; a temporal split analysis was only in supplementary and showed similar trends, but real-world deployment would face time-dependent data drift.
- The PINN architecture (3 layers, 128–1024 nodes) was optimized for this dataset; it is unclear if the same architecture would generalize to larger or more diverse datasets.
- No external validation on public datasets (e.g., from literature or other pharma companies) was performed, limiting assessment of cross-lab reproducibility.
- The study did not investigate the impact of different molecular featurizations (e.g., fingerprints vs. graph-based) on performance, as all methods used Morgan fingerprints or SMILES-derived graphs.
- The PURE-ML method used predicted NCA parameters as inputs, which may have introduced a dependency on the NCA-ML predictions; a fully independent pure ML approach (e.g., using only molecular features) was not tested.

#### Generalizability
The findings are directly applicable to rat IV PK prediction within a similar chemical space (Sanofi discovery compounds). Extrapolation to other species, routes of administration, or broader chemical libraries requires further validation. The methodological insight that profile-trained models outperform parameter-based models is likely general, but the absolute performance numbers may vary with dataset size and diversity.

---

---

---

### Code & Reproducibility Assessment
Code and scripts for generating figures and tables are available on GitHub at https://github.com/Sanofi-Public/PKpredictionRat. The repository includes implementations for data preparation, model training (GCNN, XGBoost, PINN), and evaluation. However, the full dataset is not publicly available due to proprietary constraints.

---

### Supplementary Materials
Supplementary materials include Tables S1–S6 (parameter distributions, model selection criteria, additional performance metrics) and Figures S1–S2 (compartmental model schematic, temporal split analysis). These provide further detail on data characteristics, model fitting quality, and robustness checks.

---

### Future Directions
The authors outline several key extensions: (1) uncertainty quantification to inform decision confidence; (2) definition of applicability domains to avoid extrapolation; (3) user-friendly end-to-end tools for medicinal chemists; (4) explainability via SHAP analysis to link structural features to PK parameters; (5) adoption of FAIR principles for datasets and models; (6) extension to oral administration and biologics (e.g., using amino acid sequences). Additionally, exploring universal differential equations and neural ODEs could capture nonlinear kinetics.

---

### Expert Commentary
This study provides a much-needed standardized benchmark for PK prediction methods, confirming that physics-informed neural networks are a powerful tool for learning PK profiles directly from structure. The clear advantage of profile-trained methods over parameter-based approaches is a key takeaway for the field. However, the reliance on a single proprietary dataset limits the generalizability of the absolute performance numbers. The community would benefit from similar comparisons on public datasets (e.g., from the literature or initiatives like the Translational PK/PD Repository). The inclusion of uncertainty quantification and applicability domains is critical for real-world deployment, and the authors rightly highlight these as next steps.

---

### Bottom Line
For predicting rat IV plasma PK profiles from molecular structure, physics-informed neural networks (CMT-PINN) trained directly on concentration-time data offer the best accuracy among current methods, outperforming approaches that rely on intermediate parameter prediction. Practitioners should prioritize end-to-end learning on raw profiles and consider PINNs as a strong candidate for in silico PK screening in early drug discovery. However, the limited dataset size and single-source nature warrant cautious extrapolation, and future work should incorporate uncertainty quantification and broader validation.

---

---
### Fact-Check Summary

**Total claims:** 31  
**Verdict distribution:** SUPPORTED: 10, UNSUPPORTED: 1, UNVERIFIABLE: 20  
**Overall action:** WARN

#### Flagged Claims

- ❓ **[UNSUPPORTED]** The study did not investigate the impact of different molecular featurizations (e.g., fingerprints vs. graph-based) on

---

## 📊 Figures

![FIGURE 1: Schematic representation of the five tested approaches for predicting plasma pharmacokinetic profiles.]({{ site.baseurl }}/assets/digests/2026-04-29-machine-learning-meets-pharmacokinetics-a-comparative-analysis-of-predictive/figures/fig_01.png)

![FIGURE 3: Predicted concentration-time profiles versus observed mean concentration-time data for good ($GMFE = 1.1, 1.4$), moderate ($GMFE = 2.3, 6.2$), and bad ($GMFE = 6.9, 6$]({{ site.baseurl }}/assets/digests/2026-04-29-machine-learning-meets-pharmacokinetics-a-comparative-analysis-of-predictive/figures/fig_02.png)