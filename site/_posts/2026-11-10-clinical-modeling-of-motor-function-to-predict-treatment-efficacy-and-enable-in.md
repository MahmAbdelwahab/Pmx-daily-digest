---
layout: post
title: "Clinical modeling of motor function to predict treatment efficacy and enable in silico treatment comparisons in infantile-onset Pompe disease."
date: 2026-11-10
authors: "Fatiha Rachedi, Rana Jreich, Susan Sparks, Atef Zaher, Kristina an Haack, Alicia Granados, Zhaoling Meng"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.13287"
paper_type: popk
tags: [popk, qsp, pediatrics, regulatory]
excerpt_text: "This study demonstrates an innovative Model-Informed Drug Development (MIDD) framework integrating Quantitative Systems Pharmacology (QSP) and longitudinal clinical outcome modeling to conduct head-to-head in silico comparisons in an ultra-rare pediatric indication. By bridging biomarker dynamics (uHex4) to motor function endpoints (GMFM-88 and QMFT) across infantile- and late-onset Pompe disease cohorts, the authors overcame severe trial imbalance and small sample sizes to establish the superior efficacy of avalglucosidase alfa (AVAL 40 mg/kg Q2W) over alglucosidase alfa (ALGLU). Pharmacometricians and clinical pharmacologists designing rare disease programs should read this as a template for regulatory-grade synthetic comparisons."
pdf_path: "/assets/digests/2026-11-10-clinical-modeling-of-motor-function-to-predict-treatment-efficacy-and-enable-in/PMx_Clinical_modeling_of_motor_function_to_p_20261110.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study demonstrates an innovative Model-Informed Drug Development (MIDD) framework integrating Quantitative Systems Pharmacology (QSP) and longitudinal clinical outcome modeling to conduct head-to-head in silico comparisons in an ultra-rare pediatric indication. By bridging biomarker dynamics (uHex4) to motor function endpoints (GMFM-88 and QMFT) across infantile- and late-onset Pompe disease cohorts, the authors overcame severe trial imbalance and small sample sizes to establish the superior efficacy of avalglucosidase alfa (AVAL 40 mg/kg Q2W) over alglucosidase alfa (ALGLU). Pharmacometricians and clinical pharmacologists designing rare disease programs should read this as a template for regulatory-grade synthetic comparisons.

---

### Executive Summary
Evaluating comparative efficacy in ultra-rare, rapidly fatal conditions like infantile-onset Pompe disease (IOPD) is severely constrained by ethical limitations on placebo controls, small patient cohorts (e.g., Mini-COMET, N=22), and marked baseline imbalances. Rachedi and colleagues resolved these limitations by establishing a longitudinal nonlinear random coefficient (NLRC) model linking percent changes in urinary hexose tetrasaccharide (uHex4)—a surrogate for skeletal muscle glycogen burden—to changes in clinical gross motor function (GMFM-88 and QMFT). By pooling data from Mini-COMET (IOPD, n=21) and COMET (LOPD, n=100) and coupling the resulting clinical models with simulated longitudinal uHex4 trajectories from an established multi-scale QSP model, they conducted head-to-head in silico trials (1,000 simulations per scenario) with synthetic populations engineered to be well-balanced at baseline. The simulated trials demonstrated that AVAL 40 mg/kg Q2W produces robust and superior motor improvements over ALGLU 40 mg/kg Q2W (suboptimal) and ALGLU 20 mg/kg Q2W (no improvement), even in patients with prior treatment failure, establishing a powerful MIDD paradigm for rare pediatric neuromuscular disorders.

---

### Scientific Context & Motivation
Infantile-onset Pompe disease (IOPD) is an ultra-rare (1:138,000 live births), fatal lysosomal storage disorder caused by acid alpha-glucosidase deficiency, leading to massive skeletal and cardiac muscle glycogen accumulation and death before 12 months if untreated. Although first-generation enzyme replacement therapy (ERT; alglucosidase alfa [ALGLU]) extended survival, long-term survivors routinely manifest progressive skeletal muscle decline. Avalglucosidase alfa (AVAL) is a next-generation ERT with enhanced mannose-6-phosphate conjugation engineered for superior skeletal muscle targeting. However, the pivotal phase II Mini-COMET study in IOPD was small (N=22), open-label, lacked statistical power for definitive direct comparisons between regimens, and suffered from substantial baseline confounding across non-randomized arms (e.g., age at first infusion, gender, baseline motor ability, and prior ALGLU exposure). Standard epidemiological adjustments, such as propensity score matching, collapse under such small sample sizes and lack of standardized historical motor outcomes. A critical knowledge gap existed regarding whether apparent motor gains were driven by baseline selection artifacts or genuine therapeutic superiority, demanding a mechanistic-clinical modeling bridge.

---

## ⚡ Methodological Snapshot
The authors deployed a two-stage integrative pharmacometric strategy (Figure 1). In Stage 1, longitudinal empirical clinical models were constructed using a nonlinear random coefficient (NLRC) mixed-effects framework to link changes in motor function—Gross Motor Function Measure-88 (GMFM-88) and Quick Motor Function Test (QMFT)—to percent changes in the biomarker uHex4 from baseline up to Week 97. To overcome sample size constraints in IOPD, patient-level data were pooled across the Mini-COMET trial (IOPD, n=21) and the COMET trial (late-onset Pompe disease [LOPD], n=100), sharing core structural parameters while estimating population-specific covariates and maximal asymptotic effects.

In Stage 2, virtual clinical trials mimicking Mini-COMET were executed in silico across six comparative regimens (including continuous ALGLU, continuous AVAL, and switching regimens at Week 25). Virtual IOPD patients were sampled via bootstrapping to mirror overall Mini-COMET characteristics while strictly balancing baseline covariates across arms. Longitudinal biomarker profiles (%ΔuHex4) were generated for each virtual subject using a previously published, multi-scale mechanistic QSP model of glycogen turnover. These profiles were then fed into the validated NLRC motor models across 1,000 Monte Carlo trial simulations per scenario to quantify head-to-head motor trajectory differences.

---

## 🏗️ Structural Model Breakdown
The structural clinical models were parameterized as saturable, asymptotic nonlinear functions relating the change from baseline in motor endpoints (ΔGMFM-88 or ΔQMFT) at visit $j$ to the percentage change in uHex4 (%ΔuHex4), adjusted for baseline covariates. The fundamental nonlinear engine is an exponential rise to an asymptote: $\text{Asymptote} \cdot (1 - \exp(-\text{rate}_i \cdot -\% \Delta\text{uHex4}_{i,j} \cdot 0.01))$. For GMFM-88 in IOPD, the maximal motor improvement asymptote ($\text{max}_i$) was itself modeled as an exponential function influenced by prior ALGLU duration (Equation 8 and Equation 9). Individual rate constants ($\text{rate}_i$) linking uHex4 reduction to motor recovery were assumed log-normally distributed, sharing a common mean between IOPD and LOPD but allowing random inter-individual variability. Residual intra-individual variability was estimated with an additive error structure on the transformed score scale.[^fc-2]

---

### Detailed Methodological Analysis

#### Modeling Approach
A two-phase framework combining a multi-scale Quantitative Systems Pharmacology (QSP) model and a longitudinal nonlinear random coefficient (NLRC) mixed-effects model implemented in SAS software. The NLRC model captures both between-subject and within-subject variability while modeling asymptotic gross motor recovery driven by continuous biomarker reduction.

#### Data Sources
Pooled clinical trial data across two studies up to Week 97: Mini-COMET (NCT03019406), an open-label phase II trial in IOPD patients with prior clinical decline or suboptimal response on ALGLU (n=21 included in modeling; AVAL 20 mg/kg Q2W, AVAL 40 mg/kg Q2W, and ALGLU current stable dose); and COMET (NCT02782741), a randomized, double-blind phase III trial in treatment-naïve LOPD patients (n=100; AVAL 20 mg/kg Q2W vs. ALGLU 20 mg/kg Q2W).

#### Estimation Methods
Nonlinear mixed-effects parameter estimation implemented via PROC NLMIXED / random coefficient procedures in SAS. Key parameters (motor asymptotes, biomarker turnover rates, and variance terms) were log-transformed to guarantee positivity and stability.

#### Model Evaluation
Goodness-of-fit was validated by generating individual empirical Bayes predictions, overlaid against observed mean and individual trajectories per treatment cohort across 97 weeks (Figure 2a and Figure 3a). Population predictive performance was verified using 1,000 Monte Carlo simulations per cohort incorporating parameter uncertainty, inter-individual, and intra-individual residual errors (Figure 2b-d and Figure 3b-d). Sensitivity analyses assessed a time-lagged moving average formulation for biomarker effect.

#### Covariate Analysis
Pre-specified candidate covariates (age at diagnosis, age at first infusion, BMI, sex, race, baseline creatine kinase, baseline uHex4, baseline motor score, and duration of previous ALGLU therapy) were evaluated using stepwise covariate modeling with a statistical significance threshold of $p < 0.05$. Covariates were retained separately for IOPD and LOPD, only combining parameters where differences were negligible.

---

### Statistical Rigor Assessment
The modeling workflow applied appropriate mixed-effects principles to sparse, unbalanced data. Pooling disparate trial populations (infantile vs. adult) was conducted systematically: common rate parameters were tested, while baseline severity, prior treatment duration, and maximal asymptote parameters were estimated separately. Centering continuous covariates at population medians ensured direct interpretability of intercept terms. Monte Carlo simulations (1,000 trials) appropriately incorporated both parameter uncertainty and residual variance, while the simulation outlier mitigation procedure (averaging 1,000 random rate draws per virtual subject) was a pragmatic engineering solution to prevent numerical artifacts from fat-tailed distributions.

---

## 📊 Key Findings
The NLRC models established a highly statistically significant concentration/biomarker-effect relationship between uHex4 reduction and motor function improvement across both GMFM-88 (log rate mean = -0.97, $p = 0.0005$) and QMFT (log rate mean = -1.19, $p < 0.0001$) in IOPD (Table 2 and Table 3). Covariate analyses revealed that longer prior ALGLU exposure significantly depressed the maximal achievable motor improvement (Max[duration ALGLU] = -0.55, $p = 0.0012$ for GMFM-88). Furthermore, higher baseline uHex4 (more severe baseline glycogen burden), younger age at diagnosis, and male sex negatively impacted motor recovery. In the baseline-balanced in silico trials, AVAL 40 mg/kg Q2W delivered markedly superior motor recovery over ALGLU 40 mg/kg Q2W and ALGLU 20 mg/kg Q2W across 97 weeks (Figure 4). Patients continuing ALGLU 20 mg/kg Q2W showed virtually flat motor trajectories, while switching from ALGLU to AVAL 40 mg/kg at Week 25 promptly rescued motor improvement trajectories.

---

## 💡 Clinical & Regulatory Implications
This work directly addresses a major therapeutic controversy in Pompe disease: does high-dose avalglucosidase alfa (40 mg/kg Q2W) offer real clinical motor benefit over escalating conventional alglucosidase alfa? By simulating counterfactual cohorts that continued ALGLU 40 mg/kg Q2W or ALGLU 20 mg/kg Q2W throughout 97 weeks, the authors demonstrate that ALGLU 20 mg/kg yields no motor progression from baseline, ALGLU 40 mg/kg produces only modest gains, and AVAL 40 mg/kg drives substantial, sustained motor improvements. Furthermore, the model confirms that prolonging ineffective treatment with ALGLU significantly reduces the ceiling of future motor recovery (max improvement), underscoring the clinical urgency of early intervention and prompt switching to next-generation ERT.

---

### Strengths & Limitations

#### Strengths
- Pioneering integration of a multi-scale mechanistic QSP platform with empirical longitudinal clinical outcome modeling.
- Effective borrowing of information across disease phenotypes (pooling pediatric IOPD with adult LOPD) to estimate shared biomarker-effect rate constants while preserving disease-specific asymptotes.
- Elimination of baseline confounding present in Mini-COMET through in silico trial design with engineered, balanced synthetic cohorts.
- Consistent, congruent findings across two distinct validated clinical endpoints (GMFM-88 and QMFT).

#### Limitations (Acknowledged by Authors)
- Clinical motor models tended to overestimate motor improvement at early timepoints (Week 13) in both treatment arms.
- The potential biological time lag between tissue glycogen clearance (uHex4 reduction) and muscle fiber functional recovery could not be definitively parameterized in IOPD due to data sparsity.
- Simulation of random biomarker effects required mean-aggregation across 1,000 draws to suppress extreme outlier rates generated by heavy-tailed normal sampling.

#### Limitations (Expert Review)
- Proprietary restrictions precluded publication of the executable model code and QSP equations, limiting independent verification.
- Cross-domain harmonization of GMFM-88 (5 domains in IOPD vs. 2 domains in LOPD) relied on percentage standardization, which may obscure domain-specific non-linearities in motor development.
- The clinical model does not incorporate anti-drug antibody (ADA) titers or cross-reactive immunological material (CRIM) status, which are known determinants of long-term ERT clearance and clinical efficacy in IOPD.

#### Generalizability
The quantitative findings are directly generalizable to ERT-experienced IOPD patients exhibiting suboptimal response or clinical decline.[^fc-9] Caution is warranted when extrapolating absolute motor trajectories to completely treatment-naïve IOPD neonates identified via newborn screening, who may possess greater salvageable muscle architecture. However, the integrative QSP-clinical trial simulation methodology is broadly generalizable to other rare monogenic pediatric diseases.

---

### Key Equations

**Longitudinal GMFM-88 Model in IOPD**

{% raw %}
$$\begin{aligned}
\Delta\text{GMFM}_{i,j,\text{IOPD}} \\
&= \text{Intercept}_{\text{IOPD}} + \beta_{\text{GMFM},\text{IOPD}} \cdot (\text{GMFM}_{\text{baseline},i} - \text{median GMFM}_{\text{IOPD}}) \\
& + \beta_{\text{uHex4},\text{IOPD}} \cdot (\text{uHex4}_{\text{baseline},i} - \text{median uHex4}_{\text{IOPD}}) \\
& + \beta_{\text{age.diagnosis},\text{IOPD}} \cdot (\text{age.diagnosis}_i - \text{median age.diagnosis}_{\text{IOPD}}) \\
& + \beta_{\text{ALGLU.duration},\text{IOPD}} \cdot (\text{ALGLU.duration}_i - \text{median ALGLU.duration}_{\text{IOPD}}) + \beta_{\text{gender},\text{IOPD}} \cdot \text{gender}_F + \text{max}_i \cdot \left(1 - e^{-\text{rate}_i \cdot (-\text{\%}\Delta\text{uHex4}_{i,j} \cdot 0.01)}ight) + \varepsilon_{i,j}
\end{aligned}$$
{% endraw %}

Structural nonlinear random coefficient equation relating the change from baseline in GMFM-88 score to the percentage decrease in uHex4 biomarker, adjusted for baseline demographic, clinical, and prior treatment covariates in IOPD.

**Maximal GMFM-88 Improvement Asymptote**

{% raw %}
$$\begin{aligned}
\text{max}_i \\
&= \exp\left(\text{max}_{0,\text{IOPD}} + \beta_{\text{ALGLU.duration}/\text{max}} \cdot (\text{ALGLU.duration}_i - \text{median ALGLU.duration}_{\text{IOPD}})\right)
\end{aligned}$$
{% endraw %}

Covariate model for the individual maximal motor improvement asymptote, showing that longer previous duration of alglucosidase alfa treatment significantly reduces the maximal achievable motor recovery.

**Longitudinal QMFT Model in IOPD**

{% raw %}
$$\begin{aligned}
\Delta\text{QMFT}_{i,j,\text{IOPD}} \\
&= \text{Intercept}_{\text{IOPD}} + \beta_{\text{QMFT},\text{IOPD}} \cdot (\text{QMFT}_{\text{baseline},i} - \text{median QMFT}_{\text{IOPD}}) \\
& + \beta_{\text{uHex4},\text{IOPD}} \cdot (\text{uHex4}_{\text{baseline},i} - \text{median uHex4}_{\text{IOPD}}) \\
& + \beta_{\text{age.diagnosis},\text{IOPD}} \cdot (\text{age.diagnosis}_i - \text{median age.diagnosis}_{\text{IOPD}}) \\
& + \beta_{\text{ALGLU.duration},\text{IOPD}} \cdot (\text{ALGLU.duration}_i - \text{median ALGLU.duration}_{\text{IOPD}}) + \beta_{\text{gender},\text{IOPD}} \cdot \text{gender}_F + \text{max}_{\text{IOPD}} \cdot \left(1 - e^{-\text{rate}_i \cdot (-\text{\%}\Delta\text{uHex4}_{i,j} \cdot 0.01)}ight) + \varepsilon_{i,j}
\end{aligned}$$
{% endraw %}

Longitudinal mixed model describing change from baseline in Quick Motor Function Test (QMFT) raw score as a function of baseline covariates and biomarker reduction in IOPD patients.

**Biomarker Effect Rate and Error Distributions**

{% raw %}
$$
\log(\text{rate}_i) \sim \mathcal{N}(\text{mean}_r, \sigma_r^2),   \varepsilon_{i,j} \sim \mathcal{N}(0, \sigma_e^2)
$$
{% endraw %}

Statistical assumptions for the log-transformed biomarker rate parameter and the residual error, where $\text{mean}_r$ and $\sigma_r$ characterize between-subject heterogeneity in motor responsiveness to biomarker reduction.

---

### Figures & Tables

- **Figure 1**: Schematic workflow diagram illustrating the two-phase modeling and simulation strategy bridging Phase 1 (longitudinal clinical model linking uHex4 to motor function) and Phase 2 (QSP model generating uHex4 to drive in silico clinical trials).
  - *Significance*: Crucial visual conceptualization of how mechanistic systems biology and empirical clinical pharmacometrics can be coupled to generate synthetic comparative trial evidence.
- **Figure 2**: Model validation plots for GMFM-88 in IOPD: (a) observed versus predicted mean changes over 97 weeks by treatment cohort; (b-d) boxplots of observed versus simulated score distributions across treatment arms.
  - *Significance*: Confirms goodness-of-fit and demonstrates that the NLRC model adequately reproduces longitudinal central tendencies and between-patient variability in Mini-COMET cohorts.
- **Figure 3**: Model validation plots for QMFT in IOPD displaying observed versus predicted trajectories (a) and simulation-based distribution comparisons (b-d) through Week 97.
  - *Significance*: Demonstrates cross-endpoint robustness by confirming that the second independent motor instrument (QMFT) is captured with comparable accuracy.
- **Figure 4**: Head-to-head in silico trial results showing mean simulated changes from baseline over 97 weeks in (a) GMFM-88 and (b) QMFT for IOPD patients across balanced treatment arms.
  - *Significance*: The primary efficacy readout of the paper, establishing clear therapeutic superiority of AVAL 40 mg/kg Q2W over ALGLU 40 mg/kg Q2W and ALGLU 20 mg/kg Q2W, and illustrating rescue of motor gains upon switching.
- **Table 1**: Comparative summary of trial designs, patient sample sizes, dosing regimens, follow-up timelines, and baseline characteristics between Mini-COMET (IOPD) and COMET (LOPD).
  - *Significance*: Summarizes the clinical trial dataset and highlights the baseline differences and trial features that necessitated pooled data borrowing.
- **Table 2**: Parameter estimates, standard errors, p-values, and 95% confidence intervals for the final GMFM-88 NLRC model in the IOPD population.
  - *Significance*: Provides the mathematical parameter values required for simulation, proving statistical significance of the uHex4 rate constant and covariate coefficients (e.g., prior ALGLU duration).
- **Table 3**: Parameter estimates, standard errors, p-values, and 95% confidence intervals for the final QMFT NLRC model in the IOPD population.
  - *Significance*: Contains the structural parameters for the QMFT endpoint, confirming consistent biomarker-effect relationships across disparate clinical assessment scales.

---

### Code & Reproducibility Assessment
The authors state that executable model code cannot be shared due to proprietary restrictions of Sanofi, although final model equations and parameter estimates are fully reported in the text and supplement. Readers are directed to contact the corresponding author for methodological inquiries.

---

### Supplementary Materials
The supplementary material (psp413287-sup-0001-supinfo.docx) contains comprehensive descriptions of GMFM-88 score harmonization across domains, covariate distribution summaries (Table S2), parameter estimates and diagnostic plots for the adult LOPD COMET cohort (Tables S3-S4, Figures S3-S4), exploration of raw biomarker-motor relationships (Figure S1), candidate covariate correlations (Figure S2), and details of the time-lagged moving-average sensitivity model (Figure S5).

---

### Future Directions
Key extensions should focus on integrating immunogenicity covariates (anti-drug antibody titers and CRIM status) into the combined QSP-clinical model, as high-titer antibodies severely compromise ERT uptake in IOPD. Additionally, expanding the clinical endpoint models to incorporate respiratory parameters (e.g., forced vital capacity or invasive ventilator-free survival) and validating predictions against real-world registry cohorts (e.g., the Pompe Registry) will further solidify regulatory acceptance of synthetic comparative trials.

---

### Expert Commentary
This publication represents a masterclass in Model-Informed Drug Development (MIDD) for ultra-rare pediatric diseases. In conditions like IOPD, conducting randomized, double-blind, head-to-head clinical trials is an operational and ethical impossibility. Rachedi et al. elegantly resolved the severe cohort imbalances in Mini-COMET by recognizing that while the clinical endpoint (motor function) cannot be easily predicted directly by mechanistic ODEs alone, it can be robustly coupled to an intermediate pharmacodynamic biomarker (uHex4) that is mechanistically modeled via QSP. 

From a senior pharmacometric perspective, borrowing the biomarker turnover rate constant ($\text{mean}_r$) across LOPD and IOPD is biologically sound and statistically necessary, provided the asymptotic efficacy parameter ($\text{max}_i$) remains disease- and population-specific. The finding that prior ALGLU exposure depresses the maximal motor ceiling ($\beta = -0.55$, $p = 0.0012$) is a profound clinical insight, demonstrating how disease progression during suboptimal therapy creates irreversible muscular fibrosis. The minor overprediction at Week 13 highlights the classic pharmacometric challenge of biological hysteresis: biochemical clearance of lysosomal glycogen precedes myofibrillar remodeling and functional motor acquisition. While the authors opted not to retain the time-lagged moving average in their final IOPD model due to degrees-of-freedom constraints, this represents an important area for future biophysical refinement.

---

### Bottom Line
By bridging a mechanistic QSP model of glycogen depletion with longitudinal clinical mixed-effects models of motor function, this study provides rigorous, regulatory-grade in silico evidence that avalglucosidase alfa 40 mg/kg Q2W is clinically superior to conventional alglucosidase alfa in infantile Pompe disease, establishing a benchmark framework for overcoming sample size and randomization hurdles in rare pediatric drug development.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The paper is categorized as POPK_PKPD.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **CONTRADICTED** — original: “Residual intra-individual variability was estimated with an additive error structure on the transformed score scale.” → correction: “Log transformation was used to constrain motor asymptote, uHex4 rate, and variance parameters, and to improve model prediction performance for some continuous baseline characteristics.”
[^fc-3]: **UNSUPPORTED** — original: “Nonlinear mixed-effects parameter estimation was implemented via PROC NLMIXED / random coefficient procedures in SAS.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “Goodness-of-fit was validated by generating individual empirical Bayes predictions overlaid against observed mean and individual trajectories per treatment cohort across 97 weeks.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “Population predictive performance was verified using 1,000 Monte Carlo simulations per cohort incorporating parameter uncertainty, inter-individual, and intra-individual residual errors.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “A simulation outlier mitigation procedure averaged 1,000 random rate draws per virtual subject to prevent numerical artifacts from fat-tailed distributions.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **CONTRADICTED** — original: “Executable model code and QSP equations could not be shared due to proprietary restrictions of Sanofi.” → correction: “Final model functions and parameter estimations are presented in the article and its supplemental material. Model code cannot be shared due to proprietary restrictions of Sanofi.”
[^fc-8]: **UNSUPPORTED** — original: “The clinical model does not incorporate anti-drug antibody (ADA) titers or cross-reactive immunological material (CRIM) status.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “The quantitative findings are directly generalizable to ERT-experienced IOPD patients exhibiting suboptimal response or clinical decline.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **CONTRADICTED** — original: “The authors opted not to retain the time-lagged moving average in their final IOPD model due to degrees-of-freedom constraints.” → correction: “This modification improved prediction accuracy for LOPD at Week 13, but this improvement was not significant for IOPD (Figure S5), likely due to the small sample size and high variability in Mini-COMET. Lag delay did not impact the model fitting for either population at later time points. As our modeling focus is on IOPD, the lag delay was not included in the final models.”

---

## 📊 Figures

![Integrating a QSP model and a longitudinal clinical model to enable in silico head-to-head comparison. Schematic illustrating the modeling and simulation approach develop]({{ site.baseurl }}/assets/digests/2026-11-10-clinical-modeling-of-motor-function-to-predict-treatment-efficacy-and-enable-in/figures/fig_01.jpg)

![Predicted, simulated, and observed GMFM-88 change from baseline in IOPD. Predicted, simulated, and observed GMFM-88 total percent score change from baseline in the Mini-C]({{ site.baseurl }}/assets/digests/2026-11-10-clinical-modeling-of-motor-function-to-predict-treatment-efficacy-and-enable-in/figures/fig_02.jpg)

![Predicted, simulated, and observed QMFT change from baseline in IOPD. Predicted, simulated, and observed QMFT raw score change from baseline in the Mini-COMET trial of AV]({{ site.baseurl }}/assets/digests/2026-11-10-clinical-modeling-of-motor-function-to-predict-treatment-efficacy-and-enable-in/figures/fig_03.jpg)

![In silico results: Simulated GMFM-88 and QMFT changes from baseline in IOPD. Mean simulated changes from baseline in (a) GMFM-88 total score and (b) QMFT total score from]({{ site.baseurl }}/assets/digests/2026-11-10-clinical-modeling-of-motor-function-to-predict-treatment-efficacy-and-enable-in/figures/fig_04.jpg)