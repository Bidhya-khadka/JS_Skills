// let today = 5;
let today = prompt("pick a number :");
today = Number(today);
let output = "";
switch (today) {
  case 0:
    output = "sunday";
    break;

  case 1:
    output = "monday";
    break;

  case 2:
    output = "tuesday";
    break;

  case 3:
    output = "wednesday";
    break;

  case 4:
    output = "thursday";
    break;

  case 5:
    output = "Friday";
    break;

  case 6:
    output = "saturday";
    break;

  default:
    output = "not a valid day number";
}
console.log(output);
document.getElementById("h1id").innerHTML = `TODAY IS: ${output}`;
