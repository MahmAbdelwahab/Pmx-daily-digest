---
layout: post
title: "Systematic Evaluation of Data and Trial Fitness for Oncology Trial Emulation: Empirical Findings from the CARE Initiative"
date: 2026-06-05
authors: "Levy N, Sheridan P, Campbell U, Lenis D, O'Dougherty I, Estrin A, Gautam N, McDonald M, Madsen A, et al."
journal: "Clinical Pharmacology & Therapeutics (forthcoming), 2025"
doi: "10.1002/cpt.70310"
paper_type: generic
tags: [generic, oncology]
excerpt_text: "This CARE Initiative paper systematically assessed the feasibility of emulating 23 completed oncology RCTs using six US EHR-based RWD sources. Of 54 candidate RCT-RWD combinations, only three (from nine that advanced to detailed feasibility assessment) were ultimately selected for emulation protocol development. The study highlights the tension between curated, oncology-specific variables and the capture of non-cancer comorbidities needed to operationalize trial eligibility criteria."
pdf_path: "/assets/digests/2026-06-05-systematic-evaluation-of-data-and-trial-fitness-for-oncology-trial-emulation/PMx_Systematic_Evaluation_of_Data_and_Trial__20260605.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This CARE Initiative paper systematically assessed the feasibility of emulating 23 completed oncology RCTs using six US EHR-based RWD sources. Of 54 candidate RCT-RWD combinations, only three (from nine that advanced to detailed feasibility assessment) were ultimately selected for emulation protocol development. The study highlights the tension between curated, oncology-specific variables and the capture of non-cancer comorbidities needed to operationalize trial eligibility criteria.

---

### Executive Summary
This paper presents a systematic, multi-stage feasibility assessment framework for identifying fit-for-emulation RWD sources within the CARE Initiative. Six commercially available US EHR-based oncology data sources were evaluated against 23 completed oncology RCTs across realistic cancers. A structured feasibility screening (indication/outcome availability; sample size ≥1.5× enrollment per arm) whittled 54 candidate combinations to nine, which underwent detailed SPIFD2-based evaluation of availability, completeness, and validity of essential and supplemental design elements. Only three RCT-RWD combinations (KEYNOTE-189 emulated in two sources, PALOMA-2 emulated in one) were judged sufficiently feasible to proceed to protocol development. Key barriers included missing ECOG performance status, insufficient biomarker data, unreliable death ascertainment, and limited capture of non-cancer diagnoses, which are paradoxically underrepresented in high-quality curated oncology datasets. The authors recommend linkage of oncology-specific data to broader EHR/claims sources or customized abstraction to enhance fitness for emulation.

---

### Scientific Context & Motivation
Randomized controlled trials (RCTs) remain the gold standard for establishing oncology treatment efficacy, but face logistical and ethical hurdles. Real-world evidence (RWE) derived from electronic health records (EHRs) and claims data can complement RCT findings, but causal inference from non-interventional studies is vulnerable to confounding and measurement error. RCT emulation—replicating trial design features using observational data—offers a methodological strategy to compare RWE against RCT benchmarks, but critically depends on identifying RWD that can accurately operationalize trial-specific populations, treatments, outcomes, and confounders. Existing fit-for-purpose frameworks (e.g., SPIFD2) were developed for general non-interventional studies; their applicability to oncology RCT emulation—where eligibility criteria are more complex and oncology-specific data elements (ECOG, biomarkers, RECIST-based progression) are required—had not been systematically tested. The CARE Initiative addresses this gap by conducting rigorous data feasibility assessment before emulation, providing empirical evidence on the practical constraints of current RWD sources for this purpose.

---

## ⚡ Methodological Snapshot
The study employed a staged feasibility framework. First, 23 completed oncology RCTs (2015–2020, common tumor types, active comparator, FDA approval) were identified from CenterWatch and FDA repositories. Six US EHR-derived RWD sources (ConcertAI, COTA, Loopback, Tempus, TriNetX, XCures) were considered as candidate data sources. Screen 1 verified whether the trial indication and treatments were present in each RWD source. Screen 2 required ≥1.5× the RCT enrollment per arm for patients with the indication and treatment of interest. The 10 remaining RCT-RWD combinations entered a detailed assessment using a modified Structured Process to Identify Fit-For-Purpose Data (SPIFD2) framework. Each trial's design elements (inclusion/exclusion criteria, outcomes, confounders) were extracted and classified as essential (critical for internal validity) or supplemental (important but not critical for validity). Two criteria (RECIST measurable disease, tumor sample provision) were deemed inherently infeasible for emulation and designated as not applicable. Each element was then rated on a 1–5 scale based on availability (presence of variable), completeness (proportion of patients with non-missing values), and validity (curated versus uncurated; externally validated). Ratings were performed independently by at least two team members, with consensus required. Overall feasibility (1–5) was assigned based primarily on essential element ratings and refined sample size estimates. This process identified three feasible emulations for protocol development.

---

## 📋 Detailed Analysis
The core contribution of this paper is not in statistical methodology but in operationalizing a transparent feasibility pipeline that can serve as a template for other multi-database emulation initiatives. Several aspects merit deeper consideration:

**1. The 1.5× sample size multiplier.** This threshold, while pragmatic, is a critical design choice without formal justification. The authors argue it accounts for expected attrition from additional inclusion/exclusion criteria, but the actual attrition varies greatly by trial. For example, a RCT with highly restrictive biomarker criteria (e.g., EGFR wild-type) applied to an EHR source with 50-60% biomarker completeness will lose 40-50% of patients—far more than a 1.5× buffer. A more rigorous approach would be to simulate expected patient counts after sequentially applying the most restrictive criteria, using observed completeness proportions from the RWD source. This would also allow probabilistic thresholds (e.g., 80% power to detect the expected effect size). Nevertheless, the authors correctly note that Screen 2 was 'intentionally broad' for rapid triage.

**2. The essential vs. supplemental classification.** The distinction between inclusion criteria (essential) and exclusion criteria (supplemental) is a pragmatic choice, but it potentially conflates internal and external validity. In a target trial emulation, both inclusion and exclusion criteria define the target population, and failure to enforce exclusions (e.g., prior pneumonitis) can introduce confounding if that condition is also a predictor of outcome. The authors acknowledge that supplemental elements were 'considered qualitatively,' but this introduces subjectivity. A more formal sensitivity analysis (e.g., using quantitative bias analysis to assess the impact of partially operationalizing exclusion criteria) would strengthen the framework.

**3. Missingness interpretation.** The issue of how to interpret missing data for non-cancer comorbidities is a critical insight: in EHR data, absence of a diagnosis code may mean the patient does not have the condition or simply that the condition was not documented. The authors correctly note that for ECOG, the denominator is known (all patients have a true performance status), so missingness is well-defined. For comorbidities, however, they acknowledge that 'completeness could not be ascertained.' This has implications for rating assignment—Data Source 4 received lower ratings (2) for non-cancer variables due to 'populated for 40-50% of patients,' but this could represent true low prevalence of autoimmune disease in the metastatic NSCLC population, not data quality failure. The framework would benefit from distinguishing between 'true missingness' and 'absence of evidence'.

**4. The data source selection paradox.** The finding that curated oncology sources (rich in ECOG, biomarkers, progression) lack non-cancer data is perhaps the most operationally impactful result. It creates a fundamental trade-off: choose a source with high oncology data completeness but poor comorbidity capture (potentially biasing the emulated population toward healthier patients with better prognosis), or choose a broader source with adequate comorbidity data but poorer tumor-specific measures (increasing misclassification of the indication and outcomes). The authors' recommendation of data linkage is sensible but expensive. An alternative analytic approach not discussed here is to use multiple imputation or missingness indicators to handle the partially observed exclusion criteria, though this would require assumptions about the missing data mechanism.

---

### Domain Context
This paper sits at the intersection of pharmacoepidemiology, clinical pharmacology, and oncology real-world evidence methodology. Within pharmacometrics, the concept of 'fit-for-purpose' data is familiar from population PK/PD analyses where covariate completeness and dosing records are critical, but the added complexity of RCT emulation—where every element of the trial protocol must be operationalized—is a new dimension. The SPIFD2 framework used here was originally developed for non-interventional study design in general, but the CARE modifications reflect the unique demands of oncology: biomarker-driven eligibility, performance status as a key confounder, RECIST-based progression endpoints that must be translated to 'real-world progression' using radiology reports, and the need to distinguish first-line from later-line therapy. The emphasis on death ascertainment quality (curated vs. vendor-reported vs. externally validated) is also oncology-specific because overall survival remains a primary endpoint. For pharmacometricians involved in model-based meta-analysis or external control arm construction, these data feasibility considerations are directly transferable: a non-interventional study designed to match an RCT population must confront exactly these challenges, and the CARE framework provides a structured approach to documenting and selecting data sources accordingly.

---

## 📊 Key Findings
1) Of 54 candidate RCT-RWD combinations, 44 failed at initial screening due to unavailable trial indication/outcome or insufficient sample size (<1.5× enrollment per arm). 2) Only nine of 10 remaining combinations entered detailed SPIFD2-based feasibility assessment; one was selected for pilot emulation. 3) Overall feasibility ratings ranged from 2 (lowest) to 5 (highest) across data sources. The highest-rated combinations required curated oncology-specific variables (ECOG, histology, biomarker results, progression, death) with high completeness and validity. 4) Data sources with the most comprehensive oncology curation (e.g., curated lines of therapy, biomarker results, progression) paradoxically lacked information on non-cancer diagnoses/treatments, making it difficult to fully operationalize RCT exclusion criteria (e.g., prior pneumonitis, autoimmune disease, prior radiation). 5) Three emulations were ultimately selected: KEYNOTE-189 in two sources (ratings 5 and 4) and PALOMA-2 in one source (rating 5). 6) Data Source 1 received the lowest scores (rating 2) due to missing performance status and progression data. 7) The ASCEND emulation was feasible on data quality grounds (rating 5) but was dropped due to insufficient sample size.

---

### Strengths & Limitations

#### Strengths
- Systematic, multi-stage feasibility framework that transparently documents attrition from 54 candidate combinations to 3 final emulations, providing a clear empirical benchmark
- Application of a modified SPIFD2 process with explicit distinction between essential (internal validity) and supplemental (external validity) design elements tailored to RCT emulation
- Independent dual review of data element ratings with expert Steering Committee input to reduce subjectivity
- Detailed granularity of assessment—availability, missingness, validity assessed per variable across multiple data sources (example Table 2 for KEYNOTE-189 is exemplary)
- Real-world relevance: findings directly inform practical decisions for researchers selecting RWD for oncology emulation studies

#### Limitations (Acknowledged by Authors)
- Only six US-based, commercially available EHR-derived RWD sources were considered; the universe of potential sources is larger, and results may not generalize to other US or global datasets
- Ratings involved subjectivity, especially where completeness could not be ascertained; no formal interrater agreement metrics were calculated
- Small differences in element/overall ratings between data sources should not be overinterpreted as superiority
- Complex analytic challenges (time-varying confounding, treatment crossover) were outside scope of this feasibility assessment

#### Limitations (Expert Review)
- The stepwise screening (Screen 2) required sample size ≥1.5× trial enrollment per arm, but this threshold is arbitrary and may have excluded combinations that could have achieved adequate power after applying broader inclusion/exclusion criteria
- The 'overall rating' integrates availability, missingness, and validity into a single 1–5 ordinal score using thresholds (e.g., missingness >30% vs. >40%) with limited justification for cut-point selection
- Despite using modified SPIFD2, the paper does not report sensitivity or specificity of the feasibility rating system against eventual emulation success (e.g., whether rating 4+ reliably predicts concordance with RCT results)
- No formal power calculation or simulation-based sample size justification was provided for the 1.5× multiplier; attrition may vary substantially by specific eligibility criteria
- The exclusion of trials with 'very recent drug approvals' or 'novel biomarker assessment' may have biased the candidate trials toward those more feasible to emulate, potentially overestimating overall feasibility

#### Generalizability
The findings are directly applicable to US-based oncology RCT emulation studies using commercially available EHR data (ConcertAI, COTA, Loopback, Tempus, TriNetX, XCures). The emphasis on curated versus non-curated data elements and the trade-off between oncology-specific detail and non-cancer coverage likely extends to other oncology-focused RWD platforms, but the specific ratings may not generalize to claims-based datasets, non-US healthcare systems, or rare cancer indications with very small patient counts. The stepwise framework can be adapted, but absolute thresholds and the mix of data sources available will vary.

---

---

### Figures & Tables

- **Figure 1**: Flow diagram showing the stepwise selection process from 23 candidate RCTs and 6 RWD sources (54 combinations) through screening (Screen 1, Screen 2), detailed SPIFD2-based feasibility assessment, to final selection of three emulations for protocol development.
  - *Significance*: Provides a visual summary of the entire feasibility pipeline and attrition, illustrating that only ~5.6% of candidate combinations advanced to protocol development.
- **Table 1**: Definition of overall feasibility ratings (1–5) based on composite of availability, missingness (%), and validity (curated/externally validated).
  - *Significance*: Establishes the standardized rating rubric used across all nine detailed assessments, enabling comparability and transparency.
- **Table 2**: Detailed SPIFD2-based feasibility assessment for KEYNOTE-189 emulation in three RWD sources (DS2, DS3, DS4), including ratings for each inclusion criterion, exclusion criterion, outcome, and confounder.
  - *Significance*: Exemplar of the depth of assessment, showing how specific variables (e.g., ECOG, biomarker, death ascertainment) drive overall ratings. Essential for understanding why DS3 received rating 5 and DS4 received rating 4.
- **Table 3**: Summary of all nine detailed feasibility assessments across different RCT-RWD combinations, listing overall rating and key rating determinants.
  - *Significance*: Provides the aggregated evidence base for the final selection of three emulations and reveals patterns—DS1 consistently rated 2, DS3 and DS4 achieved higher scores but for different RCTs.

---

### Code & Reproducibility Assessment
Not applicable—this is a qualitative feasibility assessment study with no statistical or computational code. The SPIFD2 framework and rating methodology are described in sufficient detail for reproduction by other research teams.

---

### Future Directions
1) Empirical validation of whether feasibility ratings (e.g., 4+) actually predict concordance between emulation results and original RCT findings once the three selected emulations are completed. 2) Development and testing of data linkage strategies to combine curated oncology-specific data with broader EHR/claims sources to simultaneously capture high-quality tumor metrics and non-cancer comorbidity information. 3) Formalization of interrater reliability metrics for SPIFD2-based feasibility ratings to reduce subjectivity. 4) Expansion to non-US RWD sources and to additional tumor types with different data capture patterns (e.g., brain tumors, sarcomas). 5) Incorporation of time-varying confounding and crossover adjustment into the feasibility assessment framework for more comprehensive fitness evaluation.

---

### Expert Commentary
As a pharmacometrician, I appreciate the CARE Initiative's commitment to transparent, pre-specified data fitness evaluation—a step too often skipped in real-world studies. The structured SPIFD2 adaptation addresses a real need in oncology, where the gap between trial-grade and real-world data quality is particularly wide. The finding that the most oncology-rich data sources lack non-cancer data is a critical practical insight: it forces us to choose between internal validity (well-curated tumor metrics) and external validity (ability to capture the narrow trial-eligible population). For pharmacometricians planning to use RWD for external control arms or exposure-response analyses, the trade-off described here is directly analogous—we cannot simply assume any oncology dataset will suffice. The authors' call for data linkage is well-founded, but cost and privacy constraints remain substantial. The 1.5× sample size multiplier seems reasonable but arbitrary; a simulation-based approach accounting for expected eligibility criterion attrition would strengthen the framework. I look forward to the actual emulation results—they will test whether the feasibility ratings correlate with result concordance, which is the ultimate validation.

---

### Bottom Line
Before emulating any oncology RCT with RWD, researchers must conduct a rigorous, transparent, multi-stage feasibility assessment that operationalizes trial-specific eligibility criteria (including complex biomarker and performance status requirements), outcomes (survival, progression), and confounders. Current curated oncology EHR sources offer high-quality data for key disease-specific variables but often lack information on non-cancer comorbidities and prior treatments needed to enforce RCT exclusion criteria. Linkage to broader data sources or customized abstraction will be necessary to improve fit-for-emulation data fitness. This paper provides a concrete framework and empirical benchmarks for such assessments.

---

---

## 📊 Figures

![Overview of the selection process for CARE initiative oncology trial emulations.]({{ site.baseurl }}/assets/digests/2026-06-05-systematic-evaluation-of-data-and-trial-fitness-for-oncology-trial-emulation/figures/fig_01.jpg)