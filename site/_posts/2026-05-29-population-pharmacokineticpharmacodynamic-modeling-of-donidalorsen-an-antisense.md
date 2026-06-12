---
layout: post
title: "Population Pharmacokinetic/Pharmacodynamic Modeling of Donidalorsen, an Antisense Oligonucleotide in Development for Prophylaxis of Hereditary Angioedema"
date: 2026-05-29
authors: "Diep JK, Liu M, Singh P, Dorow S, Cohn DM, Bordone L, Newman KB, Gao X"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025"
doi: "https://pubmed.ncbi.nlm.nih.gov/41622599/"
paper_type: popk
tags: [popk, covariate-analysis]
excerpt_text: "This paper presents a robust population PK/PD model for donidalorsen, a GalNAc-conjugated antisense oligonucleotide for hereditary angioedema prophylaxis. The model confirms that body weight, injection site, and drug presentation affect PK exposure but do not translate into clinically meaningful differences in prekallikrein reduction, supporting a fixed 80 mg monthly or every-2-month dosing regimen without dose adjustments. Pharmacometricians involved in ASO development or rare disease modeling will find the covariate analysis and simulation framework directly applicable."
pdf_path: "/assets/digests/2026-05-29-population-pharmacokineticpharmacodynamic-modeling-of-donidalorsen-an-antisense/PMx_Population_PharmacokineticPharmacodynami_20260529.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a robust population PK/PD model for donidalorsen, a GalNAc-conjugated antisense oligonucleotide for hereditary angioedema prophylaxis. The model confirms that body weight, injection site, and drug presentation affect PK exposure but do not translate into clinically meaningful differences in prekallikrein reduction, supporting a fixed 80 mg monthly or every-2-month dosing regimen without dose adjustments. Pharmacometricians involved in ASO development or rare disease modeling will find the covariate analysis and simulation framework directly applicable.

---

### Executive Summary
This analysis develops and validates population PK and PK/PD models for donidalorsen using pooled data from four clinical trials (phase 1–3) in healthy volunteers and patients with hereditary angioedema (HAE). The PK was well described by a linear two-compartment model with first-order absorption, and the PD by an indirect response model with inhibition of prekallikrein production. Covariate analysis identified body weight as the most influential factor on PK exposure, but the effect on prekallikrein response was minimal (<7% difference across weight quartiles) due to the high potency of donidalorsen. Disease status, injection site, and drug presentation had smaller effects. Simulations demonstrated that 80 mg administered every 4 weeks (Q4W) or every 8 weeks (Q8W) achieves sustained prekallikrein reductions >50%, and that Q4W vs. monthly (Q1M) and Q8W vs. every-2-month (Q2M) regimens yield nearly identical profiles, supporting flexible dosing schedules. The models support no dose adjustment for intrinsic/extrinsic factors in adults and adolescents with HAE.

---

### Scientific Context & Motivation
Hereditary angioedema (HAE) is a rare, life-threatening disorder caused by dysregulation of the kallikrein-kinin system, leading to uncontrolled bradykinin production and recurrent swelling episodes. Current prophylactic therapies (lanadelumab, berotralstat, C1INH replacement) require frequent dosing (every 2 weeks to daily), creating an unmet need for less frequent, more convenient regimens. Donidalorsen is a GalNAc-conjugated antisense oligonucleotide that selectively degrades prekallikrein mRNA in hepatocytes, reducing prekallikrein production. While phase 3 trials demonstrated efficacy with 80 mg Q4W and Q8W, the impact of intrinsic/extrinsic covariates on exposure and response had not been systematically quantified. This study fills that gap by developing a comprehensive population PK/PD model to support dosing recommendations and regimen flexibility, addressing a key regulatory and clinical need for personalized yet simplified dosing in a rare disease population.

---

## ⚡ Methodological Snapshot
The analysis used nonlinear mixed-effects modeling with Phoenix NLME (FOCE ELS algorithm). PK was modeled as a linear two-compartment model with first-order absorption. PD was modeled using an indirect response model with inhibition of prekallikrein production ($I_{max}$ model). Covariate selection used stepwise forward addition ($p<0.01$) and backward elimination ($p<0.001$). Model evaluation included pcVPCs with 200 replicates. Simulations were performed to assess covariate effects and compare dosing regimens.

---

## 🏗️ Structural Model Breakdown
The PK model is a standard two-compartment model with first-order absorption: central compartment ($V_c/F$) and peripheral compartment ($V_p/F$) with intercompartmental clearance ($Q/F$). Elimination occurs from the central compartment via $CL/F$. Absorption rate constant $k_a$. The PD model is an indirect response model: prekallikrein (PKK) is produced at a zero-order rate $k_{in}$ and eliminated by first-order rate $k_{out}$. Donidalorsen concentration $C_p$ inhibits production via an $I_{max}$ model: $k_{in} \times (1 - I_{max} \times C_p/(IC_{50} + C_p))$. Baseline $PKK = k_{in}/k_{out}$. $I_{max}$ was estimated as $0.992$ (near-complete inhibition). $IC_{50} = 0.158$ ng/mL. Between-subject variability was included on $CL/F$, $V_c/F$, $Q/F$, $V_p/F$, $k_a$ (full $\omega$ block) for PK, and on $BL$, $k_{out}$, $IC_{50}$ for PD.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling using Phoenix NLME version 8.4. PK: two-compartment disposition with first-order absorption and elimination from central compartment. PD: indirect response model with inhibition of production ($I_{max}$ model). Sequential PK/PD modeling approach: final PK model fixed, then PD parameters estimated using individual post hoc PK parameters. Additive error on log-transformed PK data; proportional error on PD data.

#### Data Sources
Pooled data from four clinical trials: NCT03263507 (phase 1, healthy volunteers, multiple doses 20–80 mg Q4W), NCT04030598 (phase 2, HAE patients, 80 mg Q4W), NCT05139810 (phase 3 OASIS-HAE, HAE patients, 80 mg Q4W and Q8W), and ISIS 721744-CS9 (bioequivalence study, healthy volunteers, single 80 mg). Total 177 individuals (101 healthy, 76 HAE patients). 4242 PK samples and 1159 PD samples. Age range 12–68 years, weight 37–152 kg.

#### Estimation Methods
First-order conditional estimation extended least squares (FOCE ELS) with central difference and sandwich-based standard error method. Sequential PK/PD estimation: PK parameters estimated first, then PD parameters estimated with PK fixed.

#### Model Evaluation
Prediction-corrected visual predictive checks (pcVPCs) with 200 simulated replicates. Goodness-of-fit plots (observed vs. PRED/IPRED, CWRES vs. PRED/time). Parameter precision assessed via $\%RSE$. Shrinkage evaluated for random effects.

#### Covariate Analysis
Stepwise forward addition ($p<0.01$) and backward elimination ($p<0.001$). Covariates evaluated: age, body weight, sex, race, ethnicity, geographic region, disease status, HAE type, drug presentation, injection site, hepatic dysfunction, eGFR, ALT, AST, bilirubin, albumin, baseline $PKK$. Final PK covariates: weight on $CL/F$, $V_c/F$, $Q/F$, $V_p/F$; disease status on $V_c/F$ and $Q/F$; injection site and drug presentation on $k_a$. Final PD covariates: disease status on $BL$ and $IC_{50}$.

---

### Statistical Rigor Assessment
The analysis used appropriate significance thresholds for covariate selection ($p<0.01$ forward, $p<0.001$ backward) to control Type I error. Parameter precision was good ($\%RSE < 30\%$ for most fixed effects, $<22\%$ for random effects). Shrinkage was low ($<30\%$) for all random effects, supporting reliable individual post hoc estimates. The pcVPCs showed adequate model performance. However, the sequential estimation approach may underestimate uncertainty in PD parameters. The exclusion of BLLOQ data (M1 method) could introduce bias, though the proportion was low. The high BSV in $IC_{50}$ ($83.1\%CV$) suggests substantial unexplained variability in potency. No formal sensitivity analysis or bootstrap was reported, which would have strengthened the assessment of parameter uncertainty.

---

## 📊 Key Findings
The final PK model was a two-compartment model with first-order absorption. Typical $CL/F$ was $12.8$ $L/h$, $V_c/F$ $69.8$ L, $Q/F$ $2.58$ $L/h$, $V_p/F$ $1840$ L, and $k_a$ $0.952$ $h^{-1}$. Terminal elimination half-life in HAE patients was 31.4 days. Body weight was the most influential PK covariate: a 100 kg individual had $42\%$ lower $AUC_{\tau,ss}$, $54\%$ lower $C_{max,ss}$, and $38\%$ lower $C_{trough,ss}$ vs. a 70 kg reference. However, prekallikrein reduction differed by $<7\%$ across weight quartiles, with mean reductions $>75\%$ maintained in all groups. Disease status (HAE vs. healthy) affected $V_c/F$ ($+43\%$), $Q/F$ ($-26\%$), baseline prekallikrein ($-13\%$), and $IC_{50}$ ($+77\%$), but PD impact was small (6% lower maximum reduction in HAE patients). Injection into the arm reduced $k_a$ by $34\%$ vs. abdomen/thigh, and autoinjector increased $k_a$ by $26\%$ vs. vial/syringe, but PD differences were $<1\%$. The PD model used an indirect response with $I_{max} = 0.992$ and $IC_{50} = 0.158$ ng/mL. Simulations showed that 80 mg Q4W/Q1M achieves $\sim 76\%$ maximum $PKK$ reduction and Q8W/Q2M $\sim 65\%$ reduction, with sustained reductions $>50\%$ at trough.

---

## 💡 Clinical & Regulatory Implications
The model supports a fixed 80 mg dose of donidalorsen administered subcutaneously every month (Q1M) or every 2 months (Q2M) for prophylaxis of HAE attacks in adult and adolescent patients (≥12 years). No dose adjustment is needed based on body weight, age, sex, race, ethnicity, mild renal impairment, mild hepatic impairment, injection site, or drug presentation. The nearly identical PK/PD profiles between Q4W and Q1M (and Q8W vs. Q2M) allow patients to switch to more convenient calendar-based dosing schedules. The long half-life (31.4 days) enables infrequent dosing, which is a significant advantage over current therapies requiring daily (berotralstat) or biweekly (lanadelumab) administration. The model can be used to support future pediatric studies and to explore alternative dosing regimens.

---

### Strengths & Limitations

#### Strengths
- Pooled analysis across four clinical trials (phase 1–3) including healthy volunteers and HAE patients, providing a rich dataset for robust parameter estimation.
- Comprehensive covariate analysis using stepwise forward addition/backward elimination with appropriate significance thresholds ($p<0.01/p<0.001$).
- Use of sequential PK/PD modeling (rather than simultaneous fitting) justified by literature and appropriate for this mechanism.
- Extensive simulation framework including forest plots for covariate effects and post hoc simulations stratified by body weight quartiles.
- Clear demonstration that PK covariate effects do not translate into clinically meaningful PD differences, supporting fixed dosing without adjustment.
- Model validation using prediction-corrected VPCs with 200 replicates, showing good predictive performance.

#### Limitations (Acknowledged by Authors)
- More complex absorption models (e.g., lag time, transit compartments) could have been explored but simple first-order absorption was deemed adequate.
- Donidalorsen has not been studied in patients with moderate/severe hepatic or renal impairment, limiting covariate assessment for these subgroups.
- The analysis excluded PK data after onset of antidrug antibodies (3.1% of samples), which may introduce bias if ADA affects PK in a subset.

#### Limitations (Expert Review)
- The sequential PK/PD approach, while justified, may underestimate uncertainty in PD parameters compared to simultaneous fitting, especially for the $IC_{50}$ estimate.
- Body weight exponents were estimated freely ($1.52$ for $CL$, $2.34$ for $V_c$) rather than fixed to standard allometric values ($0.75/1$), which may overparameterize and reduce generalizability to pediatric populations.
- The model does not account for potential time-varying covariates (e.g., weight change during treatment) or disease progression effects beyond baseline.
- The $IC_{50}$ estimate ($0.158$ ng/mL) has high between-subject variability ($83.1\%CV$), suggesting that some patients may have substantially different potency, which could affect individual response.
- The analysis used M1 method for BLLOQ data (exclusion), which can introduce bias if BLLOQ data are informative, though the proportion was low (3.4% PK, 1.5% PD).

#### Generalizability
The model is based on a predominantly White (68.4%) and female (55.4%) population with median weight 78 kg (range 37–152 kg). While covariate effects were assessed across available demographics, the limited representation of non-White races and adolescents (only 12–17 years) may reduce generalizability to more diverse populations. The model is applicable to adult and adolescent HAE patients (≥12 years) with normal to mild renal/hepatic impairment. Extrapolation to pediatric patients <12 years or to patients with moderate/severe organ impairment would require additional data or physiologically-based modeling.

---

### Key Equations

**Apparent Clearance with Weight Covariate**

{% raw %}
$$
CL/F = 12.8 \times \left(\frac{WTKG}{70}\right)^{1.52}
$$
{% endraw %}

Population clearance model with body weight as a covariate, exponent estimated freely.

**Central Volume with Weight and Disease Covariates**

{% raw %}
$$
V_c/F = 69.8 \times \left(\frac{WTKG}{70}\right)^{2.34} \times 1.426^{[\text{HAE}]}
$$
{% endraw %}

Central volume of distribution, with weight exponent and a multiplicative factor for HAE patients.

**Intercompartmental Clearance with Weight and Disease Covariates**

{% raw %}
$$
Q/F = 2.58 \times \left(\frac{WTKG}{70}\right)^{1.79} \times 0.739^{[\text{HAE}]}
$$
{% endraw %}

Intercompartmental clearance, lower in HAE patients (factor 0.739).

**Peripheral Volume with Weight Covariate**

{% raw %}
$$
V_p/F = 1840 \times \left(\frac{WTKG}{70}\right)^{1.60}
$$
{% endraw %}

Peripheral volume of distribution with weight exponent.

**Absorption Rate Constant with Site and Presentation Covariates**

{% raw %}
$$
k_a = 0.952 \times 0.662^{[\text{arm}]} \times 1.262^{[\text{autoinjector}]}
$$
{% endraw %}

First-order absorption rate constant, 34% lower for arm injection, 26% higher for autoinjector.

**Indirect Response PD Model (Inhibition of Production)**

{% raw %}
$$
\frac{dPKK}{dt} = k_{in} \times \left(1 - \frac{I_{max} \times C_p}{IC_{50} + C_p}\right) - k_{out} \times PKK
$$
{% endraw %}

Indirect response model where donidalorsen inhibits prekallikrein production. kin = kout × BL.

**Baseline Prekallikrein with Disease Covariate**

{% raw %}
$$
BL = 139 \times 0.868^{[\text{HAE}]}
$$
{% endraw %}

Baseline prekallikrein concentration, 13% lower in HAE patients.

**IC50 with Disease Covariate**

{% raw %}
$$
IC_{50} = 0.158 \times 1.770^{[\text{HAE}]}
$$
{% endraw %}

Concentration yielding half-maximal inhibition, 77% higher in HAE patients.

---

### Figures & Tables

- **Figure 1**: Schematic of the PK/PD model showing two-compartment PK with first-order absorption and indirect response PD with inhibition of prekallikrein production.
  - *Significance*: Provides a visual overview of the model structure, including compartments and the mechanism of action.
- **Figure 2**: Prediction-corrected visual predictive checks (pcVPCs) for the PK model (A) and PK/PD model (B).
  - *Significance*: Demonstrates good predictive performance of both models, with observed data within 95% confidence intervals of simulated data.
- **Figure 3**: Forest plots showing model-predicted covariate effects on PK metrics (A) and PD metrics (B) relative to a reference subject.
  - *Significance*: Quantifies the magnitude of covariate effects, highlighting body weight as the most influential PK covariate but with minimal PD impact.
- **Figure 4**: Post hoc PK metrics ($AUC$, $C_{max}$, $C_{trough}$) and PD metrics ($PKK$ percent change) stratified by body weight quartiles.
  - *Significance*: Shows that despite large differences in PK exposure across weight groups, PKK reduction remains similar (<7% difference), supporting fixed dosing.
- **Figure 5**: Simulated steady-state PK and PD profiles for 80 mg Q4W vs. Q1M (A) and Q8W vs. Q2M (B) dosing regimens.
  - *Significance*: Demonstrates nearly identical profiles between Q4W/Q1M and Q8W/Q2M, supporting flexible dosing schedules.
- **Table 1**: Final population PK model parameter estimates including covariate effects, between-subject variability, and residual error.
  - *Significance*: Provides the quantitative basis for the PK model, including all fixed and random effects with precision estimates.
- **Table 2**: Final population PK/PD model parameter estimates including baseline, $k_{out}$, $I_{max}$, $IC_{50}$, and covariate effects.
  - *Significance*: Provides the quantitative basis for the PD model, showing high potency ($IC_{50} = 0.158$ ng/mL) and near-maximal inhibition ($I_{max} = 0.992$).

---

### Supplementary Materials
Supplementary materials include Table S1 (study designs and sampling details), Table S2 (baseline characteristics), Tables S3–S4 (post hoc PK/PD metrics by covariates), Tables S5–S6 (simulated PK/PD metrics for different doses), and Figures S1–S3 (goodness-of-fit plots and VPCs stratified by dose and disease status). These provide additional validation and detail supporting the main findings.

---

### Future Directions
The model could be extended to pediatric patients <12 years using allometric scaling and physiologically-based PK approaches. Exposure-response analyses linking prekallikrein reduction to HAE attack rate would further strengthen the quantitative framework. Long-term data from open-label extensions could inform whether tolerance or time-varying covariates (e.g., weight, disease activity) affect the PK/PD relationship. Additionally, the model could be used to simulate alternative dosing regimens (e.g., loading doses, extended intervals) and to support regulatory submissions for label updates.

---

### Expert Commentary
This is a textbook example of how population PK/PD modeling can de-risk dosing decisions for a novel modality (GalNAc-conjugated ASO) in a rare disease. The authors correctly prioritized the PD endpoint (prekallikrein reduction) over PK exposure when assessing clinical relevance, recognizing that for a highly potent drug with a long half-life, small changes in exposure are unlikely to affect response. The decision to estimate allometric exponents freely rather than fixing them is debatable—while it improved model fit, it may complicate extrapolation to pediatric populations. The high BSV in $IC_{50}$ (83%) is noteworthy and suggests that some patients may require higher doses to achieve target engagement; however, the clinical data showing robust efficacy across the population mitigates this concern. The simulation comparing Q4W vs. Q1M and Q8W vs. Q2M is particularly elegant, as it directly addresses a practical question for patients and prescribers. This work sets a high standard for ASO PK/PD modeling and should be referenced in future regulatory submissions for similar compounds.

---

### Bottom Line
For practicing pharmacometricians, this paper provides a well-executed example of how population PK/PD modeling can support fixed dosing for a highly potent ASO in a rare disease. The key takeaway is that even substantial PK exposure differences due to body weight (up to 2-fold in $AUC$) may not translate into clinically relevant PD differences when the drug operates in the plateau region of the concentration-response curve. The modeling framework—two-compartment PK with indirect response PD, sequential estimation, and extensive covariate simulations—is directly transferable to other ASO programs. The demonstration that Q4W and Q1M (or Q8W and Q2M) regimens yield nearly identical profiles provides a strong rationale for flexible dosing schedules that improve patient convenience without compromising efficacy.

---

---
### Fact-Check Summary

**Total claims:** 49  
**Verdict distribution:** NUMERIC_MISMATCH: 1, SUPPORTED: 48  
**Overall action:** WARN

#### Flagged Claims

- ⚠️ **[NUMERIC_MISMATCH]** Weight range was 37–152 kg.
  - Source says: *"the median body weight was 78 kg (range: 37–151.9 kg)"*

---

## 📊 Figures

![Donidalorsen PK/PD model schematic. BL, baseline; CL/F, apparent clearance;Cp, donidalorsen concentration; IC50, concentration yielding half of the maximum inhib]({{ site.baseurl }}/assets/digests/2026-05-29-population-pharmacokineticpharmacodynamic-modeling-of-donidalorsen-an-antisense/figures/fig_01.png)

![Prediction-corrected visual predictive check for donidalorsen population (A) PK and (B) PK/PD models. Circles, individual observed data; dashed lines, observed 5]({{ site.baseurl }}/assets/digests/2026-05-29-population-pharmacokineticpharmacodynamic-modeling-of-donidalorsen-an-antisense/figures/fig_02.png)

![Model-predicted covariate effects on (A) PK and (B) PD metrics. Fold change is relative to the simulated reference individual, who was defined as a healthy volun]({{ site.baseurl }}/assets/digests/2026-05-29-population-pharmacokineticpharmacodynamic-modeling-of-donidalorsen-an-antisense/figures/fig_03.png)

![Post hoc (A) PK and (B) PD metrics stratified by body weight. Circles represent individual data, and dashed lines represent the median across all categories. AUC]({{ site.baseurl }}/assets/digests/2026-05-29-population-pharmacokineticpharmacodynamic-modeling-of-donidalorsen-an-antisense/figures/fig_04.png)

![Simulated steady-state PK and PD profiles for donidalorsen 80 mg (A) Q4W/Q1M and (B) Q8W/Q2M dosing regimens. The solid line shows the median and the shaded regi]({{ site.baseurl }}/assets/digests/2026-05-29-population-pharmacokineticpharmacodynamic-modeling-of-donidalorsen-an-antisense/figures/fig_05.png)