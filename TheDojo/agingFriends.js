var friends = "Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27, Lee is 12";

function splitString(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}

var string1 = splitString(friends, ',');
//This is now a list containing my n friends, in this case n = 5

/*[ 'Xola is 23',
  ' Peter is 18',
  ' Oya is 29',
  ' Ellie is 20',
  ' Sive is 27' ]
*/

//Next Remove 'is' in  friend and make each a list in one LIST

var friends2 = [];
for(var i =0; i< string1.length; i ++){
	var friend = string1[i].split(' is')
	friends2.push(friend);
}

console.log(friends2);

//Now get the Names and Ages separately

//--------------------------------------
//Ages :  23, 18, 29, 20, 27
//Names  : Xola, Peter, Oya, Ellie, Sive
//----------------------------------------

// var ages = [];
// var names = [];

//Enable this to get just on obj containing all names
var friendObj = {};

friends2.forEach(function(friendz){
	// var friendObj = {};
	var name = friendz[0];
	var age = Number(friendz[1]);


	// ages.push(age);
	// names.push(name);

	friendObj[name] = age;
})

console.log(friendObj)

//Sorting an Object---------------------

var sortable =[];
for(var guy in friendObj){
	sortable.push([guy, friendObj[guy]])
	sortable.sort(function(a, b){
		return a[1]-b[1]
	})
}

console.log("------Sorted Array-------")
console.log(sortable);

sortable.forEach(function(item){
	var ages =[];
	var age = item[1];
	var name = item[0];
	ages.push(age);

	for (var i =0; i < ages.length; i++){
		if ( ages[i]  >= 29){
			console.log("The Older one is " + name + " who is " + ages[ages.length-1])
		}
	}

	if(item[1] >= 27){

		console.log(ages)
		// console.log("The Older is : " + name + " " + item[1])
	}

	if(item[1] < 20){
		console.log(" ---------------------------------------------------")
		console.log(name + " is " + item[1] + " & is younger than Ellie");
		console.log(" ---------------------------------------------------")
	}
})
/*
{ Xola: ' 23',
  ' Peter': ' 18',
  ' Oya': ' 29',
  ' Ellie': ' 20',
  ' Sive': ' 27' }
*/


///Works To Sort

// keysSorted = Object.keys(friendObj).sort(function(a, b){
// 	return friendObj[a] - friendObj[b];
// })
// console.log("Sorted : " + keysSorted)





// var age = 0;
// 	var name = "";

// 	for(var prop in friendObj){
// 		var ageThis = friendObj[prop];

// 		console.log("THis age " + ageThis)

// 		if(Number(ageThis) === Number(23) ){
// 			name = prop;
// 			age = friendObj[prop];
// 		}
// 		var name = prop;
// 		var age = Number(friendObj[prop]);
// 	}
// console.log("Name : " + name + " = " + age);
