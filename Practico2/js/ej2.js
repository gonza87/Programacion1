/* Ingresar un número y dar aviso, si el número es mayor a 10 mostrar un aviso, "mayor que diez". */

let number;
let result;
let msj;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  number = Number(document.querySelector("#nbr").value);
  if (number > 10) {
    msj = "El numero es mayor que 10";
  } else if (number === 10) {
    msj = "El numero es igual 10";
  } else {
    msj = "El numero es menor que 10";
  }

  document.querySelector("#pResult").innerHTML = msj;
}
