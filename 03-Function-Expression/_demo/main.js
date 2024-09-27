//Anonymous

//#1 Named fn FN Declaration
//function add (){}

//#2 : Anonymous
// IIFE L Intermediate Invoke Function Expresstion
// (function (x,y) {console.log(x+y)})(10,5)

// console.log(
//   (function (x, y) {
//     return x + y;
//   })(10, 5)
// );

// let a = 
//     (function (x, y) {
//       return x + y;
//     })(10,7)
//     console.log(a);

// #2B
//variable == expression
let myVar = 5; // เก็บ expression
//variable = function --> expression  **เรียกว่า function expression
let myFunc = function (x,y){
    return x+y
}
console.log(myFunc(5,10));

//assign named function to variable
const a = console.log
a('eiei')