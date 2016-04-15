var sets = "4 sets of red, 3 sets of blue, and 3 sets of yellow";
var prices = "R4 for red, R5 for blue, and R5.50 for yellow";


var splitString = function(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}

var setsString = splitString(sets, ',');
var pricesString = splitString(prices, ',');

console.log(setsString);
console.log(pricesString);
