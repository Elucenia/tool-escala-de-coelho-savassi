<!-- ELUCENIA technical documentation · escala-de-coelho-savassi · en · no clinical/professional/rights approval -->

# Coelho–Savassi family risk scale

[conditions, sources and permissions](https://elucenia.org/en/tools/escala-de-coelho-savassi)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Bedbound people (confined to the home because they cannot move independently)

`acamado`

people · optional · range: 0–20

### People with physical disabilities

`def_fisica`

people · optional · range: 0–20

### People with mental disabilities

`def_mental`

people · optional · range: 0–20

### People with severe malnutrition

`desnutricao`

people · optional · range: 0–20

### Poor sanitation conditions at home

`saneamento`

### People with substance dependence (including alcohol dependence)

`drogadicao`

people · optional · range: 0–20

### Unemployed people

`desemprego`

people · optional · range: 0–20

### People unable to read and write

`analfabetismo`

people · optional · range: 0–20

### Children younger than 6 months

`menor6m`

people · optional · range: 0–20

### People older than 70 years

`maior70`

people · optional · range: 0–20

### People with arterial hypertension

`has`

people · optional · range: 0–20

### People with diabetes mellitus

`dm`

people · optional · range: 0–20

### Number of residents

`moradores`

people · range: 1–40

### Number of rooms (including bathroom and kitchen)

`comodos`

rooms · range: 1–40

## Method edition

Coelho–Savassi 2004; 2013 systematization; sentinel factors per person, sanitation per family; R3 ≥9 as a conservative local choice.

## Documented formula

Each individual marker scores per person: bedbound, physical disability, intellectual disability and severe malnutrition 3; drug dependence and unemployment 2; illiteracy, age under 6 months, over 70 years, hypertension and diabetes 1. Poor sanitation: 3 (once per family).

Residents/room ratio: greater than 1 = 3; equal to 1 = 2; less than 1 = 0.

## Limits and population

Coelho–Savassi prioritizes families in the context of Brazilian primary care; it does not estimate an individual probability of disease or describe the entire family dynamic. Count personal sentinel factors per person and the sanitation condition once per family. The consulted tables from 2004 and 2013 state R3 above 9 and leave the score of 9 without an explicit range. This implementation adopts R3 from 9 as a conservative local choice, not as a cutoff literally established in those tables. Check the operational definitions of age and sentinel factors and review the family situation periodically.

## References

- [Coelho FLG, Savassi LCM. Aplicação de Escala de Risco Familiar como instrumento de priorização das Visitas Domiciliares. Rev Bras Med Fam Comunidade, 2004.](https://doi.org/10.5712/rbmfc1(2)104)

- [Savassi LCM, Lage JL, Coelho FLG. Sistematização de instrumento de estratificação de risco familiar: a Escala de Risco Familiar de Coelho-Savassi. J Manag Prim Health Care, 2013.](https://doi.org/10.14295/jmphc.v3i2.155)

- [Coelho/Savassi2004](https://rbmfc.org.br/rbmfc/article/download/104/pdf/296)

- [Savassi2013,systematization](https://www.jmphc.com.br/jmphc/article/download/155/158/185)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

R3: maximum risk

| Result details | |
| --- | --- |
| Resident/room ratio | 0.40 (0 points) |
| 3-point sentinel items | 3 occurrence(s) |
| 2-point sentinel items | 0 occurrence(s) |
| 1-point sentinel items | 4 occurrence(s) |


### 2

R1: lower risk

| Result details | |
| --- | --- |
| Resident/room ratio | 1.00 (2 points) |
| 3-point sentinel items | 0 occurrence(s) |
| 2-point sentinel items | 0 occurrence(s) |
| 1-point sentinel items | 3 occurrence(s) |


### 3

R2: medium risk

| Result details | |
| --- | --- |
| Resident/room ratio | 1.25 (3 points) |
| 3-point sentinel items | 0 occurrence(s) |
| 2-point sentinel items | 1 occurrence(s) |
| 1-point sentinel items | 2 occurrence(s) |


### 4

R3: maximum risk

| Result details | |
| --- | --- |
| Resident/room ratio | 2.00 (3 points) |
| 3-point sentinel items | 1 occurrence(s) |
| 2-point sentinel items | 1 occurrence(s) |
| 1-point sentinel items | 1 occurrence(s) |

The 2004 and 2013 tables state R3 above 9; score 9 has no explicit range. In this implementation, 9 is classified as R3 as a conservative local choice.


### 5

Below 5 points: does not meet class R1

| Result details | |
| --- | --- |
| Resident/room ratio | 0.67 (0 points) |
| 3-point sentinel items | 0 occurrence(s) |
| 2-point sentinel items | 0 occurrence(s) |
| 1-point sentinel items | 1 occurrence(s) |

