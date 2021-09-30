const {
  sumDigits,
  // createRange,
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
