---
layout: post
title: "Population Physiologically-Based Pharmacokinetic Modeling to Determine Ontogeny: A Quantitative Clinical Pharmacology Example in Pediatric Rare Disease"
date: 2026-05-30
authors: "Cleary Y, Gertz M"
journal: "Clinical Pharmacology & Therapeutics (published online ahead of print), 2025"
doi: "10.1002/cpt.3629"
paper_type: methodology
tags: [methodology, pbpk, pediatrics]
excerpt_text: "This paper proposes a population PBPK modeling approach to estimate in vivo DME/transporter ontogeny from sparse pediatric PK data, illustrated with risdiplam (FMO3 ontogeny). The method integrates PBPK structure with nonlinear mixed-effects modeling to overcome ambiguous in vitro ontogeny data, and provides a workflow for prospective pediatric extrapolations and uncertainty assessment."
pdf_path: "/assets/digests/2026-05-30-population-physiologically-based-pharmacokinetic-modeling-to-determine-ontogeny/PMx_Population_PhysiologicallyBased_Pharmaco_20260530.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This paper proposes a population PBPK modeling approach to estimate in vivo DME/transporter ontogeny from sparse pediatric PK data, illustrated with risdiplam (FMO3 ontogeny). The method integrates PBPK structure with nonlinear mixed-effects modeling to overcome ambiguous in vitro ontogeny data, and provides a workflow for prospective pediatric extrapolations and uncertainty assessment.

---

### Executive Summary
The authors present a population PBPK modeling framework that merges elements of whole-body PBPK and population PK modeling to estimate drug-metabolizing enzyme (DME) and transporter ontogeny functions directly from clinical PK data in children and adults. Using risdiplam (FMO3 substrate) in spinal muscular atrophy as a case study, they demonstrate how six structural ontogeny models consistently predicted ~threefold higher FMO3 activity in children aged ≥4 months vs. adults, resolving discrepancies among in vitro reports. The method preserves physiological plausibility (well-stirred liver model, age-dependent organ scaling) while enabling standard NLMEM diagnostics (bootstrap, VPC). The paper includes a stepwise workflow for future applications, emphasizing estimation under uncertainty and rational uncertainty propagation via multiple retained models.

---

### Scientific Context & Motivation
Pediatric PBPK modeling requires reliable ontogeny functions for DMEs and transporters, but in vitro/in vivo ontogeny data are often inconsistent across studies due to differences in sample size, age distribution, tissue quality, and analytical methods. Existing in vivo ontogeny derivation using deconvoluted clearance values has limitations from sparse sampling and methodological assumptions. There is no consensus on handling conflicting ontogeny data, which hampers regulatory acceptance of pediatric PBPK models. A data-driven approach that estimates ontogeny directly from target population PK data while retaining physiological structure could fill this gap.

---

## ⚡ Methodological Snapshot
Population PBPK modeling integrates physiologically-based clearance expressions (well-stirred liver model, age-dependent organ weights, MPPGL, protein binding) into a nonlinear mixed-effects model. Adult drug-dependent parameters (fm values for each enzyme, $CL_{int}$ scaling) are verified against clinical data and carried forward to the pediatric model. Age-dependent physiological parameters are scaled as in whole-body PBPK. The ontogeny of the target DME/transporter is estimated by fitting the model to pediatric (and adult) sparse PK data, using standard NLMEM estimation (e.g., FOCE or SAEM). Multiple structural ontogeny models are tested to capture uncertainty in the age-activity relationship. The final models are evaluated by goodness-of-fit plots, VPC, and bootstrap, then retained for uncertainty propagation in extrapolations.

---

## 📐 Statistical Framework
Assumes a normal or lognormal distribution for random effects on $CL_{int}$, volume, and absorption parameters. Between-subject variability (BSV) is modeled exponentially. Residual unexplained variability (RUV) is typically additive plus proportional. The likelihood is approximated by FOCE or SAEM in NONMEM or similar software. The well-stirred liver model provides a physiologically-based structural link between age, organ size, enzyme abundance, and clearance, reducing the number of empirical parameters. Identifiability is achieved by fixing known parameters (CYP3A ontogeny, protein binding, liver scaling factors) and estimating only the ontogeny of the target enzyme. The six structural ontogeny models differ in parametric form (sigmoid $E_{max}$, Gompertz, power, exponential, etc.), each with 2–4 parameters. The theoretical basis is that age-dependent changes in $CL_{int}$ can be attributed to enzyme abundance/activity per unit of liver, after accounting for liver size and blood flow changes.

---

### Estimator Behavior
For the risdiplam case, all six ontogeny models converged and produced precise parameter estimates (RSE typically <30-50%). Consistency of the ontogeny trajectory across models (≥4 mo) suggests the estimator is robust to structural model choice in the well-supported age range. In the sparse data region (<4 mo), estimates diverged, indicating high sensitivity to structural assumptions and lack of identifiability. Bootstrap results showed adequate precision. No explicit bias assessment via simulation-estimation was presented, but the independent agreement with one in vitro study (Nishimura & Fujii) suggests biological plausibility. For low extraction drugs, the signal-to-noise ratio for estimating $CL_{int}$ is reduced; this may increase estimator variance and require more data.

---

### Validation Design
The primary validation is through (1) convergence and precision of parameter estimates (bootstrap), (2) goodness-of-fit plots (population and individual predictions vs. observations), and (3) visual predictive check (VPC) showing that model predictions capture central tendency and variability across age bins. The paper does not report a dedicated simulation-estimation study (i.e., evaluating bias and coverage). External validation was limited: the estimated FMO3 ontogeny was compared qualitatively to an independent in vitro study. The case study is a real data application rather than a controlled simulation study. For prospective DDI extrapolations, the authors performed scenario analyses across six ontogeny models to assess the impact of uncertainty on DDI predictions.

---

### Applicability Boundaries
Works well when: (1) adult ADME is well-characterized with verified fm values for each pathway; (2) the drug is a selective (or near-selective) substrate for the target DME/transporter; (3) pediatric data span an informative age range; (4) absorption and distribution are age-independent or can be modeled empirically without bias; (5) protein binding is age-independent. Does not work well when: (1) multiple elimination pathways with uncertain ontogeny; (2) extremely sparse data or narrow age range; (3) high extraction drugs where $CL$ depends more on hepatic blood flow than $CL_{int}$; (4) DDI with inhibitors/inducers that confound ontogeny estimation; (5) active transporters with unknown ontogeny involved in absorption/distribution. The method is best suited for low-to-moderate extraction ratio drugs.

---

### Comparison to Alternatives
Compared to whole-body PBPK with fixed literature ontogeny: population PBPK allows estimation from target population data, reducing reliance on ambiguous in vitro data, and enables standard NLMEM diagnostics (bootstrap, VPC) which are more mature for regulatory acceptance. Compared to empirical PPK (e.g., power model on $CL$ vs. age): population PBPK provides mechanistic interpretability ($CL_{int}$ scaled by liver size, MPPGL) enabling extrapolation to unstudied ages, other substrates, or DDI scenarios. Compared to deconvolution/hepatic $CL_{int}$ methods: population PBPK uses all individual PK data simultaneously, handles sparse sampling better, and provides uncertainty estimates. The main disadvantage is increased model complexity and the need for verified adult ADME parameters.

---

### Implementation Guidance
Recommended software: NONMEM (or Monolix, nlmixr2) for NLMEM estimation. Requires implementation of the well-stirred liver model as a user-defined differential equation system (ADVAN6/9 in NONMEM). Age-dependent covariates (liver weight, MPPGL, $Q_h$, RBP) can be coded as continuous functions of age (e.g., Johnson et al., 2006 formulas). Empirical absorption (e.g., first-order with lag) and distribution (one- or two-compartment with allometric scaling on V) models are used. Computational cost is modest (similar to typical PPK models; minutes to run). Practical tips: (1) Ensure adult model verification of fm values via DDI and mass balance studies; (2) Start with fixed CYP3A ontogeny (e.g., Salem or Upreti functions) if CYP3A is a minor pathway; (3) Test multiple structural ontogeny models (sigmoid $E_{max}$, Gompertz, power, exponential) and use AIC/BIC but also retain models with equivalent fit for uncertainty; (4) Perform bootstrap (at least 200 replicates) for parameter precision; (5) For age ranges with sparse data, propagate all plausible ontogeny models in prospective simulations.

---

## 📊 Key Findings
1) Population PBPK modeling with risdiplam estimated in vivo FMO3 ontogeny consistently across six structural models, showing ~3-fold higher activity in children ≥4 months vs. adults, peaking at ~2 years. 2) The method resolved ambiguities among three prior in vitro FMO3 ontogeny reports: one had shown higher activity in children, while the two larger studies showed monotonic increases with age. 3) All six models provided adequate parameter precision and predictive performance across ages ≥4 months; differences in infants <4 months reflected sparse data and were handled via scenario uncertainty analysis. 4) The estimated ontogeny was incorporated into whole-body PBPK to support negligible CYP3A-mediated DDI risk labeling in pediatric SMA patients. 5) A generalizable workflow is proposed for future applications, including fixing well-known ontogenies (e.g., CYP3A) while estimating uncertain ones, and retaining multiple plausible models for uncertainty propagation.

---

### Strengths & Limitations

#### Strengths
- Direct estimation of in vivo ontogeny from target population PK data resolves inconsistencies from in vitro reports.
- Maintains physiological consistency with whole-body PBPK (well-stirred liver, MPPGL scaling, age-dependent organ weights), ensuring face validity.
- Rigorous evaluation of six structural ontogeny models allows uncertainty quantification.
- Standard NLMEM diagnostics (bootstrap, VPC) can be applied, leveraging mature regulatory acceptance of population PK methods.
- Clear workflow provided for stepwise application to other drugs/enzymes.
- Case study (risdiplam) is clinically relevant with rich data (525 subjects, 2 months–61 years).

#### Limitations (Acknowledged by Authors)
- Sparse data in infants <4 months limited ontogeny resolution and required scenario-based uncertainty analysis.
- The estimated FMO3 ontogeny could not be externally validated against other FMO3 substrates.
- Empirical selection of structural ontogeny models was not automated.
- Method depends on available data; extremely sparse or limited age-range data may preclude reliable estimation.
- For low hepatic extraction drugs like risdiplam, detecting enzyme maturation is challenging due to limited signal.

#### Limitations (Expert Review)
- The population PBPK model still uses empirical absorption and distribution components, which may introduce bias if age dependence in those processes is present but unmodeled.
- The reliance on fixing CYP3A ontogeny to well-established models assumes those models are correct for the specific pediatric population (SMA), which may not be fully verified.
- No formal structural identifiability analysis was presented for the population PBPK model parameters.
- The workflow's success depends on the availability of adult quantitative ADME verification (fm values), which may not be available early in development.
- Bayesian frameworks mentioned but not implemented; the proposed frequentist approach may struggle with boundary constraints on ontogeny parameters.

#### Generalizability
The method is broadly applicable to any DME/transporter where the drug is a selective substrate and adult ADME data are well characterized. It requires sufficient pediatric data across an informative age range. The risdiplam case demonstrates feasibility for low hepatic extraction drugs; applicability to high extraction drugs or drugs with multiple unclear elimination pathways would need additional validation. The approach is especially suited for rare disease settings where prospective PBPK may be uncertain.

---

### Key Equations

**Well-stirred liver model for hepatic clearance**

{% raw %}
$$
CL_{h} = Q_{h} \times \frac{f_{u,B} \times CLint}{Q_{h} + f_{u,B} \times CLint}
$$
{% endraw %}

Describes hepatic clearance as a function of hepatic blood flow (Q_h), unbound fraction in blood (f_u,B), and intrinsic clearance (CLint), used in both population PBPK and whole-body PBPK models.

**FMO3 ontogeny structural model (sigmoidal Emax example)**

{% raw %}
$$
Ontogeny_{FMO3} = E_{max} \times \frac{Age^{\gamma}}{Age_{50}^{\gamma} + Age^{\gamma}}
$$
{% endraw %}

Example of a sigmoidal Emax model relating age to FMO3 relative activity (compared to adult). Six different structural models were fitted to the pediatric data.

**Gompertz function example for ontogeny**

{% raw %}
$$
Ontogeny_{FMO3} = A \times e^{-e^{-k(Age - t_{shift})}}
$$
{% endraw %}

Alternative structural model for ontogeny, representing an S-shaped growth curve with parameters A (asymptote), k (rate constant), and t_shift (inflection point).

---

### Figures & Tables

- **Figure 1**: Comparison of reported in vitro hepatic CYP2D6 and CYP3A4 ontogeny functions from multiple studies, showing large variability in predicted activity across age.
  - *Significance*: Motivates the need for an in vivo, data-driven ontogeny estimation approach.
- **Figure 2**: Comparison of three in vitro FMO3 ontogeny reports and six in vivo estimated ontogeny functions from risdiplam population PBPK model.
  - *Significance*: Shows resolution of discrepancies: in vivo functions consistently predict ~3-fold higher FMO3 activity in children ≥4 mo vs. adults, with uncertainty in infants <4 mo.
- **Figure 3**: Six structural equations (sigmoidal Emax, Gompertz, etc.) used to model FMO3 ontogeny in the risdiplam population PBPK model.
  - *Significance*: Illustrates the multi-model approach for uncertainty quantification.

---

### Code & Reproducibility Assessment
Not explicitly reported. The risdiplam case analysis was performed using NONMEM (likely, based on typical Roche workflow). No code or model files were provided in the publication.

---

### Supplementary Materials
Not available in the provided content; references to Table S1 and Figure S1 for CYP3A ontogeny summary and meta-analysis of in vitro FMO3 data, respectively.

---

### Future Directions
Automation of structural model selection for ontogeny, extension to extremely sparse data (e.g., using Bayesian hierarchical models with informative priors from in vitro data), validation against other FMO3 substrates, and application to other DMEs (e.g., UGTs, transporters). Further method development for handling multiple uncertain elimination pathways simultaneously. Application to high extraction ratio drugs and compounds with age-dependent protein binding.

---

### Expert Commentary
This paper provides a pragmatic bridge between empirical population PK and mechanistic PBPK for pediatric extrapolation. The key statistical insight is that by fixing the well-characterized parts of the model (CYP3A ontogeny, RBP, MPPGL scaling) and estimating only the ontogeny of interest (FMO3) from the pediatric data, the authors circumvent the identifiability issues that plague full PBPK-based estimation. The use of multiple structural models (not just a single 'best' model) for uncertainty propagation is methodologically sound and aligns with good practice for model-based decision making under uncertainty. One limitation not fully addressed is the potential for confounding between ontogeny of clearance and ontogeny of bioavailability ($F$), especially if the drug is not completely absorbed or has first-pass metabolism. For low extraction drugs like risdiplam, this confounding may be minor, but for other drugs it could bias ontogeny estimates. The workflow's emphasis on verifying absorption and volume parameters before estimating ontogeny is a critical step that should be standard practice. I would add a formal sensitivity analysis of the fixed CYP3A ontogeny assumption to the workflow. Overall, this is a valuable addition to the pediatric MIDD toolbox.

---

### Bottom Line
Population PBPK modeling offers a principled, data-driven approach to estimate DME/transporter ontogeny directly from pediatric PK data, reducing reliance on inconsistent in vitro/in vivo literature. For practitioners: follow the proposed workflow (adult model verification → age-dependent scaling → fixed vs. estimated ontogeny → multiple structural models → uncertainty propagation). The key advantage is compatibility with standard NLMEM tools and regulatory diagnostics, while retaining physiological plausibility for extrapolation.

---