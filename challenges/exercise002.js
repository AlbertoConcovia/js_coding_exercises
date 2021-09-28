function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
    return  sandwich.fillings  ;
  }

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
    if ( person.city === "Manchester" ) return true ;
    else return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  var integerPartNumber = Math.floor(Number(people) / 40);
  var remainderPart =  Number(people) % 40;
  if ( remainderPart > 0 ) return integerPartNumber + 1 ;
  else return integerPartNumber ;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
