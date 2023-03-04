import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";;

//test
Deno.test("resultado suma", ()=>{
    const suma = 1+2;
    assertEquals(suma,3)
});

Deno.test("funcion retorna saludo", ()=>{
    const saludar = ()=>"Hola";
    assertEquals(saludar(),"Adios")
});