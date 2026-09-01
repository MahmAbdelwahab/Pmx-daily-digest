---
layout: post
title: "A Generalization of the Ternary Binding Model to Membrane-Confined Systems With Finite Copy Number"
date: 2026-09-01
authors: "Bellout H, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70323"
paper_type: methodology
tags: [methodology]
excerpt_text: "This paper generalizes the Douglass ternary binding model (TBM) to membrane-confined systems with finite receptor copy numbers, replacing the bulk volume with a synapse-defined reactive contact volume. The authors show that conventional bulk concentration mapping places BiTE systems in an affinity-limited regime where antigen density is mathematically inert, while membrane confinement shifts effective concentrations by ~6 orders of magnitude, restoring density dependence and motivating a new 'absolute formation dose' metric that replaces the conventional TF50."
pdf_path: "/assets/digests/2026-09-01-a-generalization-of-the-ternary-binding-model-to-membrane-confined-systems-with/PMx_A_Generalization_of_the_Ternary_Binding__20260901.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper generalizes the Douglass ternary binding model (TBM) to membrane-confined systems with finite receptor copy numbers, replacing the bulk volume with a synapse-defined reactive contact volume. The authors show that conventional bulk concentration mapping places BiTE systems in an affinity-limited regime where antigen density is mathematically inert, while membrane confinement shifts effective concentrations by ~6 orders of magnitude, restoring density dependence and motivating a new 'absolute formation dose' metric that replaces the conventional TF50.

---

### Executive Summary
The authors present a theoretical generalization of the classical Douglass ternary binding model for bispecific T-cell engagers (BiTEs), addressing a fundamental representational failure: the bulk well-mixed assumption places membrane-receptor systems in an asymptotic affinity-limited regime where antigen density has no numerical weight in dose–response predictions. Two membrane-confined formulations are developed—Branch A (effective 3D concentrations in a coarse-grained reactive contact volume with an open-reservoir boundary condition for the soluble ligand) and Branch B (surface densities with 2D dissociation constants)—both anchored to the TBM algebra and extended to a stochastic chemical master equation description that recovers the deterministic equilibrium in the long-time, large-copy limit. Using blinatumomab as a case study, the framework predicts a ~2.5-fold difference in required dose between NALM-6 and HAL-01 cell lines (CD19 density ratio ≈2.5), a prediction structurally invisible to the bulk formulation. The proposed 'absolute formation dose' d(N*)—the drug concentration needed to produce a fixed number of ternary complexes sufficient for T-cell activation—is shown to be robust to the unknown activation threshold, as the dose ratio between cell lines depends only on the copy-number ratio when contact geometry is shared.

---

### Scientific Context & Motivation
The standard Douglass ternary binding model (TBM) is the canonical thermodynamic framework for interpreting bispecific T-cell engager pharmacology, assuming a well-mixed, three-dimensional solution with all species treated symmetrically within a shared volume. However, BiTE-mediated trimer formation occurs not in bulk solution but within a nanoscale membrane synapse with finite receptor copy numbers, where receptors are confined to opposed membranes and interact only within a limited contact zone defined by microvillus topology. This creates a critical knowledge gap: the conventional bulk concentration mapping may place the system in a regime where the antigen-density variable is mathematically inert, rendering the TBM structurally uninformative for predicting density-dependent dose–response relationships. The paper addresses whether a membrane-confined reformulation can restore the model's discriminating power and provide a therapeutically grounded metric for dose prediction.

---

## ⚡ Methodological Snapshot
The paper develops two membrane-confined generalizations of the Douglass ternary binding model. Branch A retains the 3D dissociation constants but replaces the bulk volume with a coarse-grained reactive contact volume defined by synapse geometry and microvillus topology, converting whole-cell receptor counts to effective concentrations via an accessibility factor α. A key modification is the replacement of the closed-system ligand mass balance with an open-reservoir boundary condition, justified by a Damköhler analysis, treating the free ligand concentration as fixed by the bulk reservoir. Branch B reformulates the problem entirely in terms of surface densities and 2D dissociation constants, satisfying a 2D detailed balance constraint, with explicit relations to the 3D parameters.

---

## 📐 Statistical Framework
The deterministic equilibrium is extended to a stochastic description via the chemical master equation for dimer and trimer counts in the open-reservoir setting. The master equation converges to a stationary distribution concentrated near the deterministic equilibrium in the long-time limit, and the deterministic TBM solution is recovered in the large-copy limit. The framework relies on the assumption that the reactive contact volume is well-mixed at the coarse-grained level, that the open-reservoir condition holds (justified by Damköhler analysis), and that the accessibility factor α captures the combined effects of geometric fraction, microvillus topology, steric hindrance, and incomplete recruitment. The dose ratio derivation assumes shared contact geometry across compared cell lines.

---

### Estimator Behavior
The framework does not involve statistical estimation in the conventional sense; rather, it provides deterministic equilibrium predictions and a stochastic stationary distribution. The key 'estimator' property is the robustness of the dose ratio: the ratio d(N*)_low/d(N*)_high is mathematically independent of the specific trimer threshold N* and of the accessibility factor α, provided both cell lines share the same contact geometry. This invariance holds under the ascending-limb condition for the blinatumomab parameterization. The stochastic master equation converges to the deterministic equilibrium in the long-time and large-copy limit, establishing consistency between the stochastic and deterministic descriptions.

---

### Validation Design
The paper does not present a conventional simulation study or benchmark comparison against experimental data. Validation is primarily analytical: the authors demonstrate that the membrane-confined formulation recovers the deterministic TBM solution in appropriate limits (long-time, large-copy), and they establish the asymptotic collapse of the bulk mapping through a structural diagnostic comparing effective concentrations to dissociation constants. The blinatumomab case study uses published molecular parameters (CD19 binding affinity, cell-line copy numbers for NALM-6 and HAL-01) to generate a falsifiable prediction (2.5-fold dose ratio) that is structurally invisible to the bulk formulation. Robustness is assessed analytically across geometric parameters and the unknown threshold N*.

---

### Applicability Boundaries
The framework applies to membrane-confined systems where bridging ligands act at a cell–cell interface with finite receptor copy numbers, particularly in the scanning regime (intermembrane gap ~10 nm) where cells are 'close but not there yet.' It works when the system is in the target-dominant regime (effective receptor concentrations >> dissociation constants), which membrane confinement achieves by shifting effective concentrations by ~6 orders of magnitude. The framework does not apply to: (1) bulk well-mixed systems where the conventional TBM is appropriate; (2) systems driven into the affinity-limited regime (e.g., very large gap height or very low affinity) where antigen density is again mathematically inert; (3) very low copy numbers where the deterministic equilibrium may not be reached within the contact lifetime; (4) systems requiring resolution of spatial heterogeneity beyond microvillus topology or inclusion of internalization/recycling and serial engagement. The dose ratio predictions require shared contact geometry across compared cell lines.

---

### Comparison to Alternatives
Compared to the standard Douglass TBM, the membrane-confined generalization preserves the original algebra while restoring representational capacity for the regime in which therapeutic activity occurs. The bulk mapping places systems in the affinity-limited regime where antigen density is mathematically inert and the TBM predicts identical dose–response regardless of target expression; membrane confinement corrects this by relocating the thermodynamic description to the actual reactive contact volume. Compared to the conventional TF50 metric, the absolute formation dose d(N*) preserves density information that TF50 erases by normalizing each cell line to its own maximum. The framework is positioned as a theoretical complement to the TBM rather than a replacement, with the central diagnostic being the identification of a representational boundary below which bulk binding models lose structural informativeness for membrane-confined systems.

---

### Implementation Guidance
The framework is presented analytically without accompanying software. Implementation requires: (1) estimating the accessibility factor α (geometric fraction, microvillus factor, steric hindrance, recruitment efficiency) with a representative baseline of ~10⁻³ for T-cell synapses; (2) defining the reactive contact volume from synapse geometry and intermembrane gap height h (~10 nm for the scanning regime); (3) converting whole-cell receptor counts to effective concentrations via Equation (18); (4) applying the open-reservoir boundary condition for the soluble ligand; (5) computing the absolute formation dose d(N*) for a chosen trimer threshold. The dose ratio between cell lines is robust to α and N* when contact geometry is shared, simplifying practical application. Computational cost is minimal (closed-form algebraic system), though the stochastic master equation extension would require numerical solution for finite-copy-number systems.

---

## 📊 Key Findings
1) Under conventional bulk mapping, both NALM-6 and HAL-01 cell lines fall deep into the affinity-limited regime where antigen density is mathematically inert, and the TBM predicts identical dose–response regardless of target expression. 2) Membrane confinement shifts effective antigen concentration by six orders of magnitude—from ~10⁻³ nM to ~10³ nM—restoring antigen density as a governing variable for trimer formation. 3) The proposed absolute formation dose d(N*) replaces the conventional TF50, which normalizes each cell line to its own maximum and erases density dependence. 4) For NALM-6 (21,000 CD19/cell) and HAL-01 (52,000 CD19/cell, 2.48× higher density), the framework predicts a ~2.5-fold difference in required dose—a prediction structurally invisible to the bulk formulation. 5) The dose ratio is mathematically independent of the specific trimer threshold N* and of the accessibility factor α, provided both cell lines share the same contact geometry, making the prediction robust to unmeasured parameters. 6) The stochastic extension yields a qualitative counterpart: the probability of at least one productive trimer forming during a scanning encounter is density-dependent under membrane confinement.

---

### Strengths & Limitations

#### Strengths
- Preserves the original TBM algebra while restoring representational capacity for membrane-confined systems, providing continuity with established theory
- Introduces the therapeutically grounded absolute formation dose d(N*) that preserves density information erased by the conventional TF50 normalization
- Provides a rigorous stochastic extension via the chemical master equation with a clear deterministic limit recovery (long-time, large-copy limit)
- Dose ratio predictions are robust to unknown parameters (activation threshold N*, accessibility factor α) when contact geometry is shared
- Offers a clear diagnostic framework (affinity-limited vs. target-dominant regime) that identifies when bulk binding models lose structural informativeness
- Dual formulation (Branch A: effective 3D concentrations; Branch B: surface densities with 2D constants) accommodates different experimental measurement conventions

#### Limitations (Acknowledged by Authors)
- The threshold N* (number of ternary complexes sufficient for T-cell activation) has not been directly measured for bispecific-mediated killing
- The framework does not include CD3 and antigen internalization/recycling, spatial heterogeneity within the synapse beyond microvillus topology, serial target engagement, or stochastic kinetics at very low copy numbers where the deterministic equilibrium may not be reached within contact lifetime
- The coarse-grained single reactive contact volume does not resolve the full bulk solution, entire cell surface, and individual synaptic subdomains separately

#### Limitations (Expert Review)
- No direct experimental validation of the predicted 2.5-fold dose ratio is provided; the prediction remains theoretical
- The accessibility factor α and microvillus topology parameters are difficult to estimate empirically, and the robustness claim relies on the assumption that both cell lines share identical contact geometry
- The open-reservoir boundary condition for the soluble ligand, justified by a Damköhler analysis, may not hold in all experimental settings (e.g., very short contact times or diffusion-limited conditions)
- The framework does not address the temporal dynamics of synapse formation or the kinetics of approach to equilibrium, which may be critical for in vitro potency assays with fixed incubation times
- The claim that the dose ratio is independent of α requires that the geometric fraction and microvillus factor be identical across compared cell lines—an assumption that may be violated in practice

#### Generalizability
The framework is deliberately general: the effective-concentration mapping, open-reservoir boundary condition, and stochastic extension apply to any bridging therapeutic acting at a cell–cell interface, including chimeric antigen receptor (CAR) synapses, synthetic synNotch systems, and viral entry kinetics with membrane-confined receptors. The central structural finding—that the volume in which binding is modeled determines which asymptotic regime governs the system—is presented as a general property applicable beyond T-cell engagers. However, the quantitative predictions (e.g., the 2.5-fold dose ratio) are specific to the blinatumomab parameterization and the scanning-regime geometry assumed.

---

### Key Equations

**Effective receptor concentration in contact volume (Branch A)**

{% raw %}
$$
C_A = \frac{\alpha_A N_A}{V_c}
$$
{% endraw %}

Converts whole-cell receptor counts N_A to an effective 3D molar concentration in the reactive contact volume V_c, scaled by the accessibility factor α_A that accounts for geometric fraction, microvillus topology, steric hindrance, and incomplete recruitment.

**Open-reservoir boundary condition for soluble ligand**

{% raw %}
$$
B_{\text{free}} = B_{\text{bulk}}
$$
{% endraw %}

Replaces the closed-system ligand mass balance (Equation 14 of the original TBM) with an open-reservoir condition justified by a Damköhler analysis, treating the free ligand concentration as fixed by the bulk reservoir rather than depleted by binding in the contact volume.

**Dose ratio independence from activation threshold**

{% raw %}
$$
\frac{d(N^*)_{\text{low}}}{d(N^*)_{\text{high}}} \approx \frac{N_{\text{high}}}{N_{\text{low}}}
$$
{% endraw %}

The ratio of absolute formation doses between two cell lines equals the inverse of their antigen copy-number ratio, independent of the specific trimer threshold N* and the accessibility factor α, provided both cell lines share the same contact geometry.

**Chemical master equation for trimer formation**

{% raw %}
$$
\frac{dP(n,t)}{dt} = \sum_{n'} [W(n|n')P(n',t) - W(n'|n)P(n,t)]
$$
{% endraw %}

Stochastic description of dimer and trimer counts in the open-reservoir setting, which converges to a stationary distribution concentrated near the deterministic equilibrium in the long-time and large-copy limit.

---

### Figures & Tables

- **Figure 1**: Schematic of initial contact (left) and mature synapse (right) between a T cell and a target cell, illustrating the scanning-phase intermembrane gap h and the transition to close apposition.
  - *Significance*: Establishes the physical context for the coarse-grained reactive contact volume and motivates the focus on the scanning regime as the gatekeeping phase determining potency.
- **Table (Section 8.9 Summary)**: Comparison of bulk Douglass vs. membrane-confined formulations across dose ratio, density-dependence, and representational capacity.
  - *Significance*: Provides a concise summary of the central diagnostic finding: the bulk formulation is density-independent while the membrane-confined formulation restores density dependence.

---

### Code & Reproducibility Assessment
No code or software implementation is provided.[^fc-15] The framework is presented as an analytical derivation with a fully specified parameterization (molecular parameters for blinatumomab, cell-line CD19 counts, synapse geometry, gap height, microvillus factor), which would allow independent numerical reproduction. The absence of a reference implementation (e.g., R/Python scripts or a simulation package) limits immediate adoption.

---

### Future Directions
Direct experimental validation of the predicted density-dependent dose scaling in within-assay comparisons of cell lines with differing antigen density; measurement of the absolute trimer threshold N* for bispecific-mediated T-cell activation; extension of the stochastic master equation framework to include internalization/recycling, serial target engagement, and coupling of multiple contact events over time; investigation of whether the density-dependent scaling disappears when systems are driven into the affinity-limited regime (e.g., via large gap height or very low affinity); application of the framework to other bridging therapeutics (CAR synapses, synNotch, viral entry).

---

### Expert Commentary
This is a conceptually important contribution that identifies a subtle but critical failure mode in the standard application of the ternary binding model. The insight that the choice of concentration mapping determines which asymptotic regime governs the system—and therefore whether antigen density has any predictive role—is a structural diagnostic that should inform how pharmacometricians interpret in vitro potency panels for bispecifics. The absolute formation dose d(N*) is a meaningful step toward therapeutically grounded potency metrics, though its practical utility hinges on experimental determination of the activation threshold N*. The robustness of the dose ratio to unknown parameters is a notable strength, but the lack of experimental validation and the strong assumption of shared contact geometry across compared cell lines temper immediate clinical translation. The stochastic extension is well-posed and provides a principled bridge to synapse-formation probability, though the deterministic equilibrium recovery in the large-copy limit is expected and does not address finite-time kinetics. Overall, this paper should prompt re-examination of how bulk-derived potency metrics are interpreted for membrane-confined immunotherapies.

---

### Bottom Line
For pharmacometricians and drug developers working with bispecific T-cell engagers and related bridging immunotherapies, this paper delivers a critical methodological warning: conventional bulk concentration mapping can render antigen density mathematically inert in TBM-based dose–response modeling, producing structurally uninformative predictions. The membrane-confined reformulation—using a synapse-defined reactive contact volume, an open-reservoir boundary condition, and the absolute formation dose d(N*)—restores density dependence and enables antigen-density-aware dose predictions. The key practical takeaway is that dose ratios between cell lines of different antigen density should track the copy-number ratio when contact geometry is shared, and this prediction is robust to the unknown activation threshold. The framework also provides a diagnostic criterion (affinity-limited vs. target-dominant regime) for determining when bulk binding models are structurally informative for membrane-confined systems.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “Validation is primarily analytical.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **CONTRADICTED** — original: “The framework does not apply to bulk well-mixed systems where the conventional TBM is appropriate.” → correction: “show how, in the long-time and large-copy limit, the deterministic TBM solution is recovered.”
[^fc-3]: **UNSUPPORTED** — original: “The framework does not apply to systems driven into the affinity-limited regime where antigen density is mathematically inert.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “Implementation requires estimating the accessibility factor α with a representative baseline of ~10⁻³ for T-cell synapses.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “Implementation requires defining the reactive contact volume from synapse geometry and intermembrane gap height h (~10 nm for the scanning regime).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “Computational cost is minimal for the closed-form algebraic system.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “The stochastic master equation extension would require numerical solution for finite-copy-number systems.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “The accessibility factor α and microvillus topology parameters are difficult to estimate empirically.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “The open-reservoir boundary condition may not hold in all experimental settings.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “The framework does not address the temporal dynamics of synapse formation or the kinetics of approach to equilibrium.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The effective receptor concentration in contact volume is given by C_A = α_A N_A / V_c.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “The open-reservoir boundary condition for soluble ligand is B_free = B_bulk.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “The chemical master equation for trimer formation is given by dP(n,t)/dt = Σ_n' [W(n|n')P(n',t) - W(n'|n)P(n,t)].” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “The Table in Section 8.9 compares bulk Douglass vs. membrane-confined formulations across dose ratio, density-dependence, and representational capacity.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “No code or software implementation is provided.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “The absence of a reference implementation limits immediate adoption.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **UNSUPPORTED** — original: “Future directions include measurement of the absolute trimer threshold N* for bispecific-mediated T-cell activation.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-18]: **UNSUPPORTED** — original: “The practical utility of d(N*) hinges on experimental determination of the activation threshold N*.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-19]: **UNSUPPORTED** — original: “The lack of experimental validation and the strong assumption of shared contact geometry temper immediate clinical translation.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Schematic of initial contact (left) and mature synapse (right) between a T cell and a target cell. The parameterhrepresents the scanning-phase intermembrane gap,]({{ site.baseurl }}/assets/digests/2026-09-01-a-generalization-of-the-ternary-binding-model-to-membrane-confined-systems-with/figures/fig_01.jpg)