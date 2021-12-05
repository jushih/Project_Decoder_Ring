// Write your tests here!
const { expect } = require('chai');
const { polybius } = require('../src/polybius');

describe("polybius", () => {
  
  it("should translate letters i and j to 42", () => {
   const word = "julie"
   const encode = true
   const expected = "4254134251"
         
   const actual = polybius(word, encode) 
   expect(actual).to.equal(expected);    
    
  });
  
    it("should decode 42 as (i/j)", () => {
   const word = "4254134251"
   const encode = false
   const expected = "(i/j)ul(i/j)e" 
         
   const actual = polybius(word, encode) 
   expect(actual).to.equal(expected);    
    
  });
  
  it("should ignore capital letters", () => {
   const word = "Julie"
   const encode = true
   const expected = "4254134251"
         
   const actual = polybius(word, encode) 
   expect(actual).to.equal(expected);    
    
  });
  
    it("should maintain spaces in the message", () => {
   const word = "hello world"
   const encode = true
   const expected = "3251131343 2543241341"
         
   const actual = polybius(word, encode) 
   expect(actual).to.equal(expected);    
    
  });
  
  
  
});