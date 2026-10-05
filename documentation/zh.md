<!-- ELUCENIA technical documentation · escala-de-coelho-savassi · zh · no clinical/professional/rights approval -->

# Coelho-Savassi 家庭风险量表

[条件、来源与许可](https://elucenia.org/zh/tools/escala-de-coelho-savassi)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 卧床者（因行动困难被限制在家中）

`acamado`

人 · 选填 · 范围: 0–20

### 身体残疾者

`def_fisica`

人 · 选填 · 范围: 0–20

### 精神或智力障碍者

`def_mental`

人 · 选填 · 范围: 0–20

### 严重营养不良者

`desnutricao`

人 · 选填 · 范围: 0–20

### 家庭卫生设施条件差

`saneamento`

### 药物成瘾者（包括酒精依赖）

`drogadicao`

人 · 选填 · 范围: 0–20

### 失业者

`desemprego`

人 · 选填 · 范围: 0–20

### 不识字者

`analfabetismo`

人 · 选填 · 范围: 0–20

### 不足 6 个月的婴儿

`menor6m`

人 · 选填 · 范围: 0–20

### 70 岁以上者

`maior70`

人 · 选填 · 范围: 0–20

### 高血压患者

`has`

人 · 选填 · 范围: 0–20

### 糖尿病患者

`dm`

人 · 选填 · 范围: 0–20

### 家庭居住人数

`moradores`

人 · 范围: 1–40

### 房间数（含浴室和厨房）

`comodos`

房间 · 范围: 1–40

## 方法版本

Coelho–Savassi 2004；2013年系统化；个人哨点指标按人计、卫生设施按家庭计；R3 ≥9为本地保守选择。

## 已记录的公式

个体指标按每人计分：卧床、身体残疾、智力残疾、严重营养不良3；药物依赖、失业2；文盲、未满6个月、超过70岁、高血压、糖尿病1。卫生设施差：3（每家庭一次）。

居住者/房间：大于1 = 3；等于1 = 2；小于1 = 0。

## 限制与适用人群

Coelho–Savassi用于巴西基层医疗中的家庭优先排序；它不估计个人患病概率，也不描述家庭全部动态。个人哨点指标按人数计算，卫生设施状况每个家庭只计一次。所查2004年和2013年表格均将R3写为大于9分，未明确划定9分的范围。本实现采用9分及以上为R3作为本地保守选择，而非声称这些表格明确规定此阈值。请核对年龄和哨点指标的操作定义，并定期重新评估家庭状况。

## 参考文献

- [Coelho FLG, Savassi LCM. Aplicação de Escala de Risco Familiar como instrumento de priorização das Visitas Domiciliares. Rev Bras Med Fam Comunidade, 2004.](https://doi.org/10.5712/rbmfc1(2)104)

- [Savassi LCM, Lage JL, Coelho FLG. Sistematização de instrumento de estratificação de risco familiar: a Escala de Risco Familiar de Coelho-Savassi. J Manag Prim Health Care, 2013.](https://doi.org/10.14295/jmphc.v3i2.155)

- [Coelho/Savassi2004](https://rbmfc.org.br/rbmfc/article/download/104/pdf/296)

- [Savassi2013,systematization](https://www.jmphc.com.br/jmphc/article/download/155/158/185)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
