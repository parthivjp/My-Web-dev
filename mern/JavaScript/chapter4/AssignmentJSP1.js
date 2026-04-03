//Q1
//Create a number variable num with some value.Now, print “good” if the number is divisible by 10 and print “bad” if it is not
// let num = 15;
// if (num % 10===0){
//     console.log("good");
// }else {
//     console.log("bad");
// }

//Q2
// Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting their name & age): name is age years old.
// [Use template Literals to print this sentence

//Q3
// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// let msd = `your name is ${name}and your age is ${age}`;


//Q4
// Write a switch statement to print the months in a quarter. 
// Months in Quarter1:January,February,March 
// Months in Quarter2: April,May,June 
// Months in Quarter3: July, August, September 
// Months in Quarter4: October, November, December

// let quarter = "Quarter1";

// switch(quarter){
//     case "Quarter1":
//         console.log("January,February,March");
//         break;
//     case "Quarter2":
//         console.log("Apri,May ,June");
//         break;
//     case "Quarter3":
//         console.log("july,Augst,September");
//         break
//     case "Quarte4":
//         console.log("Octomber, November, December");
//         break;
// }


//Qs4.

// let myString ="Alpea";

// if ((myString[0]==='A'||'a') && (myString.length >=5)){
//     console.log("Golden String");
// }else{
//     console.log("it is not golden String");
// }


//Qs5

// let num1 = 11;
// let num2 =70;
// let num3 =70;
// if (num1 >= num2 && num3){
//     console.log ("biggest number is ",num1);
// }
// else if (num2 >= num1 && num3 ){
//     console.log("biggest number is ",num2);
// }
// else if (num3 >= num1 &&num2){
//     console.log("biggest umber is  ",num3);
// }
// else {
//     console.log("you can enter only number not string ")
// }

//Qs 6.

let num1 = 31;
let num2 = 4521;

if ((num1 % 10) == (num2 % 10)) {
    console.log("last digit is same");
}else{
    console.log ("last digit is not same");
}