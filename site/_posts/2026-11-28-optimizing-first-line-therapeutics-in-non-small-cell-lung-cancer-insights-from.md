---
layout: post
title: "Optimizing First-Line Therapeutics in Non-Small Cell Lung Cancer: Insights From Joint Modeling and Large-Scale Data Analysis."
date: 2026-11-28
authors: "Benjamin K. Schneider, Sebastien Benzekry, Jonathan P. Mochel"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70079"
paper_type: popk
tags: [popk, oncology]
excerpt_text: "The authors pooled individual longest-diameter tumor data from 11 bevacizumab-containing NSCLC trials (2036 patients, 4701 tumors after filtering) and fitted a semi-mechanistic Gompertz-based NLME model. The model includes AUC-driven acquired resistance, a reversible-injury compartment, and a delayed bevacizumab perfusion effect. Clinical trial simulations suggest a ~$9.6$ h stagger between pemetrexed-cisplatin and bevacizumab beats concomitant dosing. Oncology pharmacometricians interested in tumor growth inhibition models, resistance modeling, and schedule optimization should read it, but the scheduling claim is a model-based hypothesis, not a validated clinical result."
pdf_path: "/assets/digests/2026-11-28-optimizing-first-line-therapeutics-in-non-small-cell-lung-cancer-insights-from/PMx_Optimizing_FirstLine_Therapeutics_in_Non_20261128.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
The authors pooled individual longest-diameter tumor data from 11 bevacizumab-containing NSCLC trials (2036 patients, 4701 tumors after filtering) and fitted a semi-mechanistic Gompertz-based NLME model. The model includes AUC-driven acquired resistance, a reversible-injury compartment, and a delayed bevacizumab perfusion effect. Clinical trial simulations suggest a ~$9.6$ h stagger between pemetrexed-cisplatin and bevacizumab beats concomitant dosing. Oncology pharmacometricians interested in tumor growth inhibition models, resistance modeling, and schedule optimization should read it, but the scheduling claim is a model-based hypothesis, not a validated clinical result.

---

### Executive Summary
Schneider, Benzekry and Mochel extend their earlier preclinical Gompertz model of bevacizumab-pemetrexed-cisplatin (which predicted a $1.2$ day bevacizumab lead) to a large human dataset obtained through CSDR/Vivli. Eleven phase 2-4 NSCLC trials contributed tumor size time courses and dosing records, with 2036 patients and 4701 tumors retained after exclusion. Literature PK models were fixed without IIV and drove a Gompertz tumor growth model. The model has log-kill-type cytotoxic effects with drug-specific weights ($w$), acquired resistance as a function of cumulative AUC ($\lambda$), a reversible-injury compartment (fraction $p$ recovers), a transit-compartment death cascade ($kk$), and a bevacizumab effect delayed by $\tau$ (~$0.25$ day). It was estimated with SAEM in Monolix with very small RSEs (<8%). External validation on a reserved 15% showed a reasonable VPC. Bayesian individual prediction error fell from 59.7% with one tumor measurement to 11.7% with three. Simulations (Simulx) of 22-day cycles identified a $0.4$ day ($9.6$ h) gap as optimal, with 93.5% of virtual patients improving and a mean 20.7% improvement in tumor reduction among them. $12$ h and $24$ h gaps gave 15.7% and 14.3%. Parameters imply a Gompertz plateau of ~$21$ mm diameter (~$5 \times 10^{9}$ cells), well below the commonly assumed $10^{12}$ cells. The work is a useful open-structure platform for NSCLC TGI modeling. Its scheduling inference rests on a mechanistically agnostic, AUC-based and PK-fixed structure, without survival endpoints, without covariates, and without immune checkpoint inhibitors.

---

### Scientific Context & Motivation
NSCLC is the dominant cause of lung cancer mortality, usually diagnosed at a late stage, and managed with platinum-doublet or immunotherapy combinations that often include bevacizumab. Intrinsic and acquired resistance is common, and dosing/scheduling in combinations is largely empirical, derived from average-patient trial results. Preclinical xenograft modeling (Schneider et al. 2019) had suggested that bevacizumab-induced transient vascular normalization/perfusion enhancement could be exploited by giving bevacizumab ahead of cytotoxics (predicted lead of $1.2$ days; >50% tumor reduction vs concomitant). No human-scale quantitative test of that hypothesis existed. The knowledge gaps addressed are: (1) a generalizable human clinical TGI model spanning many cytotoxics, a VEGF inhibitor, and an anti-DR5 antibody (apomab); (2) clinical estimates of acquired resistance rates versus exposure; (3) quantitative dynamics of bevacizumab-induced perfusion changes; and (4) a simulation platform for schedule optimization with sparse clinical tumor measurements.

---

## ⚡ Methodological Snapshot
The authors collated individual tumor longest-diameter measurements and dosing records from 11 phase 2-4 NSCLC trials (CSDR/Vivli). After curation, 2036 patients and 4701 tumors with at least three measurements were retained, 15% of which were reserved for external validation. Diameters were converted to volumes assuming a sphere, and each patient-tumor pair was treated as a distinct subject-occasion, with no distinction between within- and between-subject variability.

Exposure was derived from published population PK models for nine drugs (Table 2) with no IIV. PD candidates were Claret and Gompertz TGI models. The Gompertz model had the lower BIC and was refined with a reversible cell injury compartment, a transit-compartment death cascade, AUC-driven acquired resistance ($\lambda$ terms), drug-specific effect weights ($w$), and a delayed bevacizumab perfusion effect ($\tau$). Estimation used SAEM in Monolix 2020R1 with lognormal IIV, a logit-transformed $p$ and a combined error model.

Evaluation consisted of SAEM convergence, individual fits, residual diagnostics, VPC, a KS test of parameter distributions, and RSE/shrinkage assessment, followed by an external VPC and limited-sampling Bayesian prediction. Clinical trial simulations in Simulx 2023R1 varied the bevacizumab-pemetrexed-cisplatin gap from $0$ to $3$ days in $0.1$ day steps against concomitant dosing.

---

## 🏗️ Structural Model Breakdown
Tumor growth: a Gompertz model (Figure 1) in which unperturbed volume $V(t)$ grows at $\alpha$ with growth rate decay governed by $\beta$ (nutrient limitation); typical parameters imply a limiting diameter of ~$21$ mm (~$5 \times 10^{9}$ cells). Drug effect: cytotoxics move cells from $V(t)$ into a series of damage compartments ($Z_1 \ldots Z_n$) with transfer rate $kk$ ($28$ /day) until they leave the tumor volume as dead cells. The cytotoxic effect is proportional to drug concentration, tumor size and a drug-specific weight $w$ (e.g., pemetrexed $23.8$, carboplatin $0.257$, docetaxel $0.939$, gemcitabine $1.0$, erlotinib $0.62$, apomab $0.75$, cisplatin ~$0.917$ relative to carboplatin, paclitaxel ~$0.758$ relative to docetaxel). Acquired resistance: effect declines with cumulative exposure (AUC) through drug-specific $\lambda$ ($0.0007$-$0.0016$, bevacizumab $0.0164$). Reversible injury: a second compartment (the model's '$\rho$' pathway) holds cells that are injured but can return to growth with probability $p$ ($0.364$); required for bevacizumab and taxane behavior. Bevacizumab: acts through a $\gamma$ pathway (cytotoxic-like death, $w$ $0.727$) and a $\rho$ pathway (reversible injury, $w$ $1.39$ and $4.14$ in the table with differing labels), and enhances partner drug delivery after a delay $\tau$ of $0.254$ day. $kk_{inj}$ ($0.0746$) describes injury-state transfer. Residual error: combined additive ($0.0457$) plus proportional ($0.105$). PK: 1-3 compartment models with literature values and no IIV (Table 2). The equations (including the initial 'Equation (1)') are not present in the extracted text, so exact functional forms were not transcribed.

---

### Detailed Methodological Analysis

#### Modeling Approach
Semi-mechanistic NLME TGI model built on a Gompertz growth model ($\alpha$, $\beta$) with log-kill-style drug effects scaled by drug-specific weights ($w$), a second compartment for reversible cell injury (with recovery fraction $p$), and a death cascade through multiple transit compartments (rate $kk$). Acquired resistance is modeled as a function of AUC with drug-specific $\lambda$ terms. Bevacizumab acts with a delay $\tau$ (perfusion enhancement) and affects both growth limitation and enhanced delivery of cytotoxics. PK from literature models without IIV (Table 2). Software: Monolix Suite 2020R1 (Mlxtran) for estimation and Simulx 2023R1 for simulation. The exact equations are in the supplement/figure and not available in the extracted text.

#### Data Sources
Individual-level tumor longest diameters and dosing from 11 trials (phase 2: NCT00800202, AVF0757G, NCT01004250, NCT00312728, NCT00480831, NCT00700180; phase 3: NCT01364012, NCT00762034, NCT00806923; phase 4: NCT02596958, NCT00388206), obtained via CSDR then Vivli. 3686 patients potentially usable, 2586 with complete data (6197 tumors), and 2036 patients/4701 tumors after requiring at least three measurements. Data mostly from Roche and Eli Lilly trials; demographics not reported. Tumor measurements were sparse. BLQ handled with a $1$ mm detection limit. Early model development used 5-10% subsets.

#### Estimation Methods
SAEM in Monolix 2020R1, with initial values chosen by manual exploration and modified SAEM searches with simulated annealing on the eta terms. Lognormal IIV for all parameters except $p$ (logit link); initial tumor volume fixed to observed baseline; combined1 error model (additive $a$ plus proportional $b$). Model comparison via BIC (Gompertz vs Claret) and quality of fit/robustness of parameter estimates. Fisher information-based SEs/RSEs.

#### Model Evaluation
Diagnostics: SAEM convergence plots (Figure S1), individual fits (Figure S2), observations vs predictions and residual plots (Figure S3), tests of residual normality and centering, Pearson correlations between individual effects, Kolmogorov-Smirnov test for random effects, shrinkage and RSE assessment, VPC on the model-building data (Figure S4). External validation on the reserved 15% with fixed population parameters: VPC (Figure 2) and Bayesian individual predictions with first 1, 2, or 3 measurements compared with later observations (Figure 3). No bootstrap reported in the main text.

#### Covariate Analysis
No covariates (weight, BSA, sex, comorbidity, tumor location, biomarkers) were tested; the authors acknowledge this. Intrinsic resistance is represented implicitly by the distribution of drug-effect weights ($w$), and acquired resistance by exposure (AUC)-dependent $\lambda$ terms. Demographics were not reported, so clinical subgroup relevance cannot be assessed.

---

### Statistical Rigor Assessment
Strengths: a large dataset, formal structural comparison by BIC, comprehensive diagnostics, real external validation and limited-sampling forecasting. Concerns: (1) independence assumption across tumors within a patient and absence of within-subject variability inflates precision, so RSEs <8% (often <3%) are likely overoptimistic; (2) PK without IIV and fixed from literature, absorbing PK variability into PD IIV; (3) many PD IIV values are large (e.g., $3.4$-$3.6$), consistent with weak identifiability or inflation due to sparse data; (4) significant correlations were dismissed as type I errors owing to large power based on slopes near zero, without formal evaluation; (5) filtering to tumors with at least three measurements and some dropout likely biased (informative missingness) toward efficacy overestimation; (6) simulations are reported without uncertainty intervals (no parameter uncertainty propagation), and use averaged non-standard dosing; (7) no sensitivity analysis for $\tau$, $p$ or resistance structure; (8) 'average difference of 59.7%' and '11.7%' lack variability metrics and comparators. Overall the work is sound as a descriptive TGI model, but statistical uncertainty on scheduling predictions is under-characterized.

---

## 📊 Key Findings
Data: 3686 patients were potentially usable, 2586 had complete data (6197 tumors), and after requiring at least 3 tumor measurements, 2036 patients/4701 tumors remained. 15% was reserved for external validation. Structure: a Gompertz model outperformed the Claret model by BIC. The final model has acquired resistance driven by AUC, a second reversible-injury compartment (needed to capture bevacizumab and taxane effects), a multi-compartment irreversible death cascade, and a delayed bevacizumab effect. Parameter estimates (Table 3): $\alpha$ $0.00304$ /day (RSE 2.7%), $\beta$ $0.0398$ /day, $\tau$ $0.254$ day (~$6$ h), $kk$ $28$ /day, $p$ $0.364$, additive error $a$ $0.0457$ and proportional $b$ $0.105$. Drug effect weights were $w$ pemetrexed $23.8$ (highest), $w$ bevacizumab $4.14$ ($\rho$) and $0.727$ ($\gamma$), $w$ carboplatin $0.257$, $w$ docetaxel $0.939$, $w$ gemcitabine $1.0$; $\lambda$ values (resistance per AUC) ranged ~$0.0007$-$0.0016$, and ~$0.0164$ for bevacizumab ($\rho$). RSEs were <8%, with IIV values often large (e.g., $3.4$-$3.6$ for some weights). Implied Gompertz carrying capacity corresponds to ~$21$ mm diameter (~$5 \times 10^{9}$ cells), versus ~$124$ mm ($10^{12}$ cells) conventionally assumed. Validation: the external VPC (Figure 2) was good except for the lower prediction band; individual Bayesian prediction of final observation had a mean difference of 59.7% with one measurement and 11.7% with three (Figure 3). Simulations: $0.4$ day ($9.6$ h) was the best gap among $0$-$3$ days in $0.1$ day steps; 93.5% of virtual patients benefited relative to concomitant dosing, with 20.7% mean improvement in tumor reduction among them; $12$ h gave 15.7% and $24$ h gave 14.3% (Figure 4). The benefit disappeared beyond ~$5$ days per the Figure 4 caption. The optimum is within a factor of $3$ of the $1.2$ day mouse-derived estimate.

---

## 💡 Clinical & Regulatory Implications
The model supports the hypothesis that a modest stagger between bevacizumab and pemetrexed-cisplatin (optimum $9.6$ h; $12$ h and $24$ h gaps give 15.7% and 14.3% mean improvement in responders) may improve tumor reduction compared with concomitant administration, with benefit predicted to vanish beyond ~$5$ days. Practically, $12$-$24$ h gaps are easier to implement and capture most of the predicted benefit. This should currently inform trial design (future NSCLC bevacizumab trials should include staggered scheduling arms) rather than clinical practice. The forecasting results (11.7% error after 3 measurements) suggest potential for Bayesian individualization of therapy response prediction. From a regulatory perspective (MIDD), the work is a qualification of a TGI-based simulation platform, but would require covariates, uncertainty quantification, survival links, and inclusion of ICI-based first-line regimens (pembrolizumab, atezolizumab) to support decision-making in current SOC. Resistance parameters ($\lambda$) provide quantitative estimates relevant to scheduling and drug holiday considerations.

---

### Strengths & Limitations

#### Strengths
- Very large pooled individual-level human tumor dataset (11 trials, 2036 patients/4701 tumors in the final set) spanning many drugs and phases, via a data-sharing consortium (CSDR/Vivli)
- Biologically interpretable semi-mechanistic structure (Gompertz growth, exposure-driven acquired resistance, reversible injury, delayed perfusion effect) that is extensible by added terms
- Model selection by BIC between Gompertz and Claret and iterative structural refinement; reversible injury compartment was justified by both bevacizumab and taxane behavior
- True external validation on a reserved 15% with population parameters fixed, and a limited-sampling Bayesian forecasting test (1-3 points) that probes overfitting
- Direct link to prior preclinical work with a quantitative comparison of the optimal gap ($0.4$ vs $1.2$ days)
- Re-estimates a plausible Gompertz plateau (~$21$ mm / ~$5 \times 10^{9}$ cells), challenging the common $10^{12}$ cell assumption
- Open model code statement and explicit discussion of known weaknesses

#### Limitations (Acknowledged by Authors)
- Immune checkpoint inhibitor trials (pembrolizumab, atezolizumab etc.) could not be included in time, so current standard-of-care combinations are not covered
- No covariates (weight, BSA, sex, comorbidities) were tested; demographics are only minimally described
- Sparse, observer-dependent tumor measurements; resistance as a function of AUC is a crude heuristic that ignores patient-level pathophysiology
- Tumors were treated as independent subject-occasions, with no separation of within-subject from between-subject variability and no accounting for tumor location
- Initial tumor size fixed to observed values may have underestimated $\alpha$/$\beta$ IIV; sparse sampling and dropout likely biased toward overestimating efficacy and mildly inflated IIV
- PK between-patient variability was omitted because of unidentifiability
- The model is agnostic about the biological mechanism of bevacizumab synergy

#### Limitations (Expert Review)
- Treating multiple tumors per patient as independent observations understates standard errors; the very small RSEs (often <3%) are likely overconfident, and simulated uncertainty/IIV (especially for patient-level benefit proportions) is not propagated; no parameter-uncertainty simulation or bootstrap of simulation outcomes is shown
- Fixed literature PK without IIV (with several drugs from different populations, including apomab and erlotinib) means PK variability is absorbed into PD IIV, and simulated exposure variability is unrealistic; this could bias exposure-driven resistance and the delay/gap prediction
- The scheduling conclusion hinges on $\tau$ (~$6$ h), the bevacizumab effect structure, and the unverified perfusion-enhancement hypothesis; most trials used concomitant dosing (identifiability of sequencing effects is weak since no trial in the data tested staggered administration), so the optimal gap is an extrapolation
- The surrogate endpoint (final tumor size reduction) is not OS/PFS or RECIST response, and 20.7% mean improvement conditional on benefit, with 93.5% benefiting, may reflect small numerical differences; no uncertainty intervals or clinical relevance thresholds are reported
- Simulation design inconsistencies: pemetrexed 7 cycles vs cisplatin 3 cycles; non-standard cycle length (22 days) and averaged doses (not SOC); gap range stated as $0$-$3$ days yet Figure 4 discusses ~$5$ days; the direction of staggering (bevacizumab before vs after cytotoxics) is described ambiguously in the abstract/methods versus discussion
- Predicted 59.7% error after one tumor measurement is large; the 'little overfitting' conclusion is based on the trend rather than benchmarked against a null or simpler model; 15% split is probably patient-level but the stratification by trial/drug is not described
- Description of cumulative AUC resistance lacks a mechanism for drug-specific cross-resistance; the many drug-specific $w$ and $\lambda$ terms derive largely from combination data in which drugs are collinear, which raises identifiability questions despite low RSE
- Exclusion of tumors with <3 measurements and removal of suspected outliers/BLQ handling ($1$ mm limit) could bias toward responders/longer-surviving patients (informative dropout)
- Equations and some methodological detail (data processing, individual variation) are only in supplement; the main text omits them so the model is hard to reproduce from the paper alone; real data are not public

#### Generalizability
Generalizability is moderate for the model structure and low-to-moderate for the specific scheduling conclusion. The population is mostly advanced NSCLC trial participants treated with bevacizumab plus platinum-based chemotherapy; the cohort is not described demographically and excludes immunotherapy and targeted agents beyond erlotinib. The optimal gap is a model-based prediction for bevacizumab-pemetrexed-cisplatin that is not directly supported by clinical trial comparisons, and will need prospective testing. The platform is potentially useful for other TGI studies but needs PK/IIV, covariate and survival-linked extensions.

---

---

### Figures & Tables

- **Table 1**: List of the 11 trials (phases 2-4; $N$ from $91$ to $3998$) used for modeling with the therapeutics in each, plus six additional Vivli ICI-related studies not available in time.
  - *Significance*: Defines the data scope: bevacizumab-centered combinations with many cytotoxics, and absence of checkpoint inhibitors in the model, which limits relevance to current SOC.
- **Table 2**: Literature PK parameters (volumes, intercompartmental clearances, rate constants, clearance) for bevacizumab, cisplatin, pemetrexed, apomab, paclitaxel, carboplatin, gemcitabine, docetaxel, and erlotinib, used without IIV.
  - *Significance*: Documents that exposure inputs are fixed typical values (no PK IIV), a key assumption underlying AUC-based resistance and the schedule simulations.
- **Table 3**: Final model parameter estimates with SE, RSE, units and IIV: $\alpha$, $\beta$, $\tau$, $kk$, $p$, drug-specific $w$ and $\lambda$ terms, bevacizumab $\gamma$/$\rho$ terms, and error parameters $a$ and $b$.
  - *Significance*: Core quantitative result: resistance rates ($\lambda$), drug potency weights ($w$), the ~$0.25$ day bevacizumab delay ($\tau$), and the reversible-injury recovery fraction $p$; RSEs are all <8% but IIV is high for several parameters.
- **Figure 1**: Schematic of the systems pharmacology model: Gompertzian growth ($\alpha$, $\beta$), cytotoxic death cascade ($kk$) through damage compartments, reversible injury pathway, and bevacizumab perfusion delay ($\tau$).
  - *Significance*: Illustrates the model structure and how bevacizumab and cytotoxics act via distinct pathways, allowing readers to interpret parameters and extend the model.
- **Figure 2**: VPC on the 15% reserved external dataset showing median and 5th/95th percentile tumor longest diameter with 90% prediction intervals, without re-estimation.
  - *Significance*: Evidence of external predictive performance (good except for the lower band), supporting the use of the model for simulation.
- **Figure 3**: Individual Bayesian predictions after using only the first one, two, or three tumor measurements in the reserved data.
  - *Significance*: Shows forecasting performance improves from ~59.7% to ~11.7% mean error between prediction and final observation, supporting limited-sampling individualization and arguing against overfitting.
- **Figure 4**: Stacked bar chart of the percentage of simulated patients improving relative to concomitant dosing and magnitude of tumor reduction improvement, as a function of the bevacizumab-cytotoxic gap.
  - *Significance*: Source of the headline result: the optimum at $0.4$ day ($9.6$ h), 93.5% benefiting, 20.7% mean improvement; benefits vanish after ~$5$ days; this is the key figure for scheduling hypotheses.

---

### Code & Reproducibility Assessment
Partial. The authors state that model code has been made openly accessible and that model files were written in Mlxtran (Monolix 2020R1; simulations in Simulx 2023R1). Patient-level data come from Vivli/CSDR under license and are not public; only some simulated data are available on reasonable request, with Vivli permission. Equations and supplementary methods (Data S1, Figures S1-S4) were not available in the extracted text, so full reproduction from the paper alone is not possible, and re-running requires access to Vivli data. The need to re-derive PK inputs from literature (Table 2) is feasible.

---

### Supplementary Materials
Supplementary materials (Data S1: data processing and collation, NLME modeling, individual variation, model evaluation; Figures S1-S4: SAEM convergence, individual fits, goodness-of-fit/residual diagnostics, and the VPC) are referenced but were not available in the extracted text, so equations and detailed methodology could not be verified here.

---

### Future Directions
(1) Prospective or retrospective testing of staggered bevacizumab scheduling, ideally using a trial arm or imaging (DCE-MRI/perfusion) biomarkers of the vascular window to verify $\tau$ and the bevacizumab perfusion effect. (2) Incorporate immune checkpoint inhibitors (pembrolizumab, atezolizumab) and current SOC regimens, using the Vivli datasets that were unavailable. (3) Link TGI metrics to OS/PFS through joint models and RECIST endpoints. (4) Explicitly model tumor-level versus patient-level variability and location effects (hierarchical random effects) and estimate PK IIV with population PK-PD integration. (5) Add covariates (weight/BSA, sex, histology, biomarkers such as EGFR/PD-L1) and test alternative resistance mechanisms beyond AUC, such as clonal dynamics. (6) Propagate parameter uncertainty (bootstrap/Bayesian) into simulations and examine robustness of the optimal gap, cycle structure and dose variations. (7) Explore ML or hybrid AI-mechanistic extensions and adaptive/Bayesian individual dose-scheduling given the 3-measurement prediction results.

---

### Expert Commentary
This paper is a useful example of what pooled trial-level tumor size data can deliver: an extensible Gompertz-type TGI framework with drug-specific effect weights and exposure-driven resistance. The positive aspects are the external validation and the limited-sampling forecasting analysis, which are rarely shown in TGI papers and are directly relevant to adaptive dosing. My main concerns are in inference. First, the RSEs below ~3% for most parameters in a model with non-independent tumors, fixed PK and highly collinear combination regimens are not credible as a measure of precision; a bootstrap or a patient-level random effect would likely widen them considerably. Second, schedule optimization is an extrapolation: none of the contributing trials randomized sequencing, so $\tau$ and the bevacizumab effect structure are identified through concomitant dosing and variation in timing relative to measurements, and a $9.6$ h optimum arising from a roughly $6$ h delay is very sensitive to those assumptions. Third, summarizing benefit as the proportion of virtual patients with any improvement (93.5%) is a weak metric; one should show distributions, uncertainty bands, and thresholds of clinical significance, and ideally link to survival. Also note the inconsistent simulation design (7 vs 3 cycles, 22-day cycles) and the unclear direction of sequence. Teaching points: BIC-based structure selection in the presence of IIV, the need for reversible injury compartments for antiangiogenics/taxanes, and the importance of validating forecasts with few observations. Overall the platform has long-term value for the field, particularly if the authors share code and extend to immunotherapy; the clinical recommendation should wait for prospective evidence.

---

### Bottom Line
This is a large-scale, open-structure semi-mechanistic TGI model for NSCLC that quantifies acquired resistance, reversible injury and delayed bevacizumab effects, and generates a testable hypothesis that staggering bevacizumab around pemetrexed-cisplatin by roughly $0.4$ day ($9.6$ h) improves tumor reduction relative to concomitant dosing. Practitioners should treat the numerical optimum (and the 93.5%/20.7% figures) as hypothesis-generating, as the clinical dataset lacks staggered arms, PK is fixed without IIV, uncertainty in the simulations is not characterized, and the endpoint is a tumor size change rather than survival. The model structure, AUC-based resistance, and limited-sampling validation approach are worth borrowing, but the very low RSEs should be interpreted with caution given non-independence of tumors within patients.

---

### Fact-check corrections

[^fc-1]: **NUMERIC_MISMATCH** — original: “Lambda values range from 0.0007 to 0.0016 for the drugs.” → correction: “| λ apomab | 0.000656 | 1.35E-06 | 0.206 | — | 0.0877 | ... | λ bevacizumab,ρ | 0.0164 | 0.000619 | 3.79 | — | 1.69 |”
[^fc-2]: **CONTRADICTED** — original: “Demographics were not reported.” → correction: “Due to the massive effort of this study and semi-mechanistic aims, demographic descriptions of the dataset are limited in this manuscript.”
[^fc-3]: **UNSUPPORTED** — original: “Gaps of 12-24 h are easier to implement and capture most of the predicted benefit.” → correction: “The mean improvement in patients at the more practical gaps of 12 and 24 h was 15.7% and 14.3%, respectively.”
[^fc-4]: **UNSUPPORTED** — original: “Supporting MIDD decision-making would require covariates, uncertainty quantification, survival links and inclusion of ICI-based first-line regimens (pembrolizumab, atezolizumab).” → correction: “There are also several covariates, such as weight, body surface area, gender, and concomitant disease, which have not been included or tested in the model.”
[^fc-5]: **UNSUPPORTED** — original: “The lambda resistance parameters provide quantitative estimates relevant to scheduling and drug holiday considerations.” → correction: “λ parameters define the rate of acquired resistance versus exposure.”
[^fc-6]: **UNSUPPORTED** — original: “Fixed PK without IIV could bias exposure-driven resistance and the delay/gap prediction, and simulated exposure variability is unrealistic.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “The many drug-specific w and lambda terms derive largely from combination data in which drugs are collinear, raising identifiability questions despite low RSE.” → correction: “The precision of parameter estimates was extremely high (RSE < 8%) with low correlation between estimates.”
[^fc-8]: **UNSUPPORTED** — original: “The expert commentary states that RSEs below ~3% for most parameters are not credible as a measure of precision given non-independent tumors, fixed PK and collinear regimens.” → correction: “The precision of parameter estimates was extremely high (RSE < 8%) with low correlation between estimates.”
[^fc-9]: **UNSUPPORTED** — original: “Because no contributing trial randomized sequencing, tau and the bevacizumab effect structure are identified through concomitant dosing, and a 9.6 h optimum from a ~6 h delay is very sensitive to those assumptions.” → correction: “A delay of 9.6 h between pemetrexed-cisplatin and bevacizumab resulted in the greatest benefit to the virtual patients.”
[^fc-10]: **UNSUPPORTED** — original: “Summarizing benefit as the proportion of virtual patients with any improvement (93.5%) is a weak metric.” → correction: “At this gap, approximately 93.5% of patients benefited from a gap in sequential administration.”
[^fc-11]: **UNSUPPORTED** — original: “The practitioner should treat the numerical optimum and the 93.5%/20.7% figures as hypothesis-generating, since the clinical dataset lacks staggered arms.” → correction: “This work indicates that future trials in NSCLC with bevacizumab should test staggered sequential scheduling.”

---

## 📊 Figures

![Diagram of the systems pharmacology model. In the Gompertzian model of tumor growth, the unperturbed tumor grows at a rateαand is exponentially limited in growth by param]({{ site.baseurl }}/assets/digests/2026-11-28-optimizing-first-line-therapeutics-in-non-small-cell-lung-cancer-insights-from/figures/fig_01.jpg)

![Visual predictive check using 15% of the full dataset (Reserved set: external validation). The empirical median tumor longest diameter (central blue line) and upper and l]({{ site.baseurl }}/assets/digests/2026-11-28-optimizing-first-line-therapeutics-in-non-small-cell-lung-cancer-insights-from/figures/fig_02.jpg)

![Individual bayesian predictions after limited sampling. This test was used to assess overfitting in the model. The reserved 15% of data was reduced to three subsets, one ]({{ site.baseurl }}/assets/digests/2026-11-28-optimizing-first-line-therapeutics-in-non-small-cell-lung-cancer-insights-from/figures/fig_03.jpg)

![Impact of gap in scheduling on overall efficacy. This stacked bar chart is meant to help determine the gap where simulated patients saw the best improvement from delayed ]({{ site.baseurl }}/assets/digests/2026-11-28-optimizing-first-line-therapeutics-in-non-small-cell-lung-cancer-insights-from/figures/fig_04.jpg)