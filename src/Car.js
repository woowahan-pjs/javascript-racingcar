class Car {
  #name;
  #position;

  constructor(name, position = 0) {
    if (typeof name !== "string") {
      throw new Error("자동차 이름은 문자로 이루어져야 합니다.");
    }
    if (name.length > 5) {
      throw new Error("자동차 이름은 5자 이상이어야 합니다.");
    }
    this.#name = name;
    this.#position = position;
  }

  get position() {
    return this.#position;
  }
}

module.exports = Car;
