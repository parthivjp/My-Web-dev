let btn = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li')

btn.addEventListener('click',function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    let btn2 = document.createElement("button");
    btn2.innerText ='Delete';
    btn2.classList.add("delete");
    item.appendChild(btn2)
    input.value ="";
});

// let delbtn = document.querySelectorAll(".delete");
// for(btn2 of delbtn){
//     btn2.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par)
//         par.remove();
//     })
// }
// this delete button can not work for new added task , cause event listener wor for only existing element not new one 
// if we want to appply same thing for new created element then We use Event Delegation(by using bubbling property) 
// like this see the code

// using event Delegate

ul.addEventListener('click',function(event){
    //console.log(event.target)
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
})