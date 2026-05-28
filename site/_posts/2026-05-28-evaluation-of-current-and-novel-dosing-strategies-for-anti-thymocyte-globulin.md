---
layout: post
title: "Evaluation of Current and Novel Dosing Strategies for Anti-Thymocyte Globulin in Adult Allogeneic Hematopoietic Stem Cell Transplantation"
date: 2026-05-28
authors: "Bishop E, Reuter SE, Murphy TR, Slater PR"
journal: "Clinical Pharmacology & Therapeutics (inferred from study highlights format)"
doi: "N/A"
paper_type: popk
tags: [popk, covariate-analysis, regulatory]
excerpt_text: "This simulation study evaluates conventional weight-based and model-informed precision dosing (MIPD) strategies for anti-thymocyte globulin (ATG) in adult allogeneic hematopoietic stem cell transplantation. No conventional regimen achieved $>\\sim 25\\%$ target attainment, and MIPD with empirical Bayesian estimation improved attainment by $<\\sim 10\\%$ due to high shrinkage on clearance parameters. The findings suggest that current dosing is inadequate and that MIPD is unlikely to be clinically beneficial without better covariates to explain inter-individual variability."
pdf_path: "/assets/digests/2026-05-28-evaluation-of-current-and-novel-dosing-strategies-for-anti-thymocyte-globulin/PMx_Evaluation_of_Current_and_Novel_Dosing_S_20260528.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This simulation study evaluates conventional weight-based and model-informed precision dosing (MIPD) strategies for anti-thymocyte globulin (ATG) in adult allogeneic hematopoietic stem cell transplantation. No conventional regimen achieved $>\sim 25\%$ target attainment, and MIPD with empirical Bayesian estimation improved attainment by $<\sim 10\%$ due to high shrinkage on clearance parameters. The findings suggest that current dosing is inadequate and that MIPD is unlikely to be clinically beneficial without better covariates to explain inter-individual variability.

---

### Executive Summary
Using a published population pharmacokinetic model of active ATG, the authors simulated $10,000$ representative adult patients to assess the probability of target attainment (post-transplant $AUC$ $60–95$ AU·day/mL) for $10$ conventional weight-based regimens and $10$ MIPD regimens incorporating therapeutic drug monitoring and Bayesian forecasting. Conventional regimens with total doses of $4.5–5$ mg/kg performed best but still only achieved $\sim 25\%$ target attainment. MIPD regimens, which included sparse sampling over $5–7$ days and an optimized final dose, improved target attainment by at most $7\%$ (absolute), with the best scenario reaching $32\%$. The primary limitation was high $\eta$-shrinkage ($>30\%$) on linear clearance ($CL$), maximum elimination rate ($V_{max}$), and Michaelis constant ($K_m$), indicating that the data could not reliably estimate individual elimination parameters. The authors conclude that improving ATG target attainment via MIPD is unlikely to be of clinical benefit with the current model, and further research into covariates affecting ATG clearance is needed.

---

### Scientific Context & Motivation
Anti-thymocyte globulin (ATG) is a polyclonal antibody used for graft-versus-host disease prophylaxis in allogeneic hematopoietic stem cell transplantation. Dosing remains empirical and weight-based despite complex pharmacokinetics involving target-mediated drug disposition (TMDD), a long half-life ($15–30$ days for total ATG, $6–12$ days for active ATG), and a narrow therapeutic index. A post-transplant exposure target of $60–95$ AU·day/mL has been associated with improved overall survival in nonmyeloablative conditioning, but no standardized dosing regimen exists. This study addresses the knowledge gap of whether model-informed precision dosing (MIPD) using sparse sampling and Bayesian forecasting can improve target attainment compared to conventional weight-based dosing in a realistic clinical timeframe.

---

## ⚡ Methodological Snapshot
The study implemented a published two-compartment population PK model for active ATG (Admiraal et al.) in R using mrgsolve. An in silico population of $10,000$ adult patients was generated with weight (normal distribution, mean $75$ kg, SD $17.5$) and ALC (log-normal, median $0.2 \times 10^9/L$, SD $0.44$). Ten conventional weight-based regimens and ten MIPD regimens were simulated. For MIPD, sparse sampling schedules ($6–10$ samples over $5–7$ days) were used for empirical Bayesian estimation in NONMEM, followed by an R optimization function to find the Day $-1$ dose that minimized the difference between estimated $AUC$ and $75$ AU·day/mL. Target attainment was assessed as the proportion of patients with post-transplant $AUC$ ($AUC_{100d}$) within $60–95$ AU·day/mL.

---

## 🏗️ Structural Model Breakdown
The model is a two-compartment disposition model with central ($V_1$) and peripheral ($V_2$) volumes. Distribution to the peripheral compartment is saturable, described by a Michaelis–Menten process with maximum rate $T_m$ and Michaelis constant (not explicitly named but analogous to $K_m$ for distribution). Elimination from the central compartment occurs via two parallel pathways: first-order clearance ($CL$) and saturable (Michaelis–Menten) elimination with maximum rate $V_{max}$ and Michaelis constant $K_m$. The model includes inter-individual variability on $CL$, $V_1$, $T_m$, $V_{max}$, and $K_m$. Covariates: total body weight on $CL$ and $V_1$ (allometric scaling assumed), and ALC on $CL$ (linear effect). No covariance between parameters was included.

---

### Detailed Methodological Analysis

#### Modeling Approach
Two-compartment model with saturable distribution into the peripheral compartment and parallel first-order and saturable (Michaelis–Menten) elimination from the central compartment. Covariates: total body weight on $CL$ and $V_1$; ALC on $CL$. Implemented in R using mrgsolve for simulation and NONMEM 7.5.1 for Bayesian estimation.

#### Data Sources
In silico population of $10,000$ patients. Weight sampled from normal distribution ($75$ kg, SD $17.5$), ALC from log-normal distribution (median $0.2 \times 10^9/L$, SD $0.44$). $\eta$ values sampled from model-specified $\omega$ matrix. Residual unexplained variability incorporated via $\sigma$ error.

#### Estimation Methods
Empirical Bayesian estimation (POSTHOC) in NONMEM using the FOCE method with interaction. Individual PK parameters were estimated from simulated concentration-time data at prespecified sampling timepoints.

#### Model Evaluation
Target attainment assessed as proportion of patients with $AUC_{100d}$ within $60–95$ AU·day/mL. $\eta$-shrinkage calculated for each parameter. Post hoc analysis of intensive sampling scenarios (up to $64$ days) to determine required sampling duration for adequate estimation.

#### Covariate Analysis
Sensitivity analysis: weight and ALC were varied to assess impact on median $AUC$ and target attainment. Weight changes of $\pm 10$ kg changed median $AUC$ by $\sim 10$ AU·day/mL; ALC only affected exposure at values $> 2.0 \times 10^9/L$.

---

### Statistical Rigor Assessment
The simulation-based design is appropriate for evaluating dosing strategies. The sample size of $10,000$ per regimen provides precise estimates of PTA. Missing data was not an issue as simulations were complete. Sensitivity analyses on weight and ALC were performed. However, the study did not include uncertainty in the model parameters (e.g., bootstrap of original model estimates) or assess the impact of model misspecification. The high shrinkage observed indicates that the estimation method (FOCE) may not be optimal for this sparse data scenario; alternative methods (e.g., SAEM or Bayesian MCMC) were not explored.

---

## 📊 Key Findings
1) No conventional weight-based ATG regimen achieved $> 25\%$ probability of target attainment (PTA) for the $60–95$ AU·day/mL range; regimens with total doses of $4.5–5$ mg/kg had the highest PTA ($\sim 25\%$). 2) MIPD regimens improved PTA by $< 10\%$ absolute (maximum $32\%$ for a regimen with $0.5$ mg/kg on Day $-7$ and $10$ samples over $5$ days). 3) High $\eta$-shrinkage ($> 30\%$) was observed for $CL$, $V_{max}$, and $K_m$ in most MIPD scenarios, indicating poor estimation of individual elimination parameters. 4) Lower upfront doses improved estimation of nonlinear elimination ($V_{max}$, $K_m$) but worsened estimation of linear clearance ($CL$). 5) Intensive sampling for $> 8$ days was required to achieve $> 50\%$ PTA, which is clinically impractical. 6) Weight and absolute lymphocyte count (ALC) had minimal impact on target attainment except at extreme values.

---

## 💡 Clinical & Regulatory Implications
The study suggests that current weight-based ATG dosing is suboptimal and that MIPD with the existing model is unlikely to improve outcomes. Clinicians should be aware that most patients will not achieve the therapeutic exposure target. Until better covariates are identified, dosing should remain empirical, but consideration of ideal body weight for obese patients may be warranted. The findings support the use of alternative GVHD prophylaxis strategies (e.g., PTCY) in settings where ATG cannot be optimized.

---

### Strengths & Limitations

#### Strengths
- Comprehensive evaluation of $10$ conventional and $10$ MIPD regimens using a validated population PK model
- Large in silico population ($10,000$ patients) with realistic covariate distributions
- Systematic assessment of $\eta$-shrinkage and its impact on Bayesian estimation
- Clinically relevant sampling schedules and dosing timelines
- Transparent reporting of limitations and implications for practice

#### Limitations (Acknowledged by Authors)
- Therapeutic range ($60–95$ AU·day/mL) validated only in nonmyeloablative conditioning; may not apply to other populations
- Model may not include all relevant covariates (e.g., graft CD4+ count, albumin, anti-ATG antibodies)
- Sampling schedules were constrained to clinically feasible windows (max $7$ days)
- No covariance between PK parameters was included in the model
- Findings are specific to Thymoglobulin brand ATG

#### Limitations (Expert Review)
- The model was not externally validated in the simulated population; parameter estimates and variability were taken from the original publication without re-estimation
- The assumption of log-normally distributed ALC with low median may not capture all clinical scenarios (e.g., patients with higher pre-conditioning ALC)
- The MIPD optimization targeted the midpoint of the therapeutic range ($75$ AU·day/mL), which may not be optimal for all patients
- No sensitivity analysis on the impact of residual unexplained variability ($\sigma$) on Bayesian estimation
- The study did not evaluate alternative model structures (e.g., including a covariance matrix or different TMDD parameterization)

#### Generalizability
The results are most applicable to adult patients receiving Thymoglobulin ATG with nonmyeloablative conditioning for unrelated donor allo-HSCT. Generalizability to other ATG formulations (e.g., Grafalon), conditioning intensities, donor sources (e.g., haploidentical), or pediatric populations is limited. The high shrinkage findings are likely model-dependent and may differ with other PK models.

---

---

### Figures & Tables

- **Figure 1**: Schematic representation of the two-compartment population PK model for ATG with saturable distribution and parallel first-order and saturable elimination.
  - *Significance*: Illustrates the model structure used for all simulations, including covariates (weight on $CL$ and $V_1$, ALC on $CL$).
- **Figure 2**: Probability of target attainment (PTA) for conventional ATG dosing regimens, stratified by exposure categories (subtherapeutic, therapeutic, supratherapeutic).
  - *Significance*: Shows that no conventional regimen achieves $> 25\%$ PTA, with most patients either under- or overdosed.
- **Figure 3**: Box and whisker plot of post-transplant $AUC$ for conventional regimens, with median and interquartile range.
  - *Significance*: Demonstrates that while median $AUC$ may fall within the therapeutic range for some regimens, variability is high, leading to low PTA.
- **Figure 4**: PTA for MIPD dose-optimized regimens, showing modest improvements over conventional dosing.
  - *Significance*: Illustrates that even with Bayesian estimation and optimization, PTA remains below $32\%$, confirming limited benefit of MIPD.
- **Figure 5**: Comparison of PK parameter distributions ($\eta$s) between model-defined (true) and Bayesian-estimated values for the best MIPD regimen.
  - *Significance*: Visually demonstrates shrinkage: estimated $\eta$s for $CL$, $V_{max}$, and $K_m$ are pulled toward zero, indicating poor individualization.
- **Table 1**: List of conventional and MIPD dosing regimens evaluated, including doses per day and total dose.
  - *Significance*: Provides the full set of regimens tested, allowing readers to understand the scope of the simulation.
- **Table 2**: $\eta$-shrinkage percentages for each PK parameter across MIPD regimens, with shading for severity.
  - *Significance*: Quantifies the poor estimation of $CL$, $V_{max}$, and $K_m$ (shrinkage $> 30\%$ in most regimens), explaining why MIPD failed.

---

### Code & Reproducibility Assessment
Available from corresponding author on request

---

### Supplementary Materials
Supplementary materials include Figure S1 (concentration-time profiles and cumulative $AUC$ for conventional regimens), Figure S2 (effect of weight on $AUC$), Figure S3 (effect of ALC on $AUC$), and Figure S4 (PTA vs. sampling duration for intensive sampling scenarios). These figures support the main findings on covariate effects and the need for prolonged sampling.

---

### Future Directions
Future research should focus on identifying novel covariates for ATG clearance, such as graft CD4+ count, serum albumin, IgG levels, anti-ATG antibodies, and genetic polymorphisms affecting lymphocyte elimination. Alternative model structures (e.g., including parameter covariance) or non-model-based optimization approaches could be explored. Prospective clinical validation of the therapeutic range in different conditioning regimens and donor sources is needed. Earlier administration of a test dose (e.g., Day $-14$) to allow longer sampling may improve Bayesian estimation but requires feasibility assessment.

---

### Expert Commentary
This study is a sobering reminder that not all drugs are amenable to MIPD, even when a published PK model exists. The high shrinkage on elimination parameters ($CL$, $V_{max}$, $K_m$) is a classic sign that the sampling schedule does not contain enough information to separate linear from nonlinear clearance—a challenge for drugs with TMDD and long half-lives. The authors correctly note that increasing sampling duration (not just frequency) is key, but this conflicts with clinical workflows. The take-home message for pharmacometricians is that model complexity must be matched by data informativeness; otherwise, Bayesian estimates collapse to the population mean. This work also highlights the value of simulation-based trial design to avoid futile TDM studies.

---

### Bottom Line
Current weight-based ATG dosing fails to achieve therapeutic exposure in the majority of patients, and model-informed precision dosing using the existing population PK model cannot overcome this due to high shrinkage on key elimination parameters. Until additional covariates explaining inter-individual variability in ATG clearance are identified and incorporated, dose individualization is unlikely to improve clinical outcomes. This study underscores the importance of evaluating MIPD feasibility in silico before committing to costly clinical TDM studies.

---

---

## 📊 Figures

![Probability of target attainment (PTA, %) of conventional ATG dosing regimens, based on a representative in silico population of 10,000 individuals per regimen a]({{ site.baseurl }}/assets/digests/2026-05-28-evaluation-of-current-and-novel-dosing-strategies-for-anti-thymocyte-globulin/figures/fig_01.png)

![Box and whisker plot illustrating post-transplant AUC of conventional dosing regimens. Outliers have been removed from the plot to assist with readability. Dotte]({{ site.baseurl }}/assets/digests/2026-05-28-evaluation-of-current-and-novel-dosing-strategies-for-anti-thymocyte-globulin/figures/fig_02.png)

![Probability of target attainment (PTA, %) of the MIPD dose optimized regimens assessed, based on a representative in silico population of 10,000 individuals per]({{ site.baseurl }}/assets/digests/2026-05-28-evaluation-of-current-and-novel-dosing-strategies-for-anti-thymocyte-globulin/figures/fig_03.png)

![Comparison of pharmacokinetic parameter distributions between model defined and Bayesian prediction for the best performing MIPD regimen. Model distributions (re]({{ site.baseurl }}/assets/digests/2026-05-28-evaluation-of-current-and-novel-dosing-strategies-for-anti-thymocyte-globulin/figures/fig_04.png)