# Game guidelines — one chip, a worldwide journey

Updated: 20 October 2026  
Status: evolving design specification for Claude and Codex to review before a Gemini build prompt is written. No rebuild is requested yet.

## 1. Current direction and precedence

**One generic chip. A worldwide supply chain. Two visual layers. Learn by doing.**

Follow material as it becomes a wafer, many dies, a packaged chip, and finally part of an iPhone someone uses. On screen, call the product **“chip”**. Do not ask the player to choose between a sensor, processor, memory chip, or technology node. Do not teach nanometer generations in this prototype.

The manufacturing story must still be internally consistent: use one simplified silicon-chip route, with a single die and one compatible illustrative package. Do not combine special steps from unrelated products just to include impressive machinery.

This worldwide direction supersedes the earlier Kyushu camera-sensor proposal, the “Kyushu Eye” product, the stacked pixel/logic wafer campaign, and the Kyushu-only first playable slice. Japan remains an important part of the network, not its center by default. The repository name is historical; it does not constrain the setting.

Preserve the original prototype and these independent review records as historical guidance:

- [Claude opinion](CLAUDE_OPINION.md)
- [Codex opinion](CODEX_OPINION.md)
- [Unified opinion](UNIFIED_OPINION.md)

Their factual cautions and identified bugs remain useful. Their old product, region and mission recommendations are not binding on the new design.

## 2. What the player should understand

By the ending, the player should be able to trace:

- What each place receives, changes, checks and sends onward.
- The difference between rock, purified silicon, an ingot, a wafer, a die, a package, a circuit board and a complete phone.
- Why designs, equipment, materials and manufacturing services come from different places.
- Why a late or unusable input can stop the next operation.
- Why testing finds defects, while manufacturing choices create or prevent them.

“Entire supply chain” means the major stages and their important dependencies at a high level. It does not mean every process step, supplier, chemical, phone component or country becomes a separate level.

Hands-on production is the core experience. Logistics connects the production stages. Neither text walls nor a detailed procurement dashboard should replace the spatial learning.

## 3. The two layers

### Layer A — 2D world map

An original pixel-art world map with the broad feel of Super Nintendo stage maps such as Super Mario World or Donkey Kong Country.

Move a character, marker or small vehicle between connected points. Select a point to enter a stage; finish it and return to the map. Travel is short, simple and skippable. Driving skill, racing and flight simulation are not progression requirements.

Use recognizable relative geography, readable country/place labels and uncluttered routes. Nearby stages can share a regional inset; no region receives a privileged zoom just because the old project was about Japan.

Show three kinds of connections clearly:

1. **Material/product flow:** physical cargo moves between operations.
2. **Equipment and recurring supplies:** supporting routes join production.
3. **Design information:** a data connection, not a cargo shipment.

Each point answers “where, what happens here, what arrives, what leaves?” A completed route remains visible for later replay.

The map shows an **illustrative teaching route**, not the proven itinerary of an actual Apple chip. Put that explanation in the route legend and source panel, not in a warning after every click.

### Layer B — simple 3D workspaces

Entering a stage opens a small workspace built for spatial comprehension.

- Simple geometry, readable shapes, clear materials and restrained effects.
- An isometric overview establishes where the input, tool, controls and output are.
- First-person inspection/manipulation lets the player move/look and click on the relevant objects.
- No visible hands, body or combat mechanics.
- A clear way to return to overview and reset the camera.
- Magnified cross-sections reveal changes too small or hidden to see normally.

The exact camera transition can be prototyped later. Both views should support the same task; neither needs a large explorable factory.

A microscopic operation is represented through a machine, schematic or magnified view. Do not imply a person literally paints transistors or hand-carves the chip.

## 4. Geographic plan: a credible example, not a fabricated contract chain

Use the following **working scenario geography**. It is a design choice grounded in real activities at these locations. It is not evidence of shipments between the example companies.

**Main material route:** Norway → Germany → Japan → Taiwan → China mainland → a user market.

**Converging information/equipment routes:** a US design activity; equipment examples from the Netherlands and Japan.

| Map region | Activity in the teaching route | Evidence and limit |
|---|---|---|
| Norway | Quartz/quartzite extraction and silicon-metal production | Elkem documents Norwegian mines and silicon facilities; R03. A particular mine-to-smelter shipment is not specified. |
| Germany, Burghausen region | Purification for electronic-grade polysilicon | WACKER documents semiconductor-grade polysilicon activity there; R04. No WACKER-to-wafer-maker contract is asserted. |
| Japan, Imari/Saga region | Crystal growth and wafer manufacture | SUMCO process and site references; R05–R06. The stage is fictional, not a replica of that factory. |
| United States | A short design-data branch joins the fab route | Sector-level design context; R01. It does not identify the actual designers of the fictional product. |
| Netherlands | A lithography-equipment branch supplies the fab | ASML describes its systems and Netherlands activities; R08. Show “lithography,” without requiring EUV or a node size. |
| Japan | Process equipment/material branches | TEL Kyushu's documented equipment role is one example; R09. Detailed chemicals need their own sources before use. |
| Taiwan | Wafer fabrication, then assembly/test activities | Foundry and packaging/test examples; R07 and R10. Do not require an international border between stages that can happen within Taiwan. |
| China mainland | Board/phone integration and assembly | Apple documents iPhone assembly there; R11. This does not prove the upstream fictional chip route. |
| User market | Distribution, retail/delivery, and use | Destination chosen for the story; mark it a scenario choice. |

South Korea belongs on the global context map: Samsung documents foundry manufacturing locations there (R12). It can have a short inspectable context point explaining that fabrication also happens elsewhere. **Do not make this same wafer visit both Taiwan and Korea merely to collect countries.** It is not a second playable chip campaign.

These example countries are not exclusive owners of their activities. Exact factory pins, transport legs and any named commercial relationships need additional evidence before they are presented as real. If a detail cannot be supported, retain the broad regional example or leave it unresolved.

Sources R01–R15 are defined in [SOURCES.md](SOURCES.md), with what each does and does not establish.

## 5. Campaign workflow

**Map → enter stage → inspect input → perform a small task → see the transformation → check quality → release output → see its handoff → next point.**

Every stage has:

- One clear learning objective and visible input/output.
- One or two meaningful interactions; no automatic-success decoration.
- A small number of relevant controls.
- An understandable success check.
- A visible explanation of a bad result and a quick retry.
- A short handoff showing the next dependency.

The early stages follow a batch of material, not one literal rock turning into one chip. At the wafer stage, show many dies being made together. Later, follow one representative good die to the user while accounting for the rest of its batch.

Design and supporting supplies run alongside the material route. Unlock them when relevant; do not imply chip design begins only after wafers have been produced.

## 6. Proposed stages

The operations below have source-backed foundations; their playable interactions and controls are **proposed teaching simplifications**, not validated industrial operating procedures. Sources support process roles, not the invented game settings. A detailed recipe and physical model are later work.

| Stage | Setting and input → output | Proposed hands-on task | Visible check / lesson | Basis |
|---|---|---|---|---|
| 0. A chip starts as a design | US information branch: intended function → checked design data | Arrange a few functional blocks, connect a simple path and run a demonstration check; send data to the mask/fab branch | A design describes the device; it is not a material cargo | R01–R02; block puzzle is a game abstraction |
| 1. Obtain the raw material | Norway: quartz-bearing rock → selected mineral feed | Excavate, sort and load a batch; inspect a sample | Appearance alone cannot certify purity; sample checking supports acceptance | R03; sorting interaction is illustrative |
| 2. Make silicon metal | Norway: mineral feed plus carbon input → silicon metal | Load a simplified furnace, adjust feed balance/energy, then observe the transformation | Silicon is obtained by processing silica; a furnace does not make finished semiconductor-grade material | R03 |
| 3. Purify the silicon | Germany: silicon metal → electronic-grade polysilicon | Operate an enclosed model showing chemical conversion, distillation and silicon deposition; collect the acceptable output | Removing contamination takes additional processing; “more heat” is not a universal purity control | R04, R13; detailed controls remain game abstractions |
| 4. Grow a crystal | Japan: polysilicon → single-crystal ingot | Load a crucible, introduce a seed and control a simplified pulling action | Distinguish purified polycrystalline material from a single crystal; show defects if the model's controls are wrong | R05 |
| 5. Make wafers | Japan: ingot → inspected, polished wafers | Slice, finish/polish, clean and inspect using simplified tools | Shape, surface and cleanliness matter; contamination can make an otherwise usable wafer unacceptable | R05–R06 |
| 6. Prepare the pattern and the fab | Converging branch: checked design + mask blank → patterning masks; fab receives equipment and supplies | Reveal how data becomes a mask, inspect it, then see a scanner/track installed in the fab | Masks carry patterns; machines and chemicals are enabling inputs, not ingredients that become silicon | R01, R08–R09, R14; mask-writing controls remain to design |
| 7. Build the chip on the wafer | Taiwan: blank wafer + approved design/masks/materials → patterned devices and wiring | A short sequence: deposit → coat → expose → bake/develop → etch → strip/clean, with inspection feedback; show other needed operations in a short overview | Reveal a before/after cross-section. Repeat selected representative cycles rather than pretending one loop is the complete fab flow | R02, R07–R08 |
| 8. Test the wafer | Taiwan: processed wafer → wafer and good/bad die map | Position the wafer in a test setup, run the test, inspect the map and preserve the result | Tests identify device outcomes; they do not repair defects or randomly change them on a rerun | R02, R10 |
| 9. Separate the dies | Taiwan: mapped wafer → individual dies with retained identity | Mount the wafer, align the cutting path and separate dies; show thinning only if the selected package flow needs it | Cutting can damage a good die; preserve the association with its test result | R02, R10; tooling detail to source |
| 10. Package the chip | Taiwan: good die + compatible carrier/package materials → electrically connected, protected chip | Attach the die to a carrier, form wire connections and add protective resin in an illustrative package | Distinguish die, package and circuit board. Do not mix several alternative package families | R10, R15; package-specific details remain to verify |
| 11. Final test and release | Taiwan: packaged units → accepted units ready for shipment | Test, separate accepted/rejected units, pack and label the released lot | Packaging can introduce problems; passing arrival inspection is not the same as final product release | R02, R10; release workflow is a game model |
| 12. Put the chip into the phone | China mainland: released chip + board and other supplied components → working phone | Place the package on its board, show a simplified electrical attachment, connect the board and remaining modules, then close/test the phone | Other components converge here; our chip does not perform every function in the phone | R02, R11; board/attachment detail to source |
| 13. Deliver and use | User market: finished phones → someone using one | Pack, follow a brief distribution leg, unbox, power on and perform a simple action | Complete the journey from industrial input to everyday use | Scenario choice; iPhone is the familiar endpoint, not a verified product genealogy |

Stages 4–5 and 8–11 may be grouped into shared locations or workspaces. They are learning beats, not a requirement for thirteen elaborate mini-games. No additional border is invented when the same site can do multiple operations.

The final action can be opening an app or interacting with the phone. It should not imply we manufactured a camera sensor unless that is a later, explicit change of scope.

## 7. Supporting dependencies without a second campaign

Show only the branches needed to explain the current stage:

- **Design and masks:** information becomes a physical patterning tool.
- **Equipment:** scanner, track and other tools arrive, are installed and checked.
- **Consumables:** chemicals, gases and cleaning inputs are replenished.
- **Package inputs:** the die needs compatible connecting/protective materials.
- **Utilities:** power and clean water enable production but do not travel with each chip.
- **Phone components:** other parts arrive ready-made at integration.

Start with visual deliveries and brief optional interactions. A chemical-production mini-game, an ABF substrate factory, memory production, camera modules and wafer stacking are not mandatory scope.

Show supplier capability examples as examples. ABF is not a universal requirement for the generic chip. Do not force an input into the bill of materials because it appeared in the old Japan map.

## 8. Logistics stays light and credible

Retain Claude's useful idea that each handoff carries cargo identity, condition and a simple document trail. Present the relevant details through objects and compact displays.

For the first prototype, include:

- A visible lot identifier and quantity.
- Suitable illustrative protection/packaging.
- Arrival, inspection/release and availability as separate states.
- One short transfer with a meaningful time/quality consequence.
- At most one disruption, such as a delayed approved input.

A truck/ship/plane is mainly a visual transition. Mode choices are optional and must depend on this cargo/route; “all wafers fly” and “all heavy cargo sails” are not universal rules.

The player moves between workshop tasks for learning. This does not mean one real employee is a miner, fab engineer, customs official and coordinator. In any coordination mission, engineering/quality approvals remain distinct from shipping decisions.

Do not make a rubber stamp magically grant customs clearance. Do not assert that every map border has the same requirements. Real customs, dangerous-goods, temperature-control, shelf-life, Incoterm and export-control details require route/product-specific primary sources before inclusion. No real legal classification is specified by this brief.

## 9. Meaningful outcomes and manageable complexity

Keep the experience welcoming and consequence-driven:

- Inputs affect outcomes through a small, consistent model.
- Animation, object state, quality result and counters agree.
- Testing discovers an outcome attached to the lot; repeated tests do not reroll it.
- Bad material is held, rejected or scrapped as appropriate. Rework is offered only where the chosen simplified process allows it.
- Inspection can reveal hidden defects; a beautiful model is not proof of quality.
- Guided progression enforces prerequisites. Free review of completed stages is available.
- Quantity accounting respects transformations: mass-based upstream batches become wafers and then discrete units. Do not add incompatible units or create stock from a zero-value fallback.
- At the discrete-unit stages, cumulative shipments cannot exceed released acceptable output.
- Reset, retry, hide/show panels, camera changes and save/resume preserve a consistent session.

Quality, time and cost can provide a light debrief, not a complex optimization contest. Each trade-off should explain its consequence visually. Avoid hard session-length targets until playtesting shows the pace.

## 10. Readability, controls and learning support

- Short instruction, demonstration, action, feedback; one new idea at a time.
- Use readable object labels, scale changes and cross-sections to connect macroscopic objects with microscopic structures.
- Fast-forward waits and skip repeated travel after learning its purpose.
- Save at stage boundaries; let the learner replay without losing the campaign.
- No compulsory spoken/typed quizzes. Offer an optional “explain this journey” replay for interview practice.
- Desktop browser is the working platform assumption; confirm controls before implementation.
- Provide an alternative to continuous free-camera movement, readable text, scrollable panels, keyboard-operable menus and labels that do not rely only on red/green.
- Reduced motion and camera reset support spatial learning when movement becomes distracting.

## 11. Evidence rules and source workflow

[SOURCES.md](SOURCES.md) is the starting evidence register, not proof of an entire real chip itinerary.

Replace the old “fact, but still needs a source” label with explicit states:

- **Source-supported:** a checked source supports this exact statement within the recorded scope.
- **Company announcement:** a dated plan, not current production.
- **Unverified:** a research lead; excluded from factual teaching until checked.
- **Interpretation:** our explanation/inference, visibly distinguished where material.
- **Game assumption:** invented route, parameter, quantity, timing, simplification or outcome model.

For each substantive claim record its ID, text, source URL, publisher, source date/undated status, checked date, section/page, geographic/product scope and limitations.

Verify four different things separately: **process order, company capability, site location and supplier relationship**. Evidence for the first three does not prove the fourth. Corporate headquarters are not a factory location. Sector trade data do not establish a particular firm's contract.

Use primary process descriptions, company manufacturing/site documentation and public-agency/industry mappings. Treat promotion and market-share claims cautiously. Search snippets and previous agent opinions are leads, not final evidence.

Before a stage is built, check its input/output and dependency list against the register. Unsupported detail is simplified or omitted, not filled in by Gemini. Keep factual content separate from invented game balance and from UI code.

The simplified campaign is not a literal iPhone production genealogy. We can show the familiar iPhone endpoint while explicitly describing the upstream journey as representative.

## 12. Retire the old generated map

The old Japan supply-chain infographic is withdrawn from the active prototype and from the rebuild's reference assets. Remove its image file and its displayed image block; retain it only through Git history.

Keep the existing source notes and original prompt as historical records. Their company-role links can be rechecked and reused individually. Neither the generated image nor its prompt is evidence of a geographic route or a supplier relationship.

Do not generate a replacement map yet. First approve the process graph and the location/source table; then create the pixel-art map from that approved graph. Artwork follows the model.

The existing prototype may otherwise remain Japan-themed until the rebuild. Its old titles and company panels are historical, not the new specification.

## 13. First playable slice and review gates

Build a small **international** slice before implementing the entire campaign:

1. A world map with Japan → Taiwan and an equipment connection from the Netherlands.
2. Japan wafer-making workspace: grow/slice/polish/inspect in a reduced sequence.
3. One transfer with a lot identity and preserved quality state.
4. Taiwan fabrication workspace: a representative pattern-transfer cycle and a magnified result.
5. A short preview of the remaining global route to phone use.

Use fictional facilities in evidenced regions. These arrows are scenario links, not confirmed company contracts. Do not bolt on a second chip type, stacking, an entire customs simulator or a full vehicle game.

Success is observable: after playing, the learner can identify what moved, what transformed, what remained in the factory and why an unusable input matters. Confusion should lead to a visual/mechanic revision before adding levels.

Before the Gemini build prompt is finalized:

- Review the process graph and selected package for internal consistency.
- Complete source checks for the unresolved stage details listed in SOURCES.md.
- Approve a compact stage list and interaction model.
- Approve map points/links before commissioning new artwork.
- Include state/progression and quantity invariants in the build specification.
- Playtest camera clarity and cause/effect in the international slice.

## 14. Review changes in this revision

Retained from Claude: material transformations, physical tools, cargo continuity, supporting branches, meaningful checks, optional learning cards, and save/retry.

Changed: worldwide campaign replaces Kyushu priority; one generic chip replaces the image-sensor/processor choice; simplified fabrication replaces sensor-specific stacking; international slice replaces the Kyushu slice; evidence-backed location examples replace speculative location lists; source-supported claims replace unsourced “fact” tags.

Deferred: extra chip types, node sizes, specialty sensor processes, mandatory chemical side quests, elaborate vehicles, detailed customs law and historical-event campaigns.

Current work is planning, evidence and removal of the obsolete infographic. The game rebuild and a replacement map come later.
