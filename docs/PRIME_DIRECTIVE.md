# Prime Directive

## Prime Directive

> **Sinag ng Kaalaman exists to help children understand language through clear context, supportive correction, repetition, accessibility, and recoverable progress. Learning correctness, child well-being, privacy, and comprehension take priority over speed, scores, gamification, visual novelty, and technical complexity.**

This directive governs product, content, design, and implementation decisions.

## Governing principles

### 1. Teach, do not merely score

A question is not complete when the learner selects an answer.

If the learner is incorrect, the application must help them understand:

- what they selected
- what that answer means
- what the correct answer is
- why the correct answer fits the context

Mistakes are part of the learning loop, not punishments.

### 2. Understanding is more important than speed

Normal activities are self-paced.

Timed modes may exist as optional challenges, but the learner must not be pressured to rush through explanations or feedback.

### 3. Accuracy is more important than content volume

Do not expand the question bank simply to increase its size.

A smaller reviewed corpus is preferable to a larger uncertain corpus.

When linguistic accuracy is unknown, mark the content as pending review.

### 4. Context is more important than literal translation

Languages do not always map word-for-word.

The project should represent concepts, natural usage, and contextual meaning rather than forcing simplistic translation equivalence.

### 5. Accessibility is part of correctness

A lesson that is technically accurate but difficult for the learner to read, navigate, hear, or understand is incomplete.

Accessibility must be considered in design, implementation, testing, and content presentation.

### 6. Gamification serves learning

XP, levels, badges, streaks, characters, and celebrations exist to support practice and motivation.

They must never override educational quality or create unnecessary pressure.

Do not punish incorrect answers by removing progress.

### 7. Privacy by default

The MVP is local-first.

Do not require accounts, cloud storage, tracking, or unnecessary personal information when local storage is sufficient.

A child's learning data should remain under the learner or guardian's control.

The MVP may ask for the child's first name or preferred nickname because it directly supports personalization. It should not require age, birth date, full legal name, email, or account registration.

### 8. Parents should see learning evidence, not surveillance

A parent or guardian should be able to understand where the child is doing well and where more practice is needed.

Parent Progress analytics must be derived from local educational activity and should show concrete learning evidence such as language-pair performance, category performance, mastery, recurring errors, and Progress Check trends.

Do not turn parent reporting into behavioral tracking, advertising analytics, or hidden profiling.

Do not infer intelligence, personality, diagnosis, or capability from quiz results.

### 9. Progress must be recoverable

Local-first does not mean disposable.

Learner progress, profile identity, settings, and learning history needed for recovery must be exportable, restorable, schema-versioned, and protected from accidental destructive actions.

### 10. Sources must remain traceable

Educational content derived from external materials must preserve provenance and licensing information.

Do not present externally sourced or AI-generated content as independently verified project knowledge without review.

### 11. AI assists, humans approve canonical learning content

AI may help draft questions, translations, explanations, or variants.

AI output is not automatically authoritative.

Canonical educational content requires review appropriate to its language, age level, meaning, and source.

### 12. Keep the system simple until evidence requires more

Do not add a server, cloud database, machine-learning model, remote AI dependency, analytics service, 3D engine, or framework merely because it is available.

Complexity requires a demonstrated learner, parent, accessibility, or maintenance need.

### 13. 3D presentation must remain optional to learning

Three-dimensional study-buddy characters may improve delight, encouragement, and reward presentation, but they must never become necessary to understand or complete a lesson.

The application must preserve:

- a complete 2D fallback
- acceptable performance on representative learner devices
- reduced-motion behavior
- readable, distraction-controlled lesson states
- graceful operation when WebGL or the 3D layer fails

### 14. Preserve child agency

The learner should be able to:

- pause
- continue when ready
- review mistakes
- adjust reading preferences
- choose practice modes

The system should guide rather than coerce.

## Decision hierarchy

When project goals conflict, use this order:

```text
1. Child safety and well-being
2. Educational correctness
3. Accessibility and comprehension
4. Privacy and data control
5. Progress integrity and recoverability
6. Maintainability and simplicity
7. Useful learning visibility for the learner and parent
8. Learning motivation
9. Visual polish
10. Novelty
```

A lower priority must not override a higher priority without explicit review.

## Product test

Before accepting a major feature or design decision, ask:

> Does this help the child understand, retain, access, or safely recover their learning, or help the parent understand concrete learning progress without compromising the child's privacy or experience?

If the answer is unclear, the feature should be deferred until its value can be demonstrated.

## Scope guard

The initial project is intentionally bounded to:

- Grade 4 to Grade 5 learners
- English, Tagalog, and Hiligaynon
- four initial language pairs
- first name or preferred nickname only for learner identity
- local browser persistence
- contextual quiz activities
- corrective teaching
- deterministic mastery tracking
- periodic Progress Checks
- local Parent Progress analytics
- XP, levels, badges, and lightweight celebrations
- accessibility controls
- progress export and restore
- school-age study-buddy characters
- optional 3D study-buddy presentation with a required 2D fallback

Expansion beyond this boundary should happen only after the core learning loop is validated.

## Final rule

**The app must never become so focused on being a game, a technology showcase, an analytics product, or a content repository that it stops being a clear and supportive learning tool for the child.**
