/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"escala-de-coelho-savassi","title":"Escala de risco familiar de Coelho-Savassi","fields":[["acamado","Acamados (restritos ao domicílio por incapacidade de locomoção)","num",{"min":0,"max":20,"step":1,"unit":"pessoas","ph":"0","opt":true}],["def_fisica","Pessoas com deficiência física","num",{"min":0,"max":20,"step":1,"unit":"pessoas","ph":"0","opt":true}],["def_mental","Pessoas com deficiência mental","num",{"min":0,"max":20,"step":1,"unit":"pessoas","ph":"0","opt":true}],["desnutricao","Pessoas com desnutrição grave","num",{"min":0,"max":20,"step":1,"unit":"pessoas","ph":"0","opt":true}],["saneamento","Baixas condições de saneamento no domicílio","chk",{"pts":3}],["drogadicao","Pessoas com drogadição (inclui dependência de álcool)","num",{"min":0,"max":20,"step":1,"unit":"pessoas","ph":"0","opt":true}],["desemprego","Pessoas desempregadas","num",{"min":0,"max":20,"step":1,"unit":"pessoas","ph":"0","opt":true}],["analfabetismo","Pessoas analfabetas","num",{"min":0,"max":20,"step":1,"unit":"pessoas","ph":"0","opt":true}],["menor6m","Crianças menores de 6 meses","num",{"min":0,"max":20,"step":1,"unit":"pessoas","ph":"0","opt":true}],["maior70","Pessoas com mais de 70 anos","num",{"min":0,"max":20,"step":1,"unit":"pessoas","ph":"0","opt":true}],["has","Pessoas com hipertensão arterial","num",{"min":0,"max":20,"step":1,"unit":"pessoas","ph":"0","opt":true}],["dm","Pessoas com diabetes mellitus","num",{"min":0,"max":20,"step":1,"unit":"pessoas","ph":"0","opt":true}],["moradores","Número de moradores","num",{"min":1,"max":40,"step":1,"unit":"pessoas","ph":"4"}],["comodos","Número de cômodos (inclui banheiro e cozinha)","num",{"min":1,"max":40,"step":1,"unit":"cômodos","ph":"5"}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
var i=function(a){return null==a||""===a||isNaN(+a)?0:+a};
a.def("escala-de-coelho-savassi",function(a){if(!(a.moradores>0&&a.comodos>0))return{error:"Informe o número de moradores e de cômodos."};var r=i(a.acamado)+i(a.def_fisica)+i(a.def_mental)+i(a.desnutricao),t=i(a.drogadicao)+i(a.desemprego),n=i(a.analfabetismo)+i(a.menor6m)+i(a.maior70)+i(a.has)+i(a.dm),s=a.moradores/a.comodos,d=s>1?3:1===s?2:0,l=e.yes(a.saneamento)?3:0,m=3*r+2*t+n+l+d,c=m>=9?["R3: risco máximo","high"]:m>=7?["R2: risco médio","mid"]:m>=5?["R1: risco menor","low"]:["Abaixo de 5 pontos: não atinge a classe R1","low"];return{main:[String(m),1===m?"ponto":"pontos"],label:"Escala de Coelho-Savassi",level:c[1],verdict:c[0],rows:[["Relação morador/cômodo",o(s,2)+" ("+d+" pontos)"],["Sentinelas de 3 pontos",r+l/3+" ocorrência(s)"],["Sentinelas de 2 pontos",t+" ocorrência(s)"],["Sentinelas de 1 ponto",n+" ocorrência(s)"]],note:9===m?'O quadro original classifica como R3 escores "acima de 9"; o escore 9 não tem faixa explícita e foi classificado como R3 (opção conservadora).':"",raw:{score:m,ratio:s}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
