---
layout: post
title: "A mechanism-based model of immune status effects on antibiotic PK/PD targets in bacteremia"
date: 2026-10-06
authors: "van de Kreeke M, Pham AD, Mehciz M, et al."
journal: "J Pharmacokinet Pharmacodyn 53:53 (2026)"
doi: "10.1007/s10928-026-10063-6"
paper_type: methodology
tags: [methodology, immunology]
excerpt_text: "A mechanism-based model of the innate immune response to bacteremia was developed, incorporating interactions between bacteria, neutrophils, and monocytes. The model was calibrated to in vivo data and used to evaluate how immune deficiencies affect antibiotic PK/PD targets. The results show that immune deficiency increases PK/PD targets, with up to 2.2-fold increases in AUC/MIC for concentration-dependent antibiotics and up to 58% increases in T>MIC for time-dependent antibiotics."
pdf_path: "/assets/digests/2026-10-06-a-mechanism-based-model-of-immune-status-effects-on-antibiotic-pkpd-targets-in/PMx_A_mechanismbased_model_of_immune_status__20261006.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
A mechanism-based model of the innate immune response to bacteremia was developed, incorporating interactions between bacteria, neutrophils, and monocytes. The model was calibrated to in vivo data and used to evaluate how immune deficiencies affect antibiotic PK/PD targets. The results show that immune deficiency increases PK/PD targets, with up to 2.2-fold increases in AUC/MIC for concentration-dependent antibiotics and up to 58% increases in T>MIC for time-dependent antibiotics.

---

### Executive Summary
The paper describes the development of a mechanism-based model of the innate immune response to bacteremia, focusing on the interactions between bacteria, neutrophils, and monocytes. The model was calibrated using in vitro and in vivo data, and used to evaluate how immune deficiencies affect antibiotic PK/PD targets. The results show that immune deficiency increases PK/PD targets, with up to 2.2-fold increases in AUC/MIC for concentration-dependent antibiotics and up to 58% increases in T>MIC for time-dependent antibiotics. The model provides quantitative insights into how host immunity affects antibiotic dosing requirements.

---

### Scientific Context & Motivation
The paper addresses the gap in understanding how host immune status affects antibiotic PK/PD targets. While antibiotic dosing guidelines are primarily based on PK/PD indices derived from in vitro and animal studies, these do not explicitly consider the impact of immune status. The paper develops a mechanism-based model to quantify how changes in immune status affect PK/PD targets.

---

## ⚡ Methodological Snapshot
The model describes bacterial growth, phagocytosis by neutrophils and monocytes, and digestion of bacteria. The model was calibrated to in vivo data using a sensitivity analysis approach. The model was implemented in R using nlmixr2 and rxode2 packages.

---

## 📐 Statistical Framework
Nonlinear mixed-effects modeling was used, with parameters estimated using nlmixr2 and rxode2 in R. The model was calibrated to in vivo data using a sensitivity analysis approach.

---

### Estimator Behavior
Parameters were estimated using a combination of in vitro and in vivo data, with a 77% reduction in phagocytosis rates needed to describe in vivo data. The model was calibrated to in vivo data using a sensitivity analysis approach.

---

### Validation Design
The model was validated using sensitivity analysis (Sobol indices) and calibrated to in vivo data. The model was used to evaluate how immune deficiencies affect antibiotic PK/PD targets.

---

### Applicability Boundaries
The model is limited to the first 24 h after infection and does not include adaptive immune responses or cytokine-mediated regulation. The model assumes a homogeneous bacterial population with a fixed MIC and does not consider resistance development.

---

### Comparison to Alternatives
The model builds on previous mathematical models of host-pathogen interactions but incorporates both neutrophils and monocytes, which is a novel aspect. The model provides a more detailed representation of the innate immune response compared to previous models.

---

### Implementation Guidance
The model was implemented in R using nlmixr2 and rxode2 packages. The model can be used to evaluate how immune deficiencies affect antibiotic PK/PD targets and to support approaches to account for host immune status when evaluating dosing strategies.

---

## 📊 Key Findings
1. Immune deficiency increases PK/PD targets for antibiotics
2. Up to 2.2-fold increase in AUC/MIC for concentration-dependent antibiotics
3. Up to 58% increase in T>MIC for time-dependent antibiotics
4. Dose increases up to 25.5-fold for time-dependent antibiotics
5. The model predicts meaningful differences in PK/PD targets when immune mediated clearance is present versus when immunity is absent

---

### Strengths & Limitations

#### Strengths
- Mechanism-based approach that explicitly represents the innate immune response
- Incorporation of both neutrophils and monocytes, which are the dominant phagocytic cells in early bacteremia
- Sensitivity analysis using Sobol indices to identify key parameters
- Calibration to both in vitro and in vivo data
- Evaluation of multiple immune deficiency states, including neutropenia, monocytopenia, and combinations

#### Limitations (Acknowledged by Authors)
- Limited in vivo data with only a single 24 h CFU measurement
- Assumptions about immune cell concentrations and phagocytic activity
- Model limited to the first 24 h after infection
- No incorporation of adaptive immune responses or cytokine-mediated regulation
- High initial bacterial density required to generate informative dynamics
- Parameters not estimated from in vivo data were fixed to in vitro values

#### Limitations (Expert Review)
- The model does not include compartments for bacterial transfer from an infection site into the bloodstream
- The inoculum should be interpreted as an effective 'challenge burden' rather than a literal bloodstream concentration
- The model assumes a homogeneous bacterial population with a fixed MIC
- No resistance development over time is considered
- The model does not account for disease-related changes in physiology, organ function, or inflammatory status

#### Generalizability
The model provides a framework that could be extended to include additional immune cell populations, cytokine-mediated regulation, and antibiotic resistance development. However, clinical application requires further translational steps, including pathogen-specific dynamics, drug-specific PK, and patient-specific immune characteristics.

---

### Key Equations

**Bacterial growth equation**

{% raw %}
$$
\frac{dB}{dt} = k_g \cdot B \cdot (1 - \frac{B}{B_{max}}) - k_{np} \cdot B - k_{mp} \cdot B
$$
{% endraw %}

Describes the rate of change of bacterial concentration, with growth limited by carrying capacity and clearance by neutrophils and monocytes

**Emax function for phagocytosis**

{% raw %}
$$
k_{ix} = k_{ix,max} \cdot \frac{I}{I_{x50} + I}
$$
{% endraw %}

Describes the rate of phagocytosis as a function of immune cell concentration, with a maximum rate and half-maximum concentration

**Full Emax function with Hill coefficient**

{% raw %}
$$
k_{ix} = k_{ix,max} \cdot \frac{I}{I_{x50} + I} \cdot \left(1 - \frac{(B_I/I)^{\gamma}}{(B_I/I)_{x50}^{\gamma} + (B_I/I)^{\gamma}}\right)
$$
{% endraw %}

Describes the rate of phagocytosis with a sigmoidal dependence on the ratio of bacteria to immune cells

**Immune cell death equation**

{% raw %}
$$
\frac{dI}{dt} = -k_{i,apop} \cdot I - k_{i,picd} \cdot I
$$
{% endraw %}

Describes the rate of change of immune cell concentration due to apoptosis and phagocytosis-induced cell death

**Decay function for phagocytosis rates**

{% raw %}
$$
k_{ix,decay} = k_{ix} \cdot e^{-k_{decay,ix} \cdot t}
$$
{% endraw %}

Describes the time-dependent decay of phagocytosis rates

**Bacterial growth rate equation**

{% raw %}
$$
k_g = k_{grw} - \left(\frac{(k_{grw} - k_{gmin}) \cdot (C_{AB}/MIC)^{H}}{(C_{AB}/MIC)^{H} - k_{gmin}/k_{grw}}\right)
$$
{% endraw %}

Describes the bacterial growth rate as a function of antibiotic concentration relative to MIC

**Phagocytosis rate equation for neutrophils**

{% raw %}
$$
k_{np} = k_{np,max} \cdot \frac{N}{N_{p50} + N} \cdot \left(1 - \frac{(B_N/N)^{\gamma}}{(B_N/N)_{p50}^{\gamma} + (B_N/N)^{\gamma}}\right)
$$
{% endraw %}

Describes the rate of phagocytosis by neutrophils as a function of neutrophil concentration and bacterial load

**Phagocytosis rate equation for monocytes**

{% raw %}
$$
k_{mp} = k_{mp,max} \cdot \frac{M}{M_{p50} + M} \cdot \left(1 - \frac{(B_M/M)^{\gamma}}{(B_M/M)_{p50}^{\gamma} + (B_M/M)^{\gamma}}\right)
$$
{% endraw %}

Describes the rate of phagocytosis by monocytes as a function of monocyte concentration and bacterial load

**Bacterial death equation**

{% raw %}
$$
\frac{dB}{dt} = -k_{np} \cdot B - k_{mp} \cdot B
$$
{% endraw %}

Describes the rate of bacterial death due to phagocytosis by neutrophils and monocytes

---

### Figures & Tables

- **Figure 1**: Model structure depicting the interactions between bacteria, neutrophils, and monocytes, including phagocytosis and digestion processes
  - *Significance*: Shows the overall model structure and the key processes represented in the model
- **Figure 2**: Sensitivity analysis results showing the Sobol indices for the model parameters
  - *Significance*: Identifies which parameters have the highest impact on the outcome measures, with the maximum phagocytosis rate of monocytes being the most impactful
- **Figure 3**: Dose fractionation simulation results showing the PK/PD targets for different immune states
  - *Significance*: Shows how the PK/PD targets increase with increasing degrees of immune deficiency
- **Figure 4**: Comparison of total dose and PK/PD targets between immune states
  - *Significance*: Shows the fold change in dose required for different immune states, with up to 25.5-fold increases for time-dependent antibiotics

---

### Code & Reproducibility Assessment
Code and data are available upon request. The model was implemented in R (v4.4.2) using nlmixr2 (v3.0.2) and rxode2 (v3.0.4) packages.

---

### Supplementary Materials
The paper includes supplementary information (Online Resource 1) with additional details on the model, including parameter values, sensitivity analysis results, and additional simulation results.

---

### Future Directions
Extending the model to include adaptive immune responses, cytokine-mediated regulation, and antibiotic resistance development. Incorporating pathogen-specific dynamics, drug-specific PK, and patient-specific immune characteristics to support patient-level dosing decisions.

---

### Expert Commentary
The model provides a valuable framework for understanding how host immunity affects antibiotic PK/PD targets, but requires further validation in clinical settings. The findings support approaches to account for host immune status when evaluating dosing strategies, particularly in immune compromised patients.

---

### Bottom Line
The mechanism-based model provides quantitative insights into how host immunity affects antibiotic PK/PD targets, supporting approaches to account for host immune status when evaluating dosing strategies. The model predicts that immune deficiency increases PK/PD targets, with up to 2.2-fold increases in AUC/MIC for concentration-dependent antibiotics and up to 58% increases in T>MIC for time-dependent antibiotics.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-10-06-a-mechanism-based-model-of-immune-status-effects-on-antibiotic-pkpd-targets-in/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-10-06-a-mechanism-based-model-of-immune-status-effects-on-antibiotic-pkpd-targets-in/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-10-06-a-mechanism-based-model-of-immune-status-effects-on-antibiotic-pkpd-targets-in/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-10-06-a-mechanism-based-model-of-immune-status-effects-on-antibiotic-pkpd-targets-in/figures/fig_04.png)