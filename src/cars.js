const Car = require("./Car");

function createCars(names) {
  return names.map((it) => new Car(it.trim()));
}

function filterByPosition(cars, position) {
  return cars.filter((it) => it.position === position);
}

function maxByPosition(cars) {
  return Math.max(...cars.map((it) => it.position));
}

module.exports = {
  createCars,
  filterByPosition,
  maxByPosition,
};
