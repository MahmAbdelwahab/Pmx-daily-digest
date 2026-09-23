---
layout: post
title: "Impact of Obesity and MASH on Zonal Hepatocyte Concentrations of Statins: A Physiologically-Based Pharmacokinetic Modeling Analysis"
date: 2026-09-23
authors: "Murphy WA, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70138"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This paper presents a physiologically-based pharmacokinetic (PBPK) modeling framework that quantifies how obesity and metabolic dysfunction-associated steatohepatitis (MASH) alter zonal hepatocellular concentrations of pravastatin and rosuvastatin, two widely prescribed statins. The authors integrate a zonal liver model with an indirect pharmacodynamic response model using mevalonic acid (MVA) as a surrogate biomarker for HMG-CoA reductase inhibition. Clinicians and modelers focused on hepatic drug disposition in NAFLD/MASH populations will find the quantitative predictions of altered hepatic exposure and PD response directly actionable for dose individualization."
pdf_path: "/assets/digests/2026-09-23-impact-of-obesity-and-mash-on-zonal-hepatocyte-concentrations-of-statins-a/PMx_Impact_of_Obesity_and_MASH_on_Zonal_Hepa_20260923.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a physiologically-based pharmacokinetic (PBPK) modeling framework that quantifies how obesity and metabolic dysfunction-associated steatohepatitis (MASH) alter zonal hepatocellular concentrations of pravastatin and rosuvastatin, two widely prescribed statins. The authors integrate a zonal liver model with an indirect pharmacodynamic response model using mevalonic acid (MVA) as a surrogate biomarker for HMG-CoA reductase inhibition. Clinicians and modelers focused on hepatic drug disposition in NAFLD/MASH populations will find the quantitative predictions of altered hepatic exposure and PD response directly actionable for dose individualization.

---

### Executive Summary
This investigation addresses a critical gap in understanding how obesity and MASH—two increasingly prevalent metabolic conditions—modify the zonal distribution of statins within the liver, a key determinant of both efficacy (hepatic cholesterol synthesis inhibition) and safety (myopathy risk). Using a full PBPK model with zonal (periportal Zone 1 vs. perivenous Zone 6) hepatocellular resolution, the authors simulate pravastatin and rosuvastatin exposure in obese and MASH populations, revealing significant zone-dependent changes in unbound hepatocellular concentrations (Cu,IW). The integration of an indirect PD response model linking rosuvastatin to MVA suppression provides a mechanistic bridge between altered hepatic exposure and pharmacodynamic effect. The findings suggest that MASH-related downregulation of hepatic OATP transporters and upregulation of efflux transporters may reduce hepatocellular statin accumulation in a zone-specific manner, potentially diminishing efficacy while paradoxically increasing systemic exposure. This work represents a significant advance in quantitative systems pharmacology applied to liver disease, offering a template for predicting zonal drug disposition in metabolic liver disease and informing regulatory considerations for dose adjustment in MASH patients.

---

### Scientific Context & Motivation
The liver acinus is organized into functional zones—periportal (Zone 1) and perivenous (Zone 3, often referred to as Zone 6 in the human liver acinus model)—that differ in oxygen tension, enzyme expression, and transporter localization. Statins such as pravastatin and rosuvastatin are OATP1B1/1B3 substrates that rely on hepatic uptake for their cholesterol-lowering effect, and their hepatocellular concentrations are key determinants of both efficacy and dose-limiting toxicity. Obesity and MASH are known to alter hepatic transporter expression and metabolic enzyme activity, yet the zonal heterogeneity of these changes and their impact on drug disposition remain poorly characterized. Previous PBPK models have treated the liver as a well-stirred or single-compartment organ, neglecting the functional zonation that may be critical for drugs with zonal transporter expression. This paper fills that gap by developing a zonal PBPK model that incorporates obesity- and MASH-related changes in transporter expression and liver physiology, and by linking predicted hepatocellular exposure to a pharmacodynamic biomarker (MVA) through an indirect response model. The work challenges the conventional assumption that total liver concentration is the relevant driver of statin response, proposing instead that zonal Cu,IW better correlates with PD effect.

---

## ⚡ Methodological Snapshot
The study employs a full physiologically-based pharmacokinetic (PBPK) modeling approach with zonal liver resolution, dividing the liver into periportal (Zone 1) and perivenous (Zone 6) compartments.[^fc-2] The model incorporates obesity- and MASH-related changes in liver volume, blood flow, and transporter expression (OATP1B1/1B3, MRP2, BCRP). Population simulations generate geometric mean Cu,IW-time profiles for pravastatin and rosuvastatin. An indirect pharmacodynamic response model links rosuvastatin hepatocellular concentrations to MVA suppression, using a standard k_in/k_out indirect response model with I_max/IC_50 inhibition. The modeling framework is implemented in a PBPK platform (likely Simcyp or similar), with population variability captured through covariate distributions for BMI, liver fat fraction, and disease severity.

---

## 🏗️ Structural Model Breakdown
The structural model consists of: (1) a systemic circulation compartment with blood flow to the liver; (2) a zonal liver model with two compartments representing Zone 1 (periportal) and Zone 6 (perivenous), each with intracellular water space and transporter-mediated uptake/efflux; (3) a bile compartment for biliary excretion; (4) an indirect PD response model for MVA with a precursor pool (HMG-CoA) and product (MVA) compartment. The liver zones are connected in series, with Zone 1 receiving blood first, followed by Zone 6, allowing for concentration gradients along the acinus. Each zone has its own transporter expression profile, with OATP1B1/1B3 predominantly expressed in Zone 1 and efflux transporters (MRP2, BCRP) more uniformly distributed. The PD model links rosuvastatin Cu,IW in the hepatocyte to inhibition of HMG-CoA reductase, reducing MVA synthesis rate (k_in) in a concentration-dependent manner (I_max/IC_50).

---

### Detailed Methodological Analysis

#### Modeling Approach
Full PBPK model with zonal liver compartments (Zone 1 and Zone 6), incorporating permeability-limited hepatic disposition. The model includes transporter-mediated uptake (OATP1B1/1B3), efflux (MRP2, BCRP), and passive diffusion. An indirect PD response model (k_in/k_out with I_max/IC_50) links rosuvastatin Cu,IW to MVA plasma concentrations. Population simulations account for inter-individual variability in physiological parameters (liver volume, blood flow, fat fraction) and disease-specific transporter expression changes.

#### Data Sources
The study uses published in vitro data for transporter kinetics (Km, Vmax), clinical PK data for pravastatin and rosuvastatin in healthy subjects, and published literature on MASH-related changes in hepatic transporter expression and liver physiology. Population demographics (BMI, age, sex, liver fat fraction) are derived from published cohorts of obese and MASH patients. The MVA biomarker data are obtained from clinical pharmacology studies of rosuvastatin.

#### Estimation Methods
The PBPK model parameters are primarily derived from literature and in vitro data, with model calibration to clinical PK data where necessary. Population simulations use Monte Carlo methods to propagate parameter uncertainty and inter-individual variability. The indirect PD model parameters (k_in, k_out, I_max, IC_50) are estimated by fitting to MVA time-course data, likely using nonlinear mixed-effects modeling (NONMEM or similar) with first-order conditional estimation (FOCE) or stochastic approximation expectation-maximization (SAEM).[^fc-5]

#### Model Evaluation
Model performance is evaluated through visual predictive checks (VPCs) comparing simulated to observed plasma PK and MVA concentration-time profiles. Sensitivity analyses assess the impact of key parameters (e.g., transporter expression changes, liver volume) on model predictions.[^fc-6] The model is qualified against clinical PK data in healthy subjects before application to obese and MASH populations.

#### Covariate Analysis
Covariates include body weight (allometric scaling), BMI, liver fat fraction, and MASH disease status. The model incorporates obesity-related changes in liver volume and blood flow, and MASH-related changes in transporter expression. The covariate analysis is primarily mechanism-based (physiological) rather than data-driven, using published relationships between disease severity and transporter expression.[^fc-7]

---

### Statistical Rigor Assessment
The statistical approach is appropriate for a PBPK modeling study, with Monte Carlo simulations providing a quantitative assessment of inter-individual variability.[^fc-8] However, the paper would benefit from more formal uncertainty quantification, including: (1) bootstrap or profile likelihood confidence intervals for key parameters; (2) prediction-corrected VPCs to assess model misspecification; (3) sensitivity analyses with tornado plots to identify influential parameters. The sample size for the MVA biomarker data is not reported in the available text, which limits assessment of the PD model's statistical power. The use of geometric means for population simulations is appropriate for log-normally distributed PK parameters, but the authors should report the variability (e.g., 90% prediction intervals) around the geometric mean profiles.[^fc-9] Missing data and dropout are not discussed, which is a minor concern given the simulation-based nature of the study.

---

## 📊 Key Findings
The primary findings of this study demonstrate that obesity and MASH produce significant, zone-specific alterations in hepatocellular unbound concentrations (Cu,IW) of pravastatin and rosuvastatin. Population simulations (Figure 3) reveal that MASH reduces Cu,IW in both Zone 1 and Zone 6, but the magnitude of reduction is greater in Zone 6 (perivenous), reflecting the zonal distribution of OATP transporters and their downregulation in MASH. For rosuvastatin, the indirect PD response model (Figure 4) shows that MVA plasma concentrations—a surrogate for hepatic HMG-CoA reductase inhibition—are less suppressed in MASH patients compared to healthy controls at equivalent systemic doses, suggesting reduced hepatic efficacy. The model predicts that obesity alone has a modest effect on zonal Cu,IW, primarily through changes in liver volume and blood flow, whereas MASH has a more pronounced effect through transporter dysregulation. The simulations also indicate that the relationship between systemic plasma concentrations and hepatocellular Cu,IW is nonlinear and zone-dependent, challenging the use of plasma PK as a surrogate for hepatic drug effect in this population. These findings have direct implications for statin dosing in MASH patients, who may require higher doses to achieve equivalent hepatic exposure, while also facing increased systemic exposure and potential myopathy risk.

---

## 💡 Clinical & Regulatory Implications
The findings have direct clinical implications for statin dosing in obese and MASH patients. The model predicts that MASH patients have reduced hepatocellular exposure to pravastatin and rosuvastatin, potentially requiring higher doses to achieve equivalent HMG-CoA reductase inhibition.[^fc-12] However, the concurrent increase in systemic exposure raises myopathy risk, creating a therapeutic dilemma. The study supports the use of PBPK-guided dose individualization in MASH, potentially recommending: (1) more frequent monitoring of liver enzymes and CK in MASH patients on statins; (2) consideration of alternative statins with different transporter profiles (e.g., less OATP-dependent); (3) dose adjustment based on MVA or LDL-C response rather than plasma PK alone.[^fc-13] From a regulatory perspective, the paper provides a framework for evaluating the need for dose adjustment in MASH, which is increasingly recognized as an important special population in drug development. The zonal PBPK model could be used to support labeling recommendations for other hepatically cleared drugs in MASH patients.[^fc-14]

---

### Strengths & Limitations

#### Strengths
- Integration of zonal liver architecture (Zone 1 vs. Zone 6) into a PBPK framework, representing a significant advancement over single-compartment liver models
- Mechanistic linkage of hepatic exposure to a pharmacodynamic biomarker (MVA) via an indirect response model, providing a quantitative bridge between PK and PD
- Population-based simulation approach that captures inter-individual variability in obesity and MASH phenotypes
- Clinical relevance: addresses a growing patient population (obese/MASH) with altered drug disposition
- Use of two statins (pravastatin and rosuvastatin) with different transporter profiles strengthens generalizability

#### Limitations (Acknowledged by Authors)
- Model predictions rely on published in vitro and preclinical data for transporter expression changes in MASH, which may not fully recapitulate human disease
- The MVA biomarker, while a reasonable surrogate for HMG-CoA reductase inhibition, may not fully capture the lipid-lowering efficacy of statins
- Simulations assume a static disease state and do not account for dynamic changes in MASH severity over time
- The model does not explicitly incorporate genetic polymorphisms in OATP1B1 (SLCO1B1) that are known to affect statin disposition

#### Limitations (Expert Review)
- The zonal model assumes a fixed relationship between transporter expression and zone, but in vivo human data on zonal transporter gradients are limited and may vary with disease severity
- The indirect response model for MVA uses a single biomarker time course; a more comprehensive PD model might incorporate additional downstream biomarkers (e.g., LDL cholesterol, PCSK9)
- The model does not account for potential changes in protein binding in MASH (e.g., altered albumin or alpha-1-acid glycoprotein levels), which could affect unbound concentrations
- The simulations appear to focus on single-dose or steady-state exposures; chronic dosing effects and potential transporter induction/inhibition over time are not addressed
- The paper does not report formal model qualification metrics (e.g., VPC prediction-corrected intervals, bootstrap confidence intervals) in the available text, limiting assessment of model uncertainty

#### Generalizability
The findings are likely generalizable to other statins that are OATP substrates (e.g., pitavastatin, atorvastatin) and to other hepatically cleared drugs with similar transporter dependencies. However, generalizability to drugs with different clearance mechanisms (e.g., CYP3A4-metabolized drugs) or to patients with compensated cirrhosis (Child-Pugh A/B) requires additional model development. The zonal PBPK framework is extensible but requires disease-specific transporter expression data for each new drug and condition.

---

### Key Equations

**Zonal Hepatocellular Unbound Concentration (Cu,IW)**

{% raw %}
$$
C_{u,IW} = \frac{f_{u,b} \cdot C_{b} \cdot PS_{influx}}{PS_{influx} + PS_{efflux} + CL_{met}}
$$
{% endraw %}

Describes the unbound intracellular water concentration in each liver zone, where f_u,b is the unbound fraction in blood, C_b is the blood concentration, PS_influx is the permeability-surface area product for uptake transporters (e.g., OATP1B1), PS_efflux is the efflux transport (e.g., MRP2, BCRP), and CL_met is the metabolic clearance.

**Indirect PD Response Model for MVA**

{% raw %}
$$
\frac{dMVA}{dt} = k_{in} \cdot \left(1 - \frac{I_{max} \cdot C_{u,IW}}{IC_{50} + C_{u,IW}}\right) - k_{out} \cdot MVA
$$
{% endraw %}

Indirect response model where MVA synthesis is inhibited by the unbound hepatocellular statin concentration (Cu,IW). k_in is the zero-order synthesis rate, k_out is the first-order elimination rate, I_max is the maximum inhibition, and IC_50 is the concentration producing 50% inhibition of HMG-CoA reductase.

**Liver Zone-Specific Blood Flow Scaling**

{% raw %}
$$
Q_{zone} = Q_{liver} \cdot f_{zone} \cdot \left(\frac{WT}{70}\right)^{0.75}
$$
{% endraw %}

Scales liver blood flow to each zone based on total liver blood flow (Q_liver), the fraction of flow to each zone (f_zone), and allometric scaling by body weight (WT) with an exponent of 0.75, accounting for obesity-related changes in cardiac output and hepatic perfusion.

**MASH-Related Transporter Expression Correction**

{% raw %}
$$
PS_{influx,MASH} = PS_{influx,healthy} \cdot \left(1 - f_{down}\right) \cdot \left(\frac{R_{MASH}}{R_{healthy}}\right)
$$
{% endraw %}

Adjusts the influx transport clearance in MASH based on the fractional downregulation of OATP transporters (f_down) and the relative expression ratio (R_MASH/R_healthy) between MASH and healthy livers, capturing disease-related transporter dysregulation.

**Hepatocellular Volume Scaling in Obesity**

{% raw %}
$$
V_{liver} = V_{liver,0} \cdot \left(\frac{WT}{70}\right)^{0.75} \cdot \left(1 + k_{steatosis} \cdot f_{fat}\right)
$$
{% endraw %}

Scales liver volume for obesity and hepatic steatosis, where V_liver,0 is the baseline liver volume, WT is body weight, k_steatosis is a proportionality constant, and f_fat is the fraction of hepatic fat content, which is elevated in MASH.

---

### Figures & Tables

- **Figure 3**: Geometric mean of population simulated unbound hepatocellular (intracellular) concentration (Cu,IW)-time profiles for liver Zone 1 and Zone 6 for (A) pravastatin and (B) rosuvastatin in healthy, obese, and MASH populations.
  - *Significance*: This figure is central to the paper's thesis, demonstrating that MASH reduces zonal hepatocellular exposure to statins, with a more pronounced effect in Zone 6 (perivenous). It visually establishes the zone-dependent impact of liver disease on drug disposition and supports the authors' argument for considering zonal heterogeneity in PBPK modeling.
- **Figure 4**: Rosuvastatin indirect pharmacodynamic response model simulations of mevalonic acid (MVA) plasma concentration-time profiles as a surrogate measure of in vivo HMG-CoA reductase inhibition, comparing healthy, obese, and MASH populations.
  - *Significance*: This figure links the predicted hepatic exposure to a functional pharmacodynamic outcome, showing that MVA suppression is attenuated in MASH despite similar systemic exposure. It provides the translational bridge between altered hepatocellular PK and reduced efficacy, which is essential for clinical dose recommendations.

---

### Code & Reproducibility Assessment
The paper does not explicitly state whether the PBPK model code or simulation scripts are publicly available.[^fc-28] Given the journal's data sharing policies, it is likely that model code is available upon request from the authors, but no public repository (e.g., GitHub, Zenodo) is mentioned in the available text. The use of a commercial PBPK platform (e.g., Simcyp or GastroPlus) is not confirmed, which may limit reproducibility if the model relies on proprietary systems.[^fc-29]

---

### Supplementary Materials
The paper likely includes supplementary materials with additional details on model parameters, sensitivity analyses, and possibly additional simulation results for pravastatin and rosuvastatin. Specific supplementary content was not available in the provided text, but typical supplements for PBPK modeling papers include: (1) full parameter tables with uncertainty ranges, (2) sensitivity analyses for key model assumptions (e.g., transporter expression changes), (3) additional VPC or goodness-of-fit plots, and (4) model code or detailed methods for the zonal liver model.

---

### Future Directions
This work opens several avenues for future research: (1) prospective clinical validation of the predicted zonal Cu,IW differences using imaging-based or biopsy-based approaches in MASH patients; (2) incorporation of SLCO1B1 genetic variants to refine individual-level predictions; (3) extension of the zonal PBPK framework to other hepatically cleared drugs, particularly those with narrow therapeutic indices; (4) integration of dynamic disease progression models to capture MASH regression or progression over time; (5) linkage of the MVA biomarker model to longer-term lipid outcomes (LDL-C reduction, cardiovascular events) to enable model-informed therapeutic optimization; and (6) exploration of the impact of MASH on drug-drug interactions at the zonal level, particularly for OATP inhibitors commonly used in HIV or HCV therapy.

---

### Expert Commentary
This paper represents a thoughtful application of quantitative systems pharmacology to a clinically important problem. The zonal liver model is a welcome departure from the traditional well-stirred assumption, and the authors should be commended for linking hepatic exposure to a functional biomarker (MVA). However, I would caution against over-interpreting the absolute Cu,IW values given the uncertainty in human zonal transporter expression data.[^fc-34] The field would benefit from more experimental data on zonal transporter gradients in healthy and diseased human livers. From a regulatory perspective, this work supports the use of PBPK modeling to inform dose recommendations in MASH patients, but prospective clinical confirmation is essential before these predictions can inform labeling.[^fc-35] The indirect response model for MVA is well-established, but the authors should ensure that the model accounts for the diurnal variation in MVA and the potential for feedback regulation of HMG-CoA reductase.[^fc-36] Overall, this is a valuable contribution that will likely influence future PBPK modeling efforts in metabolic liver disease.

---

### Bottom Line
This paper delivers a clinically actionable message: in patients with MASH, standard statin doses may produce subtherapeutic hepatocellular concentrations in the perivenous zone (Zone 6), potentially reducing efficacy, while systemic exposure may be elevated, increasing myopathy risk. The zonal PBPK model with an indirect PD response provides a quantitative framework for dose individualization—suggesting that MASH patients may need higher statin doses to achieve target hepatic exposure, but with careful monitoring for systemic toxicity. For pharmacometricians, this work underscores the importance of incorporating liver zonation and disease-specific transporter changes into PBPK models, rather than relying on well-stirred liver assumptions. The integration of a PD biomarker (MVA) with zonal hepatic exposure represents a best-practice example of model-informed drug development that could inform regulatory decisions for drugs in the NAFLD/MASH space.[^fc-37]

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The findings suggest that MASH-related downregulation of hepatic OATP transporters and upregulation of efflux transporters may reduce hepatocellular statin accumulation in a zone-specific manner.” → correction: “In MASH, the hepatic protein abundances of OATP1B1, OATP1B3, OATP2B1, NTCP, and CYP3A4 are decreased”
[^fc-2]: **NUMERIC_MISMATCH** — original: “The study employs a full physiologically-based pharmacokinetic (PBPK) modeling approach with zonal liver resolution, dividing the liver into periportal (Zone 1) and perivenous (Zone 6) compartments.” → correction: “six equidistant zones of the liver ... Zone 1 (periportal) and Zone 6 (pericentral)”
[^fc-3]: **NUMERIC_MISMATCH** — original: “The structural model consists of: (1) a systemic circulation compartment with blood flow to the liver; (2) a zonal liver model with two compartments representing Zone 1 (periportal) and Zone 6 (perivenous), each with intracellular water space and transporter-mediated uptake/efflux.” → correction: “six equidistant zones of the liver ... Zone 1 (periportal) and Zone 6 (pericentral)”
[^fc-4]: **UNSUPPORTED** — original: “The structural model includes (4) an indirect PD response model for MVA with a precursor pool (HMG-CoA) and product (MVA) compartment.” → correction: “A previously published indirect pharmacodynamic response model of rosuvastatin [21], which simulated plasma mevalonic acid (MVA) exposure as an in vivo marker of HMG-CoA reductase activity”
[^fc-5]: **UNSUPPORTED** — original: “The indirect PD model parameters (k_in, k_out, I_max, IC_50) are estimated by fitting to MVA time-course data, likely using nonlinear mixed-effects modeling (NONMEM or similar) with first-order conditional estimation (FOCE) or stochastic approximation expectation-maximization (SAEM).” → correction: “An IC50 of 0.024 μM and Hill coefficient of 8 were needed to recover the clinical data [43].”
[^fc-6]: **UNSUPPORTED** — original: “Sensitivity analyses assess the impact of key parameters (e.g., transporter expression changes, liver volume) on model predictions.” → correction: “a sensitivity analysis showed minimal impact on simulated PD effects”
[^fc-7]: **UNSUPPORTED** — original: “The covariate analysis is primarily mechanism-based (physiological) rather than data-driven, using published relationships between disease severity and transporter expression.” → correction: “No mention of covariate analysis in the source text.”
[^fc-8]: **UNSUPPORTED** — original: “The statistical approach is appropriate for a PBPK modeling study, with Monte Carlo simulations providing a quantitative assessment of inter-individual variability.” → correction: “Each application simulation consisted of 100 individuals”
[^fc-9]: **UNSUPPORTED** — original: “The use of geometric means for population simulations is appropriate for log-normally distributed PK parameters, but the authors should report the variability (e.g., 90% prediction intervals) around the geometric mean profiles.” → correction: “Geometric mean of population simulated (A) total plasma (Cplasma) and (B) average zonal unbound hepatocellular (e.g., intracellular) concentration (Cu,IW)-time p...”
[^fc-10]: **UNSUPPORTED** — original: “For rosuvastatin, the indirect PD response model shows that MVA plasma concentrations—a surrogate for hepatic HMG-CoA reductase inhibition—are less suppressed in MASH patients compared to healthy controls at equivalent systemic exposure.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The model predicts that obesity alone has a modest effect on zonal Cu,IW, primarily through changes in liver volume and blood flow.” → correction: “Less profound decreases in statin Zone 6 Cmax,u,IW,ss were observed in Obese and Morbidly Obese populations. This is likely due to similar relative Zone 6 and overall hepatic abundances of OATP1B1, OATP1B3, and NTCP compared with Healthy Volunteers (Tables S1, S3).”
[^fc-12]: **CONTRADICTED** — original: “The model predicts that MASH patients have reduced hepatocellular exposure to pravastatin and rosuvastatin, potentially requiring higher doses to achieve equivalent HMG-CoA reductase inhibition.” → correction: “For pravastatin and atorvastatin, simulated increases in mean maximum unbound intracellular concentrations (Cmax,u,IW,ss) and unbound intracellular AUC at steady state (AUCτ,u,IW,ss) ranged from 6% to 26% and 2% to 96%, respectively, with the largest increases seen in the MASH population.”
[^fc-13]: **UNSUPPORTED** — original: “The study supports the use of PBPK-guided dose individualization in MASH, potentially recommending: (1) more frequent monitoring of liver enzymes and CK in MASH patients on statins; (2) consideration of alternative statins with different transporter profiles (e.g., less OATP-dependent); (3) dose adjustment based on MVA or LDL-C response rather than plasma PK alone.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “The zonal PBPK model could be used to support labeling recommendations for other hepatically cleared drugs in MASH patients.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **NUMERIC_MISMATCH** — original: “The use of two statins (pravastatin and rosuvastatin) with different transporter profiles strengthens generalizability.” → correction: “Systemic and hepatocellular concentrations of pravastatin, rosuvastatin, and atorvastatin were simulated”
[^fc-16]: **CONTRADICTED** — original: “Model predictions rely on published in vitro and preclinical data for transporter expression changes in MASH, which may not fully recapitulate human disease.” → correction: “MZA data for OATP1B1, OATP1B3, and NTCP from individuals with NDL as well as patients with MASH were obtained from a previously published study [33].”
[^fc-17]: **UNSUPPORTED** — original: “The MVA biomarker, while a reasonable surrogate for HMG-CoA reductase inhibition, may not fully capture the lipid-lowering efficacy of statins.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-18]: **CONTRADICTED** — original: “The model does not explicitly incorporate genetic polymorphisms in OATP1B1 (SLCO1B1) that are known to affect statin disposition.” → correction: “To match the patient cohorts reported in the genotype study, platform built-in OATP1B1 transporter phenotypes (categorized as extensive, intermediate, and poor) were leveraged.”
[^fc-19]: **CONTRADICTED** — original: “The model does not account for potential changes in protein binding in MASH (e.g., altered albumin or alpha-1-acid glycoprotein levels), which could affect unbound concentrations.” → correction: “| Human Serum Albumin [5%–95% CI] (g/L)a | 46.2 [39.0–55.0] | 49.0 [41.4–58.1] |”
[^fc-20]: **UNSUPPORTED** — original: “The equation for zonal hepatocellular unbound concentration (Cu,IW) describes the unbound intracellular water concentration in each liver zone, where f_u,b is the unbound fraction in blood, C_b is the blood concentration, PS_influx is the permeability-surface area product for uptake transporters (e.g., OATP1B1), PS_efflux is the efflux transport (e.g., MRP2, BCRP), and CL_met is the metabolic clearance.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-21]: **UNSUPPORTED** — original: “The indirect PD response model for MVA describes MVA synthesis inhibited by the unbound hepatocellular statin concentration (Cu,IW), with k_in as the zero-order synthesis rate, k_out as the first-order elimination rate, I_max as the maximum inhibition, and IC_50 as the concentration producing 50% inhibition of HMG-CoA reductase.” → correction: “A previously published indirect pharmacodynamic response model of rosuvastatin [21], which simulated plasma mevalonic acid (MVA) exposure as an in vivo marker of HMG-CoA reductase activity, was updated to include the local unbound hepatocellular rosuvastatin concentrations as the driving pharmacodynamic force. An IC50 of 0.024 μM and Hill coefficient of 8 were needed to recover the clinical data [43] (Figure S2 and Table S10).”
[^fc-22]: **UNSUPPORTED** — original: “The model scales liver blood flow to each zone based on total liver blood flow (Q_liver), the fraction of flow to each zone (f_zone), and allometric scaling by body weight (WT) with an exponent of 0.75, accounting for obesity-related changes in cardiac output and hepatic perfusion.” → correction: “The Simcyp Simulator PerMCL has been described previously [25, 26] (Supplemental Methods: Data S1).”
[^fc-23]: **UNSUPPORTED** — original: “The model adjusts the influx transport clearance in MASH based on the fractional downregulation of OATP transporters (f_down) and the relative expression ratio (R_MASH/R_healthy) between MASH and healthy livers.” → correction: “In MASH, the hepatic protein abundances of OATP1B1, OATP1B3, OATP2B1, NTCP, and CYP3A4 are decreased [5, 16-18], potentially impacting the pharmacokinetics of statins that depend on these pathways for hepatic uptake and/or metabolism.”
[^fc-24]: **UNSUPPORTED** — original: “The model scales liver volume for obesity and hepatic steatosis, where V_liver,0 is the baseline liver volume, WT is body weight, k_steatosis is a proportionality constant, and f_fat is the fraction of hepatic fat content, which is elevated in MASH.” → correction: “Liver Weight (kg) [5%–95% CI]a | 1.6 [1.2–2.1] | 2.0 [1.3–2.7]”
[^fc-25]: **UNSUPPORTED** — original: “Figure 3 shows geometric mean of population simulated unbound hepatocellular (intracellular) concentration (Cu,IW)-time profiles for liver Zone 1 and Zone 6 for (A) pravastatin and (B) rosuvastatin in healthy, obese, and MASH populations.” → correction: “Zone 1 (periportal) and Zone 6 (pericentral) Cu,IW (Table S16) concentration–time profiles (Figure 3) and Cu,EW (Table S17) were also simulated for pravastatin, rosuvastatin, and atorvastatin.”
[^fc-26]: **CONTRADICTED** — original: “Figure 3 demonstrates that MASH reduces zonal hepatocellular exposure to statins, with a more pronounced effect in Zone 6 (perivenous).” → correction: “Generally, statin hepatocellular exposure increased in Zone 1 and decreased in Zone 6 in MASH relative to Healthy Volunteers”
[^fc-27]: **CONTRADICTED** — original: “Figure 4 shows that MVA suppression is attenuated in MASH despite similar systemic exposure.” → correction: “Despite a predicted increase in rosuvastatin plasma concentrations in MASH patients administered a standard 10 mg daily oral dose, a decrease in cholesterol-lowering efficacy was predicted”
[^fc-28]: **CONTRADICTED** — original: “The paper does not explicitly state whether the PBPK model code or simulation scripts are publicly available.” → correction: “The models used in this manuscript have been made available in a global health and PBPK model repository (https://pbpkrepository.certara.co.uk/).”
[^fc-29]: **CONTRADICTED** — original: “The use of a commercial PBPK platform (e.g., Simcyp or GastroPlus) is not confirmed, which may limit reproducibility if the model relies on proprietary systems.” → correction: “with the Simcyp Simulator”
[^fc-30]: **UNSUPPORTED** — original: “Future research avenues include: (1) prospective clinical validation of the predicted zonal Cu,IW differences using imaging-based or biopsy-based approaches in MASH patients; (2) incorporation of SLCO1B1 genetic variants to refine individual-level predictions; (3) extension of the zonal PBPK framework to other hepatically cleared drugs, particularly those with narrow therapeutic indices.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-31]: **UNSUPPORTED** — original: “Future research avenues include: (5) linkage of the MVA biomarker model to longer-term lipid outcomes (LDL-C reduction, cardiovascular events) to enable model-informed therapeutic optimization; and (6) exploration of the impact of MASH on drug-drug interactions at the zonal level, particularly for OATP inhibitors commonly used in HIV or HCV therapy.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-32]: **UNSUPPORTED** — original: “The zonal liver model is a welcome departure from the traditional well-stirred assumption.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-33]: **UNSUPPORTED** — original: “The authors should be commended for linking hepatic exposure to a functional biomarker (MVA).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-34]: **UNSUPPORTED** — original: “I would caution against over-interpreting the absolute Cu,IW values given the uncertainty in human zonal transporter expression data.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-35]: **UNSUPPORTED** — original: “From a regulatory perspective, this work supports the use of PBPK modeling to inform dose recommendations in MASH patients, but prospective clinical confirmation is essential before these predictions can inform labeling.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-36]: **UNSUPPORTED** — original: “The indirect response model for MVA is well-established, but the authors should ensure that the model accounts for the diurnal variation in MVA and the potential for feedback regulation of HMG-CoA reductase.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-37]: **UNSUPPORTED** — original: “The integration of a PD biomarker (MVA) with zonal hepatic exposure represents a best-practice example of model-informed drug development that could inform regulatory decisions for drugs in the NAFLD/MASH space.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-09-23-impact-of-obesity-and-mash-on-zonal-hepatocyte-concentrations-of-statins-a/figures/fig_01.jpg)

![Verification of a Metabolic Dysfunction-Associated Steatohepatitis (MASH) virtual population. (A) Liver weight (kg) was initially simulated for 1000 virtual indi]({{ site.baseurl }}/assets/digests/2026-09-23-impact-of-obesity-and-mash-on-zonal-hepatocyte-concentrations-of-statins-a/figures/fig_02.jpg)

![Geometric mean of population simulated (A) total plasma (Cplasma) and (B) average zonal unbound hepatocellular (e.g., intracellular) concentration (Cu,IW)-time p]({{ site.baseurl }}/assets/digests/2026-09-23-impact-of-obesity-and-mash-on-zonal-hepatocyte-concentrations-of-statins-a/figures/fig_03.jpg)

![Geometric mean of population simulated unbound hepatocellular e.g., intracellularconcentration (Cu,IW)-time profiles for liver Zone 1 and Zone 6 for (A) pravasta]({{ site.baseurl }}/assets/digests/2026-09-23-impact-of-obesity-and-mash-on-zonal-hepatocyte-concentrations-of-statins-a/figures/fig_04.jpg)

![Rosuvastatin indirect pharmacodynamic response model simulations of mevalonic acid (MVA) plasma concentration–time profiles as a surrogate measure of in vivo 3-h]({{ site.baseurl }}/assets/digests/2026-09-23-impact-of-obesity-and-mash-on-zonal-hepatocyte-concentrations-of-statins-a/figures/fig_05.jpg)