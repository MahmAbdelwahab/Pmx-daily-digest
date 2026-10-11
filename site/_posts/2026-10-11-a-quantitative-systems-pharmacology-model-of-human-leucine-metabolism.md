---
layout: post
title: "A Quantitative Systems Pharmacology Model of Human Leucine Metabolism"
date: 2026-10-11
authors: "Herron JC, Sher A, Ma Y, Roesch E, Roth Flach R, Miculța-Câmpeanu S, Rackauckas C, Filipski KJ, Rieger TR, Musante CJ, Allen R"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026 (published online 2026-10-01)"
doi: "10.1002/psp4.70328"
paper_type: qsp_pkpd
tags: [qsp_pkpd, qsp]
excerpt_text: "A quantitative systems pharmacology (QSP) model of human leucine metabolism was built using a virtual population approach, capturing clinical leucine and KIC dynamics from oral and IV challenges. The model predicts that reproducing the ~50-80% plasma leucine/KIC reductions seen with BDK inhibition preclinically requires an indirect BCKDH-dependent feedback on tissue uptake, not just inhibition of BCKDH phosphorylation. Drug developers targeting BCAA metabolism should use this model to design clinical studies and test mechanistic hypotheses."
pdf_path: "/assets/digests/2026-10-11-a-quantitative-systems-pharmacology-model-of-human-leucine-metabolism/PMx_A_Quantitative_Systems_Pharmacology_Mode_20261011.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
A quantitative systems pharmacology (QSP) model of human leucine metabolism was built using a virtual population approach, capturing clinical leucine and KIC dynamics from oral and IV challenges. The model predicts that reproducing the ~50-80% plasma leucine/KIC reductions seen with BDK inhibition preclinically requires an indirect BCKDH-dependent feedback on tissue uptake, not just inhibition of BCKDH phosphorylation. Drug developers targeting BCAA metabolism should use this model to design clinical studies and test mechanistic hypotheses.

---

### Executive Summary
This paper presents a mechanistic, whole-body QSP model of human leucine and α-ketoisocaproic acid (KIC) metabolism, built using a virtual population (VPop) approach and calibrated to multiple clinical challenge studies (IV infusion, oral administration, insulin infusion) and preclinical BDK inhibitor data. The model recapitulates observed plasma leucine and KIC dynamics and variability in healthy volunteers. A key finding is that to match the large plasma reductions (~50% leucine, ~80% KIC) observed in rodents with BDK inhibition, the model must include an indirect, BCKDH-dependent regulatory feedback that increases tissue uptake of leucine and KIC. Without this feedback, the model under-predicts the reductions (28% leucine, 40% KIC), suggesting a compensatory mechanism in vivo. The model and its virtual populations provide a platform for exploring BDK inhibition in humans and for generating testable hypotheses about BCAA regulation.

---

### Scientific Context & Motivation
Branched-chain amino acids (BCAAs) are essential and their dysregulation is linked to metabolic diseases (insulin resistance, T2D, obesity, heart failure). The rate-limiting step in BCAA catabolism is the irreversible oxidative decarboxylation of BCKAs by BCKDH, which is inhibited by BDK. BDK inhibition is a therapeutic strategy to lower BCAA levels, but the systemic and tissue-level mechanisms governing plasma BCAA/BCKA reductions are unclear. Existing rodent models do not directly translate to humans due to interspecies differences in oxidative capacity. This work addresses the gap by building a human-relevant mechanistic model that quantitatively captures clinical leucine/KIC dynamics and can test hypotheses about regulatory feedback that may explain the magnitude of BDK inhibition effects.

---

## ⚡ Methodological Snapshot
A QSP model of human leucine metabolism with four compartments (plasma, skeletal muscle, liver, other tissues) was built. It includes reversible transamination (BCAT) and irreversible oxidative decarboxylation (BCKDH) with Michaelis–Menten kinetics. BDK inhibition increases BCKDH activity (up to 10-fold). The model also includes an indirect, BCKDH-dependent regulatory effect on tissue uptake for leucine and KIC. A virtual population of 1000 healthy subjects was generated using parameter sampling and acceptance-rejection importance sampling to match clinical data from multiple challenge studies. The model was coded in Julia and optimized using BlackBoxOptim.jl.

---

## 🏗️ Structural Model Breakdown
The model consists of plasma and tissue compartments (muscle, liver, other). Each tissue has leucine and KIC pools. Key processes:
- Leucine uptake from plasma into tissues (except liver) with rate constants that can be modulated by BCKDH activity (indirect feedback).
- Intracellular reversible transamination of leucine to KIC via BCAT, modeled with Michaelis–Menten kinetics (Vmax and Km).
- KIC export from tissues to plasma (except liver) and hepatic KIC uptake.
- Irreversible KIC decarboxylation via BCKDH (Michaelis–Menten kinetics, with Vmax scaled by BCKDH activity). BCKDH activity increases up to 10-fold upon BDK inhibition.
- Muscle protein synthesis and breakdown (insulin-modulated) release/consume leucine.
- Oral absorption submodel for leucine and KIC with a two-compartment delay.
- The primary model includes an indirect feedback: increased BCKDH activity leads to increases in tissue uptake rate constants for leucine and KIC (assumed to be proportional to BCKDH activity or a saturable function). Alternate models test absence of feedback or inhibition of export instead.
- All processes are defined by ODEs (details in supplementary Information).

---

### Detailed Methodological Analysis

#### Modeling Approach
Quantitative systems pharmacology (QSP) model using ordinary differential equations (ODEs) to describe plasma and tissue leucine/KIC kinetics. Compartments: plasma, skeletal muscle, liver, and 'other' tissues. Reversible transamination (BCAT) and irreversible decarboxylation (BCKDH) are modeled with Michaelis–Menten kinetics. Oral absorption is a two-compartment model. BDK inhibition increases BCKDH activity. An indirect regulatory effect on tissue uptake is included in the primary model. Virtual populations generated via Latin Hypercube sampling plus acceptance-rejection importance sampling. Software: Julia 1.7.3, GlobalSensitivity.jl, BlackBoxOptim.jl, GPU-accelerated ODE solving.

#### Data Sources
Clinical human studies: IV infusion of leucine and KIC, oral administration of leucine and KIC, insulin infusion, and muscle leucine exchange (leg) measurements. Steady-state plasma and muscle leucine concentrations from literature. Preclinical data: Zucker fatty rats treated with BT2 (BDK inhibitor) for 1 week, providing percentage reductions in plasma leucine (~50%) and KIC (~80%). All studies summarized in Table S1.

#### Estimation Methods
Virtual population approach: parameters were sampled from physiological ranges (Latin Hypercube), then each parameter set was scored against data using sum of squared errors (SSE) and an adjusted SSE for data that fall within a predefined range. Accepted parameter sets were selected via acceptance-rejection importance sampling to generate a diverse population of 1000 plausible patients. For alternate scenarios, optimization (BlackBoxOptim) was used to minimize the objective function with increased weighting for insulin and oral KIC experiments.

#### Model Evaluation
Model performance assessed by comparing VPop simulations (median and 90% prediction intervals) to observed clinical data (Figures 3 and 4). Additionally, validation against preclinical BDK inhibition reductions (Figure 5). Sensitivity analyses: global Sobol sensitivity analysis (first- and total-order indices) and local sensitivity via control coefficients. These were used to guide parameter fixing and identify influential parameters.

#### Covariate Analysis
No explicit covariate models (e.g., age, sex, weight) were included. Instead, a virtual population approach allows inter-individual variability through parameter sampling, but covariates were not incorporated. The model assumes a healthy, average adult population. Future versions may include demographic covariates.

---

### Statistical Rigor Assessment
The virtual population approach is statistically sound, using Latin Hypercube sampling and importance sampling to achieve a representative population. Scoring with adjusted SSE and acceptance thresholds is a valid approximate Bayesian computation (ABC) style method. However, the model does not quantify parameter uncertainty formally (no posterior distributions). The GSA and LSA are well-executed. The alternative scenarios were optimized with a different weighting, which could introduce bias when comparing models, but the authors acknowledge this and provide rationale. Sample sizes in clinical data are small for some endpoints (muscle exchange), and the model's variability in those endpoints is underestimated. Overall, the statistical methods are appropriate for QSP modeling, though a formal Bayesian approach or bootstrap could provide stronger uncertainty estimates.

---

## 💡 Clinical & Regulatory Implications
The model provides a mechanistic framework to predict how BDK inhibition lowers plasma leucine and KIC in healthy humans, supporting the development of BDK inhibitors as potential therapies for metabolic diseases (e.g., type 2 diabetes, heart failure). It can be used to design clinical trials: selecting doses, predicting biomarker responses, and identifying patient populations. The model also suggests that direct BDK inhibition may not be sufficient to achieve large reductions unless an additional uptake-regulatory mechanism is present clinically; if observed reductions are smaller, the null or export-inhibition models may apply. Regulatory agencies could use such models to evaluate proposed mechanisms and support drug development decisions. The model could be extended to incorporate disease-specific alterations in BCAA metabolism, aiding in precision medicine approaches.

---

## 📊 Key Findings
1. The VPop model successfully reproduces plasma leucine and KIC concentration-time profiles from multiple clinical studies, including IV infusion, oral administration, and insulin infusion (Figures 3 and 4 in the paper). 2. To replicate the ~50% and ~80% reductions in plasma leucine and KIC observed in rodents treated with the BDK inhibitor BT2, the model requires an additional indirect regulatory mechanism: BCKDH-activity-dependent enhancement of tissue uptake of leucine and KIC. 3. A null model (no indirect feedback) only predicts 28% ± 7% and 40% ± 8% reductions, while a model with feedback on export inhibition predicts 40% ± 7% and 48% ± 8%, insufficient for KIC. 4. Global sensitivity analyses (Sobol) and local control coefficients identify plasma volume of distribution, muscle degradation rate, tissue uptake/export, BCAT activity, and muscle synthesis as key drivers of both steady-state levels and BDK-inhibition-induced reductions. 5. The model provides a mechanistic explanation for why simple BDK inhibition alone may not fully account for in vivo effects, suggesting a compensatory uptake-regulatory mechanism.

---

### Strengths & Limitations

#### Strengths
- First in silico systems model of human leucine metabolism that integrates multiple clinical datasets.
- Uses a rigorous virtual population approach (acceptance-rejection based) to generate diverse parameter sets that match data distributions.
- Includes comprehensive global and local sensitivity analyses to identify key parameters and justify model simplification.
- Open-source code and data availability (GitHub) enhances reproducibility.
- Proposes a novel, testable hypothesis (BCKDH-dependent tissue uptake feedback) that can guide experimental design.

#### Limitations (Acknowledged by Authors)
- Model only captures acute responses, not chronic effects or long-term BDK inhibition.
- BCKDH regulation is simplified (no explicit BDK/PP2Cm dynamics).
- Crosstalk among the three BCAAs is not modeled.
- Model parameterization relies on limited human data, with small sample sizes in some studies (e.g., muscle exchange studies).
- Preclinical BDK inhibition data is from Zucker fatty rats, which may differ from humans.

#### Limitations (Expert Review)
- The model's assumption that the liver only uptakes KIC (not leucine) may be an oversimplification; some hepatic leucine uptake may occur, though it was justified by literature.
- The 'other tissue' lumped compartment may mask organ-specific contributions (e.g., heart, kidney) that could be relevant in disease states.
- The use of adjusted SSE with a 'zero score' within a range may artificially reduce the effective weight of those data, potentially biasing parameter estimation.
- The alternate hypothesis models were optimized with a different weighting (10-fold for insulin and oral KIC), making the comparison between models potentially inconsistent.
- No formal identifiability analysis beyond sensitivity has been done; parameters may be correlated or unidentifiable.
- The model does not include age, sex, or body composition as covariates, which may affect leucine kinetics.

#### Generalizability
The model is developed for healthy human populations and may not directly apply to patient populations with metabolic disease (e.g., T2D, obesity) where BCAA metabolism is dysregulated. However, the VPop approach can be re-calibrated to patient data. The model's modular structure could be extended to include other BCAAs and neurohumoral regulation. The finding that an uptake-regulatory mechanism is needed to explain BDK inhibition effects may have general implications for other amino acid metabolic pathways.

---

---

### Figures & Tables

- **Figure 1**: Schematic overview of BCAA/BCKA catabolism and the role of BDK inhibitor. Shows the pathway from leucine to KIC to downstream metabolism with regulation by BCKDH and BDK.
  - *Significance*: Provides a conceptual framework for the model components and the therapeutic target.
- **Figure 3**: Model simulations compared to experimental data from infusion experiments in healthy volunteers (IV leucine, IV KIC, insulin infusion). Shows VPop simulations (median and 90% CI) versus observed data points.
  - *Significance*: Validates that the model captures acute dynamics of leucine and KIC across multiple clinical infusion studies.
- **Figure 4**: Model simulations compared to oral administration data after bolus doses of leucine or KIC (0.55 mmol/kg). Shows plasma concentration-time profiles.
  - *Significance*: Validates the oral absorption and first-pass handling, supporting the model's utility for oral dosing predictions.
- **Figure 5**: Model simulations compared to preclinically observed plasma reductions for leucine (left) and KIC (right) upon BDK inhibition. Shows percent change from baseline for three VPop scenarios: Primary (with uptake feedback), Null model (no feedback), and Hypothesis #2 (export inhibition).
  - *Significance*: Key result: demonstrates that only the Primary model, with tissue uptake feedback, reproduces the ~50% and ~80% reductions observed in rodents, supporting the proposed regulatory mechanism.

---

### Code & Reproducibility Assessment
The model code, including all virtual population models and simulation scripts, is openly available at the Pfizer Open Source GitHub repository (https://github.com/pfizer-opensource/leucine-systems-model-CPT-PSP). The paper also lists the software used (Julia 1.7.3, GlobalSensitivity.jl, BlackBoxOptim.jl). This enables full reproduction and extension of the work.

---

### Supplementary Materials
Supplementary materials include detailed model equations, parameter tables, sensitivity analysis figures (Figures S1–S3), results from alternate virtual populations (Figures S4–S6), and control coefficient tables (Tables S2 and S3). Table S1 summarizes the clinical studies used for calibration. These are referenced in the main text and available with the online article.

---

### Future Directions

---

### Expert Commentary

---

### Bottom Line
This QSP model represents a significant advance in understanding human leucine metabolism and predicting the effects of BDK inhibitors. It demonstrates that simple upregulation of BCKDH activity is insufficient to match the marked lowering of plasma leucine and KIC observed in rodents; an additional feedback on tissue uptake is required. As a tool, it enables mechanistic interpretation of clinical data and can support the design of clinical trials with BDK inhibitors, including dose selection and biomarker prediction. Practitioners should appreciate the value of virtual populations and sensitivity analyses in constructing robust systems models, and they should validate model assumptions against new clinical data as they become available.

---

---

## 📊 Figures

![Schematic overview of BCAA/BCKA catabolism and the role of a BDK inhibitor. The BCKDH enzyme complex mediates the rate-limiting irreversible step in BCAA metabol]({{ site.baseurl }}/assets/digests/2026-10-11-a-quantitative-systems-pharmacology-model-of-human-leucine-metabolism/figures/fig_01.jpg)

![Model simulations compared to experimental data from infusion experiments in healthy human volunteers. Study type and reference are denoted in the title for each]({{ site.baseurl }}/assets/digests/2026-10-11-a-quantitative-systems-pharmacology-model-of-human-leucine-metabolism/figures/fig_02.jpg)

![Model simulations compared to data from oral administration experiments in healthy human volunteers. Experiments administered a bolus dose of 0.55 mmol/kg of eit]({{ site.baseurl }}/assets/digests/2026-10-11-a-quantitative-systems-pharmacology-model-of-human-leucine-metabolism/figures/fig_03.png)

![Model simulations compared to preclinically observed plasma reductions for leucine (Left) and KIC (Right) levels upon BDK inhibition. Data from administration of]({{ site.baseurl }}/assets/digests/2026-10-11-a-quantitative-systems-pharmacology-model-of-human-leucine-metabolism/figures/fig_04.jpg)