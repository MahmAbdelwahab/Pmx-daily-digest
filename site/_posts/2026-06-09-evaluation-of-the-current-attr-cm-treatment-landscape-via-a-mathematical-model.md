---
layout: post
title: "Evaluation of the Current ATTR-CM Treatment Landscape via a Mathematical Model of TTR Dissociation and Amyloid Formation"
date: 2026-06-09
authors: "Stevan Methven Jeknić, Travis A. Ahn-Horst, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, DOI: 10.1002/psp4.70277"
doi: "10.1002/psp4.70277"
paper_type: qsp
tags: [qsp, regulatory]
excerpt_text: "This paper presents a quantitative systems pharmacology (QSP) model of transthyretin (TTR) dissociation and amyloid formation in ATTR cardiomyopathy (ATTR-CM). Pharmacometricians and clinical pharmacologists interested in model-informed drug development for rare diseases, therapeutic modality comparisons, and mechanistic biomarker translation should read this work. The model integrates in vitro binding data and clinical trial results to compare stabilizers (tafamidis, acoramidis) and a knockdown agent (vutrisiran) using a common metric—monomer efflux—that correlates with clinical outcomes."
pdf_path: "/assets/digests/2026-06-09-evaluation-of-the-current-attr-cm-treatment-landscape-via-a-mathematical-model/PMx_Evaluation_of_the_Current_ATTRCM_Treatme_20260609.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a quantitative systems pharmacology (QSP) model of transthyretin (TTR) dissociation and amyloid formation in ATTR cardiomyopathy (ATTR-CM). Pharmacometricians and clinical pharmacologists interested in model-informed drug development for rare diseases, therapeutic modality comparisons, and mechanistic biomarker translation should read this work. The model integrates in vitro binding data and clinical trial results to compare stabilizers (tafamidis, acoramidis) and a knockdown agent (vutrisiran) using a common metric—monomer efflux—that correlates with clinical outcomes.

---

### Executive Summary
Jeknić et al. developed a mechanistic ordinary differential equation (ODE) model of the TTR amyloidogenic cascade, encompassing tetramer production, dissociation, monomer unfolding, amyloid formation, and drug binding (stabilizers and knockdown). The model was parameterized using in vitro fluorescent probe exclusion (FPE) assays and clinical data from phase III trials (ATTR-ACT, ATTRibute-CM, HELIOS-B). A key output, 'monomer efflux' (the rate of unfolded monomer conversion to amyloid), was validated by linear correlation with changes in 6MWD, KCCQ-OS, and NT-proBNP across genotypes and treatments. The model predicts that acoramidis achieves near-complete tetramer stabilization (96% bound at trough), reducing monomer efflux by 96% in ATTRwt and 94% in ATTRv, outperforming tafamidis (79% and 72%) and vutrisiran (75% in both). Sensitivity analyses highlight the importance of monomer clearance (renal function) in modulating disease severity and treatment response. This framework provides a quantitative basis for comparing therapeutic modalities and generating testable hypotheses about ATTR-CM disease biology.

---

### Scientific Context & Motivation
ATTR-CM is a progressive cardiomyopathy caused by dissociation of TTR tetramers into amyloidogenic monomers. Approved therapies include tetramer stabilizers (tafamidis, acoramidis) and hepatic TTR knockdown (vutrisiran), yet direct comparisons across trials are confounded by differences in baseline populations and endpoints. A key knowledge gap is how changes in serum TTR concentration—which increase with stabilizers and decrease with knockdown—translate to reductions in amyloid deposition and clinical benefit. Prior modeling efforts (e.g., Tess et al.) focused on single modalities or did not integrate both stabilizer and knockdown mechanisms. This work addresses the need for a unified mechanistic model that can quantify the relative impact of different therapeutic strategies on the amyloidogenic pathway, using a common readout (monomer efflux) that is difficult to measure experimentally.

---

## ⚡ Methodological Snapshot
The authors developed a system of ordinary differential equations (ODEs) representing TTR tetramer production, reversible dissociation into monomers, monomer unfolding, and irreversible amyloid formation. Drug binding (stabilizers) is modeled with two binding sites on TTR (negative cooperativity) and four equivalent sites on albumin. Knockdown is represented by scaling tetramer production to match clinical data. Parameter estimation was performed in two stages: first, drug binding parameters were fit using an FPE model; second, physiological parameters were optimized to match clinical data (serum TTR, tetramer half-life, kinetic/thermodynamic properties, and treatment-induced changes). Optimization used Powell's algorithm in LMFIT. Model validation was performed by correlating monomer efflux with clinical outcomes from phase III trials. Global sensitivity analysis used the Sobol method.

---

## 🏗️ Structural Model Breakdown
The physiological model consists of ODEs for: (1) TTR tetramers (T4) produced at zero-order rate, subject to dissociation into monomers and clearance; (2) TTR monomers (M) from tetramer dissociation, reversible unfolding, and clearance; (3) unfolded monomers (U) from monomer unfolding, irreversible conversion to amyloid; (4) amyloid fibrils (A) from unfolded monomers; (5) drug-bound tetramers (T4_D1, T4_D2) with two binding sites; (6) drug-bound albumin (Alb_D). Stabilizers bind TTR tetramers with negative cooperativity ($K_{d1} < K_{d2}$) and albumin with a separate $K_d$. Knockdown reduces tetramer production rate. The FPE model includes TTR tetramers, albumin, fluorescent probe, and stabilizers competing for binding. All processes assumed mass action kinetics.

---

### Detailed Methodological Analysis

#### Modeling Approach
Mechanistic ODE model (QSP) implemented in Python (3.11.9) using mass action kinetics. Two submodels: (1) FPE model for drug binding parameter estimation, (2) physiological model for disease pathway and treatment comparison. Drug binding assumes two sites on TTR with negative cooperativity and four equivalent sites on albumin. Knockdown modeled by reducing tetramer production rate.

#### Data Sources
In vitro FPE assay data for drug binding; published protein binding data (free fraction); clinical data from phase III trials (ATTR-ACT, ATTRibute-CM, HELIOS-B) including serum TTR concentrations, tetramer half-life, kinetic/thermodynamic properties from literature; genotype-specific data for ATTRwt, ATTRv (p.Val142Ile), and p.Thr139Met.

#### Estimation Methods
Two-stage optimization using LMFIT Python package with Powell's algorithm and custom multi-component objective functions. Confidence intervals estimated via one-dimensional profiling. Van't Hoff equation applied to convert $K_d$ values from assay temperature to 37°C.

#### Model Evaluation
Validation by linear correlation of model-predicted monomer efflux AUC (normalized to untreated ATTRwt) with clinical outcomes (6MWD, KCCQ-OS, NT-proBNP) from phase III trials. Sensitivity analysis using Sobol method (SALib) and systematic parameter sampling (500 sets) to assess robustness of treatment comparisons.

#### Covariate Analysis
No formal covariate analysis; genotype differences modeled through TTR stability parameters (dissociation rate). Sensitivity analysis identified monomer loss rate (renal function) as key modulator. Parameter sampling explored impact of variability in tetramer production, dissociation, monomer loss, and unfolding rates.

---

### Statistical Rigor Assessment
The study uses deterministic ODE fitting without a formal statistical framework (e.g., no mixed effects, no likelihood-based inference). Confidence intervals for drug binding parameters were estimated via one-dimensional profiling, which provides approximate uncertainty but does not account for correlations. The Sobol sensitivity analysis is appropriate for global sensitivity. The systematic parameter sampling (500 sets) with exclusion of non-physiological TTR concentrations provides a reasonable robustness check. However, no formal model selection criteria (AIC, BIC) or goodness-of-fit diagnostics (VPC, NPDE) are reported. The validation via correlation with clinical outcomes is pragmatic but does not constitute a rigorous statistical test of model adequacy. Sample size for clinical correlations is limited to trial arm means (not individual data). Missing data and dropout are not addressed.

---

## 💡 Clinical & Regulatory Implications
The model suggests that acoramidis, due to near-complete tetramer stabilization and lower albumin binding, may provide greater reduction in amyloidogenic potential than tafamidis or vutrisiran. This could inform treatment selection, especially in patients with preserved renal function (where monomer clearance is efficient). The finding that a 1% greater increase in serum TTR corresponds to a 4.6% greater decrease in monomer efflux provides a quantitative rationale for monitoring early TTR changes as a surrogate for treatment effect. The model also highlights the importance of renal function as a modifier of disease progression and treatment response, suggesting that patients with renal impairment may derive less benefit from stabilizers alone and might be candidates for combination therapy. Regulatory implications: such models could support comparative effectiveness claims if prospectively validated with individual patient data.

---

## 📊 Key Findings
1. Monomer efflux (model-predicted rate of amyloid formation) correlates linearly with clinical outcomes (6MWD, KCCQ-OS, NT-proBNP) across genotypes and treatments, supporting its use as a surrogate for disease progression. 2. ATTRv patients have nearly twice the monomer efflux of ATTRwt, consistent with worse prognosis. 3. Acoramidis achieves 96% tetramer stabilization at trough, versus 82% for tafamidis at peak, primarily due to lower albumin binding (27% vs. 82% of drug bound). 4. Acoramidis reduces monomer efflux by 96% (ATTRwt) and 94% (ATTRv), compared to 79%/72% for tafamidis and 75%/75% for vutrisiran. 5. Monomer clearance rate (renal function) is the most sensitive parameter for monomer efflux in ATTRwt and modulates the relationship between serum TTR increase and clinical benefit. 6. A 1% greater increase in serum TTR from baseline corresponds to an additional 4.6% decrease in monomer efflux, highlighting nonlinear benefits of near-complete stabilization.

---

### Strengths & Limitations

#### Strengths
- Integrates multiple data sources (in vitro FPE, clinical trial data) into a single mechanistic framework covering both stabilizer and knockdown modalities.
- Validates model output (monomer efflux) against clinical endpoints across genotypes and treatments, providing face validity.
- Rigorous sensitivity analysis (Sobol method) and parameter sampling to assess robustness of treatment comparisons.
- Provides mechanistic insights into the role of renal monomer clearance and genotype-dependent clearance pathways.
- Enables principled comparison of therapies without confounding by trial population differences.

#### Limitations (Acknowledged by Authors)
- Model calibrated to mean clinical trajectories, not individual patient data, limiting capture of heterogeneity.
- Assumes constant TTR production and other parameters over time.
- Does not consider TTR binding partners (retinol-binding protein, thyroxine) or their impact on the amyloidogenic cascade.
- Genotype differences modeled only through TTR stability; other variants may have distinct kinetic properties.
- Underestimates tetramer increase with stabilizers in ATTRwt, possibly indicating effects on tetramer clearance not captured.

#### Limitations (Expert Review)
- No formal model evaluation using visual predictive checks or posterior predictive checks; validation relies on correlation with clinical outcomes rather than independent data.
- Drug concentrations assumed constant (trough for acoramidis, peak for tafamidis) without full PK-PD link; PK variability not modeled.
- Monomer efflux is a relative metric (normalized to ATTRwt) and absolute amyloid deposition rates are not predicted.
- Knockdown modeled as exponential decay fit to trial data rather than a mechanistic PK-PD submodel.
- No assessment of parameter identifiability or practical identifiability given the data used for fitting.

#### Generalizability
The model is parameterized for the p.Val142Ile variant (most common in ATTRv trials) and may not fully represent other variants. Findings are specific to ATTR-CM and may not directly translate to ATTR polyneuropathy. The framework is generalizable to other amyloidoses with similar dissociation-aggregation kinetics if appropriate data are available.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the mechanistic model structure showing TTR tetramer production, dissociation into monomers, monomer unfolding, amyloid formation, and drug binding (stabilizers and knockdown).
  - *Significance*: Provides the conceptual framework for the ODE model, illustrating the key processes and interventions.
- **Figure 2**: Linear correlations between model-predicted monomer efflux AUC (normalized to untreated ATTRwt) and clinical outcomes (6MWD, KCCQ-OS, NT-proBNP) from ATTR-ACT and ATTRibute-CM trials.
  - *Significance*: Validates monomer efflux as a surrogate for disease progression by showing correlation with multiple clinical endpoints across genotypes and treatments.
- **Figure 3**: Sobol sensitivity analysis (a), predicted clearance pathway proportions (b), and relationship between serum TTR increase and risk reduction (c) for acoramidis treatment.
  - *Significance*: Identifies monomer loss rate (renal clearance) as the most sensitive parameter; shows genotype-dependent clearance pathways; recapitulates clinical finding that greater TTR increase correlates with better outcomes.
- **Figure 4**: Comparison of tafamidis and acoramidis: tetramer binding fraction, drug distribution, serum TTR changes, monomer efflux reduction, and relationship between TTR increase and efflux decrease.
  - *Significance*: Demonstrates acoramidis achieves greater stabilization and monomer efflux reduction than tafamidis, with nonlinear benefits of near-complete stabilization.
- **Figure 5**: Comparison of acoramidis and vutrisiran: model fit to HELIOS-B serum TTR data, monomer efflux AUC over 30 months, and early (3-month) monomer efflux reduction.
  - *Significance*: Shows acoramidis reduces monomer efflux more than vutrisiran, especially at early time points, due to immediate stabilization versus delayed knockdown.
- **Table 1**: Drug binding parameters ($K_{d1}$, $K_{d2}$, $K_{d,albumin}$) for acoramidis and tafamidis estimated from FPE model fitting, with confidence intervals.
  - *Significance*: Provides key parameter estimates that drive the differential stabilization effects; highlights the large difference in albumin binding between the two drugs.

---

### Code & Reproducibility Assessment
The authors state that AI tools were used to prepare code for public dissemination. No explicit repository link is provided in the main text, but code is likely available from the authors or in supplementary materials.

---

### Supplementary Materials
The supplementary materials contain the FPE model equations (Supplemental Equations 1–7), the ATTR-CM model equations (Supplemental Equations 8–16), initial conditions (Tables S1–S2), additional fitting constraints (Table S3), fitting targets (Table S4), and supplemental figures (Figures S1–S13) including FPE fits, sensitivity analyses, and robustness checks.

---

### Future Directions
Natural extensions include fitting a nonlinear mixed-effects model to individual patient data to predict patient-specific treatment benefit and explore covariates (genotype, comorbidities, disease stage). The model could be expanded to include additional TTR variants, gene-editing therapies, antibody-based amyloid clearance, and combination therapies (e.g., stabilizer + knockdown). Incorporating TTR binding partners (retinol-binding protein, thyroxine) and tissue-specific amyloid deposition dynamics would further enhance mechanistic realism. A full PK-PD submodel for each drug would replace the constant-concentration assumption.

---

### Expert Commentary
This is a well-executed QSP study that addresses a clinically relevant question in a rapidly evolving therapeutic landscape. The integration of in vitro binding data with clinical trial outcomes is a strength, and the use of monomer efflux as a comparative metric is clever, though its absolute quantitative link to amyloid burden remains unvalidated. The sensitivity analysis is thorough, and the robustness checks (parameter sampling, alternative drug concentrations) increase confidence in the conclusions. From a regulatory perspective, such models could support dose selection and comparative effectiveness claims if prospectively validated. The main limitation is the lack of individual-level data fitting, which would strengthen the model's predictive power. The finding that renal function modulates treatment response is clinically important and aligns with emerging evidence. I would have liked to see a formal identifiability analysis and a more explicit discussion of the assumptions underlying the FPE model. Overall, this is a valuable contribution that sets a benchmark for QSP in ATTR-CM.

---

### Bottom Line
This QSP model provides a robust, mechanistically grounded framework for comparing ATTR-CM therapies by quantifying monomer efflux as a surrogate for amyloidogenic potential. The analysis consistently shows acoramidis achieving the greatest reduction in monomer efflux among approved treatments, driven by near-complete tetramer stabilization. The model also highlights renal function as a key modulator of disease severity and treatment response. For practicing pharmacometricians, this work exemplifies how integrating in vitro and clinical data into a mechanistic model can generate actionable insights for drug development and therapeutic selection, while also identifying clear next steps for individual-level modeling and broader variant coverage.

---

---

## 📊 Figures

![The mechanistic model structure representing TTR dissociation, amyloid formation, and pharmaceutical intervention. A system of ordinary differential equations, a]({{ site.baseurl }}/assets/digests/2026-06-09-evaluation-of-the-current-attr-cm-treatment-landscape-via-a-mathematical-model/figures/fig_01.jpg)

![The model prediction of the monomer efflux AUC at month 30 (normalized to untreated ATTRwt) is presented against clinical outcomes measured in acoramidis-, tafam]({{ site.baseurl }}/assets/digests/2026-06-09-evaluation-of-the-current-attr-cm-treatment-landscape-via-a-mathematical-model/figures/fig_02.jpg)

![(a) Sobol total-order index sensitivity analysis for selected parameters in simulations without drug across variant status. Values indicate the variance in monom]({{ site.baseurl }}/assets/digests/2026-06-09-evaluation-of-the-current-attr-cm-treatment-landscape-via-a-mathematical-model/figures/fig_03.jpg)

![Comparison of model predictions for tafamidis and acoramidis at month 30. (a) Fraction of TTR tetramers bound by at least one stabilizing drug, fraction of drug]({{ site.baseurl }}/assets/digests/2026-06-09-evaluation-of-the-current-attr-cm-treatment-landscape-via-a-mathematical-model/figures/fig_04.jpg)

![Comparison of the top performing stabilizing drug (acoramidis) and the only knockdown agent approved for treatment of ATTR-CM (vutrisiran). (a) Model-simulated s]({{ site.baseurl }}/assets/digests/2026-06-09-evaluation-of-the-current-attr-cm-treatment-landscape-via-a-mathematical-model/figures/fig_05.jpg)