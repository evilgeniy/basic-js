const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function CharacterCount(str) {
  const count = {};
  for (const char of str){
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

function getCommonCharacterCount(s1, s2) {
  const count1 = CharacterCount(s1);
  const count2 = CharacterCount(s2);
  let equalChar = 0;
  for(const char in count1){
    if (count2[char]) {
      equalChar += Math.min(count1[char], count2[char]);
    }
  }
  return equalChar;
}

module.exports = {
  getCommonCharacterCount
};
