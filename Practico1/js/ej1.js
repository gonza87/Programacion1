/* Leer el nombre y apellido de una persona. Mostrarlo con el formato "apellido, nombre" primero el apellido, una coma, luego el nombre. Prestar atención que se deben concatenar cadenas de texto variables y además se debe incluir un espacio en blanco luego de la coma. */

let firstName;
let lastName;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    firstName = document.querySelector("#txtName").value;
    lastName = document.querySelector("#txtLastName").value;
    result = `${lastName}, ${firstName}`;
    document.querySelector("#pResult").innerHTML = result;
    
}