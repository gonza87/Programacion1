/* ⭐Implementar una función esBisiesto que reciba como parámetro un año y retorne true si ese año es bisiesto o false en caso contrario. Un año es bisiesto cuando siendo múltiplo de 4, no es múltiplo de 100 (a menos que sea múltiplo de 400).
Ejemplos:
1. 1999 no es bisiesto.
2. 1900 y 2100 no son bisiestos (a pesar de ser múltiplos de 4).
3. 1600 y 2000 sí fueron bisiestos, y 2400 lo será (a pesar de ser múltiplos de 100 son bisiestos ya que son múltiplos de 400). */

document.querySelector("#btnShow").addEventListener("click", tomarNumero);
function tomarNumero() {
  let año = Number(document.querySelector("#nbr1").value);
  if (!isNaN(año)) {
    let biciesto = validarBiciesto(año);
    if (biciesto) {
      document.querySelector("#pResult").innerHTML = "Es biciesto";
    } else {
      document.querySelector("#pResult").innerHTML = "No es biciesto";
    }
  } else {
    document.querySelector("#pResult").innerHTML = "Ingrese un año valido";
  }
}

function validarBiciesto(año) {
  if (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
