var assert = require('assert');
var getOlderFriend = require ('../getOlderFriend');
var youngerThanGiven = require('../youngerThanGiven');
var friends = "Xola is 23, Peter is 18, Oya is 9, Ellie is 20, Sive is 27, Lee is 12";
//[Describe----]---------------------------------------------
describe("Get The Oldest Friend from my Friends and anyone younger than Ellie", function(){
  //Who's Older ---
  it('should retun the older Friend from my friends', function(){
    assert.equal(getOlderFriend(friends), 'Sive is 27');
  });
  //Who's Younger than Ellie ---
  it('should return who is younger than Ellie', function(){
    assert.deepEqual(youngerThanGiven(friends, 'Xola is 23'),
     [ 'Peter is 18', 'Oya is 9', 'Ellie is 20', 'Lee is 12']
   );
  });
});
