/* Ingresar dos números y al presionar un botón mostrar todos los números entre esos dos números (inclusive).
Contemplar el caso que los números se ingresen invertidos (primero el mayor y después el menor). */

document.querySelector("#btnShow").addEventListener("click", showNumbers);

function showNumbers() {
  let nbr1 = Number(document.querySelector("#nbr1").value);
  let nbr2 = Number(document.querySelector("#nbr2").value);
  let msj = "";
  if (nbr1 > nbr2) {
    let aux;
    aux = nbr1;
    nbr1 = nbr2;
    nbr2 = aux;
  }

  for (let i = nbr1; i <= nbr2; i++) {
    msj += `${i} <br>`;
  }

  document.querySelector("#pResult").innerHTML = msj;
}
