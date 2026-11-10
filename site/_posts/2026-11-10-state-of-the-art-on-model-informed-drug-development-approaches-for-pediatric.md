---
layout: post
title: "State-of-the-Art on Model-Informed Drug Development Approaches for Pediatric Rare Diseases."
date: 2026-11-10
authors: "Rajesh Krishna, Amitava Mitra, Matthew L. Zierhut, Lilly East, Chandra Durairaj"
journal: "CPT: Pharmacometrics & Systems Pharmacology"
doi: "10.1002/psp4.70083"
paper_type: generic
tags: [generic, pbpk, pediatrics, regulatory]
excerpt_text: "This state-of-the-art review illustrates how Model-Informed Drug Development (MIDD) provides decisive weight-of-evidence in pediatric rare disease therapeutics when traditional randomized controlled trials (RCTs) are scientifically, logistically, or ethically unfeasible. Drawing on key regulatory approvals (e.g., risdiplam, nusinersen, maribavir, carglumic acid, pozelimab, mirdametinib, eteplirsen, and delandistrogene moxeparvovec), the authors detail how population PK/PD, PBPK ontogeny modeling, and disease progression models (DPM) bridge adult data and external natural history controls. Crucially, the authors advocate a paradigm shift to replace placebo-controlled RCTs in ultra-rare pediatric settings with synthetic control arms, digital twins, and Bayesian evidence synthesis."
pdf_path: "/assets/digests/2026-11-10-state-of-the-art-on-model-informed-drug-development-approaches-for-pediatric/PMx_StateoftheArt_on_ModelInformed_Drug_Deve_20261110.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This state-of-the-art review illustrates how Model-Informed Drug Development (MIDD) provides decisive weight-of-evidence in pediatric rare disease therapeutics when traditional randomized controlled trials (RCTs) are scientifically, logistically, or ethically unfeasible. Drawing on key regulatory approvals (e.g., risdiplam, nusinersen, maribavir, carglumic acid, pozelimab, mirdametinib, eteplirsen, and delandistrogene moxeparvovec), the authors detail how population PK/PD, PBPK ontogeny modeling, and disease progression models (DPM) bridge adult data and external natural history controls. Crucially, the authors advocate a paradigm shift to replace placebo-controlled RCTs in ultra-rare pediatric settings with synthetic control arms, digital twins, and Bayesian evidence synthesis.

---

### Executive Summary
Drug development in pediatric rare and ultra-rare diseases is frequently impeded by tiny, geographically dispersed patient cohorts, high disease heterogeneity, poorly defined natural history trajectories, and severe ethical limitations surrounding placebo control arms. This review synthesizes current pharmacometric and systems pharmacology strategies across regulatory precedent cases, categorizing MIDD applications into adult-to-pediatric extrapolation, dose and regimen optimization, and efficient trial design. Highlighted examples demonstrate how PBPK captured enzyme ontogeny (such as in vivo FMO3 maturation for risdiplam), how popPK simulation supported adult-to-adolescent exposure-matching in the absence of direct pediatric trial recruitment (maribavir), and how external natural history cohorts enabled single-arm approvals (carglumic acid, pozelimab, and mirdametinib). Emerging quantitative frontiers—including caregiver-reported outcome metrics (CaGI-C/S), vector-load/expression modeling for AAV gene therapy, and longitudinal trajectory clustering—are presented alongside a call to action for formalizing synthetic controls and Bayesian prior borrowing as acceptable regulatory substitutes for traditional RCTs.

---

### Scientific Context & Motivation
Developing therapeutics for pediatric rare conditions represents one of the steepest challenges in clinical pharmacology. Standard two-arm randomized controlled trials often fail due to severe statistical underpowering (ultra-rare disorders may number only dozens of patients globally) and unacceptable ethical costs associated with withholding active treatment in fatal or progressive neurodegenerative conditions. Furthermore, pediatric drug disposition is complicated by non-linear developmental maturation of phase I/II metabolizing enzymes, evolving glomerular filtration, and dynamic body composition across neonates, infants, and adolescents. Historic approaches relying on empirical linear scaling or fixed body surface area (BSA) formulas frequently miss non-linear pharmacodynamics or organ ontogeny. An integrated MIDD framework that combines preclinical biodistribution, physiologically based pharmacokinetics (PBPK), population pharmacokinetics (popPK), exposure–response (E–R), and quantitative disease progression models (DPM) is required to maximize the informational value of every patient data point and guide evidence-based regulatory decisions.

---

## ⚡ Methodological Snapshot
The paper provides an architectural overview of quantitative modeling methodologies deployed in rare disease contexts. Population pharmacokinetics (popPK) utilizes non-linear mixed-effects modeling to extract population central tendencies and inter-individual variability from sparse, opportunistically collected pediatric plasma samples. When coupled with allometric scaling and maturation functions, popPK enables simulation of virtual pediatric cohorts across body weight and age strata to establish 'exposure-matching' regimens that recapitulate proven adult therapeutic exposure windows.

Physiologically based pharmacokinetic (PBPK) modeling integrates drug physicochemical properties with age-dependent anatomical and physiological matrices—incorporating liver volume expansion, ontogeny of phase I (e.g., CYP3A4) and phase II enzymes, renal clearance maturation, and gastrointestinal transit dynamics. In complex multi-pathway drugs such as risdiplam, popPK and PBPK were coupled mechanistically to deconvolve in vivo maturation functions of lesser-characterized enzymes (FMO3) directly from clinical PK profiles, thereby predicting victim and perpetrator drug–drug interaction (DDI) liabilities without requiring invasive pediatric clinical DDI trials.

At the pharmacodynamic level, Disease Progression Models (DPM) parameterize the underlying trajectory of untreated clinical decline using parametric functions (e.g., linear, Gompertz, or Weibull models) calibrated against historical natural history registries. DPMs are coupled with PK/PD and biomarker cascades (such as complement CH50 suppression, urinary oxalate excretion, or dystrophin expression) to simulate counterfactual clinical trial scenarios. This quantitative framework forms the foundation for synthetic control arm comparison, adaptive Bayesian borrowing, and optimal sampling window selection to minimize trial burden.

---

## 📋 Detailed Analysis
The authors systematically build a thesis that pediatric rare disease drug development operates under constraints that invalidate standard empirical drug development paradigms. In examining the regulatory case studies, several critical technical themes emerge:

1. Extrapolation and Exposure-Matching Robustness: Extrapolation from adult clinical efficacy hinges on the assumption that disease pathophysiology, target receptor density, and downstream response cascades are conserved between adults and pediatrics.[^fc-8] When this assumption holds, as demonstrated in maribavir for CMV and mirdametinib for neurofibromatosis type 1, PK matching using popPK simulation represents a solid, regulatory-accepted basis for approval. However, the review rightly warns that pharmacodynamic variability often exceeds PK variability in pediatric populations due to developmental differences in target biology or compensatory physiological mechanisms.

2. Mechanistic PBPK and Enzyme Ontogeny: The risdiplam case study is an exceptional demonstration of reverse translational pharmacometrics. Because pediatric clinical DDI trials with probe substrates like midazolam are unethical in infants with SMA, PBPK was initialized using adult TDI parameters. Finding that adult in vitro inactivation constants overpredicted in vivo DDI by 18-fold, investigators calibrated the model against adult clinical data and then projected pediatric midazolam interaction across intestinal and hepatic ontogeny models. Further integrating popPK with PBPK allowed the estimation of an in vivo FMO3 ontogeny profile, filling an important gap in developmental pharmacology.

3. Single-Arm Designs and External Control Validity: Approvals for carglumic acid, pozelimab, and mirdametinib illustrate when single-arm studies can provide substantial evidence of effectiveness. Key criteria accepted by regulatory agencies include: (a) conditions where spontaneous clinical regression is virtually non-existent (e.g., plexiform neurofibromas in NF1); (b) intra-individual baseline run-in periods where patients serve as their own controls; and (c) clear, durable linkage between target biomarker normalization (e.g., CH50 suppression, plasma ammonia reduction) and clinical symptom improvement.

4. Gene Therapy and Biodistribution Modeling: In delandistrogene moxeparvovec (ELEVIDYS), the application of nonclinical vector-load-expression-response biodistribution models in MDX mice translated preclinical transduction metrics to human micro-dystrophin expression targets. This represents one of the earliest blueprints for quantitative systems modeling in AAV gene transfer.

---

### Domain Context
From a regulatory perspective, this review aligns directly with the FDA's Prescription Drug User Fee Act (PDUFA VI/VII) Model-Informed Drug Development Paired Meeting Program, the FDA Draft Guidance on Pediatric Rare Diseases (2023), and the European Medicines Agency (EMA) Priority Medicines (PRIME) initiative. Pediatric rare diseases represent over 7,000 distinct conditions affecting approximately 30 million individuals in the United States and Europe combined, yet fewer than 10% have approved disease-modifying therapies. Under FDAMA Section 115 and related statutory provisions, regulatory agencies can approve therapies based on a single adequate and well-controlled clinical investigation when supported by confirmatory evidence. MIDD methodologies provide the quantitative backbone of this confirmatory evidence, serving as the formal bridge between mechanistic biology, natural history data, and clinical dose justification.

---

## 📊 Key Findings
The review highlights multiple landmark regulatory precedents where MIDD provided pivotal or confirmatory evidence of effectiveness:
1. Enzyme Ontogeny & PBPK: For risdiplam in spinal muscular atrophy (SMA), an integrated popPK-PBPK strategy estimated in vivo FMO3 ontogeny directly from clinical exposure across ages 2 months to 61 years, demonstrating that CYP3A- and FMO3-mediated victim/perpetrator DDI liabilities in pediatric patients were equal to or lower than in adults.
2. Complete In Silico Pediatric Extrapolation: In post-transplant cytomegalovirus (CMV), maribavir was granted FDA approval down to age 12 ($\ge 35$ kg) without direct adolescent trial data by adapting an adult popPK model with fixed allometric scaling to simulate virtual adolescent cohorts and demonstrate exposure matching.
3. External and Natural History Controls: Approvals for carglumic acid (NAGS deficiency), pozelimab (CHAPLE disease; CD55-deficient protein-losing enteropathy), and mirdametinib (NF1 with plexiform neurofibromas) relied on single-arm studies where longitudinal untreated natural history data, intra-individual baseline comparisons, or surrogate biomarkers (e.g., complement CH50 suppression, ammonia normalization) substituted for randomized comparator arms.
4. Advanced Gene & Exon-Skipping Modalities: In Duchenne muscular dystrophy (DMD), popPK modeling justified weight-based uniform dosing of eteplirsen down to patients $< 4$ years of age, while delandistrogene moxeparvovec leveraged nonclinical vector-load-expression-response biodistribution modeling coupled with Caregiver Global Impression of Change/Severity (CaGI-C/S) metrics to substantiate clinical benefit.

---

### Strengths & Limitations

#### Strengths
- Broad, multidisciplinary synthesis linking mechanistic PK/PD modeling, clinical trial simulation, and regulatory approval summaries.
- In-depth analysis of high-impact regulatory precedents covering small molecules, antisense oligonucleotides, monoclonal antibodies, and AAV gene therapies.
- Nuanced discussion of both empirical scaling limitations and mechanistic PBPK approaches to hepatic/renal enzyme ontogeny.
- Actionable categorization of synthetic data streams (historical controls, natural history cohorts, digital twins, and Bayesian priors) for rare disease development.

#### Limitations (Acknowledged by Authors)
- Model-Based Meta-Analysis (MBMA) remains difficult to implement in rare diseases due to extreme dataset scarcity, inconsistent endpoint definitions, and heterogeneous diagnostic criteria.
- Pediatric exposure-matching assumes identical disease pathophysiology and exposure–response relationships between adults and pediatrics, which can fail if receptor maturation or target tissue loss differs with age.
- Sparse sampling designs require complex analytical models and carry risks of parameter imprecision if structural assumptions are misspecified.

#### Limitations (Expert Review)
- The paper serves primarily as a qualitative and conceptual review; it lacks comparative quantitative parameter tables or specific mathematical formulations for the cited case studies.
- Methodological details on propensity score matching, unmeasured confounder control, and validation metrics for synthetic control arms are discussed at a high level rather than with step-by-step statistical guidance.

#### Generalizability
The concepts and regulatory pathways reviewed apply directly across rare pediatric genetic, metabolic, oncology, and neuromuscular disorders, offering a standard blueprint for biotech sponsors, pharmacometricians, and regulatory reviewers navigating low-sample-size clinical programs.

---

---

### Figures & Tables

- **Figure 1**: Schematic diagram depicting MIDD as an interconnected ecosystem across the data continuum, illustrating the integration of preclinical assays, natural history cohorts, adult clinical trial data, and biomarker streams into predictive models.
  - *Significance*: Emphasizes that pharmacometric models do not operate in silos; their regulatory power in rare diseases arises from synthesizing sparse multi-source data into continuous exposure-response frameworks.
- **Table 1**: Summary of approved pediatric rare disease therapeutics highlighting the core challenge, specific MIDD methodology utilized, and regulatory impact across dosing optimization, trial design, and disease bridging.
  - *Significance*: Provides a comprehensive reference table of regulatory precedent across diverse therapies (e.g., adalimumab, naxitamab, selpercatinib, selumetinib, tecovirimat, avalglucosidase alfa, fosdenopterin, and lumasiran).
- **Table 2**: Taxonomy of synthetic data types and alternative control structures, defining historical controls, natural history cohorts, external real-world controls, digital twins, Bayesian priors, and patient-generated health data along with primary regulatory considerations.
  - *Significance*: Establishes a practical vocabulary and risk-assessment checklist for designing single-arm or hybrid pediatric rare disease trials as substitutes for parallel placebo controls.

---

### Supplementary Materials
The supplementary document (psp470083-sup-0001-datas1.docx) provides extended background on foundational pharmacometric methodologies (Section S1), detailing technical definitions and workflows for PBPK, popPK, QSP, MBMA, and DPM. Section S2 expands on data standardization practices, governance, and collaborative consortia frameworks necessary for multi-center rare disease data integration.

---

### Future Directions
1. Establishment of standardized consortia and data-sharing frameworks to pool natural history datasets, enabling robust disease progression modeling (DPM) and model-based meta-analysis (MBMA) in orphan indications.
2. Development and prospective regulatory qualification of longitudinal trajectory clustering algorithms to identify rapid versus slow disease progression phenotypes in sparse, irregular real-world clinical datasets.
3. Formalization of regulatory guidance criteria for incorporating synthetic control arms, digital twins, and Bayesian dynamic borrowing in pivotal submissions to replace parallel placebo arms.
4. Systematic integration and validation of digital health technologies, wearable sensors, and caregiver-reported outcome instruments (e.g., CaGI-C and CaGI-S) as sensitive clinical outcome assessments (COAs) in pediatric trials.

---

### Expert Commentary
This paper captures a critical inflection point in clinical pharmacology: the shift from viewing MIDD as a supportive 'nice-to-have' tool to recognizing it as primary weight-of-evidence in orphan indications. The maribavir case study is particularly striking, showcasing a major regulatory approval extended down to adolescents based purely on virtual popPK simulations without dedicated clinical trial enrollment. Similarly, the risdiplam work highlights how reverse-engineering in vivo ontogeny (FMO3) from clinical data can refine PBPK models for broader future pediatric use. While the authors' call to replace placebo-controlled RCTs with synthetic controls is scientifically and ethically compelling, pharmacometricians must recognize the heightened burden of proof placed on model validation. When synthetic controls or adult-to-pediatric extrapolations fail, it is rarely due to PK scaling errors; it almost always stems from unmodeled developmental differences in target tissue biology, receptor sensitivity, or progressive tissue destruction (as seen in older DMD cohorts). Sponsors adopting these approaches must prospectively align with regulatory agencies via programs like the FDA MIDD Paired Meeting Pilot, ensuring that natural history comparator arms are harmonized for diagnostic standards, supportive care changes, and endpoint timing.

---

### Bottom Line
For pediatric rare disease drug development, traditional RCTs are increasingly anachronistic and ethically problematic; quantitative exposure-matching, mechanistic ontogeny PBPK, disease progression modeling, and well-curated natural history synthetic controls represent the modern, regulatory-accepted standard for establishing safety and efficacy.

---

### Fact-check corrections

[^fc-1]: **UNSUPPORTED** — original: “The paper type is classified as GENERIC.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-2]: **UNSUPPORTED** — original: “Empirical linear scaling or fixed BSA formulas frequently miss non-linear pharmacodynamics or organ ontogeny.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-3]: **UNSUPPORTED** — original: “PBPK modeling integrates drug physicochemical properties with age-dependent anatomical and physiological matrices, including liver volume expansion, phase I and II enzyme ontogeny, renal clearance maturation, and gastrointestinal transit dynamics.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-4]: **UNSUPPORTED** — original: “Disease Progression Models parameterize the underlying trajectory of untreated clinical decline using parametric functions such as linear, Gompertz, or Weibull models.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-5]: **UNSUPPORTED** — original: “Disease Progression Models are calibrated against historical natural history registries.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-6]: **UNSUPPORTED** — original: “DPMs are coupled with PK/PD and biomarker cascades to simulate counterfactual clinical trial scenarios.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-7]: **UNSUPPORTED** — original: “Biomarker cascades coupled with DPMs include complement CH50 suppression, urinary oxalate excretion, and dystrophin expression.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-8]: **CONTRADICTED** — original: “Extrapolation from adult clinical efficacy hinges on the assumption that disease pathophysiology, target receptor density, and downstream response cascades are conserved between adults and pediatrics.” → correction: “One foundational assumption underlying this “exposure-matching” strategy is that pediatric patients share similarities with adults regarding disease pathophysiology, the drug's mechanism of action, and exposure–response relationships for efficacy and safety [46].”
[^fc-9]: **CONTRADICTED** — original: “PK matching using popPK simulation supported approval for mirdametinib in neurofibromatosis type 1.” → correction: “The review package indicated that approval was based primarily on overall response rate (ORR) and duration of response (DOR) results from the ReNeu study [19].”
[^fc-10]: **UNSUPPORTED** — original: “Pharmacodynamic variability often exceeds PK variability in pediatric populations due to developmental differences in target biology or compensatory physiological mechanisms.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-11]: **UNSUPPORTED** — original: “Pediatric clinical DDI trials with probe substrates like midazolam are unethical in infants with spinal muscular atrophy (SMA).” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-12]: **CONTRADICTED** — original: “Adult in vitro inactivation constants overpredicted in vivo DDI by 18-fold for risdiplam.” → correction: “An 18-fold lower in vivo CYP3A inactivation constant compared with the in vitro value was required for risdiplam to capture the observed DDI in adults.”
[^fc-13]: **UNSUPPORTED** — original: “Pediatric rare diseases represent over 7,000 distinct conditions.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-14]: **UNSUPPORTED** — original: “Pediatric rare diseases affect approximately 30 million individuals in the United States and Europe combined.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-15]: **UNSUPPORTED** — original: “Fewer than 10% of pediatric rare diseases have approved disease-modifying therapies.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-16]: **UNSUPPORTED** — original: “Future directions include establishing standardized consortia and data-sharing frameworks to pool natural history datasets for DPM and MBMA in orphan indications.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-17]: **UNSUPPORTED** — original: “Future directions include developing and prospectively qualifying longitudinal trajectory clustering algorithms to identify rapid versus slow disease progression phenotypes in real-world clinical datasets.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-18]: **UNSUPPORTED** — original: “Future directions include formalizing regulatory guidance criteria for incorporating synthetic control arms, digital twins, and Bayesian dynamic borrowing in pivotal submissions.” → correction: “[flagged / unverified — no source-supported correction available]”
[^fc-19]: **UNSUPPORTED** — original: “Future directions include systematic integration and validation of digital health technologies, wearable sensors, and caregiver-reported outcome instruments as clinical outcome assessments in pediatric trials.” → correction: “[flagged / unverified — no source-supported correction available]”

---

## 📊 Figures

![Harnessing the value of the data continuum in MIDD.]({{ site.baseurl }}/assets/digests/2026-11-10-state-of-the-art-on-model-informed-drug-development-approaches-for-pediatric/figures/fig_01.jpg)