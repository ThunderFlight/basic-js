const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let copyArray = arr
  if (!Array.isArray(copyArray)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  for (let i = 0; i < copyArray.length; i++) {
    if (copyArray[i] === '--double-next') {
      if(copyArray[i + 1]) {
        copyArray[i] = arr[i + 1]
      } else {
        copyArray.splice(i, 1)
      }
    }
    if (copyArray[i] === '--double-prev') {
      if(copyArray[i - 1]) {
        copyArray[i] = copyArray[i - 1]
      } else {
        copyArray.splice(i, 1)
      }
    }
    if (arr[i] === '--discard-prev') {
      copyArray = copyArray.filter((item) => item !== copyArray[i] && item !== copyArray[i - 1])
      i = 0
    }
    if (arr[i] === '--discard-next') {
      copyArray = copyArray.filter((item) => item !== copyArray[i] && item !== copyArray[i + 1])
      i = 0
    }
  }
  return copyArray
}

module.exports = {
  transform
};
