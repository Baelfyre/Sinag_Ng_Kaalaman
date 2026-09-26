# Build and Project Guidelines

## Purpose

These guidelines define how Sinag ng Kaalaman should be designed, built, reviewed, and expanded.

The project should remain understandable, local-first, accessible, and focused on learning outcomes rather than feature count.

For learner-facing wording, reward names, and icon semantics, [`UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md`](UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md) is the current canonical handoff reference.

## Development principles

### 1. Keep the architecture simple

Prefer the smallest implementation that satisfies the actual learning requirement.

Do not introduce:

- cloud services without a demonstrated need
- a remote database for local learner progress
- account systems for the MVP
- unnecessary microservices
- runtime AI where reviewed deterministic content is sufficient
- heavy dependencies for minor UI behavior

### 2. Content before complexity

The initial priority is:

1. define the content model
2. build a reviewed concept set
3. validate question quality
4. establish the learning loop
5. reconcile the Open Design handoff with production architecture
6. implement the local learning and progress model
7. add parent reporting, gamification, and polish
8. add 3D character presentation only after a lightweight proof of concept passes performance and accessibility checks

A polished interface with weak educational content is not a successful milestone.

### 3. Build around concepts, not isolated translations

Content should be organized around canonical concepts with language-specific representations.

Do not assume every English, Tagalog, or Hiligaynon word has an exact one-to-one equivalent.

When a translation is uncertain or context-dependent, mark it for review rather than forcing a false equivalence.

### 4. Wrong answers must teach

Incorrect answers must never become dead ends.

The application should explain:

- what the learner selected
- what the selected answer means
- what the correct answer is
- what the correct answer means
- why the correct answer fits better

Difficult concepts should be reintroduced later using a different question or sentence when practical.

Avoid punitive learner-facing wording such as `WRONG` or `FAILED`.

### 5. Self-paced by default

Normal Practice is self-paced.

The learner explicitly continues after reading feedback.

Challenge Mode is optional and may use the Open Design label **Challenge Mode (Optional 90-second timer)**. Timed practice must not impose XP loss, letter grades, or punitive consequences.

### 6. Use Open Design wording consistently

Preferred learner-facing exercise labels:

- Mixed Practice (All Types)
- Multiple Choice
- Spelling Studio
- Comprehension

Preferred session labels:

- Quick Practice
- Normal Practice
- Periodic Progress Check
- Challenge Mode (Optional 90-second timer)

Do not reintroduce `Regular Practice` as the main learner-facing label.

Internal identifiers may remain technical and stable even when display copy changes.

### 7. Gamification supports learning

XP, levels, badges, streaks, and celebrations should reinforce practice and mastery.

Do not:

- punish mistakes by removing XP
- create random paid rewards
- use loot-box mechanics
- pressure the learner to continue indefinitely
- design streaks so aggressively that missing a day feels like failure

Use stable achievement IDs for implementation. Display names, taglines, categories, and status terms are defined in the UI semantics document.

### 8. Accessibility is not optional

Every major interface should support:

- readable font choices
- scalable text
- adjustable spacing
- adequate contrast
- keyboard operation where applicable
- large touch targets
- reduced motion
- screen-reader-friendly labels
- read-aloud support where implemented

No state should be communicated through color alone.

### 9. Responsive and device-neutral

The production app is browser-based, responsive, and device-neutral.

Do not design the architecture around a tablet-only or tablet-first assumption.

Representative mobile, tablet, laptop, and desktop widths should preserve the same learning model.

Quiz screens should minimize unnecessary scrolling, preserve readable text, and retain large answer controls.

### 10. Collect only the identity the app needs

The MVP may ask for the learner's first name or preferred nickname.

Do not require age, birth date, full legal name, email address, or account registration.

The name must remain local, editable, and included in progress export/import.

Learner-facing level wording is **Grade School Level**. Historical or curriculum notes may still mention the original Grade 4 to Grade 5 target when relevant.

### 11. Parent analytics must remain local and educational

Parent Progress analytics should be calculated from local learner activity.

Do not add third-party behavioral analytics or remote telemetry to implement the parent dashboard.

Analytics should report observed outcomes such as:

- language-pair performance
- category performance
- mastery
- recurring errors
- strengths
- reinforcement success
- Periodic Progress Check trends

Do not infer intelligence, personality, capability, diagnosis, or other personal traits from quiz results.

## Icon and visual semantics

### Material Symbols Rounded

Use **Material Symbols Rounded** for normal application actions and semantic UI states.

Do not copy the Open Design inline SVG registry into production feature components.

Use a shared icon component/helper so that icon rendering is centralized.

Examples:

- Home -> `home`
- Practice -> `menu_book`
- Progress -> `monitoring`
- Settings -> `settings`
- Mixed Practice -> `auto_awesome`
- Spelling Studio -> `spellcheck`
- Comprehension -> `lightbulb`
- Export Progress -> `download`
- Import Progress -> `upload_file`
- Reset Progress -> `restart_alt`

The complete mapping is maintained in [`UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md`](UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md).

### Brand-logo exception

Use dedicated recognizable logos for:

- GitHub
- LinkedIn
- Facebook
- Buy Me a Coffee

Do not substitute Material Symbols for platform identity marks.

### Badge-art exception

Use approved badge artwork for individual achievement cards when available.

Material Symbols may be used for:

- category headers
- filters
- status chips
- empty states
- fallback rendering

## Initial design surfaces

The production component system should support:

1. Learner Name Onboarding
2. Home Dashboard
3. Language Pair Selection
4. Activity Selection
5. Quiz Question
6. Correct Answer Feedback
7. Incorrect Answer Teaching Feedback
8. Session Results
9. Learner Progress
10. Rewards & Milestones
11. Parent Progress
12. Settings / Accessibility
13. Progress Portability & Data Control
14. About the Developer
15. Support Development

Additional screens should derive from the established component system rather than inventing unrelated visual patterns.

## Spelling rules

Spelling Studio should support a progression from recognition to active recall.

For Tagalog and Hiligaynon, prefer syllable-aware presentation when practical.

Example:

`MAG | LA | KAD`

A missing-syllable activity may appear as:

`MAG | __ | KAD`

Input validation requirements:

- letters only for single-word or syllable fields
- Unicode-aware alphabetic validation
- ignore case during answer comparison
- trim leading and trailing spaces
- no silent autocorrection
- reject numbers, emoji, and unrelated symbols
- allow internal spaces only when the canonical answer is intentionally multi-word

Validation and answer correctness are separate concerns.

## Content quality rules

Each canonical concept should eventually include:

- stable concept ID
- category
- difficulty
- English representation
- Tagalog representation
- Hiligaynon representation
- definitions
- example sentences
- source provenance
- review state

Recommended review states:

```text
DRAFT
REVIEW_REQUIRED
VERIFIED
REJECTED
```

Language-specific review status is preferred because one mapping may be verified while another remains uncertain.

AI may assist with drafting, brainstorming, or generating candidate variants, but AI-generated educational content must not become canonical automatically.

Before verification, content should be checked for:

- linguistic correctness
- natural phrasing
- age suitability
- cultural appropriateness
- correct meaning
- source compatibility when derived from external material

## Source and license governance

Every external content source should be reviewed before material is copied, adapted, or embedded.

At minimum, record:

- source name
- source URL
- license
- attribution requirements
- commercial-use restrictions
- share-alike requirements
- whether the project content is derivative

Non-commercial material must remain identifiable so it can be removed or replaced if the project later adopts a commercial distribution model.

HiliSenti remains useful as a Hiligaynon research and contextual reference. Its dataset is CC BY-NC-SA 4.0, so derived content must remain license-aware.

## Data and privacy rules

The MVP should collect no more learner information than required for local use.

Allowed initial identity field:

- first name or preferred nickname

Avoid storing sensitive personal data.

Do not add telemetry, third-party tracking, advertising identifiers, or behavioral analytics without deliberate future review.

Local progress should be inspectable and exportable.

## Progress portability

Use the Open Design feature wording:

- **Progress Portability & Data Control** in Settings
- **Data & Progress Portability** in Parent Progress

Primary actions:

- Export Progress
- Import Progress
- Reset Progress

Buttons may use the more explicit labels:

- Export Progress Backup
- Import Progress Backup

Import must validate the file and show a summary before replacing current progress. A confirmation dialog may use `restore` descriptively, but **Import Progress** remains the primary feature label.

Reset or overwrite operations require confirmation.

## Session rules

Initial defaults:

| Activity | Questions |
| --- | ---: |
| Quick Practice | 5 |
| Normal Practice | 10 |
| Periodic Progress Check | 20 |

Proposed cadence:

- 4 Normal Practice sessions
- then 1 Periodic Progress Check

These values are configuration defaults, not immutable educational claims.

## Initial language scope

Do not expand beyond these pairs until the first content and learning loop are stable:

- English -> Tagalog
- English -> Hiligaynon
- Tagalog -> Hiligaynon
- Hiligaynon -> English

Additional languages or pairings require explicit scope expansion.

## 3D study-buddy guidelines

The current 2D study-buddy illustrations remain the visual reference and fallback.

3Dification should:

- use simplified, web-optimized models
- remain isolated from learning logic
- lazy-load 3D code and assets
- preserve a complete 2D fallback
- never require WebGL to complete a lesson
- respect reduced-motion preferences
- reduce or stop animation during reading-intensive states
- be performance-tested across representative devices

`img2threejs/img2threejs` may be evaluated as a production aid. It must not become a dependency of the learning domain.

## Testing expectations

### Content validation

- schema validation
- required-field checks
- duplicate concept detection
- unsupported language-code checks
- source/provenance checks

### Learning engine validation

- correct answer resolution
- reinforcement behavior
- mastery updates
- Periodic Progress Check sampling
- XP and badge rules
- Spelling Studio validation and near-miss handling

### Parent analytics validation

- aggregation by language pair
- aggregation by category
- strengths and needs-practice thresholds
- Periodic Progress Check trend calculation
- no remote analytics dependency
- summaries update after new sessions

### Persistence validation

- save and reload
- learner-name persistence and editing
- interrupted-session recovery
- Export Progress
- Import Progress
- invalid backup rejection
- schema-version handling

### Accessibility validation

- keyboard navigation where applicable
- text resizing
- spacing modes
- reduced motion
- contrast
- focus visibility
- screen-reader labels
- 3D fallback behavior

### Responsive validation

Validate representative mobile, tablet, laptop, and desktop widths.

## Build sequence

### Phase 0: Definition and Open Design handoff

- project documentation
- content model
- source and license review
- Open Design semantic audit
- Material Symbols mapping

### Phase 1: Content foundation

- initial categories
- canonical concepts
- validated JSON schema
- reviewed question samples

### Phase 2: Learner profile and learning engine

- first-name or nickname onboarding
- session generation
- answer evaluation
- corrective teaching
- mastery states
- reinforcement
- Periodic Progress Checks
- Spelling Studio rules

### Phase 3: Local persistence and reporting data

- IndexedDB learner state
- structured attempt history
- active-session recovery
- Export Progress
- Import Progress
- local analytics aggregation

### Phase 4: Frontend integration

- Sinag ng Kaalaman branding
- Open Design-derived component system
- Material Symbols Rounded integration
- dashboard
- quiz flow
- feedback states
- learner Progress
- Rewards & Milestones
- Parent Progress
- Settings
- Progress Portability & Data Control

### Phase 5: Gamification and feedback polish

- XP
- levels
- stable achievement IDs
- badge artwork mapping
- celebrations
- sound effects

### Phase 6: Accessibility and quality pass

- reading profiles
- spacing controls
- contrast
- reduced motion
- assistive-technology review

### Phase 7: 3D study-buddy enhancement

- 3D proof of concept from approved 2D characters
- rendering adapter
- performance validation
- 2D fallback validation
- reduced-motion validation
- limited integration into greetings and celebrations

## Change discipline

Before adding a feature, answer:

1. What learner or parent problem does it solve?
2. Does it improve understanding, retention, accessibility, recoverability, or useful learning visibility?
3. Can the same result be achieved more simply?
4. Does it introduce privacy, licensing, performance, or maintenance risk?
5. Does it expand the approved MVP scope?

If the feature cannot answer these clearly, defer it.

## Definition of done

A feature is complete only when:

- intended behavior is implemented
- relevant validation passes
- accessibility impact is considered
- local persistence impact is considered
- privacy impact is considered
- source/license obligations are satisfied
- UI wording follows the current semantic contract
- icon usage follows the Material Symbols policy or documented brand/badge exception
- documentation is updated when behavior or architecture changes

Do not document planned work as completed work.
