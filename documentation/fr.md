<!-- ELUCENIA technical documentation · escala-de-coelho-savassi · fr · no clinical/professional/rights approval -->

# Échelle de risque familial de Coelho-Savassi

[conditions, sources et autorisations](https://elucenia.org/fr/outils/escala-de-coelho-savassi)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Personnes alitées (confinées au domicile du fait d’une incapacité à se déplacer)

`acamado`

personnes · facultatif · intervalle: 0–20

### Personnes présentant un handicap physique

`def_fisica`

personnes · facultatif · intervalle: 0–20

### Personnes présentant un handicap mental

`def_mental`

personnes · facultatif · intervalle: 0–20

### Personnes présentant une malnutrition sévère

`desnutricao`

personnes · facultatif · intervalle: 0–20

### Mauvaises conditions sanitaires au domicile

`saneamento`

### Personnes présentant une dépendance aux substances (y compris à l’alcool)

`drogadicao`

personnes · facultatif · intervalle: 0–20

### Personnes sans emploi

`desemprego`

personnes · facultatif · intervalle: 0–20

### Personnes ne sachant ni lire ni écrire

`analfabetismo`

personnes · facultatif · intervalle: 0–20

### Enfants de moins de 6 mois

`menor6m`

personnes · facultatif · intervalle: 0–20

### Personnes de plus de 70 ans

`maior70`

personnes · facultatif · intervalle: 0–20

### Personnes présentant une hypertension artérielle

`has`

personnes · facultatif · intervalle: 0–20

### Personnes atteintes de diabète sucré

`dm`

personnes · facultatif · intervalle: 0–20

### Nombre d’occupants

`moradores`

personnes · intervalle: 1–40

### Nombre de pièces (salle de bains et cuisine incluses)

`comodos`

pièces · intervalle: 1–40

## Édition de la méthode

Coelho–Savassi 2004 ; systématisation de 2013 ; facteurs sentinelles par personne, assainissement par famille ; R3 ≥9 comme choix local conservateur.

## Formule documentée

Chaque marqueur individuel compte par personne : alitement, handicap physique, intellectuel et malnutrition sévère 3 ; dépendance aux drogues et chômage 2 ; analphabétisme, moins de 6 mois, plus de 70 ans, hypertension et diabète 1. Mauvais assainissement : 3 (une fois par famille).

Habitants/pièce : supérieur à 1 = 3 ; égal à 1 = 2 ; inférieur à 1 = 0.

## Limites et population

Coelho–Savassi hiérarchise les familles dans le contexte des soins primaires brésiliens ; elle n’estime pas la probabilité individuelle de maladie et ne décrit pas toute la dynamique familiale. Comptez les facteurs sentinelles personnels par personne et la condition d’assainissement une fois par famille. Les tableaux consultés de 2004 et 2013 indiquent R3 au-dessus de 9 et ne précisent pas de fourchette pour le score de 9. Cette implémentation adopte R3 à partir de 9 comme un choix local conservateur, et non comme un seuil établi littéralement dans ces tableaux. Vérifiez les définitions opérationnelles de l’âge et des facteurs sentinelles et réévaluez périodiquement la situation familiale.

## Références

- [Coelho FLG, Savassi LCM. Aplicação de Escala de Risco Familiar como instrumento de priorização das Visitas Domiciliares. Rev Bras Med Fam Comunidade, 2004.](https://doi.org/10.5712/rbmfc1(2)104)

- [Savassi LCM, Lage JL, Coelho FLG. Sistematização de instrumento de estratificação de risco familiar: a Escala de Risco Familiar de Coelho-Savassi. J Manag Prim Health Care, 2013.](https://doi.org/10.14295/jmphc.v3i2.155)

- [Coelho/Savassi2004](https://rbmfc.org.br/rbmfc/article/download/104/pdf/296)

- [Savassi2013,systematization](https://www.jmphc.com.br/jmphc/article/download/155/158/185)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

R3 : risque maximal

| Détails du résultat | |
| --- | --- |
| Rapport habitants/pièce | 0,40 (0 points) |
| Sentinelles de 3 points | 3 occurrence(s) |
| Sentinelles de 2 points | 0 occurrence(s) |
| Sentinelles de 1 point | 4 occurrence(s) |


### 2

R1 : risque moindre

| Détails du résultat | |
| --- | --- |
| Rapport habitants/pièce | 1,00 (2 points) |
| Sentinelles de 3 points | 0 occurrence(s) |
| Sentinelles de 2 points | 0 occurrence(s) |
| Sentinelles de 1 point | 3 occurrence(s) |


### 3

R2 : risque moyen

| Détails du résultat | |
| --- | --- |
| Rapport habitants/pièce | 1,25 (3 points) |
| Sentinelles de 3 points | 0 occurrence(s) |
| Sentinelles de 2 points | 1 occurrence(s) |
| Sentinelles de 1 point | 2 occurrence(s) |


### 4

R3 : risque maximal

| Détails du résultat | |
| --- | --- |
| Rapport habitants/pièce | 2,00 (3 points) |
| Sentinelles de 3 points | 1 occurrence(s) |
| Sentinelles de 2 points | 1 occurrence(s) |
| Sentinelles de 1 point | 1 occurrence(s) |

Les tableaux de 2004 et 2013 indiquent R3 au-dessus de 9 ; le score 9 n’a pas de catégorie explicite. Dans cette implémentation, 9 est classé R3 par choix local conservateur.


### 5

En dessous de 5 points : n’atteint pas la classe R1

| Détails du résultat | |
| --- | --- |
| Rapport habitants/pièce | 0,67 (0 points) |
| Sentinelles de 3 points | 0 occurrence(s) |
| Sentinelles de 2 points | 0 occurrence(s) |
| Sentinelles de 1 point | 1 occurrence(s) |

