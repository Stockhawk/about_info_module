/**
 * Base converter with character set test file
 * 
 * Tests the convertBaseCharacters function that takes an
 * input array containing characters and the value to be expressed,
 * then returns the value expressed with the characters of the input array
 * where the radix is the length of the array
 */

const convertBaseCharacters = require('../convert.js');

describe('character base converter', () => {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  test('should exist', () => {
    expect(convertBaseCharacters).not.toBe(undefined);
  });

  test('should return the input value if the array is undefined', () => {
    const testNumber = 1234;
    expect(convertBaseCharacters(testNumber)).toBe(testNumber);
  });
  
  test('should return the input value if the array has a length of zero', () => {
    const testArray = [];
    const testNumber = 1234;
    expect(convertBaseCharacters(testNumber, testArray)).toBe(testNumber);
  });
  
  xtest('', () => {});
});