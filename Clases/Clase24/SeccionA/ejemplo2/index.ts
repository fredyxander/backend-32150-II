import { parse } from "https://deno.land/std@0.178.0/datetime/mod.ts";

const fecha = parse("03-04-2023", "dd-MM-yyyy");
console.log(fecha);