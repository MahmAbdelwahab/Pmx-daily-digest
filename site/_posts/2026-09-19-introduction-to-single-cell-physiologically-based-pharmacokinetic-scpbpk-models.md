---
layout: post
title: "Introduction to Single-Cell Physiologically-Based Pharmacokinetic (scPBPK) Models"
date: 2026-09-19
authors: "Saini A, Gallo JM"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026 (published online 2026/09/01)"
doi: "10.1002/psp4.70320"
paper_type: methodology
tags: [methodology, pbpk]
excerpt_text: "This paper introduces single-cell PBPK (scPBPK) models, extending standard PBPK to resolve drug disposition at cellular resolution by assigning negative binomial weighting functions to expression-dependent transport and metabolic processes. Two case studies—AZD1775 (BBB transport) and midazolam (hepatic metabolism)—demonstrate that single-cell heterogeneity emerges only when ED process parameters are kinetically competitive with other processes, defining a clear applicability boundary. Code is available on GitHub."
pdf_path: "/assets/digests/2026-09-19-introduction-to-single-cell-physiologically-based-pharmacokinetic-scpbpk-models/PMx_Introduction_to_SingleCell_Physiological_20260919.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper introduces single-cell PBPK (scPBPK) models, extending standard PBPK to resolve drug disposition at cellular resolution by assigning negative binomial weighting functions to expression-dependent transport and metabolic processes. Two case studies—AZD1775 (BBB transport) and midazolam (hepatic metabolism)—demonstrate that single-cell heterogeneity emerges only when ED process parameters are kinetically competitive with other processes, defining a clear applicability boundary. Code is available on GitHub.

---

### Executive Summary
Saini and Gallo introduce single-cell physiologically based pharmacokinetic (scPBPK) models as a mechanistic extension of standard PBPK (sPBPK) modeling, enabling drug disposition to be resolved at the cellular scale. The key innovation is the identification of expression-dependent (ED) processes—membrane transport and metabolism—and the incorporation of weighting functions (here, negative binomial distributions, consistent with scRNAseq analytics) that capture intercellular heterogeneity in these processes. Two worked examples are presented: AZD1775, a WEE1 inhibitor with three ED blood–brain barrier transport processes, and midazolam (MDZ), a high-clearance CYP3A4/5 substrate with a single ED hepatic metabolic process. The AZD1775 model predicted substantial single-cell concentration heterogeneity across four simulated cell clusters, whereas the MDZ model showed negligible heterogeneity because high membrane transport relative to metabolic capacity homogenized intracellular concentrations. The framework conserves mass by tracking both single cells and a bulk-cell compartment, and the authors provide a stepwise construction workflow. The work positions scPBPK as a bridge between mechanistic PBPK and single-cell omic technologies, with clear extensions to single-cell pharmacodynamics (scPBPK/PD).

---

### Scientific Context & Motivation
Standard PBPK (sPBPK) models have been a cornerstone of mechanistic pharmacology for decades, but they treat organs as homogeneous compartments (lumped or subdivided into vascular, interstitial, and intracellular spaces) and cannot resolve drug disposition at the single-cell level. Meanwhile, multi-omic technologies—particularly single-cell RNA sequencing (scRNAseq)—have advanced rapidly, revealing substantial intercellular heterogeneity in gene and protein expression that governs drug transport and metabolism. This creates a knowledge gap: mechanistic PK models cannot leverage single-cell expression data to predict cell-to-cell variability in drug exposure, which is critical for understanding treatment failure (suboptimal concentrations in specific cell types) and toxicity (excessive concentrations in vulnerable cells). The paper addresses this gap by providing the first formal framework for scPBPK models, positioned as a necessary first step toward single-cell PK/PD and quantitative systems pharmacology (QSP) integration.

---

## ⚡ Methodological Snapshot
The scPBPK framework extends standard PBPK (sPBPK) models by resolving drug disposition at the single-cell level. The core innovation is the identification of expression-dependent (ED) processes—membrane transport and metabolism—and the incorporation of a weighting function Wi for each ED process that captures intercellular heterogeneity in the associated kinetic parameter (e.g., Vmax for metabolism, transporter capacity for efflux/uptake). The weighting function can be defined from empirical expression data (scRNAseq, proteomics) or assumed to follow a known statistical distribution; here, a negative binomial distribution (mean 0.5–2.5, theta 1–20 log-sampled) was used, consistent with scRNAseq analytics. Organs containing ED processes are represented with a three-subcompartment structure (vascular, interstitial fluid, intracellular), and the intracellular compartment is split into explicitly tracked single cells and a bulk-cell compartment to conserve total mass and cell number. Two worked examples demonstrate the approach: AZD1775 (three ED BBB transport processes) and midazolam (one ED hepatic metabolic process).

---

## 📐 Statistical Framework
The statistical framework centers on the weighting function Wi assigned to each expression-dependent (ED) process. Wi is drawn from a negative binomial (NB) distribution—the distribution commonly used in scRNAseq analytics—with mean mu sampled uniformly between 0.5 and 2.5 and dispersion parameter theta log-sampled between 1 and 20. Log-sampling of theta avoids bias toward large theta values, which would otherwise reduce NB variance. The cell-specific kinetic parameter (e.g., Vmax,i = Wi × Vmax) is then used in the single-cell ODEs. The model assumes: (1) Michaelis–Menten kinetics for metabolism with a common Km across all cells; (2) mass conservation enforced by tracking both single cells (n_sc) and a bulk-cell compartment (n_bulk) such that n_tot = n_sc + n_bulk; (3) the total number of cells involved in an ED process must be estimated (e.g., 3.7E8 brain endothelial cells for BBB; 1.13E11 hepatocytes for liver); (4) the weighting function reflects the true expression heterogeneity of the ED process. The framework is agnostic to the choice of distribution—empirical expression data can replace the assumed NB distribution.

---

### Estimator Behavior
This is a simulation framework rather than an estimation method, so classical estimator properties (bias, efficiency) do not directly apply. However, the model exhibits well-characterized variance behavior: single-cell concentration variance in the intracellular compartment shows a biphasic relationship with the h2/Vmax ratio (mass-transfer coefficient to metabolic capacity) spanning six orders of magnitude. At low h2/Vmax, insufficient drug reaches cells for ED heterogeneity to manifest; at high h2/Vmax, rapid transport homogenizes intracellular concentrations, reducing variance. The negative binomial weighting function with log-sampled dispersion (theta 1–20) was deliberately chosen to avoid bias toward large theta values that would compress variance. Convergence of the ODE system was not explicitly discussed, but the use of standard numerical integrators in Python is implied.

---

### Validation Design
Validation was performed through two case studies with real clinical data. For AZD1775, the sPBPK base model was calibrated to plasma and brain concentrations from 12 patients with brain tumors or GBM (data from Li et al.), using least-squares optimization against digitized mean concentration–time profiles; agreement was high (12.6% error for plasma AUC, 3.1% for brain AUC). The scPBPK model was then compared to the sPBPK model to confirm that non-brain compartments were unaffected. For MDZ, the mPBPK base model was calibrated to plasma concentrations from six healthy volunteers (Heizmann et al.), using in vitro Vmax and Km values from human liver microsomes scaled by microsomal protein content (32 mg/g liver). The scPBPK model was evaluated by comparing single-cell vs. bulk-cell concentration profiles and by systematically varying the h2/Vmax ratio over six orders of magnitude to characterize the variance response (Figure S7). No formal statistical goodness-of-fit metrics (e.g., objective function values, confidence intervals) were reported beyond AUC percentage errors and visual inspection of concentration–time plots.

---

### Comparison to Alternatives
This is the first formal presentation of a single-cell PBPK framework; no direct scPBPK comparators exist. Relative to standard PBPK (sPBPK) models, scPBPK adds a weighting-function layer that propagates expression heterogeneity into concentration predictions, enabling cell-cluster-level contrasts. Relative to purely empirical single-cell PK approaches, scPBPK retains mechanistic structure (blood flows, tissue volumes, partition coefficients) and conserves mass across single and bulk cells. The main disadvantage is added complexity: cell-number estimation, weighting-function specification, and increased computational cost. The authors note that for blood flow-limited organs (e.g., MDZ liver), the added resolution may be unnecessary when transport dominates the ED process.

---

### Implementation Guidance
Implementation proceeds in Python (Spyder IDE) with base sPBPK models built in PK-Sim or Magnolia. The workflow: (1) identify organs with ED processes; (2) write rate equations for ED processes and define a weighting function for each; (3) define ODEs using a three-subcompartment structure for ED-containing organs; (4) estimate cell numbers for ED-relevant cells (e.g., 3.7E8 brain endothelial cells for BBB; 1.13E11 hepatocytes for liver). Weighting functions are sampled from a negative binomial distribution with means 0.5–2.5 and theta (dispersion) log-sampled between 1 and 20 to avoid bias toward large theta. Code is available at https://github.com/anshulsa/scPBPK. Computational cost is modest for the examples shown (10,000 cells in four clusters), but scaling to full organ cell populations (10^8–10^11 cells) would require aggregation strategies or stochastic sampling approaches.

---

## 📊 Key Findings
The paper establishes the first formal framework for single-cell PBPK (scPBPK) modeling. Key findings: (1) scPBPK models can be constructed by converting existing sPBPK models, identifying expression-dependent (ED) processes, and assigning weighting functions (negative binomial) to capture cellular heterogeneity; (2) for AZD1775, a drug with three ED BBB transport processes, the model predicted substantial single-cell concentration heterogeneity in brain IF and IC compartments, with cluster-specific variability up to ~4-fold at Cmax; (3) for midazolam, a high-clearance CYP3A4/5 substrate, single-cell liver IC concentrations were identical across all cells despite clear intercellular variation in metabolic clearance—because high membrane transport (h2) relative to Vmax homogenized concentrations; (4) the variance of intracellular concentrations exhibits a biphasic relationship with the h2/Vmax ratio over six orders of magnitude, defining when scPBPK resolution is informative; (5) the framework conserves mass by tracking both single cells and a bulk-cell compartment, and is compatible with data-driven weighting functions from scRNAseq or proteomic data.

---

### Strengths & Limitations

#### Strengths
- First formal presentation of a single-cell PBPK framework, filling a clear methodological gap.
- Mechanistic grounding: conserves mass and blood flow, builds on established sPBPK structures, and uses physiologically plausible cell-number estimates.
- Weighting function approach is flexible—can be data-driven (scRNAseq/proteomics) or assumed—and uses the negative binomial distribution consistent with scRNAseq analytics.
- Two contrasting case studies (AZD1775 with high heterogeneity; MDZ with homogenized concentrations) effectively delineate the applicability boundary of the method.
- The biphasic variance relationship with h2/Vmax provides a quantitative criterion for deciding when scPBPK resolution is informative.
- Code is publicly available on GitHub, supporting reproducibility and adoption.

#### Limitations (Acknowledged by Authors)
- The total number of cells (ntot) involved in an ED process must be estimated, and results may be sensitive to this value.
- Weighting functions were assumed to follow a negative binomial distribution rather than derived from actual expression data; the authors note that empirical data could be used instead.
- The choice of cluster size (2500 cells per cluster) and the random selection of NB parameters (mean, theta) introduce stochastic variability.
- The MDZ example shows that scPBPK may not be warranted when membrane transport dominates the ED process (blood flow-limited organs).

#### Limitations (Expert Review)
- No formal sensitivity analysis of the cell-number estimate (ntot) or cluster-size assumption is provided; the impact of these choices on predicted heterogeneity is not quantified.
- The negative binomial parameter ranges (mean 0.5–2.5, theta 1–20) are arbitrary and not justified from biological or empirical expression data.
- The paper does not address identifiability or uncertainty quantification of the weighting-function parameters; the random sampling approach may conflate aleatoric and epistemic uncertainty.
- The sPBPK base models were calibrated to digitized (rather than raw) concentration data, which may introduce digitization error; the reported AUC errors (12.6% plasma, 3.1% brain) are reasonable but not formally propagated into the scPBPK predictions.
- Computational scaling to full organ cell populations (10^8–10^11 cells) is not addressed; the 10,000-cell demonstration may not reflect practical implementation at scale.
- No statistical comparison of the NB weighting function against alternative distributions (e.g., log-normal, gamma) is provided.

#### Generalizability
The framework is general and applicable to any drug–organ system with identifiable ED processes, provided cell numbers and weighting functions can be estimated. The two examples span different scenarios (BBB transport vs. hepatic metabolism), demonstrating breadth. However, generalizability is limited by the need for reliable cell-number estimates and the assumption that NB distributions adequately capture expression heterogeneity; organs with blood flow-limited kinetics may not benefit from scPBPK resolution. The approach is most valuable for tissues with significant expression heterogeneity and kinetically competitive ED processes.

---

### Key Equations

**Single-cell intracellular compartment ODE**

{% raw %}
$$
\frac{dA_{ic,i}}{dt} = h_2 \left( C_{if} - C_{ic,i} \right) - \frac{V_{max,i}   C_{ic,i}}{K_m + C_{ic,i}}
$$
{% endraw %}

ODE for the intracellular (IC) compartment of a single cell i in the liver, where drug enters by mass transfer from the interstitial fluid (h2) and is eliminated by Michaelis–Menten metabolism with cell-specific maximum capacity Vmax,i.

**Bulk-cell intracellular compartment ODE**

{% raw %}
$$
\frac{dA_{ic,bulk}}{dt} = h_{2,bulk} \left( C_{if} - C_{ic,bulk} \right) - \frac{V_{max,bulk}   C_{ic,bulk}}{K_m + C_{ic,bulk}}
$$
{% endraw %}

ODE for the bulk-cell intracellular compartment, which conserves the total metabolic capacity not assigned to the explicitly tracked single cells.

**Weighting function applied to Vmax**

{% raw %}
$$
V_{max,i} = W_i \cdot V_{max}
$$
{% endraw %}

The cell-specific maximum metabolic capacity is the product of the weighting function Wi and the reference Vmax, encoding expression-dependent heterogeneity.

**Cell number conservation**

{% raw %}
$$
n_{tot} = n_{sc} + n_{bulk}
$$
{% endraw %}

Conservation of total cell number: the sum of single cells and bulk cells equals the total number of cells involved in the ED process, ensuring mass conservation.

**Negative binomial weighting function**

{% raw %}
$$
W_i \sim \text{NB}(\mu, \theta),   \mu \in [0.5, 2.5],   \theta \in [1, 20]
$$
{% endraw %}

The negative binomial weighting function used to model expression-dependent heterogeneity, with mean mu and dispersion theta, consistent with scRNAseq analytics.

---

### Figures & Tables

- **Figure 1**: Hypothetical scPBPK model illustrating the liver as a three-subcompartment structure (vascular, interstitial fluid, intracellular) with an ED metabolic process in the intracellular space, showing both single cells and bulk cells.
  - *Significance*: Establishes the fundamental architecture of scPBPK models and the conservation-of-mass principle across single and bulk cells.
- **Figure 2**: Brain structure for the AZD1775 scPBPK model showing three ED transport processes (active uptake, Pgp efflux, ABCG2 efflux) and passive diffusion (PSB) at the BBB, with single-cell and bulk IC compartments.
  - *Significance*: Demonstrates how a real sPBPK brain model is converted to scPBPK by identifying ED processes and adding cellular resolution.
- **Figure 3**: AZD1775 brain interstitial fluid (IF) single-cell concentration–time profiles for four clusters, showing mean, ICR (25%–75%), and 5%–95% ranges.
  - *Significance*: Illustrates the degree of single-cell concentration heterogeneity predicted by the model, with cluster 1 showing ~4-fold variability at Cmax.
- **Figure 4**: AZD1775 brain intracellular (IC) single-cell concentration–time profiles for four clusters, with mean, ICR, and 5%–95% ranges.
  - *Significance*: Shows that IC heterogeneity mirrors IF heterogeneity, confirming that ED transport processes propagate variability into the intracellular compartment.
- **Figure 5**: AZD1775 bulk brain IF (A) and IC (B) concentration–time profiles.
  - *Significance*: Demonstrates that bulk-cell predictions are consistent with sPBPK behavior, validating mass conservation in the scPBPK conversion.
- **Figure 6**: MDZ liver intracellular concentrations (A) showing identical single-cell and bulk profiles, and violin plots of single-cell metabolic clearances (B) showing inter-cluster variation.
  - *Significance*: Key negative result: despite clear intercellular variation in Vmax (clearance), high membrane transport homogenizes intracellular concentrations—defining the applicability boundary of scPBPK.
- **Table 1**: Definitions of all symbols and units used in the scPBPK ODEs, including amounts, flows, partition coefficients, mass transfer coefficients, volumes, cell numbers, and the weighting function.
  - *Significance*: Provides the formal notation and units necessary for reproducible implementation of the framework.

---

### Code & Reproducibility Assessment
Computer code is publicly available on GitHub (https://github.com/anshulsa/scPBPK). Simulations were performed in Python using Spyder as the IDE; base sPBPK models were built in PK-Sim and Magnolia. No formal versioning or containerization is described, but the code availability is a notable strength.

---

### Supplementary Materials
Supplementary materials include: Figure S1 (two-subcompartment brain structure from Li et al.), Figure S2 (mPBPK model for MDZ), Figure S3 (whole-body sPBPK model for AZD1775), Figure S4 (sPBPK model-predicted vs. digitized AZD1775 plasma and brain concentrations), Figure S5 (scPBPK plasma profile), Figure S6 (mPBPK MDZ model-predicted vs. observed plasma concentrations), Figure S7 (biphasic variance vs. h2/Vmax relationship), and Tables S1–S4 (complete ODEs and parameters for the AZD1775 and MDZ models).

---

### Future Directions
Natural extensions include: (1) linking scPBPK to single-cell pharmacodynamic (scPD) models to form scPBPK/PD, enabling cell-cluster-specific response predictions; (2) replacing assumed negative binomial weighting functions with empirical distributions derived from scRNAseq or proteomic data; (3) systematic sensitivity analysis of the total cell number (ntot) and cluster-size assumptions; (4) application to combination therapy optimization where cell-type-specific exposure differences drive efficacy or toxicity; and (5) formal statistical evaluation of the weighting-function selection process, including model selection criteria for choosing between candidate distributions.

---

### Expert Commentary
This paper fills a genuine gap—mechanistic PBPK has remained at the organ/tissue level while single-cell omics have advanced rapidly. The negative binomial weighting function is a sensible choice given its prevalence in scRNAseq analysis, and the authors wisely allow the weighting function to be data-driven (from expression data) or assumed. The MDZ example is particularly instructive: it demonstrates a clear applicability boundary, showing that scPBPK adds value only when ED process parameters are kinetically competitive. A key practical concern is the sensitivity of results to the estimated total cell number (ntot) and the arbitrary choice of cluster size (2500 cells); the authors acknowledge this. The next logical step—linking to single-cell PD models—is well motivated, and the GitHub code availability should accelerate adoption.

---

### Bottom Line
scPBPK models provide a tractable framework for resolving drug disposition at single-cell resolution by assigning expression-dependent (ED) weighting functions—here negative binomial distributions—to transport and metabolic processes. The approach is most informative when ED process parameters are of comparable magnitude to competing kinetic processes (e.g., membrane transport vs. metabolism); when transport dominates, cellular heterogeneity is homogenized and a scPBPK model may add little beyond a standard blood flow-limited PBPK model.

---

---

## 📊 Figures

![Illustration of a hypothetical scPBPK model. The liver depicted as a three-subcompartment structure contains the expression-dependent (ED) process—metabolism—in]({{ site.baseurl }}/assets/digests/2026-09-19-introduction-to-single-cell-physiologically-based-pharmacokinetic-scpbpk-models/figures/fig_01.jpg)

![Brain structure for scPBPK model for AZD1775. All membrane transport processes are designated by arrows including the 3 ED processes: active uptake, active Pgp e]({{ site.baseurl }}/assets/digests/2026-09-19-introduction-to-single-cell-physiologically-based-pharmacokinetic-scpbpk-models/figures/fig_02.jpg)

![AZD1775 scPBPK model-predicted brain interstitial fluid (IF) single cell concentration–time profiles. The mean concentration, ICR (25%–75%) and 5%–95% ranges are]({{ site.baseurl }}/assets/digests/2026-09-19-introduction-to-single-cell-physiologically-based-pharmacokinetic-scpbpk-models/figures/fig_03.jpg)

![AZD1775 scPBPK model-predicted brain intracellular (IC) single-cell concentration–time profiles. The mean concentrations, ICR (25%–75%) and 5%–95% ranges are bas]({{ site.baseurl }}/assets/digests/2026-09-19-introduction-to-single-cell-physiologically-based-pharmacokinetic-scpbpk-models/figures/fig_04.jpg)

![AZD1775 scPBPK model-predicted brain IF (A) and IC (B) bulk AZD1775 concentration–time profiles.]({{ site.baseurl }}/assets/digests/2026-09-19-introduction-to-single-cell-physiologically-based-pharmacokinetic-scpbpk-models/figures/fig_05.jpg)

![MDZ scPBPK model-predicted liver concentrations (A) and clearances (B). MDZ single cell and bulk liver intracellular concentrations profiles are equal (A). Violi]({{ site.baseurl }}/assets/digests/2026-09-19-introduction-to-single-cell-physiologically-based-pharmacokinetic-scpbpk-models/figures/fig_06.jpg)