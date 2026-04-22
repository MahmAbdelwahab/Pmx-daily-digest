---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: March 16, 2026

## Paper 1: Learning Covariate Relations in Disease Progression Models Using Symbolic Neural

### Bibliographic Information
- **Title**: Learning Covariate Relations in Disease Progression Models Using Symbolic Neural Networks
- **Authors**: Sundell J, Kjellsson M, Wellhagen G, et al.
- **Journal**: CPT: Pharmacometrics & Systems Pharmacology, 2026
- **DOI**: [https://doi.org/10.1002/psp4.70214](https://doi.org/10.1002/psp4.70214)

### Quick Take
This paper introduces symbolic neural networks (SNNs) as an automated approach for covariate model development in Markov chain disease progression models, demonstrating comparable predictive performance to traditional stepwise methods while using fewer covariates in a type 2 diabetes application. Pharmacometricians working on disease progression modeling, particularly those struggling with high-dimensional covariate selection or non-linear covariate relationships, should examine this novel machine learning integration that produces interpretable equations.

---

### Executive Summary
Sundell et al. present a paradigm shift in covariate modeling for disease progression Markov models by employing symbolic neural networks (SNNs) to simultaneously discover both relevant covariates and their functional forms without predefined parametric assumptions. Applied to a large Swedish type 2 diabetes registry (n=41,517), the SNN-derived model achieved predictive performance equivalent to a state-of-the-art manually developed model (Kunina model) while requiring only two covariates (age and disease duration) versus three (adding sex). This work addresses critical limitations in current stepwise covariate modeling approaches, namely combinatorial explosion with high-dimensional data and bias from restricted functional forms, offering a scalable automated alternative that produces interpretable equations through network pruning.

---

## ⚡ Methodological Snapshot
The authors developed a discrete-time Markov chain with five states representing type 2 diabetes progression (no complications, diabetic kidney disease [DKD], macrovascular complications [MVC], both complications, and death), where transition probabilities were modeled as functions of covariates through symbolic neural networks. Unlike conventional neural networks, SNNs employ custom activation functions (multiplication, power functions, division, sigmoid) across three layers, allowing the network to capture complex algebraic relationships that can be subsequently pruned into explicit mathematical equations. The training process involved minimizing a negative log-likelihood function accounting for interval-censored disease progression events and right-censored death times, using the ADAM optimizer in Julia's Lux framework. A novel pruning strategy iteratively removed network parameters (starting with 20 parameters, then 10, 5, 5, and subsequently 1 per iteration) until convergence criteria were met based on test data performance, naturally performing covariate selection by eliminating unimportant connections and yielding sparse, interpretable transition probability equations.

---

## 🏗️ Structural Model Breakdown
The disease progression model consists of a discrete-time Markov chain with five states: State 1 (type 2 diabetes without complications), State 2 (diabetic kidney disease, DKD), State 3 (macrovascular complications, MVC), State 4 (both DKD and MVC), and State 5 (death). The transition probability matrix P_\lambda is upper triangular, reflecting the irreversible nature of disease progression, where patients can transition from lower to higher states but not reverse (absorbing death state). Transition probabilities \lambda_{mn} from state m to state n are modeled using symbolic neural networks f_{mn} that map covariates (age, disease duration) through three layers with custom activation functions: the first layer permits multiplication and power operations, the second allows division and multiplication, and the third applies a sigmoid function to constrain outputs to valid probabilities [0,1]. The diagonal elements \lambda_{mm} represent the probability of remaining in the current state, calculated as 1 minus the sum of outgoing transition probabilities, ensuring row sums equal 1. The model assumes monthly time steps with interval censoring for disease progression events and right censoring for end of follow-up.

---

### Detailed Methodological Analysis

#### Modeling Approach
Discrete-time Markov chain with five states (T2D only, DKD, MVC, both complications, death) and upper triangular transition matrix. Symbolic neural networks with three layers and custom activation functions (multiplication, power, division, sigmoid) mapped covariates to transition probabilities. Stepwise pruning of dense networks yielded sparse, interpretable algebraic equations.

#### Data Sources
Swedish National Diabetes Register (2005-2013) containing 41,517 newly diagnosed type 2 diabetes patients. Data split into training (n=31,077, 75%) and validation (n=10,440, 25%) sets preserving transition representation. An additional 10% of training data served as test data for early stopping. Covariates included age, diabetes duration, BMI, HbA1c, triglycerides, HDL, LDL, systolic/diastolic blood pressure, and sex. Outcomes were interval-censored disease progression events (DKD, MVC) and right-censored death times.

#### Estimation Methods
Maximum likelihood estimation minimizing negative log-likelihood for discrete-time Markov chains with interval-censored events. Optimization performed using ADAM adaptive optimizer with learning rate 0.001 in Julia (v1.11) using Lux package (v1.12.4). Boundary constraints applied to ensure transition probabilities summed to \leq 1. Convergence criteria: test data loss improvement <0.01 for 35 consecutive iterations (initial training) or 25 iterations (during pruning).

#### Model Evaluation
Visual predictive checks (VPC) comparing Aalen-Johansen non-parametric state occupation probabilities between observed validation data and model simulations. Quantitative comparison with Kunina model using Brier score and Kullback-Leibler divergence at 1-year post-diagnosis. Bootstrap analysis with 1000 samples performed for uncertainty assessment.

#### Covariate Analysis
Automated covariate selection and functional form identification via symbolic neural network pruning. Initial networks were fully connected with all available covariates (age, disease duration, BMI, HbA1c, lipids, blood pressure, sex). Pruning iteratively removed parameters (20, then 10, then 5, then 5, then 1 per iteration) based on parameter importance until convergence, simultaneously performing covariate selection and equation simplification. Maximum 10 parameters permitted per transition function f_{mn}.

---

### Scientific Context & Motivation
Traditional covariate modeling in pharmacometrics relies on stepwise evaluation of predefined parametric functions (linear, power, exponential), which introduces investigator bias and scales poorly with high-dimensional covariate spaces due to combinatorial limitations. For disease progression modeling using multistate Markov chains, identifying covariate-transition probability relationships is fundamental for individual risk prediction, yet current methods may miss complex non-linear relationships or novel covariate interactions. This study bridges the gap between machine learning's pattern recognition capabilities and pharmacometrics' need for interpretable, mechanistically plausible models by adapting symbolic neural networks—neural networks with interpretable activation functions that can be pruned to human-readable equations—to discrete-time Markov chains, thereby automating the exhaustive search of covariate-function space while maintaining model transparency.

---

### Statistical Rigor Assessment
The study employs appropriate methods for large-scale registry data with interval censoring, using discrete-time Markov chains which naturally handle such data structures. The sample size (n=41,517) is robust for the complexity of the model. The split into training/validation/test sets (70%/25%/10% of training) with early stopping based on test data loss helps prevent overfitting, though cross-validation was not explicitly performed. The pruning strategy serves as natural regularization. However, the discrete-time framework assumes transitions occur at discrete intervals (monthly), which approximates the continuous nature of disease progression, and the comparison with the continuous-time Kunina model required alignment at specific time points. The handling of time-varying covariates (age allowed to increase) is appropriate but assumes covariate effects are instantaneous rather than cumulative.

---

## 📊 Key Findings
The SNN model identified age and disease duration (T) as the only significant covariates, omitting sex which was included in the comparison Kunina model. Final transition probability equations included complex non-linear forms not typically tested in conventional covariate modeling: for example, f_{12} = \sigma(-7.35 + 3.34 \cdot \text{AGE}^2) for DKD development, f_{13} = \sigma(-3.77 - 4.41/(1.61 \cdot \text{AGE})^{2.26 \cdot \text{AGE}}) for macrovascular complications, and f_{15} = \sigma(-5.1 + 2.93T + 3.96 \cdot \text{AGE} - 3.67 \cdot \text{AGE}^{-1.32 \cdot \text{AGE}}) for mortality. Despite using fewer covariates (2 vs 3), the SNN model achieved equivalent predictive performance to the Kunina model (Mean Brier score: 0.094 for both; Mean KL divergence: 0.178 vs 0.18). Visual predictive checks demonstrated good agreement between observed and predicted state occupation probabilities across all five states, though slight overprediction of State 2 occupancy was noted in later phases, potentially attributable to unmodeled therapy effects or sparse data.

---

## 💡 Clinical & Regulatory Implications
The methodology enables more accurate individual risk stratification for type 2 diabetes complications by capturing complex, non-linear covariate relationships that traditional linear or simple power models might miss. The identification of age and disease duration as primary drivers—while sex showed negligible impact in this framework—suggests that demographic risk factors may be adequately captured through age in this Swedish population. For clinical practice, the resulting model provides interpretable equations for transition probabilities that clinicians can use to estimate patient-specific risks of developing diabetic kidney disease, macrovascular complications, or death within specific timeframes. The automated nature of the method facilitates rapid model updating as new patient data becomes available, potentially supporting adaptive clinical decision support systems for diabetes management and personalized screening protocols.

---

### Strengths & Limitations

#### Strengths
- Novel integration of symbolic neural networks into pharmacometric disease progression modeling
- Automated discovery of functional forms without predefined parametric assumptions
- Scalable to high-dimensional covariate spaces avoiding combinatorial explosion
- Produces interpretable, human-readable mathematical equations
- Rigorous comparison with established state-of-the-art model on identical dataset
- Appropriate handling of interval-censored and right-censored data
- Open-source implementation in modern programming framework (Julia)

#### Limitations (Acknowledged by Authors)
- Discrete-time framework limits temporal resolution compared to continuous-time models
- Final expressions may vary with network initialization and pruning strategies
- Sex was not retained in final model despite known mortality associations in diabetes
- Therapy effects not modeled due to data unavailability
- Simultaneous estimation of random effects would be computationally demanding

#### Limitations (Expert Review)
- Limited external validation (single registry, Swedish population)
- No assessment of model calibration across subgroups or sensitivity analyses
- Uncertainty quantification relies on bootstrap rather than asymptotic standard errors or Bayesian credible intervals
- Potential for overfitting despite pruning given the flexible functional forms and lack of cross-validation
- Comparison with Kunina model complicated by different temporal frameworks (discrete vs continuous)
- Risk of over-pruning clinically relevant covariates if loss monitoring is insufficient

#### Generalizability
Findings are generalizable to other chronic progressive diseases with interval-censored data, though the specific transition probabilities apply to Swedish T2D populations. The methodology itself is highly generalizable across disease areas and could revolutionize covariate modeling in pharmacometrics, but requires external validation in diverse populations before clinical implementation.

---

### Key Equations

**Transition Probability Matrix**

$$
P_{\lambda} = \begin{pmatrix} \lambda_{11} & \lambda_{12} & \lambda_{13} & 0 & \lambda_{15} \\ 0 & \lambda_{22} & 0 & \lambda_{24} & \lambda_{25} \\ 0 & 0 & \lambda_{33} & \lambda_{34} & \lambda_{35} \\ 0 & 0 & 0 & \lambda_{44} & \lambda_{45} \\ 0 & 0 & 0 & 0 & 1 \end{pmatrix}
$$

Upper triangular transition probability matrix for the five-state Markov chain, where \lambda_{mn} represents the probability of transitioning from state m to state n. The structure reflects irreversible disease progression with death as the absorbing state.

**SNN Layer Operation**

$$
\mathbf{z}_l = W_l \mathbf{x}_l + \mathbf{b}_l \\ \mathbf{x}_{l+1} = g_l(\mathbf{z}_l)
$$

Forward propagation equations for layer l in the symbolic neural network, where W_l represents weight matrices, b_l bias vectors, and g_l custom activation functions.

**SNN Activation Functions**

$$
g_1(\mathbf{z}_1) = \begin{bmatrix} z_{11} \\ z_{12} \cdot z_{13} \\ |z_{14}|^{z_{15}} \end{bmatrix},   g_2(\mathbf{z}_2) = \begin{bmatrix} z_{21} \\ z_{22} \cdot z_{23} \\ \frac{z_{24}}{|z_{25}| + 1} \end{bmatrix},   g_3(\mathbf{z}_3) = \sigma(\mathbf{z}_3)
$$

Custom activation functions for the three layers of the symbolic neural network. g_1 permits linear, multiplicative, and power operations; g_2 allows division and multiplication; g_3 applies sigmoid to constrain outputs to [0,1] for probability interpretation.

**Likelihood Function**

$$
\mathcal{L}(\lambda | I, K) = \sum_{I^* \in I} \log \left( \sum_{k=k_1^*}^{k_2^*} \lambda \left[ 1 - \sum_{\substack{n=1 \\ n \neq m}}^N \lambda_{mn} \right]^k \right) + \sum_{k^* \in K} \alpha \log \lambda + k^* \log \left( 1 - \sum_{\substack{n=1 \\ n \neq m}}^N \lambda_{mn} \right)
$$

Negative log-likelihood function for discrete-time Markov model with interval-censored transitions (I) and right-censored observations (K). \alpha indicates whether a transition occurred (1) or censoring (0).

**Brier Score**

$$
\text{BS}(t) = \frac{1}{N_i} \sum_{i=1}^{N_i} (y_i(t) - \pi_i(t))^2
$$

Brier score for assessing predictive accuracy of state occupation probabilities at time t, where y_i(t) is the observed state indicator and \pi_i(t) is the predicted probability for patient i.

**Kullback-Leibler Divergence**

$$
\mathcal{KL}_i(P_i \| \pi_i) = \sum_{s=1}^{5} P_{i,s}(t) \log \frac{P_{i,s}(t)}{\pi_{i,s}(t)}
$$

Kullback-Leibler divergence measuring the difference between observed state occupation probabilities P_i and predicted probabilities \pi_i for patient i across all five states.

**Covariate Model Example: State 1 to 2**

$$
f_{12} = \sigma(-7.35 + 3.34 \cdot \text{AGE}^2)
$$

Final extracted symbolic equation for transition probability from State 1 to State 2 (DKD development) as a function of age, showing a quadratic relationship passed through sigmoid function.

**Covariate Model Example: State 1 to 3**

$$
f_{13} = \sigma\left(-3.77 - \frac{4.41}{(1.61 \cdot \text{AGE})^{2.26 \cdot \text{AGE}}}\right)
$$

Final extracted symbolic equation for transition probability from State 1 to State 3 (MVC development), showing a complex non-linear relationship with age in both base and exponent.

**Covariate Model Example: State 1 to 5**

$$
f_{15} = \sigma(-5.1 + 2.93T + 3.96 \cdot \text{AGE} - 3.67 \cdot \text{AGE}^{-1.32 \cdot \text{AGE}})
$$

Final extracted symbolic equation for transition from State 1 to State 5 (death), incorporating both disease duration (T) and age with exponential decay terms.


---

### Figures & Tables

- **Figure 1**: Illustration of the five-state diabetes disease progression model showing allowed transitions between states: State 1 (T2D only), State 2 (DKD), State 3 (MVC), State 4 (DKD+MVC), and State 5 (Death). Arrows indicate possible transitions with probabilities \lambda_{mn}.
  - *Significance*: Provides the structural framework for the Markov model, clearly depicting the irreversible progressive nature of diabetes complications and the competing risks structure.
- **Figure 2**: Schematic representation of the three-layer symbolic neural network architecture used to map covariates to transition probabilities. Shows custom activation functions including multiplication, power operations, division, and sigmoid functions across layers.
  - *Significance*: Illustrates the novel methodology, demonstrating how algebraic operations replace standard neural network activations to enable interpretable equation extraction through pruning.
- **Figure 3**: Visual predictive check comparing non-parametric observed state occupation probabilities (blue line and shaded area) with model predictions for the validation dataset over time.
  - *Significance*: Primary model validation demonstrating adequate predictive performance across all five states, though noting slight overprediction of State 2 in later phases.
- **Figure 4**: Distribution comparisons of Brier score and Kullback-Leibler divergence between the SNN model and Kunina model for the validation dataset at 1 year post-diagnosis.
  - *Significance*: Quantitative demonstration that the SNN model achieves equivalent predictive performance to the state-of-the-art comparison model despite using fewer covariates.
- **Table 1**: Patient demographics and baseline characteristics including age, diabetes duration, BMI, HbA1c, lipids, blood pressure, and sex distribution for the total cohort (n=41,517).
  - *Significance*: Provides essential context for the study population and confirms the large sample size supporting the complex modeling approach.
- **Table 2**: Predictive performance metrics comparing SNN model and Kunina model using Kullback-Leibler divergence and Brier score (mean, mode, median).
  - *Significance*: Key results table showing nearly identical performance metrics between models (e.g., mean BS 0.094 for both), supporting the conclusion that automated SNN selection achieves parity with expert modeling.

---

### Code & Reproducibility Assessment
Implementation disclosed in Julia language (version 1.11) using the Lux package (version 1.12.4) for neural networks. The ADAM optimizer with learning rate 0.001 was employed for loss function minimization. Source code is available via GitHub repository referenced as [16] in the publication. The Swedish National Diabetes Register data requires contact with M. Kjellsson for access due to privacy regulations.

---


### Future Directions
Future research should extend this methodology to mixed-effects frameworks to account for between-patient variability in transition probabilities, though computational demands will require optimization. Investigation of robustness to network initialization and alternative pruning strategies (e.g., Hessian-based covariate pre-screening) is needed to ensure consistent equation discovery. Application to other chronic diseases with high-dimensional biomarker data (e.g., oncology, cardiovascular) would validate generalizability. External validation in non-Scandinavian populations is essential to confirm transportability. Methodological extensions could include continuous-time frameworks, time-varying covariates with cumulative effects, and Bayesian SNN approaches for uncertainty quantification. Comparison with other machine learning methods (gradient boosting, random forests) for covariate selection would establish relative advantages. Finally, integration of treatment effects and dynamic therapy changes would enhance clinical utility for decision support systems.

---

### Expert Commentary
This work represents a significant methodological advancement at the intersection of machine learning and pharmacometrics, addressing the long-standing challenge of automated covariate functional form identification. The use of symbolic neural networks cleverly balances the 'black box' nature of deep learning with pharmacometrics' demand for interpretable, mechanistic relationships. The demonstration that automated selection can match expert-driven modeling with fewer covariates challenges traditional stepwise modeling paradigms. However, the field must carefully consider validation standards for ML-derived models—while the VPC appears reasonable, the lack of external validation and the sensitivity to pruning strategies require further investigation. The discrete-time framework, while computationally convenient, may limit application to diseases with rapid progression dynamics. This approach could be particularly valuable in early drug development when the functional form of covariate relationships is unknown, or in real-world evidence studies with numerous potential confounders. The omission of sex as a covariate, despite its known prognostic value in diabetes, warrants careful consideration—whether this reflects over-pruning or true lack of predictive value in this specific dataset requires scrutiny. Teaching point: Always validate ML-discovered relationships against clinical plausibility and existing literature; automated methods should augment, not replace, scientific judgment.

---

### Bottom Line
Symbolic neural networks offer a viable automated alternative to traditional stepwise covariate modeling in disease progression Markov models, capable of discovering complex non-linear relationships while maintaining interpretability. For practicing pharmacometricians, this method provides a tool to handle high-dimensional covariate spaces without combinatorial explosion, though careful validation of the resulting functional forms against clinical knowledge remains essential. The approach is best suited for large datasets with interval-censored outcomes where the functional form of covariate relationships is unknown or potentially complex, as demonstrated in this type 2 diabetes application where age and disease duration alone provided equivalent predictive performance to a more complex conventional model.

---

---

## 📊 Figures



```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: Illustration of the diabetes disease progression model. The probability to transition from state m to state n in each dis],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [FIGURE 2: Representation of the symbolic neural networks with three layers used to map covariates varphi to transition probabilities λmn],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 3: Visual predictive check for the validation data. Blue line and blue area is the median and range, respectively, of non-parametric state occupation probabilities],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_04.jpg", width: 90%),
  caption: [FIGURE 4: Comparison of Brier score (BS) and Kullback–Leibler divergence (KL) between the model produced by the symbolic neural networks (SNN) and the Kunina model based o],
  placement: auto,
) <fig-4>
#set page(flipped: false)
```

