---
layout: post
title: "Population PK–PD Modeling of Danicopan Add-On Therapy in Participants With Paroxysmal Nocturnal Hemoglobinuria Treated With Ravulizumab or Eculizumab"
date: 2026-05-28
authors: "Chen J, Yang F, Li H, Pradhan R, Ortiz S"
journal: "CPT Pharmacometrics Syst Pharmacol. 2025"
doi: "https://pubmed.ncbi.nlm.nih.gov/41757870/"
paper_type: popk
tags: [popk]
excerpt_text: "This population PK-PD analysis of danicopan, a factor D inhibitor, in healthy volunteers and PNH patients on C5 inhibitors demonstrates that the approved $150$ mg and $200$ mg three-times-daily regimens achieve near-complete alternative pathway inhibition regardless of food intake. Clinicians and pharmacometricians should read this to understand the basis for the dosing recommendations and the minimal impact of covariates like body weight, sex, and renal impairment on clinical efficacy."
pdf_path: "/assets/digests/2026-05-28-population-pkpd-modeling-of-danicopan-add-on-therapy-in-participants-with/PMx_Population_PKPD_Modeling_of_Danicopan_Ad_20260528.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This population PK-PD analysis of danicopan, a factor D inhibitor, in healthy volunteers and PNH patients on C5 inhibitors demonstrates that the approved $150$ mg and $200$ mg three-times-daily regimens achieve near-complete alternative pathway inhibition regardless of food intake. Clinicians and pharmacometricians should read this to understand the basis for the dosing recommendations and the minimal impact of covariates like body weight, sex, and renal impairment on clinical efficacy.

---

### Executive Summary
Danicopan is a first-in-class oral factor D inhibitor approved as add-on therapy to ravulizumab or eculizumab for PNH patients with clinically significant extravascular hemolysis. This study developed a population PK model (two-compartment with zero-order release and first-order absorption) and a PK-PD model (inhibitory $E_{max}$) linking danicopan exposure to alternative pathway (AP) activity. The PK model, built from $407$ subjects ($7491$ samples), identified body weight, sex, severe renal impairment, formulation, and food status as significant covariates, though none were clinically significant. The PK-PD model estimated $IC_{50}$ and $IC_{90}$ for AP inhibition as $12$ ng/mL and $108$ ng/mL, respectively. Simulations confirmed that both $150$ mg and $200$ mg tid regimens achieve trough concentrations above $IC_{90}$ and near-complete AP inhibition ($<10\%$ residual activity) irrespective of food, supporting the approved dosing and label claims.

---

### Scientific Context & Motivation
PNH patients on C5 inhibitors may still experience extravascular hemolysis due to C3 opsonization. Danicopan inhibits factor D, blocking the alternative pathway upstream of C5, thereby reducing EVH. Prior to this analysis, the exposure-response relationship and the impact of covariates on danicopan PK were not fully characterized. This study fills the gap by quantifying the PK-PD relationship and justifying the approved dosing regimens, demonstrating that near-complete AP inhibition is achieved at trough with both doses, and that food has minimal impact on bioavailability.

---

## ⚡ Methodological Snapshot
The population PK model was developed using NONMEM 7.5 with FOCE-I method. Data from $14$ clinical studies (phase 1-3) including $407$ participants ($316$ healthy, $91$ PNH) were used. A two-compartment model with linear elimination and absorption via zero-order release followed by first-order absorption was selected. Covariates were tested via stepwise forward addition ($p<0.01$) and backward elimination ($p<0.001$). The PK-PD model used an inhibitory $E_{max}$ model relating danicopan concentration to AP activity, with covariates evaluated at $p<0.05$. Model evaluation included prediction-corrected VPCs and bootstrap. Simulations were performed to predict steady-state exposures and AP inhibition under various food conditions.

---

## 🏗️ Structural Model Breakdown
The PK model is a two-compartment model with linear elimination. Absorption is modeled as a zero-order release (duration $D_1$) followed by first-order absorption ($K_a$). The parameters are $CL/F$, $V_c/F$, $Q/F$, $V_p/F$, $K_a$, $D_1$, $T_{lag}$, and $F$ (bioavailability relative to reference). Covariate effects: $CL/F$ and $Q/F$ scaled allometrically with weight (exponent $0.645$), $V_c/F$ and $V_p/F$ scaled with weight (exponent $0.876$). Female sex reduced $CL/F$ by $22.1\%$. Severe renal impairment reduced $CL/F$ by $43.3\%$. Food status affected $K_a$, $D_1$, and $F$. The PK-PD model is an inhibitory $E_{max}$ model: AP activity = $AP_0 - (AP_0 - I_{max}) \cdot C / (IC_{50} + C)$, where $AP_0$ is baseline AP activity, $I_{max}$ is the minimum AP activity, $IC_{50}$ is $12$ ng/mL. Covariates on $AP_0$ included weight and East Asian region.

---

### Detailed Methodological Analysis

#### Modeling Approach
Population PK model: two-compartment with zero-order release ($D_1$) followed by first-order absorption ($K_a$), linear elimination. PK-PD model: direct inhibitory $E_{max}$ model linking danicopan concentration to AP activity. Software: NONMEM 7.5 (FOCE-I).

#### Data Sources
Data from $14$ clinical studies: $11$ phase 1 trials in healthy volunteers ($n=316$), $2$ phase 2 trials in PNH ($n=22$), and $1$ phase 3 ALPHA trial in PNH ($n=69$). Total $407$ participants, $7491$ PK samples. AP activity data from ALPHA trial ($n=69$, $475$ time-matched samples).

#### Estimation Methods
First-order conditional estimation with eta-epsilon interaction (FOCE-I) in NONMEM 7.5.

#### Model Evaluation
Prediction-corrected visual predictive checks (pcVPC) stratified by food status; goodness-of-fit plots; bootstrap (not explicitly mentioned but typical). The pcVPC showed good prediction of peak and trough concentrations.

#### Covariate Analysis
Stepwise forward addition ($\alpha=0.01$) and backward elimination ($\alpha=0.001$) for PK model; for PD model, $\alpha=0.05$. Covariates tested: demographics, renal/hepatic function, food status, formulation, background C5 inhibitor, etc. Significant covariates: body weight (on $CL$, $V_c$, $V_p$, $Q$), sex (on $CL$), severe renal impairment (on $CL$), food status (on $K_a$, $D_1$, $F$), formulation (on $F$, $K_a$). For PD: weight and East Asian region on baseline AP activity.

---

### Statistical Rigor Assessment
The analysis used a large dataset ($407$ subjects, $7491$ samples) with appropriate methods (FOCE-I). Covariate selection used stringent criteria ($p<0.01$ forward, $p<0.001$ backward) reducing false positives. Model evaluation with pcVPC demonstrated adequate predictive performance. However, the number of patients with severe renal impairment was small ($n=8$), limiting the precision of the covariate effect. The PK-PD model used only phase 3 data ($n=69$) and may not capture variability in broader populations. The use of post-hoc parameters for simulations may introduce bias. Missing data handling: BLQ samples excluded ($3.8\%$), which is acceptable.

---

## 📊 Key Findings
Danicopan PK was described by a two-compartment model with zero-order release and first-order absorption. $CL/F$ was $79.5$ L/h, $V_c/F$ $163$ L, $K_a$ (tablet) $1.58$ $h^{-1}$. Body weight, sex, severe renal impairment, formulation, and food status were significant covariates. The PK-PD model estimated $IC_{50}=12$ ng/mL and $IC_{90}=108$ ng/mL for AP inhibition. Simulations showed that both $150$ mg and $200$ mg tid achieve trough concentrations above $IC_{90}$ and near-complete AP inhibition ($<10\%$ residual activity) regardless of food status. The $200$ mg tid regimen provided higher $C_{trough}$ and a greater proportion of patients above $IC_{90}$ ($86.1\%$ vs $74.5\%$ with standard meal).

---

## 💡 Clinical & Regulatory Implications
The results support the approved dosing of danicopan $150$ mg tid, with option to escalate to $200$ mg tid based on clinical response. No dose adjustment is needed for body weight, sex, mild/moderate renal impairment, or food intake. In patients with severe renal impairment, a reduced starting dose of $100$ mg tid is recommended by EMA, though US and Canada labels do not require adjustment. The PK-PD relationship confirms that near-complete AP inhibition is achieved, supporting the efficacy observed in the ALPHA trial. These findings may facilitate regulatory submissions and label expansions.

---

### Strengths & Limitations

#### Strengths
- Large dataset from $14$ clinical studies including healthy and PNH patients.
- Rigorous covariate analysis with forward addition and backward elimination.
- Comprehensive model evaluation with prediction-corrected VPC.
- Clear linkage of PK to PD (AP activity) supporting dosing rationale.
- Inclusion of food effect assessment enabling label claim.

#### Limitations (Acknowledged by Authors)
- Small number of patients with severe renal impairment ($n=8$) limits precision of covariate effect.
- PK-PD model based only on phase 3 data ($n=69$) may not capture full variability.
- Use of post-hoc parameters for simulations may introduce bias.

#### Limitations (Expert Review)
- The model did not account for potential time-dependent changes in AP activity or receptor dynamics.
- The $E_{max}$ model assumed direct inhibition without delay; no indirect response or transduction delay was considered.
- The analysis did not explore the relationship between AP inhibition and clinical endpoints like hemoglobin or transfusion avoidance.
- The covariate analysis for PD used a small sample size and may have missed subtle effects.
- The model was developed using data from clinical trials with strict inclusion criteria; generalizability to real-world PNH patients may be limited.

#### Generalizability
The PK model was developed using a diverse population including healthy volunteers and PNH patients across multiple regions, supporting generalizability. However, the PD model was derived from a single phase 3 trial with $69$ patients, which may limit extrapolation to broader populations. The findings are most applicable to PNH patients on stable C5 inhibitor therapy with clinically significant EVH.

---

### Key Equations

**Two-compartment PK model with zero-order release and first-order absorption**

{% raw %}
$$
\frac{dA_{\text{abs}}}{dt} = \begin{cases} k_0 - K_a \cdot A_{\text{abs}} & \text{if } t < D_1 \\ -K_a \cdot A_{\text{abs}} & \text{if } t \ge D_1 \end{cases} \\ \frac{dA_c}{dt} = K_a \cdot A_{\text{abs}} - \left(\frac{CL}{V_c} + \frac{Q}{V_c}\right) \cdot A_c + \frac{Q}{V_p} \cdot A_p \\ \frac{dA_p}{dt} = \frac{Q}{V_c} \cdot A_c - \frac{Q}{V_p} \cdot A_p
$$
{% endraw %}

Structural PK model describing danicopan absorption (zero-order release rate $k_0$ for duration $D_1$, then first-order absorption $K_a$), central compartment ($A_c$), and peripheral compartment ($A_p$). Parameters are apparent (divided by $F$).

**Inhibitory Emax model for AP activity**

{% raw %}
$$
AP = AP_0 - (AP_0 - I_{\max}) \cdot \frac{C}{IC_{50} + C}
$$
{% endraw %}

PK-PD model linking danicopan concentration ($C$) to alternative pathway (AP) activity. $AP_0$ is baseline AP activity, $I_{max}$ is the minimum AP activity at infinite concentration, $IC_{50}$ is the concentration producing $50\%$ of maximum inhibition.

**Covariate effect on apparent clearance**

{% raw %}
$$
CL/F = 79.5 \cdot \left(\frac{WT}{75}\right)^{0.645} \cdot e^{-0.221 \cdot SEX} \cdot e^{-0.433 \cdot RI} \cdot e^{\eta_{CL}}
$$
{% endraw %}

Typical value of apparent clearance (L/h) with covariate effects: weight ($WT$ in kg, centered at $75$ kg), sex ($SEX=1$ for female, $0$ for male), severe renal impairment ($RI=1$ if present, $0$ otherwise). Exponent $0.645$ for weight, $-0.221$ for female, $-0.433$ for severe $RI$.

**Covariate effect on central volume of distribution**

{% raw %}
$$
V_c/F = 163 \cdot \left(\frac{WT}{75}\right)^{0.876} \cdot e^{\eta_{V_c}}
$$
{% endraw %}

Apparent central volume of distribution (L) with allometric scaling by weight (exponent $0.876$).

**Food effect on relative bioavailability**

{% raw %}
$$
F = F_{\text{ref}} \cdot e^{-0.143 \cdot FASTED + 0.101 \cdot HIGHFAT}
$$
{% endraw %}

Relative bioavailability ($F$) compared to reference (standard meal). Fasted state reduces $F$ by $14.3\%$ (factor $e^{-0.143}$), high-fat meal increases $F$ by $10.1\%$ (factor $e^{0.101}$).

---

### Figures & Tables

- **Figure 1**: Prediction-corrected visual predictive check (pcVPC) for the final PK model stratified by food status (standard meal, fasted, high-fat meal).
  - *Significance*: Demonstrates that the model accurately predicts the central tendency and variability of danicopan concentrations across food conditions, supporting model adequacy.
- **Figure 2**: Forest plot showing the impact of covariates and dose on danicopan steady-state $C_{max}$, $C_{trough}$, and $AUC$.
  - *Significance*: Visualizes the magnitude of covariate effects, confirming that while statistically significant, the changes are within $0.8-1.25$ fold and not clinically meaningful.
- **Figure 3**: Simulated steady-state PK profiles and AP activity for $150$ mg and $200$ mg tid regimens under different food statuses.
  - *Significance*: Shows that both doses achieve trough concentrations above $IC_{90}$ and near-complete AP inhibition regardless of food, supporting the dosing recommendations.
- **Table 1**: Baseline demographics and characteristics of the analysis populations (healthy, PNH, ALPHA study).
  - *Significance*: Provides context for the study population and highlights differences between healthy volunteers and PNH patients.
- **Table 2**: Final population PK parameter estimates with relative standard errors and shrinkage.
  - *Significance*: Key reference for the structural model and covariate effects, showing precise estimation of $CL/F$, $V_c/F$, $K_a$, and covariate coefficients.
- **Table 3**: Simulated steady-state PK exposure and AP activity for $150$ mg and $200$ mg tid by food status.
  - *Significance*: Quantifies the predicted $C_{trough}$, $C_{max}$, $AUC$, and AP inhibition, demonstrating that both doses achieve target trough concentrations above $IC_{90}$.
- **Table 4**: Final PK-PD model parameter estimates ($AP_0$, $IC_{50}$, $I_{max}$) with RSE and shrinkage.
  - *Significance*: Provides the estimated $IC_{50}$ ($12$ ng/mL) and $IC_{90}$ ($108$ ng/mL) for AP inhibition, which are critical for dose justification.

---

### Code & Reproducibility Assessment
No code or data availability statement provided beyond a link to Alexion's clinical trial data sharing policy. The models were built with NONMEM 7.5, a proprietary software, and the data are not publicly available. Reproducibility is limited.

---

### Supplementary Materials
Supplementary materials include Table S1 (study design details), Figures S1-S3 (additional diagnostic plots for the PK model), and the model code may be available upon request.

---

### Future Directions
Future studies could explore the relationship between AP inhibition and long-term clinical outcomes, develop a disease progression model linking AP activity to hemoglobin levels and transfusion requirements, and evaluate danicopan in other complement-mediated diseases. Additionally, a more mechanistic PK-PD model incorporating factor D turnover and C3 convertase dynamics could provide deeper insights.

---

### Expert Commentary
This work is a solid example of model-informed drug development supporting regulatory approval. The use of a zero-order release followed by first-order absorption is appropriate for danicopan's formulation. The finding that food has minimal impact on bioavailability is clinically important and was accepted by regulators. However, the PD model's simplicity (direct $E_{max}$) may not capture the full dynamics of the alternative pathway; a more mechanistic model might reveal hysteresis or tolerance. The covariate analysis is thorough, but the small number of patients with severe renal impairment warrants caution. Overall, this analysis provides a strong scientific basis for the dosing regimen and highlights the value of popPK-PD in rare disease drug development.

---

### Bottom Line
For practicing pharmacometricians, this analysis demonstrates a robust popPK-PD approach supporting regulatory dosing. The two-compartment model with zero-order release and first-order absorption adequately describes danicopan PK, and the inhibitory $E_{max}$ model effectively links exposure to AP inhibition. The key takeaway is that the approved $150$ mg and $200$ mg tid regimens achieve near-complete AP inhibition regardless of food, and that covariate effects, while statistically significant, are not clinically meaningful, except possibly in severe renal impairment where exposure increases.

---

---

## 📊 Figures

![Final population PK model for (A) a standard meal, (B) fasted state, and (C) a high-fat meal. Orange dashed lines represent the 95th, 50th, and 5th percentiles o]({{ site.baseurl }}/assets/digests/2026-05-28-population-pkpd-modeling-of-danicopan-add-on-therapy-in-participants-with/figures/fig_01.png)

![Impact of covariates and dose on danicopan steady state; predicted median for (A) Cmax,ss, (B) Ctrough,ss, and (C) AUC24h,ss(5–95 percentile)a.aThe solid vertica]({{ site.baseurl }}/assets/digests/2026-05-28-population-pkpd-modeling-of-danicopan-add-on-therapy-in-participants-with/figures/fig_02.png)

![Simulated steady-state (A) PK and (B) AP for danicopan 150 mg and 200 mg regimens by food status. In panel A, black lines represent median values and gray region]({{ site.baseurl }}/assets/digests/2026-05-28-population-pkpd-modeling-of-danicopan-add-on-therapy-in-participants-with/figures/fig_03.png)