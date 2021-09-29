function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // test "returns an array of numbers smaller than 1"
  // Filter function
  const newArray = nums.filter(function (item) {
    if (item < 1) {
      return true;
    } else {
      return false;
    }
  });
  return newArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // test "returns an array of names beginning with the specified character"
  // filter function
  const newArrayNames = names.filter(function (item) {
    if (item.substring(0, 1) === char) {
      return true;
    } else {
      return false;
    }
  });
  return newArrayNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  //test("returns an array of words that are considered verbs (because they begin with 'to ')"
  // filter function
  // return the new array
  const newArrayWords = words.filter(function (item) {
    if (item.substring(0, 3) === "to ") {
      return true;
    } else {
      return false;
    }
  });
  return newArrayWords;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // test "returns an array containing only integers"
  // filter function
  // retun new arrayInteger
  const arrayIngeter = nums.filter(function (item) {
    if (Number.isInteger(item) === true) {
      return true;
    } else {
      return false;
    }
  });
  return arrayIngeter;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // test "returns an array of the cities of each user"
  // map function
  // return new array newArrayUsers
  const newArrayUsers = users.map(function (item) {
    return item.data.city.displayName;
  });
  return newArrayUsers;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  //test "gets the square root of each number to 2 decimal places"
  // map function
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
  //filter function
  const arraySentence = sentences.filter((e) => {
    if (e.toUpperCase().search(str.toUpperCase()) >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return arraySentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // test "returns the longest side of each set of triangle data"
  // map function
  // Math.max function
  var arrayLongestSide = triangles.map(function (item) {
    return Math.max(...item);
  });
  return arrayLongestSide;
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
