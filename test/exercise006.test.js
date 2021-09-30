const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  //   createMatrix,
  //   areWeCovered,
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([3, 5])).toBe(8);
    expect(sumMultiples([1, 2, 5, 10, 15])).toBe(30);
  });
  test("if no number 3 or 5 in the array, returns 0", () => {
    expect(sumMultiples([1, 2, 4, 8])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("return true - characters C and T", () => {
    expect(isValidDNA("C")).toBe(true);
    expect(isValidDNA("T")).toBe(true);
  });
  test("return true - characters CGTA", () => {
    expect(isValidDNA("CGTA")).toBe(true);
  });
  test("return false - characters B", () => {
    expect(isValidDNA("B")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("return pairs TGAC - send ACTG", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
  });
  test("return pairs A - send T", () => {
    expect(getComplementaryDNA("A")).toBe("T");
  });
  test("return characters no valid", () => {
    expect(getComplementaryDNA("B")).toBe("invalid character");
  });
});

describe("isItPrime return true/false depending it is a prime number or not", () => {
  test("return true if the number is prime", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(11)).toBe(true);
  });
  test("return false if the number is not prime", () => {
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(9)).toBe(false);
  });
  test("return false if the number is 1 or 0", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
  });
});
