var sentence = "I saw 3 bears, and 7 toads in 50 meters from the tallest tree in the park."
var makeAnObject = function(str){
  var Words = sentence.replace(/\d+/g,',');
  function splitString(stringToSplit, separator){
    var arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings;
  }
  var noNumbers = splitString(Words, ' ');
  var cleanString =[];
  var string = splitString(str, ' ');
  var removed = noNumbers.map(function(word){
    var cleanWord = word.replace(/[.”,\/#!$%\^&\*;:{}=\-_`~() " "]/g,"");
    var cleanWord = cleanWord.replace(/\s+/g,"");
    cleanString.push(cleanWord);
  })
  var listOfWords = [];
  cleanString.forEach(function(item){
    if(item != ""){
      listOfWords.push(item);
    }
  });
  console.log(listOfWords);
  //Extract Numbers from the Original String---
  var listOfNumbers =   sentence.match(/[0-9]+/g);
  console.log(listOfNumbers);

  listOfNumbers.forEach(function(number){
    if(number > 15){
      console.log(number);

    }
  })

  console.log("Words Shorter than 3");
  listOfWords.forEach(function(word){
    if(word.length < 3){
      console.log(word)

    }
  })
}

makeAnObject(sentence);
