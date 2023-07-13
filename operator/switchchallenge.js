let person = prompt("enter person name :");
let output = "";
switch (person) {
  case "sapana":
  case "sagar":
  case "pushpa":
  case "ritesh":
    output = `${person} is my friend`;
    break;

  default:
    output = ` I don't know ${person}`;
    break;
}

console.log(output);
document.getElementById("h1id").innerHTML = output;
