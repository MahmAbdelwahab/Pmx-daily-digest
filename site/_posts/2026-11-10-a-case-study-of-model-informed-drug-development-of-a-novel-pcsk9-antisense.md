---
layout: post
title: "A Case Study of Model-Informed Drug Development of a Novel PCSK9 Antisense Oligonucleotide. Part 2: Phase 2 to Phase 3."
date: 2026-11-10
authors: "Jane Knöchel, Catarina Nilsson, Björn Carlsson, Alexis Hofherr, Per Johanson, Tina Rydén-Bergsten, Bengt Hamrén, Dinko Rekić"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70076"
paper_type: popk
tags: [popk, regulatory, clinical-trial-design]
excerpt_text: "This real-world MIDD case study details the transition of AZD8233, a PCSK9 antisense oligonucleotide, from Phase 2b to Phase 3, demonstrating how kinetic-pharmacodynamic (K-PD) modeling and clinical trial simulations informed Phase 3 trial design, active comparator head-to-head benchmarking, and cardiovascular outcomes trial (CVOT) risk projections. Despite the program's ultimate termination due to unexpected exposure loss in a second Phase 2b study (SOLANO), it serves as an exemplary blueprint for quantitative decision-making, drop-out sensitivity modeling, and AIC-based model averaging in late-stage drug development."
pdf_path: "/assets/digests/2026-11-10-a-case-study-of-model-informed-drug-development-of-a-novel-pcsk9-antisense/PMx_A_Case_Study_of_ModelInformed_Drug_Devel_20261110.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This real-world MIDD case study details the transition of AZD8233, a PCSK9 antisense oligonucleotide, from Phase 2b to Phase 3, demonstrating how kinetic-pharmacodynamic (K-PD) modeling and clinical trial simulations informed Phase 3 trial design, active comparator head-to-head benchmarking, and cardiovascular outcomes trial (CVOT) risk projections. Despite the program's ultimate termination due to unexpected exposure loss in a second Phase 2b study (SOLANO), it serves as an exemplary blueprint for quantitative decision-making, drop-out sensitivity modeling, and AIC-based model averaging in late-stage drug development.

---

### Executive Summary
Part 2 of the AZD8233 MIDD case study presents the translation of clinical Phase 2b biomarker data into actionable late-stage trial designs for a novel PCSK9-targeting antisense oligonucleotide. Following Phase 2b (ETESIAN) results showing up to a 79% reduction in LDL-C on high-dose statins, investigators constructed a joint PCSK9–LDL-C K-PD model to simulate pivotal Phase 3 trials under varied drop-out rates, dosing regimens, and regulatory statistical endpoints (ANCOVA at Week 16). The modeling framework was extended to design a virtual head-to-head study against inclisiran (predicting a 27% greater LDL-C lowering at Day 270) and to predict major adverse cardiovascular event (MACE) relative risk reduction using an AIC model-averaging meta-analysis (predicting a 27% RRR). Although AZD8233 development was terminated after the SOLANO study failed to hit the 70% efficacy threshold due to unexplained under-exposure, the work provides critical insights into cross-functional MIDD execution, K-PD utility when biomarker variability is lower than drug PK, and the integration of model averaging to manage structural uncertainty in clinical endpoints.

---

### Scientific Context & Motivation
Targeting PCSK9 synthesis via GalNAc-conjugated antisense oligonucleotides (ASOs) or small interfering RNAs (siRNAs) represents a potent strategy for hypercholesterolemia, achieving circulating LDL-C reductions beyond statin-alone ceilings. However, translating early Phase 2 dose-response signals into late-stage pivotal programs requires navigating critical uncertainties, including the impact of trial drop-out mechanisms, non-adherence, trial duration, regulatory analysis requirements (e.g., MMRM vs. ANCOVA on relative change from baseline), competitive differentiation against established agents (such as inclisiran), and predicting cardiovascular outcomes. This manuscript addresses the knowledge and methodological gaps in applying MIDD to late-stage cardiovascular development by demonstrating how a continuous K-PD framework and model-based meta-analysis can de-risk pivotal Phase 3 and CVOT investments, while candidly discussing the failure mode where clinical PK underperformed model predictions in a concurrent Phase 2b study.

---

## ⚡ Methodological Snapshot
The authors established a joint kinetic-pharmacodynamic (K-PD) model linking AZD8233 administration to circulating PCSK9 suppression and subsequent downstream LDL-C reduction using pooled data from the multiple ascending dose (MAD) and Phase 2b ETESIAN trials. A K-PD approach was specifically chosen over traditional PK/PD because plasma PK variability for the ASO was substantially higher than the pharmacodynamic response variability of PCSK9 and LDL-C, making direct kinetic estimation less prone to propagating PK noise.

Extensive clinical trial simulations (1000 replicates) evaluated a pivotal Phase 3 study (60 mg Q4W vs. placebo; $n = 1200$) under non-informative, completely at random (MCAR) drop-out assumptions (1% monthly hazard modeled via binomial trial events) and regulatory endpoints (ANCOVA at Week 16). For active comparator benchmarking, parameters from a published inclisiran model were reconstructed to simulate a randomized head-to-head comparison ($n = 300$ per arm). Finally, to project MACE reduction in a CVOT, a model-based meta-analysis combined historical statin and PCSK9 inhibitor trials, applying Akaike Information Criterion (AIC)-weighted model averaging across alternative structural models to account for potential statin pleiotropy and follow-up duration discrepancies.

---

## 🏗️ Structural Model Breakdown
The pharmacodynamic core comprises a semi-mechanistic K-PD structure linking dose to an unobserved biophase/kinetic compartment (parameterized by an apparent elimination rate constant), driving $E_{max}$-type inhibition of PCSK9 synthesis or secretion. Circulating PCSK9 in turn modulates LDL-receptor clearance dynamics, yielding an indirect response model for LDL-C. Body weight was evaluated and retained as a statistically significant covariate on kinetic clearance, but was determined not to be clinically relevant across the therapeutic dose range.

For the cardiovascular outcome projections, meta-regression models linked baseline LDL-C, absolute/relative LDL-C lowering, and trial duration to log relative risk (RR). The structural model space encompassed linear and log-linear relationships with and without differential intercept/slope terms for PCSK9 inhibitors vs. statins. These candidate models were integrated using an information-theoretic model-averaging scheme where individual model weights were assigned based on relative AIC differences.

---

### Detailed Methodological Analysis

#### Modeling Approach
K-PD modeling was implemented to describe AZD8233 effects on both PCSK9 and LDL-C simultaneously. Clinical trial simulations incorporated inter-individual variability, empirical Bayes estimates (EBEs), binomial drop-out processes, and regulatory-aligned ANCOVA statistical models. A model-based meta-analysis utilizing AIC model averaging was implemented for CVOT hazard projection.

#### Data Sources
Multiple ascending dose (Phase 1) and Phase 2b (ETESIAN, evaluating 15, 50, and 90 mg doses) trial data in hypercholesterolemic patients on high-dose statin therapy. Literature-extracted data for inclisiran (ORION program poster parameters) and historical CVOT datasets (Silverman et al. meta-analysis expanded with FOURIER and ODYSSEY OUTCOMES).

#### Estimation Methods
Nonlinear mixed-effects modeling for the K-PD models; weighted least-squares / maximum likelihood meta-regression for cardiovascular event hazard modeling; AIC-based model weighting for multi-model ensemble averaging.

#### Model Evaluation
Simulation-based diagnostics, visual predictive checks (VPCs), confidence interval profiling for predicted vs. observed Phase 2b outcomes (ETESIAN 50 mg predicted −69.4% vs. observed −72%), and parameter sensitivity checks across drop-out rates and baseline LDL-C subgroups.

#### Covariate Analysis
Baseline LDL-C strata were analyzed via EBE-driven subgroup simulations, confirming that relative (%) LDL-C reduction was invariant to baseline LDL-C. Body weight was identified as a covariate on kinetics but deemed not clinically meaningful to justify weight-tiered dosing.

---

### Statistical Rigor Assessment
The clinical trial simulations exhibited rigorous design considerations, including explicit simulation of non-informative patient drop-out (1% monthly cumulative binomial discontinuation) based on historical dyslipidemia trial benchmarks. The investigators directly reconciled differences in endpoint derivation, evaluating mixed models for repeated measures (MMRM) on log-transformed changes versus ANCOVA of percent change from baseline at designated regulatory landmark times (Week 12 and Week 16). Model averaging via AIC weights appropriately prevented overconfidence from single-model cardiovascular meta-regressions, which yielded relative risk reductions ranging widely from 24% to 49% when analyzed in isolation.

---

## 📊 Key Findings
The Phase 2b ETESIAN study confirmed model predictions from Phase 1, demonstrating an observed LDL-C reduction of −72% (95% CI: −78%, −65%) at 50 mg versus the prior model-predicted −69.4% (95% CI: −72.4%, −66.3%). For pivotal Phase 3, simulating 60 mg Q4W with a 1% monthly drop-out predicted a sustained −69% LDL-C reduction at Week 16 (Figure 2). A virtual head-to-head trial against inclisiran (300 mg Q6M) predicted that AZD8233 60 mg Q4W would provide an additional 27% LDL-C reduction at Day 270 (Figure 3). In CVOT predictions, individual meta-regression models yielded MACE relative risk reductions between 24% and 49%, while the AIC model-averaged ensemble estimated a 27% RRR (assuming a 63% LDL-C reduction from 130 mg/dL baseline; Figure 4). Ultimately, AZD8233 development was discontinued after the SOLANO safety/efficacy study showed unexpected exposure loss that failed to achieve the pre-specified 70% LDL-C reduction threshold.

---

## 💡 Clinical & Regulatory Implications
The modeling supported selection of 60 mg Q4W as the Phase 3 regimen, providing a safety and exposure buffer to guarantee >90% PCSK9 suppression and ~70% LDL-C lowering across dosing intervals. It demonstrated that weight-based dose adjustments were unwarranted and that relative LDL-C lowering was independent of baseline LDL-C. For regulatory alignment, the simulation highlighted the sensitivity of endpoint estimates to trial attrition and statistical models (ANCOVA vs. MMRM) at Week 16 versus Week 12. Importantly, the unexpected failure of SOLANO illustrates a critical clinical pharmacology lesson: unexplained shifts in bioavailability, immunogenicity, or formulation/administration factors can undermine well-calibrated PD models if PK mechanisms are not concurrently captured or adequately monitored.

---

### Strengths & Limitations

#### Strengths
- Seamless progression and iterative updating of the MIDD framework from SAD/MAD through Phase 2b and Phase 3 planning.
- Pragmatic application of K-PD modeling to decouple target biomarker dynamics from high plasma PK noise.
- Thorough incorporation of dropout mechanisms (binomial 1% monthly attrition) and regulatory-standard statistical estimators (ANCOVA) in clinical trial simulations.
- Pioneering use of AIC model averaging in CVOT projection to prevent structural bias from competing cardiovascular risk models.

#### Limitations (Acknowledged by Authors)
- AZD8233 was terminated due to an unexplained, substantial decrease in exposure in the SOLANO Phase 2b study that was overpredicted by earlier PopPK models.
- Head-to-head simulations against inclisiran relied on digitized parameters from a conference poster without access to underlying individual patient data or full covariance structures.
- MACE predictions were limited by relatively short durations and potential pleiotropic statin effects in historical meta-analysis comparator trials.

#### Limitations (Expert Review)
- The decision to model PK and PD separately via K-PD, while methodologically pragmatic, may have hindered early detection of formulation- or absorption-related exposure shifts in the clinical pipeline.
- Drop-out was modeled exclusively as non-informative (missing completely at random); informative drop-out due to injection-site reactions or adverse events was not explored.
- Mechanistic drivers for the massive exposure loss in SOLANO (e.g., anti-drug antibodies, target-mediated clearance shifts, product quality/aggregation, or subcutaneous administration depth) remain unresolved in the publication.

#### Generalizability
The structural K-PD modeling and clinical trial simulation strategies are highly generalizable to other antisense oligonucleotide and siRNA therapies targeting hepatic synthesis pathways (e.g., PCSK9, ANGPTL3, LPA). The model-averaging approach for outcome trials provides a universal framework for MIDD programs navigating disparate meta-analytic literature.

---

### Key Equations

**AIC-Based Model Weighting**

{% raw %}
$$
w_i = \frac{\exp\left(-0.5 \cdot \text{AIC}_i\right)}{\sum_j \exp\left(-0.5 \cdot \text{AIC}_j\right)}
$$
{% endraw %}

Akaike Information Criterion (AIC) model weight formulation used to average predicted cardiovascular relative risk reductions across competing meta-regression models.

---

### Figures & Tables

- **Figure 1**: Schematic of the early clinical to late clinical development program outlining the progression from SAD/MAD, ETESIAN, and SOLANO to the planned Phase 3 pivotal, head-to-head, and CVOT studies.
  - *Significance*: Illustrates the end-to-end MIDD framework showing where specific modeling activities impacted stage-gate decisions and Phase 3 designs.
- **Figure 2**: Clinical trial simulation of the pivotal Phase 3 study comparing AZD8233 60 mg Q4W vs. placebo ($n = 1200$) with a 1% monthly drop-out rate across time.
  - *Significance*: Demonstrates fast, sustained LDL-C lowering reaching −69% at the Week 16 regulatory landmark endpoint, confirming Phase 3 statistical power.
- **Figure 3**: Simulated head-to-head comparison between AZD8233 60 mg Q4W and inclisiran 300 mg Q6M ($n = 300$ per arm across 1000 trials), illustrating trajectory over time (A) and LDL-C reduction distribution at Day 270 (B).
  - *Significance*: Quantifies competitive differentiation, predicting an additional 27% LDL-C reduction for AZD8233 over inclisiran at Day 270.
- **Figure 4**: Predicted relative risk reduction for MACE across completed cardiovascular trials versus the model-averaged prediction for AZD8233.
  - *Significance*: Demonstrates the application of AIC model averaging across divergent meta-analytic models, projecting a 27% MACE relative risk reduction.

---

### Code & Reproducibility Assessment
Code and modeling files are not publicly deposited. The manuscript mentions that model parameters were extracted from literature and internal non-public AstraZeneca databases, precluding direct computational reproducibility.

---

### Supplementary Materials
Supporting Information (psp470076-sup-0001-supinfo.docx) contains detailed subgroup analyses of LDL-C reduction stratified by baseline LDL-C levels, ETESIAN Phase 2b dose-response profiles (Figure S1), body weight covariate assessments on K-PD parameters (Figure S6), and tabulated meta-analysis trial characteristics for cardiovascular risk regressions (Figure S8).

---

### Future Directions
Future investigations should focus on elucidating the root causes of exposure loss observed in the SOLANO trial, evaluating potential immunogenicity, injection-site tissue interactions, or stability differences in GalNAc-conjugated ASOs. In addition, head-to-head simulations should be updated utilizing recently published full clinical trial models of inclisiran to refine competitive differentiation benchmarks.

---

### Expert Commentary
This publication is a masterclass in the operational and strategic reality of MIDD. Too often, pharmacometric literature focuses exclusively on successful drug approvals, creating a survivor bias that hides how modeling interacts with unexpected biological or clinical failure modes. The team's decision to adopt a K-PD strategy was technically sound given the high pharmacokinetic noise and deep liver target engagement typical of GalNAc oligonucleotides, where plasma PK is merely a surrogate for rapid hepatic uptake. However, this case study also serves as a cautionary tale: when clinical drug exposure unexpectedly uncouples from historical models—as observed in SOLANO—a K-PD framework cannot rescue an unpredicted loss of systemic delivery. Methodologically, the paper’s adoption of AIC model averaging for CVOT projection is an exceptional example of quantitative risk mitigation that every senior pharmacometrician should adopt when advising commercial and clinical leadership on multi-million dollar outcomes trials.

---

### Bottom Line
A premier case study illustrating how K-PD modeling, dropout-informed clinical trial simulations, and AIC model averaging can systematically guide Phase 3 trial architecture and active-comparator differentiation, while emphasizing that robust clinical exposure monitoring remains indispensable to guard against unexpected late-stage PK attrition.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “Clinical trial simulations of the pivotal Phase 3 study were conducted using 1000 replicates.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **CONTRADICTED** — original: “Inclisiran model parameters for the head-to-head simulation were reconstructed from published literature and conference poster data from the ORION program.” → correction: “The only information available at the time was a conference poster presenting a structurally similar model to our phase 2b PCSK9-LDL-C model [9]. To perform the simulations, we decided to extract the model parameters from the conference poster given that model files or complete outputs were unavailable to us.”
[^fc-3]: **UNSUPPORTED** — original: “The historical CVOT dataset was based on the Silverman et al. meta-analysis expanded with data from the FOURIER and ODYSSEY OUTCOMES trials.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “Nonlinear mixed-effects modeling was used to estimate the K-PD models.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “Weighted least-squares or maximum likelihood meta-regression was used for cardiovascular event hazard modeling.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “Simulations evaluated mixed models for repeated measures (MMRM) on log-transformed changes versus ANCOVA of percent change from baseline at Week 12 and Week 16.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **NUMERIC_MISMATCH** — original: “The 60 mg Q4W regimen was selected to ensure greater than 90% PCSK9 suppression across dosing intervals.” → correction: “A dosing frequency of once every 4 weeks (Q4W) was selected based on the K-PD model to ensure 90% PCSK9 and 70% LDL-C reduction throughout the dosing interval.”
[^fc-8]: **UNSUPPORTED** — original: “The modeling demonstrated that weight-tiered dosing was unwarranted for AZD8233.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “Simulations against inclisiran relied on digitized parameters from a conference poster without access to individual patient data or full covariance structures.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “Patient drop-out was modeled exclusively as missing completely at random (MCAR), without exploring informative drop-out due to adverse events or injection-site reactions.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “Code and modeling files for the AZD8233 MIDD case study were not publicly deposited.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “Model parameters were derived from literature and internal non-public AstraZeneca databases.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Early clinical program and late clinical program. CVOT, cardiovascular outcome trial; FDA, Food and Drug Administration; H2H, head-to-head; LDL-C, low-density lipoprotein]({{ site.baseurl }}/assets/digests/2026-11-10-a-case-study-of-model-informed-drug-development-of-a-novel-pcsk9-antisense/figures/fig_01.jpg)

![Clinical trial simulation of pivotal phase 3 study (AZD8233 60 mg Q4W vs. placebo,n= 1200) with drop-out rate of 1% per month. Error bars represent 95% CIs. CI, confidenc]({{ site.baseurl }}/assets/digests/2026-11-10-a-case-study-of-model-informed-drug-development-of-a-novel-pcsk9-antisense/figures/fig_02.jpg)

![Clinical trial simulation of pivotal head-to-head study (AZD8233 60 mg Q4W versus inclisiran 300 mg Q6M,n= 300 per arm in 1000 clinical trial simulations) assuming drop-o]({{ site.baseurl }}/assets/digests/2026-11-10-a-case-study-of-model-informed-drug-development-of-a-novel-pcsk9-antisense/figures/fig_03.jpg)

![Predicted relative risk reduction for AZD8233 based on model average. Open circles represent observed relative risk outcomes for completed trials; triangles denote the pr]({{ site.baseurl }}/assets/digests/2026-11-10-a-case-study-of-model-informed-drug-development-of-a-novel-pcsk9-antisense/figures/fig_04.jpg)