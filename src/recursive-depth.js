const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.array = []
    this.count = 0
  }

  calculate(arr, count, array) {
    count += 1
    if (arr.filter((item) => Array.isArray(item)).length === 0) {
      array.push(count)
      count = 0
      return array.sort((a, b) => b - a)[0]
    }

    for (let item of arr) {
      if (Array.isArray(item)) {
        this.calculate(item, count, array)
      }
    }

    const searchDepth = array.sort((a, b) => b - a)[0]
    if (arr.filter((item)  => Array.isArray(item)).length > 1) {
      return searchDepth
    }
    console.log(array)
    return searchDepth
  }

  calculateDepth(arr) {
    this.count = 0
    this.array = []
    return this.calculate(arr, this.count, this.array)
  }
}

module.exports = {
  DepthCalculator
};
