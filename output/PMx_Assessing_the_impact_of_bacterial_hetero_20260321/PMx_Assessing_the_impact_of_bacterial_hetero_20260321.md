---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: March 21, 2026

## Paper 1: Assessing the impact of bacterial heterogeneity on bacteriophage population dyna

### Bibliographic Information
- **Title**: Assessing the impact of bacterial heterogeneity on bacteriophage population dynamics: a distributed delay differential equation framework
- **Authors**: Beldjenna M, Guo T, van Hasselt JGC, Guedj J
- **Journal**: Journal of Pharmacokinetics and Pharmacodynamics, 2026
- **DOI**: [https://doi.org/10.1007/s10928-026-10025-y](https://doi.org/10.1007/s10928-026-10025-y)

### Quick Take
This theoretical pharmacometrics study compares distributed delay differential equation (DDDE) models against classical fixed-delay and transit compartment approaches for bacteriophage-bacteria dynamics. Pharmacometricians working on infectious disease modeling, cell therapies, or any systems with distributed delays should read this to understand when simplified approximations suffice versus when full distributed models are necessary. The key insight is that only latent period variability (not burst size or adsorption rate distributions) significantly impacts population dynamics, with practical thresholds provided for model selection.

---

### Executive Summary
Beldjenna et al. present a rigorous theoretical framework to assess the impact of cellular heterogeneity on bacteriophage population dynamics, developing a comprehensive distributed delay differential equation (DDDE) model that accounts for variability in latent period, burst size, and adsorption rate. Through analytical derivation and extensive Monte Carlo simulation (500 scenarios), they demonstrate that distributions of burst size and adsorption rate collapse to their population means, leaving only latent period variability as the critical distributed parameter requiring explicit modeling. The study establishes practical thresholds for model selection: when relative standard deviation of latent period is below 30%, classical fixed-delay DDE models (with mean/median latent period) provide adequate approximations with 70-fold faster computation; however, at higher variability, the full DDDE framework is required to avoid significant prediction errors. This work provides crucial guidance for phage therapy pharmacometrics, bridging single-cell heterogeneity with population-level predictions and offering a principled basis for model selection based on expected variability and computational constraints.

---

## ⚡ Methodological Snapshot
The authors developed a theoretical bottom-up modeling framework starting from a classic delay differential equation (DDE) structure for phage-bacteria interactions, extending it to a distributed delay differential equation (DDDE) formulation that incorporates probability distributions for latent period (\tau), burst size (\beta), and adsorption rate (\phi). The model structure includes logistic bacterial growth, saturable phage adsorption kinetics, and intracellular replication dynamics linking burst size to latent period through a phenomenological relationship. Analytical reduction of the full DDDE system demonstrated that the distributions of burst size and adsorption rate integrate to their population means, allowing simplification to a canonical form where only latent period distribution requires explicit integral representation.

To evaluate model performance, the authors conducted extensive Monte Carlo simulations (500 parameter sets) comparing the full DDDE model against classical approximations: fixed-delay DDE with latent period set to mean, median, or early lysis time; and transit compartment (TC) models equivalent to Erlang-distributed latent periods. Error metrics based on normalized area between curves quantified differences in bacterial and viral load predictions across different relative standard deviations (rsd) of latent period (10-50%). All models were implemented in Python 3.1 using forward Euler methods for DDE/DDDE and standard ODE solvers for TC models, with convergence verified through step-size sensitivity analysis.

---

## 🏗️ Structural Model Breakdown
The full DDDE model comprises three state variables: uninfected bacteria (U), infected bacteria (I), and free phages (P). Uninfected bacteria grow logistically with maximum rate r_{max} and carrying capacity K. Phage adsorption follows saturable kinetics with maximum rate \phi_{max} and half-saturation constant P_{50}. The critical innovation is the distributed latent period: infected bacteria transition to lysis according to a probability density function f(\tau), with minimum latent period \tau_{min}. Burst size \beta(\tau) is conditionally dependent on latent period following a phenomenological model (Eq. 5), while the population mean burst size \beta_{pop} is determined experimentally from single-step growth curves. The model tracks infection age through integral terms representing the convolution of past infection events with the latent period distribution, weighted by bacterial decay during infection (e^{-\delta_I \tau}). The simplified canonical form (Eq. 10) replaces distributed adsorption rates with their time-varying mean \bar{\phi}(t) and retains only the latent period distribution as the explicit stochastic element.

---

### Detailed Methodological Analysis

#### Modeling Approach
Distributed delay differential equations (DDDE) with intracellular replication dynamics; comparison with fixed-delay DDE and transit compartment (TC) models; implemented in Python 3.1 using forward Euler and Runge-Kutta 4 methods. The DDDE model incorporates probability density functions for latent period distribution f(\tau) and conditional distributions for burst size given latent period.

#### Data Sources
Theoretical simulation study using parameter ranges from literature (Table 1) for typical phage-bacteria systems; 500 Monte Carlo simulations with parameters sampled uniformly (r_{max}, K) and log-uniformly (\phi_{max}, \beta_{pop}) to cover physiological ranges spanning multiple orders of magnitude.

#### Estimation Methods
Analytical derivation for model reduction using properties of expectation and convolution integrals; numerical integration using convolution sums for DDDE with history tracking; forward Euler method with adaptive step size for convergence (1% tolerance criterion).

#### Model Evaluation
Normalized area between curves (Eq. 8) as error metric comparing bacterial and viral load predictions; convergence testing via step-size halving; comparison across distribution shapes (normal, log-normal, gamma) and approximation methods (Fixed Mean, Fixed Median, Fixed Early, TC).

#### Covariate Analysis
Not applicable (theoretical study), though sensitivity to distribution parameters (mean, relative standard deviation) was systematically evaluated through Monte Carlo sampling across physiologically relevant ranges.

---

### Scientific Context & Motivation
Bacteriophage therapy represents a promising alternative to antibiotics for multidrug-resistant infections, yet optimizing therapy requires accurate pharmacodynamic models that capture the complex interaction between phages and bacterial hosts. Traditional models assume uniform parameter values across bacterial populations, despite single-cell studies demonstrating substantial heterogeneity in latent periods and burst sizes. This discrepancy raises concerns about systematic bias in predicted dynamics, particularly given that experimental single-step growth curves show gradual phage release rather than abrupt lysis. While distributed delay differential equations (DDDE) offer a theoretical solution to capture this heterogeneity, their computational complexity and limited implementation in standard pharmacometric software have hindered adoption. This study addresses the critical knowledge gap regarding whether cellular-level variability meaningfully impacts population dynamics and under what conditions simpler approximations (fixed-delay DDE or transit compartments) remain valid, providing essential guidance for model selection in phage therapy development.

---

### Statistical Rigor Assessment
The study employs robust Monte Carlo methodology with 500 randomly sampled parameter sets covering physiologically relevant ranges, ensuring generalizability of findings across diverse phage-bacteria systems. The analytical reduction of the full DDDE to canonical form (Eq. 10) provides mathematical rigor for the key finding that burst size and adsorption rate distributions collapse to their means. Sensitivity analyses demonstrate that results are insensitive to distribution shape (normal vs log-normal vs gamma), validating the robustness of the latent period variability findings. The error metric (normalized area between curves) appropriately normalizes for scale, allowing comparison across different parameter regimes. Limitations include the theoretical nature of the study (no experimental validation of model predictions) and the assumption that parameter distributions are unimodal; the authors acknowledge that bimodal distributions might yield different results.

---

## 📊 Key Findings
The analytical and simulation results demonstrate that only the distribution of the latent period (\tau) and its influence on burst size significantly impact population dynamics; distributions of adsorption rate (\phi) and burst size (\beta) independently of \tau integrate to their mean values and do not require explicit distributional modeling. For latent period relative standard deviation (rsd) below 30%, fixing \tau to the mean or median in a classical DDE model introduces less than 10% error in bacterial and viral load predictions, making this approximation clinically acceptable. However, fixing \tau to the time of first observed lysis (traditional approach) introduces substantial bias (>50% error at rsd=30%). At high variability (rsd=50%), the full DDDE model is required to avoid significant prediction errors. Transit compartment models perform similarly to fixed-mean DDE models at low variability but introduce higher errors at high variability unless burst size is independent of latent period. Computationally, DDE models run 70 times faster than DDDE (0.1s vs 7-9s), while TC models offer intermediate performance (0.1-1s) but require additional parameters.

---

## 💡 Clinical & Regulatory Implications
For phage therapy development, this study provides critical guidance on model selection based on expected latent period variability. When developing dosing regimens for phages with low latent period variability (rsd < 30%), classical fixed-delay DDE models using mean or median latent periods are sufficient and computationally efficient for simulation and estimation. However, for phages exhibiting high variability (such as \phi X174 with rsd up to 50%) or when accurate prediction of early dynamics is crucial, the full DDDE framework is warranted despite computational costs. The finding that fixing latent period to early lysis time introduces systematic bias suggests that current experimental reporting practices may lead to inaccurate PK/PD predictions. For regulatory submissions involving phage therapy, the study supports the use of simpler models when variability is characterized as low, but mandates distributed approaches for high-variability scenarios or when models fail to capture observed single-step growth curve shapes.

---

### Strengths & Limitations

#### Strengths
- Rigorous analytical derivation proving which parameter distributions matter at population level
- Comprehensive Monte Carlo simulation across wide parameter space (500 scenarios)
- Practical model selection guidance based on quantifiable variability thresholds (30% rsd)
- Comparison of three major modeling paradigms (DDE, DDDE, TC) with computational benchmarking
- Open code availability for reproducibility with specified random seed

#### Limitations (Acknowledged by Authors)
- Theoretical study without experimental validation of model predictions against real phage-bacteria data
- Limited to unimodal distributions (normal, log-normal, gamma); bimodal distributions not explored
- Phenomenological relationship between burst size and latent period may not generalize to all phage systems
- Parameter combinations simulated might not always correspond to real bacteriophages despite using literature ranges

#### Limitations (Expert Review)
- No assessment of parameter identifiability in the inverse problem (estimation from experimental data)
- Limited exploration of the impact of measurement error on model discrimination ability
- Runge-Kutta 4 showed no convergence advantage over Euler for DDDE, suggesting potential numerical inefficiencies or implementation issues
- The TC model comparison used Erlang distribution (gamma with integer shape) which may not capture all gamma distribution nuances for non-integer shape parameters

#### Generalizability
Findings are generalizable to phage-bacteria systems with similar kinetic characteristics, but extrapolation to other delay-distributed systems (e.g., viral infections, cell cycle models) requires validation of the specific parameter dependencies (particularly the \beta-\tau relationship).

---


---


---

### Code & Reproducibility Assessment
Python 3.1 code implementing the DDDE, DDE, and TC models is provided as supplementary material. The implementation uses standard libraries (numpy, scipy, matplotlib, pandas) with forward Euler integration for delay equations. Random seed (120659) is specified for reproducibility. The code enables replication of all 500 Monte Carlo simulations and error metric calculations presented in the study.

---


### Future Directions
Future work should experimentally validate the DDDE framework using single-cell measurements of latent period distributions and population-level time-kill curves to confirm model predictions. Extension to partial differential equation (PDE) frameworks could provide more detailed age-structured modeling but at higher computational cost. Investigation of bimodal latent period distributions and their impact on dynamics is needed, as these may occur in heterogeneous bacterial populations. For pharmacometric applications, development of efficient ODE approximations to the DDDE (mentioned as ongoing work by the authors) would facilitate implementation in standard software like NONMEM. Parameter identifiability analyses and optimal experimental design for estimating latent period distributions from population data represent critical next steps for practical application in phage therapy trials.

---

### Expert Commentary
This study represents an important contribution to mechanistic modeling of infectious agents, bridging the gap between single-cell heterogeneity and population pharmacodynamics. The analytical proof that burst size and adsorption rate distributions collapse to their means is elegant and has broad implications for viral dynamics modeling beyond bacteriophages—including HIV, hepatitis C, and oncolytic virus therapies. The threshold of 30% relative standard deviation for model simplification provides a practical rule of thumb for modelers. However, the field must recognize that while the DDDE framework is mechanistically superior for high-variability scenarios, its computational cost and current lack of support in standard pharmacometric software (e.g., NONMEM, Monolix) present significant barriers to adoption. The comparison with transit compartments is particularly valuable, as TC models are often used as 'black box' approximations for delays without understanding their limitations when parameters are delay-dependent. The study highlights a broader trend in pharmacometrics toward multi-scale modeling that explicitly accounts for cellular heterogeneity, moving beyond traditional population PK/PD approaches. For teaching, this paper exemplifies how theoretical analysis can guide model selection before committing to computationally intensive frameworks.

---

### Bottom Line
When modeling bacteriophage pharmacodynamics, use simple fixed-delay DDE models with mean or median latent periods for phages with low latent period variability (rsd < 30%), but implement full distributed delay differential equations when variability exceeds this threshold or when burst size strongly depends on latent period. Never fix the latent period to the time of first observed lysis, as this introduces systematic bias. Transit compartment models offer no advantage over properly parameterized fixed-delay models unless you specifically need Erlang-distributed delays and can assume burst size is independent of latent period. For phage therapy development, characterize your phage's latent period variability early—this single parameter determines your modeling strategy and can prevent costly model misspecification in later stages. The provided Python code facilitates immediate implementation of the recommended approaches based on your specific variability estimates.

---

---

## 📊 Figures



```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [Single-step growth curves simulated with a fixed latent period (red curve) and a distributed latent period (blue curve)],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [Workflow of the study: A. Definition of parameter distributions to compare (Section “Considered distributions”). B. Simulation of the corresponding bacteria and phage time profiles],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [Compartmental representation of the distributed delay differential equations model with intracellular replication dynamics],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [Compartmental representation of the transit compartment model, for an Erlang-distributed latent period],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [Plots of bacterial and viral load with a normal, log-normal and gamma distribution of the latent period, for an example set of parameters],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_06.jpg", width: 90%),
  caption: [Differences in bacterial and viral load predictions between log-normally, normally and gamma distributed latent period for equal distribution width, compiled over 500 random sets o],
  placement: auto,
) <fig-6>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_07.jpg", width: 90%),
  caption: [Error on bacterial and viral load predictions induced by fixing the latent period to early lysis time, to the median latent period, or to the mean latent period, compiled over 500 ],
  placement: auto,
) <fig-7>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_08.jpg", width: 90%),
  caption: [Plots of bacterial and viral load with a latent period log-normally distributed or fixed to characteristic values, for an example set of parameters],
  placement: auto,
) <fig-8>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_09.jpg", width: 90%),
  caption: [Plots of bacterial and viral load with the DDE, TC and DDDE models, for an example set of parameters],
  placement: auto,
) <fig-9>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_10.jpg", width: 90%),
  caption: [Error on bacterial and viral load predictions of the DDE and TC models relative to the full DDDE model, compiled over 500 random sets of parameters. The reference used is a log-nor],
  placement: auto,
) <fig-10>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_11.jpg", width: 90%),
  caption: [Fits ofwith different phenomenological models, observations were digitized from 14],
  placement: auto,
) <fig-11>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_12.jpg", width: 90%),
  caption: [Error on bacterial and viral load predictions of the DDE and TC models relative to the full DDDE model, compiled over 100 random sets of parameters, with],
  placement: auto,
) <fig-12>
#set page(flipped: false)
```

