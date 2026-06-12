---
layout: post
title: "Implementation of OMOP and ConcePTION Common Data Models in CPRD GOLD: Risk of Bleeding and Cardiovascular Outcomes From Anticoagulant Use"
date: 2026-06-08
authors: "N.B.H., P.S., M.B., H.G., M.S., D.P.-A., O.K., N.B., A.D."
journal: "Clinical Pharmacology & Therapeutics (presented at ISPE 2024)"
doi: "N/A"
paper_type: generic
tags: [generic]
excerpt_text: "This study compares the impact of using two common data models (OMOP vs. ConcePTION) on the results of a pharmacoepidemiologic study of DOACs vs. VKAs in NVAF patients using CPRD GOLD. While baseline characteristics were similar, the OMOP CDM yielded lower effect estimates for cardiovascular disease and a smaller deviation from the null for the negative control outcome, highlighting how CDM choice can influence study conclusions."
pdf_path: "/assets/digests/2026-06-08-implementation-of-omop-and-conception-common-data-models-in-cprd-gold-risk-of/PMx_Implementation_of_OMOP_and_ConcePTION_Co_20260608.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study compares the impact of using two common data models (OMOP vs. ConcePTION) on the results of a pharmacoepidemiologic study of DOACs vs. VKAs in NVAF patients using CPRD GOLD. While baseline characteristics were similar, the OMOP CDM yielded lower effect estimates for cardiovascular disease and a smaller deviation from the null for the negative control outcome, highlighting how CDM choice can influence study conclusions.

---

### Executive Summary
Using the same instance of CPRD GOLD, the authors mapped data to both the OMOP and ConcePTION common data models and applied identical study protocols to compare the risk of bleeding and cardiovascular outcomes with DOACs vs. VKAs in patients with non-valvular atrial fibrillation. The study populations differed in size (80,701 in OMOP vs. 76,726 in ConcePTION) and follow-up time (93,350 vs. 100,135 person-years), driven largely by differences in treatment duration imputation. Effect estimates for cardiovascular disease diverged: OMOP showed a protective effect for DOACs (HR 0.82, 95% CI 0.74–0.90) while ConcePTION showed no association (HR 0.99, 95% CI 0.91–1.08). Stroke and major bleeding risks were similar across CDMs, though the negative control outcome (hip fracture) indicated greater residual confounding in ConcePTION. The study underscores that CDM choice—particularly semantic harmonization and imputed variables—can materially affect real-world evidence results.

---

### Scientific Context & Motivation
The use of common data models (CDMs) to harmonize electronic healthcare data across multiple sources is central to large-scale pharmacoepidemiology, yet the impact of CDM choice on study results is poorly understood. Two widely used CDMs in Europe are OMOP (which requires both syntactic and semantic harmonization) and ConcePTION (which requires only syntactic harmonization, with semantic mapping performed at analysis time). This study addresses the knowledge gap of how these different harmonization strategies affect patient characteristics, incidence rates, and effect estimates in a real-world evidence case study.

---

## ⚡ Methodological Snapshot
This study used a cohort design with data from CPRD GOLD (July 2022 instance) mapped to two common data models: OMOP CDM v5.3 (with full semantic harmonization to standard vocabularies) and ConcePTION CDM v2.2 (syntactic harmonization only, with semantic mapping performed at analysis time). The study population included patients aged ≥18 with non-valvular atrial fibrillation initiating DOACs or VKAs. Exclusion criteria included prior use of the other anticoagulant class and history of the outcome within 365 days. Follow-up started at the index date and ended at outcome occurrence, treatment switch, end of prescription supply, death, transfer out, or end of data. Treatment duration was imputed differently in each CDM: ConcePTION used an algorithm based on quantity, packs, and days supplied, with median gap imputation for VKAs; OMOP used a pre-defined ETL algorithm based on days supply or most frequent daily dose. Outcomes (major bleeding, stroke, CVD, hip fracture) were identified using Read codes in ConcePTION and SNOMED concepts in OMOP. Cox proportional hazards models were adjusted for age, sex, comorbidities, and concomitant medications. A negative control outcome (hip fracture) was used to assess residual confounding.

---

## 📋 Detailed Analysis
The study's most striking finding is the divergence in CVD effect estimates: OMOP suggested a 18% risk reduction with DOACs (HR 0.82), while ConcePTION showed no effect (HR 0.99). This difference is clinically meaningful and could influence treatment recommendations. The authors attribute this to differences in how comorbidities and medications are captured—for example, the higher recording of statins and beta-blockers in ConcePTION may reflect broader code lists or different mapping strategies. However, the negative control outcome (hip fracture) also showed a larger deviation from the null in ConcePTION (HR 1.80 vs. 1.32), suggesting that the ConcePTION analysis may have had more residual confounding, which could bias the CVD estimate toward the null. The longer follow-up time in ConcePTION, driven by VKA treatment duration imputation, is another critical factor: if VKA exposure is overestimated, person-time for VKA users is inflated, potentially diluting the DOAC effect. The study also highlights the challenge of medication ascertainment: corticosteroids and NSAIDs were recorded more frequently in OMOP, likely because the OMOP mapping included topical formulations (e.g., inhaled corticosteroids) that are not in the ATC class H02 used in ConcePTION. This differential misclassification of confounders could affect adjusted estimates. Overall, the study demonstrates that CDM choice introduces multiple sources of variation—phenotyping, exposure imputation, covariate ascertainment—that can compound and lead to different conclusions. The use of a negative control outcome is a valuable diagnostic, but the fact that both CDMs showed unexpected associations for hip fracture indicates that neither approach fully controlled confounding.

---

### Domain Context
This study sits at the intersection of pharmacoepidemiology, health data science, and regulatory science. In Europe, the EMA's DARWIN EU initiative has adopted the OMOP CDM for rapid evidence generation, while other networks (e.g., ConcePTION, VAC4EU) use the ConcePTION CDM. The choice between these models has practical implications for study design, data curation, and analysis. The findings align with earlier work comparing OMOP to other CDMs (e.g., Mini-Sentinel) that found differences in effect estimates due to analytic choices. For pharmacometricians, this study underscores that the quality and consistency of exposure definitions (e.g., treatment duration) are critical for exposure-response analyses, and that data harmonization decisions can introduce systematic biases. The study also contributes to the ongoing debate about the trade-offs between efficiency (OMOP's pre-mapped standard vocabularies) and flexibility (ConcePTION's study-specific mapping).

---

## 📊 Key Findings
The study found that: (1) Study population size was ~5% larger in OMOP than ConcePTION, but follow-up time was ~7% longer in ConcePTION, largely due to longer imputed treatment durations for VKAs. (2) Baseline characteristics were broadly similar, but medication use (e.g., statins, beta-blockers) was recorded more frequently in ConcePTION, while corticosteroids and NSAIDs were more common in OMOP. (3) Incidence rates for major bleeding and hip fracture were similar, but CVD incidence was higher in ConcePTION (23.0 vs. 18.1 per 1000 PY) and stroke incidence was higher in OMOP (9.3 vs. 7.8 per 1000 PY). (4) DOACs showed a protective effect for CVD in OMOP (HR 0.82, 95% CI 0.74–0.90) but not in ConcePTION (HR 0.99, 95% CI 0.91–1.08). (5) Stroke risk was slightly elevated with DOACs in ConcePTION (HR 1.19, 95% CI 1.02–1.37) but not statistically significant in OMOP (HR 1.10, 95% CI 0.96–1.26). (6) Major bleeding risk was not increased in either CDM. (7) The negative control outcome (hip fracture) showed unexpected associations in both CDMs, more pronounced in ConcePTION (HR 1.80 vs. 1.32), suggesting residual confounding.

---

### Strengths & Limitations

#### Strengths
- Use of the same data source (CPRD GOLD) for both CDMs, eliminating database-level confounding
- Application of the same study protocol and outcome definitions across CDMs
- Inclusion of a negative control outcome (hip fracture) to assess residual confounding
- Transparent reporting of differences in mapping, imputation algorithms, and cohort construction
- Use of open-source analytical tools for the OMOP pipeline (Capr, CDMConnector, PatientProfiles)

#### Limitations (Acknowledged by Authors)
- The same analytic program cannot be used across CDMs due to differences in tools and data structures
- Single data source (CPRD GOLD) limits generalizability to other databases or CDM implementations
- Only three drug-outcome associations were studied; more extensive analyses are needed
- Matching of source codes to OMOP standard concepts may lead to different drug classifications
- No step-by-step comparison of algorithms or patient-level overlap analysis was performed

#### Limitations (Expert Review)
- Differences in treatment duration imputation algorithms (especially for VKAs) likely drove the observed differences in follow-up time and person-years
- The negative control outcome showed strong associations in both CDMs, indicating unmeasured confounding that may differentially affect effect estimates
- The study did not assess the impact of missing data or the completeness of covariate ascertainment across CDMs
- The lack of patient-level linkage prevents understanding of which patients are included/excluded by each CDM
- The study did not evaluate the impact of different phenotyping algorithms for NVAF or outcomes across CDMs

#### Generalizability
Results are specific to CPRD GOLD and the particular implementations of OMOP and ConcePTION CDMs used. Generalizability to other databases (e.g., hospital data, claims data) or other drug-outcome pairs is limited. The findings highlight that CDM choice can affect results, but the magnitude and direction of differences may vary across settings.

---

---

### Figures & Tables

- **Figure 1**: Study design diagram showing the cohort entry criteria, exposure definition, and follow-up period for both CDM approaches.
  - *Significance*: Provides a visual overview of the study design and highlights the parallel structure used for both CDMs.
- **Figure 2**: Incidence rates and number of events for major bleeding, stroke, cardiovascular disease, and hip fracture (negative control) in ConcePTION vs. OMOP CDM.
  - *Significance*: Shows differences in event counts and person-years between CDMs, particularly the longer follow-up in ConcePTION and divergent incidence rates for CVD and stroke.
- **Figure 3**: Forest plot of adjusted hazard ratios (DOAC vs. VKA) for major bleeding, stroke, CVD, and hip fracture, comparing ConcePTION and OMOP results.
  - *Significance*: Central figure demonstrating that CVD effect estimates differ significantly between CDMs (non-overlapping CIs), while other outcomes show overlapping CIs.
- **Table 1**: Baseline characteristics of the study population stratified by treatment (DOAC/VKA) and CDM (ConcePTION/OMOP).
  - *Significance*: Highlights differences in comorbidity and medication prevalence between CDMs, especially for corticosteroids, NSAIDs, statins, and beta-blockers.

---

### Code & Reproducibility Assessment
The OMOP analysis used open-source R packages (Capr, CDMConnector, PatientProfiles) available through OHDSI. The ConcePTION pipeline is described but not publicly shared. No code repository is mentioned. Reproducibility is limited by the proprietary nature of CPRD GOLD and the lack of shared analytical code.

---

### Supplementary Materials
Appendices S1 and S2 provide the drug and condition code lists used for both CDMs, including source codes and their mappings to ATC (ConcePTION) and RxNorm/SNOMED (OMOP).

---

### Future Directions
Future studies should extend this comparison to multiple databases and a broader set of drug-outcome pairs, perform patient-level overlap analyses to understand cohort composition differences, and systematically evaluate the impact of each step in the ETL and analytic pipeline. Additionally, the development of standardized sensitivity analyses for CDM choice would strengthen the robustness of multi-database studies.

---

### Expert Commentary
This study provides valuable empirical evidence that CDM choice is not neutral—it can alter effect estimates and potentially lead to different regulatory or clinical decisions. The use of a negative control outcome is a particular strength, as it reveals differential residual confounding. The findings underscore that harmonization is not a one-size-fits-all solution; researchers must understand the implicit choices embedded in each CDM. For the pharmacometrics community, this work highlights that data preprocessing decisions (e.g., exposure duration imputation) can have downstream effects on exposure-response analyses, even when the underlying data are the same.

---

### Bottom Line
Researchers and regulators should recognize that the choice of common data model can materially influence real-world evidence study results, particularly when imputed variables (e.g., treatment duration) and semantic mapping differ. Transparent reporting of mapping decisions, sensitivity analyses, and the use of negative control outcomes are essential to interpret and compare findings across CDMs.

---

---

## 📊 Figures

![A graphical depiction of the study design. (a) Comorbidities: pulmonary embolism, deep vein thrombosis, hypertension, diabetes mellitus, liver disease, cancer, a]({{ site.baseurl }}/assets/digests/2026-06-08-implementation-of-omop-and-conception-common-data-models-in-cprd-gold-risk-of/figures/fig_01.png)

![Incidence rate and number of events for major bleeding, stroke, cardiovascular disease and hip fracture (negative outcome) in CPRD GOLD using the ConcePTION CDM]({{ site.baseurl }}/assets/digests/2026-06-08-implementation-of-omop-and-conception-common-data-models-in-cprd-gold-risk-of/figures/fig_02.png)

![Cox proportional hazards regression of direct oral anticoagulants (DOACs) vs. vitamin K antagonists (VKAs) for the risk of major bleeding, any stroke, any cardio]({{ site.baseurl }}/assets/digests/2026-06-08-implementation-of-omop-and-conception-common-data-models-in-cprd-gold-risk-of/figures/fig_03.png)