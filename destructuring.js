//This is an example of object destructuring
let car = { make: "toyota", model: "camry" };

let { make, model } = car;

alert(`${make} ${model}`);

//Array destructuring

let meat = ["steak", "chicken", "pork", "lamb", "bacon"];

//let [steak, chicken, pork] = meat;
//The comma with the empty variable allows you to skip chicken in the array
//The "..." is the Rest operator. AKA spread operator
let [steak, , ...myMeat] = meat;

alert(`${myMeat}`);
