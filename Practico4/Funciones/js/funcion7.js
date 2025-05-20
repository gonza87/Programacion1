/* ⭐⭐Crear una función que reciba como parámetro un texto y lo devuelva invertido. */

document.querySelector("#btnShow").addEventListener("click", tomarTexto);

function tomarTexto(){
    let texto = document.querySelector("#txtTexto").value.trim();
    if(texto !== " " &&texto.length>1){
        document.querySelector("#pResult").innerHTML= invertirTexto(texto);
    }
    else{
        document.querySelector("#pResult").innerHTML= "Texto invalido";
    }

}

function invertirTexto(texto){
    let textoInvertido="";
    for(i = texto.length -1; i>=0; i--){
        textoInvertido+= texto.charAt(i);
    }
    return textoInvertido;
}