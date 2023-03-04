import { serve } from "https://deno.land/std@0.178.0/http/server.ts";

const PORT = 8080;

const hanlder = (request:Request)=>{
    const frase = "frase home";
    return new Response(frase,{status:200})
}

const server = serve(hanlder,{port:PORT});

console.log(`Server listening on port ${PORT}`);