// //<===================================================1 Activity of color Change=====================>
h1 = document.querySelector("h1")
function changeColor( color ,delay) {
    return new Promise ((resolve ,reject)=>{
        let num = Math.floor(Math.random()*5)+1;
        if (num > 3){
            reject("promise rejected");
        }
        setTimeout(() => {
        h1.style.color = color;
        console.log(`color is changed to : ${color}`)
        resolve();
    }, delay);
    });
}
// //<================== without time jus function call=======================>
// changeColor("red",1000);
// changeColor("green",1000);
// changeColor("blue",1000);

// //<================= call back function way ====================>

// changeColor("red",1000, ()=>{
//     changeColor("orange",1000, ()=>{
//         changeColor("blue", 1000, ()=>{
//             changeColor("gray", 1000, ()=>{
//                 changeColor("pink",1000,()=>{
//                     changeColor("red",1000);
//                 }); 
//             });
//         });
//     });
// });

// // <=================================by using Promise===========================>

// changeColor("red",1000)
// .then((resulte)=>{
//     console.log("Red color is changed now");
//     console.log(resulte);
//     return changeColor("blue",5000);
// })
// .then((resulte)=>{
//     console.log("Blue color is changed now ");
//     console.log(resulte);
//     return changeColor("green",2000);
// })
// .then((resulte)=>{
//     console.log("green color is changed");
//     console.log(resulte);
// })
// .catch((error)=>{
//     console.log("color is not changed");
//     console.log("error :" , error)
// })
// ///<======================using async await====================================>
async function callingMe(){
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("Blue",1000);
        await changeColor("blue",1000);
        
    } catch(error) {
        console.log(error);
    }
    let a = 5;
    console.log(a);
    console.log("new num is : ", a+4);
}
// // <====================Example of call back hell===================>

// function saveData(Data, success, fail) {
//     let interNetSpeed = Math.floor(Math.random() * 10 + 1);
//     if (interNetSpeed > 4) {
//         success();
//     } else {
//         fail();
//     }
// }
// //<====================calling same function if success , CallBack hell Time!!!!!!!!!====================>
// saveData(
//     "Apana college",
//     () => {
//         console.log("Data is Saved ");
//         saveData("Hello sir", () => {
//             console.log("success2");
//             saveData("You are Gone Mad!!",
//                 () => {
//                     console.log("Success 3 data is saved");
//                 },
//                 () => {
//                     console.log("Data is not Saved");
//                 }
//             );
//         },
//             () => {
//                 console.log("Fail to Data Save");
//             }
//         );
//     },
//     () => {
//         console.log("Data is not Saved Dueto Low speed try again latter!!");
//     }
// );
// // <============================================================promises===========================================>

// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         let interNetSpeed = Math.floor(Math.random() * 10 + 1);
//         if (interNetSpeed > 4) {
//             resolve("Success : Data is Saved");
//         } else {
//             reject("Failuer : Data is not saved Due to Weak connection!!");
//         }
//     });
// }

// let request = saveToDb("Apna College")
//     .then((resulte) => {
//         console.log("Promise fulfiled");
//         console.log("Promise resulte", resulte);
//         return saveToDb("hello World")
//     })
//     .then((resulte) => {
//         console.log("Data1 is Saved");
//         console.log("Promise resulte", resulte);
//         return saveToDb("Parthiv")
//     })
//     .then((resulte) => {
//         console.log("Data 2 is saved");
//         console.log("Promise resulte", resulte);
//     })
    
//     .catch((error) => {
//         console.log("Promise Rejected");
//         console.log("error resulte : ",error)
//         console.log(request)
//     });


// //<==================================== by using async and await keyword ==========================>

// async function greet(){
//     throw "404 page not found";
//     return "hello";
// }
// greet()
// .then((resulte)=>{
//     console.log("hello is printed");
//     console.log("async promise resulte",resulte);
// })
// .catch((error)=>{
//     console.log("error , promise rejected the action ",error)
// })

// let demo = async () => {
//     return 5;
// };

// ///<=================================== Await =============================>

// function getNum(){
//     return new Promise ((resolve , reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }
// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }