# CODEX MASTER INSTRUCTIONS — DOOM LEARNING OS

MISSION
Maintain and continuously improve this website and its learning system for the Doctor Doom game-development project. Treat the repository as a living product, not a one-off HTML page.

CRITICAL CURRENT DIRECTION
The project has undergone a major direction change toward a character-first Doctor Doom foundation. Read `docs/CODEX_HANDOFF_PROJECT_CHANGE.md` immediately after reading this file. That handoff is the canonical strategic context.

FIRST ACTIONS — ALWAYS
1. Read the entire repository before changing anything.
2. Read README, project-rule files, research notes, architecture docs, curriculum data, project context, design proposals, decision log and changelog.
3. Identify the current source of truth for curriculum content, UI/design, progress, research, project strategy and configuration.
4. Inspect existing behavior before changing it.
5. For research-dependent changes, verify current versions, URLs, licensing and workflows first.
6. Make a concise plan and define how the change will be tested.
7. Make the smallest safe change unless a larger refactor is clearly justified.
8. Test the result and report what changed and what was verified.

STRATEGIC PRINCIPLE
Build the foundation first:
learn -> build -> test -> improve -> document -> continue.

The first foundation is a high-quality playable Doctor Doom character and its core systems, not a giant world or roster.

PROJECT CONTEXT
Use `docs/PROJECT_CONTEXT.md` and `docs/GAME_DESIGN_PROPOSALS.md` for the current game direction. These describe proposals, not immutable laws.

RESEARCH POLICY
- Check official/current documentation first.
- Check current release/version information.
- Verify every new link.
- Prefer free resources.
- Check licenses for models, animations, sounds, images, code and datasets.
- Label community advice as community advice.
- Never invent tutorial titles, URLs, licenses, versions or capabilities.
- Replace obsolete workflows instead of silently keeping them.
- When sources conflict, document the uncertainty.
- Record important decisions in RESEARCH_LOG/CHANGELOG/DECISION_LOG.

RESOURCE STANDARD
For each useful resource, preserve or add when practical:
title, creator, direct URL, free/paid status, version/date, what it teaches, prerequisites, when to study, Doom relevance, priority, license notes, verification status and last checked date.

CURRICULUM STANDARD
Each phase should support:
id, number, title, priority/status, estimated hours, summary, goal, prerequisites, learning outcomes, tasks, exit criteria, resources, notes, research date and version notes.

Each resource should support:
type, title, creator, URL, free status, version/date, description, prerequisites, Doom relevance, priority, license notes, verification status and last checked.

RECOMMENDED REPOSITORY STRUCTURE
index.html
content/curriculum.json
content/resources.json
docs/CODEX_INSTRUCTIONS.md
docs/CODEX_HANDOFF_PROJECT_CHANGE.md
docs/PROJECT_CONTEXT.md
docs/GAME_DESIGN_PROPOSALS.md
docs/DECISION_LOG.md
docs/RESEARCH_LOG.md
docs/ARCHITECTURE.md
docs/CHANGELOG.md
assets/
tests/

If the project is still a single HTML file, migrate gradually and safely. Preserve current behavior and progress. Do not rewrite merely for style.

UX REQUIREMENTS
- Clear roadmap and next action.
- Search and filters.
- Global, phase and task progress.
- Estimated study/build time.
- Prerequisite/dependency visibility.
- Notes and backups.
- Research log and changelog.
- Responsive desktop/mobile layout.
- RTL Hebrew.
- Keyboard accessibility and visible focus.
- Strong contrast and readable typography.
- Fast load and minimal dependencies.
- Distinguish learning tasks from actual game-building tasks.

DESIGN FREEDOM
Codex is explicitly allowed to improve visual design and information architecture. It may introduce better dashboards, timelines, cards, progress visualizations, navigation, themes, icons and micro-interactions.
Do not redesign for novelty alone. Preserve important information. Keep the Doom-inspired identity unless usability evidence supports a change. Validate mobile and desktop after major changes.

GOOD FEATURES TO ADD WHEN JUSTIFIED
weekly planner; automatic next-step engine; prerequisite validation; phase completion percentages; remaining-hour estimates; learn-vs-build separation; milestone dashboard; research/changelog viewers; resource verification; outdated-link checking; curriculum import/export; progress backup/restore; versioning/migrations; troubleshooting library; glossary; skill matrix; tool/license matrix; printable view; offline-friendly behavior; local-only analytics.
Only add a feature when it improves learning or reduces friction.

CODE QUALITY
- Prefer simple maintainable code.
- Use semantic HTML and modular JS/CSS.
- Avoid duplicated data and unstable IDs.
- Preserve localStorage progress.
- Never silently destroy user data.
- Add migrations when saved-data formats change.
- Handle malformed/missing data safely.
- Keep dependencies minimal.

TESTING / DONE
Before declaring a change complete:
- Page loads without console errors.
- Navigation/search/filter/progress/notes/export work.
- New features work.
- Responsive layout works.
- New/changed external links are verified.
- Content claims are verified.
- Existing progress remains usable.
- The next human/Codex session can understand what changed.
- Structured JSON parses.
- New strategic documents are internally consistent.

VERSION CONTROL
Use small logical commits or PRs when available. Use descriptive messages. Do not mix unrelated work without documenting it. For risky work, prefer a branch/PR.

CHALLENGE OLD DECISIONS
User ideas are proposals, not immutable requirements. When research or engineering shows a better approach:
1. Identify the limitation.
2. Propose the better option briefly.
3. Implement it when safe.
4. Record significant replacements in the changelog/research log/decision log.

FREE-TOOL POLICY
Prefer free tools/services wherever practical. Do not silently introduce paid dependencies. Verify licensing and terms before recommending production assets.

FIRST REPOSITORY AUDIT
Before a major rewrite, inspect and report:
1. file structure
2. architecture
3. curriculum structure
4. bugs
5. outdated/missing resources
6. design/UX issues
7. how the current curriculum aligns or conflicts with the character-first direction
8. highest-value improvements
9. proposed next steps
Then implement the highest-value safe improvements in small testable increments.

LONG-TERM GOAL
Turn this from a static curriculum into a maintainable Learning OS that can evolve its research, guide the next action, track progress, document decisions and grow with the Doctor Doom game.

IMPORTANT
The GitHub repository is the source of truth for Codex. The deployed site is the learning interface. Keep them synchronized.


## CRITICAL BASELINE NOTE — IMPLEMENTATION QUALITY

The existing website and repository were initially assembled with a relatively weak OpenAI model compared with the model/tooling that may work on this repository later.

Therefore, **do not treat the current implementation as high-quality simply because it already exists.**

Treat all existing code, architecture, UI, curriculum structure, technical assumptions and planning as a **baseline to audit**, not as proof that the solution is correct.

Codex is explicitly expected to:
- inspect everything;
- find bugs, weak architecture, duplicated logic, missing functionality and poor UX;
- research better current approaches;
- redesign or rewrite parts when justified;
- replace weak decisions with better researched decisions;
- improve both the visible website and the underlying repository structure;
- test the result rather than assuming the existing code works.

Do not preserve a weak implementation merely because changing it is inconvenient.

At the same time, do not make arbitrary rewrites. Preserve useful content and user data, and make changes because they improve correctness, maintainability, learning value, UX, security or project velocity.

### NEW MODEL / NEW CAPABILITY ASSUMPTION

When a stronger model, better tooling or deeper research makes an older decision obsolete:
1. identify the old assumption;
2. explain the limitation;
3. research the better option;
4. replace it when justified;
5. record the change in the appropriate decision/research/changelog file.

The current repository is **not** the authority on what is technically best. The documented project goals are the authority on what the project is trying to achieve; the implementation should evolve toward the best researched solution.

### PROJECT UPDATE POLICY

All meaningful project updates should be preserved in the repository.

Codex should maintain the project record when:
- a system is added or removed;
- the game direction changes;
- a technical decision changes;
- a tool/workflow is replaced;
- a curriculum dependency changes;
- a research finding changes the plan;
- a limitation or blocker is discovered;
- a milestone is completed.

But preserving history does **not** mean freezing old decisions.

The repository should maintain both:
- **history:** what we previously believed/planned and why;
- **current state:** what Codex now believes is the best researched direction.

When they differ, current state wins for implementation, while the historical decision remains documented.

### CHANGE-OF-MIND RECORD

For a material planning change, record:
- previous approach;
- new approach;
- evidence/research;
- reason for the change;
- affected files/systems;
- migration or compatibility requirements;
- date;
- whether the change is reversible.

Avoid vague entries such as “updated plan.” Record what actually changed.

### CONTINUOUS AUDIT

On substantial sessions, Codex should actively ask:
- Is this still the best architecture?
- Are there newer Unreal/Blender workflows?
- Are the links/resources still current?
- Is there a simpler implementation?
- Is there a better free tool?
- Is the UX making the next action obvious?
- Are we building the right thing, in the right order?
- Are we preserving project knowledge while still allowing improvement?

The objective is a progressively better system, not permanent loyalty to the first implementation.
