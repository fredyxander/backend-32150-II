import express from "express";
const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

app.get("/",(req,res)=>{
    res.send("<h1>versiones git</h1>")
});

app.get("/home",(req,res)=>{
    res.send("<h1>bienvenido</h1>")
});

app.get("/users",(req,res)=>{
    res.json({
        users:[
            {username:"fredy"},
            {username:"pepe"},
            {username:"juan"}
        ]
    })
})