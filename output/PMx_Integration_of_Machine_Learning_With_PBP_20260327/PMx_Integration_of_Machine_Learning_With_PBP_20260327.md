---
format:
  typst:
    mainfont: "serif"
---

# PMx Weekly Digest: March 27, 2026

## Paper 1: Integration of Machine Learning With PBPK and QSAR Modeling Approaches to Facili

### Bibliographic Information
- **Title**: Integration of Machine Learning With PBPK and QSAR Modeling Approaches to Facilitate Drug Discovery and Development
- **Authors**: Chen X, Lin Z
- **Journal**: CPT: Pharmacometrics & Systems Pharmacology, 2026
- **DOI**: [https://doi.org/10.1002/psp4.70228](https://doi.org/10.1002/psp4.70228)

### Quick Take
Essential reading for pharmacometricians and computational chemists involved in early drug discovery. This review comprehensively maps the integration of machine learning (particularly graph neural networks and ensemble methods) with PBPK modeling through QSAR intermediates, demonstrating 15-30% improvement in PK prediction accuracy over conventional in vitro inputs. Particularly valuable for those navigating the interpretability-performance trade-off and seeking regulatory-compliant workflows for AI-derived parameters.

---

### Executive Summary
This review synthesizes the emerging paradigm of integrating machine learning (ML) with physiologically based pharmacokinetic (PBPK) modeling through quantitative structure-activity relationship (QSAR) intermediates. Traditional PBPK models require 30-50 compound-specific parameters (tissue partition coefficients, metabolic clearances, binding affinities) that demand weeks of laboratory experimentation per compound, creating bottlenecks in early drug discovery. The authors demonstrate that ML-enhanced QSAR models—particularly graph neural networks (GNNs), ensemble methods, and deep neural networks—can predict these input parameters directly from molecular structure with 15-30% improved accuracy over conventional regression-based QSAR approaches. When integrated into mechanistic PBPK frameworks, this workflow maintains physiological interpretability while extending applicability to diverse chemical spaces. The review catalogs over 30 recent studies (Table 2) showing that ML-PBPK integration achieves 65-70% prediction accuracy within twofold error for AUC and clearance, compared to 47-55% for conventional PBPK with standard in vitro inputs. Critical challenges include limited chemical diversity in training data, the interpretability-performance trade-off, and evolving regulatory requirements for AI-derived parameters in submissions.

---

## ⚡ Methodological Snapshot
This review employs systematic literature synthesis to examine the integration of machine learning with PBPK and QSAR modeling. The authors conducted comprehensive PubMed searches through April 2025, identifying over 100 relevant studies and applying inclusion criteria requiring direct ML-PBPK integration with quantitative performance metrics. The methodological scope spans three hierarchical levels: (1) QSAR-level innovations where GNNs, attention mechanisms, and ensemble methods predict ADME properties from molecular structure with superior accuracy to traditional descriptors; (2) Integration architectures including two-stage workflows (ML parameter prediction → PBPK simulation), Neural-ODE end-to-end learning, and multi-modal proteochemometric approaches; and (3) Validation frameworks emphasizing scaffold-split and time-split cross-validation to ensure generalizability across chemical space. The review categorizes algorithms by data requirements—traditional RF/GBM for moderate datasets versus GNNs for industrial-scale data—and evaluates interpretability trade-offs using SHAP values and attention weights. Special attention is given to nanomedicine applications where ML-PBPK integration addresses unique challenges of nanoparticle biodistribution and protein corona formation.

---

## 🏗️ Structural Model Breakdown
The review describes a hierarchical modeling architecture rather than a single structural model. At the foundational level, traditional PBPK models consist of 30-50 compound-specific parameters including tissue-to-plasma partition coefficients (Kp), metabolic clearance rates (CL), plasma protein binding (fup), and absorption rate constants (ka). These parameters feed into mechanistic compartmental models representing organs connected by blood flow, typically solved using systems of differential equations. The innovation lies in replacing experimental or regression-based QSAR estimation of these inputs with ML-predicted values. Three structural integration approaches are detailed: (1) Two-stage—ML models (RF, GNN, DNN) predict individual PBPK parameters from SMILES strings or molecular graphs, which are then input into conventional PBPK software (Simcyp, GastroPlus); (2) Neural-ODE—End-to-end architectures where neural networks learn PK parameters while simultaneously solving the differential equations governing drug disposition; (3) Ensemble hybrid—Combining ML predictions with mechanistic equations (e.g., using ML to predict tissue composition-based partition coefficients). The PBPK model structure itself remains mechanistic—preserving physiological compartments and mass balance—while ML enhances the parameter estimation layer. Population variability is addressed through nested Monte Carlo simulations decoupling parameter uncertainty from biological variability, with ML providing probabilistic outputs (confidence intervals) rather than point estimates.

---

### Detailed Methodological Analysis

#### Modeling Approach
Review methodology: narrative synthesis with systematic literature search. Technical approaches reviewed include: (1) Two-stage workflow—ML prediction of ADME parameters (clearance, volume of distribution, partition coefficients) followed by PBPK simulation; (2) End-to-end integration—Neural-ODE architectures combining differential equation solutions with neural networks; (3) Ensemble hybrid—Combining ML predictions with mechanistic partitioning equations; (4) Multi-modal—Integrating molecular structure with genomic, proteomic, and physiological data (proteochemometric modeling). Software platforms mentioned include GI-Sim, Simcyp Simulator, GastroPlus, and custom Python/R implementations using TensorFlow/PyTorch.

#### Data Sources
Systematic literature review conducted using PubMed search terms "(PBPK) AND (Machine Learning) AND (ADME) AND (Drug)" through April 9, 2025, yielding 106 records for QSAR-ML analysis and 35+ studies for ML-PBPK integration. Inclusion criteria: (1) direct integration of ML with PBPK modeling, (2) quantitative performance metrics provided. Data sources for reviewed studies included public databases (ChEMBL, PubChem), proprietary industrial datasets, clinical trial PK data, and in vitro assay results (Caco-2, hepatocyte clearance, plasma protein binding).

#### Estimation Methods
Reviewed studies employed diverse ML estimation approaches: (1) Traditional ML—Random Forest (RF), Support Vector Machines (SVM), Gradient Boosting Machines (GBM), XGBoost; (2) Deep Learning—Multi-layer Perceptrons (MLP), Convolutional Neural Networks (CNN), Deep Neural Networks (DNN); (3) Graph-based—Message Passing Neural Networks (MPNN), Graph Attention Networks (GAT), Graph Neural Networks (GNN); (4) Ensemble—Stacking, bagging, consensus models; (5) Specialized—Neural-ODE, Bayesian neural networks, quantum circuit search (QCS-ADME).

#### Model Evaluation
Validation strategies emphasized in reviewed studies include scaffold-split and time-split cross-validation to avoid overly optimistic estimates from random splitting of structurally similar compounds. Performance metrics included: percentage within twofold error (industry standard), RMSE, MAE, R², ROC-AUC for classification, and geometric mean fold error (GMFE) for regression across logarithmic PK parameter ranges. External validation against independent datasets was considered gold standard. Uncertainty quantification methods included Bayesian frameworks, Monte Carlo simulations, and ensemble variance estimation.

#### Covariate Analysis
Not applicable as primary research; however, reviewed studies employed various feature selection methods including SHapley Additive exPlanations (SHAP) for interpretability, recursive feature elimination, and mechanistic descriptor prioritization (LogP, molecular weight, protein binding markers) to maintain biological plausibility.

---

### Scientific Context & Motivation
The review addresses the fundamental bottleneck in early drug development: traditional PBPK models require 30-50 compound-specific parameters (tissue partition coefficients, metabolic clearances, binding affinities) that demand 3-4 weeks of laboratory experimentation per compound, limiting high-throughput screening capabilities. While PBPK provides mechanistic insight, its applicability domain is constrained by experimental data availability. Simultaneously, conventional QSAR models using linear regression or simple molecular descriptors often fail to capture complex, non-linear structure-property relationships. The knowledge gap lies in bridging high-throughput computational screening with mechanistic physiological modeling—maintaining the biological interpretability of PBPK while leveraging ML's pattern recognition capabilities to predict input parameters from chemical structure alone. This integration is critical given that 40% of clinical failures in the 1990s were attributed to poor PK properties, and even with current methods, bottom-up PBPK achieves only 37-50% accuracy within twofold error for immediate-release formulations.

---

### Statistical Rigor Assessment
As a narrative review, statistical rigor assessment focuses on the quality of evidence synthesis and inclusion criteria. The authors employed systematic search strategies with explicit inclusion criteria (direct ML-PBPK integration plus quantitative metrics), reducing selection bias. However, the review highlights critical statistical limitations in the underlying literature: standard k-fold cross-validation provides overly optimistic performance estimates for ADME prediction due to structural similarity between training and test compounds. The authors appropriately emphasize that scaffold-split and time-split validation are necessary to assess true generalizability. For regression models predicting PK parameters spanning multiple orders of magnitude, the review correctly identifies geometric mean fold error (GMFE) as the preferred metric over RMSE. The discussion of uncertainty quantification—distinguishing between aleatoric (experimental variability) and epistemic (model knowledge limitations) uncertainty—demonstrates sophisticated statistical awareness. Missing data handling in reviewed studies varied from simple mean imputation to multiple imputation, with the authors noting that Bayesian approaches best preserve physiological plausibility in PBPK contexts.

---

## 📊 Key Findings
The review synthesizes evidence that ML-enhanced PBPK workflows consistently outperform conventional approaches across multiple endpoints. Key quantitative findings include: (1) Li et al. (2024) demonstrated 65% of AUC predictions within twofold error using ML-predicted parameters (fup, Caco-2 permeability, clearance) versus 47.5% with standard in vitro inputs; (2) Walter et al. (2025) achieved 70% rat PK predictions within twofold error versus 55% for conventional models; (3) Gülave et al. (2025) attained 83% accuracy in CNS exposure prediction using ensemble methods integrated with the LeiCNS-PK3.0 model; (4) Führer et al. (2024) reported 35% reduction in mean absolute error for clearance prediction using DNN-mechanistic integration; (5) Chou et al. (2023) achieved R² = 0.83 for nanoparticle tumor delivery prediction using ANNs. Algorithm performance varies by endpoint: GNNs excel for structure-based predictions (clearance, volume of distribution) with industrial-scale datasets (>10,000 compounds), while random forest and gradient boosting machines provide optimal performance for classification tasks (BBB penetration) with moderate datasets. Ensemble methods consistently outperform individual algorithms by 10-15% across diverse chemical spaces. Transfer learning and multi-task learning show particular promise for data-limited endpoints, leveraging shared biological patterns across ADME properties.

---

## 💡 Clinical & Regulatory Implications
The integration of ML-predicted ADME parameters into PBPK models enables earlier go/no-go decisions in drug discovery by allowing high-throughput screening of virtual compounds prior to synthesis. For safety assessment, ML-PBPK frameworks demonstrate particular value in predicting drug-drug interactions (78% accuracy vs 65-70% for standalone approaches) and tissue-specific bioaccumulation for toxicity evaluation. The approach supports patient-specific dosing through better characterization of population variability, with applications demonstrated in special populations including sex-specific differences and pediatric considerations. Regulatory agencies are increasingly receptive to these methods, with the 2024 EMA Reflection Paper and 2026 joint EU-US Guiding Principles establishing risk-based frameworks for AI-supported regulatory decision-making. However, clinical translation requires demonstrating that ML-predicted parameters meet established PBPK validation standards—particularly showing predictive performance across multiple compounds with similar ADME characteristics and providing transparent mechanistic justification for predictions.

---

### Strengths & Limitations

#### Strengths
- Comprehensive scope covering 2016-2025 with systematic inclusion criteria and chronological organization showing field evolution
- Balanced treatment of algorithm categories with practical guidance on selection (Table 3) based on dataset size and interpretability needs
- Critical emphasis on validation rigor (scaffold-split, time-split) often overlooked in primary ML-ADME literature
- Forward-looking discussion of regulatory landscape including 2024 EMA Reflection Paper and 2026 EU-US Guiding Principles
- Practical focus on uncertainty quantification and error propagation—essential for regulatory-grade modeling
- Strong coverage of emerging areas (nanomedicine, Neural-ODE, quantum-enhanced learning) alongside established methods
- Clear delineation of workflow options (two-stage vs end-to-end) with performance benchmarks for each

#### Limitations (Acknowledged by Authors)
- Limited chemical diversity in publicly available ADME datasets creates risk when models encounter novel molecular scaffolds
- Trade-off between model interpretability and predictive performance—complex models (GNNs, deep learning) often lack transparency required for regulatory acceptance
- Computational demands of deep learning approaches during training, though inference efficiency is maintained
- Propagation of parameter uncertainty from QSAR predictions through PBPK models can lead to >60% changes in equivalent administered dose estimates for some compounds
- Scarcity of clinical data for nanomedicines limits "big data" approaches in this emerging therapeutic area
- Regulatory acceptance remains evolving; current guidelines require mechanistic justification for AI-derived parameters not yet standardized

#### Limitations (Expert Review)
- Review focuses predominantly on small molecules; limited discussion of biologics, peptides, or complex modalities where PBPK-ML integration differs fundamentally
- Insufficient critical evaluation of publication bias—high-performance industrial studies may be overrepresented while negative results remain unpublished
- Limited discussion of software implementation challenges and code availability for reviewed methods
- Could benefit from quantitative meta-analysis of performance metrics across studies rather than narrative synthesis
- Minimal discussion of hardware requirements and carbon cost of training large GNNs versus traditional methods
- Regulatory discussion focuses on FDA/EMA; limited coverage of other major agencies (PMDA, NMPA)

#### Generalizability
The review's findings are broadly generalizable across small-molecule drug development, with specific applications demonstrated for CNS drugs, oncology nanomedicines, and veterinary therapeutics. However, generalizability is limited by the predominance of industrial datasets (not publicly available) in high-performance studies, and the underrepresentation of biologics, complex natural products, and certain special populations (pediatric, pregnant) in the reviewed literature. The nanomedicine section highlights unique challenges that may not generalize to conventional small molecules.

---

### Key Equations

**Maximum Plasma Concentration**

$$
C_{\text{max}} = \max(C(t))
$$

Standard pharmacokinetic parameter representing the maximum observed drug concentration in plasma following administration, a primary endpoint for safety and efficacy assessment in PBPK modeling.

**Area Under Curve to Last Timepoint**

$$
\text{AUC}_{0-t_{\text{last}}} = \int_{0}^{t_{\text{last}}} C(t)   dt
$$

Standard metric for total drug exposure, calculated as the area under the concentration-time curve from administration to the last measurable time point, critical for dose optimization and bioequivalence assessment.

**Time to Maximum Concentration**

$$
t_{\text{max}} = \arg\max_{t} C(t)
$$

Time to reach maximum plasma concentration, indicating absorption rate characteristics and formulation performance in PBPK simulations.

**Tissue-Plasma Partition Coefficient**

$$
K_p = \frac{C_{\text{tissue}}}{C_{\text{plasma}}}
$$

Tissue-to-plasma partition coefficient, a critical PBPK input parameter representing the equilibrium distribution ratio between tissue and plasma concentrations, often predicted by ML-QSAR models to avoid experimental measurement.


---

### Figures & Tables

- **Table 2**: Comprehensive literature compilation of 30+ studies (2016-2025) integrating ML with PBPK modeling, detailing ML methods (RF, GNN, DNN, XGBoost), integration approaches, and quantitative performance metrics. Studies organized chronologically showing evolution from simple parameter prediction to end-to-end neural architectures.
  - *Significance*: Serves as the evidentiary core of the review, demonstrating consistent 15-30% accuracy improvements across diverse applications (rat PK, human clearance, nanoparticle delivery, DDI prediction). Essential reference for practitioners selecting algorithms for specific endpoints—showing GNNs excel for structure-based predictions while ensemble methods provide robust uncertainty quantification.
- **Table 1**: Performance validation data from the IMI Oral Biopharmaceutics Tools (OrBiTo) project comparing three PBPK platforms (GI-Sim, Simcyp, GastroPlus) across formulation types. Shows percentage of predictions within twofold error for AUC, Cmax, and tmax.
  - *Significance*: Provides critical context that conventional PBPK achieves only 37-50% accuracy for immediate-release solid formulations, establishing the performance baseline that ML-enhanced methods must exceed. The IV data (74% within twofold) versus oral data (41-55%) highlights the specific need for ML improvement in absorption prediction.
- **Table 3**: Algorithm comparison matrix categorizing ML approaches (Traditional ML, Ensemble, Deep Neural Networks, GNNs, Transfer Learning, Multi-modal, Quantum-enhanced) across performance characteristics, interpretability, computational efficiency, and optimal applications.
  - *Significance*: Practical decision-support tool for algorithm selection. Key insight: traditional RF/GBM offer best interpretability-efficiency balance for moderate datasets, while GNNs require industrial-scale data (10,000+ compounds) to outperform simpler methods. Highlights the interpretability cost of quantum and multi-modal approaches.
- **Figure 1**: Four-step workflow schematic showing: (1) PK profile database construction, (2) ML model training for ADME parameter prediction, (3) Integration of ML-predicted parameters into PBPK frameworks, and (4) Validation against observed clinical data. Includes nanoparticle-specific branch.
  - *Significance*: Conceptual framework defining the standard workflow for ML-PBPK integration. Critical for understanding that ML replaces the parameter estimation step, not the mechanistic simulation itself—preserving physiological interpretability while improving input quality.
- **Figure 2**: Three-layer framework schematic illustrating molecular input → representation transformation (graph embeddings/fingerprints) → ML-compatible format → ADME prediction. Shows integration of chemical structure with genomic and physiological data.
  - *Significance*: Visualizes the QSAR-ML interface where modern architectures (GNNs, attention mechanisms) replace traditional molecular descriptors. Emphasizes the shift from fingerprint-based to graph-based representations that preserve full molecular topology.
- **Figure 3**: Strategic deployment map showing ML-enhanced QSAR and PBPK applications across discovery, preclinical, clinical, and regulatory stages. Includes candidate selection, formulation optimization, safety assessment, and patient-specific dosing.
  - *Significance*: Demonstrates the comprehensive utility of integrated workflows across the drug development lifecycle. Highlights specific applications: early virtual screening (high-throughput), DDI prediction (safety), and nanomedicine optimization (specialized delivery).

---



### Future Directions
The field is evolving toward unified platforms that dissolve the boundary between data-driven and mechanistic approaches, exemplified by Neural-ODE architectures embedding PK principles directly into neural network designs. Immediate research priorities include: (1) developing standardized benchmark datasets across diverse chemical spaces to enable objective algorithm comparison; (2) implementing uncertainty quantification methods (Bayesian neural networks, ensemble variance) to address parameter error propagation from QSAR to PBPK; (3) creating interpretable AI architectures that satisfy regulatory transparency requirements without sacrificing predictive power; (4) establishing federated learning platforms (following the MELLODDY consortium model) to enable multi-organization training without data sharing; and (5) specialized architectures for nanomedicine that incorporate protein corona formation and physicochemical transformations. Regulatory evolution will require validation frameworks specific to ML-derived parameters, likely mandating scaffold-split validation, prospective temporal validation, and explicit mechanistic justification for predictions. The convergence of quantum computing with GNNs (QCS-ADME) represents a longer-term opportunity for handling imbalanced ADME datasets.

---

### Expert Commentary
As a senior pharmacometrician, I view this review as a crucial milestone marking the field's transition from purely mechanistic to hybrid mechanistic-ML workflows. The authors correctly identify that the future lies not in replacing PBPK with black-box ML, but in Neural-ODE architectures and multi-modal learning that preserve physiological constraints while leveraging pattern recognition. The performance improvements cited—particularly the 65% vs 47% AUC prediction accuracy—represent clinically meaningful advances that could reduce the 40% attrition rate historically attributed to poor PK properties. However, I caution that the "garbage in, garbage out" principle remains paramount; the IMI-OrBiTo data showing only 37-50% accuracy for immediate-release formulations (Table 1) reminds us that ML cannot compensate for fundamental gaps in mechanistic understanding of absorption. The regulatory discussion is particularly timely—the 2026 EU-US Guiding Principles mentioned will likely require explicit uncertainty quantification and SHAP-based interpretability for ML-derived parameters. A teaching point for junior modelers: the scaffold-split validation emphasized here is non-negotiable for ADME applications, as standard random cross-validation produces dangerously optimistic performance estimates due to chemical series redundancy. The nanomedicine section highlights an important frontier where PBPK-ML integration is essential due to sparse data availability, though I note the authors' appropriate caution that these complex systems often require "intelligent models combining human expertise with computational frameworks" rather than pure data-driven approaches.

---

### Bottom Line
This comprehensive review establishes that ML-enhanced QSAR predictions integrated into mechanistic PBPK frameworks represent a paradigm shift for early drug development, delivering 15-30% improvement in PK prediction accuracy compared to traditional in vitro inputs. For practicing pharmacometricians, the key takeaway is that hybrid workflows—where graph neural networks or ensemble methods predict partition coefficients, clearance, and binding parameters for subsequent PBPK simulation—enable high-throughput screening of virtual libraries while preserving mechanistic interpretability. However, successful implementation requires rigorous validation against scaffold-split or time-split test sets, explicit uncertainty quantification for regulatory acceptance, and careful attention to the interpretability-performance trade-off. The field is moving toward Neural-ODE architectures and federated learning platforms that dissolve the boundary between data-driven and mechanistic modeling, making this review essential reading for modelers seeking to leverage AI without sacrificing physiological plausibility.

---

---

## 📊 Figures



```{=typst}
#set page(flipped: true)
#figure(
  image("figures/fig_01.jpg", width: 90%),
  caption: [FIGURE 1: Workflow for AI-assisted PBPK model development for pharmacokinetic prediction of drugs and nanoparticles. The figure illustrates the integrated four-step framew],
  placement: auto,
) <fig-1>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_02.jpg", width: 90%),
  caption: [FIGURE 2: A schematic to illustrate the integration of machine learning with QSAR for ADME prediction. The figure illustrates a three-layer framework for integrating machi],
  placement: auto,
) <fig-2>
#set page(flipped: false)
```



```{=typst}
#pagebreak()
#set page(flipped: true)
#figure(
  image("figures/fig_03.jpg", width: 90%),
  caption: [FIGURE 3: Machine learning-enhanced QSAR and PBPK model applications across drug development stages. The figure shows the strategic deployment of computational models thro],
  placement: auto,
) <fig-3>
#set page(flipped: false)
```

