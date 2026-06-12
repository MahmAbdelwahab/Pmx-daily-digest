---
layout: post
title: "Preclinical Modeling and Simulation to Explore the Tissue/Plasma Exposure and Pharmacodynamic Effect of Vildagliptin in Diabetes Treatment"
date: 2026-05-30
authors: "Dias BB, Olivo LB, de Araújo BV"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 00:1-11"
doi: "10.1002/psp4.70165"
paper_type: popk
tags: [popk]
excerpt_text: "This paper presents a preclinical-to-clinical translation of vildagliptin tissue distribution using a population PK model with microdialysis data from healthy and diabetic rats, scaled to humans via allometry. The key finding is that free plasma concentrations significantly overestimate DPP-4 inhibition in muscle and liver, particularly for once-daily dosing, suggesting that twice-daily regimens (especially 100 mg q12h) are needed to achieve >80% enzyme inhibition in tissues. This is essential reading for pharmacometricians and clinicians involved in diabetes drug development and dosing optimization."
pdf_path: "/assets/digests/2026-05-30-preclinical-modeling-and-simulation-to-explore-the-tissueplasma-exposure-and/PMx_Preclinical_Modeling_and_Simulation_to_E_20260530.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a preclinical-to-clinical translation of vildagliptin tissue distribution using a population PK model with microdialysis data from healthy and diabetic rats, scaled to humans via allometry. The key finding is that free plasma concentrations significantly overestimate DPP-4 inhibition in muscle and liver, particularly for once-daily dosing, suggesting that twice-daily regimens (especially 100 mg q12h) are needed to achieve >80% enzyme inhibition in tissues. This is essential reading for pharmacometricians and clinicians involved in diabetes drug development and dosing optimization.

---

### Executive Summary
This study develops a four-compartment population PK model describing vildagliptin (VDG) plasma, free muscle, and free liver concentrations in healthy and diabetic rats after IV administration, using microdialysis to measure unbound tissue concentrations. Diabetes was identified as a significant covariate on intercompartmental clearances (Q1 and Qout,liver), with markedly altered distribution dynamics in diabetic animals. The model was scaled to humans using allometry, and simulated steady-state concentrations for doses of 25, 50, and 100 mg given once or twice daily were linked to DPP-4 inhibition via an Imax model. The simulations demonstrate that while plasma concentrations may suggest adequate enzyme inhibition, free tissue concentrations—particularly in liver—consistently fail to achieve the stringent 92% inhibition target with any regimen, and the 80% target is only fully met in muscle with 100 mg q12h. These findings challenge reliance on plasma PK as a surrogate for target-site exposure and support the clinical evaluation of twice-daily dosing to improve therapeutic outcomes.

---

### Scientific Context & Motivation
Vildagliptin is a DPP-4 inhibitor widely used for T2DM, known to have high oral bioavailability and minimal protein binding. While its plasma PK has been well-characterized, there is a critical knowledge gap regarding free drug concentrations at pharmacologically relevant tissues (muscle, liver, pancreas), where DPP-4 is highly expressed. The current paradigm assumes plasma concentrations adequately predict efficacy, yet this may not hold when tissue distribution is altered by disease states. The authors previously showed that VDG free concentrations in muscle and liver of diabetic rats do not differ significantly, but the impact of diabetes on distribution kinetics and the translational relevance to human dosing remained unexplored. This study addresses that gap using a rigorous preclinical popPK model with microdialysis data, allometric scaling, and PK/PD simulations to challenge the assumption that plasma PK alone is sufficient for dose optimization.

---

## ⚡ Methodological Snapshot
A four-compartment population PK model (central, shallow peripheral, muscle, liver) with linear elimination and bidirectional intercompartmental clearances was developed sequentially (plasma data then tissue data) using NONMEM 7.4 with FOCE-I estimation. Diabetes was tested as a categorical covariate on all parameters. The final model was evaluated via GOF, VPC, and bootstrap. Human PK parameters were derived via allometric scaling, and human concentration-time profiles for 25, 50, and 100 mg q24h and q12h were simulated. These were linked to DPP-4 inhibition using an Imax model (IC50 = 1350 ng/mL) from the literature. Efficacy was assessed as the percentage of the dosing interval maintaining ≥80% or ≥92% enzyme inhibition.

---

## 🏗️ Structural Model Breakdown
The structural model is a four-compartment linear PK model. Central compartment (V1) receives IV bolus dose and is linked to: (1) a shallow peripheral compartment (V2) via intercompartmental clearance Q1 (which has different values for healthy and diabetic animals); (2) a muscle compartment (V3) via bidirectional clearance Qin,muscle and Qout,muscle; and (3) a liver compartment (V4) via bidirectional clearance Qin,liver and Qout,liver (Qout,liver has different values for healthy and diabetic). Elimination occurs from the central compartment via CL. The model is parameterized as clearances and volumes. No absorption compartments were used for the rat IV model; for human simulations, absorption was modeled with two parallel first-order rates (Ka1, Ka2) and bioavailability (Fabs) from the literature.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling (NONMEM 7.4, ADVAN13 TRANS1) with FOCE-I. Sequential model building: first plasma two-compartment model, then incorporation of tissue compartments with bidirectional intercompartmental clearances. Log-additive residual error. Exponential IIV on CL, Q1, V3, Qout,liver, V4. Allometric scaling (0.75 for CL, 1.0 for V) for rat-to-human translation.

#### Data Sources
Male Wistar rats (250-350 g): healthy (n=7 plasma, 7 muscle, 6 liver) and alloxan-induced diabetic (n=5 plasma, 6 muscle, 6 liver). Single IV bolus 50 mg/kg. Plasma from carotid artery cannulation at 10 time points (0.083-6 h). Free tissue concentrations by microdialysis (40 µL samples every 40 min up to 6 h). Total of 254 observations.

#### Estimation Methods
First-order conditional estimation with interaction (FOCE-I) in NONMEM 7.4.

#### Model Evaluation
Goodness-of-fit plots, VPC (1000 simulations), nonparametric bootstrap (1000 runs, 96% success rate), relative standard error (RSE%), condition number.

#### Covariate Analysis
Categorical covariate (diabetes: 0=healthy, 1=diabetic). Forward inclusion (p<0.05) and backward elimination (p<0.01). Diabetes retained on Q1 and Qout,liver.

---

### Statistical Rigor Assessment
The sequential modeling approach is appropriate. FOCE-I is standard for nonlinear mixed effects. The covariate selection used a rigorous forward-backward procedure. IIV was included on 5 parameters; shrinkage values (16-43%) are relatively high for Qout,liver and V4, suggesting limited data to estimate these random effects. Bootstrap success rate is high (96%). VPCs appear adequate. The log-additive error model is typical for data spanning multiple orders of magnitude. No sensitivity analyses were reported for the allometric scaling assumptions or for the choice of IC50. The statistical approach meets current standards for preclinical popPK analysis.

---

## 📊 Key Findings
1) A four-compartment popPK model with bidirectional transport between central (plasma) and tissue compartments adequately described VDG disposition in rats, with diabetes as a significant covariate on Q1 (increased ~8-fold) and Qout,liver (decreased ~11-fold), indicating enhanced liver retention in diabetes. 2) Free plasma concentrations are poor surrogates for free tissue concentrations: simulated free muscle and liver levels were consistently lower than free plasma levels. 3) Allometric scaling to humans predicted that 100 mg q24h achieves 80% DPP-4 inhibition in plasma throughout the dosing interval, but only 49% of the interval in muscle and 57% in liver. 4) The 92% inhibition target was only met in plasma (50 and 100 mg q12h); no regimen achieved 92% inhibition in tissues. 5) Twice-daily dosing substantially improved target attainment, with 100 mg q12h providing 100% coverage of 80% inhibition in both plasma and muscle, but not in liver. 6) The parameter estimates for V3 (muscle volume) and V4 (liver volume) were orders of magnitude larger than physiological interstitial volumes, confirming these are empirical scaling factors rather than anatomical volumes.

---

## 💡 Clinical & Regulatory Implications
The simulations challenge the current clinical practice of once-daily vildagliptin 50 or 100 mg. The results suggest that twice-daily dosing (particularly 100 mg q12h) would provide more sustained and higher-level DPP-4 inhibition in muscle, a key tissue for insulin sensitivity. However, even with twice-daily dosing, liver exposure may be insufficient for maximal effect. Since the relationship between DPP-4 inhibition levels and HbA1c reduction is not fully linear, the clinical impact of suboptimal tissue inhibition is unclear but may explain why not all patients achieve target HbA1c on vildagliptin. These findings support exploration of alternative dosing regimens in clinical trials, and highlight the importance of considering tissue distribution in dose selection for drugs whose target is expressed outside the plasma compartment.

---

### Strengths & Limitations

#### Strengths
- Use of microdialysis to directly measure unbound tissue concentrations in a preclinical model, providing high-quality data for tissue distribution modeling.
- Comprehensive stepwise model building with plasma data first, then sequential incorporation of tissue data, ensuring stability and identifiability.
- Inclusion of diabetes as a covariate with clear physiological rationale, demonstrating disease-related changes in intercompartmental clearances.
- Successful bootstrap (96% success rate) and VPCs confirm model robustness and predictive performance.
- Clinical translation through allometric scaling and simulation of clinically relevant dosing regimens with explicit evaluation against two DPP-4 inhibition targets (80% and 92%) from the literature.

#### Limitations (Acknowledged by Authors)
- PopPK parameters should not be interpreted as direct physiological volumes or flows; they are empirical descriptors.
- Potential target-mediated drug disposition (TMDD) due to VDG binding to DPP-4 was not explicitly modeled, though the authors acknowledge this may influence tissue retention.
- Use of chemically induced diabetes in rats (alloxan) may not fully recapitulate human T2DM pathophysiology.
- Assumption that diffusion is the primary distribution mechanism and that VDG is not subject to saturable transport at the concentrations studied.
- PD model does not include feedback from DPP-4 inhibition on PK or downstream glucose metabolism.
- Assumed disease effect on intercompartmental clearances is similar between rats and humans.

#### Limitations (Expert Review)
- The absorption parameters (Ka, Fabs) were taken from a separate study (Landersdorfer et al.) for human simulations; these may not be consistent with the IV-derived distribution parameters, introducing potential bias.
- Allometric scaling exponents were not explicitly stated or tested; standard allometry (0.75 for CL, 1 for V) was assumed without verification against human data.
- The microdialysis sampling interval (40 min) may miss rapid early distribution kinetics, particularly for the liver which showed very high Qout values.
- No uncertainty propagation from the rat model to human simulations was performed; point estimates were used, which may overstate confidence.
- The two DPP-4 inhibition targets (80%, 92%) are derived from different studies and contexts; the rationale for choosing these specific values is reasonable but not uniformly accepted.
- Dosing regimen simulations were limited to fixed 25, 50, and 100 mg; intermediate doses (e.g., 75 mg) or optimize regimens were not explored.
- Statistical software details are provided, but no code or model control streams are shared in the manuscript or supplementary materials.

#### Generalizability
The findings are directly relevant to vildagliptin dosing in T2DM, but the broader conclusion that plasma concentrations overestimate tissue DPP-4 inhibition likely applies to other DPP-4 inhibitors (sitagliptin, saxagliptin, linagliptin) depending on their tissue distribution characteristics. The preclinical-to-clinical translation framework is generalizable, although the specific magnitude of differences will vary by drug and disease state. Generalizability to other metabolic tissues (e.g., pancreas, adipose) not sampled is limited.

---

### Key Equations

**DPP-4 Inhibition Imax Model**

{% raw %}
$$
\text{inhibition} = \frac{I_{\max} \cdot C}{IC_{50} + C}
$$
{% endraw %}

Standard Imax model relating free drug concentration (C) to fraction of DPP-4 enzyme inhibition, with Imax = 1 (100% maximum inhibition) and IC50 = 1350 ng/mL.

**Inter-individual Variability Model**

{% raw %}
$$
P_i = P_{\text{pop}} \cdot e^{\eta_i}, \ \eta_i \sim N(0, \omega^2)
$$
{% endraw %}

Exponential inter-individual variability model for parameters CL, Q1, V3, Qout,liver, and V4.

**Residual Error Model (log-additive)**

{% raw %}
$$
\ln(C_{ij}) = \ln(\hat{C}_{ij}) + \epsilon_{ij}, \ \epsilon_{ij} \sim N(0, \sigma^2)
$$
{% endraw %}

Log-additive residual error model applied separately to plasma, muscle, and liver observations.

**Allometric Scaling for Clearance and Volume**

{% raw %}
$$
CL_{\text{human}} = CL_{\text{rat}} \cdot \left(\frac{WT_{\text{human}}}{WT_{\text{rat}}}\right)^{0.75}, \ V_{\text{human}} = V_{\text{rat}} \cdot \left(\frac{WT_{\text{human}}}{WT_{\text{rat}}}\right)^{1.0}
$$
{% endraw %}

Standard allometric scaling used to translate rat PK parameters to human parameters. Body weights: rat 280 g, human 70 kg.

**Differential Equation for Central Compartment**

{% raw %}
$$\begin{aligned}
\frac{dA_c}{dt} \\
&= -\left(\frac{CL}{V_c} + \frac{Q_1}{V_c} + \frac{Q_{\text{in,muscle}}}{V_c} + \frac{Q_{\text{in,liver}}}{V_c}\right) \cdot A_c + \frac{Q_1}{V_1} \cdot A_1 \\
& + \frac{Q_{\text{out,muscle}}}{V_3} \cdot A_3 + \frac{Q_{\text{out,liver}}}{V_4} \cdot A_4
\end{aligned}$$
{% endraw %}

Differential equation for the central (plasma) compartment, describing loss via clearance and distribution to peripheral (V2), muscle, and liver compartments.

---

### Figures & Tables

- **Figure 1**: Concentration-time profiles of VDG in total plasma, free muscle, and free liver of healthy and diabetic rats after IV 50 mg/kg bolus.
  - *Significance*: Shows raw data and suggests lower free liver concentrations in healthy vs. diabetic rats, motivating covariate analysis.
- **Figure 2**: Schematic representation of the four-compartment PK/PD model with DPP-4 inhibition link.
  - *Significance*: Illustrates the structural model including bidirectional intercompartmental clearances and the Imax PD model.
- **Figure 3**: Goodness-of-fit plots (observations vs. individual and population predictions, conditional weighted residuals vs. time and predictions).
  - *Significance*: Demonstrates adequate model fit without major bias across all three matrices (plasma, muscle, liver).
- **Figure 4**: VPCs stratified by tissue (plasma, muscle, liver) and condition (healthy, diabetic) based on 1000 simulations.
  - *Significance*: Confirms model predictive performance; observations fall within 90% prediction intervals, supporting model adequacy.
- **Figure 5**: Simulated steady-state free concentration-time profiles (right panels) and corresponding DPP-4 inhibition over time (left panels) for 25, 50, and 100 mg q24h and q12h dosing regimens.
  - *Significance*: Central translational figure showing that plasma concentrations overpredict tissue inhibition; only 100 mg q12h achieves >80% inhibition in muscle.
- **Table 1**: Final popPK parameter estimates, IIV, shrinkage, and bootstrap median with 95% CI for the rat model.
  - *Significance*: Provides key parameter values including the diabetes effect on Q1 (8-fold increase) and Qout,liver (11-fold decrease). Bootstrap confirms stability.
- **Table 2**: Percentage of dosing interval with DPP-4 inhibition >80% and >92% for each dose regimen and compartment (plasma, muscle, liver).
  - *Significance*: Quantitative summary of regimen performance against efficacy targets. Highlights that only 100 mg q12h achieves 100% coverage of 80% inhibition in muscle.

---

### Code & Reproducibility Assessment
No code or NONMEM control streams are provided in the manuscript or supplementary materials. The authors used standard tools (NONMEM 7.4, PsN 4.9.0, R 4.1.1) but do not share model files or analysis scripts.

---

### Supplementary Materials
Supplementary Table S1 includes number of animals and observations per group. Supplementary Table S2 includes scaled human PK parameters. Bioanalytical method details are referenced but not provided in the extracted content.

---

### Future Directions
1) Clinical verification of the predicted human tissue concentrations using PET imaging or other non-invasive techniques to confirm the distribution differences. 2) Extension to include explicit TMDD modeling to capture target binding and its impact on tissue retention. 3) Exploration of alternative dosing strategies (e.g., 75 mg q12h, 50 mg q8h) to identify regimens achieving 92% tissue inhibition. 4) Incorporation of a glucose-GLP-1 feedback PD model to directly link DPP-4 inhibition to HbA1c reduction. 5) Application of the modeling framework to other DPP-4 inhibitors and comparison of tissue distribution profiles. 6) Inclusion of additional tissues with high DPP-4 expression (e.g., pancreas, kidney) in the model.

---

### Expert Commentary
This is a well-executed translational PK/PD study that addresses a clinically relevant question: are plasma concentrations sufficient for dose optimization of DPP-4 inhibitors? The use of microdialysis in rats to obtain free tissue concentrations is a significant strength, as such data are rarely available. The finding that diabetes dramatically alters tissue distribution—increasing Q1 (redistribution from central to peripheral) and decreasing Qout,liver (slowing elimination from liver)—is novel and biologically plausible given known changes in tissue permeability and blood flow in diabetes. From a regulatory perspective, these data support the argument for including tissue distribution studies in preclinical packages for drugs with extravascular targets. The empirical nature of the compartmental model (vs. physiologically-based) is a limitation, but appropriate given the complexity of microdialysis data. The allometric scaling to humans is reasonable but should be considered exploratory; clinical confirmation is essential. The key teaching point: when target engagement occurs in tissues with different distribution kinetics than plasma, PK/PD models must use unbound tissue concentrations, not total plasma, to avoid overestimating efficacy. This study exemplifies that principle.

---

### Bottom Line
This study provides compelling evidence that free plasma concentrations of vildagliptin are not reliable surrogates for unbound drug concentrations in muscle and liver—key sites of DPP-4 activity. The preclinical popPK model, scaled to humans, predicts that once-daily dosing (even 100 mg) fails to maintain >92% enzyme inhibition in tissues throughout the dosing interval, and 80% inhibition in liver is never fully achieved with any regimen tested. Twice-daily dosing, particularly 100 mg q12h, markedly improves tissue target attainment. For practicing pharmacometricians, this work reinforces the importance of incorporating tissue distribution data (via microdialysis or other methods) early in drug development to inform dose regimen optimization, and challenges the sole reliance on plasma PK as a surrogate for efficacy in T2DM.

---

---

## 📊 Figures

![Vildagliptin concentrations versus time profiles in total plasma (n= 7 and 5), free muscle (n= 6 and 6), and free liver (n= 7 and 6) of healthy rats and rats wit]({{ site.baseurl }}/assets/digests/2026-05-30-preclinical-modeling-and-simulation-to-explore-the-tissueplasma-exposure-and/figures/fig_01.jpg)

![Structural PK/PD model developed for VDG free plasma, muscle and liver concentrations and their DPP-4 inhibition. Figure shows the schematic representation of th]({{ site.baseurl }}/assets/digests/2026-05-30-preclinical-modeling-and-simulation-to-explore-the-tissueplasma-exposure-and/figures/fig_02.jpg)

![Goodness of fit plots for the final model. Blue, red, and green dots represent free plasma, muscle and liver data, respectively.]({{ site.baseurl }}/assets/digests/2026-05-30-preclinical-modeling-and-simulation-to-explore-the-tissueplasma-exposure-and/figures/fig_03.jpg)

![Visual predictive checks (VPCs) for the final model stratified by plasma, muscle, and liver in healthy and diabetic rats. VPCs are based on 1000 simulations, whe]({{ site.baseurl }}/assets/digests/2026-05-30-preclinical-modeling-and-simulation-to-explore-the-tissueplasma-exposure-and/figures/fig_04.jpg)

![Simulated vildagliptin concentrations and DPP-IV inhibition. Vildagliptin concentration-time profiles at steady state after 25, 50, and 100 mg after once-daily (]({{ site.baseurl }}/assets/digests/2026-05-30-preclinical-modeling-and-simulation-to-explore-the-tissueplasma-exposure-and/figures/fig_05.jpg)