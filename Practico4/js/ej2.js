/* Solicitar un texto e indicar cuántas vocales presenta. */

document.querySelector("#btnShow").addEventListener("click", contarVocales);

function contarVocales(){
    let texto = document.querySelector("#txt").value;
    texto = texto.toLowerCase();
    let contVocal=0;
    for(let i=0; i < texto.length; i++){
        let letra = texto.charAt(i);
        if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
            contVocal++;
        }
    }
    document.querySelector("#pResult").innerHTML= contVocal;

}