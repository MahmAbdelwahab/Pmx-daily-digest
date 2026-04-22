---
layout: post
title: "Uncertainty Undermines the Validity of Antimicrobial Pharmacokinetic-Pharmacodynamic Models"
date: 2026-03-22
authors: "Woodward AP"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026, (epub ahead of print)"
doi: "https://doi.org/10.1007/s10928-026-10023-0"
paper_type: generic
tags: [generic, dose-response, regulatory]
excerpt_text: "This essay is essential reading for antimicrobial pharmacometricians, clinical pharmacologists, and regulatory scientists involved in breakpoint setting or model-informed precision dosing (MIPD). Woodward demonstrates through rigorous simulation that current PK/PD workflows—which rely on point estimates for MIC values, PK parameters, and exposure targets—systematically overstate confidence in predictions, leading to potentially unreliable dosing recommendations and clinical breakpoints. The paper argues compellingly for Bayesian uncertainty propagation as a necessary standard in antimicrobial pharmacology."
pdf_path: "/assets/digests/2026-03-22-uncertainty-undermines-the-validity-of-antimicrobial-pharmacokinetic/PMx_Uncertainty_undermines_the_validity_of_a_20260322.pdf"
retroactively_classified: true
---

### Quick Take
This essay is essential reading for antimicrobial pharmacometricians, clinical pharmacologists, and regulatory scientists involved in breakpoint setting or model-informed precision dosing (MIPD). Woodward demonstrates through rigorous simulation that current PK/PD workflows—which rely on point estimates for MIC values, PK parameters, and exposure targets—systematically overstate confidence in predictions, leading to potentially unreliable dosing recommendations and clinical breakpoints. The paper argues compellingly for Bayesian uncertainty propagation as a necessary standard in antimicrobial pharmacology.

---

### Executive Summary
Woodward presents a critical analysis of uncertainty quantification in antimicrobial PK/PD modeling, demonstrating that technical uncertainty (epistemic and aleatoric) propagating through MIC measurement, population PK parameter estimation, and empirical exposure targets fundamentally undermines the validity of point-estimate-based decision making. Through simulated case studies emulating amikacin, vancomycin, and ciprofloxacin development programs, the author shows that intrinsic MIC measurement error contributes approximately twofold uncertainty, PK parameter uncertainty is substantial with typical sample sizes, and exposure thresholds derived from decision-tree methods exhibit wide sampling variability. When these uncertainties are jointly propagated using Bayesian methods, predictions for probability of target attainment (PTA), clinical breakpoints, and individual dose requirements exhibit meaningful uncertainty that spans multiple twofold dilutions, challenging the current standard of reporting single point estimates without uncertainty intervals.

---

## ⚡ Methodological Snapshot
The author employs simulation-based case studies designed to emulate published antimicrobial development datasets (amikacin in humans, ciprofloxacin in dogs, vancomycin exposure-response). For each scenario, Bayesian hierarchical models are implemented in Stan to characterize uncertainty distributions. The workflow systematically layers uncertainty sources: first PK parameter uncertainty alone, then incorporating MIC measurement error via a novel logistic-mollified uniform distribution (to handle interval-censored microdilution data), and finally adding exposure-target uncertainty derived from bootstrap distributions of decision-tree thresholds. The analysis contrasts point estimates (posterior medians) against full posterior predictive distributions and tolerance distributions (quantifying uncertainty in population percentiles such as the 10th percentile). For individual dose optimization, the author simulates therapeutic drug monitoring (TDM) scenarios with sparse sampling to illustrate how individual PK parameter uncertainty affects dose recommendations.

---

## 🏗️ Structural Model Breakdown
The pharmacokinetic structural model is a standard two-compartment disposition with first-order absorption for oral dosing: \frac{dA_a}{dt} = -k_a \cdot A_a for the absorption compartment, and \frac{dA_c}{dt} = k_a \cdot A_a - \left(\frac{CL}{V_c} + \frac{Q}{V_c}\right) \cdot A_c + \frac{Q}{V_p} \cdot A_p and \frac{dA_p}{dt} = \frac{Q}{V_c} \cdot A_c - \frac{Q}{V_p} \cdot A_p for central and peripheral compartments, respectively. Between-subject variability is modeled log-normally: CL_i = CL_{pop} \cdot e^{\eta_{CL,i}} with \eta \sim N(0, \omega^2). The MIC measurement model uses a logistic-mollified uniform distribution to represent interval censoring from twofold dilution series, combining a uniform component between adjacent dilutions with logistic 'softened' edges (scale C=0.05) to avoid boundary constraints. The exposure-response model is a 4-parameter log-logistic: E = E_{min} + (E_{max} - E_{min})/(1 + (ED_{50}/X)^H), where X represents the PK/PD index (typically AUC/MIC).

---

### Detailed Methodological Analysis

#### Modeling Approach
Bayesian hierarchical modeling using Stan (v2.38) via R (v4.5.2). Structural models include two-compartment pharmacokinetics with first-order absorption for extravascular dosing, log-normal between-subject variability (BSV) on all PK parameters, and proportional residual error. Exposure-response relationships modeled using 4-parameter log-logistic functions constrained for monotonicity. Novel application of logistic-mollified uniform distributions to represent interval-censored MIC observations (accounting for twofold dilution series imprecision).

#### Data Sources
Simulated data designed to emulate: (1) Amikacin PK in humans (Kato et al. design) with 25 or 100 subjects and varying BSV magnitudes; (2) Ciprofloxacin PK in dogs (Papich design) with rich sampling; (3) Vancomycin exposure-response (Moise-Broder et al. design); (4) Ciprofloxacin exposure-response (Forrest et al. design). Simulations include realistic sparse sampling for TDM scenarios (2 observations per subject at 30 min and 24h).

#### Estimation Methods
Full Bayesian inference via MCMC (Hamiltonian Monte Carlo) in Stan. Weakly informative priors specified for PK parameters (log-scale locations) and BSV scales. For exposure thresholds, decision stump analysis using MKclass package with bootstrap resampling (2000 iterations) to approximate sampling distributions. Individual PK parameters for MIPD obtained via full posterior sampling rather than MAP estimation to properly characterize uncertainty.

#### Model Evaluation
Posterior predictive checks including visualization of concentration-time profiles with credible regions (Figure 2, Figure 5, Figure 6), goodness-of-fit plots (supplementary figures), and verification of simulated parameter distributions against true generating values (supplementary Figure 1). Comparison of predictive distributions (for new observations) versus tolerance distributions (for quantiles of the population). Assessment of uncertainty impact through sequential addition of error sources (PK only → PK+MIC → PK+MIC+target).

#### Covariate Analysis
Not explicitly addressed in this methodological essay; focus remains on uncertainty in structural parameters and measurement error rather than covariate effects. Allometric scaling or other covariate-parameter relationships were not incorporated in the simulated examples, allowing focus on pure uncertainty propagation effects.

---

### Scientific Context & Motivation
Antimicrobial pharmacology relies on a sequential modeling workflow: MIC measurement → PK prediction → exposure-response (PD) assessment → clinical decision (breakpoints or dosing). Each component introduces technical uncertainty, yet current practice focuses almost exclusively on point estimation, ignoring uncertainty propagation. This represents a critical knowledge gap given that model-informed precision dosing (MIPD) and breakpoint determinations directly inform patient care and regulatory decisions. The essay challenges the prevailing paradigm that subjective expert review adequately accounts for uncertainty without formal quantitative propagation. It distinguishes between epistemic uncertainty (reducible with more data) and aleatoric uncertainty (between-subject variability), noting that the distinction, while philosophically debatable, remains practically useful. The work builds on Colin et al.'s demonstration of confidence intervals for PTA but extends it to comprehensive uncertainty propagation across all model components including the exposure targets themselves.

---

### Statistical Rigor Assessment
The methodological approach is statistically sophisticated and appropriate for the stated objectives. The use of Bayesian inference allows natural uncertainty propagation through joint posterior distributions. Sample sizes in simulations (n=25-100 for population PK, n=200 for exposure-response) reflect realistic clinical study dimensions, making the uncertainty assessments externally valid. The author appropriately acknowledges that bootstrap distributions for thresholds are approximations of posterior uncertainty and that sampling variation in the simulated data represents a realistic limitation. The sequential addition of uncertainty sources (PK → MIC → target) provides clear attribution of uncertainty contributions. However, the essay focuses exclusively on technical parameter uncertainty and does not fully address structural model uncertainty (e.g., whether log-logistic is the correct exposure-response form, or whether two-compartment is the correct PK structure), which the author acknowledges as a limitation.

---

## 📊 Key Findings
The intrinsic error from MIC measurement via standard twofold dilution series contributes approximately twofold uncertainty (e.g., a reported MIC of 2 mg/L implies a true value distribution between ~1-2 mg/L). When propagated to AUC/MIC ratios, this generates ~95% probability intervals spanning 98.5-203 h for a nominal 100 h target. Population PK parameter uncertainty is substantial with typical sample sizes (n=25) and decreases appropriately with larger samples (n=100) or increases with greater between-subject variability. Exposure thresholds derived from decision-tree (CART) methods exhibit wide bootstrap distributions; for example, vancomycin 'optimal' thresholds varied from 268 h to 531 h across resamples. When all uncertainty sources are propagated simultaneously for breakpoint determination, probability of target attainment (PTA) functions show broad credible regions that overlap substantially across MIC values, diminishing confidence in specific breakpoint selections. For individual dose optimization, incorporating full uncertainty (PK parameters, MIC measurement, and exposure target) results in dose recommendations spanning multiple twofold intervals (e.g., 5-25 mg/kg), challenging the precision of MIPD when targets are empirically derived.

---

## 💡 Clinical & Regulatory Implications
Current clinical breakpoints and dosing recommendations based on point estimates may be overconfident and potentially misleading. The approximately twofold error in MIC measurement alone suggests that individual dose determination based on nominal MIC values may systematically understate antimicrobial activity. For breakpoint setting, the substantial overlap in PTA credible intervals across MIC values suggests that precise categorization of isolates as 'susceptible' vs 'resistant' is more uncertain than currently practiced. For model-informed precision dosing (MIPD), the finding that optimal dose ranges span multiple twofold intervals when uncertainty is properly quantified suggests that current MIPD implementations may provide false precision. The author implies that dose optimization using MAP Bayesian estimates without uncertainty quantification, as commonly practiced, is insufficient for reliable decision-making. Regulatory implications include the need for uncertainty statements in submission packages and labeling, and reconsideration of the evidentiary standards for PK/PD-based breakpoints.

---

### Strengths & Limitations

#### Strengths
- Novel and critical focus on uncertainty quantification in antimicrobial PK/PD, a neglected but fundamental aspect of model validity
- Rigorous Bayesian methodological framework enabling full uncertainty propagation through joint posterior distributions
- Practical simulation designs based on real published studies (Kato, Moise-Broder, Forrest, Papich), ensuring external validity
- Systematic decomposition of uncertainty sources (PK parameters, MIC measurement, exposure targets) allowing attribution of influence
- Novel application of mollified uniform distributions to handle interval-censored MIC data
- Comprehensive visualization of uncertainty through predictive and tolerance distributions
- Publicly available code and data supporting full reproducibility

#### Limitations (Acknowledged by Authors)
- Simulation-based approach rather than analysis of real clinical trial data
- Focus on technical parameter uncertainty rather than structural model uncertainty (e.g., correct PK model, correct exposure-response functional form)
- Analysis of single data sources rather than evidence synthesis across multiple studies
- Limited exploration of covariate effects on uncertainty
- Computational burden of full Bayesian MIPD may limit immediate clinical implementation

#### Limitations (Expert Review)
- The bootstrap approach for threshold uncertainty may not fully capture the joint uncertainty structure of exposure-response models
- Logistic-mollified uniform scale parameter (C=0.05) selection is somewhat subjective; sensitivity to this choice not fully explored
- Does not address between-laboratory variability in MIC testing, which may exceed the intrinsic twofold error
- Limited discussion of how to communicate uncertainty to clinicians without inducing decision paralysis
- Does not evaluate alternative experimental designs (e.g., adaptive sampling) that might reduce uncertainty more efficiently

#### Generalizability
The findings generalize broadly to antibacterial drug development and clinical use, particularly for drugs where PK/PD indices (AUC/MIC, Cmax/MIC, %T>MIC) drive dosing decisions. The principles apply across species (human and veterinary) and drug classes (fluoroquinolones, aminoglycosides, glycopeptides demonstrated). However, the specific magnitude of uncertainty will vary by drug, study design, and laboratory methods. The core message—that uncertainty propagation is essential—is universally applicable to antimicrobial pharmacometrics.

---

### Key Equations

**Two-Compartment PK Model (Central Compartment)**

$$
\frac{dA_c}{dt} = k_a \cdot A_a - \left(\frac{CL}{V_c} + \frac{Q}{V_c}\right) \cdot A_c + \frac{Q}{V_p} \cdot A_p
$$

Describes the rate of change of drug amount in the central compartment, incorporating absorption, elimination, and distribution to the peripheral compartment.

**Two-Compartment PK Model (Peripheral Compartment)**

$$
\frac{dA_p}{dt} = \frac{Q}{V_c} \cdot A_c - \frac{Q}{V_p} \cdot A_p
$$

Describes the rate of change of drug amount in the peripheral compartment, with intercompartmental clearance Q governing distribution.

**Log-Normal Between-Subject Variability**

$$
CL_i = CL_{\text{pop}} \cdot e^{\eta_{CL,i}},   \eta_{CL,i} \sim N(0, \omega^2_{CL})
$$

Individual clearance parameter for subject i, where CL_pop is the population median and eta represents the random effect with between-subject variance omega-squared.

**Log-Logistic Exposure-Response Model**

$$
E = E_{\text{min}} + \frac{E_{\text{max}} - E_{\text{min}}}{1 + \left(\frac{ED_{50}}{X}\right)^H}
$$

Four-parameter model describing the probability of treatment success (E) as a function of PK/PD index X (e.g., AUC/MIC), with minimum and maximum effects, potency parameter ED50, and Hill slope H.

**AUC/MIC Ratio with MIC Uncertainty**

$$
\frac{\text{AUC}}{\text{MIC}} \sim \frac{\text{AUC}}{\text{Logistic-Mollified-Uniform}(L, U, C)}
$$

Representation of the PK/PD index as a distribution due to interval-censored MIC measurement, where L and U are the lower and upper bounds of the twofold dilution interval and C is the logistic scale parameter for edge softening.

---

### Figures & Tables

- **Figure 1**: Candidate probability density functions for intrinsic MIC uncertainty with nominal value 2 mg/L, comparing uniform vs logistic-mollified uniform distributions on log2 and linear scales.
  - *Significance*: Illustrates the fundamental measurement error in MIC testing due to twofold dilution series, establishing the ~2-fold intrinsic uncertainty that propagates through all subsequent PK/PD calculations.
- **Figure 2**: Posterior predictions of amikacin pharmacokinetics from simulated datasets, showing concentration-time profiles with credible regions for models with varying sample sizes (n=25 vs n=100) and between-subject variability (BSV).
  - *Significance*: Demonstrates how PK parameter uncertainty decreases with larger sample sizes but between-subject variability dominates total prediction uncertainty; compares point estimates vs full uncertainty bands.
- **Figure 3**: Marginal posterior distributions for primary PK parameters (CL, Q, Vc, Vp) from the amikacin models under different simulation conditions (A: n=25, B: n=100, C: high BSV).
  - *Significance*: Quantifies epistemic uncertainty in population parameters, showing substantially wider posteriors for small studies (model A) and high variability scenarios (model C).
- **Figure 4**: Bootstrap distribution for the 'optimal' vancomycin exposure threshold generated from simulated data, and posterior-predicted exposure-response curves with credible regions from log-logistic models.
  - *Significance*: Reveals the substantial sampling variability in exposure thresholds derived from decision-tree methods (ranging 268-531 h), contrasting dichotomous threshold approaches with continuous exposure-response modeling.
- **Figure 5**: Predictions of ciprofloxacin population PK after IV bolus administration, showing predictive distributions (range for new subjects) and tolerance distributions (uncertainty in 10th percentile) based on point estimates only.
  - *Significance*: Baseline comparison showing overly optimistic precision when PK parameter uncertainty is ignored; establishes the foundation for subsequent uncertainty propagation analyses.
- **Figure 6**: Predictions of ciprofloxacin population PK after oral administration, showing predictive and tolerance distributions that now incorporate PK parameter uncertainty via MCMC sampling.
  - *Significance*: Illustrates the widening of credible intervals when epistemic uncertainty in PK parameters is properly accounted for in the Bayesian framework.
- **Figure 7**: Bootstrap distribution for ciprofloxacin exposure threshold (upper panel) and PTA functions with full uncertainty propagation including PK parameters, MIC measurement error, and target uncertainty.
  - *Significance*: Demonstrates cumulative uncertainty in breakpoint determination: PK uncertainty alone has modest impact, but adding MIC error and target uncertainty creates broad credible regions that overlap across MIC values.
- **Figure 8**: Exposure-response model for ciprofloxacin showing observed outcomes vs AUC/MIC, with posterior-predicted probability of success and credible regions from the log-logistic model.
  - *Significance*: Provides the dose-response foundation for breakpoint determination, showing the sigmoid relationship and its uncertainty without dichotomization.
- **Figure 9**: Posterior distributions of the 'poorest probable outcome' (PPO) - the expected treatment outcome for the lowest 10th percentile of subjects - across different doses and nominal MIC values.
  - *Significance*: Novel presentation of breakpoint-relevant information directly in terms of clinical outcome probability rather than PTA, naturally conveying total technical uncertainty including both epistemic and aleatoric components.
- **Figure 10**: Model-based dose optimization for two hypothetical MIPD subjects (IV and PO), showing posterior distributions of AUC/MIC predictions under sequential uncertainty inclusion: point estimates only, PK uncertainty, MIC uncertainty, and full uncertainty with target variability.
  - *Significance*: Demonstrates how individual dose recommendations become increasingly uncertain as realistic error sources are added, ultimately spanning multiple twofold intervals.
- **Figure 11**: Posterior distributions of required doses to achieve target AUC/MIC for the two hypothetical MIPD subjects, showing dose recommendations under different uncertainty scenarios.
  - *Significance*: Clinical translation showing that when full uncertainty is considered, the 'optimal' dose cannot be specified more precisely than a range (e.g., 5-25 mg/kg), challenging current MIPD precision claims.
- **Figure 12**: Individual exposure-response relationships for the MIPD subjects, showing posterior distributions of expected outcome given dose, incorporating all uncertainty sources.
  - *Significance*: Illustrates that even with individual TDM data, the expected clinical outcome remains meaningfully uncertain, particularly for intermediate MIC values where the dose-response curve is steepest.

---

### Code & Reproducibility Assessment
Excellent. The author provides complete transparency with all code, simulated data, and analysis scripts publicly available at https://github.com/APWoodward/antimicrobial_uncertainty. Simulations and analyses were conducted in Stan (v2.38) via R (v4.5.2), with package dependencies appropriately referenced. The supplementary materials include verification plots comparing simulated distributions to true generating values and goodness-of-fit diagnostics, enabling full reproduction of the uncertainty quantification workflow.

---

### Supplementary Materials
Supplementary materials include: (1) Mathematical details of the logistic-mollified uniform distribution parameterization; (2) Verification plots (Supplementary Figure 1) showing alignment of simulated parameter distributions with true generating distributions; (3) Goodness-of-fit plots (Supplementary Figure 2) and individual predictions (Supplementary Figures 3-5) for the amikacin models; (4) Histograms of simulated AUC and MIC distributions with true dose-response relationships for the exposure-response simulations (Supplementary Figure 6); (5) Verification histograms for ciprofloxacin PK simulations (Supplementary Figure 7), goodness-of-fit (Supplementary Figure 8), parameter posteriors (Supplementary Figure 9), and dose-exposure predictions (Supplementary Figure 10); (6) Individual PK parameter estimates for MIPD subjects (Supplementary Figure 12).

---

### Future Directions
Immediate priorities include development of standardized, practical tools for uncertainty communication in antimicrobial pharmacology that balance rigor with clinical interpretability. Methodological extensions should incorporate structural model uncertainty (model averaging or selection) alongside parameter uncertainty. For exposure targets, meta-analytic frameworks that can synthesize threshold estimates across multiple studies while accounting for their uncertainty are urgently needed, though the author notes current threshold estimation methods are poorly suited for meta-analysis. Refinement of MIC measurement techniques (e.g., extended dilution series with 1.5-fold steps) could reduce intrinsic error from ~2-fold to ~1.2-fold. For MIPD, implementation of sequential Bayesian data assimilation methods that provide full posterior distributions rather than MAP estimates should be pursued. Finally, clinical studies (like the PROVIDE trial for vancomycin) should explicitly incorporate uncertainty quantification to test whether accounting for uncertainty explains the apparent lack of benefit from precision dosing.

---

### Expert Commentary
This essay represents a paradigm shift for antimicrobial pharmacometrics, echoing broader movements in quantitative systems pharmacology toward rigorous uncertainty quantification. Woodward's critique of point-estimate-based PK/PD workflows is devastatingly effective: by showing that optimal dose recommendations span 5-25 mg/kg when uncertainty is properly propagated, the author challenges the very foundation of current MIPD and breakpoint-setting practices. The distinction between 'predictive distributions' (for the next patient) and 'tolerance distributions' (for extreme percentiles like the 10th percentile) is particularly valuable for regulatory applications where we care about 'worst-case' scenarios. The logistic-mollified uniform distribution for MICs is a elegant solution to interval censoring that should become standard. However, the field faces a communication challenge: how do we convey to clinicians that the 'correct' dose is uncertain by a factor of 2-4 without abandoning model-based dosing entirely? The author's call for Bayesian methods is timely given the availability of modern computational tools (Stan), though the computational burden for real-time MIPD remains a barrier. This work should be required reading for FDA and EMA reviewers evaluating PK/PD-based submissions, and for any pharmacometrician claiming to support 'precision' medicine.

---

### Bottom Line
Practicing pharmacometricians must abandon the reliance on point estimates for antimicrobial PK/PD applications. When determining clinical breakpoints, dose recommendations, or individual dosing via MIPD, you must propagate uncertainty through the entire workflow: from the MIC measurement (interval-censored), through the PK model parameters (especially with small samples), to the exposure targets (empirically derived with sampling error). Bayesian methods implemented in Stan (or similar) provide the natural framework for this propagation, yielding posterior predictive distributions and tolerance distributions that honestly represent the state of knowledge. Reporting only posterior medians or MAP estimates systematically overstates confidence and may lead to clinical decisions not supported by the evidence. For regulatory submissions, include uncertainty quantification in PTA analyses; for clinical practice, recognize that model-based dosing recommendations carry substantial uncertainty that must inform risk-benefit assessments. The field needs new standards for communicating these uncertainties to decision-makers without inducing therapeutic nihilism.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [Candidate probability density functions (PDF) for the intrinsic uncertainty of a minimum inhibitory concentration (MIC) observation with a nominal value of 2mg/L, on the log2-scale],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [Posterior predictions of amikacin pharmacokinetics from simulated datasets, where amikacin was administered by intravenous infusion over 30 minutes, emulating Kato et al. 36. The l],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [Marginal posterior distributions for the primary pharmacokinetic parameters from models based on simulated data designed to emulate the pharmacokinetics of amikacin as described by],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [Bootstrap distribution for the ‘optimal’ exposure threshold for vancomycin, generated from simulated data based on the design and results of Moise-Broder et al. 58. The exposure th],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [Predictions of ciprofloxacin population pharmacokinetics from the PK model based on simulated data, after IV bolus administration. The top row shows the predictive distribution whi],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_06.jpg", width: 90%),
  caption: [Predictions of ciprofloxacin population pharmacokinetics from the PK model based on simulated data, after single PO administration. The top row shows the predictive distribution wh],
  placement: auto,
) <fig-6>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_07.jpg", width: 90%),
  caption: [The upper panel shows a bootstrap distribution for the ‘optimal’ exposure threshold for ciprofloxacin, generated from simulated data based on the design and results of Forrest et a],
  placement: auto,
) <fig-7>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_08.jpg", width: 90%),
  caption: [The left panel shows an exposure-response model for ciprofloxacin, from simulated data based on the presentation of Forrest et al. 1993. The points are the observed (0: failure, 1:],
  placement: auto,
) <fig-8>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_09.jpg", width: 90%),
  caption: [Approximate posterior distributions of the expected treatment outcome, given the treatment regimen and the dose. Rather than summarize the outcome using an exposure target, the pre],
  placement: auto,
) <fig-9>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_10.jpg", width: 90%),
  caption: [Model-based dose optimization for two hypothetical subjects, one receiving ciprofloxacin by IV bolus and one PO, based on two simulated therapeutic drug monitoring observations for],
  placement: auto,
) <fig-10>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_11.jpg", width: 90%),
  caption: [Model-based dose optimization for two hypothetical subjects, one receiving ciprofloxacin by IV bolus and one PO, based on two simulated therapeutic drug monitoring observations for],
  placement: auto,
) <fig-11>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_12.jpg", width: 90%),
  caption: [In the upper panel, the approximate posterior distributions of the expected treatment exposure-response relationship, given the dose, for the individuals. The line is the posterior],
  placement: auto,
) <fig-12>
#set page(flipped: false)
```