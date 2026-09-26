# UI Semantics and Material Symbols

## Purpose

This document is the canonical handoff reference for learner-facing wording, UI semantics, and icon selection derived from the current Open Design export in `Sinag_Design`.

When older planning documents use different UI labels, the wording in this document takes precedence for the production interface unless a later design review explicitly changes it.

The current design language is intentionally friendly, concrete, and child-readable. Internal domain names may remain technical, but learner-facing copy should preserve the wording below.

## Product identity

- Product name: **Sinag ng Kaalaman**
- Journey label: **Filipino-English Language Journey**
- Learner level label: **Grade School Level**
- Platform: browser-based, local-first, responsive, and device-neutral

Do not reintroduce `Grade 4 & 5` as the primary learner-facing level label. Historical curriculum notes may retain the original Grade 4 to Grade 5 target when context requires it.

## Primary navigation wording

Use these labels consistently:

| Surface | Preferred label |
| --- | --- |
| Main dashboard | Home |
| Learning entry point | Practice |
| Learner analytics | Progress |
| Achievements | Rewards |
| Guardian analytics | Parent Progress |
| Preferences | Settings |
| Developer information | About the Developer |
| Optional project support | Support Development |

## Home and language-path wording

Preferred learner-facing copy includes:

- **Start Practice**
- **Take Progress Check**
- **Choose a language path**
- **See all 4 paths**
- **Choose your language pair**
- **Back home**
- **Back to language pairs**

The four initial paths remain:

- English -> Tagalog
- English -> Hiligaynon
- Tagalog -> Hiligaynon
- Hiligaynon -> English

## Practice semantics

The Open Design wording is preferred over earlier planning labels.

### Exercise style

Use:

- **Mixed Practice (All Types)**
- **Multiple Choice**
- **Spelling Studio**
- **Comprehension**

`Spelling Studio` is the learner-facing umbrella for partial spelling, full spelling, missing-syllable, and syllable-ordering activities.

### Session mode

Use:

| Mode | Questions | Preferred description |
| --- | ---: | --- |
| **Normal Practice** | 10 | Self-paced questions blending recognition and active recall with supportive review. |
| **Quick Practice** | 5 | Focused daily review for a shorter session. |
| **Periodic Progress Check** | 20 | Milestone assessment combining recognition and active spelling. |
| **Challenge Mode (Optional 90-second timer)** | bounded by session configuration | Lighthearted timed practice with no penalty and no letter grades. |

`Normal Practice` replaces the earlier learner-facing label `Regular Practice`.

`Periodic Progress Check` is the preferred full UI label. Internal code may use identifiers such as `progress_check` or `check`.

The default flow remains:

`Question -> Answer -> Explanation -> Next`

## Progress and reward wording

Preferred progress copy includes:

- **Progress to Level N**
- **Total Sunshine Points**
- **Concepts mastered**
- **Milestones celebrated**
- **Rewards & Milestones**
- **Badges Earned**
- **In Progress**
- **Learner Rank**

Reward status labels:

- **Earned**
- **In Progress**
- **Locked**

A badge detail view may use **Unlocked & Earned** after a milestone has been completed.

## Reward categories

Use the Open Design category wording:

| ID | English label | Filipino support label |
| --- | --- | --- |
| `getting-started` | Getting Started | Unang Hakbang |
| `consistency` | Practice & Consistency | Kasipagan |
| `exploration` | Language Exploration | Pagtuklas ng Wika |
| `mastery` | Vocabulary & Mastery | Bokabularyo |
| `spelling` | Spelling & Recall | Baybay at Pagsulat |
| `milestones` | Progress & Milestones | Liwanag ng Dunong |

## Reward display names

The stable achievement ID is the implementation identity. Display names and taglines follow the current Open Design wording.

| ID | Display name | Tagline |
| --- | --- | --- |
| `first-steps` | First Steps | Unang Hakbang |
| `first-ray` | First Ray | Unang Sinag |
| `curiosity-seed` | Curiosity Seed | Binhi ng Dunong |
| `first-check` | Check Milestone | Unang Pagsusuri |
| `streak-3` | 3-Day Spark | Tatlumpung Sinag |
| `steady-sprout` | Steady Sprout | Matiyagang Usbong |
| `sessions-10` | Dedicated Learner | Masigasig na Mag-aaral |
| `streak-7` | Weekly Radiance | Lingguhang Liwanag |
| `explorer-en-tl` | Tagalog Trailblazer | Tuklas Tagalog |
| `explorer-en-hil` | Hiligaynon Harmony | Himig Hiligaynon |
| `explorer-tl-hil` | Island Bridge | Tulay ng Wika |
| `explorer-hil-en` | Western Visayas Star | Tala ng Kanluran |
| `all-paths` | Quad-Language Adventurer | Apat na Daan |
| `mastery-10` | Budding Scholar | Uusbong na Iskolar |
| `word-growth` | Deep Roots | Malalim na Ugat |
| `mastery-25` | Knowledge Bloom | Bukas na Aklat |
| `category-master` | Domain Champion | Kampeon sa Kategorya |
| `spelling-starter` | Letter Pioneer | Unang Titik |
| `spelling-sprout` | Word Builder | Tagabuo ng Salita |
| `spelling-star` | Orthography Star | Tala ng Baybay |
| `spelling-retry` | Correction Master | Galing sa Pagwawasto |
| `improvement-star` | Rising Sun | Sumisikat na Araw |
| `progress-climber` | Steady Climber | Matiyagang Pantaas |
| `practice-pays-off` | Persistence Gold | Gintong Sikap |
| `learning-light` | Sinag Luminary | Tunay na Sinag |

Existing image filenames do not need to determine the learner-facing title. During integration, map artwork to the stable achievement ID. If an older filename contains an earlier working title, the stable ID and current display name take precedence.

## Parent Progress wording

Use **Parent Progress** for the parent or guardian analytics area.

The design frames it as a protected adult utility rather than a surveillance dashboard.

Preferred wording includes:

- Parent Progress
- Insights for parents and guardians
- Data & Progress Portability
- Return to Learner View

Analytics remain local and descriptive.

## Progress portability wording

The feature name is **Progress Portability & Data Control** in Settings and may appear as **Data & Progress Portability** in Parent Progress.

Primary actions:

- **Export Progress**
- **Export Progress Backup**
- **Import Progress**
- **Import Progress Backup**
- **Reset Progress**
- **Return to Learner View**

Use `Import Progress` as the feature/action name. A confirmation dialog may explain that the imported backup will **restore** or replace current progress, but `Restore Progress` should not replace the primary `Import Progress` label.

## Material Symbols policy

Production UI icons should use **Material Symbols Rounded** for normal application actions and semantic UI states.

The Open Design export currently uses an inline SVG icon registry. Treat those SVGs as prototype placeholders, not the production icon dependency.

Use a shared icon component or helper rather than embedding independent SVG path definitions throughout feature code.

Recommended default presentation:

```css
.material-symbols-rounded {
  font-variation-settings:
    "FILL" 0,
    "wght" 500,
    "GRAD" 0,
    "opsz" 24;
}
```

Filled variants may be used for active navigation, selected states, or prominent milestones when the visual hierarchy benefits from it.

## Canonical Material Symbols map

The mapping below follows the current Open Design icon intent while moving implementation to Material Symbols Rounded.

| Open Design semantic | Material Symbol Rounded | Typical use |
| --- | --- | --- |
| `home` | `home` | Home navigation |
| `book` | `menu_book` | Practice, Multiple Choice, Normal Practice, language learning |
| `chart` | `monitoring` | Progress navigation and analytics |
| `star` | `star` | Rewards, Progress Check emphasis, milestone emphasis |
| `settings` | `settings` | Settings |
| `arrow` / `arrow_forward` | `arrow_forward` | Continue, path selection, forward actions |
| `back` | `arrow_back` | Back navigation |
| `speaker` / `volume_up` | `volume_up` | Read-aloud and Listen to Question |
| `check` | `check` | Completed state and concise confirmation |
| `check_circle` | `check_circle` | Strong success state and Check Milestone |
| `retry` | `refresh` | Retry question or activity |
| `replay` | `replay` | Retry spelling / replay action |
| `clock` | `timer` | Challenge timer |
| `pause` | `pause` | Pause Session |
| `play` | `play_arrow` | Resume Session |
| `shield` | `shield` | Parent utility, privacy, confirmation, protected action |
| `user` | `person` | Learner profile / Return to Learner View |
| `sparkles` | `auto_awesome` | Mixed Practice, positive discovery, All Categories |
| `spellcheck` | `spellcheck` | Spelling Studio and spelling category |
| `keyboard` | `keyboard` | Typed-answer activities |
| `lightbulb` | `lightbulb` | Comprehension, hints, explanation |
| `rotate` | `restart_alt` | Reset Progress |
| `cross` | `close` | Dismiss / error close semantics |
| `code` | `code` | About the Developer / developer surface |
| `external` | `open_in_new` | External link indicator |
| `compass` | `explore` | Getting Started, exploration milestone |
| `flame` | `local_fire_department` | Practice & Consistency |
| `sprout` | `eco` | Vocabulary growth / mastery |
| `award` | `workspace_premium` | Progress & Milestones / achievement category |
| `trophy` | `emoji_events` | Major reward or milestone when needed |
| `lock` | `lock` | Locked achievement |

### Additional production symbols

The production implementation should use semantically direct Material Symbols for portability actions even though the prototype currently reuses decorative icons:

| Action | Material Symbol Rounded |
| --- | --- |
| Export Progress | `download` |
| Import Progress | `upload_file` |
| Reset Progress | `restart_alt` |
| Earned | `check_circle` |
| In Progress | `hourglass_top` |
| Locked | `lock` |

This is a semantic implementation improvement and does not change the preferred Open Design wording.

## Brand-logo exception

Do not replace external platform identities with Material Symbols.

Use dedicated recognizable brand assets for:

- GitHub
- LinkedIn
- Facebook
- Buy Me a Coffee

Material Symbols such as `open_in_new` may accompany an external link, but they must not substitute for the platform logo when the platform identity is part of the UI.

## Badge-art exception

Individual achievement cards should use the approved badge artwork when available.

Material Symbols are appropriate for:

- category headers
- status chips
- filters
- empty states
- fallback rendering when badge artwork is unavailable

They should not replace completed canonical badge illustrations merely for implementation convenience.

## Accessibility semantics

Icons are supplementary unless an icon-only control is deliberately designed.

Requirements:

- icon-only interactive controls require an accessible name
- decorative symbols should be hidden from assistive technology
- state must not depend on icon shape or color alone
- visible text labels are preferred for primary child-facing actions
- focus indication must remain visible
- reduced-motion settings must not affect the semantic meaning of icons

## Implementation rule

Do not bind domain behavior to a glyph name.

Prefer semantic component usage such as:

```text
Action: export progress
Label: Export Progress Backup
Icon: download
```

rather than using `book` or `sparkles` as the action identity.

UI copy, application behavior, and icon selection should remain separate so icons can change without changing the domain contract.
