// code always executed in top-to-bottom approach
let num = 2;
function display() {
  let num = 1;
  console.log(num); //afno block ma herxa if not found then goes to see for the parents //2.
}
console.log(num); //1. -------o/p 2
display(); //2  -----------o/p 1
console.log(num); //3. ------o/p 2
