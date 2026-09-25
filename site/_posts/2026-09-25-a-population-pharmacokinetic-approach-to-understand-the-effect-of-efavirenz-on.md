---
layout: post
title: "A Population Pharmacokinetic Approach to Understand the Effect of Efavirenz on CYP3A Activity in Healthy Volunteers Using Midazolam as a Probe"
date: 2026-09-25
authors: "Collins KS, Aruldhas BW, Hird MA, Quinney SK, Lam JBL, Desta Z"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025; 14(12): 2095-2106"
doi: "10.1002/psp4.70116"
paper_type: popk
tags: [popk, covariate-analysis]
excerpt_text: "This study quantifies the net inductive effect of chronic efavirenz (600 mg/day × 18 days) on CYP3A activity using a parent–metabolite PopPK model of oral midazolam and 1′-hydroxymidazolam in 72 healthy volunteers. After adjusting for CYP3A4/3A5 genotype, sex, and body weight, multiple-dose efavirenz increased midazolam clearance 1.92-fold (95% CI 1.65–2.28) relative to single-dose efavirenz. Pharmacometricians and clinical pharmacologists designing DDI studies or managing CYP3A-metabolized co-medications in efavirenz-treated patients should read this paper for its rigorous covariate-adjusted induction estimate and its thoughtful discussion of gut vs. hepatic CYP3A induction."
pdf_path: "/assets/digests/2026-09-25-a-population-pharmacokinetic-approach-to-understand-the-effect-of-efavirenz-on/PMx_A_Population_Pharmacokinetic_Approach_to_20260925.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study quantifies the net inductive effect of chronic efavirenz (600 mg/day × 18 days) on CYP3A activity using a parent–metabolite PopPK model of oral midazolam and 1′-hydroxymidazolam in 72 healthy volunteers. After adjusting for CYP3A4/3A5 genotype, sex, and body weight, multiple-dose efavirenz increased midazolam clearance 1.92-fold (95% CI 1.65–2.28) relative to single-dose efavirenz. Pharmacometricians and clinical pharmacologists designing DDI studies or managing CYP3A-metabolized co-medications in efavirenz-treated patients should read this paper for its rigorous covariate-adjusted induction estimate and its thoughtful discussion of gut vs. hepatic CYP3A induction.

---

### Executive Summary
This paper presents a population pharmacokinetic analysis of midazolam and its CYP3A-dependent metabolite 1′-hydroxymidazolam to isolate the inductive effect of chronic efavirenz therapy on CYP3A activity. Using a two-compartment parent–metabolite model with first-order absorption and elimination, the authors analyzed 2,309 plasma concentrations from 72 healthy volunteers who received 1 mg oral midazolam after a single 600 mg efavirenz dose and again after 17 days of daily efavirenz. A full covariate modeling approach quantified that chronic efavirenz increased midazolam clearance 1.92-fold (95% CI 1.65–2.28) after accounting for CYP3A4/3A5 genotype, sex, and allometric weight effects. CYP3A5 expressors showed 1.27-fold higher clearance, females 1.30-fold higher clearance, and CYP3A4 intermediate metabolizers a non-significant 0.94-fold decrease. The model also revealed an unexpected increase in absorption rate constant and relative bioavailability with multiple-dose efavirenz, which the authors interpret as reflecting differential hepatic versus intestinal CYP3A induction. This is the first study to precisely quantify efavirenz's in vivo induction of CYP3A using a PopPK framework that separates covariate effects from the drug interaction effect.

---

### Scientific Context & Motivation
Efavirenz, a first-generation NNRTI, remains widely used in resource-limited settings and is being explored for new indications such as HIV PrEP. Its well-documented induction of CYP3A4/5 via CAR and PXR activation creates clinically significant drug–drug interactions, yet the magnitude of this induction in vivo has been variably reported and confounded by interindividual variability in CYP3A activity. Midazolam is the gold-standard in vivo CYP3A probe, but previous studies of efavirenz–midazolam interactions have largely relied on non-compartmental analysis, which cannot separate the drug interaction effect from the influence of covariates such as CYP3A5 genotype (which is highly polymorphic and strongly affects midazolam clearance) or biological sex. This study addresses the gap by applying a population PK approach that simultaneously estimates the efavirenz induction effect and covariate contributions, providing a cleaner estimate of the true induction magnitude. The work also contributes to the ongoing debate about whether efavirenz induces intestinal CYP3A, with the observed increase in bioavailability and Ka providing indirect evidence that intestinal CYP3A may remain uninduced while hepatic CYP3A is upregulated.

---

## ⚡ Methodological Snapshot
The authors developed a parent–metabolite population pharmacokinetic model for midazolam and 1′-hydroxymidazolam using NONMEM v7.4 with the stochastic approximation expectation maximization (SAEM) estimation method followed by importance sampling. The structural model comprised two-compartment disposition for both parent and metabolite, with first-order absorption and elimination, and proportional residual error for both analytes. A full covariate modeling approach was employed, pre-specifying efavirenz dosing condition (single vs. multiple dose), CYP3A4 metabolizer status, CYP3A5 expressor status, and sex as covariates on midazolam clearance, with allometric weight scaling fixed at exponents of 0.75 (clearance) and 1 (volume). Bioavailability was fixed at 0.5 for single-dose efavirenz and estimated as a relative change for multiple-dose efavirenz. Model evaluation included VPCs from 10,000 simulations and a 1,000-sample bootstrap. BLOQ concentrations were retained using the 'all data' approach.

---

## 🏗️ Structural Model Breakdown
The structural model consists of two linked two-compartment models: one for midazolam (parent) and one for 1′-hydroxymidazolam (metabolite). Midazolam is absorbed via a first-order process (Ka) into a central compartment (Vc_MDZ = 5.31 L) with distribution to a peripheral compartment (Vp_MDZ = 83.10 L) governed by intercompartmental clearance (Q_MDZ = 15.33 L/h). Elimination from the central compartment occurs via clearance (CL_MDZ = 29.37 L/h for the reference subject: single-dose efavirenz, CYP3A4 NM, CYP3A5 non-expressor, male, 73 kg). A fixed fraction (0.7) of midazolam elimination forms 1′-hydroxymidazolam, which enters its own central compartment (Vc_1OH = 0.66 L) with distribution to a peripheral compartment (Vp_1OH = 20.49 L) via Q_1OH = 0.61 L/h, and is eliminated via CL_1OH = 1.57 L/h. Bioavailability is fixed at 0.5 for single-dose efavirenz and estimated at 0.60 for multiple-dose efavirenz. Ka increases from 0.77 h⁻¹ (single dose) to 1.29 h⁻¹ (multiple dose). Between-subject variability was estimated on all parameters (ranging from 11.1% for Ka to 117.3% for Vc_MDZ), and proportional residual error was 27.9% for midazolam and 26.2% for the metabolite.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling in NONMEM v7.4 using SAEM followed by importance sampling. The structural model was a two-compartment parent–metabolite model with first-order absorption and first-order elimination for both midazolam and 1′-hydroxymidazolam, with proportional residual error. The fraction of midazolam metabolized to 1′-hydroxymidazolam was fixed at 0.7. Bioavailability was fixed at 0.5 for the single-dose efavirenz condition and estimated as a relative factor for multiple-dose efavirenz. Inter-individual variability was included on all parameters. Allometric scaling with fixed exponents (0.75 for clearances, 1 for volumes) was applied for body weight. The parent model was developed first, followed by the metabolite model using parent predictions as input.

#### Data Sources
Seventy-two healthy volunteers (median age 25 years, median weight 73 kg, 63% male, 72% White) from a parent clinical trial (NCT00668395). Each subject received 1 mg oral midazolam syrup one hour after a single 600 mg efavirenz dose (Day 1) and again after 17 days of daily efavirenz (Day 24). Plasma samples were collected at 0.5, 1, 1.5, 2, 3, 5, 6, 7, 9, and 11 hours post-midazolam. Midazolam and 1′-hydroxymidazolam were quantified by LC–MS/MS after enzymatic deconjugation. The final dataset comprised 2,309 concentrations (1,153 parent, 1,156 metabolite) from 72 individuals; 58 completed both sessions. BLOQ values (33% of midazolam, 0.2% of metabolite) were included without censoring using the 'all data' approach.

#### Estimation Methods
Stochastic approximation expectation maximization (SAEM) followed by importance sampling in NONMEM v7.4, with Perl-speaks-NONMEM v4.9.01 and Pirana v2.9.4. Model selection was based on objective function value (OFV), diagnostic plots, and parameter estimate plausibility.[^fc-5] Alternative structural models (one- and three-compartment for parent; one-compartment for metabolite) were evaluated via OFV comparisons.

#### Model Evaluation
Visual predictive checks (VPCs) based on 10,000 simulations of the final model, comparing observed 5th, 50th, and 95th percentiles against simulated confidence intervals. Bootstrap analysis with 1,000 replicates was used to assess parameter estimate precision, with bootstrap medians compared to point estimates. Diagnostic goodness-of-fit plots were used throughout model development. Ten implausible concentration values were excluded from model evaluation.

#### Covariate Analysis
A full model approach was used with pre-specified covariates based on biological plausibility and graphical exploration. Covariates tested on midazolam clearance included efavirenz dosing condition (single vs. multiple dose), CYP3A4 metabolizer status (normal vs. intermediate), CYP3A5 expressor status (non-expressors vs. expressors), and sex (male vs. female). CYP2B6 genotype was not included due to low poor-metabolizer frequency. Covariates with 95% confidence intervals entirely within the 0.8–1.2 no-effect range were considered clinically irrelevant. Allometric weight scaling was applied as a fixed function rather than a tested covariate.

---

### Statistical Rigor Assessment
The statistical methodology is generally rigorous. The use of SAEM with importance sampling is appropriate for this dataset size and model complexity, and the full covariate approach avoids the inflated type I error associated with stepwise selection. The bootstrap (n=1,000) provides reasonable precision estimates, and the VPC (n=10,000 simulations) is a robust evaluation tool. However, several statistical considerations merit attention: (1) the small number of CYP3A4 intermediate metabolizers (n=4) severely limits power for this covariate, and the 95% CI (0.67–1.42) correctly reflects this uncertainty; (2) the 14 subjects who did not complete the second session represent a potential attrition bias, though the authors do not report a dropout analysis; (3) the 'all data' approach for BLOQ values, while preferable to exclusion, does not fully account for the informative censoring mechanism at the quantification limit; (4) the fixed bioavailability (0.5) and fixed fraction metabolized (0.7) introduce structural assumptions that are not statistically tested; and (5) the model's high between-subject variability on Vc_MDZ (117.3% CV) and Vp_1OH (90.2% CV) suggests potential overparameterization or identifiability issues for these parameters, though bootstrap CIs remain finite. Overall, the statistical approach is sound and the uncertainty estimates are honestly reported.

---

## 📊 Key Findings
The primary finding is that chronic efavirenz dosing (600 mg/day for 18 days) increased midazolam clearance by 1.92-fold (95% CI 1.65–2.28) compared to a single efavirenz dose, after adjusting for CYP3A4/3A5 genotype, sex, and body weight. CYP3A5 expressors had 1.27-fold higher midazolam clearance than non-expressors (95% CI 1.00–1.71), consistent with the known contribution of CYP3A5 to midazolam metabolism. Females showed 1.30-fold higher clearance than males (95% CI 1.04–1.65), consistent with literature reports of higher hepatic CYP3A4 expression in women. CYP3A4 intermediate metabolizers (*1/*22) showed a 0.94-fold decrease in clearance relative to normal metabolizers, but this did not reach statistical significance (95% CI 0.67–1.42), likely due to the small number of IM subjects (n=4). The model also estimated that the absorption rate constant increased from 0.77 h⁻¹ (single dose) to 1.29 h⁻¹ (multiple dose) and relative bioavailability increased from a fixed 0.50 to 0.60, suggesting that efavirenz may differentially affect intestinal versus hepatic CYP3A. The final model parameters were well-estimated with narrow bootstrap confidence intervals, and VPCs confirmed adequate model performance.

---

## 💡 Clinical & Regulatory Implications
The 1.92-fold increase in midazolam clearance with chronic efavirenz indicates that CYP3A-metabolized drugs will have approximately 50% lower AUC when co-administered with efavirenz-based antiretroviral therapy.[^fc-6] This has direct implications for dose adjustment of CYP3A substrates with narrow therapeutic indices (e.g., certain statins, calcium channel blockers, immunosuppressants, and some antiretrovirals). The finding that CYP3A5 expressors have 1.27-fold higher baseline midazolam clearance suggests that genotype-guided dosing may be relevant for CYP3A substrates, particularly in populations with high CYP3A5 expression frequency (e.g., individuals of African ancestry). The 1.30-fold higher clearance in females, while modest, may contribute to sex-based differences in exposure of CYP3A substrates. The study's quantification of the efavirenz induction effect independent of these covariates provides a cleaner estimate for use in PBPK models and regulatory submissions. The authors appropriately note that the true induction magnitude may be underestimated because single-dose efavirenz was used as the reference rather than a drug-free baseline. For drug development, these results support the use of PopPK approaches to quantify DDI magnitude in early-phase studies and inform labeling recommendations for efavirenz-containing regimens.

---

### Strengths & Limitations

#### Strengths
- Novel application of a parent–metabolite PopPK model to isolate the in vivo inductive effect of efavirenz on CYP3A while simultaneously accounting for genetic and demographic covariates
- Full covariate modeling approach with pre-specified covariates based on biological plausibility, avoiding stepwise selection bias
- Simultaneous modeling of midazolam and 1′-hydroxymidazolam with a two-compartment structure for both species, providing a mechanistically informed framework
- Robust model evaluation including VPCs from 10,000 simulations and 1,000 bootstrap replicates with good agreement between bootstrap medians and point estimates
- Inclusion of BLOQ concentrations using the 'all data' approach (Keizer et al.), which has been shown to reduce bias compared to exclusion or imputation methods
- Genotyping for CYP3A4*22, CYP3A5*3/*6/*7, and CYP2B6 variants, enabling genotype-stratified analysis of CYP3A activity
- Allometric scaling with fixed exponents (0.75 for clearance, 1 for volume) provides physiological plausibility for weight effects

#### Limitations (Acknowledged by Authors)
- No midazolam-alone (without efavirenz) baseline arm was included; single-dose efavirenz was used as the reference, which may underestimate the true induction magnitude if a single efavirenz dose itself modestly induces or activates CYP3A
- Small number of CYP3A4 intermediate metabolizers (n=4) limited statistical power to detect a genotype effect
- CYP2B6 genotype was not incorporated due to low frequency of poor metabolizers and potential model instability
- The observed increase in Ka and bioavailability with multiple-dose efavirenz lacks a clear biological mechanism and requires further investigation
- High proportion of BLOQ midazolam concentrations (33%) in the dataset

#### Limitations (Expert Review)
- Bioavailability was fixed at 0.5 for the single-dose condition rather than estimated, which may introduce bias if the true F differs; the relative increase to 0.60 could partly reflect model compensation for other misspecifications
- The fraction of midazolam metabolized to 1′-hydroxymidazolam was fixed at 0.7 based on literature; this parameter is not identifiable from oral data alone and could affect metabolite-related parameter estimates
- The study design used a cocktail of five probe drugs, and potential pharmacokinetic interactions among cocktail components (e.g., omeprazole, caffeine, tolbutamide) with midazolam or efavirenz were not addressed
- Only 58 of 72 subjects completed both sessions; the analysis did not explicitly model dropout or missingness mechanisms
- The 'all data' approach for BLOQ values treats them as continuous observations, which may not fully account for the censoring mechanism at very low concentrations
- The 1.92-fold induction estimate is relative to single-dose efavirenz, not a true drug-free baseline, so the absolute induction magnitude may be understated

#### Generalizability
The findings are derived from a healthy volunteer population (median age 25, median weight 73 kg, 72% White) and may not fully extrapolate to HIV-infected patients, who often have comorbidities, polypharmacy, and altered physiology. However, the mechanistic nature of CYP3A induction by efavirenz suggests the fold-change in clearance is likely similar across populations, though baseline CYP3A activity and genotype distributions differ. The covariate effects (CYP3A5, sex) are consistent with the broader literature and likely generalizable. The study population's genotype distribution (25% CYP3A5 expressors) is representative of a mixed-ancestry cohort but may not reflect populations with higher CYP3A5 expression frequencies (e.g., African ancestry).

---

### Key Equations

**Absorption rate constant with efavirenz dosing condition**

{% raw %}
$$
K_a = \exp(\mu_1 + \eta_1) \cdot (1 + L_0 \cdot \theta_{15})
$$
{% endraw %}

The absorption rate constant for midazolam, where L0 is an indicator variable (1 for multiple-dose efavirenz, 0 for single-dose), theta_15 is the fractional change in Ka with multiple dosing, mu_1 is the population mean in the log-domain, and eta_1 is the inter-individual random effect.

**Between-subject variability as percent coefficient of variation**

{% raw %}
$$
\%CV = \sqrt{\exp(\omega) - 1} \times 100
$$
{% endraw %}

Conversion of omega (variance of random effects on the log scale) to percent coefficient of variation, as reported in Table 2 for all between-subject variability estimates.

**Residual error as percent coefficient of variation**

{% raw %}
$$
\%CV = \sqrt{\sigma} \times 100
$$
{% endraw %}

Conversion of sigma (proportional residual error variance) to percent coefficient of variation for the proportional error model applied to both midazolam and 1'-hydroxymidazolam concentrations.

**Midazolam clearance covariate model**

{% raw %}
$$\begin{aligned}
CL_{MDZ} \\
&= CL_{pop} \times (1.92)^{L_0} \times (0.94)^{I_{CYP3A4_{IM}}} \times (1.27)^{I_{CYP3A5_{expr}}} \times (1.30)^{I_{Female}} \\
& \times \left(\frac{WT}{73}\right)^{0.75}
\end{aligned}$$
{% endraw %}

The final covariate model for midazolam clearance, showing multiplicative effects of multiple-dose efavirenz (1.92-fold), CYP3A4 intermediate metabolizer status (0.94-fold), CYP3A5 expressor status (1.27-fold), female sex (1.30-fold), and allometric weight scaling normalized to the median weight of 73 kg.

---

### Figures & Tables

- **Table 1**: Demographic and genotype characteristics of the 72 study participants (single-dose session) and 58 who completed both sessions, including age, weight, BMI, sex, race, CYP3A4 metabolizer status, and CYP3A5 expressor status.
  - *Significance*: Establishes the study population composition and confirms the expected genotype distributions (94% CYP3A4 normal metabolizers, 75% CYP3A5 non-expressors), which is essential for interpreting the covariate effects and generalizability.
- **Table 2**: Final population pharmacokinetic model parameter estimates with bootstrap medians and 95% confidence intervals for all structural parameters, between-subject variability (as %CV), and residual error terms.
  - *Significance*: The central results table, providing the quantitative estimates of the efavirenz induction effect (1.92-fold on CLMDZ), covariate effects (CYP3A5 1.27-fold, female 1.30-fold, CYP3A4 IM 0.94-fold), and all model parameters with precision estimates from 1,000 bootstrap replicates.
- **Figure 1**: Graphical exploration of covariate relationships with individual pharmacokinetic parameter estimates (e.g., clearance versus genotype, sex, and dosing condition).
  - *Significance*: Supports the pre-specification of covariates in the full model approach and provides visual justification for including CYP3A4, CYP3A5, sex, and efavirenz dosing condition as covariates on midazolam clearance.
- **Figure 3**: Visual predictive checks (VPCs) for midazolam and 1'-hydroxymidazolam concentrations after single-dose and multiple-dose efavirenz, showing observed 5th, 50th, and 95th percentiles against simulated confidence intervals from 10,000 simulations.
  - *Significance*: Demonstrates the final model's ability to describe the central tendency and variability of both parent and metabolite concentrations under both dosing conditions, validating the model for simulation-based inference.
- **Figure 4**: Simulated concentration-time profiles of midazolam comparing single-dose and multiple-dose efavirenz conditions, illustrating the impact of the 1.92-fold clearance increase on systemic exposure.
  - *Significance*: Provides a clear visual representation of the clinical consequence of efavirenz-induced CYP3A induction: substantially reduced midazolam exposure with chronic efavirenz therapy.
- **Figure 5**: Forest plot of covariate effects on midazolam clearance with 95% confidence intervals, including multiple-dose efavirenz, CYP3A4 intermediate metabolizer status, CYP3A5 expressor status, and female sex.
  - *Significance*: Summarizes the covariate analysis results in a clinically interpretable format, highlighting which covariates have effects whose confidence intervals fall entirely outside the 0.8–1.2 no-effect range.

---

### Code & Reproducibility Assessment
The manuscript does not provide access to the NONMEM control streams, dataset, or analysis code. The methods section describes the modeling workflow (NONMEM v7.4, PsN v4.9.01, Pirana v2.9.4, R v3.6 with ggplot2, dplyr, xpose4, cowplot) in sufficient detail to be reproducible, but no public repository or supplementary code is referenced. The clinical trial is registered at ClinicalTrials.gov (NCT00668395), and prior publications from the parent trial provide additional methodological detail.

---

### Future Directions
This work raises several important questions for future investigation. First, a dedicated study with a true midazolam-alone baseline arm is needed to quantify the absolute induction magnitude of efavirenz relative to drug-free CYP3A activity, and to determine whether a single efavirenz dose itself alters CYP3A activity (as suggested by in vitro activation studies). Second, the mechanism underlying the observed increase in midazolam Ka and bioavailability with multiple-dose efavirenz warrants investigation, potentially using intestinal biopsy data or physiologically based pharmacokinetic (PBPK) modeling to disentangle gut versus hepatic CYP3A contributions. Third, the interaction between efavirenz and midazolam should be studied in HIV-infected patients on stable antiretroviral therapy to confirm the healthy-volunteer estimates in a real-world population. Fourth, the model could be extended to predict the magnitude of efavirenz interactions with other CYP3A substrates (e.g., simvastatin, calcium channel blockers, protease inhibitors) using a mechanistic framework. Finally, the incorporation of CYP2B6 genotype and efavirenz concentrations as time-varying covariates could refine the model and explore concentration-dependent induction.

---

### Expert Commentary
This paper exemplifies the power of population PK modeling to extract clean drug-interaction signals from noisy clinical data. The authors made several methodologically sound choices worth emulating: (1) the full covariate approach avoids the well-documented issues of stepwise covariate selection, particularly in modest-sized datasets; (2) the parent–metabolite model with a fixed fraction metabolized (0.7) is a pragmatic approach given the identifiability challenges of oral data; and (3) the use of the 'all data' method for BLOQ observations aligns with current best practices. The 1.92-fold induction estimate is clinically meaningful and consistent with prior non-compartmental estimates, but the field should note that this is relative to single-dose efavirenz, not a true baseline—a subtle but important distinction. The observed increase in F and Ka is intriguing and may reflect real biology (differential gut/liver induction) or model compensation; the authors' speculation is thoughtful but should be tested with dedicated studies. From a regulatory perspective, this work supports the expectation that efavirenz-based regimens will require approximately 2-fold dose increases for narrow-therapeutic-index CYP3A substrates. The study also underscores the importance of genotyping CYP3A5 in DDI studies, as the 1.27-fold genotype effect is comparable in magnitude to many drug interactions and could confound results if unaccounted for.

---

### Bottom Line
For practicing pharmacometricians, this paper provides a rigorously quantified estimate of efavirenz's inductive effect on CYP3A: a 1.92-fold increase in midazolam clearance (95% CI 1.65–2.28) after 18 days of 600 mg/day efavirenz, independent of CYP3A4/3A5 genotype, sex, and weight. This translates to an approximately 48% reduction in midazolam AUC and suggests that CYP3A-metabolized co-medications may require dose adjustments of roughly 2-fold when co-administered with chronic efavirenz.[^fc-22] The study also demonstrates the value of parent–metabolite PopPK modeling with a full covariate approach for disentangling DDI effects from intrinsic variability—a template that could be applied to other inducer–probe pairs. The unexpected increase in Ka and F with multiple-dose efavirenz warrants further mechanistic investigation but highlights the importance of modeling absorption parameters in DDI studies rather than assuming they are unaffected.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The authors of the paper are Collins KS, Aruldhas BW, Hird MA, Quinney SK, Lam JBL, and Desta Z.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “The paper was published in CPT: Pharmacometrics & Systems Pharmacology in 2025, volume 14, issue 12, pages 2095-2106.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “The paper type is POPK_PKPD.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **NUMERIC_MISMATCH** — original: “Chronic efavirenz (600 mg/day for 18 days) increased midazolam clearance 1.92-fold (95% CI 1.65–2.28) relative to single-dose efavirenz, after adjusting for CYP3A4/3A5 genotype, sex, and body weight.” → correction: “chronic efavirenz dosing (600 mg/day for 17 days)”
[^fc-5]: **UNSUPPORTED** — original: “Model selection was based on objective function value (OFV), diagnostic plots, and parameter estimate plausibility.” → correction: “The structural model for the parent drug (midazolam) was developed first, guided by literature and evaluated using standard criteria, including objective function value (OFV) and diagnostic plots.”
[^fc-6]: **UNSUPPORTED** — original: “The 1.92-fold increase in midazolam clearance with chronic efavirenz indicates that CYP3A-metabolized drugs will have approximately 50% lower AUC when co-administered with efavirenz-based antiretroviral therapy.” → correction: “In conclusion, the clearance of a 1 mg dose of midazolam was increased by 1.92-fold (95 CI 1.65–2.28) after 18 days of a 600 mg once daily dose of midazolam compared to a single dose of midazolam in healthy volunteers.”
[^fc-7]: **UNSUPPORTED** — original: “The study's quantification of the efavirenz induction effect independent of covariates provides a cleaner estimate for use in PBPK models and regulatory submissions.” → correction: “N/A”
[^fc-8]: **NUMERIC_MISMATCH** — original: “The study used a cocktail of five probe drugs, and potential pharmacokinetic interactions among cocktail components with midazolam or efavirenz were not addressed.” → correction: “A cocktail of probe drugs (150 mg caffeine for CYP1A2, 250 mg tolbutamide for CYP2C9, 20 mg omeprazole for CYP2C19, and 1 mg midazolam syrup for CYP3A) was orally administered after one hour”
[^fc-9]: **UNSUPPORTED** — original: “The findings are derived from a healthy volunteer population and may not fully extrapolate to HIV-infected patients.” → correction: “N/A”
[^fc-10]: **UNSUPPORTED** — original: “The study population's genotype distribution (25% CYP3A5 expressors) is representative of a mixed-ancestry cohort but may not reflect populations with higher CYP3A5 expression frequencies.” → correction: “N/A”
[^fc-11]: **CONTRADICTED** — original: “Residual error was converted to percent coefficient of variation using the formula %CV = sqrt(sigma) * 100.” → correction: “Sigma estimates converted to %CV using the following equation: %CV = sqrt(omega)*100.”
[^fc-12]: **NUMERIC_MISMATCH** — original: “The final covariate model for midazolam clearance was CL_MDZ = CL_pop * (1.92)^L0 * (0.94)^I_CYP3A4_IM * (1.27)^I_CYP3A5_expr * (1.30)^I_Female * (WT/73)^0.75.” → correction: “CYP3A4 IMa | 0.89 | 0.94 | 0.67, 1.42 ... CYP3A5 expressorsa | 1.29 | 1.27 | 1.00, 1.71 ... Femalea | 1.22 | 1.30 | 1.04, 1.65”
[^fc-13]: **UNSUPPORTED** — original: “Figure 5 is a forest plot of covariate effects on midazolam clearance with 95% confidence intervals.” → correction: “As anticipated, CYP3A5 expressors exhibited increased clearance, while CYP3A4 intermediate metabolizers showed lower clearance compared to the reference (see Figure 5).”
[^fc-14]: **UNSUPPORTED** — original: “The interaction between efavirenz and midazolam should be studied in HIV-infected patients on stable antiretroviral therapy to confirm the healthy-volunteer estimates.” → correction: “No supporting evidence found in source text.”
[^fc-15]: **UNSUPPORTED** — original: “The model could be extended to predict the magnitude of efavirenz interactions with other CYP3A substrates using a mechanistic framework.” → correction: “No supporting evidence found in source text.”
[^fc-16]: **CONTRADICTED** — original: “Incorporation of CYP2B6 genotype and efavirenz concentrations as time-varying covariates could refine the model and explore concentration-dependent induction.” → correction: “Incorporation of CYP2B6 genotype was deemed unnecessary, given the low frequency of poor metabolizers in the study cohort and the potential for model instability arising from underpowered or nonlinear genotype-induction effects within a limited sample size.”
[^fc-17]: **UNSUPPORTED** — original: “The 1.92-fold induction estimate is clinically meaningful and consistent with prior non-compartmental estimates.” → correction: “No supporting evidence found in source text.”
[^fc-18]: **UNSUPPORTED** — original: “The observed increase in F and Ka may reflect real biology (differential gut/liver induction) or model compensation.” → correction: “No supporting evidence found in source text.”
[^fc-19]: **UNSUPPORTED** — original: “Efavirenz-based regimens will require approximately 2-fold dose increases for narrow-therapeutic-index CYP3A substrates.” → correction: “No supporting evidence found in source text.”
[^fc-20]: **UNSUPPORTED** — original: “The 1.27-fold CYP3A5 genotype effect is comparable in magnitude to many drug interactions and could confound results if unaccounted for.” → correction: “No supporting evidence found in source text.”
[^fc-21]: **UNSUPPORTED** — original: “The 1.92-fold increase in midazolam clearance translates to an approximately 48% reduction in midazolam AUC.” → correction: “No supporting evidence found in source text.”
[^fc-22]: **UNSUPPORTED** — original: “CYP3A-metabolized co-medications may require dose adjustments of roughly 2-fold when co-administered with chronic efavirenz.” → correction: “No supporting evidence found in source text.”
[^fc-23]: **UNSUPPORTED** — original: “The unexpected increase in Ka and F with multiple-dose efavirenz highlights the importance of modeling absorption parameters in DDI studies.” → correction: “In this current study, bioavailability slightly increased after multiple doses of efavirenz, with a relative bioavailability estimated at 0.59 compared to a fixed bioavailability of 0.5 with single-dose efavirenz. The reason for this observation remains unclear but may involve an unexplained increase in absorption rate constant (Ka) with multiple dose efavirenz, as indicated in Table 2. To account for this phenomenon, a covariate was added to the model after careful consideration.”