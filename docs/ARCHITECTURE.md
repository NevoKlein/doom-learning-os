# Architecture

## Current
The project begins as a dependency-light static web app:
- `index.html` contains the current UI, CSS, JavaScript behavior and initial curriculum data.
- Browser `localStorage` stores progress and notes.
- External learning resources open in new tabs.
- No backend is required for the current interface.

Current localStorage keys:
- `doomLearningState`
- `doomGlobalNotes`

## Planned
Migrate gradually toward:
- `content/curriculum.json`
- `content/resources.json`
- separate application JS/CSS when the split clearly improves maintainability
- documentation under `docs/`
- automated tests/checks under `tests/`

Do not perform a large rewrite purely for style. Preserve existing behavior and saved progress.

## Data safety
Any future storage-schema change must include a migration or a safe compatibility path. Never silently discard progress or notes.

## Content source of truth
Once the migration is complete, curriculum/resource JSON becomes the source of truth for learning content. The current HTML remains the baseline until that migration is tested.

## Design
The UI is RTL Hebrew, dark, Doom-inspired and intentionally dependency-light. Codex may improve information architecture and visual design when it improves learning or reduces friction.

