/* Imprimir todos los números múltiplos de 5 que hay entre 1 y 450 (inclusive). */

document.querySelector("#btnShow").addEventListener("click", showMultiple);

function showMultiple(){
    let msj = "";
    for(let i =1; i<=450; i++){
        if(i % 5 === 0){
           msj += `${i} es multiplo de 5 <br>`; 
        }
    }
    document.querySelector("#pResult").innerHTML = msj;
}