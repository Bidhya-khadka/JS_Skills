// if you have multiple conditions to check then use logical operator which return boolean values
// && and operator --> returns true only if both conditions are true otherwise returns false
// || or operator--> returns true if either condition becomes true
// ! not logical operatior ---> returns true if the condition is false

let a = 5;
let b = 10;
let c = 2;
let d = 11;
console.log(a > b && b < d); //false
console.log(a > b || b < d); //true
console.log(!(a < c)); //true
