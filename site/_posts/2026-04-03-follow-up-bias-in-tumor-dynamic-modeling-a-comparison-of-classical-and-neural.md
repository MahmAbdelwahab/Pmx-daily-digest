---
layout: post
title: "Follow-Up Bias in Tumor Dynamic Modeling: A Comparison of Classical and Neural-ODE Approaches"
date: 2026-04-03
authors: "David C. Turner et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "https://doi.org/10.1002/psp4.70239"
paper_type: generic
tags: [generic, qsp, oncology, regulatory, machine-learning]
excerpt_text: "This study demonstrates that classical tumor growth inhibition (TGI) models systematically overestimate tumor size when fitted to immature clinical trial data, with prediction bias exceeding $300\\%$ for some models at $25\\%$ follow-up truncation. In contrast, the deep learning-based Tumor Dynamic Neural-ODE (TDNODE) framework exhibited substantially lower bias across all truncation scenarios ($25$–$75\\%$ follow-up). These findings have critical implications for early-phase oncology decision-making, suggesting that traditional parametric models may lead to overly conservative Go/No-go decisions when used with incomplete data."
pdf_path: "/assets/digests/2026-04-03-follow-up-bias-in-tumor-dynamic-modeling-a-comparison-of-classical-and-neural/PMx_FollowUp_Bias_in_Tumor_Dynamic_Modeling__20260403.pdf"
retroactively_classified: true
---

### Quick Take
This study demonstrates that classical tumor growth inhibition (TGI) models systematically overestimate tumor size when fitted to immature clinical trial data, with prediction bias exceeding $300\%$ for some models at $25\%$ follow-up truncation. In contrast, the deep learning-based Tumor Dynamic Neural-ODE (TDNODE) framework exhibited substantially lower bias across all truncation scenarios ($25$–$75\%$ follow-up). These findings have critical implications for early-phase oncology decision-making, suggesting that traditional parametric models may lead to overly conservative Go/No-go decisions when used with incomplete data.

---

### Executive Summary
Turner et al. present a rigorous evaluation of prediction bias in tumor dynamic models using time-truncated data from $3,106$ non-small cell lung cancer patients across four phase III atezolizumab trials. By simulating early decision-making scenarios through $25\%$, $50\%$, and $75\%$ data truncation, the authors reveal that five established pharmacometric TGI models (Stein, Claret, Bonate, Moore, Wang) exhibit consistent positive bias in longitudinal predictions, particularly pronounced with limited follow-up. The Stein model showed extreme bias ($334\%$ relative prediction error at $25\%$ truncation), while the Neural-ODE-based TDNODE approach maintained robust performance ($61\%$ error) by learning data-driven patterns rather than enforcing parametric growth assumptions. This work challenges the default use of classical TGI models for interim analyses in immuno-oncology trials and positions deep learning as a viable alternative for early-phase dose optimization and Go/No-go decisions.

---

## ⚡ Methodological Snapshot
The analysis employed a time-truncation design mimicking real-world interim analyses, using data from four completed phase III trials (IMPower130, 131, 132, 150) in NSCLC. For each trial, total duration was defined from first dose to last scan, with artificial cutoffs at $25\%$, $50\%$, and $75\%$ of this duration creating 'immature' datasets. Models were fitted/trained only on 'seen' data (observations before cutoff) and evaluated against 'unseen' future observations. Five classical TGI models implemented in NONMEM (Stein, Claret, Bonate, Moore, Wang) with random effects on kinetic parameters were compared against TDNODE, a neural-ordinary differential equation framework using encoder-decoder architecture with L2 regularization. Performance was assessed via relative percent error (RPE), RMSE, and R², with weighted bootstrap ($500$ iterations) accounting for informative dropout.

---

## 🏗️ Structural Model Breakdown
The five classical TGI models share a common pharmacometric foundation as nonlinear mixed-effects models with distinct structural assumptions. The Stein model assumes unconstrained exponential tumor growth with drug-induced decay ($dT/dt = K_G \times T - $ drug effect), making it particularly susceptible to overestimating regrowth. The Claret model incorporates a resistance parameter moderating growth over time, while the Bonate, Moore, and Wang models vary in their parameterization of growth inhibition and drug effect terms. All models utilize exponential growth terms that assume inevitable tumor rebound, conflicting with observed durable responses in ICI therapy. TDNODE employs a fundamentally different architecture: a recurrent neural network encoder compresses patient history (baseline characteristics and longitudinal SLD measurements) into a latent state vector, which a neural-ODE decoder integrates forward in time to generate continuous tumor size trajectories without prespecified kinetic equations. This data-driven approach allows TDNODE to learn complex patterns including sustained stable disease without enforcing parametric growth assumptions.

---

### Detailed Methodological Analysis

#### Modeling Approach
Comparison of five established pharmacometric TGI models (Stein, Claret, Bonate, Moore, Wang) implemented as nonlinear mixed-effects models versus the Tumor Dynamic Neural-ODE (TDNODE) framework. Classical models use parametric differential equations with exponential growth/decay assumptions. TDNODE uses encoder-decoder architecture: recurrent encoder summarizes patient baseline and longitudinal SLD history into latent state; Neural-ODE decoder integrates latent dynamics forward to generate continuous tumor size trajectories without prespecified functional forms.

#### Data Sources
Pooled individual patient data from $3,106$ evaluable patients ($\geq 2$ on-study scans) across four randomized phase III trials (IMPower130, IMPower131, IMPower132, IMPower150) in non-small cell lung cancer, contributing $20,232$ sum of longest diameters (SLD) observations. Treatment arms included atezolizumab monotherapy, chemotherapy combinations, and control arms. Time-truncated datasets created at $25\%$, $50\%$, and $75\%$ of total trial duration to simulate immature data scenarios.

#### Estimation Methods
Classical TGI models: Nonlinear mixed-effects estimation in NONMEM (likely FOCE or FOCEI) with random effects on key kinetic parameters (e.g., growth rate $K_G$, drug effect parameters). TDNODE: Gradient-based optimization with L2 weight decay ($10^{-3}$), using neural ODE decoder with ODE solver integration for trajectory generation; training employed masking to prevent use of post-cutoff observations.

#### Model Evaluation
Primary metrics: Relative Percent Error (RPE) = $100 \times ((\text{Predicted} - \text{Observed})/(\text{Observed} + \varepsilon))$ where $\varepsilon = 1$ mm for zero SLD, Root Mean Squared Error (RMSE), and $R^2$. Evaluation performed on 'unseen' data (post-truncation observations). Sensitivity analysis: Weighted bootstrap ($500$ iterations) up-weighting patients with fewer scans to assess impact of informative dropout. Tumor dynamic patterns categorized into seven RECIST-like groups (IPR, SDP, SDM, PRP, PRM, CRP, CRM) to examine prediction error by response type.

#### Covariate Analysis
Not explicitly detailed as a primary focus; classical models included random effects on key kinetic parameters (growth and drug-effect rates) as standard NLME practice. TDNODE implicitly captures patient heterogeneity through the encoder network learning from baseline characteristics and longitudinal history without explicit covariate modeling.

---

### Scientific Context & Motivation
Tumor dynamic models are essential for Model-Informed Drug Development (MIDD) in oncology, particularly for dose optimization under FDA's Project Optimus. However, these models were historically developed for cytotoxic chemotherapy characterized by shrinkage-then-regrowth patterns, whereas modern immune checkpoint inhibitors (ICIs) often produce durable responses or prolonged stable disease. A critical unmet need is understanding how these models perform with truncated datasets typical of early-phase decision points. Previous studies have not systematically quantified follow-up bias across model structures or compared classical parametric approaches against flexible machine learning alternatives. This study addresses whether structural assumptions in classical TGI models create inductive bias when applied to immuno-oncology data with limited follow-up, potentially compromising early clinical development decisions.

---

### Statistical Rigor Assessment
The study demonstrates strong statistical rigor through its large sample size ($3,106$ patients, $20,232$ observations) and robust bootstrap methodology ($500$ iterations) for confidence interval estimation. The time-truncation design effectively simulates real-world interim analysis conditions while preserving the staggered enrollment patterns that create informative missingness. The weighted bootstrap sensitivity analysis appropriately addresses concerns about informative dropout, though the authors correctly note that prospective applications should use joint modeling rather than post-hoc weighting. The correlation analysis between parameter estimation error and prediction bias (Figure 5) provides mechanistic validation of the bias source. Limitations include the restriction to NSCLC/atezolizumab (limiting generalizability), the exclusion of early progressors ($\geq 2$ scans required), and the use of model-dependent 'ground truth' parameters. The bootstrap standard deviations reported in Table 2 indicate appropriate precision for comparative conclusions.

---

## 📊 Key Findings
The study's central finding is that classical TGI models exhibit moderate-to-high positive prediction bias when applied to truncated datasets, systematically overestimating future tumor sizes. At $25\%$ follow-up truncation, mean relative prediction errors ranged from $97\%$ (Claret) to $462\%$ (Bonate), with the Stein model showing $334\%$ error. In stark contrast, TDNODE maintained substantially lower errors across all scenarios: $61\%$ at $25\%$, $32\%$ at $50\%$, and $19\%$ at $75\%$ truncation. This bias stems from structural model assumptions—specifically, exponential growth terms predicting inevitable tumor regrowth—that conflict with the durable responses observed in approximately $60\%$ of atezolizumab-treated patients. Parameter estimation analysis revealed that growth rate parameters ($K_G$) estimated from truncated data deviate increasingly from 'ground truth' values (full-data estimates), and this parameter error correlates strongly with extrapolation bias ($p < 2.2 \times 10^{-16}$). Notably, the Claret model, which incorporates a resistance parameter moderating growth over time, showed the least bias among classical models but still overpredicted compared to TDNODE. All models struggled with complete response trajectories, though TDNODE showed relative improvement.

---

## 💡 Clinical & Regulatory Implications
The findings have immediate implications for early-phase oncology drug development, particularly under FDA's Project Optimus initiative emphasizing dose optimization. Classical TGI models applied to immature data may generate falsely pessimistic efficacy projections, potentially triggering premature discontinuation of effective therapies—especially problematic for immune checkpoint inhibitors where durable responses are common. The systematic overestimation of tumor size (positive bias) suggests that dose-selection decisions based on truncated data using traditional models may recommend unnecessarily high doses or inappropriately terminate promising agents. For regulatory submissions and internal decision-making, sponsors should consider implementing TDNODE or similar flexible approaches for interim analyses, while reserving classical models for mature datasets where their structural assumptions can be validated. Special attention is warranted for single-arm phase Ib/II studies where relative comparisons between arms are unavailable to mitigate follow-up bias.

---

### Strengths & Limitations

#### Strengths
- Large, high-quality dataset from four phase III randomized trials with rich longitudinal SLD measurements
- Innovative time-truncation design that realistically simulates interim decision-making scenarios
- Rigorous quantitative comparison across multiple established TGI models and a novel deep learning approach
- Appropriate sensitivity analysis for informative dropout using weighted bootstrap
- Mechanistic insight through correlation of parameter estimation error with prediction bias
- Clear clinical relevance to FDA Project Optimus and early-phase dose optimization decisions

#### Limitations (Acknowledged by Authors)
- Analyses restricted to NSCLC and atezolizumab program; generalizability to other tumor types and modalities unestablished
- Inverse-weighted bootstrap was retrospective sensitivity analysis; prospective applications should use joint modeling of tumor kinetics and survival
- TDNODE has limited mechanistic interpretability compared to classical models
- 'Ground truth' parameters remain model-dependent; full-data estimates may still be biased
- Exclusion of patients with $<2$ scans underrepresents early progressors

#### Limitations (Expert Review)
- Potential overfitting concerns with TDNODE despite L2 regularization; external validation not performed
- No comparison against more recent 'immune-response' TGI models that allow prolonged tumor control (excluded from analysis)
- Software/code not publicly available limiting reproducibility
- No assessment of uncertainty quantification in TDNODE predictions (prediction intervals vs point estimates)
- Potential selection bias in the four trials chosen (all successful phase III studies from one sponsor)

#### Generalizability
Findings are robust within NSCLC and the atezolizumab program, with eight diverse treatment arms including chemotherapy and immunotherapy combinations. However, generalizability to other tumor types, earlier-phase trials with different follow-up patterns, or non-ICI modalities remains unvalidated. The requirement for $\geq 2$ scans excludes early progressors, potentially underestimating the frequency of true rapid progression.

---

---

### Figures & Tables

- **Figure 1**: Schematic workflow comparing classical TGI models and TDNODE for tumor dynamic prediction, illustrating the time-truncation approach at $25\%$, $50\%$, and $75\%$ of trial duration.
  - *Significance*: Essential conceptual figure explaining the experimental design and how immature datasets were generated to simulate real-world interim analysis scenarios.
- **Figure 2**: Goodness-of-fit plots comparing observed versus predicted SLD for classical models and TDNODE on 'seen' training data (A) and 'unseen' extrapolation data (B) across truncation scenarios.
  - *Significance*: Demonstrates that while all models fit training data adequately, classical models systematically diverge from observations during extrapolation, showing increasing positive bias with shorter follow-up.
- **Figure 3**: Relative prediction error (RPE) distributions for seen (A) and unseen (B) data across all models and truncation levels, showing error magnitude and direction.
  - *Significance*: Quantifies the core finding that classical TGI models exhibit increasing positive bias with truncation, while TDNODE maintains low error across all scenarios.
- **Figure 4**: Individual patient trajectories for partial responders without progression, comparing Claret model predictions (A) versus TDNODE (B), showing solid lines for predictions and dashed lines for observed data post-truncation.
  - *Significance*: Illustrates the clinical manifestation of bias: classical models predict upward drift (regrowth) that does not occur, while TDNODE accurately tracks sustained responses.
- **Figure 5**: Correlation between Stein model growth parameter ($K_G$) estimation error and extrapolation bias across truncation levels, with regression line and confidence intervals.
  - *Significance*: Provides mechanistic insight showing that parameter estimation error in growth rates drives prediction bias, validating the hypothesis that truncated data yields misleading kinetic parameters.
- **Table 1**: Summary statistics for patient numbers, observations, and scan frequencies across the three truncation scenarios ($25\%$, $50\%$, $75\%$ follow-up).
  - *Significance*: Critical for understanding the changing sample sizes and data richness across scenarios, showing how staggered enrollment affects evaluable patient counts at early timepoints.
- **Table 2**: Quantitative performance metrics (Mean RPE, Median RPE, $R^2$, RMSE) for all models across truncation scenarios with bootstrap standard deviations.
  - *Significance*: Primary results table providing the quantitative evidence for TDNODE superiority, with Stein model showing $334\%$ mean RPE at $25\%$ truncation versus TDNODE's $61\%$.

---

### Future Directions
Several critical research directions emerge from this work. First, validation of TDNODE across diverse tumor types (beyond NSCLC) and therapeutic modalities (targeted therapies, ADCs, bispecifics) is essential to establish generalizability. Second, development of 'explainable AI' methods for TDNODE could bridge the gap between predictive performance and mechanistic interpretability, potentially enabling regulatory acceptance. Third, joint modeling of tumor dynamics and overall survival under time-truncated conditions would address the informative dropout limitation noted by the authors. Fourth, investigation of hybrid models combining mechanistic structure with neural network flexibility (e.g., neural ODEs with embedded pharmacological priors) may offer the best of both worlds. Finally, prospective validation in actual early-phase trials—comparing model predictions against eventual mature data—would confirm whether TDNODE truly prevents poor decision-making. The field also needs standardized benchmarking datasets and metrics for tumor dynamic model evaluation under truncation.

---

### Expert Commentary
This work represents a critical reality check for the pharmacometrics community regarding the operational characteristics of our most commonly deployed tumor dynamic models. The magnitude of bias observed—particularly the Stein model's $334\%$ error—is sobering and suggests that many historical dose decisions in immuno-oncology may have been compromised by model structural misspecification rather than true lack of efficacy. The study elegantly demonstrates the concept of 'inductive bias' in machine learning terms: classical TGI models encode strong priors about tumor kinetics (inevitable exponential regrowth) that are simply wrong for a substantial fraction of ICI-treated patients. The TDNODE results suggest that neural-ODE architectures may offer the flexibility needed for modern oncology while maintaining the longitudinal modeling capabilities we value. However, the field must grapple with the interpretability trade-off—TDNODE's black-box nature complicates mechanistic understanding and regulatory communication. A promising middle path may involve hybrid models that use neural networks to learn patient-specific deviations from mechanistic baselines. The weighted bootstrap approach for handling informative dropout is pragmatic but highlights the need for proper joint modeling of tumor size and survival in future work. This paper should prompt immediate re-evaluation of how we validate tumor dynamic models before using them for critical decisions.

---

### Bottom Line
This study provides compelling evidence that classical tumor growth inhibition models carry substantial risk of positive prediction bias when applied to immature clinical trial data, with the Stein model showing over $300\%$ relative error at $25\%$ follow-up truncation. Practicing pharmacometricians should exercise extreme caution when using these models for interim Go/No-go decisions or dose optimization in early-phase immuno-oncology trials, as the structural assumption of inevitable tumor regrowth conflicts with observed durable responses. The TDNODE framework offers a promising alternative that learns from data rather than enforcing parametric assumptions, though further validation across tumor types and mechanistic interpretation remain needed. For immediate application, teams should validate model performance under time-truncated conditions before deployment and consider hybrid approaches that combine mechanistic understanding with data-driven flexibility.

---

---

## 📊 Figures

![FIGURE 1: Schematic of the workflow in the comparison of Classical TGI models and TDNODE for tumor dynamic prediction. (A) Taking data from a clinical trial and based on t]({{ site.baseurl }}/assets/digests/2026-04-03-follow-up-bias-in-tumor-dynamic-modeling-a-comparison-of-classical-and-neural/figures/fig_01.jpg)

![FIGURE 2: Comparison of Classical TGI models and TDNODE predictions versus observations used in model estimation (goodness-of-fit on ‘seen’ training data) (A); Comparison]({{ site.baseurl }}/assets/digests/2026-04-03-follow-up-bias-in-tumor-dynamic-modeling-a-comparison-of-classical-and-neural/figures/fig_02.jpg)

![FIGURE 3: Comparison of Classical TGI models and TDNODE's relative error on seen (A) and unseen (B) clinical data. All models were fitted or trained using available estima]({{ site.baseurl }}/assets/digests/2026-04-03-follow-up-bias-in-tumor-dynamic-modeling-a-comparison-of-classical-and-neural/figures/fig_03.jpg)

![FIGURE 4: Comparison of the observed versus predicted SLD between Claret TGI model (A) and TNDODE (B) across the subset of patients who had a partial response (PR) with no]({{ site.baseurl }}/assets/digests/2026-04-03-follow-up-bias-in-tumor-dynamic-modeling-a-comparison-of-classical-and-neural/figures/fig_04.jpg)

![FIGURE 5: Relationship between extrapolation error and parameter estimate error for the Stein model across enrollment cuts. Extrapolation error defined as the median relat]({{ site.baseurl }}/assets/digests/2026-04-03-follow-up-bias-in-tumor-dynamic-modeling-a-comparison-of-classical-and-neural/figures/fig_05.jpg)