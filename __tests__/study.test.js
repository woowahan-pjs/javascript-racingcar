// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN
it.each(["", null, undefined])(
  "parseInt는 숫자가 아니면 NaN을 반환한다",
  (parameter) => {
    const actual = parseInt(parameter);
    expect(actual).toBeNaN();
    expect(typeof actual).toBe("number");
  }
);

// https://inpa.tistory.com/entry/📚-null-undefined-NaN
it.each([0, NaN, "", null, undefined])(
  "조건 비교에서 거짓인 특수값 (%s)",
  (parameter) => {
    expect(!!parameter).toBe(false);
  }
);

it("특수값이 포함된 경우 max()", () => {
  expect(Math.max()).toBe(-Infinity);
  expect(Math.max(null)).toBe(0);
  expect(Math.max(NaN)).toBeNaN();
  expect(Math.max(undefined)).toBeNaN();
  expect(Math.max(null, 100)).toBe(100);
  expect(Math.max(NaN, 100)).toBeNaN();
  expect(Math.max(undefined, 100)).toBeNaN();
});
