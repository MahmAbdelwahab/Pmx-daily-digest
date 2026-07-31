---
layout: post
title: "A Unified Whole Lung PBK Model for Inhalational Uptake of Gases and Aerosols in Men"
date: 2026-07-31
authors: "N.N., S.E.E., K.S."
journal: "N/A"
doi: "N/A"
paper_type: methodology
tags: [methodology]
excerpt_text: "This paper presents a unified PBK model for inhalational uptake of gases, vapors, and aerosols, incorporating 25 lung generations and key mechanisms like longitudinal diffusion and macrophage-mediated dissolution. The model requires minimal substance-specific parameters from NAMs and provides predictions of local lung and systemic concentrations. Parameter studies highlight the dominant role of Henry's law constant for gases and dissolution rates for particles."
pdf_path: "/assets/digests/2026-07-31-a-unified-whole-lung-pbk-model-for-inhalational-uptake-of-gases-and-aerosols-in/PMx_A_Unified_Whole_Lung_PBK_Model_for_Inhal_20260731.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a unified PBK model for inhalational uptake of gases, vapors, and aerosols, incorporating 25 lung generations and key mechanisms like longitudinal diffusion and macrophage-mediated dissolution. The model requires minimal substance-specific parameters from NAMs and provides predictions of local lung and systemic concentrations. Parameter studies highlight the dominant role of Henry's law constant for gases and dissolution rates for particles.

---

### Executive Summary
This paper presents a novel, unified physiologically based kinetic (PBK) model for predicting the inhalational uptake of gases, vapors, and aerosols in humans. The model divides the lung into 25 generations, incorporating mechanisms such as longitudinal diffusion, mucociliary clearance, and macrophage-mediated particle dissolution. It requires minimal substance-specific parameters, obtainable from new approach methodologies (NAMs), and provides predictions of both systemic and local lung concentrations. Parameter studies demonstrate the model's sensitivity to Henry's law constant for gases and dissolution rates for particles, highlighting its utility for risk assessment and drug development.

---

### Scientific Context & Motivation
Assessing the risk or benefit of inhaled substances is challenging due to the variety of forms (gas, vapor, particle, droplet) and complex biological processes. Existing PBK models are typically specific to either gases/vapors or particles, often with limited regional lung compartmentalization. Most models focus on systemic concentrations, neglecting localized lung dynamics and mechanisms like macrophage-mediated particle dissolution. This model addresses these gaps by providing a unified framework that integrates both gas and particle dynamics within a detailed lung structure.

---

## ⚡ Methodological Snapshot
The model is a multicompartmental PBK model that divides the lung into 25 generations (G1–G25) based on Yeh and Schum's symmetrical lung geometry. Each generation includes compartments for airway lumen, epithelial lining fluid (ELF), deposited particles, and tissue. The model incorporates longitudinal diffusion between airway lumina, radial diffusion into ELF and tissue, mucociliary clearance, and macrophage-mediated particle dissolution. The systemic part includes 11 permeability-limited tissue compartments. The model is implemented as a system of ODEs solved in R using deSolve. Input parameters are designed to be obtainable from NAMs, including Henry's law constant, diffusion coefficients, apparent permeability, and dissolution rates.

---

## 📐 Statistical Framework
The model is a deterministic, physiologically based kinetic model described by a system of ordinary differential equations (ODEs). The underlying assumptions include: (1) symmetrical lung geometry based on a single cast, (2) passive diffusion only (no active transport), (3) well-stirred tissue compartments within each lung region, (4) Henry's law for gas-liquid equilibrium, (5) first-order dissolution kinetics for particles, and (6) first-order clearance processes (mucociliary, macrophage). The model does not incorporate stochastic variability or uncertainty quantification.

---

### Estimator Behavior
The model is a deterministic ODE system; estimator behavior is not directly assessed. However, the sensitivity analyses indicate that predictions for gas/vapor uptake are most sensitive to Henry's law constant, while particle retention is most sensitive to dissolution rates within a specific range (0.1–10 μg/h/cm²). The model shows expected convergence to quasi-steady state for continuous gas exposure and biphasic clearance for particles.

---

### Validation Design
The model was evaluated through two parameter studies using hypothetical substances: (1) continuous exposure to gases/vapors with varying Henry's law constant and diffusion coefficients, and (2) bolus inhalation of particles with varying dissolution rates. Predictions were compared qualitatively to known behaviors (e.g., oxygen absorption in alveoli, clinical particle retention data). No formal validation against experimental data for specific substances was performed. Deposition fractions were obtained from the MPPD model. Sensitivity was assessed by varying individual parameters within plausible ranges derived from literature databases.

---

### Comparison to Alternatives
Existing PBK models for inhalation are typically specific to gases/vapors or particles, often with limited regional lung compartmentalization. This model unifies both applications and includes novel features like longitudinal diffusion and macrophage-mediated dissolution, which are absent in most current models. Compared to the ICRP HRTM, this model is more physiologically based and integrates with systemic PBK. The model's parameter requirements are designed to be minimal and obtainable from NAMs, unlike more complex models that require extensive chemical-specific data.

---

### Implementation Guidance
The model is implemented in R using the deSolve package. Users need to provide substance-specific parameters (Table 1) and physiological parameters (Appendix S1). For gases, key parameters are Henry's law constant and diffusion coefficients; for particles, dissolution rates and deposition fractions (from MPPD model) are critical. The model is computationally intensive due to 81 compartments, but simulations for single exposures are feasible on standard hardware. The authors provide detailed equations in Appendix S2 for independent implementation.

---

## 📊 Key Findings
1. The unified PBK model successfully predicts inhalational uptake for gases, vapors, and aerosols within a single framework. 2. Henry's law constant is the dominant parameter for gas/vapor absorption, strongly influencing ELF and blood concentrations. 3. For particles, dissolution rates in the range of 0.1–10 μg/h/cm² significantly impact lung retention, with macrophage-mediated dissolution becoming important over longer timeframes. 4. The model predicts biphasic clearance for particles: fast mucociliary clearance (first 48 h) and slow macrophage-mediated clearance (half-life ~250 days). 5. Longitudinal diffusion enables deeper lung penetration of gases, especially under shallow breathing conditions.

---

### Strengths & Limitations

#### Strengths
- Unified framework for gases, vapors, and aerosols.
- Detailed lung compartmentalization (25 generations) with key mechanisms (longitudinal diffusion, macrophage dissolution).
- Minimal substance-specific parameters obtainable from NAMs.
- Provides both systemic and local lung concentration predictions.
- Flexible for various exposure scenarios (continuous, bolus, single breath).

#### Limitations (Acknowledged by Authors)
- Only lower respiratory tract is modeled (no upper respiratory tract).
- Morphometric data based on a single lung cast.
- Only passive diffusion across epithelial barrier is modeled.
- No metabolic degradation or chemical reactions in ELF/tissue.
- Henry's law constant valid only for low molar fractions.
- Dissolution assumes single-species solubility.
- Translocation of particles to lymph/blood is not modeled.

#### Limitations (Expert Review)
- No formal sensitivity analysis or uncertainty quantification was performed.
- The model's complexity (81 compartments) may lead to parameter identifiability issues.
- Validation is limited to whole-lung data; generation-level predictions cannot be directly validated.
- The model does not account for particle size distributions or agglomeration.
- Active transport and membrane transporters are excluded, which may be important for some substances.

#### Generalizability
The model is designed to be generalizable across a wide range of substances (gases, vapors, droplets, particles) by using physicochemical parameters obtainable from NAMs. However, the morphometric data are based on a single lung cast, limiting generalizability to diverse populations (e.g., different ages, sexes, disease states). The parameter studies used hypothetical substances, so quantitative predictions for specific substances require validation.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the lung model structure showing 25 generations divided into conducting and respiratory airways, with compartments for lumen, ELF, particles, tissue, and macrophages.
  - *Significance*: Provides a visual overview of the model's compartmental structure and key processes.
- **Figure 2**: Predicted gas concentrations in trachea (G1) and alveoli (G25) during 30-min exposure, showing breath-by-breath fluctuations and time delay.
  - *Significance*: Illustrates the model's ability to capture cyclic breathing dynamics and regional concentration differences.
- **Figure 3**: Impact of Henry's law constant on gas concentrations in lumen and ELF, and transfer rates across generations.
  - *Significance*: Demonstrates the dominant role of Henry's law constant in determining gas absorption patterns.
- **Figure 4**: Effect of Henry's law constant and diffusion coefficient on absorption/desorption and blood concentrations.
  - *Significance*: Shows that Henry's law constant strongly affects ELF and blood concentrations, while diffusion coefficient has minimal effect on blood levels.
- **Figure 5**: Predicted total lung burden over time for bioinert particles, showing fast mucociliary clearance and slow macrophage-mediated clearance.
  - *Significance*: Validates the model's clearance predictions against clinical observations and highlights biphasic clearance kinetics.
- **Figure 6**: Impact of dissolution rates in lining fluid and macrophages on lung retention over 24 hours and 1 year.
  - *Significance*: Identifies the critical range of dissolution rates that significantly affect long-term particle retention.

---

### Code & Reproducibility Assessment
The model was implemented in R (v4.2.2) using the deSolve package (v1.34). The code is not publicly available in the manuscript, but the detailed description in Appendix S2 should allow for reproduction.

---

### Future Directions
Future work should include validation against in vivo data for specific substances, extension to include active transport and metabolic processes, incorporation of particle size distributions, and adaptation for diverse populations (e.g., children, diseased lungs). The model could also be extended to include the upper respiratory tract and to simulate repeated exposures.

---

### Expert Commentary
The model represents a significant step forward in inhalation PBK modeling by integrating gas and particle dynamics within a single framework. The inclusion of macrophage-mediated dissolution is particularly novel and addresses a key gap in long-term particle retention modeling. However, the model's complexity (81 compartments) may pose challenges for parameter identifiability and validation. The reliance on a single lung cast for morphometric data limits generalizability to diverse populations. Future work should focus on validating the model against in vivo data for specific substances and extending it to include active transport and metabolic processes.

---

### Bottom Line
This unified PBK model provides a comprehensive, multicompartmental framework for predicting inhalational uptake of gases, vapors, and aerosols, incorporating key mechanisms like longitudinal diffusion and macrophage-mediated dissolution. It is designed to use minimal substance-specific parameters obtainable from NAMs, making it a valuable tool for risk assessment and drug development. However, validation is limited to whole-lung data, and the model's complexity may require careful parameterization for specific applications.

---