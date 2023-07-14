// (function (){ statements...................})();

// It is a design pattern which is also known as a self-executing anonymous function and contains two major parts.

// First= It is anonymous function with lexical scope enclosed within the grouping operator (). This prevents accessing variables within the IIFE idiom as well as polluting global scope.

// Second= It creates the immediately invoked function expression () through which the javascript engine will directly interpret the function.

// example1
let val1 = 90;
(function () {
  console.log("hello"); //hello
})();

// example2
let val2 = 90;
(function () {
  console.log(`hello ${val2}`); //hello 90
})();

// example3

(function (val3) {
  console.log(`hello ${val3}`); //hello 90
})(`Bidhya Khadka`);

// example 4
const num = 12;
let val4 = (function () {
  return `number is ${num}`;
})();
console.log(val2); //90
console.log(val4); //number is 12
