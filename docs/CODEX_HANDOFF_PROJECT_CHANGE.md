# CODEX HANDOFF — MAJOR PROJECT DIRECTION CHANGE

## Purpose

This document is the canonical, full handoff for a major change in the direction of the Doctor Doom game-development project.

Read this document together with:
- `docs/CODEX_INSTRUCTIONS.md`
- `docs/PROJECT_CONTEXT.md`
- `docs/GAME_DESIGN_PROPOSALS.md`
- `docs/DECISION_LOG.md`
- `content/curriculum.json`
- `content/resources.json`

The important point is that the project is no longer being treated as "learn a large list of Unreal/Blender topics and eventually make a game." The direction is now:

**learn what is immediately necessary -> build one real piece -> test it -> improve it -> lock the foundation -> move to the next piece.**

The first major foundation is **Doctor Doom as a character and gameplay system**, not a giant game world with many characters from the beginning.

---

## 1. THE MAJOR CHANGE

The project should be developed from the inside out.

The foundation is not:
- a giant open world,
- a huge roster,
- dozens of enemies,
- a complete story,
- or a large amount of content made before the core character feels excellent.

The foundation is:

**one high-quality playable Doctor Doom character + the systems required to make him feel like a real finished game character.**

Only after that foundation works should the project expand into larger environments, more enemies, more characters, more story content and wider systems.

This is a deliberate change in development order.

The goal is to avoid spending months building infrastructure around a character that has not yet been proven fun, controllable, visually coherent and technically sustainable.

---

## 2. DEVELOPMENT PHILOSOPHY

The working loop is:

**LEARN -> BUILD -> TEST -> OBSERVE -> FIX -> POLISH -> DOCUMENT -> CONTINUE**

Do not turn the curriculum into passive education.

Every important topic should connect to a concrete artifact or experiment.

Examples:
- Learn Enhanced Input -> build Move/Look/Jump/Sprint.
- Learn camera systems -> build a usable third-person camera and first-person toggle.
- Learn Blender basics -> create a small game asset.
- Learn rigging -> deform a real test character.
- Learn retargeting -> make an external animation work on the target character.
- Learn combat architecture -> make one complete attack loop.
- Learn Niagara -> make one gameplay-triggered Doom effect.
- Learn audio -> give one action convincing audio feedback.
- Learn Sequencer -> make one short in-engine scene.
- Learn save systems -> persist one real gameplay state.

Do not make the curriculum huge merely to make it look complete. A smaller sequence that is actually actionable is better than a giant list that is never completed.

---

## 3. GAME IDENTITY

The project is intended to become a high-quality, story-driven, single-player comic-inspired action game.

Core direction:
- Doctor Doom is the first and current main playable character.
- Third-person is the default gameplay perspective.
- A real first-person perspective is desired as an available mode/toggle when technically justified.
- Combat and character feel are extremely important.
- Animation quality is a major priority.
- Powers, armor, VFX, sound and camera behavior should contribute to the character's identity.
- The game is not intended to be an RPG simply for the sake of having RPG systems.
- Avoid repetitive mission structure and repetitive combat loops.
- Systems should be reusable and modular rather than hidden in one giant Blueprint.
- The project should be able to grow into a larger universe later, but that expansion is not the starting requirement.

These are project-direction proposals. They are not sacred technical facts. Codex should challenge them when research or engineering indicates a better solution.

---

## 4. THE FIRST REAL TARGET

The first meaningful target should be a **small playable Doctor Doom prototype/foundation**, not the complete game.

The prototype should eventually establish:

### Character
- correct Doom silhouette and proportions
- modular armor where useful
- cape/cloak as an independently controllable part where practical
- usable skeleton/rig
- consistent asset naming and organization
- support for future animation and cinematics
- a path for both masked Doom and unmasked Victor scenes

### Movement
- idle
- walk
- jog/run
- sprint
- jump
- start/stop behavior
- acceleration/deceleration
- turning behavior
- believable weight
- appropriate camera behavior
- enough polish that Doom does not feel like a default mannequin with a different mesh

The exact locomotion model should be validated through research and iteration.

### Camera
Default:
- third-person camera behind the character
- player-controlled rotation/orbit

Possible alternate mode:
- genuine first-person character view
- correct hand/body presentation
- appropriate head/look relationship
- camera behavior that remains coherent with animation and gameplay

Do not fake a first-person mode by simply placing a camera on the face if a better architecture is needed.

### Input
Input should be action-based:
- move
- look
- jump
- sprint
- interact
- attack
- powers
- camera toggle
- lock-on or target selection when the system supports it

Keyboard/mouse can be the initial development input, but the architecture should remain controller-friendly and Xbox-ready.

---

## 5. DOOM AS THE FOUNDATION

The current project is explicitly starting with Doom before expanding into a wider character roster or world.

That means Codex should prioritize:
1. Doom character asset pipeline.
2. Doom skeleton/rig.
3. Doom movement.
4. Doom animation architecture.
5. Doom camera.
6. Doom combat foundation.
7. Doom powers/VFX.
8. Doom audio/feedback.
9. Doom cinematic integration.
10. Only then, broader world/game systems as justified.

This ordering can change if technical research reveals a better dependency order. Record meaningful changes.

---

## 6. CHARACTER ASSET STRATEGY

The intended visual workflow is based on strong references, not guessing.

Where possible, use:
- front references
- back references
- side references
- neutral/T-pose or A-pose references
- multiple reference angles when needed

The current visual direction for Doom should be treated as a research/design target rather than a fixed legal/source asset.

The model should be designed with downstream use in mind:
- deformation
- rigging
- animation
- first-person visibility
- cinematics
- damage/replacement
- armor construction/wearing/removal scenes

### Modular armor

Investigate whether separating armor into logical components provides a better pipeline.

Potential parts may include:
- body/base mesh
- torso armor
- arms
- gauntlets
- legs
- boots
- belt/utility parts
- cape/cloak
- mask
- other mechanically relevant pieces

Do not split everything just because it is possible. Split where it improves:
- animation
- construction scenes
- material management
- damage/replacement
- performance
- iteration

### Unmasked Victor

The project may need an unmasked Victor appearance for story/cinematic scenes.

The exact likeness, character reference, hair and face direction should be treated as an unresolved design decision that requires research, not as an already-finalized casting decision.

---

## 7. ANIMATION IS A FIRST-CLASS SYSTEM

Animation is not a polish step to be left until the end.

The project should treat animation as a core system from early development.

The learning and implementation path should cover as needed:
- skeletal meshes
- skeletons
- skinning
- Animation Blueprints
- State Machines
- Blend Spaces
- animation montages
- layered poses
- additive animation when appropriate
- IK
- retargeting
- Control Rig
- animation cleanup
- start/stop/turn animations
- combat animation
- power animations
- cinematic animation
- facial animation

The exact tool split between Blender, Unreal and other free tools should be researched rather than assumed.

---

## 8. COMBAT DIRECTION

Combat should be built incrementally.

Start with one complete, understandable loop.

Example development sequence:
1. attack input
2. attack animation
3. attack state
4. hit detection
5. target reaction
6. damage/event
7. impact feedback
8. recovery/cooldown
9. camera feedback
10. sound/VFX
11. interruption and edge cases
12. polish

Do not begin by building 30 moves.

Build one move correctly, prove the architecture, then expand.

The system should separate:
- gameplay state
- hit/damage logic
- animation
- camera
- VFX
- audio
- UI feedback

This reduces future rewrite risk.

---

## 9. POWERS AND VFX

Doom's powers are part of his identity.

VFX development should therefore be connected to gameplay, not made as isolated visual tests only.

Research and build toward:
- gameplay-triggered Niagara systems
- impact effects
- armor/energy feedback
- power activation/deactivation
- projectile or beam-like effects if the eventual design calls for them
- environmental interaction where justified
- performance-aware VFX

The exact set of powers is intentionally not fixed here. Use researched Doom material and gameplay design iteration to determine what belongs in the first prototype.

---

## 10. AUDIO

Audio should be treated as part of the feel of the character.

The project should eventually cover:
- action SFX
- armor movement sounds
- footsteps
- impacts
- powers
- UI sounds
- environmental audio
- voice
- 3D attenuation/spatialization
- mixing/priorities
- procedural/audio systems when useful

The project should favor believable, layered, real-sounding feedback where possible rather than making every sound obviously synthetic.

Only use audio assets whose current licensing/terms are verified before distribution.

---

## 11. VOICE AND LIP SYNC

The project may use recorded voice for development.

A major requirement is that dialogue timing, especially for unmasked Victor scenes, must stay synchronized with the actual spoken delivery.

Therefore investigate workflows that preserve:
- exact audio timing
- dialogue segmentation
- phoneme/mouth timing
- facial animation
- jaw movement
- lips
- eyes/brows when appropriate
- cinematic retiming

A basic "mouth opens when audio starts" solution is not sufficient for the intended quality target.

Do not assume one lip-sync tool is permanently correct. Research current free/open workflows and replace the tool if a better option exists.

---

## 12. CINEMATICS AND STORY

The project may eventually include a substantial story and cinematic presentation, potentially drawing on comic material and major Doom story periods.

However:
- story facts must be researched;
- comic references must be identified explicitly;
- chronology should not be invented;
- adaptations should be distinguished from comic canon;
- candidate source comics should be documented before being treated as required reading.

Potential source material discussed historically may include early Fantastic Four Doom material, Books of Doom and Secret Wars-related material, but these are **candidate research sources, not automatically locked canon requirements**.

Codex should research and recommend the minimum useful source set rather than making the project owner read an unnecessarily large number of comics.

---

## 13. STORY/CONTENT IS ALLOWED TO CHANGE

The project owner's current ideas are proposals.

If Codex discovers:
- a better technical approach,
- a more maintainable architecture,
- a more accurate Doom interpretation,
- a better workflow,
- a better free tool,
- a licensing problem,
- an obsolete Unreal workflow,
- a better animation pipeline,
- or a better production sequence,

Codex should challenge the current approach.

Expected behavior:
1. identify the limitation;
2. explain the better option briefly;
3. verify it;
4. implement it when safe;
5. document the change.

Do not preserve a bad idea merely because it appeared earlier in the project history.

---

## 14. FREE-ONLY TOOLING CONSTRAINT

The project is intended to use free tools/services wherever practical.

Current working constraint:
- do not assume paid software or subscriptions;
- do not build the workflow around a tool that requires payment;
- do not require a credit card to follow the curriculum unless the project owner explicitly changes this constraint;
- prefer official free documentation, free/open-source tools, free educational resources and assets with clearly usable licenses.

Codex Plus is available as the coding/AI service for this project, but that does not mean other paid services should be introduced automatically.

In particular, do not make the workflow depend on a paid 3D-generation service merely because it is convenient.

When a paid tool is substantially better, document the free alternative and the tradeoff rather than silently making it a requirement.

---

## 15. UNREAL / BLENDER TECHNICAL BASELINE

The learning plan currently uses:
- Unreal Engine 5.8 as the working engine baseline.
- Blender 4.5 LTS as the working Blender baseline.

These are baseline versions, not permanent guarantees.

Before a workflow becomes important:
- re-check current documentation;
- check whether the workflow changed;
- check current version compatibility;
- replace obsolete instructions.

Blueprints should be preferred for learning and rapid iteration where appropriate.

C++ should be introduced only when the actual architecture benefits from it. Do not teach C++ simply because a AAA game can contain C++.

---

## 16. FREE ASSET / ANIMATION PIPELINE

Use external assets as temporary accelerators where useful.

Possible sources include:
- Unreal/Epic samples
- Fab assets with verified licenses
- Mixamo or other currently permitted free resources
- Blender/open-source resources
- other community sources where licensing is explicit

Do not confuse:
- "free to download"
with
- "free to redistribute in a game."

Every production-use asset needs an explicit license/terms check.

For placeholder animation, prioritize speed of experimentation.

For final-quality character work, determine later which animations should be:
- cleaned/retargeted,
- authored in-house,
- generated procedurally,
- or sourced from a properly licensed pack.

---

## 17. 3D WORKFLOW

The intended pipeline is roughly:

reference
-> blockout
-> modeling
-> materials/UV
-> rig
-> skinning
-> animation tests
-> export
-> Unreal import
-> retarget/IK
-> gameplay test
-> iteration

Do not push a nearly finished Doom model through the entire pipeline without testing an earlier small asset first.

A small armor piece or generic humanoid test can prove:
- scale
- skeleton
- export
- import
- materials
- animation
- retargeting
- naming

Then the Doom character can use the proven pipeline.

---

## 18. CAMERA AND BODY REPRESENTATION

The first-person requirement deserves special technical attention.

The intended outcome is not merely:
- "camera near head."

Investigate how to handle:
- first-person hand visibility
- body visibility
- weapon/power presentation
- head rotation
- body rotation
- animation offsets
- camera collision
- transition between perspectives
- third-person and first-person animation differences

A technically cleaner architecture is preferable to a shortcut that causes the two perspectives to behave like unrelated games.

---

## 19. PROJECT ARCHITECTURE

The game should be designed so that one system can be improved without rewriting unrelated systems.

Prefer reusable components/systems for areas such as:
- movement
- camera
- input
- combat
- damage
- powers
- VFX
- audio
- interaction
- AI
- UI
- save/load

Avoid:
- giant all-in-one character Blueprints
- hardcoded key bindings
- gameplay logic mixed into presentation-only nodes
- duplicated systems for similar features
- unstable asset naming

Use data-driven structures where that meaningfully improves extensibility.

---

## 20. LEARNING SYSTEM CHANGE

The Learning OS itself should also evolve.

The website is not just a list of tutorials.

It should eventually know:
- what has been completed;
- what is next;
- what prerequisites remain;
- which resources are verified;
- how much time a phase may take;
- what is learning versus actual project building;
- which decisions changed;
- which resources became obsolete;
- which project milestone is currently active.

Useful future capabilities include:
- automatic next action
- prerequisite validation
- milestone dashboard
- research log viewer
- changelog viewer
- resource verification
- backup/restore
- progress migrations
- troubleshooting library
- glossary
- skill matrix
- tool/license matrix

Only add features that measurably reduce friction or improve learning.

---

## 21. FIRST MILESTONE

The first meaningful milestone is not "finish all 25 phases."

The first milestone is:

**a controllable Doom foundation that proves the pipeline.**

A successful first foundation should eventually demonstrate:
- playable character
- clean input
- good third-person movement
- first-person mode prototype
- usable camera
- basic animation state machine
- target skeleton/rig
- imported/retargeted animation
- one combat loop
- one Doom power/VFX loop
- audio feedback
- a small test environment
- stable iteration workflow

The exact milestone checklist can evolve as the actual project exposes dependencies.

---

## 22. QUALITY BAR

"Works" and "finished" are not the same.

The intended quality direction is:
- responsive controls
- clean animation
- coherent camera
- convincing transitions
- readable feedback
- believable audio
- stable gameplay state
- no obvious avoidable clipping or technical artifacts
- modular architecture
- reproducible builds
- verified resources
- documented decisions

However, do not polish a system endlessly before proving that it is useful.

The correct pattern is:

**prototype -> validate -> improve -> lock -> move on**

---

## 23. TESTING RULE

Every important milestone should have an observable test.

Examples:
- input: all intended actions work on keyboard and controller;
- camera: perspective toggle behaves predictably;
- animation: no broken state transitions in normal movement;
- retargeting: feet/hands do not obviously fail in the test set;
- combat: attack/hit/damage/recovery loop survives repeated use;
- VFX: activates correctly and remains within a measured budget;
- audio: event fires consistently;
- save: state survives reload;
- packaging: packaged build runs cleanly.

Document failures and fixes rather than hiding them.

---

## 24. WHAT CODEX SHOULD DO FIRST

When this handoff is first received:

### Step 1 — Audit
Read the entire repository.

### Step 2 — Identify sources of truth
Determine which files control:
- curriculum
- resources
- instructions
- project direction
- design proposals
- research
- changelog
- UI

### Step 3 — Compare old and new direction
Identify where the existing curriculum still assumes a "learn everything first / build later" workflow or under-prioritizes Doom as the first foundation.

### Step 4 — Rebuild the sequence carefully
Do not destroy working content.

Instead:
- reorder where justified;
- add missing prerequisites;
- split oversized phases;
- merge duplicate learning content;
- identify which topics are early, later or optional;
- connect learning to concrete Doom-oriented outputs.

### Step 5 — Research missing workflows
Verify current Unreal/Blender workflows before updating them.

### Step 6 — Improve the Learning OS
Make the next step obvious and make the current milestone visible.

### Step 7 — Test
Verify:
- site loading
- progress
- notes
- search
- filtering
- exports
- resource links
- responsive behavior
- JSON parsing
- saved-data compatibility

### Step 8 — Document
Update:
- research log
- changelog
- architecture docs
- decision log where applicable

---

## 25. DO NOT MAKE THESE MISTAKES

Do not:
- build the whole world before proving the character;
- add 20 combat moves before one attack is good;
- assume every free asset is commercially redistributable;
- preserve obsolete Unreal documentation;
- make paid tools required without authorization;
- hardcode controller keys into gameplay;
- create giant Blueprint monoliths;
- make the site depend on one fragile external service;
- rewrite the entire website just for aesthetic novelty;
- replace user data without migration;
- invent comic canon;
- invent tutorial links;
- claim a resource was verified when it was not;
- treat old project decisions as immutable.

---

## 26. SUCCESS CONDITION FOR THIS DIRECTION CHANGE

The project has successfully adopted the new direction when:

1. The Learning OS clearly distinguishes learning from building.
2. The next concrete action is always visible.
3. Doctor Doom is treated as the first foundational playable character.
4. The first milestones prioritize character feel, animation, camera, input and combat.
5. The curriculum no longer requires mastering every topic before meaningful building starts.
6. Research-dependent instructions are current and verified.
7. Paid tools are not accidentally required.
8. The repository contains a clear record of the direction change.
9. Codex can continue improving the project without guessing what the current strategy is.
10. The architecture remains flexible enough to expand beyond Doom later.

---

## 27. FINAL INSTRUCTION TO CODEX

Treat this as a major project-direction update, not as a cosmetic documentation change.

Do not blindly execute every sentence here as a technical law.

Instead:
- understand the goal;
- inspect the actual repository;
- research the relevant workflows;
- replace weak decisions when warranted;
- implement the best maintainable solution;
- document meaningful deviations.

The ultimate objective is not to produce the largest curriculum or the most complicated website.

The objective is to create a learning/development system that can take a beginner from zero to a genuinely sophisticated playable Doctor Doom foundation, while preserving a path to a much larger game later.

The project should become more capable over time without becoming more chaotic.

**Build the foundation first. Prove it. Polish it. Then expand.**
