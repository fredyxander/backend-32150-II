process.stdout.write("hola consola \n");

process.stdout.write("Cual es tu nombre? \n");

process.stdin.on("data",(datos)=>{
    console.log(`Bienvenido ${datos.toString()}`);
});