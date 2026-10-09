---
layout: post
title: "Application of an Open-Source Modular Framework for Pharmacokinetic, Pharmacodynamic, and Safety Simulations to Anti-Tuberculosis Drugs"
date: 2026-10-08
authors: "Siccardi M, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70347"
paper_type: popk
tags: [popk, pbpk, regulatory]
excerpt_text: "This tutorial presents a fully open-source, modular framework (OSP Suite + R) that connects high-throughput PBPK screening, mechanistic PBPK models for five anti-TB drugs, a cardiac electrophysiology/QTc module, and a mechanistic TB disease model. Pharmacometricians working in TB drug development or in resource-limited settings should read this to see how regulatory-grade PBPK accuracy (GMFE 1.1–1.4) and integrated efficacy–safety predictions can be achieved without proprietary software."
pdf_path: "/assets/digests/2026-10-08-application-of-an-open-source-modular-framework-for-pharmacokinetic/PMx_Application_of_an_OpenSource_Modular_Fra_20261008.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This tutorial presents a fully open-source, modular framework (OSP Suite + R) that connects high-throughput PBPK screening, mechanistic PBPK models for five anti-TB drugs, a cardiac electrophysiology/QTc module, and a mechanistic TB disease model. Pharmacometricians working in TB drug development or in resource-limited settings should read this to see how regulatory-grade PBPK accuracy (GMFE 1.1–1.4) and integrated efficacy–safety predictions can be achieved without proprietary software.

---

### Executive Summary
Siccardi and colleagues deliver a comprehensive, reproducible, open-source modeling ecosystem for tuberculosis drug development, built entirely on the Open Systems Pharmacology Suite and R. The framework comprises four interoperable layers: (1) a high-throughput PBPK pipeline (ESQhtpbpk R package) that uses QSAR-predicted physicochemical inputs to triage large compound libraries, achieving 38–42% of AUC/Cmax predictions within 2-fold error across 12 anti-TB drugs; (2) mechanistic PBPK models for rifampicin, isoniazid, moxifloxacin, bedaquiline, and moxidectin that reproduce clinical pharmacokinetics with GMFE values of 1.13–1.38, comparable to commercial-platform benchmarks; (3) a cardiac safety module pairing a data-driven QTc model (Gotta framework) with a mechanistic action-potential model (Llopis-Lorente/ORd) that reproduced moxifloxacin QTc prolongation and identified M2-metabolite-driven QTc risk for bedaquiline; and (4) a MoBi reimplementation of the Fors et al. TB disease model, verified against ~50 published scenarios, linking PBPK-predicted tissue concentrations to bacterial killing and sterilization outcomes. The paper's central contribution is demonstrating that open-source tools can deliver regulatory-grade quantitative predictions across the full discovery-to-clinical continuum, with all code and models publicly accessible for independent reproduction and extension.

---

### Scientific Context & Motivation
Tuberculosis treatment requires prolonged multidrug regimens with complex pharmacokinetic, efficacy, and safety trade-offs. Existing PBPK and QSP tools are largely proprietary, fragmenting the modeling continuum: a PBPK model in one environment, a PD model in another, and a safety module in a third, which reduces reproducibility and excludes researchers in high-burden, resource-limited settings. The paper addresses this gap by establishing an integrated, fully open-source framework that connects compound screening, mechanistic PK, pharmacodynamic efficacy, and cardiac safety within a single interoperable architecture. It also tackles the specific pharmacological challenges of TB drugs—rifampicin's CYP induction, isoniazid's NAT2 polymorphism, bedaquiline's long half-life and M2-metabolite-driven QT liability, and moxifloxacin's dual antibacterial/cardiac profile—demonstrating that a unified quantitative platform can support regimen optimization, drug–drug interaction assessment, and regulatory decision-making without reliance on commercial software.

---

## ⚡ Methodological Snapshot
The framework integrates four modeling layers built on the Open Systems Pharmacology Suite (PK-Sim and MoBi) and R. The HT-PBPK layer (ESQhtpbpk R package) automates generic whole-body PBPK model generation using QSAR-predicted physicochemical inputs, enabling batch simulation of large compound libraries. Mechanistic PBPK models for five TB drugs are parameterized with experimental data and qualified against clinical studies (GMFE 1.13–1.38). The cardiac module combines a data-driven QTc model (Gotta framework: hERG IC50 + compound-specific transduction parameter calibrated to clinical exposure-QTc data) with a mechanistic action-potential model (Llopis-Lorente/ORd translated to R, using in vitro ion-channel inhibition data). The TB disease model is a MoBi reimplementation of the Fors et al. model, with modular drug-effect submodules coupled to PBPK-predicted tissue concentrations.

---

## 🏗️ Structural Model Breakdown
HT-PBPK: whole-body PBPK with arterial/venous blood pools and major organ compartments (lung, heart, liver, kidney, gut, spleen, muscle, skin, fat, bone, remaining tissue) as well-stirred compartments connected by organ blood flows and cardiac output; passive tissue distribution via tissue-to-plasma partition coefficients; systemic elimination via linear hepatic, renal, and biliary clearance. Mechanistic PBPK models: compound-specific whole-body models with metabolic pathways, transport processes, and tissue-specific properties; bedaquiline includes the active M2 metabolite; rifampicin includes CYP3A4/CYP2B6 induction; isoniazid includes NAT2 acetylator phenotypes. Cardiac electrophysiology: ORd-based action potential model with ion channel currents (hERG/IKr, iNaL, iCaL, iKs, iNa) and sex-specific parameterization; outputs APD90 in virtual male and female populations. TB disease model: two spatial domains (lung interstitium, granulomatous lesion), each with extracellular and intracellular bacterial populations, macrophages, immune cell migration, and drug effects; tracks wild-type and drug-resistant subpopulations with strain-specific growth and mutation rates; drug effects as modular submodules with concentration-effect relationships per compartment.

---

### Detailed Methodological Analysis

#### Modeling Approach
Four-layer integrated framework: (1) HT-PBPK using ESQhtpbpk R package with PK-Sim generic whole-body PBPK models (well-stirred compartments, standard OSP distribution models, QSAR-predicted physicochemical inputs); (2) mechanistic PBPK models in PK-Sim/MoBi for rifampicin, isoniazid, moxifloxacin, bedaquiline, and moxidectin, parameterized with experimental data and qualified against clinical studies; (3) cardiac safety module with two alternative layers—a data-driven QTc model (Gotta et al. framework: hERG inhibition + PK-PD transduction with compound-specific parameter calibrated to clinical exposure-QTc data) and a mechanistic cardiac electrophysiology model (Llopis-Lorente/ORd action potential model translated from MATLAB to R, using in vitro ion-channel IC50 values); (4) mechanistic TB disease model (MoBi reimplementation of Fors et al.) with modular drug-effect submodules. All implemented in OSP Suite (PK-Sim, MoBi) and R, distributed via public GitHub repositories.

#### Data Sources
HT-PBPK: physicochemical parameters from curated experimental databases supplemented by QSAR predictions; validation against ChEMBL data and 12 anti-TB drugs across over 100 simulations with literature-based study designs. Mechanistic PBPK: rifampicin (9 studies, IV/oral 300–600 mg, DDI-qualified), isoniazid (11 studies, IV/oral 4.75–20 mg/kg and 300–900 mg, acetylator phenotypes), bedaquiline (3 oral studies 200–700 mg, parent + M2 metabolite), moxifloxacin (6 studies IV/oral 60–600 mg), moxidectin (4 oral studies 3–36 mg, fed/fasted). Cardiac: clinical thorough-QT data for moxifloxacin, population PK-QTc data for bedaquiline/M2, in vitro hERG and multi-channel patch-clamp data (moxifloxacin IC50 values for hERG, iNaL, iCaL, iKs). TB disease model: parameterization from Fors et al. published model and ~50 verification scenarios.

#### Estimation Methods
Mechanistic PBPK models were parameterized using literature-derived experimental values with model qualification against observed clinical data using geometric mean fold error (GMFE) as the primary performance metric. The data-driven QTc model used a fixed human system parameter set with a single compound-specific transduction parameter calibrated against clinical exposure-QTc data (non-linear least squares fitting of Hill functions to ion-channel inhibition data as recommended by CiPA). No formal population estimation (e.g., NONMEM FOCE or SAEM) was used; the framework relies on deterministic simulation with literature-based parameterization and qualification against observed data.

#### Model Evaluation
HT-PBPK: predicted-to-observed ratios and fold error (2-fold and 4-fold benchmarks) across over 100 simulations. Mechanistic PBPK: GMFE and AUC fold error across study arms (rifampicin 28 arms, isoniazid 19, moxifloxacin 15, moxidectin 15, bedaquiline 3 studies). Cardiac: calibration against clinical thorough-QT and population PK-QTc data; electrophysiology model validated against CiPA benchmark drug set (dofetilide, quinidine) reproducing published action potential changes. TB disease model: verification against ~50 scenarios from the original Fors et al. C++ model and supplementary material, covering untreated infection, monotherapy, combination regimens, early bactericidal activity, and long-term sterilization trajectories.

#### Covariate Analysis
No formal covariate analysis was performed. Population-level factors were addressed through mechanistic representation: isoniazid NAT2 acetylator phenotypes (fast vs. slow) explicitly modeled; rifampicin CYP3A4/CYP2B6 induction for DDI scenarios; sex-specific ion channel densities and hormonal effects in the cardiac electrophysiology model (male vs. female virtual populations); hypothetical scenarios for hepatic impairment and CYP inhibition effects on bedaquiline exposure. The framework supports population variability simulation as a planned extension.

---

### Statistical Rigor Assessment
The paper's statistical approach is appropriate for a tutorial/framework demonstration but is primarily descriptive rather than inferential. Performance metrics (GMFE, fold error, predicted-to-observed ratios) are standard for PBPK model qualification and are reported transparently across study arms. The HT-PBPK validation uses a modest dataset (12 compounds, >100 simulations) with 2-fold and 4-fold benchmarks, which is consistent with published generic PBPK standards but does not include formal confidence intervals or uncertainty propagation from QSAR inputs. The cardiac QTc results are explicitly framed as calibration performance, not independent validation—an appropriate and honest distinction. The electrophysiology model validation against the CiPA benchmark set provides external reference-point credibility. The TB disease model verification against ~50 Fors et al. scenarios is thorough for a reimplementation. Missing elements include formal sensitivity analyses, parameter identifiability assessment, and uncertainty quantification for integrated framework outputs. The absence of a prospective end-to-end case study with external validation limits the strength of the integrated-framework claims, though this is acknowledged as future work.

---

## 📊 Key Findings
The HT-PBPK pipeline applied to 12 anti-TB drugs across over 100 simulations achieved 38–42% of AUC and Cmax predictions within 2-fold error and 60% (AUC) / 75% (Cmax) within 4-fold error, with median predicted-to-observed ratios of 0.6 (AUC) and 1.3 (Cmax); systematic AUC underestimation occurred for highly lipophilic, poorly soluble, highly protein-bound compounds. The five mechanistic PBPK models achieved GMFE values of 1.13 (bedaquiline AUC) to 1.38 (moxidectin AUC), with rifampicin at 1.28 across 28 study arms including DDI scenarios, isoniazid at 1.23 across acetylator phenotypes, and moxifloxacin at 1.28 across 15 study arms—all within regulatory-acceptable accuracy. The cardiac module reproduced moxifloxacin's concentration-dependent QTc prolongation and bedaquiline's M2-metabolite-driven QTc plateau; the mechanistic electrophysiology model predicted a 35 ms APD90 increase for moxifloxacin at clinical doses (consistent with reported ΔΔQTc of 29.9 ms) and no effect for bedaquiline at therapeutic free concentrations, but a ~14% APD90 increase in males under a hypothetical 500 nM unbound exposure scenario (e.g., hepatic impairment or CYP inhibition). The TB disease model faithfully reproduced the Fors et al. dynamics across ~50 scenarios, including rifampicin's dominant sterilizing effect, moxifloxacin/isoniazid early bactericidal activity differences, and bedaquiline's delayed sustained bacterial reduction.

---

## 💡 Clinical & Regulatory Implications
The framework supports TB drug development across multiple decision points: (1) early compound triage via HT-PBPK exposure predictions relative to pharmacodynamic targets, enabling prioritization before in vivo studies; (2) mechanistic PBPK models that reproduce clinical pharmacokinetics within regulatory-grade accuracy, supporting dose selection, DDI assessment (rifampicin induction scenarios), and special-population predictions (isoniazid acetylator phenotypes); (3) cardiac safety assessment that can characterize QTc risk for single drugs and combinations, including metabolite-driven effects (bedaquiline M2) and risk-enhancing scenarios (hepatic impairment, CYP inhibition), with the mechanistic electrophysiology layer enabling discovery-stage de-risking using only in vitro data; (4) TB disease modeling that translates exposure into bacterial killing and sterilization outcomes, supporting regimen optimization, adherence impact assessment, and resistance emergence evaluation. The framework's open-source nature makes it accessible to researchers and regulators in high-burden, resource-limited settings, potentially supporting regulatory benefit–risk assessments and monitoring algorithm design for QT-prolonging regimens. The moxifloxacin APD90 prediction (35 ms vs. 29.9 ms observed ΔΔQTc) and bedaquiline M2-QTc relationship provide clinically credible anchors for prospective safety simulations.

---

### Strengths & Limitations

#### Strengths
- Fully open-source implementation (OSP Suite, PK-Sim, MoBi, R) with all code, models, and documentation publicly available via GitHub repositories, enabling independent reproduction and extension
- Regulatory-grade mechanistic PBPK accuracy (GMFE 1.13–1.38) across five structurally diverse TB drugs, comparable to commercial-platform benchmarks
- Genuinely integrated architecture: HT-PBPK feeds mechanistic PBPK, which drives both cardiac safety and TB disease modules, creating a connected discovery-to-clinical pipeline
- Dual cardiac safety approach (data-driven QTc + mechanistic action-potential model) provides complementary tools for different development stages and data availability scenarios
- TB disease model verified against ~50 published scenarios from the reference Fors et al. model, with modular drug-effect submodules allowing rapid addition of new compounds
- Explicit handling of clinically relevant complexities: NAT2 acetylator phenotypes, rifampicin DDI, M2 metabolite contribution to QTc, sex-specific repolarization differences
- Practical accessibility for low-resource settings, addressing a real equity gap in TB modeling capacity

#### Limitations (Acknowledged by Authors)
- HT-PBPK accuracy decreases for highly lipophilic, poorly soluble compounds; QSAR-predicted inputs carry inherent uncertainty that propagates into exposure estimates
- Cardiac electrophysiology module focuses primarily on hERG-mediated effects and does not explicitly model all ion channels contributing to arrhythmia risk
- TB disease model parameters for early bactericidal activity are not fully optimized to reproduce quantitative clinical data across all drugs
- QTc model results demonstrate calibration performance, not independent predictive validation
- Persistence mechanisms and lesion/macrophage transport parameters require further refinement based on experimental data

#### Limitations (Expert Review)
- The QTc transduction parameter calibration relies on publicly available clinical data rather than dedicated preclinical-to-clinical scaling, which may limit prospective application to novel compounds lacking clinical QT data
- The mechanistic electrophysiology model's forward predictions for bedaquiline and moxifloxacin use single-point free concentration inputs rather than full concentration-time profiles, potentially missing time-dependent effects
- The TB disease model's immune module is relatively coarse and does not explicitly represent HIV co-infection or other immunosuppression states despite their clinical importance in TB
- No formal uncertainty quantification or sensitivity analysis is presented for the integrated framework outputs; GMFE metrics alone do not capture parameter identifiability or prediction intervals
- The HT-PBPK validation dataset is modest (12 compounds) and the 2-fold accuracy benchmark, while appropriate for triage, limits quantitative dose-selection conclusions
- The paper does not demonstrate a full end-to-end prospective application (e.g., a novel compound taken from QSAR inputs through to efficacy and safety predictions) with external validation

#### Generalizability
The framework's modular, open-source design is broadly generalizable to other TB drugs and to other therapeutic areas with similar PK-PD-safety integration needs. The mechanistic PBPK models achieved consistent accuracy across diverse physicochemical profiles (enzyme inducer, lipophilic long-half-life compound, polymorphic metabolism, fluoroquinolone, macrocyclic lactone), suggesting the approach transfers well to new candidates. However, the HT-PBPK layer's accuracy is compound-class dependent (best for moderate lipophilicity/solubility), and the cardiac module's data-driven QTc layer requires at least one informative clinical exposure-QTc dataset, limiting its prospective use for truly novel compounds. The TB disease model is TB-specific but its modular architecture supports adaptation to other intracellular pathogens.

---

---

### Figures & Tables

- **Figure 1**: Box-whisker plots showing predictive performance of the high-throughput PBPK framework applied to 12 anti-TB compounds using QSAR-derived physicochemical inputs, with predicted-to-observed ratios for AUC and Cmax.
  - *Significance*: Establishes the quantitative benchmark for the HT-PBPK triage tool: 38–42% within 2-fold error and 60–75% within 4-fold, with median ratios of 0.6 (AUC) and 1.3 (Cmax). This defines the applicability domain and expected accuracy for early compound prioritization.
- **Table 1**: Summary of the five mechanistic PBPK models (rifampicin, bedaquiline, isoniazid, moxidectin, moxifloxacin) with open-access repository links, applicability (number of studies, dose ranges, special features), and performance metrics (GMFE and AUC fold error).
  - *Significance*: Provides the core evidence that open-source mechanistic PBPK models achieve regulatory-grade accuracy (GMFE 1.13–1.38) across structurally diverse TB drugs, supporting the framework's credibility for translational and regulatory applications.
- **Figure 2**: Observed and simulated concentration-time profiles for the five mechanistic PBPK models across their respective clinical studies.
  - *Significance*: Visual confirmation of the quantitative performance summarized in Table 1, demonstrating that the models reproduce systemic disposition across diverse dosing regimens, routes, and populations.
- **Figure 3**: Data-driven QTc model predictions: (A) moxifloxacin concentration-dependent QTc prolongation against reported thorough QT data; (B) bedaquiline M2-metabolite concentration-QTc relationship showing rapid increase at low concentrations with plateau at higher concentrations.
  - *Significance*: Demonstrates the QTc layer's ability to capture established compound-specific exposure-QTc relationships, including the metabolite-driven effect for bedaquiline, supporting simulation of alternative dose and interaction scenarios.
- **Figure 4**: Validation of the R implementation of the mechanistic cardiac electrophysiology model against the CiPA benchmark drug set: (A–E) dofetilide-induced APD90 prolongation in male and female virtual subjects using hERG IC50 of 1.47 nM; (F) quinidine-induced repolarization abnormalities in females at free concentration of 1258.8 nM.
  - *Significance*: Confirms the R-translated ORd-based model faithfully reproduces the original publication's action potential changes, establishing credibility for forward predictions with TB drugs.
- **Figure 5**: Forward predictions for TB drugs: (A,B) bedaquiline showing no electrophysiological effect at therapeutic free concentrations but ~14% APD90 increase in males under a hypothetical 500 nM unbound exposure scenario; (C,D) moxifloxacin showing 35 ms APD90 increase at clinical doses versus control.
  - *Significance*: Demonstrates the mechanistic electrophysiology layer's utility for prospective cardiac risk assessment, including identification of risk-enhancing scenarios (hepatic impairment, CYP inhibition) and reproduction of clinically observed QTc effects.
- **Figure 6**: Architecture of the mechanistic TB disease model integrated with whole-body PBPK, showing how PK-Sim-predicted drug concentrations in lung interstitial fluid drive pharmacodynamic effects in the lung interstitium and granulomatous lesion compartments.
  - *Significance*: Illustrates the direct PBPK-to-disease-model coupling that enables physiologically consistent simulation of treatment outcomes from administered dose through tissue pharmacokinetics to bacterial response.
- **Figure 7**: Overview of the TB disease model effect-module simulations showing drug effects across compartments and bacterial populations.
  - *Significance*: Demonstrates the modular drug-effect architecture that allows rapid testing of new compounds or dosing scenarios without altering the underlying disease dynamics.
- **Figure S1**: Workflow overview of the high-throughput PBPK framework (ESQhtpbpk).
  - *Significance*: Provides the step-by-step pipeline structure from physicochemical inputs through model generation, batch simulation, and exposure metric derivation, supporting reproducibility.
- **Figure S2**: Analysis of systematic AUC underestimation for highly lipophilic compounds with low aqueous solubility and low unbound plasma fraction.
  - *Significance*: Defines the applicability boundary of the HT-PBPK tool and informs interpretation of predictions for challenging compound classes.
- **Table S1**: Complete list of HT-PBPK input parameters, their sources (experimental or QSAR-predicted), and predicted outputs.
  - *Significance*: Provides full transparency on parameterization, enabling independent reproduction and assessment of input uncertainty propagation.

---

### Code & Reproducibility Assessment
All components are openly accessible: ESQhtpbpk R package (https://github.com/esqLABS/ESQhtpbpk), mechanistic PBPK models for rifampicin, bedaquiline, isoniazid, moxidectin, and moxifloxacin (individual GitHub repositories cited in Table 1), cardiac electrophysiology resources (https://github.com/esqLABS/Cardiac_Electrophysiology), and the TB disease model (https://github.com/esqLABS/Tuberculosis-model). Worked examples include an anti-TB HT-PBPK tutorial (https://esqlabs.github.io/ESQhtpbpk/articles/Example-with-anti-TB-drugs.html) and a ChEMBL-based prediction accuracy assessment. The paper states that models include evaluation reports, parameter sources, and simulation scripts sufficient for independent reproduction.

---

### Supplementary Materials
Supplementary materials include Figure S1 (HT-PBPK workflow overview), Figure S2 (AUC underestimation analysis for lipophilic compounds), and Table S1 (complete input parameter list with sources). Additional worked examples and prediction accuracy assessments are available in the ESQhtpbpk GitHub repository and online documentation.

---

### Future Directions
Planned extensions include: expanding the mechanistic PBPK library to additional TB compounds; integrating resistance-evolution models to characterize resistance emergence probability and time course under drug selection pressure; adding vaccine-related immune phenotypes to support TB vaccine candidate analysis; coupling to population-PBPK simulation tools for patient-level variability analysis; extending the cardiac module to multi-channel ion data beyond hERG and to combination regimens (e.g., bedaquiline + clofazimine + fluoroquinolones); earlier integration of HT-PBPK-predicted exposure into the cardiac electrophysiology layer; direct coupling of the cardiac and disease models to test whether efficacy-driven dose adjustments shift cardiac risk profiles; refining disease model parameters for early bactericidal activity and persistence mechanisms; and deriving a quantitative relationship between action potential delay and QTc prolongation for further validation.

---

### Expert Commentary
This tutorial represents a significant step toward democratizing model-informed TB drug development. From a senior pharmacometrics perspective, several points merit emphasis. First, the GMFE benchmarks (1.13–1.38) across five mechanistically diverse drugs are genuinely impressive for open-source PBPK and align with what I would expect from commercial platforms—this should reassure regulators and industry that open tools are not a compromise. Second, the dual cardiac safety architecture is thoughtfully designed: the data-driven QTc layer (Gotta framework) is appropriate once clinical exposure-QTc data exist, while the mechanistic action-potential layer (ORd-based) enables earlier de-risking using only in vitro ion-channel data, which is exactly the kind of stage-appropriate modeling the field needs. The moxifloxacin APD90 prediction (35 ms vs. 29.9 ms observed ΔΔQTc) is a particularly compelling validation point. Third, the TB disease model's verification against ~50 Fors et al. scenarios is methodologically sound and provides confidence in the MoBi reimplementation. However, I would caution that the paper's integrated framework is demonstrated component-by-component rather than as a single end-to-end prospective case study; the true test will be application to a novel compound with external validation. The HT-PBPK 2-fold accuracy, while appropriate for triage, should not be over-interpreted for dose selection. The open-source commitment is commendable and addresses a real equity gap—TB burden is highest where commercial software access is most constrained. I would encourage the authors to add formal uncertainty quantification and sensitivity analyses in future iterations, as GMFE alone does not capture prediction intervals or parameter identifiability. Overall, this is a valuable, well-documented resource that should accelerate model-informed TB drug development globally.

---

### Bottom Line
For practicing pharmacometricians, this paper demonstrates that a fully open-source stack (PK-Sim/MoBi + R) can deliver regulatory-grade mechanistic PBPK (GMFE 1.1–1.4) and integrated efficacy–safety predictions for TB drug development, eliminating the need for proprietary platforms. The practical takeaway is threefold: (1) the ESQhtpbpk R package provides a credible, scalable HT-PBPK triage tool for early compound prioritization, with the caveat that 2-fold accuracy is the realistic benchmark; (2) the cardiac module offers two complementary paths—a data-driven QTc model requiring one informative clinical dataset and a mechanistic action-potential model usable with only in vitro ion-channel data—enabling stage-appropriate cardiac risk assessment; and (3) the MoBi TB disease model, verified against the Fors et al. reference, provides a mechanistically grounded efficacy endpoint that can be coupled to PBPK exposure predictions. The framework is immediately usable, publicly documented, and well-suited for adoption in resource-limited settings, though users should respect the stated applicability domains (HT-PBPK for triage, not regulatory dose selection; QTc results as calibration, not validation).

---

---

## 📊 Figures

![Predictive performance of the high-throughput PBPK framework applied to anti-tuberculosis compounds using QSAR-derived physicochemical inputs. Box-whisker plots]({{ site.baseurl }}/assets/digests/2026-10-08-application-of-an-open-source-modular-framework-for-pharmacokinetic/figures/fig_01.png)

![Architecture of the mechanistic TB disease model integrated with whole-body PBPK. Drug concentrations predicted by PK-Sim in lung interstitial fluid drive pharma]({{ site.baseurl }}/assets/digests/2026-10-08-application-of-an-open-source-modular-framework-for-pharmacokinetic/figures/fig_02.jpg)