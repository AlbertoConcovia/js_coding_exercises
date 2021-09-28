function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const newArray = []
  for (let i = 0; i < nums.length; i++) {
    if (Number(nums[i]) < 1) newArray.push(nums[i]);
  }
  return newArray;  
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const newArrayNames = []
  for (let i = 0; i < names.length; i++) {
    if ( names[i].substring(0,1) === char ) {
      newArrayNames.push(names[i]);
    }
  }
  return newArrayNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const newArrayWords = []
  for (let i = 0; i < words.length; i++) {
    if ( words[i].substring(0,3) === 'to ' ) newArrayWords.push(words[i]);
  }
  return newArrayWords;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const arrayIngeter = []
  for (let i = 0; i < nums.length; i++) {
    if ( Number.isInteger(nums[i]) === true ) arrayIngeter.push(nums[i]);
  }
  return arrayIngeter;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const newArrayUsers=[];
  for ( let i=0 ; i < users.length; i++ ) {
    newArrayUsers.push(users[i].data.city.displayName);
  }
  return newArrayUsers;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const arraySquareRoots=[];
  for ( let i=0 ; i < nums.length; i++ ) {
    let squareRoot = Math.sqrt((nums[i]));
    if (Number.isInteger(squareRoot) === false) {
      squareRoot = squareRoot.toFixed(2);
    }
    arraySquareRoots.push(Number(squareRoot));
  }
  return arraySquareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const arraySentence =[];
  for ( let i=0 ; i < sentences.length; i++ ) {
    if ( sentences[i].toUpperCase().search(str.toUpperCase()) >= 0 ){
      arraySentence.push(sentences[i]);
    }
  }
  return arraySentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var arrayLongestSide = [] ;
  for (let i=0; i < triangles.length; i++) {
    var longestSide = 0;
    for (let x=0; x < triangles[x].length; x++) {
      if (triangles[i][x] > longestSide) longestSide = triangles[i][x];
    }
    arrayLongestSide.push(longestSide);
  }
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
  getLongestSides
};
