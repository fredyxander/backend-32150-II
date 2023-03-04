import { parse } from "./depts.ts";
// https://rickandmortyapi.com/api/character
const response = await fetch("https://rickandmortyapi.com/api/character");
const data = await response.json();
console.log(data);
console.log(parse("10-10-2001","dd-MM-yyyy"));