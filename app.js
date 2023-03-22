// let name = prompt("Please enter your name.");
// let Age = prompt('Please enter your age.')

// while (Age >= 100 || Age <= 0) {
//   Age = prompt("Please enter your age again.")
// }

// let gender =
//  findout();

// function findout() {
// let gender;
//   while  (gender !== 'male' && gender !== 'female') {
//  gender = prompt("Please enter your gender (male or female): ");

// } 
  
// if (gender === "male") {
//   alert("Hello Mr " + name);
// } else if (gender === "female") {
//   alert("Hello Ms " + name);
// }

// return gender;
// }

// let drink = prompt("do you want a hot or a cold drink?")
// let drinkName= prompt("name of the drink")
// alert("your drink is getting prepared")
// let arr = [ name , gender  , drink , drinkName]

// for (let i = 0 ; i < arr.length; i++){
//   console.log(arr[i])

  
// }
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault(); // to handle the event yourself insted of the browser
  
  // Get the form data
  const userInput= document.getElementById("userInput")

  const formData = new FormData(myForm);
  // Log the form data to the console
  console.log(formData.get("username"));
  console.log(formData.get("age"));
  
 const para = document.createElement("p");
 para.innerHTML = formData.get("username");
 userInput.appendChild(para);
  
 const age = document.createElement("p");
 age.innerHTML = formData.get("age");
 userInput.appendChild(age);

//  const gender = document.createElement("p");
//  gender.innerHTML = formData.get("gender");
//  myForm.appendChild(gender);

//  const par = document.createElement("p");
//  par.innerHTML = formData.get("number");
//  myForm.appendChild(par);

//  const par = document.createElement("p");
//  par.innerHTML = formData.get("number");
//  myForm.appendChild(par);
});





// /////////////////////
// const name = document.getElementById("name")

// const para = document.createElement("p");
//  para.innerHTML = name;
// userInput.appendChild(para)
// const ul = document.createElement("ul");
// userInput.appendChild(ul)
// const li = document.createElement("li")
// li.textContent= `Gender :  ${gender} `;
// userInput.appendChild(li)
// const li2 = document.createElement("li")
// li2.textContent= `Age :  ${Age} `;
// userInput.appendChild(li2)
// const li3 = document.createElement("li")
// li3.textContent= `Drink : ${drink} ${drinkName}   `;
// userInput.appendChild(li3)

// const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   alert("your drink is getting prepared")
// });