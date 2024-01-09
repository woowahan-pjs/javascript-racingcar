const MAXIMUM_NAME_LENGTH = 5;

class Car {
  #name;
  #position;

  constructor(name, position = 0) {
    if (typeof name !== "string") {
      throw new Error("자동차 이름은 문자로 이루어져야 합니다.");
    }
    if (name.length > MAXIMUM_NAME_LENGTH) {
      throw new Error("자동차 이름은 5자 이하여야 합니다.");
    }
    this.#name = name;
    this.#position = position;
  }

  /**
   * @param { () => boolean } movable
   */
  move(movable) {
    if (typeof movable === "function" && movable()) {
      this.#position++;
    }
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

module.exports = Car;
