const Car = require("../src/Car");

describe("자동차는", () => {
  it("이름과 위치를 가진다", () => {
    expect(() => new Car("Jason", 0)).not.toThrow();
  });

  it("위치의 초기값이 0이다", () => {
    const car = new Car("Jason");
    expect(car.position).toBe(0);
  });

  it.each([0, null, undefined])(
    "이름이 반드시 문자로 이루어져야 한다 (%s)",
    (name) => {
      expect(() => new Car(name)).toThrow();
    }
  );

  it("이름이 5글자를 초과할 수 없다", () => {
    expect(() => new Car("동해물과백두산이")).toThrow();
  });

  it("움직인다", () => {
    const car = new Car("Jason");
    car.move(() => true);
    expect(car.position).toBe(1);
  });

  it("멈춘다", () => {
    const car = new Car("Jason");
    car.move(() => false);
    expect(car.position).toBe(0);
  });
});
