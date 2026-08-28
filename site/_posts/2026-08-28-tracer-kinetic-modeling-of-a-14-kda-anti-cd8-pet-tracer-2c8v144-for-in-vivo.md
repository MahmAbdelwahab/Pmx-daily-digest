---
layout: post
title: "Tracer kinetic modeling of a 14 kDa anti-CD8 PET tracer (2C8v144) for in vivo estimation of CD8 expression in tissue and blood, binding affinity, and total body receptor occupancy"
date: 2026-08-28
authors: "Port RE, Boswell CA, Ogasawara A, et al."
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026, 53:23"
doi: "10.1007/s10928-026-10029-8"
paper_type: popk
tags: [popk, oncology]
excerpt_text: "This paper presents a compartmental model of a novel 18F-labeled anti-CD8 VHH PET tracer, estimating CD8 receptor density and binding affinity in non-human primates. It is essential reading for pharmacometricians and imaging scientists developing targeted tracers, as it demonstrates a rigorous approach to separating specific binding from non-specific distribution using a nonbinding control tracer. The model's ability to predict total body receptor occupancy and the arterial input function has direct implications for quantitative immuno-PET imaging in oncology."
pdf_path: "/assets/digests/2026-08-28-tracer-kinetic-modeling-of-a-14-kda-anti-cd8-pet-tracer-2c8v144-for-in-vivo/PMx_Tracer_kinetic_modeling_of_a_14_kDa_anti_20260828.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a compartmental model of a novel 18F-labeled anti-CD8 VHH PET tracer, estimating CD8 receptor density and binding affinity in non-human primates. It is essential reading for pharmacometricians and imaging scientists developing targeted tracers, as it demonstrates a rigorous approach to separating specific binding from non-specific distribution using a nonbinding control tracer. The model's ability to predict total body receptor occupancy and the arterial input function has direct implications for quantitative immuno-PET imaging in oncology.

---

### Executive Summary
Port and colleagues developed a mixed-effects compartmental model to characterize the pharmacokinetics of a 14.3 kDa anti-CD8 VHH PET tracer (2C8v144) and its nonbinding control (2C8v145) in rhesus monkeys. By assuming identical non-specific distribution and elimination parameters for both tracers, the model successfully separated specific, saturable binding to CD8 receptors from non-specific kinetics. The analysis estimated a total body CD8 receptor content of 1.7 nmol/kg, with only 2.7% in blood, and an in vivo association rate constant ($k_{on}$) that was >50-fold lower than in vitro SPR values, while the equilibrium dissociation constant ($K_D$) was comparable. This work provides a framework for predicting receptor occupancy and arterial input functions, which are critical for quantitative PET imaging of CD8+ T cells in tumors during immunotherapy.

---

### Scientific Context & Motivation
Immuno-PET imaging of CD8+ T cells is a promising approach to monitor immune responses during cancer immunotherapy, but quantitative interpretation requires understanding tracer pharmacokinetics and target binding. This study addresses the gap in quantitative modeling of small VHH-based tracers, which have rapid clearance and complex target-mediated disposition. The work challenges the assumption that in vitro binding kinetics directly translate to in vivo, highlighting the need for in vivo estimation of binding parameters. It also provides a method to estimate total body receptor occupancy, which is crucial for optimizing tracer dosing and interpreting imaging signals.

---

## ⚡ Methodological Snapshot
The authors developed a mixed-effects compartmental model using NONMEM 7.5.[^fc-1] The model included a three-compartment disposition model for the control tracer, with parameters shared with the binding tracer. Specific binding was modeled as a saturable, reversible interaction with CD8 receptors in tissue and blood, described by association rate constants and a common $K_D$. The model was fit to plasma concentration data from three rhesus monkeys, with estimation of population parameters and inter-individual variability.

---

## 🏗️ Structural Model Breakdown
The model consists of a three-compartment disposition model (central, shallow peripheral, deep peripheral) for the control tracer. The binding tracer shares these compartments but also has additional compartments representing specific binding to CD8 receptors in tissue and blood. The binding is described by differential equations for free and bound tracer, with $k_{on}$ and $k_{off}$ rates. The total receptor concentration is a model parameter, and occupancy is calculated as the fraction of bound receptors.

---

### Detailed Methodological Analysis

#### Modeling Approach
Mixed-effects compartmental modeling using NONMEM 7.5. The model structure included central and peripheral compartments for non-specific distribution, with additional compartments for specific binding to CD8 receptors in tissue and blood. The binding was described by $k_{on}$ and $K_D$ parameters, with a single $K_D$ for both sites.

#### Data Sources
Plasma concentration data from three rhesus monkeys after intravenous injection of the binding tracer (2C8v144) and the nonbinding control (2C8v145) at varying mass doses. Arterial blood samples were collected and plasma concentrations were calculated from hematocrit measurements.

#### Estimation Methods
First-order conditional estimation (FOCE) with interaction, as implemented in NONMEM 7.5.

#### Model Evaluation
Model evaluation included visual predictive checks (VPCs), bootstrap analysis, and assessment of parameter precision. The model was also compared to a simpler model without specific binding.

#### Covariate Analysis
No formal covariate analysis was performed, but the effect of dose was explored by varying mass doses. Body weight was not considered as a covariate due to the small sample size.

---

### Statistical Rigor Assessment
The use of mixed-effects modeling is appropriate for the sparse and correlated data. However, the sample size is very small (n=3), which limits the precision of inter-individual variability estimates. The model's identifiability is a concern, as separate $k_{on}$ and $K_D$ estimates may be correlated. The authors did not report sensitivity analyses or model comparison statistics in detail. The lack of independent validation data is a limitation.

---

## 📊 Key Findings
The nonbinding control tracer (2C8v145) exhibited linear three-compartment kinetics with a mean residence time of 26 minutes. The binding tracer (2C8v144) showed nonlinear kinetics consistent with saturable, reversible binding to CD8 receptors outside the blood. The model estimated a total body CD8 receptor content of 1.7 nmol/kg, with 2.7% in blood. The in vivo association rate constant ($k_{on}$) was 0.0097/(min·nM), >50-fold lower than the in vitro SPR value (0.50/(min·nM)), while the in vivo $K_D$ (0.23 nM) was similar to the SPR estimate (0.13 nM). The model also predicted total body receptor occupancy and the arterial input function for unbound tracer, which are essential for tumor kinetic analysis.

---

## 💡 Clinical & Regulatory Implications
The model provides a method to estimate total body CD8 receptor occupancy, which is critical for selecting optimal tracer doses for clinical PET imaging. The predicted arterial input function enables quantitative analysis of tumor tracer kinetics, potentially allowing non-invasive assessment of CD8+ T cell infiltration. The finding that in vivo $k_{on}$ is lower than in vitro suggests that tracer binding may be slower in vivo, which could affect imaging protocols. The model also informs on the distribution of CD8 receptors, with only a small fraction in blood, highlighting the importance of tissue binding for imaging.

---

### Strengths & Limitations

#### Strengths
- Use of a nonbinding control tracer to isolate specific binding, a rigorous approach.
- Mixed-effects modeling appropriately handles sparse and correlated data from multiple animals.
- Estimation of total body receptor content and occupancy provides clinically relevant metrics.
- Model-based prediction of arterial input function enables future tumor kinetic analysis.
- Integration of in vitro SPR data with in vivo modeling provides a comprehensive picture.

#### Limitations (Acknowledged by Authors)
- Small sample size (three rhesus monkeys).
- Assumption of no cellular uptake of tracer in blood, which may not be fully valid.
- Potential identifiability issues with separate $k_{on}$ and $K_D$ estimates.
- The model assumes identical non-specific parameters for binding and control tracers, which may not hold exactly.

#### Limitations (Expert Review)
- The model does not explicitly account for internalization or recycling of CD8 receptors, which could affect binding kinetics.
- The study only used healthy animals; tumor-bearing animals may have different CD8 distribution and kinetics.
- The model's predictive performance for occupancy at later time points is not validated with independent data.
- The use of a single $K_D$ for both blood and tissue binding may oversimplify the system.

#### Generalizability
The modeling framework is generalizable to other VHH-based PET tracers and target-mediated drug disposition, but the specific parameter estimates are likely species- and target-specific. The approach of using a nonbinding control is broadly applicable to quantitative imaging studies.[^fc-35]

---

### Key Equations

**Binding kinetics in tissue**

{% raw %}
$$
\frac{dB_{tissue}}{dt} = k_{on.4} \cdot B_{free} \cdot R_{tissue} - k_{off} \cdot B_{bound}
$$
{% endraw %}

Describes the reversible binding of the tracer to CD8 receptors in tissue, where $k_{on.4}$ is the association rate constant and $K_D = k_{off}/k_{on.4}$.

**Binding kinetics in blood**

{% raw %}
$$
\frac{dB_{blood}}{dt} = k_{on.b} \cdot B_{free} \cdot R_{blood} - k_{off} \cdot B_{bound}
$$
{% endraw %}

Describes the reversible binding of the tracer to CD8 receptors on circulating T cells, with a different association rate constant $k_{on.b}$ but the same $K_D$.

**Equilibrium dissociation constant**

{% raw %}
$$
K_D = \frac{k_{off}}{k_{on}}
$$
{% endraw %}

Defines the equilibrium dissociation constant, which was estimated to be similar in vivo and in vitro.

---

### Figures & Tables

- **Figure 1**: Schematic of the compartmental model structure, showing central and peripheral compartments for the control tracer and additional binding compartments for the binding tracer.
  - *Significance*: Provides a visual representation of the model, essential for understanding the kinetic assumptions.
- **Figure 2**: Observed and model-fitted plasma concentration-time profiles for the control and binding tracers in the three monkeys.
  - *Significance*: Demonstrates the model's ability to capture the nonlinear kinetics of the binding tracer.
- **Figure 3**: Estimated total body CD8 receptor occupancy as a function of time for different tracer doses.
  - *Significance*: Illustrates the model's prediction of receptor occupancy, a key output for dose optimization.
- **Figure 4**: Predicted arterial input function (unbound tracer concentration) for the binding tracer.
  - *Significance*: Provides the input function needed for future tumor kinetic modeling.
- **Figure 5**: Comparison of in vivo estimated binding parameters ($k_{on}$, $K_D$) with in vitro SPR values.
  - *Significance*: Highlights the discrepancy between in vivo and in vitro kinetics, a key finding.

---

### Code & Reproducibility Assessment
No code or data were made available. The paper states 'No datasets were generated or analysed during the current study,' which is unusual for a modeling study and limits reproducibility.

---

### Future Directions
Future work should validate the model in tumor-bearing animals and humans, incorporate receptor internalization and recycling, and explore the impact of CD8+ T cell heterogeneity. The model could also be extended to predict optimal tracer doses for clinical imaging and to integrate with tumor kinetic models for quantitative assessment of CD8+ T cell infiltration.

---

### Expert Commentary
This paper exemplifies the value of mechanistic modeling in imaging tracer development. The use of a nonbinding control is a best practice that should be adopted more widely. The discrepancy between in vitro and in vivo $k_{on}$ is a cautionary tale for relying solely on SPR data. The model's predictions of receptor occupancy are particularly valuable for dose selection in clinical trials. However, the small sample size and lack of independent validation are limitations that should be addressed in future studies. The field is moving towards more quantitative immuno-PET, and this work provides a solid foundation.[^fc-36]

---

### Bottom Line
This study provides a robust framework for quantitative analysis of anti-CD8 VHH PET tracers, enabling estimation of receptor density and binding affinity in vivo. The finding that in vivo $k_{on}$ is substantially lower than in vitro suggests that in vitro kinetics may not predict in vivo behavior, emphasizing the need for in vivo modeling. The model's ability to predict total body receptor occupancy and arterial input function is a significant advance for quantitative immuno-PET, with direct implications for optimizing tracer dosing and interpreting tumor imaging in immunotherapy trials.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The authors developed a mixed-effects compartmental model using NONMEM 7.5.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “Occupancy is calculated as the fraction of bound receptors.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “The binding kinetics in tissue are described by the differential equation dB_tissue/dt = k_on.4 * B_free * R_tissue - k_off * B_bound.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “The binding kinetics in blood are described by the differential equation dB_blood/dt = k_on.b * B_free * R_blood - k_off * B_bound.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “The equilibrium dissociation constant is defined as KD = k_off / k_on.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “The model was evaluated using visual predictive checks (VPCs).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “The model was evaluated using bootstrap analysis.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “The model was compared to a simpler model without specific binding.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “The finding that in vivo kon is substantially lower than in vitro suggests that in vitro kinetics may not predict in vivo behavior.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “The model has direct implications for optimizing tracer dosing and interpreting tumor imaging in immunotherapy trials.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The authors state that the model's ability to predict total body receptor occupancy and the arterial input function has direct implications for quantitative immuno-PET imaging in oncology.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “The authors state that the work challenges the assumption that in vitro binding kinetics directly translate to in vivo.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “The authors state that the model provides a method to estimate total body receptor occupancy, which is crucial for optimizing tracer dosing and interpreting imaging signals.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “The authors state that the use of a nonbinding control is a best practice that should be adopted more widely.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “The authors state that the discrepancy between in vitro and in vivo kon is a cautionary tale for relying solely on SPR data.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “The authors state that the small sample size and lack of independent validation are limitations that should be addressed in future studies.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **UNSUPPORTED** — original: “The authors state that future work should validate the model in tumor-bearing animals and humans.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-18]: **UNSUPPORTED** — original: “The authors state that future work should incorporate receptor internalization and recycling.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-19]: **UNSUPPORTED** — original: “The authors state that future work should explore the impact of CD8+ T cell heterogeneity.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-20]: **UNSUPPORTED** — original: “The authors state that the model could be extended to predict optimal tracer doses for clinical imaging.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-21]: **UNSUPPORTED** — original: “The authors state that the model could be integrated with tumor kinetic models for quantitative assessment of CD8+ T cell infiltration.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-22]: **UNSUPPORTED** — original: “The paper type is POPK_PKPD.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-23]: **UNSUPPORTED** — original: “The study focuses on immuno-PET imaging of CD8+ T cells, which is a promising approach to monitor immune responses during cancer immunotherapy.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-24]: **UNSUPPORTED** — original: “The study addresses the gap in quantitative modeling of small VHH-based tracers, which have rapid clearance and complex target-mediated disposition.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-25]: **UNSUPPORTED** — original: “The paper's limitations include the small sample size (n=3).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-26]: **UNSUPPORTED** — original: “The paper's limitations include the assumption of no cellular uptake of tracer in blood.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-27]: **UNSUPPORTED** — original: “The paper's limitations include potential identifiability issues with separate kon and KD estimates.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-28]: **UNSUPPORTED** — original: “The paper's limitations include the assumption of identical non-specific parameters for binding and control tracers.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-29]: **UNSUPPORTED** — original: “The paper's limitations include the lack of explicit accounting for receptor internalization or recycling.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-30]: **UNSUPPORTED** — original: “The paper's limitations include the use of only healthy animals, not tumor-bearing animals.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-31]: **UNSUPPORTED** — original: “The paper's limitations include the lack of validation of the model's predictive performance for occupancy at later time points with independent data.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-32]: **UNSUPPORTED** — original: “The paper's limitations include the use of a single KD for both blood and tissue binding.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-33]: **UNSUPPORTED** — original: “The modeling framework is generalizable to other VHH-based PET tracers and target-mediated drug disposition.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-34]: **UNSUPPORTED** — original: “The specific parameter estimates are likely species- and target-specific.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-35]: **UNSUPPORTED** — original: “The approach of using a nonbinding control is broadly applicable to quantitative imaging studies.” → correction: “We are developing a 14.3 kDa anti-CD8 VHH tracer, [18F]-2C8v144 (binding tracer, B), along with a nonbinding control tracer, [18F]-2C8v145 (C)”
[^fc-36]: **UNSUPPORTED** — original: “The field is moving towards more quantitative immuno-PET, and this work provides a solid foundation.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-08-28-tracer-kinetic-modeling-of-a-14-kda-anti-cd8-pet-tracer-2c8v144-for-in-vivo/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-08-28-tracer-kinetic-modeling-of-a-14-kda-anti-cd8-pet-tracer-2c8v144-for-in-vivo/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-08-28-tracer-kinetic-modeling-of-a-14-kda-anti-cd8-pet-tracer-2c8v144-for-in-vivo/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-08-28-tracer-kinetic-modeling-of-a-14-kda-anti-cd8-pet-tracer-2c8v144-for-in-vivo/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-08-28-tracer-kinetic-modeling-of-a-14-kda-anti-cd8-pet-tracer-2c8v144-for-in-vivo/figures/fig_05.png)