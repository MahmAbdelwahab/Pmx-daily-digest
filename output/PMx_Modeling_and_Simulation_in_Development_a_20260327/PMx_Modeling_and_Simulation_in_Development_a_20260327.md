---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: March 27, 2026

## Paper 1: Modeling and Simulation in Development and Regulatory Approval of Chimeric Antig

### Bibliographic Information
- **Title**: Modeling and Simulation in Development and Regulatory Approval of Chimeric Antigen Receptor T-Cell Therapies: An Analysis of European Medicines Agency Centralized Procedures From 2018 to 2024
- **Authors**: Hanquet L, Dogné JM, Musuamba FT
- **Journal**: CPT: Pharmacometrics & Systems Pharmacology, 2026;15(4):e70213
- **DOI**: [https://doi.org/10.1002/psp4.70213](https://doi.org/10.1002/psp4.70213)

### Quick Take
Essential reading for regulatory scientists and pharmacometricians involved in cell therapy development. This paper provides a critical gap analysis showing that despite regulatory encouragement, modeling and simulation remains underutilized in CAR-T submissions (only 26% of regulatory questions addressed), with simpler empirical models preferred over complex mechanistic approaches described in academic literature. The structured repository and credibility framework offer practical tools for improving future submissions.

---

### Executive Summary
This study systematically reviews the use of modeling and simulation (M&S) in European regulatory submissions for six approved CAR-T therapies (Kymriah, Yescarta, Tecartus, Abecma, Breyanzi, Carvykti) from 2018-2024. Using a question-centric approach aligned with ICH M15 guidelines, the authors extracted 164 regulatory questions across biological scales (molecular to population), finding that only 26.4% were addressed via M&S, predominantly for PK characterization (popPK) rather than efficacy or safety. The analysis reveals a significant disconnect between sophisticated quantitative systems pharmacology (QSP) and physiologically-based pharmacokinetic (PBPK) models published in academic literature and the simpler empirical models (exposure-response, Cox proportional hazards) submitted to regulators. A credibility assessment framework highlights methodological heterogeneity and generally limited regulatory impact. The study establishes a structured repository to improve transparency and consistency, suggesting that broader adoption of model-informed drug development could enhance decision-making for these complex individualized therapies, particularly in orphan indications where traditional randomized trials are infeasible.

---

## ⚡ Methodological Snapshot
The authors conducted a comprehensive retrospective review of European regulatory documentation for all six CAR-T therapies approved in the EU between 2018-2024. They extracted data from European Public Assessment Reports (EPARs) and selected eCTD modules, translating regulatory findings into 164 structured questions organized by domain (pharmacokinetics, efficacy, safety, benefit-risk) and biological scale (molecular, cellular, tissular, individual, population). This question-centric approach, aligned with ICH M15 guidelines, allowed systematic categorization of how different data types inform regulatory decision-making. Modeling approaches were identified through targeted keyword searches and classified into population pharmacokinetic (popPK), exposure-response (E-R), and time-to-event (TTE) models. For each modeling application, the authors completed a credibility assessment matrix evaluating context of use, model influence, consequence of wrong decision, model risk, and regulatory impact. The methodology also involved benchmarking M&S approaches against conventional non-modeling methods to assess methodological consistency across submissions.

---

## 🏗️ Structural Model Breakdown
The paper identifies three primary model structures in regulatory submissions: (1) Population pharmacokinetic (popPK) models describing CAR-T cell expansion and persistence using empirical compartmental structures (typically one or two compartments) with exponential or sigmoid growth and decay functions; (2) Exposure-response (E-R) models linking exposure metrics (Cmax, AUC, cell counts) to binary or continuous efficacy endpoints (tumor response rates) and safety outcomes (cytokine release syndrome grades, neurotoxicity), utilizing linear, log-linear, or sigmoid Emax structures; and (3) Time-to-event (TTE) models, predominantly Cox proportional hazards models with covariates, for survival outcomes (progression-free survival, overall survival). The models were consistently empirical rather than mechanistic, lacking the biological complexity seen in academic literature—specifically omitting T-cell differentiation states (naive, effector, memory), cytokine kinetics (IL-6, IFN-gamma), tumor microenvironment interactions, or receptor occupancy dynamics. Only 8 submissions attempted multivariable integration of PK, efficacy, and safety for benefit-risk assessment. Bayesian models appeared limited to validation of release specification methods rather than clinical outcome prediction.

---

### Detailed Methodological Analysis

#### Modeling Approach
Retrospective review of regulatory documentation using a question-centric approach (ICH M15). Questions were classified hierarchically across four domains (PK, efficacy, safety, benefit-risk) and five biological scales (molecular, cellular, tissular, individual, population). M&S approaches were identified via keyword search ('model' excluding 'in vitro' and 'in vivo') and categorized as popPK, E-R, or TTE models. A structured credibility matrix was populated for each M&S application per ICH M15 guidelines.

#### Data Sources
European Public Assessment Reports (EPARs) and selected electronic Common Technical Document (eCTD) modules for six authorized CAR-T cell products: tisagenlecleucel (Kymriah), axicabtagene ciloleucel (Yescarta), brexucabtagene autoleucel (Tecartus), idecabtagene vicleucel (Abecma), lisocabtagene maraleucel (Breyanzi), and ciltacabtagene autoleucel (Carvykti). The dataset included 6 initial marketing authorizations and 9 Type II variations for line extensions. Clinical data comprised predominantly single-arm Phase 1 and 2 studies for initial approvals, sometimes supplemented with real-world data and literature, while extensions included Phase 2 or 3 confirmatory studies. Non-clinical data was 79% in vitro due to lack of relevant animal models for CAR-T cells.

#### Estimation Methods
Specific estimation algorithms (FOCE, SAEM, Bayesian MCMC) were not detailed in the extracted regulatory documentation. The study identified three primary model types: population pharmacokinetic (popPK) models, exposure-response (E-R) models using linear or sigmoid Emax structures, and time-to-event (TTE) models predominantly using Cox proportional hazards. Bayesian approaches were noted only for validation of specification methods related to release and stability acceptance criteria.

#### Model Evaluation
Credibility assessment was performed using the ICH M15 framework, evaluating: (1) context of use (question of interest), (2) model influence (low/medium/high), (3) consequence of wrong decision, (4) model risk (low/medium/high), and (5) regulatory impact. Model risk was determined by combining influence and consequence. Benchmarking compared M&S approaches against traditional non-M&S methods (descriptive statistics, standard biostatistics) for the same regulatory questions. No quantitative metrics (prediction errors, VPC coverage) were extractable from the public documentation.

#### Covariate Analysis
Covariate analyses were performed as part of popPK and exposure-response models, with covariates including sex, weight, age, and disease burden. Selection methods included Akaike Information Criterion (AIC) and significance testing. However, detailed covariate selection procedures (forward addition/backward elimination, stepwise approaches) were not explicitly described in the regulatory documentation reviewed.

---

### Scientific Context & Motivation
CAR-T therapies face unique development challenges: autologous manufacturing complexity, small eligible patient populations (orphan indications), lack of relevant animal models for non-clinical testing, and reliance on single-arm early-phase trials rather than randomized controlled studies. While modeling and simulation (M&S) theoretically offers solutions for these challenges—particularly for dose optimization, extrapolation, and integrating manufacturing variability with clinical outcomes—regulatory uptake has been slow and inconsistent. This work addresses the critical need for structured evaluation of M&S credibility in the context of advanced therapy medicinal products (ATMPs), filling a gap between theoretical M&S capabilities (quantitative systems pharmacology, PBPK, multiscale models) and actual regulatory practice. It builds upon the recently finalized ICH M15 guideline's question-centric approach to assess how model-based evidence is currently utilized versus its potential, providing the first systematic analysis of M&S in CAR-T regulatory submissions.

---

### Statistical Rigor Assessment
As a descriptive review of regulatory documentation, the study does not involve traditional statistical inference. The sample represents a complete census of EU-approved CAR-T therapies (n=6 products, 164 questions, 28 M&S applications), eliminating sampling bias but limiting generalizability to other ATMP classes. The authors acknowledge significant limitations in data granularity: reliance on public EPARs and selected eCTD modules rather than full clinical study reports, statistical analysis plans, or patient-level data. This constrained the ability to assess technical modeling details (estimation methods, diagnostic criteria, predictive performance). The credibility assessment is qualitative based on reported regulatory impact. Temporal bias exists as most first-in-human studies were conducted before 2020, potentially understating current M&S adoption. The study explicitly tracks missing data, noting 59.9% of questions were unaddressed at initial marketing authorization, with an additional 14.5% addressed through bridging submissions.

---

## 📊 Key Findings
Of 164 regulatory questions identified across six EU-approved CAR-T therapies, only 40.1% were explicitly addressed at initial marketing authorization, with M&S approaches used for 26.4% of questions (n=28). Pharmacokinetic characterization dominated M&S applications (63.6% of population-level PK questions addressed via popPK models), while efficacy modeling was less common (21.6% population, 5.0% cellular levels), and safety modeling was rare (7.4% population, 6.5% cellular, 12.5% molecular levels). M&S utilization increased with development phase: 0.6% in first-in-human, 12.2% in Phase 1/2 (conditional MA), and 32.7% in Phase 3 confirmatory studies. Models in regulatory submissions were consistently simpler than academic counterparts—empirical popPK and exposure-response models versus physiologically-based and quantitative systems pharmacology models incorporating T-cell phenotypes, cytokine dynamics, and tumor microenvironment interactions. Only 8 cases integrated PK, efficacy, and safety into multivariable frameworks for comprehensive benefit-risk assessment. Bayesian methods appeared limited to validation of release specification methods.

---

## 💡 Clinical & Regulatory Implications
The limited use of M&S for safety characterization—particularly for cytokine release syndrome (CRS) and immune effector cell-associated neurotoxicity syndrome (ICANS)—represents a critical missed opportunity for dose optimization and toxicity mitigation in these high-risk therapies. The reliance on empirical rather than mechanistic models may limit extrapolation to new indications, pediatric populations, or modified manufacturing processes. The study suggests that broader adoption of model-informed drug development (MIDD) could specifically support: (1) dose selection and optimization in early phases where traditional dose-ranging is infeasible; (2) extrapolation to earlier treatment lines (second-line vs. third-line) based on exposure-response relationships; (3) bridging across conditions of use for lifecycle management; and (4) integration of manufacturing variability (potency, transduction efficiency) with clinical outcomes. However, current regulatory impact remains predominantly "low" to "medium" per ICH M15 criteria, indicating models serve as supportive rather than primary evidence, which may limit their influence on label claims.

---

### Strengths & Limitations

#### Strengths
- Complete census of all EU-approved CAR-T therapies (no sampling bias)
- Novel application of question-centric approach (ICH M15) to ATMP regulatory science
- Structured repository across biological scales provides framework for future submissions
- Systematic credibility assessment using standardized ICH M15 criteria
- Clear comparison between regulatory practice and academic literature capabilities
- Explicit tracking of unanswered questions (59.9%) highlighting evidence gaps
- Identification of specific opportunities for M&S expansion (safety, mechanistic modeling)

#### Limitations (Acknowledged by Authors)
- Reliance on public EPARs and selected eCTD modules rather than full technical documentation (clinical study reports, statistical analysis plans, patient-level data)
- Most first-in-human studies conducted before 2020, potentially not reflecting current M&S practices
- 37 questions identified where M&S is not foreseen (manufacturing process, drug quality, standard biostatistical analyses)
- Heterogeneity in submission quality and documentation detail across sponsors
- Limited access to quantitative model performance metrics (GOF, VPC, bootstrap results) from public documents

#### Limitations (Expert Review)
- Descriptive/observational design limits causal inference about why M&S is underutilized
- Potential selection bias (only approved products included; failed submissions may have different M&S patterns)
- Small absolute number of M&S applications (n=28) limits power to detect predictors of regulatory acceptance
- Lack of quantitative comparison between regulatory and academic models (complexity assessed qualitatively)
- No assessment of whether simpler models were chosen due to data limitations or regulatory conservatism
- Temporal confounding: regulatory landscape evolved during study period (ICH M15 finalized 2025)

#### Generalizability
Findings are highly generalizable to CAR-T therapies specifically (complete census of EU-approved products through 2024) but limited in extension to other ATMPs (gene therapies, allogeneic cell therapies) or traditional small molecules. The temporal scope (studies largely pre-2020) may not reflect evolving practices as ICH M15 implementation progresses.

---


---

### Figures & Tables

- **Figure 1**: Flow diagram summarizing the retrospective methodology from document extraction (EPARs, eCTDs) through question formulation to repository building and credibility assessment.
  - *Significance*: Provides the systematic framework for how the authors translated regulatory documentation into structured questions, serving as a reproducible template for similar analyses of other therapeutic modalities.
- **Figure 2**: Hierarchical framework illustrating how benefit-risk assessment is supported by characterization of PK, efficacy, and safety across biological scales (molecular, cellular, tissular, individual, population).
  - *Significance*: Conceptual backbone of the repository showing the interconnectedness of questions across scales and domains; clarifies how molecular/cellular data inform population-level benefit-risk.
- **Figure 3**: Overview of non-clinical and clinical studies supporting marketing authorizations and line extensions across the six CAR-T products, showing predominance of in vitro studies (79%) due to lack of relevant animal models.
  - *Significance*: Highlights the data heterogeneity and limitations facing CAR-T development, explaining why M&S is theoretically valuable yet practically underutilized.
- **Figure 4**: Distribution of the 164 regulatory questions across domains (PK, efficacy, safety, benefit-risk) and biological scales, with overlay of M&S utilization rates showing 63.6% for PK vs. 7.4% for safety at population level.
  - *Significance*: Core results visualization demonstrating the skewed application of M&S toward PK and away from safety; essential for understanding current gaps in regulatory science.
- **Figure 5**: Temporal overview of M&S utilization across development phases, showing progression from 0.6% in first-in-human to 12.2% in Phase 1/2 (conditional MA) to 32.7% in Phase 3 confirmatory studies.
  - *Significance*: Demonstrates that M&S adoption increases with development maturity but remains minimal in early phases where it could most influence development decisions.
- **Figure 6**: Example credibility assessment matrix per ICH M15 for dose selection using exposure-response models, evaluating context of use, model influence (medium), consequence of wrong decision (high), model risk (medium/high), and regulatory impact (medium).
  - *Significance*: Practical application of the ICH M15 credibility framework to CAR-T development, illustrating how model risk is determined by decision consequences rather than just statistical complexity.
- **Table 1**: Cross-tabulation of specific regulatory questions (dose-efficacy, exposure-response, genotoxicity, dose-safety) across the six drugs, indicating which used M&S vs. non-M&S methods and the model impact rating per ICH M15.
  - *Significance*: Provides granular comparison showing inconsistency in M&S application across sponsors for similar questions; reveals that PK questions are consistently modeled while efficacy/safety questions show heterogeneous approaches.

---



### Future Directions
The authors propose several critical extensions: (1) expanding the repository to include Pediatric Investigation Plans (PIPs) and scientific advice documents to capture early regulatory interactions; (2) validating academic QSP and PBPK models for regulatory use, particularly for safety endpoints (CRS, neurotoxicity); (3) developing harmonized M&S methodologies across sponsors to reduce heterogeneity; (4) integrating manufacturing process data (potency, transduction efficiency) with clinical outcome models; (5) prospective application of ICH M15 credibility frameworks to establish fit-for-purpose criteria for CAR-T models; (6) exploration of Bayesian approaches for release specification validation; and (7) extension of the repository framework to other advanced therapy medicinal products (gene therapies, stem cells). The study also raises questions about whether the observed underutilization reflects temporal bias (most FIH studies pre-dating 2020) or fundamental barriers to mechanistic model acceptance in ATMP regulation.

---

### Expert Commentary
This paper provides a sobering reality check for the pharmacometrics community. Despite decades of developing sophisticated QSP and systems pharmacology models for immunotherapy, regulatory submissions remain anchored in empirical popPK and simple exposure-response analyses. The 'credibility gap' identified—where academic complexity meets regulatory pragmatism—reflects both the need for better qualification of mechanistic models and the conservative nature of advanced therapy medicinal product (ATMP) regulation. The question-centric approach is a valuable methodological contribution, aligning with ICH M15 implementation. However, the strikingly low utilization of M&S for safety (CRS, ICANS) is particularly concerning given the well-characterized exposure-toxicity relationships for these toxicities. The field must move beyond 'descriptive' models to 'predictive' models that can support dosing in special populations and novel indications. This work should prompt sponsors to reconsider their M&S strategies early in development, particularly for complex modalities where traditional dose-finding is impossible. The comparison between regulatory and academic models suggests that mechanistic models need better validation frameworks to gain regulatory acceptance for high-impact decisions.

---

### Bottom Line
For pharmacometricians working in cell therapy, this paper demonstrates that current regulatory submissions underutilize M&S capabilities, particularly for safety and mechanistic understanding. While popPK and E-R models are accepted, there is significant opportunity to incorporate QSP and multiscale models to address the unique challenges of CAR-T therapies (manufacturing variability, cytokine dynamics, tumor microenvironment). The structured repository and ICH M15 credibility framework provide a roadmap for increasing regulatory confidence. Practitioners should aim to implement M&S earlier in development, ensure models are fit-for-purpose with appropriate credibility documentation, and bridge the gap between academic sophistication and regulatory utility by focusing on questions that matter for decision-making.

---

---

## 📊 Figures



```{=typst}
#pagebreak(weak: true)
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: Flow diagram of the methodology used for repository building from CAR-T cell submissions. Flow diagram summarizing the retrospective process used to build the re],
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [FIGURE 2: General structure of the repository harmonized from different use-cases. Framework illustrating how benefit–risk assessment is supported by the characterization],
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 3: Comparison of number of studies across approved CAR-T cells. Overview of the non-clinical and clinical studies that support marketing authorizations and line ext],
) <fig-3>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [FIGURE 4: Overview of the repository of key regulatory and methodology questions. Distribution of regulatory questions extracted from CAR-T cell submissions is presented i],
) <fig-4>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [FIGURE 5: Use of M&S methods across drug development of CAR-T cells on the market. Temporal overview of the use of modeling and simulation (M&S) across CAR-T cell developm],
) <fig-5>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_06.jpg", width: 90%),
  caption: [FIGURE 6: Example of method benchmarking including credibility assessment through the ICH M15 table for assessment of MIDD evidence. Example of application of a credibilit],
) <fig-6>
#set page(flipped: false)
```

