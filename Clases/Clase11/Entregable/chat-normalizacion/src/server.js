import express from "express";
import {dbOptions} from "./config/dbConfig.js";
import {router as productRouter} from "./routes/products.js";
import handlebars from "express-handlebars";
import {Server} from "socket.io";
import { normalize, schema } from "normalizr";
import path from "path";
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Manager clases
// const Contenedor = require("./managers/contenedorProductos");
import {Contenedor} from "./managers/contenedorProductos.js";
// const ContenedorChat = require('./managers/contenedorChat');
import {ContenedorChat} from "./managers/contenedorChat.js";
// const ContenedorSql = require("./managers/contenedorSql");
import { ContenedorSQL } from "./managers/contenedorSql.js";

// Services
// const productosApi = new Contenedor("productos.txt");
const productosApi = new ContenedorSQL(dbOptions.sqliteDB, "products");
const chatApi = new ContenedorChat("chat.txt");
// const chatApi = new ContenedorSQL(dbOptions.sqliteDB, "chat");

//server
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

//configuracion template engine handlebars
app.engine(".hbs",handlebars.engine({extname: '.hbs'}));
app.set('views', __dirname+'/views');
app.set("view engine", ".hbs");

//normalizacion
//creamos los esquemas.
//esquema del author
const authorSchema = new schema.Entity("authors",{}, {idAttribute:"email"});

//esquema mensaje
const messageSchema = new schema.Entity("messages", {author: authorSchema});

//creamos nuevo objeto para normalizar la informacion
// {
//     id:"chatHistory",
//     messages:[
//         {},{},{}
//     ]
// }
//esquema global para el nuevo objeto
const chatSchema = new schema.Entity("chat", {
    messages:[messageSchema]
}, {idAttribute:"id"});

//aplicar la normalizacion
//crear una funcion que la podemos llamar para normalizar la data
const normalizarData = (data)=>{
    const normalizeData = normalize({id:"chatHistory", messages:data}, chatSchema);
    return normalizeData;
};

const normalizarMensajes = async()=>{
    const results = await chatApi.getAll();
    const messagesNormalized = normalizarData(results);
    // console.log(JSON.stringify(messagesNormalized, null,"\t"));
    return messagesNormalized;
}


// routes
//api routes
app.use('/api/productos',productRouter);

//view routes
app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/productos',async(req,res)=>{
    res.render('products',{products: await productosApi.getAll()})
})

//express server
const server = app.listen(8080,()=>{
    console.log('listening on port 8080')
})



//websocket server
const io = new Server(server);

//configuracion websocket
io.on("connection",async(socket)=>{
    //PRODUCTOS
    //envio de los productos al socket que se conecta.
    io.sockets.emit("products", await productosApi.getAll())

    //recibimos el producto nuevo del cliente y lo guardamos con filesystem
    socket.on("newProduct",async(data)=>{
        await productosApi.save(data);
        //despues de guardar un nuevo producto, enviamos el listado de productos actualizado a todos los sockets conectados
        io.sockets.emit("products", await productosApi.getAll())
    })

    //CHAT
    //Envio de todos los mensajes al socket que se conecta.
    io.sockets.emit("messages", await normalizarMensajes());

    //recibimos el mensaje del usuario y lo guardamos en el archivo chat.txt
    socket.on("newMessage", async(newMsg)=>{
        await chatApi.save(newMsg);
        io.sockets.emit("messages", await normalizarMensajes());
    });
});