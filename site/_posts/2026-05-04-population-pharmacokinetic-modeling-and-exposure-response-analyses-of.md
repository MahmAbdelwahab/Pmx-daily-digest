---
layout: post
title: "Population Pharmacokinetic Modeling and Exposure-Response Analyses of Nemtabrutinib in Patients With Hematologic Malignancies"
date: 2026-05-04
authors: "Chiara C. Kemal et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70257"
paper_type: generic
tags: [generic, qsp, dose-response, covariate-analysis, regulatory]
excerpt_text: "The study developed a preliminary population PK model for nemtabrutinib, a reversible non‑covalent BTK inhibitor, using data from 578 patients across phase 1/2 trials. Covariate analysis showed no clinically significant impact of intrinsic or extrinsic factors on exposure, and exposure‑response analyses supported a 65 mg daily dose as offering an improved benefit‑risk profile for CLL/SLL."
pdf_path: "/assets/digests/2026-05-04-population-pharmacokinetic-modeling-and-exposure-response-analyses-of/PMx_Population_Pharmacokinetic_Modeling_and__20260504.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
The study developed a preliminary population PK model for nemtabrutinib, a reversible non‑covalent BTK inhibitor, using data from 578 patients across phase 1/2 trials. Covariate analysis showed no clinically significant impact of intrinsic or extrinsic factors on exposure, and exposure‑response analyses supported a 65 mg daily dose as offering an improved benefit‑risk profile for CLL/SLL.

---

### Executive Summary
A two‑compartment population PK model with first‑order absorption (time delay) and first‑order elimination adequately described nemtabrutinib concentrations from 5–80 mg daily doses in 578 patients with hematologic malignancies. Body weight, sex, race, disease indication, age, albumin, hepatic/renal function, CYP3A4 modulators, and acid‑reducing agents were tested as covariates; none produced clinically significant changes in clearance or bioavailability (<4% effect). Exposure‑response analysis revealed a significant increase in probability of best overall response with higher nemtabrutinib exposure in CLL/SLL patients, while higher exposure was also linked to increased any‑grade adverse events and hypertension but not to grade ≥3 events. These findings support the phase 2 recommended dose of 65 mg daily as providing an optimal benefit‑risk balance.

---

### Scientific Context & Motivation
Covalent BTK inhibitors (e.g., ibrutinib, acalabrutinib) are effective in CLL/SLL but resistance frequently arises via BTK C481 mutations, creating an unmet need for non‑covalent BTK inhibitors that retain activity against mutant BTK. Nemtabrutinib is such an agent, yet comprehensive pharmacokinetic and exposure‑characterization data were lacking, particularly regarding the influence of intrinsic patient factors, concomitant medications, and the relationship between exposure and both efficacy and safety. Addressing these gaps is essential to inform dosing, identify populations requiring dose adjustment, and define the therapeutic window for nemtabrutinib in hematologic malignancies.

---

## ⚡ Methodological Snapshot
Population pharmacokinetic analysis was conducted using nonlinear mixed‑effects (NLME) modeling in NONMEM v7.5.1 with PsN v5.3.1 for automation and R v4.3.3 for visualization and post‑processing. Structural model evaluation compared one‑, two‑, and three‑compartment models with first‑order absorption and elimination; a two‑compartment model with first‑order absorption (including a lag time) and first‑order elimination was selected based on objective function decrease and goodness‑of‑fit plots. Inter‑individual variability was assumed log‑normally distributed on clearance and central volume, and a combined proportional‑additive error model described residual variability. Covariate analysis followed a full‑model strategy: all prespecified covariates (body weight, sex, race, disease indication, age, albumin, hepatic/renal function, CYP3A4 modulators, acid‑reducing agents) were retained regardless of effect size or precision. Power functions for body weight on clearance and volume were estimated first and fixed in the full model to address collinearity. Categorical covariates were entered as fractional differences relative to a reference (normal hepatic function, normal renal function, CLL/SLL, White race). Clinical significance of covariate effects was assessed via post‑hoc simulation of individual exposure ($C_{avg}$) using each patient’s actual dosing history and individual EBEs, normalizing by the preceding dose, and comparing exposure distributions across subgroups (quartiles for continuous variables, reference categories for categorical). Exposure‑response relationships were examined using multivariate logistic regression with $C_{avg}$ (or $C_{max}$) as a linear predictor of efficacy (best overall response) and safety (any‑grade drug‑related AEs, hypertension), and time on treatment as a saturable sigmoidal predictor. Model predictive performance was evaluated by visual predictive checks based on 500 simulations.

---

## 📋 Detailed Analysis
The final model yielded precise estimates for structural parameters (clearance RSE 4.6 %, volume RSE 1.8 %, absorption rate RSE 7.2 %) while inter‑individual variability on clearance decreased from 48.0 % in the base model to 39.8 % after covariate inclusion, and on central volume from 27.5 % to 17.1 %, indicating that the covariates explained a meaningful portion of between‑subject variability. $\eta$-shrinkage remained below 20 % for both parameters, supporting reliable estimation of individual residuals. The residual additive error term exhibited large uncertainty (RSE 101 %) and a confidence interval spanning negative to positive values, reflecting limited information at the low‑concentration end of the assay range; however, the proportional error component was well estimated (RSE 3.2 %). Covariate effect estimates generally showed high uncertainty (many $RSE > 50\%$ and confidence intervals crossing zero), which the authors addressed by relying on simulation‑based assessment of clinical significance rather than the raw parameter estimates. The forest plots (Figure 1) revealed that the largest shifts in $C_{avg}$ were associated with lower body weight, female sex, Asian race, younger age, and lower albumin, yet all remained within the 0.8–1.25 bioequivalence range. Exposure‑response analysis demonstrated a statistically significant positive slope for $C_{avg}$ predicting best overall response in CLL/SLL ($p < 0.05$), with the model predicting markedly higher response probabilities at the 65 mg and 80 mg exposure levels compared with 45 mg. For safety, $C_{avg}$ was significantly associated with increased odds of any‑grade drug‑related AEs and hypertension, but no signal emerged for grade ≥ 3 events, suggesting that the increase in mild events may be manageable and that the dose‑limiting toxicity is not driven by exposure‑dependent severe toxicity. The lack of exposure‑response for tolerability endpoints (dose interruptions, reductions, discontinuations) further supports that dose adjustments for mild events may not be warranted. Overall, the integrated PK/ER analysis provides a mechanistic rationale for selecting 65 mg daily as the phase 2 recommended dose, balancing adequate exposure for efficacy against a tolerable safety profile.

---

### Domain Context
This work sits at the intersection of targeted therapy development and precision dosing in oncology. BTK inhibitors have transformed the treatment landscape for CLL/SLL and other B‑cell malignancies, yet the emergence of resistance mutations (notably C481) necessitates next‑generation agents like nemtabrutinib that retain activity irrespective of C481 status. Characterizing the pharmacokinetics and exposure‑response of such agents early in development is critical to define dosing strategies, anticipate drug‑interaction liability, and identify subpopulations that may require individualized dosing. The present study exemplifies a modern PK/ER workflow—combining rich clinical trial data, NLME modeling, simulation‑based covariate assessment, and exposure‑response modeling—to accelerate dose selection while generating a hypothesis‑free safety signal profile. As nemtabrutinib advances to phase 3, the models described here will be updated with efficacy endpoints such as progression‑free survival and with data from treatment‑naïve patients, enabling further refinement of dosing recommendations and exploration of prognostic biomarkers (e.g., TP53 status, prior BTK/BCL2 exposure) that may influence both drug disposition and disease outcome.

---

## 📊 Key Findings
The final PK model estimated apparent clearance of $3.33$ L/h and central volume of distribution of $120$ L, yielding a terminal half‑life of $\sim 85$ h. Bioavailability was linear at doses $\ge 30$ mg, with doses $< 30$ mg showing $\sim 15\%$ lower relative F. Covariate effects on $CL$ and $V_c$ were small; the largest estimated effects were for body weight (power exponents $0.331$ on $CL$, $0.807$ on $V_c$) and age ($-0.503$ on $CL$), but simulation‑based assessment showed all intrinsic and extrinsic factors altered exposure by less than the bioequivalence bounds of 0.8–1.25, indicating no clinically significant impact. In CLL/SLL patients, higher average exposure ($C_{avg}$) was significantly associated with increased probability of best overall response (partial or complete response). Across all hematologic malignancies, higher $C_{avg}$ correlated with increased probability of any‑grade drug‑related adverse events and any‑grade hypertension, though no relationship was observed for grade ≥3 events or tolerability endpoints. Collectively, the exposure‑response profiles support 65 mg daily as the dose offering the best benefit‑risk ratio.

---

### Strengths & Limitations

#### Strengths
- Large, well‑characterized dataset (578 patients, 5,669 PK samples) from two early‑phase trials covering a broad dose range (5–80 mg).
- Comprehensive covariate evaluation using a full‑model approach that avoids stepwise selection bias and retains all prespecified covariates.
- Use of simulation‑based (post‑hoc) exposure metrics to assess clinical significance of covariate effects, accounting for correlations among covariates.
- Good model performance demonstrated by unbiased goodness‑of‑fit plots and visual predictive checks.
- Integration of exposure‑response analyses for both efficacy (BOR in CLL/SLL) and safety (any‑grade AEs, hypertension) to inform dose selection.

#### Limitations (Acknowledged by Authors)
- Preliminary model based primarily on phase 1/2 data; limited numbers for some covariates (e.g., strong CYP3A4 inhibitors, severe hepatic/renal impairment).
- Potential confounding due to correlations among covariates (e.g., body weight with race, sex, disease indication) which may affect interpretability of individual effect estimates.
- Exposure‑response analyses relied on simulated individual exposure ($C_{avg}$) rather than observed PK, introducing model‑dependency.
- Lack of data on patients with severe hepatic or moderate/severe renal impairment, as these populations were excluded from the studies.
- Missing data on potentially important prognostic factors such as TP53 mutation status and prior BTK/BCL2 inhibitor exposure.

#### Limitations (Expert Review)
- The assumption of linear bioavailability above 30 mg needs confirmation with additional data, especially at the extremes of the dose range.
- Time‑on‑treatment was included as a saturable predictor in logistic regression but its interaction with exposure was not explored; longer exposure may confound exposure‑response relationships.
- No external validation dataset was presented; model robustness across different populations or study designs remains untested.
- The residual additive error term showed large uncertainty (RSE 101 %), suggesting variability at low concentrations may not be well characterized.
- Potential for unmeasured drug‑drug interactions (e.g., with strong CYP3A4 inducers) due to low prevalence in the sample.

#### Generalizability
Findings are likely generalizable to patients with hematologic malignancies receiving nemtabrutinib monotherapy at doses similar to those studied (5–80 mg), particularly regarding the lack of need for dose adjustment based on weight, age, sex, race, mild hepatic/renal impairment, or concomitant use of moderate CYP3A4 modulators and acid‑reducing agents. Caution is warranted when extrapolating to patients with severe organ impairment, strong CYP3A4 inhibitor/inducer co‑therapy, or populations with differing genetic backgrounds not well represented in the current sample.

---

---

### Figures & Tables

- **Figure 1**: Forest plot showing the impact of intrinsic covariates (age, weight, sex, race, albumin, hepatic/renal function, disease indication) on nemtabrutinib average exposure ($C_{avg}$) simulated from the final population PK model.
  - *Significance*: Visually demonstrates that all intrinsic factors produce exposure changes within bioequivalence bounds, supporting the conclusion of no clinically significant covariate effects.
- **Figure 2**: Scatter of individual average ($C_{avg}$) and maximum ($C_{max}$) concentrations by dose and study, with error bars indicating variability across patients.
  - *Significance*: Illustrates the dose‑proportional increase in exposure and the considerable inter‑individual variability that the PK model captures.
- **Figure 3**: Exposure‑response plot for best overall response (BOR) versus nemtabrutinib $C_{avg}$ in CLL/SLL patients, with logistic regression fit and observed data stratified by dose (45, 65, 80 mg).
  - *Significance*: Provides the quantitative basis for the exposure‑efficacy relationship, showing a significant positive trend that informed dose selection.
- **Figure 4**: Exposure‑safety plots for any‑grade drug‑related adverse events and any‑grade hypertension versus nemtabrutinib $C_{avg}$ across all hematologic malignancy patients.
  - *Significance*: Shows the significant exposure‑dependent increase in mild‑to‑moderate safety events, while the lack of trend for grade ≥3 events helps define the therapeutic window.

---

### Future Directions

---

### Expert Commentary

---

### Bottom Line
Clinicians can prescribe nemtabrutinib at a fixed 65 mg daily dose without routine dose adjustments for weight, age, sex, race, mild hepatic or renal dysfunction, or common concomitant medications (including CYP3A4 modulators and acid‑reducing agents). The drug exhibits predictable pharmacokinetics and a favorable exposure‑response profile that supports this dose as offering an optimal balance of efficacy and safety in CLL/SLL.

---

---

## 📊 Figures

![FIGURE 1: Impact of intrinsic factors on nemtabrutinib exposure. Post hoc exposure (Cavg) was simulated with the preliminary nemtabrutinib full covariate model and normali]({{ site.baseurl }}/assets/digests/2026-05-04-population-pharmacokinetic-modeling-and-exposure-response-analyses-of/figures/fig_01.jpg)

![FIGURE 2: Individual average and maximum concentrations for nemtabrutinib across dose and study. Individual concentration data shown as shaded circles. The triangle and er]({{ site.baseurl }}/assets/digests/2026-05-04-population-pharmacokinetic-modeling-and-exposure-response-analyses-of/figures/fig_02.jpg)

![FIGURE 3: Exposure-efficacy analysis of BOR vs. nemtabrutinib concentration in CLL/SLL. The red, blue, and green horizontal boxplots depict the distribution of nemtabrutin]({{ site.baseurl }}/assets/digests/2026-05-04-population-pharmacokinetic-modeling-and-exposure-response-analyses-of/figures/fig_03.jpg)

![FIGURE 4: Exposure-safety analysis of any-grade drug-related AE and any-grade hypertension vs. nemtabrutinib concentration. The red, blue, and green horizontal boxplots de]({{ site.baseurl }}/assets/digests/2026-05-04-population-pharmacokinetic-modeling-and-exposure-response-analyses-of/figures/fig_04.jpg)