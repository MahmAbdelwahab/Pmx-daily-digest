---
layout: post
title: "Population Pharmacokinetics and Pharmacokinetics-Pharmacodynamics Analyses of Elafibranor to Support Dose Selection in Primary Biliary Cholangitis"
date: 2026-04-22
authors: "Qing Xi Ooi et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(5): e70247"
doi: "10.1002/psp4.70247"
paper_type: popk
tags: [popk, qsp, dose-response, covariate-analysis, immunology, regulatory, clinical-trial-design]
excerpt_text: "This paper presents comprehensive population PK and sequential PKPD analyses of elafibranor and its active metabolite GFT1007 in primary biliary cholangitis (PBC), providing model-informed justification for the approved 80 mg/day dose. Regulatory pharmacometricians, clinical pharmacologists, and hepatology drug developers should read this work as a textbook example of how exposure-response modeling and joint PD endpoint simulations can support dose selection and labeling in a rare disease setting."
pdf_path: "/assets/digests/2026-04-22-population-pharmacokinetics-and-pharmacokinetics-pharmacodynamics-analyses-of/PMx_Population_Pharmacokinetics_and_Pharmaco_20260422.pdf"
retroactively_classified: false
---

### Quick Take
This paper presents comprehensive population PK and sequential PKPD analyses of elafibranor and its active metabolite GFT1007 in primary biliary cholangitis (PBC), providing model-informed justification for the approved 80 mg/day dose. Regulatory pharmacometricians, clinical pharmacologists, and hepatology drug developers should read this work as a textbook example of how exposure-response modeling and joint PD endpoint simulations can support dose selection and labeling in a rare disease setting.

---

### Executive Summary
Using data from 17 clinical trials, the authors developed separate population PK models for elafibranor and GFT1007, followed by joint PKPD models for alkaline phosphatase (ALP) and total bilirubin (TB) in patients with PBC. The analyses demonstrate that while both analytes exhibit two-compartment kinetics, GFT1007 achieves substantially higher exposure and likely drives the pharmacodynamic response due to equipotency. Exposure-response modeling revealed saturation of ALP reduction at the 80 mg/day dose with only marginal gains at 120 mg/day, and no clinically meaningful covariate effects were identified. These findings directly supported the US and EU regulatory approval of elafibranor 80 mg/day as an efficacious second-line PBC treatment, underscoring the strategic value of model-informed drug development in optimizing dosing for rare diseases.

---

### Scientific Context & Motivation
Primary biliary cholangitis is a rare, autoimmune cholestatic liver disease where biochemical markers such as ALP and TB are central to diagnosis, prognosis, and regulatory endpoints. Although elafibranor 80 mg/day demonstrated efficacy in Phase III, a formal quantitative understanding of the PK properties of both parent and metabolite, their relative contribution to PD effects, and the robustness of the exposure-response relationship across patient subgroups was needed to solidify dose justification. This study addresses these gaps by characterizing the PopPK of elafibranor and GFT1007 across diverse populations and quantifying their combined exposure relationship with ALP and TB using mechanism-based indirect response models. A key paradigm challenge is the use of a composite exposure metric ($AUC_{\tau,ss\ \text{sum}}$) for two equipotent moieties and the integration of correlated PD endpoints into a single joint model to support regulatory decision-making.

---

## ⚡ Methodological Snapshot
Population PK models for elafibranor and GFT1007 were developed separately in NONMEM 7.5.0 using the FOCEI estimation method, based on data from 17 trials (Phase I–III) including healthy volunteers and patients with renal or hepatic impairment, MASH, and PBC. Both analytes were described by two-compartment disposition models with sequential zero- and first-order absorption and first-order elimination; inter-occasion variability was included for elafibranor absorption parameters. Allometric scaling of body weight on clearance and volume was applied a priori, and remaining covariates were explored using a stepwise covariate model building procedure with adaptive scope reduction.

For the PKPD analysis, data from one Phase II and one Phase III PBC trial were used to develop separate indirect response models for ALP and TB, which were subsequently integrated into a joint ALP-TB model. The sum of individual steady-state AUCs ($AUC_{\tau,ss\ \text{sum}}$) for elafibranor and GFT1007 served as the exposure driver. ALP dynamics were described by an inhibitory Emax model on the production rate, while TB used a linear inhibitory model. The joint model incorporated correlations between inter-individual random effects on baseline parameters. Clinical trial simulations comparing 80 mg/day, 120 mg/day, and placebo were performed in R using the mrgsolve package.

---

## 🏗️ Structural Model Breakdown
Elafibranor PK: The final model features sequential zero-order (duration $D_1$) and first-order absorption (rate constant $k_a$) with an absorption lag time ($t_{lag}$), coupled to a two-compartment disposition model with apparent central clearance ($CL/F$), central volume of distribution ($V_c/F$), inter-compartmental clearance ($Q/F$), and peripheral volume ($V_p/F$). First-order elimination governs systemic clearance. Exponential inter-individual variability (IIV) was included on absorption and disposition parameters, and inter-occasion variability (IOV) was included on $D_1$ and mean absorption time (MAT). Residual unexplained variability (RUV) was modeled as additive on the log scale, stratified by time post-dose ($\le 5$ h vs $>5$ h), study phase, and bioanalytical method, with an exponential IIV term on RUV.

GFT1007 PK: Structurally analogous to elafibranor with sequential zero/first-order absorption and two-compartment disposition, but without IOV.

ALP PKPD: An indirect response (turnover) model where the zero-order production rate ($k_{in,ALP}$) is inhibited by an Emax function of the combined $AUC_{\tau,ss\ \text{sum}}$ of elafibranor and GFT1007 ($AUC_{\tau,ss\ \text{sum},50} = 24.1$ $\mu mol \cdot h/L$; Hill coefficient fixed to 1). A placebo effect modifies $k_{in,ALP}$. Baseline ALP ($BASE_{ALP}$) is predicted by the model and influenced by baseline TB and NCI hepatic

---

### Detailed Methodological Analysis

#### Modeling Approach
Separate nonlinear mixed-effects PopPK models for elafibranor and GFT1007; separate indirect response PKPD models for ALP and TB followed by a joint ALP-TB model with correlated inter-individual variability (IIV). Software included NONMEM 7.5.0, R 3.5.3, and the mrgsolve package for simulations.

#### Data Sources
PK data from 17 trials (13 Phase I, 2 Phase II, 2 Phase III) with 892 elafibranor patients (12,205 observations) and 894 GFT1007 patients (10,592 observations). PKPD data from one Phase II and one Phase III PBC trial with 206 ALP patients (1,892 observations) and 205 TB patients (1,693 observations). Doses ranged from 5 mg to 360 mg; PKPD arms included placebo, 80 mg/day, and 120 mg/day for up to 52 weeks.

#### Estimation Methods
First-order conditional estimation with interaction (FOCEI) in NONMEM 7.5.0 for all model estimation.

#### Model Evaluation
Relative standard errors (RSE), objective function value (OFV), plausibility of parameter estimates, visual predictive checks (VPCs), and prediction-corrected VPCs (pcVPCs). The condition number for the joint model was reported as 82.76.

#### Covariate Analysis
Stepwise covariate model (SCM) building with adaptive scope reduction (ASR); forward selection $p < 0.01$, backward elimination $p < 0.001$. Continuous covariates tested with an exponential model (power model for ALT, ALP, and TB due to positive skewness). Categorical covariates were tested as fractional difference to the most common category. Clinical relevance was defined as at least a 20% reduction or 25% increase in secondary PK parameters with the 90% confidence interval not including these cutoffs.

---

### Statistical Rigor Assessment
The PK analysis is statistically robust, leveraging data from 892 patients with over 12,000 observations across 17 trials, providing ample power for covariate detection and precise estimation via FOCEI. The PKPD analysis is more constrained, with 205 patients and approximately 1,700–1,900 observations; while adequate for a rare disease indication, this limits the complexity of covariate models that can be reliably supported. Model evaluation relied on standard diagnostics including RSE, VPC/pcVPC, and condition number, but did not include bootstrap confidence intervals or external validation for the PKPD model, which represents a notable gap. The TB slope parameter was imprecisely estimated (RSE 51.3%), and the correlation between IIV on Emax and placebo effect ALP was extremely high ($-0.979$), potentially indicating parameter identifiability issues or over-parameterization. Missing data handling was not explicitly discussed. The joint model condition number of 82.76 indicates acceptable numerical stability.

---

## 📊 Key Findings
The final PopPK models characterized elafibranor and GFT1007 with similar two-compartment structures but divergent half-lives: elafibranor elimination half-life was 59.7 hours (time to steady state ~12.4 days) versus 10.7 hours for GFT1007 (~2.22 days). At 80 mg/day, GFT1007 steady-state exposure ($AUC_{\tau,ss} \approx 20.8$ $nmol/mL \cdot h$) was approximately five-fold higher than elafibranor ($\approx 4.20$ $nmol/mL \cdot h$), suggesting GFT1007 is the primary contributor to pharmacodynamic effects. Although several covariates were statistically significant predictors of PK parameters (e.g., body weight, albumin, age, sex, BMI, PBC status, formulation, food), none produced clinically meaningful changes in $AUC_{\tau,ss}$ or $C_{max,ss}$ using the predefined $\pm 20$–25% thresholds.

In the PKPD analysis, ALP was described by an indirect response model with an inhibitory Emax effect ($E_{max} = -0.731$; $AUC_{\tau,ss\ \text{sum},50} = 24.1$ $\mu mol \cdot h/L$; turnover half-life = 10.7 days), whereas TB followed an indirect response model with linear inhibition ($Slope = -0.0100$ $L/(\mu mol \cdot h)$; turnover half-life = 1240 days). Simulations from the joint ALP-TB model demonstrated that elafibranor 80 mg/day produced clear improvements in ALP and TB versus placebo. ALP response saturated at $AUC_{\tau,ss\ \text{sum}} > 30$ $\mu mol \cdot h/L$, a target achieved by approximately 60% of patients receiving 80 mg/day. At Week 52, 91% of simulated patients were predicted to achieve a $\ge 15\%$ relative ALP decrease from baseline, 53% to achieve $ALP < 1.67 \times ULN$, and 97% to achieve $TB \le ULN$. The 120 mg/day regimen offered only marginal incremental benefit (e.g., 57% achieving $ALP < 1.67 \times ULN$), supporting 80 mg/day as the optimal dose.

---

## 💡 Clinical & Regulatory Implications
The analyses support a flat 80 mg/day dose of elafibranor for PBC without the need for covariate-based dose adjustments. Because tested covariates—including body weight, BMI, age, sex, renal function (creatinine clearance), hepatic impairment (NCI score), and baseline liver enzymes—did not have clinically meaningful effects on exposure or PD response, no special population dosing is warranted. The exposure-response relationship demonstrates that most patients on 80 mg/day achieve near-maximal ALP reduction, and higher doses provide minimal additional biochemical benefit. These findings were integral to the regulatory submissions that gained elafibranor approval in the USA and EU for second-line PBC treatment.

---

### Strengths & Limitations

#### Strengths
- Large, rich PK database spanning 17 trials (Phase I–III) and diverse patient populations (healthy volunteers, renal/hepatic impairment, MASH, PBC).
- Comprehensive covariate analysis including mechanistic allometric scaling and extensive clinical covariates with predefined clinical relevance thresholds.
- Pharmacologically sound use of combined parent-metabolite AUC ($AUC_{\tau,ss\ \text{sum}}$) as the PD driver based on demonstrated equipotency.
- Joint ALP-TB PKPD model accounting for correlation in baseline inter-individual variability.
- Simulations directly addressing prespecified clinical response criteria ($ALP < 1.67 \times ULN$, $\ge 15\%$ ALP reduction, $TB \le ULN$) to anchor model predictions to regulatory endpoints.
- Clear regulatory utility, having supported US and EU approval of elafibranor 80 mg/day for PBC.

#### Limitations (Acknowledged by Authors)
- A simultaneously estimated joint PK model for elafibranor and GFT1007 was attempted but abandoned due to extremely long estimation times; simulations are correlated only through dosing regimens and common covariates, not through shared IIV or RUV.
- PD observations are sparse relative to PK turnover, limiting the ability to characterize a time-resolved PKPD relationship.
- Other PK metrics besides $AUC_{\tau,ss\ \text{sum}}$ were not evaluated as PD drivers.
- PKPD analyses on safety outcomes were not performed.
- High uncertainty in the TB slope parameter ($RSE > 50\%$).

#### Limitations (Expert Review)
- PKPD dataset is limited to ~205 patients from two PBC trials, restricting power for PD covariate analysis.
- No bootstrap or external validation reported for the PKPD model.
- The weak estimated correlation between $BASE_{ALP}$ and $BASE_{TB}$ IIV (0.148) may not justify the added structural complexity of the joint model.
- Extremely high correlation ($-0.979$) between IIV on Emax and placebo effect ALP may reflect an identifiability issue.
- The very long estimated TB turnover half-life (~3.4 years) suggests the model may be capturing slow disease progression rather than acute drug response, complicating interpretation of the linear slope parameter.

#### Generalizability
Findings are generalizable to the studied PBC population, specifically UDCA-inadequate responders or UDCA-intolerant patients with mild-to-moderate hepatic impairment (NCI criteria). Generalizability to severe hepatic impairment (Child-Pugh C) is uncertain due to limited representation. The PKPD conclusions should not be extrapolated to other indications such as MASH or PSC without additional validation.

---

### Key Equations

**Allometric Scaling of Clearance**

{% raw %}
$$
CL_i = \theta_{CL} \cdot \left(\frac{WT_i}{70}\right)^{0.75} \cdot e^{\eta_{CL,i}}
$$
{% endraw %}

Power model for body weight applied a priori to clearance and volume parameters with a reference weight of 70 kg.

**Typical Value Parameter with Multiplicative Covariates**

{% raw %}
$$
\mathrm{TVP}_i = \theta_p \prod_{m=1}^{n} \text{Cov}_{\text{Eff}_m}
$$
{% endraw %}

General multiplicative covariate model used to describe typical values of PK parameters in the presence of n covariate effects.

**ALP Indirect Response Model**

{% raw %}
$$\begin{aligned}
\frac{dALP}{dt} \\
&= k_{in,ALP} \cdot \left(1 - \frac{E_{max} \cdot AUC_{\tau,ss\ \text{sum}}}{AUC_{\tau,ss\ \text{sum},50} \\
& + AUC_{\tau,ss\ \text{sum}}}\right) - k_{out,ALP} \cdot ALP
\end{aligned}$$
{% endraw %}

Indirect response model with inhibitory Emax drug effect on the zero-order production rate of ALP, driven by the combined steady-state AUC of elafibranor and GFT1007.

**TB Indirect Response Model**

{% raw %}
$$
\frac{dTB}{dt} = k_{in,TB} \cdot \left(1 - \text{Slope} \cdot AUC_{\tau,ss\ \text{sum}}\right) - k_{out,TB} \cdot TB
$$
{% endraw %}

Indirect response model with linear inhibitory drug effect on the zero-order production rate of total bilirubin.

**ALP Turnover Half-Life**

{% raw %}
$$
HL_{ALP} = \frac{\ln(2)}{k_{out,ALP}}
$$
{% endraw %}

Relationship between the ALP turnover half-life and its first-order elimination rate constant from the effect compartment.

---

### Figures & Tables

- **Figure 1**: Schematic representation of the final PK models for elafibranor and GFT1007 (A) and the final ALP and TB PKPD models (B).
  - *Significance*: Provides a clear structural overview of the two-compartment absorption-disposition models and the indirect response PKPD models, serving as a roadmap for the modeling framework.
- **Figure 2**: Prediction-corrected visual predictive checks (pcVPCs) of elafibranor (A) and GFT1007 (B) concentrations versus time after dose up to 25 hours, stratified by 80 mg/day and 120 mg/day in PBC trials.
  - *Significance*: Demonstrates that the final PK models adequately predict the central tendency and variability of observed concentrations for both analytes across relevant doses and trials.
- **Figure 3**: Forest plots illustrating the effects of covariates on secondary PK parameters for elafibranor (A) and GFT1007 (B) in patients with PBC, conditioned on a typical reference patient.
  - *Significance*: Visually confirms that although several covariates were statistically significant, none produced clinically meaningful deviations (outside $\pm 20$–25% thresholds) in $AUC_{\tau,ss}$ or $C_{max,ss}$.
- **Figure 4**: Diagnostic plots for the final joint ALP-TB model showing agreement between observed and predicted data.
  - *Significance*: Supports the predictive performance and numerical stability of the joint PKPD model, which incorporated correlated inter-individual variability between baseline ALP and TB.
- **Figure 5**: Simulated relative ALP change from baseline, TB change from baseline, ALP normalization, and TB normalization at Week 52 versus $AUC_{\tau,ss\ \text{sum}}$ for placebo, 80 mg/day, and 120 mg/day.
  - *Significance*: Central to dose justification, this figure demonstrates clear separation from placebo, saturation of ALP response at higher exposures, and marginal incremental benefit of 120 mg/day over 80 mg/day.
- **Table 1**: Simulated secondary PK parameters at steady state ($AUC_{\tau,ss}$, $C_{max,ss}$, $T_{max,ss}$) for elafibranor and GFT1007 following 80 mg/day dosing, with and without IOV for elafibranor.
  - *Significance*: Quantifies the divergent exposure profiles of parent and metabolite, highlighting the approximately 5-fold higher $AUC_{\tau,ss}$ for GFT1007 and the modest impact of IOV on elafibranor predictions.
- **Table 2**: Parameter estimates, relative standard errors (RSE), and shrinkage (SHR) for the final joint ALP-TB PKPD model.
  - *Significance*: Provides the definitive parameter set for the joint model, including Emax, $AUC_{\tau,ss\ \text{sum},50}$, turnover half-lives, and the correlation structure between IIV terms.
- **Table S3**: Parameter estimates for the final elafibranor PK, GFT1007 PK, and separate ALP and TB PKPD models.
  - *Significance*: Offers the underlying individual model parameters that informed the final joint model, allowing comparison of structural and variability estimates before correlation structures were imposed.

---

### Code & Reproducibility Assessment
Code and analysis scripts are not publicly available. Anonymized patient-level data may be requested by qualified researchers through Ipsen's Data Sharing policy, but no model code, control streams, or simulation scripts were provided with the publication.

---

### Future Directions
Future work should pursue a simultaneous parent-metabolite PK model using more computationally efficient estimation algorithms (e.g., SAEM or Bayesian MCMC) to properly capture the correlation in IIV and RUV between elafibranor and GFT1007. Alternative PK metrics such as $C_{max,ss}$ or mechanism-based drivers (e.g., receptor occupancy) should be evaluated to confirm the appropriateness of $AUC_{\tau,ss\ \text{sum}}$ as the PD driver. Incorporating safety endpoints—particularly pruritus and liver stiffness progression—into a unified benefit-risk PKPD framework would strengthen dose justification. External validation of the joint ALP-TB model in independent PBC cohorts or in the primary sclerosing cholangitis (PSC) indication is warranted. Finally, given the exceptionally long estimated TB turnover half-life, exploring time-varying baseline or disease progression models may improve characterization of long-term TB dynamics.

---

### Expert Commentary
This paper exemplifies a regulatory-grade PopPK/PKPD analysis that successfully supported approval of a novel PPAR-α/δ agonist in a rare disease. The decision to use $AUC_{\tau,ss\ \text{sum}}$ as the exposure driver is pharmacologically sound given the demonstrated equipotency of parent and metabolite, though it masks potential differences in tissue distribution or receptor occupancy dynamics. The finding of ALP response saturation at approximately 30 $\mu mol \cdot h/L$ is the linchpin for dose justification, effectively demonstrating that 80 mg/day achieves near-maximal efficacy for most patients and obviating the need for a higher 120 mg dose. The large IIV and IOV in elafibranor absorption parameters highlights formulation and food effects as key variability sources, yet the absence of clinically meaningful covariate effects on net exposure supports pragmatic flat dosing. Methodologically, the joint ALP-TB model is elegant, though the weak baseline correlation suggests limited information gain; the near-perfect correlation ($-0.979$) between Emax and placebo effect IIV is more striking and may reflect structural identifiability constraints rather than true biology. The extremely long TB turnover half-life (~3.4 years) is a remarkable estimate that positions TB as a marker of slow disease remodeling rather than acute pharmacologic response, complicating its utility as a short-term trial endpoint. Overall, this analysis is a solid, fit-for-purpose MIDD package that sets a high bar for rare disease dose optimization.

---

### Bottom Line
For the practicing pharmacometrician, this analysis demonstrates that a well-executed sequential PopPK/PKPD workflow with joint PD endpoint modeling can provide definitive dose justification in rare diseases, even with modest PD sample sizes. The key methodological takeaway is that when parent and metabolite are equipotent, combining their exposures into a single PD driver is a powerful and regulatorily defensible strategy. Practitioners should ensure covariate analyses include rigorous clinical relevance thresholds (e.g., the 20%/25% rule used here) to avoid over-interpreting statistically significant but clinically irrelevant effects, and should anchor simulations to clinically interpretable endpoints—such as $ALP < 1.67 \times ULN$ and $TB \le ULN$—to ensure model predictions translate directly to prescriber and patient decision-making.

---

---

## 📊 Figures

![FIGURE 1: Schematic of the (A) elafibranor and GFT1007 final PK models, and (B) final ALP and TB PKPD models. For the PK models, covariate relationships are not shown. ALP]({{ site.baseurl }}/assets/digests/2026-04-22-population-pharmacokinetics-and-pharmacokinetics-pharmacodynamics-analyses-of/figures/fig_01.png)

![FIGURE 2: pcVPC of (A) elafibranor and (B) GFT1007 concentrations versus time after dose up to 25 h stratified by 80 mg/day and 120 mg/day and PBC trial using the final PK]({{ site.baseurl }}/assets/digests/2026-04-22-population-pharmacokinetics-and-pharmacokinetics-pharmacodynamics-analyses-of/figures/fig_02.png)

![FIGURE 3: Effects of covariates on the secondary (A) elafibranor and (B) GFT1007 PK parameters in patients with PBC. The forest plots are conditioned on a typical referenc]({{ site.baseurl }}/assets/digests/2026-04-22-population-pharmacokinetics-and-pharmacokinetics-pharmacodynamics-analyses-of/figures/fig_03.png)

![FIGURE 5: Relative (A) ALP change from baseline, (B) TB change from baseline, (C) ALP normalization, (D) TB normalization at Week 52 versus the AUCτ,ss sumbased on the sim]({{ site.baseurl }}/assets/digests/2026-04-22-population-pharmacokinetics-and-pharmacokinetics-pharmacodynamics-analyses-of/figures/fig_04.png)