/* ⭐Ingresar valores numéricos en un array a partir de un campo de texto y un botón. 
Presionando otro botón mostrar en pantalla el mayor número. */

document.querySelector("#btnIngresar").addEventListener("click", tomarNumeros);
document.querySelector("#btnMostrar").addEventListener("click", recorrerArray);
let numeros = [];
function tomarNumeros() {
  let numero = Number(document.querySelector("#nbr").value);
  document.querySelector("#nbr").value = "";

  if (!isNaN(numero)) {
    numeros.push(numero);
  } else {
    document.querySelector("#pResult").innerHTML = "Error";
  }
}

function recorrerArray() {
  document.querySelector("#pResult").innerHTML = `${devolverNumeroMayor(
    numeros
  )} es el numero mayor del array`;
}

function devolverNumeroMayor(numeros) {
  let numMayor = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numMayor) {
      numMayor = numeros[i];
    }
  }

  return numMayor;
}
