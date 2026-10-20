# Claude opinion: first review of Kyushu Silicon Craft

Reviewed 2026-10-20 against commit `95f1cb2` on `main`. Written by Claude so that Codex can write its own opinion in a separate file and the two can be compared.

**How to read the fact check.** Each claim is tagged:

- ✅ **Correct**: matches what I know and, where marked, a source I checked today.
- ⚠️ **Partly right / needs nuance**: the core idea holds but the wording would mislead someone in an interview.
- ❌ **Wrong**: should be changed.
- ❓ **Unverified**: I could not confirm it. It needs a primary source before the game teaches it.

My training knowledge runs to mid-2026. Anything newer was checked by web search today, and the sources are listed at the end. Market share figures in this industry mostly come from paid research reports and vary between sources, so I treat every percentage as "approximate, needs a source".

---

## 1. Verdict in one paragraph

The game is a good *skeleton*. Its five stages match the companion infographic (`public/assets/aistudio/japan-supply-chain-map-v2_*.png`), which is itself careful and well hedged. The Japanese "chokepoint" companies it highlights are mostly the right ones. The game layer is less careful than the map, though. It brings back unsourced market share numbers that the map prompt deliberately banned. It puts some steps in the wrong place: photoresist coating is in the wafer stage, there is no coat/develop step in the litho loop, ABF lamination is shown as an assembly step, and JASM and Sony are listed under final test. It also contains a handful of plain errors (9N labelled as 11N, the wrong name for the ABF inventor, Advantest shown as the wafer prober maker). The bigger issue for your goal is that it teaches **process engineering** (temperatures, RPM, plasma power), not **supply chain** (lead times, qualification, single sourcing, logistics, disruption). The interviews you are preparing for will ask about the second one. My recommendation is to fix the facts by moving all content into one sourced data file, then add a supply chain decision layer on top of the existing 3D factory.

---

## 2. Learning value and game design

### What works
- **The five-stage flow** (wafers & chemistry → front-end fab → probe & die prep → package & assemble → final test → systems) is the right mental model, and it lines up with the infographic.
- **The "deposit → pattern → etch → clean, repeated" loop** is the single most important idea in front-end manufacturing. Making the player repeat it is the right instinct.
- **The "Strategic Question" tab** ("Who owns the qualified input, the process knowledge, and the customer relationship?") and the split between *capex-driven tools* and *recurring consumables* are good, interview-grade framing.
- **Global interdependence is called out**: ASML, Zeiss, fabless customers, overseas OSATs. That avoids the common "Japan does everything" trap.

### What limits the learning
1. **No decisions with consequences.** Most steps are "click the button, wait 1 second, ✓". The ingot pull sliders only change growth speed. The spin RPM barely changes anything because thickness is clamped to 28–32 nm. Etch power has no effect at all. Nothing can fail, so there is nothing to learn from failing. Yield starts at 94.2% and the HUD shows 21 tested good dies and 21 shipped units before you have played anything (`src/App.tsx` `INITIAL_CHIP_SPEC`).
2. **It teaches the wrong layer for the job.** A supply chain, procurement, or planning role in Asia will not ask you for the Czochralski melt temperature. It will ask things like:
   - What is the lead time of an EUV scanner, a TEL track, or a photoresist lot? What happens if one slips?
   - Why can't a fab just switch photoresist supplier? (qualification, PCN/change control, customer re-qualification)
   - Photoresist is temperature-sensitive with a limited shelf life. How do you ship it from Japan to a fab in Taiwan or Kumamoto? (cold chain, hazmat, customs)
   - How much fab cycle time sits between "wafer start" and "packaged chip" (on the order of months)? What does that mean for forecasting?
   - Single-source risk: what happens when a Kumamoto earthquake, a fab fire, or an export control hits?
3. **The stages can be skipped.** Keys 1–5 jump to any stage, the front-end stage's "Transfer" button is never gated, and the end-of-game button goes back to stage 1 without resetting anything.
4. **One die design shipped to servers, phones, *and* vehicles.** Binning in reality sorts dies of *one product* into speed or power grades. Automotive chips are usually different designs on qualified processes (AEC-Q100, PPAP, long lifecycle commitments). A "3nm AI accelerator" going into cars teaches the wrong thing. This should become a choice between product families with different qualification rules.
5. **"Kyushu" is in the title, but most companies in the game are not in Kyushu**: JSR, Shin-Etsu, SCREEN, Advantest, DISCO, Ajinomoto, IBIDEN. That is fine for a Japan-wide game, but then the real Kyushu cluster is under-represented (see §3.7).

### Suggested design direction (for the Germany/Codex iteration)
Keep the 3D factory as the "map". Add a **supply chain layer** where every station has *inputs with a supplier, a lead time, a qualification status and a stock level*:

- **Orders and forecast.** A customer (e.g. an automotive tier-1 or a smartphone OEM) places a demand forecast. You must release wafer starts months ahead, because fab cycle time is long.
- **Inventory of critical inputs**: wafers (SUMCO/Shin-Etsu), resist (JSR/TOK/Shin-Etsu), ABF substrates (IBIDEN/Shinko), probe cards, spare parts. Each has a lead time and a shelf life where relevant.
- **Events drawn from real history** (each with a source):
  - 2016 Kumamoto earthquakes: Sony's Kumamoto image sensor fab and Renesas' Kawashiri fab were disrupted.
  - 2019 Japan → South Korea export controls on EUV photoresist, high-purity hydrogen fluoride and fluorinated polyimide.
  - 2021 Renesas Naka fab fire, which made the automotive MCU shortage worse.
  - 2021–2023 ABF substrate shortage.
  - 2022 neon supply risk from Ukraine.
  - Kumamoto groundwater constraints as the cluster grows.
- **Qualification as a mechanic.** Switching to a second source costs months of test wafers, and the customer must re-approve. You can *pre-qualify* a second source at a cost (dual sourcing vs. cost trade-off).
- **Scoring on on-time delivery, inventory cost and yield**, not on "✓ completed".

That would turn the game into interview practice: you could explain a real trade-off you "lived through" in the game.

---

## 3. Factual accuracy

### 3.1 Stage 01: Wafers & chemistry (`src/types/game.ts`, `StageMinigames.tsx` stage 1)

| Claim | Verdict | Note |
|---|---|---|
| Czochralski growth at ~1420 °C | ✅ | Silicon melts at ~1414 °C; the melt is held slightly above that. Fine for a game. |
| Pull speed ~1.0–1.4 mm/min | ⚠️ | Right order of magnitude. Real 300 mm pulls are often slower (~0.5–1 mm/min). Present it as "slow, around 1 mm/min". |
| "Crystal Purity: 99.9999999% (11N)" (HUD and stage 1) | ❌ | 99.9999999% is **9N** (nine nines). 11N is 99.999999999%. Electronic-grade polysilicon is quoted at 9N–11N. Fix the number or the label. |
| 300 mm wafers, 775 µm thick | ✅ | Standard 300 mm thickness. |
| "CMP Polisher" for wafer making | ⚠️ | Wafer makers do slice → lap/grind → etch → double-side polish → final polish. Calling it CMP is loosely fine, but CMP in a fab is mainly a *front-end* step between layers (Ebara and Applied Materials tools). Worth separating the two. |
| SUMCO and Shin-Etsu are the top two wafer makers, together over 50% | ✅ / ❓ | Correct ranking. "Over half" is commonly cited (roughly 30% + 20–25%). Needs a dated source. Competitors worth naming: GlobalWafers (Taiwan), Siltronic (Germany), SK Siltron (Korea). |
| Photoresist is formulated *and spin-coated* in stage 1 by JSR/Shin-Etsu | ❌ | **Process placement error.** Resist makers supply the chemical. The *fab* coats, bakes and develops it on a **coater/developer track** (TEL's flagship product, made at TEL Kyushu in Koshi) immediately before *every* lithography exposure. Move coating into the stage 2 loop. |
| "JSR & Shin-Etsu supply >80% of world photoresists for EUV" | ❌ / ⚠️ | Japanese firms *collectively* are usually cited around 90% of EUV resist, but that share is spread across **Tokyo Ohka Kogyo (TOK)**, JSR, Shin-Etsu, Fujifilm and Sumitomo Chemical. TOK is the largest photoresist maker overall and is missing from the game entirely. Attribute the share to "Japanese suppliers", and source it. |
| "Over 80% of advanced photoresists" (stage insight) | ❓ | Same as above. Needs a source and the right attribution. |
| EUV resist film ~30 nm, spin ~3000 rpm | ✅ | Plausible orders of magnitude for EUV resist. |
| JSR acquired by state-backed JIC | ✅ | Tender offer completed in 2024 and JSR was delisted. A good interview fact. Also: JSR owns Inpria (US, metal-oxide EUV resist). |
| Shin-Etsu: "high-purity silane gas" | ❓ | Not a product Shin-Etsu is known for. Its relevant products are silicon wafers (via Shin-Etsu Handotai), photoresists, **photomask blanks**, synthetic quartz and silicones. Replace with photomask blanks. |
| SUMCO locations "Imari, Saga (Kyushu) & Nagasaki" | ⚠️ / ❓ | SUMCO's main 300 mm sites in Kyushu are in Saga (Imari and others). "Nagasaki" needs checking. In the Kyushu tab, SUMCO is listed under the **Kagoshima/Kirishima hub**, which is wrong: Saga is in northern Kyushu. "Imari & Saga" is also redundant, because Imari is in Saga. |
| Quartz crucibles as a key material | ✅ | Correct and a nice detail. |

### 3.2 Stage 02: Front-end fab

| Claim | Verdict | Note |
|---|---|---|
| Loop = Deposit → Pattern (ASML) → Etch → Clean | ⚠️ | Missing **coat → expose → develop** (litho is three steps, two of them on the TEL track), **resist strip/ash**, **CMP** between layers, **ion implantation**, and **metrology/inspection**. The last is a big gap: KLA (US), plus Japan's **Lasertec**, which has a near-monopoly on EUV mask blank inspection, and Hitachi High-Tech. Without these, the loop misses where TEL is actually strongest. |
| TEL has a "world monopoly on coater/developer tracks" | ⚠️ | TEL dominates (commonly cited ~90%, and near 100% for EUV tracks), but SCREEN also sells tracks. Say "dominant", not "monopoly", and source the figure. |
| TEL "Atomic Layer Deposition" using "Silane + Oxygen Plasma" | ⚠️ | Silane + O₂ plasma is PECVD oxide, not ALD. Either call it CVD, or keep ALD with ALD precursors. TEL does both. |
| TEL "Deep Reactive Ion Etch" | ⚠️ | "DRIE" usually means the Bosch process for MEMS and through-silicon vias. Front-end logic uses plasma/reactive ion etch. Lam Research and Applied Materials are the big etch competitors and should be named. |
| Every layer patterned by ASML EUV | ❌ | **Important nuance.** Even at 3 nm only the most critical layers use EUV. Most use **DUV immersion**, where ASML competes with **Nikon** and **Canon** (Japan!). JASM Fab 1 (12–28 nm) needs **no EUV at all**. The infographic prompt says "do not imply every chip uses EUV", but the game does imply it. |
| ASML is the sole EUV maker, 13.5 nm, tin plasma, Zeiss optics | ✅ | Correct. Extra detail: the EUV light source comes from Cymer (San Diego, owned by ASML). |
| "No nation can make 3nm/2nm without ASML" | ✅ | Correct. |
| Overlay error "±0.4 nm" | ⚠️ | Too optimistic. Leading-edge overlay specs are around 1–2 nm. |
| SCREEN single-wafer cleaning, "DIO3 + SC1 + UPW" | ✅ | Reasonable. SCREEN is a leader in wafer cleaning (with TEL and Lam). |
| SCREEN cleaning uses "Supercritical CO2" to strip resist | ⚠️ | Niche. Resist removal is mainly plasma ashing plus wet chemistry (SPM). |
| "Over 100 cleaning steps per finished chip" | ✅ / ❓ | Plausible at advanced nodes (cleaning is a large share of all steps). Source it. |
| "Layer X of 48" | ⚠️ | Total mask layers at advanced nodes are ~60–80+, with ~15–20 metal layers. Pick one meaning and label it. |
| SCREEN locations Kyoto HQ / Shiga | ✅ | Correct. |

### 3.3 Stage 03: Probe & die prep

| Claim | Verdict | Note |
|---|---|---|
| "Advantest Wafer Prober & Probe Card" | ❌ | Advantest makes the **tester (ATE)**. The **wafer prober** (the machine that moves the wafer under the probe card) is a Japanese duopoly of **Tokyo Electron** and **Tokyo Seimitsu (Accretech)**. Probe cards come from FormFactor (US), Technoprobe (Italy) and **Micronics Japan (MJC)**. This is a great "Japan chokepoint" fact the game currently gets wrong. |
| "Micro-cantilever tungsten needles" | ⚠️ | Legacy technology. Advanced logic uses MEMS / vertical probe cards. |
| Advantest leads ATE together with Teradyne | ✅ | Correct, a duopoly. |
| Backgrind 775 µm → 30 µm | ⚠️ | 775 µm start is correct. Final thickness depends on product: ~30–50 µm for stacked memory (HBM), often ~100+ µm for ordinary logic. Say "down to tens of µm, depending on product". |
| DISCO "Kiru, Kezuru, Migaku" (cut, grind, polish) | ✅ | That is DISCO's own motto. |
| DISCO ~70–80% share in dicing/grinding | ✅ / ❓ | Widely cited, and DISCO is clearly dominant. Give one dated source and use the same number everywhere: the game currently says "70–80%" in one place and "~75%" in another. |
| DISCO "Hiroshima Plants / Kyushu Support" | ⚠️ / ❓ | Main plants are in Hiroshima (Kure, Kuwabata) and Nagano (Chino). "Kyushu Support" is unverified. |
| Stealth laser dicing | ✅ | Real. The technology came from Hamamatsu Photonics and DISCO uses it. |
| Edge dies fail more often | ✅ | Correct and a nice touch. A real 300 mm wafer has hundreds to thousands of dies, not 24. Say "simplified". |

### 3.4 Stage 04: Package & assemble

| Claim | Verdict | Note |
|---|---|---|
| ABF is laminated during chip assembly | ❌ | **Flow error.** ABF is laminated by the **substrate maker** (IBIDEN, Shinko Electric, Unimicron, AT&S, Samsung Electro-Mechanics…) when it *builds the substrate*, before any die arrives. The correct chain is: Ajinomoto (film) → substrate maker (substrate) → OSAT or fab back-end (die attach, underfill, lid). The game should show these as three separate suppliers. That is exactly the kind of tiered supply chain an interviewer will probe. |
| ABF researcher "Shigeo Mori" (Strategic tab) | ❌ | Ajinomoto's own account names **Shigeo Nakamura**. Work began in 1996 after a CPU maker's request, and the product launched around 1999. |
| ABF "originally explored for food flavoring" | ⚠️ | ABF came from Ajinomoto's **amino acid chemistry know-how** (by-products and resin chemistry), not from a flavoring that was repurposed. "Born from umami seasoning chemistry" is a fun hook but stretches it. Say "grew out of chemistry know-how from making MSG and amino acids". |
| ABF "near 100% share" in high-end CPU/GPU substrates | ✅ / ❓ | Commonly cited as near-monopoly. Source it. Sekisui Chemical and others are emerging alternatives. |
| IBIDEN HQ Ogaki, Gifu; high-end flip-chip substrates | ✅ | Correct. Also add **Shinko Electric** (Nagano, now owned by JIC), another major Japanese substrate maker. |
| Flip-chip BGA package with *epoxy mold* and "*ceramic* mold resin" | ❌ | High-performance flip-chip CPU/GPU packages generally use **underfill + a metal lid with TIM**, not full mold encapsulation. Mold compound is **silica-filled epoxy**, not ceramic. Japanese leaders in these materials (**Resonac**, **Sumitomo Bakelite**, **Namics**) are missing and worth adding. |
| Reflow step labelled "Kyocera Ceramics" | ⚠️ | Kyocera makes ceramic packages (a *different* package type), organic substrates and fine-ceramic tool parts. It does not supply the mold or reflow step of an organic flip-chip BGA. Move Kyocera to "components / ceramic packages". |
| Missing: advanced packaging (CoWoS, 2.5D/3D, HBM) | — | This is *the* AI supply chain bottleneck of 2024–2026, and Japanese firms supply many of its inputs (Resonac, IBIDEN, DISCO, TEL bonders, Advantest testers). It is a big gap for an "AI accelerator" game. |
| OSAT capacity in Taiwan / Southeast Asia | ✅ | Correct. Name ASE, Amkor and PTI, and note Malaysia and Vietnam as growing hubs, which matters for "jobs in Asia". |

### 3.5 Stage 05: Final test → systems

| Claim | Verdict | Note |
|---|---|---|
| Companies for this stage: "Sony (Kumamoto)", "JASM (Kumamoto)" | ❌ | These are **fabs** (front-end). They belong to stage 02, not final test. |
| "Burn-in Chamber (-40 °C to +125 °C)" | ⚠️ | Mixes two things. **Burn-in** is high-temperature stress (~125 °C+ under voltage). −40 to +125 °C is **temperature cycling / tri-temp test** (AEC-Q100 Grade 1 range for automotive). |
| Automotive targets near-zero DPPM | ✅ | Correct idea ("zero defect", single-digit or sub-1 DPPM targets depending on the part). |
| Advantest Gunma | ✅ | Advantest has major R&D/production sites in Gunma. |
| Servers / phones / vehicles from one die | ❌ | See §2.4. |

### 3.6 JASM, Kumamoto, and the "3nm 2028" framing

| Claim | Verdict | Note |
|---|---|---|
| JASM = TSMC / Sony / Denso JV | ⚠️ | **Toyota** joined in 2024. Post-investment stakes were about TSMC 86.5%, Sony Semiconductor Solutions 6.0%, Denso 5.5%, Toyota 2.0% (TSMC press release). Sony is a minority shareholder, not a "major equity partner". |
| Fab 1 = 12/16 nm & 22/28 nm logic | ✅ | Fab 1 has been in mass production since late 2024 on 12–28 nm for automotive, industrial and image sensor logic. TSMC's 2024 plan also listed 40 nm for the site. |
| Fab 2 3 nm, production target 2028 | ✅ (plan) | TSMC said in Feb 2026 that it would switch Fab 2 from its original 6–12 nm plan to 3 nm. Taiwan's MOEA approved it on 31 Mar 2026, with 2028 and ~15k wafers/month reported. The repo's sources file cites the TSMC 3Q26 transcript (15 Oct 2026) reiterating 2028; I did not open that PDF. **Keep the map's "Company plan, not current output" wording.** The game drops it: the HUD says "JASM FAB 2 · KUMAMOTO CLEANROOM · 3nm Node Logic", as if you were running it today. |
| Japanese government subsidies | ✅ | Correct (large METI subsidies for both fabs). Add the amounts with a source if you want numbers. |
| Kumamoto chosen for groundwater, power, Sony/TEL proximity, "Silicon Island" heritage | ✅ / ⚠️ | Groundwater, the existing cluster and the "Silicon Island" nickname (1980s) are all real. "Reliable nuclear/green power" is loose: Kyushu Electric has nuclear (Sendai, Genkai) and lots of solar, but say "relatively available power". Also mention the downsides: **groundwater depletion concerns, traffic, housing and labour shortages around Kikuyo**. These are real issues that come up in news and interviews. |
| Sony: global #1 in stacked CMOS image sensors | ✅ | Correct (around half the market by revenue). |
| Sony locations "Kumamoto Fab / Kagoshima" | ⚠️ | Missing **Nagasaki** (Isahaya), Sony's largest image sensor fab, and Oita. |
| TEL Kyushu in Koshi develops/manufactures coater/developers, cleaning and 3D packaging systems | ✅ | Matches TEL's own site page cited in the repo. |
| Kyocera Kagoshima Kirishima Plant | ✅ | Kokubu and Hayato plants merged under that name from 1 Apr 2026 (Kyocera newsroom). |

### 3.7 What is missing from the Kyushu / Japan picture

These are worth adding before the "factually accurate" version, because they are what a Kyushu-focused interviewer would expect you to know:

- **Power semiconductors**, a Kyushu strength: Mitsubishi Electric (Kumamoto: Koshi, Kikuchi; Fukuoka power modules), **ROHM / Lapis** (SiC, Chikugo, Fukuoka), Toshiba-related and other sites in Oita, and Renesas Kawashiri (Kumamoto).
- **Sony Nagasaki** (see above).
- **Rapidus** (Hokkaido, 2 nm pilot line, state-backed). Not Kyushu, but central to the "Japan is coming back" story.
- **Kioxia** (memory, Yokkaichi / Kitakami). Memory is absent from the game.
- **Photomasks and blanks**: Toppan / Tekscend, DNP, Hoya, AGC, Shin-Etsu.
- **Gases and chemicals**: Stella Chemifa and Morita (high-purity HF, central to the 2019 Korea case), Resonac, Kanto Denka, Taiyo Nippon Sanso.
- **Other equipment**: Kokusai Electric (batch deposition), Hitachi High-Tech (etch/metrology), Lasertec (EUV mask inspection), Ebara (CMP), Tokyo Seimitsu (probers), Nikon/Canon (DUV litho, nanoimprint).

### 3.8 Duplicated facts that disagree with each other

The same claim is written by hand in several places (`types/game.ts`, `StageMinigames.tsx`, `SupplyChainMapModal.tsx`, `HUD.tsx`, `TitleScreen.tsx`, `ThreeCanvas.tsx` badges), so they drift apart. Examples: DISCO "70–80%" vs "~75%", and photoresist ">80% (JSR & Shin-Etsu)" vs "over 80% (Japan)". The infographic prompt explicitly says "no market-share statistics", but the game re-adds them without sources.

---

## 4. Code quality

The project builds (`vite build`) and typechecks (`tsc --noEmit`) cleanly. It reads as a fast AI Studio export: nicely styled, but loosely structured.

**Structure**
- `StageMinigames.tsx` is one 1,150-line component holding all five stages' state and UI. Split it into one component per stage (`Stage1Wafers.tsx`, …) with a shared `StageShell`.
- **Content is hard-coded in JSX across six files.** This is the most important change for your plan: move every fact into one `src/content/` data file (or JSON) where each claim carries `{ text, source_url, checked_on, confidence }`. Then the "solid factual version" you will build with Claude can be dropped in, and the game can show sources on hover.
- Leftovers from the AI Studio template: package name `react-example`, unused `@google/genai`, `express`, `dotenv`, `tsx` dependencies, a `GEMINI_API_KEY` in `.env.example` that nothing reads, an unused `'glossary'` tab type, unused `GameView` values (`'strategy_modal'`, `'victory'`), unused icon imports. No README.

**Bugs**
- **Reset doesn't reset.** `handleReset` in `App.tsx` resets `chipSpec`, but each stage's local state (ingot length, probed dies, dicing cuts, ABF/bond/reflow flags) lives inside `StageMinigames`. After Reset, or after the "Restart" button at the end, every step still shows ✓. Fix by lifting stage progress into `App`, or by remounting with a `key`.
- **Escape opens the map** (`App.tsx` toggles on Escape). Escape should only close it.
- **Stacked intervals.** `handlePolish` and `handleBackgrind` start a `setInterval` on every click without a guard or cleanup. Double-clicking runs them twice, and they keep running if the component unmounts.
- **Side effects inside state updaters.** `onUpdateSpec` is called inside `setIngotLength`, `setDicingCuts` and `setBinnedDestinations` updater functions. React may call updaters twice (e.g. in StrictMode), so this double-applies.
- The ingot effect lists `ingotLength` as a dependency, so the interval is torn down and recreated every tick. It works, but it's wasteful. Use a ref or a functional update only.
- `ThreeCanvas` cleanup calls `renderer.dispose()` but doesn't remove the canvas element or dispose geometries/materials. In dev with StrictMode or hot reload, that can leave duplicate canvases and leak GPU memory.

**Performance / assets**
- 865 KB JS bundle (three.js isn't code-split) and a 2.2 MB PNG. Fine for a prototype; lazy-load the map modal and compress the image (WebP) later.

**Missing**
- No tests. At minimum, a test that the content file has a source for every claim would protect accuracy as the game grows.
- No README with how to run it (`bun install && bun run dev`).

---

## 5. Priority list

1. **Fix the plain errors** (quick): 9N vs 11N, Shigeo Nakamura, Advantest vs prober makers, JASM/Sony out of final test, SUMCO out of the Kagoshima hub, add Toyota to JASM, drop "ceramic mold resin".
2. **Fix the process placement**: resist coating moves into the fab loop (TEL track: coat → expose → develop). ABF lamination moves to the substrate maker. Show that most layers are DUV, not EUV.
3. **Centralize content** into one sourced data file. Remove or source every percentage. Restore the map's "plan, not current output" hedge for JASM Fab 2.
4. **Fix the reset and interval bugs** and remove the AI Studio leftovers.
5. **Add the supply chain layer** (lead times, qualification, inventory, real disruption events). This is the change that makes it interview prep rather than a factory tour.
6. **Fill the Kyushu gaps**: power semis, Sony Nagasaki, the materials suppliers, and advanced packaging.

---

## Sources checked today (2026-10-20)

- TSMC, "JASM Set to Expand in Kumamoto Japan" (Feb 2024; nodes, Toyota stake, equity split): https://pr.tsmc.com/english/news/3105
- Toyota newsroom on the JASM investment: https://global.toyota/en/newsroom/corporate/40410568.html
- TSMC Fab 2 switch to 3 nm (Feb 2026) and MOEA approval (31 Mar 2026): https://www.taipeitimes.com/News/biz/archives/2026/04/01/2003854797 and https://ocacnews.net/article/419427
- Kyocera, Kagoshima Kirishima Plant integration (effective 1 Apr 2026): https://global.kyocera.com/newsroom/news/2026/001151.html
- Ajinomoto ABF history (Shigeo Nakamura, 1996 request): https://ajihealthandnutrition.com/pioneering-amino-acid-technologies-in-computers
- Photoresist market leaders (TOK, JSR, Shin-Etsu, Fujifilm, Sumitomo Chemical; share figures from market-research pages, indicative only): https://www.marketsandmarkets.com/ResearchInsight/photoresist-market.asp
- Wafer prober makers (Tokyo Electron, Tokyo Seimitsu/Accretech): https://www.accretech.com/en/product/
- The repo's own source notes: `public/assets/aistudio/japan-supply-chain-map-sources_44bbe62c.md`

Everything else above comes from my general knowledge and is marked ❓ or ⚠️ wherever I'd want a primary source before the game teaches it.
