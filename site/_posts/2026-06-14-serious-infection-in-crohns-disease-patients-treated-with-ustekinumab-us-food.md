---
layout: post
title: "Serious Infection in Crohn's Disease Patients Treated With Ustekinumab: US Food and Drug Administration Active Postmarket Risk Identification and Analysis in the Sentinel Initiative"
date: 2026-06-14
authors: "Weaver JL, Smith SC, Johnson JT, et al."
journal: "Clinical Pharmacology & Therapeutics, 2025, 117(5), 1174–1183"
doi: "10.1002/cpt.3616"
paper_type: generic
tags: [generic, regulatory]
excerpt_text: "This FDA Sentinel study used active comparator new-user design and IPTW to assess serious infection risk in Crohn's disease patients on ustekinumab vs. other biologics. Among 15,490 ustekinumab and 51,503 comparator patients, the adjusted hazard ratio was 0.88 (95% CI 0.80–0.96), excluding increased risk. Findings were consistent across subgroups and sensitivity analyses, confirming the safety of ustekinumab regarding serious infection."
pdf_path: "/assets/digests/2026-06-14-serious-infection-in-crohns-disease-patients-treated-with-ustekinumab-us-food/PMx_Serious_Infection_in_Crohns_Disease_Pati_20260614.pdf"
retroactively_classified: false
---

```markdown
**Content Source:** Full Text

### Quick Take
This FDA Sentinel study used active comparator new-user design and IPTW to assess serious infection risk in Crohn's disease patients on ustekinumab vs. other biologics. Among 15,490 ustekinumab and 51,503 comparator patients, the adjusted hazard ratio was 0.88 (95% CI 0.80–0.96), excluding increased risk. Findings were consistent across subgroups and sensitivity analyses, confirming the safety of ustekinumab regarding serious infection.

---

### Executive Summary
This FDA Sentinel ARIA study assessed the risk of serious infection in adult Crohn's disease patients treated with ustekinumab versus active comparators (infliximab, adalimumab, vedolizumab) using an active-comparator new-user cohort design with inverse probability of treatment weighting. Among 15,490 ustekinumab and 51,503 comparator patients, the adjusted hazard ratio for the composite of serious infection or COVID-19 was 0.88 (95% CI 0.80–0.96), ruling out a pre-specified 2-fold increased risk. Results were consistent across treatment-experienced and naïve subgroups and before/after the COVID-19 pandemic. This study demonstrates the capability of FDA's ARIA system to address safety questions identified during marketing application review using complex confounding adjustment.

---

### Scientific Context & Motivation
Ustekinumab, an IL-12/23 inhibitor, was approved for Crohn's disease in 2016 based on clinical trials that showed a similar infection risk to placebo and other biologics. However, the postmarket population is larger and more heterogeneous, and the initial approval raised uncertainty due to the novel IV route and higher dosing. FDA's Adverse Event Reporting System alone was insufficient to quantify risk, prompting this ARIA study. The need for real-world evidence to confirm the safety profile and inform labeling decisions motivated this analysis.

---

## ⚡ Methodological Snapshot
This study used an active-comparator new-user cohort design with data from six Sentinel Data Partners (commercial, Medicaid, Medicare). New users of ustekinumab or a comparator biologic (infliximab, adalimumab, vedolizumab) were identified from October 2016 to June 2023. Inverse probability of treatment weighting (IPTW) was used to balance 47 baseline covariates. Propensity scores were estimated using logistic regression within each Data Partner, followed by trimming of non-overlapping regions and 1% weight truncation. The primary composite outcome was serious infection (validated algorithm: outpatient infection leading to hospitalization) or COVID-19. Data Partner-stratified IPTW-weighted Cox proportional hazards regression with robust variance estimated hazard ratios. Sensitivity analyses used PS matching and untruncated weights. Subgroup analyses by prior advanced therapy use and COVID-19 era were pre-specified.

---

## 📋 Detailed Analysis
This study is a landmark application of FDA's ARIA system for complex confounding adjustment. The active-comparator new-user design, IPTW, and validated outcome algorithm provided robust estimates. The large sample size (15,490 ustekinumab, 51,503 comparators) allowed precise estimation. The primary analysis showed a modest risk reduction (HR 0.88) that was consistent across subgroups (treatment-experienced/naïve, pre/post COVID-19). Sensitivity analyses using PS matching and different weight truncation confirmed robustness. The only notable imbalance after IPTW was prior vedolizumab use (9.8% vs 6.0%), which may reflect residual channeling bias but did not materially affect results. The exclusion of 2-fold risk for most infection subtypes is clinically reassuring. The study's reliance on administrative claims means potential misclassification of exposure and outcome; however, the serious infection algorithm had a PPV of 80%. The lack of opportunistic infection assessment is a gap, but the composite captures the most relevant serious infections. Overall, this analysis complements clinical trial evidence and addresses regulatory uncertainty.

---

### Domain Context
This work sits at the intersection of regulatory pharmacovigilance and real-world evidence. FDA's Sentinel Initiative, established under FDCA Section 505(k)(3), was designed to proactively monitor postmarket safety using electronic healthcare data. This is the first completed ARIA study to use advanced confounding adjustment (IPTW) for a safety question arising from a marketing application review, marking a milestone in regulatory science. It demonstrates that distributed data networks can generate timely, adequately powered evidence to refine drug labeling. The study's methodological framework—active comparator, new-user design, propensity score methods, and validated outcomes—is now a model for future ARIA investigations. The findings directly informed FDA's determination that existing labeling adequately characterizes ustekinumab's infection risk.

---

## 📊 Key Findings
Primary composite outcome (serious infection or COVID-19): IPTW-adjusted HR 0.88 (95% CI 0.80–0.96). No evidence of increased risk for any individual infection type; upper 95% CI bounds excluded 2-fold risk for all except acute osteomyelitis and acute meningitis. Results consistent in subgroups: treatment-experienced (HR 0.89, 0.74–1.07) and treatment-naïve (HR 0.86, 0.77–0.96). Pre-COVID-19 (HR 0.88, 0.77–1.00) and post-COVID-19 (HR 0.87, 0.75–1.01) periods gave similar estimates. PS-matched analysis yielded HR 0.83 (0.74–0.92). These findings align with prior clinical trials and observational studies, confirming that ustekinumab does not increase serious infection risk compared to other biologic therapies in Crohn's disease.

---

### Strengths & Limitations

#### Strengths
- Large, multi-payer, national database (15,490 ustekinumab users) with long follow-up (mean 400 days)
- Active-comparator new-user design reduces time-related biases and confounding by indication
- IPTW effectively balanced 47 baseline covariates; standardized differences <0.1 after weighting
- Validated outcome algorithm for serious infection with known PPV (80%)
- Sensitivity analyses (PS matching, weight truncation, subgroup) confirm robustness
- First ARIA study to use complex confounding adjustment for a marketing application safety issue; establishes precedent for regulatory use

#### Limitations (Acknowledged by Authors)
- No assessments for opportunistic infection specifically
- No assessments in some patient subgroups (e.g., older patients, patients with history of infection)
- Only indirect means for measuring Crohn's disease severity (claims-based proxies)

#### Limitations (Expert Review)
- Potential misclassification of treatment episodes due to bridging rules and fixed dosing assumptions
- Residual confounding from unmeasured variables (e.g., smoking, disease activity indices, over-the-counter medications)
- Reliance on claims data may miss infections diagnosed outside inpatient settings or coded inconsistently
- Active comparator design may be sensitive to the choice of comparator; pooling all comparators may mask drug-specific differences
- IPTW assumes no unmeasured confounders and correct model specification
- The validated serious infection algorithm has PPV of 80%, leaving 20% misclassification

#### Generalizability
Results are generalizable to insured adult Crohn's disease patients in the US treated with biologics. Caution is warranted when extrapolating to uninsured populations, pediatric patients, or those outside the US healthcare system.

---

---

### Figures & Tables

- **Figure 1**: Forest plot of hazard ratios for the composite and individual infection outcomes, comparing ustekinumab vs. comparator after IPTW.
  - *Significance*: Visually demonstrates that the HR for the primary composite outcome is 0.88 (95% CI 0.80–0.96) and that upper bounds exclude 2.0 for all outcomes except acute osteomyelitis and meningitis (which had very few events).
- **Table 1**: Baseline characteristics of ustekinumab and comparator cohorts before and after IPTW weighting.
  - *Significance*: Shows that IPTW successfully balanced most covariates (standardized differences <0.1), except pre-index vedolizumab use (0.14). Highlights the importance of weighting for confounding control.
- **Table 2**: Incidence rates and hazard ratios for each serious infection component, comparing ustekinumab with weighted comparator.
  - *Significance*: Provides detailed event counts and IR per 1000 PY. Demonstrates lower rates for bacteremia and pneumonia in ustekinumab users, and no material difference for skin/soft tissue or GI infections.
- **Table 3**: Subgroup analysis by prior advanced therapy use (treatment-experienced vs. naïve).
  - *Significance*: Shows that the protective effect of ustekinumab is consistent regardless of prior biologic exposure, with HR of 0.89 (0.74–1.07) and 0.86 (0.77–0.96) respectively.

---

### Code & Reproducibility Assessment
Study used proprietary Sentinel analytic tools (ARIA suite) with SAS 9.4; code is not publicly available.

---

### Supplementary Materials
Supplementary materials include: Table S1 (serious infection outcome algorithm definition), Tables S2–S3 (diagnosis codes), Table S4a–f (detailed baseline characteristics by Data Partner), Table S5a–b (baseline characteristics by prior advanced therapy), Table S6a–b (baseline characteristics by COVID-19 period), Table S7 (literature summary of prior observational studies), Figure S1 (sensitivity analysis by weight truncation), Figure S2 (quantitative bias analysis for outcome misclassification).

---

### Future Directions
Future studies should leverage ARIA or similar systems to assess opportunistic infection risk, evaluate safety in vulnerable subgroups (elderly, immunocompromised), and extend to longer follow-up periods. Comparative effectiveness studies incorporating disease severity measures (e.g., corticosteroid use, hospitalization history) would further clarify the benefit-risk profile. Methodological work to improve the validity of infection algorithms and to incorporate laboratory data could enhance future analyses. Finally, this framework should be applied to other drugs with safety signals identified during regulatory review.

---

### Expert Commentary
This study is notable not only for its findings but also for its regulatory context. The FDA proactively used its ARIA infrastructure to address a specific postmarket safety concern before requiring a formal postmarketing requirement. The choice of an active comparator design strengthens causal inference, and the large sample size provides adequate power to rule out moderate-to-large risks. The absence of a signal for increased serious infection is consistent with clinical trial data and prior observational studies. From a pharmacometrics perspective, while no PK/PD modeling was performed, the study illustrates how large-scale observational data can be leveraged to complement clinical pharmacology knowledge. The validated outcome algorithm (PPV 80%) is a notable methodological contribution. Moving forward, similar approaches could be applied to other biologic therapies and safety endpoints. One limitation is the inability to assess opportunistic infections specifically, which would require targeted algorithms or chart review.

---

### Bottom Line
Ustekinumab does not increase the risk of serious infection in Crohn's disease patients compared to other biologic therapies, supporting its safety profile in real-world use.

---

---

## 📊 Figures

![Forest plot showing hazard ratios (HR) and 95% confidence intervals (CI) for the serious infection and COVID-19 composite and each of its components, comparing (]({{ site.baseurl }}/assets/digests/2026-06-14-serious-infection-in-crohns-disease-patients-treated-with-ustekinumab-us-food/figures/fig_01.png)
```