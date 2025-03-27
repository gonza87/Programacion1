/* Ingresar dos valores y calcular la suma de ambos valores. Para operar aritméticamente con los dos valores debemos asegurarnos que sean valores numéricos. */
let number1;
let number2;
let result;

document.querySelector("#btnAdd").addEventListener("click", showResult);

function showResult() {
  number1 = Number(document.querySelector("#nbr1").value);
  number2 = Number(document.querySelector("#nbr2").value);
  result = number1 + number2;
  document.querySelector("#pResult").innerHTML = result;

}