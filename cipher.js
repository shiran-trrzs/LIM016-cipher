const cipher = {
  encode: function (number, text) {
    
    let resultEncode = [];
    let letter;

    if (number == null && text == null) {
      throw new TypeError("No existe número, ni texto")
    }
    if (number == 0) {
      throw new TypeError("No existe número")
    }
    

    for (let i = 0; i < text.length; i++) {
      letter = text.charCodeAt(i);
      if (letter >=65 && letter <=90) {
        let formula = (((letter - 65) + number) % 26 + 65);
        resultEncode.push(String.fromCharCode(formula))
      }
    }

    let result = resultEncode.join('');
    
    return result
  },
  decode: function (number, text) {
    let resultDecode = [];
    let letterTwo;

    for (let i = 0; i < text.length; i++) {
      letterTwo = text.charCodeAt(i);
      if (letterTwo >=60 && letterTwo <=90) {
        let formulaTwo = (((letterTwo + 65) - number) % 26 + 65);
        resultDecode.push(String.fromCharCode(formulaTwo)) 
      }
    }
    let resultTwo = resultDecode.join('')

    return resultTwo
  }
  
  // ...
};


export default cipher;
