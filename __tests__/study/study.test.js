// https://inpa.tistory.com/entry/📚-null-undefined-NaN
it.each([false, 0, "", null, undefined, NaN])(
  "조건 비교에서 거짓인 특수값 (%s)",
  (parameter) => {
    expect(!!parameter).toBe(false);
  }
);

it.each([-1, 1])("숫자는 0이 아니면 모두 참이다 (%i)", (number) => {
  expect(number).toBeTruthy();
});

it("특수값이 포함된 경우 max()", () => {
  expect(Math.max()).toBe(-Infinity);
  expect(Math.max(null)).toBe(0);
  expect(Math.max(NaN)).toBeNaN();
  expect(Math.max(undefined)).toBeNaN();
  expect(Math.max(null, 100)).toBe(100);
  expect(Math.max(NaN, 100)).toBeNaN();
  expect(Math.max(undefined, 100)).toBeNaN();
});
