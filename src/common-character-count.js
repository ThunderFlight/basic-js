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
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i += 1) {
    s2.split('').map((item) => {
      console.log(s1[i])
      if (s1[i] === item) {
        count += 1
        s1 = s1.slice(i + 1, s1.length)
        return count
      }
    })
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
