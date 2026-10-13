---
layout: post
title: "Dynamic Prediction of Clinical Endpoints in Survival Analysis With Machine and Deep Learning: A Systematic Review and Regulatory Perspective."
date: 2026-10-13
authors: "Xinyi Liu et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70330"
paper_type: generic
tags: [generic, regulatory, machine-learning]
excerpt_text: "This systematic review of 75 studies maps machine and deep learning approaches for dynamic survival prediction, showing that time-updating models generally match or outperform static Cox models when longitudinal data are available. However, calibration and external validation are rarely reported, and PK/PD exposure features are seldom integrated. The authors frame these gaps within emerging ICH M15 and FDA AI regulatory guidance."
pdf_path: "/assets/digests/2026-10-13-dynamic-prediction-of-clinical-endpoints-in-survival-analysis-with-machine-and/PMx_Dynamic_Prediction_of_Clinical_Endpoints_20261013.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This systematic review of 75 studies maps machine and deep learning approaches for dynamic survival prediction, showing that time-updating models generally match or outperform static Cox models when longitudinal data are available. However, calibration and external validation are rarely reported, and PK/PD exposure features are seldom integrated. The authors frame these gaps within emerging ICH M15 and FDA AI regulatory guidance.

---

### Executive Summary
The review synthesizes the rapidly growing literature on dynamic survival prediction using machine learning and deep learning, with a focus on clinical and pharmaceutical applications. It classifies models into Cox-based, tree-based, and neural network families, and examines temporal design choices such as discrete versus continuous time, landmarking, observation windows, and prediction horizons. Across 75 included studies, dynamic models generally achieved discrimination comparable to or better than static Cox models when longitudinal data were available, but calibration was inconsistently reported and external validation was uncommon. A key finding is the near-absence of PK/PD-derived exposure features in ML/DL survival models, despite the mechanistic importance of exposure in drug response. The authors propose a framework for integrating population PK outputs with ML/DL survival models and interpret the results through the lens of ICH M15 and FDA draft AI guidance, emphasizing context of use, risk-based credibility, and transparent reporting.

---

### Scientific Context & Motivation
Conventional survival models such as Cox proportional hazards and parametric time-to-event models are widely used in drug development but are limited by proportional hazards assumptions and their inability to fully exploit longitudinal patient data, including time-varying biomarkers, drug exposures, and evolving clinical status. Dynamic prediction models address this by updating risk estimates as new information becomes available, which is particularly relevant for model-informed drug development, precision dosing, and adaptive trial design. Although several prior reviews have covered ML/DL survival methods, none focused specifically on dynamic, time-updating prediction frameworks or on integration with PK/PD exposure data. This review fills that gap by systematically characterizing temporal design choices, model architectures, validation practices, and regulatory implications.

---

## ⚡ Methodological Snapshot
The authors conducted a systematic review using PubMed as the primary database, supplemented by trial registers and targeted citation chasing to capture drug-development-relevant studies. The search strategy combined terms for machine learning, deep learning, artificial intelligence, prediction, survival, and clinical disease. After deduplication and screening, 75 studies were included, comprising 7 reviews, 56 methodology papers, and 12 application-focused studies. A PRISMA flow diagram documents the screening process, and the authors prioritized studies with longitudinal biomarker or covariate data while retaining static models for context.

---

## 📋 Detailed Analysis
The review's core contribution is its classification of dynamic survival models along multiple dimensions: algorithm family, temporal design, dynamic versus static updating, and use of longitudinal covariates. Cox-based models, including time-dependent Cox and penalized variants, remain strong interpretable baselines. Tree-based methods such as random survival forests and gradient boosting capture nonlinearities and interactions, and landmarking provides a pragmatic way to update predictions at clinically meaningful time points. Deep learning models, including LSTM/RNN, Dynamic-DeepHit, transformer-based joint models, and Neural-ODE survival models, dominate the dynamic prediction space and can ingest raw longitudinal sequences, but they require large datasets and careful validation.

---

### Domain Context
Within pharmacometrics and model-informed drug development, dynamic survival prediction is closely related to joint modeling of longitudinal biomarkers and time-to-event outcomes, exposure-response analysis, and quantitative benefit-risk assessment. Traditional pharmacometric workflows often refit full models when new data arrive, which is computationally intensive and poorly suited for real-time decisions. Dynamic ML/DL models offer an alternative that updates predictions incrementally, but their integration with PK/PD concepts remains immature. Regulatory frameworks such as ICH M15 and FDA draft AI guidance are beginning to define credibility expectations for such models, emphasizing context of use, risk-based validation, and transparency. This review bridges the pharmacometric and AI/ML communities by framing dynamic survival prediction as a natural extension of exposure-response modeling rather than a separate discipline.

---

## 📊 Key Findings
Dynamic ML/DL survival models were applied across acute care, oncology, and chronic disease, with recurrent networks, transformers, Dynamic-DeepHit, and Neural-ODE models enabling time-updated risk prediction. Discrimination was generally comparable to or better than static Cox models when longitudinal data were available, with reported C-indices or AUROCs often exceeding 0.80 in large cohorts. Calibration was rarely reported, external validation was uncommon, and most studies relied on internal cross-validation or single train/test splits. Only a handful of models incorporated PK/PD features; most used clinical and demographic covariates, leaving exposure-response integration largely unexplored. Landmarking was the dominant strategy for adapting traditional Cox and tree-based models to dynamic settings, while deep learning models more naturally ingested raw longitudinal sequences. Regulatory frameworks such as ICH M15 and FDA draft AI guidance emphasize context of use, risk-based credibility assessment, external validation, and transparent reporting, all of which are currently underdeveloped in this literature.

---

### Strengths & Limitations

#### Strengths
- Comprehensive systematic review with PRISMA flow diagram and a clearly documented search strategy
- Broad taxonomy covering Cox-based, tree-based, and deep learning survival models with attention to temporal design
- Explicit focus on dynamic prediction and PK/PD integration, which prior reviews have largely overlooked
- Regulatory perspective grounded in ICH M15 and FDA AI guidance, adding practical relevance for drug development
- Comparison with seven prior reviews clarifies the unique contribution of this work
- Detailed characterization of observation windows, prediction horizons, and validation strategies across included studies

#### Limitations (Acknowledged by Authors)
- Search restricted to PubMed, potentially missing studies indexed only in Embase, Scopus, Web of Science, or gray literature
- No formal risk-of-bias or methodological quality assessment such as PROBAST
- Heterogeneity across populations, endpoints, horizons, and metrics precluded meta-analysis or pooled quantitative synthesis

#### Limitations (Expert Review)
- The inclusion criteria requiring pharmaceutical relevance may have introduced selection bias and reduced generalizability to broader clinical prediction research
- Performance comparisons across studies are difficult to interpret because datasets, endpoints, and validation designs differ substantially
- The review does not provide a quantitative benchmark of dynamic versus static models, limiting conclusions about when dynamic updating adds value
- The proposed PK/PD integration framework is conceptual and not empirically validated in the review
- Censoring assumptions, particularly informative censoring, are discussed but not systematically assessed across included studies
- No protocol registration or reproducibility package is mentioned, limiting transparency of the review process

#### Generalizability
The findings are qualitatively generalizable across acute care, oncology, and neurodegenerative disease, but quantitative generalizability is limited by heterogeneous study designs, inconsistent reporting, and scarce external validation. The regulatory and PK/PD integration recommendations are broadly applicable to model-informed drug development, though specific performance claims should not be extrapolated beyond the datasets and contexts reviewed.

---

---

### Figures & Tables

- **Figure 1**: PRISMA flow diagram showing the study identification, screening, and inclusion process, from 6101 PubMed records and 29 register records to 75 included studies.
  - *Significance*: Documents the transparency and reproducibility of the systematic review methodology and demonstrates the filtering steps used to identify pharmaceutically relevant ML/DL survival studies.
- **Figure 2**: Proposed framework integrating population PK modeling with ML/DL survival analysis in oncology, linking drug concentration-time data, patient covariates, and predicted clinical endpoints such as adverse effects, tumor response, and overall survival.
  - *Significance*: Illustrates the key conceptual contribution of the review: combining PK-derived exposure metrics with dynamic ML/DL survival models to support precision dosing and regulatory decision-making.

---

### Future Directions
Future work should establish shared longitudinal benchmarks and standardized reporting guidelines for dynamic survival models, including temporal design parameters, calibration metrics, and external validation results. Methodological research should focus on hybrid models that embed mechanistic PK/PD or disease models within ML/DL architectures to improve interpretability and extrapolation. Prospective studies are needed to evaluate whether dynamic PK/PD-informed models improve clinical decisions such as dose titration, therapeutic drug monitoring, and adaptive trial enrichment. Regulatory science would benefit from case studies demonstrating how dynamic ML/DL models can satisfy ICH M15 and FDA credibility expectations in real drug development programs.

---

### Expert Commentary
This review is a timely and valuable synthesis for the pharmacometrics community. The observation that PK/PD features are almost absent from ML/DL survival models is striking, given that exposure-response is central to drug development. The authors correctly identify calibration and external validation as the key barriers to regulatory acceptance. The proposed framework linking population PK outputs to ML/DL survival models is conceptually sound, but the field will need concrete case studies and simulation-based evidence to establish when dynamic ML/DL models outperform well-specified joint models or landmark Cox approaches. The regulatory framing is pragmatic and aligns with the broader shift toward risk-based credibility assessment in model-informed drug development.

---

### Bottom Line
Dynamic ML/DL survival models are promising tools for time-updated risk prediction in drug development, but their adoption will require routine calibration reporting, external validation, and integration of PK/PD exposure features. Regulatory credibility under ICH M15 and FDA AI guidance will depend on clearly defined contexts of use, risk-based evidence generation, and transparent documentation. Pharmacometricians should view dynamic prediction as a complement to, not a replacement for, mechanistic exposure-response modeling.

---

---

## 📊 Figures

![PRISMA flow diagram of study identification, screening, and inclusion (see Section2.1, Search Strategy, for the corresponding counts at each stage).]({{ site.baseurl }}/assets/digests/2026-10-13-dynamic-prediction-of-clinical-endpoints-in-survival-analysis-with-machine-and/figures/fig_01.jpg)

![A model-based framework integrating clinical oncology drug development with machine learning (ML) and deep learning (DL) techniques enables more informed predict]({{ site.baseurl }}/assets/digests/2026-10-13-dynamic-prediction-of-clinical-endpoints-in-survival-analysis-with-machine-and/figures/fig_02.jpg)