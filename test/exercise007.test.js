const {
  sumDigits,
  createRange,
  // getScreentimeAlertList,
  // hexToRGB,
  // findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("should it returns 6", () => {
    expect(sumDigits(123)).toBe(6);
  });
  test("should it returns 15", () => {
    expect(sumDigits(1473)).toBe(15);
  });
});

describe("createRange", () => {
  // start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
  test("should it returns step by 3", () => {
    const result = [3, 5, 7, 9, 11];
    expect(createRange(3, 11, 2)).toStrictEqual(result);
  });
  // Step is an optional parameter. If it is not provided, assume the step is 1.
  test("should it returns step by 1 ", () => {
    const result = [3, 4, 5, 6];
    expect(createRange(3, 6)).toStrictEqual(result);
  });
});
