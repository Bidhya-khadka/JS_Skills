// car1
const car1 = {
  color: "red",
  make: 2021,
  Ford: "Mustang",
  mileage: 5000,
};
// car2
// as car2 is referencing the memory location of car1 if any property value changes it has the same effect on it's original object as car1.
const car2 = car1;
car2.color = "blue";

console.log(car1); //{color: 'blue', make: 2021, Ford: 'Mustang', mileage: 5000}
console.log(car2); //{color: 'blue', make: 2021, Ford: 'Mustang', mileage: 5000}
console.log("************************************");

//to overcome this we have
//  Object.assign({},car1) here car1 is referenced but does not affect the changes made on itself to it's same memory sharing object.
// *************************
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// @param target — The target object to copy to.

// @param source — The source object from which to copy properties.

const car3 = Object.assign({}, car1);
car3.modal = "Royal";
car3.make = 2022;
console.log(car3);
console.log(car1);
console.log(car2);
