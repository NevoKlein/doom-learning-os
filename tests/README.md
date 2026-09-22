# Tests

## Baseline checks
- Parse `content/curriculum.json`.
- Parse `content/resources.json`.
- Confirm every curriculum phase has a unique id and number.
- Confirm every resource referenced by a phase exists.
- Confirm resource URLs are present and syntactically valid.
- Confirm `index.html` contains the required UI element IDs.
- Confirm existing localStorage keys remain supported:
  - `doomLearningState`
  - `doomGlobalNotes`

## Browser behavior checks
- Page loads without console errors.
- Search works.
- Priority filter works.
- Phase task checkboxes persist.
- Notes persist.
- Progress export works.
- Content export works.
- Focus mode finds the first incomplete phase.
- Modal open/close works.
- Mobile layout remains usable.

## Strategic checks
When the curriculum is changed:
- Character-first direction remains visible.
- Learning and project-building work are distinguishable.
- Advanced systems do not become accidental prerequisites for the first playable foundation.
- Paid tools are not made hidden requirements.
- Current resources are re-verified when their links/workflows change.
