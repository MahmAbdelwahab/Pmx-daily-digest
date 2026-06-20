---
layout: post
title: "Physiologically-Based Pharmacokinetic Modeling of the PARP Inhibitor Niraparib"
date: 2026-06-20
authors: "Gareth J. Lewis, R. C. J., A. S. K., K. S. T. et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, 15(1), e70182"
doi: "10.1002/psp4.70182"
paper_type: popk
tags: [popk, pbpk, oncology]
excerpt_text: "This paper presents a comprehensive PBPK model for niraparib, a PARP inhibitor, demonstrating that its metabolism is mediated by carboxylesterase 1 (CES1) rather than CYP enzymes. The model successfully captures niraparib and its metabolite M1 pharmacokinetics across multiple clinical studies in cancer patients using a virtual cancer population, and prospectively predicts drug-drug interaction liabilities with CYP1A2 and MATE transporters. This work is essential reading for pharmacometricians and DDI scientists involved in PBPK modeling of non-CYP cleared drugs, especially those working on PARP inhibitors or CES1 substrates."
pdf_path: "/assets/digests/2026-06-20-physiologically-based-pharmacokinetic-modeling-of-the-parp-inhibitor-niraparib/PMx_PhysiologicallyBased_Pharmacokinetic_Mod_20260620.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a comprehensive PBPK model for niraparib, a PARP inhibitor, demonstrating that its metabolism is mediated by carboxylesterase 1 (CES1) rather than CYP enzymes. The model successfully captures niraparib and its metabolite M1 pharmacokinetics across multiple clinical studies in cancer patients using a virtual cancer population, and prospectively predicts drug-drug interaction liabilities with CYP1A2 and MATE transporters. This work is essential reading for pharmacometricians and DDI scientists involved in PBPK modeling of non-CYP cleared drugs, especially those working on PARP inhibitors or CES1 substrates.

---

### Executive Summary
This study develops and validates a physiologically-based pharmacokinetic (PBPK) model for niraparib and its primary metabolite M1, using a combination of in vitro experiments and clinical data. The in vitro work conclusively identifies CES1 as the primary metabolic enzyme, with no involvement of CYP enzymes or CES2. The PBPK model, built in Simcyp using a virtual cancer population, accurately predicts niraparib and M1 exposures across 11 single and repeat dose levels (30–400 mg) within a 2-fold acceptance criterion. The model is then applied to predict drug-drug interactions (DDIs) in special populations (hepatic impairment, Chinese/Japanese ethnicity) and to assess precipitant DDI liabilities. Key findings include a weak induction risk for CYP1A2 substrates at niraparib doses ≥200 mg and a moderate DDI risk with MATE-1/2K substrates (e.g., metformin) at doses ≥200 mg, while no significant interactions are predicted for CYP2C19, CYP2D6, P-gp, or BCRP. The work highlights the utility of PBPK modeling for non-CYP cleared drugs and provides a framework for prospective DDI assessment in cancer patients.

---

### Scientific Context & Motivation
Niraparib is a PARP inhibitor with linear pharmacokinetics, a long half-life, and high volume of distribution. Unlike other PARP inhibitors (e.g., olaparib), niraparib is not metabolized by CYP enzymes, which limits its DDI liability. However, its metabolism by carboxylesterase 1 (CES1) is poorly characterized in the context of PBPK modeling. This study addresses the knowledge gap regarding the specific metabolic pathway of niraparib and the applicability of PBPK modeling using virtual cancer populations to predict its pharmacokinetics and DDI liabilities. The work also challenges the assumption that all PARP inhibitors have similar CYP-mediated DDI profiles, demonstrating that niraparib's unique clearance mechanism requires a tailored PBPK approach.

---

## ⚡ Methodological Snapshot
The study uses a middle-out PBPK modeling approach, combining in vitro data (CES1 clearance, permeability, solubility) with clinical PK data to estimate key parameters. The model is built in Simcyp (v22) using a virtual cancer population and the ADAM model for absorption. A full PBPK model (method 2 for distribution) is used for both niraparib and M1. The model is validated by comparing simulated vs. observed PK parameters across 11 dose levels, with acceptance criteria of 2-fold for predicted/observed ratios.

---

## 🏗️ Structural Model Breakdown
The PBPK model consists of: (1) A whole-body distribution model with 15 compartments (default Simcyp), using method 2 (Rodgers & Rowland) for $K_p$ prediction. (2) An ADAM absorption model with first-order absorption and a scalar (2) to match observed exposure. (3) Elimination via CES1-mediated hepatic metabolism ($CL_{int} = 4.0 \ \mu\text{L/min/mg protein}$) and renal clearance ($CL_r = 1.275$ L/h). (4) For M1, a separate full PBPK model with low $V_{ss}$ (0.352 L/kg) and clearance estimated as equivalent to niraparib (formation rate-limited). (5) DDI modules for CYP1A2 induction ($E_{max}$, $EC_{50}$) and transporter inhibition ($IC_{50}$ values for MATE-1/2K, P-gp, BCRP).

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole-body PBPK modeling using Simcyp (v22) with a virtual cancer population (modified from Schwenger et al.). The ADAM model predicts oral absorption based on in vitro permeability ($P_{eff,man} = 2.49 \times 10^{-4}$ cm/s). Distribution uses method 2 (Rodgers & Rowland) with no scalar. Elimination uses a middle-out approach: CES1 clearance (4.0 μL/min/mg protein) optimized from in vitro and clinical data, with renal clearance estimated as $f_{u,p} \times GFR$.

#### Data Sources
In vitro data: human liver S9, microsomes, hepatocytes, supersomes (CES1b, CES1c, CES2, CYP3A4). Clinical data: FTiH study (30–400 mg), food effect study, human ADME study, hepatic impairment study, and studies in Chinese/Japanese cancer patients. All data from published sources.

#### Estimation Methods
Parameters estimated using a combination of measured values (physicochemical, in vitro) and optimized values (e.g., absorption scalar = 2, CES1 clearance). No formal estimation algorithm (e.g., FOCE) is used; instead, a manual optimization approach is employed to match observed profiles.

#### Model Evaluation
Validation and verification (V/V) by overlaying simulated mean, 5th, and 95th percentiles with observed data. Predictive performance assessed using predicted/observed (P/O) ratios for $C_{max}$ and $AUC$, with acceptance within 2-fold. All 11 dose levels and multiple studies meet this criterion.

#### Covariate Analysis
No formal covariate analysis is performed. The model accounts for variability through the virtual cancer population (demographics, clinical chemistry) and uses fixed trial designs. The impact of CES1 phenotype (EM vs. PM) is explored in supplementary simulations, showing up to 8-fold difference in $AUC$.

---

### Statistical Rigor Assessment
The model uses a fixed trial design with $n \ge 100$ subjects to ensure adequate power for variability estimation. However, the actual clinical studies had small sample sizes (e.g., 6–12 patients), and the model does not account for inter-study variability. The 2-fold acceptance criterion is standard for PBPK models, but no formal goodness-of-fit tests (e.g., VPC, bootstrap) are reported. The high variability (CV 40–100%) in clinical data is acknowledged, but no sensitivity analysis is performed to assess the impact of parameter uncertainty on DDI predictions.

---

## 📊 Key Findings
The primary findings are: (1) In vitro experiments using human liver S9, microsomes, hepatocytes, and recombinant enzymes demonstrate that niraparib is specifically metabolized by CES1 (isoforms 1b and 1c) via amide hydrolysis to form M1, with no involvement of CYP enzymes, CES2, or amidase. (2) The PBPK model, using a middle-out approach to estimate CES1 clearance (4.0 μL/min/mg protein), successfully captures niraparib and M1 plasma concentration-time profiles across 11 dose levels (30–400 mg) with all predicted/observed ratios within 2-fold. (3) The model predicts no DDI risk for CYP2C19 or CYP2D6 substrates, but a weak induction risk for CYP1A2 substrates (e.g., caffeine) at 200–300 mg niraparib (GMR 0.68–0.77 for $AUC$). (4) A moderate DDI risk is predicted for MATE-1/2K substrates (e.g., metformin) at 200–300 mg (GMR 2.4–2.8 for $AUC$), consistent with clinical observations of increased serum creatinine. (5) Simulations in special populations (hepatic impairment, Chinese/Japanese) show good agreement with observed data, though the Japanese virtual population slightly over-predicts exposures.

---

## 💡 Clinical & Regulatory Implications
The PBPK model supports the following clinical recommendations: (1) Niraparib at 200–300 mg may weakly induce CYP1A2, so caution is advised with sensitive substrates like caffeine (monitor for reduced efficacy). (2) A moderate DDI risk with MATE-1/2K substrates (e.g., metformin) at doses ≥200 mg suggests monitoring for increased metformin exposure and potential toxicity. (3) No dose adjustment is needed for CYP2C19 or CYP2D6 substrates, or P-gp/BCRP substrates. (4) In patients with moderate hepatic impairment, niraparib $AUC$ increases by 56%, supporting a lower starting dose (200 mg). (5) The model suggests that ethnicity may affect CES1 expression, with Chinese patients showing similar exposure but Japanese patients potentially over-predicted, warranting further study.

---

### Strengths & Limitations

#### Strengths
- Comprehensive in vitro phenotyping using multiple systems (S9, microsomes, hepatocytes, supersomes) to definitively identify CES1 as the metabolic enzyme.
- Robust PBPK model development using a middle-out approach that integrates in vitro and clinical data, with validation across 11 dose levels and multiple clinical studies.
- Prospective application of the model to predict DDI liabilities in the absence of dedicated clinical DDI studies, providing regulatory-relevant insights.
- Use of virtual cancer populations (Simcyp) that match the demographic and clinical chemistry of niraparib patients, enhancing model credibility.
- Clear presentation of model performance with predicted/observed ratios within 2-fold for all key parameters.

#### Limitations (Acknowledged by Authors)
- The in vitro-to-in vivo extrapolation (IVIVE) for non-CYP enzymes (CES1) is challenging due to low turnover and uncertainty, necessitating a middle-out approach.
- The high variability in clinical data (e.g., CV 40–100%) limits precision, and the human ADME study showed discrepancies in half-life and volume of distribution.
- Limited publicly available virtual populations for ethnicity and comorbidities, requiring use of surrogate populations (e.g., healthy Chinese/Japanese).
- The model does not account for potential CES1 pharmacogenomic variants, which could impact clearance.

#### Limitations (Expert Review)
- The model assumes CES1 expression is correctly represented in the virtual populations, but genotype frequencies differ between ethnicities, which may affect predictions.
- The DDI predictions for MATE-1/2K are based on in vitro $IC_{50}$ values (0.18–0.14 μM) and may not fully capture clinical variability in transporter expression or function.
- The model uses a fixed trial design with $n \ge 100$ subjects, but the actual clinical studies had small sample sizes (e.g., 6–12 patients), which may affect variability estimates.
- The paper does not provide a formal sensitivity analysis for key parameters (e.g., $CL_{int}$, absorption scalar), which would strengthen confidence in predictions.

#### Generalizability
The PBPK model is specific to niraparib and its metabolite M1, but the methodology (middle-out approach for $CL_{int}$ clearance, use of virtual cancer populations) is generalizable to other drugs cleared by non-CYP enzymes, particularly CES1 substrates. The DDI predictions for CYP1A2 and MATE transporters are likely applicable to other PARP inhibitors with similar profiles, but caution is needed for extrapolation to other populations (e.g., pediatric) without further validation.

---

### Key Equations

**Oral Clearance (CLpo)**

{% raw %}
$$
CL_{\text{po}} = 14.2 \text{ L/h} \ (50\% \text{ CV})
$$
{% endraw %}

Estimated in vivo oral clearance of niraparib from clinical data, used as the primary elimination parameter in the PBPK model.

**Renal Clearance (CLr)**

{% raw %}
$$
CL_{\text{r}} = f_{\text{u,p}} \times \text{GFR} = 0.17 \times 7.5 \text{ L/h} = 1.275 \text{ L/h}
$$
{% endraw %}

Predicted renal clearance of niraparib based on fraction unbound in plasma ($f_{u,p}$) and glomerular filtration rate (GFR).

**CES1-Mediated Clearance (CLint)**

{% raw %}
$$
CL_{\text{int,CES1}} = 4.0 \ \mu\text{L/min/mg protein}
$$
{% endraw %}

Optimized in vitro clearance for CES1-mediated metabolism of niraparib, used to simulate primary metabolite M1 formation.

**Induction Model for CYP1A2**

{% raw %}
$$
\text{Induction} = 1 + \frac{E_{\text{max}} \times [I]}{EC_{50} + [I]}   \text{where } E_{\text{max}} = 6.34, \ EC_{50} = 6.76 \ \mu\text{M}
$$
{% endraw %}

CYP1A2 induction model using in vitro parameters ($E_{max}$, $EC_{50}$) to predict the fold-change in enzyme activity at different niraparib concentrations.

**MATE-1/2K Inhibition**

{% raw %}
$$\begin{aligned}
\text{GMR} \\
&= \frac{\text{AUC}_{\text{with niraparib}}}{\text{AUC}_{\text{without}}}   \text{for metformin at 300 mg: } 2.63 \ (2.51-2.76)
\end{aligned}$$
{% endraw %}

Geometric mean ratio (GMR) for MATE-1/2K substrate metformin when co-administered with niraparib, indicating moderate DDI risk.

---

### Figures & Tables

- **Figure 1**: In vitro clearance of niraparib and formation of metabolites using cellular and sub-cellular systems with specific inhibitors (BNPP, eserine, 1-ABT).
  - *Significance*: Demonstrates that CES1 (inhibited by BNPP) is the primary metabolic pathway, while CYP and CES2 are not involved.
- **Figure 2**: Representative simulated PBPK and observed oral PK profiles of niraparib at multiple dose levels (30–400 mg).
  - *Significance*: Shows the model's ability to capture niraparib plasma concentration-time profiles across the clinical dose range.
- **Figure 3**: Predicted versus observed $C_{max}$ and $AUC$ parameters from clinical studies used in model development and validation.
  - *Significance*: Confirms that all parameters are within the 2-fold acceptance criteria, validating the PBPK model.
- **Figure 4**: Predicted versus observed $C_{max}$ and $AUC$ from ethnic (Chinese, Japanese) and hepatic impairment studies.
  - *Significance*: Demonstrates model applicability in special populations, with good agreement for Chinese but slight over-prediction for Japanese.
- **Table 1**: Physicochemical and pharmacokinetic parameters for niraparib and metabolite M1 used in the PBPK model.
  - *Significance*: Provides the complete input parameter set for model reproducibility, including absorption, distribution, metabolism, and elimination parameters.
- **Table 2**: Geometric mean ratios (GMR) for DDI predictions with various enzyme and transporter substrates at different niraparib doses.
  - *Significance*: Summarizes the predicted DDI risk for CYP1A2, CYP2C19, CYP2D6, P-gp, BCRP, and MATE-1/2K, with color-coded risk categories.
- **Table S1**: Supplementary table showing additional DDI simulations (e.g., CES1 phenotype, simvastatin interaction) and Japanese population results.
  - *Significance*: Provides extended verification data, including the impact of CES1 poor metabolizer phenotype on niraparib PK.

---

### Supplementary Materials
The supplementary materials include Table S1 (additional DDI simulations and Japanese population results) and Appendix S1 (detailed methods for CES1 phenotyping and simvastatin interaction). These provide further validation of the model and explore the impact of CES1 pharmacogenetics on niraparib clearance.

---

### Future Directions
Future work should focus on: (1) Refining the virtual cancer population for niraparib by incorporating more clinical data to reduce variability. (2) Conducting dedicated clinical DDI studies for MATE-1/2K substrates (e.g., metformin) to validate the predicted moderate risk. (3) Exploring CES1 pharmacogenomic variants (e.g., rs2244613, rs8192935) and their impact on niraparib clearance, especially in different ethnic populations. (4) Extending the PBPK model to pediatric populations and other formulations (e.g., biopharmaceutic). (5) Developing bottom-up IVIVE methods for non-CYP enzymes to reduce reliance on middle-out approaches.

---

### Expert Commentary
This paper is a strong example of how PBPK modeling can be applied to drugs with non-CYP clearance, a growing area of interest given the limitations of CYP-focused DDI studies. The middle-out approach for CES1 is pragmatic, but the field would benefit from more robust IVIVE methods for esterases. The DDI predictions for MATE-1/2K are particularly noteworthy, as they align with clinical observations of increased serum creatinine in patients on niraparib and olaparib. The use of virtual cancer populations is a key strength, but the over-prediction in Japanese subjects suggests that ethnicity-specific CES1 expression may need to be incorporated. From a regulatory perspective, this model could support labeling recommendations for niraparib without dedicated DDI studies, but the lack of sensitivity analysis is a minor limitation. Overall, this is a well-executed study that advances the field of PBPK modeling for oncology drugs.

---

### Bottom Line
This PBPK model provides a validated framework for predicting niraparib pharmacokinetics and DDI liabilities in cancer patients, demonstrating that niraparib is a CES1 substrate with minimal CYP-mediated interactions. The key clinical implication is that niraparib at doses $\ge 200$ mg may weakly induce CYP1A2 and moderately inhibit MATE-1/2K, requiring caution with co-administered substrates like caffeine and metformin. The model also supports the use of virtual cancer populations for PBPK modeling in oncology, but highlights the need for further refinement to account for ethnic and genetic variability in CES1 expression.

---

---

## 📊 Figures

![In vitro clearance of niraparib and formation of metabolites using cellular and sub-cellular systems with specific inhibitors. Bar charts show in vitro incubatio]({{ site.baseurl }}/assets/digests/2026-06-20-physiologically-based-pharmacokinetic-modeling-of-the-parp-inhibitor-niraparib/figures/fig_01.jpg)

![Representative simulated PBPK and observed oral PK profiles of niraparib. Plots show plasma concentration (y-axis) against time, hours (x-axis) with individual s]({{ site.baseurl }}/assets/digests/2026-06-20-physiologically-based-pharmacokinetic-modeling-of-the-parp-inhibitor-niraparib/figures/fig_02.jpg)

![Predicted versus observedCmax and AUC parameters from analyzed clinical studies used in the development, verification and validation of the niraparib PBPK model.]({{ site.baseurl }}/assets/digests/2026-06-20-physiologically-based-pharmacokinetic-modeling-of-the-parp-inhibitor-niraparib/figures/fig_03.jpg)

![Predicted versus observedCmax and AUC parameters from analyzed clinical ethnic and hepatic studies used in the extended verification and application of the nirap]({{ site.baseurl }}/assets/digests/2026-06-20-physiologically-based-pharmacokinetic-modeling-of-the-parp-inhibitor-niraparib/figures/fig_04.jpg)