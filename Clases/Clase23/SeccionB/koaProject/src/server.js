import koa from "koa";
import {koaBody} from "koa-body";
import { bookRouter } from "./routes/book.routes.js";

const app = new koa();
app.use(koaBody());

app.use(bookRouter.routes());

const PORT = 8080;

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));