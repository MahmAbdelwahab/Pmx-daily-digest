---
layout: post
title: "Pharmaceutical Industry Perspectives on Exposure-Response Confounding in Large Molecule Therapeutics: Results From an IQ Consortium Survey"
date: 2026-09-06
authors: "Salama E, Li M, Al-Obeidi S, Wang E, Sheng D, Li Z, Lu T, Suryawanshi S, Ait-Oudhia L, Gao W, Gong X, Gao H, Ma D, Tsai DCH, et al."
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026 (published online 2026/09/01)"
doi: "10.1002/psp4.70318"
paper_type: generic
tags: [generic, dose-response, oncology, regulatory]
excerpt_text: "An IQ Consortium survey of 125 clinical pharmacologists, pharmacometricians, and statisticians across 23 pharmaceutical companies reveals near-universal awareness (88%) of exposure-response (ER) confounding in large molecule development, yet deep uncertainty about its prevalence—especially outside oncology (31.2% unsure). Dose-ranging study designs are the clear consensus mitigation strategy (81.6%), while confidence in causal inference/statistical correction methods is lukewarm, and 92.8% of respondents want formal best-practice or regulatory guidance."
pdf_path: "/assets/digests/2026-09-06-pharmaceutical-industry-perspectives-on-exposure-response-confounding-in-large/PMx_Pharmaceutical_Industry_Perspectives_on__20260906.pdf"
retroactively_classified: false
---

> **WARNING:** Fact-check not completed for this paper. The claims below were **not** verified against the source. Treat quantitative details with caution.

**Content Source:** Full Text

### Quick Take
An IQ Consortium survey of 125 clinical pharmacologists, pharmacometricians, and statisticians across 23 pharmaceutical companies reveals near-universal awareness (88%) of exposure-response (ER) confounding in large molecule development, yet deep uncertainty about its prevalence—especially outside oncology (31.2% unsure). Dose-ranging study designs are the clear consensus mitigation strategy (81.6%), while confidence in causal inference/statistical correction methods is lukewarm, and 92.8% of respondents want formal best-practice or regulatory guidance.

---

### Executive Summary
This IQ Consortium working group paper reports the first industry-wide survey on exposure-response confounding for large molecule therapeutics (mAbs, bispecifics, ADCs), a phenomenon where disease severity simultaneously drives increased drug clearance (via hypercatabolism, FcRn saturation, ADA) and worse clinical outcomes, creating spurious inverse ER relationships that can mislead dose selection. Among 125 respondents from 23 companies, awareness was high (88% individuals, 95.7% companies) but consensus fractured on prevalence, endpoint susceptibility, and the reliability of statistical mitigation: only 45.6% of individuals use causal inference methods, and the modal confidence rating in their reliability was 'Unsure' (32.8%). The strongest signals were pragmatic: 81.6% endorsed dose-ranging trials as vital when confounding is suspected, 74.4% identified Phase 2 dose-ranging as the most valuable stage for ER analysis, 79.2% said confounded ER analyses should be conducted but interpreted with caution, and 92.8% rated a best-practice white paper or regulatory guidance as valuable. The paper documents a field that recognizes the problem conceptually but lacks harmonized operational frameworks, with notable uncertainty about regulatory alignment—particularly in non-oncology settings where 50.4% were unsure of health authority expectations.

---

### Scientific Context & Motivation
ER analysis underpins dose justification and benefit-risk assessment, resting on a causal assumption that exposure differences drive effect differences. For large molecules, this assumption is threatened by disease-driven confounding: advanced cancer cachexia and systemic inflammation accelerate IgG clearance through increased proteolysis and impaired FcRn-mediated recycling; high immune complex loads in rheumatoid arthritis competitively saturate FcRn; and anti-drug antibodies accelerate clearance. Landmark examples include anti-PD1 antibodies (nivolumab, pembrolizumab), where high baseline clearance predicts worse overall survival independent of exposure, and trastuzumab in HER2+ cancer, where faster clearance tracks with tumor burden and inflammation. The risk is that confounded ER analyses are misread as evidence that higher doses will improve outcomes, potentially triggering unnecessary dose optimization or post-marketing requirements. Recent FDA-authored publications (e.g., on time-dependent confounding in oncology dose optimization) have clarified some regulatory expectations but do not address large-molecule-specific, disease-biology-driven confounding. Prior to this survey, there was no quantitative map of how the industry perceives, mitigates, and acts on this problem—this paper fills that gap.

---

## ⚡ Methodological Snapshot
This is a cross-sectional, anonymous electronic survey designed and disseminated by the IQ Consortium Large Molecule ER Confounding Working Group to member companies. The instrument comprised 27 core questions spanning six domains (landscape/awareness, prevalence/impact, mitigation, role of ER analyses, regulatory alignment, mechanistic understanding) using multiple-choice, check-all-that-apply, rating-scale, and open-ended formats. The target population was clinical pharmacologists, pharmacometricians, and statisticians at companies actively conducting ER analyses for large molecule dose selection.

Analysis was purely descriptive: frequencies and percentages were computed at both individual (n=125) and company (n=23) levels, with missing values retained in denominators. To avoid over-weighting large companies, company-level aggregation attributed the modal individual response to the company, or—for check-all-that-apply items—assigned 'yes' if any respondent selected it. No inferential statistics were performed. Two questions (Q19, Q27) suffered implementation errors (single-choice instead of multi-select/ranking), which the authors flag as limiting those items' interpretability.

---

## 📋 Detailed Analysis
The survey's architecture reveals four narratives that the authors articulate well and that deserve emphasis. First, the awareness-prevalence paradox: 88% awareness coexisting with fragmented prevalence beliefs suggests confounding is recognized as a concept but rarely diagnosed in practice—plausibly because definitive diagnosis requires either randomized dose-ranging (which breaks the confounding) or unverifiable assumptions about unmeasured confounders. Second, the design-over-analysis preference is rational given that causal inference methods (covariate adjustment, early-treatment exposure metrics, longitudinal PK/PD modeling) all rest on the no-unmeasured-confounding assumption, which is precisely what is in doubt when disease severity drives clearance; the 27.2% 'Unsure' on best mitigation beyond dose-ranging signals an immature methodological playbook. Third, the decision-making fracture—44% would use confounded ER when dose-ranging evidence is insufficient, 34.4% conditionally, and a near-even three-way split when confounding is inseparable from effect—maps directly onto the regulatory risk the authors identify: inconsistent sponsor behavior and potentially superfluous analyses in submissions. Fourth, the regulatory alignment gap (50.4% unsure in non-oncology) likely reflects both less non-oncology experience in the sample and the self-mitigating nature of multi-dose non-oncology development paradigms.

Two analytical subtleties merit attention. The company-level 'any yes' rule for check-all questions inflates company-level usage of causal methods (78.3%) relative to individual usage (45.6%)—the truth about organizational capability probably lies between, reflecting pockets of expertise rather than uniform practice. And the authors' g-computation observation is consequential: if covariate-adjusted ER with population simulation were counted as causal inference, usage would likely be far higher, reframing the problem from 'adoption' to 'rigor'—specifically, the near-absence of formal sensitivity analyses for unmeasured confounding in pharmacometric practice. The mechanistic results (48.8% non-specific clearance/hypercatabolism, 25.6% TMDD; 50.4% combined baseline + time-dependent PK) provide a useful agenda for simulation-based bias quantification, which is the most obvious missing evidentiary layer between this perception survey and actionable guidance.

---

### Domain Context
This paper sits at the intersection of pharmacometrics, clinical pharmacology, and regulatory science, and should be read alongside three threads: (1) the empirical literature on clearance-as-prognostic-marker for mAbs (anti-PD1 survival analyses, trastuzumab in HER2+ disease, anti-TNF/ADA in RA and IBD); (2) the FDA's Project Optimus dose-optimization initiative and recent FDA-authored work on time-dependent confounding in oncology ER (exposure accumulation, dose modifications, time-at-risk imbalances), which recommends time-independent exposure metrics, PD-appropriate model structures, lower dose arms, ER/dose-response consistency checks, and holistic causal assessment; and (3) existing guidance (FDA 2003 ER guidance, EFPIA MID3) that addresses confounding only at a high level. The survey's contribution is documenting that industry practice has not converged behind any of these threads: design-based mitigation is consensus, analytical mitigation is distrusted, and regulatory expectations are perceived as unclear—especially outside oncology. For the PMx community, the paper effectively announces an IQ Consortium workstream toward a best-practice white paper, making it a likely reference point for future regulatory interactions on large molecule dose justification.

---

## 📊 Key Findings
Key findings: (1) Awareness is high but prevalence perception is fragmented—in oncology, opinions split across 'Sometimes' (28.0%), 'In most cases' (24.0%), and 'Almost always' (21.6%); in non-oncology, 31.2% were 'Unsure', revealing a knowledge gap. (2) IgG mAbs, bispecific/trispecific antibodies, and ADCs are rated most susceptible (mean ~3.8/5); OS and PFS are the endpoints most viewed as confounded (68.8% each), yet ~39% were unsure about endpoint susceptibility in both settings. (3) Dose-ranging design is the dominant mitigation consensus: 81.6% of individuals and 95.7% of companies call it vital when confounding is suspected; Phase 2 is seen as the most valuable stage for ER analysis (74.4%). (4) Statistical/causal inference methods are used inconsistently (45.6% individual use; 78.3% of companies have at least one user) and trusted only modestly—32.8% 'Unsure', 28.0% 'Moderately reliable', 27.2% 'Somewhat reliable'. (5) Interpretation norms: 79.2% say confounded ER should be conducted but interpreted with caution; opinion splits on using confounded ER when dose-ranging evidence is insufficient (44.0% yes, 34.4% maybe), and there is no consensus when confounding cannot be dissociated from true effect (28.0% yes, 35.2% no, 34.4% unsure). (6) Mechanistically, non-specific clearance increases/hypercatabolism (48.8%) and TMDD (25.6%) are viewed as the most plausible drivers, and 50.4% believe confounding reflects combined baseline clearance alteration and time-dependent PK—an important counterweight to recent literature focused solely on time-varying clearance. (7) Regulatory alignment is uncertain (oncology: 47.2% aligned, 22.4% misaligned, 27.2% unsure; non-oncology: 50.4% unsure), driving 92.8% support for best-practice or regulatory guidance.

---

### Strengths & Limitations

#### Strengths
- First quantitative, industry-wide mapping of perspectives on large molecule ER confounding, with a respectable sample (125 respondents, 23 companies) spanning clinical pharmacology, pharmacometrics, and statistics
- Dual-level analysis (individual and company) with aggregation rules to prevent large companies from dominating, and demonstrated concordance between the two levels supporting representativeness
- Comprehensive 27-question instrument covering awareness, prevalence, mechanisms, mitigation, interpretation, and regulatory alignment, with mixed response formats including free text
- Well-grounded mechanistic introduction linking confounding to FcRn recycling, hypercatabolism, cachexia, and ADA with concrete drug examples (nivolumab, pembrolizumab, trastuzumab, infliximab, adalimumab)
- Honest treatment of survey design flaws (Q19/Q27 misimplementation) and explicit acknowledgment that standard covariate adjustment with population simulation (g-computation-like) was not captured, likely underestimating embedded causal inference practice
- Clear, actionable conclusion: strong mandate (92.8%) for harmonized best-practice guidance, giving the consortium a concrete next step

#### Limitations (Acknowledged by Authors)
- Respondents limited to IQ Consortium member companies—predominantly large, US-based organizations—excluding smaller biotech and broader geographic perspectives
- Respondent pool skewed toward oncology expertise (79.2% solid tumor, 58.4% hematology), likely explaining non-oncology uncertainty
- Two questions (Q19, Q27) were misimplemented (single-choice instead of check-all/ranking), restricting their intended use
- Self-reported individual perspectives that may not reflect official company positions or industry consensus
- Survey did not capture 'standard' covariate adjustment plus population simulation as a causal inference approach (g-computation analog), potentially underestimating routine causal inference practice
- Not designed as an exhaustive case-study mapping or systematic evaluation of mitigation strategies

#### Limitations (Expert Review)
- Descriptive-only analysis with no inferential statistics; no exploration of associations (e.g., whether confidence in causal methods correlates with role, experience, or therapeutic area)
- Company-level 'any yes' aggregation rule for check-all questions may inflate company-level endorsement relative to individual sentiment
- Perception data cannot distinguish true prevalence of confounding from perceived prevalence; the high 'Unsure' rates may reflect genuine knowledge gaps rather than absence of the phenomenon
- No comparison against a ground-truth benchmark (e.g., simulation studies quantifying confounding bias magnitude), so the survey documents beliefs rather than validating them
- Timing and framing effects: recent FDA publications on time-dependent confounding may have primed responses; the survey does not probe how respondents weight baseline vs. time-varying clearance mechanisms in practice despite identifying this as a key divergence from the literature
- Single-choice format for mitigation strategy (36% randomization) likely underestimates multimodal strategy use, as the authors note

#### Generalizability
Findings generalize reasonably to large, IQ-member pharmaceutical companies with established pharmacometrics functions, particularly in oncology. They should not be extrapolated to small biotechs, academic groups, non-US regulatory ecosystems, or non-oncology-dominated organizations without caution. The strong oncology skew means non-oncology 'uncertainty' findings partly reflect respondent composition rather than the state of the field. As a snapshot of beliefs in 2025-2026, results may shift as causal inference tooling matures and regulatory guidance (e.g., Project Optimus-era dose optimization expectations) evolves.

---

---

### Figures & Tables

- **Figure 1**: Perceived pervasiveness of ER confounding in oncology (A) versus non-oncology (B) settings, showing individual response distributions.
  - *Significance*: Captures the central paradox of the paper: high awareness but no consensus on prevalence in oncology, and dominant uncertainty (31.2% 'Unsure') in non-oncology, quantifying the knowledge gap that motivates guidance development.
- **Figure 2**: Consensus on dose-ranging as the primary mitigation strategy (A) and Phase 2 as the development stage where exposure-efficacy analysis is most valuable (B).
  - *Significance*: Documents the strongest consensus in the survey (81.6% individuals / 95.7% companies endorsing dose-ranging; 74.4% favoring Phase 2), establishing design-based mitigation as the industry's preferred defense against confounding.
- **Figure 3**: Respondent confidence in the reliability of statistical/causal inference methods for discerning ground truth in confounded ER analyses.
  - *Significance*: Shows the trust deficit in analytical mitigation: modal response 'Unsure' (32.8%) with most others rating methods only moderately or somewhat reliable—key evidence that statistical fixes are viewed as supportive, not definitive.
- **Figure 4**: Perceived value of establishing best-practice or formal regulatory guidance on large molecule ER confounding.
  - *Significance*: Quantifies the mandate for action: 72.8% 'Very Valuable' and 20.0% 'Somewhat Valuable' (92.8% combined), providing the working group's justification for developing harmonized guidance.

---

### Code & Reproducibility Assessment
No code or data availability statement is provided. The survey instrument is available as Supporting Information S1 and full response summaries in Supporting Information S2/S3, which supports transparency of the descriptive results, but no analysis scripts or raw anonymized datasets are shared. Reproducibility is moderate for a survey study: the questionnaire enables replication, but the aggregation rules and denominators would need the underlying data to verify.

---

### Supplementary Materials
Three supporting information files are referenced but were not available for review: S1 contains the full 27-question survey instrument; S2 contains the IQ report with question-level response summaries (Q1-Q4 and others cited throughout); S3 contains additional figures including endpoint susceptibility (Figure S1) and randomization details (Figure S2).

---

### Future Directions
Priority next steps include: (1) developing the requested best-practice white paper or regulatory guidance through industry-academia-regulator collaboration, with explicit frameworks for risk assessment, mitigation selection, and interpretation of confounded ER; (2) systematic case-study synthesis mapping historical confounded ER examples to the mitigation strategies that succeeded or failed; (3) simulation studies quantifying bias magnitude under disease-driven clearance mechanisms (FcRn saturation, hypercatabolism, ADA) to convert perception into evidence; (4) methodological work clarifying when covariate-adjusted ER with population simulation (g-computation) is sufficient versus when explicit causal inference machinery (e.g., marginal structural models, sensitivity analyses for unmeasured confounding) is needed; (5) extending the survey to smaller biotechs, non-US companies, and non-oncology specialists; and (6) quantitative bias analysis of baseline versus time-varying clearance confounding, given the survey's finding that half of respondents view the mechanism as combined while recent literature focuses almost exclusively on time-varying clearance.

---

### Expert Commentary
This survey lands at an inflection point. The Project Optimus era has made dose optimization a regulatory expectation in oncology, and ER analysis is the workhorse—but the large molecule community has accumulated enough examples (anti-PD1 clearance-survival associations, trastuzumab, anti-TNF in RA) to know that the workhorse can be led astray by disease biology that moves both PK and outcome. The most telling result is not the 88% awareness but the 32.8% 'Unsure' on whether causal inference methods can recover ground truth: the field has tools but not trust. I would highlight two underappreciated nuances. First, the authors' admission that routine covariate-adjusted ER with simulation is effectively g-computation means causal inference is more embedded than the 45.6% usage figure suggests—the gap is in formal sensitivity analysis for unmeasured confounding, which almost nobody does well. Second, the mechanistic finding (50.4% endorsing combined baseline + time-dependent clearance confounding) is a quiet rebuke to the recent literature's near-exclusive focus on time-varying exposure metrics; baseline clearance as a prognostic biomarker deserves equal billing. The 92.8% demand for guidance is a mandate the IQ Consortium is well positioned to answer—ideally with a framework that pairs design-stage mitigation (dose-ranging, randomization) with analysis-stage triage (when is adjustment credible, when is ER merely hypothesis-generating) and explicit regulatory communication templates.

---

### Bottom Line
For practitioners: treat ER confounding in large molecules as a design problem first and a statistical problem second—randomized dose-ranging (especially in Phase 2) is the only mitigation strategy with genuine industry consensus, while causal inference methods remain supportive rather than definitive. Interpret any single-dose-level ER analysis with explicit caution, assess whether disease severity could jointly drive clearance and outcome in your program, and expect forthcoming best-practice guidance from IQ Consortium and regulators that will shape how confounded ER analyses are conducted and defended in submissions.

---

---

## 📊 Figures

![Perceived Pervasiveness of Exposure-Response Confounding in (A) Oncology versus (B) Non-Oncology Settings. Figures display Individual response summaries related]({{ site.baseurl }}/assets/digests/2026-09-06-pharmaceutical-industry-perspectives-on-exposure-response-confounding-in-large/figures/fig_01.jpg)

![Consensus on Dose-Ranging as the Primary Mitigation Strategy (A) and Phase 2 as Stage of the Drug Development Exposure-efficacy Most Valuable (B). Figures displa]({{ site.baseurl }}/assets/digests/2026-09-06-pharmaceutical-industry-perspectives-on-exposure-response-confounding-in-large/figures/fig_02.jpg)

![Respondent Confidence in the Reliability of Statistical/Causal Inference Methods. Figures display individual response summaries related to results #34 in Support]({{ site.baseurl }}/assets/digests/2026-09-06-pharmaceutical-industry-perspectives-on-exposure-response-confounding-in-large/figures/fig_03.jpg)

![Perceived Value of Establishing Best Practice or Formal Regulatory Guidance on Large Molecule ER Confounding. Figures display individual response summaries relat]({{ site.baseurl }}/assets/digests/2026-09-06-pharmaceutical-industry-perspectives-on-exposure-response-confounding-in-large/figures/fig_04.jpg)