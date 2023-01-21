import express from "express";
import twilio from "twilio";

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

//agregar las credenciales de twilio
const accountId ="<Agregar accoutn sid>";
const authToken="<Agregar token twilio>";

const client = twilio(accountId,authToken);

app.post("/twilio-sms",async(req,res)=>{
    try {
        //utilizamos de cliente para enviar un mensaje
        const response = await client.messages.create({
            body:"Hola, envio de mensaje desde nodejs utilizando twilio",
            from:"<numero de twilio sms>", //emisor del mensaje
            to:"<numero destinatario>"
        });
        res.send(`Mensaje enviado ${response}`)
    } catch (error) {
        res.send(error)
    }
})