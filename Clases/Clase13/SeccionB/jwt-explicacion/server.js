import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.listen(8080,()=>console.log("server running..."));

//rutas autenticacion
app.post("/login",(req,res)=>{
    const userForm = {username:"pepe@gmail.com", password:"1234"};
    //validariamos en la base de datos el usuario
    const userDB = {username:"pepe@gmail.com",name:"pepito",lastname:"morales", role:"admin"};
    //generar el token=>jhgd87624kasdiu87612
    jwt.sign(userDB,"claveSecreta",(err,token)=>{
        if(err) return res.json({message:"hubo un error al autenticarse"});
        res.json({access_token:token})
    })
});

// fetch(URL,{
//     headers:{
//         "Authorization": "Bearer token"
//     }
// });

const isValidToken = (req,res,next)=>{
    const headerToken = req.headers.authorization;
    if(!headerToken){
        return res.send("no autorizado");
    };
    //Bearer token => split(" ") = >["Bearer", "token"];
    const userToken = headerToken.split(" ")[1];
    console.log(userToken);

    //validamos el token
    jwt.verify(userToken,"claveSecreta",(error,decodeToken)=>{
        if(error) return res.send("token invalido");
        next();
    })
}

//ruta privada
app.get("/perfil",isValidToken,(req,res)=>{
    res.send("Permiso concebido")
});
