# Initial Architecture

## Architectural goal

Sinag ng Kaalaman should remain simple, local-first, recoverable, accessible, and easy to inspect.

The MVP does not require a cloud database, account system, remote application backend, remote AI dependency, advertising SDK, or third-party behavioral analytics.

For learner-facing wording and icon semantics, [`UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md`](UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md) is the current canonical design handoff.

## Initial architecture decision

Use a browser-based application with two primary data layers:

1. **Versioned JSON** for canonical educational content.
2. **IndexedDB** for learner state and progress.

SQLite remains deferred. It may become useful later if the project is packaged as a desktop/mobile application or if the local corpus grows beyond what is comfortable to manage as static JSON.

## High-level architecture

```text
+--------------------------------------------------+
|                  Web Application                 |
+--------------------------------------------------+
| UI / Interaction Layer                           |
| - Learner onboarding                             |
| - Home                                           |
| - Practice                                       |
| - Progress                                       |
| - Rewards & Milestones                           |
| - Parent Progress                                |
| - Settings / Accessibility                       |
| - Progress Portability & Data Control            |
| - About the Developer / Support Development      |
+--------------------------------------------------+
| UI Semantic / Presentation Services              |
| - Material Symbols Rounded adapter               |
| - Brand-logo adapter                             |
| - Badge-art resolver                             |
| - Sound-effect events                            |
| - Celebration-effect events                      |
| - Accessibility presentation settings            |
+--------------------------------------------------+
| Learning Domain Layer                            |
| - Session generation                             |
| - Question selection                             |
| - Corrective teaching                            |
| - Reinforcement                                  |
| - Spelling evaluation                            |
| - Mastery calculation                            |
| - Periodic Progress Checks                       |
| - XP / levels / achievement eligibility          |
| - Local analytics aggregation                    |
+--------------------------------------------------+
| Character Presentation Layer                     |
| - 2D study-buddy renderer                        |
| - Optional 3D study-buddy renderer               |
| - Motion / reduced-motion policy                 |
| - 2D fallback                                    |
+--------------------------------------------------+
| Persistence Layer                                |
| - IndexedDB learner state                        |
| - Active-session recovery                        |
| - Export / import validation                     |
+--------------------------------------------------+
| Canonical Content Layer                          |
| - Versioned JSON concepts                        |
| - Language expressions                           |
| - Example sentences                              |
| - Question templates                             |
| - Source / license provenance                    |
+--------------------------------------------------+
```

## Technology status

The application is definitively:

- browser-based
- local-first
- offline-capable where practical
- responsive
- device-neutral

Do not preserve the older `tablet-first` requirement as an architecture constraint. Mobile, tablet, laptop, and desktop layouts should adapt without changing the learning model.

The frontend framework is not yet treated as the domain architecture. The current Open Design export is the visual and interaction handoff reference, but its single-file HTML, inline CSS/JavaScript, inline SVG icon registry, and `localStorage` persistence are prototype implementation details.

Production integration should preserve the design semantics while replacing prototype-only implementation choices where required.

## Proposed repository structure

Planning structure:

```text
Sinag/
|
|-- README.md
|-- assets/
|   |-- branding/
|   |-- badges/
|   |-- characters/
|   `-- brand-logos/
|-- data/
|-- docs/
|   |-- PROJECT_IDEATION.md
|   |-- ARCHITECTURE.md
|   |-- BUILD_GUIDELINES.md
|   |-- CURRENT_PROTOTYPE_AUDIT.md
|   |-- UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md
|   `-- PRIME_DIRECTIVE.md
|-- src/                       # production implementation
|   |-- app/
|   |-- components/
|   |-- features/
|   |   |-- onboarding/
|   |   |-- practice/
|   |   |-- progress/
|   |   |-- rewards/
|   |   |-- parent-progress/
|   |   |-- settings/
|   |   |-- portability/
|   |   |-- developer-support/
|   |   `-- characters/
|   |-- domain/
|   |   |-- concepts/
|   |   |-- mastery/
|   |   |-- sessions/
|   |   |-- spelling/
|   |   |-- analytics/
|   |   `-- achievements/
|   |-- content/
|   |-- storage/
|   |-- presentation/
|   |   |-- icons/
|   |   |-- audio/
|   |   |-- celebrations/
|   |   `-- characters/
|   `-- assets/
`-- tests/
```

The exact framework-specific layout may evolve, but domain, persistence, content, and presentation concerns should remain separated.

## UI semantic layer

The application should not bind behavior to a visual glyph.

Example:

```text
Domain action: export progress
Visible label: Export Progress Backup
Icon token: download
```

The action remains stable if the symbol changes later.

### Material Symbols

Use **Material Symbols Rounded** for normal application controls and state indicators through a shared adapter/component.

The production icon layer should accept semantic icon tokens and render the documented Material Symbol.

Examples:

```text
home            -> home
practice        -> menu_book
progress        -> monitoring
settings        -> settings
mixed-practice  -> auto_awesome
spelling        -> spellcheck
comprehension   -> lightbulb
export          -> download
import          -> upload_file
reset           -> restart_alt
```

See [`UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md`](UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md) for the complete mapping.

### Brand logos

GitHub, LinkedIn, Facebook, and Buy Me a Coffee use dedicated brand assets rather than Material Symbols.

### Badge artwork

Achievement identity is based on a stable achievement ID, not the image filename or current display title.

Recommended model:

```json
{
  "id": "category-master",
  "display_name": "Domain Champion",
  "tagline": "Kampeon sa Kategorya",
  "category_id": "mastery",
  "art_asset": "resolved-by-registry"
}
```

This allows existing artwork filenames to be reconciled without coupling unlock logic to a temporary label.

## Learner profile model

Collect only the minimum identity needed to personalize the app.

Required field:

```json
{
  "schema_version": 1,
  "first_name": "Alex"
}
```

`first_name` may contain a preferred nickname.

Do not require:

- age
- birth date
- full legal name
- email address
- username
- account registration

Learner-facing level copy is **Grade School Level**. Historical curriculum alignment may still describe the original Grade 4 to Grade 5 target where relevant.

Profile data should:

- remain local
- be editable
- be included in Export Progress / Import Progress
- be used only for learner-facing personalization

## Canonical content model

Model concepts, not only translated word pairs.

Example:

```json
{
  "schema_version": 1,
  "concept_id": "obedient",
  "category": "character_traits",
  "difficulty": 1,
  "languages": {
    "english": {
      "word": "obedient",
      "definition": "someone who follows instructions"
    },
    "tagalog": {
      "word": "masunurin",
      "syllables": ["ma", "su", "nu", "rin"],
      "definition": "taong sumusunod sa mga tagubilin o bilin"
    },
    "hiligaynon": {
      "word": null,
      "syllables": [],
      "definition": null
    }
  },
  "examples": [],
  "sources": [],
  "review_status": {
    "english": "verified",
    "tagalog": "verified",
    "hiligaynon": "pending"
  }
}
```

Syllable metadata is recommended for reviewed Tagalog and Hiligaynon entries used by Spelling Studio.

Stable principles:

- stable concept identifier
- category metadata
- language-specific expressions and definitions
- syllable segmentation where reviewed and useful
- age/difficulty metadata
- example sentences
- source provenance
- review status
- schema version

## Learner state model

Learner state belongs in IndexedDB rather than canonical content files.

Suggested groups:

```text
profile
preferences
session_history
attempt_history
concept_mastery
category_progress
language_pair_progress
achievements
progress_checks
active_session
backup_metadata
```

Canonical content and learner state must remain separate.

## Attempt event model

Parent Progress requires structured history.

A compact local attempt record may contain:

```json
{
  "session_id": "local-session-id",
  "concept_id": "obedient",
  "category": "character_traits",
  "pair": "en-tl",
  "activity_type": "spelling_missing_syllable",
  "correct": false,
  "concept_understood": true,
  "spelling_exact": false,
  "first_attempt": true,
  "reinforcement": false,
  "sequence": 4
}
```

Exact fields may evolve, but stored data must support local learning summaries without remote telemetry.

## Spelling domain

Spelling Studio should distinguish:

1. correct concept + exact spelling
2. correct concept + near-miss spelling
3. incorrect concept

For Tagalog and Hiligaynon, the engine may use reviewed syllable segmentation for:

- missing-syllable exercises
- syllable ordering
- guided full-word spelling

Input validation and answer evaluation are separate.

Single-word/syllable input should accept Unicode letters only. Multi-word input may allow spaces only when the canonical answer requires them.

Do not silently autocorrect the learner's actual answer.

## Session engine

The session engine requests a bounded question set based on:

- selected language pair
- exercise style
- session mode
- question count
- current mastery
- concepts needing reinforcement
- older mastered concepts for retention

Preferred learner-facing modes:

- Quick Practice: 5 questions
- Normal Practice: 10 questions
- Periodic Progress Check: 20 questions
- Challenge Mode (Optional 90-second timer)

Internal session identifiers may remain stable and need not mirror visible copy.

A session generator must not mutate canonical educational content.

## Corrective teaching engine

Incorrect answers produce structured feedback containing:

- selected answer
- selected answer meaning
- correct answer
- correct answer meaning
- contextual explanation
- reinforcement marker

Feedback should come from reviewed content where possible rather than unpredictable runtime generation.

## Periodic Progress Checks

Periodic Progress Checks are distinct from ordinary practice.

They should sample from:

- recent concepts
- current learning concepts
- previously difficult concepts
- older mastered concepts

History should be preserved so improvement can be shown in Progress and Parent Progress.

## Parent Progress analytics

Parent Progress is a local educational reporting feature, not external telemetry.

Derive summaries such as:

- overall accuracy
- accuracy by language pair
- mastery by language pair
- accuracy/mastery by category
- recurring missed concepts
- consistently strong concepts
- spelling accuracy and near misses
- reinforcement success
- Periodic Progress Check history and trend
- recent session counts
- mastery distribution

The interface should show strengths and areas needing practice.

Do not infer personality, intelligence, diagnosis, or capability from quiz results.

## Achievement model

Gamification consumes learning results but does not determine content correctness.

It may calculate:

- XP
- learner level
- practice consistency
- badge eligibility
- milestone celebrations

Incorrect answers do not deduct XP.

Achievement logic should use stable IDs. Current display copy is defined in the UI semantics document.

## Character presentation architecture

Recommended abstraction:

```text
CharacterPresenter
|-- Static2DPresenter
`-- ThreeDPresenter
```

The learning engine must not know which presenter is active.

### 2D baseline

Approved 2D study-buddy artwork remains:

- the visual source of truth
- the accessibility/compatibility fallback
- the lowest-cost rendering path

### 3D enhancement

Three.js may be used later for optional 3D presentation.

Requirements:

- lazy loading
- optimized geometry/assets
- no blocking of quiz content
- no remote runtime dependency
- graceful fallback when WebGL is unavailable
- reduced-motion compliance
- simplified or stopped animation during reading-intensive states

`img2threejs/img2threejs` may be evaluated as a production aid only.

## Accessibility layer

Accessibility settings are independent from content and session data.

Settings should include:

- font profile
- font size
- line spacing
- letter spacing
- word spacing
- contrast mode
- reduced motion
- read-aloud preferences
- sound-effect preferences

Icon-only interactive controls require accessible names. Decorative symbols should be hidden from assistive technology.

## Progress portability architecture

Exported progress is a versioned JSON package.

Suggested top-level structure:

```json
{
  "schema_version": 1,
  "exported_at": "ISO-8601 timestamp",
  "app_version": "unknown-or-version",
  "profile": {},
  "preferences": {},
  "progress": {},
  "attempt_history": [],
  "achievements": {},
  "progress_checks": []
}
```

Primary UI semantics:

- Export Progress
- Import Progress
- Reset Progress

Import must:

1. Parse safely.
2. Validate schema and version.
3. Reject malformed or unsupported backups.
4. Show a summary including learner name before replacement.
5. Require explicit confirmation before overwriting current progress.

The confirmation copy may explain that the imported backup will restore or replace current browser data, while the primary action remains **Import Progress**.

## Offline-first boundary

The MVP should not require:

- authentication
- cloud synchronization
- remote database
- remote analytics tracking
- advertising
- remote AI inference

Network-dependent features may be evaluated later only when a demonstrated requirement justifies them.

## Architecture constraint

No backend, framework, database, AI service, analytics service, icon library, or rendering system should be introduced merely because it is available.

Every dependency must answer a concrete requirement and reduce more complexity than it adds.
