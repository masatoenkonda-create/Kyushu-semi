# Game guidelines

Date: 20 October 2026  
Status: initial high-level brief from Maxence's design discussion with Codex. For Claude to review and for later development into a Gemini prompt. This is not yet the final prompt, a detailed specification, or a verified industry reference.

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

## 5. The full journey

At the broadest level:

**World map → enter stage → manipulate and process the input → obtain acceptable output → return to map → move to the next stage → repeat → finished chip → integration into an iPhone → someone uses the phone.**

The ending should make the connection between upstream work and a familiar finished product visible. The journey does not stop at a packaged chip on a factory tray.

There may be supporting supply branches rather than one perfectly straight line. We will decide later how to introduce them without losing the simplicity of following a product through to completion.

## 6. Accuracy without unnecessary complexity

The experience can simplify reality, but must preserve the important relationships: what the input is, what happens to it, what comes out, and how that output is used next.

The spoken examples—shoveling raw material, purifying material, processing an ingot—describe the desired hands-on simplicity. They are not approved manufacturing steps. In particular, do not turn “shoveling rare earths” into a factual starting point for silicon-chip production without checking the actual material and process.

Later research will determine the correct materials, process order, geographic route, companies and product connections. Invented settings or compressed operations must be identified as learning simplifications. The iPhone ending does not authorize inventing supplier relationships or claiming access to Apple's actual manufacturing recipes.

Understanding the physical process is an explicit part of this new design. Supply-chain context should connect those actions across places; a detailed procurement simulator is not required by this initial brief.

## 7. What remains open

Decide these in later discussions:

- Which chip within the phone we follow and how its route is represented.
- Exact stages, countries, sites and supporting branches.
- Specific tasks, parameters, success criteria and simplified process models.
- Camera movement and the relationship between the overview and first-person views.
- Art direction details, interface, controls and progression.
- The sourced reference material and assets supplied to Gemini.
- Technical implementation and the final build prompt.

For now, the deliverable is this high-level workflow. Preserve the current repository, review this brief with Claude, and develop the idea and factual resources before asking Gemini to rebuild.
