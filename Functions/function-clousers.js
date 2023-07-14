// Every function in JavaScript maintains a link to its outer lexical environment. A lexical environment is a map of all the names (eg. variables, parameters) within a scope, with their values.

// So, whenever you see the function keyword, code inside that function has access to variables declared outside the function.

// function foo(x) {
//   var tmp = 3;

//   function bar(y) {
//     console.log(x + y + (++tmp)); // will log 16
//   }

//   bar(10);
// }

// foo(2);

// 1. Example 1

let val = 1000;
function outerFun(a) {
  let val = "bidhya";

  function innerFun() {
    console.log("value is" + val); //value isbidhya
  }
  innerFun();
  return val + a; //bidhya1000
}
console.log(outerFun(val));

// 2. Example 2
let aa = 12;
function fun1(aa) {
  aa = 1255;
  return function fun2() {
    console.log(aa); //1255
  };
}
let output = fun1(aa);
output();

//3.  Example 3
const secret = 2345;
const outerFunExp = function () {
  const innerfunExp = function () {
    console.log(`secret key value is` + secret);
  };
  return innerfunExp;
};
let secretKey = outerFunExp()();
