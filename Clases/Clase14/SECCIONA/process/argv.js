// console.log(process.argv);

//[1,2,3,4,5]=>slice(3)=>[4,5];
const argumentos = process.argv.slice(2);
console.log(argumentos);

if(argumentos[0] === "es"){
    console.log("aplicacion ejecutandose en espa;ol");
} else{
    console.log("aplicacion ejecutandose en ingles");
}