document
  .querySelector("#btnVerificar")
  .addEventListener("click", puntajeDeEquipo);

let acumuladoE1 = 0;
let acumuladoE2 = 0;

function puntajeDeEquipo() {
  let equipo1 = Number(document.querySelector("#equipo1").value);
  let equipo2 = Number(document.querySelector("#equipo2").value);
  let resultado = document.querySelector("#pResultado");

  
  if (equipo1 < 0) {
    acumuladoE1 += equipo1 * -1;
  } else {
    acumuladoE1 += equipo1;
  }

  if (equipo2 < 0) {
    acumuladoE2 += equipo2 * -1;
  } else {
    acumuladoE2 += equipo2;
  }

  resultado.innerHTML = `Equipo 1 = ${acumuladoE1}<br> Equipo 2 = ${acumuladoE2}`;

  if (acumuladoE1 >= 30 && acumuladoE1 > acumuladoE2) {
    resultado.innerHTML = `El equipo 1 gano con ${acumuladoE1}<br> El equipo 2 perdio con ${acumuladoE2}`;
    document.querySelector("#btnVerificar").setAttribute("value", "Finalizado");
    document
      .querySelector("#btnVerificar")
      .setAttribute("disabled", "disabled");
    document.querySelector("#equipo2").setAttribute("disabled", "disabled");
    document.querySelector("#equipo1").setAttribute("disabled", "disabled");
  }

  if (acumuladoE2 >= 30 && acumuladoE2 > acumuladoE1) {
    resultado.innerHTML = `El equipo 2 gano con ${acumuladoE2}<br> El equipo 1 perdio con ${acumuladoE1}`;
    document.querySelector("#btnVerificar").setAttribute("value", "Finalizado");
    document
      .querySelector("#btnVerificar")
      .setAttribute("disabled", "disabled");
    document.querySelector("#equipo2").setAttribute("disabled", "disabled");
    document.querySelector("#equipo1").setAttribute("disabled", "disabled");
  }
}
