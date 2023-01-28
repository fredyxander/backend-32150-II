import express from "express";
const router = express.Router();

// GET http:localhost:8080/api/users/all
router.get("/all",(req,res)=>{
    res.send("todos los productos")
});

export {router as ProductRouter};