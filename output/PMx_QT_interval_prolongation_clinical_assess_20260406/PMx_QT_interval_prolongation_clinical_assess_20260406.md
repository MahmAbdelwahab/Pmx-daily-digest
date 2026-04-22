---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: April 06, 2026

## Paper 1: QT interval prolongation: clinical assessment, risk factors and implications for

### Bibliographic Information
- **Title**: QT interval prolongation: clinical assessment, risk factors and implications for drug therapy
- **Authors**: Gotta V, Donner B
- **Journal**: Journal of Pharmacokinetics and Pharmacodynamics, 2025
- **DOI**: [https://doi.org/10.1007/s10928-025-10010-x](https://doi.org/10.1007/s10928-025-10010-x)

### Quick Take
This comprehensive review provides essential guidance for pharmacometricians and clinical pharmacologists on the quantitative assessment of drug-induced QTc prolongation. It synthesizes critical concepts including concentration-QTc relationships, heart-rate correction methodologies, and multi-factorial risk stratification for Torsades de Pointes (TdP), with practical examples of Model-Informed Drug Development (MIDD) applications for sotalol and ondansetron dosing.

---

### Executive Summary
This narrative review bridges cardiac electrophysiology and pharmacometrics to address drug-induced QT interval prolongation, a critical safety liability in drug development. The authors synthesize mechanisms of acquired and congenital Long QT Syndrome (LQTS), quantitative methods for QTc measurement and heart-rate correction, and the interplay between pharmacokinetic exposure and proarrhythmic risk. The paper emphasizes that QTc prolongation is a concentration-dependent phenomenon requiring careful consideration of measurement variability (tangent vs. threshold methods), demographic factors (sex, age), genetic modifiers (hERG, KCNQ1, SCN5A variants), and clinical covariates (electrolytes, organ function). It positions MIDD as a transformative approach to enable safe dosing strategies through exposure-response modeling, moving beyond binary risk classifications to quantitative risk mitigation.

---

## ⚡ Methodological Snapshot
This narrative review synthesizes literature across cardiac electrophysiology, clinical pharmacology, and regulatory science. The methodological framework encompasses three domains: (1) electrophysiological mechanisms of repolarization and arrhythmogenesis, including ion channel kinetics and the role of early afterdepolarizations; (2) quantitative ECG analysis methodologies, comparing manual (tangent vs. threshold) and automated measurement techniques, and evaluating approximately 25 different heart-rate correction formulas with emphasis on Bazett, Fridericia, Hodges, Framingham, and Rautaharju methods; and (3) pharmacometric approaches to concentration-QTc modeling, including discussion of exposure-response analysis, population PK/PD modeling, and the integration of preclinical in vitro data ($hERG$ $IC_{50}$) with clinical pharmacokinetics to predict proarrhythmic risk.

---

## 🏗️ Structural Model Breakdown
The conceptual model structure follows a multi-scale pathway from molecular to clinical events: (1) Drug exposure (concentration, $C$) binds to cardiac ion channels, primarily the $hERG$ potassium channel ($Kv11.1$) conducting $I_{Kr}$ current, but also potentially $I_{Ks}$ ($KCNQ1$), late sodium ($I_{Na}$), or L-type calcium ($I_{Ca}$) currents; (2) Channel blockade prolongs ventricular action potential duration ($APD$), particularly Phase 3 repolarization; (3) $APD$ prolongation manifests as QT interval lengthening on the ECG; (4) Excessive prolongation ($>500$ ms) promotes early afterdepolarizations ($EADs$) due to reactivation of inward currents; (5) $EADs$ trigger Torsades de Pointes in the presence of spatial dispersion of repolarization. The model incorporates 'repolarization reserve'—the redundancy of repolarizing currents that must be overcome before QT prolongation occurs. Pharmacokinetically, the model assumes concentration-dependent effects with potential delay between $C_{max}$ and maximum $QTc$ effect depending on drug distribution and receptor kinetics.

---

### Detailed Methodological Analysis

#### Modeling Approach
Review of concentration-QTc ($C$-$QTc$) modeling approaches including linear and non-linear exposure-response relationships. Discussion of systems pharmacology models linking $hERG$ channel binding to action potential prolongation. Integration of preclinical in vitro potency ($hERG$ $IC_{50}$) with clinical exposure ($C_{max}$) using the $IC_{50}:C_{max}$ ratio metric. Reference to population PK/PD models for sotalol and ondansetron that characterize the relationship between drug exposure and $QTc$ interval change, accounting for covariates such as age, sex, and organ function.

#### Data Sources
Synthesis of data from regulatory guidelines (ICH E14/S7B), epidemiological studies (prevalence of acquired LQTS in hospitalized patients), clinical trials (thorough QT studies), pharmacovigilance databases (CredibleMeds), and genetic association studies. Includes data from specific drug examples (sotalol, ondansetron, ranolazine, terfenadine, cisapride) to illustrate concentration-dependent effects.

#### Estimation Methods
Not applicable as primary research; however, discusses estimation approaches in referenced $C$-$QTc$ analyses including regression-based slope estimates (change in $QTc$ per unit concentration) and $E_{max}$ models for characterizing maximal drug effect on repolarization.

#### Model Evaluation
Review of model evaluation techniques applicable to $C$-$QTc$ modeling including visual predictive checks (VPCs), assessment of heart-rate independence of $QTc$ predictions, and evaluation of correction formula performance across heart rate ranges. Discussion of bootstrap methods for parameter uncertainty and cross-validation strategies for risk prediction models.

#### Covariate Analysis
Comprehensive review of covariates affecting $QTc$ interval and drug response: demographic ($female$ $sex$, $advanced$ $age$, $neonatal$ $period$), physiological (circadian rhythms, heart rate, electrolytes), genetic ($KCNH2$/$hERG$, $KCNQ1$, $SCN5A$, $KCNE1$, $KCNE2$, $NOS1AP$ polymorphisms), and pathophysiological (hepatic/renal impairment, heart failure, diabetes, thyroid dysfunction). Discussion of sex-specific differences in ion channel expression and age-dependent changes in repolarization.

---

### Scientific Context & Motivation
The review addresses the translational gap between preclinical $hERG$ channel screening and clinical arrhythmia risk assessment. While $hERG$ inhibition is a well-established mechanism, the relationship between $QTc$ prolongation and actual $TdP$ risk is modulated by 'repolarization reserve,' multi-channel pharmacology, and patient-specific factors. The paper fills a need for integrated understanding of how measurement techniques (different heart-rate correction formulas), circadian rhythms, and genetic polymorphisms contribute to inter-individual variability in concentration-$QTc$ relationships. It challenges the simplistic view of $QTc$ as a binary safety endpoint, advocating instead for probabilistic, exposure-based risk assessment that accounts for the steepness of concentration-response relationships and patient vulnerability factors.

---

### Statistical Rigor Assessment
As a narrative review, the paper does not present new statistical analyses but appropriately cites primary literature for quantitative relationships. Key statistical considerations discussed include: the inadequacy of Bazett's formula at extreme heart rates (overcorrection at slow rates, undercorrection at fast rates); the distribution of $QTc$ values in populations (normal ranges varying by age and sex with $\sim12$–$15$ ms difference between adult males and females); and probabilistic risk thresholds ($hERG$ $IC_{50}:C_{max} < 30$ associated with increased $TdP$ risk; $QTc >500$ ms or change $>60$ ms as high-risk cutoffs). The paper appropriately notes that individual diurnal variation in $QTc$ can range $10$–$47$ ms (mean $24$ ms), highlighting the importance of time-matched placebo controls in thorough QT studies.

---

## 📊 Key Findings
Drug-induced $QTc$ prolongation is concentration-dependent with steeper concentration-$QTc$ relationships observed in neonates and women, potentially due to differences in ion channel density. $QTc >500$ ms predicts short-term mortality independent of comorbidities. The $hERG$ $IC_{50}:C_{max}$ ratio $<30$ serves as a useful risk stratification threshold. Heart-rate correction formulas perform differently across heart rate ranges: Rautaharju's formula remains stable during rest and exercise (cutoff $477$ ms for $TdP$ prediction), while Bazett and Hodges overestimate $QTc$ prolongation during exercise. Acquired LQTS affects $>20\%$ of hospitalized patients, with risk being multiplicative involving female sex, electrolyte disturbances (hypokalemia, hypomagnesemia), organ dysfunction, and genetic variants reducing repolarization reserve. MIDD approaches have successfully enabled safe dosing strategies (e.g., ondansetron $16$ mg max in adults $<75$ years, $8$ mg in elderly $\geq75$ years, infused over $15$ minutes to limit $C_{max}$). Biologics generally lack direct $QTc$ effects due to limited intracellular distribution compared to small molecules.

---

## 💡 Clinical & Regulatory Implications
Dosing recommendations should minimize $C_{max}$ for QT-liability drugs (e.g., extended infusion durations, avoidance of rapid IV bolus). ECG monitoring protocols should occur at baseline, after $1$ day, and at steady-state ($1$–$2$ weeks) or dose escalation. $QT$-prolonging drugs are contraindicated in congenital LQTS or baseline $QTc >500$ ms. Serum potassium should be maintained in the high-normal range (shortens $QT$ interval). Drug selection should utilize risk stratification tools (CredibleMeds categories: known/possible/conditional risk). Pharmacogenetic screening for variants in $KCNH2$, $KCNE1$, $KCNE2$, and $NOS1AP$ may identify susceptible individuals. For high-risk patients, time-matched placebo-controlled ECG assessment and consideration of patient-specific heart-rate correction formulas (using Holter monitoring) may improve risk detection.

---

### Strengths & Limitations

#### Strengths
- Comprehensive integration of pharmacometric principles ($C$-$QTc$ modeling) with clinical cardiology and regulatory science
- Evidence-based critique of heart-rate correction formulas with guidance on context-specific selection
- Practical MIDD case studies (sotalol loading, ondansetron dose limits) demonstrating quantitative risk mitigation
- Coverage of emerging precision medicine approaches including pharmacogenetics and AI-based concealed LQTS detection
- Balanced discussion of multi-channel pharmacology beyond simplistic $hERG$ screening (e.g., ranolazine example)

#### Limitations (Acknowledged by Authors)
- Narrative review format without systematic quantitative meta-analysis of concentration-$QTc$ slopes
- No new primary clinical or modeling data presented
- Risk prediction remains probabilistic; specific thresholds (e.g., $IC_{50}:C_{max} <30$) have sensitivity but limited specificity
- Limited characterization of time-delay phenomena between concentration and $QTc$ effect

#### Limitations (Expert Review)
- Could benefit from quantitative meta-analysis of inter-study variability in $C$-$QTc$ model parameters across drug classes
- Insufficient discussion of non-Gaussian distributional properties of $QTc$ variability and extremes
- Limited coverage of physiologically-based pharmacokinetic (PBPK) approaches for predicting drug-drug interaction effects on $QTc$
- Heart-rate correction formulas assume no drug effect on heart rate; discussion of alternative approaches (Holter bin analysis, dynamic $QT$ beat-to-beat) is brief

#### Generalizability
High generalizability for small molecule drug development and clinical pharmacology across therapeutic areas. Specific applicability to antiarrhythmics, antimicrobials, antipsychotics, and antiemetics. Less applicable to biologics (addressed separately as generally low risk). Concepts relevant globally but normal $QTc$ values and regulatory thresholds (e.g., $5$–$10$ ms mean effect) apply primarily to ICH E14 jurisdictions.

---


---

### Figures & Tables

- **Figure 1**: Schematic representation of cardiac action potential phases (0-3) in ventricular myocytes correlated with ECG segments (P wave, QRS complex, ST segment, T wave)
  - *Significance*: Illustrates the electrophysiological basis linking ion channel activity to ECG morphology, essential for understanding how delayed repolarization manifests as QT prolongation
- **Figure 2**: Schematic illustration of tangent and threshold methods for manual QT interval measurement
  - *Significance*: Demonstrates that measurement technique impacts $QTc$ values (tangent method $\sim10$ ms shorter than threshold), critical for standardization in clinical trials and diagnosis of LQTS
- **Figure 3**: Predicted relationship between QT interval duration and heart rate for different $QTc$ correction equations (Bazett, Fridericia, Hodges, Framingham, Rautaharju)
  - *Significance*: Visual comparison showing formula-specific deviations from heart-rate independence; supports selection of Rautaharju for exercise conditions and highlights Bazett's overcorrection at low heart rates
- **Figure 4**: Relationship between $QTc$ interval and 5-year risk of life-threatening arrhythmic events in congenital LQTS patients
  - *Significance*: Quantifies risk stratification by $QTc$ duration and genotype, demonstrating exponential risk increase above $500$ ms and differences between LQT1, LQT2, and LQT3 subtypes
- **Figure 5**: In-hospital all-cause mortality in acute heart failure patients as function of $QTc$ interval at emergency department admission
  - *Significance*: Illustrates prognostic value of $QTc$ prolongation in acquired settings, showing increased mortality odds ratio with $QTc >480$ ms in multi-morbid populations
- **Table 1**: Heart-rate correction formulas: Bazett, Fridericia, Hodges, Framingham, and Rautaharju (sex-specific)
  - *Significance*: Reference compilation of standard correction equations with variable definitions; essential for selection of appropriate method based on study population and heart rate range
- **Table 2**: Age- and sex-dependent normal $QTc$ interval values (newborns, children/adolescents, women, men)
  - *Significance*: Provides clinical reference ranges for interpreting $QTc$ measurements, highlighting neonatal prolongation and sex differences in adults (men $12$–$15$ ms shorter than women)
- **Table 3**: Schwartz diagnostic scoring system for congenital LQTS (ECG findings, clinical history, family history, genetic findings)
  - *Significance*: Standardized clinical diagnostic tool integrating $QTc$ duration, T-wave morphology, syncope history, and genetic testing results for LQTS probability assessment
- **Table 4**: Genetic subtypes of LQTS (LQT1-3): genes, channels, current changes, and specific triggers
  - *Significance*: Links genotype to phenotype for the three most common LQTS subtypes ($KCNQ1$, $KCNH2$/$hERG$, $SCN5A$), guiding gene-specific risk factor avoidance and therapy selection
- **Table 5**: Clinically recognizable and silent risk factors for Torsades de Pointes
  - *Significance*: Comprehensive checklist of patient-specific risk factors including demographic, pharmacokinetic (drug interactions, organ impairment), metabolic (electrolytes), and genetic modifiers for clinical risk assessment

---



### Future Directions
Future research should focus on developing patient-specific $QT$ correction formulas using continuous (Holter) ECG monitoring rather than population-based equations. Integration of artificial intelligence for detection of concealed LQTS through T-wave morphology analysis may improve screening. Development of $hERG$ activators represents a promising therapeutic avenue for LQT2 patients. Pharmacogenetic screening panels incorporating $KCNH2$, $KCNE1$, $KCNE2$, $NOS1AP$, and $CYP450$ variants may enable precision prescribing to prevent drug-induced LQTS. Systems pharmacology models integrating multi-channel effects ($I_{Kr}$, $I_{Ks}$, $I_{Na}$, $I_{Ca}$) with patient-specific covariates could improve proarrhythmic risk prediction beyond current binary classifications. Comprehensive drug labeling regarding exposure-$QT$ relationships needs standardization to support clinical decision-making.

---

### Expert Commentary
This review effectively positions $QTc$ prolongation not merely as a safety liability to be avoided, but as a quantifiable exposure-response relationship amenable to pharmacometric optimization. The emphasis on MIDD applications—demonstrating how sotalol and ondansetron dosing can be salvaged through PK/PD understanding rather than abandoned—exemplifies the evolution of cardiac safety from binary 'thorough QT' pass/fail criteria to continuous risk management. The discussion of 'repolarization reserve' and pharmacodynamic variability (steeper slopes in women, neonates) highlights critical covariates often underutilized in standard $C$-$QTc$ analyses. For the field, this paper underscores the necessity of moving beyond Bazett correction in concentration-$QTc$ modeling and incorporating circadian variation, genetic polymorphisms, and multi-channel pharmacology into integrated safety models. The distinction between small molecules ($hERG$ risk) and biologics (minimal direct effect) is particularly valuable for modern drug development portfolios.

---

### Bottom Line
For practicing pharmacometricians, this review reinforces that concentration-$QTc$ modeling must transcend simple linear regression to account for heart-rate correction method selection, circadian variation, and patient-specific covariates (particularly sex, age, and genetic variants affecting repolarization reserve). The $5$ ms regulatory threshold requires contextual interpretation within the full exposure-response profile and benefit-risk framework. MIDD approaches enabling dose optimization—limiting $C_{max}$ through infusion duration adjustments or renal/hepatic impairment dosing—offer a path forward for drugs with essential therapeutic value but QT liability. When designing $C$-$QTc$ studies, ensure time-matched placebo controls, consider the Rautaharju correction for heart-rate-independent assessment, and plan for covariate-rich population PK/PD analysis to characterize inter-individual variability in $QTc$ sensitivity.

---

---

## 📊 Figures



```{=typst}
#pagebreak(weak: true)
#set page(flipped: false)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [Schematic representation of the different phases of a cardiac action potential (ventricular myocytes) and correlation with segments on the electrocardiogram. Phase 0: depolarizatio],
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [Schematic illustration of tangent and threshold method for measuring the QT interval duration],
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [Predicted relationship between the QT interval duration and heart rate from different QTc prediction equations (Table2)],
) <fig-3>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [Relationship between QTc interval and 5-year risk of life-threatening arrhythmic events in congenital LQTS patients (sudden cardiac death, aborted cardiac arrest, and hemodynamical],
) <fig-4>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [In-hospital all-cause mortality in patients with acute heart failure as a function of magnitude of QTc interval at emergency department admission, according to data published by Mi],
) <fig-5>
#set page(flipped: false)
```