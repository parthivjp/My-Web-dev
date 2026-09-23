// function greating(name){
//     name = prompt("Enter the name :");
//     console.log(`Hello ${name}!`);
// }
// greating(name);

// function isEven(num){
//     num = prompt("Enter the number you want to check !!");
//     if (num % 2 == 0){
//         console.log(`Given number is even :: ${num}`);
//     }else{
//         console.log(`Givrn number is odd :: ${num}`);
//     }
// }

// isEven();

// function sunArray(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length ; i++){
//         sum = sum + arr[i];
//     }
//     console.log(sum);
// }
// sunArray([5,6,8]);

// function isLongWord (word) {
//     if(word.length > 5){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isLongWord("Parthiv"));

function findMax(arr){
    let count = arr[0];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > count){
            count = arr[i];
        }
    }
    return count;
}

console.log(findMax([1,2,30,4,5]));