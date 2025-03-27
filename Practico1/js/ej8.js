/* Ingresar tres valores y calcular la suma de los primeros dos menos el tercero */

let number1;
let number2;
let number3;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    number1 = Number(document.querySelector("#nbr1").value);
    number2 = Number(document.querySelector("#nbr2").value);
    number3 = Number(document.querySelector("#nbr3").value);
    result = (number1 + number2) - number3;

    document.querySelector("#pResult").innerHTML = `Resultado: ${result}`;
};
