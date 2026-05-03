---
layout: post
title: "Pharmacokinetics, Pharmacodynamics, Efficacy and Drug Resistance Selection of Injectable Long-Acting Lenacapavir Pre-Exposure Prophylaxis (PrEP) Against HIV"
date: 2026-04-23
authors: "Kim HY, Kleist M, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70254"
paper_type: popk
tags: [popk, qsp, regulatory]
excerpt_text: "Modeling teams developing long-acting PrEP, HIV clinicians, and regulatory reviewers should read this paper. It delivers the first integrated PK-PD-evolutionary model for lenacapavir PrEP, estimating that $4.7$ ng/mL and $>5$ ng/mL provide 95% and full prophylaxis, respectively, while warning that the long PK tail after discontinuation creates a mutant-selection window for up to ~8 months (SC) or ~1 year (IM). The analysis supports formulation optimization but urgently flags the need for structured PrEP discontinuation strategies to prevent de novo resistance."
pdf_path: "/assets/digests/2026-04-23-pharmacokinetics-pharmacodynamics-efficacy-and-drug-resistance-selection-of/PMx_Pharmacokinetics_Pharmacodynamics_Effica_20260423.pdf"
retroactively_classified: false
---

### Quick Take
Modeling teams developing long-acting PrEP, HIV clinicians, and regulatory reviewers should read this paper. It delivers the first integrated PK-PD-evolutionary model for lenacapavir PrEP, estimating that $4.7$ ng/mL and $>5$ ng/mL provide 95% and full prophylaxis, respectively, while warning that the long PK tail after discontinuation creates a mutant-selection window for up to ~8 months (SC) or ~1 year (IM). The analysis supports formulation optimization but urgently flags the need for structured PrEP discontinuation strategies to prevent de novo resistance.

---

### Executive Summary
This study presents an integrated pharmacokinetic-pharmacodynamic-viral evolution model for long-acting lenacapavir (LEN) used as HIV pre-exposure prophylaxis. By combining a multi-route PK model fit to published aggregate data with a viral dynamics model and in vitro resistance phenotypes, the authors estimate that plasma concentrations $>5$ ng/mL provide full protection against wild-type virus, while defining concentration thresholds required to block specific drug-resistant mutants. Critically, the model quantifies a prolonged post-discontinuation risk window-during which slowly declining LEN concentrations may select for de novo resistance in individuals who acquire wild-type HIV after stopping injections-underscoring a major public health consideration for the clinical deployment of twice-yearly subcutaneous and once-yearly intramuscular LEN formulations.

---

### Scientific Context & Motivation
Long-acting injectable lenacapavir has demonstrated high efficacy in Phase III PrEP trials, yet clinical studies alone cannot define protective concentration benchmarks, predict efficacy against transmitted drug-resistant variants, or assess resistance risks during the long PK tail after treatment cessation. Existing models for other PrEP agents do not capture LEN's unique capsid-inhibition mechanism, its low genetic barrier to resistance, or the flip-flop pharmacokinetics of its parenteral formulations. This work fills that gap by unifying PK, PD, and evolutionary dynamics into a single framework, challenging the assumption that simply maintaining detectable drug concentrations guarantees protection and highlighting the evolutionary trap set by ultra-long-acting agents with low resistance barriers.

---

## ⚡ Methodological Snapshot
The authors constructed a mechanistic PK model that distinguishes oral first-order absorption from subcutaneous and intramuscular administration using parallel direct (fast) and indirect (slow, transit-compartment) absorption pathways, coupled to a dose-dependent volume of distribution for oral doses. This model was parameterized against digitized mean and median concentration-time data from 15 single-dose regimens across three routes. Inter-individual variability was approximated from summary statistics of the Purpose 2 trial rather than through formal population fitting. For PD, the team used a target-cell-limited HIV viral dynamics model in which LEN acts as a maturation inhibitor, reducing the production of infectious virions. Antiviral potency was estimated by fitting viral decay kinetics from a Phase Ib monotherapy study. To assess resistance, the team combined in vitro phenotypic data (fold-change in $IC_{50}$ and fitness costs) with analytical solutions based on strain-specific reproduction numbers to compute mutant selection windows, infection probabilities, and the dynamics of de novo resistance emergence under slowly changing drug concentrations.

---

## 🏗️ Structural Model Breakdown
The PK structure comprises a central compartment with first-order elimination ($k_e = 0.0026$ $h^{-1}$, $V_d = 1618$ L for parenteral). Oral doses enter via a single first-order absorption compartment ($k_a$). Parenteral doses split into a direct absorption fraction (Frac, study-specific) with rate constant $k_{direct}$ and an indirect pathway through $n$ transit compartments (study-specific, $n = 1-3$) with rate constant $k_{indirect}$, producing flip-flop kinetics. Oral volumes of distribution were dose-dependent (13,304 L for 300 mg; 35,374 L for 900 mg; 46,516 L for 1800 mg). The PD component uses a standard viral dynamics model (susceptible target cells $T$, early infected cells $I_1$, late infected cells $I_2$, free virus $V$) modified so that LEN reduces the rate of infectious virion production from late infected cells. Mutant-specific reproduction numbers $R_m(C)$ were derived as functions of drug concentration, fitness cost, and fold-resistance, enabling analytical computation of infection probability and selection windows without full stochastic simulation.

---

### Detailed Methodological Analysis

#### Modeling Approach
Multi-compartment deterministic PK model (oral first-order absorption; SC/IM dual-pathway absorption with transit compartments) coupled to an HIV viral dynamics model (target-cell limited, LEN as maturation inhibitor). Analytical evolutionary model based on strain-specific reproduction numbers for mutant selection and de novo resistance. Custom Python 3.12 code.

#### Data Sources
Aggregate PK data (mean/median concentration-time) from 15 single-dose regimens (oral, SC, IM) digitized from published literature using Engauge Digitizer. Antiviral potency informed by Phase Ib monotherapy viral decay data (Study 3, aqueous suspension SC doses). Inter-individual variability approximated from geometric mean of min/max concentration ratios at weeks 4, 8, 13, 26, 39, 52 in a 10% random cohort of the Purpose 2 Phase III trial. In vitro mutant phenotypes (fold-change, fitness costs) from published resistance selection experiments.

#### Estimation Methods
Parameter optimization for direct/indirect absorption rates ($k_{direct}$, $k_{indirect}$), fraction direct (Frac), number of transit compartments ($n$), and dose-dependent oral volume of distribution ($V_d$). Global elimination rate ($k_e$) determined graphically from log-transformed oral PK data. Antiviral potency estimated by fitting model-predicted viral decay to observed change-from-baseline HIV-1 RNA. Geometric mean ratios used to define IIV bounds (0.15x to 4.0x median concentration).

#### Model Evaluation
Visual comparison of predicted versus observed average concentration-time profiles (Figure 1B,C) and viral decay kinetics (Figure 3) across multiple dosing regimens and routes. Predictive performance assessed by alignment with independent Phase III concentration ranges and observed infection events. No formal bootstrap, VPC, or simulation-based diagnostics reported owing to aggregate-data limitations.

#### Covariate Analysis
No formal covariate analysis performed. The authors explicitly note that lack of individual-level data precluded population PK modeling and covariate exploration (e.g., body weight, sex, race, renal/hepatic function). Inter-individual variability was implemented as empirical geometric bounds on concentrations rather than as estimated random effects.

---

### Statistical Rigor Assessment
The analysis relies entirely on aggregate (mean/median) data extracted from published figures, which precludes formal residual error structure modeling and limits statistical inference. Inter-individual variability was not estimated via mixed-effects modeling but approximated from summary statistics of one trial subset, likely underestimating true between-subject variance and precluding covariate identification. Sample sizes for the PK source studies range from small Phase I cohorts to large Phase III summary data, though exact numbers are not provided for each digitized profile. No bootstrap, cross-validation, or visual predictive checks based on individual-level simulations were performed. The deterministic ODE framework with analytical reproduction-number approximations is mathematically sound for the timescale-separation argument used, but stochastic effects during acute infection and multiple exposure events are not captured. Sensitivity analyses around viral fitness parameters or absorption variability were not reported.

---

## 📊 Key Findings
The model estimates 95% and complete (fully preventive) prophylactic plasma concentrations of $4.7$ ng/mL and $>5$ ng/mL, respectively. Following a 927 mg SC injection, the $>5$ ng/mL threshold is attained within 23 hours and maintained for approximately 50.5 weeks after the last dose in an average individual, though PK variability (0.15x to 4.0x median) means troughs may occasionally fall below this level. Full protection against specific mutants requires substantially higher concentrations: 21 ng/mL for Q67H, 59 ng/mL for N74D, 107 ng/mL for Q67H+K70R, 142 ng/mL for Q67H+T107N, 538 ng/mL for M66I+T107A, 1108 ng/mL for Q67H+N74D, and 1142 ng/mL for the triple mutant Q67H+K70R+T107N. Mutant selection windows for double and triple mutants overlap with population-average SC steady-state concentrations (32-62 ng/mL), indicating that transmitted resistance could compromise PrEP efficacy. After discontinuation, wild-type infection becomes possible approximately 285 days post-last SC injection, with de novo resistance emergence likely during windows of 106-235 days depending on the mutant; for once-yearly IM, this risk may extend to approximately one year. Notably, Q67H is predicted as the most probable de novo mutation due to its high fitness, whereas highly resistant strains are more likely to be transmitted.

---

## 💡 Clinical & Regulatory Implications
These findings support the clinical viability of twice-yearly SC lenacapavir PrEP but introduce a critical caveat: the long elimination tail necessitates robust discontinuation management. Patients stopping LEN remain in a mutant-selection window for months, requiring continued behavioral counseling, alternative protection, or monitored transition to other PrEP agents. The concentration benchmarks (4.7-5 ng/mL) can guide formulation development and lot-release specifications, while the high thresholds for double/triple mutants argue against using LEN monotherapy in populations with circulating resistance. Regulatory agencies should consider requiring Risk Evaluation and Mitigation Strategies (REMS) or patient education around the prolonged post-discontinuation vulnerability. The analysis also supports further evaluation of once-yearly IM dosing, provided PK variability is carefully characterized. Special-population dosing cannot be informed by this model given the absence of covariate effects.

---

### Strengths & Limitations

#### Strengths
- First integrated PK-PD-evolutionary model specifically for lenacapavir PrEP, addressing a critical regulatory and public health knowledge gap.
- Mechanistic framework unifies oral, SC, and IM routes, enabling cross-formulation comparison and supporting once-yearly IM development.
- Creative use of publicly available aggregate data and analytical reproduction-number solutions to overcome lack of individual-level trial data.
- Open-source Python code and Zenodo deposit enhance transparency and reproducibility.
- Explicit quantification of post-discontinuation de novo resistance risk, which clinical trials are not designed to capture.

#### Limitations (Acknowledged by Authors)
- Inability to fit population PK models due to reliance on published aggregate/summary data rather than individual concentrations.
- Inter-individual variability approximated from geometric mean ratios in a single trial subset rather than estimated as random effects.
- Model predictions depend on in vitro phenotypic parameters (fitness costs, fold-changes) that may not fully reflect in vivo behavior.
- Static-concentration assumption during infection establishment, justified by slow LEN elimination but neglecting rapid PK changes around dosing events.

#### Limitations (Expert Review)
- Digitization of published figures introduces measurement error and prevents proper residual error modeling or simulation-based diagnostics (VPC, bootstrap).
- No formal model qualification criteria (e.g., prediction-corrected VPC, normalized prediction distribution errors) were applied.
- Viral dynamics model omits host immune responses, compartmental tissue distribution (genital/rectal mucosa), and latent reservoir formation during acute infection.
- Single-exposure event framework does not account for repeated exposures or varying inoculum sizes in real-world sexual transmission.
- Stochastic early infection dynamics and genetic bottleneck effects are simplified into deterministic reproduction-number thresholds.
- No covariate effects (body weight, sex, ethnicity, organ impairment) could be evaluated, limiting generalizability to special populations.

#### Generalizability
Findings are generalizable to the specific lenacapavir dosing regimens and formulations modeled (oral, SC 927 mg, IM 5000 mg). Protective concentration thresholds are contingent on the in vitro resistance phenotype data utilized and may shift with different viral subtypes or clinical isolates. De novo resistance timelines are theoretical predictions based on estimated fitness parameters; real-world seroconversion and resistance patterns may differ due to adherence, exposure frequency, and host immunity. The absence of covariate modeling limits extrapolation to pediatric, geriatric, renally impaired, or severely obese populations.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the developed multi-route PK model and predicted versus observed average concentration-time profiles for oral, SC, and IM dosing.
  - *Significance*: Demonstrates structural model adequacy and shows that the model recapitulates flip-flop kinetics and route-dependent absorption across 15 regimens.
- **Figure 2**: Simplified viral dynamics model diagram illustrating LEN mechanism of action and pathways for emergence of drug-resistant mutant strains.
  - *Significance*: Conceptualizes the maturation-inhibition MOA and sets up the framework for linking PK to antiviral effect and resistance.
- **Figure 3**: Model-predicted versus observed change-from-baseline HIV-1 RNA following single SC LEN doses (Study 3) across four dosing regimens.
  - *Significance*: Validates the estimated antiviral potency parameter by showing agreement with Phase Ib monotherapy viral decay kinetics.
- **Figure 4**: Plasma LEN concentrations versus viral reproductive capacity (R) for wild-type and resistant strains, showing mutant selection windows (MSW) during twice-yearly SC injections.
  - *Significance*: Identifies that double- and triple-mutant MSWs overlap with steady-state concentration ranges, indicating risk of transmitted drug resistance under standard dosing.
- **Figure 5**: Reduction in HIV infection risk as a function of LEN concentration for wild-type and mutant strains after twice-yearly SC administration.
  - *Significance*: Defines concentration-efficacy relationships and reveals the steep threshold for protection; shows how resistance reduces prophylactic efficacy at clinical concentrations.
- **Figure 6**: Quantification of de novo drug resistance emergence risk after missed doses or discontinuation of twice-yearly SC LEN-PrEP.
  - *Significance*: Highlights the prolonged post-discontinuation vulnerability window (106-235 days) where declining LEN concentrations permit WT infection followed by mutant selection.
- **Table S1**: Summary of publicly available clinical PK data sources and dosing regimens used for model development.
  - *Significance*: Provides transparency on the 15 dosing schemes and three administration routes digitized to parameterize the model.

---

### Code & Reproducibility Assessment
All analyses were performed in Python 3.12. Source code is openly available on GitHub (https://github.com/KleistLab/LenPrEP) under GPL 3.0, with a frozen version archived on Zenodo (https://doi.org/10.5281/zenodo.16612337). While the original clinical data are not provided (having been extracted from published figures), the digitized datasets and code enable full reproduction of the reported simulations and figures.

---

### Supplementary Materials
The article references supplementary materials that were not extracted in the source input: Table S1 (clinical PK data sources), Table S4 (mutant phenotype parameters), Figure S1 (PK variability from Purpose 2), Figure S3 (IM efficacy analysis), Figure S4 (IM de novo resistance), and Text S1 (analytical derivations of reproduction-number-based infection probabilities). These materials provide supporting data for parameterization and additional regimen comparisons.

---

### Future Directions
Immediate priorities include validating model predictions against individual-level PK and virologic data from the PURPOSE 1 and PURPOSE 2 Phase III trials, and developing a formal nonlinear mixed-effects (population PK) model when those data become available. Future extensions should incorporate stochastic, individual-based simulations of repeated sexual exposure; tissue compartment PK (genital tract, rectal mucosa) to assess site-specific protection; and combination PrEP modeling (e.g., lenacapavir plus broadly neutralizing antibodies or reverse-transcriptase inhibitors) to evaluate resistance mitigation strategies. Additional work is needed to incorporate real-world adherence and discontinuation patterns, to validate de novo resistance predictions with clinical follow-up of seroconverters who discontinued LEN, and to evaluate covariate effects (body weight, injection site, sex, ethnicity) on absorption and distribution. Finally, the framework should be updated as once-yearly IM pharmacokinetic data mature.

---

### Expert Commentary
This paper exemplifies how mechanistic modeling can answer questions that randomized controlled trials cannot-specifically, defining protective thresholds and post-market resistance risks for a transformative long-acting agent. The coupling of PK, viral dynamics, and evolutionary theory is methodologically elegant, and the public health message is sobering: the same long half-life that makes lenacapavir convenient also creates an evolutionary trap after discontinuation. From a pharmacometrics perspective, the reliance on aggregate data and summary-level IIV is a necessary compromise given data availability, but it underscores the limitations of meta-analytic modeling relative to full PopPK. The finding that Q67H is the most probable de novo mutant while triple mutants are more likely to be transmitted is a nuanced and clinically important distinction. As the field moves toward ultra-long-acting injectables and implants, this work should serve as a template for integrating evolutionary pharmacology into MIDD. A key teaching point: always model the tail-not just the efficacy plateau-because subtherapeutic concentrations at the end of a dosing interval or after discontinuation may drive resistance more than peak concentrations.

---

### Bottom Line
This integrated PK-PD-evolutionary model establishes that plasma lenacapavir concentrations $>5$ ng/mL likely provide full protection against wild-type HIV, validates the pharmacologic basis for twice-yearly SC dosing, and raises a critical safety signal: patients discontinuing LEN-PrEP remain in a de novo resistance window for months to a year depending on formulation. For practicing pharmacometricians, the study illustrates both the power of summary-data mechanistic modeling and its limitations-protective thresholds are plausible but require individual-level validation, and the long PK tail must be treated as a liability requiring structured discontinuation protocols rather than merely a dosing convenience.

---

---

## 📊 Figures

![FIGURE 1: Pharmacokinetics of LEN. (A) Schematic representation of the developed PK-model for LEN. The model includes first-order absorption for oral dosing (tablets) and]({{ site.baseurl }}/assets/digests/2026-04-23-pharmacokinetics-pharmacodynamics-efficacy-and-drug-resistance-selection-of/figures/fig_01.png)

![FIGURE 2: Simplified viral dynamics model incorporating the mechanisms of action of LEN and the emergence of mutated strains. Free infectious virus (), early infected cell]({{ site.baseurl }}/assets/digests/2026-04-23-pharmacokinetics-pharmacodynamics-efficacy-and-drug-resistance-selection-of/figures/fig_02.png)

![FIGURE 3: LEN viral decay in plasma with best-fit parameters. Average observed ‘change from baseline in HIV-1 RNA’ after single SC LEN injections (Study 3, aqueous suspens]({{ site.baseurl }}/assets/digests/2026-04-23-pharmacokinetics-pharmacodynamics-efficacy-and-drug-resistance-selection-of/figures/fig_03.png)

![FIGURE 4: Relationship between plasma LEN concentrations after twice-yearly SC injections and viral reproductive capacity for wild-type and resistant strains. (A) Example]({{ site.baseurl }}/assets/digests/2026-04-23-pharmacokinetics-pharmacodynamics-efficacy-and-drug-resistance-selection-of/figures/fig_04.png)

![FIGURE 5: Reduction in HIV infection risk by twice-yearly SC LEN for wild-type and mutant strains. Reduction in HIV wild-type (WT) infection risk (black solid lines) and m]({{ site.baseurl }}/assets/digests/2026-04-23-pharmacokinetics-pharmacodynamics-efficacy-and-drug-resistance-selection-of/figures/fig_05.png)

![FIGURE 6: Quantification of de novo drug resistance emergence risk in scenarios where twice-yearly LEN SC doses are missed or when LEN-PrEP is stopped. Predicted average L]({{ site.baseurl }}/assets/digests/2026-04-23-pharmacokinetics-pharmacodynamics-efficacy-and-drug-resistance-selection-of/figures/fig_06.png)