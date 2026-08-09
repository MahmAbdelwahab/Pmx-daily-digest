---
layout: post
title: "Sex-Related Differences in Physiologically-Based Biopharmaceutics Modeling"
date: 2026-08-09
authors: "Chavarría-Rojas M, Lorier M, Fotaki N, Murshed M, Ibarra M"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(8):e70310"
doi: "10.1002/psp4.70310"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This paper is essential reading for pharmacometricians using PBPK/PBBM platforms to support oral drug development and virtual bioequivalence. It reveals that default virtual populations in PK-Sim, GastroPlus, and Simcyp do not incorporate functional sex-specific gastrointestinal physiology (e.g., pH, transit times), which can lead to inaccurate predictions for drugs sensitive to GI conditions. Using ketoprofen as a case study, the authors demonstrate that user-defined adjustment of gastric emptying and pH dramatically improves female PK predictions, offering practical guidance for more representative PBPK modeling."
pdf_path: "/assets/digests/2026-08-09-sex-related-differences-in-physiologically-based-biopharmaceutics-modeling/PMx_SexRelated_Differences_in_Physiologicall_20260809.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper is essential reading for pharmacometricians using PBPK/PBBM platforms to support oral drug development and virtual bioequivalence. It reveals that default virtual populations in PK-Sim, GastroPlus, and Simcyp do not incorporate functional sex-specific gastrointestinal physiology (e.g., pH, transit times), which can lead to inaccurate predictions for drugs sensitive to GI conditions. Using ketoprofen as a case study, the authors demonstrate that user-defined adjustment of gastric emptying and pH dramatically improves female PK predictions, offering practical guidance for more representative PBPK modeling.

---

### Executive Summary
Physiologically based pharmacokinetic (PBPK) and biopharmaceutics (PBBM) modeling are essential for predicting drug absorption, yet sex-specific gastrointestinal (GIT) physiology remains poorly integrated into virtual populations. The authors systematically assessed three major PBPK platforms (PK-Sim, GastroPlus, Simcyp) and found that while anatomical sex differences (organ dimensions, volumes) are included by default, functional parameters such as regional pH, fluid volumes, transit times (except colonic transit in Simcyp) and enzyme/transporter expression are not differentiated by sex. Using ketoprofen (BCS II, weak acid, enteric-coated tablet) as a case study, they developed and verified male PBPK models and extrapolated to females with default settings, resulting in overpredicted $C_{max}$ (errors >30% in PK-Sim and GastroPlus) and underestimated $T_{max}$ (errors >27% across all platforms). Refining female GIT parameters—especially gastric emptying time (GET) and segmental pH—reduced prediction errors to <20% and produced profiles that better reflected observed sex differences. The study concludes that user-defined adjustments are needed to capture sex-specific GI physiology and highlights the importance of such refinements for virtual bioequivalence assessments and regulatory submissions.

---

### Scientific Context & Motivation
PBPK/PBBM models are heavily used in regulatory submissions for drug absorption predictions, but sex is often treated as a covariate on clearance/volume only, ignoring physiological differences in the gastrointestinal tract (GIT) that affect absorption. Extensive literature shows that women have slower gastric emptying, lower gastric acid secretion (higher pH in fasted state), longer colonic transit, and different intestinal enzyme/transporter expression compared to men. These differences can alter the rate and extent of absorption, especially for pH-sensitive or modified-release formulations. This study addresses the knowledge gap of how current PBPK platforms incorporate these sex-specific functional GIT parameters into their default virtual populations. It challenges the assumption that anatomical scaling alone (size, weight) captures sex differences and provides a case-study demonstration of the magnitude of prediction error that can arise from neglecting them.

---

## ⚡ Methodological Snapshot
This study uses a systematic platform assessment combined with a case-study PBPK modeling approach. The authors first evaluated three commercial PBPK platforms (PK-Sim, GastroPlus, Simcyp) for how they handle sex-specific gastrointestinal parameters by reviewing default virtual population settings and qualitative comparisons to published literature. They then developed male PBPK models for ketoprofen in each platform using literature and in-house data, verified them, and extrapolated to females using both default and user-refined parameters (gastric emptying time, pH, intestinal transit). The impact of these parameter adjustments on predicted PK metrics ($C_{max}$, $AUC$, $T_{max}$) was quantified using AAFE and prediction error. This combination of qualitative platform audit and quantitative case study provides a practical demonstration of the need for sex-specific physiological input in PBPK/PBBM.

---

## 🏗️ Structural Model Breakdown
The PBPK models were whole-body physiologically based models implemented in the specific platforms: PK-Sim (using MoBi), GastroPlus (ACAT™), and Simcyp (ADAM). Each model includes compartments for the gastrointestinal tract (stomach, duodenum, jejunum, ileum, colon) with transit times, fluid volumes, and pH. Ketoprofen is modeled as a monoprotic weak acid (pKa 4.45) with pH-dependent solubility. Key drug parameters include molecular weight 254.28, log P 3.3, intestinal permeability $8.4 \times 10^{-4}$ cm/s, and plasma protein binding 99% (fraction unbound 1%). Disposition is described by liver plasma clearance (1.01 mL/min/kg) with tissue partitioning computed using the Rodgers-Rowland method (PK-Sim) or Rodgers-Leahy-Rowland (GastroPlus). The enteric-coated formulation is represented by a Weibull dissolution function at pH 6.8 with an explicit lag time (GastroPlus, Simcyp) or a dummy formulation that tracks gastric emptying in PK-Sim. Virtual populations were generated using platform-specific demographic distributions (age 18–50, weight, BMI) matched for BMI between sexes.

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole-body PBPK models were developed independently in PK-Sim (with MoBi), GastroPlus, and Simcyp. Each platform used its standard absorption model (ACAT/ADAM) with a first-order or Weibull dissolution formulation. Ketoprofen was modeled as a monoprotic weak acid (pKa 4.45) with pH-dependent solubility. Enteric-coated tablet release was simulated using lag time (GastroPlus/Simcyp) or dummy formulation tracking (PK-Sim) to represent gastric emptying time. The Rodgers-Rowland method was used for tissue partition coefficients. Models included linear plasma clearance (liver) and were run as single-dose simulations.

#### Data Sources
For model development, published clinical data: one IV study (20 men, 9 women) and three oral studies (solution and immediate-release capsule) in men from the literature. For model verification, an in-house crossover study of 100 mg enteric-coated ketoprofen under fasting conditions in 8 men and 7 women (one woman did not complete). Drug parameters (molecular weight, log P, pKa, solubility at multiple pH, intestinal permeability, plasma protein binding, liver clearance) were taken from literature. Platform-specific implementations used default physiological values for 18–50-year-old adults, with virtual populations of 100 individuals per sex, matched for BMI.

#### Estimation Methods
Model parameters not directly available were optimized manually or via built-in algorithms. In PK-Sim, partition coefficients were optimized; gastrointestinal parameters (GET) were optimized for male data using a manual/iterative approach (exact optimizer not specified). In GastroPlus and Simcyp, similar manual refinement was applied. Models were initially built using literature parameters and then fitted to the in-house male data to refine GET. No full Bayesian or FOCE approaches were used; this is consistent with typical PBPK model calibration.

#### Model Evaluation
Model performance was evaluated using predicted/observed ratios of $C_{max}$, $AUC_t$, and $T_{max}$, and absolute average fold error (AAFE). Goodness-of-fit was also assessed visually via predicted vs. observed concentration–time profiles. For the initial male model, 64% of predictions were within 1.25-fold, 86% within 1.5-fold, and 98% within 2-fold (Figure 3). After sex-specific refinement, prediction errors for $C_{max}$ and $T_{max}$ fell below 20% (AAFE <1.24) for all platforms.

#### Covariate Analysis
No formal covariate analysis was performed. Instead, the authors used documented sex differences in GIT physiology from literature (e.g., GET, pH, transit times) to set parameter values for virtual populations. The effect of sex was isolated by matching body weight and BMI ranges across male and female virtual populations, and by adjusting only GIT-related parameters. Model refinement focused on parameters most relevant to enteric-coated formulations (GET, pH) and was guided by predicted vs. observed $T_{max}$ and $C_{max}$.

---

### Statistical Rigor Assessment
The study uses a modest in-house clinical dataset (n=7–8 per sex) for model verification, which is appropriately acknowledged. The platform assessment is qualitative but systematic, drawing on a comprehensive literature review. Model evaluation uses standard ratios and AAFE, and the authors report prediction error distributions (1.25-, 1.5-, 2-fold) for the initial model, indicating acceptable performance. Sensitivity of the predictions to parameter adjustments is explored indirectly by comparing default vs. refined scenarios. However, no formal uncertainty or confidence intervals are reported for the predictions, and the optimization of GET/pH is manual, potentially introducing subjective bias. The lack of a formal statistical comparison between male and female observed data (beyond descriptive) limits the strength of conclusions about sex differences. The authors correctly state that the small sample size and sampling schedule (designed for average bioequivalence) may have limited precision of $T_{max}$ and $C_{max}$ estimates.

---

## 📊 Key Findings
All three PBPK platforms incorporate sex differences in anatomical GIT dimensions (stomach, small/large intestine lengths, volumes) but fail to include defaults for functional parameters: gastric, duodenal, jejunal, and colonic pH; fluid volumes; gastric emptying time (GET) and small intestinal transit time; and most enzyme/transporter expression—except Simcyp's optional CYP3A4 difference and colonic transit sex-specific setting. In the ketoprofen case study, male models performed well (errors <20%) but default female extrapolation produced $C_{max}$ errors >30% (PK-Sim AAFE=1.33, GastroPlus AAFE=1.31) and $T_{max}$ errors >27% (AAFE>1.37), with profiles nearly superimposable on male predictions. Refining female GIT parameters: GET set to 120–180 min (vs. male 90 min), gastric pH to 2.79, duodenal pH to 7.16, jejunal pH to 7.10, and in PK-Sim increasing SITT by 1.5-fold, reduced all prediction errors to <20% (e.g., $C_{max}$ AAFE dropped to 1.06–1.24, $T_{max}$ AAFE to 1.01–1.12). The refined models better captured observed female $C_{max}$ (7.51 mg/L) and $T_{max}$ (4 h), which the default settings could not reproduce.

---

### Strengths & Limitations

#### Strengths
- Systematic and transparent assessment of three major PBPK platforms regarding sex-specific GIT parameters, filling an important knowledge gap.
- Use of a well-characterized BCS II drug (ketoprofen) and enteric-coated formulation to mechanistically illustrate the impact of GET and pH on absorption.
- Consistent model development workflow across platforms, allowing cross-platform comparison.
- Clear demonstration that user-defined adjustments improve prediction accuracy, with quantified AAFE improvements.
- Relevant to regulatory decisions, particularly virtual bioequivalence, where sex effects are often overlooked.
- Authors acknowledge AI usage for language and provide reproducible methodology.

#### Limitations (Acknowledged by Authors)
- Virtual populations restricted to adults aged 18–50 years, excluding menopausal and geriatric populations.
- Small in-house dataset (n=7–8 per sex) and sampling schedule that may have limited precision of $C_{max}$, $T_{max}$, and $AUC$ estimates.
- Model refinement of GET and pH was based on ability to describe observed data rather than independent objective measures.
- Only one drug (ketoprofen) and one formulation (enteric-coated tablet) was tested.
- Intraindividual variability (e.g., menstrual cycle) was not incorporated.

#### Limitations (Expert Review)
- The manual optimization of GET and pH values could be considered data-driven calibration rather than true physiological refinement; the values (120–180 min) may not be representative of all women and may lack generalizability.
- The study does not compare predicted female PK against a M&S (mean squared error) metric; it only uses point ratios. It would benefit from confidence intervals or bootstrap analysis.
- The platform assessment relies on qualitative judgments; a more quantitative analysis with actual parameter values would strengthen the claims.
- The authors did not evaluate the impact of sex differences on distribution or elimination processes, though ketoprofen's clearance showed minor sex differences that were confounded by body weight.
- The virtual population generation assumes normal distributions; correlations between GIT parameters and other covariates were not fully accounted for.

#### Generalizability
The findings are directly applicable to BCS II weak acids and enteric-coated formulations where gastric emptying and pH drive release. The platform assessment is broad and likely applies to other drugs. However, the case study uses a single drug and a small dataset, so the magnitude of prediction error may vary for other compounds, doses, or formulations. The authors emphasize that adjustments are drug- and formulation-specific, and that the approach should be replicated with more diverse scenarios.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the four-stage workflow for developing and evaluating the ketoprofen PBPK model across all platforms: (1) literature-based male model, (2) refinement with in-house male data focusing on GET, (3) extrapolation to females using default settings, (4) refinement of female GIT parameters.
  - *Significance*: Provides the central methodological framework and clarifies how the case study was structured to isolate the impact of sex-specific GIT parameter adjustments.
- **Figure 2**: Predicted vs. observed plasma concentration–time profiles of ketoprofen from the three platforms after initial male model development (solution, capsule, and IV data). Black symbols show observed data; lines show predictions.
  - *Significance*: Demonstrates the adequacy of the base male PBPK models before sex extrapolation, establishing a benchmark for assessing later female simulations.
- **Figure 3**: Model evaluation results: forest plots of predicted/observed ratios and other goodness-of-fit metrics for PK-Sim, GastroPlus, and Simcyp across clinical studies.
  - *Significance*: Confirms that the male models meet typical acceptance criteria (98% of predictions within 2-fold), supporting the credibility of the subsequent extrapolation work.
- **Figure 4**: Plasma concentration–time profiles in males (blue), females with default settings (orange), and females with refined GIT parameters (green) after 100 mg enteric-coated ketoprofen. Panels correspond to (A) PK-Sim, (B) GastroPlus, (C) Simcyp.
  - *Significance*: Key visual evidence that default female simulations nearly overlap male profiles, while refined parameters better differentiate sex-specific exposure and timing, illustrating the main thesis of the study.
- **Table 1**: Table listing drug-specific physicochemical, permeability, solubility, clearance, and model settings used for ketoprofen in all platforms.
  - *Significance*: Provides the essential drug input parameters required for reproducibility and shows the consistent parameterization across platforms.
- **Table 2**: Qualitative comparison of literature-reported sex-specific GIT parameters (pH, transit times, bile salts, organ dimensions) and their inclusion in default settings of PK-Sim, GastroPlus, and Simcyp.
  - *Significance*: Core evidence for the platform assessment, showing which functional parameters are missing by default and where user adjustments are allowed.
- **Table 3**: Predicted vs. observed $C_{max}$, $AUC_t$, and $T_{max}$, with Pred/Obs ratios and AAFE for male, female-default, and female-refined simulations across all three platforms.
  - *Significance*: Quantifies the improvement from GIT parameter refinement, reducing prediction errors from >30% to <20% for key PK metrics.
- **Tables S1–S6 and Figure S1**: Supplementary tables: Table S1 lists the clinical studies used; Tables S2–S4 provide model evaluation metrics; Tables S5–S6 report predicted PK parameters; Figure S1 shows relative prediction error plots.
  - *Significance*: Provide additional validation details and predictivity assessment, supporting the rigorous reporting of the case study.

---

### Supplementary Materials
Supplementary materials include Table S1 (list of clinical studies used for model development), Tables S2–S4 (model evaluation metrics per platform), Tables S5–S6 (predicted PK parameters), and Figure S1 (relative prediction error plots for PK metrics). These provide additional validation data and support the reproducibility of the analyses.

---

### Future Directions
The authors note that their virtual populations were limited to adults 18–50 years, excluding menstrual cycle phases, menopausal and geriatric populations. Future work should incorporate intraindividual variability (e.g., hormonal phases) and larger female datasets. Additional case studies with different drug classes (e.g., weak bases, BCS III/IV) and formulations (IR, MR) would test the generalizability of GET and pH adjustments. There is also a need for platform developers to update default virtual populations to include sex-specific functional GIT parameters, and for regulatory qualification of such updates. Virtual bioequivalence submissions would benefit from explicit guidance on sex-stratified simulations.

---

### Expert Commentary

---

### Bottom Line
This study demonstrates that default PBPK platform settings do not adequately represent sex-specific gastrointestinal functional physiology. Using ketoprofen as a BCS Class II weak acid in an enteric-coated formulation, the authors show that ignoring sex differences in gastric emptying time and pH leads to overprediction of female $C_{max}$ and underestimation of $T_{max}$, nearly overlapping male profiles. User-defined adjustments of GIT parameters (GET, pH, SITT) improve predictive accuracy (>30% error reduced to <20%) and biological plausibility. PBPK/PBBM practitioners should critically evaluate default virtual populations when modeling subpopulations, especially for modified-release formulations and virtual bioequivalence applications, and proactively incorporate sex-specific physiological data.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-08-09-sex-related-differences-in-physiologically-based-biopharmaceutics-modeling/figures/fig_01.jpg)

![General workflow of the ketoprofen physiologically-based pharmacokinetic model utilized in all PBPK platforms.]({{ site.baseurl }}/assets/digests/2026-08-09-sex-related-differences-in-physiologically-based-biopharmaceutics-modeling/figures/fig_02.jpg)

![Predicted and observed plasma concentration–time profiles of ketoprofen from GastroPlus (left column), PK-Sim (middle column) and Simcyp (right column). Black so]({{ site.baseurl }}/assets/digests/2026-08-09-sex-related-differences-in-physiologically-based-biopharmaceutics-modeling/figures/fig_03.jpg)

![Ketoprofen model evaluation. (A) Forest plots: Solid line represents a predicted/observed ratio equal to 1, and each clinical study ratio is shown as a single da]({{ site.baseurl }}/assets/digests/2026-08-09-sex-related-differences-in-physiologically-based-biopharmaceutics-modeling/figures/fig_04.jpg)

![Plasma concentration–time profiles of ketoprofen following a single oral dose of 100 mg in (A) PK-Sim, (B) GastroPlus, and (C) Simcyp (n= 100). The solid-colored]({{ site.baseurl }}/assets/digests/2026-08-09-sex-related-differences-in-physiologically-based-biopharmaceutics-modeling/figures/fig_05.jpg)