# Game Design Proposals

These are current proposals for the Doctor Doom project. They are not immutable requirements.

## Character
- One primary playable character initially: Doctor Doom.
- Armor is visually iconic and may be split into logical components when useful.
- Cape/cloak may be a separate asset/system.
- Masked and unmasked presentation should be supported.
- The character should be designed for both gameplay and cinematics.

## Camera
- Third-person is the default.
- Player can rotate/control the camera.
- A genuine first-person mode is desired.
- First-person should account for hands/body/head/look relationships and should not be treated as a superficial camera trick.

## Movement
- Idle
- Walk
- Jog/run
- Sprint
- Jump
- Start/stop
- Acceleration/deceleration
- Turning
- Character-specific weight/feel

## Input
Use action-based input rather than direct hardcoded keys.

The architecture should remain suitable for:
- keyboard/mouse
- controller
- future Xbox-oriented testing

## Combat
Start with one complete attack loop before expanding the move set.

Separate:
- input
- state
- animation
- hit detection
- damage
- VFX
- audio
- camera feedback

## Powers
The exact initial power set is intentionally open. Base choices on:
- researched Doom material
- gameplay value
- animation feasibility
- VFX quality
- technical cost

## Cinematics
Cinematics should share character assets/animation infrastructure with gameplay where practical.

## Facial animation
Precise timing matters more than a superficial "talking" effect.

## World
Begin with a small test environment sufficient to prove the systems. Do not build a giant world before the foundation is proven.

## Enemies
Start with one understandable enemy archetype once combat is established. Expand only after the combat loop is stable.

## Story
Comic inspiration is expected, but canon details must be researched. Candidate comic sources are not automatically fixed.

## Overall design rule
Every proposal is replaceable when research, usability, performance, licensing or technical architecture indicates a better direction.
