---
layout: post
title: "Repurposing Oxfendazole for Onchocerciasis: Population Pharmacokinetics of a Tablet Formulation in Healthy African Adults"
date: 2026-02-11
authors: "Assmus F, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "https://ascpt.onlinelibrary.wiley.com/doi/10.1002/psp4.70189"
paper_type: popk
tags: [popk, qsp, covariate-analysis]
excerpt_text: "This is the first population PK analysis of oxfendazole tablets in the target demographic (African adults). It identifies significant dose-limited bioavailability and supports a 400 mg QD or 50 mg BID (5-day) regimen for upcoming Phase 2 onchocerciasis trials."
pdf_path: "/assets/digests/2026-02-11-repurposing-oxfendazole-for-onchocerciasis-population-pharmacokinetics-of-a/PMx_Repurposing_Oxfendazole_for_Onchocercias_20260211.pdf"
retroactively_classified: true
---

### Quick Take
This is the first population PK analysis of oxfendazole tablets in the target demographic (African adults). It identifies significant dose-limited bioavailability and supports a 400 mg QD or 50 mg BID (5-day) regimen for upcoming Phase 2 onchocerciasis trials.

---

### Executive Summary
To support the elimination of onchocerciasis, this study characterizes the pharmacokinetics of oxfendazole, a veterinary anthelmintic being repurposed as a macrofilaricide. Analyzing data from a Phase 1 trial in healthy African adults, the authors developed a population PK model for the parent drug and two metabolites using a field-applicable tablet formulation. The analysis revealed slow absorption and dose-limited bioavailability, necessitating a specific dosing strategy. Simulations indicate that a regimen of 400 mg once daily for 5 days is required to achieve the putative target exposure (>200 ng/mL), providing a quantitative foundation for efficacy trials.

---

## ⚡ Methodological Snapshot
The authors analyzed plasma concentrations of oxfendazole, fenbendazole, and oxfendazole sulfone from 24 healthy volunteers (100 mg SD, 400 mg SD, 400 mg QD x 5 days). A nonlinear mixed-effects model (NONMEM) was developed, simultaneously fitting parent and metabolites. The structural model accounted for first-pass metabolism and dose-dependent bioavailability.

---

## 🏗️ Structural Model Breakdown
The final model consists of a one-compartment structure for oxfendazole and one-compartment structures for each metabolite (fenbendazole and oxfendazole sulfone). Absorption was first-order with a lag time and first-pass metabolism. A key feature is the dose-limited bioavailability modeled using a power function derived from prior suspension data. Elimination was linear, with parent clearance split between metabolite formation.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling using NONMEM 7.4 with FOCE-I estimation. Simultaneous fitting of parent and two metabolites. Structural identifiability for metabolites was managed by fixing the formation clearance split to 50/50.

#### Data Sources
Phase 1 randomized, placebo-controlled trial (HELP-OFZ) in Tanzania. 24 active participants providing 901 quantifiable samples. Rich sampling schedule up to 72h post-last dose.

#### Estimation Methods
First-Order Conditional Estimation with Interaction (FOCE-I). Model selection based on OFV (log-likelihood ratio test) and goodness-of-fit plots.

#### Model Evaluation
Prediction-corrected Visual Predictive Checks (pcVPC), nonparametric bootstrap (n=1000), and standard goodness-of-fit diagnostics (observed vs. predicted, residuals).

#### Covariate Analysis
Stepwise covariate modeling (SCM). Body weight included a priori (allometric scaling). Dose was identified as a significant covariate on bioavailability (implemented via a power function).

---

### Scientific Context & Motivation
Onchocerciasis elimination is hindered by the lack of drugs that kill adult worms (macrofilaricides); current standard of care (ivermectin) only targets larvae. Oxfendazole shows macrofilaricidal activity in preclinical models. While previous Phase 1 studies used a liquid formulation in Caucasians, this study addresses the critical translational gap of evaluating a field-stable tablet formulation in the target African population, where physiological factors and formulation differences could alter exposure.

---

### Statistical Rigor Assessment
The analysis appears rigorous for a Phase 1 study. The sample size (N=24) is small but typical for this stage. Handling of BQL data (8.4%) was appropriate. The use of bootstrap diagnostics confirms parameter precision (RSE <32% for most parameters). The assumption of 50% metabolic split is a necessary structural simplification due to lack of mass balance data, which is transparently acknowledged.

---

## 📊 Key Findings
Oxfendazole displayed slow absorption (Tmax ~3.6 h) and dose-limited bioavailability, with relative F decreasing by ~52% when increasing dose from 100 mg to 400 mg. The terminal half-life was approximately 12 hours. Accumulation was minor for the parent drug but more pronounced for metabolites. Simulations showed that splitting the dose (50 mg BID) achieved similar target attainment to 400 mg QD due to improved bioavailability at lower individual doses.

---

## 💡 Clinical & Regulatory Implications
To achieve the preclinical target of >200 ng/mL for 5 days, a dose of 400 mg QD for 5 days is recommended for Phase 2 trials. Alternatively, 50 mg BID is equally effective and potentially safer due to lower Cmax, though adherence may be harder. Standard weight-based dosing may not be necessary for adults within the 42-75 kg range.

---

### Strengths & Limitations

#### Strengths
- First PopPK model in the target African population with the tablet formulation.
- Simultaneous modeling of parent and active metabolites.
- Integration of prior knowledge (power function for bioavailability) to stabilize estimation.
- Robust sensitivity analysis regarding target concentrations.

#### Limitations (Acknowledged by Authors)
- Small sample size (N=24) limits covariate analysis power.
- Lack of mass balance data necessitated fixing metabolic formation fractions.
- Target concentration (200 ng/mL) is derived from animal models and remains unvalidated in humans.

#### Limitations (Expert Review)
- High inter-individual variability in bioavailability (72.7%) remains largely unexplained.
- The assumption that the tablet formulation follows the exact same dose-nonlinearity power function as the suspension (from prior studies) is a strong assumption, though validated by model fit.

#### Generalizability
Findings are specific to the tablet formulation in African adults. Extrapolation to pediatrics or patients with high parasite loads (potential disease-drug interactions) requires caution.

---

### Key Equations

**Dose-Dependent Bioavailability**

$$
F_{\text{rel}} = \left(\frac{\text{Dose}}{34.7 \text{mg}}\right)^{-0.541}
$$

Describes the reduction in relative bioavailability as dose increases, likely due to solubility limitations.

**Individual Bioavailability**

$$
F_i = F_{\text{pop}} \cdot F_{\text{rel}} \cdot e^{\eta_{i,F}}
$$

The individual bioavailability incorporating the population value, the dose-dependent scaling factor, and inter-individual variability.

**Inter-individual Variability (CV%)**

$$
CV_{\%} = 100 \cdot \sqrt{e^{\omega^2}-1}
$$

Conversion of the variance of the log-normal distribution to a coefficient of variation percentage.

---

### Figures & Tables

- **Figure 2**: Schematic of the structural PK model showing compartments for oxfendazole, fenbendazole, and oxfendazole sulfone, including first-pass metabolism.
  - *Significance*: Visualizes the complex metabolic interplay and the structural assumptions (e.g., 50/50 clearance split) made during modeling.
- **Figure 3**: Prediction-corrected Visual Predictive Checks (pcVPC) for parent and metabolites.
  - *Significance*: Demonstrates the model's ability to capture the central tendency and variability of the data across different analytes.
- **Figure 4**: Simulated PK profiles and Probability of Target Attainment (PTA) for various dosing regimens.
  - *Significance*: The core decision-making plot; shows why 400 mg QD (or 50 mg BID) is necessary to maintain levels >200 ng/mL.
- **Table 1**: Parameter estimates for the final population PK model.
  - *Significance*: Provides the quantitative values (Clearance, Volume, IIV) necessary for reproducing simulations.

---

### Code & Reproducibility Assessment
Code S1 and S2 in Data S1 are referenced for reproducibility of the variance calculations and model code, indicating high transparency.

---

### Supplementary Materials
Supplementary materials include code for reproducibility (NONMEM control streams), additional goodness-of-fit plots, and sensitivity analyses regarding body weight and target concentrations.

---

### Future Directions
Validation of the efficacy target (200 ng/mL) in actual O. volvulus infection is critical. Future trials should investigate PK in infected patients to rule out disease effects on absorption/disposition. Investigation of the 50 mg BID regimen's feasibility in field settings is warranted.

---

### Expert Commentary
This paper highlights a classic challenge in anthelmintic repurposing: poor solubility leading to dose-limited absorption (BCS Class II). The finding that 50 mg BID is comparable to 400 mg QD is mechanistically fascinating—it exploits the saturation of absorption to maximize exposure with less drug. However, in Mass Drug Administration (MDA) contexts, the simplicity of QD dosing usually trumps the efficiency of BID dosing. The modeling work is solid, but the 'house of cards' rests on the translatability of the 200 ng/mL target from mice to humans.

---

### Bottom Line
For pharmacometricians working in Global Health: This study demonstrates how PopPK can optimize dosing for repurposed drugs with poor solubility. The key takeaway is the saturation of absorption, where splitting the dose (BID vs QD) significantly improves bioavailability. The recommended regimen for Phase 2 onchocerciasis trials is 400 mg QD for 5 days.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: Plasma concentration–time profiles of oxfendazole and metabolites across cohorts. Individual plasma concentration–time profiles of oxfendazole, fenbendazole, and],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [FIGURE 2: Graphical representation of the final model describing the pharmacokinetics of oxfendazole and its metabolites. The model incorporates a first-pass effect, with],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.png", width: 90%),
  caption: [FIGURE 3: Visual predictive checks for oxfendazole and metabolites. Prediction-corrected visual predictive checks of the final population PK model for (a) oxfendazole, (b)],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [FIGURE 4: Simulated PK profiles for oxfendazole and probability of target attainment. Plasma concentration–time profiles for different dosing regimens were simulated using],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [FIGURE 5: Probabilities of target attainment for different target concentrations. PTAs are shown for various target concentrations (100–2000 ng/mL) and dosing regimens, na],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```