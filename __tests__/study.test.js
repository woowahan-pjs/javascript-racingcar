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
