---
layout: post
title: "Autosomal Dominant Tubulointerstitial Kidney Disease Clinical Trial Simulator: Case Reports of Model-Informed Drug Development"
date: 2026-05-05
authors: "Shyam S. Ramesh et al."
journal: "CPT Pharmacometrics Syst Pharmacol. 2026;15:e70258"
doi: "10.1002/psp4.70258"
paper_type: popk
tags: [popk, regulatory, clinical-trial-design]
excerpt_text: "This paper presents a web-based clinical trial simulation tool for Autosomal Dominant Tubulointerstitial Kidney Disease (ADTKD) that uses nonlinear mixed-effects models of eGFR progression to optimize trial design. The tool enables virtual population simulation, scenario testing, and power estimation for both UMOD and MUC1 genetic subtypes. It should be read by clinical trial designers, pharmacometricians, and rare disease researchers seeking model-informed approaches for conditions with limited patient populations."
pdf_path: "/assets/digests/2026-05-05-autosomal-dominant-tubulointerstitial-kidney-disease-clinical-trial-simulator/PMx_Autosomal_Dominant_Tubulointerstitial_Ki_20260505.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a web-based clinical trial simulation tool for Autosomal Dominant Tubulointerstitial Kidney Disease (ADTKD) that uses nonlinear mixed-effects models of eGFR progression to optimize trial design. The tool enables virtual population simulation, scenario testing, and power estimation for both UMOD and MUC1 genetic subtypes. It should be read by clinical trial designers, pharmacometricians, and rare disease researchers seeking model-informed approaches for conditions with limited patient populations.

---

### Executive Summary
The study addresses a critical bottleneck in rare disease drug development: designing feasible clinical trials for Autosomal Dominant Tubulointerstitial Kidney Disease (ADTKD) given small, heterogeneous patient populations and uncertain endpoints. By developing nonlinear mixed-effects models of eGFR decline from natural history data and integrating them into an R Shiny-based clinical trial simulation (CTS) tool, the authors provide a practical framework for optimizing trial design. The tool allows users to define eligibility criteria, simulate virtual populations, assess statistical power under various scenarios, and evaluate the impact of assumed treatment effects on key disease progression parameters ($DPT_{50}$, $\gamma_1$, $\gamma_2$). Two case studies demonstrate how the tool can guide enrichment strategies and trial duration decisions, ultimately supporting efficient, cost-effective planning for ADTKD trials and exemplifying model-informed drug development in rare kidney diseases.

---

### Scientific Context & Motivation
The scientific context centers on the difficulties of conducting clinical trials for rare monogenic kidney diseases like ADTKD. With no disease-modifying therapies currently available and transplantation as the only option upon kidney failure, there is an urgent need for therapeutic development. However, traditional trial design is hampered by small and geographically dispersed patient populations, heterogeneous disease progression rates (particularly variable age of kidney failure within families), and lack of consensus on optimal endpoints. While natural history data exist from longitudinal studies, leveraging this information for prospective trial design requires sophisticated quantitative approaches. The paper fills the knowledge gap by transforming natural history data into usable nonlinear mixed-effects models and embedding them in an accessible simulation platform. It challenges the paradigm of relying solely on empirical sample size calculations by demonstrating how model-informed approaches can explicitly account for genotype-specific disease mechanics (UMOD vs. MUC1) and enable virtual experimentation to de-risk trial design.

---

## ⚡ Methodological Snapshot
The researchers developed nonlinear mixed-effects (NLME) models to characterize longitudinal eGFR decline in ADTKD patients with UMOD and MUC1 mutations, using data from the Wake Forest School of Medicine natural history study. The models identified $DPT_{50}$ (age at which eGFR reaches half of its maximum decline), $\gamma_1$ (eGFR decline rate before $DPT_{50}$), and $\gamma_2$ (eGFR decline rate after $DPT_{50}$) as key parameters describing individual-level trajectories, with baseline age and baseline eGFR as significant covariates. Parameters were estimated using the Stochastic Approximation Expectation–Maximization (SAEM) algorithm in MonolixSuite, with combined proportional and additive error models to capture residual variability. To overcome limitations in real-world sample sizes for specific trial eligibility criteria, the team generated synthetic virtual populations using conditional inference tree (ctree-based) data synthesis, which preserves the statistical properties and correlations of the original dataset while ensuring patient confidentiality. The clinical trial simulation (CTS) tool was built in R Shiny, integrating the NLME models via lixoftConnectors and RsSimulx packages, with synthpop used for virtual population generation. The tool's interface allows users to select patient populations based on criteria like age, eGFR, and genetic variants; configure trial design elements (sample size, duration, assessment frequency); apply assumed treatment effects as percentage changes to model parameters; and evaluate outcomes using simulated placebo versus treatment trajectories and power calculations for slope-based (eGFR change from baseline) and endpoint-based (last eGFR) metrics.

---

## 🏗️ Structural Model Breakdown
The disease progression model underlying the CTS tool is a piecewise linear model describing individual eGFR trajectory as a function of age. It consists of two phases with distinct decline rates, changing at the inflection point $DPT_{50}$. Mathematically, the model is defined as:
$eGFR(t) = E_0 - \gamma_1 \cdot \min(t, DPT_{50}) - \gamma_2 \cdot \max(t - DPT_{50}, 0)$
where:
- $eGFR(t)$ is the estimated glomerular filtration rate at age $t$
- $E_0$ is the baseline eGFR (at age 0, though in practice referenced to study entry age)
- $\gamma_1$ is the eGFR decline rate (mL/min/1.73 m²/year) before age $DPT_{50}$
- $\gamma_2$ is the eGFR decline rate (mL/min/1.73 m²/year) after age $DPT_{50}$
- $DPT_{50}$ is the age (years) at which eGFR reaches half of its maximum decline from baseline

The model ensures continuity at $t = DPT_{50}$, where $eGFR(DPT_{50}) = E_0/2$ by construction, as implied by the definition of $DPT_{50}$. In the NLME framework, $E_0$, $\gamma_1$, $\gamma_2$, and $DPT_{50}$ are treated as population-level fixed effects with inter-individual variability modeled as log-normal random effects. Baseline age and baseline eGFR were identified as significant covariates influencing these parameters, though the specific covariate models are not detailed in the excerpt.

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonlinear mixed-effects (NLME) models were developed using MonolixSuite to characterize eGFR decline in ADTKD-UMOD and ADTKD-MUC1 subpopulations. The structural model employed a piecewise linear function with parameters $DPT_{50}$, $\gamma_1$, and $\gamma_2$ to capture changing eGFR decline rates before and after the age of half-maximum decline. Inter-individual variability was assumed to follow log-normal distributions, and residual variability was modeled using combined proportional and additive error components. The R Shiny-based clinical trial simulation (CTS) tool integrated these models via lixoftConnectors and RsSimulx to enable virtual trial simulations.

#### Data Sources
Longitudinal individual-level eGFR data were obtained from the Wake Forest University School of Medicine natural history study (WFUHS IRB0000352) for patients with genetically confirmed ADTKD-UMOD ($n=371$) and ADTKD-MUC1 ($n=233$). eGFR was calculated using the 2009 CKD-EPI equation to ensure consistency across measurements. Synthetic virtual populations were generated using ctree-based data synthesis to expand eligible subgroups meeting specific trial criteria (e.g., age 18-40 years, eGFR 10-45 mL/min/1.73 m²), preserving covariate distributions and correlations from the real data while maintaining confidentiality.

#### Estimation Methods
Population parameters were estimated using the Stochastic Approximation Expectation–Maximization (SAEM) algorithm to obtain maximum likelihood estimates, implemented in MonolixSuite. Standard errors were computed via the Fisher Information Matrix. Individual empirical Bayes estimates were derived for simulation purposes. The SAEM algorithm was chosen for its robustness in handling complex NLME models with potential convergence issues.

#### Model Evaluation
Model performance was assessed using a visual predictive check (VPC) approach with a hold-out test dataset, demonstrating adequate predictive accuracy for eGFR trajectories across both genetic subtypes. Additional evaluation included comparison of observed versus population-predicted medians and percentiles. For the CTS tool, simulation outputs were validated by comparing virtual population characteristics to real-world data through Pearson correlation coefficients of continuous covariates, confirming preservation of statistical properties.

#### Covariate Analysis
Covariate relationships were systematically evaluated using a stepwise approach: forward inclusion based on likelihood ratio testing ($p<0.01$) followed by backward elimination ($p<0.001$). Baseline age and baseline eGFR were confirmed as significant predictors of $DPT_{50}$, $\gamma_1$, and $\gamma_2$ parameters, with older baseline age associated with accelerated decline (higher $\gamma_1$, $\gamma_2$) and lower baseline eGFR correlating with reduced $DPT_{50}$. The analysis preserved clinical interpretability by avoiding overparameterization and focusing on biologically plausible relationships.

---

### Statistical Rigor Assessment
The methodological approach demonstrates strong statistical rigor appropriate for the research objectives. The use of SAEM estimation in MonolixSuite is well-suited for NLME models with potential identifiability challenges, providing reliable maximum likelihood estimates even with moderate sample sizes ($n=371$ for UMOD, $n=233$ for MUC1). The combined proportional-additive error model adequately captures heteroscedasticity typical in longitudinal eGFR data. While the paper does not explicitly detail missing data handling, NLME frameworks inherently accommodate unbalanced designs and intermittent missingness under the missing-at-random assumption. The generation of synthetic populations via ctree-based methods introduces a potential source of bias if the conditional inference trees do not fully capture complex dependencies; however, validation via Pearson correlation analysis mitigates this concern. Sensitivity analyses are not described in the excerpt, but the presentation of multiple scenario analyses (varying duration, assessment intervals, enrichment strategies) serves an analogous purpose by assessing robustness of conclusions across design choices. The use of visual predictive checks and covariance diagnostics further supports model validity.

---

## 📊 Key Findings
The primary finding is the successful development and validation of a web-based clinical trial simulation (CTS) tool for ADTKD that enables quantitative, model-informed trial design. Key insights include: (1) Disease progression is adequately captured by three interpretable parameters—$DPT_{50}$, $\gamma_1$, and $\gamma_2$—with baseline age and baseline eGFR as significant covariates; (2) Both slope-based eGFR change (Metric 1) and end-of-trial eGFR (Metric 2) serve as valid surrogate endpoints for detecting treatment effects in simulated trials; (3) Statistical power is highly dependent on enrichment strategies, with trials targeting moderate-to-severe kidney dysfunction (eGFR 10-45 mL/min/1.73 m²) in younger adults (18-40 years) achieving 80% power over 3 years with quarterly assessments; (4) Genotype-specific considerations are critical, as UMOD trials benefit most from early intervention effects on $DPT_{50}$ and $\gamma_1$, while MUC1 trials require greater impact on $\gamma_2$ to slow late-stage progression. In Case Study 1, power exceeded 90% for MUC1 when enriching by eGFR category and extending follow-up to 3 years. In Case Study 2, focusing on high-risk patients (age 18-40, eGFR 10-45) yielded 80% power for both subtypes with assumed treatment effects of $12\% \uparrow DPT_{50} + 45\% \downarrow \gamma_1$ for UMOD and $6\% \uparrow DPT_{50} + 50\% \downarrow \gamma_2$ for MUC1 over 3 years.

---

## 💡 Clinical & Regulatory Implications
The CTS tool has direct implications for clinical trial design in rare kidney diseases. It enables precision enrichment strategies by identifying patient subgroups most likely to demonstrate treatment effects (e.g., younger ADTKD patients with moderate eGFR impairment), thereby reducing required sample sizes and trial duration. For UMOD-associated ADTKD, the model suggests that therapies targeting early decline (modifying $DPT_{50}$ and $\gamma_1$) may be more effective, whereas MUC1-associated ADTKD may require interventions that specifically slow late-stage progression (affecting $\gamma_2$). The tool supports regulatory interactions by providing a quantitative framework to justify design choices to agencies like the FDA and EMA, aligning with their encouragement of model-informed drug development. While no specific dosing recommendations emerge from this simulation platform, it can inform dose selection by simulating exposure-response relationships if pharmacokinetic data were integrated. Importantly, the tool underscores the necessity of subtype-specific approaches in ADTKD, cautioning against pan-ADTKD trials that may dilute treatment effects due to heterogeneous pathophysiology.

---

### Strengths & Limitations

#### Strengths
- Innovative integration of natural history data into an accessible, interactive simulation platform
- Mechanistic model structure with clinically interpretable parameters ($DPT_{50}$, $\gamma_1$, $\gamma_2$)
- Comprehensive validation through visual predictive checks and synthetic population fidelity
- Practical utility demonstrated via two detailed case studies reflecting real-world design dilemmas
- Explicit handling of genetic heterogeneity (UMOD vs. MUC1) enabling precision trial design
- Alignment with regulatory science trends toward model-informed approaches

#### Limitations (Acknowledged by Authors)
- Reliance on historical eGFR data using the 2009 CKD-EPI equation, which may not reflect current clinical practice favoring the 2021 equation
- Limited data on UMOD promoter region SNPs, restricting covariate exploration for this genetic modifier
- Inherent uncertainty in simulating treatment effects without empirical drug data
- The alternative endpoint (last eGFR) requires further validation before adoption in actual trials
- Dependence on the accuracy of the underlying NLME models, which may not capture all disease complexity

#### Limitations (Expert Review)
- The piecewise linear model may oversimplify the true nonlinear trajectory of eGFR decline in CKD
- No explicit assessment of parameter identifiability or correlation between $DPT_{50}$, $\gamma_1$, and $\gamma_2$ estimates
- Virtual population generation, while preserving correlations, may not fully represent higher-order dependencies or rare subpopulations
- The tool currently does not incorporate pharmacokinetic/pharmacodynamic (PK/PD) linkages, limiting its use for dose-finding simulations
- Lack of prospective validation comparing simulated power to actual trial outcomes in ADTKD

#### Generalizability
The findings are moderately generalizable to other rare progressive kidney diseases with available natural history data and identifiable progression biomarkers. The core methodology—developing disease progression models from longitudinal data, building virtual populations, and creating scenario-testing simulation tools—is broadly applicable. However, the specific model structure (piecewise linear eGFR decline) and parameter interpretations ($DPT_{50}$, $\gamma_1$, $\gamma_2$) are tailored to ADTKD's biology and would require adaptation for other conditions. The greatest generalization potential lies in the framework itself rather than the disease-specific parameters.

---

### Key Equations

**Piecewise Linear eGFR Decline Model**

{% raw %}
$$
eGFR(t) = E0 - \gamma_1 \cdot \min(t, DPT50) - \gamma_2 \cdot \max(t - DPT50, 0)
$$
{% endraw %}

Describes individual-level eGFR trajectory as a function of age, with two distinct decline rates before and after the inflection point DPT50, where eGFR(DPT50) = E0/2 by definition of DPT50 as the age at which eGFR reaches half of its maximum decline from baseline.

---

### Figures & Tables

- **Figure 1**: Shows the Criteria Selection interface for defining eligible populations by baseline age, baseline eGFR, and (for UMOD) SNP rs4293393 allele frequency, along with outputs including patient counts, scatterplot (baseline age vs. baseline eGFR), and allele distribution pie chart.
  - *Significance*: Demonstrates the tool's ability to filter and characterize virtual populations based on key eligibility criteria, enabling precise enrichment strategies for trial design.
- **Figure 2**: Illustrates the Trial Design tab where users configure sample size, trial duration, and assessment intervals (2a), apply assumed drug effects as percentage changes in $DPT_{50}$, $\gamma_1$, and $\gamma_2$ (2b), and view outputs including simulated eGFR trajectories for placebo vs. treatment and power calculations for Metric 1 (eGFR change from baseline) and Metric 2 (last eGFR) (2c).
  - *Significance*: Highlights the core functionality of the CTS tool: integrating trial design parameters with assumed treatment effects to simulate outcomes and estimate statistical power under various scenarios.
- **Figure S3c**: Represents an example power curve output for UMOD, showing how statistical power changes with sample size and trial duration.
  - *Significance*: Provides visual guidance for go/no-go decisions by identifying efficient combinations of sample size and duration that achieve target power (e.g., 80% or 90%).
- **Figure S5c**: Shows simulated placebo and treatment eGFR trajectories and power for Metric 1 (eGFR change from baseline) and Metric 2 (last eGFR) for MUC1-specific simulations.
  - *Significance*: Demonstrates the tool's applicability to both genetic subtypes and its ability to compare surrogate endpoints for treatment effect detection.
- **Table 1**: Defines KDIGO eGFR categories (G1: >90, G2: 60-89, G3a: 45-59, G3b: 30-44, G4+: 10-29 mL/min/1.73 m²) with corresponding clinical terminology.
  - *Significance*: Standardizes eligibility criteria using a widely adopted clinical framework, ensuring alignment with nephrology practice and facilitating cross-study comparisons.
- **Table 2**: Lists CKD trial precedents (e.g., Lisinopril, Dapagliflozin, Empagliflozin) with their age ranges, trial durations, assessment intervals, and eGFR ranges used to inform expert opinions on high-risk patient enrichment.
  - *Significance*: Grounds simulation scenarios in real-world clinical trial designs, enhancing the relevance and translatability of the tool's outputs to actual study planning.

---

### Code & Reproducibility Assessment
The web-based tool is publicly accessible at https://app.cop.ufl.edu/adtkd/, but the source code and underlying data are not explicitly stated to be available in a public repository, limiting full reproducibility.

---

### Future Directions
Future work should expand the CTS tool to include the remaining ADTKD-associated genes (HNF1β and REN) through initial model development and integration into the existing framework. Validation of the alternative endpoint (last eGFR) against conventional slope-based metrics is needed before regulatory incorporation. Prospective validation comparing simulated power to actual trial outcomes in ADTKD would strengthen the tool's credibility. Incorporating pharmacokinetic/pharmacodynamic (PK/PD) linkages would enable dose-finding simulations, and integrating more granular genetic data (e.g., UMOD promoter SNPs) could refine covariate analysis. Finally, extending the modeling framework to capture more complex, nonlinear eGFR trajectories would improve biological fidelity.

---

### Expert Commentary
As a senior pharmacometrician, I view this work as an excellent example of applying model-informed drug development principles to a rare disease setting where traditional trial approaches are infeasible. The authors successfully transformed sparse natural history data into a mechanistic simulation platform that directly addresses key barriers in rare disease drug development: small population sizes, heterogeneous progression, and endpoint uncertainty. What distinguishes this work is the focus on clinically interpretable model parameters ($DPT_{50}$, $\gamma_1$, $\gamma_2$) that map directly to biological understanding of the disease, rather than black-box predictions. The tool's strength lies in its ability to facilitate 'what-if' scenario testing—allowing teams to explore how enrichment strategies, trial duration, and assessment frequency impact power before committing resources. However, as with any simulation-based approach, the validity hinges on the accuracy of the underlying disease model. The piecewise linear assumption, while useful for simplicity, may not capture the true complexity of eGFR decline in CKD, which often exhibits more nonlinear patterns. Future iterations would benefit from linking this model to PK/PD relationships to enable dose selection simulations and from incorporating longitudinal biomarker data beyond eGFR. Nevertheless, this work establishes a valuable template for other rare progressive diseases seeking to leverage modeling for efficient trial design.

---

### Bottom Line
For practicing pharmacometricians, this study demonstrates how to build a practical, decision-support tool from limited natural history data in a rare disease context. The key takeaway is that even with modest sample sizes ($n \approx 300$ per subtype), developing a mechanistic model with biologically interpretable parameters—here, $DPT_{50}$, $\gamma_1$, and $\gamma_2$—can enable powerful virtual experimentation to optimize trial design. By focusing on parameters that clinicians understand and can relate to potential drug mechanisms (e.g., 'Does this drug slow early decline or late decline?'), the simulation tool bridges the gap between quantitative modeling and clinical decision-making. The web-based implementation in R Shiny ensures accessibility for multidisciplinary teams, while the explicit handling of genetic subtypes (UMOD vs. MUC1) exemplifies precision medicine approaches. Ultimately, this work reinforces that in data-scarce environments, investing in quality model development yields greater returns than attempting to power traditional trials through brute-force enrollment, and that simulation should be viewed not as a replacement for clinical trials, but as a critical de-risking step in the drug development pathway.

---