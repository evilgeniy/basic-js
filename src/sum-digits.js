const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  while (n > 9) {
    let sum = 0;
    const digit = String(n).split('');
    for (let i = 0; i < digit.length; i += 1) {
      sum += parseInt(digit[i], 10);
    }
    n = sum;
  }
  return n;
}

module.exports = {
  getSumOfDigits
};
