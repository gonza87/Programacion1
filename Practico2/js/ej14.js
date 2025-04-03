/* Utilizando un plan de viajero frecuente, un cliente de una aerolínea desea consultar donde puede viajar gratis con las millas acumuladas hasta el momento.
Las opciones son las siguientes:
60.000 millas - Europa (destino lejano)
30.000 millas - América del Norte (destino intermedio)
15.000 millas — América del Sur (destino cercano)
Si el viajero es parte del plan "Plus" sus millas rinden el doble.
Dado un ingreso de millas acumuladas y el ingreso de si es parte del plan Plus (s-sí, n-no), indicarle al usuario cual es el destino más lejano al que puede viajar de manera gratuita, o indicarle  que no dispone de millas suficientes en caso que no alcance los mínimos.
Tengo 17.000 millas y soy parte del plan plus - > puedo viajar a América del Norte como destino más lejano. */

document.querySelector("#btnShow").addEventListener("click", showResult);
function showResult() {
  let selectPlan;
  let millas;
  let msj;

  selectPlan = document.querySelector("#slt").value;
  millas = Number(document.querySelector("#nbr").value);

  if (selectPlan === "s") {
    if (millas * 2 >= 60000) {
      msj = "Puede viajar a EUROPA como destino más lejano";
    } else if (millas * 2 >= 30000) {
      msj = "Puede viajar a AMERICA DEL NORTE como destino más lejano";
    } else if (millas * 2 >= 15000) {
      msj = "Puede viajar a AMERICA DEL SUR como destino más lejano";
    } else {
      msj = "NO dispone de millas suficientes";
    }
  } else {
    if (millas >= 60000) {
      msj = "Puede viajar a EUROPA como destino más lejano";
    } else if (millas >= 30000) {
      msj = "Puede viajar a AMERICA DEL NORTE como destino más lejano";
    } else if (millas >= 15000) {
      msj = "Puede viajar a AMERICA DEL SUR como destino más lejano";
    } else {
      msj = "NO dispone de millas suficientes";
    }
  }

  document.querySelector("#pResult").innerHTML = msj;
}
