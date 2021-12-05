// Write your tests here!
const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe("substitution", () => {
  
  it("should return false if alphabet isn't exactly 16 letters long", () => {
   const word = "thinkful"
   const alphabet = "bcdef"
   const encode = true
   const expected = false
         
   const actual = substitution(word, alphabet, encode) 
   expect(actual).to.equal(expected);    
    
  });
  
    it("should correctly translate the given phrase", () => {
   const word = "thinkful"
   const alphabet = "xoyqmcgrukswaflnthdjpzibev"
   const encode = true
   const expected = "jrufscpw"
         
   const actual = substitution(word, alphabet, encode) 
   expect(actual).to.equal(expected);    
    
  });
  
    it("should return false if there are any duplicate characters in the given alphabet", () => {
   const word = "thinkful"
   const alphabet = "abcabcabcabcabcabcabcabcyz"
   const encode = true
   const expected = false
         
   const actual = substitution(word, alphabet, encode) 
   expect(actual).to.equal(expected);    
    
  });
  
      it("should maintain space in the message before and after encoding", () => {
   const word = "you are excellent"
   const alphabet = "xoyqmcgrukswaflnthdjpzibev"
   const encode = true
   const expected = "elp xhm mbymwwmfj"
         
   const actual = substitution(word, alphabet, encode) 
   expect(actual).to.equal(expected);    
    
  });
  
        it("should maintain space in the message before and after decoding", () => {
   const word = "elp xhm mbymwwmfj"
   const alphabet = "xoyqmcgrukswaflnthdjpzibev"
   const encode = false
   const expected = "you are excellent" 
         
   const actual = substitution(word, alphabet, encode) 
   expect(actual).to.equal(expected);    
    
  });
  
    it("should ignore capital letters", () => {
   const word = "ThinkFul"
   const alphabet = "xoyqmcgrukswaflnthdjpzibev"
   const encode = true
   const expected = "jrufscpw"
         
   const actual = substitution(word, alphabet, encode) 
   expect(actual).to.equal(expected);    
    
  });
      
});
  
  