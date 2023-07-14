// function declaration works well
let val = funDec(100);
console.log(val); //10000
function funDec(a) {
  return a * a;
}

console.log("******************************");

// function expression
//1. ERROR:::::::in function expression
// functionexpression.js:11 Uncaught ReferenceError: Cannot access 'funExp' before initialization
// console.log(funExp(100));
// const funExp = function (a) {
//   return a * a;
// };

// function expression
// error free
const funExp = function (a) {
  return a * a;
};
console.log(funExp(100)); //10000

// VVVIMP
// in function declaration we can call function before and after declaration but
// in function expression we cannot access function before initialization which is the drawback

// Example 2 of function declaration and function exppression
console.log("*****************************");
// fun expression
let val1 = function (a) {
  return a + 5;
};
//fun declaration
function val2(a) {
  return a + 5;
}
console.log(val1(2)); //7
console.log(val2(2)); //7
