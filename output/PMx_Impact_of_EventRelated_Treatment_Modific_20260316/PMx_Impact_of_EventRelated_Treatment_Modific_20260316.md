---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: March 16, 2026

## Paper 1: Impact of Event-Related Treatment Modifications in Exposure-Response Analyses of

### Bibliographic Information
- **Title**: Impact of Event-Related Treatment Modifications in Exposure-Response Analyses of Repeated Time-to-Event Data
- **Authors**: Goulooze SC, Garmann D, Eissing T, Snelder N
- **Journal**: CPT: Pharmacometrics & Systems Pharmacology, 2026
- **DOI**: [https://doi.org/10.1002/psp4.70231](https://doi.org/10.1002/psp4.70231)

### Quick Take
Pharmacometricians analyzing RTTE data with potential event-related treatment modifications should read this paper. It identifies a critical bias mechanism when discontinuations precede events due to unobserved clinical worsening, and proposes AUCavg + BlindedStudyTreatmentrank as a solution. The work has immediate relevance for cardiovascular outcome trials and other settings where clinical deterioration drives treatment changes.

---

### Executive Summary
This simulation study systematically evaluates exposure-response (ER) analysis methods for repeated time-to-event (RTTE) data when treatment modifications are event-related, identifying a critical bias mechanism and proposing a novel solution. The authors demonstrate that standard approaches—time-varying exposure AUC(t) and average exposure AUCavg—fail under specific confounding scenarios where treatment discontinuation precedes events due to unobserved clinical worsening. They introduce AUCavg + BlindedStudyTreatmentrank, which uses a percentile-rank of blinded study treatment received as a covariate to remove confounding. Through extensive simulations (100,000 subjects per dataset) across random discontinuation, event-related discontinuation after events, and event-related discontinuation before events scenarios, they show this novel approach provides unbiased estimates where standard methods fail, with only minor limitations for strongly nonlinear ER relationships. This work addresses a methodological gap with immediate practical relevance for cardiovascular outcome trials and other settings where clinical worsening drives treatment modifications.

---

## ⚡ Methodological Snapshot
This simulation study employed a rigorous design to evaluate ER analysis methods for RTTE data under various treatment modification scenarios. The core innovation is the introduction of BlindedStudyTreatmentrank—a percentile-rank measure of blinded study treatment received that captures treatment modification patterns in both active and placebo arms. The simulation framework created 100,000-subject datasets across three scenarios: random discontinuation, event-related discontinuation after events, and event-related discontinuation before events (with varying probability). Three analysis approaches were systematically compared: time-varying AUC(t), average AUCavg, and AUCavg adjusted by BlindedStudyTreatmentrank. The pharmacological distinction between DOSE(t) (true pharmacological dose, zero after discontinuation and always zero for placebo) and BlindedStudyTreatment(t) (mock dose including placebo, zero after discontinuation) is central to the methodology—enabling the placebo arm to inform confounding pathways without contributing pharmacological effect.

---

## 🏗️ Structural Model Breakdown
The RTTE model structure comprises a hazard function with four multiplicative components: baseline hazard h_0(t), pharmacological effect EFF (driven by either AUC(t) or AUCavg), discontinuation effect DEFF (function of BlindedStudyTreatmentrank), and individual frailty e^{η_i}. The pharmacological effect EFF follows either linear (1 + SLOPE × AUC), Emax (1 + EMAX × AUC/(EC50 + AUC)), or sigmoid Emax parameterizations. The discontinuation effect DEFF uses a novel empirical structure combining sigmoid Emax for the discontinuation/non-discontinuation dichotomy with exponential for timing among discontinuers. The event density integrates cumulative hazard from the previous event time. Inter-individual variability is implemented as log-normal frailty on the hazard. The model accommodates time-varying covariates through the AUC(t) formulation or time-invariant subject-level summaries through AUCavg.

---

### Detailed Methodological Analysis

#### Modeling Approach
Three RTTE modeling approaches compared: (1) time-varying exposure AUC(t) as pharmacological effect driver, (2) average exposure AUCavg as driver, (3) AUCavg + BlindedStudyTreatmentrank as covariate. All models included inter-individual variability on hazard (frailty). The ER parameterization matched simulation truth (linear, Emax, or sigmoid Emax). The novel Approach 3 used an empirical DEFF function combining sigmoid Emax and exponential components to characterize the relationship between BlindedStudyTreatmentrank and hazard. Software: NONMEM/Monolix based on provided control files.

#### Data Sources
Simulated datasets designed to mimic large four-arm placebo-controlled studies: 10 mg active, 20 mg active, 10 mg placebo, 20 mg placebo. Each dataset included 100,000 subjects followed for 5 years to minimize stochastic sampling effects. Three main scenarios: (A) random treatment discontinuation (10% per year), (B) event-related discontinuation (25% probability per event causing subsequent discontinuation), (C) event-related discontinuation with conditional probability of early discontinuation (CPED = 0%, 25%, 50%, 100%) where discontinuation occurs 1 day before the event. Multiple subscenarios with different true ER relationships: no effect, linear log-hazard relationship, nonlinear sigmoid Emax hazard relationship. Sensitivity analyses included increased base hazard and alternative down-titration scenarios.

#### Estimation Methods
Standard nonlinear mixed-effects estimation for RTTE models with inter-individual variability (frailty) on the hazard parameter. The estimation approach accommodated the repeated event structure with hazard functions varying over time based on exposure metrics and covariates.

#### Model Evaluation
Comparison of estimated ER relationships against true simulation parameters. For linear ER: comparison of estimated slope and 95% confidence interval versus true slope. For nonlinear ER: plotting 95% confidence interval of estimated ER against true ER relationship. Bias assessment across multiple replicates and scenarios. Model evaluation techniques for RTTE stratified by BlindedStudyTreatmentrank were suggested for real-data applications.

#### Covariate Analysis
BlindedStudyTreatmentrank was developed as a novel covariate to adjust for confounding from event-related treatment modifications. Model development was performed to derive the empirical functional form relating BlindedStudyTreatmentrank to hazard. In Scenarios B and C, a complex parameterization was required: a sigmoid Emax function captured the sharp difference between patients who discontinued versus those who did not (since discontinuation guarantees at least one event), while an exponential function characterized that among discontinuers, early discontinuers have higher hazard than late discontinuers. In Scenario A (random discontinuation), a simple log-linear relationship was used to avoid minimization issues. The covariate was tested in combination with both AUC(t) and AUCavg drivers, with the AUCavg combination proving successful while AUC(t) combination remained biased.

---

### Scientific Context & Motivation
ER analyses for RTTE data face unique challenges when treatment modifications are event-related, creating potential reversed causality where events predict exposure rather than exposure predicting events. While solutions exist for continuous outcomes in titration studies, no systematic evaluation had been performed for RTTE data. A particularly problematic scenario—identified in glucose-lowering drug cardiovascular outcome studies—occurs when undocumented clinical worsening precedes both treatment discontinuation and the event itself. This creates confounding by indication where low exposure appears protective against events when in fact impending events caused treatment cessation. The current work fills this methodological gap by evaluating standard approaches and proposing a novel adjustment method that leverages information from blinded study treatment in placebo arms to remove confounding.

---

### Statistical Rigor Assessment
The study demonstrates excellent statistical rigor through large-scale simulation (100,000 subjects per dataset) minimizing Monte Carlo error, comprehensive scenario coverage spanning the causal inference space, and appropriate comparison against known simulation truth. The use of 95% confidence intervals for parameter estimates enables proper uncertainty quantification. However, limited detail is provided on exact estimation algorithms, convergence diagnostics, or handling of numerical integration for the hazard functions. The assumption that IIV on hazard frailty is sufficient (without IIV on ER parameters) is noted by authors as a limitation. Missing data is not applicable in this simulation context. Sensitivity analyses for base hazard and alternative titration schemes support robustness, though formal sensitivity analysis for distributional assumptions (e.g., frailty distribution) is not reported.

---

## 📊 Key Findings
The study identifies three critical findings through systematic simulation. First, with random treatment discontinuation (Scenario A), all three approaches (AUC(t), AUCavg, AUCavg + BlindedStudyTreatmentrank) provide unbiased ER estimates. Second, with event-related discontinuation after events (Scenario B), AUC(t) remains unbiased while AUCavg becomes substantially biased (overestimating treatment effect); adding BlindedStudyTreatmentrank removes this bias. Third, and most importantly, with event-related discontinuation before events (Scenario C), AUC(t) becomes increasingly biased as the conditional probability of early discontinuation (CPED) increases—at CPED=25% with only ~5% of events preceded by discontinuation, the slope was overestimated by 50%. Only AUCavg + BlindedStudyTreatmentrank provided unbiased estimates across all CPED values (0-100%). For nonlinear ER relationships, the novel approach showed good performance with Emax (HILL=1) but slight bias with strongly sigmoidal relationships (HILL=5), underestimating the true nonlinearity. The sensitivity analysis with higher base hazard confirmed qualitative robustness of findings.

---

## 💡 Clinical & Regulatory Implications
The methodology directly impacts dose selection decisions and regulatory submissions for drugs where events influence dosing patterns. In cardiovascular outcome trials with glucose-lowering drugs, where treatment discontinuation may precede events due to clinical worsening, standard ER analyses could substantially overestimate treatment benefits. The AUCavg + BlindedStudyTreatmentrank approach enables more accurate characterization of true pharmacological effects, potentially preventing inappropriate dose recommendations. However, the method is primarily applicable to randomized placebo-controlled designs where placebo arms mimic active treatment arms—limiting utility in open-label or active-comparator studies. The approach also complicates clinical trial simulations since BlindedStudyTreatmentrank is not known at baseline, requiring careful consideration for prospective trial design applications.

---

### Strengths & Limitations

#### Strengths
- Systematic evaluation across comprehensive causal scenarios (random, post-event, pre-event discontinuation)
- Novel methodological solution with clear theoretical basis in causal inference
- Large simulation size (100,000 subjects) minimizes stochastic uncertainty
- Practical relevance demonstrated through connection to real clinical issues (glucose-lowering drug CV outcomes)
- Thorough sensitivity analyses for base hazard and alternative titration designs
- Clear distinction between pharmacological dose and blinded study treatment enabling placebo arm leverage
- Model code and data publicly available supporting reproducibility
- Appropriate acknowledgment of limitations and boundary conditions

#### Limitations (Acknowledged by Authors)
- Method tends to underestimate nonlinearity in strongly sigmoidal ER relationships (HILL=5)
- BlindedStudyTreatmentrank not known at baseline, complicating clinical trial simulations
- Requires substantial model development to characterize empirical DEFF relationship
- Primarily applicable to randomized placebo-controlled designs
- Assumes comparability of subjects with similar BlindedStudyTreatmentrank across arms
- Did not evaluate IIV on ER parameters, only on hazard frailty
- Other treatment modifications (up-titration, temporary interruption) not evaluated

#### Limitations (Expert Review)
- No formal evaluation of type I error control or power for detecting ER relationships
- Limited exploration of sample sizes smaller than 100,000 (practical trials)
- No comparison with alternative causal inference methods (g-computation, inverse probability weighting)
- Unclear how to select between AUC(t) and AUCavg + BlindedStudyTreatmentrank in practice when true data-generating mechanism is unknown
- Placebo response assumptions not critically evaluated—if placebo effects exist, BlindedStudyTreatmentrank may capture both confounding and placebo effects
- No guidance on model selection criteria for DEFF functional form
- Correlation between AUCavg and BlindedStudyTreatmentrank in active-only studies mentioned but not quantified

#### Generalizability
Findings generalize well to placebo-controlled RTTE studies with event-related treatment modifications, particularly cardiovascular and chronic disease settings. Limited generalizability to open-label studies, active-comparator designs, or settings without placebo arms where BlindedStudyTreatmentrank cannot be constructed. Applicability to TTE (single event) analyses is suggested but not formally evaluated.

---

### Key Equations

**Blinded Study Treatment Rank**

$$
\mathrm{BlindedStudyTreatment}_{\mathrm{rank}} = \left(\mathrm{rank}_i - 0.5\right)/n
$$

Percentile-rank transformation of blinded study treatment history, where rank_i is the individual's rank and n is total subjects. This normalization enables comparison across studies and removes scale dependency.

**Time-Varying AUC**

$$
\mathrm{AUC}(t) = \mathrm{DOSE}(t)/\mathrm{ICL}
$$

Time-varying area under the curve calculated from dose and individual clearance, representing instantaneous drug exposure at time t.

**Hazard Function**

$$
h(t) = h_0(t) \times \mathrm{EFF} \times \mathrm{DEFF} \times e^{\eta_i}
$$

Hazard function for RTTE model incorporating baseline hazard h_0(t), pharmacological effect EFF, discontinuation effect DEFF, and individual frailty term with log-normal distribution.

**Event Density Function**

$$
f(t) = h(t) \times S(t) = h(t) \times \exp\left(-\int_{t_{j-1}}^{t} h(t)   dt\right)
$$

Probability density function for time-to-event, where S(t) is survival function and the integral accumulates hazard from previous event time t_{j-1}.

**Discontinuation Effect Function**

$$
\mathrm{DEFF} = \left(1 + \frac{\mathrm{DEMAX} \times {\mathrm{BlindedStudyTreatment}_{\mathrm{rank}}}^{\mathrm{DHILL}}}{{\mathrm{BlindedStudyTreatment}_{\mathrm{rank}}}^{\mathrm{DHILL}} + \mathrm{D50}^{\mathrm{DHILL}}}\right) \times \left(1 + \mathrm{DINT} \times e^{\mathrm{BlindedStudyTreatment}_{\mathrm{rank}} \times \mathrm{DSLOPE}}\right)
$$

Discontinuation effect function combining sigmoid Emax component (capturing sharp difference between discontinuers and non-discontinuers) with exponential component (capturing early vs. late discontinuation timing). DEMAX, DHILL, D50, DINT, and DSLOPE are estimated parameters.


---

### Figures & Tables

- **Figure 1**: Illustration of the relationship between BlindedStudyTreatmentrank and the hazard, showing the empirical DEFF function with sigmoid Emax component for discontinuation effect and exponential component for early vs. late discontinuation timing
  - *Significance*: Demonstrates the complex empirical relationship that must be captured when modeling BlindedStudyTreatmentrank, validating the need for flexible functional forms in practice
- **Figure 2**: Comparison of estimated versus true ER slopes for Scenario A (random discontinuation) across three models: AUC(t), AUCavg, and AUCavg + BlindedStudyTreatmentrank
  - *Significance*: Establishes that all methods work when discontinuation is random, providing baseline validation
- **Figure 3**: Comparison of estimated versus true ER slopes for Scenario B (event-related discontinuation after event)
  - *Significance*: Shows AUC(t) remains unbiased while AUCavg becomes biased, and that BlindedStudyTreatmentrank removes this bias—critical for understanding when standard methods suffice
- **Figure 4**: Comparison of estimated versus true ER slopes for Scenario C (event-related discontinuation before event) across CPED values of 0%, 25%, 50%, and 100%
  - *Significance*: The central result: only AUCavg + BlindedStudyTreatmentrank provides unbiased estimates when discontinuations precede events; AUC(t) becomes increasingly biased with higher CPED
- **Figure 5**: Comparison of true versus estimated ER relationships for nonlinear Emax and sigmoid Emax functions
  - *Significance*: Demonstrates slight bias with strongly nonlinear relationships (HILL=5), informing practical limitations of the proposed method

---

### Code & Reproducibility Assessment
The supplementary materials include Data S1 with NONMEM/Monolix control files (3_aucavg.mod, 3_aucavgbstrank.mod, 3_auct.mod, 10_aucavg.mod, 10_aucavgbstrank.mod, 10_auct.mod) and simulated datasets, enabling full reproduction of the analyses. The availability of model code and data represents excellent reproducibility standards for the pharmacometrics field. Researchers can replicate all three modeling approaches (AUC(t), AUCavg, AUCavg + BlindedStudyTreatmentrank) and extend the simulation scenarios.

---

### Supplementary Materials
The supplementary materials include Appendix S1 with detailed methodological descriptions and Table S1 containing complete simulation settings. Data S1 provides simulated datasets and NONMEM/Monolix control files for all three modeling approaches (3_aucavg.mod, 3_aucavgbstrank.mod, 3_auct.mod for 3-event simulations; 10_aucavg.mod, 10_aucavgbstrank.mod, 10_auct.mod for 10-event simulations). Additional figures (S1-S10) present sensitivity analyses including nonlinear ER in Scenario A, AUC(t) performance in Scenario C with nonlinear ER, alternative titration designs, and increased base hazard scenarios.

---

### Future Directions
Several important extensions emerge from this work. First, investigation of IIV on ER parameters (not just hazard frailty) would broaden applicability. Second, evaluation of up-titration and temporary treatment interruption scenarios—common in oncology and immunology—would extend generalizability. Third, exploration of doubly robust estimators or g-computation approaches could provide alternative solutions with different bias-variance trade-offs. Fourth, application to time-to-first-event (TTE) analyses, where the same confounding mechanism operates, would be valuable. Fifth, development of diagnostic tools to detect Scenario C patterns in real data (e.g., testing for event clustering after discontinuations in placebo arms) would aid practical implementation. Finally, investigation of methods for active-comparator or open-label studies where BlindedStudyTreatmentrank cannot be constructed would address a key limitation.

---

### Expert Commentary
This paper addresses a subtle but important causal inference problem that has likely plagued many RTTE analyses without recognition. The insight that AUC(t) fails when discontinuations precede events—despite its general robustness for outcome-driven titration—is particularly valuable. The BlindedStudyTreatmentrank approach cleverly leverages the placebo arm to identify confounding pathways, reminiscent of negative control exposure concepts in epidemiology. From a teaching perspective, this work illustrates how temporal ordering assumptions in time-varying covariate analyses can be violated in pharmacological settings, and how causal reasoning (confounding pathways) can guide method development. The field trend toward more rigorous causal inference in pharmacometrics is well-served by this contribution. However, I note that the empirical nature of the DEFF function requires substantial model development effort, and the correlation between AUCavg and BlindedStudyTreatmentrank in active-only studies remains a limitation. Future extensions might explore doubly robust estimators or g-computation approaches that could offer alternative solutions with different trade-offs.

---

### Bottom Line
This paper provides critical guidance for pharmacometricians analyzing RTTE data when events may influence treatment discontinuation. The key insight is that time-varying exposure models (AUC(t)), while generally robust, fail when discontinuations precede events due to unobserved clinical worsening—a scenario likely under-diagnosed in practice. The proposed AUCavg + BlindedStudyTreatmentrank approach offers a practical solution for placebo-controlled studies, though it requires careful model development to characterize the empirical relationship between treatment rank and hazard. For studies without event-related discontinuations, AUC(t) remains preferred for its simplicity; when discontinuations follow events, AUC(t) still works; but when discontinuations precede events, the novel approach may be essential for unbiased ER estimation.

---

---

## 📊 Figures



```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: Illustration of BlindedStudyTreatmentrankas a covariate effect using a Scenario B simulation dataset. Left panel: Illustrates the relationship between the averag],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [FIGURE 2: Comparison of the true exposure-response (ER) slope (horizontal dashed line) versus the estimated ER slope and its 95% confidence interval (dot and error bars) f],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 3: Comparison of the true exposure-response (ER) slope (horizontal dashed line) versus the estimated ER slope and its 95% confidence interval (dot and error bars) f],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [FIGURE 4: Comparison of the true exposure-response (ER) slope (horizontal dashed line) versus the estimated ER slope and its 95% confidence interval (dot and error bars) f],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_05.jpg", width: 90%),
  caption: [FIGURE 5: Comparison of the true ER relationship (solid line) and the estimated ER relationship (dashed line) and its 95% confidence interval (gray area) for the RTTE mode],
  placement: auto,
) <fig-5>
#set page(flipped: false)
```

