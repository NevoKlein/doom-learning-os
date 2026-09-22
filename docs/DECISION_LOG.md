# Decision Log

## 2026-09-22 — Direction change
### Decision
Adopt a character-first development strategy centered on Doctor Doom.

### Why
A complete game has too many dependencies to build effectively as one undifferentiated project. A smaller proven foundation reduces risk and gives the learning process a concrete target.

### Consequences
- Curriculum should connect learning to real project outputs.
- Doom character quality becomes an early milestone.
- Large world/roster systems move later.
- The Learning OS must distinguish learn/build/polish work.
- Old curriculum ordering can be changed when the new dependency structure is better.

## 2026-09-22 — Proposal status
User project ideas are proposals, not immutable technical rules. Codex may replace them when research or engineering demonstrates a better option, with significant changes documented.

## 2026-09-22 — Tooling
Prefer free tools/services. Do not introduce paid dependencies as silent requirements.

## 2026-09-22 — Repository
GitHub repository is the source of truth for Codex. The deployed website is the learning interface.

## 2026-09-22 — Baseline quality policy
The initial website/repository should be treated as a baseline built with a relatively weak model, not as a finished or authoritative implementation.

Codex is authorized and expected to:
- audit everything;
- improve or rewrite weak implementation;
- research stronger current approaches;
- preserve useful knowledge and user data;
- document material changes.

## 2026-09-22 — History vs current state
The repository must preserve project history, but history does not freeze decisions. When stronger research shows a better plan, the current researched state becomes the implementation target and the old state remains documented for traceability.

## 2026-09-23 — AI timing strategy
### Status
Open decision; no final build/wait choice has been made.

### Question
Would major implementation work now be wasteful if substantially stronger and/or cheaper AI coding agents become available in roughly two months?

### Options to evaluate
- Wait completely.
- Continue full development.
- Use a foundation/waiting mode focused on durable work.
- Use a milestone gate and reassess after a stable local MVP.
- Use AI now for research, specification, testing and small reversible implementation.

### Decision rule
Do not choose based on assumed future releases or prices. Compare actual current capability, pricing, limits, reliability, remaining work, rework risk and the durable value of work completed now.

### Repository action
The strategic question is documented in docs/AI_TIMING_STRATEGY.md and tracked as GitHub Issue #1. Codex should investigate it as part of major planning decisions and update this log when evidence produces a decision.
