function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // for (let i = 0; i < nums.length; i++) {
  const newArray = [];
  nums.forEach(function (item) {
    if (item < 1) newArray.push(item);
  });
  return newArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // const newArrayNames = []
  // for (let i = 0; i < names.length; i++) {
  //   if ( names[i].substring(0,1) === char ) {
  //     newArrayNames.push(names[i]);
  //   }
  // }
  // return newArrayNames;
  const newArrayNames = [];
  names.forEach(function (item) {
    if (item.substring(0, 1) === char) newArrayNames.push(item);
  });
  return newArrayNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const newArrayWords = [];
  // for (let i = 0; i < words.length; i++) {
  words.forEach(function (item) {
    if (item.substring(0, 3) === "to ") newArrayWords.push(item);
  });
  return newArrayWords;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const arrayIngeter = [];
  // for (let i = 0; i < nums.length; i++) {
  nums.forEach(function (item) {
    if (Number.isInteger(item) === true) arrayIngeter.push(item);
  });
  return arrayIngeter;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const newArrayUsers = [];
  // for ( let i=0 ; i < users.length; i++ ) {
  users.forEach(function (item) {
    newArrayUsers.push(item.data.city.displayName);
  });
  return newArrayUsers;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const arraySquareRoots = [];
  // for ( let i=0 ; i < nums.length; i++ ) {
  nums.forEach((item) => {
    let squareRoot = Math.sqrt(item);
    if (Number.isInteger(squareRoot) === false) {
      squareRoot = squareRoot.toFixed(2);
    }
    arraySquareRoots.push(Number(squareRoot));
  });
  return arraySquareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const arraySentence = [];
  // for ( let i=0 ; i < sentences.length; i++ ) {
  sentences.forEach((e) => {
    if (e.toUpperCase().search(str.toUpperCase()) >= 0) arraySentence.push(e);
  });
  return arraySentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var arrayLongestSide = [];
  triangles.forEach(function (item) {
    var longestSide = 0;
    item.forEach(function (num) {
      if (num > longestSide) longestSide = num;
    });
    arrayLongestSide.push(longestSide);
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
