<p align="center">
  <img src="assets/branding/sinag-ng-kaalaman-logo.webp" width="300" alt="Sinag ng Kaalaman logo">
</p>

# Sinag ng Kaalaman

**Sinag ng Kaalaman** is a local-first, browser-based multilingual learning app for Grade 4 to Grade 5 learners, approximately ages 9 to 10.

The project is intended for children who are more comfortable in English and need structured practice understanding Filipino and Hiligaynon vocabulary through context, explanation, repetition, spelling, and age-appropriate gamification.

## Initial learning pairs

- English -> Tagalog
- English -> Hiligaynon
- Tagalog -> Hiligaynon
- Hiligaynon -> English

## Core learning loop

1. Choose a language pair and activity.
2. Answer contextual vocabulary, comprehension, translation, or spelling questions.
3. Receive immediate feedback.
4. If an answer is incorrect, teach the correct answer and explain why it fits.
5. Reintroduce difficult concepts later for reinforcement.
6. Track mastery, spelling performance, XP, levels, badges, and periodic Progress Checks.
7. Surface strengths and learning gaps to the parent or guardian through local progress analytics.

## Exercise direction

Initial exercise families include:

- contextual multiple choice
- meaning matching
- translation / reverse translation
- sentence comprehension
- synonyms and antonyms
- partial-word spelling
- full-word spelling

Spelling should distinguish between a wrong concept and a correctly understood concept that was misspelled.

## Learner profile

The MVP only needs enough identity to personalize the experience.

- Ask for the child's first name or preferred nickname on first use.
- Do not require age, birth date, full legal name, email address, or account registration.
- Store the name locally with the learner's progress.
- Include the name in export and import so a recovered profile remains recognizable.

The app is already designed for the Grade 4 to Grade 5 age range, so collecting age is unnecessary for the initial product.

## Parent progress analytics

A parent or guardian should be able to review learning progress without sending learner data to a remote analytics service.

The local Parent Progress view should summarize:

- performance by language pair
- performance by concept category
- vocabulary understanding
- spelling accuracy and frequently misspelled words
- concepts and words that need more practice
- concepts and categories where the learner is strongest
- mastery distribution
- recent session history
- Progress Check results and improvement over time

These analytics are educational summaries derived from local learner activity, not behavioral tracking or advertising telemetry.

## Initial product boundaries

- Browser-based, responsive, and device-neutral.
- Local-first.
- No account or cloud backend required for the MVP.
- Canonical learning content stored as versioned JSON.
- Learner progress stored locally in the browser.
- Progress supports both Export Progress and Import Progress.
- Import validates the backup and requires confirmation before replacing current progress.
- Normal activities are self-paced.
- Timed challenge mode is optional.
- Accessibility is a first-class requirement.
- Content accuracy and age suitability take priority over content volume.
- Only the learner's first name or nickname is required for personalization.
- Parent analytics remain local to the browser profile and exported backup.

## Celebration effects

The app may use lightweight celebratory feedback such as sparkles, glitter, banners, ribbons, confetti, badge reveals, XP animations, and study-buddy reactions.

Celebration intensity should match the importance of the event:

- small sparkle or glow for ordinary correct answers
- short confetti or banner feedback for session completion
- stronger confetti, badge reveals, or character celebrations for meaningful milestones such as level-ups, badge unlocks, mastery milestones, or major Progress Check improvement

Celebrations must not cover lesson content, block navigation, or become continuous background effects. Reduced-motion mode must replace unnecessary particle movement with calmer visual feedback.

See [`docs/CELEBRATION_EFFECTS.md`](docs/CELEBRATION_EFFECTS.md) for the canonical effect hierarchy and accessibility rules.

## Character presentation

Recurring school-age study-buddy characters are part of the visual identity.

The current 2D character art should be treated as the source design for later 3D versions. The project may use Three.js and evaluate `img2threejs/img2threejs` as part of the 3D production workflow.

3D presentation must remain a progressive enhancement:

- learning must still work when WebGL or 3D assets are unavailable
- 2D fallbacks must remain available
- 3D assets should load lazily and must not block quiz interaction
- reduced-motion preferences must be respected
- character animation must not compete with reading or feedback

## Branding

The current project logo is stored under [`assets/branding/`](assets/branding/). Its visual language uses light, an open book, and a growing sprout to represent discovery, learning, and growth.

## Content and dataset foundation

Source collection has started under [`data/`](data/) and is governed by provenance and licensing review.

- [`data/source_registry.json`](data/source_registry.json) is the machine-readable source registry.
- [`docs/DATASET_AND_CONTENT_SOURCES.md`](docs/DATASET_AND_CONTENT_SOURCES.md) explains the intake and validation policy.
- External corpora are not automatically canonical learning content.
- Age suitability, language correctness, licensing, and provenance must be reviewed before material enters the production question bank.

## Documentation

- [Project Ideation](docs/PROJECT_IDEATION.md)
- [Initial Architecture](docs/ARCHITECTURE.md)
- [Build and Project Guidelines](docs/BUILD_GUIDELINES.md)
- [Prime Directive](docs/PRIME_DIRECTIVE.md)
- [Current Prototype Audit](docs/CURRENT_PROTOTYPE_AUDIT.md)
- [Dataset and Content Sources](docs/DATASET_AND_CONTENT_SOURCES.md)
- [Celebration Effects](docs/CELEBRATION_EFFECTS.md)

## Current phase

**Phase 0 to Phase 1: design prototype reconciliation and content foundation.**

An Open Design prototype now exists and demonstrates the main interaction direction. The current implementation is still a prototype and must be reconciled with the canonical project requirements before it is treated as the production architecture.

The next bounded work is content intake, canonical concept schema validation, reviewed question samples, learner-profile onboarding, local analytics, progress export/import, and the stable learning-session model.

## External reference projects under evaluation

- `jjjardev/hilisenti` for Hiligaynon linguistic reference and corpus research. Its dataset is published under CC BY-NC-SA 4.0, while its code is MIT licensed. Dataset material must not be treated as unrestricted commercial content.
- `jhellingman/phildict` for historical Philippine-language dictionary material. The repository does not declare a top-level license, so underlying works and processed files must be reviewed individually before reuse.
- `img2threejs/img2threejs` as a possible procedural 3D tooling reference for study-buddy characters and reward presentation.

External sources are references or optional inputs only. Sinag ng Kaalaman must maintain its own curated, provenance-aware canonical learning content.
