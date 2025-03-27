/* Ingresar dos valores  y mostrar el resto de dividir el primero entre el segundo. */

let number1;
let number2;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    number1 = Number(document.querySelector("#nbr1").value);
    number2 = Number(document.querySelector("#nbr2").value);
    result = number1 % number2;

    document.querySelector("#pResult").innerHTML = `Resto: ${result}`;
};
