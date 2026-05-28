---
layout: post
title: "Model-Informed Dosing Regimen of Sugemalimab for European Patients With Non-Small Cell Lung Cancer: Bridging From Asian Clinical Data"
date: 2026-05-26
authors: "Sheng Y, Yue Z, Xu F, Wang J, Shi Q, Wang K"
journal: "Clinical Pharmacology & Therapeutics, 2025"
doi: "N/A"
paper_type: popk
tags: [popk, dose-response, oncology, regulatory]
excerpt_text: "This paper demonstrates a model-informed drug development (MIDD) strategy to bridge sugemalimab dosing from Asian to European NSCLC patients. Using a validated popPK model and exposure-response simulations, the authors identified that patients $>115$ kg require a dose increase from $1200$ mg to $1500$ mg Q3W to match pivotal trial exposures. The analysis was accepted by EMA and MHRA for regulatory approval without additional trials—a landmark example of using pharmacometrics for global dose bridging."
pdf_path: "/assets/digests/2026-05-26-model-informed-dosing-regimen-of-sugemalimab-for-european-patients-with-non/PMx_ModelInformed_Dosing_Regimen_of_Sugemali_20260526.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper demonstrates a model-informed drug development (MIDD) strategy to bridge sugemalimab dosing from Asian to European NSCLC patients. Using a validated popPK model and exposure-response simulations, the authors identified that patients $>115$ kg require a dose increase from $1200$ mg to $1500$ mg Q3W to match pivotal trial exposures. The analysis was accepted by EMA and MHRA for regulatory approval without additional trials—a landmark example of using pharmacometrics for global dose bridging.

---

### Executive Summary
This study employed a rigorous MIDD framework to determine whether the fixed-dose regimen of sugemalimab $1200$ mg Q3W, approved in China based on an all-Asian pivotal trial, provides adequate exposure in European NSCLC patients who generally have higher body weights. A popPK model built from $1002$ subjects ($97.6\%$ Asian) across six trials was externally validated using data from a higher-dose regimen ($1800$ mg Q4W). PK simulations for patients weighing $80–150$ kg under three dosing scenarios ($1200, 1500, 1800$ mg Q3W) were compared to exposures from the GEMSTONE-302 study. The analysis demonstrated that $1200$ mg Q3W maintained adequate exposure up to $115$ kg, but patients $115–150$ kg required $1500$ mg Q3W to achieve comparable $C_{trough}$, $AUC$, and $C_{max}$. Exposure-response models for PFS and OS confirmed that the proposed weight-based adjustment produces survival probabilities overlapping with those from Asian patients. Notably, the MIDD approach directly led to regulatory approvals by the EMA and MHRA without additional clinical trials, highlighting growing regulatory confidence in pharmacometric bridging strategies for ethnically insensitive biologics.

---

### Scientific Context & Motivation
Monoclonal antibodies like sugemalimab are known to have linear PK, low ethnic sensitivity, and elimination primarily via non-specific proteolytic catabolism, which supports the ICH E5/E17 framework for using foreign clinical data. However, body weight significantly impacts monoclonal antibody clearance, and European patients have substantially higher average body weights ($\sim 70$ kg for females, $\sim 80$ kg for males) compared to the Asian pivotal study population (mean $\sim 62$ kg, range $41–96$ kg). The key knowledge gap addressed was whether the approved $1200$ mg Q3W fixed dose, which was studied almost exclusively in Asian patients, provides clinically adequate exposure in heavier European patients, and if not, what alternative dose and body weight threshold would restore comparable exposure and efficacy. This work challenges the one-size-fits-all assumption of fixed dosing for PD-L1 inhibitors and provides a quantitative framework for ethnic bridging that goes beyond traditional population PK comparisons by incorporating exposure-response modeling for efficacy endpoints.

---

## ⚡ Methodological Snapshot
The popPK model for sugemalimab was developed from $1002$ subjects ($97.6\%$ Asian) across six clinical trials. The model structure is a two-compartment model with time-varying clearance, including body weight as a covariate on $CL_0$ and $V_c$. External validation was performed using data from $13$ Asian patients receiving $1800$ mg Q4W, evaluated via prediction error metrics and VPC. For dose bridging, individual EBEs from the model were used to simulate PK profiles for virtual patients with body weights uniformly sampled from $80–150$ kg ($14$ strata). Three dose levels ($1200, 1500, 1800$ mg Q3W) were compared to reference exposures from GEMSTONE-302 using $90\% CI$ of $GMR$ with $80–125\%$ acceptance bounds. Exposure-response models for PFS (modified Gompertz) and OS (exponential hazard) were developed from GEMSTONE-302 data, using $C_{trough}$ from Cycle $1$ as the exposure metric. Survival simulations incorporated both between-subject variability in exposure and parameter uncertainty.

---

## 🏗️ Structural Model Breakdown
The popPK model is a two-compartment model with time-varying clearance. The structural model includes: central compartment ($V_c$), peripheral compartment ($V_p$), intercompartmental clearance ($Q$), baseline clearance ($CL_0$), and clearance decay rate ($K_{des}$). Time-varying $CL$ is modeled as $CL(t) = CL_0 \cdot \exp(-K_{des} \cdot t)$. Body weight influences $CL_0$ and $V_c$ through allometric power relationships. The model includes inter-individual variability (IIV) on $CL_0, V_c, V_p, Q, \text{ and } K_{des}$, and inter-occasion variability (IOV) on $CL$. Residual variability is modeled as proportional plus additive error.

---

### Detailed Methodological Analysis

#### Modeling Approach
Two-compartment population PK model with time-varying clearance (exponential decay), estimated using NONMEM. Covariates included body weight on $CL_0$ and $V_c$. Exposure-response models: modified Gompertz for PFS, exponential hazard for OS. All software: NONMEM $7.5.0$, PsN $5.3.1$, R $4.4$ with mrgsolve.

#### Data Sources
Six clinical trials ($2$ Phase I, $2$ Phase II, $2$ Phase III) totaling $1002$ subjects ($97.6\%$ Asian, $97.5\%$ receiving $1200$ mg Q3W). External validation: $13$ Asian CRC patients receiving $1800$ mg Q4W ($146$ PK samples). GEMSTONE-302: $320$ NSCLC patients for ER modeling. Exposure-safety: $842$ patients from $4$ studies.

#### Estimation Methods
NONMEM with FOCE (First-Order Conditional Estimation) method for popPK model. Post hoc EBEs for individual parameters. Sensitivity analysis using $\eta$-sampling from conditional distributions.

#### Model Evaluation
External validation using prediction error metrics ($MPE, MAPE, F_{20}, F_{30}$), goodness-of-fit plots, and VPC. Reference-corrected VPC for extrapolation to overweight patients. ER models evaluated using VPC (Figure S3).

#### Covariate Analysis
Body weight was the primary covariate of interest, included on $CL_0$ and $V_c$ with power exponents estimated from data. Other covariates (not specified in detail) were evaluated but found not clinically meaningful in the original model development. For simulations, only body weight was varied; other covariates were sampled with replacement from GEMSTONE-302 subjects.

---

### Statistical Rigor Assessment
The analysis demonstrates appropriate statistical methods overall. The external validation metrics ($MPE, MAPE, F_{20}, F_{30}$) follow established acceptance criteria from the literature. The $GMR$-based approach with $90\% CIs$ is statistically rigorous and aligns with bioequivalence principles. Sensitivity analyses addressing $\eta$-shrinkage by comparing EBE-based and $\eta$-sampling methods show robustness. The exposure-response models incorporate parameter uncertainty via sampling from the asymptotic variance-covariance matrix. Limitations include the small external validation sample ($n=13$), the single-dose-level ER model, and potential OS bias from crossover. The uniform weight distribution for simulation is not the true European distribution but was justified for exploring the full weight range. Missing data handling is not explicitly discussed but is less relevant as the simulation-based analysis uses complete simulated datasets.

---

## 📊 Key Findings
The popPK model was successfully externally validated using $146$ PK samples from $13$ patients receiving $1800$ mg Q4W, with acceptable prediction error metrics ($MPE -7.84\%$ for $PRED, MAPE 17.14\%, F_{20} 80.14\%$). PK simulations revealed that the $1200$ mg Q3W dose maintains adequate exposure ($90\% CI$ of $GMR >0.80$ for $C_{trough}, C_{max}, \text{ and } AUC$) for patients up to $115$ kg, with $>89\%$ of patients exceeding the clinical reference $C_{trough}$ of $42.6$ $\mu g/mL$. For patients weighing $115–150$ kg, $C_{trough} GMR$ fell to $0.81–0.70$, indicating significant under-exposure. The $1500$ mg Q3W dose for this subgroup restored $C_{trough} GMR$ to $1.01–0.88$, with all $GMR$ $90\% CIs$ within $80\%–125\%$. The $1800$ mg dose produced excessive exposure ($GMR >1.25$) for most weight strata below $135$ kg. Efficacy simulations showed that the proposed regimen ($\le 115$ kg: $1200$ mg; $>115$ kg: $1500$ mg Q3W) produced survival probabilities similar to Asian patients, with median differences at $12$ months of only $4.2\%$ (PFS-investigator), $5.8\%$ (PFS-BICR), and $8.6\%$ (OS). Importantly, no exposure-safety relationship was identified across a wide dose range ($3–40$ mg/kg Q3W).

---

## 💡 Clinical & Regulatory Implications
The study provides clear dosing recommendations: European NSCLC patients weighing $\le 115$ kg should receive sugemalimab $1200$ mg Q3W, while those $>115$ kg should receive $1500$ mg Q3W. This weight-based threshold is practical for clinical implementation and is expected to maintain comparable efficacy to that observed in the pivotal Asian trial. Importantly, safety is projected to be similar as the $25\%$ increase in $C_{max}$ is within accepted bounds for PD-(L)1 class antibodies and no exposure-safety relationship was identified. The MIDD framework directly supported regulatory approvals by EMA (July 2024) and MHRA (October 2024) without requiring additional clinical trials, demonstrating significant cost and time savings. For special populations, the analysis suggests that weight (not ethnicity per se) is the key determinant of appropriate dosing, consistent with ICH E5/E17 principles.

---

### Strengths & Limitations

#### Strengths
- Comprehensive MIDD framework integrating popPK, external validation, PK simulation, and exposure-response modeling for both efficacy and safety
- External validation of the popPK model using a different dosing regimen ($1800$ mg Q4W), demonstrating robustness for extrapolation beyond the model-building dose range
- Rigorous dose-adjustment criteria adapted from FDA PD-(L)1 alternative dosing guidance, including both central tendency and variability via $90\% CI$ of $GMR$
- Sensitivity analyses addressing $\eta$-shrinkage by comparing EBE-based and $\eta$-sampling simulation approaches, showing consistent results
- Use of Cycle $1$ exposure metrics to avoid response-driven confounding in exposure-response analyses
- Successful translation to regulatory approval (EMA and MHRA), providing real-world validation of the approach

#### Limitations (Acknowledged by Authors)
- Only $75$ subjects ($7.5\%$) in the model-building dataset weighed $\ge 80$ kg, limiting direct inference for heavy patients
- High $\eta$-shrinkage for $K_{des}, CL_T, \text{ and } V_p$ ($39.5\%–49.6\%$) may attenuate variability in simulated exposures
- ER model was developed from a single dose level ($1200$ mg Q3W), limiting ability to reliably quantify the exposure-efficacy relationship for extrapolation
- OS model may be biased due to crossover of $45$ placebo patients receiving sugemalimab after progression
- No relationship identified between exposure and safety, which precluded formal safety modeling for the proposed dose
- Only Cycle $1$ exposures were evaluated; steady-state $C_{max}$ was not assessed per FDA guidance

#### Limitations (Expert Review)
- The external validation dataset comprised only $13$ Asian patients; a more ethnically diverse external dataset would strengthen the extrapolation claim
- The reference $C_{trough}$ threshold ($42.6$ $\mu g/mL$, the $5^{th}$ percentile of GEMSTONE-302) may be a conservative anchor; using a target exposure associated with a specific efficacy threshold would be more informative
- The simulation of body weight using uniform distributions within strata does not account for the actual European body weight distribution; real-world weight distributions would affect the proportion of patients needing dose adjustment
- No formal model-informed precision dosing framework was proposed; the binary threshold ($>115$ kg) may oversimplify continuous weight-exposure relationships
- The impact of immunogenicity (ADA) was acknowledged but not modeled; ADA could increase clearance and further reduce exposure in heavier patients, but this was considered conservative
- The bridging strategy assumes identical PK and PD between Asian and European populations beyond weight effects, which may not fully capture unmeasured ethnic differences in Fc receptor biology or target expression

#### Generalizability
The findings are specific to sugemalimab in NSCLC and may not directly extend to other PD-L1 inhibitors or indications. However, the MIDD framework—including external validation, PK simulation across weight strata, and exposure-response confirmation—is highly generalizable. The authors appropriately note that many PD-(L)1 antibodies show minimal ethnic sensitivity and similar weight-exposure relationships, supporting the broader applicability of this weight-based bridging approach for biologics with linear PK and wide therapeutic windows. The proposed $115$ kg threshold and $1500$ mg dose are specific to sugemalimab's PK properties and exposure-response characteristics.

---

### Key Equations

**Time-varying clearance model**

{% raw %}
$$
CL(t) = CL_0 \cdot e^{-K_{des} \cdot t}
$$
{% endraw %}

Sugemalimab clearance decreases over time, modeled with an exponential decay function where CL0 is the baseline clearance and Kdes is the rate constant for clearance decay.

**Body weight effect on clearance**

{% raw %}
$$
CL_0 = CL_{0, \text{pop}} \cdot \left(\frac{WT}{WT_{\text{median}}}\right)^{\theta_{\text{CL}}} \cdot e^{\eta_{CL}}
$$
{% endraw %}

Allometric relationship between body weight and baseline clearance, where CL0,pop is the typical CL0 at median weight, and θCL is the power exponent estimated from data.

**Body weight effect on central volume**

{% raw %}
$$
V_c = V_{c, \text{pop}} \cdot \left(\frac{WT}{WT_{\text{median}}}\right)^{\theta_{Vc}} \cdot e^{\eta_{Vc}}
$$
{% endraw %}

Allometric relationship between body weight and central volume of distribution, similar in structure to the clearance model.

**Exponential hazard model for OS**

{% raw %}
$$
h(t) = h_0 \cdot e^{\beta \cdot C_{\text{trough}, C1}}
$$
{% endraw %}

The hazard of death decreases exponentially with increasing Cycle 1 trough concentration, where h0 is the baseline hazard and β is the slope of exposure effect.

**Modified Gompertz model for PFS**

{% raw %}
$$
S(t) = e^{-\lambda \cdot (1 - e^{-\alpha \cdot t}) \cdot e^{-\beta \cdot C_{\text{trough}, C1}}}
$$
{% endraw %}

Survival function for PFS incorporating exposure effect, where λ and α are shape parameters and β is the exposure-response coefficient.

---

### Figures & Tables

- **Figure $1$**: External validation of the popPK model: (a) Goodness-of-fit plots showing observed vs. predicted concentrations, and (b) Visual predictive check (VPC) for the $1800$ mg Q4W regimen.
  - *Significance*: Demonstrates the model's ability to accurately predict concentrations for a dosing regimen ($1800$ mg Q4W) not used in model development, establishing credibility for extrapolation to higher doses.
- **Figure $2$**: Boxplots of simulated Cycle $1$ exposure metrics ($C_{trough}, AUC, C_{max}$) for sugemalimab $1200, 1500, \text{ and } 1800$ mg Q3W across $14$ weight strata ($80–150$ kg).
  - *Significance*: Central figure supporting dose adjustment recommendation; visually demonstrates the monotonic decrease in exposure with increasing body weight and the ability of higher doses to restore exposure.
- **Figure $3$**: Survival probability curves from exposure-response simulations for PFS (investigator-assessed and BICR) and OS across three groups: Asian patients ($1200$ mg), $80–115$ kg patients ($1200$ mg), and $115–150$ kg patients ($1500$ mg).
  - *Significance*: Provides clinical context for the proposed dose adjustment by showing that survival outcomes for the high-weight/high-dose group overlap with those of Asian patients, supporting non-inferior efficacy.
- **Table $1$**: External validation metrics: $MPE, MAPE, F_{20}, \text{ and } F_{30}$ for both $PRED$ and $IPRED$-based predictions of the $1800$ mg Q4W dataset.
  - *Significance*: Quantifies model performance in extrapolation; all metrics fall within acceptable ranges, confirming the model's suitability for dose simulation.
- **Table $2$**: Detailed simulation results across $42$ scenarios ($14$ weight strata $\times 3$ dose levels) showing percentage above clinical reference and $GMR$ ($90\% CI$) for $C_{trough}, AUC, \text{ and } C_{max}$.
  - *Significance*: Comprehensive data table used to identify the $115$ kg threshold and justify the $1500$ mg dose; shaded cells indicate $GMR$ within $80–125\%$ bounds.
- **Table $3$**: Predicted PFS and OS survival probabilities at $12$ and $24$ months with $5^{th}, 50^{th}, \text{ and } 95^{th}$ percentiles for the three virtual patient groups.
  - *Significance*: Quantifies the predicted clinical impact of the proposed dosing strategy and demonstrates overlap in confidence intervals across groups.

---

### Code & Reproducibility Assessment
The authors state that NONMEM $7.5.0$, PsN $5.3.1$, and R $4.4$ (mrgsolve package) were used. No publicly available code repository or data sharing is mentioned. The popPK model and ER model equations are referenced but not fully detailed in the manuscript, limiting full reproducibility.

---

### Future Directions
Several extensions are warranted: ($1$) Prospective evaluation of the proposed $1500$ mg Q3W regimen in a real-world European cohort to confirm PK exposure and clinical outcomes; ($2$) Modeling of the impact of ADA on long-term exposure in heavier patients, which was conservatively omitted; ($3$) Application of the MIDD framework to other PD-(L)1 antibodies requiring similar weight-based bridging; ($4$) Exploration of weight-based dosing (mg/kg) versus fixed-dose with a threshold, including cost-benefit analyses; ($5$) Development of a model-informed precision dosing tool for sugemalimab that accounts for body weight, albumin, and other covariates; ($6$) Formal exposure-safety modeling using a larger dataset or meta-analysis of PD-(L)1 antibodies to establish safety bounds for exposure increases above $+25\%$.

---

### Expert Commentary
This paper represents a textbook example of how pharmacometrics can directly support global drug approval and patient access. As a senior pharmacometrician, I find several aspects particularly commendable. First, the external validation using a different dose regimen ($1800$ mg Q4W) is a crucial step often omitted in similar bridging analyses—it provides genuine confidence in the model's extrapolative capacity. Second, the use of $90\% CI$ of $GMR$ with $80–125\%$ bounds, adapted from bioequivalence principles, is a rigorous and regulator-friendly approach that explicitly addresses both central tendency and variability. Third, the sensitivity analysis on $\eta$-shrinkage demonstrates methodological maturity—many analyses would have stopped at EBE-based simulations without acknowledging the potential attenuation of variability. The choice of Cycle $1$ exposure to avoid response-driven confounding is essential for monoclonal antibodies with time-varying clearance, and the authors correctly justify this decision against FDA's recommendation for steady-state $C_{max}$. One area where I would have liked to see more discussion is the clinical implementation: will the $115$ kg threshold be practical in real-world clinics, and how will it be monitored? Also, while the uniform weight distribution approach is reasonable for exploring the full range, incorporating the actual European weight distribution would provide more realistic estimates of how many patients actually need dose adjustment. The conclusion that $1500$ mg for $>115$ kg 'restores' exposure to Asian levels is well-supported by the simulation data, and the modest differences in predicted survival ($<10\%$) are reassuring for clinicians and regulators. This paper should be a required reading in pharmacometrics training programs for its clear demonstration of the MIDD paradigm.

---

### Bottom Line
For practicing pharmacometricians, this paper exemplifies a rigorous, regulatory-accepted MIDD workflow for ethnic bridging: external validation of an established popPK model, systematic weight-stratified PK simulations with well-defined bioequivalence-inspired acceptance criteria, and exposure-response confirmation of clinical outcomes. The $115$ kg threshold for dose escalation to $1500$ mg Q3W is scientifically justified and has already received regulatory approval. Key methodological takeaways include the importance of using Cycle $1$ exposure to avoid response-driven bias in ER modeling, addressing $\eta$-shrinkage through sensitivity analyses, and employing both central tendency and distributional criteria ($90\% CI$ of $GMR$) rather than simple mean comparisons. This work should be a reference case for future submissions requiring dose bridging across populations without dedicated clinical trials.

---

---

## 📊 Figures

![External validation for the population pharmacokinetic model. (a) Goodness-of-fit plots. (b) Visual predictive check.]({{ site.baseurl }}/assets/digests/2026-05-26-model-informed-dosing-regimen-of-sugemalimab-for-european-patients-with-non/figures/fig_01.png)

![Boxplots of simulated exposure (Ctrough, AUC, and Cmaxof Cycle 1) for sugemalimab 1200, 1500, and 1800 mg Q3W dosing regimens from high body weight strata. Red i]({{ site.baseurl }}/assets/digests/2026-05-26-model-informed-dosing-regimen-of-sugemalimab-for-european-patients-with-non/figures/fig_02.png)

![Survival probability of virtual patients from exposure-response for progression free survival (investigator-assessed), progression free survival (BICR), and over]({{ site.baseurl }}/assets/digests/2026-05-26-model-informed-dosing-regimen-of-sugemalimab-for-european-patients-with-non/figures/fig_03.png)