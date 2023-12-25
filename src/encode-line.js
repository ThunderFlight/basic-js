const { NotImplementedError } = require('../extensions/index.js');

function searchSimilarLetters(i, str) {
  const letters = []
  for (let j = i - 1; j < str.length; j++) {
    if (str[i] === str[j]) {
      letters.push(str[j])
    } else {
      return letters
    }
  }
}

/**
 *3
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const similarLetters = [];

  for (let i = 0; i < str.length; i++) {
    similarLetters.push(searchSimilarLetters(i, str));
  }
}

module.exports = {
  encodeLine
};
