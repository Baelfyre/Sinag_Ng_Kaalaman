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
| - Dashboard                                      |
| - Language selection                             |
| - Quiz views                                     |
| - Teaching feedback                              |
| - Progress                                       |
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

Open Design will be used to establish the initial visual system and component requirements before choosing the final implementation stack. A framework should only be introduced if it simplifies the actual application rather than adding unnecessary infrastructure.

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
|   `-- PRIME_DIRECTIVE.md
|
|-- src/                       # future implementation
|   |-- app/
|   |-- components/
|   |-- features/
|   |   |-- quiz/
|   |   |-- progress/
|   |   |-- rewards/
|   |   `-- accessibility/
|   |-- domain/
|   |   |-- concepts/
|   |   |-- mastery/
|   |   |-- sessions/
|   |   `-- achievements/
|   |-- content/
|   |   |-- concepts/
|   |   |-- questions/
|   |   `-- provenance/
|   |-- storage/
|   |   |-- indexeddb/
|   |   `-- backup/
|   `-- assets/
|       `-- characters/
|
`-- tests/                     # future validation
```

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
concept_mastery
language_pair_progress
achievements
progress_checks
active_session
backup_metadata
```

Canonical content and learner state must remain separate.

## Mastery model

Use deterministic rules for the MVP.

Each concept may track:

- attempts
- correct answers
- incorrect answers
- recent result history
- last seen date
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

Progress-check history should be preserved so improvement can be measured over time.

## Gamification layer

Gamification consumes learning results but must not determine content correctness.

It may calculate:

- XP
- level
- streaks
- badge eligibility
- milestone celebrations

Incorrect answers should not deduct XP.

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
  "achievements": {},
  "progress_checks": []
}
```

Restore must:

1. Parse the file safely.
2. Validate its schema.
3. Reject malformed or unsupported versions.
4. Show a summary before replacement.
5. Require explicit confirmation before overwriting existing local progress.

## Offline-first boundary

The MVP should not require:

- authentication
- cloud synchronization
- remote database
- analytics tracking service
- advertising SDK
- remote AI inference

Network-dependent features may be evaluated later only if a demonstrated learning requirement justifies them.

## External projects

### HiliSenti

`jjjardev/hilisenti` may be used as a linguistic research/reference source for Hiligaynon usage. The current dataset is CC BY-NC-SA 4.0 and the repository code is MIT licensed.

Any HiliSenti-derived content must remain identifiable and must not be mixed into commercially unrestricted content without a separate licensing review.

### img2threejs

`img2threejs/img2threejs` is currently Apache-2.0 licensed and may be evaluated later for procedural 3D presentation. It is not an architectural dependency for the MVP.

## Architecture constraint

No backend, framework, database, AI service, or rendering system should be introduced merely because it is available.

Every dependency must answer a concrete requirement and must reduce more complexity than it adds.
