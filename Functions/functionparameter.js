// here val2 is not defined so here val2 is undefined
// total= 0 +(10 * undefined) //produces NaN
// 1. practice ***************************************
// let a = 10;
// let total = 0;
// function add(val1, val2) {
//   total += val1 * val2;
//   console.log(total); //NaN
// }
// add(a);

// 2. practice ***providing default value as parameter to reduce undefined situaton****************************
// let a = 10;
// let total = 0;
// function add(val1, val2 = 3) {
//   total += val1 * val2;
//   console.log(total); //10*3 =30
// }
// add(a);

// 3. practice ***ternary operator to reduce undefined
// let a = 10;
// let total = 0;
// function add(val1, val2) {
//   console.log(val2); //undefined
//   val2 = val2 === undefined ? 2 : val2;
//   total += val1 * val2;
//   console.log(total); //10*2 =0
// }
// add(a);

// 4. practice ***|| or operator to give default value
// let a = 10;
// let total = 0;
// function add(val1, val2) {
//   console.log(val2); //undefined
//   val2 = val2 || 1; //val2 xa vaney ok xaina vaney 1 assign gar val2 ko value
//   total += val1 * val2;
//   console.log(total); //10*1 =10
// }
// add(a);

// 5. practice ***we havent passed argument then always use default value assign practice
let a = 10;
let total = 0;
function add(val1 = 1, val2 = 2) {
  total += val1 * val2;
  console.log(total); //1*2 =2
}
add();
