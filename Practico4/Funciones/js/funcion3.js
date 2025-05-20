/* ⭐Crear una función calcularAreaTriangulo, que reciba como parámetro base y altura y devuelva el área del triángulo.
Se recomienda invocar posteriormente a esta función para verificar su correcto funcionamiento.
Se debe validar que ambos valores sean numéricos positivos, en caso contrario devolver -1. */

document.querySelector("#btnShow").addEventListener("click", tomarDatos);
function tomarDatos() {
  let base = Number(document.querySelector("#nbr1").value);
  let altura = Number(document.querySelector("#nbr2").value);
  let area = calcularArea(base, altura);
  if (area !== -1) {
    document.querySelector("#pResult").innerHTML = "Area: " + area;
  } else {
    document.querySelector("#pResult").innerHTML = "No se puede calcular Area";
  }
}

function calcularArea(base, altura) {
  if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
    return (base * altura) / 2;
  } else {
    return -1;
  }
}
