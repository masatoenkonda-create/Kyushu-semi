# Codex opinion

Date: 20 October 2026 (Japan time)  
Repository: masatoenkonda-create/Kyushu-semi  
Reviewed revision: `95f1cb265d9756fcfc11f6897f6050d4272029e7`  
Purpose: first independent review for Maxence, Claude, and a later Gemini revision. This is an initial opinion, not an agreed factual reference or implementation specification.

## My assessment

Keep the project. The idea of learning through manipulating a visible semiconductor process fits the intended learning need. Its five stages provide a useful orientation, and the company explorer connects unfamiliar names to tangible materials and equipment.

However, the current implementation is primarily an interactive manufacturing exhibit. It is not yet a dependable simulation of semiconductor operations or a supply-chain coordinator's work. It risks teaching several incorrect relationships with great confidence. Improving the underlying model matters more than adding visual polish or more technical vocabulary.

The strongest next version would combine a simple manufacturing explorer with a small, consequential supply-chain mission: an order, a qualified material or spare part, a delivery deadline, limited inventory, a disruption, and a decision whose effects you can see.

## Review method and limits

I inspected the tracked source, configuration, repository tree, and supplied map notes at the revision above. I read the local training instructions to understand the learning objective. I independently checked selected high-impact claims against primary sources listed below.

This was a source-level review, not a browser playtest. I have not verified the rendered layout, frame rate, audio experience, touch interactions, or whether a complete run feels enjoyable. Findings about code paths below are static findings, with suggested reproduction steps for a later playtest.

I attempted dependency installation in a local review copy. Bun failed with an environment temporary-directory error; npm failed resolving registry.npmjs.org. Therefore build, type checking, and browser execution remain unverified. These environment failures do not establish a defect in the project.

I have not audited every market share, recipe, site capability, or company statement. “Unverified” below means it should not be taught as established fact yet; it does not automatically mean false.

## What is worth preserving

- The five-stage overview: wafers/materials → fabrication → wafer test/die preparation → packaging → final test and customers.
- Concrete objects: ingot, wafer, die, substrate, package, and test equipment.
- An explorable company directory and regional context.
- The distinction between ABF material and the complete package substrate, which the text already makes in places.
- The strategic questions about qualification, process knowledge, and customer relationships.
- Short interactions and optional exploration. Free navigation is useful in an explorer; it should be explicitly distinguished from completing a guided production mission.

The 3D scene is a promising delivery format, but its learning value must come from visible consequences of decisions.

## Priority 1: repair the mental model

### 1. Separate the process flow from the supplier network

The scene places wafer production, chemical supply, front-end processing, package-substrate production, assembly, and testing into one pavilion with an overhead carrier. The HUD labels the environment “JASM FAB 2.” A beginner could reasonably infer that all these companies and processes operate inside one JASM factory.

Use two linked views:

- **Process view:** what happens to the product.
- **Network view:** which kind of organization supplies what to whom, at which site.

Make the pavilion explicitly an illustrative learning exhibit. Label named company connections as examples of capabilities unless an actual customer/supplier relationship is sourced. Geographic proximity and equity ownership are not proof of a particular supply contract.

Show equipment and spare parts as inputs that enable production; chemicals and wafers as consumed inputs; designs and specifications as information. They do not all travel along the same product conveyor.

### 2. Move resist coating into the fabrication cycle

Stage 1 currently combines photoresist supply/formulation with spin-coating the wafer. Stage 2 then repeats deposition → exposure → etch → clean without explicitly repeating coating and development.

Separate making and supplying the chemical from applying it in a fab. A beginner-friendly example cycle should show deposition, resist coating, exposure, bake/develop, pattern transfer/etch, and strip/clean, with a note that actual flows vary and contain other operations. Inspection/metrology should provide feedback rather than appearing only as end-of-line testing.

ASML distinguishes the coating, exposure, developing, and etching steps [S1]. Its manufacturing overview also explains that EUV serves critical layers while DUV serves less critical layers [S2]. Do not imply every layer uses EUV or that every advanced semiconductor fab needs EUV.

### 3. Separate substrate manufacture from package assembly

The ABF interaction should show an insulating film incorporated into a substrate's build-up layers, with conductive wiring and vias. The assembler can then receive the finished substrate and attach the die.

The current scene calls a metallic-looking roll “ABF Copper Film,” and the package model presents ABF as a separate slab above the substrate. These can obscure the key distinction between the dielectric and copper conductors. An exploded view is fine if its labels explain that ABF layers are within the substrate [S3, S4].

“Inject ceramic mold resin” in `StageMinigames.tsx:1012` also conflates ceramic packaging with resin encapsulation. Pick one illustrative package route and verify its steps. Present other package families as alternatives, not ingredients added indiscriminately.

### 4. Choose a product before choosing its customer

The initial product is a fictional “Kyushu-3N AI Accelerator,” but its output can be dispatched interchangeably to servers, phones, and vehicles.

A server accelerator does not become a phone processor or an automotive-qualified device by selecting another destination. Teach product design, package, customer specification, and qualification as constraints. Binning can divide compatible devices into performance grades; it is not a universal conversion between end markets.

For a first mission, choose one fictional product/customer and label it fictional. Branch into other products later. Do not imply the named firms actually supply this fictional chain.

### 5. Keep future plans visibly separate from current operations

The game's “JASM Fab 2 — 3nm target 2028” statement is supported as a company plan: TSMC's 15 October 2026 earnings-call transcript says Japan's second fab is planned for 3nm volume production in 2028 [S5, PDF page 5].

This should **not** be “corrected” back to older plans simply because earlier announcements differ. Preserve it as a dated announcement, not completed production or a guaranteed delivery date.

The always-visible HUD should carry the same future-scenario label. Its fixed yield and device specifications are game assumptions, not published JASM operating data.

## Priority 2: factual corrections and claims requiring evidence

| Item in the current project | Assessment and recommended treatment |
|---|---|
| “11N (99.9999999%)” in the HUD and stage 1 | Arithmetic error: the displayed percentage has nine nines, so it is 9N. 11N is 99.999999999%. Decide what material and purity specification are intended; do not use one purity value as a guarantee of device quality. |
| SUMCO under “Kagoshima / Kirishima Hub,” `SupplyChainMapModal.tsx:289` | The entry itself says Imari/Saga, which belongs in northern Kyushu, not the Kagoshima grouping. Reorganize the regional inset; “Imari & Saga” also mixes a city with its prefecture. |
| JASM repeatedly described as TSMC / Sony / Denso JV | Incomplete partner list: TSMC's February 2024 announcement includes Toyota [S6]. Do not use that historical announcement's old fab schedule as the current schedule. |
| ABF history credits “Shigeo Mori,” `SupplyChainMapModal.tsx:355` | Ajinomoto's account names Shigeo Nakamura as the researcher leading that development [S7]. Correct the name or omit the anecdote. |
| ABF essential to “every” advanced CPU/GPU/accelerator | Overbroad. Teach the material's role in relevant build-up substrates. Ajinomoto describes its composition and applications [S3]; the game's universal wording requires stronger scope and evidence. |
| “Advantest wafer prober & probe card” / “Advantest probe pins” | Distinguish electrical tester, mechanical prober, and probe card; identify the specific product/supplier if named. Advantest does list a die-level prober [S8], so a blanket claim that it never makes probers would also be wrong. The generic all-in-one attribution remains insufficiently specific. |
| Kyocera Kirishima makes all the listed chucks/chambers/packages and is expanding their capacity | The checked plant announcement confirms integration/renaming effective April 2026 and broad production categories [S9]. It does not by itself establish every listed product or the claimed expansion. Separate group capabilities from site-specific evidence. |
| 9–18 months, millions in scrap, “unalterable constant” for photoresist qualification | The exact universal timeline/cost is unsupported here. Qualification and change control are good lessons; timing and cost depend on the material, process and customer. Use an explicitly hypothetical delay for gameplay. |
| “Recession-resistant” consumables; ABF recurs with every wafer start | Unjustified conclusion and wrong model of the flow. Wafer starts, package output, inventories and customer demand are different drivers. Treat commercial resilience as a question to analyze, not a guaranteed property. |
| “Automotive … DPPM < 1” as a universal rule; thermal cycling treated as an ATE pass | Do not use an unsourced single threshold as universal automotive qualification. Distinguish production electrical tests, screening, and product/package reliability qualification. Source any named standard and its actual scope before teaching it. |
| Exact shares: wafers, EUV resists, TEL monopoly, DISCO 70–80% | Require a source, year and market definition for each. Japanese companies' share is not the same as production located in Japan; all photoresists are not EUV photoresists; two suppliers are not the whole Japanese industry. |
| “3nm circuit mask,” 48 layers, 30µm thinning, exact process temperatures/powers, cleaning recipes | These should be sourced for a named example or marked illustrative. A node name is not a literal dimension for every feature; process settings and thinning targets are not universal recipes. |
| Groundwater and “reliable nuclear/green power” as definitive reasons for JASM's location | Plausible discussion topics, but the bundled notes do not prove the entire causal explanation. Attribute reasons to a source or mark them as analysis. |

The “Checked 20 Oct 2026” banner and company names in the footer are not sufficient evidence for every added claim. The supplied map notes were cautious; the game adds quantitative and absolute assertions beyond those notes.

## Priority 3: concrete implementation defects

### C1 — Camera uses the starting stage and view (high)

`src/components/ThreeCanvas.tsx:43–267`: the animation loop is created inside an effect with an empty dependency list. It calls `calculateCameraTarget(currentStage, viewMode, ...)` at line 247 using the initial props captured by that closure.

The later effect changes model visibility but does not update what the loop reads. Selecting another stage or camera mode can therefore change the controls/model while camera positioning still follows the original state.

**Fix direction:** read current stage/view from synchronized refs or update a persistent camera target on prop changes. Avoid rebuilding the whole renderer on every interaction.  
**Playtest:** start, choose stage 5, switch macro/focus/isometric; confirm the camera follows each choice.

### C2 — Reset and minimize break continuity (high)

`src/App.tsx:68–72, 124–133` and `StageMinigames.tsx`: reset changes parent state but leaves the mounted minigame's many local states intact. Conversely, minimizing conditionally unmounts the minigame, discarding its local progress while the parent counters remain.

**Fix direction:** establish one authoritative session state. Reset all of it together; hiding controls should preserve it. Cancel pending timers when resetting/unmounting.  
**Playtest:** finish some actions, reset, then repeat and minimize/reopen. Compare counters, buttons and substeps.

### C3 — Goods and shipments are created without conservation (high)

`StageMinigames.tsx:207–215, 243–248, 276–282, 1103–1138`: dispatch always increments a destination and never consumes stock or checks test release. The initial state already includes 21 packaged/shipped units. Zero good dies is replaced by 21 through `|| 21`; the HUD does the same for tested-good dies.

**Fix direction:** begin guided missions with truthful starting inventory, preserve zero, and enforce cumulative shipped ≤ released good packages ≤ assembled units ≤ available good dies. Track remaining inventory separately.  
**Playtest:** jump to final test and dispatch repeatedly without producing anything; also try packaging without probing.

### C4 — Most controls have no meaningful production consequence (high learning impact)

Etch power is displayed but not used by `handleEtch`. Alignment is a fixed picture/readout. ATE always returns 3.95 GHz and success. Probe outcomes are random rather than tied to earlier processing; “Auto Probe All” rerolls results even after testing. Yield increases after cleaning regardless of quality.

These choices teach clicking to certify success. Either call them demonstrations, or implement a small model in which decisions affect visible outcomes. Re-testing should not silently reroll a physical lot.

### C5 — Guided completion can bypass the work (medium)

Stage 2's transfer button has no completion guard; stage 3 checks cuts rather than all preceding steps; stage 4 can reflow without previous assembly operations. The final restart only changes stage and does not create a fresh session.

Keep unrestricted exploration, but make guided mission prerequisites explicit and enforce them consistently. The UI should not claim a production journey is complete just because the player navigated to its last panel.

### C6 — Presentation and accessibility checks remain necessary (medium)

The control panel has no bounded height/scroll region while the app root hides overflow. Long panels may become inaccessible on shorter screens; confirm in a real browser.

The modal lacks dialog semantics/focus management, stage cards use clickable divs, range inputs lack associated accessible labels, and Escape toggles the map instead of consistently dismissing it. Review keyboard use and small-screen reachability alongside layout.

## The learning loop I recommend

Keep the manufacturing explorer, but add one short supply-chain mission before expanding technical depth.

**Example — qualified input arriving late** (all numbers and companies fictional):

A fab consumes 10 containers per day and has 30 usable containers. A qualified delivery arrives in five days. An expedited shipment can arrive in two days at extra cost. Another supplier has stock today, but its material is not qualified for this process.

Let the player inspect the lot, delivery confirmation, consumption rate, quality-release status and order deadline. Then make a decision: expedite, seek an approved inventory transfer, coordinate a production-plan change, or propose a substitute for engineering/quality review.

Advance the clock and show exactly when stock runs out, what can still run, what delivery commitments change, and what cash/cost is affected. Physical arrival must not automatically mean quality release.

The coordinator should request and coordinate decisions; engineering/quality owns process approval. Spending and customer commitments may also need authorization. Reward good escalation and accurate information, not magical unilateral control.

A second mission could involve a critical spare part delaying tool recovery; a third could allocate scarce qualified stock between customer orders. Add trade/customs details only after researching the specific route and rules.

At the end, provide a short cause-and-effect replay and an optional spoken debrief: what stopped, when, what bought time, who could approve a response, and why the fastest-looking alternative did or did not work. This connects hands-on understanding to interview explanations without turning the game into a recall quiz.

## Foundation for the later factual reference

Do not make this opinion the factual database. After independent review, create a separate versioned reference that the game consumes. It should contain:

- Entities: company, site, geography, function, inputs/outputs and product family.
- Relationships: material flow, equipment/service support, information flow and verified commercial links.
- Claims: exact statement, source URL, source date, checked date, scope, and status (fact / company plan / interpretation / hypothetical).
- Scenarios: initial stocks, consumption, lead times, qualification constraints, costs, player authority and consequences. Every invented number visibly marked as a game assumption.

Keep source-backed knowledge separate from game balance. In particular, market shares and company announcements should not be scattered across JSX strings.

Before Gemini revises the game, agree on one product route, one coordinator role, one mission, and the invariants for inventory/progression. Then implement a small playable slice and check whether the learner can explain its consequences in their own words.

## Suggested next sequence

1. Claude independently reviews the same revision, recording disagreements and additional sources in a separate opinion.
2. Compare findings by category: confirmed correction, acceptable simplification, unverified claim, or design choice. Do not declare consensus simply because two agents repeat a statement.
3. Agree on the factual reference and one mission.
4. Fix camera, session state and stock accounting.
5. Revise the chosen process route and its sources.
6. Playtest that slice with the learner before adding more stations or complexity.

This review changes documentation only. No game code has been modified.

## Primary sources checked

All checked on 20 October 2026. Source statements retain their original dates; company narratives are attributed, not independent market audits.

- **S1 — ASML, 2025 Annual Report, strategic report, chipmaking process diagram:** distinguishes deposition, resist coating, exposure, bake/develop, etch, implantation and resist removal. [Official report](https://ourbrand.asml.com/m/8ab959d4926657b/original/asml-2025-annual-report-strategic-report-section.pdf).
- **S2 — ASML, How microchips are made:** EUV/DUV layer distinction and foundry/fabless/IDM roles. [Manufacturing overview](https://www.asml.com/en/technology/all-about-microchips/how-microchips-are-made).
- **S3 — Ajinomoto, ABF innovation story:** thermosetting dielectric composition and build-up substrate role. [ABF](https://www.ajinomoto.com/innovation/our_innovation/buildupfilm?trk=article-ssr-frontend-pulse_little-text-block).
- **S4 — IBIDEN, Flip Chip PKG:** substrate wiring and micro-via functions. [Product page](https://www.ibiden.com/product/electronics/merchandise/fliptippkg/).
- **S5 — TSMC, third-quarter 2026 earnings-call transcript, 15 October 2026, PDF page 5:** Japan second-fab 3nm production scheduled for 2028; forward-looking company statement. [Transcript](https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2026-10/eba4fac72873bf546b669bd2b5d973df5c93215d/TSMC%203Q26%20Transcript.pdf).
- **S6 — TSMC, JASM Set to Expand in Kumamoto Japan, 6 February 2024:** Toyota included among investors; historical announcement. [Release](https://pr.tsmc.com/english/news/3105).
- **S7 — Ajinomoto, ABF: the pioneering technology behind today's computer brains, May 2020:** names Shigeo Nakamura. [Company history](https://www.ajinomoto.com/stories/sprinting-a-marathon-the-pioneering-technology-behind-todays-computer-brains).
- **S8 — Advantest, Component Test Systems, Prober:** describes die-level prober functions; does not substantiate every generic probe-card attribution in the game. [Product page](https://www.advantest.com/en/products/component-test-system/prober/).
- **S9 — Kyocera, 5 January 2026 plant integration announcement:** renamed Kirishima plant, effective April 2026, and broad production items. [Announcement](https://global.kyocera.com/newsroom/news/2026/001151.html).
- **S10 — Tokyo Electron Kyushu:** confirms Koshi location and coater/developer, cleaning and 3D packaging systems activities. [Site profile](https://www.tel.com/about/locations/tkl.html).
- **S11 — SUMCO, Production Processes:** reference for wafer manufacture, distinct from device fabrication. [Process overview](https://www.sumcosi.com/english/products/process/).
