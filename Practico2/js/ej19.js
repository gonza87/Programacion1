/* Ingresar cinco números. Indicar cuántos son múltiplos de 5, cuantos son mayores que 20 y cuantos cumplieron ambas condiciones en simultáneo.
La solución deberá utilizar un único campo de texto y un único botón */

let contNumIngresado = 0;

let contMultiplo5 = 0;
let contMayor20 = 0;
let contMultipleMayor = 0;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  let numero;
  numero = Number(document.querySelector("#nbr").value);
  if (contNumIngresado < 5) {
    contNumIngresado++;
    if (numero % 5 === 0) {
      contMultiplo5++;
    }
    if (numero > 20) {
      contMayor20++;
    }
    if (numero % 5 === 0 && numero > 20) {
      contMultipleMayor++;
    }
  } else {
    document.querySelector("#btnShow").setAttribute("disabled", "disabled");
    document.querySelector("#btnShow").setAttribute("value", "Finalizado");
    console.log("test");
  }

  document.querySelector(
    "#pResult"
  ).innerHTML = `Cantidad de multiplos de 5: ${contMultiplo5} <br/> Cantidad Mayores a 20: ${contMayor20} <br/> Cantidad ambas condiciones: ${contMultipleMayor} `;
}
