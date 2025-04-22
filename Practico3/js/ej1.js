/* Imprimir todos los números enteros del 1 al 1.000 (un número por línea). */

document.querySelector("#btnShow").addEventListener("click", showNumbers);

function showNumbers() {
  let msj = "";
  for (let i = 1; i <= 1000; i++) {
    msj += `${i} <br>`;
  }
  document.querySelector("#pResult").innerHTML = msj;
  document.querySelector("#btnShow").setAttribute("disabled", "disabled");
  document.querySelector("#btnShow").setAttribute("value", "Finalizado");
}
