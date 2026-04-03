let todo = [];

let req = prompt("Enter your request");


while(true){
    if (req === "Quite"){
        console.log("TODO over");
        break;
    }
    else if(req ==="list"){
        console.log("---------------------------------------------");
        for(let i=0; i<todo.length; i++){
            console.log(`List is :${i} : ${todo[i]} `);
        }
        console.log("---------------------------------------------");
    }
    else if (req === "Adding"){
        let task = prompt("Enter the Activity");
        todo.push(task);
        console.log("Task is added :"+task);
    }
    else if  (req ==="Delete"){
        let ind=prompt("Enter index number");
        todo.splice(ind,1);
        console.log("Task is Deleted");
        console.log(`List is :${i} : ${todo[i]} `);
    }
    else {
        console.log ("Wrong Request");
    }
    req = prompt("Enter your Request");
}