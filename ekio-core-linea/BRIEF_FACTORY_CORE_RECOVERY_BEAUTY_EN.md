# TECHNICAL BRIEF FOR MANUFACTURER
## Ekio Light — Core Recovery and Core Beauty
### Two variants on the existing Core chassis · v1.1 · 2026-07-27

> **Purpose:** RFQ and design specification document. To be sent to the current manufacturer of the Ekio Light Core. Everything marked **[CONFIRM]** is an open question we need you to answer; everything marked **[REQUIREMENT]** is non-negotiable on our side.

---

## 1. EXECUTIVE SUMMARY

We want to manufacture **two variants** of the **Ekio Light Core** device you already produce for us, **reusing the same chassis, the same battery, and the same LED count**. The only things that change across the three products are the **wavelength combination** and the **LED package architecture** (moving from dual-die to tri-die chips).

| Product | Status | LEDs | Architecture | Wavelengths |
|---|---|---|---|---|
| **Core** (current) | In production | 13 | **Dual**-die chip | 660 · 850 nm |
| **Core Recovery** | **New** | 13 | **Tri**-die chip | **660 · 810 · 940 nm** |
| **Core Beauty** | **New** | 13 | **Tri**-die chip | **590 · 630 · 670 nm** |

**Business objective:** maximum reuse of existing tooling and minimum incremental cost. We are not looking to redesign the product — we want two spectral variants of the same device.

---

## 2. WHAT DOES NOT CHANGE (inherited from the current Core)

**[REQUIREMENT]** All of the following must remain identical to the Core you currently produce:

- **Chassis and mold:** 162 × 90 × 45 mm. Same mold, no modifications.
- **LED count:** 13 emitters, same physical layout on the PCB.
- **Battery:** rechargeable, **USB-C** charging.
- **Lifespan:** >20,000 hours.
- **Pulse mode:** continuous wave (CW) and **10 Hz pulsed**.
- **Zero visible flicker** in CW mode and **low electromagnetic field emission** — this is Ekio's brand differentiator and is not negotiable.
- **Base certifications:** RoHS, CE, WEEE.

**[REQUIREMENT] Difference from the current Core: no independent bank control here.** The current Core lets the user switch on each wavelength separately; **Core Recovery and Core Beauty always fire all three bands together, in a single combined mode** (see §3.2 and §4.3). This simplifies firmware and UI, and likely the number of physical controls — please confirm whether this also reduces the number of driver channels required, or whether you'd keep them separate for current balancing across dies.

---

## 3. SPECIFICATION — CORE RECOVERY (recovery and pain relief)

### 3.1 Spectrum

| Band | Nominal λ | Centroid tolerance | Design function |
|---|---|---|---|
| **660 nm** | 660 | **± 10 nm** | Visible red. Superficial tissue + **visual confirmation to the user** that the device is on |
| **810 nm** | 810 | **± 10 nm** | NIR. Peak absorption band of cytochrome c oxidase. The product's primary band |
| **940 nm** | 940 | **± 15 nm** | Deep NIR. Maximum penetration + perceptible heat on contact |

**[REQUIREMENT]** The **660 nm must be therapeutic-grade, not just a pilot/indicator LED.** It must deliver useful irradiance across the full aperture.

**[REQUIREMENT] We do not accept substitutions without prior consultation.** Specifically:
- **Do not** substitute 810 with 800 or 830 (these fall within the same spectral width — we do not consider them distinct bands).
- **Do not** substitute 940 with 850 or 880.
- **Do not** offer "905 nm" LEDs: this wavelength does not exist as a precision LED, only as a laser diode. Any offer of a "905 nm LED" will be rejected.

### 3.2 Specific functional requirements

- **[REQUIREMENT] Hardware thermal cutoff.** The 940 nm band is absorbed by water and generates perceptible heat on direct contact. The device must limit surface temperature via hardware, not software alone. **[CONFIRM]** what cutoff temperature you propose and which sensor you would use.
- **[REQUIREMENT] Single mode: 660 + 810 + 940 nm always on together.** There is no independent band selection — unlike the current Core, this device does not offer "660 only," "810 only," or "940 only" as user modes.
- **[REQUIREMENT]** CW and 10 Hz pulsed are the only mode options (applied to the combined set of three bands, not to individual bands).

---

## 4. SPECIFICATION — CORE BEAUTY (skin and facial aesthetics)

### 4.1 Spectrum

| Band | Nominal λ | Centroid tolerance | Design function |
|---|---|---|---|
| **590 nm** | 590 | **± 8 nm** | Amber. Reactive skin, redness, uneven tone. **This is the product's differentiating band** |
| **630 nm** | 630 | **± 10 nm** | Red. Collagen and fibroblasts. The band with the strongest clinical backing in aesthetics |
| **670 nm** | 670 | **± 10 nm** | Deep red. Dermal cytochrome c oxidase |

**[REQUIREMENT] This device carries NO infrared.** This is a deliberate safety decision: it is used on the face, and NIR is invisible, does not trigger an eyelid aversion reflex, and carries corneal thermal risk. **We do not accept adding 810, 850, or any band above 700 nm.**

**[REQUIREMENT] No blue or violet** (405, 450, 485 nm). Photobiological safety and positioning decision.

### 4.2 The 590 nm die is the critical component of this design

This is the highest technical risk point in the project and we need explicit answers.

AlInGaP at 590 nm operates in its poorest quantum-efficiency region, with **severe thermal droop** and a **red-shift of the peak** as temperature rises.

**[CONFIRM — mandatory]**
1. **590 nm centroid measured at operating temperature**, not at 25°C lab conditions. We need the figure under real, continuous-use conditions.
2. **Peak drift (nm) and radiant flux drop (%)** between 25°C and expected operating temperature.
3. If the drift pushes the centroid above 600 nm under real use, **tell us now**, before tooling is committed.

**Favorable design note:** the 590 nm band **does not need to be high-power**. Our target is 10–25 mW/cm² at contact — one tenth of what we're asking of the red bands. This should ease both cost and the thermal issue.

### 4.3 Specific functional requirements

- **[REQUIREMENT] Auto shut-off timer, enabled by default.** At contact irradiance, the target dose is reached in **60–90 seconds**. A user applying "20 minutes" (by analogy with panel products) would receive 10–15× the target dose and fall into the inhibitory range. Auto shut-off is a **product safety feature**, not an optional one. **[CONFIRM]** your proposed implementation, and whether the user can disable it (we prefer that it **not** be trivial to bypass).
- **[REQUIREMENT] Single mode: 590 + 630 + 670 nm always on together.** There is no independent band selection.
- CW mandatory; 10 Hz pulsed optional for line consistency (applies to the combined set, not to individual bands).

---

## 5. LED PACKAGE ARCHITECTURE — THE CENTRAL QUESTION

The current Core uses a **dual-die chip** (two dies per package). For both new variants we want a **tri-die chip**: three dies per package, so that **every wavelength is deployed across all 13 positions**.

**Why this is non-negotiable for us:** with single-die chips and 3 bands split across 13 LEDs, switching on a single band leaves 4 isolated points of light with the rest of the aperture dark. The resulting dose would not simply be low — it would be **radically non-uniform**. With a tri-die chip, every band covers 100% of the aperture.

### [CONFIRM — blocking]

1. **Can you supply a tri-die 660/810/940 chip** in the package format used by the current Core? Please provide part reference and datasheet.
2. **Can you supply a tri-die 590/630/670 chip?** This is three AlInGaP dies in a single package — the combination we have the most doubts about. Please provide part reference and datasheet.
3. **How many independent driver channels** does the current PCB support? We need **3 per device**.
4. **Thermal budget:** can you drive all 3 dies at full current simultaneously in this chassis without ventilation? If not — which is what we expect — please confirm how current is shared in combined mode. **It is acceptable** for combined mode to share current while single-band mode runs at full power; that is in fact our intended design.

### Plan B if the tri-die 590/630/670 chip does not exist

We would accept: **dual-die 630 + 670 across all 13 positions**, plus **590 nm on dedicated emitters**. We would lose uniformity only on the band that needs the least irradiance, which is acceptable. **[CONFIRM]** feasibility and cost of this alternative.

---

## 6. RADIOMETRIC DATA WE NEED FROM YOU

**[REQUIREMENT]** Without this data we cannot publish technical datasheets or usage protocols. This is the information most missing from our entire product line today.

For **each band separately** and for the **combined mode**, for each of the two products:

| Data point | Measurement condition |
|---|---|
| **Irradiance (mW/cm²)** | At **direct contact (0 cm)** and at **3 cm** |
| **Measurement type** | Specify whether it is **peak on-axis** or **average over aperture**. We need the **average over aperture** |
| **FWHM (nm)** | Spectral width at half maximum for each band |
| **Real centroid (nm)** | At operating temperature |
| **Radiant flux (mW)** | Per die, at operating current |
| **Surface temperature** | Maximum reached in a 10-minute session, combined mode |

> **Note:** the current Core specification (">150 mW/cm² at contact") is not usable as a reference because it does not state whether it is peak on-axis or average over aperture. For these two products we need the data broken down with the measurement condition explicitly stated.

---

## 7. COST AND TIMELINE

**[CONFIRM — this entire block]**

1. **Current Core COGS** (so we can calculate the delta precisely).
2. **Per-unit COGS delta** for each variant vs. the current Core, broken down:
   - Tri-die vs. dual-die package premium
   - 590 nm die-specific premium
   - Third driver channel
   - Thermal cutoff (Recovery) and timer (Beauty)
3. **NRE / tooling:** is there a setup cost for the PCB variant? We assume the chassis mold is already amortized and untouched.
4. **MOQ** per variant.
5. **Production lead time** for launch units. Our target is to **have Core Beauty in stock by early September 2026** and Core Recovery **by late October**, to launch ahead of Black Friday.
6. **Packaging:** we confirm we are reusing the Core box with a **differentiated sleeve** per variant. Sleeve cost?

---

## 8. CERTIFICATION

**[CONFIRM]**

1. Does changing the spectral combination on the same chassis **require repeating CE testing**, or does the electrical and EMC baseline of the current Core remain valid?
2. **IEC 62471 photobiological safety:** we need the **risk group** for each variant. With no blue, no violet, no UV, and — for Beauty — no infrared, we expect Risk Group 1 or Exempt, but **we need this tested, not assumed**.
3. Both products are marketed as **wellness devices**, not medical devices. Documentation must not contain therapeutic/clinical indications.

---

## 9. SUMMARY OF BLOCKING QUESTIONS

We cannot finalize the design without answers to these five:

1. Does the **tri-die 590/630/670 chip** exist? If not, is Plan B (§5) feasible?
2. Does the **tri-die 660/810/940 chip** exist?
3. **Centroid and thermal drift of the 590 nm die** at operating temperature.
4. Does the current PCB support **3 independent driver channels**?
5. Does the spectral change **require new CE testing**?

---

*Questions or clarifications: please reply to this document with your answers inline under each [CONFIRM] item, or in a separate response document referencing section numbers.*
