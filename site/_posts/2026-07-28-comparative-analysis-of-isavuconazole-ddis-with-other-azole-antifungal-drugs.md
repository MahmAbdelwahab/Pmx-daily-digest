---
layout: post
title: "Comparative Analysis of Isavuconazole DDIs With Other Azole Antifungal Drugs and PBPK Model-Informed Dosing Recommendations for Anticancer Drugs"
date: 2026-07-28
authors: "Goosen TC, Wu X, Lin J, Cheruvu N, Raber SR, Novis de Figueiredo ML, Varma MVS"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025"
doi: "10.1002/psp4.70123"
paper_type: popk
tags: [popk, pbpk, oncology]
excerpt_text: "This paper uses PBPK modeling to compare the CYP3A DDI risk of isavuconazole with posaconazole and voriconazole, and provides dosing recommendations for co-administration with ibrutinib, venetoclax, and midostaurin.  Key finding: isavuconazole requires smaller dose reductions (50% for ibrutinib/midostaurin, 50–100% for venetoclax) than other azoles.  Essential reading for clinical pharmacologists, oncologists, and infectious disease specialists managing patients requiring both antifungal and anticancer therapy."
pdf_path: "/assets/digests/2026-07-28-comparative-analysis-of-isavuconazole-ddis-with-other-azole-antifungal-drugs/PMx_Comparative_Analysis_of_Isavuconazole_DD_20260728.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper uses PBPK modeling to compare the CYP3A DDI risk of isavuconazole with posaconazole and voriconazole, and provides dosing recommendations for co-administration with ibrutinib, venetoclax, and midostaurin.  Key finding: isavuconazole requires smaller dose reductions (50% for ibrutinib/midostaurin, 50–100% for venetoclax) than other azoles.  Essential reading for clinical pharmacologists, oncologists, and infectious disease specialists managing patients requiring both antifungal and anticancer therapy.

---

### Executive Summary
This study uses physiologically-based pharmacokinetic (PBPK) modeling to quantify and compare the CYP3A-mediated drug–drug interaction (DDI) risk of isavuconazole with other azole antifungals (posaconazole, voriconazole) and to provide dosing recommendations for co-administration with three anticancer drugs (ibrutinib, venetoclax, midostaurin).  The PBPK models, developed and verified in Simcyp using clinical DDI data with midazolam and ketoconazole, accurately predicted the moderate CYP3A inhibition by isavuconazole (AUCR ~2 for midazolam) and the stronger inhibition by posaconazole and voriconazole (AUCR 3–9).  Simulations predicted that isavuconazole increases exposure of ibrutinib, venetoclax, and midostaurin by 2.1-, 1.1-, and 2.1-fold, respectively, leading to recommended dose reductions of 50% for ibrutinib and midostaurin, and 50–100% for venetoclax.  These adjustments are substantially smaller than those required for posaconazole or voriconazole, positioning isavuconazole as a safer alternative in patients requiring antifungal therapy alongside CYP3A-metabolized anticancer agents.

---

### Scientific Context & Motivation
Invasive fungal infections are a major cause of morbidity and mortality in patients with hematologic malignancies, and azole antifungals are commonly used for prophylaxis and treatment.  However, azoles are known CYP3A inhibitors, and many targeted anticancer drugs (e.g., ibrutinib, venetoclax, midostaurin) are primarily cleared by CYP3A, creating a significant DDI risk.  Current prescribing information for isavuconazole lacks specific dosing guidance for co-administration with these newer anticancer agents.  This study fills that gap by providing a quantitative, model-informed assessment of DDI risk and dose adjustment recommendations, leveraging PBPK modeling as a regulatory-accepted tool to replace or supplement clinical DDI studies.

---

## ⚡ Methodological Snapshot
The study employed a DDI matrix approach using PBPK modeling in Simcyp (V22 R1).  Inhibitor models (isavuconazole, posaconazole, voriconazole, ketoconazole) were verified against clinical midazolam DDI data.  Substrate models (ibrutinib, venetoclax, midostaurin, midazolam) were verified by comparing simulated PK with observed data and by recovering the DDI with ketoconazole.  Verified models were then used to simulate untested DDIs between each azole and each anticancer drug at clinically relevant doses.  All simulations used a healthy volunteer population (10 trials × 10 individuals).  The primary endpoint was the AUCR (area under the curve ratio) for the substrate drug.

---

## 🏗️ Structural Model Breakdown
The PBPK models are whole-body physiologically-based models implemented in Simcyp.  Oral absorption is described using the ADAM (Advanced Dissolution, Absorption and Metabolism) model, which accounts for intestinal permeability, luminal degradation, and gut wall metabolism.  Distribution is described using a minimal PBPK model (perfusion-limited tissue distribution) with tissue:plasma partition coefficients predicted from physicochemical properties.  Elimination is primarily via hepatic CYP3A4/5 metabolism, described by Michaelis-Menten kinetics with a single enzyme.  For DDI simulations, reversible inhibition is modeled using the competitive inhibition equation, where the inhibition constant ($K_i$) and unbound inhibitor concentration at the enzyme site (liver and gut) determine the magnitude of interaction.  No time-dependent inhibition or induction was incorporated.  The models include first-order absorption and elimination, with no additional compartments beyond the standard PBPK structure.

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole-body PBPK models were built in Simcyp using the ADAM model for oral absorption and first-order elimination kinetics.  CYP3A-mediated metabolism was the primary clearance pathway for all compounds.  Reversible inhibition was modeled using unbound inhibitor concentrations at the liver and gut and in vitro $K_i$ values.  No time-dependent inhibition or induction was incorporated.

#### Data Sources
Model development used physicochemical properties, in vitro data (e.g., $K_i$ for CYP3A inhibition), and clinical PK data from published studies.  Verification used clinical DDI data for midazolam (CYP3A probe) with each azole, and for each anticancer drug with ketoconazole (index inhibitor).  All clinical data were extracted from the literature or the Drug Interaction Database (DIDB).

#### Estimation Methods
PBPK models were developed using the Simcyp Simulator (V22 R1).  Parameter values were derived from literature or in vitro experiments, not estimated via fitting to clinical data.  Simulations used the default Simcyp population library for healthy volunteers.

#### Model Evaluation
Model performance was assessed by comparing predicted vs. observed $C_{max}$ and $AUC_{last}$, with acceptance criteria of within 2-fold for substrate PK and within 0.80- to 1.25-fold for AUCR in DDI verification.  Visual predictive checks were performed by overlaying simulated and observed concentration–time profiles (Figures 2, 3, S2).

#### Covariate Analysis
No formal covariate analysis was performed; simulations were conducted in a healthy volunteer population with default Simcyp demographics (age 20–50, 1:1 sex ratio).  The impact of patient-specific factors (e.g., disease state, organ impairment) was not modeled but acknowledged as a limitation.

---

### Statistical Rigor Assessment
The study does not employ traditional statistical hypothesis testing; instead, it uses deterministic PBPK simulations with a virtual population to generate PK parameter distributions.  The acceptance criteria for model verification (within 2-fold for PK, within 0.80- to 1.25-fold for AUCR) are standard in PBPK modeling and consistent with regulatory expectations.  The use of 10 trials of 10 individuals each provides a reasonable assessment of inter-individual variability.  Sensitivity analyses were not explicitly reported, which is a limitation.  The authors appropriately acknowledge that simulations reflect a healthy population and may not fully capture variability in cancer patients.

---

## 📊 Key Findings
Isavuconazole is a moderate CYP3A inhibitor, producing an AUCR of ~2 for midazolam, compared to ~3–9 for posaconazole and voriconazole, and >10 for ketoconazole.  PBPK simulations predicted AUCR values of 2.1, 1.1, and 2.1 for ibrutinib, venetoclax, and midostaurin, respectively, when co-administered with isavuconazole at steady-state.  These results translate to recommended dose reductions of 50% for ibrutinib (280 mg QD) and midostaurin (50 mg BID), and 50–100% for venetoclax (200–400 mg QD).  In contrast, posaconazole and voriconazole require 3- to 6-fold lower doses of these anticancer drugs.  Isavuconazole showed minimal effects on CYP2C9, CYP2C19, CYP1A2, CYP2D6, and key transporters (OATP1B, P-gp, OAT), confirming its selective CYP3A inhibition profile.

---

## 💡 Clinical & Regulatory Implications
The PBPK simulations directly inform dosing recommendations for three anticancer drugs when co-administered with isavuconazole: ibrutinib (50% of normal dose, i.e., 280 mg QD for B-cell malignancies), venetoclax (50–100% of normal dose, i.e., 200–400 mg QD), and midostaurin (50% of normal dose, i.e., 50 mg BID).  These adjustments are less severe than those required for posaconazole or voriconazole, which necessitate 3- to 6-fold lower doses.  The findings are particularly relevant for patients with hematologic malignancies who require antifungal prophylaxis or treatment, as isavuconazole offers a reduced DDI burden.  The study also confirms that isavuconazole has minimal effects on CYP2C9, CYP2C19, CYP1A2, CYP2D6, and key transporters, further supporting its favorable DDI profile.  Clinicians should still exercise caution and monitor for adverse effects, especially in cancer patients where disease-related factors may alter PK.

---

### Strengths & Limitations

#### Strengths
- Comprehensive DDI matrix approach with systematic verification of both inhibitor and substrate models.
- Comparative analysis across three azoles provides clinically meaningful context for drug selection.
- Use of regulatory-accepted PBPK methodology (Simcyp) with standard verification criteria.
- Actionable dosing recommendations provided for three clinically important anticancer drugs.
- Clear presentation of model input parameters in supplementary tables enhances transparency.

#### Limitations (Acknowledged by Authors)
- Simulations reflect a healthy population and may not represent the clinical impact in cancer populations.
- Observed midostaurin DDI with itraconazole in AML patients was lower than predicted, suggesting patient-specific differences.
- Continued adverse effect monitoring is recommended based on disease severity and risk–benefit analysis.

#### Limitations (Expert Review)
- No formal sensitivity analysis was performed to assess the impact of parameter uncertainty on DDI predictions.
- The models assume reversible inhibition only; potential time-dependent inhibition or induction effects were not considered.
- The use of a commercial platform (Simcyp) with proprietary default models for some compounds limits full transparency and reproducibility.
- The impact of food, formulation, or dosing schedule on DDI magnitude was not explored.
- The venetoclax DDI prediction (AUCR 1.1) suggests minimal interaction, but the recommended dose range (50–100%) is broad and may require further refinement.

#### Generalizability
The PBPK models were developed and verified using healthy volunteer data, which may not fully represent cancer patients due to disease-related physiological changes (e.g., inflammation, hypoalbuminemia, organ dysfunction).  The authors acknowledge this and recommend continued monitoring.  The models are likely generalizable to other CYP3A-cleared drugs with similar fraction metabolized, but extrapolation to drugs with significant non-CYP3A clearance or transporter involvement would require additional verification.

---

---

### Figures & Tables

- **Figure 1**: Bar chart comparing AUC ratios (AUCR) for various substrate drugs across five azole inhibitors (isavuconazole, posaconazole, voriconazole, ketoconazole, itraconazole).
  - *Significance*: Provides a comprehensive visual comparison of DDI magnitude across azoles, clearly showing isavuconazole's weaker CYP3A inhibition relative to other agents.
- **Figure 2**: Observed vs. predicted plasma concentration–time profiles for isavuconazole after multiple oral doses (100 mg LD/50 mg QD and 200 mg LD/100 mg QD).
  - *Significance*: Validates the isavuconazole PBPK model's ability to describe its own PK across clinically relevant dosing regimens.
- **Figure 3**: PBPK-simulated vs. observed plasma concentration–time profiles for midazolam, ibrutinib, venetoclax, and midostaurin when co-administered with (A) ketoconazole, (B) isavuconazole, (C) posaconazole, and (D) voriconazole.
  - *Significance*: Demonstrates the predictive performance of the DDI models for all inhibitor–substrate pairs, supporting the reliability of untested scenario simulations.
- **Table 1**: Observed and predicted $C_{max}$ and $AUC_{last}$ for isavuconazole at two dose levels across multiple days, with observed-to-predicted accuracy ratios.
  - *Significance*: Quantifies the isavuconazole model's accuracy, with most predictions within $\pm 25\%$ of observed values.
- **Table 2**: Observed and predicted $C_{max}$, $AUC_{last}$, and AUCR for midazolam (inhibitor verification) and for ibrutinib, venetoclax, and midostaurin (substrate verification) with ketoconazole.
  - *Significance*: Provides the quantitative basis for model verification, showing that predicted AUCR values are within acceptable fold-error (0.80–1.53) of observed clinical DDI data.
- **Table 3**: Predicted AUCR values for midazolam, ibrutinib, venetoclax, and midostaurin when co-administered with ketoconazole, isavuconazole, posaconazole, or voriconazole.
  - *Significance*: Central results table showing the predicted DDI magnitude for all inhibitor–substrate combinations, directly informing dose adjustment recommendations.
- **Table 4**: Dosing recommendations for ibrutinib, venetoclax, and midostaurin when co-administered with isavuconazole, posaconazole (two dose levels), and voriconazole, including fraction of normal dose and specific dose amounts.
  - *Significance*: Provides actionable, model-informed dosing guidance for clinicians, directly translating PBPK predictions into clinical practice.

---

### Code & Reproducibility Assessment
The study used the Simcyp PBPK Simulator (Version 22, release 1), a commercial platform.  Model input parameters are provided in supplementary tables (Tables S1, S3, S4), but the actual model files are not publicly available.  The analysis is reproducible in principle with access to Simcyp and the reported parameter values.

---

### Supplementary Materials
Supplementary materials include Table S1 (isavuconazole PBPK model parameters), Table S2 (isavuconazole DDI with ketoconazole/rifampicin), Table S3 (inhibitor model parameters for ketoconazole, posaconazole, voriconazole, rifampicin), Table S4 (substrate model parameters for midazolam, ibrutinib, venetoclax, midostaurin), Figure S1 (isavuconazole chemical structure), and Figure S2 (isavuconazole PK with and without modulators).  These tables provide the key input parameters necessary for model reproduction.

---

### Future Directions
Future research should validate these PBPK-based dosing recommendations in prospective clinical studies, particularly in cancer patients where disease-related factors (e.g., inflammation, hypoalbuminemia, organ dysfunction) may alter PK and DDI magnitude.  The models could be extended to other CYP3A-cleared anticancer drugs (e.g., acalabrutinib, glasdegib) and to special populations such as pediatrics or hepatic impairment.  Additionally, incorporating time-dependent inhibition or induction effects, if any, could refine predictions for longer-term co-administration.  Finally, the comparative PBPK framework could be applied to other therapeutic areas where azole antifungals are co-prescribed with CYP3A substrates.

---

### Expert Commentary
This paper exemplifies the mature application of PBPK modeling in regulatory and clinical decision-making.  The DDI matrix approach—first verifying inhibitor models against a sensitive CYP3A probe (midazolam) and substrate models against a strong index inhibitor (ketoconazole)—is a best practice that builds confidence in untested scenarios.  The key strength is the comparative analysis across three azoles, which clearly demonstrates that isavuconazole's weaker inhibition translates into clinically meaningful differences in dose adjustment requirements.  From a teaching perspective, the study underscores that the magnitude of a DDI is driven by the product of inhibitor potency ($K_i$) and unbound concentration at the enzyme site, not just the inhibitor's classification as 'moderate' or 'strong'.  A limitation worth noting is the reliance on healthy volunteer data for model verification; cancer patients may exhibit altered physiology (e.g., hypoalbuminemia, inflammation) that could affect unbound drug concentrations and DDI magnitude.  The authors acknowledge this and appropriately recommend continued monitoring.  The use of a commercial platform (Simcyp) with proprietary default models for some compounds (e.g., ketoconazole, rifampicin) limits full transparency, but the provision of key input parameters in supplementary tables is commendable.  Overall, this work is a strong example of model-informed drug development that can directly impact patient care.

---

### Bottom Line
Isavuconazole is a weaker CYP3A inhibitor than posaconazole or voriconazole, enabling smaller dose reductions for co-administered CYP3A-cleared anticancer drugs.  PBPK modeling supports a 50% dose reduction for ibrutinib and midostaurin, and 50–100% of the normal dose for venetoclax when given with isavuconazole.  This work provides a quantitative framework for managing azole–oncology DDIs and highlights isavuconazole as a safer alternative when CYP3A interactions are a concern.

---

---

## 📊 Figures

![Drug–drug interactions perpetrated by isavuconazole, posaconazole, voriconazole, ketoconazole, and itraconazole. AUC ratios (AUCR) of substrates are presented. C]({{ site.baseurl }}/assets/digests/2026-07-28-comparative-analysis-of-isavuconazole-ddis-with-other-azole-antifungal-drugs/figures/fig_01.jpg)

![PBPK model predictions of isavuconazole plasma concentration–time profiles following oral administration of (A) 100 mg loading dose followed by 50 mg QD equivale]({{ site.baseurl }}/assets/digests/2026-07-28-comparative-analysis-of-isavuconazole-ddis-with-other-azole-antifungal-drugs/figures/fig_02.jpg)

![PBPK simulations of midazolam, ibrutinib, venetoclax and midostaurin DDIs with (A) ketoconazole, (B) isavuconazole, (C) posaconazole, and (D) voriconazole as inh]({{ site.baseurl }}/assets/digests/2026-07-28-comparative-analysis-of-isavuconazole-ddis-with-other-azole-antifungal-drugs/figures/fig_03.jpg)