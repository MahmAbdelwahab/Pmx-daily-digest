---
layout: post
title: "A Systematic Review of Published Physiologically Based Pharmacokinetic Models for Drug Excretion Into Human Breastmilk: Knowledge Gaps and Opportunities to Optimize Reporting and Modeling Practices"
date: 2026-08-20
authors: "Kiptoo J, Olal D, Yamo K, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70321"
paper_type: generic
tags: [generic, pbpk]
excerpt_text: "This systematic review of 26 lactation PBPK studies (54 drugs) found that only 18% of key reporting domains were consistently reported, with major gaps in model assumptions, sensitivity analyses, and infant exposure evaluation. The authors propose a fit-for-purpose LAC-PBPK reporting framework with tiered priorities (minimum essential, strongly recommended, conditional) to standardize and improve the reproducibility of lactation PBPK modeling."
pdf_path: "/assets/digests/2026-08-20-a-systematic-review-of-published-physiologically-based-pharmacokinetic-models/PMx_A_Systematic_Review_of_Published_Physiol_20260820.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This systematic review of 26 lactation PBPK studies (54 drugs) found that only 18% of key reporting domains were consistently reported, with major gaps in model assumptions, sensitivity analyses, and infant exposure evaluation. The authors propose a fit-for-purpose LAC-PBPK reporting framework with tiered priorities (minimum essential, strongly recommended, conditional) to standardize and improve the reproducibility of lactation PBPK modeling.

---

### Executive Summary
Kiptoo et al. conducted a PRISMA-compliant systematic review of 26 published PBPK modeling studies evaluating drug excretion into human breastmilk and subsequent infant exposure, covering 54 medications. Using a novel 22-item data abstraction tool (LAC-PBPK), the authors found substantial heterogeneity in reporting practices and modeling approaches: only 4 of 22 (18%) reporting domains were consistently reported across all studies. Most models used whole-body PBPK structures (88.4%) with perfusion-rate-limited assumptions (53%), and Simcyp was the dominant platform (38.5%). Critical gaps included infrequent use of infant plasma data for model evaluation (<25% of studies), inconsistent reporting of milk parameters (pH, crematocrit), and frequent extrapolation of simulations beyond clinically observed postpartum periods (61.5% of studies). The authors propose a prioritized, fit-for-purpose reporting framework distinguishing minimum essential, strongly recommended, and conditional elements, arguing this tiered approach better serves the field than a rigid universal standard.

---

### Scientific Context & Motivation
Lactating women frequently require medication, yet evidence on infant safety through breastmilk exposure is often lacking, leading to unnecessary breastfeeding cessation. Regulatory bodies (FDA, EMA, ICH E21) increasingly recommend PBPK modeling to predict drug excretion into breastmilk and subsequent infant exposure. However, existing PBPK reporting guidance (EMA 2014/2019, FDA 2018) is generic and does not address lactation-specific considerations. While prior reviews have examined PBPK modeling of environmental chemicals in breastmilk, no systematic evaluation of PBPK modeling approaches and reporting practices specifically for human pharmaceuticals existed. This gap is significant because lactation PBPK models face unique challenges—dynamic maternal physiology in the postpartum period, immature infant clearance pathways, and sparse clinical lactation data—that demand specialized modeling and reporting considerations.

---

## ⚡ Methodological Snapshot
This is a systematic review following PRISMA guidelines, registered on PROSPERO (CRD42024607862). The authors conducted a systematic search of Scopus, PubMed, and Google Scholar through March 30, 2025, using keywords related to PBPK modeling and lactation. Two independent reviewers screened and extracted data, with a third reviewer adjudicating disagreements. The novel LAC-PBPK tool—a 22-item structured data abstraction instrument—was developed from existing regulatory and consortia reporting guidelines (EMA, FDA, Shebley et al., Tan et al.) and organized into three domains: Reporting (dichotomous), Data (descriptive), and Methodological (modeling approaches). The tool was piloted on five studies with iterative refinement. Data were analyzed using descriptive statistics and narrative synthesis. The review characterized reporting practices and modeling approaches but did not evaluate individual model predictive performance.

---

## 📋 Detailed Analysis
The review's most significant contribution is the systematic documentation of the heterogeneity in lactation PBPK modeling practices and the identification of specific areas where reporting is consistently inadequate. The finding that only 4 of 22 (18%) reporting domains were consistently reported across all studies is striking, particularly given that these are among the most basic elements (drug identity, model structure, purpose, and platform). The fact that milk pH and crematocrit—parameters that directly influence ion trapping and drug partitioning—were parameterized using clinical data in fewer than half of studies is concerning, especially for the 46.6% of drugs that are weak bases and thus subject to ion trapping in the more acidic milk compartment. The review also highlights a critical methodological tension: while 53% of studies assumed perfusion-rate-limited milk excretion, this assumption may not hold for all drugs, particularly those that are transporter substrates. Only one study incorporated mammary transporter kinetics, despite 8 studies modeling potential transporter substrates. This is a significant knowledge gap given the known expression of efflux transporters (e.g., BCRP, P-gp) in the mammary epithelium. The finding that 61.5% of studies simulated beyond the clinically observed postpartum period raises important questions about the validity of extrapolations, particularly given the rapid physiological changes in both maternal physiology and infant clearance capacity during the first months postpartum. The proposed fit-for-purpose framework (Table 2) is a pragmatic response to this complexity, acknowledging that not all applications require the same evidentiary standard while establishing clear minimum expectations. The tiered approach—distinguishing minimum essential, strongly recommended, and conditional elements—provides actionable guidance for researchers while maintaining flexibility for different use cases. However, the framework's utility would be enhanced by prospective validation and by clearer guidance on how to handle situations where minimum essential data are unavailable (e.g., should the model not be published, or should it be published with explicit caveats?). The review also highlights the need for better integration of clinical lactation study design with PBPK modeling needs, as many reporting gaps (e.g., maternal dose timing, feeding status) could be addressed through improved clinical study protocols.

---

### Domain Context
Lactation PBPK modeling sits at the intersection of maternal pharmacology, developmental pharmacology, and quantitative systems pharmacology. The field has grown rapidly since the first model in 2009, driven by regulatory recognition (ICH E21) and the recognition that breastfeeding women are often excluded from clinical trials, creating a need for model-informed approaches. Key physiological considerations include: (1) dynamic maternal physiology in the postpartum period, including ~2-fold changes in renal function and cardiac output; (2) the unique physiology of the mammary gland, including the blood-milk barrier and active transport mechanisms; (3) infant developmental changes in drug metabolism and clearance, which are particularly rapid in the first 6 months of life; and (4) the need to account for both maternal and infant factors in a single integrated framework. The field faces several challenges: sparse clinical lactation data for model parameterization and validation, ethical constraints on studying pregnant and lactating women, and the inherent complexity of modeling a dynamic system (lactation) within another dynamic system (infant development). The review's emphasis on fit-for-purpose modeling and transparent reporting aligns with broader trends in quantitative clinical pharmacology toward more rigorous and reproducible modeling practices, as exemplified by the development of reporting checklists in other areas of pharmacometrics. The proposed framework also has implications beyond lactation, potentially informing reporting standards for PBPK modeling in other special populations (e.g., pediatrics, pregnancy, organ impairment) where data are similarly sparse and assumptions are prevalent.

---

## 📊 Key Findings
The review of 26 studies (54 drugs) revealed several critical findings. First, reporting quality was highly variable: only 4/22 (18%) LAC-PBPK domains were consistently reported across all studies (drug modeled, mammary distribution model, model purpose, and platform). Second, modeling approaches were heterogeneous—88.4% used whole-body PBPK structures, 53% assumed perfusion-rate-limited milk excretion, and only one study incorporated mammary transporter kinetics despite 8 studies modeling potential transporter substrates. Third, model evaluation was a major weakness: only 7/26 (26.9%) studies used infant plasma concentrations for evaluation, and only 13/26 prespecified both performance metrics and acceptance criteria. Fourth, there were notable discrepancies between simulated and observed postpartum ages—61.5% of studies extrapolated simulations beyond the clinically observed period, and 11.5% had no overlap at all. Fifth, milk parameterization relied heavily on assumed or software-default values rather than clinical data, with milk pH and crematocrit values varying substantially across sources. Finally, the review identified that most drugs modeled were antimicrobials (47%) and CNS drugs (29%), with 91% administered orally, and the majority being weak bases (46.6%) or neutral (32.2%) compounds.

---

### Strengths & Limitations

#### Strengths
- First systematic review specifically evaluating PBPK modeling approaches and reporting practices for human pharmaceutical excretion into breastmilk, filling a critical gap in the literature
- Development and application of a novel 22-item LAC-PBPK data abstraction tool, providing a structured framework for future evaluations
- Comprehensive coverage of 26 studies and 54 medications across multiple therapeutic classes
- PRISMA-compliant methodology with PROSPERO registration (CRD42024607862) and dual-reviewer screening with adjudication
- Proposal of a practical, tiered fit-for-purpose reporting framework (minimum essential, strongly recommended, conditional) that acknowledges the field's maturity while setting clear expectations
- Strong translational relevance with clear regulatory and clinical implications, directly addressing ICH E21 recommendations

#### Limitations (Acknowledged by Authors)
- Only peer-reviewed published studies were included; unpublished studies and proprietary regulatory models were excluded, potentially limiting generalizability
- The LAC-PBPK tool may require future refinement as modeling practices evolve
- No formal risk-of-bias assessment was conducted due to the absence of a standardized appraisal tool for PBPK studies
- The review characterized reporting practices rather than evaluating predictive performance of individual models

#### Limitations (Expert Review)
- The review's search strategy (three databases) may have missed relevant studies indexed elsewhere, though this is partially mitigated by the inclusion of Google Scholar
- The exclusion of non-English language studies could introduce language bias, particularly given the global nature of lactation research
- The LAC-PBPK tool's 22 items, while comprehensive, may not capture all relevant nuances of model quality versus reporting completeness—a study could report poorly but model well or vice versa
- The review does not provide quantitative assessment of how reporting gaps translate into prediction errors, which would strengthen the case for the proposed framework
- The proposed fit-for-purpose framework, while sensible, has not been prospectively validated or tested for inter-rater reliability in its application

#### Generalizability
The findings are broadly generalizable to the lactation PBPK field given the comprehensive inclusion of all available studies through March 2025. However, the rapid evolution of PBPK methodologies means that reporting practices may have improved in the most recent studies, and the field is likely to see continued evolution. The proposed framework is designed to be adaptable across PBPK platforms (Simcyp, PK-Sim, etc.) and therapeutic areas, though its application to biologics and other novel modalities remains untested. The focus on small molecules (54 drugs, all orally or IV administered) means the findings may not directly extend to biologics, which have different lactation transfer characteristics.

---

---

### Figures & Tables

- **Figure 1**: PRISMA flow diagram showing study selection process, from 1,305 records identified to 26 included studies
  - *Significance*: Documents the systematic review methodology and transparency of the search and screening process
- **Figure 2**: Bar chart showing the proportion of studies explicitly reporting each of the 22 LAC-PBPK items, with only 4 items reported in 100% of studies
  - *Significance*: Visualizes the core finding that reporting is highly variable, with many items reported in fewer than 50% of studies
- **Figure 3**: Summary of modeling features: (A) prespecification of performance acceptance criteria, (B) infant risk metrics used (RID vs. plasma concentrations), and (C) other methodological choices
  - *Significance*: Highlights the heterogeneity in model evaluation approaches and the dominance of RID as the primary risk metric
- **Figure 4**: Comparison of simulated versus observed postnatal ages across studies, showing the extent of extrapolation beyond clinical data
  - *Significance*: Illustrates the common practice of simulating beyond observed data, with 61.5% of studies extrapolating beyond the clinical observation period
- **Figure 5**: Summary workflow of PBPK modeling showing key inputs, processes, assumptions, and evaluation metrics for breast milk secretion and infant exposure
  - *Significance*: Provides a visual framework for understanding the components of lactation PBPK modeling and where reporting gaps occur
- **Figure 6**: Key considerations for advancing lactation PBPK modeling, including reporting frameworks, decision trees, consortia engagement, and open-source platforms
  - *Significance*: Summarizes the authors' recommendations for advancing the field
- **Table 1**: Summary of all 26 included studies with drug(s), route, purpose, model structure, maternal data, infant plasma data, acceptance criteria, and software
  - *Significance*: Provides a comprehensive overview of the current state of lactation PBPK modeling, enabling readers to quickly assess the landscape
- **Table 2**: Proposed fit-for-purpose prioritization of lactation PBPK study-design and reporting elements, categorized as minimum essential, strongly recommended, or conditional/advanced
  - *Significance*: The key translational output of the paper—a practical framework for standardizing lactation PBPK reporting

---

### Code & Reproducibility Assessment
Not applicable—this is a systematic review, not a modeling study. However, the authors note that only 38.5% of reviewed studies used Simcyp, with others using PK-Sim, Pumas, MATLAB, and R, and they advocate for open-source platforms and software-agnostic model repositories to improve transparency. The LAC-PBPK tool is available as Table S1.

---

### Supplementary Materials
Supplementary materials include the LAC-PBPK data abstraction tool (Table S1), sensitivity analysis details (Table S2), and additional figures (Figure S1: parameterization data sources; Figure S3: reported limitations). The PRISMA checklist is included in the main text appendix.

---

### Future Directions
The authors identify several priority areas: (1) prospective validation of the proposed fit-for-purpose framework across diverse PBPK platforms and therapeutic areas; (2) generation of evidence on breastmilk intake for infants beyond 6 months and preterm populations, leveraging consortia such as IMI ConcePTION, MILK-CENTRE, and MPRINT; (3) development of validated modeling decision trees for sensitivity/uncertainty analyses; (4) integration of transplacental exposure into postpartum risk assessment; (5) comparison of infant exposure estimates using different milk intake quantification approaches; and (6) expansion of PBPK applications to address emerging maternal health needs including gestational diabetes and hypertensive disorders. The field would also benefit from standardized approaches to model evaluation that incorporate infant plasma data where feasible.

---

### Expert Commentary
This review addresses a critical gap in lactation pharmacology. The proposed fit-for-purpose framework is pragmatic and timely—it recognizes that not all PBPK applications require the same evidentiary standard while establishing clear minimum expectations. The finding that only 18% of reporting domains were consistently reported is concerning but not surprising given the lack of lactation-specific guidance. The emphasis on transparent reporting of assumptions (e.g., milk pH, crematocrit, passive vs. active transport) is particularly important, as these parameters can substantially influence predictions for weakly basic and lipophilic drugs. The recommendation to incorporate infant plasma data where feasible, despite sampling challenges, is well-taken—the field should explore micro-sampling and sparse sampling designs. The review could have been strengthened by a more detailed discussion of how the proposed framework aligns with or extends the existing Shebley and Tan templates, and by providing specific examples of how the framework would be applied to a representative drug. Nevertheless, this work provides a solid foundation for standardizing lactation PBPK modeling and reporting.

---

### Bottom Line
Lactation PBPK modeling holds significant promise for informing medication safety in breastfeeding, but the field suffers from inconsistent reporting and heterogeneous modeling approaches that undermine reproducibility and regulatory confidence. Researchers should adopt the proposed fit-for-purpose framework, ensuring transparent reporting of minimum essential elements (maternal dose, postpartum timing, milk intake assumptions, model evaluation criteria) while tailoring advanced analyses (transporter kinetics, parent–metabolite modeling) to the specific research question. Journal editors and reviewers should enforce reporting standards, and the community should work toward consensus on infant milk intake estimation and model evaluation metrics.

---

---

## 📊 Figures

![Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) 17 flow diagram of physiologically based pharmacokinetic (PBPK) study selection. Of]({{ site.baseurl }}/assets/digests/2026-08-20-a-systematic-review-of-published-physiologically-based-pharmacokinetic-models/figures/fig_01.jpg)

![Reporting of PBPK model-related information in published papers. A bar chart to demonstrate descriptive summary “Yes/No” explicit reporting of PBPK model-related]({{ site.baseurl }}/assets/digests/2026-08-20-a-systematic-review-of-published-physiologically-based-pharmacokinetic-models/figures/fig_02.jpg)

![Summary of study modeling feature: (A) whether performance acceptance criteria were prespecified, (B) the infant risk metric used RID (relative infant dose) and]({{ site.baseurl }}/assets/digests/2026-08-20-a-systematic-review-of-published-physiologically-based-pharmacokinetic-models/figures/fig_03.jpg)

![Simulated versus observed postnatal age. Postnatal ages from the source clinical studies (black) versus the ages used in the simulations (teal). Vertical dotted]({{ site.baseurl }}/assets/digests/2026-08-20-a-systematic-review-of-published-physiologically-based-pharmacokinetic-models/figures/fig_04.jpg)

![Summary workflow of PBPK modeling: Key modeling inputs, processes, assumptions, and metrics to evaluate breast milk secretion and infant exposure. ADME = absorpt]({{ site.baseurl }}/assets/digests/2026-08-20-a-systematic-review-of-published-physiologically-based-pharmacokinetic-models/figures/fig_05.jpg)

![Key considerations in advancing Lactation PBPK modeling.]({{ site.baseurl }}/assets/digests/2026-08-20-a-systematic-review-of-published-physiologically-based-pharmacokinetic-models/figures/fig_06.jpg)