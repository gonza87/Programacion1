/* Leer un caracter e indicar si es una vocal o no */

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  let letter;
  let result;
  letter = document.querySelector("#ltr").value.toLowerCase();

  switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      result = "Es vocal";
      break;
    default:
      result = "Caracter inválido o no es vocal";
      break;
  }

  document.querySelector("#pResult").innerHTML = result;
}
