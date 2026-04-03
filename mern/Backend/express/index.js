const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`App is Listining on this port ${port}`);
});

// // handlling request and response ..

// app.use((req, res) => {
//     console.log("Request Received");
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li><li>Kivi</li></ul>";
//     res.send(code);
// });

// app.get('/',(req, res) =>{
//     res.send("You contacted ROOT path");
// });

// app.get("/apple", (req, res)=>{
//     res.send("You Contacted apple Path");
// });

// app.get("/Orange", (req, res)=>{
//     res.send("You Contacted Orange path");
// });
// app.post("/", (req,res)=>{
//     res.send("You sent a post request");
// });

// =============== path params
// app.get('/:username/:id/:department',(req, res) =>{
//     let{username,id} = req.params;
//     let htmlstr =  `<h1>Good morning @${username}</h1>`
//     res.send(htmlstr);
// });

// =============== query string
app.get("/search",(req, res) => {
    let {q} = req.query;
    res.send(`<h1>Search result is ${q}</h1>`);
});