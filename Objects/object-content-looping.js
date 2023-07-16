//for looping conent in an object here we use for in loop
// syntax  for(let prop in obj) here prop is the property name
const obj = { name: "bidhya", address: "gagal", age: 22, married: false };

for (let prop in obj) {
  console.log(prop); //gives property name like name address age married
  console.log(obj[prop]); //gives prop value
}
