/* ⭐⭐Pedir un número y dividirlo entre 20 hasta que el resultado sea menor a 100, mostrar el resultado. Se debe validar que el número ingresado sea mayor a 2000, en caso contrario avisar al usuario y volver a solicitar el número. */

document
  .querySelector("#btnMostrar")
  .addEventListener("click", mostrarResultado);

function mostrarResultado() {
  let numero = Number(document.querySelector("#nbr1").value);
  let mensaje;

  if (numero < 2000) {
    mensaje = "Debes ingresar un número mayor a 2000";
  } else {
    while (numero > 100) {
      numero = numero / 20;
      mensaje = numero;
    }
  }
  document.querySelector("#pResultado").innerHTML = mensaje;
}
