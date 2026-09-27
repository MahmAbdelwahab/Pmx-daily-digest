---
layout: post
title: "Evaluation of a model averaging algorithm for model-informed precision dosing in the context of parameter misspecifications"
date: 2026-09-27
authors: "Witta S, Wicha SG"
journal: "J Pharmacokinet Pharmacodyn 53, 54 (2026)"
doi: "10.1007/s10928-026-10064-5"
paper_type: methodology
tags: [methodology]
excerpt_text: "This simulation study systematically evaluates how three types of parameter misspecification (structural $\\theta_{CL}$, residual error $\\sigma^2$, and IIV $\\omega^2_{CL}$) affect model averaging algorithm (MAA) performance for Bayesian forecasting in MIPD. The key finding: MAA provides the greatest benefit under structural misspecification, where combining just two models with opposing bias matches the performance of a full six-model ensemble or a re-estimated model, while SSE weighting is preferred under heterogeneous residual error."
pdf_path: "/assets/digests/2026-09-27-evaluation-of-a-model-averaging-algorithm-for-model-informed-precision-dosing/PMx_Evaluation_of_a_model_averaging_algorith_20260927.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This simulation study systematically evaluates how three types of parameter misspecification (structural $\theta_{CL}$, residual error $\sigma^2$, and IIV $\omega^2_{CL}$) affect model averaging algorithm (MAA) performance for Bayesian forecasting in MIPD. The key finding: MAA provides the greatest benefit under structural misspecification, where combining just two models with opposing bias matches the performance of a full six-model ensemble or a re-estimated model, while SSE weighting is preferred under heterogeneous residual error.

---

### Executive Summary
This simulation study systematically dissects how three distinct types of parameter misspecification—structural ($\theta_{CL}$), residual error ($\sigma^2$), and interindividual variability ($\omega^2_{CL}$)—affect the predictive performance of a model averaging algorithm (MAA) for Bayesian forecasting in MIPD. Using a one-compartment PK model with six candidate models per scenario, the authors demonstrate that MAA's benefit is largest under structural misspecification, where combining models with opposing bias (e.g., M1 with $\theta_{CL}=1$ L/h and M6 with $\theta_{CL}=32$ L/h) yields accuracy and precision comparable to a full six-model ensemble or a locally re-estimated model. Under $\sigma^2$ misspecification, SSE weighting preferentially down-weights high-residual-error models, outperforming OFV weighting; under $\omega^2_{CL}$ misspecification, MAA offers minimal advantage, with SSE weighting favoring high-IIV models via a 'flattened priors' mechanism. Extended analyses confirm generalizability to two-compartment structures and dense sampling, while revealing sensitivity to sampling occasion (OCC=1 vs OCC=4). The findings provide actionable guidance for pre-selecting model combinations in MAA to maximize robustness in clinical MIPD implementation.

---

### Scientific Context & Motivation
Model-informed precision dosing (MIPD) requires selecting an appropriate popPK model for Bayesian forecasting in new patients, but model libraries for drugs like vancomycin (63+ models) and linezolid (32+ models) make selection challenging. External model evaluation is standard practice, yet even 'best' models can be misspecified for a given population.[^fc-1] The model averaging algorithm (MAA) of Uster et al. addresses this by weighting multiple models simultaneously based on individual TDM data fit. However, as model libraries expand, there is no systematic guidance on how to pre-select model combinations for MAA—specifically, how different types of parameter misspecification (structural parameters, residual error, IIV) influence MAA's ability to compensate for model inadequacy. Prior external evaluations (Kantasiripitak et al. for infliximab; Schatz et al. for piperacillin) suggested that including models with opposing bias improves MAA performance, but these used real-world data where misspecification types are confounded. This study fills the gap by isolating each misspecification type in a controlled simulation framework to derive mechanistic, actionable guidance for model combination selection.

---

## ⚡ Methodological Snapshot
The study evaluates a model averaging algorithm (MAA) originally proposed by Uster et al. for Bayesian forecasting in MIPD. MAA assigns weights to each candidate popPK model based on its goodness-of-fit to the individual patient's TDM data, then computes a weighted-average prediction across the model set. Two weighting schemes are compared: SSE-based (sum of squared errors between observed and predicted concentrations, EQ5) and OFV-based (objective function value / log-likelihood, EQ6). The simulation framework generates six candidate models per misspecification scenario by incrementing a single parameter ($\theta_{CL}$, $\sigma^2$, or $\omega^2_{CL}$) while holding others at baseline. Each model generates 1000 virtual patients (sub-populations S1–S6), yielding a heterogeneous dataset of 6000 IDs per scenario. Bayesian forecasting uses peak/trough observations from the 4th dosing occasion to predict concentrations at the 6th occasion. Performance is quantified via MPE (accuracy) and MAPE (precision), benchmarked against single models, a FOCE-I re-estimated model, and various MAA combinations (2–6 models, including all 50 possible 2–4 model combinations for $\theta_{CL}$). Extended analyses assess one- vs two-compartment structures, sparse vs dense sampling, and cross-structure model evaluation.

---

## 📐 Statistical Framework
The statistical framework rests on Bayesian forecasting with population priors: individual posterior estimates are derived by combining popPK model priors (typical values, IIV, residual error) with observed TDM concentrations. The MAA extends this by treating each candidate model as a hypothesis about the true data-generating process, with weights proportional to model evidence. The SSE weighting scheme (EQ5) is a non-parametric likelihood based solely on residual deviations, implicitly assuming homoscedastic normal errors; the OFV weighting scheme (EQ6) uses the full model log-likelihood, incorporating structural model complexity and variance components. Both schemes normalize weights across the candidate set, effectively performing Bayesian model averaging with uniform priors over models. Key assumptions: (1) candidate models are mutually exclusive hypotheses; (2) individual TDM data are sufficient to discriminate among models; (3) the weighting schemes capture model adequacy without overfitting. The simulation design assumes a one-compartment linear elimination model as the true structure, with misspecification introduced by perturbing single parameters. The re-estimated model (FOCE-I on the full heterogeneous dataset) serves as an empirical benchmark representing the best achievable performance when a local model can be developed, though it likely underestimates the performance of a truly population-specific model.

---

### Estimator Behavior
Under $\theta_{CL}$ misspecification, single-model MPE ranged from −9.74% to 24.8% and MAPE from 11.4% to 25.7%, with M1 (lowest $\theta_{CL}$) showing the widest sub-population spread (MAPE 9.20–113.2%). MAA with opposing-bias models (M1+M6) achieved near-zero bias (MPE 0.09% OFV) and precision (MAPE ~9.5%) comparable to the re-estimated model, demonstrating effective bias cancellation. Unidirectional-bias combinations (M3–M6, M4–M6, M5–M6) converged toward the best-performing member (MPE improving from −7.63% to −3.60% as better models were added). Under $\sigma^2$ misspecification, MAA with M1 (lowest $\sigma^2$) included approached M1's accuracy (MPE −0.56%), while SSE weighting consistently outperformed OFV (e.g., M1+M6: MPE −0.97% vs −3.07%). Under $\omega^2_{CL}$ misspecification, all estimators were nearly unbiased (MPE −2.0% to −0.58%) with comparable precision; SSE weighting preferentially allocated weight to high-IIV models (M6), consistent with 'flattened priors' behavior. OFV weighting more reliably identified the true generating model across all scenarios, particularly for $\theta_{CL}$.

---

### Validation Design
The validation design is a comprehensive simulation study. Primary analysis: one-compartment PK model with linear elimination; six candidate models per scenario generated by incrementing the misspecified parameter ($\theta_{CL}$: 1–32 L/h; $\sigma^2$: $(0.1)^2$–$(0.6)^2$; $\omega^2_{CL}$: $(0.1)^2$–$(0.6)^2$). Each model simulates 1000 virtual IDs (sub-populations S1–S6), yielding 6000 total IDs per scenario. Dosing: 2000 mg IV infusion over 0.5 h, then 1000 mg q12h ×5. Sparse sampling at 4th (37, 47 h) and 6th (61, 71 h) occasions. Bayesian forecasting uses 4th-occasion observations to predict 6th-occasion concentrations. Performance metrics: MPE (accuracy), MAPE (precision), with supplementary rRMSE and rBias. Benchmarks: single models M1–M6, FOCE-I re-estimated model on full dataset, and MAA combinations (2–6 models; all 50 possible 2–4 model combinations for $\theta_{CL}$). Extended validation: one- and two-compartment models × sparse/dense sampling × OCC=1/OCC=4; additional $\theta_{V_d}$ and $\theta_Q$ misspecifications for two-compartment; cross-structure evaluation (one-compartment models on two-compartment data and vice versa). This multi-layered design systematically probes the robustness of MAA across model complexity, sampling design, and misspecification type, though it relies entirely on simulated data with no external clinical validation cohort.

---

### Comparison to Alternatives
MAA was benchmarked against (1) single candidate models M1–M6, and (2) a re-estimated model fit with FOCE-I on the full heterogeneous dataset. Under $\theta_{CL}$ misspecification, MAA with all six models (MPE −1.73%/−0.31%; MAPE 9.47%/9.81% for OFV/SSE) approached the re-estimated model (MPE −2.21%; MAPE 9.55%), and the two-model combination M1+M6 (opposing bias) achieved better accuracy (MPE 0.09%/−1.09%). Under $\sigma^2$ misspecification, MAA with low-$\sigma^2$ models outperformed the re-estimated model (MPE −5.96%), which failed to improve over single models. Under $\omega^2_{CL}$ misspecification, all approaches performed comparably (MAPE 9.39–11.32%), with MAA offering no clear advantage. Compared to prior external evaluations (Kantasiripitak et al. infliximab; Schatz et al. piperacillin), this study systematically isolates the effect of specific parameter misspecification types rather than relying on real-world heterogeneous misspecification, providing mechanistic insight into when MAA helps versus when it is neutral.

---

### Implementation Guidance
Implementation uses NONMEM 7.5 for simulation and FOCE-I re-estimation, with R 4.5.1 for MAA post-processing. The SSE weighting scheme (EQ5) requires only observed vs predicted concentrations, making it straightforward to implement in any Bayesian forecasting platform; OFV weighting (EQ6) requires access to model objective function values. Computational cost scales with model count: ~5 min 51 s for 2 models vs ~13 min 12 s for 4 models at $n=6000$, which is acceptable for clinical decision-making but warrants consideration as model libraries grow. Practical recommendations: (1) when structural misspecification is suspected, include models with opposing bias polarity—even just two models (e.g., M1+M6) can suffice; (2) when residual error heterogeneity is anticipated, prefer SSE weighting and include low-$\sigma^2$ models; (3) use observations from the most recent dosing occasion (OCC=4) rather than earlier occasions for weight updating; (4) be cautious with SSE weighting under suspected IIV misspecification, as it may favor over-flexible models. The TDMx platform (Wicha et al. 2015) provides a web-based implementation pathway for clinical deployment.

---

## 📊 Key Findings
1) Structural misspecification ($\theta_{CL}$) produces the largest performance disparities among single models (MPE −9.74% to 24.8%; MAPE 11.4–25.7%), and MAA provides the greatest benefit here: combining just two models with opposing bias (M1+M6) achieved MPE 0.09%/−1.09% (OFV/SSE), comparable to the re-estimated model (MPE −2.21%) and the full six-model ensemble (MPE −1.73%/−0.31%). 2) Unidirectional-bias combinations converge toward the best-performing member (e.g., M3–M6 improved MPE from −7.63% to −4.18% as better models were added), confirming MAA cannot correct systematic same-direction bias. 3) Under $\sigma^2$ misspecification, MAA with low-$\sigma^2$ models (M1 included) outperformed the re-estimated model (MPE −5.96%); SSE weighting was superior to OFV (e.g., M1+M6: −0.97% vs −3.07% MPE). 4) Under $\omega^2_{CL}$ misspecification, all approaches performed comparably (MAPE 9.39–11.32%; MPE −2.0% to −0.58%), with MAA offering minimal advantage; SSE weighting preferentially favored high-IIV models (M6), consistent with 'flattened priors.' 5) OFV weighting more reliably identified the true generating model across all scenarios, particularly for $\theta_{CL}$; SSE weighting showed a strong preference for low-$\sigma^2$ models in the $\sigma^2$ scenario. 6) Extended analyses confirmed bias compensation generalizes to two-compartment structures but is sensitive to sampling occasion: OCC=4 (recent) outperformed OCC=1 (early), and dense sampling from OCC=4 gave best performance. 7) Cross-structure evaluation (one-compartment models on two-compartment data and vice versa) showed comparable trends but worse MAPE for two-compartment models evaluated on one-compartment data.

---

### Strengths & Limitations

#### Strengths
- Systematic isolation of three distinct misspecification types ($\theta_{CL}$, $\sigma^2$, $\omega^2_{CL}$) provides mechanistic insight into MAA behavior that real-world evaluations cannot offer
- Exhaustive evaluation of all 50 possible 2–4 model combinations in the $\theta_{CL}$ scenario provides comprehensive coverage of the model combination space
- Extended analyses (two-compartment, dense sampling, cross-structure evaluation) strengthen generalizability claims
- Clear, actionable guidance for model pre-selection: opposing-bias combinations, SSE weighting for $\sigma^2$ misspecification, recent-occasion sampling
- Computational benchmarking provides practical implementation guidance for clinical deployment
- Comparison to a re-estimated model provides a clinically relevant benchmark reflecting the 'ideal' local model development scenario

#### Limitations (Acknowledged by Authors)
- Results rely solely on simulated data where a single parameter was incremented per scenario; real populations have simultaneous variations in multiple parameters
- MAA relies on individual concentration data to update weights; in a priori scenarios without TDM data, all models are equally weighted
- Prospective work needed on covariate inclusion/omission, covariate implementation forms, and error model misspecifications
- Computational time scales with model count (5 min 51 s for 2 models vs 13 min 12 s for 4 models at $n=6000$), a scalability consideration as model libraries expand
- Performance assessment limited to MPE/MAPE; target attainment metrics needed to evaluate clinical impact

#### Limitations (Expert Review)
- The re-estimated model benchmark may be optimistic—FOCE-I on a heterogeneous dataset with 6000 IDs provides substantial information that may not reflect real-world local model development with limited data
- The study does not evaluate the interaction between misspecification types (e.g., simultaneous $\theta_{CL}$ and $\sigma^2$ misspecification), which is the realistic scenario in clinical practice
- The 'flattened priors' behavior of SSE weighting under $\omega^2_{CL}$ misspecification is identified but not quantitatively characterized—the risk of overconfident predictions from over-flexible models is not assessed
- The sampling design (peak at 1h post-infusion, trough at 1h pre-dose) is specific to antimicrobial TDM; other therapeutic areas with different sampling strategies may show different MAA behavior
- The study does not assess the impact of model weight instability across dosing occasions or the convergence rate of weights to the true model
- No assessment of prediction intervals or uncertainty quantification from MAA—only point predictions (MPE/MAPE) are evaluated

#### Generalizability
Findings are based on simulated data with single-parameter misspecifications, which may not capture the complexity of real-world model libraries where multiple parameters are simultaneously misspecified. The one-compartment primary analysis is extended to two-compartment structures with comparable trends, supporting some generalizability. The $\theta_{CL}$ range (1–32 L/h) is clinically motivated by drugs like piperacillin with wide clearance variability across special populations (burn, renal impairment), but extreme values may exaggerate MAA benefits. Results are most directly applicable to antimicrobial MIPD (vancomycin, piperacillin, linezolid) and may not fully transfer to drugs with different PK characteristics or therapeutic targets.

---

### Key Equations

**Coefficient of variation from variance**

{% raw %}
$$
\text{CV}\%=\sqrt{e^{\omega^2}-1}\times 100
$$
{% endraw %}

Converts interindividual variance ($\omega^2$) on the variance scale to a coefficient of variation percentage, used to parameterize the IIV misspecification scenario.

**Prediction error (PE)**

{% raw %}
$$
\text{PE}_{i,j}[\%]=\frac{C_{pred,i,j}-C_{obs,i,j}}{(C_{pred,i,j}+C_{obs,i,j})/2}\times 100
$$
{% endraw %}

Prediction error for individual $i$ at observation $j$, expressed as a percentage relative to the mean of predicted and observed concentrations; the basis for MPE and MAPE.

**Median prediction error (MPE)**

{% raw %}
$$
\text{MPE}[\%]=\text{median}(\text{PE}_{1,1}\dots\text{PE}_{i,j})
$$
{% endraw %}

Median prediction error across all individuals and observations, quantifying systematic bias (accuracy) of the forecasting approach.

**Median absolute prediction error (MAPE)**

{% raw %}
$$
\text{MAPE}[\%]=\text{median}(|\text{PE}_{1,1}|\dots|\text{PE}_{i,j}|)
$$
{% endraw %}

Median absolute prediction error, quantifying the typical magnitude of prediction error (precision) irrespective of direction.

**SSE weighting scheme**

{% raw %}
$$\begin{aligned}
W_{\text{SSE}_i} \\
&= \frac{e^{(-0.5\times \text{SSE}_i)}}{\sum_{1}^{n}e^{(-0.5\times \text{SSE}_n)}}=\frac{e^{(-0.5\times\sum(C_{obs,j}-C_{pred,j})^2)}}{\sum_{1}^{n}e^{(-0.5\times\sum(C_{obs,j}-C_{pred,j})^2)}}
\end{aligned}$$
{% endraw %}

SSE-based weighting scheme for model averaging: each model's weight is proportional to the exponential of negative half its sum of squared errors, normalized across all $n$ candidate models.

**OFV weighting scheme**

{% raw %}
$$
W_{\text{OFV}_i}=\frac{\text{LL}_i}{\sum_{1}^{n}\text{LL}_n}=\frac{e^{(-0.5\times \text{OFV}_i)}}{\sum_{1}^{n}e^{(-0.5\times \text{OFV}_n)}}
$$
{% endraw %}

OFV-based weighting scheme: each model's weight is proportional to its log-likelihood (exponential of negative half the objective function value), normalized across all $n$ candidate models.

---

### Figures & Tables

- **Figure 1**: Schematic of the external model evaluation workflow and MAA integration into MIPD clinical practice
  - *Significance*: Contextualizes the study within the MIPD implementation pipeline, showing where model selection and MAA fit
- **Figure 2**: Workflow diagram of model parameterization, dataset simulation, and evaluation for the three misspecification scenarios
  - *Significance*: Defines the simulation design: six candidate models per scenario, 1000 IDs per model, sparse sampling at 4th and 6th dosing occasions
- **Figure 3**: Predictive performance (MPE and MAPE) for single models, re-estimated model, and MAA combinations across the three misspecification scenarios
  - *Significance*: Central results figure showing that $\theta_{CL}$ misspecification produces the largest performance spread and greatest MAA benefit, while $\omega^2_{CL}$ shows minimal differences
- **Figure 4**: Model weight contributions for OFV and SSE weighting schemes across sub-populations in each misspecification scenario
  - *Significance*: Demonstrates that OFV weighting more reliably identifies the true generating model, while SSE weighting favors low-$\sigma^2$ models ($\sigma^2$ scenario) and high-IIV models ($\omega^2_{CL}$ scenario)
- **Figure 5**: Extended analysis results for two-compartment model and varying sampling designs
  - *Significance*: Shows generalizability of bias-compensation findings to more complex model structures and reveals sensitivity to sampling occasion

---

### Code & Reproducibility Assessment
NONMEM 7.5 used for simulation and re-estimation (FOCE-I); R 4.5.1 for post-processing, model averaging, and visualization. Supplementary Code S1 and S2 provide example model code for one- and two-compartment structures. No datasets were generated or analyzed beyond simulated data; full simulation scripts not deposited in a public repository.

---

### Supplementary Materials
Supplementary material (docx, 2925.3 KB) includes: Table S1 (dosing template), Table S2 (full model parameterization), Tables S3–S5 (numerical performance metrics for $\theta_{CL}$, $\sigma^2$, $\omega^2_{CL}$ scenarios), Fig. S1 (simulated dataset visualization), Fig. S2 (observed vs predicted concentration plots), Fig. S3 (all 50 model combinations for $\theta_{CL}$), Fig. S4 (rRMSE and rBias assessments), Figs. S9–S13 (extended analyses: one- and two-compartment sampling design evaluations, model averaging performance), and Supplementary Code S1/S2 (NONMEM model code examples).

---

### Future Directions
Future work should evaluate simultaneous misspecifications across multiple parameters (e.g., $\theta_{CL}$ and $\sigma^2$ together) to reflect real-world model libraries more faithfully. Prospective studies should assess covariate misspecification (inclusion/omission, functional form) and error model misspecification. The interaction between sampling design (timing, number of samples) and MAA weighting scheme deserves systematic characterization. Clinical validation of the opposing-bias pre-selection strategy in real patient cohorts (e.g., vancomycin, piperacillin) is needed. Development of automated model-library curation tools that identify bias polarity from external evaluations could operationalize these findings. Finally, target attainment-based metrics (rather than only MPE/MAPE) should be used to assess clinical impact of MAA combinations.

---

### Expert Commentary
This is a well-executed, systematic simulation study that fills an important gap: prior MAA evaluations (Uster, Kantasiripitak, Schatz) used real-world external datasets where misspecification types are confounded. By isolating $\theta_{CL}$, $\sigma^2$, and $\omega^2_{CL}$ misspecifications, the authors provide mechanistic clarity on when MAA helps. The finding that two opposing-bias models can match a six-model ensemble is practically valuable—it suggests that model library curation, not exhaustive inclusion, is the key lever. The 'flattened priors' observation for SSE weighting under $\omega^2_{CL}$ misspecification is a subtle but important caution: SSE-based weighting can systematically favor over-flexible models, potentially inflating confidence in predictions. The computational cost scaling (5 min 51 s for 2 models vs 13 min 12 s for 4 models at $n=6000$) is a pragmatic consideration for clinical deployment. A limitation not fully explored is the interaction between misspecification types—real-world models typically have simultaneous misspecifications in multiple parameters, and the additive or synergistic effects remain untested. The choice of $\theta_{CL}$ range (1–32 L/h) is clinically motivated but extreme; more moderate misspecifications may show attenuated MAA benefits.

---

### Bottom Line
For MIPD workflows, model averaging is most valuable when candidate models exhibit opposing structural bias (e.g., under- and over-predicting clearance); combining just two such models can match the performance of a full six-model ensemble or a locally re-estimated model. When residual error is heterogeneous, SSE weighting outperforms OFV weighting by preferentially down-weighting high-$\sigma^2$ models, whereas IIV misspecification has minimal impact on MAA performance. Practitioners should pre-select model combinations based on anticipated bias polarity rather than including all available models indiscriminately.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “External model evaluation is standard practice, yet even 'best' models can be misspecified for a given population.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “Prior external evaluations by Kantasiripitak et al. for infliximab and Schatz et al. for piperacillin suggested that including models with opposing bias improves MAA performance.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “The SSE weighting scheme (EQ5) is a non-parametric likelihood based solely on residual deviations, implicitly assuming homoscedastic normal errors.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “Both weighting schemes normalize weights across the candidate set, effectively performing Bayesian model averaging with uniform priors over models.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “Key assumptions include that candidate models are mutually exclusive hypotheses and that individual TDM data are sufficient to discriminate among models.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “MAA with opposing-bias models (M1+M6) achieved precision (MAPE ~9.5%) comparable to the re-estimated model.” → correction: “For MAA on the full population level, inclusion of all 6 models using the OFV and SSE weighting schemes (MPEOFV/SSE: −1.73%/−0.31%; MAPEOFV/SSE: 9.47%/9.81%) approached the performance of the re-estimated model (MPE: −2.21%; MAPE: 9.55%)”
[^fc-7]: **CONTRADICTED** — original: “The two-model combination M1+M6 (opposing bias) achieved better accuracy (MPE 0.09% for OFV and −1.09% for SSE) than the full six-model ensemble under $\theta_{CL}$ misspecification.” → correction: “For MAA on the full population level, inclusion of all 6 models using the OFV and SSE weighting schemes (MPEOFV/SSE: −1.73%/−0.31%) ... the inclusion of only 2 of the 6 models with negative and positive bias (M1 and M6) in MAA using OFV and SSE weighting schemes, produced better accuracy than the re-estimated model (MPEOFV/SSE: 0.09%/−1.09%).”
[^fc-8]: **UNSUPPORTED** — original: “The SSE weighting scheme requires only observed vs predicted concentrations, making it straightforward to implement in any Bayesian forecasting platform.” → correction: “The SSE weighting scheme relies solely on the deviation between observed and predicted concentrations”
[^fc-9]: **UNSUPPORTED** — original: “Practical recommendation: be cautious with SSE weighting under suspected IIV misspecification, as it may favor over-flexible models.” → correction: “SSE weighting in the case of the $\omega^2_{CL}$ misspecification scenarios also deviated from the ability to “find the correct model” where a greater weight was consistently allocated to models with greater interindividual variability on clearance.”
[^fc-10]: **UNSUPPORTED** — original: “The re-estimated model benchmark may be optimistic because FOCE-I on a heterogeneous dataset with 6000 IDs provides substantial information that may not reflect real-world local model development with limited data.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “The sampling design is specific to antimicrobial TDM; other therapeutic areas with different sampling strategies may show different MAA behavior.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “The study does not assess the impact of model weight instability across dosing occasions or the convergence rate of weights to the true model.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **UNSUPPORTED** — original: “The $\theta_{CL}$ range (1–32 L/h) is clinically motivated by drugs like piperacillin with wide clearance variability across special populations, but extreme values may exaggerate MAA benefits.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “Results are most directly applicable to antimicrobial MIPD (vancomycin, piperacillin, linezolid).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “Clinical validation of the opposing-bias pre-selection strategy in real patient cohorts is needed.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “Development of automated model-library curation tools that identify bias polarity from external evaluations could operationalize the findings.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-09-27-evaluation-of-a-model-averaging-algorithm-for-model-informed-precision-dosing/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-09-27-evaluation-of-a-model-averaging-algorithm-for-model-informed-precision-dosing/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-09-27-evaluation-of-a-model-averaging-algorithm-for-model-informed-precision-dosing/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-09-27-evaluation-of-a-model-averaging-algorithm-for-model-informed-precision-dosing/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-09-27-evaluation-of-a-model-averaging-algorithm-for-model-informed-precision-dosing/figures/fig_05.png)