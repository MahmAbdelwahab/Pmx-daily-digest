---
layout: post
title: "Formalizing method choice: a data-driven selection of mechanistic models for predicting human heart drug partitioning"
date: 2026-09-29
authors: "Ulaszek S, Lisowski B, Jesionek M, Wiśniowska B, Polak S"
journal: "J Pharmacokinet Pharmacodyn 53, 56 (2026)"
doi: "10.1007/s10928-026-10057-4"
paper_type: methodology
tags: [methodology, machine-learning]
excerpt_text: "This paper proposes a hybrid mechanistic–ML workflow that selects among three published tissue-composition models (Poulin–Theil, Rodgers–Rowland, Schmitt) for predicting human heart-to-plasma partition coefficients, using a regression-based selector trained on compound descriptors. On a curated 55-compound human heart dataset, the random forest selector (logMAE 0.900) did not beat the strongest standalone baseline (Poulin–Theil, logMAE 0.875), but it provides a transparent, reproducible rule for method choice and was demonstrated prospectively on transthyretin stabilizers. The main value is formalizing model selection rather than improving numerical accuracy."
pdf_path: "/assets/digests/2026-09-29-formalizing-method-choice-a-data-driven-selection-of-mechanistic-models-for/PMx_Formalizing_method_choice_a_datadriven_s_20260929.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper proposes a hybrid mechanistic–ML workflow that selects among three published tissue-composition models (Poulin–Theil, Rodgers–Rowland, Schmitt) for predicting human heart-to-plasma partition coefficients, using a regression-based selector trained on compound descriptors. On a curated 55-compound human heart dataset, the random forest selector (logMAE 0.900) did not beat the strongest standalone baseline (Poulin–Theil, logMAE 0.875), but it provides a transparent, reproducible rule for method choice and was demonstrated prospectively on transthyretin stabilizers. The main value is formalizing model selection rather than improving numerical accuracy.

---

### Executive Summary
This paper presents a hybrid mechanistic–AI/ML workflow for predicting the human heart-to-plasma partition coefficient (Kp,heart). Three established mechanistic tissue-composition models — Poulin–Theil (PT), Rodgers–Rowland (R&R), and Schmitt — were implemented without recalibration, and a regression-based selector (random forest, XGBoost, ridge, or linear regression) was trained on physicochemical, ADME, and PK descriptors to predict which mechanistic method would yield the lowest absolute log-error for a given compound. Using a curated human whole-heart dataset (n=55 compounds) with repeated stratified 5-fold cross-validation, the random forest selector achieved logMAE 0.900 and GMFE 2.46, slightly worse than the strongest standalone baseline (PT: logMAE 0.875, GMFE 2.40) but better than R&R (logMAE 1.58) and far better than Schmitt (logMAE 5.09). The selector's main contribution is not numerical superiority but a transparent, reproducible, data-driven rule for method choice, demonstrated prospectively on tafamidis and acoramidis (transthyretin stabilizers), where PT was selected and propagated into a PBPK model showing marked differences in predicted cardiac exposure across Kp choices.

---

### Scientific Context & Motivation
Tissue-to-plasma partition coefficients (Kp) are critical parameters in PBPK modeling, quantifying steady-state tissue-to-plasma concentration ratios. Multiple mechanistic tissue-composition models (Poulin–Theil, Rodgers–Rowland, Schmitt) have been proposed, but no single method is uniformly optimal across compounds and tissues — making Kp estimation a model-selection problem as much as a calculation problem. Prior work (Yun et al., 2014) demonstrated a decision-tree framework for algorithm selection, but it was not heart-specific and used a single decision tree. This study addresses the gap by building a heart-specific, regression-based selector trained on human whole-heart data, motivated by the scarcity of curated human tissue-partitioning data and the need for reproducible, data-driven method choice in cardiac exposure modeling. The prospective application to transthyretin stabilizers (tafamidis, acoramidis) is clinically relevant given the role of cardiac drug exposure in transthyretin amyloid cardiomyopathy.

---

## ⚡ Methodological Snapshot
The workflow combines three established mechanistic tissue-composition models (Poulin–Theil, Rodgers–Rowland, Schmitt) with a regression-based AI/ML selector. For each compound, all three mechanistic Kp,heart values are computed using fixed physiological parameters from the original publications (no recalibration). The selector is trained to predict the expected absolute log-error of each mechanistic method from compound descriptors (physicochemical, ADME, PK), then selects the method with the lowest predicted error. Four regression backends were compared: random forest, XGBoost, ridge regression, and ordinary linear regression. The selector preserves mechanistic interpretability — the equations remain intact — while using empirical pattern recognition to formalize a priori method choice. The final RF-based workflow was applied prospectively to transthyretin stabilizers (tafamidis, acoramidis) and propagated into a whole-body PBPK model to examine the impact of Kp choice on predicted cardiac exposure.

---

## 📐 Statistical Framework
The statistical framework is a regression-based meta-learning approach. The target variables are method-specific absolute log-errors e_m = |log(Kp,m + ε) − log(Kp,obs + ε)| for each mechanistic method m ∈ {PT, R&R, Schmitt}. Separate regression models are trained to predict these errors from compound descriptors, and the final method is selected via argmin. This formulation avoids direct classification and preserves the mechanistic equations. The oracle class — the method with the lowest observed error — is used only for retrospective evaluation, not prospectively. Evaluation uses repeated stratified 5-fold cross-validation (10 repetitions) with stratification on the oracle class, and preprocessing (median imputation, factor-level encoding) is fit on training folds only to prevent leakage. Performance metrics include balanced accuracy (mean recall across oracle classes, chosen to reduce sensitivity to class imbalance), Cohen's κ (chance-corrected agreement), logMAE, GMFE, and logCCC (concordance with the line of identity). The binomial test against a 1/3 random-choice baseline assesses whether selection accuracy exceeds chance. Key assumptions: steady-state conditions for all observations (rarely explicitly reported in source studies), fixed physiological tissue-composition parameters from original publications, and computationally predicted (ADMETlab 3.0, Simcyp) rather than measured descriptors.

---

### Estimator Behavior
The selector is a regression-based meta-estimator: it predicts the expected absolute log-error of each mechanistic method and selects the argmin. Bias: the selector is strongly biased toward the majority PT class (44/55 oracle assignments), yielding high raw accuracy (0.818) but low chance-corrected agreement (median Cohen's κ ≈ 0 for RF), indicating that apparent agreement is largely driven by class imbalance. Efficiency: RF achieved the lowest median test logMAE (0.898) among backends, but the gain over PT baseline (0.875) is negligible. Convergence/stability: backend ranking was sensitive to resampling design — a single-split framework favored a different backend than repeated stratified 5-fold CV — underscoring the importance of repeated evaluation at this sample size. The oracle gap (logMAE 0.703 vs selector 0.900) quantifies the remaining selection-error headroom.

---

### Validation Design
Internal validation used repeated stratified 5-fold cross-validation with 10 repetitions, stratified on the oracle class (the mechanistic method with lowest observed absolute log-error per compound). Within each split, preprocessing (median imputation for numeric predictors, factor-level encoding with 'Unknown' for unseen levels) was fit on training folds only and transferred to evaluation folds to prevent leakage. Out-of-fold predictions were pooled across all repetitions (550 held-out predictions). Backend ranking was based primarily on median CV balanced accuracy against the oracle, with median Cohen's κ and logMAE as secondary criteria. The oracle benchmark (retrospective best-method assignment) served as an upper bound. Numerical agreement was assessed via logMAE, MAE, RMSE, GMFE, and logCCC (concordance correlation coefficient on log-transformed values). A binomial test against a 1/3 random-choice baseline assessed whether selection accuracy exceeded chance. No independent external test set was used; the prospective tafamidis/acoramidis application is illustrative only. The authors note that a single-split framework proved unstable for backend ranking, motivating the repeated-CV design — a key methodological finding in itself.

---

### Comparison to Alternatives
The workflow extends the decision-tree framework of Yun et al. (2014) by replacing a single decision tree with a regression-based selector that predicts method-specific log-errors and picks the argmin. Unlike pure QSAR/ML approaches (e.g., Handa et al. repeated random forest) that predict Kp directly, this hybrid keeps mechanistic equations intact and uses ML only for method selection. Compared to empirical tissue-scaling approaches (Yau et al., Ning et al.) that leverage preclinical data, this workflow is restricted entirely to human data, which is both a strength (no cross-species translation error) and a limitation (severe data scarcity). The selector did not beat the best standalone baseline (PT) numerically, but it provides a transparent, reproducible selection rule. The oracle benchmark (logMAE 0.703) defines the theoretical ceiling, indicating substantial room for improvement in method selection.

---

### Implementation Guidance
The workflow is implemented in R 4.4.2 using randomForest, xgboost, and an in-house ridge implementation. For a new compound: (1) obtain isomeric SMILES and query ADMETlab 3.0 for descriptors (clogP, clogD, pKa, fu, Vdss, TPSA, MW, HBD/HBA, etc.); (2) predict blood-to-plasma ratio with Simcyp v25 (or equivalent); (3) compute Kp,heart with all three mechanistic models using fixed physiological parameters from the original publications; (4) feed descriptors to the trained RF selector to predict method-specific log-errors and select the argmin. Computational cost is trivial (55-compound training set, four backends). Key practical caveats: preprocessing (median imputation, factor-level encoding) must be fit on training folds only to avoid leakage; the selector is calibrated to the current benchmark's class distribution and should be refit if the chemical space shifts substantially; PT is a sensible default when the selector is uncertain.

---

## 📊 Key Findings
Across 55 human whole-heart compounds, Poulin–Theil was the strongest standalone mechanistic model (logMAE 0.875, GMFE 2.40, logCCC 0.402), while Rodgers–Rowland (logMAE 1.58, GMFE 4.85) and especially Schmitt (logMAE 5.09, GMFE 162.17) underperformed markedly. The random forest selector achieved logMAE 0.900 and GMFE 2.46 — slightly worse numerically than PT but far better than the other baselines — and did not materially outperform the best baseline. The oracle benchmark (logMAE 0.703) defines the theoretical ceiling. Oracle-class distribution was heavily imbalanced (44 PT, 9 R&R, 2 Schmitt), and the selector's high raw accuracy (0.818) was largely driven by this imbalance, as reflected in near-zero median Cohen's κ for RF. Backend ranking was sensitive to resampling design, with repeated stratified 5-fold CV (10 repetitions) favoring RF where a single-split design had favored a different backend. Prospectively, the selector chose PT for both tafamidis (Kp,heart = 5.86) and acoramidis (Kp,heart = 0.593), and PBPK simulation showed that the three alternative Kp values produced markedly different predicted cardiac AUC while systemic plasma AUC remained similar.

---

### Strengths & Limitations

#### Strengths
- Hybrid architecture preserves mechanistic interpretability while adding a data-driven selection layer — a principled middle ground between pure mechanistic and pure ML approaches
- Regression-based error prediction formulation (rather than direct classification) is elegant and interpretable
- Methodologically rigorous evaluation: repeated stratified 5-fold CV, balanced accuracy and Cohen's κ alongside raw accuracy, oracle benchmark as theoretical ceiling
- Honest reporting: authors explicitly acknowledge the selector did not beat the PT baseline and interpret the oracle gap cautiously
- Reproducible: full dataset, descriptors, and analysis files provided as supplementary materials
- Demonstrates the important methodological lesson that backend ranking is sensitive to resampling design, advocating repeated CV for small datasets
- Prospective application to clinically relevant transthyretin stabilizers with PBPK propagation showing downstream impact of Kp choice

#### Limitations (Acknowledged by Authors)
- Small benchmark dataset (n=55) — repeated CV improves internal use but does not eliminate uncertainty from limited sample size
- Substantial class imbalance (44 PT, 9 R&R, 2 Schmitt) makes minority-class recall estimates unstable and depresses chance-corrected agreement
- Physiological and tissue-composition values were fixed per original publications, which may confound comparative evaluation (citing Utsey et al.)
- Prospective stabilizer application demonstrates workflow use but does not constitute external validation
- Schmitt's poor performance may reflect implementation assumptions (acidic phospholipid treatment, lipophilicity-derived K_nPL surrogate) rather than a fundamental flaw in the framework
- Selector did not materially outperform the strongest standalone baseline (PT) in numerical error

#### Limitations (Expert Review)
- The regression-based selector predicts errors but does not quantify prediction uncertainty in the error estimates themselves — no confidence intervals on method selection
- The argmin rule is a hard selection; a soft/weighted combination of mechanistic predictions might reduce variance and improve numerical accuracy
- Descriptors are computationally predicted (ADMETlab 3.0, Simcyp) rather than measured, introducing a second layer of prediction error that is not propagated into the analysis
- The steady-state assumption for all observations is potentially problematic given that steady-state conditions were rarely explicitly reported in source studies
- No external validation set was used; the repeated CV is entirely internal, and the authors acknowledge the earlier single-split framework was unstable
- The binomial test against 1/3 random choice is a weak baseline — a more meaningful comparison would be against a 'always choose PT' strategy, which would achieve high accuracy given the class distribution
- The PBPK illustration treats the heart as a distribution-only compartment without local clearance, limiting its clinical realism

#### Generalizability
The workflow is conceptually generalizable to other tissues and compound classes, but the current implementation is calibrated to a small (n=55), heavily PT-dominated human heart dataset. The selector's decisions are strongly constrained by the benchmark's class distribution, and its performance on chemically diverse compounds outside the training space is untested. The prospective tafamidis/acoramidis application is illustrative, not external validation. The fixed physiological parameters from original publications may advantage or disadvantage specific models depending on their sensitivity to particular inputs (phospholipid terms, pH partitioning, extracellular protein assumptions).

---

### Key Equations

**Poulin–Theil Kp (Berezhkovskiy-corrected)**

{% raw %}
$$
K_{p,\text{heart}}=\frac{\left(f_{NL,t}+0.3f_{NP,t}\right)P+0.7f_{NP,t}+V_{W,t}/f_{ut}}{\left(f_{NL,p}+0.3f_{NP,p}\right)P+0.7f_{NP,p}+V_{W,p}/f_{up}}
$$
{% endraw %}

Berezhkovskiy-corrected Poulin–Theil heart-to-plasma partition coefficient, where f_NL and f_NP are neutral lipid/phospholipid fractions, V_W are water terms, f_u are unbound fractions, and P is the octanol-water partition coefficient.

**Rodgers–Rowland Kpu (acids/weak bases)**

{% raw %}
$$
K_{pu}=f_{EW}+\frac{X}{Y}f_{IW}+\frac{Pf_{NL}+\left(0.3P+0.7\right)f_{NP}}{Y}+K_{aPR}[PR]_T
$$
{% endraw %}

Rodgers–Rowland unbound tissue-to-plasma water partition coefficient as a sum of extracellular water, intracellular water, lipid, and extracellular protein-binding contributions, with ionization terms X and Y.

**Schmitt tissue-to-plasma partition coefficient**

{% raw %}
$$
K_{t:p}=\left(\frac{F_{int}}{f_{u,int}}+\frac{F_{cell}}{f_{u,cell}}\right)f_{u,p}
$$
{% endraw %}

Schmitt interstitial/cellular tissue-composition framework, where F_int and F_cell are volume fractions and f_u are unbound fractions in interstitial space, cells, and plasma.

**Method-specific log-error**

{% raw %}
$$
e_m=\left|\log\left(K_{p,m}+\epsilon\right)-\log\left(K_{p,\text{obs}}+\epsilon\right)\right|
$$
{% endraw %}

Absolute log-scale prediction error for mechanistic method m, with epsilon = 1e-12 for numerical stability; this is the target variable the selector regresses on.

**Selector argmin rule**

{% raw %}
$$
\hat{m}=\arg\min_m \hat{e}_m
$$
{% endraw %}

Selector decision rule: choose the mechanistic method m with the lowest predicted log-error, formalizing a priori method selection.

---

### Figures & Tables

- **Figure 1**: Schematic of the overall workflow: three mechanistic Kp calculators (PT, R&R, Schmitt) fed by compound descriptors and fixed physiological parameters, with the ML selector choosing the best method per compound.
  - *Significance*: Defines the hybrid architecture and the decision flow from compound descriptors to selected Kp,heart prediction.
- **Figure 2**: Scatter/bar visualization of all three mechanistic predictions plus the selector-assigned value per compound, derived from repeated cross-validation evaluations.
  - *Significance*: Illustrates the distribution of selector choices (dominated by PT) and the spread of mechanistic predictions across the 55-compound dataset.
- **Figure 3**: Comparison of predicted cardiac AUC (day-7 dosing interval, 144–168 h) in the tafamidis PBPK model using the three alternative Kp,heart estimates.
  - *Significance*: Demonstrates that Kp,heart method choice propagates directly into organ-level exposure predictions, motivating the need for principled method selection.
- **Table 1**: Fold-level selector performance metrics (balanced accuracy, Cohen's κ, logMAE) for the four backends across repeated stratified 5-fold CV.
  - *Significance*: Provides the basis for backend ranking and selection of random forest as the final selector.
- **Table 2**: Pooled out-of-fold comparison of the RF selector vs the three mechanistic baselines and the oracle benchmark (logMAE, GMFE, logCCC).
  - *Significance*: The central quantitative result: selector (logMAE 0.900) slightly underperforms PT baseline (0.875) but far outperforms R&R (1.58) and Schmitt (5.09); oracle ceiling is 0.703.

---

### Code & Reproducibility Assessment
The curated human heart Kp dataset, compound descriptor files, and files required to reproduce the mechanistic Kp calculations and AI/ML-based model-selection analysis are provided as supplementary materials (Online Resources 1, 2, and 4). All analyses were performed in R 4.4.2 using readr, dplyr, tidyr, randomForest, xgboost, ggplot2, and an in-house ridge implementation. The workflow is fully reproducible from the supplied files, though the ADMETlab 3.0 and Simcyp v25 descriptors are generated via external tools.

---

### Supplementary Materials
Online Resource 1 (docx): complete list of ADMETlab 3.0 descriptors used for model training, CV dataset construction, and prospective tafamidis Kp prediction. Online Resource 2 (csv): human heart physiological and tissue-composition parameters used in the mechanistic models. Online Resource 4 (docx): additional supplementary material (likely including detailed results or workflow documentation).

---

### Future Directions
The most direct path to improvement is expanding the human heart Kp benchmark dataset, ideally through multi-organ harmonization with standardized tissue composition (as advocated by Utsey et al.) to enable cross-organ learning. Incorporating physiological variability (rather than fixed tissue-composition parameters) and better descriptors for phospholipid- and pH-dependent partitioning would likely improve minority-class (R&R, Schmitt) discrimination. External validation on an independent held-out set — not just prospective illustration — is essential. The regression-based selector framework could also be extended to other tissues and to continuous method blending (e.g., weighted averaging of mechanistic predictions) rather than hard selection.

---

### Expert Commentary
This is an honest and methodologically careful paper that resists the temptation to overclaim. The key insight — that Kp estimation is as much a model-selection problem as a calculation problem — is well motivated, and the regression-based selector formulation (predicting method-specific errors, then argmin) is a clean, interpretable alternative to direct classification. The authors' decision to report balanced accuracy and Cohen's κ alongside raw accuracy is exemplary, as is their candid acknowledgment that the selector did not beat the PT baseline. The main scientific limitation is structural: with 44/55 compounds oracle-assigned to PT, there is simply insufficient signal to learn when R&R or Schmitt would be preferable. The Schmitt result (GMFE 162) is a cautionary tale about implementation sensitivity — the model's poor performance likely reflects parameter-quality dependence (e.g., lipophilicity-derived K_nPL surrogates) rather than a fundamental flaw in the Schmitt framework. The repeated-CV finding that backend ranking was unstable under single-split designs is a valuable methodological lesson for the field. Future work should focus on expanding the human benchmark (perhaps via multi-organ harmonization as in Utsey et al.) and on better descriptors for phospholipid- and pH-dependent partitioning.

---

### Bottom Line
For human whole-heart Kp prediction, Poulin–Theil remains the strongest standalone mechanistic baseline (logMAE 0.875, GMFE 2.40), and the proposed ML-based selector does not materially improve numerical error (RF logMAE 0.900, GMFE 2.46). Its practical value lies in formalizing, standardizing, and making reproducible the otherwise subjective choice among competing mechanistic calculators, rather than in outperforming the best baseline. Practitioners should treat the selector as a decision-support layer, not a replacement for mechanistic modeling, and should be aware that its performance is constrained by a small (n=55), heavily PT-dominated benchmark.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “Restriction to human data is a strength because it avoids cross-species translation error.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **CONTRADICTED** — original: “For a new compound, the first step is to obtain isomeric SMILES and query ADMETlab 3.0 for descriptors.” → correction: “For new compounds, the workflow remains unchanged: three Kp,heart values are first calculated using the mechanistic models under fixed physiological assumptions, after which the trained selector identifies the method predicted to yield the lowest error”
[^fc-3]: **UNSUPPORTED** — original: “The second step is to predict blood-to-plasma ratio with Simcyp v25 (or equivalent).” → correction: “For new compounds, the workflow remains unchanged: three Kp,heart values are first calculated using the mechanistic models under fixed physiological assumptions, after which the trained selector identifies the method predicted to yield the lowest error”
[^fc-4]: **CONTRADICTED** — original: “The third step is to compute Kp,heart with all three mechanistic models using fixed physiological parameters from the original publications.” → correction: “For new compounds, the workflow remains unchanged: three Kp,heart values are first calculated using the mechanistic models under fixed physiological assumptions, after which the trained selector identifies the method predicted to yield the lowest error”
[^fc-5]: **CONTRADICTED** — original: “The fourth step is to feed descriptors to the trained RF selector to predict method-specific log-errors and select the argmin.” → correction: “For new compounds, the workflow remains unchanged: three Kp,heart values are first calculated using the mechanistic models under fixed physiological assumptions, after which the trained selector identifies the method predicted to yield the lowest error”
[^fc-6]: **UNSUPPORTED** — original: “Computational cost is trivial because of the 55-compound training set and four backends.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “The selector should be refit if the chemical space shifts substantially.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “The regression-based error prediction formulation is elegant and interpretable.” → correction: “This formulation preserves interpretability, because the mechanistic equations remain unchanged, while allowing data-driven adjustment for systematic method-specific differences in predictive performance.”
[^fc-9]: **UNSUPPORTED** — original: “The regression-based selector predicts errors but does not quantify prediction uncertainty in the error estimates themselves.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “There are no confidence intervals on method selection.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “A soft/weighted combination of mechanistic predictions might reduce variance and improve numerical accuracy.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “Computationally predicted descriptors introduce a second layer of prediction error that is not propagated into the analysis.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “The steady-state assumption for all observations is potentially problematic.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “The binomial test against 1/3 random choice is a weak baseline.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “A more meaningful comparison would be against an 'always choose PT' strategy.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “The workflow is conceptually generalizable to other tissues and compound classes.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **UNSUPPORTED** — original: “Online Resource 4 contains additional supplementary material.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-18]: **UNSUPPORTED** — original: “Multi-organ harmonization with standardized tissue composition could enable cross-organ learning.” → correction: “No direct evidence in source text.”
[^fc-19]: **UNSUPPORTED** — original: “Incorporating physiological variability rather than fixed tissue-composition parameters would likely improve minority-class discrimination.” → correction: “No direct evidence in source text.”
[^fc-20]: **UNSUPPORTED** — original: “Better descriptors for phospholipid- and pH-dependent partitioning would likely improve minority-class discrimination.” → correction: “No direct evidence in source text.”
[^fc-21]: **UNSUPPORTED** — original: “External validation on an independent held-out set is essential.” → correction: “No direct evidence in source text.”
[^fc-22]: **UNSUPPORTED** — original: “The regression-based selector framework could be extended to other tissues.” → correction: “No direct evidence in source text.”
[^fc-23]: **UNSUPPORTED** — original: “The regression-based selector framework could be extended to continuous method blending rather than hard selection.” → correction: “No direct evidence in source text.”
[^fc-24]: **UNSUPPORTED** — original: “The authors' decision to report balanced accuracy and Cohen's κ alongside raw accuracy is exemplary.” → correction: “No direct evidence in source text.”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-09-29-formalizing-method-choice-a-data-driven-selection-of-mechanistic-models-for/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-09-29-formalizing-method-choice-a-data-driven-selection-of-mechanistic-models-for/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-09-29-formalizing-method-choice-a-data-driven-selection-of-mechanistic-models-for/figures/fig_03.png)