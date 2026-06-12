---
layout: post
title: "Anti-PD-(L)1 Antibodies: Insights From QSP-Based Meta-Analysis"
date: 2026-05-29
authors: "Johnson CL, Head SA, Fenn DA, Marron D, Fraley D, Mishra A, Burke JM, Apgar JF, Kapinos GI"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70195"
paper_type: popk
tags: [popk, qsp, oncology, immunology, meta-analysis]
excerpt_text: "This paper uses a mechanistic QSP model to test whether differential inhibition of PD-1:PD-L1 complex formation can explain the superior survival outcomes of anti-PD-1 vs. anti-PD-L1 antibodies reported in clinical meta-analyses. Surprisingly, the model predicts that anti-PD-L1 mAbs achieve equal or higher complex inhibition than anti-PD-1 mAbs at clinical doses, suggesting that the shared mechanism of action hypothesis is incomplete. This is essential reading for pharmacometricians, clinical pharmacologists, and immuno-oncology drug developers seeking to understand translational PK/PD gaps."
pdf_path: "/assets/digests/2026-05-29-anti-pd-l1-antibodies-insights-from-qsp-based-meta-analysis/PMx_AntiPDL1_Antibodies_Insights_From_QSPBas_20260529.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper uses a mechanistic QSP model to test whether differential inhibition of PD-1:PD-L1 complex formation can explain the superior survival outcomes of anti-PD-1 vs. anti-PD-L1 antibodies reported in clinical meta-analyses. Surprisingly, the model predicts that anti-PD-L1 mAbs achieve equal or higher complex inhibition than anti-PD-1 mAbs at clinical doses, suggesting that the shared mechanism of action hypothesis is incomplete. This is essential reading for pharmacometricians, clinical pharmacologists, and immuno-oncology drug developers seeking to understand translational PK/PD gaps.

---

### Executive Summary
Johnson et al. developed a quantitative systems pharmacology (QSP) model to compare the extent of PD-1:PD-L1 complex inhibition by five anti-PD-1 antibodies (pembrolizumab, nivolumab, cemiplimab, dostarlimab, retifanlimab) and three anti-PD-L1 antibodies (atezolizumab, avelumab, durvalumab) at their approved clinical dosing regimens. Despite meta-analyses suggesting superior overall survival for anti-PD-1 agents, the model predicts that all eight mAbs achieve >96% complex inhibition in the tumor compartment, with anti-PD-L1 mAbs actually showing slightly higher inhibition on average. These findings were robust to extensive sensitivity analyses across six tumor parameterization scenarios (varying PD-L1 expression and effector-to-target ratio) and virtual population bootstrap sampling. The authors conclude that PD-1:PD-L1 complex inhibition alone cannot explain the observed clinical efficacy differences, implicating additional mechanisms such as the PD-1:PD-L2 axis or PD-L1:B7.2 signaling as potential differentiators.

---

### Scientific Context & Motivation
Multiple clinical meta-analyses, notably Duan et al. (2020), have suggested that anti-PD-1 antibodies yield better overall survival (HR 0.75, p<0.001) and progression-free survival (HR 0.73, p=0.02) compared to anti-PD-L1 antibodies. However, no direct head-to-head randomized trials exist, creating uncertainty about whether these differences are real or confounded by cross-trial comparisons. The shared mechanistic hypothesis posits that both drug classes work by blocking PD-1:PD-L1 complex formation, releasing T-cell inhibition. If this were the sole mechanism, comparable complex inhibition should yield comparable clinical outcomes. Prior QSP models (e.g., Bazzazi and Shahraz) have incorporated tumor growth dynamics but implicitly assumed PD-1 occupancy advantage, making them unable to test the mechanistic null hypothesis. This paper fills a critical gap by using a bottom-up, mechanism-based QSP model without any prior favoring either class, directly testing whether complex inhibition alone differentiates the two classes.

---

## ⚡ Methodological Snapshot
The authors used Applied BioMath QSP Notebook's 'Monospecific Anti-Receptor with Membrane Ligand Competitor (4-Compartment) with Avidity' model, a mechanistic PK/PD model of a mAb binding to a membrane-bound receptor and blocking binding to a membrane-bound ligand. Eight approved antibodies were simulated at their clinical doses over 48 weeks across six tumor parameterization scenarios varying PD-L1 expression (30%+ to 90%+) and effector-to-target ratios (1:10 to 1:100). Sensitivity was tested via a 500-patient virtual population with bootstrap sampling (10k replicates) mirroring the Duan et al. meta-analysis comparison of avelumab vs. pembrolizumab.

---

## 🏗️ Structural Model Breakdown
The QSP model is a three-compartment (central, peripheral, tumor) system with membrane binding dynamics. In the tumor compartment, the antibody (Ab) binds reversibly to its target receptor (R) on one cell type (T cells for anti-PD-1, tumor cells for anti-PD-L1) with association rate $k_{on}$ and dissociation rate $k_{off}$. The antibody:receptor complex (AbR) can internalize ($k_{int}$) and recycle. The free receptor (R) competes with the ligand (L) on the opposing cell type for binding to form the signaling complex (RL = PD-1:PD-L1). The model tracks: free antibody, free receptor, free ligand, antibody:receptor complex, and receptor:ligand complex. Elimination from the central compartment is linear ($CL$). The key output is the steady-state concentration of RL complex in the tumor relative to baseline (drug-free) conditions. The model assumes constant cell numbers (no tumor growth or death) and homogeneous receptor expression within each cell type. The six scenarios vary PD-L1 expression (low/medium/high) and E:T ratio (1:10, 1:50, 1:100), yielding different total PD-1 and PD-L1 concentrations and cellular surface areas.

---

### Detailed Methodological Analysis

#### Modeling Approach
Mechanistic QSP model with three compartments (central, peripheral, tumor) implementing target-mediated drug disposition (TMDD) with membrane-bound receptor and ligand. The 'receptor' and 'ligand' roles reverse depending on drug class (anti-PD-1 mAbs target PD-1 as receptor, PD-L1 as ligand; anti-PD-L1 mAbs target PD-L1 as receptor, PD-1 as ligand). Model includes binding kinetics, receptor internalization, and complex formation. Implemented in Applied BioMath QSP Notebook (Certara Predictive Technologies).

#### Data Sources
Literature-derived biological parameters: PD-1 and PD-L1 concentrations, internalization rates, cell densities, receptor-ligand affinity ($K_d$). Drug-specific parameters: binding affinities from meta-analyses on PD-1/PD-L1 binding (Stewart et al., Cash et al.), linear elimination half-lives, peripheral distribution half-lives, partition coefficients from published clinical PK data. Tumor parameterizations: PD-L1 expression on tumor cells (30%+, 60%+, 90%+), T-cell E:T ratios (1:10, 1:50, 1:100).

#### Estimation Methods
No parameter estimation; all parameters fixed to literature-derived values. Simulations were deterministic for the base analysis. Virtual population (Vpop) generated by sampling parameter distributions (details in Appendix S1). Bootstrap: 100 virtual patients sampled without replacement from 500 total Vpatients, repeated 10,000 times.

#### Model Evaluation
Model evaluation consisted of: (1) sensitivity analysis across six tumor parameterization scenarios; (2) Vpop simulations assessing impact of parameter variability; (3) bootstrap analysis comparing avelumab vs. pembrolizumab complex inhibition distributions. No formal VPC or goodness-of-fit diagnostics since this is a literature-parameterized model without training data.

#### Covariate Analysis
The six tumor parameterization scenarios effectively serve as a sensitivity/covariate analysis on PD-L1 expression and E:T ratio. The authors found that these covariates did not change the qualitative conclusion that anti-PD-L1 mAbs achieve higher complex inhibition. No formal covariate model selection (e.g., stepwise COSSAC or full covariate modeling) was performed.

---

### Statistical Rigor Assessment
The statistical approach is appropriate for a simulation-based sensitivity analysis, though no formal parameter uncertainty quantification is performed on the literature-derived inputs. The six parameterization scenarios cover plausible ranges of PD-L1 expression and E:T ratios, but the 500 virtual patients in the Vpop are generated by sampling from assumed distributions rather than from clinical data. The bootstrap analysis (10k replicates of 100 from 500) is standard and the 3.92% result is clear. A limitation is that no formal sensitivity analysis on drug-specific PK parameters (e.g., half-life, Vc) is reported — only biological parameters were varied. The sample size considerations are relevant: the meta-analysis comparison involved thousands of patients, while the Vpop simulates only 500 virtual patients. However, the qualitative conclusion that all mAbs achieve >96% inhibition is so extreme that small differences in statistical rigor are unlikely to change the result. Missing data is not applicable as this is a simulation study.

---

## 📊 Key Findings
The primary finding is that at clinical doses, all eight approved anti-PD-(L)1 mAbs achieve >96% inhibition of PD-1:PD-L1 complex formation in the tumor compartment. Contrary to the meta-analysis expectation, anti-PD-L1 mAbs (particularly durvalumab at 1500 mg Q3W, achieving ~0.01% complexes remaining) sustain higher levels of complex inhibition than anti-PD-1 mAbs. Retifanlimab showed a slight localized TMDD effect at high PD-1 tumor burden (E:T=1:10) due to its tighter binding affinity and the short PD-1 half-life. Sensitivity analysis across six tumor parameterization scenarios (varying PD-L1 expression from 30%+ to 90%+ and E:T ratios from 1:10 to 1:100) did not alter this conclusion. The bootstrap analysis mirroring the KEYNOTE-010 vs. JAVELIN Lung 200 comparison (Duan et al. Mirror 2) showed that only 3.92% of sampled virtual patient sets favored pembrolizumab over avelumab for complex inhibition, while the clinical comparison showed a 27% risk reduction for pembrolizumab. Virtual population simulations confirmed that anti-PD-L1 mAbs exhibited less variability and higher median complex inhibition than anti-PD-1 mAbs.

---

## 💡 Clinical & Regulatory Implications
The results challenge the assumption that anti-PD-1 and anti-PD-L1 antibodies are therapeutically interchangeable due to shared complex inhibition. From a drug development perspective, this suggests that: (1) for preclinical candidate selection, target binding affinity and complex inhibition may not differentiate anti-PD-1 from anti-PD-L1 mAbs; (2) clinical superiority claims for anti-PD-1 over anti-PD-L1 should consider additional mechanisms beyond complex blockade; (3) for biosimilar or follow-on development, demonstrating equivalent complex inhibition may not assure equivalent clinical efficacy; (4) dosing regimens for these drugs are already at the plateau of complex inhibition (>96%), so dose adjustments are unlikely to improve efficacy through this mechanism. For regulatory submissions, this work supports the need for mechanistic PD biomarkers beyond target occupancy (e.g., T-cell activation markers, cytokine levels) to differentiate drug classes. No specific dosing recommendations change as a result of this analysis.

---

### Strengths & Limitations

#### Strengths
- Bottom-up mechanistic modeling approach without prior assumptions favoring either antibody class
- Comprehensive sensitivity analysis across six tumor parameterization scenarios covering clinically relevant ranges of PD-L1 expression and E:T ratios
- Rigorous bootstrap sampling mirroring published meta-analysis comparisons
- Inclusion of all eight clinically approved anti-PD-(L)1 mAbs with literature-informed PK and binding parameters
- Clear articulation of the null hypothesis being tested (shared mechanism of action via complex inhibition)

#### Limitations (Acknowledged by Authors)
- Model does not include PD-1:PD-L2 axis, which is selectively blocked by anti-PD-1 mAbs and may contribute to efficacy differences
- Model does not include PD-L1:B7.2 axis, which is selectively affected by anti-PD-L1 mAbs
- Constant tumor cell number assumed (no tumor growth or shrinkage modeled)
- Other resistance mechanisms (PD-L1 upregulation, neoantigen expression) not included

#### Limitations (Expert Review)
- No direct validation of model predictions against clinical PD-1:PD-L1 complex inhibition data, which remains unmeasurable in human tumors
- The assumption that PD-1 and PD-L1 expression on tumor cells and T cells are homogeneous within a parameterization scenario may oversimplify spatial heterogeneity
- QSP Notebook is a proprietary platform, limiting full reproducibility of simulations
- No formal model calibration to clinical PK/PD data; parameters are literature-derived point estimates without uncertainty
- The model does not incorporate downstream signaling effects (e.g., T-cell activation, cytokine production) that may be nonlinear with respect to complex inhibition

#### Generalizability
The findings are specific to the PD-1/PD-L1 axis and the eight approved mAbs studied. The model framework could be generalized to other checkpoint inhibitor pairs where shared target inhibition is hypothesized as the primary mechanism, but the conclusion that complex inhibition alone does not differentiate these two classes is likely robust given the extensive sensitivity analysis. Translational relevance is limited by the lack of direct human tissue confirmation of complex inhibition levels, and the model's predictions should be interpreted as a mechanistic falsification of the shared mechanism hypothesis rather than a direct prediction of clinical outcomes.

---

### Key Equations

**Target-Mediated Drug Disposition (TMDD) with Membrane Binding**

{% raw %}
$$
\frac{d[Ab]}{dt} = k_{in} - k_{el}[Ab] - k_{on}[Ab][R] + k_{off}[AbR] + k_{rec}[AbR] + \text{distribution terms}
$$
{% endraw %}

General structure of the QSP model describing monoclonal antibody binding to membrane-bound receptor (PD-1 or PD-L1) with internalization and recycling. Exact equation depends on compartment and target binding orientation.

**Complex Inhibition Metric**

{% raw %}
$$
\% \text{ Complex Remaining} = \frac{[PD1{:}PDL1]_{\text{treated}}}{[PD1{:}PDL1]_{\text{baseline}}} \times 100
$$
{% endraw %}

Primary model output comparing PD-1:PD-L1 complex concentration after treatment relative to baseline (drug-free) condition in the tumor compartment.

**PK-Compartment Distribution**

{% raw %}
$$
\frac{dA_c}{dt} = -\left( \frac{CL}{V_c} + \frac{Q}{V_c} \right) A_c + \frac{Q}{V_p} A_p + \text{input}
$$
{% endraw %}

Standard two-compartment PK model with central ($V_c$) and peripheral ($V_p$) volumes, intercompartmental clearance ($Q$), and linear elimination ($CL$).

---

### Figures & Tables

- **Figure 1**: Model diagram showing central, peripheral, and tumor compartments with antibody-receptor binding dynamics, receptor internalization, and complex formation.
  - *Significance*: Illustrates the QSP model structure used for all simulations, including the four-compartment membrane binding framework.
- **Figure 2**: Panel of four subfigures: (a) plasma PK profiles at steady state, (b) tumor PK profiles across six parameterizations, (c) % target engagement, (d) % PD-1:PD-L1 complex remaining relative to baseline.
  - *Significance*: Core result showing all eight mAbs achieve >96% complex inhibition, with anti-PD-L1 mAbs (especially durvalumab) showing slightly higher inhibition than anti-PD-1 mAbs.
- **Figure 3**: Virtual population (Vpop) simulations showing lower and upper quartile profiles for PD-1:PD-L1 complex inhibition across 500 virtual patients.
  - *Significance*: Demonstrates robustness of the finding to parameter variability; anti-PD-L1 mAbs still show higher inhibition with less variability.
- **Figure 4**: Bootstrap analysis comparing avelumab 10 mg/kg Q2W vs. pembrolizumab 10 mg/kg Q3W: (a) Vpop simulation of complex inhibition, (b) bootstrap distribution showing only 3.92% of samples favor pembrolizumab.
  - *Significance*: Directly tests the clinical comparison from Duan et al. Mirror 2 and finds that complex inhibition rarely favors pembrolizumab, contradicting the clinical OS advantage.
- **Table S1**: Complete parameter tables for the model including biological parameters (PD-1/PD-L1 concentrations, internalization rates, affinities) and drug-specific PK parameters.
  - *Significance*: Essential for reproducibility and understanding the parameter ranges explored in sensitivity analysis.

---

### Code & Reproducibility Assessment
The model was developed in Applied BioMath QSP Notebook (Certara Predictive Technologies), a proprietary platform. Full model code is not publicly available, though the submission includes detailed parameter tables in supplementary materials (Table S1, Appendix S1). The virtual population and bootstrap sampling methods are described qualitatively but custom code is not shared.

---

### Supplementary Materials
Supplementary materials (Appendix S1, Table S1, Figure S1) provide complete model equations, parameter values, tumor parameterization scenarios (six combinations of PD-L1 expression levels and E:T ratios), and additional bootstrap results. Not available in the public version extracted but referenced throughout.

---

### Future Directions
The authors suggest several extensions: (1) incorporating the PD-1:PD-L2 axis to test whether selective blockade by anti-PD-1 mAbs explains efficacy differences; (2) adding PD-L1:B7.2 signaling for anti-PD-L1 mAbs; (3) including tumor growth dynamics and immune cell recruitment to link complex inhibition to tumor shrinkage; (4) integrating QSP with model-based meta-analysis (MBMA) to systematically identify covariates beyond exposure that differentiate efficacy; (5) exploring additional resistance mechanisms such as dynamic PD-L1 upregulation and neoantigen presentation. The model framework could also be extended to bispecific antibodies or combination therapies that simultaneously target multiple checkpoints.

---

### Expert Commentary
This is a textbook example of using QSP to challenge a prevailing mechanistic dogma. The field has long assumed that anti-PD-1 and anti-PD-L1 antibodies are therapeutically interchangeable due to shared target complex inhibition, yet meta-analyses consistently suggest otherwise. By building a model that makes no a priori assumption about which class is superior and testing the null hypothesis that complex inhibition is the sole driver, the authors elegantly show that this hypothesis is falsified. The key teaching point for pharmacometricians is the power of 'negative results' in QSP — proving that a mechanism is insufficient is as valuable as proving it is sufficient. The bootstrap approach mirroring Duan et al.'s mirror analysis is particularly clever, directly translating the model's simulated complex inhibition into the same statistical framework used in clinical meta-analyses. The main limitation, and one the authors acknowledge, is that the model does not incorporate downstream signaling beyond complex formation. Future work should consider that the relationship between complex inhibition and T-cell activation may be nonlinear and saturable, such that >96% inhibition may be on a plateau where small differences are clinically irrelevant. Additionally, the model assumes constant tumor burden, but in reality, the dynamic feedback between T-cell activation, tumor cell killing, and antigen release could amplify small initial differences in complex inhibition into large clinical outcome differences over time — a phenomenon that would require a full tumor-immune interaction model to capture.

---

### Bottom Line
This QSP analysis formally tests and rejects the hypothesis that differential PD-1:PD-L1 complex inhibition explains the superior clinical outcomes of anti-PD-1 vs. anti-PD-L1 antibodies. For practicing pharmacometricians, this work underscores the value of QSP models in falsifying overly simplistic mechanistic assumptions and highlights the need to incorporate additional pathways (PD-1:PD-L2, PD-L1:B7.2, tumor immune microenvironment dynamics) when comparing drug classes that ostensibly target the same signaling axis. The methodological approach of combining bottom-up QSP with bootstrap sensitivity analysis provides a template for similar mechanism-based comparisons in immuno-oncology.

---

---

## 📊 Figures

![Model diagram. After administration in the Central compartment, the antibody can distribute to the Peripheral and Disease (Tumor) compartments. Elimination occur]({{ site.baseurl }}/assets/digests/2026-05-29-anti-pd-l1-antibodies-insights-from-qsp-based-meta-analysis/figures/fig_01.jpg)

![Model simulations of the eight mAbs at their respective clinical doses. (a) Steady state plasma PK profiles for the eight mAbs. (b) Steady state tumor PK profile]({{ site.baseurl }}/assets/digests/2026-05-29-anti-pd-l1-antibodies-insights-from-qsp-based-meta-analysis/figures/fig_02.jpg)

![Vpop simulations of the eight mAbs at their respective clinical doses. Ribbons indicate the lower and upper quartile profiles, with the central solid/dashed line]({{ site.baseurl }}/assets/digests/2026-05-29-anti-pd-l1-antibodies-insights-from-qsp-based-meta-analysis/figures/fig_03.jpg)

![Bootstrap analysis of avelumab 10 mg/kg Q2W vs. pembrolizumab 10 mg/kg Q3W. (a) Vpop simulation of PD-1:PD-L1 complex inhibition in the tumor (% baseline) for th]({{ site.baseurl }}/assets/digests/2026-05-29-anti-pd-l1-antibodies-insights-from-qsp-based-meta-analysis/figures/fig_04.jpg)