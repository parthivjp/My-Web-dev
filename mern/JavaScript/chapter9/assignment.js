let input =document.createElement('input');
input.innerHTML="input"
let button=document.createElement('button');
button.innerText="Click me";

document.querySelector('body').append(input);
document.querySelector("body").append(button);

input.setAttribute("placeholder","Username");
button.setAttribute("id","btn");

let btn = document.querySelector('#btn');
btn.classList.add('btn')

let h1 = document.createElement('h1');
h1.innerText="DOM Practice";
h1.classList.add('h1');
document.querySelector('body').append(h1);

let para = document.createElement('p');
para.innerHTML="Apna College <b>Delta</b> Practice";
para.classList.add('p');
document.querySelector('body').append(para);