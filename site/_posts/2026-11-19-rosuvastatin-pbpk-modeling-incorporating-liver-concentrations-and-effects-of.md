---
layout: post
title: "Rosuvastatin PBPK Modeling: Incorporating Liver Concentrations and Effects of Ethnicity, Genetic Polymorphisms, Lactone Formation, DDI and Pregnancy."
date: 2026-11-19
authors: "Ankit Balhara, Robert H. Weber, Jashvant D. Unadkat"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70097"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "A middle-out Simcyp PBPK model of rosuvastatin (RSV) that includes hepatic concentrations from PET imaging and explicit RSV/RSV-lactone interconversion. It was verified against more than 75 datasets spanning ethnicity, OATP1B1/BCRP genotype, and rifampin/cyclosporine DDI, and used in sensitivity analyses of third-trimester pregnancy. It is relevant to transporter-PBPK modelers, DDI/pharmacogenetic scientists, and anyone working on pregnancy PK."
pdf_path: "/assets/digests/2026-11-19-rosuvastatin-pbpk-modeling-incorporating-liver-concentrations-and-effects-of/PMx_Rosuvastatin_PBPK_Modeling_Incorporating_20261119.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
A middle-out Simcyp PBPK model of rosuvastatin (RSV) that includes hepatic concentrations from PET imaging and explicit RSV/RSV-lactone interconversion. It was verified against more than 75 datasets spanning ethnicity, OATP1B1/BCRP genotype, and rifampin/cyclosporine DDI, and used in sensitivity analyses of third-trimester pregnancy. It is relevant to transporter-PBPK modelers, DDI/pharmacogenetic scientists, and anyone working on pregnancy PK.

---

### Executive Summary
Balhara, Weber and Unadkat built a transporter-centric RSV PBPK model. A purely bottom-up REF-based model failed, so they moved to a middle-out strategy. The hepatic uptake REF scalars were increased (10 for OATP1B1, 6.6 for OATP1B3/OATP2B1/NTCP) and the NTCP contribution was partly reassigned to OATP1B1. Biliary efflux was reduced by 50%, and intestinal and renal transporter scalars were fitted or set (renal OAT3 and BCRP REF 3.2). The model was trained on Caucasian IV/oral plasma data, PET-derived hepatic and blood concentrations, and lactone data, then verified across Caucasian, Chinese, Japanese, Malay and Korean populations. Genotype effects (OATP1B1 and BCRP) and DDI with rifampin and cyclosporine were also verified. The lactone was modeled explicitly, with formation via UGT1A1/1A3 and reconversion via CYP3A and plasma degradation. Predictions were mostly within the 5th-95th percentile bands and the acceptance criteria. Systematic Cmax underprediction in Asian populations, an underprediction of the BCRP genotype effect, overprediction of rifampin AUCR in Japanese subjects, and the need to reduce inhibitor $K_i$ values 5-10-fold were the main deviations. Sensitivity analysis for pregnancy identified hepatic OATP1B1 intrinsic clearance and intestinal BCRP $J_{max}$ as the dominant drivers. A 90% reduction in OATP1B1 activity, or a 75% reduction in BCRP $J_{max}$, reproduced the observed ~2-fold AUC ratio but underpredicted the Cmax ratio. The model is a useful but empirically tuned framework, and it highlights unresolved issues such as sinusoidal efflux and the in vitro-in vivo disconnect in inhibitor potency.

---

### Scientific Context & Motivation
RSV is the archetypal transporter-dependent probe: intestinal OATP2B1/BCRP, hepatic OATP1B1/1B3/NTCP/OATP2B1, biliary BCRP/MRP2 and renal OAT3/BCRP all shape its PK, with minimal metabolism and reversible lactone formation. Because several transporters act at once, interpreting genotype or DDI studies is difficult, and PBPK is the natural tool for apportioning their contributions. Earlier RSV PBPK models (including the Simcyp library model) lacked some combination of lactone interconversion, hepatic concentration verification (PET), multi-ethnic verification, and pregnancy. The Simcyp library model also markedly underpredicts liver concentrations (Figure S7). Pregnancy is a major knowledge gap for hepatic transporters, since phenotyping studies exist for CYPs, UGTs and renal transporters but essentially not for hepatic uptake transporters. The authors observed 2-fold higher AUC in the third trimester versus postpartum and used the model to ask which transporter changes could explain it. They also wanted to test whether proteomics-based REF scaling from in vitro kinetics could predict RSV disposition without empirical scaling.

---

## ⚡ Methodological Snapshot
The authors built a Simcyp-based full PBPK model with a middle-out strategy. In vitro transporter kinetics and proteomic abundances from their own work were used to start a bottom-up model. This failed to match plasma and hepatic concentrations, so REF scalars and several parameters were refined by minimizing AAFE against Caucasian IV/oral training data, PET liver and blood data, and lactone data.

The model was then verified on independent datasets: single and multiple doses in Caucasian, Chinese, Japanese, Malay and Korean subjects, OATP1B1 and BCRP genotype groups, and DDI with rifampin and cyclosporine. Acceptance criteria considered inter-study and inter-subject variability. Finally, the pregnancy-related PK change (third trimester vs postpartum) was analyzed by parameter sensitivity of AUCR and CmaxR.

---

## 🏗️ Structural Model Breakdown
Absorption: oral RSV enters enterocytes via OATP2B1 and is effluxed by BCRP, with passive diffusion scaled from Caco-2 data. Distribution and hepatic handling: sinusoidal uptake by OATP1B1 (REF 10), OATP1B3, OATP2B1 and NTCP (REF 6.6, with NTCP's share partly reassigned to OATP1B1). Biliary efflux by BCRP (with P-gp attributed to it, $f_t$ 0.54 + 0.07) and MRP2 ($f_t$ 0.39) was reduced 50%, and enterohepatic recycling was included. Sinusoidal efflux was left out because it led to underpredicted hepatic levels. Renal: filtration plus OAT3 uptake and BCRP efflux (REF 3.2 each). Lactone: formation via UGT1A1/1A3, and reversion via CYP3A and plasma degradation (in-house measured half-life), with no transport or biliary excretion of lactone. Hepatic uptake was the rate-determining step in clearance, with a minor canalicular contribution. DDI was modeled with reversible inhibition, using reduced $K_i$ values for OATP1B1, OATP1B3 and BCRP (rifampin 10-fold; cyclosporine 10-fold for OATPs and 5-fold for BCRP) and $K_i$ 100 uM for OATP2B1 (gut and liver) for rifampin. In pregnancy sensitivity analysis, the OATP1B1 scalar was scanned from 10 down to 1 (50, 25, 10% of the baseline), and BCRP $J_{max}$ from 790 to 197.5 (75, 50, 25% of baseline).

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole-body PBPK in Simcyp with a transporter-centric RSV model: intestinal OATP2B1 uptake and BCRP efflux, hepatic OATP1B1/1B3/2B1/NTCP uptake and biliary BCRP (including P-gp share)/MRP2 efflux, renal filtration with OAT3 uptake and BCRP efflux. RSV-lactone is formed by UGT1A1/1A3 and converted back by CYP3A and pH-dependent plasma degradation. Sinusoidal efflux and lactone biliary excretion were excluded.

#### Data Sources
Literature compilation of physicochemical, in vitro transporter and enzyme kinetics, and in vivo PK data (>75 datasets). Training: Caucasian IV and oral plasma data, OATP1B1 genotype data, lactone data, and the authors' PET imaging data ($^{11}$C-RSV blood and liver, 1 mg IV bolus). Verification: Caucasian, Chinese, Japanese, Malay, Korean single/multiple-dose data, OATP1B1/BCRP genotype studies, rifampin (IV and oral) and cyclosporine DDI studies, and a pregnancy study (third trimester vs postpartum).

#### Estimation Methods
Middle-out parameter refinement: REF scalars adjusted for hepatic uptake and renal transporters, intestinal transporter and Caco-2 passive diffusion scalars fitted, biliary efflux reduced by 50%, and parameters refined by minimizing AAFE. DDI $K_i$ values for rifampin and cyclosporine were optimized. Specific software optimizer details are not given in the main text (see S2).

#### Model Evaluation
Visual comparison of observed with simulated 5th-95th percentile profiles, AAFE, and predicted/observed ratios of Cmax, AUC, CmaxR and AUCR against predefined acceptance criteria that account for variability beyond the 2-fold rule. Observed data also compared with the Simcyp library RSV model. Pregnancy analysis evaluated by predicted/observed AUCR and CmaxR.

#### Covariate Analysis
No formal covariate model-building. Population effects (ethnicity, OATP1B1 and BCRP genotype, pregnancy) were evaluated by population libraries and genotype frequencies, by scaling transporter parameters (OATP1B1 scalar, BCRP $J_{max}$) in sensitivity analyses, and by assuming equal transporter expression across genotype groups.

---

### Statistical Rigor Assessment
The training and verification split, and the use of AAFE and parameter ratio criteria incorporating variability, are appropriate for PBPK. Verification across many datasets provides substantial evidence, and the authors discuss the cases of failure and the effect of reported SDs on acceptance ranges. Weaknesses are the use of mean data, no formal uncertainty or confidence intervals on adjusted parameters, no global sensitivity analysis, several results 'data not shown', and a single pregnancy study with ratio endpoints. Empirical adjustments reduce the independence of verification for DDI ($K_i$ tuned on the same perpetrators) and for genotype effects.[^fc-4] Underprediction of Asian Cmax appears systematic and not random.

---

## 📊 Key Findings
1) The bottom-up REF model underpredicted hepatic concentrations and overpredicted late systemic concentrations (Figure S2). Middle-out scaling gave REF 10 for OATP1B1 and 6.6 for OATP1B3/OATP2B1/NTCP, and 3.2 for renal OAT3 and BCRP. The NTCP share was partly shifted to OATP1B1. Biliary efflux was reduced by 50%. 2) The trained model captured IV and oral RSV plasma, lactone plasma, and PET blood and liver profiles in Caucasians (Figure 2), with minimum AAFE of 1 for RSV plasma, 1.5 for lactone, and 1.2 for hepatic RSV plus lactone. 3) Caucasian verification datasets (single and multiple dose) were captured (Figure 3). In Chinese and Japanese subjects, profiles fell within the 5th-95th percentile bands but Cmax was systematically underpredicted, and multiple-dose parameters were marginally outside the acceptance limits. 4) OATP1B1 extensive, intermediate and poor transporter profiles were captured in Caucasians (Figure 4), except for a slight Cmax underprediction in poor transporters. Asian genotype results were mixed, and the poor-transporter dataset was an outlier. 5) BCRP genotype profiles were captured (Figure 5), but the model predicted only a ~50% Cmax and ~100% AUC increase in poor BCRP transporters, versus the observed 130-140%, so intestinal handling is incomplete. 6) For DDI, the rifampin $K_i$ values for OATP1B1, OATP1B3 and BCRP had to be reduced 10-fold, and the literature OATP2B1 $K_i$ of 100 uM was used in gut and liver. This captured AUCR/CmaxR in Caucasians (Figure 6) but overpredicted AUCR in all five Japanese datasets. Cyclosporine required 10-fold lower $K_i$ for OATP1B1/1B3 and 5-fold lower for BCRP. PET liver concentrations under cyclosporine were underpredicted, probably from the missing sinusoidal efflux. 7) Chronic rifampin lowered predicted RSV AUC by ~26% relative to a single dose, through CYP3A4 induction increasing lactone-to-RSV conversion. This offers a mechanism that does not require OATP induction. 8) In pregnancy, RSV PK was most sensitive to hepatic OATP1B1 intrinsic clearance and intestinal BCRP $J_{max}$ (Figure S6). A 90% reduction in OATP1B1 scalar (10 to 1) or a 75% reduction in BCRP $J_{max}$ (790 to 197.5) reproduced the AUCR (predicted/observed 1.0 and 0.96). CmaxR was underpredicted (0.83 and 0.63) (Figure 7). Because the terminal half-life was unchanged, the authors infer higher bioavailability, supported by hormone-driven OATP1B1 downregulation in hepatocytes.

---

## 💡 Clinical & Regulatory Implications
The model can support simulation of RSV exposure in OATP1B1 and BCRP genotype groups and in OATP/BCRP inhibitor DDI scenarios (rifampin, cyclosporine), and it can help evaluate transporter-mediated DDI risk for RSV as a victim. Cautious use for dose optimization in Asian populations is warranted given Cmax underprediction (a consideration since Asian patients have higher exposure and lower recommended starting doses). In pregnancy, higher third-trimester exposure (~2-fold AUC) is suggested to arise from reduced hepatic OATP1B1 and/or intestinal BCRP activity, which could inform future dosing studies, although RSV is usually avoided in pregnancy. The authors also suggest utility for hepatic or renal impairment and regulatory transporter-DDI assessment, but these applications were not verified in this work.

---

### Strengths & Limitations

#### Strengths
- Very broad verification set (>75 datasets) across ethnicities, genotypes, DDI perpetrators and dosing regimens
- Uses human PET-derived hepatic concentrations to constrain hepatic uptake and distribution, not just plasma data
- Explicit RSV/RSV-lactone interconversion, with in-house plasma lactone degradation kinetics and lactone verified without extra parameter optimization
- Acceptance criteria account for inter-study and inter-subject variability beyond a fixed 2-fold criterion
- Transparent about bottom-up failure and about every empirical adjustment (REF scalars, NTCP redistribution, efflux reduction, $K_i$ reductions)
- Pregnancy sensitivity analysis is mechanistically motivated and supported by the authors' in vitro hepatocyte hormone data
- Mechanistic hypothesis for the chronic rifampin AUC reduction (CYP3A induction acting on lactone recycling) rather than OATP induction

#### Limitations (Acknowledged by Authors)
- Blood and hepatic concentrations in the PET study were underpredicted because uptake had to be scaled up to fit non-PET plasma PK, which may reflect tracer-dose versus therapeutic-dose differences
- Sinusoidal efflux could not be included without worsening fits, yet PET data suggest it exists, and this probably explains the underprediction of hepatic RSV under cyclosporine
- Lactone transport into and out of liver and bile is unknown, so all lactone was assumed to convert fully to RSV with no biliary excretion
- BCRP polymorphism effect was underpredicted, indicating the intestinal model needs refinement
- Rifampin and cyclosporine $K_i$ values had to be reduced from Simcyp defaults and literature values for unknown reasons
- Systematic Cmax underprediction in Asian populations, possibly from the lack of a Korean library population, transporter abundance and activity differences, and Caucasian-derived scalars
- The model cannot identify the mechanism of increased exposure in pregnancy, and postpartum RSV concentrations were lower than expected for non-pregnant adults

#### Limitations (Expert Review)
- Heavy empirical scaling (REF 10 and 6.6, NTCP reassignment, 50% efflux reduction, 5-10-fold $K_i$ reductions) was tuned on training data, so mechanistic generalization is uncertain, and the $K_i$ reductions are likely compensating for other model gaps
- Training and verification relied on literature mean profiles with limited individual-level information, and the acceptance criteria were based on reported SDs, which can be unrealistically narrow in small studies
- Pregnancy results are sensitivity-based, with a single clinical dataset and no pregnancy-specific physiological or transporter changes built in. Moreover, the two candidate mechanisms are not distinguished, they are not tested in combination, and neither fully reproduces Cmax
- Postpartum overprediction implies the baseline model does not represent the pregnancy study population, so the ratio-based match could be partly fortuitous
- Poor sinusoidal efflux handling and the PET/plasma scaling discrepancy leave a core tissue-distribution assumption unresolved
- Parameter uncertainty was not quantified formally (no parameter estimation with confidence intervals, no global sensitivity or uncertainty propagation), and several DDI results are 'data not shown'
- Heavy reliance on supplementary materials, and many comparison tables were not available to this review

#### Generalizability
Good for Caucasian adults, including OATP1B1 and BCRP genotype effects and rifampin and cyclosporine DDI. Extrapolation to Asian populations is less reliable (Cmax underprediction, rifampin AUCR overprediction in Japanese). The pregnancy findings are hypothesis-generating and need independent data. Use for other perpetrators, renal or hepatic impairment, or pediatric populations would require further verification.[^fc-8]

---

---

### Figures & Tables

- **Figure 1**: Schematic of RSV transporters and enzymes in intestine, liver and kidney, including lactone interconversion
  - *Significance*: Defines the model's mechanistic structure and the contributions of OATP2B1, BCRP, OATP1B1/1B3, NTCP, MRP2, OAT3, UGT1A1/1A3 and CYP3A4
- **Figure 2**: Training datasets in Caucasians: IV and oral RSV plasma, lactone plasma, and PET blood and liver RSV plus lactone
  - *Significance*: Shows the middle-out fit, including hepatic concentrations and the lactone
- **Figure 3**: Verification of RSV and lactone profiles in Caucasians, Chinese and Japanese after single doses
  - *Significance*: Demonstrates extrapolation across ethnicities and the systematic Cmax underprediction in Asians
- **Figure 4**: OATP1B1 genotype (extensive, intermediate, poor transporter) predicted versus observed plasma profiles in Caucasians
  - *Significance*: Shows the model captures the impact of OATP1B1 function on RSV exposure
- **Figure 5**: BCRP genotype predicted versus observed profiles in Caucasians (with and without OATP1B1 genotyping)
  - *Significance*: Validates intestinal and biliary BCRP effects, although the model underpredicts the magnitude of the poor-transporter effect (seen in the PK parameter tables)
- **Figure 6**: RSV profiles with IV and oral rifampin (Caucasians) and cyclosporine (Japanese)
  - *Significance*: Shows the DDI training results after reducing inhibitor $K_i$ values
- **Figure 7**: Predicted pregnancy/postpartum AUCR and CmaxR versus hepatic OATP1B1 scalar and intestinal BCRP $J_{max}$
  - *Significance*: Pregnancy sensitivity analysis: 90% OATP1B1 reduction or 75% BCRP $J_{max}$ reduction reproduces the 2-fold AUCR but underpredicts CmaxR
- **Table S9**: RSV PK parameters (Cmax and AUC) for single and multiple doses across populations
  - *Significance*: Quantitative verification and acceptance-criteria evaluation (supplementary, referenced only)
- **Table S11**: PK parameter verification for OATP1B1 and BCRP genotype groups
  - *Significance*: Shows where genotype effects were captured and where they were not (supplementary, referenced only)
- **Tables S12-S14**: DDI (rifampin, cyclosporine) and pregnancy sensitivity results
  - *Significance*: Document the $K_i$ adjustments, the Japanese AUCR overprediction, and the pregnancy predicted/observed ratios (supplementary, referenced only)

---

### Code & Reproducibility Assessment
The model was built in Simcyp, with details in Supporting Information S1-S6 (not available here). The paper does not mention a shared model file or code. Reproduction would require the supplementary parameter tables (e.g., S7, S9-S14) and Simcyp licensing. Several results (the chronic rifampin simulation, the bottom-up DDI and polymorphism predictions) are 'data not shown'.

---

### Supplementary Materials
Supplementary materials (S1-S6) were referenced but not available for review. They include the dataset list (S1), detailed methods (S2), supplementary figures (S3: bottom-up failure S2, Simcyp library comparison S7, sensitivity analysis S6, rifampin and cyclosporine PK S4/S5), and tables of PK parameter verification and DDI $K_i$ values (S4: S7, S9-S14).

---

### Future Directions
1) Resolve sinusoidal efflux and the PET versus therapeutic-dose discrepancy, for example by dose-ranging hepatic imaging or tracer studies with transporter inhibitors. 2) Refine the intestinal model (additional efflux or uptake transporters, regional expression) to capture the full BCRP genotype effect. 3) Study lactone biliary excretion and transport and incorporate enterohepatic recycling of the lactone, then test whether CYP3A induction explains the chronic rifampin AUC reduction. 4) Obtain more population-specific data (Korean and Malay populations, Asian transporter abundance) to reduce Cmax underprediction. 5) Integrate pregnancy physiology and hormone-based OATP1B1 downregulation to predict Cmax as well as AUC, and test combined OATP1B1/BCRP changes against independent pregnancy data. 6) Investigate why inhibitor $K_i$ values need reduction (metabolites, accumulation, unbound concentration at the site). 7) Extend to renal and hepatic impairment and pediatrics, and to other transporter substrates.

---

### Expert Commentary
The paper is honest about what a REF-based approach can and cannot do. Even with proteomics-informed abundances, RSV required roughly 7-10-fold upscaling of hepatic uptake, and the 5-10-fold $K_i$ reductions for rifampin and cyclosporine are a recurring theme in OATP DDI modeling, usually pointing to unbound or hepatic inhibitor concentrations and metabolites. The PET liver data are a major asset, since plasma alone cannot constrain tissue exposure. The cyclosporine/sinusoidal efflux finding is a reminder that plasma-matched models can still get the liver wrong. The pregnancy analysis is a sensible use of PBPK to rank hypotheses, but it cannot distinguish OATP1B1 downregulation from BCRP changes, and the failure to match CmaxR hints at missing absorption or distribution features (e.g., gastric emptying, bile flow, hormone-related changes). Teaching points: report the full list of empirical adjustments, use ratio endpoints (AUCR/CmaxR) for mechanistic testing in special populations, and avoid over-reading mean-profile fits in small studies. The rifampin-CYP3A-lactone hypothesis is a thought-provoking example of how reversible metabolism can change apparent clearance.

---

### Bottom Line
This is the most comprehensive RSV PBPK model to date, covering lactone interconversion, liver concentrations, genotypes, ethnicity, DDI and pregnancy sensitivity. It is useful for exploring transporter contributions and for simulations in Caucasians and, with caution, Asian populations. Users should keep in mind that it is middle-out: REF scalars, the transporter fractions and the inhibitor $K_i$ values were empirically adjusted, so confidence outside the verified conditions should be tempered. The pregnancy results (reduced hepatic OATP1B1 and/or intestinal BCRP) are plausible mechanistic hypotheses rather than confirmed findings.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “Verification data included rifampin (IV and oral) and cyclosporine DDI studies and a pregnancy study (third trimester vs postpartum).” → correction: “the predicted RSV CmaxR and AUCR were within the acceptance criteria after both IV and oral rifampin co-administration in the training and verification datasets in the Caucasian population”
[^fc-2]: **UNSUPPORTED** — original: “The training and verification split and use of AAFE and parameter ratio criteria incorporating variability are described as appropriate for PBPK.” → correction: “Seventh, model evaluation criteria accounted for interstudy and/or inter-subject variabilities beyond the conventional two-fold criterion.”
[^fc-3]: **UNSUPPORTED** — original: “Weaknesses include use of mean data, no formal uncertainty or confidence intervals on adjusted parameters, no global sensitivity analysis, several results 'data not shown', and a single pregnancy study with ratio endpoints.” → correction: “Interestingly, the predicted RSV AUC following chronic administration of rifampin (600 mg once daily for 14 days) was approximately 26% lower than that predicted after a single dose of rifampin (Data not shown).”
[^fc-4]: **UNSUPPORTED** — original: “Empirical adjustments reduce the independence of verification for DDI ($K_i$ tuned on the same perpetrators) and for genotype effects.” → correction: “the $K_i$ values for both rifampin and cyclosporine had to be reduced from the Simcyp default values and those previously published”
[^fc-5]: **UNSUPPORTED** — original: “Asian patients have higher RSV exposure and lower recommended starting doses.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “Expert review notes that heavy empirical scaling was tuned on training data, so mechanistic generalization is uncertain and the $K_i$ reductions are likely compensating for other model gaps.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “Postpartum overprediction implies the baseline model does not represent the pregnancy study population, so the ratio-based match could be partly fortuitous.” → correction: “Therefore, our PBPK model overpredicted these PK parameters in pregnancy as well as postpartum but was able to accurately capture the AUCR values”
[^fc-8]: **UNSUPPORTED** — original: “Use for other perpetrators, renal or hepatic impairment, or pediatric populations would require further verification.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “Future directions include obtaining Korean and Malay population data and Asian transporter abundance data to reduce Cmax underprediction.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “Future directions include integrating pregnancy physiology and hormone-based OATP1B1 downregulation to predict Cmax as well as AUC.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “Future directions include investigating why inhibitor $K_i$ values need reduction and extending the model to renal and hepatic impairment, pediatrics and other transporter substrates.” → correction: “The reason for this reduction is not known.”
[^fc-12]: **NUMERIC_MISMATCH** — original: “Even with proteomics-informed abundances, RSV required roughly 7-10-fold upscaling of hepatic uptake.” → correction: “the model required higher REF scalars (10 for OATP1B1 and 6.6 for the other uptake transporters) to adequately and simultaneously capture RSV plasma and hepatic concentrations”
[^fc-13]: **UNSUPPORTED** — original: “The 5-10-fold $K_i$ reductions for rifampin and cyclosporine are a recurring theme in OATP DDI modeling, usually pointing to unbound or hepatic inhibitor concentrations and metabolites.” → correction: “Others have also found that both drugs are more potent in vivo than in vitro [49-51] perhaps due to the presence of circulating metabolites that are also inhibitors.”
[^fc-14]: **UNSUPPORTED** — original: “The failure to match CmaxR hints at missing absorption or distribution features such as gastric emptying, bile flow, and hormone-related changes.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “This is described as the most comprehensive RSV PBPK model to date.” → correction: “While previously published PBPK models of RSV [23-27] have incorporated some of the above elements, none have included them all”

---

## 📊 Figures

![Drug transporters and metabolic enzymes governing the absorption, distribution, metabolism, and excretion of rosuvastatin (RSV). (A) In the intestinal enterocytes, RSV is]({{ site.baseurl }}/assets/digests/2026-11-19-rosuvastatin-pbpk-modeling-incorporating-liver-concentrations-and-effects-of/figures/fig_01.jpg)

![PBPK model-predicted and observed RSV plasma, RSV-lactone, RSV + RSV-lactone blood and hepatic concentration-time (C-T) profiles for the training datasets in the Caucasia]({{ site.baseurl }}/assets/digests/2026-11-19-rosuvastatin-pbpk-modeling-incorporating-liver-concentrations-and-effects-of/figures/fig_02.jpg)

![Simulated and observed plasma concentration-time (C-T) profiles of rosuvastatin (RSV) and RSV-lactone for the verification datasets in various ethnic populations. (A) Dos]({{ site.baseurl }}/assets/digests/2026-11-19-rosuvastatin-pbpk-modeling-incorporating-liver-concentrations-and-effects-of/figures/fig_03.jpg)

![Predicted and observed plasma concentration-time (C-T) profiles of rosuvastatin (RSV) in Caucasians with different OATP1B1 genotypes. Dose-normalized log transformed obse]({{ site.baseurl }}/assets/digests/2026-11-19-rosuvastatin-pbpk-modeling-incorporating-liver-concentrations-and-effects-of/figures/fig_04.jpg)

![Predicted and observed plasma concentration-time (C-T) profiles of rosuvastatin (RSV) in Caucasians with different BCRP genotypes. Dose-normalized log transformed observe]({{ site.baseurl }}/assets/digests/2026-11-19-rosuvastatin-pbpk-modeling-incorporating-liver-concentrations-and-effects-of/figures/fig_05.jpg)

![Simulated and observed plasma concentration-time (C-T) profiles of oral rosuvastatin (RSV) in the absence and presence of rifampin or cyclosporine A (Cys A) in the traini]({{ site.baseurl }}/assets/digests/2026-11-19-rosuvastatin-pbpk-modeling-incorporating-liver-concentrations-and-effects-of/figures/fig_06.jpg)

![Predicted ratio of RSV AUC (AUCR; A) and Cmax(CmaxR; B) in pregnancy (third trimester) and postpartum, at varying levels of the two most sensitive parameters influencing ]({{ site.baseurl }}/assets/digests/2026-11-19-rosuvastatin-pbpk-modeling-incorporating-liver-concentrations-and-effects-of/figures/fig_07.jpg)