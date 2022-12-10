import express from "express";
import { sumar } from "./helpers/operaciones.js";
import {fork} from "child_process";

const app = express();
app.listen(8080,()=>console.log("server listening on port 8080"));

let visitas = 0;
app.get("/",(req,res)=>{
    visitas++;
    res.send(`Has visitado esta pagina ${visitas} veces`)
});

//ruta bloqueante
app.get("/calculo-bloq",(req,res)=>{
    const resultado = sumar();
    res.json({resultado:resultado})
});

//ruta no bloqueante
app.get("/calculo-nobloq", (req,res)=>{
    const child = fork("src/child.js");
    //recibimos mensajes del proceso hijo
    child.on("message",(childMsg)=>{
        if(childMsg === "listo"){
            //recibimos notificacion del proceso hijo, y le mandamos un mensaje para que comience a operar.
            child.send("Iniciar")
        } else {
            res.json({resultado:childMsg})
        }
    });
});