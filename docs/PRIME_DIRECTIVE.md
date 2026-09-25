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

### 8. Progress must be recoverable

Local-first does not mean disposable.

Learner progress must be exportable, restorable, schema-versioned, and protected from accidental destructive actions.

### 9. Sources must remain traceable

Educational content derived from external materials must preserve provenance and licensing information.

Do not present externally sourced or AI-generated content as independently verified project knowledge without review.

### 10. AI assists, humans approve canonical learning content

AI may help draft questions, translations, explanations, or variants.

AI output is not automatically authoritative.

Canonical educational content requires review appropriate to its language, age level, meaning, and source.

### 11. Keep the system simple until evidence requires more

Do not add a server, cloud database, machine-learning model, remote AI dependency, 3D engine, or framework merely because it is available.

Complexity requires a demonstrated learner or maintenance need.

### 12. Preserve child agency

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
7. Learning motivation
8. Visual polish
9. Novelty
```

A lower priority must not override a higher priority without explicit review.

## Product test

Before accepting a major feature or design decision, ask:

> Does this help the child understand, retain, access, or safely recover their learning?

If the answer is unclear, the feature should be deferred until its value can be demonstrated.

## Scope guard

The initial project is intentionally bounded to:

- Grade 4 to Grade 5 learners
- English, Tagalog, and Hiligaynon
- four initial language pairs
- local browser persistence
- contextual quiz activities
- corrective teaching
- deterministic mastery tracking
- periodic progress checks
- XP, levels, badges, and lightweight celebrations
- accessibility controls
- progress export and restore

Expansion beyond this boundary should happen only after the core learning loop is validated.

## Final rule

**The app must never become so focused on being a game, a technology showcase, or a content repository that it stops being a clear and supportive learning tool for the child.**
