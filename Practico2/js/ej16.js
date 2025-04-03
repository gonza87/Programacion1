/* Escribir una expresión condicional equivalente, sin la utilización de condicionales if anidados (utilizar un solo if):

  if( a > b )
  {
    if( a > c )
    {
        document.querySelector(“#parrafo”).innerHTML = “a es el mayor de los 3”;
    }
  }
Crear las variables, asignarles valores y probar la nueva solución. */

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  let a, b, c, result;
  a = Number(document.querySelector("#nbrA").value);
  b = Number(document.querySelector("#nbrB").value);
  c = Number(document.querySelector("#nbrC").value);

  if (a > b && a > c) {
    document.querySelector("#pResult").innerHTML = "a es el mayor de los 3";
  } else {
    document.querySelector("#pResult").innerHTML = "a no es el mayor de los 3";
  }
}
