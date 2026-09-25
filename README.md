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

## Documentation

- [Project Ideation](docs/PROJECT_IDEATION.md)
- [Initial Architecture](docs/ARCHITECTURE.md)
- [Build and Project Guidelines](docs/BUILD_GUIDELINES.md)
- [Prime Directive](docs/PRIME_DIRECTIVE.md)

## Current phase

**Phase 0: Ideation, content planning, and design initialization.**

Implementation technology beyond the local-first browser architecture is intentionally not locked yet. The interface will first be initialized and explored through Open Design, then the implementation stack can be selected based on the resulting component and interaction requirements.

## External reference projects under evaluation

- `jjjardev/hilisenti` for Hiligaynon linguistic reference and corpus research. Its dataset is currently published under CC BY-NC-SA 4.0, while its code is MIT licensed. Dataset material must not be treated as unrestricted commercial content.
- `img2threejs/img2threejs` as a possible future visual or procedural 3D tooling reference. It is currently Apache-2.0 licensed.

External sources are references or optional inputs only. Sinag ng Kaalaman must maintain its own curated, provenance-aware canonical learning content.
