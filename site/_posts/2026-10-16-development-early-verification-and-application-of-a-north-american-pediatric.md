---
layout: post
title: "Development, Early Verification and Application of a North American Pediatric PBPK Model, Comparison With the North European Pediatric Population."
date: 2026-10-16
authors: "Trevor N. Johnson et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70344"
paper_type: popk
tags: [popk, pbpk, pediatrics, regulatory]
excerpt_text: "This paper describes the development and verification of a US pediatric PBPK model with four ethnic sub-populations (White, African American, Hispanic/Latino, Asian) built in Simcyp. Pharmacometricians and clinical pharmacologists involved in pediatric drug development, regulatory submissions, or ethnic bridging studies should read this to understand how to match virtual populations to clinical trial demographics and assess study power for detecting ethnic PK differences."
pdf_path: "/assets/digests/2026-10-16-development-early-verification-and-application-of-a-north-american-pediatric/PMx_Development_Early_Verification_and_Appli_20261016.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper describes the development and verification of a US pediatric PBPK model with four ethnic sub-populations (White, African American, Hispanic/Latino, Asian) built in Simcyp. Pharmacometricians and clinical pharmacologists involved in pediatric drug development, regulatory submissions, or ethnic bridging studies should read this to understand how to match virtual populations to clinical trial demographics and assess study power for detecting ethnic PK differences.

---

### Executive Summary
The authors developed a North American pediatric PBPK model incorporating four ethnic sub-populations based on NHANES data and literature, extending an existing adult US model. Verification against 10 drugs (14 studies) showed good predictive performance with 97% of predicted PK parameters within 2-fold of observed values. Comparison with the North European pediatric population showed minimal differences for most drugs, partly due to low subject numbers and under-representation of ethnicities in clinical studies. Power calculations revealed that 12-25 subjects per group would be needed to detect CYP3A5-related PK differences between African American and White children for tacrolimus, sirolimus, and midazolam. Application examples demonstrated the model's utility in exploring OCT1-mediated morphine clearance differences and tacrolimus dosing in pediatric heart transplant patients.

---

### Scientific Context & Motivation
The paper addresses the growing need for ethnicity-matched PBPK models in pediatric drug development, given FDA expectations for diverse clinical trial representation. While adult US PBPK models with ethnic sub-groups exist, and pediatric models exist for North European, Japanese, and Chinese populations, no comprehensive US pediatric model with ethnic sub-populations had been developed. The knowledge gap includes how ethnic differences in enzyme/transporter phenotypes and expression translate to pediatric populations, and whether existing North European pediatric models adequately predict PK in diverse US pediatric populations. The study also highlights the challenge of under-representation of minority ethnic groups in pediatric clinical trials and proposes PBPK modeling as a bridging tool.

---

## ⚡ Methodological Snapshot
The study used a PBPK modeling approach in Simcyp V24 to develop four US pediatric sub-populations (White, African American, Hispanic/Latino, Asian) based on NHANES physiological data and literature-derived enzyme/transporter phenotype and expression data from the adult US model. Age-related equations for height, weight, hematocrit, and AAG were optimized using Microsoft Excel Solver. The model was verified against 10 drugs (14 studies) from US pediatric clinical trials, with trial designs matched to observed demographics. Three application examples demonstrated clinical utility: power calculations for CYP3A5 substrates, morphine OCT1 sensitivity analysis, and tacrolimus dosing simulations.

---

## 🏗️ Structural Model Breakdown
The PBPK model uses a full physiologically-based structure with multiple compartments representing major organs and tissues (liver, gut, kidney, lung, heart, brain, muscle, adipose, etc.) with organ volumes, blood flows, and tissue composition. Key system parameters include: (1) height and weight equations specific to each ethnic sub-population, (2) hematocrit equations (new for <1 year), (3) alpha-1 acid glycoprotein (new for Asian population), (4) human serum albumin (same as North European), (5) CYP/UGT enzyme and transporter phenotype frequencies and hepatic expression levels from adult US model, (6) GFR calculation with pediatric BSA-based formula (<15 years) transitioning to creatinine-based adult calculation (≥15 years) with 0.8 correction factor for African American males. Enzyme ontogeny functions follow North European pediatric model except CYP2C19 (Upreti ontogeny). Intestinal CYP3A4 and CYP3A5 expression kept same as North European population (65.4 and 17.8 nmol/average adult small intestine). CYP2B6 hepatic expression for American Asian pediatric population revised to 24 pmol/mg microsomal protein.

---

### Detailed Methodological Analysis

#### Modeling Approach
Full physiologically-based pharmacokinetic (PBPK) modeling using Simcyp V24 population-based simulator. Four US pediatric sub-populations (White, African American, Hispanic/Latino, Asian) developed based on NHANES data and literature. Existing North European pediatric (Sim-Pediatric) equations used as starting point, with new age-related equations for height, weight, hematocrit (<1 year), and AAG (Asian population) where data supported improvement. Adult US population enzyme/transporter phenotype and expression data applied to pediatric populations. CYP2C19 ontogeny changed to Upreti ontogeny based on pantoprazole experience. CYP2B6 hepatic expression for American Asian pediatric population revised to 24 pmol/mg based on Chinese pediatric qualification.

#### Data Sources
NHANES database for physiological data (height, weight, hematocrit, HSA, AAG, creatinine), WHO growth charts for 0-1 year age range (assuming no ethnic difference), literature (PubMed, EBSCO) for enzyme/transporter ontogeny and phenotype data. Clinical PK studies from US pediatric populations for 10 drugs (14 studies): atomoxetine, efavirenz, midazolam, montelukast, morphine, pantoprazole, ruxolitinib, sildenafil, sirolimus, and tacrolimus. Where ethnicity was not reported, 2021 US census average proportions (58% White, 20% Hispanic, 14% African American, 8% Asian) were assumed.

#### Estimation Methods
Not applicable in the traditional population PK sense - PBPK model parameters derived from literature and physiological data. Optimization of age-related equations using Microsoft Excel Solver function (reducing sum of squares and visual predictive checks). No FOCE, SAEM, or Bayesian MCMC methods used. Power calculations performed within Simcyp using simulated data from enriched trial designs (100 subjects per group).

#### Model Evaluation
Visual predictive checks comparing predicted vs observed concentration-time profiles (5th-95th percentiles). Predicted:observed ratios for AUC, Cmax, CL. Average fold error (AFE) for precision and absolute average fold error (AAFE) for bias. Comparison of US vs North European pediatric model performance using same trial designs. Adult verification for modified compound files (tacrolimus, sirolimus) presented in supplementary figures.

#### Covariate Analysis
Ethnicity as the primary covariate of interest, implemented through sub-population-specific enzyme/transporter phenotypes and hepatic expression levels (e.g., CYP3A5 EM frequency: 14.3% White, 72.5% African American, 43% Hispanic, 48% Asian). Age handled through ontogeny functions (same as North European except CYP2C19 using Upreti ontogeny). Body size (height, weight) through population-specific equations. GFR calculated from creatinine for subjects ≥15 years, and BSA-based formula for <15 years with 0.8 correction factor for African American males.

---

### Statistical Rigor Assessment
The study uses descriptive statistics (fold-error ranges, AFE, AAFE) rather than formal statistical inference, which is consistent with PBPK model qualification standards. Power calculations performed within Simcyp using simulated data from enriched trial designs (100 subjects per group) to determine minimum subject numbers for 80% power. The verification approach lacks formal uncertainty quantification (e.g., confidence intervals around predictions). Sample sizes in verification studies were generally small, and some ethnic groups were under-represented (e.g., sirolimus study had 23 White and only 4 African American subjects). Sensitivity analysis for OCT1 expression was performed for the morphine example. The study appropriately acknowledges the limitations of the verification dataset and the need for broader qualification.

---

## 📊 Key Findings
The US pediatric PBPK model with four ethnic sub-populations showed good predictive performance (97% of PK parameters within 2-fold of observed values; 50% within 0.8-1.25-fold). Minimal overall difference between US and North European pediatric models for most drugs (AFE 1.01 vs 1.05; AAFE 1.24 for both), but notable differences for CYP3A5 substrates (midazolam, sirolimus, tacrolimus) due to higher CYP3A5 extensive metabolizer frequency in African Americans (72.5%) vs Whites (14.3%). Power calculations showed 25, 18, and 12 subjects per group needed for midazolam, sirolimus, and tacrolimus respectively to detect differences at 80% power. Morphine clearance difference (1.23-fold) between African American and White children could not be fully recovered without doubling OCT1 expression (sensitivity analysis suggested 2-fold increase needed). Tacrolimus dosing simulations confirmed clinical findings of 0.07 vs 0.045 mg/kg for African American vs White pediatric heart transplant patients to achieve therapeutic trough concentrations (9-12 ng/mL).

---

## 💡 Clinical & Regulatory Implications
The model supports ethnicity-matched pediatric drug development and regulatory submissions. Key implications: (1) For CYP3A5 substrates (tacrolimus, sirolimus, midazolam), African American children may need higher doses than White children due to higher CYP3A5 EM frequency; (2) Clinical studies may be under-powered to detect ethnic PK differences - recruitment strategies should consider this, with 12-25 subjects per group needed for CYP3A5 substrates; (3) Tacrolimus dosing in pediatric heart transplant patients should account for CYP3A5 phenotype: 0.07 mg/kg for African American vs 0.045 mg/kg for White patients to achieve therapeutic trough concentrations (9-12 ng/mL); (4) The model can support bridging between US and North European populations for regulatory purposes, particularly where enzyme phenotype differences are minimal; (5) For drugs with known ethnic PK differences, PBPK models can supplement clinical trial data where recruitment of specific sub-groups is difficult.

---

### Strengths & Limitations

#### Strengths
- Comprehensive development of four ethnic sub-populations based on NHANES data and extensive literature review
- Verification against 10 drugs (14 studies) covering multiple elimination pathways (CYP3A4/5, CYP2C19, CYP2B6, CYP2C8, UGT, renal)
- Practical application examples demonstrating clinical utility: power calculations for study design, morphine OCT1 investigation, tacrolimus dosing in heart transplant
- Direct head-to-head comparison with North European pediatric model using same trial designs
- Use of multiple population trial design feature to match ethnic mix in simulations
- Sensitivity analysis for OCT1 expression to explore 'what if' scenarios not captured in clinical trials

#### Limitations (Acknowledged by Authors)
- Limited data available to verify system parameters within each ethnic group
- WHO growth charts used for <1 year assuming no ethnic difference in height/weight
- No measured GFR values using pure markers (e.g., inulin) across age bands in US sub-populations
- Ontogeny of enzymes/transporters assumed same as North European population due to insufficient data
- Scarce neonatal data; conclusions should be weighed carefully for pre-term neonates and infants <6 months
- Limited drug coverage - broader verification needed for renally cleared drugs and transporter-mediated drugs

#### Limitations (Expert Review)
- Arbitrary 0.8 correction factor for African American male GFR without strong mechanistic justification
- Under-representation of Hispanic and Asian subjects in verification studies limits ability to validate sub-population-specific predictions
- The morphine OCT1 doubling was not supported by literature evidence, highlighting a knowledge gap rather than a validated finding
- Power calculations based on simulated data may not fully reflect clinical variability and dropout rates
- Only 10 drugs tested; formal qualification across all major elimination routes and full pediatric age range still needed
- Intestinal CYP3A4/3A5 expression kept same as North European population, potentially missing ethnic differences in gut metabolism

#### Generalizability
The model framework is specific to US pediatric populations but the methodology could be adapted to other populations.[^fc-5] Findings on CYP3A5-related PK differences are likely generalizable given well-established genotype-phenotype relationships, but the magnitude of differences may vary with drug properties (e.g., fraction metabolized by CYP3A5).[^fc-6] The conclusion that many pediatric clinical studies are under-powered to detect ethnic PK differences is broadly applicable and should inform future trial design globally.[^fc-7]

---

---

### Figures & Tables

- **Figure 1**: Summary workflow of US pediatric population development, verification and application, showing existing models/data (light blue) and new components (dark blue)
  - *Significance*: Provides a clear overview of the methodology and how the adult US model and North European pediatric model were integrated to create the new US pediatric populations
- **Figure 2**: Predicted plasma concentration-time profiles in the US pediatric population for oral atomoxetine (7-14 years), oral montelukast (6-8 years), IV pantoprazole, and other drugs with observed data overlaid
  - *Significance*: Demonstrates the predictive performance of the model across different drugs, routes, and age ranges; most observed values fall within the 5th-95th percentile prediction intervals
- **Figure 3**: Comparison of concentration-time profiles between North American sub-groups for CYP3A5 substrates (IV midazolam, oral sirolimus, oral tacrolimus) with pie charts showing metabolic routes and power calculation graphs
  - *Significance*: Key application example showing ethnic differences in PK for CYP3A5 substrates and the minimum subject numbers needed to detect differences at 80% power (25, 18, and 12 for midazolam, sirolimus, and tacrolimus respectively)
- **Figure 4**: Morphine IV plasma concentration-time profiles comparing White and African American pediatric subjects (age 6-15.9 years), including a modified African American population with doubled OCT1 expression
  - *Significance*: Demonstrates the model's ability to explore 'what if' scenarios; shows that doubling OCT1 expression was needed to recover the clinically observed 1.23-fold clearance difference
- **Figure 5**: Simulated tacrolimus blood concentration-time profiles in White American (0.07 and 0.045 mg/kg doses) and African American (0.07 mg/kg) pediatric heart transplant patients with therapeutic trough range (9-12 ng/mL) indicated
  - *Significance*: Confirms clinical dosing recommendations: African American patients need 0.07 mg/kg while White patients need 0.045 mg/kg to achieve therapeutic trough concentrations, reflecting CYP3A5 phenotype differences
- **Table 1**: Observed vs predicted PK parameters (AUC, Cmax, CL) for 10 drugs (14 studies) in the US pediatric population, with predicted:observed ratios
  - *Significance*: Primary verification results showing 50% of P:O values within 0.8-1.25-fold, 74% within 0.67-1.5-fold, and 97% within 0.5-2-fold; the only value outside 2-fold was ruxolitinib Cmax (overpredicted, possibly due to concurrent disease)
- **Table 2**: Comparison of predicted:observed AUC and CL ratios between US and North European pediatric populations for all drugs/studies
  - *Significance*: Shows minimal overall difference between the two models (AFE 1.013 vs 1.049; AAFE 1.236 vs 1.241), supporting regulatory bridging between US and North European populations for most drugs

---

### Supplementary Materials
Supplementary materials include Table S1 (study designs and demographics for all 14 verification studies), Table S2 (drug input parameters and sources for sirolimus and tacrolimus modifications), Table S3 (main metabolic routes for all drugs), Table S4 (age-related equations for physiological parameters in the four US sub-populations), Table S5 (enzyme/transporter phenotype frequencies and hepatic expression), Table S6 (North European pediatric model predictions), Figures S1A/B (height and weight equations performance), Figures S2A/B (hematocrit, HSA, AAG equations performance), Figure S3 (predicted vs observed creatinine values), Figure S4 (GFR interface at 15 years between pediatric and adult calculations), and Figures S5A-D (adult verification data for tacrolimus and sirolimus).

---

### Future Directions
Broader verification across more drugs including renally cleared drugs, transporter substrates, and neonates/infants <6 months. Research on ethnic differences in enzyme and transporter ontogeny, particularly whether ontogeny functions differ between ethnic groups. Investigation of OCT1 expression differences between African American and White populations to explain morphine clearance differences. Formal qualification of the population covering major elimination routes across the whole pediatric age range. Application to personalized medicine approaches and integration with clinical trial simulation. Further research on the GFR correction factor for African American males and validation with measured GFR data. Exploration of genotype-phenotype relationships in youngest infants where maturation may obscure genetic influences.

---

### Expert Commentary
This is a well-executed study that addresses an important gap in pediatric PBPK modeling. The development of ethnicity-matched sub-populations is timely given FDA's emphasis on diverse clinical trial representation and the move toward personalized medicine. The key strength is the practical application examples demonstrating how the model can inform study design and dosing decisions. However, the limited verification data for specific ethnic sub-groups (especially Hispanic and Asian) is a concern, and the arbitrary GFR correction factor for African American males needs further validation. The finding that many clinical studies are under-powered to detect ethnic PK differences is important and should prompt reconsideration of pediatric study designs. The morphine OCT1 example highlights the limitations of current knowledge about ethnic differences in transporter expression - this is an area where more basic research is needed. The minimal difference between US and North European models for most drugs is reassuring for regulatory bridging but should not be over-interpreted given the under-representation of minority ethnicities in verification studies. This work represents a step toward the community effort needed to formally qualify ethnicity-matched pediatric PBPK models.

---

### Bottom Line
This paper provides a valuable framework for developing ethnicity-matched pediatric PBPK models and demonstrates their utility in study design and power calculations. For pharmacometricians, the key takeaway is that matching virtual populations to clinical trial demographics matters for drugs with known ethnic PK differences (especially CYP3A5 substrates), and PBPK models can help identify under-powered studies and guide recruitment strategies. The model supports regulatory submissions by enabling bridging between US and North European populations, but broader verification across more drugs and age ranges is needed before formal qualification.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The PBPK model uses a full physiologically-based structure with multiple compartments representing major organs and tissues.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **CONTRADICTED** — original: “The model was verified against 10 drugs (14 studies) covering multiple elimination pathways (CYP3A4/5, CYP2C19, CYP2B6, CYP2C8, UGT, renal).” → correction: “Model verification is needed on a broader range of drugs both renally cleared, metabolized by other enzymes or where transporters are involved”
[^fc-3]: **UNSUPPORTED** — original: “Power calculations based on simulated data may not fully reflect clinical variability and dropout rates.” → correction: “No direct evidence in source.”
[^fc-4]: **UNSUPPORTED** — original: “Intestinal CYP3A4/3A5 expression kept same as North European population, potentially missing ethnic differences in gut metabolism.” → correction: “The expression of intestinal enzymes CYP3A4 and CYP3A5 in all four US pediatric populations was left the same as for the North European population at 65.4 and 17.8 nmol/average adult small intestine; the same ontogeny function as previously described [12] was also applied.”
[^fc-5]: **UNSUPPORTED** — original: “The model framework is specific to US pediatric populations but the methodology could be adapted to other populations.” → correction: “No direct evidence in source.”
[^fc-6]: **UNSUPPORTED** — original: “Findings on CYP3A5-related PK differences are likely generalizable given well-established genotype-phenotype relationships, but the magnitude of differences may vary with drug properties (e.g., fraction metabolized by CYP3A5).” → correction: “This largely reflects the CYP3A5 fm for these substrates in each population related to enzyme expression and phenotype.”
[^fc-7]: **UNSUPPORTED** — original: “The conclusion that many pediatric clinical studies are under-powered to detect ethnic PK differences is broadly applicable and should inform future trial design globally.” → correction: “In general (with some exceptions) the US pediatric studies identified for model qualification in this study do not always reflect the ethnic mix seen in the general US population and some are under-powered to detect any differences.”

---

## 📊 Figures

![Summary of US pediatric population development, verification and application. The light blue shading represents existing models and data and the dark blue, new p]({{ site.baseurl }}/assets/digests/2026-10-16-development-early-verification-and-application-of-a-north-american-pediatric/figures/fig_01.jpg)

![Predicted plasma concentration-time profiles in the US pediatric population for oral atomoxetine, Age 7–14 years (A), oral montelukast, Age 6–8 years (B), IV pan]({{ site.baseurl }}/assets/digests/2026-10-16-development-early-verification-and-application-of-a-north-american-pediatric/figures/fig_02.jpg)

![Comparison of the concentration-time profiles between the different North American sub-groups for drugs partially metabolized by CYP3A5, iv Midazolam in plasma,]({{ site.baseurl }}/assets/digests/2026-10-16-development-early-verification-and-application-of-a-north-american-pediatric/figures/fig_03.jpg)

![Application examples comparison of morphine iv plasma concentration time profile between White and African American pediatric subjects (Age 6–15.9 years) using t]({{ site.baseurl }}/assets/digests/2026-10-16-development-early-verification-and-application-of-a-north-american-pediatric/figures/fig_04.jpg)

![Simulated tacrolimus blood concentration time profiles in the white American, dose = 0.07 mg/kg (A) = 0.045 mg/kg (B) and African American, dose = 0.07 mg/kg (C)]({{ site.baseurl }}/assets/digests/2026-10-16-development-early-verification-and-application-of-a-north-american-pediatric/figures/fig_05.jpg)