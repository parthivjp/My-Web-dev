const express = require("express");
const app = express();
const path = require("path"); // Access folder via path from any where

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // folder which is accessble using path and sever can accss things as needed from anywhere
app.use(express.static(path.join(__dirname, "public")));// folder which is accessble using path and sever can accss things as needed from anywhere also enable us to start server from anywhere..

app.use(express.urlencoded({ extended: true })); // to read respons url 
app.use(express.json()); // parse url data (Make readable response)


let posts = [{
    username: "parthiv",
    content: "i love power",
},{
    username: "Raj",
    content: "i love GT650",
},{
    username: "Ajay",
    content: "i love bullet-350",
    },
];
app.get("/posts", (req, res) => {
    res.render("index.ejs",{ posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    console.log(req.body);
    res.send("post is working");
});

app.listen(port, () => {
    console.log("Listening on port 8080");
});