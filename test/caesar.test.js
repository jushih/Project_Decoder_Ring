// Write your tests here!
const { expect } = require('chai');
const { caesar } = require('../src/caesar');

describe("caesar", () => {
  it("should return false if the shift amount is 0", () => {
   const word = "thinkful"
   const shift = 0;
   const expected = false
  
   const actual = caesar(word, shift) 
   expect(actual).to.equal(expected);    
    
  });
  
   it("should return false if the shift amount is less than -25", () => {
   const word = "thinkful"
   const shift = 26;
   const expected = false
  
   const actual = caesar(word, shift) 
   expect(actual).to.equal(expected);    
    
  });
  
   it("should return false if the shift amount is more than 25", () => {
   const word = "thinkful"
   const shift = 26;
   const expected = false
  
   const actual = caesar(word, shift) 
   expect(actual).to.equal(expected);    
    
  });
  
   it("should ignore capital letters", () => {
   const word = "Thinkful"
   const shift = 3;
   const expected = "wklqnixo"
  
   const actual = caesar(word, shift) 
   expect(actual).to.equal(expected);    
    
  });
  
   it("should handle shifts that go past the end of the alphabet", () => {
   const word = "zebra"
   const shift = 1;
   const expected = "afcsb"
  
   const actual = caesar(word, shift) 
   expect(actual).to.equal(expected);    
    
  });
  
   it("should handle shifts that maintain spaces", () => {
   const word = "the dog jumps over the lazy fox"
   const shift = 1;
   const expected = "uif eph kvnqt pwfs uif mbaz gpy"
  
   const actual = caesar(word, shift) 
   expect(actual).to.equal(expected);    
    
  });
  
  
  
});