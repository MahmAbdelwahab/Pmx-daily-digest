---
layout: post
title: "Evaluation of the PK/PD Changes on MASLD-Related Population-An Example From Simultaneous Acetaminophen Parent-Metabolite PBPK/PD Modeling."
date: 2026-11-23
authors: "Shanshan Zhao, Lan Zhang"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70161"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "The authors build a GastroPlus parent-metabolite PBPK model for acetaminophen (APAP) covering APAP-glucuronide, APAP-sulfate, NAPQI, APAP-cysteine and APAP-mercapturate. They extrapolate it to MASLD-spectrum physiologies (overweight, obese, NAFLD, NASH, Child-Pugh A-C cirrhosis) and link it to a sigmoid Emax pain-relief model. Of interest to PBPK modelers working on special populations and liver disease, though validation is thin and the PD component rests on a borrowed model with no disease-specific data."
pdf_path: "/assets/digests/2026-11-23-evaluation-of-the-pkpd-changes-on-masld-related-population-an-example-from/PMx_Evaluation_of_the_PKPD_Changes_on_MASLDR_20261123.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
The authors build a GastroPlus parent-metabolite PBPK model for acetaminophen (APAP) covering APAP-glucuronide, APAP-sulfate, NAPQI, APAP-cysteine and APAP-mercapturate. They extrapolate it to MASLD-spectrum physiologies (overweight, obese, NAFLD, NASH, Child-Pugh A-C cirrhosis) and link it to a sigmoid Emax pain-relief model. Of interest to PBPK modelers working on special populations and liver disease, though validation is thin and the PD component rests on a borrowed model with no disease-specific data.

---

### Executive Summary
This paper presents what is described as the first PBPK/PD framework for the MASLD spectrum, using APAP as a probe. A literature meta-analysis of APAP and metabolite PK was followed by a healthy-adult PBPK model built stepwise: IV data fixed $V_{ss}$ ($68.46$ L) and $CL$ ($21.18$ L/h), then oral data, then sequential metabolite models (glucuronide and sulfate first, then APAP-cys and APAP-merc, with NAPQI inferred from the up- and downstream species). Predicted $C_{max}$ and $AUC$ mostly fell within 2-fold of observed values. The healthy model was then applied unchanged to the GastroPlus built-in MASLD physiologies using four published studies. Predictions showed lower weight- and dose-normalized exposure of APAP and its metabolites in obesity and NASH, a non-monotonic pattern in cirrhosis, and consistently lower NAPQI exposure that stayed very low. Coupling to a sigmoid Emax model ($E_0 = 0$, $E_{max} = 3.898$, $EC_{50} = 1.612$ ug/mL, Hill = $1.36$) suggested that peak pain relief is preserved but time to peak shifts (about $0.49$ h in NAFLD, $0.93$ h in NASH, up to $0.97$ h in Child-Pugh C). The work is a useful hypothesis-generating exercise. Its conclusions are limited by sparse and heterogeneous validation data, unquantified NAPQI predictions, no GSH dynamics, no transporters, and a PD model taken from chronic pain patients, so clinical dosing inferences are not supported.

---

### Scientific Context & Motivation
MASLD affects roughly a quarter to a third of adults worldwide, yet clinical PK data in MASLD, NASH and cirrhosis are scarce and mixed, and it is unclear how disease-related changes in enzymes, blood flow and body composition affect exposure. APAP is the most widely used OTC analgesic, but whether it is safe in MASLD is debated, with some sources calling it safe at therapeutic doses in chronic liver disease and others describing susceptibility to toxicity. Few PK studies exist in MASLD populations, and APAP's analgesic PD has never been evaluated in them. Prior APAP PBPK models typically simplify metabolism, include few metabolites, or lack validation in special populations. The gap addressed is a mechanistic, simultaneous parent-metabolite model that can project exposure to the parent, the major conjugates and the toxic intermediate across the MASLD spectrum, and connect exposure to an analgesic outcome, as a template for drug development in MASLD.

---

## ⚡ Methodological Snapshot
A PubMed meta-analysis of single-dose APAP studies (before March 2025) compiled reported PK parameters for healthy adults and MASLD-related populations (overweight through Child-Pugh cirrhosis), with data processed in R 4.2.2. The healthy-adult PBPK model was built in GastroPlus 10.1 using PBPKPlus, with $K_p$ by the Lukacova method (perfusion-limited tissues), IV data defining $V_{ss}$ ($68.46$ L) and $CL$ ($21.18$ L/h) by NCA, then oral data, then metabolite models fitted sequentially with parent parameters fixed.

After healthy-adult evaluation (2-fold error), the model was applied without modification to the software's PEAR physiologies for overweight, obese, NAFLD, NASH and cirrhosis Child-Pugh A, B and C, and compared with observed data from four studies. PD was a sigmoid Emax model on plasma APAP concentration, with parameters taken from a chronic pain study, to predict pain relief scores (0-10).

---

## 🏗️ Structural Model Breakdown
APAP is given orally or IV to a whole-body PBPK with perfusion-limited tissues. Absorption is handled by the GastroPlus ACAT framework for oral forms, and $K_p$ is by the Lukacova method; $f_{up}$ and $R_{bp}$ are scaled by built-in functions (APAP $f_{up}$ $82\%$, $R_{bp}$ $1.09$). Metabolism is described by saturable Michaelis-Menten kinetics. APAP forms APAP-glu through UGT1A1, UGT1A9 and UGT2B15 (largest $V_{max}$, with high $K_m$ of $835$-$3494$ mg/L, in liver and enterocytes), APAP-sul through SULT1A1, 1A3, 1E1 and 2A1 ($K_m$ $227$-$559$ mg/L), and NAPQI through CYP1A2, 2C9, 2C19, 2D6, 2E1 and 3A4 ($K_m$ $19.8$-$611$ mg/L; CYP2E1 $V_{max}$ $5.359 \times 10^{-5}$ (mg/s)/mg). NAPQI is converted to APAP-cys via GSTA1 ($K_m$ $3.099$ mg/L, $V_{max}$ $9090$ (mg/s)/mg), and APAP-cys is converted to APAP-merc via GSTM ($V_{max}$ $3 \times 10^{-5}$ (mg/s)/mg). A small fraction of APAP is excreted unchanged. Each metabolite has its own PBPK model (molecular weight, logP, pKa, solubility, permeability, $f_{up}$, $R_{bp}$; NAPQI logP fitted to 2), connected through enzyme kinetics. The total systemic $CL$ of $21.18$ L/h and $V_{ss}$ of $68.46$ L were set from IV data, and the in vivo unbound intrinsic hepatic $CL$ was backcalculated by the well-stirred model assuming linear PK. PD: sigmoid Emax with $E_0 = 0$, $E_{max} = 3.898$, $EC_{50} = 1.612$ ug/mL and Hill coefficient = $1.36$ on plasma APAP concentration, with no effect compartment or hysteresis. Disease states are encoded by GastroPlus physiologies (overweight, obese, morbidly obese, NAFLD, NASH, Child-Pugh A-C) that change anatomy, physiology and enzyme abundance. The specific changes are not reported.

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole-body PBPK in GastroPlus 10.1 (PBPKPlus, Physiology, PKPlus, PD modules), perfusion-limited tissues with $K_p$ estimated by the Lukacova method (with Poulin and Theil extracellular options for some metabolites). Parent and five metabolites (APAP-glu, APAP-sul, NAPQI, APAP-cys, APAP-merc) are linked via enzyme kinetics (Michaelis-Menten $V_{max}/K_m$ for UGT1A1/1A9/2B15, SULT1A1/1A3/1E1/2A1, CYP1A2/2C9/2C19/2D6/2E1/3A4, GSTA1, GSTM), in liver and enterocytes where applicable. Hepatic clearance is based on the well-stirred model. Transporters and GSH dynamics were excluded. PD: sigmoid $E_{max}$ on plasma APAP.

#### Data Sources
Literature PK data for APAP and metabolites from healthy adults (IV and oral single doses, doses from hundreds of micrograms to several grams), digitized with WebPlotDigitizer. The MASLD external dataset comprises four published studies, each with a control and at least one disease group (overweight/obese, NAFLD, NASH adolescents 12-18 years, and cirrhosis mild-moderate and severe). Only one study (NAFLD/NASH) reported APAP-glu and APAP-sul. PD benchmark: pain relief scores in chronic pain patients (Shinoda). Physicochemical parameters came from literature, PubChem, ADMETlab 3.0 and other tools.

#### Estimation Methods
No formal statistical estimation of the PBPK parameters. $V_{ss}$ and $CL$ were obtained by NCA of IV data; $V_{max}$ values were inferred or tuned manually by 'coarse and fine adjustment' with visual comparison to observed profiles; $K_m$ mostly from literature. Metabolites were fitted in order (APAP-glu and APAP-sul, then APAP-cys, then APAP-merc), with NAPQI adjusted forward from APAP and backward from APAP-cys/merc. Not an NLME or Bayesian approach.

#### Model Evaluation
Visual predicted versus observed profile comparison, ratio of predicted to observed $C_{max}$, $AUC_{0-t}$ and $AUC_{0-\infty}$ with 2-fold error criterion (0.5-2 window), and goodness-of-fit plots, in healthy adults (Figure 3) and the MASLD groups (Figure 4). Predicted trends were also compared qualitatively with the meta-analysis (Figure 1). No VPCs, bootstrap, sensitivity analysis or virtual-population variability. NAPQI could not be evaluated. External validation in MASLD used only four studies.

#### Covariate Analysis
No statistical covariate analysis. Covariates enter through GastroPlus physiologies (age, weight, height, BMI, race, sex, health status) and built-in ontogeny/disease changes in anatomy, physiology and enzyme abundance, used without manual modification. Disease status is therefore treated as a physiology selection rather than an estimated covariate effect.

---

### Statistical Rigor Assessment
Evaluation is purely descriptive: visual overlays and 2-fold ratio checks. There are no CIs, no variability, no virtual population simulations, no bootstrap or sensitivity analysis, and no quantitative summary (e.g., GMFE, % within 2-fold by analyte or group). The sample of disease studies is very small (four studies), and several groups lack metabolite data. A 2-fold criterion is generous for APAP and can hide systematic bias. Healthy data were used for both calibration and evaluation, and $V_{max}$ values were tuned manually with no identifiability assessment. The meta-analysis pooled reported means without weighting, heterogeneity testing, or adjustment for dose and assay, and the authors themselves state that no consistent trend can be identified. Digitized data and different bioanalytical methods add noise. Missing weight/age data were imputed with default or 70 kg values. The PD inference (time to peak) is based on point predictions with no uncertainty, derived from a PD model not validated in MASLD.

---

## 📊 Key Findings
1) Literature meta-analysis (Figure 1, Figure S1): in healthy adults, $C_{max}$ and $AUC$ rise with dose for APAP, APAP-glu and APAP-sul, with APAP-glu the largest and APAP-merc the smallest. $CL$ correlates positively with body weight, and metabolites have longer $T_{max}$ and $T_{1/2}$ than the parent. In MASLD-related groups, higher BMI appeared to lower normalized $C_{max}$, $V_d$, $T_{max}$ and $T_{1/2}$ and raise $CL$, while cirrhosis showed lower $V_d$ and $T_{max}$ and longer $T_{1/2}$. The authors acknowledge that no consistent trend emerges because of data sparsity. 2) Healthy PBPK model (Table 1, Figure 3): $V_{ss}$ $68.46$ L and $CL$ $21.18$ L/h were derived from IV data. Most predicted/observed $C_{max}$ and $AUC$ ratios fell within 0.5-2, though some APAP-glu $AUC_{0-t}$ values (2 of 8) were overpredicted and several metabolites were overestimated. NAPQI could not be validated because there are no in vivo concentration data. 3) MASLD extrapolation (Figure 4): predictions matched observed profiles from four studies within 2-fold. Normalized exposures of APAP and metabolites were lower in obesity and NASH. In NAFLD, APAP, APAP-glu, APAP-sul and NAPQI fell while APAP-cys and APAP-merc rose. In cirrhosis, APAP $C_{max}$ and $AUC$ were higher in Child-Pugh A and $C_{max}$ fell with severity while $AUC_{0-\infty}$ rose. Conjugate exposures were higher in Child-Pugh A and fell with severity, and NAPQI, APAP-cys and APAP-merc declined with severity. Predicted $V_{ss}$ and $CL$ rose with BMI and fell with cirrhosis severity, with $T_{1/2}$ rising in cirrhosis, and these trends did not fully match the meta-analysis (Figure 1). 4) NAPQI was predicted lower in all MASLD-related groups than in controls (weight- and dose-normalized) and remained at very low levels, so no toxicity signal was seen at therapeutic doses, though this is model-inferred rather than measured and GSH was not modeled. 5) PK/PD (Figure 5): peak pain-relief score fell modestly with BMI (3.15 to 2.63). Time to peak was about $0.75$ h in normal, overweight and obese groups, $0.49$ h in NAFLD versus $0.8$ h in controls, $0.93$ h in NASH versus $0.77$ h in controls, and $0.78$, $0.81$, $0.91$ and $0.97$ h for controls and Child-Pugh A, B and C. The authors conclude that efficacy is retained but onset varies.

---

## 💡 Clinical & Regulatory Implications
At therapeutic doses, the model predicts that APAP exposure and NAPQI do not rise in MASLD-related groups, and that peak analgesic effect is maintained while the onset may be delayed (up to roughly $0.2$ h in NASH or Child-Pugh C) or faster in NAFLD. The authors suggest informing patients about possible delayed onset and monitoring dosing frequency rather than changing single doses, while stating that no specific dose regimens are proposed and prospective validation is needed. This reassurance on NAPQI is not independent evidence of safety: GSH depletion, chronic or repeated dosing, overdose, alcohol, malnutrition, transporter and genetic effects are not modeled, and NAPQI is unvalidated. Regulators may see this as an example of PBPK extension to hepatic disease, but in its present form it would be supportive rather than decisive. Its main practical value is for hypothesis generation, trial design and prioritization of sampling in MASLD PK studies, and as a workflow for MASLD drug development and DDI/disease-drug interaction work.

---

### Strengths & Limitations

#### Strengths
- First attempt to build a simultaneous parent-metabolite PBPK/PD model covering the MASLD spectrum, including cirrhosis by Child-Pugh class
- Metabolite network (glucuronide, sulfate, NAPQI, cysteine, mercapturate) with explicit enzyme-level $K_m$/$V_{max}$ values (Table 1) for UGTs, SULTs, CYPs and GSTs
- Stepwise development (IV data for $V_{ss}$ and $CL$, then oral, then sequential metabolites) with the parent parameters fixed before metabolite fitting
- Systematic literature search and meta-analysis to place the model against observed PK trends
- Used 2-fold error criteria and goodness-of-fit plots for both healthy and disease populations
- Disease physiologies were used as shipped, without post hoc tuning to the disease data, which is a stricter test than refitting
- Transparent discussion of NAPQI uncertainty, absent GSH dynamics and excluded transporters

#### Limitations (Acknowledged by Authors)
- Clinical PK data in MASLD populations are limited in quantity and quality, and heterogeneous in ethnicity, assay methods, sampling and design
- Prediction deviations (Figure 3D) are attributed to heterogeneity in the source data, especially for low-abundance metabolites
- Model-predicted trends do not fully match the meta-analysis trends (Figure 4 versus Figure 1), attributed to sparse data and small samples
- NAPQI predictions could not be evaluated because no in vivo concentration data exist
- GSH synthesis and depletion cannot be simulated in GastroPlus, so overdose and toxicity are not addressed
- Transporters (MRP3, MRP4, ABCB1) were excluded because they worsened fits (average FE above 2) and added complexity
- Suppository dosage form unavailable in the software
- PD benchmark derived from chronic pain patients, self-reported pain scores are noisy, and plasma is not the effect site
- Comorbidities and disease-drug-drug interactions were not considered

#### Limitations (Expert Review)
- The external validation set is only four studies; three report APAP only, and only one (NASH) includes metabolites, so metabolite predictions in most MASLD groups are untested
- The same observed data were used to fit and 'validate' the healthy model, with no truly independent held-out data set described, and the 2-fold criterion is lenient for a well-characterized drug like APAP
- Healthy-population fitting of many $V_{max}$ values (some very large or unusual, e.g., GSTA1 $V_{max}$ $9090$ (mg/s)/mg) is poorly identifiable and appears to be tuned rather than derived; several parameters were assumed equal to APAP's (permeability, $f_{up}$, logP fitted for NAPQI)
- Six CYPs are given similar roles for NAPQI formation without supporting data, while the model is calibrated to downstream cysteine and mercapturate species, so NAPQI formation is a calibration product, not an independent prediction
- Using APAP-cys and APAP-merc as the only constraint on NAPQI means NAPQI 'low level' conclusions are structurally baked in, and GSH depletion is the key safety-relevant mechanism but is absent
- No quantitative disease-specific changes (e.g., CYP2E1 induction in NASH, UGT/SULT changes, hepatic blood flow, gastric emptying) were adjusted or reported, and the software defaults are not described or evaluated, making it hard to know which mechanisms drive the predictions
- Child-Pugh A/B were used as a proxy for 'mild-moderate' cirrhosis and C for 'severe', a mapping that adds uncertainty
- NAFLD and NASH data came from obese adolescents, so adult disease and pediatric ontogeny effects are confounded, and the control groups differ across studies
- No variability, virtual-population simulation, or uncertainty quantification is shown; the PD predictions are point estimates, so the 0.1-0.2 h differences in time to peak have no stated uncertainty and are probably within the noise of a model that has no inter-individual variability or an effect compartment
- The PD model is applied to plasma concentration without an effect-site delay, so the onset time shift reflects only the plasma profile, and a time-to-peak shift of minutes is of doubtful clinical relevance
- Reported PD parameters are not re-estimated and the PD has not been validated in any MASLD group; the conclusion that analgesic efficacy is 'retained' is an assumption, not a finding
- Digitized data from published figures introduce error, and the meta-analysis combined single mean values without formal weighting or heterogeneity assessment
- Predicted $CL$ and $V_{ss}$ trends with BMI (increasing) contradict the observed meta-analysis for $V_d$ and are not reconciled, and the 'decreased $C_{max}$ with obesity' is partly a weight-normalization effect
- Sensitivity analysis and parameter identifiability assessment are absent
- Paper states only qualitative recommendations about dose frequency monitoring that go beyond what the model shows

#### Generalizability
Generalizability is limited. The model is specific to GastroPlus and its built-in MASLD physiologies, and has been tested against a handful of studies, mostly with APAP alone and in small groups. The qualitative workflow (healthy parent-metabolite model followed by physiology swap to disease states) could be reused for other drugs with well-characterized metabolic pathways, but the quantitative conclusions about NAPQI safety and onset time are not transferable to overdose, chronic dosing, alcohol use, glutathione-depleted states, or adults with other comorbidities, and should not be used to guide clinical dosing.

---

---

### Figures & Tables

- **Figure 1**: Meta-analysis of reported mean APAP PK parameters ($C_{max}$, $AUC$, $V_d$, $CL$, $T_{max}$, $T_{1/2}$) across control, overweight, obese, morbidly obese, NAFLD, NASH, unspecified cirrhosis and mild-moderate and severe cirrhosis groups
  - *Significance*: Provides the observed-data benchmark for disease-related trends and shows the sparsity of data, particularly for NAFLD, NASH and cirrhosis; also the reference against which the model-predicted trends do not fully agree
- **Figure 2**: Flow chart of APAP hepatic metabolism: glucuronidation (UGT1A1/1A9/2B15), sulfation (SULT1A1/1A3/1E1/2A1), CYP-mediated NAPQI formation (1A2, 2C9, 2C19, 2D6, 2E1, 3A4), then GSTA1 to APAP-cys and GSTM to APAP-merc
  - *Significance*: Defines the structural backbone of the parent-metabolite model, including the simplification of the mercapturate pathway as sequential from APAP-cys
- **Table 1**: Drug-specific parameters (MW, logP, pKa, solubility, permeability, $f_{up}$, $R_{bp}$, distribution method) and enzyme $V_{max}$/$K_m$ values for APAP and five metabolites
  - *Significance*: Provides the parameter set needed to reproduce the model; also shows which values were fitted, assumed equal to APAP, or predicted in silico (e.g., NAPQI logP fitted at 2, GSTA1 $V_{max}$ $9090$), pointing to identifiability concerns
- **Figure 3**: Healthy adult model evaluation: goodness-of-fit plots of $C_{max}$, $AUC_{0-t}$ and $AUC_{0-\infty}$ (0.5-2 window) for IV APAP, APAP with glucuronide and sulfate, and with cysteine and mercapturate, plus simulated versus observed concentration-time profiles
  - *Significance*: Main evidence of model performance in healthy adults, showing mostly 2-fold agreement but also overprediction of some APAP-glu $AUC_{0-t}$ and metabolites; NAPQI cannot be assessed
- **Figure 4**: MASLD-related populations: predicted versus observed profiles (A), 2-fold goodness-of-fit (B), weight- and dose-normalized $C_{max}$/$AUC$ for APAP and metabolites (C), and predicted $V_{ss}$, $CL$, $T_{max}$ and $T_{1/2}$ (D)
  - *Significance*: Core result for the disease extrapolation, giving the predicted exposure patterns for obesity, NAFLD, NASH and Child-Pugh A-C and showing the lower NAPQI exposure; limited by few validation studies, mostly APAP only
- **Figure 5**: Predicted pain relief score and APAP plasma concentration over time across MASLD-related groups and their controls
  - *Significance*: Shows the PD conclusion of preserved peak effect with different time to peak (about $0.49$ h in NAFLD to $0.97$ h in Child-Pugh C), but based on a non-MASLD PD model with no uncertainty or MASLD pain data
- **Figure S1**: Reported PK parameters ($C_{max}$, $AUC$, $CL$, $T_{max}$, $T_{1/2}$) of APAP and four metabolites in healthy adults versus dose or weight
  - *Significance*: Establishes the healthy-adult ranking of metabolite exposure (APAP-glu > APAP > APAP-sul > APAP-cys > APAP-merc) and the sparse data on APAP-merc; supplementary material not available for review

---

### Code & Reproducibility Assessment
No code, model files, or datasets are shared. The model was built in commercial GastroPlus 10.1 using built-in PEAR physiologies, so reproduction needs a license. Table 1 reports drug-specific parameters and enzyme kinetics, and the PD parameters are given in the text. Source studies are listed in supplementary tables (Tables S1-S4, not provided here), and data were digitized with WebPlotDigitizer. Disease physiology defaults (from Adiwidjaja et al. and Murphy et al.) are not described in the paper, which limits independent verification.

---

### Supplementary Materials
Supplementary materials were not supplied. The text refers to Figure S1 (healthy-adult PK parameter meta-analysis) and Tables S1-S4 (sources of human data and dose levels used for modeling), which are not reviewed here.

---

### Future Directions
Prospective PK studies of APAP and its metabolites in biopsy-staged MASLD, NASH and Child-Pugh-defined cirrhosis, with measured conjugates, APAP-cys and APAP-merc; use of these to test model predictions and refine $V_{max}$ values; explicit modeling of GSH synthesis and depletion (e.g., in a QSP or open-platform environment) to address supratherapeutic and chronic dosing and alcohol; inclusion of disease-specific changes in CYP2E1, UGT, SULT, transporters, hepatic blood flow and plasma protein binding with sensitivity and identifiability analysis; virtual population simulations with variability and effect-compartment PD, ideally fit to MASLD pain data; extension to polypharmacy and disease-drug interaction scenarios; application of the workflow to other drugs and to MASH therapeutics such as resmetirom; and formal consideration of how such models might support regulatory submissions for hepatic impairment and MASLD labeling.

---

### Expert Commentary
The paper addresses a real gap, and using a well-studied probe such as APAP with its metabolite chain is sensible. My main concern is that the outputs most relevant to safety (NAPQI) are the least constrained. NAPQI is back-calculated from upstream and downstream species, with a fitted logP of 2, a very high GSTA1 $V_{max}$ and a single permeability value used for several species, so 'NAPQI remains very low' is largely a result of the structure. Without GSH turnover, the model cannot show whether MASLD increases susceptibility, which is the clinically relevant question. The PD part is better seen as a plausibility demonstration: a pain-relief model from chronic pain patients applied to plasma concentrations without an effect compartment will simply translate PK shape into onset times, and differences of $0.1$-$0.2$ h should not be over-interpreted. A teaching point is that applying built-in disease physiologies without modification is a useful test of platform predictivity but also a black box: readers cannot tell which parameters drive the predicted $CL$ and $V_{ss}$ changes, and the PBPK predictions contradict the meta-analysis in some respects (for example $V_{ss}$ and $CL$ with BMI) without resolution. I would encourage more disclosure of the physiology defaults, quantitative accuracy metrics (e.g., geometric mean fold error by group) and virtual-population variability. The study illustrates the current state of MIDD in liver disease: promising frameworks outpacing the available clinical data.

---

### Bottom Line
This is a useful, openly caveated demonstration that a commercial-platform PBPK model with a metabolite network can reproduce published APAP exposure in several MASLD-related groups within 2-fold, and it generates testable hypotheses (lower normalized exposure in obesity/NASH, preserved peak effect, shifted onset in advanced disease). Its conclusions about NAPQI safety and analgesic onset are weakly supported: NAPQI is unvalidated and lacks GSH dynamics, the PD model is borrowed from non-MASLD chronic pain data, and no uncertainty or variability is shown. Pharmacometricians should read it as a workflow template and should not use the numbers for dosing decisions. Prospective MASLD PK/PD data and an assessment of which physiological changes drive the predictions are needed before it can be applied.

---

---

## 📊 Figures

![The combination of pharmacokinetics parameters based on mean values (Cmax, AUC,Vd, CL,Tmax, and T1/2) of acetaminophen on the control group and overweight, obese, morbidl]({{ site.baseurl }}/assets/digests/2026-11-23-evaluation-of-the-pkpd-changes-on-masld-related-population-an-example-from/figures/fig_01.jpg)

![The flow chart for the acetaminophen hepatic metabolism pathway.]({{ site.baseurl }}/assets/digests/2026-11-23-evaluation-of-the-pkpd-changes-on-masld-related-population-an-example-from/figures/fig_02.jpg)

![(A) Goodness-of-fit plots ofCmax, AUC0-t, AUC0-∞for intravenous single-dose APAP alone. (B) Goodness-of-fit plots ofCmax, AUC0-t, and AUC0-∞for APAP, APAP-glu, and APAP-sul]({{ site.baseurl }}/assets/digests/2026-11-23-evaluation-of-the-pkpd-changes-on-masld-related-population-an-example-from/figures/fig_03.jpg)

![(A) The predicted and observed plasma acetaminophen parent-metabolites concentration–time profile on the MASLD-related population. (B) Goodness-of-fit plots ofCmax, AUC0-t,]({{ site.baseurl }}/assets/digests/2026-11-23-evaluation-of-the-pkpd-changes-on-masld-related-population-an-example-from/figures/fig_04.jpg)

![Predicted pain relief score over time and simulated acetaminophen plasma concentration on MASLD-related population including overweight, obese, NAFLD, NASH, cirrhosis Chi]({{ site.baseurl }}/assets/digests/2026-11-23-evaluation-of-the-pkpd-changes-on-masld-related-population-an-example-from/figures/fig_05.jpg)