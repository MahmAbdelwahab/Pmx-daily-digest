---
layout: post
title: "Drug-Drug Interactions of Cenobamate With Medications: Dose-Dependent Induction/Inhibition and Clinical Implications."
date: 2026-11-20
authors: "Hiroyuki Ichida, Takaharu Nakao, Takanori Mori, Reina Makino, Marika Nakagawa, Kazuhiro Yoneda, Yoshiyuki Yamaura, Masanori Kuribayashi"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70358"
paper_type: popk
tags: [popk, pbpk, regulatory]
excerpt_text: "A Simcyp PBPK model of cenobamate, calibrated to clinical DDI data at 200 mg with bupropion, midazolam and omeprazole, is used to predict dose-dependent (100/200/400 mg) DDIs with eight antithrombotic and antihypertensive drugs. CYP3A substrates (nifedipine, amlodipine, apixaban, rivaroxaban, carvedilol, cilostazol) show marked exposure reductions, while bisoprolol is minimally affected. Relevant to clinical pharmacologists, regulatory scientists and PBPK modelers working on mixed induction/inhibition perpetrators; note that the key induction/inhibition parameters were fitted to the same data used for verification."
pdf_path: "/assets/digests/2026-11-20-drug-drug-interactions-of-cenobamate-with-medications-dose-dependent/PMx_DrugDrug_Interactions_of_Cenobamate_With_20261120.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
A Simcyp PBPK model of cenobamate, calibrated to clinical DDI data at 200 mg with bupropion, midazolam and omeprazole, is used to predict dose-dependent (100/200/400 mg) DDIs with eight antithrombotic and antihypertensive drugs. CYP3A substrates (nifedipine, amlodipine, apixaban, rivaroxaban, carvedilol, cilostazol) show marked exposure reductions, while bisoprolol is minimally affected. Relevant to clinical pharmacologists, regulatory scientists and PBPK modelers working on mixed induction/inhibition perpetrators; note that the key induction/inhibition parameters were fitted to the same data used for verification.

---

### Executive Summary
The authors built a minimal-PBPK model of cenobamate (a CYP2B6/CYP3A4 inducer and CYP2C19 inhibitor) in Simcyp v23, using internal in vitro data and clinical PK, and calibrated three interaction parameters (CYP2B6 $Ind_{max}$, CYP3A4 $Ind_{max}$, CYP2C19 $K_i$) so predicted AUCR/Cmax ratios for bupropion, midazolam and omeprazole at 200 mg matched observed ratios (within 0.67-1.5 fold). Using Japanese claims data (MDV database), they selected eight commonly co-prescribed antithrombotic and antihypertensive drugs and built or verified their substrate models, then simulated DDIs at cenobamate 100, 200 and 400 mg QD. Predicted AUCRs at 400 mg were about 0.63 (apixaban), 0.61 (rivaroxaban), 0.45 (cilostazol parent), 0.37 (amlodipine), 0.55 (carvedilol) and 0.21 (nifedipine), with bisoprolol minimally changed (0.84-0.92). Opposing CYP3A induction and CYP2C19 inhibition produced divergent parent/metabolite changes for cilostazol (OPC-13015 Cmax increased) and clopidogrel (2-oxo-clopidogrel decreased, clopidogrel-H4 Cmax increased). The work illustrates how PBPK can bridge untested dose and co-medication scenarios, though its credibility is bounded by the calibration strategy, the healthy-volunteer virtual populations, and the absence of external validation of cenobamate DDIs beyond the calibration data.

---

### Scientific Context & Motivation
Cenobamate is approved for focal onset seizures with a 200 mg/day target and up to 400 mg/day maximum, and shows weak CYP2B6 induction, moderate CYP3A4 induction and moderate CYP2C19 inhibition. Clinical DDI data exist only for 200 mg with probe substrates (bupropion, midazolam, omeprazole) and some ASMs; interactions with common non-ASM co-medications, and the dose dependence of these interactions, are unquantified. Patients with epilepsy frequently have comorbidities (e.g., hypertension, thromboembolic risk, with roughly 1 in 10 on oral anticoagulants), making polypharmacy and DDI risk clinically important. Mixed perpetrators (induction plus inhibition of different enzymes) are difficult to extrapolate empirically because the net effect on substrates and metabolites depends on each pathway's fractional contribution. The knowledge gap addressed is a quantitative, dose-dependent DDI prediction for clinically prioritised cardiovascular drugs, supporting labeling and prescribing decisions before dedicated clinical studies. The paper also reflects the MIDD trend of using PBPK to fill DDI gaps, and Japan's pending regulatory review of cenobamate gives the work a regional relevance.

---

## ⚡ Methodological Snapshot
A minimal PBPK model of cenobamate (first-order absorption, $F_a$ 0.88, $k_a$ 2.82/h, lag 0.24 h, $CL_{po}$ 0.513 L/h, $CL_r$ 0.0326 L/h, $V_{ss}$ 0.433 L/kg, $fu_p$ 0.424, $B/P$ 0.604) was built in Simcyp v23 using internal in vitro data and phase I PK data (single 5-750 mg, multiple 12.5-400 mg). Mechanistic static induction/inhibition parameters ($Ind_{max}$, $IndC_{50}$, $K_i$) for CYP2B6, 2C8, 2C19, 3A4 and 3A5 were set from in vitro data and then three were calibrated so that predicted ratios for the 200 mg clinical DDI with bupropion, midazolam and omeprazole fell within 0.67-1.5-fold of observed values, under fed conditions.

Substrate models for eight co-medications (selected from MDV claims data: usage >2% antithrombotic, >3% antihypertensive; CYP2B6/3A4/2C19 involvement) were developed or taken from Simcyp defaults, including metabolites for cilostazol and clopidogrel and the R-enantiomer of carvedilol. Substrate models were verified with clinical DDIs using inhibitors/inducers (cyclosporine, diltiazem, erythromycin, ketoconazole, omeprazole, paroxetine, rifampicin, ritonavir) using the same 0.67-1.5 criterion.

Application: cenobamate 100, 200 or 400 mg QD to steady state with a single dose of the co-medication on Day 14 (apixaban 10, cilostazol 100, clopidogrel 300, rivaroxaban 10, amlodipine 10, bisoprolol 10, carvedilol 12.5, nifedipine 20 mg); the primary endpoints were AUCR and Cmax ratio (geometric mean ratios with simulated 90% CI).

---

## 🏗️ Structural Model Breakdown
Cenobamate: minimal PBPK (single adjusting compartment not used for cenobamate; $V_{ss}$ 0.433 L/kg predicted by Simcyp Method 2), first-order absorption ($F_a$ 0.88, $k_a$ 2.82/h, $t_{lag}$ 0.24 h, $fu_{gut}$ 1), in vivo clearance ($CL_{po}$ 0.513 L/h; $CL_r$ 0.0326 L/h), $fu_p$ 0.424, $B/P$ 0.604, logP 1.09, neutral. Perpetrator parameters (Table 1): CYP2B6 $Ind_{max}$ 5.4 (fitted), $IndC_{50}$ 30.5 micromolar, $K_i$ 82; CYP2C8 $Ind_{max}$ 2.14, $IndC_{50}$ 25.9; CYP2C19 $Ind_{max}$ 3.06, $IndC_{50}$ 132, $K_i$ 8 micromolar (fitted); CYP3A4/5 $Ind_{max}$ 7 (fitted), $IndC_{50}$ 70.5, $K_i$ 360 micromolar. Substrate models (Tables 2-3): apixaban (ADAM, full PBPK, CYP3A4/5, $CL_r$, P-gp, $CL_{add}$), cilostazol (ADAM, minimal PBPK, CYP3A4/5/2C19 pathways forming OPC-13015, with metabolite model), clopidogrel (first-order, minimal PBPK with SAC; CES1 hydrolysis and CYP-mediated formation of 2-oxo-clopidogrel and clopidogrel-H4 via CYP2B6/2C19/1A2/2C9/3A4/3A5), rivaroxaban (ADAM, full PBPK, CYP3A4/3A5/CYP2J2, P-gp, OAT3), amlodipine (CYP3A4/5, minimal PBPK), bisoprolol (CYP3A4/5 minor, major renal), R-carvedilol (ADAM, CYP1A2/2D6/3A4/5), nifedipine (CYP3A4/5, first-order absorption, Simcyp default).

---

### Detailed Methodological Analysis

#### Modeling Approach
Bottom-up/middle-out PBPK modeling in Simcyp v23 (Certara). Cenobamate: minimal PBPK distribution model, first-order absorption, in vivo clearance ($CL_{po}$, $CL_r$); CYP induction ($Ind_{max}$, $IndC_{50}$) for CYP2B6, 2C8, 2C19, 3A4, 3A5 and reversible inhibition ($K_i$) for CYP2B6, 2C19, 3A4, 3A5 implemented as in Table 1. Substrates: ADAM absorption (apixaban, cilostazol, rivaroxaban, R-carvedilol) or first-order absorption; full or minimal PBPK distribution with SAC for clopidogrel and amlodipine; enzyme kinetic ($V_{max}/K_m$, $CL_{int}$), CES1, P-gp and OAT3 components; metabolite sub-models for OPC-13015 and for 2-oxo-clopidogrel and clopidogrel-H4. Carvedilol modeled as R-enantiomer; rivaroxaban and nifedipine use Simcyp defaults.

#### Data Sources
Cenobamate plasma concentration data from healthy-volunteer phase I studies (single dose 5-750 mg; multiple dose 12.5-400 mg) and population PK analyses (sponsor SK Life Science/SK Biopharmaceuticals); human mass-balance data (88% radioactivity in urine) for $F_a$; clinical DDI study at 200 mg with bupropion, midazolam and omeprazole; in vitro internal protocols for physchem, $B/P$, $fu$, CYP induction/inhibition; literature data for substrate models and perturbation studies; Japanese MDV claims database (January-December 2023; patients aged >=15 years with G40 and epilepsy guidance fee) for selecting co-medications.

#### Estimation Methods
Parameters were mostly fixed from in vitro or literature data; selected cenobamate parameters ($F_a$, $k_a$, lag time, $CL_{po}$, $CL_r$) were estimated or derived from clinical data and population PK; CYP2B6 $Ind_{max}$, CYP3A $Ind_{max}$ and CYP2C19 $K_i$ were manually calibrated (fitted) to reproduce the observed 200 mg DDI ratios. No formal population-parameter estimation (e.g., NONMEM) was used; simulations were deterministic-parametric Monte Carlo trials of virtual healthy populations in Simcyp.

#### Model Evaluation
Observed versus predicted concentration-time profiles and AUCR/Cmax ratios for probe DDIs (Figure 2); acceptance criterion of predicted/observed ratios within 0.67-1.5 following Guest-type guidance; substrate model verification with known inhibitors/inducers; sensitivity analyses (reported in Supplement 1) on the interplay of induction and inhibition at 400 mg. No external validation for cenobamate beyond the 200 mg probe DDI data and no formal uncertainty quantification of fitted parameters were reported.

#### Covariate Analysis
No statistical covariate analysis was performed (PBPK simulation in virtual healthy adults). Only qualitative discussion of CYP2C19 genotype effects on clopidogrel activation and potential differences in patients with comorbidities or co-medications; claims data used only for prioritization of co-medications.

---

### Statistical Rigor Assessment
As a simulation-based PBPK study, formal inferential statistics are limited. Strengths: pre-defined 0.67-1.5-fold acceptance criteria for ratios, reporting of geometric mean ratios with simulated 90% confidence intervals, and substrate verification across multiple modulators. Weaknesses: the number of virtual subjects/trials is not described in the main text; the verification of the cenobamate model uses the same data used for calibration of three parameters; no parameter uncertainty or global sensitivity analysis is shown to propagate variability to the predicted DDIs; there is no external validation of cenobamate-specific DDIs; dose-dependency at 400 mg cannot be verified because observed data exist only for 200 mg. The CYP2C19 inhibition constant ($K_i$ 8 micromolar) and induction maxima were adjusted well beyond in vitro values, raising identifiability concerns. The probe-substrate-derived classification (weak/moderate) is acknowledged by the authors to be affected by concomitant induction and inhibition.

---

## 📊 Key Findings
Model verification at 200 mg: predicted geometric mean AUCR/Cmax ratios were 0.66/0.72 for bupropion, 0.22/0.32 for midazolam and 2.10/1.72 for omeprazole (observed approx. 0.61/0.77, 0.28/0.39 and 2.07/1.83), classifying cenobamate as a weak CYP2B6 inducer, moderate CYP3A4 inducer and moderate CYP2C19 inhibitor. Values are from the Results (Section 3.1) and appear to correspond to simulations at 400 mg as well as 200 mg; the text is partially ambiguous about which dose each reported ratio refers to. Bupropion AUCR was similar at 200 and 400 mg (0.63 vs 0.66) and omeprazole AUCR also (1.94 vs 2.10), which the authors attribute from sensitivity analyses to inhibition superimposed on CYP2B6 induction and induction superimposed on CYP2C19 inhibition at the higher dose. Predicted DDIs for co-medications (AUCR/Cmax at 100/200/400 mg): apixaban 0.78-0.79/0.91-0.92 to 0.63/0.83; rivaroxaban 0.78/0.90, 0.69/0.85, 0.61/0.80; cilostazol parent 0.67/0.85, 0.55/0.77, 0.45/0.70 with OPC-13015 Cmax ratio about 1.28-1.30 and AUCR 1.00, 0.89, 0.79; clopidogrel parent unchanged (about 1.04-1.05), 2-oxo-clopidogrel AUCR 0.67, 0.58, 0.51, and clopidogrel-H4 AUCR about 1.0-1.06 with Cmax ratio 1.12-1.17; amlodipine 0.57/0.66, 0.45/0.55, 0.37/0.47; bisoprolol 0.92/0.98, 0.88/0.97, 0.84/0.95; carvedilol (R-enantiomer) 0.73/0.80, 0.63/0.71, 0.55/0.64; nifedipine 0.41/0.54, 0.29/0.41, 0.21/0.32. Seven of eight drugs show dose-dependent exposure decreases, most pronounced at 400 mg and for sensitive CYP3A substrates (nifedipine, amlodipine). Clinically, loss of anticoagulant efficacy (apixaban, rivaroxaban) and blood-pressure control (nifedipine, amlodipine) are the principal concerns, and the parent/metabolite divergence for clopidogrel and cilostazol suggests altered antiplatelet effect that may also depend on CYP2C19 genotype. Minor discrepancy: the abstract reports apixaban AUCR/Cmax of 0.78/0.92 at 100 mg while the Results state 0.79/0.91.

---

## 💡 Clinical & Regulatory Implications
Co-prescription of cenobamate with CYP3A substrates is predicted to reduce exposure in a dose-dependent manner (400 mg largest): nifedipine (AUCR 0.41/0.29/0.21) and amlodipine (0.57/0.45/0.37) could lose antihypertensive effect, suggesting closer blood pressure monitoring and stepwise titration; apixaban and rivaroxaban AUCR fell to about 0.61-0.78, raising concern about reduced anticoagulant efficacy, so clinicians should consider monitoring (e.g., anti-Xa activity, thromboembolic events) or alternatives; cilostazol parent drug is reduced but OPC-13015 Cmax rises, and clopidogrel's intermediate and active metabolite shifts in opposite directions (further modulated by CYP2C19 genotype), so platelet function testing and bleeding/thrombotic event monitoring are suggested; carvedilol is moderately reduced; bisoprolol is minimally affected and a sensible alternative beta-blocker. Regulatory implications: the work illustrates PBPK to support labeling of DDIs not clinically tested, but a sponsor-quality regulatory use would require stronger independent validation, uncertainty quantification and clearer documentation; Japanese authorities currently reviewing cenobamate may find such analyses helpful for co-medication guidance. Predictions are not substitutes for clinical data and should guide, not dictate, dose adjustment.[^fc-8]

---

### Strengths & Limitations

#### Strengths
- Clear, transparent workflow from claims-database prioritization of co-medications to model verification and application, with parameter tables for the perpetrator and all substrates
- Explicit pre-specified acceptance criterion (predicted/observed AUCR and Cmax ratio within 0.67-1.5) for the cenobamate and substrate models
- Simultaneous modeling of multi-enzyme effects (CYP2B6/3A4/2C8 induction, CYP2C19/2B6/3A inhibition) rather than a single-pathway label classification
- Incorporation of active/intermediate metabolites (OPC-13015, 2-oxo-clopidogrel, clopidogrel-H4), revealing divergent parent/metabolite directions that parent-only analysis would miss
- Evaluates dose dependence (100/200/400 mg), covering the approved range and an untested dose; reports Cmax as well as AUC ratios with simulated 90% CIs (Figure 4)
- Substrate models verified against perpetrator/inhibitor clinical DDIs (e.g., rifampicin, ketoconazole, omeprazole, diltiazem) before application

#### Limitations (Acknowledged by Authors)
- Simulations used healthy adult virtual populations; comorbidities, co-medications and enzyme variability in patients with epilepsy may change DDI magnitude and variability
- Uncertainty remains for drugs with incomplete fractional metabolic contribution information and for active metabolite kinetics
- Omeprazole AUCR classification reflects apparent CYP2C19 inhibition in the presence of concomitant CYP3A4 induction; larger interactions may occur for substrates with high CYP2C19 fm
- Prospective clinical studies and real-world evidence are needed to confirm the predictions

#### Limitations (Expert Review)
- Key interaction parameters (CYP2B6 $Ind_{max}$, CYP3A4/5 $Ind_{max}$, CYP2C19 $K_i$) were fitted to the same 200 mg clinical DDI data then used for 'verification', so verification is largely a calibration check and not independent validation; no external dataset (e.g., other doses, other CYP substrates, ASM DDIs) was used for cenobamate
- Parameters were adjusted far from in vitro values (CYP2B6 $Ind_{max}$ 14.1 to 5.4; CYP3A $Ind_{max}$ 3.14 to 7.0; CYP2C19 $K_i$ 110 to 8 micromolar), implying in vitro-in vivo disconnects; extrapolation to 100 and 400 mg depends on assumed shape of the induction/inhibition concentration-response, and mechanistic basis (e.g., unbound vs total concentration, enterocyte versus hepatic induction) is not examined
- Extrapolation to 400 mg could not be verified; the unexplained plateau of bupropion and omeprazole AUCR between 200 and 400 mg is attributed to sensitivity analyses that are not shown in the main text, and the cenobamate PK model assumes a minimal PBPK with a fixed fitted $CL_{po}$ and no mechanism for autoinduction/dose nonlinearity
- Cenobamate itself is a CYP2B6/2C19/3A4 substrate and '$CL_{po}$' was fixed as constant; no auto-induction or time-varying CL was described
- CYP3A4 and CYP2C19 $Ind_{max}$ for CYP2C19 (3.06) was retained from in vitro data while CYP2C19 inhibition was fitted, so net CYP2C19 effects are one combination of non-identifiable parameter sets; parameter uncertainty and sensitivity of predictions were not propagated to the substrate DDI results
- Clinical outcomes (efficacy loss, bleeding, blood pressure) were inferred qualitatively from exposure ratios without PD modeling or exposure-response thresholds; thresholds for clinically relevant change are not defined
- Carvedilol was modeled for R-enantiomer only (S-enantiomer and its CYP2D6/2C9 contributions not evaluated); rivaroxaban and nifedipine used Simcyp default models, and several substrate models were not validated for the induction scenario specifically
- Dose-timing, a single co-medication dose on Day 14 (1 h after cenobamate), does not capture chronic dosing of substrates such as apixaban/rivaroxaban BID or steady-state effects; effects of CYP2C19 genotype/ polymorphism on clopidogrel are only speculated; transporter (P-gp) induction not assessed for apixaban/rivaroxaban
- Author conflict of interest (all employees of the funder, Ono Pharmaceutical); in vitro and clinical inputs are internal/sponsor data not publicly accessible; generative AI used for wording
- Contradictory minor numerical reporting (e.g., apixaban 100 mg values; Figure 2 is described as comparing 200 mg observed with 400 mg predictions) and the AUCR discussion of 'bupropion 0.63 vs 0.66' versus 'predicted 0.66' require clarity

#### Generalizability
Findings are most applicable to healthy adults taking single doses of the listed co-medications at cenobamate steady state and are likely informative for CYP3A-dominant substrates generally (directional and rank-order consistency with a moderate CYP3A inducer, AUCR approx. 0.2-0.3 for sensitive substrates). Quantitative predictions for patients with epilepsy, older adults, hepatic or renal impairment, polypharmacy with other ASMs (e.g., phenytoin, carbamazepine), different ethnic groups or different CYP2C19 genotypes remain unverified. Metabolite-level predictions (cilostazol, clopidogrel) are the most uncertain and should be considered hypothesis-generating.

---

---

### Figures & Tables

- **Figure 1**: Workflow diagram of PBPK model development, verification and application for cenobamate.
  - *Significance*: Summarizes the stepwise approach (in vitro inputs, clinical PK fit, DDI calibration with probe substrates, substrate model verification, prediction) and clarifies where fitting versus verification occurs.
- **Figure 2**: PBPK simulations of bupropion, midazolam and omeprazole concentration-time profiles with and without cenobamate, with 5th/95th percentile bands.
  - *Significance*: Core verification figure showing the model reproduces observed DDI at 200 mg and extends to 400 mg; demonstrates CYP2B6/3A4 induction and CYP2C19 inhibition magnitude and variability.
- **Figure 3**: Simulated plasma profiles of antithrombotic (a) and antihypertensive (b) drugs and metabolites alone and with 100, 200 and 400 mg cenobamate.
  - *Significance*: Shows dose-dependent decreases for CYP3A substrates and the diverging metabolite behavior of cilostazol and clopidogrel; main visual evidence for the clinical implications.
- **Figure 4**: Forest plots of predicted geometric mean Cmax ratios and AUCR with simulated 90% CIs for all co-medications and metabolites at each cenobamate dose.
  - *Significance*: Summarizes the magnitude and uncertainty of predicted DDIs on one scale, enabling ranking of risk (nifedipine > amlodipine > cilostazol > carvedilol > apixaban/rivaroxaban > bisoprolol).
- **Table 1**: Final cenobamate PBPK compound parameters: physchem, ADME, minimal PBPK distribution, and CYP induction/inhibition parameters.
  - *Significance*: Documents which interaction parameters came from internal in vitro reports versus fitting (CYP2B6 $Ind_{max}$ 5.4, CYP3A4 $Ind_{max}$ 7, CYP2C19 $K_i$ 8 micromolar), essential to judge credibility.
- **Table 2**: Input parameters for apixaban, cilostazol, OPC-13015, clopidogrel, 2-oxo-clopidogrel, clopidogrel-H4 and rivaroxaban models.
  - *Significance*: Shows complexity of the antithrombotic substrate models, including metabolite cascades, ADAM absorption, transporters and enzyme kinetics, supporting model transparency.
- **Table 3**: Input parameters for amlodipine, bisoprolol, R-carvedilol and nifedipine models.
  - *Significance*: Documents the antihypertensive substrate models and key metabolic pathways (CYP3A4/5, CYP2D6, CYP1A2) that determine susceptibility to cenobamate.

---

### Code & Reproducibility Assessment
Reproducibility is moderate to low. Simcyp v23 was used; compound parameters for cenobamate and substrates are tabulated (Tables 1-3) and supporting data for substrate verification are in Supplements 1-7 (not available in this extraction), but key in vitro inputs for cenobamate are 'internal reports' and are not publicly accessible. No model files, code or workspace were mentioned. Simulation details (virtual population size, number of trials, age/sex distributions, variability settings) are not given in the main text. Independent replication would require Simcyp and the sponsor's in vitro data.

---

### Supplementary Materials
Supplement 1 (cenobamate PK simulations for single 5-750 mg and multiple 12.5-400 mg doses, and sensitivity analyses/plots for probe substrate DDIs) and Supplements 2-7 (input parameter references plus observed versus predicted data for substrate and modulator models) are referenced but were not available in the provided text; assessments of their content are therefore not possible.

---

### Future Directions
Prospective clinical DDI studies (e.g., cenobamate with nifedipine/amlodipine, apixaban or rivaroxaban) and real-world evidence analyses to validate predictions; use of independent datasets (cenobamate 400 mg probe studies, DDIs with ASMs and oral contraceptives) for external verification; global sensitivity and uncertainty analyses of induction/inhibition parameters and propagation to DDI predictions; mechanistic modeling of simultaneous induction and time-dependent/competitive inhibition at CYP2C19 and CYP2B6 including auto-induction of cenobamate clearance; simulations in patient populations (epilepsy, elderly, hepatic/renal impairment, CYP2C19 genotypes, co-ASM regimens) with chronic substrate dosing; coupling PBPK with PK/PD or exposure-response models (blood pressure, platelet aggregation, anti-Xa, thromboembolic or bleeding risk) to translate AUCR into clinical significance and to propose dose adjustments; extension to other frequently co-prescribed drugs (statins, oral contraceptives, antidiabetics, antidepressants).

---

### Expert Commentary
This is a pragmatic MIDD-style application: the real value is the dose-dependent, multi-enzyme prediction for drugs where no clinical data exist, and the clever use of claims data to prioritize substrates. The mixed induction/inhibition profile of cenobamate is the interesting science, particularly the cilostazol and clopidogrel metabolite cascade results, which show why parent-only DDI classification can mislead. My main concern is the circularity of the verification step: $Ind_{max}$ and $K_i$ values were tuned to reproduce exactly the data used to 'qualify' the model, and the in vitro parameters had to be moved considerably (2.6-fold down for CYP2B6, 2.2-fold up for CYP3A, 14-fold lower $K_i$ for CYP2C19), which should prompt discussion of whether unbound-concentration, intestinal exposure, or induction kinetics are mischaracterized. The saturation behaviour between 200 and 400 mg (bupropion, omeprazole) is hard to reconcile mechanistically with a fixed $E_{max}$ induction model and is relegated to unseen sensitivity analyses. Teaching points: use independent data for qualification where possible, report uncertainty in perpetrator parameters, and discuss non-linearity assumptions when extrapolating dose. Despite these limits, the rank-order and magnitude for CYP3A substrates (e.g., nifedipine AUCR about 0.2-0.3) are consistent with a moderate-to-strong inducer such as that implied by midazolam AUCR about 0.28, and the qualitative prescribing messages (monitor BP, anticoagulation efficacy, consider bisoprolol) are reasonable. The author conflict of interest and the lack of public parameter access are typical but warrant caution.

---

### Bottom Line
This PBPK study provides plausible, dose-dependent magnitude estimates for cenobamate DDIs with eight cardiovascular drugs: large reductions for sensitive CYP3A substrates (nifedipine AUCR about 0.2-0.4, amlodipine about 0.4-0.6), moderate reductions for apixaban, rivaroxaban, carvedilol and cilostazol parent, and minimal effect for bisoprolol, with opposing CYP3A/CYP2C19 effects complicating clopidogrel and cilostazol metabolite exposure. Practitioners can use the results to flag combinations needing monitoring (anticoagulant efficacy, blood pressure, platelet function) and prefer low-liability alternatives such as bisoprolol, but should treat the numbers as model-based hypotheses given the calibration-only verification, healthy-subject basis and lack of PD/clinical confirmation. Modelers should note the best-practice lesson that fitted induction/inhibition parameters need independent clinical validation (other doses or substrates) before regulatory-grade extrapolation.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The credibility of the work is bounded by the calibration strategy, the healthy-volunteer virtual populations, and the absence of external validation of cenobamate DDIs beyond the calibration data.” → correction: “These simulations were anchored to healthy adult virtual populations; comorbidities, concomitant medications, and variability in enzyme activity may alter the magnitude and variability of DDIs in patients with epilepsy.”
[^fc-2]: **UNSUPPORTED** — original: “Mixed perpetrators are difficult to extrapolate empirically because the net effect on substrates and metabolites depends on each pathway's fractional contribution.” → correction: “a larger interaction may occur for substrates with a high CYP2C19 fraction metabolized.”
[^fc-3]: **UNSUPPORTED** — original: “Cenobamate plasma data came from healthy-volunteer phase I studies and population PK analyses from the sponsor SK Life Science/SK Biopharmaceuticals.” → correction: “Clinical data used in this study were obtained and sponsored by SK Life Science Inc. and SK Biopharmaceuticals Co. Ltd.”
[^fc-4]: **UNSUPPORTED** — original: “The CYP2C19 $K_i$ of 8 micromolar and induction maxima were adjusted well beyond in vitro values, raising identifiability concerns.” → correction: “the inhibition constant for CYP2C19 was calibrated from 110 to 8 μmol/L to align the AUCR and Cmax ratio of omeprazole with clinical data.”
[^fc-5]: **UNSUPPORTED** — original: “Bisoprolol is minimally affected and is suggested as a sensible alternative beta-blocker.” → correction: “In contrast, bisoprolol was minimally affected, with predicted changes (100 mg: 0.92/0.98; 200 mg: 0.88/0.97; and 400 mg: 0.84/0.95).”
[^fc-6]: **CONTRADICTED** — original: “Carvedilol exposure is moderately reduced.” → correction: “Carvedilol showed weak reductions (100 mg: 0.73/0.80; 200 mg: 0.63/0.71; and 400 mg: 0.55/0.64).”
[^fc-7]: **UNSUPPORTED** — original: “Regulatory use would require stronger independent validation, uncertainty quantification and clearer documentation.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “Predictions are not substitutes for clinical data and should guide, not dictate, dose adjustment.” → correction: “Therefore, prospective clinical studies and real-world evidence are required to confirm these predictions and refine clinical recommendations.”
[^fc-9]: **UNSUPPORTED** — original: “Metabolite-level predictions for cilostazol and clopidogrel are the most uncertain and should be considered hypothesis-generating.” → correction: “In addition, uncertainty remains for drugs with incomplete information on fractional metabolic contributions and for active metabolite kinetics.”
[^fc-10]: **UNSUPPORTED** — original: “Figure 4 forest plots enable risk ranking: nifedipine > amlodipine > cilostazol > carvedilol > apixaban/rivaroxaban > bisoprolol.” → correction: “Figure 4 shows a summary of the effects of cenobamate on commonly co-administered drugs.”
[^fc-11]: **UNSUPPORTED** — original: “Reproducibility is moderate to low because key cenobamate in vitro inputs are internal reports not publicly accessible and no model files or code were mentioned.” → correction: “The PBPK model is based on in vitro parameters generated internally using standard protocols”
[^fc-12]: **UNSUPPORTED** — original: “The expert commentary states in vitro parameters were moved 2.6-fold down for CYP2B6, 2.2-fold up for CYP3A and 14-fold lower $K_i$ for CYP2C19.” → correction: “the maximum induction ($Ind_{max}$) for CYP2B6 was calibrated from 14.1 to 5.4; ... the $Ind_{max}$ for CYP3A was calibrated from 3.14 to 7.0; and finally, the inhibition constant for CYP2C19 was calibrated from 110 to 8 μmol/L”
[^fc-13]: **UNSUPPORTED** — original: “The expert commentary notes that saturation of bupropion and omeprazole AUCR between 200 and 400 mg is hard to reconcile mechanistically with a fixed $E_{max}$ induction model.” → correction: “Sensitivity analyses suggested that an inhibitory effect was superimposed on CYP2B6 induction at 400 mg cenobamate.”
[^fc-14]: **UNSUPPORTED** — original: “The nifedipine AUCR of about 0.2-0.3 is consistent with a moderate-to-strong inducer, as implied by midazolam AUCR about 0.28.” → correction: “~0.28 and ~0.39 for midazolam (CYP3A4)”

---

## 📊 Figures

![Workflow of the physiologically based pharmacokinetic (PBPK) model for cenobamate.]({{ site.baseurl }}/assets/digests/2026-11-20-drug-drug-interactions-of-cenobamate-with-medications-dose-dependent/figures/fig_01.jpg)

![Physiologically based pharmacokinetic (PBPK) simulations of bupropion, midazolam, and omeprazole drug–drug interactions (DDIs) with cenobamate.x-axis: Time (h).y-axis: Pl]({{ site.baseurl }}/assets/digests/2026-11-20-drug-drug-interactions-of-cenobamate-with-medications-dose-dependent/figures/fig_02.jpg)

![Physiologically based pharmacokinetic (PBPK) simulations of antithrombotic and antihypertensive drug–drug interactions (DDIs) with cenobamate.x-axis: Time (h).y-axis: Pla]({{ site.baseurl }}/assets/digests/2026-11-20-drug-drug-interactions-of-cenobamate-with-medications-dose-dependent/figures/fig_03.jpg)

![Forest plots of predicted pharmacokinetic (PK) parameters with antithrombotic and antihypertensive drugs. Geometric mean ratios of the maximum plasma concentration (Cmax)]({{ site.baseurl }}/assets/digests/2026-11-20-drug-drug-interactions-of-cenobamate-with-medications-dose-dependent/figures/fig_04.jpg)