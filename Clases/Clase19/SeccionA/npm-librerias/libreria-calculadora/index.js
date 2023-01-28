const sumar = (num1,num2)=>{
    const suma = num1+num2;
    return `La suma de ${num1} y ${num2} es igual a ${suma}`;
};

const restar = (num1,num2)=>{
    const resta = num1-num2;
    return `La resta de ${num1} y ${num2} es igual a ${resta}`;
};

// const multiplicar = (num1,num2)=>{
//     const resultado = num1*num2;
//     return `La multiplicacion de ${num1} y ${num2} es igual a ${resultado}`;
// };

export {sumar,restar}

//npm install libreria-calculadora

//import {sumar,restar} from "libreria-calculadora"