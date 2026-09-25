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

Optional challenge mode may use a 90-second countdown per question. The timer must stop when the learner submits an answer, enters a feedback state, or pauses the session.

A pause feature should preserve the current session state.

## Learning progression

Concept mastery should remain simple and understandable:

- New
- Learning
- Familiar
- Mastered

The application may track attempts, correct answers, incorrect answers, recency, and mastery percentage. The first implementation should use deterministic rules rather than machine learning.

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

## Progress and recovery

The learner's state should include:

- XP
- level
- sessions completed
- questions answered
- concept mastery
- language-pair performance
- badges
- progress-check history
- accessibility preferences

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

`img2threejs/img2threejs` may be evaluated later if procedural 3D character or reward elements become useful. It is not required for the MVP.

## MVP success condition

The MVP is successful if a child can:

1. Open the app without creating an account.
2. Select one of the four initial language pairs.
3. Complete a self-paced practice session.
4. Receive useful explanations after mistakes.
5. Accumulate progress and mastery locally.
6. Complete periodic progress checks.
7. Adjust reading and accessibility preferences.
8. Export and restore progress.

Everything beyond that is secondary until the learning loop is validated.
