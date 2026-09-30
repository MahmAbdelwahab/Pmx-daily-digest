---
layout: post
title: "Prior-informed population pharmacokinetic-pharmacodynamic modeling of dexamethasone in horses"
date: 2026-09-30
authors: "Yu R, Toutain PL, Ekstrand C, Jusko WJ"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026, 53:57"
doi: "10.1007/s10928-026-10062-7"
paper_type: popk
tags: [popk, meta-analysis]
excerpt_text: "This paper demonstrates how informative priors from a meta-analysis can stabilize the estimation of a complex mechanistic mPBPK/PD model in a population framework, using dexamethasone in horses as a case study. FOCEI with informative priors outperformed both standard FOCEI and full Bayesian MCMC in terms of parameter identifiability and practical feasibility. The analysis identified a modest sex difference in hepatic clearance and confirmed the long terminal half-life of dexamethasone due to flip-flop kinetics and nonlinear liver binding. This is a must-read for pharmacometricians dealing with high-dimensional mechanistic models and sparse individual-level data."
pdf_path: "/assets/digests/2026-09-30-prior-informed-population-pharmacokinetic-pharmacodynamic-modeling-of/PMx_Priorinformed_population_pharmacokinetic_20260930.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper demonstrates how informative priors from a meta-analysis can stabilize the estimation of a complex mechanistic mPBPK/PD model in a population framework, using dexamethasone in horses as a case study. FOCEI with informative priors outperformed both standard FOCEI and full Bayesian MCMC in terms of parameter identifiability and practical feasibility. The analysis identified a modest sex difference in hepatic clearance and confirmed the long terminal half-life of dexamethasone due to flip-flop kinetics and nonlinear liver binding. This is a must-read for pharmacometricians dealing with high-dimensional mechanistic models and sparse individual-level data.

---

### Executive Summary
This study extends a previously published minimal physiologically-based pharmacokinetic/pharmacodynamic (mPBPK/PD) model of dexamethasone (DEX) in horses from a naïve-pooled meta-analysis to a population nonlinear mixed-effects framework. Using individual-level data from five studies (32 horses) encompassing IV, IM, and IA dosing of three DEX formulations, the authors compared three estimation approaches: standard FOCEI, FOCEI with informative priors (FOCEI-Priors), and full Bayesian MCMC. The FOCEI-Priors approach provided robust estimation of all parameters, with precise estimates (RSE < 20%) and good diagnostics, while standard FOCEI required extensive parameter fixing and Bayesian estimation struggled with posterior exploration for the PD component. The analysis identified a 17% higher hepatic clearance in mares compared to geldings, and confirmed the long terminal half-life (~67 h) driven by nonlinear liver binding and flip-flop kinetics for IM DEX-ISO. The PD model captured circadian cortisol rhythm, DEX-induced suppression, and stress-induced surges. The work demonstrates the practical value of prior-informed population modeling for complex mechanistic systems and provides a template for similar analyses in veterinary pharmacology.

---

### Scientific Context & Motivation
Population PK/PD modeling of complex mechanistic systems, such as PBPK models, often faces parameter identifiability issues and numerical instability, especially when data are sparse and heterogeneous. Traditional estimation methods like FOCEI may require extensive parameter fixing, limiting the ability to quantify covariate effects and variability. Bayesian methods offer a natural framework for incorporating prior information but can be sensitive to prior specification and computational burden. This paper addresses the gap by systematically comparing three estimation approaches (FOCEI, FOCEI with informative priors, and full Bayesian) within a unified mPBPK/PD structure for dexamethasone in horses. The work extends a previous naïve-pooled meta-analysis to a population analysis using individual-level data, aiming to identify sources of variability and covariate effects. The findings have implications for dose optimization and withdrawal time estimation in equine practice.

---

## ⚡ Methodological Snapshot
The authors extended a previously published mPBPK/PD model of dexamethasone in horses from a naïve-pooled meta-analysis to a population nonlinear mixed-effects framework. They compared three estimation approaches: standard FOCEI, FOCEI with informative priors (FOCEI-Priors), and full Bayesian MCMC. The structural model included blood, liver, remainder tissues, and bladder compartments, with nonlinear liver binding, prodrug conversion, and multiple absorption routes. The PD model was an indirect response model with circadian rhythm and stress-induced surge. Informative priors were derived from the earlier meta-analysis. FOCEI-Priors provided robust estimation of all parameters, while standard FOCEI required fixing many parameters and Bayesian MCMC had convergence issues for the PD component. The final model identified sex as a covariate on hepatic clearance and provided precise parameter estimates.

---

## 🏗️ Structural Model Breakdown
The structural model is a minimal PBPK model with compartments for blood, liver, remainder tissues, and bladder, plus a synovial fluid compartment for IA dosing. Prodrugs (DEX-PHO and DEX-ISO) are converted to DEX via first-order rate constants ($k_f$) in blood or synovial fluid. Absorption from IM depot and synovial fluid is modeled with first-order rate constants ($k_a$). DEX in blood exchanges with liver and remainder tissues via blood flows ($Q_l$, $Q_r$) and partition coefficients ($K_{pu,l}$, $K_{p,r}$). Hepatic clearance ($CL_h$) is intrinsic and scaled by body weight and sex. Renal clearance ($CL_r$) is included. Liver binding is nonlinear ($B_{max,l}$, $K_{d,l}$). The bladder is a well-stirred compartment with constant volume ($V_{bc}$) and urine flow ($CL_u$). The PD model is an indirect response model for cortisol with a circadian baseline (cosine function) and a stress-induced surge ($R_{max,stress}$ over duration $\tau$). DEX inhibits cortisol production via an $E_{max}$ model with Hill coefficient. The model is implemented in NONMEM ADVAN6.

---

### Detailed Methodological Analysis

#### Modeling Approach
A minimal physiologically-based pharmacokinetic (mPBPK) model with blood, liver, and remainder tissue compartments, plus a bladder compartment for urine, was used. Prodrug conversion and absorption were modeled with first-order rate constants. Liver binding was nonlinear ($B_{max}/K_d$). The PD model was an indirect response (IDR) model I with circadian baseline and stress-induced surge. The model was implemented in NONMEM using ADVAN6.

#### Data Sources
Individual-level data from five studies (n=32 horses) conducted between 1981 and 2013, including randomized cross-over, parallel, and placebo-controlled designs. Horses were Saddlebred and Standardbred, aged 3-20 years, 10 mares and 22 geldings, body weight 430-700 kg. DEX was administered as free alcohol, isonicotinate (ISO), and sodium phosphate (PHO) via IV (bolus/infusion), IM, and IA routes. Data included 623 plasma DEX concentrations, 95 urine DEX concentrations, and 1,063 plasma cortisol concentrations. All concentrations were above LLOQ.

#### Estimation Methods
Three approaches were compared: (1) standard FOCEI, (2) FOCEI with informative priors (FOCEI-Priors) using maximum a posteriori estimation, and (3) full Bayesian MCMC. Informative priors for fixed effects were derived from the previous naïve pooled meta-analysis, with Wishart priors for BSV and RUV matrices (df=4 and 1). Bayesian MCMC used 4 chains, 500 burn-in and 1000 post burn-in iterations. Sequential PK/PD estimation was used: PK parameters were estimated first, then individual PK parameters were fixed for PD estimation. NONMEM 7.5.0 with ADVAN6 was used.

#### Model Evaluation
Model selection based on OFV, goodness-of-fit diagnostics (CWRES, observed vs predicted), and parameter precision (RSE). Shrinkage <30% considered acceptable. Internal evaluation via simulation-based predictive checks with 800 replicates. For Bayesian, convergence assessed using trace plots, Gelman-Rubin statistic (R-hat), and effective sample size (ESS). Prior sensitivity analysis was performed by increasing prior variance four-fold.

#### Covariate Analysis
Stepwise covariate modeling (forward inclusion p<0.05, backward elimination p<0.001) was used. The only significant covariate was sex on hepatic clearance ($CL_h$), with mares having 17% higher $CL_h$ than geldings. Body weight was included as an allometric power model with exponent fixed to 0.75 due to poor precision when estimated. No covariates were significant for PD parameters. A study-dependent effect on the cortisol mesor ($R_m$) was identified as a categorical covariate.

---

### Statistical Rigor Assessment
The statistical methods are appropriate for the complex model and limited data. The use of informative priors from a prior meta-analysis is justified and sensitivity analysis (four-fold increase in prior variance) showed robustness. The comparison of three estimation approaches is thorough, with diagnostics including RSE, shrinkage, VPCs, and Bayesian convergence metrics. However, the sample size is small (n=32) and the number of parameters is large, which limits the ability to estimate multiple BSV terms. The sequential PK/PD approach may introduce bias, though it is common practice. The lack of external validation is a limitation. The high residual variability in urine data (544%) and cortisol data (additive error 20 ng/mL) suggests that some variability remains unexplained. Overall, the statistical rigor is adequate for the exploratory nature of the study, but the results should be interpreted with caution given the small sample size and model complexity.

---

## 📊 Key Findings
The population analysis successfully characterized DEX PK and PD in horses using a prior-informed mPBPK/PD model. Key findings include: (1) Hepatic clearance of DEX was 17% higher in mares (0.594 L/h/kg) than in geldings (0.486 L/h/kg) for a 500-kg horse, with a shared allometric exponent of 0.75 on body weight. (2) The conversion of DEX-isonicotinate to DEX in blood was extremely rapid ($k_{f,b} = 22.8$ $h^{-1}$, $t_{1/2} < 2$ min), with a systemic bioavailability of 81.2%. (3) IM absorption of DEX-ISO was slow ($k_{a,m} = 0.0115$ $h^{-1}$, $t_{1/2} = 57$ h), leading to flip-flop kinetics and a prolonged terminal phase (apparent $t_{1/2} \sim 67$ h). (4) Nonlinear liver binding ($B_{max,l} = 121$ ng/mL, $K_{d,l} = 0.39$ ng/mL) was a key determinant of the long terminal phase. (5) The blood-to-plasma ratio ($R_b$) was estimated at $0.85$, higher than the previously assumed $0.69$. (6) The PD model captured circadian cortisol rhythm (amplitude 17.6 ng/mL, acrophase at 9:00 AM), DEX-induced suppression ($IC_{50} = 0.041$ ng/mL, $I_{max} = 1$, Hill coefficient 1.12), and stress-induced surges ($R_{max} = 24.7$ ng/mL, duration 20 min). (7) A study-dependent effect on the cortisol mesor (93 vs 47 ng/mL) was identified. (8) FOCEI-Priors provided robust estimation with all RSEs < 20%, while standard FOCEI required extensive parameter fixing and Bayesian MCMC showed suboptimal convergence for the PD component.

---

## 💡 Clinical & Regulatory Implications
The population PK/PD model provides quantitative insights into dexamethasone disposition and adrenal suppression in horses, supporting dose optimization and withdrawal time estimation for racing and therapeutic use. The identified sex difference in hepatic clearance (17% higher in mares) suggests that dosing adjustments may be considered for female horses, though the clinical impact is modest. The model also confirms the prolonged absorption and flip-flop kinetics of dexamethasone isonicotinate after IM administration, which is relevant for designing dosing intervals and predicting detection times. The framework can be extended to other corticosteroids and species, aiding regulatory decision-making in veterinary medicine.

---

### Strengths & Limitations

#### Strengths
- Comprehensive comparison of three estimation approaches within a unified structural model.
- Use of informative priors from a prior meta-analysis is well-justified and sensitivity analysis was performed.
- The mPBPK/PD model is physiologically plausible and captures complex features such as nonlinear liver binding, flip-flop kinetics, and circadian rhythm.
- Parameter estimates are consistent with previous analyses and have good precision (RSE < 20%).
- Identification of a sex effect on hepatic clearance adds new knowledge.
- The model successfully integrates data from multiple studies with diverse designs and formulations.
- The paper provides detailed methodological guidance and NONMEM control streams in the supplementary materials.

#### Limitations (Acknowledged by Authors)
- Small sample size (n=32) and limited number of subjects restricted the ability to estimate multiple BSV terms and fully explore covariate effects.
- Seasonal differences in circadian rhythm could not be reliably estimated and were not included.
- Bayesian estimation showed suboptimal MCMC diagnostics, limiting its use in the final analysis.
- Sequential PK/PD estimation was used instead of simultaneous estimation, which may affect parameter identifiability.
- No external validation dataset was available.
- High residual variability in urine and cortisol data suggests unexplained sources of variability.

#### Limitations (Expert Review)
- The prior information was derived from a subset of the same studies (internal transfer), which may overestimate the informativeness of the priors and lead to overly optimistic precision.
- The shared BSV on hepatic clearance may not capture all inter-individual variability; other parameters might have BSV that could not be estimated.
- The allometric exponent for body weight was fixed to 0.75 rather than estimated, which may not be optimal for this dataset.
- The stress-induced surge model assumes a fixed duration (20 min) and magnitude, which may not reflect individual variability.
- The urine model uses a constant bladder volume ($V_{bc}$) which may not be physiologically accurate.
- The study-dependent effect on cortisol mesor may confound with other study-specific factors (e.g., assay differences, handling).

#### Generalizability
The model is specific to dexamethasone in horses, but the methodological approach of using informative priors from a meta-analysis to stabilize population estimation of a mechanistic model is broadly applicable to other drugs and species. The identified sex effect on hepatic clearance may be relevant to other corticosteroids metabolized by CYP3A, but extrapolation to other breeds or management conditions requires caution. The model's structure is based on physiological principles, which enhances its generalizability across dosing routes and formulations.

---

### Key Equations

**Prodrug conversion in blood (IV)**

{% raw %}
$$
\frac{dA_{\text{blood},i}}{dt} = -k_{f,b,i} \cdot A_{\text{blood},i},   A_{\text{blood},i}(0) = \text{dose}_i
$$
{% endraw %}

Prodrug (i = DEX_PHO or DEX_ISO) amount in blood after IV dosing, with first-order conversion to DEX.

**IM depot absorption**

{% raw %}
$$
\frac{dA_{\text{depot},i}}{dt} = -k_{a,m,i} \cdot A_{\text{depot},i},   A_{\text{depot},i}(0) = \text{dose}_i
$$
{% endraw %}

Amount of drug in the depot after IM dosing, with first-order absorption.

**Blood amount after IM dosing**

{% raw %}
$$
\frac{dA_{\text{blood},i}}{dt} = k_{a,m,i} \cdot A_{\text{depot},i} - k_{f,b,i} \cdot A_{\text{blood},i},   A_{\text{blood},i}(0) = 0
$$
{% endraw %}

Amount of drug in blood after IM dosing, including absorption from depot and conversion to DEX.

**IA prodrug in synovial fluid**

{% raw %}
$$
\frac{dA_{i,SF}}{dt} = -k_{f,j,i} \cdot A_{i,SF},   A_{i,SF}(0) = \text{dose}_i
$$
{% endraw %}

Prodrug amount in synovial fluid after IA dosing, with first-order absorption into blood.

**DEX in synovial fluid after IA**

{% raw %}
$$
\frac{dA_{\text{DEX,SF}}}{dt} = k_{f,j,i} \cdot A_{i,SF} \cdot \frac{MW_{\text{DEX}}}{MW_i} - k_{a,j,\text{DEX}} \cdot A_{\text{DEX,SF}},   A_{\text{DEX,SF}}(0) = 0
$$
{% endraw %}

DEX amount in synovial fluid after IA dosing, formed from prodrug and absorbed into blood.

**Blood compartment mass balance**

{% raw %}
$$\begin{aligned}
\frac{dC_p}{dt} \cdot V_b \cdot R_b \\
&= \text{input}_{IV/IM/IA} + Q_l \cdot \frac{C_l}{K_{pu,l}} \\
& + Q_r \cdot \frac{C_r}{K_{p,r}} - Q_{co} \cdot C_p \cdot R_b - CL_r \cdot C_p,   C_p(0) = 0
\end{aligned}$$
{% endraw %}

Mass balance for DEX concentration in blood (Cp) with input from IV/IM/IA, liver and remainder tissue exchange, and renal clearance.

**Input from IV/IM**

{% raw %}
$$
\text{input}_{IV/IM} = F_{f,b,i} \cdot k_{f,b,i} \cdot A_{\text{blood},i} \cdot \frac{MW_{\text{DEX}}}{MW_i}
$$
{% endraw %}

Input rate from IV or IM dosing, accounting for bioavailability and prodrug conversion.

**Input from IA**

{% raw %}
$$
\text{input}_{IA} = F_{j,\text{DEX}} \cdot k_{a,j,\text{DEX}} \cdot A_{\text{DEX,SF}}
$$
{% endraw %}

Input rate from IA dosing, accounting for absorption from synovial fluid.

**Liver compartment mass balance**

{% raw %}
$$
\frac{dC_l}{dt} \cdot V_l = Q_l \cdot \left(C_p \cdot R_b - \frac{C_l}{K_{pu,l}}\right) - CL_h \cdot \frac{C_l}{K_{pu,l}},   C_l(0) = 0
$$
{% endraw %}

Mass balance for DEX concentration in liver (Cl), with blood flow input and hepatic intrinsic clearance.

**Remainder tissue mass balance**

{% raw %}
$$
\frac{dC_r}{dt} \cdot V_r = Q_r \cdot \left(C_p \cdot R_b - \frac{C_r}{K_{p,r}}\right),   C_r(0) = 0
$$
{% endraw %}

Mass balance for DEX concentration in remainder tissues (Cr).

**Liver partition coefficient**

{% raw %}
$$
K_{pu,l} = \frac{\sqrt{(C_l - K_{d,l} - B_{\max,l})^2 + 4 \cdot K_{d,l} \cdot C_l} - (C_l - K_{d,l} - B_{\max,l})}{2 \cdot K_{d,l}}
$$
{% endraw %}

Liver-to-plasma partition coefficient based on nonlinear binding (Bmax_l, Kd_l).

**Circadian cortisol baseline**

{% raw %}
$$
R_{b,CTS}(t) = R_m + R_a \cdot \cos\left(\frac{2\pi}{T} \cdot (t - t_p)\right)
$$
{% endraw %}

Circadian baseline of cortisol as a cosine function with mean Rm, amplitude Ra, period T, and peak time tp.

**Cortisol turnover**

{% raw %}
$$
\frac{dR_{b,CTS}}{dt} = k_{in}(t) - k_{out} \cdot R_{b,CTS}(t)
$$
{% endraw %}

Indirect response model for cortisol with time-varying synthesis kin(t) and first-order loss kout.

**Time-varying cortisol synthesis**

{% raw %}
$$
k_{in}(t) = k_{out} \cdot R_m + k_{out} \cdot R_a \cdot \cos\left(\frac{2\pi}{T} \cdot (t - T_p)\right) - \frac{2\pi}{T} \cdot R_a \cdot \sin\left(\frac{2\pi}{T} \cdot (t - t_p)\right)
$$
{% endraw %}

Time-varying synthesis rate derived from the circadian baseline and its derivative.

**DEX effect on cortisol**

{% raw %}
$$
\frac{dR_{\text{DEX,CTS}}}{dt} = \frac{R_{\max,\text{stress}}}{\tau} + k_{in}(t) \cdot \left(1 - \frac{I_{\max} \cdot C_p^{\gamma}}{C_p^{\gamma} + IC_{50}^{\gamma}}\right) - k_{out} \cdot R_{\text{DEX,CTS}}
$$
{% endraw %}

Indirect response model for DEX-induced cortisol suppression with stress-induced surge (Rmax_stress) and Hill function.

**Stress surge termination**

{% raw %}
$$
\frac{R_{\max,\text{stress}}}{\tau} = 0,   \text{when } t \ge \tau
$$
{% endraw %}

Stress-induced surge is active only for duration tau after dosing.

**Hepatic clearance covariate model**

{% raw %}
$$
CL_h = TVCL_h \cdot \left(\frac{BW}{\text{MeanBW}}\right)^{\theta_{BW,CLh}} \cdot e^{\eta_{CLh}}
$$
{% endraw %}

Covariate model for hepatic clearance with body weight allometric scaling and sex effect.

---

### Figures & Tables

- **Figure 1**: Schematic of the mPBPK/PD model structure showing blood, liver, remainder tissues, bladder, and synovial fluid compartments, along with prodrug conversion and absorption pathways, and the cortisol indirect response model.
  - *Significance*: Provides the structural basis for the entire analysis, illustrating the complex interplay of drug disposition and PD response.
- **Figure 2**: Observed and model-predicted plasma DEX concentration-time profiles grouped by administration route and dose, with prediction intervals from the FOCEI-Priors model.
  - *Significance*: Demonstrates the model's ability to capture the diverse PK profiles across IV, IM, and IA routes, including the prolonged terminal phase after IM DEX-ISO.
- **Figure 3**: Observed and model-predicted urine DEX concentration-time profiles, showing high variability and the prolonged excretion after IM dosing.
  - *Significance*: Highlights the challenges of modeling urine data and the need for appropriate residual error models.
- **Figure 4**: Individual fitted values of hepatic clearance ($CL_h$) versus body weight, colored by sex, showing the covariate relationships.
  - *Significance*: Visualizes the sex and body weight effects on $CL_h$, supporting the covariate model.
- **Figure 5**: Observed and model-predicted cortisol concentration-time profiles for placebo and various DEX doses, illustrating circadian rhythm, suppression, and stress-induced surges.
  - *Significance*: Shows the PD model's ability to capture the complex cortisol dynamics, including the prolonged suppression after IM DEX-ISO.
- **Table 1**: Summary of the five studies included in the population analysis, including design, number of horses, breed, age, sex, body weight, dosing routes, and formulations.
  - *Significance*: Provides the demographic and study design context essential for interpreting covariate effects and model generalizability.
- **Table 2**: PK parameter estimates from the previous naïve pooled analysis and the current FOCEI-Priors population analysis, including fixed effects and random variability.
  - *Significance*: Key table showing the consistency of parameter estimates between the two approaches and the newly estimated BSV and covariate effects.
- **Table 3**: PD parameter estimates from the previous meta-analysis and the current FOCEI-Priors analysis, including circadian rhythm parameters, $IC_{50}$, Hill coefficient, and stress-related parameters.
  - *Significance*: Confirms the PD model parameters and highlights the study-dependent mesor effect and the lack of significant covariates on cortisol response.

---

### Code & Reproducibility Assessment
The NONMEM control streams for FOCEI-priors and Bayesian-MCMC implementations are provided in the Supplementary Materials. The experimental data are available upon reasonable request from Drs. Toutain and Ekstrand. No public code repository is mentioned.

---

### Supplementary Materials
Supplementary material includes NONMEM control streams for FOCEI-priors and Bayesian-MCMC implementations, additional diagnostic plots (Figures S1-S5), and tables comparing parameter estimates across estimation approaches (Tables S2-S3). The supplementary PDF is available for download.

---

### Future Directions
Future work could explore simultaneous PK/PD estimation to reduce potential bias from the sequential approach, and incorporate additional data to estimate more than one BSV term (e.g., on $IC_{50}$ or acrophase). Seasonal effects on circadian rhythm could be modeled if data from multiple seasons are available. External validation with independent datasets would strengthen the model's generalizability. The methodology could be applied to other corticosteroids or drugs with complex disposition in horses and other species. Additionally, the impact of the identified sex difference on dosing recommendations could be evaluated through clinical trial simulations.

---

### Expert Commentary
This paper is a valuable methodological contribution to the pharmacometrics literature, illustrating how informative priors can rescue a high-dimensional mechanistic model from identifiability issues when transitioning from aggregate to individual-level data. The comparison of FOCEI, FOCEI-Priors, and Bayesian MCMC within the same structural model is instructive: it shows that while Bayesian methods are theoretically appealing, they can be sensitive to prior specification and data informativeness, especially for PD endpoints with high residual variability. The FOCEI-Priors approach, which uses priors as a regularization term, offers a pragmatic compromise. The authors' decision to use a shared BSV on hepatic clearance and to fix several parameters based on prior knowledge is consistent with good modeling practice. The identification of a sex effect on $CL_h$, though modest, adds to the sparse literature on sex differences in equine drug metabolism. The model's ability to capture the prolonged terminal phase and the circadian cortisol dynamics is impressive. This work will be of interest to modelers dealing with complex PBPK/PD systems and sparse data, and it underscores the importance of prior sensitivity analysis. The sequential PK/PD approach, while common, may introduce bias; simultaneous estimation could be explored in future work with more computational resources.

---

### Bottom Line
This paper demonstrates that informative priors derived from a naïve-pooled meta-analysis can stabilize the estimation of a complex mechanistic mPBPK/PD model in a nonlinear mixed-effects framework, enabling reliable population analysis of sparse individual-level data. FOCEI with informative priors (FOCEI-Priors) proved more practical than full Bayesian estimation for this high-dimensional system, yielding precise parameter estimates and identifying a modest sex effect on hepatic clearance of dexamethasone in horses. The work provides a template for leveraging prior knowledge to overcome identifiability issues in mechanistic population modeling.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-09-30-prior-informed-population-pharmacokinetic-pharmacodynamic-modeling-of/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-09-30-prior-informed-population-pharmacokinetic-pharmacodynamic-modeling-of/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-09-30-prior-informed-population-pharmacokinetic-pharmacodynamic-modeling-of/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-09-30-prior-informed-population-pharmacokinetic-pharmacodynamic-modeling-of/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-09-30-prior-informed-population-pharmacokinetic-pharmacodynamic-modeling-of/figures/fig_05.png)