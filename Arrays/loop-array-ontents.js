//  ARRAY CONTENT LOOPING
// 1. way :for loop
// 2. way : forEach method in normal function
//3. way : forEach method in arrow function
//4. way : for in loop

const arr = ["bidhya", 22, "gagal", false]; //length=4

// 1. way :for loop
// as array index starts with 0 here we keep variable i=0 starts for looping in an arrray till the last of array length.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 2. way : forEach method in normal function
// v.v.vimp.....foreach loop never returns it is used only for looping so keep in mind
console.log("***********");
arr.forEach(function (ele, index) {
  console.log(ele);
  console.log(arr[index]);
});

//3. way : forEach method in arrow function
// keep in mind return doesnot works in forEach loop
console.log("***********using arrow function in forEach for array looping");

arr.forEach((ele) => console.log(ele));

//4. way : for in loop
console.log(" ********************,for in loop");

for (x in arr) {
  console.log(arr[x]); //bidhya 22 gagal false
  // x works like index for array looping
  console.log(x); //0 1 2 3
}
