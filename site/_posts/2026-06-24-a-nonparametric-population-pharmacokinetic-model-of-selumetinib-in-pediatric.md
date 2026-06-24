---
layout: post
title: "A Nonparametric Population Pharmacokinetic Model of Selumetinib in Pediatric Patients Diagnosed With Neurofibromatosis-I or Plexiform Neurofibromas"
date: 2026-06-24
authors: "Köllő Z, Nagy MN, Garami M, Vértessy B, Szabó AJ, Kósa J, Biró E, Kovács GB"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70156"
paper_type: popk
tags: [popk, pediatrics, oncology]
excerpt_text: "This paper presents the first nonparametric population pharmacokinetic model of selumetinib in pediatric patients with neurofibromatosis type I or plexiform neurofibromas. Clinicians and pharmacometricians interested in model-informed precision dosing for pediatric oncology will find this work valuable for individualizing therapy and exploring alternative dosing schedules to reduce the burden of fasting. The model captures high interindividual variability with excellent predictive performance ($r = 0.994$) and low shrinkage."
pdf_path: "/assets/digests/2026-06-24-a-nonparametric-population-pharmacokinetic-model-of-selumetinib-in-pediatric/PMx_A_Nonparametric_Population_Pharmacokinet_20260624.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents the first nonparametric population pharmacokinetic model of selumetinib in pediatric patients with neurofibromatosis type I or plexiform neurofibromas. Clinicians and pharmacometricians interested in model-informed precision dosing for pediatric oncology will find this work valuable for individualizing therapy and exploring alternative dosing schedules to reduce the burden of fasting. The model captures high interindividual variability with excellent predictive performance ($r = 0.994$) and low shrinkage.

---

### Executive Summary
The study developed a nonparametric population PK model of selumetinib using rich data from 22 pediatric patients (156 samples) treated at a single Hungarian center. The final model, a three-compartment structure with total body weight as a covariate on central volume ($V = V_0 \times WT$), showed outstanding fit ($r = 0.994$) and very low shrinkage (0.003%–0.215%), indicating highly informative sampling. Monte Carlo simulations demonstrated that measured concentrations from six independent patients fell within the simulated ranges, supporting external validity. A second simulation comparing dosing intervals (q6h, q8h, q12h) revealed comparable trough-to-peak ratios, suggesting that dividing the daily dose into three or four intakes could be a viable alternative to standard twice-daily dosing, potentially easing the fasting requirement and improving quality of life. The model provides efficient priors for therapeutic drug monitoring and individualized dose optimization.

---

### Scientific Context & Motivation
Selumetinib is the only approved pharmaceutical option for inoperable neurofibromatosis type I (NF-1) and plexiform neurofibromas (PN) in children, but its pharmacokinetics exhibit high interindividual variability, making exposure unpredictable. Previous parametric population PK models had limitations in capturing this heterogeneity, often with high shrinkage (18%–35%). The current study addresses the need for a more flexible modeling approach that can handle outlier values and non-normal distributions. By employing nonparametric adaptive grid (NPAG) modeling, the authors challenge the assumption of predefined parametric distributions and demonstrate that a nonparametric approach can yield superior predictive performance and clinically actionable insights for a rare pediatric population.

---

## ⚡ Methodological Snapshot
A nonparametric population PK model was built using the NPAG algorithm in Pmetrics (R environment). Eleven three-compartment models were compared, with the best model including total body weight as a covariate on central volume ($V = V_0 \times WT$). The assay error was experimentally determined ($SD = 0.0372 \times \text{concentration} + 0.879$) and used as the error model. Model evaluation included observed vs. predicted correlations, weighted residuals, gamma statistic, and information criteria. Monte Carlo simulations (10,000 iterations) were used for external validation and dosing frequency comparisons.

---

## 🏗️ Structural Model Breakdown
The final model is a three-compartment structure with an absorption compartment (with lag time and relative bioavailability), a central compartment, and a peripheral compartment. The differential equations are:

\frac{dA_{abs}}{dt} = -k_a \cdot A_{abs}   (\text{with lag time } T_{lag})

\frac{dA_{cent}}{dt} = k_a \cdot A_{abs} - (k_e + K_{CP}) \cdot A_{cent} + K_{PC} \cdot A_{per}

\frac{dA_{per}}{dt} = K_{CP} \cdot A_{cent} - K_{PC} \cdot A_{per}

Central volume is modeled as $V = V_0 \times WT$, where $V_0$ is the covariate-normalized volume. Parameters estimated as random variables: $k_a$, $K_{CP}$, $K_{PC}$, $V_0$, $k_e$, $T_{lag}$, and relative bioavailability $F$. The error model is $SD = 0.0372 \times C + 0.879$ (nmol/L).

---

### Detailed Methodological Analysis

#### Modeling Approach
Nonparametric population pharmacokinetic modeling using the NPAG algorithm in the Pmetrics package (R). Eleven three-compartment models were evaluated, varying in covariate inclusion (WT, BSA, BMI, age, allometric scaling) and absorption parameters (lag time, relative bioavailability). The final model included total body weight as a covariate on central volume ($V = V_0 \times WT$) and estimated $k_a$, $K_{CP}$, $K_{PC}$, $V_0$, $k_e$, $T_{lag}$, and $F$ as random variables.

#### Data Sources
Twenty-two pediatric patients (10 female, 12 male; median age 140.5 months, range 61–192 months) with inoperable NF-1 or PN provided 156 blood samples (5–8 per patient) for model building. Six additional patients (including one excluded from building) contributed 10 samples for external validation. Dosing regimens were individualized based on clinical response and adverse effects. Patients fasted from 2:00 AM and did not take morning dose before arrival.

#### Estimation Methods
Nonparametric adaptive grid (NPAG) algorithm, which estimates the joint probability density of parameters without assuming predefined distributions. The error model was derived from an independent spiking experiment using Theil's nonparametric regression with Siegel correction.

#### Model Evaluation
Model performance was assessed via Pearson's correlation between observed and predicted concentrations ($r = 0.994$), ordinary least squares regression ($slope = 0.999$, $intercept = 0.461$), bias-adjusted mean weighted squared prediction error (2.248), individual weighted residuals (range $-$7.67 to 4.08 nmol/L), gamma value (2.474, threshold <5), and shrinkage (0.003%–0.215%). Model comparison used $-$2 log-likelihood, AIC, posterior mean weighted prediction error, and bias-adjusted mean weighted squared prediction error.

#### Covariate Analysis
Spearman correlation was used to assess relationships between candidate covariates (age, WT, BSA, BMI, laboratory values) and PK parameters. WT was selected as the best covariate based on model performance metrics. Strong correlations among demographic parameters ($\rho = 0.835$–0.995) precluded inclusion of multiple covariates. Other models with allometric scaling, BSA, BMI, or age showed slightly inferior performance.

---

### Statistical Rigor Assessment
The nonparametric approach is well-suited for the high interindividual variability observed. The assay error was rigorously characterized using 20 independent samples at each of 21 spiking levels, with Theil-Siegel regression providing a robust error model. Model evaluation included multiple metrics (correlation, residuals, gamma, shrinkage) and comparison across 11 candidate models. The external validation, though limited to six patients, showed all measured concentrations within simulated quantiles. Limitations include the lack of a formal sample size calculation (due to the small available population) and no sensitivity analyses for model assumptions. The use of NPAG avoids distributional assumptions but may be sensitive to starting conditions and computationally intensive.

---

## 📊 Key Findings
The final nonparametric popPK model demonstrated excellent predictive performance ($r = 0.994$, $slope = 0.999$, $intercept = 0.461$). Shrinkage was extremely low (0.003%–0.215%), indicating highly informative individual data. Median relative bioavailability was 0.885 (range 0.422–1.00), median lag time 0.583 h (0.282–0.977 h). Coefficients of variation for parameters ranged from 24.3% to 234%, reflecting the wide interindividual variability captured. Strong negative correlation was found between $V_0$ and $K_e$ ($\rho = -0.826$). Monte Carlo external validation: all 10 measured concentrations from 6 patients fell within 0.01%–95% quantiles (median 19.7%). Dosing frequency simulation: median trough-to-peak ratios were 0.126 (q6h), 0.104 (q8h), and 0.065 (q12h), with overlapping ranges, indicating no appreciable accumulation differences. The model suggests that dividing the daily dose into 3 or 4 intakes could be feasible without compromising exposure stability.

---

## 💡 Clinical & Regulatory Implications
The model enables Bayesian forecasting of individual selumetinib exposure using a single covariate (weight) and a few TDM samples, facilitating dose individualization in pediatric NF-1/PN patients. The simulation results suggest that dividing the daily dose into three or four intakes (q6h or q8h) could maintain similar trough-to-peak ratios as standard twice-daily dosing, potentially allowing more flexible timing around meals and reducing the burden of fasting. This could improve adherence and quality of life. The authors propose AUC-based dosing recommendations supported by individual PK predictions. The model may also help identify patients at risk of over- or under-exposure, guiding dose adjustments to balance efficacy and toxicity. Regulatory impact: supports the use of model-informed drug development and therapeutic drug monitoring for pediatric rare diseases.

---

### Strengths & Limitations

#### Strengths
- First nonparametric popPK model of selumetinib, capturing high interindividual variability without distributional assumptions
- Rich dataset (5–8 samples per patient) enabling low shrinkage and individual support points for all 22 subjects
- Excellent predictive performance ($r = 0.994$) with robust error model derived from independent spiking experiments
- Clinically practical covariate (total body weight) easily obtainable in routine care
- Monte Carlo simulations provide actionable insights for alternative dosing schedules to reduce fasting burden

#### Limitations (Acknowledged by Authors)
- No objective verification of participants' food intake reports prior to sampling
- Sample size not based on statistical power calculations due to limited available population (~45 patients in Hungary)
- N-desmethyl selumetinib (active metabolite) was not assayed, potentially reducing accuracy in patients with rapid CYP3A4 metabolism
- NPAG algorithm can be computationally intensive and sensitive to starting conditions

#### Limitations (Expert Review)
- External validation included only 6 patients (10 samples), limiting generalizability
- No formal covariate selection procedure beyond univariate correlation and model comparison; potential for unmeasured confounders
- No comparison with parametric models on the same dataset to quantify improvement
- Allometric scaling $(WT/70)^{0.75}$ was tested but not selected; the linear WT scaling may not be physiologically optimal across a wider weight range
- Single-center study with predominantly Caucasian population; ethnic variability not assessed

#### Generalizability
The model was developed in a Hungarian pediatric population (ages 5–16 years) and may not directly generalize to other ethnicities or adult patients. However, the use of total body weight as a covariate facilitates scaling to other populations. The nonparametric framework is inherently flexible and could be updated with additional data from other centers. The dosing frequency simulation results are likely applicable to similar pediatric NF-1 populations, but prospective validation is needed.

---

### Key Equations

**Assay Error Model**

{% raw %}
$$
SD = 0.0372 \times C + 0.879
$$
{% endraw %}

Standard deviation of measured selumetinib concentration as a function of nominal concentration, derived from spiking experiments using Theil-Siegel regression.

**Central Volume Covariate Model**

{% raw %}
$$
V = V_0 \times WT
$$
{% endraw %}

Central volume of distribution scaled linearly by total body weight (WT in kg), where V_0 is the covariate-normalized volume parameter.

**Absorption Compartment ODE**

{% raw %}
$$
\frac{dA_{abs}}{dt} = -k_a \cdot A_{abs}
$$
{% endraw %}

First-order absorption from the absorption compartment, with lag time Tlag applied before absorption begins.

**Central Compartment ODE**

{% raw %}
$$
\frac{dA_{cent}}{dt} = k_a \cdot A_{abs} - (k_e + K_{CP}) \cdot A_{cent} + K_{PC} \cdot A_{per}
$$
{% endraw %}

Rate of change of drug amount in the central compartment, with input from absorption and transfer to/from peripheral compartment.

**Peripheral Compartment ODE**

{% raw %}
$$
\frac{dA_{per}}{dt} = K_{CP} \cdot A_{cent} - K_{PC} \cdot A_{per}
$$
{% endraw %}

Rate of change of drug amount in the peripheral compartment, with transfer from and to the central compartment.

---

### Figures & Tables

- **Figure 1**: Illustration of the sample collection procedure, showing timing of blood draws relative to drug intake.
  - *Significance*: Provides visual overview of the rich sampling schedule (5–8 samples per patient) used for model building.
- **Figure 2**: Heatmap showing Spearman correlations between candidate covariates (demographics, lab values) and PK parameter posteriors.
  - *Significance*: Demonstrates the correlation structure among covariates and supports the selection of WT as the primary covariate.
- **Figure 3**: Semi-logarithmic concentration-time profiles for all 22 patients included in model building.
  - *Significance*: Shows the high interindividual variability and the clear distribution/elimination phases in most subjects.
- **Figure 4**: Diagram of the base three-compartment model with absorption lag time and relative bioavailability.
  - *Significance*: Illustrates the structural model with all estimated random variables (F, Tlag, ka, KCP, KPC, V, Ke).
- **Figure 5**: Panel of model outputs: (A) observed vs predicted concentrations, (B) individual weighted residuals, (C) error model regression, (D) posterior parameter distributions.
  - *Significance*: Key diagnostic figure showing excellent fit ($r=0.994$), random residual scatter, and the experimentally derived error model.
- **Figure 6**: Probability histograms from Monte Carlo external validation for 6 patients, with measured concentrations indicated.
  - *Significance*: Demonstrates that all measured concentrations fall within the simulated ranges, supporting model validity.
- **Figure 7**: Simulated steady-state concentration curves for q6h, q8h, and q12h dosing regimens (40 mg/day).
  - *Significance*: Shows comparable trough-to-peak ratios across regimens, suggesting feasibility of more frequent dosing.
- **Table 1**: Demographic and laboratory characteristics of the 22 patients, split by sex.
  - *Significance*: Provides baseline characteristics of the study population, showing no significant sex differences.

---

### Code & Reproducibility Assessment
The Pmetrics package (R) used for modeling is open-source. The specific model code and input files are not publicly available in the manuscript or supplementary materials, but the authors provide detailed model specifications (Tables S3, S4, S12) that would allow reproduction. The assay error experiment is described in sufficient detail.

---

### Supplementary Materials
Supplementary materials include: Table S1 (individual dosing regimens), Table S2 (assay error experiment details), Tables S3–S4 (model input specifications), Table S5 (external validation patient data), Table S6 (individual lab values), Table S7 (covariate correlations), Table S8 (covariate-PK parameter correlations), Table S9–S10 (model comparison statistics), Table S11 (posterior correlations), Table S12 (support points), Table S13 (parameter correlations), and Figures S1–S3 (model diagram, demographic distributions, lab value distributions).

---

### Future Directions
Prospective validation of alternative dosing schedules (q6h, q8h) in a larger cohort is needed. Inclusion of the active metabolite N-desmethyl selumetinib could improve model accuracy in patients with altered CYP3A4 activity. Genetic covariates (e.g., CYP3A4/5 polymorphisms) should be explored to explain residual variability. The model could be extended to other pediatric populations (e.g., different age ranges, ethnicities) and integrated into clinical decision support tools for real-time dose adjustments. Longitudinal assessment of the relationship between exposure and clinical outcomes (tumor response, adverse events) would strengthen the case for model-informed dosing.

---

### Expert Commentary
This paper is a welcome demonstration of nonparametric population PK modeling in a challenging pediatric rare disease setting. The low shrinkage values (0.003%–0.215%) are remarkable and reflect the rich sampling design and the ability of NPAG to capture individual parameter distributions without forcing a parametric shape. The dosing frequency simulation is clinically relevant: the standard twice-daily fasting requirement is a major burden for children, and the suggestion that more frequent dosing could be feasible without increasing accumulation is valuable. However, the external validation is too limited to be definitive; a prospective study with more patients and formal non-inferiority testing would be needed before changing clinical practice. The lack of metabolite data is a minor concern given its low concentration relative to parent drug. Overall, this work provides a strong foundation for model-informed precision dosing of selumetinib and highlights the utility of nonparametric methods for highly variable drugs.

---

### Bottom Line
This nonparametric population PK model of selumetinib provides a robust, clinically implementable tool for individualized dosing in pediatric NF-1/PN patients. With excellent predictive performance and low shrinkage, it enables accurate Bayesian forecasting for therapeutic drug monitoring. The finding that q6h or q8h dosing yields comparable trough-to-peak ratios to standard q12h dosing offers a practical strategy to reduce the burden of fasting, potentially improving adherence and quality of life. Pharmacometricians should consider nonparametric approaches for drugs with high interindividual variability in rare pediatric populations.

---

---

## 📊 Figures

![Illustration of the sample collection procedure in the clinical pharmacokinetic study. TDM samples 1–5 could be collected from all participants, while 1–3 furthe]({{ site.baseurl }}/assets/digests/2026-06-24-a-nonparametric-population-pharmacokinetic-model-of-selumetinib-in-pediatric/figures/fig_01.jpg)

![Heatmap showing the correlation of continuous candidate covariates (total body weight and routine laboratory assay results) and the posteriors of the random phar]({{ site.baseurl }}/assets/digests/2026-06-24-a-nonparametric-population-pharmacokinetic-model-of-selumetinib-in-pediatric/figures/fig_02.jpg)

![Semi-logarithmic selumetinib concentration-time curves obtained in the individuals included in the construction of the population pharmacokinetic model. Points j]({{ site.baseurl }}/assets/digests/2026-06-24-a-nonparametric-population-pharmacokinetic-model-of-selumetinib-in-pediatric/figures/fig_03.jpg)

![Diagram of the base model of selumetinib. The random variables were relative bioavailability (F), lag time of absorption (Tlag), the absorption rate constant (Ka]({{ site.baseurl }}/assets/digests/2026-06-24-a-nonparametric-population-pharmacokinetic-model-of-selumetinib-in-pediatric/figures/fig_04.jpg)

![Outputs of the nonparametric pediatric population pharmacokinetic model of selumetinib. (A) Observed versus predicted concentrations (nmol/L). (B) Individual wei]({{ site.baseurl }}/assets/digests/2026-06-24-a-nonparametric-population-pharmacokinetic-model-of-selumetinib-in-pediatric/figures/fig_05.jpg)

![Results of the limited external model validation: probability histograms of the posterior predictions of selumetinib concentrations (blue bars) simulated for pat]({{ site.baseurl }}/assets/digests/2026-06-24-a-nonparametric-population-pharmacokinetic-model-of-selumetinib-in-pediatric/figures/fig_06.jpg)

![Results of the dosing frequency simulation: selumetinib concentration curves in the steady state, simulated for a daily dose of 40 mg using the population pharma]({{ site.baseurl }}/assets/digests/2026-06-24-a-nonparametric-population-pharmacokinetic-model-of-selumetinib-in-pediatric/figures/fig_07.jpg)