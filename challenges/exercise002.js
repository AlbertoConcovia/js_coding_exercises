function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester"; 
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  var integerPartNumber = Math.floor(Number(people) / 40);
  var remainderPart = Number(people) % 40;
  if (remainderPart > 0) return integerPartNumber + 1;
  else return integerPartNumber;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var numberOfSheep = 0;
  arr.forEach((e) => {
    if (e === "sheep") numberOfSheep += 1;
  });
  return numberOfSheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  const cityPerson = person.address.city;
  const letterPostCode = person.address.postCode.substring(0, 1);
  if (letterPostCode !== "M") return false;
  else if (cityPerson === "Manchester") return true;
  else return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
