// let arr=[20,10,30,65,40,50];
// let multi = arr.every((el) =>(el % 10 == 0));
// console.log("Ans : ", multi);

// let arr = [2, 5, 6, 7, 8, 1];
// let min = arr.reduce((min, el) => {
//     if(min < el){
//         return min;
//     }else{
//         return el;
//     }
// })
// console.log("Min is : ", min);

function getmin(num) {
    let min = num.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });
    return min;
}
let num = [2, 5, 6, 7, 8, 1];