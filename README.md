<p align="center">
  <img src="assets/branding/sinag-ng-kaalaman-logo.webp" width="300" alt="Sinag ng Kaalaman logo">
</p>

# Sinag ng Kaalaman

**Filipino-English Language Journey**  
**Grade School Level**

**Sinag ng Kaalaman** is a local-first, browser-based multilingual learning app designed to help grade-school learners build Filipino, English, and Hiligaynon vocabulary, comprehension, spelling, and language confidence through context, supportive correction, repetition, and age-appropriate gamification.

The project is built around a simple principle: children should understand *why* an answer is correct, not just whether it is correct.

## Learning scope

Initial language combinations:

- English -> Tagalog
- English -> Hiligaynon
- Tagalog -> Hiligaynon
- Hiligaynon -> English

Hiligaynon is treated as a language in its own right, not as a dialect label.

## Core learning loop

1. Choose a language pair and activity.
2. Answer contextual vocabulary, comprehension, translation, or spelling questions.
3. Receive immediate feedback.
4. If an answer is incorrect, explain the selected answer, reveal the correct answer, and explain why it fits.
5. Reintroduce difficult concepts later for reinforcement.
6. Track mastery, spelling performance, XP, levels, badges, and Periodic Progress Checks.
7. Surface strengths and learning gaps to the parent or guardian through local progress analytics.

The default experience is self-paced:

`Question -> Answer -> Explanation -> Next`

Challenge Mode with an optional 90-second timer is available as a secondary activity and does not penalize mistakes.

## Open Design UI semantics

The current Open Design wording is the preferred learner-facing vocabulary for implementation.

Primary navigation:

- Home
- Practice
- Progress
- Rewards
- Parent Progress
- Settings

Practice exercise styles:

- Mixed Practice (All Types)
- Multiple Choice
- Spelling Studio
- Comprehension

Session modes:

- Normal Practice
- Quick Practice
- Periodic Progress Check
- Challenge Mode (Optional 90-second timer)

See [`docs/UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md`](docs/UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md) for the canonical UI wording, reward display names, status labels, and Material Symbols mapping.

## Exercise direction

Initial exercise families include:

- contextual multiple choice
- meaning matching
- translation and reverse translation
- sentence comprehension
- synonyms and antonyms
- partial-word spelling
- full-word spelling
- missing-syllable spelling
- syllable ordering

### Spelling and syllable learning

For Tagalog and Hiligaynon spelling activities, words should be presented by syllable when practical.

Example:

`MAG | LA | KAD`

A missing-syllable activity may appear as:

`MAG | __ | KAD`

This supports pronunciation, word structure, recall, and spelling rather than isolated letter guessing.

Spelling should distinguish between:

- correct concept and correct spelling
- correct concept but misspelled
- incorrect concept

### Spelling input validation

Spelling fields should accept alphabetic characters only.

Validation rules:

- allow letters appropriate to the target language
- ignore uppercase/lowercase differences during answer checking
- trim leading and trailing spaces
- reject numbers, emoji, and unrelated symbols
- do not silently autocorrect learner answers
- allow internal spaces only when the canonical answer intentionally contains more than one word

Implementation should use Unicode-aware letter validation rather than English-only `A-Z` checks.

## Learner profile

The app collects only the minimum identity needed for personalization.

- Ask for the child's first name or preferred nickname.
- Do not require age, birth date, full legal name, email address, or account registration.
- Store the name locally with learner progress.
- Allow the name to be edited later.
- Include the name in exported progress backups.

Learner-facing copy uses **Grade School Level** rather than a fixed Grade 4 & 5 label.

## Session models

Default session lengths:

| Activity | Questions |
| --- | ---: |
| Quick Practice | 5 |
| Normal Practice | 10 |
| Periodic Progress Check | 20 |

A proposed cadence is:

- 4 Normal Practice sessions
- then 1 Periodic Progress Check

Periodic Progress Checks are intended to measure retention, not speed.

## Mastery model

Initial mastery states:

- New
- Learning
- Familiar
- Mastered

The first implementation should use deterministic rules rather than machine learning.

## Parent Progress

A parent or guardian should be able to review learning progress without sending learner data to a remote analytics service.

The local Parent Progress view should summarize:

- overall accuracy
- performance by language pair
- performance by concept category
- vocabulary understanding
- spelling accuracy
- frequently misspelled words
- words understood but frequently misspelled
- concepts needing more practice
- strongest concepts and categories
- mastery distribution
- reinforcement success
- recent session history
- Periodic Progress Check history and improvement over time

Analytics are descriptive educational summaries. The app should not infer intelligence, personality, diagnosis, or capability from quiz performance.

### Share Progress

Parent Progress may offer an optional **Share Progress** action for parents or guardians who want to celebrate a learner milestone on Facebook.

Sharing rules:

- sharing must be initiated explicitly by the parent or guardian
- never share automatically
- do not expose detailed attempt history
- do not include sensitive personal information
- prefer a simple milestone or progress summary card
- allow the parent or guardian to review the share content before opening Facebook
- sharing must not affect XP, badges, streaks, or learner progress
- the app must remain fully usable without social sharing

The intent is to let families celebrate learning progress while also helping others discover Sinag ng Kaalaman naturally.

## Rewards & Milestones

Gamification supports learning but must never replace it.

Initial mechanics include:

- XP
- levels
- badges
- practice streaks
- progress bars
- achievement milestones
- study-buddy reactions
- celebration effects

The Open Design reward surface uses these learner-facing summary terms:

- Badges Earned
- In Progress
- Total Sunshine Points
- Learner Rank

Badge states are:

- Earned
- In Progress
- Locked

Reward categories are:

- Getting Started
- Practice & Consistency
- Language Exploration
- Vocabulary & Mastery
- Spelling & Recall
- Progress & Milestones

Stable achievement IDs should be used for implementation. Current display names and taglines are defined in [`docs/UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md`](docs/UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md), allowing artwork filenames to be reconciled without coupling domain rules to a temporary title.

Mistakes should never remove XP.

## Celebration effects

The app may use lightweight celebratory feedback such as:

- sparkles
- glitter
- banners
- ribbons
- confetti
- badge reveals
- XP animations
- study-buddy reactions

Celebration intensity should match the importance of the event:

- small sparkle or glow for ordinary correct answers
- short confetti or banner feedback for session completion
- stronger celebration for badge unlocks, level-ups, mastery milestones, major spelling milestones, or significant Periodic Progress Check improvement

Celebrations must not:

- cover lesson content
- block buttons or navigation
- run continuously
- flash or strobe
- become required to understand a result

Reduced-motion mode must replace unnecessary movement with calmer visual feedback.

See [`docs/CELEBRATION_EFFECTS.md`](docs/CELEBRATION_EFFECTS.md).

## Sound effects

Sound effects are optional presentation feedback.

Possible semantic events include:

- answer selected
- correct answer
- gentle incorrect answer
- spelling correct
- spelling near miss
- explanation revealed
- next question
- pause / resume
- XP gained
- badge unlocked
- level up
- Periodic Progress Check complete

Sound requirements:

- Sound Effects On / Off
- adjustable SFX volume
- read-aloud controls remain separate
- no sound is required to understand app state
- muted mode preserves the complete learning experience
- celebration audio must not interfere with read-aloud speech

## Study-buddy characters

Recurring school-age child characters are part of the visual identity.

The current 2D study-buddy art remains the canonical presentation for the current phase.

Future 3D versions may be explored using Three.js and `img2threejs/img2threejs`, but 3D is deferred until the core frontend, learning engine, persistence, and content systems are stable.

3D presentation must remain a progressive enhancement:

- 2D fallback remains available
- 3D must not block lessons
- 3D assets should load lazily
- reduced-motion preferences must be respected
- animation should not compete with reading or typing
- WebGL failure must not prevent learning

## Branding

The canonical logo is stored under [`assets/branding/`](assets/branding/).

Current brand direction:

- **Project:** Sinag ng Kaalaman
- **Journey label:** Filipino-English Language Journey
- **Level label:** Grade School Level

The active logo uses a transparent WebP background with a thin white outline around the main artwork so it remains readable across different UI surfaces.

The logo visual language uses:

- sun / rays for knowledge and discovery
- open book for education
- sprout for growth
- blue for clarity and learning
- yellow / orange for warmth and illumination
- green for growth and progress

Do not place the logo inside a white rectangular background.

## Icon system

Normal application actions and semantic UI states should use **Material Symbols Rounded** through a shared icon layer.

The current Open Design inline SVG registry is a prototype implementation detail and should not be copied into production feature components.

Dedicated platform identities remain separate brand assets for:

- GitHub
- LinkedIn
- Facebook
- Buy Me a Coffee

Approved badge artwork should be used for individual achievements. Material Symbols remain appropriate for category headers, filters, status chips, actions, and fallbacks.

See [`docs/UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md`](docs/UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md) for the exact mapping.

## Developer & Project Support

Sinag ng Kaalaman includes a secondary adult-facing section for project information, developer links, and optional support.

### About the Developer

> I build things, break things, figure out why they broke, then build them again slightly better.
>
> Usually somewhere between curiosity, overengineering, questionable ideas, and “wait... what if we tried this?”
>
> Mostly experimenting, learning, solving problems, and occasionally turning random thoughts into something that actually works.
>
> Still building. Still learning. Still causing controlled chaos.

Developer links:

- GitHub: https://github.com/Baelfyre
- LinkedIn: https://www.linkedin.com/in/ongojames/
- Facebook: https://www.facebook.com/Baelf1re

The app UI should use each platform's recognizable dedicated logo together with a readable text label.

### Support Development

If you find Sinag ng Kaalaman helpful for you and your child, feel free to support its continued development. Support can help improve the app, expand learning content, strengthen accessibility, and make it possible to build more practical educational tools for kids.

Buy Me a Coffee:

https://buymeacoffee.com/baelfyre

### Zero Feature Paywalls

**We do not lock app features behind donations. No educational content is ever gated.**

Sinag ng Kaalaman is built on the belief that education should be free and accessible to everyone.

Support is always optional and is never connected to XP, badges, streaks, levels, educational advantages, or access to learning content.

## Accessibility

Accessibility is a first-class requirement.

Initial controls include:

- child-friendly font profile
- standard font profile
- hyperlegible profile
- dyslexia-friendly profile
- optional handwriting / script profile
- text size
- line spacing
- letter spacing
- word spacing
- high contrast
- reduced motion
- read question aloud
- read answer choices aloud

Script or handwriting fonts should never be the default quiz font.

No state should be communicated through color alone.

## Progress portability

Because the app is local-first, learner progress must be recoverable.

The Open Design feature is presented as **Progress Portability & Data Control** in Settings and **Data & Progress Portability** in Parent Progress.

Primary actions are:

- Export Progress
- Import Progress
- Reset Progress

The UI may use the more explicit button labels **Export Progress Backup** and **Import Progress Backup**.

Export format:

- versioned JSON

Import requirements:

- validate file structure
- validate schema version
- reject malformed or unsupported backups
- show a backup summary before replacing current progress
- require explicit confirmation before replacing current progress

A confirmation dialog may explain that importing will restore or replace current browser progress, but **Import Progress** remains the primary feature label.

Reset or overwrite operations must also require confirmation.

## Product boundaries

- browser-based
- responsive
- device-neutral
- local-first
- no account required for the MVP
- no cloud backend required for learner progress
- no advertising
- no third-party behavioral analytics
- no remote AI dependency required for core learning
- no feature paywalls
- no paid educational advantage
- no loot-box or gambling-like reward mechanics

The app should support touch, mouse, and keyboard interaction where appropriate.

## Content and dataset foundation

Canonical learning content is stored as versioned, provenance-aware data.

Source collection is maintained under [`data/`](data/).

- [`data/source_registry.json`](data/source_registry.json) is the machine-readable source registry.
- [`docs/DATASET_AND_CONTENT_SOURCES.md`](docs/DATASET_AND_CONTENT_SOURCES.md) defines intake and validation policy.
- External corpora are not automatically canonical learning content.
- Age suitability, language correctness, licensing, and provenance must be reviewed before material enters the production question bank.

Initial content target:

- approximately 100 canonical concepts
- child-relevant categories such as family, school, home, food, animals, colors, numbers, actions, emotions, and character traits

Each canonical concept should map language-neutral meaning to English, Tagalog, and Hiligaynon representations rather than assuming simplistic one-to-one translation.

## Content source boundaries

Sources under evaluation include:

- DepEd learning materials for curriculum and age-alignment reference
- Princeton WordNet for English lexical structure
- Tatoeba for multilingual sentence-pattern research
- `jjjardev/hilisenti` for Hiligaynon contextual research
- `jhellingman/phildict` for historical Philippine-language dictionary material
- selected Project Gutenberg historical references

External sources remain references or optional inputs until licensing, provenance, language correctness, and age suitability are reviewed.

## Current development phase

The Open Design frontend now serves as the primary visual and interaction handoff reference.

Current direction:

1. audit and preserve the preferred Open Design wording and interaction semantics
2. replace prototype inline SVG icons with the documented Material Symbols Rounded layer
3. reconcile badge artwork with stable achievement IDs and current display names
4. wire the design to the production learning engine
5. move structured learner state from prototype storage to the production local persistence layer
6. connect local analytics, audio events, celebration events, rewards, and progress portability
7. synchronize implementation with the repository
8. defer 3D study-buddy reconstruction to the next development phase

The current 2D experience remains the production fallback even after future 3D experimentation.

## Documentation

- [Project Ideation](docs/PROJECT_IDEATION.md)
- [Initial Architecture](docs/ARCHITECTURE.md)
- [Build and Project Guidelines](docs/BUILD_GUIDELINES.md)
- [Prime Directive](docs/PRIME_DIRECTIVE.md)
- [Current Prototype Audit](docs/CURRENT_PROTOTYPE_AUDIT.md)
- [Dataset and Content Sources](docs/DATASET_AND_CONTENT_SOURCES.md)
- [Celebration Effects](docs/CELEBRATION_EFFECTS.md)
- [UI Semantics and Material Symbols](docs/UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md)

## MVP success condition

The MVP is successful if a learner can:

1. Open the app without creating an account.
2. Enter a first name or preferred nickname.
3. Select one of the initial language pairs.
4. Complete a self-paced Normal Practice session.
5. Practice vocabulary, comprehension, translation, and spelling.
6. Receive useful corrective explanations after mistakes.
7. Build and retain local mastery progress.
8. Complete Periodic Progress Checks.
9. Adjust accessibility and reading preferences.
10. Export and import learner progress safely.
11. Earn meaningful learning rewards without feature paywalls.
12. Have a parent or guardian review local strengths and learning gaps.
13. Continue learning without sound, animation, social sharing, or future 3D features.

Everything beyond that remains secondary until the core learning loop is validated.

## License

Sinag ng Kaalaman is **source-available for noncommercial use**. Because commercial use is restricted, the project should not be described as OSI-approved open source.

Licensing is split by material type:

- **Software code:** PolyForm Noncommercial License 1.0.0
- **Original educational content, documentation, and project artwork:** CC BY-NC-SA 4.0
- **Third-party software, datasets, corpora, references, icons, fonts, and other external works:** their original licenses and terms

See:

- [`LICENSE`](LICENSE)
- [`LICENSES/SOFTWARE.md`](LICENSES/SOFTWARE.md)
- [`LICENSES/CONTENT.md`](LICENSES/CONTENT.md)
- [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)
- [`data/source_registry.json`](data/source_registry.json)

The HiliSenti v1 dataset remains a noncommercial third-party reference under CC BY-NC-SA 4.0; its repository code is MIT licensed. Separate commercial permission for original Sinag material cannot override third-party restrictions.
