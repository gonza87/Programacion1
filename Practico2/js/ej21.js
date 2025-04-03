/* Una empresa de bienes raíces ofrece casas de interés social, bajo las siguientes condiciones: Si los ingresos del comprador son menores de $20.000, el primer pago será del 15% de costo de la casa y el resto se distribuirá en pagos mensuales a pagar en 7 años. Si los ingresos del comprador son de $20.000 o más la cuota inicial será del 30% del costo de la casa y el resto se distribuirá en pagos mensuales durante 1 año. La empresa quiere obtener cuánto debe pagar un comprador por concepto del primer pago y cuánto por cada pago parcial */

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult() {
  let money;
  let priceHouse;
  let first;
  let subTotal;
  let month;
  money = Number(document.querySelector("#nbr2").value);
  priceHouse = Number(document.querySelector("#nbr1").value);

  if (money < 20000) {
    first = (priceHouse * 15) / 100;
    //console.log(first)
    subTotal = priceHouse - first;
    //console.log(subTotal)
    //console.log(subTotal/7)
    month = subTotal / 7 / 12;
    document.querySelector("#pResult").innerHTML = `Pago inicial: USD ${first} <br /> Pago mensual por 7 años: USD ${month}`;
  }else{
    first = (priceHouse * 30) / 100;
    subTotal = priceHouse - first;
    month = subTotal / 12;
    document.querySelector("#pResult").innerHTML = `Pago inicial: USD ${first} <br /> Pago mensual por 1 año: USD ${month}`;
  }
  

}
