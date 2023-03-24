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
  

// for (let i = 0 ; i < arr.length; i++){
//   console.log(arr[i])

  
// }




  const myForm = document.getElementById("myForm");
  
  myForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const userInput= document.getElementById("userInput")
    // id = myfrom /* Logs the value of the "name" field *\
    const formData = new FormData(myForm);
  
    // Name
   const username = document.createElement("h3");
   username.innerHTML = formData.get("username");
   userInput.appendChild(username);
   
   const ul = document.createElement("ul");
   userInput.appendChild(ul) 
  
   const age = document.createElement("li");
   age.innerHTML = formData.get("age");
   userInput.appendChild(age);
  
   const gender = document.createElement("li");
   gender.innerHTML = formData.get("gender");
   userInput.appendChild(gender);
  
  // Get the checkbox elements
  const hotCheckbox = document.querySelector('input[name="hot"]');
  const coldCheckbox = document.querySelector('input[name="cold"]');
  
  let drinkTemperature;
  if (hotCheckbox.checked) {
    drinkTemperature = "hot";
  }
  else if (coldCheckbox.checked) {
    drinkTemperature = "cold";
  }
  
  
  
  const drink = document.createElement("li");
  drink.innerHTML = drinkTemperature;
  userInput.appendChild(drink);
  
  
  
   const drinkname = document.createElement("li");
   drinkname.innerHTML = formData.get("drinkname");
   userInput.appendChild(drinkname);
  
  
  });
