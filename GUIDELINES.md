# Game guidelines

Date: 20 October 2026
Status: high-level brief from Maxence's design discussion with Codex (§1–§7), fleshed out by Claude on the same day (§8–§17) to cover the whole supply chain. It is meant for Codex to review and, later, to become a Gemini build prompt. It is not yet the final prompt, a detailed specification, or a verified industry reference.

**How to read the additions.** Industry statements in §8–§17 carry a status tag, following the rule agreed in [UNIFIED_OPINION.md](UNIFIED_OPINION.md):

- `[fact]`: well established, but still needs a source in the reference file.
- `[reported]`: widely reported, but not confirmed by the companies involved.
- `[verify]`: plausible, but must be checked before the game teaches it.
- `[game]`: a deliberate simplification or invented number.

Company names in §9 are **candidates for research**, not confirmed suppliers of the chip we follow.

## 1. What we are building

Rebuild the game from the ground up as a hands-on journey through the semiconductor supply chain, from starting materials to a finished chip inside an iPhone being used by someone.

The player should understand by moving through places, manipulating objects, adjusting a few meaningful parameters, and seeing the result. Text supports the experience; it must not carry the whole explanation.

The aim is an accessible learning game. It should make the production process and the connections between its stages understandable through action and spatial visualization.

Keep the existing prototype and all three review documents in the repository as references:

- [Claude opinion](CLAUDE_OPINION.md)
- [Codex opinion](CODEX_OPINION.md)
- [Unified opinion](UNIFIED_OPINION.md)

These reviews guide factual care and lessons learned. The design direction below reflects the new request; earlier recommendations for a different kind of game do not override it.

## 2. Layer one: the world map

A simple 2D pixel-art world map, inspired by the stage-selection maps of Super Nintendo games such as Super Mario World and Donkey Kong Country.

- The player moves a marker or character between connected stage points.
- Each point represents a place and an activity in the supply chain.
- Countries such as China, South Korea, Japan and Taiwan appear as parts of the journey.
- Selecting an available point opens its playable production stage.
- Completing a stage makes the next part of the journey available and visibly advances progress.

This layer needs very little gameplay. Its purpose is orientation: where we are, what happens here, what we received, and where the output goes next. Attractive pixel art and clear routes matter more than elaborate map mechanics.

The countries named above are desired geographic scope, not a verified compulsory production order. The exact route and sites will be selected later from research for the chosen product. The map must not imply that every chip follows one universal national sequence.

Use original artwork that captures the broad era and feel of those games.

*Expanded in §10 (driving, ships and planes on the map).*

## 3. Layer two: playable production stages

Entering a map point opens a small, bare-bones 3D workspace.

Spatial understanding is the priority. The player must be able to see the material or component, the relevant tool or machine, and how an action changes the object.

The requested visual direction combines simple isometric-style 3D readability with direct first-person interaction:

- Simple geometry, clear shapes and readable spatial relationships.
- During manipulation, the camera acts as the player's viewpoint, like an FPS.
- The player can move/look around as needed and click to manipulate objects or operate equipment.
- No visible hands or body are required.
- An isometric overview may help show the workspace; whether and how it switches to first person is a later design decision.

The intention is not advanced graphics. Build only the visual detail needed to understand the task.

*Expanded in §9 (one card per stage) and §12 (the tool belt).*

## 4. The basic stage workflow

Every stage follows the same understandable loop:

1. **Arrive:** see the material or component received from the preceding stage.
2. **Understand the objective:** a short visual demonstration or instruction explains what must change.
3. **Act:** manipulate the object, load a machine, move material, or perform another simple physical task.
4. **Set parameters:** adjust a small number of controls relevant to this stage.
5. **Observe:** watch the operation and its effect on the material or component.
6. **Check the result:** see whether the output meets the stage's requirement.
7. **Continue or retry:** correct an unsuccessful attempt, or release the successful output and return to the map.

Actions and parameter choices must affect the result. A button followed by an automatic success message is not enough.

Feedback should show what changed and why. Failure is an opportunity to understand and try again, not an unexplained punishment. Exact controls, tolerances, recipes and difficulty are for later.

*Claude addition: two more steps close the loop.*

8. **Pack and document:** put the output into the correct container (drum, wafer box, tray, reel, carton) and pick up its paperwork: a lot number, a certificate of analysis or test report, and shipping documents. The physical object and its paperwork travel together.
9. **Hand over:** load it onto the vehicle for the next leg (§10). The next stage receives exactly what you shipped, including any defects you let through.

## 5. The full journey

At the broadest level:

**World map → enter stage → manipulate and process the input → obtain acceptable output → return to map → move to the next stage → repeat → finished chip → integration into an iPhone → someone uses the phone.**

The ending should make the connection between upstream work and a familiar finished product visible. The journey does not stop at a packaged chip on a factory tray.

There may be supporting supply branches rather than one perfectly straight line. We will decide later how to introduce them without losing the simplicity of following a product through to completion.

*Expanded in §8 (which chip), §9 (the full stage list) and §11 (supporting branches).*

## 6. Accuracy without unnecessary complexity

The experience can simplify reality, but must preserve the important relationships: what the input is, what happens to it, what comes out, and how that output is used next.

The spoken examples (shoveling raw material, purifying material, processing an ingot) describe the desired hands-on simplicity. They are not approved manufacturing steps. In particular, do not turn "shoveling rare earths" into a factual starting point for silicon-chip production without checking the actual material and process.

*Claude note:* the real starting material for silicon chips is **quartz rock (silicon dioxide)**, not rare earths `[fact]`. So the shovel stays, but it digs quartzite or high-purity quartz (§9, stage 1).

Later research will determine the correct materials, process order, geographic route, companies and product connections. Invented settings or compressed operations must be identified as learning simplifications. The iPhone ending does not authorize inventing supplier relationships or claiming access to Apple's actual manufacturing recipes.

Understanding the physical process is an explicit part of this new design. Supply-chain context should connect those actions across places; a detailed procurement simulator is not required by this initial brief.

*Claude note:* the "job layer" in §13 stays light. It is the logistics, paperwork and decisions *between* the hands-on stages, played through the same physical style: you drive the truck, stamp the form, load the ship. It is not a spreadsheet.

## 7. What remains open

Decide these in later discussions:

- Which chip within the phone we follow and how its route is represented. *(Claude proposes a default in §8.)*
- Exact stages, countries, sites and supporting branches. *(Draft in §9–§11.)*
- Specific tasks, parameters, success criteria and simplified process models. *(First pass in §9.)*
- Camera movement and the relationship between the overview and first-person views.
- Art direction details, interface, controls and progression. *(First pass in §14.)*
- The sourced reference material and assets supplied to Gemini. *(Structure in §15.)*
- Technical implementation and the final build prompt.

For now, the deliverable is this high-level workflow. Preserve the current repository, review this brief with Claude, and develop the idea and factual resources before asking Gemini to rebuild.

---

# Claude additions

## 8. Which chip we follow (proposal)

We need one product so that every stage has a clear input and output. Two candidates:

| | **A. Camera image sensor (recommended default)** | **B. Main processor (A-series)** |
|---|---|---|
| What it is | The chip behind the iPhone's camera lens. It turns light into the photo you take. | The phone's "brain". |
| Why it fits | Japan-centred and Kyushu-centred. Sony is the world leader in image sensors `[fact]` and is widely reported as an iPhone camera sensor supplier `[reported]`. Sony has fabs in Kumamoto, Nagasaki and other Kyushu sites `[verify list]`. Modern sensors are **stacked**: a pixel wafer is bonded to a logic wafer `[fact]`, and JASM in Kumamoto makes logic for Sony among others `[reported]`. | It shows the most famous chain: TSMC Taiwan, EUV, advanced packaging. |
| Weakness | Less "AI chip" glamour. | Almost entirely Taiwan-based, with little Japan or Kyushu in the core steps. |
| Ending | You take a photo with the phone. The photo is the proof your chip works. | You open an app. |

**Proposal:** follow **A** as the main route. Show **B** as an optional side quest later, to contrast EUV and advanced packaging. Japanese inputs (wafers, resist, TEL tools, Advantest testers, DISCO saws) appear in both. The chip itself is **fictional** ("Kyushu Eye sensor"), and the game says so on screen. It never claims to be Apple's or Sony's real part.

## 9. The full journey, stage by stage

Each stage card lists:

- **Where:** a candidate region. The route needs research and can change.
- **You receive / you ship:** the input and output.
- **Hands-on:** the toy-like physical action and tool.
- **Parameters:** 1–3 controls that really change the result.
- **Check:** how success is judged.
- **What you learn.**

The numbers in parameters and checks are `[game]` unless tagged otherwise.

### Main route

**1. Quarry: dig the quartz**
- Where: a quartz mine. High-purity quartz for crucibles is famously mined at Spruce Pine, USA `[fact, verify detail]`; quartzite for silicon metal comes from many countries.
- You receive: nothing; this is the beginning. You ship quartz rock in a dump truck.
- Hands-on: drive the excavator or use the **shovel** to dig. Pick out the white, clean quartz and throw away dirty or iron-stained rock.
- Parameters: how picky you are while sorting (purity vs. tonnes per hour).
- Check: impurity level of the load.
- What you learn: chips start from ordinary-looking rock, and purity starts here. One mine can be a global chokepoint (Spruce Pine).

**2. Smelter: make silicon metal**
- Where: silicon smelters. China is the largest producer `[fact, verify share]`.
- You receive: quartz plus carbon (coal or wood chips). You ship metallurgical-grade silicon (~98–99% pure `[fact]`) in big bags.
- Hands-on: load an electric arc furnace with **shovelfuls** of quartz and carbon, lower the electrodes, tap the glowing molten silicon into moulds, then crush it.
- Parameters: quartz-to-carbon mix, furnace power.
- Check: purity and yield of the silicon metal.
- What you learn: this step is energy-hungry and geographically concentrated. That is a supply risk.

**3. Chemical plant: purify to polysilicon**
- Where: polysilicon makers, e.g. Tokuyama (Japan), Wacker (Germany), Hemlock (USA), and Chinese producers `[verify]`.
- You receive: silicon metal. You ship electronic-grade polysilicon chunks (9N–11N `[fact]`) in clean double bags.
- Hands-on: turn silicon into a liquid gas (trichlorosilane), **distil** it in a column, then grow pure silicon onto hot rods (the Siemens process `[fact]`). Break the rods into chunks with a clean hammer, wearing gloves.
- Parameters: distillation cut (purity vs. waste), rod temperature.
- Check: purity counter in "nines". 9N = 99.9999999%.
- What you learn: purity is measured in nines. Contamination by touch is a real thing.

**4. Wafer plant: grow the crystal and slice wafers**
- Where: SUMCO or Shin-Etsu sites, e.g. SUMCO in Saga, Kyushu `[verify site]`.
- You receive: polysilicon, plus a quartz crucible (branch from stage 1). You ship 300 mm wafers in sealed wafer boxes.
- Hands-on:
  1. Load chunks into the crucible.
  2. Dip the seed crystal and **pull** the ingot slowly while it rotates (Czochralski `[fact]`).
  3. Grind it round.
  4. **Wire-saw** it into wafers.
  5. Lap, etch and polish it to a mirror.
  6. Inspect it under light for particles.
- Parameters: pull speed and rotation (crystal defects vs. speed), polishing time.
- Check: flatness, particle count, crystal defects.
- What you learn: a wafer is a precision product. Japan's two makers lead the world `[fact]`.

**5. Mask shop: write the photomask (information becomes glass)**
- Where: mask makers, e.g. Toppan/Tekscend, DNP or Hoya in Japan `[verify]`, or in-house at the fab.
- You receive: the chip design file (branch 11.4) and a blank mask. You ship a set of photomasks.
- Hands-on: drive an **e-beam writer** over the blank like a drawing robot, develop it, etch the chrome pattern, then hunt for defects with a magnifier.
- Parameters: write speed vs. accuracy.
- Check: no defect inside the pattern.
- What you learn: the design arrives as data. A mask defect gets copied onto every chip.

**6. Front-end fab, pixel wafer: build the light sensors**
- Where: an image sensor fab, e.g. Sony in Kumamoto or Nagasaki `[reported/verify]`.
- You receive: wafers, masks, chemicals (branch 11.1) and gases (branch 11.2), on tools you installed (branch 11.3). You ship a finished pixel wafer.
- Hands-on: the core loop, repeated per layer:
  1. **Deposit** a film.
  2. **Coat** the resist on the track: a spinning plate.
  3. **Expose** it in the scanner: shine light through the mask.
  4. **Develop** it.
  5. **Etch** it.
  6. **Strip and clean** it.
  7. **Implant** dopants: a "spray gun" of ions makes the photodiodes.
  8. **CMP**-polish it flat.
  9. **Measure** with a metrology microscope. If a layer is off, rework it before moving on.
- Parameters per step: exposure dose and focus, etch time, polish time.
- Check: metrology result per layer, then a final pass/fail map.
- What you learn: the repeated loop, why metrology feedback matters, and that most layers use DUV light, not EUV `[fact]`.

**7. Front-end fab, logic wafer: build the readout brain**
- Where: e.g. a JASM-type logic foundry in Kumamoto `[reported/verify]`.
- You receive: wafers and the same branches. You ship the logic wafer.
- Hands-on: a shortened version of stage 6, so it isn't repetitive. Highlight only what differs: transistors and metal wiring layers.
- What you learn: one product can need two different fabs, possibly from two companies.

**8. Stacking: bond the two wafers**
- Where: the sensor fab.
- You receive: the pixel wafer and the logic wafer. You ship one bonded wafer.
- Hands-on: **flip** the pixel wafer, **align** it over the logic wafer, then press and bond them (bonding tools, e.g. TEL `[verify]`). Thin the back of the pixel wafer so light can reach the pixels. Add the colour filter mosaic (red/green/blue) and tiny **microlenses** on top.
- Parameters: alignment X/Y, bonding pressure, colour filter placement.
- Check: alignment error and a test image through the colour filter.
- What you learn: stacked sensors are why phone cameras got so good. Bonding and thinning are precise steps.

**9. Wafer test (probe)**
- Where: at the fab or a test house.
- You receive: the bonded wafer. You ship the wafer plus its **wafer map** (good/bad dies).
- Hands-on: place the wafer on the **prober** (e.g. Tokyo Electron, Tokyo Seimitsu `[fact]`), lower the probe card, then run the **tester** (e.g. Advantest `[fact]`). Each die lights up green or red. For a sensor you can also shine a test light and see dead pixels.
- Parameters: test limits (strict = fewer escapes but lower yield).
- Check: yield, and how many bad dies "escape".
- What you learn: who makes the tester vs. the prober vs. the probe card. Yield is money.

**10. Thin and dice**
- Where: back-end site, possibly another country (Taiwan, Southeast Asia, China) `[verify]`.
- You receive: the tested wafer. You ship individual dies on tape.
- Hands-on: **grind** the back (e.g. DISCO `[fact]`), mount the wafer on tape in a frame, run the **dicing saw** or laser along the streets, then pick dies off the tape with a vacuum pen.
- Parameters: blade speed, cut depth.
- Check: chipping and cracks under the microscope.
- What you learn: DISCO's "cut, grind, polish" `[fact]`. Thin wafers are fragile.

**11. Package the sensor**
- Where: the assembly/test site (an OSAT or in-house) `[verify]`.
- You receive: dies, a substrate (branch 11.5) and a glass cover. You ship packaged sensors on tape-and-reel or trays.
- Hands-on: **pick and place** the die onto the substrate, make the electrical connections (wire bond or flip-chip, depending on the real package `[verify]`), put the glass cover on, seal it, and mark it with a laser.
- Parameters: placement accuracy, bonding temperature.
- Check: X-ray view of the connections, plus a dust check under the glass. Dust on a sensor ruins photos.
- What you learn: packaging protects the chip and connects it to the outside world. Cleanliness matters for optics.

**12. Final test and pack-out**
- Where: the same site.
- You receive: packaged sensors. You ship **released** sensors in moisture-barrier bags, with a test report.
- Hands-on: load the **handler**, run electrical and image tests (test light, dark frame), temperature-test a sample, sort into bins, then vacuum-seal the reels with desiccant and a humidity card.
- Parameters: how big a sample to stress-test, and the bin limits.
- Check: escapes found later vs. yield lost now.
- What you learn: test vs. reliability qualification. Moisture-sensitive parts need dry packing (MSL `[fact]`).

**13. Camera module**
- Where: camera module makers in Asia `[reported, verify names]`.
- You receive: sensors, plus lenses, an autofocus/stabilisation actuator and an IR filter (branch 11.6). You ship camera modules.
- Hands-on: mount the sensor on a small board, then **actively align** the lens stack while watching a live test image until it's sharp. Glue and cure it with UV light.
- Parameters: lens tilt and focus.
- Check: sharpness on a test chart.
- What you learn: a chip is usually one part of a sub-assembly, built by another company in another country.

**14. Phone assembly (EMS)**
- Where: contract manufacturers' plants in China or India `[reported, verify]`.
- You receive: the camera module plus the main board, processor, memory, screen, battery and housing (shown as arriving boxes). You ship finished phones.
- Hands-on:
  1. **Print solder paste** on the main board.
  2. Run **pick-and-place** for the components.
  3. **Reflow** it through the oven.
  4. Do the optical inspection.
  5. Fit the camera module and connectors into the housing.
  6. Screw it closed and power it on.
  7. Run the final test station, including a camera test.
- Parameters: reflow profile, screw torque.
- Check: phone boots, and the camera passes.
- What you learn: SMT assembly, and that hundreds of suppliers converge in one factory.

**15. Distribution to the user**
- Where: distribution centre → store → home.
- You receive: phones. You ship one phone in someone's hand.
- Hands-on: pallet on a forklift, a truck to the store, someone unboxes it.

**16. The ending: take the photo**
- The person opens the camera and takes a photo of something (the Kyushu landscape?).
- The game **zooms through the lens** into the module, the sensor, the stacked wafers and the pixels, back to the quartz from stage 1.
- Then a **replay** of your journey: map route, time, quality decisions, and the documents you stamped.
- What you learn: the whole chain in one shot.

**17. Optional epilogue: recycling**
- The phone is returned and taken apart, and materials are recovered. Short and optional `[verify]`.

### Why the route is not one straight line
Stages 6–7, 8, 11 and 13 receive inputs from **branches** (§11). The map shows them as side paths that join the main road. The player sees that the main route stalls if a branch is late.

## 10. The map and the vehicles

Max's idea: you **drive a small car** on the map from one point to the next. Here is how that fits the brief.

- **Overland legs:** a little truck or van drives along roads between points. It carries the cargo from the previous stage, visible in the truck bed. Drive time is short and skippable after the first time.
- **Sea legs:** a container ship for heavy, non-urgent cargo (quartz, silicon metal, equipment crates). It is slow and cheap.
- **Air legs:** a cargo plane for small, high-value or urgent cargo (wafers, sensors, modules). It is fast and expensive.
- **Choosing the mode is a decision** for some legs: ship or plane? Normal or express? The game shows days and cost. `[game]` numbers; the trade-off itself is `[fact]`.
- **Map points have icons** for the type of place: mine, smelter, chemical plant, fab, test house, port, airport, customs office, warehouse.
- **Countries are regions of the map**, each with its own pixel-art look. Crossing a border always passes a customs point (§13).
- **Kyushu gets a zoomed-in region.** The camera dives from the world map into a Kyushu map with its cluster (Kumamoto, Nagasaki, Saga, Kagoshima…), so the "Silicon Island" title still means something.
- **Persistent cargo:** what's in the truck is the real output of your last stage, with its quality. Defects travel with it.

## 11. Supporting branches (side quests that feed the main road)

Each branch is a shorter mini-stage that delivers an input to the main route. Do them in any order before the stage that needs them. Some can be "auto-delivered" on easy mode.

1. **Photoresist (chemicals).** Mix and filter the resist in a clean lab (e.g. JSR, TOK, Shin-Etsu `[fact: they make resist]`). Fill it into bottles and ship it **cold**: it's temperature-sensitive with a limited shelf life `[verify specifics]`. It is also flammable dangerous goods `[verify]`, so pack it, label it and pick a carrier that accepts it. If the cold chain breaks, the fab rejects the lot.
2. **Gases.** Fill cylinders with process gases (e.g. neon for lasers, fluorine compounds for etch). Show that some come from far away: neon and Ukraine, 2022 `[fact, verify detail]`.
3. **Equipment.** Receive a giant crate (e.g. a scanner from the Netherlands, or a track from TEL Kyushu in Koshi `[fact]`). Unload it by crane into the fab, connect it, and run qualification wafers before production may use it. Later, a **spare part** breaks and you must source it (§13 event).
4. **Design data.** The customer sends the chip design ("tapeout") as encrypted data. It is information, not a box, so it travels as a glowing data packet on the map. Some design tools and technology are export-controlled `[fact]`, which gives a short "check the licence" step.
5. **Package substrate.** Build up a small substrate: laminate an insulating film, laser-drill vias, plate copper, then repeat. It shows that ABF-type film is a layer *inside* the substrate (e.g. Ajinomoto film → IBIDEN-type substrate maker `[fact: roles]`).
6. **Lens and actuator.** Mould tiny lenses and assemble the actuator. It shows how many other suppliers the camera module needs.
7. **Ultrapure water and power (fab utilities).** A short visit: pump groundwater, purify it to ultrapure water, and check the power supply. It ties in Kumamoto's groundwater debate `[fact, verify detail]`.

## 12. The tool belt

Max wants the player to physically use tools. Every stage gives one or two tools, from rough to fine as you go down the chain. That itself teaches the jump in precision:

| Stage | Tools |
|---|---|
| Quarry | Shovel, pickaxe, sorting table, dump truck |
| Smelter | Shovel, arc-furnace lever, ladle, crusher |
| Chemical plant | Valve wheel, distillation column, clean hammer, gloves |
| Wafer plant | Crystal puller crank, wire saw, polishing pad, inspection lamp |
| Mask shop | E-beam writer joystick, magnifier |
| Fab | Wafer tweezers / robot arm, spin coater, scanner, etch chamber, ion gun, CMP pad, metrology microscope |
| Stacking | Flip-and-align table, bonding press |
| Test | Prober, probe card, tester console, test light |
| Thin & dice | Grinder, tape mounter, dicing saw, vacuum pen |
| Package | Pick-and-place head, wire bonder or flip-chip bonder, laser marker, X-ray viewer |
| Final test | Handler, temperature chamber, vacuum sealer |
| Module | Lens alignment rig, UV lamp |
| Phone assembly | Stencil and squeegee, pick-and-place, reflow oven, screwdriver |
| Logistics | Forklift, pallet wrapper, label printer, **rubber stamp**, crane |

Tools and the cleanroom suit unlock as you go. The look gets cleaner and brighter as purity rises: muddy quarry → glowing furnace → white cleanroom → yellow-lit lithography bay.

## 13. The job layer: logistics, customs and decisions

This is the part that prepares Max for supply chain jobs. It sits between stages and uses the same hands-on style.

**Paperwork you physically handle** (`[fact]` that these documents exist; details to verify per route):

- commercial invoice
- packing list
- certificate of analysis / test report
- bill of lading (sea) or air waybill (air)
- HS code on the customs declaration
- certificate of origin
- dangerous goods declaration (resist, gases)
- **export licence / classification**, where controlled (e.g. Japan's Foreign Exchange and Foreign Trade Act list, US EAR / ECCN for some tools and technology `[verify]`)

**The boat-and-customs mini-game (Max's idea):**

1. Drive to the port.
2. At the export desk, pick the right **classification** for the cargo from a few options.
3. Check that the **paperwork matches the boxes**: count, weight, lot numbers.
4. Stamp the forms.
5. Load the container onto the ship.
6. At import customs, the officer may **inspect**. Mistakes cause holds (days lost), fines, or return. Correct, consistent paperwork clears fast.
7. Incoterms appear in simple form: who pays and who is responsible on each leg (e.g. EXW vs DAP) `[fact: concept]`.

**Other decisions with visible consequences:**

- **Ship vs. plane, normal vs. express** (§10).
- **Inventory buffer:** keep safety stock of a critical input or not. Stock costs money but protects you from events.
- **Qualification gate:** a cheaper or faster alternative supplier exists but is *not qualified*. Using it requires an engineering/quality review that takes time. Skipping it risks the customer rejecting the lot. (Codex's "qualified input arrives late" mission from UNIFIED_OPINION §7.2 fits here.)
- **Release vs. arrival:** goods arriving at the dock are not usable until quality releases them.
- **Roles:** the player is the **coordinator**. Some choices need sign-off from quality, engineering or the boss, shown as quick "ask for approval" calls. The game rewards escalating early with correct information.

**Events drawn from real history** (each needs a source before use; shown as news flashes on the map):

- earthquake in Kumamoto (2016) stopping a fab for a while
- export controls on certain chemicals (Japan → Korea 2019)
- a fab fire (Renesas Naka 2021)
- a shortage of substrates (2021–23)
- a gas supply shock (neon 2022)
- port congestion
- a typhoon delaying ships
- a tool breakdown waiting for a spare part

Events are rare and **forecastable when possible**: weather warnings and news give the player a chance to react.

## 14. Progression, scoring and feel

- **Progression:** a "chip passport" travels with the product and gains a stamp at every stage and border. The map fills in behind you.
- **Score on three things, not one:** **quality** (yield, defects that escaped), **time** (days from quarry to customer), and **cost**. No single "perfect" path; trade-offs are the lesson.
- **Failure is cheap and explained:** a bad lot shows *why* it failed (e.g. "particles from skipped cleaning"), lets you retry the stage, and costs some time or money. You never lose the whole run.
- **Difficulty modes:**
  - **Story:** generous tolerances, auto-delivered branches, no events.
  - **Coordinator:** events, the qualification gate, paperwork mistakes matter.
- **Knowledge cards:** each stage unlocks one or two short cards (company, machine, material) with the claim, its source and its status (`fact` / `company plan` / `reported` / `game`). Cards are optional reading, never a quiz wall.
- **Debrief / interview mode:** at the end, and optionally after each country, the game asks "explain what just happened in your own words" (typed or spoken), then shows a model answer. This links the game to the interview-prep and teaching modes Max already uses.
- **Pace:** each stage should take about 3–8 minutes the first time and be replayable faster. The whole main route is a few sessions, not one sitting. `[game]`
- **Save progress** per stage, so Max can play in short breaks.

## 15. Content and data rules (for the rebuild)

Agreed in UNIFIED_OPINION §7.1, repeated here so the build prompt carries it:

- **All facts live in one versioned reference file**, never in UI strings. Each claim has text, source URL, source date, checked date, scope and status.
- **Each stage is defined by data:** input, output, tools, parameters (with `[game]` ranges), success checks, location candidates, and linked claims. The game engine reads stages from that data, so a corrected fact never requires a code change.
- **Game assumptions are labelled** on screen with a small marker (e.g. a dice icon), so the player can tell "real" from "simplified".
- **Fictional names for the product and customer.** Real companies appear only in their sourced role (e.g. "Advantest makes testers like this one"), never as confirmed suppliers of the fictional chip.
- **Stock is conserved:** you can't ship more than you made, released and packed (fixes UNIFIED_OPINION D3).

## 16. First playable slice (so we don't build everything at once)

Build and playtest this small slice before the full route:

1. **Map:** Kyushu zoom-in with three points plus one port.
2. **Stage 4 (wafer plant), reduced:** pull, slice, polish, inspect.
3. **Stage 6 (fab loop), reduced:** coat → expose → develop → etch → clean, with one metrology check.
4. **One drive leg and one customs leg**, with paperwork matching.
5. **One event** (the late qualified resist delivery).
6. **A mini ending:** a test image from the wafer, plus the replay.

**Success test:** after playing, Max can explain out loud, without notes, what each stage received, did and shipped, and why the late resist mattered.

## 17. Open questions for Codex and Max

1. Confirm the product: image sensor (A) or processor (B)? (§8)
2. How literal should geography be? A real-ish world map, or a stylised one with real country names?
3. Which stages are fully playable and which are short "drive-through" scenes? Suggestion: fully play 1, 4, 6, 8, 9, 10, 11 and 14; make the rest quicker.
4. Single-player only, or a later mode where Max explains the chain to someone else?
5. Language: English only, or Japanese labels too (useful for jobs in Japan)?
6. Platform: desktop browser first? Touch support later?
7. How much of the job layer is in Story mode vs. Coordinator mode?
8. Which real events (§13) to research first?
