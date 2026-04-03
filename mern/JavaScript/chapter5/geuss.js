const MAX = prompt("Enter the maximum number");
const random = Math.floor(Math.random() * MAX ) +1;
let guess = prompt("guess the number");

while(true){
    if (guess == "quite"){
        console.log("done you are fired");
        break;
    }
    if (guess == random){
        console.log("Good Your guess is right");
        break;
    }else{
        guess = prompt("guess again your are wrong !!");
    }
}
