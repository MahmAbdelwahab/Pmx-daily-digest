---
layout: post
title: "Simulation-based assessment of the P-glycoprotein expression-activity relationship using a kinetic binding model"
date: 2026-03-24
authors: "van Valkengoed DW, Rottschäfer V, de Lange ECM"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026"
doi: "https://doi.org/10.1007/s10928-025-10015-6"
paper_type: methodology
tags: [methodology, pbpk, regulatory]
excerpt_text: "This theoretical study challenges the fundamental assumption that P-glycoprotein (P-gp) expression scales linearly with activity for IVIVE applications. Using a mechanistic kinetic binding model, the authors demonstrate that the expression-activity relationship (EAR) is drug-dependent and becomes non-linear when efflux efficiency (koff/ke ratio) is high or when P-gp expression exceeds drug concentration. Essential reading for scientists involved in transporter-based PBPK modeling, IVIVE, and CNS drug development."
pdf_path: "/assets/digests/2026-03-24-simulation-based-assessment-of-the-p-glycoprotein-expression-activity/PMx_Simulationbased_assessment_of_the_Pglyco_20260324.pdf"
retroactively_classified: true
---

### Quick Take
This theoretical study challenges the fundamental assumption that P-glycoprotein (P-gp) expression scales linearly with activity for IVIVE applications. Using a mechanistic kinetic binding model, the authors demonstrate that the expression-activity relationship (EAR) is drug-dependent and becomes non-linear when efflux efficiency (koff/ke ratio) is high or when P-gp expression exceeds drug concentration. Essential reading for scientists involved in transporter-based PBPK modeling, IVIVE, and CNS drug development.

---

### Executive Summary
The study investigates the validity of the common assumption that P-gp transporter expression is linearly proportional to its activity—a cornerstone of current IVIVE methodologies that use relative expression factors (REFs) to scale in vitro data to in vivo predictions. Through comprehensive simulations using a mass-action kinetic model of P-gp-mediated efflux, the authors reveal that the P-gp expression-activity relationship (EAR) is inherently non-linear for many drugs, particularly those with high efflux efficiency (low koff/ke ratios) or when P-gp expression is in excess relative to drug concentration. These findings explain conflicting experimental observations in the literature and suggest that current REF-based scaling approaches may introduce significant errors in PBPK predictions for certain compounds. The work has immediate implications for CNS drug development and regulatory submissions involving P-gp substrate predictions.

---

## ⚡ Methodological Snapshot
The study employs a previously validated mass-action kinetic model of P-gp-mediated transport (Tran et al., 2005) that describes drug movement across a cellular monlayer with distinct compartments: apical chamber, basolateral chamber, cytoplasm, and membrane leaflets. The model accounts for passive diffusion (permeability P), drug partitioning into lipid membranes (partition coefficients K), and active efflux via P-gp characterized by association (kon), dissociation (koff), and efflux (ke) rate constants. Simulations were performed in R (rxode2 package) using the LSODA solver.

The authors first simulated seven well-characterized P-gp substrates (amprenavir, digoxin, ketoconazole, loperamide, quinidine, verapamil, vinblastine) using published kinetic parameters. They then conducted extensive virtual drug simulations across wide ranges of koff (10^2–10^7 s^−1) and ke (0.03–30 s^−1), varying initial P-gp expression (10–100,000 µM) and drug concentrations (0.1–100 µM). The key metric, relative EAR at x% expression (rEARx%), was defined as the ratio of cumulative drug efflux at x% P-gp expression compared to 100% expression, with linearity defined as rEARx% = x%.

---

## 🏗️ Structural Model Breakdown
The model consists of five primary compartments: apical chamber (AC), basolateral chamber (BC), cytoplasm (CP), and membrane leaflets (apical outer AO, basolateral outer BO, inner leaflets IL). Drug transport occurs via passive diffusion across membranes (rate constants PAC, PBC) and active P-gp-mediated efflux from the apical inner leaflet to the apical chamber. P-gp exists in free (CPgp,free) and drug-bound (CPgp,bound) states. The total P-gp concentration (CPgp,tot) is conserved (CPgp,free + CPgp,bound = CPgp,tot). Drug partitioning between aqueous and lipid phases is governed by partition coefficients KAO, KBO, and KIL. The system is described by a set of ordinary differential equations accounting for mass balance in each compartment, with P-gp-mediated efflux represented as a binding/dissociation/efflux kinetic process rather than a simple clearance term.

---

### Detailed Methodological Analysis

#### Modeling Approach
Mass-action kinetic model of P-gp-mediated transport across a confluent cell monolayer (Tran et al., 2005). The model includes five compartments: apical chamber, basolateral chamber, cytoplasm, apical inner/outer leaflets, and basolateral inner/outer leaflets. P-gp binding occurs specifically at the apical inner leaflet. The model assumes instantaneous equilibrium between aqueous compartments and adjacent lipid leaflets. Implemented in RStudio (v4.3.3) using rxode2 (v3.0.4) with LSODA ODE solver.

#### Data Sources
Kinetic parameters (kon, koff, ke, passive permeability P, partition coefficients K) for seven P-gp substrates (amprenavir, digoxin, ketoconazole, loperamide, quinidine, verapamil, vinblastine) obtained from Lumen et al. (2013) and Tran et al. (2005). Reference P-gp expression of 1000 µM based on MDCKII-MDR1 cell estimates. Virtual drug simulations explored parameter space: koff 10^2–10^7 s^−1, ke 0.03–30 s^−1, P-gp expression 10^1–10^5 µM, drug concentration 0.1–100 µM.

#### Estimation Methods
Deterministic ODE simulations (not parameter estimation). System of ordinary differential equations solved numerically. Cumulative efflux calculated by integration of efflux rate over 6 hours (tend = 21,600 s).

#### Model Evaluation
Sensitivity analysis of EAR to individual parameters (PAC, KIL) performed by varying these parameters while holding kinetic constants fixed. Virtual drug screening across wide parameter ranges to identify determinants of linear vs. non-linear EAR behavior. Comparison of simulation results with published experimental data from literature (Tachibana et al., Storelli et al., Kalvass et al., etc.).

#### Covariate Analysis
Systematic exploration of drug-specific factors (passive permeability PAC, partition coefficient KIL, efflux efficiency koff/ke ratio, lipophilicity logP) and system-specific factors (initial P-gp expression, drug concentration) on the EAR. Heatmap visualization of rEAR50% across parameter combinations.

---

### Scientific Context & Motivation
In vitro-in vivo extrapolation (IVIVE) of transporter activity relies on two critical assumptions: (1) linear proportionality between transporter expression and activity, and (2) drug-independence of this relationship. These assumptions underpin the use of relative expression factors (REFs) to scale efflux ratios (ERs) from cell-based assays to in vivo blood-brain barrier (BBB) predictions. However, experimental literature presents conflicting evidence—some studies show linear EARs while others demonstrate non-linear relationships or drug-dependent scaling. This theoretical work addresses this knowledge gap by mechanistically exploring how drug-specific kinetic properties (association, dissociation, and efflux rates) and system conditions (P-gp expression levels, drug concentrations) influence the EAR, providing a unifying framework to reconcile contradictory experimental findings.

---

### Statistical Rigor Assessment
As a theoretical simulation study, statistical power and sample size considerations are replaced by parameter space coverage and sensitivity analyses. The study comprehensively explores physiologically and experimentally relevant ranges for all parameters. The virtual drug simulations cover 5 orders of magnitude for koff and 3 orders for ke, ensuring robust identification of the koff/ke ratio as the critical determinant. The authors appropriately acknowledge that simulations do not constitute proof and require experimental validation. Missing data is not applicable as this uses deterministic simulations with fixed parameters from literature. Sensitivity analyses (Figure 5) adequately assess model behavior under parameter perturbation.

---

## 📊 Key Findings
The P-gp expression-activity relationship (EAR) is drug-dependent and not universally linear. Among seven tested substrates, four (amprenavir, digoxin, quinidine, vinblastine) showed distinctly non-linear EARs (rEAR50% 91–96%), two (ketoconazole, verapamil) showed nearly linear EARs (rEAR50% ~53–54%), and loperamide showed intermediate behavior (rEAR50% 79%). The koff/ke ratio (efflux efficiency) is the primary determinant of EAR linearity—drugs with low koff/ke ratios (efficient efflux) exhibit non-linear EARs, while high ratios favor linearity. Non-linear EARs occur when P-gp expression is in excess relative to drug concentration (high P-gp:drug ratio). Passive permeability (PAC) and membrane partitioning (KIL) influence but do not determine EAR linearity. These theoretical findings align with conflicting experimental observations in the literature, reconciling reports of both linear and non-linear P-gp EARs.

---

## 💡 Clinical & Regulatory Implications
Current IVIVE approaches using relative expression factors (REFs) to scale P-gp activity between in vitro and in vivo systems may produce inaccurate predictions for drugs with non-linear EARs (particularly those with high efflux efficiency or when P-gp is in excess). This has direct implications for CNS drug development where P-gp limits brain penetration. For drugs like quinidine or digoxin, simply scaling by P-gp expression will overpredict efflux activity at lower expression levels. The findings suggest that REF-based scaling should be applied cautiously, considering the specific drug's kinetic properties (koff/ke) and the relative abundance of P-gp versus drug concentration. Regulatory submissions involving P-gp substrate predictions may need to justify linear EAR assumptions or incorporate mechanistic kinetic models that account for non-linear behavior.

---

### Strengths & Limitations

#### Strengths
- Mechanistic approach using validated kinetic model provides fundamental insights beyond empirical observations
- Comprehensive parameter space exploration (virtual drugs) identifies universal principles (koff/ke ratio) applicable beyond tested compounds
- Reconciles conflicting literature reports by demonstrating context-dependent EAR behavior
- Direct relevance to current IVIVE and PBPK modeling practices in drug development
- Clear visualization of complex parameter interactions through heatmaps (Figure 6)

#### Limitations (Acknowledged by Authors)
- Theoretical simulation study requires experimental validation
- Results specific to the kinetic model assumptions (e.g., instantaneous equilibrium between compartments)
- Assumption that kon is drug-independent may not hold universally
- Uncertainty regarding identifiability of kinetic parameters when fitting experimental data
- Assumption that total P-gp expression equals efflux-active P-gp (may not account for membrane localization/microvilli effects)

#### Limitations (Expert Review)
- Limited to single transporter (P-gp) dynamics; does not address potential cooperativity or competition in multi-transporter systems
- Simulations assume constant P-gp expression over time (no induction/inhibition feedback)
- Does not account for potential saturation of P-gp at very high drug concentrations (though this is partially addressed through the kinetic binding framework)
- Reference P-gp expression of 1000 µM may not represent all in vitro or in vivo systems equally

#### Generalizability
Findings are generalizable to other efflux transporters with similar kinetic mechanisms (binding-dissociation-efflux), particularly BCRP. The principles regarding expression-activity relationships likely extend beyond CNS applications to other barrier tissues (placenta, liver, kidney). However, quantitative predictions are specific to the P-gp kinetic model structure and the parameter ranges explored.

---

### Key Equations

**Total Accessible Apical Volume**

$$
V_{A,\text{tot}} = V_A + V_{AO} \cdot K_{AO}
$$

Accounts for drug distribution in both aqueous apical chamber and apical outer leaflet membrane, assuming instantaneous equilibrium between phases.

**Drug-P-gp Association Kinetics**

$$
\frac{dC_{Pgp,\text{bound}}}{dt} = k_{on} \cdot C_{IL} \cdot C_{Pgp,\text{free}} - k_{off} \cdot C_{Pgp,\text{bound}} - k_e \cdot C_{Pgp,\text{bound}}
$$

Describes the rate of change of P-gp-bound drug concentration, accounting for association from inner leaflet, dissociation back to inner leaflet, and efflux to apical chamber.

**Cumulative Drug Efflux**

$$
A_{\text{effluxed,tot}} = \int_{0}^{t_{end}} k_e \cdot C_{Pgp,\text{bound}}(t) \cdot 0.5 \cdot V_{IL}   dt
$$

Total amount of drug effluxed by P-gp over the simulation period, calculated by integrating the efflux rate over time.

**Relative Expression-Activity Relationship**

$$
rEAR_{x\%} = \frac{A_{\text{effluxed,tot}} \text{ at } x\% \text{ P-gp}}{A_{\text{effluxed,tot}} \text{ at } 100\% \text{ P-gp}} \times 100\%
$$

Metric to assess linearity of the EAR. If rEARx% equals x%, the relationship is linear; deviations indicate non-linearity.

**Inner Leaflet Drug Concentration**

$$
C_{IL} = C_{CP} \cdot K_{IL}
$$

Assumption of instantaneous equilibrium between cytoplasm and inner leaflet membrane, where drug concentration in inner leaflet equals cytoplasmic concentration times partition coefficient.

---

### Figures & Tables

- **Figure 1**: Schematic representation of the P-gp kinetic model showing the transwell setup with apical chamber, basolateral chamber, cytoplasm, and membrane leaflets. Illustrates passive diffusion pathways and P-gp binding/efflux from the apical inner leaflet.
  - *Significance*: Provides the structural framework for the ODE system. Essential for understanding how drug compartments interact and where P-gp-mediated transport occurs in the model.
- **Figure 2**: Visual guide explaining the rEARx% metric. Shows reference point at 100% P-gp expression and illustrates how linear (red line) vs. non-linear (green curve) EARs appear when plotting relative activity against relative expression.
  - *Significance*: Key conceptual figure defining the primary endpoint used throughout the study. Clarifies how deviations from the diagonal indicate non-linear behavior.
- **Figure 3**: P-gp EAR curves for seven substrates (amprenavir, digoxin, ketoconazole, loperamide, quinidine, verapamil, vinblastine) at 1 µM drug concentration and 1000 µM reference P-gp expression. Shows distinct grouping into non-linear (digoxin, quinidine, vinblastine, amprenavir), intermediate (loperamide), and linear (ketoconazole, verapamil) EARs.
  - *Significance*: Primary result demonstrating drug-dependent EAR behavior. Validates the theoretical model against known experimental observations for specific compounds.
- **Figure 4**: Bar charts correlating EAR type with drug properties: (A) passive permeability PAC, (B) partition coefficient KIL, (C) efflux efficiency (koff/ke ratio), and (D) lipophilicity logP. Color-coded by EAR type (red=linear, yellow=intermediate, green=non-linear).
  - *Significance*: Identifies koff/ke ratio as the critical determinant of EAR linearity. Shows that passive permeability and partitioning alone do not predict EAR behavior.
- **Figure 5**: Sensitivity analysis showing EAR curves for amprenavir-like (A, C) and verapamil-like (B, D) compounds with varied passive permeability PAC (A, B) or partition coefficient KIL (C, D).
  - *Significance*: Demonstrates that while PAC and KIL influence EAR magnitude, they do not change the fundamental linearity classification of a drug. Supports the primacy of kinetic parameters (koff, ke) over physicochemical properties.
- **Figure 6**: Heatmaps of rEAR50% for virtual drugs across koff (y-axis) and ke (x-axis) parameter space, stratified by different initial drug concentrations (rows: 0.1–100 µM) and reference P-gp expressions (columns: 10–100,000 µM). Red indicates linear (rEAR50% ≈ 50%), green indicates non-linear (rEAR50% ≈ 100%).
  - *Significance*: Comprehensive visualization of the parameter space driving EAR behavior. Clearly shows that non-linearity (green) occurs at low koff/ke ratios and when P-gp expression exceeds drug concentration.
- **Table 1**: Comprehensive listing of model variables, drug-specific parameters (kon, koff, ke, P, K), and system-specific parameters (volumes, surface areas) with units and fixed values where applicable.
  - *Significance*: Essential reference for model implementation and replication. Defines the parameter space and units used in simulations.
- **Table 2**: Kinetic parameter estimates for seven P-gp substrates: amprenavir, digoxin, ketoconazole, loperamide, quinidine, verapamil, and vinblastine. Includes kon, koff, ke, PAC, PBC, and partition coefficients (KAO, KBO, KIL).
  - *Significance*: Input data for specific drug simulations. Enables reproduction of Figure 3 results and provides reference values for the chemical space explored.

---

### Code & Reproducibility Assessment
Simulations performed in RStudio (v4.3.3) using rxode2 package (v3.0.4) with LSODA solver. Data visualization used ggplot2 (v3.5.2). All input parameters are provided in Table 1 and Table 2. Raw model output available upon reasonable request. No public repository or code sharing link provided, though the ODE system is fully described in the methods and reference (Tran et al., 2005), allowing replication by experienced modelers.

---

### Supplementary Materials
Supplementary materials include additional figures showing: (S1) relationship between PAC/KIL ratio and EAR, (S2) EAR for hybrid virtual drugs ('ampramil' and 'veravir') with swapped permeability/partitioning parameters, (S3) heatmaps at higher passive permeability (700 nm/s), (S4) heatmaps at increased KIL, (S5) reanalysis of Liu et al. BCRP data showing drug-dependent EAR, (S6) reanalysis of Tachibana et al. Jmax data normalized for comparison, and (S7) loperamide EAR at 0.1 µM concentration matching Kalvass et al. experimental conditions.

---

### Future Directions
Experimental validation of predicted non-linear EARs for specific drug candidates with varying koff/ke ratios is needed. Extension of the kinetic binding model to full PBPK frameworks for temporal predictions of CNS disposition. Investigation of EAR behavior in multi-transporter systems (P-gp + BCRP) and potential transporter-transporter interactions. Exploration of EAR implications for drug-drug interactions involving P-gp inhibition/induction. Development of improved scaling methodologies that incorporate kinetic parameters (koff/ke) rather than expression alone. Application of similar theoretical frameworks to other transporters (OATP, OAT, OCT) to test universality of EAR non-linearity.

---

### Expert Commentary
This work represents a critical paradigm shift in how we conceptualize transporter scaling in pharmacometrics. For years, the field has relied on the convenience of relative expression factors (REFs) without fully questioning the underlying linearity assumption. Van Valkengoed et al. elegantly demonstrate that this assumption fails precisely when P-gp is most efficient at its job—when drugs bind tightly and are rapidly effluxed (low koff/ke). This creates a 'ceiling effect' where additional P-gp expression does not yield proportional increases in activity, fundamentally challenging the 'more transporter = more efflux' intuition.

The teaching point here is that transporter kinetics matter more than abundance for certain compounds. This aligns with emerging evidence that mechanistic modeling of transporters requires consideration of binding kinetics, not just expression proteomics. For the field, this suggests we may need to move beyond simple REF scaling toward kinetic parameter-informed approaches, possibly requiring in vitro measurement of koff and ke (or surrogates) rather than just expression levels. The reconciliation of conflicting literature data through this mechanistic lens is particularly valuable—it shows that apparent contradictions often reflect different experimental conditions (drug concentrations, expression levels) rather than methodological errors.

---

### Bottom Line
Practicing pharmacometricians should reconsider automatic reliance on relative expression factors (REFs) for P-gp IVIVE, particularly for drugs with high efflux efficiency (tight binding, rapid efflux; low koff/ke ratio) or when P-gp expression substantially exceeds drug concentrations. The expression-activity relationship is context-dependent, not universal. When building PBPK models for P-gp substrates, consider implementing mechanistic kinetic binding models rather than simple scaling factors, or at minimum, validate REF assumptions against observed data for your specific compound. This work provides the theoretical justification for why some drugs scale linearly with P-gp expression while others do not, offering a framework (koff/ke ratio assessment) to prospectively identify which compounds may violate linear scaling assumptions.

---

---

## 📊 Figures

```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [Schematic representation of the P-gp kinetic model36. The model represents the in vitro setup commonly used for transwell permeability assays. Here, a monolayer of a P-gp expressin],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [Visual guide on the rEARx%. The black dot indicates the reference simulation with 100% P-gp expression. The red line represents a linear EAR, and the red points indicate such a lin],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [P-gp expression-activity relationship (EAR) of seven P-gp substrates. All the simulations started with a reference (100%) P-gp expression of 1000 µM and the drug concentration in t],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [P-gp EAR for seven P-gp substrates and associated individual drug properties.. (A) PAC, (B) KIL, (C) efflux efficiency, (ratio koff/ke), and, (D) logP. Red bars indicate drugs that],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [P-gp EAR for amprenavir-like (AandC) and verapamil-like (BandD) compounds where either the passive permeability PAC(AandB) or the partitioning coefficient KIL(CandD) is varied. In ],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```

```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_06.jpg", width: 90%),
  caption: [Heatmap of the rEAR50%for virtual drugs with different combinations ofkoffandke(axes), and different initial drug and reference P-gp expressions (rows and columns). In every figure],
  placement: auto,
) <fig-6>
#set page(flipped: false)
```