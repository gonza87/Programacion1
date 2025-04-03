/* Escribir una expresión condicional equivalente a la que Se muestra, sin la utilización de condicionales if consecutivos (utilizar un solo if):

if( a < 0 )
  {
        document.querySelector(“#parrafo”).innerHTML = “a está fuera de rango”;
  }
if( a > 10 )
  {
        document.querySelector(“#parrafo”).innerHTML = “a está fuera de rango”;
  }

Crear las variables, asignarles valores y probar la nueva solución. */

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  let a = Number(document.querySelector("#nbrA").value);

  if (a < 0 || a > 10) {
    document.querySelector("#pResult").innerHTML = "a está fuera de rango";
  } else {
    document.querySelector("#pResult").innerHTML = "a está dentro del rango";
  }
}
