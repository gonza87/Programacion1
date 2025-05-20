/* ⭐⭐Crear una aplicación en la que se ingrese una cadena de caracteres y determine el número de mayúsculas y el número de minúsculas. Se deberán eliminar los espacios en blanco antes de hacer el cálculo y se puede considerar cualquier caracter que no sea a-z o A-Z como mayúscula o minúscula.
En caso de generar una solución más compleja se puede consultar la siguiente tabla y utilizar el método charCodeAt de los strings: */

document.querySelector("#btnShow").addEventListener("click", contarMayuMin);

function contarMayuMin() {
  let cadena = document.querySelector("#txt").value.trim();
  let cadenaMayus = cadena.toUpperCase();
  let cantMayus = 0;
  let cantMinus = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) === cadenaMayus.charAt(i)) {
      cantMayus++;
    } else {
      cantMinus++;
    }
  }

  document.querySelector(
    "#pResult"
  ).innerHTML = `Mayúsculas: ${cantMayus} <br> Minúsculas:${cantMinus}`;
  document.querySelector("#btnShow").setAttribute("disabled", "disabled");
  document.querySelector("#btnShow").setAttribute("value", "Finalizado");
}
