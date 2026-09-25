# Build and Project Guidelines

## Purpose

These guidelines define how Sinag ng Kaalaman should be designed, built, reviewed, and expanded.

The project should remain understandable, local-first, accessible, and focused on learning outcomes rather than feature count.

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

The initial project priority is:

1. define the content model
2. build a reviewed concept set
3. validate question quality
4. establish the learning loop
5. reconcile the Open Design prototype with canonical requirements
6. implement the local learning and progress model
7. add parent reporting, gamification, and polish
8. add 3D character presentation only after a lightweight proof of concept passes performance and accessibility checks

A beautiful interface with weak educational content is not considered a successful milestone.

### 3. Build around concepts, not isolated translations

Content should be organized around canonical concepts with language-specific representations.

Do not assume every English, Tagalog, or Hiligaynon word has an exact one-to-one equivalent.

When a translation is uncertain or context-dependent, mark it for review instead of forcing a false equivalence.

### 4. Wrong answers must teach

Incorrect answers must never become dead ends.

The application should explain:

- what the learner selected
- what the selected answer means
- what the correct answer is
- why the correct answer fits better

Difficult concepts should be reintroduced later using a different question or sentence when practical.

### 5. Self-paced by default

Normal learning sessions must be self-paced.

The learner should explicitly continue after reading feedback.

Timed activities are optional challenge modes only.

### 6. Gamification supports learning

XP, levels, badges, streaks, and celebrations should reinforce practice and mastery.

Do not:

- punish mistakes by removing XP
- create random paid rewards
- use loot-box mechanics
- pressure the learner to continue indefinitely
- design streaks so aggressively that missing a day feels like failure

### 7. Accessibility is not optional

Every major interface should be usable with the supported accessibility profiles.

Design and implementation must account for:

- readable font choices
- scalable text
- adjustable spacing
- adequate contrast
- keyboard operation where applicable
- large touch targets
- reduced motion
- screen-reader-friendly labels
- read-aloud support when implemented

No state should be communicated through color alone.

### 8. Tablet-first, responsive everywhere

The primary design target is tablet use by a Grade 4 to Grade 5 learner.

Desktop and mobile layouts should adapt without changing the learning model.

Quiz screens should minimize unnecessary scrolling and preserve large answer controls.

### 9. Collect only the identity the app needs

The MVP may ask for the learner's first name or preferred nickname for personalization.

Do not require age, birth date, full legal name, email address, or account registration.

The name must remain local, editable, and included in backup export and restore.

### 10. Parent analytics must remain local and educational

Parent Progress analytics should be calculated from local learner activity.

Do not add third-party behavioral analytics or remote telemetry to implement the parent dashboard.

Analytics should report observed learning outcomes such as language-pair performance, category performance, mastery, recurring errors, strengths, and Progress Check trends.

Do not infer intelligence, personality, capability, diagnosis, or other personal traits from quiz results.

## Design direction

The visual style should be:

- colorful
- energetic
- clean
- friendly
- modern
- child-appropriate without appearing preschool-oriented

Use recurring school-age child characters as learning companions.

Avoid visual clutter, constant confetti, excessive animation, permanent timers, and overly competitive framing.

## Initial design surfaces

The established design system should support:

1. Learner Name Onboarding
2. Home Dashboard
3. Language Pair Selection
4. Activity Selection
5. Quiz Question
6. Correct Answer Feedback
7. Incorrect Answer Teaching Feedback
8. Session Results
9. Learner Progress Dashboard
10. Parent Progress Analytics
11. Accessibility / Settings
12. Backup Export / Restore

Additional screens should derive from the established component system instead of inventing new visual patterns unnecessarily.

## Content quality rules

### Required for canonical content

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

Fields may be incomplete during drafting, but incomplete content must not be represented as verified.

### Review states

Recommended states:

```text
DRAFT
REVIEW_REQUIRED
VERIFIED
REJECTED
```

Language-specific review status is preferred because one language mapping may be verified while another remains uncertain.

### AI-generated content

AI may assist with drafting, brainstorming, or generating candidate variants.

AI-generated educational content must not become canonical automatically.

Before being marked verified, content should be checked for:

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

### Non-commercial material

Non-commercial material must remain identifiable so it can be removed or replaced if the project later adopts a commercial distribution model.

Do not silently mix non-commercial datasets into unrestricted core content.

### HiliSenti boundary

HiliSenti is currently useful as a Hiligaynon research and contextual reference. Its dataset is CC BY-NC-SA 4.0.

Treat HiliSenti-derived content as license-bound unless a separate review determines otherwise.

## Data and privacy rules

The MVP should collect no more learner information than required for local use.

Allowed initial identity field:

- first name or preferred nickname

Avoid storing sensitive personal data.

Do not add telemetry, third-party tracking, advertising identifiers, or behavioral analytics without a deliberate future review.

Local progress should be inspectable and exportable.

## Parent Progress analytics requirements

The production progress model should preserve enough structured history to calculate, at minimum:

- attempts and accuracy by language pair
- attempts and accuracy by content category
- mastery by language pair and category
- repeatedly missed concepts
- consistently strong concepts
- first-attempt success
- reinforcement success
- Progress Check history and trend
- recent session counts

Prefer derived summaries over storing redundant analytics values when the same result can be calculated reliably from local attempt history.

The dashboard should show both strengths and areas needing practice rather than focusing only on mistakes.

## Progress safety

Learner progress must be recoverable.

The application should support:

- local persistence
- active-session recovery
- explicit backup export
- validated restore

Reset or overwrite operations require confirmation.

## Session rules

Initial defaults:

| Activity | Questions |
| --- | ---: |
| Quick Practice | 5 |
| Regular Practice | 10 |
| Progress Check | 20 |

Proposed scheduled Progress Check cadence:

- 4 regular sessions
- then 1 Progress Check

These values are configuration defaults, not immutable educational claims.

## Initial language scope

Do not expand beyond these initial pairs until the first content and learning loop are stable:

- English -> Tagalog
- English -> Hiligaynon
- Tagalog -> Hiligaynon
- Hiligaynon -> English

Additional languages or pairings require explicit scope expansion.

## 3D study-buddy guidelines

The current 2D study-buddy illustrations are the visual reference and fallback.

3Dification should follow these rules:

- use simplified, web-optimized models
- keep 3D presentation isolated from learning logic
- lazy-load 3D code and assets
- preserve a complete 2D fallback
- do not require WebGL to complete a lesson
- respect reduced-motion preferences
- reduce or stop animation while the child reads questions and explanations
- test tablet performance before making 3D the preferred presentation
- do not download large character assets before the learner needs them

`img2threejs/img2threejs` may be evaluated as a production aid for generating procedural Three.js models from the approved reference art. Its use does not replace project-specific optimization and validation.

## Testing expectations

Implementation work should include validation appropriate to the change.

### Content validation

- schema validation
- required-field checks
- duplicate concept detection
- unsupported language code checks
- source/provenance checks

### Learning engine validation

- correct answer resolution
- reinforcement behavior
- mastery updates
- progress-check sampling
- XP and badge rules

### Parent analytics validation

- correct aggregation by language pair
- correct aggregation by category
- strengths and needs-practice thresholds
- Progress Check trend calculation
- no remote analytics dependency
- summaries update after new sessions

### Persistence validation

- save and reload
- learner-name persistence and editing
- interrupted-session recovery
- export
- import
- invalid backup rejection
- schema-version handling

### Accessibility validation

- keyboard navigation where applicable
- text resizing
- spacing modes
- reduced motion
- contrast
- focus visibility
- 3D fallback and reduced-motion behavior

### Responsive validation

At minimum, validate representative mobile, tablet, and desktop widths.

### 3D validation

Before 3D presentation is enabled by default, validate:

- initial load impact
- lazy-loading behavior
- rendering performance on representative tablets
- WebGL-unavailable fallback
- reduced-motion behavior
- no overlap with question or feedback text
- no loss of functionality when the 3D layer fails

## Build sequence

### Phase 0: Definition and prototype reconciliation

- project documentation
- content model
- source and license review
- audit the Open Design prototype against canonical requirements

### Phase 1: Content foundation

- initial categories
- initial canonical concepts
- validated JSON schema
- reviewed sample question bank

### Phase 2: Learner profile and learning engine

- first-name or nickname onboarding
- session generation
- answer evaluation
- corrective teaching
- mastery states
- reinforcement
- Progress Checks

### Phase 3: Local persistence and reporting data

- IndexedDB state
- structured attempt history
- active-session recovery
- export
- restore
- local analytics aggregation

### Phase 4: Core interface reconciliation

- Sinag ng Kaalaman branding
- Open Design-derived component system
- dashboard
- quiz flow
- feedback states
- learner progress
- Parent Progress analytics
- settings

### Phase 5: Gamification

- XP
- levels
- badges
- celebrations

### Phase 6: Accessibility and quality pass

- reading profiles
- spacing controls
- contrast
- reduced motion
- assistive-technology review

### Phase 7: 3D study-buddy enhancement

- 3D proof of concept from approved 2D characters
- rendering adapter
- tablet performance validation
- 2D fallback validation
- reduced-motion validation
- limited integration into greetings and celebrations

### Phase 8: Optional future enhancements

Only after the core learning loop is validated:

- additional languages
- additional quiz modes
- richer character interactions
- other network-dependent features with a demonstrated learning requirement

## Change discipline

Before adding a feature, answer:

1. What learner or parent problem does it solve?
2. Does it improve understanding, retention, accessibility, recoverability, or useful learning visibility?
3. Can the same result be achieved more simply?
4. Does it introduce privacy, licensing, performance, or maintenance risk?
5. Does it expand the approved MVP scope?

If the feature cannot answer these clearly, defer it.

## Definition of done

A feature is not complete merely because it renders or runs.

It should be considered complete only when:

- intended behavior is implemented
- relevant validation passes
- accessibility impact is considered
- local persistence impact is considered
- privacy impact is considered
- source/license obligations are satisfied
- documentation is updated when behavior or architecture changes

Do not document planned work as completed work.
