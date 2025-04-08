/* ⭐⭐Se van ingresando los sueldos de los empleados de una empresa y se quiere:
1. Obtener el total de los sueldos a pagar.
2. Saber cuántos empleados cobrarán este mes.
3. Mostrar el valor del sueldo más bajo */

let acumuSueldos = 0;
let contSueldos = 0;
let minSueldo;

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  let sueldoIngresado;
  sueldoIngresado = Number(document.querySelector("#nbr").value);
  acumuSueldos += sueldoIngresado;
  contSueldos++;
  if (minSueldo === undefined) {
    minSueldo = sueldoIngresado;
  } else if (sueldoIngresado < minSueldo) {
    minSueldo = sueldoIngresado;
  }

  document.querySelector(
    "#pResult"
  ).innerHTML = `Total de sueldos a pagar: ${acumuSueldos} <br/> Empleados a cobrar este mes: ${contSueldos} <br/> Sueldo minimo: ${minSueldo}`;
}
