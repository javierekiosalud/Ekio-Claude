# QUOTATION REQUEST — FINAL PRODUCT SPECIFICATION
## Ekio Light — Core Recovery and Core Beauty
### v1.0 · 2026-08-05

> **This is a request for quotation, based on the specification below — not a purchase order.** Please do not begin production, tooling, or component procurement based on this document. We need your formal budget (unit pricing, MOQ, tooling cost if any, lead time, and payment terms) before we place an order.
>
> This specification consolidates the technical brief we sent on 2026-07-27 and your confirmed answers to it. Items still pending from our separate follow-up (LED quality and irradiance data) do not block this quotation — please quote on the specification as written below, and we will finalize final details before production starts.

---

## 1. WHAT WE WANT TO ORDER

Two new variants of the **Ekio Light Core** device you currently produce for us, on the same chassis:

| Product | LEDs | Package | Wavelengths | Status |
|---|---|---|---|---|
| **Core** (current, reference only — not part of this quote) | 13 | Dual-die chip | 660 · 850 nm | In production |
| **Core Recovery** | 13 | Tri-die chip | 660 · 810 · 940 nm | **New — please quote** |
| **Core Beauty** | 13 | Tri-die chip | 590 · 630 · 670 nm | **New — please quote** |

---

## 2. CONFIRMED SPECIFICATION

The following is now final, based on your answers to our technical brief. Please quote against this specification as written.

### 2.1 Shared with the current Core (unchanged)
- Chassis and mold: 162 × 90 × 45 mm — same mold, no modifications.
- 13 LED emitters, same physical layout on the PCB.
- Rechargeable battery, USB-C charging.
- Lifespan >20,000 hours.
- Zero visible flicker, low electromagnetic field emission.
- Base certifications: RoHS, CE, WEEE.

### 2.2 Confirmed by you (2026-07-29)
- Both tri-die packages exist: **660/810/940 nm** and **590/630/670 nm**.
- PCB supports **3 independent driver channels**.
- The 3 dies cannot run at full current simultaneously; **product maximum power is 10 W**, shared across dies in combined mode.
- No new CE testing required for the electrical/EMC baseline.

### 2.3 Core Recovery — specification
- Wavelengths: **660 · 810 · 940 nm**, tri-die chip, all 13 positions.
- **Single mode only**: all three bands fire together — no independent per-band selection.
- CW and 10 Hz pulsed as mode options (applied to the combined output).
- Hardware thermal cutoff via NTC sensor + comparator (exact threshold to be confirmed — see §4).
- No substitutions accepted without prior consultation: 810 nm ≠ 800/830 nm; 940 nm ≠ 850/880 nm; no "905 nm" LEDs (does not exist as a precision LED).

### 2.4 Core Beauty — specification
- Wavelengths: **590 · 630 · 670 nm**, tri-die chip, all 13 positions.
- **Single mode only**: all three bands fire together — no independent per-band selection, no user-selectable intensity levels.
- No infrared (no 810, 850, or any band above 700 nm).
- No blue or violet (405, 450, 485 nm).
- Auto shut-off timer enabled by default, not trivial for the user to disable (exact timing to be confirmed — see §4).
- CW mandatory; 10 Hz pulsed optional.

### 2.5 Packaging
- Reuse the current Core box, with a **differentiated sleeve per variant**.

### 2.6 Marketing/regulatory note
- Both products are marketed as **wellness devices**, not medical devices. Product documentation must not contain therapeutic or clinical claims.

---

## 3. WHAT WE NEED IN YOUR QUOTATION

Please provide:

1. **Unit price per variant**, at these volume tiers:
   - Your standard MOQ
   - 500 units
   - 1,000 units
   *(If your MOQ is above 500, just give us pricing at MOQ and at 2× MOQ.)*
2. **Incoterm** (EXW / FOB / other — please specify which port if FOB).
3. **NRE / tooling cost**, if any, for the new PCB variant (one-time, not per-unit). We assume the chassis mold is already amortized and unchanged.
4. **Additional certification/testing cost**, if any — in particular for IEC 62471 photobiological safety testing per variant (still an open item on our side, but please price it in case it applies).
5. **Sleeve/packaging cost** per variant.
6. **Production lead time** from confirmed PO to delivery, for each variant.
7. **Payment terms** (deposit %, balance on shipment, etc.).

---

## 4. STILL OPEN — do not let this block your quotation

We have a separate, short follow-up out to you on **LED quality** (brand/manufacturer per wavelength, batch consistency, lifespan) and **irradiance data** (mW/cm² per band and combined). We also still need to close the exact thermal cutoff threshold for Core Recovery and the auto shut-off timing for Core Beauty. None of this should delay your budget — please quote on the specification in §2, and we'll confirm these last details before finalizing the order.

---

## 5. TARGET DATES

For planning purposes: our target is **Core Beauty in stock by early September 2026** and **Core Recovery by late October 2026**, ahead of Black Friday. Please tell us in your quotation whether your lead time makes this realistic, and if not, what the earliest realistic date is.

---

*Please reply with your quotation referencing the section numbers above. Once we have your numbers we will confirm quantities and issue a formal purchase order.*
