// let btn = document.createElement("button");
// btn.innerText="Click Me!!";
// document.querySelector("body").append(btn);

// btn.setAttribute("id","bto");

// let ch = document.querySelector("#bto");
// ch.addEventListener('click',function(){
//     this.style.backgroundColor = "green";
//     this.style.color='white';
// })
// <--------------- Q2 ------------------>

let inp = document.querySelector('input');
let h2 = document.querySelector('h2');

input.addEventListener("keyup", function () {
    const filtered = input.value.replace(/[^a-zA-Z ]/g, "");
    input.value = filtered;
    h2.textContent = filtered;
});
