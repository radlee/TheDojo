var friends = "Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27, Lee is 12";

function splitString(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}

var string1 = splitString(friends, ',');

//Next Remove 'is' in  friend and make each a list in one LIST
var friends2 = [];
for(var i =0; i< string1.length; i ++){
	var friend = string1[i].split(' is')
	friends2.push(friend);
}
// console.log(friends2);

//Create a list of Friends Object -----
var friendsList =[];
friends2.map(function(friend){
	var frnd = {
		Name : friend[0],
		Age : friend[1]
	}
	friendsList.push(frnd);
})
// console.log(friendsList)

//Which of my Friends is the Oldest ----
var olderFriend = function(friendsObjects){
	var older = -Infinity;
	var name ='';
	friendsObjects.forEach(function(friend){
		if(friend.Age > older){
			older = friend.Age;
			name = friend.Name;
		}
	})
	console.log("\n--------------------------------------------")
	console.log("The Older friend is " + name + " who's " + older + " years.");
	console.log("--------------------------------------------")
	return older;
}
olderFriend(friendsList);

var younger =[];
var checkTheyoungest = function(listObs, name){
	console.log("|-" + name.Name + " is " + name.Age + " years old -|")
	console.log("--------------------------------------------")
	listObs.forEach(function(friend){
		if(friend.Age < name.Age){
			younger.push(friend)
		}
	})
	younger.forEach(function(friend){
		console.log("\n--------------------------------------------")
		console.log("Younger than " + name.Name + " : >> " + friend.Name + " = " + friend.Age)
		console.log("--------------------------------------------")
	})
}
//Parse in the list of friends Objects and the Object you wanna compare with
checkTheyoungest(friendsList, { Name: ' Ellie', Age: ' 20' })
// console.log(younger);
