/* Imprimir todos los números enteros del -100 al 10. */

document.querySelector("#btnShow").addEventListener("click", showNumbers);

function showNumbers() {
  let msj = "";
  let inicio = -100;

  while (inicio <= 10) {
    msj += `${inicio} <br>`;
    inicio++;
  }
  document.querySelector("#pResult").innerHTML = msj;
}
