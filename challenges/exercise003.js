function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const newArraySquares = nums.map((element) => {
    return Math.pow(element, 2);
  });
  return newArraySquares;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let wordsCamelCase = "";
  words.forEach((value, index) => {
    if (index === 0) {
      wordsCamelCase += value;
    } else {
      const wordToUpperCase =
        value.substring(0, 1).toUpperCase() + value.substring(1, value.length);
      wordsCamelCase += wordToUpperCase;
    }
  });
  return wordsCamelCase;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let totalSubjects = 0;
  people.forEach((e) => {
    totalSubjects += e.subjects.length;
  });
  return totalSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // iterate for each object
  let foundIt = false;
  menu.forEach((e) => {
    // iterate for each element of array
    e.ingredients.forEach((value) => {
      if (value == ingredient) {
        return (foundIt = true);
      }
    });
  });
  return foundIt;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const intersection = arr1.filter((e) => arr2.includes(e)).sort();
  const arrayUniqueSet = new Set(intersection);
  const backToArray = [...arrayUniqueSet];
  return backToArray;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
