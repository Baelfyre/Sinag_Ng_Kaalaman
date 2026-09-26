# Open Design Refactor Status

## Purpose

This document tracks the migration of the final Open Design export from `Sinag_Design` into the production-oriented `Sinag` repository.

The Open Design export is a design and interaction source, not a production architecture template. Refactoring should preserve approved wording, visual hierarchy, interaction intent, accessibility behavior, and useful UI states while separating prototype-only implementation details.

## Source reviewed

The current source bundle contains:

- `index.html`
- `sinag-ng-kaalaman.html`
- Open Design artifact metadata
- `.od-frames/`
- `.od-skills/`
- `.file-versions/`
- `assets/logo.png`
- `assets/study-buddies.png`
- supporting exported images

The final `index.html` and `sinag-ng-kaalaman.html` represent the same final design state. Historical file versions and Open Design internal metadata are not production application dependencies.

## Refactor branch

Current integration branch:

`refactor/opendesign-production-foundation`

The branch is intentionally separated from `main` while the old monolithic prototype is decomposed into production modules.

## Completed in the first refactor slice

### Production shell

Added a root `index.html` that:

- preserves Sinag ng Kaalaman branding
- loads the production stylesheet separately
- loads application JavaScript as an ES module
- loads Material Symbols Rounded
- retains the accessibility skip link

### Central Material Symbols semantics

Added:

`src/presentation/icons.js`

The app now has semantic icon tokens rather than copying the Open Design inline SVG registry into every feature.

Dedicated platform logos remain a separate concern and must not be replaced by Material Symbols.

### Canonical app configuration

Added:

`src/data/app-config.js`

This centralizes:

- product identity
- Grade School Level wording
- four language pairs
- Open Design exercise-style labels
- Quick Practice
- Normal Practice
- Periodic Progress Check
- Challenge Mode
- primary navigation
- local storage namespace identifiers

### Achievement registry

Added:

`src/data/achievements.js`

Achievement identity now uses stable IDs. Open Design display names and Filipino support labels are separated from existing image filenames.

This allows previously generated badge artwork to remain usable even when an earlier working title is embedded in the filename.

### Initial production presentation layer

Added:

- `src/styles/app.css`
- `src/app.js`

The initial shell currently migrates:

- responsive device-neutral header/navigation
- Home
- language-path selection
- Practice configuration
- Open Design exercise wording
- Open Design session wording
- Rewards & Milestones artwork registry
- Parent Progress semantic placeholder
- Settings / Accessibility semantic placeholder
- Progress Portability wording
- About the Developer
- Support Development

These placeholders are explicit migration boundaries, not claims that the underlying domain functionality is complete.

## Prototype implementation details not carried forward as architecture

The production implementation should not blindly preserve:

- one 5,000+ line HTML file
- inline CSS
- inline application JavaScript
- the inline SVG icon registry
- prototype-only `localStorage` progress architecture
- Open Design internal frame metadata
- Open Design historical file snapshots
- duplicated final HTML files

## Required next migration slices

### 1. Learning content module

Move prototype vocabulary out of the UI script and into reviewed versioned content structures.

Do not mark Open Design sample vocabulary as canonical merely because it appeared in the prototype.

### 2. Learning-session engine

Separate:

- session generation
- question selection
- exercise-type selection
- 5 / 10 / 20 question bounds
- challenge timer
- pause/resume
- active-session recovery

### 3. Spelling Studio

Migrate:

- partial spelling
- full spelling
- missing-syllable exercises
- syllable ordering
- Unicode-aware letters-only validation
- correct concept vs spelling-near-miss distinction
- retry behavior

### 4. Corrective teaching

Preserve the Open Design teaching flow while moving correctness and explanation logic into the learning domain.

### 5. Learner state and persistence

Replace prototype aggregate `localStorage` progress with the planned IndexedDB learner-state model.

Storage services should preserve:

- profile
- preferences
- active session
- attempt history
- mastery
- achievements
- Progress Check history

### 6. Progress and Parent Progress

Rebuild the design views against structured local attempt data rather than prototype counters.

### 7. Export / Import / Reset

Implement versioned JSON backup validation and explicit overwrite confirmation.

### 8. Accessibility preferences

Move font, spacing, contrast, reduced-motion, read-aloud, and sound settings into a dedicated preference service consumed consistently by UI components.

### 9. Sound and celebration services

Keep semantic event triggers separate from learning correctness.

### 10. Study-buddy asset migration

Move the approved Open Design study-buddy source artwork into the production asset structure while retaining it as the 2D fallback for future 3D work.

## Governing rule

Refactor the Open Design output by **preserving approved semantics and behavior while replacing prototype coupling with explicit production modules**.

Do not perform unrelated redesigns during the migration unless a documented requirement requires them.
