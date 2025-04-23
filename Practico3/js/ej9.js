/* Pedir dos números y utilizando solamente sumas y estructuras repetitivas, implementar el producto de esos dos números. */

document.querySelector("#btnShow").addEventListener("click", showProduct);

function showProduct(){
    console.log("click")
    let msj = "";
    let nbr1 = Number(document.querySelector("#nbr1").value);
    let nbr2 = Number(document.querySelector("#nbr2").value);
    let acumulador = 0;
    if (nbr1 > nbr2) {
        let aux;
        aux = nbr1;
        nbr1 = nbr2;
        nbr2 = aux;
      }

    for(let i = 1; i <= nbr2; i++){
          acumulador += nbr1;
    }
    document.querySelector("#pResult").innerHTML=acumulador;
}