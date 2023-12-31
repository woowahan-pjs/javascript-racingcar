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
});

describe("자동차 이동은", () => {
  let car;

  beforeEach(() => {
    car = new Car("Jason");
  });

  it.each([4, 5, 6, 7, 8, 9])(
    "조건이 4 이상이면 움직인다 (%i)",
    (condition) => {
      car.move(condition);
      expect(car.position).toBe(1);
    }
  );

  it.each([0, 1, 2, 3])("조건이 4 미만이면 멈춘다 (%i)", (condition) => {
    car.move(condition);
    expect(car.position).toBe(0);
  });
});
