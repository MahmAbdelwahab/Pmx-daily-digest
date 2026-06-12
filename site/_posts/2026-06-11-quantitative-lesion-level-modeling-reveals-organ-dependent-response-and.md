---
layout: post
title: "Quantitative Lesion-Level Modeling Reveals Organ-Dependent Response and Progression Dynamics Across Six Cancer Types"
date: 2026-06-11
authors: "Dilley I, Zhou J, Liu Y, et al."
journal: "Clinical Pharmacology & Therapeutics, 2026, https://doi.org/10.1002/cpt.70260"
doi: "10.1002/cpt.70260"
paper_type: popk
tags: [popk, oncology, regulatory]
excerpt_text: "This paper applies a lesion-level nonlinear mixed-effects model to 54,281 metastatic lesions from 5,829 patients across 18 Phase III trials, revealing that organ site—particularly liver versus bone—independently drives response probability and durability. Pharmacometricians involved in oncology MIDD should read this to understand how site-stratified efficacy evaluation can unmask treatment effects confounded by metastatic distribution, especially in early dose-finding."
pdf_path: "/assets/digests/2026-06-11-quantitative-lesion-level-modeling-reveals-organ-dependent-response-and/PMx_Quantitative_LesionLevel_Modeling_Reveal_20260611.pdf"
retroactively_classified: false
---

**Content Source:** PMC Full Text

### Quick Take
This paper applies a lesion-level nonlinear mixed-effects model to 54,281 metastatic lesions from 5,829 patients across 18 Phase III trials, revealing that organ site—particularly liver versus bone—independently drives response probability and durability. Pharmacometricians involved in oncology MIDD should read this to understand how site-stratified efficacy evaluation can unmask treatment effects confounded by metastatic distribution, especially in early dose-finding.

---

### Executive Summary
Dilley et al. demonstrate that conventional RECIST-based sum-of-diameters endpoints obscure clinically meaningful heterogeneity in therapeutic response across metastatic organ sites. Using a modified Stein equation within a nonlinear mixed-effects framework, they estimate lesion-level parameters for regression ($k_{kill}$), progression ($k_{ge}$), and a resistance fraction ($F_x$) across six cancer types. Pan-cancer Cox models with patient-level random effects then quantify the independent contribution of anatomical site to response and progression hazards. Liver metastases consistently show high early shrinkage but elevated progression risk, whereas bone metastases, especially in prostate cancer, exhibit slower regression but more durable control. These patterns partially correlate with a literature-derived Vascular Perfusion and Leakiness Index (VaPLI) and immune-tolerance classification. The framework provides a quantitative basis for site-aware efficacy evaluation, improving interpretation of dose-response relationships in oncology drug development.

---

### Scientific Context & Motivation
Conventional efficacy evaluation in oncology relies on RECIST-based sum-of-diameters (SLD) or objective response rate (ORR), which average across heterogeneous metastatic lesions, masking organ-specific pharmacology. Preclinical and clinical evidence indicates that metastatic sites differ in vascular perfusion, stromal composition, immune microenvironment, and drug penetration, yet these factors are rarely incorporated quantitatively into pharmacometric models of tumor response. Existing tumor growth inhibition (TGI) models that move beyond SLD are often limited to single tumor types. This study fills a gap by providing a pan-cancer, lesion-resolved analysis that separates site-driven bias from true treatment effects, enabling more balanced dose-response and exposure-response interpretations in early development.

---

## ⚡ Methodological Snapshot
The study uses a two-stage modeling approach. First, a lesion-level nonlinear mixed-effects model based on a modified Stein equation estimates three parameters per lesion: regression rate ($k_{kill}$), progression rate ($k_{ge}$), and fraction resistant ($F_x$), with cancer type as a fixed effect and random effects on log/logit scales. Model-predicted lesion diameters are then used to define response and progression events using RECIST v1.1 thresholds. Second, pan-cancer Cox proportional hazards models with patient-level random intercepts quantify site-specific hazard ratios for response and progression, adjusting for cancer lineage and treatment class. Linear mixed-effects models (for $k_{ge}$, $k_{kill}$) and a generalized linear mixed-effects Beta model (for $F_x$) assess anatomical heterogeneity within each cancer lineage. VaPLI and immune-tolerance classification are correlated with response and progression hazards for mechanistic interpretation.

---

## 🏗️ Structural Model Breakdown
The model consists of a single compartment (lesion) with two subpopulations: a resistant fraction $F_x$ that grows exponentially at rate $k_{ge}$, and a sensitive fraction ($1-F_x$) that regresses exponentially at rate $k_{kill}$. The observed lesion diameter is the sum of both populations at each time point. No spatial or PK component is included. The model assumes constant growth and kill rates over time (no resistance emergence after treatment). Parameters are estimated for each lesion but borrow strength across lesions within patients and cancer types via random effects.

---

### Detailed Methodological Analysis

#### Modeling Approach
Modified Stein equation for lesion diameter over time: bi-exponential model with resistant fraction ($F_x$) growing at rate $k_{ge}$ and sensitive fraction ($1-F_x$) regressing at rate $k_{kill}$. NLME framework implemented in Monolix2024R1 using SAEM algorithm. Residual error: combined proportional-plus-additive on original scale. Random effects: lognormal for $k_{ge}$ and $k_{kill}$, logit-normal for $F_x$. Fixed effects: cancer type (reference = breast).

#### Data Sources
De-identified patient-level data from 18 Phase III trials via Project Data Sphere: colorectal (n=3,157), prostate (n=1,017), pancreatic (n=606), NSCLC (n=563), HNSCC (n=393), breast (n=93). Total 5,829 patients, 54,281 lesions (25,342 target, 25,851 nontarget, 3,577 new). Imaging schedules per trial protocol. Inclusion: patients with longitudinal target/nontarget lesion measurements.

#### Estimation Methods
Stochastic Approximation Expectation-Maximization (SAEM) algorithm in Monolix2024R1. M3 method for BQL handling (<5 mm). For second-stage analyses: lmer (R) for linear mixed-effects models ($\log k_{ge}$, $\log k_{kill}$), glmmTMB (R) for Beta GLMM ($F_x$), coxme (R) for Cox proportional hazards with patient-level random effects.

#### Model Evaluation
Goodness-of-fit plots (Figure S4) and representative individual lesion fits (Figure S5) reported. Model-predicted lesion diameters used for RECIST event classification. Parameter uncertainty not fully characterized (e.g., no bootstrap or VPC shown for the NLME model). Site-specific EMMs reported with 95% CIs.

#### Covariate Analysis
Cancer type included as fixed effect on all three parameters in the NLME model (reference: breast). For second-stage mixed-effects models: site (reference: OTHER), treatment (reference: chemotherapy alone) as fixed effects; patient-level random intercept. For Cox models: site group, cancer lineage, treatment group as fixed effects; patient-level frailty. Covariates with $P<0.05$ retained. Key limitation: ECOG missing in 75.6% of patients.

---

### Statistical Rigor Assessment
The use of mixed-effects models (NLME, LMM, GLMM, Cox frailty) is appropriate for the hierarchical data structure (lesions nested within patients, patients within trials). The large number of lesions (54,281) provides substantial power, but the authors acknowledge that this may inflate significance. The missing ECOG data (75.6%) is a major limitation for covariate adjustment. The Cox model specification in EQ12 appears to have a formatting error (exp! should be exp()), which may indicate a typo rather than a substantive issue. Sensitivity analyses for imaging schedule variability, informative missingness, or model misspecification are not reported. The correlation between VaPLI and response HR ($\rho=0.44$, $P<0.01$) is modest and based on literature-derived organ averages (n ~ number of organs), so the P-value should be interpreted cautiously.

---

## 📊 Key Findings
Organ site emerged as a consistent, independent determinant of response probability and durability across cancer lineages. Liver metastases showed the highest response probability but also elevated progression hazards (shorter durability), consistent with high vascular permeability and an immune-tolerant microenvironment. Bone metastases in prostate cancer responded more slowly but exhibited more durable control once regression occurred. In colorectal cancer, liver and genitourinary/reproductive lesions had elevated progression rates ($k_{ge}$) relative to intra-cancer medians, while lymph node lesions had lower $k_{ge}$. VaPLI—a literature-derived composite of organ perfusion and vascular permeability—correlated positively with response hazard ratio ($\rho = 0.44$, $P < 0.01$). Immune-tolerant organs (brain, liver, bone) showed higher progression hazards than immune-active organs after within-cancer Z-scoring (Wilcoxon $P = 0.029$). Inter-lesion heterogeneity in progression dynamics was greatest in breast and NSCLC, lowest in colorectal and pancreatic cancer.

---

## 💡 Clinical & Regulatory Implications
The findings have direct implications for oncology drug development: (1) Dose-finding trials should account for baseline metastatic distribution to avoid site-driven bias in ORR and early tumor shrinkage. (2) Liver responses should not be assumed to predict durable benefit; site-stratified duration of response (DOR) should be reported. (3) Bone metastases in prostate cancer require longer follow-up to capture response, and early assessment may underestimate efficacy. (4) VaPLI may serve as a hypothesis-generating tool for site-specific drug delivery optimization (e.g., pro-drug or nanoparticle design for low-perfusion sites). (5) Regulatory submissions may benefit from site-stratified efficacy analyses to support claims of treatment effect independent of site-driven biology.

---

### Strengths & Limitations

#### Strengths
- Largest lesion-level pan-cancer analysis to date (54,281 lesions, 5,829 patients, 18 Phase III trials), providing unprecedented statistical power.
- Advanced lesion-level NLME modeling with RECIST-based event derivation enables consistent thresholding despite irregular assessment intervals.
- Introduction of VaPLI and immune-tolerance classification provides testable physiologic hypotheses for observed site effects, linking response patterns to mechanistic drivers.
- Cox models with patient-level random effects appropriately account for within-patient lesion correlation.
- Site-specific EMMs for kge, kkill, and Fx across multiple cancer-treatment strata are systematically reported with confidence intervals.

#### Limitations (Acknowledged by Authors)
- Pooling retrospective data from 18 trials with heterogeneous imaging schedules and eligibility introduces comparability bias.
- Estimating continuous growth parameters and applying RECIST thresholds to model-predicted values introduces circularity in outcome definition.
- Organ-level physiologic proxies (VaPLI, immune tolerance) are literature-derived, not patient-specific, and may not capture within-organ heterogeneity.
- Large lesion count relative to patients may underrepresent intra-patient correlation and inflate statistical power.

#### Limitations (Expert Review)
- The M3 method for BQL handling (lesions <5 mm) was mentioned but not described in detail; its impact on early response estimation is unclear.
- The Cox model in EQ12 appears to have a syntax error (exp! should be exp()), which raises concerns about model specification.
- No formal joint modeling of tumor dynamics and survival is performed; the Cox models use modeled event times rather than direct time-to-event, potentially introducing informative censoring issues.
- VaPLI uses healthy tissue perfusion/permeability values rather than tumor-specific values, which likely differ substantially due to angiogenesis and microenvironment remodeling.
- The immune tolerance classification is binary, which may oversimplify complex, cancer-specific immune landscapes.
- Only six cancer types and limited treatment modalities (mainly chemo ± antibody, TKI) are included; results may not generalize to immunotherapies.
- ECOG performance status was missing for 75.6% of patients, limiting covariate adjustment for baseline fitness.

#### Generalizability
Findings are most generalizable to chemotherapy and targeted therapy in colorectal, pancreatic, NSCLC, breast, prostate, and HNSCC. Applicability to immunotherapy, CAR-T, or non-solid tumors is unverified. Results depend on trial eligibility criteria and imaging schedules, which may not reflect real-world clinical practice.

---

### Key Equations

**Modified Stein Equation for Lesion Diameter**

{% raw %}
$$
D_{il}(t) = D_{0,il} \left( F_{x,il} \cdot e^{k_{ge,il} t} + (1 - F_{x,il}) \cdot e^{-k_{kill,il} t} \right)
$$
{% endraw %}

Models the time course of lesion diameter as a bi-exponential mixture of a resistant fraction (Fx) growing at rate kge and a sensitive fraction (1-Fx) regressing at rate kkill.

**Residual Error Model**

{% raw %}
$$
D_{ilj} = \hat{D}_{il}(t_{ilj}) \left( 1 + \varepsilon_{ilj}^b \right) + \varepsilon_{ilj}^a,   \varepsilon_{ilj}^b \sim \mathcal{N}(0, \sigma_b^2),   \varepsilon_{ilj}^a \sim \mathcal{N}(0, \sigma_a^2)
$$
{% endraw %}

Combined proportional and additive residual error model on the original diameter scale, accounting for heteroscedastic measurement noise.

**Parameter Submodels for kge, Fx, kkill**

{% raw %}
$$
\log k_{ge,il} = \log \theta_{kge} + \sum_{c \neq \text{Breast}} \beta_c^{(kge)} I_{C_i=c} + \eta_{kge,il},   \eta_{kge,il} \sim \mathcal{N}(0, \omega_{kge}^2) \\ \operatorname{logit} F_{x,il} = \operatorname{logit} \theta_{Fx} + \sum_{c \neq \text{Breast}} \beta_c^{(Fx)} I_{C_i=c} + \eta_{Fx,il},   \eta_{Fx,il} \sim \mathcal{N}(0, \omega_{Fx}^2) \\ \log k_{kill,il} = \log \theta_{kkill} + \sum_{c \neq \text{Breast}} \beta_c^{(kkill)} I_{C_i=c} + \eta_{kkill,i},   \eta_{kkill,l} \sim \mathcal{N}(0, \omega_{kkill}^2)
$$
{% endraw %}

Fixed-effects on cancer type (reference: breast) with lognormal random effects for kge and kkill, and logit-normal random effects for Fx.

**Linear Mixed-Effects Model for kge Heterogeneity**

{% raw %}
$$\begin{aligned}
\log k_{ge, i\ell} \\
&= \beta_{0i} + \sum_{r \neq r_0} \beta_{i,r} \mathbf{1}_{\text{SITE}_\ell = r} + \sum_{j \neq j_0} \gamma_{i,j} \mathbf{1}_{\text{TRT}_\ell = j} + u_{i,p} \\
& + \varepsilon_{i\ell},   u_{i,p} \sim \mathcal{N}(0, \tau_i^2),   \varepsilon_{i\ell} \sim \mathcal{N}(0, \sigma_i^2)
\end{aligned}$$
{% endraw %}

Models site and treatment effects on log kge within each cancer lineage, with patient-level random intercept to account for within-patient clustering.

**Linear Mixed-Effects Model for kkill Heterogeneity**

{% raw %}
$$\begin{aligned}
\log k_{kill, i\ell} \\
&= \beta_{0i} + \sum_{r \neq r_0} \beta_{i,r} \mathbf{1}_{\text{SITE}_\ell = r} + \sum_{j \neq j_0} \gamma_{i,j} \mathbf{1}_{\text{TRT}_\ell = j} + u_{i,p} \\
& + \varepsilon_{i\ell},   u_{i,p} \sim \mathcal{N}(0, \tau_i^2),   \varepsilon_{i\ell} \sim \mathcal{N}(0, \sigma_i^2)
\end{aligned}$$
{% endraw %}

Same structure as for kge, applied to log-transformed kkill to assess site-specific regression dynamics.

**Generalized Linear Mixed-Effects Model for Fx**

{% raw %}
$$\begin{aligned}
F_{xi1} \sim \text{Beta}(\mu_{i1} \phi_i, (1-\mu_{i1}) \phi_i),   \operatorname{logit} \mu_{i1} \\
&= \beta_{0i} + \sum_{r \neq r_0} \beta_{i,r} I_{\text{SITE}_1 = r} + \sum_{j \neq j_0} \gamma_{i,j} I_{\text{TRT}_1 = j} + u_{i,p}^{(1)}
\end{aligned}$$
{% endraw %}

Beta regression model for Fx (fraction resistant) with logit link, site and treatment fixed effects, and patient-level random intercept.

**Cox Proportional Hazards Model for Lesion Outcomes**

{% raw %}
$$\begin{aligned}
h_i(t \mid X_i, b_{s(i)}) \\
&= h_0(t) \exp\left( \sum_{r \neq r_0} \beta_r I_{\text{SITE\_group}_i = r} + \sum_{c \neq c_0} \gamma_c I_{\text{CANCER}_i = c} \\
& + \sum_{j \neq j_0} \delta_j I_{\text{TRT\_group}_i = j} + b_{s(i)} \right),   b_s \sim \mathcal{N}(0, \tau^2)
\end{aligned}$$
{% endraw %}

Cox model with patient-level frailty (random intercept) to estimate site-specific hazard ratios for response and progression, adjusted for cancer lineage and treatment group.

**Vascular Perfusion and Leakiness Index (VaPLI)**

{% raw %}
$$
\text{VaPLI} = \log(\text{Perfusion rate} \times \text{Pore size})
$$
{% endraw %}

Composite index approximating site-specific drug delivery potential, derived from organ-specific perfusion rates and vascular pore sizes.

---

### Figures & Tables

- **Figure 1**: Analytical workflow showing data sources (Project Data Sphere, 18 trials, 6 cancer types), lesion-level NLME modeling using modified Stein equation, and pan-cancer Cox models for site-specific hazard ratios.
  - *Significance*: Provides visual overview of the entire modeling framework and data integration pipeline.
- **Figure 2**: CONSORT diagram, cohort characteristics (e.g., 5,829 patients, 54,281 lesions), lesion distribution by site and cancer type, and clinical outcomes across lineages.
  - *Significance*: Establishes the scale and representativeness of the dataset; highlights heterogeneity in metastatic patterns across cancer types.
- **Figure 3**: Distributions of kkill, kge, and Fx by metastatic site for prostate cancer and HNSCC, with statistically significant pairwise comparisons annotated.
  - *Significance*: Demonstrates site-specific differences in lesion growth dynamics, with bone in prostate and liver in HNSCC showing distinct parameter profiles.
- **Figure 4**: Heatmap of response probability by site and cancer type; response duration patterns; hazard ratios for response and progression by site with cancer-type trend lines.
  - *Significance*: Central visualization of the main result: organ site independently predicts both response probability and durability, with liver showing high early response but higher progression risk.
- **Figure 5**: VaPLI ranking by organ; correlation between VaPLI and response hazard ratio (ρ=0.44, P<0.01); comparison of progression hazards between immune-tolerant and immune-active organs.
  - *Significance*: Provides physiologic interpretation: vascular/permeability measures and immune landscape partially explain site-specific response and progression patterns.
- **Table 1**: List of 18 clinical trials included, with cancer type, intervention arms, data arm availability, and sponsor.
  - *Significance*: Documents the breadth and sources of data, enabling assessment of trial heterogeneity and potential biases.
- **Table 2**: Demographics and baseline characteristics of the 5,829 patients: age, race, cancer type, ECOG, treatment group, event rates.
  - *Significance*: Characterizes the study population; notable for 75.6% missing ECOG and 90.5% White/Caucasian, indicating generalizability concerns.

---

### Code & Reproducibility Assessment
Clinical trial data are publicly available via Project Data Sphere. R code for the linear/generalized linear mixed-effects models and Cox proportional hazards models is not explicitly provided but likely reproducible from methods described. The NLME model was fitted in Monolix2024R1; the model specification file is not publicly deposited.

---

### Supplementary Materials
Supplementary materials include Table S1–S4 (trial details), Figure S1 (parameter influence on trajectories), Figure S3 (response duration), Figure S4 (goodness-of-fit), Figure S5 (individual lesion fits), Figure S6 (parameter estimates across all cancers), Figure S7 (lesion progression/survival by lineage), Figure S8 (heterogeneity across sites), Figure S9 (VaPLI input values), and Table S5 (model dictionary), Table S7 (model effect tables). These provide essential details for reproducing the analysis.

---

### Future Directions
This work raises several follow-up questions for the pharmacometrics community: (1) Can VaPLI be replaced with patient-specific imaging-derived vascular metrics (e.g., DCE-MRI) to improve prediction of site-specific response? (2) How do site-specific response patterns change under immunotherapy, where immune microenvironment plays a dominant role? (3) Can this lesion-level framework be integrated into quantitative systems pharmacology (QSP) models of tumor-immune-drug interactions? (4) What is the optimal weighting scheme for site-stratified ORR and PFS? (5) Prospective validation of site-stratified efficacy evaluation in early-phase dose-finding trials is needed.

---

### Expert Commentary
This study represents an important methodological advance in oncology pharmacometrics. The lesion-level NLME framework is a natural extension of prior TGI models, but the scale and pan-cancer scope are novel. The key insight is that early tumor shrinkage (often used for go/no-go decisions) is highly site-dependent, and reliance on aggregate SLD can be misleading. From a regulatory perspective, the FDA has shown interest in tumor growth rate metrics; this paper provides a more granular approach by localizing these rates anatomically. A notable missed opportunity is the lack of joint modeling of lesion dynamics and OS/PFS, which would strengthen the clinical relevance. The VaPLI is a clever heuristic but should not be over-interpreted as mechanistic. The main teaching point for pharmacometricians is the importance of accounting for lesion site as a covariate in TGI models—not just for scientific insight, but to avoid bias in treatment effect estimation.

---

### Bottom Line
For practicing pharmacometricians: When characterizing dose-exposure-response in oncology, lesion site is a critical confounder in early-phase trials. This paper provides a practical framework to quantify site-specific response and progression hazards, enabling site-aware weighting of efficacy endpoints. In practice, consider stratifying or adjusting for baseline metastatic distribution in exposure-response analyses and reporting site-stratified ORR and duration of response to avoid misleading conclusions driven by unbalanced lesion distribution.

---

---

## 📊 Figures

![Our analytical workflow with statistical modeling approaches used in this pan-cancer analysis.]({{ site.baseurl }}/assets/digests/2026-06-11-quantitative-lesion-level-modeling-reveals-organ-dependent-response-and/figures/fig_01.jpg)

![Data source, population characteristics, and lesion features. (a) CONSORT diagram showing inclusion and exclusion criteria for metastatic cancer lesions. The total numbers of patie]({{ site.baseurl }}/assets/digests/2026-06-11-quantitative-lesion-level-modeling-reveals-organ-dependent-response-and/figures/fig_02.jpg)

![Variability in tumor regression and progression across metastatic sites highlighting trends and differences by cancer type. (a) Statistically significant differences in lesion grow]({{ site.baseurl }}/assets/digests/2026-06-11-quantitative-lesion-level-modeling-reveals-organ-dependent-response-and/figures/fig_03.jpg)

![Both treatment and lesion location influence response rate, durability of response, and progression hazards. (a) The heatmap displays the median lesion probability of response (dis]({{ site.baseurl }}/assets/digests/2026-06-11-quantitative-lesion-level-modeling-reveals-organ-dependent-response-and/figures/fig_04.jpg)

![Vascular perfusion and leakiness moderately predict response trends across organs, and the immune landscape of anatomical organs correlates with progression risk. (a) The Vascular ]({{ site.baseurl }}/assets/digests/2026-06-11-quantitative-lesion-level-modeling-reveals-organ-dependent-response-and/figures/fig_05.jpg)