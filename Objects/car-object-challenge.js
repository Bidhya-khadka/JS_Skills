// dynamically value assigned to the property name
// adding function
const car = {};
car["color"] = "red";
car["make"] = "Ford";
car["mileage"] = 0;
car["modal"] = "Mustang";
car["value"] = 25000;
car["year"] = 2015;

car.driving = function (num = 100) {
  this.mileage += num;
  console.log(`driving having fun`);
};

car.stats = function () {
  this.value -= this.mileage;
  return `${this.color} ${this.make} ${this.modal} ${this.value}`;
};
car.driving(1000);
console.log(car.stats());
let curStat = car.stats();
car.driving(1000);
car.driving(5000);
car.driving(5000);
car.driving(1000);
console.log(curStat);
console.log(car.stats());
