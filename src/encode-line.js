const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;
  let i = 0;
  while (i < str.length) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      if (count > 1) {
        res += count;
      }
      res += str[i];
      count = 1
    }
    i += 1;
  }
  return res;
}

module.exports = {
  encodeLine
};
