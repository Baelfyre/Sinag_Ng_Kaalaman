# Initial Architecture

## Architectural goal

Sinag ng Kaalaman should remain simple, local-first, recoverable, and easy to inspect.

The MVP does not require a cloud database, account system, or remote application backend.

## Initial architecture decision

Use a browser-based application with two primary data layers:

1. **Versioned JSON** for canonical educational content.
2. **IndexedDB** for learner state and progress.

SQLite is intentionally deferred. It may become useful later if the project is packaged as a desktop or mobile application or if the local content corpus grows beyond what is comfortable to manage as static JSON.

## High-level architecture

```text
+--------------------------------------------------+
|                  Web Application                 |
+--------------------------------------------------+
| UI / Interaction Layer                           |
| - Learner onboarding                             |
| - Dashboard                                      |
| - Language selection                             |
| - Quiz views                                     |
| - Teaching feedback                              |
| - Learner progress                               |
| - Parent Progress analytics                      |
| - Rewards                                        |
| - Accessibility / settings                       |
+--------------------------------------------------+
| Learning Domain Layer                            |
| - Session generation                             |
| - Question selection                             |
| - Corrective teaching                            |
| - Reinforcement                                  |
| - Mastery calculation                            |
| - Progress checks                                |
| - XP / levels / badges                           |
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
- tablet-first

The frontend framework is **not yet locked**.

The current Open Design prototype is a useful interaction reference, but it is not yet the canonical production architecture. It currently uses a single HTML file, inline CSS and JavaScript, `localStorage`, a small sample vocabulary, and 2D study-buddy artwork. Production implementation should reconcile this prototype with the architecture defined here.

## Proposed repository structure

This is a planning structure, not a statement that implementation files already exist.

```text
Sinag_Ng_Kaalaman/
|
|-- README.md
|-- docs/
|   |-- PROJECT_IDEATION.md
|   |-- ARCHITECTURE.md
|   |-- BUILD_GUIDELINES.md
|   |-- CURRENT_PROTOTYPE_AUDIT.md
|   `-- PRIME_DIRECTIVE.md
|
|-- src/                       # future implementation
|   |-- app/
|   |-- components/
|   |-- features/
|   |   |-- onboarding/
|   |   |-- quiz/
|   |   |-- progress/
|   |   |-- parent-analytics/
|   |   |-- rewards/
|   |   |-- characters/
|   |   `-- accessibility/
|   |-- domain/
|   |   |-- concepts/
|   |   |-- mastery/
|   |   |-- sessions/
|   |   |-- analytics/
|   |   `-- achievements/
|   |-- content/
|   |   |-- concepts/
|   |   |-- questions/
|   |   `-- provenance/
|   |-- storage/
|   |   |-- indexeddb/
|   |   `-- backup/
|   `-- assets/
|       |-- characters-2d/
|       `-- characters-3d/
|
`-- tests/                     # future validation
```

## Learner profile model

The MVP should collect only the minimum identity needed to personalize the application.

Required field:

```json
{
  "schema_version": 1,
  "first_name": "Alex"
}
```

`first_name` may also contain a preferred nickname.

Do not require:

- age
- birth date
- full legal name
- email address
- username
- account registration

The application is already bounded to a Grade 4 to Grade 5 audience, so age collection is unnecessary for the initial product.

Profile data should:

- remain local
- be editable
- be included in backup export and restore
- be used only for learner-facing personalization such as greetings and progress summaries

## Canonical content model

The application should model **concepts**, not only translated word pairs.

Example conceptual record:

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
      "definition": "taong sumusunod sa mga tagubilin o bilin"
    },
    "hiligaynon": {
      "word": null,
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

The exact schema may evolve, but the following principles should remain stable:

- one stable concept identifier
- category metadata
- language-specific expressions and definitions
- age/difficulty metadata
- example sentences
- source provenance
- review status
- schema version

## Content provenance

Every imported or derived content item should be traceable to its source.

Suggested provenance fields:

```json
{
  "source_name": "Example Source",
  "source_url": "https://example.org",
  "license": "CC0-1.0",
  "attribution_required": false,
  "commercial_use_allowed": true,
  "derivative": false,
  "reviewed": true
}
```

This is especially important when evaluating external datasets with non-commercial or share-alike terms.

## Learner state model

Learner state belongs in IndexedDB rather than inside canonical content files.

Suggested data groups:

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

Parent analytics require more structured history than a simple total score.

A compact local attempt record may contain:

```json
{
  "session_id": "local-session-id",
  "concept_id": "obedient",
  "category": "character_traits",
  "pair": "en-tl",
  "activity_type": "context_fill",
  "correct": false,
  "first_attempt": true,
  "reinforcement": false,
  "sequence": 4
}
```

Exact fields may evolve, but the stored data must be sufficient to calculate learning summaries without requiring a remote analytics service.

## Parent Progress analytics

Parent analytics are a local educational reporting feature, not external telemetry.

The analytics layer should derive summaries from learner state such as:

- accuracy by language pair
- mastery by language pair
- accuracy and mastery by content category
- concepts repeatedly answered incorrectly
- concepts consistently answered correctly
- first-attempt success rate
- reinforcement success
- Progress Check history and trend
- recent session counts
- mastery distribution across New, Learning, Familiar, and Mastered

The interface should present both:

### Strengths

Examples:

- strongest language pair
- strongest category
- concepts consistently retained
- recent improvement

### Needs practice

Examples:

- language pair with the highest unresolved error rate
- category with the lowest mastery
- concepts repeatedly missed
- concepts that regress during later Progress Checks

Analytics should describe observed learning performance. They must not infer personality, intelligence, ability, or other traits from quiz results.

## Mastery model

Use deterministic rules for the MVP.

Each concept may track:

- attempts
- correct answers
- incorrect answers
- recent result history
- last seen date or local sequence
- mastery score
- mastery state

Initial mastery states:

```text
NEW
LEARNING
FAMILIAR
MASTERED
```

Thresholds should remain configurable so they can be adjusted after real learner testing.

## Session engine

The session engine should be able to request a bounded question set based on:

- selected language pair
- activity type
- number of questions
- current mastery
- concepts needing reinforcement
- older mastered concepts for retention

Initial defaults:

- Quick Practice: 5 questions
- Regular Practice: 10 questions
- Progress Check: 20 questions

A session generator should not mutate canonical educational content.

## Corrective teaching engine

Incorrect answers must produce structured feedback containing:

- selected answer
- selected answer meaning
- correct answer
- correct answer meaning
- contextual explanation
- reinforcement marker

This feedback should come from reviewed content where possible rather than being generated unpredictably at runtime.

## Progress checks

Progress checks are distinct from ordinary practice.

They should sample from:

- recent concepts
- current learning concepts
- previously difficult concepts
- older mastered concepts

Progress-check history should be preserved so improvement can be measured over time and shown in Parent Progress analytics.

## Gamification layer

Gamification consumes learning results but must not determine content correctness.

It may calculate:

- XP
- level
- streaks
- badge eligibility
- milestone celebrations

Incorrect answers should not deduct XP.

## Character presentation architecture

The recurring school-age study buddies should support both 2D and 3D presentation.

Recommended abstraction:

```text
CharacterPresenter
|-- Static2DPresenter
`-- ThreeDPresenter
```

The learning engine must not know which presenter is active.

### 2D baseline

The approved 2D study-buddy artwork remains:

- the visual source of truth for character identity
- the accessibility and compatibility fallback
- the lowest-cost rendering path

### 3D enhancement

3D characters may be implemented through Three.js. `img2threejs/img2threejs` may be evaluated as a production aid for reconstructing the approved character reference as procedural Three.js models.

3D requirements:

- lazy loading
- optimized geometry and textures or procedural equivalents
- no blocking of quiz content
- no dependency on a remote service at runtime
- graceful fallback when WebGL is unavailable
- graceful fallback on low-performance devices
- reduced-motion compliance
- character animation must stop or simplify during reading-intensive states

Suggested 3D use cases:

- dashboard greeting
- correct-answer celebration
- supportive incorrect-answer reaction
- badge unlock
- level-up celebration
- rewards or character gallery

Avoid continuous animation beside long questions or explanations.

## Accessibility layer

Accessibility preferences must be stored independently from content and session data.

Settings should include:

- font profile
- font size
- line spacing
- letter spacing
- word spacing
- contrast mode
- reduced motion
- read-aloud preferences

Components should consume these settings consistently through the application rather than implementing one-off overrides.

The 3D presentation layer must consume the same reduced-motion preference and must never be required to understand the lesson.

## Backup and restore architecture

Exported progress should be a versioned JSON package.

Suggested top-level format:

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

Restore must:

1. Parse the file safely.
2. Validate its schema.
3. Reject malformed or unsupported versions.
4. Show a summary including the learner name before replacement.
5. Require explicit confirmation before overwriting existing local progress.

## Offline-first boundary

The MVP should not require:

- authentication
- cloud synchronization
- remote database
- remote analytics tracking service
- advertising SDK
- remote AI inference

Network-dependent features may be evaluated later only if a demonstrated learning requirement justifies them.

## External projects

### HiliSenti

`jjjardev/hilisenti` may be used as a linguistic research/reference source for Hiligaynon usage. The current dataset is CC BY-NC-SA 4.0 and the repository code is MIT licensed.

Any HiliSenti-derived content must remain identifiable and must not be mixed into commercially unrestricted content without a separate licensing review.

### img2threejs

`img2threejs/img2threejs` is currently Apache-2.0 licensed and may be evaluated for procedural Three.js character reconstruction.

It is a possible production tool for the 3D study-buddy layer, but it must not become a dependency of the learning, content, progress, or analytics domains.

## Architecture constraint

No backend, framework, database, AI service, analytics service, or rendering system should be introduced merely because it is available.

Every dependency must answer a concrete requirement and must reduce more complexity than it adds.
