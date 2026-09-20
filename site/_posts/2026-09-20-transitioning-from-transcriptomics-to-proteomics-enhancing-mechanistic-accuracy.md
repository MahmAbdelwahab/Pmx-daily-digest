---
layout: post
title: "Transitioning from Transcriptomics to Proteomics: Enhancing Mechanistic Accuracy in PBPK Modeling via Absolute Protein Abundances"
date: 2026-09-20
authors: "Ning C, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(9)"
doi: "10.1002/psp4.70316"
paper_type: methodology
tags: [methodology, pbpk]
excerpt_text: "The authors constructed ProteinDB, a proteomics-based tissue expression database for PK-Sim, derived from PaxDb v6.0 absolute protein abundances and harmonized to μmol/L tissue concentrations. Cross-platform and cross-omics comparisons showed strong CYP agreement but revealed systematic transcriptomics bias in tissue distribution patterns, and PBPK evaluations across four probe substrates and two DDI scenarios demonstrated comparable or superior predictive performance versus transcriptomics-based profiles, with notable gains in purely bottom-up simulations."
pdf_path: "/assets/digests/2026-09-20-transitioning-from-transcriptomics-to-proteomics-enhancing-mechanistic-accuracy/PMx_Transitioning_from_Transcriptomics_to_Pr_20260920.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
The authors constructed ProteinDB, a proteomics-based tissue expression database for PK-Sim, derived from PaxDb v6.0 absolute protein abundances and harmonized to μmol/L tissue concentrations. Cross-platform and cross-omics comparisons showed strong CYP agreement but revealed systematic transcriptomics bias in tissue distribution patterns, and PBPK evaluations across four probe substrates and two DDI scenarios demonstrated comparable or superior predictive performance versus transcriptomics-based profiles, with notable gains in purely bottom-up simulations.

---

### Executive Summary
This methodology paper addresses a fundamental limitation in bottom-up PBPK modeling: the reliance on transcriptomics-derived tissue expression databases (EST, Array, RT-PCR, Bgee) in PK-Sim, despite mRNA levels being imperfect surrogates for functional protein abundance. The authors developed ProteinDB, a curated SQLite expression database integrating quantitative proteomics data from PaxDb v6.0 and a specialized erythrocyte dataset, standardized to absolute concentrations (μmol/L tissue) and mapped to gene-centered ENSG identifiers. Cross-platform comparisons against Simcyp V22 and GastroPlus X.2 revealed protein-class-dependent agreement, with CYPs showing the highest consistency (GMFE 1.85–2.71) and low-abundance proteins (e.g., UGT1A10, BCRP) exhibiting >100-fold discrepancies driven largely by inherent inter-study proteomics variability. Cross-omics analyses demonstrated that transcriptomics databases compress tissue expression dynamic ranges and systematically overestimate brain-to-liver ratios, with RT-PCR and Bgee showing closest concordance with proteomics. PBPK evaluations using midazolam, digoxin, rifampicin, and tizanidine, including rifampicin-mediated DDI scenarios, showed ProteinDB achieved comparable or superior predictive performance, particularly in purely bottom-up simulations where it outperformed transcriptomics profiles (tizanidine MRD 3.08 vs 4.86). The work provides a practical, openly available proteomics-based alternative that reduces reliance on empirical expression modification and improves mechanistic coherence in PK-Sim modeling.

---

### Scientific Context & Motivation
Bottom-up PBPK modeling scales in vitro kinetic parameters to organ level using tissue-specific protein abundances, making expression databases critical determinants of model accuracy. PK-Sim's existing databases rely on transcriptomics (mRNA) data, which poorly correlate with functional protein abundance due to post-transcriptional regulation, translational efficiency differences, and protein turnover variability. This creates structural uncertainty where compensatory parameter adjustments can mask physiologically inappropriate system parameterization. While large-scale quantitative proteomics datasets (e.g., PaxDb) now provide direct protein abundance measurements, their integration into PBPK platforms has been limited and uneven, and systematic characterization of differences between transcript- and protein-based tissue distribution patterns has been lacking. This study addresses the gap by constructing a proteomics-based expression database for PK-Sim and rigorously evaluating its performance against existing transcriptomics-based alternatives.

---

## ⚡ Methodological Snapshot
ProteinDB is a proteomics-based tissue expression database for PK-Sim, constructed from quantitative proteomics data primarily sourced from PaxDb v6.0 (covering standard solid organs and plasma) plus a specialized erythrocyte dataset from Bryk et al. Raw proteomics data were processed through a gene-centered mapping strategy: gene symbols were cleaned of formatting artifacts, mapped to Ensembl gene identifiers (ENSG) via BiomaRt (Ensembl Release 115), with protein-level identifiers (Ensembl protein IDs, UniProt IDs) used as rescue for failed mappings. A maximum-abundance rule was applied to resolve multiple records mapping to the same ENSG ID within each tissue, preventing double-counting from isoforms, redundant identifiers, or overlapping peptide assignments. Protein abundance values were converted to absolute tissue concentrations (μmol/L) using a unified scaling framework, and the final database was implemented as a relational SQLite .expressionDB file following the schema described by Cordes and Rapp. The database contains 18,377 unique gene-centered protein entries across 20 human tissues, with all core ADME proteins from mainstream PBPK platforms retained without attrition. Evaluation involved cross-platform comparison of hepatic abundances (vs PK-Sim v12, Simcyp V22, GastroPlus X.2), cross-omics comparison of liver-normalized tissue distributions (vs EST, Array, RT-PCR, Bgee transcriptomics databases), and functional PBPK evaluation using four probe substrates (midazolam, digoxin, rifampicin, tizanidine) with associated DDI scenarios.

---

## 📐 Statistical Framework
The evaluation framework assumes that absolute protein abundances (μmol/L tissue) provide a more direct physiological basis for PBPK system parameterization than transcriptomics-derived relative expression. Cross-platform and cross-omics comparisons employed log2-transformed Pearson correlations (capturing linear concordance on the log scale), Spearman rank correlations (capturing monotonic rank-order agreement), fold agreement thresholds (2-fold and 5-fold), and geometric mean fold error (GMFE) as a multiplicative accuracy metric. Leave-one-out and leave-two-out sensitivity analyses were used to identify influential discordant proteins driving class-level GMFE inflation. For PBPK model evaluation, mean relative deviation (MRD) quantified concentration-time profile accuracy, while GMFE assessed predicted-to-observed AUC and Cmax ratios. The underlying statistical assumption is that log-transformed abundance data approximate normality, justifying correlation-based metrics, and that GMFE provides a symmetric multiplicative error measure appropriate for abundance ratios spanning orders of magnitude. The intra-PaxDb inter-study variability analysis used max/min ratios to contextualize cross-platform discrepancies against inherent proteomics data variability.

---

### Estimator Behavior
The key 'estimator' in this work is the tissue-specific protein abundance value derived from the proteomics data processing pipeline. The maximum-abundance deduplication rule was evaluated against arithmetic mean and sum-based alternatives, showing robustness for 126 of 129 duplicated genes, with only HAGH, SOD2, and SLC29A1 (from the PharmaADME extended list) affected. Cross-platform GMFE values ranged from 1.85 (CYP, GastroPlus) to 5.08 (UGT, GastroPlus), indicating protein-class-dependent accuracy. Sensitivity analyses demonstrated that excluding just one or two highly discordant proteins (e.g., CYP3A5, BCRP, UGT1A10) reduced GMFE to ≤2.0 in nearly all comparisons, showing that overall agreement is strong but driven by a small number of outliers. For 16 of 17 discordant proteins identified by leave-two-out analysis, the maximum cross-platform ratio fell within the intra-PaxDb inter-study variability range, indicating that discrepancies reflect inherent proteomics data variability rather than systematic curation errors. The UGT1A10 discrepancy with Simcyp (293-fold) exceeded intra-PaxDb variability (105-fold), suggesting a substantively different source dataset in Simcyp. In PBPK model evaluation, ProteinDB showed consistent performance: MRD values for systemic exposure were comparable across expression profiles (e.g., midazolam 1.75 vs 1.72–1.82; digoxin 1.71 vs 1.67), while secondary endpoints (glucuronidation MRD 1.17 vs 4.61 baseline) and purely bottom-up predictions (tizanidine MRD 3.08 vs 4.86 library) showed clear improvements.

---

### Validation Design
Validation employed a multi-tiered design. First, cross-platform comparison of hepatic ADME protein abundances against PK-Sim v12, Simcyp V22 (White American population), and GastroPlus X.2 (30-year-old healthy American males), with all values harmonized to μmol/L tissue. Second, cross-omics comparison of liver-normalized tissue distributions against four transcriptomics-based PK-Sim databases (EST, Array, RT-PCR, Bgee) for small intestine, kidney, and brain. Third, functional PBPK evaluation using four probe substrates selected for distinct disposition mechanisms: midazolam (CYP3A4 metabolism), digoxin (P-gp efflux, OATP1B1 uptake), rifampicin (multi-pathway: CYP3A4, OATP1B1, P-gp, induction), and tizanidine (CYP1A2 metabolism, AADAC). Models were reconstructed in PK-Sim with three expression profiles (baseline transcriptomics, empirically modified library, ProteinDB), using a standardized parameter identification procedure (Monte-Carlo + Levenberg-Marquardt optimization, 10,000 iterations) with identical optimization spaces across profiles. DDI scenarios (rifampicin-midazolam, rifampicin-digoxin) provided stringent evaluation under multi-process perturbation. A purely bottom-up tizanidine simulation without parameter optimization isolated the physiological accuracy of the expression database from compensatory fitting. Performance metrics included MRD for concentration-time profiles and GMFE for AUC/Cmax ratios, with additional endpoints for urinary excretion, glucuronidation extent, and enzyme induction fold.

---

### Applicability Boundaries
ProteinDB is applicable to PBPK modeling in PK-Sim for standard solid organs and plasma, with strong performance for CYP-mediated disposition and moderate performance for UGTs, transporters, and other metabolic enzymes. It works best when: (1) the drug's disposition is governed by well-quantified proteins with mature proteomics evidence (e.g., CYPs), (2) the modeling goal is prospective prediction or bottom-up simulation where physiological accuracy matters, and (3) tissue distribution across kidney and small intestine is relevant. The database is less reliable for: (1) low-abundance proteins (e.g., UGT1A10, BCRP) where cross-platform discrepancies exceed 100-fold and quantification is challenging, (2) brain tissue where cross-omics agreement was consistently poor (<10% 2-fold concordance), (3) populations requiring age, disease, or demographic stratification (not currently included), and (4) genes affected by deduplication (HAGH, SOD2, SLC29A1) where the maximum-abundance rule may not reflect the biologically relevant form. Users should exercise caution with 'sensitive' compounds involving CYP2D6, CYP2C18, CYP3A5, UGT1A7, UGT1A10, AOX1, GSTP1, SULT1A2, NAT2, and BCRP, where cross-platform abundance differences may materially alter pathway contributions.

---

### Comparison to Alternatives
Compared to transcriptomics-based PK-Sim databases (EST, Array, RT-PCR, Bgee), ProteinDB provides absolute protein abundances (μmol/L tissue) rather than relative mRNA levels, eliminating the need for reference concentration compilation and empirical scaling. Transcriptomics databases exhibited compressed dynamic ranges and systematically higher brain-to-liver ratios; EST showed negligible correlation with proteomics in small intestine (Pearson r = 0.07), while RT-PCR and Bgee showed closest concordance (r = 0.53–0.71). Compared to curated databases in Simcyp V22 and GastroPlus X.2, ProteinDB showed strong CYP agreement (GastroPlus GMFE 1.85, 80% within 2-fold; Simcyp GMFE 2.71) but greater divergence for UGTs (GastroPlus GMFE 5.08) and transporters (Simcyp GMFE 2.93). The key advantage of ProteinDB is its transparency: all data provenance (study IDs, assay types, detection frequency, weighted CV%) is documented, whereas Simcyp and GastroPlus databases are proprietary. In PBPK model performance, ProteinDB matched or exceeded transcriptomics profiles across all evaluated scenarios, with the most pronounced benefit in purely bottom-up simulations (tizanidine MRD 3.08 vs 4.86). The main disadvantage is lower gene coverage (18,377 vs 57,427 in Bgee) and lack of demographic stratification.

---

### Implementation Guidance
ProteinDB is implemented as a SQLite .expressionDB file, directly compatible with PK-Sim v12.1 (Open Systems Pharmacology Suite). The database and associated code are available at https://github.com/translatPK-KUL/ProteinDB. Abundances are stored as absolute concentrations (μmol/L tissue), eliminating unit conversion and scaling steps. The database includes 19 interconnected tables storing gene symbols, Entrez Gene IDs, official full names, protein abundances, study IDs (ProteomeXchange accessions), assay types, detection frequency, and weighted CV%. For population variability modeling, the weighted CV% values can serve as conservative starting points for estimating population-level protein expression distributions. Practical recommendations: (1) exercise caution with deduplicated genes (HAGH, SOD2, SLC29A1) and consider sensitivity analyses with alternative aggregation rules; (2) for low-abundance proteins (UGT1A10, BCRP), cross-validate against other platforms or literature values; (3) for brain-related modeling, be aware of poor cross-omics agreement and consider additional data sources; (4) the database is designed as a deterministic baseline—population variability should be introduced at the population building block level. Computational cost is minimal: the SQLite database is lightweight and integrates directly into PK-Sim's existing architecture without additional processing overhead.

---

## 📊 Key Findings
1) ProteinDB contains 18,377 unique gene-centered protein entries across 20 human tissues, with all core ADME proteins from mainstream PBPK platforms retained without attrition. 2) Cross-platform hepatic abundance comparisons showed strong CYP agreement (GastroPlus GMFE 1.85, 80% within 2-fold; PK-Sim GMFE 2.42; Simcyp GMFE 2.71), but UGTs and transporters showed greater divergence, with sensitivity analyses revealing that 1–2 highly discordant proteins (e.g., CYP3A5, BCRP, UGT1A10) drove most quantitative differences. 3) Intra-PaxDb inter-study variability explained cross-platform discrepancies for 16 of 17 discordant proteins, indicating inherent proteomics data variability rather than curation errors. 4) Transcriptomics databases exhibited compressed dynamic ranges and systematically higher brain-to-liver ratios compared to ProteinDB; RT-PCR and Bgee showed closest concordance (Pearson r = 0.53–0.71), while EST showed negligible correlation in small intestine (r = 0.07). 5) In PBPK modeling, ProteinDB matched or improved predictive performance across all four probe substrates; for midazolam, it reduced glucuronidation MRD from 4.61 (baseline) to 1.17, and in the rifampicin-midazolam DDI, it reduced AUC ratio GMFE from 1.90 (library) to 1.66. 6) In purely bottom-up tizanidine simulations without parameter optimization, ProteinDB substantially outperformed the transcriptomics profile (MRD 3.08 vs 4.86; AUC GMFE 3.11 vs 4.72).

---

### Strengths & Limitations

#### Strengths
- Provides a direct physiological basis for system parameterization using absolute protein abundances (μmol/L tissue) rather than mRNA proxies, eliminating reference concentration compilation and unit conversion inconsistencies
- Openly available database and code (GitHub: translatPK-KUL/ProteinDB) with transparent data provenance including study IDs, assay types, detection frequency, and weighted CV%
- Comprehensive validation across multiple dimensions: cross-platform (PK-Sim, Simcyp, GastroPlus), cross-omics (4 transcriptomics databases), and functional PBPK evaluation (4 probe substrates + 2 DDI scenarios)
- Rigorous sensitivity analyses for deduplication strategy (maximum-abundance rule vs mean/sum alternatives) and discordant protein identification (leave-one-out and leave-two-out GMFE)
- Standardized parameter identification procedure ensuring fair comparison across expression profiles
- Inclusion of a purely bottom-up simulation (tizanidine without optimization) that isolates the physiological accuracy of the expression database from compensatory parameter fitting
- Practical implementation as a relational SQLite .expressionDB file directly compatible with PK-Sim architecture

#### Limitations (Acknowledged by Authors)
- No age, disease state, or inter-individual variability stratification; relies on PaxDb-reported average abundances
- Lower gene coverage (18,377) than some transcriptomics databases (e.g., Bgee with 57,427 genes)
- Potential inaccuracies for low-abundance proteins where heterogeneous quantification workflows and limited assay sensitivity may not consistently capture abundances
- Evaluation limited to four probe compounds; broader validation needed for generalizability
- Maximum-abundance deduplication rule is a pragmatic choice; biological origin of multiple mappings does not always permit a uniquely correct aggregation rule

#### Limitations (Expert Review)
- The standardized parameter identification procedure may partially mask expression profile differences through compensatory optimization of other model parameters, potentially understating the impact of expression source on model predictions
- Cross-platform comparisons were limited to hepatic abundances; extrahepatic tissue comparisons across platforms were not performed
- Brain tissue showed consistently poor cross-omics agreement (<10% 2-fold concordance), suggesting either proteomics data limitations in brain or genuine transcript-protein divergence that warrants further investigation
- The maximum-abundance rule, while pragmatic, may systematically overestimate abundance for genes with multiple isoforms or splice variants where the predominant form is not necessarily the functionally relevant one
- No assessment of how ProteinDB affects population variability predictions or clinical trial simulation outcomes
- The DDI evaluation was limited to rifampicin as perpetrator; evaluation with other perpetrator mechanisms (e.g., time-dependent inhibition, transporter-mediated DDI) is lacking

#### Generalizability
The findings are directly generalizable to PBPK modeling workflows within the Open Systems Pharmacology (PK-Sim) ecosystem, particularly for hepatic and intestinal drug disposition. The approach is extensible to other proteomics datasets and platforms as they become available. However, generalizability to pediatric populations, disease states, genetic polymorphisms, and a broader range of drug classes (beyond CYP3A4, CYP1A2, UGT1A4, P-gp, OATP1B1 substrates) requires further validation. The consistent superiority in purely bottom-up simulations suggests the physiological basis is sound, but the magnitude of benefit may vary by compound and pathway.

---

---

### Figures & Tables

- **Figure 1**: Workflow diagram summarizing ProteinDB construction, integration, and evaluation pipeline, including data sourcing from PaxDb v6.0 and erythrocyte dataset, gene mapping, scaling to μmol/L, deduplication, and PK-Sim integration.
  - *Significance*: Provides the overall methodological framework and data processing pipeline for the database construction.
- **Figure 2**: Hepatic abundances of CYPs (A), UGTs (B), other enzymes (C), and transporters (D) compared across ProteinDB, GastroPlus X.2, PK-Sim v12, and Simcyp V22, highlighting protein-class-dependent agreement and identifying highly discordant proteins.
  - *Significance*: Visualizes the cross-platform comparison results and reveals which specific proteins drive quantitative divergence (e.g., CYP3A5, BCRP, UGT1A10), informing which proteins require caution in PBPK modeling.
- **Figure 3**: Cross-omics comparison of liver-normalized tissue expression patterns between ProteinDB and the four transcriptomics-based PK-Sim databases (EST, Array, RT-PCR, Bgee) for small intestine, kidney, and brain.
  - *Significance*: Demonstrates systematic differences between transcript- and protein-based expression patterns, including compressed dynamic ranges and biased brain-to-liver ratios in transcriptomics databases.
- **Figure 4**: Goodness-of-fit plots for midazolam and digoxin systemic exposure in the rifampicin-midazolam and rifampicin-digoxin DDI scenarios across baseline, library, and ProteinDB expression profiles.
  - *Significance*: Shows DDI prediction performance, where ProteinDB improved AUC and Cmax ratio predictions for rifampicin-midazolam (GMFE reduced from 1.90 to 1.66) and matched the modified library profile for rifampicin-digoxin.
- **Table 1**: Cross-platform comparison of hepatic ADME protein abundances (CYP, UGT, other enzymes, transporters) between ProteinDB and PK-Sim v12, Simcyp V22, and GastroPlus X.2, including Pearson/Spearman correlations, fold agreement, GMFE, and leave-one-out/leave-two-out sensitivity analyses.
  - *Significance*: Provides quantitative evidence of protein-class-dependent agreement and identifies specific discordant proteins driving GMFE inflation.
- **Table 2**: PBPK model performance metrics (MRD for concentration-time profiles, GMFE for AUC and Cmax ratios, urinary excretion, glucuronidation, enzyme induction) for midazolam, digoxin, rifampicin, tizanidine, and DDI scenarios across baseline, library, and ProteinDB expression profiles.
  - *Significance*: Demonstrates that ProteinDB achieves comparable or superior predictive performance across all evaluated compounds and DDI scenarios, with the most pronounced benefit in purely bottom-up tizanidine simulations.

---

### Code & Reproducibility Assessment
Excellent. The ProteinDB database file and associated code are openly available at https://github.com/translatPK-KUL/ProteinDB. The paper provides detailed methodology for database construction, including gene mapping strategies, deduplication rules, and scaling frameworks. Raw data provenance is documented via ProteomeXchange accessions with author/year identifiers. The standardized parameter identification procedure (Monte-Carlo + Levenberg-Marquardt optimization with 10,000 iterations) is described with sufficient detail for replication. Supporting data (Data S1, Data S2) include duplicated records, aggregation alternatives, and study-level variability metrics.

---

### Supplementary Materials
Supporting information includes: Data S1 (duplicated records for each organ with arithmetic and PaxDb-weighted mean and sum values), Data S2 (study IDs, assay types, detection frequency, weighted CV% for all proteins), Table S1 (optimization settings), Table S2 (interaction parameters), Table S3 (intra-PaxDb inter-study variability for discordant proteins), Figure S1 (single-compound goodness-of-fit plots), Figure S2 (additional DDI plots), and the complete list of duplicated genes and ADME protein lists used in analyses.

---

### Future Directions
1) Broader compound evaluation across additional enzyme/transporter pathways, genetic polymorphism cases, and diverse DDI mechanisms (e.g., time-dependent inhibition, transporter-mediated interactions). 2) Incorporation of inter-individual variability data from large-scale proteomics studies to enable population-level expression distributions rather than fixed mean values. 3) Integration of age-, disease-, and demographic-specific proteomics datasets to extend applicability to special populations. 4) Standardization of proteomics quantification workflows to reduce inter-study variability for low-abundance proteins. 5) Cross-platform implementation of ProteinDB beyond PK-Sim (e.g., Simcyp, GastroPlus) to enable direct platform comparisons. 6) Prospective evaluation of ProteinDB in regulatory submissions to assess its impact on model acceptance and confidence.

---

### Expert Commentary
This work addresses a critical and often underappreciated source of uncertainty in bottom-up PBPK modeling: the choice of tissue expression database. The finding that transcriptomics databases compress dynamic ranges and systematically bias brain-to-liver ratios has important implications for CNS drug development, where brain exposure predictions may be systematically distorted. The demonstration that purely bottom-up simulations with ProteinDB outperform transcriptomics profiles is particularly compelling, as it isolates the physiological accuracy of the system parameters from compensatory optimization. However, the persistence of >100-fold discrepancies for low-abundance proteins like UGT1A10 and BCRP across platforms highlights that proteomics data are not a panacea—these proteins remain challenging to quantify reliably. The maximum-abundance deduplication rule is pragmatic but may warrant refinement as isoform-resolved proteomics data become available. The study's rigorous sensitivity analyses and transparent data provenance set a new standard for expression database development in PBPK modeling. The next critical step is demonstrating that ProteinDB improves prospective predictions in regulatory-relevant scenarios, particularly for drugs with narrow therapeutic windows or complex disposition pathways.

---

### Bottom Line
ProteinDB provides a practical, openly available, proteomics-based expression database for PK-Sim that offers a more physiologically grounded alternative to transcriptomics-derived profiles. It achieves comparable or superior predictive performance across single-compound and DDI scenarios, with the most pronounced benefits in purely bottom-up simulations where it outperforms transcriptomics profiles by reducing MRD from 4.86 to 3.08 (tizanidine). The database reduces reliance on empirical expression modification and improves mechanistic coherence, but users should be aware of its limitations: no demographic/disease stratification, potential inaccuracies for low-abundance proteins (UGT1A10, BCRP), and the need for caution with specific deduplicated genes (HAGH, SOD2, SLC29A1). For prospective PBPK modeling where physiological accuracy matters, ProteinDB represents a meaningful step forward, though broader validation across more compounds and DDI scenarios is warranted before it can fully replace the extensively validated transcriptomics-based framework.

---

---

## 📊 Figures

![Hepatic abundances of CYPs (A), UGTs (B), other enzymes (C), and transporters (D) in ProteinDB, GastroPlus X.2, PK-Sim v12, and Simcyp V22.]({{ site.baseurl }}/assets/digests/2026-09-20-transitioning-from-transcriptomics-to-proteomics-enhancing-mechanistic-accuracy/figures/fig_01.jpg)

![Goodness-of-fit plots for midazolam and digoxin systemic exposure in the rifampicin-midazolam and rifampicin-digoxin DDI scenarios. The solid diagonal line indic]({{ site.baseurl }}/assets/digests/2026-09-20-transitioning-from-transcriptomics-to-proteomics-enhancing-mechanistic-accuracy/figures/fig_02.jpg)