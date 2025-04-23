/* Imprimir todos los números enteros del 20 al -30. */

document.querySelector("#btnShow").addEventListener("click", showNumbers);

function showNumbers(){
    console.log("click")
    let msj="";
    for(let i = 20; i >= -30; i--){
        msj += `${i} <br>`
    }
    document.querySelector("#pResult").innerHTML = msj;
}