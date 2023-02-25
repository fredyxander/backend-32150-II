import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./config.js";

const PORT = options.server.PORT;

const docOptions = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Users documentation",
            version:"1.0.0",
            description:"User crud operations"
        },
        servers:[{url:`http://localhost:${PORT}`}]//servidores a los que vamos a agregar la documentacion
    },
    apis:['./src/docs/**/*.yaml'] //archivos que contiene la documentacion de la api
};

export const swaggerSpecs = swaggerJsDoc(docOptions);