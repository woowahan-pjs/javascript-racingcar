function findWinners(cars) {
  return filterByPosition(cars, maxByPosition(cars));
}

function maxByPosition(cars) {
  return Math.max(...cars.map((it) => it.position));
}

function filterByPosition(cars, position) {
  return cars.filter((it) => it.position === position);
}

module.exports = findWinners;
