/* Un hotel termal tiene una promoción. Si el cliente se hospeda por un mínimo de 3 noches, recibe una noche de alojamiento de regalo. Si se hospeda por 7 noches o más recibe dos noches de alojamiento de regalo, pero además si paga con tarjeta de crédito en este último caso se le regala la tercera noche de alojamiento. El costo de cada noche de alojamiento es de $ 40.
Dado un ingreso de cantidad de noches a alojarse y medio de pago (e-efectivo, t-tarjeta), indicarle al usuario cuantas noches son las que tiene de regalo, cuantos son los días que se va a poder alojar en total y cuál es el monto final a pagar. Se deben contemplar todos los casos, incluso los que no generan días gratis.
Ej.: 9 noches pagadas con tarjeta -> hay 3 noches de regalo, el usuario se hospeda 12 noches, el costo total son $ 360. */

document.querySelector("#btnShow").addEventListener("click", shorResult);

function shorResult() {
  let cantNoches;
  let totalNoches;
  let nochesRegalo = 0;
  let medioPago;
  let msj;
  let totalPago;

  cantNoches = Number(document.querySelector("#nbr").value);
  medioPago = document.querySelector("#selct").value;

  if (cantNoches >= 3 && cantNoches < 7) {
    nochesRegalo = 1;
    totalNoches = cantNoches + nochesRegalo;
    totalPago = cantNoches * 40;
  } else if (cantNoches >= 7) {
    if (medioPago === "Tarjeta") {
      nochesRegalo = 3;
    } else {
      nochesRegalo = 2;
    }

    totalNoches = cantNoches + nochesRegalo;
    totalPago = cantNoches * 40;
  } else {
    totalPago = cantNoches * 40;
  }
  msj = `${cantNoches} noches pagadas con ${medioPago} <br> Hay ${nochesRegalo} noches de regalo <br> El cliente se hospeda ${totalNoches} noches <br> El costo total son: $${totalPago}`;
  document.querySelector("#pResult").innerHTML = msj;
}

/* hospeda por un mínimo de 3 noches 1 noche mas
7 noches o más recibe dos noches de alojamiento de regalo,si paga con tarjeta de crédito en este último caso se le regala la tercera noche de alojamiento
El costo de cada noche de alojamiento es de $ 40. */
