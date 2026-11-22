---
layout: post
title: "Modeling and Simulation Identifies Endocytosis Uptake Rate and Fraction Unbound as Important Predictors of Oligonucleotide Pharmacokinetics."
date: 2026-11-22
authors: "Felix Stader, Abdallah Derbalah, Adriana Zyla, Cong Liu, Iain Gardner, Armin Sepp"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70108"
paper_type: popk
tags: [popk, pbpk, qsp]
excerpt_text: "A permeability-limited, 18-compartment whole-body PBPK model for therapeutic oligonucleotides (implemented in Simcyp V23) predicted plasma PK of 3 ASOs and 5 GalNAc-siRNAs within twofold. Global sensitivity analysis on an SC ASO identified the endocytosis uptake rate ($K_{up}$) and plasma fraction unbound ($f_{up}$) as dominant drivers of $C_{max}$, $t_{max}$ and $AUC$, while redistribution ($K_{re}$) and nuclease clearance mattered little. Relevant for pharmacometricians building PBPK/QSP models for oligonucleotides and deciding which in vitro assays to prioritise."
pdf_path: "/assets/digests/2026-11-22-modeling-and-simulation-identifies-endocytosis-uptake-rate-and-fraction-unbound/PMx_Modeling_and_Simulation_Identifies_Endoc_20261122.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
A permeability-limited, 18-compartment whole-body PBPK model for therapeutic oligonucleotides (implemented in Simcyp V23) predicted plasma PK of 3 ASOs and 5 GalNAc-siRNAs within twofold. Global sensitivity analysis on an SC ASO identified the endocytosis uptake rate ($K_{up}$) and plasma fraction unbound ($f_{up}$) as dominant drivers of $C_{max}$, $t_{max}$ and $AUC$, while redistribution ($K_{re}$) and nuclease clearance mattered little. Relevant for pharmacometricians building PBPK/QSP models for oligonucleotides and deciding which in vitro assays to prioritise.

---

### Executive Summary
The authors built a whole-body PBPK model for therapeutic oligonucleotides (TOs) with permeability-limited tissues (vascular, endothelial, interstitial and intracellular subcompartments), linear fluid-phase endocytosis ($K_{up}$), redistribution ($K_{re}$), nuclease clearance in every compartment, a semi-mechanistic glomerular filtration model derived from therapeutic proteins, and quasi-equilibrium binding to ASGPR and RISC for GalNAc-siRNAs. $K_{up}$ and $K_{re}$ were derived from total-tissue concentration data in mouse, rat and monkey after IV dosing of second-generation ASOs (12 studies). Model verification against clinical plasma data for mipomersen, inotersen, defibrotide, inclisiran, vutrisiran, fitusiran, cemdisiran and nedosiran showed all $C_{max}$, $t_{max}$ and $AUC$ predictions within twofold (predicted:observed ratios 0.94, 0.85 and 0.99 respectively). Sensitivity analysis for a 7500 Da SC ASO showed $K_{up}$ and $f_{up}$ were the most influential parameters (a 10-fold $K_{up}$ increase decreased $C_{max}$ 4.5-fold, $t_{max}$ 5-fold and $AUC$ 10-fold), whereas $K_{re}$ only affected $AUC$ and nuclease clearance had a negligible effect. The work provides a mechanistic framework and an explicit rationale for developing in vitro assays for cellular uptake and for plasma and intracellular unbound fraction. It also highlights parameter non-identifiability from plasma data alone.

---

### Scientific Context & Motivation
TOs (ASOs and siRNAs) show a rapid roughly 1000-fold fall in plasma concentration owing to extensive liver and kidney uptake, followed by a long terminal phase (ASO half-lives of 2-4 weeks) governed by tissue retention, nuclease stability, protein binding and delayed renal clearance. Cellular uptake (fluid-phase and receptor-mediated endocytosis, ASGPR for GalNAc conjugates), endosomal escape, target binding and recycling are poorly characterised because validated in vitro assays are lacking. Even $f_{up}$ measurement is assay-dependent, and intracellular unbound fraction and nuclease stability are largely unknown. Existing approaches rely on empirical or semi-mechanistic models; a generalisable permeability-limited PBPK platform that can identify which uncertain parameters most influence plasma PK, and therefore which assays are worth developing, was missing. The paper addresses this gap and aims to support future prediction in special populations where clinical data are sparse.

---

## ⚡ Methodological Snapshot
A whole-body permeability-limited PBPK model (18 compartments; physiology from the Simcyp healthy volunteer population) was built in Simcyp V23. Each tissue except arterial/venous pools has vascular, endothelial, interstitial and intracellular subcompartments, with protein flux via the two-pore hypothesis and lymph transport. TO cellular uptake is a linear first-order $K_{up}$ (same for bound and unbound), redistribution is $K_{re}$ (initialised from cell turnover rates), and nuclease clearance is distributed across compartments as for proteases. Renal clearance used a semi-mechanistic glomerular filtration model developed for therapeutic proteins, and GalNAc-siRNA used quasi-equilibrium binding to ASGPR ($0.823$ uM, $k_{deg}$ $0.0399$ $1/h$) and RISC (0.0372 uM, $K_D$ 0.000435 uM).

$K_{up}$ and $K_{re}$ were derived by fitting dose-normalised total tissue concentrations from 12 preclinical studies of second-generation ASOs. For clinical verification, trials were replicated (demographics, dose, regimen, n; 20 trials per study) for eight TOs; SC absorption parameters were fitted to the highest dose, and other doses served to evaluate predictions. Nuclease clearance was fixed at $2.91$ $L/h$ for all. Success was defined as $C_{max}$, $t_{max}$ and $AUC$ within twofold of observed data.

A one- and two-way sensitivity analysis was performed for a hypothetical 7500 Da SC ASO in a healthy volunteer representative by varying $K_{up}$ (0.1-10x), $K_{re}$ (0.1-100x), $f_{up}$ (0.001-1, baseline 0.1) and nuclease clearance (0.01-100x, baseline $1$ $L/h$).

---

## 🏗️ Structural Model Breakdown
Eighteen compartments (including adipose, bone, brain, gut, heart, kidney, liver, lung, lymph node, muscle, pancreas, skin, spleen and arterial/venous blood) are connected by blood and lymph flow. Each non-blood organ comprises vascular, endothelial cell, interstitial and intracellular subcompartments; transport between vascular and interstitial spaces follows the two-pore formalism (ODEs in Material S1, equations in S2). Cellular entry follows first-order $K_{up}$ (applied to both unbound and plasma-protein-bound TO), exit via $K_{re}$; fitted $K_{up}$ values range from 0.03 (brain) to $17.9$ $1/h$ (liver) and $K_{re}$ from ~$1.8E-05$ to $0.033$ $1/h$ (Table 1). Nuclease clearance acts on free drug in every compartment with tissue contributions assumed to mirror protease distribution ($2.91$ $L/h$ whole-body for the clinical simulations; $1$ $L/h$ for the sensitivity analysis ASO). Renal clearance uses a semi-mechanistic glomerular filtration model for proteins, so free TO is filtered while protein-bound is not. $f_{up}$ governs unbound fraction in plasma and was also applied to interstitial and intracellular subcompartments. GalNAc-siRNA models add ASGPR (interstitial abundance 0.823 uM, CV 13.9%; degradation rate $0.0399$ $1/h$, CV 23.8%) and RISC (0.0372 uM, $K_D$ 0.000435 uM) via quasi-equilibrium binding. SC absorption includes uptake at the injection site and lymphatic/vascular transport; absorption parameters were fitted per compound.

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole-body, permeability-limited PBPK model with 18 compartments and four subcompartments per tissue (vascular, endothelial, interstitial, intracellular), arterial/venous pools, lymph flow, two-pore protein flux (hydrodynamic radius estimated, Figure S1), linear endocytosis ($K_{up}$), redistribution ($K_{re}$), nuclease degradation of free drug, glomerular filtration for free drug, and ASGPR/RISC quasi-equilibrium binding for GalNAc-siRNAs. Implemented in Simcyp Simulator V23 (Certara).

#### Data Sources
Preclinical: 12 literature studies (5 mouse, 5 rat, 2 monkey) with total tissue concentrations after IV second-generation ASO (Table S4), normalised to fraction of dose using Simcyp Animal Simulator volumes; rodent data for all tissues, monkey for plasma and liver only. Clinical: published plasma data for mipomersen, inotersen, defibrotide (ASOs) and inclisiran, vutrisiran, fitusiran, cemdisiran, nedosiran (GalNAc-siRNAs), including multiple dose levels and regimens; simulations matched to trial demographics and design (Table S3). ASGPR/RISC abundance and turnover from literature.

#### Estimation Methods
$K_{up}$ and $K_{re}$ were fitted to preclinical total-tissue concentrations (algorithm not specified in the main text), with $K_{re}$ initialised from literature cell turnover rates. SC absorption parameters were fitted to the highest available dose per compound. Nuclease clearance was not estimated but fixed at $2.91$ $L/h$. Virtual trials: 20 trials x n subjects per study.

#### Model Evaluation
Visual comparison of predicted and observed concentration-time profiles; predicted:observed ratios of $C_{max}$, $t_{max}$, $AUC$ with 1.25-, 1.5- and 2-fold limits (twofold success criterion). No VPC-based variability assessment, bootstrap or formal identifiability analysis was described. Local sensitivity analysis (one-at-a-time and pairwise: $K_{up} \times K_{re}$, $f_{up} \times CL_{nuc}$, $f_{up} \times K_{up}$) on $C_{max}$, $t_{max}$ and $AUC$.

#### Covariate Analysis
No formal covariate analysis. Physiology was system-based (healthy volunteer population); body size and demographic effects entered through the PBPK physiology and trial matching. $f_{up}$ was a compound property that also set interstitial and intracellular unbound fractions.

---

### Statistical Rigor Assessment
The pre-specified twofold criterion was met for all $C_{max}$, $t_{max}$ and $AUC$ comparisons, and summary ratios (0.94, 0.85, 0.99) indicate limited bias. However, the criterion is permissive, with only 44% of AUC points within 1.25-fold, and $t_{max}$ was evaluated only for two drugs. No uncertainty in parameters ($K_{up}$, $K_{re}$, nuclease, $f_{up}$) was propagated nor were confidence intervals reported; no formal identifiability, VPC or global sensitivity analyses were performed. Sensitivity analysis was deterministic, with a single reference ASO and pairwise combinations; its conclusions are conditional on model structure. Equifinality was noted but not quantified. Data pooling from preclinical studies involved normalisation to dose fraction with different study designs and large between-study plasma variability, which adds uncertainty to $K_{up}$/$K_{re}$ estimates.

---

## 📊 Key Findings
1) Preclinical analysis (12 studies: 5 mouse, 5 rat, 2 monkey) showed similar dose-normalised tissue distribution in mice and rats, with monkey liver concentrations 4-6-fold higher than rodents. Fitted tissue-specific $K_{up}$ was highest in liver ($17.88$ $1/h$) and kidney ($14.9$ $1/h$) and lowest in brain ($0.0298$ $1/h$); $K_{re}$ ranged from ~$1.8E-05$ to $0.033$ $1/h$ (Table 1). 2) Clinical verification across 8 TOs: $C_{max}$ within 1.25/1.5/2-fold in 68%/84%/100% of data points (mean predicted:observed 0.94, range 0.51-1.86); $t_{max}$ (fitusiran and nedosiran only) all within twofold (0.85, range 0.52-1.24); $AUC$ within 1.25/1.5/2-fold in 44%/76%/100% (0.99, range 0.55-1.62) (Figure 3). 3) Sensitivity analysis for an SC ASO: $K_{up}$ 10-fold up decreased $C_{max}$ 4.5-fold, $t_{max}$ 5-fold and $AUC$ 10-fold; $K_{up}$ 10-fold down increased $C_{max}$ 2-fold, $t_{max}$ 2-fold and $AUC$ 2.9-fold (Figures 4-6). $f_{up}$ 10-fold up decreased $C_{max}$ 2.5-fold, $t_{max}$ 2-fold and $AUC$ 3.8-fold; $f_{up}$ 10-fold down increased $C_{max}$ 1.2-fold, $t_{max}$ 1.17-fold and $AUC$ 1.6-fold. Combined 10-fold increases in $K_{up}$ and $f_{up}$ decreased $AUC$ 29-fold; combined decreases increased $AUC$ 6-fold. 4) $K_{re}$ and $CL_{nuc}$ did not affect $C_{max}$ or $t_{max}$; $K_{re}$ 100-fold up raised $AUC$ 2.8-fold (10-fold down reduced it 1.4-fold), and a 10-fold $CL_{nuc}$ change altered $AUC$ only 1.12-fold. 5) A 10-fold $K_{up}$ increase could be offset by a 100-fold $K_{re}$ increase, demonstrating that multiple parameter combinations reproduce the same plasma data (equifinality). Mechanistically, $K_{up}$ acts at the injection site (less drug reaches systemic circulation early) and systemically (distribution to cells), whereas higher protein binding promotes lymphatic transport (lower $C_{max}$, later $t_{max}$) and reduces filtered free drug.

---

## 💡 Clinical & Regulatory Implications
The model supports a rational strategy for TO development: measure $f_{up}$ robustly (and ideally intracellular $f_u$) and develop cellular uptake assays, whereas nuclease stability assays are less critical for chemically similar second-generation ASOs (though necessary for new chemistries). It can potentially be used to simulate PK for special populations (e.g., renal/hepatic impairment, pediatrics) where clinical data are limited, but this has not been demonstrated and would need validation. Sensitivity results imply that chemistry or formulation changes altering protein binding or cellular uptake can markedly change SC absorption ($C_{max}$, $t_{max}$) and systemic exposure, which is relevant for dose selection and bridging. For regulatory use (MIDD), the work provides a transparent platform and assumptions, but tissue-level exposures and PD cannot yet be reliably predicted.

---

### Strengths & Limitations

#### Strengths
- Mechanistic permeability-limited whole-body structure with two-pore protein flux, lymph flow and endothelial subcompartments, consistent with TO size and protein-binding behaviour
- Cross-species data integration: $K_{up}$ and $K_{re}$ fitted to total-tissue data from 12 preclinical studies, then used for human prediction without refitting disposition parameters
- Verification across eight TOs of two modalities (ASO and GalNAc-siRNA) with a priori twofold success criterion and several dose levels; absorption parameters fitted at the highest dose only, with other doses used for evaluation
- Explicit incorporation of ASGPR abundance/turnover and RISC binding with literature-derived parameters
- Sensitivity analysis answers a practical question (which in vitro assays to prioritise) and shows nonlinear and interacting effects (e.g., $K_{up} \times f_{up}$, $K_{up} \times K_{re}$)
- Implemented in a commercial platform (Simcyp V23), aiding regulatory-style use

#### Limitations (Acknowledged by Authors)
- Only plasma data available in humans; tissue and intracellular concentrations could not be verified
- Total tissue concentrations cannot distinguish endothelial from parenchymal/other cell uptake and redistribution
- $K_{up}$ and $K_{re}$ are uncertain in humans because they were fitted from animal data; $K_{up}$ likely varies with cell type
- Tissue unbound fraction unknown and linked to $f_{up}$; intracellular $f_u$ likely lower
- Nuclease clearance contribution per tissue unknown and assumed as for proteases; nuclease clearance of $2.91$ $L/h$ assumed for all TOs
- Endosomal escape and pharmacodynamic effects not modelled; endocytosis pathway (macropinocytosis vs scavenger receptor) uncertain

#### Limitations (Expert Review)
- Sensitivity analysis was performed on a single hypothetical 7500 Da SC ASO with one-at-a-time and pairwise variation; no global/variance-based method and no assessment of interactions beyond $K_{up} \times f_{up}$
- Verification is via plasma $C_{max}$/$t_{max}$/$AUC$ within twofold, a lenient criterion for a highly parameterised model; the $AUC$ fell within 1.25-fold in only 44% of cases; no VPC-style assessment against observed variability or terminal half-life
- Absorption parameters (SC) were fitted per compound to the highest dose, so verification is partly a fit rather than a pure prediction; $t_{max}$ data only for two drugs
- $K_{up}$/$K_{re}$ are determined from second-generation ASO data and applied to siRNAs (GalNAc, ASGPR-mediated) and defibrotide (an oligonucleotide mixture with different chemistry); the extrapolation across chemistries is not independently justified
- Equifinality ($K_{up}$ vs $K_{re}$ trade-off) implies that plasma-only data cannot identify the parameters, so the predictive performance may not translate to other populations or to tissue exposure; no parameter uncertainty/identifiability analysis (e.g., profile likelihood) was presented
- Rodent-to-human extrapolation assumes identical $K_{up}$, with monkey liver 4-6-fold higher than rodents not explicitly addressed in the human model; use of a single hepatic RISC abundance in all tissues
- Sensitivity range for $f_{up}$ (0.001-1) and $K_{re}$ (up to 100-fold) is wide and partly physiologically implausible; description of steps in the text contains inconsistencies (e.g., duplicated 0.01 step)
- Conflict of interest: all authors are employed by the vendor of the platform used; no external funding and no independent validation
- No special-population simulations were performed despite being a stated motivation

#### Generalizability
Findings are most applicable to second-generation, phosphorothioate-modified ASOs and GalNAc-siRNAs with high plasma protein binding and similar chemistry, in healthy adults after IV or SC dosing. Generalisation to other chemistries, LNP formulations, other routes, disease states (renal/hepatic impairment), pediatrics or tissue-level/PD predictions is unproven and would need compound-specific $f_{up}$, nuclease stability, and uptake data. The sensitivity ranking is model-structure-dependent (e.g., linear uptake, free-drug-only nuclease degradation and filtration) and should be considered hypothesis-generating.

---

---

### Figures & Tables

- **Figure 1**: Whole-body PBPK model structure (18 compartments with blood and lymph flows) and the permeability-limited tissue structure (vascular, endothelial, interstitial, intracellular).
  - *Significance*: Defines model architecture and the location of the uptake ($K_{up}$), redistribution ($K_{re}$), nuclease degradation and binding processes that drive sensitivity results.
- **Figure 2**: Model-predicted versus observed plasma, liver and kidney concentrations (dose-normalised) from mice, rats, monkeys and humans over 48 h and 1600 h.
  - *Significance*: Shows how preclinical total-tissue data informed $K_{up}$/$K_{re}$ and demonstrates the high variability in plasma and the higher monkey liver concentrations.
- **Figure 3**: Predicted versus observed $C_{max}$, $t_{max}$ and $AUC$ for IV ASOs, SC ASOs and SC siRNAs with twofold bounds.
  - *Significance*: Primary evidence of predictive performance: all predictions within twofold and no systematic bias (mean AUC ratio 0.99).
- **Figure 4**: Sensitivity of $C_{max}$ of an SC ASO to $K_{up}/K_{re}$, $f_{up}/CL_{nuc}$, and $f_{up}/K_{up}$.
  - *Significance*: Shows $K_{up}$ (4.5-fold decrease at 10x) and $f_{up}$ (2.5-fold) as main determinants, $K_{re}$ and $CL_{nuc}$ as non-influential, and nonlinear interaction.
- **Figure 5**: Sensitivity of $t_{max}$ of an SC ASO to $K_{up}/K_{re}$, $f_{up}/CL_{nuc}$, and $f_{up}/K_{up}$.
  - *Significance*: Demonstrates that $K_{up}$ and $f_{up}$ affect absorption/early distribution timing, supporting the injection-site uptake and lymphatic transport mechanisms.
- **Figure 6**: Sensitivity of $AUC$ to $K_{up}/K_{re}$, $f_{up}/CL_{nuc}$, and $f_{up}/K_{up}$.
  - *Significance*: Shows all four parameters affect exposure but $K_{up}$ and $f_{up}$ dominate (up to 29-fold combined change), and illustrates $K_{up}$-$K_{re}$ compensation (equifinality).
- **Table 1**: Fitted tissue-specific uptake ($K_{up}$) and redistribution ($K_{re}$) rates for 13 tissues.
  - *Significance*: Key model parameters derived from preclinical data; liver and kidney have highest $K_{up}$ ($17.88$ and $14.9$ $1/h$), consistent with their high uptake of TOs.

---

### Code & Reproducibility Assessment
Model was implemented in the commercial Simcyp Simulator V23; no code or model files are described as publicly available. ODEs, two-pore equations and input parameters are provided in supplementary material (Materials S1-S2, Tables S1-S4), which were not available for this review. Reproduction requires Simcyp access and the supplementary data, and the parameter-fitting procedure for $K_{up}$/$K_{re}$ (software, objective function) is not described in detail.

---

### Future Directions
Develop and validate in vitro assays for cell-type-specific uptake (macropinocytosis vs scavenger receptor), recycling/exocytosis, intracellular fraction unbound and nuclease stability for different chemistries. Add endosomal escape, target mRNA/protein turnover and PD to link PBPK with exposure-response. Test the model against human tissue or biopsy data and mass-balance/urinary excretion data, and use in special populations (renal/hepatic impairment, pediatrics, DDI). Apply formal identifiability and global sensitivity analyses (e.g., Sobol, profile likelihood, Bayesian estimation) to quantify equifinality and uncertainty. Extend to other chemistries and delivery systems (LNP, antibody-oligonucleotide, other ligand conjugates) and to cell-type-resolved compartments such as hepatocytes vs Kupffer vs endothelial cells.

---

### Expert Commentary
This work is a pragmatic step toward platform PBPK for oligonucleotides, a modality where compartmental and TMDD-like empirical models dominate. The most useful message is not the twofold accuracy but the demonstration that plasma PK is highly sensitive to poorly measured parameters ($K_{up}$, $f_{up}$) and to their interaction, which should drive assay strategy. The observation that $K_{up}$ influences $C_{max}$ and $t_{max}$ through uptake at the injection site is mechanistically interesting but model-structure-dependent and testable (e.g., with local-tissue sampling or imaging). Teaching points: (1) acceptance criteria of twofold are weak for assessing parameter credibility when equifinality exists; (2) fitting tissue uptake from animal total-tissue data and then fixing it for humans implicitly assumes conserved uptake kinetics across species, whereas monkey liver data suggest otherwise; (3) assuming that only free drug is subject to nuclease degradation and renal filtration strongly shapes the sensitivity results, so $f_{up}$ assay choice matters; (4) one-factor and two-factor sensitivity analyses should be complemented with global methods. The long-term vision of special-population prediction will need verification with tissue and PD data, but the model is a valuable starting hypothesis and aligns with regulatory interest in MIDD for novel modalities.

---

### Bottom Line
A well-structured permeability-limited PBPK model can reproduce plasma PK for several ASOs and GalNAc-siRNAs within twofold, and in this model $K_{up}$ and $f_{up}$ are the key uncertain determinants of $C_{max}$, $t_{max}$ and $AUC$ for SC ASOs, with $K_{re}$ and nuclease clearance less influential. For practitioners, the key messages are: prioritise assays for cellular uptake and (intracellular) unbound fraction, be cautious that plasma data alone cannot separate $K_{up}$ from $K_{re}$, and treat tissue-level predictions as unverified until human tissue or biomarker data are available. The platform is promising for MIDD, but widespread use for special-population extrapolation will require independent validation and better-informed parameters.

---

### Fact-check corrections

[^fc-1]: **NUMERIC_MISMATCH** — original: “All $C_{max}$, $t_{max}$ and $AUC$ predictions were within twofold of observed values.” → correction: “$C_{max}$ was predicted within 1.25-fold, 1.5-fold, and 2-fold of the observed data in 68%, 84%, and 100% of all observed data points, respectively.”
[^fc-2]: **UNSUPPORTED** — original: “A generalisable permeability-limited PBPK platform identifying influential uncertain parameters was missing from existing approaches, which rely on empirical or semi-mechanistic models.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “Future directions include in vitro assays for cell-type-specific uptake, recycling, intracellular fraction unbound and nuclease stability.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “Future directions include adding endosomal escape, target turnover and PD, and testing against human tissue and excretion data.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “Future directions include formal identifiability and global sensitivity analyses such as Sobol, profile likelihood and Bayesian estimation.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “Future directions include extension to other chemistries and delivery systems such as LNP, antibody-oligonucleotide and other ligand conjugates, and cell-type-resolved compartments.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Model structure of the used whole-body PBPK model for oligonucleotides. Venous blood flow, arterial blood flow, and lymph flow are represented in blue, red, and orange, r]({{ site.baseurl }}/assets/digests/2026-11-22-modeling-and-simulation-identifies-endocytosis-uptake-rate-and-fraction-unbound/figures/fig_01.jpg)

![Prediction of plasma (A: 48 h, B: 1600 h), liver (C: 48 h, D: 1600 h), and kidney (E: 48 h, F: 1600 h) concentration (black line) against observed data from mice (circles]({{ site.baseurl }}/assets/digests/2026-11-22-modeling-and-simulation-identifies-endocytosis-uptake-rate-and-fraction-unbound/figures/fig_02.jpg)

![Predicted vs. observedCmax(A),tmax(B), and AUC (C). The gray squares, the red and black circles show data for ASOs administered IV, ASOs administered SC, and siRNAs admin]({{ site.baseurl }}/assets/digests/2026-11-22-modeling-and-simulation-identifies-endocytosis-uptake-rate-and-fraction-unbound/figures/fig_03.jpg)

![Sensitivity analysis forCmaxfor a subcutaneously administered ASO. (A) shows the dependency ofCmaxon the endocytosis uptake rate (Kup) and the redistribution rate into th]({{ site.baseurl }}/assets/digests/2026-11-22-modeling-and-simulation-identifies-endocytosis-uptake-rate-and-fraction-unbound/figures/fig_04.jpg)

![Sensitivity analysis fortmaxfor a subcutaneously administered ASO. (A) shows the dependency oftmaxon the endocytosis uptake rate (Kup) and the redistribution rate into th]({{ site.baseurl }}/assets/digests/2026-11-22-modeling-and-simulation-identifies-endocytosis-uptake-rate-and-fraction-unbound/figures/fig_05.jpg)

![Sensitivity analysis for AUC for a subcutaneously administered ASO. (A) shows the dependency of AUC on the endocytosis uptake rate (Kup) and the redistribution rate into ]({{ site.baseurl }}/assets/digests/2026-11-22-modeling-and-simulation-identifies-endocytosis-uptake-rate-and-fraction-unbound/figures/fig_06.jpg)