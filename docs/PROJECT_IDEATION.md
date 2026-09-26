# Project Ideation

## Working title

**Sinag ng Kaalaman**

The name means a ray or light of knowledge. The product should help children gradually understand unfamiliar words and concepts instead of treating language learning as a simple right-or-wrong quiz.

Current learner-facing identity:

- **Sinag ng Kaalaman**
- **Filipino-English Language Journey**
- **Grade School Level**

## Problem

Some grade-school learners are more comfortable in English and have difficulty interpreting Filipino or Hiligaynon vocabulary, especially when words appear inside schoolwork, stories, instructions, or contextual sentences.

The project addresses that gap through short, repeatable, context-based learning activities.

## Target learner

- grade-school learner
- English-dominant or English-comfortable
- developing Filipino and/or Hiligaynon vocabulary and comprehension

The original ideation focused most strongly on the Grade 4 to Grade 5 range. That remains useful historical curriculum context, but the learner-facing level label is now **Grade School Level**.

The interface should feel like a modern educational game, not a preschool app and not a formal learning-management system.

## Learner identity

For the MVP:

- ask only for the child's first name or preferred nickname
- do not require age, birth date, full legal name, email, account, or login
- store the name locally with learner progress
- allow editing later
- include the name in exported/imported progress data

The name may be used in greetings, encouragement, progress summaries, and import previews.

## Initial language combinations

1. English -> Tagalog
2. English -> Hiligaynon
3. Tagalog -> Hiligaynon
4. Hiligaynon -> English

These four combinations define the initial content and test scope. Additional language pairs are future work.

## Core question concept

A typical activity presents a sentence with a missing word and several choices.

Example:

> Si Ana ay _____ na bata dahil sinusunod niya ang kanyang mga magulang.

- Masunurin: someone who follows instructions
- Magalang: someone who is respectful
- Matalino: someone who is smart

The child selects an answer, receives feedback, and continues at their own pace.

## Preferred practice wording

The current Open Design wording is preferred for learner-facing UI.

### Exercise styles

- **Mixed Practice (All Types)**
- **Multiple Choice**
- **Spelling Studio**
- **Comprehension**

### Session modes

#### Quick Practice

- 5 questions
- focused daily review

#### Normal Practice

- 10 questions
- default self-paced learning session
- replaces the earlier learner-facing label `Regular Practice`

#### Periodic Progress Check

- 20 questions
- milestone assessment
- combines recognition and active spelling
- measures retention rather than speed

#### Challenge Mode (Optional 90-second timer)

- lighthearted timed round
- no penalty
- no letter grades

A proposed cadence is a Periodic Progress Check after every 4 Normal Practice sessions.

## Session composition

A Normal Practice session should mix:

- newly introduced concepts
- concepts currently being learned
- concepts previously answered incorrectly
- older mastered concepts for retention

Periodic Progress Checks should draw from recent, difficult, and previously mastered concepts.

## Corrective teaching

An incorrect answer becomes a teaching opportunity.

The application should:

1. Show the selected answer and its meaning.
2. Identify the correct answer.
3. Explain the correct answer meaning.
4. Explain why it fits the sentence or context better.
5. Mark the concept for reinforcement.

Avoid punitive wording such as `WRONG`, `FAILED`, or similar high-pressure feedback.

## Pacing

The default flow is self-paced:

`Question -> Answer -> Explanation -> Next`

Challenge Mode is optional. Pause/resume should preserve current session state.

## Spelling Studio

Spelling is a first-class activity rather than a decorative side mode.

The learning progression may move through:

1. multiple-choice recognition
2. missing-syllable spelling
3. syllable ordering
4. full-word spelling
5. retention review

For Tagalog and Hiligaynon, syllable-aware presentation is preferred when reviewed segmentation is available.

Example:

`MAG | LA | KAD`

Missing-syllable form:

`MAG | __ | KAD`

Spelling evaluation should distinguish:

- correct concept + exact spelling
- correct concept + near-miss spelling
- incorrect concept

Input validation rules:

- Unicode letters only for single-word/syllable inputs
- case-insensitive comparison
- trim leading/trailing spaces
- reject numbers, emoji, and unrelated symbols
- no silent autocorrection
- allow internal spaces only for intentionally multi-word canonical answers

## Learning progression

Initial mastery states:

- New
- Learning
- Familiar
- Mastered

The first implementation should use deterministic rules rather than machine learning.

## Parent Progress

Parent Progress is a local educational reporting feature, not a remote analytics service.

It should answer questions such as:

- Which language pair is strongest?
- Which pair needs more support?
- Which categories are strongest?
- Which concepts are repeatedly missed?
- Which difficult concepts are improving?
- How are Periodic Progress Check results changing?
- How much content is New, Learning, Familiar, or Mastered?
- Which words are understood but frequently misspelled?

Useful summaries include:

- overall accuracy
- accuracy/mastery by language pair
- accuracy/mastery by category
- spelling accuracy and near misses
- reinforcement success
- recent sessions
- Periodic Progress Check trend

Analytics remain descriptive. The application should not infer intelligence, personality, diagnosis, or capability from quiz results.

## Progress portability

Because storage is local-first, progress must be recoverable.

Preferred UI wording:

- **Progress Portability & Data Control**
- **Export Progress**
- **Import Progress**
- **Reset Progress**

Buttons may use:

- Export Progress Backup
- Import Progress Backup

Import validates the backup, previews its summary, and requires confirmation before replacing current progress.

## Gamification

Gamification supports learning but must not become the product's primary objective.

Initial mechanics:

- XP
- levels
- badges
- practice consistency
- progress bars
- achievement milestones
- study-buddy reactions
- celebration effects

Open Design progress/reward wording includes:

- Total Sunshine Points
- Rewards & Milestones
- Badges Earned
- In Progress
- Learner Rank

Badge status terms:

- Earned
- In Progress
- Locked

Mistakes should not remove XP.

Achievement behavior should use stable IDs while display names remain presentation data. The current Open Design achievement names and taglines are recorded in [`UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md`](UI_SEMANTICS_AND_MATERIAL_SYMBOLS.md).

## Character direction

Use recurring school-age child characters as study buddies.

Characters should:

- feel like classmates or companions rather than authority figures
- be expressive but not preschool-like
- support the lesson without competing with content

Typical usage:

- dashboard greeting
- quiz companion
- correct-answer reaction
- supportive incorrect-answer explanation
- milestone celebration

## 3D character direction

Future 3D study buddies remain a presentation enhancement.

Requirements:

- retain 2D fallback
- do not block lessons
- lazy-load assets
- respect reduced motion
- reduce/stop motion during reading-heavy states
- WebGL failure must not prevent learning

`img2threejs/img2threejs` may be evaluated as a production aid, not as a learning-engine dependency.

## Visual and icon direction

The visual language should be:

- bright but controlled
- friendly
- modern
- readable
- child-appropriate without appearing preschool-oriented

Use:

- large rounded controls
- strong hierarchy
- clear progress indicators
- large touch targets
- moderate celebration effects

Avoid:

- constant confetti
- permanent timers
- visual clutter
- team-versus-team pressure
- preschool visual language

For normal application icons, production should use **Material Symbols Rounded** through a shared icon layer.

External platform identity uses dedicated logos for:

- GitHub
- LinkedIn
- Facebook
- Buy Me a Coffee

Individual achievements should use approved badge artwork when available.

## Accessibility

Accessibility is part of the product.

Initial controls include:

- child-friendly font profile
- standard font profile
- hyperlegible profile
- dyslexia-friendly profile
- optional script/handwriting profile
- text size
- line spacing
- letter spacing
- word spacing
- high contrast
- reduced motion
- read question aloud
- read answer choices aloud

Script or handwriting fonts are optional and must never be the default quiz font.

No state should rely on color alone.

## Initial content strategy

Start with approximately 100 canonical concepts across child-relevant categories such as:

- family
- school
- home
- food
- animals
- colors
- numbers
- actions
- emotions
- character traits

Each concept should be language-neutral at its core and map to English, Tagalog, and Hiligaynon expressions, definitions, examples, and reviewed syllable segmentation where useful.

## Current Open Design handoff

The current Open Design export now demonstrates substantially more of the intended product surface, including:

- Sinag ng Kaalaman branding
- Filipino-English Language Journey wording
- Grade School Level wording
- first-name/nickname onboarding
- Home / Practice / Progress / Rewards navigation
- four language pairs
- Mixed Practice, Multiple Choice, Spelling Studio, and Comprehension filters
- Quick Practice, Normal Practice, Periodic Progress Check, and Challenge Mode
- corrective teaching and reinforcement
- pause/resume interactions
- XP, levels, 25 achievement definitions, reward categories, and reward status filtering
- learner Progress
- Parent Progress analytics
- accessibility controls
- read-aloud support
- Progress Portability & Data Control
- About the Developer
- Support Development
- recurring 2D study buddies

The handoff remains a prototype implementation. Production work still needs to separate domains/components, replace inline SVG icons with the Material Symbols layer, move structured progress to the production local persistence model, reconcile badge artwork by stable ID, and connect reviewed canonical content.

## MVP success condition

The MVP is successful if a learner can:

1. Open the app without an account.
2. Enter a first name or nickname.
3. Select one of the four language pairs.
4. Complete Normal Practice or Quick Practice.
5. Use Spelling Studio and comprehension activities.
6. Receive useful corrective explanations.
7. Build local mastery progress.
8. Complete Periodic Progress Checks.
9. Adjust accessibility preferences.
10. Export and import progress safely.
11. Earn meaningful badges and milestones.
12. Have a parent or guardian review local strengths and learning gaps.
13. Continue learning without sound, animation, sharing, or future 3D features.

Everything beyond that remains secondary until the core learning loop is validated.
