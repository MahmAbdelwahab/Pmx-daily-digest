---
layout: post
title: "Simulation Framework to Investigate Efficacy and Ocular Safety of Belantamab Mafodotin Combinations in Relapsed/Refractory Multiple Myeloma"
date: 2026-06-06
authors: "Cerrone F, Fernandez-Balsells G, van Noort M, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology (2025), volume not available"
doi: "["
paper_type: popk
tags: [popk, oncology, regulatory]
excerpt_text: "This paper presents a quantitative simulation framework integrating a tumor growth inhibition (TGI) model for serum M-protein and a continuous-time Markov model (CTMM) for keratopathy/visual acuity (KVA) grades, driven by a population PK model of belantamab mafodotin. The framework successfully predicted efficacy (VGPR+, PFS) and ocular safety outcomes from the phase 3 DREAMM-7 and DREAMM-8 trials, and was used to evaluate alternative dosing regimens. This work is essential for pharmacometricians and clinical pharmacologists involved in model-informed drug development for ADCs and dose optimization strategies."
pdf_path: "/assets/digests/2026-06-06-simulation-framework-to-investigate-efficacy-and-ocular-safety-of-belantamab/PMx_Simulation_Framework_to_Investigate_Effi_20260606.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a quantitative simulation framework integrating a tumor growth inhibition (TGI) model for serum M-protein and a continuous-time Markov model (CTMM) for keratopathy/visual acuity (KVA) grades, driven by a population PK model of belantamab mafodotin. The framework successfully predicted efficacy (VGPR+, PFS) and ocular safety outcomes from the phase 3 DREAMM-7 and DREAMM-8 trials, and was used to evaluate alternative dosing regimens. This work is essential for pharmacometricians and clinical pharmacologists involved in model-informed drug development for ADCs and dose optimization strategies.

---

### Executive Summary
A comprehensive simulation framework was developed to predict the benefit–risk profile of belantamab mafodotin (B) in combination with bortezomib/dexamethasone (BVd) and pomalidomide/dexamethasone (BPd) for relapsed/refractory multiple myeloma (RRMM). The framework integrates a popPK model, a TGI model for serum M-protein (with logistic growth, weak Allee effect, exponential kill with resistance), and a CTMM for KVA-graded ocular events (with concentration-dependent transition rates). The models were built using data from multiple monotherapy and combination studies (DREAMM-2, -3, -6, -7, -8). Simulations replicated the observed VGPR+ rates, median PFS, and grade ≥3 OEF rates from DREAMM-7 and DREAMM-8, supporting framework credibility. Alternative dosing scenarios for BVd suggested that starting with 2.5 mg/kg is necessary for efficacy, while extending the dosing interval after the first dose (e.g., Q6W or Q8W) can reduce ocular toxicity with modest efficacy loss. For BPd, planned schedule extensions after initial step-down showed similar efficacy and safety to the reference regimen. The framework provides a versatile tool for dose optimization and regulatory decision support.

---

### Scientific Context & Motivation
Belantamab mafodotin is a BCMA-targeting ADC approved for RRMM, but its use is limited by ocular adverse events (keratopathy and visual acuity changes) that require dose modifications. Regulatory agencies increasingly expect quantitative approaches to identify optimal dosing regimens that balance efficacy and toxicity. Previous work developed a monotherapy simulation framework using a discrete-time Markov model (DTMM) for KVA grades, but it could not simulate dose holds or combination therapies. The present study addresses these gaps by (1) including combination therapy data, (2) employing a more flexible CTMM that accommodates irregular observation intervals, (3) incorporating a dropout model for progressive disease, and (4) implementing a faster simulation engine (mrgsolve) enabling rapid scenario testing. The framework advances MIDD by enabling joint simulation of efficacy and tolerability endpoints under dynamic dosing algorithms.

---

## ⚡ Methodological Snapshot
The framework consists of three linked models: (i) a previously developed popPK model for belantamab mafodotin, (ii) a TGI model for serum M-protein (logistic growth with weak Allee effect, exponential kill driven by PK concentration, resistance via exponential decay, baseline elimination), and (iii) a 4-state CTMM for KVA grades (0,1,2,3/4) with concentration-dependent upward/downward transition rates. Separate M-protein models were built for BVd and BPd (using data from DREAMM-6/7 and DREAMM-8, respectively). The KVA model used pooled data from 959 patients across monotherapy and combination studies. Covariate effects included baseline IgG on M-protein elimination (BVd) and baseline sBCMA on upward transition rates (KVA). Simulations used mrgsolve in R, with dose modifications (holds, reductions, schedule extensions) triggered by predicted KVA grades. The framework accounts for dropouts due to progression (per IMWG criteria) and other reasons.

---

## 🏗️ Structural Model Breakdown
Serum M-protein (M) TGI model: Logistic growth rate with weak Allee effect (sigmoidal function for low M) drives proliferation; elimination comprises a baseline non-drug elimination rate constant and an exposure-driven kill rate that decays exponentially over time (resistance). The equation can be written as: $dM/dt = k_{growth} \cdot M \cdot \left(1 - \left(\frac{M}{M_{max}}\right)^{\theta}\right) \cdot \frac{M^{\gamma}}{EC_{50}^{\gamma} + M^{\gamma}} - \left(k_{elim} + k_{kill} \cdot C(t) \cdot e^{-\lambda \cdot t}\right) \cdot M$, where $C(t)$ is the predicted belantamab mafodotin concentration from the popPK model. For the KVA CTMM: four states (grades 0,1,2,3/4); non-zero transitions allowed between neighboring grades and between grades 0 and 2. Upward transition rates are driven by a power function of drug concentration (with steeper slope for DREAMM-6 grade1->2); downward rates increase with lower concentration (i.e., decrease with concentration). Each transition rate includes baseline transition intensities and drug-effect functions. Inter-individual variability included on some transition intensities and the concentration-effect slope.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects modeling using NONMEM for the TGI and KVA models; popPK model previously developed. The CTMM was rebuilt from a prior DTMM. Simulations performed in R with mrgsolve. Model selection based on OFV, AIC, goodness-of-fit plots, and VPCs. Covariates tested using forward selection (p<0.01) and backward elimination (p<0.001).

#### Data Sources
M-protein models: BVd model used data from DREAMM-6 Arm B (60 pts) and DREAMM-7 (200 pts); BPd model used DREAMM-8 (103 pts). Inclusion criteria: baseline M-protein >=5 g/L, >=1 post-baseline measurement, response assessed by M-protein. KVA model: 959 patients from DREAMM-2, -3, -6 (Arms A, B), -7, -8; grades per KVA scale; 15,374 observations. Patients with CTCAE-graded OEFs retrospectively converted were included. Baseline characteristics similar across datasets (median age ~66 yr, mostly male).

#### Estimation Methods
Maximum likelihood estimation in NONMEM. RSE reported. No Bayesian methods used.

#### Model Evaluation
Visual predictive checks (VPCs) for M-protein models (Figure S2) and goodness-of-fit plots (Figure S3). For KVA model: line plots of predicted transition probabilities vs. concentration bins (Figure 2, S5) and predicted grade probabilities (Figure S6). Framework verification by comparing simulated vs observed VGPR+, mPFS, and grade >=3 OEF rates from DREAMM-7/8, with prediction intervals.

#### Covariate Analysis
For BVd M-protein: baseline IgG on elimination rate (higher IgG -> slower elimination). For BPd M-protein: no significant covariates. For KVA: baseline sBCMA on upward transition rates (higher sBCMA -> lower upward probability). Comedication effects (Vd, Rd, Pd) on drug-dependent and drug-independent transition rates. Included in KVA: Rd effect on specific downward transitions; Vd and Pd effect on downward grade1->0.

---

### Statistical Rigor Assessment
The modeling approach follows standard population modeling practices with adequate sample sizes (260-103 for M-protein, 959 for KVA). Parameter precision is good (all RSE <50% for M-protein, <40% for KVA). VPCs and goodness-of-fit plots support model adequacy. For KVA, the CTMM is preferred over DTMM because it accounts for irregular observation times, but the paper does not discuss checking residual correlation or higher-order Markov dependence. The framework verification against independent trial data (DREAMM-7/8) is a major strength, though the same data contributed to model building (DREAMM-7 for BVd M-protein; DREAMM-8 for BPd M-protein). The prediction intervals for PFS have wide uncertainty in some arms (e.g., upper bound NE). The alternative dosing simulations assume the same covariate distribution as the original trials, which may not generalize. No formal sensitivity analysis for structural assumptions (e.g., shape of Allee effect, resistance decay) is reported.

---

## 📊 Key Findings
The simulation framework accurately replicated DREAMM-7 results: VGPR+ 62.0% (sim) vs 62.0% (obs), mPFS 39.4 vs 36.6 months, grade >=3 OEF 87.5% vs 76.5%. For DREAMM-8: VGPR+ 60.2% vs 68.0%, mPFS NR vs NR, grade >=3 OEF 77.2% vs 82.5%, indicating good predictive performance. For alternative BVd regimens, the 2.5 mg/kg Q3W (reference) gave highest VGPR+ (61.5%) and longest mPFS (37.3 months), with 85.5% grade >=3 OEF. Lower starting dose (1.9 mg/kg Q8W) reduced OEFs (64.0% grade >=3) but markedly reduced efficacy (VGPR+ 44.5%, mPFS 23.9 months). Extending schedule after first 2.5 mg/kg dose to Q6W or Q8W yielded intermediate efficacy and reduced OEFs compared to Q3W. For BPd, schedule extensions after the step-down (to 1.9 mg/kg Q8W) gave similar efficacy and safety across different timing options. The CTMM confirmed that upward transition rates increase with belantamab mafodotin concentration, while downward rates are faster at lower concentrations. Covariate: higher baseline sBCMA reduces upward transitions (possibly reflecting reduced free drug). Lower baseline IgG was associated with faster M-protein elimination in BVd.

---

## 💡 Clinical & Regulatory Implications
The framework supports dose optimization of belantamab mafodotin in BVd and BPd regimens. Key implications: (1) Starting dose should be 2.5 mg/kg to achieve adequate efficacy, but extending the dosing interval after the first dose (e.g., to Q6W or Q8W) can reduce ocular toxicity without major loss of response. (2) For BPd, planned schedule extensions after the initial step-down appear safe and effective. (3) Patients with higher baseline sBCMA may have lower risk of ocular toxicity, possibly allowing less aggressive dose modifications. (4) The framework can be used to support regulatory filings for labeling changes or new dosing strategies, in line with Project Optimus dose optimization initiatives. (5) The demonstrated ability to simulate dynamic dose modifications enables exploration of 'adaptive' dosing algorithms that balance efficacy and tolerability over time.

---

### Strengths & Limitations

#### Strengths
- Integrated three models (PK, efficacy, safety) to simulate both efficacy and tolerability endpoints under dynamic dosing modifications.
- Use of CTMM instead of DTMM allows for irregular observation intervals and more accurate modeling of time-to-event processes.
- Framework validated against two large phase 3 trials (DREAMM-7, DREAMM-8) with good concordance in multiple endpoints.
- Computationally efficient (mrgsolve) enabling rapid simulation of many scenarios for dose optimization.
- Incorporates dropout due to progression and other reasons, improving realism.
- Comprehensive covariate analysis across models; identifies relevant baseline factors (IgG, sBCMA, comedications).

#### Limitations (Acknowledged by Authors)
- Only patients with serum M-protein used for response assessment were included (not those with light chain disease).
- KVA model is stochastic and may underrepresent extreme transitions; higher-order Markov dependence not assessed.
- Simulations assumed protocol-specified dosing, while actual trial dosing could vary based on clinician judgment.
- Independent models for M-protein and KVA assume no cross-correlation beyond shared PK; this may oversimplify potential links between efficacy and safety.
- Extrapolation beyond observed data (e.g., higher/lower exposures, longer intervals) requires caution until confirmed clinically.

#### Limitations (Expert Review)
- The M-protein models for BVd and BPd were built from different datasets; no formal comparison or meta-model combining both was attempted.
- The effect of resistance parameterized as exponential decay may oversimplify tumor evolution; alternatives like time-varying kill or clonal selection were not explored.
- The KVA model treats grades 3 and 4 as a combined state, losing granularity for grade 4 events.
- No formal internal validation (e.g., cross-validation, bootstrap) is reported for the final models; only VPC and observed vs. simulated comparisons.
- The impact of baseline covariates on dose modifications (e.g., sBCMA on OEF risk) is not translated into personalized dosing strategies in the simulations.
- Software implementation (NONMEM, R, mrgsolve) is described but no code repository or fully transparent sharing is evident beyond example files.

#### Generalizability
The framework was developed using belantamab mafodotin data from RRMM patients (mostly heavily pretreated) and may not directly generalize to earlier lines, other ADCs with microtubule inhibitors, or different tumor types. However, the methodology (TGI+CTMM integration) is highly transferable to other drug programs where a biomarker and a toxicity grading scale are available. The authors note the framework can be adapted to other drugs to support dose optimization.

---

### Key Equations

**TGI Model with Logistic Growth, Weak Allee Effect, and Drug Effect**

{% raw %}
$$\begin{aligned}
\frac{dM}{dt} \\
&= k_g \cdot M \cdot \left(1 - \frac{M}{M_{\text{max}}}\right) \cdot \left(\frac{M^{\gamma}}{\theta^{\gamma} + M^{\gamma}}\right) - \left(k_{\text{elim}} + k_{\text{kill}} \cdot C_{\text{PK}} \cdot e^{-\lambda \cdot t}\right) \cdot M
\end{aligned}$$
{% endraw %}

Describes the time course of serum M-protein (M) under belantamab mafodotin. Logistic growth with weak Allee effect (sigmoidal term at low M). Elimination includes a baseline rate and a drug-driven rate that decays exponentially over time (resistance). C_PK is the predicted belantamab mafodotin concentration from popPK.

**Upward Transition Rate in KVA CTMM**

{% raw %}
$$
q_{i,j} = q^{(0)}_{i,j} + \alpha_{i,j} \cdot C_{\text{PK}}^{\beta_{i,j}}
$$
{% endraw %}

Transition rate from grade i to j (j > i) in the continuous-time Markov model for KVA grades. q^{(0)} is baseline rate, alpha and beta are drug-effect parameters. Some transitions may have additional terms (e.g., sum of two power functions for transition from grade 1 to 2 in DREAMM-6).

**Downward Transition Rate in KVA CTMM**

{% raw %}
$$
q_{i,j} = q^{(0)}_{i,j} \cdot \left(1 + \rho_{i,j} \cdot C_{\text{PK}}^{\delta_{i,j}}\right)^{-1}
$$
{% endraw %}

Transition rate from grade i to j (j < i). As concentration increases, downward rates decrease (denominator increases). This structure reflects slower recovery at higher drug levels.

**Covariate Effects on Upward Transition Rate (sBCMA)**

{% raw %}
$$
q_{i,j} = q^{(0)}_{i,j} + \alpha_{i,j} \cdot C_{\text{PK}}^{\beta_{i,j}} \cdot \left(\frac{\text{sBCMA}}{\text{median}_{\text{sBCMA}}}\right)^{\eta}
$$
{% endraw %}

The upward transition rate is modified by baseline soluble BCMA (sBCMA) via a power function. Higher sBCMA reduces the drug-effect component (negative eta), implying less toxicity in patients with higher soluble target.

---

### Figures & Tables

- **Figure 1**: Schematic of the integrated simulation framework (Panel A), the serum M-protein TGI model (Panel B), and the KVA grades CTMM (Panel C). Panel A shows the flow: PK model -> M-protein model and KVA model -> dosing decisions (holds/reductions/schedule changes) based on KVA grade -> dropout due to progression or other reasons.
  - *Significance*: Essential overview of the modeling framework structure and feedback loops, illustrating how dose modifications are dynamically triggered by predicted safety events.
- **Figure 2**: Predicted transition probability versus PK concentration in the final KVA grades model. Black circles show average predicted probabilities across concentration bins for each transition (e.g., grade 0->1, 1->2, etc.).
  - *Significance*: Validates that the model captures exposure-dependent increases in upward transition probabilities and decreases in downward probabilities as intended.
- **Figure 3**: Predicted progression-free survival (PFS) for different simulated BVd dosing regimens: reference 2.5 mg/kg Q3W, 2.5 mg/kg Q6W, 2.5 mg/kg Q8W, and 1.9 mg/kg Q8W. Hazard ratios relative to reference regimen are shown.
  - *Significance*: Key efficacy comparison of alternative dosing strategies, demonstrating that 2.5 mg/kg starting dose is necessary for prolonged PFS, while extended intervals reduce but do not abolish efficacy.
- **Table 1**: Baseline demographics and disease characteristics for the serum M-protein models (BVd and BPd) and the KVA grades model. Includes sex, age, weight, albumin, sBCMA, IgG, beta-2 microglobulin, LDH, M-protein levels.
  - *Significance*: Characterizes the populations used for model building; allows assessment of generalizability and covariate selection.
- **Table 2**: Simulated efficacy (ORR, VGPR+, PFS at 12/24 months, mPFS) and safety (grade >=2 and >=3 KVA) outcomes for alternative BVd dosing regimens over 50 months. Regimens: 2.5 mg/kg Q3W (reference), 2.5 mg/kg Q6W, 2.5 mg/kg Q8W, 1.9 mg/kg Q8W.
  - *Significance*: Central table comparing benefit-risk profiles of alternative BVd schedules. Shows trade-off between efficacy and ocular toxicity. Lower starting dose (1.9 mg/kg) provides greatest toxicity reduction but with substantial efficacy loss.
- **Table S4**: Parameter estimates for final BVd and BPd M-protein models, including fixed and random effects.
  - *Significance*: Provides the quantitative parameterization (growth rate, kill rate, Allee effect parameters, resistance decay, covariate effects) needed to reproduce or adapt the models.
- **Table S6**: Parameter estimates for the final KVA CTMM, including baseline transition intensities, drug-effect parameters, covariate effects (sBCMA), and comedication effects.
  - *Significance*: Complete parameterization of the ocular safety model; critical for understanding exposure-toxicity relationships and for future simulations.
- **Table S8**: Simulated outcomes for alternative BPd dosing regimens, including schedule extensions at different months (3,4,5,6).
  - *Significance*: Shows that planned schedule extensions after step-down yield similar efficacy and safety to the reference DREAMM-8 regimen, supporting flexible dosing.

---

### Code & Reproducibility Assessment
Simulations conducted in R with mrgsolve; example model code and dataset provided in supplementary files (Files S1 and S2). No explicit data sharing statement beyond GSK's usual policy. Core models built in NONMEM but code not publicly deposited.

---

### Supplementary Materials
Supplementary materials include: Methods S1 (details on M-protein model covariate analysis, KVA model building, dropout model, simulation framework), Table S1 (study dosing and sampling), Table S2 (patient counts and observation numbers), Table S3 (R-ISS/ISS staging), Table S4 (M-protein model parameters), Table S5 (dry eye history), Table S6 (KVA model parameters), Table S7 (KVA parameters by therapy type), Tables S8-S12 (additional simulation results), Figures S1-S6 (M-protein time profiles, VPCs, goodness-of-fit, individual fits, transition probability line plots). Additionally, Files S1 and S2 provide example model code and dataset.

---

### Future Directions
Extend the M-protein model to incorporate serum free light chain data to include patients with light chain-only disease. Explore higher-order Markov models for KVA to capture potential dependencies on multiple previous states. Validate the alternative dosing predictions prospectively in clinical trials or through real-world evidence. Incorporate time-varying covariates (e.g., changing IgG, sBCMA) to refine predictions. Apply the framework to other ADCs or combination regimens to demonstrate transferability. Use machine learning or Bayesian optimization to identify optimal individualized dosing strategies.

---

### Expert Commentary
This work represents a mature example of model-informed drug development where a sponsor proactively builds a quantitative framework to optimize dosing beyond the pivotal trial regimen. The shift from DTMM to CTMM is a notable methodological advance, as Markov models in pharmacometrics often default to discrete time when continuous time is more appropriate. The inclusion of dropout due to progression is a realistic addition often missing in such frameworks. From a regulatory perspective, this framework could support label expansions or dose optimization studies required by Project Optimus. One gap is the lack of formal model-based meta-analysis to combine the BVd and BPd data into a single M-protein model with drug-specific effects—this would have enabled head-to-head comparisons. The covariate effect of sBCMA on reducing upward KVA transitions is intriguing: since sBCMA is a soluble target that can bind drug, higher levels may reduce free drug exposure available to cause ocular toxicity, a mechanistic insight that could inform patient risk stratification. The simulation results align well with clinical intuition: maintaining a loading dose of 2.5 mg/kg followed by extended dosing intervals preserves efficacy while reducing toxicity. This is a promising strategy that warrants clinical evaluation.

---

### Bottom Line
This integrated modeling framework (PK–TGI–CTMM) successfully recapitulated key efficacy and ocular safety outcomes from the DREAMM-7 and DREAMM-8 trials, and it provides a powerful tool to explore alternative dosing strategies for belantamab mafodotin in RRMM. The analyses suggest that a starting dose of 2.5 mg/kg is critical for efficacy, but that extending the dosing interval after initial doses can mitigate ocular toxicity without substantially compromising efficacy. For practicing pharmacometricians, this work exemplifies how to combine tumor dynamic and adverse event models with dynamic dose modification rules to inform dosing decisions, a paradigm increasingly important in MIDD and regulatory submissions.

---

---

## 📊 Figures

![Integrated simulation framework (A), serum M-protein model (B), and KVA grades model (C).aTwo types of dropout were possible: dropout due to disease progression]({{ site.baseurl }}/assets/digests/2026-06-06-simulation-framework-to-investigate-efficacy-and-ocular-safety-of-belantamab/figures/fig_01.png)

![Predicted transition probability versus PK concentration in the final KVA grades model. Black circles: average predicted transition probabilities of respective g]({{ site.baseurl }}/assets/digests/2026-06-06-simulation-framework-to-investigate-efficacy-and-ocular-safety-of-belantamab/figures/fig_02.png)

![Predicted Progression-free survival of different simulated dosing regimens for BVd from DREAMM-7.aAll HR calculations were performed in relation to the simulated]({{ site.baseurl }}/assets/digests/2026-06-06-simulation-framework-to-investigate-efficacy-and-ocular-safety-of-belantamab/figures/fig_03.png)