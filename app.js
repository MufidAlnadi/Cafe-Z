let name = prompt("Please enter your name");

let gender = findout();
function findout(){
let gender;
  while  (gender !== 'male' && gender !== 'female') {
 gender = prompt("Please enter your gender (male or female): ");

} 
  
if (gender === "male") {
  alert("Hello Mr " + name);
} else if (gender === "female") {
  alert("Hello Ms " + name);
} }

let drink = prompt("do you want a hot or a cold drink?")
let drinkName= prompt("name of the drink")
alert("your drink is getting prepared")
let arr = [ name , gender  , drink , drinkName]

for (let i = 0 ; i < arr.length; i++){
  console.log(arr[i])
}

// test2
