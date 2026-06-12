---
layout: post
title: "Population Pharmacokinetics and Exposure-Response Analyses for Telisotuzumab Vedotin in Patients With c-Met Protein Overexpressing Tumors"
date: 2026-05-28
authors: "Babel H, Brunsdon P, Sharma V, Engelhardt B, Rackauckas C, Mensing S, Mensing R, Pierce A, et al."
journal: "Clinical Pharmacology & Therapeutics, likely 2025 (PMCID: N/A from PubMed listing)"
doi: "N/A"
paper_type: popk
tags: [popk, dose-response, covariate-analysis, regulatory]
excerpt_text: "This paper presents the foundational population PK and exposure-response (ER) analyses supporting the FDA accelerated approval of Telisotuzumab vedotin (Teliso-V) in c-Met overexpressing NSCLC. Key findings demonstrate that efficacy (ORR, PFS, OS) is driven by Teliso-V conjugate exposure, while some key toxicities (peripheral neuropathy, corneal events) correlate with conjugate exposure and overall grade $\\ge 3$ TEAEs correlate with unconjugated MMAE payload exposure. No covariate warrants dose adjustment, confirming $1.9$ $mg/kg$ Q2W as the optimal benefit-risk dose."
pdf_path: "/assets/digests/2026-05-28-population-pharmacokinetics-and-exposure-response-analyses-for-telisotuzumab/PMx_Population_Pharmacokinetics_and_Exposure_20260528.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents the foundational population PK and exposure-response (ER) analyses supporting the FDA accelerated approval of Telisotuzumab vedotin (Teliso-V) in c-Met overexpressing NSCLC. Key findings demonstrate that efficacy (ORR, PFS, OS) is driven by Teliso-V conjugate exposure, while some key toxicities (peripheral neuropathy, corneal events) correlate with conjugate exposure and overall grade $\ge 3$ TEAEs correlate with unconjugated MMAE payload exposure. No covariate warrants dose adjustment, confirming $1.9$ $mg/kg$ Q2W as the optimal benefit-risk dose.

---

### Executive Summary
This comprehensive pharmacometric analysis integrates data from $304$ patients across Phase 1 and pivotal Phase 2 (LUMINOSITY) trials to characterize the PK of the c-Met-targeting ADC Teliso-V and its MMAE payload. A two-compartment model for the conjugate and a one-compartment model with first-order deconjugation for MMAE adequately described the data. While body weight, albumin, race, and ADA status statistically significantly influence conjugate clearance, the exposure changes are not clinically relevant (generally $<25\%$ change except in a small Black subgroup). Critically, ER analyses conclusively link higher conjugate $C_{avg}$ and $C_{min}$ to improved ORR, PFS, and OS, while higher conjugate and payload exposures drive peripheral neuropathy, corneal epitheliopathy, and overall severe TEAEs. Model-based simulations confirm that the $1.9$ $mg/kg$ Q2W regimen maximizes the efficacy-safety trade-off, supporting the label dose.

---

### Scientific Context & Motivation
c-Met overexpression occurs in $\sim 25\%$ of non-squamous EGFR wild-type NSCLC and is associated with poor prognosis. While MET exon 14 skipping mutations are targetable with TKIs, no approved therapies previously targeted c-Met overexpression. Teliso-V is a first-in-class ADC delivering MMAE to c-Met+ cells. This analysis addresses critical gaps: (1) the population PK properties of a c-Met ADC, (2) identification of covariates affecting ADC and payload exposure, and (3) rigorous ER characterization to justify the Phase 2 dosing regimen in the absence of a randomized dose-finding study. It also disentangles the differential contribution of the intact ADC and free payload to efficacy versus toxicity, a key theme in modern ADC development.

---

## ⚡ Methodological Snapshot
The analysis employed sequential population PK modeling of Teliso-V conjugate (2-compartment) and unconjugated MMAE (1-compartment with first-order formation) using NONMEM 7.5.1. Covariate effects were screened via stepwise regression with PsN. Individual post-hoc PK exposures were then used in ER analyses for efficacy (ORR, PFS, OS) and safety (neuropathy, corneal events) using logistic and Cox proportional hazards models in R. The benefit-risk of $1.6$ vs $1.9$ $mg/kg$ Q2W was assessed through Monte Carlo simulations that incorporated both interindividual exposure variability and parameter uncertainty from the ER models.

---

## 🏗️ Structural Model Breakdown
The conjugate PK model is a two-compartment model with first-order elimination from the central compartment. Parameters include clearance ($CL$), central volume ($V_c$), peripheral volume ($V_p$), and intercompartmental clearance ($Q$). The unconjugated MMAE model is a one-compartment model where the input rate is a first-order process ($k_a$) scaling with the amount of conjugate in the central compartment, reflecting systemic deconjugation; MMAE is eliminated linearly with rate $CONJ\_CLM/V_m$. No target-mediated drug disposition or non-linear components were identified for the conjugate. The model captures the characteristic profile of an ADC: the antibody component has a longer half-life, while the cytotoxic payload is released and eliminated more rapidly.

---

### Detailed Methodological Analysis

#### Modeling Approach
A sequential approach: first, independent non-linear mixed effects models were developed for Teliso-V conjugate and unconjugated MMAE payload. The conjugate was described by a two-compartment model with linear elimination; MMAE was described by a one-compartment model with first-order release from the conjugate ($k_a$) and linear elimination. Interindividual variability was modeled assuming log-normal distributions. Residual error was a combined additive and proportional model. Non-linear clearance for the conjugate was tested but not supported.

#### Data Sources
Pooled data from two trials: a Phase 1 dose-escalation/expansion study ($N=35$, various solid tumors, rich PK sampling for Q2W and Q3W regimens, dose range $0.15-3.3$ $mg/kg$) and the LUMINOSITY Phase 2 study ($N=269$, non-squamous NSCLC with c-Met overexpression, sparse PK sampling at $1.6$ or $1.9$ $mg/kg$ Q2W). PK samples assayed for total conjugate and free MMAE. Efficacy analysis subset: $193$ EGFR wild-type non-squamous NSCLC patients from Phase 2. Safety analysis: $284$ patients from both trials.

#### Estimation Methods
Population PK: First-Order Conditional Estimation with Interaction (FOCEI) in NONMEM 7.5.1. Covariate model building was automated using stepwise forward addition ($p < 0.01$) and backward elimination ($p < 0.001$) in Perl-speaks-NONMEM (PsN 5.3.1). ER models: parameters estimated by maximum likelihood using R 4.3.1 for logistic regression and partial likelihood for Cox proportional hazards models.

#### Model Evaluation
PK models were evaluated via standard goodness-of-fit plots (observed vs. population/individual predicted, CWRES), and prediction-corrected visual predictive checks (pcVPCs, $500$ replicates) stratified by dosing frequency. Shrinkage was low ($<20\%$) for key PK parameters. ER logistic models were assessed by overlaying observed response rates by exposure quartile. Cox models were evaluated with log-minus-log survival plots.

#### Covariate Analysis
Covariate selection for PK used stepwise covariate modeling (SCM) in PsN testing body weight, age, sex, race, renal/hepatic function, albumin, ADA status, and ECOG performance. Significant covariates were incorporated via power models (continuous) or proportional factors (categorical). For ER, the same SCM approach was used on the logistic/Cox models if the exposure term was significant. Final models for safety/efficacy included only exposure metrics; no covariates were retained.

---

### Statistical Rigor Assessment
The population PK modeling is rigorous and follows regulatory standards (FOCEI, PsN SCM, bootstrap or asymptotic SE reporting, VPC diagnostics). The use of a stepwise approach with appropriately stringent $p$-value thresholds limits false positive covariate inclusions. The ER analyses correctly address multiple endpoint types (binary with logistic, time-to-event with Cox) and the practice of associating average exposure over the event period reflects clinical reality for cumulative toxicity. However, the ER analyses do not mention internal validation procedures beyond quartile goodness-of-fit; no bootstrapping or cross-validation of the logistic models is described, and the potential for overfitting with multiple exposure metrics is not addressed. Shrinkage of individual PK parameters was low, lending credence to the post-hoc estimates used in ER models. The use of $95\%$ $CI$s from simulation incorporates both PK variability and ER parameter uncertainty, a robust approach for dose comparison.

---

## 📊 Key Findings
1) Teliso-V conjugate follows linear, two-compartment PK; MMAE payload follows one-compartment PK with first-order release from the conjugate. 2) Body weight, albumin, ADA, and race (Black/African American) are statistically significant covariates on conjugate $CL$, but effects on steady-state $AUC$ and $C_{max}$ are mostly within $25\%$ and deemed not clinically relevant. 3) Higher conjugate $C_{avg}$, $C_{avg,C1}$, and $C_{min}$ are strongly correlated with higher ORR ($p < 0.001$), longer PFS, OS, and DoR; payload exposure does not predict efficacy. 4) Higher conjugate exposure predicts increased grade $\ge 2/\ge 3$ peripheral neuropathy and grade $\ge 2$ corneal epitheliopathy; higher MMAE payload exposure predicts grade $\ge 3$ TEAEs. 5) Simulation-based predictions show $1.9$ $mg/kg$ Q2W yields an ORR of $31.4\%$ vs $22.2\%$ for $1.6$ $mg/kg$, with manageable increases in key toxicities, thus confirming the optimal benefit-risk profile.

---

## 💡 Clinical & Regulatory Implications
The analyses directly support the FDA label for Teliso-V: $1.9$ $mg/kg$ Q2W (max $190$ $mg$ for $\ge 100$ $kg$) in adults with locally advanced/metastatic non-squamous NSCLC with high c-Met overexpression. No dose adjustments are required for mild/moderate renal impairment, mild hepatic impairment, age, sex, or ADA status. Clinicians should note that higher ADC exposures predict both greater efficacy and risk of peripheral neuropathy and corneal events. The identified relationship between MMAE payload exposure and severe TEAEs reinforces the need to manage classic MMAE-related toxicities (e.g., myelosuppression) via dose holds and reductions, as implemented in the trial. The therapeutic window is relatively wide, but the $1.9$ $mg/kg$ dose provides a clear survival benefit over the $1.6$ $mg/kg$ dose, making it the appropriate standard.

---

### Strengths & Limitations

#### Strengths
- Leverages pooled data from Phase 1 (dose-escalation, rich sampling) and pivotal Phase 2 (sparse sampling, target population) trials, maximizing statistical power.
- Clear, stepwise covariate modeling using PsN with appropriate forward inclusion ($\alpha=0.01$) and backward elimination ($\alpha=0.001$) criteria.
- Comprehensive ER analysis extending beyond ORR to time-to-event endpoints (PFS, OS) using Kaplan-Meier and Cox proportional hazards models by exposure quartile.
- Model-based simulations integrating both PK variability and parameter uncertainty to robustly compare predicted safety/efficacy across doses.
- Clinically relevant dissection of ADC vs. payload exposure drivers for distinct toxicity profiles (on-target neurotoxicity linked to ADC, off-target TEAEs linked to payload).

#### Limitations (Acknowledged by Authors)
- Limited sample size for the $1.6$ $mg/kg$ cohort ($N=25$) compared to $1.9$ $mg/kg$ ($N=168$), and non-randomized dose allocation, introducing potential confounding in dose comparison.
- Small number of Black/African American patients ($N=8$) limits conclusions on the $\sim 56\%$ $AUC$ increase observed in this subgroup.
- Very few patients with severe renal impairment ($N=2$) or moderate/severe hepatic impairment, so PK in these populations remains uncharacterized.
- One patient had PK data imputed using population parameters due to early discontinuation before PK sampling.

#### Limitations (Expert Review)
- The ER analyses used post-hoc individual exposure estimates, which are subject to shrinkage ($\sim 4-13\%$ for conjugate PK), though this is minor and unlikely to bias regression slopes severely.
- Covariate analysis on ER models did not identify any significant covariates, but the study may be underpowered to detect clinically meaningful effect modifiers in safety (e.g., age on neuropathy risk).
- The analysis pools safety data across Phase 1 (multiple solid tumors) and Phase 2 (NSCLC only); disease-specific safety susceptibility might be masked.
- ADC deconjugation was modeled as a single first-order rate ($k_a$) for MMAE appearance; a more mechanistic model might distinguish systemic vs. intracellular/tumor MMAE release, which could refine ER understanding.

#### Generalizability
Results are directly generalizable to c-Met overexpressing ($\ge 25\%$ $3+$ staining) patients with non-squamous EGFR wild-type NSCLC, the approved indication. Caution is needed in extrapolating to other tumor types, severe organ impairment, or racial subgroups underrepresented in the analysis. The $1.9$ $mg/kg$ capped at $190$ $mg$ for $\ge 100$ $kg$ strategy is well supported.

---

### Key Equations

**Conjugate Model: Two-Compartment Linear Elimination**

{% raw %}
$$
\frac{dA_c}{dt} = -\left(\frac{CL}{V_c} + \frac{Q}{V_c}\right) \cdot A_c + \frac{Q}{V_p} \cdot A_p
$$
{% endraw %}

The structural model for Teliso-V conjugate PK, where $A_c$ and $A_p$ are amounts in central and peripheral compartments, $CL$ is systemic clearance, $Q$ is intercompartmental clearance, and $V_c$, $V_p$ are volumes.

**Unconjugated MMAE Model: One-Compartment with First-Order Deconjugation**

{% raw %}
$$
\frac{dA_m}{dt} = k_a \cdot A_{\text{conjugate}} - \frac{CL_m}{V_m} \cdot A_m
$$
{% endraw %}

Describes MMAE payload PK, where $A_m$ is the amount of free MMAE, $k_a$ is the first-order rate constant for MMAE release from the conjugate, $A_{\text{conjugate}}$ is the amount of conjugate, and $CL_m/V_m$ is the elimination rate of free MMAE.

**Covariate Effect on Clearance (Power Model)**

{% raw %}
$$
CL = CL_{\text{pop}} \times \left(\frac{WT}{70}\right)^{\theta_{WT}} \times \left(\frac{ALB}{4}\right)^{\theta_{ALB}} \times e^{\eta_{CL}}
$$
{% endraw %}

Example of the continuous covariate model used for the effect of body weight ($WT$, $kg$) and baseline albumin ($ALB$, $g/dL$) on conjugate clearance, with population estimate $CL_{\text{pop}}$ and inter-individual variability $\eta_{CL}$.

**Logistic Regression for Exposure-Response (ORR)**

{% raw %}
$$
\text{logit}(\mathbb{P}[ORR=1]) = \alpha + \beta \cdot \log(C_{\text{avg}})
$$
{% endraw %}

The linear logistic model linking the probability of objective response to log-transformed Teliso-V conjugate average concentration $C_{\text{avg}}$; a significant positive $\beta$ indicates higher exposure yields higher response probability.

**Cox Proportional Hazards for PFS and OS**

{% raw %}
$$
h(t) = h_0(t) \times \exp(\beta \cdot C_{\text{avg}, C1})
$$
{% endraw %}

Exposure-response model for time-to-event endpoints, where hazard is a function of baseline hazard $h_0(t)$ and the covariate cycle 1 average conjugate concentration $C_{\text{avg}, C1}$.

---

### Figures & Tables

- **Figure 1**: Forest plots showing the geometric mean ratio and $95\%$ $CI$ for Teliso-V conjugate (A) and unconjugated MMAE (B) $C_{max}$ and $AUC_{\tau}$ across significant covariates (e.g., race, ADA, albumin, renal function).
  - *Significance*: Visually demonstrates that while some covariates are statistically significant, the effect sizes remain within the default $80-125\%$ bioequivalence boundaries, supporting a flat-dosing approach.
- **Figure 2**: Logistic regression of ORR vs. Teliso-V conjugate $C_{avg}$, with observed quartile data overlaid, showing a strong positive correlation ($p < 0.0001$).
  - *Significance*: The pivotal evidence that efficacy is a function of ADC exposure, directly linking PK to clinical benefit and justifying the selected dose.
- **Figure 3**: Kaplan-Meier plots for DoR, PFS, and OS stratified by Teliso-V conjugate $C_{avg,C1}$ quartiles, with tables of patients at risk.
  - *Significance*: Extends the ER evidence beyond ORR to time-to-event analyses, showing exposure-dependent separation in long-term survival outcomes.
- **Figure 4**: Logistic regression showing the relationship between Teliso-V conjugate $C_{avg}$ and probability of grade $\ge 3$ peripheral neuropathy and grade $\ge 2$ corneal epitheliopathy.
  - *Significance*: Identifies the key dose-limiting toxicities linked to ADC exposure, crucial for clinical management and dose interruption strategies.
- **Figure 5**: Logistic regression showing the relationship between unconjugated MMAE $C_{avg}$ and probability of grade $\ge 3$ TEAEs.
  - *Significance*: Highlights the differential toxicity driver, confirming that payload exposure governs overall severe adverse event risk, aligning with known MMAE class effects.
- **Table 1**: Simulation-based comparison of predicted efficacy (ORR) and safety (grade $\ge 3$ PN, grade $\ge 2$ corneal epitheliopathy) outcomes for $1.6$ $mg/kg$ vs $1.9$ $mg/kg$ Q2W.
  - *Significance*: Quantitatively justifies the $1.9$ $mg/kg$ dose by showing a $9\%$ absolute improvement in ORR at the cost of only modestly increased toxicities, a clear benefit-risk trade-off.
- **Table S7**: Parameter estimates and relative standard errors for the final Teliso-V conjugate and MMAE population PK models.
  - *Significance*: Provides the actual PK parameter values for clearance, volumes, interindividual variability, and residual error used in simulations, essential for replicability.

---

### Supplementary Materials
The online supplementary materials include detailed study design schemas (Table S1), lists of covariates screened (Tables S2-S3), full demographic tables (Tables S4-S6), a structural model schematic (Figure S1), diagnostic plots (GOF Figures S2-S3), stratified VPCs (Figures S4-S5), and tables of final parameter estimates (Table S7). These confirm model adequacy and provide transparency required for regulatory review.

---

### Future Directions
1) Validation of the ER model in an independent, randomized patient cohort, such as the ongoing Phase 3 confirmatory trial. 2) Exploration of time-varying covariates and exposure-safety relationships using time-to-event ER models rather than end-of-treatment logistic regression to account for cumulative ADC exposure. 3) Incorporation of tumor dynamics (e.g., tumor size time-course) into a PK/PD model to link exposure, c-Met expression levels, and long-term outcomes more mechanistically. 4) Evaluation of the capped $190$ $mg$ dose in patients $>100$ $kg$ using a larger dataset to ensure equivalent efficacy. 5) Development of an integrated PK model that simultaneously describes ADC and payload with systemic deconjugation and tumor sink, potentially improving understanding of DLT drivers.

---

### Expert Commentary
This paper is a solid regulatory-facing pharmacometric analysis. The decision to model conjugate and payload PK independently is pragmatic and standard, though one might argue a joint parent-metabolite model could borrow strength across analytes. The covariate findings are remarkably clean—despite statistical significance, the clinical irrelevance is clearly articulated, which is exactly how regulatory reviews should be framed. The real gem is the clear dissociation: efficacy is driven by the 'delivery vehicle' (ADC) while one of the most feared class-effect toxicities (peripheral neuropathy) surprisingly also tracks with ADC rather than free MMAE, suggesting it may be an on-target, c-Met-mediated neuronal toxicity or a consequence of intracellular MMAE release in neurons. Meanwhile, generic severe TEAEs track the free payload, as expected. This has profound implications for ADC design: improving linker stability might reduce neutropenia/off-target tox but won't necessarily mitigate peripheral neuropathy if it's driven by ADC uptake. The ER work supports the Q2W schedule; however, technologists should note the 'cumulative' toxicity risk—the analysis used average exposure up to event, so it captures ongoing risk, not just $C_{max}$ drivers. This will be a useful reference for other MMAE-based ADCs (like enfortumab vedotin, brentuximab vedotin) to benchmark exposure-toxicity slopes. The absence of significant ER covariates is a bit surprising and may signal limited power; clinicians should still be vigilant for higher neuropathy risk in patients with pre-existing neuropathy, which this dataset may not have stratified.

---

### Bottom Line
Telisotuzumab vedotin $1.9$ $mg/kg$ Q2W (max $190$ $mg$) is the confirmed optimal dose for c-Met overexpressing NSCLC, with efficacy strongly tied to conjugate exposure and key toxicities managed via dose modification. No baseline factor requires a priori dose adjustment, though clinicians may see slightly higher exposures in Black patients and those with low albumin. For pharmacometricians, this is a textbook example of integrating PopPK and ER to support accelerated approval, emphasizing that ADC efficacy usually tracks with antibody-conjugate exposure, while payload exposure governs off-target systemic toxicity.

---

---

## 📊 Figures

![Forest plots of (A) Teliso-V Conjugate and (B) Unconjugated MMAE Payload Exposures (Cmaxand Steady-State AUCtau). Effect of covariates on Teliso-V conjugate and]({{ site.baseurl }}/assets/digests/2026-05-28-population-pharmacokinetics-and-exposure-response-analyses-for-telisotuzumab/figures/fig_01.png)

![Logistic Regression for Exposure-Overall Response Rate per ICR based on EGFR Wild-Type Patients. Number of patients with a response. Nominalp= 8.55 × 10–6. The f]({{ site.baseurl }}/assets/digests/2026-05-28-population-pharmacokinetics-and-exposure-response-analyses-for-telisotuzumab/figures/fig_02.png)

![Kaplan–Meier Curves of Time to (A) Duration of Response, (B) Progression-Free Survival, and (C) Overall Survival by Teliso-V Conjugate Exposure (CavgC1) Quartile]({{ site.baseurl }}/assets/digests/2026-05-28-population-pharmacokinetics-and-exposure-response-analyses-for-telisotuzumab/figures/fig_03.png)

![Exposure-Safety Analyses using Logistic Regression for Grade ≥ 3 Peripheral Neuropathy (Left) and Grade ≥ 2 Corneal Epitheliopathy (Right) based on Patients with]({{ site.baseurl }}/assets/digests/2026-05-28-population-pharmacokinetics-and-exposure-response-analyses-for-telisotuzumab/figures/fig_04.png)

![Observed and Model-Predicted Percentage of Patients with Grade ≥ 3 Treatment-Emergent Adverse Events by Unconjugated MMAE Payload Exposures. The solid lines repr]({{ site.baseurl }}/assets/digests/2026-05-28-population-pharmacokinetics-and-exposure-response-analyses-for-telisotuzumab/figures/fig_05.png)