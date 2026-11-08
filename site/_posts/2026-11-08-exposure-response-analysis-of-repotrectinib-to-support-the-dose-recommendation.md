---
layout: post
title: "Exposure-Response Analysis of Repotrectinib to Support the Dose Recommendation for Patients With ROS1-Positive NSCLC or NTRK-Positive Solid Tumors."
date: 2026-11-08
authors: "Shengnan Du, Zheyi Hu, Jun Shen, Li Zhu, Amit Roy, Justine Lam, Ming Lu, Anna Kondic, Lora Hamuro"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70102"
paper_type: popk
tags: [popk, dose-response, oncology]
excerpt_text: "This integrated exposure-response analysis of repotrectinib in TRIDENT-1 supports the approved 160 mg QD/BID regimen over 160 mg QD by predicting improved ORR and PFS with only minimal increases in key adverse events. It also demonstrates that food status has negligible impact on efficacy or safety once exposure is accounted for, supporting dosing without regard to food. The work is essential reading for clinical pharmacologists and pharmacometricians involved in oncology dose justification, especially those dealing with time-varying exposure and dose modifications."
pdf_path: "/assets/digests/2026-11-08-exposure-response-analysis-of-repotrectinib-to-support-the-dose-recommendation/PMx_ExposureResponse_Analysis_of_Repotrectin_20261108.pdf"
retroactively_classified: false
---

> **WARNING:** Fact-check not completed for this paper. The claims below were **not** verified against the source. Treat quantitative details with caution.

**Content Source:** Full Text

### Quick Take
This integrated exposure-response analysis of repotrectinib in TRIDENT-1 supports the approved 160 mg QD/BID regimen over 160 mg QD by predicting improved ORR and PFS with only minimal increases in key adverse events. It also demonstrates that food status has negligible impact on efficacy or safety once exposure is accounted for, supporting dosing without regard to food. The work is essential reading for clinical pharmacologists and pharmacometricians involved in oncology dose justification, especially those dealing with time-varying exposure and dose modifications.

---

### Executive Summary
Du and colleagues performed a comprehensive exposure-response (E-R) analysis of repotrectinib using data from the TRIDENT-1 trial to support dose selection in ROS1-positive NSCLC and NTRK-positive solid tumors. Efficacy endpoints (ORR and PFS) were modeled separately by indication, while five safety endpoints were pooled across ALK/ROS1/NTRK-altered solid tumors. A key methodological contribution is the careful selection of exposure metrics: average concentration over the first 56 days ($C_{avg56}$) for ORR, and a time-varying cumulative half-daily average concentration ($C_{avgc}$) for PFS and safety to account for dose reductions, interruptions, and QD-to-BID titration. The models predict that 160 mg QD/BID improves ORR and PFS relative to 160 mg QD, with only small absolute increases in Gr2+ dizziness and dose reduction/interruption due to AEs. Food status produced only minor numeric differences in predicted outcomes. The analysis provides a robust regulatory-grade framework for dose justification and benefit-risk assessment in a dynamic dosing setting.

---

### Scientific Context & Motivation
Repotrectinib is a next-generation ROS1/TRK inhibitor approved for ROS1-positive NSCLC and NTRK-positive solid tumors. Its pharmacokinetics are complicated by CYP3A4-mediated metabolism and time-dependent autoinduction, and the recommended regimen includes a 14-day QD lead-in followed by BID dosing. In the TRIDENT-1 trial, over half of patients experienced dose reductions or interruptions due to adverse events, which can distort static exposure-response relationships. Prior popPK work identified body weight, age, race, and food status as covariates affecting exposure, but their clinical relevance required evaluation through E-R modeling. This paper addresses the gap by linking dynamic exposure to both efficacy and safety, and by comparing alternative dosing regimens and food conditions to support the approved label.

---

## ⚡ Methodological Snapshot
The analysis used data from the TRIDENT-1 trial. Efficacy analyses were performed separately for ROS1-positive NSCLC ($n=127$) and NTRK-positive solid tumors ($n=88$), with ORR modeled by logistic regression and PFS by Cox proportional hazards. Safety analyses pooled 502 patients with ALK-, ROS1-, or NTRK-altered solid tumors and modeled five endpoints using Cox proportional hazards. For ORR, the exposure metric was $C_{avg56}$, the average concentration over the first 56 days of dosing. For PFS and safety, the exposure metric was $C_{avgc}$, a time-varying cumulative half-daily average concentration simulated from individual empirical Bayes estimates of the population PK model and actual dosing histories. Model selection used BIC, and model evaluation used visual predictive checks with 1000 simulations. Simulations compared dose regimens (40-200 mg QD/BID and 160 mg QD) and food conditions.

---

## 🏗️ Structural Model Breakdown
The ORR model is a logistic regression relating the log-odds of objective response to log-transformed $C_{avg56}$ and covariates. The PFS and safety models are Cox proportional hazards models with a log-linear effect of time-varying $C_{avgc}$ and time-constant covariates. $C_{avgc}$ is computed as the cumulative average of half-daily average concentrations from Day 1 to the event or censoring time, using individual PK parameter estimates and actual dosing records. This structure allows exposure to change with dose reductions, interruptions, and the QD-to-BID switch on Day 15. No explicit equations were extracted from the paper; the models are empirical and do not include mechanistic tumor or biomarker components.

---

### Detailed Methodological Analysis

#### Modeling Approach
Logistic regression for the probability of objective response (ORR) and Cox proportional hazards models for PFS and five safety endpoints. Exposure was modeled as log-linear. Static $C_{avg56}$ was used for ORR; time-varying cumulative half-daily average concentration ($C_{avgc}$) was used for PFS and safety. Models were developed in R using the 'rms' package for logistic regression and the 'survival' package for time-to-event analyses. Population PK simulations used NONMEM 7.4.3.

#### Data Sources
TRIDENT-1 (NCT03093116), a multicenter, single-arm, open-label trial. Efficacy analyses: ROS1-positive NSCLC ($n=127$) and NTRK-positive solid tumors ($n=88$), data cutoff March 2023. Safety analyses: pooled 502 patients with ALK-, ROS1-, or NTRK1-3-altered advanced solid tumors, including 287 additional ALK-positive patients. Exposure metrics were simulated using individual EBEs from a previously published two-compartment popPK model with time- and concentration-dependent autoinduction.

#### Estimation Methods
Logistic regression and Cox proportional hazards models were fitted using maximum likelihood in R. Population PK parameters were estimated previously using NONMEM. Individual exposure metrics were derived from empirical Bayes estimates and actual dosing records.

#### Model Evaluation
Visual predictive checks (VPCs) with 1000 simulations. For ORR, observed response rates were compared with model-predicted 5th and 95th percentiles. For PFS and safety, model-predicted cumulative event distributions were compared with nonparametric Kaplan-Meier estimates. Model selection used Bayesian information criterion (BIC).

#### Covariate Analysis
Pre-specified covariates included body weight, age, race, sex, baseline ECOG performance status, baseline tumor size, TKI pretreatment status, and NTRK mutation type (NTRK3 vs NTRK1-2). Linear and log-transformed exposure forms were assessed. Exposure-covariate interactions were evaluated. Covariates were selected by BIC. No clinically actionable exposure-covariate interactions were identified.

---

### Statistical Rigor Assessment
The analysis is statistically rigorous for an empirical E-R assessment. The use of BIC for model selection is appropriate, and the VPCs with 1000 simulations provide adequate internal validation. The sample sizes are moderate (127 ROS1 NSCLC, 88 NTRK solid tumors, 502 safety), and confidence intervals are reported for all key effects. The authors appropriately avoided pooling efficacy data across indications. The main statistical limitation is the single-arm design, which precludes randomized comparisons between dose regimens; all dose comparisons are model-based predictions. The time-varying exposure metric $C_{avgc}$ is a thoughtful solution to immortal time bias and confounding by dose modification, but it is still an observational construct. Missing data and censoring are handled by standard Cox methods, but the potential for informative censoring due to toxicity is not formally addressed. Sensitivity analyses using alternative exposure metrics are described qualitatively but not fully reported.

---

## 📊 Key Findings
In ROS1-positive NSCLC, higher $C_{avg56}$ was associated with higher probability of objective response, and the 160 mg QD/BID regimen predicted higher ORR than 160 mg QD: $85.0\%$ vs $76.1\%$ in TKI-naive patients and $46.6\%$ vs $33.1\%$ in TKI-pretreated patients. For NTRK-positive solid tumors, $C_{avg56}$ was not a statistically significant predictor of ORR, but NTRK3 mutation status was associated with $9.57$-fold higher odds of response than NTRK1-2. For PFS, higher time-varying $C_{avgc}$ was significantly associated with lower risk of progression or death in ROS1-positive NSCLC ($HR < 1$), with a similar but non-significant trend in NTRK-positive tumors. The 160 mg QD/BID regimen predicted longer PFS than 160 mg QD in both indications. Safety analyses showed that higher exposure significantly increased the risk of Gr2+ dizziness ($HR\ 1.002$ per unit increase) and dose reduction/interruption due to AEs ($HR\ 1.002$), but the predicted probabilities for 160 mg QD and 160 mg QD/BID were comparable with overlapping $90\%$ PIs. Food status had minimal impact on predicted efficacy and safety, with overlapping $90\%$ PIs across fasted, modified fasted, fed, and unknown food conditions.

---

## 💡 Clinical & Regulatory Implications
The analysis supports the approved repotrectinib regimen of 160 mg QD for 14 days followed by 160 mg BID for ROS1-positive NSCLC and NTRK-positive solid tumors. Model predictions indicate improved ORR and PFS with 160 mg QD/BID compared with 160 mg QD, with only minimal absolute increases in Gr2+ dizziness and dose reduction/interruption due to AEs. The benefit-risk profile favors 160 mg QD/BID. Food status has no clinically meaningful impact on predicted efficacy or safety, supporting administration with or without food. Identified covariate effects (e.g., age, body weight, performance status, TKI pretreatment, NTRK mutation type) do not warrant dose adjustments. The dose reduction strategy is supported for managing adverse events while maintaining potential efficacy. These findings were used to support regulatory approval and labeling.

---

### Strengths & Limitations

#### Strengths
- Indication-specific efficacy modeling (ROS1 NSCLC and NTRK solid tumors) preserves disease-specific exposure-response relationships.
- Systematic comparison of multiple static exposure metrics ($C_{avg1}$, $C_{avgss}$, $C_{avg28}$, $C_{avg56}$) and justification of $C_{avg56}$ based on pharmacology, timing of response, and dose modification patterns.
- Use of time-varying cumulative half-daily average concentration ($C_{avgc}$) for PFS and safety to avoid immortal time bias and to account for dose reductions, interruptions, and QD-to-BID titration.
- Comprehensive safety evaluation across five clinically relevant endpoints, including Gr2+ dizziness, Gr2+ anemia, Gr3+ TEAEs, Gr2+ neurologic AEs, and dose reduction/interruption due to AEs.
- Model evaluation by VPC with 1000 simulations and comparison against Kaplan-Meier estimates.
- Direct translation to dose justification and food-effect labeling, with simulations across multiple dose levels and food conditions.
- Transparent reporting of covariate effects and lack of clinically actionable exposure-covariate interactions.

#### Limitations (Acknowledged by Authors)
- The 200 mg QD/BID dose was evaluated in simulations but only two subjects received it in the clinical study, limiting confidence in model predictions at that dose.
- For NTRK-positive solid tumors, substantial variability in response rates across mutation types and exposure quantiles may be due to limited sample size.
- The exposure-response relationship for ORR in NTRK-positive solid tumors was not statistically significant.
- The analysis is based on a single-arm trial, so comparisons across dose regimens are model-based rather than randomized.

#### Limitations (Expert Review)
- The E-R models are empirical (logistic and Cox proportional hazards) and do not mechanistically incorporate tumor dynamics, receptor occupancy, or resistance mechanisms.
- $C_{avgc}$ is a cumulative exposure metric that may dilute temporal relationships between concentration and early safety events; alternative time-varying metrics (e.g., instantaneous $C_{avg}$) produced counterintuitive negative relationships, suggesting residual confounding by dose modifications.
- The safety analysis pooled ALK-, ROS1-, and NTRK-altered tumors; although this increases power, it assumes similar exposure-safety relationships across molecular subtypes.
- Food status was not included as a covariate in the E-R models; the indirect assessment through simulated exposure assumes that food affects efficacy and safety only via systemic exposure, which is reasonable but not formally tested.
- The analysis dataset was not publicly available, and the E-R models were developed in R while the popPK simulations used NONMEM; full reproducibility would require access to both the data and the prior popPK model code.
- The predicted differences between 160 mg QD and 160 mg QD/BID, while numerically favoring QD/BID, were not statistically significant in the original trial; the model-based comparisons should be interpreted as supportive rather than definitive.

#### Generalizability
The findings are most generalizable to adult patients with ROS1-positive NSCLC or NTRK-positive solid tumors treated with repotrectinib under the studied dosing regimens. The safety models pooled patients with ALK, ROS1, or NTRK alterations, so the exposure-safety conclusions may extend to ALK-positive tumors, although efficacy was not modeled for ALK. The food-effect conclusions are likely robust across these populations because they are mediated by systemic exposure. However, the results may not fully generalize to pediatric patients, patients with severe hepatic or renal impairment, or those receiving strong CYP3A4 modulators, as these populations were not the focus of the E-R analysis.

---

---

### Figures & Tables

- **Figure 1**: Estimated exposure and covariate effects from the full logistic regression models for objective response in (A) ROS1-positive NSCLC and (B) NTRK-positive solid tumors.
  - *Significance*: Shows the magnitude and direction of $C_{avg56}$ and covariate effects (e.g., TKI pretreatment, NTRK3 mutation) on the odds of response, providing the basis for the ORR simulations.
- **Figure 2**: Predicted probability of objective response with $90\%$ prediction intervals for (A) different dosing regimens and (B) food status at 160 mg QD/BID.
  - *Significance*: Directly supports the dose recommendation by comparing predicted ORR across regimens and demonstrating minimal food effect.
- **Figure 3**: Estimated covariate effects from the full Cox proportional hazards models for PFS in (A) ROS1-positive NSCLC and (B) NTRK-positive solid tumors.
  - *Significance*: Illustrates the impact of time-varying $C_{avgc}$ and baseline covariates on PFS risk, supporting the PFS simulations and covariate interpretation.
- **Figure 4**: Predicted probability of PFS by dosing regimen and food status, including median PFS and $90\%$ prediction intervals.
  - *Significance*: Shows that 160 mg QD/BID predicts longer PFS than 160 mg QD and that food status has minimal impact, reinforcing the dosing recommendation.
- **Figure 5**: Estimated covariate effects from the safety models for (A) Gr2+ dizziness and (B) dose reduction or interruption due to AEs (DRDIs).
  - *Significance*: Highlights the exposure-safety relationship and identifies age, body weight, and tumor type as covariates, informing risk management.
- **Figure 6**: Predicted cumulative probability of five safety endpoints by dosing regimen and food status.
  - *Significance*: Demonstrates that safety event probabilities increase with dose but are comparable between 160 mg QD and 160 mg QD/BID, and that food status has minimal impact.
- **Table S6**: Full model parameter estimates and odds ratios with $95\%$ CIs for the ORR models.
  - *Significance*: Provides the quantitative basis for the ORR predictions and covariate effects shown in Figure 1.
- **Table S10**: Full model parameter estimates for the PFS Cox proportional hazards models.
  - *Significance*: Supports the PFS simulations and the interpretation of $C_{avgc}$ and covariate effects.
- **Table S14**: Full model parameter estimates for the five safety endpoints.
  - *Significance*: Provides the hazard ratios and covariate effects underlying the safety simulations and Figure 5.

---

### Code & Reproducibility Assessment
Example R code for generating visual predictive checks and simulations is provided in Supplement S1. The analysis dataset is available upon request through the Bristol Myers Squibb independent research data sharing portal. The population PK model and source NONMEM code are available in a previously published paper (reference 11). Full end-to-end reproducibility would require access to the clinical trial data and the prior popPK model.

---

### Supplementary Materials
The supplement includes Tables S1-S14 and Figures S1-S9. Table S1 summarizes the efficacy analysis datasets by indication; Table S2 summarizes the pooled safety dataset. Tables S3-S5 and S9 document exposure metric selection and model selection for ORR and PFS; Tables S6, S10, and S14 provide full model parameter estimates. Tables S7, S8, S11, and S12 contain predicted efficacy outcomes by dose and food status. Table S13 documents safety model selection. Figures S1-S9 include the $C_{avgc}$ simulation schematic, VPCs for ORR and safety, predicted PFS time courses, covariate effect plots for additional safety endpoints, Kaplan-Meier plots of DRDIs, and correlation between $C_{avg56}$ and $C_{avg28}$. Supplement S1 provides example R code for VPCs and simulations.

---

### Future Directions
Future work could extend the E-R framework to pediatric and young adult patients from the CARE study, evaluate exposure-response relationships for ALK-positive tumors, and incorporate mechanistic tumor dynamics or resistance models to better understand the exposure-efficacy link in NTRK-positive disease. Prospective validation of the model-predicted benefit of 160 mg QD/BID versus 160 mg QD in an independent cohort would strengthen the dose justification. Additionally, the impact of strong CYP3A4 inhibitors or inducers on repotrectinib exposure and clinical outcomes could be explored through simulation using the established E-R models. Finally, alternative time-varying exposure metrics or joint PK-PD models could be developed to further mitigate confounding by dose modifications in safety analyses.

---

### Expert Commentary
This is a well-executed regulatory-grade E-R analysis that addresses a common but underappreciated problem in oncology: how to model exposure-response when dosing is intentionally dynamic. The authors' decision to use $C_{avg56}$ for ORR and $C_{avgc}$ for time-to-event endpoints is pharmacologically and statistically sound. The finding that instantaneous time-varying exposure produced negative E-R relationships for PFS and safety is a classic example of confounding by indication—patients with early toxicity receive dose reductions, lowering subsequent exposure and creating a spurious protective association. The cumulative metric mitigates this by integrating exposure over time. The paper also reinforces that food effects on exposure may not translate into clinically meaningful efficacy or safety differences, which is important for labeling. One teaching point is the use of BIC for model selection in logistic and Cox models, combined with VPCs, which is appropriate for these empirical models. The lack of a significant exposure-ORR relationship in NTRK-positive tumors is not surprising given the smaller sample size and biological heterogeneity; the NTRK3 mutation effect is a useful reminder that molecular subtype can dominate over exposure in some settings. Overall, this paper should be required reading for anyone involved in dose optimization for targeted oncology therapies.

---

### Bottom Line
For practicing pharmacometricians, this paper is a strong case study in selecting exposure metrics that reflect real-world dosing dynamics. When dose reductions, interruptions, and titration are common, static exposure measures can obscure or even reverse exposure-response relationships. The use of $C_{avg56}$ for ORR and time-varying $C_{avgc}$ for PFS and safety provides a defensible framework for dose justification. The analysis supports 160 mg QD/BID as the optimal regimen for repotrectinib, with a favorable benefit-risk profile and no clinically meaningful food effect, and it illustrates how E-R modeling can inform label recommendations without requiring dose adjustments for identified covariates.

---

---

## 📊 Figures

![Estimated exposure and covariate effects of the exposure–response of OR (full models). (A)ROS1-Positive NSCLC. (B)NTRK-positive solid tumor. Categorical comparator: refer]({{ site.baseurl }}/assets/digests/2026-11-08-exposure-response-analysis-of-repotrectinib-to-support-the-dose-recommendation/figures/fig_01.jpg)

![Predicted Probability (90% PI) of OR. (A) Dosing regimens, (B) food status at 160 mg QD/BID. BID, twice daily; QD, once daily; QD/BID, QD for the first 14 days then BID.]({{ site.baseurl }}/assets/digests/2026-11-08-exposure-response-analysis-of-repotrectinib-to-support-the-dose-recommendation/figures/fig_02.jpg)

![Estimated covariate effects of the exposure–response of PFS (full models). (A)ROS1-positive NSCLC B)NTRK-positive solid tumors. Categorical comparator: reference (n) and ]({{ site.baseurl }}/assets/digests/2026-11-08-exposure-response-analysis-of-repotrectinib-to-support-the-dose-recommendation/figures/fig_03.jpg)

![Predicted Probability of PFS. (A) Predicted median PFS by dosing regimens, (B) Predicted median PFS with 90% PI by dosing regimens, (C) Predicted median PFS by food statu]({{ site.baseurl }}/assets/digests/2026-11-08-exposure-response-analysis-of-repotrectinib-to-support-the-dose-recommendation/figures/fig_04.jpg)

![Estimated covariate effects of the exposure–response of safety. (A) Gr2+ dizziness, (B) DRDIs Categorical comparator: Reference (n) and continuous reference (P5–P95) cova]({{ site.baseurl }}/assets/digests/2026-11-08-exposure-response-analysis-of-repotrectinib-to-support-the-dose-recommendation/figures/fig_05.jpg)

![Predicted cumulative probability of safety. (A) Predicted median cumulative probability of safety by dosing regimens, (B) predicted median cumulative probability of safet]({{ site.baseurl }}/assets/digests/2026-11-08-exposure-response-analysis-of-repotrectinib-to-support-the-dose-recommendation/figures/fig_06.jpg)