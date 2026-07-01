---
layout: post
title: "Butorphanol Pharmacokinetics Across Species: Meta-Analysis Integrating Allometric Scaling and Minimal Physiologically Based Pharmacokinetic Modeling"
date: 2026-07-01
authors: "Ahmed M. Saeed, William J. Jusko"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70293"
paper_type: popk
tags: [popk, pbpk, meta-analysis]
excerpt_text: "This paper presents a comprehensive meta-analysis of butorphanol pharmacokinetics across 13 species using a novel mPBPK allometric meta-analysis (MAMA) framework. It demonstrates that a single tissue partition coefficient (Kp≈4) describes distribution across most species, with the horse as a notable exception. The work is essential reading for veterinary pharmacologists, translational scientists, and anyone interested in interspecies PK scaling."
pdf_path: "/assets/digests/2026-07-01-butorphanol-pharmacokinetics-across-species-meta-analysis-integrating/PMx_Butorphanol_Pharmacokinetics_Across_Spec_20260701.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a comprehensive meta-analysis of butorphanol pharmacokinetics across 13 species using a novel mPBPK allometric meta-analysis (MAMA) framework. It demonstrates that a single tissue partition coefficient (Kp≈4) describes distribution across most species, with the horse as a notable exception. The work is essential reading for veterinary pharmacologists, translational scientists, and anyone interested in interspecies PK scaling.

---

### Executive Summary
Saeed and Jusko present a comprehensive meta-analysis of butorphanol pharmacokinetics across 13 species using a novel minimal physiologically based pharmacokinetic (mPBPK) model combined with allometric scaling, termed MAMA (mPBPK Allometric Meta-Analysis). By digitizing published concentration-time profiles and applying nonlinear mixed-effects modeling in NONMEM, they demonstrate that butorphanol clearance scales allometrically with body weight (exponent 0.700, R²=0.911) and that a single tissue-to-plasma partition coefficient (Kp=4.07) adequately describes distribution across all species except the horse, which required a lower Kp (1.14) and distinct blood flow fraction. The model successfully characterized IV, IM, SC, and IN routes, yielding precise estimates of absorption rates and bioavailabilities. This work provides a robust framework for interspecies PK comparison and offers practical guidance for veterinary dosing and drug development.

---

### Scientific Context & Motivation
Butorphanol, a mixed opioid agonist-antagonist, is widely used in both human and veterinary medicine, yet no systematic interspecies comparison of its pharmacokinetics existed. Traditional allometric scaling provides a useful but limited framework, as it does not account for species differences in tissue volumes, blood flows, or protein binding. The authors address this gap by integrating allometric scaling with a minimal physiologically based pharmacokinetic (mPBPK) model, creating a hybrid approach (MAMA) that retains physiological interpretability while remaining parsimonious enough for meta-analysis of published data. This work challenges the assumption that a single allometric equation can adequately describe PK across diverse species and demonstrates the value of incorporating species-specific physiology.

---

## ⚡ Methodological Snapshot
The authors developed a minimal physiologically based pharmacokinetic (mPBPK) model consisting of blood, three lumped tissue compartments (representing slowly-, moderately-, and rapidly-perfused tissues), and extravascular depot compartments for IM, SC, and IN routes. Species-specific physiological parameters (blood volume, cardiac output) were obtained from literature or allometric equations. The model assumed perfusion-limited distribution with a single tissue-to-plasma partition coefficient (Kp) shared across species, except for the horse which required a separate Kp and blood flow fraction. Clearance was estimated separately for each species. Nonlinear mixed-effects modeling (NONMEM, FOCE-INTER) was used for joint fitting of IV and extravascular data across 13 species. A three-tissue structure was selected over a two-tissue model based on improved fit, successful covariance step, and parameter identifiability.

---

## 🏗️ Structural Model Breakdown
The mPBPK model comprises: (1) a central blood compartment; (2) three lumped tissue compartments (Tissue 1: slowly-perfused, large volume, ft1=0.700, fd1=0.107; Tissue 2: moderately-perfused, ft2=0.235, fd2=0.418; Tissue 3: rapidly-perfused, small volume, ft3=0.065, fd3=0.475); and (3) extravascular depot compartments for IM, SC, and IN routes. Distribution is perfusion-limited, with drug partitioning governed by a single Kp (except horse). Clearance occurs from the blood compartment. Cardiac output (QCO) is allometrically scaled from body weight (QCO = 0.235 × BW^0.75 × 60). Blood volume is species-specific from literature. The model equations describe mass balance for each compartment with first-order absorption from depots and linear elimination from blood.

---

### Detailed Methodological Analysis

#### Modeling Approach
Minimal physiologically based pharmacokinetic (mPBPK) model with blood, three lumped tissue compartments (slowly-, moderately-, and rapidly-perfused), and extravascular depot compartments. Tissue volumes and blood flows were derived from species-specific physiological parameters (blood volume from literature, cardiac output allometrically scaled). Distribution was assumed perfusion-limited. Absorption was modeled with first-order rate constants (ka) and bioavailability (F). The model was implemented in NONMEM.

#### Data Sources
PK data from 13 species (Asian elephant, chicken, cat, cow, dog, donkey, goat, great horned owl, Hispaniolan Amazon parrot, horse, human, neonatal foal, rabbit, red-tailed hawk) were digitized from published figures using Web Plot Digitizer. Dosing routes included IV, IM, SC, and IN. Doses ranged from 0.015 mg/kg (elephant) to 6 mg/kg (kestrel). The Asian elephant dataset was excluded from modeling due to suspected concentration unit errors; donkey data were excluded due to poor model fit.

#### Estimation Methods
Nonlinear mixed-effects modeling using NONMEM 7.6.0 with FOCE-INTER. The mPBPK model was fitted first to IV data only, then jointly to IV and extravascular data. Residual error was modeled as combined additive and proportional. Parameter precision was assessed via %RSE from the covariance step.

#### Model Evaluation
Model evaluation relied on visual inspection of goodness-of-fit plots (observed vs. predicted concentrations), objective function value (OFV) comparisons, precision of parameter estimates (%CV), and physiological plausibility. A three-tissue mPBPK model was selected over a two-tissue model based on significantly lower OFV (ΔOFV=29.1, p<0.0001), successful covariance step, and parameter identifiability. No formal external validation was performed.

#### Covariate Analysis
Body weight was the primary covariate, used in allometric scaling of CL and VSS. Species was treated as a categorical covariate for CL (species-specific estimates) and for horse-specific Kp and fd1. No other covariates (e.g., age, sex, dose) were formally tested due to the meta-analytic nature of the data.

---

### Statistical Rigor Assessment
The analysis is methodologically sound, with careful attention to data quality (digitization validation via NCA, exclusion of problematic datasets). The use of FOCE-INTER in NONMEM is appropriate for this type of data. Model selection was guided by objective function value, parameter precision, and physiological plausibility. The three-tissue model was rigorously justified over the two-tissue alternative. Parameter estimates generally had good precision (%CV <30% for most parameters). However, the analysis has limitations: no formal external validation was performed; the meta-analytic nature means data come from heterogeneous studies with different designs, analytical methods, and sample sizes; and the assumption of linear PK was not tested. The SC absorption parameters are based on only 3 species and should be interpreted cautiously.

---

## 📊 Key Findings
Butorphanol CL scales allometrically with body weight (exponent 0.700, R²=0.911) and VSS scales with exponent 0.824 (R²=0.891), consistent with typical allometric exponents of 0.75 and 1.0, respectively. A universal tissue-to-plasma partition coefficient (Kp) of 4.07 (CV% 4.7) described distribution across 12 of 13 species, with the horse requiring a lower Kp of 1.14 (CV% 14.3) and a distinct fraction of cardiac output to slowly-perfused tissues (fd1,horse=0.0231 vs. 0.107). Absorption was rapid: IM ka=3.48 h⁻¹ (t½,abs=12 min), SC ka=1.96 h⁻¹ (t½,abs=21 min), IN ka=0.868 h⁻¹ (t½,abs=48 min). Bioavailability was high for IM (91.5%) and SC (89.8%), and moderate for IN (52.2%). The mPBPK model with species-specific CL values and shared structural parameters (ft1=0.700, ft2=0.235, fd1=0.107, fd2=0.418) successfully characterized PK across all 13 species and four routes.

---

## 💡 Clinical & Regulatory Implications
The findings support mg/kg-based dosing for butorphanol across most mammalian species, as CL scales roughly proportionally to body weight. The universal Kp of ~4.07 indicates that total tissue concentrations are ~4× plasma levels, which has implications for meat withdrawal times in food animals. Horses require special consideration due to lower Kp (1.14) and altered blood flow distribution, likely reflecting their low body fat. The high bioavailability of IM (91.5%) and SC (89.8%) routes supports their clinical use, while IN administration in humans (F=52.2%) provides rapid absorption suitable for migraine treatment. The model can be used to predict PK in unstudied species by adjusting cardiac output, blood volume, and species-specific CL.

---

### Strengths & Limitations

#### Strengths
- Novel integration of allometric scaling with mPBPK modeling (MAMA framework)
- Comprehensive coverage of 13 species including both mammals and birds
- Rigorous model selection (three-tissue vs. two-tissue) with statistical justification
- Excellent parameter precision for most estimates
- Physiologically interpretable parameters (ft, fd, Kp) that align with known species differences
- Practical utility for dose prediction in unstudied species and veterinary guidance

#### Limitations (Acknowledged by Authors)
- No independent datasets were withheld for external validation
- Protein binding and RBC distribution could not be accounted for
- Digitized data reflect mean concentrations, not individual-level data
- Results should be considered representative and approximate due to interstudy variability
- Pharmacodynamics could not be formally compared due to diverse experimental methods

#### Limitations (Expert Review)
- Absence of rodent data (mouse, rat, monkey) limits the phylogenetic breadth and translational utility
- SC absorption parameters are based on only 3 species (dog, ferret, horse), limiting generalizability
- The assumption of linear PK was not formally tested; dose-ranging data were limited
- No formal covariate analysis beyond body weight and species was possible
- The exclusion of donkey data due to poor fit may have removed informative variability
- The model does not include a liver compartment, precluding modeling of oral administration and first-pass effects

#### Generalizability
The model is likely generalizable to other lipophilic weak bases with perfusion-limited distribution, but the specific parameter values (Kp, fd fractions) are drug-specific. The MAMA framework itself is broadly applicable to any drug with sufficient published PK data across species.

---

### Key Equations

**Allometric scaling equation**

{% raw %}
$$
Y = a \times BW^{b}
$$
{% endraw %}

Allometric scaling equation used to relate PK parameters (CL, VSS) to body weight across species

**Cardiac output allometric equation**

{% raw %}
$$
Q_{CO} = 0.235 \times BW^{0.75} \times 60
$$
{% endraw %}

Equation for calculating cardiac output from body weight, used as a physiological input to the mPBPK model

**Residual error model**

{% raw %}
$$
Y = F \times (1 + \varepsilon_1) + \varepsilon_2
$$
{% endraw %}

Combined additive and proportional residual error model used in NONMEM fitting

**Fractional cardiac output constraint**

{% raw %}
$$
fd_3 = 1 - fd_1 - fd_2
$$
{% endraw %}

Equation for calculating the fraction of cardiac output to tissue 3 (fd3) from the sum constraint

**Fractional tissue volume constraint**

{% raw %}
$$
ft_3 = 1 - ft_1 - ft_2
$$
{% endraw %}

Equation for calculating the fraction of total tissue volume for tissue 3 (ft3) from the sum constraint

**Absorption half-life**

{% raw %}
$$
t_{1/2,\text{abs}} = \frac{\ln(2)}{k_a}
$$
{% endraw %}

Equation for calculating absorption half-life from the absorption rate constant

**Oral bioavailability prediction**

{% raw %}
$$
F^* = 1 - \frac{CL}{Q_h}
$$
{% endraw %}

Equation for estimating oral bioavailability from hepatic clearance and hepatic blood flow

---

### Figures & Tables

- **Figure 1**: mPBPK model diagram showing blood, three lumped tissue compartments, and extravascular depot sites
  - *Significance*: Illustrates the structural model used for all species, highlighting the perfusion-limited distribution and first-order absorption from IM, SC, and IN depots
- **Figure 2**: Allometric relationships of CL and VSS versus body weight using literature-reported values
  - *Significance*: Demonstrates strong allometric scaling (CL: R²=0.911, exponent 0.700; VSS: R²=0.891, exponent 0.824), supporting the use of allometry as a foundation for the mPBPK model
- **Figure 3**: Cross-species comparison of butorphanol PK following IV administration, with mPBPK model fits
  - *Significance*: Shows excellent model fit across 11 species with a single global Kp (except horse), validating the mPBPK structural assumptions
- **Figure 4**: Observed and model-predicted plasma concentrations across 13 species and four routes (IV, IM, SC, IN)
  - *Significance*: Comprehensive visualization of the joint model performance, demonstrating successful characterization of both disposition and absorption phases across diverse species and dosing routes
- **Table 1**: Summary of reported and NCA-derived PK parameters (CL, VSS) for all species with IV data
  - *Significance*: Provides the foundational PK data used for allometric analysis and model building, highlighting discrepancies (e.g., Asian elephant, donkey) that informed exclusion decisions
- **Table 2**: Final mPBPK parameter estimates for IV-only and joint (IV+EV) models
  - *Significance*: Presents all estimated structural parameters (ft, fd, Kp, ka, F) with precision (%CV), demonstrating model reliability and the horse-specific differences
- **Table 3**: Comparison of CL estimates across methods (reported, NCA, mPBPK IV-only, mPBPK joint) for all species
  - *Significance*: Validates the consistency of CL estimates across approaches and provides species-specific values for future dose predictions

---

### Code & Reproducibility Assessment
No code or model files were provided. The authors used NONMEM 7.6.0 and Phoenix WinNonlin 8.6.0. Digitized data are available from the published figures and Supporting Information.

---

### Supplementary Materials
Supporting Information includes Tables S1-S4 (species physiological parameters, study details, bioavailability data, pharmacodynamic summary) and Figures S1-S2 (allometric plots using NCA estimates, additional IV model fits). These materials provide essential context for the model parameterization and results.

---

### Future Directions
The MAMA framework should be validated with prospective data from unstudied species to confirm its predictive accuracy. In vitro metabolic stability studies across species would help explain the residual variability in CL not captured by allometry. Incorporation of protein binding and RBC partitioning data could refine the model. Extension to include a liver compartment would enable modeling of oral administration and first-pass effects. Formal PK/PD modeling with exposure-response analysis across species would greatly enhance translational understanding. Finally, application of this approach to other drugs (especially those with similar physicochemical properties) would test the generalizability of the MAMA methodology.

---

### Expert Commentary
This paper exemplifies the power of combining mechanistic modeling with meta-analysis to extract maximal value from published data. The MAMA approach is a natural evolution of traditional allometric scaling, incorporating physiological realism without the full complexity of a whole-body PBPK model. The authors' decision to estimate species-specific CL rather than force a global allometric relationship is pragmatic—while allometry explains ~91% of CL variability, the remaining species-specific deviations (e.g., cow, rabbit) likely reflect true differences in metabolic enzyme activity or protein binding. The horse-specific findings are particularly insightful: the lower Kp and fd1 align with the known low body fat of racehorses, demonstrating how physiology drives PK. A key teaching point is the importance of evaluating model identifiability—the authors wisely rejected the two-tissue mPBPK model due to failed covariance and non-zero gradients. The absence of rodent data (mouse, rat, monkey) is a notable gap, as these are common preclinical species. Future work should extend this framework to other drugs and incorporate PD endpoints for true translational PK/PD.

---

### Bottom Line
This paper demonstrates that butorphanol disposition is largely conserved across 13 species, with clearance scaling allometrically (exponent ~0.70) and a universal tissue-to-plasma partition coefficient (Kp ≈ 4.07) applicable to all species except the horse. The mPBPK allometric meta-analysis (MAMA) framework provides a robust, physiologically grounded approach for interspecies PK comparison, enabling dose prediction in unstudied species and informing veterinary dosing, withdrawal times, and therapeutic use.

---

---

## 📊 Figures

![Figure 1]({{ site.baseurl }}/assets/digests/2026-07-01-butorphanol-pharmacokinetics-across-species-meta-analysis-integrating/figures/fig_01.jpg)

![mPBPK model diagram. Symbols are defined in the text and in Table2.]({{ site.baseurl }}/assets/digests/2026-07-01-butorphanol-pharmacokinetics-across-species-meta-analysis-integrating/figures/fig_02.jpg)

![Allometric relationships ofCLandVSSversus body weights using literature reported values.]({{ site.baseurl }}/assets/digests/2026-07-01-butorphanol-pharmacokinetics-across-species-meta-analysis-integrating/figures/fig_03.jpg)

![Cross-species comparison of butorphanol pharmacokinetics following IV administration. The doses given are listed in TablesS1andS2.]({{ site.baseurl }}/assets/digests/2026-07-01-butorphanol-pharmacokinetics-across-species-meta-analysis-integrating/figures/fig_04.jpg)

![Observed and mPBPK model-predicted plasma butorphanol concentrations across 13 species and four routes of administration. Plots are faceted by animal and dose. C]({{ site.baseurl }}/assets/digests/2026-07-01-butorphanol-pharmacokinetics-across-species-meta-analysis-integrating/figures/fig_05.jpg)