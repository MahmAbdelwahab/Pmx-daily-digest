---
layout: post
title: "Target-Engagement Prediction From Molecular Structure, In Vitro and Animal Data: A Tutorial for Early Assessment of Clinical Drug Exposure and Therapeutic/Adverse Potential Using the ANDROMEDA and PLATO Software on the InSilicoTrials Platform."
date: 2026-11-02
authors: "Totis Niccolò, Sips Fianne, Catozzi Simona, Bisotti Marc‐Antonio, Bambury Pauline, Stathopoulos Sofia, Carbone Vincenzo, Emili Luca, Torchia Mario, Belgiovine Valentina, Ciriaco Fulvio, Nicolotti Orazio, Fagerholm Urban, Baker Candice N., Mahoney J. Matthew, Röshammar Daniel"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70353"
paper_type: methodology
tags: [methodology]
excerpt_text: "This tutorial demonstrates a cloud-based platform that integrates molecular-structure-based predictions (ANDROMEDA for PK, PLATO for target affinity) with in vitro, animal, and clinical data to predict clinical drug exposure and target engagement. Using three case studies (carvedilol, ivabradine, sunitinib), the authors show that structure-based predictions can be comparable to or better than traditional allometric scaling, while highlighting the need for mechanistic models to link target engagement to downstream effects."
pdf_path: "/assets/digests/2026-11-02-target-engagement-prediction-from-molecular-structure-in-vitro-and-animal-data/PMx_TargetEngagement_Prediction_From_Molecul_20261102.pdf"
retroactively_classified: false
---

**Content Source:** PMC Full Text

### Quick Take
This tutorial demonstrates a cloud-based platform that integrates molecular-structure-based predictions (ANDROMEDA for PK, PLATO for target affinity) with in vitro, animal, and clinical data to predict clinical drug exposure and target engagement. Using three case studies (carvedilol, ivabradine, sunitinib), the authors show that structure-based predictions can be comparable to or better than traditional allometric scaling, while highlighting the need for mechanistic models to link target engagement to downstream effects.

---

### Executive Summary
The paper presents a practical framework for early prediction of clinical drug exposure and target engagement using the InSilicoTrials platform, which integrates ANDROMEDA (for PK/ADME) and PLATO (for target affinity) predictions from molecular structure with in vitro, animal, and clinical data. The authors demonstrate the workflow on three cardiovascular drugs, comparing predictions from different data sources against observed clinical data. Key findings include: structure-based PK predictions were at least as accurate as allometric scaling; PLATO predicted affinities were close to in vitro values; target engagement was generally underpredicted, but differences reduced when accounting for delayed responses. The paper emphasizes the importance of accounting for plasma protein binding and recommends mechanistic modeling to link target engagement to clinical outcomes. The platform offers a user-friendly interface for broader project teams, supporting go/no-go decisions and dose selection.

---

### Scientific Context & Motivation
Early prediction of clinical dosing and benefit-risk is critical to reduce late-stage attrition. Traditional animal-based extrapolation has limitations, and there is a growing need for integrated, accessible quantitative tools. The paper addresses the gap by providing a platform that combines molecular-structure-based predictions (ANDROMEDA, PLATO) with in vitro and animal data, enabling early target-engagement assessment without requiring advanced modeling expertise. The work builds on prior validation of ANDROMEDA and PLATO, and aims to demonstrate the value of an integrated framework for comparative pharmacology and dose selection.

---

## ⚡ Methodological Snapshot
The paper presents a tutorial for using the InSilicoTrials platform to predict clinical drug exposure and target engagement. The workflow integrates two AI-based tools: ANDROMEDA, which predicts human PK parameters ($CL/F$, $V_{ss}/F$, $k_a$, $f_u$) from molecular SMILES, and PLATO, which predicts target affinities ($IC_{50}/K_D$) for a wide range of targets. These predictions are then used as inputs to longitudinal PKPD simulation models (implemented in R/mrgsolve) that describe drug concentration-time profiles and target engagement over time. The platform allows users to compare predictions from different data sources (molecular structure, in vitro, animal, clinical) and to simulate various dosing regimens. The tutorial demonstrates the workflow on three cardiovascular drugs, comparing predicted outcomes against observed clinical data.

---

## 📐 Statistical Framework
The underlying statistical framework relies on machine learning models with conformal prediction for PK parameter estimation (ANDROMEDA) and multi-fingerprint similarity searching for target affinity prediction (PLATO). The PKPD models are based on standard pharmacometric equations: an $E_{max}$ model for target engagement, allometric scaling for interspecies PK extrapolation, and direct or indirect response models for pharmacodynamics. The paper assumes a Hill coefficient of 1 for the concentration-response relationship and uses fixed allometric exponents ($0.75$ for clearances, $1$ for volumes). The framework does not explicitly account for parameter uncertainty or variability, except for between-subject variability in clinical PK parameters.

---

### Estimator Behavior
The paper does not provide a formal analysis of estimator properties (bias, efficiency, convergence). However, it reports prediction errors for ANDROMEDA compared to allometric scaling, showing that ANDROMEDA generally has lower prediction errors for $CL/F$, $CL$, $V_{ss}$, and $F$. For the case studies, ANDROMEDA predictions were within 2-fold of clinical observations for most parameters, while allometric scaling from rat data often over- or under-predicted exposure. PLATO predicted affinities were close to in vitro values, but target engagement was consistently underpredicted, suggesting a potential bias in the affinity estimates or the model structure. The paper does not discuss convergence properties of the estimation algorithms.

---

### Validation Design
The validation design is retrospective: the authors used publicly available clinical data for three drugs (carvedilol, ivabradine, sunitinib) to compare predictions from different data sources (molecular structure, in vitro, animal) against observed outcomes. They did not perform a formal simulation study or benchmark against other methods, but they compared their results to historical benchmarks from the literature (e.g., PHRMA project). The paper acknowledges that some of the test compounds were included in the training sets of ANDROMEDA, which may lead to optimistic performance estimates. They also used surrogate endpoints (heart rate) for two drugs, as direct target engagement data were not available.

---

### Applicability Boundaries
The method is applicable to small molecules with known SMILES structures and targets that are represented in the PLATO database. It is most suitable for early-stage drug development when limited experimental data are available. The method may not be accurate for drugs with complex PK (e.g., nonlinear absorption, active metabolites) or for targets with significant species differences in potency. The paper notes that target engagement predictions are often underpredicted, and that the relationship between target engagement and clinical response is often non-linear, requiring mechanistic models. The method assumes that total drug concentrations are measured and requires accurate estimates of plasma protein binding.

---

### Comparison to Alternatives
The paper compares the platform's predictions to traditional allometric scaling from animal data and to in vitro-based predictions. ANDROMEDA outperformed allometric scaling in terms of prediction error for PK parameters, consistent with previous benchmarking studies. PLATO predictions were similar to in vitro values, but the resulting target engagement was underpredicted compared to clinical data. The paper also references the PHRMA project, which showed that animal and in vitro data-based predictions of human PK have typical errors of 4-12 fold, whereas the current approach achieved better accuracy. The platform offers a more integrated and user-friendly alternative to traditional PKPD modeling, but it does not provide a formal comparison to PBPK or other mechanistic approaches.

---

### Implementation Guidance
The platform is available at www.insilicotrials.com and requires a subscription. Users input SMILES structures and select the desired outputs. The platform provides input wizards and results dashboards that can be customized by technical users. The underlying models are implemented in R (mrgsolve), and advanced users can modify the model code. The paper recommends a stepwise approach: start with molecular-structure-based predictions, then add in vitro data, and finally animal data. It emphasizes the importance of accounting for plasma protein binding and using consistent assay platforms for benchmarking. The computational cost is not discussed, but the platform runs on cloud infrastructure, suggesting it is scalable.

---

## 📊 Key Findings
For carvedilol, ivabradine, and sunitinib, the platform predicted PK and target engagement from molecular structure, in vitro, and animal data. ANDROMEDA predicted clinical PK parameters ($CL/F$, $V_{ss}/F$) that were comparable to or better than allometric scaling from rat data. PLATO predicted target affinities ($IC_{50}/K_D$) close to in vitro values (e.g., sunitinib VEGFR-2 $IC_{50}$ $139$ nM vs $112$ nM in vitro; ivabradine HCN4 $IC_{50}$ $4131$ nM vs $4280$ nM in vitro). Target engagement was generally underpredicted, but differences reduced when accounting for delayed responses (effect-compartment or indirect-response models). The platform supported simulation of multiple dosing regimens and comparison across data sources, demonstrating its utility for early go/no-go decisions.

---

### Strengths & Limitations

#### Strengths
- Integrated framework combining molecular-structure-based predictions with in vitro, animal, and clinical data.
- User-friendly interface for non-modelers, with customizable workflows for technical users.
- Demonstrates that structure-based PK predictions can outperform allometric scaling.
- Accounts for plasma protein binding differences across species.
- Provides a stepwise approach for early drug development decisions.
- Includes multiple case studies with different PK/PD models and dosing regimens.

#### Limitations (Acknowledged by Authors)
- Limited number of drugs (3) and targets; no formal validation of ANDROMEDA/PLATO.
- Uncertainty and variability not fully accounted for in simulations.
- Assumes no species differences in potency; does not account for active metabolites.
- Clinical target engagement data not available for all drugs; used surrogate endpoints.
- Simple allometric scaling used; may not capture complex PK.

#### Limitations (Expert Review)
- The tutorial does not provide a formal statistical evaluation of prediction accuracy (e.g., confidence intervals, hypothesis tests).
- The workflow is demonstrated on a small set of drugs, limiting generalizability.
- The platform's user-friendliness may come at the cost of flexibility for complex models.
- The paper does not compare against other PKPD modeling approaches (e.g., PBPK).
- The surrogate endpoints (heart rate) may not reflect true target engagement, limiting conclusions.
- The platform's commercial nature may limit accessibility for academic researchers.

#### Generalizability
The framework is generalizable to other small molecules and targets, but the specific case studies are limited to cardiovascular drugs. The approach may be less applicable to biologics or complex mechanisms. The authors recommend prospective validation and caution against over-reliance on structure-based predictions without experimental confirmation.

---

### Key Equations

**Fractional target engagement ($E_{max}$ model)**

{% raw %}
$$
\text{Fractional target engagement} = \frac{I_{\text{MAX}} \times C}{IC_{50} + C}
$$
{% endraw %}

Describes the relationship between drug concentration ($C$) and target engagement, with $IC_{50}$ as the half-maximal inhibitory concentration and $I_{MAX}$ as the maximum effect (set to 1 for complete engagement).

**$IC_{50}$ normalization for plasma protein binding**

{% raw %}
$$
IC_{50,\text{clinical}} = \frac{fu_{\text{experiment}}}{fu_{\text{clinical}}} \times IC_{50,\text{experiment}}
$$
{% endraw %}

Adjusts the in vitro $IC_{50}$ to account for differences in fraction unbound ($f_u$) between experimental and clinical conditions, assuming total drug concentrations are measured.

**Indirect response model for VEGFR-2**

{% raw %}
$$
\frac{d\text{VEGFR}}{dt} = k_{\text{in}} \times \frac{1}{1 + \alpha \times \frac{C_u}{K_D + C}} - k_{\text{out}} \times \text{VEGFR}
$$
{% endraw %}

Describes the turnover of VEGFR-2 receptor concentration, where $k_{in}$ and $k_{out}$ are production and removal rates, $\alpha$ is a scaling factor for intrinsic activity, $C_u$ is unbound concentration, and $K_D$ is the dissociation constant.

---

### Figures & Tables

- **Figure 1**: Schematic of the InSilicoTrials platform workflow, showing integration of ANDROMEDA and PLATO with PKPD simulation.
  - *Significance*: Illustrates the platform's architecture and the sequential prediction steps from molecular structure to target engagement.
- **Figure 2**: Example ANDROMEDA output for carvedilol, showing predicted PK parameters and confidence intervals.
  - *Significance*: Demonstrates the user interface and the type of PK predictions generated from molecular structure.
- **Figure 3**: Example PLATO output for sunitinib, showing predicted target affinities ($IC_{50}$) for VEGFR-2.
  - *Significance*: Shows the target affinity predictions used in the simulations.
- **Figure 4**: Workflow definition for the target-engagement predictor, showing customizable components.
  - *Significance*: Highlights the flexibility of the platform for advanced users.
- **Figure 5**: Screenshot of the simulation input wizard, showing parameter specification for the PKPD model.
  - *Significance*: Illustrates the user-friendly interface for setting up simulations.
- **Figure 6**: Predicted vs observed carvedilol plasma concentrations and target engagement over time.
  - *Significance*: Shows the comparison of predictions from different data sources (structure, in vitro, animal) against clinical data.
- **Figure 7**: Predicted vs observed ivabradine plasma concentrations and target engagement over time.
  - *Significance*: Demonstrates the impact of delayed-response modeling on prediction accuracy.
- **Figure 8**: Predicted vs observed sunitinib plasma concentrations and target engagement over time.
  - *Significance*: Shows the best agreement between structure-based predictions and clinical data, supporting the platform's utility.

---

### Code & Reproducibility Assessment
The paper describes the use of the InSilicoTrials platform, which is a commercial cloud-based service. The underlying models (ANDROMEDA, PLATO) are proprietary, and the specific code for the simulations is not provided. However, the platform allows users to customize workflows and models, and the paper provides sufficient detail on the model equations and parameters to reproduce the simulations in other tools (e.g., mrgsolve).

---

### Supplementary Materials
Supplementary materials include additional figures (Figures S1-S4) showing ANDROMEDA and PLATO outputs for ivabradine and carvedilol, and Table S1 summarizing all simulation input data (PK parameters, target affinities, and clinical data sources).

---

### Future Directions
Future work should include prospective validation of the framework on a larger set of drugs, incorporation of parameter uncertainty and variability, and integration of more mechanistic models linking target engagement to clinical endpoints. The authors also suggest expanding the platform to include in vitro PK data and more sophisticated allometric scaling methods.

---

### Expert Commentary
This tutorial is a valuable contribution to the field of model-informed drug development, demonstrating the practical integration of AI-based predictions with traditional PKPD modeling. The key strength is the user-friendly platform that democratizes access to quantitative methods. However, the lack of formal statistical validation and the reliance on surrogate endpoints are significant limitations. The authors correctly emphasize the need for mechanistic models and prospective validation. The platform's potential to reduce animal testing is promising, but its commercial nature may limit widespread adoption.

---

### Bottom Line
For practitioners, this tutorial provides a practical, integrated workflow for early prediction of clinical exposure and target engagement using molecular-structure-based tools (ANDROMEDA, PLATO) combined with in vitro and animal data. The platform can support go/no-go decisions and dose selection, but users should be aware of the limitations: target engagement is often underpredicted, and mechanistic models are needed to link target engagement to clinical outcomes. The approach is promising but requires prospective validation.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The underprediction of target engagement suggests a potential bias in the affinity estimates or the model structure.” → correction: “The source text does not suggest that underprediction of target engagement indicates a bias in affinity estimates or model structure. It only notes that target engagement was underpredicted.”
[^fc-2]: **CONTRADICTED** — original: “The authors did not perform a formal simulation study or benchmark against other methods.” → correction: “In this tutorial, we demonstrated how target‐engagement predictions within the InSilicoTrials platform can be leveraged to inform clinical development by integrating molecular structure‐based predictions, in vitro data, animal studies and clinical comparator information. ... Clinical trial simulations were performed across multiple dosing regimens. Predicted outcomes were compared with observed clinical data to evaluate model performance and assess the impact of different translational scaling approaches.”
[^fc-3]: **UNSUPPORTED** — original: “The platform requires a subscription.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “The platform's commercial nature may limit widespread adoption.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “The underlying models (ANDROMEDA, PLATO) are proprietary.” → correction: “The ANDROMEDA and PLATO software are regularly retrained with emerging data and models. Proprietary data can be included for customized versions of the software.”
[^fc-6]: **UNSUPPORTED** — original: “The paper provides sufficient detail on the model equations and parameters to reproduce the simulations in other tools (e.g., mrgsolve).” → correction: “The paper provides equations and some parameter values, but it does not provide complete model specifications, initial conditions, or all parameter values needed for full reproduction.”