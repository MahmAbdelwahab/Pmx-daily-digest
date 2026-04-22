---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: March 16, 2026

## Paper 1: Unraveling the Link Between Azathioprine and Acute Pancreatitis: Integrating Net

### Bibliographic Information
- **Title**: Unraveling the Link Between Azathioprine and Acute Pancreatitis: Integrating Network Toxicology, Machine Learning, and Mendelian Randomization
- **Authors**: Xie Z, Lei H, Zhang P, Li Z, Tang W, et al.
- **Journal**: CPT: Pharmacometrics & Systems Pharmacology, 2026
- **DOI**: [https://doi.org/10.1002/psp4.70178](https://doi.org/10.1002/psp4.70178)

### Quick Take
This study employs an integrative multi-omics strategy combining network toxicology, machine learning, Mendelian randomization, and molecular docking to identify CES1 and CTSK as causal protective factors against azathioprine-induced acute pancreatitis. Pharmacometricians and systems pharmacologists should read this for its novel application of causal inference methods to adverse event prediction and biomarker discovery.

---

### Executive Summary
This research presents a comprehensive systems toxicology investigation of azathioprine-induced acute pancreatitis (AP) by integrating computational predictions, transcriptomic analysis, and genetic epidemiology. Through analysis of 436 predicted AZA targets intersected with 2,304 pancreatitis-associated differentially expressed genes, the study identified 68 core targets, subsequently narrowed to 7 key biomarkers (CES1, CTSK, JAK1, NR3C2, PLIN5, WEE1, RORA) using LASSO and SVM-RFE machine learning algorithms. Mendelian randomization analysis provided genetic evidence that increased expression of CES1 (OR 0.950, 95% CI 0.909-0.993) and CTSK (OR 0.977, 95% CI 0.960-0.994) causally protects against AP, while molecular docking confirmed strong binding affinities between AZA and both proteins. This work establishes a mechanistic framework suggesting AZA may induce AP by inhibiting these protective genes, offering new targets for risk stratification and therapeutic intervention.

---

## ⚡ Methodological Snapshot
The study employed a four-tiered computational framework. First, AZA toxicity profiles and target genes were predicted using ProTox-3.0 and three target prediction databases (TargetNet, SwissTargetPrediction, SEA). Second, transcriptomic data from GEO datasets GSE143754 and GSE194331 were integrated and batch-corrected using ComBat, yielding 2,304 differentially expressed genes associated with pancreatitis. Third, machine learning algorithms (LASSO regression with 10-fold cross-validation and SVM-RFE) were applied to identify optimal diagnostic gene signatures from the intersection of AZA targets and AP-associated genes. Fourth, two-sample Mendelian randomization using eQTLGen consortium data (exposure) and FinnGen GWAS (outcome: 3,022 AP cases, 195,144 controls) was performed to establish causal relationships between gene expression and AP risk, followed by molecular docking validation using CB-Dock2 to assess binding free energy.

---

## 🏗️ Structural Model Breakdown
This study utilized systems biology network models rather than traditional compartmental PK/PD models. The structural components included: (1) Protein-protein interaction networks constructed using STRING database (confidence score >0.4) and visualized in Cytoscape with degree centrality mapping to identify hub nodes; (2) Machine learning classification models including LASSO logistic regression with regularization parameter optimization via cross-validation and SVM-RFE with recursive feature elimination to identify minimal gene signatures; (3) Mendelian randomization framework using inverse-variance weighted (IVW) random effects models as primary analysis with sensitivity analyses (MR-Egger, weighted median, simple mode, weighted mode) to assess pleiotropy and robustness; (4) Molecular docking models using CB-Dock2 blind docking algorithm to predict binding conformations and calculate binding free energy (ΔG_bind) between AZA and target proteins.

---

### Detailed Methodological Analysis

#### Modeling Approach
Network toxicology using STRING PPI networks (medium confidence >0.4), machine learning with LASSO regression (10-fold CV) and SVM-RFE for feature selection, two-sample Mendelian randomization with IVW random-effects model, and blind molecular docking using CB-Dock2. Software included R (limma, sva, pROC, glmnet, e1071), Cytoscape 3.10.3, DAVID 6.8, and CB-Dock2.

#### Data Sources
Transcriptomic data from GEO (GSE143754: 6 chronic pancreatitis, 11 adenocarcinoma, 9 normal; GSE194331: 32 normal, 87 pancreatitis). Genetic data from eQTLGen Consortium (30,000 European ancestry) for cis-eQTLs (±500kb, p<5x10^-8) and FinnGen (198,166 European participants: 3,022 AP cases, 195,144 controls). AZA structure from PubChem.

#### Estimation Methods
Differential expression analysis using limma with ComBat batch correction (|log2FC| >0.5, FDR <0.05). LASSO logistic regression with lambda.min selection via 10-fold cross-validation. MR performed using inverse-variance weighted (IVW) random-effects as primary analysis, supplemented by MR-Egger, weighted median, simple mode, and weighted mode. F-statistics calculated for instrument strength (F>10 threshold).

#### Model Evaluation
ROC curves and AUC for machine learning model discrimination (training AUC 0.942; validation AUCs 0.907 and 0.969). Calibration curves for probability agreement. MR sensitivity analyses included Cochran's Q for heterogeneity, MR-Egger intercept for pleiotropy, MR-PRESSO for outlier detection, and leave-one-out analysis. LD clumping (r^2<0.3) using 1000 Genomes European reference.

#### Covariate Analysis
Batch correction for dataset integration using ComBat algorithm to remove systematic non-biological variations between GEO datasets. Machine learning included regularization (LASSO) to handle high-dimensional data and prevent overfitting. MR analyses matched exposure and outcome by European ancestry to minimize population stratification.

---

### Scientific Context & Motivation
Drug-induced acute pancreatitis (DIAP) affects 2-5% of AP cases, with azathioprine being a well-established trigger with a 5.82-fold increased risk, yet the molecular mechanisms remain poorly understood. Traditional reductionist approaches fail to capture the complex systemic interactions underlying DIAP. This study addresses the critical need for mechanistic understanding by employing an integrative multi-omics strategy that combines network toxicology, machine learning-based biomarker discovery, and Mendelian randomization for causal inference, representing a paradigm shift from descriptive association to mechanistic toxicogenomics in adverse drug reaction research.

---

### Statistical Rigor Assessment
The study demonstrates appropriate statistical rigor for an observational computational study. Sample sizes are adequate: 2,304 DEGs from 145 total transcriptomic samples (after combining datasets), and large-scale genetic data (198,166 for MR). Batch effects were properly addressed using ComBat. Machine learning employed cross-validation to prevent overfitting. MR adhered to core assumptions: strong instruments (F>10), cis-eQTLs only (±500kb), LD clumping (r^2<0.3), and multiple sensitivity analyses for pleiotropy. However, the transcriptomic sample sizes for individual datasets are modest (n=26 for GSE143754, n=119 for GSE194331), and potential confounding from disease severity/type in transcriptomic data (chronic pancreatitis vs adenocarcinoma) is not fully addressed. Missing data handling is not explicitly described.

---

## 📊 Key Findings
The study identified 68 core targets at the intersection of 436 AZA-predicted targets and 2,304 pancreatitis-associated DEGs. Machine learning convergence identified 7 key genes: CES1, CTSK, JAK1, NR3C2, PLIN5, WEE1, and RORA. Mendelian randomization revealed significant protective causal effects for CES1 (IVW OR 0.950, 95% CI 0.909-0.993, p=0.022) and CTSK (IVW OR 0.977, 95% CI 0.960-0.994, p=0.008) against AP risk. Molecular docking demonstrated strong binding affinities between AZA and both CES1 (ΔG_bind < -5.0 kcal/mol) and CTSK (ΔG_bind < -5.0 kcal/mol). Pathway enrichment indicated involvement in lipid metabolism, NF-κB signaling, TLR signaling, and PPAR pathways, suggesting disruption of metabolic homeostasis and inflammatory regulation.

---

## 💡 Clinical & Regulatory Implications
The identification of CES1 and CTSK as protective factors suggests that patients with low expression or loss-of-function variants may be at higher risk for AZA-induced AP. This supports pharmacogenetic screening including CES1 copy number variations and CTSK promoter variants alongside existing thiopurine metabolism genes (TPMT, NUDT15). Blood transcriptomics or serum proteomics monitoring CES1/CTSK expression could serve as early biomarkers of pancreatic stress. Therapeutically, small-molecule stabilizers or inducers of CES1/CTSK activity could be investigated as preventive co-therapies to maintain metabolic and immune homeostasis during AZA treatment. The 5.82-fold increased AP risk with AZA use may be stratified by these genetic markers to enable precision medicine approaches in IBD patients.

---

### Strengths & Limitations

#### Strengths
- Integration of four complementary computational approaches (network toxicology, ML, MR, docking) providing multi-dimensional validation
- Use of large-scale genetic data (FinnGen n=198,166) for MR analysis ensuring adequate power
- Robust MR methodology with multiple sensitivity analyses and strict instrument selection criteria (F>10, cis-eQTLs only)
- Application of batch correction (ComBat) for transcriptomic data integration
- Dual machine learning algorithms (LASSO and SVM-RFE) with cross-validation to prevent overfitting

#### Limitations (Acknowledged by Authors)
- Reliance on public databases and computational algorithms constrained by algorithmic assumptions and data biases
- Lack of experimental validation (in vitro assays or in vivo models)
- Insufficient overlap between different omics levels (low overlap phenomenon common in multi-omics)
- Transcriptomic signals susceptible to tissue specificity and inflammatory states vs predicted targets based on chemical structure

#### Limitations (Expert Review)
- Transcriptomic datasets mixed chronic pancreatitis and pancreatic adenocarcinoma (GSE143754) which may have different molecular profiles than acute pancreatitis
- MR analysis limited to European ancestry, reducing generalizability to other populations
- Molecular docking predictions require experimental validation (e.g., SPR, ITC, or crystallography)
- Causal inference limited to genetic proxies (cis-eQTLs) which may not capture all regulatory mechanisms
- No quantitative dose-response relationship established between AZA exposure and CES1/CTSK inhibition

#### Generalizability
Findings are most generalizable to European populations due to MR ancestry restrictions. The mechanistic insights regarding CES1/CTSK may extend to other populations but require validation. The computational predictions provide hypotheses for global application but experimental validation is needed before clinical implementation.

---


---

### Figures & Tables

- **Figure 1**: Overview of research design showing integration of network toxicology, machine learning, Mendelian randomization, and molecular docking workflows with assumption frameworks for MR
  - *Significance*: Provides the conceptual framework for the multi-omics integration strategy, illustrating how data flows from target prediction through to causal inference and structural validation
- **Figure 2**: Potential toxicity profile of AZA showing predicted risks for immunotoxicity, mutagenicity, carcinogenicity, and hepatotoxicity compared to average active molecules
  - *Significance*: Establishes the toxicological liability profile of AZA that motivates the mechanistic investigation, confirming immunotoxicity as a key concern
- **Figure 3**: Batch correction visualization showing pre- and post-correction boxplots and PCA plots for GSE143754 and GSE194331 datasets, plus heatmap and volcano plot of DEGs
  - *Significance*: Demonstrates successful removal of technical batch effects between datasets, validating the integration of transcriptomic data and showing 2,304 significant DEGs
- **Figure 4**: Venn diagram showing 74 intersecting targets, PPI network visualization with degree centrality mapping, and GO/KEGG enrichment results (bar plots)
  - *Significance*: Identifies the 68 core AZA-AP targets and their functional context, highlighting lipid metabolism and inflammatory pathways as key biological processes
- **Figure 5**: Machine learning results including LASSO cross-validation plot, coefficient profiles, ROC curves for training and validation sets, SVM-RFE accuracy plot, Venn diagram of intersecting genes, calibration curve, and individual gene ROC curves
  - *Significance*: Demonstrates the robust selection of 7 key diagnostic genes (CES1, CTSK, JAK1, NR3C2, PLIN5, WEE1, RORA) with high predictive accuracy (AUC >0.94)
- **Figure 6**: Forest plot showing MR results for association between CES1/CTSK gene expression and AP risk using IVW, MR-Egger, weighted median, simple mode, and weighted mode methods
  - *Significance*: Provides the causal inference evidence that higher CES1 and CTSK expression protect against AP, with consistent direction across multiple MR methods
- **Figure 7**: Molecular docking visualization showing binding conformations of AZA to CES1 and CTSK proteins with predicted binding pockets and affinity scores
  - *Significance*: Offers structural evidence for direct AZA-protein interactions, supporting the mechanistic hypothesis that AZA inhibits these protective proteins
- **Table 1**: Comprehensive MR results table showing SNP counts, beta coefficients, standard errors, p-values, ORs with 95% CIs, and sensitivity metrics (Q_pval, MR-PRESSO, pleiotropy) for all 7 genes across 5 methods
  - *Significance*: Provides detailed statistical evidence for causal relationships, particularly confirming CES1 and CTSK protective effects while showing null results for other candidate genes

---


### Supplementary Materials
Supplementary materials include Data S1 (toxicity prediction results), Data S2 (AZA chemical structure details), Data S3 (436 predicted AZA target genes), Data S4 (2,304 pancreatitis-associated DEGs with statistics), and Data S5 (genetic instrumental variables for MR analysis). These provide the complete gene lists and statistical outputs supporting the main text findings, though raw analysis code is not included.

---

### Future Directions
Immediate priorities include experimental validation: (1) in vitro studies using pancreatic acinar cell models to confirm AZA-induced downregulation/inhibition of CES1 and CTSK; (2) assessment of lipid accumulation, mitochondrial function, and cytokine profiles following AZA exposure; (3) gene-modified animal models (CES1/CTSK knockout or transgenic) to establish causal roles in AZA-induced pancreatic injury. Clinically, prospective pharmacogenetic studies should evaluate CES1 copy number variations and CTSK promoter variants as predictive biomarkers alongside TPMT/NUDT15. Multi-tissue, multi-time-point transcriptomic and proteomic studies are needed to address the low overlap phenomenon across omics levels. Bayesian or ensemble learning frameworks could improve integration of disparate signals. Ultimately, randomized studies of CES1/CTSK targeted therapies as preventive co-treatments during AZA therapy are warranted.

---

### Expert Commentary
This study represents an exemplary application of modern computational pharmacology to adverse event mechanism elucidation. The integration of Mendelian randomization with machine learning and molecular docking creates a robust causal inference chain rarely seen in toxicology research. The focus on CES1 is particularly compelling given its established role in lipid metabolism and emerging recognition in drug-induced toxicity. From a pharmacometric perspective, the study highlights a critical gap: while we have established PopPK models for AZA metabolism (thiopurine methyltransferase pathway), we lack mechanistic PD models linking drug exposure to organ-specific toxicity. This work provides the molecular targets (CES1, CTSK) necessary to build such quantitative systems toxicology models. The 'low overlap' phenomenon the authors acknowledge between transcriptomic and target prediction data reflects the fundamental challenge in systems pharmacology: bridging static structural predictions with dynamic biological responses. Future efforts should incorporate PBPK modeling to link systemic AZA exposure to local pancreatic concentrations, then connect to target engagement (CES1/CTSK inhibition) using the binding affinities reported here, ultimately predicting toxicity probability via systems modeling rather than statistical association.

---

### Bottom Line
This study establishes CES1 and CTSK as genetically and structurally supported protective factors against azathioprine-induced acute pancreatitis using a sophisticated multi-omics framework. For practicing pharmacometricians, it demonstrates the power of integrating Mendelian randomization with machine learning for causal biomarker discovery, while highlighting the need to translate these computational findings into quantitative mechanistic models. The work suggests that pharmacogenetic screening for CES1/CTSK variants could improve AZA safety, and provides the molecular foundation for developing mechanism-based preventive strategies. However, rigorous experimental validation and prospective clinical studies are essential before these findings can be implemented in precision medicine workflows.

---

---

## 📊 Figures



```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: Overview of Research Design. Assumption1 (Correlation) requires Cis-eQTLs to exhibit strong associations with gene expression; Assumption2 (Independence) require],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [FIGURE 2: Potential toxicity profile of AZA. Blue represents AZA, while orange denotes the average of active molecules. This figure demonstrates that the potential toxicol],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 3(A) Pre-correction boxplots show significant differences in expression level distributions among samples from different GEO datasets, with evident systematic bia],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [FIGURE 4(A) Venn diagram shows 74 potential core targets of AZA acting on AP, derived from the intersection of 436 AZA potential targets (screened via integration of Tar],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [FIGURE 5: A. 10-fold cross-validation optimizes LASSO regression parameters, plotting the relationship between the binomial deviation curve and log(λ). A vertical line mar],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_06.jpg", width: 90%),
  caption: [FIGURE 6: Forest plot illustrating the MR analysis results for the association between CES1/CTSK gene expression and AP risk. Horizontal lines denote 95% confidence interv],
  placement: auto,
) <fig-6>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_07.jpg", width: 90%),
  caption: [FIGURE 7: Molecular docking visualization of AZA with CES1 and CTSK proteins. This visualization demonstrates the binding conformations of AZA to CES1 and CTSK. The bindin],
  placement: auto,
) <fig-7>
#set page(flipped: false)
```

