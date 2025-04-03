/* Ingresar un número y presionar un botón, al presionar el botón, si el número es mayor que 30 mostrar “es mayor que treinta”, sino si es menor que 10 mostrar “menor que 10”, sino mostrar “Entre diez y treinta”. */

let number;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    number = Number(document.querySelector("#nbr").value);
    if (number > 30){
        result = "es mayor que treinta";
    }
    else if(number < 10){
        result = "menor que 10";
    }
    else{
        result = "Entre diez y treinta";
    }
    document.querySelector("#pResult").innerHTML = result;


}