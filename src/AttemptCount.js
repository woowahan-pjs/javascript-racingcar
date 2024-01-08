class AttemptCount {
  #value;

  constructor(value) {
    value = parseInt(value, 10);
    if (!value || value < 0) {
      throw new Error("시도 횟수는 0보다 큰 숫자여야 합니다.");
    }
    this.#value = value;
  }

  get value() {
    return this.#value;
  }
}

module.exports = AttemptCount;
