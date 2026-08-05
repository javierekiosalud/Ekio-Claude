# FOLLOW-UP QUESTIONS — ROUND 2
## Ekio Light — Core Recovery and Core Beauty
### Response to your first round of answers on the v1.1 brief · v1.0 · 2026-07-29

> **Purpose:** thank you for the answers on the first version of the brief (`Updated-BRIEF_FACTORY_CORE_RECOVERY_BEAUTY_EN.pdf`). This document is a direct response: it confirms what we now consider closed, flags two points that need correction before we proceed, and lists what is still outstanding from the original request. Section numbers below refer to the original brief (v1.1).

---

## 1. CONFIRMED — no further action needed on these

Thank you, these close the biggest open risks from the original brief:

- **§5.1–5.2** Both tri-die packages exist (660/810/940 and 590/630/670).
- **§5.3** The current PCB supports 3 independent driver channels.
- **§5.4** The 3 dies cannot run at full current simultaneously; product maximum power is 10 W. This matches what we expected and already told you was acceptable.
- **§2** Noted that the hardware keeps 3 independent channels for current balancing across dies even though there is no user-facing per-band selection. See §6 below for one clarification on this.

---

## 2. CORRECTION NEEDED — Core Beauty dosing logic (§4.3)

Your answer describes a 5-level intensity system (20/40/60/80/100%, sessions of 10 to 2 minutes) targeting **200 lx**. We cannot accept this as designed, for two separate reasons:

**a) Lux is the wrong unit for this.** Lux is a photometric unit — it is weighted by the human eye's luminosity function (peak sensitivity at 555 nm, green). It does not measure radiant/therapeutic dose, and it weighs our three bands very unevenly: 590 nm (amber) registers much higher in lux than 630/670 nm (red) for the same actual optical power. A fixed lux target does not guarantee a fixed, comparable therapeutic dose across the combined output. We need **irradiance in mW/cm² and dose in J/cm²**, as originally requested in §6.

**b) We did not ask for a 5-level intensity selector.** §4.3 of the original brief states: *"Single mode: 590 + 630 + 670 nm always on together. There is no independent band selection."* A user-selectable intensity dial with 5 levels is a new feature that was not part of the spec. If this was your own proposal, we want to discuss it explicitly rather than have it appear as an implementation detail — but our default position is **one fixed mode, one fixed auto shut-off time**, as originally written.

**[CONFIRM — please answer]**
1. Please provide the **real irradiance (mW/cm²)** of the combined 590+630+670 output, measured at 0 cm and at 3 cm — average over the aperture, as requested in §6.
2. Please confirm: **no user-facing level/intensity selector.** Core Beauty ships with one mode and one fixed auto shut-off time.
3. Based on your real measured irradiance, what **auto shut-off time** corresponds to our target dose of **3–10 J/cm²** at contact? (Our own estimate was 60–90 seconds; your answer implies something closer to 2–10 minutes, which suggests either your actual irradiance is lower than what we assumed, or "200 lx" does not correspond to our target dose. We need this reconciled before we can finalize the timer logic.)
4. If "lx" in your answer was a translation artifact for a different unit or concept, please clarify what was actually meant.

---

## 3. CORRECTION NEEDED — thermal cutoff temperature (§3.2, Core Recovery)

You proposed a shell-temperature cutoff of **~50°C**, using an NTC sensor plus an op-amp comparator. We are concerned this is too high for a device held in sustained contact with skin for several minutes — which is exactly the Core Recovery use case, since the 940 nm band is deliberately generating heat as part of the design. Contact-burn injury literature generally shows increasing risk starting well below 50°C once contact time reaches several minutes.

**[CONFIRM — please answer]**
1. Can the cutoff threshold be lowered to the **42–45°C range** for sustained skin contact? If 50°C is necessary for another reason (e.g. component tolerance), please explain the constraint.
2. What is the **response time** of the NTC + comparator circuit — how quickly after the threshold is reached does the 3-channel output actually shut off?
3. Has this threshold been validated against any burn-safety standard for handheld, skin-contact consumer devices (e.g. IEC 60335-1 surface temperature limits, or equivalent)?

---

## 4. STILL MISSING — please answer completely

These were in the original brief and remain fully unanswered:

### §6 · Radiometric data
For **each band separately** and the **combined mode**, for **both products**:
- Irradiance (mW/cm²) at 0 cm and at 3 cm — **average over aperture**, not peak on-axis
- FWHM (nm) per band
- Real centroid (nm) at operating temperature
- Radiant flux (mW) per die at operating current
- Surface temperature after a 10-minute session, combined mode

Without this we cannot finalize dosimetry for either product or publish any technical datasheet.

### §7 · Cost and timeline
1. Current Core COGS
2. Per-unit COGS delta for each variant (tri-die package premium, 590 nm die premium, third driver channel, thermal cutoff / timer cost)
3. NRE / tooling cost, if any, for the PCB variant
4. MOQ per variant
5. Production lead time — our target remains Core Beauty in stock by early September 2026, Core Recovery by late October
6. Sleeve/packaging cost per variant

### §5 · Documentation
You confirmed both tri-die packages exist. Please send the **part reference and datasheet** for each (660/810/940 and 590/630/670) — we need this before committing to tooling.

### §8.2 · Photobiological safety per variant
You answered that no new CE testing is required in general. We still need the specific answer to §8.2: the **IEC 62471 risk group for each variant**, tested rather than assumed. This is a separate question from general CE/EMC validity.

---

*As before: please reply inline under each item, or in a separate response document referencing the section numbers above.*
