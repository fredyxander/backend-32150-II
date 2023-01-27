import express from "express";
import {createTransport} from "nodemailer";
const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

const TEST_EMAIL="<Agregar correo admin>";
const TEST_PASSWORD="<Agregar contrase;a alterna>";

//configuracion del transporter de nodemailer
const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: TEST_EMAIL,
        pass: TEST_PASSWORD
    },
    secure:false,
    tls:{
        rejectUnauthorized:false
    }
});

const emailTemplate = (nombre)=> `<div>
    <h1>Bienvenido ${nombre}!!</h1>
    <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
    <p>Ya puedes empezar a usar nuestros servicios</p>
    <a href="https://www.google.com/">Explorar</a>
</div>`;

const mailOptions={
    from:"Servidor de NodeJs",
    to:["ari.emoprint@gmail.com","andrea.e.nassif@gmail.com"],
    subject:"Correo multiple de prueba desde un servidor de node",
    html:emailTemplate("<correo destinatario>")
}

app.post("/envio-email-gmail",async(req,res)=>{
    try {
        const response = await transporter.sendMail(mailOptions);
        res.send(`El mensaje fue enviado ${response}`)
    } catch (error) {
        res.send(error)
    }
});