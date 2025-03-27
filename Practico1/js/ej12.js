/* Solicitar ingresos de peso y altura para calcular índice de masa corporal Se asume que el peso se ingresó en kilogramos y la altura en metros. */

let peso;
let altura;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    peso = Number(document.querySelector("#nbr1").value);
    altura = Number(document.querySelector("#nbr2").value);
    
    result = peso / (altura * altura);
    

    document.querySelector("#pResult").innerHTML = `IMC: ${result}`;
};