/* Ingresar un número y mostrar si es menor que -20 o mayor que 20, indicando con un aviso "CUMPLE" para cualquiera de los dos casos o "NO CUMPLE" en caso que esté en el rango de menos veinte a veinte. */

let number;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  number = Number(document.querySelector("#nbr").value);

  if (number <= -20 || number >= 20) {
    result = "CUMPLE";
  } else {
    result = "NO CUMPLE";
  }
  document.querySelector("#pResult").innerHTML = result;
}
