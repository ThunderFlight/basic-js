const { NotImplementedError } = require('../extensions/index.js');

const getDomainsFromLink = (item) => {
  const linkDelimiter = '.'

  return item.split(linkDelimiter).reverse();
}

function createArrayOfDomains(domains) {
  const arrOfDomains = [];

  for (let link of domains) {
    let linkElements = getDomainsFromLink(link);
    for (let element of linkElements) {
      if (!arrOfDomains.includes(element)) {
        arrOfDomains.push(element)
      }
    }
  }

  return arrOfDomains;
}

function countOfDomains(domains, arrOfDomains, i, count) {
  for (let element of domains) {
    if (element.includes(arrOfDomains[i])) {
      count += 1
    }
  }
  return count;
}

function createKeyOfDomains(i, dns, arrOfDomains) {
  for (let j = 0; j <= i; j += 1) {
    dns += `.${arrOfDomains[j]}`
  }
  return dns;
}

function createCountDomainsObject(arrOfDomains, domains) {
  const objectCountDns = {}

  for (let i = 0; i < arrOfDomains.length; i += 1) {
    let count = 0
    let dns = ''
    count = countOfDomains(domains, arrOfDomains, i, count);
    dns = createKeyOfDomains(i, dns, arrOfDomains);
    objectCountDns[dns] = count
  }
  return objectCountDns;
}

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const arrOfDomains = createArrayOfDomains(domains);

  return createCountDomainsObject(arrOfDomains, domains)
}

module.exports = {
  getDNSStats
};
