---
layout: post
title: "A QSP Model of Valproic Acid Toxicity in Pediatric and Adult Populations: Implications for Formulation Selection and L-Carnitine Supplementation"
date: 2026-02-19
authors: "Schiavo A, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "https://doi.org/10.1002/psp4.70200"
paper_type: generic
tags: [generic, qsp, covariate-analysis, pediatrics]
excerpt_text: "A quantitative systems pharmacology (QSP) model extending valproic acid (VPA) toxicity predictions to pediatric populations. It provides a mechanistic rationale for using extended-release formulations and establishes a concrete dosing rule for L-carnitine supplementation to prevent hyperammonemia."
pdf_path: "/assets/digests/2026-02-19-a-qsp-model-of-valproic-acid-toxicity-in-pediatric-and-adult-populations/PMx_A_QSP_Model_of_Valproic_Acid_Toxicity_in_20260219.pdf"
retroactively_classified: true
---

### Quick Take
A quantitative systems pharmacology (QSP) model extending valproic acid (VPA) toxicity predictions to pediatric populations. It provides a mechanistic rationale for using extended-release formulations and establishes a concrete dosing rule for L-carnitine supplementation to prevent hyperammonemia.

---

### Executive Summary
This study expands a previous adult QSP model of valproic acid (VPA) to include pediatric populations (toddlers and children) and sex-specific differences. By integrating population pharmacokinetics with a systems biology network of carnitine, ammonia, and fatty acid metabolism, the authors simulated toxicity profiles across diverse demographics. The model successfully predicts that while toddlers require higher weight-based doses, they exhibit distinct toxicity patterns due to enzyme ontogeny. Crucially, the study quantifies the protective effect of L-carnitine, proposing a 'twice the VPA dose' rule for supplementation. It also demonstrates that extended-release formulations consistently reduce the risk of hyperammonemia and hyperlipidemia compared to delayed-release options, offering actionable evidence for clinical optimization of VPA therapy.

---

## ⚡ Methodological Snapshot
The authors extended an existing adult QSP model by integrating a two-compartment population PK model with a systems network describing VPA metabolite interactions with the urea cycle and fatty acid oxidation. Virtual populations (toddlers, children, women, men; N=2000 each) were generated using PK-Sim to provide physiological covariates.

---

## 🏗️ Structural Model Breakdown
The PopPK model uses two compartments with saturable protein binding. The QSP network describes three VPA metabolic pathways: glucuronidation (UGT2B7), mitochondrial beta-oxidation, and microsomal omega-oxidation (CYP2C9). The toxicity mechanism links VPA-CoA formation to carnitine depletion (forming valproylcarnitine), which inhibits fatty acid oxidation and reduces Acetyl-CoA. Reduced Acetyl-CoA impairs N-acetylglutamate synthesis, downregulating Carbamoyl Phosphate Synthetase I (CPS-I), thereby inhibiting the urea cycle and causing hyperammonemia.

---

### Detailed Methodological Analysis

#### Modeling Approach
A hybrid PopPK-QSP framework implemented in Simulx (MonolixSuite). The PK component handles VPA disposition with capacity-limited binding, while the QSP component models the biochemical network of ammonia and carnitine homeostasis.

#### Data Sources
Virtual populations generated via PK-Sim based on European reference values. Model parameters informed by literature data, including ontogeny functions derived from 143 individuals and PK validation against 402 pediatric patients.

#### Estimation Methods
The study was primarily simulation-based. Parameters were inherited from a previous adult model or derived from literature (e.g., ontogeny functions), rather than re-estimated from raw clinical data in this specific work.

#### Model Evaluation
Predictive performance was assessed by comparing simulated clearance, volume of distribution, and toxicity incidences against digitized literature data. Visual checks included clearance vs. age plots.

#### Covariate Analysis
Key covariates included Age (driving enzyme maturation and clearance scaling), Sex (influencing baseline carnitine levels and clearance), and Body Weight. A specific factor (gamma) accounted for sex/age differences in carnitine/fatty acid turnover.

---

### Scientific Context & Motivation
Valproic acid is a cornerstone therapy for epilepsy and psychiatric disorders but is plagued by metabolic toxicities like hyperammonemia and hepatotoxicity, driven by carnitine depletion and mitochondrial inhibition. While age and sex differences in VPA pharmacokinetics are known, the translation of these differences into toxicity risks has been poorly quantified. Previous models focused on adults; this work fills the gap by incorporating enzyme ontogeny (specifically UGT2B7 maturation) and physiological changes to predict adverse event risks in vulnerable pediatric populations.

---

### Statistical Rigor Assessment
The study utilized large virtual populations (N=8000 total) and performed 100 replicates of clinical trial simulations (n=200 each) to generate 90% prediction intervals. This robust resampling approach allows for the assessment of variability in toxicity incidence, although parameter uncertainty was not propagated.

---

## 📊 Key Findings
The model predicted a global hyperammonemia incidence of 29% and hyperlipidemia of 54%. Surprisingly, toddlers showed lower toxicity incidence than adults despite higher weight-based doses, attributed to immature UGT2B7 shifting metabolism but higher relative liver capacity. Men exhibited higher toxicity risks than women despite lower VPA exposure, explained by higher formation rates of toxic metabolites and greater carnitine depletion. Extended-release formulations showed a consistent trend (Odds Ratio > 1) for improved safety over delayed-release formulations. L-carnitine supplementation at a dose (mg) equal to 2x the VPA dose effectively maintained baseline ammonia levels.

---

## 💡 Clinical & Regulatory Implications
The study supports the preferential use of extended-release VPA formulations to minimize peak-related toxicity. It provides a specific, model-informed dosing recommendation for L-carnitine supplementation (e.g., 50 mg/kg carnitine for 25 mg/kg VPA) to prevent hyperammonemia, particularly valuable for pediatric protocols. It also highlights that male patients may be more susceptible to metabolic adverse effects than females.

---

### Strengths & Limitations

#### Strengths
- Mechanistic integration of PK, enzyme ontogeny, and systems biology endpoints.
- Actionable dosing guidance for L-carnitine supplementation.
- Evaluation of formulation impact (ER vs. DR) on safety endpoints.
- Coverage of the full age spectrum from toddlers to adults.

#### Limitations (Acknowledged by Authors)
- Linear approximation of UGT2B7 maturation function due to limited data.
- Reliance on population averages for baseline ammonia and fatty acids.
- Scarcity of simultaneous PK/PD data in pediatrics for comprehensive validation.

#### Limitations (Expert Review)
- Lack of parameter uncertainty propagation in simulations (likely underestimating true variability).
- Assumes similar protein binding saturation in pediatrics as adults without extensive validation.
- Does not account for pharmacogenetic polymorphisms (e.g., CYP2C9) which could be relevant.

#### Generalizability
High generalizability for Caucasian populations based on the virtual population source; extrapolation to other ethnicities requires verification of physiological covariates.

---

### Key Equations

**Allometric Scaling of Parameters**

$$
\theta_i = \theta_{\text{pop}} \times \left(\frac{\text{WT}_i}{70}\right)^{\beta}
$$

Standard allometric scaling used to adjust PK parameters based on body weight.

**UGT2B7 Maturation Function**

$$
AF_{\text{UGT2B7}} = 0.113 + 0.0425 \times \text{AGE}_i   \text{if } \text{AGE}_i < 20
$$

Describes the age-dependent maturation of the glucuronidation pathway, reaching full capacity at 20 years.

**Sex/Age Effect on Carnitine Turnover**

$$
Ro_{\text{carnitine},i} = Ro_{\text{carnitine},\text{male}} \times e^{\gamma}
$$

Adjusts the baseline production/turnover of carnitine based on sex and age group (gamma factor).

**Odds Ratio Calculation**

$$
OR = \frac{EA_R \times (1 - EA_T)}{EA_T \times (1 - EA_R)}
$$

Calculates the odds ratio of adverse events (EA) comparing reference (R) and test (T) formulations.

---

### Figures & Tables

- **Figure 2**: Stacked area plot showing the relative contribution of VPA elimination pathways (Glucuronidation, Beta-oxidation, CYP-mediated) as a function of age.
  - *Significance*: Visually demonstrates the shift in metabolic phenotype from oxidative pathways in toddlers to glucuronidation in adults, explaining age-related toxicity differences.
- **Figure 3**: Scatter plot of weighted total VPA apparent clearance vs. age, overlaid with literature data.
  - *Significance*: Validates the model's PK predictions against external clinical data, confirming the higher weight-normalized clearance in younger children.
- **Figure 5**: Bar charts comparing hyperammonemia and hyperlipidemia incidence across age groups and formulations.
  - *Significance*: Highlights the 'paradoxical' higher incidence in men vs. women and the consistent safety benefit of extended-release formulations.
- **Figure 6**: Heatmap/Grid showing toxicity incidence reduction with increasing L-carnitine doses.
  - *Significance*: Provides the visual evidence base for the recommended L-carnitine supplementation strategy (2:1 ratio).
- **Table 2**: Odds ratios for hyperammonemia and hyperlipidemia comparing formulations.
  - *Significance*: Quantifies the safety advantage of extended-release formulations, showing OR > 1 in the majority of simulated replicates.

---

### Supplementary Materials
Supplementary materials include detailed plots of component levels (ammonia, fatty acids) in response to supplementation and additional validation figures. One document (psp470200-sup-0001-supinfo.docx) is referenced.

---

### Future Directions
Investigation of hypoalbuminemia effects on unbound VPA and subsequent toxicity. Incorporation of the glutamate-glutamine cycle to better predict seizure control alongside toxicity. Validation with prospective pediatric clinical data measuring full metabolic panels.

---

### Expert Commentary
This paper represents a sophisticated application of QSP to solve a safety paradox—why lower exposure (in men) might lead to higher toxicity. It moves beyond simple exposure-response relationships to mechanistic causality. The derivation of the '2x dose' rule for L-carnitine is a prime example of how modeling can refine clinical practice guidelines where empirical trial data might be sparse. The finding regarding formulation safety (ER > DR) is biologically plausible due to reduced Cmax-driven saturation of metabolic pathways, reinforcing the value of 'flat' PK profiles for drugs with saturable metabolism.

---

### Bottom Line
For pharmacometricians working in pediatrics or safety, this paper demonstrates how QSP can bridge the gap between PK differences and complex toxicological outcomes. The key takeaway is the quantitative support for L-carnitine supplementation (50 mg/kg for 25 mg/kg VPA) and the safety advantage of extended-release formulations, driven by a mechanistic understanding of saturable metabolism and mitochondrial function.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 2: Individual contributions of each VPA elimination pathway to total clearance as a function of age, following a single dose.],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.png", width: 90%),
  caption: [FIGURE 3: Weighted total VPA apparent clearance in function of age at a steady state in pediatric population. Gray area: LOESS-smoothed percentile 5% and 95% of simulated],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [Figure 3],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.png", width: 90%),
  caption: [Figure 4],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [FIGURE 4: Hyperammonemia (left) and hyperlipidemia (right) incidence for each age group after 35 mg/kg/day (toddlers), 25 mg/kg/day (children) and 15 mg/kg/day (adults) af],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_06.png", width: 90%),
  caption: [FIGURE 5: Predicted hyperammonemia (top) and hyperlipidemia (bottom) incidence at steady state for different VPA and L-carnitine (LC) dosage regimens across four demograph],
  placement: auto,
) <fig-6>
#set page(flipped: false)
```