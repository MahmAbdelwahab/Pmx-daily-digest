---
layout: post
title: "On the structural identifiability of nonlinear models of ligand binding dynamics"
date: 2026-07-22
authors: "White C, Rottschäfer V, Bridge L"
journal: "Journal of Pharmacokinetics and Pharmacodynamics 53:42"
doi: "10.1007/s10928-026-10040-z"
paper_type: methodology
tags: [methodology]
excerpt_text: "This paper applies structural identifiability analysis to nonlinear receptor binding models, revealing that ligand depletion models are globally identifiable from a single timecourse, while the ligand-induced dimerisation model requires knowledge of an experimental scaling factor for full identifiability. The similarity transformation method is shown to be more tractable than the Taylor series approach for these nonlinear systems."
pdf_path: "/assets/digests/2026-07-22-on-the-structural-identifiability-of-nonlinear-models-of-ligand-binding-dynamics/PMx_On_the_structural_identifiability_of_non_20260722.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper applies structural identifiability analysis to nonlinear receptor binding models, revealing that ligand depletion models are globally identifiable from a single timecourse, while the ligand-induced dimerisation model requires knowledge of an experimental scaling factor for full identifiability. The similarity transformation method is shown to be more tractable than the Taylor series approach for these nonlinear systems.

---

### Executive Summary
This paper applies classical structural identifiability analysis (SIA) methods—Taylor series and similarity transformation—to three nonlinear receptor binding models: (1) monomeric receptor with ligand depletion, (2) pre-dimerised receptor with ligand depletion, and (3) ligand-induced dimerisation (LID). The key finding is that the nonlinear depletion models are globally structurally identifiable from a single timecourse, in stark contrast to their linear (ligand-excess) counterparts, which are not. The LID model is not fully identifiable unless the experimental scaling factor $a$ is known, but the kinetic parameters $k_+$, $k_-$, and $\psi_-$ are uniquely identifiable. The paper highlights the intractability of the Taylor series method for even low-dimensional nonlinear systems and demonstrates that the similarity transformation method, while algebraically intensive, can yield results. The work provides a tutorial-style guide for applying these methods and underscores the importance of routine SIA in receptor theory and quantitative systems pharmacology.

---

### Scientific Context & Motivation
Structural identifiability analysis (SIA) determines whether model parameters can be uniquely estimated from a given experimental setup, assuming perfect data. It is a crucial but often overlooked step in receptor theory and quantitative systems pharmacology. Previous work by the authors established SIA results for linear ligand-receptor binding models, showing that many are not identifiable from a single timecourse. This paper extends that work to nonlinear models, including ligand depletion and ligand-induced dimerisation, which are more realistic representations of many experimental systems.

---

## ⚡ Methodological Snapshot
The paper applies two classical structural identifiability analysis (SIA) methods—Taylor series and similarity transformation—to three nonlinear ODE models of ligand-receptor binding. The Taylor series method expands the output in a power series around $t=0$ and equates coefficients to derive parameter relationships. The similarity transformation method assumes the existence of an alternate parameter set and an analytical mapping $\lambda(x)$ that preserves the input-output map, then applies the local state isomorphism theorem to derive conditions for parameter equality. Both methods require verifying controllability and observability of the system. The analysis is performed step-by-step, with the similarity transformation method proving more tractable for the models considered.

---

## 📐 Statistical Framework
The paper uses a deterministic ODE framework. The statistical assumptions are implicit: the analysis assumes noise-free, continuous-time observations of the output. The theoretical basis is the local state isomorphism theorem for nonlinear systems, which requires the system to be locally reduced (controllable and observable). The functions f, g, and h are assumed to be analytic. The analysis does not consider measurement error or process noise; it is purely structural.

---

### Estimator Behavior
Not directly assessed. The paper focuses on structural identifiability, not estimator properties. A brief numerical experiment (Appendix F) for the monomeric depletion model suggests that practical identifiability (and thus estimator precision) depends on the degree of depletion: strong depletion ($A_{tot}/R_{tot} \ll 1$) yields more stable parameter estimates across optimisation runs than weak depletion ($A_{tot}/R_{tot} \gg 1$).

---

### Validation Design
The paper does not include a formal validation study. The SIA results are derived analytically. A brief numerical experiment (Appendix F) for the monomeric depletion model uses simulated data with added noise to illustrate practical identifiability issues, but this is not a systematic validation. The LID model's non-identifiability is illustrated by showing three different parameter sets that produce identical output (Figure 3). No benchmark comparisons with other methods are performed, as the focus is on analytical SIA rather than estimation performance.

---

### Comparison to Alternatives
The linear ligand-excess models for monomeric and pre-dimerised receptors are not globally identifiable from a single timecourse; multiple experiments (e.g., varying ligand concentration) are required. The corresponding nonlinear depletion models are globally identifiable from a single timecourse, representing a major advantage. For the LID model, the transfer function method (applicable to linear systems) cannot be used. The Taylor series method becomes intractable for even low-dimensional nonlinear systems, whereas the similarity transformation method, though algebraically heavy, remains tractable for the models considered. Computational SIA packages (e.g., Strike-GOLDD, StrucID) are recommended for higher-dimensional models.

---

### Implementation Guidance
For low-dimensional nonlinear receptor models, the similarity transformation method can be applied manually with the aid of symbolic computation (e.g., MATLAB Symbolic Toolbox). The key steps are: (1) verify controllability and observability using Lie brackets and Lie derivatives, (2) assume an analytical mapping $\lambda(x)$, (3) apply the conditions of the local state isomorphism theorem (Eq. 2.16), and (4) solve the resulting algebraic equations for parameter relationships. For higher-dimensional models, computational packages (Strike-GOLDD, StrucID) are recommended. The computational cost is high for manual symbolic manipulation but manageable with automated tools. The authors note that the Taylor series method is not recommended for nonlinear models due to intractability.

---

## 📊 Key Findings
1. The nonlinear monomeric receptor model with ligand depletion is globally structurally identifiable from a single timecourse, unlike its linear (ligand-excess) counterpart. 2. The nonlinear pre-dimerised receptor model with ligand depletion is also globally structurally identifiable from a single timecourse, again contrasting with the non-identifiable linear version. 3. The LID model is not fully identifiable from a single timecourse; the identifiable parameters/combinations are $k_+$, $k_-$, $\psi_-$, $aR_{tot}$, and $\psi_+/a$. 4. If the experimental scaling factor $a$ is known, the LID model becomes globally identifiable from a single timecourse. 5. The Taylor series method becomes intractable for even low-dimensional nonlinear systems, while the similarity transformation method, though algebraically intensive, can yield results.

---

### Strengths & Limitations

#### Strengths
- Provides new, practically important SIA results for nonlinear receptor binding models.
- Demonstrates that ligand depletion can transform non-identifiable linear models into globally identifiable nonlinear ones.
- Offers a detailed, tutorial-style application of the similarity transformation method, which is valuable for researchers new to SIA.
- Clearly identifies the limitations of the Taylor series method for nonlinear systems.
- The LID model analysis shows that key kinetic parameters ($k_+$, $k_-$, $\psi_-$) are identifiable even when the full model is not.

#### Limitations (Acknowledged by Authors)
- The Taylor series method becomes intractable for even low-dimensional nonlinear systems.
- The similarity transformation method requires heavy, ad-hoc symbolic calculations that may not scale to higher-dimensional models.
- The analysis is limited to structural identifiability; practical identifiability (considering data quality) is not addressed in depth.
- The LID model is not fully identifiable unless the experimental scaling factor $a$ is known.

#### Limitations (Expert Review)
- The paper does not provide a systematic algorithm for deriving identifiable parameter combinations from the similarity transformation conditions; the process remains ad-hoc.
- The numerical experiment in Appendix F is too limited (20 runs, no formal diagnostics) to draw strong conclusions about practical identifiability.
- The analysis assumes a single timecourse; the impact of multiple timecourses (e.g., varying ligand concentrations) on identifiability is only briefly discussed for the LID model.
- No comparison is made with more modern, computational SIA tools (e.g., STRIKE-GOLDD, SIAN) that could automate the analysis.

#### Generalizability
The results are specific to the three models analysed, but the methodological framework and the general finding that nonlinearity (ligand depletion) can improve identifiability are broadly applicable to other nonlinear ODE models in pharmacology and systems biology.

---

### Key Equations

**General nonlinear ODE model**

{% raw %}
$$
\sum ({\textbf {p}})=\begin{bmatrix} {\textbf {x}}'(t,{\textbf {p}})={\textbf {f}}({\textbf {x}}(t,{\textbf {p}}),{\textbf {p}})+{\textbf {g}}({\textbf {x}}(t,{\textbf {p}}),{\textbf {p}}){\textbf {u}}(t),\\ {\textbf {y}}(t,{\textbf {p}})={\textbf {h}}({\textbf {x}}(t,{\textbf {p}}),{\textbf {p}}), \\ {\textbf {x}}(0,{\textbf {p}})={\textbf {x}}_0({\textbf {p}}), \end{bmatrix}
$$
{% endraw %}

General form of a nonlinear ODE model with inputs, states, and outputs, used as the basis for structural identifiability analysis.

**Structural global identifiability**

{% raw %}
$$
\sum ({\textbf {p}})=\sum (\widetilde{{\textbf {p}}})\Rightarrow p_i=\widetilde{p}_i.
$$
{% endraw %}

Definition of structural global identifiability: a parameter is globally identifiable if equality of input-output maps implies equality of parameter values.

**Nonlinear observability matrix**

{% raw %}
$$
\mathcal {O}=\begin{bmatrix} \dfrac{\partial L^0_{\textbf {f}} {\textbf {y}}({\textbf {x)}}}{\partial {\textbf {x}}} \\ \dfrac{\partial L^1_{\textbf {f}} {\textbf {y}}({\textbf {x)}}}{\partial {\textbf {x}}} \\ \vdots \\ \dfrac{\partial L^{n-1}_{\textbf {f}} {\textbf {y}}({\textbf {x}})}{\partial {\textbf {x}}} \end{bmatrix}.
$$
{% endraw %}

The observability matrix for a nonlinear system, constructed using Lie derivatives of the output function with respect to the state dynamics.

**Nonlinear controllability matrix**

{% raw %}
$$
\mathcal {C}=[{\textbf {g}},(ad^1_{\textbf {f}},{\textbf {g}}),\cdots ,(ad^{n-1}_{\textbf {f}},{\textbf {g}})].
$$
{% endraw %}

The controllability matrix for a nonlinear system, constructed using Lie brackets of the drift and control vector fields.

**Local state isomorphism conditions**

{% raw %}
$$
\begin{aligned}& \text {rank}\left( \dfrac{\partial \varvec{\lambda }(\widetilde{{\textbf {x}}})}{\partial \widetilde{{\textbf {x}}}}\right) = n_x, \\& \varvec{\lambda }(\widetilde{{\textbf {x}}}_0({\textbf {p}})) = {\textbf {x}}_0(\widetilde{{\textbf {p}}}), \\& f(\varvec{\lambda }(\widetilde{{\textbf {x}}}),{\textbf {p}})=\dfrac{\partial \varvec{\lambda }(\widetilde{{\textbf {x}}})}{\partial \widetilde{{\textbf {x}}}}f(\widetilde{{\textbf {x}}},\widetilde{{\textbf {p}}}), \\& g(\varvec{\lambda }(\widetilde{{\textbf {x}}}),{\textbf {p}})=\dfrac{\partial \varvec{\lambda }(\widetilde{{\textbf {x}}})}{\partial \widetilde{{\textbf {x}}}}g(\widetilde{{\textbf {x}}},\widetilde{{\textbf {p}}}), \\& h(\varvec{\lambda }(\widetilde{{\textbf {x}}}),{\textbf {p}})=h(\widetilde{{\textbf {x}}},\widetilde{{\textbf {p}}}). \end{aligned}
$$
{% endraw %}

Conditions for the local state isomorphism theorem, used to determine structural identifiability of nonlinear systems via the similarity transformation method.

---

### Figures & Tables

- **Figure 1**: Flowchart outlining the steps of the Taylor series method for structural identifiability analysis.
  - *Significance*: Provides a clear, step-by-step guide for applying the Taylor series method to ODE models.
- **Figure 2**: Flowchart outlining the steps of the similarity transformation method for structural identifiability analysis.
  - *Significance*: Provides a clear, step-by-step guide for applying the similarity transformation method to ODE models.
- **Figure 3**: Timecourses of receptor species concentrations and the observed signal for three different parameter sets of the LID model, showing identical observed signals despite different underlying concentrations.
  - *Significance*: Visually demonstrates the structural non-identifiability of the LID model: different parameter sets produce identical output, confirming the analytical SIA result.
- **Figure 4**: Results of 20 parameter estimation runs for the monomeric depletion model under weak (left) and strong (right) ligand depletion conditions.
  - *Significance*: Illustrates that practical identifiability depends on the degree of depletion; strong depletion leads to more consistent parameter estimates, highlighting the gap between structural and practical identifiability.

---

### Code & Reproducibility Assessment
No code or data were generated or analysed in this study. The authors used MATLAB's Symbolic Toolbox for algebraic manipulations. No repository is provided.

---

### Future Directions
The authors propose a numerical study on using depletion model parameter estimates as initial guesses for non-depletion model fitting. They also plan to compare computational SIA packages (Strike-GOLDD, StrucID) for receptor theory models and extend SIA to higher-dimensional models (e.g., kinetic operational models, GPCR activation models). Finally, they emphasise the need for practical identifiability analysis (PIA) using profile likelihood methods to complement SIA.

---

### Expert Commentary
This paper makes a valuable contribution by demonstrating that nonlinearity arising from ligand depletion can transform a structurally non-identifiable system into a globally identifiable one. This is a non-intuitive and practically important result. The detailed step-by-step application of the similarity transformation method, while algebraically heavy, provides a template for researchers. The finding that the LID model's key kinetic parameters are identifiable even when the full model is not is reassuring for practitioners. The authors correctly identify that the Taylor series method is impractical for all but the simplest nonlinear models and that computational SIA tools are the way forward. The brief practical identifiability experiment in Appendix F is a nice touch, hinting that even structurally identifiable models can suffer from practical non-identifiability under certain experimental conditions.

---

### Bottom Line
Nonlinear ligand-depletion models for monomeric and pre-dimerised receptors are globally structurally identifiable from a single timecourse, a striking improvement over their linear (ligand-excess) counterparts. The ligand-induced dimerisation (LID) model is not fully identifiable unless the experimental scaling factor $a$ is known, but the key kinetic parameters $k_+$, $k_-$, and $\psi_-$ are uniquely identifiable. Practitioners should incorporate structural identifiability analysis (SIA) as a routine step before parameter estimation and consider using depletion models to obtain initial guesses for non-depletion fitting.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-07-22-on-the-structural-identifiability-of-nonlinear-models-of-ligand-binding-dynamics/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-07-22-on-the-structural-identifiability-of-nonlinear-models-of-ligand-binding-dynamics/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-07-22-on-the-structural-identifiability-of-nonlinear-models-of-ligand-binding-dynamics/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-07-22-on-the-structural-identifiability-of-nonlinear-models-of-ligand-binding-dynamics/figures/fig_04.png)