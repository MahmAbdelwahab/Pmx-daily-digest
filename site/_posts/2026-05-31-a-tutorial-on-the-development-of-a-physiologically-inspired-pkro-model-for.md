---
layout: post
title: "A Tutorial on the Development of a Physiologically Inspired PKRO Model for Monoclonal Antibodies"
date: 2026-05-31
authors: "Kapitanov GI, Flowers D, Hua F, et al."
journal: "N/A"
doi: "N/A"
paper_type: methodology
tags: [methodology]
excerpt_text: "This tutorial introduces a physiologically inspired PKRO (piPKRO) model for monoclonal antibodies that simultaneously describes linear and nonlinear PK and receptor occupancy at the site of action. The model modifies the classical 2-compartment PK model by using physiological compartment volumes, adding clearance in extravascular compartments, and incorporating target binding based on biological knowledge. Case studies with dupilumab demonstrate the model's ability to predict nonlinear PK and local drug depletion effects."
pdf_path: "/assets/digests/2026-05-31-a-tutorial-on-the-development-of-a-physiologically-inspired-pkro-model-for/PMx_A_Tutorial_on_the_Development_of_a_Physi_20260531.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This tutorial introduces a physiologically inspired PKRO (piPKRO) model for monoclonal antibodies that simultaneously describes linear and nonlinear PK and receptor occupancy at the site of action. The model modifies the classical 2-compartment PK model by using physiological compartment volumes, adding clearance in extravascular compartments, and incorporating target binding based on biological knowledge. Case studies with dupilumab demonstrate the model's ability to predict nonlinear PK and local drug depletion effects.

---

### Executive Summary
The piPKRO model is a fit-for-purpose compartmental model that bridges the gap between empirical PK models and full PBPK models. It retains the simplicity of a 2-compartment structure while incorporating physiological volumes, tissue-specific distribution coefficients (Pdist), and target-mediated drug disposition (TMDD) in both central and peripheral compartments. The model allows conversion from classical PK parameters, bottom-up target burden estimation, and prediction of receptor occupancy (RO) at the site of action. Three case studies with dupilumab illustrate its use for predicting nonlinear PK, calibrating to data, and adding a site-of-action compartment. Key insights include the phenomenon of local drug depletion when target-mediated clearance outpaces distribution, leading to lower RO in tissues than in plasma.

---

### Scientific Context & Motivation
Classical 2-compartment PK models for mAbs lack physiological meaning for the peripheral compartment and cannot accurately predict drug concentrations or target occupancy at the site of action. TMDD models typically confine binding to the central compartment, ignoring tissue-specific target expression and distribution limitations. There is a need for a simple mechanistic model that integrates PK and RO with physiological plausibility, enabling better prediction of efficacious doses and understanding of local drug depletion.

---

## ⚡ Methodological Snapshot
The piPKRO model extends the classical 2-compartment PK model by (1) fixing the peripheral compartment volume to the total interstitial space, (2) adding elimination in the peripheral compartment with the same rate constant as central, (3) reparameterizing distribution using Pdist (tissue-to-plasma partition coefficient) and tdist (distribution half-time), and (4) incorporating target binding and TMDD in both central and peripheral compartments based on biological knowledge of target expression. The model can be expanded with additional site-of-action compartments. Parameter conversion from classical PK models is exact, and bottom-up target burden estimation enables prediction of nonlinear PK and RO before clinical data.

---

## 📐 Statistical Framework
The model assumes linear PK follows a 2-compartment structure with first-order elimination from both compartments (same $k_{el}$). Target binding follows a full TMDD model: free drug + free receptor ↔ complex, with receptor turnover (synthesis and degradation) and internalization of the complex. The distribution between compartments is governed by rate constants $k_{12}$ and $k_{21}$, reparameterized as Pdist and tdist. Volumes are fixed to physiological values (central = plasma volume, peripheral = total interstitial space). The model is deterministic; no stochastic components are discussed. Identifiability is achieved by fixing peripheral volume and assuming same $k_{el}$ across compartments.

---

### Estimator Behavior
The paper does not formally evaluate estimator properties (bias, efficiency, convergence). However, the parameter conversion from classical PK ensures that central PK is exactly preserved in the absence of binding. When fitting to data, the model parameters (e.g., $k_{el}$, Pdist, tdist, target burden) are estimated using standard nonlinear regression. The authors note that fixing peripheral volume reduces the number of free parameters, improving identifiability. No simulation studies assessing parameter recovery or bias are presented.

---

### Validation Design
Validation is performed through: (1) verification of parameter conversion using a published risankizumab PK model, showing identical central PK; (2) case study 1: bottom-up prediction of dupilumab PK compared to digitized clinical data; (3) case study 2: calibration of linear PK parameters to dupilumab data; (4) case study 3: addition of a skin compartment with two approaches for distribution parameters; (5) sensitivity analysis varying parameters three-fold around nominal values. No formal model comparison (e.g., to classical TMDD or PBPK) is conducted.

---

### Applicability Boundaries
The model is designed for mAbs targeting membrane receptors. It works well when: (1) target expression data (cell counts, receptor density) are available for bottom-up estimation; (2) distribution is slow relative to target turnover (local depletion relevant); (3) linear clearance is similar across tissues. It is not suitable for: (1) predicting linear PK from molecular properties (use PBPK instead); (2) molecules with significant renal clearance or different clearance pathways in tissues; (3) soluble targets without modification to include target distribution. Data requirements include plasma PK data, knowledge of target expression and turnover, and optionally tissue distribution data (e.g., from imaging or biopsy).

---

### Comparison to Alternatives
Compared to classical 2-compartment PK: piPK provides physiological peripheral volume and concentration ratio (Pdist), and includes elimination in peripheral compartment, leading to simpler analytical solutions. Compared to full TMDD models: piPKRO places binding in compartments based on target expression, allowing prediction of tissue RO and local depletion, whereas classical TMDD only models central binding. Compared to PBPK models: piPKRO is simpler (lumped peripheral compartment, fewer parameters) and focuses on RO prediction rather than detailed tissue distribution. The model complements PBPK by providing a fit-for-purpose tool for dose selection when RO is the key endpoint.

---

### Implementation Guidance
The model can be implemented in any ODE-based software (NONMEM, Monolix, R, MATLAB). Parameters can be initialized from classical PK using conversion formulas (Table S1). For bottom-up predictions, fix $V_1$ and $V_2$ to physiological values, set Pdist and tdist to typical values (Table 2), and calculate target burden from literature. When fitting, fix $V_2$ and estimate $k_{el}$, Pdist, tdist, and target burden. For site-of-action compartments, adjust volumes and distribution parameters based on tissue-specific data. Sensitivity analysis is recommended to identify influential parameters. Computational cost is low due to small number of compartments.

---

## 📊 Key Findings
The piPKRO model can exactly reproduce the central PK of the classical 2-compartment model while providing a physiologically interpretable tissue-to-plasma concentration ratio (Pdist). The model predicts that high target expression in tissues combined with slow distribution (long tdist) can cause local drug depletion, resulting in lower RO at the site of action than in plasma. Case studies with dupilumab showed that bottom-up target burden estimation reasonably predicted nonlinear PK at low doses, and model calibration improved fit. Adding a skin compartment with higher target expression (inflamed skin) led to lower RO in skin compared to plasma, consistent with the need for higher clinical doses.

---

### Strengths & Limitations

#### Strengths
- Physiologically inspired compartment volumes (e.g., total interstitial space) improve interpretability.
- Introduction of macroparameters ($P_{dist}$, $t_{dist}$, $t_{half}$) provides intuitive understanding of distribution and elimination.
- Exact parameter conversion from classical 2-compartment PK models preserves central PK.
- Bottom-up target burden estimation enables prediction of nonlinear PK and RO before clinical data.
- Ability to add site-of-action compartments with tissue-specific target expression and distribution parameters.
- Captures local drug depletion, a clinically relevant phenomenon not addressed by classical TMDD models.

#### Limitations (Acknowledged by Authors)
- Model is not intended for predicting linear PK based on physiochemical properties like PBPK models.
- Assumes same linear clearance rate in all compartments, which may not hold for smaller proteins or when renal clearance is significant.
- Target expression data may be uncertain due to assay limitations.
- Model focuses on membrane receptors; soluble targets require modifications.

#### Limitations (Expert Review)
- Sensitivity analysis was one-at-a-time, ignoring parameter interactions.
- Validation limited to one mAb (dupilumab) and digitized clinical data; no formal model selection or comparison to full TMDD models.
- No assessment of parameter identifiability or practical identifiability in the presence of binding.
- The assumption of same clearance rate in all compartments may be violated if FcRn expression varies across tissues.

#### Generalizability
The model structure is applicable to other biotherapeutics (e.g., bispecific antibodies, ADCs, recombinant proteins) but requires adjustments for smaller molecules (different Pdist, tdist, clearance pathways) and soluble targets (need to include target distribution). The parameterization strategy (fixing physiological volumes, using typical values or allometric scaling) is generalizable across species and molecules.

---

### Key Equations

**piPK Model Differential Equations**

{% raw %}
$$
\frac{dD_1}{dt} = -(k_{12} + k_{el}) D_1 + k_{21} D_2 \\ \frac{dD_2}{dt} = k_{12} D_1 - (k_{21} + k_{el}) D_2
$$
{% endraw %}

Equations (3) and (4) describe the rate of change of drug amount in central (D1) and peripheral (D2) compartments for the piPK model.

**Definition of Pdist**

{% raw %}
$$
P_{\text{dist}} = \frac{k_{12}}{k_{21}}
$$
{% endraw %}

The partition coefficient representing the ratio of drug concentration in tissue to central compartment at steady state in the absence of binding.

**Definition of tdist**

{% raw %}
$$
t_{\text{dist}} = \frac{\ln 2}{k_{12} + k_{21}}
$$
{% endraw %}

The distribution half-time, characterizing the rate of equilibration between central and peripheral compartments.

**Definition of thalf**

{% raw %}
$$
t_{\text{half}} = \frac{\ln 2}{k_{el}}
$$
{% endraw %}

The elimination half-life due to linear catabolic clearance, equal to the terminal half-life in the absence of TMDD.

---

### Figures & Tables

- **Figure 1**: Model diagrams for classical 2-compartment PK, 2-compartment piPK, and 3-compartment piPKRO models.
  - *Significance*: Illustrates the structural differences and the addition of target binding in the piPKRO model.
- **Figure 2**: Verification of parameter conversion between classical and piPK models using risankizumab PK parameters.
  - *Significance*: Demonstrates that the piPK model exactly reproduces central PK while providing a physiologically meaningful peripheral concentration ratio (Pdist).
- **Figure 3**: Case study 1: Bottom-up prediction of dupilumab PK and RO using the 2-compartment piPKRO model.
  - *Significance*: Shows the model's ability to predict nonlinear PK and RO in central and peripheral compartments without fitting to human data.
- **Figure 6**: Local drug depletion analysis: impact of receptor expression in central vs. peripheral compartments and varying tdist.
  - *Significance*: Highlights the phenomenon of local drug depletion when target-mediated clearance is faster than distribution, leading to lower tissue RO.
- **Table 2**: Typical piPK model parameters for human, cynomolgus monkey, and Tg32 mouse.
  - *Significance*: Provides reference values for model parameterization across species.

---

### Code & Reproducibility Assessment
No code or software implementation is provided in the tutorial. The model equations are given, and implementation in standard ODE solvers (e.g., NONMEM, Monolix, R) is straightforward.

---

### Future Directions
Extensions to soluble targets, multispecific antibodies, and inclusion of downstream pharmacodynamic effects. Further validation with multiple mAbs and clinical RO data. Development of formal model selection criteria and practical identifiability analysis.

---

### Expert Commentary
This tutorial fills an important gap by offering a model that is more mechanistic than empirical PK models yet simpler than full PBPK models. The focus on local drug depletion is a key insight that can impact dose selection for mAbs targeting membrane receptors. The parameter conversion from classical PK is a practical feature that facilitates adoption. However, users should be cautious about the assumption of uniform clearance and the uncertainty in target expression data.

---

### Bottom Line
The piPKRO model provides a practical, physiologically informed framework for simultaneously modeling PK and RO of mAbs. It enables better prediction of tissue-level target engagement and dose selection, especially when local drug depletion is a concern. Pharmacometricians can use this model as a complementary tool to classical PK and PBPK models, with straightforward parameter conversion and bottom-up target burden estimation.

---

---

## 📊 Figures

![Model Diagrams for (a) Classical 2-compartment model, (b) 2-compartment piPK model, (c) 3-compartment piPKRO model.]({{ site.baseurl }}/assets/digests/2026-05-31-a-tutorial-on-the-development-of-a-physiologically-inspired-pkro-model-for/figures/fig_01.png)