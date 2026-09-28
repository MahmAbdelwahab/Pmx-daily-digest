---
layout: post
title: "Modelling the tail-phase pharmacokinetics of long-acting cabotegravir and rilpivirine from early pregnancy to postpartum at steady state"
date: 2026-09-28
authors: "Atoyebi S, Waitt C, Olagunju A"
journal: "Journal of Pharmacokinetics and Pharmacodynamics 53, 55 (2026)"
doi: "10.1007/s10928-026-10065-4"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This PBPK simulation predicts that after discontinuing long-acting cabotegravir/rilpivirine early in pregnancy, both drugs remain detectable in maternal plasma throughout gestation and postpartum, but fall below therapeutic targets before delivery. The findings highlight the need for timely switching to alternative regimens, especially for PrEP, and provide the first predictions of fetal tail-phase exposure. Clinicians and researchers in HIV pharmacology will find this useful for counselling and regimen planning."
pdf_path: "/assets/digests/2026-09-28-modelling-the-tail-phase-pharmacokinetics-of-long-acting-cabotegravir-and/PMx_Modelling_the_tailphase_pharmacokinetics_20260928.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This PBPK simulation predicts that after discontinuing long-acting cabotegravir/rilpivirine early in pregnancy, both drugs remain detectable in maternal plasma throughout gestation and postpartum, but fall below therapeutic targets before delivery. The findings highlight the need for timely switching to alternative regimens, especially for PrEP, and provide the first predictions of fetal tail-phase exposure. Clinicians and researchers in HIV pharmacology will find this useful for counselling and regimen planning.

---

### Executive Summary
This study uses a previously validated physiologically-based pharmacokinetic (PBPK) framework to simulate the tail-phase pharmacokinetics of long-acting cabotegravir and rilpivirine (LA-CAB/RPV) after discontinuation early in pregnancy, following steady-state dosing before conception. Virtual cohorts of 100 non-pregnant women received approved Q4W (400/600 mg) or Q8W (600/900 mg) regimens until steady state, then discontinued after one injection in week 1 of pregnancy. The model predicted that both drugs remain detectable in maternal plasma throughout gestation and up to 64 weeks postmenstrual age, but concentrations fall below clinical target concentrations (4×PA-IC90) before delivery in all participants. Median times to fall below 4×PA-IC90 were ~30 weeks (Q4W) and ~27 weeks (Q8W) after last dose for CAB, and ~13 weeks (Q4W) and ~11 weeks (Q8W) for RPV. Fetal exposure was predicted via a fetal sub-model from week 13 to delivery, with cord-to-maternal ratios >1 for CAB and <1 for RPV. The study highlights the prolonged subtherapeutic tail and the need for timely switching to alternative regimens, especially for PrEP. The authors acknowledge limitations including segmented model stages, static CYP3A4 induction, and lack of postpartum physiology representation.

---

### Scientific Context & Motivation
Long-acting injectable antiretrovirals (LA-CAB/RPV) offer adherence benefits but create a prolonged tail phase after discontinuation, during which drug concentrations decline slowly and may become subtherapeutic, increasing the risk of virologic failure and resistance. Pregnancy introduces physiological changes that alter drug disposition, and there is a lack of definitive safety data for LA-CAB/RPV in pregnancy. Women who become pregnant may wish to discontinue LA-CAB/RPV, but the drug persists in the body, potentially exposing the fetus throughout gestation. This study addresses the knowledge gap by quantifying maternal and fetal tail-phase exposures after discontinuation early in pregnancy at steady state, using PBPK modelling. It extends prior work by considering preconception steady state and providing fetal exposure estimates, which were previously unavailable.

---

## ⚡ Methodological Snapshot
The study uses a previously validated PBPK framework to simulate the tail-phase pharmacokinetics of LA-CAB/RPV after discontinuation early in pregnancy. Virtual cohorts of 100 women received approved dosing regimens until steady state, then discontinued after one injection in week 1 of pregnancy. The model incorporates pregnancy-induced physiological changes (e.g., increased UGT1A1 and CYP3A4 activity, expanded plasma volume, reduced protein binding) and a fetal sub-model from week 13 to delivery. The residual depot amount is carried forward across model stages to maintain continuity. Simulations were run for Q4W and Q8W regimens, and maternal and fetal exposures were compared against clinical target concentrations (4×PA-IC90).

---

## 🏗️ Structural Model Breakdown
The PBPK model is a whole-body physiologically-based pharmacokinetic model with compartments representing major organs and tissues. The intramuscular depot is a separate compartment from which drug is released via a first-order process (Eq. 1). The model includes pregnancy-specific changes: increased cardiac output, organ blood flows, tissue volumes, and enzyme activity (UGT1A1 for CAB, CYP3A4 for RPV). A fetal sub-model is included from gestational week 13, with placental transfer modelled as bidirectional passive diffusion. The model was implemented in SimBiology (MATLAB R2019a). The workflow uses three distinct model versions: non-pregnant adult female, pregnancy without fetal sub-model (first trimester), and pregnancy with fetal sub-model (second/third trimester). The residual depot amount is transferred between stages to maintain continuity. The model does not include a dedicated postpartum physiology or breastfeeding compartment.

---

### Detailed Methodological Analysis

#### Modeling Approach
Physiologically-based pharmacokinetic (PBPK) modelling using a whole-body PBPK framework with separate models for non-pregnant, pregnant (first trimester without fetal sub-model, second/third trimester with fetal sub-model), and postpartum states. The models were linked by transferring the residual intramuscular depot amount between stages. Placental transfer was modelled as bidirectional passive diffusion.

#### Data Sources
The PBPK model was developed and validated using clinical data from multiple sources: oral cabotegravir, rilpivirine, and raltegravir data in non-pregnant adults; LA-CAB/RPV data in non-pregnant adults; oral rilpivirine and raltegravir data during pregnancy; and clinical washout data after discontinuation of LA-CAB/RPV early in pregnancy (Patel et al.). The model was implemented in SimBiology (MATLAB R2019a).

#### Estimation Methods
Drug release rates from the IM depot were fitted to available clinical data. The model used a first-order release equation. No explicit estimation method (e.g., FOCE, SAEM) is described; the PBPK model likely used deterministic simulation with parameter fitting to observed data.

#### Model Evaluation
Model qualification was performed by comparing simulated PK metrics (e.g., AUC, Cmax) to observed clinical values, with acceptance within 2-fold. For the pregnancy discontinuation scenario, simulated terminal half-lives were compared to Patel et al. data, with observed-to-predicted ratios of 1.12 for CAB and 1.21 for RPV. Some comparisons approached the 2-fold boundary, indicating caution.

#### Covariate Analysis
No formal covariate analysis was performed. The virtual population was based on Caucasian demographic and organ-weight parameters, with dynamic body weight changes during pregnancy. The model did not explore covariates such as BMI, muscle mass, or ethnicity, though the authors note these may affect depot kinetics.

---

### Statistical Rigor Assessment
The study uses a deterministic PBPK simulation approach with virtual cohorts of n=100 per scenario, which provides population-level distributions (median and IQR) but does not incorporate inter-individual variability in the same way as a population PK model. The model was qualified against clinical data with acceptance within 2-fold, and terminal half-life predictions were within 1.2-fold of observed values. However, the lack of formal uncertainty analysis (e.g., bootstrap or sensitivity analysis) and the reliance on a single virtual population limit statistical rigor. The segmented model workflow introduces potential discontinuities, and the static representation of CYP3A4 induction is a simplification. The authors appropriately acknowledge these limitations and frame the results as fit-for-purpose projections.

---

## 📊 Key Findings
The study predicts that after discontinuation of LA-CAB/RPV early in pregnancy (week 1) at steady state, both drugs remain detectable in maternal plasma throughout gestation and up to 64 weeks postmenstrual age. However, concentrations fall below the clinical target (4×PA-IC90) before delivery in all virtual participants. For CAB, median time to fall below 4×PA-IC90 was 30.1 weeks (Q4W) and 27.4 weeks (Q8W) after last dose; for RPV, it was 13.3 weeks (Q4W) and 11 weeks (Q8W). At delivery, 0% of participants were above target for both drugs. Predicted cord-to-maternal ratios were >1 for CAB and <1 for RPV, with first quartile cord CAB levels above 4×PA-IC90 but third quartile cord RPV levels below PA-IC90. The residual intramuscular depot was identified as the principal driver of the tail phase, with depot amounts at steady state reaching ~380% (Q4W) and ~170% (Q8W) of the maintenance dose. These findings highlight the prolonged subtherapeutic tail and the need for timely switching to alternative regimens, particularly for PrEP where resistance risk is a concern.

---

## 💡 Clinical & Regulatory Implications
The study informs clinical management of women who discontinue LA-CAB/RPV early in pregnancy. For HIV treatment, prompt transition to an alternative suppressive oral regimen is essential to avoid virologic rebound during the prolonged subtherapeutic tail. For PrEP, the risk of resistance selection during the tail phase suggests that oral PrEP should be initiated before concentrations fall below protective thresholds (median ~27 weeks after last dose for Q8W). The predicted cord-to-maternal ratios (CAB >1, RPV <1) and fetal exposure throughout gestation highlight the need for counselling about unavoidable fetal exposure if pregnancy occurs. The prolonged postpartum detection also raises concerns about infant exposure via breastfeeding, though this was not directly modelled. The results support individualized counselling and consideration of alternative regimens, but should be interpreted as model-informed projections rather than definitive clinical data.

---

### Strengths & Limitations

#### Strengths
- Addresses a clinically important and understudied scenario: discontinuation of LA-CAB/RPV early in pregnancy at steady state.
- Provides the first predictions of fetal tail-phase exposure to LA-CAB/RPV, filling a critical knowledge gap.
- Uses a previously validated PBPK framework with multiple clinical datasets, including pregnancy washout data, enhancing credibility.
- Quantifies time to subtherapeutic levels and cord-to-maternal ratios, which are directly actionable for clinical counselling.
- The segmented model approach with depot carryover is a pragmatic solution to simulate the full timeline, despite limitations.

#### Limitations (Acknowledged by Authors)
- The entire disposition profile could not be simulated in a single unitary PBPK model; separate linked models were used, potentially introducing discontinuity.
- All scenarios assumed the last injection occurred in week 1 of pregnancy and delivery at 40 weeks, which may not reflect clinical variability.
- The increase in CYP3A4 activity during pregnancy was represented as a static 1.6-fold change rather than a continuous longitudinal function.
- Postpartum pharmacokinetics were simulated using the adult female model, not a dedicated postpartum model, and breastfeeding transfer was not represented.
- The virtual population was based on Caucasian demographics, limiting extrapolation to other populations.

#### Limitations (Expert Review)
- The model does not include formal uncertainty quantification (e.g., sensitivity analysis, bootstrap) to assess the impact of parameter uncertainty on predictions.
- The assumption that depot release kinetics are unaffected by pregnancy may not hold, as changes in muscle blood flow or tissue composition could alter release.
- The use of raltegravir as a probe for UGT1A1/1A9 during pregnancy may not fully capture cabotegravir's disposition, though it is a reasonable surrogate.
- The fetal sub-model only operates from week 13, missing first-trimester fetal exposure, which could be relevant for organogenesis.
- The clinical target concentrations (4×PA-IC90) are based on non-pregnant data and may not directly apply to pregnancy or fetal exposure.

#### Generalizability
The virtual population is based on Caucasian demographic and organ-weight parameters, which may not represent other ethnicities or body compositions. The model does not account for variations in BMI, muscle mass, or injection technique, which are known to affect depot kinetics. The timing of the last injection (week 1) and delivery at 40 weeks are fixed, limiting generalizability to real-world variations. The results should be extrapolated cautiously to other populations.

---

### Key Equations

**Intramuscular depot release equation**

{% raw %}
$$
\frac{dA_{\text{muscle}}}{dt} = -K_{IM} \cdot A_{\text{IM depot, muscle}}
$$
{% endraw %}

First-order release of drug from the intramuscular depot into systemic circulation, where K_IM is the release rate constant and A_IM_depot_muscle is the amount of drug in the depot.

---

### Figures & Tables

- **Figure 1**: Schematic of the modelling workflow showing three stages: non-pregnant (pre-conception), pregnancy (first trimester without fetal sub-model, second/third trimester with fetal sub-model), and postpartum. The residual depot amount is carried forward between stages.
  - *Significance*: Illustrates the segmented PBPK approach and the bridging strategy via depot carryover, which is central to the methodology.
- **Figure 2**: Predicted plasma concentration-time profiles for cabotegravir and rilpivirine during the tail phase for Q4W and Q8W dosing, showing maternal concentrations and the decline below clinical target concentrations.
  - *Significance*: Provides the primary quantitative output of the study, showing the prolonged tail and timing of subtherapeutic levels.
- **Figure 3**: Predicted fetal exposure metrics (e.g., cord blood concentrations) across gestation, likely showing the evolution of fetal concentrations from week 13 to delivery.
  - *Significance*: First description of fetal tail-phase exposure to LA-CAB/RPV, critical for understanding potential fetal risks.
- **Table 1**: Summary of predicted maternal plasma concentrations at key time points (e.g., week 8, delivery) and percentage of participants above clinical targets.
  - *Significance*: Quantifies the proportion of women above therapeutic thresholds during pregnancy, highlighting the rapid decline.
- **Table 2**: Predicted cord-to-maternal blood ratios and cord plasma concentrations for CAB and RPV at delivery.
  - *Significance*: Provides fetal exposure estimates, showing CAB crosses more readily than RPV.
- **Table 3**: Predicted maternal plasma concentrations during the postpartum period, including at 64 weeks postmenstrual age.
  - *Significance*: Demonstrates the persistence of drug levels postpartum, with implications for breastfeeding exposure.

---

### Code & Reproducibility Assessment
Data supporting the findings are available from the corresponding author upon reasonable request. No explicit code or model files were provided in the manuscript or supplementary materials.

---

### Supplementary Materials
Supplementary file 1 (PDF, 272 KB) contains additional tables (S1-S5) with drug input parameters, pregnancy physiological changes, and model qualification outputs, as referenced in the text.

---

### Future Directions
Future studies should aim to validate these predictions with real-world pharmacokinetic data from pregnant women who discontinue LA-CAB/RPV, including fetal cord blood measurements. The model should be extended to incorporate longitudinal changes in CYP3A4/UGT1A1 activity during pregnancy, a dedicated postpartum physiology model, and explicit breastfeeding transfer to quantify infant exposure. Additionally, the optimal timing and duration of oral replacement therapy (both for treatment and PrEP) should be evaluated. The framework could also be applied to other long-acting injectables with prolonged tails, such as lenacapavir, to inform clinical guidance.

---

### Expert Commentary
This work addresses a clinically urgent and understudied scenario: the pharmacokinetic consequences of discontinuing long-acting injectable antiretrovirals in early pregnancy. The use of a PBPK framework to bridge non-pregnant, pregnant, and postpartum states is innovative, but the segmented model approach introduces potential discontinuities. The assumption that depot release kinetics are unaffected by pregnancy is reasonable given limited data, but the static 1.6-fold CYP3A4 induction for rilpivirine is a simplification. The predicted cord-to-maternal ratios align with known placental transfer characteristics (CAB higher, RPV lower), lending some credibility. However, the lack of clinical validation for fetal exposure and the reliance on a single virtual population (Caucasian) limit generalizability. The study's strength lies in its mechanistic plausibility and the practical guidance it offers for counselling and regimen switching. Future work should incorporate longitudinal enzyme changes, postpartum physiology, and breastfeeding transfer, and ideally validate against real-world pharmacokinetic data from pregnant women.

---

### Bottom Line
This PBPK simulation study provides the first quantitative predictions of maternal and fetal tail-phase exposures to long-acting cabotegravir/rilpivirine after discontinuation early in pregnancy at steady state. The results indicate that both drugs remain detectable in maternal plasma throughout gestation and postpartum, but fall below clinical target concentrations before delivery in all virtual participants. For women discontinuing LA-CAB for PrEP, switching to oral PrEP should be considered before subtherapeutic levels are reached (median ~27 weeks after last dose for Q8W). The findings support early counselling and timely transition to alternative regimens, while acknowledging that the segmented model workflow and limited pregnancy-specific data warrant cautious interpretation.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The intramuscular depot is a separate compartment from which drug is released via a first-order process.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-09-28-modelling-the-tail-phase-pharmacokinetics-of-long-acting-cabotegravir-and/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-09-28-modelling-the-tail-phase-pharmacokinetics-of-long-acting-cabotegravir-and/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-09-28-modelling-the-tail-phase-pharmacokinetics-of-long-acting-cabotegravir-and/figures/fig_03.png)