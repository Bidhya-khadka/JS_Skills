// function declaration
(function mul(x) {
  console.log(`multiplication ${x * 5}`);
})(10); //multiplication 50

// function expression
let result = (function (x) {
  return `result is ${x * 5}`;
})(10);
console.log(result); //result is 50

//1. flat arrow or arrow function
// if we have only one arugument then we practice not to use() operator, return,and {}
let fatArrow1 = (x) => x * 5;
console.log(`our fatarrow1 result is ${fatArrow1(10)}`); //our fatarrow1 result is 50

console.log(
  `*****************************************************************`
);

//2. flat arrow or arrow function
// if we have multiple arugument then  use() operator, return,and {}
let fatArrow2 = (x, y = 15) => {
  console.log(`value of x ${x}`); //value of x 10
  console.log(`value of y ${y}`); //value of y 15
  return x * 5; //our fatarrow2 result is 50
};
console.log(`our fatarrow2 result is ${fatArrow2(10)}`);
