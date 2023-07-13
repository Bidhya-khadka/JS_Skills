// vvvvvimp
// one function can perform one task only at a time in ageneral practice so we used here two function
// one function is to add
// another function is just for display

let num = 4;

function display() {
  num = 2;
  console.log(num);
}

function add() {
  num++;
}
console.log("world");
add();
add();
console.log("hello");
add();
console.log(num);
console.log("bidhya");
display();
console.log(num);

// // world
// function2.js:19 hello
// function2.js:21 7
// function2.js:22 bidhya
// function2.js:10 2
// function2.js:24 2
