import parsedArgs from "minimist";


// node main.js 1 2 3 -m dev -p 8080 -d => {_:[1, 2, 3], m:"dev", p:8080,d:true}
// Construya y muestre por pantalla el siguiente objeto:
// { modo: 'dev', puerto: 8080, debug: true, otros: [ 1, 2, 3 ] }

const options = {default:{p:8080}, alias:{p:"puerto", m:"modo"}}

const objArguments = parsedArgs(process.argv.slice(2), options);
console.log(objArguments);
const port = objArguments.puerto;

// app.listen(port,()=>console.log("server listening..."))