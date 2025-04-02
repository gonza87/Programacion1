/* Ingresar un número e informar si es múltiplo de 7 y de 3 simultáneamente. */

let number;
let result;

document.querySelector("#btnShow").addEventListener("click", shorResult);

function shorResult() {
  number = Number(document.querySelector("#nbr").value);

  if (number % 7 === 0 && number % 3 === 0) {
    result = `${number} es multiplo de 7 y 3`;
  } else {
    result = `${number} NO es multiplo de 7 y/o 3`;
  }
  document.querySelector("#pResult").innerHTML = result;
}
