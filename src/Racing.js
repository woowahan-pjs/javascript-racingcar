const { maxByPosition, filterByPosition } = require("./cars");

class Racing {
  #cars;
  #attemptCount;

  constructor(cars, attemptCount) {
    this.#cars = cars;
    this.#attemptCount = attemptCount;
  }

  /**
   * @param { () => boolean } movable
   */
  race(movable) {
    return Array.from({ length: this.#attemptCount.value }, () =>
      this.#cars.map((it) => this.#move(it, movable))
    );
  }

  #move(car, movable) {
    car.move(movable);
    return { name: car.name, position: car.position };
  }

  findWinners() {
    return filterByPosition(this.#cars, maxByPosition(this.#cars));
  }
}

module.exports = Racing;
