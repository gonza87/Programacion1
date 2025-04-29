/* Ingresar un texto y al presionar un botón convertirlo a mayúsculas y mostrarlo en un párrafo. */

document.querySelector("#btnShow").addEventListener("click", convertirMayus);

function convertirMayus(){
    let texto = document.querySelector("#txt").value;
    let textoMayus = texto.toUpperCase();
    document.querySelector("#pResult").innerHTML = textoMayus;
}