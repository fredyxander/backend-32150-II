import {exec} from "child_process";

//generar proceso hijo.
exec("node index.js", (error, stddout, stderr)=>{
    if(error){
        console.log(error)
    }
    if(stderr){
        console.log(stderr)
    }
    console.log("salida del proceso hijo", stddout)
})