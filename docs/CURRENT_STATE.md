# Current State — DOOM Learning OS

Last audited: 2026-09-23

## Current reality

The repository already contains a useful planning/documentation layer and a 25-phase curriculum, but the web application is still an early static baseline.

### Strengths
- GitHub is explicitly defined as the source of truth.
- Project history and current-state policy are documented.
- Curriculum and resources have structured JSON representations.
- Codex instructions and AGENTS.md give strong maintenance/research rules.
- Product direction, hosting options and future database boundaries are documented.
- Local progress/notes and export behavior exist in the current static interface.

### High-priority technical gaps

1. Duplicated content source: content/curriculum.json and content/resources.json exist, but index.html also contains a separate inlined curriculum/resource dataset. This creates a synchronization risk.
2. Static application architecture: UI, CSS, rendering logic and content are concentrated in index.html. This is acceptable as a baseline but becomes difficult to test and maintain as the Learning OS grows.
3. Client-state robustness: LocalStorage needs explicit versioning, malformed-data recovery and migration paths before the product becomes larger.
4. Testing infrastructure: test requirements are documented, but executable automated checks were minimal.
5. Learning OS behavior: the site has search, filtering, progress, notes and focus behavior, but does not yet fully implement the dashboard requirement for milestone, prerequisites, exact next action and remaining work.
6. Resource verification: resource records include verification fields, but there is not yet an automated freshness/link-check workflow.

## Immediate implementation priority

1. Add executable structured-data and HTML sanity checks.
2. Make the JSON datasets the clear canonical content source.
3. Add versioned local-state migration/backup handling.
4. Introduce a real next-action/milestone dashboard.
5. Split the application into maintainable modules.
6. Add cloud sync only after the local architecture is stable.

## Rule for future Codex sessions

Do not interpret this audit as a frozen roadmap. Re-audit when major changes occur. If current research shows a better architecture or workflow, update this file and the relevant decision/research records.
