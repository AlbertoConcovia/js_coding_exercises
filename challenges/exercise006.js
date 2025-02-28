/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  let sumArr = 0;
  arr.forEach((e) => {
    if (e % 3 === 0 || e % 5 === 0) sumArr += e;
  });
  return sumArr;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  let strValid = true;
  const charsValid = "CGTA";
  [...str].forEach((e) => {
    strValid = charsValid.includes(e);
  });
  return strValid;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  // test "return pairs"
  // T always pairs with A,
  // C always pairs with G.
  let strValid = true;
  let strPairs = "";
  const charsValid = "CGTA";
  const strNoValid = "invalid character";

  // character validation
  [...str].forEach((e) => {
    strValid = charsValid.includes(e);
  });

  // if there are a invalid character send a error message
  if (strValid === false) {
    strPairs = strNoValid;
  } else {
    // if the character is valid return the pairs
    [...str].forEach((e) => {
      switch (e) {
        case "A":
          strPairs += "T";
          break;
        case "T":
          strPairs += "A";
          break;
        case "C":
          strPairs += "G";
          break;
        case "G":
          strPairs += "C";
          break;
        default:
          break;
      }
    });
  }
  return strPairs;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");

  let isPrime = true;
  // check if number is equal to 0 or 1
  if (n === 0 || n === 1) return false;

  // check if number is greater than 1
  if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  }
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  //dynamic matrix declaration
  let newMatrix = Array.from(Array(n), () => new Array(n));

  //I iterate the matrix to fill it in
  for (let i = 0; i < n; i++) {
    for (let x = 0; x < n; x++) {
      newMatrix[i][x] = fill;
    }
  }
  return newMatrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  // test "it should return true, if there are at least 3 staff"

  let quantityDays = 0;
  // forEach array
  staff.forEach((e) => {
    if (e.rota.includes(day) === true) {
      // if the day exist in the rota, add 1.
      quantityDays += 1;
    }
  });
  return quantityDays >= 3;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
};
