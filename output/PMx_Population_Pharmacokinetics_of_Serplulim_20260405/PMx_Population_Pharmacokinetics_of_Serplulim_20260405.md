---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: April 05, 2026

## Paper 1: Population Pharmacokinetics of Serplulimab and Quantitative Assessment of Transi

### Bibliographic Information
- **Title**: Population Pharmacokinetics of Serplulimab and Quantitative Assessment of Transitioning From Weight-Based to Flat-Dosing Strategy
- **Authors**: Kun Wang, Fengyan Xu, Yaqi Lin, Yuying Gao, Yuanyuan Shen, Chen Hu, Zhihao Kwok, Qingyu Wang, Liang Zhou
- **Journal**: CPT: Pharmacometrics & Systems Pharmacology, 2026
- **DOI**: [https://doi.org/10.1002/psp4.70204](https://doi.org/10.1002/psp4.70204)

### Quick Take
This comprehensive PopPK analysis of serplulimab (anti-PD-1 mAb) in $2,110$ patients across $11$ trials provides robust quantitative justification for transitioning from weight-based ($3$ mg/kg Q2W, $4.5$ mg/kg Q3W) to flat-dose ($200$ mg Q2W, $300$ mg Q3W) regimens. Essential reading for pharmacometricians supporting regulatory submissions for oncology biologics, particularly those navigating FDA/EMA criteria for dose regimen changes. The integrated E-R analyses and cross-tumor-type modeling approach set a methodological benchmark for flat-dose justification.

---

### Executive Summary
Wang et al. present a methodologically rigorous, large-scale PopPK analysis that successfully bridges serplulimab's development from weight-based to flat-dosing, a transition increasingly sought for monoclonal antibodies to simplify clinical workflow. Using $2,110$ patients from $11$ trials across six tumor types, they developed a two-compartment model with time-varying clearance, identified modest covariate effects ($\leq20\%$), and demonstrated through simulation that flat-dose regimens achieve exposures within FDA-recommended comparability bounds ($<20\%$ difference in $AUC/C_{min}$, $<25\%$ in $C_{max}$). Critically, exposure-response analyses confirmed no meaningful efficacy or safety differences, providing a template for quantitative dose regimen optimization that aligns with evolving regulatory expectations for PD-1/PD-L1 inhibitors.

---

## ⚡ Methodological Snapshot
The authors employed a two-compartment population PK model with time-varying clearance, implemented in NONMEM (FOCEI or SAEM), to characterize serplulimab disposition across $2,110$ patients from $11$ clinical trials spanning Phase I-III. The structural model incorporated an empirical time-varying clearance component (sigmoid Emax function of time) rather than target-mediated drug disposition (TMDD), as PD-1 receptor saturation occurs at low concentrations, precluding reliable TMDD parameter estimation. Covariate analysis followed a stepwise forward-addition/backward-elimification procedure, with tumor type-specific parameter estimates to address potential heterogeneity across indications. Model evaluation included bootstrap resampling ($n=1,000$), prediction-corrected visual predictive checks stratified by tumor type and dose, and extensive simulation-based sensitivity analyses for covariate effects and dosing regimen comparisons.

---

## 🏗️ Structural Model Breakdown
The final model comprises two compartments (central $V_c$, peripheral $V_p$) with first-order inter-compartmental clearance $Q$ and time-varying systemic clearance $CL(t)$. Baseline clearance $CL_0$ varies by tumor type ($7$ categories: Sq. NSCLC, HCC, CRC, Non-sq. NSCLC, SCLC, ESCC, Other) with allometric scaling on weight (power $0.514$), albumin effect (power $-0.714$), tumor burden (power $0.0548$), ALP (power $0.0553$), and sex (female $-14.5\%$ lower clearance). Central volume $V_c$ is tumor type-specific with weight scaling (power $0.470$), albumin effect (power $-0.320$), and sex effect (female $-14\%$). Peripheral volume $V_p = 2.98$ L with albumin (power $-1.05$) and tumor burden (power $0.107$) effects. Inter-compartmental clearance $Q = 0.0169$ L/day with IIV only. Time-varying clearance follows sigmoid Emax model with $T_{50} = 221$ days, Hill coefficient $\lambda = 2.43$, and $E_{max} = -0.0926$ ($9.26\%$ reduction from baseline), capturing disease-related clearance changes over treatment course.

---

### Detailed Methodological Analysis

#### Modeling Approach
Two-compartment population PK model with first-order elimination and time-varying clearance, implemented in NONMEM. Time-varying clearance modeled via sigmoid Emax function: $CL(t) = CL_0 \times \exp[E_{max} \times (time/T_{50})^\lambda / (1 + (time/T_{50})^\lambda) + \eta_{CL}]$. Alternative TMDD structures (simplified Michaelis-Menten) were explored but rejected due to rapid target saturation limiting informative data. Tumor type-specific baseline clearance ($CL_0$) and central volume ($V_c$) parameters estimated separately for Sq. NSCLC, HCC, CRC, Non-sq. NSCLC, SCLC, ESCC, and Other to preserve indication-specific applicability.

#### Data Sources
Pooled dataset from $11$ clinical trials: $8$ previously reported trials ($2$ Phase I, $4$ Phase II, $2$ Phase III) with updated cutoff dates plus $3$ new Phase III trials (HLX10-002-NSCLC301, HLX10-007-EC301, HLX10-015-mCRC301). Total $2,110$ patients with serplulimab concentration-time data across hepatocellular carcinoma, colorectal cancer, squamous and non-squamous NSCLC, small cell lung cancer, and esophageal squamous cell carcinoma. Rich and sparse PK sampling with median baseline weight $62$ kg (range $32.9-131$ kg), $79\%$ male, $87\%$ Asian.

#### Estimation Methods
Nonlinear mixed-effects modeling in NONMEM with FOCEI or SAEM estimation. Inter-individual variability (IIV) modeled as exponential (log-normal) distributions for $CL$, $V_c$, $Q$, $V_p$, and $E_{max}$. Covariance between $CL$ and $V_c$ IIV estimated. Residual variability as proportional error model. Final parameter precision assessed via non-parametric bootstrap ($1,000$ replicates).

#### Model Evaluation
Comprehensive evaluation including: ($1$) standard diagnostic plots (observed vs. predicted, conditional weighted residuals); ($2$) prediction-corrected visual predictive checks (pcVPCs) stratified by tumor type and dose regimen; ($3$) bootstrap analysis for parameter uncertainty and bias assessment; ($4$) sensitivity analyses for covariate impact on exposure; ($5$) eta shrinkage assessment ($CL$ $14.9\%$, $V_c$ $27.0\%$, $Q$ $67.3\%$, $V_p$ $35.8\%$, $E_{max}$ $46.7\%$). Tumor type-specific pcVPCs confirmed adequate model performance across all indications.

#### Covariate Analysis
Stepwise forward-addition ($p<0.05$) and backward-elimination ($p<0.01$) procedure on baseline covariates: body weight, albumin, sex, tumor burden, alkaline phosphatase. Continuous covariates normalized to population median and modeled as power functions; categorical covariates as exponential fractional changes. Exploratory subgroup analyses (not in formal model) for age, race, hepatic/renal function, ADA status using empirical Bayes estimates (EBE) for exposure simulation. Covariate effects classified: not meaningful ($\leq20\%$), minor ($20-30\%$), moderate/large ($>30\%$).

---

### Scientific Context & Motivation
The transition from weight-based to flat-dosing for therapeutic antibodies represents a paradigm shift in oncology drug development, driven by operational efficiency and reduced medication errors, but requires rigorous pharmacometric justification to ensure maintained benefit-risk profiles. For PD-1/PD-L1 inhibitors specifically, flat-dosing has been adopted for several agents (pembrolizumab, nivolumab), yet each antibody requires individualized assessment due to differences in target binding, FcRn recycling, and immunogenicity. This study addresses a critical knowledge gap by providing the first comprehensive, multi-tumor-type PopPK characterization of serplulimab with explicit quantitative criteria for dose regimen transition. The work builds upon prior serplulimab PK modeling ($1,144$ patients) and aligns with FDA's $2022$ guidance on PK-based criteria for alternative dosing regimens of PD-1/PD-L1 antibodies, demonstrating how mechanistic understanding of IgG disposition (FcRn-mediated recycling, albumin effects) can be operationalized into regulatory-grade dosing recommendations.

---

### Statistical Rigor Assessment
The analysis demonstrates strong statistical rigor appropriate for regulatory decision-making. Sample size ($n=2,110$) is substantial for PopPK, providing robust parameter estimation with RSEs $\leq12\%$ for key structural parameters and $\leq30\%$ for covariate effects. The bootstrap validation ($1,000$ replicates) confirmed parameter stability with tight confidence intervals. Missing data rates were low ($<1.5\%$ for most covariates), minimizing imputation bias. The sensitivity analysis framework—univariate covariate effects with fixed reference values, plus exploratory EBE-based subgroup analyses—appropriately distinguishes confirmatory from exploratory findings. The time-varying clearance model addresses a known mechanistic complexity (disease progression, TMDD) without over-parameterization, though the high shrinkage on $Q$ ($67.3\%$) and $E_{max}$ ($46.7\%$) indicates some information limitation. The predefined $20\%$ clinical relevance threshold for covariate effects aligns with regulatory guidance and was consistently applied.

---

## 📊 Key Findings
The final PopPK model identified body weight (power $0.514$ on $CL$, $0.470$ on $V_c$) and albumin (power $-0.714$ on $CL$, $-0.320$ on $V_c$, $-1.05$ on $V_p$) as the most influential covariates, consistent with FcRn-mediated IgG disposition. Female sex reduced $CL$ and $V_c$ by $\sim14\%$. Tumor type-specific baseline clearances ranged $0.171-0.211$ L/day (SCLC lowest, Other highest). Time-varying clearance decreased $9.3\%$ from baseline with $T_{50}=221$ days. Critically, flat-dose ($200$ mg Q2W, $300$ mg Q3W) vs. weight-based ($3$ mg/kg Q2W, $4.5$ mg/kg Q3W) simulations showed: ($1$) geometric mean exposure differences $\leq6.59\%$ (well below FDA $20\%$ threshold); ($2$) comparable exposure variability across body weight quartiles; ($3$) $C_{max,ss}$ with flat-dosing ($138-166$ $\mu g/mL$) far below $10$ mg/kg Q2W reference ($384$ $\mu g/mL$); ($4$) efficacy predictions (OS, ORR) essentially identical ($\leq0.1\%$ difference); ($5$) no exposure-safety relationships for any AE category. Even in lowest weight quartile ($33-55$ kg), $33.9\%$ higher exposure with flat-dosing remained within safe bounds.

---

## 💡 Clinical & Regulatory Implications
This analysis provides definitive quantitative support for transitioning serplulimab to flat-dose regimens ($200$ mg Q2W, $300$ mg Q3W) as standard of care. The findings enable simplified prescribing without dose calculators, reduced pharmacy preparation errors, and improved supply chain efficiency. No dose adjustments are warranted for: body weight ($32.9-131$ kg range), sex, albumin variations, tumor burden, age, race, mild hepatic or renal impairment, or ADA positivity—all covariate effects were $<20\%$ and clinically non-meaningful. The tumor type-specific parameter estimates allow indication-appropriate dosing while maintaining unified flat-dose strategy. For regulatory submissions, this work establishes a benchmark for PK comparability documentation and E-R integration supporting dose regimen changes.

---

### Strengths & Limitations

#### Strengths
- Large, diverse dataset ($2,110$ patients, $11$ trials, $6$ tumor types) providing robust parameter estimation and broad generalizability
- Tumor type-specific modeling approach preserving indication-level applicability rather than naive pooling
- Rigorous time-varying clearance characterization addressing disease-related PK changes without over-parameterized TMDD
- Comprehensive simulation framework with explicit FDA-aligned comparability criteria ($20\%$ $AUC/C_{min}$, $25\%$ $C_{max}$ thresholds)
- Integrated efficacy and safety E-R analyses demonstrating maintained benefit-risk profile
- Appropriate handling of covariate effects with predefined clinical relevance thresholds
- Strong model diagnostics including pcVPCs stratified by tumor type and bootstrap validation

#### Limitations (Acknowledged by Authors)
- High eta shrinkage for $Q$ ($67.3\%$) and $E_{max}$ ($46.7\%$) indicating limited information for precise individual estimation of these parameters
- Moderate-to-high shrinkage on $V_p$ ($35.8\%$) suggesting peripheral compartment data may be sparse in some patients
- Proportional hazards assumption for OS E-R less well supported in ESCC, potentially reflecting delayed clinical benefit with immunotherapy
- Very limited data for moderate hepatic impairment ($n=4$), precluding definitive conclusions
- ADA-positive patients only $6.3\%$ of population, limiting immunogenicity impact assessment
- No dedicated organ impairment trials; hepatic/renal effects based on subgroup analysis of baseline lab values

#### Limitations (Expert Review)
- Lack of external validation dataset to confirm model predictive performance in independent patients
- No explicit model-based meta-analysis (MBMA) comparison with other PD-1 inhibitors to contextualize serplulimab PK within class
- Limited exploration of time-varying covariates (e.g., albumin changes during treatment) that could improve long-term exposure prediction
- No physiologically-based PK (PBPK) framework to mechanistically link covariate effects (particularly albumin) to FcRn recycling
- Simulation-based E-R for efficacy relies on previously developed exposure-response models not fully described in this manuscript; model structure and validation should be detailed for complete transparency
- No assessment of inter-occasion variability (IOV) for repeated dosing, which may be relevant given time-varying clearance and potential accumulation effects

#### Generalizability
Findings are highly generalizable to serplulimab's indicated populations (ES-SCLC, ESCC, Sq. NSCLC) and likely applicable to other PD-1/PD-L1 inhibitors with similar IgG4 backbone and FcRn-mediated disposition. The methodological framework—particularly the integration of PK comparability criteria with E-R confirmation—provides a template for flat-dose justification across oncology biologics. However, direct extrapolation to other antibody classes (e.g., ADCs, bispecifics) or non-oncology indications requires caution due to differing target biology and clearance mechanisms.

---

### Key Equations

**Baseline Clearance (CL0) with Covariates**

$$
CL_{0,i} \left(\frac{L}{day}\right) = CL_{TUMTP} \times \left(\frac{WT}{62}\right)^{0.514} \times \left(\frac{ALB}{41.4}\right)^{-0.714} \times \left(\frac{TUMBUR}{73}\right)^{0.0548} \times \left(\frac{ALP}{94}\right)^{0.0553} \times \exp\left[-0.145 \cdot (Female)\right] \times 24
$$

Baseline clearance for individual i, incorporating allometric scaling on weight, albumin effect (inverse relationship), tumor burden, alkaline phosphatase, and sex effect ($14.5\%$ lower clearance in females). Tumor type-specific typical value $CL_{TUMTP}$ with $24$-hour conversion.

**Time-Varying Clearance**

$$
CL_i = CL_{0,i} \times \exp\left[\frac{E_{max} \cdot \left(\frac{time}{T_{50}}\right)^{\lambda}}{1 + \left(\frac{time}{T_{50}}\right)^{\lambda}} + \eta_{CL,i}\right]
$$

Sigmoid Emax model describing disease-related clearance changes over treatment time, with $T_{50}=221$ days, $\lambda=2.43$, and $E_{max}=-0.0926$ indicating $9.26\%$ reduction from baseline. Inter-individual variability on clearance included.

**Central Volume of Distribution (Vc)**

$$
V_{c,i} (L) = V_{c,TUMTP} \times \left(\frac{WT}{62}\right)^{0.470} \times \left(\frac{ALB}{41.4}\right)^{-0.320} \times \exp\left[-0.14 \cdot (Female) + \eta_{V_c,i}\right]
$$

Tumor type-specific central volume with weight allometry, inverse albumin relationship, and $14\%$ reduction in females. Inter-individual variability included.

**Inter-compartmental Clearance (Q)**

$$
Q_i \left(\frac{L}{day}\right) = 0.0169 \times \exp(\eta_{Q,i}) \times 24
$$

First-order inter-compartmental clearance between central and peripheral compartments, with only inter-individual variability (no covariate effects retained in final model).

**Peripheral Volume of Distribution (Vp)**

$$
V_{p,i} (L) = 2.98 \times \left(\frac{ALB}{41.4}\right)^{-1.05} \times \left(\frac{TUMBUR}{73}\right)^{0.107} \times \exp(\eta_{V_p,i})
$$

Peripheral compartment volume with strong inverse albumin effect (power $-1.05$) and modest positive tumor burden effect. Fixed typical value with inter-individual variability.

**Time-Varying Clearance Parameters**

$$
T_{50} = 221 \ (day),   \lambda = 2.43
$$

Sigmoid Emax model parameters: $T_{50}$ is time to $50\%$ of maximum clearance change; $\lambda$ (Hill coefficient) describes steepness of time effect.

**Maximum Clearance Change (Emax)**

$$
E_{max,i} = -0.0926 + \eta_{E_{max},i}
$$

Population mean maximum fractional change in clearance from baseline ($-9.26\%$ reduction) with inter-individual variability.


---

### Figures & Tables

- **Figure 1**: Forest plots showing sensitivity analysis of significant covariates (body weight, albumin, sex, tumor burden, ALP, tumor type) on steady-state exposure metrics: $C_{avg,ss}$ (panel A), $C_{max,ss}$ (panel B), and $C_{min,ss}$ (panel C).
  - *Significance*: Demonstrates that all covariate effects on exposure are $\leq20\%$ (clinical relevance threshold), with body weight and albumin having largest but still modest effects ($\sim\pm20\%$). Critical visual evidence supporting no dose adjustment needed for any covariate.
- **Figure 2**: Predicted steady-state exposure ($C_{avg,ss}, C_{max,ss}, C_{min,ss}$) across exploratory covariate subgroups: age ($\leq65$ vs $>65$), race (Asian vs White), hepatic function (normal vs mild impairment), renal function (normal vs mild/moderate impairment), and ADA status.
  - *Significance*: Confirms minimal exposure differences in under-represented subgroups ($\leq12\%$ for race, $\leq7\%$ for hepatic, $\leq22\%$ for renal), supporting unified flat-dosing across diverse patient populations. Note: moderate hepatic impairment ($n=4$) excluded due to limited data.
- **Figure 3**: Comprehensive dosing regimen comparison: panels A-B show predicted $C_{min1}$ distributions for $200$ mg Q2W vs $3$ mg/kg Q2W and $300$ mg Q3W vs $4.5$ mg/kg Q3W; panels C-D show $C_{min1}$ vs body weight relationships; panel E shows concentration-time profiles for all five regimens including $10$ mg/kg Q2W reference.
  - *Significance*: Core evidence for flat-dose justification: overlapping exposure distributions, comparable weight-exposure relationships, and flat-dose exposures well below $10$ mg/kg Q2W safety ceiling. Visual demonstration of FDA comparability criteria satisfaction.
- **Figure 4**: Exposure-response analysis for efficacy: panels A-C show Kaplan-Meier OS curves comparing WT-based vs flat-dose predictions in Sq. NSCLC, SCLC, and ESCC; panel D shows ORR vs $C_{min1}$ relationship in MSI patients; panel E shows predicted ORR comparison.
  - *Significance*: Demonstrates negligible efficacy differences ($\leq0.1\%$ OS, overlapping ORR) between dosing strategies, confirming maintained clinical benefit with flat-dosing. E-R flatness supports exposure comparability as surrogate for outcome comparability.
- **Figure 5**: Safety exposure-response: probability of grade $\geq3$ TEAEs, G3TRAE, SAEs, AESIs, and irAEs across $C_{max1}$ sextiles, with individual observations (blue circles) and observed rates with $95\%$ CI (black circles with error bars).
  - *Significance*: Shows flat safety E-R relationships (no positive correlation between exposure and any AE type), supporting that higher exposures in low-weight patients with flat-dosing do not increase toxicity risk. Critical for benefit-risk assessment.
- **Table 1**: Patient characteristics and covariate distribution for the PK dataset ($n=2,110$): demographics, laboratory values, tumor characteristics, and concomitant therapies.
  - *Significance*: Describes the diverse, representative population supporting broad generalizability. Key features: wide weight range ($33-131$ kg), predominantly Asian ($87\%$), multiple tumor types, low ADA prevalence ($6.3\%$), minimal missing data.
- **Table 2**: Final PopPK parameter estimates with RSEs, $95\%$ CIs, and bootstrap validation: structural parameters ($CL_0$, $V_c$, $Q$, $V_p$), time-varying clearance parameters ($E_{max}$, $T_{50}$, $\lambda$), covariate effects, and variability components (IIV, residual error).
  - *Significance*: Core model characterization with excellent precision (RSE $\leq12\%$ for key parameters, $\leq30\%$ for covariates). Tumor type-specific $CL_0$ and $V_c$ values shown. Bootstrap confirms parameter stability. Eta shrinkage values indicate information content for random effects.

---

### Code & Reproducibility Assessment
Analysis performed in NONMEM (version not specified, likely $7.x$) with standard PopPK methodology. No code or model files provided in supplementary materials—only a data supplement (psp470204-sup-0001-datas1.docx) of unspecified content. Reproducibility limited to methodological description; no executable code, control streams, or datasets available for independent verification. Standard reporting of diagnostic plots and VPCs suggests conventional workflow but precludes direct replication.

---

### Supplementary Materials
One supplementary file provided: psp470204-sup-0001-datas1.docx (description not detailed in available content). Likely contains additional data tables, possibly extended patient characteristics, or trial-level summaries. No supplementary figures, model code, or additional methodological details referenced in main text extract.

---

### Future Directions
Key questions emerging from this work include: ($1$) Can the time-varying clearance model be refined with longitudinal albumin/tumor burden data to improve long-term exposure prediction? ($2$) Would a dedicated hepatic impairment trial (Child-Pugh B/C) support dosing in populations currently under-represented? ($3$) Can PBPK modeling mechanistically link the observed albumin-covariate relationship to FcRn saturation kinetics? ($4$) How does serplulimab's PK-E-R relationship compare quantitatively with pembrolizumab, nivolumab, and other anti-PD-1 agents via MBMA? ($5$) Would adaptive trial designs incorporating real-time PK monitoring validate the flat-dose assumption in special populations? ($6$) Can the tumor type-specific parameter estimates inform combination therapy optimization (e.g., chemotherapy-PK interactions)? The model structure also invites extension to QSP frameworks linking serplulimab exposure to receptor occupancy and downstream immune cell dynamics for mechanistic dose optimization.

---

### Expert Commentary
This manuscript exemplifies the evolution of pharmacometrics from descriptive characterization to strategic drug development decision-making. The authors' approach—eschewing TMDD for empirical time-varying clearance—demonstrates pragmatic model selection when mechanistic complexity exceeds information content, a lesson for PopPK practitioners often seduced by biological realism. The tumor type-specific parameterization, while increasing model dimensionality, preserves clinical utility for indication-specific dosing recommendations and reflects growing regulatory expectation for subgroup-relevant PK documentation. Most importantly, the seamless integration of PK comparability simulations with E-R confirmation illustrates the 'confirmatory pharmacometrics' paradigm now essential for post-approval dose optimization. The $20\%$ clinical relevance threshold, applied consistently across covariates and dosing comparisons, provides a transparent decision framework that should be adopted more broadly. For the field, this work reinforces that flat-dosing justification requires more than overlapping concentration distributions—it demands demonstrated equivalence in efficacy and safety outcomes, achieved here through rigorous E-R modeling. The high shrinkage on inter-compartmental parameters reminds us that even large datasets may not resolve all structural uncertainty, and that parameter precision (RSE) must be weighed against identifiability. Finally, the manuscript's alignment with FDA's $2022$ PD-1/PD-L1 dosing guidance demonstrates the value of proactive regulatory engagement in pharmacometric analysis planning.

---

### Bottom Line
For practicing pharmacometricians, this paper provides a regulatory-grade template for justifying dose regimen transitions, particularly the shift from weight-based to flat-dosing for monoclonal antibodies. Key takeaways: ($1$) Predefine clinical relevance thresholds (here $20\%$) before covariate analysis to avoid post-hoc rationalization; ($2$) Time-varying clearance may be more identifiable than full TMDD when target saturation is rapid; ($3$) Tumor type-specific parameters balance model parsimony with clinical applicability; ($4$) PK comparability alone is insufficient—E-R confirmation for efficacy AND safety is essential; ($5$) Bootstrap + pcVPC stratified by key subgroups provides robust validation; ($6$) Document that even 'worst-case' exposure scenarios (e.g., low weight + flat dose) remain within established safety margins. The serplulimab case demonstrates that with adequate data ($n>2000$, diverse indications), rigorous PopPK can drive operational simplification without compromising patient outcomes—a benchmark for future antibody dose optimization programs.

---

---

## 📊 Figures



```{=typst}
#pagebreak(weak: true)
#set page(flipped: false)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: Sensitivity analysis showing the influence of significant covariates on steady-state exposure (A)Cavg,ss, (B)Cmax,ss, and (C)Cmin,ss. The vertical black line r],
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: false)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [FIGURE 2: Predicted steady-state exposure (Cavg,ss,Cmax,ss, andCmin,ss) across key covariates subgroups. Model-predicted exposure metrics were summarized by renal function],
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: false)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 3: Predicted trough concentrations (Cmin1) and time–concentration profiles following different serplulimab dosing regimens. Panels (A, B) show the predicted distrib],
) <fig-3>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: false)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [FIGURE 4: Exposure–response (E–R) analysis for efficacy across tumor types and dosing regimens. Kaplan–Meier plots show overall survival for control and serplulimab treatm],
) <fig-4>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: false)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [FIGURE 5: Probability of adverse events (AEs) across predicted serplulimab Cmax1sextiles. Blue open circles represent individual observations; black solid circles show obs],
) <fig-5>
#set page(flipped: false)
```