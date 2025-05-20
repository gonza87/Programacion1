document.querySelector("#btnVerificar").addEventListener("click", encriptarTexto);

function encriptarTexto() {
    let texto = document.querySelector("#texto1").value;
    let mensaje = document.querySelector("#pMensaje");
    let resultado = " ";

    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charAt(i);

        switch(letra) {
            case "a": 
                resultado += "4";
                break;
            case "e": 
                resultado += "3";
                break;
            case "i": 
                resultado += "1";
                break;
            case "o": 
                resultado += "0";
                break;
            case "u": 
                resultado += "8";
                break;

            default: resultado += letra;
                break;
        }
    }

    mensaje.innerHTML = resultado;

}