const { maxByPosition, filterByPosition } = require("./cars");

class Racing {
  #cars;
  #attemptCount;

  constructor(cars, attemptCount) {
    this.#cars = cars;
    this.#attemptCount = attemptCount;
  }

  /**
   * @param { () => boolean } condition
   */
  race(condition) {
    return Array.from({ length: this.#attemptCount.value }, () =>
      this.#cars.map((it) => this.#move(it, condition))
    );
  }

  #move(car, condition) {
    car.move(condition);
    return { name: car.name, position: car.position };
  }

  findWinners() {
    return filterByPosition(this.#cars, maxByPosition(this.#cars));
  }
}

module.exports = Racing;
