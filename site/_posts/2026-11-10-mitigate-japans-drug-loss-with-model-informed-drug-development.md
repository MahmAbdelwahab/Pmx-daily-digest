---
layout: post
title: "Mitigate Japan's Drug Loss With Model-Informed Drug Development."
date: 2026-11-10
authors: "Yasuhiko Imai, Emi Akatsu, Suzanne K. Minton"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70126"
paper_type: generic
tags: [generic, pbpk, qsp, pediatrics, oncology, regulatory, machine-learning, meta-analysis]
excerpt_text: "Japan faces an acute 'drug loss' crisis where approximately 70% of novel therapeutics approved by the US FDA and EMA between 2016 and 2020 remain unavailable domestically, particularly in rare diseases and pediatric oncology. The authors argue that end-to-end Model-Informed Drug Development (MIDD)—leveraging QSP, PBPK, popPK/PD, and MBMA, further enhanced by AI/ML—is vital to bridge data gaps, reduce domestic trial burdens, and accelerate regulatory alignment between Western sponsors and the PMDA."
pdf_path: "/assets/digests/2026-11-10-mitigate-japans-drug-loss-with-model-informed-drug-development/PMx_Mitigate_Japans_Drug_Loss_With_ModelInfo_20261110.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
Japan faces an acute 'drug loss' crisis where approximately 70% of novel therapeutics approved by the US FDA and EMA between 2016 and 2020 remain unavailable domestically, particularly in rare diseases and pediatric oncology. The authors argue that end-to-end Model-Informed Drug Development (MIDD)—leveraging QSP, PBPK, popPK/PD, and MBMA, further enhanced by AI/ML—is vital to bridge data gaps, reduce domestic trial burdens, and accelerate regulatory alignment between Western sponsors and the PMDA.

---

### Executive Summary
In this perspective, Imai and colleagues address the critical structural problem of 'drug loss' in Japan, defined as innovative therapies approved overseas (US/EU) that are never developed, submitted, or authorized in Japan. Unlike historical 'drug lag' (delayed approvals), drug loss represents total abandonment of the Japanese market, affecting over 50% of US drugs from emerging biopharma companies. Key drivers include the absence of Japanese subjects in global registration trials, domestic pricing pressures, lack of local infrastructure among emerging biopharmas, and stringent local Phase I PK requirements. The authors advocate for an integrated pharmacometrics roadmap: Quantitative Systems Pharmacology (QSP) for disease and target validation, Physiologically Based Pharmacokinetics (PBPK) for pediatric scaling, ethnic sensitivity, and DDI risk, and population PK/exposure-response (popPK/ER) coupled with Model-Based Meta-Analysis (MBMA) to support bridging and label claims. Integrating artificial intelligence and machine learning (AI/ML) into MIDD workflows can further automate model generation, dimension reduction, and clinical trial scenario exploration, facilitating streamlined entry into the Japanese regulatory landscape.

---

### Scientific Context & Motivation
Historically, Japan faced 'drug lag'—extended timelines between Western approvals and domestic authorization due to mandatory local Phase I and bridging studies under ICH E5. While PMDA reforms and participation in multi-regional clinical trials (MRCTs under ICH E17) alleviated lag for large multinational pharmaceutical sponsors, the shift of early-stage innovation to emerging biopharma companies (EBPs) has created a structural 'drug loss.' Emerging biopharma sponsors frequently lack Japanese affiliates, capital, and regulatory bandwidth to navigate Japanese pricing constraints and PMDA submission demands. Consequently, approximately 85% of FDA/EMA-approved products not approved in Japan between 2016 and 2022 omitted Japanese cohorts entirely, legally barring clinical trial application (CTA) submissions or marketing authorization filings. This gap is most devastating in pediatric oncology and rare diseases, where absolute patient populations are small and standalone domestic randomized trials are statistically and ethically unfeasible.

---

## ⚡ Methodological Snapshot
This paper presents a conceptual, regulatory-pharmacometrics policy framework rather than an empirical clinical trial or novel mathematical algorithm. The authors synthesize epidemiological drug availability data from US FDA, European EMA, and Japanese PMDA databases spanning 2016 to 2023, cross-referencing industry benchmarking reports (e.g., Boston Consulting Group, AMED reports) to characterize drug loss.

The authors systematically review the application of four core MIDD pillars across development phases: Quantitative Systems Pharmacology (QSP) in target discovery and preclinical validation; Physiologically Based Pharmacokinetics (PBPK) in First-in-Human and Phase I for ethnic and pediatric exposure predictions; Population PK and Exposure-Response (popPK/ER) modeling in Phase II/III for dose selection; and Model-Based Meta-Analysis (MBMA) for cross-study efficacy benchmarking and real-world evidence (RWE) integration.

Finally, the methodology incorporates a forward-looking technological synthesis detailing how machine learning techniques (e.g., reinforcement learning, Bayesian optimization, high-dimensional dimension reduction) interface with mechanistic pharmacometrics to automate trial design exploration and patient selection.

---

## 📋 Detailed Analysis
The transition from 'drug lag' to 'drug loss' in Japan represents a paradigm shift with profound implications for clinical pharmacologists. Historically, under the 1998 ICH E5 guidance ('Ethnic Factors in the Acceptability of Foreign Clinical Data'), sponsors were required to evaluate whether a drug was 'ethnically sensitive.' In practice, the PMDA frequently mandated dedicated Phase I clinical pharmacokinetic trials in domestic healthy Japanese volunteers, followed by a local bridging study or participation in an MRCT (ICH E17). 

However, the economics and biology of modern drug discovery have exposed the limitations of this paradigm. Approximately 52% of drugs approved by the US FDA between 2019 and 2023 originated from emerging biopharmaceutical companies.[^fc-9] These organizations generally operate on tight venture capital or milestone-driven budgets, prioritizing rapid FDA and EMA approval pathways (e.g., Accelerated Approval, Breakthrough Therapy Designation). Because conducting Japanese clinical trials requires establishing local infrastructure, hiring Japanese CROs, navigating PMDA's formal consultation process, and translating regulatory documents into Japanese, overseas sponsors routinely choose to omit Japan from initial global development plans. This issue is amplified by Japanese National Health Insurance (NHI) biennial drug price revisions, which compress commercial margins for low-prevalence indications.

To overcome this barrier, the authors propose an integrated MIDD continuum:
1. Preclinical / FIH Stage: Leveraging QSP models parameterised with Japanese genetic, proteomic, and biomarker data to evaluate whether disease biology or target expression diverges between Asian and Western populations.
2. Phase I / Bridging Stage: Deploying virtual PBPK populations (incorporating Japanese physiological parameters, gastric pH, organ volumes, and metabolizing enzyme/transporter frequencies like CYP2C19, CYP2D6, OATP1B1) to simulate whether significant exposure disparities will emerge between Caucasian and Japanese subjects. Accurate PBPK predictions can justify starting doses and mitigate the need for independent local Phase I PK escalation studies.
3. Phase II / III Trial Design: Using popPK/ER modeling to demonstrate that exposure-response curves for efficacy and safety are congruent across ethnicities, thereby enabling pediatric extrapolation and dose-adjustment paradigms without requiring large domestic sample sizes.
4. Evidence Synthesis: Employing MBMA to bridge external control arms or real-world cohorts to Japanese standard-of-care benchmarks.

The integration of AI/ML adds a layer of operational speed, automating the parsing of unstructured electronic health records (EHR) and accelerating the exploration of multi-dimensional covariate spaces in complex populations.

---

### Domain Context
In East Asian clinical pharmacology, ethnic bridging has historically relied on empirical PK comparisons. In December 2023 and early 2024, the Japanese MHLW and PMDA announced landmark administrative reforms aimed at dismantling the requirement for domestic Phase I trials in Japanese subjects prior to joining global MRCTs, explicitly signaling an increased willingness to accept foreign data and English-language documentation. MIDD represents the quantitative backbone required to operationalize these regulatory reforms. Without robust computational modeling demonstrating that ethnic differences in PK/PD are negligible or predictable, regulatory reviewers will struggle to grant marketing authorization for drugs lacking substantial local clinical trial representation.

---

## 📊 Key Findings
1. Extent of Drug Loss: Approximately 70% of new molecular entities approved by the FDA/EMA (2016–2020) and 52% of approvals from emerging biopharma companies (2019–2023) remain unavailable in Japan, compared to only 19.4% drug loss in Europe.
2. Primary Bottlenecks: A major barrier is the historical requirement for domestic Phase I PK data and the omission of Japanese participants in early global programs (85% of unapproved drugs had zero Japanese patients), compounded by ~66% of foreign biopharma lacking Japanese operational entities and facing continuous NHI drug price cuts.
3. Mechanistic MIDD Solutions: Quantitative Systems Pharmacology (QSP) models can integrate Japanese-specific multi-omics and biomarker datasets to explore target engagement; PBPK modeling can predict pediatric ontogeny, pharmacogenomic variants (e.g., CYP polymorphisms), and DDI liability to bypass de novo Phase I trials; and popPK/ER with MBMA can extrapolate Western efficacy/safety to Japanese cohorts.
4. Regulatory Alignment: International sponsors must engage in early parallel scientific advice (such as FDA PDUFA VII MIDD Paired Meetings and EMA/PMDA parallel advice) to pre-agree on quantitative bridging frameworks before Phase III completion.
5. AI/ML Synergy: Augmenting MIDD with machine learning facilitates high-dimensional multi-omics integration, automated model parameterization, Bayesian adaptive trial optimization, and synthetic control/RWE synthesis.

---

### Strengths & Limitations

#### Strengths
- Provides clear epidemiological and regulatory metrics illustrating the transition from drug lag to drug loss in Japan.
- Outlines a cohesive, phase-by-phase pharmacometrics framework (QSP -> PBPK -> PopPK/PD -> MBMA) specifically mapped to pediatric and rare disease development.
- Integrates modern computational paradigms, detailing how AI/ML can address traditional pharmacometric bottlenecks in simulation and high-dimensional parameter estimation.
- Offers actionable strategic advice for Western biotech sponsors on early multi-agency regulatory engagement (FDA Paired Meeting Program, EMA Scientific Advice, and PMDA consultations).

#### Limitations (Acknowledged by Authors)
- Current international and domestic public-private collaborative drug discovery platforms (e.g., GAPFREE, GHIT Fund) are still in their infancy with limited proven clinical output to date.
- Market access and drug pricing disincentives remain outside the direct control of computational pharmacology.

#### Limitations (Expert Review)
- The commentary lacks concrete regulatory case studies showing specific instances where PMDA waived dedicated domestic Phase I trials purely based on PBPK/QSP without local clinical PK data.
- Does not critically assess PMDA's specific technical guidance on MIDD or potential regulatory conservatism regarding purely in silico pediatric extrapolations.
- Potential conflict of interest: Authors are Certara employees, representing a commercial vendor providing the exact MIDD and AI/ML consulting services advocated in the manuscript.

#### Generalizability
Highly applicable to global clinical pharmacology, regulatory affairs, and pharmacometrics teams at emerging and mid-sized biopharma companies seeking entry into the Japanese market, as well as regulatory policy makers in East Asia evaluating ethnic bridging and pediatric extrapolation paradigms.

---

---

### Figures & Tables

- **Figure 1**: Funnel plot illustrating the proportion of 'Japanese Drug Loss' products, demonstrating that approximately 70% of innovative therapies approved in the US/EU between 2016 and 2020 are unavailable in Japan.
  - *Significance*: Quantifies the severity of the domestic access crisis, providing empirical justification for urgent regulatory and scientific intervention.
- **Figure 2**: Conceptual schematic depicting the synergistic integration of Model-Informed Drug Development (MIDD) methodologies (PBPK, popPK/PD, QSP, MBMA) with Artificial Intelligence and Machine Learning (AI/ML).
  - *Significance*: Illustrates how computational automation, dimension reduction, Bayesian optimization, and high-dimensional omics integration can accelerate drug development timelines and optimize pediatric and rare disease dosing regimens.

---

### Code & Reproducibility Assessment
Not applicable; this is a conceptual perspectives and regulatory commentary article containing no proprietary datasets, modeling code, or quantitative scripts.

---

### Future Directions
1. Formalizing PMDA-accepted qualification frameworks for QSP models and AI-driven synthetic controls in rare disease indications.
2. Publishing regulatory case studies detailing successful marketing authorization approvals in Japan achieved solely via global MRCT data augmented with PBPK/popPK ethnic bridging without standalone Japanese Phase I trials.
3. Evaluating the impact of recent PMDA administrative revisions (accepting English-language dossiers and easing local trial mandates) on drug loss metrics through longitudinal retrospective analyses.

---

### Expert Commentary
This perspective addresses what is arguably the most urgent clinical pharmacology and regulatory policy issue in East Asia: 'drug loss.' For decades, pharmacometricians dealt with ICH E5 bridging and Japanese 'drug lag,' which typically meant conducting an isolated Phase I study in healthy Japanese volunteers to demonstrate PK equivalence before joining global Phase III trials. However, the rise of targeted oncology, gene therapies, and orphan drugs developed by emerging biopharmas with lean capitalization has transformed drug lag into outright drug loss—Japan is simply skipped.

The authors correctly identify MIDD as the primary scientific vehicle to reverse this trend. Mechanistically, PBPK is uniquely suited to address PMDA's ethnic sensitivity questions by accounting for physiological differences (liver volume, renal clearance, CYP2C19/CYP2D6 allele frequencies) in silico. Furthermore, utilizing MBMA to contextualize sparse Phase I/II global data against historical Japanese disease cohorts can eliminate the requirement for unfeasible domestic trials in ultrarare diseases. However, the authors perhaps understate PMDA's historical conservatism; while PMDA has established an internal MIDD working group, Japanese reviewers still frequently request confirmed domestic clinical PK exposure in at least a minimal cohort of Japanese subjects. To truly eliminate drug loss, global sponsors must embed Japanese patients into early First-in-Human (FIH) and Phase Ib global protocols (via sites in Japan or overseas Japanese cohorts) and pair this with robust MIDD extrapolation packages presented at early PMDA consultation meetings.

---

### Bottom Line
For overseas biopharma and pharmacometricians, prospective MIDD planning—using PBPK for ethnic bridging and popPK/ER for dose justification—is not just an optimization tool but a prerequisite regulatory survival strategy to overcome Japan's stringent entry barriers without conducting costly, standalone domestic clinical development programs.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The authors advocate using an end-to-end Model-Informed Drug Development (MIDD) framework leveraging QSP, PBPK, popPK/PD, and MBMA to bridge data gaps and accelerate regulatory alignment with the PMDA.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “Historically, Japan's drug lag was driven by mandatory local Phase I and bridging studies required under ICH E5.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “Participation in multi-regional clinical trials under ICH E17 helped alleviate drug lag for large multinational pharmaceutical sponsors.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “In pediatric oncology and rare diseases, standalone domestic randomized trials in Japan are statistically and ethically unfeasible due to small patient populations.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “The paper presents a conceptual, regulatory-pharmacometrics policy framework synthesizing epidemiological drug availability data from FDA, EMA, and PMDA databases spanning 2016 to 2023.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “The authors cross-referenced industry benchmarking reports from Boston Consulting Group and AMED to characterize drug loss.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “Physiologically Based Pharmacokinetics (PBPK) is proposed for First-in-Human and Phase I development to predict ethnic and pediatric exposure.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “Population PK and exposure-response (popPK/ER) modeling is proposed in Phase II/III development for dose selection across ethnicities.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **CONTRADICTED** — original: “Approximately 52% of drugs approved by the US FDA between 2019 and 2023 originated from emerging biopharmaceutical companies.” → correction: “Between 2019 and 2023, the US FDA approved 98 new drugs submitted by emerging biopharma companies. Drug-loss products in Japan accounted for 52.0% of these US-approved drugs, significantly higher than the 19.4% seen in Europe [2].”
[^fc-10]: **UNSUPPORTED** — original: “Japanese National Health Insurance conducts biennial drug price revisions that compress commercial margins for low-prevalence indications.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “Virtual PBPK populations incorporate Japanese physiological parameters such as gastric pH, organ volumes, and metabolizing enzyme/transporter frequencies including CYP2C19, CYP2D6, and OATP1B1.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **UNSUPPORTED** — original: “In December 2023 and early 2024, the Japanese MHLW and PMDA announced administrative reforms aimed at dismantling the requirement for domestic Phase I trials in Japanese subjects prior to joining global MRCTs.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-13]: **CONTRADICTED** — original: “Between 2016 and 2020, drug loss in Europe was 19.4%, compared to approximately 70% in Japan.” → correction: “The FDA and EMA approved 243 new drugs between 2016 and 2020. Approximately 70% of these drugs aren't available in Japan (Figure 1) [1]. Between 2019 and 2023, the US FDA approved 98 new drugs submitted by emerging biopharma companies. Drug-loss products in Japan accounted for 52.0% of these US-approved drugs, significantly higher than the 19.4% seen in Europe [2].”
[^fc-14]: **CONTRADICTED** — original: “Approximately 66% of foreign emerging biopharmaceutical companies lack Japanese operational entities.” → correction: “About 66% of overseas companies that do not have domestic development sites also lack a Japanese subsidiary.”
[^fc-15]: **UNSUPPORTED** — original: “The authors recommend that international sponsors engage in early parallel scientific advice through FDA PDUFA VII MIDD Paired Meetings and EMA/PMDA parallel advice prior to Phase III completion.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “Public-private collaborative drug discovery platforms such as GAPFREE and the GHIT Fund currently have limited proven clinical output.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **UNSUPPORTED** — original: “The PMDA has established an internal MIDD working group.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Funnel plots of proportion of “Japanese Drug loss” products show that 70% of new therapies are unavailable in Japan.]({{ site.baseurl }}/assets/digests/2026-11-10-mitigate-japans-drug-loss-with-model-informed-drug-development/figures/fig_01.jpg)

![Synergy between MIDD and AI 10.]({{ site.baseurl }}/assets/digests/2026-11-10-mitigate-japans-drug-loss-with-model-informed-drug-development/figures/fig_02.jpg)