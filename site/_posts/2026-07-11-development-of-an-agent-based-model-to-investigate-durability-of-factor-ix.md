---
layout: post
title: "Development of an Agent-Based Model to Investigate Durability of Factor IX Activity in Hemophilia B Patients Treated With Etranacogene Dezaparvovec"
date: 2026-07-11
authors: "Li Y, Jones E, Kerwin T, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025"
doi: "10.1002/psp4.70000"
paper_type: popk
tags: [popk]
excerpt_text: "This paper presents the first agent-based model (ABM) for AAV gene therapy, applied to etranacogene dezaparvovec for hemophilia B. The model predicts that polyploid hepatocytes sustain FIX activity above therapeutic thresholds for 20 years. Pharmacometricians interested in gene therapy durability, cell turnover modeling, or ABM methodology should read this paper."
pdf_path: "/assets/digests/2026-07-11-development-of-an-agent-based-model-to-investigate-durability-of-factor-ix/PMx_Development_of_an_AgentBased_Model_to_In_20260711.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper presents the first agent-based model (ABM) for AAV gene therapy, applied to etranacogene dezaparvovec for hemophilia B. The model predicts that polyploid hepatocytes sustain FIX activity above therapeutic thresholds for 20 years. Pharmacometricians interested in gene therapy durability, cell turnover modeling, or ABM methodology should read this paper.

---

### Executive Summary
This paper presents the first agent-based model (ABM) for AAV-based gene therapy, applied to etranacogene dezaparvovec for hemophilia B. The model simulates individual hepatocytes as agents with ploidy, transduction state, and episome dynamics, capturing cell division and death. It successfully predicts the median FIX activity plateau observed in clinical trials over 3 years and extends projections to 20 years, showing sustained activity above therapeutic thresholds. The key mechanistic insight is that polyploid hepatocytes, with slower turnover, are the primary drivers of long-term durability. Sensitivity analyses confirm robustness across biologically plausible parameter ranges.

---

### Scientific Context & Motivation
The long-term durability of AAV-based gene therapies targeting self-renewing organs like the liver has been a major concern, as episomes are lost during cell division. Traditional ODE-based models cannot adequately capture the stochastic loss of episomes during cell turnover. This knowledge gap has led to uncertainty about the long-term efficacy of liver-targeted gene therapies. The authors address this by developing an ABM that explicitly models individual hepatocyte dynamics, including ploidy, division, death, and episome inheritance. This approach allows for mechanistic exploration of durability drivers that ODE models cannot capture.

---

## ⚡ Methodological Snapshot
The authors developed an agent-based model (ABM) where each hepatocyte is an agent with attributes including ploidy (diploid vs. polyploid), transduction state, and episome count. Agents follow probabilistic rules for division, death, and ploidy changes, with a time step of 0.05 years. The virtual liver comprises 1000 agents, and FIX production is modeled as a constant rate per expressing episome, with a cap of 1-5 expressing episomes per cell. Polyploid cells produce FIX at twice the rate of diploid cells. The model was not formally fitted to data; parameters were fixed from literature or NHP studies. Virtual population simulations (160,000 livers) were compared with clinical observations from Phase 2b and Phase 3 trials.

---

## 🏗️ Structural Model Breakdown
The model consists of 1000 agents (hepatocytes) in a virtual liver. Each agent has attributes: ploidy (diploid or polyploid), transduction state (transduced or not), and episome count. Agents follow probabilistic rules: division (probability $\beta_2$ for diploid, $\beta_p$ for polyploid), death (probability $\delta_2$ for diploid, $\delta_p$ for polyploid), and ploidy changes (diploid to polyploid via endoreplication). During division, episomes are distributed evenly between daughter cells. All episomes are lost upon cell death. FIX production is modeled as a constant rate per expressing episome, with a maximum of 1-5 expressing episomes per cell. Polyploid cells produce FIX at twice the rate of diploid cells. FIX enters the bloodstream and is eliminated with a half-life of ~7 hours. The model has 9 parameters: 7 fixed from literature, 1 estimated from NHP data, and 1 varied in virtual population simulations.

---

### Detailed Methodological Analysis

#### Modeling Approach
Agent-based model (ABM) implemented in Julia 1.10.4. Each agent represents a hepatocyte with attributes: ploidy (diploid or polyploid), transduction state, and episome count. Agents follow probabilistic rules for division, death, and ploidy changes. Time step of 0.05 years (18 days). Virtual liver consists of 1000 agents. FIX production per episome is constant, with a maximum of 1-5 expressing episomes per cell. Polyploid cells produce FIX at twice the rate of diploid cells.

#### Data Sources
Clinical data from Phase 2b (NCT03489291) and Phase 3 (NCT03569891) studies of etranacogene dezaparvovec were used for model comparison. Training data included 2-year follow-up; validation data included 3-year follow-up. Additional 5-year data from the HOPE-B trial were used for post-hoc comparison. NHP data informed initial conditions for transduction efficiency and episome counts.

#### Estimation Methods
The model was not formally fitted to clinical data. Parameters were fixed from literature or estimated from NHP data. Virtual population simulations used quasi-Monte Carlo sampling over parameter ranges (Table S2) to generate 160,000 virtual livers. No optimization or likelihood-based estimation was performed.

#### Model Evaluation
Model predictions were compared visually with clinical observations using median and 95% CI from the virtual population. Training (2-year) and validation (3-year) datasets were used. Post-hoc comparison with 5-year data was performed. No formal goodness-of-fit metrics (e.g., prediction-corrected VPCs) were reported.

#### Covariate Analysis
Patient age was used to determine the initial fraction of diploid vs. polyploid hepatocytes based on published data (Heinke et al.). Sensitivity analyses tested the impact of age-independent ploidy fractions and found limited effect on long-term FIX activity. No other covariates were formally tested.

---

### Statistical Rigor Assessment
The model was not formally fitted to data, so traditional statistical metrics (e.g., likelihood, AIC) are not applicable. The virtual population approach (160,000 simulations) provides robust uncertainty quantification through 95% CIs. Sensitivity analyses used local sensitivity coefficients, which are appropriate for exploring parameter influence but may miss interactions. The comparison with clinical data is qualitative (visual overlay) rather than quantitative (e.g., prediction errors). The lack of formal model selection or comparison with simpler models is a limitation. The sample size of clinical data (Phase 2b and Phase 3) is not explicitly stated but appears adequate for median comparisons.

---

## 📊 Key Findings
The ABM successfully predicted the median FIX activity plateau observed in clinical trials over 3 years, with predicted values of 35.3% (Year 1), 31.8% (Year 2), and 28.2% (Year 3) versus observed medians of 40.8%, 34.6%, and 35.95%, respectively. The 20-year projection shows median FIX activity stabilizing at 22.6% (95% CI 4.58%-71%), well above the 2% threshold for prophylaxis-free living. The key mechanistic finding is that polyploid hepatocytes, with an average lifespan exceeding 5 years, are the primary drivers of long-term durability, while diploid hepatocytes contribute minimally after 6 years. Sensitivity analyses identified episome passing efficiency during cell division and polyploid hepatocyte turnover as the most influential parameters on long-term outcomes.

---

## 💡 Clinical & Regulatory Implications
The model predicts that median FIX activity remains above 2% (the threshold for prophylaxis-free living) for at least 20 years post-treatment, supporting the potential for a functional cure. The durability is driven by polyploid hepatocytes, which are more abundant in older patients, suggesting that age at treatment may influence long-term outcomes. The sensitivity analyses indicate that episome passing efficiency during cell division is a key determinant of durability, highlighting a potential target for vector optimization. The model also provides a framework for predicting outcomes in patients with liver comorbidities, though this was not explicitly explored.

---

### Strengths & Limitations

#### Strengths
- First application of ABM to AAV gene therapy, addressing a key limitation of ODE models.
- Mechanistic insight into the role of polyploid hepatocytes in long-term durability.
- Successful prediction of clinical FIX activity plateau over 3 years.
- Comprehensive sensitivity analyses exploring key biological parameters.
- 20-year projections provide clinically relevant information for patients and payors.
- Transparent documentation of assumptions and parameter sources.

#### Limitations (Acknowledged by Authors)
- Initial conditions (episome counts, transduction fraction) informed by NHP data, with uncertain translatability to humans.
- Model does not account for pre-existing neutralizing antibodies.
- Assumes stable episomes with no degradation or integration.
- Maximum expressing episomes per cell (1-5) based on expert opinion, not experimental data.
- Assumes constant FIX production rate per episome over time.
- Assumes healthy, homeostatic liver; does not model liver injury or comorbidities.

#### Limitations (Expert Review)
- No formal model fitting or selection; parameters fixed from literature without uncertainty quantification.
- No comparison with simpler ODE models to justify the added complexity of ABM.
- Local sensitivity analysis may miss parameter interactions; global sensitivity analysis would be more informative.
- Virtual liver size (1000 agents) may not capture spatial heterogeneity or clonal expansion effects.
- No formal goodness-of-fit metrics; comparison with clinical data is qualitative.
- The assumption of no episome replication may be conservative but is not validated.

#### Generalizability
The ABM framework is generalizable to other AAV-based gene therapies targeting the liver or other self-renewing tissues. However, the specific parameter values (e.g., FIX production rate, episome counts) are therapy-specific and would need recalibration. The model assumes a healthy liver, limiting applicability to patients with liver comorbidities.

---

---

### Figures & Tables

- **Figure 1**: Schematic of the ABM showing hepatocyte agents with ploidy (diploid vs. polyploid) and transduction state, along with rules for division, death, and episome dynamics.
  - *Significance*: Provides the conceptual framework for the model, illustrating the key agent states and transitions.
- **Figure 2**: Comparison of ABM-simulated FIX activity (median and 95% CI) with individual clinical observations from Phase 2b and Phase 3 studies over the first 4 years post-treatment.
  - *Significance*: Primary validation figure showing the model's ability to predict the observed median FIX activity plateau.
- **Figure 3**: Updated comparison with the most recent HOPE-B data cut (5 years), showing model predictions versus observed mean FIX activity.
  - *Significance*: Demonstrates model performance against longer-term clinical data, with mild underprediction in years 4-5.
- **Figure 4**: 20-year projection of median FIX activity with 95% CI, showing stabilization after year 5 and sustained levels above 2%.
  - *Significance*: Key figure for long-term durability predictions, supporting the potential for a functional cure.
- **Figure 5**: Sensitivity analysis showing the effect of a 10-fold decrease in episome count per transduced cell (A) and decreased episome passing efficiency (B) on FIX activity over 20 years.
  - *Significance*: Identifies episome passing efficiency as a key driver of long-term durability, more impactful than initial transduction efficiency.
- **Figure 6**: Sensitivity analyses on polyploid hepatocyte fraction (A), turnover rates (B), and FIX production rate ratio (C) on 20-year FIX activity.
  - *Significance*: Shows that polyploid hepatocyte turnover is a critical parameter, while initial fraction has limited impact.
- **Figure S1**: Contribution of diploid vs. polyploid hepatocytes to FIX activity over time, showing polyploid cells dominate after year 6.
  - *Significance*: Mechanistic insight into the primary driver of long-term durability.
- **Figure S2**: Relationship between patient age and fraction of diploid hepatocytes, used to initialize virtual livers.
  - *Significance*: Documents the age-dependent ploidy distribution assumption.
- **Figure S3**: Local sensitivity coefficients for all model parameters at year 20.
  - *Significance*: Quantifies parameter influence on long-term predictions, showing robustness for most parameters.
- **Table S1**: Model parameters fixed from literature, including hepatocyte turnover probabilities, FIX half-life, and ploidy dynamics.
  - *Significance*: Documents all fixed parameter values and their sources.
- **Table S2**: Model parameters and their ranges used in virtual population simulations, including transduction efficiency, episome counts, and FIX production rates.
  - *Significance*: Defines the parameter space for the virtual population and sensitivity analyses.

---

### Code & Reproducibility Assessment
All simulations were performed in Julia 1.10.4 using the Distributions and QuasiMonteCarlo packages. No public repository or code availability statement was provided.

---

### Supplementary Materials
Supplementary materials include Table S1 (model parameters fixed from literature), Table S2 (model parameters and ranges for virtual population), Figure S1 (FIX activity contribution by diploid vs. polyploid hepatocytes), Figure S2 (age-dependent diploid hepatocyte fraction), and Figure S3 (local sensitivity coefficients). These provide essential details for reproducing the model and understanding the sensitivity analysis.

---

### Future Directions
The model should be extended to include the impact of pre-existing neutralizing antibodies on transduction efficiency. Incorporating episome silencing or degradation over time would improve mechanistic accuracy. The framework could be applied to other AAV-based gene therapies targeting the liver (e.g., for hemophilia A) or other self-renewing tissues. Validation against longer-term clinical data (beyond 5 years) is needed. The model could also be adapted to explore the impact of liver injury or comorbidities on durability.

---

### Expert Commentary
This is a landmark application of ABM in gene therapy modeling. The shift from ODE-based approaches to ABM is conceptually necessary for capturing the stochastic, discrete nature of episome loss during cell division. The model's ability to predict the clinical plateau and then extend to 20-year projections is impressive, though the lack of formal model selection or comparison with simpler ODE models is a missed opportunity. The assumption of no episome replication is conservative and likely realistic, but the assumption of a constant FIX production rate per episome may be oversimplified. The sensitivity analysis is thorough, but the local sensitivity approach may miss interactions. The model's reliance on NHP data for initial conditions is a limitation, but the authors acknowledge this. For the field, this work provides a template for modeling durability of non-integrating gene therapies in self-renewing tissues, which is a critical question for regulatory and payer decisions.

---

### Bottom Line
This first-in-class agent-based model (ABM) for AAV gene therapy demonstrates that polyploid hepatocytes, with their slower turnover, are the primary drivers of sustained FIX expression beyond 5 years. The model predicts that median FIX activity remains above the 2% threshold for 20 years post-treatment, providing mechanistic support for the long-term durability of etranacogene dezaparvovec. For pharmacometricians, this work highlights the value of ABMs over traditional ODE-based approaches for modeling cell turnover and episome dynamics in self-renewing tissues.

---

---

## 📊 Figures

![Schematic of the agent-based model. β2and βpare the division probabilities of diploid and polyploid hepatocytes, respectively. δ2and δpare the death probabilitie]({{ site.baseurl }}/assets/digests/2026-07-11-development-of-an-agent-based-model-to-investigate-durability-of-factor-ix/figures/fig_01.png)

![ABM-simulated and observed FIX activity as a percent of normal versus time for the first 4 years post treatment. The light gray points represent individual clini]({{ site.baseurl }}/assets/digests/2026-07-11-development-of-an-agent-based-model-to-investigate-durability-of-factor-ix/figures/fig_02.png)

![ABM-simulated and observed FIX activity from the most recent data cut of the HOPE-B study as a percent of normal versus time for the first 4 years post treatment]({{ site.baseurl }}/assets/digests/2026-07-11-development-of-an-agent-based-model-to-investigate-durability-of-factor-ix/figures/fig_03.png)

![ABM-predicted FIX activity versus time over 20 years post treatment. The solid blue line represents the predicted median FIX activity, and the shaded area repres]({{ site.baseurl }}/assets/digests/2026-07-11-development-of-an-agent-based-model-to-investigate-durability-of-factor-ix/figures/fig_04.png)

![Effect of a 10-fold decrease in transduction efficacy (the episome count per transduced hepatocyte described by model parameter Init_Episome) (A) and decreased e]({{ site.baseurl }}/assets/digests/2026-07-11-development-of-an-agent-based-model-to-investigate-durability-of-factor-ix/figures/fig_05.png)

![Effects of age-varying or age-independent diploid hepatocyte fractions in virtual livers at treatment time (A), different proliferation and death rates of polypl]({{ site.baseurl }}/assets/digests/2026-07-11-development-of-an-agent-based-model-to-investigate-durability-of-factor-ix/figures/fig_06.png)