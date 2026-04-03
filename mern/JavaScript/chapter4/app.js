// let score = 85;
// if (score >= 81  && score <= 100) {
//     console.log("Grade: A");
// }
// else if(score<= 80 && score >= 70) {
//     console.log("Grade: B");
// }
// else if(score <= 80 && score >= 70) {
//     console.log("Grade: C");
// }

// let popCalculate = "XL";
// if(popCalculate === "XL") {
//     console.log("Population is Extra large, price is 250");
// }
// else if(popCalculate ==="L"){
//     console.log("popcon size large, price is 200");
// }
// else if(popCalculate === "M"){
//     console.log("popcone size medium,price is 150");
// }
// else {
//     console.log("size is default small,price is 100");
// }

// let score = 85;
// if (score >=33 && score >= 80 || !false) {
//     console.log("Grade: A");
// }

// let score1 = 20;
// if (score1>=33 && score1 >= 80 || !false) {
//     console.log("Grade: A");
// }

// let score2 =5;
// if (score2>=33 && score2 >= 80 || !true) {
//     console.log("Grade: A");
// }

// let myString ="apple";
// if (myString[0] == 'a' && myString.length >=3 ){
//     console.log("My string is good");
// }
// else {
//     console.log("string is not containng a Or length is bad")
// }

// let num=12;
// if((num%3===0) && (num+1===15) || (num-1===11)){
//     console.log("safe");
// } else {
//     console.log("unsafe");
// }

// if(true){
//     console.log("This is true");
// }
// else{
//     console.log("this is false")
// }

// for string


// if("TonyStark"){
//     console.log("This is true");
// }
// else{
//     console.log("this is false")
// }

//for null
// if(null){
//     console.log("this is true");
// }
// else{
//     console.log("This is false");
// }


// if(null){
//     console.log("this is true");
// }
// else{
//     console.log("This is false");
// }


// if(undefined){
//     console.log("this is true");
// }
// else{
//     console.log("This is false");
// }


// if(NaN){
//     console.log("this is true");
// }
// else{
//     console.log("This is false");
// }


// let color ="red";

// switch(color){
//     case "red" :
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("get ready");
//         break;
//     case "green":
//         console.log("go");
//         break;
//     default:
//         console.log("light is broken");
//         break;
// }

// let day =12;
// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("tuseday");
//         break;
//     case 3:
//         console.log("Wednsday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         alert("Enter number in range og 1 to 7");
//         console.log ("you have done nothing ");
//         console.error("what you have done ");
//         console.warn("This is not way to do !!");
// }


let myFname = prompt("enter your First name ");
let myLname = prompt("enter your Last name ");
// console.log ("Hello" , " " , myFname ,"" , myLname,"!!");
let msg ="Hello" + " "+ myFname +"" + myLname+"!!";
alert(msg );