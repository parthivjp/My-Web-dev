const express = require("express");
const app = express();
const path = require("path"); // Access folder via path from any where
const {v4 :uuidv4} =require('uuid');
const methodOverride=require("method-override")

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // folder which is accessble using path and sever can accss things as needed from anywhere
app.use(express.static(path.join(__dirname, "public")));// folder which is accessble using path and sever can accss things as needed from anywhere also enable us to start server from anywhere..

app.use(express.urlencoded({ extended: true })); // to read respons url 
app.use(express.json()); // parse url data (Make readable response)
app.use(methodOverride("_method")); //Post -> PATCH


let posts = [{
    id:uuidv4(),
    username: "parthiv",
    content: "i love power",
},{
    id:uuidv4(),
    username: "Raj",
    content: "i love GT650",
},{
    id:uuidv4(),
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

//Create new post
app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts")
});
//Show single post
app.get("/posts/:id",(req, res) =>{
    let{id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    // res.send("Request is working");
    res.render("show.ejs", { post });
});

// update quary , Update post
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    // console.log(newContent);
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    console.log(post); 
    // res.send("Patch is working")
    res.redirect("/posts") ;
});

app.get("/posts/:id/edit",(req, res)=>{
   let {id} =req.params;
   let post = posts.find((p) => id === p.id);
   res.render("edit.ejs",{post});
   
});

app.listen(port, () => {
    console.log("Listening on port 8080");
});