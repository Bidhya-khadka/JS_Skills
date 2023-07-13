// type conversion when the coder sets the data type

let myNum = 1000;
let myStr = "Hello";
// type coercion when the type is converted by javascript
myStr = Number(myStr);
console.log(myStr); //NaN

// string coercion
myNum = String(myNum); //reassigning the string value to myNum variable

// you can also use toString method
myNum = myNum.toString();

myStr = 100;
myNum = myNum + myStr;
console.log(myNum); //1000100

// type challenge
let question = "Enter your age :";
let message = prompt(question);
console.log(typeof message); //string
// now going to convert it into number
message = Number(message);
console.log(typeof message);
