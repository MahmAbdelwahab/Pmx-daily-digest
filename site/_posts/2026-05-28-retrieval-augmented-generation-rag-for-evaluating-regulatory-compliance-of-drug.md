---
layout: post
title: "Retrieval Augmented Generation (RAG) for Evaluating Regulatory Compliance of Drug Information and Clinical Trial Protocols"
date: 2026-05-28
authors: "Waikar S, Bhat AG, Ramanathan M"
journal: "CPT: Pharmacometrics & Systems Pharmacology, 2026"
doi: "10.1002/psp4.70201"
paper_type: ai-ml
tags: [ai-ml, regulatory]
excerpt_text: "This proof-of-concept study demonstrates the application of Retrieval Augmented Generation (RAG) systems, integrated with large language models (LLMs), to automate the review of drug package inserts and clinical trial protocols for regulatory compliance. The RAG system correctly identified compliance gaps in approved drugs and evaluated a TB trial protocol against FDA guidance, with performance benchmarked against standard GPT-4o queries. The approach shows promise as a human-in-the-loop decision-support tool for clinical pharmacology document review."
pdf_path: "/assets/digests/2026-05-28-retrieval-augmented-generation-rag-for-evaluating-regulatory-compliance-of-drug/PMx_Retrieval_Augmented_Generation_RAG_for_E_20260528.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
This proof-of-concept study demonstrates the application of Retrieval Augmented Generation (RAG) systems, integrated with large language models (LLMs), to automate the review of drug package inserts and clinical trial protocols for regulatory compliance. The RAG system correctly identified compliance gaps in approved drugs and evaluated a TB trial protocol against FDA guidance, with performance benchmarked against standard GPT-4o queries. The approach shows promise as a human-in-the-loop decision-support tool for clinical pharmacology document review.

---

### Executive Summary
This pilot study developed and evaluated two modular Retrieval Augmented Generation (RAG) systems built on the LangChain platform for regulatory document review. One system assessed the compliance of drug package inserts (for five approved and three withdrawn drugs) with FDA labeling guidance on indications, specific populations, and warnings. The second system evaluated the statistical analysis plan of a Phase 2a tuberculosis clinical trial protocol against ICH E9 and E9(R1) guidelines. The RAG systems reliably extracted information and identified compliance deficiencies, with performance measured using NLP metrics (ROUGE-L, METEOR) and LLM-as-a-judge frameworks (answer relevancy, faithfulness, clinical pharmacology relevance). A direct comparison showed that while GPT-4o offered broader regulatory context, the RAG system provided more granular, actionable, and document-grounded feedback, highlighting its value in document-restricted settings and for providing auditable outputs.

---

### Scientific Context & Motivation
Evaluating drug information and clinical trial protocols for regulatory compliance is a time-consuming, expertise-intensive, and manual process. Large language models (LLMs) offer an opportunity to reshape this workflow, but their standalone use is limited by a lack of domain specialization, potential for hallucination, and inability to leverage proprietary organizational documents. RAG is a complementary AI architecture that allows precise control over the data domain and provides traceable provenance, but it has not been extensively investigated for regulatory decision-making tasks in pharmaceutical sciences. This study addresses that gap by evaluating RAG-based frameworks as decision-making aids beyond simple information extraction.

---

## ⚡ Methodological Snapshot
Two modular RAG systems were built using the LangChain platform with Streamlit interfaces. The process involves document ingestion and pre-processing, sentence embedding for semantic indexing, and retrieval of relevant context from uploaded PDFs in response to user queries. A structured prompt is engineered by combining a persona, the retrieved context, a scratchpad, and the user query, which is then fed to a large language model (LLM) to generate the final critique. The system strictly constrains the LLM's generation to the information contained within the provided guidance and label/protocol documents.

---

## 🤖 Task Framing
The primary task is document-grounded question answering and critique generation for regulatory compliance. The system is tasked with comparing a test document (drug label or clinical protocol) against a set of reference guidance documents to extract key information, assess compliance with specific rules, and identify missing or inconsistent components. This is a high-stakes, knowledge-intensive NLP task distinct from open-domain summarization, where factual accuracy and provenance are critical.

---

### Dataset Description
The study used a small, manually curated dataset. The 'Approved Dataset' consisted of package inserts for 5 FDA-approved drugs from various therapeutic classes. The 'Withdrawn Dataset' contained inserts and FDA documents for 3 drugs removed from the market. The clinical trial evaluation used the protocol and SAP for a single Phase 2a TB trial (NCT03557281). Reference guidance documents included specific CFR sections and FDA/ICH guidance. The data was not split into formal training/validation/test sets; the entire curated set was used for evaluation.

---

### Model Architecture
The system is an architectural pattern (RAG) rather than a single novel model. It uses a two-step pipeline: a retriever component (based on sentence embeddings for semantic search) fetches relevant document chunks, and a generator LLM (primarily GPT-4o, based on the evaluation framework's judge model) synthesizes a response based on the engineered prompt and retrieved context. Key hyperparameters for the LLM, embedding model, and chunking strategy are detailed only in Data S3.

---

### Training Details
No model training or fine-tuning was conducted. The system relies entirely on the zero-shot generation capabilities of the underlying LLM, guided by prompt engineering and the context retrieved from the indexed documents. The absence of training is a key design choice to preserve simplicity and domain control via the document store.

---

### Evaluation Metrics
For drug information, lexical similarity metrics ROUGE-L and METEOR were used to compare generated answers with a reference. For the more complex protocol evaluation, an LLM-as-a-judge framework (DeepEval) was used, employing three metrics: answer relevancy ($100\%$), faithfulness ($95\%$), and a custom 'ClinPharm' contextual relevancy metric ($88\%$). The RAG system's performance was qualitatively compared to a non-retrieval GPT-4o baseline.

---

### Deployment Caveats
The system is a low-TRL research prototype. Generalizability is a major caveat; performance on a new therapeutic area, document format, or guidance type is not guaranteed. Data drift from updated regulations would require re-indexing the document store and potentially re-engineering prompts. The system is designed for a human-in-the-loop workflow, as independent verification revealed errors in the output, making it unsuitable for autonomous decision-making. Its inability to handle multi-modal content (complex tables, figures) limits its scope for complete pharmacometric report review.

---

## 📊 Key Findings
The RAG system correctly identified indications and populated specific sections for all five approved drugs in the test set (adalimumab, insulin glargine, atorvastatin, sertraline, alprazolam). For adalimumab's label, the system accurately flagged missing components such as the absence of a statement on adjunctive therapy, lack of subgroup-specific information, and non-compliance with format suggestions (e.g., use of subsections). For withdrawn drugs (rofecoxib, valdecoxib, troglitazone), the RAG system successfully identified and explained the clinical reasons for their market removal. In the clinical trial protocol evaluation, the RAG system generated a high-quality summary of the protocol and SAP, with answer relevancy of $100\%$ and faithfulness of $95\%$. Its critical feedback on the SAP against FDA E9 guidelines identified specific methodological gaps, such as lack of detail on sample size re-estimation and missing covariate analyses, aligning with manual review.

---

### Strengths & Limitations

#### Strengths
- Addresses the high-value problem of automating regulatory compliance checks with a focus on auditable, document-grounded outputs.
- Directly compares RAG architecture against a baseline non-retrieval LLM (GPT-4o), illustrating specific advantages in granularity and actionability.
- Provides a transparent, multi-metric evaluation strategy combining lexical overlap (ROUGE-L, METEOR) with semantic relevance and faithfulness metrics.
- Modular system design allows task-specific prompts and interfaces for distinct documents (package inserts vs. clinical protocols).
- Focuses on a human-in-the-loop decision-support paradigm rather than full automation, acknowledging the need for expert verification.

#### Limitations (Acknowledged by Authors)
- The study is a limited pilot with a small, curated dataset of five approved and three withdrawn drugs.
- The system could only assess a few withdrawn drugs, as sufficient and unbiased FDA documentation was not available for others.
- The system did not extract information from table-within-table structures or graphs, limiting its utility for complex PK/PD analysis.
- The guidance documents used for SAP evaluation (ICH E9 and E9(R1)) do not fully address other aspects of protocol compliance, such as detailed PK analyses.
- Independent verification of RAG outputs revealed mixed results and some errors.

#### Limitations (Expert Review)
- The generalizability of the fixed, structured prompts to a wide variety of regulatory documents and submission formats is uncertain and likely brittle.
- The evaluation metrics (ROUGE-L, METEOR) measure surface-level textual overlap and may not fully capture the clinical accuracy or completeness of a regulatory critique.
- The ClinPharm metric, while innovative, relies on an LLM-as-a-judge (GPT-4o), introducing potential circularity and non-deterministic evaluation.
- Comparison to a single non-retrieval LLM (GPT-4o) does not constitute a robust benchmark against other potential baselines like fine-tuned small language models or keyword-search-based methods.
- The study lacks quantitative statistical analysis of the performance differences between the methods; assessments are primarily qualitative.

#### Generalizability
Low to moderate. The approach is designed for a narrow, proof-of-concept setting with tightly controlled document sets and specific regulatory guidance. Scaling to the diversity of real-world regulatory submissions, protocols with complex schemas, and varying document quality would require substantial re-engineering and validation on a much larger and more representative corpus.

---

---

### Figures & Tables

- **Figure 1**: A schematic of the RAG system architecture showing the interaction between NLP, RAG, and LLM components using LangChain and a Streamlit user interface.
  - *Significance*: Provides a high-level overview of the core computational architecture, illustrating the flow from document preprocessing and embedding to retrieval and prompt-augmented generation.
- **Table 1**: Summarizes the drugs in the Approved and Withdrawn datasets, including mechanisms of action, indications, and reasons for withdrawal.
  - *Significance*: Defines the contrastive study design and the diverse input data (small molecules, biologics) used to challenge the RAG system.
- **Figure 3**: Screenshot of the PEARL (Protocol Evaluation and Review with LLM) application interface for uploading and evaluating clinical trial protocols.
  - *Significance*: Demonstrates the practical, user-facing implementation of the RAG system for clinical trial document review, highlighting its modular, task-specific design.

---

### Code & Reproducibility Assessment
Not available. The authors describe the use of LangChain, Streamlit, and specific NLP/metrics packages but do not provide a link to a code repository or custom code.

---

### Supplementary Materials
The paper's Data S1 and S2 contain the raw drug package inserts and clinical trial protocol documents. Data S3 provides detailed implementation specifics for the RAG systems, including document preprocessing, embedding, indexing, LLM hyperparameters, and prompt engineering. Data S4-S6 contain independent verification results, prompt variant experiments, and the comparison with standalone GPT-4o. The full RAG outputs for all drugs and the clinical trial are in the supplementary tables.

---

### Future Directions
Extension to a broader range of regulatory document types and therapeutic areas; integration of multi-modal extraction capabilities to handle tables and figures; prospective comparison of RAG-augmented versus standard human review in terms of time, cost, and error detection; and exploration of RAG for other drug development tasks such as trial design benchmarking and preclinical target summarization.

---

### Expert Commentary
This work correctly identifies the Achilles' heel of generic LLMs in regulatory science: the lack of provenance and domain control. By constraining generation to provided guidance documents, the RAG architecture acts as a 'smart search and synthesize' engine, which is the right cognitive ergonomic for a reviewer. The key insight is not the model's sophistication, but its role in enforcing strict auditability. The challenge for adoption lies in the rapid evolution of commercial LLMs, which may soon incorporate similar 'grounding' features natively, and the extensive manual effort required to curate the document base, engineer robust prompts, and verify outputs against subtle but critical regulatory nuances.

---

### Bottom Line
RAG-integrated LLMs offer a promising, traceable approach for building document-grounded decision-support tools that can assist in the rigorous review of clinical pharmacology documents for regulatory compliance gaps, though substantial validation and handling of complex data modalities are required before operational deployment.

---

---

## 📊 Figures

![Schematic of the retrieval-augmented generation (RAG) model. The system comprises natural language processing (NLP), RAG, and large language model (LLM) componen]({{ site.baseurl }}/assets/digests/2026-05-28-retrieval-augmented-generation-rag-for-evaluating-regulatory-compliance-of-drug/figures/fig_01.jpg)

![Screenshot from the retrieval-augmented generation (RAG) model implementation for drug package insert evaluation experiments.]({{ site.baseurl }}/assets/digests/2026-05-28-retrieval-augmented-generation-rag-for-evaluating-regulatory-compliance-of-drug/figures/fig_02.jpg)

![Screenshot of PEARL (Protocol Evaluation and Review with LLM). The application consists of four main components: Upload Clinical Trial Protocol and Guidance, whi]({{ site.baseurl }}/assets/digests/2026-05-28-retrieval-augmented-generation-rag-for-evaluating-regulatory-compliance-of-drug/figures/fig_03.jpg)