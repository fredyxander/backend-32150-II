import express from "express";
import handlebars from "express-handlebars";
import { connectDB } from "./config/dbConfig.js";
import {options} from "./config/config.js";
import { __dirname } from "./util.js";
import {apiRouter} from "./routes/index.js";

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

//config motor de plantillas
app.engine('hbs', handlebars.engine({ extname: '.hbs'}));
app.set('views', __dirname+'/views');
app.set('view engine', 'hbs');

//routes
app.use(apiRouter);

const PORT = options.server.PORT;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));
