---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: March 09, 2026

## Paper 1: Population Pharmacokinetic Analysis of Vixarelimab in Healthy Volunteers and Pat

### Bibliographic Information
- **Title**: Population Pharmacokinetic Analysis of Vixarelimab in Healthy Volunteers and Patients With Chronic Pruritic Conditions
- **Authors**: Fei Tang et al.
- **Journal**: CPT: Pharmacometrics & Systems Pharmacology, 2026, Volume 15, Issue 3, Pages 1–12
- **DOI**: [https://doi.org/10.1002/psp4.70230](https://doi.org/10.1002/psp4.70230)

### Quick Take
This paper presents the first detailed population pharmacokinetic (PopPK) model for vixarelimab, a first-in-class monoclonal antibody targeting OSMRβ, using pooled data from Phase 1/2 studies. A two-compartment target-mediated drug disposition (TMDD) model with quasi-steady-state (QSS) approximation was successfully developed. Body weight was the only significant covariate, but its clinical impact on exposure was minimal—supporting flat dosing in future trials.

---

### Executive Summary
Tang et al. developed a robust PopPK model for vixarelimab, a monoclonal antibody with dual inhibition of OSM- and IL-31-mediated pathways, using 4032 concentrations from 274 subjects across multiple studies. The model employed a two-compartment TMDD structure with QSS approximation to account for nonlinear clearance via binding to soluble and membrane-bound OSMRβ. Despite identifying body weight as a statistically significant covariate on clearance and volumes, simulations demonstrated that its effect on steady-state Cmax and AUC0-tau was clinically negligible, justifying weight-independent dosing. This work provides a foundational PK framework for ongoing and future clinical development of vixarelimab in chronic pruritic conditions.

---

## ⚡ Methodological Snapshot
The authors pooled data from three Phase 1/2 studies (KPL-716-C001, C201, C202) involving single and multiple IV/SC doses of vixarelimab in healthy volunteers and patients with chronic pruritic diseases. A total of 4032 quantifiable serum concentrations from 274 participants were used. Based on visual inspection of concentration-time profiles showing dose-dependent half-lives and saturation kinetics, a two-compartment TMDD model with QSS approximation was selected. The model included a depot compartment for SC absorption (first-order, with bioavailability F1 and absorption rate Ka), linear clearance (CL), and peripheral distribution (Vp, Q). Nonlinear elimination was described via binding to a target (R0) with internalization (Kint) and degradation (Kdeg), governed by the equilibrium constant Kss.

Model development followed a standard PopPK workflow: base model → outlier assessment (11 influential points removed based on |CWRES| > 6 and parameter sensitivity) → covariate screening using stepwise selection (p = 0.01 for inclusion, p = 0.001 for elimination). Body weight was pre-specified as a structural covariate on CL and Vc, and later extended to Vp. Final model evaluation included goodness-of-fit plots, visual predictive checks (VPCs), and simulation-based covariate effect assessment using 500 parameter draws to account for uncertainty.

---

## 🏗️ Structural Model Breakdown
The structural model is a two-compartment system with target-mediated drug disposition (TMDD) under quasi-steady-state (QSS) approximation. Vixarelimab is administered subcutaneously into a depot compartment (ASC), which transfers drug to the central compartment (AC) via first-order absorption (Ka). The central compartment (volume Vc) exchanges drug with the peripheral compartment (Ap, volume Vp) via intercompartmental clearance (Q = Kpt × Vc = Ktp × Vp). Linear elimination occurs from the central compartment via nonspecific clearance (CL). Nonlinear elimination arises from binding to a target (Rtot), which is synthesized at rate Ksyn, degrades at rate Kdeg, and forms a complex with vixarelimab that is internalized at rate Kint. The QSS assumption allows algebraic solution for free drug concentration (Cfree) from total drug and total receptor. The model assumes binding occurs only in the central compartment, and the assay measures total (not free) drug concentration.

---

### Detailed Methodological Analysis

#### Modeling Approach
Two-compartment target-mediated drug disposition (TMDD) model with quasi-steady-state (QSS) approximation. Structural model included central (Vc) and peripheral (Vp) compartments, linear clearance (CL), intercompartmental clearance (Q), and a depot compartment for SC dosing. Nonlinear elimination described via binding to target (R0) with Kss, Kdeg, and Kint. Inter-individual variability (IIV) modeled on CL, Vc, Q, Ka, F1, and R0 using log-normal distribution. Residual error modeled as log-additive (proportional on log-scale).

#### Data Sources
Pooled data from 3 clinical studies (KPL-716-C001, C201, C202) with 274 participants: 37 healthy volunteers and 237 patients with chronic pruritic conditions (atopic dermatitis, prurigo nodularis, chronic idiopathic pruritus, etc.). Dosing regimens included single IV (0.3–20 mg/kg), single SC (1.5 mg/kg, 360 mg), and multiple SC (360–720 mg weekly or every 2–4 weeks). Total of 4032 serum concentrations, with 3328 quantifiable post-dose samples used in modeling.

#### Estimation Methods
First-order conditional estimation with interaction (FOCE-I) in NONMEM v7.5.1. Model building supported by PsN (v5.3.1) and R (v4.2+).

#### Model Evaluation
Goodness-of-fit plots (DV vs PRED/IPRED, CWRES vs time/PRED), visual predictive checks (VPCs) with 500 simulations stratified by study and dose, and simulation-based covariate effect assessment (500 parameter sets) for Cmax and AUC0-tau at steady state. Shrinkage was reported for IIV and residual error terms.

#### Covariate Analysis
Pre-specified covariates: age, body weight, sex, race (Asian vs others), immunogenicity (ADA status), disease status (healthy vs patient). Body weight was first included as a structural covariate on CL and Vc using power model centered at median. Stepwise covariate modeling (SCM) used. Only body weight on CL, Vc, and Vp was retained after backward elimination. Age on Vc was dropped. No significant effects of ADA, sex, race, or disease status.

---

### Scientific Context & Motivation
Monoclonal antibodies targeting cytokine receptors often exhibit nonlinear pharmacokinetics due to target-mediated drug disposition (TMDD), especially when soluble receptor forms are present in circulation. Vixarelimab, which binds both membrane-bound and soluble OSMRβ, had demonstrated clinical efficacy in prurigo nodularis but lacked a formal PK characterization. This study addresses the gap by integrating data from healthy volunteers and diverse patient populations to build a mechanistic PopPK model that captures TMDD behavior. The work builds on established TMDD modeling paradigms but specifically applies the QSS approximation—a more general and robust alternative to Michaelis-Menten or quasi-equilibrium models—when target concentration is not negligible, as is the case with measurable soluble OSMRβ levels (~1.4–5.7 nM).

---

### Statistical Rigor Assessment
The analysis demonstrates strong statistical rigor. The dataset is substantial (n=274, 3328 observations), covering a wide dose range and multiple populations. The use of FOCE-I is appropriate for this data density and model complexity. Outlier handling was systematic and justified: 11 points were removed after demonstrating >20% impact on key TMDD parameters, and sensitivity analysis confirmed their influence. Covariate selection used stringent statistical thresholds (p=0.01/0.001) and pre-specified biological plausibility. Parameter precision is excellent (RSE < 25% for all fixed effects, <10% for key parameters like CL, Vc, F1). Model evaluation includes both standard diagnostics (GOF plots) and predictive checks (VPCs stratified by study/dose). Simulation-based covariate assessment accounts for parameter uncertainty via 500 draws, enhancing robustness of conclusions about clinical relevance.

---

## 📊 Key Findings
The final model estimated linear clearance (CL) at 0.00649 L/h (0.156 L/day), central volume (Vc) at 3.04 L, and peripheral volume (Vp) at 1.74 L—consistent with typical monoclonal antibody behavior. Subcutaneous bioavailability was 56.6% with slow absorption (Ka = 0.0126 h⁻¹, t½,abs ~55 h). The TMDD parameters (R0 = 1.84 nM, Kss = 0.0296 nM, Kdeg = 0.097 h⁻¹, Kint = 0.000141 h⁻¹) suggest high-affinity binding and slow internalization. Body weight was the only significant covariate, with allometric exponents of 0.943 for CL, 0.762 for Vc, and 0.646 for Vp. However, simulations showed that even at the 5th vs 95th weight percentiles (48 vs 158 kg), the fold-change in Cmax and AUC0-tau was only 1.4 and 0.7, respectively—within or near the 0.8–1.25 bioequivalence range. No impact of immunogenicity, age, sex, race, or disease status was detected.

---

## 💡 Clinical & Regulatory Implications
The findings strongly support the use of flat (fixed) dosing for vixarelimab in future clinical trials and potential clinical use. Despite statistically significant allometric scaling, the magnitude of body weight effects on exposure is clinically insignificant, simplifying administration and improving patient convenience. The model confirms that therapeutic doses (e.g., 360 mg SC weekly) saturate target-mediated clearance, leading to linear PK at steady state—enabling reliable exposure prediction. The lack of impact from disease status (e.g., atopic dermatitis vs prurigo nodularis) or immunogenicity suggests consistent PK across the target patient populations. These results provide regulatory confidence for dose selection and support the ongoing development of vixarelimab in chronic pruritic conditions without need for therapeutic drug monitoring or dose individualization.

---

### Strengths & Limitations

#### Strengths
- Comprehensive dataset pooling multiple studies, routes, doses, and populations
- Appropriate use of QSS TMDD model given presence of soluble target
- Rigorous outlier handling with sensitivity analysis
- Robust model evaluation including stratified VPCs
- Simulation-based covariate assessment accounting for parameter uncertainty
- Clear clinical interpretation of statistical findings (e.g., weight effect deemed non-clinical)

#### Limitations (Acknowledged by Authors)
- Lack of soluble OSMRβ (sOSMR) concentration data, limiting full mechanistic interpretation of TMDD parameters
- Potential overparameterization of QSS model without target data, leading to sensitivity of R0, Kdeg, Kint to outliers
- Assay measures total drug, not free drug, which is the pharmacologically active species

#### Limitations (Expert Review)
- High shrinkage for some IIV parameters (e.g., Q: 53.3%) may limit power to detect covariate effects on those parameters
- Model assumes target binding only in central compartment; cannot distinguish membrane-bound vs soluble target occupancy
- Limited representation of extreme body weights (<50 kg or >140 kg), though simulations extrapolate reasonably

#### Generalizability
The model is highly generalizable across the studied chronic pruritic conditions (atopic dermatitis, prurigo nodularis, etc.) and healthy volunteers, as disease status was not a significant covariate. The PK parameters align with typical monoclonal antibodies, and the flat-dosing recommendation is likely applicable to broader populations, though validation in pediatric or severely obese patients would be needed if those groups are targeted.

---

### Key Equations

**Individual Parameter Model**

$$
\theta_i = \theta_{\mathrm{Typical}} e^{\eta_i}
$$

Log-normal model for inter-individual variability, where θ_i is the individual parameter, θ_Typical is the population typical value, and η_i ~ N(0, ω²) is the random effect.

**Subcutaneous Depot Compartment**

$$
\frac{dA_{\mathrm{SC}}}{dt} = -K_a \times A_{\mathrm{SC}}
$$

First-order absorption from the subcutaneous depot compartment (A_SC) into the central compartment.

**Central Compartment Mass Balance**

$$
\frac{dA_C}{dt} = K_a \times A_{\mathrm{SC}} - \left(K_{\mathrm{el}} + K_{\mathrm{pt}}\right) \times C_{\mathrm{free}} \times V_c + K_{\mathrm{tp}} \times A_p - \frac{R_{\mathrm{tot}} \times K_{\mathrm{int}} \times C_{\mathrm{free}} \times V_c}{K_{\mathrm{ss}} + C_{\mathrm{free}}}
$$

Mass balance for the central compartment (A_C), including absorption, linear distribution/clearance, peripheral exchange, and nonlinear target-mediated elimination.

**Peripheral Compartment Mass Balance**

$$
\frac{dA_p}{dt} = K_{\mathrm{pt}} \times C_{\mathrm{free}} \times V_c - K_{\mathrm{tp}} \times A_p
$$

Mass balance for the peripheral compartment (A_p), with distribution from and to the central compartment.

**Total Receptor Dynamics**

$$
\frac{dR_{\mathrm{tot}}}{dt} = K_{\mathrm{syn}} - K_{\mathrm{deg}} \times R_{\mathrm{tot}} - \left(K_{\mathrm{int}} - K_{\mathrm{deg}}\right) \times \frac{R_{\mathrm{tot}} \times C_{\mathrm{free}}}{K_{\mathrm{ss}} + C_{\mathrm{free}}}
$$

Differential equation for total receptor concentration (R_tot), including synthesis, degradation, and internalization of the drug-receptor complex.

**Free Drug Concentration (QSS Approximation)**

$$
C_{\mathrm{free}} = \frac{1}{2} \left[ \left(C_{\mathrm{tot}} - R_{\mathrm{tot}} - K_{\mathrm{ss}}\right) + \sqrt{\left(C_{\mathrm{tot}} - R_{\mathrm{tot}} - K_{\mathrm{ss}}\right)^2 + 4 \times K_{\mathrm{ss}} \times C_{\mathrm{tot}}} \right]
$$

Algebraic solution for free drug concentration under the quasi-steady-state assumption, derived from total drug (C_tot) and total receptor (R_tot).


---

### Figures & Tables

- **Figure 1**: Observed vixarelimab PK profiles across IV and SC doses in the KPL-716-C001 study, showing dose-dependent half-lives and nonlinear kinetics at low doses.
  - *Significance*: Illustrates the hallmark TMDD behavior that motivated the choice of a nonlinear structural model.
- **Figure 2**: Goodness-of-fit plots for the final model (DV vs PRED/IPRED, CWRES vs time/PRED) with smooth lines showing no systematic bias.
  - *Significance*: Demonstrates adequate model fit and absence of major misspecification.
- **Figure 3**: Visual predictive check (VPC) for 360 mg SC weekly dosing, stratified by study, showing observed percentiles within simulated 95% prediction intervals.
  - *Significance*: Validates the model’s predictive performance across different clinical studies.
- **Figure 4**: Simulated covariate effects on steady-state Cmax and AUC0-tau for 360 mg SC weekly dosing, showing minor impact of body weight.
  - *Significance*: Key evidence supporting the conclusion that weight-based dosing is unnecessary.
- **Table 3**: Parameter estimates for the final PopPK model, including fixed effects, IIV, and residual error with RSE and shrinkage.
  - *Significance*: Provides the core quantitative results of the modeling exercise, showing precise and plausible parameter estimates.

---


### Supplementary Materials
The supplementary material (psp470230-sup-0001-supinfo.docx) likely includes additional tables referenced in the main text (e.g., Table S1: sampling timepoints, Table S2: covariate list, Table S3: model run summary, Table S4/S5: outlier sensitivity analyses) and supplementary figures (e.g., Figure S1: dose-normalized IV profiles, Figure S2: HV vs AD PK comparison, Figure S3: base model diagnostics, Figure S4/S5: additional VPCs). These support the robustness of the modeling decisions and provide deeper methodological detail.

---

### Future Directions
Future work should incorporate soluble OSMRβ concentration data to enable a two-target QSS model that separately accounts for binding to membrane-bound and soluble receptors—this would improve mechanistic understanding and prediction of target occupancy in tissues. Additionally, linking this PK model to a pharmacodynamic (PD) or exposure-response model for pruritus reduction would strengthen dose justification. The model could also be extended to pediatric populations if vixarelimab is developed for younger patients, though current data suggest allometric scaling may not be necessary even then.

---

### Expert Commentary
This is a textbook example of modern PopPK analysis for a monoclonal antibody with TMDD. The authors wisely chose the QSS approximation over Michaelis-Menten, given the known presence of soluble target—a common pitfall in early mAb modeling. Their handling of outliers is exemplary: not just removing them, but demonstrating their influence and performing sensitivity analysis. The key teaching point here is the distinction between statistical significance and clinical relevance: body weight 'mattered' statistically, but simulations showed it didn't matter clinically. This is a crucial message for regulatory submissions and clinical practice. The model’s robustness across diverse pruritic conditions also suggests that OSMRβ expression or turnover is not substantially altered by these diseases—a useful biological insight.

---

### Bottom Line
This PopPK analysis of vixarelimab provides a well-validated, mechanistically grounded TMDD model that confirms predictable, linear pharmacokinetics at therapeutic doses and demonstrates that body weight—while statistically significant—has minimal clinical impact on exposure. The work exemplifies best practices in modern PopPK for monoclonal antibodies and provides strong justification for flat dosing in ongoing and future clinical development, streamlining both trial design and eventual clinical use.

---

---

## 📊 Figures



```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: Observed vixarelimab PK profiles in the KPL-716-C001 study. Observations below the quantification limit (indicated by the dashed lines) were removed.],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [FIGURE 2: Diagnostic plots of the final model. The blue line represents the linear smooth.],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 3: Visual predictive check for the final model at the dose level of 360 mg SC weekly stratified by study (KPL-716-C001 Part 4, KPL-716-C202, KPL-716-C201 Phase 2a).],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [FIGURE 4: Covariate effects onCmaxand AUC0-tauat steady state following repeated 360 mg weekly SC dosing. Filled circles represent the median value of 500 simulations, and],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```

