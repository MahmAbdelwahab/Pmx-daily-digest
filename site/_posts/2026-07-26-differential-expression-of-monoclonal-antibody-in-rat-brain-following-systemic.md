---
layout: post
title: "Differential expression of monoclonal antibody in rat brain following systemic and local administration of AAV"
date: 2026-07-26
authors: "Chowdhury EA, Meno-Tetang G, Liu S, Wu S, Yoh N, Jerez A, Maut L, Ramirez A, Bhoopathy S, Jamier T, Newham P, Combes F, Davis C, Perkinton M, Cojocaru I, Shah DK"
journal: "Journal of Pharmacokinetics and Pharmacodynamics, 2026, 53:40"
doi: "10.1007/s10928-026-10050-x"
paper_type: popk
tags: [popk, qsp]
excerpt_text: "This comprehensive rat biodistribution study provides quantitative evidence that local CNS administration (intrastriatal or intracisterna magna) of AAV9 vectors encoding a therapeutic monoclonal antibody yields 15–29-fold higher brain antibody concentrations than systemic intravenous delivery. Immunosuppression is critical to prevent anti-drug antibody responses that abrogate transgene expression after 2–3 weeks. These data are essential for developing quantitative systems pharmacology models for AAV-mediated CNS gene therapy and will be of high interest to pharmacometricians, clinical pharmacologists, and gene therapy researchers working on CNS indications."
retroactively_classified: false
---

with the unchanged document. But the instruction says "Return the complete markdown document with ONLY the inline math fixes applied." So I should return the same document if no fixes are needed.

Let me write the response. Since there are no changes, I'll output the original document as is. However, I need to be careful: the user might expect some changes. Let me re-read the examples: "k_el" → "$k_{el}$" is a clear case. In this document, I don't see any "k_el" or similar subscript notation. The only subscripts are in the display math equations. So indeed, no fixes needed.

I'll proceed to return the document unchanged. But wait, there is "V_g" or "Vg" in the text? "Vg/rat" is used, but "Vg" is an abbreviation for vector genomes, not a variable. So no.

I think it's safe to output the original document. However, I'll double-check the "Key Findings" section: "the antibody biodistribution coefficient (ABC) prediction of 0.3% of plasma" - "0.3%" might be considered math, but it's a simple percentage. The instruction says "%CV" should be fixed to "$\%CV$", but that's specifically for %CV. Here it's just "0.3%", which is common.

I'll go with no changes. But to be thorough, I'll scan for any mathematical symbols like "±" or ">". In the "Statistical Rigor Assessment": "coefficients of variation often >50%" - the ">" could be $>$, but it's already a character. It's not a LaTeX issue. Similarly, "mean ± SD" - the "±" is a Unicode character. It might be fine.

I think the document is already correct in terms of inline math delimiters. I'll return it as is. But the instruction says "Your ONLY task is to find inline mathematical and scientific notation in prose text that is missing $...$ delimiters and wrap it correctly." If there are none, then the output is the same.

Thus, I will output the exact same document. But I must ensure that I don't accidentally modify any formatting. I'll copy the entire document and output it.

Wait, I need to check the "Typst blocks" to ensure they are not modified. The document has ```{=typst} ... ``` blocks. I will leave them unchanged.

Also, the image references are in Typst format, not markdown, but the rule says "NEVER modify image references: Leave ![...](...) and image() calls unchanged." There are no ![...](...) but there are image() calls inside Typst blocks. Those are fine.

I'll output the document as is. But let me also check if any numbers like "27" should be math? No.

I think the answer is to return the same document. However, to be safe, I'll write a brief note in the response? The instruction says "NEVER add commentary". So I should not add any explanation.

Thus, I will output the original markdown document unchanged. But I'll ensure that the output starts and ends correctly.

I'll now produce the final answer. Due to the length, I'll just output the document. But I need to be careful with the triple backticks in the Typst blocks. I'll copy the entire document as provided.

Let me write the response. Since the document is large, I'll use the same content. I'll just output it.

But wait, I should check if there is any "10^2" or "s^-1" etc. In the "Key Equations" section, there is display math with {% raw %}
$$...$$
{% endraw %}, so that's fine. In the text, I don't see any exponents like "10^2". There is "5E11" which is not the same.

I think it's safe to output unchanged.

I'll now produce the final answer.```markdown
**Content Source:** Full Text

### Quick Take
This comprehensive rat biodistribution study provides quantitative evidence that local CNS administration (intrastriatal or intracisterna magna) of AAV9 vectors encoding a therapeutic monoclonal antibody yields 15–29-fold higher brain antibody concentrations than systemic intravenous delivery. Immunosuppression is critical to prevent anti-drug antibody responses that abrogate transgene expression after 2–3 weeks. These data are essential for developing quantitative systems pharmacology models for AAV-mediated CNS gene therapy and will be of high interest to pharmacometricians, clinical pharmacologists, and gene therapy researchers working on CNS indications.

---

### Executive Summary
This study provides a comprehensive quantitative assessment of AAV9 and AAV5 vector biodistribution and monoclonal antibody (mAb) transgene expression in rat brain following intravenous (IV), intracisterna magna (ICM), and intrastriatal (IST) administration. Using a therapeutic anti-TargetX mAb and a control mAb, the authors demonstrate that local CNS routes produce 15–29-fold higher brain mAb concentrations compared to IV delivery, with IST achieving the highest forebrain levels despite a 20-fold lower dose. Dose proportionality was confirmed across a 10-fold dose range for the ICM route. Immunosuppression with prednisolone and rapamycin was essential to maintain transgene expression beyond two weeks, as non-immunosuppressed rats showed a sharp decline in plasma mAb concentrations consistent with an anti-drug antibody response. AAV5 vectors exhibited significantly lower transduction efficiency (~200-fold) compared to AAV9. The data serve as a foundation for developing quantitative systems pharmacology (QSP) models for AAV-mediated CNS antibody delivery.

---

### Scientific Context & Motivation
Adeno-associated virus (AAV)-mediated gene therapy for CNS disorders is a rapidly advancing field, but quantitative understanding of vector biodistribution and transgene expression following different routes of administration remains limited. Most published studies use fluorescent proteins (e.g., GFP) as transgene products, providing only semi-quantitative data that cannot be directly translated to therapeutic protein concentrations. This study addresses the critical knowledge gap by providing quantitative, concentration-based biodistribution data for a therapeutic monoclonal antibody (anti-TargetX mAb) expressed from AAV9 and AAV5 vectors in rats following intravenous, intracisterna magna, and intrastriatal administration. The inclusion of immunosuppression as a variable addresses the known challenge of immunogenicity against transgene products, which can confound PK interpretation. The data challenge the assumption that systemic AAV9 administration achieves adequate brain transduction for CNS indications and provide essential quantitative benchmarks for developing physiologically-based pharmacokinetic (PBPK) and quantitative systems pharmacology (QSP) models that can translate these findings to humans.

---

## ⚡ Methodological Snapshot
This experimental biodistribution study in rats (N=27) compared AAV9 and AAV5 vector distribution and monoclonal antibody transgene expression following intravenous (IV), intracisterna magna (ICM), and intrastriatal (IST) administration. Vector genome concentrations in blood and tissues were quantified by qPCR, while mAb concentrations in plasma, brain homogenate (7 regions), CSF, ISF (via microdialysis), and peripheral tissues were measured by sandwich ELISA. Non-compartmental analysis (Phoenix WinNonlin 8.0) was used to calculate AUCt values. Statistical comparisons employed t-tests and ANOVA with Tukey's post-hoc test. The study evaluated three dose levels for ICM route (5E11–5E12 Vg/rat), two terminal time points (3-week and 8-week), and the effect of immunosuppression (prednisolone + rapamycin). No population PK or mechanistic modeling was performed; the data are intended to support QSP model development in a companion paper.

---

## 🏗️ Structural Model Breakdown
No structural PK/PD model was developed in this manuscript. The analysis was limited to non-compartmental analysis (NCA) of concentration-time data. The study provides the experimental data necessary for developing mechanistic models, including: (1) vector biodistribution data (blood, brain regions, peripheral tissues) following different routes of administration, (2) transgene mAb concentration data in multiple matrices over time, (3) dose proportionality data across a 10-fold dose range, and (4) comparison of immunosuppressed vs. immunocompetent conditions. The authors state that these data will be used to develop a quantitative systems pharmacology (QSP) model in a companion manuscript.

---

### Detailed Methodological Analysis

#### Modeling Approach
This is an experimental biodistribution study with non-compartmental PK analysis. Vector genome concentrations were quantified by qPCR, and mAb concentrations were quantified by sandwich ELISA. Brain homogenate concentrations were calculated as weighted averages of regional concentrations. Microdialysis probe recovery was measured in vitro and used to correct ISF concentrations. No mechanistic PK/PD or PBPK modeling was performed in this manuscript; the authors note that these data will be used for QSP model development in a companion paper.

#### Data Sources
Male Sprague-Dawley rats (N=27, 7–8 weeks old, 250–280 g) were used. AAV9 vectors (CAG promoter) encoding anti-TargetX mAb or Ctrl-mAb were administered via IV (5E12 Vg/rat), ICM (5E11, 1E12, 5E12 Vg/rat), or IST (2.5E11 Vg/rat). AAV5-anti-TargetX mAb was administered via ICM (5E12 Vg/rat). Blood/plasma samples were collected at multiple time points up to 21 or 56 days. Terminal samples included brain regions (ST, PC, CC, HC, CB, BS, SC), CSF (cisterna magna puncture), ISF (striatum microdialysis), and peripheral tissues (lung, liver, heart). Immunosuppression (prednisolone 0.75 mg/kg/day + rapamycin 2 mg/kg/48h IP) was used in most groups; one ICM group (5E12 Vg/rat) was non-immunosuppressed.

#### Estimation Methods
Non-compartmental analysis (NCA) was performed using Phoenix WinNonlin 8.0 to calculate AUCt from time 0 to last time point using the log-linear trapezoidal rule. No population PK or compartmental modeling was performed. Statistical analyses were conducted in GraphPad Prism 9.3.

#### Model Evaluation
No formal model evaluation was performed as this was primarily an experimental biodistribution study with NCA-based PK analysis. The study design included multiple dose levels to assess dose proportionality, two terminal time points (3-week and 8-week) to assess steady-state, and comparison of immunosuppressed vs. non-immunosuppressed groups. Variability was reported as mean ± SD.

#### Covariate Analysis
No formal covariate analysis was performed. The study compared groups by route of administration, dose level, vector serotype (AAV9 vs AAV5), transgene (anti-TargetX mAb vs Ctrl-mAb), and immunosuppression status. Statistical comparisons used two-sided t-test for two groups and one-way ANOVA with Tukey's multiple comparison test for three or more groups. The small sample size (n=2–3 per group) precluded identification of additional covariates.

---

### Statistical Rigor Assessment
The statistical approach is appropriate for an exploratory biodistribution study but has significant limitations. The small sample size (n=2–3 per group) is the primary concern, as acknowledged by the authors. With only 2–3 animals per group, the study has limited power to detect differences between groups, and the high inter-animal variability typical of AAV transduction experiments (coefficients of variation often >50%) means that many comparisons that appear numerically large may not reach statistical significance. The use of two-sided t-tests for two-group comparisons and one-way ANOVA with Tukey's post-hoc test for multi-group comparisons is standard. However, no adjustment for multiple comparisons across the many endpoints (multiple brain regions, time points, matrices) was applied, increasing the risk of false positives. The dose proportionality assessment is based on visual inspection of dose-normalized AUCt values rather than formal power model analysis. Missing data from one animal (blocked cannula) and below-LOQ measurements for some groups (lowest ICM dose and AAV5 ISF samples) were handled by exclusion rather than imputation. No sensitivity analyses were performed. The study would benefit from a formal sample size calculation and power analysis for future confirmatory studies.

---

## 📊 Key Findings
The study demonstrates that local CNS administration routes (ICM and IST) produce dramatically higher brain antibody concentrations compared to systemic IV delivery. Specifically, the ICM route yielded 15-fold higher and the IST route 29-fold higher brain mAb homogenate concentrations than IV, despite the IST dose being 20-fold lower. The IST route produced the highest forebrain mAb concentrations (31-fold higher than hindbrain), while ICM yielded uniform distribution across all brain regions. Dose proportionality was confirmed for both vector biodistribution and mAb expression across the 5E11–5E12 Vg/rat dose range for the ICM route. Immunosuppression with prednisolone and rapamycin was essential: non-immunosuppressed rats showed a sharp decline in plasma mAb concentrations after 2 weeks and 3-fold lower brain mAb concentrations at 3 weeks, consistent with an anti-drug antibody response. AAV5 vectors showed significantly lower transduction efficiency (~200-fold lower mAb expression) compared to AAV9 at equivalent doses, despite similar vector genome distribution in brain regions. CSF and ISF mAb concentrations after ICM and IST administration were 4–64-fold higher than the antibody biodistribution coefficient (ABC) prediction of 0.3% of plasma, confirming local brain production of the transgene. In contrast, IV route CSF and ISF concentrations were within ABC predictions, indicating that brain mAb after IV administration primarily originates from plasma partitioning rather than local transduction.

---

## 💡 Clinical & Regulatory Implications
The findings have direct implications for clinical development of AAV-mediated antibody therapies for CNS disorders. The ICM route emerges as a practical compromise between the high brain exposure of IST and the systemic exposure of IV, offering dose-proportional brain antibody concentrations across a 10-fold dose range (5E11–5E12 Vg/rat, ~2E12–2E13 Vg/kg). The IST route, while producing the highest forebrain concentrations, is limited by low injectable volumes and surgical complexity. The IV route, despite AAV9's neurotropism, yields brain antibody levels only marginally above the antibody biodistribution coefficient (ABC) prediction of 0.3% of plasma, suggesting insufficient target engagement for most CNS indications. The mandatory use of immunosuppression (prednisolone + rapamycin) to prevent anti-drug antibody responses that abrogate transgene expression after 2–3 weeks is a critical translational consideration. AAV5 vectors showed significantly lower transduction efficiency (~200-fold lower mAb expression) compared to AAV9 at equivalent doses, making AAV9 the preferred serotype for CNS antibody delivery. The dose-proportional relationship between vector dose and both plasma and brain mAb concentrations supports linear transduction kinetics, simplifying dose selection for clinical trials.

---

### Strengths & Limitations

#### Strengths
- Comprehensive quantitative assessment of both vector biodistribution and transgene product (mAb) concentrations across multiple matrices (blood, plasma, 7 brain regions, CSF, ISF, peripheral tissues)
- Direct comparison of three clinically relevant routes of administration (IV, ICM, IST) in the same study
- Evaluation of dose proportionality across a 10-fold dose range for the ICM route
- Systematic assessment of immunosuppression effect on transgene expression
- Comparison of two clinically relevant AAV serotypes (AAV9 and AAV5)
- Use of a therapeutic monoclonal antibody as transgene product rather than fluorescent reporter protein
- Inclusion of microdialysis data for ISF concentrations, providing direct measurement of brain extracellular fluid exposure
- Two terminal time points (3-week and 8-week) to assess achievement of steady-state
- Clear presentation of individual animal data alongside group means

#### Limitations (Acknowledged by Authors)
- Small sample size (n=2–3 per group) considering large interindividual variability in AAV transduction and expression
- IST route animals could not be cannulated for ISF collection due to volume constraints
- Lowest ICM dose (5E11 Vg/rat) and AAV5 ISF samples were below LOQ
- One animal excluded due to blocked cannula during infusion
- No specific anti-drug antibody (ADA) assays were performed
- IST route administered with manual injection rather than infusion pump
- Need for studies in larger groups of animals to confirm findings

#### Limitations (Expert Review)
- No formal population PK or compartmental modeling was performed to quantify inter-individual variability and identify covariates
- No power analysis or sample size justification was provided
- Multiple comparisons across many endpoints (brain regions, time points, matrices) were not adjusted for
- Dose proportionality was assessed by visual inspection rather than formal power model analysis
- The 8-week time point was only available for one ICM group, limiting assessment of long-term expression stability
- No data on vector genome integration or persistence beyond 8 weeks
- The immunosuppression regimen was not optimized (single dose level, single combination)
- No assessment of cell-type specific transduction (neurons vs. glia) was performed
- The microdialysis probe recovery correction assumes in vitro recovery equals in vivo recovery, which may not be accurate for large molecules like mAbs
- Data availability statement contradicts the extensive experimental data presented

#### Generalizability
The findings are directly relevant to AAV9-mediated CNS gene therapy but may not generalize to other AAV serotypes, promoters, transgene products, or species. The use of a strong CAG promoter may overestimate transduction compared to weaker tissue-specific promoters. The rat model may not fully recapitulate human brain anatomy, CSF dynamics, or immune responses. The immunosuppression regimen (prednisolone + rapamycin) may not be directly translatable to clinical practice. The anti-TargetX mAb is a high-affinity antibody against a neurodegeneration-associated protein, and results may differ for other antibody formats or targets.

---

### Key Equations

**Microdialysis Probe Recovery**

{% raw %}
$$
\text{in vitro recovery} = \frac{C_{\text{dialysate}}}{C_{\text{standard}}}
$$
{% endraw %}

Used to correct microdialysis probe recovery for calculation of in vitro recovery of mAb from standard solution.

**Total Brain Homogenate Concentration**

{% raw %}
$$
C_{\text{brain}} = \frac{\sum (C_{\text{region}} \times W_{\text{region}})}{\sum W_{\text{region}}}
$$
{% endraw %}

Used to calculate total brain homogenate concentration from regional brain concentrations and weights.

---

### Figures & Tables

- **Figure 1**: Study schematic showing experimental design, routes of administration (IV, ICM, IST), dose levels, and sampling time points (3-week and 8-week terminal).
  - *Significance*: Provides essential context for the complex multi-arm study design with 27 rats across multiple dose levels, vectors, and immunosuppression conditions.
- **Figure 2**: AAV vector blood concentration-time profiles and dose-normalized AUCt values for all routes and doses.
  - *Significance*: Demonstrates that ICM and IV routes produce similar blood vector exposures, while IST route has significantly lower systemic exposure. AAV5 shows markedly lower blood AUCt compared to AAV9.
- **Figure 3**: Vector genome concentrations in seven brain regions (ST, PC, CC, HC, CB, BS, SC) for all administration routes and doses at 3-week terminal.
  - *Significance*: Shows regional brain distribution patterns: IST produces highest forebrain vector concentrations, ICM distributes more uniformly, and IV yields lowest overall brain vector levels.
- **Figure 4**: Calculated whole brain homogenate vector concentrations comparing routes (Panel A) and ICM dose levels (Panel B).
  - *Significance*: Quantifies that ICM and IST routes produce 32–46-fold higher brain vector concentrations than IV. Demonstrates dose proportionality for ICM route across 5E11–5E12 Vg/rat.
- **Figure 5**: Plasma mAb concentration-time profiles and dose-normalized AUCt values for all groups.
  - *Significance*: Shows steady-state mAb concentrations achieved by 3 weeks. Non-immunosuppressed rats show rapid decline after 2 weeks. Dose-proportional plasma mAb exposure for ICM route. AAV5 yields ~300-fold lower mAb exposure than AAV9.
- **Figure 6**: Regional brain mAb homogenate concentrations for all routes and doses at 3-week and 8-week terminal time points.
  - *Significance*: Demonstrates that IST produces highest forebrain mAb concentrations (31-fold higher than hindbrain). ICM yields uniform distribution across brain regions. IV produces lowest brain mAb levels.
- **Figure 7**: Calculated whole brain homogenate mAb concentrations comparing routes (Panel A) and ICM dose levels with immunosuppression comparison (Panel B).
  - *Significance*: Quantifies that ICM and IST routes produce 15–29-fold higher brain mAb concentrations than IV. Non-immunosuppressed rats show ~3-fold lower brain mAb. Dose proportionality confirmed for ICM route.
- **Figure 8**: Terminal CSF mAb concentrations (Panel A) and recovery-corrected ISF mAb concentrations from striatum microdialysis (Panel B).
  - *Significance*: Shows that ICM and IST routes produce CSF mAb concentrations 4–64-fold higher than ABC prediction (0.3% of plasma), confirming local brain production. IV route CSF levels are within ABC prediction, indicating plasma partitioning.
- **Figure 9**: Terminal mAb concentrations in lung, liver, and heart homogenates for all routes.
  - *Significance*: Demonstrates that IV route produces 9–15-fold higher peripheral tissue mAb concentrations than brain. ICM route shows similar brain and peripheral tissue levels. IST route has 47–407-fold lower peripheral mAb, confirming brain-targeted expression.

---

### Code & Reproducibility Assessment
No code or modeling scripts were provided. The analysis relied on non-compartmental analysis in Phoenix WinNonlin 8.0 and statistical testing in GraphPad Prism 9.3. The authors state 'No datasets were generated or analysed during the current study' in the data availability statement, which appears inconsistent with the extensive experimental data presented.

---

### Future Directions
This study raises several important questions for future investigation. First, the mechanistic basis for the dramatic difference in transduction efficiency between AAV9 and AAV5 (~200-fold lower mAb expression despite similar vector genome distribution) warrants further study, potentially involving intracellular trafficking, capsid uncoating, or promoter activity differences. Second, the time course of transgene expression beyond 8 weeks needs characterization to determine whether steady-state is maintained or declines over longer periods. Third, formal population PK modeling of the rich vector and mAb concentration data would enable quantification of inter-individual variability and identification of covariates (e.g., body weight, cannula placement accuracy) that influence transduction efficiency. Fourth, the companion QSP model should be validated against these data to enable translation to non-human primates and humans. Fifth, the immunogenicity mechanism should be confirmed with anti-drug antibody (ADA) assays and T-cell response characterization. Sixth, the impact of different promoters (e.g., weaker universal promoters like SV40 vs. strong CAG) on immunogenicity and expression levels should be explored. Finally, the safety and tolerability of repeated dosing or combination with immunosuppression regimens in larger animal models is needed before clinical translation.

---

### Expert Commentary
This study fills a critical gap in the AAV gene therapy literature by providing quantitative, concentration-based biodistribution data for a therapeutic antibody transgene, rather than the semi-quantitative fluorescent protein (GFP) data that dominates the field. The use of ELISA to measure actual mAb concentrations in brain homogenate, CSF, and ISF (via microdialysis) is a significant methodological advance that enables direct comparison with traditional monoclonal antibody PK data. The inclusion of immunosuppression as a variable is particularly valuable, as immunogenicity is a known challenge in AAV gene therapy but is often not systematically evaluated. The observation that non-immunosuppressed rats show a sharp decline in mAb concentrations after 2 weeks, with preserved vector genome levels, strongly suggests a humoral immune response against the transgene product rather than vector clearance. This has important implications for clinical trial design, where immunosuppression regimens may be necessary for sustained expression of non-self proteins. The dose-proportionality data across a 10-fold range for the ICM route provides confidence in linear transduction kinetics, simplifying dose selection. However, the small sample size (n=2–3 per group) and high inter-animal variability limit the statistical power of many comparisons. The absence of formal population PK modeling is a missed opportunity to quantify inter-individual variability and identify covariates. The companion QSP modeling paper will be essential to integrate these rich data into a mechanistic framework.

---

### Bottom Line
This comprehensive rat biodistribution study demonstrates that local CNS administration (intrastriatal or intracisterna magna) of AAV9 vectors encoding a therapeutic monoclonal antibody yields dramatically higher and more sustained brain antibody concentrations than systemic intravenous delivery, with intrastriatal administration achieving the highest forebrain levels despite a 20-fold lower dose. Immunosuppression is critical to maintain transgene expression beyond two weeks, and dose proportionality was confirmed across a 10-fold dose range for the ICM route. These data provide essential quantitative benchmarks for developing physiologically-based pharmacokinetic (PBPK) and quantitative systems pharmacology (QSP) models for AAV-mediated CNS gene therapy.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-07-26-differential-expression-of-monoclonal-antibody-in-rat-brain-following-systemic/figures/fig_01.png)

![Figure 2]({{ site.baseurl }}/assets/digests/2026-07-26-differential-expression-of-monoclonal-antibody-in-rat-brain-following-systemic/figures/fig_02.png)

![Figure 3]({{ site.baseurl }}/assets/digests/2026-07-26-differential-expression-of-monoclonal-antibody-in-rat-brain-following-systemic/figures/fig_03.png)

![Figure 4]({{ site.baseurl }}/assets/digests/2026-07-26-differential-expression-of-monoclonal-antibody-in-rat-brain-following-systemic/figures/fig_04.png)

![Figure 5]({{ site.baseurl }}/assets/digests/2026-07-26-differential-expression-of-monoclonal-antibody-in-rat-brain-following-systemic/figures/fig_05.png)

![Figure 6]({{ site.baseurl }}/assets/digests/2026-07-26-differential-expression-of-monoclonal-antibody-in-rat-brain-following-systemic/figures/fig_06.png)

![Figure 7]({{ site.baseurl }}/assets/digests/2026-07-26-differential-expression-of-monoclonal-antibody-in-rat-brain-following-systemic/figures/fig_07.png)

![Figure 8]({{ site.baseurl }}/assets/digests/2026-07-26-differential-expression-of-monoclonal-antibody-in-rat-brain-following-systemic/figures/fig_08.png)

![Figure 9]({{ site.baseurl }}/assets/digests/2026-07-26-differential-expression-of-monoclonal-antibody-in-rat-brain-following-systemic/figures/fig_09.png)
```