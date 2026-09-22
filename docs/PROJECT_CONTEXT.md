# Project Context

## Current strategic direction

The Doctor Doom project is being built from the character foundation outward.

The immediate focus is a high-quality playable Doom foundation rather than a complete game/world/roster.

## Current priorities
1. Character asset pipeline
2. Skeleton/rig
3. Movement and animation
4. Camera
5. Input
6. Combat foundation
7. Powers/VFX
8. Audio/feedback
9. Cinematics/facial pipeline
10. Broader world/AI/UI/save/optimization systems as dependencies justify

## Core constraints
- Free tools/services wherever practical.
- Paid tools must not become hidden requirements.
- Current Unreal baseline: 5.8.
- Current Blender baseline: 4.5 LTS.
- Blueprints are preferred for appropriate gameplay learning and rapid iteration.
- C++ is introduced only when useful.
- The repository is the source of truth for Codex.
- User ideas are proposals that Codex may challenge after research.

## Game direction
- Single-player
- Story-driven
- Comic-inspired action
- Doctor Doom as first main playable character
- Third-person default
- Real first-person mode is a desired feature when technically justified
- Strong emphasis on combat, animation, powers, camera and feedback
- Avoid repetitive content
- Modular/reusable architecture

## Character pipeline direction
Use validated references and a test-first 3D pipeline:
reference -> blockout -> model -> UV/material -> rig -> skin -> test animation -> export -> Unreal -> retarget/IK -> gameplay -> iteration.

Armor may be modular where it provides a real production benefit. Do not over-fragment the asset.

## Voice / facial direction
Unmasked Victor scenes may require facial animation and precise lip-sync timing. Recorded voice timing should remain the reference timing for the final facial solution.

## Asset and licensing policy
"Free to download" does not automatically mean "free to ship." Every production asset needs current license/terms verification.

## Decision status
This document describes the current direction. Detailed tradeoffs and changes belong in `docs/DECISION_LOG.md` and `docs/RESEARCH_LOG.md`.
