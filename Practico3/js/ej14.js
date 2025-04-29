/* ⭐⭐Pedir un número y mostrar la cantidad de dígitos que tiene.
            Para saber la cantidad de dígitos deberemos dividir el número sucesivamente entre diez hasta que el resultado sea menor a 1 */

document.querySelector('#btnMostrar').addEventListener('click', mostrarResultado);

function mostrarResultado(){
    let numero = Number(document.querySelector('#nbr1').value);
    let contador = 0;

    while(numero >= 1){
        numero = numero / 10
        contador ++
    }

    document.querySelector('#pResultado').innerHTML = contador
}