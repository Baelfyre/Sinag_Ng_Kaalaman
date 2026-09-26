# Current Prototype Audit

## Source reviewed

This audit reflects the current Open Design handoff supplied on 2026-09-26 as `Sinag_Design.zip`.

Primary exported files include:

- `index.html`
- `sinag-ng-kaalaman.html`
- corresponding Open Design artifact metadata
- `assets/logo.png`
- `assets/study-buddies.png`
- Open Design frame/support metadata

The two final HTML exports were reviewed as equivalent handoff surfaces. Production should choose one source of truth rather than carrying duplicate generated entry files.

This document records the observed prototype state. It does not treat prototype implementation choices as production architecture.

## Current prototype strengths

The current handoff demonstrates substantially more of the intended product than the earlier prototype audit.

Observed product semantics include:

- Sinag ng Kaalaman branding
- Filipino-English Language Journey wording
- Grade School Level wording in learner-facing footer copy
- learner onboarding with first name or nickname
- Home, Practice, Progress, Rewards, Parent Progress, and Settings navigation
- four language pairs:
  - English -> Tagalog
  - English -> Hiligaynon
  - Tagalog -> Hiligaynon
  - Hiligaynon -> English
- exercise filters:
  - Mixed Practice (All Types)
  - Multiple Choice
  - Spelling Studio
  - Comprehension
- session modes:
  - Quick Practice
  - Normal Practice
  - Periodic Progress Check
  - Challenge Mode (Optional 90-second timer)
- corrective teaching
- reinforcement/review flow
- pause/resume controls
- XP and levels
- Rewards & Milestones
- 25 achievement definitions
- reward category and status filtering
- learner Progress
- Parent Progress analytics
- accessibility controls
- browser read-aloud support where available
- progress export/import/reset interactions
- About the Developer
- Support Development
- recurring 2D study-buddy art
- responsive interaction design

The current Open Design export is therefore the primary visual and interaction handoff reference for production integration.

## Preferred UI wording

The wording implemented in Open Design is preferred for learner-facing production copy.

Important examples:

- `Normal Practice` instead of the earlier `Regular Practice`
- `Periodic Progress Check` as the full milestone-assessment label
- `Spelling Studio` as the spelling activity umbrella
- `Rewards & Milestones`
- `Total Sunshine Points`
- `Learner Rank`
- `Parent Progress`
- `Progress Portability & Data Control`
- `Export Progress` / `Import Progress` / `Reset Progress`

See [`UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md`](UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md) for the canonical wording and icon map.

## Current implementation observations

### Prototype delivery shape

The application remains a generated single-file browser prototype with inline CSS and JavaScript.

This is suitable as a visual/interaction handoff but should not dictate production component boundaries.

Production should extract:

- reusable UI components
- domain services
- persistence services
- icon presentation
- audio/celebration services
- reward registry
- content data

without changing the approved learner-facing flow unnecessarily.

### Icon implementation

The current prototype defines an inline `ICONS` object containing hand-authored SVG path fragments and renders them through a shared `icon()` helper.

This is a good semantic prototype pattern but not the intended production icon source.

Production direction:

- replace normal inline SVG glyphs with **Material Symbols Rounded**
- retain semantic icon tokens in a centralized component/helper
- use dedicated brand assets for GitHub, LinkedIn, Facebook, and Buy Me a Coffee
- use approved badge artwork for individual achievements

The icon replacement must not change action labels or behavior.

### Content state

The prototype contains a larger demonstration vocabulary than the earliest three-word version and organizes examples into categories such as:

- Nature & Environment
- Home & Family
- Animals & Creatures
- Actions & Daily Life
- Food & Health

This is still demonstration/prototype content unless it has separately passed canonical content review.

Production content must remain provenance-aware and should not be promoted to verified merely because it appears in the design handoff.

### Session model

The prototype now visibly implements the intended 5 / 10 / 20 structure:

- Quick Practice: 5 questions
- Normal Practice: 10 questions
- Periodic Progress Check: 20 questions

It also presents Challenge Mode with an optional 90-second timer.

Default learning remains self-paced.

### Corrective teaching

The prototype preserves the intended corrective flow:

- learner answer is acknowledged
- correct answer is revealed
- meaning/context is explained
- retry/review paths are available
- difficult concepts can return for reinforcement

This aligns with the Prime Directive and should be preserved.

### Spelling Studio

The prototype implements full and partial spelling behaviors and distinguishes exact success from retry/near-miss flows.

However, the current partial spelling code still focuses on a missing **letter** rather than the newer preferred missing-**syllable** presentation for Tagalog and Hiligaynon.

Production reconciliation required:

- add reviewed syllable segmentation to canonical language data where useful
- present Tagalog/Hiligaynon spelling by syllable when practical
- support missing-syllable and syllable-ordering activities
- enforce Unicode-aware letters-only input validation
- keep validation separate from answer correctness
- do not silently autocorrect misspellings

### Persistence

The Open Design prototype uses browser `localStorage` for progress/settings and includes export/import/reset interactions.

Production architecture still targets IndexedDB for structured learner state.

Required migration boundary:

- canonical content remains versioned JSON
- learner state moves to IndexedDB
- active sessions are recoverable
- exported backups remain versioned JSON
- import validates before replacement

### Progress portability wording

The prototype primarily uses:

- Export Progress
- Import Progress
- Reset Progress

Some confirmation/error copy still uses the word `restore` descriptively.

Production rule:

- keep **Import Progress** as the primary action/feature label
- `restore` may appear in explanatory confirmation text describing what imported data will do

### Parent Progress

The prototype now includes a dedicated Parent Progress surface and local summary structures.

Production should retain the parent-facing concept while deriving analytics from structured learner events rather than a remote analytics service.

Required analytics include:

- overall accuracy
- language-pair performance
- category performance
- spelling performance
- recurring missed concepts
- strengths
- reinforcement outcomes
- Periodic Progress Check history/trend
- mastery distribution

No intelligence, personality, diagnosis, or capability inference should be introduced.

### Rewards & Milestones

The current Open Design registry defines 25 stable achievement IDs across six categories:

- Getting Started
- Practice & Consistency
- Language Exploration
- Vocabulary & Mastery
- Spelling & Recall
- Progress & Milestones

Reward status wording is:

- Earned
- In Progress
- Locked

The implemented display names and taglines are preferred and are now documented in [`UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md`](UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md).

Existing repository badge-image filenames include earlier working titles. Production must map badge artwork by **stable achievement ID** rather than treating an asset filename as the canonical display name.

This avoids needing to rewrite domain logic when titles or filenames are reconciled.

### Branding

The repository branding asset remains the canonical project logo.

The production logo treatment should preserve:

- transparent background
- thin white outline around the main artwork
- no white rectangular backing
- correct proportions

The Open Design `assets/logo.png` is a design-handoff resource, not an instruction to replace the repository's canonical transparent WebP format.

### Learner level wording

The current learner-facing label is **Grade School Level**.

Some prototype comments or accessibility alt text still reference `Grade 4-5` or `Grade 4 to 5` from the original target definition.

Production cleanup should:

- use Grade School Level for learner-facing copy
- update stale UI alt text where it unnecessarily exposes the older wording
- retain the original Grade 4 to Grade 5 target only where curriculum/history context is intentionally documented

### Study-buddy assets

The current design uses `assets/study-buddies.png` as the recurring 2D character art.

The approved 2D characters remain the visual reference and production fallback while optional 3D experimentation is deferred.

## Production handoff priorities

The broad visual ideation phase is sufficiently defined for implementation planning.

Next bounded work should focus on:

1. preserve current Open Design learner-facing wording
2. replace prototype inline SVG icons with the documented Material Symbols Rounded layer
3. reconcile reward artwork to stable achievement IDs
4. implement syllable-aware Spelling Studio behavior and letters-only validation
5. separate generated single-file UI into maintainable production components
6. connect reviewed canonical content
7. migrate structured learner state to IndexedDB
8. preserve active-session recovery
9. preserve Export Progress / Import Progress / Reset Progress safety rules
10. connect Parent Progress to structured local analytics
11. connect sound and celebration events through semantic services
12. retain 2D study buddies as the baseline and defer 3D to the next phase

## Audit conclusion

The current Open Design export is no longer merely an early mockup. It is a substantial interaction prototype and should be treated as the preferred UI/UX handoff.

Production work should preserve its wording, visual hierarchy, accessibility intent, and learner flow while replacing prototype-only implementation details with maintainable architecture.
