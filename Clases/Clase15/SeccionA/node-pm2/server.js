import express from "express";
const app = express();
const PORT = process.argv[2] || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT} on process ${process.pid}`));

app.get("/",(req,res)=>{
    for(let i=0;i<1e8;i++){};
    res.send(`Respuesta desde el puerto ${PORT} en el proceso ${process.pid}`);
});