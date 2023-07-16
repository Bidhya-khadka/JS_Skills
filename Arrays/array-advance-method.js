// advance array method
// 1. sorting method
const arr = ["bidhya", "rishi", "sam", "susan", "sandesh"];
const peopleArr = arr.sort();
console.log(peopleArr); //(5) ['bidhya', 'rishi', 'sam', 'sandesh', 'susan']

// 2. reverse method
const revPeopleArr = arr.reverse();
console.log(revPeopleArr); //(5) ['susan', 'sandesh', 'sam', 'rishi', 'bidhya']

// 3.  it gives problem as it compares only the first char in numeric like
const arr2 = [
  1,
  2344,
  231,
  233,
  3,
  222,
  4444,
  44440,
  "bidhya",
  "khadka",
  "redmi",
];
const arr2Sort = arr2.sort();
console.log(arr2Sort); // 11) [1, 222, 231, 233, 2344, 3, 4444, 44440, 'bidhya', 'khadka', 'redmi']

// 4. to resolve such sorting problem we have function
// Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
// [11,2,22,1].sort((a, b) => a - b)
// vvvimp b-a is for reverse
// vvvimp a-b is for sort

const aar3Sort = arr2.sort(function (a, b) {
  return a - b;
});
console.log(aar3Sort.sort()); //(11) [1, 3, 222, 231, 233, 2344, 4444, 44440, 'bidhya', 'khadka', 'redmi']
console.log(aar3Sort.reverse()); //(11) ['redmi', 'khadka', 'bidhya', 44440, 4444, 3, 2344, 233, 231, 222, 1]

// ***********************************************************
console.log("**********************************");

// 5. filter method -->if you want the array with filtered element then use this method
const arr2Filter = arr2.filter((ele) => Number(ele));
console.log(arr2Filter); //(8) [44440, 4444, 3, 2344, 233, 231, 222, 1]

const arr2FilterString = arr2.filter((ele) => !Number(ele));
console.log(arr2FilterString); //(3) ['redmi', 'khadka', 'bidhya']

// 6.indexOf () method
console.log(arr2); //(11) ['redmi', 'khadka', 'bidhya', 44440, 4444, 3, 2344, 233, 231, 222, 1]
const finder1 = arr2.indexOf("bidhya"); //2
console.log(finder1);

arr2.push(3);
arr2.push(3);
console.log(arr2); //(13) ['redmi', 'khadka', 'bidhya', 44440, 4444, 3, 2344, 233, 231, 222, 1, 3, 3]
const finder2 = arr2.lastIndexOf(3); //12
console.log(finder2);

// 7.includes() method --->result in true or false
const arrIncludes = arr2.includes("bidhya");
console.log(arrIncludes); // true

// 8 toStirng()
const toStirngMeth = arr2.toString();
console.log(toStirngMeth); //redmi,khadka,bidhya,44440,4444,3,2344,233,231,222,1,3,3
