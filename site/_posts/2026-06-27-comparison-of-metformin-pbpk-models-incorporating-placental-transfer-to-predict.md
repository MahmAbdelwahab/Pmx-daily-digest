---
layout: post
title: "Comparison of Metformin PBPK Models Incorporating Placental Transfer to Predict Fetal and Maternal Exposure"
date: 2026-06-27
authors: "Tiley JB, Hartauer ME, et al."
journal: "Clinical Pharmacology & Therapeutics (inferred from PubMed ID 41289433)"
doi: "N/A"
paper_type: popk
tags: [popk, pbpk, regulatory]
excerpt_text: "This study compares four physiologically based pharmacokinetic (PBPK) modeling approaches for predicting metformin placental transfer and fetal exposure in pregnant women with gestational diabetes mellitus. The model incorporating five placental transporters (OCT3, PMAT, THTR2, SERT, MATE1) and passive permeability from PAMPA (Approach 4) best predicted umbilical cord concentrations, with 92% of observations within the 5th–95th percentile prediction interval. Pharmacometricians and clinical pharmacologists interested in pregnancy PBPK modeling and transporter-mediated placental transfer will find this work directly relevant to model-informed drug development in special populations."
pdf_path: "/assets/digests/2026-06-27-comparison-of-metformin-pbpk-models-incorporating-placental-transfer-to-predict/PMx_Comparison_of_Metformin_PBPK_Models_Inco_20260627.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study compares four physiologically based pharmacokinetic (PBPK) modeling approaches for predicting metformin placental transfer and fetal exposure in pregnant women with gestational diabetes mellitus. The model incorporating five placental transporters (OCT3, PMAT, THTR2, SERT, MATE1) and passive permeability from PAMPA (Approach 4) best predicted umbilical cord concentrations, with 92% of observations within the 5th–95th percentile prediction interval. Pharmacometricians and clinical pharmacologists interested in pregnancy PBPK modeling and transporter-mediated placental transfer will find this work directly relevant to model-informed drug development in special populations.

---

### Executive Summary
This study systematically evaluates four PBPK modeling approaches to predict metformin placental transfer and fetal exposure in pregnant women with gestational diabetes mellitus (GDM). Using the Simcyp Simulator, a pregnancy-specific metformin PBPK model was developed and verified against clinical data from non-pregnant and pregnant patients. Four placental transfer approaches were compared: (1) perfusion-limited, (2) permeability-limited using ex vivo cotyledon open-system clearance, (3) permeability-limited using a three-compartment model fit to closed-system cotyledon data, and (4) permeability-limited incorporating in vitro transporter kinetics (OCT3, PMAT, THTR2, SERT, MATE1) and PAMPA passive clearance. Approach 4 performed best, with 100% of maternal plasma concentrations and 92% of umbilical cord concentrations falling within the 5th–95th percentile prediction interval. Sensitivity analysis revealed that maternal uptake transporters (SERT, PMAT, THTR2) had the greatest influence on fetal exposure: a twofold increase in their intrinsic clearance increased predicted umbilical cord Cmax by 97%. This refined PBPK framework provides a valuable tool for predicting fetal drug exposure when placental transporter changes occur due to gestational age or disease.

---

### Scientific Context & Motivation
Pregnant women are frequently exposed to medications, yet clinical pharmacokinetic studies during pregnancy are challenging due to ethical and practical constraints. Metformin, a first-line treatment for type 2 diabetes and increasingly used for gestational diabetes mellitus (GDM), crosses the placenta via active transport and passive diffusion, raising concerns about fetal safety. While ex vivo placental perfusion experiments and opportunistic umbilical cord sampling at delivery provide some data, they are limited in scope and do not capture dynamic changes across gestation. Physiologically based pharmacokinetic (PBPK) modeling offers a mechanistic framework to integrate physiological changes of pregnancy with drug-specific properties, but the optimal approach to model placental transfer—particularly for transporter-dependent drugs like metformin—remains unclear. This study addresses the knowledge gap by systematically comparing four placental transfer modeling strategies, from simple perfusion-limited to complex transporter-integrated permeability-limited models, using clinical data from GDM patients as the benchmark.

---

## ⚡ Methodological Snapshot
The study used the Simcyp Simulator (v23) to develop a pregnancy-specific metformin PBPK model. The base model was verified against non-pregnant T2DM and pregnant GDM clinical data. Four placental transfer approaches were implemented: (1) perfusion-limited (default Simcyp), (2) permeability-limited using ex vivo cotyledon open-system apparent clearance, (3) permeability-limited using a three-compartment model fit to closed-system cotyledon data, and (4) permeability-limited incorporating in vitro transporter kinetics (OCT3, PMAT, THTR2, SERT, MATE1) and PAMPA passive clearance. Model performance was evaluated by the percentage of observed maternal and umbilical cord concentrations falling within the 5th–95th percentile prediction interval. Sensitivity analysis tested twofold changes in individual transporter clearances.

---

## 🏗️ Structural Model Breakdown
The base metformin PBPK model includes: (1) a first-order absorption compartment with lag time, (2) a full PBPK distribution model (14 tissue compartments) with Method 3 predicting tissue:plasma partition coefficients (Kp) accounting for ionization, (3) hepatic elimination via CYP3A4 metabolism, OCT1 uptake, and passive diffusion, (4) renal elimination via glomerular filtration, OCT2 uptake, MATE1 efflux, and passive diffusion. The placental transfer sub-model for Approach 4 consists of a maternal-placental interface with passive clearance (CL_PDM, maternal-to-placental; CL_PDF, placental-to-fetal) and active transporters: maternal-side uptake (SERT, PMAT, THTR2), maternal-side efflux (MATE1), and fetal-side uptake (OCT3). The placenta is modeled as a single compartment with bidirectional passive and active transport. The fetal compartment receives drug from the placenta and returns via umbilical vein.

---

### Detailed Methodological Analysis

#### Modeling Approach
Full PBPK model using Simcyp Simulator v23 with the default metformin compound file. Absorption: first-order with lag time (ka=0.15 h⁻¹, lag=0.29 h). Distribution: full PBPK with Method 3 (Rogers and Rowland with ion permeability), Kp scalar=0.31. Elimination: hepatic (CYP3A4, OCT1, passive) and renal (OCT2, MATE1, passive). Pregnancy population: Simcyp virtual pregnancy population with renal OCT2 and hepatic CYP3A4 ontogeny equations. Four placental transfer approaches implemented within the Simcyp framework.

#### Data Sources
Clinical data from 16 GDM patients taking metformin 500 mg immediate release every 12 h until delivery (Liao et al. 2020, 2021). Maternal and umbilical cord plasma samples collected 5.5–37.25 h post-last dose. Data below LOQ excluded (n=3 UCC, n=4 MPC). Paired FM ratio from 12 samples. Ex vivo cotyledon data from published studies (open and closed system). In vitro transporter kinetic data from literature (HEK293, PAMPA).

#### Estimation Methods
Model parameters were either taken from Simcyp defaults, literature, or optimized manually (ka, Kp scalar). No formal parameter estimation (e.g., nonlinear mixed-effects) was performed; the study used simulation-based comparison. Ten virtual trials were simulated to assess interstudy variability.

#### Model Evaluation
Visual inspection of predicted vs. observed concentration-time profiles. Quantitative metric: percentage of observed data points within the 5th–95th percentile prediction interval (target 90%). Comparison of predicted vs. observed Cmax and AUC0-12,ss. No formal goodness-of-fit tests or bootstrap/cross-validation were reported.

#### Covariate Analysis
No traditional covariate analysis was performed. Sensitivity analysis (twofold increase/decrease) was conducted for individual placental transporter intrinsic clearances (SERT, PMAT, THTR2, OCT3, MATE1) to assess impact on UCC and FM ratio. Maternal covariates (e.g., weight, gestational age) were implicitly accounted for via the virtual pregnancy population.

---

### Statistical Rigor Assessment
The study uses a simulation-based evaluation approach rather than formal statistical inference. The primary metric (percentage of observations within the 5th–95th percentile) is appropriate for assessing predictive performance but does not account for correlation within repeated measures. The sample size (n=16 patients, 12–13 evaluable observations per endpoint) is modest, and the wide sampling window (5.5–37.25 h) may reduce the informativeness of the comparison. No formal sensitivity analysis for model assumptions (e.g., absorption rate, Kp scalar) was performed. The sensitivity analysis for transporters used arbitrary twofold changes rather than physiologically plausible ranges. The imputation of 30% CV for placental transporters is based on limited data and may not reflect true variability. Overall, the statistical rigor is adequate for a model comparison study but would benefit from more formal uncertainty quantification.

---

## 📊 Key Findings
The PBPK model incorporating five placental transporters (OCT3, PMAT, THTR2, SERT, MATE1) and PAMPA-derived passive clearance (Approach 4) best predicted metformin umbilical cord concentrations (UCCs), with 92% of observed UCCs within the 5th–95th percentile prediction interval. In contrast, the perfusion-limited model (Approach 1) captured only 31% of UCCs, and the ex vivo cotyledon-based permeability-limited models (Approaches 2 and 3) captured 54%. Maternal plasma concentrations were well predicted by all approaches (92–100% within interval), indicating that placental transfer model choice minimally affects maternal PK predictions. Sensitivity analysis identified maternal uptake transporters (SERT, PMAT, THTR2) as the most influential determinants of fetal exposure: a twofold increase in their intrinsic clearance increased predicted UCC Cmax by 97%, while a 0.5-fold decrease reduced it by 49%. Fetal-side uptake transporter OCT3 and efflux transporter MATE1 also significantly affected UCCs, with opposite directional effects. The predicted fetal exposure remained well below toxic concentrations (>100 mg/kg in pediatric patients).

---

## 💡 Clinical & Regulatory Implications
The study confirms that metformin fetal exposure is highly dependent on placental transporter activity, particularly maternal uptake transporters (SERT, PMAT, THTR2). Clinically, this suggests that factors altering these transporters (e.g., genetic polymorphisms, drug-drug interactions, gestational age, disease states like preeclampsia) could significantly change fetal metformin exposure. The model predicts that fetal concentrations remain below toxic thresholds at the 500 mg twice-daily dose, providing some reassurance for current clinical practice. However, the model cannot yet be used to guide dosing at other gestational ages or in complicated pregnancies without further validation. The framework can be extended to other drugs that are substrates for these transporters, potentially informing fetal safety assessments in drug development. Regulatory agencies may consider such PBPK models as supportive evidence for dosing recommendations in pregnancy, but prospective clinical validation is needed.

---

### Strengths & Limitations

#### Strengths
- Systematic comparison of four distinct placental transfer modeling approaches using the same base PBPK model and clinical data, providing clear evidence for the superiority of the transporter-integrated approach.
- Incorporation of five placental transporters (OCT3, PMAT, THTR2, SERT, MATE1) with in vitro kinetic data, reflecting the complex active transport of metformin.
- Use of clinical data from GDM patients (n=16) with paired maternal and umbilical cord concentrations for model evaluation, including FM ratio time profiles.
- Sensitivity analysis quantifying the impact of individual transporter changes on fetal exposure, offering mechanistic insights for future applications.
- Transparent reporting of all model parameters, including absorption rate optimization and Kp scalar adjustment.

#### Limitations (Acknowledged by Authors)
- No validation data for fetal exposure prior to term; model predictions at earlier gestational ages cannot be verified.
- First-order absorption model assumed, which does not capture metformin's nonlinear absorption at higher doses; model limited to 500 mg twice-daily dosing.
- Physiological changes associated with GDM (e.g., reduced gastric mucosal blood flow, delayed gastric emptying) were not explicitly incorporated into the virtual pregnancy population.
- Transporter clearance values derived from overexpressed cell systems without protein abundance data for placental tissue, limiting in vitro-to-in vivo extrapolation accuracy.
- Some known metformin transporters (OCTN1, OCTN2) were excluded due to lack of kinetic data.

#### Limitations (Expert Review)
- The sample size for clinical data (n=16) is modest, and the time range of sampling (5.5–37.25 h post-dose) is wide, potentially masking model misspecification at earlier time points.
- The model assumes term pregnancy (38 weeks), but placental transporter expression may change dynamically across gestation; the sensitivity analysis only tested twofold changes without gestational age dependence.
- The PAMPA passive clearance values were not experimentally validated for placental tissue; the assumption that PAMPA data from non-placental systems applies to the placental barrier is unverified.
- Interindividual variability for placental transporters was imputed at 30% CV based on limited data for SERT and OCT3; this may not reflect true variability for all transporters.
- The model does not include fetal metabolism or clearance, which could affect UCC predictions, especially for drugs with fetal metabolic capacity.

#### Generalizability
The findings are specific to metformin and its transporter profile; the modeling framework is generalizable to other drugs with known placental transporter kinetics. However, the quantitative conclusions (e.g., which transporters dominate) are drug-specific. The approach of comparing multiple placental transfer models against clinical data is broadly applicable. Extrapolation to other gestational ages or disease states requires additional data on transporter ontogeny and pathology.

---

### Key Equations

**Passive diffusion clearance from PAMPA**

{% raw %}
$$
CL_{PD} = P_{app} \times A \times \text{scaling factor}
$$
{% endraw %}

Passive diffusion clearance (CL_PD) calculated from PAMPA apparent permeability (P_app), surface area (A), and a scaling factor to convert to units of L/h/mL placental volume. Used in Approaches 2–4.

**In vitro intrinsic transporter clearance scaling**

{% raw %}
$$
CL_{int,T} = V_{max} / K_m \times RAF/REF
$$
{% endraw %}

Intrinsic transporter-mediated clearance (CL_int,T) derived from in vitro Michaelis-Menten parameters (V_max, K_m) and scaled using relative activity factor (RAF) or relative expression factor (REF). Used in Approach 4.

**Renal OCT2 ontogeny during pregnancy**

{% raw %}
$$
\text{Renal OCT2} = 1 + 0.0406x - 0.0007x^2, \text{ where } x = \text{Gestational Week}
$$
{% endraw %}

Empirical equation describing the change in renal OCT2 activity over the course of pregnancy, used in the virtual pregnancy population.

**Hepatic CYP3A4 ontogeny during pregnancy**

{% raw %}
$$
\text{Hepatic CYP3A4} = 1 + 0.0129x + 0.0005x^2, \text{ where } x = \text{Gestational Week}
$$
{% endraw %}

Empirical equation describing the change in hepatic CYP3A4 activity over the course of pregnancy, used in the virtual pregnancy population.

---

### Figures & Tables

- **Figure 1**: Schematic workflow of metformin PBPK model development, showing the four placental transfer approaches evaluated.
  - *Significance*: Provides a visual overview of the modeling strategy and the four approaches compared.
- **Figure 2**: PBPK model predicted steady-state concentration-time profiles for (a) non-pregnant T2DM patients and (b) pregnant GDM patients, with observed data overlaid.
  - *Significance*: Demonstrates the base model verification against clinical data before incorporating placental transfer.
- **Figure 3**: Simulated steady-state maternal plasma concentration, umbilical cord concentration, and FM ratio versus time profiles for all four placental transfer approaches, with observed clinical data.
  - *Significance*: Key comparison figure showing the performance of each approach; Approach 4 best captures the UCC and FM ratio data.
- **Figure 4**: Sensitivity analysis using Approach 4: effect of twofold increase or 0.5-fold decrease in placental transporter intrinsic clearances on UCC and FM ratio profiles.
  - *Significance*: Identifies maternal uptake transporters (SERT, PMAT, THTR2) as the most influential on fetal exposure.
- **Table 1**: Summary of metformin PBPK model parameters and virtual pregnancy population parameters, including placental transfer parameters for all four approaches.
  - *Significance*: Comprehensive parameter table essential for model reproduction and understanding the differences between approaches.
- **Table 2**: Comparison of model performance metrics (percentage of observations within 5th–95th percentile, Cmax, Tmax, AUC0-12,ss) for maternal and fetal compartments across all four approaches.
  - *Significance*: Quantitative summary of model selection criteria; Approach 4 achieves 92% of UCCs within the prediction interval.

---

### Code & Reproducibility Assessment
The study used the Simcyp Simulator (version 23, Certara), a commercial software platform. No custom code or model files were provided in the publication or supplementary materials. The model parameters are reported in Table 1, but full model files are not publicly available, limiting full reproducibility.

---

### Supplementary Materials
Supplementary File S1 is mentioned in the text and contains additional details on the calculation of passive clearance and transporter intrinsic clearances, as well as the sensitivity analysis methods. No supplementary tables or figures were explicitly listed in the main text beyond Table S2 (referenced but not shown).

---

### Future Directions
Future work should (1) incorporate gestational age-dependent changes in placental transporter expression and activity to enable predictions across pregnancy, (2) validate the model with clinical data from earlier gestational ages, (3) include additional transporters (OCTN1, OCTN2) as kinetic data become available, (4) refine in vitro-to-in vivo extrapolation using placental protein abundance data (relative expression factors), (5) extend the model to higher metformin doses by incorporating nonlinear absorption, and (6) apply the framework to other drugs that are substrates for the same placental transporters.

---

### Expert Commentary
This study represents a significant step forward in pregnancy PBPK modeling by rigorously comparing multiple placental transfer approaches against clinical data. The clear superiority of the transporter-integrated model (Approach 4) underscores the importance of incorporating active transport mechanisms for drugs like metformin. The sensitivity analysis is particularly valuable, identifying maternal uptake transporters as the key determinants of fetal exposure—a finding with implications for drug-drug interactions and pharmacogenomics in pregnancy. However, the lack of protein abundance data for scaling transporter clearances is a notable gap; the field urgently needs quantitative proteomics data for placental transporters across gestation. The assumption of first-order absorption is pragmatic but limits dose extrapolation; given metformin's nonlinear absorption, future models should consider saturable intestinal transport. Overall, this work provides a template for developing and evaluating placental transfer models and highlights the need for more clinical data at earlier gestational ages to fully validate such models.

---

### Bottom Line
For permeability-limited drugs like metformin, incorporating in vitro transporter kinetics and passive permeability into a pregnancy PBPK model (Approach 4) substantially improves prediction of fetal exposure compared to perfusion-limited or ex vivo cotyledon-based approaches. Maternal uptake transporters (SERT, PMAT, THTR2) are the primary drivers of fetal metformin exposure. This refined PBPK framework, once validated with additional gestational age data, can inform dosing decisions and fetal safety assessments for metformin and other transporter-dependent drugs in pregnancy.

---

---

## 📊 Figures

![Schematic workflow of metformin PBPK model development. CLint,T, in vitro intrinsic transporter-mediated clearance; CLPDF, placental-to-fetal passive clearance;]({{ site.baseurl }}/assets/digests/2026-06-27-comparison-of-metformin-pbpk-models-incorporating-placental-transfer-to-predict/figures/fig_01.png)

![PBPK model predicted steady-state concentration versus time profiles for (a) non-pregnant patients with type 2 diabetes mellitus (T2DM) and (b) pregnant patients]({{ site.baseurl }}/assets/digests/2026-06-27-comparison-of-metformin-pbpk-models-incorporating-placental-transfer-to-predict/figures/fig_02.png)

![Simulated steady-state maternal plasma concentration versus time, umbilical cord concentration versus time, and fetal to maternal (FM) ratio versus time profiles]({{ site.baseurl }}/assets/digests/2026-06-27-comparison-of-metformin-pbpk-models-incorporating-placental-transfer-to-predict/figures/fig_03.png)

![Sensitivity analysis using placental transfer modeling Approach 4 to investigate how potential alterations in placental transporters due to gestational age and/o]({{ site.baseurl }}/assets/digests/2026-06-27-comparison-of-metformin-pbpk-models-incorporating-placental-transfer-to-predict/figures/fig_04.png)