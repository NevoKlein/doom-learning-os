# DOOM // Learning OS

A living learning system for the Doctor Doom game-development project.

## Source of truth
This repository is the source of truth for Codex. The deployed site is the learning interface.

## Current strategic direction
The project follows a character-first Doctor Doom foundation strategy. Read `docs/CODEX_HANDOFF_PROJECT_CHANGE.md`, `docs/PROJECT_CONTEXT.md` and `docs/CURRENT_STATE.md` before making major changes.

## Current interface
The repository contains the initial static Learning OS with 25 curriculum phases, resource data, roadmap, four-week starter plan, search/filtering, progress tracking, notes, exports and Codex guidance.

## Validation

Run the dependency-free repository checks with:

```bash
node tests/validate.mjs
```

These checks validate JSON syntax, IDs, curriculum/resource references, URL shape and critical application markers.

## Target product
Evolve this into a professional Learning OS that combines learning content, project milestones, next-action guidance, synced progress, research records and optional collaboration.

## Target hosting/database
Use a Git-connected host and, when cloud sync is justified, a managed database/auth layer. Vercel + Supabase are candidate choices; Codex should verify current capabilities before adopting them.

## Repository structure
index.html
content/
  curriculum.json
  resources.json
docs/
  CODEX_INSTRUCTIONS.md
  CODEX_HANDOFF_PROJECT_CHANGE.md
  PROJECT_CONTEXT.md
  GAME_DESIGN_PROPOSALS.md
  DECISION_LOG.md
  PRODUCT_REQUIREMENTS.md
  HOSTING_AND_DATABASE_PLAN.md
  DATABASE_SCHEMA_BLUEPRINT.md
  CODEX_EXECUTION_PLAN.md
  RESEARCH_LOG.md
  ARCHITECTURE.md
  CHANGELOG.md
assets/
tests/

## One-link Codex handoff
https://github.com/nevoklein100-png/doom-learning-os


## Baseline quality note
The current implementation is an initial baseline and should be audited, improved and potentially reworked by Codex. Existing code and planning are not presumed optimal.

The repository preserves project history, while the latest researched project state is the implementation target.
