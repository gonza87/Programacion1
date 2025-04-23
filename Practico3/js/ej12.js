/* ⭐⭐Ingresar un número y calcular su factorial.



El factorial de un entero positivo n, el factorial de n o n factorial se define en principio como el producto de todos los números enteros positivos desde 1 (es decir, los números naturales) hasta n. */

document.querySelector("#btnShow").addEventListener("click", factorial);

function factorial() {
  let inicio = 1;
  let acumuResult = 1;
  let nbrIngresado = Number(document.querySelector("#nbr").value);

  while (inicio <= nbrIngresado) {
    acumuResult *= inicio;
    inicio++;
  }
  document.querySelector("#pResult").innerHTML = acumuResult;
}
