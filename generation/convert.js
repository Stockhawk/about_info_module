/**
 * convert.js
 * Exports a function that converts a base 10 number to a number
 * expressed by the characters in the input character set where the
 * base is the length of the character set
 */

module.exports = function(target, characterSet = []) {
  if (characterSet.length === 0) {
    return target;
  }

  const base = characterSet.length;
  let result = '';
  let divisor = target;
  let mod = 0;

  while (divisor >= base) {
    mod = divisor % base;
    divisor = Math.trunc(divisor / base);
    result = characterSet[mod] + result;
  }

  result = characterSet[divisor] + result;

  return result;
};