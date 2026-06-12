---
layout: post
title: "Evaluating the Impact of Intestinal Bile Salts on Drug Absorption Using PBPK Modeling: Case Studies With Efavirenz, Cinnarizine, and Posaconazole"
date: 2026-05-30
authors: "L. G. A.-A. S., S. P., and K. R. Y."
journal: "Unknown journal, 2025"
doi: "10.1002/psp4.70010"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This paper uses PBPK modeling to demonstrate that intestinal bile salt concentrations critically modulate the absorption of three poorly soluble BCS II drugs (efavirenz, cinnarizine, posaconazole) in the fasted state. For pharmacometricians modeling oral absorption, this work provides quantitative evidence that bile salt reductions of 50% (mimicking hepatic impairment) can decrease fraction absorbed by 19–41%, with the magnitude depending on the permeability model used. The paper is essential reading for anyone building or evaluating PBPK models for lipophilic, poorly soluble compounds where micelle-mediated solubilization is clinically relevant."
pdf_path: "/assets/digests/2026-05-30-evaluating-the-impact-of-intestinal-bile-salts-on-drug-absorption-using-pbpk/PMx_Evaluating_the_Impact_of_Intestinal_Bile_20260530.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper uses PBPK modeling to demonstrate that intestinal bile salt concentrations critically modulate the absorption of three poorly soluble BCS II drugs (efavirenz, cinnarizine, posaconazole) in the fasted state. For pharmacometricians modeling oral absorption, this work provides quantitative evidence that bile salt reductions of 50% (mimicking hepatic impairment) can decrease fraction absorbed by 19–41%, with the magnitude depending on the permeability model used. The paper is essential reading for anyone building or evaluating PBPK models for lipophilic, poorly soluble compounds where micelle-mediated solubilization is clinically relevant.

---

### Executive Summary
This study systematically evaluates how intestinal bile salt concentrations influence the absorption of three poorly soluble BCS II compounds—efavirenz, cinnarizine, and posaconazole—using physiologically-based pharmacokinetic (PBPK) modeling in the Simcyp Simulator. The authors developed and validated fit-for-purpose PBPK models for each compound in both fasted and fed states, then performed sensitivity analyses around gastrointestinal parameters (bile salts, pH, fluid volumes, gastric emptying) and permeability inputs. The key finding is that in the fasted state, drug absorption is most sensitive to bile salt concentrations compared to other GI parameters, with reductions in fraction absorbed (fa) of 19–41% following a two-fold reduction in bile salts, depending on the compound and permeability model. The work underscores the importance of accurately incorporating bile salt-dependent solubility data into PBPK models and highlights how variability in bile salts—particularly in special populations like hepatic impairment—can explain clinically observed differences in drug exposure. The study also reveals that the choice of permeability model (in vitro Papp vs. mechanistic effective permeability, MechPeff) substantially affects the predicted sensitivity to bile salts, with the MechPeff model generally showing less sensitivity due to compensatory increases in regional permeability. These insights have direct implications for formulation development, prediction of food effects, and dose adjustment in populations with altered bile salt physiology.

---

### Scientific Context & Motivation
Oral drug absorption for poorly soluble compounds depends critically on solubilization by intestinal bile salts, which form micelles that enhance drug solubility in the aqueous lumen. While the role of bile salts in facilitating absorption of lipophilic drugs is well-established, the quantitative impact of physiological variability in bile salt concentrations—especially in the fasted state—remains poorly characterized. Clinically, bile salt concentrations vary substantially among healthy individuals and are reduced by approximately two-fold in hepatic impairment patients. Most PBPK models use default population values for bile salt concentrations without systematically exploring their impact on absorption predictions. This study addresses the gap by performing structured sensitivity analyses around bile salt concentrations, alongside other GI parameters (pH, fluid volumes, gastric emptying), for three model compounds with high micelle-mediated solubility (≥78%). A key methodological question addressed is how the permeability modeling approach (simple Papp vs. MechPeff) alters the predicted sensitivity to bile salts, given the complex solubility–permeability interplay where micelle-bound drug may reduce the free drug concentration available for permeation. The work challenges the assumption that high micelle-mediated solubility universally translates into high bile salt sensitivity, revealing compound-specific dependencies.

---

## ⚡ Methodological Snapshot
The study employed the Simcyp Simulator (Version 23) with the mechanistic Advanced Dissolution Absorption and Metabolism (ADAM) model to develop PBPK models for efavirenz, cinnarizine, and posaconazole. Sensitivity analyses were performed by uniformly reducing bile salt concentrations, gastric emptying, luminal fluid volumes, and luminal pH by two-fold (with 30% CV), and by reducing effective permeability (Peff) by 50%. Two permeability modeling approaches were compared: direct input of in vitro Papp values scaled to Peff, and the mechanistic effective permeability (MechPeff) model that provides segment-specific permeability estimates. The fraction absorbed (fa) was used as the primary sensitivity endpoint.

---

## 🏗️ Structural Model Breakdown
The ADAM model used in this study is a multi-compartment transit model that divides the gastrointestinal tract into nine segments: stomach, duodenum, jejunum (four segments), ileum (two segments), and colon. Each segment has its own pH, bile salt concentration, fluid volume, and transit time. The total solubility in each segment is the sum of aqueous solubility (determined by Henderson-Hasselbalch equations based on pH and pKa) and micelle-mediated solubility (determined by bile salt concentration and the LogKm:w partition coefficient). A critical micelle concentration (CMC) of 1 mM is assumed; below this, no micelle-mediated solubility enhancement occurs. Dissolution is described using the diffusion layer model based on particle size. The MechPeff model predicts regional effective permeability by considering paracellular and transcellular transport, including the effect of the unstirred water layer and intestinal surface area. The free drug concentration in the enterocyte is assumed to be in equilibrium with the unbound drug in the portal vein. For posaconazole, the fraction unbound in the gut (fugut) was set equal to the plasma fraction unbound (fup).

---

### Detailed Methodological Analysis

#### Modeling Approach
PBPK modeling using the Simcyp Simulator Version 23 with the mechanistic Advanced Dissolution Absorption and Metabolism (ADAM) model. The ADAM model simulates drug dissolution and transit through nine segments of the gastrointestinal tract, incorporating pH-dependent solubility, micelle-mediated solubilization via bile salt partitioning, and regional differences in absorption surface area and transit times. For each compound, both fasted and fed state models were developed. Permeability was modeled using two approaches: (1) an in vitro apparent permeability (Papp) value from Caco-2 cell lines scaled to an effective permeability (Peff) applied uniformly across all segments, and (2) the mechanistic effective permeability (MechPeff) model that predicts segment-specific Peff values based on compound physicochemical properties and intestinal physiology.

#### Data Sources
Clinical pharmacokinetic data from published studies were used for model development and validation. For efavirenz, data from Ogburn et al. and Study DMP 266–108 (600 mg single dose tablet) were used. For cinnarizine, data from Nowacka-Krukowska et al. and Abouelatta et al. were used. For posaconazole, an existing model for oral suspension (Bhatnagar et al.) was adapted. Physicochemical data (pKa, LogP, solubility in biorelevant media, particle size) were obtained from the literature and in-house measurements. Solubility in fasted-state simulated intestinal fluid (FaSSIF) and fed-state simulated intestinal fluid (FeSSIF) were used to calibrate LogKm:w parameters.

#### Estimation Methods
Standard PBPK parameterization was used; no formal parameter estimation (e.g., nonlinear mixed-effects) was performed. Solubility inputs (S0 and LogKm:w) were either directly input from experimental data or back-calculated from pH-solubility profiles. LogKm:w values were calibrated (optimized) against observed FaSSIF and FeSSIF solubility data to match reported values. Model acceptance criteria were: simulated Cmax within 0.8–1.25-fold of observed values.

#### Model Evaluation
Models were evaluated by comparing simulated and observed plasma concentration-time profiles and AUC/Cmax ratios. For model validation, independent clinical studies not used in development were simulated. For efavirenz, validation studies included multiple fasted studies with AUC and Cmax within 0.8–1.25-fold; predicated fa range (0.54–0.67) aligned with the reported range (0.40–0.55). For cinnarizine, two validation studies showed mixed results (one within bounds, one underpredicted AUCinf but AUC0-t within range). For posaconazole, validation studies showed good recovery. Sensitivity analyses were evaluated by percent change in fa following parameter reductions, with all parameters reduced uniformly by two-fold across segments.

#### Covariate Analysis
No formal covariate analysis was performed in the traditional pharmacometric sense. Instead, a global sensitivity analysis was conducted by reducing five gastrointestinal parameters (bile salt concentrations, gastric emptying rate, luminal fluid volumes, luminal pH, and effective permeability) by a fixed factor (two-fold for GI parameters, 50% for Peff) and measuring the resulting change in fraction absorbed. The sensitivity ranking was determined by the magnitude of fa change for each parameter, with rankings reported separately for each compound, prandial state, and permeability model.

---

### Statistical Rigor Assessment
The sensitivity analysis approach is deterministic rather than probabilistic, using fixed two-fold reductions in parameters without a formal uncertainty propagation framework. The 30% CV assigned to the reduced parameters was intended to maintain consistency but does not represent a formal statistical distribution based on observed variability. The study did not perform formal hypothesis testing or confidence interval estimation for the sensitivity results. Model acceptance criteria (0.8–1.25-fold for Cmax) are standard for PBPK model evaluation but are empirical rather than statistical. The variability predictions for efavirenz (Cmax CV 93–95%) were substantially higher than observed (23–26%), indicating poor characterization of inter-individual variability in the model. The validation dataset was limited (1–2 studies per compound), limiting the statistical power to assess model robustness. The study design (sensitivity around a single point estimate) is appropriate for its exploratory purpose but does not constitute a rigorous statistical analysis of parameter importance.

---

## 📊 Key Findings
Sensitivity analyses revealed that bile salt concentrations are the dominant gastrointestinal parameter influencing absorption in the fasted state for efavirenz and posaconazole, while cinnarizine was most sensitive to pH due to its pH-dependent solubility. Specifically: (1) For efavirenz (95% micelle-mediated solubility), a two-fold reduction in fasted bile salts decreased fa by 41% (in vitro Papp model), and by 23% with MechPeff. Permeability reduction alone caused a 34% (Papp) to 54% (MechPeff) decrease in fa. (2) For cinnarizine (98% micelle-mediated solubility), fasted bile salt reduction decreased fa by only 19% with Papp and 4% with MechPeff, while pH changes had a greater effect (+28% fa). (3) For posaconazole (79% micelle-mediated solubility), fasted bile salt reduction decreased fa by 33% with Papp and 0% with MechPeff, but permeability was the dominant factor (−33% to −50% changes in fa). In the fed state, bile salt sensitivity decreased for most compounds due to higher overall bile salt concentrations, except for posaconazole where a 35% reduction in fa persisted. Simultaneous reductions in both bile salts and permeability produced approximately additive effects for fasted-state models, but not for fed-state models. The MechPeff model generally predicted lower baseline fa and reduced sensitivity to bile salts compared to the in vitro Papp input, suggesting that the mechanistic permeability model partially compensates for solubility limitations by increasing regional permeability estimates.

---

## 💡 Clinical & Regulatory Implications
The results have several direct clinical implications: (1) For BCS II compounds with high micelle-mediated solubility (≥78%), a two-fold reduction in bile salts (as seen in hepatic impairment) can decrease absorption by up to 41% in the fasted state, suggesting that these patients may require dose adjustment or administration with food to maintain therapeutic exposure. (2) The finding that efavirenz absorption is highly sensitive to bile salts in the fasted state (41% reduction in fa) supports its clinical recommendation for administration in the fasted state, as bile salt concentrations are more predictable in fasted conditions. (3) For posaconazole, permeability is a more critical limiting factor than bile salts, suggesting that formulation strategies (e.g., lipid-based systems, nanosuspensions) that enhance permeability may be more effective than those that simply increase solubility. (4) When using PBPK models for regulatory submissions involving hepatic impairment, modelers should explicitly include bile salt sensitivity analyses and document the permeability model used, as MechPeff models may underestimate the impact of bile salt reductions. (5) The moderate-to-high impact of luminal fluid volumes on absorption (up to 45% change in fa) suggests that fluid intake recommendations may need to be considered alongside food effects for these compounds.

---

### Strengths & Limitations

#### Strengths
- Systematic comparison of three BCS II compounds with diverse physicochemical properties (acid, base, neutral) using a consistent PBPK modeling framework.
- Direct comparison of two permeability modeling approaches (in vitro Papp vs. MechPeff) within the same analysis, highlighting how model choice affects sensitivity conclusions.
- Use of clinically observed data for model development and validation, with clear criteria for model fit (Cmax and AUC within 0.8–1.25-fold).
- Clinically relevant sensitivity analysis that mimics the two-fold reduction in bile salts observed in hepatic impairment, increasing translational relevance.
- Exploration of simultaneous reductions in bile salts and permeability, providing insight into additive vs. non-additive effects.

#### Limitations (Acknowledged by Authors)
- The efavirenz fed model overpredicted AUC, so it was only used for exploratory analyses.
- No adjustments were made to other model parameters when switching between permeability models to avoid confounding the comparison.
- The CMC was fixed at 1 mM in Simcyp, whereas in reality it is variable and dependent on bile salt composition and counterion concentrations.
- Particle size data for efavirenz was approximated from a bioequivalent batch, not the exact API.
- The study did not refine MechPeff models beyond the default parameterization, which may have led to lower baseline fa predictions.

#### Limitations (Expert Review)
- The sensitivity analysis used an arbitrary 50% reduction in bile salts across all GI segments uniformly, which may not reflect the segment-specific reductions observed in hepatic impairment.
- Only one CMC value (1 mM) was considered; sensitivity to CMC was not explored despite its known variability and potential impact on micelle-mediated solubilization.
- Model validation was limited to a small number of clinical studies per compound (1–2 studies), limiting assessment of predictive performance across diverse populations.
- The high predicted variability for efavirenz (CV 92–95%) compared to observed data (CV 23–26%) indicates the model overestimates inter-individual variability, possibly due to unaccounted correlations between parameters.
- The study did not perform a formal uncertainty analysis (e.g., Monte Carlo propagation of parameter uncertainty) to quantify confidence in the sensitivity rankings.
- The results are dependent on the specific formulation types modeled (IR tablet, suspension) and may not generalize to extended-release or lipid-based formulations that alter bile salt dependence.

#### Generalizability
The findings are likely generalizable to other BCS II compounds with high micelle-mediated solubility (≥70%), particularly weak acids and bases with LogP > 3. However, the compound-specific sensitivity to pH, fluid volumes, and permeability precludes a one-size-fits-all conclusion. The results may not apply to BCS IV compounds (low solubility, low permeability) or compounds with solubility mediated by other mechanisms (e.g., complexation, supersaturation). The conclusions regarding MechPeff vs. Papp models are specific to the Simcyp implementation and may not directly translate to other PBPK platforms that use different permeability algorithms.

---

### Key Equations

**Total Solubility Prediction (ADAM Model)**

{% raw %}
$$
S_{\text{total}} = S_{\text{aqueous}} + S_{\text{micelle}}
$$
{% endraw %}

The ADAM model predicts total solubility as the sum of aqueous solubility (from ionized species) and micelle-mediated solubility (from unionized species).

**Henderson-Hasselbalch for Solubility**

{% raw %}
$$
\text{pH} = \text{p}K_a + \log\left(\frac{[A^-]}{[HA]}\right)
$$
{% endraw %}

Used in the ADAM model to estimate solubility of each species (ionized/unionized) under physiological pH and bile salt concentrations.

**Micelle Partitioning**

{% raw %}
$$
\text{Log}K_{m:w} = \log\left(\frac{S_{\text{FaSSIF}} - S_0}{S_0 \cdot [BS]}\right)
$$
{% endraw %}

Bile micelle partitioning coefficient, where S_FaSSIF is fasted-state simulated intestinal fluid solubility, S_0 is intrinsic solubility, and [BS] is bile salt concentration. Calibrated against experimental solubility data.

**Fraction Absorbed (fa)**

{% raw %}
$$
f_a = \frac{A_{\text{absorbed}}}{A_{\text{dose}}}
$$
{% endraw %}

Fraction of dose absorbed, used as the primary endpoint for sensitivity analyses in this study.

---

### Figures & Tables

- **Figure 1**: Schematic diagram of the PBPK modeling strategy showing the workflow from compound selection, model development, validation, and sensitivity analysis.
  - *Significance*: Provides an overview of the study design and the decision points for model development.
- **Figure 2**: Simcyp ADAM model parameterization for solubility and formulation inputs, showing how bile salt concentrations, pH, and LogKm:w interact.
  - *Significance*: Illustrates the mechanistic framework used for predicting solubility and absorption within the ADAM model.
- **Figure 3**: Plasma concentration-time profiles for fasted and fed states for all three compounds, comparing simulated vs. observed data.
  - *Significance*: Validates the model performance for each compound in both prandial states.
- **Table 1**: Summary of micelle-mediated solubility and clinical food effects for efavirenz, cinnarizine, and posaconazole.
  - *Significance*: Establishes the selection criteria for model compounds based on high micelle-mediated solubility (≥70%) and positive food effect.
- **Table 2**: Solubility input parameters (S0 and LogKm:w) for each compound.
  - *Significance*: Documents how each compound was parameterized in the ADAM model, indicating whether LogKm:w was predicted or calibrated.
- **Table 3**: Results of the sensitivity analysis showing percent change in fa following a two-fold reduction in bile salts, gastric emptying, fluid volumes, pH, and Peff for all compounds in both prandial states and permeability models.
  - *Significance*: Central results table that enables comparison of the relative importance of each GI parameter across compounds, states, and models.
- **Table 4**: Results of simultaneous reductions in bile salts and Peff on fa.
  - *Significance*: Demonstrates additive vs. non-additive effects of combined parameter reductions, informing understanding of solubility–permeability interplay.

---

### Future Directions
This work raises several important questions for future research: (1) How should segment-specific bile salt reductions (rather than uniform reductions) be modeled in hepatic impairment and other disease states? (2) What is the impact of variable CMC (depending on bile salt species and ionic strength) on predictions of micelle-mediated solubility? (3) Can the MechPeff model be calibrated against observed fa data to improve both baseline predictions and sensitivity estimates? (4) How do lipid-based formulations or other enabling technologies alter the dependence of absorption on endogenous bile salts? (5) Clinical studies measuring both bile salt concentrations and drug absorption in the same individuals would strengthen the link between model predictions and clinical outcomes. (6) Extending this analysis to include BCS IV compounds and compounds with moderate micelle-mediated solubility (30–70%) would further define the boundary conditions for bile salt sensitivity.

---

### Expert Commentary
From a senior pharmacometrics perspective, this study exemplifies the strength and challenge of modern PBPK modeling for oral absorption. The strength lies in the mechanistic integration of physiological parameters (bile salts, pH, fluid volumes, permeability) that allows exploration of 'what-if' scenarios that would be impractical in clinical studies. The challenge is that the choice of permeability model—which modelers often treat as a minor technical detail—profoundly influences predictions. My takeaway is that the in vitro Papp model, while simpler, may be more appropriate for compounds where the solubility–permeability interplay is dominated by solubility limitations, whereas the MechPeff model may require additional calibration to avoid underestimating fa. The overprediction of variability for efavirenz (CV ~93% vs. observed ~25%) is a red flag that should prompt modelers to examine correlations between parameters (e.g., bile salts, fluid volumes, transit times) that might naturally co-vary and dampen overall variability. I also note that the 50% reduction in bile salts applied uniformly across all GI segments is a simplification—in reality, hepatic impairment likely affects proximal duodenum more than distal ileum, and the concentration-dependent CMC means that bile salt concentrations in the low range matter disproportionately. For practicing pharmacometricians, I recommend routinely including bile salt sensitivity in PBPK model development for BCS II/IV compounds, even when the primary analysis focuses on other covariates. This is particularly important for submissions involving hepatic impairment or pediatric populations where bile salt physiology differs from healthy adults.

---

### Bottom Line
For pharmacometricians developing PBPK models of poorly soluble compounds, this study provides compelling evidence that intestinal bile salt concentrations should be treated as a sensitive parameter, particularly in the fasted state. A two-fold reduction in bile salts can decrease fraction absorbed by up to 41% for highly micelle-dependent drugs like efavirenz. The choice between in vitro Papp and MechPeff permeability models fundamentally alters the predicted sensitivity to bile salts, with MechPeff showing less bile salt sensitivity due to compensatory permeability effects. When modeling special populations with altered bile salt physiology (e.g., hepatic impairment, cholestasis), modelers should consider including bile salt sensitivity analyses and, if using MechPeff, be aware that the model may underestimate the impact of bile salt reductions on absorption. Practical recommendations include: (1) always calibrate LogKm:w to biorelevant solubility data; (2) perform sensitivity analyses on bile salt concentrations, not just pH and fluid volumes; and (3) validate models against both fasted and fed data before using them to predict absorption in altered physiology.

---

---

## 📊 Figures

![Schematic diagram of PBPK modeling strategy.]({{ site.baseurl }}/assets/digests/2026-05-30-evaluating-the-impact-of-intestinal-bile-salts-on-drug-absorption-using-pbpk/figures/fig_01.png)

![Simcyp ADAM model parameterization for solubility and formulation inputs.]({{ site.baseurl }}/assets/digests/2026-05-30-evaluating-the-impact-of-intestinal-bile-salts-on-drug-absorption-using-pbpk/figures/fig_02.png)

![Plasma concentration-time profiles for fasted (A) and fed (B) efavirenz, fasted (C) and fed (D) cinnarizine, and fasted (E) and fed (F) posaconazole following a]({{ site.baseurl }}/assets/digests/2026-05-30-evaluating-the-impact-of-intestinal-bile-salts-on-drug-absorption-using-pbpk/figures/fig_03.png)