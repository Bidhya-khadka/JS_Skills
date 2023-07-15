// create object and add some method means here (as function)
// this keyword is used to point the current person object
const person1 = {};
person1["First"] = "Bidhya";
person1["Last"] = "Khadka";

person1.talking = function (talk) {
  return `${this.First} ${this.Last} ${talk}`;
};
console.log(person1.talking(" is talking")); //Bidhya Khadka  is talking

person1.welcome = function (wel) {
  return `${wel} ${this.First} ${this.Last} you are very precious for us.So always keep smiling `;
};
console.log(person1.welcome("welcome")); //welcome Bidhya Khadka you are very precious for us.So always keep smiling
