/* Ingresar un número, en caso que sea negativo, convertirlo a positivo, mostrar el número en un párrafo.
Multiplicando el valor negativo por -1 obtendremos el valor absoluto de ese número. */

let number;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  number = Number(document.querySelector("#nbr").value);

  if (number < 0) {
    result = number * -1;
  } else {
    result = number;
  }

  document.querySelector("#pResult").innerHTML = result;
}
