/* ⭐⭐Pedir dos números y mostrar el producto de los números comprendidos entre ellos (inclusive). Sólo se realizarán pruebas donde el primer número sea menor al segundo, no es necesario controlarlo. */

document.querySelector("#btnShow").addEventListener("click", showProduct);

function showProduct(){
    let msj ="";
    let nbr1 = Number(document.querySelector("#nbr1").value);
    let nbr2 = Number(document.querySelector("#nbr2").value);
    let producto=1;
    if(nbr1 <= nbr2){
        for(let i = nbr1; i<=nbr2; i++){
            producto *= i;
        }

    }
    else{
        producto = "El primer numero debe ser menor al segundo"
    }
    document.querySelector("#pResult").innerHTML = producto
}