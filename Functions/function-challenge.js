//1. part 1// create function to add subtact multiply divide and for remainder calculation
let sum = 0;
let sub = 0;
let mul = 0;
let div = 0;
let rem = 0;

function add(val1, val2) {
  val1 = val1 || 5;
  val2 = val2 || 5;
  sum += val1 + val2;
  return sum;
}
console.log(`addition ${add()}`);

// **part 2******************************************

let a = 5;
function displayAll(val1, val2 = 5) {
  sub += val1 - val2;
  mul += val1 * val2;
  div += val1 / val2;
  rem += val1 % val2;
  return {
    sub,
    mul,
    div,
    rem,
  };
}

console.log(displayAll(a));
