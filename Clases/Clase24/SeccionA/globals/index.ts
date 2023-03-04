import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

console.log(config());

const {PORT} = config();
console.log(PORT)