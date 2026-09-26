# Data and Content Workspace

This directory is the staging area for the educational content and dataset foundation of Sinag ng Kaalaman.

The project does **not** treat an external dictionary, corpus, textbook, or AI-generated output as canonical learning content merely because it is accessible.

## Directory intent

```text
data/
|-- README.md
|-- source_registry.json
|-- raw/                 # future source snapshots approved for local intake
|-- staging/             # future normalized but unverified records
|-- reviewed/            # future language-reviewed records
|-- canonical/           # future app-ready versioned content
`-- fixtures/            # future non-production test fixtures
```

The folders above describe the intended pipeline. They do not imply that source data has already been imported.

## Licensing boundary

Original Sinag ng Kaalaman educational content is licensed under **CC BY-NC-SA 4.0** unless a specific file states otherwise. See [`../LICENSES/CONTENT.md`](../LICENSES/CONTENT.md).

Third-party source material is **not** relicensed by Sinag ng Kaalaman. External records, corpora, dictionaries, datasets, and reference material remain subject to their original licenses or conditions of use.

In particular, HiliSenti v1 is currently recorded as a `NONCOMMERCIAL_REFERENCE`: its dataset is CC BY-NC-SA 4.0, its repository code is MIT, and no canonical import is currently authorized by the source registry.

See:

- [`source_registry.json`](source_registry.json)
- [`../THIRD_PARTY_NOTICES.md`](../THIRD_PARTY_NOTICES.md)
- [`../LICENSE`](../LICENSE)

## Intake stages

1. **Discover**
   - identify a useful source
   - record its language coverage and purpose

2. **Rights review**
   - record license or conditions of use
   - identify attribution, commercial-use, and share-alike constraints
   - do not assume that public GitHub availability means unrestricted reuse

3. **Extract**
   - import only the minimum useful subset
   - keep source identifiers and provenance

4. **Normalize**
   - map source material into project concepts
   - preserve original forms where needed for traceability

5. **Language review**
   - verify natural English, Tagalog, and Hiligaynon usage
   - distinguish historical spelling from modern usage
   - reject forced one-to-one translations

6. **Age review**
   - verify grade-school suitability
   - simplify definitions without changing meaning

7. **Exercise review**
   - validate multiple-choice distractors
   - validate spelling forms
   - validate corrective explanations

8. **Canonicalize**
   - only reviewed material enters the production question bank

## Source registry

`source_registry.json` is the current machine-readable registry.

Source status values used initially:

- `REFERENCE_APPROVED`
- `CANDIDATE`
- `LICENSE_REVIEW_REQUIRED`
- `NONCOMMERCIAL_REFERENCE`
- `SOURCE_SPECIFIC_REVIEW`

These statuses describe intake readiness, not educational correctness.

## Important boundary

Raw external data and canonical learning content must remain separate.

A source can be useful for research without being eligible for redistribution in the app.
