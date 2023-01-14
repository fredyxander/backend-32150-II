import express from "express";
const app = express();

const PORT = 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${8080}`));

app.get("/",(req,res)=>{
    res.send("<h1>versiones git</h1>")
});

app.get("/home",(req,res)=>{
    res.send("<h1>bienvenido</h1>")
});


app.get("/chat",(req,res)=>{
    res.send("<h1>bienvenido al chat</h1>")
});