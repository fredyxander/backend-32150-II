import express from "express";
import log4js from "log4js";

const app = express();

log4js.configure({
    appenders:{
        consola:{type:"console"},
        //definimos la salida de datos> terminal, archivo, base de datos
        archivo:{type:"file",filename:"./src/logs/demostracion.txt"}
    },
    categories:{
        default:{appenders:['consola', 'archivo'], level:'warn'},
    }
});

//instancia de log4js
const logger = log4js.getLogger(); //instancia de la categoria default.

logger.trace("Imprimiendo mensaje de nivel trace");
logger.debug("mensaje de nivel debug");
logger.info("mensaje de nivel info");
logger.warn("mensaje de nivel warn");
logger.error("mensaje de nivel error");
logger.fatal("mensaje de nivel fatal");

const PORT = 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${8080}`));
