const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // test "returns the next number after the given number in the array"
  // find the index of the number in the array
  // then increment index by one  and find the new number
  let indexNum = nums.indexOf(n);
  if (indexNum === -1 || indexNum + 1 === nums.length) return null;
  return nums.find((value, index) => index === indexNum + 1);
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // test "returns an object with the count of 1s and 0s in a string"
  // match funcion
  const objStrCount = {
    1: 0,
    0: 0,
  };
  objStrCount[1] = (str.match(/1/g) || []).length;
  objStrCount[0] = (str.match(/0/g) || []).length;
  return objStrCount;
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // test("reverses the digits of a number", () => {
  // reverse function andreturn nReverse
  return parseFloat(n.toString().split("").reverse().join(""));
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // test "returns the total of the numbers in all sub arrays"
  let sumNumbers = 0;
  arrs.forEach((e) => {
    sumNumbers += e.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  });
  return sumNumbers;
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // test "returns an array with the first and last items swapped"
  if (arr.length < 2) return arr;
  const arrLastItem = arr[arr.length - 1];
  arr[arr.length - 1] = arr[0];
  arr[0] = arrLastItem;
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // test "returns true if any of the properties of an object contain the specified string"
  // for by key and then includes function
  let found = false;
  for (let key in haystack) {
    if (typeof haystack[key] === "string") {
      if (
        haystack[key].toUpperCase().includes(searchTerm.toUpperCase()) === true
      )
        return (found = true);
    }
  }
  return found;
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // test "returns the frequencies of each word in a string"
  const arrStr = str.replace(/[!?,]/g, "").toLowerCase().split(" ");
  const objFreqStr = {};
  arrStr.forEach ( (e) => {
    const char = e;
    if ( objFreqStr[char] === undefined ) {
      objFreqStr[char] = 1;
    } else {
      objFreqStr[char] += 1;
    }
  });
  return objFreqStr;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
