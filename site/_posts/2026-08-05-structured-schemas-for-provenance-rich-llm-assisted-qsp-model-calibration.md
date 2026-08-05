---
layout: post
title: "Structured Schemas for Provenance-Rich, LLM-Assisted QSP Model Calibration"
date: 2026-08-05
authors: "Eliason J, Popel AS"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70306"
paper_type: methodology
tags: [methodology, qsp]
excerpt_text: "MAPLE is a structured-schema framework that pairs LLMs with automated validators to produce provenance-rich, reproducible calibration data for QSP models. In a PDAC case study, 37 SubmodelTargets and 45 CalibrationTargets were curated with every value tied to a verbatim snippet and resolved DOI; automated validators triggered 50 retries before human review, and 11 of 19 parameters were supported by multiple independent sources. The framework records modeler reasoning in a re-runnable, auditable form rather than automating away the modeler."
pdf_path: "/assets/digests/2026-08-05-structured-schemas-for-provenance-rich-llm-assisted-qsp-model-calibration/PMx_Structured_Schemas_for_ProvenanceRich_LL_20260805.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
MAPLE is a structured-schema framework that pairs LLMs with automated validators to produce provenance-rich, reproducible calibration data for QSP models. In a PDAC case study, 37 SubmodelTargets and 45 CalibrationTargets were curated with every value tied to a verbatim snippet and resolved DOI; automated validators triggered 50 retries before human review, and 11 of 19 parameters were supported by multiple independent sources. The framework records modeler reasoning in a re-runnable, auditable form rather than automating away the modeler.

---

### Executive Summary
MAPLE (Model-Aware Parameterization from Literature Evidence) is a framework that uses structured validation schemas as a collaboration interface between LLMs and modelers for QSP model calibration. Two schemas—SubmodelTarget (isolated experiments constraining individual parameters) and CalibrationTarget (clinical/in vivo endpoints constraining the full model)—separate data extraction from modeling decisions, requiring every numeric value to appear verbatim in a quoted source snippet with a DOI-resolved citation. Targeted validators (value-in-snippet matching, DOI resolution, unit parsing via Pint, code execution) catch characteristic LLM errors and drive an automated retry loop. In a PDAC QSP model application, the framework produced 37 SubmodelTargets and 45 CalibrationTargets, with all values traceable to sources and 11 of 19 parameters supported by multiple independent sources. The paper characterizes the framework's behavior rather than establishing broad generalizability, and emphasizes that the modeler's scientific judgment—forward-model choices, priors, source relevance—remains essential and is now recorded in an auditable, re-runnable form.

---

### Scientific Context & Motivation
QSP model calibration requires literature data spanning experimental and clinical endpoints, but manual curation is labor-intensive and inconsistently documented, with reasoning lost when personnel change. LLM-based extraction offers flexibility but suffers from hallucination and citation fabrication. Existing approaches fall into two gaps: general-purpose biomedical extraction frameworks do not address QSP-specific downstream requirements (uncertainty quantification, forward-model specification, code generation), while QSP-focused tools like QSP-Copilot emphasize model structure discovery rather than quantitative parameter calibration with documented provenance. The paper addresses the need for a structured, provenance-rich, reproducible calibration workflow that combines LLM efficiency with modeler judgment.

---

## ⚡ Methodological Snapshot
MAPLE is a framework for LLM-assisted QSP model calibration built around two structured schemas. The SubmodelTarget schema captures isolated experiments (in vitro assays, single-mechanism studies) that constrain individual parameters through simplified forward models; the CalibrationTarget schema captures clinical and in vivo endpoints that constrain the full model through observables computed over the complete species state. Both schemas enforce a data-first architecture: extraction of what the paper reports (inputs layer) is separated from specification of how to use it for calibration (calibration layer). Every extracted numeric value must appear verbatim in a quoted snippet from the source, creating an auditable trail and enabling automated hallucination detection. The framework includes a model-aware literature search that injects mechanistic context (parameter names, units, reactions, species) into the LLM prompt, and a validation framework with targeted validators: value-in-snippet matching, DOI resolution with title fuzzy-matching, unit parsing via Pint, code execution with mock data, and source-relevance uncertainty floors. A Pydantic-based retry loop automatically re-extracts targets that fail validation. The version used (v0.1.0) also generates a joint Julia inference script for Turing.jl, joining targets that share parameter names so each shared parameter is constrained by every source that measures it.

---

## 📐 Statistical Framework
The statistical framework is Bayesian inference for QSP model calibration. Each SubmodelTarget specifies a forward model (one of 15 built-in types) that maps model parameters to predicted observables, a prior distribution with documented rationale, and an error model defining the likelihood function. The CalibrationTarget schema derives summary statistics (median and 95% CI) from literature inputs via Monte Carlo simulation, and includes an observable function (Python) that computes the measurement from model species. The source_relevance block quantifies translation uncertainty (cross-species, cross-indication, TME compatibility) with minimum uncertainty floors (2-fold cross-species, 3-fold cross-indication, 10-fold low TME compatibility) that propagate to prior widths. The inference layer (Turing.jl) performs Bayesian posterior estimation, with SubmodelTarget posteriors serving as informative priors for full-model calibration against CalibrationTarget endpoints. The framework assumes a well-structured QSP model exists with defined species, parameters, and unit mappings.

---

### Estimator Behavior
The paper reports that all 19 unique parameters in the joint Julia inference converged, though the specific convergence diagnostics are not detailed. The key estimator-related contribution is the automatic joint fitting: 11 of 19 parameters appeared in more than one target, and the translator fit each one against all of its sources at once, so each posterior draws on every source that measured the parameter. This addresses a common bias in manual calibration where parameters are fit to a single source. The framework does not report bias or efficiency metrics for the estimators themselves; the focus is on the extraction and validation pipeline rather than the statistical properties of the resulting posteriors. The validation framework ensures that priors are well-formed (dimensionally valid, with documented rationale and translation uncertainty), but the paper does not assess whether the resulting priors are well-calibrated or whether the joint inference produces unbiased estimates.

---

### Validation Design
The validation design is a single-model case study on a PDAC QSP model. The framework was evaluated on 37 SubmodelTargets (tumor growth, stromal dynamics, immune recruitment, cytokine signaling) and 45 CalibrationTargets (baseline TME composition, neoadjuvant immunotherapy response, clinical progression). Validation metrics include: (1) extraction performance—retry counts, duration, token usage across 18 instrumented SubmodelTargets; (2) error analysis—validator exception categories across 50 retries; (3) source characteristics—diversity of sources, cross-species/cross-indication translation needs; (4) curation analysis—field-level revision rates comparing raw LLM output to final curated versions. The validation is primarily a demonstration of the framework's operational viability rather than a controlled comparison against manual curation or alternative automated methods. The paper explicitly notes the absence of a controlled time comparison against fully manual extraction.

---

### Applicability Boundaries
MAPLE works best when: (1) a well-structured QSP model exists with defined species, parameters, and unit mappings; (2) the literature base is accessible (open-access or available via LLM web search); (3) the forward-model template library covers the relevant experimental designs. The framework is domain-independent in its core components (inputs/calibration separation, value-in-snippet, DOI resolution, code execution) but the forward-model type library is the main domain-specific surface—a non-oncology application would likely require additional templates for compartmental PK, receptor occupancy, or indirect-response dynamics. The framework does not support model construction, only calibration of an existing model. Closed-access publications may limit extraction depth. The evaluation is a single-model, single-disease, single-group characterization, so generalizability is unproven. The framework requires substantial modeler input—forward-model type was revised in 65% of SubmodelTargets and source relevance in 100%—so it is not a fully automated solution.

---

### Comparison to Alternatives
MAPLE addresses a gap between general-purpose biomedical extraction frameworks (e.g., those from [17, 18]) that do not address QSP-specific downstream requirements (uncertainty quantification, forward-model specification, code generation) and QSP-focused tools like QSP-Copilot [16] that emphasize model structure discovery rather than quantitative parameter calibration with documented provenance. Unlike knowledge graph approaches that prioritize coverage across thousands of abstracts and can tolerate some extraction errors, MAPLE requires higher per-target stringency because each value directly influences model predictions. The validation approach combines grounding strategies from retrieval-augmented generation and constrained decoding with domain-specific validators (DOI resolution, unit parsing, code execution). Compared to manual curation, MAPLE provides a structured, auditable record of the modeler's reasoning and enables automatic joint inference across multiple sources, but it does not eliminate modeler effort—it restructures it. The paper does not provide a quantitative comparison of MAPLE's output quality against manual curation or other automated tools.

---

### Implementation Guidance
MAPLE v0.1.0 is available at https://github.com/popellab/maple (commit 7f1faa4). The framework supports multiple LLM providers (OpenAI, Anthropic, Google) through a common interface; the study used GPT-5.1 for batch extraction and Claude Opus 4.6 for interactive extraction. Schemas are implemented in Pydantic with discriminated unions for the 15 forward-model types. Unit validation uses Pint; DOI validation queries CrossRef; external snippet-in-paper validation uses Europe PMC and Unpaywall. The inference layer generates Julia scripts for Turing.jl. The analysis repository (maple-paper) includes all YAML targets, scripts to reproduce statistics, and a scripted validation check (scripts/verify_validation.sh). Practical tips: (1) the retry loop is essential—expect multiple retries per target (average 2.8); (2) interactive extraction with source PDFs loaded into the session reduces post-hoc curation; (3) the value-in-snippet requirement is the strongest anti-hallucination defense; (4) the framework works without an LLM—modelers can populate schemas manually and validators still run. Token cost is small (~$0.37 per target), so the dominant cost is modeler time.

---

## 📊 Key Findings
1) MAPLE produced 37 SubmodelTargets and 45 CalibrationTargets for a PDAC QSP model, with every value tied to a verbatim source snippet and DOI-resolved citation. 2) None of the 18 instrumented SubmodelTarget extractions passed validation on the first attempt; validators triggered 50 automated retries before human review, dominated by unit errors (38%), prior specification (21%), fabrication (17%), and code errors (17%). 3) 11 of 19 unique parameters appeared in more than one target, allowing the translator to fit each shared parameter against all its sources simultaneously. 4) Modeler curation revised forward-model type in 65% of SubmodelTargets, priors in 46%, and source relevance in 100% of files, demonstrating that LLM drafts are competent at bibliographic/transcription tasks but require human judgment for modeling decisions. 5) Interactive extraction (Claude Opus 4.6) required minimal post hoc revision compared to batch extraction (GPT-5.1), though the comparison is observational rather than controlled. 6) Only 46% of SubmodelTargets came from PDAC-specific experiments; 35% required cross-species translation from mouse data, highlighting the need for documented translation uncertainty.

---

### Strengths & Limitations

#### Strengths
- Data-first architecture cleanly separates objective extraction (inputs layer) from modeling decisions (calibration layer), enabling reuse and independent review
- Value-in-snippet validation provides a strong anti-hallucination defense by requiring verbatim source text for every numeric value
- DOI resolution with title fuzzy-matching (75% threshold) catches fabricated citations paired with valid DOIs
- External snippet-in-paper validation (Europe PMC/Unpaywall) catches subtle fabrication of plausible snippets not actually in the cited paper
- Shared parameter names enable automatic joint inference across multiple sources, replacing ad-hoc manual combination
- The framework works without an LLM—modelers can populate schemas manually and validators still run
- Full reproducibility: schemas, validators, prompts, and reference database pinned at a specific commit; all YAML targets and scripts publicly available
- Source relevance block with minimum uncertainty floors (2-fold cross-species, 3-fold cross-indication, 10-fold low TME compatibility) ensures translation uncertainty propagates to prior widths

#### Limitations (Acknowledged by Authors)
- Evaluation covers one QSP model in one disease area by a single group, so it characterizes the framework rather than establishing broad generalizability
- Forward-model type library is the main domain-specific surface; 49% of SubmodelTargets used the generic algebraic type, showing the 15 built-in templates are not exhaustive
- Extraction quality is bounded by LLM web search capability; closed-access publications may be only partially available
- Figure digitization remains manual; multimodal LLM vision integration is a natural future direction
- Per-target extraction metrics available only for the SubmodelTarget cohort; CalibrationTarget runs predated Logfire instrumentation
- Interactive vs batch comparison is observational, not controlled (different models, different timing)

#### Limitations (Expert Review)
- The 75% title and 80% snippet fuzzy-match thresholds are configurable defaults but their calibration against real OCR/formatting noise is not systematically evaluated
- The external snippet-in-paper validator was applied selectively rather than as an automated gate, leaving a potential gap in the provenance guarantee for some targets
- The paper does not report the actual posterior distributions or inference results from the joint Julia script—only convergence is mentioned—so the statistical quality of the resulting priors is not assessed
- The 58% rejection rate for one batch of 12 CalibrationTargets is based on a single small batch and may not be representative
- No comparison of MAPLE's output quality against fully manual curation on matched targets is provided, so the relative accuracy of LLM-assisted vs manual extraction is not quantified
- The framework assumes a structured QSP model already exists; it does not support model construction

#### Generalizability
The core components—inputs/calibration layer separation, typed-role fields, value-in-snippet, DOI-resolution, and code-execution validators—are domain-independent and apply to any literature-derived parameter. However, the forward-model type library is the main domain-specific surface; a non-oncology application (e.g., PK/PD) would likely require additional templates for compartmental PK, receptor occupancy, or indirect-response dynamics. The model-aware search and shared-parameter-name binding assume a structured QSP model is already in hand. The evaluation is a single-model, single-disease, single-group characterization, so generalizability is plausible but unproven.

---

---

### Figures & Tables

- **Figure 1**: MAPLE workflow diagram showing the LLM literature search, structured YAML extraction, automated validation with retry loop, and human curation steps.
  - *Significance*: Provides the overall pipeline architecture and shows where automated validators and human curation fit in the workflow.
- **Figure 2**: Compact SubmodelTarget example showing the two-layer structure: inputs layer (literature value with verbatim snippet) and calibration layer (forward model, priors, error model).
  - *Significance*: Illustrates the core schema design principle of separating data extraction from modeling decisions.
- **Table 1**: Per-target extraction metrics for 18 instrumented SubmodelTargets: retries, duration, and token counts.
  - *Significance*: Quantifies the automated retry loop performance and cost; shows average 2.8 retries, 7.9 min, and 217,735 tokens per target.
- **Table 2**: Validation error categories across 50 retries: units (38%), prior (21%), fabrication (17%), code (17%), other (4%), hallucination (4%).
  - *Significance*: Identifies the dominant failure modes of LLM extraction and where the validators are most needed.
- **Table 3**: Field-level revision rates for batch-extracted targets: forward-model type (65%), prior parameters (46%), input values (46%), source relevance (100%) for SubmodelTargets; observable code (39%), species list (28%), empirical data (17%), source relevance (28%) for CalibrationTargets.
  - *Significance*: Quantifies the modeler's contribution and shows where LLM drafts are most likely to require correction.
- **Table 4**: CalibrationTarget scenario groups: 26 baseline, 18 neoadjuvant immunotherapy, 1 clinical progression (total 45).
  - *Significance*: Documents the scope of the CalibrationTarget corpus and the diversity of endpoints covered.

---

### Code & Reproducibility Assessment
Excellent. MAPLE is available at https://github.com/popellab/maple (v0.1.0, commit 7f1faa4) with schemas, validators, and inference code generator. The analysis repository (https://github.com/popellab/maple-paper) includes all 37 SubmodelTargets and 45 CalibrationTargets as YAML files, scripts to reproduce all paper statistics, and a scripted validation check (scripts/verify_validation.sh). The PDAC QSP model structural representation is included, though the full model is released separately. All extraction and curation runs were performed in January–February 2026.

---

### Supplementary Materials
Appendix S1 provides detailed field descriptions with YAML examples (Sections 1, 5, 6, 7, 12, 13), forward model type descriptions (Table S1), source characteristics (Section 8), per-target CalibrationTarget metrics (Section 9), validator implementation details (Section 3), generated Julia inference scripts (Section 4), recurring curation categories (Section 14.1), and a comparison of MAPLE to existing tools (Section 15).

---

### Future Directions
1) Staged extraction pipeline that retrieves full-text papers in advance and batches extraction, making the external snippet-in-paper check part of the automated gate. 2) Integration of multimodal LLM vision capabilities for automated figure digitization. 3) Extension of the forward-model template library to non-oncology domains (PK/PD, receptor occupancy, indirect response). 4) Controlled comparisons of batch vs. interactive extraction modes using the same underlying model and randomized target assignment. 5) Evaluation of the framework across multiple disease areas and modeling groups to establish generalizability. 6) Assessment of the posterior quality from the joint inference against manual calibration baselines.

---

### Expert Commentary
This paper addresses a critical bottleneck in QSP modeling—the reproducibility and provenance of calibration data—with a pragmatic, engineering-focused solution. The dual-schema design (SubmodelTarget vs. CalibrationTarget) is a thoughtful decomposition of the calibration problem into isolated-parameter and full-model regimes, and the separation of data extraction from modeling decisions is a principled design choice that will age well. The validator suite is the real contribution: value-in-snippet matching, DOI resolution with title fuzzy-matching, and code execution are concrete, implementable anti-hallucination defenses that go beyond typical RAG grounding. The honest reporting of the curation revision rates (65% forward-model changes, 100% source-relevance changes) is refreshing and correctly reframes the LLM as a drafting tool rather than an autonomous agent. The main caveat is the single-model, single-group evaluation; the framework's true value will be established by independent replication across disease areas and modeling teams. The cost analysis (roughly $0.37 per target) is useful for teams considering adoption. Overall, this is a solid methodology contribution that should be read by anyone building LLM-assisted QSP or PK/PD calibration pipelines.

---

### Bottom Line
MAPLE provides a practical, reproducible framework for LLM-assisted QSP calibration that converts the modeler's judgment into auditable, re-runnable records. The key takeaway for practitioners: structured schemas with automated validators (value-in-snippet, DOI resolution, unit parsing, code execution) can catch most LLM hallucination and fabrication errors, but the modeler's scientific decisions—forward-model choice, prior specification, source relevance—remain essential and should be recorded in a structured, re-runnable form. The framework is available as open-source (MAPLE v0.1.0) and works with or without an LLM, making it a viable option for teams seeking reproducible calibration data with full provenance.

---

---

## 📊 Figures

![MAPLE workflow. An LLM searches the literature for a parameter target and extracts a structured YAML target carrying values, provenance, and a forward model. Aut]({{ site.baseurl }}/assets/digests/2026-08-05-structured-schemas-for-provenance-rich-llm-assisted-qsp-model-calibration/figures/fig_01.jpg)

![Compact SubmodelTarget example showing how an extracted value connects to the forward model. Theinputslayer records the literature value with the verbatim snippe]({{ site.baseurl }}/assets/digests/2026-08-05-structured-schemas-for-provenance-rich-llm-assisted-qsp-model-calibration/figures/fig_02.jpg)