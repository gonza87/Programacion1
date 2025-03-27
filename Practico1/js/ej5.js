/* Ingresar el lado de un cuadrado y calcular y mostrar su área.
El área de un cuadrado es el cuadrado de la longitud del lado. */

let number1;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    number1 = Number(document.querySelector("#nbr1").value);
    result = number1 * number1;
    document.querySelector("#pResult").innerHTML = result;
}