const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
let month = {
  'Dec': 'winter',
  'Feb': 'winter',
  'Jan': 'winter',
  'Mar': 'spring',
  'Apr': 'spring',
  'May': 'spring',
  'Jun': 'summer',
  'Jul': 'summer',
  'Aug': 'summer',
  'Sep': 'fall',
  'Oct': 'fall',
  'Nov': 'fall'
}
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (typeof date === 'number') {
    return 'Invalid date!'
  }
  return month[date.toString().slice(4,8).trim()]
}

module.exports = {
  getSeason
};
