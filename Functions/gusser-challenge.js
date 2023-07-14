let secretNum = 5;
let message;
output(guesser("guess a number between 1 to 10"));

function guesser(p) {
  let promptMsg = prompt(p);
  promptMsg = Number(promptMsg);
  if (promptMsg === secretNum) {
    message = `you got it ${secretNum}`;
    return message;
  } else {
    message = promptMsg > secretNum ? ` Was higher` : `Was lower`;
    return guesser(`[${promptMsg}] ${message}`);
  }
}
function output(mes) {
  document.getElementById("h1id").innerText = message;
}
