---
layout: post
title: "Model-Informed First-In-Human Dose Selection for AZD2796, a High-Affinity Anti-LILRB2 Antibody."
date: 2026-11-11
authors: "Mark Penney, Sofia Ferreira, Karla Maloveste, Steven Eck, Amanda Watkins, Georgina Bowyer, Massimiliano Mellone, Adam Hey, Nelson Liu, Fernanda Arnaldez, Des Jones"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70375"
paper_type: popk
tags: [popk, clinical-trial-design]
excerpt_text: "This study demonstrates how quantitative systems PK-RO modeling using a surrogate antibody in non-human primates can circumvent species cross-reactivity barriers to establish a clinically meaningful first-in-human starting dose. For the picomolar-affinity anti-LILRB2 antibody AZD2796, the model justified a starting dose of 30 mg Q3W (rather than an uninformative sub-milligram MABEL dose) and projected a target efficacious dose of 300 mg Q3W."
pdf_path: "/assets/digests/2026-11-11-model-informed-first-in-human-dose-selection-for-azd2796-a-high-affinity-anti/PMx_ModelInformed_FirstInHuman_Dose_Selectio_20261111.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study demonstrates how quantitative systems PK-RO modeling using a surrogate antibody in non-human primates can circumvent species cross-reactivity barriers to establish a clinically meaningful first-in-human starting dose. For the picomolar-affinity anti-LILRB2 antibody AZD2796, the model justified a starting dose of 30 mg Q3W (rather than an uninformative sub-milligram MABEL dose) and projected a target efficacious dose of 300 mg Q3W.

---

### Executive Summary
Selecting first-in-human (FIH) starting doses for high-affinity immuno-oncology monoclonal antibodies that lack cross-reactivity with standard preclinical toxicology species poses a major clinical pharmacology dilemma. Classical minimum anticipated biological effect level (MABEL) approaches based strictly on in vitro affinity often yield microdose starting levels that expose oncology patients to sub-therapeutic, uninformative cohorts through protracted escalations. Penney and colleagues developed a mechanistic model-informed drug development (MIDD) framework integrating linear baseline pharmacokinetics of AZD2796 in cynomolgus monkeys with non-linear target-mediated drug disposition (TMDD) parameters estimated from a cynomolgus-reactive surrogate antibody (S208). An alternative approach using hFcRn (Tg32) and human LILRB2-transgenic mouse models was systematically evaluated but demonstrated lower fidelity. The NHP surrogate PK-RO model successfully predicted the clinical PK and receptor occupancy (RO) profiles of three external anti-LILRB2 clinical competitors (MK-4830, JTX-064, and IO-108), validating the platform. This mechanistic framework supported a biologically active 30 mg Q3W starting dose and established 300 mg Q3W as the saturating efficacious dose, illustrating a robust translational paradigm aligned with FDA Project Optimus.

---

### Scientific Context & Motivation
Targeting leukocyte immunoglobulin-like receptor subfamily B member 2 (LILRB2/ILT4) on myeloid cells and tumor-associated macrophages (TAMs) relieves immunosuppression in the tumor microenvironment to augment T-cell checkpoint inhibition. AZD2796 is an engineered human IgG1 triple-mutant (TM; L238F/L239E/P335S) antibody possessing ultra-high affinity ($K_d = 5.4$ pM) for human LILRB2 but zero cross-reactivity to rodent or cynomolgus monkey orthologs. Under standard regulatory expectations, lack of cross-reactivity precludes formal GLP toxicology species evaluations, typically forcing teams into conservative MABEL calculations based on receptor affinity. For AZD2796, standard MABEL calculations would have dictated starting doses ~1000-fold below pharmacological relevance, ignoring target sink capacity. Given high baseline LILRB2 abundance across peripheral myeloid cells (monocytes, neutrophils) and TAMs, substantial TMDD occurs at low exposures. The scientific challenge was to establish a quantitative, translational PK-RO framework capable of estimating target burden and internalization kinetics in vivo using surrogate biology or humanized transgenic systems, enabling a pharmacologically active, safe FIH dose and rational clinical dose range definition in accordance with modern MIDD paradigms.

---

## ⚡ Methodological Snapshot
The translational strategy evaluated two distinct non-clinical pipelines: (1) an NHP-based surrogate pipeline combining single- and repeat-dose AZD2796 PK in cynomolgus monkeys (to quantify non-saturable FcRn-mediated clearance and distribution) with single-dose PK of S208, a cynomolgus-reactive anti-LILRB2 surrogate antibody dosed at 0.03, 0.3, and 3 mg/kg IV (to quantify in vivo target capacity $R_0$ and degradation rate $k_{deg}$); and (2) a transgenic mouse pipeline evaluating AZD2796 linear PK in hFcRn-transgenic Tg32 mice alongside dose-ranging PK of surrogate antibodies LILRB0507 (5.4 pM) and LILRB0016 (16.7 nM) in hLILRB2 knock-in mice bearing MCA205 tumors. Non-linear mixed-effects and population PK modeling were applied, evaluating 1- and 2-compartment structural disposition coupled with either empirical Michaelis-Menten elimination or full target-mediated drug disposition (TMDD) systems assuming equal degradation and internalization rates.

Preclinical parameters were translated to humans using allometric scaling for linear systemic clearance ($CL$, exponent $0.85$) and volume ($V_c$, body weight proportional), while target-mediated parameters ($R_0$, $k_{deg}$) were translated unscaled. AZD2796 in vitro human affinity (5.4 pM) was directly parameterized. The operational models were externally validated against published clinical PK and peripheral RO data from competitor LILRB2 antibodies (MK-4830, JTX-064, IO-108). Finally, human population simulations ($n = 1000$) incorporating variability in clearance, distribution, baseline white blood cell (WBC) counts (low, normal, high), and tumor partition coefficients ($H = 0.5$ for accessible, $H = 0.05$ for poorly accessible tumors) were conducted to select the FIH starting dose and target therapeutic range.

---

## 🏗️ Structural Model Breakdown
The primary clinical translation model is a two-compartment structural PK model coupled with a mechanistic quasi-equilibrium/full TMDD system. Total AZD2796 clearance comprises linear systemic clearance ($CL$) and saturable target-mediated clearance via binding to free LILRB2 receptor ($R$). Linear human clearance was scaled from cynomolgus monkeys using allometric body-weight scaling ($CL_{\text{human}} = 0.136$ L/day for $60$ kg; $V_c = 0.0439$ L/kg, $V_p$ = peripheral volume, $Q$ = inter-compartmental clearance). TMDD parameters estimated from the cynomolgus S208 surrogate study were: target expression concentration $R_0 = 19.6$ nM (scaled across WBC sub-populations as $R_0/4$ for low WBC and $R_0 \times 2$ for high/infected WBC) and receptor elimination rate constant $k_{deg} = 0.160$ $day^{-1}$. In vitro equilibrium dissociation constant $K_d$ was set to $0.0054$ nM ($5.4$ pM) for AZD2796. Receptor internalization and degradation rates were parameterized as equal based on in vitro monocyte surface stability assays. Tumor penetration was implemented via a fixed equilibrium partition coefficient $H$, evaluating accessible ($H = 0.5$) versus restricted ($H = 0.05$) tumor compartments. Receptor occupancy was calculated continuously as $RO = C_{\text{tissue}} / (K_d + C_{\text{tissue}})$.

---

### Detailed Methodological Analysis

#### Modeling Approach
Population pharmacokinetic and TMDD modeling in NONMEM / R. Model structures tested included 1- and 2-compartment linear models, 1- and 2-compartment Michaelis-Menten models, and full quasi-equilibrium TMDD models with explicit target synthesis, degradation, and drug-target complex disposition.

#### Data Sources
(1) Cynomolgus monkey AZD2796 IV/SC PK ($n = 3$, 10–100 mg/kg); (2) Cynomolgus monkey S208 surrogate single IV doses (0.03, 0.3, 3 mg/kg; $n = 3$/group); (3) Human FcRn Tg32 mice AZD2796 IV PK (0.1, 1, 10 mg/kg; $n = 6$/group); (4) hLILRB2 transgenic MCA205 tumor-bearing mice receiving murine surrogates LILRB0507 or LILRB0016 (0.3, 3, 10 mg/kg; $n = 3\text{--}12$/group); (5) Digitized clinical PK/RO data from competitor trials of MK-4830, JTX-064, and IO-108.

#### Estimation Methods
First-Order Conditional Estimation with Interaction (FOCE-I) or equivalent maximum likelihood population algorithms, with model discrimination guided by objective function value (OFV), parameter condition numbers, shrinkage, and visual goodness-of-fit diagnostics.

#### Model Evaluation
Goodness-of-fit plots (observed vs. individual/population predicted, conditional weighted residuals vs. time/concentration), precision of parameter estimates (relative standard errors / 90% confidence intervals), and external model validation against clinical trial data of three independent anti-LILRB2 antibodies.

#### Covariate Analysis
Covariates were evaluated mechanistically: body weight allometry on linear clearances (exponent $0.85$ from NHP, $0.75$ from mouse) and volumes; target burden ($R_0$) stratified by clinical disease state and white blood cell (WBC) count (low WBC = $0.25\times$ baseline, healthy = $1.0\times$, high WBC/TAM burden = $2.0\times$); and tumor vascular accessibility (partition coefficient $H = 0.05$ to $0.5$).

---

### Statistical Rigor Assessment
The investigators maintained high statistical discipline by evaluating objective function value drops, condition numbers, and parameter shrinkage across nested models. Importantly, the authors did not force a complex model when data were insufficient: in cynomolgus monkey AZD2796 PK, a 2-compartment model collapsed (unstable $V_p$ or $CL$ estimates), leading to selection of a robust 1-compartment structure. In transgenic mouse modeling, the inability to reliably estimate $K_m$ and linear clearance was transparently acknowledged and shown to lead to poor external predictive validity.

---

## 📊 Key Findings
The cynomolgus surrogate modeling framework revealed marked TMDD for anti-LILRB2 antibodies that overrides standard IgG1 linear disposition at low concentrations: target burden ($R_0$) was $19.6$ nM and $k_{deg}$ was $0.160$ $day^{-1}$. At healthy WBC counts, doses below 100 mg Q3W demonstrated rapid non-linear clearance collapse. In oncology patients with low baseline WBC (the most vulnerable scenario for high drug exposure due to minimal target sink), 30 mg IV Q3W was identified as the minimum dose maintaining $\ge 95\%$ peripheral LILRB2 receptor occupancy across the 21-day dosing interval. To ensure saturating $> 95\%$ receptor occupancy in the tumor compartment under challenging conditions (high myeloid target sink and poor 5% tumor penetration), a dose of approximately 300 mg Q3W was required. The transgenic mouse approach over-predicted TMDD magnitude and clinical dose requirements (predicting 300 mg starting dose and 1000 mg efficacious dose), largely driven by artifacts in empirical Michaelis-Menten parameter scaling.

---

## 💡 Clinical & Regulatory Implications
The modeling directly supported regulatory filing and Phase 1 trial execution for AZD2796: establishing 30 mg Q3W IV as a safe, biologically informative starting dose (avoiding hundreds of uninformative microdose patient-months) and defining 100–300 mg Q3W as the saturating dose range for anti-tumor efficacy, perfectly fulfilling FDA Project Optimus guidelines on dose optimization.

---

### Strengths & Limitations

#### Strengths
- Rigorous integration of surrogate antibody TMDD biology to overcome complete lack of preclinical cross-reactivity for a therapeutic candidate
- Systematic side-by-side comparison of non-human primate surrogate modeling versus humanized transgenic mouse platforms
- Robust external validation against published clinical PK and receptor occupancy datasets from three independent anti-LILRB2 development programs (MK-4830, JTX-064, IO-108)
- Pragmatic translation directly informing both starting dose safety and Project Optimus-aligned recommended phase 2 dose (RP2D) ranges

#### Limitations (Acknowledged by Authors)
- AZD2796 does not bind non-human primate or rodent LILRB2, necessitating reliance on surrogate antibodies (S208, LILRB0507, LILRB0016)
- Transgenic mouse models displayed unstable parameter estimation, with unbounded confidence intervals on $K_m$ and unphysiologically low linear clearance
- Tumor exposure modeling relies on assumed fixed partition coefficients (5% and 50%) rather than direct intratumoral pharmacokinetic measurements

#### Limitations (Expert Review)
- Peripheral blood cell LILRB2 expression was assumed invariant to treatment; potential pharmacodynamic feedback or receptor shedding/upregulation during chronic dosing was not dynamic in the model
- The assumption of identical internalization and baseline target degradation rates ($k_{int} = k_{deg}$), while supported by monocyte assays, simplifies complex endocytic sorting dynamics
- Inter-individual variability was simulated from assumed coefficients of variation (30%) rather than fully estimated population covariance structures from clinical data

#### Generalizability
The methodology is highly generalizable across biotherapeutic drug development, providing an actionable roadmap for any high-affinity monoclonal antibody, bispecific, or antibody-drug conjugate directed against human-specific targets lacking cross-reactive toxicology species.

---

### Key Equations

**Allometric Scaling of Preclinical Parameters**

{% raw %}
$$
P_{\text{human}} = P_{\text{preclinicalspecies}} \times {\left(\frac{BW_{\text{human}}}{BW_{\text{preclinicalspecies}}}\right)}^b
$$
{% endraw %}

General allometric scaling power equation used to extrapolate pharmacokinetic parameters (clearance and volume) from animal species to human, where $b$ is the allometric exponent ($0.85$ for linear clearance from monkey, $0.75$ for clearance/$V_{max}$ from mouse, and $1.0$ for volumes).

**Human Linear Clearance Scaling from Cynomolgus Monkey**

{% raw %}
$$
CL_{\text{human}} = CL_{\text{cyno}} \times {\left(\frac{BW_{\text{human}}}{BW_{\text{cyno}}}\right)}^{0.85}
$$
{% endraw %}

Specific allometric scaling equation used to scale AZD2796 non-saturable clearance from cynomolgus monkey (0.00789 L/day at 2.1 kg) to human (0.136 L/day at 60 kg) with an empirical exponent of $0.85$.

**Receptor Occupancy Model**

{% raw %}
$$
RO = \frac{C_{\text{tissue}}}{K_d + C_{\text{tissue}}}
$$
{% endraw %}

Equilibrium receptor occupancy equation defining the fraction of LILRB2 bound by AZD2796 in peripheral blood or tumor tissue as a function of local antibody concentration and dissociation constant $K_d$ ($5.4$ pM).

---

### Figures & Tables

- **Table 1**: Summary of anti-LILRB2 antibodies used in preclinical studies, detailing their antibody formats and binding affinities ($K_D$) to human and cynomolgus monkey LILRB2.
  - *Significance*: Demonstrates the binding diversity among molecules, confirming that AZD2796 and LILRB0507 possess 5.4 pM affinity to human target but zero cynomolgus binding, whereas S208 provides a 300 pM surrogate tool in cynomolgus monkeys.
- **Table 2**: Estimated population PK parameters and human-scaled values for the Michaelis-Menten models of LILRB0507 and LILRB0016 derived from MCA205 tumor-bearing hLILRB2 transgenic mice.
  - *Significance*: Highlights the statistical instability of parameter estimates in transgenic mice (e.g., $K_m$ 90% CI spanning 0 to infinity for LILRB0507 and non-physiological terminal half-life of 43 days).
- **Table 3**: Preclinical estimated parameter values from cynomolgus monkey studies versus scaled human parameter values for AZD2796.
  - *Significance*: Presents the final translational model parameter set: scaled $CL$ of $0.136$ L/day, $V_c$ of $0.0439$ L/kg, target concentration $R_0$ of $19.6$ nM, $k_{deg}$ of $0.160$ $day^{-1}$, and $K_d$ of $0.0054$ nM.
- **Figure 1**: Simulated population-mean serum PK and 90% prediction intervals of LILRB2 receptor occupancy across 10, 30, 100, and 300 mg Q3W doses scaled from the cynomolgus monkey PK-RO model.
  - *Significance*: Primary study figure demonstrating that 30 mg Q3W maintains saturating peripheral RO in low WBC patients, while 300 mg Q3W guarantees $> 95\%$ tumor RO even under 5% tumor penetration and high target burden.
- **Figure 2**: Simulated serum PK and LILRB2 receptor occupancy profiles for AZD2796 scaled from the hFcRn Tg32 and hLILRB2 transgenic mouse data.
  - *Significance*: Shows that the transgenic mouse approach over-predicted TMDD impact, showing premature loss of peripheral saturation and projecting higher dose requirements (300 mg starting dose, 1000 mg efficacious dose).

---

### Code & Reproducibility Assessment
Modeling software NONMEM and R were utilized; however, model control streams, datasets, and simulation scripts were not made publicly available in a repository. Equations and final parameter values are documented within the text and supplementary materials.

---

### Supplementary Materials
Two supplementary files are provided: psp470375-sup-0001-supinfo.pdf contains extensive methodological descriptions, dosing schedules (Table S1), individual PK profiles in cynomolgus monkeys and mice (Figures S1-S4), goodness-of-fit diagnostic plots (Figure S5), run records for tested structural models (Tables S2-S6), and model validation simulations against external clinical trial data for competitor antibodies MK-4830, JTX-064, and IO-108 (Figures S10-S14). File psp470375-sup-0002-supplementary material.docx contains extended bioanalytical assay qualification protocols and ELISA performance parameters.

---

### Future Directions
Validation of the model-projected 30 mg starting dose and 300 mg saturating dose using emerging Phase 1 clinical PK, peripheral RO, and paired tumor biopsy data from AZD2796-treated patients. Further refinement of humanized transgenic mouse systems to optimize sampling schedules and dosing matrices for improved preclinical non-NHP antibody profiling.

---

### Expert Commentary
This paper addresses one of the most frustrating bottlenecks in translational immuno-oncology: how to advance picomolar-affinity therapeutics into human trials without wasting years and risking patient exposure in uninformative sub-nanomolar dose escalation cohorts. Under historical ICH S9 and EMA guidelines, an in vitro MABEL calculation for a 5.4 pM antibody lacking animal cross-reactivity would have forced a starting dose in the tens to hundreds of micrograms. Penney et al. showcase the mature power of Model-Informed Drug Development (MIDD). By partitioning the problem into linear clearance (FcRn-driven, captured by AZD2796 in wild-type cynos) and target sink dynamics (captured by S208 in cynos), they built a translational model that matches clinical reality across multiple competitor antibodies. Furthermore, their critical evaluation of transgenic mice is an invaluable teaching moment: empirical Michaelis-Menten approximations failed miserably when scaled, whereas full mechanistic TMDD scaling proved robust. Pharmacometricians should cite this paper when negotiating FIH starting doses with regulatory agencies.

---

### Bottom Line
When biotherapeutics lack cross-reactivity in standard non-clinical species, mechanistic PK-RO modeling using a non-human primate surrogate antibody can accurately quantify target-mediated disposition, successfully replacing arbitrary MABEL microdosing with a biologically active, safe FIH starting dose and defining a rational therapeutic window.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The study was published in CPT: Pharmacometrics & Systems Pharmacology.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **CONTRADICTED** — original: “The primary clinical translation model for AZD2796 is a two-compartment structural PK model coupled with a mechanistic quasi-equilibrium/full TMDD system.” → correction: “A one-compartment PK model with variability on $CL$ was chosen as the final model: it has the best objective function value for parameters estimated, reasonable goodness-of-fit plots, and precise parameter estimates. The residual plots (not shown) hint that the PK may be biphasic—as might be expected for an IgG1 antibody—and might admit a two-compartment PK model. However, all attempts to fit a two-compartment model did not result in a better model fit: although these models converged, either the $CL$ estimate was a very small value or the $V_p$ estimate was a very high value, effectively collapsing the model to a one-compartment model.”
[^fc-3]: **UNSUPPORTED** — original: “Receptor occupancy was calculated as $RO = C_{\text{tissue}} / (K_d + C_{\text{tissue}}).”$ → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “Population PK and TMDD modeling was conducted using NONMEM and R software.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “Model parameters were estimated using First-Order Conditional Estimation with Interaction (FOCE-I) or equivalent maximum likelihood population algorithms.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **CONTRADICTED** — original: “Linear clearance from mouse models was allometrically scaled using an exponent of 0.75.” → correction: “For the model projecting the PK of LILRB016, the PK parameters in the mouse were well estimated and were applied, scaling according to Avery [11]. Models describing the PK using a Michaelis–Menten formulation were scaled by applying an exponent of $0.75$ for $V_{max}$, and $K_m$ was applied unscaled [12].”
[^fc-7]: **CONTRADICTED** — original: “At healthy WBC counts, AZD2796 doses below 100 mg Q3W demonstrated rapid non-linear clearance collapse.” → correction: “TMDD is apparent in the 10 and 30 mg dose PK and PK exposure at the 100 mg and higher doses is dose-proportional.”
[^fc-8]: **UNSUPPORTED** — original: “Model control streams, raw datasets, and simulation scripts were not made publicly available in a repository.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Population-mean serum PK and LILRB2 receptor occupancy 90% prediction intervals from the scaled human PK-RO model for AZD2796. (A) Population-mean serum PK. (B) Periphera]({{ site.baseurl }}/assets/digests/2026-11-11-model-informed-first-in-human-dose-selection-for-azd2796-a-high-affinity-anti/figures/fig_01.jpg)

![Predicted serum PK and LILRB2 receptor occupancy for AZD2796, scaled from LILRB2 transgenic mouse PK data. (A) Population-mean serum PK. (B) Peripheral LILRB2 occupancy. ]({{ site.baseurl }}/assets/digests/2026-11-11-model-informed-first-in-human-dose-selection-for-azd2796-a-high-affinity-anti/figures/fig_02.jpg)