---
layout: post
title: "Characterizing Apixaban Pharmacokinetics Through Physiologically-Based Pharmacokinetic Modeling: Critical Role of Biliary Secretion and Enterohepatic Circulation in Humans"
date: 2026-06-26
authors: "Toda T, Kudo W, Tohkin M, Sugiyama Y"
journal: "Clinical Pharmacology & Therapeutics, 2025"
doi: "10.1002/cpt.xxxxx"
paper_type: popk
tags: [popk, pbpk, regulatory]
excerpt_text: "This study challenges the long-held belief that apixaban biliary secretion is minimal by applying a comprehensive PBPK model with top-down optimization (Cluster Gauss-Newton Method) to rich human PK, mass balance, and activated charcoal interaction data. The analysis reveals that biliary secretion accounts for ~44% of hepatic elimination and that enterohepatic circulation contributes substantially to apixaban's terminal half-life and fecal excretion. Pharmacometricians involved in drug disposition modeling, DDI prediction, and regulatory submission should read this for its nuanced handling of EHC and the caution it provides against overinterpreting short-term bile collection or animal data."
pdf_path: "/assets/digests/2026-06-26-characterizing-apixaban-pharmacokinetics-through-physiologically-based/PMx_Characterizing_Apixaban_Pharmacokinetics_20260626.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This study challenges the long-held belief that apixaban biliary secretion is minimal by applying a comprehensive PBPK model with top-down optimization (Cluster Gauss-Newton Method) to rich human PK, mass balance, and activated charcoal interaction data. The analysis reveals that biliary secretion accounts for ~44% of hepatic elimination and that enterohepatic circulation contributes substantially to apixaban's terminal half-life and fecal excretion. Pharmacometricians involved in drug disposition modeling, DDI prediction, and regulatory submission should read this for its nuanced handling of EHC and the caution it provides against overinterpreting short-term bile collection or animal data.

---

### Executive Summary
This paper overturns the conventional wisdom that apixaban biliary excretion is negligible by using a full PBPK model with top-down estimation of key parameters from human blood concentration, urinary, fecal, and metabolite data. The model accurately predicted the limited (<1%) biliary recovery observed in a short-duration (3–8 h) human bile collection study, yet the parameter fbile (fraction of hepatic elimination via biliary secretion) was robustly estimated at 0.44 (median; Q1–Q3: 0.40–0.50). Virtual knockout of EHC shortened the terminal half-life from 8.7 to 2.9 h and reduced fecal excretion by 55% after IV dosing, confirming that biliary/EHC pathways are major contributors to apixaban disposition. The model also reproduced the time-dependent interaction with activated charcoal, providing mechanistic support for using 6-h post-dose charcoal to probe EHC. The work serves as an important case study in the dangers of dismissing biliary elimination based on short-term sampling, animal data, or indirect fecal excretion accounting.

---

### Scientific Context & Motivation
Apixaban is a direct oral anticoagulant with a well-balanced elimination profile: approximately 30% each excreted unchanged in feces and urine, and ~40% as metabolites after oral administration. The conventional view held that biliary secretion and enterohepatic circulation (EHC) are minimal, based on: (1) fecal excretion being attributed to unabsorbed drug and intestinal secretion (mediated by P-gp/BCRP), (2) animal studies showing <15% biliary recovery and minimal AUC change after bile duct cannulation, and (3) a human duodenal suction study recovering only 0.8% of the dose in bile over 3–8 h post-dose. However, the observation that activated charcoal can reduce apixaban AUC by up to 50% when given 2–6 h post-dose suggested possible EHC involvement. The key knowledge gap is whether biliary secretion truly contributes meaningfully to apixaban disposition, or whether the charcoal interaction and fecal excretion are driven primarily by intestinal secretion. The study also addresses the methodological challenge of distinguishing biliary from intestinal secretion using clinical data alone, without invasive bile collection.

---

## ⚡ Methodological Snapshot
The authors constructed a full PBPK model (segregated-flow intestine, membrane-limited 5-compartment liver, mechanistic kidney, EHC compartments) and used a top-down parameter optimization approach (Cluster Gauss-Newton Method; CGNM) to estimate 11 key parameters from human blood concentration-time data after IV (0.5–5 mg) and oral (0.5–50 mg) doses, along with urinary/fecal excretion and metabolite data. CGNM was chosen for its ability to avoid local minima and efficiently characterize the profile likelihood surface. The model was further validated by simulating an independent activated charcoal interaction study (AC administered 2 or 6 h post-apixaban). Virtual knockout experiments (setting kbile=0) were used to quantify EHC contribution.

---

## 🏗️ Structural Model Breakdown
The PBPK model includes: (1) venous and arterial blood compartments; (2) lung; (3) gut (segregated-flow model with 4 sub-compartments: stomach, duodenum, jejunum/ileum, colon; each with lumen, enterocyte, and blood compartments; P-gp and CYP3A4 in enterocytes); (4) liver (membrane-limited 5-compartment: sinusoidal blood, hepatocyte, bile canaliculus, plus a 'delay' compartment representing bile duct/gallbladder transit; P-gp on canalicular membrane; CYP3A4 in hepatocyte); (5) kidney (mechanistic model: glomerulus, proximal tubule epithelial cells with apical P-gp and basolateral passive diffusion, distal tubule, collecting duct); (6) distribution tissues (muscle, skin, fat, bone, heart, brain, etc.) with permeability-limited kinetics; (7) EHC loop: biliary excretion into duodenal lumen, reabsorption into enterocytes, and portal vein return to liver. The AC interaction adds a luminal compartment with binding to AC (linear, rapid equilibrium) and AC transit through the GI tract.

---

### Detailed Methodological Analysis

#### Modeling Approach
Full PBPK model with segregated-flow intestinal model, membrane-limited 5-compartment liver, mechanistic kidney model (proximal tubule with passive diffusion and P-gp), disposition tissues (muscle, skin, fat, bone, etc.), and EHC compartments (bile duct, gallbladder). Hepatic elimination assumed to be via CYP3A4 metabolism and P-gp-mediated biliary secretion. Intestinal elimination via CYP3A4 and P-gp. No basolateral transporters (OATP, OAT) included. AC interaction modeled as rapid equilibrium linear binding in the intestinal lumen. Software: not explicitly specified; custom code implementing CGNM (likely R/Python).

#### Data Sources
Blood concentration data extracted from published figures (Frost et al., 2013; Raghavan et al., 2009; Wang et al., 2011) using WebPlot digitizer, converted to total blood concentration (Rb=1.09). Doses: IV 0.5–5 mg; oral 0.5–50 mg. Data beyond 60 h excluded. Mass balance data (urinary excretion after IV/PO; fecal excretion and metabolites after 20 mg PO) from Raghavan et al. Activated charcoal interaction data from Wang et al. (50 g AC at 2 or 6 h post 10 mg oral apixaban).

#### Estimation Methods
Cluster Gauss-Newton Method (CGNM): a multi-start global optimization approach that systematically explores parameter space and provides efficient profile likelihood computation. Bootstrapping was used to generate 200 final parameter sets. No information was provided on the specific number of iterations, convergence criteria, or software implementation details.

#### Model Evaluation
Visual predictive checks (VPC-like simulations using 200 bootstrap parameter sets) against observed blood concentration profiles, urinary/fecal excretion, and metabolite generation. Profile likelihood plots for identifiability assessment. Independent validation against the activated charcoal interaction study. Sensitivity analysis with fbile fixed at 0.01 (no biliary contribution) to demonstrate necessity of EHC. Virtual knockout (kbile=0) to quantify EHC impact on PK parameters.

#### Covariate Analysis
No formal covariate analysis was performed. The model simulates a 'typical' individual using physiological parameters scaled from standard human values; inter-individual variability was not included. Dose-dependent volume of distribution changes were noted but not mechanistically modeled.

---

### Statistical Rigor Assessment
The use of CGNM with profile likelihood analysis is a strength, providing more reliable confidence intervals than asymptotic standard errors. Bootstrap resampling (200 parameter sets) was used to characterize parameter uncertainty. The identifiability analysis (Figure 2) explicitly shows which parameters are well-determined and which are not. However, the study does not report standard model diagnostics (residual plots, individual fits, etc.) because no individual-level data were available—the analysis is at the population-mean level only. No assessment of residual unexplained variability or inter-individual variability was performed. The exclusion of data beyond 60 h is reasonable given sparse late sampling. The sensitivity analysis (fixed fbile=0.01) is a good practice to test alternative hypotheses, though formal model comparison metrics (e.g., AIC/BIC or posterior predictive checks) were not reported.

---

## 📊 Key Findings
The PBPK model estimated fbile (fraction of hepatic elimination via biliary excretion) at 0.44 (95% CI: 0.30–0.77), indicating that biliary secretion and metabolism contribute roughly equally to hepatic clearance. The model accurately reproduced the short-term biliary recovery of 0.8% (simulated median 1.3%, 5–95%ile: 0.62–3.7%) despite the large fbile—a discrepancy explained by the transit time through EHC compartments (gallbladder/bile ducts). Virtual EHC knockout reduced the terminal half-life from 8.7 to 2.9 h, decreased AUC by 17% (IV) and 18% (oral), and reduced fecal excretion by 55% (IV) and 18% (oral). The activated charcoal interaction model showed that when AC was administered 6 h post-apixaban, the PK profile mimicked EHC knockout, suggesting adsorption of biliary-secreted drug; the 2-h post-dose scenario mainly adsorbed residual unabsorbed drug. The CGNM bootstrap identified 5 parameters (CLint,all, fbile, PSdifentBE, SF, kbile) as identifiable from the data, while renal P-gp parameters were unidentifiable, consistent with the known dominance of glomerular filtration in renal clearance.

---

## 💡 Clinical & Regulatory Implications
The finding that biliary secretion and EHC contribute substantially to apixaban disposition has several implications: (1) DDI risk assessments should consider that biliary clearance (~44% of hepatic elimination) may be affected by inhibitors/inducers of P-gp (e.g., verapamil, cyclosporine). (2) The terminal half-life of ~8.7 h is partly EHC-dependent; conditions altering gallbladder function (e.g., cholecystectomy, biliary obstruction) or GI transit may impact apixaban PK. (3) The activated charcoal interaction is consistent with EHC; clinicians should be aware that AC given up to 6 h post-dose can still reduce apixaban exposure. (4) For clinical pharmacologists, this study provides a framework for using AC interaction studies (with a 6-h interval) as a clinical probe to assess EHC contribution to other drugs. (5) Regulatory submissions for drugs where biliary excretion is inferred to be negligible based on short-term bile collection or animal data may need re-evaluation using comprehensive modeling approaches.

---

### Strengths & Limitations

#### Strengths
- Rich integration of multiple clinical endpoints (blood concentration, urinary/fecal excretion, metabolite data) from both IV and oral doses covering a wide dose range
- Use of CGNM for global optimization and profile likelihood assessment, reducing concerns about initial value dependence and providing reliable confidence intervals
- Mechanistically plausible explanation for the apparent contradiction between low short-term biliary recovery and substantial EHC role
- Successful validation against an independent activated charcoal interaction study, adding external credibility to the model
- Careful sensitivity analysis (fixed fbile=0.01) showing that the model failing to capture biphasic PK and fecal data without biliary/EHC component

#### Limitations (Acknowledged by Authors)
- No experimental validation of fbile using sandwich-cultured human hepatocytes (bile excretion index) is currently available
- Terminal elimination phase was not perfectly captured for certain doses (e.g., 2.5 mg IV, 5 mg PO)
- Mechanism underlying dose-dependent changes in volume of distribution remains unclear (possible target-mediated disposition saturation not supported by observed data)
- Renal P-gp parameters were unidentifiable due to the absence of basolateral uptake transporters

#### Limitations (Expert Review)
- The analysis relies on a single set of clinical data extracted from published figures (WebPlot digitizer), which introduces potential digitization error and loss of inter-individual variability structure
- The PBPK model assumes full equivalence between hepatic P-gp activity and biliary secretion—while plausible, this assumption conflates transporter-mediated excretion with other potential biliary elimination mechanisms
- No formal covariate analysis or assessment of inter-individual variability: the model predicts population-typical profiles, not individual PK
- The activated charcoal interaction model assumes linear, rapid equilibrium binding; while pragmatic, this simplification may not capture complex gut luminal kinetics
- The model structure includes a 'segregated-flow intestinal model' and a 5-compartment liver with membrane-limited kinetics; while detailed, the increased parameter count raises risk of local identifiability issues for some model components

#### Generalizability
The core finding—that biliary secretion can be substantially underestimated by short-duration bile collection—is likely generalizable to other drugs with similar properties (low clearance, moderate passive permeability, P-gp substrate). However, the quantitative estimates (fbile = 0.44) are specific to apixaban and its transporter/enzyme interplay. The methodological framework (top-down PBPK with CGNM) could be applied to other drugs where biliary excretion is debated. The activated charcoal dosing protocol (6 h post-dose) for probing EHC has translational value for clinical pharmacology studies of other compounds.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the full PBPK model structure incorporating segregated-flow intestinal model, membrane-limited 5-compartment liver, mechanistic kidney model, disposition tissues, and EHC compartments.
  - *Significance*: Provides the conceptual foundation for all model simulations; illustrates the integration of biliary secretion (P-gp), metabolism (CYP3A4), and EHC pathways.
- **Figure 2**: Profile likelihood plots for each of the 11 optimized parameters, showing the objective function landscape.
  - *Significance*: Demonstrates parameter identifiability: CLint,all, fbile, PSdifentBE, SF, and kbile show well-defined minima, while renal parameters show flat profiles (unidentifiable).
- **Figure 3**: Simulated vs. observed blood concentration-time profiles (panels A–C), cumulative biliary excretion (panel D), fecal unchanged excretion (panel E), and metabolite generation (panel F) after 20 mg oral apixaban.
  - *Significance*: Validates model fit across multiple endpoints; panel D shows that the simulated biliary recovery (median ~1.3%) matches the observed human short-term bile collection (~0.8% at 8 h).
- **Figure 4**: Virtual EHC knockout simulation: blood concentration-time profiles for 5 mg IV and 20 mg PO with and without EHC (panel A); fecal excretion comparison (panel B).
  - *Significance*: Directly quantifies EHC contribution: half-life shortened from 8.7 to 2.9 h, fecal excretion decreased 55% (IV) and 18% (PO).
- **Figure 5**: Simulated vs. observed apixaban blood concentration profiles in the activated charcoal interaction study (2 h and 6 h post-dose AC administration).
  - *Significance*: External validation: the model reproduces time-dependent AC interaction, supporting EHC involvement. The 6-h AC scenario shows similar profile to EHC knockout.
- **Table 1**: Parameter estimates from CGNM optimization: best-fit values, profile likelihood confidence intervals, and bootstrap summary statistics (min, Q1, median, Q3, max) for all 11 optimized parameters.
  - *Significance*: Central result table; fbile = 0.44 (median) is the key finding. Shows which parameters are identifiable (narrow bootstrap ranges) vs. unidentifiable (wide ranges).
- **Table 2**: Simulated AUC, fecal excretion, and elimination half-life for 0.5 mg IV and 20 mg PO apixaban with (wEHC) and without (woEHC) EHC, including ratios.
  - *Significance*: Quantifies the magnitude of EHC contribution: AUC decrease ~17%, fecal excretion decrease 55% (IV), half-life decrease ~66% (both routes).

---

### Code & Reproducibility Assessment
No explicit code or data repository is mentioned; the authors used CGNM (Cluster Gauss-Newton Method) with custom R/Python scripts presumably. Parameter sets are presented in detailed tables (Table 1, Table S2). Simulation results can be partially reproduced from the provided parameter summary statistics, but full code and raw data are not publicly available.

---

### Supplementary Materials
Supplementary materials (referenced as Supporting Information, Table S1, S2, Figures S1–S4) include additional parameter definitions (Table S1), parameter estimates from the AC interaction analysis (Table S2), sensitivity analysis with fbile fixed at 0.01 (Figure S1), profile likelihood for AC parameters (Figure S2), unbound fraction of apixaban in duodenum after AC (Figure S3), and virtual knockout of intestinal P-gp/CYP3A4 (Figure S4). These are not fully extracted but support the main findings.

---

### Future Directions
Experimental validation via sandwich-cultured human hepatocyte bile excretion index assays is explicitly called for by the authors. Mechanistic understanding of dose-dependent volume of distribution changes remains unresolved and warrants investigation (e.g., binding to Factor Xa or other tissue components). The methodology could be extended to other Factor Xa inhibitors (rivaroxaban, edoxaban) where similar discrepancies between short-term biliary data and AC interaction profiles may exist. Clinical study design recommendations—specifically using a 6-h AC dosing interval to probe EHC—should be prospectively tested. Finally, incorporating the estimated fbile into DDI predictions for combined P-gp/CYP3A4 perpetrators could refine apixaban DDI risk assessments.

---

### Expert Commentary
This paper is a methodologically sound example of how top-down PBPK modeling can resolve apparent contradictions in drug disposition data. As a senior pharmacometrician, I find the framing particularly valuable: the field has a tendency to overgeneralize from short-duration experiments, especially when animal data support a 'negative' result. The authors convincingly show that biliary secretion can be quantitatively important even when short-term recovery is <1%—a finding that should prompt re-evaluation of similar claims for other drugs. The use of CGNM is a strong point; profile likelihood analysis provides much more honest uncertainty quantification than standard asymptotic standard errors. However, I would caution that the model's structural complexity (full PBPK with segregated-flow intestine, 5-compartment liver, and EHC compartments) may be over-parameterized for the available data, and the absence of individual-level data precludes assessment of inter-individual variability. Nonetheless, the convergence of the single-dose, mass balance, and AC interaction analyses is compelling. This work should be required reading for any pharmacometrician dealing with drug disposition questions, particularly in regulatory settings where biliary clearance assumptions can impact DDI or special population labeling.

---

### Bottom Line
Biliary secretion and enterohepatic circulation are significant contributors to apixaban disposition in humans, accounting for roughly half of hepatic elimination and playing a major role in the terminal half-life and fecal excretion. The limited biliary recovery observed in short-term human bile collection studies (0.8% at 8 h) is not evidence against substantial EHC—rather, it reflects the physiological lag due to gallbladder storage and the drug's low clearance. This work provides a cautionary methodological example: short-term bile sampling, animal studies, and simple fecal mass balance calculations can all be misleading for drugs with EHC. For practicing pharmacometricians, the study underscores the value of comprehensive PBPK modeling integrating multiple data streams, and highlights that a 6-h post-dose activated charcoal administration may serve as a practical clinical probe for EHC involvement.

---

---

## 📊 Figures

![PBPK model structure of apixaban and activated charcoal (AC). Apixaban and AC-related parameters were optimized using the CGNM. For detailed model parameters, pa]({{ site.baseurl }}/assets/digests/2026-06-26-characterizing-apixaban-pharmacokinetics-through-physiologically-based/figures/fig_01.png)