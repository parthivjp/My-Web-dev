// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array

// let arr=[1, 2, 3, 4, 5];
// // let squ =arr.map(function(el) {
// //     return el*el;
// // })
// let  squ = arr.map((num) =>num*num );
// console.log(squ);
// let sum = arr.reduce((res,el) => (res+el));
// console.log("Sum of arr : ", sum);
// let Avg =sum/arr.length;
// console.log("Avreage of the Array : ",Avg);

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5

// let arr=[1,2,3,4,5,6];
// console.log(arr.map((num)=> num+5));
// // let plusfive = arr.map((num) => num+5);
// // console.log(plusfive);

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

// let arr=["adam", "bob", "catlyn", "donald", "eve"];
// console.log(arr.map((string)=>string.toUpperCase()));

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled

// let doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v*2),
// ];

// console.log(doubleAndReturnArgs([1,2,3],4,4));

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object

const mergeObjects = (obj1,obj2) =>({...obj1, ...obj2 });
mergeObjects({a:1, b:2},{c:3,c:4});