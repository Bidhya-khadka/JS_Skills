// constructor concept of make one template for objectlets make one object template
// new keyword creates the object and help to construct here in function
// solves the original object changes value due to the memory sharing other object
//******************** */ this is same like making constructor in java ******************
// they are all independent

const objTemp = function (make, modal, color, ford) {
  this.make = make;
  this.modal = modal;
  this.color = color;
  this.ford = ford;
  this.details = function () {
    return `${this.make} ${this.modal} ${this.color}${this.ford}`;
  };
};

const car1 = new objTemp(2021, "mustang", "red", 20000);
console.log(car1); //objTemp {make: 2021, modal: 'mustang', color: 'red', ford: 20000, details: ƒ}
const car2 = new objTemp(2021, "mustang", "blue", 234223);
console.log(car2); //objTemp {make: 2021, modal: 'mustang', color: 'blue', ford: 234223, details: ƒ}
console.log(car2.details()); //2021 mustang blue234223
