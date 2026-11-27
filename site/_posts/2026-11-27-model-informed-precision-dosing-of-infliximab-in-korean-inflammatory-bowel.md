---
layout: post
title: "Model-Informed Precision Dosing of Infliximab in Korean Inflammatory Bowel Disease Patients: External Validation of Population Pharmacokinetic Models."
date: 2026-11-27
authors: "Yoonjin Kim, Seung Hwan Baek, In-Jin Jang, Jae-Yong Chung"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70089"
paper_type: popk
tags: [popk, pediatrics]
excerpt_text: "This retrospective single-centre study externally validated the infliximab popPK models in the free TDMx MIPD dashboard in 199 Korean IBD patients (142 adults, 57 children). The Passot model was best for adults and became acceptable with one prior trough, while none of the seven pediatric models was clinically acceptable. It is useful for anyone planning to implement TDMx or other MIPD tools in a new population."
pdf_path: "/assets/digests/2026-11-27-model-informed-precision-dosing-of-infliximab-in-korean-inflammatory-bowel/PMx_ModelInformed_Precision_Dosing_of_Inflix_20261127.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This retrospective single-centre study externally validated the infliximab popPK models in the free TDMx MIPD dashboard in 199 Korean IBD patients (142 adults, 57 children). The Passot model was best for adults and became acceptable with one prior trough, while none of the seven pediatric models was clinically acceptable. It is useful for anyone planning to implement TDMx or other MIPD tools in a new population.

---

### Executive Summary
The authors externally evaluated three adult and seven pediatric infliximab popPK models from TDMx against routine-care data from Seoul National University Hospital (2019-2023; 294 adult and 158 pediatric concentrations, mostly troughs). Evaluation used NONMEM-coded models (checked against TDMx output), MPE/MAE/rRMSE, GOF plots, pcVPC and NPDE. All models showed positive bias (MPE >20%). The Passot adult model performed best (MPE 26.4%, MAE 1.1 mg/L, rRMSE 159.0%), and all pediatric models failed (MPE 30.4-143.4%, MAE 1.4-2.6 mg/L, rRMSE 96.3-564.0%). Two sensitivity analyses looked at data availability. Assuming all patients were ATI positive improved prediction, probably reflecting model positive bias in a reactive-TDM population rather than true ATI prevalence. Adding previous troughs improved adult predictions, and the Passot model reached acceptable accuracy with one prior trough (MPE 17.5%, MAE 1.8 mg/L, rRMSE 80.3%). Pediatric models stayed unacceptable even with two prior troughs. The paper is a practical example of why local external validation should precede MIPD deployment, and it flags a gap in pediatric infliximab modelling.

---

### Scientific Context & Motivation
Infliximab underexposure drives loss of response in IBD, and the usual target trough is above 5 mg/L. Empirical or flowchart dose adjustment struggles with the large between-patient PK variability driven by albumin, body weight, immunomodulators and ATI. MIPD combines popPK priors with Bayesian estimation, and TDMx is a free online platform that removes cost barriers. The models in TDMx were developed mostly in predominantly Caucasian or unspecified cohorts, and their transferability to Korean patients was unknown. Korean practice also differs: TDM is reactive (measured at suboptimal response or switching) and ATI is tested only at physician discretion when the trough is below 3 mg/L, so data on ATI and prior concentrations are sparse. The paper addresses (i) which TDMx models fit Korean adults and children, and (ii) how missing ATI information and the number of prior concentrations affect predictive performance.

---

## ⚡ Methodological Snapshot
This was a retrospective external validation using EMR data from Seoul National University Hospital (2019-2023). Intravenous infliximab patients with at least one quantifiable concentration were included. The infliximab popPK models implemented in TDMx (three adult and seven pediatric after excluding models needing unavailable covariates) were recoded in NONMEM 7.4, with agreement against TDMx checked.

Model performance was assessed with MPE (bias, 95% CI), MAE and rRMSE (precision), GOF plots for typical and individual predictions, pcVPC from 1000 Monte Carlo simulations, and NPDE tests (Wilcoxon, Fisher variance, Shapiro-Wilk, with a global test). Clinical acceptability used an MPE threshold of $\pm 20\%$.

Two scenario analyses used subsets: an ATI-effect set (at least 2 troughs, $n=74$) comparing original ATI information (unmeasured as negative) with all-positive ATI for five ATI-covariate models, and a concentration-effect set (at least 3 troughs, $n=33$) predicting $TC_0$ with 0, 1 or 2 previous troughs through Bayesian individual predictions.

---

## 🏗️ Structural Model Breakdown
The paper does not re-estimate models, so no new structural model is reported. The evaluated models were mostly two-compartment with first-order elimination and linear PK (infliximab IV), except the Passot adult and pediatric models and the Petitcolin model, which were one-compartment. Clearance covariates most often included ATI status, serum albumin and body weight, and body weight was the main covariate on volume. Adult models had IIV below 40% (except Aubourg), while pediatric models had greater IIV (Dubinsky and Wojciechowski about 110%; Bauman clearance IIV 18.7%). Full structures and parameter values are in Table S2 and the NONMEM code in Data S1, which were not available in the provided text. One-compartment pediatric models correlated better with observations than two-compartment ones.

---

### Detailed Methodological Analysis

#### Modeling Approach
Existing published popPK models (adult: Aubourg, $Passot_{adult}$, Ternant; pediatric: Bauman, Dubinsky, Fasanmade_combined, Fasanmade_pediatric, Passot_pediatric, Petitcolin, Wojciechowski) were coded in NONMEM 7.4. Most were two-compartment models; Passot (adult and pediatric) and Petitcolin were one-compartment. Software: NONMEM 7.4, Pirana 2.9.7, PsN 5.3.0, Python 3.9 for exploration and plotting.

#### Data Sources
Retrospective EMR data (clinical data warehouse) of IBD patients treated with IV infliximab at Seoul National University Hospital, Jan 2019-Dec 2023, LLQ 0.1 mg/L. 199 patients: 142 adults (294 concentrations), 57 children (158 concentrations). Data included demographics, IBD type, dosing, labs, concomitant drugs, ATI status and actual sampling and administration times. Troughs were defined within 2 days before next dose, peaks within 2 days after, others intermediate. Infliximab measured by ELISA (LLQ 0.1, ULQ 48.0 mg/L); ATI by ELISA (LLQ 2.5, ULQ 119.0 ng/mL).

#### Estimation Methods
No model re-estimation was performed. Predictions were population (typical) and individual (empirical Bayes, MAP-type) predictions from the fixed published models, with individual predictions conditioned on available prior concentrations in the scenario analyses.

#### Model Evaluation
GOF plots with LOESS; pcVPC (n=1000 simulations, 5th/50th/95th percentile with 95% CIs); NPDE distribution tests (Wilcoxon signed-rank for mean 0, Fisher variance test for variance 1, Shapiro-Wilk for normality, global adjusted p, significance 0.05) with histogram, NPDE vs IPRED and vs time. Predictive metrics MPE, MAE, rRMSE with MPE CIs from standard error and a $\pm 20\%$ MPE acceptability threshold. Scenario analyses for ATI and prior concentrations.

#### Covariate Analysis
No covariate model building was done, since models were fixed. Covariates required by each model (body weight, albumin, ATI, immunomodulator use, etc.) were taken from EMR. Sex, body weight and IBD type were treated as time-invariant (weight from last sample), while albumin, CRP, ESR, ATI status and concomitant drugs were time-varying. Missing continuous values were imputed by LOCF, and missing categorical values by the most frequent category. The Dreesen and Xiong models were excluded because fecal calprotectin, CDAI and neutrophil CD64 ratio were unavailable. The ATI effect was assessed by contrasting all-negative-if-unmeasured and all-positive assumptions.

---

### Statistical Rigor Assessment
The use of multiple complementary diagnostics (bias, precision, GOF, pcVPC, NPDE with a global test) is appropriate for external validation. The weaknesses are mostly in sample size and data handling: the sensitivity analyses used 74 and 33 patients (11 children), with wide MPE CIs and no formal comparison between models or scenarios. MPE CIs from standard errors can be unreliable with skewed percentage errors and a few extreme values (e.g. rRMSE up to 1022%). NPDE tests with repeated measures per patient assume independence. BLQ samples were excluded (M1) with the justification of under 5%, but exclusion is biased toward higher concentrations. LOCF and mode imputation introduce uncertainty not propagated. The all-ATI-positive sensitivity analysis is an extreme scenario, so the conclusion is limited to showing bias direction. No multiplicity adjustment was applied across models and metrics. Metrics such as MPE (relative to observed) are sensitive to low concentrations, which could inflate positive bias in a low-trough population; alternative metrics (e.g. median prediction error, log-scale or normalized error) were not reported.

---

## 📊 Key Findings
Dataset: 142 adults (294 concentrations, 67.7% troughs) and 57 children (158 concentrations, 86.7% troughs) (Table 1). ATI was measured in 24.6% of adults and 82.5% of children, with 2.1% and 14.0% positive. No peak samples were available. Validation (Table 2): all 95% CIs of MPE excluded 0, indicating positive bias (MPE >20%). Adult models: Aubourg MPE 29.0%, MAE 1.1, rRMSE 200.0%; $Passot_{adult}$ 26.4%, 1.1, 159.0%; Ternant 37.0%, 0.8, 294.5%. Pediatric models: Bauman 143.4% (MAE 2.6, rRMSE 564.0%); Dubinsky 31.7%; Fasanmade_combined 32.4% (rRMSE 96.3%); Fasanmade_pediatric 50.6%; Passot_pediatric 45.2%; Petitcolin 30.7% (MAE 1.4); Wojciechowski 30.4%. Aubourg underpredicted the 5th percentile in the pcVPC. NPDE tests identified Passot as most suitable for adults, and no pediatric model had NPDE following $N(0,1)$ (Figure 2, Table S3). In pediatric GOF plots (Figure 1), individual predictions overpredicted below 20 mg/L and underpredicted above 20 mg/L. One-compartment pediatric models (Passot_pediatric, Petitcolin) correlated better than two-compartment ones, and high-IIV models (Dubinsky, Wojciechowski, about 110%) appeared to fit better, which may mask structural deficiency. ATI sensitivity (74 patients with at least 2 troughs; Figure 3): treating all patients as ATI positive reduced MPE from 19.3-293.5% to 5.8-190.9%, MAE from 2.0-4.2 to 1.8-3.4 mg/L, and rRMSE from 118.7-1022.2% to 87.9-738.1%. The gain came mainly from patients who seroconverted without concentration measurements during seroconversion, but also appeared in non-seroconverting patients, consistent with model positive bias. Previous-concentration analysis (33 patients with at least 3 troughs; Figure 4): a priori predictions were unacceptable for all models (adult MAE 2.8-3.2 mg/L; pediatric MAE 5.9-9.6 mg/L). One prior trough greatly improved adult models, and with two all adult models were acceptable (MPE within $\pm 20\%$, 95% CI including 0). Passot with one prior trough had MPE 17.5% (95% CI -1.9 to 95.0), MAE 1.8 mg/L, rRMSE 80.3%. Pediatric models stayed unacceptable (MAE 4.3, 3.3 and 3.7 mg/L for Bauman, Dubinsky and Petitcolin with two priors), and rRMSE rose for several models when moving from one to two priors.

---

## 💡 Clinical & Regulatory Implications
In adult Korean IBD patients the Passot model can reasonably be used in TDMx for MIPD, preferably after at least one previous trough concentration is available, and with local monitoring of bias. A priori dosing predictions from these models should not be used. The pediatric TDMx infliximab models should not be relied on in this population until improved or locally validated. Where ATI testing is unavailable, a conservative (lower predicted exposure) assumption may reduce overprediction, but this is a bias-compensation heuristic and not a validated approach. The data support moving from reactive to proactive TDM with regular infliximab and ATI measurement, as missed seroconversion causes large overprediction. From a regulatory and implementation perspective, the paper supports requiring local external validation before deploying a MIPD tool, and it provides a template for such validation. It does not give dose recommendations or clinical outcome data.

---

### Strengths & Limitations

#### Strengths
- Pre-implementation external validation of a freely available MIPD tool in an under-represented East Asian population, with immediate practical relevance.
- Complementary validation tools: accuracy and precision metrics, GOF, pcVPC (1000 simulations) and NPDE with a global test.
- NONMEM implementations were verified against TDMx outputs (Figure S3), supporting fidelity to the deployed tool.
- Realistic evaluation of data-poor scenarios (missing ATI, 0/1/2 prior concentrations) that reflect reactive TDM practice.
- Both adult and pediatric populations assessed, exposing clear pediatric failure and the problem of high IIV masking structural misfit.
- Models and code made available (NONMEM code in Data S1), and the authors state a clear recommendation (Passot for adults).

#### Limitations (Acknowledged by Authors)
- Retrospective single-centre data, so generalizability to the broader Korean IBD population is limited.
- Reactive sampling practice likely enriched for low-exposure patients and may have caused over-prediction (positive bias).
- Body weight was treated as time-invariant (value at last sample), which may harm pediatric predictions.
- Mean interval between measurements exceeded 1 year in adults, which may have degraded predictions.
- Applicability to proactive MIPD is uncertain and needs prospective evaluation.
- Only a small proportion of patients had ATI or concentration data.

#### Limitations (Expert Review)
- Small subsets for the key sensitivity analyses (74 patients for ATI, 33 for prior concentrations, only 11 children), giving very wide MPE CIs (e.g. -1.9% to 95.0%) and limited power; claims of acceptable performance with one prior trough rest on 22 adults.
- The Passot adult model's MPE (26.4%) exceeded the paper's own $\pm 20\%$ acceptability threshold in the overall validation, so 'best' is relative; adult models were judged usable mainly on MAE and after prior concentrations.
- Excluding BLQ samples (M1) and using LOCF/mode single imputation for covariates can bias results; time-varying albumin, ATI and weight were imputed.
- Treating unmeasured ATI as negative in the baseline analysis and as positive in the sensitivity analysis are extreme assumptions; ATI-positive prevalence was very low (2-14%), so the 'all ATI positive' improvement is likely a bias-compensation artefact, not evidence of a valid strategy.
- Reactive sampling introduces confounding by indication (low exposure, high inflammation, ATI risk), and the dataset has no peak samples and few intermediate samples, so the validation of distribution-phase structure is limited.
- Interval between concentrations was long, so 'prior concentration' predictions in effect extrapolate across changing dose, weight and disease state; dose-change records were only partly handled (about 12% of samples near dose changes).
- No dose recommendation or target attainment/clinical outcome evaluation (e.g. proportion achieving trough >5 mg/L or utility vs. standard dosing).
- Pediatric weight misspecification and assay differences (ELISA vs. assays used for model development) were not quantified as causes of failure, so reasons for failure remain speculative, and no model re-estimation or bias correction (e.g. adding correction factors) was tried.
- Dreesen and Xiong models were excluded for missing covariates, leaving only three adult models, and the Passot model superiority was not tested formally against others.

#### Generalizability
Findings are specific to one Korean tertiary hospital with reactive TDM, East Asian ethnicity (100%) and a Crohn's-dominant population (80-88%). The adult conclusion (Passot best, prior troughs needed) is plausibly transferable to similar settings but needs local checks. The pediatric failure may also reflect weight handling and sample timing, so it should not be over-generalized to proactive or prospectively collected pediatric data. The paper's main generalizable message is the methodological one: validate locally before deployment.

---

---

### Figures & Tables

- **Table 1**: Baseline characteristics of the 142 adult and 57 pediatric validation patients: demographics, IBD type, ATI status, concomitant medications, laboratory values, sample counts, sampling phase and trough distribution.
  - *Significance*: Shows the reactive-TDM data structure (most patients 1-2 samples, no peaks, low median trough of 3.3 mg/L, ATI mostly unmeasured in adults), which underpins the interpretation of positive bias.
- **Table 2**: Predictive performance (MPE with 95% CI, MAE, rRMSE) of each adult and pediatric popPK model on the full validation set.
  - *Significance*: Core result: all models were positively biased; Passot was best for adults, and all pediatric models were unsuitable (Bauman worst, MPE 143.4%, rRMSE 564.0%).
- **Figure 1**: GOF plots of observed vs typical (a) and individual (b) predicted concentrations for each model with identity and LOESS lines.
  - *Significance*: Shows weak typical-prediction correlation, adequate individual fit for adults, and the pediatric over/under-prediction pattern around 20 mg/L.
- **Figure 2**: pcVPCs for each model (1000 simulations) with observed vs simulated 5th, 50th and 95th percentiles.
  - *Significance*: Simulation-based evidence that pediatric models deviate substantially, and that Aubourg underpredicts the 5th percentile.
- **Figure 3**: Effect of ATI assumptions (original vs all-ATI-positive) on MPE, MAE and rRMSE in 50 adults and 24 children.
  - *Significance*: Demonstrates that assuming ATI positivity improved metrics, driven by seroconverting patients without measurements and by inherent positive bias.
- **Figure 4**: Effect of providing 0, 1 or 2 previous trough concentrations on MPE, MAE and rRMSE in 22 adults and 11 children, with $\pm 20\%$ acceptable MPE lines.
  - *Significance*: Shows that prior concentrations make adult predictions acceptable (Passot with one prior), while pediatric models stay unacceptable.
- **Table S3**: NPDE test results (Wilcoxon, Fisher variance, Shapiro-Wilk, global adjusted p-values) for each model, referenced in the text.
  - *Significance*: Statistical basis for choosing Passot as best adult model and for concluding that no pediatric model followed N(0,1); not available in the provided text.

---

### Code & Reproducibility Assessment
NONMEM code for all evaluated models is stated to be provided in Data S1 and agreement with TDMx was confirmed (Figure S3), which supports reproducibility of the model implementations. The patient data are retrospective EMR data and are not stated to be available. Software was NONMEM 7.4, PsN 5.3.0, Pirana 2.9.7 and Python 3.9. Supplementary materials were not available in the provided text, so this could not be verified.

---

### Future Directions
Develop and validate pediatric infliximab popPK models tailored to Korean/East Asian children, with time-varying weight and properly characterised ATI. Run prospective, multicentre validation under proactive TDM, including sampling at peak and intermediate times, with clinical outcomes and target attainment (trough >5 mg/L). Test Bayesian updating with model re-estimation, bias correction, or priors adapted to the local population. Handle ATI more rigorously (e.g. mixture or probabilistic ATI status, or estimating ATI risk) rather than the all-negative or all-positive extremes. Evaluate how sampling interval and number of prior concentrations affect forecast accuracy, with larger sample sizes. Compare TDMx with other dashboards and assess the costs and benefits of MIPD in routine care.

---

### Expert Commentary
This is a useful, pragmatic external validation paper. The most instructive findings are the pediatric result and the ATI sensitivity analysis. High-IIV models can look good in individual-level GOF plots because large $\eta$s absorb structural misspecification, so the lowest-IIV model (Bauman) looked worst, and individual fit should not be mistaken for predictive validity. The 'assume ATI positive' result is a bias-compensation artefact: if the whole population is over-predicted, any covariate that lowers clearance-adjusted exposure improves the metrics. I would have liked to see a population-level correction (e.g. a scaling factor on $CL$) tested, and an evaluation using forecasting that is truly prospective in time (predict next trough from past data only, with dosing history). The MPE >20% for the best adult model, together with CIs spanning zero in tiny subsets, means the 'acceptable' label rests on thin evidence. The MIPD teaching points are: validate locally, check bias and precision with CIs, look at pcVPC/NPDE, and test the information scenarios (prior levels, covariates) that match your clinical data flow. The reactive-sampling context is also a reminder that retrospective TDM data are selection-biased toward underexposed patients.

---

### Bottom Line
For adult Korean IBD patients, the Passot model in TDMx is the most defensible choice, and it becomes clinically acceptable once at least one prior trough is available, whereas a priori prediction is not acceptable. The pediatric TDMx infliximab models were unsuitable in this dataset, so they should not be used for MIPD there without further local validation or new model development. Assuming ATI positivity improves fit mainly because of a model-wide positive bias and should not be treated as a recommended practice. Practitioners should validate popPK models in their own population, report bias with confidence intervals, and be wary of high-IIV models that mask structural misfit.

---

---

## 📊 Figures

![Comparison of the predicted and observed concentrations with each population pharmacokinetic model. Goodness-of-fit plots showing measured concentrations versus (a) typic]({{ site.baseurl }}/assets/digests/2026-11-27-model-informed-precision-dosing-of-infliximab-in-korean-inflammatory-bowel/figures/fig_01.jpg)

![Prediction-corrected visual predictive checks (pcVPCs) for each population pharmacokinetic model. The circles represent observed concentrations, while the solid lines den]({{ site.baseurl }}/assets/digests/2026-11-27-model-informed-precision-dosing-of-infliximab-in-korean-inflammatory-bowel/figures/fig_02.jpg)

![Effect of antibodies toward infliximab (ATI) on the predictive performance of each population pharmacokinetic model. The predictive performance of each population pharmac]({{ site.baseurl }}/assets/digests/2026-11-27-model-informed-precision-dosing-of-infliximab-in-korean-inflammatory-bowel/figures/fig_03.jpg)

![Effect of previous infliximab concentration on the predictive performance of each population pharmacokinetic model. The predictive performance of each population pharmaco]({{ site.baseurl }}/assets/digests/2026-11-27-model-informed-precision-dosing-of-infliximab-in-korean-inflammatory-bowel/figures/fig_04.jpg)