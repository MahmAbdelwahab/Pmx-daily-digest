---
layout: post
title: "Transporter-Drive Interstitial Tissue Exposure and Pharmacodynamic Response of Meropenem in Sepsis: A Mechanistic PBPK Modeling Study"
date: 2026-09-17
authors: "Ben Olivo L, de Lemos JLS, Rodrigues VJ, de Araújo BV"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70335"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This study presents a whole-body mechanistic PBPK model for meropenem that explicitly incorporates OAT3-mediated active tubular secretion and DHP-mediated hydrolysis, scaled to sepsis and septic shock with disease-specific physiological alterations. The model reveals a clear dissociation between plasma and interstitial tissue exposure and demonstrates that routine dose escalation to maximum ILAS-recommended regimens yields minimal additional antibacterial benefit because the PD effect is already near plateau. Pharmacometricians and critical care clinicians should read this for its mechanistic integration of transporters, disease physiology, and tissue-resolved PD assessment."
pdf_path: "/assets/digests/2026-09-17-transporter-drive-interstitial-tissue-exposure-and-pharmacodynamic-response-of/PMx_TransporterDrive_Interstitial_Tissue_Exp_20260917.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study presents a whole-body mechanistic PBPK model for meropenem that explicitly incorporates OAT3-mediated active tubular secretion and DHP-mediated hydrolysis, scaled to sepsis and septic shock with disease-specific physiological alterations. The model reveals a clear dissociation between plasma and interstitial tissue exposure and demonstrates that routine dose escalation to maximum ILAS-recommended regimens yields minimal additional antibacterial benefit because the PD effect is already near plateau. Pharmacometricians and critical care clinicians should read this for its mechanistic integration of transporters, disease physiology, and tissue-resolved PD assessment.

---

### Executive Summary
This paper develops and validates a whole-body PBPK model for meropenem in PK-Sim, mechanistically implementing renal elimination as the sum of glomerular filtration and OAT3-mediated active tubular secretion (basolateral uptake with apical efflux), plus non-renal clearance via DHP-mediated hydrolysis. The model was validated against published plasma and tissue data in healthy volunteers and then scaled to sepsis and septic shock by incorporating disease-specific changes in GFR, OAT3 catalytic turnover (kcat), and endothelial permeability. Simulations in a virtual septic population (n=100) under ILAS-recommended typical and maximum dosing regimens revealed marked tissue-specific heterogeneity in unbound interstitial exposure and a clear dissociation from plasma concentrations. Predicted clearance increased in sepsis (augmented renal clearance) and decreased in septic shock (impaired renal function). Critically, PD simulations using an Emax model against E. coli and K. pneumoniae showed that standard dosing already achieves near-maximal antibacterial effect in most tissues, with dose escalation providing minimal additional benefit—except in the kidney, where therapeutic failure remained 33.3% regardless of dose under conditions of augmented renal clearance. The work underscores the limitations of plasma-only PK assessment and supports individualized, mechanism-informed dosing optimization.

---

### Scientific Context & Motivation
Sepsis remains a leading cause of morbidity and mortality, and meropenem is a cornerstone of empirical therapy. However, clinical failure persists even when plasma PK targets are achieved, highlighting a fundamental limitation of plasma-centered pharmacokinetic assessment. Sepsis induces dynamic, organ-specific changes in perfusion, endothelial permeability, and transporter expression that decouple plasma from tissue exposure. While augmented renal clearance (ARC) is recognized as a driver of subtherapeutic β-lactam exposure, the contribution of membrane transporters—particularly OAT3-mediated tubular secretion—to meropenem disposition is rarely incorporated into clinical PK models. This study addresses the knowledge gap by building a transporter-informed PBPK framework that explicitly represents OAT3-mediated secretion and DHP-mediated hydrolysis, scales to sepsis severity states, and links tissue-resolved exposure to antibacterial PD response. It challenges the paradigm of empirical dose escalation by demonstrating that PD saturation limits the benefit of higher exposure in most tissues, while identifying the kidney as a compartment where ARC-driven failure persists despite maximum dosing.

---

## ⚡ Methodological Snapshot
A whole-body mechanistic PBPK model for meropenem was developed in PK-Sim (Open Systems Pharmacology Suite). Renal elimination was implemented mechanistically as the sum of glomerular filtration and active tubular secretion, with basolateral uptake via OAT3 and apical efflux into the tubular lumen. Non-renal clearance was modeled via DHP-mediated hydrolysis. The healthy volunteer model was validated against six published clinical studies, then scaled to sepsis and septic shock by incorporating disease-specific physiological changes (GFR alterations, optimized OAT3 kcat, optimized endothelial permeability). A virtual population of 100 subjects was simulated under ILAS-recommended typical and maximum dosing regimens, and unbound interstitial concentrations were predicted for kidney, lung, liver, and subcutaneous tissue. Antibacterial effect against E. coli and K. pneumoniae was evaluated using a published two-subpopulation (susceptible and dormant) PK/PD model driven by simulated unbound tissue concentrations.

---

## 🏗️ Structural Model Breakdown
The whole-body PBPK model in PK-Sim represents the body as interconnected compartments corresponding to organs and tissues, each with organ-specific blood flows, volumes, and partition coefficients. Meropenem distribution is governed by permeability-limited tissue uptake with charge-dependent cellular permeability (Schmitt method) and Rodgers-Rowland partition coefficients. The kidney is modeled with explicit transporter-mediated processes: basolateral OAT3-mediated uptake from blood into renal tubular cells (Michaelis-Menten kinetics with Km 847 μM and disease-specific kcat), followed by apical efflux into the tubular lumen (Km 770 μM, kcat 128.56 min⁻¹). Glomerular filtration is represented as a GFR fraction parameter (1.0 healthy, 3.5 sepsis, 0.8 septic shock). Non-renal elimination occurs via DHP-mediated hydrolysis in tissues (Km 2.0 mM, Vmax 8.4 μmol/L/min). Endothelial permeability (Pend) governs plasma-to-interstitial exchange and was optimized to 2.4 × 10⁻⁴ cm/min for disease states (vs. PK-Sim default of 100 cm/min in healthy volunteers, reflecting sepsis-induced endothelial dysfunction). The PD component uses a two-subpopulation bacterial model with susceptible (S) and dormant (D) subpopulations, driven by unbound interstitial concentrations, with an Emax concentration-effect relationship characterized by EC50 and Hill coefficient γ.

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole-body mechanistic PBPK model implemented in PK-Sim (Open Systems Pharmacology Suite). Compound-specific physicochemical properties (molecular weight 383.46 g/mol, log P −2.96, pKa 3.73 acid/8.39 base, fraction unbound 0.98) were used with Rodgers and Rowland partition coefficients and charge-dependent Schmitt cellular permeabilities. Renal elimination was modeled as GFR plus OAT3-mediated basolateral uptake (Km 847 μM, optimized kcat) with apical efflux (Km 770 μM, kcat 128.56 min⁻¹). Non-renal clearance via DHP-mediated hydrolysis (Km 2.0 mM, Vmax 8.4 μmol/L/min). Disease scaling incorporated GFR fraction changes (3.5 in sepsis, 0.8 in septic shock vs. 1.0 in healthy), optimized OAT3 kcat (525.98 min⁻¹ in sepsis, 300.85 min⁻¹ in septic shock vs. 3548.9 min⁻¹ in healthy), and optimized endothelial permeability (2.4 × 10⁻⁴ cm/min).

#### Data Sources
Clinical data from six published healthy volunteer studies (Bax, Christensson, Krueger, Leroy, Ljungberg, Nilsson-Ehle) providing plasma concentration-time data, and two critically ill patient studies: Roberts et al. (sepsis, plasma and subcutaneous microdialysis, short infusion and continuous infusion) and Karjagin et al. (septic shock, plasma). Data points were extracted using WebPlotDigitalizer. Virtual population of 100 subjects (1:1 male:female, age 50-70 years) with lognormal interindividual variability (GSD 2.0) on elimination, transporter, and protein binding parameters.

#### Estimation Methods
Parameter optimization was performed using the Levenberg-Marquardt algorithm in PK-Sim. Optimized parameters included OAT3 kcat (disease-specific), endothelial permeability (Pend) for subcutaneous tissue, GFR fraction, and DHP Vmax. Physicochemical parameters were fixed from literature or Chemicalize software. PD model parameters were fixed from previously published estimates.

#### Model Evaluation
Model performance was assessed using average fold error (AFE) for concentration-time profiles and fold error (FE) for Cmax and AUC, with predefined acceptance criteria of 0.5-2.0-fold. Goodness-of-fit plots were generated for plasma and interstitial concentrations. Local sensitivity analysis was performed by varying GFR fraction, OAT3 kcat, and Pend by ±50% to assess impact on AUCinf and Cmax across plasma and tissue compartments.

#### Covariate Analysis
No traditional covariate analysis was performed. Instead, disease state (sepsis vs. septic shock) served as the primary stratification, with disease-specific physiological alterations incorporated mechanistically: GFR fraction (3.5 in sepsis reflecting ARC, 0.8 in septic shock reflecting AKI), OAT3 kcat (downregulated in both disease states reflecting inflammation-induced transporter suppression), and endothelial permeability. Interindividual variability was incorporated via lognormal distributions (GSD 2.0) on key parameters.

---

### Statistical Rigor Assessment
The model evaluation approach is appropriate for PBPK model validation, using AFE and fold error metrics with predefined acceptance criteria (0.5-2.0-fold), consistent with regulatory guidance for PBPK model qualification. Validation against six independent healthy volunteer studies and two critically ill patient studies provides reasonable external validation coverage. The sensitivity analysis (±50% parameter variation) is methodologically sound and provides insight into parameter identifiability and model robustness. However, several statistical limitations exist: (1) the virtual population of 100 subjects with GSD 2.0 is a simulation-based approach rather than a formal statistical analysis of observed variability; (2) no formal uncertainty quantification (e.g., bootstrap or Bayesian posterior intervals) was performed on optimized parameters; (3) the subcutaneous interstitial predictions showed higher variability (AFE 1.75-2.13) with limited data points, reflecting microdialysis probe recovery uncertainty; (4) the PD analysis reports median scenarios and failure rates but does not provide confidence intervals around these estimates; (5) the therapeutic failure endpoint (bacterial load > 4 log10 CFU/mL at 12 h) is a simulation-based surrogate without clinical validation. The sensitivity analysis results are presented descriptively without formal statistical testing.

---

## 📊 Key Findings
The PBPK model reproduced observed plasma profiles in healthy volunteers (AFE 1.18–2.05; Cmax FE 0.66–1.29; AUC FE 0.57–0.93) and captured plasma and subcutaneous interstitial exposure in sepsis (plasma AFE 1.12–2.13; subcutaneous AFE 1.75–2.13). Total clearance in healthy volunteers was ~0.17 L/h/kg with ~70% of dose eliminated unchanged in urine. In sepsis, predicted CL increased to 0.3 L/h/kg (consistent with ARC), while in septic shock CL decreased to 0.12 L/h/kg (consistent with AKI and impaired secretion). Sensitivity analysis showed GFR fraction dominated systemic exposure while OAT3 kcat contributed primarily at the renal level, confirming mechanistic separability of elimination pathways. Simulations revealed clear dissociation between plasma and interstitial exposure with marked tissue-specific heterogeneity. PD simulations showed standard dosing achieved near-maximal antibacterial effect in most tissues; dose escalation eliminated therapeutic failure in lung, liver, and skin but the kidney failure rate remained 33.3% regardless of dose in sepsis. In septic shock, therapeutic failure was 0% across all tissues and doses. Standard dosing appeared insufficient only for resistant pathogens with MIC > 32 mg/L (peak Css 34 mg/L).

---

## 💡 Clinical & Regulatory Implications
The study has several important clinical implications. First, it demonstrates that plasma concentrations are unreliable surrogates for interstitial tissue exposure in sepsis, supporting the use of tissue-resolved PK assessment (e.g., microdialysis) in critically ill patients. Second, the finding that standard ILAS-recommended dosing achieves near-maximal antibacterial effect in most tissues challenges the practice of routine empirical dose escalation to maximum regimens—clinicians should reserve dose escalation for patients with documented resistant pathogens (MIC > 32 mg/L) or those with extreme ARC. Third, the persistent 33.3% renal therapeutic failure rate in sepsis despite maximum dosing highlights the need for alternative strategies in ARC patients, such as prolonged or continuous infusion, which the authors suggest may stabilize interstitial exposure. Fourth, the reduced clearance in septic shock (0.12 L/h/kg) supports cautious dosing in this population to avoid neurotoxicity from excessive exposure. Fifth, the mechanistic separation of GFR and OAT3-mediated secretion suggests that renal function assessment should consider both filtration and secretory pathways when individualizing meropenem dosing. From a regulatory perspective, the study demonstrates the value of transporter-informed PBPK models for predicting tissue exposure in special populations where clinical sampling is challenging, potentially supporting model-informed drug development and labeling decisions.

---

### Strengths & Limitations

#### Strengths
- Mechanistic, transporter-informed PBPK framework that explicitly separates glomerular filtration, OAT3-mediated active tubular secretion, and DHP-mediated hydrolysis—a level of mechanistic detail rarely incorporated into clinical meropenem PK models
- Validation against multiple independent clinical datasets in healthy volunteers and critically ill patients, covering both plasma and subcutaneous interstitial (microdialysis) concentrations
- Disease-specific scaling distinguishing sepsis from septic shock, reflecting the dynamic and progressive nature of the condition
- Integration of tissue-resolved PD assessment using a published two-subpopulation (susceptible and dormant) bacterial model, enabling direct evaluation of concentration–effect relationships at the infection site
- Sensitivity analyses for GFR fraction, OAT3 kcat, and endothelial permeability providing mechanistic insight into pathway contributions and model robustness
- Preservation of mass balance and physiologically plausible parameter estimates throughout model development and scaling

#### Limitations (Acknowledged by Authors)
- Disease-specific OAT3 kcat values are optimized fitting parameters rather than independently validated transporter activity estimates; quantitative measurement of OAT3 activity in critically ill patients is unavailable
- Cumulative urinary recovery data used to validate renal pathway partitioning in healthy volunteers were not available in the sepsis/septic shock clinical studies
- The PBPK/PD framework does not explicitly account for host immune response and cannot directly predict clinical outcomes such as infection resolution or survival
- PD targets are still largely defined using plasma concentrations and in vitro MIC values; validated thresholds for interstitial tissue concentrations have yet to be established

#### Limitations (Expert Review)
- The virtual population used a geometric standard deviation of 2.0 for key parameters, which may not fully capture the extreme interindividual variability observed in real critically ill populations
- Endothelial permeability (Pend) was assumed uniform across all simulated tissues, which may oversimplify organ-specific microvascular pathophysiology in sepsis
- The model was validated primarily against subcutaneous tissue microdialysis data; predictions for kidney, lung, and liver interstitial concentrations lack direct clinical validation
- The PD model applies identical parameters to E. coli and K. pneumoniae, potentially masking species-specific pharmacodynamic differences
- Therapeutic failure was defined as bacterial load exceeding 4 log10 CFU/mL at 12 h, a relatively short time horizon that may not capture delayed bacteriological response
- The study does not explore continuous infusion strategies, which the authors themselves suggest may be advantageous in ARC patients

#### Generalizability
The PBPK framework is mechanistically grounded and should be generalizable to other β-lactam antibiotics with similar transporter-mediated disposition, provided compound-specific physicochemical and transporter kinetic parameters are available. However, the optimized OAT3 kcat values for sepsis and septic shock are disease-state-specific and may not extrapolate to other critical illness phenotypes (e.g., burns, trauma, COVID-19) with different inflammatory profiles. The finding that dose escalation yields minimal PD benefit is likely generalizable to drugs with steep Emax relationships operating near plateau, but caution is warranted for pathogens with higher MICs or in patients with extreme ARC.

---

### Key Equations

**Emax Pharmacodynamic Model (Hill Equation)**

{% raw %}
$$
\text{Effect} = \frac{E_{max} \cdot C^{\gamma}}{EC_{50}^{\gamma} + C^{\gamma}}
$$
{% endraw %}

Describes the concentration-effect relationship for meropenem antibacterial activity, where Emax is the maximum achievable antibacterial effect, C is the simulated drug concentration, EC50 is the concentration producing 50% of the maximum effect, and γ is the Hill coefficient describing the steepness of the concentration-effect relationship.

---

### Figures & Tables

- **Figure 1**: Mechanistic representation of meropenem elimination pathways implemented in the PBPK model, showing glomerular filtration, OAT3-mediated basolateral uptake with apical efflux into the tubular lumen, and DHP-mediated hydrolysis.
  - *Significance*: Provides the conceptual framework for the transporter-informed model, illustrating how renal elimination is decomposed into mechanistically distinct pathways (GFR vs. active secretion) and how non-renal clearance is handled.
- **Figure 2**: Predicted unbound plasma and interstitial meropenem concentration-time profiles across tissues (kidney, lung, liver, subcutaneous) under typical and maximum ILAS-recommended dosing strategies in sepsis and septic shock.
  - *Significance*: Demonstrates the central finding of dissociation between plasma and interstitial exposure and tissue-specific heterogeneity, supporting the argument that plasma concentrations are unreliable surrogates for target-site exposure.
- **Figure 3**: Predicted pharmacodynamic response over time in plasma and interstitial tissues following different clinical dosing strategies, showing median bacterial load trajectories.
  - *Significance*: Illustrates that standard dosing achieves near-maximal antibacterial effect in most tissues and that dose escalation yields minimal additional benefit, supporting the conclusion against routine empirical dose escalation.
- **Table 1**: Physicochemical and elimination-related input parameters for meropenem in healthy volunteers, septic patients, and septic shock patients, including molecular weight, log P, pKa, fraction unbound, partition coefficients, GFR fraction, OAT3 kinetic parameters (Km, kcat), apical transporter parameters, and DHP parameters.
  - *Significance*: Provides the complete parameterization of the PBPK model, showing which parameters were optimized vs. fixed from literature, and how disease-specific scaling was implemented.
- **Table 2**: ILAS-recommended dosing protocols for typical sepsis dose (1.5 g loading, 1 g maintenance, 3 h infusion q8h) and highest sepsis dose (2 g loading, 2 g maintenance, 3 h infusion q8h).
  - *Significance*: Defines the clinical dosing scenarios evaluated in the simulations, anchoring the PD assessment to real-world treatment guidelines.
- **Table 3**: Model validation results for healthy volunteers across six independent clinical studies, showing AFE, predicted and observed Cmax and AUC with fold errors.
  - *Significance*: Demonstrates the predictive performance of the healthy volunteer PBPK model, with all parameters within the predefined 0.5-2.0-fold acceptance criteria.
- **Table 4**: Model validation results for sepsis patients, showing AFE, Cmax and AUC fold errors for plasma and subcutaneous interstitial concentrations under short infusion and continuous infusion protocols.
  - *Significance*: Validates the disease-scaled model against clinical data, showing acceptable performance for plasma and higher variability for subcutaneous interstitial predictions, reflecting microdialysis uncertainty and pathophysiological heterogeneity.

---

### Code & Reproducibility Assessment
The study was conducted using PK-Sim (Open Systems Pharmacology Suite), a publicly available platform. However, no explicit code or model files were provided in the publication. The authors acknowledge Georg Hempel for providing septic population files, suggesting some model components may be available upon request. Data extraction was performed using WebPlotDigitalizer from published studies. Full reproducibility would require access to the PK-Sim project files, which are not publicly deposited.

---

### Supplementary Materials
Supplementary materials include Table S1 (PD parameter values for the Emax model), Table S2 (healthy volunteer clinical studies used for model development), Table S3 (predicted PK parameters Cmax, AUC, CL, Vd across disease states and dosing strategies), Figure S1 (goodness of fit for healthy volunteer plasma concentrations), Figure S2 (goodness of fit for sepsis plasma and interstitial concentrations), and Figures S3-S4 (sensitivity analysis results for renal elimination parameters and endothelial permeability).

---

### Future Directions
Key follow-up studies should include: (1) prospective validation of the transporter-informed PBPK model against urinary excretion data in septic patients to independently confirm the GFR vs. OAT3 pathway partitioning; (2) direct measurement of OAT3 activity or expression in critically ill patients to replace optimized kcat values with experimentally derived estimates; (3) clinical microdialysis studies in kidney, lung, and liver to validate tissue-specific interstitial concentration predictions; (4) exploration of continuous or prolonged infusion strategies in the PBPK/PD framework to assess their benefit in ARC patients with persistent renal therapeutic failure; (5) incorporation of host immune response models to bridge the gap between bacterial killing and clinical outcomes; (6) extension of the framework to other β-lactams and combination therapy regimens; and (7) establishment of validated PD targets for interstitial tissue concentrations to replace plasma-based breakpoints.

---

### Expert Commentary
This paper represents a meaningful step forward in mechanistic modeling of antibiotic disposition in critical illness. The explicit representation of OAT3-mediated tubular secretion as a disease-modulated pathway is particularly valuable—most clinical PopPK models for meropenem collapse renal elimination into a single GFR-driven clearance term, obscuring the independent contribution of transporter downregulation during inflammation. The sensitivity analysis elegantly demonstrates that GFR and OAT3 kcat exert separable effects, supporting the mechanistic credibility of the model. From a regulatory perspective, this work aligns with the growing emphasis on PBPK to inform dosing in special populations where clinical trials are challenging. The finding that dose escalation provides minimal PD benefit due to Emax saturation is clinically important and challenges the reflexive 'more is better' approach in sepsis. However, I would caution that the 33.3% renal failure rate persisting despite maximum dosing is based on a virtual population with a GSD of 2.0, and real-world ARC patients may respond differently. The uniform Pend assumption across tissues is a simplification that could be refined with organ-specific permeability data. Overall, this is a well-executed study that advances the field and provides a template for transporter-informed PBPK/PD assessment of antimicrobials in critical illness.

---

### Bottom Line
This transporter-informed PBPK/PD study provides a mechanistic explanation for the dynamic, severity-dependent changes in meropenem clearance and tissue exposure in sepsis, demonstrating that plasma concentrations are an unreliable surrogate for interstitial drug exposure at infection sites. The key practical takeaway is that routine empirical dose escalation to maximum ILAS-recommended regimens yields minimal additional antibacterial benefit in most tissues because the PD effect is already near saturation—yet patients with significant augmented renal clearance remain at risk of therapeutic failure, particularly in the kidney, where failure persisted at 33.3% despite maximum dosing. For practicing pharmacometricians, this work reinforces the value of explicit transporter representation in PBPK models and supports individualized, mechanism-informed dosing strategies (e.g., TDM-guided prolonged or continuous infusion) rather than universal dose escalation in critically ill patients.

---

---

## 📊 Figures

![Mechanistic representation of meropenem elimination pathways implemented in the PBPK model.]({{ site.baseurl }}/assets/digests/2026-09-17-transporter-drive-interstitial-tissue-exposure-and-pharmacodynamic-response-of/figures/fig_01.jpg)

![Predicted unbound plasma and interstitial meropenem concentration–time profiles across tissues under different clinical dosing strategies. Solid lines represent]({{ site.baseurl }}/assets/digests/2026-09-17-transporter-drive-interstitial-tissue-exposure-and-pharmacodynamic-response-of/figures/fig_02.jpg)

![Predicted pharmacodynamic response over time in plasma and interstitial tissues following different clinical dosing strategies. Solid lines represent the median]({{ site.baseurl }}/assets/digests/2026-09-17-transporter-drive-interstitial-tissue-exposure-and-pharmacodynamic-response-of/figures/fig_03.jpg)