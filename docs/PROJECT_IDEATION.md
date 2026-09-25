# Project Ideation

## Working title

**Sinag ng Kaalaman**

The name means a ray or light of knowledge. The product should help children gradually understand unfamiliar words and concepts instead of treating language learning as a simple right-or-wrong quiz.

## Problem

Some Grade 4 to Grade 5 learners primarily speak or understand English and have difficulty interpreting Filipino or Hiligaynon vocabulary, especially when the words appear inside schoolwork, stories, or contextual sentences.

The project addresses that gap through short, repeatable, context-based learning activities.

## Target learner

- Grade 4 to Grade 5
- Approximately ages 9 to 10
- English-dominant or English-comfortable learner
- Developing Filipino and/or Hiligaynon vocabulary and comprehension

The interface should feel like a modern educational game, not a preschool app and not a formal learning-management system.

## Learner identity

The application should know enough about the learner to personalize the experience without collecting unnecessary personal data.

For the MVP:

- ask only for the child's first name or preferred nickname
- do not ask for age because the application is already designed for a Grade 4 to Grade 5 audience
- do not require a full legal name, birth date, email address, account, or login
- store the name locally with learner progress
- allow the learner or guardian to edit the name later
- include the name in exported progress backups

The name may be used in greetings, encouragement, progress summaries, and restore previews.

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

## Question and activity types

Initial supported activity patterns may include:

- Fill in the blank using contextual clues
- Meaning matching
- Reverse translation
- Sentence comprehension
- Synonym or antonym recognition
- Context-based vocabulary selection

The MVP does not need all activity types on day one. Content quality is more important than variety.

## Corrective teaching

An incorrect answer must become a teaching opportunity.

When the learner chooses incorrectly, the application should:

1. Show the selected answer and its meaning.
2. Identify the correct answer.
3. Explain what the correct answer means.
4. Explain why it fits the sentence or context better.
5. Mark the concept for reinforcement in a later question or session.

The application must avoid punitive wording such as `WRONG`, `FAILED`, or similar high-pressure feedback.

## Session models

### Quick Practice

- 5 questions
- Short review or warm-up

### Regular Practice

- 10 questions
- Default learning session

### Progress Check

- 20 questions
- Slightly longer periodic assessment
- Intended to measure retention, not speed

A proposed initial cadence is a Progress Check after every 4 regular sessions, making every 5th scheduled session a longer review.

## Session composition

A normal session should mix:

- newly introduced concepts
- concepts currently being learned
- concepts previously answered incorrectly
- older mastered concepts for retention

Progress checks should draw from recent, difficult, and previously mastered concepts.

## Pacing

The default mode is self-paced.

Flow:

`Question -> Answer -> Explanation -> Next`

Optional challenge mode may use a 90-second countdown. The final timer scope must be defined intentionally during implementation because the current prototype uses one 90-second timer across the active challenge session rather than resetting it for each question.

A pause feature should preserve the current session state.

## Learning progression

Concept mastery should remain simple and understandable:

- New
- Learning
- Familiar
- Mastered

The application may track attempts, correct answers, incorrect answers, recency, and mastery percentage. The first implementation should use deterministic rules rather than machine learning.

## Parent Progress analytics

The app should help a parent or guardian understand where the learner is improving and where additional practice is needed.

This should be a local reporting feature built from the child's stored learning history, not a remote analytics or tracking service.

The parent view should answer questions such as:

- Which language pair is the child strongest in?
- Which language pair needs the most support?
- Which content categories are strongest?
- Which categories are still difficult?
- Which concepts are repeatedly missed?
- Which previously difficult concepts are improving?
- How are Progress Check results changing over time?
- How much of the current content is New, Learning, Familiar, or Mastered?

Useful initial summaries include:

- accuracy by language pair
- mastery by language pair
- accuracy by category
- mastery by category
- concepts needing practice
- consistently strong concepts
- first-attempt success rate
- reinforcement success
- recent session history
- Progress Check trend

Analytics should remain descriptive. The application should not infer intelligence, personality, ability, or other personal traits from quiz performance.

## Gamification

Gamification supports learning but must not become the product's primary objective.

Initial mechanics:

- XP
- Levels
- Badges
- Practice streaks
- Achievement milestones
- Progress bars
- Character celebrations

Mistakes should not remove XP.

Rewards should represent real learning actions such as completing practice, mastering difficult concepts, or maintaining consistency.

## Character direction

Use recurring school-age child characters as learning companions.

Characters should:

- appear approximately the same age as the learner
- feel like classmates or study buddies rather than teachers
- be expressive but not preschool-like
- support the lesson without competing with the content

Typical usage:

- dashboard greeting
- quiz companion
- correct-answer reaction
- supportive incorrect-answer explanation
- progress and level-up celebration

## 3D character direction

The study-buddy characters should eventually have 3D versions while preserving the current approved 2D illustrations as the visual reference and fallback.

The 3D layer should be treated as a presentation enhancement, not part of the learning engine.

Possible uses:

- dashboard greetings
- short correct-answer reactions
- supportive incorrect-answer reactions
- badge unlocks
- level-up celebrations
- rewards or character gallery

Requirements:

- 2D fallback must remain available
- 3D must not block lesson content
- 3D assets should load lazily
- reduced-motion preferences must be respected
- motion should reduce or stop during reading-heavy states
- WebGL failure or poor device performance must not prevent learning

`img2threejs/img2threejs` may be evaluated as a production aid for reconstructing approved character references into procedural Three.js models.

## Visual direction

The design reference is a colorful Grade 4 to Grade 5 quiz-bee atmosphere, but the final interface should be substantially cleaner.

Use:

- bright but controlled colors
- large rounded answer cards
- strong hierarchy
- clear progress indicators
- large touch targets
- moderate celebratory animation

Avoid:

- permanent visual clutter
- constant confetti
- multiple competing characters on every screen
- permanent timers
- team-versus-team pressure
- preschool visual language

## Accessibility

Accessibility is part of the product, not a later enhancement.

Initial accessibility controls:

- child-friendly font profile
- standard font profile
- hyperlegible profile
- dyslexia-friendly profile
- optional script or handwriting profile
- text size
- line spacing
- letter spacing
- word spacing
- high contrast
- reduced motion
- read question aloud
- read answer choices aloud

Script or handwriting fonts should be optional and must never be the default quiz font.

3D character animation must obey the same reduced-motion preference and must never contain information required to answer a question.

## Progress and recovery

The learner's state should include:

- first name or nickname
- XP
- level
- sessions completed
- questions answered
- concept mastery
- category performance
- language-pair performance
- badges
- progress-check history
- accessibility preferences
- structured attempt history sufficient for local Parent Progress analytics

Because storage is local-first, the application must support:

- Export Progress
- Restore Progress

The exported file must be schema-versioned and validated before restoration.

## Initial content strategy

Start with approximately 100 canonical concepts across a limited number of child-relevant categories such as:

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

Each concept should be language-neutral at its core and then map to English, Tagalog, and Hiligaynon expressions, definitions, and examples.

This avoids treating translation as a simplistic one-to-one word replacement.

## Content sources and references

Potential sources include:

- open educational materials
- public-domain dictionaries and books
- appropriately licensed language resources
- curriculum-aligned references
- curated language corpora

`jjjardev/hilisenti` may be useful as a Hiligaynon linguistic and contextual reference. Its current dataset license is CC BY-NC-SA 4.0, so HiliSenti-derived material must remain provenance-aware and must not silently enter unrestricted or commercial content paths.

`img2threejs/img2threejs` may be evaluated for procedural 3D character production. Its role should remain isolated from the learning and content domains.

## Current prototype status

The supplied Open Design prototype already demonstrates:

- the four language pairs
- self-paced and challenge interaction modes
- corrective teaching
- reinforcement
- XP, levels, and badges
- learner progress UI
- accessibility controls
- browser read-aloud support
- child study-buddy illustrations

It does not yet implement the full canonical scope, including:

- Sinag ng Kaalaman branding
- first-name onboarding
- 5 / 10 / 20 session lengths
- scheduled Progress Checks
- parent analytics
- backup export and restore
- pause and active-session recovery
- IndexedDB persistence
- 3D study-buddy presentation

See `CURRENT_PROTOTYPE_AUDIT.md` for the reconciled prototype review.

## MVP success condition

The MVP is successful if a child can:

1. Open the app without creating an account.
2. Enter a first name or preferred nickname.
3. Select one of the four initial language pairs.
4. Complete a self-paced practice session.
5. Receive useful explanations after mistakes.
6. Accumulate progress and mastery locally.
7. Complete periodic progress checks.
8. Adjust reading and accessibility preferences.
9. Export and restore progress.
10. Have a parent or guardian review local strengths and learning gaps.
11. Continue learning even when 3D presentation is unavailable.

Everything beyond that is secondary until the learning loop is validated.
