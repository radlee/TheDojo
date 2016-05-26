var assert = require("assert");
var getNumbers = require("../makeAnObject");


var sentence = "I saw 3 bears, and 7 toads in 50 meters from the tallest tree in the park."

describe("Return the list of words and numbers in objects", function(){
  it("should return a list of numbers only", function(){
    assert.equal(getNumbers(sentance), [3, 7, 50]);
  });

  it("should return a list of words only", function(){
    assert.equal(getWords(sentance),
     ["I", "saw", "bears", "and", "toads", "in", "meters", "from", "the", "tallest",  "tree", "in", "the",  "park"]);
  });
});
