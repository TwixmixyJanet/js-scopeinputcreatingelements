//GLOBAL SCOPE
// var numOfDrinks = 5;

// var drinks = function () {
//   var tea = 6 + numOfDrinks;
//   console.log(tea);
// };

// drinks();
// //11

// if (numOfDrinks === 5) {
//   var soda = "lemon-lime";
//   console.log(soda);
// }
// //lemon-lime

// //FUNCITON SCOPE
// var drinks = function () {
//   var tea = 6 + numOfDrinks;
//   console.log(tea);
// };

// console.log(tea);
// // ReferenceError: tea is not defined

// //BLOCK SCOPE
// if (numOfDrinks === 5) {
//   var soda = "lemon-lime";
//   console.log(soda);
// }
// //lemon-lime
// soda = "cola";
// console.log(soda);
// //cola

// // let keyword
// if (numOfDrinks === 5) {
//   let soda = "lemon-lime";
//   console.log(soda);
// }
// //lemon-lime
// console.log(soda);
// //ReferenceError: soda is not defined

// const keyword
//GLOBAL SCOPE
const numOfDrinks = 5;

const drinks = function () {
  const tea = 6 + numOfDrinks;
  console.log(tea);
};

drinks();
//11

numOfDrinks = 7;
console.log(numOfDrinks);
//SyntaxError: /script.js: "numOfDrinks" is read-only