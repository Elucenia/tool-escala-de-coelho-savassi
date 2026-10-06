<!-- ELUCENIA technical documentation · escala-de-coelho-savassi · de · no clinical/professional/rights approval -->

# Coelho-Savassi-Skala für familiäres Risiko

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/escala-de-coelho-savassi)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Bettlägerige Personen (wegen fehlender Mobilität auf die Wohnung beschränkt)

`acamado`

Personen · optional · Bereich: 0–20

### Personen mit körperlicher Behinderung

`def_fisica`

Personen · optional · Bereich: 0–20

### Personen mit geistiger Behinderung

`def_mental`

Personen · optional · Bereich: 0–20

### Personen mit schwerer Mangelernährung

`desnutricao`

Personen · optional · Bereich: 0–20

### Unzureichende sanitäre Verhältnisse im Haushalt

`saneamento`

### Personen mit Substanzabhängigkeit (einschließlich Alkoholabhängigkeit)

`drogadicao`

Personen · optional · Bereich: 0–20

### Arbeitslose Personen

`desemprego`

Personen · optional · Bereich: 0–20

### Personen, die nicht lesen und schreiben können

`analfabetismo`

Personen · optional · Bereich: 0–20

### Kinder unter 6 Monaten

`menor6m`

Personen · optional · Bereich: 0–20

### Personen über 70 Jahre

`maior70`

Personen · optional · Bereich: 0–20

### Personen mit arterieller Hypertonie

`has`

Personen · optional · Bereich: 0–20

### Personen mit Diabetes mellitus

`dm`

Personen · optional · Bereich: 0–20

### Anzahl der Bewohner

`moradores`

Personen · Bereich: 1–40

### Anzahl der Räume (einschließlich Bad und Küche)

`comodos`

Räume · Bereich: 1–40

## Fassung der Methode

Coelho–Savassi 2004; Systematisierung 2013; Sentinel-Faktoren pro Person, sanitäre Bedingungen pro Familie; R3 ≥9 als konservative lokale Entscheidung.

## Dokumentierte Formel

Jedes Merkmal zählt je Person: Bettlägerigkeit, körperliche/intellektuelle Behinderung, schwere Mangelernährung 3; Drogenabhängigkeit und Arbeitslosigkeit 2; Analphabetismus, unter 6 Monate, über 70 Jahre, Hypertonie und Diabetes 1. Schlechte Sanitärversorgung: 3 (einmal je Familie).

Bewohner/Raum: über 1 = 3; gleich 1 = 2; unter 1 = 0.

## Grenzen und Population

Coelho–Savassi priorisiert Familien im Kontext der brasilianischen Primärversorgung; die Skala schätzt keine individuelle Krankheitswahrscheinlichkeit und beschreibt nicht die gesamte Familiendynamik. Zählen Sie personenbezogene Sentinel-Faktoren pro Person und die sanitären Bedingungen einmal pro Familie. Die konsultierten Tabellen von 2004 und 2013 nennen R3 bei mehr als 9 und geben für 9 Punkte keinen ausdrücklichen Bereich an. Diese Implementierung verwendet R3 ab 9 als konservative lokale Entscheidung, nicht als in diesen Tabellen wörtlich festgelegten Grenzwert. Prüfen Sie die operationalen Definitionen von Alter und Sentinel-Faktoren und beurteilen Sie die familiäre Situation regelmäßig erneut.

## Referenzen

- [Coelho FLG, Savassi LCM. Aplicação de Escala de Risco Familiar como instrumento de priorização das Visitas Domiciliares. Rev Bras Med Fam Comunidade, 2004.](https://doi.org/10.5712/rbmfc1(2)104)

- [Savassi LCM, Lage JL, Coelho FLG. Sistematização de instrumento de estratificação de risco familiar: a Escala de Risco Familiar de Coelho-Savassi. J Manag Prim Health Care, 2013.](https://doi.org/10.14295/jmphc.v3i2.155)

- [Coelho/Savassi2004](https://rbmfc.org.br/rbmfc/article/download/104/pdf/296)

- [Savassi2013,systematization](https://www.jmphc.com.br/jmphc/article/download/155/158/185)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

R3: maximales Risiko

| Ergebnisdetails | |
| --- | --- |
| Bewohner-/Zimmer-Verhältnis | 0,40 (0 Punkte) |
| 3-Punkte-Sentinel-Einträge | 3 Vorkommen |
| 2-Punkte-Sentinel-Einträge | 0 Vorkommen |
| 1-Punkt-Sentinel-Einträge | 4 Vorkommen |


### 2

R1: geringeres Risiko

| Ergebnisdetails | |
| --- | --- |
| Bewohner-/Zimmer-Verhältnis | 1,00 (2 Punkte) |
| 3-Punkte-Sentinel-Einträge | 0 Vorkommen |
| 2-Punkte-Sentinel-Einträge | 0 Vorkommen |
| 1-Punkt-Sentinel-Einträge | 3 Vorkommen |


### 3

R2: mittleres Risiko

| Ergebnisdetails | |
| --- | --- |
| Bewohner-/Zimmer-Verhältnis | 1,25 (3 Punkte) |
| 3-Punkte-Sentinel-Einträge | 0 Vorkommen |
| 2-Punkte-Sentinel-Einträge | 1 Vorkommen |
| 1-Punkt-Sentinel-Einträge | 2 Vorkommen |


### 4

R3: maximales Risiko

| Ergebnisdetails | |
| --- | --- |
| Bewohner-/Zimmer-Verhältnis | 2,00 (3 Punkte) |
| 3-Punkte-Sentinel-Einträge | 1 Vorkommen |
| 2-Punkte-Sentinel-Einträge | 1 Vorkommen |
| 1-Punkt-Sentinel-Einträge | 1 Vorkommen |

Die Tabellen von 2004 und 2013 nennen R3 oberhalb von 9; für 9 ist kein Bereich ausdrücklich angegeben. Diese Implementierung ordnet 9 als konservative lokale Entscheidung R3 zu.


### 5

Unter 5 Punkten: erreicht nicht die Klasse R1

| Ergebnisdetails | |
| --- | --- |
| Bewohner-/Zimmer-Verhältnis | 0,67 (0 Punkte) |
| 3-Punkte-Sentinel-Einträge | 0 Vorkommen |
| 2-Punkte-Sentinel-Einträge | 0 Vorkommen |
| 1-Punkt-Sentinel-Einträge | 1 Vorkommen |

