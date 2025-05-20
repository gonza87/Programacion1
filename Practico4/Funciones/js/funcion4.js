/* ⭐⭐Crear una función que reciba como parámetro un valor de temperatura y convierta ese valor (en Celsius) a Fahrenheit. */

document.querySelector("#btnShow").addEventListener("click", tomarDatos);
function tomarDatos() {
  let temperatura = Number(document.querySelector("#nbr1").value);
  let fahrenheit = convertirCelPorFah(temperatura);
  document.querySelector(
    "#pResult"
  ).innerHTML = `Temperatura en fahrenheit = ${fahrenheit}`;
}

function convertirCelPorFah(temperatura) {
  return 1.8 * temperatura + 32;
}
