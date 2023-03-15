let name = prompt("Please enter your name");
let gender = prompt("Please enter your gender (male or female):");

if (gender === "male") {
  alert("Hello Mr " + name);
} else if (gender === "female") {
  alert("Hello Ms " + name);
} else {
  alert("Hello " + name);
}
let drink = prompt("do you want a hot or a cold drink?")
let drinkName= prompt("name of the drink")
alert("your drink is getting prepared")

console.log(name + " ordered a " + drink + " "+drinkName+ ".");
