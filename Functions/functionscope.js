// function level scope -if its doesnot find in its block it search in its parent
let a = 2;
console.log(dispaly());
function dispaly() {
  let a = 5;
  return a + 2; //5
}
// function scope example 2
console.log("**************************");

calc(5, 5);
function calc(a, b) {
  console.log(add());
  console.log(subt());
  console.log(mul());
  console.log(div());
  function add() {
    //arg & param is not passed in local scope so it search in its parent where its like let a=5,b=5
    return a + b;
  }
  function subt() {
    return a - b;
  }
  function mul() {
    return a * b;
  }
  function div() {
    return a / b;
  }
}
