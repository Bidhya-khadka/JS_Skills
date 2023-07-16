// when to use array and when to use object
// object is more informational as we have key and value like: name:"bidhya"
// array is not just more informational compare to object as like [12] what does this mean either ager or something else. all they have is just indication
// so you must have variable name proper to define the array element as like:
// const people =['bidhya','babita']
const people = [];
people[0] = "bidhya";
people[1] = "babita";
console.log(people); //(2) ['bidhya', 'babita']

// *********changes the original array too
const people1 = people;
people1[1] = "sam";
console.log(people1); //(2) ['bidhya', 'sam']
console.log(people); //(2) ['bidhya', 'sam']

// *copy the original array to new array and not to have change effect of new to original array
const people2 = Array.from(people);
people2[3] = "gagalphedi";
console.log(people2); //(4) ['bidhya', 'sam', empty, 'gagalphedi']
console.log(people); //(2) ['bidhya', 'sam']

// typeof(people) ------> 'object'
//people.length ------>2
