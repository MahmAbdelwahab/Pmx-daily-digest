---
layout: post
title: "Development of an isavuconazole physiologically-based pharmacokinetic model for adult and pediatric populations."
date: 2026-10-21
authors: "Choules, Mary P et al."
journal: "Journal of Pharmacokinetics and Pharmacodynamics"
doi: "10.1007/s10928-026-10061-8"
paper_type: popk
tags: [popk, pbpk, pediatrics, regulatory]
excerpt_text: "This paper develops and verifies a full PBPK model for isavuconazole in adults and pediatrics, then predicts DDI risk in children. It finds overall similar DDI risk but elevated risk in 1–3-year-olds at the higher dose, urging caution with narrow-therapeutic-index drugs. Read this if you are involved in pediatric antifungal dosing, PBPK-based DDI prediction, or regulatory submissions for triazoles."
pdf_path: "/assets/digests/2026-10-21-development-of-an-isavuconazole-physiologically-based-pharmacokinetic-model-for/PMx_Development_of_an_isavuconazole_physiolo_20261021.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper develops and verifies a full PBPK model for isavuconazole in adults and pediatrics, then predicts DDI risk in children. It finds overall similar DDI risk but elevated risk in 1–3-year-olds at the higher dose, urging caution with narrow-therapeutic-index drugs. Read this if you are involved in pediatric antifungal dosing, PBPK-based DDI prediction, or regulatory submissions for triazoles.

---

### Executive Summary
This study describes the development and verification of a full physiologically-based pharmacokinetic (PBPK) model for isavuconazole in both adult and pediatric populations using the Simcyp simulator. The model was built with a hybrid bottom-up/top-down approach, incorporating in vitro metabolism data, clinical pharmacokinetics, and DDI data. After successful verification in adults (GMFE <1.5 for all parameters) and pediatrics (GMFE <1.25), the model was used to simulate DDI risk in pediatric cancer patients for 11 comedications. The results show similar overall DDI risk between adults and children, but a trend of 7–36% larger geometric mean AUC ratios in children 1–<3 years receiving the 15 mg/kg isavuconazonium sulfate dose, driven by higher isavuconazole exposure. The authors conclude that extra caution is warranted in this young age group, particularly with narrow-therapeutic-index drugs. The work underscores the utility of PBPK modeling to fill regulatory and clinical gaps in pediatric DDI assessment.

---

### Scientific Context & Motivation
Isavuconazole is approved for pediatric use but lacked clinical DDI studies in this population. PBPK modeling is an established tool to extrapolate DDI risk from adults to children, as pediatric enzyme ontogeny alters metabolic capacity. The authors address the gap by building a robust adult model, verifying it with extensive clinical data, translating to pediatrics with appropriate ontogeny, and then simulating DDI interactions with key CYP3A and P-gp perpetrators/victims. This work extends the application of PBPK to age-dependent DDI prediction and provides practical guidance for clinicians.

---

## ⚡ Methodological Snapshot
The isavuconazole PBPK model was built using a hybrid bottom-up/top-down approach in Simcyp v24. The active form (isavuconazole) was administered directly, assuming rapid prodrug conversion. A full PBPK model with first-order absorption and tissue partitioning (Vss=4.48 L/kg) was used. Intrinsic clearance was calculated via retrograde from CLiv=2.36 L/h, with CYP3A4/5 as primary metabolic pathways. DDI parameters (Ki for CYP3A4/5, P-gp, Ki for CYP2C8/9/19/2D6) were initially from in vitro data and then refined using clinical DDI studies.[^fc-1] The model was verified in adults (GMFE <1.5; all DDI within Guest criteria except midazolam and rifampicin) and pediatrics (GMFE <1.25). The pediatric model incorporated ontogeny for CYP3A4 (profile 2 with extended age cap) and coupling to CYP3A5. Simulations were run for 11 comedications in pediatric cancer populations across four age groups.[^fc-2]

---

## 🏗️ Structural Model Breakdown
The isavuconazole PBPK model is a full PBPK model in Simcyp with: a first-order absorption compartment (no prodrug), a systemic circulation, and tissue compartments with permeability-limited distribution (Kp scalar=1). The model uses a retrograde-calculated intrinsic clearance (CLint) for CYP3A4 and CYP3A5, with a total CLiv of 2.36 L/h. Biliary clearance is set to 46.1% of dose (with 7.84% eliminated unchanged in feces). The volume of distribution is driven by tissue partition coefficients yielding Vss=4.48 L/kg. Inhibition and induction parameters are included for CYP3A4/5, P-gp, and other enzymes, with Ki and Indmax values from in vitro and optimized using DDI studies. No covariate models are used; instead, adult parameters are scaled to pediatric populations using ontogeny functions for CYP3A4 and CYP3A5 coupled to CYP3A4 expression.

---

### Detailed Methodological Analysis

#### Modeling Approach
Full PBPK model in Simcyp (v24) with first-order absorption and full distribution model (Kp scalar=1). Only the active moiety isavuconazole was simulated, not the prodrug. The base model used in vitro metabolism and physicochemical data, then was optimized using observed PK and DDI data. For pediatrics, adult drug parameters were retained, and population-specific ontogeny (CYP3A4 profile 2, CYP3A5 correlation) was applied.

#### Data Sources
Clinical PK data from Phase 1–3 adult studies (single and multiple dose iv/oral), mass balance study, renal impairment study, and published pediatric PK studies were used for model building and verification. For DDI verification, observed adult DDI studies with ketoconazole, rifampicin, cyclosporine (×2), midazolam, digoxin, warfarin, ethinyl estradiol, rivaroxaban, edoxaban, and others were used. Simcyp virtual populations (healthy volunteers, cancer patients, and pediatric hematologic cancer) were used for simulations.

#### Estimation Methods
Parameter optimization was performed via a top-down approach using clinical DDI data to refine intrinsic clearance (CLint via retrograde calculation), fraction metabolized (fm) for CYP3A4/5, and inhibition/induction parameters (Ki, Indmax, IndC50). No formal non-linear mixed-effects estimation was used; parameters were adjusted through sensitivity and iterative simulation to achieve Guest-criteria acceptance.

#### Model Evaluation
Model performance was assessed using geometric mean fold error (GMFE) for PK parameters and Guest criteria for DDI ratios. Sensitivity analyses were conducted for Ki values (CYP3A4, CYP3A5, P-gp) ±10-fold. Virtual trial designs included 10 trials ×10 subjects, with appropriate demographics. For pediatric DDI predictions, doses were selected from FDA pediatric labels.

#### Covariate Analysis
Covariates were not analyzed in the traditional sense; instead, pediatric age groups and dose levels (10 mg/kg vs 15 mg/kg) served as key stratifiers. CYP3A4 ontogeny was adjusted to Simcyp's profile 2 with an extended age cap to capture elevated enzyme activity through adolescence. No ontogeny was applied to P-gp because expression matures early in life.

---

### Statistical Rigor Assessment
The study employs appropriate metrics for PBPK model performance: GMFE <1.5 for adult PK, GMFE <1.25 for pediatric PK, and Guest criteria (with 20% variability) for DDI ratios. Sensitivity analyses were performed on key Ki values to assess model robustness. However, the model doesn't provide formal uncertainty quantification (e.g., confidence intervals on predicted ratios) beyond 90% CIs from simulations. The simulation design (10×10 subjects) is reasonable but not powered to detect small differences. Missing data handling is not applicable, as virtual trials are deterministic. The authors transparently report underprediction for midazolam and rifampicin, which tempers confidence in these specific DDI predictions.

---

## 📊 Key Findings
The isavuconazole PBPK model was successfully verified in adults (GMFE <1.5) and pediatrics (GMFE <1.25) for both iv and oral routes. Model-predicted DDI risk was broadly similar between adult and pediatric populations, but the 1–<3-year age group receiving the 15 mg/kg isavuconazonium sulfate dose showed 7–36% higher geometric mean AUCinf ratios compared to adults. This was attributed to higher systemic isavuconazole exposure (steady-state AUC24h 113 mg·h/L vs ~80 mg·h/L in older children receiving 10 mg/kg). Victim DDI risk (with ketoconazole or rifampicin) was lower in children than adults, consistent with higher CYP3A activity in pediatrics until adolescence. The model underpredicted the adult midazolam and rifampicin DDI studies, suggesting possible underestimation of CYP3A inhibition/induction for these scenarios in pediatrics.

---

## 💡 Clinical & Regulatory Implications
The verified pediatric PBPK model supports the clinical use of isavuconazole in children ≥1 year with weight-based dosing, but highlights that the 15 mg/kg dose (for ages 1–<3 years) increases systemic exposure and DDI potential. Predicted AUC ratios for CYP3A and P-gp substrates were ≥1.5-fold for digoxin and warfarin in this group, warranting caution with such narrow-therapeutic-index drugs. The model also predicts lower victim-DDI risk in children than adults due to higher CYP3A activity, but underprediction for midazolam and rifampicin in adults suggests pediatric predictions for these drugs should be interpreted conservatively.

---

### Strengths & Limitations

#### Strengths
- Comprehensive use of multiple clinical DDI studies to optimize and verify key parameters (Ki, fm, induction).
- Transparent reporting of model performance metrics and deviations (midazolam, rifampicin).
- Rigorous sensitivity analysis for critical Ki values.
- Appropriate consideration of pediatric ontogeny, especially for CYP3A4 and CYP3A5.
- Simulations designed to mirror clinical trial conditions, enhancing clinical relevance.

#### Limitations (Acknowledged by Authors)
- Underprediction of the rifampicin victim DDI and the midazolam perpetrator DDI, possibly due to unmodeled UGT induction or enterohepatic recirculation.
- Lack of pediatric clinical DDI data to verify Ki and induction parameters.
- Assumption that prodrug conversion is complete and rapid, avoiding the need to model isavuconazonium sulfate.
- Use of a permeability-limited liver model in pediatrics that is based on adult physiology.
- Inability to fully verify Ki for CYP2C8/2C19, MATE1, OCT1/2, and OATP1B1.

#### Limitations (Expert Review)
- The model does not capture enterohepatic recirculation (using first-order absorption instead of ADAM), which may affect drug interactions involving intestinal CYP3A.
- Only one pediatric population (hematologic cancer) was simulated; results may not translate to other disease states with differing enzyme expression.
- The ontogeny function for CYP3A4 was modified (increased age-cap) based on literature but this may not reflect real inter-individual variability.
- The sensitivity analysis was limited to Ki values; no sensitivity analysis on ontogeny parameters or fm CYP3A4/5 was performed.
- The model assumes equal Ki for CYP3A4 and CYP3A5, which may not be true clinically.

#### Generalizability
The model is highly generalizable for predicting CYP3A and P-gp mediated DDIs in pediatrics for other substrates with similar properties, given the extensive verification in adults and plausible pediatric scaling. However, predictions for drugs with substantial intestinal first-pass or enterohepatic recirculation (e.g., midazolam) may be biased. The assumption that Ki values are transferable across populations is reasonable but unverifiable; thus, the model is best used for relative risk comparisons rather than absolute dose adjustments.

---

### Key Equations

**Geometric Mean Fold Error**

{% raw %}
$$
GMFE = \exp\left( \frac{1}{n} \sum_{i=1}^{n} \left| \ln \left( \frac{\text{Predicted}_i}{\text{Observed}_i} \right) \right| \right)
$$
{% endraw %}

Geometric mean fold error used to assess predicted vs observed PK and DDI ratios.

**Guest Criteria Limit**

{% raw %}
$$
\text{Limit} = \frac{\delta + 2(R_{\text{obs}} - 1)}{R_{\text{obs}}}
$$
{% endraw %}

Guest criteria acceptance boundary for DDI ratios, where δ accounts for variability (1.25 for 20% CV) and Robs is the observed or predicted DDI ratio.

**CYP3A4 Ontogeny Function**

{% raw %}
$$
\text{Fraction of adult} = \left( \frac{\text{AdultMax} - \text{FBirth}}{\text{Age}_{50}^n + \text{Age}^n} \right) \times \text{Age}^n + \text{FBirth}
$$
{% endraw %}

CYP3A4 ontogeny function describing the fraction of adult enzyme expression as a function of age.

**Exponential Ontogeny Function**

{% raw %}
$$
\text{Fraction} = C_0 + C_1 \cdot \exp\left( C_2 \cdot (\text{Age} - \text{AgeCap}_1) \right)
$$
{% endraw %}

Alternative ontogeny function used for certain parameters (e.g., CYP3A4 profile 2) modeling the fraction as an exponential decay from a maximum at birth.

---

### Figures & Tables

- **Figure 1**: Schematic of the modeling workflow from bottom-up parameter development to pediatric DDI prediction.
  - *Significance*: Illustrates the stepwise hybrid approach and the key decision to model the active moiety only.
- **Figure 2**: Observed vs predicted DDI ratios for isavuconazole as either victim or perpetrator for all clinical DDI studies.
  - *Significance*: Visual assessment of model performance against Guest criteria, highlighting the midazolam and rifampicin misses.
- **Figure 3**: Predicted geometric mean AUC ratios in pediatric age groups relative to adult values for various perpetrator DDI scenarios.
  - *Significance*: Primary result showing age-dependent trends, particularly the elevated risk in 1–<3-year-olds at 15 mg/kg.
- **Table 1**: Final parameters of the isavuconazole PBPK model, including CLint, Ki values, and ontogeny parameters.
  - *Significance*: Provides the core model parameterization used in all simulations.
- **Table 2**: Predicted vs observed PK parameters for adult single- and multiple-dose iv and oral isavuconazole administration.
  - *Significance*: Confirms acceptable adult model verification with GMFE <1.5 for all parameters.
- **Table 3**: Predicted vs observed PK parameters for pediatric multiple-dose iv and oral administration across age groups.
  - *Significance*: Confirms the pediatric model performance with GMFE <1.25, supporting its use for DDI prediction.

---

### Code & Reproducibility Assessment
Data availability statement indicates access to clinical trial data via Astellas transparency portal; no explicit model code or Simcyp file sharing is mentioned.

---

### Supplementary Materials
Supplementary material (single DOCX file) includes detailed tables (S1–S13) and figures (S1–S4) covering clinical data sources, virtual trial designs, model performance metrics, edoxaban model construction and verification, sensitivity analysis results, and additional observed-vs-predicted plots for pediatric simulations.

---

### Future Directions
Future studies should include clinically verified pediatric DDI data to confirm the model’s predictions, especially for midazolam and rifampicin where adult underprediction was observed. Incorporation of enterohepatic recirculation and UGT induction within the model could improve accuracy. Additional in vitro or clinical work to separate CYP3A4 vs CYP3A5 Ki values and to quantify P-gp tissue-specific effects would strengthen model confidence. The model could also be extended to other antivirals/immunosuppressants and to specialized pediatric populations (e.g., neonates).

---

### Expert Commentary
This paper is a robust example of PBPK-based pediatric extrapolation for a complex antifungal with multiple enzyme and transporter interactions. The strategic simplification of administering the active moiety (rather than the prodrug) is defensible given rapid conversion, but it may miss subtle effects of the prodrug on intestinal metabolism. The authors properly used multiple DDI studies to optimize and verify key parameters (Ki, fm, Indmax), though the midazolam and rifampicin miss in adults signals potential limitations in modeling enterohepatic recirculation or UGT induction. From a regulatory perspective, this aligns with FDA/EMA guidance endorsing PBPK to bridge adult DDI data to pediatrics. The finding of higher DDI risk in 1–3-year-olds is biologically plausible due to higher CYP3A activity and dose adjustments, but the lack of clinical verification at the 15 mg/kg dose warrants caution. The sensitivity analyses are commendable, though a full Bayesian uncertainty analysis would have been more quantitative.[^fc-18] Overall, this is a high-quality, clinically actionable PBPK application that should be cited in any future isavuconazole label expansion or DDI evaluation.

---

### Bottom Line
A well-verified adult and pediatric isavuconazole PBPK model predicts overall similar DDI risk across ages, but cautions against higher CYP3A and P-gp interaction potential in children 1–3 years old receiving the 15 mg/kg dose. Clinicians should be particularly vigilant when co-administering isavuconazole with narrow-therapeutic-index or high-bioavailability-variability substrates like digoxin, warfarin, and midazolam in young children.

---

### Fact-check corrections

[^fc-1]: **CONTRADICTED** — original: “DDI parameters (Ki for CYP3A4/5, P-gp, Ki for CYP2C8/9/19/2D6) were initially from in vitro data and then refined using clinical DDI studies.” → correction: “optimization for the Ki values for CYP2C8 and CYP2C19 could not be adequately performed; therefore, the parameters were left as the in vitro measured values.”
[^fc-2]: **NUMERIC_MISMATCH** — original: “Simulations were run for 11 comedications in pediatric cancer populations across four age groups.” → correction: “Simulations were conducted to assess the DDI risk in a pediatric cancer population with the inhibitor ketoconazole, the inducer rifampicin, and the substrates cyclosporine, dextromethorphan, digoxin, ethinyl estradiol, midazolam, rivaroxaban, and warfarin.”
[^fc-3]: **UNSUPPORTED** — original: “The model predicted AUC ratios for CYP3A and P-gp substrates were ≥1.5-fold for digoxin and warfarin in the 1–<3-year-old group at 15 mg/kg.” → correction: “The same caution should be implemented when considering narrow therapeutic window drugs such as warfarin and digoxin, which both had predicted AUC ratios > 1.5-fold.”
[^fc-4]: **UNSUPPORTED** — original: “The model set 7.84% of the dose eliminated unchanged in feces.” → correction: “An internal metabolite analysis estimated that 7.84% of the excreted radioactivity in the feces was unchanged isavuconazole.”
[^fc-5]: **UNSUPPORTED** — original: “The model used a permeability-limited distribution with Kp scalar=1.” → correction: “The isavuconazole model was built using 1st order absorption model and the full PBPK model for distribution with the tissue-to-plasma partition coefficient (Kp) scalar set to 1 (Vss = 4.48 L/kg) based on observed data”
[^fc-6]: **UNSUPPORTED** — original: “No covariate models were used in the isavuconazole PBPK model.” → correction: “The isavuconazole model was built using 1st order absorption model and the full PBPK model for distribution with the tissue-to-plasma partition coefficient (Kp) scalar set to 1 (Vss = 4.48 L/kg) based on observed data”
[^fc-7]: **CONTRADICTED** — original: “Adult parameters were scaled to pediatric populations using ontogeny functions for CYP3A4 and CYP3A5.” → correction: “No specific ontogeny was included for CYP3A5, instead the CYP3A4-CYP3A5 correlation factor built within Simcyp was implemented.”
[^fc-8]: **UNSUPPORTED** — original: “No formal non-linear mixed-effects estimation was used in the model development.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “Parameters were adjusted through sensitivity and iterative simulation to achieve Guest-criteria acceptance.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “The model does not provide formal uncertainty quantification beyond 90% CIs from simulations.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The simulation design (10×10 subjects) is not powered to detect small differences.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “The verified pediatric PBPK model supports the clinical use of isavuconazole in children ≥1 year with weight-based dosing.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “The model is best used for relative risk comparisons rather than absolute dose adjustments.” → correction: “No direct evidence in source text.”
[^fc-14]: **UNSUPPORTED** — original: “Table 1 provides the final parameters of the isavuconazole PBPK model, including CLint, Ki values, and ontogeny parameters.” → correction: “A summary of the model parameters used in the final isavuconazole PBPK model can be found in Table 1.”
[^fc-15]: **UNSUPPORTED** — original: “Future studies should include clinically verified pediatric DDI data to confirm the model’s predictions.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “The model could be extended to other antivirals/immunosuppressants and to specialized pediatric populations (e.g., neonates).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **CONTRADICTED** — original: “The simplification may miss subtle effects of the prodrug on intestinal metabolism.” → correction: “In addition, the prodrug isavuconazonium sulfate was found to have little or no inhibitory activity against CYP isozymes, except for CYP2B6 with an IC50 of 46.7 µmol/L (internal in vitro inhibition data), which is most likely not a clinically relevant due to the rapid conversion of the prodrug and the minimal expression of CYP2B6 in the intestinal lining.”
[^fc-18]: **UNSUPPORTED** — original: “The sensitivity analyses are commendable, though a full Bayesian uncertainty analysis would have been more quantitative.” → correction: “No mention of Bayesian uncertainty analysis in the source text.”
[^fc-19]: **UNSUPPORTED** — original: “The work aligns with FDA/EMA guidance endorsing PBPK to bridge adult DDI data to pediatrics.” → correction: “No explicit mention of FDA/EMA guidance endorsing PBPK in the source.”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-10-21-development-of-an-isavuconazole-physiologically-based-pharmacokinetic-model-for/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-10-21-development-of-an-isavuconazole-physiologically-based-pharmacokinetic-model-for/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-10-21-development-of-an-isavuconazole-physiologically-based-pharmacokinetic-model-for/figures/fig_03.png)