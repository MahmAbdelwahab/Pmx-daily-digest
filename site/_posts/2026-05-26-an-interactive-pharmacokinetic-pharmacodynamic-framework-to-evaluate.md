---
layout: post
title: "An Interactive Pharmacokinetic-Pharmacodynamic Framework to Evaluate Bedaquiline Dose Modifications in Adults With Tuberculosis"
date: 2026-05-26
authors: "Yu-Jou Lin, Frances Okibedi, Mats O. Karlsson, Elin M. Svensson"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70264"
paper_type: popk
tags: [popk, qsp, dose-response, regulatory]
excerpt_text: "This study presents an interactive R Shiny simulation tool that integrates four pharmacometric models to evaluate bedaquiline dosing strategies in adults with tuberculosis. It demonstrates that a standard-loading once-daily regimen ($400$ mg daily for $2$ weeks, then $100$ mg daily) achieves comparable early efficacy and safety to the registered thrice-weekly dosing, while outperforming the ZeNix once-daily regimen in early sputum culture conversion. The open-source app enables clinicians and researchers to explore dosing modifications and treatment interruption management without requiring programming expertise."
pdf_path: "/assets/digests/2026-05-26-an-interactive-pharmacokinetic-pharmacodynamic-framework-to-evaluate/PMx_An_Interactive_PharmacokineticPharmacody_20260526.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study presents an interactive R Shiny simulation tool that integrates four pharmacometric models to evaluate bedaquiline dosing strategies in adults with tuberculosis. It demonstrates that a standard-loading once-daily regimen ($400$ mg daily for $2$ weeks, then $100$ mg daily) achieves comparable early efficacy and safety to the registered thrice-weekly dosing, while outperforming the ZeNix once-daily regimen in early sputum culture conversion. The open-source app enables clinicians and researchers to explore dosing modifications and treatment interruption management without requiring programming expertise.

---

### Executive Summary
Lin et al. developed a comprehensive dose-exposure-response-outcome framework for bedaquiline, implemented as an interactive Shiny application. The framework links a population PK model of bedaquiline and its M2 metabolite to models of sputum culture conversion (efficacy), QTc prolongation (safety), and long-term treatment outcomes. Using a virtual population of $8340$ individuals derived from three clinical trials, the authors compared the registered thrice-weekly regimen with two once-daily strategies: the ZeNix regimen ($200$ mg daily for $8$ weeks, then $100$ mg daily) and a standard-loading once-daily regimen ($400$ mg daily for $2$ weeks, then $100$ mg daily). Simulations showed that the ZeNix regimen led to $11\%$ fewer negative cultures at $2$ weeks and $5.8\%$ fewer conversions at $8$ weeks compared to the other regimens, while QTcF intervals remained below $500$ ms for all strategies. The app also successfully guided reloading doses after treatment interruption. This work provides a powerful, accessible tool for dose optimization and supports the shift toward simpler, adherence-friendly once-daily bedaquiline dosing with a loading dose.

---

### Scientific Context & Motivation
Bedaquiline is a cornerstone of MDR-TB treatment, but its registered dosing schedule ($2$-week daily loading followed by $22$ weeks thrice-weekly) complicates adherence and hinders fixed-dose combination development. Once-daily dosing could improve adherence, yet the WHO-recommended BPaLM/BPaL regimen (ZeNix dosing) lacks a high initial loading dose, raising concerns about early bactericidal activity. Prior PK simulation studies compared exposures between regimens but did not translate PK differences into clinical efficacy, safety, or long-term outcomes. This study addresses that gap by integrating four previously validated models into a unified simulation framework, enabling simultaneous evaluation of PK, sputum culture conversion, QTc prolongation, and treatment outcomes. The interactive Shiny app further democratizes access to these complex simulations, allowing stakeholders to explore dosing scenarios and interruption management in real time.

---

## ⚡ Methodological Snapshot
The authors constructed an integrated simulation framework by recoding four previously published pharmacometric models in R using the mrgsolve package. The models include: (1) a population PK model for bedaquiline and its M2 metabolite, (2) a PK-efficacy model linking weekly average bedaquiline concentration to time-to-positivity in MGIT liquid culture and the probability of a positive culture, (3) a PK-safety model relating M2 concentration to QTcF prolongation, and (4) a multistate outcome model predicting transitions between active TB, conversion, recurrence, and death. A virtual population of $8340$ individuals was generated via conditional distribution modeling with multiple imputation (MICE) from $556$ patients in three clinical trials. The framework was deployed as an interactive R Shiny application allowing users to define dosing regimens, population characteristics, and simulation settings. Two case studies were performed: comparison of three dosing regimens (registered thrice-weekly, ZeNix once-daily, and standard-loading once-daily) using $500$ individuals per regimen with $100$ replicate simulations to reduce stochastic noise, and evaluation of treatment interruption and reloading strategies in a typical individual.

---

## 🏗️ Structural Model Breakdown
The PK model describes bedaquiline disposition with a two-compartment model (central and peripheral) and first-order absorption, while M2 is modeled with a one-compartment model linked to bedaquiline elimination. The PK-efficacy model assumes an unobserved mycobacterial load that declines exponentially with a half-life dependent on the weekly average bedaquiline concentration. TTP in MGIT culture is inversely related to the log-transformed mycobacterial load, and a positive culture result is determined by whether the load exceeds a detection threshold. The PK-safety model is a linear function relating M2 concentration to QTcF change from baseline, with additive inter-individual variability. The outcome model defines four states (active TB, converted, recurrence, death) with transition hazards modeled as functions of the half-life of load decline (for conversion) and end-of-treatment load (for recurrence).

---

### Detailed Methodological Analysis

#### Modeling Approach
The framework employs a sequential PK-PD approach. The population PK model is a two-compartment model for bedaquiline and a one-compartment model for M2, with first-order absorption and elimination. The PK-efficacy model uses a latent variable representing mycobacterial load, driven by weekly average bedaquiline concentration, to predict TTP and binary culture positivity via a time-to-event model. The PK-safety model is a linear mixed-effects model relating M2 concentration to change from baseline QTcF. The long-term outcome model is a multistate model with transitions depending on the half-life of mycobacterial load decline (first $2$ weeks) and end-of-treatment mycobacterial load. All models were originally developed in NONMEM and recoded in mrgsolve for this framework. The Shiny app uses reactive programming to update simulations based on user inputs.

#### Data Sources
The original models were developed using data from $556$ patients pooled from three TB clinical trials: two phase IIb trials (NCT01498419, NCT02193776) and one phase III trial (NCT02333799), accessed via the TB-PACTS platform. These trials evaluated bedaquiline on top of background regimens including ethionamide, pyrazinamide, ofloxacin, kanamycin, and cycloserine. The virtual population was generated from the same pooled dataset, preserving the observed covariate distributions and correlations.

#### Estimation Methods
The original models were estimated using NONMEM (first-order conditional estimation with interaction for PK, Laplacian for time-to-event models). For the simulation framework, the models were recoded as ordinary differential equations in mrgsolve. PK and safety simulations were deterministic given random effects, while efficacy and outcome models included stochastic components (random sampling from Bernoulli and multinomial distributions). To obtain stable population-level estimates, $100$ replicate simulations were performed per scenario, and results were summarized as medians and $5^{th}-95^{th}$ percentiles.

#### Model Evaluation
The recoded models were verified by comparing simulated outputs to key figures from the original publications. No formal internal or external validation of the integrated framework was performed, as the individual models had been previously validated. The adjustment of the half-life parameter to match contemporary conversion rates ($80\%$ at $2$ months, $95\%$ at $6$ months from the Nix-TB trial) served as a pragmatic calibration step.

#### Covariate Analysis
Covariates included in the framework: age, sex (male/female), race (black/non-black), baseline albumin-corrected calcium and potassium, co-administration of clofazimine or moxifloxacin (yes/no), baseline TTP, and time-varying weight and albumin. Drug-drug interaction effects on bedaquiline PK were incorporated for rifampicin, rifapentine, efavirenz, lopinavir/ritonavir, and nevirapine. The half-life of mycobacterial load decline was adjustable by the user to reflect expected conversion rates under different background regimens. Covariate values for the virtual population were imputed using MICE, and time-varying covariates were simulated from the PK model.

---

### Statistical Rigor Assessment
The study appropriately leverages previously validated models, which strengthens the credibility of the simulations. The generation of a large virtual population using MICE and conditional distribution modeling is a robust method to preserve the multivariate covariate structure. Performing $100$ replicate simulations to reduce stochastic noise from the efficacy and outcome models is a sound practice, and the use of the same $500$ individuals across regimens enables direct, paired comparisons. However, the adjustment of the half-life parameter to match external conversion rates, while pragmatic, lacks formal statistical justification and introduces uncertainty. The absence of a formal sensitivity analysis for this calibration is a minor weakness. The sample size of $500$ per regimen provides adequate precision for comparing proportions, but the reliance on a single virtual population draw means that uncertainty in the covariate distribution is not fully propagated. Overall, the statistical approach is fit for the exploratory purpose of the tool, though users should interpret results as model-based projections rather than confirmatory evidence.

---

## 📊 Key Findings
The standard-loading once-daily regimen ($400$ mg daily for $2$ weeks, then $100$ mg daily for $22$ weeks) produced bedaquiline and M2 exposures comparable to the registered thrice-weekly dosing, with median cumulative AUC differences $<10\%$ after $4$ weeks. In contrast, the ZeNix once-daily regimen ($200$ mg daily for $8$ weeks, then $100$ mg daily) resulted in $50\%$ lower median bedaquiline AUC at $2$ weeks and $26\%$ lower at $4$ weeks. This exposure deficit translated into clinically meaningful efficacy differences: at $2$ weeks, the ZeNix regimen had $11\%$ fewer patients with negative sputum cultures, and at $8$ weeks, $5.8\%$ fewer patients achieved culture conversion compared to the other two regimens. However, by $24$ weeks, culture conversion rates were similar across all regimens. Long-term outcomes (recurrence, death) over $120$ weeks did not differ substantially. QTcF intervals remained well below the $500$ ms safety threshold for all regimens, with $95^{th}$ percentiles ranging from $376$ to $442$ ms. The Shiny app also demonstrated utility in determining reloading doses after treatment interruption, showing that a $7$-day reloading with $400$ mg daily restored adequate exposure without QTc concerns.

---

## 💡 Clinical & Regulatory Implications
The findings support the adoption of a once-daily bedaquiline regimen with a $2$-week loading dose ($400$ mg daily) as an efficacious and safe alternative to the current thrice-weekly registered dosing. This simplification could improve patient adherence and enable the development of fixed-dose combinations, potentially reducing pill burden and treatment costs. The early efficacy advantage over the ZeNix regimen suggests that omitting the loading dose may delay sputum culture conversion, which could prolong infectiousness and increase transmission risk. The demonstrated safety of all regimens with respect to QTc prolongation is reassuring, as cardiotoxicity is a key concern with bedaquiline. The Shiny app provides a practical tool for clinicians to individualize reloading doses after treatment interruptions, helping to restore therapeutic drug levels quickly without excessive QTc prolongation. From a regulatory perspective, the framework could support model-informed drug development and label discussions for bedaquiline dosing in special populations or in the context of drug-drug interactions.

---

### Strengths & Limitations

#### Strengths
- Integration of four validated pharmacometric models into a single, coherent simulation framework covering PK, efficacy, safety, and long-term outcomes.
- Development of an interactive, open-source R Shiny application that makes complex simulations accessible to non-modelers, including clinicians and policymakers.
- Use of a large virtual population ($8340$ individuals) generated by conditional distribution modeling from pooled clinical trial data, ensuring representative covariate distributions.
- Rigorous handling of stochastic variability in efficacy and outcome models by performing $100$ replicate simulations per scenario.
- Practical demonstration of the tool's value through two clinically relevant case studies: dosing regimen comparison and treatment interruption management.
- Full code and data availability on GitHub, promoting reproducibility and enabling local, computationally intensive simulations.

#### Limitations (Acknowledged by Authors)
- The half-life of mycobacterial load decline is a latent variable from the PK-efficacy model and cannot be directly translated into other bacterial killing parameters.
- The exposure-response relationship cannot be extrapolated beyond the $24$-week treatment period or to interruption/reinitiation scenarios due to the original model development data.
- The outcome model is limited to standard $24$-week bedaquiline treatment durations and does not support evaluation of shorter or longer regimens.
- Adherence was assumed to be similar to that observed in the clinical trials, which may not reflect real-world settings.

#### Limitations (Expert Review)
- The virtual population was derived from trials conducted between $2007$ and $2016$; current MDR-TB patients may have different baseline characteristics and background regimens, potentially affecting generalizability.
- Adjusting the half-life of mycobacterial load decline to match contemporary conversion rates is a pragmatic but unvalidated approach that assumes the shape of the exposure-response relationship remains unchanged.
- The framework does not account for the development of drug resistance during treatment interruption, which could influence reloading efficacy.
- The Shiny app's limitation to single simulations for efficacy and outcome models (requiring local processing for multiple replicates) may hinder real-time, robust exploration by non-technical users.
- The models do not incorporate potential pharmacodynamic interactions with companion drugs beyond those explicitly included as covariates.

#### Generalizability
The framework is specific to bedaquiline in adult pulmonary TB, but the modular, open-source design allows adaptation to other anti-TB agents or disease areas. The app can explore a wide range of dosing scenarios within the models' assumptions, but extrapolation to entirely novel regimens, pediatric populations, or different TB forms requires caution and further model refinement.

---

---

### Figures & Tables

- **Figure 1**: Integrated bedaquiline dose-PK-efficacy-safety-outcome modeling framework diagram, showing the flow from dosing to PK (bedaquiline and M2), efficacy (TTP and culture positivity), safety (QTcF), and long-term outcomes (conversion, recurrence, death).
  - *Significance*: Provides a visual overview of the comprehensive modeling strategy, highlighting how the four submodels are linked to enable simultaneous evaluation of multiple endpoints.
- **Figure 2**: Workflow of the Shiny app, illustrating the four interactive tabs: Dosing (define up to three regimens), Population (specify covariates and half-life), Simulation (set number of individuals and duration), and Results (visualize PK, efficacy, safety, and outcomes).
  - *Significance*: Demonstrates the user-friendly interface that makes complex simulations accessible to non-programmers, a key innovation of this work.
- **Figure 3**: Example simulation output from the Shiny app comparing the three dosing regimens: (a) weekly average bedaquiline and M2 concentrations, (b) QTcF intervals, (c) proportion of positive MGIT cultures, and (d) predicted outcome states over $120$ weeks.
  - *Significance*: Showcases the app's ability to generate comprehensive, multi-panel visualizations that facilitate direct regimen comparisons across PK, efficacy, safety, and outcomes.
- **Figure 4**: Predicted proportion of positive MGIT liquid cultures over $24$ weeks for the three regimens, based on $100$ replicate simulations to reduce stochastic noise. Shaded areas represent the $5^{th}-95^{th}$ percentile range.
  - *Significance*: Quantifies the early efficacy advantage of the registered and standard-loading once-daily regimens over the ZeNix regimen, with clear separation at $2-4$ weeks that diminishes by week $8$.
- **Figure 5**: Predicted proportion of patients in active TB, converted, recurrent TB, and death states over $120$ weeks for the three regimens, summarized from $100$ simulations.
  - *Significance*: Shows that despite early efficacy differences, long-term outcomes (recurrence, death) are similar across all regimens, supporting the safety of once-daily dosing simplification.
- **Figure 6**: Evaluation of reloading strategies after an $8$-week treatment interruption under the standard-loading once-daily regimen, showing bedaquiline concentration and QTcF profiles for no interruption, interruption without reloading, and interruption with a $7$-day $400$ mg reloading.
  - *Significance*: Demonstrates the practical utility of the Shiny app for guiding clinical decisions on treatment reinitiation, showing that a short reloading course restores exposure without exceeding QTc safety thresholds.

---

### Code & Reproducibility Assessment
The source code, data, and required R packages are publicly available on GitHub (https://github.com/slove1200/BDQ-simulation-framework-shiny). The Shiny application is hosted at https://bedaquiline-dose-pk-pd-outcome.serve.scilifelab.se. All simulations can be reproduced locally, and the app includes a user manual. This represents an exemplary level of transparency and reproducibility.

---

### Supplementary Materials
The supplementary material includes Figure S1 (relationship between half-life of mycobacterial load decline and expected culture conversion rates at $2$ and $6$ months), Figures S2-S3 (characteristics of the $500$ sampled virtual patients), Figures S4-S5 (interruption and reloading scenarios for the registered and ZeNix regimens), and a detailed description of the TTP simulation module. These support the main findings and provide additional context for users of the Shiny app.

---

### Future Directions
Extension of the framework to pediatric populations to support bedaquiline dosing across age and weight groups. Incorporation of a formal adherence model (e.g., Markov chain) to simulate real-world missed doses. Integration of resistance development mechanisms to better predict outcomes after treatment interruption. Validation of the framework with prospective data from ongoing trials such as DECISION (NCT05926466) and PARADIGM4TB (NCT06114628). Expansion to include other key TB drugs and their interactions, enabling full regimen optimization.

---

### Expert Commentary
As a senior pharmacometrician, I find this work a commendable example of translating complex model-informed drug development into a practical decision-support tool. The integration of four separate models into a single Shiny application is technically impressive and addresses a real need in TB drug development. The finding that a standard-loading once-daily regimen matches the registered dosing in early efficacy is clinically reassuring and supports ongoing trials. However, the reliance on older trial data for model building is a notable limitation; the PK-efficacy relationship may differ in today's patients receiving potent background regimens like bedaquiline-pretomanid-linezolid. The adjustment of the half-life parameter to match external conversion rates is a clever workaround but introduces uncertainty that users must acknowledge. The open-source nature and excellent documentation set a standard for the field. I encourage the authors to pursue prospective validation and to incorporate feedback from clinical users to enhance the app's utility. This framework exemplifies how pharmacometrics can bridge the gap between modeling and clinical decision-making, and I anticipate it will be widely used in both academic and regulatory settings.

---

### Bottom Line
This integrated simulation tool provides robust evidence that a once-daily bedaquiline regimen with a $2$-week loading dose ($400$ mg daily) maintains early bactericidal efficacy and safety comparable to the registered thrice-weekly schedule, while offering adherence advantages. The open-source Shiny app empowers pharmacometricians, clinicians, and regulators to interactively explore dosing modifications, treatment interruptions, and drug-drug interaction scenarios, facilitating evidence-based dose optimization and supporting the development of simpler, patient-friendly TB regimens.

---

---

## 📊 Figures

![Integrated bedaquiline dose-PK-efficacy-safety-outcome modeling framework for adult patients with tuberculosis. The time-to-positivity results from MGIT liquid c]({{ site.baseurl }}/assets/digests/2026-05-26-an-interactive-pharmacokinetic-pharmacodynamic-framework-to-evaluate/figures/fig_01.jpg)

![Workflow of the Shiny app for evaluating bedaquiline dose modifications. In the dosing tab (Step 1), users define up to three dosing regimens with or without int]({{ site.baseurl }}/assets/digests/2026-05-26-an-interactive-pharmacokinetic-pharmacodynamic-framework-to-evaluate/figures/fig_02.jpg)

![Simulation results displayed in the Shiny app interface under the registered dosing (Regimen 1, purple), the ZeNix once-daily dosing (Regimen 2, red), and the st]({{ site.baseurl }}/assets/digests/2026-05-26-an-interactive-pharmacokinetic-pharmacodynamic-framework-to-evaluate/figures/fig_03.jpg)

![The predicted proportion of positive MGIT liquid cultures during the 24-week treatment period over 100 times of simulation under the registered dosing (purple),]({{ site.baseurl }}/assets/digests/2026-05-26-an-interactive-pharmacokinetic-pharmacodynamic-framework-to-evaluate/figures/fig_04.jpg)

![The predicted proportion of patients being in active TB, converted, recurrent TB and death states in 120 weeks over 100 times of simulation under the registered]({{ site.baseurl }}/assets/digests/2026-05-26-an-interactive-pharmacokinetic-pharmacodynamic-framework-to-evaluate/figures/fig_05.jpg)

![Evaluation of reloading strategies with interruption under the standard-loading once-daily dosing regimen for bedaquiline in the Shiny interface app. Regimen 1 (]({{ site.baseurl }}/assets/digests/2026-05-26-an-interactive-pharmacokinetic-pharmacodynamic-framework-to-evaluate/figures/fig_06.jpg)