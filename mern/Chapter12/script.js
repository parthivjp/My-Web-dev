// let jasonRsop = 
// '{"fact": "Cats lose almost as much fluid in the saliva while grooming themselves as they do through urination.","length": 100}';
// console.log(jasonRsop);

// let validRes = JSON.parse(jasonRsop);
// console.log(validRes);
// console.log(validRes.fact )


// // <+++++++++++++++++++++++++++++++++++++++ fetch with then and catch  +++++++++++++++++++++++>
// let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((response) => {
//         console.log(response);
//         return response.json()
//     })
//     .then((data) => {
//         console.log("Data 1 : ",data.fact);
//         return fetch(url);
//     })
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log("data 2 : ",data.fact);
//     })
//     .catch((err) => {
//         console.log("error", err);
//     })
// console.log(" i am happy")

// /// <+++++++++++++++++++++++++++++++++++ fetch with async await ++++++++++++++++++++++++++++>

let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch (err) {
//         console.log('ERRor', e);
//     }
//     console.log("bye")
// }

// //<===================================== Axios ==================================>

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");

// btn.addEventListener("click",async ()=>{
//     console.log("Url printing")
//     let facts = await getFacts();
//     h1.innerText = facts;
//     let para = document.querySelector("#resulte");
//     para.innerText = facts;
// })

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (err) {
//         console.log('ERRor', e);
//         return "No Facts Found";
//     }
// }

// //<=================== same for DOG (Image) API ================================>

// let url2 = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("button");

// btn.addEventListener("click",async ()=>{
//     let images =await getImage();
//     console.log(images);
//     let img = document.querySelector("#resulte");
//     img.setAttribute("src",images);
//     console.log(images);
// });
// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         console.log(res)
//         return res.data.message;
//     }catch(e){
//         console.log("ERROR", e);
//         return "No response Found!!!"
//     }
// }

// //<========================================= axios with header =========================>

// let url3 = "https://icanhazdadjoke.com/";

// async function getJoke() {
//     try {
//         const getJson = { headers: { Accept: "application/json" } };
//         let res = await axios.get(url3, getJson);
//         console.log(res.data);
//     } catch (e) {
//         console.log("ERROR", e);
//     }
// }

// //<========================================== update Query String =========================================>

// let url4 = "http://universities.hipolabs.com/search?name=";


// let inp = document.querySelector("input");
// let btn = document.querySelector("button");

// btn.addEventListener('click', async () => {
//     let inputContry = inp.value;
//     let contry = inputContry;
//     let colleges = await getCollege(contry);
//     show(colleges);
// });

// function show(colleges) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for (col of colleges) {
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getCollege(contry) {
//     try {
//         let res = await axios.get(url4 + contry);
//         return res.data;
//     } catch (e) {
//         console.log(e);
//         return [];
//     }
// }

// //<<================================= api serch colleges using Contry + state ==============================>>


let url5 = "http://universities.hipolabs.com/search?contry=india&name=";

let inp = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener('click', async () => {
    let inputContry = inp.value;
    let state = inputContry;
    console.log(state)
    let colleges = await getCollege(state);
    console.log(colleges)
    show1(colleges);
});

function show1(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of colleges) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege( state) {
    try {
        let res = await axios.get(url5 + state);
        return res.data;
    } catch (e) {
        console.log(e);
        return [];
    }
}