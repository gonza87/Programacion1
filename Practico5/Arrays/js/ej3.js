/* Ingresar números e ir incorporándolos a un array indexado mediante un botón.
 Para finalizar presionar otro botón y calcular el promedio de todos los números ingresados. */

document.querySelector("#btnIngresar").addEventListener("click", tomarNumeros);
document.querySelector("#btnMostrar").addEventListener("click", recorrerArray);
document.querySelector("#btnResetear").addEventListener("click", resetearArray);

let numeros = [];
let parrafo = document.querySelector("#pResult");
function tomarNumeros() {
  let num = Number(document.querySelector("#nbr").value);
  limpiar();
  if (!isNaN(num) && num > 0) {
    numeros.push(num);
  } else {
    parrafo.innerHTML = "Error";
  }
}

function limpiar() {
  document.querySelector("#nbr").value = "";
  parrafo.innerHTML = "";
}

function recorrerArray() {
  let resultado = calcularPromedio(numeros);
  if (resultado !== -1) {
    parrafo.innerHTML = "Promedio de los numeros es: " + resultado;
  } else {
    parrafo.innerHTML = "Error";
  }
}

function calcularPromedio(list) {
  if (list.length > 0) {
    let acumu = 0;
    for (let i = 0; i < list.length; i++) {
      acumu += list[i];
    }
    return acumu / list.length;
  } else {
    return -1;
  }
}

function resetearArray() {
  if (numeros.length > 0) {
    numeros = [];
    parrafo.innerHTML = "Array reseteado correctamente";
  }
}
