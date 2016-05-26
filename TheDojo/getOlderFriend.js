module.exports = function(friendsString){
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
	return lisfOfObjects[lisfOfObjects.length -1 ].sayNameAndAge;
}
