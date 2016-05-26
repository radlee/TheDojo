module.exports = function(friendsString, name){
	var arrayOfStrings = friendsString.split(", ");
	var listOfFriendsObj = [];
	var newNameObj =[];
	var compareName = name.split(" is ");
	var result = {
		name : compareName[0],
		age : compareName[1]
	}
	newNameObj.push(result);
	arrayOfStrings.map(function(old){
		var str = old.split(" is ");
		var result = {
			name : str[0],
			age : Number(str[1]),
			sayNameAndAge : old
		}
		listOfFriendsObj.push(result);
	})
	var listOfYounger =[];
	listOfFriendsObj.forEach(function(item){
		if(item.age < newNameObj[0].age){
			listOfYounger.push(item.sayNameAndAge)
		}
	})
	return listOfYounger;
}
