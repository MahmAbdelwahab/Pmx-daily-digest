---
layout: post
title: "Using Stochastic Simulation-Estimation and Automated Model Development to Assess Power and Accuracy for Covariate Identification"
date: 2026-08-20
authors: "Hsu YH, Costa B, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, doi:10.1002/psp4.70299"
doi: "10.1002/psp4.70299"
paper_type: methodology
tags: [methodology, covariate-analysis]
excerpt_text: "This simulation study compares three approaches for evaluating covariate identification power in PopPK: classic SSE (assuming known model), AMD with exploratory covariate search, and AMD with structural covariate forcing. SSE overestimates power and accuracy, while AMD approaches incorporate model-building uncertainty; forcing a covariate inflates type I error to ~20%."
pdf_path: "/assets/digests/2026-08-20-using-stochastic-simulation-estimation-and-automated-model-development-to/PMx_Using_Stochastic_SimulationEstimation_an_20260820.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This simulation study compares three approaches for evaluating covariate identification power in PopPK: classic SSE (assuming known model), AMD with exploratory covariate search, and AMD with structural covariate forcing. SSE overestimates power and accuracy, while AMD approaches incorporate model-building uncertainty; forcing a covariate inflates type I error to ~20%.

---

### Executive Summary
The authors systematically compared three strategies for assessing the power and accuracy of covariate identification in population pharmacokinetic (PopPK) trial design: (i) stochastic simulation and estimation (SSE) using the known simulation model, (ii) automated model development (AMD) with exploratory covariate search (AMD-exploratory), and (iii) AMD with the covariate of interest forced into the model from the start (AMD-structural). Using a simulated pregnancy effect on clearance (25% increase) and three sampling designs (rich, medium, sparse), they evaluated type I error (T1E), power, parameter bias/precision/accuracy, and model fit (dBIC). SSE yielded the highest power (79–100%) and lowest rRMSE (22–42%) but is optimistic because it assumes the true model is known. AMD-exploratory produced more realistic but lower power (41–74%) and higher rRMSE (34–49%), with sparse designs leading to frequent selection of alternative or no covariates. AMD-structural increased power (80–93%) but inflated T1E to 17–20%, reflecting path dependency in model selection. The study highlights the importance of accounting for model-building uncertainty in design evaluation and suggests a sequential SSE-then-AMD workflow for practical study planning.

---

### Scientific Context & Motivation
Clinical trial simulations for PopPK studies typically assume the analysis model is known a priori, as in SSE, which does not reflect real-world model building. This mismatch can lead to overestimated power and inaccurate covariate effect estimates. Automated model development tools (e.g., Pharmpy AMD) now enable realistic model building on each simulated dataset, but their impact on power and type I error relative to SSE has not been systematically quantified. This study addresses that gap by comparing SSE with two AMD strategies under varying data richness.

---

## ⚡ Methodological Snapshot
The study compares three approaches for evaluating covariate identification in PopPK trial design. SSE simulates datasets from a known model and re-estimates the same model, using LRT between full and reduced models to assess power and T1E. AMD-exploratory uses Pharmpy's automated model development to build models from scratch on each simulated dataset, with a forward-inclusive stepwise covariate search (SCM) at 5% significance. AMD-structural forces the covariate of interest into the model before model search and re-evaluates it at the end. All approaches are applied to 100 simulated datasets per sampling design (rich, medium, sparse). The simulation model is a one-compartment model with first-order absorption and elimination, with a 25% pregnancy effect on clearance, based on dolutegravir PopPK.

---

## 📐 Statistical Framework
The statistical framework is likelihood-based. SSE uses the likelihood ratio test (LRT) comparing full (with covariate) and reduced (without covariate) models, with a 5% significance level. AMD uses a sequential model building process: structural model selection, IIV, RUV, IOV, and covariate search. Model selection criteria include BIC for mixed-effects models (penalizing number of parameters) and LRT (p=1% for RUV, p=5% for covariates). The covariate search uses forward-inclusive stepwise covariate modeling (SCM). The theoretical basis assumes that the true model is known in SSE, while AMD accounts for model uncertainty by exploring a search space. The inflated T1E in AMD-structural is attributed to path dependency in the selection process, where forcing a covariate biases subsequent selection steps.

---

### Estimator Behavior
SSE provides the most accurate and precise estimates of the covariate effect (THCLpreg), with rRMSE 22–42% and low bias (mean close to 0.25). AMD-exploratory shows higher bias (mean 0.28–0.31) due to post-selection bias, as estimates are conditional on covariate inclusion. AMD-structural has the highest variability (SD up to 0.15) and rRMSE (42–60%), especially in sparse designs, because the covariate is forced even when not identifiable. Power estimates: SSE highest (79–100%), AMD-structural intermediate (80–93%), AMD-exploratory lowest (41–74%). T1E is controlled in SSE and AMD-exploratory (4–7%) but inflated in AMD-structural (17–20%). Convergence rates were high (93–100%) across all approaches.

---

### Validation Design
The validation is a simulation study with 100 replicates per design. Three sampling designs (rich, medium, sparse) were generated from a one-compartment model with pregnancy effect on clearance. The true model parameters were based on published dolutegravir PopPK. T1E was assessed by simulating under the reduced model (no covariate) and counting false positives; power by simulating under the full model and counting true positives. Parameter accuracy was evaluated using bias, precision (SD), and RMSE/rRMSE. Model fit was compared using dBIC between AMD-built models and the full SSE model. PPE was used as a reference for sample size-power mapping.

---

### Applicability Boundaries
SSE is appropriate when the structural model is well-established and covariate effects are large and robust, providing an optimistic lower bound for sample size. AMD-exploratory is more realistic when model uncertainty exists, but it yields lower power and may select alternative covariates, especially in sparse designs. AMD-structural should be avoided unless the covariate is strongly justified, as it inflates T1E. The differences between approaches are amplified in sparse designs, so SSE power estimates should be interpreted with caution when data are limited. The findings are most directly applicable to binary/categorical covariates; continuous covariates may show wider gaps due to functional form uncertainty.

---

### Comparison to Alternatives
Compared to SSE, AMD approaches incorporate model-building uncertainty, leading to more realistic but lower power and higher estimation error. AMD-exploratory is the most realistic but has the lowest power, particularly in sparse designs, and is subject to post-selection bias. AMD-structural trades T1E inflation for higher power, but the inflated false-positive rate makes it unsuitable for confirmatory settings. SSE is computationally efficient and allows sample size extrapolation via PPE, while AMD lacks such functionality. The authors suggest a sequential approach: use SSE first to establish a minimal sample size, then AMD to refine, balancing efficiency and realism.

---

### Implementation Guidance
SSE was implemented using PsN (version 5.3.0) with NONMEM 7.5, using the SSE and PPE commands. AMD was implemented using Pharmpy (version 1.3.0) via the R package 'pharmr', with NONMEM 7.5 and FOCEI estimation. The AMD workflow includes sequential modules: structural model search, IIV, RUV, IOV, and covariate search, with specific search spaces and selection criteria (BIC, LRT). Computational cost is higher for AMD, especially with sparse data due to convergence issues. Practical tips: use a well-defined search space to reduce runtime; consider adjusting MAXEVAL for convergence; for study planning, start with SSE to get a lower bound, then run AMD on a subset of datasets to assess realism. The paper provides detailed settings in Table 2 and supplemental PsN commands.

---

## 📊 Key Findings
1. T1E was controlled in SSE (4–7%) and AMD-exploratory (4–6%) but inflated in AMD-structural (17–20%) across all designs. 2. Power for detecting the pregnancy effect on clearance: SSE 99%/100%/79%, AMD-exploratory 74%/72%/41%, AMD-structural 92%/93%/80% for rich/medium/sparse designs. 3. Parameter accuracy (rRMSE) was best in SSE (27%/22%/42%), intermediate in AMD-exploratory (34%/26%/49%), and worst in AMD-structural (42%/47%/60%). 4. AMD-exploratory often selected alternative covariates (e.g., V-PREG) or no covariate, especially in sparse designs. 5. AMD-built models had comparable BIC to the true model, with ~23–46% achieving dBIC ≤ 0. 6. Sparse designs amplified differences between approaches, underscoring the impact of data richness on model selection uncertainty.

---

### Strengths & Limitations

#### Strengths
- Directly addresses a critical methodological gap: the unrealistic assumption of known model in SSE for covariate power assessment.
- Uses a realistic simulation model based on published dolutegravir PopPK data with a categorical covariate (pregnancy) to isolate methodological effects.
- Systematically compares three approaches across three sampling designs (rich, medium, sparse) with 100 replicates each.
- Provides quantitative metrics: T1E, power, bias, precision, RMSE, and BIC-based model fit comparison.
- Demonstrates the practical utility of automated model development (Pharmpy AMD) for design evaluation.
- Discusses computational cost and proposes a pragmatic sequential SSE-then-AMD workflow.

#### Limitations (Acknowledged by Authors)
- AMD tool does not allow direct setting of initial estimates for covariate coefficients.
- Some models took longer to converge, especially with sparse data.
- AMD lacks a standardized framework for sample size extrapolation (unlike SSE's PPE).
- Findings are based on a single binary covariate; extrapolation to continuous covariates should be cautious.
- The AMD framework represents a specific automated workflow, not all real-world model-building practices.

#### Limitations (Expert Review)
- Only 100 simulated datasets per design may limit precision of T1E/power estimates (e.g., T1E of 5% has SE ~2%).
- The simulation model is simplified and harmonized, not an exact reproduction of the reference models, which may affect generalizability.
- AMD-structural's inflated T1E is attributed to path dependency, but the mechanism is not fully dissected (e.g., multiple testing across model steps).
- Continuous covariates (age, weight) were included in the search space but not simulated as true effects, so competition dynamics are not fully explored.
- No formal adjustment for multiple comparisons in AMD covariate search beyond the nominal 5% LRT.
- Computational cost of AMD is not quantified in detail, limiting practical guidance for resource planning.

#### Generalizability
The findings are likely generalizable to other binary/categorical covariates (e.g., sex, formulation, concomitant medication) and to PopPK models with similar complexity. However, results may differ for continuous covariates, where functional form uncertainty adds another layer of model selection. The relative performance of SSE vs AMD approaches is expected to hold qualitatively across designs, but the magnitude of differences may vary with effect size, sample size, and model misspecification.

---

### Key Equations

**Covariate effect on clearance**

{% raw %}
$$
TVCL = THCL \times (1 + THCL_{preg})
$$
{% endraw %}

The pregnancy effect on clearance is modeled as a fractional change relative to the typical value (THCL). THCLpreg = 0.25 represents a 25% increase in clearance during pregnancy.

---

### Figures & Tables

- **Figure 1**: Workflow diagram illustrating the three approaches: SSE (Approach 1), AMD-exploratory (Approach 2), and AMD-structural (Approach 3) across rich, medium, and sparse sampling designs.
  - *Significance*: Provides a clear visual overview of the study design and the key methodological differences between the approaches.
- **Figure 2**: Bar plots showing the frequency of covariate identification (CL-PREG, V-PREG, other, none) for each approach and design at a 5% significance level.
  - *Significance*: Illustrates how AMD-exploratory often selects alternative covariates or none, especially in sparse designs, highlighting the impact of model-building uncertainty on covariate selection.
- **Table 3**: Summary of power, type I error, and parameter estimates (mean, SD, RMSE, rRMSE) for THCLpreg across the three approaches and three designs.
  - *Significance*: Central quantitative results showing the trade-offs between power, T1E, and estimation accuracy across methods and data richness.

---

### Code & Reproducibility Assessment
The paper does not provide a dedicated code repository, but it mentions using PsN (version 5.3.0) and NONMEM 7.5 for SSE, and Pharmpy (version 1.3.0) via the R package 'pharmr' for AMD. PsN commands are provided in the supplemental material. The simulation model parameters and AMD settings are described in detail, enabling replication. No explicit version control or public code link is given.

---

### Supplementary Materials
Supporting information includes full LRT results (Table S1), parametric power estimation (PPE) curves (Figure S1), detailed AMD model selection summaries (Figures S2–S4), dBIC distributions (Figure S5), and direct BIC comparison between AMD strategies (Figure S6). PsN commands are also provided.

---

### Future Directions
Future work should extend the comparison to continuous covariates with functional form uncertainty, evaluate adaptive trial designs with interim model updates, and develop a standardized framework for sample size extrapolation within AMD (e.g., integrating PPE-like algorithms). Additionally, investigating the impact of different AMD search algorithms and selection criteria (e.g., AIC vs BIC) on power and T1E would be valuable. Quantifying computational costs and optimizing AMD convergence (e.g., dynamic MAXEVAL) would improve practical usability.

---

### Expert Commentary
This paper provides a timely and rigorous evaluation of a long-standing limitation in clinical trial simulation for PopPK. The comparison of SSE with automated model building is a significant step toward more realistic design assessment. The inflated type I error in AMD-structural is a particularly important cautionary finding, as it highlights the subtle biases introduced by path-dependent model selection. The proposed sequential SSE-then-AMD workflow is pragmatic and likely to be adopted in practice. However, the study's reliance on a single binary covariate and a simplified model limits the breadth of conclusions; future work should explore continuous covariates and more complex structural models to confirm the generalizability of these findings.

---

### Bottom Line
For realistic power and accuracy assessment of covariate identification in PopPK trial design, SSE should be used as an optimistic lower bound, while AMD-based approaches (especially AMD-exploratory) provide more realistic estimates that account for model-building uncertainty. Forcing a covariate (AMD-structural) inflates type I error and should be avoided unless the covariate is strongly justified. A sequential strategy—first SSE to establish a minimal sample size, then AMD to refine—balances computational efficiency and realism.

---

---

## 📊 Figures

![The workflow illustrates the assessment of covariate effects using SSE and AMD across different sampling designs. In Approach 1 (SSE), datasets of varying richne]({{ site.baseurl }}/assets/digests/2026-08-20-using-stochastic-simulation-estimation-and-automated-model-development-to/figures/fig_01.jpg)

![Covariate identification of three approaches: SSE, AMD-exploratory, and AMD-structural, using a 5% significance level and three different study designs: The rich]({{ site.baseurl }}/assets/digests/2026-08-20-using-stochastic-simulation-estimation-and-automated-model-development-to/figures/fig_02.jpg)