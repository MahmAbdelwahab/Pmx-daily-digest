---
layout: post
title: "Development of a Predictive Flow Through Cell Dissolution Method for Carbamazepine Modified-Release Tablets"
date: 2026-04-28
authors: "Laura Carvajal Barbosa, Sandra Milena Echeverry, Diana Marcela Aragón"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026, DOI: 10.1002/psp4.70241"
doi: "10.1002/psp4.70241"
paper_type: popk
tags: [popk, qsp, regulatory]
excerpt_text: "This paper develops a predictive in vitro dissolution method using USP Apparatus 4 for modified-release carbamazepine tablets, applying IVIVC principles with a two-step scaling approach. The optimized method achieved prediction errors below $10\\%$ for $C_{max}$ and $AUC_{0-t}$, demonstrating strong biopredictive performance. Pharmacometricians involved in formulation development or bioequivalence assessment for BCS Class II drugs will find this approach valuable for reducing in vivo trial risks."
pdf_path: "/assets/digests/2026-04-28-development-of-a-predictive-flow-through-cell-dissolution-method-for/PMx_Development_of_a_Predictive_Flow_Through_20260428.pdf"
retroactively_classified: false
---

### Quick Take
This paper develops a predictive in vitro dissolution method using USP Apparatus 4 for modified-release carbamazepine tablets, applying IVIVC principles with a two-step scaling approach. The optimized method achieved prediction errors below $10\%$ for $C_{max}$ and $AUC_{0-t}$, demonstrating strong biopredictive performance. Pharmacometricians involved in formulation development or bioequivalence assessment for BCS Class II drugs will find this approach valuable for reducing in vivo trial risks.

---

### Executive Summary
The study addresses a critical gap in generic drug development for poorly soluble compounds by establishing a biopredictive dissolution method for modified-release carbamazepine using USP Apparatus 4. Through a Box–Behnken experimental design, the authors optimized flow rate, glass bead quantity, and sodium lauryl sulfate concentration, with SLS concentration emerging as the dominant factor. The two-step scaling approach (Levy plot and time-scale alignment) enabled a Level A IVIVC with $r^2 = 0.9905$ and prediction errors of $-1.94\%$ for $C_{max}$ and $-6.09\%$ for $AUC_{0-t}$, meeting FDA criteria. The method successfully discriminated between immediate-release and modified-release formulations, confirming its utility as a development tool. While not a formal regulatory IVIVC due to single-formulation data, the approach provides a robust framework for formulation optimization and bioequivalence risk assessment.

---

### Scientific Context & Motivation
Carbamazepine is a BCS Class II drug (low solubility, high permeability) with a narrow therapeutic index, making dissolution the rate-limiting step for absorption. Existing pharmacopeial dissolution methods (USP Apparatus 1 or 2) often lack the discriminatory power needed to predict in vivo performance, especially for modified-release formulations. USP Apparatus 4 (flow-through cell) better mimics gastrointestinal hydrodynamics and has shown superior predictive ability for poorly soluble drugs, but no prior study had applied it to modified-release carbamazepine with a formal IVIVC framework. This work fills that gap by combining experimental design, deconvolution (Wagner-Nelson), and two-step scaling to create a predictive tool that can guide formulation development and reduce failed bioequivalence trials.

---

## ⚡ Methodological Snapshot
The study used a Box–Behnken experimental design to optimize three dissolution parameters (flow rate, glass bead amount, SLS concentration) for USP Apparatus 4. In vivo PK data from a literature crossover study (12 subjects) were deconvolved using the Wagner-Nelson method to obtain absorbed fractions. A two-step scaling approach (Levy plot + linear time alignment) was applied to align in vitro dissolution with in vivo absorption. IVIVC models were built for each of 15 experimental runs, and the best conditions were selected based on prediction errors for $C_{max}$ and $AUC_{0-t}$. The optimized method was validated by comparing predicted vs. observed PK parameters and by discriminating IR vs. MR formulations.

---

## 🏗️ Structural Model Breakdown
The structural model is not a traditional compartmental PK model but a series of linked equations: (1) Wagner-Nelson deconvolution yields $F_{abs}(t)$; (2) Weibull model describes $F_{diss}(t)$; (3) Levy plot transforms in vitro time to align with in vivo time; (4) linear IVIVC relates $F_{abs}$ to $F_{diss}$; (5) reconvolution with a one-compartment oral absorption model ($k_a$, $k_{el}$, $V_d$) predicts plasma concentrations. The final optimized IVIVC has $r^2 = 0.9905$ with slope near unity.

---

### Detailed Methodological Analysis

#### Modeling Approach
Wagner-Nelson deconvolution for in vivo absorption; Weibull function for dissolution profile fitting; two-step scaling (Levy plot + linear regression) for time alignment; linear IVIVC model ($F_{abs} = a + b \cdot F_{diss}$); reconvolution using Gohel's equation for plasma concentration prediction. Software: PKanalix 2024R1, Minitab 21.

#### Data Sources
In vivo data from Ruiz et al. (2001): 12 healthy male subjects, single-dose crossover, 200 mg Tegretol Retard, blood sampling up to 120 h. In vitro dissolution data from 15 Box–Behnken runs (each triplicate) using USP Apparatus 4 with UV quantification at 284 nm.

#### Estimation Methods
Wagner-Nelson parameters ($k_{el}$, $AUC$) estimated by non-compartmental analysis in PKanalix. Weibull parameters ($\alpha$, $\beta$) estimated by nonlinear regression. Linear regression for IVIVC and time scaling. Response surface modeling using ordinary least squares in Minitab.

#### Model Evaluation
Prediction errors for $C_{max}$ and $AUC_{0-t}$ calculated per subject and summarized. Final model evaluated against FDA criteria ($<10\%$ for individual parameters). Discriminatory power assessed via $f_1$, $f_2$, DE, and MDT. No internal validation (bootstrap/cross-validation) reported.

#### Covariate Analysis
Not applicable (no covariates in the IVIVC model). The Box–Behnken design identified SLS concentration as the only significant factor affecting prediction accuracy.

---

### Statistical Rigor Assessment
The Box–Behnken design with 15 runs (each triplicate) provides adequate power for identifying main effects. ANOVA confirms model significance ($p < 0.05$) and non-significant lack-of-fit ($p > 0.05$). Prediction errors were calculated at the individual subject level, which is appropriate. However, no confidence intervals or bootstrap resampling were performed on the final prediction errors, limiting assessment of uncertainty. The sample size for in vivo data (12 subjects) is modest but typical for bioequivalence studies. Missing data handling is not discussed (likely complete data).

---

## 📊 Key Findings
The optimized dissolution conditions (flow rate 10 mL/min, 0.6 g glass beads, 0% SLS) yielded an IVIVC with $r^2 = 0.9905$. Prediction errors for $C_{max}$ ($-1.94\%$) and $AUC_{0-t}$ ($-6.09\%$) were well within the FDA's $10\%$ threshold for Level A IVIVC. The method discriminated between IR and MR formulations: $f_1 = 15.8\%$, $f_2 = 38.6\%$, DE difference of $8\%$, and MDT difference of 10 h. SLS concentration was the only statistically significant factor ($p < 0.001$ for $C_{max}$, $p = 0.023$ for $AUC_{0-t}$), while flow rate and glass beads were not significant. The in vivo pharmacokinetic parameters ($C_{max}$ $3.14$ $\mu g/mL$, $AUC_{0-t}$ $252.48$ $\mu g \cdot h/mL$, $t_{max}$ 32 h) matched literature values, confirming the reliability of the reference data.

---

## 💡 Clinical & Regulatory Implications
The developed method provides a biopredictive tool that can guide formulation optimization for modified-release carbamazepine generics, potentially reducing the number of failed in vivo bioequivalence studies. The prediction errors below $10\%$ suggest that the method could support formulation screening and risk assessment. However, it does not replace in vivo bioequivalence studies for regulatory approval. For clinicians, the method indirectly supports consistent therapeutic outcomes by enabling development of bioequivalent generics with predictable release profiles.

---

### Strengths & Limitations

#### Strengths
- Systematic optimization using Box–Behnken experimental design with 15 runs, each in triplicate, providing robust response surface modeling
- Successful application of two-step scaling (Levy plot + time alignment) to achieve a high-quality IVIVC despite single-formulation data
- Prediction errors below $10\%$ for both $C_{max}$ and $AUC_{0-t}$, meeting FDA Level A IVIVC criteria
- Demonstrated discriminatory power between IR and MR formulations using $f_1/f_2$, DE, and MDT metrics
- Use of USP Apparatus 4, which better simulates GI hydrodynamics for poorly soluble drugs

#### Limitations (Acknowledged by Authors)
- Only one formulation (reference product) was evaluated, limiting the ability to establish a formal regulatory Level A IVIVC per FDA guidance (requires $\ge 3$ formulations with different release rates)
- In vivo data were obtained from a single literature source (Ruiz et al., 2001) with 12 healthy subjects, not from a concurrent study
- The Wagner-Nelson deconvolution assumes a one-compartment model with first-order elimination, which may not fully capture carbamazepine's complex disposition

#### Limitations (Expert Review)
- No internal validation (e.g., bootstrap, cross-validation) was performed on the final IVIVC model; only prediction errors were reported
- The optimized conditions used $0\%$ SLS, which may not reflect biorelevant media; the method's robustness at low SLS concentrations needs further testing
- The reconvolution equation (Equation 6) assumes first-order absorption ($k_a$), but the absorption profile from the Wagner-Nelson method is model-independent; this inconsistency could introduce bias
- Individual-level prediction errors were calculated but only mean values were reported; variability in predictions across subjects was not characterized
- No comparison with USP Apparatus 2 was performed to confirm the claimed superiority of Apparatus 4 for this formulation

#### Generalizability
The method is specific to carbamazepine modified-release tablets and the reference product (Tegretol Retard). While the approach (Box–Behnken + two-step scaling) is transferable to other BCS Class II drugs, the optimized conditions (especially SLS concentration) would need re-optimization for each drug. The single-formulation limitation restricts generalizability to other modified-release formulations of carbamazepine.

---

### Key Equations

**Wagner-Nelson Deconvolution**

{% raw %}
$$
F_{abs} = \frac{A_t}{A_\infty} = \frac{C_t + k_{el} \cdot AUC_t}{k_{el} \cdot AUC_\infty}
$$
{% endraw %}

Calculates the fraction of drug absorbed at time t from plasma concentration data, assuming a one-compartment model with first-order elimination.

**Weibull Dissolution Model**

{% raw %}
$$
F_{diss} = 1 - \exp\left(-\left(\frac{t}{\alpha}\right)^\beta\right)
$$
{% endraw %}

Describes the cumulative fraction dissolved as a function of time, where $\alpha$ is the scale parameter and $\beta$ is the shape parameter.

**Levy Plot Transformation**

{% raw %}
$$
t_{vitro} = \alpha \cdot \left(-\ln(1 - F_{abs})\right)^{1/\beta}
$$
{% endraw %}

Calculates the in vitro time equivalent to a given in vivo absorbed fraction, used to align dissolution and absorption time scales.

**Linear Time Scaling**

{% raw %}
$$
t_{vitro} = a + b \cdot t_{vivo}
$$
{% endraw %}

Linear regression relating scaled in vitro times to original in vivo times, where $a$ is intercept and $b$ is slope.

**IVIVC Linear Correlation**

{% raw %}
$$
F_{abs} = a + b \cdot F_{diss}
$$
{% endraw %}

Linear model relating absorbed fraction to dissolved fraction after time scaling, used to predict in vivo absorption from in vitro dissolution.

**Reconvolution Equation (Gohel)**

{% raw %}
$$
C_t = \frac{F_{abs} \cdot \text{Dose} \cdot k_a}{V_d \cdot (k_a - k_{el})} \cdot \left(e^{-k_{el} \cdot t} - e^{-k_a \cdot t}\right)
$$
{% endraw %}

Predicts plasma concentration from predicted absorbed fraction, assuming first-order absorption and elimination.

**Prediction Error**

{% raw %}
$$
PE = \frac{\text{Obs} - \text{Pred}}{\text{Obs}} \times 100
$$
{% endraw %}

Calculates percent prediction error for $C_{max}$ or $AUC_{0-t}$ comparing observed in vivo values to model-predicted values.

---

### Figures & Tables

- **Figure 1**: Dissolution profiles for 15 Box–Behnken experimental runs, showing percentage dissolved over 120 h
  - *Significance*: Illustrates the range of dissolution behaviors across different combinations of flow rate, glass beads, and SLS concentration; SLS concentration is visually the dominant factor.
- **Figure 2**: (a) In vivo absorbed fraction profile from Wagner-Nelson deconvolution; (b) Comparison of absorbed fraction with dissolved fractions from 15 runs
  - *Significance*: Shows the initial mismatch between in vitro dissolution and in vivo absorption, motivating the need for time scaling.
- **Figure 3**: (a) Scaled dissolved fraction profiles vs. absorbed fraction; (b) IVIVC linear correlations for each run; (c) Predicted vs. observed plasma concentration profiles
  - *Significance*: Demonstrates the two-step scaling effect and identifies runs 4, 6, and 8 as best predictors (lowest prediction errors).
- **Figure 4**: Response surface plots showing effects of flow rate, glass beads, and SLS on predicted $C_{max}$ and $AUC_{0-t}$
  - *Significance*: Confirms SLS concentration as the only significant factor; provides visual optimization of dissolution conditions.
- **Figure 5**: (a) Scaled vs. unscaled dissolved fraction for optimized conditions; (b) Final IVIVC linear correlation ($r^2 = 0.9905$); (c) Point-to-point correlation after scaling
  - *Significance*: Shows the optimized model's excellent fit and prediction accuracy, with prediction errors below $10\%$.
- **Table 1**: Summary of $r^2$, predicted $C_{max}$, $AUC_{0-t}$, and percent prediction errors for all 15 experimental runs
  - *Significance*: Quantifies the predictive performance of each run; run 4 had the lowest errors ($-8.8\%$ $C_{max}$, $-9.8\%$ $AUC_{0-t}$).
- **Table 2**: ANOVA results for $C_{max}$ and $AUC_{0-t}$ response surface models
  - *Significance*: Statistically confirms that SLS concentration is the only significant factor ($p < 0.05$), while flow rate and glass beads are not significant.
- **Table 3**: Prediction errors for optimized dissolution conditions: $C_{max}$ $-1.94\%$, $AUC_{0-t}$ $-6.09\%$
  - *Significance*: Demonstrates that the optimized method meets FDA Level A IVIVC criteria ($<10\%$ prediction error).

---

### Future Directions
Future work should extend this approach to multiple formulations (e.g., different release rates or strengths) to establish a formal Level A IVIVC suitable for biowaiver applications. Incorporating physiologically based biopharmaceutics modeling (PBBM) could further refine the in vitro-in vivo link. Validation with additional in vivo datasets (e.g., from generic formulations) would strengthen confidence. Exploring alternative deconvolution methods (e.g., numerical deconvolution) and comparing USP Apparatus 4 vs. Apparatus 2 head-to-head would clarify the method's advantages.

---

### Expert Commentary
This paper exemplifies a pragmatic application of IVIVC principles in a resource-constrained setting—single formulation, literature PK data, and a well-designed DoE. The two-step scaling approach is a classic technique that remains relevant, especially when direct point-to-point correlation fails. The authors correctly acknowledge that this is not a regulatory IVIVC but a development tool, which is an honest and important distinction. From a teaching perspective, this study is an excellent case study for how to optimize dissolution conditions using response surface methodology and how to apply Levy plots and time scaling. One concern is the use of $0\%$ SLS in the optimized method; while it worked for this batch, biorelevant media (e.g., FaSSIF/FeSSIF) might be more predictive across different formulations. The lack of internal validation (e.g., bootstrap confidence intervals on prediction errors) is a minor weakness. Overall, this is a solid contribution that will be useful for generic drug developers working on BCS Class II modified-release products.

---

### Bottom Line
This study provides a practical, development-stage biopredictive dissolution method for modified-release carbamazepine using USP Apparatus 4. The combination of experimental design optimization and two-step IVIVC scaling yields prediction errors below $10\%$, making it a valuable tool for formulation scientists to screen candidates before committing to in vivo bioequivalence studies. Pharmacometricians should note that while not a formal regulatory IVIVC, the methodology offers a risk-reduction strategy for generic development of poorly soluble drugs.

---