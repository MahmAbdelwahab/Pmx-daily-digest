---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: February 22, 2026

## Paper 1: Comprehensive Pathophysiology Repository for PBPK Modeling in Liver Cirrhosis: Q

### Bibliographic Information
- **Title**: Comprehensive Pathophysiology Repository for PBPK Modeling in Liver Cirrhosis: Quantifying Continuous Disease Progression and Population Variability
- **Authors**: Schneider ARP, et al.
- **Journal**: CPT: Pharmacometrics & Systems Pharmacology, 2026
- **DOI**: [https://doi.org/10.1002/psp4.70215](https://doi.org/10.1002/psp4.70215)

### Quick Take
A landmark study establishing a continuous, probabilistic physiology repository for liver cirrhosis PBPK modeling. By moving beyond discrete Child-Pugh class means to continuous scoring (CP 5-15) with population variability, this work enables high-fidelity virtual clinical trials for hepatically impaired populations.

---

### Executive Summary
This study addresses a critical gap in Model-Informed Drug Development (MIDD) for hepatic impairment: the lack of granular physiological data describing disease progression. Utilizing a massive dataset of over 200,000 patients from electronic health records (IBM Explorys) and literature, the authors developed a repository quantifying 30 physiological parameters as continuous functions of the Child-Pugh score. Unlike previous repositories that provided static mean values for Child-Pugh A, B, and C, this approach captures continuous disease trajectories and, crucially, inter-individual variability. The repository was integrated into the Open Systems Pharmacology (OSP) framework and validated with PBPK models for six drugs (including midazolam and omeprazole), achieving 96% predictive accuracy within a twofold range. This represents a significant advancement for regulatory science and trial design in special populations.

---

## ⚡ Methodological Snapshot
The authors employed a data-driven approach combining systematic literature review (68 studies) and real-world data mining (IBM Explorys, ~71,000 cirrhosis patients). An MCMC-based algorithm was used to fit lognormal distributions for 30 physiological parameters (e.g., organ flows, enzyme abundance, body composition) against the Child-Pugh score (5–15) as a continuous covariate. These distributions were implemented in the OSP Suite V11 to generate virtual populations. The framework was validated by simulating the pharmacokinetics of probe drugs (midazolam, alfentanil, metoprolol, omeprazole, efavirenz, tobramycin) and comparing predicted versus observed PK parameter ratios.

---

## 🏗️ Structural Model Breakdown
The PBPK framework incorporated specific structural modifications for cirrhosis: 1) **Portosystemic Shunting:** A bypass allowing portal blood to enter systemic circulation directly, evading first-pass metabolism. 2) **Ascites:** A specific compartment accounting for fluid accumulation and its impact on volume of distribution. 3) **Functional Liver Volume:** Scaled down continuously with disease severity. 4) **Enzyme Activity:** CYP enzymes (12 isoforms) scaled based on combined in vitro/in vivo/expression data. 5) **Renal Function:** GFR and renal blood flow decoupled to account for compensatory mechanisms.

---

### Detailed Methodological Analysis

#### Modeling Approach
Physiologically Based Pharmacokinetic (PBPK) modeling using Open Systems Pharmacology (OSP) Suite V11. MCMC was used for parameter estimation of physiological trends.

#### Data Sources
IBM Explorys electronic health records (208,851 measurements from 71,646 patients) and literature (7,758 measurements from 68 references).

#### Estimation Methods
Markov-Chain-Monte-Carlo (MCMC) approach to estimate parameters of functions describing trend and variability of physiological changes relative to Child-Pugh score.

#### Model Evaluation
Visual inspection of concentration-time profiles; comparison of predicted vs. observed ratios for AUC, Cmax, and half-life (thalf). Success defined as ratios within 0.5–2.0 fold range.

#### Covariate Analysis
Child-Pugh score (continuous 5-15) was the primary covariate. Sex was considered for hematocrit and albumin. Presence of ascites was used to stratify body water compartments.

---

### Scientific Context & Motivation
Current PBPK workflows for liver cirrhosis rely on repositories that bin patients into discrete Child-Pugh classes (A, B, C), providing only mean physiological changes. This 'step-function' approach fails to capture the continuous nature of progressive liver disease and ignores the substantial heterogeneity among patients with the same clinical score. Furthermore, previous models often lacked mechanistic implementations of ascites and portosystemic shunting. This study fills these gaps by applying Markov-Chain-Monte-Carlo (MCMC) methods to real-world data to define continuous parameter distributions.

---

### Statistical Rigor Assessment
The study leverages an exceptionally large sample size (n > 200,000) for clinical parameters like albumin and hematocrit, providing high confidence in population variability estimates. The use of MCMC to handle heterogeneous data sources (aggregated literature data vs. individual EHR data) is statistically robust. Validation demonstrated high accuracy (96% of predictions within 2-fold error), suggesting the derived distributions are reliable for simulation.

---

## 📊 Key Findings
1) **Hemodynamics:** Cardiac index increases while renal and portal blood flows decrease with worsening Child-Pugh score. 2) **Shunting:** Shunt index and frequency increase continuously; Child-Pugh C patients show ~71% shunt frequency. 3) **Metabolism:** CYP activity declines continuously for all 12 enzymes analyzed. 4) **Body Composition:** Sarcopenia (muscle loss) and increased extracellular water (ascites) were quantified; total body water is driven by ascites presence. 5) **Validation:** The model accurately predicted the 'non-linear' impact of disease; e.g., Midazolam clearance reduction was slightly overpredicted in Child-Pugh A but well-captured in B and C.

---

## 💡 Clinical & Regulatory Implications
This repository allows for 'virtual clinical trials' that mimic the heterogeneity of real patient populations. It enables more precise dose finding for patients with specific Child-Pugh scores (e.g., distinguishing a score of 7 from 9), potentially supporting regulatory waivers for clinical studies in severe hepatic impairment where recruitment is difficult.

---

### Strengths & Limitations

#### Strengths
- First repository to quantify continuous disease progression (CP score 5-15) rather than discrete classes.
- Integration of inter-individual variability enabling population simulation.
- Massive real-world dataset (EHR) supplementing literature data.
- Mechanistic implementation of ascites and portosystemic shunting.
- High predictive performance (96% within 2-fold range) across diverse drug classes.

#### Limitations (Acknowledged by Authors)
- GFR data lacked healthy controls in source studies, hampering normalization.
- In vitro and in vivo enzyme data were combined despite potential disconnects.
- Child-Pugh score itself has subjective components (ascites, encephalopathy grading).
- Lack of correlation data between different physiological parameters (e.g., does low albumin always correlate with high shunting in the same patient?).

#### Limitations (Expert Review)
- The assumption that all physiological changes correlate strongly with Child-Pugh score (using percentiles) simplifies the complex multivariate nature of liver failure.
- Validation limited to small molecule drugs; biologics may require additional parameters.

#### Generalizability
Highly generalizable for small molecule PBPK modeling in Caucasian populations (primary data source). Caution needed for other ethnicities due to body composition differences.

---


---

### Figures & Tables

- **Figure 1**: Schematic of pathophysiological changes (A) and the data workflow (B).
  - *Significance*: Visualizes the complexity of the system (shunting, ascites, enzyme loss) and the rigorous data integration process.
- **Figure 2**: Plots of Cardiac Index and Shunt Index vs. Child-Pugh Score.
  - *Significance*: Demonstrates the continuous scaling of hemodynamic parameters, showing how shunting severity escalates with disease score.
- **Figure 4**: Bubble-heatmap summarizing the ratio of changes for all parameters relative to healthy controls.
  - *Significance*: Provides a rapid, comprehensive lookup for the magnitude of physiological changes across the disease spectrum.
- **Figure 6**: Predicted vs. Observed PK parameter ratios (AUC, Cmax, t1/2) for all validation drugs.
  - *Significance*: The primary validation plot showing 96% of predictions fall within the 2-fold acceptance window.
- **Table 1**: Frequency of shunting and ascites by Child-Pugh class/score.
  - *Significance*: Provides the probabilistic data needed to assign discrete disease states (presence/absence of shunts/ascites) in virtual populations.

---

### Code & Reproducibility Assessment
Partial

---

### Supplementary Materials
Data S1 contains the detailed MCMC algorithm description, data processing steps for Explorys, and the full repository tables (Tables S13/S14) required to parameterize the PBPK models.

---

### Future Directions
1) Investigation of intestinal parameters (transit time, permeability) and transporter expression in cirrhosis. 2) Application of machine learning to identify non-Child-Pugh biomarkers for better PK prediction. 3) Expansion to non-Caucasian populations to address body composition differences.

---

### Expert Commentary
This paper represents the 'state-of-the-art' for hepatic impairment PBPK. The shift from discrete to continuous physiology is a necessary evolution in the field. The most significant contribution is not just the mean trends, but the quantification of variability—this allows modelers to simulate 'worst-case' scenarios and overlap between disease stages, which is critical for safety assessments. The use of EHR data to inform PBPK parameters is a trend we will likely see accelerate. Practicing pharmacometricians using OSP should immediately adopt this repository over older, static libraries.

---

### Bottom Line
Schneider et al. provide the definitive pathophysiology repository for modeling liver cirrhosis in OSP. By quantifying continuous disease progression and population variability from over 200,000 data points, this work renders static 'Child-Pugh A/B/C' mean-value models obsolete. Pharmacometricians should use these continuous functions to generate virtual populations for more accurate and risk-aware dosing recommendations in hepatic impairment.

---

---

## 📊 Figures



```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1(A) Illustration of pathophysiological changes in liver cirrhosis that have an impact on drug PK. (B) Overview of the workflow for generating the pathophysiology],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [FIGURE 2(A) Relative change in the cardiac index in cirrhosis patients compared to healthy subjects dependent on the Child-Pugh score. (B) Shunt index in cirrhosis patie],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 3: Relative change in total (A, B) and extracellular (C, D) body water percentage in cirrhosis patients (A, C) without and (B, D) with ascites. The gray bars repres],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [FIGURE 4: Bubble-heatmap of changes of several pathophysiological parameters in ratio to healthy populations. For albumin and hematocrit, the values are relative to the va],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [FIGURE 5: Simulated and observed PK of midazolam. The subplots depict midazolam plasma concentration after IV administration of 1 mg of midazolam in (A) healthy controls,],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_06.jpg", width: 90%),
  caption: [FIGURE 6: Predicted vs. observed PK parameter ratios in cirrhotic populations relative to the respective healthy control groups. The observed values are plotted as reporte],
  placement: auto,
) <fig-6>
#set page(flipped: false)
```

