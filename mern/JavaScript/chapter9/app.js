let para1 = document.createElement('p');
para1.innerText="Hey i'm red!";
document.querySelector("body").prepend(para1);

para1.classList.add('red');

let heading =document.createElement('h3');
heading.innerText="I'm a Blue h3!";
document.querySelector('body').prepend(heading);

heading.classList.add('blue');

let div = document.createElement('div');
let h1 = document.createElement('h1');
h1.innerText="I'm in Div";
let para2 =document.createElement('p');
para2.innerText="Me Too!";
div.appendChild(h1);
div.appendChild(para2);
div.classList.add('block');
document.querySelector('body').prepend(div);