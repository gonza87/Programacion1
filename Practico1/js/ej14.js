/* Crear un botón y un párrafo de texto. Al presionar el botón incrementar un contador de tres en tres. Mostrar el valor actual del contador en el párrafo cada vez que se presione el botón. */

let counter = 0;
let result;

document.querySelector("#btnCount").addEventListener("click", showCounter);

function showCounter(){
    counter +=3;
    document.querySelector("#pCount").innerHTML = `Clicks: ${counter}`;
};