import express from "express";
import productRouter from "./routes/product.js";
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

app.use("/api/productos", productRouter);

app.get("/",(req,res)=>{
    res.send("Bienvenido")
});