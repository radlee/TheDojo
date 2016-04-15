var theString = "this is a really interesting string";

//to find all the words in the sentence - we can the string by spaces
var words = theString.split(" ");
//["this", "is", "a", "really", "interesting", "string"]
console.log(words)

var wordStats = words.map(function(word){
    //more attributes can be added below
    return {
        word : word,
        length : word.length
    }
});

// list of objects {name : "", length : ""}
console.log(wordStats);
//this list is very useful to find the longest word & word length,
// shortest word, average word length etc

