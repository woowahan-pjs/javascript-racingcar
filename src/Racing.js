class Racing {
  #cars;
  #attemptCount;

  constructor(cars, attemptCount) {
    this.#cars = cars;
    this.#attemptCount = attemptCount;
  }

  race(condition) {
    const results = [];
    for (let index = 0; index < this.#attemptCount.value; index++) {
      results.push(this.#cars.map((it) => this.#move(it, condition)));
    }
    return results;
  }

  #move(car, condition) {
    car.move(condition);
    const { name, position } = car;
    return { name, position };
  }
}

module.exports = Racing;
