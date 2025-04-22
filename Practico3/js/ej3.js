/* imprimir todos los números enteros del 40 al 10. */

document.querySelector("#btnShow").addEventListener("click", showNumbers);

function showNumbers() {
  let msj = "";
  for (let i = 40; i >= 10; i--) {
    msj += `${i} <br>`;
  }
  document.querySelector("#pResult").innerHTML = msj;
}
