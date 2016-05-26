/*
Demo for Getting the list of all friends younger than any given friend, in
this case being Ellie who is 20.
--------------------------------------------------------------------------
*/

var friends = "Xola is 15, Peter is 38, Oya is 9, Ellie is 20, Sive is 17, Lee is 22";
var oldfriend = function(friendsString, name){
	var arrayOfStrings = friendsString.split(", ");
	var listOfFriendsObj = [];
	var newNameObj =[];
	var compareName = name.split(" is ");
	var result = {
		name : compareName[0],
		age : compareName[1]
	}
	newNameObj.push(result);
	console.log("\n------------------------------------------------------");
	console.log(newNameObj[0].name + " is " + newNameObj[0].age + " years old");
	console.log("------------------------------------------------------\n")
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
	console.log(listOfFriendsObj)
	console.log("\n------------------------------------------------------")
	console.log(listOfYounger)
	console.log("------------------------------------------------------")
}
oldfriend(friends, " Ellie is 20");
