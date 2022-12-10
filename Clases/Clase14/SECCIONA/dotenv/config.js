import * as dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "dev" ? ".env.development" : ".env.production";

dotenv.config({
    path:envFile
});//asigna las variables del archivo .env a process.env {PORT:"",MODO:""}

//creamos la configuracion de nuestra aplicacion
export const config = {
    PORT: process.env.PORT || 8080,
    MODO: process.env.MODO || "pruebas",
    BASE_DE_DATOS: process.env.BASE_DE_DATOS || "",
    LANGUAGE: process.env.LANGUAGE || "english"
};