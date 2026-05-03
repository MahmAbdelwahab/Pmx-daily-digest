---
layout: post
title: "Objective First, Method Second: Why the Estimand Definition Comes First in Pharmacometric Covariate Modeling"
date: 2026-04-20
authors: "Jonsson EN, Nyberg J, Mentré F"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026;15(4):e70251"
doi: "10.1002/psp4.70251"
paper_type: methodology
tags: [methodology, qsp, covariate-analysis, regulatory, clinical-trial-design]
excerpt_text: "This paper formalizes the distinction between conditional (partial/adjusted) and unconditional (marginal/total) covariate effects in pharmacometrics using the ICH E9(R1) estimand framework. It argues that objective-driven estimand definition must precede estimator selection, with conditional effects serving mechanistic understanding and unconditional effects supporting clinical decision-making and regulatory labeling."
pdf_path: "/assets/digests/2026-04-20-objective-first-method-second-why-the-estimand-definition-comes-first-in/PMx_Objective_First_Method_Second_Why_the_Es_20260420.pdf"
retroactively_classified: false
---

### Quick Take
This paper formalizes the distinction between conditional (partial/adjusted) and unconditional (marginal/total) covariate effects in pharmacometrics using the ICH E9(R1) estimand framework. It argues that objective-driven estimand definition must precede estimator selection, with conditional effects serving mechanistic understanding and unconditional effects supporting clinical decision-making and regulatory labeling.

---

### Executive Summary
Jonsson, Nyberg, and Mentré present a methodological framework that applies the ICH E9(R1) estimand concept to pharmacometric covariate modeling. The core thesis is that two distinct scientific objectives—mechanistic understanding versus clinical decision-making—require different estimands (conditional vs. unconditional covariate effects), and that conflating these leads to systematic misinterpretation. The conditional estimand isolates a covariate's effect holding others constant, typically estimated via multivariable model coefficients. The unconditional estimand captures total covariate impact including indirect effects through correlated covariates, estimated via univariable models or Full Random Effects Models (FREM). The authors demonstrate that current practices often default to conditional estimators regardless of objective, risking the "Table 2 fallacy"—interpreting conditional coefficients as total effects. They advocate for explicit estimand declaration, complementary reporting of both effect types, and alignment of forest plots with regulatory lifecycle stage.

---

### Scientific Context & Motivation
Pharmacometric covariate modeling has historically prioritized mechanistic interpretation, emphasizing physiological plausibility and parsimonious multivariable models. However, this tradition creates tension with regulatory and clinical needs, which often require statements about total expected effects in specific patient subgroups (e.g., elderly, renally impaired). The statistical distinction between conditional (partial, adjusted) and unconditional (marginal, total) effects is well-established in epidemiology, econometrics, and causal inference, but has been inconsistently applied in pharmacometrics. The ICH E9(R1) guideline introduced formal estimand definitions for clinical trials, but this framework has not been systematically extended to covariate modeling. This gap leads to ambiguity in regulatory submissions, where conditional effects from population PK models may be inappropriately communicated as clinical guidance, and in precision dosing, where the appropriate estimand depends on available patient information.

---

## ⚡ Methodological Snapshot
The paper formalizes covariate effect estimation within the ICH E9(R1) estimand framework, distinguishing two primary estimands. The conditional estimand represents the isolated effect of a covariate on a pharmacometric parameter, holding all other covariates constant—mathematically, the partial derivative or multivariable regression coefficient. This estimand serves mechanistic objectives: understanding physiological drivers, verifying biological plausibility, and identifying independent predictors. The unconditional estimand represents the total effect of a covariate, inclusive of indirect pathways through correlated covariates—mathematically, the marginal association or total derivative. This estimand serves clinical objectives: dose selection, drug labeling, and communicating expected effects in patient subgroups. The conditional estimand is typically estimated via coefficients from multivariable models (e.g., $CL = \theta \cdot \exp(\beta_1(WT-\bar{W}) + \beta_2(CrCL-\overline{CrCL}))$), where $\beta_1$ represents the weight effect at fixed creatinine clearance. The unconditional estimand is estimated via coefficients from univariable models (e.g., $CL = \theta \cdot \exp(\beta_1^*(WT-\bar{W}))$), where $\beta_1^*$ captures the total weight effect including its correlation with creatinine clearance, or via Full Random Effects Models (FREM) which can derive both quantities from a single covariance structure. The critical insight is that estimator selection follows estimand definition: no single model is universally optimal, and the 'best' model depends on the scientific objective.

---

## 📐 Statistical Framework
The theoretical foundation rests on the decomposition of total covariate effects into direct and indirect components. For correlated covariates $X_1$ and $X_2$ with parameter $P$, the conditional effect $\beta_1 = \partial P/\partial X_1|X_2$ represents the direct effect holding $X_2$ constant. The unconditional effect $\beta_1^* = dP/dX_1$ includes both direct and indirect ($X_1\rightarrow X_2\rightarrow P$) pathways. Mathematically, for linear models, $\beta_1^* = \beta_1 + \beta_2\cdot(\partial X_2/\partial X_1)$, where the second term captures the mediated effect. The framework assumes: (1) covariate-parameter relationships are approximately linear on the log-scale (exponential model), (2) correlations between covariates are stable and estimable, (3) the objective is either mechanistic interpretation (conditional) or predictive/clinical description (unconditional), not causal identification in the potential outcomes sense, and (4) for FREM estimation, multivariate normality of random effects and covariates. The ICH E9(R1) estimand framework provides the structural scaffolding: attributes (population, variable, treatment/condition, summary measure), intercurrent events handling, and population-level summaries are all relevant to covariate effect specification.

---

### Estimator Behavior
The paper identifies systematic differences in estimator behavior between conditional and unconditional approaches. Conditional estimators (multivariable coefficients) exhibit: (1) dependence on the correlation structure—adding or removing correlated covariates shifts coefficient estimates, (2) potential variance inflation with correlated covariates, (3) optimization for parsimony via stepwise procedures, and (4) bias toward zero for effects mediated through other included covariates. Unconditional estimators (univariable coefficients) exhibit: (1) stability across different covariate sets for the target covariate, (2) larger magnitude when positive correlations exist with other covariates affecting the parameter, (3) potential omitted variable bias if confounders exist, though this is less relevant for predictive objectives, and (4) alignment with marginal population summaries. FREM-based estimators offer: (1) joint estimation of conditional and unconditional quantities via the covariance matrix, (2) borrowing strength across correlated covariates, (3) appropriate handling of unobserved covariate values through the random effects distribution, and (4) computational intensity requiring specialized software. The authors note that standard errors and confidence intervals differ between estimands, though detailed quantification is not provided.

---

### Validation Design
The paper does not present original simulation studies or empirical validation. Instead, it relies on: (1) analytical derivation of the relationship between conditional and unconditional effects through covariance decomposition, (2) established statistical theory from regression analysis and causal inference, (3) illustrative examples (weight and creatinine clearance correlation) to demonstrate conceptual differences, and (4) reference to prior FREM validation studies. The validation approach is conceptual rather than empirical—demonstrating that the estimand framework resolves existing ambiguities in pharmacometric practice. Benchmark comparisons are implicit: the paper contrasts the proposed objective-first approach with current defaults (multivariable modeling for all purposes) and identifies systematic misalignment. The 'validation' consists of logical consistency with ICH E9(R1), coherence with cross-disciplinary statistical practice, and resolution of known interpretational problems (Table 2 fallacy). No quantitative metrics (bias, coverage, MSE) are provided for estimator performance under various correlation structures or sample sizes.

---

### Applicability Boundaries
The framework applies when: (1) covariates are correlated and affect the same pharmacometric parameter, (2) multiple scientific objectives (mechanistic vs. clinical) exist, (3) communication to diverse audiences (modelers, clinicians, regulators) is required, and (4) the covariate-parameter relationship is approximately linear or log-linear. The framework is less applicable or requires extension when: (1) covariates are independent (conditional = unconditional), (2) categorical covariates with nonlinear interactions are primary, (3) time-varying covariates create dynamic correlation structures, (4) causal identification (not just description) is the objective, requiring additional assumptions (ignorability, positivity), (5) sample sizes are insufficient to estimate correlation structures or support multivariable modeling, and (6) software limitations prevent FREM implementation. Data requirements include: sufficient sample size to estimate covariate correlations and multivariable relationships, availability of the full covariate vector for conditional estimation, and representative population sampling for unconditional generalization. The framework assumes the correlation structure is estimable and stable; with small samples or selection bias in covariate measurement, unconditional estimates may be unreliable.

---

### Comparison to Alternatives
The paper contrasts the proposed estimand-first framework with current pharmacometric defaults. Standard practice: single multivariable model selected via stepwise procedures, used for both mechanistic interpretation and clinical communication. Limitation: produces conditional estimates that underestimate total clinical impact when covariates are correlated, risking the Table 2 fallacy. Alternative: separate univariable models for each covariate. Advantage: provides unconditional estimates appropriate for labeling. Disadvantage: ignores covariate correlations in estimation, potentially inefficient; may produce internally inconsistent predictions when multiple covariates are simultaneously relevant. Alternative: causal inference methods (g-computation, inverse probability weighting). Advantage: formal identification of causal effects. Disadvantage: requires stronger assumptions (no unmeasured confounding), more complex implementation, may be unnecessary for predictive clinical objectives. FREM: Advantage: unified framework for both estimands, accounts for covariate correlations, handles missing covariate data naturally. Disadvantage: computational complexity, requires specialized software (NONMEM, R packages), less familiar to regulatory reviewers. The proposed framework does not replace these methods but structures their appropriate deployment based on objective.

---

### Implementation Guidance
Software: Standard NLME software (NONMEM, Monolix, nlmixr) implements multivariable conditional estimation directly. For unconditional estimation: (1) fit separate univariable models for each covariate, or (2) use FREM implementation in NONMEM (FOCEI with $PRIOR or $LEVEL), or (3) simulate from multivariable model with covariates sampled from their joint distribution. FREM requires: multivariate normal assumption for covariates, specification of covariate covariance structure, and potentially longer run times. Practical tips: (1) Always center continuous covariates (mean or reference value) to improve numerical stability and interpretability. (2) Report both conditional and unconditional effects when objectives are mixed, with clear labeling. (3) For forest plots in regulatory submissions, prefer unconditional effects unless mechanistic questions are explicitly addressed. (4) When using FREM, verify convergence of the full covariance matrix and check for boundary issues (covariances fixed to zero). (5) For simulation-based unconditional estimates, ensure the simulation covariate distribution matches the target population. Computational cost: Univariable approach—low, standard fits. FREM—moderate to high, depending on number of covariates and correlation structure. Simulation-based—moderate, requires careful design of simulation scenarios. Code availability: Not explicitly provided; authors reference standard software capabilities. Supplementary Appendix A contains formal estimand specifications but no executable code.

---

## 📊 Key Findings
The paper establishes that conditional and unconditional covariate effects are distinct estimands requiring different estimators: multivariable coefficients for conditional effects, univariable coefficients or FREM-derived quantities for unconditional effects. When covariates are correlated (e.g., weight and creatinine clearance), the conditional weight effect underestimates the total clinical impact because it excludes the weight-mediated creatinine clearance pathway. Stepwise covariate modeling, by construction, optimizes for conditional estimands and is therefore mechanistically appropriate but potentially misleading for clinical labeling. The Full Random Effects Model (FREM) offers a unified estimation framework that can address both estimands from a single model fit. Regulatory lifecycle stages map to different estimands: conditional for mechanistic assessment and biological plausibility, unconditional for drug labeling and clinical guidance. Forest plots, commonly used in late-stage regulatory documentation, should preferentially display unconditional effects to avoid underestimating total clinical impact.

---

### Strengths & Limitations

#### Strengths
- Rigorous application of established statistical principles (estimand framework) to pharmacometric practice, bridging disciplinary silos
- Clear formalization of the conditional/unconditional distinction with cross-disciplinary terminology mapping (Table 1), enhancing communication across statistics, epidemiology, econometrics, and pharmacometrics
- Practical guidance on estimator selection aligned with objectives, including recognition of FREM's dual capability
- Identification of the 'Table 2 fallacy' risk in regulatory contexts, with specific implications for forest plot construction
- Acknowledgment of the Rashomon effect—multiple valid models for different purposes—resolving false conflicts about 'best' model selection
- Explicit linkage to ICH E9(R1), facilitating regulatory engagement and standardization

#### Limitations (Acknowledged by Authors)
- Does not provide simulation-based quantification of the magnitude of bias or misinterpretation risk when estimand and estimator are mismatched
- Limited discussion of uncertainty quantification: how standard errors and confidence intervals for conditional vs. unconditional effects should be computed and interpreted
- Brief treatment of precision dosing (MIPD) acknowledges conditional estimands are needed but does not fully resolve the tension between population-level unconditional labeling and individual-level conditional prediction
- No empirical case study demonstrating the practical application of the framework to a real regulatory submission

#### Limitations (Expert Review)
- The univariable estimator for unconditional effects (simple model with one covariate) may suffer from omitted variable bias if confounders exist, though this is less problematic for predictive than causal objectives
- FREM implementation, while theoretically elegant, requires specialized software and expertise that may limit adoption in routine regulatory settings
- The framework assumes linear (or log-linear) covariate-parameter relationships; extension to nonlinear covariate effects (e.g., threshold effects, spline-based relationships) is not addressed
- No guidance on handling time-varying covariates where conditional/unconditional distinctions become more complex
- The correlation structure between covariates is treated as fixed and known, without consideration of sampling variability in estimated correlations

#### Generalizability
The framework is broadly generalizable to pharmacometric covariate modeling across therapeutic areas, particularly where covariates are physiologically correlated (e.g., renal function markers, anthropometric measures, age-related variables). The principles extend to any setting where mechanistic understanding and clinical prediction represent distinct objectives. However, practical implementation depends on analyst sophistication and software availability. The framework is most immediately applicable to continuous covariates with approximately linear relationships; generalization to categorical covariates, interaction effects, and nonlinear relationships requires additional methodological development.

---

---

---

### Future Directions

---

### Expert Commentary

---

### Bottom Line
Practitioners should explicitly define whether their covariate analysis targets conditional ($mechanistic/isolated$) or unconditional ($total/clinical$) effects before selecting estimation methods. For mechanistic questions, use multivariable models with stepwise or scientific covariate selection. For clinical labeling and regulatory communication, use univariable models or FREM to obtain unconditional effects, or derive unconditional quantities via simulation from multivariable models. Always declare the estimand in forest plots and regulatory documents. Consider FREM when both estimands are needed from a single analysis.

---