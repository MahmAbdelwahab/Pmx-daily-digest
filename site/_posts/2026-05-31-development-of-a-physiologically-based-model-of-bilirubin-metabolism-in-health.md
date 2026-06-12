---
layout: post
title: "Development of a Physiologically Based Model of Bilirubin Metabolism in Health and Disease and Its Comparison With Real-World Data"
date: 2026-05-31
authors: "Schutte AZ, Kuepfer L"
journal: "CPT: Pharmacometrics & Systems Pharmacology (in press)"
doi: "N/A"
paper_type: popk
tags: [popk, pbpk]
excerpt_text: "This paper presents a whole‑body physiologically based model of bilirubin metabolism, covering health and four genetic hyperbilirubinemia syndromes, validated against real‑world electronic health record data from >220,000 patients. Pharmacometricians and clinical pharmacologists interested in endogenous compound modeling, drug‑induced hyperbilirubinemia, or PBPK for special populations should read this work. It demonstrates how a single‑parameter scaling per disorder can reproduce population bilirubin levels and simulates exaggerated atazanavir effects in Gilbert syndrome."
pdf_path: "/assets/digests/2026-05-31-development-of-a-physiologically-based-model-of-bilirubin-metabolism-in-health/PMx_Development_of_a_Physiologically_Based_M_20260531.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents a whole‑body physiologically based model of bilirubin metabolism, covering health and four genetic hyperbilirubinemia syndromes, validated against real‑world electronic health record data from >220,000 patients. Pharmacometricians and clinical pharmacologists interested in endogenous compound modeling, drug‑induced hyperbilirubinemia, or PBPK for special populations should read this work. It demonstrates how a single‑parameter scaling per disorder can reproduce population bilirubin levels and simulates exaggerated atazanavir effects in Gilbert syndrome.

---

### Executive Summary
This paper presents a whole‑body physiologically based pharmacokinetic (PBPK) model of bilirubin metabolism, implemented in the open‑source Open Systems Pharmacology Suite (PK‑Sim/MoBi). The model incorporates hepatic uptake via OATP1B1 (with competitive inhibition between unconjugated and conjugated bilirubin), conjugation via UGT1A1, biliary excretion via MRP2, sinusoidal efflux via MRP3, gut microbial conversion, enterohepatic circulation, and renal excretion. Calibrated with labeled bilirubin time‑course data from healthy individuals and patients with Rotor syndrome, the model predicts steady‑state bilirubin levels that align with literature values. Population simulations ($n=1000$) were compared to real‑world clinical data from the Explorys database ($n>220,000$). For each genetic disorder, only the $V_{max}$ of the affected protein was scaled: Gilbert syndrome required UGT1A1 $V_{max}$ reduced to $0.75\%$ of healthy; Crigler‑Najjar to $0.09\%$; Dubin‑Johnson MRP2 to $1.5\%$. The model also simulated 30‑day atazanavir administration, predicting greater unconjugated bilirubin increases in Gilbert syndrome ($C_{max} +67\%$) than in healthy individuals ($C_{max} +34\%$). The work provides a comprehensive, mechanistically grounded framework for studying bilirubin homeostasis and drug‑induced hyperbilirubinemia in special populations.

---

### Scientific Context & Motivation
Bilirubin metabolism involves heme degradation, albumin‑bound transport, hepatic OATP1B1 uptake, UGT1A1 conjugation, MRP2 biliary excretion, and renal/gut elimination. Genetic disorders (Gilbert, Crigler‑Najjar, Dubin‑Johnson, Rotor) disrupt specific steps, causing hyperbilirubinemia. Existing computational models are either steady‑state compartmental models (Levitt & Levitt) or focus on drug effects (Dong et al.). This study fills a gap by providing a comprehensive whole‑body dynamic PBPK model that integrates multiple pathways, includes real‑world data validation, and can simulate both baseline states and drug perturbations. It challenges the common clinical estimate of UGT1A1 activity in Gilbert syndrome (30–50% of normal) by requiring a much more extreme reduction (0.75%) to match population medians, suggesting either model structure sensitivity or compensatory mechanisms.

---

## ⚡ Methodological Snapshot
The authors developed a whole‑body PBPK model of bilirubin metabolism using the Open Systems Pharmacology Suite. Key pathways (hepatic OATP1B1 uptake, UGT1A1 conjugation, MRP2 biliary excretion, MRP3 efflux, gut conversion to urobilinogen, renal excretion) are represented with Michaelis–Menten kinetics. The model was calibrated against labeled bilirubin time‑course data (three literature studies) and steady‑state bilirubin levels in healthy individuals and Rotor syndrome. For each genetic disorder, only the $V_{max}$ of the affected enzyme/transporter was reduced to match literature means. Population simulations ($n=1000$) incorporated log‑normally distributed $V_{max}$ values (GSD=1.6). Results were compared to real‑world data from the Explorys database (224,827 healthy individuals, thousands of patients with disorders) and demonstrated good agreement of medians. Dynamic simulation of 30‑day atazanavir (400 mg QD) showed exaggerated unconjugated bilirubin increase in Gilbert syndrome.

---

## 🏗️ Structural Model Breakdown
The model is a whole‑body PBPK framework with organs (liver, gut, kidneys, etc.) each having plasma, interstitial, and intracellular compartments. The liver is the central organ: sinusoidal blood supplies hepatocytes with UB and CB. OATP1B1 on the basolateral membrane mediates active uptake of both bilirubin species, with competitive inhibition ($K_m$ for uptake assumed equal for UB and CB; $K_i$ for competition set equal to $K_m$). An additional OATP1B1‑independent first‑order uptake (representing passive diffusion and possible minor transporters) is included for UB. Inside the hepatocyte, UB is conjugated by UGT1A1 to CB (Michaelis‑Menten). CB is then excreted into the bile by MRP2 (active) or effluxed back to blood by MRP3 (active). Biliary CB reaches the gut, where it is reduced to UB and then to urobilinogen by microbial enzymes. Urobilinogen can be reabsorbed (enterohepatic circulation) or excreted in feces. Renal elimination of CB and urobilinogen includes glomerular filtration and tubular secretion (Michaelis‑Menten). UB is highly protein‑bound ($f_u$ very low). A constant synthesis flux of UB (260 mg/day) is added to venous plasma. All passive permeability and tissue partition coefficients are calculated from the compound's physicochemical properties ($\log P$, $pK_a$, $f_u$) by PK‑Sim. Key parameters: OATP1B1 $V_{max}$ (UB and CB), OATP1B1 $K_m$, UGT1A1 $V_{max}$ and $K_m$, MRP2 $V_{max}$ and $K_m$, MRP3 $V_{max}$ and $K_m$, gut conversion rates ($k_1$, $k_2$), renal secretion $V_{max}$. The model reaches steady state after long simulation (no specific time given, but dynamic simulations run for days).

---

### Detailed Methodological Analysis

#### Modeling Approach
Whole‑body PBPK model built in PK‑Sim / MoBi (OSP Suite v11.1). Organs are represented with plasma, interstitial, and intracellular compartments. Passive transport is described by permeability and partition coefficients calculated from physicochemical properties. Active transport and enzymatic reactions use Michaelis–Menten kinetics. The model includes: OATP1B1‑mediated hepatic uptake of UB and CB (with competitive inhibition); an OATP1B1‑independent first‑order hepatic uptake pathway for UB; UGT1A1 conjugation of UB to CB; MRP2 biliary excretion; MRP3 sinusoidal efflux; gut microbial conversion of CB to UB and then to urobilinogen; fecal elimination; renal tubular secretion of CB (Michaelis–Menten) and urobilinogen; enterohepatic circulation of urobilinogen; albumin binding (extremely low $f_u$ for UB). Steady state is achieved by a constant UB synthesis flux of 260 mg/day into venous plasma.

#### Data Sources
The model was calibrated using literature data: (i) time‑resolved plasma disappearance of intravenously administered labeled bilirubin from three studies (Berk et al., Bloomer et al., Cobelli et al.) in healthy adults; (ii) steady‑state bilirubin levels in healthy individuals and Rotor syndrome from published reports; (iii) steady‑state literature means for Gilbert, Crigler‑Najjar, and Dubin‑Johnson syndromes (Table S5). External validation used the Explorys database (September 2024 retrieval), filtering for age 18–65 and excluding relevant ICD‑10 codes. Healthy cohort $n=224,827$; Gilbert $n=346$; Crigler‑Najjar $n=1$; Dubin‑Johnson/Rotor $n=7,152$. The bottom and top 2.5% of data were trimmed to handle outliers.

#### Estimation Methods
Parameters (e.g., $V_{max}$, $K_m$ for OATP1B1, UGT1A1, MRP2, MRP3; gut microbial rate constants; renal secretion parameters) were manually calibrated by fitting the model simultaneously to the labeled bilirubin decay curves and steady‑state literature values. No formal maximum likelihood or Bayesian estimation was used; the authors describe a 'top‑down' approach guided by visual inspection and prior knowledge. Sensitivity analysis (Table S4) was performed but not a formal identifiability analysis.

#### Model Evaluation
Internal evaluation: the model was compared visually to time‑course data from labeled bilirubin studies and to steady‑state literature means for healthy and Rotor syndrome. External evaluation: population simulations ($n=1000$) for healthy, Rotor, Gilbert, Crigler‑Najjar, and Dubin‑Johnson were compared to Explorys real‑world data using density plots and median/literature means. The model also reproduced the CB vs. UB correlation patterns from Explorys (Figure 5). No formal predictive checks (e.g., VPC) or bootstrapping were conducted.

#### Covariate Analysis
No formal covariate analysis was performed in the traditional pharmacometric sense (e.g., stepwise covariate modeling). Instead, the authors used a top‑down approach: for each disorder, only the $V_{max}$ of the primary affected enzyme/transporter was scaled to match literature means for the most affected bilirubin species. A log‑normal distribution with geometric standard deviation of 1.6 was applied to all $V_{max}$ values to generate population variability. This assumes that interindividual variability in other parameters (e.g., OATP1B1 $V_{max}$, MRP2 $V_{max}$) is captured by the same GSD, which may not be realistic but simplifies the model.

---

### Statistical Rigor Assessment
The study uses a manual calibration approach without formal optimization (e.g., MLE, Bayesian MCMC). Population variability is introduced by assuming a log‑normal distribution for $V_{max}$ (GSD=1.6 from Beal's general characterization of genetic expression variability), but this GSD is applied uniformly to all $V_{max}$ values without disorder‑specific refinement. No formal goodness‑of‑fit, VPC, or bootstrap is performed; model evaluation relies on visual comparison to literature means/envelopes and Explorys medians. The Explorys data is large but heterogeneous, and the bottom/top 2.5% trimming is a simple outlier handling. For Crigler‑Najjar, only one patient is available, limiting validation. The sensitivity analysis (Table S4) is useful but only for healthy and Rotor; disorder‑specific sensitivities are derived from the same table but not formally tested. The absence of formal identifiability analysis is acknowledged. Overall, statistical rigor is moderate; the model is best seen as a plausible mechanistic framework rather than a rigorously inferred quantitative system.

---

## 📊 Key Findings
1. The PBPK model successfully describes healthy bilirubin kinetics (labelled bilirubin decay, steady‑state levels, urinary/fecal excretion) and the Rotor syndrome pattern (limited UB increase, marked CB elevation). 2. Population simulations ($n=1000$) for healthy individuals and Rotor syndrome align with literature means; real‑world Explorys data show wider variability but similar medians. 3. Genetic disorders require extreme $V_{max}$ reductions: Gilbert syndrome → UGT1A1 $V_{max} = 0.75\%$ of healthy; Crigler‑Najjar → $0.09\%$; Dubin‑Johnson → MRP2 $V_{max} = 1.5\%$. These values are much lower than typical clinical estimates (30–50% for Gilbert), reflecting model structure and calibration against population medians. 4. CB vs. UB correlation patterns differ across disorders: positive in healthy and Rotor/Dubin‑Johnson, minimal in Gilbert (CB stays low despite high UB). 5. Atazanavir (400 mg QD, 30 days) increases UB $C_{max}$ by 34% in healthy but 67% in Gilbert; $AUC$ increases 15% vs. 52%. This suggests significantly higher hyperbilirubinemia risk in Gilbert syndrome patients.

---

## 💡 Clinical & Regulatory Implications
The model enables a mechanistic understanding of genetic hyperbilirubinemia and can help predict which patients are at greater risk of drug‑induced bilirubin elevations (e.g., atazanavir). The finding that Gilbert syndrome patients showed a 67% increase in unconjugated bilirubin $C_{max}$ vs. 34% in healthy individuals suggests that reduced UGT1A1 activity is a significant risk factor. This supports genotype‑guided dosing or monitoring for drugs that inhibit UGT1A1 or OATP1B1. For rare disorders like Crigler‑Najjar, the model may assist in designing therapeutic interventions by predicting the residual enzyme activity needed to avoid toxic bilirubin levels.

---

### Strengths & Limitations

#### Strengths
- First whole‑body PBPK model of bilirubin metabolism that includes both passive and active hepatic uptake, competitive inhibition between UB and CB, and a comprehensive set of pathways (conjugation, biliary excretion, sinusoidal efflux, gut conversion, enterohepatic circulation).
- Calibrated against time‑resolved labeled bilirubin studies (three independent datasets), providing a dynamic validation that most previous models lack.
- External validation using a very large real‑world database (Explorys) with >220,000 healthy individuals and thousands of patients with disorders, adding clinical relevance.
- Open‑source implementation in PK‑Sim/MoBi, allowing reproducibility and extension by the community.
- Demonstrates a simple, practical top‑down scaling approach for modeling genetic disorders by altering only the $V_{max}$ of the affected enzyme/transporter.
- Includes a dynamic drug interaction case study (atazanavir) that illustrates the model's utility for predicting drug‑induced hyperbilirubinemia in vulnerable populations.

#### Limitations (Acknowledged by Authors)
- Fecal urobilinogen excretion rate is overestimated (255 mg/day vs. literature means up to 173 mg/day). The authors attribute this to variability in diet and bowel habits.
- Explorys data heterogeneity: differences in laboratory methods, protocols, and recording standards across institutions may introduce inconsistencies.
- Dubin‑Johnson and Rotor syndromes share the same ICD‑10 code, so the cohort likely contains both, though Rotor is very rare (0.0001% prevalence).
- No formal identifiability analysis was performed due to computational cost.
- The urobilinogen model is simplified: stercobilin and urobilin are lumped into a single 'urobilinogen' species with adjusted physicochemical properties.
- The population simulation does not capture the full variability of real‑world data (e.g., extreme outliers in Explorys).

#### Limitations (Expert Review)
- The $V_{max}$ reductions for Gilbert ($0.75\%$ of healthy) and Crigler‑Najjar ($0.09\%$) are orders of magnitude lower than clinical estimates (30–50% and ~10%, respectively). This suggests that the model's structure (e.g., assuming no compensatory upregulation of alternative pathways, or the specific $K_m$ values used) may force extreme parameter values to match data. The model may not uniquely identify the true enzyme activity reduction.
- Only a single parameter ($V_{max}$) is altered per disorder; other possible changes (e.g., transporter expression, conjugation efficiency, alternative binding) are not explored. This may oversimplify the pathophysiology.
- The population variability is driven solely by a single GSD on $V_{max}$; no variation is applied to other model parameters ($K_m$, partition coefficients, etc.). This may underestimate true variability.
- The atazanavir simulation uses a single individual (not a population), so no quantification of interindividual variability in the drug effect is provided.
- The renal elimination model assumes Michaelis‑Menten for tubular secretion, but no data on renal clearance of bilirubin species is directly used for calibration.
- Competition between UB and CB for OATP1B1 is assumed with $K_i = K_m$, but this is not experimentally validated for both species.

#### Generalizability
The model is designed for genetic disorders of bilirubin metabolism, which have well‑defined single‑enzyme/transporter defects. Its generalizability to acquired hyperbilirubinemia (e.g., drug‑induced, liver disease) is plausible but untested for conditions like cirrhosis. The atazanavir simulation shows applicability to drug interactions, but only two scenarios were tested. The model is built on a generic PBPK platform (PK‑Sim/MoBi), so it can be extended to other populations (e.g., pediatrics, pregnancy) if appropriate physiological parameters are available.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the systemic processes (a) and specific reactions (b) in the bilirubin metabolism model, including hepatic uptake, conjugation, biliary excretion, gut conversion, and enterohepatic circulation.
  - *Significance*: Provides the conceptual framework of the model, illustrating all compartments and transport/enzyme pathways considered.
- **Figure 2**: Model predictions for healthy individuals and Rotor syndrome: (a,b) plasma UB and CB disappearance after labeled bilirubin injection; (c,d) cumulative fecal and urinary recovery; (e–g) steady‑state UB, CB, total bilirubin, and CB ratio; (h,i) fecal/urinary urobilinogen excretion; (j,k) Rotor syndrome UB and CB.
  - *Significance*: Validates the model against time‑resolved labeled bilirubin data and steady‑state literature values, showing mechanistic accuracy for both healthy and Rotor syndrome.
- **Figure 3**: Population simulation ($n=1000$) vs. literature and Explorys data for healthy individuals (a–d) and Rotor syndrome (e–h): UB, CB, total bilirubin, and CB ratio.
  - *Significance*: Demonstrates that the model captures central tendencies of real‑world data, though real‑world data show wider variability. Confirms the model's population‑level validity.
- **Figure 4**: Population simulation vs. literature and Explorys for Gilbert syndrome (a–d), Crigler‑Najjar syndrome (e–h), and Dubin‑Johnson syndrome (i–l): UB, CB, total bilirubin, and CB ratio.
  - *Significance*: Shows that scaling a single $V_{max}$ per disorder reproduces the characteristic bilirubin profiles of each syndrome, validating the top‑down approach.
- **Figure 5**: Scatter plots of CB vs. UB concentrations from Explorys (individual patients) and model simulations ($n=1000$) for healthy (a), Rotor and Dubin‑Johnson (b), and Gilbert (c) populations.
  - *Significance*: Illustrates the different correlation patterns between CB and UB across disorders, providing insight into pathophysiology. Healthy shows moderate positive correlation, Gilbert shows minimal CB response to UB elevation.
- **Figure 6**: Simulated time‑concentration profiles of atazanavir (a), UB (b), CB (c), and total bilirubin (d) over 30 days of 400 mg QD atazanavir in a healthy individual vs. a Gilbert syndrome patient.
  - *Significance*: Demonstrates the model's dynamic perturbation capability. Quantifies the exaggerated UB response in Gilbert syndrome ($C_{max} +67\%$ vs. $+34\%$), highlighting clinical risk in this subpopulation.
- **Table 1**: Demographics of Explorys cohorts: number of patients, age, sex, number of observations, and mean ± SD bilirubin levels for healthy, Gilbert syndrome, Crigler‑Najjar syndrome, and Dubin‑Johnson/Rotor syndrome groups.
  - *Significance*: Provides the real‑world data characteristics used for model comparison. Shows the extremely low number of Crigler‑Najjar patients (n=1) and the large healthy cohort (n=224,827), contextualizing the external validation.

---

### Supplementary Materials
Supplementary materials include: Text S1 (parameter identification and sensitivity analysis methods), Text S2 (partition coefficient/permeability calculation methods), Text S3 (Explorys cohort selection and exclusion criteria), Table S1 (model parameters including fraction unbound, $V_{max}$, $K_m$ values), Table S2 (calibrated kinetic parameters), Table S3 (literature data used for calibration), Table S4 (sensitivity analysis results for healthy, Rotor, Gilbert, Crigler‑Najjar, and Dubin‑Johnson states), Table S5 (literature means for disorder bilirubin levels), Table S6 (comparison with Levitt and Levitt model predictions). The supplementary data are essential for reproducing the model and understanding the parameter values.

---

### Future Directions
The authors propose extending the model to liver diseases such as cirrhosis and cholestasis. Future work could also incorporate additional genetic variants (e.g., OATP1B1 polymorphisms), model the risk of kernicterus in severe hyperbilirubinemia, and apply the framework to other UGT1A1‑inhibiting drugs beyond atazanavir. Formal identifiability and sensitivity analyses at the population level would strengthen the model's statistical basis. Integration of longitudinal real‑world data could allow dynamic individualization.

---

### Expert Commentary
This study represents a commendable effort to build a detailed whole‑body PBPK model for an endogenous compound using open‑source tools. The incorporation of real‑world data (Explorys) adds valuable external validation that is often missing in pure PBPK exercises. However, pharmacometricians should note the extreme $V_{max}$ reductions required for Gilbert syndrome ($0.75\%$ of healthy), which contradict common clinical lore of 30–50% activity. This discrepancy likely arises from the model's structure and the need to fit population medians; it may also reflect compensatory mechanisms not captured. The sensitivity analysis (Table S4) is a strength, showing that OATP1B1 $V_{max}$ for conjugated bilirubin is the most influential parameter. The atazanavir simulation is a nice example of model application, but the authors correctly note that previous work (Dong et al.) used less extreme UGT1A1 reductions and found larger bilirubin increases, highlighting the impact of calibration choices. For teaching, this paper illustrates how PBPK can be extended to endogenous substances and how genetic disorders can be modeled by altering single pathway parameters. The lack of formal identifiability analysis and the simplified urobilinogen lumping are acceptable trade‑offs given the model's scope.

---

### Bottom Line
This PBPK model of bilirubin metabolism, calibrated with literature data and validated against real-world electronic health records (Explorys), successfully recapitulates plasma bilirubin levels in healthy individuals and across four genetic disorders (Gilbert, Crigler‑Najjar, Dubin‑Johnson, Rotor syndromes). By scaling a single enzyme/transporter $V_{max}$ per disorder, the model provides a practical mechanistic framework for understanding hyperbilirubinemia. The dynamic drug interaction feature (atazanavir simulation) demonstrates its utility for evaluating drug‑induced hyperbilirubinemia risk in vulnerable subpopulations, making it a valuable tool for both clinical pharmacologists and drug developers.

---

---

## 📊 Figures

![The systemic processes (a) and the specific reactions (b) in the physiologically based computational model of bilirubin metabolism. The model involves bilirubin]({{ site.baseurl }}/assets/digests/2026-05-31-development-of-a-physiologically-based-model-of-bilirubin-metabolism-in-health/figures/fig_01.png)

![Model predictions of the bilirubin metabolism model. Panels (a, b) show the predicted healthy plasma unconjugated bilirubin disappearance curves following biliru]({{ site.baseurl }}/assets/digests/2026-05-31-development-of-a-physiologically-based-model-of-bilirubin-metabolism-in-health/figures/fig_02.png)

![Plasma unconjugated, conjugated, total bilirubin levels, and conjugated bilirubin ratio of population simulations in comparison to the literature and the Explory]({{ site.baseurl }}/assets/digests/2026-05-31-development-of-a-physiologically-based-model-of-bilirubin-metabolism-in-health/figures/fig_03.png)

![Plasma unconjugated, conjugated, total bilirubin levels, and conjugated bilirubin ratio of population simulations in comparison to the literature and the Explory]({{ site.baseurl }}/assets/digests/2026-05-31-development-of-a-physiologically-based-model-of-bilirubin-metabolism-in-health/figures/fig_04.png)

![Conjugated versus unconjugated bilirubin concentrations for individual patients. Panels (a–c) show both conjugated and unconjugated bilirubin levels of individua]({{ site.baseurl }}/assets/digests/2026-05-31-development-of-a-physiologically-based-model-of-bilirubin-metabolism-in-health/figures/fig_05.png)

![Simulated plasma bilirubin levels following atazanavir administration in a healthy individual and an individual with Gilbert syndrome. Panel (a) shows the simula]({{ site.baseurl }}/assets/digests/2026-05-31-development-of-a-physiologically-based-model-of-bilirubin-metabolism-in-health/figures/fig_06.png)