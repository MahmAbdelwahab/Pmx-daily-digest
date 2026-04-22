---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: March 30, 2026

## Paper 1: Utility of a Physiologically Based Pharmacokinetic Model to Elucidate the Mechan

### Bibliographic Information
- **Title**: Utility of a Physiologically Based Pharmacokinetic Model to Elucidate the Mechanisms Underlying Variability of Fetal-to-Maternal Digoxin Concentration Ratios
- **Authors**: Okuba K, Ikeda K
- **Journal**: J Pharmacokinet Pharmacodyn. 2026 Mar 24;53(2):89-107
- **DOI**: [https://doi.org/10.1007/s10928-026-10028-9](https://doi.org/10.1007/s10928-026-10028-9)

### Quick Take
This study uses a maternal-placental-fetal PBPK model to explain the wide variability in reported fetus-to-mat (F/M) ratios of digoxin. It demonstrates that placental P-gp activity selectively modulates the time-averaged F/M (AUC ratio), while instantaneous F/M values fluctuate substantially over the dosing interval. Clinicians and pharmacometricians involved in transplacental therapy should read this to understand why single time-point F/M measurements can be misleading for drugs with limited placental permeability.

---

### Executive Summary
Okuba and Ikeda present a mechanistic PBPK framework that resolves longstanding inconsistencies in clinical reports of fetal digoxin exposure. By explicitly modeling placental passive diffusion and P-gp-mediated efflux, they demonstrate that fetal exposure is governed almost exclusively by direct placental transfer, not amniotic fluid recirculation, and that time-dependent F/M dynamics arise from a temporal offset between maternal and fetal concentration peaks. This work provides a quantitative basis for interpreting clinical F/M data and cautions against using single time-point ratios as exposure metrics for drugs with limited placental permeability.

---

## ⚡ Methodological Snapshot
The authors extended the Simcyp™ v24 PBPK platform to include an explicit placental compartment with separate passive diffusion and P-gp-mediated efflux clearances, a fetal compartment with gestational-dependent renal clearance, and an amniotic fluid compartment with swallowing and intramembranous transfer pathways. The default digoxin compound file was adjusted by globally scaling tissue partition coefficients ($K_p$ scalar = 8.6) to match the reported increased volume of distribution in pregnant women ($9.94$ $L/kg$). Placental transport parameters were derived from multiple sources: placental perfusion data (Derewlany et al.) informed $P_{app}$; absolute proteomics (Al-Majdoub et al.) and Caco-2 transport data (Troutman & Thakker) informed P-gp $J_{max}$ scaling. Model verification used clinical maternal PK data (Hebert et al., Starodubtseva et al.). Global/Local SAs identified key parameters; pathway contribution analysis quantified the relative importance of placental vs. amniotic fluid routes. Simulations used clinically reported dosing regimens for fetal tachyarrhythmia (Miyoshi et al.).

---

## 🏗️ Structural Model Breakdown
Not extracted

---

### Detailed Methodological Analysis

#### Modeling Approach
Physiologically based pharmacokinetic (PBPK) modeling using Simcyp™ Simulator v24. The model explicitly included maternal whole-body compartments, a placental compartment with separate passive diffusive clearances ($CL_{PDM}$, $CL_{PDF}$) and P-gp-mediated efflux, umbilical vein, fetal whole-body, and fetal heart compartments, and an amniotic fluid compartment linked via fetal renal excretion, swallowing, and intramembranous transfer. Placental P-gp efflux was implemented as a Michaelis-Menten process driven by unbound placental concentration.

#### Data Sources
Model verification used observed maternal digoxin concentration-time data from Hebert et al. (2008) for single- and multiple-dose scenarios in pregnant and postpartum women, and Starodubtseva et al. (2023) for steady-state concentrations. Placental perfusion data for $P_{app}$ estimation were taken from Derewlany et al. (1991). In vitro P-gp $J_{max}$ was from Troutman & Thakker (2003) Caco-2 studies. Absolute P-gp abundance in placenta was from Al-Majdoub et al. (2025). Fetal physiological parameters (renal clearance, body weight) were from Abduljalil series. Virtual trial sizes mirrored source studies (e.g., $n=10$ for Hebert).

#### Estimation Methods
Not extracted

#### Model Evaluation
Model verification: predicted maternal PK parameters ($AUC$, $C_{max}$, $T_{max}$) compared vs. observed values; success criterion was within 2-fold and within 5th–95th percentile of literature data. Visual predictive checks (VPCs) of concentration-time profiles (Figure 3). Sensitivity analysis: GSA using Morris elementary effects method (4 levels, 100 trajectories, 9000 evaluations) to rank input parameters for effect on F/M. Local Sensitivity analysis on top parameters. Pathway contribution analysis: mass-balance calculation of cumulative amounts transferred via each route (placental, amniotic fluid) expressed as $\%$ of total influx/efflux.

#### Covariate Analysis
Gestational age was a key covariate: fetal renal clearance scaled with GA using Abduljalil equations; placental P-gp expression was gestation-dependent per Simcyp default library. Inter-individual variability in maternal physiology ($GFR$, body size, plasma protein) was captured via built-in Simcyp virtual populations (North European Caucasian). However, inter-individual variability in placental transporter activity was not explicitly modeled; a single effective P-gp activity scalar was used. Ethnicity-related differences were not accounted for.

---

### Scientific Context & Motivation
Digoxin is used for fetal tachyarrhythmia via transplacental therapy, but published fetal/maternal concentration ratios (F/M) vary widely (0.35–1.5). This variability has been attributed to heterogeneous sampling, gestational age, and physiological factors, with no mechanistic explanation. The authors address three knowledge gaps: (1) how placental transport processes (passive diffusion vs. P-gp efflux) contribute to F/M variability; (2) whether amniotic fluid recirculation meaningfully affects digoxin exposure; and (3) why instantaneous F/M values fluctuate even at steady state. This work explicitly challenges the paradigm of using single time-point F/M as a reliable exposure metric for drugs with limited placental permeability.

---

### Statistical Rigor Assessment
Not extracted

---

## 📊 Key Findings
Not extracted - JSON truncation

---

## 💡 Clinical & Regulatory Implications
Not extracted

---

### Strengths & Limitations

#### Strengths
- Not extracted

#### Limitations (Acknowledged by Authors)
- Not extracted

#### Limitations (Expert Review)
- Not extracted

#### Generalizability
Not assessed

---


---


---



### Future Directions
Future work should: (1) collect paired maternal/fetal concentration data at multiple time points to uniquely identify placental transport parameters and validate PBPK predictions; (2) extend the framework to other transplacental therapeutics (e.g., sotalol, flecainide) to assess generalizability; (3) incorporate inter-individual variability in placental transporter expression using proteomics data; (4) explore drug-drug interaction scenarios (e.g., P-gp inhibitors) and their impact on fetal exposure; (5) develop a simplified semi-mechanistic model for clinical use that captures time-dependent F/M dynamics without full PBPK complexity; (6) investigate gestational age-dependent changes in placental P-gp activity beyond default physiology; (6) integrate pharmacodynamic models of digoxin effect on cardiac rhythm to link exposure to efficacy/safety outcomes.

---

### Expert Commentary
This paper exemplifies the power of PBPK modeling to resolve clinical conundrums where experimental data are ethically constrained. The authors' decision to separate passive from active placental transport is methodologically sound and addresses a key limitation of prior perfusion-based studies. The demonstration of time-dependent F/M variation is a critical teaching point: for drugs with slow placental transfer, instantaneous ratios are highly sampling-time dependent, and $AUC$-based metrics are more reliable. However, I would caution that the selected P-gp activity scalar ($\theta=0.2$) remains a phenomenological adjustment; without in vivo validation, its mechanistic interpretation is limited. The field urgently needed this work—regulatory agencies increasingly expect mechanistic justification for transplacental dosing. I recommend this paper to all pharmacometricians working in maternal-fetal therapeutics. It also highlights a broader gap: despite advances in PBPK, we sorely lacked clinical fetal concentration data to anchor and validate these models. Collaborative efforts to ethically capture such data (e.g., at delivery with precise timing) are essential.

---

### Bottom Line
Practicing pharmacometricians should take away that single time-point fetus-to-maternal digoxin concentration ratios are highly variable due to temporal dissociation between maternal and fetal peaks, not just inter-individual physiologic variance. Time-averaged $AUC$ ratios are more stable, reliable exposure metrics. When modeling transplacental drugs, explicitly separate passive placental diffusion from transporter-mediated processes, and quantify pathway contributions to avoid overestimating the role of amniotic fluid recirculation. PBPK models can provide mechanistic insights to complement sparse fetal concentration data, but require careful calibration and transparent reporting of assumptions. Always interpret model predictions in context of clinical monitoring (e.g., echocardiography) rather than relying solely on concentration thresholds.

---

---

## 📊 Figures



```{=typst}
#pagebreak(weak: true)
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [Conceptual schematic of the maternal–placental–fetal PBPK model. The left panel shows substance exchange between the fetus and amniotic fluid, while the right panel presents an ove],
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [(a) Heat map of simulated F/M (AUC ratio over one dosing interval at steady state) as a function of placental P-gp activity and passive permeability (Papp scaling factor). (b) Mate],
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [(a,b) Plasma concentration–time profiles of digoxin following a single oral dose in pregnant (a) and postpartum (b) women. Simulated profiles are shown, with observed data (mean ± ],
) <fig-3>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [Simulated concentration–time profiles based on a clinically reported dosing regimen are shown in maternal plasma (a) and the umbilical vein (b) 19],
) <fig-4>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [Simulated time course of instantaneous F/M (fetal-to-maternal concentration ratio) under the clinically reported dosing regimen 19],
) <fig-5>
#set page(flipped: false)
```