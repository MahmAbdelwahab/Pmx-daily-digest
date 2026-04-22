---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: February 14, 2026

## Paper 1: Population Pharmacokinetic/Pharmacodynamic Modeling of Donidalorsen, an Antisens

### Bibliographic Information
- **Title**: Population Pharmacokinetic/Pharmacodynamic Modeling of Donidalorsen, an Antisense Oligonucleotide in Development for Prophylaxis of Hereditary Angioedema
- **Authors**: Diep JK, Liu M, Singh P, Dorow S, Cohn DM, Bordone L, Newman KB, Gao X
- **Journal**: CPT: Pharmacometrics & Systems Pharmacology, 2026
- **DOI**: [https://doi.org/10.1002/psp4.70206](https://doi.org/10.1002/psp4.70206)

### Quick Take
A definitive PopPK/PD analysis of donidalorsen (GalNAc-ASO) demonstrating that despite significant body weight effects on PK, the flat exposure-response relationship supports fixed dosing without adjustment. Essential reading for modelers working with antisense oligonucleotides and rare disease populations.

---

### Executive Summary
This study presents the foundational population PK/PD model for donidalorsen, a GalNAc-conjugated antisense oligonucleotide (ASO) targeting prekallikrein (PKK) for Hereditary Angioedema (HAE) prophylaxis. Using pooled data from Phase 1–3 trials (N=177), the authors developed a two-compartment PK model linked to an indirect response PD model. While body weight was identified as a significant covariate on clearance and volume (with exponents deviating from standard allometry), simulations revealed that these PK differences do not translate into clinically meaningful differences in PKK reduction due to the drug's high potency and the plateau of the exposure-response curve. The analysis supports a fixed 80 mg subcutaneous regimen (administered every 4 or 8 weeks) and validates the flexibility of monthly or every-2-month dosing schedules.

---

## ⚡ Methodological Snapshot
The analysis utilized nonlinear mixed-effects modeling (Phoenix NLME) on pooled data from healthy volunteers and HAE patients. A sequential approach was employed: the PK model was fixed before estimating PD parameters. The PK structural model was a two-compartment model with first-order absorption and linear elimination. The PD component utilized an indirect response model (Type I) where the drug inhibits the zero-order production rate ($k_{in}$) of prekallikrein.

---

## 🏗️ Structural Model Breakdown
The PK model is a 2-compartment structure with first-order absorption ($k_a$) and linear elimination from the central compartment. Inter-individual variability (IIV) was placed on CL/F, Vc/F, Q/F, Vp/F, and $k_a$ with a full omega block. The PD model is an indirect response model where donidalorsen inhibits the synthesis of PKK via an $I_{max}$ function driven by plasma concentration. The model accounts for baseline PKK levels.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling (NLME) using FOCE-ELS. Sequential PK/PD modeling strategy. Structural selection based on AIC/BIC and goodness-of-fit.

#### Data Sources
Pooled data from 4 studies: Phase 1 (healthy), Phase 2 (HAE), Phase 3 OASIS-HAE (HAE), and a bioequivalence study. Total N=177 (101 healthy, 76 HAE). 4242 PK and 1159 PD observations.

#### Estimation Methods
First-order conditional estimation with extended least squares (FOCE-ELS).

#### Model Evaluation
Prediction-corrected Visual Predictive Checks (pcVPC) with 200 replicates; Goodness-of-fit plots (CWRES vs time/PRED); Non-parametric bootstrap (implied by CI generation methodology).

#### Covariate Analysis
Stepwise forward addition (p<0.01) and backward elimination (p<0.001). Covariates tested: weight, age, sex, race, disease status, injection site, formulation, renal/hepatic markers.

---

### Scientific Context & Motivation
Hereditary angioedema (HAE) requires long-term prophylaxis to prevent life-threatening swelling attacks. Donidalorsen represents a new class of RNA-targeted therapy (ASO) that inhibits the production of prekallikrein. A key challenge in ASO development is determining whether the high variability in tissue distribution and body weight effects typically seen with this modality require dose individualization. This study addresses this gap by quantifying the impact of intrinsic (weight, organ function) and extrinsic (injection site, device) factors on both exposure and the downstream biomarker (PKK) to justify a simplified fixed-dosing regimen for regulatory approval.

---

### Statistical Rigor Assessment
The study demonstrates high rigor through the use of a large, pooled dataset across phases. The handling of BLQ data (M1 method) and ADA-impacted samples (exclusion) follows standard best practices for biologics/ASOs. The sample size (N=177) is robust for a rare disease indication. Sensitivity analyses via simulations (N=1000) effectively bridged the gap between statistical significance (weight effect on PK) and clinical irrelevance (no effect on PD).

---

## 📊 Key Findings
Donidalorsen exhibits a long terminal half-life of ~31.4 days. Body weight was the most significant covariate, with exponents on CL/F (1.52) and Vc/F (2.34) exceeding standard allometry, indicating heavier patients have significantly lower exposure (e.g., 100kg patient has 42% lower AUC than 70kg). However, the PD model estimated a very low $IC_{50}$ (0.158 ng/mL), meaning therapeutic doses maintain concentrations well above the inhibitory threshold. Consequently, the difference in PKK reduction between the lowest and highest weight quartiles was <7%. Disease status (HAE) affected baseline PKK and $IC_{50}$ but not to a clinically relevant degree.

---

## 💡 Clinical & Regulatory Implications
No dose adjustment is required for body weight, mild renal/hepatic impairment, age, or race. The recommended dose is 80 mg SC. The modeling supports the interchangeability of 'every 4 weeks' (Q4W) with 'monthly' (Q1M), and 'every 8 weeks' (Q8W) with 'every 2 months' (Q2M), facilitating patient adherence. The autoinjector and pre-filled syringe are bioequivalent.

---

### Strengths & Limitations

#### Strengths
- Robust integration of data from healthy volunteers and patients
- Clear demonstration of the dissociation between PK variability and PD response due to high potency
- Practical simulation of 'real-world' dosing schedules (Monthly vs Q4W)
- Rigorous evaluation of formulation differences (autoinjector vs vial)

#### Limitations (Acknowledged by Authors)
- Lack of data in moderate/severe renal and hepatic impairment
- Pediatric data limited to adolescents (12-17 years)
- Sequential modeling approach used instead of simultaneous (though justified by authors)

#### Limitations (Expert Review)
- The high exponents for weight on PK parameters (1.52-2.34) are unusual and might reflect correlations with other unmeasured physiological factors, though the clinical impact is negligible.
- Linear PK assumption is standard but ASOs can show non-linearity in uptake at very high doses; however, therapeutic range appears linear.

#### Generalizability
Highly generalizable to the adult and adolescent HAE population. Extrapolation to younger pediatrics or severe organ impairment requires further study.

---

### Key Equations

**Indirect Response PD Model**

$$
\frac{dPKK}{dt} = k_{in} \cdot \left(1 - \frac{I_{max} \cdot C}{IC_{50} + C}\right) - k_{out} \cdot PKK
$$

Describes the rate of change of Prekallikrein (PKK), where production ($k_{in}$) is inhibited by drug concentration ($C$).

**Covariate Model for Clearance**

$$
CL/F = 12.8 \cdot \left(\frac{WT}{70}\right)^{1.52}
$$

Power model describing the relationship between apparent clearance and body weight, showing a steeper than allometric increase.

**Covariate Model for Central Volume**

$$
V_c/F = 69.8 \cdot \left(\frac{WT}{70}\right)^{2.34} \cdot 1.426^{\text{HAE}}
$$

Describes central volume scaling with weight and disease status (HAE patients have ~43% higher Vc/F).


---

### Figures & Tables

- **Table 1**: Parameter estimates for the final PopPK and PK/PD models.
  - *Significance*: Provides the core quantitative values (CL, V, IC50) and covariate relationships necessary to reproduce the model.
- **Figure 2**: Prediction-corrected Visual Predictive Checks (pcVPC) for PK and PD.
  - *Significance*: Validates that the model adequately describes both the central tendency and variability of the observed data.
- **Figure 3**: Forest plots showing the impact of covariates on steady-state PK and PD metrics.
  - *Significance*: Crucial visual evidence that while PK varies significantly (up to ~50% change), PD response remains stable (<10% change) across covariates.
- **Figure 5**: Simulated time profiles comparing Q4W vs Monthly and Q8W vs Every-2-Month dosing.
  - *Significance*: Supports the practical clinical recommendation allowing flexible dosing schedules.

---


### Supplementary Materials
Supplementary materials include additional VPCs stratified by dose and disease status (Figs S2, S3), detailed simulation tables (Tables S3-S6) confirming the lack of clinically relevant covariate effects, and study design details (Table S1). These reinforce the robustness of the primary conclusions.

---

### Future Directions
Future work should focus on collecting data in patients with moderate-to-severe organ impairment and expanding the model to pediatric patients <12 years. Long-term immunogenicity data and its potential impact on clearance should continue to be monitored.

---

### Expert Commentary
This paper is a textbook example of 'flat exposure-response' justifying fixed dosing. It highlights a critical property of GalNAc-conjugated ASOs: their targeted delivery to hepatocytes often results in high potency where systemic PK variability becomes secondary to the saturation of the pharmacologic target. The authors wisely chose to focus on the clinical relevance of covariates via simulation rather than relying solely on statistical significance on PK parameters. The deviation from standard allometric exponents (0.75/1.0) is noteworthy for ASO modelers, suggesting that distribution volume for this modality may scale more steeply with body size than small molecules.

---

### Bottom Line
Donidalorsen 80 mg SC (Q4W or Q8W) is a robust regimen for HAE prophylaxis. While heavier patients will have lower systemic exposure, the drug's high potency ensures consistent prekallikrein reduction (>70%) across the weight spectrum. Pharmacometricians should note the steep weight-scaling exponents and the effective use of PK/PD simulations to rule out the clinical necessity of dose adjustments despite statistical PK differences.

---

---

## 📊 Figures



```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.png", width: 90%),
  caption: [Figure 1],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [Figure 2],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.png", width: 90%),
  caption: [Figure 3],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```

