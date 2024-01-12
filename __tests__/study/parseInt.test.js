// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt
describe("parseInt는", () => {
  it.each(["0x15", "0X15"])(
    "입력값이 0x로 시작하면 16진수로 변환한다 (%s)",
    (parameter) => {
      expect(parseInt(parameter)).toBe(21); // 16 * 1 + 5
    }
  );

  it.each(["15", "015"])(
    "입력값이 0x로 시작하지 않으면 10진수로 변환한다 (%s)",
    (parameter) => {
      expect(parseInt(parameter)).toBe(15);
    }
  );

  it("변환할 기수를 지정할 수 있다", () => {
    expect(parseInt("17", 8)).toBe(15);
  });

  it("앞에 오는 숫자 문자만 변환한다 (%s)", () => {
    expect(parseInt("15e2", 10)).toBe(15);
    expect(parseInt("15px", 16)).toBe(21);
  });

  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN
  it.each(["", null, undefined])(
    "숫자가 아니면 NaN을 반환한다",
    (parameter) => {
      const actual = parseInt(parameter);
      expect(actual).toBeNaN();
      expect(typeof actual).toBe("number");
    }
  );
});
