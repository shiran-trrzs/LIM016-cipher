import cipher from './cipher.js';

console.log(cipher);


let selectorNumero = document.createElement("select");
let numero=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
let option=[];
let textoOption=[];
for(let i=0;i<=25;i++){
      option[i]=document.createElement("option");
      option[i].setAttribute("value", "value"+(i+1));
     textoOption[i+1] = document.createTextNode(numero[i]);
      option[i].appendChild( textoOption[i+1]);
      selectorNumero.appendChild(option[i]);
      console.log(textoOption[i])
}
     document.body.appendChild(selectorNumero)
     selectorNumero.setAttribute('class','selectorNumero')

