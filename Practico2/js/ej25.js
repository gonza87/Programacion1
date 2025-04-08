/* Programar un sistema que administrará pedidos de compras de cámaras fotográficas. 
Al inicio de la aplicación se ingresa el stock inicial de cámaras disponibles para la venta. A continuación se comienzan a recibir solicitudes de pedidos del producto. El cliente ingresará su nombre y a continuación la cantidad de unidades que desea. 
Mientras haya stock disponible se seguirán procesando solicitudes. 
Si el pedido supera la cantidad de stock disponible restante, se deberá informar del problema y esa solicitud no se tendrá en cuenta. 
Al vaciar el stock, deshabilitar el botón de compra. 
Informar el nombre del cliente que compró más cantidad de cámaras en un pedido. 
Informar la cantidad de pedidos que se procesaron en total. */

let stockInicial;
let maxCantidadUnidades = 0;
let contPedidos = 0;
let nomCliente;
let msj;

document.querySelector("#btnShow").addEventListener("click", showResultStock);
document
  .querySelector("#btnShowComprar")
  .addEventListener("click", showResultComprar);
let cantUnidades;
function showResultStock() {
  if (stockInicial === undefined) {
    stockInicial = Number(document.querySelector("#nbrStock").value);

    document.querySelector("#nbrStock").setAttribute("disabled", "disabled");
    document.querySelector("#btnShow").setAttribute("disabled", "disabled");
    document
      .querySelector("#btnShowComprar")
      .removeAttribute("disabled", "disabled");

    document
      .querySelector("#txtNombre")
      .removeAttribute("disabled", "disabled");
    document
      .querySelector("#nbrCantidad")
      .removeAttribute("disabled", "disabled");
  }
}

function showResultComprar() {
  cantUnidades = Number(document.querySelector("#nbrCantidad").value);
  if (cantUnidades <= stockInicial) {
    contPedidos++;
    stockInicial -= cantUnidades;
    if (cantUnidades > maxCantidadUnidades) {
      maxCantidadUnidades = cantUnidades;
      nomCliente = nomCliente = document.querySelector("#txtNombre").value;
      document.querySelector("#txtNombre").value = "";
      document.querySelector("#nbrCantidad").value = "";
    }
    if (stockInicial === 0) {
      console.log("stock cero");
      document
        .querySelector("#btnShowComprar")
        .setAttribute("disabled", "disabled");
      document.querySelector("#txtNombre").value = "";
      document.querySelector("#nbrCantidad").value = "";
      document.querySelector("#txtNombre").setAttribute("disabled", "disabled");
      document
        .querySelector("#nbrCantidad")
        .setAttribute("disabled", "disabled");

      document.querySelector(
        "#pResult"
      ).innerHTML = `Cliente que compró más cantidad: ${nomCliente}<br> Cantidad de pedidos Procesados: ${contPedidos}`;
    }
  } else {
    document.querySelector("#nbrCantidad").value = "";
    msj = document.querySelector(
      "#pResult"
    ).innerHTML = `Stock incorrecto vuelva a ingresar un stock`;
  }
}
