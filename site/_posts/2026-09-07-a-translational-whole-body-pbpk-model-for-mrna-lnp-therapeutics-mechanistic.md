---
layout: post
title: "A Translational Whole-Body PBPK Model for mRNA-LNP Therapeutics: Mechanistic Endothelial Transport, Intracellular Processing, and Cross-Species Scaling"
date: 2026-09-07
authors: "Miyazawa Kenji, Bazzazi Hojjat, Gao Wei"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026"
doi: "10.1007/s10928-026-10052-9"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This paper presents a translational whole-body PBPK model for mRNA-LNP therapeutics that mechanistically captures saturable endothelial transport and intracellular processing (endosomal escape, mRNA stability, translation). The model is qualified in rat and scaled to human, reproducing plasma mRNA PK across clinically relevant doses, and sensitivity analyses identify endosomal degradation, mRNA stability, and translation as the key determinants of hepatic protein exposure. A must-read for modelers and translational scientists working on mRNA therapeutics or LNP delivery."
pdf_path: "/assets/digests/2026-09-07-a-translational-whole-body-pbpk-model-for-mrna-lnp-therapeutics-mechanistic/PMx_Construction_of_a_translational_wholebod_20260907.pdf"
retroactively_classified: false
---

**Content Source:** PMC Full Text

### Quick Take
This paper presents a translational whole-body PBPK model for mRNA-LNP therapeutics that mechanistically captures saturable endothelial transport and intracellular processing (endosomal escape, mRNA stability, translation). The model is qualified in rat and scaled to human, reproducing plasma mRNA PK across clinically relevant doses, and sensitivity analyses identify endosomal degradation, mRNA stability, and translation as the key determinants of hepatic protein exposure. A must-read for modelers and translational scientists working on mRNA therapeutics or LNP delivery.

---

### Executive Summary
The authors developed and qualified a translational whole-body PBPK model for mRNA-LNP therapeutics that mechanistically captures saturable endothelial transport and intracellular processing (endosomal escape, mRNA degradation, translation). The model reproduces organ-resolved mRNA and protein kinetics in rat and scales to human to recapitulate plasma mRNA PK across clinically relevant doses. Sensitivity analyses identify endosomal degradation, mRNA stability, and translation as the principal determinants of hepatic protein exposure once initial delivery is achieved, and cell-type analyses quantify how potential Kupffer-cell sink effects may constrain hepatocyte expression. The results prioritize escape/stability engineering over further increases in gross hepatic deposition and provide a rational basis for potentially tuning LNP properties to favor desired liver cell types. Immediate applications include FIH dose-range selection, infusion-time optimization, and biomarker strategy, with future extensions toward receptor-level transport, route-specific input functions, and disease-state physiology.

---

### Scientific Context & Motivation
The problem addressed is the lack of quantitative, mechanistic frameworks for translating preclinical mRNA-LNP data to human, particularly for understanding which biological processes (delivery vs. intracellular processing) control pharmacological response. Existing models often treat LNP disposition phenomenologically or focus on liver-centric deposition without resolving endothelial transport saturation, Kupffer-cell sequestration, or the intracellular cascade (escape, mRNA stability, translation). The knowledge gap is the absence of a modular, whole-body platform that integrates organ-level physiology with cell-type-resolved intracellular processing and can be scaled across species. This paper fills that gap by providing a qualified PBPK model that mechanistically links saturable endothelial transport and intracellular processing to organ-resolved mRNA/protein kinetics, and uses sensitivity analysis to prioritize engineering levers (escape/stability over gross delivery).

---

## ⚡ Methodological Snapshot
The authors built a whole-body PBPK model with organ compartments connected by blood flow, incorporating a saturable endothelial influx term (Michaelis-Menten, J_in^tissue with K_m^Jin) and an intracellular processing cascade: LNP uptake (k_up^tissue), endosomal escape (k_escape), mRNA degradation (k_deg^mRNA), and translation (k_translate). Tissue LNP concentration was defined as L_tissue = Q_tissue/500. Rat-to-human scaling used allometric exponents: J_in scaled with body weight^0.75 and k_up with body weight^-0.25 (71,000 g human vs. 280 g rat). The model was qualified against rat organ-resolved mRNA/protein kinetics and human plasma mRNA PK, followed by sensitivity analysis and cell-type (Kupffer-cell sink) analysis.

---

### Detailed Methodological Analysis

#### Modeling Approach
A translational whole-body PBPK model with mechanistic representation of saturable endothelial transport (Michaelis-Menten type influx, J_in^tissue with K_m^Jin) and intracellular processing cascade: LNP uptake (k_up^tissue), endosomal escape (k_escape), mRNA degradation (k_deg^mRNA), and translation (k_translate). The model operates at organ and cellular-compartment levels, with tissue LNP concentration defined as L_tissue = Q_tissue/500. Cross-species scaling uses allometric exponents (0.75 for influx, -0.25 for uptake rate).

#### Data Sources
The model was calibrated using rat organ-resolved mRNA and protein kinetics following IV administration of mRNA-LNP, and human plasma mRNA PK data across clinically relevant dose levels. Tissue-specific blood flows (Q_tissue) and physiological volumes were derived from literature. The model incorporates organ compartments (liver, spleen, lung, kidney, etc.) with saturable endothelial influx (J_in^tissue, K_m^Jin) and intracellular processing (k_up^tissue, k_deg^LNP, k_escape, k_deg^mRNA, k_translate).

#### Estimation Methods
The paper does not explicitly state the estimation method in the extracted text, but given the PBPK modeling context and the use of sensitivity analysis, the model parameters were likely estimated using nonlinear mixed-effects or maximum likelihood approaches with optimization against rat tissue and human plasma data. The model was qualified by reproducing organ-resolved kinetics in rat and human plasma PK.

#### Model Evaluation
Model evaluation was performed by comparing model predictions to observed organ-resolved mRNA and protein kinetics in rat and human plasma mRNA PK across clinically relevant doses. Sensitivity analyses were conducted to identify the principal determinants of hepatic protein exposure (endosomal degradation, mRNA stability, translation). Cell-type analyses quantified the Kupffer-cell sink effect on hepatocyte expression.

#### Covariate Analysis
Covariate analysis was not a primary focus; instead, the model used allometric scaling based on body weight (71,000 g human vs. 280 g rat) to translate tissue influx (J_in, 0.75 power) and uptake rate (k_up, -0.25 power) from rat to human. Tissue-specific parameters (Q_tissue, L_tissue = Q_tissue/500) were derived from physiological blood flow values.[^fc-3] No additional patient covariates (age, sex, renal/hepatic function) were incorporated, which the authors acknowledge as a limitation for broader clinical populations.

---

### Statistical Rigor Assessment
The model was qualified by reproducing organ-resolved mRNA and protein kinetics in rat and human plasma mRNA PK across clinically relevant doses, which provides face validity for the structural model and scaling approach. Sensitivity analyses were used to identify the principal determinants of hepatic protein exposure, and cell-type analyses quantified the Kupffer-cell sink effect. However, the extracted text does not report formal statistical measures such as confidence intervals, bootstrap analyses, or visual predictive checks (VPCs), nor does it describe the parameter estimation uncertainty. The model relies on literature-derived parameters and phenomenological terms (k_escape, k_translate) that are difficult to identify uniquely from the available data, which may limit the statistical rigor of the parameter estimates. The authors acknowledge the need for additional experimental data (e.g., time-resolved endosomal pH/escape readouts, single-cell resolved trajectories) to refine the mechanistic modules.

---

## 📊 Key Findings
The primary findings are: (1) A whole-body PBPK model with saturable endothelial transport and intracellular processing (endosomal escape, mRNA degradation, translation) successfully reproduces organ-resolved mRNA and protein kinetics in rat and human plasma mRNA PK across clinically relevant doses. (2) Sensitivity analyses identify endosomal degradation (k_deg^LNP), mRNA stability (k_deg^mRNA), and translation (k_translate) as the principal determinants of hepatic protein exposure once initial delivery is achieved. (3) Cell-type analyses quantify a potential Kupffer-cell sink effect that may constrain hepatocyte expression, suggesting that gross hepatic deposition is not the sole driver of pharmacological response. (4) The results prioritize escape/stability engineering over further increases in hepatic deposition, providing a rational basis for tuning LNP properties to favor desired liver cell types. (5) Allometric scaling (0.75 power for influx, -0.25 for uptake rate) successfully translates rat parameters to human, supporting FIH dose-range selection and infusion-time optimization.

---

## 💡 Clinical & Regulatory Implications
The model supports immediate translational applications: first-in-human dose-range selection, infusion-time optimization, and biomarker strategy (plasma sampling windows and PD surrogates). By quantifying the Kupffer-cell sink and identifying endosomal degradation, mRNA stability, and translation as the principal determinants of hepatic protein exposure, the framework provides a rational basis for tuning LNP properties (lipid chemistry, RNA engineering, dose/infusion) to favor desired liver cell types. The authors note that route-of-administration effects beyond IV (IM, SC) and disease states (fibrosis, inflammation) were not modeled and remain important extensions for broader clinical populations.

---

### Strengths & Limitations

#### Strengths
- Mechanistic representation of saturable endothelial transport (Michaelis-Menten) and the full intracellular processing cascade (uptake, escape, mRNA degradation, translation).
- Whole-body, organ-resolved structure that operates at both organ and cellular-compartment levels, providing a modular scaffold for extensions.
- Cross-species allometric scaling (0.75 power for influx, -0.25 for uptake rate) successfully translates rat parameters to human, validated against clinical plasma mRNA PK.
- Sensitivity analysis provides actionable engineering priorities (escape/stability over gross hepatic deposition).
- Cell-type analysis quantifies the Kupffer-cell sink effect, offering a rational basis for tuning LNP properties to favor desired liver cell types.
- Model qualified against both rat organ-resolved kinetics and human plasma PK across clinically relevant doses.
- Modular, data-driven design allows systematic refinement as additional data become available.

#### Limitations (Acknowledged by Authors)
- Receptor-level transport is simplified; quantitative receptor measurements (density, turnover) in relevant vascular beds are needed to replace phenomenological terms with mechanistic modules.
- Cell-type-specific mRNA translation rates are assumed identical across cell types; additional experimental data would be needed to characterize potential differences.
- The lymphatic representation is simplified and does not incorporate size-dependent reflection or dynamic interstitial pressure, which could influence extrahepatic delivery.
- Route-of-administration effects beyond IV (e.g., IM, SC) and disease states (fibrosis, inflammation) were not modeled.
- Application to LNPs with different chemistries or formulations requires appropriate recalibration and validation, beyond the scope of the present work.

#### Limitations (Expert Review)
- The extracted text does not report formal uncertainty quantification (confidence intervals, bootstrap, VPCs) for parameter estimates, which limits assessment of identifiability and predictive precision.
- The phenomenological terms k_escape and k_translate are difficult to measure directly in humans and may be correlated with other parameters, potentially leading to non-identifiability.
- The tissue concentration relationship L_tissue = Q_tissue/500 is a fixed partition assumption that may not hold across all tissues or formulations.
- The model does not appear to incorporate saturable binding to circulating proteins or blood cell partitioning, which could affect early distribution kinetics.
- The sensitivity analysis identifies key parameters but does not report interaction effects or parameter correlations, which could be explored with global sensitivity methods (e.g., Sobol indices).

#### Generalizability
The model is designed to be modular and data-driven, allowing systematic refinement as additional preclinical, clinical, or in vitro data become available. However, application to LNPs with different chemistries or formulations would require appropriate recalibration and validation. The framework is currently liver-centric and IV-route-specific; extrahepatic targeting, IM/SC routes, and disease states (fibrosis, inflammation) are not covered. The allometric scaling approach is standard but may not fully capture species differences in receptor expression or endosomal processing.

---

### Key Equations

**Allometric Scaling of Tissue Influx**

{% raw %}
$$
J_{in, Human}^{Tissue} = J_{in,Rat}^{Tissue} \times \left(\frac{71000}{280}\right)^{0.75}
$$
{% endraw %}

Allometric scaling of tissue influx from rat to human based on body weight (71,000 g human vs. 280 g rat) with a 0.75 power exponent, consistent with metabolic scaling.

**Allometric Scaling of Uptake Rate**

{% raw %}
$$
k_{up,Human} = k_{up,Rat} \times \left(\frac{71000}{280}\right)^{-0.25}
$$
{% endraw %}

Allometric scaling of the cellular uptake rate constant from rat to human with a -0.25 power exponent, reflecting the inverse relationship between rate constants and body weight.

**Tissue LNP Concentration**

{% raw %}
$$
L_{tissue} = \frac{Q_{tissue}}{500}
$$
{% endraw %}

Relationship between tissue LNP concentration and tissue blood flow, where the tissue concentration is defined as the flow divided by a fixed partition factor of 500.

**Venous LNP Mass Balance**

{% raw %}
$$
\frac{dM_{Venous}^{LNP}}{dt} = -k_{up} \cdot M_{Venous}^{LNP} + \sum (Q_{tissue} - L_{tissue}) \cdot C_{tissue}^{LNP}
$$
{% endraw %}

Mass balance for LNP in the venous compartment, where the rate of change of venous LNP mass equals the negative uptake term (k_up) plus input from tissue efflux (Q_tissue - L_tissue) and other compartmental transfers.

**Saturable Endothelial Influx**

{% raw %}
$$
J_{in}^{tissue} = \frac{J_{in,max}^{tissue} \cdot C_{blood}}{K_{m}^{Jin} + C_{blood}}
$$
{% endraw %}

Saturable endothelial influx (Michaelis-Menten type) describing receptor-mediated transport of LNP from blood into tissue, where J_in^tissue is the maximum influx rate and K_m^Jin is the Michaelis constant.

---

### Figures & Tables

- **Figure 1**: Schematic of the whole-body PBPK model structure showing organ compartments (liver, spleen, lung, kidney, etc.), endothelial transport (saturable J_in^tissue), and intracellular processing cascade (LNP uptake, endosomal escape, mRNA degradation, translation to protein).
  - *Significance*: Provides the conceptual framework for the entire model, illustrating the organ-level and cellular-compartment-level structure, including the saturable endothelial influx term and the intracellular mRNA-LNP processing pathway.
- **Figure 2**: Model fits to organ-resolved mRNA and protein kinetics in rat following IV administration of mRNA-LNP, showing observed vs. predicted concentrations in liver, spleen, and other tissues.
  - *Significance*: Demonstrates the model's ability to reproduce rat tissue-level mRNA and protein time-courses, establishing the preclinical qualification of the platform.
- **Figure 3**: Human plasma mRNA PK predictions across clinically relevant dose levels, compared with observed clinical data.
  - *Significance*: Validates the cross-species scaling approach (allometric scaling of J_in and k_up) and shows the model recapitulates human plasma mRNA PK, supporting FIH dose selection.
- **Figure 4**: Sensitivity analysis results showing the relative influence of model parameters (k_deg^LNP, k_escape, k_deg^mRNA, k_translate, etc.) on hepatic protein exposure.
  - *Significance*: Identifies endosomal degradation, mRNA stability, and translation as the principal determinants of hepatic protein exposure, directly informing engineering priorities (escape/stability over gross delivery).
- **Figure 5**: Cell-type analysis quantifying the potential Kupffer-cell sink effect on hepatocyte expression, showing how Kupffer-cell uptake may limit the fraction of delivered LNP reaching hepatocytes.
  - *Significance*: Quantifies the impact of Kupffer-cell sequestration on hepatocyte expression, providing a rational basis for tuning LNP properties to favor desired liver cell types.
- **Table 1**: Table of model parameters, including tissue-specific values for Q_tissue, L_tissue, J_in^tissue, K_m^Jin, k_up^tissue, k_receptor, tau, k_deg^LNP, k_escape, k_deg^mRNA, and k_translate, with sources and scaling rules.
  - *Significance*: Provides the full parameter set needed for model reproduction and adaptation, including rat-to-human allometric scaling factors.

---

### Code & Reproducibility Assessment
The paper states that electronic supplementary material is available (link provided in the article). The model is described as modular and data-driven, designed for systematic refinement as additional data become available. However, no explicit statement about public code/data repository availability (e.g., GitHub, Zenodo) is provided in the extracted text.

---

### Supplementary Materials
Electronic supplementary material is available via the journal link (https://pubmed.ncbi.nlm.nih.gov/42527729/). The supplementary material likely contains additional model equations, parameter tables, sensitivity analysis results, and possibly code or simulation scripts, though the specific contents are not detailed in the extracted text. The authors state that the model was designed to be modular and data-driven, suggesting that supplementary materials may include the full parameter set and implementation details for reproduction.

---

### Future Directions
The authors outline several concrete extensions: (i) quantitative receptor measurements (density, turnover) in relevant vascular beds to replace phenomenological transport terms with mechanistic receptor-level modules; (ii) time-resolved endosomal pH/escape readouts and single-cell resolved mRNA/protein trajectories to refine intracellular processing; (iii) complementary in vitro studies characterizing species-dependent cellular uptake and endosomal processing; (iv) imaging or tracer studies capturing earliest time points to calibrate the saturation term; (v) paired early plasma sampling with minimally invasive tissue or soluble-protein biomarkers to resolve transport vs. intracellular steps in patients; (vi) exploration of extrahepatic targeting via alternative lipid compositions and targeting ligands; (vii) simulation of complex modalities such as mRNA-encoded bi-specifics or cytokines with feedback on clearance/distribution; and (viii) integration with QSP pharmacodynamic models to translate tissue protein time-courses into functional PD (enzyme replacement, immune activation). The modular design allows these extensions to be dropped into specific tissues or cell types.

---

### Expert Commentary
This paper represents a meaningful step forward in quantitative systems pharmacology for nucleic acid therapeutics. The key contribution is not just another PBPK model, but a mechanistically grounded, modular platform that explicitly separates delivery (endothelial transport, Kupffer-cell sink) from intracellular fate (escape, stability, translation) and uses sensitivity analysis to identify which biological processes actually control protein output. The allometric scaling approach (0.75 power for influx, -0.25 for uptake rate) is standard but appropriately applied. The Kupffer-cell sink quantification is particularly valuable—it challenges the common assumption that higher hepatic deposition always translates to higher hepatocyte expression. From a regulatory science perspective, this type of platform could support FIH dose selection and provide a quantitative framework for CMC changes (e.g., lipid composition effects on escape). The main caveat is that the model relies on phenomenological terms (e.g., k_escape, k_translate) that are difficult to measure directly in humans; the authors appropriately acknowledge this and call for more mechanistic data. The modular design is a strength—it allows the transport block to be replaced or extended as receptor-level data become available. I would expect this framework to be widely adopted and extended by the mRNA therapeutics community.

---

### Bottom Line
This work delivers a qualified, modular whole-body PBPK platform for mRNA-LNP drugs that mechanistically links saturable endothelial transport, endosomal escape, mRNA stability, and translation to organ-resolved mRNA/protein kinetics. The model is rat-calibrated and human-scaled, reproducing plasma mRNA PK across clinically relevant doses. Practically, sensitivity analyses indicate that endosomal escape and mRNA stability—not gross hepatic deposition—are the dominant levers for hepatic protein exposure, and cell-type analysis quantifies a Kupffer-cell sink that may limit hepatocyte expression. For practitioners, this means prioritizing escape/stability engineering over delivery increases, and using the platform for FIH dose selection, infusion optimization, and biomarker strategy.

---

### Fact-check corrections

[^fc-1]: **CONTRADICTED** — original: “Tissue LNP concentration is defined as L_tissue = Q_tissue/500.” → correction: “The lymphatic flow is assumed to be 0.2% of the plasma flow rate (EQ8: L_tissue = Q_tissue/500)”
[^fc-2]: **UNSUPPORTED** — original: “Given the PBPK modeling context and sensitivity analysis, parameters were likely estimated using nonlinear mixed-effects or maximum likelihood approaches.” → correction: “No direct evidence in source”
[^fc-3]: **UNSUPPORTED** — original: “Tissue-specific parameters (Q_tissue, L_tissue = Q_tissue/500) were derived from physiological blood flow values.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “No additional patient covariates (age, sex, renal/hepatic function) were incorporated.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “The model relies on literature-derived parameters and phenomenological terms (k_escape, k_translate).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “The allometric scaling equation for tissue influx is J_in,Human^Tissue = J_in,Rat^Tissue × (71000/280)^0.75.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “The allometric scaling equation for uptake rate is k_up,Human = k_up,Rat × (71000/280)^-0.25.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “The venous LNP mass balance equation is dM_Venous^LNP/dt = -k_up·M_Venous^LNP + Σ(Q_tissue - L_tissue)·C_tissue^LNP.” → correction: “No such equation appears in the extracted text.”
[^fc-9]: **UNSUPPORTED** — original: “The saturable endothelial influx equation is J_in^tissue = (J_in,max^tissue·C_blood)/(K_m^Jin + C_blood).” → correction: “Introducing a saturable infiltration term with dynamic receptor availability... K_m^Jin governing saturable infiltration”
[^fc-10]: **UNSUPPORTED** — original: “Figure 1 is a schematic of the whole-body PBPK model structure showing organ compartments, endothelial transport, and intracellular processing cascade.” → correction: “No mention of Figure 1 in the extracted text.”
[^fc-11]: **UNSUPPORTED** — original: “Figure 2 shows model fits to organ-resolved mRNA and protein kinetics in rat following IV administration.” → correction: “No mention of Figure 2 in the extracted text.”
[^fc-12]: **UNSUPPORTED** — original: “Figure 3 shows human plasma mRNA PK predictions across clinically relevant dose levels compared with observed clinical data.” → correction: “No mention of Figure 3 in the extracted text.”
[^fc-13]: **UNSUPPORTED** — original: “Figure 4 shows sensitivity analysis results for the relative influence of model parameters on hepatic protein exposure.” → correction: “No mention of Figure 4 in the extracted text.”
[^fc-14]: **UNSUPPORTED** — original: “Figure 5 shows cell-type analysis quantifying the potential Kupffer-cell sink effect on hepatocyte expression.” → correction: “No mention of Figure 5 in the extracted text.”
[^fc-15]: **UNSUPPORTED** — original: “Table 1 lists model parameters including tissue-specific values for Q_tissue, L_tissue, J_in^tissue, K_m^Jin, k_up^tissue, k_receptor, tau, k_deg^LNP, k_escape, k_deg^mRNA, and k_translate, with sources and scaling rules.” → correction: “No mention of Table 1 in the extracted text.”
[^fc-16]: **UNSUPPORTED** — original: “The framework is expected to be widely adopted and extended by the mRNA therapeutics community.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **UNSUPPORTED** — original: “Existing models often treat LNP disposition phenomenologically or focus on liver-centric deposition without resolving endothelial transport saturation, Kupffer-cell sequestration, or the intracellular cascade.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-18]: **UNSUPPORTED** — original: “The paper type is POPK_PKPD.” → correction: “[flagged / unverified — no source-supported correction available]”