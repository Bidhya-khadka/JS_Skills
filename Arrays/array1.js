//arrray is 0 based means index starts with 0
// array can have different data typed element as "",1,true,null,[],{}

// **************************************
const person = [];
person[0] = 12;
person[1] = "bidhya";
person[10] = { name: "kalu" };
person[5] = [1, 2, 3, 4];
console.log(person);
document.getElementById("info").innerHTML = person;

// using array constructor array defined
const person1 = new Array("bidhya", "khadka", "12", "gagal", null, [], {});
console.log(person1);
console.log(person1[3]);
console.log(`person1 array length ${person.length}`);
