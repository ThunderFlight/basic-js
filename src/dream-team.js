const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  const filteredNames = members.filter((item) => typeof item === 'string').map((item) => item.trim().toUpperCase()).sort()
  const initialValue = '';
  return filteredNames.reduce(
    (accumulator, currentValue) => accumulator + currentValue[0].trim(),
    initialValue,
  )
}

module.exports = {
  createDreamTeam
};