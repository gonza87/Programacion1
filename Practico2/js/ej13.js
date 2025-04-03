/* Ingresar dos números y al presionar un botón indicar si el primero es múltiplo del segundo. */

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  let nbr1, nbr2, result;

  nbr1 = Number(document.querySelector("#nbr1").value);
  nbr2 = Number(document.querySelector("#nbr2").value);

  if (nbr1 % nbr2 === 0) {
    result = `El numero ${nbr1} es multiplo de ${nbr2}`;
  } else {
    result = "No es multiplo";
  }

  document.querySelector("#pResult").innerHTML = result;
}
