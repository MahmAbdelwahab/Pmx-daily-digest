---
layout: post
title: "Population Pharmacokinetic/Pharmacodynamic Modeling of Donidalorsen, an Antisense Oligonucleotide in Development for Prophylaxis of Hereditary Angioedema"
date: 2026-02-09
authors: "John K. Diep et al."
journal: "Clinical Pharmacology & Therapeutics, 2026, 119(2), 206-216"
doi: "https://doi.org/10.1002/psp4.70206"
paper_type: generic
tags: [generic, covariate-analysis, regulatory]
excerpt_text: "This study presents a comprehensive population PK/PD model for donidalorsen, an antisense oligonucleotide for hereditary angioedema (HAE). It demonstrates that despite body weight influencing PK exposure, no dose adjustments are needed due to the drug's high potency and sustained PD effect. Pharmacometricians involved in ASO development or HAE treatment should review this paper for insights into modeling complex drug-response relationships and supporting flexible dosing regimens."
pdf_path: "/assets/digests/2026-02-09-population-pharmacokineticpharmacodynamic-modeling-of-donidalorsen-an-antisense/PMx_Population_PharmacokineticPharmacodynami_20260209.pdf"
retroactively_classified: true
---

### Quick Take
This study presents a comprehensive population PK/PD model for donidalorsen, an antisense oligonucleotide for hereditary angioedema (HAE). It demonstrates that despite body weight influencing PK exposure, no dose adjustments are needed due to the drug's high potency and sustained PD effect. Pharmacometricians involved in ASO development or HAE treatment should review this paper for insights into modeling complex drug-response relationships and supporting flexible dosing regimens.

---

### Executive Summary
This paper successfully develops and validates population pharmacokinetic (PK) and pharmacodynamic (PD) models for donidalorsen, an antisense oligonucleotide targeting prekallikrein (PKK) in hereditary angioedema (HAE). Leveraging pooled data from Phase 1-3 studies, the models characterize donidalorsen's two-compartment PK and its indirect inhibitory effect on PKK production. Crucially, the analysis concludes that while body weight significantly impacts PK exposure, this does not translate into clinically meaningful differences in PKK reduction due to donidalorsen's high potency. This supports a fixed-dose regimen and flexible monthly or every-two-month dosing, providing valuable guidance for clinical practice and future drug development in HAE.

---

## ⚡ Methodological Snapshot
The study employed a nonlinear mixed-effects modeling approach to develop population PK and PK/PD models for donidalorsen. A two-compartment model with first-order absorption and elimination best described donidalorsen's PK, while an indirect response model, inhibiting PKK production, characterized its PD effect. The models were built using pooled data from four Phase 1-3 clinical trials in healthy volunteers and HAE patients, encompassing various doses and administration frequencies. Covariate analysis was systematically performed using graphical assessments and a stepwise search to identify factors influencing PK and PD parameters.

---

## 🏗️ Structural Model Breakdown
The structural PK model for donidalorsen was a standard 2-compartment disposition model with first-order absorption and elimination from the central compartment (Figure 1). Inter-individual variability (IIV) was included on apparent clearance (CL/F), apparent central volume of distribution (Vc/F), apparent intercompartmental clearance (Q/F), apparent peripheral volume of distribution (Vp/F), and the first-order absorption rate constant (ka), with a full omega block. An additive error model was applied to log-transformed data. The PD model was an indirect response model, where donidalorsen inhibited the rate of PKK production. This model included parameters for baseline PKK (BL), first-order loss rate constant (kout), maximal fractional inhibitory capacity (Imax), and the concentration yielding half of the maximum inhibitory effect (IC50). A proportional residual error model was used for PD. Covariates identified for PK parameters included body weight (on CL/F, Vc/F, Q/F, Vp/F), site of administration (on ka), drug presentation (on ka), and disease status (on Vc/F, Q/F). For PD parameters, disease status was a covariate on BL and IC50.

---

### Detailed Methodological Analysis

#### Modeling Approach
Population PK and PK/PD models were developed using a nonlinear mixed-effects approach. The PK model was a 2-compartment disposition model with first-order absorption and elimination from the central compartment. The PD model was a standard indirect response model, where donidalorsen inhibited the rate of PKK production. The sequential model-building method was used, first establishing the final PK model, then using individual post hoc PK parameters to estimate PD parameters. Phoenix NLME version 8.4 was used for analyses.

#### Data Sources
Pooled data from four clinical trials (NCT03263507, NCT04030598, NCT05139810, and ISIS 721744-CS9) were included. These comprised Phase 1-3 studies in 101 healthy volunteers and 76 adult and adolescent patients (≥12 years) with HAE. Doses ranged from 20 to 80 mg administered subcutaneously every 4 weeks (Q4W) or every 8 weeks (Q8W) over 13-21 weeks. Plasma donidalorsen and PKK concentrations were measured using validated hybridization electrochemiluminescence and ELISA assays, respectively. Details on study designs, populations, dosing, and sampling are summarized in Table S1.

#### Estimation Methods
The models were estimated using the first-order conditional estimation extended least squares (FOCE ELS) algorithm with central difference and sandwich-based standard error methods. Inter-individual variability (IIV) and inter-occasion variability (IOV) were explored, along with different residual error models (additive on log-transformed data for PK, proportional for PD).

#### Model Evaluation
Model selection was based on the minimum objective function value, parameter precision (%RSE), shrinkage, and goodness-of-fit (GOF) plots (observed vs. population/individual predictions, CWRES vs. PRED/time). Model qualification was performed using prediction-corrected visual predictive checks (pcVPCs) with 200 simulated replicates (Figure 2). VPCs stratified by dose and disease status were also examined (Figures S2 and S3).

#### Covariate Analysis
Covariate analysis was guided by graphical assessments (eta vs. covariate plots, concentration-time profiles stratified by covariates) and a systematic stepwise search. Covariates were added using forward addition (p < 0.01) and removed using backward elimination (p < 0.001). Potential PK covariates included age, body weight, sex, race, ethnicity, geographic region, disease status, HAE type, drug presentation, site of administration, hepatic dysfunction, and baseline lab values. Potential PD covariates included age, body weight, sex, race, ethnicity, geographic region, disease status, HAE type, hepatic dysfunction, and baseline PKK.

---

### Scientific Context & Motivation
Hereditary angioedema (HAE) is a rare, life-threatening genetic disorder characterized by recurrent swelling attacks, primarily driven by uncontrolled activation of the kallikrein-kinin system and excessive bradykinin release. Donidalorsen, a 2'-MOE-modified antisense oligonucleotide (ASO), addresses this by selectively degrading prekallikrein (PKK) mRNA, thereby reducing PKK protein production. While existing prophylactic treatments for HAE are available, there remains a need for therapies with less frequent dosing. This study fills a critical knowledge gap by quantitatively characterizing donidalorsen's PK and PD, identifying influential covariates, and using simulations to support optimal, convenient dosing regimens, thus advancing model-informed drug development for ASOs in rare diseases.

---

### Statistical Rigor Assessment
The statistical rigor of this study is robust. The use of a nonlinear mixed-effects approach with FOCE ELS is appropriate for population PK/PD analysis. The pooling of data from multiple clinical trials (Phase 1-3) provides a comprehensive dataset for model development. The handling of data below LLOQ (exclusion) and outliers (CWRES > 5) is standard, as is the exclusion of PK data post-ADA onset. Model evaluation included a thorough assessment of objective function value, parameter precision (%RSE), shrinkage, and goodness-of-fit plots, which are essential for model diagnostics. The use of prediction-corrected visual predictive checks (pcVPCs) with 200 simulated replicates provides a strong external validation of the model's predictive performance. The systematic stepwise covariate analysis (forward addition p < 0.01, backward elimination p < 0.001) is a standard and acceptable approach. While the authors acknowledge that more complex absorption models could have been explored, the chosen first-order absorption was deemed adequate, suggesting a pragmatic balance between model complexity and data description. The sample size (177 individuals, 4242 PK, 1159 PD samples) is substantial for a rare disease, contributing to the reliability of parameter estimates.

---

## 📊 Key Findings
The final PK model was a 2-compartment model with first-order absorption and elimination, yielding a population terminal elimination half-life of 31.4 days. Key PK parameter estimates (Table 1) included CL/F of 12.8 L/h and Vc/F of 69.8 L. Body weight was the most influential PK covariate, with higher weights leading to lower exposure (e.g., 100 kg vs. 70 kg resulted in 42% lower AUCτ,ss). Site of administration (arm vs. abdomen/thigh) and drug presentation (autoinjector vs. vial) also impacted ka and Cmax,ss, but to a lesser extent. Disease status (HAE patient vs. healthy volunteer) affected Vc/F and Q/F. The PD model was an indirect response model inhibiting PKK production. Key PD parameter estimates (Table 2) included a baseline PKK (BL) of 139 mg/L and an IC50 of 0.158 ng/mL. Disease status was the only significant PD covariate, with HAE patients having 13% lower BL and 77% higher IC50 than healthy volunteers. However, despite PK differences, simulations showed that PKK reduction was similar across body weight quartiles (difference < 7%) and other PK covariates, indicating that PK variability did not translate into meaningful PD differences due. Simulations supported that 80 mg Q4W/Q1M achieved ~76% mean steady-state maximum PKK reduction, and 80 mg Q8W/Q2M achieved ~65% reduction, both maintaining clinically significant reductions at trough.

---

## 💡 Clinical & Regulatory Implications
The developed population PK/PD model for donidalorsen provides strong evidence to support a fixed-dose regimen of 80 mg for adult and adolescent patients with HAE, irrespective of intrinsic or extrinsic factors such as body weight, mild renal impairment, or mild hepatic impairment. This simplifies dosing and reduces the need for individualized adjustments, enhancing patient convenience and adherence. The simulations further support the interchangeability of Q4W with monthly (Q1M) and Q8W with every-2-month (Q2M) dosing, offering greater flexibility in treatment schedules without compromising efficacy. This finding is particularly impactful for a chronic condition like HAE, where long-term adherence to therapy is crucial. The sustained PKK reductions observed in simulations (e.g., >50% at trough for Q8W/Q2M) align with clinical efficacy observed in Phase 3 trials, reinforcing donidalorsen's role as an effective prophylactic agent.

---

### Strengths & Limitations

#### Strengths
- Comprehensive pooled data from Phase 1-3 studies in both healthy volunteers and HAE patients, providing a robust dataset for model development.
- Thorough covariate analysis, identifying key intrinsic and extrinsic factors influencing PK and PD, and quantifying their impact.
- Robust model evaluation using goodness-of-fit plots and prediction-corrected visual predictive checks (pcVPCs) to ensure model adequacy and predictive performance.
- Clear demonstration that PK variability due to covariates (e.g., body weight) does not translate into clinically meaningful PD differences, supporting a fixed-dose regimen.
- Simulations provide strong support for flexible dosing frequencies (Q1M, Q2M) that are more convenient for patients, directly impacting clinical practice.
- The use of an indirect response model for PD is biologically plausible, reflecting the drug's mechanism of action on PKK production.

#### Limitations (Acknowledged by Authors)
- More complex absorption models (e.g., including IOV on ka and F, lag or transit compartments) could have been explored, though simple first-order absorption was deemed adequate.
- The sequential PK/PD modeling approach, while justified by previous literature, might not fully capture potential feedback loops or complex interactions that a simultaneous approach could.

#### Limitations (Expert Review)
- The study did not include patients with moderate or severe hepatic or renal impairment, limiting the generalizability of the fixed-dose recommendation to these populations.
- While body weight was the most influential PK covariate, the estimated exponents for allometric scaling were not fixed to standard values (0.75 for clearance, 1 for volume), which could be further explored for consistency with broader ASO pharmacology.
- The impact of anti-drug antibodies (ADA) was handled by excluding PK data post-onset, which is a common approach but might mask subtle effects of ADA on PK/PD if not further characterized.

#### Generalizability
The findings are highly generalizable to adult and adolescent patients (≥12 years) with HAE-C1INH-Type1 or HAE-C1INH-Type2, as the data included a diverse population from global Phase 2 and 3 trials. The conclusions regarding fixed dosing and flexible regimens are directly applicable to this patient group. However, generalizability is limited for pediatric patients under 12 years of age and for patients with moderate or severe hepatic or renal impairment, as these populations were not included in the analysis.

---

### Key Equations

**Indirect Response Model for PKK**

$$
\frac{d\text{PKK}}{dt} = k_{\text{in}} \cdot \left(1 - \frac{I_{\text{max}} \cdot C}{IC_{50} + C}\right) - k_{\text{out}} \cdot \text{PKK}
$$

This equation describes the rate of change of prekallikrein (PKK) concentration over time. It is an indirect response model where donidalorsen (concentration C) inhibits the production rate (k_in) of PKK, and PKK is lost at a first-order rate (k_out). The initial condition is PKK(0) = Baseline PKK.

---

### Figures & Tables

- **Figure 1**: Donidalorsen PK/PD model schematic.
  - *Significance*: This figure visually represents the chosen 2-compartment PK model and the indirect response PD model, clearly illustrating the drug's absorption, distribution, elimination, and its inhibitory effect on PKK production. It serves as a foundational diagram for understanding the model structure.
- **Figure 2**: Prediction-corrected visual predictive check for donidalorsen population (A) PK and (B) PK/PD models.
  - *Significance*: This figure demonstrates the excellent predictive performance of both the PK and PK/PD models. The observed data (circles) generally fall within the model-predicted 95% confidence intervals, confirming the models' ability to accurately describe the time course of donidalorsen concentrations and PKK response.
- **Figure 3**: Post hoc (A) PK and (B) PD metrics stratified by body weight.
  - *Significance*: This figure is crucial for illustrating the dissociation between PK and PD effects. It shows that while body weight significantly impacts PK exposure (AUCτ,ss, Cmax,ss, Ctrough,ss), the resulting PKK reduction (PD metric) remains largely consistent across different body weight quartiles, supporting the fixed-dose recommendation.
- **Figure 4**: Simulated steady-state PK and PD profiles for donidalorsen 80 mg (A) Q4W/Q1M and (B) Q8W/Q2M dosing regimens.
  - *Significance*: This figure provides direct evidence supporting flexible dosing. It shows that PK and PD profiles for Q4W vs. Q1M, and Q8W vs. Q2M, closely overlap, indicating that switching to more convenient monthly or every-two-month regimens will not lead to clinically relevant differences in exposure or PKK reduction.
- **Table 1**: Parameter estimates for the final population PK model.
  - *Significance*: This table presents the estimated population PK parameters (e.g., CL/F, Vc/F, ka) and their precision (%RSE), along with the estimated exponents and effects of identified covariates (body weight, disease status, site of administration, drug presentation). It quantifies the typical PK behavior and the magnitude of covariate influences.
- **Table 2**: Parameter estimates for the final population PK/PD model.
  - *Significance*: This table provides the estimated population PD parameters (e.g., BL, kout, Imax, IC50) and their precision, including the effects of disease status on BL and IC50. These parameters are fundamental to understanding the drug's pharmacological effect on PKK.
- **Table S1**: Summary of study designs, populations, dosing regimens, and PK/PD sampling details.
  - *Significance*: This supplementary table provides essential context for the pooled data, detailing the characteristics of the clinical trials from which the data were sourced, which is critical for assessing the representativeness and quality of the dataset.
- **Table S2**: Baseline characteristics of individuals included in the population PK/PD analyses.
  - *Significance*: This table provides demographic and baseline clinical characteristics of the study population, allowing for an assessment of the diversity and representativeness of the subjects included in the modeling analysis.
- **Table S3**: Individual post hoc PK metrics stratified by intrinsic and extrinsic factors.
  - *Significance*: This table provides detailed individual PK metrics across various covariate groups, further supporting the findings from the main covariate analysis and illustrating the range of PK variability.
- **Table S4**: Individual post hoc PD metrics stratified by intrinsic and extrinsic factors.
  - *Significance*: This table is critical for demonstrating that despite PK variability, PD responses (PKK reduction) remain largely consistent across different covariate groups, reinforcing the conclusion that dose adjustments are not needed.
- **Table S5**: Simulated steady-state PK metrics in patients with HAE following various monthly dosing regimens.
  - *Significance*: This table provides quantitative PK outcomes for different monthly doses, aiding in the selection of optimal dosing strategies and understanding the dose-exposure relationship.
- **Table S6**: Simulated steady-state PD metrics in patients with HAE following various monthly dosing regimens.
  - *Significance*: This table presents the simulated PD responses (PKK reduction) for different monthly doses, directly informing the efficacy expectations for various dosing regimens and supporting the clinical implications.

---

### Supplementary Materials
The supplementary materials include detailed tables summarizing the clinical study designs, patient demographics, individual post hoc PK and PD metrics stratified by intrinsic and extrinsic factors, and simulated steady-state PK and PD metrics for various monthly dosing regimens (Tables S1-S6). These tables provide crucial supporting data for the main findings and enhance the transparency and reproducibility of the analysis.

---

### Future Directions
Future research should focus on extending the model to pediatric patients under 12 years of age to support clinical trial designs in this population. Further exposure-response analyses to quantify the relationship between PKK reduction and HAE attack rate could provide additional mechanistic insights and support dose frequency switching. Investigating the impact of donidalorsen in patients with moderate or severe renal or hepatic impairment would also be crucial to broaden the applicability of the fixed-dose recommendation.

---

### Expert Commentary
This paper represents a solid piece of pharmacometric work, typical of what is expected for regulatory submissions for ASOs. The comprehensive pooling of data across phases and populations, coupled with a rigorous covariate analysis, provides a strong foundation for the conclusions. The finding that significant PK variability does not translate into meaningful PD differences due to the drug's high potency is a recurring theme in ASO development and a key teaching point for junior pharmacometricians. It highlights the importance of understanding the full exposure-response curve, especially the plateau phase, when assessing the clinical relevance of covariates. The support for flexible dosing regimens (monthly/every-two-month) based on modeling is a prime example of how MIDD directly impacts patient quality of life and adherence, moving beyond rigid trial-based schedules. The terminal half-life of ~1 month is also a notable characteristic for ASOs, enabling less frequent dosing compared to other HAE treatments. This work sets a good precedent for future ASO development, emphasizing the value of integrated PK/PD modeling in optimizing dosing strategies.

---

### Bottom Line
Practicing pharmacometricians should note that this study provides a robust example of how PopPK/PD modeling can inform dosing strategies for antisense oligonucleotides, particularly in rare diseases. The key takeaway is that significant PK variability, often driven by covariates like body weight, may not necessitate dose adjustments if the drug's potency ensures sustained target engagement within the plateau phase of the exposure-response curve. This supports fixed-dose regimens and flexible dosing frequencies, simplifying treatment for patients and optimizing drug development programs.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: Donidalorsen PK/PD model schematic. BL, baseline; CL/F, apparent clearance;Cp, donidalorsen concentration; IC50, concentration yielding half of the maximum inhib],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.png", width: 90%),
  caption: [FIGURE 2: Prediction-corrected visual predictive check for donidalorsen population (A) PK and (B) PK/PD models. Circles, individual observed data; dashed lines, observed 5],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 4: Post hoc (A) PK and (B) PD metrics stratified by body weight. Circles represent individual data, and dashed lines represent the median across all categories. AUC],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [FIGURE 5: Simulated steady-state PK and PD profiles for donidalorsen 80 mg (A) Q4W/Q1M and (B) Q8W/Q2M dosing regimens. The solid line shows the median and the shaded regi],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.png", width: 90%),
  caption: [Details are in the caption following the image],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```