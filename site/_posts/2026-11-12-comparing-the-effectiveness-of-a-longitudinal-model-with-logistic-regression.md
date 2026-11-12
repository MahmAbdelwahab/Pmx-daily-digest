---
layout: post
title: "Comparing the Effectiveness of a Longitudinal Model With Logistic Regression for Binary Endpoints to Support Better Clinical Decision Making."
date: 2026-11-12
authors: "Donald Irby, Jennifer Hibma, Joanna C. Masters"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70374"
paper_type: methodology
tags: [methodology, dose-response, oncology]
excerpt_text: "This simulation study benchmarks discrete-time Markov models against static and event-based logistic regression (LR) across typical small- and large-molecule oncology development programs. Longitudinal Markov modeling consistently exhibited superior statistical power and reduced parameter estimation bias compared to LR, particularly in the presence of intermediate exposure-response relationships, smaller cohorts (N = 20 to 100), and treatment-emergent dose modifications. Crucially, the commonly proposed event-dependent exposure metric Cave,TE showed no performance advantage over static metrics in LR and suffered from causal confounding and power loss."
pdf_path: "/assets/digests/2026-11-12-comparing-the-effectiveness-of-a-longitudinal-model-with-logistic-regression/PMx_Comparing_the_Effectiveness_of_a_Longitu_20261112.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This simulation study benchmarks discrete-time Markov models against static and event-based logistic regression (LR) across typical small- and large-molecule oncology development programs. Longitudinal Markov modeling consistently exhibited superior statistical power and reduced parameter estimation bias compared to LR, particularly in the presence of intermediate exposure-response relationships, smaller cohorts (N = 20 to 100), and treatment-emergent dose modifications. Crucially, the commonly proposed event-dependent exposure metric Cave,TE showed no performance advantage over static metrics in LR and suffered from causal confounding and power loss.

---

### Executive Summary
Characterizing exposure-response (ER) relationships for binary efficacy and toxicity endpoints is foundational to clinical dose optimization, yet standard cross-sectional logistic regression models cannot account for time-varying exposure and treatment modifications without introducing bias. Using a comprehensive factorial simulation framework across small and large molecules, Irby and colleagues evaluated the estimation fidelity of discrete-time Markov models against logistic regression across multiple exposure metrics (Cave,D1, Cave,C1, Cave,SS, and Cave,TE). Across 12 core clinical scenarios evaluated at sample sizes of 20, 100, and 300 patients, Markov models substantially outperformed LR in intermediate ER scenarios (achieving 21% to 49% higher power at N = 100) and dramatically reduced relative estimation error (REE). Static LR metrics exhibited predictable failure modes: early metrics like Cave,D1 systematically overestimated effect sizes in accumulating drugs, while steady-state (Cave,SS) and cycle-1 metrics (Cave,C1) were prone to sign inversions (negative slope estimates) under high dose hold frequencies. Furthermore, the event-dependent metric Cave,TE demonstrated circular conditioning without providing empirical benefit over simpler static metrics, underscoring that longitudinal models cannot be replaced by summary metric heuristics when time-varying processes are present.

---

### Scientific Context & Motivation
Dose selection in oncology and specialty therapeutics increasingly relies on model-informed drug development (MIDD) paradigms such as FDA's Project Optimus. Cross-sectional logistic regression remains the default workhorse for binary endpoints (such as overall response or grade ≥3 adverse events). However, LR relies on collapsing dynamic systemic drug exposure into a single static scalar. When pharmacokinetics exhibit drug accumulation or when study designs permit treatment-emergent dose modifications (holds or reductions triggered by events), static metrics break the causal ordering of exposure preceding response. Although the average exposure up to the time of an event (Cave,TE) was proposed to mitigate this limitation by aligning the exposure observation window with the event time, theoretical biostatistical literature has highlighted that Cave,TE introduces reverse causation and conditioning on post-randomization outcomes. Despite conceptual warnings, empirical benchmarks comparing longitudinal mixed-effects transition models against LR across realistic early- and late-phase sample sizes and molecular classes have been lacking.

---

## ⚡ Methodological Snapshot
The paper examines the statistical efficiency and bias of cross-sectional logistic regression versus discrete-time Markov modeling for exposure-response (ER) analyses of binary endpoints. Cross-sectional LR models collapse dynamic pharmacokinetic profiles into single scalar metrics: average concentration over day 1 (Cave,D1), cycle 1 (Cave,C1), steady-state (Cave,SS), or cumulative exposure up to event time (Cave,TE). These approaches are contrasted with a two-state discrete-time Markov model (DTMM) where transition probabilities between non-event and event states are modeled on the logit scale as a function of continuous, time-varying drug concentration Cp(t) and parametric time-dependent functions.

The simulation framework mimics typical oncology drug development settings. Pharmacokinetics are simulated for both small molecules (1-compartment oral, 24-h half-life, 2-fold accumulation) and large molecules (2-compartment intravenous infusion, 2.5-week half-life, 2-fold accumulation). Clinical protocols incorporate 21-day cycles across 6 cycles, 3 escalating dose tiers, and realistic dose modification algorithms where qualifying adverse events trigger mandatory drug holds. True ER slopes are calibrated to produce null, intermediate, or strong clinical contrasts (e.g., event rates ranging from 20% to 80% across exposure quartiles). Estimation performance is evaluated across 100 trial replicates across three cohort sizes (N = 20, 100, 300).

Model evaluation centers on empirical statistical power (likelihood ratio test at α = 0.01), type I error control under the null hypothesis, and relative estimation error (REE) of the derived odds ratios. The study specifically evaluates whether event-dependent metrics like Cave,TE resolve the confounding introduced by dose holds, or whether explicit longitudinal transition modeling is mathematically required.

---

## 📐 Statistical Framework
The underlying data-generating process relies on a two-state discrete-time Markov transition framework with states S ∈ {0, 1} (where 0 is non-event and 1 is event). The probability of transitioning from state i at time t - 1 to state j at time t, P(S(t) = j | S(t-1) = i), is formulated via a logistic link function:

logit($P_{ij}$(t)) = β_0,ij + $E_{time}$(t) + θ_Slope · $C_{p}$(t)

where β_0,ij is the baseline log-odds of transition, $E_{time}$(t) is a sigmoidal Hill function governing temporal changes in event susceptibility (accommodating early transient toxicities via negative Tmax or delayed cumulative toxicities via positive Tmax), and θ_Slope is the true drug effect coefficient operating on the instantaneous model-predicted concentration $C_{p}$(t).

In contrast, the cross-sectional logistic regression models assume:

logit(P($Y_{i}$ = 1)) = α_0 + α_1 · $X_{i}$

where $Y_{i}$ indicates whether patient i experienced an event during the observation window, and $X_{i}$ is a scalar summary metric (Cave,D1, Cave,C1, Cave,SS, or Cave,TE). Causal confounding in Cave,TE arises because the upper limit of integration in $X_{i}$ = (1 / $T_{E}$) ∫_0^{$T_{E}$} $C_{p}$(u) du is a post-baseline random variable directly determined by $Y_{i}$ and the event onset process. In the presence of dose modifications, conditioning on $T_{E}$ induces collider stratification bias and disrupts the directionality of exposure driving response.

---

### Estimator Behavior
The discrete-time Markov estimator implemented via maximum likelihood (NONMEM FOCE Laplace with Likelihood option) exhibited consistent, well-behaved statistical properties: low estimation bias (median REE centered near 0%), tight interquartile spreads, and nominal type I error rates (<5% at α = 0.01). Markov models maintained high power (≥89%) even under extreme data sparsity (N = 20) for strong relationships.

In contrast, LR estimators exhibited severe metric-dependent bias and variance properties:
1. Cave,D1 systematically overestimated the drug effect across all non-null scenarios (positive REE), because it assigns pre-accumulation exposure levels to events driven by higher cumulative concentrations.
2. Cave,SS and Cave,C1 exhibited severe attenuation bias and frequent sign reversal (yielding OR < 1, or negative slope estimates) when dose modification rates were high. Under early onset in small molecules, holding doses in responding/toxic patients reduced their subsequent cumulative exposure, falsely making high-dose patients look like low-exposure individuals.
3. Cave,TE failed to restore efficiency, yielding lower power than static metrics in high dose-hold scenarios and producing inflated variance. At N = 300, all LR estimators converged toward asymptotic equivalence with the Markov model, demonstrating that large sample sizes can overcome efficiency losses, but cannot eliminate structural bias in point estimates.

---

### Validation Design
The validation study employed a factorial Monte Carlo simulation design across 100 replicates per scenario. The factor space encompassed:
- Modality / PK: Small molecule (oral, daily, rapid equilibrium) vs. Large molecule (IV Q3W, slow accumulation over 10-12 weeks).
- Cohort size: N = 20 (phase I dose escalation), N = 100 (phase II expansion), N = 300 (phase III registration).
- ER relationship: Null (P = 0.50 across all quantiles), Intermediate (P = 0.40, 0.50, 0.60 across 25th, 50th, 75th Cave,SS quantiles), Strong (P = 0.20, 0.50, 0.80).
- Event kinetics: Early onset (median day 15 for small molecule) vs. Late onset (median day 96 for large molecule).
- Dose modification frequency: Low modifications (threshold 0.8) vs. High modifications (threshold 0.4) triggering uniform dose holds.

Benchmark performance was evaluated by recording the proportion of converged runs with statistically significant positive slope parameters (power / type I error via likelihood ratio test at α = 0.01) and calculating the relative estimation error (REE) on the odds ratio relative to the simulated benchmark truth.

---

### Applicability Boundaries
The findings define explicit operational boundaries for clinical trial analyses:
- When to prioritize Markov/Longitudinal Modeling: Essential in phase I/II trials with limited sample size (N ≤ 100), when the anticipated ER relationship is intermediate or subtle, when events trigger dose interruptions or de-escalations, or when drug accumulation occurs over multiple dosing cycles.
- When Logistic Regression is Acceptable: LR is adequately powered and relatively robust only when sample sizes are large (N ≥ 300), true ER relationships are strong, or when dose modifications are virtually absent and accumulation is negligible.
- When Cave,TE Must Be Avoided: Cave,TE should not be used as an inferential metric in LR. It is fundamentally unsuited for regulatory dose-justification because it suffers from circular causal conditioning and offers no power advantage over static metrics under treatment-emergent dose holds.

---

### Comparison to Alternatives
Relative to standard cross-sectional logistic regression, Markov models leverage the entire longitudinal history of dosing, exposure fluctuations, and event transitions, converting repeated within-subject observations into increased statistical degrees of freedom. This confers a 20% to 50% absolute power advantage in realistic phase II settings. Compared to heuristic modifications of LR—such as using Cave,TE—longitudinal modeling avoids reverse-causality artifacts entirely. Furthermore, while LR models cannot be used for dynamic clinical forward simulations (e.g., evaluating alternative dose modification rules, intermittent dosing schedules, or delayed dose holds), longitudinal Markov models natively support forward stochastic clinical trial simulations to optimize clinical protocol management.

---

### Implementation Guidance
For pharmacometricians implementing these workflows:
1. Markov Modeling: Can be readily coded in NONMEM using $PRED or user-defined differential equations combined with the LAPLACE OBJECTIVE DATA=LIKE options. Ensure transition probabilities are constrained between 0 and 1 via standard logit link formulations. Initial parameter estimates for baseline log-odds should be initialized using empirical observed cycle-1 transition rates.
2. When Logistic Regression is Mandated: Do not rely on a single exposure metric. Simultaneously evaluate Cave,D1 (which serves as an upper bound on effect due to accumulation neglect) and Cave,SS/Cave,C1 (which serve as conservative or potentially attenuated bounds in the presence of dose holds). Explicitly correlate findings against nominal dose-response curves to detect metric-induced slope flattening.
3. Computational Efficiency: LR executes in seconds in R (glm), whereas 100 replicates of Markov estimation in NONMEM require several hours of compute time. However, for a single empirical clinical dataset, the Markov run time is negligible (minutes), rendering computational cost an invalid excuse for avoiding longitudinal models in decision-critical applications.

---

## 📊 Key Findings
Longitudinal Markov modeling demonstrated marked statistical and inferential superiority over logistic regression in scenarios with intermediate effect sizes, small sample sizes, and dose modifications. For intermediate ER relationships with N = 100, Markov models achieved 21–42% and 42–49% higher statistical power than the best-performing LR exposure metric for small and large molecules, respectively. At N = 20, Markov models were the only method capable of detecting strong ER relationships (power ≥ 89%), whereas all LR metrics yielded unacceptably high type II error rates (power < 20%). Across LR exposure metrics, Cave,D1 consistently overestimated odds ratios due to unaccounted drug accumulation, while Cave,C1 and Cave,SS produced negative slope estimates (spurious inverse ER relationships) when dose modification rates were high. Cave,TE failed to demonstrate any systematic performance advantage over static metrics and showed severe power degradation under high dose hold scenarios.

---

### Strengths & Limitations

#### Strengths
- Rigorous, factorial simulation study evaluating PK properties of both small molecules (1-compartment, rapid accumulation) and large molecules (2-compartment mAb, prolonged half-life).
- Systematic evaluation across multiple critical dimensions: ER slope strength (null, intermediate, strong), sample size (20, 100, 300), event onset kinetics (early vs. late), and dose modification rates.
- Clear methodological demonstration of the statistical hazards and causal confounding inherent to event-dependent summary metrics such as Cave,TE.
- Realistic incorporation of post-baseline dose holds based on adverse event occurrence, mimicking true phase I/II clinical trial dynamics.

#### Limitations (Acknowledged by Authors)
- Simulated data generation was conducted using a discrete-time Markov model, creating an intrinsic structural alignment that favors the estimation properties of the Markov model over LR.
- PK/PD simulations did not evaluate competing risks, dropout/attrition mechanisms, time-varying clearance (e.g., target-mediated drug disposition or disease-driven cachexia), or non-monotonic ER relationships.
- Dose modification logic was restricted to fixed-duration dose holds without dose-level de-escalations or titrations.
- Event incidence was fixed at approximately 50%, precluding evaluation of rare events (<5-10% incidence).

#### Limitations (Expert Review)
- The discrete-time Markov model was fitted in NONMEM using FOCE with the LAPLACE and LIKE options, but computational execution times, run failure rates, and sensitivity to initial estimates across replicates were not quantified.
- Interindividual variability was restricted to baseline PK clearance and volume without incorporating random effects on transition probabilities or drug potency slopes in the Markov estimation step.

#### Generalizability
The conclusions are directly applicable to phase I/II dose-escalation and expansion trials in oncology and immunology where repeated binary assessments (e.g., cycle-by-cycle toxicity or response) coincide with drug accumulation and exposure-driven dose interruptions.

---

### Key Equations

**Relative Estimation Error (REE)**

{% raw %}
$$
\mathrm{REE} = \frac{\mathrm{OR}_{\mathrm{E}} - \mathrm{OR}_{\mathrm{S}}}{\mathrm{OR}_{\mathrm{S}}} \times 100\%
$$
{% endraw %}

Quantifies the percentage bias in the estimated odds ratio (ORE) relative to the true simulated odds ratio (ORS) under the specific exposure contrast.

**Time-Varying Linear Drug Effect**

{% raw %}
$$
E_{\mathrm{drug}}(t) = \theta_{\mathrm{Slope}} \cdot C_{\mathrm{p}}(t)
$$
{% endraw %}

Direct linear pharmacological response component entering the logit-link transition probability in the discrete-time Markov model as a function of instantaneous plasma concentration Cp(t).

**Time-Dependent Baseline Transition Function**

{% raw %}
$$
E_{\mathrm{time}}(t) = \frac{T_{\mathrm{max}} \cdot t^{\mathrm{Hill}}}{T_{50}^{\mathrm{Hill}} + t^{\mathrm{Hill}}}
$$
{% endraw %}

Hill-type saturation function modifying baseline transition probabilities over time to capture early-onset (negative Tmax) or late-onset (positive Tmax) event trajectories.

---

### Figures & Tables

- **Figure 1**: Schematic visualization of the factorial simulation design crossing molecule type (small vs. large), ER slope strength (null, intermediate, strong), event onset (early vs. late), and dose modification rate (low vs. high).
  - *Significance*: Defines the multi-scenario parameter space capturing realistic drug development challenges across diverse modalities.
- **Figure 2**: Simulation and estimation workflow detailing PK simulation via mrgsolve, PD event generation using a two-state DTMM, subsequent estimation in R (logistic regression) and NONMEM (Markov), and extraction of power, type I error, and REE across 100 replicates.
  - *Significance*: Establishes the benchmarking pipeline that ensures fair comparison between cross-sectional and longitudinal estimators.
- **Figure 3**: Heatmap of statistical power and type I error rates across all 12 small-molecule scenarios at N = 100 comparing Markov modeling against Cave,D1, Cave,C1, Cave,SS, and Cave,TE.
  - *Significance*: Demonstrates the marked drop in power for LR metrics (falling as low as 9-18%) in intermediate ER settings with high dose modifications, where Markov modeling maintained 78% power.
- **Figure 4**: Boxplots of estimated odds ratios for small molecules (N = 100) illustrating the degree of overestimation by Cave,D1 and the occurrence of negative slopes (OR < 1) for Cave,C1, Cave,SS, and Cave,TE under high dose modification rates.
  - *Significance*: Visualizes the structural bias and instability of LR exposure metrics when dosing interruptions disrupt exposure trajectories.
- **Figure 5**: Heatmap of statistical power and type I error rates for large-molecule scenarios (N = 100) comparing Markov modeling to Cave,D1, Cave,SS, and Cave,TE.
  - *Significance*: Highlights that in monoclonal antibodies with slow elimination and late event onset, Cave,SS exhibits severe power loss (15% power vs 89% for Markov), while Cave,TE provides no recovery.
- **Figure 6**: Boxplots of estimated odds ratios across large-molecule scenarios (N = 100) showing consistent positive bias for Cave,D1 across non-null scenarios and severe downward bias for Cave,SS under late event onset with frequent dose holds.
  - *Significance*: Confirms that drug accumulation dynamics directly govern the direction and magnitude of estimation bias in static LR models.

---

### Code & Reproducibility Assessment
The simulation code was constructed using R v4.3.1 with mrgsolve v1.4.1 for PK/PD data generation, base R for logistic regressions, and NONMEM v7.5.0 (FOCE with LAPLACE/LIKE) for Markov estimation. While detailed mathematical specifications and simulation conditions are provided in the main text and supplementary material, complete analysis scripts and NONMEM control streams were not published in an open-access repository.

---

### Supplementary Materials
Supplementary material includes Figures S1 through S8 and Tables S1 through S7, detailing the full statistical distributions of REE, median odds ratios, and interquartile ranges across sample sizes N = 20 and N = 300, confirming the asymptotic convergence of methods at N = 300 and the severe breakdown of logistic regression at N = 20.

---

### Future Directions
Future research should benchmark longitudinal versus cross-sectional models under conditions of deliberate model misspecification (e.g., generating data via continuous-time hazard/survival frameworks while fitting discrete Markov models), assess the impact of dropout and informative censoring, evaluate performance for rare adverse events (<5% base rate), and extend the framework to semi-mechanistic models that simultaneously incorporate continuous longitudinal biomarkers driving downstream clinical binary transitions.

---

### Expert Commentary
This paper provides a much-needed biostatistical grounding to a long-simmering controversy in pharmacometrics. In recent years, investigators frequently turned to Cave,TE under the mistaken impression that it captured longitudinal information without the overhead of non-linear mixed-effects modeling. As the authors demonstrate, Cave,TE does not fix the fundamental flaw of cross-sectional modeling—it merely introduces collider-stratification and circular causal dependence, frequently eroding power. The dramatic performance difference at N = 20 and N = 100 is striking: in early-phase oncology, where cohort sizes are constrained and intermediate therapeutic windows dominate, using logistic regression risks discarding an active molecule (type II error) or advancing an unsafe dose due to biased effect slopes. While implementing NONMEM-based Markov models demands higher modeling acumen and longer turnaround, the investment is negligible compared to the financial and clinical costs of selecting an unoptimized phase III dosing regimen.

---

### Bottom Line
For binary clinical trial endpoints influenced by drug accumulation or dose modifications, longitudinal transition models (such as Markov models) should be prioritized over logistic regression whenever feasible. When logistic regression must be used due to time or resource constraints, analysts must evaluate multiple static exposure metrics alongside the dose-response relationship, avoid event-dependent metrics like Cave,TE due to reverse causality, and explicitly recognize that early metrics (Cave,D1) inflate effect estimates while steady-state metrics (Cave,SS) risk artificial relationship flattening or inversion.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The study was published in CPT: Pharmacometrics & Systems Pharmacology.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “The paper is classified under the methodology paper type.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “The study benchmarks discrete-time Markov models against static and event-based logistic regression across small- and large-molecule oncology development programs.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “When pharmacokinetics exhibit drug accumulation, static exposure metrics break the causal ordering of exposure preceding response.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **CONTRADICTED** — original: “Cave,D1 represents average concentration over day 1.” → correction: “the average concentration over the first dosing interval (Cave,D1)”
[^fc-6]: **CONTRADICTED** — original: “Cave,TE represents cumulative exposure up to event time.” → correction: “Recently, considerable attention has focused on the choice of exposure metric in LR analyses, with a particular emphasis on the average concentration up to the event time (Cave,TE) [3-6]. It is typically calculated as the area under the concentration-time curve up to the event or censoring time (for patients without an event) divided by the event or censoring time.”
[^fc-7]: **UNSUPPORTED** — original: “The two-state discrete-time Markov model models transition probabilities between non-event and event states on the logit scale.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **UNSUPPORTED** — original: “The discrete-time Markov transition framework utilizes states S in {0, 1}, where 0 represents non-event and 1 represents event.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-9]: **UNSUPPORTED** — original: “The Markov transition probability formula is logit(P_ij(t)) = β_0,ij + E_time(t) + θ_Slope · C_p(t).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-10]: **UNSUPPORTED** — original: “In the transition formula, β_0,ij represents the baseline log-odds of transition.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “E_time(t) can accommodate delayed cumulative toxicities via a positive Tmax parameter.” → correction: “In this Etime(t) function, the Tmax parameter modifies the event probability over time. For early onset scenarios, Tmax was negative, causing the event probability to start high and to decrease over time. For late onset scenarios, Tmax was positive (with the same absolute value) so that the event probability started low and increased over time.”
[^fc-12]: **UNSUPPORTED** — original: “Conditioning on T_E in the presence of dose modifications induces collider stratification bias.” → correction: “However, Cave,TE is also subject to bias due to causal confounding: it is calculated with the time of the event, which introduces a reverse dependence between it and the event [3, 4, 6]. In an ER analysis, this can disrupt the proper cause- and-effect relationship as informed by pharmacological understanding and lead to spurious results.”
[^fc-13]: **UNSUPPORTED** — original: “Cave,D1 overestimates effect size because it assigns pre-accumulation exposure levels to events driven by higher cumulative concentrations.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “Cave,SS and Cave,C1 exhibited severe attenuation bias when dose modification rates were high.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “Holding doses in responding or toxic small-molecule patients with early onset reduced subsequent cumulative exposure, causing high-dose patients to falsely resemble low-exposure individuals.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “Cave,TE produced inflated estimation variance.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **CONTRADICTED** — original: “At N = 300, all logistic regression estimators converged toward asymptotic equivalence with the Markov model.” → correction: “With respect to estimation accuracy, the relative ranking of methods based on REE was generally consistent across sample sizes; however, the variability of REE, as measured by its IQR, increased as the sample size decreased”
[^fc-18]: **UNSUPPORTED** — original: “Low dose modification frequency was simulated with an adverse event probability threshold of 0.8.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-19]: **UNSUPPORTED** — original: “High dose modification frequency was simulated with an adverse event probability threshold of 0.4.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-20]: **NUMERIC_MISMATCH** — original: “Markov models provide a 20% to 50% absolute power advantage over cross-sectional logistic regression in realistic phase II settings.” → correction: “For example, for intermediate ER relationships with 100 patients, the Markov model achieved 21% to 42% and 42% to 49% higher power than the best performing exposure metric with LR for the small and large molecules, respectively.”
[^fc-21]: **UNSUPPORTED** — original: “Longitudinal Markov models natively support forward stochastic clinical trial simulations to optimize protocol management.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-22]: **UNSUPPORTED** — original: “Markov modeling can be implemented in NONMEM using $PRED or user-defined differential equations with LAPLACE OBJECTIVE DATA=LIKE.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-23]: **UNSUPPORTED** — original: “Initial parameter estimates for baseline log-odds can be initialized using empirical observed cycle-1 transition rates.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-24]: **UNSUPPORTED** — original: “Logistic regression in R using glm executes in seconds.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-25]: **UNSUPPORTED** — original: “Estimation of 100 replicates of Markov models in NONMEM requires several hours of compute time.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-26]: **UNSUPPORTED** — original: “For a single empirical clinical dataset, Markov model run time is on the order of minutes.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-27]: **UNSUPPORTED** — original: “Logistic regression estimation was performed using base R.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-28]: **UNSUPPORTED** — original: “Complete analysis scripts and NONMEM control streams were not published in an open-access repository.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Visualization of the simulated scenarios. For a given molecule size (large or small), all combinations of the following factors were tested: strength of the ER relationsh]({{ site.baseurl }}/assets/digests/2026-11-12-comparing-the-effectiveness-of-a-longitudinal-model-with-logistic-regression/figures/fig_01.jpg)

![Simulation workflow. For each scenario, population PK models and a two-state DTMM were used to simulate the PK/PD data. Separate LR and Markov models were estimated. Prop]({{ site.baseurl }}/assets/digests/2026-11-12-comparing-the-effectiveness-of-a-longitudinal-model-with-logistic-regression/figures/fig_02.jpg)

![ER estimation results for the small molecule scenarios in trials of 100 patients. The heatmap displays the proportion of trial simulations (out of 100) that achieved a si]({{ site.baseurl }}/assets/digests/2026-11-12-comparing-the-effectiveness-of-a-longitudinal-model-with-logistic-regression/figures/fig_03.jpg)

![Odds ratios for the small-molecule scenarios in trials of 100 patients. An OR less than 1 corresponds to a negative slope estimate.]({{ site.baseurl }}/assets/digests/2026-11-12-comparing-the-effectiveness-of-a-longitudinal-model-with-logistic-regression/figures/fig_04.jpg)

![ER estimation results for the large molecule scenarios in trials of 100 patients. The heatmap displays the proportion of trial simulations (out of 100) that achieved a si]({{ site.baseurl }}/assets/digests/2026-11-12-comparing-the-effectiveness-of-a-longitudinal-model-with-logistic-regression/figures/fig_05.jpg)

![Odds ratios for the large molecule scenarios in trials of 100 patients. An OR less than 1 corresponds to a negative slope estimate.]({{ site.baseurl }}/assets/digests/2026-11-12-comparing-the-effectiveness-of-a-longitudinal-model-with-logistic-regression/figures/fig_06.jpg)