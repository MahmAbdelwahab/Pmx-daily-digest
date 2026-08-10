---
layout: post
title: "DDIapp—A Web-Based Application for Static Drug–Drug Interaction Assessment"
date: 2026-08-10
authors: "Not specified (Sanofi employees, per acknowledgments)"
journal: "Not specified (available via PubMed, 2026)"
doi: "N/A"
paper_type: methodology
tags: [methodology]
excerpt_text: "An open-source, Shiny for Python web application implementing ICH M12-compliant static DDI risk assessment (enzyme inhibition, induction, transporter inhibition, net-effect AUCR), validated to produce identical results to Certara's DDI calculator."
pdf_path: "/assets/digests/2026-08-10-ddiappa-web-based-application-for-static-drugdrug-interaction-assessment/PMx_DDIappA_WebBased_Application_for_Static__20260810.pdf"
retroactively_classified: false
---

**Content Source:** Full Text

### Quick Take
An open-source, Shiny for Python web application implementing ICH M12-compliant static DDI risk assessment (enzyme inhibition, induction, transporter inhibition, net-effect AUCR), validated to produce identical results to Certara's DDI calculator.

---

### Executive Summary
DDIapp is an open-source, free web application for static drug–drug interaction risk assessment, built with Shiny for Python and strictly aligned with the ICH M12 guideline (2024). It implements modular calculators for enzyme inhibition (competitive and time-dependent/irreversible), enzyme induction, transporter inhibition (intestinal efflux, hepatic uptake, renal uptake/efflux), and an integrated mechanistic 'net effect' model predicting victim-drug AUCR. Unbound fraction estimation (fu,mic, fu,hep) is supported via experimental input or the Austin, Hallifax, and Kilford methods, with enzyme-specific fu,inc overrides. The app automates risk categorization with color-coded alerts based on ICH M12 thresholds, displays all governing equations for transparency, and exports summary tables to Excel/PDF. Validation against Certara's DDI calculator reproduced identical net-effect AUCR (9.240 for CYP3A4/midazolam), establishing concordance with industry-standard software.

---

### Scientific Context & Motivation
Pharmacokinetic drug–drug interactions are a leading safety concern in drug development (e.g., amiodarone–simvastatin interactions leading to rhabdomyolysis risk). Regulatory guidance has evolved significantly, culminating in the 2024 ICH M12 guideline endorsed by FDA, EMA, PMDA, and NMPA. Static DDI models—which relate in vivo inhibitor concentrations (typically Cmax or intestinal concentrations) to in vitro inhibition/induction constants (Ki, KI, IC50, EC50, Kinact)—are the established first-line framework for prioritizing clinical DDI studies and classifying inhibitors/inducers. However, until now there was no free, open-source calculator implementing the ICH M12 static models with transparent equation display. Researchers relied on commercial tools (e.g., Certara DDI calculator, Simcyp) with limited transparency, or error-prone manual spreadsheet computations. DDIapp fills this gap by providing a validated, regulatorily aligned, customizable platform.

---

## ⚡ Methodological Snapshot
DDIapp implements four static-model modules aligned with ICH M12: (1) competitive enzyme inhibition—hepatic R=(Cmax×fu,p)/(Ki×fu,mic) and intestinal R=(Dose×10⁶)/(MW×250×Ki×fu,mic), with thresholds R>1.25 and R>10 respectively; (2) time-dependent inhibition—R=(Kobs+Kdeg,h)/Kdeg,h with Kobs=(Kinact×5×Cmax×fu,p)/(KI×fu,mic+5×Cmax×fu,p), using CYP-isoform-specific default Kdeg values; (3) enzyme induction—R=1/[1+d×Emax×10×Cmax×fu,p/(EC50×fu,hep+10×Cmax×fu,p)], with default d=1 and cutoff-based classification (strong R<0.2, moderate 0.2–0.5, weak 0.5–0.8); (4) transporter inhibition with compartment-specific R formulas (intestinal efflux, hepatic uptake using Cmax,in, renal uptake/efflux using Cmax). The net-effect module predicts AUCR by multiplicatively combining hepatic (Ah×Bh×Ch) and intestinal (Ag×Bg×Cg) reversible inhibition, time-dependent inhibition, and induction, weighted by fm and Fg. Unbound fraction estimation methods (Austin, Hallifax for fu,mic; Austin, Kilford for fu,hep) provide empirical scaling from LogP/LogD and protein concentration.

---

## 📐 Statistical Framework
The models are deterministic, equation-based static calculations (no stochastic components). Core assumptions: (a) Michaelis–Menten enzyme kinetics govern inhibition/induction; (b) unbound concentrations at the enzyme active site are approximated by plasma unbound concentrations scaled by fu,mic/fu,hep/fu,inc; (c) Cmax (with a 5-fold accumulation factor for TDI and 10-fold for induction, per ICH M12) represents worst-case inhibitory/inductive exposure; (d) hepatic and intestinal effects are multiplicatively independent in the net-effect model; (e) a linear relationship between inhibition R and AUCR is assumed, with R>1.25 or <0.8 triggering clinical study requirements. The time-dependent inhibition model R=(Kobs+Kdeg,h)/Kdeg,h assumes first-order enzyme degradation kinetics and that inactivation follows a saturable (Michaelis-Menten-type) process with KI and Kinact. The induction model uses an Emax pharmacodynamic form with an empirical d-factor (default 1) to scale in vitro to in vivo. Unbound fraction methods (Austin: fu,mic=1/(1+10^(0.072·logP²+0.067·logP−1.126)·Cprotein); Hallifax and Kilford variants) are logP/logD- and protein-concentration-dependent empirical relationships.

---

### Estimator Behavior
As deterministic calculators, DDIapp outputs are point estimates with no confidence intervals. R values scale linearly with Cmax and inversely with Ki/IC50. The Kobs formula saturates at high Cmax (approaching Kinact), bounding the maximum R for time-dependent inhibition. The induction model asymptotically approaches 1/(1+d×Emax) at high inducer concentrations. The net-effect AUCR is multiplicatively decomposed into hepatic and intestinal components, with a lower bound governed by fm and Fg; when fm→1 and inhibition is strong, AUCR can become very large (e.g., 9.24 in the validation example). Convergence is not applicable since no iterative estimation is performed.

---

### Validation Design
Validation was performed by concordance testing against Certara's drug–drug interaction calculator (a commercial, industry-standard tool) under ICH M12 evaluation conditions using identical input parameters. The single published validation example used: common parameters MW=300 g/mol, Cmax=500 ng/mL, fu,p=0.01, Dose=200 mg, ka=6/h, Fa=Fg=1, Rb=0.55, fu,mic=fu,hep=0.1; CYP3A4 inhibition with midazolam: Ki=10 μmol/L, KI=10 μmol/L, Kinact=0.1/h, Kdeg,g=0.029/h, Kdeg,h=0.0193/h; induction: Emax=0.3, EC50=20 μmol/L, d=1; fm,CYP3A4=0.93, Fg=0.44. The outputs were identical between DDIapp and Certara: AUCR=9.240, Induction-only=0.796, Inhibition-only=9.780. This was supplemented by rigorous internal validation performed independently by multiple team members (details not published). No simulation-based evaluation, Monte Carlo analysis, or benchmark against clinical observed AUCR data is included.

---

### Comparison to Alternatives
Against Certara's DDI calculator, DDIapp produces identical numerical results (verified for the CYP3A4/midazolam net-effect example) while being free and open-source. Compared with PBPK platforms (Simcyp, GastroPlus), DDIapp is far simpler and less data-hungry but provides no time-course simulation, mechanistic absorption/distribution, or population variability. Relative to spreadsheet-based manual calculations, DDIapp reduces transcription errors, enforces ICH M12 consistency, provides automated alert thresholds, and displays the governing equations inline—transparency that proprietary black-box tools often lack. The main disadvantage is the lack of dynamic modeling capacity and limited published validation coverage.

---

### Implementation Guidance
Web app: https://qp-pmxr.shinyapps.io/ddiapp/; source: https://github.com/Sanofi-Public/DDIapp. Practical tips: (1) convert Cmax from ng/mL to μmol/L via Cmax[μmol/L]=Cmax[ng/mL]/MW; (2) input fu,p=0.01 if measured fu,p<0.01; (3) use ka=6/h if unknown (worst-case), Fa=Fg=1 if unknown; (4) Rb defaults: 1.0 for neutrals/bases, 0.55 for acids/zwitterions; (5) enzyme-specific fu,inc overrides the common fu,mic/fu,hep; (6) review and adjust default fm/Fg values for the specific clinical substrate (literature often reports only 'predominantly metabolized by CYP3A4' implying fm≈0.8–0.9); (7) for the net-effect module, set Kdeg,g explicitly if intestinal enzyme degradation is expected to differ from Kdeg,h. Computation is instantaneous (server-side Shiny); exports preserve color-coding in Excel but not PDF (alert column compensates).

---

## 📊 Key Findings
1. DDIapp implements the full ICH M12 static modeling framework: competitive enzyme inhibition (hepatic and intestinal), time-dependent (irreversible) CYP inhibition, enzyme induction, transporter inhibition (intestinal efflux, hepatic uptake, renal uptake/efflux), and an integrated net-effect AUCR model. 2. Flexible unbound fraction parameterization is provided: fu,mic/fu,hep can be entered experimentally or estimated via Austin, Hallifax, or Kilford methods; enzyme-specific fu,inc values override the common value when supplied. 3. Validation against Certara's DDI calculator under ICH M12 conditions produced identical net-effect results (AUCR=9.240, induction-only=0.796, inhibition-only=9.780 for CYP3A4/midazolam), confirming numerical concordance. 4. Automated risk categorization with color-coded alerts follows ICH M12 thresholds (e.g., R>1.25 for hepatic competitive inhibition; R>10 for intestinal efflux; R<0.20 for strong induction; AUCR>1.25 or <0.80 for net effect). 5. The application is the first free, open-source static DDI calculator aligned with ICH M12, with GitHub availability, transparent equation display, and Excel/PDF export capabilities.

---

### Strengths & Limitations

#### Strengths
- First open-source, free static DDI calculator explicitly aligned with ICH M12, endorsed by all major regulatory agencies.
- Transparent, inline display of all governing equations and intermediate values (e.g., Ah, Bh, Ch) in the results tables, supporting interpretability and regulatory documentation.
- Validation concordance against Certara's industry-standard DDI calculator on the demonstrated CYP3A4/midazolam example.
- Modular software architecture allowing users to add or remove enzymes/transporters and adapt to evolving guidelines without a full rebuild.
- Multiple unbound-fraction estimation methods (Austin, Hallifax, Kilford) with enzyme-specific fu,inc overrides for refined assessments.
- Automated ICH M12 threshold-based risk classification with color-coded alerts and exportable summary tables (Excel/PDF).
- Integrated glossary with links to FDA/EMA/PMDA/NMPA guidance documents, aiding education and compliance.

#### Limitations (Acknowledged by Authors)
- PDF exports do not preserve color-coded risk indicators (Excel preserves them), requiring reliance on the alert column in PDF reports.
- Default fm values for clinical substrates are inferred from literature qualitative pathway descriptions (e.g., 'predominantly CYP3A4') and typically assume fm in the 0.8–0.9 range; users must review and adjust per compound-specific data.
- The d-factor for induction is an empirical calibration parameter, defaulted to 1 when not experimentally estimated.
- Kdeg,g is defaulted to equal Kdeg,h when not specified, assuming similar intestinal and hepatic enzyme degradation kinetics.
- Unknown parameters default to worst-case values (ka=6/h, Fa=Fg=1, Rb=1 for neutrals/bases), which bias risk estimates conservatively.

#### Limitations (Expert Review)
- Validation is demonstrated on only a single net-effect scenario (CYP3A4/midazolam); systematic concordance testing across the full enzyme/transporter panel, parameter ranges, and edge cases (very high/low fm, Fg, extreme Ki/IC50) is absent.
- No formal uncertainty quantification, confidence intervals, or global sensitivity analysis; users receive point estimates only, with no guidance on how parameter uncertainty propagates to risk classification.
- The static Cmax-based framework can substantially overestimate DDI risk for inhibitors with slow binding kinetics or when unbound plasma concentrations overestimate intracellular/hepatocyte concentrations.
- The 5-fold (TDI) and 10-fold (induction) accumulation factors are empirical and may not universally apply; no guidance is given for alternatives (e.g., using AUC-based exposure).
- No unit testing, continuous integration, or formal regression test suite is described in the paper; reproducibility of future code changes is not guaranteed.
- The deterministic multiplicative net-effect model assumes independence between intestinal and hepatic processes, which may not hold for high-hepatic-extraction drugs (Fg interplay) or substrates undergoing both gut and liver metabolism by different isoforms.

#### Generalizability
The static-model framework and ICH M12 implementation are broadly applicable to typical small-molecule oral drug candidates with well-characterized in vitro enzyme/transporter data. The tool should generalize across development stages (discovery through registration) and across therapeutic areas. However, generalizability is constrained by: validation limited to a single worked example (CYP3A4/midazolam); the static Cmax-based approach being unsuitable for inhibitors with slow distribution, time-dependent concentration profiles, or complex absorption; and the inapplicability to biologics or macromolecular therapeutics. The open-source architecture allows extension, but users must adapt defaults (fm, Fg, Kdeg) to their compound.

---

### Key Equations

**Competitive hepatic inhibition R**

{% raw %}
$$
R_{hepatic} = \frac{C_{max} \times f_{u,p}}{K_i \times f_{u,mic}}
$$
{% endraw %}

R calculation for competitive (reversible) hepatic enzyme inhibition, the ratio of systemic unbound Cmax to the unbound inhibition constant.

**Competitive intestinal inhibition R**

{% raw %}
$$
R_{intestinal} = \frac{\text{Dose} \times 1000000}{MW \times 250 \times K_i \times f_{u,mic}}
$$
{% endraw %}

R calculation for competitive inhibition at the intestinal level, using the luminal concentration approximated by Dose/(250 mL × MW).

**Time-dependent inhibition R (hepatic)**

{% raw %}
$$
R = \frac{K_{obs} + K_{deg,h}}{K_{deg,h}}
$$
{% endraw %}

Time-dependent (irreversible) inhibition R as the ratio of the apparent inactivation rate constant plus endogenous degradation to the endogenous degradation rate constant.

**Observed inactivation rate (Kobs)**

{% raw %}
$$
K_{obs} = \frac{K_{inact} \times 5 \times C_{max} \times f_{u,p}}{K_I \times f_{u,mic} + 5 \times C_{max} \times f_{u,p}}
$$
{% endraw %}

The observed inactivation rate constant combining Kinact, the in vivo Cmax (with 5-fold accumulation factor per ICH M12), and unbound fractions to reference the unbound system.

**Enzyme induction R**

{% raw %}
$$
R = \frac{1}{1 + \frac{d \times E_{max} \times 10 \times C_{max} \times f_{u,p}}{EC_{50} \times f_{u,hep} + 10 \times C_{max} \times f_{u,p}}}
$$
{% endraw %}

Enzyme induction R, where d is an empirical calibration factor, Emax is maximum fold induction, and fu,hep converts EC50 to unbound terms.

**Net effect AUCR**

{% raw %}
$$
AUCR = \frac{1}{[A_g \times B_g \times C_g] \times (1-F_g) + F_g} \times \frac{1}{[A_h \times B_h \times C_h] \times f_m + (1-f_m)}
$$
{% endraw %}

Net-effect AUCR prediction decomposing hepatic (Ah×Bh×Ch) and intestinal (Ag×Bg×Cg) effects, weighted by Fg and fm.

**Intestinal [I]g**

{% raw %}
$$
[I]_g = F_a \times k_a \times \frac{\text{Dose} \times 1000}{MW \times Q_{en}}
$$
{% endraw %}

Intestinal inhibitor concentration at the gut, from the absorbed fraction and absorption rate divided by enterocyte blood flow.

**Hepatic inlet [I]h**

{% raw %}
$$
[I]_h = f_{u,p} \times \left( C_{max} + \frac{F_a \times F_g \times k_a \times \text{Dose} \times 1000}{MW \times Q_h \times R_b} \right)
$$
{% endraw %}

Hepatic inlet inhibitor concentration combining systemic Cmax with the absorbed contribution scaled by hepatic blood flow and blood-to-plasma ratio, then scaled by fu,p for the unbound value.

**Hepatic reversible inhibition factor Ah**

{% raw %}
$$
A_h = \frac{1}{1 + \frac{[I]_h}{K_i \times f_{u,mic}}}
$$
{% endraw %}

Reversible inhibition factor for the hepatic compartment—the fraction of enzyme activity remaining in the presence of unbound inhibitor.

**Hepatic TDI factor Bh**

{% raw %}
$$
B_h = \frac{K_{deg,h}}{K_{deg,h} + \frac{[I]_h \times K_{inact}}{[I]_h + K_I \times f_{u,mic}}}
$$
{% endraw %}

Time-dependent inhibition factor for the hepatic compartment, capturing the balance between inactivation and endogenous enzyme degradation.

**Hepatic induction factor Ch**

{% raw %}
$$
C_h = 1 + \frac{d \times E_{max} \times [I]_h}{[I]_h + EC_{50} \times f_{u,hep}}
$$
{% endraw %}

Induction factor for the hepatic compartment, representing the fold-increase in enzyme activity due to induction.

---

### Figures & Tables

- **Table 1**: Concordance table comparing DDIapp and Certara DDI calculator outputs for CYP3A4 with midazolam as clinical substrate under identical ICH M12 inputs: AUCR=9.240, Induction only=0.796, Inhibition only=9.780 — identical in both tools.
  - *Significance*: This is the primary validation evidence; it demonstrates numerical equivalence with an industry-standard commercial calculator, establishing credibility for regulatory use.
- **Figure 1**: Application overview showing the common parameter input section (MW, Cmax, fu,p, dose, ka, Fa, Fg, Qh, Rb) and sidebar navigation to evaluation modules, summary, and glossary.
  - *Significance*: Defines the user workflow and shared parameter architecture that feeds all subsequent DDI calculations.
- **Figure 3**: Enzyme induction panel (sidebar fu,hep selection; input for Emax/EC50; output summary with R values and alerts).
  - *Significance*: Illustrates the fu,hep estimation methods (experimental, Austin, Kilford) and the induction R calculation workflow with color-coded risk output.
- **Figure 5**: Net-effect panel: sidebar enzyme selection, input for fm and Fg per clinical substrate, and output showing total AUCR plus induction-only and inhibition-only decomposition.
  - *Significance*: Demonstrates the integrated mechanistic static model, the most complex feature, and how intermediate factors (Ah, Bh, Ch, Ag, Bg, Cg) feed the final AUCR.

---

### Code & Reproducibility Assessment
Code is open-source on GitHub (https://github.com/Sanofi-Public/DDIapp) and the app is deployed on shinyapps.io. No formal unit test suite or automated regression testing is documented; validation was performed via concordance with Certara's DDI calculator on a single worked example plus internal manual testing by multiple team members.

---

### Supplementary Materials
No supplementary materials were extracted for this paper. The paper references supplementary files (statDDI_yyyymmdd.xlsx/pdf) generated by the app as examples, but these are not available in the extraction.

---

### Future Directions
Systematic validation across multiple enzymes, transporters, clinical substrates, and a broad parameter space against both Certara and PBPK models. Incorporation of uncertainty quantification and global sensitivity analysis to identify the most influential parameters. Extension to dynamic (PBPK-like) concentration-time modeling for inhibitors with slow distribution. Expansion of the curated fm/Fg database with literature-derived confidence intervals. Integration with clinical trial simulation pipelines and formatted regulatory submission output.

---

### Expert Commentary
This is a timely contribution—the first open-source ICH M12-compliant static DDI calculator. The inline equation display and modular code architecture are genuine strengths that differentiate it from proprietary tools. Concordance with Certara on the single demonstrated example is reassuring, but broader systematic validation across the full enzyme/transporter panel, inhibitor parameter space, and extremes of fm/Fg would materially strengthen confidence. A key caveat: the static framework inherently evaluates worst-case peak exposure (Cmax), so conservative bias is built in. Practitioners should treat DDIapp as a regulatory-aligned screening tool, not a mechanistic prediction engine—for borderline or complex cases, dynamic PBPK modeling will continue to play the primary role in final decision-making.

---

### Bottom Line
DDIapp is a practical, open-source, ICH M12-compliant tool for static DDI risk assessment—well-suited for early-stage screening and regulatory documentation. Users should verify default fm/Fg values and recognize that the static (Cmax-based) framework may overestimate risk for slowly equilibrating inhibitors; for complex scenarios, dynamic PBPK modeling remains the preferred alternative.

---

---

## 📊 Figures

![DDIapp overview: The top section presents common parameters (compound name, molecular weight,Cmax,fu,p, dose,ka,Fa,Fg,Qh, andRb.) applicable across all DDI evalu]({{ site.baseurl }}/assets/digests/2026-08-10-ddiappa-web-based-application-for-static-drugdrug-interaction-assessment/figures/fig_01.png)

![Enzyme inhibition: (a) Sidebar panel for selecting enzyme inhibition, showing user input forfu,mic. Users can either enter an experimental value or select a calc]({{ site.baseurl }}/assets/digests/2026-08-10-ddiappa-web-based-application-for-static-drugdrug-interaction-assessment/figures/fig_02.png)