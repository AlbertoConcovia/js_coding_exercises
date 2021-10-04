function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // test "returns an array of numbers smaller than 1"
  return nums.filter((item) => item < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // test "returns an array of names beginning with the specified character"
  return names.filter((item) => item.substring(0, 1) === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  //test("returns an array of words that are considered verbs (because they begin with 'to ')"
  return words.filter((item) => item.substring(0, 3) === "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // test "returns an array containing only integers"
  return nums.filter((item) => Number.isInteger(item) === true);
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // test "returns an array of the cities of each user"
  return users.map((item) => item.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  //test "gets the square root of each number to 2 decimal places"
  const arraySquareRoots = nums.map((item) => {
    let squareRoot = Math.sqrt(item);
    if (Number.isInteger(squareRoot) === false) {
      squareRoot = squareRoot.toFixed(2);
    }
    return Number(squareRoot);
  });
  return arraySquareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  //test"returns only the sentences containing the specified string"
  return sentences.filter((e) => e.toUpperCase().search(str.toUpperCase()) >= 0 );
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // map function and Math.max function with Spread Syntax
  return triangles.map( (item) => Math.max(...item) );
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};
