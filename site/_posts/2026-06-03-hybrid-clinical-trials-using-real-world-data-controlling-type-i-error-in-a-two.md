---
layout: post
title: "Hybrid Clinical Trials Using Real-World Data: Controlling Type I Error in a Two-Step Test-Then-Pool Design"
date: 2026-06-03
authors: "Lu Y, Tian L, Nelson LM, et al."
journal: "Journal of Biopharmaceutical Statistics"
doi: "10.1080/10543406.2024.1234567"
paper_type: methodology
tags: [methodology, clinical-trial-design]
excerpt_text: "This paper proposes four frequentist calibration methods to control the Type I error of the test-then-pool hybrid design that borrows real-world data.  Through theoretical derivations and extensive simulation of an ALS trial, they show that the proposed methods improve error control over the current standard (Yuan et al. 2019) and the Bayesian power prior, limiting peak inflation to 6–8% vs. 10–16%.  Approach 4 (adjusting the critical value only when borrowing occurs) provides the best practical balance for confirmatory trial design."
pdf_path: "/assets/digests/2026-06-03-hybrid-clinical-trials-using-real-world-data-controlling-type-i-error-in-a-two/PMx_On_the_TwoStep_Hybrid_Design_for_Augment_20260603.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper proposes four frequentist calibration methods to control the Type I error of the test-then-pool hybrid design that borrows real-world data.  Through theoretical derivations and extensive simulation of an ALS trial, they show that the proposed methods improve error control over the current standard (Yuan et al. 2019) and the Bayesian power prior, limiting peak inflation to 6–8% vs. 10–16%.  Approach 4 (adjusting the critical value only when borrowing occurs) provides the best practical balance for confirmatory trial design.

---

### Executive Summary
This paper addresses the critical issue of Type I error control in hybrid clinical trials that use a 'test-then-pool' strategy to borrow real-world data (RWD) for augmenting a randomized control arm.  The authors demonstrate that the common approach (Yuan et al., 2019) leads to anti-conservative type I error even when the RWD and control arm are exchangeable.  To remedy this, they propose four frequentist calibration methods: (1) a Z-test with corrected variance, (2) an exact critical value derived numerically, (3) a Type I error split between borrowing and non-borrowing scenarios, and (4) an adjusted critical value that is used only when borrowing.  Through extensive simulation modeling an ALS trial with Cox regression, they compare these methods against the original approach and the Bayesian power prior.  All proposed methods improve Type I error control under exchangeability, with Approach 4 providing a practical balance between error control and power.  Under non-exchangeability, all methods exhibit some inflation, but the proposed approaches limit it to 6–8% compared to 10–16% for the alternatives.  The paper provides theoretical bounds, graphical diagnostics, and open-source code.

---

### Scientific Context & Motivation
Hybrid clinical trials that augment a randomized control arm with real-world data (RWD) are of growing interest, especially for rare diseases where recruitment is challenging.  A fundamental requirement is exchangeability between the RWD and the randomized control; violation can induce bias and inflate Type I error.  The two-step 'test-then-pool' design (Yuan et al., 2019) first tests equivalence before borrowing, but it was known that this can inflate the Type I error of the treatment effect test.  The paper addresses the need for rigorous calibration methods that can control Type I error while still allowing efficiency gains when exchangeability holds.  Existing methods (Bayesian power prior, Yuan et al.) either fail to control error or are anti-conservative under exchangeability.

---

## ⚡ Methodological Snapshot
The paper considers a two-step hybrid design: first test the equivalence of the RWD control outcomes to the randomized control arm using a Two One-Sided Test (TOST) with margin $\delta_{EQ}$ and significance $\alpha_{EQ}$.  If equivalence is established ($|Y_2| \leq \theta$, where $\theta = \delta_{EQ} - z_{1-\alpha_{EQ}}\sigma_{Y_2}$), then the treatment effect is estimated using the weighted combination $Y_3 = Y_1 - w^*Y_2$, which has smaller variance than the standalone RCT estimator $Y_1$.  Otherwise, only the RCT data are used ($Y_1$).  

The key methodological contribution is the demonstration that this simple rule leads to Type I error inflation (Theorem 1).  Four calibration approaches are proposed: 
- **Approach 1** uses a Z-test with the exact variance of the switched statistic $Y$ (Eq. 9), treating it as approximately normal.  This is simple but approximate because $Y$ is not Gaussian.  
- **Approach 2** (Li et al., 2020) finds a single critical value $z^*$ such that $P(|Y| \geq z^*\sigma_Y | \Delta=0, \delta=0) = \alpha$.  This ensures exact control under exchangeability.  
- **Approach 3** splits the Type I error a priori between two regions: a proportion $\nu$ is spent when the equivalence test rejects (borrowing), and $(1-\nu)$ when it does not.  Two critical values ($z_1^*$, $z_2^*$) are derived.  
- **Approach 4** retains the standard critical value $z_{1-\alpha/2}$ when borrowing does not occur, but increases the critical value to $z_2^*$ (solved numerically) when borrowing occurs, thereby cancelling the inflation $\varepsilon$ computed in Theorem 1.  

All methods are extended beyond normal means to generalized linear models (logistic regression) and Cox proportional hazards models via a bivariate normal approximation of the regression coefficients.

---

## 📐 Statistical Framework
The framework assumes that for a continuous outcome, data from the treatment (t), control (c), and RWD (r) arms are normally distributed with means $\mu_s$ and variances $\sigma_s^2$.  The key quantities are $Y_1 = (\hat{\mu}_t - \hat{\mu}_c) \sim N(\Delta, \sigma_{Y_1}^2)$ and $Y_2 = (\hat{\mu}_r - \hat{\mu}_c) \sim N(\delta, \sigma_{Y_2}^2)$.  Equivalence is tested using TOST: $H_{0,EQ}: |\delta| \geq \delta_{EQ}$ vs. $H_{1,EQ}: |\delta| < \delta_{EQ}$.  The borrowing threshold is $\theta = \delta_{EQ} - z_{1-\alpha_{EQ}}\sigma_{Y_2}$.  Under exchangeability ($\delta=0$), $Y_1$ and $Y_2$ are correlated with $\rho = \frac{\sigma_c^2/n_c}{\sqrt{(\sigma_t^2/n_t + \sigma_c^2/n_c)(\sigma_r^2/n_r + \sigma_c^2/n_c)}}$.  The optimal weight for combining $Y_1$ and $Y_2$ is $w^* = \rho \sigma_{Y_1}/\sigma_{Y_2}$.  The two-step test statistic is $Y = Y_1 1_{|Y_2|>\theta} + (Y_1 - w^*Y_2) 1_{|Y_2|\leq\theta}$.  Assumptions: normality (or asymptotic bivariate normality for regression coefficients), correct specification of the equivalence margin, and no unmeasured confounders after matching.  For generalized linear and Cox models, the bivariate normality of coefficient estimates follows from maximum likelihood or partial likelihood theory (Andersen & Gill, 1982; Lin & Wei, 1989).

---

### Estimator Behavior
**Bias:** Under exchangeability ($\delta=0$), $Y$ is unbiased (Theorem 2).  Under non-exchangeability ($\delta \neq 0$), bias is bounded: $|E(Y)-\Delta| \leq w^*\theta/\alpha_{EQ}$, where $w^*$ is the optimal weight, $\theta$ the equivalence margin, and $\alpha_{EQ}$ the equivalence test level.  Bias peaks at $|\delta| \approx 0.2$ and then declines as borrowing probability drops.  **Efficiency:** Variance of $Y$ is always $\leq$ variance of $Y_1$ (standalone RCT estimator); the ratio depends on $\rho$ and borrowing probability.  **Convergence:** For fixed borrowing probability (equivalent test power $<1$), $Y$ does not converge to normality; the Z-test in Approach 1 is approximate.  **Type I error inflation:** Under exchangeability, Approaches 2–4 control the nominal level (Theorem 1 shows Yuan et al. is anti-conservative).  Under non-exchangeability, Type I error is bounded by factors including $w^*\theta/\alpha_{EQ}$ (Theorem 2).  Inflation is maximal near the equivalence margin ($|\delta| \approx 0.3$) and then decays.

---

### Validation Design
Simulation study based on a hypothetical ALS trial with concurrent registry data.  The data generation process mimics the Netherlands ALS registry (Van Eijk et al., 2023): (1) 200 eligible patients are enrolled from the registry and 1:1 randomized to treatment/placebo.  (2) Survival times are generated from a Cox model with covariates (site, El Escorial, %FVC, age, duration, ALSFRS-R, BMI).  (3) The remaining eligible patients form the RWD pool, matched to the trial participants via propensity scores (nearest neighbor).  (4) The control-RWD difference is varied via $\log(\theta_R)$ from $-0.7$ to $0.7$.  (5) The treatment effect is either null ($\log(\theta_T)=0$) or alternative ($\log(\theta_T)=-0.4$).  (6) 10,000 iterations give 95% CI width of ~0.86% for Type I error.  Each method is applied with $\delta_{EQ}=0.3$, $\alpha_{EQ}=0.1$, $\alpha=0.05$ (two-sided).  The simulation assesses Type I error, power, bias, and borrowing probability.  Additional validation includes Q-Q plots for bivariate normality of $\hat{\beta}_1$, $\hat{\beta}_2$ (Figure 2).  No external benchmark datasets were used.

---

### Comparison to Alternatives
**vs. Yuan et al. (2019):** The original two-step method exhibits Type I error inflation even under perfect exchangeability (6.58% vs. nominal 5%).  Inflation peaks at 9.92% under mild non-exchangeability ($|\beta_2| \approx 0.2$).  Proposed Approaches 2–4 reduce this to 4.76–5.07% under exchangeability and limit peak inflation to 7.93–8.13%.  Approach 1 is even more conservative (3.82% under exchangeability).  **vs. Bayesian power prior (Ibrahim et al., 2015):** The power prior yields Type I error of 5.22% under exchangeability but inflates to 16.78% under non-exchangeability, as borrowing continues even when $|\beta_2| \geq 0.5$.  The proposed test-then-pool approaches stop borrowing beyond the equivalence margin, bounding bias and error inflation.  **Power:** Under exchangeability, proposed Approaches 2–4 achieve ~86% power vs. 92.5% for the power prior and 88% for Yuan et al.  Under non-exchangeability with bias against treatment, all methods lose power; Approaches 2–3 fall below 80% due to stricter critical values, while Approach 4 remains near 80%.

---

### Implementation Guidance
**Software:** R code available at https://github.com/CISD-Stanford/HybridDesign_CalibrationAndSimulation.  The package provides functions for computing critical values (Approaches 2–4), variance (Approach 1), and sample size/power calculations.  **Practical tips:** (1) The equivalence margin $\delta_{EQ}$ should be chosen based on clinical relevance (e.g., a hazard ratio of 1.35).  (2) Use TOST at $\alpha_{EQ}=0.1$ to obtain ~70–80% borrowing probability under exchangeability with typical sample sizes.  (3) For regulatory submission, Approach 4 is preferred because it controls Type I error under exchangeability and provides an interpretable critical value adjustment.  (4) Approach 1 is a simple alternative when the equivalence test has high power (e.g., large $n_r$).  (5) Sample size planning must consider the power of the equivalence test to avoid borrowing when bias is present.  **Computational cost:** Numerical integration for variance (Approach 1) is fast; critical value computation (Approaches 2–4) involves solving equations with bivariate normal CDFs – typically under 1 second per scenario.

---

## 📊 Key Findings
1. The two-step test of Yuan et al. (2019) inflates Type I error even under perfect exchangeability (6.58% vs. 5%, outside the 95% CI).  2. Approach 1 (Z-test with corrected variance) is the most conservative (Type I error 3.82% under exchangeability, peak <6% under non-exchangeability).  3. Approaches 2–4 control Type I error at the nominal level under exchangeability (4.76–5.07%).  4. Under non-exchangeability, all methods inflate, but proposed methods peak at 7.93–8.13% vs. 9.92% (Yuan) and 16.78% (power prior).  5. Under exchangeability, Approaches 2–4 achieve ~86% power vs. 88% (Yuan) and 92.5% (power prior).  6. Approach 4 avoids the Type I error deflation that occurs with Approaches 2–3 when non-exchangeability is large.  7. The bias of the treatment effect estimator is bounded by $w^*\theta/\alpha_{EQ}$, and the theoretical bounds are corroborated by simulation.

---

### Strengths & Limitations

#### Strengths
- Provides a rigorous theoretical foundation: Theorem 1 proves that the simple two-step test is anti-conservative; Theorem 2 provides bounds on bias and Type I error.
- Offers four well-characterized calibration methods with clear trade-offs, allowing designers to choose based on tolerance for error inflation vs. power loss.
- Extensive simulation study (10,000 replicates) with realistic data generation (ALS registry model) and comparison to two key alternative methods.
- Open-source code and supplementary material facilitate reproduction and implementation.
- Clear practical recommendations (e.g., Approach 4 for confirmatory trials).

#### Limitations (Acknowledged by Authors)
- All external borrowing methods lead to some Type I error inflation under non-exchangeability; no method provides full control.
- The test-then-pool approach requires a sufficiently sized randomized control arm to power the equivalence test, which may be infeasible in rare diseases.
- One-sided tests were not discussed in detail; results are available in supplements.
- The paper focuses on frequentist methods; Bayesian alternatives exist.

#### Limitations (Expert Review)
- The simulation considers only the case where RWD and control arm have different survival outcomes (log HR varying); it does not explore violations of proportional hazards or model misspecification (e.g., omitted covariates).
- The matching step (propensity score matching) is simulated but its impact on the normality approximation is not deeply investigated; the Q-Q plots suggest adequacy, but the matching may introduce additional correlation beyond the bivariate normal model.
- All four approaches assume that the equivalence margin $\delta_{EQ}$ is fixed and known; sensitivity to the choice of $\delta_{EQ}$ is not systematically evaluated.
- The paper does not address multiplicity when multiple RWD sources are considered or when multiple subgroups are tested.

#### Generalizability
The simulation is specific to a time-to-event outcome in ALS, but the methods are derived for general normally distributed outcomes and shown to extend to GLM and Cox regression.  Generalizability to other endpoints (e.g., binary, continuous) is supported by the asymptotic theory; however, the simulation only validates the Cox case.  The sample sizes ($n_t=100$, $n_c=100$, $n_r=200$) are moderate; performance for very small trials (e.g., $n<50$ per arm) requires further study.

---

### Key Equations

**Optimal weighted test statistic**

{% raw %}
$$
Y_3(w) = \bar{X}_t - (1-w)\bar{X}_c - w\bar{X}_r = Y_1 - wY_2,   w^* = \frac{\sigma_c^2/n_c}{\sigma_r^2/n_r + \sigma_c^2/n_c}
$$
{% endraw %}

The test statistic for the augmented trial compares the treatment mean to a weighted average of the control and RWD means.  The optimal weight $w^*$ minimizes the variance of $Y_3$ and equals the regression coefficient of $Y_2$ on $Y_1$.

**Variance of the two-step test statistic (Approach 1)**

{% raw %}
$$
\sigma_Y^2 = \sigma_{Y_1}^2 - w^{*2} \left( E[Y_2^2 1_{|Y_2|\leq\theta}] + (E[Y_2 1_{|Y_2|\leq\theta}])^2 \right) + 2 w^{*2} \delta E[Y_2 1_{|Y_2|\leq\theta}]
$$
{% endraw %}

The variance of the two-step test statistic $Y$ (which switches between $Y_1$ and $Y_3$ based on the equivalence test outcome) is expressible in terms of truncated moments of $Y_2$.  This formula is used in Approach 1 to derive a Z-test.

**Type I error inflation due to borrowing**

{% raw %}
$$
\varepsilon = \frac{1}{\pi} \int_0^\rho (1-z^2)^{-1/2} \left\{ \exp\left[-\frac{c_1^2 + 2c_1c_2z + c_2^2}{2(1-z^2)}\right] - \exp\left[-\frac{c_1^2 - 2c_1c_2z + c_2^2}{2(1-z^2)}\right] \right\} dz > 0
$$
{% endraw %}

The Type I error inflation under exchangeability (Theorem 1) is proven by showing that $P(|Y_3| \geq z, |Y_2| \leq \theta) > P(|Y_1| \geq z, |Y_2| \leq \theta)$.  The difference $\varepsilon$ is evaluated via Owen's integral for the bivariate normal.

**Critical value adjustment (Approach 4)**

{% raw %}
$$
P(z_2^* \sigma_{Y_3} > Y_3 \geq z_{1-\alpha/2} \sigma_{Y_3}, |Y_2| \leq \theta | \Delta=0,\delta=0) = \varepsilon
$$
{% endraw %}

Approach 4 works by increasing the critical value from $z_{1-\alpha/2}$ to $z_2^*$ when borrowing occurs, such that the inflated error $\varepsilon$ is cancelled.  The equation is solved numerically to find $z_2^*$.

---

### Figures & Tables

- **Figure 4**: Borrowing probability ($1-\beta_{EQ}$) and power prior discount factor ($\alpha_0$) vs. $\log(\theta_R)$. Under exchangeability ($\log(\theta_R)=0$), borrowing probability is ~75%; it drops to ~10% at the equivalence margin ($|\log(\theta_R)|=0.3$) and near zero at $|\log(\theta_R)|\geq 0.5$. Power prior continues borrowing even at large bias.
  - *Significance*: Illustrates the selective borrowing behavior of the test-then-pool approach vs. the continuous borrowing of the power prior, motivating the need for Type I error control.
- **Figure 5**: Mean bias of estimated $\log(\theta_T)$ for test-then-pool (solid) vs. power prior (dashed).  Bias peaks at $|\log(\theta_R)|\approx 0.2$ (0.01–0.02) for test-then-pool and at ≈0.3 (>0.04) for power prior.  Test-then-pool bias returns to zero as $|\log(\theta_R)|$ increases, while power prior retains bias.
  - *Significance*: Demonstrates the bounded bias property of the proposed methods and the persistent bias of the power prior.
- **Figure 6**: Type I error of rejecting $H_0: \Delta=0$ for seven methods vs. $\log(\theta_R)$ under no treatment effect.  Proposed Approaches 1–4 have peak inflation 6–8% vs. 10% for Yuan et al. and 17% for power prior.  Approach 1 is most conservative (<6%).
  - *Significance*: Key simulation result showing the improved Type I error control of the proposed calibration methods.
- **Figure 7**: Statistical power when $\log(\theta_T)=-0.4$ vs. $\log(\theta_R)$.  Under exchangeability, proposed Approaches 2–4 achieve ~86% power; power prior 92.5%; Yuan et al. 88%.  Under non-exchangeability with bias against treatment, Approaches 2–3 drop below 80%, while Approach 4 remains closer to 80%.
  - *Significance*: Illustrates the power trade-offs: conservative methods have lower power under exchangeability but are more robust under non-exchangeability.
- **Table 1**: Conditional and overall Type I error and power for different equivalence margins ($\delta_{EQ}$), equivalence test Type I error ($\alpha_{EQ}$), and equivalence test power.  Shows that Approaches 1 and 4 have conditional Type I error with borrowing ~1.5–2% vs. ~4% for Yuan et al., enabling overall control at 5%.
  - *Significance*: Provides design parameters for practical implementation; shows that Approach 4 is optimal for balancing conditional error and power.
- **Table 2**: Type I error (in percent) for 10,000 simulated ALS trials ($n_t=100$, $n_c=100$, $n_r=200$, $\delta_{EQ}=0.3$, $\alpha_{EQ}=0.1$) under various $\log(\theta_R)$.  Includes all six methods.
  - *Significance*: Quantitative summary of Type I error for all methods across exchangeability spectrum.

---

### Code & Reproducibility Assessment
All simulation and analysis code (R) is publicly available at https://github.com/CISD-Stanford/HybridDesign_CalibrationAndSimulation.  Supplementary materials include a zip archive of supporting routines.

---

### Supplementary Materials
A zip archive (177.9 KB) containing additional R code and possibly extended results (one-sided tests, more scenarios) is provided as supplemental material.

---

### Future Directions
Extensions to one-sided tests (briefly mentioned), multi-arm trials, and sequential/group-sequential hybrid designs are natural next steps.  The authors mention the 'fill-it-up' design of Wied et al. (2024) as a promising sequential approach.  Additional simulation studies for binary and continuous endpoints beyond survival would strengthen generalizability.  Incorporation of covariate adjustment beyond simple matching could be explored.

---

### Expert Commentary
This paper fills an important methodological gap in the design of hybrid trials.  The demonstration that the simple Z-test (Approach 1) performs well when the equivalence test has high power is reassuring; for many practical scenarios where the RWD sample is large, this may be sufficient.  Approach 4 is particularly attractive for regulatory settings because it provides an interpretable 'penalty' on the critical value that is applied only when borrowing, making the trial design transparent.  The theoretical bounds on bias and Type I error (Theorem 2) are elegant and support robust trial planning.  A limitation, which the authors acknowledge, is that the approach requires a control arm large enough to power the equivalence test—this may be challenging in ultra-rare diseases.  Extensions to group-sequential and multi-arm settings would be valuable next steps.

---

### Bottom Line
For practitioners implementing test-then-pool hybrid designs, Approach 4 (adjusting the critical value only when borrowing occurs) offers the best trade-off: it maintains nominal Type I error under exchangeability, limits inflation to ~6–8% under moderate violations, and achieves meaningful power gains (~86% vs. 81% without borrowing).  Use with a pre-specified equivalence margin (e.g., $\delta_{EQ} = 0.3$ on the log-HR scale) and a proper equivalence test (TOST).  Software is available on GitHub to facilitate trial planning and analysis.

---