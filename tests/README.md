# Tests

Baseline checks:
- Parse curriculum/resource JSON.
- Validate unique phase and resource IDs.
- Validate referenced resource IDs.
- Validate resource URL presence and syntax.
- Verify index.html required UI elements.
- Preserve doomLearningState and doomGlobalNotes.

Browser checks:
- load without console errors;
- search/filter;
- task persistence;
- notes persistence;
- exports;
- focus mode;
- modal behavior;
- responsive layout.

Future cloud checks:
- authentication;
- migration from localStorage;
- RLS allow/deny tests;
- private data isolation;
- public share isolation;
- production/preview environment configuration.