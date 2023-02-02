import {createTransport} from "nodemailer";

//crendeicales del admin
export const emailAdmin = "Agregar correo administrador";
const passAdmin = "Agregar contraseña app gmail";

//configurar nodemailer
export const transporterEmail = createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user:emailAdmin,
        pass:passAdmin
    },
    secure:false,
    tls:{
        rejectUnauthorized:false
    }
});
