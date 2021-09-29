const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // test "returns the next number after the given number in the array"
  // find the index of the number in the array
  // increment index by one  and find the new number
  // return the next nummber
  var indexNum = nums.indexOf(n);
  if (indexNum === -1 || indexNum + 1 === nums.length) return null;
  const foundNextNum = nums.find((value, index) => index === indexNum + 1);
  return foundNextNum;
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // test "returns an object with the count of 1s and 0s in a string"
  // match funcion
  // object
  const objStrCount = {
    1: 0,
    0: 0,
  };
  var count1 = (str.match(/1/g) || []).length;
  var count0 = (str.match(/0/g) || []).length;
  objStrCount[1] = count1;
  objStrCount[0] = count0;
  return objStrCount;
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // test("reverses the digits of a number", () => {
  // reverse function
  // return nReverse
  const nReverse = parseFloat(n.toString().split('').reverse().join(''))  ;
  return nReverse;
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
