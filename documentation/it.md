<!-- ELUCENIA technical documentation · escala-de-coelho-savassi · it · no clinical/professional/rights approval -->

# Scala di rischio familiare di Coelho-Savassi

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/escala-de-coelho-savassi)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Persone allettate (confinate a domicilio per incapacità di spostarsi)

`acamado`

persone · facoltativo · intervallo: 0–20

### Persone con disabilità fisica

`def_fisica`

persone · facoltativo · intervallo: 0–20

### Persone con disabilità mentale

`def_mental`

persone · facoltativo · intervallo: 0–20

### Persone con malnutrizione grave

`desnutricao`

persone · facoltativo · intervallo: 0–20

### Condizioni igienico-sanitarie carenti a domicilio

`saneamento`

### Persone con dipendenza da sostanze (inclusa la dipendenza dall’alcol)

`drogadicao`

persone · facoltativo · intervallo: 0–20

### Persone disoccupate

`desemprego`

persone · facoltativo · intervallo: 0–20

### Persone che non sanno leggere né scrivere

`analfabetismo`

persone · facoltativo · intervallo: 0–20

### Bambini di età inferiore a 6 mesi

`menor6m`

persone · facoltativo · intervallo: 0–20

### Persone con più di 70 anni

`maior70`

persone · facoltativo · intervallo: 0–20

### Persone con ipertensione arteriosa

`has`

persone · facoltativo · intervallo: 0–20

### Persone con diabete mellito

`dm`

persone · facoltativo · intervallo: 0–20

### Numero di residenti

`moradores`

persone · intervallo: 1–40

### Numero di stanze (inclusi bagno e cucina)

`comodos`

stanze · intervallo: 1–40

## Edizione del metodo

Coelho–Savassi 2004; sistematizzazione del 2013; fattori sentinella per persona, condizioni igienico-sanitarie per famiglia; R3 ≥9 come scelta locale conservativa.

## Formula documentata

Ogni marcatore conta per persona: allettamento, disabilità fisica, intellettiva e malnutrizione grave 3; dipendenza da droghe e disoccupazione 2; analfabetismo, meno di 6 mesi, oltre 70 anni, ipertensione e diabete 1. Scarsa igiene ambientale: 3 (una volta per famiglia).

Abitanti/stanza: maggiore di 1 = 3; uguale a 1 = 2; minore di 1 = 0.

## Limiti e popolazione

Coelho–Savassi assegna priorità alle famiglie nel contesto dell’assistenza primaria brasiliana; non stima la probabilità individuale di malattia né descrive l’intera dinamica familiare. Contare i fattori sentinella personali per persona e la condizione igienico-sanitaria una volta per famiglia. Le tabelle consultate del 2004 e del 2013 indicano R3 oltre 9 e lasciano il punteggio di 9 senza un intervallo esplicito. Questa implementazione adotta R3 a partire da 9 come scelta locale conservativa, non come soglia letteralmente stabilita in quelle tabelle. Verificare le definizioni operative di età e fattori sentinella e riesaminare periodicamente la situazione familiare.

## Riferimenti

- [Coelho FLG, Savassi LCM. Aplicação de Escala de Risco Familiar como instrumento de priorização das Visitas Domiciliares. Rev Bras Med Fam Comunidade, 2004.](https://doi.org/10.5712/rbmfc1(2)104)

- [Savassi LCM, Lage JL, Coelho FLG. Sistematização de instrumento de estratificação de risco familiar: a Escala de Risco Familiar de Coelho-Savassi. J Manag Prim Health Care, 2013.](https://doi.org/10.14295/jmphc.v3i2.155)

- [Coelho/Savassi2004](https://rbmfc.org.br/rbmfc/article/download/104/pdf/296)

- [Savassi2013,systematization](https://www.jmphc.com.br/jmphc/article/download/155/158/185)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

R3: rischio massimo

| Dettagli del risultato | |
| --- | --- |
| Rapporto residente/stanza | 0,40 (0 punti) |
| Sentinelle da 3 punti | 3 occorrenza/e |
| Sentinelle da 2 punti | 0 occorrenza/e |
| Sentinelle da 1 punto | 4 occorrenza/e |


### 2

R1: rischio minore

| Dettagli del risultato | |
| --- | --- |
| Rapporto residente/stanza | 1,00 (2 punti) |
| Sentinelle da 3 punti | 0 occorrenza/e |
| Sentinelle da 2 punti | 0 occorrenza/e |
| Sentinelle da 1 punto | 3 occorrenza/e |


### 3

R2: rischio medio

| Dettagli del risultato | |
| --- | --- |
| Rapporto residente/stanza | 1,25 (3 punti) |
| Sentinelle da 3 punti | 0 occorrenza/e |
| Sentinelle da 2 punti | 1 occorrenza/e |
| Sentinelle da 1 punto | 2 occorrenza/e |


### 4

R3: rischio massimo

| Dettagli del risultato | |
| --- | --- |
| Rapporto residente/stanza | 2,00 (3 punti) |
| Sentinelle da 3 punti | 1 occorrenza/e |
| Sentinelle da 2 punti | 1 occorrenza/e |
| Sentinelle da 1 punto | 1 occorrenza/e |

Le tabelle del 2004 e del 2013 indicano R3 oltre 9; il punteggio 9 non ha una fascia esplicita. In questa implementazione, 9 è classificato R3 per una scelta locale conservativa.


### 5

Sotto 5 punti: non raggiunge la classe R1

| Dettagli del risultato | |
| --- | --- |
| Rapporto residente/stanza | 0,67 (0 punti) |
| Sentinelle da 3 punti | 0 occorrenza/e |
| Sentinelle da 2 punti | 0 occorrenza/e |
| Sentinelle da 1 punto | 1 occorrenza/e |

