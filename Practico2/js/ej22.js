/* Una nueva ley descuenta un 4% al total de cada compra si el pago se efectúa con tarjeta de crédito o débito y el monto es inferior a los $10000. Dado un ingreso de total de compra y si es con tarjeta ("si" o "no"), calcular el total final de la compra.
Pago de $2000 con tarjeta, costo final -> $ 1920
Pago de $12000 con tarjeta, costo final -> $12000
Pago de $3000 sin tarjeta, costo final -> $3000 */

document.querySelector("#btnShow").addEventListener("click", showResult);

function showResult(){
    let importeCompra;
    let tarjeta;
    let total;

    importeCompra = Number(document.querySelector("#nbr1").value);
    tarjeta = document.querySelector("#slt").value;
    
    if (importeCompra < 10000 && tarjeta === "s"){
        total = importeCompra - ((importeCompra * 4) / 100);

    }
    else{
        total = importeCompra;
    }

    document.querySelector("#pResult").innerHTML = `Total a pagar: ${total}`;

}