/**
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

module.exports = getRandomIntInclusive;
