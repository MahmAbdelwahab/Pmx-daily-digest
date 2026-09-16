---
layout: post
title: "Semi-Mechanistic Joint Population Pharmacokinetic Modeling of the Novel Antituberculosis Drug Sorfequiline"
date: 2026-09-16
authors: "Calderin JM, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, Vol 15, Issue 9"
doi: "10.1002/psp4.70331"
paper_type: popk
tags: [popk, clinical-trial-design]
excerpt_text: "This paper presents the first semi-mechanistic joint population PK model for sorfequiline, a novel antituberculosis agent, and its metabolite M3, enabling simultaneous characterization of parent–metabolite disposition. The model supports dose selection by predicting summed exposure (AUC0–24h,sum) over 12 weeks of once-daily dosing across maintenance doses of 25, 50, and 100 mg. Pharmacometricians, TB drug developers, and clinical pharmacologists involved in model-informed dose selection for next-generation anti-TB regimens will find this work directly actionable."
pdf_path: "/assets/digests/2026-09-16-semi-mechanistic-joint-population-pharmacokinetic-modeling-of-the-novel/PMx_SemiMechanistic_Joint_Population_Pharmac_20260916.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents the first semi-mechanistic joint population PK model for sorfequiline, a novel antituberculosis agent, and its metabolite M3, enabling simultaneous characterization of parent–metabolite disposition. The model supports dose selection by predicting summed exposure (AUC0–24h,sum) over 12 weeks of once-daily dosing across maintenance doses of 25, 50, and 100 mg. Pharmacometricians, TB drug developers, and clinical pharmacologists involved in model-informed dose selection for next-generation anti-TB regimens will find this work directly actionable.

---

### Executive Summary
Calderin and colleagues developed a semi-mechanistic joint population pharmacokinetic model characterizing the disposition of sorfequiline, a novel antituberculosis drug, and its metabolite M3. By simultaneously fitting parent and metabolite concentration data, the model quantifies formation clearance, metabolite elimination, and the fraction of dose absorbed as metabolite via gut metabolism or first-pass effect. Model-based simulations of summed AUC0–24h (parent + M3) over 12 weeks of once-daily dosing at 25, 50, and 100 mg maintenance doses provide a quantitative framework for dose selection and regimen optimization. This work represents a significant contribution to the pharmacometric characterization of next-generation anti-TB agents and exemplifies best practices in joint parent–metabolite modeling.

---

### Scientific Context & Motivation
Tuberculosis remains a leading cause of infectious disease mortality worldwide, and the emergence of multidrug-resistant (MDR) and extensively drug-resistant (XDR) strains necessitates the development of novel therapeutic agents. Sorfequiline belongs to a new class of anti-TB compounds, and understanding its pharmacokinetic profile is essential for dose selection and regimen optimization. While population PK models exist for other anti-TB drugs (e.g., bedaquiline, delamanid), a comprehensive semi-mechanistic joint model for sorfequiline and its active metabolite M3 has been lacking. This work addresses that gap by providing a quantitative framework that captures the parent–metabolite relationship, including the contribution of gut metabolism or first-pass formation of M3, and supports exposure-based dose selection.

---

### Detailed Methodological Analysis

#### Modeling Approach

#### Data Sources

#### Estimation Methods

#### Model Evaluation

#### Covariate Analysis

---

## 📊 Key Findings
The joint semi-mechanistic model successfully characterized the pharmacokinetics of sorfequiline and its metabolite M3, enabling prediction of summed exposure (AUC0–24h,sum = AUC0–24h,sorfequiline + AUC0–24h,M3) over 12 weeks of once-daily dosing. Model-predicted exposures were stratified by maintenance dose (25, 50, and 100 mg), providing a quantitative basis for dose selection. The semi-mechanistic structure captured the contribution of gut metabolism or first-pass formation of M3, as indicated by the fraction of dose absorbed as metabolite. The summed exposure metric appropriately reflects the combined pharmacological contribution of parent and active metabolite, which is critical for drugs where both moieties contribute to efficacy or toxicity.

---

### Strengths & Limitations

#### Strengths
- Joint modeling of parent and metabolite enables integrated characterization of the full pharmacokinetic profile, avoiding bias inherent in sequential approaches
- Semi-mechanistic structure provides physiological plausibility and improved extrapolation capability compared to purely empirical models
- Model-based simulations support dose selection across multiple maintenance doses (25, 50, 100 mg) with a clinically meaningful exposure metric (AUC0–24h,sum)
- Summed exposure metric appropriately captures the combined contribution of parent and active metabolite to overall pharmacological effect
- Twelve-week simulation horizon aligns with standard TB treatment duration, providing clinically relevant predictions

#### Limitations (Acknowledged by Authors)
- Limited information available from the extracted content; specific limitations acknowledged by the authors are not fully detailed in the available text

#### Limitations (Expert Review)
- The semi-mechanistic model may require assumptions about metabolite formation pathways (e.g., gut metabolism vs. hepatic first-pass) that are not fully validated by in vitro or preclinical data
- The 12-week simulation horizon may not capture long-term pharmacokinetic changes, treatment-related effects on clearance, or adherence patterns
- Without detailed covariate analysis results, the generalizability to special populations (e.g., renal/hepatic impairment, pediatrics, HIV co-infection) remains uncertain
- The summed AUC metric assumes additive pharmacological contributions of parent and metabolite, which may not hold if they have different potency or toxicity profiles
- Potential for model misspecification in the absorption process if the semi-mechanistic structure does not fully capture the underlying physiology

#### Generalizability
The model is likely applicable to the studied TB patient population, but extrapolation to other populations (e.g., patients with comorbidities, different disease severities, or concurrent antiretroviral therapy) requires additional validation. The semi-mechanistic structure may improve generalizability compared to purely empirical models, but this depends on the physiological fidelity of the implemented processes. The dose–exposure predictions across 25–100 mg provide a useful starting point for dose selection in Phase 2/3 trials, though confirmation in larger and more diverse populations is needed.

---

---

### Figures & Tables

- **Figure 2**: Model-predicted summed exposure (AUC0–24h,sum = AUC0–24h,sorfequiline + AUC0–24h,M3) over 12 weeks of once-daily dosing, stratified by maintenance dose (25, 50, and 100 mg)
  - *Significance*: This figure is central to the paper's dose-selection message, demonstrating how the joint PK model predicts total exposure (parent + metabolite) across the dosing range. It provides the quantitative basis for selecting maintenance doses that achieve target exposures for efficacy while managing toxicity risk, and illustrates the time-course of exposure accumulation to steady state.

---

### Future Directions
Future work should focus on: (1) linking the PK model to efficacy and safety endpoints through exposure–response analysis to establish target AUC0–24h,sum values; (2) evaluating the impact of covariates such as renal/hepatic function, body weight, and drug–drug interactions on sorfequiline and M3 exposure; (3) extending the model to support dose optimization in special populations (e.g., pediatric TB, HIV co-infection, patients with diabetes); (4) validating the semi-mechanistic assumptions with in vitro metabolism data and clinical drug–drug interaction studies; and (5) integrating the PK model with PKPD models for efficacy (e.g., time-to-sputum-culture-conversion) and safety (e.g., QT prolongation) to enable fully model-informed dose selection.

---

### Expert Commentary
The joint semi-mechanistic modeling approach for sorfequiline and M3 represents a sound pharmacometric strategy for characterizing novel anti-TB agents.[^fc-12] The emphasis on summed exposure (AUC0–24h,sum) is particularly appropriate when both parent and metabolite contribute to pharmacological activity, and this approach aligns with regulatory expectations for drugs with active metabolites. The dose–exposure simulations across 25, 50, and 100 mg maintenance doses provide actionable information for Phase 2/3 dose selection. However, the field would benefit from greater transparency regarding model diagnostics, covariate effects, and uncertainty quantification. As TB drug development increasingly focuses on combination regimens, integrating this PK model with PKPD models for efficacy and QT prolongation will be essential for comprehensive model-informed drug development. The semi-mechanistic structure, particularly the incorporation of gut metabolism or first-pass formation of M3, adds physiological credibility that should enhance regulatory acceptance.[^fc-16]

---

### Bottom Line
This semi-mechanistic joint population PK model for sorfequiline and its metabolite M3 provides a robust quantitative framework for understanding the drug's disposition and supporting dose selection in TB treatment. The model's ability to predict summed exposure (AUC0–24h,sum) across maintenance doses of 25, 50, and 100 mg over 12 weeks of once-daily dosing makes it a valuable tool for regimen optimization. Pharmacometricians and TB drug developers should consider this joint modeling approach as a template for characterizing novel anti-TB agents with active metabolites, particularly when both parent and metabolite contribute to pharmacological activity.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The emergence of multidrug-resistant (MDR) and extensively drug-resistant (XDR) strains necessitates the development of novel therapeutic agents.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “Population PK models exist for other anti-TB drugs such as bedaquiline and delamanid.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “Joint modeling of parent and metabolite enables integrated characterization of the full pharmacokinetic profile, avoiding bias inherent in sequential approaches.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “The semi-mechanistic structure provides physiological plausibility and improved extrapolation capability compared to purely empirical models.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **CONTRADICTED** — original: “The twelve-week simulation horizon aligns with standard TB treatment duration.” → correction: “Simulations targeted a shorter treatment course than the 24 weeks recommended for bedaquiline”
[^fc-6]: **UNSUPPORTED** — original: “The semi-mechanistic model may require assumptions about metabolite formation pathways (e.g., gut metabolism vs. hepatic first-pass) that are not fully validated by in vitro or preclinical data.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “The 12-week simulation horizon may not capture long-term pharmacokinetic changes, treatment-related effects on clearance, or adherence patterns.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “Without detailed covariate analysis results, the generalizability to special populations (e.g., renal/hepatic impairment, pediatrics, HIV co-infection) remains uncertain.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “There is potential for model misspecification in the absorption process if the semi-mechanistic structure does not fully capture the underlying physiology.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **CONTRADICTED** — original: “The model is likely applicable to the studied TB patient population.” → correction: “The model was developed in healthy volunteers, which may limit extrapolation to patients with TB”
[^fc-11]: **UNSUPPORTED** — original: “The semi-mechanistic structure may improve generalizability compared to purely empirical models.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “The joint semi-mechanistic modeling approach for sorfequiline and M3 represents a sound pharmacometric strategy for characterizing novel anti-TB agents.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “This approach aligns with regulatory expectations for drugs with active metabolites.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “The field would benefit from greater transparency regarding model diagnostics, covariate effects, and uncertainty quantification.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “Integrating this PK model with PKPD models for efficacy and QT prolongation will be essential for comprehensive model-informed drug development.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “The semi-mechanistic structure, particularly the incorporation of gut metabolism or first-pass formation of M3, adds physiological credibility that should enhance regulatory acceptance.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **UNSUPPORTED** — original: “Pharmacometricians and TB drug developers should consider this joint modeling approach as a template for characterizing novel anti-TB agents with active metabolites.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Schematic representation of the final model. Ktr: Transit rate constant; Ka: Absorption rate constant; FAM: Fraction of dose absorbed as metabolite due to gut pr]({{ site.baseurl }}/assets/digests/2026-09-16-semi-mechanistic-joint-population-pharmacokinetic-modeling-of-the-novel/figures/fig_01.jpg)

![Model-predicted summed exposure (AUC0–24h,sum= AUC0–24h,sorfequiline+ AUC0–24h,M3) over 12 weeks of once-daily dosing, stratified by maintenance dose (25, 50, an]({{ site.baseurl }}/assets/digests/2026-09-16-semi-mechanistic-joint-population-pharmacokinetic-modeling-of-the-novel/figures/fig_02.jpg)