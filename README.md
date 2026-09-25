# Sinag ng Kaalaman

**Sinag ng Kaalaman** is a local-first, browser-based multilingual learning app for Grade 4 to Grade 5 learners, approximately ages 9 to 10.

The project is intended for children who are more comfortable in English and need structured practice understanding Filipino and Hiligaynon vocabulary through context, explanation, repetition, and age-appropriate gamification.

## Initial learning pairs

- English -> Tagalog
- English -> Hiligaynon
- Tagalog -> Hiligaynon
- Hiligaynon -> English

## Core learning loop

1. Choose a language pair and activity.
2. Answer contextual vocabulary or comprehension questions.
3. Receive immediate feedback.
4. If an answer is incorrect, teach the correct answer and explain why it fits.
5. Reintroduce difficult concepts later for reinforcement.
6. Track mastery, XP, levels, badges, and periodic progress checks.
7. Surface strengths and learning gaps to the parent or guardian through local progress analytics.

## Learner profile

The MVP only needs enough identity to personalize the experience.

- Ask for the child's first name or preferred nickname on first use.
- Do not require age, birth date, full legal name, email address, or account registration.
- Store the name locally with the learner's progress.
- Include the name in export and restore so a recovered profile remains recognizable.

The app is already designed for the Grade 4 to Grade 5 age range, so collecting age is unnecessary for the initial product.

## Parent progress analytics

A parent or guardian should be able to review learning progress without sending learner data to a remote analytics service.

The local Parent Progress view should summarize:

- performance by language pair
- performance by concept category
- concepts and words that need more practice
- concepts and categories where the learner is strongest
- mastery distribution
- recent session history
- Progress Check results and improvement over time

These analytics are educational summaries derived from local learner activity, not behavioral tracking or advertising telemetry.

## Initial product boundaries

- Browser-based and local-first.
- No account or cloud backend required for the MVP.
- Canonical learning content stored as versioned JSON.
- Learner progress stored locally in the browser.
- Progress can be exported and restored from a backup file.
- Normal activities are self-paced.
- Timed challenge mode is optional.
- Accessibility is a first-class requirement.
- Content accuracy and age suitability take priority over content volume.
- Only the learner's first name or nickname is required for personalization.
- Parent analytics remain local to the device and exported backup.

## Character presentation

Recurring school-age study-buddy characters are part of the visual identity.

The current 2D character art should be treated as the source design for later 3D versions. The project may use Three.js and evaluate `img2threejs/img2threejs` as part of the 3D production workflow.

3D presentation must remain a progressive enhancement:

- learning must still work when WebGL or 3D assets are unavailable
- 2D fallbacks must remain available
- 3D assets should load lazily and must not block quiz interaction
- reduced-motion preferences must be respected
- character animation must not compete with reading or feedback

## Documentation

- [Project Ideation](docs/PROJECT_IDEATION.md)
- [Initial Architecture](docs/ARCHITECTURE.md)
- [Build and Project Guidelines](docs/BUILD_GUIDELINES.md)
- [Prime Directive](docs/PRIME_DIRECTIVE.md)
- [Current Prototype Audit](docs/CURRENT_PROTOTYPE_AUDIT.md)

## Current phase

**Phase 0 to Phase 1: design prototype reconciliation and content foundation.**

An Open Design prototype now exists and demonstrates the main interaction direction. The current implementation is still a prototype and must be reconciled with the canonical project requirements before it is treated as the production architecture.

The next bounded work remains content foundation, learner-profile onboarding, parent analytics data requirements, progress export and restore, and the stable learning-session model.

## External reference projects under evaluation

- `jjjardev/hilisenti` for Hiligaynon linguistic reference and corpus research. Its dataset is currently published under CC BY-NC-SA 4.0, while its code is MIT licensed. Dataset material must not be treated as unrestricted commercial content.
- `img2threejs/img2threejs` as a possible procedural 3D tooling reference for the study-buddy characters and reward presentation. It is currently Apache-2.0 licensed.

External sources are references or optional inputs only. Sinag ng Kaalaman must maintain its own curated, provenance-aware canonical learning content.
