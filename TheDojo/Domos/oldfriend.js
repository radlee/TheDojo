/*
Demo for Getting the older friend from the list of friends.
--------------------------------------------------------------------------
*/

var friends = "Xola is 53, Peter is 18, Oya is 29, Ellie is 20, Sive is 27, Lee is 12";
var oldfriend = function(friendsString){
	var arrayOfStrings = friendsString.split(", ");
	var lisfOfObjects = [];
	arrayOfStrings.map(function(old){
		var str = old.split(" is ");
		var result = {
			name : str[0],
			age : str[1],
			sayNameAndAge : old
		}
		lisfOfObjects.push(result);
	})
	var funct1 = function(list){
		list.sort(function(obj1, obj2){
			return obj1.age - obj2.age;
		})
	}
	funct1(lisfOfObjects);
	console.log(lisfOfObjects)
	console.log(lisfOfObjects[lisfOfObjects.length -1 ].sayNameAndAge);
}

oldfriend(friends);
