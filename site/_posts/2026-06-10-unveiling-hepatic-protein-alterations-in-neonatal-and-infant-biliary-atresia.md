---
layout: post
title: "Unveiling Hepatic Protein Alterations in Neonatal and Infant Biliary Atresia"
date: 2026-06-10
authors: "Z. M-Al., M. H., B. A., J. B., N. A., A. Rostami-Hodjegan"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025"
doi: "["
paper_type: popk
tags: [popk, pbpk, pediatrics]
excerpt_text: "This study provides the first comprehensive quantitative proteomic analysis of drug-metabolizing enzymes and transporters in neonatal and infant livers with biliary atresia (BA). The data reveal non-uniform alterations—some enzymes up to 17-fold higher, others reduced—challenging the assumption of global hepatic impairment in BA. These findings are critical inputs for developing physiologically based pharmacokinetic (PBPK) models in this orphan population."
pdf_path: "/assets/digests/2026-06-10-unveiling-hepatic-protein-alterations-in-neonatal-and-infant-biliary-atresia/PMx_Unveiling_Hepatic_Protein_Alterations_in_20260610.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study provides the first comprehensive quantitative proteomic analysis of drug-metabolizing enzymes and transporters in neonatal and infant livers with biliary atresia (BA). The data reveal non-uniform alterations—some enzymes up to 17-fold higher, others reduced—challenging the assumption of global hepatic impairment in BA. These findings are critical inputs for developing physiologically based pharmacokinetic (PBPK) models in this orphan population.

---

### Executive Summary
This study fills a critical gap in pediatric systems pharmacology by quantifying the abundance of CYPs, UGTs, and drug transporters in liver tissue from neonates and infants with biliary atresia versus controls using liquid chromatography-tandem mass spectrometry (LC-MS/MS) proteomics. The results show a highly non-uniform pattern: CYP2A6, CYP2E1, and UGT2B7 are significantly upregulated (up to 17-fold), while CYP4F11 and certain SLC transporters are downregulated. These data contradict the assumption of universally reduced hepatic metabolic capacity in BA and provide essential systems parameters for bottom-up PBPK modeling. The study highlights the need for disease- and pathway-specific dose adjustments, using paracetamol and morphine as illustrative examples.

---

### Scientific Context & Motivation
Biliary atresia is a rare neonatal cholestatic disease leading to cirrhosis if untreated. Current pediatric PBPK models rely on healthy ontogeny data and do not account for disease-related changes in hepatic proteins. This study addresses the scarcity of systems data in rare pediatric liver disease by generating the first comprehensive proteomic dataset for BA. It challenges the paradigm that liver disease uniformly reduces metabolic capacity.

---

## ⚡ Methodological Snapshot
Global label-free quantitative proteomics (LC-MS/MS) using the total protein approach (TPA) on microsomal fractions from liver tissue of 25 BA patients (13 neonates, 12 infants) and 19 controls (13 neonates, 6 infants). Proteins were identified and quantified via Progenesis QI and Mascot search engine. Statistical analysis used Mann-Whitney U tests for group comparisons.

---

## 🏗️ Structural Model Breakdown
Not applicable; this is not a PK/PD modeling study. The study provides measured protein abundance values (pmol/mg microsomal protein) for 24 CYPs, 9 UGTs, 10 ABC transporters, and 10 SLC transporters. These are intended as scaling factors in bottom-up PBPK models to predict clearance. No structural model equations are presented.

---

### Detailed Methodological Analysis

#### Modeling Approach
Global quantitative proteomics, label-free LC-MS/MS with total protein approach (TPA). No compartmental modeling or PK parameter estimation was performed; the data are intended as systems input for PBPK model development.

#### Data Sources
Liver tissue from BA patients (n=25) obtained during Kasai portoenterostomy from the University of Bradford Biobank. Control liver tissue (n=19) from Erasmus University Medical Centre, derived from patients with non-hepatic conditions (e.g., cardiac dysfunction). Age groups: neonates (0-1 month) and infants (1-12 months). Microsomal fractions were prepared and analyzed in parallel.

#### Estimation Methods
Not applicable for this descriptive proteomic study. Protein abundance is expressed as pmol/mg total protein, calculated via the total protein approach using spectral counts and validated with known standards. No PK parameter estimation was performed.

#### Model Evaluation
Not applicable; no predictive model was built. Quality control includes reporting coefficient of variation (CV) for each protein and statistical significance (Mann-Whitney U test) for group comparisons. No formal model evaluation (e.g., VPC, bootstrap) was conducted.

#### Covariate Analysis
No formal covariate analysis. Age group (neonate vs infant) and disease status (BA vs control) are the primary grouping variables. Sex, genetic polymorphisms, and other potential covariates were not systematically analyzed due to limited donor information.

---

### Statistical Rigor Assessment
Appropriate use of non-parametric Mann-Whitney U test for comparing two groups (BA vs control) within each age class. Sample sizes are small (n=6-13 per group) but reasonable for a rare disease proteomic study. The paper does not report correction for multiple hypothesis testing (e.g., Bonferroni); with over 50 proteins tested, some significant p-values may be false positives. Confidence intervals and effect sizes beyond fold-change are not provided. CV% values are reported and highlight substantial inter-individual variability. No adjustment for potential confounders (e.g., age, sex, genotype) was performed.

---

## 📊 Key Findings
In neonates with BA, CYP2A6, CYP2B6, CYP2E1, CYP2J2, CYP4F2, and CYP7B1 were significantly increased ($P<0.0001$) compared to controls, with fold changes ranging from 6 to >17. CYP2C9 increased by 56 pmol/mg mean difference. UGT1A1, UGT2B4, and UGT2B7 showed up to 16-fold higher abundance in BA neonates. ABCF1 increased dramatically (46-fold), while SLC4A1, SLC25A4, and SLC27A5 were decreased. In infants, similar trends but generally lower fold changes. CYP2C19 and CYP20A1 were reduced in BA. The non-uniform pattern suggests selective alteration of hepatic function rather than global impairment.

---

## 💡 Clinical & Regulatory Implications
The non-uniform protein expression alterations imply that drug dosing adjustments in BA patients must be pathway-specific. For paracetamol (metabolized by CYP2E1 and UGTs), upregulated CYP2E1 may increase production of the toxic metabolite NAPQI, raising hepatotoxicity risk and necessitating dose reduction or monitoring. For morphine (UGT2B7 substrate), upregulated UGT2B7 may increase formation of active M6G, potentially enhancing analgesia but also increasing risk of respiratory depression. Reduced SLC transporters may decrease hepatic uptake of certain drugs. Current clinical dosing in BA is empirical; these data provide a rationale for PBPK-based dose predictions. However, clinical PK studies are urgently needed to verify the predicted changes before implementation in practice.

---

### Strengths & Limitations

#### Strengths
- First comprehensive proteomic analysis of drug-metabolizing enzymes and transporters in neonatal and infant biliary atresia
- Use of label-free total protein approach with stringent quality control and identical processing for BA and control samples (eliminates inter-lab variability)
- Quantitative data for 24 CYPs, 9 UGTs, 10 ABC transporters, and 10 SLC transporters, providing a broad systems pharmacology resource
- Direct comparison to age-matched controls processed under identical conditions, minimizing batch effects

#### Limitations (Acknowledged by Authors)
- Control tissue derived from patients with non-hepatic conditions (e.g., cardiac dysfunction), not from truly healthy donors
- BA liver samples obtained during Kasai procedure may be enriched for certain tissue regions or stages of disease
- In vitro proteomic measurements may not perfectly reflect in vivo enzyme/transporter activity

#### Limitations (Expert Review)
- No functional validation of measured protein abundance changes (e.g., activity assays)
- Sample sizes are small (n=13 neonatal BA, n=12 infant BA, n=19 controls) and may limit generalizability
- Age matching is approximate; exact ages and developmental windows may vary between groups
- High coefficients of variation (CV often >50%) for many proteins indicate substantial inter-individual variability
- No correction for multiple hypothesis testing (e.g., Bonferroni) is reported; with over 50 proteins, some significant p-values may be false positives
- Clinical pharmacokinetic data to verify predicted clearance changes are absent
- Sex and genetic polymorphism data were not comprehensively collected or analyzed

#### Generalizability
Data are specific to biliary atresia at the time of Kasai portoenterostomy and cannot be extrapolated to other liver diseases, later disease stages, or other pediatric populations without further study. However, the framework for using such quantitative proteomic data in PBPK modeling is generalizable. The high inter-individual variability suggests that population-level predictions may require Bayesian updating with individual data.

---

---

### Figures & Tables

- **Figure 1**: Individual abundance values of CYP enzymes (pmol/mg protein) in control vs BA livers for neonates (a) and infants (b).
  - *Significance*: Shows the striking upregulation of multiple CYP isoforms in BA, particularly CYP2A6, CYP2E1, and CYP2C9, with statistical annotations.
- **Figure 2**: Protein expression of UGT enzymes in BA vs control livers for neonates (a,b) and infants (c,d).
  - *Significance*: Demonstrates consistent upregulation of UGTs in BA, especially UGT1A1, UGT2B7, and UGT1A4, with implications for glucuronidation capacity.
- **Figure 3**: Protein abundance of ABC transporters in neonatal and infant livers under control and BA conditions.
  - *Significance*: Highlights dramatic upregulation of ABCF1 (46-fold) and MRP6 in BA, while BSEP and ABCE1 show little change, indicating selective transporter alterations.
- **Figure 4**: Protein abundance of SLC transporters in neonatal and infant livers under control and BA conditions.
  - *Significance*: Reveals downregulation of SLC4A1, SLC25A4, and SLC27A5 in BA, potentially reducing hepatic uptake of certain drugs.
- **Figure 5**: Relative differences (fold change, BA/control) in median protein abundance for CYPs (a), UGTs (b), ABC transporters (c), and SLC transporters (d) in neonates and infants.
  - *Significance*: Provides a clear summary of the non-uniform proteomic response to BA across both age groups, with neonates generally showing larger fold changes.
- **Table 1**: Quantitative data (median, mean, SD, CV%, range) for CYP enzymes in control and BA livers for neonates and infants, with statistical significance.
  - *Significance*: Provides the numerical values for all CYP isoforms analysed, allowing direct use in PBPK scaling and highlighting variability.
- **Table 2**: Quantitative data for ABC transporters (ABCA3, ABCA6, ABCA8, ABCB6, ABCB7, BSEP, MRP6, PMP70, ABCE1, ABCF1) in control and BA livers.
  - *Significance*: Documents the large fold changes (especially ABCF1) and variability, essential for transporter-mediated clearance predictions.
- **Table S3**: Quantitative data for UGT enzymes in control and BA livers (supplementary).
  - *Significance*: Supports Figure 2 with detailed statistics, confirming the upregulation of multiple UGT isoforms in BA.
- **Table S4**: Quantitative data for SLC transporters in control and BA livers (supplementary).
  - *Significance*: Provides detailed abundance data for SLC transporters, including those downregulated in BA.

---

### Supplementary Materials
Supplementary materials include detailed methods (Supporting Methods), Tables S1-S4 for donor demographics and additional protein abundance data (UGTs, SLCs), and Figures S1-S4 showing pie charts of enzyme and transporter distribution across age groups and disease states.

---

### Future Directions
Clinical PK studies in BA patients to verify predicted clearance changes. Integration with functional assays (e.g., enzyme activity measurements) to confirm proteomic findings. Expanding proteomic data to include other pediatric liver diseases and later stages of BA. Incorporating these data into PBPK models to generate dosing recommendations for commonly used drugs (paracetamol, morphine, antibiotics). Longitudinal studies to assess protein expression changes with disease progression or post-Kasai outcome.

---

### Expert Commentary
This study is a valuable addition to pediatric systems pharmacology, addressing a key data gap for rare disease PBPK modeling. The non-uniform pattern of protein expression changes is particularly noteworthy—conventional wisdom might assume reduced clearance in liver disease, but these data show selective upregulation of many pathways. As a pharmacometrician, I see this as a call to action: we need to incorporate disease-specific proteomics into our models rather than relying on healthy ontogeny data alone. The authors' choice to illustrate with paracetamol and morphine is acute. However, the high inter-individual variability (CV often >50%) reminds us that population-based PBPK may be insufficient; Bayesian forecasting with therapeutic drug monitoring may be necessary. The lack of clinical validation is a major gap, but these data at least provide a rational starting point for model-informed study design.

---

### Bottom Line
This study provides essential quantitative systems pharmacology data for neonatal and infant biliary atresia, revealing that the disease selectively upregulates and downregulates key drug-metabolizing enzymes and transporters. These data can be directly integrated into pediatric PBPK models to support model-informed dosing for drugs like paracetamol and morphine, which are commonly used in BA. However, clinical pharmacokinetic studies are urgently needed to verify the predicted changes in drug clearance.

---

---

## 📊 Figures

![Individual abundance values of CYP enzymes in pmol/mg protein from control compared with biliary atresia (BA) neonatal (a) and infant livers (b). Expression leve]({{ site.baseurl }}/assets/digests/2026-06-10-unveiling-hepatic-protein-alterations-in-neonatal-and-infant-biliary-atresia/figures/fig_01.png)

![Protein expression UGT enzymes in biliary atresia (BA) and control livers from neonates (a, b) and infants (c, d). Statistical significance is indicated by aster]({{ site.baseurl }}/assets/digests/2026-06-10-unveiling-hepatic-protein-alterations-in-neonatal-and-infant-biliary-atresia/figures/fig_02.png)

![Protein abundance of ABC transporters in neonatal and infant livers under control and biliary atresia (BA) conditions. Comparison of ABC transporters in (a) neon]({{ site.baseurl }}/assets/digests/2026-06-10-unveiling-hepatic-protein-alterations-in-neonatal-and-infant-biliary-atresia/figures/fig_03.png)

![Protein abundance of SLCs in neonatal and infant livers under control and biliary atresia (BA) conditions. Comparison of SLC transporters in (a) neonatal liver c]({{ site.baseurl }}/assets/digests/2026-06-10-unveiling-hepatic-protein-alterations-in-neonatal-and-infant-biliary-atresia/figures/fig_04.png)

![Relative differences in median protein abundance in neonates and infants with biliary atresia (BA) compared with controls for (a) CYP enzymes (b) UGT enzymes (c)]({{ site.baseurl }}/assets/digests/2026-06-10-unveiling-hepatic-protein-alterations-in-neonatal-and-infant-biliary-atresia/figures/fig_05.png)