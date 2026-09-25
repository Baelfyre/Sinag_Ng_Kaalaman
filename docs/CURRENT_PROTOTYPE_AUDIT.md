# Current Prototype Audit

## Source reviewed

This audit reflects the Open Design prototype supplied on 2026-09-26 as `SRC.zip`.

The prototype contains:

- `index.html`
- `index.html.artifact.json`
- `assets/study-buddies.png`
- Open Design frame metadata and support files

This document records the observed state of that prototype. It does not treat planned features as implemented.

## Current prototype strengths

The prototype already demonstrates several important project directions:

- four language pairs are defined:
  - English -> Tagalog
  - English -> Hiligaynon
  - Tagalog -> Hiligaynon
  - Hiligaynon -> English
- a local-first browser implementation
- self-paced practice
- an optional 90-second challenge mode
- corrective teaching after incorrect answers
- immediate reinforcement of missed words
- XP and level progression
- badges
- a progress view
- accessibility controls
- adjustable typography and spacing
- high-contrast and reduced-motion preferences
- browser read-aloud support through Speech Synthesis where available
- recurring child study-buddy artwork
- responsive, touch-friendly quiz controls

The prototype is therefore a useful visual and interaction baseline rather than a blank design exercise.

## Current implementation observations

### Working product name

The prototype currently identifies itself as **Word Quest** in the page title, header, and browser storage keys.

The canonical project name is **Sinag ng Kaalaman**.

Required reconciliation:

- update visible product naming
- rename storage namespaces during production implementation
- provide a migration path if prototype data needs to be retained

### Content state

The prototype currently contains three sample concepts:

- water / tubig / tubig
- house / bahay / balay
- dog / aso / ido

This is demonstration content only and does not yet implement the planned canonical concept schema, category model, age-level review states, or full source-provenance model.

### Session model

The prototype currently exposes:

- Self-paced practice
- 90-second challenge

The current sample session uses the complete three-word sample list.

It does not yet implement the planned activity defaults:

- Quick Practice: 5 questions
- Regular Practice: 10 questions
- Progress Check: 20 questions

It also does not yet implement the scheduled Progress Check cadence.

### Timer behavior

The current 90-second challenge timer runs across the active session rather than resetting to 90 seconds for every question.

The canonical timing behavior should be intentionally selected during implementation rather than assumed from the prototype.

Default learning must remain self-paced.

### Corrective teaching

The current prototype already provides a useful corrective flow:

- shows the learner's answer
- shows the correct answer
- displays the meaning
- explains why the correct answer fits
- offers immediate retry or continuation
- adds missed concepts to a later review queue

This aligns strongly with the project's Prime Directive and should be preserved.

### Persistence

The prototype currently uses browser `localStorage` for progress and settings.

The planned production architecture uses IndexedDB for structured learner state, while canonical educational content remains versioned JSON.

`localStorage` is acceptable for prototype validation, but it should not be treated as the final persistence decision.

### Progress data

The prototype currently tracks a limited set of learner metrics:

- XP
- sessions completed
- words answered correctly
- badges
- needs-practice words
- recent session history

It does not yet record enough structured data for the planned Parent Progress analytics.

Production progress events should support aggregation by:

- language pair
- concept
- content category
- question or activity type
- correct and incorrect attempts
- first-attempt success
- reinforcement outcomes
- mastery state
- Progress Check result
- session date or sequence

No remote analytics service is required. These summaries should be calculated locally.

### Learner profile

The prototype currently has no learner onboarding or profile name.

Required addition:

- ask for first name or preferred nickname on first use
- do not request age, birth date, full legal name, email, or account registration
- store the name locally
- allow the name to be edited
- include it in backup export and restore

### Parent Progress analytics

The prototype progress screen is learner-oriented and does not yet provide the planned parent summary.

The parent view should show at minimum:

- strongest language pair
- language pair needing the most support
- strengths by content category
- categories needing practice
- individual concepts repeatedly missed
- mastery distribution
- recent practice frequency
- Progress Check trend over time

Analytics must be descriptive and transparent. They should not use hidden behavioral profiling, advertising telemetry, or external tracking.

### Progress export and restore

The prototype does not currently implement backup export or restore.

This remains required because progress is local-first.

### Pause and active-session recovery

The prototype does not currently expose the planned Pause Session control.

Production implementation should preserve an unfinished session so the child can pause or safely leave and resume later.

### Character assets

The current visual asset is:

`assets/study-buddies.png`

It is a 2D PNG illustration containing the recurring child learning companions.

The source illustration should be retained as the canonical visual reference while 3D versions are developed.

## 3D character direction

The project now intends to 3Dify the recurring child study-buddy characters.

The recommended boundary is:

1. preserve the approved 2D art as the design reference
2. create simplified, web-optimized 3D equivalents
3. use a rendering adapter so 2D and 3D presentation are interchangeable
4. lazy-load 3D code and assets
5. fall back to 2D when WebGL is unavailable, performance is poor, or reduced motion is enabled
6. use character movement primarily for greetings, encouragement, feedback, and celebrations
7. avoid continuous movement while the learner is reading a question or explanation

`img2threejs/img2threejs` may be evaluated as a production aid because it reconstructs reference images into procedural Three.js models. It must remain an optional tool, not a hard dependency of the learning engine.

## Recommended next bounded work

The current prototype is sufficient to stop broad visual ideation and proceed with reconciliation.

Next work should focus on:

1. canonical branding as Sinag ng Kaalaman
2. first-name or nickname onboarding
3. canonical content schema and first reviewed content set
4. 5 / 10 / 20 question activity model
5. structured local progress events that can support Parent Progress analytics
6. scheduled Progress Checks
7. pause and active-session recovery
8. backup export and restore
9. production persistence decision and migration from prototype `localStorage`
10. 3D study-buddy proof of concept with a mandatory 2D fallback

The prototype should remain a reference until these gaps are reconciled. Planned features should not be described as already implemented.
