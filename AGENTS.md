# AGENTS.md — DOOM Learning OS

## Read this first

You are maintaining a living Learning OS and the supporting project knowledge for a long-term Doctor Doom game-development project.

Before making substantial changes, read the entire repository and then read:
- docs/CODEX_INSTRUCTIONS.md
- docs/CODEX_HANDOFF_PROJECT_CHANGE.md
- docs/PROJECT_CONTEXT.md
- docs/GAME_DESIGN_PROPOSALS.md
- docs/DECISION_LOG.md
- docs/PRODUCT_REQUIREMENTS.md
- docs/HOSTING_AND_DATABASE_PLAN.md
- docs/CODEX_EXECUTION_PLAN.md
- docs/RESEARCH_LOG.md
- docs/ARCHITECTURE.md
- docs/CHANGELOG.md
- docs/CURRENT_STATE.md
- docs/AI_TIMING_STRATEGY.md
- content/curriculum.json
- content/resources.json

## Critical baseline warning

The existing website and repository are an initial baseline built with a relatively weak OpenAI model. Do NOT assume the current implementation, UX, architecture, curriculum sequencing, technical assumptions, or feature set is correct or production quality.

Audit aggressively and improve everything that needs improvement.

You may:
- refactor;
- redesign;
- replace weak architecture;
- fix bugs;
- improve UX;
- restructure the curriculum;
- replace obsolete resources;
- research better tools/workflows;
- add missing systems;
- migrate from static HTML to a stronger architecture when justified;
- introduce cloud sync, authentication, database and sharing when justified.

Do not rewrite arbitrarily. Preserve useful project knowledge and user data, and make changes because they improve correctness, maintainability, learning value, security or project velocity.

## History vs current state

Preserve project history, but never freeze an old decision.

When stronger research, better reasoning, newer engine versions, better tooling or deeper testing shows that an old plan is weak:
1. identify the old assumption;
2. research the alternative;
3. choose the better current approach;
4. implement it when safe;
5. document the change.

The repository must preserve:
- what we previously believed;
- why we believed it;
- what changed;
- why it changed;
- what the current implementation should do now.

For implementation, the latest researched current state wins over obsolete historical decisions.

## Current project direction

The project is character-first:
- Doctor Doom is the first foundational playable character.
- Prove the character, movement, animation, camera, input, combat, powers/VFX and feedback before broad expansion.
- Third-person is default.
- A genuine first-person mode is a desired feature when technically justified.
- Build one small system at a time.
- Learn -> build -> test -> improve -> document -> continue.
- User design proposals are replaceable when research or engineering shows a better solution.

## Research rules

For research-dependent changes:
- search current official documentation first;
- verify versions;
- verify URLs;
- verify licenses/terms;
- prefer free tools/resources;
- clearly label community guidance;
- never invent sources or capabilities;
- replace obsolete workflows;
- record meaningful findings.

## Learning OS rules

The site should help the user know:
- what to learn next;
- what to build next;
- prerequisites;
- current milestone;
- progress;
- notes;
- verified resources;
- project decisions.

Keep learning and actual game-building work distinguishable.

The site should remain professional, responsive, accessible, fast and maintainable.

## Data safety

Never silently destroy:
- localStorage progress;
- notes;
- project records;
- database data during future migrations.

When changing a data schema, provide a migration or compatibility path.

## Future architecture

GitHub is the canonical source for:
- curriculum;
- resources;
- project strategy;
- research;
- technical decisions;
- documentation.

A future database should primarily hold:
- users;
- progress;
- notes;
- study sessions;
- collaboration state.

Vercel and Supabase are candidate providers, not permanent requirements. Verify current capabilities, pricing and limits before adopting them.

## Production standards

For substantial work:
- test the application;
- test structured data;
- verify changed external links;
- check responsive behavior;
- check accessibility;
- review security;
- preserve user state;
- update documentation;
- update changelog/research/decision records when appropriate.

## Definition of done

Do not call a substantial change complete merely because it compiles or looks correct.

A strong completion should leave:
- working behavior;
- tested behavior;
- preserved data;
- current verified resources;
- updated documentation;
- a clear current project state;
- enough context for the next Codex session to continue without guessing.

## AI timing gate

The project owner is explicitly considering whether to wait roughly two months for stronger and/or cheaper AI coding agents.

Treat this as an open strategic option, not a decision.

Before large irreversible work, consult docs/AI_TIMING_STRATEGY.md and consider:
- durable value;
- automation potential;
- validation value;
- rework risk;
- current tool cost/capability;
- reversibility.

Never assume future model releases, prices or capabilities.

## Default behavior

Do not wait for the user to point out every weakness.

Inspect first, identify high-value improvements, research where needed, implement the safest valuable improvements, and document material changes.

The goal is a progressively better Learning OS and a better-supported Doctor Doom development process — not loyalty to the first version of this repository.
