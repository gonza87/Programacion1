/* Ingresar seis valores y retornar la suma total del valor absoluto de cada uno. Se deberá procurar que la solución utilice un único botón y un único campo de texto para tomar datos. */

document.querySelector("#btnShow").addEventListener("click", showResult);
let contIntentos = 0;
let acumuSuma = 0;

function showResult() {
  let pResult = document.querySelector("#pResult");
  let number;
  number = Number(document.querySelector("#nbr").value);
  contIntentos++;
  if (number < 0) {
    number *= -1;
  }
  acumuSuma += number;
  if (contIntentos === 6) {
    document.querySelector("#btnShow").setAttribute("value", "Finalizado");
    document.querySelector("#btnShow").setAttribute("disabled", "disabled");
    pResult.innerHTML = `Suma total absoluta: ${acumuSuma}`;
  }
}
