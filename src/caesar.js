// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
  
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var mappedLetters = {}
    
    if (shift === 0 | shift > 25 | shift < -25) {
      return false
    }
    // loop through alphabet and offset, save the offset in a new object mapped to the original letter
    for (let i = 0; i < alphabet.length; i++) {
      // check if encoding or decoding and shift appropriately
      if (encode === true) {
        let offset = (i + shift ) % 26;
        mappedLetters[alphabet[i]] = alphabet[offset];
      }
      else {
        let offset = (i - shift ) % 26;
        mappedLetters[alphabet[i]] = alphabet[offset];
      }

  }
 
  // use the mapped object to code/decode the word
  let word = ""
  let cleanInput = input.toLowerCase();
    console.log(input)
    
  for (let i = 0; i < input.length; i++) {
    if (mappedLetters[cleanInput[i]] === undefined) {
      word += cleanInput[i]
    }
    else {
      word += mappedLetters[cleanInput[i]]
    }
  }
  
  console.log(word)
  return word
  
  }
 
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
