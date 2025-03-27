/* Ingresar un importe (sub-total), agregarle el IVA (22%) y calcular y mostrar el importe final. */

let importe;
let iva = 22;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    importe = Number(document.querySelector("#nbr1").value);
    
    result = ((importe * iva) / 100) + importe;

    document.querySelector("#pResult").innerHTML = `Resultado + Iva: ${result}`;
};