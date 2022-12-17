import express from "express";
import cluster from "cluster";
import os from "os"; //extraer info del sistema operativo.

const app = express();
const PORT = 8080;

const numeroCPUs = os.cpus().length; //numero de nucleos del procesador de mi computador
// console.log(numeroCPUs);

//logica de creacion del cluster
if(cluster.isPrimary){
    //crear los subproceso del cluster
    for(let i=0;i<numeroCPUs;i++){
        cluster.fork(); //crea un nuevo subproceso por cada nucleo del computador.
    }

    cluster.on("exit",(worker,error)=>{
        //detectamos que algun subproceso falla
        console.log(`El subproceso ${worker.process.pid} dejo de funcionar`);
        cluster.fork();//creamos un nuevo subproceso que remplaza al que fallo
    });

} else {
    app.listen(PORT,()=>console.log(`Server listening on port ${PORT} on process ${process.pid}`));
}

app.get("/",(req,res)=>{
    res.send(`Respuesta desde port ${PORT} en el proceso ${process.pid}`);
    // cluster.worker.kill();//simulacion de matar al proceso.
});
