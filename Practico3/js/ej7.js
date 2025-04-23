/* Ingresar un número entre 2 y 50 y dibujar en pantalla una línea compuesta por guiones. La línea tendrá tantos guiones como el número ingresado. */

document.querySelector("#btnShow").addEventListener("click", show);

function show(){
    let msj="";
    let nbrIngresado = Number(document.querySelector("#nbr").value);
    if(nbrIngresado >1 && nbrIngresado <=50){
        for(let i=1; i<= nbrIngresado; i++){
            msj += "- ";
        }

    }
    else{
        msj = "Ingrese numero entre 2 y 50";
    }

    document.querySelector("#pResult").innerHTML = msj;
}