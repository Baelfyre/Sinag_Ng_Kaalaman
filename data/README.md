# Data and Content Workspace

This directory is the staging area for the educational content and evidence foundation of Sinag ng Kaalaman.

The current educational scope is **language only**: English, Filipino/Tagalog, and Hiligaynon. Mathematics and Science are future development areas and are intentionally deferred from the current content-validation contracts.

The project does **not** treat an external dictionary, corpus, textbook, video, learning resource, or AI-generated output as canonical learning content merely because it is accessible.

## Directory intent

```text
data/
|-- README.md
|-- source_registry.json            # evidence sources, authority tiers, license/use boundaries
|-- compliance_registry.json        # mapped curriculum, quality, safeguard, and privacy controls
|-- content_validation_schema.json  # required evidence structure for canonical language content
|-- raw/                            # future source snapshots approved for local intake
|-- staging/                        # future normalized but unverified records
|-- reviewed/                       # future language-reviewed records
|-- canonical/                      # future app-ready versioned content
`-- fixtures/                       # future deterministic non-production test fixtures
```

The future folders above describe the intended pipeline. They do not imply that source data has already been imported.

## Licensing boundary

Original Sinag ng Kaalaman educational content is licensed under **CC BY-NC-SA 4.0** unless a specific file states otherwise. See [`../LICENSES/CONTENT.md`](../LICENSES/CONTENT.md).

Third-party source material is **not** relicensed by Sinag ng Kaalaman. External records, corpora, dictionaries, datasets, videos, and reference material remain subject to their original licenses or conditions of use.

In particular, HiliSenti v1 is recorded as a `NONCOMMERCIAL_REFERENCE`: its dataset is CC BY-NC-SA 4.0, its repository code is MIT, and no automatic canonical import is authorized by the source registry.

See:

- [`source_registry.json`](source_registry.json)
- [`compliance_registry.json`](compliance_registry.json)
- [`content_validation_schema.json`](content_validation_schema.json)
- [`../THIRD_PARTY_NOTICES.md`](../THIRD_PARTY_NOTICES.md)
- [`../LICENSE`](../LICENSE)

## Evidence hierarchy

The source registry groups references by authority tier:

- **Tier A:** official curriculum, policy, or government learning-resource authority
- **Tier B:** institutional linguistic reference or academic language resource
- **Tier C:** curriculum-aligned presentation and teaching calibration
- **Tier D:** corpus or contextual usage evidence
- **Tier E:** historical or supplementary reference requiring additional review

A higher tier is not automatically sufficient for every question. The relevant evidence type must match the content decision being reviewed.

Examples:

- Filipino spelling and syllabification should use orthographic evidence.
- Hiligaynon lexical decisions should use Hiligaynon-specific institutional, academic, official-learning-resource, or corroborating usage evidence.
- YouTube and multimedia learning resources are useful for grade-level wording and presentation calibration, but they are not the sole authority for spelling, grammar, or translation.

## Intake stages

1. **Discover**
   - identify a useful source
   - record its language coverage and purpose

2. **Rights review**
   - record license or conditions of use
   - identify attribution, commercial-use, and share-alike constraints
   - do not assume that public availability means unrestricted reuse

3. **Extract**
   - import only the minimum useful subset when import is permitted
   - keep source identifiers and provenance

4. **Normalize**
   - map source material into project concepts
   - preserve original forms where needed for traceability

5. **Language review**
   - verify natural English, Filipino/Tagalog, and Hiligaynon usage
   - distinguish historical spelling from modern usage
   - reject forced one-to-one translations

6. **Orthography and syllabification review**
   - validate Filipino spelling against the documented orthographic references
   - validate Hiligaynon forms against language-appropriate references
   - store reviewed syllable boundaries for exercises rather than assuming automatic segmentation is always correct

7. **Grade-suitability review**
   - verify that definitions, examples, explanations, and distractors are suitable for grade-school learners
   - use curriculum and presentation references for calibration

8. **Exercise review**
   - validate multiple-choice distractors
   - validate spelling forms
   - validate corrective explanations
   - confirm that incorrect choices remain plausible but clearly wrong in context

9. **Coverage review**
   - map concepts to categories and curriculum references
   - treat approximately 100 concepts as a planning target, not a quota

10. **Canonicalize**
   - only evidence-backed, reviewed material enters the production question bank

## Language validation gates

The current language corpus must be able to answer these six questions before content is treated as fully reviewed:

1. Are Filipino/Tagalog translations natural, contextually appropriate, and correct?
2. Are Hiligaynon translations natural, contextually appropriate, and correct?
3. Are the syllable boundaries used in exercises linguistically defensible?
4. Are distractors plausible, clearly incorrect in context, and appropriate for grade-school learners?
5. Does the concept set provide sufficient curriculum and category coverage?
6. Are definitions, examples, explanations, and sentences suitable for grade-school learners?

These gates are mapped to stable control IDs in [`compliance_registry.json`](compliance_registry.json):

```text
LANG-CONTENT-001  Filipino / Tagalog linguistic validity
LANG-CONTENT-002  Hiligaynon linguistic validity
LANG-CONTENT-003  Syllabification validity
LANG-CONTENT-004  Distractor and exercise suitability
LANG-CONTENT-005  Concept and category coverage
LANG-CONTENT-006  Grade-school definition and example suitability
CONTENT-PROV-001  Provenance and rights traceability
```

## Source registry

`source_registry.json` is the machine-readable evidence registry.

It records, where applicable:

- stable `source_id`
- authority tier
- source role
- language coverage
- intended use
- validation dimensions
- status
- license or conditions-of-use summary
- commercial-use boundary
- whether canonical import is allowed

Source status values include:

- `REFERENCE_APPROVED`
- `CANDIDATE`
- `LICENSE_REVIEW_REQUIRED`
- `NONCOMMERCIAL_REFERENCE`
- `SOURCE_SPECIFIC_REVIEW`

These statuses describe intake and evidence readiness, not educational correctness.

## Compliance registry

`compliance_registry.json` maps project controls to external policy or quality references.

Current records include:

- MATATAG curriculum implementation references
- Filipino orthography through DepEd Order No. 34, s. 2013
- LRMDS quality-assurance references through DepEd Order No. 76, s. 2011 and the LRMDS guidelines
- supplementary learning-resource guidance
- child-protection safeguards
- privacy-by-design mapping to the Data Privacy Act of 2012

The registry is an engineering and evidence map. It is **not** a claim that Sinag ng Kaalaman is DepEd-accredited, formally certified, or legally audited.

## Content validation schema

`content_validation_schema.json` defines the evidence record expected for a candidate concept before canonicalization.

A validation record can capture:

- English, Filipino, and Hiligaynon review states
- evidence source IDs
- natural-usage and orthography decisions
- reviewed syllable boundaries
- distractor QA
- grade-school suitability
- curriculum/category coverage
- provenance and license state
- human review metadata

The schema is intended to become directly testable by Codex and CI tooling.

Automated validation may check structure, source IDs, review state, coverage completeness, provenance, and deterministic rules. Human review remains required where natural language quality, cultural suitability, ambiguity, or learner appropriateness cannot be decided reliably by automation alone.

## Canonicalization rule

A source citation by itself does not make content canonical.

Canonical content should have:

```text
concept
  + language evidence
  + orthography / syllabification evidence when applicable
  + grade-suitability evidence
  + curriculum/category mapping
  + provenance and license state
  + required human review
  = eligible for canonical promotion
```

If evidence conflicts, the item remains `REVIEW_REQUIRED` until the conflict is resolved. Do not average conflicting linguistic claims or choose a form merely because it appears more frequently online.

## Important boundary

Raw external data and canonical learning content must remain separate.

A source can be useful for research without being eligible for redistribution in the app. A source can also be authoritative for one validation dimension while being inappropriate for another.
