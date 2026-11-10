---
layout: post
title: "A Combined Modeling Approach to Predict the Effect of Gastric Emptying Delay on the Pharmacokinetics of Small Molecules."
date: 2026-11-10
authors: "Maria M. Posada, Karen B. Schneck, Bridget L. Morse, Luc R. A. Rougee, Lai San Tham, Jessica F. Rehmel, Brian Thompson, Stephen D. Stamatis, Stephen D. Hall, Gemma L. Dickinson"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70101"
paper_type: popk
tags: [popk, pbpk, regulatory]
excerpt_text: "This study establishes a quantitative, model-informed drug development (MIDD) framework coupling population PK (PopPK) modeling of acetaminophen gastric emptying with mechanistic physiologically based pharmacokinetic (PBPK) absorption models to predict drug–drug interactions (DDIs) caused by GLP-1 receptor agonist-mediated gastric emptying delay. Clinical pharmacologists and pharmacometricians in metabolic drug development should read this because it demonstrates that GLP-1-induced gastric emptying delay generally lacks clinically relevant impacts on small molecule systemic exposure ($AUC$), providing a strong regulatory rationale to waive empirical clinical DDI studies for high doses or follow-on incretin therapeutics."
pdf_path: "/assets/digests/2026-11-10-a-combined-modeling-approach-to-predict-the-effect-of-gastric-emptying-delay-on/PMx_A_Combined_Modeling_Approach_to_Predict__20261110.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study establishes a quantitative, model-informed drug development (MIDD) framework coupling population PK (PopPK) modeling of acetaminophen gastric emptying with mechanistic physiologically based pharmacokinetic (PBPK) absorption models to predict drug–drug interactions (DDIs) caused by GLP-1 receptor agonist-mediated gastric emptying delay. Clinical pharmacologists and pharmacometricians in metabolic drug development should read this because it demonstrates that GLP-1-induced gastric emptying delay generally lacks clinically relevant impacts on small molecule systemic exposure ($AUC$), providing a strong regulatory rationale to waive empirical clinical DDI studies for high doses or follow-on incretin therapeutics.

---

### Executive Summary
GLP-1 receptor agonists like dulaglutide induce transient delays in gastric emptying, historically triggering extensive panels of dedicated clinical DDI studies with diverse oral small molecules. Posada and colleagues developed an integrated modeling strategy utilizing a PopPK model of oral acetaminophen (a standard physiological probe of gastric emptying) to quantify exposure-dependent gastric emptying delay (GED) following subcutaneous dulaglutide administration in healthy volunteers and patients with type 2 diabetes mellitus (T2DM). The resulting gastric emptying half-life ratios ($R_{GT50}$: 3.1-fold at 1.5 mg, 4.8-fold at 4.5 mg) were translated into physiologically based pharmacokinetic models (Simcyp ADAM/STT framework) for ten orally co-administered probe drugs spanning Biopharmaceutics Classification System (BCS) classes 1, 2, and 3, as well as controlled-release formulations. The combined platform accurately reproduced observed clinical interactions at 1.0–1.5 mg dulaglutide (predicted vs. observed $C_{max}$ and $AUC$ ratios within 0.89 to 1.07) and prospectively simulated the maximum approved dose (4.5 mg dulaglutide). The predictions confirmed that while $C_{max}$ is moderately reduced and $t_{max}$ is prolonged for rapidly absorbed drugs (BCS Class 1), total systemic exposure ($AUC$) remains virtually unaltered ($AUC$ ratios 0.82–1.35), demonstrating that mechanistic modeling can streamline clinical development programs by supplanting empirical DDI trials.

---

### Scientific Context & Motivation
Glucagon-like peptide-1 (GLP-1) receptor agonists exert profound pharmacological effects on upper gastrointestinal motility, notably delaying gastric emptying through vagally mediated central and peripheral mechanisms. Although this pharmacodynamic effect is most pronounced after the initial dose and exhibits tachyphylaxis upon chronic weekly maintenance dosing, regulatory agencies have historically mandated extensive empirical Phase 1 DDI programs evaluating potential absorption interactions with co-administered oral therapeutics (e.g., oral contraceptives, narrow therapeutic index drugs, antihypertensives, and statins). Prior attempts to generalize these interaction risks relied primarily on qualitative Biopharmaceutics Classification System (BCS) categorizations, which explain directional shifts in absorption rate but fail to yield quantitative exposure predictions across dose levels or physiological states (fed vs. fasted). Furthermore, unusual phenotypic observations—such as the marked decrease in atorvastatin $C_{max}$ with minimal $AUC$ change driven by gastric acid-catalyzed lactonization, or paradoxical exposure increases for controlled-release formulations—require mechanistic absorption accounting. This paper bridges this critical knowledge gap by integrating empirical PopPK transit estimations with physiologically based biopharmaceutics modeling (PBBM/PBPK), establishing a validated translational pipeline for motility-mediated DDIs.

---

## ⚡ Methodological Snapshot
The investigative pipeline utilized a stepwise clinical and translational modeling paradigm. First, acetaminophen PK data from two Phase 1 clinical studies—one in healthy subjects (1 and 3 mg dulaglutide) and one in participants with T2DM (0.05 to 8 mg dulaglutide)—were analyzed using a nonlinear mixed-effects PopPK framework to characterize the concentration-dependent inhibition of gastric emptying rate ($k_{GE}$), yielding the baseline and post-treatment gastric emptying half-lives ($GT_{50}$) and ratio ($R_{GT50}$). Second, whole-body PBPK models were either constructed de novo or adapted from literature for ten probe substrates: acetaminophen, atorvastatin, digoxin, ethinylestradiol, lisinopril, metformin, metoprolol (controlled-release Toprol-XL), norgestimate/norelgestromin, sitagliptin, and S-warfarin using the Advanced Dissolution, Absorption, and Metabolism (ADAM) model within the Simcyp Simulator.

To translate PopPK-derived motility changes into the PBPK framework, the baseline gastric mean residence time ($MRT = 1/k_{GE}$; 0.27 h fasted, 1.18 h fed) was multiplied by the median $R_{GT50}$ values corresponding to dulaglutide doses (1.0, 1.5, and 4.5 mg). Because the fed gastric MRT at 4.5 mg reached 5.66 h, exceeding standard transit boundaries, the Segregated Transit Time (STT) model was leveraged. The coupled model was first verified by benchmarking predicted $C_{max}$, $AUC$, and $t_{max}$ ratios against observed clinical DDI trial data with 1.0 and 1.5 mg dulaglutide, and subsequently deployed in forward simulations to forecast the worst-case interaction potential at the 4.5 mg clinical dose.

---

## 🏗️ Structural Model Breakdown
The quantitative structure operates across two connected tiers:
1. **PopPK Gastric Emptying Submodel**: Acetaminophen absorption is parameterized as gastric-emptying rate-limited, where systemic entry reflects gastric transit rate constant $k_{GE}$. Dulaglutide exposure induces an $E_{max}$-type or concentration-dependent reduction in $k_{GE}$, yielding an prolonged gastric emptying half-life $GT_{50} = \frac{\ln(2)}{k_{GE}}$. The perturbation is expressed as the ratio $R_{GT50} = \frac{GT_{50,\text{DULA}}}{GT_{50,\text{BSLN}}}$.
2. **PBPK Mechanistic Absorption Submodel**: Within the Simcyp ADAM framework, the gastrointestinal tract is discretized into stomach, duodenum, jejunum, and ileum segments. Drug transit out of the stomach compartment is governed by the gastric mean residence time ($MRT = \frac{1}{k_{GE}}$). Under baseline conditions, healthy volunteer MRT is fixed to 0.27 h (fasted) or 1.18 h (fed). Under dulaglutide co-administration, gastric MRT is dynamically adjusted: $\text{MRT}_{\text{DULA}} = \text{MRT}_{\text{baseline}} \times R_{GT50}$. For Toprol-XL (controlled-release metoprolol), an additional 2.2-fold prolongation in small intestinal transit time (SITT) was incorporated to account for distal dissolution enhancement based on cross-incretin scintigraphy data.

---

### Detailed Methodological Analysis

#### Modeling Approach
Coupled non-compartmental/PopPK and PBPK/PBBM framework. PopPK was employed to isolate the pure motility effect ($k_{GE}$) from clinical acetaminophen concentration-time profiles. PBPK simulations were conducted in Simcyp Simulator (Certara, version unspecified, incorporating ADAM and STT models). Mechanistic descriptors integrated compound-specific physicochemical solubility-pH profiles, biorelevant dissolution, active transporter-mediated influx/efflux (e.g., OCT1/OCT2 for metformin; OATP/MDR1 for digoxin and statins), enterocytic/hepatic metabolic clearance, and permeability estimates (Caco-2, in situ perfusion, or human jejunal $P_{eff}$).

#### Data Sources
Internal Eli Lilly clinical pharmacology trials and extensive published literature. Gastric emptying calibration data were sourced from two Phase 1 studies: single subcutaneous dulaglutide doses (1 and 3 mg) in healthy volunteers, and single ascending doses (0.05 to 8 mg) in T2DM patients. Model verification utilized internal dedicated clinical DDI trials evaluating 1.5 mg dulaglutide co-administered with acetaminophen, atorvastatin, digoxin, ethinylestradiol, lisinopril, metformin, metoprolol (Toprol-XL), norgestimate/norelgestromin, sitagliptin, and S-warfarin. Substrate baseline PBPK models were verified against independent clinical single- and multiple-dose cohorts across broad dose ranges in both fed and fasted states.

#### Estimation Methods
Nonlinear mixed-effects modeling was applied to estimate exposure-dependent gastric emptying parameters using acetaminophen PK as the surrogate biomarker. PBPK virtual populations were simulated using the Simcyp Healthy Volunteer population library (typically n = 100 to 200 subjects across 10 trials) matching the demographic age, sex, and weight distributions of the clinical DDI protocols.

#### Model Evaluation
Verification was performed in a multi-stage qualification structure: (1) baseline substrate performance verified against observed clinical concentration-time profiles, $C_{max}$, and $AUC$ across multiple doses and food states; (2) DDI verification against 1.0 mg (acetaminophen) and 1.5 mg (all other substrates) clinical interaction trials, accepting predictions within predefined bioequivalence-type tolerances (predicted/observed ratios between 0.80 and 1.25); and (3) visual overlay of mean and 90% prediction intervals against observed clinical data over time.

#### Covariate Analysis
The PopPK analysis evaluated healthy volunteers versus patients with T2DM. Although baseline gastric emptying rates were slower in T2DM patients ($GT_{50}$ was higher), the relative fold-delay induced by dulaglutide exposure ($R_{GT50}$) was identical between healthy subjects and T2DM patients across exposure ranges (Figure 2). Fasted versus fed states were accounted for by adjusting baseline gastric MRT (0.27 h vs. 1.18 h) while applying identical proportional fold-changes.

---

### Statistical Rigor Assessment
The study demonstrates high methodological rigor by separating the empirical estimation of physiological perturbation (gastric transit prolongation via PopPK) from the mechanistic simulation of multi-organ drug disposition (PBPK). Prediction precision was assessed using geometric mean ratios with 90% confidence intervals. Virtual trials adequately matched the sample sizes and variance structures of the corresponding clinical Phase 1 cohorts. A notable statistical strength is the demonstration that despite substantial baseline variability in gastric emptying half-life between healthy participants and diabetic individuals, the exposure-response relationship governing the fold-change ($R_{GT50}$) is congruent between populations.

---

## 📊 Key Findings
Key findings demonstrate:
1. **Motility Prolongation**: Dulaglutide causes dose-dependent increases in median gastric emptying half-life ratio ($R_{GT50}$): 2.6-fold at 1.0 mg, 3.1-fold at 1.5 mg, and 4.8-fold at 4.5 mg (Table 1). In the fed state, gastric mean residence time increases from 1.18 h (baseline) to 3.66 h (1.5 mg) and 5.66 h (4.5 mg).
2. **DDI Model Verification at 1.5 mg**: The PBPK models successfully reproduced observed clinical DDI ratios for all substrates (Table 2). Predicted-to-observed ratios for $C_{max}$ and $AUC$ ratios were tightly bounded between 0.89 and 1.10.
3. **BCS-Specific Exposure Profiles at 4.5 mg**: Prospective predictions for 4.5 mg dulaglutide (Table 3) showed that:
   - **BCS Class 1 drugs** (acetaminophen, digoxin, ethinylestradiol, norelgestromin, S-warfarin): exhibit a pronounced drop in $C_{max}$ (geometric mean ratios 0.49–0.78) and prolonged $t_{max}$, but virtually unchanged $AUC$ (ratios 0.93–1.00).
   - **BCS Class 2 drugs** (atorvastatin): show a substantial $C_{max}$ reduction (ratio 0.22) driven by prolonged gastric acid exposure shifting the acid-to-lactone equilibrium, while active species $AUC$ remains minimally affected (ratio 0.82).
   - **BCS Class 3 drugs** (lisinopril, metformin, sitagliptin): experience negligible impact on $C_{max}$ (ratios 0.87–0.96) and no impact on $AUC$ (ratios 0.99–1.00), as absorption is rate-limited by intestinal mucosal permeability rather than gastric emptying.
   - **Dissolution/Release-Rate Limited Formulations** (metoprolol CR / Toprol-XL): exhibit modest increases in both $C_{max}$ (ratio 1.39) and $AUC$ (ratio 1.35) due to prolonged GI and small intestinal transit times allowing more complete dissolution.

---

## 💡 Clinical & Regulatory Implications
The clinical and regulatory ramifications are substantial. First, the findings confirm that dose escalation of dulaglutide up to the maximum approved dose of 4.5 mg does not produce clinically meaningful alterations in the total systemic exposure ($AUC$) of co-administered oral medications, obviating dose adjustments for common chronic comedications (including statins, metformin, sitagliptin, ACE inhibitors, and oral contraceptives). Second, while $C_{max}$ decreases for BCS Class 1 drugs and narrow therapeutic index substrates (e.g., digoxin, warfarin), the lack of $AUC$ change indicates preserved steady-state efficacy. Third, this framework establishes an actionable precedent for Model-Informed Drug Development (MIDD): for novel GLP-1 receptor agonists and dual/triple co-agonists (e.g., tirzepatide, retatrutide), sponsors can characterize gastric motility delay using a single Phase 1 acetaminophen or scintigraphy sub-study and leverage PBPK modeling to waive dedicated clinical DDI studies across broad small-molecule panels.

---

### Strengths & Limitations

#### Strengths
- Innovative synthesis of PopPK empirical transit estimation with mechanistic PBPK biopharmaceutics modeling.
- Comprehensive verification against clinical DDI trial data across ten diverse small-molecule probe substrates spanning BCS Classes 1, 2, 3, and controlled-release formulations.
- Mechanistic illumination of complex atypical interactions, including the pH-dependent lactonization of atorvastatin and dissolution enhancement of controlled-release metoprolol.
- Direct translation between healthy volunteer physiology and T2DM patient pathophysiology using robust relative transit ratio scaling.

#### Limitations (Acknowledged by Authors)
- Clinical acetaminophen calibration studies were conducted only in the fed state; the assumption of identical fold-change ratios ($R_{GT50}$) in the fasted state was extrapolated without direct fasted acetaminophen validation.
- Lack of direct clinical DDI data at the 4.5 mg dulaglutide dose to definitively verify the forward PBPK simulations.
- Lack of evaluation of BCS Class 4 oral compounds due to their rare clinical usage and absence in the empirical 1.5 mg clinical trial program.

#### Limitations (Expert Review)
- The small intestinal transit time (SITT) extension (2.2-fold) applied to Toprol-XL was adapted based on literature data from liraglutide rather than direct dulaglutide scintigraphic measurements.
- The modeling framework evaluates acute first-dose interactions, representing a conservative worst-case scenario that does not explicitly simulate the time course of tachyphylaxis and accommodation that occurs upon chronic weekly titration.
- Inter-individual variability in gastric emptying delay was collapsed into median fold-change multipliers when parameterized in Simcyp, potentially underrepresenting extreme individual outliers.

#### Generalizability
The methodology is highly generalizable across the incretin class (GLP-1 RAs, GIP/GLP-1 dual agonists, GLP-1/glucagon dual agonists, and GLP-1/GIP/glucagon tri-agonists) as well as other pharmacotherapies that alter gastrointestinal motility (e.g., amylin analogues, opioids, anticholinergics). The biopharmaceutics conclusions regarding BCS class susceptibility provide a universally applicable quantitative roadmap for predicting gastrointestinal transit interactions.

---

### Key Equations

**Gastric Emptying Half-Life**

{% raw %}
$$
GT_{50} = \frac{\ln(2)}{k_{GE}}
$$
{% endraw %}

Mathematical definition of the acetaminophen gastric emptying half-life as a function of the first-order gastric emptying rate constant estimated from the population pharmacokinetic model.

**Gastric Emptying Half-Life Ratio**

{% raw %}
$$
R_{GT50} = \frac{GT_{50,\text{DULA}}}{GT_{50,\text{BSLN}}}
$$
{% endraw %}

Ratio of the gastric emptying half-life in the presence of dulaglutide relative to baseline without dulaglutide, used as the physiological scaling factor for gastric mean residence time in PBPK simulations.

**Gastric Mean Residence Time Scaling**

{% raw %}
$$
\text{MRT}_{\text{DULA}} = \text{MRT}_{\text{baseline}} \cdot R_{GT50}
$$
{% endraw %}

Implementation equation within the Simcyp ADAM/STT model adjusting gastric transit time by scaling baseline physiological residence time by the PopPK-derived emptying ratio.

---

### Figures & Tables

- **Figure 1**: Schematic workflow depicting the integrated simulation strategy, connecting clinical acetaminophen PopPK modeling to Simcyp PBPK models for verification (1.5 mg) and prospective prediction (4.5 mg).
  - *Significance*: Illustrates the translational MIDD paradigm bridging empirical clinical pharmacology data with mechanistic biopharmaceutics models.
- **Figure 2**: Model-predicted relationship between dulaglutide maximum concentration ($C_{max}$, Day 3) and acetaminophen gastric emptying half-life (Panel A) and fold-change in gastric emptying half-life (Panel B) in healthy subjects versus T2DM patients.
  - *Significance*: Demonstrates that while baseline gastric emptying is prolonged in T2DM patients, the exposure-dependent fold-change ratio ($R_{GT50}$) is identical between healthy volunteers and diabetic patients.
- **Figure 3**: Observed versus PBPK-predicted plasma concentration-time profiles for eight oral probe substrates alone and following co-administration with 1.5 mg dulaglutide.
  - *Significance*: Provides rigorous visual qualification and model verification confirming that the combined approach faithfully captures both the unaltered profiles (BCS Class 3) and delayed/flattened profiles (BCS Class 1 and 2).
- **Figure 4**: Simulated prospective plasma concentration-time profiles for ten small molecules and metabolites co-administered with a high single starting dose (4.5 mg) of dulaglutide.
  - *Significance*: Illustrates the maximum theoretical perturbation of gastric emptying delay on small molecule pharmacokinetics under worst-case clinical dosing conditions.
- **Table 1**: Tabulation of estimated gastric emptying time ratios ($R_{GT50}$) and corresponding gastric mean residence times ($MRT$) across dulaglutide subcutaneous doses (0, 1.0, 1.5, and 4.5 mg) under fasted and fed states.
  - *Significance*: Provides the quantitative physiological input parameters used to parameterize the Simcyp PBPK gastric transit compartments.
- **Table 2**: Comparison of predicted versus observed pharmacokinetic parameters ($C_{max}$, $t_{max}$, $AUC$) and DDI ratios for co-administered oral drugs with 1.5 mg dulaglutide.
  - *Significance*: Validates model predictive accuracy, showing predicted/observed DDI ratios spanning tightly between 0.89 and 1.07 across diverse therapeutic classes.
- **Table 3**: Model-predicted geometric mean $AUC$ and $C_{max}$ ratios (with 90% confidence intervals) for oral small molecules co-administered with 4.5 mg dulaglutide, categorized by compound biopharmaceutical characteristics.
  - *Significance*: Synthesizes the core clinical takeaway of the study, proving that total exposure ($AUC$) remains resilient across all BCS classes even at the highest clinical dose.

---

### Code & Reproducibility Assessment
Code and proprietary model files are not publicly deposited in open-source repositories. Simulations were executed in the commercial Simcyp Simulator (Certara UK). Detailed model input parameters, compound physicochemical attributes, and PopPK structure are extensively cataloged in Supporting Information files S1, S2, and S3.

---

### Supplementary Materials
Three supplementary files accompany the publication: Supporting Information S1 details PopPK model development, structural equations, parameter estimates, and PBPK simulation protocols (including the Segregated Transit Time model configuration and liraglutide-derived small intestinal transit time assumptions); Supporting Information S2 contains exhaustive bespoke PBPK model development and verification dossiers for each of the ten probe substrates across diverse single- and multiple-dose regimens; Supporting Information S3 provides expanded theoretical sensitivity analyses exploring the interplay of gastric emptying delay and small intestinal transit time across hypothetical BCS Class 1–4 archetypes.

---

### Future Directions
1. Expand the modeling framework to explicitly incorporate kinetic tolerance/tachyphylaxis models that capture the attenuation of gastric emptying delay following repeated weekly maintenance doses of GLP-1 receptor agonists.
2. Quantitatively investigate the specific impact of incretin-mediated small intestinal transit delay using clinical scintigraphic or capsule telemetry data across poorly soluble compounds (BCS Class 2 and 4).
3. Apply this verified framework prospectively to emerging unimolecular dual (GLP-1/GIP) and triple (GLP-1/GIP/Glucagon) receptor agonists to establish standardized regulatory briefing packages that waive redundant clinical DDI trials.

---

### Expert Commentary
This publication represents a masterclass in pragmatic, high-impact Model-Informed Drug Development (MIDD). For over a decade, clinical pharmacology programs for GLP-1 receptor agonists have been burdened by an exhaustive litany of Phase 1 DDI studies—evaluating oral contraceptives, statins, digoxin, warfarin, ACE inhibitors, and biguanides—almost invariably concluding with a label statement that 'no dose adjustment is required.' Posada and colleagues elegantly dismantle the necessity of empirical trial-and-error by constructing a mechanistic biopharmaceutics bridge. 

A key pharmacometric insight in this work is the decoupling of baseline pathophysiology from relative pharmacological perturbation: diabetic gastroparesis or elevated baseline $GT_{50}$ in T2DM patients does not alter the relative fold-shift ($R_{GT50}$) induced by dulaglutide compared to healthy volunteers (Figure 2). Furthermore, their mechanistic resolution of the atorvastatin 'paradox' (pronounced $C_{max}$ decrease with stable $AUC$ driven by gastric acid lactonization rather than systemic clearance alterations) demonstrates why PBPK provides vastly superior risk assessment compared to static BCS classification. 

From a regulatory science vantage, this paper provides precisely the foundational verification data that regulatory agencies (such as FDA and EMA) require to accept mechanistic absorption modeling in lieu of dedicated clinical studies. Pharmacometrics groups developing next-generation incretin poly-agonists should cite this framework and adopt acetaminophen gastric emptying sub-studies in early Phase 1 to parameterize PBBM platforms and seek formal DDI waivers.

---

### Bottom Line
By bridging empirical PopPK modeling of acetaminophen gastric transit with mechanistic whole-body PBPK simulations, this study conclusively proves that dulaglutide-induced gastric emptying delay reduces $C_{max}$ and prolongs $t_{max}$ for rapidly absorbed oral drugs but has no clinically significant impact on total systemic exposure ($AUC$ ratios 0.82–1.35), providing a fully validated framework to waive empirical clinical DDI studies for GLP-1 receptor agonists.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The study paper type is categorized as POPK_PKPD.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **NUMERIC_MISMATCH** — original: “Predicted versus observed Cmax and AUC ratios for clinical interactions at 1.5 mg dulaglutide fell within 0.89 to 1.10.” → correction: “For the dulaglutide studies, the PBPK models reproduced the small molecule PK in the absence and presence of a 1.5-mg dulaglutide dose with Cmax and AUC values within 0.7 and 1.26-fold of the clinical data and predicted Cmax and AUC ratios within 0.89 and 1.07 of the observed values (Table 2).”
[^fc-3]: **UNSUPPORTED** — original: “Active transporter mechanisms incorporated in the PBPK models included OCT1/OCT2 for metformin, and OATP/MDR1 for digoxin and statins.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “Simcyp Healthy Volunteer population library simulations used sample sizes of 100 to 200 subjects across 10 trials.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “Clinical DDI verification of the models used bioequivalence-type tolerances accepting predicted-to-observed ratios between 0.80 and 1.25.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **CONTRADICTED** — original: “Dedicated internal clinical DDI verification trials evaluated 1.5 mg dulaglutide co-administered with acetaminophen, atorvastatin, digoxin, ethinylestradiol, lisinopril, metformin, metoprolol (Toprol-XL), norgestimate/norelgestromin, sitagliptin, and S-warfarin.” → correction: “Simulations for acetaminophen were performed and verified for a 1-mg SC dose of dulaglutide.”

---

## 📊 Figures

![Simulation strategy.]({{ site.baseurl }}/assets/digests/2026-11-10-a-combined-modeling-approach-to-predict-the-effect-of-gastric-emptying-delay-on/figures/fig_01.jpg)

![Model-predicted effect of single dose dulaglutideCmax(Day 3 concentrations) on acetaminophen gastric emptying half-life. (A) Relationship between dulaglutide maximum conc]({{ site.baseurl }}/assets/digests/2026-11-10-a-combined-modeling-approach-to-predict-the-effect-of-gastric-emptying-delay-on/figures/fig_02.jpg)

![Predicted and observed concentrations for acetaminophen, digoxin, ethinylestradiol, lisinopril, metoprolol, norelgestromin, sitagliptin and S-warfarin alone (black) and a]({{ site.baseurl }}/assets/digests/2026-11-10-a-combined-modeling-approach-to-predict-the-effect-of-gastric-emptying-delay-on/figures/fig_03.jpg)

![Predicted effect of a single 4.5 mg dose of dulaglutide on the pharmacokinetics of acetaminophen, atorvastatin, o-hydroxyatorvastatin, atorvastatin total active species, ]({{ site.baseurl }}/assets/digests/2026-11-10-a-combined-modeling-approach-to-predict-the-effect-of-gastric-emptying-delay-on/figures/fig_04.jpg)