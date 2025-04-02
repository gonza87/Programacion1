/* Ingresar un número y presionar un botón, al presionar el botón, si el número es mayor que 20 mostrar "es mayor que 20", sino mostrar "es menor o igual a 20". */

let number;
let msj;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  number = Number(document.querySelector("#nbr").value);
  if (number > 20) {
    msj = `es <strong>mayor</strong> a 20`;
  } else {
    msj = `es <strong>menor o igual</strong> a 20`;
  }

  document.querySelector("#pResult").innerHTML = msj;
}
