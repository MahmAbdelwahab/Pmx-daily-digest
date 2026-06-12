---
layout: post
title: "Tackling High Dimensionality in QSP: Guiding Model Order Reduction With Index Analysis"
date: 2026-05-30
authors: "Tillil J, Huisinga W, Knöchel J"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70171"
paper_type: methodology
tags: [methodology, qsp]
excerpt_text: "This tutorial presents a structured workflow that uses index analysis—a sensitivity-based approach—to guide mechanism-preserving model order reduction (MOR) for ODE-based QSP models. The workflow identifies dynamically relevant states, selects appropriate reduction techniques (timescale separation, state neglect), and validates mechanistic fidelity by comparing input-response indices between original and reduced models. Demonstrated on a 62-state blood coagulation model, the method yields an 8-state reduced model that retains key biological features."
pdf_path: "/assets/digests/2026-05-30-tackling-high-dimensionality-in-qsp-guiding-model-order-reduction-with-index/PMx_Tackling_High_Dimensionality_in_QSP_Guid_20260530.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This tutorial presents a structured workflow that uses index analysis—a sensitivity-based approach—to guide mechanism-preserving model order reduction (MOR) for ODE-based QSP models. The workflow identifies dynamically relevant states, selects appropriate reduction techniques (timescale separation, state neglect), and validates mechanistic fidelity by comparing input-response indices between original and reduced models. Demonstrated on a 62-state blood coagulation model, the method yields an 8-state reduced model that retains key biological features.

---

### Executive Summary
The paper addresses the challenge of high dimensionality in QSP models, which limits their use in population analysis. The authors propose a workflow centered on index analysis, which computes input-response (ir) indices to rank state importance and state-classification indices to determine suitable reduction methods (environmental, partial steady state, partial/complete neglect). The workflow iteratively reduces states in order of increasing ir-index, applying the best reduction method per state while monitoring approximation error. A final check compares ir-indices of original and reduced models to ensure mechanistic preservation. The approach is illustrated on a small parallel-pathway model and a large blood coagulation network (62 states), where it produces an 8-state reduced model that accurately reproduces fibrinogen dynamics and retains sensitivity to antivenom interventions. The method is extended to handle parameter variability via global index analysis, enabling population-level reduction.

---

### Scientific Context & Motivation
QSP models are valuable for integrating multi-scale biological knowledge but are rarely used in population analysis due to their high dimensionality and complexity. Existing model order reduction (MOR) techniques lack guidance on selection and combination, and there is no tool to verify that reduced models preserve mechanistic interpretability. This tutorial fills these gaps by providing a systematic, index-analysis-driven workflow for mechanism-preserving MOR without state-space transformation.

---

## ⚡ Methodological Snapshot
The paper introduces a workflow that uses index analysis to guide mechanism-preserving model order reduction (MOR) for ODE-based QSP models. Index analysis comprises two types of indices: input-response (ir) indices, which quantify the dynamic relevance of each state for a given input–output relationship, and state-classification indices, which determine whether a state can be treated as environmental (constant), in partial steady state, partially negligible, or completely negligible. The workflow proceeds in four steps: (1) compute ir-indices to rank states by importance; (2) compute state-classification indices to identify appropriate reduction methods for unimportant states; (3) iteratively reduce states in order of increasing ir-index, applying the best reduction method while monitoring approximation error; (4) compare ir-indices of the original and reduced models to verify mechanistic preservation. The method is local (reference parameter set) but can be extended to populations via global index analysis.

---

## 📐 Statistical Framework
The index analysis is based on sensitivity analysis of ODE systems. The ir-index for a state is defined as the integral of the absolute sensitivity of the output to a perturbation in that state's initial condition. This is a first-order local sensitivity measure. The state-classification indices are derived from the relative rates of change of the state (e.g., $|dx/dt|/|x|$ for environmental, $|dx/dt|/|\text{production}|$ for partial steady state). These indices are compared to user-defined thresholds to classify states. The approach assumes the ODE model is deterministic and differentiable. No distributional assumptions are made; the method is purely deterministic. For global index analysis, parameter variability is introduced by sampling from a population distribution, and the reduction is required to meet an approximation error criterion for a specified percentage of individuals.

---

### Estimator Behavior
The workflow does not estimate parameters but rather reduces model complexity. The key property is the approximation error of the reduced model relative to the original. The authors report that the iterative reduction procedure yields errors below a user-specified threshold (e.g., 5%). The ir-index comparison provides a qualitative check on mechanistic fidelity. The method is greedy and may not find the globally optimal reduced model, but the authors argue that the ir-index ordering provides a sensible heuristic. The global index analysis extension ensures that the reduced model performs well across a population, but the computational cost increases linearly with the number of individuals sampled.

---

### Validation Design
The workflow is validated on two case studies: (1) a small parallel-pathway model (4 states) with two scenarios, where index analysis correctly identifies reduction strategies and yields approximation errors <5%; (2) a large-scale blood coagulation model (62 states) under brown snake venom stimulation, where the workflow produces an 8-state reduced model with <5% error in fibrinogen output. The reduced model is further validated by comparing ir-indices and by testing sensitivity to antivenom, which the 8-state model preserves but a 13-state alternative does not. For population-level validation, a virtual population of 1000 individuals is used, and the global index analysis produces a reduced model that meets the error criterion for 95% of individuals.

---

### Applicability Boundaries
The method is applicable to ODE-based QSP models with a defined input–output relationship. It is local (reference parameter set) and scenario-specific; different inputs, outputs, or time spans may require re-analysis. The method relies on first-order sensitivity, so it may be less reliable for highly nonlinear systems with large perturbations. The thresholds for indices and error are user-defined and require expert judgment. The method is currently limited to mechanism-preserving MOR techniques (environmental, partial steady state, partial/complete neglect) and does not cover state-space transforming methods or ML-based surrogates. For population analysis, the computational cost increases with the number of individuals and the complexity of the model.

---

### Comparison to Alternatives
Compared to state-space transforming methods (e.g., balanced truncation, proper lumping), the proposed workflow preserves mechanistic interpretability because it operates in the original state space. Compared to ML-based surrogate models (e.g., neural networks), it retains biological meaning and allows parameter estimation. The main advantage over ad-hoc reduction is the systematic, index-guided selection of methods and the validation of mechanistic fidelity. A limitation is that the workflow is more labor-intensive than fully automated methods and requires expert judgment for threshold selection. The authors note that the ir-index comparison can also be used to evaluate reduced models obtained by other means, providing a general diagnostic tool.

---

### Implementation Guidance
The workflow is implemented in MATLAB and available at github.com/jtillil/CPT-Tutorial-ModelReduction. Users need to provide an ODE model, define input and output, and specify thresholds for indices and approximation error. The code computes ir-indices and state-classification indices, then performs iterative reduction. Practical tips: start with a conservative error threshold (e.g., 1%) and relax if needed; use the ir-index comparison to reject reduced models that match outputs but lose mechanistic features; for population analysis, sample a diverse subset of individuals first to reduce computational cost. The computational cost is dominated by repeated ODE simulations during index computation and iterative reduction; for the 62-state model, the workflow runs in minutes on a standard desktop.

---

## 📊 Key Findings
1. Index analysis (ir-indices and state-classification indices) effectively quantifies dynamic relevance of states for a given input–output relationship. 2. The workflow identifies that only 10 of 62 states in the blood coagulation model are dynamically relevant for the brown snake venom–fibrinogen response. 3. Two reduction methods (environmental states and partial neglect) suffice to reduce the model. 4. An 8-state reduced model accurately approximates fibrinogen dynamics (error <5%) and retains mechanistic features, while a 13-state model that also fits the output fails to preserve sensitivity to antivenom. 5. Global index analysis extends the approach to handle parameter variability, producing reduced models valid across a virtual population.

---

### Strengths & Limitations

#### Strengths
- Provides a structured, interpretable workflow for MOR that preserves mechanistic features.
- Index analysis offers both ranking of state importance and classification of reduction methods, reducing combinatorial complexity.
- Validation includes a final check of ir-indices to ensure mechanistic fidelity, not just output matching.
- Demonstrated on a realistic large-scale QSP model (62 states) with clear biological insights.
- Extension to population-level reduction via global index analysis addresses practical needs.
- MATLAB code provided for reproducibility and adoption.

#### Limitations (Acknowledged by Authors)
- The workflow is local (reference trajectory) and may require re-analysis for different scenarios.
- Threshold selection for indices and error is user-defined and may require expert judgment.
- The method is currently limited to ODE-based QSP models without state-space transformation.
- Global index analysis increases computational cost due to repeated simulations across the population.

#### Limitations (Expert Review)
- The ir-index is based on first-order sensitivity; for highly nonlinear systems with large perturbations, the guidance may be less reliable.
- The workflow does not automate the combination of reduction methods; expert judgment is still needed for states with multiple applicable methods.
- The population extension uses a backtracking approach that assumes the reference reduced model is a good starting point; this may not hold for populations with very different dynamics.
- No formal statistical inference (e.g., confidence intervals) is provided for the indices or approximation errors.

#### Generalizability
The workflow is general for ODE-based QSP models with a defined input–output relationship. It is demonstrated on a small and a large model, suggesting broad applicability. However, the method is local and scenario-specific; each new input–output pair or parameter set requires re-analysis. The global index analysis extension improves generalizability to populations but adds computational burden.

---

### Key Equations

**Absolute Input-Response Index**

{% raw %}
$$
I_i(t) = \int_0^t \left| \frac{\partial y(\tau)}{\partial x_i(0)} \right| d\tau
$$
{% endraw %}

Measures the cumulative sensitivity of the output y to a perturbation in the initial condition of state x_i up to time t.

**Normalized Input-Response Index**

{% raw %}
$$
\bar{I}_i(t) = \frac{I_i(t)}{\sum_j I_j(t)}
$$
{% endraw %}

Normalizes the absolute ir-index so that the sum over all states equals 1 at each time, allowing comparison of relative dynamic relevance.

**State-Classification Index for Environmental State**

{% raw %}
$$
I_{\text{env},i}(t) = \left| \frac{dx_i/dt}{x_i} \right|
$$
{% endraw %}

If this index is below a threshold for all t, the state changes very slowly and can be treated as constant (environmental).

**State-Classification Index for Partial Steady State**

{% raw %}
$$
I_{\text{pss},i}(t) = \left| \frac{dx_i/dt}{\text{production}_i} \right|
$$
{% endraw %}

If this index is below a threshold, the state is in quasi-steady state and its ODE can be replaced by an algebraic equation.

---

### Figures & Tables

- **Figure 3**: Workflow combining index analysis and mechanism-preserving MOR techniques.
  - *Significance*: Central figure outlining the step-by-step process: compute ir-indices, classify states, iteratively reduce, and validate with ir-indices.
- **Figure 6**: Summary of index analysis for the blood coagulation model: (a) ordered maximum normalized ir-index, (b) state-classification indices.
  - *Significance*: Shows that only 10 of 62 states are dynamically relevant and identifies appropriate reduction methods (env, pneg) for the rest.
- **Figure 7**: Reaction diagrams and ir-indices for the 8-state and 13-state reduced models.
  - *Significance*: Demonstrates that the 8-state model preserves ir-index patterns of the original model, while the 13-state model does not, despite similar output fits.
- **Table 1**: Approximation errors for various reduction approaches in the small-scale example.
  - *Significance*: Quantifies the accuracy of different reduction strategies and shows that index-guided choices yield low errors.

---

### Code & Reproducibility Assessment
MATLAB code implementing the index analysis and MOR workflow is available at github.com/jtillil/CPT-Tutorial-ModelReduction. The code reproduces all results and figures in the tutorial.

---

### Future Directions
Future work could extend the index analysis to handle stochastic QSP models, incorporate automated threshold selection, or combine with state-space transforming methods when interpretability is less critical. Additionally, applying the workflow to other large-scale QSP models (e.g., oncology, immunology) would further validate its utility.

---

### Expert Commentary
This tutorial fills a critical gap in QSP methodology by providing a principled, interpretable approach to model reduction. The use of ir-indices to verify mechanistic preservation is a key innovation—many reduced models that match outputs can still be mechanistically flawed, as shown by the 13-state counterexample. The workflow is practical and well-documented, though it requires some expertise in sensitivity analysis and ODE modeling. The extension to population analysis is a welcome step toward clinical application.

---

### Bottom Line
For practitioners: Use the index-analysis workflow to systematically reduce QSP models while preserving mechanistic interpretability. The method is particularly useful when you need a reduced model for a specific input–output question and want to avoid black-box surrogates. The provided MATLAB code facilitates implementation, but careful threshold selection and validation of ir-indices are essential to avoid misleading reduced models.

---

---

## 📊 Figures

![Overview of methods to tackle the high dimensionality of QSP models. Sample-based surrogate modeling (green) and MOR methods (violet), including state-space tran]({{ site.baseurl }}/assets/digests/2026-05-30-tackling-high-dimensionality-in-qsp-guiding-model-order-reduction-with-index/figures/fig_01.jpg)

![Overview of the two types of indices provided in index analysis. Exemplary input-response and state-classification indices illustrate how they can provide insigh]({{ site.baseurl }}/assets/digests/2026-05-30-tackling-high-dimensionality-in-qsp-guiding-model-order-reduction-with-index/figures/fig_02.jpg)

![Workflow combining index analysis and mechanism-preserving MOR techniques. First, the absolute and normalized ir-indices are computed to identify the dynamical r]({{ site.baseurl }}/assets/digests/2026-05-30-tackling-high-dimensionality-in-qsp-guiding-model-order-reduction-with-index/figures/fig_03.jpg)

![Index analysis of the parallel pathways example model for two different scenarios. (a) Reaction diagrams of the reduced models. Black states remain dynamic, gray]({{ site.baseurl }}/assets/digests/2026-05-30-tackling-high-dimensionality-in-qsp-guiding-model-order-reduction-with-index/figures/fig_04.jpg)

![Overview of the blood coagulation QSP model. (a) Reaction diagram. (b) Timecourses of the model output fibrinogen in the original and reduced models. (c) Timecou]({{ site.baseurl }}/assets/digests/2026-05-30-tackling-high-dimensionality-in-qsp-guiding-model-order-reduction-with-index/figures/fig_05.jpg)

![Summary of index analysis of the original blood coagulation QSP model. (a) Ordered maximum normalized ir-index of the 62 states in the blood coagulation model. (]({{ site.baseurl }}/assets/digests/2026-05-30-tackling-high-dimensionality-in-qsp-guiding-model-order-reduction-with-index/figures/fig_06.jpg)

![Reaction diagrams and ir-indices for the reduced blood coagulation QSP models. (a/c) Reaction diagrams for the 8-state/13-state reduced models. Black boxes indic]({{ site.baseurl }}/assets/digests/2026-05-30-tackling-high-dimensionality-in-qsp-guiding-model-order-reduction-with-index/figures/fig_07.jpg)