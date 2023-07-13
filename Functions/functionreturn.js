// 1.practice********* return returns the value in function call which can later store the value by assiging variable
// let a = 10;
// let b = 20;
// let total = 0;
// function adder(val1, val2, val3 = 1) {
//   total += val1 + val2 + val3;
//   return total;//1.   31
// }
// let output = adder(a, b);//2.  31
// console.log(output);

// 2.....practice *************returning the value in console
let a = 10;
let b = 20;
let total = 0;
function adder(val1, val2, val3 = 1) {
  total += val1 + val2 + val3;
  return total; //1.   31
}
console.log(adder(a, b)); //2.  31
