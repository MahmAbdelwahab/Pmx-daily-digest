---
layout: post
title: "Midazolam Dosing During CRRT: A Combined Ex Vivo and Physiologically-Based Pharmacokinetic Approach"
date: 2026-04-27
authors: "Autumn M. McKnite et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70240"
paper_type: popk
tags: [popk, pbpk, qsp, pediatrics, regulatory]
excerpt_text: "Pediatric pharmacometricians, intensivists, and clinical pharmacologists should read this study because it presents a novel CRRT-PBPK modeling framework that combines ex vivo circuit data with physiologically-based models to derive midazolam dosing recommendations for critically ill children on continuous renal replacement therapy. The study demonstrates that standard midazolam dosing ranges remain appropriate during CRRT, providing much-needed guidance for this vulnerable population. The reusable CRRT compartment architecture offers a template for extending this approach to other drugs."
pdf_path: "/assets/digests/2026-04-27-midazolam-dosing-during-crrt-a-combined-ex-vivo-and-physiologically-based/PMx_Midazolam_Dosing_During_CRRT_A_Combined__20260427.pdf"
retroactively_classified: false
---

### Quick Take
Pediatric pharmacometricians, intensivists, and clinical pharmacologists should read this study because it presents a novel CRRT-PBPK modeling framework that combines ex vivo circuit data with physiologically-based models to derive midazolam dosing recommendations for critically ill children on continuous renal replacement therapy. The study demonstrates that standard midazolam dosing ranges remain appropriate during CRRT, providing much-needed guidance for this vulnerable population. The reusable CRRT compartment architecture offers a template for extending this approach to other drugs.

---

### Executive Summary
This study develops and validates a combined ex vivo and physiologically-based pharmacokinetic (PBPK) modeling approach to characterize midazolam disposition in critically ill pediatric patients receiving continuous renal replacement therapy (CRRT). The authors constructed a 17-compartment adult PBPK model in PK-Sim/MoBi, scaled it to children incorporating age-dependent physiology and CYP3A4/3A7 ontogeny, and integrated a novel CRRT circuit compartment parameterized with ex vivo experimental data. Critical illness factors including hypoalbuminemia, anemia, inflammation-induced CYP downregulation, and residual renal function were incorporated to improve predictive performance. Model evaluation against opportunistic PK data from three pediatric patients (CVVHD and CVVHDF modalities) demonstrated acceptable bias and precision (AFE within $0.7$-$1.3$, $AAFE \le 3$, $>90\%$ observations within $90\%$ prediction interval). Population simulations across five age-stratified virtual populations (neonates through adolescents) informed dosing recommendations of $0.04$ $mg/kg/h$ for neonates and $0.1$ $mg/kg/h$ for older children, both falling within standard dosing ranges, suggesting no adjustment is needed for midazolam during CRRT.

---

### Scientific Context & Motivation
Critically ill children on CRRT experience mortality rates of $30$-$70\%$, with altered drug pharmacokinetics contributing to ineffective therapy. Traditional PK studies are infeasible for comprehensively characterizing drug disposition across all drug-circuit-age combinations, leaving most drugs without dosing guidance. While ex vivo studies identify circuit-related drug loss, they lack metabolic and elimination processes and cannot predict in vivo exposure. PBPK models offer mechanistic integration of patient and circuit factors but had not been applied to combine ex vivo circuit characterization with pediatric critical illness physiology for midazolam. This work fills that gap by creating a scalable, mechanistic framework that accounts for both CRRT circuit clearance and patient-specific critical illness factors to provide evidence-based dosing guidance.

---

## ⚡ Methodological Snapshot
The authors employed a sequential model-building strategy using PK-Sim and MoBi (Open Systems Pharmacology Suite v10). First, an adult 17-compartment PBPK model for IV midazolam was developed by synthesizing two published models and optimizing drug-specific parameters ($\log P$, fraction unbound) via Monte Carlo parameter identification against healthy adult PK data. This model was then scaled to children by incorporating age-dependent physiological parameters, CYP3A4 ontogeny, and CYP3A7 expression for neonates/preterm infants. A novel CRRT compartment with three sub-compartments (filter, filter dialysate, dialysate bag) plus plasma/RBC sub-compartments was constructed in MoBi and parameterized using ex vivo data from HF1000 hemofilter experiments. The CRRT compartment was connected to the child PBPK venous blood compartment. Critical illness modifications included albumin-adjusted protein binding via PPSF, hematocrit adjustments, residual renal function, and inflammation-induced CYP downregulation based on CRP and organ dysfunction scores. Model performance was assessed using AFE, AAFE, and $90\%$ prediction intervals.

---

## 🏗️ Structural Model Breakdown
The PBPK model consists of 17 physiologic compartments representing organs and tissues connected by arterial and venous blood flows. Drug distribution is driven by perfusion-limited kinetics with partition coefficients calculated by the Rodgers and Rowland method. Midazolam clearance occurs primarily via CYP3A4 metabolism ($K_m$ $1.88$ $\mu M$, $V_{max}$ $6.12$ $L/min$ in adults) with additional CYP3A7 in neonates ($K_m$ $11.4$ $M$, $V_{max}$ $4.0$ $L/min$). Renal clearance is governed by GFR with plasma protein binding to albumin (fraction unbound $2\%$). The CRRT extension adds a circuit compartment to the venous blood pool containing: (1) a filter sub-compartment split into plasma and RBC phases; (2) a filter dialysate compartment; and (3) a dialysate bag compartment. Filter parameters include volume $165$ $mL$, surface area $1.2$ $m^2$, membrane thickness $50$ $\mu m$, with dialysate volume $59.1$ $mL$. Michaelis-Menten elimination ($K_m$ $1100$ $pmol/mL$, $V_{max}$ $0.002$ $L/min$) characterizes circuit drug loss. Flow rates connect these compartments according to CRRT prescription (blood flow, dialysate flow, replacement fluids, pre-blood pump).

---

### Detailed Methodological Analysis

#### Modeling Approach
A 17-compartment whole-body PBPK model was built in PK-Sim and MoBi v10 (Open Systems Pharmacology Suite). The adult IV midazolam model was adapted from two published PBPK models (Salerno et al. 2021; Hanke et al. 2018) and optimized for $\log P$ and fraction unbound. Pediatric scaling preserved drug-specific parameters while adjusting physiological parameters (organ weights, blood flows, protein binding, clearance maturation) based on age. CYP3A4 ontogeny was modeled using built-in PK-Sim functions, and CYP3A7 was added for neonatal metabolism. A novel CRRT compartment was constructed in MoBi with sub-compartments for the filter (plasma and RBC phases), filter dialysate, and dialysate bag, then connected to the child model via the venous blood compartment. Critical illness factors (albumin, hematocrit, GFR, CYP downregulation) were subsequently added in MoBi.

#### Data Sources
Healthy adult PK data from literature were split into development and validation datasets. Pediatric PK data from published studies were used for child model optimization. Ex vivo CRRT data were generated using an HF1000 hemofilter (Baxter) with a $600$ $mL$ reservoir, hematocrit $0.30$, blood flow $80$ $mL/min$, dialysate flow $400$ $mL/min$, pre-blood pump $300$ $mL/h$, and replacement fluids $100$ $mL/h$. Opportunistic clinical PK data were collected from three patients (ages 12, 22, and 72 months) at Primary Children's Hospital undergoing CVVHD or CVVHDF, with a mean of 9 paired blood and effluent samples per patient collected over 14 days.

#### Estimation Methods
Monte Carlo-based parameter identification in PK-Sim was used to optimize adult drug-specific properties ($\log P$, fraction unbound) against healthy adult PK data. The CRRT compartment Michaelis-Menten parameters ($K_m$ $1100$ $pmol/mL$, $V_{max}$ $0.002$ $L/min$) were optimized in MoBi to match ex vivo concentration-time profiles. For individual patient simulations, PPSF was calculated from albumin and $V_{max}$ was manually adjusted to match the percent reduction in CL predicted by the Brussee inflammation equation. Population simulations used $1000$ virtual individuals per age stratum.

#### Model Evaluation
Model performance was assessed using average fold error (AFE; acceptable $0.7$-$1.3$), absolute average fold error (AAFE; acceptable $\le 3$), and the percentage of observations falling within the $90\%$ population prediction interval ($5^{th}$-$95^{th}$ percentiles; acceptable $>90\%$). The adult model achieved AFE $0.92$ and AAFE $1.52$. The child model achieved AFE $1.23$, AAFE $2.18$, with $94\%$ of observations within the $90\%$ PI. The preterm model achieved AFE $1.53$, AAFE $1.53$, with $100\%$ within the $90\%$ PI. The final CRRT-PBPK model placed all patient samples within the $90\%$ confidence interval after inclusion of critical illness parameters.

#### Covariate Analysis
Age was incorporated via physiologic scaling and built-in PK-Sim ontogeny functions for organ maturation, blood flows, and body composition. CYP3A4 ontogeny used PK-Sim age-based factors; CYP3A7 was added for neonates/preterm infants using in vitro data. Body weight and height informed allometric scaling. Albumin was implemented via the plasma protein scaling factor (PPSF) calculated from patient-specific albumin concentrations using an adapted Johnson equation. Hematocrit was adjusted to reflect anemia. Inflammation was modeled using the Brussee equation, which reduces CYP-mediated clearance based on CRP concentration and number of failing organs ($1.29$, $0.96$, $0.83$, and $0.67$ $L/h$ for $1$-$4$ organs). Residual renal function was adjusted by reducing GFR to reflect kidney failure prior to CRRT initiation.

---

### Statistical Rigor Assessment
The study employed established PBPK validation metrics (AFE, AAFE, prediction intervals) with predefined acceptance criteria, lending objectivity to model qualification. However, the small sample size for clinical validation ($n=3$ patients) limits statistical power and precision of error estimates. The opportunistic sampling design ($0.5$ $mL$ blood, $1$ $mL$ effluent, mean 9 samples per patient) provides sparse data that are adequate for model evaluation but insufficient for independent parameter estimation. Monte Carlo parameter identification was used for optimization, though details on convergence criteria and uncertainty quantification for optimized parameters are not reported. No formal sensitivity analysis was presented for the CRRT compartment parameters or critical illness modifiers. The virtual population simulations ($1000$ individuals per age group) provide robust distributional estimates for dosing, but the use of averaged rather than distributed critical illness parameters may underestimate variability. Missing data do not appear to be a significant issue given the modeling framework, though the assay LLOQ of $100$ $pg/mL$ is notably low and appropriate for midazolam quantification in pediatric samples.

---

## 📊 Key Findings
The adult and pediatric PBPK models met predefined acceptance criteria (adult AFE $0.92$, AAFE $1.52$; child AFE $1.23$, AAFE $2.18$, $94\%$ within $90\%$ prediction interval; preterm AFE $1.53$, AAFE $1.53$, $100\%$ within $90\%$ PI). The CRRT compartment, parameterized with ex vivo data using Michaelis-Menten kinetics ($K_m$ $1100$ $pmol/mL$, $V_{max}$ $0.002$ $L/min$), demonstrated that midazolam is primarily adsorbed to circuit components with minimal hemofilter clearance due to high lipophilicity and protein binding. Initial CRRT-PBPK simulations underpredicted concentrations until critical illness parameters were incorporated: $75\%$ GFR reduction, $28\%$ hematocrit reduction, $37\%$ albumin reduction, and $26\%$ CYP downregulation compared to healthy children. Final individual simulations showed good agreement for all patients except one receiving fluconazole, a moderate CYP3A4 inhibitor. Population simulations across $1000$ virtual individuals per age group predicted optimal midazolam doses of $0.04$ $mg/kg/h$ for neonates and $0.1$ $mg/kg/h$ for infants through adolescents (Figure 6), which align with standard recommendations. No clinically meaningful differences were observed between CRRT modalities (CVVHD vs CVVHDF) or filter types.

---

## 💡 Clinical & Regulatory Implications
The primary clinical implication is that midazolam dosing does not require adjustment for pediatric patients undergoing CRRT; standard infusion rates of $0.04$ $mg/kg/h$ for neonates and $0.1$ $mg/kg/h$ for infants through adolescents maintain therapeutic concentrations ($200$-$1000$ $ng/mL$) despite circuit-related drug adsorption. This simplifies prescribing for intensivists and reduces the risk of under-sedation or drug-induced delirium from empirical dose escalation. The model-informed approach provides a template for evaluating other high-risk medications in CRRT, potentially accelerating dosing guidance for drugs where traditional PK studies are infeasible. For regulatory scientists, this demonstrates how PBPK can address knowledge gaps in special populations and support labeling claims for critically ill children. Special populations including preterm neonates and patients with multi-organ dysfunction are addressed through mechanistic incorporation of ontogeny and pathophysiology, though confirmatory clinical trials remain warranted.

---

### Strengths & Limitations

#### Strengths
- Novel integration of ex vivo circuit data with mechanistic PBPK modeling for pediatric CRRT
- Comprehensive accounting for critical illness physiology including albumin, hematocrit, CYP downregulation, and residual renal function
- Age-stratified population simulations across the full pediatric spectrum from neonates to adolescents
- Validation using opportunistic clinical PK data from actual CRRT patients
- Use of established, predefined acceptance criteria (AFE, AAFE, prediction intervals) for model qualification
- Transparent parameterization using published ontogeny data and physiologic scaling methods

#### Limitations (Acknowledged by Authors)
- Ex vivo data were derived from only one CRRT modality (CVVHDF) and one filter type (HF1000)
- Small number of patients ($n=3$) and samples for clinical model evaluation
- UGT clearance contributions were not incorporated; analysis focused only on parent midazolam concentrations
- Flow rate effects on filter clearance were not fully investigated
- A drug-drug interaction with fluconazole (CYP3A4 inhibitor) in one patient affected model evaluation

#### Limitations (Expert Review)
- Opportunistic sampling design limits rich characterization of individual PK profiles
- No external validation dataset; evaluation relied on only 3 patients from a single center
- Virtual populations for dosing guidance used averaged critical illness parameters rather than distributions
- No sensitivity analysis presented for key PBPK parameters or circuit parameters
- Limited generalizability to other sedatives or drugs with different physicochemical properties
- Neonatal blood flow rates were constrained by filter limitations rather than physiologic optimization

#### Generalizability
The modeling framework is generalizable to other drugs and CRRT configurations, but the specific midazolam dosing recommendations require validation in larger cohorts. The approach is most applicable to highly protein-bound, CYP-metabolized drugs with low filter clearance, and may not translate directly to hydrophilic or renally cleared compounds without drug-specific ex vivo parameterization.

---

---

### Figures & Tables

- **Figure 1**: CRRT compartment development showing ex vivo data used to calculate an elimination rate constant and the structural layout of the CRRT compartment with reservoir, filter, dialysate, and plasma/RBC sub-compartments.
  - *Significance*: Illustrates the structural basis of the novel CRRT circuit model and its connection to the systemic PBPK model, which is the core methodological innovation of the study.
- **Figure 2**: Midazolam PBPK population model predictions for adult (A), child (B), and preterm (C) populations compared against observed literature data.
  - *Significance*: Demonstrates successful model development, optimization, and age-scaling across the pediatric spectrum with visual predictive checks.
- **Figure 3**: Model-predicted midazolam concentrations for a $0.1$ $mg/kg/h$ infusion with and without the CRRT compartment connected to the child PBPK model.
  - *Significance*: Quantifies the isolated impact of CRRT circuit clearance on midazolam plasma concentrations, showing modest reductions due to adsorption and filter loss.
- **Figure 4**: Individual CRRT-PBPK model predictions compared to observed plasma concentrations for the three study patients before and after inclusion of critical illness parameters.
  - *Significance*: Shows the incremental improvement in predictive performance when albumin, hematocrit, and CYP downregulation are incorporated, and identifies the fluconazole drug-drug interaction outlier.
- **Figure 5**: Final CRRT-PBPK model performance showing observed concentrations overlaid on the $90\%$ prediction interval for the three evaluated patients.
  - *Significance*: Provides the definitive visual evaluation that the qualified model meets predefined acceptance criteria for clinical prediction.
- **Figure 6**: Model-informed dosing guidance for midazolam continuous IV infusion across five pediatric age groups on CRRT, with the therapeutic range of $200$-$1000$ $ng/mL$ shaded.
  - *Significance*: Delivers the primary clinical endpoint, demonstrating that optimal doses fall within existing standard dosing ranges for all age groups.
- **Table 1**: Optimized and literature-derived physicochemical and PK parameters for the midazolam PBPK model, including $\log P$, fraction unbound, molecular weight, pKa, solubility, permeability, and CYP kinetic constants.
  - *Significance*: Serves as the foundational parameter set for reproducing the adult and pediatric model structure and for comparing optimized values against published data.
- **Table S1**: Virtual population characteristics for healthy adults used in initial model development and validation simulations.
  - *Significance*: Supports reproducibility by documenting the demographic and physiologic assumptions underlying the adult PBPK simulations.
- **Table S2**: Patient-specific demographics, CRRT prescriptions, midazolam dosing, and clinical laboratory values for the three opportunistic PK study participants.
  - *Significance*: Provides the essential clinical inputs used to create virtual individuals for model evaluation, including the critical illness parameters driving model refinement.
- **Table S3**: Hemofilter parameters adjusted by patient according to the specific filter type used during clinical CRRT delivery.
  - *Significance*: Documents circuit-specific customization required for individualized model predictions.
- **Table S4**: Age-stratified virtual population definitions and averaged critical illness parameters (GFR, hematocrit, albumin, CYP reduction) used in population dosing simulations.
  - *Significance*: Defines the pathophysiologic assumptions applied across pediatric age groups to generate model-informed dosing recommendations.
- **Table S5**: Typical CRRT prescriptions by age group (blood flow, dialysate flow, replacement fluids) based on clinical practice at Primary Children's Hospital.
  - *Significance*: Documents the standard-of-care operational parameters that define CRRT clearance in the population simulations.
- **Table S6**: Child PBPK model evaluation metrics against published pediatric PK datasets, including AFE, AAFE, and percentage of observations within the $90\%$ prediction interval.
  - *Significance*: Provides quantitative validation evidence supporting the accuracy of the pediatric scaling approach prior to CRRT compartment addition.

---

### Supplementary Materials
Supplementary materials include Table S1 (virtual population characteristics for healthy adults), Table S2 (patient-specific parameters for CRRT-PBPK evaluation), Table S3 (filter parameters by patient), Table S4 (critical illness parameters for virtual populations), Table S5 (CRRT prescriptions by age group), Table S6 (child model evaluation against literature data), Figure S1 (adult model evaluation), Figure S2 (individual patient model fits), and reference to the PrisMax Operator's Manual for flow rate equations. These materials provide essential parameter values and validation data underlying the main findings.

---

### Future Directions
Validate the CRRT-PBPK framework in larger pediatric cohorts across multiple centers and CRRT modalities. Extend the model to incorporate UGT-mediated metabolism and active metabolites (1-OH-midazolam, 4-OH-midazolam). Apply the ex vivo-PBPK approach to other high-priority drugs used in pediatric CRRT (e.g., antibiotics, sedatives, vasoactives). Investigate flow-rate dependencies and filter-type differences on drug clearance using dedicated ex vivo studies. Incorporate drug-drug interaction modules (e.g., CYP3A4 inhibitors like fluconazole) for precision dosing. Develop Bayesian PBPK frameworks to enable real-time individualization using TDM data. Explore variability in critical illness parameters using distributions rather than mean values in virtual populations.

---

### Expert Commentary
This work represents an important methodological advance in pediatric pharmacometrics by bridging the gap between reductionist ex vivo circuit studies and complex in vivo physiology. The explicit incorporation of critical illness factors—particularly the albumin-mediated protein binding changes and inflammation-driven CYP downregulation—highlights a crucial teaching point: healthy-population PBPK assumptions fail catastrophically in ICU settings. The study also illustrates the power of opportunistic PK studies when combined with mechanistic modeling; three patients with sparse sampling become informative when anchored to a physiologically credible model structure. From a field perspective, this aligns with the MIDD paradigm and regulatory interest in PBPK for special populations. However, the field must remain cautious about over-interpreting population simulations based on averaged pathophysiology; future efforts should embrace stochastic representations of critical illness and rigorous external validation. The reusable CRRT compartment concept is particularly elegant and should be standardized as an open-source MoBi building block for the community.

---

### Bottom Line
For practicing pharmacometricians, this paper demonstrates that a combined ex vivo-PBPK approach can successfully navigate the complexity of drug dosing in pediatric CRRT by mechanistically integrating circuit-specific clearance with age-dependent physiology and critical illness pathophysiology. The key practical finding—that standard midazolam infusion doses ($0.04$ $mg/kg/h$ for neonates, $0.1$ $mg/kg/h$ for older children) remain appropriate during CRRT—provides immediate clinical utility. The CRRT compartment architecture offers a reusable template for other compounds, though each will require drug-specific ex vivo parameterization. When building similar models, prioritize incorporation of critical illness factors (especially albumin and CYP activity) as these dramatically improve predictive accuracy beyond standard healthy-population PBPK assumptions.

---

---

## 📊 Figures

![FIGURE 1: CRRT compartment development. Ex vivo data were used to calculate an elimination rate constant (A). A CRRT compartment with a reservoir was built and simulations]({{ site.baseurl }}/assets/digests/2026-04-27-midazolam-dosing-during-crrt-a-combined-ex-vivo-and-physiologically-based/figures/fig_01.png)

![FIGURE 2: Midazolam PBPK population model. Adult midazolam PBPK population model for a single midazolam IV dose of 0.05 mg/kg (A). Child midazolam PBPK population model fo]({{ site.baseurl }}/assets/digests/2026-04-27-midazolam-dosing-during-crrt-a-combined-ex-vivo-and-physiologically-based/figures/fig_02.png)

![FIGURE 3: Model simulations with and without the CRRT compartment. Model-predicted concentrations for 0.1 mg/kg/h infusion of midazolam for an individual with (solid blue]({{ site.baseurl }}/assets/digests/2026-04-27-midazolam-dosing-during-crrt-a-combined-ex-vivo-and-physiologically-based/figures/fig_03.png)

![FIGURE 6: Model-informed dosing guidance. Model-informed dosing guidance for midazolam sedation with a continuous IV infusion in children supported with CRRT. The gray sha]({{ site.baseurl }}/assets/digests/2026-04-27-midazolam-dosing-during-crrt-a-combined-ex-vivo-and-physiologically-based/figures/fig_04.png)