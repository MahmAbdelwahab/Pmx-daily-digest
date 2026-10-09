---
layout: post
title: "An Open-Source Framework for Virtual Bioequivalence Modeling and Clinical Trial Design"
date: 2026-10-09
authors: "Hamadeh A, Pellowe M, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2025, 14(12)"
doi: "10.1002/psp4.70115"
paper_type: methodology
tags: [methodology, qsp, clinical-trial-design]
excerpt_text: "This tutorial introduces VBEToolbox, an open-source R package within the Open Systems Pharmacology framework that standardizes virtual bioequivalence (VBE) workflows. The package integrates in vitro and in vivo data to train mechanistic PK models via a nonparametric optimal design (NPOD) algorithm, then simulates virtual clinical trials to estimate the probability of demonstrating BE across crossover, replicate, and parallel designs. Two case studies (dermal testosterone and oral bupropion) illustrate the workflow and its key statistical considerations."
pdf_path: "/assets/digests/2026-10-09-an-open-source-framework-for-virtual-bioequivalence-modeling-and-clinical-trial/PMx_An_OpenSource_Framework_for_Virtual_Bioe_20261009.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This tutorial introduces VBEToolbox, an open-source R package within the Open Systems Pharmacology framework that standardizes virtual bioequivalence (VBE) workflows. The package integrates in vitro and in vivo data to train mechanistic PK models via a nonparametric optimal design (NPOD) algorithm, then simulates virtual clinical trials to estimate the probability of demonstrating BE across crossover, replicate, and parallel designs. Two case studies (dermal testosterone and oral bupropion) illustrate the workflow and its key statistical considerations.

---

### Executive Summary
The paper presents a four-step computational workflow for virtual bioequivalence assessment, implemented as the VBEToolbox R package. Step 1 develops and validates mechanistic PK models for reference (R) and test (T) formulations. Step 2 trains the R model using the NPOD algorithm, which learns a nonparametric posterior distribution of inter-individual variability (IIV) parameters from clinical PK data (D1) and demographic descriptors (D2), avoiding parametric distributional assumptions and explicitly handling parameter non-identifiability. Step 3 generates a virtual population by sampling from a Gaussian mixture model (GMM) fitted to the NPOD support points, conditioned on demographic covariates. Step 4 simulates virtual clinical trials of varying size and design, computing the geometric mean ratio (GMR) and 90% confidence intervals for AUC and Cmax against the 0.80–1.25 BE limits. The dermal case study (testosterone in petrolatum vs. ethylene glycol) demonstrated non-BE across all designs, while the oral case study (bupropion SR vs. ER) showed BE for AUC but not Cmax, illustrating how formulation-dependent release kinetics propagate into BE outcomes. The paper emphasizes the importance of distinguishing inter-individual variability from intra-subject variability (ICV/IaIV) and discusses Type I/Type II error control as a key area for future regulatory acceptance.

---

### Scientific Context & Motivation
Regulatory agencies and industry increasingly seek in silico alternatives to reduce human BE testing, particularly for rare diseases, specific populations, and drugs with long half-lives where recruitment or extended washout periods are challenging. Existing VBE approaches often rely on parametric assumptions about parameter distributions, which may misrepresent true inter-individual variability, or fail to systematically separate IIV from intra-subject variability (ICV/IaIV), obscuring the sources of simulated exposure differences. The paper addresses the need for a standardized, open-source, reproducible framework that integrates in vitro and in vivo data, mechanistically propagates uncertainty, and provides statistical power calculations for virtual BE trials. A key gap is the lack of a unified tool that guides users through model development, training, virtual population generation, and trial simulation with explicit treatment of parameter non-identifiability.

---

## ⚡ Methodological Snapshot
VBEToolbox implements a four-step virtual bioequivalence workflow within the Open Systems Pharmacology framework. Step 1 develops and validates mechanistic PK models for reference (R) and test (T) formulations, incorporating in vitro data (dissolution, skin permeation) and IVIVE principles. Step 2 trains the R model using the NPOD (Nonparametric Optimal Design) algorithm, which learns a weighted distribution of support points approximating the joint posterior of individual-specific parameters and IVIVE parameters from clinical PK data (D1) and demographic descriptors (D2), without parametric distributional assumptions. Step 3 fits a Gaussian mixture model to the support points and samples virtual individuals conditioned on demographic covariates, generating a virtual population with realistic IIV. Step 4 simulates virtual clinical trials of varying size and design (crossover, replicate, parallel), computes GMR and 90% CI for AUC and Cmax, and evaluates the probability of BE against the 0.80–1.25 limits. Intra-subject variability can be introduced either mechanistically at the parameter level or post hoc as ICV on PK metrics.

---

## 📐 Statistical Framework
The statistical framework rests on three pillars. First, the NPOD algorithm adopts a nonparametric Bayesian-style approach: rather than assuming a parametric family (e.g., log-normal) for IIV parameters, it places a discrete probability distribution over a grid of support points in the feasible parameter space and iteratively reweights these points to match the observed clinical data. This avoids identifiability assumptions and captures parameter correlations arising from model structure or data limitations. Second, a Gaussian mixture model is fitted to the weighted support points to enable smooth sampling of virtual individuals; the number of clusters K is user-selected (guided by AIC/BIC or visual inspection), and sampling is conditioned on demographic descriptors via component probabilities. Third, the BE evaluation follows the standard regulatory framework: the geometric mean ratio (GMR) of T to R for each PK metric (AUC, Cmax) and its 90% confidence interval are computed per the Balthasar (1999) method, with BE declared if the CI falls within 0.80–1.25. The framework distinguishes inter-individual variability (IIV, between subjects) from intra-subject variability (ICV/IaIV, within subjects across occasions), which is critical for crossover and replicate designs.

---

### Estimator Behavior
The NPOD algorithm returns a weighted distribution of support points rather than a single point estimate, providing a nonparametric characterization of the joint posterior of IIV and IVIVE parameters. This approach is robust to parameter non-identifiability, as correlations and dependencies between parameters are captured in the support point distribution. The estimator's behavior depends on the user-supplied feasible parameter bounds and the number of support points; the paper does not quantify convergence rates or the number of support points needed for stable approximation. The GMM sampling introduces additional approximation error, with cluster number K acting as a bias-variance trade-off parameter: too many clusters over-concentrate density around support points (under-representing IIV), while too few clusters over-smooth (over-representing IIV, widening prediction intervals). The GMR point estimates and 90% CIs from simulated trials showed expected behavior: replicate designs produced narrower CIs than crossover designs due to reduced standard error from multiple within-subject estimates, and larger trial sizes narrowed CIs as expected from standard asymptotic theory.

---

### Validation Design
Validation was conducted at multiple levels. Internal validation: the GMM-based virtual population was validated against data set D1 by comparing simulated plasma concentration ranges to observed data (Figure 4G for testosterone, Figure 6D for bupropion). External validation: the T product model was validated post hoc against independent measurements (Figure 4I for testosterone at 3 μg/cm2 dose, Figure 6F for bupropion ER). Model development validation: the MoBi skin absorption model was optimized to in vitro testosterone absorption data and externally validated against in vivo absorption rates. The VBE evaluation itself involved 500 simulated clinical trials per trial size (10–50 subjects) per design, with GMR and 90% CI distributions computed. The case studies served as benchmarks demonstrating the workflow's ability to detect known formulation differences (testosterone non-BE) and to distinguish metric-specific BE outcomes (bupropion AUC BE but Cmax non-BE).

---

### Applicability Boundaries
The workflow is applicable when: (1) clinical PK data (D1) and demographic descriptors (D2) for the reference product are available for NPOD training; (2) a mechanistic or semi-mechanistic PK model can be constructed for the drug; (3) in vitro data (dissolution, permeation) can inform the test product model; and (4) the test formulation shares the reference's release mechanism, justifying shared IVIVE parameters. The method works well for oral and dermal routes with rich reference data. It is less applicable when: (1) D1/D2 are unavailable to generic developers, increasing uncertainty and widening CIs; (2) the test formulation has a different release mechanism (requiring separate IVIVE validation); (3) intra-subject variability is poorly characterized (the current package relies on post hoc ICV or direct mechanistic IaIV, both with limitations); and (4) Type I error control is critical for regulatory decisions, as this is not yet established. The GMM cluster selection sensitivity means results depend on user choices, requiring careful internal validation.

---

### Comparison to Alternatives
Compared to the variability parameter space exploration method of Bego et al. (2017), which identifies plausible combinations of variability on sensitive parameters, the NPOD approach learns the full joint posterior distribution of IIV parameters directly from clinical data without requiring the user to pre-specify variability combinations. Compared to parametric mixed-effects models (e.g., as used by Saadeddin et al. and Purohit et al. for ICV estimation), NPOD makes no distributional assumptions and handles non-identifiability more gracefully, but lacks the formal inferential framework (e.g., standard errors, hypothesis tests) of parametric approaches. Compared to the FDA-approved topical dermatological VBE approach of Tsakalozou et al., this framework provides a more general, open-source, and standardized workflow. The post hoc ICV application to PK metrics follows the approach of Chung et al. (meta-analysis of 142 BE studies) and others, but the paper notes that mechanistic parameter-level IaIV may under-predict true variability from non-physiological study conduct sources. The key advantage is the unified, reproducible, open-source implementation; the key disadvantage is the lack of formal Type I error control and the sensitivity to user choices (GMM clusters, parameter bounds).

---

### Implementation Guidance
The VBEToolbox R package is available within the Open Systems Pharmacology (OSP) framework, with vignettes providing fully reproducible scripts for both case studies. Users should: (1) ensure availability of clinical PK data (D1) and demographic descriptors (D2) for the reference product; (2) develop and externally validate the mechanistic PK model (using PK-Sim for oral, MoBi for dermal); (3) run sensitivity analyses to identify individual-specific parameters influencing AUC and Cmax before NPOD training; (4) select the GMM cluster number using information criteria (AIC/BIC) or visual inspection, followed by internal validation against D1; (5) introduce intra-subject variability either mechanistically (parameter-level IaIV) or post hoc (ICV on PK metrics), with ICV estimated from crossover trials or meta-analyses; and (6) simulate 500+ virtual trials per design/size to obtain stable probability of BE estimates. Computational cost scales with the number of support points, virtual population size, and trial simulations; the paper does not report specific runtime benchmarks. The package is open-source, allowing extension (e.g., future IaIV learning from replicate designs).

---

## 📊 Key Findings
The VBEToolbox workflow successfully integrates mechanistic PBPK modeling with nonparametric statistical learning to produce VBE assessments. In the testosterone dermal case study, the petrolatum (R) and ethylene glycol (T) formulations were found non-bioequivalent for both AUC and Cmax under all three trial designs (crossover, replicate, parallel), with probability of BE < 0.05 for trial sizes 10–50. In the bupropion oral case study, the SR (R) and ER (T) formulations demonstrated BE for AUC (probability near unity for crossover/replicate designs, >90% for parallel designs ≥45 subjects) but not for Cmax (probability near zero under all designs), reflecting the faster release of the SR formulation. Replicate designs produced narrower confidence intervals than crossover designs due to reduced standard error from multiple within-subject estimates. The NPOD algorithm captured parameter dependencies and correlations arising from model structure and data limitations without identifiability assumptions. The choice of GMM cluster number materially affects virtual population characteristics and VBE outcomes, requiring internal validation against observed data.

---

### Strengths & Limitations

#### Strengths
- Nonparametric approach (NPOD) avoids restrictive parametric distributional assumptions about IIV parameters and explicitly handles parameter non-identifiability by returning a weighted distribution of support points rather than a single optimum
- Open-source R package within the OSP framework with reproducible vignettes, promoting standardization and transparency
- Systematic separation of inter-individual variability (IIV) from intra-subject variability (ICV/IaIV), addressing a common source of bias in VBE assessments
- Integration of in vitro data (dissolution, skin permeation) with in vivo PK data through mechanistic IVIVE, enabling extrapolation to untested scenarios
- Flexible trial design simulation (crossover, replicate, parallel) with explicit power calculations and GMR/90% CI evaluation against regulatory BE limits
- Demonstrated versatility across two distinct administration routes (dermal and oral) with different model structures

#### Limitations (Acknowledged by Authors)
- The number of clusters in the Gaussian mixture model must be user-selected; too many clusters cause overfitting and under-representation of IIV, while too few smooth out local distributional features
- The bupropion case study assumes identical gut permeability for both formulations post-dissolution, neglecting possible excipient-induced differences
- Clinical trial data sets D1 and D2 may be unavailable to generic drug developers, increasing uncertainty in IVIVE and widening VBE confidence intervals
- The current package version does not infer IaIV in mechanistic parameters from repeated-administration data; it relies on either direct mechanistic parameter-level IaIV or post hoc ICV application to PK metrics
- Type I error control methodology for PBPK-based VBE assessments is not yet established and requires further research

#### Limitations (Expert Review)
- The NPOD algorithm requires user-supplied initial bounds for the feasible parameter space, and the sensitivity of results to these bounds is not systematically explored
- The GMM sampling procedure introduces an additional layer of approximation whose interaction with NPOD support point uncertainty is not fully characterized
- The dermal case study used simulated plasma concentration profiles (derived from absorption rates and literature clearance/volume values) as data set D1 rather than actual subject-level plasma data, potentially limiting the realism of the IIV learning
- The post hoc ICV application to PK metrics assumes independence of ICV from formulation and dose, which may not hold in practice
- The paper does not provide formal statistical guarantees (e.g., coverage properties) for the GMR confidence intervals computed from simulated trials
- Computational cost of the NPOD algorithm and the number of support points required for stable posterior approximation are not quantified

#### Generalizability
The workflow is adaptable to empirical, mechanistic, or semi-mechanistic models and is demonstrated for dermal and oral routes, suggesting broad applicability across drug products. However, generalizability depends on the availability of adequate clinical PK data (D1, D2) for the reference product, the validity of the IVIVE assumptions for the test product, and the appropriateness of the mechanistic model structure for the drug class. The framework is most reliable when the reference product has rich clinical data and the test product shares the same release mechanism; it is less reliable for novel formulations with different release mechanisms or when clinical data are sparse.

---

### Key Equations

**Gaussian mixture model for virtual population sampling**

{% raw %}
$$
f(\theta) = \sum_{k=1}^{K} \pi_k   \mathcal{N}(\theta \mid \mu_k, \Sigma_k)
$$
{% endraw %}

The Gaussian mixture model fitted to the NPOD support points, where K is the number of clusters, π_k are mixture weights, and μ_k, Σ_k are cluster means and covariances. This distribution is sampled to generate virtual individuals' parameter values in Step 3.

**Component probability conditional on demographics**

{% raw %}
$$
P(k \mid d) = \frac{\pi_k   \mathcal{N}(d \mid \mu_k^d, \Sigma_k^d)}{\sum_{j=1}^{K} \pi_j   \mathcal{N}(d \mid \mu_j^d, \Sigma_j^d)}
$$
{% endraw %}

The probability of selecting mixture component k given demographic descriptor d, used in Algorithm 1 to bias sampling toward clusters consistent with the individual's demographic characteristics.

**Bioequivalence criterion (GMR 90% CI)**

{% raw %}
$$
\text{BE if } 0.80 \leq \text{GMR}_{T/R} \leq 1.25 \text{ and } 0.80 \leq \text{CI}_{90\%}(\text{GMR}_{T/R}) \leq 1.25
$$
{% endraw %}

The regulatory BE criterion applied to the geometric mean ratio of PK metrics (AUC, Cmax) and its 90% confidence interval, following the method of Balthasar (1999).

---

### Figures & Tables

- **Figure 1**: Overview of the four-step VBE workflow: PK model development, learning posterior distributions of IIV parameters via NPOD, virtual population simulation, and clinical trial simulation with VBE evaluation.
  - *Significance*: Defines the standardized workflow that the VBEToolbox package implements, showing data requirements (D1, D2) at each step.
- **Figure 2**: Illustration of the NPOD algorithm for approximating nonparametric distributions, showing the iterative reweighting of support points from initial equal probabilities.
  - *Significance*: Explains the core statistical learning mechanism that avoids parametric assumptions and handles parameter non-identifiability.
- **Figure 3**: Procedure for drawing samples of individual-specific parameters given demographic descriptors, showing the Gaussian mixture model sampling approach.
  - *Significance*: Demonstrates how the GMM bridges the NPOD support points to virtual population generation, a key methodological innovation.
- **Figure 4**: Testosterone case study: NPOD support points (A-C), GMM clustering with 2/4/6 clusters (D-F), internal validation against D1 (G), simulated R vs T profiles (H), and external validation of T model (I).
  - *Significance*: Shows the impact of cluster number selection on the virtual population and validates the model's predictive performance.
- **Figure 5**: Testosterone VBE results: GMR point estimate and 90% CI distributions for AUC and Cmax under crossover, replicate, and parallel designs (A-F), and probability of BE vs trial size (G).
  - *Significance*: Demonstrates the trial simulation output and confirms non-BE for both metrics across all designs, validating the workflow's ability to detect formulation differences.
- **Figure 6**: Bupropion case study: in vitro dissolution profiles (A), NPOD support points (B), joint distribution (C), internal validation of R model (D), simulated R vs T profiles (E), and external validation of T model (F).
  - *Significance*: Illustrates the oral PBPK application and the integration of dissolution data with IVIVE for VBE assessment.
- **Figure 7**: Bupropion VBE results: GMR and 90% CI distributions for AUC and Cmax under three designs (A-F), and probability of BE vs trial size (G).
  - *Significance*: Shows differential BE outcomes (BE for AUC, non-BE for Cmax), demonstrating how formulation release kinetics propagate into PK metric-specific BE conclusions.

---

### Code & Reproducibility Assessment
Fully reproducible scripts for both case studies are included as vignettes within the VBEToolbox R package and in Supporting Information S3, with continuous maintenance in the package's GitHub repository. The package is built within the Open Systems Pharmacology (OSP) framework, leveraging PK-Sim and MoBi models, and is open-source to enable extension and improvement.

---

### Supplementary Materials
Supporting Information S1 provides details on the MoBi dermal absorption model structure, assumptions, and development. Supporting Information S3 contains fully reproducible scripts for both case studies. The vignettes are continuously maintained in the package's GitHub repository.

---

### Future Directions
Key future directions include: (1) implementing IaIV learning in mechanistic parameters from replicate-design clinical data within the package; (2) developing PBPK-based methodology for estimating and controlling Type I error rates to support regulatory acceptance; (3) systematic guidance for GMM cluster selection, potentially automated via information criteria with validation; (4) extending the framework to additional routes of administration and drug classes; (5) exploring the sensitivity of VBE outcomes to NPOD parameter bounds and support point density; and (6) validating the workflow against prospective in vivo BE study outcomes.

---

### Expert Commentary
This paper represents a meaningful step toward operationalizing virtual bioequivalence in a regulatory-relevant context. The NPOD-based nonparametric approach to IIV learning is a principled alternative to parametric mixed-effects assumptions, particularly valuable when parameter identifiability is limited. The explicit treatment of the IIV/ICV distinction is methodologically sound and addresses a common source of overconfidence in VBE predictions. However, the regulatory utility hinges on the yet-unresolved Type I error control question; the paper correctly identifies this as the critical barrier. The GMM cluster selection sensitivity is a practical concern that users must address through careful internal validation. The open-source implementation within the OSP ecosystem is a significant contribution to reproducibility and standardization in this emerging field.

---

### Bottom Line
VBEToolbox provides a practical, open-source, and reproducible framework for virtual bioequivalence assessment that integrates mechanistic PBPK modeling with nonparametric statistical learning of inter-individual variability. Practitioners should use it to explore trial designs and sample sizes before committing to in vivo BE studies, but must carefully validate the GMM cluster selection, distinguish IIV from ICV/IaIV, and recognize that Type I error control for regulatory acceptance remains an open methodological question. The package is best suited for scenarios where reference-product clinical data are available and the test formulation shares the reference's release mechanism.

---

---

## 📊 Figures

![Overview of the VBE workflow.]({{ site.baseurl }}/assets/digests/2026-10-09-an-open-source-framework-for-virtual-bioequivalence-modeling-and-clinical-trial/figures/fig_01.jpg)

![Illustration of the NPOD algorithm for approximating nonparametric distributions.Top: The initial setup assumes identical probabilities for all support points. E]({{ site.baseurl }}/assets/digests/2026-10-09-an-open-source-framework-for-virtual-bioequivalence-modeling-and-clinical-trial/figures/fig_02.jpg)

![Procedure for drawing samples of individual-specific parameters for given values of demographic parameters. Left: The learning algorithm, used in Step 2, returns]({{ site.baseurl }}/assets/digests/2026-10-09-an-open-source-framework-for-virtual-bioequivalence-modeling-and-clinical-trial/figures/fig_03.jpg)

![(A–C) Support points returned by the NPOD algorithm approximating the joint distribution between the individual-specific parametersand the individuals' demograph]({{ site.baseurl }}/assets/digests/2026-10-09-an-open-source-framework-for-virtual-bioequivalence-modeling-and-clinical-trial/figures/fig_04.jpg)

![Results of the virtual bioequivalence assessment between the testosterone petrolatum (R) and ethylene glycol (T) formulations (from Step 4). A total of 500 trial]({{ site.baseurl }}/assets/digests/2026-10-09-an-open-source-framework-for-virtual-bioequivalence-modeling-and-clinical-trial/figures/fig_05.jpg)

![(A) In vitro dissolution profiles for bupropion from the sustained release (R) and extended release (T) formulations. (B) Support points returned by the NPOD alg]({{ site.baseurl }}/assets/digests/2026-10-09-an-open-source-framework-for-virtual-bioequivalence-modeling-and-clinical-trial/figures/fig_06.jpg)

![Results of the virtual bioequivalence assessment between the bupropion SR (R) and ER (T) formulations (from Step 4). A total of 500 trial runs were conducted for]({{ site.baseurl }}/assets/digests/2026-10-09-an-open-source-framework-for-virtual-bioequivalence-modeling-and-clinical-trial/figures/fig_07.jpg)