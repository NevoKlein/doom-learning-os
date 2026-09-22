# DOOM // Learning OS

A living learning system for building a high-quality Doctor Doom-inspired action game with Unreal Engine and Blender.

## Source of truth
This repository is the source of truth for Codex. The deployed site is the learning interface.

## Current state
The initial interface is a self-contained static `index.html` with:
- 25-phase curriculum
- roadmap and 4-week starter plan
- search and priority filters
- task progress stored in localStorage
- per-phase and global notes
- progress export and content export
- Focus mode
- Codex Master Control instructions

## Repository structure
```
index.html
content/
  curriculum.json
  resources.json
docs/
  CODEX_INSTRUCTIONS.md
  RESEARCH_LOG.md
  ARCHITECTURE.md
  CHANGELOG.md
assets/
tests/
```

## Codex workflow
1. Read the whole repository before substantial changes.
2. Verify current documentation, resource URLs, licensing and workflows when research is involved.
3. Make small testable changes.
4. Preserve local progress and notes.
5. Update the research log/changelog for significant changes.
6. Keep the repository and deployed site synchronized.

## Current project-direction change
The project now follows a character-first Doctor Doom foundation strategy. Read `docs/CODEX_HANDOFF_PROJECT_CHANGE.md` for the complete canonical handoff and `docs/PROJECT_CONTEXT.md` for the current strategic context.

## Project scope
The curriculum moves from Unreal fundamentals and Blueprint architecture through character creation, Blender, skeletal assets, rigging, animation, retargeting, gameplay/combat, Niagara, audio, facial animation/lip sync, cinematics, world building, AI, UI/settings, save systems, optimization and packaging.

## One-link handoff
Give Codex the repository root:
https://github.com/nevoklein100-png/doom-learning-os
