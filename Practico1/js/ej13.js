/* Crear un botón y un párrafo. Se solicita llevar la cuenta de la cantidad de veces que el botón fue presionado en el párrafo.
La cuenta comenzará en cero y se incrementará en uno con cada presión del botón. */


let counter = 0;
let result;

document.querySelector("#btnCount").addEventListener("click", showCounter);

function showCounter(){
    counter++;
    document.querySelector("#pCount").innerHTML = `Clicks: ${counter}`;
};