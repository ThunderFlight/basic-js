const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  initialValue: '',
  getLength() {
    return this.initialValue.split('~~').length
  },
  addLink(value) {
    if (this.initialValue.length === 0) {
      this.initialValue += `( ${value} )`
      return this
    }
    this.initialValue += `~~( ${value} )`
    return this
  },
  removeLink(position) {
      if (typeof position === 'number' && position > 0 && position <= this.initialValue.split('~~').length) {
        this.initialValue = this.initialValue.split('~~').filter((item, index) => index !== position - 1).join('~~')
        return this
      }
      this.initialValue = ''
      throw new Error("You can't remove incorrect link!")
  },
  reverseChain() {
    this.initialValue = this.initialValue.split('~~').reverse().join('~~')
    return this
  },
  finishChain() {
    const copy = this.initialValue
    this.initialValue = ''
    return copy
  }
};

module.exports = {
  chainMaker
};
