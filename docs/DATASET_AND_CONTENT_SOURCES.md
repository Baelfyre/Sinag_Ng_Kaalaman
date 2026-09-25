# Dataset and Content Sources

## Purpose

This document establishes the first source collection for Sinag ng Kaalaman.

The goal is not to accumulate the largest possible corpus. The goal is to build a traceable set of references that can support:

- age-appropriate vocabulary selection
- English definitions and semantic relationships
- Tagalog vocabulary and contextual usage
- Hiligaynon vocabulary and contextual usage
- spelling exercises
- sentence and comprehension exercises
- curriculum alignment for Grade 4 to Grade 5

## Source classes

### 1. Curriculum and age-alignment references

#### DepEd Learning Resource Portal

Use DepEd materials to understand Grade 4 and Grade 5 learning competencies, vocabulary expectations, reading tasks, and appropriate activity types.

Initial references include:

- Grade 4 Filipino materials covering word meaning, vocabulary development, unfamiliar words, context clues, nouns, adjectives, verbs, and comprehension.
- Grade 5 Filipino materials covering adjectives/adverbs, synonyms/antonyms, new vocabulary, sequencing, comprehension, and writing.
- Hiligaynon learning resources and storybooks available through the portal.

**Boundary:** DepEd resources are copyrighted and each item has its own Conditions of Use. They are curriculum/reference sources unless a specific item's rights explicitly allow the intended adaptation or redistribution.

Primary portal:

- https://lrmds.deped.gov.ph/

Examples identified during initial research:

- https://lrmds.deped.gov.ph/detail/9953
- https://lrmds.deped.gov.ph/detail/9954
- https://lrmds.deped.gov.ph/detail/21737
- https://lrmds.deped.gov.ph/detail/21882
- https://lrmds.deped.gov.ph/detail/22183

### 2. English lexical reference

#### Princeton WordNet

WordNet provides English synsets, definitions/glosses, synonyms, antonyms, and semantic relationships.

Potential uses:

- English concept definitions
- synonym/antonym candidate generation
- semantic validation
- distinguishing multiple senses of the same English word

WordNet permits use, copying, modification, and distribution subject to its license and required notices.

Official source:

- https://wordnet.princeton.edu/
- https://wordnet.princeton.edu/license-and-commercial-use

**Boundary:** WordNet glosses are not automatically child-friendly. Any definition used in the app must be rewritten or reviewed for Grade 4 to Grade 5 comprehension while preserving meaning and license obligations where derivative material is used.

### 3. Multilingual sentence corpus

#### Tatoeba

Tatoeba provides multilingual sentence data and configurable exports.

Potential uses:

- sentence-pattern research
- natural translation comparison
- candidate contextual examples
- English/Tagalog sentence-pair analysis
- possible Hiligaynon coverage assessment

The main textual exports are released under CC BY 2.0 FR, with some content available under CC0 1.0.

Official source:

- https://tatoeba.org/en/downloads

**Boundary:** Prefer CC0 material where practical. CC BY material requires attribution. Audio has per-contributor licensing and must be reviewed separately. Sentence suitability for children must still be reviewed.

### 4. Hiligaynon contextual corpus

#### HiliSenti

Repository:

- https://github.com/jjjardev/hilisenti
- https://huggingface.co/datasets/jjjardev/hilisenti-v1

HiliSenti contains a large Hiligaynon sentiment-analysis corpus with naturally occurring Hiligaynon and code-switching.

Potential uses:

- modern Hiligaynon usage research
- code-switching observation
- contextual vocabulary discovery
- sentence-pattern analysis

**License boundary:** dataset is CC BY-NC-SA 4.0. Treat it as `NONCOMMERCIAL_REFERENCE`. Do not silently mix HiliSenti-derived records into an unrestricted or future commercial core dataset.

### 5. Historical Philippine-language dictionaries

#### jhellingman/phildict

Repository:

- https://github.com/jhellingman/phildict

The repository contains digitized historical Philippine-language dictionary material, including Tagalog and Visayan/Hiligaynon-related works.

Potential uses:

- lexical cross-checking
- historical word forms
- source discovery
- English/Tagalog/Visayan comparison

**License boundary:** the repository does not declare a top-level GitHub license. The underlying dictionaries must be reviewed individually. Do not bulk-import the repository into canonical content.

#### Project Gutenberg: Diccionario Ingles-Español-Tagalog

Sofronio G. Calderón, 1915:

- https://www.gutenberg.org/ebooks/20738

Potential uses:

- historical English-to-Tagalog lexical reference
- cross-checking older Tagalog terms

Project Gutenberg identifies this work as public domain in the United States.

**Boundary:** historical spelling and usage can differ from modern Filipino. Jurisdiction and Project Gutenberg terms must be checked before redistribution. Modern-language review is mandatory.

### 6. Historical Bisayan language reference

Project Gutenberg hosts older Bisayan grammar and lexical materials that include Bisayan/Tagalog/English comparison tables.

Potential uses:

- linguistic comparison
- historical vocabulary research
- identifying candidate cognates or older forms

**Boundary:** `Bisayan` in historical sources must not automatically be treated as modern Hiligaynon. Language-variety review is required before any item is mapped into the Hiligaynon layer.

## Source priority

### High priority for the first canonical concept set

1. DepEd Grade 4 and Grade 5 competencies for age and activity alignment
2. Princeton WordNet for English sense and semantic structure
3. reviewed modern Tagalog references
4. reviewed modern Hiligaynon references
5. Tatoeba as a sentence-pattern/reference corpus

### Research-only / constrained sources

- HiliSenti due to non-commercial ShareAlike licensing
- historical dictionaries until modern-language and rights review are complete
- historical Bisayan references until language-variety review is complete

## First collection milestone

Before building a large question bank, collect and review approximately **100 canonical concepts** across child-relevant categories.

Suggested initial categories:

- family
- school
- home
- actions
- emotions
- character traits
- common objects
- food
- places and directions
- time and everyday routines

Each concept should eventually contain:

- stable concept ID
- category
- difficulty
- English expression and child-friendly explanation
- Tagalog expression and child-friendly explanation
- Hiligaynon expression and child-friendly explanation
- example sentences
- accepted spelling forms
- common mistakes where useful
- source provenance
- language-specific review status
- age review status
- exercise eligibility

## Dataset rule

External data supports the project. It does not replace editorial review.

The canonical question bank must remain smaller, reviewed, and trustworthy rather than becoming a direct dump of any external corpus.
