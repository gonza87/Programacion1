/* ⭐Ingresar un número e indicar si es positivo o negativo.
El número será positivo si es mayor o igual a cero. */

let number;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  number = Number(document.querySelector("#nbr").value);

  if (number >= 0) {
    result = "El numero es Positivo";
  } else {
    result = "El numero es Negativo";
  }

  document.querySelector("#pResult").innerHTML = result;
}
