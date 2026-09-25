# Celebration Effects

## Purpose

Sinag ng Kaalaman may use lightweight celebratory visual effects to make real learning milestones feel rewarding and memorable.

Celebration effects are presentation feedback only. They must never be required to understand lesson content, determine correctness, or continue a session.

## Effect hierarchy

Use different effect intensity according to the importance of the event.

### Level 1: Micro celebration

Appropriate for ordinary positive feedback such as a correct answer or a correctly spelled word.

Possible effects:

- small sparkle or glitter burst near the answer card
- brief glow around the correct answer
- subtle star particles
- short study-buddy reaction

Duration should be brief and should not delay the learner from continuing.

### Level 2: Session celebration

Appropriate for completing a Quick Practice, Regular Practice, or Progress Check.

Possible effects:

- short confetti burst
- small celebratory banner
- XP animation
- badge progress animation
- study-buddy celebration

The educational results summary must remain readable while the effect runs.

### Level 3: Milestone celebration

Reserve stronger effects for meaningful milestones such as:

- badge unlocked
- level up
- concept mastery milestone
- spelling milestone
- completing all four initial language paths
- major practice streak milestone
- substantial Progress Check improvement

Possible effects:

- larger confetti burst
- glitter or sparkle field
- celebratory ribbon or banner
- badge reveal animation
- short character celebration
- optional milestone sound effect

These effects should be uncommon enough to remain meaningful.

## Visual direction

Celebration effects should inherit the Sinag ng Kaalaman brand language:

- warm yellow or gold rays
- blue accents
- green growth accents
- stars and sparkles
- rounded banners and ribbons
- simple leaf, book, or sun-inspired particles where appropriate

Avoid visual effects that make the product feel like a casino, loot-box game, or high-pressure competitive platform.

## Confetti and glitter rules

Confetti and glitter are allowed, but not continuously.

Do not:

- run confetti during normal reading
- cover question text or explanations
- fire large confetti effects for every correct answer
- create continuous particle backgrounds
- block buttons while an effect finishes
- require the learner to wait for an animation before continuing

Particles should be decorative overlays with `pointer-events: none` or an equivalent non-blocking implementation.

## Banners

Banners can be used for short milestone messages such as:

- `Level Up!`
- `Badge Unlocked!`
- `Progress Check Complete!`
- `New Word Mastered!`

Banners should use clear text and must not rely on animation or color alone to communicate the event.

## Accessibility

Celebrations must respect accessibility preferences.

### Reduced motion

When reduced motion is enabled:

- remove falling or flying confetti
- remove sweeping banners and large transforms
- avoid rapid scaling or bouncing
- replace particle movement with a static highlight, badge, or short fade when practical

The same achievement message and information must still appear.

### Visual sensitivity

Avoid:

- flashing effects
- rapid repeated brightness changes
- high-frequency particle motion
- full-screen strobing or pulsing

### Audio

Celebration sounds are optional and belong to the separate sound-effects system.

- muted mode must preserve the full experience
- visual feedback must exist for every sound cue
- celebration audio must not overlap read-aloud speech

## Semantic event model

Implementation should trigger effects from semantic learning events instead of coupling particle code directly to quiz logic.

Suggested events:

```text
ANSWER_CORRECT
SPELLING_CORRECT
SESSION_COMPLETE
PROGRESS_CHECK_COMPLETE
CONCEPT_MASTERED
BADGE_UNLOCKED
LEVEL_UP
STREAK_MILESTONE
LANGUAGE_PATH_MILESTONE
```

A celebration service or presentation layer can map these events to effects.

Example:

```text
BADGE_UNLOCKED
      |
      +--> badge reveal
      +--> short confetti burst
      +--> optional sound
      `--> study-buddy reaction
```

Learning state must remain correct even if the celebration renderer fails.

## Performance

Effects should remain lightweight for a browser-based, device-neutral application.

Prefer:

- CSS transforms and opacity for simple effects
- a small reusable particle implementation
- bounded particle counts
- short effect durations
- cleanup immediately after an animation completes

Do not add a heavy rendering dependency solely for confetti, glitter, or banners unless testing shows a clear need.

## Validation

Before treating celebration effects as complete, validate that:

- question and explanation text remain readable
- buttons remain usable during effects
- effects do not alter scoring or learning state
- effects stop and clean up correctly
- repeated navigation does not accumulate particle elements or timers
- reduced-motion mode removes unnecessary movement
- celebration audio, if enabled, does not interfere with read-aloud
- the app remains fully usable if the celebration layer is unavailable

## Governing rule

**Celebrate meaningful learning progress without turning every interaction into a spectacle.**
