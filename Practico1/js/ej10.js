/* Ingresar un importe y un porcentaje de recarga y calcular el importe final. */

let number1;
let number2;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    number1 = Number(document.querySelector("#nbr1").value);
    number2 = Number(document.querySelector("#nbr2").value);
    result = ((number1 * number2) / 100) + number1;

    document.querySelector("#pResult").innerHTML = `Resultado: ${result}`;
};