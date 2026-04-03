// Qs1. Write a JavaScript function that returns array elements larger than a number.

// let arr =[7,8,9,6,5,3,4,2,1,0,10,];
// let num = 8;

// function getlementfromarr(arr,num){
//     for(i=0; i < arr.length; i++){
//         if (arr[i]> num){
//             console.log(arr[i]);
//         }
//     }
// }
// getlementfromarr(arr,num)

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

// let str ="abcdabcdefgggh";
// function getUnique(str){
//     let ans = "";
//     for(let i=0; i < str.length; i++){

//         let sameone = str[i];
//         if (ans.indexOf(sameone) == -1){

//             ans += sameone;
//         }
//     }
//     return ans;
// }

// getUnique(str);

// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

// let country = ["Austaliaaaaaaaaa ","Germany","United States of America"];

// function longName(country){
//     let ansIdx = 0;
//     for(let i=0; i < country.length; i++){
//         let anslen = country[ansIdx].length;
//         let currlen = country[i].length;
//         if(currlen > anslen){
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }   
// longName(country);

// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

// let name = "ParthivPanchal"

// function countVowel(name){
//     let count=0;
//     for(let i =0; i<name.length; i++){
//         if(
//             name.charAt(i) == "a" ||
//             name.charAt(i) == "e" ||
//             name.charAt(i) == "i" ||
//             name.charAt(i) == "o" ||
//             name.charAt(i) == "u"            
//         ){
//             count++;
//         }
//     }
//     return count;
// }

//Qs5. Write a JavaScript function to generate a random number within a range (start, end).

let start =100;
let end = 200;

function generateRandom(start,end){
    let diff =end -start;
    return Math.floor(Math.random()*diff)+start;
}