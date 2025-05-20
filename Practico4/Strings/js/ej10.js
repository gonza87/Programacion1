document.querySelector("#btnVerificar").addEventListener("click", encriptarTexto);

function encriptarTexto() {
    let texto = document.querySelector("#texto1").value;
    let mensaje = document.querySelector("#pMensaje");
    let resultado = 0;

    for (let i = 0; i < texto.length; i++) {
        let numero = texto.charAt(i);

        if (!isNaN(numero)) {
            resultado += Number(numero);
        }
    }

    mensaje.innerHTML = resultado;

}