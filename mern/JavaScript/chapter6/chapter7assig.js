// Write an arrow function named arrayAverage that accepts an array of numbers 
// and returns the average of those numbers
// const arrayAverage = (arr) => {
//     let total =0;
//     for(let number of arr){
//         total +=number;
//     }
//     return total/arrayAverage.length;
// };
// let arr = [1,2,3,4,5,6,7,8];
// console.log(arrayAverage(arr));

// Write an arrow function named isEven() that takes a single number as argument
// and returns if it is even or not

// const evnum = (num) => {
//     if(num %2 == 0){
//         return console.log(num +" Is even");
//     }else {
//         return console.log(num+" is Not Even");
//     }
// };

// let num = 42;
// evnum(num);

//What is the output of the following code :: undefined
// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage, 1000);


let length = 4;
function callback() {
    console.log(this.length);
}
    const object = {
        length: 5,
        method(callback) {
            callback();
        },
    };
object.method(callback, 1, 2);