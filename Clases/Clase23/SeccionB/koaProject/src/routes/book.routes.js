import Router from "koa-router";

const router = new Router({
    prefix:"/books"
});

let books = [];

//definir las rutas
router.get("/",(ctx)=>{
    //req.body =>ctx.request.body
    //res.send => ctx.body
    //res.status => ctx.response.status
    //req.params => ctx.request.params
    // req.query => ctx.request.query
    ctx.body = {
        status:"success",
        data:books
    }
});

router.post("/",(ctx)=>{
    //body de la peticion
    const bookBodyInput = ctx.request.body;
    books.push(bookBodyInput);
    ctx.response.status = 200;
    ctx.body = {
        status:"success",
        data:"book created"
    }
})

export {router as bookRouter};