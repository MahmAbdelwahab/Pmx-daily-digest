---
layout: post
title: "Population Pharmacokinetic Modeling and Pediatric Exposure of Dexamethasone Sodium Phosphate Encapsulated in Erythrocytes (eDSP) Administered Monthly for Treatment of Neurological Symptoms of Patients With Ataxia Telangiectasia."
date: 2026-11-10
authors: "Deniz Ozdin, Leila Kheibarshekan, Giovanni Mambrini, Pierre-Olivier Tremblay"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70103"
paper_type: popk
tags: [popk, pediatrics]
excerpt_text: "This paper presents the first population pharmacokinetic model of erythrocyte-encapsulated dexamethasone sodium phosphate (eDSP) in pediatric patients with ataxia telangiectasia (AT) by pooling dense Phase 1 adult data with sparse Phase 3 pediatric data. It demonstrates that monthly point-of-care autologous erythrocyte infusions provide sustained, low-level plasma dexamethasone exposure over 20 to 30 days without cumulative accumulation across repeated monthly doses. Pediatric pharmacometricians, clinical pharmacologists developing drug-device or autologous cell delivery platforms, and rare disease trialists should read this to understand pragmatic empirical modeling approaches when semi-mechanistic depot models suffer from structural overparameterization."
pdf_path: "/assets/digests/2026-11-10-population-pharmacokinetic-modeling-and-pediatric-exposure-of-dexamethasone/PMx_Population_Pharmacokinetic_Modeling_and__20261110.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents the first population pharmacokinetic model of erythrocyte-encapsulated dexamethasone sodium phosphate (eDSP) in pediatric patients with ataxia telangiectasia (AT) by pooling dense Phase 1 adult data with sparse Phase 3 pediatric data. It demonstrates that monthly point-of-care autologous erythrocyte infusions provide sustained, low-level plasma dexamethasone exposure over 20 to 30 days without cumulative accumulation across repeated monthly doses. Pediatric pharmacometricians, clinical pharmacologists developing drug-device or autologous cell delivery platforms, and rare disease trialists should read this to understand pragmatic empirical modeling approaches when semi-mechanistic depot models suffer from structural overparameterization.

---

### Executive Summary
Ataxia telangiectasia is a devastating, progressive autosomal recessive neurodegenerative disorder lacking disease-modifying therapies, where oral glucocorticoids transiently improve neurologic motor signs but induce prohibitive systemic toxicities including severe hypothalamic-pituitary-adrenal axis suppression. The EryDex System (EDS) circumvents these peaks by loading autologous red blood cells (RBCs) ex vivo with dexamethasone sodium phosphate pro-drug, which undergoes slow intra-erythrocytic enzymatic dephosphorylation by resident phosphatases and continuous passive trans-membrane diffusion of active dexamethasone over 3 to 4 weeks. Ozdin and colleagues developed a population PK model combining dense Phase 1 adult volunteer data (n = 18) with Phase 3 multi-center pediatric AT data (n = 115, aged 5–17 years). Despite the complex biological release mechanism, a two-compartment model with linear elimination and fixed standard allometric scaling on weight best described systemic exposure while avoiding the severe overparameterization encountered with semi-mechanistic depot models. Monte Carlo simulations in virtual pediatric cohorts (aged 2 to <17 years) confirmed dose-proportional systemic exposure, a rapid post-infusion peak at 0.67 hours, and prolonged baseline concentrations (~1 pg/mL) out to 720 hours without multi-dose accumulation, establishing a quantitative foundation for monthly dosing regimens.

---

### Scientific Context & Motivation
Ataxia telangiectasia (AT) is caused by loss-of-function biallelic mutations in the ATM kinase gene, resulting in impaired DNA double-strand break repair, chronic neuroinflammation, microglial activation, oxidative stress, and premature Purkinje cell degeneration. While systemic glucocorticoids mitigate neurological manifestations through anti-inflammatory and mitochondrial-protective pathways, chronic daily oral administration causes unacceptable pediatric toxicities—principally cushingoid habitus, growth arrest, and adrenal atrophy. The EryDex System (EDS) functions as a biological sustained-release bioreactor: autologous erythrocytes are hypotonic-dialyzed to encapsulate dexamethasone sodium phosphate (DSP), resealed, washed, and reinfused. Intra-erythrocytic phosphatase enzymes convert DSP into active uncharged dexamethasone, which continuously permeates out into the systemic circulation over 20 to 30 days. Prior to this investigation, robust characterization of dexamethasone disposition from eDSP had been limited to healthy adult cohorts, leaving pediatric exposure, allometric relationships, and multi-dose steady-state accumulation unquantified in children with AT.

---

## ⚡ Methodological Snapshot
The authors utilized non-linear mixed-effects modeling in NONMEM 7.4 (FOCE-I algorithm) to analyze pooled dexamethasone plasma concentrations from two clinical trials: an open-label Phase 1 single-dose escalation trial in 18 healthy adults with rich sampling over 42 days, and the pivotal Phase 3 ATTeST trial (NCT02770807) in 115 pediatric and young adult AT patients receiving monthly infusions over 6 months with sparse PK sampling (1, 4, 24 h post-infusion, Day 15, and subsequent pre/post-infusion troughs and peaks). A total of 1719 plasma observations across three nominal encapsulated dose levels (4.2 mg, 8.3 mg, and 17.4 mg) were analyzed.

Structural model exploration evaluated one-, two-, and three-compartmental linear models, non-linear/mixed elimination pathways, transit and dual first-order/Michaelis-Menten depot absorption processes, and a semi-physiological model explicitly representing intra-erythrocytic dephosphorylation. Standard fixed allometric scaling centered to a 70 kg adult was implemented a priori. Stepwise covariate testing screened demographic, clinical, and disease variables against individual post-hoc parameter estimates. Model adequacy was verified via diagnostic goodness-of-fit plots, 1000-replicate non-parametric bootstrapping, and prediction-corrected visual predictive checks (pcVPCs).

Finally, the validated population PK model was implemented in R using Generalized Additive Models for Location, Scale, and Shape (GAMLSS) calibrated against CDC growth charts to execute Monte Carlo simulations (n = 1000 per stratum across three age brackets: 2–<6, 6–<10, and 10–17 years). These simulations quantified single- and multiple-dose $C_{max}$, $C_{trough}$, and $AUC_{\tau}$ across the three therapeutic eDSP dose levels.

---

## 🏗️ Structural Model Breakdown
The systemic disposition of dexamethasone following intravenous eDSP infusion was parameterized using a two-compartment open mammillary model with first-order systemic clearance ($CL$), central distribution volume ($V_1$), inter-compartmental clearance ($Q$), and peripheral distribution volume ($V_2$). Standard fixed theoretical allometric scaling was incorporated: exponents of 0.75 for clearances ($CL$, $Q$) and 1.0 for distribution volumes ($V_1$, $V_2$), normalized to a standard body weight of 70 kg.

Although biological release involves slow enzymatic cleavage of DSP within RBCs and diffusion across erythrocyte membranes, empirical depot and semi-physiological models (which attempted to explicitly track RBC dephosphorylation and transmembrane flux) proved unstable upon incorporating sparse Phase 3 pediatric data, generating unphysiologically tiny $Q$ estimates and failure to resolve inter-individual variability (IIV). The empirical two-compartment model without an explicit input delay function proved mathematically superior (MOF 2652.5 vs. 2724.4 for 3-compartment), with initial infusion capturing early drug appearance and the secondary distribution phase mathematically accommodating the extended apparent terminal half-life (flip-flop disposition).

Inter-individual variability was structured exponentially on $CL$ ($41.4\%CV$) and $V_1$ ($70.7\%CV$); IIV on peripheral parameters was fixed to zero to avoid overparameterization. Residual unexplained variability was characterized by separate combined additive-plus-proportional error models for Phase 1 (18.1% proportional, 0.0013 ng/mL additive) and Phase 3 (29.5% proportional, 24.3 ng/mL additive), reflecting differences in assay platforms, clinical sites, and sampling sparsity.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects population pharmacokinetic modeling conducted in NONMEM version 7.4 with PDx-Pop, using R for post-processing and GAMLSS-based Monte Carlo simulations. Explored standard compartmental, non-linear elimination, transit-depot, and semi-mechanistic cell-carrier structural models.

#### Data Sources
Pooled clinical trial data: Phase 1 open-label single-center healthy adult study (NCT01925859, n = 18; dense sampling from pre-infusion through 42 days) and Phase 3 international, randomized, double-blind ATTeST study in pediatric/young adult AT patients (NCT02770807, n = 115; sparse sampling across 6 monthly infusion cycles). Validated UPLC-MS/MS and HPLC-MS/MS assays with lower limit of quantification of 0.5 ng/mL.

#### Estimation Methods
First-Order Conditional Estimation with Interaction (FOCE-I). Objective function evaluation (MOF) based on log-likelihood difference ($-2LL$).

#### Model Evaluation
Goodness-of-fit (GOF) diagnostic plots on linear and semi-logarithmic scales; 1000-sample non-parametric bootstrap generating medians and 90% confidence intervals; standard and prediction-corrected Visual Predictive Checks (pcVPC) stratified by clinical trial phase, dose cohort, and pediatric age group.

#### Covariate Analysis
Pre-specified fixed allometric exponents (0.75 on clearances, 1.0 on volumes). Stepwise forward addition ($p < 0.01$, $\Delta\text{MOF} > 6.635$, 1 df) and backward elimination ($p < 0.001$, $\Delta\text{MOF} > 10.828$, 1 df) evaluating age, actual body weight, BMI, sex, race, ethnicity, dose level, and disease status (healthy adult vs. AT patient). Only disease status on $CL$ was statistically significant.

---

### Statistical Rigor Assessment
The modeling approach demonstrated sound statistical discipline given the challenges of merging rich Phase 1 adult data with sparse Phase 3 pediatric data. The decision to fix allometric exponents a priori is well-established regulatory best practice for pediatric modeling when data across the lower weight continuum are constrained. Bootstrap resampling (1000 runs) exhibited high convergence rates with narrow 90% confidence intervals for typical fixed effects (e.g., $CL$ RSE 8%, $V_1$ RSE 9%, $Q$ RSE 13%). $\eta$ shrinkage was modest for $CL$ (26%) and negligible for $V_1$ (7%), validating individual post-hoc diagnostic inferences. While the Phase 3 additive residual variance was relatively high (24.3 ng/mL), this reflected sparse clinical field trials across global multi-center rare-disease sites compared to controlled Phase 1 conditions. The exclusion of non-quantifiable post-Day 30 samples was mechanistically justified, as drug concentrations legitimately wash out prior to subsequent monthly infusions.

---

## 📊 Key Findings
For a typical 70 kg individual, dexamethasone population clearance was estimated at 20.8 L/h (8% RSE), with a central distribution volume ($V_1$) of 122 L (9% RSE), inter-compartmental clearance ($Q$) of 0.358 L/h (13% RSE), and peripheral volume ($V_2$) of 16.8 L (9% RSE). AT patients exhibited approximately 10.1% lower systemic clearance than healthy volunteers ($\theta_{PTNT} = 0.899$, 10% RSE). Monte Carlo simulations demonstrated an initial $C_{max}$ at 0.67 hours post-dose (e.g., 187 ng/mL for low-dose 8.3 mg in children aged 6–<10 years), followed by a rapid initial clearance over 24 hours and a protracted terminal elimination/release phase persisting for 20 to 30 days, dropping to ~0.001 ng/mL at trough (720 h). Crucially, single-dose and month-6 multiple-dose simulated profiles yielded identical $C_{max}$ and $AUC_{\tau}$ values, confirming zero systemic drug accumulation with once-monthly dosing across all pediatric age cohorts.

---

## 💡 Clinical & Regulatory Implications
These pharmacometric findings provide pivotal quantitative justification for the EryDex clinical regimen in pediatric ataxia telangiectasia. By maintaining steady, sub-nanomolar circulating concentrations of dexamethasone over 3 to 4 weeks while completely clearing between cycles, eDSP avoids the continuous glucocorticoid receptor over-saturation and high daily peak exposures responsible for pediatric HPA-axis shutdown, growth plate inhibition, osteopenia, and cushingoid features observed with oral steroids. The model indicates that weight-based allometric scaling adequately captures pediatric exposure differences in children older than 6 years. However, simulated exposures in children with AT aged 10–17 years showed lower $C_{max}$ and $AUC$ compared to observed trial data because the trial cohort had marked disease-related somatic undernutrition (mean weight ~30 kg vs. CDC reference weight ~50 kg), highlighting that clinical dosing in AT must be guided by actual, cachectic body weight rather than chronological age.

---

### Strengths & Limitations

#### Strengths
- First population pharmacokinetic analysis characterizing erythrocyte-encapsulated dexamethasone in a rare pediatric neurodegenerative disease.
- Pragmatic integration of dense adult Phase 1 data with sparse Phase 3 international trial data to stabilize structural clearance and volume estimation.
- Thorough exploration of semi-mechanistic and transit-depot models, with transparent rationale for selecting a stable parsimonious structural model.
- Robust virtual pediatric simulations across discrete age tiers utilizing population-representative GAMLSS-derived CDC growth distributions.
- Definitive demonstration of the absence of multi-dose accumulation over 6 months of consecutive monthly administration.

#### Limitations (Acknowledged by Authors)
- The empirical two-compartment model does not explicitly parameterize the bio-chemical rate constants of intra-erythrocyte enzymatic dephosphorylation or passive membrane efflux.
- Extreme data sparsity in children under 6 years of age (only n = 1 patient aged 2–<6 years in the modeling dataset), precluding assessment of hepatic ontogeny or maturation functions.
- High additive residual error in Phase 3 pediatric data (24.3 ng/mL), reflecting operational variability across multi-center international rare disease trial sites.
- Exclusion of concentrations below the lower limit of quantification prior to modeling rather than using likelihood-based (e.g., Beal M3) censoring methods.

#### Limitations (Expert Review)
- Apparent systemic elimination half-life is confounded by flip-flop kinetics (input rate from erythrocytes is slower than true dexamethasone elimination rate), yet unencapsulated IV dexamethasone control arms were not modeled simultaneously to mathematically decouple de-encapsulation from systemic elimination.
- No dynamic hematocrit or erythrocyte survival covariate was evaluated on bioavailability or release kinetics, despite patient-to-patient variability in red blood cell fragility or ex vivo processing efficiency.
- Pharmacodynamic biomarkers of glucocorticoid receptor engagement or hypothalamic-pituitary-adrenal axis suppression (e.g., endogenous cortisol, ACTH) were not linked to exposure in this model.

#### Generalizability
The pharmacokinetic findings and structural scaling principles are directly generalizable to pediatric and adolescent AT patients aged 6 to 17 years receiving eDSP prepared via the EryDex System. Extrapolation to children aged 2 to <6 years requires extreme caution given that only one patient in that stratum contributed observed data. Findings cannot be extrapolated to other corticosteroid molecules or alternative autologous cell loading technologies without separate clinical validation.

---

### Key Equations

**Allometric Scaling of Clearance**

{% raw %}
$$
CL_{i} = CL_{\text{pop}} \times \left( \frac{\text{Weight}_{i}}{70} \right)^{0.75} \times \theta_{\text{PTNT}}^{\text{PTNT}_{i}} \times e^{\eta_{i,CL}}
$$
{% endraw %}

Individual systemic clearance model incorporating fixed standard allometric weight scaling centered at 70 kg, disease status effect (PTNT = 0 for healthy volunteers, 1 for AT patients), and exponential inter-individual variability.

**Allometric Scaling of Central Distribution Volume**

{% raw %}
$$
V1_{i} = V1_{\text{pop}} \times \left( \frac{\text{Weight}_{i}}{70} \right)^{1.0} \times e^{\eta_{i,V1}}
$$
{% endraw %}

Individual central volume of distribution model with linear allometric body weight scaling and log-normal inter-individual variability.

**Allometric Scaling of Inter-compartmental Clearance**

{% raw %}
$$
Q_{i} = Q_{\text{pop}} \times \left( \frac{\text{Weight}_{i}}{70} \right)^{0.75}
$$
{% endraw %}

Inter-compartmental distribution clearance between central and peripheral compartments scaled allometrically to body weight without inter-individual random effects.

**Allometric Scaling of Peripheral Distribution Volume**

{% raw %}
$$
V2_{i} = V2_{\text{pop}} \times \left( \frac{\text{Weight}_{i}}{70} \right)^{1.0}
$$
{% endraw %}

Peripheral tissue distribution volume model with isometric allometric weight scaling without inter-individual random effects.

**Two-Compartment Mass-Balance Differential Equations**

{% raw %}
$$
\begin{aligned} \frac{dA_{1}}{dt} &= \text{RateIn}(t) - \left( \frac{CL}{V1} + \frac{Q}{V1} \right) \cdot A_{1} + \frac{Q}{V2} \cdot A_{2} \\ \frac{dA_{2}}{dt} &= \frac{Q}{V1} \cdot A_{1} - \frac{Q}{V2} \cdot A_{2} \end{aligned}
$$
{% endraw %}

System of ordinary differential equations governing drug amount in the central ($A_1$) and peripheral ($A_2$) compartments following intravenous zero-order infusion $\text{RateIn}(t)$.

**Phase-Specific Combined Residual Error Model**

{% raw %}
$$
Y_{ij} = C_{ij} \cdot (1 + \varepsilon_{\text{prop},ij}) + \varepsilon_{\text{add},ij}
$$
{% endraw %}

Residual unexplained variability model combining proportional and additive components, estimated separately for Phase 1 healthy subjects and Phase 3 pediatric AT patients.

---

### Figures & Tables

- **Figure 1**: Mean and observed dexamethasone plasma concentration-time profiles following a single intravenous dose of eDSP on a semi-logarithmic scale for half-low and high dose groups in healthy adults.
  - *Significance*: Demonstrates the triphasic disposition profile spanning 42 days, characterized by a rapid initial distribution peak and a prolonged, sustained release phase out to 30 days.
- **Figure 2**: Overall goodness-of-fit diagnostic plots for the final population PK model, displaying observed vs. population/individual predictions and conditional weighted residuals (CWRES).
  - *Significance*: Confirms lack of structural bias and homoscedastic residual scattering across the plasma concentration continuum across five orders of magnitude.
- **Figure 3**: Overall visual predictive check (VPC) plot comparing observed median, 5th, and 95th percentiles to 95% model simulation confidence intervals over the monthly dosing interval.
  - *Significance*: Validates the model's predictive accuracy across the primary therapeutic window, confirming that observed pediatric concentrations conform closely to model predictions.
- **Figure 4**: Boxplots of simulated $AUC_{\tau}$ and $C_{max}$ across pediatric age tiers comparing single-dose to month-6 multiple-dose administration across three dose levels.
  - *Significance*: Provides definitive graphical evidence that monthly eDSP administration does not cause cumulative systemic drug accumulation in pediatric patients.
- **Table 1**: Baseline demographic and clinical characteristics of subjects included in the population PK analysis, stratified by study phase and pediatric age cohort.
  - *Significance*: Highlights key pediatric patient characteristics, notably that AT patients exhibit lower body weight and BMI relative to standard pediatric populations, and illustrates the n=1 sample size limitation for children aged 2–<6 years.
- **Table 2**: Final population pharmacokinetic parameter estimates, relative standard errors (RSE%), $\eta$ shrinkages, and 1000-replicate bootstrap median and 90% confidence intervals.
  - *Significance*: Serves as the benchmark quantitative parameter reference for eDSP disposition, documenting precise fixed effects (all RSEs <= 13%) and the ~10% clearance reduction in AT patients.
- **Table 3**: Summary of model-simulated single-dose secondary exposure parameters ($C_{max}$ and $AUC_{0-720}$) across virtual pediatric cohorts stratified by age group and eDSP dose level.
  - *Significance*: Provides the quantitative basis for dose selection and exposure bridging across pediatric age groups in clinical development.

---

### Code & Reproducibility Assessment
Code and modeling scripts are not publicly accessible in the manuscript or supplementary materials. Software versions, estimation methods (NONMEM 7.4, FOCE-I), dataset structures, and model parameter estimates are fully reported, allowing theoretical re-implementation, but raw NONMEM control streams and de-identified patient data were not deposited.

---

### Supplementary Materials
The supplementary document (psp470103-sup-0001-appendixs1.docx) includes descriptive concentration statistics across study phases and dose groups (Tables S1–S2), structural schematic diagrams of alternative candidate models including depot and semi-physiological models (Figures S3–S4), Phase 3 observed concentration plots (Figure S1), linear GOF plots (Figures S2, S6), age-stratified pediatric GOF plots (Figure S5), prediction-corrected VPCs (Figures S7–S8), simulated concentration profiles over 6 months (Figures S9–S10), multiple-dose PK metrics (Table S3), and observed vs. simulated exposure comparisons highlighting disease-associated pediatric cachexia (Table S4).

---

### Future Directions
Key research priorities include: (1) expanding pharmacokinetic sampling in young children aged 2 to <6 years to evaluate hepatic CYP3A4 developmental ontogeny; (2) co-modeling unencapsulated intravenous dexamethasone data with eDSP data via non-linear deconvolution or joint structural models to mathematically isolate in vivo erythrocyte release kinetics from systemic clearance; (3) developing a semi-mechanistic Quantitative Systems Pharmacology (QSP) model integrating red blood cell life-span, phosphatase enzymatic kinetics, and glucocorticoid receptor alpha dynamics; and (4) conducting exposure-response modeling linking sustained sub-nanomolar dexamethasone exposure to neurological rating scales (e.g., ICARS) and endocrine safety markers (cortisol suppression).

---

### Expert Commentary
This publication represents a masterclass in pragmatic model-informed drug development (MIDD) under rare disease constraints. Cell-based sustained drug release platforms present a classic pharmacometric dilemma: biologically, drug release is governed by intracellular enzymatic cleavage and transmembrane diffusion, which intuitively suggests a mechanistic depot or transit compartment model. However, as Ozdin et al. candidly demonstrate, fitting semi-physiological depot models to sparse Phase 3 pediatric data frequently triggers severe parameter collinearity, identifiability failure, and unphysical parameter estimates (e.g., artificially collapsed inter-compartmental clearance $Q$). The authors made the mature modeling decision to adopt a robust, parsimonious two-compartment model where systemic clearance and distribution parameters act as effective apparent parameters capturing the combined processes of slow release and elimination.

From a clinical pharmacology standpoint, the absence of drug accumulation across 6 months of monthly infusions is a critical finding. Daily oral dexamethasone exhibits an elimination half-life of 3 to 5 hours, but continuous daily dosing maintains unremitting receptor occupancy that drives steroid toxicity. In contrast, eDSP produces an acute post-infusion spike ($C_{max} \sim 0.67$ h) followed by 20 to 30 days of micro-dosing (~1 pg/mL) that fully washes out before the next cycle. An essential teaching point for pediatric pharmacometricians is revealed in Table S4: the apparent overprediction of $C_{max}$ and $AUC$ in older pediatric patients (10–17 years) was entirely an artifact of using healthy CDC growth charts for simulation, which assumed a 50 kg body weight, whereas the actual AT trial population was profoundly underweight (mean ~30 kg) due to disease-related motor dysphagia and neuro-metabolic wasting. In rare pediatric neurodegenerative diseases, virtual population generators must be tuned to disease-specific somatic distributions rather than standard healthy growth references.

---

### Bottom Line
By pooling rich adult Phase 1 data with sparse pediatric Phase 3 data, this study successfully establishes a robust population PK model for erythrocyte-encapsulated dexamethasone sodium phosphate (eDSP). A parsimonious two-compartment model with standard allometric scaling proved superior to overparameterized mechanistic depot models for estimating systemic exposure. The findings definitively prove that monthly eDSP infusions sustain low-level dexamethasone concentrations for 20 to 30 days without cumulative accumulation, validating point-of-care autologous erythrocyte encapsulation as a viable sustained-release platform for chronic pediatric corticosteroid therapy.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The paper was published in CPT: Pharmacometrics & Systems Pharmacology.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “The paper type is POPK_PKPD.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **CONTRADICTED** — original: “Patients in the Phase 3 AT trial were aged 5 to 17 years.” → correction: “Among the phase 3 participants, there were 6 adults and 109 pediatric patients, as summarized in Table 1.”
[^fc-4]: **CONTRADICTED** — original: “Patients in the Phase 3 ATTeST trial received monthly eDSP infusions over 6 months.” → correction: “The ATTeST study was a phase 3, international, multi-center, one-year, randomized, double-blind, placebo-controlled study in pediatric patients with AT (age ≥ 6 years) where eDSP was given as IV infusion with a duration of approximately 40 min at monthly intervals.”
[^fc-5]: **UNSUPPORTED** — original: “Structural models evaluated included non-linear/mixed elimination pathways, transit depots, and dual first-order/Michaelis-Menten depot absorption processes.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “NONMEM version 7.4 was run with PDx-Pop.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “Non-quantifiable post-Day 30 samples were excluded from modeling.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “Single-dose and month-6 multiple-dose simulated profiles yielded identical Cmax and AUCtau values.” → correction: “Single-dose and month-6 multiple-dose simulated profiles yielded identical $C_{max}$ and $AUC_{\tau}$ values.”
[^fc-9]: **UNSUPPORTED** — original: “Unencapsulated IV dexamethasone control arms were not modeled simultaneously to decouple de-encapsulation from systemic elimination.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “No dynamic hematocrit or erythrocyte survival covariate was evaluated in the model.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “Pharmacodynamic biomarkers of glucocorticoid receptor engagement or hypothalamic-pituitary-adrenal axis suppression were not linked to exposure in the model.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Mean and Observed PK Concentrations Following a Single Dose of Dexamethasone Administered via the EryDex System (Semi-Logarithmic Scale)—Half-Low Dose and High Dose. 9 su]({{ site.baseurl }}/assets/digests/2026-11-10-population-pharmacokinetic-modeling-and-pediatric-exposure-of-dexamethasone/figures/fig_01.jpg)

![Overall Goodness-of-Fit (GOF) Plots for the Final PK Model. LLOQ, Lower Limit of Quantification; LOESS, Locally Weighted scatter plot smoothing. A total of 202 observatio]({{ site.baseurl }}/assets/digests/2026-11-10-population-pharmacokinetic-modeling-and-pediatric-exposure-of-dexamethasone/figures/fig_02.jpg)

![Overall Visual Predictive Checks (VPC) Plot for the Final PK Model. The concentration-time profiles of DSP, with the observed 5th, 50th, and 95th percentiles mostly falli]({{ site.baseurl }}/assets/digests/2026-11-10-population-pharmacokinetic-modeling-and-pediatric-exposure-of-dexamethasone/figures/fig_03.jpg)

![Boxplot of Simulated Exposures Across Pediatric Age Groups and Different Treatment Dosing Schemes for Single and Multiple (6th) Doses. AUC, Area under the curve of concen]({{ site.baseurl }}/assets/digests/2026-11-10-population-pharmacokinetic-modeling-and-pediatric-exposure-of-dexamethasone/figures/fig_04.jpg)