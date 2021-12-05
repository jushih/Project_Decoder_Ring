// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const alphabetOrdered = "abcdefghijklmnopqrstuvwxyz";
    let encodedLetters = {};
    let decodedLetters = {};

    try {
      // create unique set of all letters in alphabet, check if size is exactly 26
      const set = new Set(alphabet.split(""));
      if (set.size !== 26) {
        return false;
      }
    } catch (err) {
      console.log("Alphabet is undefined");
      return false;
    }

    // create a mapped object with the regular alphabet mapped to the ciphered alphabet
    for (let i = 0; i < alphabet.length; i++) {
      if (encode === true) {
        encodedLetters[alphabetOrdered[i]] = alphabet[i];
      } else {
        decodedLetters[alphabet[i]] = alphabetOrdered[i];
      }
    }
    console.log(encodedLetters, decodedLetters);

    let word = "";
    let cleanInput = input.toLowerCase();

    // decode or encode
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        word += " ";
      } else {
        if (encode === true) {
          word += encodedLetters[cleanInput[i]];
        } else {
          word += decodedLetters[cleanInput[i]];
        }
      }
    }

    return word;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
