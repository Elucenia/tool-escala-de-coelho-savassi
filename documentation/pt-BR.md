<!-- ELUCENIA technical documentation · escala-de-coelho-savassi · pt-BR · no clinical/professional/rights approval -->

# Escala de risco familiar de Coelho-Savassi

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/escala-de-coelho-savassi)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Acamados (restritos ao domicílio por incapacidade de locomoção)

`acamado`

pessoas · opcional · intervalo: 0–20

### Pessoas com deficiência física

`def_fisica`

pessoas · opcional · intervalo: 0–20

### Pessoas com deficiência mental

`def_mental`

pessoas · opcional · intervalo: 0–20

### Pessoas com desnutrição grave

`desnutricao`

pessoas · opcional · intervalo: 0–20

### Baixas condições de saneamento no domicílio

`saneamento`

### Pessoas com drogadição (inclui dependência de álcool)

`drogadicao`

pessoas · opcional · intervalo: 0–20

### Pessoas desempregadas

`desemprego`

pessoas · opcional · intervalo: 0–20

### Pessoas analfabetas

`analfabetismo`

pessoas · opcional · intervalo: 0–20

### Crianças menores de 6 meses

`menor6m`

pessoas · opcional · intervalo: 0–20

### Pessoas com mais de 70 anos

`maior70`

pessoas · opcional · intervalo: 0–20

### Pessoas com hipertensão arterial

`has`

pessoas · opcional · intervalo: 0–20

### Pessoas com diabetes mellitus

`dm`

pessoas · opcional · intervalo: 0–20

### Número de moradores

`moradores`

pessoas · intervalo: 1–40

### Número de cômodos (inclui banheiro e cozinha)

`comodos`

cômodos · intervalo: 1–40

## Edição do método

Coelho–Savassi 2004; sistematização 2013; sentinelas por pessoa, saneamento por família; R3 ≥9 como opção local conservadora.

## Fórmula documentada

Cada sentinela individual pontua por pessoa que a apresenta: acamado, deficiência física, deficiência mental e desnutrição grave 3; drogadição e desemprego 2; analfabetismo, menor de 6 meses, maior de 70 anos, hipertensão e diabetes 1. Baixas condições de saneamento: 3 (uma vez por família).

Relação morador/cômodo: maior que 1 = 3; igual a 1 = 2; menor que 1 = 0.

## Limites e população

A Coelho–Savassi prioriza famílias no contexto da atenção primária brasileira; não estima probabilidade individual de doença e não descreve toda a dinâmica familiar. Conte sentinelas pessoais por pessoa e a condição de saneamento uma vez por família. As tabelas consultadas de 2004 e 2013 escrevem R3 acima de 9 e deixam o escore 9 sem faixa explícita. Esta implementação adota R3 a partir de 9 como opção local conservadora, não como corte literalmente estabelecido nessas tabelas. Confira as definições operacionais de idade e sentinelas e reveja a situação familiar periodicamente.

## Referências

- [Coelho FLG, Savassi LCM. Aplicação de Escala de Risco Familiar como instrumento de priorização das Visitas Domiciliares. Rev Bras Med Fam Comunidade, 2004.](https://doi.org/10.5712/rbmfc1(2)104)

- [Savassi LCM, Lage JL, Coelho FLG. Sistematização de instrumento de estratificação de risco familiar: a Escala de Risco Familiar de Coelho-Savassi. J Manag Prim Health Care, 2013.](https://doi.org/10.14295/jmphc.v3i2.155)

- [Coelho/Savassi2004](https://rbmfc.org.br/rbmfc/article/download/104/pdf/296)

- [Savassi2013,systematization](https://www.jmphc.com.br/jmphc/article/download/155/158/185)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

R3: risco máximo

| Detalhes do resultado | |
| --- | --- |
| Relação morador/cômodo | 0,40 (0 pontos) |
| Sentinelas de 3 pontos | 3 ocorrência(s) |
| Sentinelas de 2 pontos | 0 ocorrência(s) |
| Sentinelas de 1 ponto | 4 ocorrência(s) |


### 2

R1: risco menor

| Detalhes do resultado | |
| --- | --- |
| Relação morador/cômodo | 1,00 (2 pontos) |
| Sentinelas de 3 pontos | 0 ocorrência(s) |
| Sentinelas de 2 pontos | 0 ocorrência(s) |
| Sentinelas de 1 ponto | 3 ocorrência(s) |


### 3

R2: risco médio

| Detalhes do resultado | |
| --- | --- |
| Relação morador/cômodo | 1,25 (3 pontos) |
| Sentinelas de 3 pontos | 0 ocorrência(s) |
| Sentinelas de 2 pontos | 1 ocorrência(s) |
| Sentinelas de 1 ponto | 2 ocorrência(s) |


### 4

R3: risco máximo

| Detalhes do resultado | |
| --- | --- |
| Relação morador/cômodo | 2,00 (3 pontos) |
| Sentinelas de 3 pontos | 1 ocorrência(s) |
| Sentinelas de 2 pontos | 1 ocorrência(s) |
| Sentinelas de 1 ponto | 1 ocorrência(s) |

As tabelas de 2004 e 2013 indicam R3 acima de 9; o escore 9 fica sem faixa explícita. Nesta implementação, 9 é classificado como R3 por opção local conservadora.


### 5

Abaixo de 5 pontos: não atinge a classe R1

| Detalhes do resultado | |
| --- | --- |
| Relação morador/cômodo | 0,67 (0 pontos) |
| Sentinelas de 3 pontos | 0 ocorrência(s) |
| Sentinelas de 2 pontos | 0 ocorrência(s) |
| Sentinelas de 1 ponto | 1 ocorrência(s) |

