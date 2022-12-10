import express from "express";
import {config} from "./config.js";

const app = express();
const puerto =config.PORT;

app.listen(puerto,()=>console.log(`server listening on port ${puerto}`));

console.log(`Servidor ejecutando la base de datos ${config.BASE_DE_DATOS} en el puerto ${puerto} en el modo ${config.MODO}`);

// console.log(process.env)