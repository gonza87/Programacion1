/* Ingresar un valor en pesos uruguayos y el valor de tipo de cambio de la fecha y calcular el equivalente en dólares. */

let pesos;
let dolares;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    pesos = Number(document.querySelector("#nbr1").value);
    dolares = Number(document.querySelector("#nbr2").value);
    result = pesos / dolares;

    document.querySelector("#pResult").innerHTML = `Dolares: ${result}`;
};
