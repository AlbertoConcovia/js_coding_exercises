const {
  sumMultiples,
//   isValidDNA,
//   getComplementaryDNA,
//   isItPrime,
//   createMatrix,
//   areWeCovered,
} = require("../challenges/exercise006");

//  This function will receive an array of numbers
describe("sumMultiples", () => {
  test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([3, 5])).toBe(8);
    expect(sumMultiples([1, 2, 5, 10, 15])).toBe(30);
  });

  test("if no number 3 or 5 in the array, returns 0", () => {
    expect(sumMultiples([1, 2, 4, 8])).toBe(0);
  });
});
