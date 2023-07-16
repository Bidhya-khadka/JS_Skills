const people = ["vidya", "babita", "bhaikrishna", "vishma"];
console.log(people); //(4) ['vidya', 'babita', 'bhaikrishna', 'vishma']

//1. splice mehod returns array (2,3,'hfjd) --->2 is index no. 3 is no of elem to delete and 'hfjd' is finally added to the array
//splice method affects the original array
const val = people.splice(2, 2, "sashi");
console.log(`spliced array ${val}`); //spliced array bhaikrishna,vishma
console.log(people); //(3) ['vidya', 'babita', 'sashi']

// 2. slice method  ---> return array of slice(start index, lastindex)
const val2 = people.slice(2);
console.log(val2); //['sashi']

// 3. concat method ----> return the combined array
console.log(people); //(3) ['vidya', 'babita', 'sashi']
const concatArr = people.concat(val, val2);
console.log(concatArr); //(6) ['vidya', 'babita', 'sashi', 'bhaikrishna', 'vishma', 'sashi']

//1. push pop method operates on last position of array
const person = ["a", "b", "c", "d", "e"];
person.push(55);
console.log(person); //(6) ['a', 'b', 'c', 'd', 'e', 55]

person.pop();
console.log(person); //(5) ['a', 'b', 'c', 'd', 'e']

//2. shift unshift operates on first position of array
person.shift();
console.log(person); //(4) ['b', 'c', 'd', 'e']

person.unshift("ff");
console.log(person); //(5) ['ff', 'b', 'c', 'd', 'e']
