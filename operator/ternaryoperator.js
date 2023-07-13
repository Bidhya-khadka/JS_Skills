//shorthand of if else statement
// odd even num practice
// let num = prompt("Enter a num: ");
// num = Number(num);
// let message;
// if (!num) {
//   num = prompt("Enter a number");
// }
// let oddOreven =
//   num % 2 === 0
//     ? (message = `  ${num} is even number`)
//     : (message = `${num} is odd number`);

// console.log(oddOreven);

// document.getElementById("h1id").innerHTML = oddOreven;

//************************ */ another wY ODD EVEN*****************
let val = 100;
let check = val % 2 === 0 ? `even` : `odd`; //this will give even
check += `${val} is ${check}`; //appending or updating more info in check
console.log(check); //even100 is even
