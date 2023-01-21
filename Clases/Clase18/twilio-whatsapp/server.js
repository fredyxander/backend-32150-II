import express from "express";
import twilio from "twilio";

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

//agregar las credenciales de twilio
const accountId ="";
const authToken="";

const client = twilio(accountId,authToken);

const massiveMgs = (numero)=>{
    return {
        body:"Hola, envio de mensaje desde nodejs utilizando twilio",
        from:"whatsapp:+<numero whatsapp>", //emisor del mensaje
        to:`whatsapp:${numero}` //destinario del mensaje
    }
}

const numeros =["+222222","+1111111"];

app.post("/twilio-whatsapp",async(req,res)=>{
    try {
        //utilizamos de cliente para enviar un mensaje
        for(let i =0;i<numeros.length;i++){
            await client.messages.create(massiveMgs(numeros[i]));
        }
        res.send(`Mensajes enviados`)
    } catch (error) {
        res.send(error)
    }
})