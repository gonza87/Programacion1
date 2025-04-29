/* ⭐⭐Solicitar un número al usuario e imprimir en un párrafo todos los
            números mayores a 30 y menores a 200 que sean múltiplos del número
            ingresado por el usuario y pares simultáneamente. */

document.querySelector('#btnMostrar').addEventListener('click', mostrarResultado);

function mostrarResultado() {
    let numero = Number(document.querySelector('#nbr1').value);
    let mensaje = '';

    if (numero > 30 && numero < 200){
        for(let i = 31 ; i < 200 ; i++){
            if ( i % numero === 0 && i % 2 === 0 ){
                mensaje += i + '<br>'
            }
        }
    }else{
        mensaje = 'Ingrese un número mayor a 30 y menor a 200'
    }
    
    document.querySelector('#pResultado').innerHTML = mensaje
}