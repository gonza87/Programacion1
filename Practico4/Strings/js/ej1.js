/* Solicitar un texto e indicar si comienza y termina con la misma letra. */

document.querySelector("#btnShow").addEventListener("click", mostrarLetra);

function mostrarLetra() {
  let texto = document.querySelector("#txt").value;
  texto = texto.toLowerCase();
  let msj = "";

  let priLetra = texto.charAt(0);
  let ultLetra = texto.charAt(texto.length - 1);

  if (priLetra === ultLetra) {
    msj = `comienza y termina con ${priLetra}`;
  } else {
    msj = "NO coincide primer letra con la ultima";
  }
  document.querySelector("#pResult").innerHTML = msj;
}
