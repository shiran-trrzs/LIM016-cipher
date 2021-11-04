import cipher from './cipher.js';
console.log(cipher)

let buttonCode = document.getElementById("codeButton");
let textCode = document.getElementById("codeResult");
let offset = document.getElementById("offset");
let text;

buttonCode.addEventListener("click", function() {
     text = document.getElementById("sentenceOne").value;
     let result = cipher.encode(parseInt(offset.value), text);
     textCode.value = result;
}); 


let buttonDecode = document.getElementById("decodeButton");
let textDecode = document.getElementById("decodeResult");
let offset1 = document.getElementById("offset1");
let text2;

buttonDecode.addEventListener("click", function() {
    text2 = document.getElementById("sentenceTwo").value;
    let resultTwo = cipher.decode(parseInt(offset1.value), text2)
    textDecode.value = resultTwo;    
})


     



