// let firstName = "Ross";
// let lastName = "Keenan";

// let myAge = 35;

// let myBoolVal = true;

// //if (myBoolVal == true) {
// //  alert("The value is true. ");
// //} else {
// //  alert("It's not true. ");
// //}

// let floatNumber = "1.5";

// let myStringNum = "10";

// myStringNum = Number.parseInt(myStringNum);

// floatNumber = Number.parseFloat(floatNumber);

// alert(myStringNum + floatNumber);

// // alert(`My name is ${myName}.`);

// // alert(typeof myName);

// //alert(myAge);

// //alert(firstName + " " + lastName);

// //alert(`${firstName} ${lastName}`);

// true = true
// 1 = true
//"aajskjlf;aj" = true

//false = false
// 0 = false
// "" = false

// let condition = "1";
// ///=== this matches data type and value of the variable
// if (condition === 1) {
//   alert("this variable is true");
// } else {
//   alert("This variable is false");
// }

// //turnary operator

// condition === "1" ? alert("This is true.") : alert("This is false.");

// let fruit = "apple";

// fruit === "orange"
//   ? alert("orange")
//   : fruit === "apple"
//   ? alert("apple")
//   : "fruit is not listed";

// //switch statement

// switch (fruit) {
//   case "apple":
//     alert("Apple!");
//     break;
//   case "orange":
//     alert("Orange!");
//     break;
//   default:
//     alert("Fruit is not found");
//     break;
// }

//array
// let yogurts = ["pineapple", "banana", "cheesecake", "vanilla", "key lime"];

//alert(Array.isArray(yogurts));

// alert(`The best flavor of yogurt is ${yogurts[1]}.`);

// alert(`There are ${yogurts.length} flavors of yogurt in the array.`);

// //eliminates the last item
// yogurts.pop();

// //adds item to the end of an array
// yogurts.push("blackberry");

// //removes first item in array
// yogurts.shift();

// //adds item to beginning of list
// yogurts.unshift("pear");

// //sorts array alphabetically
// alert(yogurts.sort());

//choosing a section of an array.
//yogurts = yogurts.slice(0, 3);

// function print(yogurt, message) {
//   return message + yogurt;
// }

// function alertToTheScreen(message) {
//   alert(message);
// }

// //for loop through array
// for (let x = 0; yogurts.length > x; x++) {
//   alertToTheScreen(print(yogurts[x], "I like "));
// }

// let car = {
//   color: "red",
//   make: "ford",
//   model: "F150",
//   print: function () {
//     //"this" is required due to being nested inside of an object.
//     alert(this.color + " " + this.make + " " + this.model);
//   },
// };

//Two different was to call an attribute from an object
//alert(car.model);
//alert(car["model"]);

// car.print();

// let myButton = document.getElementById("myButton");
// myButton.addEventListener("click", function () {
//   car.print();
// });
//can also use this syntax as well

function Car(color, year, make, model) {
  this.color = color;
  this.year = year;
  this.make = make;
  this.model = model;
  this.print = function () {
    //"this" is required due to being nested inside of an object.
    alert(`${this.color} ${this.year} ${this.make} ${this.model}`);
  };
}

let car = new Car("black", 2021, "Ford", "F150");

myButton.addEventListener("click", car.print.bind(car));

setTimeout(() => {
  alert("Here is the timer");
}, 10000);
