/* Ingresar un número y mostrar si es mayor que 10 y menor que 20 o no. */

let number;
let result;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  number = Number(document.querySelector("#nbr").value);
  if (number > 10 && number < 20) {
    result = `${number} es mayor a 10 y menor a 20`;
  } else {
    result = "El numero no es mayor que 10 ni menor a 20";
  }

  document.querySelector("#pResult").innerHTML = result;
}
