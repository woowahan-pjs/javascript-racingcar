// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number
describe("Number는", () => {
  it("다양한 n진법을 변환할 수 있다", () => {
    expect(Number("0b101")).toBe(5);
    expect(Number("0o13")).toBe(11);
    expect(Number("0x0A")).toBe(10);
  });

  it("문자 e로 지수를 나타낼 수 있다", () => {
    expect(Number("17e2")).toBe(1700);
    expect(Number("175e-2")).toBe(1.75);
  });

  it.each(["", null])("일부 값은 0으로 변환한다 (%s)", (parameter) => {
    expect(Number(parameter)).toBe(0);
  });

  it("입력값 전체를 숫자로 변환할 수 없으면 NaN을 반환한다", () => {
    expect(Number("15px")).toBeNaN();
  });
});
