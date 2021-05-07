// let person = {
//   name: "Ross",
//   print: function () {
//     //this sets the scope
//     let self = this;
//     setTimeout(function () {
//       alert(`Hello ${self.name}!`);
//     }, 1000);
//   },
// };

//this is an easier way to write it. anonymous function binds this to name and person object
let person = {
  name: "Ross",
  print: function () {
    setTimeout(() => {
      alert(`Hello ${this.name}!`);
    }, 1000);
  },
};

person.print();

let greeting = (message) => alert(message);

greeting("Hello World");
