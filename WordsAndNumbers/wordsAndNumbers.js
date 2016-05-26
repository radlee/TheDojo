var sentence = "I saw 3 bears, and 7 toads in 50 meters from the tallest tree in the park."

var wordsAndNumbers = function(string){
  function splitString(stringToSplit, separator){
  	var arrayOfStrings = stringToSplit.split(separator);
  	return arrayOfStrings;
  }
  var cleanString =[];
  var string = splitString(sentence, ' ');
  var removed = string.map(function(word){
    var cleanWord = word.replace(/[.”,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var cleanWord = cleanWord.replace(/\s+/g,"");
    cleanString.push(cleanWord);
  })
  console.log(cleanString)

  //Extract Numbers from the Original String---
  var number =   sentence.match(/[0-9]+/g);
  console.log(number);

  var wordsShorterThanThree =[];
  cleanString.forEach(function(word){
    if(word.length < 3){
      wordsShorterThanThree.push(word);
    }
  })
  console.log(wordsShorterThanThree);

  wordsShorterThanThree.forEach(function(x){
    console.log()
  })
}



wordsAndNumbers(sentence)
