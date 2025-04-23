/* ⭐Ingresar tres números y al presionar un botón mostrar todos los números múItiplos del tercero que están entre los dos primeros números, contemplar el caso que los dos primeros números se ingresen invertidos (primero el mayor y después el menor). */

document.querySelector("#btnShow").addEventListener("click", showProduct);

function showProduct(){
    let nbrInicio = Number(document.querySelector("#nbr1").value);
    let nbrFin = Number(document.querySelector("#nbr2").value);
    let nbr3 = Number(document.querySelector("#nbr3").value);
    let msj = "";

    if (nbrInicio > nbrFin) {
        let aux;
        aux = nbrInicio;
        nbrInicio = nbrFin;
        nbrFin = aux;
      }

    while(nbrInicio <= nbrFin){
        if(nbrInicio % nbr3 === 0){
            msj += `${nbrInicio} es multiplo de ${nbr3} <br>`
        }
        nbrInicio ++;
    }

    document.querySelector("#pResult").innerHTML = msj;

}