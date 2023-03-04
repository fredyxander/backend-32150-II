import { Application, config } from "./depts.ts";
import { userRouter } from "./routes/user.routes.ts";

const app = new Application(); //creamos la app del servidor
const {PORT} = config();

//inicializar la app creando una ruta
// app.use((ctx)=>{
//     ctx.response.body="Bienvenido servidor deno"
// });
app.use(userRouter.routes());

app.listen({port:Number(PORT)});
console.log(`Server listening on port ${PORT}`);