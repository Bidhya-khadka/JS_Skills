// how to take input from the user end and embed in html document
// display o/p in document as well as in console
let question = "What is your name?";
let promptMsg = prompt(question);
const value = (document.querySelector(
  "#h1id"
).innerText = `welcome to this page ${promptMsg}`);
console.log(value);
