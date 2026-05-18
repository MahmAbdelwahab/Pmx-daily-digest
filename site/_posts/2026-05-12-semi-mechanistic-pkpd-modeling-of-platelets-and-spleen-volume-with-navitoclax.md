---
layout: post
title: "Semi-Mechanistic PK/PD Modeling of Platelets and Spleen Volume With Navitoclax in Combination With Ruxolitinib in Patients With Myelofibrosis"
date: 2026-05-12
authors: "Polepally AR, Gupta A, Patel M, Biesdorf C, Passarell J, Mostillo RM, Mensing S, Engelhardt B"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70260"
paper_type: popk
tags: [popk, qsp, dose-response, oncology, regulatory, clinical-trial-design]
excerpt_text: "This integrated PK/PD analysis of navitoclax + ruxolitinib in myelofibrosis provides a robust, model-informed framework for dose selection and management. Pharmacometricians and clinical pharmacologists in oncology should read this to see how semi-mechanistic modeling of both platelet dynamics and spleen volume can directly inform starting dose and dose-reduction strategies to balance thrombocytopenia risk with efficacy. The work is a strong example of using MIDD to support regulatory and clinical decision-making for a combination therapy with overlapping toxicities."
pdf_path: "/assets/digests/2026-05-12-semi-mechanistic-pkpd-modeling-of-platelets-and-spleen-volume-with-navitoclax/PMx_SemiMechanistic_PKPD_Modeling_of_Platele_20260512.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This integrated PK/PD analysis of navitoclax + ruxolitinib in myelofibrosis provides a robust, model-informed framework for dose selection and management. Pharmacometricians and clinical pharmacologists in oncology should read this to see how semi-mechanistic modeling of both platelet dynamics and spleen volume can directly inform starting dose and dose-reduction strategies to balance thrombocytopenia risk with efficacy. The work is a strong example of using MIDD to support regulatory and clinical decision-making for a combination therapy with overlapping toxicities.

---

### Executive Summary
Polepally et al. developed a sequential, integrated population PK/PD model using data from the phase 2 REFINE study to characterize the effects of navitoclax (a BCL-XL/BCL-2 inhibitor) and ruxolitinib on platelet counts and spleen volume in patients with myelofibrosis. The platelet model employed a five-compartment semi-physiological structure with a feedback loop, where navitoclax accelerated platelet apoptosis and ruxolitinib inhibited proliferation. The spleen model used an indirect response framework with both drugs inhibiting the spleen growth rate. Model simulations demonstrated that a flat starting dose of navitoclax 200 mg QD (for baseline platelets $>150 \times 10^9/L$) or 100 mg QD (for $\le 150 \times 10^9/L$) minimized thrombocytopenia while maintaining spleen volume reduction, and that specific dose-reduction steps (25 mg or 50 mg) could further optimize the benefit-risk balance. This analysis exemplifies the power of semi-mechanistic PK/PD modeling to guide dosing in a complex disease setting with competing safety and efficacy endpoints.

---

### Scientific Context & Motivation
Myelofibrosis (MF) is a rare myeloproliferative neoplasm with poor prognosis, characterized by splenomegaly, bone marrow fibrosis, and cytopenias. Ruxolitinib, a JAK1/2 inhibitor, is a standard of care but is associated with dose-limiting thrombocytopenia. Navitoclax, which inhibits BCL-XL/BCL-2, shows synergy with ruxolitinib but also causes on-target thrombocytopenia via platelet apoptosis. Prior clinical data showed high rates of dose reductions (76%) due to thrombocytopenia, particularly at 300 mg QD. The key knowledge gap was how to select a starting dose and manage dose reductions for the combination to maximize spleen volume reduction (SVR35 at Week 24) while minimizing severe thrombocytopenia. This analysis fills that gap by providing a quantitative, model-based framework that integrates both drugs' effects on two key endpoints, moving beyond empirical dose-finding to a mechanistic understanding of the exposure-response relationship.

---

## ⚡ Methodological Snapshot
The authors developed a sequential population PK/PD model using NONMEM. First, two-compartment PK models with first-order absorption and lag time were built for navitoclax and ruxolitinib. Post hoc PK parameters then drove two semi-mechanistic PD models: a five-compartment platelet model with a feedback loop (navitoclax stimulating platelet depletion, ruxolitinib inhibiting proliferation) and an indirect response spleen volume model (both drugs inhibiting growth). Covariate analysis was performed using standard stepwise methods. The final models were used to simulate various dosing scenarios (flat starting doses, ramp-up, and dose reductions) to predict grade 3/4 thrombocytopenia incidence and SVR35 at Week 24, stratified by baseline platelet count and disease status.

---

## 🏗️ Structural Model Breakdown
The integrated model consists of two PK models and two PD models. Navitoclax PK: Two-compartment model with first-order absorption ($k_a$), lag time ($t_{lag}$), linear elimination from the central compartment ($CL/F$), and distribution to a peripheral compartment ($Q/F$, $V_p/F$). Ruxolitinib PK: Same structure, refitted from a published model. Platelet PD: A progenitor compartment (Prol) feeds three transit compartments (Tr1, Tr2, Tr3) representing bone marrow maturation, which then feed the circulating platelet compartment (PLT). The maturation rate ($k_{tr}$) is modulated by a feedback function: $(PLT_0/PLT)^\gamma$, where $PLT_0$ is baseline. A disease progression term ($\lambda$) acts on the proliferation rate. Navitoclax concentration ($C_{NAV}$) linearly increases the platelet elimination rate ($k_{out}$): $k_{out} \cdot (1 + Slope \cdot C_{NAV})$. Ruxolitinib concentration ($C_{RUX}$) inhibits the proliferation rate via an Emax model: $E_{max} \cdot C_{RUX} / (EC_{50,RUX} + C_{RUX})$. Spleen PD: A single spleen compartment with zero-order growth rate ($k_{in}$) and first-order loss rate ($k_{out}$). At baseline, $k_{in} = k_{out}$. Disease progression ($E_{prog}$) increases $k_{in}$. Both navitoclax and ruxolitinib inhibit $k_{in}$ via Emax models: $E_{max,NAV} \cdot C_{NAV} / (EC_{50,NAV} + C_{NAV})$ and $E_{max,RUX} \cdot C_{RUX} / (EC_{50,RUX} + C_{RUX})$.

---

### Detailed Methodological Analysis

#### Modeling Approach
Population PK models were two-compartment with first-order absorption, lag time, and linear elimination. The platelet PD model was a semi-physiological maturation chain (progenitor → 3 transit compartments → circulation) with a feedback loop from circulating platelets to the first maturation rate. Navitoclax effect was a linear stimulation of platelet depletion; ruxolitinib effect was an inhibitory Emax model on proliferation. The spleen PD model was an indirect response model with zero-order growth and first-order loss, where both drugs inhibited the growth rate via Emax models. Models were implemented in NONMEM.

#### Data Sources
Data were from the phase 2 REFINE study (NCT03222609) in 191 patients with primary or secondary myelofibrosis. Patients received navitoclax (25-300 mg QD) alone or with ruxolitinib (≥10 mg BID). PK sampling, platelet counts, and spleen volume measurements (by imaging) were collected. The population was 66% >65 years, 63% male, 88% White, with a mix of treatment-naïve (17%) and relapsed/refractory (83%) patients.

#### Estimation Methods
Population PK and PD models were estimated using NONMEM. The specific estimation algorithm (e.g., FOCE-I, SAEM) is not explicitly stated in the provided text but is standard for such analyses. IIV was modeled exponentially, and residual error was modeled using combined additive and proportional models.

#### Model Evaluation
Models were evaluated using standard goodness-of-fit plots and prediction-corrected visual predictive checks (pcVPCs). pcVPCs for both PK and PD models showed adequate capture of central tendency and variability. Parameter precision was assessed via relative standard errors (RSE%).

#### Covariate Analysis
Covariates were tested using standard stepwise methods (details in supplement). For navitoclax PK, sex was significant on $CL/F$. For ruxolitinib PK, sex on $CL/F$ and body weight on $V_c/F$ were significant. In the platelet model, sex was significant on $EC_{50,RUX}$. In the spleen model, patient population (naïve vs. R/R) was significant on the disease progression parameter ($E_{prog}$).

---

### Statistical Rigor Assessment
The statistical methods are appropriate for population PK/PD modeling. The use of pcVPCs for model evaluation is standard and robust. Parameter precision was generally good (RSE <50% for most parameters), though some IIV parameters had high RSE (e.g., $EC_{50,RUX}$ IIV). Shrinkage on IIV parameters was acceptable (<30-40%) for key parameters, allowing for reasonable empirical Bayes estimates. The covariate analysis followed standard stepwise procedures, though details are in the supplement. The simulation framework (100 patients, 250 replicates) provides robust estimates of uncertainty. A limitation is the lack of an explicit external validation dataset, though the models were used prospectively for simulation. The handling of missing baseline data and prior ruxolitinib exposure is acknowledged but not fully detailed in terms of sensitivity analyses.

---

## 📊 Key Findings
The navitoclax PK was described by a two-compartment model with sex as a significant covariate on $CL/F$ (17.2% lower in females). The platelet model showed that navitoclax linearly stimulates platelet depletion (slope = 0.492 L/mg), while ruxolitinib inhibits platelet proliferation ($EC_{50} = 0.0683$ mg/L). The spleen model indicated both drugs inhibit spleen growth, with a greater effect in treatment-naïve vs. relapsed/refractory patients. Simulations revealed that a weekly ramp-up from 100 to 200 mg offered no benefit over a flat 200 mg starting dose in terms of thrombocytopenia incidence. For patients with baseline platelets $\le 150 \times 10^9/L$, a 100 mg starting dose with a 25 mg reduction if needed balanced safety and efficacy. For those $>150 \times 10^9/L$, a 200 mg starting dose with a 50 mg reduction (and an additional 25 mg if needed) was optimal. These findings directly informed the clinical dosing strategy.

---

## 💡 Clinical & Regulatory Implications
This analysis directly supports a precision dosing strategy for navitoclax in MF. The key clinical implications are: (1) A flat starting dose of 200 mg QD (platelets $>150 \times 10^9/L$) or 100 mg QD (platelets $\le 150 \times 10^9/L$) is recommended, eliminating the need for a ramp-up period and simplifying treatment. (2) For patients starting at 100 mg, a 25 mg dose reduction is recommended for managing thrombocytopenia. (3) For patients starting at 200 mg, a 50 mg reduction (to 150 mg) is the first step, with an additional 25 mg reduction (to 125 mg) if needed. These model-informed recommendations aim to maintain SVR35W24 while reducing the risk of grade 3/4 thrombocytopenia, potentially improving treatment continuity and outcomes. The findings likely informed regulatory labeling and clinical guidelines for this combination therapy.

---

### Strengths & Limitations

#### Strengths
- Integrated PK/PD modeling of two drugs with overlapping toxicities on two clinically relevant endpoints (platelets and spleen volume) is a sophisticated and highly relevant approach.
- The semi-mechanistic platelet model with a progenitor compartment, maturation chain, and feedback loop is physiologically grounded and captures both rapid drug-induced apoptosis and long-term disease progression effects.
- The simulation framework comprehensively evaluated multiple starting doses and dose-reduction scenarios across patient subgroups (baseline platelet count, naïve vs. R/R), providing clear, actionable dosing guidance.
- The analysis directly addresses a critical clinical problem—managing on-target thrombocytopenia—and translates model outputs into practical dose-modification rules.

#### Limitations (Acknowledged by Authors)
- The model cannot fully disentangle the effects of disease progression from drug effects on platelets and spleen volume.
- It does not capture the mechanistic link between bone marrow fibrosis and downstream hematologic dynamics.
- Baseline platelet and spleen assessments were not always performed immediately before the first navitoclax dose, introducing potential bias.
- Dose interruptions were not included in simulations, which may not fully reflect real-world clinical practice.

#### Limitations (Expert Review)
- The platelet model fixed several parameters (e.g., Emax for ruxolitinib, maturation rates) to literature values, which may not perfectly reflect the MF population where bone marrow function is inherently abnormal.
- The spleen volume model is a relatively simple indirect response model that does not account for the complex pathophysiology of splenomegaly in MF, including extramedullary hematopoiesis and portal hypertension.
- The covariate analysis was limited; for example, the impact of renal/hepatic function, concomitant medications, or inflammatory status on PK/PD was not explored.
- The model was developed and simulated using data from a single phase 2 study, and external validation is lacking.

#### Generalizability
The findings are directly applicable to the MF patient population studied in REFINE and provide a strong basis for dosing in similar settings. However, generalizability to patients with more severe thrombocytopenia ($<100 \times 10^9/L$), different JAK inhibitor backgrounds, or non-MF indications for navitoclax requires further study. The modeling framework itself is highly generalizable to other drug combinations where overlapping hematologic toxicities must be managed.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the PK/PD model structure. Panel A shows the platelet model with a progenitor compartment, three maturation transit compartments, and a circulating platelet compartment, including feedback and drug effects. Panel B shows the indirect response spleen volume model with inhibitory drug effects.
  - *Significance*: This figure is essential for understanding the model's mechanistic basis and how navitoclax and ruxolitinib effects were incorporated into both platelet and spleen dynamics.
- **Figure 2**: Predicted incidence of grade 3/4 thrombocytopenia for various navitoclax dosing regimens (flat doses and dose reductions) in combination with ruxolitinib, stratified by baseline platelet count and patient population (naïve vs. R/R).
  - *Significance*: This figure provides the safety predictions that directly support the recommended starting doses and dose-reduction steps. It visually demonstrates the trade-off between dose intensity and thrombocytopenia risk.
- **Figure 3**: Predicted percentage of patients achieving SVR35 at Week 24 for the same dosing scenarios as Figure 2.
  - *Significance*: This figure provides the efficacy predictions that, when viewed alongside Figure 2, allow for a comprehensive benefit-risk assessment of each dosing strategy.
- **Table 1**: Summary of baseline demographics and disease characteristics for the 191 patients included in the PD analysis.
  - *Significance*: Provides context for the patient population and highlights the distribution of key covariates like baseline platelet count, MF type, and risk scores.
- **Table 2**: Population PK parameter estimates for navitoclax and ruxolitinib, including fixed effects, IIV, and covariate effects.
  - *Significance*: Reports the foundational PK parameters that drive exposure in the PD models. The sex effect on $CL/F$ for both drugs is a key finding.
- **Table 3**: Parameter estimates for the platelet count PD model, including drug effect slopes, $EC_{50}$ values, and IIV.
  - *Significance*: Quantifies the relative potency of navitoclax and ruxolitinib on platelet dynamics and the variability in these effects.
- **Table 4**: Parameter estimates for the spleen volume PD model, including drug $EC_{50}$ values and the effect of patient population (naïve vs. R/R).
  - *Significance*: Quantifies the drug effects on spleen volume and identifies that treatment-naïve patients have a different disease progression rate, which impacts predicted efficacy.

---

### Future Directions
Future work should focus on external validation of the PK/PD models with independent datasets, potentially from ongoing phase 3 trials. Incorporating a more mechanistic link between bone marrow fibrosis grade, cytokine profiles, and platelet/spleen dynamics could improve the model's ability to disentangle disease progression from drug effects. The model could be extended to include hemoglobin dynamics, as anemia is another key safety endpoint in MF. Finally, a formal exposure-response analysis for overall survival or progression-free survival could further strengthen the benefit-risk assessment.

---

### Expert Commentary
This paper is a strong example of how semi-mechanistic PK/PD modeling can add value beyond simple exposure-response analyses in oncology. The decision to model both platelet and spleen dynamics simultaneously, with both drugs' effects incorporated, is methodologically sound and clinically relevant. The finding that a ramp-up strategy offers no advantage over a flat starting dose is practically important—it simplifies treatment and reduces patient burden. The dose-reduction simulations are particularly elegant, providing a quantitative, stepwise algorithm that clinicians can easily implement. From a modeling perspective, the use of a feedback loop in the platelet model is crucial; without it, the model would not capture the compensatory mechanisms that occur with chronic BCL-XL inhibition. The high IIV on some parameters (e.g., $EC_{50,RUX}$, $>1000\%CV$) is a concern and suggests that covariate exploration could be improved, but the shrinkage was acceptable. Overall, this is a well-executed MIDD analysis that likely played a key role in regulatory discussions and labeling considerations.

---

### Bottom Line
This work is a textbook example of model-informed drug development (MIDD) in oncology. By integrating semi-mechanistic models for both platelet kinetics and spleen volume, the authors provided a quantitative basis for selecting navitoclax starting doses and dose-reduction steps that balance thrombocytopenia risk with spleen volume reduction. The key takeaway for practitioners is that a flat starting dose (200 mg or 100 mg based on baseline platelets) is as safe as a ramp-up and simplifies treatment, and that stepwise dose reductions of 25-50 mg can effectively manage toxicity without completely sacrificing efficacy. The modeling framework can serve as a template for other BCL-2/BCL-XL inhibitors or combination therapies with overlapping myelosuppression.

---

---

## 📊 Figures

![FIGURE 1: Schematic of the PK/PD model for (A) platelet dynamics and (B) spleen volume dynamics in patients with MF treated with navitoclax or the combination of navitocla]({{ site.baseurl }}/assets/digests/2026-05-12-semi-mechanistic-pkpd-modeling-of-platelets-and-spleen-volume-with-navitoclax/figures/fig_01.jpg)

![FIGURE 2: Predicted percent incidence of grade 3/4 thrombocytopenia for combination of navitoclax and ruxolitinib in naïve and R/R MF patients (by baseline platelets > 100]({{ site.baseurl }}/assets/digests/2026-05-12-semi-mechanistic-pkpd-modeling-of-platelets-and-spleen-volume-with-navitoclax/figures/fig_02.jpg)

![FIGURE 3: Predicted percentage of patients achieving SVR35W24for combination of navitoclax and ruxolitinib in naïve and R/R MF patients with baseline platelets > 100 × 109]({{ site.baseurl }}/assets/digests/2026-05-12-semi-mechanistic-pkpd-modeling-of-platelets-and-spleen-volume-with-navitoclax/figures/fig_03.jpg)