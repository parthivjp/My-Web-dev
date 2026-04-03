let box = document.querySelector(".box");

box.addEventListener("mouseout", function(){
    console.log("mouseout wil triguerd when is mouse pointer move from in to out");
})

let inp = document.querySelector("input");

inp.addEventListener('keypress',function(){
    console.log("Key was presed");
})

let nav = document.querySelector("body");

nav.addEventListener('scroll',function(){
    console.log("scroll event triguered");
})