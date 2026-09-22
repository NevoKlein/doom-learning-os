# Product Requirements — DOOM Learning OS

## Goal
Turn the learning website into a professional Learning OS for the Doctor Doom game-development project.

It should help the project owner know what to learn next, what to build next, prerequisites, progress, notes, decisions, verified resources and the active milestone.

## Layers
- Learning: curriculum, resources, prerequisites, outcomes, tasks, exit criteria, troubleshooting and glossary.
- Project: milestones, systems, implementation tasks, prototypes, decisions, blockers and build status.
- Progress: account-backed task completion, notes, study sessions, milestone progress and backups.
- Research: resource verification, versions, licensing, findings and change history.
- Collaboration: optional shared workspaces, read-only public views and role-based access.

## Source of truth
Canonical curriculum, resources, project strategy, research and technical decisions remain version-controlled in GitHub. User-specific state belongs in the database. Avoid competing sources of truth for the same content.

## Target experience
On return, the dashboard should show current milestone, current phase, one best next action, incomplete prerequisites, estimated remaining work and recent notes/decisions.

Distinguish LEARN / BUILD / TEST / POLISH / DOCUMENT.

## Accounts and sync
Public curriculum should not require login. Account-backed sync should cover progress, notes and project state when multi-device use is needed.

## Collaboration
Design for future personal workspaces, shared project workspaces, read-only public project views and editor/viewer roles. Add complexity only when useful.

## Quality
Responsive, accessible, fast, secure, maintainable, dependency-conscious and easy to extend.