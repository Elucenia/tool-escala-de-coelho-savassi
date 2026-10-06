<!-- ELUCENIA technical documentation · escala-de-coelho-savassi · es · no clinical/professional/rights approval -->

# Escala de riesgo familiar de Coelho-Savassi

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/escala-de-coelho-savassi)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Personas encamadas (confinadas al domicilio por incapacidad para desplazarse)

`acamado`

personas · opcional · intervalo: 0–20

### Personas con discapacidad física

`def_fisica`

personas · opcional · intervalo: 0–20

### Personas con discapacidad mental

`def_mental`

personas · opcional · intervalo: 0–20

### Personas con desnutrición grave

`desnutricao`

personas · opcional · intervalo: 0–20

### Condiciones de saneamiento deficientes en el domicilio

`saneamento`

### Personas con dependencia de sustancias (incluida la dependencia del alcohol)

`drogadicao`

personas · opcional · intervalo: 0–20

### Personas desempleadas

`desemprego`

personas · opcional · intervalo: 0–20

### Personas que no saben leer ni escribir

`analfabetismo`

personas · opcional · intervalo: 0–20

### Niños menores de 6 meses

`menor6m`

personas · opcional · intervalo: 0–20

### Personas mayores de 70 años

`maior70`

personas · opcional · intervalo: 0–20

### Personas con hipertensión arterial

`has`

personas · opcional · intervalo: 0–20

### Personas con diabetes mellitus

`dm`

personas · opcional · intervalo: 0–20

### Número de residentes

`moradores`

personas · intervalo: 1–40

### Número de habitaciones (incluidos el baño y la cocina)

`comodos`

habitaciones · intervalo: 1–40

## Edición del método

Coelho–Savassi 2004; sistematización de 2013; factores centinela por persona, saneamiento por familia; R3 ≥9 como opción local conservadora.

## Fórmula documentada

Cada marcador individual puntúa por persona: encamado, discapacidad física, intelectual y desnutrición grave 3; drogodependencia y desempleo 2; analfabetismo, menor de 6 meses, mayor de 70 años, hipertensión y diabetes 1. Saneamiento deficiente: 3 (una vez por familia).

Habitantes/habitación: mayor que 1 = 3; igual a 1 = 2; menor que 1 = 0.

## Límites y población

Coelho–Savassi prioriza a las familias en el contexto de la atención primaria brasileña; no estima la probabilidad individual de enfermedad ni describe toda la dinámica familiar. Cuente los factores centinela personales por persona y la condición de saneamiento una vez por familia. Las tablas consultadas de 2004 y 2013 indican R3 por encima de 9 y dejan la puntuación de 9 sin un intervalo explícito. Esta implementación adopta R3 a partir de 9 como una opción local conservadora, no como un punto de corte establecido literalmente en esas tablas. Compruebe las definiciones operativas de edad y factores centinela y revise periódicamente la situación familiar.

## Referencias

- [Coelho FLG, Savassi LCM. Aplicação de Escala de Risco Familiar como instrumento de priorização das Visitas Domiciliares. Rev Bras Med Fam Comunidade, 2004.](https://doi.org/10.5712/rbmfc1(2)104)

- [Savassi LCM, Lage JL, Coelho FLG. Sistematização de instrumento de estratificação de risco familiar: a Escala de Risco Familiar de Coelho-Savassi. J Manag Prim Health Care, 2013.](https://doi.org/10.14295/jmphc.v3i2.155)

- [Coelho/Savassi2004](https://rbmfc.org.br/rbmfc/article/download/104/pdf/296)

- [Savassi2013,systematization](https://www.jmphc.com.br/jmphc/article/download/155/158/185)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

R3: riesgo máximo

| Detalles del resultado | |
| --- | --- |
| Relación residente/habitación | 0,40 (0 puntos) |
| Centinelas de 3 puntos | 3 ocurrencia(s) |
| Centinelas de 2 puntos | 0 ocurrencia(s) |
| Centinelas de 1 punto | 4 ocurrencia(s) |


### 2

R1: riesgo menor

| Detalles del resultado | |
| --- | --- |
| Relación residente/habitación | 1,00 (2 puntos) |
| Centinelas de 3 puntos | 0 ocurrencia(s) |
| Centinelas de 2 puntos | 0 ocurrencia(s) |
| Centinelas de 1 punto | 3 ocurrencia(s) |


### 3

R2: riesgo medio

| Detalles del resultado | |
| --- | --- |
| Relación residente/habitación | 1,25 (3 puntos) |
| Centinelas de 3 puntos | 0 ocurrencia(s) |
| Centinelas de 2 puntos | 1 ocurrencia(s) |
| Centinelas de 1 punto | 2 ocurrencia(s) |


### 4

R3: riesgo máximo

| Detalles del resultado | |
| --- | --- |
| Relación residente/habitación | 2,00 (3 puntos) |
| Centinelas de 3 puntos | 1 ocurrencia(s) |
| Centinelas de 2 puntos | 1 ocurrencia(s) |
| Centinelas de 1 punto | 1 ocurrencia(s) |

Las tablas de 2004 y 2013 indican R3 por encima de 9; el puntaje 9 no tiene una categoría explícita. En esta implementación, 9 se clasifica como R3 por una opción local conservadora.


### 5

Por debajo de 5 puntos: no alcanza la clase R1

| Detalles del resultado | |
| --- | --- |
| Relación residente/habitación | 0,67 (0 puntos) |
| Centinelas de 3 puntos | 0 ocurrencia(s) |
| Centinelas de 2 puntos | 0 ocurrencia(s) |
| Centinelas de 1 punto | 1 ocurrencia(s) |

