/* Imprimir todos los números múltiplos de 4 que hay entre -33 y 230. */

document.querySelector("#btnShow").addEventListener("click", showMultiples);

function showMultiples(){
    let i = -33;
    let msj = "";
    while(i <= 230){
        if(i % 4 === 0){
            msj += `${i} es multiplo de 4 <br>`
        }
        i++;
    }
    document.querySelector("#pResult").innerHTML = msj;
}