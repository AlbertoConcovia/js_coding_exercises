function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return `${firstName.substring(0, 1).toUpperCase()}.${lastName
    .substring(0, 1)
    .toUpperCase()}`;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  var vat = (originalPrice * vatRate) / 100;
  vat = vat.toFixed(2);
  var sum = Number(originalPrice) + Number(vat);
  return sum;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let amountReduction = (originalPrice * reduction) / 100;
  amountReduction = amountReduction.toFixed(2);
  let salePrice = Number(originalPrice) - Number(amountReduction);
  return salePrice;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let lengthMiddleCharacter = Math.floor(str.length / 2);
  let valueRemainder = str.length % 2;
  if (valueRemainder === 0) {
    return str.substring(lengthMiddleCharacter - 1, lengthMiddleCharacter + 1);
  } else {
    return str.substring(lengthMiddleCharacter, lengthMiddleCharacter + 1);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  const arrayWordsReverseAll = words.map((element) => {
    return element.split("").reverse().join("");
  });
  return arrayWordsReverseAll;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var totalUsersLinux = 0;
  users.forEach((e) => {
    if (e.type === "Linux") totalUsersLinux += 1;
  });
  return totalUsersLinux;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var sumScores = 0;
  scores.forEach((e) => (sumScores += Number(e)));
  var meanScore = sumScores / scores.length;
  var remainder = sumScores % scores.length;
  if (remainder !== 0) {
    meanScore = Number(meanScore.toFixed(2));
  }
  return meanScore;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if ((n % 3 == 0) & (n % 5 == 0)) return "fizzbuzz";
  else if (n % 3 == 0) return "fizz";
  else if (n % 5 == 0) return "buzz";
  else if ((n % 3 !== 0) & (n % 5 !== 0)) return 4;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
