/* ⭐⭐Crear una función calcular potencia que reciba como parámetro base y exponente y devuelva el resultado.
Se llama potencia a una expresión de la forma an, donde a es la base y n es el exponente. */

document.querySelector("#btnShow").addEventListener("click", tomarDatos);

function tomarDatos(){
    let base = Number(document.querySelector("#nbr1").value);
    let exponente = Number(document.querySelector("#nbr2").value);
    
    let resultado = calcularPotencia(base, exponente);
    document.querySelector("#pResult").innerHTML=`Resultado ${resultado}`
}

function calcularPotencia(base, exponente){
    return base**exponente;
}