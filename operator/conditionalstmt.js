// let promptNum = prompt("enter any number");
// promptNum = Number(promptNum);
// let num = 100;
// let message = "display anything here";

// if (promptNum === num) {
//   message = `${promptNum} is equal to ${num}`;
// } else if (promptNum > num) {
//   message = `${promptNum} is greater than ${num}`;
// } else {
//   message = `${promptNum} is less than ${num}`;
// }

// document.getElementById("h1id").innerText = message;

// ___________challenge___________********************
// over 18 can enter to the night club
// over 21 can drink
// under 18 denied the entry
let promptAge = prompt("how  old are you ?");
promptAge = Number(promptAge);
//user le number pathayen vane
if (!promptAge) {
  promptAge = prompt("Enter a number :");
}
let message;
if (promptAge <= 0) {
  promptAge = prompt("please Enter a valid age number :");
} else {
  if (promptAge <= 18) {
    message = `sorry you are not allowed.you are only ${promptAge} `;
  } else if ((promptAge = 18 && promptAge <= 21)) {
    message = ` You can come in but you cannot drink `;
  } else if (promptAge > 21) {
    message = ` you can come in and age ${promptAge} can drink in club`;
  }
}

document.getElementById("h1id").innerHTML = message;
