// property name : property value
// you can assign new property name along with it's value
// remember that object and array is memory refrenced means can change the original object property(shares same memory)
// example: const person={age:22} -----pperson.age->Dot notation--------person['age']->bracket notation->more dynamic can use variable to hold the property name

const person = {
  name: "bidhya",
};
person.age = 22;
console.log(person); //{name: 'bidhya', age: 22}
person.address = "gagal phedi";
console.log(person.name); //bidhya
person["helpful"] = true;
console.log(person); //{name: 'bidhya', age: 22, address: 'gagal phedi', helpful: true}

// bracket notation->more dynamic can use variable to hold the property name
let val = "name";
person[val] = "kalu";
console.log(person); //{name: 'kalu', age: 22, address: 'gagal phedi', helpful: true}
