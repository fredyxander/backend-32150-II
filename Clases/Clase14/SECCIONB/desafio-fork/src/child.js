import { sumar } from "./helpers/operaciones.js";

//solo cuando trabajemos con modulos de es6
process.send("listo"); //proceso hijo listo para trabajar

////recibimos los mensajes del proceso padre.
process.on("message",(parentMsg)=>{
    // console.log("parentMsg", parentMsg);
    if(parentMsg === "Iniciar"){
        const resultadoSuma = sumar();
        //enviamos el resultado de la operacion del proceso hijo al proceso padre
        process.send(resultadoSuma);
    }
})