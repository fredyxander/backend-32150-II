import http from "http";
import https from "https";

// console.log(https);

// https://jsonplaceholder.typicode.com/users
const URL = "jsonplaceholder.typicoe.com";

//opciones de la solicitud
const options = {
    hostname:URL,
    port:443,
    path:"/users",
    method:"GET"
};

//crear la solicitud http
const req = https.request(options,(res)=>{
    let datos ="";
    res.on("data",(chunk)=>{
        datos+=chunk.toString();
    });

    res.on("end",()=>{
        const response = JSON.parse(datos);
        console.log(response)
    })
});

req.on("error",(error)=>console.log(error))

req.end();